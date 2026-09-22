// Generuje statickú stránku do _site/: domovská stránka pre každý jazyk, 366 denných stránok × jazyk,
// kalendár, sitemap.xml a robots.txt. Spúšťa ho GitHub Actions pri pushi a každú noc (dnešný svätý na domovskej).
// Lokálne: node build.mjs && python -m http.server -d _site
import fs from "node:fs";
import vm from "node:vm";
import crypto from "node:crypto";

const SITE = "https://mathers12.github.io/catholic_saints/"; // pri vlastnej doméne stačí zmeniť tu
const BRAND = "Sanctus diei";
const OUT = "_site";
const LANGS = ["sk", "en", "de"];

// Verzia v odkaze na style.css a app.js podľa obsahu súboru: po zmene sa zmení URL, takže prehliadač
// nedrží starú verziu z cache. Bez toho návštevník vidí staré štýly, kým mu nevyprší cache.
const asset = f => `${f}?v=${crypto.createHash("sha1").update(fs.readFileSync(f)).digest("hex").slice(0, 8)}`;
const CSS = asset("style.css"), JS = asset("app.js");

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
const md = feast => feast.split("-").map(Number);
const dayText = (lang, feast) => { const [m, d] = md(feast); return lang === "en" ? `${MONTHS.en[m - 1]} ${d}` : `${d}. ${MONTHS[lang][m - 1]}`; };

const UI = {
  sk: { site: "Svätý dňa", every: "katolícky svätý na každý deň", prev: "‹ Včera", next: "Zajtra ›", today: "Dnes",
        prevL: "Predchádzajúci deň", nextL: "Nasledujúci deň", badgeToday: "Dnes si Cirkev pripomína", badgeDay: "V tento deň si Cirkev pripomína",
        cal: "Kalendár svätých", calSlug: "kalendar", calIntro: "Svätí a sviatky na každý deň roka podľa liturgického kalendára na Slovensku.",
        dayTitle: (n, dt) => `${n} – svätý dňa ${dt}`, prevM: "Predchádzajúci mesiac", nextM: "Nasledujúci mesiac", close: "Zavrieť", locale: "sk_SK", notFound: "Táto stránka neexistuje.", back: "Späť na svätého dňa" },
  en: { site: "Saint of the Day", every: "a Catholic saint for every day", prev: "‹ Yesterday", next: "Tomorrow ›", today: "Today",
        prevL: "Previous day", nextL: "Next day", badgeToday: "Today the Church remembers", badgeDay: "On this day the Church remembers",
        cal: "Calendar of Saints", calSlug: "calendar", calIntro: "Saints and feasts for every day of the year, following the liturgical calendar.",
        dayTitle: (n, dt) => `${n} – Saint of the Day, ${dt}`, prevM: "Previous month", nextM: "Next month", close: "Close", locale: "en_US", notFound: "This page does not exist.", back: "Back to the saint of the day" },
  de: { site: "Heiliger des Tages", every: "ein katholischer Heiliger für jeden Tag", prev: "‹ Gestern", next: "Morgen ›", today: "Heute",
        prevL: "Vorheriger Tag", nextL: "Nächster Tag", badgeToday: "Heute gedenkt die Kirche", badgeDay: "An diesem Tag gedenkt die Kirche",
        cal: "Heiligenkalender", calSlug: "kalender", calIntro: "Heilige und Feste für jeden Tag des Jahres nach dem liturgischen Kalender.",
        dayTitle: (n, dt) => `${n} – Heiliger des Tages, ${dt}`, prevM: "Vorheriger Monat", nextM: "Nächster Monat", close: "Schließen", locale: "de_DE", notFound: "Diese Seite existiert nicht.", back: "Zurück zum Heiligen des Tages" },
};

// cesty (relatívne ku koreňu webu)
const homePath = lang => lang === "sk" ? "" : `${lang}/`;
const dayPath = (lang, feast) => `${lang}/${feast}/`;
const calPath = lang => `${lang}/${UI[lang].calSlug}/`;

const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const imgUrl = (f, w) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w}`;
const clip = (t, n = 158) => t.length <= n ? t : t.slice(0, t.lastIndexOf(" ", n - 1)) + "…";
const q = (lang, t) => lang === "en" ? `“${t}”` : `„${t}“`;
const ld = o => JSON.stringify(o).replace(/</g, "\\u003c");

function page({ lang, path, title, desc, alts, image, jsonld, bodyAttrs = "", body, scripts = true, noindex = false,
               rel = "../".repeat(path.split("/").length - 1) }) { // počet priečinkov v ceste (súbor sa nepočíta)
  const altLinks = alts ? Object.entries(alts).map(([l, p]) => `<link rel="alternate" hreflang="${l}" href="${SITE}${p}">`).join("\n") : "";
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${SITE}${path}">`}
${altLinks}
<meta property="og:site_name" content="${BRAND}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}${path}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:locale" content="${UI[lang].locale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f6ead6">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✝️</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${rel}${CSS}">
<script>try{if(sessionStorage.seen)document.documentElement.classList.add("seen");sessionStorage.seen=1}catch(e){}</script>
${jsonld ? `<script type="application/ld+json">${ld(jsonld)}</script>` : ""}
</head>
<body ${bodyAttrs}>
<div class="scene" aria-hidden="true"><div class="photo"></div><div class="veil"></div><div class="glow"></div></div>
${scripts ? '<canvas id="motes"></canvas>' : ""}
${body(rel)}
${scripts ? `<script src="${rel}${JS}" defer></script>` : ""}
</body>
</html>
`;
}

function card(s) {
  const D = x => `style="animation-delay:calc(var(--t0) + ${x.toFixed(2)}s)"`;
  const words = s.quote.split(" ");
  const after = .6 + words.length * .08 + .3;
  return `<article class="card">
