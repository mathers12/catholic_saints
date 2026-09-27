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
// meno pápeža na stránke „O stránke“ – pri novom pápežovi zmeň tu (sk, en, de)
const POPE = { sk: "Levom XIV.", en: "Pope Leo XIV", de: "Papst Leo XIV." };

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
const dayPath = (lang, feast) => `${lang}/${feast}/`;
const calPath = lang => `${lang}/${UI[lang].calSlug}/`;
const aboutPath = lang => `${lang}/${UI[lang].aboutSlug}/`;

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
    ? { "@context": "https://schema.org", "@type": "WebSite", name: BRAND, alternateName: u.site, url: SITE, inLanguage: lang, description: desc, about: CHURCH }
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
<a class="faith" href="${rel}${aboutPath(lang)}" title="${u.about}"><span class="cross" aria-hidden="true">✝</span>${u.faith}</a>
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

// kalendár: potiahnutie prstom doľava/doprava (a šípky) prepne mesiac; bez JS fungujú odkazy #mN
const CAL_JS = `(() => {
  const cur = () => +(/^#m(\\d+)$/.exec(location.hash) || [])[1] || +document.querySelector(".month.now").id.slice(1);
  const go = n => location.replace("#m" + ((cur() - 1 + n + 12) % 12 + 1));
  addEventListener("keydown", e => { if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); });
  let p = null;
  const card = document.querySelector(".calendar .card");
  card.addEventListener("touchstart", e => p = e.touches.length === 1 && !e.target.closest(".mtabs") ? e.touches[0] : null, { passive: true });
  card.addEventListener("touchend", e => {
    if (!p) return;
    const t = e.changedTouches[0], dx = t.clientX - p.clientX, dy = t.clientY - p.clientY;
    p = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > 1.5 * Math.abs(dy)) go(dx > 0 ? -1 : 1);
  });
})();`;

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
<nav><a class="btn" href="${rel}${homePath(lang)}">${u.today}</a><a class="btn" href="${rel}${aboutPath(lang)}">${u.about}</a>${LANGS.map(l => l === lang ? `<span class="btn on">${l.toUpperCase()}</span>`
  : `<a class="btn" hreflang="${l}" href="${rel}${calPath(l)}" title="${UI[l].cal}">${l.toUpperCase()}</a>`).join("")}</nav>
</main>
<script>${CAL_JS}</script>` }));
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
  const title = `${u.about} – ${u.faith} | ${BRAND}`;
  out(path, page({ lang, path, title, desc: a.desc, alts, image: imgUrl(SAINTS[0].img, 1200), scripts: false,
    jsonld: { "@context": "https://schema.org", "@type": "AboutPage", name: title, url: SITE + path, inLanguage: lang, description: a.desc, about: CHURCH,
              isPartOf: { "@type": "WebSite", name: BRAND, url: SITE } },
    body: rel => `<main class="prose">
<a class="date" href="${rel}${homePath(lang)}">‹ ${u.site}</a>
<article class="card">
<p class="seal" aria-hidden="true">✝</p>
<h1>${u.about}</h1>
<p class="lead">${a.lead}</p>
${a.parts.map(([h, ps]) => `<h2>${h}</h2>\n${ps.map(p => `<p>${esc(p)}</p>`).join("\n")}`).join("\n")}
<ul>${LINKS.map(([href, t]) => `<li><a href="${href}" rel="noopener">${t}</a></li>`).join("")}</ul>
</article>
<nav><a class="btn" href="${rel}${homePath(lang)}">${u.today}</a><a class="btn" href="${rel}${calPath(lang)}">${u.cal}</a>${LANGS.map(l => l === lang ? `<span class="btn on">${l.toUpperCase()}</span>`
  : `<a class="btn" hreflang="${l}" href="${rel}${aboutPath(l)}" title="${UI[l].about}">${l.toUpperCase()}</a>`).join("")}</nav>
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
  urls.push({ path: aboutPage(lang), alt: l => aboutPath(l), changefreq: "yearly" });
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
