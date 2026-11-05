// Úradne vyhlásené patronáty. Tento súbor sa NEGENERUJE, vedie sa ručne – a to zámerne.
//
// Súhrnný oficiálny zoznam patrónov neexistuje a nikdy neexistoval: patronát vzniká buď
// vyhlásením pápeža (samostatný apoštolský list, uverejnený v Acta Apostolicae Sedis), alebo
// potvrdením dikastéria pre diecézu či národ, alebo – a tak väčšina – zvykom a ľudovou úctou.
// Tretiu skupinu nemá kto dekretovať, takže každý „zoznam patrónov“ vrátane Wikipédie je
// privátna kompilácia. Tu sú len tie patronáty, ktoré Svätá stolica naozaj niekde hovorí.
//
// Pravidlo pre nový záznam: `url` musí byť stránka na vatican.va (alebo kbs.sk pre Slovensko),
// ktorá ten patronát naozaj obsahuje – over to, nestačí, že sa to niekde píše. `by` a `year`
// vyplň len vtedy, keď ich tá istá stránka uvádza; pri pochybnosti ich nechaj prázdne, radšej
// menej údajov než vymyslený. `doc` je pôvodný názov dokumentu, keď ho zdroj menuje.
// Pozor na folklór: sv. Izidor zo Sevilly sa po celom internete uvádza ako „patrón internetu“,
// hoci ho tak nikdy nikto nevyhlásil. Presne takému záznamu tento súbor bráni.
//
// `seo.mjs` kontroluje, že každý deň existuje, adresy sú zo Svätej stolice a názvy sú v troch jazykoch.

window.POPES = {
  pius9: ["Pius IX.", "Pius IX", "Pius IX."],
  leo13: ["Lev XIII.", "Leo XIII", "Leo XIII."],
  pius11: ["Pius XI.", "Pius XI", "Pius XI."],
  pius12: ["Pius XII.", "Pius XII", "Pius XII."],
  paul6: ["Pavol VI.", "Paul VI", "Paul VI."],
  jp2: ["Ján Pavol II.", "John Paul II", "Johannes Paul II."],
};

