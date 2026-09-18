# ✨ Svätý dňa

Každý deň jeden katolícky svätý: citát z jeho života a pár povzbudivých riadkov.
Ak má svätý v daný deň sviatok, zobrazí sa on; inak sa svätí striedajú podľa dňa v roku.

Stačí otvoriť `index.html` cez ľubovoľný server (napr. `python -m http.server`).
Šípky ←/→ alebo potiahnutie prstom prechádzajú dni.

## AI automatizácia
- **@claude** v issue alebo PR komentári → Claude urobí zmenu a otvorí PR (`.github/workflows/claude.yml`).
- **Každý pondelok** Claude pridá nového svätého cez PR (`.github/workflows/weekly-saint.yml`).

Pravidlá pre obsah sú v `CLAUDE.md`.
