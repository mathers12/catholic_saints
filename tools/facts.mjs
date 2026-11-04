// Generuje facts.js: overené údaje o svätých z Wikipédie a Wikidata (spusti ručne, web ich načíta len pri build.mjs).
//   node tools/facts.mjs
// Svätý sa spáruje cez anglický názov a prijme sa, len ak je to človek so statusom svätého alebo sviatkom, meno sedí
// a roky života nesedia inak než o toleranciu. Patronáty idú len cez zoznam PATRONS nižšie, čo tam nie je, sa nepoužije.
import fs from "node:fs";
import vm from "node:vm";

const load = f => { const c = { window: {} }; vm.runInNewContext(fs.readFileSync(f, "utf8"), c); return c.window; };
const SAINTS = load("saints.js").SAINTS, EN = load("i18n/en.js").I18N_SAINTS;
const UA = { "User-Agent": "SvatyDna-data/1.0 (https://mathers12.github.io/catholic_saints/)" };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const get = async (host, params) => {
  const u = `https://${host}/w/api.php?` + new URLSearchParams({ format: "json", formatversion: "2", ...params });
  for (let i = 0; i < 5; i++) {
    const r = await fetch(u, { headers: UA });
    if (r.ok) return r.json();
    await sleep(4000 * (i + 1));
  }
  throw new Error("HTTP " + u.slice(0, 120));
};

// kategórie patrónov: regulárny výraz nad patronage z infoboxu anglickej Wikipédie, názvy v troch jazykoch
export const PATRONS = {
  students: [/\bstudents\b|schoolchildren|\bscholars\b/i, "študenti", "students", "Schüler und Studenten"],
  teachers: [/\bteachers\b|\beducators\b/i, "učitelia", "teachers", "Lehrer"],
  physicians: [/\bphysicians\b|\bdoctors\b/i, "lekári", "physicians", "Ärzte"],
  nurses: [/\bnurses\b/i, "zdravotné sestry", "nurses", "Pflegekräfte"],
  pharmacists: [/\bpharmacists\b/i, "lekárnici", "pharmacists", "Apotheker"],
  sick: [/\bsick\b|\bsickness\b|\bhospitals\b/i, "chorí", "the sick", "Kranke"],
  dying: [/\bdying\b/i, "umierajúci", "the dying", "Sterbende"],
  mothers: [/\bmothers\b/i, "matky", "mothers", "Mütter"],
  widows: [/\bwidows\b/i, "vdovy", "widows", "Witwen"],
  orphans: [/\borphans\b/i, "siroty", "orphans", "Waisen"],
  poor: [/\bpoor people\b|\bthe poor\b|\bpoverty\b/i, "chudobní", "the poor", "Arme"],
  prisoners: [/\bprisoners\b/i, "väzni", "prisoners", "Gefangene"],
  soldiers: [/\bsoldiers\b/i, "vojaci", "soldiers", "Soldaten"],
  sailors: [/\bsailors\b|\bmariners\b|\bboatmen\b|\bwatermen\b/i, "námorníci", "sailors", "Seeleute"],
  fishermen: [/\bfishermen\b/i, "rybári", "fishermen", "Fischer"],
  farmers: [/\bfarmers\b/i, "roľníci", "farmers", "Bauern"],
  shepherds: [/\bshepherds\b/i, "pastieri", "shepherds", "Hirten"],
  gardeners: [/\bgardeners\b/i, "záhradníci", "gardeners", "Gärtner"],
  animals: [/\banimals\b/i, "zvieratá", "animals", "Tiere"],
  travelers: [/\btravell?ers\b/i, "cestujúci", "travelers", "Reisende"],
  missionaries: [/\bmissionaries\b/i, "misionári", "missionaries", "Missionare"],
  preachers: [/\bpreachers\b/i, "kazatelia", "preachers", "Prediger"],
  confessors: [/\bconfessors\b/i, "spovedníci", "confessors", "Beichtväter"],
  theologians: [/\btheologians\b|\bphilosophers\b/i, "teológovia a filozofi", "theologians and philosophers", "Theologen und Philosophen"],
  writers: [/\bwriters\b|\bjournalists\b|\bcatholic press\b|\bpublishers\b/i, "spisovatelia a novinári", "writers and journalists", "Schriftsteller und Journalisten"],
  artists: [/\bartists\b|\bpainters\b/i, "umelci", "artists", "Künstler"],
  musicians: [/\bmusicians\b|\bsingers\b/i, "hudobníci", "musicians", "Musiker"],
  lawyers: [/\blawyers\b/i, "právnici", "lawyers", "Juristen"],
  builders: [/\bbuilders\b(?! of)|\bstonecutters\b|\bmasons\b/i, "stavitelia", "builders", "Bauleute"],
  bakers: [/\bbakers\b/i, "pekári", "bakers", "Bäcker"],
  butchers: [/\bbutchers\b/i, "mäsiari", "butchers", "Metzger"],
  brewers: [/\bbrewers\b/i, "pivovarníci", "brewers", "Bierbrauer"],
};
// ručne určený článok tam, kde sa názov líši alebo Wikidata osobu nevedie ako človeka so sviatkom; roky sa kontrolujú aj tu
const TRUST = { "01-23": "Ildefonsus", "02-25": "Saint Walpurga", "03-19": "Saint Joseph", "04-11": "Stanislaus of Szczepanów", "04-18": "Saint Galdino", "04-19": "Pope Leo IX", "04-23": "Adalbert of Prague",
  "05-01": "Saint Joseph", "05-05": "Gotthard of Hildesheim", "05-08": "Pope Boniface IV", "05-12": "Pancras of Rome", "05-14": "Matthias the Apostle", "06-01": "Justin Martyr", "07-03": "Thomas the Apostle", "07-20": "Apollinaris of Ravenna",
  "08-09": "Edith Stein", "08-18": "Helena, mother of Constantine I", "08-26": "Mariam Baouardy", "09-23": "Padre Pio", "09-24": "Gerard of Csanád", "10-06": "Bruno of Cologne", "10-14": "Pope Callixtus I", "11-10": "Pope Leo I",
  "11-15": "Albertus Magnus", "11-19": "Mechtilde of Hackeborn", "11-20": "Edmund the Martyr", "11-29": "Saturnin", "11-30": "Andrew the Apostle", "12-05": "Sabbas the Sanctified", "12-16": "Adelaide of Italy", "12-27": "John the Apostle" };
