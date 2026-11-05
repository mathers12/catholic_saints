// Generuje statickú stránku do _site/: domovská stránka pre každý jazyk, 366 denných stránok × jazyk,
// kalendár, sitemap.xml a robots.txt. Spúšťa ho GitHub Actions pri pushi a každú noc (dnešný svätý na domovskej).
// Lokálne: node build.mjs && python -m http.server -d _site
import fs from "node:fs";
import vm from "node:vm";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const SITE = "https://mathers12.github.io/catholic_saints/"; // pri vlastnej doméne stačí zmeniť tu
const BRAND = "Sanctus diei";
const OUT = "_site";
const LANGS = ["sk", "en", "de"];
// meno pápeža na stránke „O stránke“ – pri novom pápežovi zmeň tu (sk, en, de)
const POPE = { sk: "Levom XIV.", en: "Pope Leo XIV", de: "Papst Leo XIV." };

// Verzia v odkaze na style.css a app.js podľa obsahu súboru: po zmene sa zmení URL, takže prehliadač
// nedrží starú verziu z cache. Bez toho návštevník vidí staré štýly, kým mu nevyprší cache.
const asset = f => `${f}?v=${crypto.createHash("sha1").update(fs.readFileSync(f)).digest("hex").slice(0, 8)}`;
const CSS = asset("style.css"), JS = asset("app.js");
// Fonty si hostujeme sami (fonts/), takže pred prvým textom netreba cudzí blokujúci stylesheet.
// Prednačítame tie tri rezy, ktoré sú na dennej stránke hneď vidieť (text, citát, nadpis);
// Spectral 500 je len na tlačidle Dnes a zvýraznenom dni v kalendári, ten počká. `as="font"` potrebuje
// `crossorigin`, ináč prehliadač stiahne súbor druhýkrát. Adresy musia sedieť s url() v style.css.
const FONTS = ["spectral-400.woff2", "spectral-400i.woff2", "marcellus-400.woff2"];
const PRELOAD_FONTS = rel => FONTS.map(f => `<link rel="preload" as="font" type="font/woff2" href="${rel}fonts/${f}" crossorigin>`).join("\n");
// Fotka pozadia je najväčší prvok stránky (LCP), preto na ňu odkazujeme priamo na thumbnail,
// nie cez Special:FilePath – to vracia dve presmerovania a zdržuje vykreslenie. Tá istá adresa
// musí byť v --photo v style.css (`seo.mjs` to kontroluje), ináč sa fotka stiahne dvakrát.
const PHOTO = w => `https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/A_silhouette_of_a_cross_at_sunrise_by_Aaron_Burden_%28Unsplash%29.jpg/${w}px-A_silhouette_of_a_cross_at_sunrise_by_Aaron_Burden_%28Unsplash%29.jpg`;

const load = f => { const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(f, "utf8"), ctx); return ctx.window; };
const SAINTS = load("saints.js").SAINTS;
const TR = { en: load("i18n/en.js").I18N_SAINTS, de: load("i18n/de.js").I18N_SAINTS };
const K = ["name", "title", "years", "quote", "source", "story"];
const saint = (lang, s) => lang === "sk" ? s : { ...s, ...Object.fromEntries(K.map((k, i) => [k, TR[lang][s.feast][i]])) };

const MONTHS = {
  sk: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
};
const MONTHS_NOM_SK = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"];
// v adrese a v hlavičke mesiaca je 1. pád („November“), vo vete dátumu genitív („4. novembra“)
const monthNom = (lang, i) => lang === "sk" ? MONTHS_NOM_SK[i] : MONTHS[lang][i];
const md = feast => feast.split("-").map(Number);
const dayText = (lang, feast) => { const [m, d] = md(feast); return lang === "en" ? `${MONTHS.en[m - 1]} ${d}` : `${d}. ${MONTHS[lang][m - 1]}`; };

const UI = {
  sk: { site: "Svätý dňa", every: "rímskokatolícky svätý na každý deň", prev: "‹ Včera", next: "Zajtra ›", today: "Dnes",
        prevL: "Predchádzajúci deň", nextL: "Nasledujúci deň", badgeToday: "Dnes si Katolícka cirkev pripomína", badgeDay: "V tento deň si Katolícka cirkev pripomína",
        cal: "Kalendár svätých", calSlug: "kalendar", calIntro: "Svätí a sviatky na každý deň roka podľa rímskokatolíckeho liturgického kalendára na Slovensku.",
        dayTitle: (n, dt) => `${n} – svätý dňa ${dt}`, prevM: "Predchádzajúci mesiac", nextM: "Nasledujúci mesiac", close: "Zavrieť", locale: "sk_SK", notFound: "Táto stránka neexistuje.", back: "Späť na svätého dňa",
        faith: "Rímskokatolícka stránka", about: "O stránke", aboutSlug: "o-stranke" },
  en: { site: "Saint of the Day", every: "a Roman Catholic saint for every day", prev: "‹ Yesterday", next: "Tomorrow ›", today: "Today",
        prevL: "Previous day", nextL: "Next day", badgeToday: "Today the Catholic Church remembers", badgeDay: "On this day the Catholic Church remembers",
        cal: "Calendar of Saints", calSlug: "calendar", calIntro: "Saints and feasts for every day of the year, following the Roman Catholic liturgical calendar.",
        dayTitle: (n, dt) => `${n} – Saint of the Day, ${dt}`, prevM: "Previous month", nextM: "Next month", close: "Close", locale: "en_US", notFound: "This page does not exist.", back: "Back to the saint of the day",
        faith: "Roman Catholic website", about: "About", aboutSlug: "about" },
  de: { site: "Heiliger des Tages", every: "ein römisch-katholischer Heiliger für jeden Tag", prev: "‹ Gestern", next: "Morgen ›", today: "Heute",
        prevL: "Vorheriger Tag", nextL: "Nächster Tag", badgeToday: "Heute gedenkt die katholische Kirche", badgeDay: "An diesem Tag gedenkt die katholische Kirche",
        cal: "Heiligenkalender", calSlug: "kalender", calIntro: "Heilige und Feste für jeden Tag des Jahres nach dem römisch-katholischen liturgischen Kalender.",
        dayTitle: (n, dt) => `${n} – Heiliger des Tages, ${dt}`, prevM: "Vorheriger Monat", nextM: "Nächster Monat", close: "Schließen", locale: "de_DE", notFound: "Diese Seite existiert nicht.", back: "Zurück zum Heiligen des Tages",
        faith: "Römisch-katholische Website", about: "Über uns", aboutSlug: "ueber-uns" },
};

