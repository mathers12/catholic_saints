// Generuje meniny.js: slovenské meniny potvrdené dvoma zdrojmi (spusti ručne, web ich načíta len pri build.mjs).
//   node tools/meniny.mjs
// Zdroje: stránky dní na slovenskej Wikipédii a Abalin. Berú sa len mená v oboch, pravopis podľa Wikipédie.
// Článok na Wikipédii sám upozorňuje, že nie je zosúladený s oficiálnym kalendáriom, preto samotnému neveríme.
import fs from "node:fs";

const UA = { "User-Agent": "SvatyDna-data/1.0 (https://mathers12.github.io/catholic_saints/)" };
const MES = ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"], LEN = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const pad = n => String(n).padStart(2, "0"), sleep = ms => new Promise(r => setTimeout(r, ms));
// zdroje sa nezhodli na žiadnom mene; rozhodol tretí zdroj (kalendar.aktuality.sk): Mário má 19. 1., Drahomíra 16. 7., Radomír 1. 3.
const DECIDED = { "01-19": "Mário", "02-29": "" };
const split = s => (s || "").replace(/\s+a\s+/g, ",").split(/[,;/]+/).map(x => x.trim()).filter(x => /^\p{Lu}\p{L}+$/u.test(x));
const plain = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const join = a => a.length < 2 ? a.join("") : `${a.slice(0, -1).join(", ")} a ${a.at(-1)}`;

const days = [];
MES.forEach((m, i) => { for (let d = 1; d <= LEN[i]; d++) days.push({ k: `${pad(i + 1)}-${pad(d)}`, t: `${d}. ${m}`, m: i + 1, d }); });

const wiki = {};
for (let i = 0; i < days.length; i += 40) {
  const b = days.slice(i, i + 40), u = "https://sk.wikipedia.org/w/api.php?" + new URLSearchParams({ format: "json", formatversion: "2", action: "query", prop: "revisions", rvprop: "content", rvslots: "main", titles: b.map(x => x.t).join("|") });
  for (const p of (await (await fetch(u, { headers: UA })).json()).query.pages) {
    const dd = b.find(x => x.t === p.title);
    const m = dd && p.revisions && /\{\{Deň v roku\|\d+\|?([^\n]*?)\}\}/.exec(p.revisions[0].slots.main.content);
    if (m) wiki[dd.k] = m[1].replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, "$1").replace(/''/g, "");
  }
  await sleep(400);
}

const abalin = {}, missing = [];
for (const dd of days) {
  for (let i = 0; i < 6 && !(dd.k in abalin); i++) {
    try {
      const r = await fetch(`https://nameday.abalin.net/api/V2/date?day=${dd.d}&month=${dd.m}`, { headers: UA, signal: AbortSignal.timeout(15000) });
      if (!r.ok) throw r.status;
      const j = await r.json(), x = j.data || j, sk = x.sk || (x.namedays && x.namedays.sk);
      if (sk !== undefined) abalin[dd.k] = String(sk);
      else throw "bez údajov";
    } catch (e) { await sleep(3000 * (i + 1)); }
  }
  if (!(dd.k in abalin)) missing.push(dd.k);
  await sleep(300);
}

const out = {}, none = [];
for (const dd of days) {
  if (dd.k in DECIDED) { if (DECIDED[dd.k]) out[dd.k] = DECIDED[dd.k]; continue; }
  const ab = split(abalin[dd.k]).map(plain), both = split(wiki[dd.k]).filter(n => ab.includes(plain(n)));
  if (both.length) out[dd.k] = join(both); else none.push(`${dd.k} (wiki: ${wiki[dd.k] || "-"}, abalin: ${abalin[dd.k] || "-"})`);
}
fs.writeFileSync("meniny.js", `// Generuje tools/meniny.mjs, neupravuj ručne. Slovenské meniny potvrdené dvoma zdrojmi.\nwindow.MENINY = ${JSON.stringify(out, null, 0).replace(/","/g, '",\n"')};\n`);
console.log(`dní s menami ${Object.keys(out).length} z ${days.length}, Abalin nedostupný pre: ${missing.join(" ") || "nič"}`);
console.log("bez mena:\n" + none.join("\n"));
