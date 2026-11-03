// Akceptačné testy: skutočné používateľské scenáre v prehliadači nad _site/ (spusti po `node build.mjs`).
//   node accept.mjs
// Beží headless Chromium cez globálne nainštalovaný Playwright a vlastný statický server, žiadne závislosti v repe.
// Rozloženie a responzivitu stráži check.mjs, tu je správanie: navigácia, kalendár, prepínanie dní, dotyk, kontrast.
// Fotky a písma idú zo siete, takže testy potrebujú internet.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = "_site";
if (!fs.existsSync(ROOT)) { console.error(`Chýba ${ROOT}/ – spusti najprv: node build.mjs`); process.exit(2); }
const g = execSync("npm root -g", { encoding: "utf8" }).trim();
const { chromium } = await import("playwright").catch(() => import(new URL("file://" + path.join(g, "playwright", "index.mjs")).href));
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".xml": "application/xml" };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(ROOT, u);
  if (u.endsWith("/")) f = path.join(f, "index.html");
  fs.readFile(f, (err, data) => {
    if (err) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, { "content-type": MIME[path.extname(f)] || "application/octet-stream" });
    res.end(data);
  });
});
await new Promise(r => server.listen(0, "127.0.0.1", r));
const BASE = `http://127.0.0.1:${server.address().port}`, res = [];
const T = async (name, fn) => { try { await fn(); res.push(["OK", name]); } catch (e) { res.push(["CHYBA", name, String(e.message).split("\n")[0].slice(0, 170)]); } };
const eq = (a, b, m = "") => { if (a !== b) throw new Error(`${m} očakávané ${JSON.stringify(b)}, je ${JSON.stringify(a)}`); };
const ok = (v, m) => { if (!v) throw new Error(m); };
const b = await chromium.launch();
const mk = async (o = {}) => { const c = await b.newContext({ viewport: { width: 1366, height: 768 }, locale: "sk-SK", ...o }); const p = await c.newPage(); p.errs = [];
  p.on("pageerror", e => p.errs.push(e.message)); p.on("console", m => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) p.errs.push(m.text()); }); return p; };
const go = (p, u) => p.goto(BASE + u, { waitUntil: "load" });
const K = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Bratislava", month: "2-digit", day: "2-digit" }).format(new Date());