// cesty (relatívne ku koreňu webu)
const homePath = lang => lang === "sk" ? "" : `${lang}/`;
// Adresa dňa nesie dátum aj meno svätého (/en/november-4-charles-borromeo/), takže v odkaze,
// v histórii prehliadača aj vo výsledku hľadania je hneď vidieť, o koho ide. Dátum je vpredu
// v poradí, aké má jazyk. Zo starých adries /sk/11-04/ ostávajú presmerovania (oldDayPath),
// lebo na ne vedú existujúce odkazy a Google ich má v indexe.
const TRANSLIT = { "ß": "ss", "æ": "ae", "œ": "oe", "ø": "o", "đ": "d", "ð": "d", "þ": "th", "ł": "l", "ı": "i" };
const UMLAUT = { "ä": "ae", "ö": "oe", "ü": "ue" }; // po nemecky sa prepisujú takto, ináč by z „Borromäus“ bolo „borromaus“
// „sv.“, „St.“, „Hl.“ a vysvetlivka v zátvorke („(Edita Steinová)“) do adresy nepatria
const DROP = /^(sv|bl|st|sts|hl|hll|sel)\.\s*|\s*\([^)]*\)/gi;
const slugify = (t, lang) => [...t.toLowerCase()].map(c => (lang === "de" && UMLAUT[c]) || TRANSLIT[c] || c).join("")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
// dlhé meno skrátime na celom slove, nech adresa ostane čitateľná
const cutSlug = (x, n = 50) => x.length <= n ? x : x.slice(0, x.lastIndexOf("-", n)).replace(/-+$/, "") || x.slice(0, n);
const daySlug = (lang, feast) => {
  const [m, d] = md(feast);
  const date = lang === "en" ? `${monthNom("en", m - 1)} ${d}` : `${d} ${monthNom(lang, m - 1)}`;
  const name = cutSlug(slugify(saint(lang, byFeast[feast]).name.replace(DROP, " "), lang));
  return `${slugify(date, lang)}${name ? `-${name}` : ""}`;
};
const dayPath = (lang, feast) => `${lang}/${daySlug(lang, feast)}/`;
const oldDayPath = (lang, feast) => `${lang}/${feast}/`;
const calPath = lang => `${lang}/${UI[lang].calSlug}/`;
const aboutPath = lang => `${lang}/${UI[lang].aboutSlug}/`;
const patPath = lang => `${lang}/${EXTRA[lang].patSlug}/`;
// Hľadanie drží dopyt v adrese (?q=), takže sa výsledky dajú poslať odkazom; SearchAction to
// isté hovorí strojom. Google síce vyhľadávacie okienko vo výsledkoch od 21. 11. 2024 neukazuje
// a značku už nepodporuje, ale je to platná schema.org a ostatné čítačky JSON-LD ju čítajú.
const searchTarget = lang => `${SITE}${calPath(lang)}?q={search_term_string}`;