<div class="portrait"><div class="frame"><img src="${imgUrl(s.img, 500)}" alt="${esc(s.name)}"><span class="sym" aria-hidden="true">${s.symbol}</span></div></div>
<div class="text">
<h1 class="fade" ${D(.1)}>${esc(s.name)}</h1>
<div class="meta fade" ${D(.3)}>${[s.title, s.years].filter(Boolean).map(esc).join(" · ")}</div>
<blockquote>${words.map((w, i) => `<span class="w" ${D(.6 + i * .08)}>${esc(w)}</span>`).join(" ")}</blockquote>
<div class="source fade" ${D(after)}>— ${esc(s.source)}</div>
<div class="divider fade" ${D(after + .2)}></div>
<p class="story fade" ${D(after + .4)}>${esc(s.story)}</p>
</div>
</article>`;
}

const FEASTS = SAINTS.map(s => s.feast);
const byFeast = Object.fromEntries(SAINTS.map(s => [s.feast, s]));
const neighbour = (feast, step) => FEASTS[(FEASTS.indexOf(feast) + step + FEASTS.length) % FEASTS.length];
const todayKey = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Bratislava", month: "2-digit", day: "2-digit" }).format(new Date());
const out = (p, html) => { fs.mkdirSync(`${OUT}/${p}`, { recursive: true }); fs.writeFileSync(`${OUT}/${p}index.html`, html); };

function dayView(lang, feast, home) {
  const s = saint(lang, byFeast[feast]);
  const u = UI[lang];
  const path = home ? homePath(lang) : dayPath(lang, feast);
  const alts = Object.fromEntries(LANGS.map(l => [l, home ? homePath(l) : dayPath(l, feast)]));
  alts["x-default"] = home ? "" : dayPath("en", feast);
  const title = home ? `${u.site} – ${u.every} | ${BRAND}` : `${u.dayTitle(s.name, dayText(lang, feast))} | ${BRAND}`;
  const desc = clip(home ? `${u.site} – ${u.every}. ${u.badgeToday}: ${s.name}. ${q(lang, s.quote)}` : `${q(lang, s.quote)} ${s.story}`);
  const person = s.years ? { "@type": "Person", name: s.name, image: imgUrl(s.img, 1200) } : { "@type": "Thing", name: s.name, image: imgUrl(s.img, 1200) };
  const jsonld = home
    ? { "@context": "https://schema.org", "@type": "WebSite", name: BRAND, alternateName: u.site, url: SITE, inLanguage: lang, description: desc }
    : { "@context": "https://schema.org", "@graph": [
        { "@type": "WebPage", name: title, url: SITE + path, inLanguage: lang, description: desc, about: person,
          isPartOf: { "@type": "WebSite", name: BRAND, url: SITE } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: u.site, item: SITE + homePath(lang) },
          { "@type": "ListItem", position: 2, name: u.cal, item: SITE + calPath(lang) },
          { "@type": "ListItem", position: 3, name: s.name, item: SITE + path } ] } ] };
  const bodyAttrs = `data-lang="${lang}" data-feast="${feast}" data-root="${"../".repeat(path.split("/").length - 1)}"` + (home ? ` data-home="1" data-days="${lang === "sk" ? "sk/" : ""}"` : "");
  const html = page({ lang, path, title, desc, alts, image: imgUrl(s.img, 1200), jsonld, bodyAttrs, body: rel => `<main>
