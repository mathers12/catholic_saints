# Fonty

Vlastné kópie, nie Google Fonts: stylesheet z `fonts.googleapis.com` blokoval vykreslenie
a fonty prichádzali z druhej cudzej domény (`fonts.gstatic.com`), takže pred prvým textom
bolo treba dve DNS + TLS spojenia a 8 súborov (`latin` aj `latin-ext`, slovenčina potrebuje oba).
Takto sú to 4 súbory z vlastnej domény, ktorá už je otvorená.

Oba fonty sú pod licenciou SIL Open Font License 1.1 (`OFL-*.txt`), teda ich smieme hostovať.

Súbory sú podmnožiny originálov z https://github.com/google/fonts (`ofl/marcellus`, `ofl/spectral`)
zúžené na `latin` + `latin-ext` (rozsahy sú tie, ktoré používa samo Google). Keď bude treba
nová verzia alebo ďalší rez, vyrob ju takto (`pip install fonttools brotli`):

    R='U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD,U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113,U+2C60-2C7F,U+A720-A7FF'
    python -m fontTools.subset Spectral-Regular.ttf --unicodes="$R" \
      --layout-features='kern,liga,calt,ccmp,locl,mark,mkmk,rlig' \
      --flavor=woff2 --no-hinting --desubroutinize --output-file=spectral-400.woff2

`@font-face` je v `style.css`, `preload` v hlavičke v `build.mjs`; adresy musia byť rovnaké,
ináč sa font stiahne dvakrát (`seo.mjs` to kontroluje).
