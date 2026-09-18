# ✨ Svätý dňa

Každý deň svätý alebo sviatok podľa liturgického kalendára na Slovensku: citát a pár povzbudivých riadkov
z jeho života. Dni bez povinného slávenia dopĺňajú svätí z Rímskeho martyrológia – spolu 366 dní.

Stačí otvoriť `index.html` cez ľubovoľný server (napr. `python -m http.server`).
Šípky ←/→ alebo potiahnutie prstom prechádzajú dni.

## AI automatizácia
- **@claude** v issue alebo PR komentári → Claude urobí zmenu a otvorí PR (`.github/workflows/claude.yml`).
- **Každý pondelok** Claude skontroluje svätých na najbližší mesiac a opravy navrhne cez PR (`.github/workflows/weekly-saint.yml`).

Pravidlá pre obsah sú v `CLAUDE.md`.
