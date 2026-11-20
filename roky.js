// Roky, ktoré pápež vyhlásil na počesť svätého (napr. Rok sv. Jozefa 2020 – 2021). Tento súbor sa
// NEGENERUJE, vedie sa ručne, a platí preň to isté čo pre patronaty.js: `url` musí byť stránka na
// vatican.va, ktorá ten rok naozaj vyhlasuje (over to), a `from`, `to` aj `by` (kľúč z POPES
// v patronaty.js) musia byť z nej. Build spadne, keď niečo z toho chýba.
//
// Denná stránka ukáže ten rok, do ktorého dnešný deň patrí (build beží každú noc); keď žiadny
// neplatí, riadok na stránke nie je a netreba nič mazať. `name` je krátky názov v troch jazykoch
// (sk, en, de): na mobile stojí v jednom riadku vedľa „Rímskokatolícka stránka“.
//
// `sk` je nepovinný odkaz pre slovenskú verziu: stránka KBS (kbs.sk alebo tkkbs.sk), ktorá ten istý
// dokument prináša po slovensky. Dátumy a pápež ostávajú z vatican.va; `sk` je len čítanie v reči
// čitateľa, nie druhý zdroj. Keď chýba, aj slovenská verzia vedie na `url`.

window.ROKY = [
  // Dekrét Apoštolskej penitenciárie z 10. 1. 2026 k 800. výročiu smrti sv. Františka z Assisi
  { from: "2026-01-10", to: "2027-01-10", by: "leo14",
    name: ["Rok sv. Františka", "Year of St. Francis", "Franziskus-Jahr"],
    url: "https://www.vatican.va/content/romancuria/en/organismi-di-giustizia/penitenzieria-apostolica/documenti/20260110-indulgenze-sanfrancesco.html",
    // TK KBS 12. 1. 2026: správa s celým znením dekrétu v slovenskom preklade
    sk: "https://www.tkkbs.sk/view.php?cisloclanku=20260112022" },
];