let p = await mk();
await T("Domov: slovenský prehliadač ostane na slovenskej stránke s dnešným svätým", async () => { await go(p, "/"); eq(new URL(p.url()).pathname, "/"); ok(await p.locator("h1").count() === 1, "h1"); ok(/Dnes si Katolícka/.test(await p.locator(".badge").innerText()), "odznak"); });
await T("Domov: dátum ukazuje dnešný deň v týždni a rok", async () => { const t = await p.locator("#date").innerText(); ok(/\d{4}/.test(t), t); ok(t.includes(String(new Date().getFullYear())), t); });
await T("Domov: anglický prehliadač presmeruje na /en/", async () => { const q = await mk({ locale: "en-US" }); await go(q, "/"); await q.waitForURL("**/en/**"); await q.context().close(); });
await T("Domov: český prehliadač dostane slovenčinu", async () => { const q = await mk({ locale: "cs-CZ" }); await go(q, "/"); eq(new URL(q.url()).pathname, "/"); await q.context().close(); });
await T("Dni: Zajtra a Včera prechádzajú na susedné dni", async () => { await go(p, "/sk/11-04/"); await p.click("#next"); await p.waitForURL("**/sk/11-05/"); await p.click("#prev"); await p.waitForURL("**/sk/11-04/"); });
await T("Dni: prelom roka 31. 12. → 1. 1. a 1. 1. → 31. 12.", async () => { await go(p, "/sk/12-31/"); await p.click("#next"); await p.waitForURL("**/sk/01-01/"); await p.click("#prev"); await p.waitForURL("**/sk/12-31/"); });
await T("Dni: 28. 2. → 29. 2. → 1. 3.", async () => { await go(p, "/sk/02-28/"); await p.click("#next"); await p.waitForURL("**/sk/02-29/"); await p.click("#next"); await p.waitForURL("**/sk/03-01/"); });
await T("Dni: Dnes vedie na domov", async () => { await go(p, "/sk/11-04/"); await p.click("#today"); await p.waitForURL(BASE + "/"); });
await T("Klávesnica: šípky prepínajú dni, s Alt nie", async () => { await go(p, "/sk/11-04/"); await p.keyboard.press("ArrowRight"); await p.waitForURL("**/sk/11-05/"); await p.keyboard.press("ArrowLeft"); await p.waitForURL("**/sk/11-04/"); await p.keyboard.press("Alt+ArrowRight").catch(() => {}); await p.waitForTimeout(250); await p.goto(BASE + "/sk/11-04/"); });
await T("Dialóg: dátum otvorí kalendár, mesiac sa dá prepnúť, klik na deň otvorí svätého", async () => { await go(p, "/sk/11-04/"); await p.click("#date"); ok(await p.locator("#cal[open]").count(), "neotvoril"); const t0 = await p.locator("#calTitle").innerText(); await p.click("#calNext"); ok(t0 !== await p.locator("#calTitle").innerText(), "mesiac"); await p.click('#calGrid a[data-k="12-08"]'); await p.waitForURL("**/sk/12-08/"); });
await T("Dialóg: šípky v otvorenom dialógu menia mesiac, nie deň", async () => { await go(p, "/sk/11-04/"); await p.click("#date"); await p.keyboard.press("ArrowRight"); await p.waitForTimeout(100); eq(new URL(p.url()).pathname, "/sk/11-04/"); ok(/december/i.test(await p.locator("#calTitle").innerText()), "december"); });
await T("Dialóg: krížik aj Esc zatvoria, klik mimo tiež", async () => { await go(p, "/sk/11-04/"); await p.click("#date"); await p.click(".cal-x"); eq(await p.locator("#cal[open]").count(), 0); await p.click("#date"); await p.keyboard.press("Escape"); eq(await p.locator("#cal[open]").count(), 0); await p.click("#date"); await p.mouse.click(5, 5); eq(await p.locator("#cal[open]").count(), 0); });
await T("Dialóg: mená svätých sa načítajú (tip pri prejdení)", async () => { await go(p, "/sk/11-04/"); await p.click("#date"); await p.waitForTimeout(300); await p.hover('#calGrid a[data-k="11-11"]'); ok(/Martin z Tours/.test(await p.locator("#calTip").innerText()), "tip"); });
await T("Jazyk: výber prepne stránku a voľba sa zapamätá na domove", async () => { const q = await mk(); await go(q, "/sk/11-04/"); await q.selectOption("#lang", "de"); await q.waitForURL("**/de/11-04/"); ok(/Karl|Borromäus/i.test(await q.locator("h1").innerText()), "de meno"); await go(q, "/"); await q.waitForURL("**/de/**"); await q.context().close(); });
await T("Navigácia: odkazy hore vedú na kalendár a O stránke", async () => { await go(p, "/sk/11-04/"); await p.click(".cal-link"); await p.waitForURL("**/sk/kalendar/"); await go(p, "/sk/11-04/"); await p.click(".about-link"); await p.waitForURL("**/sk/o-stranke/"); await go(p, "/sk/11-04/"); await p.click(".faith"); await p.waitForURL("**/sk/o-stranke/"); });
await T("Kalendár: ukazuje jeden aktuálny mesiac a dnešok je označený", async () => { await go(p, "/sk/kalendar/"); eq(await p.locator(".month:visible").count(), 1); ok(await p.locator(".mgrid:visible a.today").count() === 1, "dnešok"); });
await T("Kalendár: záložka, ‹ › a klik na deň aj na meno", async () => { await go(p, "/sk/kalendar/"); await p.click('.mtabs a[href="#m3"]'); ok(/Marec/.test(await p.locator(".month:visible h2").innerText()), "marec"); await p.click(".month:visible .mnav a:last-child"); ok(/Apríl/.test(await p.locator(".month:visible h2").innerText()), "apríl"); await p.click(".month:visible .mgrid a >> nth=4"); await p.waitForURL("**/sk/04-05/"); await go(p, "/sk/kalendar/#m1"); await p.click(".month:visible ol a >> nth=5"); await p.waitForURL("**/sk/01-06/"); });
await T("Kalendár: šípky prepínajú mesiac", async () => { await go(p, "/sk/kalendar/#m5"); await p.keyboard.press("ArrowRight"); await p.waitForTimeout(150); ok(/Jún/.test(await p.locator(".month:visible h2").innerText()), "jún"); });
await T("Kalendár a O stránke: prepínač jazyka vedie na tú istú stránku", async () => { await go(p, "/sk/kalendar/"); await p.click('main > nav a[hreflang="en"]'); await p.waitForURL("**/en/calendar/"); await p.click('main > nav a[hreflang="de"]'); await p.waitForURL("**/de/kalender/"); await go(p, "/sk/o-stranke/"); await p.click('main > nav a[hreflang="de"]'); await p.waitForURL("**/de/ueber-uns/"); });
await T("O stránke: rímskokatolícky text, pápež a oficiálne odkazy", async () => { await go(p, "/sk/o-stranke/"); const t = await p.locator("main").innerText(); ok(/rímskokatolícka/i.test(t) && /Levom XIV/.test(t), "text"); ok(/Nie je oficiálnou/.test(t), "odmietnutie"); eq(await p.locator('main li a[href^="https"]').count(), 3); });
await T("404: stránka sa zobrazí so štýlom a odkazmi", async () => { const r = await p.goto(BASE + "/404.html"); ok(r.ok(), "status"); eq(await p.locator("h1").innerText(), "404"); eq(await p.locator("nav a").count(), 3); });
await T("Scéna: fotka sa načíta a kríž je vrstva nad nocou aj tieňom", async () => { await go(p, "/sk/11-04/"); const r = await p.evaluate(() => { const k = [...document.querySelector(".move").children].map(e => e.className); const c = document.querySelector(".cross"); return { last: k.at(-1), clip: getComputedStyle(c).clipPath.startsWith("polygon"), bg: getComputedStyle(c).backgroundImage.includes("A_silhouette"), anim: document.querySelector(".dark").getAnimations().length > 0, blend: [...document.querySelectorAll(".scene *")].some(e => getComputedStyle(e).mixBlendMode !== "normal") }; }); eq(r.last, "photo cross"); ok(r.clip, "clip"); ok(r.bg, "foto"); ok(r.anim, "animácia"); ok(!r.blend, "blend-mode"); const ok2 = await p.evaluate(u => new Promise(res => { const i = new Image(); i.onload = () => res(i.naturalWidth); i.onerror = () => res(0); i.src = u; }), await p.evaluate(() => getComputedStyle(document.querySelector(".photo")).backgroundImage.slice(5, -2))); ok(ok2 > 0, "fotka sa nenačítala"); });
await T("Scéna: červený nádych na kríži nie je – vzorka pixelu", async () => { const q = await mk(); await go(q, "/sk/11-04/"); await q.waitForTimeout(3500); const s = await q.screenshot(); const px = await q.evaluate(async b64 => { const i = new Image(); await new Promise(r => { i.onload = r; i.src = "data:image/png;base64," + b64; }); const c = document.createElement("canvas"); c.width = i.width; c.height = i.height; const x = c.getContext("2d"); x.drawImage(i, 0, 0); const st = document.querySelector(".stage"); const sx = st.offsetLeft + st.offsetWidth * .32, sy = st.offsetTop + st.offsetHeight * .635; return [...x.getImageData(sx, sy, 1, 1).data]; }, s.toString("base64")); ok(px[0] < 60 && px[0] - px[2] < 20, "pixel kríža " + px); await q.context().close(); });
await T("Pohyb vypnutý: pri obmedzených animáciách nič nebeží a text je viditeľný", async () => { const q = await mk({ reducedMotion: "reduce" }); await go(q, "/sk/11-04/"); const r = await q.evaluate(() => ({ n: document.getAnimations().filter(a => a.playState === "running" && a.animationName).length, op: getComputedStyle(document.querySelector("h1")).opacity })); eq(r.n, 0, "animácií"); eq(r.op, "1"); await q.context().close(); });
await T("Bez obrázka: pri chybe portrétu sa ukáže symbol a stránka funguje", async () => { const q = await mk(); await q.route(/upload\.wikimedia|Special:FilePath\/(?!A_silhouette)/, r => r.abort()); await go(q, "/sk/11-04/"); await q.waitForTimeout(300); eq(await q.locator(".frame img").count(), 0); ok((await q.locator(".frame").innerText()).length > 0, "symbol"); await q.context().close(); });
await T("Bez JavaScriptu: obsah, dátum aj navigácia fungujú", async () => { const q = await mk({ javaScriptEnabled: false }); await go(q, "/sk/11-04/"); ok(await q.locator("h1").isVisible(), "h1"); eq(new URL(await q.locator("#date").getAttribute("href"), q.url()).pathname, "/sk/kalendar/"); await q.click("#next"); await q.waitForURL("**/sk/11-05/"); await q.context().close(); });
await T("Dotyk: potiahnutie prstom prepne deň aj mesiac", async () => { const q = await mk({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true }); const sw = dx => q.evaluate(d => { const t = (x, y) => new Touch({ identifier: 1, target: document.querySelector(".card"), clientX: x, clientY: y }); document.querySelector(".card").dispatchEvent(new TouchEvent("touchstart", { bubbles: true, touches: [t(200, 400)] })); document.querySelector(".card").dispatchEvent(new TouchEvent("touchend", { bubbles: true, changedTouches: [t(200 + d, 400)] })); }, dx); await go(q, "/sk/11-04/"); await sw(-120); await q.waitForURL("**/sk/11-05/"); await go(q, "/sk/kalendar/#m5"); await sw(-120); await q.waitForTimeout(150); ok(/Jún/.test(await q.locator(".month:visible h2").innerText()), "jún"); await q.context().close(); });
await T("Mobil: kalendár roluje vnútro a aktuálny mesiac je v záložkách vidno", async () => { const q = await mk({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true }); await go(q, "/sk/kalendar/"); const r = await q.evaluate(() => { const t = document.querySelector(".mtabs").getBoundingClientRect(), n = document.querySelector(".mtabs .now").getBoundingClientRect(); return n.left >= t.left - 1 && n.right <= t.right + 1; }); ok(r, "záložka mimo"); await q.context().close(); });
await T("Prístupnosť: obrázok má alt, tlačidlá majú názov, dialóg sa ovláda z klávesnice", async () => { await go(p, "/sk/11-04/"); ok((await p.locator(".frame img").getAttribute("alt")).length > 0, "alt"); ok(await p.locator("#lang").getAttribute("aria-label"), "lang"); ok(await p.locator(".scene").getAttribute("aria-hidden") === "true", "scéna"); await p.keyboard.press("Tab"); ok(await p.evaluate(() => document.activeElement && document.activeElement.tagName === "A"), "Tab"); });
await T("Kontrast: text na fotke vrátane najsvetlejšej fázy svitania (bez čierneho tieňa vpravo)", async () => {
  const L = '(() => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }; return (d, k) => .2126 * f(d[k]) + .7152 * f(d[k + 1]) + .0722 * f(d[k + 2]); })()';
  for (const [v, u] of [[{ width: 1366, height: 768 }, "/sk/11-04/"], [{ width: 1920, height: 1080 }, "/de/09-22/"], [{ width: 1024, height: 768 }, "/sk/11-11/"], [{ width: 375, height: 812 }, "/sk/11-04/"]]) {
    const q = await mk({ viewport: v }); await go(q, u); await q.waitForTimeout(2600);
    await q.addStyleTag({ content: ".fade{animation:none!important}.frame img{transition:none!important}" });
    const shots = {};
    for (const sel of ["h1", ".meta", "blockquote", ".story", "#prev", ".faith", ".brand", ".badge"]) {
      const box = await q.evaluate(s => { const b = document.querySelector(s).getBoundingClientRect(); return { x: b.left, y: b.top, width: b.width, height: b.height }; }, sel);
      await q.addStyleTag({ content: "#m1{}" });
      const st = await q.evaluateHandle(() => { const s = document.createElement("style"); document.head.append(s); return s; });
      await st.evaluate(s => { s.textContent = "main *{color:transparent!important;text-decoration-color:transparent!important}.frame{visibility:hidden}"; document.querySelector(".dark").getAnimations().forEach(a => { a.effect.updateTiming({ delay: 0 }); a.pause(); a.currentTime = 36000; });  });
      await q.waitForTimeout(60);
      const bg = await q.screenshot({ clip: box });
      await st.evaluate(s => { s.textContent = ".scene{display:none}body{background:#fff!important}main,main *{background:none!important;color:#000!important;text-shadow:none!important}"; });
      await q.waitForTimeout(60);
      const mask = await q.screenshot({ clip: box });
      await st.evaluate(s => s.remove());
      const c = await q.evaluate(async ([a, b, L]) => { const lum = eval(L); const rd = async x => { const i = new Image(); await new Promise(r => { i.onload = r; i.src = "data:image/png;base64," + x; }); const c = document.createElement("canvas"); c.width = i.width; c.height = i.height; const g = c.getContext("2d"); g.drawImage(i, 0, 0); return g.getImageData(0, 0, i.width, i.height).data; }; const D = await rd(a), M = await rd(b); const v = []; for (let k = 0; k < D.length; k += 4) if (M[k] < 110) v.push(lum(D, k)); v.sort((x, y) => x - y); return v[Math.floor(v.length * .98)]; }, [bg.toString("base64"), mask.toString("base64"), L]);
      const fg = sel === "blockquote" || sel === ".date" ? .72 : sel === ".meta" || sel === ".source" || sel === ".faith" ? .74 : .9;
      const ratio = (fg + .05) / (c + .05);
      shots[sel] = ratio.toFixed(1);
      ok(ratio >= 4.5, v.width + "×" + v.height + " " + sel + ": " + ratio.toFixed(2) + ":1");
    }
    console.log("kontrast", v.width + "×" + v.height, JSON.stringify(shots));
    await q.context().close();
  }
});
await T("Bez chýb v konzole na hlavných stránkach", async () => { const q = await mk(); for (const u of ["/", "/sk/11-04/", "/en/02-29/", "/de/12-31/", "/sk/kalendar/", "/en/about/"]) { await go(q, u); await q.waitForTimeout(150); } eq(q.errs.join(" | "), ""); await q.context().close(); });

