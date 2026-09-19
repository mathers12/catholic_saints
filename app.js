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

// plný dátum s dňom v týždni (v HTML je len deň a mesiac)
const [m, d] = page.feast.split("-").map(Number);
const date = page.home ? now : new Date(now.getFullYear(), m - 1, d);
if (date.getMonth() === m - 1) $("date").textContent = date.toLocaleDateString(page.lang, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

const img = document.querySelector(".frame img");
if (img) {
  if (img.complete && img.naturalWidth) img.classList.add("loaded");
  img.onload = () => img.classList.add("loaded");
  img.onerror = () => img.replaceWith(img.nextElementSibling.textContent);
}

$("lang").onchange = e => { store.set(e.target.value); location.href = e.target.selectedOptions[0].dataset.href; };
const go = id => $(id) && $(id).click();
addEventListener("keydown", e => { if (e.key === "ArrowLeft") go("prev"); if (e.key === "ArrowRight") go("next"); });
let x0 = null;
addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 60) go(dx > 0 ? "prev" : "next"); x0 = null; });

// svetielka stúpajú zo zeme k nebu ako modlitby
const c = $("motes"), ctx = c.getContext("2d");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const dpr = devicePixelRatio;
let W, H, motes = [];
const resize = () => { W = c.width = innerWidth * dpr; H = c.height = innerHeight * dpr; };
const mote = (y = Math.random() * H) => ({ x: Math.random() * W, y, s: (Math.random() * 1.8 + .6) * dpr, v: Math.random() * .35 + .12, p: Math.random() * 6.28 });
resize(); addEventListener("resize", resize);
for (let i = 0; i < 60; i++) motes.push(mote());
(function tick() {
  ctx.clearRect(0, 0, W, H);
  for (const mo of motes) {
    mo.y -= mo.v * dpr; mo.p += .02;
    if (mo.y < -10) Object.assign(mo, mote(H + 10));
    const a = (.55 + Math.sin(mo.p) * .35) * Math.min(1, mo.y / (H * .3));
    ctx.beginPath(); ctx.arc(mo.x + Math.sin(mo.p) * 8, mo.y, mo.s, 0, 6.28);
    ctx.fillStyle = `rgba(255,250,235,${a})`; ctx.shadowColor = "#ffd98a"; ctx.shadowBlur = 10; ctx.fill();
  }
  if (!still) requestAnimationFrame(tick);
})();