const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
// Priamo sa dá odkazať len na tieto šírky thumbnailov, iné Commons odmietne so 400:
// https://www.mediawiki.org/wiki/Common_thumbnail_sizes
const STEPS = [20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840];
// Berieme najmenšiu povolenú šírku, ktorá pokryje požiadavku a zmestí sa do originálu (väčšia než
// originál tiež vracia 400); keď sa žiadna nezmestí, berieme originál. SVG sa vykreslí do PNG
// v akejkoľvek veľkosti, tam originál netreba. Samotné adresy prišli z Commons API (tools/imgs.mjs),
// nerekonštruujeme ich – presmerované súbory a dlhé názvy majú vlastné pravidlá. Pri neznámom
// obrázku (nespustené `node tools/imgs.mjs`) ostane Special:FilePath – pomalšie, ale funguje.
const imgUrl = (f, w) => {
  const i = IMG[f];
  if (!i) return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w}`;
  const step = STEPS.find(x => x >= w && (/\.svg$/i.test(f) || x < i.w));
  return step ? i.t.replace("{w}", step) : i.o;
};
const clip = (t, n = 158) => t.length <= n ? t : t.slice(0, t.lastIndexOf(" ", n - 1)) + "…";
// Google v SERP odreže titulok nad ~65 znakmi. Berieme prvú variantu, ktorá sa zmestí: pri dlhom
// mene svätého najprv vypadne známka webu, potom slovné spojenie „svätý dňa“ – meno a dátum ostanú,
// lebo práve podľa nich ľudia hľadá. Posledná varianta ide aj tak, kratsie už nie je čo urobiť.
const fitTitle = (...variants) => {
  for (const v of variants) {
    if (v.length + 3 + BRAND.length <= 65) return `${v} | ${BRAND}`;
    if (v.length <= 65) return v;
  }
  return variants[variants.length - 1];
};
const q = (lang, t) => lang === "en" ? `“${t}”` : `„${t}“`;
const ld = o => JSON.stringify(o).replace(/</g, "\\u003c");

// údaje navyše (generujú tools/facts.mjs, tools/meniny.mjs a tools/imgs.mjs)
const { FACTS, PATRON_NAMES } = load("facts.js"), MENINY = load("meniny.js").MENINY, IMG = load("imgs.js").IMG;
// úradne vyhlásené patronáty (ručne vedené, viď hlavičku patronaty.js)
const { PATRONATY, POPES } = load("patronaty.js");
const LANG_I = { sk: 0, en: 1, de: 2 };
const YEAR = Number(new Intl.DateTimeFormat("en", { timeZone: "Europe/Bratislava", year: "numeric" }).format(new Date())); // pregeneruje sa každú noc
const EXTRA = {
  sk: { more: "Viac", share: "Zdieľať", copied: "Odkaz skopírovaný", patron: "Patrón (podľa tradície)", born: "Narodenie", died: "Úmrtie", bio: "Životopis na Wikipédii", readings: "Čítania na tento deň", src: "Údaje: Wikipédia a Wikidata.", nameday: "Meniny",
    patrons: "Patróni", patSlug: "patroni", patIntro: "Svätí podľa toho, koho majú pod ochranou: najprv patronáty vyhlásené Cirkvou s odkazom na dokument, potom tie z tradície.",
    official: "Úradne vyhlásený patronát", officialH: "Úradne vyhlásené patronáty", holySee: "Svätá stolica",
    officialIntro: "Patronáty, ktoré vyhlásil pápež alebo ich uvádza Svätá stolica. Pri každom je odkaz na dokument. Súhrnný oficiálny zoznam patrónov neexistuje, preto je tento krátky.",
    traditionH: "Patróni podľa tradície", traditionIntro: "Vychádza z údajov anglickej Wikipédie: zoznam nie je úplný a nie sú to úradné vyhlásenia.",
    search: "Hľadať meno alebo patróna", none: "Nič sa nenašlo." },
  en: { more: "More", share: "Share", copied: "Link copied", patron: "Patron of (by tradition)", born: "Born", died: "Died", bio: "Biography on Wikipedia", readings: "Readings for this day", src: "Data: Wikipedia and Wikidata.", nameday: "",
    patrons: "Patron saints", patSlug: "patrons", patIntro: "Saints by those they watch over: first the patronages declared by the Church, with a link to the document, then those from tradition.",
    official: "Officially declared patronage", officialH: "Officially declared patronages", holySee: "Holy See",
    officialIntro: "Patronages declared by a Pope or stated by the Holy See. Each one links to the document. No comprehensive official list of patron saints exists, which is why this one is short.",
    traditionH: "Patrons by tradition", traditionIntro: "Based on English Wikipedia data: the list is not complete and these are not official declarations.",
    search: "Search a name or patronage", none: "Nothing found." },
  de: { more: "Mehr", share: "Teilen", copied: "Link kopiert", patron: "Patron (nach Überlieferung)", born: "Geboren", died: "Gestorben", bio: "Biografie auf Wikipedia", readings: "Lesungen für diesen Tag", src: "Daten: Wikipedia und Wikidata.", nameday: "",
    patrons: "Schutzpatrone", patSlug: "schutzpatrone", patIntro: "Heilige danach, wen sie beschützen: zuerst die von der Kirche erklärten Patronate mit Link zum Dokument, dann die aus der Überlieferung.",
    official: "Amtlich erklärtes Patronat", officialH: "Amtlich erklärte Patronate", holySee: "Heiliger Stuhl",
    officialIntro: "Patronate, die ein Papst erklärt hat oder die der Heilige Stuhl nennt. Zu jedem gibt es den Link zum Dokument. Eine vollständige amtliche Liste der Schutzpatrone gibt es nicht, darum ist diese kurz.",
    traditionH: "Patrone nach Überlieferung", traditionIntro: "Grundlage sind Daten der englischen Wikipedia: die Liste ist nicht vollständig und es sind keine amtlichen Erklärungen.",
    search: "Name oder Patronat suchen", none: "Nichts gefunden." },
};
// čítania daného dňa v aktuálnom roku; 29. 2. v neprestupnom roku neexistuje
const readingsUrl = (lang, feast) => {
  const [m, d] = feast.split("-");
  if (feast === "02-29" && new Date(YEAR, 1, 29).getMonth() !== 1) return null;
  if (lang === "sk") return `https://lc.kbs.sk/?den=${YEAR}${m}${d}`;
  if (lang === "en") return `https://bible.usccb.org/bible/readings/${m}${d}${String(YEAR).slice(2)}.cfm`;
  return `https://schott.erzabtei-beuron.de/?d=${YEAR}-${m}-${d}`;
};
// Úradný patronát: čo, kto ho vyhlásil a kedy, a odkaz na dokument. Pápeža ani rok neuvádzame,
// keď ich zdroj nehovorí – radšej menej údajov než vymyslený.
const officialPatron = (lang, feast) => (PATRONATY[feast] || []).map(o => {
  const who = [o.by ? POPES[o.by][LANG_I[lang]] : null, o.year].filter(Boolean).join(", ");
  return `${esc(o.what[LANG_I[lang]])}${who ? ` · ${esc(who)}` : ""} <a href="${o.url}" rel="noopener">${esc(o.doc || EXTRA[lang].holySee)} ↗</a>`;
});
const patronLabels = (lang, feast) => ((FACTS[feast] || {}).patron || []).map(k => PATRON_NAMES[k][LANG_I[lang]]);
const wikiUrl = (l, t) => `https://${l}.wikipedia.org/wiki/${encodeURIComponent(t.replace(/ /g, "_"))}`;

// Entita pre JSON-LD: sameAs na Wikipediu vo vsetkych jazykoch je najsilnejsi signal, ze ide
// o skutocnu osobu, ktoru Google pozna. Roky a miesta pridavame len ked sa daju spolahlivo precitat.
function entityLd(lang, s, feast) {
  const f = FACTS[feast] || {}, wiki = f.wiki || {}, langs = Object.keys(wiki);
  const o = { "@type": s.years ? "Person" : "Thing", name: s.name, image: imgUrl(s.img, 1200) };
  if (s.title) o.description = s.title;
  if (langs.length) o.sameAs = langs.map(l => wikiUrl(l, wiki[l]));
  if (!s.years) return o;
  const life = /^(\d{3,4})\s*[–-]\s*(\d{3,4})$/.exec(s.years), died = /^†\s*(\d{3,4})$/.exec(s.years);
  if (life) { o.birthDate = life[1]; o.deathDate = life[2]; } else if (died) o.deathDate = died[1];
  if ((f.born || {})[lang]) o.birthPlace = { "@type": "Place", name: f.born[lang] };
  if ((f.died || {})[lang]) o.deathPlace = { "@type": "Place", name: f.died[lang] };
  return o;
}

// Navigacna cesta pre SERP: Google ju ukazuje namiesto holej URL
const crumbs = items => ({ "@type": "BreadcrumbList", itemListElement: items.map((x, i) =>
  ({ "@type": "ListItem", position: i + 1, name: x[0], item: SITE + x[1] })) });
