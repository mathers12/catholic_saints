// Strojová kontrola SEO nad _site/: titulok, popis, canonical, hreflang, jeden h1, platné JSON-LD,
// sitemap, rozbité odkazy a to, že preload fotky má presne tú istú adresu ako --photo v style.css
// (inak prehliadač stiahne pozadie dvakrát). Spúšťa sa po build.mjs: node build.mjs && node seo.mjs
import fs from "node:fs";
import path from "node:path";

const OUT = "_site";
// adresu webu vezmeme z robots.txt, nech je na jednom mieste
const site = (fs.readFileSync(`${OUT}/robots.txt`, "utf8").match(/Sitemap: (\S+)sitemap\.xml/) || [])[1];
const MAX_TITLE = 65, MAX_DESC = 160; // nad to Google titulok aj popis vo výsledkoch odreže
// priamo sa dá odkazať len na tieto šírky thumbnailov, iné Commons odmietne so 400
const STEPS = new Set([20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840]);
const thumbWidths = t => [...t.matchAll(/(?:thumb|upload)\.wikimedia\.org\/[^"'\s]*?\/(\d+)px-/g)].map(m => +m[1]);

const html = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true }))
    e.isDirectory() ? walk(`${d}/${e.name}`) : e.name.endsWith(".html") && html.push(`${d}/${e.name}`);
})(OUT);

const LANGS = ["sk", "en", "de"];
// úradný patronát sa smie oprieť len o Svätú stolicu (vatican.va) alebo KBS
const HOLY_SEE = /^https:\/\/(www\.vatican\.va|([a-z]+\.)?kbs\.sk)[/?]/;
const bad = [];
let stubs = 0, searchActions = 0;
const offCounts = [];
const fail = (what, where) => bad.push(`${what}: ${where}`);
const one = (h, re) => (h.match(re) || [])[1] || "";
const urlOf = f => site + f.replace(`${OUT}/`, "").replace(/index\.html$/, "");
const exists = p => fs.existsSync(p) || fs.existsSync(`${p}/index.html`) || fs.existsSync(p.replace(/\/$/, "/index.html"));

