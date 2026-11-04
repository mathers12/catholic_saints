// Obsah je už v HTML (generuje build.mjs); tu je len oživenie stránky.
// Zámerne bez novšej syntaxe (?. ||=), aby skript bežal aj v starších prehliadačoch. Bez JS fungujú obyčajné odkazy.
const $ = id => document.getElementById(id);
const page = document.body.dataset; // lang, feast, root, home ("1" na domovskej stránke), days (cesta k denným stránkam jazyka); na kalendári a „O stránke“ prázdne
const store = { get: () => { try { return localStorage.getItem("lang"); } catch (e) { return null; } },
                set: v => { try { localStorage.setItem("lang", v); } catch (e) {} } };
const isBot = /bot|crawl|spider|slurp|facebookexternalhit|preview/i.test(navigator.userAgent);
const pad = n => String(n).padStart(2, "0");
const now = new Date();
const todayKey = `${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

if (page.home && !isBot) {
  // domovská stránka: jazyk podľa voľby alebo prehliadača (čeština -> slovenčina), inak angličtina
  const langs = [...$("lang").options].map(o => o.value);
  const want = store.get() || (navigator.languages || [navigator.language]).map(l => l.slice(0, 2).toLowerCase())
    .map(l => l === "cs" ? "sk" : l).find(l => langs.includes(l)) || "en";
  const opt = [...$("lang").options].find(o => o.value === want);
  if (want !== page.lang && opt) location.replace(opt.dataset.href);
  // poistka: keby sa domovská stránka v noci nepregenerovala, ukáž dnešného svätého
  else if (page.feast !== todayKey) location.replace(`${page.days}${todayKey}/`);
}

// kalendár po kliknutí na dátum: klik na dátum otvorí mesiac, deň vedie na stránku svätého (bez JS odkaz vedie na celý kalendár)
let date, view;
const names = {};
const loadNames = () => names[page.lang] = names[page.lang] || fetch(`${page.root}${page.lang}/names.json`).then(r => r.json()).catch(() => ({}));
function renderCal() {
  const y = view.getFullYear(), mo = view.getMonth(), len = new Date(y, mo + 1, 0).getDate();
  $("calTitle").textContent = view.toLocaleDateString(page.lang, { month: "long", year: "numeric" });
  let h = [...Array(7)].map((_, i) => `<span class="wd">${new Date(2024, 0, 1 + i).toLocaleDateString(page.lang, { weekday: "short" })}</span>`).join("")
    + "<span></span>".repeat((view.getDay() + 6) % 7);
  for (let d = 1; d <= len; d++) {
    const k = `${pad(mo + 1)}-${pad(d)}`;
    const cls = [y === now.getFullYear() && k === todayKey && "today", k === page.feast && "cur"].filter(Boolean).join(" ");
    h += `<a href="${page.root}${page.lang}/${k}/" data-k="${k}"${cls ? ` class="${cls}"` : ""}>${d}</a>`;
  }
  $("calGrid").innerHTML = h;
  $("calTip").textContent = "";
  $("calAll").hash = `m${mo + 1}`;
  loadNames().then(n => { if ($("calGrid")) $("calGrid").querySelectorAll("a").forEach(a => a.title = n[a.dataset.k] || ""); });
}
const shiftMonth = n => { view.setMonth(view.getMonth() + n); renderCal(); };

// hľadanie v kalendári: meno, titul aj patronát, bez ohľadu na diakritiku; údaje sa stiahnu až pri prvom použití
const plain = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function wireSearch() {
  const q = $("q");
  if (!q) return;
  const res = $("qres"), main = document.querySelector("main");
  let data = null;
  q.hidden = false;
  const fill = () => {
    const words = plain(q.value).split(/\s+/).filter(Boolean);
    main.classList.toggle("searching", words.length > 0);
    res.hidden = !words.length;
    res.textContent = "";
    if (!words.length || !data) return;
    const hits = data.filter(x => words.every(w => x.hay.includes(w))).slice(0, 50);
    if (!hits.length) { const li = document.createElement("li"); li.textContent = q.dataset.none; res.append(li); return; }
    for (const x of hits) {
      const li = document.createElement("li"), a = document.createElement("a"), d = document.createElement("span"), wrap = document.createElement("span"), sm = document.createElement("small");
      a.href = `${q.dataset.base}${x.f}/`; d.className = "d"; d.textContent = x.d;
      wrap.textContent = x.n; sm.textContent = [x.t, ...x.p].filter(Boolean).join(", "); wrap.append(sm);
      a.append(d, wrap); li.append(a); res.append(li);
    }
  };
  q.oninput = () => {
    if (data) return fill();
    fill();
    fetch(q.dataset.src).then(r => r.json()).then(j => { data = j.map(x => ({ ...x, hay: plain([x.n, x.t, ...x.p].join(" ")) })); fill(); }).catch(() => {});
  };
}

// oživenie stránky: pri načítaní a po každom prepnutí na inú stránku
function wire() {
  const tabs = document.querySelector(".mtabs"), tab = tabs && tabs.querySelector(".now");
  if (tab) tabs.scrollLeft = tab.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - tab.offsetWidth) / 2;
  wireSearch();
  if (!$("date")) return;

  // plný dátum s dňom v týždni (v HTML je len deň a mesiac)
  const [m, d] = page.feast.split("-").map(Number);
  date = page.home ? now : new Date(now.getFullYear(), m - 1, d);
  if (date.getMonth() === m - 1) $("date").textContent = date.toLocaleDateString(page.lang, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const img = document.querySelector(".frame img");
  if (img) {
    const loaded = () => img.classList.add("loaded");
    const failed = () => { const sym = img.nextElementSibling; img.replaceWith(sym.textContent); sym.remove(); };
    img.onload = loaded; img.onerror = failed;
    if (img.complete) (img.naturalWidth ? loaded : failed)(); // obrázok mohol doraziť (alebo zlyhať) skôr, než sa spustil tento skript
  }

  const sh = $("share"); // bez JS by tlačidlo nič nerobilo, preto je v HTML skryté
  if (sh && (navigator.share || navigator.clipboard)) {
    const label = sh.textContent;
    sh.hidden = false;
    sh.onclick = async () => {
      const data = { title: document.title, text: sh.dataset.text, url: location.href };
      try {
        if (navigator.share) return await navigator.share(data);
        await navigator.clipboard.writeText(`${data.text} ${data.url}`);
        sh.textContent = sh.dataset.done;
        setTimeout(() => sh.textContent = label, 2000);
      } catch (e) {} // zrušené zdieľanie nie je chyba
    };
  }

  const dlg = $("cal");
  if (!dlg.showModal) return; // starý prehliadač bez <dialog>: dátum ostane odkazom na celý kalendár
  $("date").onclick = e => { e.preventDefault(); view = new Date(date.getFullYear(), date.getMonth(), 1); renderCal(); dlg.showModal(); };
  $("calPrev").onclick = () => shiftMonth(-1);
  $("calNext").onclick = () => shiftMonth(1);
  dlg.onclick = e => { if (e.target === dlg) dlg.close(); }; // klik mimo okna
  const tip = e => { if (e.target.dataset.k) $("calTip").textContent = e.target.title; };
  $("calGrid").onmouseover = tip; $("calGrid").onfocusin = tip;
}
wire();

const dialogOpen = () => $("cal") && $("cal").open;
const isCalendar = () => !!document.querySelector(".mtabs");
const curMonth = () => +(/^#m(\d+)$/.exec(location.hash) || [])[1] || +document.querySelector(".month.now").id.slice(1);
const goMonth = n => location.replace("#m" + ((curMonth() - 1 + n + 12) % 12 + 1)); // kalendár: bez JS fungujú odkazy #mN
const go = n => { // -1 späť, 1 dopredu: mesiac v kalendári, inak deň
  if (dialogOpen()) return shiftMonth(n);
  if (isCalendar()) return goMonth(n);
  const a = $(n < 0 ? "prev" : "next");
  if (a) a.click();
};
document.addEventListener("change", e => {
  if (e.target.id !== "lang") return;
  store.set(e.target.value);
  const url = new URL(e.target.selectedOptions[0].dataset.href, location.href).href;
  if (canSwap) show(url, true); else location.href = url;
});
addEventListener("keydown", e => {
  if (e.altKey || e.ctrlKey || e.metaKey || /^(SELECT|INPUT)$/.test(e.target.tagName)) return;
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === "ArrowRight") go(1);
});

// potiahnutie prstom doľava/doprava: deň, v kalendári mesiac
let t0 = null;
addEventListener("touchstart", e => {
  const inside = e.target.closest ? e.target : e.target.parentElement;
  t0 = e.touches.length === 1 && !inside.closest(".mtabs") && (!isCalendar() || inside.closest(".card")) ? e.touches[0] : null;
  const a = inside.closest("a");
  if (a) prefetch(a);
}, { passive: true });
addEventListener("touchcancel", () => t0 = null);
addEventListener("touchmove", e => { // vodorovný ťah si vezmeme my; inak prehliadač dobieha gesto a prvé ďalšie ťuknutie sa stratí
  if (!t0 || !e.cancelable) return;
  const dx = Math.abs(e.touches[0].clientX - t0.clientX), dy = Math.abs(e.touches[0].clientY - t0.clientY);
  if (dx > 8 && dx > 1.5 * dy) e.preventDefault();
}, { passive: false });
addEventListener("touchend", e => {
  if (!t0) return;
  const t = e.changedTouches[0], dx = t.clientX - t0.clientX, dy = t.clientY - t0.clientY;
  t0 = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > 1.5 * Math.abs(dy)) go(dx > 0 ? -1 : 1); // zvislé rolovanie nič neprepne
});

// prepínanie stránok bez načítania: pozadie a jeho animácia bežia ďalej, vymení sa len obsah.
// Každá stránka je stále hotová statická stránka; prehliadač bez týchto funkcií a pri chybe použije obyčajné odkazy.
const canSwap = !!(window.fetch && window.DOMParser && window.URL && window.Promise && history.pushState);
const pages = new Map();
const bare = url => url.split("#")[0];
const load = url => {
  const key = bare(url);
  if (!pages.has(key)) pages.set(key, fetch(key).then(r => { if (!r.ok) throw r.status; return r.text(); }).then(t => new DOMParser().parseFromString(t, "text/html")));
  return pages.get(key);
};
const portraitOf = doc => { const i = doc.querySelector(".frame img"); return i && i.getAttribute("src"); };
const ahead = url => load(url).then(doc => { const src = portraitOf(doc); if (src) new Image().src = src; }).catch(() => pages.delete(bare(url)));
const savesData = () => isBot || (navigator.connection && navigator.connection.saveData);
const swappable = a => a.origin === location.origin && !a.target && !a.hasAttribute("download") && /\/$/.test(a.pathname) && a.pathname !== location.pathname;
const prefetch = a => { if (canSwap && !savesData() && a.href && swappable(a)) ahead(a.href); };
const neighbours = () => { if (savesData()) return; for (const id of ["prev", "next"]) { const a = $(id); if (a) ahead(a.href); } };
const live = document.body.appendChild(Object.assign(document.createElement("p"), { className: "sr" }));
live.setAttribute("aria-live", "polite"); // čítačka obrazovky oznámi novú stránku
const META = 'link[rel="canonical"], link[rel="alternate"], meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], script[type="application/ld+json"]';
let turn = 0, shown = location.pathname;
async function show(url, push) {
  const me = ++turn, target = new URL(url);
  try {
    const doc = await load(url), src = portraitOf(doc), portrait = new Image();
    if (src) {
      portrait.src = src;
      await Promise.race([portrait.decode ? portrait.decode().catch(() => {}) : Promise.resolve(), new Promise(r => setTimeout(r, 300))]);
    }
    if (me !== turn) return; // medzitým prišiel ďalší klik
    const b = doc.body.dataset;
    if (b.home && b.feast !== todayKey) return location.assign(url); // nepregenerovaná domovská stránka má vlastnú poistku
    if (push) history.pushState(null, "", bare(url)); // ešte pred výmenou, relatívne odkazy novej stránky sa rátajú od novej adresy
    shown = target.pathname;
    const focused = document.activeElement && document.activeElement.id, fresh = doc.querySelector("main").cloneNode(true), card = fresh.querySelector(".card"), dlg = doc.getElementById("cal");
    const img = fresh.querySelector(".frame img");
    if (img && portrait.complete && portrait.naturalWidth) img.classList.add("loaded"); // bez prelínania z nuly
    if (card) card.classList.add("swap");
    document.documentElement.classList.add("seen");
    document.documentElement.lang = doc.documentElement.lang;
    document.body.className = doc.body.className;
    Object.keys(page).forEach(k => delete page[k]);
    Object.keys(b).forEach(k => page[k] = b[k]);
    document.querySelector("main").replaceWith(fresh);
    if ($("cal")) $("cal").remove();
    if (dlg) fresh.after(dlg.cloneNode(true));
    document.head.querySelectorAll(META).forEach(e => e.remove());
    doc.head.querySelectorAll(META).forEach(e => document.head.append(e.cloneNode(true)));
    document.title = doc.title;
    wire();
    live.textContent = doc.querySelector("h1").textContent;
    if (focused && $(focused)) $(focused).focus({ preventScroll: true });
    scrollTo(0, 0);
    if (target.hash) location.replace(target.hash); // :target sa po pushState sám neobnoví
    neighbours();
  } catch (e) { location.assign(url); }
}
if (canSwap) {
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest("a");
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.origin === location.origin && a.pathname === location.pathname && !a.hash) return e.preventDefault(); // odkaz na tú istú stránku nič nenačítava
    if (!swappable(a)) return;
    e.preventDefault();
    if (dialogOpen()) $("cal").close();
    show(a.href, true);
  });
  document.addEventListener("mouseover", e => { const a = e.target.closest && e.target.closest("a"); if (a) prefetch(a); });
  addEventListener("popstate", () => { if (location.pathname !== shown) show(location.href, false); }); // zmena mesiaca (#mN) stránku nemení
  setTimeout(neighbours, 500);
}