function moreBlock(lang, feast, shareText) {
  const x = EXTRA[lang], f = FACTS[feast] || {}, wiki = f.wiki || {}, wl = wiki[lang] ? lang : wiki.en ? "en" : null, pat = patronLabels(lang, feast), rd = readingsUrl(lang, feast);
  const off = officialPatron(lang, feast);
  const trad = [[x.patron, pat.join(", ")], [x.born, (f.born || {})[lang]], [x.died, (f.died || {})[lang]]].filter(r => r[1]).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("");
  const rows = (off.length ? `<dt>${x.official}</dt><dd>${off.join("<br>")}</dd>` : "") + trad;
  const links = [wl && `<a href="${wikiUrl(wl, wiki[wl])}" rel="noopener">${x.bio}${wl !== lang ? " (EN)" : ""} ↗</a>`, rd && `<a href="${rd}" rel="noopener">${x.readings} ↗</a>`].filter(Boolean).join("");
  return `<div class="extra"><details class="more"><summary>${x.more}</summary>${rows ? `<dl>${rows}</dl>` : ""}<p class="more-links">${links}</p>${trad || wl ? `<p class="more-src">${x.src}</p>` : ""}</details><button type="button" class="share" id="share" hidden data-text="${esc(shareText)}" data-done="${x.copied}">${x.share}</button></div>`;
}

// krížik ako kresba: znak ✝ niektoré prehliadače ukazujú ako farebné emoji
const CROSS = '<svg class="cross-sign" viewBox="0 0 10 14" aria-hidden="true"><path d="M5 0v14M1 4.5h8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

function page({ lang, path, title, desc, alts, image, imageAlt, imgHost, jsonld, bodyAttrs = "", body, scripts = true, noindex = false,
               rel = "../".repeat(path.split("/").length - 1) }) { // počet priečinkov v ceste (súbor sa nepočíta)
  const altLinks = alts ? Object.entries(alts).map(([l, p]) => `<link rel="alternate" hreflang="${l}" href="${SITE}${p}">`).join("\n") : "";
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(clip(desc))}">
${noindex ? '<meta name="robots" content="noindex">' : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="${SITE}${path}">`}
${altLinks}
<meta property="og:site_name" content="${BRAND}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(clip(desc))}">
<meta property="og:url" content="${SITE}${path}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:image:alt" content="${esc(imageAlt || title)}">
<meta property="og:locale" content="${UI[lang].locale}">
${LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${UI[l].locale}">`).join("\n")}
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#071432">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✝️</text></svg>">
${imgHost && imgHost !== "https://thumb.wikimedia.org" ? `<link rel="preconnect" href="${imgHost}">
` : ""}${PRELOAD_FONTS(rel)}
<link rel="stylesheet" href="${rel}${CSS}">
<link rel="preload" as="image" href="${PHOTO(1920)}" media="(min-width: 760px)">
<link rel="preload" as="image" href="${PHOTO(1280)}" media="(max-width: 759px)">
<script>try{if(sessionStorage.seen)document.documentElement.classList.add("seen");sessionStorage.seen=1}catch(e){}
(function(n,s){s.setProperty("--dawn",-(n%72)+"s");s.setProperty("--breath",-(n%108)+"s")})(Date.now()/1e3,document.documentElement.style)</script>
${jsonld ? `<script type="application/ld+json">${ld(jsonld)}</script>` : ""}
</head>
<body ${bodyAttrs}>
<div class="scene" aria-hidden="true"><div class="stage"><div class="move"><div class="photo"></div><div class="dark"></div><div class="shade"></div><div class="photo cross"></div></div></div></div>
${body(rel)}
${scripts ? `<script src="${rel}${JS}" defer></script>` : ""}
</body>
</html>
`;
}

function card(s, when, foot, extra) {
  const D = x => `style="animation-delay:calc(var(--t0) + ${x.toFixed(2)}s)"`;
  return `<article class="card">
