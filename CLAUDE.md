# Svätý dňa (Sanctus diei)

Statická stránka generovaná skriptom `build.mjs` (Node, bez závislostí) do `_site/`:
- dáta: `saints.js` (slovensky) a preklady `i18n/en.js`, `i18n/de.js` (feast -> [name, title, years, quote, source, story]);
- vzhľad a správanie: `style.css`, `app.js`; HTML stránok je šablóna v `build.mjs`;
- výstup: domovská stránka pre každý jazyk, 366 denných stránok × jazyk, kalendár, sitemap.xml, robots.txt (SEO).
- nasadenie: `.github/workflows/pages.yml` pri pushi a každú noc (dnešný svätý na domovskej). `_site/` sa necommituje.
- lokálne: `node build.mjs && python -m http.server -d _site`. Adresa webu je konštanta `SITE` v `build.mjs`.

Pri zmene záznamu v `saints.js` uprav aj preklady; biblické odkazy píš ako „Matt 5:8“ (en), „Mt 5,8“ (de).

## Pravidlá pre dáta v saints.js
- Presne jeden záznam na každý deň roka (366 vrátane 29. 2.), zoradené podľa `feast` (`"MM-DD"`).
- Poradie výberu na deň: slávenie podľa kalendára platného na Slovensku (Rímsky misál 2021 – Všeobecný
  kalendár + osobitný kalendár diecéz na Slovensku). Ak v ten deň nie je povinné slávenie, svätý z Rímskeho
  martyrológia na ten deň. Nevymýšľaj ani neposúvaj dátumy.
- Texty po slovensky, so správnou diakritikou.
- `quote` musí byť skutočný, overiteľný výrok svätého, alebo verš z Písma súvisiaci s jeho životom,
  a `source` uvádza dielo alebo presný odkaz (napr. „Mt 5, 8“). Nevymýšľaj citáty; keď si nie si istý, použi Písmo.
- `story` = 2–3 vety: konkrétny fakt zo života + povzbudivé ponaučenie pre dnešok.
- `years` = roky života („1567 – 1622“, „† 304“, „1. storočie“), pri sviatkoch Pána a Panny Márie prázdne.
- `symbol` = jedno emoji.
- `img` = názov súboru na Wikimedia Commons (bez `File:`), len voľne použiteľný obrázok; na stránke sa naň
  odkazuje cez URL, nič sa nesťahuje. Nájdeš ho cez `page_image_free` z Wikipedia API (`prop=pageprops`)
  alebo Wikidata vlastnosť P18. Súbor musí existovať priamo na Commons.
