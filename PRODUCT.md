# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Veriaci každý deň:** pozrie si svätého dňa a nechá sa krátko povzbudiť do dnešného dňa.
- **Ľudia, ktorí sa zaujímajú o svätých:** prezerajú si životy a citáty svätých, aj podľa dátumu v kalendári.
- **Hľadajúci z internetu:** cez vyhľadávač hľadajú, kto je svätý konkrétneho dňa, a prídu rovno na jeho stránku.

Stránka je po slovensky, anglicky a nemecky.

## Product Purpose
Sanctus diei každý deň v roku predstaví svätého alebo sviatok, ktorý si v ten deň pripomína Katolícka cirkev: skutočný citát a dve až tri vety z jeho života s povzbudením pre dnešok.

Úspech znamená, že návštevníka to povzbudí vo viere, ľudia sa vracajú denne a stránku zdieľajú a denné stránky nachádzajú vo vyhľadávačoch.

## Positioning
Spája tri veci naraz: vernosť liturgickému kalendáru platnému na Slovensku a overiteľné citáty, stručnosť jedného svätého na jednu obrazovku a pokojnú modlitbovú atmosféru bez rušivých prvkov.

## Operating Context
Návšteva je krátke každodenné zastavenie alebo príchod z vyhľadávača na konkrétny deň. Obsah sa riadi slávením podľa Rímskeho misála 2021 a direktória Konferencie biskupov Slovenska; v dni bez povinného slávenia ide o svätého z Rímskeho martyrológia.

## Capabilities and Constraints
- 366 denných stránok v každom jazyku, domovská stránka s dnešným svätým, kalendár, stránka „O stránke“.
- Citát je skutočný výrok svätého alebo verš z Písma s presným odkazom. Citáty, dátumy ani slávenia sa nevymýšľajú a neposúvajú.
- Denná stránka sa od 320×568 zmestí na jednu obrazovku bez posúvania.
- Statický web generovaný skriptom, obrázky sú voľne použiteľné súbory z Wikimedia Commons.
- Rozhodnuté majiteľom webu: pri 11. novembri ostáva obraz `Simone_Martini_040.jpg` bez orezania, hoci má na ornáte stredoveký ornament v tvare svastiky.

## Brand Commitments
- Názov je Sanctus diei, po slovensky Svätý dňa.
- Web sa jasne hlási ako rímskokatolícky, v jednote so Svätým Otcom, na každej dennej stránke.
- Web netvrdí oficiálne schválenie Svätej stolice ani Konferencie biskupov Slovenska. Je to súkromná iniciatíva.
- Pozadím je fotka kríža v oblakoch s pokojnou animáciou, ktorú si vybral majiteľ webu (Aaron Burden, CC0). Kríž nesmie byť prekrytý, orezaný ani zafarbený, na mobile ho vidno celý nad kartou, a pravá polovica na počítači nemá čierny tieň.

## Evidence on Hand
- Obsah: `saints.js`, preklady `i18n/en.js` a `i18n/de.js`.
- Text o viere a pôvode výberu: stránka „O stránke“ v `build.mjs`.
- Portréty svätých a fotka kríža z Wikimedia Commons.
- Web nemá referencie, návštevnosť ani oficiálne schválenia. Nič z toho sa nesmie uvádzať ani vymýšľať.

## Product Principles
- Vernosť pred efektom: čo nie je overené, na web nepatrí.
- Jeden deň, jeden svätý, jedna myšlienka do dnešného dňa.
- Stránka vytvára ticho a nesúťaží o pozornosť.
- Každá denná stránka musí obstáť sama, aj keď na ňu návštevník príde priamo z vyhľadávača.

## Accessibility & Inclusion
- Funguje od 280 px do 1920 px, so zväčšeným písmom a bez JavaScriptu.
- Pri obmedzených animáciách v systéme sa pozadie nehýbe.
- Text má kontrast aspoň 4,5:1 aj v najsvetlejšej fáze animácie.