<div class="head fade"><div class="frame"><img src="${imgUrl(s.img, 500)}" alt="${esc(s.name)}"><span class="sym" aria-hidden="true">${s.symbol}</span></div><div class="who"><div class="when">${when}</div>
<h1 class="fade" ${D(.1)}>${esc(s.name)}</h1>
<div class="meta fade" ${D(.2)}>${[s.title, s.years].filter(Boolean).map(esc).join(" · ")}</div></div></div>
<blockquote class="fade" ${D(.35)}>${esc(s.quote)}</blockquote>
<div class="source fade" ${D(.45)}>${esc(s.source)}</div>
<p class="story fade" ${D(.55)}>${esc(s.story)}</p>
<div class="fade" ${D(.62)}>${extra}</div>
<div class="fade" ${D(.7)}>${foot}</div>
</article>`;
}

const FEASTS = SAINTS.map(s => s.feast);
const byFeast = Object.fromEntries(SAINTS.map(s => [s.feast, s]));
const neighbour = (feast, step) => FEASTS[(FEASTS.indexOf(feast) + step + FEASTS.length) % FEASTS.length];
// Úradný patronát bez dňa, bez názvu v troch jazykoch alebo bez odkazu na Svätú stolicu je
// tvrdenie bez zdroja, a práve tomu má patronaty.js brániť – tak to radšej zastavíme hneď tu.
const HOLY_SEE = /^https:\/\/(www\.vatican\.va|(www\.)?kbs\.sk)\//;
for (const [f, list] of Object.entries(PATRONATY)) {
  if (!byFeast[f]) throw new Error(`patronaty.js: deň ${f} v saints.js nie je`);
  for (const o of list) {
    if (o.what.length !== 3 || o.what.some(t => !t)) throw new Error(`patronaty.js: ${f} nemá názov v troch jazykoch`);
    if (!HOLY_SEE.test(o.url)) throw new Error(`patronaty.js: ${f} nemá odkaz na Svätú stolicu (${o.url})`);
    if (o.by && !POPES[o.by]) throw new Error(`patronaty.js: ${f} má neznámeho pápeža ${o.by}`);
    if (o.year && (o.year < 1500 || o.year > YEAR)) throw new Error(`patronaty.js: ${f} má nezmyselný rok ${o.year}`);
  }
}
const todayKey = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Bratislava", month: "2-digit", day: "2-digit" }).format(new Date());
const out = (p, html) => { fs.mkdirSync(`${OUT}/${p}`, { recursive: true }); fs.writeFileSync(`${OUT}/${p}index.html`, html); };
// Presmerovanie: GitHub Pages nevie 301, takže je to stránka s okamžitým `refresh` a `canonical`
// na novú adresu – Google to berie ako trvalé presmerovanie. Do sitemapy nepatrí.
const redirect = (from, to, title) => out(from, `<!doctype html><html lang="${from.slice(0, 2)}"><meta charset="utf-8">`
  + `<link rel="canonical" href="${SITE}${to}"><meta http-equiv="refresh" content="0; url=${"../".repeat(from.split("/").length - 1)}${to}">`
  + `<title>${esc(title)}</title><p><a href="${"../".repeat(from.split("/").length - 1)}${to}">${esc(title)}</a></p></html>`);


function dayView(lang, feast, home) {
  const s = saint(lang, byFeast[feast]);
  const u = UI[lang];
  const path = home ? homePath(lang) : dayPath(lang, feast);
  const alts = Object.fromEntries(LANGS.map(l => [l, home ? homePath(l) : dayPath(l, feast)]));
  alts["x-default"] = home ? homePath("en") : dayPath("en", feast);
  const dt = dayText(lang, feast);
  const title = home ? fitTitle(`${u.site} – ${u.every}`, u.site) : fitTitle(u.dayTitle(s.name, dt), `${s.name} – ${dt}`, s.name);
  const desc = clip(home ? `${u.site} – ${u.every}. ${u.badgeToday}: ${s.name}. ${q(lang, s.quote)}` : `${q(lang, s.quote)} ${s.story}`);
  const person = entityLd(lang, s, feast);
  const jsonld = home
    ? { "@context": "https://schema.org", "@type": "WebSite", name: BRAND, alternateName: u.site, url: SITE, inLanguage: lang, description: desc, about: CHURCH,
        potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: searchTarget(lang) }, "query-input": "required name=search_term_string" } }
    : { "@context": "https://schema.org", "@graph": [
        { "@type": "WebPage", name: title, url: SITE + path, inLanguage: lang, description: desc, about: person,
          isPartOf: { "@type": "WebSite", name: BRAND, url: SITE } },
        crumbs([[u.site, homePath(lang)], [u.cal, calPath(lang)], [s.name, path]]) ] };
  const bodyAttrs = `class="day" data-lang="${lang}" data-feast="${feast}" data-root="${"../".repeat(path.split("/").length - 1)}"` + (home ? ` data-home="1" data-days="${lang === "sk" ? "sk/" : ""}"` : "");
  // fotka pozadia sa prednačítava z thumb.wikimedia.org, takže to spojenie už stojí; portrét menší
  // než 500 px ale chodí ako originál z upload.wikimedia.org, a to je ďalší hostiteľ
  const imgHost = new URL(imgUrl(s.img, 500)).origin;
  const html = page({ lang, path, title, desc, alts, image: imgUrl(s.img, 1200), imageAlt: s.name, imgHost, jsonld, bodyAttrs, body: rel => `<main>
<div class="top"><a class="brand" href="${rel}${homePath(lang)}">${u.site}</a><div class="links"><a class="cal-link" href="${rel}${calPath(lang)}">${u.cal}</a><a class="about-link" href="${rel}${aboutPath(lang)}">${u.about}</a><select class="lang" id="lang" aria-label="Jazyk / Language / Sprache">${LANGS.map(l => `<option value="${l}" data-href="${rel}${alts[l]}"${l === lang ? " selected" : ""}>${l.toUpperCase()}</option>`).join("")}</select></div></div>
${card(s, `<a class="date" id="date" aria-haspopup="dialog" href="${rel}${calPath(lang)}" title="${esc(u.cal)}">${dt}</a>
${lang === "sk" && MENINY[feast] ? `<p class="nameday">${EXTRA.sk.nameday}: ${esc(MENINY[feast])}</p>` : ""}
<p class="badge">${home ? u.badgeToday : u.badgeDay}</p>`, `<nav>
<a class="btn" id="prev" rel="prev" href="${rel}${dayPath(lang, neighbour(feast, -1))}" aria-label="${u.prevL}">${u.prev}</a>
${home ? "" : `<a class="btn" id="today" href="${rel}${homePath(lang)}">${u.today}</a>`}
<a class="btn" id="next" rel="next" href="${rel}${dayPath(lang, neighbour(feast, 1))}" aria-label="${u.nextL}">${u.next}</a>
<a class="faith" href="${rel}${aboutPath(lang)}" title="${u.about}">${CROSS}${u.faith}</a>
</nav>`, moreBlock(lang, feast, `${q(lang, s.quote)} – ${s.name}`))}
</main>
<dialog id="cal" aria-label="${esc(u.cal)}"><div class="cal-box">
<form method="dialog"><button class="cal-x" aria-label="${u.close}">×</button></form>
<div class="cal-head"><button type="button" id="calPrev" aria-label="${u.prevM}">‹</button><b id="calTitle"></b><button type="button" id="calNext" aria-label="${u.nextM}">›</button></div>
<div class="cal-grid" id="calGrid"></div>
<p class="cal-tip" id="calTip"></p>
<a class="cal-all" id="calAll" href="${rel}${calPath(lang)}">${u.cal} ›</a>
</div></dialog>` });
  out(path, html);
  return path;
}

function calendar(lang) {
  const u = UI[lang], path = calPath(lang);
  const alts = Object.fromEntries(LANGS.map(l => [l, calPath(l)]));
  alts["x-default"] = calPath("en");
  const months = Array.from({ length: 12 }, (_, i) => SAINTS.filter(s => md(s.feast)[0] === i + 1));
  const monthName = i => monthNom(lang, i);
  const title = fitTitle(u.cal);
  const year = Number(new Intl.DateTimeFormat("en", { timeZone: "Europe/Bratislava", year: "numeric" }).format(new Date())); // pregeneruje sa každú noc
  const wd = Array.from({ length: 7 }, (_, i) => new Date(Date.UTC(2024, 0, 1 + i)).toLocaleDateString(lang, { weekday: "short", timeZone: "UTC" }));
  // ponytail: 29. 2. v neprestupnom roku sa ukáže za 28., v zozname je správne
  const grid = (i, list, rel) => `<div class="mgrid">${wd.map(w => `<span class="wd">${w}</span>`).join("")}${"<span></span>".repeat((new Date(year, i, 1).getDay() + 6) % 7)}${
    list.map(s => `<a href="${rel}${dayPath(lang, s.feast)}"${s.feast === todayKey ? ' class="today"' : ""} title="${esc(saint(lang, s).name)}">${md(s.feast)[1]}</a>`).join("")}</div>`;
  out(path, page({ lang, path, title, desc: u.calIntro, alts, image: imgUrl(SAINTS[0].img, 1200),
    jsonld: { "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", name: title, url: SITE + path, inLanguage: lang, description: u.calIntro,
        isPartOf: { "@type": "WebSite", name: BRAND, url: SITE } },
      crumbs([[u.site, homePath(lang)], [u.cal, path]]) ] },
    body: rel => `<main class="calendar">