const css = fs.readFileSync(`${OUT}/style.css`, "utf8");
// Fonty hostujeme sami: v CSS sú v @font-face, v hlavičke stránky v preload, a musia sedieť,
// ináč prehliadač stiahne ten istý font dvakrát.
const cssFonts = new Set([...css.matchAll(/url\("(fonts\/[^"]+)"\)/g)].map(m => m[1]));

const sitemap = fs.readFileSync(`${OUT}/sitemap.xml`, "utf8");
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const inSitemap = new Set(locs);

for (const f of html) {
  const rel = f.replace(`${OUT}/`, "");
  const h = fs.readFileSync(f, "utf8");
  // Presmerovanie zo starej adresy (GitHub Pages nevie 301): má vlastné pravidlá, nie je to
  // stránka pre čitateľa. Musí viesť na existujúcu stránku, canonical musí byť tá istá adresa
  // a v sitemape nesmie byť, nech Google neindexuje dve adresy toho istého.
  const refresh = one(h, /http-equiv="refresh" content="0; url=([^"]+)"/);
  if (refresh) {
    stubs++;
    const t = path.posix.normalize(`${path.posix.dirname(rel)}/${refresh}`);
    const target = t === "./" ? "" : t; // koreň webu
    const canonical = one(h, /rel="canonical" href="(.*?)"/);
    if (!exists(`${OUT}/${target}`)) fail(`presmerovanie vedie nikam (${refresh})`, rel);
    else if (canonical !== `${site}${target}`) fail(`canonical ${canonical || "chýba"} nesedí s presmerovaním na ${target}`, rel);
    if (inSitemap.has(urlOf(f))) fail("presmerovanie je v sitemape", rel);
    continue;
  }
  const noindex = /name="robots" content="noindex"/.test(h);
  const title = one(h, /<title>(.*?)<\/title>/s), desc = one(h, /name="description" content="(.*?)"/s);

  if (!title) fail("bez titulku", rel);
  if (title.length > MAX_TITLE) fail(`titulok ${title.length} znakov`, rel);
  if (!desc) fail("bez popisu", rel);
  if (desc.length > MAX_DESC) fail(`popis ${desc.length} znakov`, rel);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) fail("nie je presne jeden h1", rel);
  if (!/<html lang="[a-z]{2}"/.test(h)) fail("bez lang na html", rel);

  for (const m of h.matchAll(/application\/ld\+json">(.*?)<\/script>/gs)) {
    let j = null;
    try { j = JSON.parse(m[1]); } catch (e) { fail("rozbité JSON-LD", rel); continue; }
    // hľadanie s dopytom v adrese: cieľ musí byť existujúca stránka a šablóna presne taká,
    // akú schema.org čaká – ináč je značka na nič
    const act = j.potentialAction || {};
    if (act["@type"] !== "SearchAction") continue;
    searchActions++;
    const t = (act.target || {}).urlTemplate || "";
    const base = t.replace(/\?q=\{search_term_string\}$/, "");
    if (base === t) fail(`SearchAction nemá v adrese ?q={search_term_string} (${t || "chýba"})`, rel);
    else if (!base.startsWith(site) || !exists(`${OUT}/${base.slice(site.length)}`)) fail(`SearchAction vedie nikam (${t})`, rel);
    if (act["query-input"] !== "required name=search_term_string") fail("SearchAction bez query-input", rel);
  }

  if (noindex) continue;
  const canonical = one(h, /rel="canonical" href="(.*?)"/);
  if (canonical !== urlOf(f)) fail(`canonical ${canonical || "chýba"} namiesto ${urlOf(f)}`, rel);
  if (!inSitemap.has(urlOf(f))) fail("nie je v sitemape", rel);
  if (!/max-image-preview:large/.test(h)) fail("bez max-image-preview", rel);
  // Special:FilePath vracia dve presmerovania; znamená to, že obrázok nemá šírku v imgs.js
  if (/Special:FilePath/.test(h)) fail("obrázok ide cez presmerovanie, spusti node tools/imgs.mjs", rel);
  for (const w of thumbWidths(h)) if (!STEPS.has(w)) fail(`nepovolená šírka thumbnailu ${w}px, Commons vráti 400`, rel);
  if (/fonts\.(googleapis|gstatic)\.com/.test(h)) fail("font z cudzej domény blokuje vykreslenie", rel);
  for (const m of h.matchAll(/<link rel="preload" as="font"[^>]*>/g)) {
    const href = (m[0].match(/href="([^"]+)"/) || [])[1] || "";
    if (!/crossorigin/.test(m[0])) fail(`preload fontu ${href} bez crossorigin, stiahne sa dvakrát`, rel);
    if (!cssFonts.has(href.replace(/^(\.\.\/)+/, ""))) fail(`preload ${href} nesedí so @font-face, font sa stiahne dvakrát`, rel);
  }

  // Úradné patronáty na stránke patrónov: každý odkaz musí viesť na Svätú stolicu a otvárať sa
  // bezpečne. Cudzí odkaz by znamenal, že sa do dát dostal zdroj, ktorý nič neúraduje.
  const offList = one(h, /<ul class="pat-off">([\s\S]*?)<\/ul>/);
  if (offList) {
    offCounts.push((offList.match(/<li>/g) || []).length);
    for (const m of offList.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)) {
      if (!HOLY_SEE.test(m[1])) fail(`úradný patronát s odkazom mimo Svätej stolice (${m[1]})`, rel);
      if (!/rel="noopener"/.test(m[2])) fail(`odkaz na dokument bez rel="noopener" (${m[1]})`, rel);
    }
  }

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
// Stará adresa dňa (/sk/11-04/) musí presmerovať na novú, ináč sa stratia existujúce odkazy
// aj to, čo má Google v indexe. Slug berieme z names.json, odtiaľ ho berie aj app.js.
for (const lang of LANGS) {
  const names = JSON.parse(fs.readFileSync(`${OUT}/${lang}/names.json`, "utf8"));
  for (const feast of Object.keys(names)) {
    const old = `${lang}/${feast}/`, slug = (names[feast] || [])[1];
    if (!slug) { fail("names.json bez adresy dňa", old); continue; }
    if (!fs.existsSync(`${OUT}/${old}index.html`)) { fail("stará adresa dňa nepresmerúva", old); continue; }
    const h = fs.readFileSync(`${OUT}/${old}index.html`, "utf8");
    const want = `${site}${lang}/${slug}/`;
    if (one(h, /rel="canonical" href="(.*?)"/) !== want) fail(`presmerovanie nevedie na ${want}`, old);
  }
}

// každý jazyk musí mať tie isté úradné patronáty; rozdielny počet znamená, že jeden o dáta prišiel
if (offCounts.length !== LANGS.length || new Set(offCounts).size !== 1 || !offCounts[0])
  fail(`úradné patronáty: na stránkach patrónov ${offCounts.join("/") || "0"} záznamov`, "patróni");

// SearchAction patrí na domovskú stránku každého jazyka; keby chýbala, nikto by sa nedozvedel,
// že hľadanie berie dopyt z adresy
if (searchActions !== LANGS.length) fail(`SearchAction je na ${searchActions} stránkach namiesto ${LANGS.length}`, "domovské stránky");

if (!cssFonts.size) fail("žiadny @font-face v CSS, fonty by išli z cudzej domény", "style.css");
for (const f of cssFonts) if (!fs.existsSync(`${OUT}/${f}`)) fail("font z @font-face sa do _site nedostal", f);
if (!/hreflang="x-default"/.test(sitemap)) fail("sitemap bez x-default", "sitemap.xml");
if (!/<lastmod>/.test(sitemap)) fail("sitemap bez lastmod", "sitemap.xml");

// fotka pozadia: preload v HTML a --photo v CSS musia byť znak po znaku rovnaké
const cssPhotos = [...css.matchAll(/--photo: url\("([^"]+)"\)/g)].map(m => m[1]);
const page = fs.readFileSync(`${OUT}/index.html`, "utf8"); // slovenská domovská je plnohodnotná denná stránka
const preloads = [...page.matchAll(/rel="preload" as="image" href="([^"]+)"/g)].map(m => m[1]);
if (!cssPhotos.length || !preloads.length) fail("fotka pozadia sa nenašla", "style.css / denná stránka");
for (const p of preloads) if (!cssPhotos.includes(p)) fail("preload nesedí s --photo v CSS, fotka sa stiahne dvakrát", p);
for (const p of cssPhotos) if (/Special:FilePath/.test(p)) fail("fotka ide cez presmerovanie, nie priamo na thumbnail", p);
for (const w of thumbWidths(css)) if (!STEPS.has(w)) fail(`nepovolená šírka fotky ${w}px, Commons vráti 400`, "style.css");

console.log(`${html.length - stubs} stránok, ${stubs} presmerovaní, ${locs.length} adries v sitemape, nálezov: ${bad.length}`);
for (const b of bad.slice(0, 40)) console.log(`  ${b}`);
if (bad.length > 40) console.log(`  … a ďalších ${bad.length - 40}`);
process.exit(bad.length ? 1 : 0);