const MANY = /\b(and|&|companions|Martyrs of)\b/i;
const clean = n => n.replace(/^(St\.|Sts\.|Ss\.|Saint|Saints|Bl\.|Blessed|Pope)\s+/i, "").replace(/\s*\(.*?\)\s*/g, " ").trim();
const words = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z]+/).filter(w => w.length > 3 && !["saint", "pope", "blessed", "bishop"].includes(w));

const resolve = async titles => {
  const out = {};
  for (let i = 0; i < titles.length; i += 50) {
    const b = titles.slice(i, i + 50), q = (await get("en.wikipedia.org", { action: "query", titles: b.join("|"), redirects: "1", prop: "pageprops", ppprop: "wikibase_item|disambiguation" })).query || {}, map = {};
    for (const n of [...(q.normalized || []), ...(q.redirects || [])]) map[n.from] = n.to;
    for (const p of q.pages || []) {
      if (p.missing || !p.pageprops || p.pageprops.disambiguation !== undefined || !p.pageprops.wikibase_item) continue;
      for (const t of b) { let x = t; while (map[x]) x = map[x]; if (x === p.title) out[t] = { title: p.title, q: p.pageprops.wikibase_item }; }
    }
    await sleep(300);
  }
  return out;
};
const entities = async (ids, props) => {
  const out = {};
  for (let i = 0; i < ids.length; i += 50) { Object.assign(out, (await get("www.wikidata.org", { action: "wbgetentities", ids: ids.slice(i, i + 50).join("|"), props, languages: "sk|en|de" })).entities); await sleep(300); }
  return out;
};
const vals = (e, p) => ((e.claims || {})[p] || []).map(c => c.mainsnak.datavalue && c.mainsnak.datavalue.value).filter(Boolean);
const year = v => v && v.time ? +/^([+-]\d+)/.exec(v.time)[1] : null;
const patronage = t => {
  const m = /\|\s*patronage\s*=\s*([\s\S]*?)\n\s*\|\s*[a-z_ ]+\s*=/i.exec(t || "");
  return m ? m[1].replace(/<ref[\s\S]*?(<\/ref>|\/>)/g, "").replace(/<!--[\s\S]*?-->/g, "").replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, "$1") : "";
};