<div class="top"><a class="brand" href="${rel}${homePath(lang)}">${u.site}</a><a class="close" id="close" href="${rel}${homePath(lang)}" aria-label="${u.close}" title="${u.close}">×</a></div>
<article class="card">
<h1>${u.cal}</h1>
<p>${u.calIntro}</p>
<input type="search" class="q" id="q" hidden placeholder="${EXTRA[lang].search}" aria-label="${EXTRA[lang].search}" data-src="${rel}${lang}/search.json" data-base="${rel}${lang}/" data-none="${EXTRA[lang].none}">
<ol class="qres" id="qres" hidden></ol>
<div class="mtabs">${months.map((_, i) => `<a href="#m${i + 1}"${i + 1 === md(todayKey)[0] ? ' class="now"' : ""}>${monthName(i).slice(0, 3)}</a>`).join("")}</div>
${months.map((list, i) => `<section class="month${i + 1 === md(todayKey)[0] ? " now" : ""}" id="m${i + 1}">
<div class="mnav"><a href="#m${(i + 11) % 12 + 1}">‹ ${monthName((i + 11) % 12)}</a><h2>${monthName(i)}</h2><a href="#m${(i + 1) % 12 + 1}">${monthName((i + 1) % 12)} ›</a></div>
<div class="mbody">${grid(i, list, rel)}
<ol>${list.map(s => `<li${s.feast === todayKey ? ' class="today"' : ""}><a href="${rel}${dayPath(lang, s.feast)}"><span class="d">${md(s.feast)[1]}.</span> ${esc(saint(lang, s).name)}</a></li>`).join("")}</ol></div></section>`).join("\n")}
</article>
<nav><a class="btn" href="${rel}${homePath(lang)}">${u.today}</a><a class="btn" href="${rel}${patPath(lang)}">${EXTRA[lang].patrons}</a><a class="btn" href="${rel}${aboutPath(lang)}">${u.about}</a>${LANGS.map(l => l === lang ? `<span class="btn on">${l.toUpperCase()}</span>`
  : `<a class="btn" hreflang="${l}" href="${rel}${calPath(l)}" title="${UI[l].cal}">${l.toUpperCase()}</a>`).join("")}</nav>