// deň -> [{ what: [sk, en, de], by: kľúč do POPES alebo null, year: rok alebo null,
//           doc: názov dokumentu alebo null, url: stránka Svätej stolice }]
window.PATRONATY = {
  "01-24": [{ what: ["patrón spisovateľov", "patron of writers", "Patron der Schriftsteller"],
    by: "pius11", year: 1923, doc: "Rerum omnium perturbationem",
    url: "https://www.vatican.va/content/pius-xi/en/encyclicals/documents/hf_p-xi_enc_26011923_rerum-omnium-perturbationem.html" }],
  "01-28": [{ what: ["patrón katolíckych škôl a univerzít", "patron of Catholic schools and universities", "Patron der katholischen Schulen und Universitäten"],
    by: "leo13", year: 1880, doc: "Cum hoc sit",
    url: "https://www.vatican.va/content/leo-xiii/en/briefs/documents/hf_l-xiii_brief_18800804_cum-hoc-sit.html" }],
  "03-19": [{ what: ["patrón celej Cirkvi", "patron of the whole Church", "Patron der ganzen Kirche"],
    by: "pius9", year: 1870, doc: "Quemadmodum Deus",
    url: "https://www.vatican.va/content/francesco/en/apost_letters/documents/papa-francesco-lettera-ap_20201208_patris-corde.html" }],
  "04-29": [{ what: ["spolupatrónka Európy", "co-patroness of Europe", "Mitpatronin Europas"],
    by: "jp2", year: 1999, doc: "Spes aedificandi",
    url: "https://www.vatican.va/content/john-paul-ii/en/motu_proprio/documents/hf_jp-ii_motu-proprio_01101999_co-patronesses-europe.html" }],
  "05-01": [{ what: ["patrón pracujúcich", "patron of workers", "Patron der Arbeiter"],
    by: "pius12", year: null, doc: "Patris corde",
    url: "https://www.vatican.va/content/francesco/en/apost_letters/documents/papa-francesco-lettera-ap_20201208_patris-corde.html" }],
  "05-30": [{ what: ["patrónka Francúzska", "patroness of France", "Patronin Frankreichs"],
    by: null, year: null, doc: null,
    url: "https://www.vatican.va/content/benedict-xvi/en/audiences/2011/documents/hf_ben-xvi_aud_20110126.html" }],
  "06-22": [{ what: ["patrón politikov a štátnikov", "patron of statesmen and politicians", "Patron der Regierenden und Politiker"],
    by: "jp2", year: 2000, doc: "E sancti Thomae Mori",
    url: "https://www.vatican.va/content/john-paul-ii/en/motu_proprio/documents/hf_jp-ii_motu-proprio_20001031_thomas-more.html" }],
  "07-05": [{ what: ["spolupatróni Európy", "co-patrons of Europe", "Mitpatrone Europas"],
    by: "jp2", year: 1980, doc: "Egregiae virtutis",
    url: "https://www.vatican.va/content/john-paul-ii/la/apost_letters/1980/documents/hf_jp-ii_apl_31121980_egregiae-virtutis.html" }],
  "07-11": [{ what: ["patrón Európy", "patron of Europe", "Patron Europas"],
    by: "paul6", year: 1964, doc: "Pacis nuntius",
    url: "https://www.vatican.va/content/paul-vi/it/apost_letters/documents/hf_p-vi_apl_19641024_pacis-nuntius.html" }],
  "07-23": [{ what: ["spolupatrónka Európy", "co-patroness of Europe", "Mitpatronin Europas"],
    by: "jp2", year: 1999, doc: "Spes aedificandi",
    url: "https://www.vatican.va/content/john-paul-ii/en/motu_proprio/documents/hf_jp-ii_motu-proprio_01101999_co-patronesses-europe.html" }],
  "08-01": [{ what: ["patrón spovedníkov a moralistov", "patron of confessors and moral theologians", "Patron der Beichtväter und Moraltheologen"],
    by: "pius12", year: null, doc: null,
    url: "https://www.vatican.va/content/benedict-xvi/en/audiences/2011/documents/hf_ben-xvi_aud_20110330.html" }],
  "08-04": [{ what: ["patrón farárov", "patron of parish priests", "Patron der Pfarrer"],
    by: "pius11", year: 1929, doc: null,
    url: "https://www.vatican.va/content/benedict-xvi/en/letters/2009/documents/hf_ben-xvi_let_20090616_anno-sacerdotale.html" }],
  "08-09": [{ what: ["spolupatrónka Európy", "co-patroness of Europe", "Mitpatronin Europas"],
    by: "jp2", year: 1999, doc: "Spes aedificandi",
    url: "https://www.vatican.va/content/john-paul-ii/en/motu_proprio/documents/hf_jp-ii_motu-proprio_01101999_co-patronesses-europe.html" }],
  "08-11": [{ what: ["patrónka televízie", "patroness of television", "Patronin des Fernsehens"],
    by: "pius12", year: null, doc: null,
    url: "https://www.vatican.va/content/pius-xii/fr/apost_letters/documents/hf_p-xii_apl_21081958_st-claire.html" }],
  "09-15": [{ what: ["patrónka Slovenska", "patroness of Slovakia", "Patronin der Slowakei"],
    by: null, year: null, doc: null,
    url: "https://www.vatican.va/content/francesco/sk/speeches/2022/april/documents/20220430-pellegrinaggio-slovacchia.html" }],
  "10-01": [
    { what: ["patrónka misií", "patroness of the missions", "Patronin der Mission"],
      by: "pius11", year: 1927, doc: "Divini amoris scientia",
      url: "https://www.vatican.va/content/john-paul-ii/en/apost_letters/1997/documents/hf_jp-ii_apl_19101997_divini-amoris.html" },
    { what: ["patrónka Francúzska", "patroness of France", "Patronin Frankreichs"],
      by: "pius12", year: 1944, doc: "C'est la confiance",
      url: "https://www.vatican.va/content/francesco/en/apost_exhortations/documents/20231015-santateresa-delbambinogesu.html" }],
  "10-04": [{ what: ["patrón ekológie", "patron of ecology", "Patron der Ökologie"],
    by: "jp2", year: 1979, doc: "Inter sanctos",
    url: "https://www.vatican.va/content/john-paul-ii/la/apost_letters/1979/documents/hf_jp-ii_apl_19791129_inter-sanctos.html" }],
  "12-03": [{ what: ["patrón misií", "patron of the missions", "Patron der Mission"],
    by: "pius11", year: 1927, doc: "Divini amoris scientia",
    url: "https://www.vatican.va/content/john-paul-ii/en/apost_letters/1997/documents/hf_jp-ii_apl_19101997_divini-amoris.html" }],
};
