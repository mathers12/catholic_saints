// Obsah je už v HTML (generuje build.mjs); tu je len oživenie stránky.
const $ = id => document.getElementById(id);
const page = document.body.dataset; // lang, feast, home ("1" na domovskej stránke), days (cesta k denným stránkam jazyka)
const store = { get: () => { try { return localStorage.getItem("lang"); } catch { return null; } },
                set: v => { try { localStorage.setItem("lang", v); } catch {} } };
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

// oživenie karty: pri načítaní stránky a po každej výmene karty za iný deň
let date;
function wire() {
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

  // kalendár: klik na dátum otvorí mesiac (bez JS odkaz vedie na celý kalendár)
  $("date").onclick = e => { e.preventDefault(); view = new Date(date.getFullYear(), date.getMonth(), 1); renderCal(); dlg.showModal(); };
}
wire();

// kalendár: klik na dátum otvorí mesiac, deň vedie na stránku svätého (bez JS odkaz vedie na celý kalendár)
const dlg = $("cal");
let view = new Date(date.getFullYear(), date.getMonth(), 1), names;
const loadNames = () => names ||= fetch(`${page.root}${page.lang}/names.json`).then(r => r.json()).catch(() => ({}));
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
  loadNames().then(n => $("calGrid").querySelectorAll("a").forEach(a => a.title = n[a.dataset.k] || ""));
}
const shiftMonth = n => { view.setMonth(view.getMonth() + n); renderCal(); };
$("calPrev").onclick = () => shiftMonth(-1);
$("calNext").onclick = () => shiftMonth(1);
dlg.onclick = e => { if (e.target === dlg) dlg.close(); }; // klik mimo okna
const tip = e => { if (e.target.dataset.k) $("calTip").textContent = e.target.title; };
$("calGrid").onmouseover = tip; $("calGrid").onfocusin = tip;

document.addEventListener("change", e => { if (e.target.id === "lang") { store.set(e.target.value); location.href = e.target.selectedOptions[0].dataset.href; } });
const go = id => dlg.open ? shiftMonth(id === "prev" ? -1 : 1) : $(id) && $(id).click();
addEventListener("keydown", e => { if (e.altKey || e.ctrlKey || e.metaKey || e.target.tagName === "SELECT") return; if (e.key === "ArrowLeft") go("prev"); if (e.key === "ArrowRight") go("next"); });
let t0 = null;
addEventListener("touchstart", e => t0 = e.touches.length === 1 ? e.touches[0] : null, { passive: true });
addEventListener("touchcancel", () => t0 = null);
addEventListener("touchend", e => {
  if (!t0) return;
  const t = e.changedTouches[0], dx = t.clientX - t0.clientX, dy = t.clientY - t0.clientY;
  t0 = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > 1.5 * Math.abs(dy)) go(dx > 0 ? "prev" : "next"); // zvislé rolovanie deň neprepne
});

// prepínanie dní bez načítania celej stránky: pozadie a jeho animácia bežia ďalej, vymení sa len obsah.
// Každý deň je stále hotová statická stránka; bez JS a pri chybe fungujú obyčajné odkazy.
const pages = new Map();
const load = url => {
  if (!pages.has(url)) pages.set(url, fetch(url).then(r => { if (!r.ok) throw r.status; return r.text(); }).then(t => new DOMParser().parseFromString(t, "text/html")));
  return pages.get(url);
};
const ahead = () => { // susedné dni aj ich portréty dopredu, aby bol ďalší klik okamžitý
  if (isBot || navigator.connection?.saveData) return;
  for (const id of ["prev", "next"]) {
    const url = $(id)?.href;
    if (url) load(url).then(doc => { new Image().src = doc.querySelector(".frame img").getAttribute("src"); }).catch(() => pages.delete(url));
  }
};
const live = document.body.appendChild(Object.assign(document.createElement("p"), { className: "sr" }));
live.setAttribute("aria-live", "polite"); // čítačka obrazovky oznámi nový deň
let turn = 0;
async function show(url, push) {
  const me = ++turn;
  try {
    const doc = await load(url), portrait = new Image();
    portrait.src = doc.querySelector(".frame img").getAttribute("src");
    await Promise.race([portrait.decode().catch(() => {}), new Promise(r => setTimeout(r, 300))]);
    if (me !== turn) return; // medzitým prišiel ďalší klik
    const b = doc.body.dataset;
    if (b.home && b.feast !== todayKey) return location.assign(url); // nepregenerovaná domovská stránka má vlastnú poistku
    if (push) history.pushState(null, "", url); // ešte pred výmenou, relatívne odkazy novej karty sa rátajú od novej adresy
    const focused = document.activeElement?.id, card = doc.querySelector(".card").cloneNode(true);
    if (portrait.complete && portrait.naturalWidth) card.querySelector(".frame img").classList.add("loaded"); // bez prelínania z nuly
    card.classList.add("swap");
    document.documentElement.classList.add("seen");
    document.querySelector(".card").replaceWith(card);
    document.querySelector(".top").replaceWith(doc.querySelector(".top").cloneNode(true));
    const META = 'link[rel="canonical"], link[rel="alternate"], meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], script[type="application/ld+json"]';
    document.head.querySelectorAll(META).forEach(e => e.remove());
    doc.head.querySelectorAll(META).forEach(e => document.head.append(e.cloneNode(true)));
    document.title = doc.title;
    for (const k of ["feast", "root", "home", "days"]) if (b[k] === undefined) delete page[k]; else page[k] = b[k];
    $("calAll").setAttribute("href", doc.getElementById("calAll").getAttribute("href"));
    wire();
    live.textContent = doc.querySelector("h1").textContent;
    if (focused) $(focused)?.focus({ preventScroll: true });
    scrollTo(0, 0);
    ahead();
  } catch { location.assign(url); }
}
document.addEventListener("click", e => {
  const a = e.target.closest("#prev, #next, #today, .brand, #calGrid a");
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  if (dlg.open) dlg.close();
  if (a.href !== location.href) show(a.href, true);
});
addEventListener("popstate", () => show(location.href, false));
setTimeout(ahead, 500);