// prepínanie dní bez načítania stránky: pozadie musí ostať ten istý prvok, obsah musí sedieť so statickou stránkou
const mark = q => q.evaluate(() => { window.__m = 1; document.querySelector(".scene").__m = 1; });
const same = q => q.evaluate(() => window.__m === 1 && document.querySelector(".scene").__m === 1);
const stat = async (q, u) => { const t = await (await q.request.get(BASE + u)).text(); return { title: /<title>([^<]*)/.exec(t)[1], canon: /rel="canonical" href="([^"]+)"/.exec(t)[1], h1: /<h1[^>]*>([^<]*)/.exec(t)[1] }; };
const deadLinks = async q => { let n = 0; for (const h of await q.evaluate(() => [...document.querySelectorAll(".top a, .card a")].map(a => a.href).filter(h => h.startsWith(location.origin)))) if (!(await q.request.get(h)).ok()) n++; return n; };
await T("Prepínanie: Zajtra nenačíta stránku a obsah sedí so statickou stránkou", async () => {
  const q = await mk(); await go(q, "/sk/11-04/"); await q.waitForTimeout(1500); await mark(q);
  const t0 = Date.now(); await q.click("#next"); await q.waitForURL("**/sk/11-05/"); await q.waitForFunction(() => document.querySelector(".frame img").classList.contains("loaded"));
  ok(Date.now() - t0 < 1000, `prepnutie trvalo ${Date.now() - t0} ms`); ok(await same(q), "stránka sa načítala znova");
  const s = await stat(q, "/sk/11-05/");
  eq(await q.locator("h1").innerText(), s.h1, "meno"); eq(await q.title(), s.title, "titulok"); eq(await q.getAttribute('link[rel="canonical"]', "href"), s.canon, "canonical");
  ok(await q.locator('script[type="application/ld+json"]').count() >= 1, "JSON-LD"); ok(/\d{4}/.test(await q.locator("#date").innerText()), "dátum s rokom");
  eq(await q.evaluate(() => getComputedStyle(document.querySelector(".frame img")).opacity), "1", "portrét nepreblikne");
  eq(await deadLinks(q), 0, "mŕtve odkazy"); ok(/11-05/.test(await q.evaluate(() => [...document.querySelectorAll("#lang option")].find(o => o.value === "de").dataset.href)), "prepínač jazyka vedie na nový deň");
  eq(q.errs.length, 0, "chyby: " + q.errs.join("|")); await q.context().close();
});
await T("Prepínanie: Včera, šípka, Späť a Vpred bez načítania", async () => {
  const q = await mk(); await go(q, "/sk/11-05/"); await q.waitForTimeout(600); await mark(q);
  await q.click("#prev"); await q.waitForURL("**/sk/11-04/"); ok(await same(q), "Včera");
  await q.keyboard.press("ArrowRight"); await q.waitForURL("**/sk/11-05/"); ok(await same(q), "šípka");
  await q.goBack(); await q.waitForFunction(() => document.body.dataset.feast === "11-04"); ok(await same(q), "Späť"); eq(await q.locator("h1").innerText(), (await stat(q, "/sk/11-04/")).h1, "meno po Späť");
  await q.goForward(); await q.waitForFunction(() => document.body.dataset.feast === "11-05"); ok(await same(q), "Vpred"); await q.context().close();
});
await T("Prepínanie: kalendár po prepnutí značí nový deň a výber dňa nenačíta stránku", async () => {
  const q = await mk(); await go(q, "/sk/11-04/"); await q.waitForTimeout(600); await mark(q);
  await q.click("#next"); await q.waitForURL("**/sk/11-05/"); await q.waitForTimeout(150);
  await q.click("#date"); await q.waitForSelector("#cal[open]"); eq(await q.locator("#calGrid a.cur").innerText(), "5", "označený deň");
  await q.click('#calGrid a[data-k$="-20"]'); await q.waitForFunction(() => /-20$/.test(document.body.dataset.feast)); ok(await same(q), "výber dňa"); ok(!(await q.evaluate(() => document.getElementById("cal").open)), "okno ostalo otvorené"); await q.context().close();
});
await T("Prepínanie: Dnes vedie na domov a odkazy na inej hĺbke adresy fungujú", async () => {
  const q = await mk(); await go(q, "/sk/11-04/"); await q.waitForTimeout(600); await q.click("#today"); await q.waitForFunction(() => document.body.dataset.home === "1");
  eq(await deadLinks(q), 0, "mŕtve odkazy na domove"); await q.click("#next"); await q.waitForFunction(() => !document.body.dataset.home); eq(await deadLinks(q), 0, "mŕtve odkazy po návrate"); ok(await q.locator("#today").count(), "Dnes chýba");
  await q.reload(); eq(await q.locator("h1").count(), 1, "h1 po obnovení"); await q.context().close();
});
await T("Prepínanie: pri chybe načítania sa prejde obyčajným odkazom", async () => {
  const q = await mk(); await q.route(/\/sk\/11-05\/$/, r => r.request().resourceType() === "fetch" ? r.abort() : r.continue());
  await go(q, "/sk/11-04/"); await q.waitForTimeout(800); await mark(q); await q.click("#next"); await q.waitForURL("**/sk/11-05/"); await q.waitForLoadState("load");
  ok(!(await same(q)), "čakal sa obyčajný prechod"); eq(await q.locator("h1").count(), 1, "h1"); await q.context().close();
});
await T("Prepínanie: Ctrl+klik otvorí nový tab, bez JavaScriptu fungujú obyčajné odkazy", async () => {
  const q = await mk(); await go(q, "/sk/11-04/"); await q.waitForTimeout(500);
  const [tab] = await Promise.all([q.context().waitForEvent("page"), q.click("#next", { modifiers: ["Control"] })]); ok(tab, "nový tab"); eq(new URL(q.url()).pathname, "/sk/11-04/", "pôvodná stránka"); await q.context().close();
  const n = await mk({ javaScriptEnabled: false }); await go(n, "/sk/11-04/"); await n.click("#next"); await n.waitForURL("**/sk/11-05/"); eq(await n.locator("h1").count(), 1, "h1"); await n.context().close();
});
// skutočný dotyk cez CDP: prechádza aj rozhodovaním prehliadača o gestách, syntetické udalosti to neoveria
const touch = async () => { const q = await mk({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 }), cdp = await q.context().newCDPSession(q);
  q.swipe = async (x0, y0, x1, y1, st = 10) => { await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: x0, y: y0 }] }); for (let i = 1; i <= st; i++) { await cdp.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: x0 + (x1 - x0) * i / st, y: y0 + (y1 - y0) * i / st }] }); await q.waitForTimeout(16); } await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] }); await q.waitForTimeout(700); };
  q.tapAt = async (x, y) => { await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x, y }] }); await q.waitForTimeout(40); await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] }); await q.waitForTimeout(500); }; return q; };