</main>` }));
  return path;
}

// stránka „O stránke“: jasne hovorí, že web je rímskokatolícky, podľa čoho vyberá svätých a kto za ním (ne)stojí
const LINKS = [["https://www.vatican.va/", "vatican.va"], ["https://www.kbs.sk/", "kbs.sk"], ["https://lc.kbs.sk/", "lc.kbs.sk"]];
const ABOUT = {
  sk: { desc: "Sanctus diei je rímskokatolícka stránka: svätý na každý deň podľa liturgického kalendára Katolíckej cirkvi, v jednote so Svätým Otcom.",
    lead: "Sanctus diei je <b>rímskokatolícka</b> stránka. Každý deň predstavuje svätého alebo sviatok, ktorý si v ten deň pripomína Katolícka cirkev.",
    parts: [
      ["Viera", [`Stránka verne nasleduje učenie Katolíckej cirkvi, ako ho podáva Katechizmus Katolíckej cirkvi – v jednote so Svätým Otcom, pápežom ${POPE.sk}, nástupcom apoštola Petra, a s biskupmi, ktorí sú s ním v spoločenstve.`,
        "Spolu s Cirkvou vyznávame Najsvätejšiu Trojicu a Ježiša Krista, pravého Boha a pravého človeka, prítomného v Eucharistii. Uctievame Pannu Máriu, Bohorodičku, i všetkých svätých, ktorí nás povzbudzujú príkladom a prihovárajú sa za nás u Boha."]],
      ["Podľa čoho vyberáme svätých", ["Slávenia podľa Rímskeho misála (2021) – Všeobecného rímskeho kalendára a osobitného kalendára diecéz na Slovensku, ako ich uvádza liturgické direktórium Konferencie biskupov Slovenska. V dni bez povinného slávenia uvádzame svätého z Rímskeho martyrológia.",
        "Citáty sú overiteľné výroky svätých alebo verše zo Svätého písma s presným odkazom."]],
      ["Kto za stránkou stojí", ["Stránka je súkromná iniciatíva na povzbudenie vo viere. Nie je oficiálnou stránkou Svätej stolice ani Konferencie biskupov Slovenska. Oficiálne informácie nájdete tu:"]] ] },
  en: { desc: "Sanctus diei is a Roman Catholic website: a saint for every day following the liturgical calendar of the Catholic Church, in communion with the Holy Father.",
    lead: "Sanctus diei is a <b>Roman Catholic</b> website. Each day it presents the saint or feast the Catholic Church remembers on that day.",
    parts: [
      ["Faith", [`The website faithfully follows the teaching of the Catholic Church as set out in the Catechism of the Catholic Church – in communion with the Holy Father, ${POPE.en}, successor of the Apostle Peter, and with the bishops in communion with him.`,
        "With the Church we profess the Most Holy Trinity and Jesus Christ, true God and true man, present in the Eucharist. We honour the Virgin Mary, Mother of God, and all the saints, who encourage us by their example and intercede for us with God."]],
      ["How the saints are chosen", ["Celebrations according to the Roman Missal (2021) – the General Roman Calendar and the proper calendar of the dioceses of Slovakia, as listed in the liturgical directory of the Slovak Bishops' Conference. On days without an obligatory celebration, a saint from the Roman Martyrology.",
        "Quotations are verifiable sayings of the saints or verses from Holy Scripture with an exact reference."]],
      ["Who is behind the website", ["The website is a private initiative to encourage people in the faith. It is not an official website of the Holy See or of the Slovak Bishops' Conference. Official information can be found here:"]] ] },
  de: { desc: "Sanctus diei ist eine römisch-katholische Website: ein Heiliger für jeden Tag nach dem liturgischen Kalender der katholischen Kirche, in Einheit mit dem Heiligen Vater.",
    lead: "Sanctus diei ist eine <b>römisch-katholische</b> Website. Jeden Tag stellt sie den Heiligen oder das Fest vor, dessen die katholische Kirche an diesem Tag gedenkt.",
    parts: [
      ["Glaube", [`Die Website folgt treu der Lehre der katholischen Kirche, wie sie der Katechismus der Katholischen Kirche darlegt – in Einheit mit dem Heiligen Vater, ${POPE.de}, dem Nachfolger des Apostels Petrus, und mit den Bischöfen, die mit ihm in Gemeinschaft stehen.`,
        "Mit der Kirche bekennen wir die Heiligste Dreifaltigkeit und Jesus Christus, wahrer Gott und wahrer Mensch, gegenwärtig in der Eucharistie. Wir verehren die Jungfrau Maria, die Gottesmutter, und alle Heiligen, die uns durch ihr Beispiel ermutigen und bei Gott für uns eintreten."]],
      ["Wie die Heiligen ausgewählt werden", ["Feiern nach dem Römischen Messbuch (2021) – dem Allgemeinen Römischen Kalender und dem Eigenkalender der Diözesen der Slowakei, wie sie das liturgische Direktorium der Slowakischen Bischofskonferenz angibt. An Tagen ohne gebotene Feier ein Heiliger aus dem Römischen Martyrologium.",
        "Zitate sind überprüfbare Worte der Heiligen oder Verse der Heiligen Schrift mit genauer Stellenangabe."]],
      ["Wer hinter der Website steht", ["Die Website ist eine private Initiative zur Ermutigung im Glauben. Sie ist keine offizielle Website des Heiligen Stuhls oder der Slowakischen Bischofskonferenz. Offizielle Informationen finden Sie hier:"]] ] },
};
// Katolícka cirkev na Wikidata – pre vyhľadávače, o čom (a v akej viere) web je
const CHURCH = { "@type": "Organization", name: "Catholic Church", sameAs: ["https://www.wikidata.org/wiki/Q9592", "https://www.vatican.va/"] };

function aboutPage(lang) {
  const u = UI[lang], a = ABOUT[lang], path = aboutPath(lang);
  const alts = Object.fromEntries(LANGS.map(l => [l, aboutPath(l)]));
  alts["x-default"] = aboutPath("en");
  const title = fitTitle(`${u.about} – ${u.faith}`, u.about);
  out(path, page({ lang, path, title, desc: a.desc, alts, image: imgUrl(SAINTS[0].img, 1200),
    jsonld: { "@context": "https://schema.org", "@graph": [
      { "@type": "AboutPage", name: title, url: SITE + path, inLanguage: lang, description: a.desc, about: CHURCH,
        isPartOf: { "@type": "WebSite", name: BRAND, url: SITE } },
      crumbs([[u.site, homePath(lang)], [u.about, path]]) ] },
    body: rel => `<main class="prose">
<div class="top"><a class="brand" href="${rel}${homePath(lang)}">${u.site}</a><a class="close" id="close" href="${rel}${homePath(lang)}" aria-label="${u.close}" title="${u.close}">×</a></div>
<article class="card">
<p class="seal">${CROSS}</p>
<h1>${u.about}</h1>
<p class="lead">${a.lead}</p>
${a.parts.map(([h, ps]) => `<h2>${h}</h2>\n${ps.map(p => `<p>${esc(p)}</p>`).join("\n")}`).join("\n")}
<ul>${LINKS.map(([href, t]) => `<li><a href="${href}" rel="noopener">${t}</a></li>`).join("")}</ul>
</article>
<nav><a class="btn" href="${rel}${homePath(lang)}">${u.today}</a><a class="btn" href="${rel}${calPath(lang)}">${u.cal}</a><a class="btn" href="${rel}${patPath(lang)}">${EXTRA[lang].patrons}</a>${LANGS.map(l => l === lang ? `<span class="btn on">${l.toUpperCase()}</span>`
  : `<a class="btn" hreflang="${l}" href="${rel}${aboutPath(l)}" title="${UI[l].about}">${l.toUpperCase()}</a>`).join("")}</nav>
</main>` }));
  return path;
}

// stránka patrónov: kategórie a svätí s odkazom na ich deň
function patronsPage(lang) {
  const u = UI[lang], x = EXTRA[lang], path = patPath(lang), title = fitTitle(x.patrons);
  const alts = Object.fromEntries(LANGS.map(l => [l, patPath(l)])); alts["x-default"] = patPath("en");
  const groups = Object.keys(PATRON_NAMES).map(k => [PATRON_NAMES[k][LANG_I[lang]], FEASTS.filter(f => FACTS[f] && FACTS[f].patron.includes(k))]).filter(g => g[1].length).sort((a, b) => a[0].localeCompare(b[0], lang));
  out(path, page({ lang, path, title, desc: x.patIntro, alts, image: imgUrl(SAINTS[0].img, 1200),
    jsonld: { "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", name: title, url: SITE + path, inLanguage: lang, description: x.patIntro,
        isPartOf: { "@type": "WebSite", name: BRAND, url: SITE } },
      crumbs([[u.site, homePath(lang)], [x.patrons, path]]) ] },
    body: rel => `<main class="prose">
