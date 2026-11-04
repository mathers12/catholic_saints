// Strojová kontrola SEO nad _site/: titulok, popis, canonical, hreflang, jeden h1, platné JSON-LD,
// sitemap, rozbité odkazy a to, že preload fotky má presne tú istú adresu ako --photo v style.css
// (inak prehliadač stiahne pozadie dvakrát). Spúšťa sa po build.mjs: node build.mjs && node seo.mjs
import fs from "node:fs";
import path from "node:path";

const OUT = "_site";
// adresu webu vezmeme z robots.txt, nech je na jednom mieste
const site = (fs.readFileSync(`${OUT}/robots.txt`, "utf8").match(/Sitemap: (\S+)sitemap\.xml/) || [])[1];
const MAX_TITLE = 65, MAX_DESC = 160; // nad to Google titulok aj popis vo výsledkoch odreže
const SKIP = new Set(["sk/index.html"]); // presmerovanie na slovenskú domovskú, nie je to stránka

const html = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true }))
    e.isDirectory() ? walk(`${d}/${e.name}`) : e.name.endsWith(".html") && html.push(`${d}/${e.name}`);
})(OUT);

const bad = [];
const fail = (what, where) => bad.push(`${what}: ${where}`);
const one = (h, re) => (h.match(re) || [])[1] || "";
const urlOf = f => site + f.replace(`${OUT}/`, "").replace(/index\.html$/, "");
const exists = p => fs.existsSync(p) || fs.existsSync(`${p}/index.html`) || fs.existsSync(p.replace(/\/$/, "/index.html"));

const sitemap = fs.readFileSync(`${OUT}/sitemap.xml`, "utf8");
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const inSitemap = new Set(locs);

for (const f of html) {
  const rel = f.replace(`${OUT}/`, "");
  if (SKIP.has(rel)) continue;
  const h = fs.readFileSync(f, "utf8");
  const noindex = /name="robots" content="noindex"/.test(h);
  const title = one(h, /<title>(.*?)<\/title>/s), desc = one(h, /name="description" content="(.*?)"/s);

  if (!title) fail("bez titulku", rel);
  if (title.length > MAX_TITLE) fail(`titulok ${title.length} znakov`, rel);
  if (!desc) fail("bez popisu", rel);
  if (desc.length > MAX_DESC) fail(`popis ${desc.length} znakov`, rel);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) fail("nie je presne jeden h1", rel);
  if (!/<html lang="[a-z]{2}"/.test(h)) fail("bez lang na html", rel);

  for (const m of h.matchAll(/application\/ld\+json">(.*?)<\/script>/gs))
    try { JSON.parse(m[1]); } catch (e) { fail("rozbité JSON-LD", rel); }

  if (noindex) continue;
  const canonical = one(h, /rel="canonical" href="(.*?)"/);
  if (canonical !== urlOf(f)) fail(`canonical ${canonical || "chýba"} namiesto ${urlOf(f)}`, rel);
  if (!inSitemap.has(urlOf(f))) fail("nie je v sitemape", rel);
  if (!/max-image-preview:large/.test(h)) fail("bez max-image-preview", rel);

  // hreflang: každá jazyková verzia a x-default, a každá musí ukazovať na existujúcu stránku
  const alts = [...h.matchAll(/rel="alternate" hreflang="(.*?)" href="(.*?)"/g)].map(m => [m[1], m[2]]);
  const langs = alts.map(a => a[0]);
  for (const l of ["sk", "en", "de", "x-default"]) if (!langs.includes(l)) fail(`bez hreflang ${l}`, rel);
  for (const [l, href] of alts)
    if (!href.startsWith(site) || !exists(`${OUT}/${href.slice(site.length)}`)) fail(`hreflang ${l} vedie nikam (${href})`, rel);

  // vnútorné odkazy
  for (const m of h.matchAll(/(?:href|src)="([^"#:]+)"/g)) {
    const t = m[1];
    if (t.startsWith("data:") || t.startsWith("//")) continue;
    const abs = path.posix.normalize(`${path.posix.dirname(rel)}/${t.split("?")[0]}`);
    if (!exists(`${OUT}/${abs}`)) fail(`rozbitý odkaz ${t}`, rel);
  }
}

// sitemap: každá adresa existuje a nič neprebýva
for (const l of locs) if (!exists(`${OUT}/${l.slice(site.length)}`)) fail("sitemap ukazuje na neexistujúcu stránku", l);
if (!/hreflang="x-default"/.test(sitemap)) fail("sitemap bez x-default", "sitemap.xml");
if (!/<lastmod>/.test(sitemap)) fail("sitemap bez lastmod", "sitemap.xml");

// fotka pozadia: preload v HTML a --photo v CSS musia byť znak po znaku rovnaké
const css = fs.readFileSync(`${OUT}/style.css`, "utf8");
const cssPhotos = [...css.matchAll(/--photo: url\("([^"]+)"\)/g)].map(m => m[1]);
const page = fs.readFileSync(`${OUT}/sk/01-01/index.html`, "utf8");
const preloads = [...page.matchAll(/rel="preload" as="image" href="([^"]+)"/g)].map(m => m[1]);
if (!cssPhotos.length || !preloads.length) fail("fotka pozadia sa nenašla", "style.css / denná stránka");
for (const p of preloads) if (!cssPhotos.includes(p)) fail("preload nesedí s --photo v CSS, fotka sa stiahne dvakrát", p);
for (const p of cssPhotos) if (/Special:FilePath/.test(p)) fail("fotka ide cez presmerovanie, nie priamo na thumbnail", p);

console.log(`${html.length} stránok, ${locs.length} adries v sitemape, nálezov: ${bad.length}`);
for (const b of bad.slice(0, 40)) console.log(`  ${b}`);
if (bad.length > 40) console.log(`  … a ďalších ${bad.length - 40}`);
process.exit(bad.length ? 1 : 0);