<a class="date" id="date" aria-haspopup="dialog" href="${rel}${calPath(lang)}" title="${esc(u.cal)}">${dayText(lang, feast)}</a>
<div class="badge">✦ ${home ? u.badgeToday : u.badgeDay} ✦</div>
${card(s)}
<nav>
<a class="btn" id="prev" rel="prev" href="${rel}${dayPath(lang, neighbour(feast, -1))}" aria-label="${u.prevL}">${u.prev}</a>
${home ? "" : `<a class="btn" id="today" href="${rel}${homePath(lang)}">${u.today}</a>`}
<a class="btn" id="next" rel="next" href="${rel}${dayPath(lang, neighbour(feast, 1))}" aria-label="${u.nextL}">${u.next}</a>
<select class="lang" id="lang" aria-label="Jazyk / Language / Sprache">${LANGS.map(l => `<option value="${l}" data-href="${rel}${alts[l]}"${l === lang ? " selected" : ""}>${l.toUpperCase()}</option>`).join("")}</select>
</nav>
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
  const monthName = i => lang === "sk" ? MONTHS_NOM_SK[i] : MONTHS[lang][i];
  const title = `${u.cal} | ${BRAND}`;
  const year = Number(new Intl.DateTimeFormat("en", { timeZone: "Europe/Bratislava", year: "numeric" }).format(new Date())); // pregeneruje sa každú noc
  const wd = Array.from({ length: 7 }, (_, i) => new Date(Date.UTC(2024, 0, 1 + i)).toLocaleDateString(lang, { weekday: "short", timeZone: "UTC" }));
  // ponytail: 29. 2. v neprestupnom roku sa ukáže za 28., v zozname je správne
  const grid = (i, list, rel) => `<div class="mgrid">${wd.map(w => `<span class="wd">${w}</span>`).join("")}${"<span></span>".repeat((new Date(year, i, 1).getDay() + 6) % 7)}${
    list.map(s => `<a href="${rel}${dayPath(lang, s.feast)}"${s.feast === todayKey ? ' class="today"' : ""} title="${esc(saint(lang, s).name)}">${md(s.feast)[1]}</a>`).join("")}</div>`;
  out(path, page({ lang, path, title, desc: u.calIntro, alts, image: imgUrl(SAINTS[0].img, 1200), scripts: false,
    jsonld: { "@context": "https://schema.org", "@type": "CollectionPage", name: title, url: SITE + path, inLanguage: lang, description: u.calIntro },
    body: rel => `<main class="calendar">
<a class="date" href="${rel}${homePath(lang)}">‹ ${u.site}</a>
<article class="card">
<h1>${u.cal}</h1>
<p>${u.calIntro}</p>
<div class="mtabs">${months.map((_, i) => `<a href="#m${i + 1}">${monthName(i).slice(0, 3)}</a>`).join("")}</div>
${months.map((list, i) => `<section class="month${i + 1 === md(todayKey)[0] ? " now" : ""}" id="m${i + 1}">
<div class="mnav"><a href="#m${(i + 11) % 12 + 1}">‹ ${monthName((i + 11) % 12)}</a><h2>${monthName(i)}</h2><a href="#m${(i + 1) % 12 + 1}">${monthName((i + 1) % 12)} ›</a></div>
<div class="mbody">${grid(i, list, rel)}
<ol>${list.map(s => `<li${s.feast === todayKey ? ' class="today"' : ""}><a href="${rel}${dayPath(lang, s.feast)}"><span class="d">${md(s.feast)[1]}.</span> ${esc(saint(lang, s).name)}</a></li>`).join("")}</ol></div></section>`).join("\n")}
</article>
<nav><a class="btn" href="${rel}${homePath(lang)}">${u.today}</a>${LANGS.map(l => l === lang ? `<span class="btn on">${l.toUpperCase()}</span>`
  : `<a class="btn" hreflang="${l}" href="${rel}${calPath(l)}" title="${UI[l].cal}">${l.toUpperCase()}</a>`).join("")}</nav>
</main>` }));
  return path;
}

// ---- generovanie ----
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const f of ["style.css", "app.js"]) fs.copyFileSync(f, `${OUT}/${f}`);
const urls = [];
for (const lang of LANGS) {
  urls.push({ path: dayView(lang, todayKey, true), alt: l => homePath(l), changefreq: "daily" });
  for (const f of FEASTS) urls.push({ path: dayView(lang, f, false), alt: l => dayPath(l, f), changefreq: "yearly" });
  fs.writeFileSync(`${OUT}/${lang}/names.json`, JSON.stringify(Object.fromEntries(SAINTS.map(s => [s.feast, saint(lang, s).name]))));
  urls.push({ path: calendar(lang), alt: l => calPath(l), changefreq: "monthly" });
}
// /sk/ nie je samostatná stránka – slovenská domovská je koreň
out("sk/", `<!doctype html><meta charset="utf-8"><link rel="canonical" href="${SITE}"><meta http-equiv="refresh" content="0; url=../"><title>${BRAND}</title>`);
fs.writeFileSync(`${OUT}/404.html`, page({ lang: "sk", path: "404.html", rel: SITE, title: `404 | ${BRAND}`, desc: UI.sk.notFound, image: imgUrl(SAINTS[0].img, 1200),
  scripts: false, noindex: true, body: () => `<main class="calendar"><article class="card"><h1>404</h1>${LANGS.map(l =>
  `<p>${UI[l].notFound}</p>`).join("")}<nav>${LANGS.map(l =>
  `<a class="btn" hreflang="${l}" href="${SITE}${homePath(l)}">${UI[l].back}</a>`).join("")}</nav></article></main>` }));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(x => `<url><loc>${SITE}${x.path}</loc>${x.changefreq === "daily" ? `<lastmod>${today}</lastmod>` : ""}<changefreq>${x.changefreq}</changefreq>${
  LANGS.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${x.alt(l)}"/>`).join("")}</url>`).join("\n")}
</urlset>
`);
fs.writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`);
console.log(`Hotovo: ${urls.length} stránok v ${OUT}/ (dnešný svätý: ${todayKey})`);
