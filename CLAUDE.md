# Svätý dňa (Sanctus diei)

Statická stránka generovaná skriptom `build.mjs` (Node, bez závislostí) do `_site/`:
- dáta: `saints.js` (slovensky) a preklady `i18n/en.js`, `i18n/de.js` (feast -> [name, title, years, quote, source, story]);
- vzhľad a správanie: `style.css`, `app.js`; HTML stránok je šablóna v `build.mjs`. Prepínanie stránok (`show()` v `app.js`) načíta cieľovú statickú stránku a vymení `main`, dialóg a metaúdaje, pozadie sa nedotkne. Bez JS, v starom prehliadači a pri chybe fungujú obyčajné odkazy, takže každá stránka musí ostať plnohodnotná statická stránka. Nový skript pre stránku patrí do `wire()` v `app.js`, nie inline do šablóny, inak sa po prepnutí nespustí. `app.js` píš bez `?.` a `||=`;
- výstup: domovská stránka pre každý jazyk, 366 denných stránok × jazyk, kalendár, patróni, „O stránke“, sitemap.xml, robots.txt (SEO)
  a presmerovania zo starých adries dní.
- `facts.js` (patróni, miesta, odkazy na Wikipédiu) generuje `node tools/facts.mjs`, `meniny.js` generuje `node tools/meniny.mjs`, `imgs.js` (priame adresy obrázkov) generuje `node tools/imgs.mjs`; ručne ich neupravuj. Nové kategórie patrónov dopĺňaj do `PATRONS` v `tools/facts.mjs` so všetkými tromi názvami
  a zaraď ich do niektorej témy v `THEMES` v `build.mjs` – build spadne, kým kategória nie je v práve jednej téme.
- Fonty (Marcellus, Spectral) sú vlastné v `fonts/`, nie z Google Fonts: cudzí stylesheet blokoval vykreslenie.
  `@font-face` je v `style.css`, `preload` v konštante `FONTS` v `build.mjs`, a adresy musia byť rovnaké,
  ináč sa font stiahne dvakrát (`seo.mjs` to kontroluje). Nový rez alebo novšiu verziu vyrob podľa
  `fonts/README.md`; licencie OFL sa nasadzujú spolu s fontmi.
- Adresa dňa nesie dátum aj meno svätého: `/en/november-4-charles-borromeo/`, `/sk/4-november-karol-boromejsky/`,
  `/de/4-november-karl-borromaeus/`. Skladá ju `daySlug()` v `build.mjs` z mena v danom jazyku (nemčina má `ae`,
  `oe`, `ue`), bez „sv.“, „St.“, „Hl.“ a bez vysvetlivky v zátvorke. Staré adresy `/sk/11-04/` ostávajú ako
  presmerovania (`redirect()`): vedú na ne existujúce odkazy a Google ich má v indexe, takže ich neruš
  a do sitemapy nedávaj. Adresu dňa nikde nepíš ručne – `app.js`, `check.mjs` aj `accept.mjs` ju berú
  z `names.json` (`deň -> [meno, adresa]`), `search.json` ju má v poli `s`.
- `patronaty.js` = úradne vyhlásené patronáty, **vedie sa ručne a negeneruje sa**. Súhrnný oficiálny zoznam
  patrónov neexistuje: patronát vzniká vyhlásením pápeža, potvrdením dikastéria, alebo – a tak väčšina –
  zvykom, ktorý nemá kto dekretovať. Preto tu smie byť len to, čo Svätá stolica naozaj niekde hovorí: `url`
  musí byť stránka na vatican.va, ktorá ten patronát obsahuje (over to), a `by` s `year` vyplň len vtedy,
  keď ich tá istá stránka uvádza. `card` je spoločný názov kartičky, keď sa má viac záznamov zlúčiť
  (patróni Európy majú každý svoje znenie). Web je pre tri jazyky, takže patrón jednej diecézy jednej
  krajiny sem nepatrí – patronáty slovenských diecéz tu boli a vypadli; národný patronát (Slovensko,
  Francúzsko) ostáva, ten má väčšina krajín. Build spadne, keď deň neexistuje, chýba názov v jednom
  z jazykov, odkaz nie je zo Svätej stolice alebo pápež nie je v `POPES`. Patronáty z `facts.js` (Wikipédia)
  nemajú odkaz na dokument a web to pri nich hovorí – nemiešaj ich s úradnými.
