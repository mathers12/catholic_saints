# Svätý dňa

Statická stránka bez buildu: `index.html` (dizajn + logika) a `saints.js` (dáta).

## Pravidlá pre dáta v saints.js
- Texty po slovensky, so správnou diakritikou.
- `feast` = deň sviatku `"MM-DD"` podľa rímskeho kalendára platného na Slovensku; žiadne duplicity.
- `quote` musí byť skutočný, overiteľný citát svätého (alebo z Písma pri apoštoloch) a `source` uvádza dielo.
  Nevymýšľaj citáty. Ak je autorstvo len tradičné, napíš to do `source` („tradične pripisovaná“).
- `story` = 2–3 vety: konkrétny fakt zo života + povzbudivé ponaučenie pre dnešok.
- `symbol` = jedno emoji.
- `img` = názov súboru na Wikimedia Commons (bez `File:`), len voľne použiteľný obrázok.
  Nájdeš ho cez `page_image_free` z Wikipedia API (`prop=pageprops`) alebo Wikidata vlastnosť P18.
- `focus` = `[x, y, priblíženie]`: stred tváre ako podiel šírky/výšky obrázka (0–1) a zoom (1 = celý výrez,
  2 = 2× bližšie pre celopostavové obrazy). Tvár musí byť v kruhu celá, v strede.
- Zoznam udržuj zoradený podľa `feast`.