<div class="top"><a class="brand" href="${rel}${homePath(lang)}">${u.site}</a><a class="close" id="close" href="${rel}${homePath(lang)}" aria-label="${u.close}" title="${u.close}">×</a></div>
<article class="card">
<h1>${x.patrons}</h1>
<p class="lead">${x.patIntro}</p>
<h2>${x.officialH}</h2>
<p>${x.officialIntro}</p>
<ul class="pat-off">${Object.keys(PATRONATY).sort().map(f => officialPatron(lang, f).map(o =>
  `<li><a href="${rel}${dayPath(lang, f)}">${esc(saint(lang, byFeast[f]).name)}</a> – ${o}</li>`).join("")).join("")}</ul>
<h2>${x.traditionH}</h2>
<p>${x.traditionIntro}</p>
${groups.map(([name, fs_]) => `<h3>${esc(name)}</h3>\n<ul class="pat">${fs_.map(f => `<li><a href="${rel}${dayPath(lang, f)}">${esc(saint(lang, byFeast[f]).name)}</a></li>`).join("")}</ul>`).join("\n")}
</article>
<nav><a class="btn" href="${rel}${homePath(lang)}">${u.today}</a><a class="btn" href="${rel}${calPath(lang)}">${u.cal}</a><a class="btn" href="${rel}${aboutPath(lang)}">${u.about}</a>${LANGS.map(l => l === lang ? `<span class="btn on">${l.toUpperCase()}</span>`
  : `<a class="btn" hreflang="${l}" href="${rel}${patPath(l)}" title="${EXTRA[l].patrons}">${l.toUpperCase()}</a>`).join("")}</nav>
</main>` }));
  return path;
}

// ---- generovanie ----
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const f of ["style.css", "app.js"]) fs.copyFileSync(f, `${OUT}/${f}`);
fs.mkdirSync(`${OUT}/fonts`);
for (const f of fs.readdirSync("fonts")) if (f !== "README.md") fs.copyFileSync(`fonts/${f}`, `${OUT}/fonts/${f}`); // aj OFL licencie, font sa šíri s ňou
const urls = [];
for (const lang of LANGS) {
  urls.push({ path: dayView(lang, todayKey, true), alt: l => homePath(l), changefreq: "daily" });
  for (const f of FEASTS) {
    urls.push({ path: dayView(lang, f, false), alt: l => dayPath(l, f), changefreq: "yearly" });
    redirect(oldDayPath(lang, f), dayPath(lang, f), saint(lang, byFeast[f]).name);
  }
  // adresa musí byť jednoznačná: ináč by si dva dni prepísali stránku a jeden by zmizol
  const slugs = FEASTS.map(f => daySlug(lang, f));
  const dup = slugs.filter((x, i) => slugs.indexOf(x) !== i);
  if (dup.length) throw new Error(`rovnaká adresa pre dva dni (${lang}): ${dup.join(", ")}`);
  for (const x of [UI[lang].calSlug, UI[lang].aboutSlug, EXTRA[lang].patSlug])
    if (slugs.includes(x)) throw new Error(`adresa dňa sa bije so stránkou /${lang}/${x}/`);
  // names.json: meno do popisku v kalendári, slug do odkazu (app.js nepozná pravidlá na adresu)
  fs.writeFileSync(`${OUT}/${lang}/names.json`, JSON.stringify(Object.fromEntries(SAINTS.map(s => [s.feast, [saint(lang, s).name, daySlug(lang, s.feast)]]))));
  fs.writeFileSync(`${OUT}/${lang}/search.json`, JSON.stringify(SAINTS.map(s => { const t = saint(lang, s), [m, d] = s.feast.split("-").map(Number); return { f: s.feast, s: daySlug(lang, s.feast), d: `${d}. ${m}.`, n: t.name, t: t.title, p: patronLabels(lang, s.feast) }; })));
  urls.push({ path: calendar(lang), alt: l => calPath(l), changefreq: "monthly" });
  urls.push({ path: patronsPage(lang), alt: l => patPath(l), changefreq: "yearly" });
  urls.push({ path: aboutPage(lang), alt: l => aboutPath(l), changefreq: "yearly" });
}
// /sk/ nie je samostatná stránka – slovenská domovská je koreň
out("sk/", `<!doctype html><meta charset="utf-8"><link rel="canonical" href="${SITE}"><meta http-equiv="refresh" content="0; url=../"><title>${BRAND}</title>`);
fs.writeFileSync(`${OUT}/404.html`, page({ lang: "sk", path: "404.html", rel: SITE, title: `404 | ${BRAND}`, desc: UI.sk.notFound, image: imgUrl(SAINTS[0].img, 1200),
  scripts: false, noindex: true, body: () => `<main class="calendar"><article class="card"><h1>404</h1>${LANGS.map(l =>
  `<p>${UI[l].notFound}</p>`).join("")}<nav>${LANGS.map(l =>
  `<a class="btn" hreflang="${l}" href="${SITE}${homePath(l)}">${UI[l].back}</a>`).join("")}</nav></article></main>` }));

const today = new Date().toISOString().slice(0, 10);
// lastmod musi byt pravda: dnesny datum na vsetkych 1110 strankach by Google prestal brat vazne.
// Domovska stranka sa naozaj meni kazdy den, ostatne vtedy, ked sa zmenili data alebo sablona.
const dataDate = (() => {
  try { return execFileSync("git", ["log", "-1", "--format=%cs", "--", "saints.js", "i18n", "facts.js", "meniny.js", "build.mjs", "style.css", "app.js"], { encoding: "utf8" }).trim(); }
  catch (e) { return ""; }
})();
const lastmod = x => { const d = x.changefreq === "daily" ? today : dataDate; return d ? `<lastmod>${d}</lastmod>` : ""; };
fs.writeFileSync(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(x => `<url><loc>${SITE}${x.path}</loc>${lastmod(x)}<changefreq>${x.changefreq}</changefreq>${
  LANGS.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${x.alt(l)}"/>`).join("")}<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${x.alt("en")}"/></url>`).join("\n")}
</urlset>
`);
fs.writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`);
console.log(`Hotovo: ${urls.length} stránok v ${OUT}/ (dnešný svätý: ${todayKey})`);
