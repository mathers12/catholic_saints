# ✨ Svätý dňa

Každý deň svätý alebo sviatok podľa liturgického kalendára na Slovensku: citát a pár povzbudivých riadkov
z jeho života. Dni bez povinného slávenia dopĺňajú svätí z Rímskeho martyrológia – spolu 366 dní.

Stránka je po slovensky, anglicky a nemecky; jazyk sa predvyberie podľa prehliadača a dá sa prepnúť pod kartou.

Stránky generuje `node build.mjs` do `_site/` (každý deň má vlastnú stránku v každom jazyku, kvôli vyhľadávačom).
Lokálne: `node build.mjs && python -m http.server -d _site`. Šípky ←/→ alebo potiahnutie prstom prechádzajú dni.

## AI automatizácia
- **@claude** v issue alebo PR komentári → Claude urobí zmenu a otvorí PR (`.github/workflows/claude.yml`).

Pravidlá pre obsah sú v `CLAUDE.md`.