- Lišta hlavného menu (`menu()` v `build.mjs`) je na každej stránke rovnaká: kalendár, patróni,
  „O stránke“ a prepínač jazyka; na podstránkach ešte krížik. Stránka, na ktorej práve si, nie je
  odkaz, ale `.here` s `aria-current`. Na užších displejoch sa časť odkazov nezmestí a CSS ich
  skryje: kalendár pod 480 px, patróni pod 768 px („Schutzpatrone“ vedľa „Heiligenkalender“ zalomí
  lištu cez kríž), „O stránke“ mimo počítača. Preto majú podstránky tie isté odkazy aj v navigácii
  pod kartou (`.cal-btn`, `.pat-btn`, `.about-btn`) a tá ich naopak skrýva tam, kde ich ukazuje
  lišta. **Tie dvojice hraníc musia sedieť**, ináč sa odkaz buď stratí, alebo bude na stránke
  dvakrát; `accept.mjs` to kontroluje na počítači aj na mobile.
- Stránka patrónov: všetko je v jednej reči kartičiek pod jedným filtrom. Prvá téma sú úradné patronáty
  z `patronaty.js` (`officialCards()`), za ňou päť tém kategórií z Wikipédie (`THEMES` v `build.mjs`).
  Kartička má všetky mená, nie len ukážku – na detail netreba druhý klik, a má id `pat-<kľúč>`:
  patronát na dennej stránke je odkaz na ňu (`patronLinks()`), nech sa z jedného svätého dá prejsť
  na ostatných patrónov tej istej veci. `seo.mjs` overuje po jazykoch, že tie kotvy existujú –
  kontrola vnútorných odkazov totiž hash ignoruje. Rozloženie je viacstĺpcové
  (`.pgrid { columns }`), nie grid, lebo kartičky sú rôzne vysoké. `.pcard` ani `.ptheme` nesmú dostať
  vlastný `display`, ináč prestane fungovať atribút `hidden`, ktorým filter skrýva. Filter je
  `wirePatrons()` v `app.js`: porovnáva s `data-find` priamo v HTML, nič nesťahuje, a prázdnu tému
  skryje tiež. Bez JS je políčko skryté a všetky kategórie aj mená sú v stránke.
- Hľadanie v kalendári drží dopyt v adrese (`?q=`), takže sa výsledky dajú poslať odkazom a Späť sa na ne
  vráti. `wireSearch()` v `app.js` ho pri načítaní prečíta a pri písaní zapíše (`replaceState` s odkladom,
  prehliadače počet zmien adresy obmedzujú). Tú istú adresu uvádza `SearchAction` v JSON-LD na domovskej
  stránke (`searchTarget()` v `build.mjs`). Google z nej vyhľadávacie okienko vo výsledkoch od 21. 11. 2024
  nerobí a značku nepodporuje, ostáva ako platná schema.org pre ostatné čítačky.
- Pozadie je fotka kríža v oblakoch s pomalým svitaním (`.scene` v `build.mjs` a `style.css`). Kríž je vrchná vrstva tej istej fotky orezaná
  cez `clip-path`, takže modrá noc ani tieň ho neprekryjú. Na mobile stojí na kopci (`.stage::after`), ktorý prejde do karty, lebo fotka končí uprostred stĺpa. Nepoužívaj `color-dodge` (kríž zafarbí) a animuj len `opacity` a `transform`.
- Web sa jasne hlási ako rímskokatolícky (odkaz „✝ Rímskokatolícka stránka“ na každej dennej stránke → „O stránke“,
  JSON-LD `about` = Katolícka cirkev). Pri novom pápežovi zmeň konštantu `POPE` v `build.mjs`. Netvrď oficiálne
  schválenie Svätej stolice ani KBS, kým ho web naozaj nemá.
- Rozsah je latinský (rímsky) obrad a nerozširuj ho: kalendár ide z Rímskeho misála, patronáty
  z vatican.va a z latinského kalendára KBS. Gréckokatolícke eparchie na Slovensku sem nepatria –
  nie preto, že by neboli katolícke (sú, v plnom spoločenstve s Rímom), ale preto, že majú vlastný
  byzantský kalendár a web sa drží jedného. To isté platí pre pravoslávnych a iné cirkvi.
