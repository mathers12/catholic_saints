// Jeden svätý (alebo sviatok) na každý deň roka podľa liturgického kalendára na Slovensku.
// feast = "MM-DD". Citáty sú overené výroky svätých alebo verše z Písma, vždy so zdrojom. Obrázky: Wikimedia Commons.
window.SAINTS = [
  {
    name: "Panna Mária, Bohorodička", img: "Madonna_Advocata.png", feast: "01-01", years: "1. storočie", title: "slávnosť", symbol: "👑",
    quote: "Mária však zachovávala všetky tieto slová a premýšľala o nich vo svojom srdci.", source: "Lk 2, 19",
    story: "Nový rok Cirkev začína s Máriou, ktorej Boh zveril svojho Syna. Nerozumela všetkému, a predsa verila a v tichu uvažovala. Vstúp do nového roka s rovnakou dôverou."
  },
  {
    name: "sv. Bazil Veľký a Gregor Naziánsky", img: "Basil_of_Caesarea.jpg", feast: "01-02", years: "4. storočie", title: "biskupi a učitelia Cirkvi", symbol: "📚",
    quote: "Chlieb, ktorý si necháš, patrí hladnému; plášť v tvojej truhlici patrí nahému.", source: "sv. Bazil, Homília o lakomstve",
    story: "Dvaja priatelia zo štúdií v Aténach, ktorí spolu hľadali Boha a obhajovali vieru v Najsvätejšiu Trojicu. Bazil postavil pri Cézarei celé mesto lásky pre chorých a chudobných. Skutočné priateľstvo nás približuje k Bohu."
  },
  {
    name: "Najsvätejšie meno Ježiš", img: "IHS_monogram_Gesu.jpg", feast: "01-03", years: "", title: "ľubovoľná spomienka", symbol: "✝️",
    quote: "Preto ho Boh nadovšetko povýšil a dal mu meno, ktoré je nad každé iné meno.", source: "Flp 2, 9",
    story: "Meno Ježiš znamená „Boh zachraňuje“. Svätý Bernardín zo Sieny ho nosil na tabuľke a ukazoval ľuďom, aby si pripomenuli, komu patria. Vyslov dnes to meno s láskou a dôverou."
  },
  {
    name: "sv. Alžbeta Anna Setonová", img: "Elizabeth_Ann_Seton_portrait_by_Amabilia_Filicchi.jpg", feast: "01-04", years: "1774 – 1821", title: "rehoľníčka, zakladateľka", symbol: "🍎",
    quote: "Žime jednoducho, aby iní mohli jednoducho žiť.", source: "Listy",
    story: "Mladá vdova s piatimi deťmi prestúpila ku katolíckej viere a stratila pre to priateľov aj oporu. Napriek tomu založila prvú katolícku školu a rehoľu v Amerike. Z bolesti sa môže zrodiť dielo, ktoré prežije storočia."
  },
  {
    name: "sv. Ján Nepomuk Neumann", img: "Johannes_Nepomuk_Neumann.jpg", feast: "01-05", years: "1811 – 1860", title: "biskup vo Filadelfii", symbol: "🏫",
    quote: "Choďte teda, učte všetky národy a krstite ich v mene Otca i Syna i Ducha Svätého.", source: "Mt 28, 19",
    story: "Rodák z Prachatíc v Čechách odišiel za kňazstvom do Ameriky, keď ho doma nechceli vysvätiť. Pešo obchádzal farnosti a hovoril až dvanástimi jazykmi, aby rozumel každému. Ak sa jedny dvere zatvoria, Boh otvára iné."
  },
  {
    name: "Zjavenie Pána – Traja králi", img: "Magi_(1).jpg", feast: "01-06", years: "", title: "slávnosť", symbol: "⭐",
    quote: "Videli sme jeho hviezdu na východe a prišli sme sa mu pokloniť.", source: "Mt 2, 2",
    story: "Mudrci z Východu nasledovali hviezdu cez púšte, kým nenašli malé dieťa v Betleheme. Doniesli mu zlato, kadidlo a myrhu. Kto úprimne hľadá, nájde; aj tvoja hviezda ťa vedie k Nemu."
  },
  {
    name: "sv. Rajmund z Peňafortu", img: "St._Raymond_of_Penyafort_(cropped).jpg", feast: "01-07", years: "okolo 1175 – 1275", title: "kňaz, dominikán", symbol: "⚖️",
    quote: "Kto je najväčší medzi vami, nech je ako najmenší, a predstavený ako ten, čo slúži.", source: "Lk 22, 26",
    story: "Slávny právnik zostavil zákonník Cirkvi, ktorý platil sedem storočí. Keď ho zvolili za generála rehole, po dvoch rokoch sa vzdal úradu, aby sa venoval modlitbe a kázaniu. Zomrel takmer storočný. Veľkosť spočíva v službe, nie v titule."
  },
  {
    name: "sv. Severín Norický", img: "Severin_von_Noricum_(um_1470).jpg", feast: "01-08", years: "okolo 410 – 482", title: "mních, apoštol Podunajska", symbol: "🏞️",
    quote: "Bol som hladný a dali ste mi jesť, bol som pocestný a pritúlili ste ma.", source: "Mt 25, 35",
    story: "Keď sa Rímska ríša rúcala a pozdĺž Dunaja plienili barbari, prišiel mních Severín a zorganizoval pomoc hladným a utečencom. Nechcel hovoriť o svojom pôvode, len slúžil. V časoch chaosu môže jeden verný človek zmeniť celý kraj."
  },
  {
    name: "sv. Julián a Bazilisa", img: "Basilissa_Julian.jpg", feast: "01-09", years: "† okolo 304", title: "manželia a mučeníci", symbol: "💍",
    quote: "Láska je trpezlivá, láska je dobrotivá, láska nezávidí.", source: "1 Kor 13, 4",
    story: "Egyptskí manželia zasvätili svoj dom Bohu a premenili ho na útočisko pre chorých a opustených. Bazilisa viedla ženy, Julián mužov. Spoločná služba Bohu môže byť najkrajším putom manželstva."
  },
  {
    name: "sv. Gregor Nysský", img: "Gregory_of_Nyssa.jpg", feast: "01-10", years: "okolo 335 – 394", title: "biskup a učiteľ Cirkvi", symbol: "🔥",
    quote: "Toto je skutočná dokonalosť: nikdy neprestať rásť k lepšiemu.", source: "O dokonalosti",
    story: "Mladší brat sv. Bazila bol spočiatku rétor a oženil sa, no nakoniec sa stal biskupom a jedným z najhlbších mysliteľov Cirkvi. Učil, že cesta k Bohu nemá koniec. Nikdy nie si hotový – a to je nádherná správa."
  },
  {
    name: "sv. Teodóz Cenobiarcha", img: "Theodosius_the_Cenobiarch.jpg", feast: "01-11", years: "okolo 423 – 529", title: "opát v Judskej púšti", symbol: "🏜️",
    quote: "Hľa, aké dobré a milé je, keď bratia žijú v jednote.", source: "Ž 133, 1",
    story: "Pri Betleheme založil kláštor, kde žili stovky mníchov a pri ňom nemocnicu i útulok pre starých. Zomrel vo veku vyše sto rokov. Spoločenstvo, kde sa ľudia modlia a slúžia, je malým obrazom neba."
  },
  {
    name: "sv. Aelred z Rievaulx", img: "De_Speculo_Caritatis.jpeg", feast: "01-12", years: "1110 – 1167", title: "opát, cisterciát", symbol: "🤝",
    quote: "Priateľ je strážcom lásky, ba strážcom samej duše.", source: "O duchovnom priateľstve",
    story: "Mladý dvoran na škótskom kráľovskom dvore opustil kariéru a vstúpil ku cisterciánom. Napísal slávnu knihu o duchovnom priateľstve. Dobrý priateľ je Boží dar – ďakuj dnes za niekoho, kto ti je blízky."
  },
  {
    name: "sv. Hilár z Poitiers", img: "Hilaryofpoitiers.jpg", feast: "01-13", years: "okolo 315 – 367", title: "biskup a učiteľ Cirkvi", symbol: "🛡️",
    quote: "Viem, všemohúci Bože Otče, že mojou najväčšou povinnosťou v živote je, aby o tebe hovorilo každé moje slovo a každá myšlienka.", source: "O Trojici I, 37",
    story: "Pohan, ktorý našiel Boha pri čítaní Písma. Ako biskup statočne bránil vieru v Kristovo božstvo a za to ho poslali do vyhnanstva. Aj tam písal a posilňoval veriacich. Pravda sa oplatí brániť aj za cenu pohodlia."
  },
  {
    name: "sv. Felix z Noly", img: "Felix_of_Nola-1.jpg", feast: "01-14", years: "† okolo 260", title: "kňaz a vyznávač", symbol: "🕸️",
    quote: "Pán je môj pastier, nič mi nechýba.", source: "Ž 23, 1",
    story: "Počas prenasledovania ho mučili a väznili. Podľa legendy, keď sa ukryl pred vojakmi, pavúk zatiahol vchod pavučinou a prenasledovatelia prešli okolo. Boh chráni svojich aj tými najkrehkejšími prostriedkami."
  },
  {
    name: "sv. Pavol Pustovník", img: "San_Pablo_Ermitaño,_por_José_de_Ribera.jpg", feast: "01-15", years: "okolo 227 – 341", title: "prvý pustovník", symbol: "🦅",
    quote: "Hľadajte najprv Božie kráľovstvo a jeho spravodlivosť a všetko ostatné dostanete navyše.", source: "Mt 6, 33",
    story: "Pred prenasledovaním utiekol do egyptskej púšte a zostal tam takmer sto rokov v modlitbe. Podľa sv. Hieronyma mu havran každý deň nosil pol bochníka chleba. Kto sa spolieha na Boha, tomu nechýba to podstatné."
  },
  {
    name: "sv. Marcel I.", img: "Roma-sanmarcelloalcorso2.jpg", feast: "01-16", years: "† 309", title: "pápež", symbol: "🗝️",
    quote: "Buď verný až do smrti a dám ti veniec života.", source: "Zjv 2, 10",
    story: "Stal sa pápežom po krutom prenasledovaní, keď bola Cirkev v Ríme rozvrátená. Nanovo ju usporiadal a trval na pokání tých, čo zapreli vieru. Pre spory ho cisár vyhnal z Ríma. Obnova si žiada odvahu aj milosrdenstvo."
  },
  {
    name: "sv. Anton Veľký", img: "Saint_Anthony_(Damaskinos).png", feast: "01-17", years: "251 – 356", title: "opát, otec mníchov", symbol: "🐷",
    quote: "Videl som všetky osídla nepriateľa rozprestreté po zemi… a počul som hlas: pokora.", source: "Výroky otcov púšte",
    story: "Ako mladý muž v kostole počul slová: „Choď, predaj všetko, čo máš.“ Poslúchol doslova a odišiel do púšte, kam za ním prichádzali tisíce ľudí po radu. Jeden odvážny krok poslušnosti môže začať nový spôsob života pre celú Cirkev."
  },
  {
    name: "sv. Margita Uhorská", img: "Margarita_de_Hungría_(cropped).jpg", feast: "01-18", years: "1242 – 1270", title: "panna, dominikánka", symbol: "🌷",
    quote: "Blahoslavení čistého srdca, lebo oni uvidia Boha.", source: "Mt 5, 8",
    story: "Dcéra kráľa Belu IV. mala byť vydaná za českého kráľa, no odmietla a zostala v kláštore na ostrove v Budapešti. Hoci bola princezná, ochotne robila najpodradnejšie práce. Skutočná šľachta je v pokore srdca."
  },
  {
    name: "sv. Henrich z Uppsaly", img: "Bishop_henry_from_taivassalo_church2.jpg", feast: "01-19", years: "† okolo 1156", title: "biskup a mučeník, patrón Fínska", symbol: "❄️",
    quote: "Blahoslavení tichí, lebo oni budú dedičmi zeme.", source: "Mt 5, 5",
    story: "Anglický kňaz, ktorý priniesol evanjelium do Fínska. Zabil ho sedliak, ktorého napomenul za ťažký hriech. Dnes je patrónom celej krajiny. Aj pravda povedaná s láskou môže stáť veľa – a priniesť ešte viac."
  },
  {
    name: "sv. Šebastián", img: "St._Sebastian_by_Sodoma.jpg", feast: "01-20", years: "† okolo 288", title: "mučeník", symbol: "🏹",
    quote: "Nebojte sa tých, čo zabíjajú telo, ale dušu zabiť nemôžu.", source: "Mt 10, 28",
    story: "Dôstojník cisárskej gardy, ktorý tajne povzbudzoval uväznených kresťanov. Keď ho odhalili, dal ho cisár zastreliť šípmi. Prežil, vrátil sa a znova vydal svedectvo. Vernosť sa nevzdáva ani po prvej rane."
  },
  {
    name: "sv. Agnesa Rímska", img: "2872-saint-agnes-domenichino.jpg", feast: "01-21", years: "okolo 291 – 304", title: "panna a mučenica", symbol: "🐑",
    quote: "Ja patrím svojmu milému a môj milý patrí mne.", source: "Pieseň piesní 6, 3",
    story: "Mala len dvanásť či trinásť rokov, keď odmietla sobáš s mocným mužom, lebo sa zasvätila Kristovi. Nezľakla sa ani smrti. Sv. Ambróz napísal, že bola príliš mladá na trest, no dosť zrelá na víťazstvo. Odvaha nemá vek."
  },
  {
    name: "sv. Vincent zo Zaragozy", img: "Vicente_de_Zaragoza_by_Tomás_Giner,_1462–1466.jpg", feast: "01-22", years: "† 304", title: "diakon a mučeník", symbol: "🍇",
    quote: "Blahoslavení prenasledovaní pre spravodlivosť, lebo ich je nebeské kráľovstvo.", source: "Mt 5, 10",
    story: "Diakon, ktorý kázal namiesto svojho zajakavého biskupa. Pri mučení zostal taký pokojný, že jeho strážca sa obrátil. Stal sa prvým mučeníkom Španielska. Pokoj uprostred búrky je najsilnejšie svedectvo."
  },
  {
    name: "sv. Ildefonz z Toleda", img: "Ildefonso_de_Toledo_(cropped).jpg", feast: "01-23", years: "okolo 607 – 667", title: "biskup", symbol: "🕊️",
    quote: "Odteraz ma budú blahoslaviť všetky pokolenia.", source: "Lk 1, 48",
    story: "Arcibiskup Toleda napísal krásne dielo na obranu Panny Márie. Podľa legendy sa mu Mária zjavila a darovala mu kňazský odev. Láska k Matke vedie vždy k jej Synovi."
  },
  {
    name: "sv. František Saleský", img: "Château_de_Bussy-Rabutin_-_Saint_François_de_Sales,_évêque_de_Genève_(bgw19_0375)_(cropped).jpg", feast: "01-24", years: "1567 – 1622", title: "biskup a učiteľ Cirkvi", symbol: "🕊️",
    quote: "Buď tým, čím si, a buď ním dobre.", source: "Listy",
    story: "Ako mladý biskup ženevský chodil v zime od domu k domu a pod dvere podsúval letáky, keď ho nikto nechcel počúvať. Jeho zbraňou nebola hádka, ale trpezlivá láskavosť. Dnešná vytrvalosť v malom môže otvoriť dvere, ktoré sa zdajú zatvorené."
  },
  {
    name: "Obrátenie sv. Pavla", img: "La_conversion_de_Saint_Paul_Giordano_Nancy_3018.jpg", feast: "01-25", years: "1. storočie", title: "sviatok", symbol: "⚡",
    quote: "Milosťou Božou som to, čo som, a jeho milosť nebola vo mne márna.", source: "1 Kor 15, 10",
    story: "Šavol šiel do Damasku zatýkať kresťanov, keď ho oslepilo svetlo a hlas: „Prečo ma prenasleduješ?“ Z prenasledovateľa sa stal najväčší misionár. Nikto nie je príliš ďaleko od Boha."
  },
  {
    name: "sv. Timotej a Títus", img: "Saint_Timothy.jpg", feast: "01-26", years: "1. storočie", title: "biskupi, Pavlovi učeníci", symbol: "📜",
    quote: "Veď Boh nám nedal ducha bojazlivosti, ale ducha sily, lásky a rozvahy.", source: "2 Tim 1, 7",
    story: "Dvaja verní spolupracovníci sv. Pavla. Timotej bol mladý a nesmelý, a predsa mu Pavol zveril cirkev v Efeze. Títovi zveril Krétu. Boh dôveruje aj tým, čo si sami nedôverujú."
  },
  {
    name: "sv. Angela Merici", img: "Saint_Angela_Merici.jpg", feast: "01-27", years: "1474 – 1540", title: "panna, zakladateľka uršulínok", symbol: "📖",
    quote: "Robte niečo. Pohnite sa. Majte vieru.", source: "Odkazy",
    story: "Osirotela ako dieťa a videla, ako chudobné dievčatá nemajú prístup k vzdelaniu. Založila spoločenstvo žien, ktoré vyučovali v rodinách a uliciach. Vidíš potrebu okolo seba? Možno ju Boh ukazuje práve tebe."
  },
  {
    name: "sv. Tomáš Akvinský", img: "St-thomas-aquinasFXD.jpg", feast: "01-28", years: "1225 – 1274", title: "kňaz a učiteľ Cirkvi", symbol: "📖",
    quote: "Nič iné, iba teba, Pane.", source: "Odpoveď Kristovi podľa Viliama z Tocca",
    story: "Rodina ho zavrela do veže, aby nevstúpil k dominikánom. Nevzdal sa a stal sa jedným z najväčších mysliteľov dejín. Na konci života však všetko, čo napísal, nazval slamou oproti tomu, čo uzrel. Múdrosť začína tam, kde vieš, čo je naozaj dôležité."
  },
  {
    name: "sv. Gildas Múdry", img: "Statue_St-Gildas_07082.jpg", feast: "01-29", years: "okolo 500 – 570", title: "mních a opát", symbol: "🌊",
    quote: "Obráťte sa ku mne celým srdcom, hovorí Pán.", source: "Joel 2, 12",
    story: "Britský mních, ktorý odvážne karhal kráľov i duchovných za ich hriechy. Neskôr odišiel do Bretónska a založil kláštor pri mori. Hovoriť pravdu je niekedy nepríjemné, ale je to služba lásky."
  },
  {
    name: "sv. Hyacinta Mariscotti", img: "Santa_Giacinta_Marescotti.jpg", feast: "01-30", years: "1585 – 1640", title: "rehoľníčka, františkánka", symbol: "🔔",
    quote: "Veľa jej je odpustené, lebo veľmi milovala.", source: "Lk 7, 47",
    story: "Šľachtičnú poslali do kláštora proti jej vôli a pätnásť rokov tam žila pohodlne a márnivo. Po ťažkej chorobe sa obrátila a stala sa matkou chudobných a chorých v Viterbe. Nikdy nie je neskoro začať naozaj milovať."
  },
  {
    name: "sv. Ján Bosco", img: "Don_Bosco_@_Torino,_1880_(original).jpg", feast: "01-31", years: "1815 – 1888", title: "kňaz, otec mládeže", symbol: "☀️",
    quote: "Stačí, že ste mladí, aby som vás miloval.", source: "Il Giovane provveduto",
    story: "V turínskych uliciach zbieral chlapcov, o ktorých sa nikto nestaral, a dával im domov, prácu aj radosť. Veril, že v každom mladom človeku je dobro, ktoré čaká, kým ho niekto uvidí. Pozri dnes na niekoho očami dôvery."
  },
  {
    name: "sv. Brigita Írska", img: "Cong_St._Mary_of_the_Rosary_Window_St._Brigid_Detail_St._Brigid_holding_her_Lamp_II_2019_09_04.jpg", feast: "02-01", years: "okolo 451 – 525", title: "abatiša, patrónka Írska", symbol: "🔥",
    quote: "Chcela by som veľké jazero piva pre Kráľa kráľov a celé nebo nech pije na veky.", source: "Báseň pripisovaná sv. Brigite",
    story: "Dcéra otrokyne, ktorá rozdávala všetko chudobným, až jej otec strácal trpezlivosť. Založila v Kildare prvý ženský kláštor v Írsku. Jej štedrosť bola taká veľká, že sa o nej dodnes rozprávajú legendy. Štedré srdce nikdy neschudobnie."
  },
  {
    name: "Obetovanie Pána – Hromnice", img: "Ambrogio_Lorenzetti_-_Presentazione_di_Gesù_al_tempio_-_Google_Art_Project.jpg", feast: "02-02", years: "", title: "sviatok", symbol: "🕯️",
    quote: "Moje oči uvideli tvoju spásu… svetlo na osvietenie pohanov.", source: "Lk 2, 30 – 32",
    story: "Mária a Jozef priniesli dieťa Ježiša do chrámu. Starec Simeon, ktorý celý život čakal, ho vzal do náručia a spoznal v ňom Svetlo sveta. Preto dnes svätíme sviece. Tvoje čakanie nie je márne."
  },
  {
    name: "sv. Blažej", img: "Saint_Blaise_Louvre_OAR504.jpg", feast: "02-03", years: "† 316", title: "biskup a mučeník", symbol: "🕯️",
    quote: "Pán je mojím svetlom a mojou spásou, koho by som sa bál?", source: "Ž 27, 1",
    story: "Lekár a biskup v Arménsku. Podľa tradície zachránil chlapca, ktorému v hrdle uviazla rybia kosť. Preto dnes kňazi udeľujú svätoblažejské požehnanie hrdla. Boh sa stará aj o malé, telesné starosti."
  },
  {
    name: "sv. Ján de Britto", img: "St._John_De_Britto.jpg", feast: "02-04", years: "1647 – 1693", title: "kňaz, jezuita a mučeník", symbol: "🌴",
    quote: "Všetko pokladám za stratu pre vznešenosť poznania Krista Ježiša, môjho Pána.", source: "Flp 3, 8",
    story: "Portugalský šľachtic, priateľ kráľovského syna, sa vzdal dvora a odišiel do Indie. Obliekol sa ako miestni pustovníci a žil medzi ľuďmi, aby im priniesol Krista. Láska sa učí reč tých, ktorých miluje."
  },
  {
    name: "sv. Agáta", img: "Sant'agata,_VII-inizio_VIII_secolo_ca.,_forse_da_s.m._antiqua_(roma,_coll._priv.).jpg", feast: "02-05", years: "† okolo 251", title: "panna a mučenica", symbol: "🌋",
    quote: "Pane Ježišu Kriste, ty vidíš moje srdce; ty poznáš moju túžbu: len teba chcem mať.", source: "Akty mučeníctva",
    story: "Mladá žena zo sicílskej Katánie odmietla mocného úradníka, ktorý ju chcel získať. Za to ju kruto mučili, no nezradila Krista. Rok po jej smrti sa podľa tradície zastavila láva Etny pred mestom. Čistota srdca je sila."
  },
  {
    name: "sv. Pavol Miki a spoločníci", img: "Bamberg_St_Martin_Figur_Paul_Miki.jpg", feast: "02-06", years: "† 1597", title: "mučeníci v Japonsku", symbol: "🗾",
    quote: "Odpúšťam cisárovi aj všetkým, čo majú podiel na mojej smrti.", source: "Slová z kríža, Nagasaki 1597",
    story: "Japonský jezuita a 25 spoločníkov, medzi nimi aj deti, boli ukrižovaní na kopci v Nagasaki. Pavol z kríža ešte kázal a odpustil svojim katom. Odpustenie je najsilnejšou odpoveďou na nenávisť."
  },
  {
    name: "sv. Richard Pútnik", img: "Richard_of_wessex.jpg", feast: "02-07", years: "† 720", title: "otec svätých", symbol: "🧭",
    quote: "Nemáme tu trvalé mesto, ale hľadáme budúce.", source: "Hebr 13, 14",
    story: "Anglický šľachtic vyrazil s deťmi na púť do Ríma, no cestou v Taliansku zomrel. Jeho synovia Willibald a Winibald a dcéra Walburga sa stali svätými misionármi. Viera, ktorú odovzdáš deťom, prinesie ovocie aj po tebe."
  },
  {
    name: "sv. Jozefína Bakhita", img: "Bakhita_Szent_Jozefina.jpeg", feast: "02-08", years: "1869 – 1947", title: "rehoľníčka, bývalá otrokyňa", symbol: "🌺",
    quote: "Keby som stretla tých, čo ma uniesli, pokľakla by som a pobozkala im ruky, lebo keby sa to nestalo, nebola by som dnes kresťankou.", source: "Spomienky",
    story: "Ako dieťa ju uniesli a predávali ako otrokyňu; strach jej vymazal aj vlastné meno. V Taliansku spoznala Boha a slobodu a zvyšok života prežila v pokore a dobrote. Ani najtemnejšia kapitola nemusí mať posledné slovo."
  },
  {
    name: "sv. Apolónia", img: "Francisco_de_Zurbarán_035.jpg", feast: "02-09", years: "† 249", title: "panna a mučenica", symbol: "🦷",
    quote: "Moje srdce je pripravené, Bože, moje srdce je pripravené.", source: "Ž 57, 8",
    story: "Staršia žena z Alexandrie, ktorej dav vytĺkol zuby a hrozil ohňom, ak nezaprie Krista. Sama vošla do plameňa, aby jej nikto nevzal slobodu vyznania. Je patrónkou zubárov. Vernosť je slobodné rozhodnutie."
  },
  {
    name: "sv. Scholastika", img: "Kleinmariazell_-_Altar_Scholastica_2.jpg", feast: "02-10", years: "okolo 480 – 543", title: "panna, sestra sv. Benedikta", symbol: "🌧️",
    quote: "Prosila som svojho brata a nechcel ma počúvať; prosila som svojho Pána a vypočul ma.", source: "sv. Gregor Veľký, Dialógy",
    story: "Pri poslednom stretnutí s bratom Benediktom ho prosila, aby zostal a rozprával o Bohu. Keď odmietol, pomodlila sa a strhla sa taká búrka, že nemohol odísť. O tri dni zomrela. Láska dokáže viac než pravidlá."
  },
  {
    name: "Panna Mária Lurdská", img: "France-002009_-_Our_Lady_of_Lourdes_(15774765182).jpg", feast: "02-11", years: "1858", title: "ľubovoľná spomienka, Svetový deň chorých", symbol: "💧",
    quote: "Ja som Nepoškvrnené počatie.", source: "Slová Panny Márie Bernadete, 25. 3. 1858",
    story: "V roku 1858 sa v jaskyni pri Lurdoch zjavila chudobnej Bernadete Krásna Pani a vyzývala k modlitbe a pokániu. Z prameňa, ktorý tam vytryskol, dodnes čerpajú milióny chorých nádej. Mária prichádza k najmenším."
  },
  {
    name: "sv. Benedikt z Aniane", img: "Aniane_(Hérault,_Fr)_église,statue_St._Benoît_d'Aniane.JPG", feast: "02-12", years: "okolo 747 – 821", title: "opát, obnoviteľ mníšstva", symbol: "📐",
    quote: "Nič nestavať nad lásku ku Kristovi.", source: "Regula sv. Benedikta, kap. 4",
    story: "Syn šľachtica, ktorý slúžil na dvore Karola Veľkého, prežil blízko smrti a odvtedy patril len Bohu. Obnovil kláštory v celej Franskej ríši podľa Benediktovej reguly. Obnova začína vždy od vlastného srdca."
  },
  {
    name: "sv. Katarína de' Ricci", img: "Catherine-de-ricci.jpg", feast: "02-13", years: "1522 – 1590", title: "panna, dominikánka", symbol: "✝️",
    quote: "S Kristom som pribitý na kríž. Už nežijem ja, ale vo mne žije Kristus.", source: "Gal 2, 19 – 20",
    story: "Florentská rehoľníčka, ktorá každý týždeň v extáze prežívala Kristovo umučenie. Napriek mystickým darom viedla kláštor rozumne a láskavo a radili sa s ňou pápeži i svätí. Hlboká modlitba robí človeka praktickým a dobrým."
  },
  {
    name: "sv. Valentín", img: "Matija_Bradaška_-_Sv._Valentin.jpg", feast: "02-14", years: "† okolo 269", title: "kňaz a mučeník", symbol: "❤️",
    quote: "Láska nikdy nezanikne.", source: "1 Kor 13, 8",
    story: "Rímsky kňaz, ktorý podľa tradície tajne sobášil zaľúbených a pomáhal prenasledovaným kresťanom. Za vieru bol sťatý. Stal sa patrónom zaľúbených. Pravá láska je vernosť, ktorá sa neľaká obety."
  },
  {
    name: "sv. Klaudius de la Colombière", img: "ClaudedelaColombiere.jpg", feast: "02-15", years: "1641 – 1682", title: "kňaz, jezuita", symbol: "💗",
    quote: "Hoci by som mal všetko stratiť, nestratím dôveru v teba.", source: "Úkon dôvery",
    story: "Duchovný vodca sv. Márie Margity Alacoque, ktorý pomohol rozšíriť úctu k Božskému Srdcu. Pre vieru ho v Anglicku uväznili a vyhnali. Chorý a zoslabnutý zomrel ako 41-ročný. Dôvera v Boha je najväčší poklad."
  },
  {
    name: "sv. Juliána z Nikomédie", img: "Juliana_of_Nicomedia.jpg", feast: "02-16", years: "† 304", title: "panna a mučenica", symbol: "⛓️",
    quote: "Kto nás odlúči od Kristovej lásky?", source: "Rim 8, 35",
    story: "Mladá žena z Malej Ázie odmietla vydať sa za pohanského úradníka a vlastný otec ju udal. Vo väzení zostala pevná až do smrti. V stredoveku bola obľúbenou patrónkou chorých. Láska ku Kristovi dáva pevnosť."
  },
  {
    name: "Sedem svätých zakladateľov servitov", img: "SetServitesFondatori.jpg", feast: "02-17", years: "13. storočie", title: "rehoľníci", symbol: "🌹",
    quote: "Hľa, aké dobré a milé je, keď bratia žijú v jednote.", source: "Ž 133, 1",
    story: "Sedem bohatých obchodníkov z Florencie opustilo svoje podniky a spoločne sa utiahli na horu Senario, aby slúžili Bohu a úcte k Sedembolestnej Panne Márii. Z ich priateľstva vznikla rehoľa servitov. Svätosť sa dá žiť spolu."
  },
  {
    name: "sv. Bernadeta Soubirous", img: "Bernadette_Soubirous.jpg", feast: "02-18", years: "1844 – 1879", title: "panna, vizionárka z Lúrd", symbol: "💧",
    quote: "Mojou úlohou je informovať, nie presviedčať.", source: "Výpoveď pred vyšetrovateľmi",
    story: "Chudobná, neučená dievčina z Lúrd, ktorej sa osemnásťkrát zjavila Panna Mária. Znášala výsmech aj výsluchy s pokojom. Neskôr vstúpila do kláštora a žila skryto a v chorobe. Boh si vyberá malých, aby ukázal svoju veľkosť."
  },
  {
    name: "sv. Konrád z Piacenzy", img: "San_Corado_nella_Cattedrale_di_Noto.jpg", feast: "02-19", years: "1290 – 1351", title: "pustovník, františkán", symbol: "🔥",
    quote: "Ak vyznávame svoje hriechy, on je verný a spravodlivý: odpustí nám hriechy.", source: "1 Jn 1, 9",
    story: "Šľachtic pri love zapálil les, oheň sa rozšíril a zo žhárstva obvinili nevinného chudobného muža. Konrád sa priznal, nahradil všetky škody, prišiel o majetok a stal sa pustovníkom. Priznať chybu je začiatok slobody."
  },
  {
    name: "sv. František a Hyacinta Marto", img: "Saints_Francisco_and_Jacinta_Marto_double_portrait_(2).jpg", feast: "02-20", years: "1908 – 1919, 1910 – 1920", title: "deti z Fatimy", symbol: "🐑",
    quote: "Veľmi rád by som potešil nášho Pána.", source: "sv. František Marto podľa spomienok sestry Lucie",
    story: "Dvaja súrodenci, pastierikovia z Fatimy, ktorým sa v roku 1917 zjavila Panna Mária. Hoci boli malí, modlili sa a obetovali za hriešnikov. Obaja zomreli na chrípku ako deti. Svätosť nemá minimálny vek."
  },
  {
    name: "sv. Peter Damiani", img: "Peter_Damian_bust.JPG", feast: "02-21", years: "1007 – 1072", title: "biskup a učiteľ Cirkvi", symbol: "🪶",
    quote: "Poďte ku mne všetci, ktorí sa namáhate a ste preťažení, a ja vás posilním.", source: "Mt 11, 28",
    story: "Sirota, ktorý ako chlapec pásol svine, sa vďaka bratovi dostal k štúdiu a stal sa slávnym učiteľom. Odišiel do pustovne, no pápeži ho povolali obnoviť Cirkev. Napriek úradom zostal pokorným mníchom. Z najnižšieho miesta môže Boh vyzdvihnúť."
  },
  {
    name: "Katedra sv. Petra", img: "Rom,_Vatikan,_Petersdom,_Cathedra_Petri_(Bernini)_4.jpg", feast: "02-22", years: "", title: "sviatok", symbol: "🗝️",
    quote: "Ty si Peter a na tejto skale postavím svoju Cirkev.", source: "Mt 16, 18",
    story: "Dnes ďakujeme za službu, ktorú Kristus zveril Petrovi a jeho nástupcom: posilňovať bratov vo viere. Peter bol obyčajný rybár a zlyhal, no Ježiš mu dôveroval. Pomodli sa dnes za Svätého Otca."
  },
  {
    name: "sv. Polykarp", img: "Polycarp_of_Smyrna2.jpg", feast: "02-23", years: "okolo 69 – 155", title: "biskup a mučeník", symbol: "🔥",
    quote: "Osemdesiatšesť rokov mu slúžim a nikdy mi neublížil. Ako by som mohol rúhať sa svojmu Kráľovi, ktorý ma spasil?", source: "Umučenie sv. Polykarpa",
    story: "Žiak apoštola Jána a biskup v Smyrne. Ako starca ho súdili a žiadali, aby preklial Krista. Odmietol a zomrel na hranici. Jeho slová sú jedným z najstarších svedectiev viery. Vernosť celého života je najkrajšia odpoveď."
  },
  {
    name: "sv. Etelbert z Kentu", img: "Statue_Ethelbert_jubé_Rochester_(3x4_cropped).jpg", feast: "02-24", years: "okolo 550 – 616", title: "kráľ", symbol: "👑",
    quote: "Tvoje slová a sľuby sú krásne; nebudem nikoho nútiť, ale dám vám slobodu kázať.", source: "podľa Bédu Ctihodného",
    story: "Anglický kráľ, ktorý prijal misionárov sv. Augustína, a hoci ich najprv počúval opatrne, dal sa pokrstiť. Nikoho nenútil k viere, ale vytvoril jej priestor. Sloboda a láska sú lepšou cestou než nátlak."
  },
  {
    name: "sv. Walburga", img: "Heilige_Walburga.jpg", feast: "02-25", years: "okolo 710 – 779", title: "abatiša, misionárka", symbol: "🌿",
    quote: "Pán je blízko všetkým, čo ho vzývajú.", source: "Ž 145, 18",
    story: "Anglická mníška, sestra sv. Willibalda a Winibalda, odišla s nimi na misie do Nemecka a viedla kláštor v Heidenheime. Bola známa ako liečiteľka a utešiteľka. Kde je Božia žena, tam rastie pokoj."
  },
  {
    name: "sv. Porfýrius z Gazy", img: "Порфирий_Газский.jpg", feast: "02-26", years: "okolo 347 – 420", title: "biskup", symbol: "🏛️",
    quote: "Nezľakni sa, len ver!", source: "Mk 5, 36",
    story: "Bohatý mladík z Tesaloniky rozdal majetok a žil ako pustovník. Stal sa biskupom v pohanskej Gaze, kde bolo len niekoľko desiatok kresťanov. Svojou trpezlivosťou a láskou priviedol k viere celé mesto. Malý začiatok nie je slabý začiatok."
  },
  {
    name: "sv. Gregor z Nareku", img: "Grigor_Narekatsi_1.jpg", feast: "02-27", years: "okolo 950 – 1003", title: "opát a učiteľ Cirkvi", symbol: "🎼",
    quote: "Z hlbín srdca rozhovor s Bohom.", source: "Kniha náreku, podtitul",
    story: "Arménsky mních a básnik napísal Knihu náreku – modlitby hriešnika, ktorý úprimne volá o milosrdenstvo. Pápež František ho vyhlásil za učiteľa Cirkvi. Aj tvoja úprimná modlitba, hoci slabá, je vzácna."
  },
  {
    name: "sv. Osvald z Worcesteru", img: "Oswald_and_Eadnoth.jpg", feast: "02-28", years: "okolo 925 – 992", title: "biskup", symbol: "🧺",
    quote: "Nie som hoden, aby si vošiel pod moju strechu.", source: "Mt 8, 8",
    story: "Arcibiskup Yorku, ktorý každý deň počas pôstu umýval nohy dvanástim chudobným a dával im jesť. Zomrel práve pri tejto službe, keď sa modlil žalm. Najväčší sú tí, čo slúžia na kolenách."
  },
  {
    name: "sv. Ján Kassián", img: "John_Cassian.jpeg", feast: "02-29", years: "okolo 360 – 435", title: "mních a opát", symbol: "🏜️",
    quote: "Bože, príď mi na pomoc; Pane, ponáhľaj sa mi pomáhať.", source: "Rozhovory X – modlitba, ktorú Kassián odporúčal",
    story: "Putoval k mníchom egyptskej púšte, aby sa od nich naučil modlitbe, a ich múdrosť preniesol do Galie. Založil kláštory v Marseille. Krátka modlitba „Bože, príď mi na pomoc“, ktorú odporúčal, sa dodnes modlí na začiatku každej hodinky."
  },
  {
    name: "sv. Dávid z Walesu", img: "Castell_Coch_stained_glass_panel_2.JPG", feast: "03-01", years: "okolo 500 – 589", title: "biskup, patrón Walesu", symbol: "🌼",
    quote: "Buďte radostní, zachovávajte vieru a robte malé veci, ktoré ste videli a počuli odo mňa.", source: "Posledná kázeň podľa Životopisu",
    story: "Waleský mních a biskup, ktorý viedol veľmi prísny život, no učil ľudí radosti a vernosti v maličkostiach. Jeho posledné slová dodnes Walesania opakujú. Svätosť sa skladá z malých vecí robených s láskou."
  },
  {
    name: "sv. Anežka Česká", img: "AnezkaPremyslovna.jpg", feast: "03-02", years: "1211 – 1282", title: "princezná, klariska", symbol: "🏥",
    quote: "Blahoslavení milosrdní, lebo oni dosiahnu milosrdenstvo.", source: "Mt 5, 7",
    story: "Česká princezná, o ruku ktorej sa uchádzal aj cisár, odmietla všetky ponuky. V Prahe založila nemocnicu a kláštor klarisiek a sama ošetrovala chorých. Kanonizovali ju v novembri 1989, pár dní pred nežnou revolúciou. Láska je silnejšia než trón."
  },
  {
    name: "sv. Katarína Drexelová", img: "Katharine_Drexel.jpg", feast: "03-03", years: "1858 – 1955", title: "rehoľníčka, zakladateľka", symbol: "💰",
    quote: "Ak chceš byť dokonalý, choď, predaj, čo máš, a rozdaj chudobným.", source: "Mt 19, 21",
    story: "Dedička jedného z najväčších majetkov Ameriky. Keď prosila pápeža o misionárov pre Indiánov, odpovedal jej: „Prečo sa nestaneš misionárkou ty?“ Venovala celé dedičstvo na školy pre čiernych a pôvodných obyvateľov. Boh môže použiť aj tvoje dary."
  },
  {
    name: "sv. Kazimír", img: "Šventasis_Kazimieras,_1594.jpg", feast: "03-04", years: "1458 – 1484", title: "kráľovič", symbol: "🌸",
    quote: "Každý deň, duša moja, spievaj chválu Márii.", source: "Hymnus, ktorý sa modlieval",
    story: "Poľský a litovský princ, ktorý žil na dvore uprostred prepychu, no v noci sa modlil pred zatvorenými dverami kostola. Bol spravodlivý a štedrý k chudobným. Zomrel ako 25-ročný. Svätosť je možná aj v paláci."
  },
  {
    name: "sv. Ján Jozef od Kríža", img: "JohnJosephoftheCross.jpg", feast: "03-05", years: "1654 – 1739", title: "kňaz, františkán", symbol: "🌿",
    quote: "Syn človeka neprišiel, aby sa mu slúžilo, ale aby slúžil.", source: "Mk 10, 45",
    story: "Rodák z ostrova Ischia vstúpil k františkánom ako šestnásťročný a hoci bol predstaveným, robil tie najpokornejšie práce. Bol známy darom uzdravovania a vnímania sŕdc. Kto slúži, ten vládne ako Kristus."
  },
  {
    name: "sv. Koleta", img: "Santa_Coleta_(pormenor_-_Santa_Clara_e_Santa_Coleta,_c._1520,_Mestre_da_Lourinhã).png", feast: "03-06", years: "1381 – 1447", title: "panna, reformátorka klarisiek", symbol: "🕊️",
    quote: "Vyber sa zo svojej krajiny… do krajiny, ktorú ti ukážem.", source: "Gn 12, 1",
    story: "Tesárova dcéra, ktorá žila ako pustovníčka v malej cele pri kostole. Po víziách sv. Františka sa vydala obnoviť rehoľu klarisiek a založila sedemnásť kláštorov. Boh často volá tých, čo si myslia, že sú na to najmenej pripravení."
  },
  {
    name: "sv. Perpetua a Felicita", img: "Perpetua,_Felicitas,_Revocatus,_Saturninus_and_Secundulus_(Menologion_of_Basil_II).jpg", feast: "03-07", years: "† 203", title: "mučenice", symbol: "🦁",
    quote: "Stojte pevne vo viere a milujte sa navzájom.", source: "Umučenie Perpetuy a Felicity",
    story: "Mladá šľachtičná, matka dojčaťa, a jej otrokyňa, ktorá vo väzení porodila, spolu zomreli v aréne v Kartágu. Perpetua si viedla denník, jeden z najstarších textov napísaných ženou. Vo Kristovi niet pána ani otroka – len sestry."
  },
  {
    name: "sv. Ján z Boha", img: "John_of_god_murillo.jpg", feast: "03-08", years: "1495 – 1550", title: "rehoľník, zakladateľ milosrdných bratov", symbol: "🏥",
    quote: "Robte dobre, bratia, pre lásku k Bohu.", source: "Volanie, s ktorým chodil ulicami Granady",
    story: "Vojak a potulný predavač kníh, ktorého po kázni sv. Jána z Ávily považovali za blázna. Z nemocnice pre duševne chorých vyšiel ako iný človek a založil nemocnicu pre najbiednejších. Z jeho diela vznikli milosrdní bratia, ktorí sú aj v Bratislave."
  },
  {
    name: "sv. Františka Rímska", img: "AntoniazzoRomano.jpg", feast: "03-09", years: "1384 – 1440", title: "rehoľníčka, manželka a matka", symbol: "👼",
    quote: "Žena vydatá musí často opustiť Boha pri oltári, aby ho našla v domácnosti.", source: "podľa životopisu",
    story: "Rímska šľachtičná, manželka a matka, ktorá prežila vojny, mor aj smrť dvoch detí. S priateľkami otvorila dom pre chudobných. Vravela, že jej anjel strážny ju sprevádzal viditeľne. Svätosť sa rodí v každodenných povinnostiach."
  },
  {
    name: "sv. Mária Eugénia od Ježiša", img: "Marie_Eugénie_de_Jésus_Milleret_de_Brou.jpg", feast: "03-10", years: "1817 – 1898", title: "rehoľníčka, zakladateľka", symbol: "🎓",
    quote: "Každý má svoje poslanie na zemi.", source: "Listy",
    story: "Dievča zo zámožnej, no neveriacej rodiny, ktoré našlo vieru pri kázni v Notre-Dame. Založila rehoľu Nanebovzatia, aby vychovávala ženy k slobodnej a hlbokej viere. Jedna kázeň môže zmeniť život – buď otvorený."
  },
  {
    name: "sv. Sofronius Jeruzalemský", img: "Athonite_Fresco_Icon_of_Saint_Sophronios_of_Jerusalem.jpg", feast: "03-11", years: "okolo 560 – 638", title: "patriarcha", symbol: "🏙️",
    quote: "Pane, kto bude prebývať v tvojom stánku?", source: "Ž 15, 1",
    story: "Mních a učenec, ktorý sa ako patriarcha Jeruzalema musel vzdať mesta arabskému kalifovi. Vyjednal ochranu pre kresťanov a svätých miest. Zomrel krátko nato. Aj v porážke sa dá chrániť to, čo je sväté."
  },
  {
    name: "sv. Alojz Orione", img: "Don_Orione.jpg", feast: "03-12", years: "1872 – 1940", title: "kňaz, zakladateľ", symbol: "🤲",
    quote: "Robiť dobro všetkým, zlo nikomu.", source: "Heslo diela",
    story: "Chudobný chlapec, ktorého Don Bosco prijal do oratória, sa sám stal otcom opustených. Založil diela Božej prozreteľnosti pre chorých, starých a postihnutých. Hovoril, že Boh dáva všetko, keď sa dávame my. Dobrota plodí dobrotu."
  },
  {
    name: "sv. Leander zo Sevilly", img: "San_Leandro.jpg", feast: "03-13", years: "okolo 534 – 600", title: "biskup", symbol: "🕊️",
    quote: "Nech sú všetci jedno.", source: "Jn 17, 21",
    story: "Starší brat sv. Izidora. Ako biskup Sevilly trpezlivo priviedol vizigótskych kráľov od ariánstva ku katolíckej viere. Na koncile v Tolede sa celé Španielsko zjednotilo vo viere. Jednota sa rodí z trpezlivého dialógu."
  },
  {
    name: "sv. Matilda", img: "Ptacnik_Mechtilda.jpg", feast: "03-14", years: "okolo 892 – 968", title: "kráľovná", symbol: "👑",
    quote: "Kto sa zľutúva nad chudobným, požičiava Pánovi.", source: "Prís 19, 17",
    story: "Nemecká kráľovná, manželka Henricha Vtáčnika a matka cisára Otu. Synovia jej vyčítali, že rozdáva priveľa chudobným, a vyhnali ju. Odpustila im a zakladala kláštory. Štedrosť a odpustenie sú kráľovské cnosti."
  },
  {
    name: "sv. Lujza de Marillac", img: "Louise_de_Marillac_Le_Gras._Line_engraving_by_Sisco._Wellcome_L0006155.jpg", feast: "03-15", years: "1591 – 1660", title: "rehoľníčka, zakladateľka", symbol: "🍲",
    quote: "Milujte chudobných a ctite ich ako samého Krista.", source: "Listy dcéram kresťanskej lásky",
    story: "Vdova, ktorá dlho bojovala s úzkosťou a pochybnosťami. So sv. Vincentom de Paul založila Dcéry kresťanskej lásky – sestry, ktoré slúžia chudobným priamo na uliciach. Aj ustarostené srdce môže byť nástrojom veľkej lásky."
  },
  {
    name: "sv. Heribert Kolínsky", img: "Rathausturm_Köln_-_Heribert_(detail).jpg", feast: "03-16", years: "okolo 970 – 1021", title: "arcibiskup", symbol: "🌧️",
    quote: "Proste a dostanete; hľadajte a nájdete.", source: "Mt 7, 7",
    story: "Kancelár cisára Otu III. a arcibiskup Kolína, ktorý staval kostoly a staral sa o chudobných. Podľa tradície počas veľkého sucha jeho modlitba priniesla dážď. Moc v rukách pokorného človeka slúži ľuďom."
  },
  {
    name: "sv. Patrik", img: "Our_Lady's_Island_Church_of_the_Assumption_East_Aisle_Window_Saint_Patrick_2010_09_26.jpg", feast: "03-17", years: "okolo 385 – 461", title: "biskup, apoštol Írska", symbol: "☘️",
    quote: "Kristus so mnou, Kristus predo mnou, Kristus za mnou, Kristus vo mne.", source: "Lorica (tradične pripisovaná)",
    story: "Ako šestnásťročného ho uniesli do Írska ako otroka. Utiekol, no neskôr sa k svojim bývalým väzniteľom dobrovoľne vrátil, aby im priniesol evanjelium. Odpustenie dokáže zmeniť celý národ."
  },
  {
    name: "sv. Cyril Jeruzalemský", img: "Saint_Cyril_of_Jerusalem.jpg", feast: "03-18", years: "okolo 313 – 386", title: "biskup a učiteľ Cirkvi", symbol: "💧",
    quote: "Veľká je krstná voda… je to smrť hriechu a narodenie duše.", source: "Katechézy",
    story: "Biskup Jeruzalema, ktorého kvôli sporom trikrát vyhnali z mesta. Jeho katechézy pre krstencov sú dodnes jedným z najkrajších úvodov do viery. Pripomeň si dnes svoj krst – deň, keď si sa stal Božím dieťaťom."
  },
  {
    name: "sv. Jozef", img: "Guido_Reni_-_St_Joseph_with_the_Infant_Jesus_-_WGA19304.jpg", feast: "03-19", years: "1. storočie", title: "snúbenec Panny Márie", symbol: "🔨",
    quote: "Keď sa Jozef prebudil zo sna, urobil, ako mu prikázal Pánov anjel.", source: "Mt 1, 24",
    story: "Tesár z Nazareta, o ktorom evanjeliá nezaznamenali ani jedno slovo – len činy. Prijal Máriu a Ježiša, utiekol s nimi do Egypta a pracoval pre nich. Je patrónom otcov, robotníkov aj celej Cirkvi. Tichá vernosť je veľká."
  },
  {
    name: "sv. Kutbert", img: "Cuthbert_discovers_piece_of_timber_-_Life_of_St._Cuthbert_(late_12th_C),_f.45v_-_BL_Yates_Thompson_MS_26.jpg", feast: "03-20", years: "okolo 634 – 687", title: "biskup a pustovník", symbol: "🦦",
    quote: "Majte medzi sebou pokoj a Božiu lásku.", source: "Posledné slová podľa Bédu",
    story: "Pastier z Northumbrie sa stal mníchom v Lindisfarne. Miloval samotu na ostrove a podľa legendy mu vydry zohrievali nohy po modlitbe v mori. Napriek túžbe po samote prijal úrad biskupa. Láska vie vyjsť aj z vlastného pohodlia."
  },
  {
    name: "sv. Mikuláš z Flüe", img: "Nicholas-Flue.jpg", feast: "03-21", years: "1417 – 1487", title: "pustovník, patrón Švajčiarska", symbol: "⛰️",
    quote: "Môj Pane a môj Bože, vezmi mi všetko, čo mi bráni ísť k tebe.", source: "Modlitba brata Klausa",
    story: "Sedliak, sudca a otec desiatich detí, ktorý so súhlasom manželky odišiel ako pustovník do rokliny. Radu k nemu chodili aj politici a jeho slovo zachránilo Švajčiarsko pred občianskou vojnou. Pokoj srdca sa stáva pokojom krajiny."
  },
  {
    name: "sv. Lea", img: "Santa_lea.jpg", feast: "03-22", years: "† okolo 384", title: "vdova", symbol: "🙏",
    quote: "Kto sa povyšuje, bude ponížený, a kto sa ponižuje, bude povýšený.", source: "Lk 14, 11",
    story: "Bohatá rímska vdova, o ktorej vieme len z listu sv. Hieronyma. Vzdala sa prepychu, obliekla si hrubý odev a slúžila ostatným ženám v spoločenstve. Hieronym ju dáva za príklad: jej pokora ju vyniesla vyššie než slávu mocných."
  },
  {
    name: "sv. Turibius z Mongroveja", img: "Santo_Toribio_Alfonso_de_Mogrovejo,_Arzobispo_de_Lima.jpg", feast: "03-23", years: "1538 – 1606", title: "biskup v Lime", symbol: "🌎",
    quote: "Čas nie je náš; musíme ho využiť dobre.", source: "podľa životopisu",
    story: "Španielsky právnik a laik, ktorého vymenovali za arcibiskupa Limy. Precestoval pešo a na mule obrovskú diecézu v Andách, učil sa jazyky domorodcov a bránil ich pred útlakom. Birmoval aj sv. Ružu z Limy. Horlivosť nepozná vzdialenosti."
  },
  {
    name: "sv. Oskar Romero", img: "Monseñor_Romero_(colour).jpg", feast: "03-24", years: "1917 – 1980", title: "biskup a mučeník", symbol: "🕊️",
    quote: "Nech sa moja krv stane semenom slobody.", source: "Rozhovor, marec 1980",
    story: "Tichý a opatrný biskup, ktorý sa po vražde svojho priateľa kňaza postavil na stranu chudobných v Salvádore. Kázal proti násiliu a zabili ho pri svätej omši. Keď vidíš nespravodlivosť, nemlč."
  },
  {
    name: "Zvestovanie Pána", img: "Annunciation_from_13th_century_Armenian_Gospel.jpg", feast: "03-25", years: "", title: "slávnosť", symbol: "🕊️",
    quote: "Hľa, služobnica Pánova, nech sa mi stane podľa tvojho slova.", source: "Lk 1, 38",
    story: "Anjel Gabriel priniesol Márii správu, ktorá zmenila dejiny, a Boh čakal na jej slobodné „áno“. V tej chvíli sa Slovo stalo telom. Aj tebe Boh dnes niečo ponúka – a čaká na tvoju odpoveď."
  },
  {
    name: "sv. Ludger", img: "Saintliudger.jpg", feast: "03-26", years: "okolo 742 – 809", title: "biskup, apoštol Saska", symbol: "⛪",
    quote: "Choďte do celého sveta a hlásajte evanjelium všetkému stvoreniu.", source: "Mk 16, 15",
    story: "Frízsky chlapec, ktorý ako dieťa videl sv. Bonifáca. Stal sa misionárom medzi Frízmi a Sasmi a prvým biskupom v Münsteri. Nikdy nepoužil násilie, len trpezlivé ohlasovanie. Semeno, ktoré dostaneš ako dieťa, môže raz vyrásť v strom."
  },
  {
    name: "sv. Rupert zo Salzburgu", img: "Rupert-Salzburg.jpg", feast: "03-27", years: "okolo 660 – 710", title: "biskup", symbol: "🧂",
    quote: "Vy ste soľ zeme.", source: "Mt 5, 13",
    story: "Biskup z Wormsu, ktorý prišiel do Bavorska a na ruinách rímskeho mesta založil Salzburg. Rozvíjal ťažbu soli a vzdelanie a z jeho diela vyšla misia aj do našich krajov. Buď soľou – daj svetu chuť."
  },
  {
    name: "sv. Štefan Harding", img: "Sv._Stevan_Harding,_Stevanovska_cirkev.JPG", feast: "03-28", years: "okolo 1060 – 1134", title: "opát, spoluzakladateľ cisterciátov", symbol: "🌾",
    quote: "Ak pšeničné zrno nepadne do zeme a neodumrie, zostane samo. Ale ak odumrie, prinesie veľa úrody.", source: "Jn 12, 24",
    story: "Anglický mních, ktorý s priateľmi hľadal jednoduchší a prísnejší život v Cîteaux. Kláštor takmer zanikol, kým doň nevstúpil sv. Bernard s tridsiatimi spoločníkmi. Nevzdávaj sa, aj keď sa ti zdá, že tvoje dielo neprináša ovocie."
  },
  {
    name: "sv. Bertold", img: "Le_bienheureux_Berthold_du_Mont_Carmel.jpg", feast: "03-29", years: "† okolo 1195", title: "karmelitán, pustovník", symbol: "⛰️",
    quote: "Horlivo som horlil za Pána, Boha zástupov.", source: "1 Kr 19, 10",
    story: "Križiak, ktorý po vojnových hrôzach hľadal pokoj s Bohom. Na hore Karmel, kde kedysi žil prorok Eliáš, založil spoločenstvo pustovníkov, z ktorého vznikli karmelitáni. Z miesta vojny sa môže stať miesto modlitby."
  },
  {
    name: "sv. Ján Klimak", img: "Lestvichnik.jpg", feast: "03-30", years: "okolo 579 – 649", title: "opát na Sinaji", symbol: "🪜",
    quote: "Stúpajte, bratia, stúpajte horlivo so srdcom plným radosti.", source: "Rebrík božského výstupu",
    story: "Mních z hory Sinaj, ktorý napísal knihu Rebrík božského výstupu – tridsať priečok duchovného života. Dodnes ju čítajú mnísi aj laici. Svätosť sa buduje priečku po priečke; dnes stačí urobiť jeden krok."
  },
  {
    name: "sv. Benjamín", img: "Benjamin_von_Persien.jpg", feast: "03-31", years: "† okolo 424", title: "diakon a mučeník", symbol: "🗣️",
    quote: "Nemôžeme nehovoriť o tom, čo sme videli a počuli.", source: "Sk 4, 20",
    story: "Perzský diakon, ktorý bol dva roky vo väzení. Prepustili ho pod podmienkou, že už nebude hovoriť o Kristovi. Odpovedal, že nemôže zamlčať svetlo, ktoré dostal, a zomrel ako mučeník. Pravdu, ktorá oslobodzuje, nemožno zadržať."
  },
  {
    name: "sv. Mária Egyptská", img: "Марія_Єгипетська_з_житієм._Українська_ікона_кінця_XVII_ст._Село_Лісковате._-_Mary_of_Egypt_with_her_Life._Ukrainian_icon,_late_17th_century._Liskovate_village..jpg", feast: "04-01", years: "5. storočie", title: "kajúcnica, pustovníčka", symbol: "🏜️",
    quote: "Kde sa rozmnožil hriech, tam sa ešte väčšmi rozhojnila milosť.", source: "Rim 5, 20",
    story: "Mladá žena z Alexandrie viedla hriešny život, až kým ju pri vstupe do chrámu v Jeruzaleme nezastavila neviditeľná sila. Obrátila sa a desaťročia žila v púšti za Jordánom v pokání. Žiadna minulosť nie je silnejšia než Božie milosrdenstvo."
  },
  {
    name: "sv. František z Paoly", img: "Francis_of_Paola_by_Giovanni_Domenico_Tiepolo.jpg", feast: "04-02", years: "1416 – 1507", title: "pustovník, zakladateľ minimitov", symbol: "🔥",
    quote: "Caritas – Láska.", source: "Heslo rádu minimitov",
    story: "Ako trinásťročný odišiel do pustovne v Kalábrii. Okolo neho vzniklo spoločenstvo „najmenších bratov“, ktorí žili v ustavičnom pôste. Francúzsky kráľ si ho zavolal k svojej smrteľnej posteli. Najmenší v očiach sveta býva najväčší pred Bohom."
  },
  {
    name: "sv. Richard z Chichesteru", img: "St_Saviour,_Eastbourne_IMG_3419_(28342972384)_(cropped).jpg", feast: "04-03", years: "1197 – 1253", title: "biskup", symbol: "🌿",
    quote: "Najmilší Pane, nech ťa deň čo deň vidím jasnejšie, milujem vrúcnejšie a nasledujem vernejšie.", source: "Modlitba sv. Richarda",
    story: "Syn sedliaka, ktorý študoval v Oxforde a Paríži. Keď sa stal biskupom, kráľ mu zabavil príjmy a on chodil pešo od fary k fare a žil skromne ako chudobný kňaz. Jeho krátka modlitba je dodnes ideálnym programom na každý deň."
  },
  {
    name: "sv. Izidor zo Sevilly", img: "Isidor_von_Sevilla.jpeg", feast: "04-04", years: "okolo 560 – 636", title: "biskup a učiteľ Cirkvi", symbol: "📚",
    quote: "Keď sa modlíme, hovoríme s Bohom; keď čítame, Boh hovorí s nami.", source: "Sentencie III, 8",
    story: "Mladší brat sv. Leandra zostavil encyklopédiu vtedajšieho poznania, z ktorej sa učila Európa celé stredoveké storočia. Je patrónom internetu. Poznanie je dar; použi ho, aby si sa priblížil k Pravde."
  },
  {
    name: "sv. Vincent Ferrer", img: "Joan_de_Joanes_-_St_Vincent_Ferrer_-_WGA12062.jpg", feast: "04-05", years: "1350 – 1419", title: "kňaz, dominikán", symbol: "📯",
    quote: "Bojte sa Boha a vzdajte mu slávu, lebo prišla hodina jeho súdu.", source: "Zjv 14, 7",
    story: "Veľký kazateľ, ktorý dvadsať rokov putoval Európou a vyzýval k obráteniu. Za ním šli tisíce kajúcnikov a podľa tradície rozumeli jeho kázňam ľudia rôznych jazykov. Pravdivé slovo z horiaceho srdca prekoná aj hranice reči."
  },
  {
    name: "sv. Sixtus I.", img: "Celat,_chiesa_di_San_Rocco_-_Affreschi_della_sagrestia_01_-_San_Sisto(cropped).jpg", feast: "04-06", years: "† okolo 125", title: "pápež a mučeník", symbol: "🗝️",
    quote: "Buď verný až do smrti a dám ti veniec života.", source: "Zjv 2, 10",
    story: "Šiesty nástupca sv. Petra, ktorý viedol Cirkev v Ríme za cisára Hadriána. Jeho meno sa dodnes spomína v Rímskom kánone svätej omše. Tichí verní služobníci nesú Cirkev cez storočia."
  },
  {
    name: "sv. Ján Krstiteľ de la Salle", img: "Jean_baptiste_de_la_Salle.jpg", feast: "04-07", years: "1651 – 1719", title: "kňaz, patrón učiteľov", symbol: "🍎",
    quote: "Nechajte maličkých prichádzať ku mne a nebráňte im.", source: "Mk 10, 14",
    story: "Bohatý kanonik z Remeša, ktorý sa vzdal majetku, aby vychovával chudobných chlapcov. Založil Bratov kresťanských škôl a vymyslel vyučovanie v triedach. Každý, kto učí deti s láskou, pokračuje v jeho diele."
  },
  {
    name: "sv. Júlia Billiartová", img: "St._Julie_Billiart.jpg", feast: "04-08", years: "1751 – 1816", title: "rehoľníčka, zakladateľka", symbol: "😊",
    quote: "Aký dobrý je dobrý Boh!", source: "Obľúbené zvolanie sv. Júlie",
    story: "Dvadsaťdva rokov bola ochrnutá a pripútaná na lôžko, no učila deti katechizmus. Po zázračnom uzdravení založila rehoľu na výchovu dievčat. Aj v najťažších rokoch opakovala, aký dobrý je Boh. Vďačnosť mení pohľad na všetko."
  },
  {
    name: "sv. Kazilda z Toleda", img: "Francisco_de_Zurbarán_-_Santa_Casilda.jpg", feast: "04-09", years: "† okolo 1050", title: "panna", symbol: "🌹",
    quote: "Bol som hladný a dali ste mi jesť.", source: "Mt 25, 35",
    story: "Moslimská princezná z Toleda tajne nosila chlieb uväzneným kresťanom. Keď ju raz otec prichytil, chlieb sa jej v zástere podľa legendy premenil na ruže. Neskôr prijala krst a žila ako pustovníčka. Láska nepozná hranice náboženstiev ani rodu."
  },
  {
    name: "sv. Magdaléna z Canossy", img: "MagdalenaGabrielaCanossa.jpg", feast: "04-10", years: "1774 – 1835", title: "rehoľníčka, zakladateľka", symbol: "🤲",
    quote: "Kristova láska nás pobáda.", source: "2 Kor 5, 14",
    story: "Markíza z Verony, ktorú ako dieťa opustila matka. Hoci mala palác, videla biedu po vojnách a založila rehoľu Dcér lásky pre chudobné dievčatá. Rany z detstva sa môžu stať zdrojom súcitu s druhými."
  },
  {
    name: "sv. Stanislav", img: "Stanisław_Samostrzelnik,_Św_Stanisław.jpg", feast: "04-11", years: "okolo 1030 – 1079", title: "biskup a mučeník", symbol: "⚔️",
    quote: "Dobrý pastier položí svoj život za ovce.", source: "Jn 10, 11",
    story: "Krakovský biskup napomínal kráľa Boleslava za krutosť a nemravnosť. Kráľ ho dal zabiť priamo pri oltári. Stal sa patrónom Poľska. Kto bráni slabých pred mocnými, stojí na strane Boha."
  },
  {
    name: "sv. Terézia z Los Andes", img: "Teresa_de_los_Andes.jpg", feast: "04-12", years: "1900 – 1920", title: "karmelitánka", symbol: "🏔️",
    quote: "Boh je nekonečná radosť.", source: "Listy",
    story: "Veselá čilská dievčina, ktorá rada jazdila na koni a plávala, no bojovala s pýchou a hnevom. Vstúpila ku karmelitánkam a zomrela ako 19-ročná. Stala sa prvou čilskou svätou. Radosť a svätosť k sebe patria."
  },
  {
    name: "sv. Martin I.", img: "14_Chiesa_di_Santa_Maria_della_Consolazione_(Todi),_el_papa_Martí_I,_de_Carlo_Laurenti.jpg", feast: "04-13", years: "† 655", title: "pápež a mučeník", symbol: "⛓️",
    quote: "Blahoslavení prenasledovaní pre spravodlivosť.", source: "Mt 5, 10",
    story: "Pápež, ktorý odmietol podriadiť učenie Cirkvi vôli byzantského cisára. Uniesli ho do Konštantínopolu, ponižovali a poslali do vyhnanstva na Krym, kde zomrel od hladu. Pravda nie je na predaj ani za cenu pohodlia."
  },
  {
    name: "sv. Lidwina", img: "Lidwinas_fall.png", feast: "04-14", years: "1380 – 1433", title: "panna, patrónka chorých", symbol: "⛸️",
    quote: "Moja milosť ti stačí, lebo sila sa dokonale prejavuje v slabosti.", source: "2 Kor 12, 9",
    story: "Pätnásťročná holandská dievčina si pri korčuľovaní zlomila rebro a zvyšok života, 38 rokov, prežila na lôžku v bolestiach. Svoje utrpenie obetovala za druhých a ľudia k nej chodili po útechu. Aj z postele sa dá meniť svet."
  },
  {
    name: "sv. Damián de Veuster", img: "Father_Damien,_photograph_by_William_Brigham.jpg", feast: "04-15", years: "1840 – 1889", title: "kňaz, apoštol malomocných", symbol: "🏝️",
    quote: "Stávam sa malomocným s malomocnými, aby som ich všetkých získal pre Ježiša Krista.", source: "List bratovi",
    story: "Belgický misionár sa dobrovoľne dal zatvoriť na havajskom ostrove Molokai s malomocnými. Staval im domy, liečil ich a pochovával. Nakoniec sa sám nakazil. Láska ide až tam, kam sa ostatní boja."
  },
  {
    name: "sv. Benedikt Jozef Labre", img: "BJLABRE1.jpg", feast: "04-16", years: "1748 – 1783", title: "pútnik, žobrák", symbol: "🎒",
    quote: "Blahoslavení chudobní v duchu, lebo ich je nebeské kráľovstvo.", source: "Mt 5, 3",
    story: "Nevzali ho do žiadneho kláštora, tak sa stal pútnikom. Pešo prešiel Európu od svätyne k svätyni a posledné roky žil ako žobrák v Ríme, kde sa celé hodiny modlil pred Eucharistiou. Boh má svojich svätých aj medzi bezdomovcami."
  },
  {
    name: "sv. Kateri Tekakwitha", img: "CatherinaeTekakwithaVirginis1690.jpg", feast: "04-17", years: "1656 – 1680", title: "panna, Ľalia Mohawkov", symbol: "🌷",
    quote: "Kto ma naučí, čo je Bohu najmilšie, aby som to mohla urobiť?", source: "podľa životopisu P. Cholenca",
    story: "Indiánska dievčina, ktorej kiahne zjazvili tvár a oslabili zrak. Pre krst ju vlastní ľudia prenasledovali, a tak utiekla do kresťanskej osady. Zomrela ako 24-ročná a jej tvár vraj po smrti skrásnela. Boh vidí krásu, ktorú svet prehliada."
  },
  {
    name: "sv. Galdín", img: "San_Galdino_1.jpg", feast: "04-18", years: "okolo 1096 – 1176", title: "kardinál, arcibiskup Milána", symbol: "🏙️",
    quote: "Ohlasuj slovo, naliehaj vhod či nevhod.", source: "2 Tim 4, 2",
    story: "Arcibiskup, ktorý po zničení Milána cisárom Barbarossom pomáhal mesto znovu postaviť a staral sa o chudobných a väzňov. Zomrel priamo pri kázaní z kazateľnice. Kto slúži slovom, nech mu zostane verný do posledného dychu."
  },
  {
    name: "sv. Lev IX.", img: "Leon_IX.jpg", feast: "04-19", years: "1002 – 1054", title: "pápež", symbol: "🗝️",
    quote: "Obnovte sa duchom svojej mysle.", source: "Ef 4, 23",
    story: "Alsaský biskup, ktorý prijal pápežstvo až po tom, čo ho zvolil ľud Ríma – prišiel tam bosý ako pútnik. Neúnavne cestoval po Európe a reformoval Cirkev. Obnova začína pokorou toho, kto ju vedie."
  },
  {
    name: "sv. Agnesa z Montepulciana", img: "Sant'Agnese_Segni,_1507,_01_(cropped).jpg", feast: "04-20", years: "1268 – 1317", title: "panna, dominikánka", symbol: "🌸",
    quote: "Moja duša velebí Pána a môj duch jasá v Bohu, mojom Spasiteľovi.", source: "Lk 1, 46 – 47",
    story: "Už ako deväťročná vstúpila do kláštora a ako pätnásťročná sa stala predstavenou. Bola známa zázrakmi a láskavosťou. Jej hrob neskôr navštívila sv. Katarína Sienská. Veľké veci sa môžu začať veľmi skoro."
  },
  {
    name: "sv. Anzelm z Canterbury", img: "Anselm_of_Canterbury,_seal.svg", feast: "04-21", years: "1033 – 1109", title: "biskup a učiteľ Cirkvi", symbol: "💡",
    quote: "Neusilujem sa pochopiť, aby som veril, ale verím, aby som pochopil.", source: "Proslogion, kap. 1",
    story: "Taliansky mních, filozof a arcibiskup z Canterbury, ktorý dvakrát odišiel do vyhnanstva, lebo bránil slobodu Cirkvi pred kráľmi. Ukázal, že viera a rozum sa nevylučujú. Pýtaj sa smelo – viera sa otázok nebojí."
  },
  {
    name: "sv. Soter", img: "San_Sotero_Papa.jpg", feast: "04-22", years: "† okolo 174", title: "pápež", symbol: "💌",
    quote: "Nemilujme slovom ani jazykom, ale skutkom a pravdou.", source: "1 Jn 3, 18",
    story: "Pápež z 2. storočia, o ktorom vieme najmä to, že posielal štedré dary chudobným cirkvám a väzňom v baniach. Biskup z Korintu ho chválil ako otca, ktorý sa stará o svoje deti. Láska sa ukazuje v konkrétnej pomoci."
  },
  {
    name: "sv. Vojtech", img: "Szt-adalbert.jpg", feast: "04-23", years: "okolo 956 – 997", title: "biskup a mučeník", symbol: "⛵",
    quote: "Choďte do celého sveta a hlásajte evanjelium všetkému stvoreniu.", source: "Mk 16, 15",
    story: "Pražský biskup, ktorý pôsobil aj v Uhorsku a podľa tradície pokrstil budúceho kráľa sv. Štefana. Ako misionár u Prusov bol zabitý. Je patrónom Čiech, Poľska aj Spolku sv. Vojtecha. Evanjelium nepozná hranice národov."
  },
  {
    name: "sv. Juraj", img: "Martorell_-_Sant_Jordi.jpg", feast: "04-24", years: "† okolo 303", title: "mučeník", symbol: "🐉",
    quote: "Oblečte si Božiu výzbroj, aby ste mohli odolať úkladom diabla.", source: "Ef 6, 11",
    story: "Rímsky vojak, ktorý odmietol obetovať pohanským bohom a zomrel ako mučeník. Legenda o zabití draka zobrazuje víťazstvo viery nad zlom. Je patrónom skautov a rytierov. Aj tvoje draky – strach a hriech – sa dajú s Božou pomocou premôcť."
  },
  {
    name: "sv. Marek", img: "Codexaureus_21.jpg", feast: "04-25", years: "1. storočie", title: "evanjelista", symbol: "🦁",
    quote: "Začiatok evanjelia Ježiša Krista, Božieho Syna.", source: "Mk 1, 1",
    story: "Mladý Ján Marek raz na misijnej ceste zlyhal a vrátil sa domov, pre čo sa Pavol a Barnabáš rozišli. Neskôr sa stal Petrovým tlmočníkom a napísal najstaršie evanjelium. Zlyhanie nie je koniec tvojho príbehu."
  },
  {
    name: "sv. Anaklét (Klétus)", img: "Interior_of_Chiesa_dei_Gesuiti_(Venice)_-_sacristy_-_Papa_Cleto_-_1592-1593_-_by_Palma_il_Giovane(cropped).jpg", feast: "04-26", years: "† okolo 92", title: "pápež", symbol: "🗝️",
    quote: "Pas Božie stádo, ktoré je u vás.", source: "1 Pt 5, 2",
    story: "Tretí rímsky biskup po sv. Petrovi a Linovi. Podľa tradície rozdelil Rím na farnosti a postaral sa o hrob sv. Petra. Jeho meno je v Rímskom kánone. Niekto musí verne pokračovať v tom, čo začali veľkí."
  },
  {
    name: "sv. Zita", img: "Lille_Hospice_comt_Vuez_Ste_Zite.JPG", feast: "04-27", years: "1212 – 1272", title: "slúžka, patrónka domácich pomocníkov", symbol: "🧹",
    quote: "Čokoľvek robíte, robte zo srdca ako pre Pána.", source: "Kol 3, 23",
    story: "Od dvanástich rokov až do smrti slúžila v jednej rodine v Lucce. Spočiatku ju ponižovali, no jej trpezlivosť a dobrota zmenili celý dom. Chlieb, ktorý rozdávala chudobným, jej podľa legendy nikdy nechýbal. Aj obyčajná práca môže byť modlitbou."
  },
  {
    name: "sv. Ľudovít Mária Grignion z Montfortu", img: "Людовик_Мария_Гриньон_де_Монфор.jpg", feast: "04-28", years: "1673 – 1716", title: "kňaz", symbol: "💙",
    quote: "Celý tvoj som ja a všetko, čo mám, je tvoje.", source: "Totus tuus – zasvätenie Márii",
    story: "Chudobný putovný misionár, ktorého mnohí biskupi vyháňali pre jeho prísnosť. Napísal Traktát o pravej úcte k Panne Márii, z ktorého si sv. Ján Pavol II. vzal heslo „Totus tuus“. Odmietnutie ľuďmi neznamená odmietnutie Bohom."
  },
  {
    name: "sv. Katarína Sienská", img: "Giovanni_Battista_Tiepolo_096.jpg", feast: "04-29", years: "1347 – 1380", title: "panna a učiteľka Cirkvi", symbol: "🔥",
    quote: "Ak budete tým, čím máte byť, zapálite celý svet.", source: "Listy",
    story: "Nevedela spočiatku ani písať, a predsa jej listy menili rozhodnutia pápežov a kniežat. Nebála sa hovoriť pravdu ani mocným. Tvoj hlas má váhu, keď za ním stojí život."
  },
  {
    name: "sv. Pius V.", img: "Bartolomeo_Passarotti_-_Pius_V.jpg", feast: "04-30", years: "1504 – 1572", title: "pápež, dominikán", symbol: "📿",
    quote: "Proste a dostanete; hľadajte a nájdete.", source: "Mt 7, 7",
    story: "Chudobný pastierik, ktorý sa stal dominikánom a nakoniec pápežom. Ako pápež nosil biely habit rehole – odvtedy sa pápeži obliekajú do bielej. Vyzval celú Európu k modlitbe ruženca a zaviedol sviatok Ružencovej Panny Márie."
  },
  {
    name: "sv. Jozef, robotník", img: "Guido_Reni_-_St_Joseph_with_the_Infant_Jesus_-_WGA19304.jpg", feast: "05-01", years: "1. storočie", title: "ľubovoľná spomienka", symbol: "🪚",
    quote: "Čokoľvek robíte, robte zo srdca ako pre Pána, a nie pre ľudí.", source: "Kol 3, 23",
    story: "Ježiš vyrastal v dielni tesára a sám ťažko pracoval rukami. Svätý Jozef nás učí, že práca má dôstojnosť a môže byť obetou Bohu. Požehnaj dnes svoju prácu – aj tú najobyčajnejšiu."
  },
  {
    name: "sv. Atanáz", img: "Fethiye_Camii,_parekklesion,_diakonikon,_mosaics,_Istanbul,_Turkey_-_South_wall,_St._Athanasius,_detail_of_upper_half_-_MSBZ004_BF_T_F_027_B_-_Dumbarton_Oaks.jpg", feast: "05-02", years: "okolo 296 – 373", title: "biskup a učiteľ Cirkvi", symbol: "🛡️",
    quote: "Boh sa stal človekom, aby sa človek stal Božím.", source: "O vtelení Slova 54",
    story: "Alexandrijský biskup, ktorý celý život bránil vieru, že Ježiš je pravý Boh. Päťkrát ho poslali do vyhnanstva, strávil v ňom 17 rokov a raz sa ukrýval aj v otcovom hrobe. Hovorili „Atanáz proti svetu“. Jeden verný človek môže uchrániť pravdu pre všetkých."
  },
  {
    name: "sv. Filip a Jakub", img: "Rubens_apostel_philippus.jpg", feast: "05-03", years: "1. storočie", title: "apoštoli", symbol: "✝️",
    quote: "Pane, ukáž nám Otca a to nám stačí. – Filip, kto mňa videl, videl Otca.", source: "Jn 14, 8 – 9",
    story: "Filip priviedol k Ježišovi Natanaela slovami „Poď a pozri“. Jakub, príbuzný Pána, viedol cirkev v Jeruzaleme a napísal list o viere, ktorá sa prejavuje skutkami. Aj ty môžeš niekoho pozvať: poď a pozri."
  },
  {
    name: "sv. Florián", img: "Francesco_del_Cossa_014.jpg", feast: "05-04", years: "† 304", title: "mučeník, patrón hasičov", symbol: "🚒",
    quote: "Nik nemá väčšiu lásku ako ten, kto položí život za svojich priateľov.", source: "Jn 15, 13",
    story: "Rímsky dôstojník v Noricu, ktorý sa priznal ku Kristovi, aby pomohol uväzneným kresťanom. Hodili ho s kameňom na krku do rieky Enža. Je patrónom hasičov, ktorí nasadzujú život za iných. Pomodli sa dnes za tých, čo nás chránia."
  },
  {
    name: "sv. Gotthard", img: "Hildesheim_St._Godehard_Statue_Godehard.JPG", feast: "05-05", years: "okolo 960 – 1038", title: "biskup", symbol: "🏔️",
    quote: "Ja som dobrý pastier; poznám svoje ovce.", source: "Jn 10, 14",
    story: "Bavorský opát, ktorý obnovil mnoho kláštorov, a ako biskup v Hildesheime staval kostoly, školy a útulky pre chudobných. Podľa neho je pomenovaný alpský priesmyk Gotthard. Kto buduje pre druhých, zanecháva stopu."
  },
  {
    name: "sv. Dominik Savio", img: "Life_of_Dominic_Savio_(page_6_crop).jpg", feast: "05-06", years: "1842 – 1857", title: "študent, žiak Dona Bosca", symbol: "🌟",
    quote: "Radšej zomrieť, ako zhrešiť.", source: "Predsavzatie z prvého svätého prijímania",
    story: "Chlapec z chudobnej rodiny, ktorý v Turíne u Dona Bosca pochopil, že svätosť je byť stále veselý a dobre robiť svoje povinnosti. Založil spolok pomoci spolužiakom. Zomrel ako 14-ročný. Svätosť sa dá žiť aj v školskej lavici."
  },
  {
    name: "bl. Gizela Uhorská", img: "Portrayal_of_Gisela_of_Hungary_on_the_coronation_pall-2.jpg", feast: "05-07", years: "okolo 985 – 1065", title: "kráľovná", symbol: "👑",
    quote: "Múdra žena stavia svoj dom.", source: "Prís 14, 1",
    story: "Bavorská princezná, manželka sv. Štefana, prvého uhorského kráľa. Pomáhala šíriť kresťanstvo v krajine, ktorej súčasťou bolo aj územie dnešného Slovenska. Po smrti manžela a syna skončila ako abatiša v Pasove. Aj bolesť sa dá premeniť na službu."
  },
  {
    name: "sv. Bonifác IV.", img: "Papa_Bonifacio_IV.png", feast: "05-08", years: "† 615", title: "pápež", symbol: "🏛️",
    quote: "Hľa, všetko robím nové.", source: "Zjv 21, 5",
    story: "Pápež, ktorý premenil rímsky Panteón, chrám všetkých pohanských bohov, na kostol Panny Márie a všetkých mučeníkov. Z toho vznikol neskôr sviatok Všetkých svätých. Boh vie premeniť aj to, čo slúžilo iným bohom."
  },
  {
    name: "sv. Pachómius", img: "StPakhom.jpg", feast: "05-09", years: "okolo 292 – 348", title: "opát, otec spoločného mníšstva", symbol: "🏠",
    quote: "Všetci veriaci boli spolu a mali všetko spoločné.", source: "Sk 2, 44",
    story: "Egyptský vojak, ktorého pri odvode prekvapili kresťania, keď priniesli vojakom jedlo. Po vojne sa dal pokrstiť a založil prvé kláštory, kde mnísi žili spolu podľa reguly. Jeden skutok lásky môže zmeniť celý život."
  },
  {
    name: "sv. Ján z Ávily", img: "Attributed_to_el_Greco_-_Portrait_of_Juan_de_Ávila_-_Google_Art_Project.jpg", feast: "05-10", years: "1499 – 1569", title: "kňaz a učiteľ Cirkvi", symbol: "👂",
    quote: "Počuj, dcéra, pozri a nakloň si ucho.", source: "Ž 45, 11 – názov jeho diela Audi, filia",
    story: "Španielsky kazateľ, ktorého pre kázne uväznila inkvizícia – vo väzení napísal svoje najznámejšie dielo. Bol duchovným vodcom sv. Terézie z Ávily, sv. Jána z Boha aj sv. Františka Borgiu. Aj z väzenia môže vyjsť svetlo."
  },
  {
    name: "bl. Sára Salkaháziová", img: "Sara_Salkahazi.jpg", feast: "05-11", years: "1899 – 1944", title: "rehoľníčka a mučenica", symbol: "🕯️",
    quote: "Nik nemá väčšiu lásku ako ten, kto položí život za svojich priateľov.", source: "Jn 15, 13",
    story: "Rodáčka z Košíc, novinárka a rehoľná sestra, ktorá počas vojny ukryla v Budapešti asi sto Židov. Nyilasovci ju zastrelili na brehu Dunaja; pred smrťou sa vraj prežehnala. Odvaha lásky je silnejšia ako strach."
  },
  {
    name: "sv. Pankrác", img: "Barcelona_Cathedral_Interior_-_Statue_of_Saint_Pancrace_of_Rome.jpg", feast: "05-12", years: "† okolo 304", title: "mučeník", symbol: "🌱",
    quote: "Nech nik nepohŕda tvojou mladosťou, ale buď veriacim vzorom.", source: "1 Tim 4, 12",
    story: "Štrnásťročný sirota, ktorý prišiel do Ríma a stal sa kresťanom. Počas prenasledovania ho sťali, lebo nechcel zaprieť Krista. Spolu s Servácom a Bonifácom patrí medzi „ľadových mužov“. Mladosť nie je prekážkou veľkej vernosti."
  },
  {
    name: "Panna Mária Fatimská", img: "Fatima_(3_–_cropped).jpg", feast: "05-13", years: "1917", title: "ľubovoľná spomienka", symbol: "🌹",
    quote: "Napokon moje Nepoškvrnené Srdce zvíťazí.", source: "Posolstvo z Fatimy, 13. 7. 1917",
    story: "V roku 1917 sa trom pastierikom vo Fatime zjavila Panna Mária a vyzývala k modlitbe ruženca za pokoj vo svete. Presne v tento deň v roku 1981 prežil atentát pápež Ján Pavol II. Modlitba má moc meniť dejiny."
  },
  {
    name: "sv. Matej", img: "Rubens_apostle_Matthias_grt.jpg", feast: "05-14", years: "1. storočie", title: "apoštol", symbol: "🎲",
    quote: "Pane, ty poznáš srdcia všetkých, ukáž, ktorého si vyvolil.", source: "Sk 1, 24",
    story: "Po Judášovej zrade apoštoli hľadali niekoho, kto bol s Ježišom od začiatku. Lós padol na Mateja. O jeho ďalšom živote vieme málo – len to, že verne svedčil o vzkriesení. Boh ťa pozná a má pre teba miesto."
  },
  {
    name: "sv. Izidor Roľník", img: "Saint_Isidor_Farmer_(18th_cen,_anon).jpg", feast: "05-15", years: "okolo 1070 – 1130", title: "roľník, patrón poľnohospodárov", symbol: "🌾",
    quote: "Ak Pán nestavia dom, márne sa namáhajú tí, čo ho stavajú.", source: "Ž 127, 1",
    story: "Madridský sedliak, ktorý celý život obrábal pole iného pána. Každé ráno chodil na omšu a podľa legendy za neho medzitým orali anjeli. S manželkou sa delil o posledné s chudobnými. Modlitba neberie čas – násobí ho."
  },
  {
    name: "sv. Ján Nepomucký", img: "Johannes_von_Nepomuk_Hinterglasbild.jpg", feast: "05-16", years: "okolo 1345 – 1393", title: "kňaz a mučeník", symbol: "🤫",
    quote: "Postav, Pane, stráž k mojim ústam, stráž bránu mojich perí.", source: "Ž 141, 3",
    story: "Generálny vikár pražskej arcidiecézy, ktorého kráľ Václav IV. dal mučiť a hodiť z Karlovho mosta do Vltavy. Podľa tradície preto, že odmietol prezradiť spovedné tajomstvo kráľovnej. Jeho sochy stoja pri mostoch aj na Slovensku. Vernosť sa ukazuje aj v tom, čo zamlčíš."
  },
  {
    name: "sv. Paschal Baylón", img: "LienzoS_Pascual.jpg", feast: "05-17", years: "1540 – 1592", title: "rehoľník, patrón eucharistických spolkov", symbol: "🍞",
    quote: "Toto je moje telo, ktoré sa obetuje za vás.", source: "Lk 22, 19",
    story: "Pastier oviec, ktorý sa naučil čítať sám, len aby mohol čítať modlitby. Ako františkánsky vrátnik prijímal žobrákov s veľkou láskou a hodiny sa modlil pred Eucharistiou. Obyčajná služba pri dverách môže byť bránou do neba."
  },
  {
    name: "sv. Ján I.", img: "Busto_relicário_do_Papa_São_João_I.jpg", feast: "05-18", years: "† 526", title: "pápež a mučeník", symbol: "⛓️",
    quote: "Blažení, ktorých prenasledujú pre spravodlivosť.", source: "Mt 5, 10",
    story: "Pápeža poslal ostrogótsky kráľ Teodorich na diplomatickú misiu do Konštantínopolu. Keď sa nevrátil s požadovaným výsledkom, kráľ ho uväznil v Ravenne, kde zomrel od hladu a vyčerpania. Aj mierová služba môže stáť život."
  },
  {
    name: "sv. Celestín V.", img: "Celestine_V_Castel_Nuovo_Napoli_n02.jpg", feast: "05-19", years: "1215 – 1296", title: "pápež a pustovník", symbol: "🏔️",
    quote: "Zbytočný služobník som; urobil som, čo som bol povinný urobiť.", source: "Lk 17, 10",
    story: "Osemdesiatročného pustovníka zvolili za pápeža, no po piatich mesiacoch pochopil, že na úrad nestačí, a sám sa ho vzdal. Chcel sa vrátiť do pustovne. Pokora uznať vlastné hranice je veľká odvaha."
  },
  {
    name: "sv. Bernardín Sienský", img: "Saint_Bernardino_of_Siena.PNG", feast: "05-20", years: "1380 – 1444", title: "kňaz, františkán", symbol: "☀️",
    quote: "Niet pod nebom iného mena, v ktorom by sme mohli byť spasení.", source: "Sk 4, 12",
    story: "Ako mladík ošetroval chorých v sienskej nemocnici počas moru. Potom sa stal jedným z najväčších kazateľov Talianska a šíril úctu k menu Ježiš – monogram IHS v lúčoch slnka. Meno Ježiš je svetlo aj v tvojom dni."
  },
  {
    name: "sv. Krištof Magallanes a spoločníci", img: "Cristobal.jpg", feast: "05-21", years: "1869 – 1927", title: "kňaz a mučeníci v Mexiku", symbol: "🕊️",
    quote: "Zomieram nevinný a prosím Boha, aby moja krv slúžila na zjednotenie mojich mexických bratov.", source: "Posledné slová",
    story: "Mexický farár, ktorý počas prenasledovania Cirkvi tajne slúžil sväté omše a zároveň odmietal ozbrojené násilie. Zastrelili ho bez súdu cestou na omšu. Pred smrťou dal katom rozhrešenie. Odpustenie je posledným slovom lásky."
  },
  {
    name: "sv. Rita z Cascie", img: "Santa_Rita_da_Cascia.jpg", feast: "05-22", years: "1381 – 1457", title: "rehoľníčka, patrónka beznádejných prípadov", symbol: "🌹",
    quote: "Čo je u ľudí nemožné, u Boha je možné.", source: "Lk 18, 27",
    story: "Vydali ju za násilníckeho muža, ktorého trpezlivo získala pre Boha. Po jeho vražde zabránila synom v pomste. Ako vdova vstúpila do kláštora, kam ju najprv nechceli prijať. Je patrónkou zdanlivo beznádejných prípadov. Nevzdávaj sa."
  },
  {
    name: "sv. Dezider z Vienne", img: "Saint-Didier_(35)_Église_Saint-Didier_et_Saint-Golven_07.jpg", feast: "05-23", years: "† 607", title: "arcibiskup a mučeník", symbol: "📜",
    quote: "Hovorte pravdu v láske.", source: "Ef 4, 15",
    story: "Arcibiskup vo Francúzsku, ktorý otvorene karhal krutú kráľovnú Brunhildu a kráľa za ich hriešny život. Poslali ho do vyhnanstva a napokon ho dali ukameňovať. Pravda povedaná s láskou má svoju cenu – a hodnotu."
  },
  {
    name: "sv. Vincent Lerinský", img: "Icon_of_St_Vincent_of_Lerins_by_Bojan_Teodosijević.jpg", feast: "05-24", years: "† okolo 445", title: "mních", symbol: "⚓",
    quote: "Držme sa toho, čo sa verilo všade, vždy a všetkými.", source: "Commonitorium 2",
    story: "Bývalý vojak, ktorý sa stal mníchom na ostrove Lérins. Napísal krátke, no slávne dielo o tom, ako rozlíšiť pravú vieru od novôt. Viera môže rásť ako strom, no zostáva tou istou vierou. Korene dávajú slobodu rastu."
  },
  {
    name: "sv. Béda Ctihodný", img: "E-codices_bke-0047_001v_medium_(cropped).jpg", feast: "05-25", years: "672 – 735", title: "kňaz a učiteľ Cirkvi", symbol: "📖",
    quote: "Sláva Otcu i Synu i Duchu Svätému.", source: "Posledné slová podľa žiaka Cuthberta",
    story: "Mních, ktorý celý život prežil v kláštore Jarrow, napísal Cirkevné dejiny anglického národa a zaviedol počítanie rokov „po Kristovi“. Na smrteľnej posteli ešte diktoval preklad Jánovho evanjelia. Zomrel so spevom Slávy na perách."
  },
  {
    name: "sv. Filip Neri", img: "FNeri.gif", feast: "05-26", years: "1515 – 1595", title: "kňaz, apoštol Ríma", symbol: "😊",
    quote: "Buďte dobrí, ak môžete.", source: "Tradícia oratória",
    story: "Rím ho poznal ako svätca s úsmevom a vtipom, ktorý premieňal ulice na miesta modlitby. Veril, že radostné srdce sa ľahšie stáva svätým než smutné. Dnes skús niekoho rozosmiať."
  },
  {
    name: "sv. Augustín z Canterbury", img: "LeningradBedeHiRes.jpg", feast: "05-27", years: "† 604", title: "biskup", symbol: "⛪",
    quote: "Nebojte sa, ja som s vami po všetky dni.", source: "Mt 28, 20",
    story: "Rímsky mních, ktorého pápež Gregor poslal s tridsiatimi druhmi do Anglicka. Cestou sa zľakli a chceli sa vrátiť, no pápež ich povzbudil. Pokrstil kráľa Etelberta a stal sa prvým arcibiskupom v Canterbury. Aj s obavami sa dá ísť vpred."
  },
  {
    name: "sv. Bernard z Menthonu", img: "Bernardus_van_Menthon_(tg-uact-666).jpg", feast: "05-28", years: "okolo 1020 – 1081", title: "kňaz, patrón horolezcov", symbol: "🐕",
    quote: "Nech je tvojou ochranou Pán; on bude strážiť tvoj odchod i príchod.", source: "Ž 121, 8",
    story: "Kňaz z Aosty, ktorý v Alpách postavil útulky pre pútnikov prechádzajúcich cez nebezpečné priesmyky. Mnísi z Veľkého sv. Bernarda neskôr chovali psov, ktorí zachraňovali ľudí zo snehu. Buď útočiskom pre tých, ktorí sú na ceste."
  },
  {
    name: "sv. Pavol VI.", img: "Pope_Paul_VI_1969_Portrait_(4x5_cropped).jpg", feast: "05-29", years: "1897 – 1978", title: "pápež", symbol: "⛵",
    quote: "Súčasný človek radšej počúva svedkov ako učiteľov, a ak počúva učiteľov, tak preto, že sú svedkami.", source: "Evangelii nuntiandi 41",
    story: "Pápež, ktorý dokončil Druhý vatikánsky koncil a ako prvý pápež cestoval lietadlom na všetky kontinenty. Niesol ťažké rozhodnutia a pre mnohé bol nepochopený. Svet dnes nepotrebuje kázne, ale svedkov."
  },
  {
    name: "sv. Jana z Arku", img: "Joan_of_Arc_miniature_graded.jpg", feast: "05-30", years: "1412 – 1431", title: "panna", symbol: "⚔️",
    quote: "Nebojím sa; narodila som sa na to.", source: "Výpoveď podľa súdnych záznamov",
    story: "Sedliacka dievčina, ktorá na výzvu hlasov svätých viedla francúzske vojsko a oslobodila Orléans. Neskôr ju zajali, odsúdili v nespravodlivom procese a upálili ako devätnásťročnú. Cirkev ju po rokoch rehabilitovala. Boh vie použiť aj tých, ktorých by nikto nevybral."
  },
  {
    name: "sv. Petronela", img: "Petronilla_bnfms.jpg", feast: "05-31", years: "1. storočie", title: "panna", symbol: "🌼",
    quote: "Mojou radosťou je byť blízko Boha.", source: "Ž 73, 28",
    story: "Ranokresťanská panna z Ríma, ktorú tradícia spájala so sv. Petrom. Jej hrob bol v Domitiliiných katakombách a Francúzi si ju vybrali za patrónku. Z jej života vieme málo, no pamiatka jej vernosti prežila stáročia."
  },
  {
    name: "sv. Justín", img: "Saint_Justin_Martyr_by_Theophanes_the_Cretan.jpg", feast: "06-01", years: "okolo 100 – 165", title: "filozof a mučeník", symbol: "🧠",
    quote: "Môžete nás zabiť, ale nemôžete nám uškodiť.", source: "Prvá apológia 2",
    story: "Pohanský filozof, ktorý hľadal pravdu u stoikov, pytagorejcov aj platonikov. Starý muž pri mori mu ukázal Písmo a Justín v ňom našiel to, čo hľadal. Otvoril v Ríme školu a za vieru zomrel. Úprimné hľadanie pravdy vedie ku Kristovi."
  },
  {
    name: "sv. Marcelín a Peter", img: "Sanctus_Marcellinus_Martyr_Germany_Seligenstadt_2007.JPG", feast: "06-02", years: "† 304", title: "mučeníci", symbol: "⛪",
    quote: "Blahoslavení, ktorých prenasledujú pre spravodlivosť.", source: "Mt 5, 10",
    story: "Rímsky kňaz a exorcista, ktorí aj vo väzení priviedli k viere svojho žalárnika s rodinou. Kat ich musel sťať v lese, aby ich hrob nikto nenašiel – no pápež Damas sa o ich príbehu dozvedel práve od neho. Pravda sa napokon vždy dostane na svetlo."
  },
  {
    name: "sv. Karol Lwanga a spoločníci", img: "Karoli_Lwanga_and_his_followers.jpg", feast: "06-03", years: "† 1886", title: "mučeníci z Ugandy", symbol: "🔥",
    quote: "Je to, akoby ste na mňa liali vodu.", source: "Slová na hranici podľa svedkov",
    story: "Mladí pážatá na kráľovskom dvore v Ugande odmietli kráľove nemravné požiadavky. Karol ich tajne pokrstil v noci pred popravou. Upálili ich zaživa; spievali pritom. Sú patrónmi mládeže Afriky. Čistota srdca je sila, nie slabosť."
  },
  {
    name: "sv. František Caracciolo", img: "Saint_Francis_Caracciolo.jpg", feast: "06-04", years: "1563 – 1608", title: "kňaz, zakladateľ", symbol: "🔥",
    quote: "Horlivosť za tvoj dom ma stravuje.", source: "Ž 69, 10 – jeho heslo",
    story: "Mladý šľachtic, ktorého vyliečili z kožnej choroby, sa rozhodol dať život Bohu. Založil rehoľu, ktorej členovia sa striedali v nepretržitej poklone Eucharistii. Staral sa o väzňov a odsúdených na smrť. Vďačnosť za uzdravenie sa stala celým životom."
  },
  {
    name: "sv. Bonifác", img: "Saint_Boniface_by_Cornelis_Bloemaert.jpg", feast: "06-05", years: "okolo 675 – 754", title: "biskup a mučeník, apoštol Nemecka", symbol: "🪓",
    quote: "Nebuďme nemými psami ani mlčiacimi pozorovateľmi, ale starostlivými pastiermi.", source: "List arcibiskupovi Cuthbertovi",
    story: "Anglický mních, ktorý vyrúbal posvätný Donarov dub a z jeho dreva postavil kaplnku. Zakladal biskupstvá a kláštory v celom Nemecku. Ako osemdesiatročného ho zabili pohania pri birmovke. Pokoj, odvaha a vernosť až do konca."
  },
  {
    name: "sv. Norbert", img: "SSACRAM_62.JPG", feast: "06-06", years: "okolo 1080 – 1134", title: "biskup, zakladateľ premonštrátov", symbol: "⚡",
    quote: "Pane, čo chceš, aby som urobil?", source: "Sk 22, 10",
    story: "Svetský kanonik, ktorý žil pohodlne na cisárskom dvore, kým ho na koni nezasiahol blesk. Obrátil sa, stal sa putovným kazateľom a založil rehoľu premonštrátov, ktorá pôsobí aj na Slovensku v Jasove. Boh vie osloviť aj búrkou."
  },
  {
    name: "sv. Róbert z Newminsteru", img: "Stiftskirche_Baumgartenberg_Kanzel06.jpg", feast: "06-07", years: "okolo 1100 – 1159", title: "opát, cisterciát", symbol: "🌳",
    quote: "Blahoslavení chudobní v duchu.", source: "Mt 5, 3",
    story: "Farár z Yorkshiru, ktorý sa pridal k mníchom zakladajúcim opátstvo Fountains a neskôr viedol nový kláštor Newminster. Žil prísne, no bol neobyčajne jemný k druhým. Tvrdý k sebe, mierny k iným – to je cesta svätých."
  },
  {
    name: "sv. Hedviga Poľská", img: "Jadwiga_Andegaweńska_seal_1386.PNG", feast: "06-08", years: "1374 – 1399", title: "kráľovná", symbol: "👑",
    quote: "Nech sa stane tvoja vôľa ako v nebi, tak i na zemi.", source: "Mt 6, 10",
    story: "Ako desaťročnú ju korunovali za „kráľa“ Poľska. Kvôli pokrsteniu Litvy sa vzdala lásky a vydala sa za litovského vládcu. Obnovila Krakovskú univerzitu a starala sa o chudobných. Zomrela ako 25-ročná. Obeta pre druhých prináša požehnanie národom."
  },
  {
    name: "sv. Efrém Sýrsky", img: "Mor_Ephrem_icon.jpg", feast: "06-09", years: "okolo 306 – 373", title: "diakon a učiteľ Cirkvi", symbol: "🎶",
    quote: "Spievajte Pánovi novú pieseň, spievaj Pánovi, celá zem.", source: "Ž 96, 1",
    story: "Diakon z Nisibis, ktorého volali „harfa Ducha Svätého“. Skladal hymny, aby ľudia spievaním pochopili vieru. Počas hladomoru v Edese organizoval pomoc chorým a hladným. Krása piesne môže otvoriť srdce pre Boha."
  },
  {
    name: "sv. Landerik", img: "Paris_-_Église_Saint-Germain-l'Auxerrois_-_PA00085796_-_123.jpg", feast: "06-10", years: "† okolo 661", title: "biskup Paríža", symbol: "🏥",
    quote: "Čokoľvek ste urobili jednému z týchto mojich najmenších bratov, mne ste urobili.", source: "Mt 25, 40",
    story: "Parížsky biskup, ktorý počas hladomoru predal aj bohoslužobné nádoby, aby nakŕmil hladných. Založil prvú parížsku nemocnicu, ktorá sa stala slávnou Hôtel-Dieu. Ľudia sú vzácnejší než zlato."
  },
  {
    name: "sv. Barnabáš", img: "Galería_Uffizi,_Florencia,_Italia,_2022_09_18,_DD_42_(1)_(cropped).jpg", feast: "06-11", years: "1. storočie", title: "apoštol", symbol: "🤝",
    quote: "Bol to dobrý muž, plný Ducha Svätého a viery.", source: "Sk 11, 24",
    story: "Jeho meno znamená „syn útechy“. Predal pole a dal peniaze apoštolom. Keď sa všetci Pavla báli, Barnabáš sa ho zastal a uviedol ho medzi apoštolov. Niekedy stačí, aby jeden človek v niekoho uveril."
  },
  {
    name: "sv. Onufrius", img: "Saint_Onuphrius_Emmanuel_Tzanes.png", feast: "06-12", years: "4. – 5. storočie", title: "pustovník", symbol: "🌴",
    quote: "Moja duša prahne po Bohu, po živom Bohu.", source: "Ž 42, 3",
    story: "Egyptský pustovník, ktorý šesťdesiat rokov žil sám v púšti a živil sa datľami. Mních Pafnúcius ho našiel tesne pred smrťou a zaznamenal jeho príbeh. Ticho a samota môžu byť miestom veľkej blízkosti Boha."
  },
  {
    name: "sv. Anton Paduánsky", img: "Francisco_de_Zurbarán_-_Sto_Antonio_de_Padua.jpg", feast: "06-13", years: "1195 – 1231", title: "kňaz a učiteľ Cirkvi", symbol: "🍞",
    quote: "Kázeň je živá, keď hovoria skutky.", source: "Kázne",
    story: "Chcel zomrieť ako misionár v Afrike, no choroba a búrka ho zaviedli inam. Práve tam, kde to nečakal, objavili jeho dar slova. Aj zmarené plány môžu byť cestou k tvojmu skutočnému povolaniu."
  },
  {
    name: "sv. Elizeus", img: "Chapelle_des_Carmélites_-_Interieur_-_Élisée_ressuscitant_le_fils_de_la_Sunamite_par_Despax_(cropped).jpg", feast: "06-14", years: "9. storočie pred Kr.", title: "prorok", symbol: "🧥",
    quote: "Nech mi pripadne dvojnásobný podiel tvojho ducha.", source: "2 Kr 2, 9",
    story: "Oráč, ktorého povolal prorok Eliáš. Keď Eliáš vystúpil v ohnivom voze do neba, Elizeus zdvihol jeho plášť a pokračoval v jeho službe. Vzkriesil syna Šunamitky a uzdravil Námana. Boh volá ľudí od bežnej práce k veľkým veciam."
  },
  {
    name: "sv. Vít", img: "St_Veit_Gölsen_Pfarrkirche_Fenster02.jpg", feast: "06-15", years: "† okolo 303", title: "mučeník", symbol: "💃",
    quote: "Nech nik nepohŕda tvojou mladosťou.", source: "1 Tim 4, 12",
    story: "Sicílsky chlapec, ktorý sa stal kresťanom proti vôli otca a zomrel ako mučeník. Je patrónom tancujúcich, hercov aj pražskej katedrály. Kostoly sv. Víta nájdeš aj na Slovensku. Mladé srdce môže byť nesmierne statočné."
  },
  {
    name: "sv. Ján František Régis", img: "San_Juan_Francisco_de_Regis.jpg", feast: "06-16", years: "1597 – 1640", title: "kňaz, jezuita", symbol: "❄️",
    quote: "Duch Pánov je nado mnou… poslal ma hlásať chudobným evanjelium.", source: "Lk 4, 18",
    story: "Jezuitský misionár, ktorý chodil po zasnežených horách južného Francúzska, spovedal celé dni a zakladal útulky pre ženy v núdzi. Zomrel na zápal pľúc počas misie. Láska sa neodkladá na lepšie počasie."
  },
  {
    name: "sv. Albert Chmielowski", img: "Brat_Albert.png", feast: "06-17", years: "1845 – 1916", title: "rehoľník, maliar", symbol: "🍞",
    quote: "Treba byť dobrý ako chlieb.", source: "Obľúbené slová brata Alberta",
    story: "Povstalec, ktorý v boji prišiel o nohu, a nadaný maliar. Namaľoval obraz Ecce Homo a potom opustil umenie, aby žil s bezdomovcami v Krakove. Založil albertínov. Byť dobrý ako chlieb znamená byť tu pre každého, kto je hladný."
  },
  {
    name: "sv. Gregor Barbarigo", img: "Ermanno_Stroiffi_-_Portrait_of_Gregorio_Barbarigo.jpg", feast: "06-18", years: "1625 – 1697", title: "kardinál, biskup Padovy", symbol: "📖",
    quote: "Pas moje ovce.", source: "Jn 21, 17",
    story: "Benátsky šľachtic a diplomat, ktorý sa stal kňazom po morovej epidémii, keď pomáhal chorým. Ako biskup navštívil každú farnosť svojej diecézy, založil tlačiareň a seminár. Bol taký štedrý, že rozdal aj vlastný nábytok. Dobrý pastier pozná svoje ovce."
  },
  {
    name: "sv. Romuald", img: "Fra_Angelico_032.jpg", feast: "06-19", years: "okolo 951 – 1027", title: "opát, zakladateľ kamaldulov", symbol: "🏡",
    quote: "Sadni si vo svojej cele ako v raji… buď ako kuriatko, ktoré sa nasýti len tým, čo mu dá matka.", source: "Krátka regula sv. Romualda",
    story: "Mladý šľachtic bol svedkom, ako jeho otec zabil v súboji príbuzného. Na pokánie za otca vstúpil do kláštora. Tridsať rokov putoval Talianskom a zakladal pustovne. Z tieňa hriechu druhých môže vyrásť tvoje povolanie."
  },
  {
    name: "sv. Silverius", img: "Orazio_samacchini,_san_giovannino_in_gloria_tra_i_ss._caterina_d'a._e_silverio_papa,_1570-75_ca._01(cropped).jpg", feast: "06-20", years: "† 537", title: "pápež a mučeník", symbol: "🏝️",
    quote: "Blahoslavení prenasledovaní pre spravodlivosť.", source: "Mt 5, 10",
    story: "Pápež, ktorého cisárovná Teodora chcela prinútiť k ústupkom v učení viery. Keď odmietol, falošne ho obvinili a poslali do vyhnanstva na pustý ostrov, kde zomrel od hladu. Pravda sa nezradí ani za cenu života."
  },
  {
    name: "sv. Alojz Gonzaga", img: "The_Vocation_of_Saint_Aloysius_Gonzaga.PNG", feast: "06-21", years: "1568 – 1591", title: "rehoľník, patrón mládeže", symbol: "🌸",
    quote: "Som krivé železo; prišiel som do rehole, aby som sa narovnal.", source: "podľa životopiscov",
    story: "Najstarší syn markíza sa vzdal dedičstva a vstúpil k jezuitom. Počas morovej epidémie v Ríme nosil chorých z ulíc do nemocnice, až sa sám nakazil a zomrel ako 23-ročný. Je patrónom mládeže. Láska je silnejšia ako strach z nákazy."
  },
  {
    name: "sv. Tomáš More", img: "Hans_Holbein,_the_Younger_-_Sir_Thomas_More_-_Google_Art_Project.jpg", feast: "06-22", years: "1478 – 1535", title: "mučeník, patrón politikov", symbol: "⚖️",
    quote: "Zomieram ako dobrý kráľov služobník, ale najprv Boží.", source: "Posledné slová na popravisku",
    story: "Najvyšší kancelár Anglicka, právnik, spisovateľ a milujúci otec. Odmietol uznať kráľa za hlavu Cirkvi, a tak ho sťali. Aj vo väzení si zachoval humor a pokoj. Je patrónom politikov: svedomie je viac než kariéra."
  },
  {
    name: "sv. Jozef Cafasso", img: "Giuseppe_Cafasso.jpg", feast: "06-23", years: "1811 – 1860", title: "kňaz, apoštol väzňov", symbol: "⛓️",
    quote: "Dnes budeš so mnou v raji.", source: "Lk 23, 43",
    story: "Turínsky kňaz, učiteľ a spovedník Dona Bosca. Navštevoval väznice a sprevádzal na popravisko 68 odsúdených na smrť – nazývali ho „kňaz šibenice“. Nikoho nepovažoval za strateného. Pre Boha nie je nikto odpísaný."
  },
  {
    name: "Narodenie sv. Jána Krstiteľa", img: "Accademia_-_St_John_the_Baptist_by_Titian_Cat314.jpg", feast: "06-24", years: "1. storočie", title: "slávnosť", symbol: "🌊",
    quote: "On musí rásť, a ja sa zmenšovať.", source: "Jn 3, 30",
    story: "Syn starých rodičov Zachariáša a Alžbety, ktorí už nedúfali. Kazateľ na púšti, ktorý pripravoval cestu Mesiášovi a ukázal naňho: „Hľa, Baránok Boží.“ Veľkosť človeka je v tom, že ukazuje na Krista, nie na seba."
  },
  {
    name: "sv. Prosper Akvitánsky", img: "Aquitániai_Szent_Prosper.jpg", feast: "06-25", years: "okolo 390 – 463", title: "teológ", symbol: "🙏",
    quote: "Zákon modlitby nech určuje zákon viery.", source: "Indiculus 8",
    story: "Laik z Galie, ktorý bránil učenie sv. Augustína o milosti a neskôr pracoval v Ríme pre pápeža Leva Veľkého. Jeho slová o tom, že spôsob modlitby Cirkvi vyjadruje jej vieru, sa citujú dodnes. Ako sa modlíš, tak veríš."
  },
  {
    name: "sv. Jozef Maria Escrivá", img: "Josemaria_Escriva.jpg", feast: "06-26", years: "1902 – 1975", title: "kňaz, zakladateľ Opus Dei", symbol: "🛠️",
    quote: "Veď toto je Božia vôľa: vaše posvätenie.", source: "1 Sol 4, 3",
    story: "Španielsky kňaz, ktorý uvidel stopy bosých nôh karmelitána v snehu a začal hľadať Božiu vôľu. Založil Opus Dei, aby ukázal, že každá čestná práca a bežný život sa môžu stať cestou k svätosti. Tvoj bežný deň je miestom stretnutia s Bohom."
  },
  {
    name: "sv. Cyril Alexandrijský", img: "Chora-Kirche_2013-03-21zh_(cropped).jpg", feast: "06-27", years: "okolo 376 – 444", title: "biskup a učiteľ Cirkvi", symbol: "🛡️",
    quote: "Slovo sa telom stalo a prebývalo medzi nami.", source: "Jn 1, 14",
    story: "Alexandrijský patriarcha, ktorý na koncile v Efeze obhájil, že Mária je Bohorodička, lebo jej Syn je pravý Boh. Bol horlivý a niekedy prudký, no svoju vieru bránil s veľkou hĺbkou. Pravda o Kristovi je aj pravdou o Márii."
  },
  {
    name: "sv. Irenej", img: "Saint_irenee_saint_irenee.jpg", feast: "06-28", years: "okolo 130 – 202", title: "biskup a mučeník", symbol: "✨",
    quote: "Božou slávou je živý človek.", source: "Proti bludom IV, 20, 7",
    story: "Bol žiakom Polykarpa, ktorý ešte poznal apoštola Jána. V dobe zmätku bránil pravdu jasne, no bez nenávisti. Boh sa neteší z tvojej malosti, ale z toho, keď naplno žiješ."
  },
  {
    name: "sv. Peter a Pavol", img: "Petrus_et_Paulus_4th_century_etching.JPG", feast: "06-29", years: "† okolo 64 – 67", title: "apoštoli", symbol: "🗝️",
    quote: "Všetko môžem v tom, ktorý mi dáva silu.", source: "List Filipanom 4, 13",
    story: "Peter trikrát zaprel, Pavol prenasledoval kresťanov. Oba stĺpy Cirkvi začínali zlyhaním. Tvoja minulosť nie je prekážkou, ale miestom, kde môže začať milosť."
  },
  {
    name: "Prví mučeníci svätej Rímskej cirkvi", img: "Siemiradski_Fackeln.jpg", feast: "06-30", years: "† 64", title: "ľubovoľná spomienka", symbol: "🔥",
    quote: "Krv mučeníkov je semenom kresťanov.", source: "Tertulián, Apologeticum 50",
    story: "Po požiari Ríma v roku 64 cisár Nero obvinil kresťanov a dal ich masovo popraviť – v arénach, na krížoch aj ako živé pochodne. Ich mená nepoznáme, no ich vernosť postavila základy Cirkvi v Ríme. Bezmenní hrdinovia sú v Božej pamäti."
  },
  {
    name: "sv. Oliver Plunkett", img: "Oliver_Plunket_by_Edward_Luttrell.jpg", feast: "07-01", years: "1625 – 1681", title: "arcibiskup a mučeník", symbol: "☘️",
    quote: "Odpúšťam všetkým, ktorí sa pričinili o moju smrť.", source: "Reč na popravisku v Tyburne",
    story: "Írsky arcibiskup z Armaghu, ktorý počas prenasledovania katolíkov žil v úkryte a spravoval svoju cirkev v prestrojení. Na základe falošných svedectiev ho v Londýne obesili. Bol posledným katolíckym mučeníkom v Anglicku. Odpustenie je víťazstvo."
  },
  {
    name: "Navštívenie Panny Márie", img: "Pontormo-visitation-after-restorationRGB.jpg", feast: "07-02", years: "", title: "sviatok", symbol: "🤰",
    quote: "Blahoslavená si medzi ženami a blahoslavený je plod tvojho života.", source: "Lk 1, 42",
    story: "Mária sa hneď po zvestovaní vydala do hôr, aby pomohla staršej príbuznej Alžbete. Dieťa v Alžbetinom lone zaplesalo radosťou. Kto nosí Boha v srdci, ponáhľa sa slúžiť druhým a prináša radosť."
  },
  {
    name: "sv. Tomáš", img: "Thomas_the_Apostle._Detail_of_the_mosaic_in_the_Basilica_of_San_Vitale._Ravena,_Italy.jpg", feast: "07-03", years: "1. storočie", title: "apoštol", symbol: "✋",
    quote: "Pán môj a Boh môj!", source: "Jn 20, 28",
    story: "Apoštol, ktorý neveril, kým sa nedotkne Ježišových rán. Keď ho Ježiš pozval, vyznal vieru, akú nikto pred ním. Podľa tradície priniesol evanjelium až do Indie. Pochybnosť môže byť cestou k hlbšej viere."
  },
  {
    name: "sv. Pier Giorgio Frassati", img: "PierGiorgioFrassati-Présentation.jpg", feast: "07-04", years: "1901 – 1925", title: "laik, horolezec", symbol: "⛰️",
    quote: "Hore k výšinám!", source: "Verso l'alto – nápis na jeho fotografii z hôr",
    story: "Syn bohatej rodiny z Turína, ktorý miloval hory, priateľov a potajme rozdával chudobným všetko, čo mal. Zomrel ako 24-ročný na chorobu, ktorou sa asi nakazil pri službe biednym. Svätosť môže byť dobrodružná."
  },
  {
    name: "sv. Cyril a Metod", img: "Sv_Kiril_Metodij_Zahari_Zograf_Trojanski_mon_1848.jpg", feast: "07-05", years: "9. storočie", title: "slovanskí vierozvestcovia", symbol: "📜",
    quote: "Nahé sú bez kníh všetky národy.", source: "Proglas",
    story: "Dvaja bratia zo Solúna priniesli našim predkom písmo, liturgiu aj vlastnú kultúru. Za to, že sa Boh mohol modliť po slovensky, zniesli odpor, väzenie aj vyhnanstvo. Ich odvaha je súčasťou toho, kým sme."
  },
  {
    name: "sv. Mária Goretti", img: "Maria_Goretti.jpg", feast: "07-06", years: "1890 – 1902", title: "panna a mučenica", symbol: "🌸",
    quote: "Odpúšťam mu a chcem ho mať pri sebe v raji.", source: "Posledné slová",
    story: "Jedenásťročné dievča z chudobnej rodiny sa bránilo mladíkovi Alessandrovi, ktorý ju za to dobodal. Pred smrťou mu odpustila. Alessandro sa vo väzení obrátil a bol prítomný na jej svätorečení. Odpustenie môže zachrániť aj vraha."
  },
  {
    name: "sv. Anton Mária Zaccaria", img: "San_Antonio_Maria_Zaccaria.jpg", feast: "07-07", years: "1502 – 1539", title: "kňaz, zakladateľ barnabitov", symbol: "⚕️",
    quote: "Napodobňujte mňa, ako aj ja napodobňujem Krista.", source: "1 Kor 11, 1",
    story: "Lekár z Cremony, ktorý pochopil, že ľudia potrebujú liečiť aj dušu. Stal sa kňazom a založil barnabitov, ktorí šírili úctu k Eucharistii a Pavlovým listom. Zomrel ako 36-ročný. Krátky život môže byť veľmi plodný."
  },
  {
    name: "sv. Kilián", img: "San_Kilian.jpg", feast: "07-08", years: "okolo 640 – 689", title: "biskup a mučeník", symbol: "☘️",
    quote: "Choďte do celého sveta a hlásajte evanjelium.", source: "Mk 16, 15",
    story: "Írsky mních, ktorý s dvoma druhmi prišiel ohlasovať evanjelium do Franskej ríše. Pokrstil vojvodu vo Würzburgu, no keď ho napomenul za nezákonné manželstvo, vojvodova žena ich dala zavraždiť. Pravda a láska idú ruka v ruke."
  },
  {
    name: "sv. Augustín Zhao Rong a spoločníci", img: "Saint_Augustine_Tchao.png", feast: "07-09", years: "† 1648 – 1930", title: "mučeníci v Číne", symbol: "🏮",
    quote: "Blahoslavení prenasledovaní pre spravodlivosť.", source: "Mt 5, 10",
    story: "Čínsky vojak, ktorý sprevádzal odsúdeného misionára na popravu. Jeho pokoj a trpezlivosť ho tak zasiahli, že sa dal pokrstiť a stal sa kňazom. Sám napokon zomrel vo väzení. S ním si pripomíname 120 čínskych mučeníkov. Svedectvo pokoja má obrovskú silu."
  },
  {
    name: "sv. Knut IV.", img: "Christian-albrecht-von-benzon,_the_death_of_Canute_the_Holy.jpg", feast: "07-10", years: "okolo 1042 – 1086", title: "kráľ a mučeník", symbol: "👑",
    quote: "Do tvojich rúk porúčam svojho ducha.", source: "Lk 23, 46",
    story: "Dánsky kráľ, ktorý staval kostoly, podporoval Cirkev a chránil chudobných. Počas vzbury ho zabili pred oltárom v kostole v Odense, kde sa modlil. Moc je najkrajšia, keď slúži slabým."
  },
  {
    name: "sv. Benedikt", img: "Memling,_Trittico_di_Benedetto_Portinari,_San_Benedetto.jpg", feast: "07-11", years: "okolo 480 – 547", title: "opát, patrón Európy", symbol: "⛪",
    quote: "Počúvaj, syn môj, príkazy učiteľa a nakloň ucho svojho srdca.", source: "Regula, Prológ",
    story: "Odišiel z hlučného Ríma do jaskyne v Subiacu a z ticha vzišlo dielo, ktoré prežilo pád ríše. Jeho kláštory zachránili knihy aj poľnohospodárstvo Európy. Veľké veci rastú z počúvania."
  },
  {
    name: "sv. Ľudovít a Zélia Martinovci", img: "Louis_Martin_1.jpg", feast: "07-12", years: "1823 – 1894, 1831 – 1877", title: "manželia, rodičia sv. Terézie", symbol: "💞",
    quote: "Dobrý Boh mi dal otca a matku, ktorí boli hodnejší neba ako zeme.", source: "sv. Terézia z Lisieux, list",
    story: "Hodinár a čipkárka z Francúzska. Obaja chceli vstúpiť do rehole, no Boh ich spojil v manželstve. Mali deväť detí, štyri pochovali; všetky dcéry sa stali rehoľníčkami, medzi nimi sv. Terézia. Prví manželia svätorečení spoločne. Rodina je cesta k svätosti."
  },
  {
    name: "sv. Henrich II.", img: "Kronung_Heinrich_II.jpg", feast: "07-13", years: "973 – 1024", title: "cisár", symbol: "👑",
    quote: "Hľadajte najprv Božie kráľovstvo a jeho spravodlivosť.", source: "Mt 6, 33",
    story: "Nemecký cisár a brat bl. Gizely, manželky uhorského kráľa sv. Štefana. Zakladal biskupstvá, podporoval reformu Cirkvi a spolu s manželkou Kunhutou viedol zbožný život. Vládnuť sa dá aj s pokorou a vierou."
  },
  {
    name: "sv. Kamil de Lellis", img: "Lellis2.jpg", feast: "07-14", years: "1550 – 1614", title: "kňaz, patrón chorých a nemocníc", symbol: "➕",
    quote: "Čokoľvek ste urobili jednému z týchto mojich najmenších bratov, mne ste urobili.", source: "Mt 25, 40",
    story: "Hazardný hráč a vojak s nevyliečiteľnou ranou na nohe. Ako ošetrovateľ v nemocnici videl, ako zle sa s chorými zaobchádza, a založil rehoľu, ktorá sa o nich starala „s materinskou láskou“. Ich červený kríž bol predchodcom Červeného kríža."
  },
  {
    name: "sv. Bonaventúra", img: "François,_Claude_(dit_Frère_Luc)_-_Saint_Bonaventure.jpg", feast: "07-15", years: "1221 – 1274", title: "biskup a učiteľ Cirkvi", symbol: "🔥",
    quote: "Ak chceš vedieť, ako sa to deje, pýtaj sa milosti, nie náuky; túžby, nie rozumu.", source: "Putovanie mysle k Bohu 7",
    story: "Ako dieťa ho podľa tradície uzdravil sv. František, ktorý zvolal: „O buona ventura!“ Stal sa profesorom v Paríži, generálom františkánov a kardinálom. Keď mu priniesli kardinálsky klobúk, práve umýval riad. Múdrosť a pokora sa dopĺňajú."
  },
  {
    name: "Panna Mária Karmelská", img: "Pietro_Novelli_Our_Lady_of_Carmel_and_Saints.JPG", feast: "07-16", years: "", title: "ľubovoľná spomienka", symbol: "🟤",
    quote: "Nech sa ti stane podľa tvojho slova.", source: "Lk 1, 38",
    story: "Na hore Karmel sa modlil prorok Eliáš a neskôr tam žili pustovníci, z ktorých vznikli karmelitáni. Tí si zvolili Pannu Máriu za svoju matku. Škapuliar je znamením jej ochrany a nášho zasvätenia. Mária sprevádza tých, čo hľadajú Boha v tichu."
  },
  {
    name: "sv. Andrej-Svorad a Beňadik", img: "SaintSvorad.jpeg", feast: "07-17", years: "11. storočie", title: "pustovníci, patróni Nitrianskej diecézy", symbol: "⛰️",
    quote: "Blahoslavení čistého srdca, lebo oni uvidia Boha.", source: "Mt 5, 8",
    story: "Svorad, pravdepodobne poľského pôvodu, žil ako pustovník na Zobore pri Nitre a potom v jaskyni na Skalke pri Trenčíne. Jeho žiak Beňadik pokračoval v pustovníckom živote, až ho zbojníci zavraždili a hodili do Váhu. Sú prvými svätými zo Slovenska."
  },
  {
    name: "sv. Arnulf z Metz", img: "Saint_Arnould.jpg", feast: "07-18", years: "okolo 582 – 640", title: "biskup", symbol: "🍺",
    quote: "Nezhromažďujte si poklady na zemi.", source: "Mt 6, 19",
    story: "Franský šľachtic, dvoran a otec rodiny, ktorý sa stal biskupom v Metz. Na sklonku života sa vzdal úradu a odišiel do pustovne vo Vogézach, kde sa staral o malomocných. Je predkom Karola Veľkého. Aj po úspešnej kariére môže prísť najdôležitejšia kapitola."
  },
  {
    name: "sv. Makrína Mladšia", img: "Macrina_the_Younger.jpg", feast: "07-19", years: "okolo 327 – 379", title: "panna", symbol: "🕯️",
    quote: "Ty si nás oslobodil zo strachu pred smrťou.", source: "Modlitba pred smrťou podľa sv. Gregora Nysského",
    story: "Najstaršia sestra sv. Bazila a sv. Gregora Nysského. Po smrti snúbenca zasvätila život Bohu a z rodinného statku urobila kláštor. Práve ona priviedla brata Bazila od svetskej slávy k Bohu. Vplyv sestry môže zmeniť dejiny Cirkvi."
  },
  {
    name: "sv. Apolinár", img: "Saint_Apollenaris.jpg", feast: "07-20", years: "† okolo 200", title: "biskup a mučeník", symbol: "🏛️",
    quote: "Neprestávajte sa modliť.", source: "1 Sol 5, 17",
    story: "Podľa tradície učeník sv. Petra a prvý biskup Ravenny. Viackrát ho väznili a vyhnali, no zakaždým sa vrátil k svojmu stádu. Nádherná bazilika sv. Apolinára v Classe dodnes pripomína jeho vernosť. Dobrý pastier sa vracia."
  },
  {
    name: "sv. Vavrinec z Brindisi", img: "San_Lorenzo_da_Brindisi.jpg", feast: "07-21", years: "1559 – 1619", title: "kňaz a učiteľ Cirkvi", symbol: "✝️",
    quote: "Božie slovo je svetlo pre rozum, oheň pre vôľu.", source: "Kázne",
    story: "Kapucín, ktorý hovoril mnohými jazykmi a vedel naspamäť celé Písmo v pôvodine. Ako diplomat a kazateľ pôsobil v Prahe a vo Viedni a v bitke pri Stoličnom Belehrade povzbudzoval vojakov s krížom v ruke. Božie slovo dáva odvahu."
  },
  {
    name: "sv. Mária Magdaléna", img: "TINTORETTO_-_Magdalena_penitente_(Musei_Capitolini,_Roma,_1598-1602)_-_copia.jpg", feast: "07-22", years: "1. storočie", title: "sviatok, apoštolka apoštolov", symbol: "🏺",
    quote: "Videla som Pána!", source: "Jn 20, 18",
    story: "Ježiš z nej vyhnal sedem zlých duchov a ona ho odvtedy verne nasledovala až pod kríž. Ako prvá videla vzkrieseného Pána a priniesla správu apoštolom. Pápež František povýšil jej spomienku na sviatok. Láska vytrvá, aj keď sa všetko zdá stratené."
  },
  {
    name: "sv. Brigita Švédska", img: "Heliga_Birgitta_på_ett_altarskåp_i_Salems_kyrka_retouched.png", feast: "07-23", years: "1303 – 1373", title: "rehoľníčka, patrónka Európy", symbol: "📜",
    quote: "Pane, ukáž mi cestu a urob ma ochotnou kráčať po nej.", source: "Modlitby sv. Brigity",
    story: "Švédska šľachtičná, manželka a matka ôsmich detí. Po smrti manžela založila rehoľu a presťahovala sa do Ríma, kde pápežov otvorene vyzývala k návratu z Avignonu. Jej dcéra je sv. Katarína Švédska. Manželka, matka, mystička – a patrónka Európy."
  },
  {
    name: "sv. Šarbel Machlúf", img: "Charbel.jpg", feast: "07-24", years: "1828 – 1898", title: "kňaz, pustovník", symbol: "🌲",
    quote: "Buďte ticho a poznajte, že ja som Boh.", source: "Ž 46, 11",
    story: "Libanonský mních, ktorý posledných 23 rokov žil v pustovni v tichu a modlitbe. Po smrti z jeho hrobu vychádzalo svetlo a jeho telo zostalo neporušené. Pri jeho hrobe sa dodnes dejú uzdravenia. Ticho pred Bohom hovorí viac ako slová."
  },
  {
    name: "sv. Jakub Starší", img: "Peter_Paul_Rubens_-_St_James_the_Apostle_-_WGA20192.jpg", feast: "07-25", years: "† 44", title: "apoštol", symbol: "🐚",
    quote: "Môžete piť kalich, ktorý ja pijem? – Môžeme.", source: "Mk 10, 38 – 39",
    story: "Rybár a brat Jána, ktorého Ježiš nazval „synom hromu“. Ako prvý z apoštolov zomrel mučeníckou smrťou v Jeruzaleme. Jeho hrob v Santiagu de Compostela je cieľom miliónov pútnikov. Život je púť – a má cieľ."
  },
  {
    name: "sv. Joachim a Anna", img: "Chanter_Angelos_Akotandos_-_St_Anne_with_the_Virgin_-_Google_Art_Project.jpg", feast: "07-26", years: "1. storočie pred Kr.", title: "rodičia Panny Márie", symbol: "👵",
    quote: "Starí rodičia sú korunou detí.", source: "Prís 17, 6",
    story: "Podľa tradície dlho čakali na dieťa a Boh im dal dcéru Máriu, ktorú vychovali vo viere. Sú patrónmi starých rodičov. Poďakuj dnes za svojich starých rodičov – aj za to, čo ti odovzdali bez slov."
  },
  {
    name: "sv. Gorazd a spoločníci", img: "Gorazd_from_Slivnica_Monastery.jpg", feast: "07-27", years: "9. storočie", title: "učeníci sv. Cyrila a Metoda", symbol: "📖",
    quote: "Nahé sú bez kníh všetky národy.", source: "Proglas",
    story: "Gorazd, rodák z Veľkej Moravy, bol podľa sv. Metoda „slobodným mužom vašej krajiny“ a mal byť jeho nástupcom. Po Metodovej smrti ich s ďalšími učeníkmi uväznili a vyhnali. Odišli k južným Slovanom a tam rozvinuli slovanskú vzdelanosť. Svetlo sa nedá zhasnúť."
  },
  {
    name: "sv. Alfonza od Nepoškvrneného počatia", img: "St_Alphonsa_6.jpg", feast: "07-28", years: "1910 – 1946", title: "rehoľníčka", symbol: "🌺",
    quote: "Tí, čo sejú v slzách, budú žať s plesaním.", source: "Ž 126, 5",
    story: "Indická rehoľníčka z Kéraly, ktorá väčšinu krátkeho života prežila v chorobe a bolestiach. Utrpenie prijímala s úsmevom a obetovala ho za druhých. Stala sa prvou indickou svätou ženou. Aj bolesť sa môže stať darom."
  },
  {
    name: "sv. Marta, Mária a Lazár", img: "Johannes_(Jan)_Vermeer_-_Christ_in_the_House_of_Martha_and_Mary_-_Google_Art_Project_(cropped2).jpg", feast: "07-29", years: "1. storočie", title: "priatelia Pána", symbol: "🏠",
    quote: "Ja som vzkriesenie a život. Kto verí vo mňa, bude žiť, aj keď umrie.", source: "Jn 11, 25",
    story: "Súrodenci z Betánie, u ktorých Ježiš rád odpočíval. Marta slúžila, Mária počúvala a Lazára Ježiš vzkriesil z mŕtvych. Ježiš má priateľov a chce byť aj tvojím priateľom. Otvor mu dnes dvere svojho domu."
  },
  {
    name: "bl. Zdenka Schelingová", img: "Zdenka_Schelingová_MF2.jpg", feast: "07-30", years: "1916 – 1955", title: "rehoľníčka a mučenica", symbol: "🕊️",
    quote: "Rada som obetovala svoj život za kňazov.", source: "podľa svedectiev spolusestier",
    story: "Rehoľná sestra z Krivej na Orave, zdravotná sestra v Bratislave. V roku 1952 pomohla uväznenému kňazovi utiecť z nemocnice. Komunisti ju zatkli, mučili a odsúdili. Zomrela po prepustení na následky týrania. Odvaha lásky v najtemnejšej dobe."
  },
  {
    name: "sv. Ignác z Loyoly", img: "Ignatius_Loyola.jpg", feast: "07-31", years: "1491 – 1556", title: "kňaz, zakladateľ jezuitov", symbol: "⚔️",
    quote: "Vezmi si, Pane, a prijmi celú moju slobodu, moju pamäť, môj rozum a celú moju vôľu.", source: "Duchovné cvičenia, Suscipe",
    story: "Ako ctižiadostivý vojak utrpel ťažké zranenie a pri čítaní životov svätých na lôžku sa jeho sny obrátili. Z porážky sa zrodil muž, ktorý zmenil svet. Prehra môže byť začiatkom."
  },
  {
    name: "sv. Alfonz Mária de' Liguori", img: "Liguori.jpg", feast: "08-01", years: "1696 – 1787", title: "biskup a učiteľ Cirkvi", symbol: "🎹",
    quote: "Kto sa modlí, istotne sa spasí; kto sa nemodlí, istotne sa zatratí.", source: "O modlitbe",
    story: "Úspešný advokát, ktorý prehral dôležitý proces pre chybu a pochopil márnosť sveta. Stal sa kňazom, založil redemptoristov a napísal množstvo kníh aj vianočnú pieseň, ktorú dodnes spievajú Taliani. Prehra môže byť začiatkom povolania."
  },
  {
    name: "sv. Peter Julián Eymard", img: "St_Peter_Julian_Eymard.jpg", feast: "08-02", years: "1811 – 1868", title: "kňaz, apoštol Eucharistie", symbol: "🍞",
    quote: "Eucharistia je Ježiš Kristus – minulý, prítomný a budúci.", source: "Kázne",
    story: "Francúzsky kňaz, ktorý chcel, aby Ježiš v Eucharistii nebol nikdy sám. Založil kongregáciu Najsvätejšej sviatosti, ktorej členovia sa striedajú v poklone. Choď dnes na chvíľu do kostola – On tam čaká."
  },
  {
    name: "sv. Nikodém", img: "Brooklyn_Museum_-_Nicodemus_(Nicodème)_-_James_Tissot_-_overall.jpg", feast: "08-03", years: "1. storočie", title: "farizej, Ježišov učeník", symbol: "🌙",
    quote: "Ako sa môže človek narodiť, keď je starý?", source: "Jn 3, 4",
    story: "Vážený člen veľrady, ktorý prišiel za Ježišom v noci, lebo sa bál ostatných. Ježiš mu hovoril o novom narodení. Po ukrižovaní priniesol drahé myrhy a verejne pomohol pochovať Ježiša. Viera môže začať v noci a skončiť na svetle."
  },
  {
    name: "sv. Ján Mária Vianney", img: "São_João_Maria_Vianney.png", feast: "08-04", years: "1786 – 1859", title: "kňaz, farár z Arsu", symbol: "🕯️",
    quote: "Človek má krásnu povinnosť a úlohu: modliť sa a milovať.", source: "Katechézy",
    story: "Takmer ho nepripustili ku kňazstvu, lebo mal problémy s učením. Poslali ho do malej zabudnutej dediny, kam o pár rokov prichádzali tisíce ľudí. Boh nehľadá najschopnejších, ale najochotnejších."
  },
  {
    name: "Panna Mária Snežná", img: "Basilica_di_Santa_Maria_Maggiore_-_Roma.jpg", feast: "08-05", years: "", title: "výročie posviacky baziliky Santa Maria Maggiore", symbol: "❄️",
    quote: "Hľa, odteraz ma budú blahoslaviť všetky pokolenia.", source: "Lk 1, 48",
    story: "Podľa legendy v auguste roku 358 napadol v Ríme sneh a vyznačil miesto, kde má stáť chrám Panny Márie. Dnes tam stojí najstaršia mariánska bazilika na Západe. Aj u nás je veľa kostolov Panny Márie Snežnej. Boh má svoje znamenia."
  },
  {
    name: "Premenenie Pána", img: "Transfiguration_Raphael.jpg", feast: "08-06", years: "", title: "sviatok", symbol: "☀️",
    quote: "Toto je môj milovaný Syn, v ktorom mám zaľúbenie; počúvajte ho!", source: "Mt 17, 5",
    story: "Na hore Tábor sa Ježiš premenil pred Petrom, Jakubom a Jánom – jeho tvár zažiarila ako slnko. Chcel ich posilniť pred krížom. Aj ty potrebuješ chvíle svetla, aby si zvládol ťažké dni. Hľadaj ich v modlitbe."
  },
  {
    name: "sv. Kajetán", img: "Francesco_Solimena_-_Estasi_di_San_Gaetano_da_Thiene.jpg", feast: "08-07", years: "1480 – 1547", title: "kňaz, zakladateľ teatínov", symbol: "🙏",
    quote: "Nebuďte ustarostení o svoj život, čo budete jesť.", source: "Mt 6, 25",
    story: "Pápežský úradník, ktorý sa vzdal kariéry a založil rehoľu kňazov bez istého príjmu – mali sa spoliehať len na Božiu prozreteľnosť. Zakladal pôžičkové banky pre chudobných. Je patrónom tých, čo hľadajú prácu. Dôveruj, Boh sa postará."
  },
  {
    name: "sv. Dominik", img: "SaintDominic.jpg", feast: "08-08", years: "1170 – 1221", title: "kňaz, zakladateľ dominikánov", symbol: "🐕",
    quote: "Rozhovor s Bohom alebo o Bohu.", source: "Pravidlo, ktoré podľa tradície žil",
    story: "Španielsky kanonik, ktorý predal svoje drahé knihy, aby nakŕmil hladných. Založil rehoľu kazateľov, aby hlásali pravdu s vedomosťou aj pokorou. Hovorilo sa, že hovoril len s Bohom alebo o Bohu. Na čo myslíš a o čom hovoríš ty?"
  },
  {
    name: "sv. Terézia Benedikta od Kríža (Edita Steinová)", img: "Edith_Stein_(ca._1938-1939).jpg", feast: "08-09", years: "1891 – 1942", title: "panna a mučenica, patrónka Európy", symbol: "✡️",
    quote: "Kto hľadá pravdu, hľadá Boha, či už o tom vie, alebo nie.", source: "List",
    story: "Židovská filozofka a ateistka, ktorá v noci prečítala životopis sv. Terézie z Ávily a ráno povedala: „Toto je pravda.“ Stala sa katolíčkou a karmelitánkou. Nacisti ju zavraždili v Osvienčime. Úprimné hľadanie pravdy privádza k Bohu."
  },
  {
    name: "sv. Vavrinec", img: "Lawrence-before-Valerianus.jpg", feast: "08-10", years: "† 258", title: "diakon a mučeník", symbol: "🔥",
    quote: "Toto sú poklady Cirkvi.", source: "Odpoveď prefektovi podľa sv. Ambróza",
    story: "Rímsky diakon, ktorý mal na starosti majetok Cirkvi. Keď mu prefekt prikázal vydať poklady, priviedol chudobných, chorých a vdovy. Za to ho upálili na rošte. Pravé poklady nie sú v trezore, ale v ľuďoch."
  },
  {
    name: "sv. Klára z Assisi", img: "SDamiano-Clara.jpg", feast: "08-11", years: "1194 – 1253", title: "panna, zakladateľka klarisiek", symbol: "🌙",
    quote: "Choď bezpečne, pokojne a radostne, lebo máš dobrého sprievodcu na cestu.", source: "Posledné slová podľa Legendy",
    story: "V osemnástich v noci utiekla z bohatého domu, aby žila v chudobe s Františkom. Celý život strávila v malom kláštore, a predsa jej svetlo ďaleko presiahlo jeho múry. Pokoj nezávisí od toho, koľko máš."
  },
  {
    name: "sv. Jana Františka de Chantal", img: "Sainte_Jeanne-Françoise_Frémyot_de_Chantal.jpg", feast: "08-12", years: "1572 – 1641", title: "rehoľníčka, zakladateľka", symbol: "💜",
    quote: "Iba v Bohu spočiň, duša moja, lebo od neho mi prichádza nádej.", source: "Ž 62, 6",
    story: "Mladá vdova so štyrmi deťmi, ktorej manžela zastrelili na poľovačke. Pod vedením sv. Františka Saleského založila rehoľu vizitandiek pre ženy, ktoré boli pre prísne kláštory príliš slabé či staré. Boh má miesto pre každého."
  },
  {
    name: "sv. Poncián a Hypolit", img: "Spinello_Aretino_008.jpg", feast: "08-13", years: "† 235", title: "pápež a kňaz, mučeníci", symbol: "⛏️",
    quote: "Nech sú všetci jedno.", source: "Jn 17, 21",
    story: "Hypolit bol učený kňaz, ktorý sa postavil proti pápežovi a stal sa vzdoropápežom. Cisár poslal oboch, pápeža Ponciána aj Hypolita, na nútené práce do sardínskych baní. Tam sa zmierili a obaja zomreli ako mučeníci. Utrpenie vie zmieriť aj nepriateľov."
  },
  {
    name: "sv. Maximilián Kolbe", img: "Fr.Maximilian_Kolbe_in_1936.jpg", feast: "08-14", years: "1894 – 1941", title: "kňaz a mučeník", symbol: "❤️",
    quote: "Len láska tvorí.", source: "Posledné slová k spolubratom",
    story: "V Osvienčime sa dobrovoľne prihlásil na smrť namiesto otca rodiny, ktorého nepoznal. V bunkri hladu povzbudzoval ostatných spevom až do konca. Láska je silnejšia než najhoršie miesto na zemi."
  },
  {
    name: "Nanebovzatie Panny Márie", img: "Tizian_041.jpg", feast: "08-15", years: "", title: "slávnosť", symbol: "☁️",
    quote: "Na nebi sa ukázalo veľké znamenie: žena odetá slnkom.", source: "Zjv 12, 1",
    story: "Mária bola na konci pozemského života vzatá s telom i dušou do nebeskej slávy. Je prvou, na ktorej sa naplno uskutočnilo vzkriesenie, ktoré čaká aj nás. Tvoj cieľ nie je hrob, ale nebo."
  },
  {
    name: "sv. Štefan Uhorský", img: "Portrayal_of_Stephen_I,_King_of_Hungary_on_the_coronation_pall.jpg", feast: "08-16", years: "okolo 975 – 1038", title: "kráľ", symbol: "👑",
    quote: "Buď milosrdný ku všetkým, ktorí trpia násilím.", source: "Napomenutia synovi Imrichovi",
    story: "Prvý kresťanský kráľ Uhorska, v ktorom žili aj naši predkovia. Zakladal biskupstvá, aj v Nitre, a písal synovi Imrichovi rady, ako vládnuť s láskou a spravodlivosťou. Po smrti syna zveril krajinu Panne Márii. Vláda je služba."
  },
  {
    name: "sv. Hyacint", img: "Carracci_Saint_Hyacinth.jpg", feast: "08-17", years: "1185 – 1257", title: "kňaz, dominikán, apoštol severu", symbol: "🏺",
    quote: "Choďte do celého sveta a hlásajte evanjelium.", source: "Mk 16, 15",
    story: "Poľský kňaz, ktorý prijal habit priamo od sv. Dominika. Neúnavne zakladal kláštory od Krakova po Kyjev. Podľa legendy pri útoku Tatárov zachránil Eucharistiu aj ťažkú sochu Panny Márie, ktorá mu v rukách oľahla. Čo nesieš z lásky, neťaží."
  },
  {
    name: "sv. Helena", img: "Elena_Colosseo_Rome_Italy.jpg", feast: "08-18", years: "okolo 250 – 330", title: "cisárovná", symbol: "✝️",
    quote: "Nech sa nechválim ničím, iba krížom nášho Pána Ježiša Krista.", source: "Gal 6, 14",
    story: "Matka cisára Konštantína, ktorá sa stala kresťankou v pokročilom veku. Ako osemdesiatročná putovala do Svätej zeme, dala postaviť baziliky a podľa tradície našla Kristov kríž. Nikdy nie je neskoro začať s Bohom."
  },
  {
    name: "sv. Ján Eudes", img: "JeanEudes.png", feast: "08-19", years: "1601 – 1680", title: "kňaz, misionár", symbol: "💗",
    quote: "Oheň som prišiel vrhnúť na zem a ako veľmi si želám, aby už vzplanul!", source: "Lk 12, 49",
    story: "Francúzsky kňaz, ktorý počas moru žil v sude na poli, aby nenakazil spolubratov, a staral sa o chorých. Založil semináre a šíril úctu k Srdcu Ježišovmu a Máriinmu. Láska nachádza cestu aj v karanténe."
  },
  {
    name: "sv. Bernard z Clairvaux", img: "San_Bernardo,_de_Juan_Correa_de_Vivar_(Museo_del_Prado).jpg", feast: "08-20", years: "1090 – 1153", title: "opát a učiteľ Cirkvi", symbol: "🌿",
    quote: "Mierou lásky k Bohu je milovať bez miery.", source: "O láske k Bohu",
    story: "Do kláštora neprišiel sám – priviedol so sebou tridsať príbuzných a priateľov. Jeho nadšenie bolo nákazlivé. Keď horíš ty, zapáliš aj iných."
  },
  {
    name: "sv. Pius X.", img: "Pius_X,_by_Ernest_Walter_Histed_(retouched).jpg", feast: "08-21", years: "1835 – 1914", title: "pápež", symbol: "🍞",
    quote: "Obnoviť všetko v Kristovi.", source: "Heslo pontifikátu (Ef 1, 10)",
    story: "Syn chudobného poštára z Riese, ktorý zostal jednoduchý aj ako pápež. Umožnil deťom prijímať Eucharistiu už od siedmich rokov a vyzýval k častému svätému prijímaniu. Zomrel zlomený začiatkom vojny. Ježiš chce byť blízko najmenších."
  },
  {
    name: "Panna Mária Kráľovná", img: "Diego_Velázquez_-_Coronation_of_the_Virgin_-_Prado.jpg", feast: "08-22", years: "", title: "spomienka", symbol: "👑",
    quote: "Hľa, služobnica Pánova.", source: "Lk 1, 38",
    story: "Týždeň po Nanebovzatí oslavujeme Máriu ako Kráľovnú neba a zeme. Jej kráľovstvo nie je moc, ale služba: stala sa kráľovnou preto, že sa nazvala služobnicou. Kto slúži, kraľuje s Kristom."
  },
  {
    name: "sv. Ruža Limská", img: "Sta_Rosa_de_Lima_por_Claudio_Coello.jpg", feast: "08-23", years: "1586 – 1617", title: "panna, patrónka Ameriky", symbol: "🌹",
    quote: "Mimo kríža niet inej cesty do neba.", source: "Výroky",
    story: "Prvá svätá Nového sveta. Pre krásu ju nazývali Ruža, no odmietla všetkých nápadníkov. Pracovala, aby uživila chudobnú rodinu, a v dome zriadila izbu pre chorých a opustených. Krása duše prevyšuje krásu tváre."
  },
  {
    name: "sv. Bartolomej", img: "Rubens_apostel_bartolomeus_grt.jpg", feast: "08-24", years: "1. storočie", title: "apoštol", symbol: "🔪",
    quote: "Hľa, pravý Izraelita, v ktorom niet falošnosti.", source: "Jn 1, 47",
    story: "Pravdepodobne je to Natanael, ktorý najprv pochyboval: „Môže byť z Nazareta niečo dobré?“ Ježiš ho však poznal už pod figovníkom a Natanael uveril. Podľa tradície zomrel mučeníckou smrťou v Arménsku. Úprimnosť otvára cestu k viere."
  },
  {
    name: "sv. Ľudovít IX.", img: "Saintlouis_(cropped).jpg", feast: "08-25", years: "1214 – 1270", title: "kráľ Francúzska", symbol: "⚜️",
    quote: "Radšej zomrieť, než by som ťažko zhrešil.", source: "Napomenutia synovi",
    story: "Francúzsky kráľ, ktorý každý deň nakŕmil chudobných pri svojom stole a sám im umýval nohy. Vládol spravodlivo, staval nemocnice a pre tŕňovú korunu Pána dal postaviť kaplnku Sainte-Chapelle. Koruna je najkrajšia na hlave služobníka."
  },
  {
    name: "sv. Mária od Ukrižovaného Ježiša (Baouardy)", img: "Mirjam_Abbelin_4.jpg", feast: "08-26", years: "1846 – 1878", title: "karmelitánka", symbol: "🕊️",
    quote: "Duchu Svätý, osvieť ma. Kde mám nájsť Ježiša?", source: "Modlitba k Duchu Svätému",
    story: "Chudobná Arabka z Galiley, sirota a slúžka, ktorú za vieru podrezal moslimský pán; prežila. Ako karmelitánka založila kláštor v Betleheme. Nazývali ju „malá Arabka“. Jej modlitba k Duchu Svätému je jednoduchá a mocná."
  },
  {
    name: "sv. Monika", img: "Monica_of_Hippo_by_Gozzoli.jpg", feast: "08-27", years: "331 – 387", title: "matka sv. Augustína", symbol: "😢",
    quote: "Syn toľkých sĺz nemôže zahynúť.", source: "Slová biskupa k Monike, Vyznania III, 12",
    story: "Sedemnásť rokov sa modlila a plakala za obrátenie syna Augustína. Nasledovala ho až do Milána. Nakoniec sa dočkala jeho krstu a krátko nato zomrela pokojná. Je patrónkou matiek. Modlitba za blízkych nikdy nie je zbytočná."
  },
  {
    name: "sv. Augustín", img: "Saint_Augustine_by_Philippe_de_Champaigne.jpg", feast: "08-28", years: "354 – 430", title: "biskup a učiteľ Cirkvi", symbol: "💛",
    quote: "Stvoril si nás pre seba, Pane, a nepokojné je naše srdce, kým nespočinie v tebe.", source: "Vyznania I, 1",
    story: "Roky hľadal šťastie v úspechu, rozkoši aj filozofii, kým jeho matka Monika neúnavne prosila za jeho obrátenie. Nikdy nie je neskoro začať odznova. Nepokoj v srdci môže byť kompas, ktorý ťa privedie domov."
  },
  {
    name: "Umučenie sv. Jána Krstiteľa", img: "Salome_with_the_Head_of_John_the_Baptist-Caravaggio_(1610).jpg", feast: "08-29", years: "† okolo 29", title: "spomienka", symbol: "⚔️",
    quote: "Nesmieš mať ženu svojho brata.", source: "Mk 6, 18",
    story: "Ján Krstiteľ povedal kráľovi Herodesovi pravdu o jeho hriechu. Za to ho uväznili a na hostine na želanie tanečnice sťali. Zomrel ako svedok pravdy. Pravda sa nedá umlčať – ani zatvorením do väzenia."
  },
  {
    name: "sv. Jana Jugan", img: "Jeanne_Jugan_par_Léon_Brune_1855.jpg", feast: "08-30", years: "1792 – 1879", title: "rehoľníčka, zakladateľka", symbol: "👵",
    quote: "Byť malý – to je náš poklad.", source: "Výroky",
    story: "Jedného zimného večera priniesla do svojej izby slepú starenku a dala jej vlastnú posteľ. Tak vznikli Malé sestry chudobných. Neskôr ju vytlačili z vedenia a 27 rokov žila v ústraní. Najväčšie dielo robí Boh cez skrytých."
  },
  {
    name: "sv. Jozef z Arimatey", img: "Brooklyn_Museum_-_Joseph_of_Arimathaea_(Joseph_d'Arimathie)_-_James_Tissot.jpg", feast: "08-31", years: "1. storočie", title: "Ježišov učeník", symbol: "⚰️",
    quote: "Jozef z Arimatey… sa osmelil, vošiel k Pilátovi a vyprosil si Ježišovo telo.", source: "Mk 15, 43",
    story: "Bohatý člen veľrady, ktorý bol tajným Ježišovým učeníkom. Keď všetci utiekli, odvážne šiel k Pilátovi a pochoval Ježiša vo vlastnom novom hrobe. Odvaha sa niekedy ukáže až v najťažšej chvíli."
  },
  {
    name: "sv. Egídius", img: "Saint_Giles_closeup.jpg", feast: "09-01", years: "† okolo 710", title: "opát", symbol: "🦌",
    quote: "Blahoslavení milosrdní, lebo oni dosiahnu milosrdenstvo.", source: "Mt 5, 7",
    story: "Pustovník z Provensalska, ktorého podľa legendy živila laň. Pri kráľovskom love zasiahol šíp, ktorý mal zabiť laň, jeho samého. Stal sa patrónom mrzákov a chudobných. Aj na Slovensku ho uctievali – Bardejov má baziliku sv. Egídia."
  },
  {
    name: "sv. Salomon Leclercq", img: "Salomon_Leclercq_(cropped).JPG", feast: "09-02", years: "1745 – 1792", title: "rehoľník a mučeník", symbol: "✉️",
    quote: "Dobrý boj som bojoval, beh som dokončil, vieru som zachoval.", source: "2 Tim 4, 7",
    story: "Brat kresťanských škôl a učiteľ, ktorý počas Francúzskej revolúcie odmietol zložiť prísahu proti Cirkvi. Zabili ho so stovkami kňazov v karmelitánskom kláštore v Paríži. Jeho listy rodine sú plné pokoja. Stal sa prvým svätorečeným z bratov de la Salle."
  },
  {
    name: "sv. Gregor Veľký", img: "Gregory_the_Great_with_the_Holy_Spirit.jpg", feast: "09-03", years: "okolo 540 – 604", title: "pápež a učiteľ Cirkvi", symbol: "🎶",
    quote: "Služobník Božích služobníkov.", source: "Titul, ktorý si dal ako pápež",
    story: "Prefekt Ríma, ktorý sa vzdal kariéry a stal sa mníchom. Proti svojej vôli bol zvolený za pápeža a nazval sa „služobníkom Božích služobníkov“. Poslal misionárov do Anglicka, staral sa o hladných a zveľadil bohoslužbu – podľa neho je pomenovaný gregoriánsky chorál."
  },
  {
    name: "sv. Rozália", img: "Anthonis_van_Dyck_084.jpg", feast: "09-04", years: "1130 – 1166", title: "panna, pustovníčka", symbol: "🌹",
    quote: "Moja duša prahne po Bohu, po živom Bohu.", source: "Ž 42, 3",
    story: "Palermská šľachtičná, ktorá sa vzdala života na dvore a žila ako pustovníčka v jaskyni na hore Pellegrino. V roku 1624 počas moru ukázala miesto svojich pozostatkov; po ich procesii mor ustúpil. Je patrónkou Palerma."
  },
  {
    name: "sv. Matka Terézia z Kalkaty", img: "Mother_Teresa_1.jpg", feast: "09-05", years: "1910 – 1997", title: "rehoľníčka, misionárka lásky", symbol: "🤲",
    quote: "Nie všetci môžeme robiť veľké veci. Ale môžeme robiť malé veci s veľkou láskou.", source: "Rozhovory",
    story: "Opustila istotu kláštora, aby v uliciach Kalkaty zdvíhala umierajúcich. Desaťročia prežívala vnútornú tmu, a predsa neprestala slúžiť. Láska nie je pocit, ale rozhodnutie urobené dnes."
  },
  {
    name: "sv. Magnus z Füssenu", img: "Heiliger_Magnus_Fuessen.jpg", feast: "09-06", years: "† okolo 750", title: "opát, misionár", symbol: "🐻",
    quote: "Choďte do celého sveta a hlásajte evanjelium.", source: "Mk 16, 15",
    story: "Mních zo Sankt Gallenu, ktorý ohlasoval evanjelium v Allgäu a založil kláštor vo Füssene. Podľa legendy krotil divú zver a draky. Je patrónom proti škodcom a búrkam. Kto nesie evanjelium, prináša poriadok aj do divočiny."
  },
  {
    name: "sv. Košickí mučeníci", img: "Sveti_Marko_Križevčanin.JPG", feast: "09-07", years: "† 1619", title: "kňazi a mučeníci", symbol: "⛓️",
    quote: "Každého, kto ma vyzná pred ľuďmi, aj ja vyznám pred svojím Otcom.", source: "Mt 10, 32",
    story: "Traja kňazi – Marek Križin, Melichar Grodziecki a Štefan Pongrác – ktorých v Košiciach počas vojny mučili vojaci. Ponúkli im slobodu za zapretie viery, no odmietli. Sú prvými svätými mučeníkmi zo Slovenska. Vernosť Kristovi má na Slovensku hlboké korene."
  },
  {
    name: "Narodenie Panny Márie", img: "Giotto_-_Scrovegni_-_-07-_-_The_Birth_of_the_Virgin.jpg", feast: "09-08", years: "", title: "sviatok", symbol: "👶",
    quote: "Tvoje narodenie, Bohorodička Panna, zvestovalo radosť celému svetu.", source: "Antifóna z liturgie",
    story: "Deväť mesiacov po Nepoškvrnenom počatí slávime narodenie Márie. Keď prišla na svet, začalo sa svitať pred príchodom Slnka – Krista. Každý nový život je Božím plánom; aj ten tvoj."
  },
  {
    name: "sv. Peter Claver", img: "StPeterClaver.jpg", feast: "09-09", years: "1580 – 1654", title: "kňaz, apoštol otrokov", symbol: "⛓️",
    quote: "Musíme k nim hovoriť rukami skôr, ako k nim prehovoríme perami.", source: "podľa životopisu",
    story: "Španielsky jezuita, ktorý v Cartagene štyridsať rokov čakal na lode s africkými otrokmi. Prinášal im vodu, jedlo a lieky a sám sa podpísal ako „otrok otrokov navždy“. Pokrstil vraj 300 000 ľudí. Láska vidí v každom človeku Božie dieťa."
  },
  {
    name: "sv. Mikuláš Tolentínsky", img: "Ritratto_di_San_Nicola_da_Tolentino.jpg", feast: "09-10", years: "1245 – 1305", title: "kňaz, augustinián", symbol: "🍞",
    quote: "Poďte ku mne všetci, ktorí sa namáhate.", source: "Mt 11, 28",
    story: "Augustiniánsky kňaz, ktorý celé dni spovedal, navštevoval chorých a väzňov a modlil sa za duše v očistci. Rozdával chudobným požehnaný chlebík, ktorý nesie jeho meno. Tichá služba dokáže uzdravovať telo aj dušu."
  },
  {
    name: "sv. Ján Gabriel Perboyre", img: "Statue_perboyre.jpg", feast: "09-11", years: "1802 – 1840", title: "kňaz, misionár a mučeník", symbol: "✝️",
    quote: "Ó, môj božský Spasiteľ, premeň ma na seba.", source: "Modlitba",
    story: "Francúzsky lazarista, ktorý dlho túžil po misiách v Číne. Tam ho počas prenasledovania zradil jeden z katechumenov za peniaze. Po roku mučenia ho uškrtili na kríži. Jeho život pripomínal Kristov – až po kríž."
  },
  {
    name: "Najsvätejšie meno Panny Márie", img: "Madonna_Michelangelo_Bruges_-_JPG1.jpg", feast: "09-12", years: "", title: "ľubovoľná spomienka", symbol: "💙",
    quote: "A panna sa volala Mária.", source: "Lk 1, 27",
    story: "Meno Mária vyslovujú milióny ľudí v modlitbe. Sviatok sa rozšíril po víťazstve pri Viedni v roku 1683, keď kresťanské vojská zverili bitku Márii. Keď nevieš, ako sa modliť, vyslov jej meno – ona ti pomôže."
  },
  {
    name: "sv. Ján Zlatoústy", img: "Johnchrysostom.jpg", feast: "09-13", years: "okolo 347 – 407", title: "biskup a učiteľ Cirkvi", symbol: "👄",
    quote: "Chceš uctiť Kristovo telo? Neprehliadaj ho, keď je nahé.", source: "Homília na Matúša 50",
    story: "Najväčší kazateľ antiky, ktorého pre výrečnosť nazvali „Zlatoústy“. Ako patriarcha Konštantínopolu kritizoval prepych cisárskeho dvora a cisárovná ho poslala do vyhnanstva, kde zomrel. Jeho posledné slová: „Sláva Bohu za všetko.“"
  },
  {
    name: "Povýšenie svätého Kríža", img: "Feast_of_the_Cross.jpg", feast: "09-14", years: "", title: "sviatok", symbol: "✝️",
    quote: "Tak Boh miloval svet, že dal svojho jednorodeného Syna.", source: "Jn 3, 16",
    story: "Kríž bol nástrojom najpotupnejšej smrti, no Kristus z neho urobil znamenie lásky a víťazstva. Dnes si ho uctievame s vďačnosťou. Kríž v tvojom živote nie je koniec – môže byť bránou k novému životu."
  },
  {
    name: "Sedembolestná Panna Mária", img: "Salamanca_-_Iglesia_de_la_Vera_Cruz_12.jpg", feast: "09-15", years: "", title: "slávnosť, patrónka Slovenska", symbol: "💔",
    quote: "Pri Ježišovom kríži stála jeho matka.", source: "Jn 19, 25",
    story: "Mária stála pod krížom a trpela so Synom. Slováci si ju vybrali za patrónku; jej svätyňa v Šaštíne je národnou bazilikou. Ona rozumie každej bolesti. Zver jej dnes svoje trápenia aj trápenia našej krajiny."
  },
  {
    name: "sv. Kornel a Cyprián", img: "Pope_Cornelius_–_Santa_Maria_in_Trastevere.jpg", feast: "09-16", years: "† 253 / 258", title: "pápež a biskup, mučeníci", symbol: "🤝",
    quote: "Nemôže mať Boha za Otca, kto nemá Cirkev za matku.", source: "sv. Cyprián, O jednote Cirkvi 6",
    story: "Pápež Kornel v Ríme a biskup Cyprián v Kartágu spolu bránili milosrdenstvo voči tým, čo počas prenasledovania zapreli vieru a chceli sa vrátiť. Obaja zomreli ako mučeníci. Milosrdenstvo a pravda idú spolu."
  },
  {
    name: "sv. Hildegarda z Bingenu", img: "Hildegard_von_Bingen.jpg", feast: "09-17", years: "1098 – 1179", title: "abatiša a učiteľka Cirkvi", symbol: "🌿",
    quote: "Všetko, čo dýcha, nech chváli Pána!", source: "Ž 150, 6",
    story: "Nemecká abatiša, mystička, skladateľka, liečiteľka a spisovateľka. Písala pápežom aj cisárom a nebála sa ich napomenúť. Jej hudbu počúvajú ľudia dodnes. Benedikt XVI. ju vyhlásil za učiteľku Cirkvi. Boh obdarúva štedro – rozvíjaj svoje dary."
  },
  {
    name: "sv. Jozef Kupertínsky", img: "A_Miracle_of_Saint_Joseph_of_Cupertino_(1603–1663)_MET_DP-12357-001_(cropped).jpg", feast: "09-18", years: "1603 – 1663", title: "kňaz, františkán", symbol: "🎈",
    quote: "Hľadajte to, čo je hore, kde je Kristus.", source: "Kol 3, 1",
    story: "Nešikovný chlapec, ktorého vyhodili z kláštora pre neschopnosť. Nakoniec ho prijali ako sluhu a kňazom sa stal len so šťastím pri skúške. Pri modlitbe upadal do extáz a podľa svedkov sa vznášal. Je patrónom študentov pred skúškou. Boh si vyberá nešikovných."
  },
  {
    name: "sv. Január", img: "Saint_Januarius.jpg", feast: "09-19", years: "† okolo 305", title: "biskup a mučeník", symbol: "🩸",
    quote: "Buď verný až do smrti.", source: "Zjv 2, 10",
    story: "Biskup z Beneventa, sťatý počas prenasledovania. V Neapole sa dodnes niekoľkokrát do roka jeho zaschnutá krv v ampulke skvapalňuje. Neapolčania ho milujú ako otca. Mučeníci aj po stáročiach hovoria o živej viere."
  },
  {
    name: "sv. Ondrej Kim Tae-gon a spoločníci", img: "Andrew_Kim_Tae-gŏn.jpg", feast: "09-20", years: "1821 – 1846", title: "kňaz a mučeníci v Kórei", symbol: "🕊️",
    quote: "Utrpenia tohto času nemožno porovnávať s budúcou slávou, ktorá sa má na nás zjaviť.", source: "Rim 8, 18",
    story: "Kresťanstvo do Kórey priniesli laici, ktorí čítali knihy o viere. Ondrej bol prvým kórejským kňazom; umučili ho ako 25-ročného. S ním si pripomíname 103 kórejských mučeníkov. Viera môže prísť aj cez knihu – a prežiť prenasledovanie."
  },
  {
    name: "sv. Matúš", img: "Codexaureus_17.jpg", feast: "09-21", years: "1. storočie", title: "apoštol a evanjelista", symbol: "💰",
    quote: "Nasleduj ma! – A on vstal a nasledoval ho.", source: "Mt 9, 9",
    story: "Colník, ktorého ľudia opovrhovali ako zradcu. Ježiš sa zastavil pri jeho stole a povedal: „Nasleduj ma.“ Matúš nechal všetko a neskôr napísal evanjelium. Ježiš vidí v každom viac, než vidia ostatní."
  },
  {
    name: "sv. Maurícius a spoločníci", img: "StMaurice2.jpg", feast: "09-22", years: "† okolo 287", title: "mučeníci", symbol: "🛡️",
    quote: "Sme tvoji vojaci, cisár, ale predovšetkým sme služobníci Boha.", source: "Umučenie tébskych mučeníkov (Eucherius)",
    story: "Veliteľ légie z Egypta, ktorý odmietol so svojimi vojakmi zabíjať nevinných kresťanov. Cisár dal preto popraviť celú légiu. Je patrónom vojakov. Poslušnosť má hranicu tam, kde začína Boží zákon."
  },
  {
    name: "sv. Páter Pio", img: "Padre_Pio_portraitFXD.jpg", feast: "09-23", years: "1887 – 1968", title: "kňaz, kapucín", symbol: "🙏",
    quote: "Modli sa, dúfaj a nemaj starosti.", source: "Listy",
    story: "Päťdesiat rokov nosil rany Kristovho utrpenia a celé dni spovedal zástupy ľudí. Hoci ho vyšetrovali a obmedzovali, zostal poslušný a pokojný. Starosti zlož do modlitby a choď ďalej."
  },
  {
    name: "sv. Gerard", img: "San_Rocco_(Venice)_-_Statue_of_Saint_Gerard_of_Csanád.jpg", feast: "09-24", years: "okolo 980 – 1046", title: "biskup a mučeník", symbol: "⛪",
    quote: "Choďte do celého sveta a hlásajte evanjelium.", source: "Mk 16, 15",
    story: "Benátsky mních, ktorý sa cestou do Svätej zeme zastavil v Uhorsku. Kráľ Štefan mu zveril výchovu syna Imricha a neskôr ho urobil biskupom v Csanáde. Počas pohanskej vzbury ho zhodili z vrchu v Budíne do Dunaja. Viera nás spája v strednej Európe."
  },
  {
    name: "sv. Kleofáš", img: "Michelangelo_Caravaggio_016.jpg", feast: "09-25", years: "1. storočie", title: "Ježišov učeník", symbol: "🚶",
    quote: "Či nám nehorelo srdce, keď sa s nami cestou zhováral?", source: "Lk 24, 32",
    story: "Jeden z dvoch učeníkov, ktorí smutní odchádzali z Jeruzalema do Emauz. Pripojil sa k nim neznámy pútnik a vysvetľoval im Písmo; spoznali ho pri lámaní chleba. Aj na tvojej ceste kráča Ježiš, aj keď ho práve nespoznávaš."
  },
  {
    name: "sv. Kozma a Damián", img: "Saint_Côme_&_Saint_Damien_Grandes_Heures_Anne_de_Bretagne_XVIe_(cropped).jpg", feast: "09-26", years: "† okolo 287", title: "lekári a mučeníci", symbol: "⚕️",
    quote: "Zadarmo ste dostali, zadarmo dávajte.", source: "Mt 10, 8",
    story: "Dvojčatá z Arábie, lekári, ktorí liečili chorých bez nároku na odmenu. Na Východe ich volajú „nežoldnieri“. Za vieru boli sťatí. Sú patrónmi lekárov a lekárnikov. Pomodli sa dnes za tých, čo sa starajú o chorých."
  },
  {
    name: "sv. Vincent de Paul", img: "Simon_François_de_Tours_-_Portrait_Vincent_de_Paul_(4x5_cropped).jpeg", feast: "09-27", years: "1581 – 1660", title: "kňaz, otec chudobných", symbol: "🍲",
    quote: "Láska je nekonečne vynaliezavá.", source: "Konferencie",
    story: "Ako mladý kňaz túžil hlavne po pohodlnom živote. Stretnutie s biedou ho zmenilo a založil diela, ktoré dodnes sýtia hladných po celom svete. Keď chceš pomôcť, vždy nájdeš spôsob."
  },
  {
    name: "sv. Václav", img: "Wolfenbüttelský_kodex_–_Gumpoldova_legenda_–_18v_cr.jpg", feast: "09-28", years: "okolo 907 – 935", title: "knieža a mučeník", symbol: "🛡️",
    quote: "Nech ti Boh odpustí, brat môj.", source: "Legenda – posledné slová",
    story: "České knieža, ktoré vládlo spravodlivo, staralo sa o chudobných a vlastnými rukami pripravovalo chlieb a víno na omšu. Zavraždil ho vlastný brat Boleslav pri dverách kostola. Je patrónom Čiech. Vernosť Bohu je dôležitejšia než moc."
  },
  {
    name: "sv. Michal, Gabriel a Rafael", img: "GuidoReni_MichaelDefeatsSatan.jpg", feast: "09-29", years: "", title: "archanjeli", symbol: "🗡️",
    quote: "Kto je ako Boh?", source: "Význam mena Michal",
    story: "Michal bojuje proti zlu, Gabriel priniesol Márii zvesť o Ježišovi a Rafael sprevádzal mladého Tobiáša a uzdravil jeho otca. Boh posiela svojich poslov, aby nás chránili, prinášali mu posolstvá a sprevádzali nás na cestách."
  },
  {
    name: "sv. Hieronym", img: "MatthiasStom-SaintJerome-Nantes.jpg", feast: "09-30", years: "okolo 347 – 420", title: "kňaz a učiteľ Cirkvi", symbol: "🦁",
    quote: "Neznalosť Písma je neznalosťou Krista.", source: "Komentár k Izaiášovi, Prológ",
    story: "Mal prudkú povahu a ostrý jazyk, no svoj oheň vložil do diela: preložil celú Bibliu do latinčiny. Aj tvoja náročná povaha môže slúžiť dobru, keď ju nasmeruješ."
  },
  {
    name: "sv. Terézia z Lisieux", img: "Teresa-de-Lisieux.jpg", feast: "10-01", years: "1873 – 1897", title: "panna a učiteľka Cirkvi", symbol: "🌹",
    quote: "Mojím povolaním je láska!", source: "Dejiny duše",
    story: "Zomrela ako 24-ročná v malom kláštore a svet o nej nevedel. Jej „malá cesta“ – robiť obyčajné veci s veľkou láskou – dnes inšpiruje milióny. Nemusíš byť veľký, aby si bol svätý."
  },
  {
    name: "Svätí anjeli strážcovia", img: "Bernhard_Plockhorst_-_Schutzengel.jpg", feast: "10-02", years: "", title: "spomienka", symbol: "👼",
    quote: "Svojim anjelom dal o tebe príkaz, aby ťa strážili na všetkých tvojich cestách.", source: "Ž 91, 11",
    story: "Každý človek má od Boha anjela, ktorý ho sprevádza od narodenia až po smrť. Ježiš povedal, že anjeli maličkých ustavične hľadia na tvár Otca. Nie si nikdy sám; poďakuj dnes svojmu anjelovi."
  },
  {
    name: "sv. František Borgia", img: "San_Francisco_de_Borja.jpg", feast: "10-03", years: "1510 – 1572", title: "kňaz, jezuita", symbol: "💀",
    quote: "Už nikdy nebudem slúžiť pánovi, ktorý môže zomrieť.", source: "Slová pri rakve cisárovnej Izabely",
    story: "Vojvoda z Gandie a priateľ cisára Karola V. Keď sprevádzal telo krásnej cisárovnej Izabely a uvidel jej rozkladajúcu sa tvár, rozhodol sa slúžiť len Bohu. Po smrti manželky vstúpil k jezuitom a stal sa ich generálom. Čo je večné, je dôležitejšie."
  },
  {
    name: "sv. František z Assisi", img: "Philip_Fruytiers_-_St._Francis_of_Assisi.jpg", feast: "10-04", years: "1181 – 1226", title: "diakon, zakladateľ františkánov", symbol: "🐦",
    quote: "Pochválený buď, môj Pane, so všetkými svojimi tvormi, zvlášť s pánom bratom Slnkom.", source: "Pieseň brata Slnka",
    story: "Syn bohatého obchodníka odhodil pred celým mestom aj svoje šaty, aby bol slobodný pre Boha. Videl brata v každom človeku aj v každom tvorovi. Radosť rastie, keď sa niečoho vzdáš."
  },
  {
    name: "sv. Faustína Kowalská", img: "Maria_Faustyna_Kowalska.jpg", feast: "10-05", years: "1905 – 1938", title: "panna, apoštolka Božieho milosrdenstva", symbol: "🌈",
    quote: "Ježišu, dôverujem ti.", source: "Denníček",
    story: "Jednoduchá rehoľníčka, ktorá v kláštore piekla chlieb a strážila bránu. Práve jej Boh zveril posolstvo o milosrdenstve pre celý svet. Nie je hriech, ktorý by bol väčší než Božia láska."
  },
  {
    name: "sv. Bruno", img: "Girolamo_Marchesi_-_Saint_Bruno_-_Walters_37423.jpg", feast: "10-06", years: "okolo 1030 – 1101", title: "kňaz, zakladateľ kartuziánov", symbol: "🤫",
    quote: "Buďte ticho a poznajte, že ja som Boh.", source: "Ž 46, 11",
    story: "Uznávaný profesor v Remeši, ktorý opustil slávu a so šiestimi druhmi odišiel do divokých hôr Chartreuse. Tam založil kartuziánov, ktorí žijú v tichu a samote dodnes. Aj pápež si ho zavolal za radcu. Ticho je rečou Boha."
  },
  {
    name: "Ružencová Panna Mária", img: "2017-03_Brescia_Mattes_Pana_(111).JPG", feast: "10-07", years: "", title: "spomienka", symbol: "📿",
    quote: "Zdravas, milosti plná, Pán s tebou.", source: "Lk 1, 28",
    story: "Sviatok zaviedol pápež Pius V. po víťazstve kresťanov pri Lepante v roku 1571, keď celá Európa prosila o pomoc modlitbou ruženca. Ruženec je jednoduchá modlitba, pri ktorej s Máriou rozjímame o Ježišovom živote. Skús dnes aspoň jeden desiatok."
  },
  {
    name: "sv. Simeon", img: "Yegorov-Simeon_the_Righteous.jpg", feast: "10-08", years: "1. storočie", title: "spravodlivý starec", symbol: "🕯️",
    quote: "Teraz prepúšťaš, Pane, svojho služobníka v pokoji podľa svojho slova.", source: "Lk 2, 29",
    story: "Starec v Jeruzaleme, ktorému Duch Svätý sľúbil, že neumrie, kým neuvidí Mesiáša. Celý život čakal. Keď do chrámu priniesli malé dieťa, spoznal v ňom Spasiteľa a mohol pokojne zomrieť. Vytrvalé čakanie na Boha sa splní."
  },
  {
    name: "sv. Ján Henry Newman", img: "John_Henry_Newman_1887_Portrait_Photograph_(3x4_cropped).jpg", feast: "10-09", years: "1801 – 1890", title: "kardinál, učiteľ Cirkvi", symbol: "🏮",
    quote: "Veď ma, láskavé svetlo, uprostred okolitej tmy – veď ma ďalej.", source: "Lead, Kindly Light",
    story: "Anglikánsky kňaz a oxfordský profesor, ktorý pri štúdiu cirkevných otcov prišiel ku katolíckej viere. Stratil priateľov aj postavenie, no nasledoval svedomie. Neskôr sa stal kardinálom a učiteľom Cirkvi. Svedomie je Kristovým hlasom v nás."
  },
  {
    name: "sv. Daniel Comboni", img: "Daniele_Comboni.jpg", feast: "10-10", years: "1831 – 1881", title: "biskup, misionár Afriky", symbol: "🌍",
    quote: "Afrika alebo smrť!", source: "Heslo sv. Daniela",
    story: "Taliansky kňaz, ktorý zasvätil život Afrike. Mal plán „zachrániť Afriku Afričanmi“ – vychovávať miestnych kňazov, učiteľov a lekárov. Založil misijné rehole a bojoval proti otroctvu. Zomrel v Chartúme vyčerpaný službou. Láska má odvážne plány."
  },
  {
    name: "sv. Ján XXIII.", img: "Ioannes_XXIII,_by_De_Agostini,_1958–1963.jpg", feast: "10-11", years: "1881 – 1963", title: "pápež", symbol: "😊",
    quote: "Keď sa vrátite domov, pohlaďte svoje deti a povedzte im: toto je pohladenie od pápeža.", source: "Príhovor pri mesačnom svite, 11. 10. 1962",
    story: "Syn chudobných roľníkov, ktorého po 77 rokoch zvolili za „prechodného“ pápeža. Prekvapil celý svet a zvolal Druhý vatikánsky koncil. Jeho dobrota a humor mu získali srdcia. Nikdy nie je neskoro urobiť niečo veľké."
  },
  {
    name: "sv. Carlo Acutis", img: "Covent_Garden,_Corpus_Christi_Catholic_Church,_Carlo_Acutis_memorial.jpg", feast: "10-12", years: "1991 – 2006", title: "laik, patrón internetu", symbol: "💻",
    quote: "Všetci sa rodia ako originály, ale mnohí umierajú ako fotokópie.", source: "Zápisky",
    story: "Obyčajný tínedžer, ktorý hral videohry, programoval a mal rád futbal. Každý deň chodil na omšu a svoj talent použil na web o eucharistických zázrakoch. Svätosť sa dá žiť aj v teniskách."
  },
  {
    name: "sv. Eduard Vyznávač", img: "Bayeux_Tapestry_scene1_EDWARD_REX.jpg", feast: "10-13", years: "1003 – 1066", title: "kráľ Anglicka", symbol: "👑",
    quote: "Spravodlivosť a právo sú základom tvojho trónu.", source: "Ž 89, 15",
    story: "Anglický kráľ, ktorý vládol v pokoji a bol známy štedrosťou k chudobným. Dal postaviť Westminsterské opátstvo, kde je pochovaný. Pápežovi sľúbil púť do Ríma, no namiesto nej postavil chrám. Vláda sa dá spojiť so svätosťou."
  },
  {
    name: "sv. Kalixt I.", img: "Fresco_of_Pope_Callixtus_I_-_Basilica_of_Saint_Paul_Outside_the_Walls_(Before_1823).jpg", feast: "10-14", years: "† 222", title: "pápež a mučeník", symbol: "🗝️",
    quote: "Nie zdraví potrebujú lekára, ale chorí.", source: "Mk 2, 17",
    story: "Bývalý otrok, ktorý pre nešťastné finančné obchody skončil v sardínskych baniach. Po prepustení sa stal diakonom, správcom katakomb a napokon pápežom. Presadzoval milosrdenstvo k hriešnikom. Minulosť nezavrie cestu k službe."
  },
  {
    name: "sv. Terézia z Avily", img: "Santa_Teresa_de_Jesús_(Museo_del_Prado).jpg", feast: "10-15", years: "1515 – 1582", title: "panna a učiteľka Cirkvi", symbol: "🏰",
    quote: "Nech ťa nič neznepokojuje, nech ťa nič nestraší, všetko sa míňa, Boh sa nemení. Kto má Boha, tomu nič nechýba. Boh sám stačí.", source: "Záložka breviára",
    story: "Dlhé roky žila vlažne, kým ju v štyridsiatke nezasiahol pohľad na trpiaceho Krista. Potom precestovala Španielsko a zakladala kláštory napriek chorobe a odporu. Nikdy nie je neskoro na nový začiatok."
  },
  {
    name: "sv. Hedviga Sliezska", img: "Hedwig_von_Schlesien.jpg", feast: "10-16", years: "1174 – 1243", title: "kňažná, rehoľníčka", symbol: "👞",
    quote: "Blahoslavení milosrdní, lebo oni dosiahnu milosrdenstvo.", source: "Mt 5, 7",
    story: "Bavorská šľachtičná, manželka sliezskeho kniežaťa a matka siedmich detí. Zakladala nemocnice a kláštory a podľa legendy chodila bosá aj v zime, aby sa podobala chudobným; topánky nosila v ruke. Po smrti manžela žila v kláštore."
  },
  {
    name: "sv. Ignác Antiochijský", img: "Hosios_Loukas_(south_west_chapel,_south_side)_-_Ignatios.jpg", feast: "10-17", years: "† okolo 107", title: "biskup a mučeník", symbol: "🦁",
    quote: "Som Božie zrno a mám byť zomletý zubami šeliem, aby som sa stal čistým Kristovým chlebom.", source: "List Rimanom 4",
    story: "Biskup Antiochie, ktorého odviedli do Ríma, aby ho predhodili šelmám. Cestou písal cirkvám listy plné lásky a prosil ich, aby mu nebránili v mučeníctve. Ako prvý nazval Cirkev „katolíckou“. Jeho odvaha dodnes zapaľuje srdcia."
  },
  {
    name: "sv. Lukáš", img: "Codexaureus_23.jpg", feast: "10-18", years: "1. storočie", title: "evanjelista", symbol: "🐂",
    quote: "Buďte milosrdní, ako je milosrdný váš Otec.", source: "Lk 6, 36",
    story: "Lekár a spoločník sv. Pavla, ktorý napísal evanjelium a Skutky apoštolov. Najkrajšie zachytil Božie milosrdenstvo – podobenstvo o márnotratnom synovi aj dobrom Samaritánovi. Podľa tradície namaľoval prvý obraz Panny Márie. Milosrdenstvo je tvár Boha."
  },
  {
    name: "sv. Pavol z Kríža", img: "Paul_de_la_croix.jpg", feast: "10-19", years: "1694 – 1775", title: "kňaz, zakladateľ pasionistov", symbol: "✝️",
    quote: "Umučenie Ježiša Krista je najväčší a najúžasnejší zázrak Božej lásky.", source: "Listy",
    story: "Taliansky kňaz, ktorý celý život ohlasoval umučenie Krista ako prejav Božej lásky. Založil pasionistov, ktorí k trom sľubom pridali štvrtý – šíriť spomienku na Ježišovo utrpenie. Pri pohľade na kríž pochopíš, ako veľmi si milovaný."
  },
  {
    name: "sv. Bertila Boscardin", img: "Santa_Bertilla_Cropped.jpg", feast: "10-20", years: "1888 – 1922", title: "rehoľníčka, zdravotná sestra", symbol: "🥔",
    quote: "Tu som, Pane, aby som plnila tvoju vôľu.", source: "Hebr 10, 7",
    story: "Chudobné dievča, ktoré doma volali „hus“, lebo sa zdalo neschopné. V kláštore robila najprv v kuchyni a v práčovni. Počas prvej svetovej vojny sa ako zdravotná sestra neúnavne starala o ranených vojakov. Pokora a vytrvalosť robia z malých veľkých."
  },
  {
    name: "sv. Uršuľa a spoločníčky", img: "Carlo_Crivelli_041.jpg", feast: "10-21", years: "† okolo 4. storočia", title: "panny a mučenice", symbol: "⛵",
    quote: "Nebojte sa, ja som s vami.", source: "Mt 28, 20",
    story: "Podľa legendy britská princezná, ktorá s družkami putovala do Ríma a pri návrate ich v Kolíne zabili Huni, lebo odmietli zaprieť vieru. Je patrónkou mládeže a vychovávateliek; podľa nej sa volajú uršulínky. Aj legendy nesú pravdu o odvahe viery."
  },
  {
    name: "sv. Ján Pavol II.", img: "ADAMELLO_-_PAPA_-_Giovanni_Paolo_II_-_panoramio_(cropped).jpg", feast: "10-22", years: "1920 – 2005", title: "pápež", symbol: "🌍",
    quote: "Nebojte sa! Otvorte, ba dokorán otvorte brány Kristovi!", source: "Homília na začiatku pontifikátu, 22. 10. 1978",
    story: "Ako mladý stratil celú rodinu, pracoval v kameňolome a tajne študoval za kňaza. Ako pápež precestoval svet a pomohol zbúrať železnú oponu. Strach nemá posledné slovo."
  },
  {
    name: "sv. Ján Kapistránsky", img: "82Johannes_von_Capestrano.jpg", feast: "10-23", years: "1386 – 1456", title: "kňaz, františkán", symbol: "🚩",
    quote: "Znášaj so mnou útrapy ako dobrý vojak Krista Ježiša.", source: "2 Tim 2, 3",
    story: "Právnik a guvernér Perugie, ktorý sa vo väzení obrátil a stal sa františkánom. Kázal v strednej Európe, aj na Slovensku, a v roku 1456 viedol kresťanské vojsko pri obrane Belehradu. Zomrel krátko po víťazstve na mor. Obrátenie môže začať aj vo väzení."
  },
  {
    name: "sv. Anton Mária Claret", img: "Antonio_María_Claret,_c.1860.jpg", feast: "10-24", years: "1807 – 1870", title: "biskup, zakladateľ klaretínov", symbol: "📚",
    quote: "Láska Kristova nás pobáda.", source: "2 Kor 5, 14 – heslo jeho kongregácie",
    story: "Tkáč z Katalánska, ktorý sa stal kňazom, kazateľom a arcibiskupom na Kube. Prežil atentát, keď mu útočník rozrezal tvár. Šíril dobré knihy a založil tlačiareň. Jedno dobré slovo alebo kniha môžu zmeniť život."
  },
  {
    name: "sv. Maurus", img: "Maurus.jpg", feast: "10-25", years: "† okolo 1070", title: "biskup v Pécsi", symbol: "📜",
    quote: "Veď ma, Pane, po chodníku svojich príkazov.", source: "Ž 119, 35",
    story: "Benediktínsky mních z opátstva Pannonhalma, ktorého kráľ Štefan poznal ako chlapca a obdivoval jeho čistotu. Stal sa biskupom v Pécsi a napísal životopis sv. Svorada a Beňadika – najstarší text o svätých zo Slovenska. Pamäť svätých je dar pre budúce pokolenia."
  },
  {
    name: "sv. Evarist", img: "Pope_Saint_Evaristus_(by_Sandro_Botticelli)_–_Sistine_Chapel_(1481).jpg", feast: "10-26", years: "† okolo 107", title: "pápež a mučeník", symbol: "🗝️",
    quote: "Buďte pastiermi Božieho stáda, ktoré je u vás.", source: "1 Pt 5, 2",
    story: "Štvrtý nástupca sv. Petra v Ríme, ktorý viedol Cirkev za cisára Trajána. Podľa tradície rozdelil Rím na farnosti a zomrel ako mučeník. Na Slovensku si dnes v mnohých kostoloch pripomíname aj výročie ich posviacky – Boží dom je miestom stretnutia."
  },
  {
    name: "sv. Frumencius", img: "St_Frumentius.jpg", feast: "10-27", years: "† okolo 383", title: "biskup, apoštol Etiópie", symbol: "⛵",
    quote: "Všetko slúži na dobro tým, čo milujú Boha.", source: "Rim 8, 28",
    story: "Ako chlapec prežil stroskotanie lode pri etiópskom pobreží a dostal sa na kráľovský dvor ako otrok. Stal sa vychovávateľom následníka trónu a šíril kresťanstvo. Sv. Atanáz ho vysvätil za prvého biskupa Etiópie. Boh vie využiť aj stroskotanie."
  },
  {
    name: "sv. Šimon a Júda", img: "Anthonis_van_Dyck,_Kunsthistorisches_Museum_Wien,_Gemäldegalerie_-_Apostel_Judas_Thaddäus_-_GG_6809_-_Kunsthistorisches_Museum.jpg", feast: "10-28", years: "1. storočie", title: "apoštoli", symbol: "⛵",
    quote: "Budujte sa na svojej najsvätejšej viere, modlite sa v Duchu Svätom.", source: "Júd 20",
    story: "Dvaja menej známi apoštoli. Šimona volali Horlivec, Júda Tadeáš sa pýtal Ježiša pri Poslednej večeri. Podľa tradície spolu ohlasovali evanjelium v Perzii a zomreli ako mučeníci. Sv. Júda je patrónom beznádejných prípadov. Aj tichí verní sú stĺpmi Cirkvi."
  },
  {
    name: "sv. Narcis Jeruzalemský", img: "Bénévent-l’Abbaye_Saint-Barthélémy_Vitrail_Narcissus_of_Jerusalem_(cropped).jpg", feast: "10-29", years: "† okolo 216", title: "biskup", symbol: "🕯️",
    quote: "V tvojich rukách je môj osud.", source: "Ž 31, 16",
    story: "Jeruzalemský biskup, ktorý sa dožil vyše sto rokov. Podľa tradície keď na Veľkú noc chýbal olej do lámp, premenil vodu na olej. Keď ho ohovorili, stiahol sa na roky do samoty, no potom sa vrátil k svojmu stádu. Pokora prežije ohováranie."
  },
  {
    name: "sv. Marcel z Tangeru", img: "Marcellus_Cassian.jpg", feast: "10-30", years: "† 298", title: "stotník a mučeník", symbol: "🛡️",
    quote: "Slúžim Ježišovi Kristovi, večnému Kráľovi.", source: "Akty mučeníctva",
    story: "Rímsky stotník, ktorý počas osláv cisárovych narodenín odhodil opasok a zbrane a vyhlásil, že nebude obetovať pohanským bohom. Za to ho v Tangeri sťali. Svedomie je silnejšie ako rozkaz."
  },
  {
    name: "sv. Wolfgang", img: "Pfarrkirche_Liesing_-_Wolfgang.jpg", feast: "10-31", years: "okolo 924 – 994", title: "biskup v Regensburgu", symbol: "🪓",
    quote: "Ja som dobrý pastier.", source: "Jn 10, 11",
    story: "Mních, ktorý šiel ako misionár k Maďarom a potom sa stal biskupom v Regensburgu. Vychovával budúceho cisára sv. Henricha a obnovil kláštory. Podľa legendy hodil sekeru z vrchu a kde padla, postavil kostol. Boh ukazuje cestu aj nečakane."
  },
  {
    name: "Všetkých svätých", img: "Celebración_de_Todos_los_Santos,_cementerio_de_la_Santa_Cruz,_Gniezno,_Polonia,_2017-11-01,_DD_07-09_HDR.jpg", feast: "11-01", years: "", title: "slávnosť", symbol: "✨",
    quote: "Potom som videl veľký zástup, ktorý nik nemohol spočítať, zo všetkých národov.", source: "Zjv 7, 9",
    story: "Dnes oslavujeme všetkých svätých – aj tých, ktorých mená nepoznáme: babky, otcov, susedov, ktorí žili verne a ticho. Svätosť nie je pre vyvolených, je to povolanie pre každého. Aj ty môžeš byť jedným z nich."
  },
  {
    name: "Všetkých verných zosnulých", img: "William-Adolphe_Bouguereau_(1825-1905)_-_The_Day_of_the_Dead_(1859).jpg", feast: "11-02", years: "", title: "spomienka – Dušičky", symbol: "🕯️",
    quote: "Ja som vzkriesenie a život. Kto verí vo mňa, bude žiť, aj keď umrie.", source: "Jn 11, 25",
    story: "Dnes sa modlíme za všetkých zosnulých, najmä za tých, ktorí sú ešte na ceste k Bohu v očistci. Zapaľujeme sviečky ako znamenie nádeje. Láska nekončí smrťou – modlitbou môžeš ešte pomôcť tým, ktorých si miloval."
  },
  {
    name: "sv. Martin de Porres", img: "San_Martin_de_Porres_huaycan.jpg", feast: "11-03", years: "1579 – 1639", title: "rehoľník, dominikán", symbol: "🧹",
    quote: "Láska je trpezlivá, láska je dobrotivá.", source: "1 Kor 13, 4",
    story: "Syn španielskeho šľachtica a bývalej otrokyne z Limy. Pre tmavú pleť ho dlho prijímali len ako sluhu v kláštore. Staral sa o chorých, chudobných aj zvieratá s takou láskou, že ho milovalo celé mesto. Pokora a láska prekonávajú predsudky."
  },
  {
    name: "sv. Karol Boromejský", img: "Carlo_Borromeo.jpg", feast: "11-04", years: "1538 – 1584", title: "biskup", symbol: "🕯️",
    quote: "Vy ste svetlo sveta.", source: "Mt 5, 14",
    story: "Synovec pápeža, ktorý sa stal kardinálom ako 22-ročný, no namiesto pohodlia sa naplno venoval obnove Cirkvi. Počas moru v Miláne zostal v meste, keď ostatní utiekli, a sám ošetroval chorých. Založil semináre. Horlivý pastier nezutekáva."
  },
  {
    name: "sv. Alžbeta a Zachariáš", img: "Scuola_provenzale,_visitazione,_1490_ca,_sant'elisabetta_(cropped).jpg", feast: "11-05", years: "1. storočie", title: "rodičia sv. Jána Krstiteľa", symbol: "👶",
    quote: "U Boha nie je nič nemožné.", source: "Lk 1, 37",
    story: "Starí manželia, ktorí sa celý život modlili za dieťa. Keď už nedúfali, anjel oznámil Zachariášovi narodenie syna. Neveril a oňemel; prehovoril až pri mene Ján. Alžbeta ako prvá pozdravila Máriu ako Matku Pána. Boh prekvapuje v pravý čas."
  },
  {
    name: "sv. Leonard", img: "San_leonardo_abate.jpg", feast: "11-06", years: "† okolo 559", title: "opát, patrón väzňov", symbol: "⛓️",
    quote: "Duch Pánov je nado mnou… aby som zajatým hlásal slobodu.", source: "Lk 4, 18",
    story: "Franský šľachtic, ktorý odmietol biskupstvo a žil ako pustovník. Kráľ mu dovolil prepustiť väzňov, ktorých navštívi, a mnohí prepustení sa k nemu pridali. Je patrónom väzňov a dobytka; kostoly sv. Leonarda sú aj na Slovensku. Sloboda je dar, ktorý môžeš dávať."
  },
  {
    name: "sv. Willibrord", img: "Georg_Sturm,_Willibrordus_predikt_het_Christendom_aan_de_Friezen.jpg", feast: "11-07", years: "658 – 739", title: "biskup, apoštol Frízov", symbol: "⛪",
    quote: "Ako sú krásne nohy tých, čo zvestujú dobré veci!", source: "Rim 10, 15",
    story: "Anglický mních, ktorý päťdesiat rokov ohlasoval evanjelium v dnešnom Holandsku a Luxembursku. Založil biskupstvo v Utrechte a opátstvo v Echternachu, kam dodnes putuje „skákavá procesia“. Vytrvalosť prináša ovocie."
  },
  {
    name: "sv. Alžbeta od Najsvätejšej Trojice", img: "Visage_d'Elisabeth_de_la_Trinité.jpg", feast: "11-08", years: "1880 – 1906", title: "karmelitánka", symbol: "🎹",
    quote: "Našla som nebo na zemi, lebo nebo je Boh a Boh je v mojej duši.", source: "List",
    story: "Temperamentná dievčina a výborná klaviristka z Dijonu, ktorá vstúpila ku karmelitánkam. Objavila, že Najsvätejšia Trojica prebýva v duši človeka. Zomrela ako 26-ročná v bolestiach. Boh nie je ďaleko – je v tebe."
  },
  {
    name: "Posviacka Lateránskej baziliky", img: "Icon_of_Saint_Theodore_Teron_painted_by_Angelos_Akontatos,_First_half_of_the_15th_c._BXM_13059.jpg", feast: "11-09", years: "", title: "sviatok", symbol: "⛪",
    quote: "Či neviete, že ste Boží chrám a že vo vás prebýva Boží Duch?", source: "1 Kor 3, 16",
    story: "Lateránska bazilika v Ríme je katedrálou pápeža a „matkou a hlavou všetkých kostolov sveta“. Posvätili ju v roku 324. Sviatok pripomína jednotu Cirkvi so Svätým Otcom. Aj ty si chrámom Ducha Svätého."
  },
  {
    name: "sv. Lev Veľký", img: "Herrera_mozo_San_León_magno_Lienzo._Óvalo._164_x_105_cm._Museo_del_Prado.png", feast: "11-10", years: "okolo 400 – 461", title: "pápež a učiteľ Cirkvi", symbol: "🦁",
    quote: "Kresťan, uvedom si svoju dôstojnosť!", source: "Vianočná kázeň 1",
    story: "Pápež, ktorý vyšiel pred bránu Ríma naproti Attilovi a presvedčil ho, aby mesto ušetril. Jeho list o Kristovi prijal koncil v Chalcedóne so slovami: „Peter prehovoril ústami Leva.“ Pripomína nám, akú veľkú dôstojnosť máme ako Božie deti."
  },
  {
    name: "sv. Martin z Tours", img: "Simone_Martini_040.jpg", feast: "11-11", years: "316 – 397", title: "biskup", symbol: "🧥",
    quote: "Pane, ak som ešte potrebný tvojmu ľudu, neodmietam prácu.", source: "Posledné slová podľa Sulpicia Severa",
    story: "Rímsky vojak, ktorý pri bráne Amiensu rozťal svoj plášť a polovicu dal žobrákovi. V noci videl Krista oblečeného v tej polovici. Stal sa mníchom a biskupom. Na sv. Martina u nás prichádza zima – a pozvanie deliť sa s tými, čo mrznú."
  },
  {
    name: "sv. Jozafát Kuncevič", img: "JKuncewicz.jpg", feast: "11-12", years: "okolo 1580 – 1623", title: "biskup a mučeník", symbol: "🤝",
    quote: "Nech sú všetci jedno.", source: "Jn 17, 21",
    story: "Gréckokatolícky arcibiskup z Polocka, ktorý celý život pracoval pre jednotu Východnej a Západnej cirkvi. Odporcovia jednoty ho brutálne zavraždili. Jeho telo odpočíva v Bazilike sv. Petra. Je blízky aj gréckokatolíkom na Slovensku."
  },
  {
    name: "sv. Stanislav Kostka", img: "Stanislaus_Kostka_Legros_n1.jpg", feast: "11-13", years: "1550 – 1568", title: "rehoľník, patrón mládeže", symbol: "🚶",
    quote: "Narodil som sa pre väčšie veci.", source: "Obľúbené slová sv. Stanislava",
    story: "Poľský šľachtic, ktorého vo Viedni šikanoval vlastný brat. Keď mu otec zakázal vstúpiť k jezuitom, prešiel pešo takmer 900 km do Ríma. Zomrel ako 18-ročný novic. Je patrónom mládeže. Aj ty si stvorený pre veľké veci."
  },
  {
    name: "sv. Mikuláš Tavelić a spoločníci", img: "Sveti-Nikola-Tavelic.jpg", feast: "11-14", years: "okolo 1340 – 1391", title: "františkáni, mučeníci", symbol: "⛪",
    quote: "Kto ma vyzná pred ľuďmi, toho aj ja vyznám pred svojím Otcom.", source: "Mt 10, 32",
    story: "Chorvátsky františkán, ktorý pôsobil v Bosne a potom v Jeruzaleme, kde sa staral o sväté miesta. Spolu s tromi bratmi verejne ohlasoval Krista pred súdom v meste; za to ich popravili. Je prvým chorvátskym svätým."
  },
  {
    name: "sv. Albert Veľký", img: "Vicente_salvador_gomez-san_alberto.jpg", feast: "11-15", years: "okolo 1200 – 1280", title: "biskup a učiteľ Cirkvi", symbol: "🔬",
    quote: "Prírodná veda nespočíva v tom, že prijmeme, čo povedali iní, ale v hľadaní príčin javov.", source: "O mineráloch II, 2, 1",
    story: "Nemecký dominikán, prírodovedec, filozof a teológ, ktorého nazvali „Doctor universalis“. Bol učiteľom sv. Tomáša Akvinského a bránil ho aj po jeho smrti. Je patrónom prírodovedcov. Viera a veda sa navzájom obohacujú."
  },
  {
    name: "sv. Margita Škótska", img: "Saint_Margaret_of_Scotland.jpg", feast: "11-16", years: "okolo 1045 – 1093", title: "kráľovná", symbol: "👑",
    quote: "Kto sa zľutúva nad chudobným, požičiava Pánovi.", source: "Prís 19, 17",
    story: "Anglická princezná, ktorá sa narodila v Uhorsku a vyrastala na dvore kráľa Štefana. Ako škótska kráľovná pomáhala chudobným a sirotám, pred jedlom kŕmila deväť sirôt a zmierňovala hrubé mravy dvora. Láska dokáže zjemniť aj drsných ľudí."
  },
  {
    name: "sv. Alžbeta Uhorská", img: "Simone_Martini_046.jpg", feast: "11-17", years: "1207 – 1231", title: "kňažná, patrónka charity", symbol: "👑",
    quote: "Ako by som mohla nosiť zlatú korunu, keď môj Pán nosí korunu z tŕnia?", source: "Tradícia",
    story: "Uhorská princezná, ktorá zo svojho hradu stavala nemocnice a sama ošetrovala chorých. Po smrti manžela prišla o všetko, no nestratila radosť. Skutočné bohatstvo je v rozdanom."
  },
  {
    name: "sv. Filipína Duchesne", img: "DuchesneRSCJ.jpg", feast: "11-18", years: "1769 – 1852", title: "rehoľníčka, misionárka", symbol: "🙏",
    quote: "Žena, ktorá sa stále modlí.", source: "Meno, ktoré jej dali Indiáni",
    story: "Francúzska rehoľníčka, ktorá ako 49-ročná odišla na misie do Ameriky. Ako 72-ročná začala učiť Indiánov, no ich jazyk sa už nenaučila. Namiesto toho sa modlila; Indiáni ju volali „žena, ktorá sa stále modlí“. Modlitba je tiež misia."
  },
  {
    name: "sv. Mechtilda z Hackebornu", img: "Matilde_Hackeborn.JPG", feast: "11-19", years: "1241 – 1298", title: "rehoľníčka, mystička", symbol: "🎵",
    quote: "Budem ťa chváliť, Pane, celým srdcom.", source: "Ž 9, 2",
    story: "Nemecká mníška z Helfty, ktorú pre krásny hlas nazývali „slávik Boží“. Viedla spev v kláštore a mala mystické videnia o Božom Srdci, ktoré zapísala jej žiačka sv. Gertrúda. Aj tvoj hlas môže chváliť Boha."
  },
  {
    name: "sv. Edmund", img: "Edmundbeingmartyred05.jpg", feast: "11-20", years: "okolo 841 – 869", title: "kráľ a mučeník", symbol: "🏹",
    quote: "Nebojte sa tých, čo zabíjajú telo, ale dušu zabiť nemôžu.", source: "Mt 10, 28",
    story: "Mladý kráľ východného Anglicka, ktorého zajali Vikingovia. Keď odmietol zaprieť Krista a stať sa ich vazalom, priviazali ho k stromu, strieľali doňho šípy a sťali ho. Stal sa patrónom Anglicka pred sv. Jurajom. Vernosť je silnejšia ako moc."
  },
  {
    name: "Obetovanie Panny Márie", img: "Frescos_from_the_Church_of_the_Presentation_of_Virgin_Mary_in_Kucevište_039.jpg", feast: "11-21", years: "", title: "spomienka", symbol: "🕊️",
    quote: "Hľa, služobnica Pánova.", source: "Lk 1, 38",
    story: "Podľa starej tradície rodičia Joachim a Anna priviedli malú Máriu do chrámu a zasvätili ju Bohu. Mária celý život patrila Bohu. Dnes je aj deň modlitieb za rehoľníkov a rehoľníčky, ktorí sa mu zasvätili."
  },
  {
    name: "sv. Cecília", img: "Guercino_-_St._Cecilia_-_Google_Art_Project.jpg", feast: "11-22", years: "† okolo 230", title: "panna a mučenica, patrónka hudby", symbol: "🎵",
    quote: "Nech je moje srdce a moje telo nepoškvrnené, aby som nebola zahanbená.", source: "Umučenie sv. Cecílie",
    story: "Rímska šľachtičná, ktorá si zachovala panenstvo pre Krista a obrátila aj svojho manžela Valeriána. Podľa legendy pri svadbe v srdci spievala Bohu, preto je patrónkou hudobníkov. Za vieru bola sťatá. Hudba srdca je najkrajšia modlitba."
  },
  {
    name: "sv. Klement I.", img: "Clemens_Romanus.jpg", feast: "11-23", years: "† okolo 100", title: "pápež a mučeník", symbol: "⚓",
    quote: "Pre lásku sme boli prijatí Bohom.", source: "List Korinťanom 49",
    story: "Tretí nástupca sv. Petra, ktorý napísal list korintskej cirkvi, aby urovnal jej spory – jeden z najstarších kresťanských textov mimo Biblie. Podľa tradície ho s kotvou na krku hodili do mora. Jeho relikvie priniesol do Ríma sv. Cyril. Láska zjednocuje."
  },
  {
    name: "sv. Ondrej Dung-Lac a spoločníci", img: "Martyrs_of_Tonkin.jpg", feast: "11-24", years: "† 1745 – 1862", title: "mučeníci vo Vietname", symbol: "🕊️",
    quote: "Blahoslavení prenasledovaní pre spravodlivosť, lebo ich je nebeské kráľovstvo.", source: "Mt 5, 10",
    story: "Vietnamský kňaz a 116 spoločníkov – kňazi, biskupi, katechéti, matky aj otcovia – ktorí zomreli za vieru počas krutého prenasledovania. Vo Vietname vtedy zomrelo za vieru až 130 000 ľudí. Ich krv je semenom živej cirkvi v Ázii."
  },
  {
    name: "sv. Katarína Alexandrijská", img: "Saint_Catherine_of_Alexandria_(Caravaggio).jpg", feast: "11-25", years: "† okolo 305", title: "panna a mučenica", symbol: "☸️",
    quote: "Múdrosť je lepšia ako perly.", source: "Prís 8, 11",
    story: "Mladá učená žena z Alexandrie, ktorá v dišpute porazila päťdesiat pohanských filozofov – a tí sa podľa legendy obrátili. Cisár ju dal mučiť na kolese, ktoré sa rozlámalo, a potom ju sťali. Je patrónkou študentov a filozofov."
  },
  {
    name: "sv. Leonard z Porto Maurizio", img: "S_Leonardo.JPG", feast: "11-26", years: "1676 – 1751", title: "kňaz, františkán", symbol: "✝️",
    quote: "Ježišu, pre tvoje umučenie, zmiluj sa nado mnou.", source: "Modlitba z krížovej cesty",
    story: "Taliansky františkánsky kazateľ, ktorý viedol stovky ľudových misií. Veľmi rozšíril pobožnosť krížovej cesty – postavil ich vyše 500, aj v rímskom Koloseu. Kráčaj dnes s Ježišom aspoň jednu zastávku jeho cesty."
  },
  {
    name: "sv. Virgil zo Salzburgu", img: "Saint_Virgilius,_Salzburg.jpg", feast: "11-27", years: "okolo 700 – 784", title: "biskup", symbol: "🌍",
    quote: "Nebesia rozprávajú o Božej sláve.", source: "Ž 19, 2",
    story: "Írsky mních a učenec, ktorý sa stal biskupom v Salzburgu. Posielal misionárov ku Karantáncom, predkom Slovincov, a jeho dielo zasiahlo aj Panóniu. Zaujímal sa o astronómiu a tvar Zeme. Veda a viera sa v ňom stretli."
  },
  {
    name: "sv. Katarína Labouré", img: "Catherine_Laboure.jpg", feast: "11-28", years: "1806 – 1876", title: "rehoľníčka", symbol: "🏅",
    quote: "Ó, Mária, počatá bez hriechu, oroduj za nás, ktorí sa k tebe utiekame.", source: "Nápis na zázračnej medaile",
    story: "Sedliacka dievčina, ktorej sa v roku 1830 v Paríži zjavila Panna Mária a požiadala o vyrazenie zázračnej medaily. Katarína potom 46 rokov slúžila skryto ako sestra v starobinci a nikto nevedel, že je to ona. Skrytosť je Božia cesta."
  },
  {
    name: "sv. Saturnín", img: "Saturninus_vignay.jpg", feast: "11-29", years: "† okolo 257", title: "biskup a mučeník", symbol: "🐂",
    quote: "Choďte do celého sveta a hlásajte evanjelium.", source: "Mk 16, 15",
    story: "Prvý biskup v Toulouse. Keď odmietol obetovať pohanským bohom, pohania ho priviazali k býkovi, ktorý ho vliekol po schodoch Kapitolu. Jeho ostatky dnes odpočívajú v nádhernej bazilike Saint-Sernin. Svetlo sa nedá uhasiť."
  },
  {
    name: "sv. Ondrej", img: "Rubens_apostel_andreas_grt.jpg", feast: "11-30", years: "1. storočie", title: "apoštol", symbol: "✖️",
    quote: "Našli sme Mesiáša.", source: "Jn 1, 41",
    story: "Rybár, ktorý bol pôvodne učeníkom Jána Krstiteľa. Ako prvý nasledoval Ježiša a hneď priviedol aj svojho brata Petra. Podľa tradície zomrel na kríži v tvare X. Aj ty môžeš byť tým, kto niekoho privedie k Ježišovi."
  },
  {
    name: "sv. Karol de Foucauld", img: "Charles_de_Foucauld.jpg", feast: "12-01", years: "1858 – 1916", title: "kňaz, pustovník na Sahare", symbol: "🏜️",
    quote: "Otče, odovzdávam sa ti, urob so mnou, čo sa ti páči.", source: "Modlitba odovzdanosti",
    story: "Francúzsky dôstojník a bohém, ktorý stratil vieru a znovu ju našiel. Stal sa pustovníkom medzi Tuaregmi na Sahare a chcel byť „všeobecným bratom“ všetkých. Zabili ho pri prepade. Nezískal nikoho, no po smrti inšpiroval celé rehole."
  },
  {
    name: "sv. Bibiána", img: "Santa_Bibiana_by_Bernini.jpg", feast: "12-02", years: "† 363", title: "panna a mučenica", symbol: "🌿",
    quote: "Blahoslavení, ktorí plačú, lebo oni budú potešení.", source: "Mt 5, 4",
    story: "Rímska dievčina, ktorej rodičov umučili za vieru za cisára Juliána Odpadlíka. Aj ju a sestru ponižovali a mučili, no ostala verná. Na mieste jej domu stojí kostol Santa Bibiana. Vernosť sa dedí z rodiny."
  },
  {
    name: "sv. František Xaverský", img: "Franciscus_de_Xabier.jpg", feast: "12-03", years: "1506 – 1552", title: "kňaz, misionár", symbol: "🌏",
    quote: "Čo osoží človeku, keby celý svet získal, a svojej duši by uškodil?", source: "Mt 16, 26",
    story: "Ambiciózny študent v Paríži, ktorému sv. Ignác opakoval práve tento verš, až ho získal pre Krista. Odišiel do Indie, Indonézie a Japonska a pokrstil desaťtisíce ľudí. Zomrel na ostrove pred bránami Číny. Jedno slovo priateľa môže zmeniť celý život."
  },
  {
    name: "sv. Barbora", img: "Wilhelm_Kalteysen_-_Saint_Barbara_Altarpiece_-_Google_Art_Project.jpg", feast: "12-04", years: "† okolo 306", title: "panna a mučenica", symbol: "🗼",
    quote: "Buď verná až do smrti a dám ti veniec života.", source: "Zjv 2, 10",
    story: "Podľa legendy ju otec zavrel do veže, aby ju ochránil pred svetom. Tam sa stala kresťankou a dala do veže vybúrať tretie okno na počesť Trojice. Otec ju sám udal a sťal. Je patrónkou baníkov; na Barborku sa trhá čerešňová vetvička, aby na Vianoce rozkvitla."
  },
  {
    name: "sv. Sába", img: "SabbastheSanctified.jpg", feast: "12-05", years: "439 – 532", title: "opát", symbol: "🏜️",
    quote: "Pokoj vám zanechávam, svoj pokoj vám dávam.", source: "Jn 14, 27",
    story: "Mních z Kappadócie, ktorý v Judskej púšti založil veľkú lavru Mar Saba – kláštor, ktorý funguje takmer 1500 rokov. Viedol stovky mníchov a staral sa o pútnikov. Kláštor dodnes stojí nad kaňonom Kidron. Čo je postavené na Bohu, vydrží."
  },
  {
    name: "sv. Mikuláš", img: "Jaroslav_Čermák_(1831_-_1878)_-_Sv._Mikuláš_(cropped).jpg", feast: "12-06", years: "okolo 270 – 343", title: "biskup", symbol: "🎁",
    quote: "Keď dávaš almužnu, nech nevie tvoja ľavica, čo robí pravica.", source: "Mt 6, 3",
    story: "Biskup v Myre, ktorý podľa legendy tajne hodil otvoreným oknom mešce zlata chudobnému otcovi, aby jeho tri dcéry mohli mať veno. Odtiaľ pochádza zvyk dávať deťom darčeky. Najkrajšie dary sú tie, za ktoré nečakáš poďakovanie."
  },
  {
    name: "sv. Ambróz", img: "AmbroseOfMilan_(cropped).jpg", feast: "12-07", years: "okolo 340 – 397", title: "biskup a učiteľ Cirkvi", symbol: "🐝",
    quote: "Kde je Peter, tam je Cirkev.", source: "Výklad žalmov 40, 30",
    story: "Rímsky guvernér Milána, ktorého ľud zvolil za biskupa ešte ako nepokrsteného katechumena. Stal sa veľkým kazateľom, pokrstil sv. Augustína a nebál sa napomenúť ani cisára Teodózia. Jeho reč bola taká sladká, že ho zobrazujú s úľom. Boh volá nečakane."
  },
  {
    name: "Nepoškvrnené počatie Panny Márie", img: "Inmaculada_Concepción_(Tiepolo).jpg", feast: "12-08", years: "", title: "slávnosť", symbol: "🤍",
    quote: "Zdravas, milosti plná, Pán s tebou.", source: "Lk 1, 28",
    story: "Boh uchránil Máriu od dedičného hriechu od prvej chvíle jej existencie, aby bola čistým príbytkom pre jeho Syna. V Lurdoch sa Bernadete predstavila slovami: „Ja som Nepoškvrnené počatie.“ Uprostred Adventu nám Mária ukazuje, aký krásny je človek podľa Božieho plánu."
  },
  {
    name: "sv. Ján Diego", img: "MIguel_Cabrera_-_Fiel_retrato_do_venerável_Juan_Diego.jpg", feast: "12-09", years: "1474 – 1548", title: "laik, vizionár z Guadalupe", symbol: "🌹",
    quote: "Nie som tu ja, ktorá som tvojou matkou?", source: "Slová Panny Márie, Nican Mopohua",
    story: "Chudobný aztécky roľník, ktorému sa v roku 1531 zjavila Panna Mária. Biskup chcel znamenie – a Juan Diego priniesol v plášti ruže uprostred zimy. Keď plášť rozvinul, bol na ňom obraz Panny Márie. Mária prichádza k tým, ktorých iní prehliadajú."
  },
  {
    name: "Panna Mária Loretánska", img: "Basilica_Pontificia_della_Santa_Casa_di_Loreto.jpg", feast: "12-10", years: "", title: "ľubovoľná spomienka", symbol: "🏠",
    quote: "A Slovo sa telom stalo a prebývalo medzi nami.", source: "Jn 1, 14",
    story: "V Lorete v Taliansku sa uctieva domček z Nazareta, kde podľa tradície žila Svätá rodina. Je patrónkou letcov. Z Loreta pochádza aj Loretánska litánia. Tvoj domov môže byť malým Nazaretom – miestom lásky a modlitby."
  },
  {
    name: "sv. Damaz I.", img: "Pope_Damasus_-_Biblia_Sancti_Martialis_Lemovicensis,_Folio_4v.png", feast: "12-11", years: "okolo 305 – 384", title: "pápež", symbol: "📜",
    quote: "Tvoje slovo je lampou pre moje nohy.", source: "Ž 119, 105",
    story: "Pápež, ktorý poveril sv. Hieronyma prekladom Biblie do latinčiny – Vulgáta sa používala tisíc rokov. Obnovoval hroby mučeníkov v katakombách a písal na ne krásne básnické nápisy. Úcta k Písmu a k svedkom viery ide ruka v ruke."
  },
  {
    name: "Panna Mária Guadalupská", img: "Virgen_de_guadalupe1.jpg", feast: "12-12", years: "1531", title: "ľubovoľná spomienka, patrónka Ameriky", symbol: "🌹",
    quote: "Nech sa tvoje srdce nevzrušuje… Nie som tu ja, ktorá som tvojou matkou?", source: "Nican Mopohua",
    story: "Obraz na plášti sv. Jána Diega sa zachoval dodnes a je najnavštevovanejšou mariánskou svätyňou sveta. Mária sa na ňom zjavila ako tehotná žena s tvárou miešanky – matka pre všetky národy. Po zjavení prijali krst milióny ľudí."
  },
  {
    name: "sv. Lucia", img: "Niccolò_di_Segna_-_Saint_Lucy_-_Walters_37756.jpg", feast: "12-13", years: "283 – 304", title: "panna a mučenica", symbol: "🕯️",
    quote: "Tí, čo žijú čisto a nábožne, sú chrámom Ducha Svätého.", source: "Akty mučeníctva",
    story: "Mladá žena zo Syrakúz, ktorá rozdala veno chudobným. Odmietnutý snúbenec ju udal ako kresťanku. Jej meno znamená „svetlo“ – a jej sviatok na Slovensku patrí k najdlhším nociam roka. Luciine noci sú pozvaním niesť svetlo do tmy."
  },
  {
    name: "sv. Ján z Kríža", img: "Zurbarán_(atribuido)-John_of_the_Cross-1656.jpg", feast: "12-14", years: "1542 – 1591", title: "kňaz a učiteľ Cirkvi", symbol: "✝️",
    quote: "Na sklonku života budeme súdení z lásky.", source: "Výroky svetla a lásky",
    story: "Vlastní bratia ho väznili v tmavej cele; práve tam napísal jedny z najkrajších básní o Bohu. Z temnej noci vyšiel s ešte väčšou láskou. Aj tvoja tma môže byť miestom rastu."
  },
  {
    name: "sv. Virgínia Centurione Bracelli", img: "Virgina_Centurione_Pittura_Busto.jpg", feast: "12-15", years: "1587 – 1651", title: "vdova, zakladateľka", symbol: "🤲",
    quote: "Čisté a nepoškvrnené náboženstvo pred Bohom a Otcom je navštevovať siroty a vdovy v ich súžení.", source: "Jak 1, 27",
    story: "Janovská šľachtičná, ktorú vydali proti jej vôli za hráča. Po jeho smrti sa ako 20-ročná vdova rozhodla slúžiť chudobným. Počas hladomoru otvorila svoj dom opusteným dievčatám a založila útulky. Z nešťastného manželstva vzišlo dielo lásky."
  },
  {
    name: "sv. Adelaida", img: "Sainte-Adélaïde_-_Église_de_Toury,_vitraux_par_Lorin.jpg", feast: "12-16", years: "931 – 999", title: "cisárovná", symbol: "👑",
    quote: "Spravodlivý si, Pane, a tvoje súdy sú správne.", source: "Ž 119, 137",
    story: "Talianska kráľovná, ktorú po smrti manžela uväznil uchádzač o trón. Utiekla a vydala sa za cisára Otu I. Ako vdova a regentka vládla múdro, podporovala kláštory a odpúšťala nepriateľom. Znášala nevďak aj od vlastného syna. Odpustenie je kráľovská cnosť."
  },
  {
    name: "sv. Šturm", img: "1_Mark_Notgeld_1921_Stadt_Marsberg_No_005588_Ausschnitt.png", feast: "12-17", years: "okolo 705 – 779", title: "opát", symbol: "🌲",
    quote: "Hľadal som Pána a on mi odpovedal.", source: "Ž 34, 5",
    story: "Bavorský žiak sv. Bonifáca, ktorý hľadal v pustých lesoch miesto pre kláštor. Tak vznikla Fulda, jedno z najdôležitejších duchovných centier Nemecka. Mnohé roky znášal spory, no dielo pretrvalo. Hľadanie Božej cesty môže trvať – no oplatí sa."
  },
  {
    name: "sv. Winibald", img: "Wunibald_Pontifikale_Gundekarianum_11._Jahrhundert.jpg", feast: "12-18", years: "701 – 761", title: "opát", symbol: "⛪",
    quote: "Poďte, vystúpme na vrch Pánov.", source: "Iz 2, 3",
    story: "Brat sv. Willibalda a sv. Walburgy, ktorý šiel so svojím otcom Richardom na púť do Ríma. Pripojil sa k misii sv. Bonifáca v Nemecku a založil kláštor v Heidenheime. Celá rodina sa stala misionárskou. Viera v rodine prináša ovocie."
  },
  {
    name: "sv. Anastáz I.", img: "AnastasiI.jpg", feast: "12-19", years: "† 401", title: "pápež", symbol: "🗝️",
    quote: "Stojte pevne vo viere, buďte mužní a silní.", source: "1 Kor 16, 13",
    story: "Rímsky pápež, ktorého sv. Hieronym nazval mužom veľkej svätosti a apoštolskej horlivosti. Chránil vieru pred omylmi a staral sa o jednotu Cirkvi v ťažkých časoch. Hieronym napísal, že Rím si ho nezaslúžil dlhšie."
  },
  {
    name: "sv. Dominik zo Silos", img: "Santo_Domingo_de_Silos_entronizado_como_obispo,_por_Bartolomé_Bermejo.jpg", feast: "12-20", years: "1000 – 1073", title: "opát", symbol: "⛓️",
    quote: "Hlásal som zajatým prepustenie.", source: "Lk 4, 18",
    story: "Pastier oviec, ktorý sa stal mníchom a opátom kláštora v Silos. Vykupoval kresťanov z maurského zajatia a zveľadil kláštor, ktorý je dodnes známy gregoriánskym chorálom. Sv. Dominik Guzmán dostal po ňom meno."
  },
  {
    name: "sv. Peter Kanízius", img: "Saint_Petrus_Canisius.jpg", feast: "12-21", years: "1521 – 1597", title: "kňaz a učiteľ Cirkvi", symbol: "📘",
    quote: "Ak máš priveľa práce, s Božou pomocou nájdeš čas na všetko.", source: "Výroky",
    story: "Holandský jezuita, ktorý precestoval strednú Európu, pôsobil aj v Prahe a Viedni a zakladal školy. Napísal katechizmus, z ktorého sa učili generácie – vyšiel vo vyše 200 vydaniach. Obnova viery ide cez vzdelanie a trpezlivosť."
  },
  {
    name: "sv. František Xaviera Cabriniová", img: "Francesca_Cabrini.JPG", feast: "12-22", years: "1850 – 1917", title: "rehoľníčka, patrónka emigrantov", symbol: "🚢",
    quote: "Všetko môžem v tom, ktorý mi dáva silu.", source: "Flp 4, 13",
    story: "Talianska rehoľníčka, ktorá sa bála vody, no 24-krát preplávala oceán. Pápež ju poslal k talianskym prisťahovalcom do Ameriky, kde založila 67 škôl, sirotincov a nemocníc. Stala sa prvou americkou svätou. Strach nie je prekážkou poslania."
  },
  {
    name: "sv. Ján Kentský", img: "Jan_Kanty.jpg", feast: "12-23", years: "1390 – 1473", title: "kňaz", symbol: "🧥",
    quote: "Čokoľvek ste urobili jednému z týchto mojich najmenších, mne ste urobili.", source: "Mt 25, 40",
    story: "Profesor krakovskej univerzity, ktorý žil veľmi skromne a všetko rozdával chudobným. Podľa legendy dal žobrákovi aj vlastný plášť a topánky a do domu sa vrátil bosý. Štyrikrát pešo putoval do Ríma. Múdrosť bez lásky je prázdna."
  },
  {
    name: "Adam a Eva", img: "Peter_Paul_Rubens_-_Adam_and_Eve,_after_Titian,_between_1628_and_1629.jpg", feast: "12-24", years: "", title: "prarodičia", symbol: "🍎",
    quote: "Ženin potomok ti rozšliape hlavu.", source: "Gn 3, 15",
    story: "Na Štedrý deň si pripomíname prvých ľudí, ktorí stratili raj. Hneď potom im Boh prisľúbil Vykupiteľa. Dnes večer sa tento sľub napĺňa – rodí sa Ten, ktorý otvára raj všetkým. Nikto nie je príliš ďaleko od Božej lásky."
  },
  {
    name: "Narodenie Pána – Vianoce", img: "Adoration_of_the_sheperds_-_Matthias_Stomer.jpg", feast: "12-25", years: "", title: "slávnosť", symbol: "⭐",
    quote: "Dnes sa vám v Dávidovom meste narodil Spasiteľ, Kristus Pán.", source: "Lk 2, 11",
    story: "Boh sa stal malým dieťaťom v jasliach, aby sa ho nikto nemusel báť. Neprišiel v moci, ale v pokore – do chudoby, zimy a tmy. Nech sa dnes narodí aj v tvojom srdci. Požehnané Vianoce!"
  },
  {
    name: "sv. Štefan", img: "Saint_Stephen_(Carlo_Crivelli).jpg", feast: "12-26", years: "† okolo 36", title: "prvý mučeník", symbol: "🪨",
    quote: "Pane, nezapočítaj im tento hriech!", source: "Sk 7, 60",
    story: "Jeden zo siedmich diakonov, ktorí sa starali o vdovy. Kázal s takou múdrosťou, že ho ukameňovali. Umieral s modlitbou za svojich vrahov – a medzi nimi stál mladý Šavol, budúci sv. Pavol. Odpustenie rodí nových svätých."
  },
  {
    name: "sv. Ján", img: "Rubens_apostel_johannes_grt.jpg", feast: "12-27", years: "1. storočie", title: "apoštol a evanjelista", symbol: "🦅",
    quote: "Boh je láska; a kto zostáva v láske, zostáva v Bohu a Boh v ňom.", source: "1 Jn 4, 16",
    story: "Najmladší z apoštolov, „učeník, ktorého Ježiš miloval“. Pri Poslednej večeri spočinul na Ježišovej hrudi a ako jediný z apoštolov stál pod krížom. Ježiš mu zveril svoju Matku. V starobe vraj opakoval len: „Deti, milujte sa navzájom.“"
  },
  {
    name: "Svätí Neviniatka", img: "0_La_Vierge_à_l'Enfant_entourée_des_saints_Innocents_-_Louvre_-_(2).JPG", feast: "12-28", years: "1. storočie", title: "mučeníci", symbol: "👶",
    quote: "V Ráme bolo počuť hlas, plač a veľký nárek.", source: "Mt 2, 18",
    story: "Kráľ Herodes zo strachu o trón dal zabiť všetkých chlapcov v Betleheme. Tieto malé deti zomreli za Krista skôr, ako mohli hovoriť. Dnes sa modlíme za všetky deti, ktoré trpia alebo nemohli sa narodiť. Každé dieťa je vzácne."
  },
  {
    name: "sv. Tomáš Becket", img: "London._British_Library,_Cotton_MS_Claudius_B_II._f.341r_(cropped).jpg", feast: "12-29", years: "1118 – 1170", title: "biskup a mučeník", symbol: "⚔️",
    quote: "Za meno Ježiš a za obranu Cirkvi som pripravený prijať smrť.", source: "Posledné slová",
    story: "Priateľ a kancelár kráľa Henricha II., ktorý žil v prepychu. Keď ho kráľ urobil arcibiskupom z Canterbury, zmenil sa a bránil slobodu Cirkvi aj proti kráľovi. Rytieri ho zavraždili priamo v katedrále. Úrad ho zmenil na svätca."
  },
  {
    name: "sv. Felix I.", img: "PopeFelixI.jpg", feast: "12-30", years: "† 274", title: "pápež", symbol: "🗝️",
    quote: "Ježiš Kristus je ten istý včera i dnes i naveky.", source: "Hebr 13, 8",
    story: "Pápež z 3. storočia, ktorý v liste bránil vieru, že Ježiš je pravý Boh aj pravý človek. Podľa tradície zaviedol slúženie omší na hroboch mučeníkov. Na konci roka si pripomíname, že Kristus je stály, aj keď sa všetko mení."
  },
  {
    name: "sv. Silvester I.", img: "Età_di_paolo_I,_storie_di_noè,_di_giuseppe_e_cristo_in_trono_tra_ss._e_padri_della_chiesa_occ.le_e_or.le,_757-767,_16(cropped).jpg", feast: "12-31", years: "† 335", title: "pápež", symbol: "🎆",
    quote: "Všetko má svoj čas… čas plakať a čas smiať sa.", source: "Kaz 3, 1.4",
    story: "Pápež v čase, keď cisár Konštantín dal kresťanom slobodu. Za jeho pontifikátu vznikli prvé veľké baziliky – Lateránska aj Svätého Petra. Na Silvestra ďakujeme za uplynulý rok a vstupujeme do nového s nádejou."
  }
];
