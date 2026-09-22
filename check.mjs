// Strojová kontrola responzivity a rozloženia nad _site/ (spusti po `node build.mjs`).
// Beží headless Chromium cez globálne nainštalovaný Playwright, vlastný statický server, žiadne závislosti v repe.
//   node check.mjs            – vzorka 12 dní na jazyk (jeden z každého mesiaca)
//   node check.mjs --all      – všetkých 366 dní × jazyk (pomalé, pred vydaním)
//   node check.mjs --days=30  – vlastná veľkosť vzorky
//   node check.mjs --all --sizes=320x568,375x812  – len vybrané veľkosti (rýchlejší úplný prechod)
// Čo overuje na každej veľkosti: žiadne vodorovné posúvanie, nič mimo obrazovky, plôšky na ťuknutie
// aspoň MIN_TAP, a denné stránky sa zmestia na jednu obrazovku (od FIT_W × FIT_H vyššie).
// Navyše: dialóg kalendára (po ťuknutí na dátum) sa nesmie orezať a jeho obsah musí byť dosiahnuteľný,
// a to aj pri zväčšenom písme (BIG_FONT) – vtedy sa kontroluje len orezanie, nie zmestenie na obrazovku.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { execSync } from "node:child_process";

const SITE = "https://mathers12.github.io/catholic_saints/"; // musí sedieť s build.mjs (404 sa naň odkazuje absolútne)
const ROOT = "_site";
const MIN_TAP = 24;          // px – najmenší rozmer klikateľného prvku
const FIT_W = 320, FIT_H = 568; // od tejto veľkosti sa denná stránka musí zmestiť bez posúvania
const BIG_FONT = 20;         // px – používateľ so zväčšeným písmom (predvolené je 16)
const ALL_SIZES = [[280, 600], [320, 568], [360, 640], [375, 812], [414, 896], [768, 1024], [1366, 768], [1920, 1080]];
const LANGS = ["sk", "en", "de"];
const CAL = { sk: "sk/kalendar", en: "en/calendar", de: "de/kalender" };

const arg = n => process.argv.find(a => a.startsWith(`--${n}=`))?.split("=")[1];
const all = process.argv.includes("--all");
const sample = Number(arg("days") || 12);
const SIZES = arg("sizes") ? arg("sizes").split(",").map(s => s.split("x").map(Number)) : ALL_SIZES;

if (!fs.existsSync(ROOT)) { console.error(`Chýba ${ROOT}/ – spusti najprv: node build.mjs`); process.exit(2); }

// Playwright býva nainštalovaný globálne (nie je závislosťou tohto repa).
async function playwright() {
  try { return await import("playwright"); } catch {}
  try {
    const g = execSync("npm root -g", { encoding: "utf8" }).trim();
    return await import(new URL("file://" + path.join(g, "playwright", "index.mjs")).href);
  } catch {}
  console.error("Chýba Playwright. Nainštaluj: npm i -g playwright");
  process.exit(2);
}

const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain" };
const server = http.createServer((req, res) => {
  let p = path.join(ROOT, decodeURIComponent(req.url.split("?")[0]));
  if (p.endsWith("/")) p += "index.html";
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, { "content-type": MIME[path.extname(p)] || "application/octet-stream" });
    res.end(data);
  });
});
await new Promise(r => server.listen(0, "127.0.0.1", r));
const BASE = `http://127.0.0.1:${server.address().port}`;

const feasts = fs.readdirSync(path.join(ROOT, "sk")).filter(d => /^\d\d-\d\d$/.test(d)).sort();
const days = all ? feasts : feasts.filter((_, i) => i % Math.ceil(feasts.length / sample) === 0);
const pages = [];
for (const l of LANGS) {
  pages.push({ url: `/${l === "sk" ? "" : l + "/"}`, day: true });
  for (const f of days) pages.push({ url: `/${l}/${f}/`, day: true });
  pages.push({ url: `/${CAL[l]}/`, day: false });
}
pages.push({ url: "/404.html", day: false });

const { chromium } = await playwright();
const browser = await chromium.launch();
const problems = [];
let checks = 0, fontsSeen = false;

