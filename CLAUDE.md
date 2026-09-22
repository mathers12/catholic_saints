# Svätý dňa (Sanctus diei)

Statická stránka generovaná skriptom `build.mjs` (Node, bez závislostí) do `_site/`:
- dáta: `saints.js` (slovensky) a preklady `i18n/en.js`, `i18n/de.js` (feast -> [name, title, years, quote, source, story]);
- vzhľad a správanie: `style.css`, `app.js`; HTML stránok je šablóna v `build.mjs`;
- výstup: domovská stránka pre každý jazyk, 366 denných stránok × jazyk, kalendár, sitemap.xml, robots.txt (SEO).
- nasadenie: `.github/workflows/pages.yml` pri pushi a každú noc (dnešný svätý na domovskej). `_site/` sa necommituje.
- lokálne: `node build.mjs && python -m http.server -d _site`. Adresa webu je konštanta `SITE` v `build.mjs`.
- kontrola: `node check.mjs` (responzivita a rozloženie nad `_site/`, potrebuje `npm i -g playwright`).

Pri zmene záznamu v `saints.js` uprav aj preklady; biblické odkazy píš ako „Matt 5:8“ (en), „Mt 5,8“ (de).

## Pravidlá pre dáta v saints.js
- Presne jeden záznam na každý deň roka (366 vrátane 29. 2.), zoradené podľa `feast` (`"MM-DD"`).
- Poradie výberu na deň: slávenie podľa kalendára platného na Slovensku (Rímsky misál 2021 – Všeobecný
  kalendár + osobitný kalendár diecéz na Slovensku). Ak v ten deň nie je povinné slávenie, svätý z Rímskeho
  martyrológia na ten deň. Nevymýšľaj ani neposúvaj dátumy.
  Overuj voči direktóriu KBS: https://lc.kbs.sk/?mesiac=RRRR-MM (HTML po mesiacoch; ber viac rokov, lebo nedele,
  pôst a Veľká noc v danom roku sväté prekrývajú). Pohyblivé sviatky a slávenia jednej diecézy do `saints.js` nepatria.
- Texty po slovensky, so správnou diakritikou.
- `quote` musí byť skutočný, overiteľný výrok svätého, alebo verš z Písma súvisiaci s jeho životom,
  a `source` uvádza dielo alebo presný odkaz (napr. „Mt 5, 8“). Nevymýšľaj citáty; keď si nie si istý, použi Písmo.
- `story` = 2–3 vety: konkrétny fakt zo života + povzbudivé ponaučenie pre dnešok.
- `years` = roky života („1567 – 1622“, „† 304“, „1. storočie“), pri sviatkoch Pána a Panny Márie prázdne.
- `symbol` = jedno emoji.
- `img` = názov súboru na Wikimedia Commons (bez `File:`), len voľne použiteľný obrázok; na stránke sa naň
  odkazuje cez URL, nič sa nesťahuje. Nájdeš ho cez `page_image_free` z Wikipedia API (`prop=pageprops`)
  alebo Wikidata vlastnosť P18. Súbor musí existovať priamo na Commons.

## Responzivita (povinné pri každej zmene vzhľadu)
- Všetko sa robí responzívne od 280 px do 1920 px šírky. Zmena vzhľadu nie je hotová, kým `node check.mjs`
  nedobehne bez nálezov; nové rozloženie pridaj aj do kontroly, nech ho pokrýva.
- Na každej šírke platí: žiadne vodorovné posúvanie, nič mimo obrazovky ani orezané, klikateľné prvky
  aspoň 24 px v menšom rozmere (`MIN_TAP` v `check.mjs`).
- Denné stránky sa musia zmestiť na jednu obrazovku bez posúvania od 320×568 vyššie. Pod túto veľkosť smú
  rolovať, ale nesmú nič orezať ani preliezť do strán.
- Kalendár sa na mobile (do 759 px a od 480 px výšky) celý zmestí na obrazovku: karta má výšku okna,
  vidno jej spodok aj navigáciu pod ňou a roluje sa až jej vnútro (`.mbody` = mriežka mesiaca + zoznam mien).
  Hlavička karty a prepínač mesiaca teda z obrazovky nikdy nezmiznú. Na nízkych displejoch (na šírku)
  by bolo vnútorné okno prislabé, tam sa roluje stránka. `check.mjs` toto overuje.
- Rozmery odvodzuj z `clamp()` a relatívnych jednotiek. Pevnú šírku či výšku (napr. `max-width: 260px`) dávaj
  len do media query pre konkrétne rozloženie, nikdy nie globálne – inak to na mobile vyzerá odseknuté.
- Vnútorné odsadenie karty je premenná `--pad`; lišty cez celú šírku karty rob cez `margin-inline: calc(-1 * var(--pad))`.
- Skúšaj aj nemčinu a angličtinu, sú dlhšie ako slovenčina a pretečú skôr; a aj nízke displeje (média
  `max-height`), nielen úzke.
- Počítaj so zväčšeným písmom (Chrome na Androide: Nastavenia → Zjednodušenie prístupu → Veľkosť textu).
  `check.mjs` preto prechádza stránky aj pri 20 px namiesto 16 px; vtedy stránka smie byť dlhšia, ale nesmie
  pretiecť do šírky. Preto žiadne `white-space: nowrap` v lište, ktorá sa musí zmestiť, a dlhé slová nechaj
  zlomiť (`overflow-wrap`).
- Na plochy vyššie ako obrazovka nedávaj `backdrop-filter`. Prehliadače na mobile takú veľkú rozmazanú
  plochu nemusia vykresliť celú a spodok vyzerá odseknutý; tam patrí jednofarebné pozadie.
- `overflow-x` na `body` daj `clip`, nie `hidden` – `hidden` robí z `body` posuvný kontajner a rozbíja
  `position: sticky`. Presah ale rieš tým, že ho odstrániš, nie tým, že ho orežeš.

## Ako pracovať s týmto projektom (šetrenie tokenov a času)
- `saints.js` a `i18n/*.js` sú veľké (150–180 kB). Nečítaj ich celé; vyber si, čo potrebuješ:
  `node -e "global.window={};require('./saints.js');console.log(window.SAINTS.find(s=>s.feast==='09-19'))"`.
- Hromadné zmeny v dátach rob skriptom, nie ručne po záznamoch; odvoditeľné veci (roky, biblické odkazy,
  zoznamy, sitemap) nech generuje kód.
- Overuj naraz a strojovo: prejdi `_site` skriptom (titulok, popis, canonical, jeden `h1`, platné JSON-LD,
  rozbité odkazy) namiesto snímok obrazovky pre jednotlivé stránky. Snímky len na finálnu vizuálnu kontrolu.
- Rozloženie a responzivitu netestuj snímkami, ale skriptom: `node build.mjs && node check.mjs`
  (`--all` prejde všetkých 366 dní × jazyk, inak vzorka 12 dní). Snímky len na finálnu vizuálnu kontrolu.
- Nové dáta pridávaj do samostatných súborov (napr. `themes.js`), needituj kvôli tomu `saints.js`.
- Obrázky sa nesťahujú, odkazuje sa na Wikimedia Commons cez URL. Pred použitím over, že súbor na Commons
  existuje a je voľný (`page_image_free` alebo Wikidata P18).
- Wikipedia/Commons API volaj dávkovo (až 50 titulov v jednej požiadavke), nie po jednom; inak príde HTTP 429.