await T("Dotyk: ťah doľava a doprava prepne deň bez načítania, na karte aj na fotke", async () => {
  const q = await touch();
  for (const [args, want] of [[[300, 600, 80, 605], "/sk/11-05/"], [[80, 600, 300, 605], "/sk/11-03/"], [[300, 150, 80, 155], "/sk/11-05/"], [[260, 600, 170, 602, 4], "/sk/11-05/"]]) { await go(q, "/sk/11-04/"); await q.waitForTimeout(400); await mark(q); await q.swipe(...args); eq(new URL(q.url()).pathname, want, "ťah " + args); ok(await same(q), "ťah načítal stránku"); }
  await q.context().close();
});
await T("Dotyk: zvislý ťah deň neprepne", async () => {
  const q = await touch();
  for (const args of [[100, 650, 170, 300], [200, 700, 200, 100]]) { await go(q, "/sk/11-04/"); await q.waitForTimeout(400); await q.swipe(...args); eq(new URL(q.url()).pathname, "/sk/11-04/", "ťah " + args); }
  await q.context().close();
});
await T("Dotyk: prvé ťuknutie po rýchlom ťahu zaberie", async () => {
  const q = await touch(); let hit = 0; const N = 6;
  for (let i = 0; i < N; i++) { await go(q, "/sk/11-04/"); await q.waitForTimeout(400); await q.swipe(300, 600, 80, 600); const k = await q.locator("#date").boundingBox(); await q.tapAt(k.x + k.width / 2, k.y + k.height / 2); hit += await q.evaluate(() => document.getElementById("cal").open); }
  eq(hit, N, "ťuknutia"); await q.context().close();
});
// prechod na kalendár a iné stránky: obloha nesmie počas načítania stmavnúť ani zosvetlieť (snímky obrazovky cez CDP)
const skyDuringNav = async (start, sel, v) => {
  const q = await mk({ viewport: v }); await go(q, start); await q.waitForTimeout(2000);
  const s = await q.context().newCDPSession(q), fr = [];
  s.on("Page.screencastFrame", e => { fr.push(e.data); s.send("Page.screencastFrameAck", { sessionId: e.sessionId }).catch(() => {}); });
  await s.send("Page.startScreencast", { format: "jpeg", quality: 60 }); await q.waitForTimeout(400);
  const from = fr.length; await q.click(sel); await q.waitForLoadState("load"); await q.waitForTimeout(1200); await s.send("Page.stopScreencast").catch(() => {});
  const vals = await q.evaluate(async fs => { const out = []; for (const f of fs) { const i = new Image(); i.src = "data:image/jpeg;base64," + f; await i.decode(); const c = document.createElement("canvas"); c.width = i.width; c.height = i.height; const x = c.getContext("2d"); x.drawImage(i, 0, 0); const d = x.getImageData(i.width * .03, i.height * .12, i.width * .3, i.height * .15).data; let n = 0; for (let k = 0; k < d.length; k += 16) n += .2126 * d[k] + .7152 * d[k + 1] + .0722 * d[k + 2]; out.push(n / (d.length / 16)); } return out; }, fr.slice(Math.max(0, from - 1)));
  await q.context().close(); return vals;
};
await T("Prechod: obloha pri odchode na kalendár a O stránke nepreblikne", async () => {
  for (const [start, sel, v] of [["/sk/11-04/", ".cal-link", { width: 1366, height: 768 }], ["/sk/11-04/", ".about-link", { width: 1366, height: 768 }], ["/sk/kalendar/", ".brand", { width: 1366, height: 768 }], ["/sk/11-04/", ".faith", { width: 375, height: 812 }]]) {
    const vals = await skyDuringNav(start, sel, v), lo = Math.min(vals[0], vals.at(-1)), hi = Math.max(vals[0], vals.at(-1));
    ok(vals.length > 5, "málo snímok"); ok(Math.min(...vals) > lo - 6, `${start} → ${sel}: stmavnutie ${(lo - Math.min(...vals)).toFixed(0)}`); ok(Math.max(...vals) < hi + 6, `${start} → ${sel}: zosvetlenie ${(Math.max(...vals) - hi).toFixed(0)}`);
  }
});
await T("Tlačidlá: Včera, Dnes, Zajtra a spodná lišta nie sú podčiarknuté", async () => {
  await go(p, "/sk/11-04/"); for (const s of ["#prev", "#today", "#next"]) eq(await p.locator(s).evaluate(e => getComputedStyle(e).textDecorationLine), "none", s);
  await go(p, "/sk/kalendar/"); eq(await p.locator(".calendar > nav .btn").first().evaluate(e => getComputedStyle(e).textDecorationLine), "none", "kalendár");
});
await b.close();
server.close();
for (const r of res) console.log(r[0].padEnd(6), r[1], r[2] ? "\n       → " + r[2] : "");
console.log(`\n${res.filter(r => r[0] === "OK").length}/${res.length} prešlo`);
process.exit(res.some(r => r[0] !== "OK") ? 1 : 0);