for (const [w, h] of SIZES) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: w < 700, hasTouch: w < 700 });
  // 404 sa na štýly odkazuje absolútne na ostrý web – pri kontrole ich podstrč z lokálneho buildu
  await ctx.route(SITE + "**", async r => {
    let p = path.join(ROOT, decodeURIComponent(r.request().url().slice(SITE.length).split("?")[0]));
    if (!p || p.endsWith("/") || p === ROOT) p = path.join(p, "index.html");
    try { await r.fulfill({ body: fs.readFileSync(p), contentType: MIME[path.extname(p)] }); }
    catch { await r.fulfill({ status: 404, body: "404" }); }
  });
  const page = await ctx.newPage();
  for (const { url, day } of pages) {
    await page.goto(BASE + url, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => document.fonts.ready).catch(() => {});
    await page.waitForTimeout(80);
    const r = await page.evaluate(min => {
      const d = document.documentElement, W = d.clientWidth, out = { over: [], tiny: [], sw: d.scrollWidth, cw: W, sh: d.scrollHeight, ih: innerHeight };
      out.fonts = document.fonts.check('16px "Cormorant Garamond"');
      const name = el => el.tagName.toLowerCase() + (el.className ? "." + String(el.className).split(" ")[0] : "");
      for (const el of document.querySelectorAll("main *, dialog *")) {
        if (el.closest(".mtabs")) continue;              // zámerne posuvné do strán
        const b = el.getBoundingClientRect();
        if (!b.width && !b.height) continue;
        if (b.right > W + 1 || b.left < -1) out.over.push(`${name(el)} [${Math.round(b.left)},${Math.round(b.right)}]`);
        if (el.matches("a, button, select, [role=button]") && Math.min(b.width, b.height) < min)
          out.tiny.push(`${name(el)} ${Math.round(b.width)}×${Math.round(b.height)}`);
      }
      return out;
    }, MIN_TAP);
    fontsSeen ||= r.fonts;
    const at = `${w}×${h} ${url}`;
    checks++;
    if (r.sw > r.cw + 1) problems.push(`${at}: vodorovné posúvanie (${r.sw} > ${r.cw})`);
    if (r.over.length) problems.push(`${at}: mimo obrazovky → ${[...new Set(r.over)].slice(0, 4).join(", ")}`);
    if (r.tiny.length) problems.push(`${at}: plôška menšia ako ${MIN_TAP} px → ${[...new Set(r.tiny)].slice(0, 4).join(", ")}`);
    if (day && w >= FIT_W && h >= FIT_H && r.sh > r.ih + 1) problems.push(`${at}: nezmestí sa na obrazovku (${r.sh} > ${r.ih})`);
  }

  // kalendár na mobile: karta sa celá zmestí na obrazovku a roluje sa jej vnútro (.mbody)
  if (w < 760 && h >= 480) {
    const cp = await ctx.newPage();
    for (const l of LANGS) {
      await cp.goto(`${BASE}/${CAL[l]}/`, { waitUntil: "domcontentloaded" });
      await cp.waitForTimeout(120);
      const r = await cp.evaluate(() => {
        const d = document.documentElement, card = document.querySelector(".card"), nav = document.querySelector("main > nav");
        const body = document.querySelector(".month.now .mbody, .month:target .mbody");
        if (!body) return { missing: true };
        body.scrollTop = body.scrollHeight;
        const last = body.querySelector("li:last-child");
        return { pageScrolls: d.scrollHeight > innerHeight + 1,
          cardBottom: Math.round(card.getBoundingClientRect().bottom), navBottom: Math.round(nav.getBoundingClientRect().bottom),
          vh: innerHeight, scrollable: body.scrollHeight > body.clientHeight + 1,
          endReached: !last || last.getBoundingClientRect().bottom <= body.getBoundingClientRect().bottom + 1 };
      });
      const at = `${w}×${h} /${CAL[l]}/`;
      checks++;
      if (r.missing) { problems.push(`${at}: chýba .mbody`); continue; }
      if (r.pageScrolls) problems.push(`${at}: roluje sa celá stránka, nie vnútro karty`);
      if (r.cardBottom > r.vh + 1) problems.push(`${at}: spodok karty mimo obrazovky (${r.cardBottom} > ${r.vh})`);
      if (r.navBottom > r.vh + 1) problems.push(`${at}: navigácia mimo obrazovky (${r.navBottom} > ${r.vh})`);
      if (r.scrollable && !r.endReached) problems.push(`${at}: vnútro sa nedá dorolovať na koniec`);
    }
    await cp.close();
  }

  // zväčšené písmo na celých stránkach: kontroluje sa len orezanie a presah, nie zmestenie na obrazovku
  {
    const bigPages = [...LANGS.map(l => `/${l === "sk" ? "" : l + "/"}`), ...LANGS.map(l => `/${CAL[l]}/`),
                      ...LANGS.flatMap(l => days.slice(0, 3).map(f => `/${l}/${f}/`))];
    const bp = await ctx.newPage();
    await bp.addInitScript(px => addEventListener("DOMContentLoaded",
      () => document.documentElement.style.fontSize = px + "px"), BIG_FONT);
    for (const url of bigPages) {
      await bp.goto(BASE + url, { waitUntil: "domcontentloaded" });
      await bp.waitForTimeout(80);
      const r = await bp.evaluate(min => {
        const d = document.documentElement, W = d.clientWidth, out = { over: [], tiny: [], sw: d.scrollWidth, cw: W };
        const name = el => el.tagName.toLowerCase() + (el.className ? "." + String(el.className).split(" ")[0] : "");
        for (const el of document.querySelectorAll("main *")) {
          if (el.closest(".mtabs")) continue;
          const b = el.getBoundingClientRect();
          if (!b.width && !b.height) continue;
          if (b.right > W + 1 || b.left < -1) out.over.push(`${name(el)} [${Math.round(b.left)},${Math.round(b.right)}]`);
          if (el.matches("a, button, select, [role=button]") && Math.min(b.width, b.height) < min)
            out.tiny.push(`${name(el)} ${Math.round(b.width)}×${Math.round(b.height)}`);
        }
        return out;
      }, MIN_TAP);
      const at = `${w}×${h} ${url} (písmo ${BIG_FONT}px)`;
      checks++;
      if (r.sw > r.cw + 1) problems.push(`${at}: vodorovné posúvanie (${r.sw} > ${r.cw})`);
      if (r.over.length) problems.push(`${at}: mimo obrazovky → ${[...new Set(r.over)].slice(0, 4).join(", ")}`);
      if (r.tiny.length) problems.push(`${at}: plôška menšia ako ${MIN_TAP} px → ${[...new Set(r.tiny)].slice(0, 4).join(", ")}`);
    }
    await bp.close();
  }

  // dialóg kalendára po ťuknutí na dátum – pri bežnom aj zväčšenom písme
  for (const font of [0, BIG_FONT]) {
    for (const l of LANGS) {
      const dp = await ctx.newPage();
      if (font) await dp.addInitScript(px => addEventListener("DOMContentLoaded",
        () => document.documentElement.style.fontSize = px + "px"), font);
      await dp.goto(`${BASE}/${l}/09-22/`, { waitUntil: "domcontentloaded" });
      await dp.waitForTimeout(250);
      const opened = await dp.evaluate(() => { const d = document.getElementById("date"); if (!d) return false; d.click(); return true; });
      await dp.waitForTimeout(250);
      const r = await dp.evaluate(() => {
        const d = document.getElementById("cal");
        if (!d || !d.open) return { skip: true };
        const b = d.getBoundingClientRect(), cs = getComputedStyle(d);
        return { top: Math.round(b.top), bottom: Math.round(b.bottom), vh: innerHeight,
          hidden: d.scrollHeight > d.clientHeight + 1, scrollable: /auto|scroll/.test(cs.overflowY),
          sh: d.scrollHeight, ch: d.clientHeight };
      });
      const at = `${w}×${h} /${l}/ dialóg${font ? ` (písmo ${font}px)` : ""}`;
      checks++;
      if (!opened || r.skip) problems.push(`${at}: dialóg sa neotvoril`);
      else {
        if (r.top < -1 || r.bottom > r.vh + 1) problems.push(`${at}: orezaný obrazovkou (${r.top}–${r.bottom} v ${r.vh})`);
        if (r.hidden && !r.scrollable) problems.push(`${at}: obsah sa nedá dorolovať (${r.sh} > ${r.ch})`);
        if (!font && r.hidden) problems.push(`${at}: obsah sa nezmestí bez posúvania (${r.sh} > ${r.ch})`);
      }
      await dp.close();
    }
  }
  await ctx.close();
}
await browser.close();
server.close();

if (!fontsSeen) console.warn("Pozor: písma z Google Fonts sa nenačítali, rozmery textu sú len približné.\n");
console.log(problems.length ? problems.join("\n") + "\n" : "");
console.log(`${SIZES.length} veľkostí × ${pages.length} stránok = ${checks} kontrol, nálezov: ${problems.length}`);
process.exit(problems.length ? 1 : 0);