if (process.argv[1].endsWith("facts.mjs")) {
  const cand = SAINTS.filter(s => /^(sv|bl)\./.test(s.name) && EN[s.feast] && !MANY.test(EN[s.feast][0]) && !MANY.test(s.name)).map(s => ({ s, en: clean(EN[s.feast][0]) }));
  const a = await resolve(cand.map(c => "Saint " + c.en)), b = await resolve(cand.map(c => c.en));
  for (const c of cand) c.hit = a["Saint " + c.en] || b[c.en] || null;
  for (const c of cand) if (TRUST[c.s.feast]) c.hit = (await resolve([TRUST[c.s.feast]]))[TRUST[c.s.feast]];
  const ent = await entities([...new Set(cand.filter(c => c.hit).map(c => c.hit.q))], "claims|sitelinks");
  const dropped = [], ok = [];
  for (const c of cand) {
    if (!c.hit) { dropped.push(`${c.s.feast} ${c.en}: článok nenájdený`); continue; }
    const e = ent[c.hit.q], trust = TRUST[c.s.feast];
    if (!trust && !(vals(e, "P31").some(v => v.id === "Q5") && (vals(e, "P411").length || vals(e, "P841").length))) { dropped.push(`${c.s.feast} ${c.en}: ${c.hit.title} nie je svätý`); continue; }
    if (!trust && !words(c.en).some(w => words(c.hit.title).includes(w))) { dropped.push(`${c.s.feast} ${c.en}: ${c.hit.title} iné meno`); continue; }
    // roky zo saints.js proti Wikidata: tolerancia kvôli starým, nepresným dátumom
    const ys = (c.s.years.match(/\d{3,4}/g) || []).map(Number), died = ys.at(-1), born = ys.length > 1 ? ys[0] : null, wb = vals(e, "P569").map(year), wd = vals(e, "P570").map(year), tol = (died || 2000) < 1200 ? 40 : 6;
    if ((died && wd.length && !wd.some(y => Math.abs(y - died) <= tol)) || (born && wb.length && !wb.some(y => Math.abs(y - born) <= tol))) { dropped.push(`${c.s.feast} ${c.en}: ${c.hit.title} roky ${c.s.years} vs ${wb}/${wd}`); continue; }
    c.e = e; ok.push(c);
  }
  const places = await entities([...new Set(ok.flatMap(c => [...vals(c.e, "P19"), ...vals(c.e, "P20")].map(v => v.id)))], "labels");
  const label = (id, l) => { const x = places[id] && places[id].labels && places[id].labels[l]; return x ? x.value : undefined; };
  const texts = {};
  for (let i = 0; i < ok.length; i += 40) {
    for (const p of (await get("en.wikipedia.org", { action: "query", prop: "revisions", rvprop: "content", rvslots: "main", titles: ok.slice(i, i + 40).map(c => c.hit.title).join("|") })).query.pages) if (p.revisions) texts[p.title] = p.revisions[0].slots.main.content;
    await sleep(500);
  }
  const facts = {};
  for (const c of ok) {
    const sl = c.e.sitelinks || {}, wiki = {}, born = {}, died = {};
    for (const l of ["sk", "en", "de"]) {
      if (sl[l + "wiki"]) wiki[l] = sl[l + "wiki"].title;
      if (!/\d{3,4}/.test(c.s.years)) continue; // pri biblických postavách a neistom datovaní miesta neuvádzame
      const b0 = vals(c.e, "P19")[0], d0 = vals(c.e, "P20")[0];
      if (b0 && vals(c.e, "P19").length === 1 && label(b0.id, l)) born[l] = label(b0.id, l); // viac možností znamená spor v zdrojoch, vtedy nič
      if (d0 && vals(c.e, "P20").length === 1 && label(d0.id, l)) died[l] = label(d0.id, l);
    }
    const text = patronage(texts[c.hit.title]), patron = Object.keys(PATRONS).filter(k => PATRONS[k][0].test(text));
    facts[c.s.feast] = { wiki, born, died, patron };
  }
  const names = Object.fromEntries(Object.entries(PATRONS).map(([k, v]) => [k, v.slice(1)]));
  fs.writeFileSync("facts.js", `// Generuje tools/facts.mjs z Wikipédie a Wikidata, neupravuj ručne. Patróni: názvy sk, en, de.\nwindow.PATRON_NAMES = ${JSON.stringify(names)};\nwindow.FACTS = ${JSON.stringify(facts, null, 0).replace(/\},"/g, '},\n"')};\n`);
  console.log(`svätých ${SAINTS.length}, kandidátov ${cand.length}, prijatých ${ok.length}, s patrónom ${Object.values(facts).filter(f => f.patron.length).length}, wiki sk ${Object.values(facts).filter(f => f.wiki.sk).length}`);
  console.log("zamietnutí:\n" + dropped.join("\n"));
  console.log("kategórie:\n" + Object.keys(PATRONS).map(k => `${k} (${ok.filter(c => facts[c.s.feast].patron.includes(k)).length}): ${ok.filter(c => facts[c.s.feast].patron.includes(k)).map(c => c.s.name.replace(/^(sv|bl)\. /, "")).join(", ")}`).join("\n"));
}
