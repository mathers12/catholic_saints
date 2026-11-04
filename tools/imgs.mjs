// Generuje imgs.js: priame adresy obrázkov na Wikimedia Commons (spusti ručne po zmene `img` v saints.js).
//   node tools/imgs.mjs
// Načo to je: Special:FilePath zvládne akúkoľvek šírku, ale za cenu dvoch presmerovaní pri každom
// obrázku. Priamo sa odkázať dá, lenže adresa thumbnailu má niekoľko pravidiel, ktoré sa neuhádnu:
//   - povolené sú len štandardné šírky, iné Commons odmietne so 400 (zoznam STEPS v build.mjs),
//   - väčšia šírka, než je originál, tiež vráti 400, preto treba poznať šírku originálu,
//   - pri dlhom názve sa súbor thumbnailu volá len „<šírka>px-thumbnail.jpg“,
//   - súbor môže byť na Commons presmerovaný na iný názov, teda aj do iného adresára.
// Preto si adresy nerekonštruujeme, ale pýtame si ich z API (`iiurlwidth`) a ukladáme ako šablónu
// s `{w}` namiesto šírky. Šírku 20 px si pýtame preto, že je najmenšia povolená a menší obrázok
// na webe nie je, takže API vždy vráti skutočný thumbnail, nie originál.
import fs from "node:fs";
import vm from "node:vm";

const load = f => { const c = { window: {} }; vm.runInNewContext(fs.readFileSync(f, "utf8"), c); return c.window; };
const FILES = [...new Set(load("saints.js").SAINTS.map(s => s.img))].sort();
const UA = { "User-Agent": "SvatyDna-data/1.0 (https://mathers12.github.io/catholic_saints/)" };
const sleep = ms => new Promise(r => setTimeout(r, ms));

const get = async params => {
  const u = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({ format: "json", formatversion: "2", ...params });
  for (let i = 0; i < 5; i++) {
    const r = await fetch(u, { headers: UA });
    if (r.ok) return r.json();
    await sleep(4000 * (i + 1));
  }
  throw new Error("HTTP " + u.slice(0, 120));
};

// z adresy 20px thumbnailu urobí šablónu: .../{w}px-<názov>
const template = url => {
  const p = url.split("?")[0].split("/");
  p[p.length - 1] = p[p.length - 1].replace(/^\d+px-/, "{w}px-");
  return p.join("/");
};

const imgs = {}, problems = [];
for (let i = 0; i < FILES.length; i += 50) { // dávkovo po 50, inak príde HTTP 429
  const batch = FILES.slice(i, i + 50);
  const q = (await get({ action: "query", prop: "imageinfo", iiprop: "size|mime|url", iiurlwidth: "20",
    titles: batch.map(f => "File:" + f).join("|") })).query || {};
  const map = {};
  for (const n of [...(q.normalized || []), ...(q.redirects || [])]) map[n.from] = n.to;
  for (const p of q.pages || []) {
    const info = (p.imageinfo || [])[0];
    if (p.missing || !info) { problems.push(`${p.title}: na Commons neexistuje`); continue; }
    if (!/\/wikipedia\/commons\//.test(info.url)) { problems.push(`${p.title}: nie je priamo na Commons (${info.url})`); continue; }
    if (!info.thumburl || !/\/\d+px-/.test(info.thumburl)) { problems.push(`${p.title}: API nedalo thumbnail`); continue; }
    for (const f of batch) { let t = "File:" + f; while (map[t]) t = map[t]; if (t === p.title) imgs[f] = { w: info.width, t: template(info.thumburl), o: info.url.split("?")[0] }; }
  }
  await sleep(300);
}

for (const f of FILES) if (!imgs[f]) problems.push(`${f}: adresa sa nezistila`);
if (problems.length > FILES.length / 10) throw new Error("príliš veľa problémov, nič nezapisujem:\n" + problems.join("\n"));

fs.writeFileSync("imgs.js", "// Generuje tools/imgs.mjs z Wikimedia Commons, neupravuj ručne.\n"
  + "// Názov súboru -> { w: šírka originálu, t: šablóna thumbnailu s {w} namiesto šírky, o: originál }.\n"
  + `window.IMG = ${JSON.stringify(imgs, null, 0).replace(/,"/g, ',\n"')};\n`);
console.log(`obrázkov ${FILES.length}, s adresou ${Object.keys(imgs).length}, najmenší ${Math.min(...Object.values(imgs).map(x => x.w))} px`);
if (problems.length) console.log("problémy:\n" + problems.join("\n"));