- nasadenie: `.github/workflows/pages.yml` pri pushi a každú noc (dnešný svätý na domovskej). `_site/` sa necommituje.
- lokálne: `node build.mjs && python -m http.server -d _site`. Adresa webu je konštanta `SITE` v `build.mjs`.
- `style.css` a `app.js` sa odkazujú s `?v=<hash obsahu>`, aby prehliadač po nasadení nedržal starú verziu
  z cache. Nové statické súbory pridávaj cez `asset()` v `build.mjs`, nie natvrdo.
- kontrola: `node check.mjs` (responzivita a rozloženie nad `_site/`, potrebuje `npm i -g playwright`).
- SEO: `node seo.mjs` (nad `_site/`, bez závislostí: titulok do 65 znakov, popis do 160, canonical, hreflang
  vrátane `x-default`, jeden `h1`, platné JSON-LD, sitemap, rozbité odkazy, presmerovania zo starých adries dní,
  `SearchAction`, úradné patronáty aj kategórie patrónov
  (odkaz na Svätú stolicu, rovnaký počet vo všetkých jazykoch, žiadna prázdna téma) a že `preload` fotky aj fontov sedí s adresami v CSS). Musí dobehnúť bez nálezov; pri novej stránke alebo metaúdaji kontrolu doplň.
- akceptačné testy: `node accept.mjs` (správanie v prehliadači: navigácia, kalendár, prepínanie dní bez načítania, dotyk, kontrast; vlastný server, potrebuje internet kvôli fotkám). `--browser=firefox` alebo `--browser=webkit` ich pustí v inom prehliadači, dotyk a snímky obrazovky sú len v Chromiu. Pri zmene správania test doplň alebo uprav.

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
  alebo Wikidata vlastnosť P18. Súbor musí existovať priamo na Commons. Po zmene `img` spusti
  `node tools/imgs.mjs`, ináč odkaz na obrázok ide cez dve presmerovania (a `seo.mjs` to nahlási).

## Responzivita (povinné pri každej zmene vzhľadu)
- Všetko sa robí responzívne od 280 px do 1920 px šírky. Zmena vzhľadu nie je hotová, kým `node check.mjs`
  nedobehne bez nálezov; nové rozloženie pridaj aj do kontroly, nech ho pokrýva.
- Na každej šírke platí: žiadne vodorovné posúvanie, nič mimo obrazovky ani orezané, klikateľné prvky
  aspoň 24 px v menšom rozmere (`MIN_TAP` v `check.mjs`).
- Denné stránky sa musia zmestiť na jednu obrazovku bez posúvania od 320×568 vyššie. Pod túto veľkosť smú
  rolovať, ale nesmú nič orezať ani preliezť do strán.
- Kalendár sa (od 480 px výšky) celý zmestí na obrazovku: karta má výšku okna,
  vidno jej spodok aj navigáciu pod ňou a roluje sa až jej vnútro (`.mbody` = mriežka mesiaca + zoznam mien).
  Hlavička karty a prepínač mesiaca teda z obrazovky nikdy nezmiznú. Denná karta nesmie od 640 px výšky zakryť kríž: na mobile a tablete na výšku je celá scéna nad kartou (mriežka na `body.day`, jednotky `cqh`) a kríž sa zmenší tak, aby ho bolo vidno celý. Na počítači (od 1024 px) je text vpravo od neho. Na nízkych displejoch (na šírku)
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
- Rob len to, o čo používateľ požiada; vylepšenia navrhni a spýtaj sa. Hotovú zmenu (po `check.mjs` bez nálezov a `accept.mjs` bez chýb)
  rovno pushni, vytvor pull request a zlúč ho do `main` – netreba sa pýtať.
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
  existuje a je voľný (`page_image_free` alebo Wikidata P18). Odkazuje sa priamo na thumbnail
  (`imgUrl()` v `build.mjs`), nie cez `Special:FilePath`, ktorý vracia dve presmerovania. Adresy
  nerekonštruuj ručne – sú v `imgs.js` z Commons API, lebo Commons povoľuje len štandardné šírky
  (`STEPS`), nie väčšie než originál, dlhé názvy skracuje na `<šírka>px-thumbnail.jpg` a niektoré
  súbory sú presmerované na iný názov.
- Wikipedia/Commons API volaj dávkovo (až 50 titulov v jednej požiadavke), nie po jednom; inak príde HTTP 429.
