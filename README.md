# Fysik – elevböcker i bokformat

Läsbara, paginerade elevböcker för högstadiet (åk 7–9). Boken har samma känsla som filmerna i bokform
(`1800-talet/verktyg/bok.py`): papper, typografi, sidhuvud och sidnummer. Papper, bläck och typsnitt är plattformens
gemensamma bas; fysikens egen färg är indigo.
Men den här boken **läses och spelas inte**. Hela sidan visas direkt och eleven bläddrar i egen takt.

**Status:** bokmotorn är fryst sedan 2026-10-31. Att lägga till ett delkapitel, en nivå, en figur eller en länk till
ett hjälpmedel är data och kräver ingen ändring i motorn (`bokskal/`). Motorn har sedan 2026-11-02 en bok per text.
I arbetsområdet Kraft och rörelse (område 3) finns avsnittssidorna I. Repetition (atomen, joner och bindningar) och
II. Repetition (materia, densitet och värme). Bara standardnivån har text än.

## Så fungerar det för eleven

**Hubben** är delkapitlets sida (`index.html`). Den är byggd som plattformens avsnittssida, med samma skal och
klassnamn som geografiboken (`jb873/geografibok`: `delkapitel/geologi/avsnitt-2-plattektonik.html` och
`css/geografi.css`), i fysikens färger och typsnitt:

- **Hero-banner:** brödsmulor (Fysik › Kraft och rörelse › 1. Repetition), "Avsnitt I", titeln och undertiteln
  ("— materia, densitet och värme —").
- **Flikar:** Föreläsning · **Läs** · Öva · Elevboken. Föreläsning, Öva och Elevboken är plattformens hjälpmedel och
  visas inbäddade i fliken. Utan adress är fliken tonad och "kommer".
- **Läs:** texterna som A, B, C, D och nivåerna **📗 Enkel · 📘 Standard · 📕 Fördjupning**. En nivå utan
  innehåll är tonad och går inte att välja. Texterna är antingen **egna böcker** (`texter` i `delkapitel.js`, se *En
  bok per text*, som Repetition I och II) eller avsnitten i en och samma bok (utan `texter`).

Det enda som skiljer från geografin: Läs visar inte texten på sidan. **En text öppnar boken i helskärm** där texten
börjar, på vald nivå. Texten där eleven är markeras och öppnar boken där eleven var, och under nivåerna står
"Du läste senast vid ”Densiteten beror på ämnet …”" – rubriken, inte ett sidnummer. Inledning och Sammanfattning
ligger i boken före och efter texterna. Är texterna egna böcker öppnar varje text sin bok där eleven var i just den,
och raden säger vilken text ("… i Atomen"). Eleven kommer tillbaka till samma delkapitel på tre sätt: **✕ Stäng**,
**Esc** eller webbläsarens **bakåt**. Boken minns läsplatsen (ett block) och nivån.

Självskattning och Begreppsbank hör till kapitlets index som resurskort, inte till delkapitlets sida. Inifrån boken
länkas de ändå: begreppen till begreppslistan och slutet av varje text till Öva och Självskattning.

**Boken** är bara papperet. De tysta reglagen ligger i marginalerna bredvid boken och tar ingen höjd från sidorna:

| Var | Vad |
|---|---|
| Uppe till vänster | **✕ Stäng** och **☰ Innehåll**. Innehåll är förteckningen med "← du är här" och inställningarna. |
| Nere till vänster | Sidpositionen ("Sida 7–8 av 14"). Efter ett hopp visas också **↩ Tillbaka till sida x**. |
| Uppe till höger | En liten nivåknapp ("Standard ▾") med de andra nivåerna. Vid byte hamnar eleven i samma avsnitt. |
| Under boken | En tunn lägesremsa, en markering per sida grupperad per avsnitt. Den går inte att klicka på. |
| Bredvid boken | Dämpade bläddringspilar. |

- **Omslaget** står först i boken, före innehållsförteckningen. Det är byggt som omslaget i musikvideorna (se
  *Kapitlets omslag*). På dator står omslaget ensamt som högersida, alltså en stängd bok, och → vänder det som ett
  blad så att sida 1–2 öppnas. På mobilen fyller omslaget sidan.
  - Boken öppnas på omslaget första gången.
  - Har eleven läst förut öppnas boken där eleven var, som förut.
  - Omslaget nås också genom att bläddra bakåt från sida 1. Sidpositionen säger då "Omslag".
- **Var är jag:** sidhuvudet på varje sida visar avsnittets nummer och namn, och sidnumret står i det yttre hörnet.
- **Bläddra** med pilarna, ← och → (och PageUp/PageDown, Home/End) eller genom att svepa. Home går till
  innehållsförteckningen (sida 1), inte till omslaget. Klick i innehållsförteckningen hoppar.
- **Bladvändning** (På, standard / Av): vid bläddring vänds ett blad på 0,34 s, på ett uppslag runt ryggen från
  höger till vänster (bakåt tvärtom), på mobilen lyfts sidan runt sin vänsterkant. Ett hopp (innehållet, en länk,
  Home/End, Tillbaka) vänder inget blad, bara en kort glidning på 0,17 s. *Av* och minskad rörelse i datorns
  inställningar: direkt sidbyte. Läsningen väntar aldrig: det nya uppslaget står i scenen direkt, och vändningen
  spelas i ett lager ovanpå. En ny vändning medan en pågår gör den pågående klar direkt – aldrig en kö.
  - Modellen kommer ur filmernas bok (`1800-talet/verktyg/bok.py`, `turn_frame`): perspektiv (≈ 5 sidbredder,
    som filmens kamera; 8 på en enkel sida), mjuk start och slut, skugga på sidan under bladet och ett blad som
    mörknar när det står på högkant. Här i CSS 3D (`rotateY`, `perspective`, `backface-visibility`) med Web
    Animations, utan bibliotek (`vandBlad` i `bok.js`, `.blad-*` i `bok.css`).
  - De gamla sidornas egna element flyttas in i lagret; den nya sidan på bladet är en kopia utan id. Lagret tar
    inga klick och klipps vid scenens kant.
- **Inställningar** (under Innehåll):
  - *Bladvändning:* På / Av (den som hade valt Snabb får På, Direkt blir Av).
  - *Boken öppnas:* I helskärm / I fönstret.
  - *Sidnummer och remsa:* Syns alltid / Vid musrörelse. Med *Vid musrörelse* tonar reglagen bort efter 2,5 s,
    som kontrollerna i en videospelare. Sidhuvudet med sidnumret ligger alltid kvar på papperet.
- **Esc** stänger det översta först: ett öppet hjälpmedel, nivålistan eller menyn. Först därefter stänger Esc boken.
  I helskärm tar webbläsaren själv Esc och lämnar helskärmen, och det räknas som samma Esc.
- **Mobil** (smalare än 600 px) är inte målskärm men fungerar. Där finns en list med Stäng, nivå och Innehåll
  överst, och bläddringen längst ner.

**Texten flödar.** Innehållet är en ström av block (rubriker, stycken, figurer …), och motorn bryter sidorna efter
sidans mått, när boken öppnas och när fönstret ändrar storlek (se *Brytningen*). Sidnumren beror därför på skärmen –
också på samma Chromebook i fönstret och i helskärm – och används inte i undervisningen: hänvisa till rubrikerna.
Adressen pekar på en rubrik (`#atomen/periodiska-systemet-2`), och boken minns läsplatsen som ett block, så den
stämmer på dator, i helskärm och på mobil.

## Målskärmen: Chromebook 13–14 tum

Golvet är **1366 × 768**. I webbläsaren återstår ungefär 1366 × 633. Textstorleken följer sidans höjd och format
och ändras aldrig för att något ska få plats: motorn bryter i stället sidan.

| På en Chromebook med 1366 × 768 | Text |
|---|---|
| Boken i fönstret (1366 × 633) | 19,9 px |
| Boken i helskärm (1366 × 768) | 22,7 px |

En 14-tums Chromebook med 1920 × 1080 och 125 % skalning (1536 × 730 i webbläsaren) ger ungefär 23 px. Mobil har
fast 16,5 px.

## Mappar

```
Fysik/
  README.md                     den här filen
  bokskal/                      MOTORN – fryst, delas av alla delkapitel
    bok.js                      hubben (avsnittssidan), böckerna, sidor, bläddring, nivåer, hjälpmedel, kontrolläget
    bok.css                     papper, typografi, hubben (geografins regler i fysikens färger), reglagen
    figurer.js                  de funktionella figurerna (SVG), specificerade i data, och omslagsmotiven
    typsnitt/                   EB Garamond, Marcellus SC och Marcellus (OFL; Marcellus bara på omslaget)
  mall/delkapitel/              mallen för ett nytt delkapitel (kopieras hel)
  index.html                    startsidan: kapitlen I–III (II tonat "Kommer"), Nästa steg med Matematiken i fysiken,
                                Översikt
  materia_och_universum/        kapitel I (arbetsorder 9, 2026-11-07)
    index.html                  kapitelindexet: avsnittssidorna I–V (II–V tonade) och resurskorten
    kapitel.js                  omslaget: överraden "Kapitel 1", titeln, motivet materia-och-universum
    solsystemet_och_jorden/     avsnittssida I. Solsystemet och jorden, texterna solsystemet/, himlakroppar/,
                                jordklotet/, dygn-manad-ar-arstider/ (A–D) och fyra djupdykningar
  kraft_och_rorelse/            ett arbetsområde (kapitel III)
    index.html                  kapitelindexet: avsnittssidorna I–VI och resurskorten (tonade tills de finns)
    kapitel.js                  kapitlets gemensamma data: omslaget (överrad, titel, illustration, upphov)
    atomen_repetition/          avsnittssida I. Repetition – ett delkapitel, bara data
      index.html                mallen, ordagrant
      delkapitel.js             nummer, titel, undertitel, texter, hjälpmedel
      innehall/atomen/          text A: en bok per nivå (enkel.js, standard.js, fordjupning.js)
      innehall/joner-isotoper-bindningar/   text B
    materia_repetition/         avsnittssida II. Repetition, texterna materia/, densitet-och-varme/, varmespridning/
    rorelse_och_kraft/          avsnittssida III. Rörelse och kraft, texterna rorelse/, kraft-och-friktion/,
                                kraft-och-motkraft/ och tyngdkraften/ (A–D, strömformatet); fotona i bilder/;
                                Nästa steg i innehall/nasta-steg/ (textboken och övningsboken)
    fall_kast_och_balans/       avsnittssida IV. Fall, kast och balans (arbetsorder 12): text A resulterande-kraft/
                                B fritt-fall/ (2026-11-11), C kastrorelse/ (arbetsorder 16) och D tyngdpunkt-och-balans/
                                ("Tyngdpunkt, balans och kroppen", arbetsorder 17), tre nivåer var
  Arkiv/                        gamla versioner (materia_repetition: utkastet från 2026-10-29)
  nasta_steg/                   Nästa steg (arbetsorder 11)
    matematiken_i_fysiken/      Matematiken i fysiken: en sida med bara boken (startsidan länkar dit)
  kallor/                       Joachims källor, oförändrade: kap1/ (texterna och djupdykningarna), kap3/ (djupdykningarna),
                                nasta-steg/ (textboken, övningsboken, Matematiken i fysiken); kap3/ också IV A (order 12)
                                och IV B (Fritt fall v2, skriven av Claude 2026-11-11)
  verktyg/
    bok-grind.js                verifieringen (se nedan)
    kap1-omvandlare.js          kapitel 1: källorna → innehall/ (se Kontrollera: Källorna och omvandlarna)
    nasta-steg-omvandlare.js    Nästa steg och Matematiken i fysiken: källorna → böckernas filer
    kap3-omvandlare.js          Kraft och rörelse IV A och B (--text b): källan (tre nivåer) → innehall/
                                (figurerna i kap3-figurer.js och kap3-figurer-b.js)
    ordagrant.js                innehållet ordagrant mot källorna (kapitel 1, Nästa steg, IV A och B)
    bilder/                     skärmbilder: grind/ (--bilder) och en mapp per arbete
    provbok/                    provdata för grinden, med texter (en bok per text) – inte elevinnehåll
    provkapitel.js              provbokens kapitel: ett omslag med en titel på två rader
    provbok-utan-texter/        provdata utan texter och utan kapitel (inget omslag): läget som förut
```

Allt fungerar från disken (file://), utan server. Dubbelklicka på ett delkapitels `index.html`.

- `index.html#atomen/periodiska-systemet-2` öppnar boken vid den rubriken (utan texter: `#periodiska-systemet-2`).
  Adressen följer med när eleven bläddrar och pekar på sidans rubrik.
- `index.html?niva=enkel` väljer nivå, och `index.html?text=atomen` väljer text när texterna är egna böcker.
- `index.html?kontroll` visar kontrollpanelen (se *Kontrollera*).

## Lägga till ett delkapitel

1. Kopiera hela `mall/delkapitel/` till `<arbetsområde>/<delkapitel>/`, till exempel
   `kraft_och_rorelse/tryck/`. Mappdjupet ska vara två steg under `Fysik/`, eftersom motorn laddas med `../../bokskal/`.
2. **Ändra aldrig `index.html`.** Den är mallen ordagrant, och grinden prövar det.
3. Fyll i `delkapitel.js`:

```js
Bok.delkapitel({
  id: 'fysik-kraft-tryck',            // unikt; nyckeln för det eleven sparat – byt det aldrig sedan
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },   // brödsmulorna: startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }],   // och kapitelindexet
  nummer: 2,                          // brödsmulan "2. Tryck" och etiketten "Avsnitt II"
  titel: 'Tryck',
  undertitel: null,                   // bannerns rad, utan tankstreck: 'materia, densitet och värme'
  overrad: 'Fysik · Kraft och rörelse',     // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',           // kapitlets omslag (se Kapitlets omslag); utan raden inget omslag
  hjalpmedel: { forelasning: { href: null }, ova: { href: null }, sjalvskattning: { href: null },
                begreppslista: { href: null }, elevbok: { href: null } }
});
```

   Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning) och skrivs inte ut, utom när en nivå läggs
   till (se nedan). Fliksidans titel blir "Fysik – Kraft och rörelse – 2. Tryck", som i de andra böckerna.
4. Skriv texten i `innehall/<nivå>.js` (se *Skriva en nivås bok*). Bokens numrerade avsnitt blir texterna A, B, C …
   på delkapitlets sida. Ska varje text vara en egen bok: se *En bok per text*.
5. Byt avsnittssidans tonade kort i kapitelindexet (`<arbetsområde>/index.html`) mot en länk,
   `<a class="kapitel-kort" href="<delkapitel>/index.html">`, som de som redan finns.
6. Kör grinden: `node verktyg/bok-grind.js`. Den hittar det nya delkapitlet av sig själv.

**Elevtext:** all text som eleven läser är data. Titel och undertitel sätter Joachim, så skriv aldrig en beskrivning
själv.

## En bok per text

Avsnittssidan har texterna A, B … (som geografins *I. Näringslivet* med texterna A–D). Med `texter` i
`delkapitel.js` är **varje text en egen bok** per nivå, med egen innehållsförteckning:

```js
texter: [
  { id: 'atomen', titel: 'Atomen' },                                   // text A
  { id: 'joner-isotoper-bindningar', titel: 'Joner, isotoper och bindningar' }   // text B
],
```

```
innehall/atomen/enkel.js                       Bok.niva('enkel', { avsnitt: [] })  – tom: "kommer"
innehall/atomen/standard.js                    Bok.niva('standard', {...})          – som en vanlig nivås bok
innehall/atomen/fordjupning.js
innehall/joner-isotoper-bindningar/standard.js …
```

- Filerna skrivs precis som en vanlig nivås bok (*Skriva en nivås bok*): Inledning, numrerade avsnitt, Sammanfattning.
- **`id`** (a–z, 0–9, -) är mappens namn och nyckeln för det eleven sparat. Byt det aldrig sedan.
- Varje text och nivå har en fil, också en tom. En nivå kan finnas för text A och vara "kommer" för text B. Då öppnas
  B på en nivå den har. En text utan innehåll på någon nivå är tonad och "kommer".
- Varje text minns sin läsplats. Den text eleven läste senast är markerad.
- Utan `texter` är allt som förut: en bok per nivå i `innehall/<nivå>.js`, och texterna är dess avsnitt. Det eleven
  sparat ligger kvar.
- Är en text för lång för en bok (innehållsförteckningen får inte plats på sida 1) blir den två texter.

## Kapitlets omslag

Varje bok börjar med ett omslag som i musikvideorna. Omslaget är ritat ur filmernas omslag (`closed_book_fysik` och
fysiktemat i `1800-talet/verktyg/bok.py`, som bara har lästs) och har samma mått, färger och typsnitt:
- **Bandet:** midnattsblått, med prägling i koppar. Präglingen omfattar ramen, hörnprickarna, överraden, titeln och
  linjen.
- **Rutnät och skala:** ljusblå.
- **Undertiteln:** i ljust tryck.
- **Längst ned:** motivet och upphovet.
- **Typsnitt:** Marcellus SC till överraden och titeln, Marcellus till undertiteln och upphovet.

Det är ingen rasterbild. Allt är SVG, 1036 enheter högt (filmens pixlar), och bredden följer sidans form. Filmens
tygstruktur är inte med.

Det som är gemensamt för delkapitlen står i kapitlets `kapitel.js`:

```js
Bok.kapitel({
  overrad: 'NO – Fysik',                // i kapitäler: NO – FYSIK
  titel: 'Kraft och rörelse',
  illustration: 'kraft-och-rorelse',    // motivet: Bok.illustration i bokskal/figurer.js
  upphov: { namn: 'Joachim Björkman', ar: 2026 }
});
```

Varje delkapitel läser filen med `kapitel: '../kapitel.js'` i `delkapitel.js`. Mallen `index.html` ändras inte.

- **Undertiteln** är textens namn ur `texter`, till exempel "Kraft och motkraft".
- **En egen undertitel:** sätt `omslag: { undertitel: 'Repetition: {text}' }` i `delkapitel.js`. `{text}` blir textens
  namn, till exempel "Repetition: Atomen". Repetition I och II gör så.
- **Titeln** står helst på en rad. Ryms den inte delas den på två balanserade rader, som i filmen, och så blir det
  på mobilen.
- **Undertiteln** står på en rad, eller på två om den inte ryms, och då helst efter ett kolon.
- **Motivet** krymper på ett smalare omslag.
- **Ett nytt kapitel** behöver ett nytt motiv: en ny `Bok.illustration` i `figurer.js`. Det är ett motorarbete, som
  en ny figurtyp.
- **Utan `kapitel`** har boken inget omslag, och allt är som förut.
- **Sidnumren påverkas inte.** Omslaget är sida 0, utanför brytningen. Innehållsförteckningen är fortfarande sida 1,
  så sidnumren, uppslagen och läsplatserna är desamma som utan omslag.
- **Adressen** till omslaget är `#<text>/omslag`.

## Lägga till en nivå

Varje nivå är en **självbärande bok** i sin egen fil, `innehall/<id>.js`. Den har egen innehållsförteckning och egna
sidor, och eleven läser den utan de andra nivåerna.

- **Ge en tom nivå innehåll:** skriv avsnitt i dess fil, som nu är `Bok.niva('enkel', { avsnitt: [] })`. Statusen
  härleds ur innehållet: med avsnitt blir nivån valbar, och utan avsnitt är den "kommer". Statusen skrivs aldrig för
  hand.
- **En ny sorts nivå** (provboken prövar det med *Extranivå*). Djupdykningar är ingen nivå, se *Djupdykningar*.
  - Skriv ut hela listan `nivaer` i `delkapitel.js`, de tre plattformsnivåerna och den nya:
    `[{ id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }, { id: 'extra', namn: 'Extranivå' }]`.
  - Skapa `innehall/extra.js` med `Bok.niva('extra', {...})`.

  Ordningen i `nivaer` är ordningen i nivåvalet. `ikon` står före namnet på nivåknappen.

## Djupdykningar

Djupdykningarna hör till **avsnittssidan**, inte till en text, och de är **ingen nivå**. De står längst ned på
avsnittssidan i plattformens sektion *Vill du veta mer?*, med ett kort per djupdykning. Ett tryck öppnar
djupdykningen som en egen bok, oavsett vilken text eller nivå eleven har valt. Joachims beslut 2026-11-05.

```js
djupdykningar: [
  { id: 'galileo', titel: 'Galileo mot Aristoteles – hur tröghetslagen upptäcktes', fil: 'innehall/djupdykningar/galileo.js' }
]
```

- **Filen** anropar `Bok.niva('djupdykning', {...})` och är skriven i strömformatet som texterna.
- **Boken** har en enda nivå och ingen nivåväljare.
  - Omslaget har överraden *Djupdykning* och djupdykningens titel som undertitel. Förteckningen har titeln.
  - Boken har ingen Sammanfattning och inget länkblock, och kontrolläget varnar inte för det.
- **Läsplatsen** är egen per djupdykning (nyckeln `djupdykning-<id>:djupdykning:plats`).
- **Adressen** är `#djupdykning-<id>/<rubrik>`.
- **Elevens val ändras inte:** en djupdykning byter varken elevens text eller nivå, och när den stängs gäller de igen.
- **Korten** visar bara titeln, utan ikon och sammanfattning (Joachims val). Stilen är plattformens
  (`.vill-veta-mer`, `.fordj-kort` ur geografi.css).
- **Id:t** är nyckeln för det eleven sparat. Byt det aldrig.
- **Avsnittens `id`** ska vara desamma på alla nivåer som har avsnittet. Det är så nivåbytet hittar rätt ställe.
  Ett avsnitt som bara finns på en nivå får ett eget id.
- **Varje nivå i `nivaer` har en fil,** också en tom (med texter: en per text). Saknas filen säger kontrolläget till.

## Fristående böcker: Nästa steg, övningsböcker och stödböcker

Djupdykningarna är ett av fyra slag fristående böcker (arbetsorder 11, 2026-11-07). Alla fungerar som djupdykningarna
ovan: en bok utan nivåer, med egen läsplats och adress, och elevens text och nivå ändras inte.

| Lista i `delkapitel.js` | Var kortet står | Nivå i filen | Adress | Omslagets överrad |
|---|---|---|---|---|
| `djupdykningar` | *Vill du veta mer?* längst ned i Läs | `djupdykning` | `#djupdykning-<id>/…` | Djupdykning |
| `nastaSteg` | blocket *Nästa steg – gymnasiets fysik* under djupdykningarna | `nasta-steg` | `#nasta-<id>/…` | Nästa steg |
| `ovningsbocker` | fliken Öva, som då går att välja också utan hjälpmedlets adress | `ovningsbok` | `#ovning-<id>/…` | Nästa steg |
| `stodbocker` | inget kort, om inte `kort: true` (då i Läs, utan rubrik) | `stodbok` | `#stod-<id>/…` | inget omslag |

- **Posten:** `{ id, titel, fil, kort? }`. `fil` får ligga i ett annat delkapitel (`../../…`). Då finns boken på båda
  sidorna, med var sin läsplats.
  - Ett fotos adress (`bildpilar: bild`) räknas då från bokens egen avsnittssida (2026-11-11). Djupdykningen om
    Galileo på IV visar curlingfotot ur `rorelse_och_kraft/bilder/`.
- **`kort: false`:** boken har inget kort, och den finns bara som mål för länkar från en annan bok.
- **Länkar mellan böckerna** på samma avsnittssida:
  - `{typ: 'bokref', etikett, lankar: [{text, bok, ankare}]}` är en liten rad, till exempel "Matematik du behöver:"
    följd av länkar. En post utan `bok` blir text utan länk.
  - `{typ: 'boklank', bok}` är en länk med bokens titel.
  - `[text](#bok/ankare)` i en text (2026-11-11) gör orden till en länk i löptexten, till exempel
    `[Du kan läsa mer om Galileo i djupdykningen om honom.](#djupdykning-galileo)` i IV B. Utan ankare öppnas boken
    där eleven var. Kontrolläget säger till om boken eller ankaret inte finns. Provkroken
    `?kontroll&prova=textlank-fel` låter länken gå till en bok som inte finns.
  - `bok` är bokens adressnamn (`stod-matematiken`) och `ankare` ett avsnitts id.
  - Länken öppnar den andra boken vid avsnittet. "↩ Tillbaka till <boken>" leder tillbaka dit eleven var.
  - `?kontroll` säger till om boken eller avsnittet inte finns.
- **Bara bokens namn i adressen** (`index.html#nasta-<id>`, från startsidan): boken öppnas där eleven var, annars
  på omslaget.
- **En sida för bara fristående böcker:** `nivaer: []` och `flikar: false` (Matematiken i fysiken). Den har inga
  texter, nivåer eller flikrad, bara bannern och korten. Grinden prövar den med ett eget scenario.

## Skriva en nivås bok

Strömformatet (sedan 2026-11-02): ett avsnitt är en ström av block, utan sidor. Källfilens `###` blir en `rubrik`.

```js
Bok.niva('standard', {
  avsnitt: [
    { id: 'densitet', titel: 'Densitet', block: [
      { typ: 'rubrik', text: 'Densitet beskriver hur stor massa ett ämne har per volym' },
      { typ: 'text', text: '*Densitet* talar om …' },
      { typ: 'formel', uttryck: 'ρ = [[m|V]]', forklaring: [['ρ', 'densitet'], ['m', 'massa'], ['V', 'volym']] },
      { typ: 'rubrik', text: 'Föremål med lägre medeldensitet än vätskan flyter' },
      …,
      { typ: 'sidbrytning' },                               // valfritt: nästa block börjar ny sida
      …,
      { typ: 'lank', till: ['ova', 'sjalvskattning'] }      // sist i det sista numrerade avsnittet (och i Sammanfattningen)
    ] }
  ]
});
```

- **Avsnitt:** `{id, titel, block}`. `numrerad: false` ger ett avsnitt utan nummer (Inledning, Sammanfattning), och
  `kort` ger ett kortare namn i sidhuvudet. Numreringen, förteckningen, remsan och sidnumren räknas av sig själva.
- **Avsnitten är huvudrubrikerna** (Joachims beslut 2026-11-04): som i en tryckt bok står bara de i
  innehållsförteckningen – Inledning, de numrerade avsnitten och Sammanfattning. Varje text delas i 2–3 numrerade
  avsnitt. Fördjupning får ha ett avsnitt som de andra nivåerna saknar; nivåbytet därifrån går till det närmaste
  föregående avsnitt som finns på den nya nivån.
- **`rubrik`** är påståenderubriken: den står i texten och i adressen (inte i innehållsförteckningen). **`underrubrik`** är en liten
  rubrik inne i texten (som "Det här repeterar du").
- **Det äldre sidformatet** (`sidor: [{titel, block}]`, Repetition I och II) läses fortfarande: sidans titel blir en
  rubrik, sidor i följd med samma titel (en tät sida som delades för hand) slås ihop, och `{typ: 'rubrik'}` inne på en
  sida är en underrubrik. Sidbrytningen räknas ut på samma sätt.
- **Dela aldrig en sida för hand och krymp aldrig texten.** Motorn bryter sidorna; `?kontroll` säger till om något
  inte går (se *Brytningen*).

## Brytningen

Motorn mäter alla block i sidans bredd i ett enda layoutvarv och packar dem sedan på sidor. Reglerna:

- **Ingen sida slutar med en rubrik** – rubriken följer med nästa block.
- **Ett stycke delas inte.** Är ett ensamt stycke högre än en hel sida kan sidan rullas, och `?kontroll` säger till.
- **En figur, formel eller ett exempel står på samma sida som stycket före.** Ryms de inte tillsammans på en sida –
  eller skulle sidan före stycket då bli tunn (under 40 %) – stannar stycket och figuren står först på nästa sida.
  Figuren delas aldrig. Nära 40 %-gränsen avgör en riktig sida, samma mätning som kontrollen av tunna sidor.
- **Inledning, huvudtext och Sammanfattning** (varje avsnitt) börjar på ny sida, inte nödvändigtvis nytt uppslag.
- **Mjuk idéregel:** en rubrik börjar ny sida om mindre än en tredjedel av sidan är kvar.
- **`{typ: 'sidbrytning'}`** tvingar ny sida.
- **Ingen sida under 40 %** fylld, utom sista sidan i ett avsnitt, sidan före en sidbrytning och sidan som ett stycke
  lämnade för att följa sin figur (uppslagsregeln nedan) (`?kontroll`).
- **Balansen:** sidorna packas en i taget, så en sida blir tunn när nästa grupp inte får plats. Då tar den tunna sidan
  den sista gruppen (rubriken och dess stycke) från sidan före, om gruppen ryms och sidan före inte själv blir tunn.
  En grupp efter en sidbrytning eller en delad figur flyttas inte. (2026-11-03: Rörelse, Fördjupning, där sida 4
  annars blev 40 % fylld.) Sidan före en sidbrytning lämnas. Sidan före en figur som skilts från sitt stycke
  balanseras som andra sidor (2026-11-05: de staplade hissarna på mobilen).
- **Balansen ångrar en 40 %-delning som inte längre behövs (kantfallet, 2026-11-07).** 40 %-regeln delar när sidan
  före stycket är tunn just då. Fyller balansen sedan den sidan, flyttas stycket till figuren igen om det ryms där.
  Förut stod de kvar isär, och kontrollen sa "figur står skild från stycket före, fast de ryms tillsammans".
- **Uppslagsregeln (datorn, Joachims beslut 2026-11-07, order 8):** en figur står på samma uppslag som stycket
  före den. Stycket på vänstersidan och figuren på högersidan går bra. Hamnar stycket på en högersida och figuren
  först på nästa uppslag gäller detta:
  - **Stycket följer** och rubrikerna före det med figuren till nästa sida. Figuren vid stycket går före
    40 %-regeln: sidan som blir kvar får vara tunn, och balansen försöker sedan fylla den.
  - **Står stycket först på sin sida** (efter rubrikerna) kan det inte flyttas utan att sidan blir tom. Då står det
    som förut: ett undantag, som `?kontroll` och grinden varnar för.

  Ett första steg som krympte figuren högst 15 % togs bort samma dag. Det löste 0 av 15 fall och kunde ge text
  under 14 px (Joachims beslut).

  Mobilen (en sida i taget) har inga flyttar för den här regelns skull. Där varnar `?kontroll` och grinden för en
  figur på en annan sida än stycket. Avsnittet packas om tills inget fall återstår.
- **Formeln följer samma regel som figuren** (arbetsorder 11). Den står med stycket före och på samma uppslag som
  det.
- **EXEMPEL-rutan** (arbetsorder 11):
  - Ett exempel som ryms på en sida står helt på en sida. Det ryms då alltid på ett uppslag.
  - Ett exempel som är högre än sidan bryts, men bara mellan raderna. Raden Svar står i samma grupp som raden före
    och står därför aldrig ensam på en ny sida.
  - **40 %-regeln väger tyngre än att hålla exemplet helt (arbetsorder 13, 2026-11-08).** Ett exempel som ryms på en
    sida, men inte efter det som redan står på sidan, delas mellan raderna om sidan annars blir under 40 % fylld. Så
    många rader som ryms stannar, och resten börjar nästa sida. Exemplet delas aldrig före raden Svar och aldrig mitt
    i ett mellanled. Ett mellanled är en rad i samma stycke (utan tom rad före) som antingen är en uträkning (börjar
    inte med versal, eller börjar som "x = …") eller följer en rad som slutar med kolon (`bundenRad` i `bok.js`).
    Finns ingen tillåten plats står exemplet helt på nästa sida, som förut. Nära 40 %-gränsen avgör en riktig sida.
    Regeln gäller bara där en konflikt finns kvar: avsnittet packas först som förut, och först om en sida står kvar
    tunn efter balansen och nästa sida börjar med ett helt exempel packas avsnittet om med det exemplet delbart. (Den
    första versionen delade redan under packningen och delade då två exempel i textboken v3 där balansen ändå hade
    fyllt sidan.) Ingen riktig bok i dag (med textboken v3) bryts annorlunda än förut, enligt `brytning-jamfor`.
  - `?kontroll` och grindens mätning på skärmen godtar ett delat exempel som ryms bara när det som står före det på
    sidan (utan rubrikerna före exemplet) är under 40 %, och aldrig en delning mitt i ett mellanled. Provboken (Nästa
    steg) har avsnittet *Provexempel efter ett kort stycke*, där regeln delar exemplet i alla lägen. Negativa prov:
    `exempel delat i ett mellanled` (`?kontroll&prova=exempel-mellanled`) och `exempel helt fast sidan blir tunn`
    (`?kontroll&prova=exempel-helt`, regeln avstängd).
  - Exemplet följer inte med stycket före.
- **PROVA-rutan** delas aldrig.
- **Kontrollen:** `?kontroll` (brytningsreglerna) och grindens mätning på skärmen säger till om en regel bryts.

Brytningen väntar på typsnitten (annars mäts fel), sparas per sidmått och görs om bara när sidmåttet ändras. Den
tar ungefär 5–50 ms med CPU:n strypt 6 gånger, som på en Chromebook, och 50–140 ms för Nästa steg-böckerna (grinden:
medianen under 200 ms). Innehållsförteckningen räknar ut sidnumren för rubrikerna och krymper fortfarande sin egen
text (ned till 70 %) om den behöver.

**Snabbare brytning (2026-11-08).** Nästan all tid går åt till att webbläsaren lägger ut texten, och den formas om
varje gång ett block flyttas. Tre ändringar, utan att någon sida bryts annorlunda (`verktyg/brytning-jamfor.js`):
- Spalten där blocken mäts tas bort direkt efter mätningen. Förut låg den kvar, så att varje provad sida lade ut hela
  spalten igen.
- Elevens brytning provar inte längre en nästan full sida i en riktig sida. I alla böcker och lägen (10 202 provade
  sidor) var räkningen och den riktiga sidan överens om vad som får plats, och en nästan full sidas fyllnad används inte
  i elevens brytning. Nära 40 %-gränsen avgör fortfarande en riktig sida. Kontrolläget provar varje sida och kräver att
  elevens brytning blir densamma, så ett fel i räkningen ger rött i grinden.
- Innehållsförteckningen anpassas bara i kontrollägets brytning. Elevens brytning använder inte det måttet, och sidan
  anpassas ändå när den visas.

Med textboken v4 gick Nästa steg-textboken från cirka 250 till 140 ms, övningsboken från 105 till 50 ms och
Matematiken i fysiken från 130 till 80 ms. Mätningen visade också att den riktiga sidan har cirka 5 px mer plats än
räkningen tror (fyllnaden skiljer cirka 1 %). Det ändrar inget här, men räkningen är försiktig.
- **I texten:**
  - `*begrepp*` blir betonat, i djupblått som i filmerna.
  - `*atomer|atom*` skriver begreppet böjt men länkar till grundformen.
  - `[[m|V]]` blir ett bråk.
  - `<sub>2</sub>` och `<sup>3</sup>` ger index. Annan HTML visas som text.
  - Tal och enhet hålls ihop: mellanslaget mellan ett tal och en enhet efter det (`10 N`, `1 538 °C`, `5 m/s`,
    `18 km/h`) och tusentalsmellanslaget (`1 538`) blir hårda (U+00A0) när texten ritas, så att raden aldrig bryts
    där. Skriv vanliga mellanslag i källfilerna. Enheterna står i `ENHETER` i `bok.js`.
  - `*ord*` är alltid ett begrepp. Vill man bara betona ett ord blir det vanlig text.
  - `F_N`, `μ_vila` och `ρ_is` är index: det som står efter understrecket blir nedsänkt (arbetsorder 11). Bara
    bokstäver och siffror räknas till indexet.

| Block | Fält |
|---|---|
| `rubrik` | `text` |
| `text` | `text` (brödtext) |
| `punkter` | `punkter: [...]`. En lista med flera punkter blir en post per punkt (`punktdel`), som hålls ihop som en grupp: den står hel på en sida om den ryms och delas bara mellan två punkter om den inte gör det (arbetsorder 16). Marginalerna är desamma som i en hel lista. Den första punkten har listans id. |
| `figur` | `namn`, figurens data, `bildtext?`, `beskrivning?` (se *Figurer*) |
| `lank` | `till: ['ova', 'sjalvskattning', …]`: länk till plattformens hjälpmedel (se *Hjälpmedel*) |
| `ruta` | `rubrik?`, `text` eller `punkter`, `stil: 'definition'` för en större definitionsruta |
| `jamforelse` | `kolumner: [{rubrik, punkter}]`: två spalter sida vid sida |
| `formel` | `uttryck`, `forklaring: [[tecken, betydelse], …]` bredvid, eller `forklaring: 'text'` under, i mindre stil. Med text står uttrycket alltid på en rad och krymper om spalten är smal. |
| `exempel` | `rubrik?` (standard "Exempel"), `rader: [...]` |
| `exempel` (Nästa steg) | `rubrik`, `stycken: [[rad, …], …]`. Rutan heter "Exempel: rubrik" och har en post per rad, så den kan brytas mellan raderna. Givet, Sökt, Lösning och Svar står i fetstil, och raderna i ett stycke står tätt. |
| `prova` | `rader: [...]`: rutan "Prova själv". Den delas aldrig. |
| `rader` | `rader: [...]`: rader i följd (mellanled), var och en på sin rad. Mellanrummen står kvar. |
| `numrerad` | `punkter: [...]`: en numrerad lista (en stegplan) |
| `bokref`, `boklank` | länkar till en annan bok, se *Fristående böcker* |
| `vidare` | `lankar: [{text, bok, ankare}]`: rutan "Vill du gå vidare?" sist i en Fördjupningsbok (arbetsorder 13). Rubriken och inledningen ("Läs mer i Nästa steg – gymnasiets kraft och rörelse:") är motorns. Länkarna skrivs av `verktyg/vidare-rutor.js`, och kontrolläget prövar att varje länk går till ett avsnitts början med det numret och den titeln. |
| `tabell` | `rubriker?`, `rader: [[...]]`, `fotnot?`. Första kolumnen är radrubrik. |

Ett block får ett eget `id` om det som eleven gör i det ska överleva att block flyttas (för interaktiva block senare).
Utan eget id heter blocket `<avsnitt>-b<n>` (det n:te blocket), och läsplatsen sparas så. Rubrikernas adresser heter
`<avsnitt>-<n>` (den n:te rubriken). Ett eget id får inte vara samma som en adress, eftersom läsplatsen då pekar på
rubriken. Kontrolläget säger till om det händer.

## Figurer

Bara **funktionella figurer**, där en riktning eller ett läge bär betydelsen. Inga dekorativa symboler. Figuren
specificeras i data och ritas av motorn, som räknar ut lägen och riktningar:

```js
{ typ: 'figur', namn: 'flyter_sjunker',
  vatska: { namn: 'Vatten', densitet: 1.0 },
  foremal: [ { namn: 'Trä', densitet: 0.5, ca: true, stil: 'tra' }, { namn: 'Järn', densitet: 7.9, stil: 'jarn' } ],
  bildtext: 'Ju närmare vattnets densitet, desto djupare ligger det som flyter.' }
```

| Figur | Data | Vad motorn räknar ut |
|---|---|---|
| `aggregationsformer` | `exempel?: ['is', 'vatten', 'vattenånga']`, `overgangar?: true` | partikelbilderna och övergångspilarna |
| `flyter_sjunker` | `foremal: [{namn, densitet, ca?, stil?}]` (1–4), `vatska?: {namn, densitet}`, `enhet?` | hur djupt varje föremål ligger: densiteten delad med vätskans; högre densitet ligger på botten. `stil`: `tra`, `is`, `jarn` eller neutral. |
| `varmeflode` | `foremal?: [{namn, temp}, {namn, temp}]`, `sluttemp?`, `efter?`, `slutrad?`, `enhet?` | pilens riktning: från det varmare till det kallare |
| `kraftpilar` | `krafter: [{namn, riktning, storlek}]`, `foremal?: {namn?, form?: 'lada' \| 'boll'}`, `underlag?`, `resultant?`, `enhet?: 'N'`, `varden?: true`, `skala?` | pilarnas längd (proportionell mot storleken) och resultanten. `riktning`: `upp`, `ner`, `vanster`, `hoger` eller grader. `varden: false` ritar längderna men skriver inte ut värdena (”10 N”), inte heller i beskrivningen – för nivåer där newton inte är infört. `skala`: den storlek som får den längsta pilen (annars den största kraften i figuren); samma skala i en serie figurer gör pilarna jämförbara mellan figurerna. |
| `kraftpar` | `satt: 'drag' \| 'knuff'`, `foremal: [{namn}, {namn}]`, `krafter: ['kraften på föremål 1', 'kraften på föremål 2']`, `storlek?`, `enhet?: 'N'`, `varden?: true` | Newtons tredje lag: två föremål (neutrala rektanglar med namn) och en kraft på vardera – lika långa pilar åt motsatt håll, var och en från sitt föremåls mitt. `drag`: ett snöre mellan föremålen, pilarna pekar mot det andra föremålet. `knuff`: föremålen ligger an mot varandra, pilarna pekar ifrån varandra. Under varje pil står vilket föremål kraften verkar på; med `storlek` står värdet över pilarna. |
| `skalmodell` | `atomer: [{namn, protoner, skal: [2, 8, …], neutroner?, symbol?}]` (1–3), `overgang?: 'tar upp 2 elektroner'`, `rader?` | laddningen (protoner − elektroner), formeln (O²⁻), masstalet, och vilka elektroner som flyttar vid en övergång (markerade i guld). Med `neutroner` och högst fyra kärnpartiklar ritas protoner och neutroner i kärnan (isotoper). |
| `rorelsespar` | `rorelse: 'likformig' \| 'olikformig' \| 'accelererande' \| 'retarderad'`, `prickar?: 6` (4–8), `tider?: false` | prickmodellen: lika lång tid mellan prickarna, och prickarnas lägen. Likformig: lika stora avstånd. Accelererande: avstånden växer jämnt (1, 2, 3 …). Retarderad: avstånden krymper jämnt, och de två sista ligger nästan ihop. Olikformig: ett fast ojämnt mönster (kort, långt, mellan …). Under prickarna står en stråle med pilspets åt höger (rörelseriktningen). `tider: true` skriver 0 s, 1 s … under prickarna. Figuren är låg och bred. |
| `friktion` | `foremal?: 'Block'`, `underlag?: 'Bord'`, `pilar?: true`, `ytor?: 'normal' \| 'grov' \| 'slat'` | ytorna i förstoring. Överst "Så ser det ut": blocket på bordslinjen och kontaktytan i en streckad ruta. Nederst "I förstoring": blockets undersida och bordets yta med oregelbundna toppar och gropar som hakar i varandra (samma mönster varje gång; `ytor` avgör hur ojämnt), i olika dämpade färger. Strecklinjerna från rutan går till förstoringens hörn och korsar aldrig rubrikerna. Pilarna verkar på blocket: draget framåt och friktionen bakåt, lika långa; `pilar: false` ritar bara ytorna. Med andra namn än Block och Bord blir beskrivningen enklare ("Låda på hylla.") – skriv gärna en egen. **`paneler: [{rubrik, foremal, underlag, ytor}]`** (2–3): bara förstoringarna, bredvid varandra med en rubrik var och inga pilar (III B Djupdykning: däcket mot torr asfalt och mot blank is); grinden prövar att ytorna ligger an i varje panel. |
| `lutande_plan` | `steg?: 3` (1–3), `bildtext?`, `beskrivning?` | Galileos tankeexperiment i tre steg under varandra, med en kort rubrik per steg: *Lika branta* (kulan släpps högt upp till vänster och når nästan samma höjd till höger), *Flackare* (kulan rullar längre för att nå samma höjd) och *Vågrätt* (kulan når aldrig höjden: ett rörelsespår med lika långa avstånd och en stråle åt höger). Starthöjden är en streckad linje i guld, planen har sandfärg och kulan där den stannar är tonad. Beskrivningen skrivs av motorn om den inte står i data. |
| `stoppstracka` | `rader: [{fart, reaktion, broms}]` (1–5), `markering?: {varde, text}`, `enhet?: 'm'`, `bildtext?`, `beskrivning?` | liggande staplar, en rad per fart, varje stapel i två delar: reaktionssträckan (ljust bläck) och bromssträckan (mörkt). Fartens namn till vänster, stoppsträckan (summan) till höger med hårt mellanslag, en gemensam skala under staplarna (var tionde enhet upp till den längsta stapeln) och förklaringen en gång. `markering`: en streckad lodrät linje genom alla rader med en etikett överst (III B: barnet vid 26 m). Grinden mäter delarna mot värdena (±1 px), totalen och markeringen. |
| `fallande_hiss` | `bildtext?`, `beskrivning?` | två hissar i genomskärning bredvid varandra. *Hissen står still:* kabeln, en person (streckgubbe) på en våg som visar 70 kg, tyngdkraften nedåt och lika stor normalkraft uppåt (kraftpilarnas stil, från en punkt bredvid personen, med namnen) och bollen på golvet. *Hissen faller fritt:* kabeln avklippt, vågen visar 0, bara tyngdkraften, bollen svävar och en stråle utanför korgen visar att hissen faller. Grinden mäter att tyngdkraften är lika lång i båda panelerna och lika lång som normalkraften i den stilla hissen. På mobilen staplas panelerna (se nedan). |
| `jord_och_mane` | `massa`, `tyngd: [jorden, månen]` (N), `vag: [jorden, månen]` (kg), `bildtext?`, `beskrivning?` | två lika stora paneler, *På jorden* och *På månen*, med samma person (streckgubbe som i hissen) på en badrumsvåg. Jorden är grönaktig sand med grön kant, månen grå med två kratrar. Under personen står samma etikett i båda ("massa 60 kg"). Tyngdkraften går från personens tyngdpunkt rakt nedåt, i kraftpilarnas stil, med en gemensam skala: den största tyngden får pilen 96 enheter, så månens pil blir tyngd[1]/tyngd[0] av jordens. Vid pilen står "tyngd 600 N", och vågens display visar `vag`. Grinden mäter pilarnas förhållande (±1 px), att personerna är lika stora och att massan är densamma. På mobilen staplas panelerna (se nedan). |
| `newtons_kanon` | `bildtext?`, `beskrivning?` | jorden, ett alldeles för högt berg upptill med en kanon som skjuter vågrätt, och tre banor i samma pilfärg: *låg fart* landar nära berget, *högre fart* längre bort och *tillräckligt hög fart* går runt hela jorden (streckad cirkel med pil). |
| `bildpilar` | `bild` (adress från delkapitlets sida), `bredd`, `hojd` (fotots pixlar), `utsnitt?: [x, y, b, h]`, `pilar: [{namn, fran: [x, y], till: [x, y], etikett?: [x, y]}]`, `lika?: [[0, 1]]`, `beskrivning` (krävs), `bildtext?`, `maxhojd?: 0.2–0.45`, `prickar?: [[x, y], …]`, `stråle?: {fran, till}` | ett foto med kraftpilar ritade ovanpå. Allt i fotots pixlar. Fotot visar den verkliga situationen; pilarna ritas ur data, så att de alltid blir rätt. Pilarna är röda (#b3261e) med vit kant och en prick i angreppspunkten; etiketten (namnet, mitt på `etikett`, annars över pilens mitt) i samma röda, halvfet med vit kant. `lika`: pilar som ska vara lika långa – motorn vägrar rita annars (högst 1 px skillnad i fotot), och grinden mäter. En pil utanför utsnittet är fel. Fotot görs utan pilar. Figuren får vara upp till 45 % av sidhöjden; `maxhojd` ger en lägre gräns för just den bilden (ett stående foto som annars inte ryms med stycket före, som dynamometern i III D: 0,43). Etiketterna är aldrig mindre än 14 px på skärmen: när fotot skalas ner växer etiketten och pilarnas tjocklek (`passaEtiketter` i `bok.js`), och grinden mäter det i alla lägen. `prickar` är lägesmarkeringar (som i rörelsespåren) i samma röda färg med vit kant, och `stråle` en pil under dem som visar riktningen; med prickar behövs inga pilar. Grinden mäter att prickarna har lika stora avstånd (±1 px) och att allt ligger inom bilden. |
| `diagram_graf` | `diagram: [{rubrik?, x: {storhet, enhet, max, steg?, tal?}, y: {…}, grafer: [{punkter: [[x, y], …], kurva?}], ytor?: [{punkter, ton?: 1 \| 2, namn?, etikett?: [x, y]}], delta?: [{fran, till, dx?, dy?}]}]` (1–3), `bildtext?`, `beskrivning?` | Nästa steg (arbetsorder 11): ett till tre diagram bredvid varandra. Varje diagram har kvadratiskt rutnät (en ruta = `steg`) och axlar med pilspets. Storhet och enhet står vid varje axel ("tid (s)", "läge (m)"), och talen var `tal`:e enhet (utan `tal` inga tal). Graferna är räta linjer mellan punkterna, eller en mjuk kurva genom dem (`kurva: true`), och punkterna markeras. `ytor` (trianglar, rektanglar) skuggas i två ljusa toner (guld, indigo). `delta` ritar streckade Δ-linjer från `fran` vågrätt och sedan lodrätt till `till`, med namnen. En rubrik kan ha flera rader (`['Konstant', 'hastighet']`). Texten är 19 enheter och figuren får ta upp till 45 % av sidhöjden, så att ingen text blir under 14 px, inte heller på mobilen. Grinden mäter: punkterna på sina koordinater (räknade ur rutnätet och axelns största värde), grafen genom punkterna, talen på axlarna, de skuggade ytornas hörn på tidsaxeln eller grafen och deras övre kant längs grafen, och ingen text under 14 px, utanför figuren eller över en annan. En yta kan ha ett `namn` (arbetsorder 13: "v₀ · t", "a · t² / 2"), i ytans tyngdpunkt eller vid `etikett` (textens mitt, i axlarnas värden). En yta kan ligga på en annan (rektangeln under triangeln): då får hörnen och kanten ligga på den andra ytans kant. Grinden mäter då också varje hörn mot sin koordinat i data och att namnet står inne i ytan. |
| `vektor_rutnat` | `pilar: [{dx, dy, namn?}]` (rutor, `dy` uppåt), `resultant?: {namn?}`, `ratVinkel?: true`, `skala?: '1 ruta = 10 N'`, `bildtext?`, `beskrivning?` | Nästa steg: rutat papper med pilarna efter varandra (varje pil börjar där den förra slutar) och resultanten streckad från den första pilens början till den sista pilens spets. Namnen står på den sida av pilen som vetter bort från figurens mitt. `ratVinkel` markerar en rät vinkel mellan de två första pilarna med en liten kvadrat, och skalan står under rutnätet. Grinden mäter att varje pil börjar där den förra slutar och att resultanten går från den första början till den sista spetsen, och texterna som i `diagram_graf`. |
| `resultant_rutor` | `lage: 'steg'` – `krafter: [{dx, dy, namn?}, {dx, dy, namn?}]`, `resultant?: {namn?}`, `rubriker?: [3]`, `skala?`; `lage: 'vinklar'` – `kraft: 100`, `vinklar: [0, 45, 90, 180]`, `enhet?`; `lage: 'komposanter'` – `kraft: {dx, dy, namn?}`, `komposanter?: [namn x, namn y]`, `skala?` | Kraft och rörelse IV A (arbetsorder 12): den resulterande kraften på rutat papper.<br>• *steg:* tre rutor bredvid varandra – båda krafterna från samma punkt, den andra flyttad (streckad) till den förstas spets, och resultanten (röd) från start till den flyttade pilens spets.<br>• *vinklar:* två lika stora krafter från samma punkt vid varje vinkel, med resultanten och värdet över (≈ när det inte är jämnt).<br>• *komposanter:* en pil med komposanterna streckade längs rutorna.<br>F₁ är indigo, F₂ guld och resultanten röd, som i skisserna. Namnen placeras där de ryms utan att ligga på varandra, och texten är 19 enheter. Grinden mäter: pilarna i rutnätets hörn, den flyttade pilen med samma komposanter, resultanten från start till spets, resultantens längd vid varje vinkel (±1 px) och komposanterna längs rutlinjerna. Den mäter också att ingen text är under 14 px, utanför figuren eller över en annan. |
| `kastbana` | `lage: 'hoghus'` – `hojd` (m), `fart` (m/s), `steg?: 0.5` (s); `lage: 'komposanter'` – `fart`, `sekunder?: 3`; `lage: 'vinklar'` – `fart`, `vinklar?: [30, 45, 60]`; alla `g?: 10`, `bildtext?`, `beskrivning?` | Kraft och rörelse IV C (arbetsorder 16): kaströrelsen, räknad ur fysiken (x = v·t, fallet g·t²/2), utan luftmotstånd.<br>• *hoghus:* ett hus, en släppt och en vågrätt kastad boll med lägena varje `steg` och streckade vågräta linjer mellan bollarna.<br>• *komposanter:* ett vågrätt kast med bollens läge varje sekund, en vågrät pil (farten framåt) och en lodrät pil (farten nedåt) vid varje läge.<br>• *vinklar:* banorna från samma punkt med samma fart; vinklarnas namn står på sin bana där de inte ligger på en annan.<br>Texten är 19 enheter. Grinden mäter: bollarna på samma höjd vid varje tidpunkt, den släppta rakt ned och den kastade lika långt framåt varje steg; de vågräta pilarna lika långa och de lodräta 0 vid start och lika mycket längre varje sekund; vinkeln närmast 45° längst, vinklar som tillsammans är 90° på samma ställe (±1 px) och den största vinkeln högst; ingen text under 14 px, utanför figuren eller över en annan. |
| `cirkelrorelse` | `lage: 'snore'` – `radie?: 105`, `vinkel?: 40`, `slapp?: 200`; `lage: 'bil'` – `radie?: 150`, `vinkel?: 62`; `bildtext?`, `beskrivning?` | IV C (arbetsorder 16), sedd uppifrån, rörelsen moturs (vinklarna räknas moturs från höger).<br>• *snore:* en boll i ett snöre, kraftpilen in mot mitten, och där snöret släpps (`slapp`) bollens raka bana längs tangenten (streckad).<br>• *bil:* en bil i en kurva, friktionen från vägen in mot kurvans mitt och en streckad rak linje längs tangenten för vart bilen tar vägen utan friktion.<br>Etiketterna placeras ur riktningarna och flyttas in i figuren om de skulle gå utanför. Grinden mäter att kraftpilen pekar mot den ritade mitten, att den raka banan börjar vid bollen eller bilen och är vinkelrät mot radien där, och texterna som i `kastbana`. |
`kraftpilar` har sedan arbetsorder 12 också:

- `kedja: true` – krafterna efter varandra, utan föremål, och resultanten under. En pil som går bakåt har namnet
  under sig.
- `rod: true` – resultanten röd och hel, inte streckad indigo. Är den parallell med en vågrät kraft står den under
  föremålet.
- `komposanter: true` – varje sned kraft med sina komposanter streckade, och namnet utanför spetsen.
- `foremal: {form: 'lampa'}` med `snoren: true` – en lampa med snörena längs krafterna upp till ett tak.

Varje pil står i en `g` med `data-storlek`. Grinden mäter:

- längderna i proportion till krafterna;
- resultanten som summan med tecken;
- i en kedja: att varje pil börjar vid den förras spets;
- med komposanter: att sidodelarna tar ut varandra och att uppåtdelarna är tillsammans lika med den nedåtriktade
  kraften.

Det som fanns förut ritas som förut.

- `beskrivning` läses upp av skärmläsare. Utan den skriver figuren en själv ur sina data (inte `bildpilar`: ett foto
  kan inte beskrivas ur data).
- Figuren tar högst 32 % av sidhöjden, ett foto (`bildpilar`) högst 45 %.
- **Två paneler** (`fallande_hiss`, `jord_och_mane`; `paneler` i `figurer.js`): var panel är en egen svg, 220
  enheter bred. På datorn står de bredvid varandra lika stora som en figur på 440 enheter. Blir texten då under
  14 px (mobilen) staplas de under varandra, så stora att den minsta texten blir 14 px. Gränsen är 440 · 14 / minsta
  texten, i `bok.css` per figur. Staplade får de ta mer än 32 % av sidan: hissarna 63 %, jorden och månen 59 % på
  390 × 664. Grinden mäter att ingen text är under 14 px i något läge.
- En figur med fel data visas som en markering på sidan, och kontrolläget säger vad som är fel.
- **En ny sorts figur** (inte en ny figur av en befintlig sort) är en ny funktion i `bokskal/figurer.js`. Det är
  utbyggnad av motorn, inte innehåll.

## Hjälpmedel: plattformens, länkade, aldrig byggda här

Plattformens hjälpmedel länkas, som i de andra böckerna. Motorn bygger inga egna quiz- eller ordlisteverktyg.

| Hjälpmedel (`hjalpmedel`) | Var det syns |
|---|---|
| `forelasning` | fliken **Föreläsning** på delkapitlets sida |
| `ova` | fliken **Öva**, och länken i slutet av varje text i boken |
| `elevbok` | fliken **Elevboken**, och länken i Sammanfattningen i boken (se *Elevboken*) |
| `musikvideo` | fliken **Musikvideo**, sist i flikraden, och länken sist i Sammanfattningen (efter Elevbok) |
| `sjalvskattning` | länken i slutet av varje text i boken (resurskortet hör till kapitlets index) |
| `begreppslista` | varje `*begrepp*` i boken (resurskortet Begreppsbank hör till kapitlets index) |

- **Musikvideon** (Joachims beslut 2026-11-11) är plattformens nya hjälpmedel, i alla ämnen: minst en föreläsning och
  en musikvideo per avsnitt.
  - Fliken står **sist**, som arbetsgången: föreläsning, läsa, öva och elevboken, och sist musikvideon som repetition.
  - Länken "Musikvideo" står sist i Sammanfattningens länkblock (det med Elevbok). Motorn lägger dit den, så den
    skrivs inte i innehållsfilerna.
- **Ett hjälpmedel per text** (2026-11-11), till exempel föreläsningen och musikvideon till varje avsnitt:
  `texter: [{ id, titel, hjalpmedel: { forelasning: { href }, musikvideo: { href } } }]`.
  - Textens adress går före avsnittssidans.
  - Har någon text en egen adress står texterna överst i fliken (A, B …), och varje text visar sin video. Den text
    eleven läste senast är vald om den har en, annars den första som har det. En text utan är tonad ("kommer").
  - Fliken är "kommer" bara om varken avsnittssidan eller någon text har en adress.
  - Länken i boken (Sammanfattningen) går till den öppna textens adress.
  - **YouTube:** använd inbäddningsadressen, `https://www.youtube-nocookie.com/embed/<id>`. Från en lokal fil
    (`file://`) visar YouTube "Fel 153", eftersom ingen avsändaradress skickas. På den publicerade sidan fungerar det.
- **Adressen** sätts i `hjalpmedel` i `delkapitel.js`.
  - Utan adress (`href: null`) är hjälpmedlet synligt men tonat och inte klickbart: fliken är "kommer" och länken i
    boken märkt "kommer".
  - När fysikens hjälpmedel finns räcker det att fylla i adressen.
  - En flik visar hjälpmedlet inbäddat (`?embed=1`) under flikraden, laddat första gången fliken väljs.
- **I adressen fylls tre ord i** där länken står:

  | Ord | Blir |
  |---|---|
  | `{begrepp}` | begreppets grundform |
  | `{avsnitt}` | avsnittets id |
  | `{niva}` | nivåns id |

  Till exempel `'../begrepp/index.html#{begrepp}'` eller `'../ova/index.html?avsnitt={avsnitt}'`.
- **Begrepp → begreppslistan:** när `begreppslista` har en adress blir varje `*begrepp*` i texten en länk dit, med en
  tunn prickad linje under. Böjda former skrivs `*atomer|atom*`.
- **I slutet av texten → öva/självskattning:** blocket `{ typ: 'lank', till: ['ova', 'sjalvskattning'] }` sist
  i det sista numrerade avsnittet och i Sammanfattningen (inte sist i varje avsnitt). I Sammanfattningen även
  `'elevbok'` (2026-11-05).
  - Det står i sidans fot, som en tyst rad under en tunn linje.
  - Det står där redan innan hjälpmedlet finns, så att sidan rymmer det.
  - Kontrolläget varnar om det sista numrerade avsnittet saknar länken.
- **Inifrån boken** öppnas ett hjälpmedel ovanpå boken, inbäddat med plattformens `?embed=1`. Eleven behåller sidan
  och helskärmen. Där finns också *Öppna i egen flik ↗* och *Tillbaka till boken* (eller Esc).
- **Ett nytt hjälpmedel** utöver de fem läggs till i `hjalpmedel` med ett eget namn: `{ namn: '…', href: '…' }`.
  Det kan länkas inifrån boken med `lank`. Flikraden är plattformens och ändras inte.

## Elevboken

Elevboken är **plattformens** hjälpmedel. Koden är kopierad ordagrant från Geografibok, på samma sätt som varje
ämnesrepo har sin kopia. Fysiken bidrar bara med frågorna och en sida som laddar plattformens moduler. Joachims
beslut 2026-11-05.

- **Varifrån:** `jb873/Geografibok`, commit `cd9251da18467e2732e7396a9e54001515249b73` (2026-11-05).
  - `plattform/js/`: `elevbok.js` (datalagret: svar, autospar, versionshistorik, synk mellan flikar),
    `avsnitt-elevbok.js` (ritar frågorna ur `data/fragor.json`), `avsnitt.js` (`autoExpandTextarea`),
    `elevdata-overforing.js` (Spara mitt arbete / Ladda från fil) och `egna-fragor.js` (elevens egna frågor).
  - `plattform/css/elevbok.css`: reglerna ordagrant ur `css/geografi.css` och `css/flipcards.css`. Radnumren står
    överst i filen. Geografins variabelnamn pekar där på fysikens färger. Därefter plattformens nya regler för
    underfrågor och hjälprader (2026-11-06, skrivna här först). Sist finns fysikens tillägg: radbrytningen i
    frågetexten, hovringsfärgerna och det inbäddade läget.
- **Ändringar görs i plattformen först** (Geografibok) och kopieras sedan hit. Modulerna ändras inte här.
  Undantag 2026-11-06 (Joachims order): underfrågorna och hjälpraderna skrevs här först. De är bakåtkompatibla och
  ska föras till Geografibok (tabellen nedan och reglerna i `elevbok.css`).
- **Prefixet är en parameter.** Sidan sätter `window.ELEVBOK_PREFIX = 'fys-elev-'` före modulerna. Utan parametern
  gäller plattformens standard `geo-elev-`, så geografin är oförändrad om modulerna förs tillbaka dit.
  - Fysikens svar ligger under `fys-elev-svar-<delkapitel>`. De blandas alltså inte in i geografins export, fast
    båda böckerna har samma ursprung (jb873.github.io).
  - Exporten tar bara med fysikens nycklar: `fys-elev-…`, och läsnivån `fys-niva-…`, som inte används.
  - **De ändrade raderna** i plattformens moduler. Det är allt som skiljer från Geografibok:

    | Modul | Ändring |
    |---|---|
    | `elevbok.js` | rad 18: `var PREFIX = window.ELEVBOK_PREFIX \|\| 'geo-elev-';`<br>rad 450–451 (2026-11-06): versionshistorikens rubrik tas ur underfrågan när rutan hör till en underfråga |
    | `avsnitt-elevbok.js` | rad 189: `(window.ELEVBOK_PREFIX \|\| 'geo-elev-') + 'svar-' + DELKAPITEL_ID`<br>2026-11-06, underfrågor och hjälprader: nya rad 70–80 (`hjalp`), 86–112 (`underfragor` och "Ditt tidigare svar"), 115–116 och 138 (svarsrutan är en egen funktion, `laggTillSvarsruta`; raderna 117–137 är de gamla 75–95 med `fragaId` i stället för `fraga.id`), rad 110 (anropet för en fråga utan underfrågor) och rad 153 (sparstatus i underfrågans ruta) |
    | `egna-fragor.js` | rad 15: `(window.ELEVBOK_PREFIX \|\| 'geo-elev-') + 'egna-fragor-'` |
    | `elevdata-overforing.js` | en ny rad 28 (`ELEV` = prefixet, `NIVA` = samma med `niva-`); rad 41–42, 50–54 och 74–77 läser `ELEV`/`NIVA` i stället för de utskrivna `'geo-elev-'`/`'geo-niva-'` |
    | `avsnitt.js` | oförändrad |
- **Per avsnittssida:** `elevbok.html` och `data/fragor.json` i delkapitlets mapp, och
  `hjalpmedel.elevbok = { href: 'elevbok.html' }` i `delkapitel.js`.
  - `elevbok.html` har bannern och brödsmulorna.
  - Med `?embed=1` (fliken och länken inifrån boken) sätter sidan klassen `inbaddad`, och då visas bara frågorna.
- **Frågorna** följer plattformens schema: `id`, `typ`, `fraga`, och två valfria fält (Joachims beslut 2026-11-06):
  ```js
  { id, typ, fraga,
    hjalp: ['Använd begreppen: …', 'Läs i: …'],          // rader i vanlig stil, dämpade, direkt under frågan
    underfragor: [{ id: 'q_iii_01a', bokstav: 'a', fraga: '…' }, …] }   // en svarsruta under varje
  ```
  - Bara själva frågan (`fraga`) står i fetstil, med sitt nummer. En fråga med underfrågor har ingen egen ruta.
    Underfrågorna står som a, b, c … och tar inget eget nummer, så numren 1–10 stämmer med frågelistan.
  - Utan de valfria fälten ritas allt som i geografin. Grinden prövar det med en ordagrann kopia av geografins
    `fragor.json` (`verktyg/elevbok-geografi/`).
  - Har en elev ett svar sparat under en huvudfråga som senare fått underfrågor, står den gamla rutan kvar under
    underfrågorna, med svaret och rubriken "Ditt tidigare svar". Inget försvinner.
  - "Läs i" pekar på Standard.
  - Id:na (`q_iii_01` …, underfrågorna `q_iii_01a` …) byts aldrig, eftersom elevernas svar sparas under dem.
  - `data/fragor.json` byggs ur källan ordagrant: frågans rader, underfrågorna och hjälpraderna i källans ordning.
- **Inifrån boken:** länkblocket i Sammanfattningen (III A–D, alla tre nivåer) är
  `['ova', 'sjalvskattning', 'elevbok']`. Elevboken öppnas då ovanpå boken, och Esc leder tillbaka till samma sida.
  Det finns ingen koppling från avsnitt till fråga än.
- **Inte från disken:** plattformens elevbok hämtar frågorna med `fetch`, och det fungerar inte från `file://`. På
  Pages fungerar det. Lokalt behövs en http-server, och grinden startar en egen.
- **Grinden** provar elevboken över http, på dator och mobil:
  - frågorna 1–10 med frågans text, hjälpraderna i vanlig stil (bara frågan i fetstil);
  - underfrågornas bokstäver, en ruta per underfråga och ingen för huvudfrågan;
  - ingen banner när sidan är inbäddad;
  - att ett svar i en underfrågas ruta sparas under `fys-elev-` och finns kvar efter omladdning;
  - att exporten bara har `fys-elev-`-nycklar, med underfrågans svar, fast geografin har data på samma ursprung;
  - att ett tidigare svar under en huvudfråga står kvar under underfrågorna ("Ditt tidigare svar");
  - att geografins frågor ritas som förut (kopian i `verktyg/elevbok-geografi/`);
  - fliken, och länken inifrån boken med vägen tillbaka.

  Med `--negativ` provas fel prefix (`?prova=prefix`), och då ska grinden bli röd.

## Kontrollera

- **`?kontroll` i adressen:** en panel visar för varje nivå (med texter: varje text och nivå) hur boken bryts i
  Chromebooken i fönstret (1366 × 633), Chromebooken i helskärm (1366 × 768) och det aktuella fönstret (på mobilen:
  mobilens mått). Varje sida provas i en riktig sida. Rött: en sida som inte får plats, ett brott mot
  brytningsreglerna, en tunn sida, eller att elevens snabba brytning (som bara provar nästan fulla sidor) skiljer
  sig från den provade. Panelen visar också fel i data:
  - okända blocktyper eller figurer
  - figurer med fel data
  - länkar till okända hjälpmedel
  - saknade nivåfiler
  - en `kapitel.js` som saknas, eller ett omslag med okänd illustration

  Den varnar dessutom för avsnitt utan länk i slutet. I konsolen: `Bok.matSidor({sb, sh, fs})` bryter boken i andra
  mått, `Bok.brytTid(varv)` mäter brytningen och `Bok.plats` är läsplatsen. `brytTid` mäter varje bok (text ×
  nivå): ett uppvärmningsvarv som inte räknas, sedan minst 5 mätvarv (ett varv = båda Chromebookmåtten, det längsta
  räknas), och ger medianen och det längsta per bok.
- **`node verktyg/bok-grind.js`** (Node 24 och Chrome) verifierar motorn och alla delkapitel som finns på disken:
  1. Varje `index.html` är byte för byte lika med mallen.
  2. Varje delkapitel prövas i fyra lägen: 1366 × 633 i fönstret, 1366 × 768 i fönstret, 1366 × 768 i helskärm och
     mobil. I varje läge prövas tre saker:
     - **Navigeringen** i ett fullt scenario. Delkapitlets sida prövas mot plattformens skal: hero-bannern,
       flikarna (Läs vald, flikar utan adress "kommer"), texterna A, B …, nivåerna 📗📘📕, inga egna
       hjälpmedelskort, och att sidan inte är bredare än skärmen. Boken ska öppnas från en text med ett riktigt
       musklick, där texten börjar, och gå till helskärm. Man ska kunna bläddra, se var man är, hoppa och komma
       tillbaka, och sidan ska därefter markera texten och läsplatsen där eleven var. Varje rad i
       innehållsförteckningen ska leda till en sida där rubriken syns, och förteckningen ska bara ha avsnitten (inga
       ###-rubriker). Nivåbytet från ett avsnitt som bara finns på en nivå ska gå till närmaste föregående avsnitt. Nivålistan och menyn ska stängas med Esc.
       Boken ska stängas med ✕, Esc och bakåt, och öppnas igen på samma block. En adress till en rubrik ska öppna
       boken där. Läsplatsen ska synas igen efter byte av sidmått (fönster ↔ helskärm ↔ mobil). Är texterna egna
       böcker ska en annan text öppna en egen bok, och varje text minnas sin plats. Har boken flera nivåer med
       innehåll ska ett nivåbyte från en rubrik mitt i boken, genom alla nivåer och tillbaka, hamna i samma avsnitt.
       Figurerna mäts i varje text och på varje nivå: rörelsespårens avstånd ska följa rörelsetypen, och
       kraftparens pilar ska vara lika långa, motriktade och börja i var sitt föremåls mitt. I friktionen ska ytorna
       haka i varandra utan att gå in i varandra, strecklinjerna inte korsa rubrikerna, draget peka framåt och
       friktionen bakåt (lika långa, på blocket), och samma ytor ge samma mönster i alla böcker. Ingen sida får ha ett
       vanligt (brytbart) mellanslag mellan tal och enhet eller i ett tusental. Varje g och N/kg i rubriker,
       innehållsförteckningen, sidhuvudet och tabellhuvuden ska stå i vanlig stil med rätt skiftläge, och bildpilarnas
       etiketter ska vara minst 14 px på skärmen.
       **Omslaget** (när delkapitlet har `kapitel`) prövas också:
       - Första gången öppnas boken på omslaget, med textens namn i undertiteln.
       - Överrad, titel, undertitel och upphov står innanför ramen och i ordning uppifrån, och motivet står under
         undertiteln och innanför ramen.
       - På uppslaget står omslaget ensamt som högersida, och på mobilen fyller det sidan.
       - Sidpositionen säger "Omslag", och det går inte att bläddra bakåt från omslaget.
       - → öppnar innehållet, och Home går till innehållet.
       - En annan text öppnas på sitt eget omslag.
     - **Att brytningen följer reglerna och alla sidor får plats** (kontrolläget), och att brytningen tar under
       200 ms med CPU:n strypt 6 gånger: medianen av 5 mätvarv efter en uppvärmning, för varje bok. Grinden skriver
       ut median och max per bok. (Ett enda varv var för brusigt när datorn var belastad eller gick på batteri.)
     - **Bladvändningen:** → och ← vänder ett blad (det nya uppslaget syns direkt, lagret är borta efteråt, längden
       högst 450 ms); ett hopp vänder inget; en snabb serie om 10 sidbyten hamnar rätt med högst ett blad åt gången
       och inget kvar (ingen kö); *Av* ger direkt sidbyte; med prefers-reduced-motion inga animationer; ← från
       innehållet vänder bladet till omslaget och → vänder omslaget och öppnar boken. Med CPU:n
       strypt 6 gånger: en vändning högst 450 ms från tangenten (medianen av 3 efter en uppvärmningsvändning, som
       brytningstiden; max redovisas) och inget glapp över 50 ms mellan bildrutorna – bara med laddaren i (på
       batteri: "ej mätt"). Blir tidsprovet rött körs det om automatiskt en gång (samma läge, samma delkapitel). Rött
       är det bara om båda körningarna är röda. Gränserna är desamma, och en omkörning står i utskriften (`OMKÖRD`)
       och i en sammanställning sist. En belastad dator gav ibland ett glapp på 67–150 ms i ett oförändrat
       delkapitel, och omkörningen blev grön (Joachims order 2026-11-06).
     - **Att inga JS-fel uppstår.** De fångas med `window.onerror`, `unhandledrejection` och Chromes egna undantag.
     - **Tomma sidor och uppslagsregeln** (`provaTommaSidor`):
       - sidmåttet A → B → A → B med boken öppen;
       - ett svep där varje sida i varje bok har block, också efter bladvändning och efter en annan bok;
       - på datorn ingen figur på ett annat uppslag än stycket före den, utom undantaget (stycket först på sin sida),
         som skrivs ut som varning. Mobilens fall är bara varningar.
     - **På batteri** skriver grinden en varning först. Stängs Chrome körs läget om en gång (`OMKÖRD: Chrome stängdes`,
       och i sammanställningen sist). Det har hänt bara på batteri (2026-11-05/06).

  Startsidan och kapitelindexet prövas på dator och mobil: startsida → kapitelindex → avsnittssidorna → brödsmulorna
  tillbaka, och att tonade kort (kapitel, avsnitt, resurser som kommer) inte är länkar och inte leder någonstans.
  `verktyg/provbok-utan-texter/` prövar läget utan texter med samma scenario. Provboken har tre texter (Krafter,
  Tryck, Energi) och prövar dessutom:
  - en bok per text, en text som är "kommer" (Energi) och en nivå som bara en text har (Extranivå)
  - strömformatet (Tryck): en sidbrytning, och ett långt stycke + figur som inte ryms tillsammans
  - rörelsespåren (Tryck): alla fyra rörelsetyperna, 4–8 prickar, med och utan tider
  - kraftparen (Tryck): drag och knuff, med och utan värde, och beskrivningen ur data
  - kraftpilar utan värden och med en gemensam skala (Tryck)
  - friktionen (Tryck): med pilar och bildtext, och utan pilar med grova ytor och andra namn, och beskrivningen ur data
  - bildpilar (Tryck): ett utsnitt av fotot på avsnittssida III, två lika långa pilar, en etikett utan läge,
    beskrivningen och bildtexten ur data
  - tal och enhet (Tryck): "16 − 6 = 10 N", "1 538 °C", "5 m/s" och "18 km/h" står på en rad också i en spalt som
    är 1 px bred, medan "16 − 6" (vanliga mellanslag) bryts där. Stycket säger "ca 18 km/h": så långt återskapade det
    kantfallet i mobilläget (order 8), och nu ska kontrollen vara grön.
  - hjälpmedel med adress, också som inbäddad flik (Öva)
  - begreppslänkar
  - inbäddningen
  - en extra nivå ur data (Extranivå)
  - nivåbyte i boken
  - kraftpilarna
- **`node verktyg/bok-grind.js --negativ`:** lägger in fel med flit, ett i taget, i varje läge. Felen är ett
  JS-fel, en för tät sida, en Stäng som inte fungerar, en sida som slutar med en rubrik (motorns provkrok
  `?kontroll&prova=rubrik-sist`), en brytning som tar 250 ms längre (`?kontroll&prova=langsam`) och en hackig
  bladvändning: grinden blockerar sidan 80 ms var 100:e ms medan vändningen mäts. Grinden ska bli röd för vart och
  ett. Den långsamma brytningen ska fångas av just tidsprovet. Den hackiga bladvändningen ska fångas av
  bladvändningens tidsprov i båda körningarna. Dessutom prövas omkörningen: med hacket bara i första körningen
  ska tidsprovet bli grönt efter omkörningen ("hackig bladvändning en gång").
  Med `--negativ` provas också elevbokens prefix (se *Elevboken*).
- **`--bilder`** sparar skärmbilder av hubben och boken i `verktyg/bilder/grind/`. Alla skärmbilder sparas under
  `verktyg/bilder/`, med en undermapp per arbete (till exempel `repetition-1/`).
- **`--webb`** prövar den publicerade boken på https://jb873.github.io/Fysikbok/ i stället för filerna på disken
  (`--webb=<adress>` för en annan adress). Grinden kontrollerar först att webben visar samma filer som disken.
  Visar den inte det, är något inte pushat eller så har Pages inte byggt klart. Kör den efter varje push.
- **`--bara=<namn>`** prövar bara de delkapitel vars namn innehåller texten, till exempel `--bara=rorelse_och_kraft`.
  Det är ett snabbt prov medan man arbetar. Grinden är grön först när hela har körts.
- **`--negativ=<namn>`** kör bara de negativa prov vars namn innehåller texten. **`--visa`** skriver också ut de prov
  som gick igenom.
- **`node verktyg/brytning-jamfor.js --spara <fil> | --jamfor <fil>`** (2026-11-08): sidindelningen före och efter en
  ändring i brytningen. Kör `--spara` före ändringen och `--jamfor` efter. Varje avsnittssida bryts i tre fönster
  (1366×633, 1366×768, mobilen) i Chromebookens två mått och fönstrets eget (`Bok.sidindelning`), både elevens
  brytning och kontrollägets provade. Jämförelsen gäller blocken på varje sida och det som inte får plats. Den
  provade brytningen jämförs också i fyllnaden på fyra decimaler. Slutkoden är 1 om något skiljer.
- **Fristående böcker och rutorna (arbetsorder 11):**
  - Nästa steg-blocket står sist i Läs, och fliken Öva har övningsböckernas kort.
  - Varje kort öppnar sin bok: adressen stämmer, ingen nivåväljare, förteckningen har titeln och omslaget har "Nästa
    steg" (en stödbok har inget). Stäng leder tillbaka.
  - En länk av varje slag i varje bok (bokref, boklank) öppnar den andra boken vid avsnittet, och "Tillbaka till"
    leder till samma ställe.
  - I varje bok mäts på skärmen:
    - ett EXEMPEL som ryms står på ett uppslag (en sida på mobilen);
    - raden Svar står aldrig ensam på ett nytt uppslag;
    - en PROVA-ruta är hel;
    - varje formel står på en rad inom spalten;
    - formeln står på samma uppslag som stycket före (uppslagsregeln).
  - En sida med bara fristående böcker prövas med ett eget scenario: hubben, bläddra, innehållet, End och Esc.
  - **Negativa prov:** fyra provkrokar (`?kontroll&prova=formel-skild`, `exempel-delat`, `svar-ensam`, `prova-delad`)
    flyttar en post i provboken först på nästa sida. Grinden ska bli röd av just den regeln.

**Källorna och omvandlarna** (sedan 2026-11-07, arbetsorder 10 och 11). Joachims källor ligger oförändrade i
`kallor/`, en mapp per kapitel (och `nasta-steg/`). Texterna är omvandlade med skript och prövas med ett annat:

- **`node verktyg/ordagrant.js`** jämför innehållet block för block med källorna och godkänner bara de beslutade
  tilläggen på sina platser. Slutkoden är 1 om något inte är ordagrant. Kör det efter varje ändring i texterna.
  (Före order 11 hette det `kap1-ordagrant.js`.) Det prövar:
  - kapitel 1, avsnitt I, och dess fyra djupdykningar (`kallor/kap1/`);
  - Nästa steg: textboken, övningsboken och Matematiken i fysiken (`kallor/nasta-steg/`). Varje länk ska gå till
    avsnittet med just det namnet.
- **`node verktyg/kap1-omvandlare.js [utmapp]`** skriver kapitel 1:s filer i `innehall/` igen ur källorna, och
  befintliga filer skrivs över. Med en tom `utmapp` hamnar de där, så att de kan jämföras med repot först.
- **`node verktyg/nasta-steg-omvandlare.js [utmapp]`** gör samma sak för Nästa steg och Matematiken i fysiken. Den
  skriver ut de länkar som inte kunde matchas. Formatet står överst i skriptet.
- **`node verktyg/kap3-omvandlare.js [--text b] [utmapp]`** gör samma sak för Kraft och rörelse IV, text A (utan
  `--text`) och text B Fritt fall (`--text b`), en källa med tre nivåer var. Den skriver också ut begreppen som är
  markerade på varje nivå. Figurerna står i `verktyg/kap3-figurer.js` (A) och `verktyg/kap3-figurer-b.js` (B). B:s
  källa har två märkningar till: `[EXEMPEL: rubrik]` med raderna under (blocket `exempel`, rubriken "Exempel: …") och
  `[RUTA: rubrik]` med punkterna under (blocket `ruta`). A skrivs tecken för tecken som förut.

## Interaktiva inslag (senare)

Övningar och självrättning är plattformens hjälpmedel och länkas. Behövs något interaktivt *i* boken läggs det till
som en ny blocktyp i motorn, valfri och tyst:

```js
Bok.blocktyp('namn', (data, ctx) => {
  const el = ctx.h('div', { class: '…' }, …);
  const svar = ctx.hamta('svar', '');   // sparas per elev, nivå och block (localStorage)
  ctx.spara('svar', '…');
  ctx.vidVisning(() => { … });         // körs varje gång sidan visas
  return el;
});
```

Varje blocks element byggs en gång per bok och flyttas mellan sidorna när boken bryts om, så det som eleven har gjort
ligger kvar vid bläddring och när fönstret ändrar storlek. `ctx.sida` är sidan där blocket står just nu.
Tangentbordets bläddring är avstängd i fält. Ett svep som börjar i ett fält eller i `[data-ingen-svep]` bläddrar inte.

## Beslut och antaganden

- **2026-11-02, Repetition II ersatt:** texterna A Materia, B Densitet och värme och C Värmespridning är Joachims
  granskade källa (`Repetition-II-Standard.md`), en bok per text. Utkastet nedan ligger i
  `Arkiv/materia_repetition/innehall/standard-utkast-2026-10-29.js`.
- **2026-11-02, numrering av huvudtexten:** huvudtexten numreras bara när en bok har två eller fler avsnitt.
  Repetition II har ett avsnitt per bok och är `numrerad: false`, så att inget "1 · …" i sidhuvudet krockar med
  texternas bokstäver A, B, C; sidhuvudet visar avsnittets namn. Repetition I har två avsnitt per bok och är numrerad:
  avsnittsrubriken med guldlinje (som motorn bara ritar för numrerade avsnitt) markerar bytet mellan dem.
- *(Historik)* Standardtexten var ett **utkast ur innehållspunkterna**. Siffror:
  - 118 atomslag (som i Materia-filmen)
  - vatten 1,0 g/cm³, is 0,92, trä (furu) ca 0,5, järn 7,9, aluminium 2,7
  - järn smälter vid 1 538 °C och kokar vid 2 862 °C
- **2026-10-31, Chromebook och läsläge:**
  - Densitetens första sida är delad i *Vad är densitet?* och *Räkna ut densiteten*, så boken har 14 sidor.
  - Inledningstexten och punkterna om aggregationsformerna är kortare.
  - Avsnittsrubrikerna är något mindre och figurerna tar högst 32 % av sidhöjden.
- **2026-10-31, motorn fryst:**
  - **Boken är alltid den rena läsvyn,** det som förut var läsläget. Normalläget med list och klickbar sidremsa är
    borta. Hubben har tagit över dess uppgifter, och Innehåll finns kvar i boken.
  - **Boken är en enda post i historiken,** så att bakåt alltid leder till delkapitlet. Hopp inom boken återvänder
    man från med *↩ Tillbaka till sida x*.
  - **Länken till hjälpmedlen står i sidans fot.** Det är för att den tätaste sidan (4, *Fast, flytande och gas*)
    ska rymmas utan att texten krymper.
  - **Standardtexten har ändrats på fyra ställen:**
    - Figurerna fick sina data utskrivna.
    - Varje avsnitt slutar med länken till Öva och Självskattning.
    - Tre böjda begrepp fick grundform (*atomer|atom*, *molekyler|molekyl*, *aggregationsformer|aggregationsform*).
    - Inledningens tredje bläddringsrad säger nu "Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var
      du var." Det fanns inget läsläge längre att beskriva.
  - **Fysikens hjälpmedel finns inte än.** Alla är därför "kommer" tills deras adresser fylls i.
- **2026-10-31, delkapitlets sida efter plattformens layout:**
  - Hubben är geografibokens avsnittssida: samma skal och klassnamn (`hero-banner`, `flikar-rad`/`flik`,
    `underdel-valjare`/`underdel-knapp`, `niva-valjare`/`niva-knapp`, `footnote`), regel för regel ur
    `css/geografi.css`. Sedan 2026-11-01 är också basen plattformens (se nedan).
  - Nivåerna heter **📗 Enkel · 📘 Standard · 📕 Fördjupning** (id `enkel`, fil `innehall/enkel.js`). De fyra
    hjälpmedelskorten är borta; hjälpmedlen är flikraden.
  - Delkapitlet heter **1. Repetition — materia, densitet och värme —**. Bokens första sida bär samma titel.
  - Läs öppnar boken i stället för att visa texten. Texterna A–D är bokens numrerade avsnitt; boken är fortfarande
    en bok per nivå, och en text öppnar den där texten börjar.
  - Siffror sätts i Garamond också i brödsmulan ("1. Repetition"), eftersom Marcellus 1 liknar ett I.
- **2026-10-31, fysikens ämnesfärg är indigo:**
  - Varje bok på plattformen har en egen `--accent`: geografi havsblå `#1e5c7a`, historia vinröd `#5a1a2a`, kemi
    patinagrön `#5a9668`, matematik kungsblå. Fysiken har **`--accent: #4a2d66`** (djup indigo) och
    **`--accent-2: #a07d2f`** (antikt guld). Kopparn och den djupblå betoningen är borta ur `bokskal/bok.css`.
  - Indigo: bannern (tonar från nästan svart till `--accent`), aktiv flik, vald text och vald nivå, begrepp, länkar
    och resultantpilen.
  - Guld: linjer och dekor (`--accent-2`), siffror, överrader och kraftpilar på papperet (`--accent-2-mork: #6f561c`),
    och guld på mörk botten i bannern och boklisterna (`--accent-2-ljus: #cfae62`).
  - Kontrast, WCAG 2.1, mot papperet `#ece2c8`: `--accent` 8,8:1, `--accent-2-mork` 5,4:1. `--accent-2` når 3,0:1
    och används därför bara för linjer, aldrig för text.
  - Nivåernas 📗📘📕 är nivåfärger, inte ämnesfärg, och står kvar.
- **2026-11-01, plattformens gemensamma bas:** bara accenten skiljer fysiken från de andra böckerna. Basen gäller
  både delkapitlets sida och boksidorna.
  - Papper `#ece2c8` (förut `#f0ece0`) och papper-ljus `#f4ecd6`, bläck `#1b2a36` (förut `#1c212e`), samma värden
    som geografibokens `css/geografi.css`.
  - Rubriker och knappar i **Marcellus SC** (kapitäler), `typsnitt/MarcellusSC-Regular.ttf`. Marcellus utan
    kapitäler används inte längre. Siffror är fortfarande EB Garamond.
  - Neutralerna följer plattformens regel: basens neutraler är delade, all ton kommer från fysikens accent.
    - Dämpad text `#625646` (geografins, historiens och kemins muted): 5,5:1 mot papperet, 5,4:1 i faktarutan.
    - Linjer är bläcket svagt, `rgba(27, 42, 54, .18)`, inte en fast grå. Innehållets prickrader är bläcket på 35 %.
    - Faktarutan följer kemins mönster i indigo: papper-ljus med 7 % indigo, kant `rgba(74, 45, 102, .35)` och
      vänsterkant 4 px `--accent`. Markeringen "du är här" i innehållet har samma ton som fast färg, `--ruta: #e8dfce`.
- **2026-11-02, en bok per text (Joachim godkände motorändringen):**
  - Strukturen är geografins: kapitel → avsnittssidor (en mapp, ett delkapitel) → texterna A–D. Varje text är en
    egen bok med egen innehållsförteckning. En lång text blir flera texter.
  - Motorn: `texter` i `delkapitel.js` och `innehall/<text>/<nivå>.js`. Nivåfilerna har samma `Bok.niva(...)` som
    förut; motorn läser vilken text filen hör till på dess script-tagg. Varje text och nivå är en bok, med eget
    sparat läge (`bok:<id>:<text>:<nivå>:sida`, sedan flödet `:plats`) och den senast lästa texten (`bok:<id>:text`).
  - Bakåtkompatibelt: utan `texter` är allt som förut, också nycklarna för det eleven sparat.
  - En text utan innehåll på någon nivå är tonad och "kommer" (en rad i `bok.css`, som för flikarna).
  - Bokens första sida bär textens titel (och `undertitel` om texten har en). Ovanför står delkapitlets `overrad`.
- **2026-11-02, texten flödar (Joachim godkände förslaget):**
  - Innehållet är en ström av block, och motorn bryter sidorna efter sidmåttet med reglerna under *Brytningen*.
    Sidnummer används inte i undervisningen – rubrikerna och läsplatsen räcker. "Sidnumren är desamma på alla
    skärmar" gäller inte längre.
  - Läsplatsen sparas som ett block (`bok:<id>[:<text>]:<nivå>:plats`); den gamla nyckeln `:sida` läses inte.
    Adressen pekar på en rubrik, med texten först när texterna är egna böcker.
  - Det äldre sidformatet plattas ut (sidor i följd med samma titel slås ihop), så Repetition I och II bryts utan
    ändring i datan. Blockens id är desamma som förut.
  - Regelkonflikten: ryms inte stycke + figur på en sida stannar stycket och figuren står först på nästa sida.
    Samma sak när sidan före stycket annars skulle bli under 40 % fylld (heliumsidan i Densitet och värme) – utan
    det tillägget krockar "figuren med stycket" och "ingen sida under 40 %".
  - Sidans sista block har ingen marginal under (`bok.css`), så att brytningen kan räkna exakt.
  - Sidor per bok (Chromebook i fönstret), förut → nu: Atomen 15 → 12, Joner, isotoper och bindningar 19 → 15,
    Materia 10 → 8, Densitet och värme 13 → 11, Värmespridning 10 → 10.
- **2026-11-03, avsnittssida III och rörelsespåret (arbetsordern III A):**
  - Figurtypen `rorelsespar` (Joachims prickmodell) är en ny funktion i `figurer.js`: prickarna i bläck och strålen
    i guld (`fig-prick`, `fig-pil fig-strale` i `bok.css`).
  - Två fel i motorn som det första riktiga innehållet i strömformatet visade:
    - Blockens id `<avsnitt>-<n>` var samma namn som rubrikernas adresser, så hubben öppnade boken vid fel rubrik.
      Blocken heter nu `<avsnitt>-b<n>`, och kontrolläget säger till om ett id krockar.
    - Packningen lämnade en tunn sida som gick att undvika. Därför finns balansen (se *Brytningen*).
- **2026-11-03, text B Kraft och friktion och text C Kraft och motkraft (arbetsordern III B–C):**
  - Avsnittssida III har fyra texter: A Rörelse · B Kraft och friktion · C Kraft och motkraft · D Tyngdkraften.
  - Figurtypen `kraftpar` (Newtons tredje lag) är en ny funktion i `figurer.js`; snöret är `fig-snore` i `bok.css`.
  - `kraftpilar` fick `varden: false` (Standard och Enkel – newton införs i text D) och `skala`. Med skalan 16 i
    blockserien (figur 1–5) blir pilarna jämförbara mellan figurerna. Utan den räknas längden om i varje figur, och
    figur 2 (10 mot 10) och figur 4 (6 mot 6) skulle se exakt likadana ut.
  - `kraftpilar`: föremålets namn får plats över föremålet (det klipptes förut), en vågrät resultant står över
    mitten (förut på underlaget), och en kort pils etikett står utanför föremålet.
  - Grinden öppnar också de andra texterna och mäter deras figurer på varje nivå.
  - Joachims beslut efter granskningen: skalan 16 behålls; `*olika*` i C Standard var betoning och är vanlig text;
    motorn håller ihop tal och enhet med hårda mellanslag (`bindTal` i `bok.js`); undertiteln är "rörelse, kraft,
    friktion och tyngdkraft".
- **2026-11-03, figurtypen `friktion` (arbetsordern friktion):**
  - En ny funktion i `figurer.js`; streckat (`fig-lupp`), ytorna (`fig-yta-foremal`, `fig-yta-underlag`,
    `fig-ytlinje`) i `bok.css`.
  - Figuren är 186 enheter hög, så att den får stå i spaltens bredd: en figur får vara högst 32 % av sidhöjden, och
    en högre figur krymps (texten i den blir då för liten). Rubriken "I förstoring" står mitt emellan
    strecklinjerna.
  - Insatt i text B, Standard och Enkel, efter första stycket under "Kraften bakåt är friktion" (Enkel: efter
    stycket om mikroskopet). Fördjupning (Joachims besked): efter första stycket under "Vilofriktionen anpassar sig
    efter draget".
  - Brytningstiden: uppvärmning + 5 mätvarv, medianen jämförs med 200 ms, för varje bok; negativt prov med en
    konstgjord fördröjning.
  - Motorfix: i Fördjupning hamnade sidan före stycket precis vid 40 %. Delningsregeln räknade den till 40 %, men
    kontrollen mätte den i en riktig sida till under 40 %, så sidan blev tunn. Nu avgör en riktig sida nära gränsen
    (`fyllFore`), och regelkontrollen godtar delningen när den mätningen visade under 40 %. Sidorna i B Fördjupning
    blev 10 → 9; inga andra böcker ändrades.
- **2026-11-04, figurtypen `bildpilar` och text C v3 (arbetsordern bildpilar):**
  - En ny funktion i `figurer.js`: fotot `kraft_och_rorelse/rorelse_och_kraft/bilder/block-rep.jpg` med kraftpilar
    ur data; klasserna `fig-bildpil-*` i `bok.css`, och 45 % av sidhöjden för just den här figuren.
  - Text B: figur 1 (kraftpilar med bara dragkraften) är BILD A på alla nivåer. Text C är v3
    (`III-C-Kraft-och-motkraft-v3.md`) på alla nivåer, med BILD B och C; v2 ligger i `Arkiv/`. Figur 6 (kraftparet
    block–hand) används inte längre; figurtypen finns kvar.
  - Justerat från skissens koordinater: pilen "repet drar i mig" börjar på fingrarna (y 525, inte 552, som är under
    handen); etiketterna i BILD A och B står bredvid pilarna ("dragkraft" [750, 600] till höger om spetsen,
    "friktion" [160, 745] under pilen) – på [440, 600] och [160, 700] låg texten över pilarna.
  - Motorfix: ett stycke följt av två figurer (C Fördjupning) delas före den första figur som inte ryms, inte alltid
    före den första; resten får följa en figur som flyttats fram (mobilen: BILD B och C på samma sida).
  - Grinden: en Chrome som stängs mitt i ett musklick ger rött i stället för att krascha grinden.
  - Joachims beslut efter granskningen: BILD C har utsnittet [440, 330, 1152, 520], så att handen och repet fyller
    bilden; BILD A och B visar hela fotot.
- **2026-11-04, bokomslag som i musikvideorna (arbetsordern omslag; Joachims svar på de fyra frågorna):**
  - Omslaget är filmernas, i SVG (se *Kapitlets omslag*). Undertiteln och upphovet står i Marcellus, som i
    filmerna; `Marcellus-Regular.ttf` fanns redan i `bokskal/typsnitt/`.
  - Datan står i en gemensam `kraft_och_rorelse/kapitel.js`, som delkapitlen läser. Det sker med `kapitel` i
    `delkapitel.js`, och motorn laddar filen som en nivåfil, så att mallen `index.html` inte ändras.
  - Undertiteln är textens namn. Repetition I och II har "Repetition: <textens titel>" (`omslag.undertitel`).
  - Home går till innehållsförteckningen som förut. Omslaget nås genom att bläddra bakåt och visas när boken
    öppnas första gången. En elev som stod på innehållsförteckningen kommer tillbaka dit.
  - Mina val:
    - **Överraden** skrivs "NO – Fysik" som i filmens manus och visas i kapitäler (NO – FYSIK). Skärmläsaren läser
      den i vanlig stavning.
    - **Kolatomens kärna** ligger där filmens `karna_positioner` lägger den. De tolv lägena är uträknade en gång ur
      filmens kod och inskrivna i `figurer.js`, eftersom filmens slumptal (numpy) inte går att få fram i JS.
    - **Skenet** bakom motivet är en radiell toning, inte en suddad ellips.
    - **Undertiteln** får två rader om den inte ryms, helst efter ett kolon. Filmen har bara en rad.
    - **Sidpositionen** på omslaget säger "Omslag" och bokens antal sidor.
- **2026-11-04, bladvändning (arbetsordern bladvändning, alternativ A):** modellen ur `turn_frame` i filmernas
  bok, byggd i CSS 3D (se *Bladvändning* ovan). Läsinställningen *Sidvändning: Snabb / Direkt* blev
  *Bladvändning: På / Av*; Snabb finns kvar bara som glidningen vid hopp. 0,34 s, så att en vändning med CPU:n
  strypt 6 gånger håller sig under 450 ms också med sidbytet (med 0,40 och 0,38 s blev den 450–500 ms i en del lägen).
- Namn och © står på sista sidan och i sidans fot, ur `upphov`.
- **2026-11-04, III D Tyngdkraften (arbetsordern III D):**
  - Text D är införd ordagrant på alla tre nivåer i strömformatet (`innehall/tyngdkraften/`). Avsnitten är
    inledning, tyngdkraft-och-normalkraft (1), massa-och-tyngd (2) och sammanfattning, med samma id på alla nivåer.
  - Bilderna är `bildpilar`: BILD T och BILD F på `block-rep.jpg`, BILD M på `dynamometer.jpg`.
  - **BILD F:** förslagets koordinater fick pilarna att korsa varandra. Därför sitter de nu så här:
    - tyngdkraften från blockets mitt [300, 552];
    - normalkraften från undersidan vid x 420;
    - dragkraften från blockets högra överkant, ovanför repet [500, 470];
    - friktionen från undersidans vänstra del [250, 640].
    - Dragkraften och friktionen är 240 px, tyngdkraften och normalkraften 248 px.
  - **BILD M:** utsnittet är [0, 420, 1086, 1028], så att hela skalan med visaren och påsen syns. Pilarna är 140 px
    vardera: tyngdkraften från påsens mitt och fjäderns kraft från påsens överkant, längs snöret.
  - **Motorfix (Joachims beslut):** `bildpilar` har fått `maxhojd` i data. Med 45 % rymdes stycket före BILD M och
    bilden inte på samma sida i 1366 × 633. Sidan före blev då tunn (37 %). Med 0,43 för BILD M ryms de ihop.
  - Fördjupningen har formeln F = m · g och tabellen över g på jorden, månen, Mars och Jupiter. Det är formel- och
    tabellblocken, med data ur arbetsordern.
- **2026-11-04, symboler i rubriker och etiketter i bildpilar (Joachims order efter III D):**
  - **Symboler och enheter:** rubriker, innehållsförteckningen, sidhuvudet och tabellhuvuden står i kapitäler, och
    där blev g ett G och kg KG. Motorn märker nu bokstavssymboler (g, m, F, v, s, t) och enheter (N, kg, N/kg, m/s,
    °C, cm³ … ur enhetslistan) med `span.sym`, som står i EB Garamond med rätt skiftläge. "min" och "ton" märks
    inte, eftersom de också är vanliga ord. Grinden prövar g och N/kg i varje rubrik och tabellhuvud. Provboken har en
    rubrik, en underrubrik och ett tabellhuvud med symbolerna.
  - **III D Fördjupning (Joachims beslut):**
    - "Tyngden räknas ut som massan gånger g" → "Tyngden räknas ut med massan och tyngdfaktorn"
    - "g är olika på olika himlakroppar" → "Tyngdfaktorn är olika på olika himlakroppar"
    - tabellhuvudet "g (N/kg)" → "Tyngdfaktor (N/kg)"
  - **Bildpilarnas etiketter** är minst 14 px på skärmen. Etiketten och pilarnas tjocklek växer när fotot skalas ner.
    Skalan räknas på bilden och inte på figurens ruta, eftersom ett stående foto står i mitten av en bredare ruta.
    Grindens bildpilprov räknar nu också på bilden. Förut jämförde provet etiketterna med rutan, och för ett stående
    foto var det fel.
  - **Kapitelindexet, kort IV:** "Fall, kast och balans" – "Fritt fall, kaströrelse, tyngdpunkt och balans."
- **2026-11-04, huvudrubriker i innehållsförteckningen (arbetsordern huvudrubriker, III A–D):**
  - Förteckningen visar bara avsnitten, som i en tryckt bok. ###-rubrikerna står kvar i texten.
  - III A–D är indelade i 2–3 numrerade avsnitt per text enligt ordern. Fördjupning A har dessutom "Att räkna på
    rörelse". Ingen text är ändrad: ett skript jämförde före och efter, och blocken är desamma i samma ordning.
  - Länkblocket står sist i det sista numrerade avsnittet och i Sammanfattningen.
  - **Motorn:**
    - "Du är här" i menyn markerar avsnittet.
    - Nivåbytet går till närmaste föregående avsnitt som finns på den nya nivån.
    - Kontrolläget varnar bara om det sista numrerade avsnittet saknar länken.
  - **Läsplatser:** blockens id och rubrikernas adresser räknas ur avsnittet (`<avsnitt>-b<n>`, `<avsnitt>-<n>`). En
    läsplats eller länk i III från före indelningen pekar därför på ett id som inte finns längre. Boken öppnas då
    på omslaget.
  - Repetition I och II och djupdykningen tas i en senare order.
- **2026-11-04, djupdykning till III A, "Galileo mot Aristoteles" (arbetsordern djupdykning A):**
  - Djupdykningen (i dag `innehall/djupdykningar/galileo.js`) är införd ordagrant ur `Djupdykning-A-Galileo-v2.md`.
    Den har en Inledning och sex numrerade avsnitt, men ingen Sammanfattning och inget länkblock. Förteckningen har
    sju rader.
  - Den låg först som en nivå i text A. 2026-11-05 flyttades alla fyra till avsnittssidan, se nedan och *Djupdykningar*.
  - **Ny figurtyp `lutande_plan`** (BILD L). `bildpilar` har fått `prickar` och `stråle` (BILD C, curling.jpg).
  - **Mina val för BILD C:** prickarna ligger 20 px till vänster om orderns förslag, på x 210–1170 och y 560, med
    240 px emellan. Strålen ligger på y 690 i stället för 640, så att den går fritt under stenen.
  - **Grinden:**
    - prickarnas avstånd mäts;
    - provboken har lutande plan i två steg.
- **2026-11-04, djupdykning till III B, "Bromssträckan":**
  - `innehall/djupdykningar/bromsstrackan.js` är införd ordagrant ur `Djupdykning-B-Bromsstrackan-redigerad.md`.
    Den har en Inledning och sex numrerade avsnitt.
  - **Ny figurtyp `stoppstracka`** (BILD S). Skalan har en markering var tionde meter upp till den längsta
    stapeln, alltså 0, 10, 20, 30 och 40 m; stapeln för 70 km/h går till 43 m.
  - **`friktion` har fått `paneler`** (BILD Y). Det är ingen ny figurtyp. Ytorna ritas av samma funktion som förut,
    och den vanliga friktionsfiguren är byte för byte oförändrad. Panelerna står bredvid varandra också på mobilen,
    eftersom figuren är en SVG; de är läsbara där.
- **2026-11-04, djupdykning till III C, "Raketer":**
  - `innehall/djupdykningar/raketer.js` är införd ordagrant ur `Djupdykning-C-Raketer-redigerad.md`. Den
    har en Inledning och sex numrerade avsnitt.
  - **BILD R** (raket.jpg) och **BILD A** (astronaut.jpg) är `bildpilar` med två lika långa pilar på två föremål.
    Etiketterna är långa i förhållande till fotona och fick egna lägen:
    - **BILD R:** pilarna ligger på y 590 som i ordern. "raketen trycker gasen" står under sin pil (y 695), och
      "gasen trycker raketen" till höger om sin pils spets, under raketen.
    - **BILD A:** pilen på lådan går från lådans mitt åt höger, och pilen på astronauten från händerna längs armen
      åt vänster; båda är 250 px. Etiketterna står i rymden, inte på jorden och inte på hjälmen.
  - **Motorfix i balansregeln (`paginera`):** sidan före fick inte bli tunn, och inom marginalen NARA räknades den
    som tunn. I C:s djupdykning (1366 × 633) hade sidan före fått 44 %, men den räknades som tunn, och då blev sidan
    efter 37 %. Nu avgör en riktig sida inom marginalen, som vid delningen av stycke och figur (`fyllFore`).
- **2026-11-05, djupdykning till III D, "Är astronauterna tyngdlösa?":**
  - `innehall/djupdykningar/tyngdloshet.js` är införd ordagrant ur `Djupdykning-D-Tyngdloshet-redigerad.md`. Den har
    en Inledning och sju numrerade avsnitt, och förteckningen har åtta rader.
  - **Nya figurtyper:** `fallande_hiss` (BILD H) och `newtons_kanon` (BILD N).
  - **I hissen** utgår kraftpilarna från en punkt bredvid personen, som i `kraftpilar` där pilarna utgår från
    föremålets mitt, och namnen står till höger.
- **2026-11-05, III D: bilder till avsnittet "Massa och tyngd" (arbetsordern v2):**
  - **Ny figurtyp `jord_och_mane` (BILD J)** i alla tre nivåerna, direkt efter månens första stycke (Fördjupning:
    efter tabellen, med 590 N och 96 N). Bildtexten och beskrivningen är ordagrant ur ordern. Den ryms inom 32 % av
    sidhöjden med text på minst 16,8 px på datorn, så den behövde inte gå upp till 45 %.
  - **Jämförelsen "vad ändras på månen?"** (`jamforelse`) står sist i avsnittet `massa-och-tyngd`, före länkarna, i
    Standard och Enkel (Enkel: "tyngden – månen drar mycket svagare"). Den står inte i Fördjupning.
  - **Två paneler staplas på mobilen** (`fallande_hiss` och `jord_och_mane`): var panel är en egen svg. Bredvid
    varandra är de exakt som förut på datorn. När texten bredvid varandra skulle bli under 14 px staplas de, så stora
    att den minsta texten blir 14 px. Det styrs av en containerfråga på sidinnehållet, så brytningen mäter samma sak
    som eleven ser. På mobilen (390 × 664) är de staplade hissarna 63 % av sidan och jorden och månen 59 %.
  - **I den staplade hissen** är vågens display 14,5 i stället för 13 (bara staplad). Den högra panelen flyttas 20
    enheter åt vänster, så att korgarna står rakt under varandra.
  - **Motorfix i balansregeln (`paginera`):** sidan före en figur som skilts från sitt stycke balanserades inte. I
    D:s djupdykning på mobilen stod stycket före de staplade hissarna då ensamt (32 %). Nu tar den sidan den sista
    gruppen från sidan före, som andra tunna sidor. Sidan före en sidbrytning lämnas som förut.
  - **Grinden:** två nya prov. *Två paneler:* lika stora, ingen text under 14 px och ingen överlappning, bredvid
    varandra eller staplade. *Jorden och månen:* pilarnas förhållande (±1 px), personerna lika stora och samma massa
    i båda. Provboken har ett fall med andra värden.
- **2026-11-05, III textändringar (A medelfart, B friktion, D Fördjupning v2):**
  - **A Rörelse:** rubriken "Vid en olikformig rörelse räknar man ut medelfarten" med sina stycken, ordagrant ur
    `III-A-medelfart-Standard-Enkel.md`, i avsnittet `rorelsen-i-prickarna`. I Standard står den efter figuren
    olikformig, i Enkel efter stycket om cykeln i stan, och i båda före accelerationen. Begreppet är
    `*medelfarten|medelfart*`. "Det här lär du dig" har fått punkten `*medelfart*`, som begrepp som de andra
    punkterna, och Sammanfattningen punkten ur ordern. Fördjupning är oförändrad.
  - **B Kraft och friktion, Standard:** "Friktion är ibland ett hinder och ibland en nödvändighet" och dess två
    stycken, sist i avsnittet `friktion`, är ersatta med källans sex rubriker och deras stycken, ordagrant ur
    `III-B-Standard-friktion-hinder-nodvandighet-v2.md`. Den första rubriken är densamma som förut. Den gamla filen
    ligger i `Arkiv/2026-11-05-fore-textandringar/kraft-och-friktion/`. Enkel och Fördjupning är oförändrade.
  - **D Tyngdkraften, ny Fördjupning (v2):** `innehall/tyngdkraften/fordjupning.js` är ersatt med
    `III-D-Tyngdkraften-Fordjupning-v2.md`, ordagrant. Den gamla filen ligger i
    `Arkiv/2026-11-05-fore-fordjupning-v2/tyngdkraften/`. Joachims nya regel: Fördjupning förutsätter Standard och
    upprepar den inte.
    - **Avsnitt:** Inledning, *Gravitationen och normalkraften* (`tyngdkraft-och-normalkraft`), *Massa och tyngd*
      och Sammanfattning. Det finns inget `att-mata-kraft` (dynamometern står i Standard). Nivåbytet från
      `att-mata-kraft` går till närmaste föregående avsnitt, `tyngdkraft-och-normalkraft`. Det är samma regel som i
      A, och motorn är oförändrad (Joachims beslut 2026-11-05).
    - **Formeln:** gravitationslagen skrivs `F = G · [[m₁ · m₂|r²]]`. Förklaringen till r är källans "avståndet
      mellan deras mittpunkter (m)".
    - **Tabellerna:** två tabeller (g på olika avstånd och g på olika himlakroppar). Huvudena har stor bokstav först,
      som i v1, och "g (N/kg)" står med gemener.
    - **BILD J** är samma `jord_och_mane` som förut (590 N och 96 N), efter den andra tabellen.
    - **Sammanfattningen:** källans åtta punkter står i två punktlistor (4 + 4). Med åtta punkter i ett block rymdes
      sidan inte (65–91 px för hög), och motorn delar aldrig ett block. Texten är oförändrad.
  - **RAM.md:** regeln "Fördjupning förutsätter Standard" och raden om medelfart ersätter "Enkel och Fördjupning ur
    samma kärna".
- **2026-11-05, Elevboken för III. Rörelse och kraft:** plattformens elevbok, ordagrant ur Geografibok
  (`cd9251d`), med fysikens frågor ur `Elevboken-III-Rorelse-och-kraft-v2.md`. Det står mer under *Elevboken*.
  - Prefixet `fys-elev-` är en parameter. Standardvärdet `geo-elev-` är oförändrat.
  - Länkblocket i Sammanfattningen i III A–D har fått `'elevbok'`.
- **2026-11-05, djupdykningarna tillbaka längst ned på avsnittssidan (Joachims beslut):** de var en fjärde nivå i
  varje text, och det var fel i ordrarna. Nu hör de till avsnittssidan och är egna böcker, se *Djupdykningar*.
  - **Filerna** är flyttade oförändrade, byte för byte: `innehall/<text>/djupdykning.js` blev
    `innehall/djupdykningar/{galileo, bromsstrackan, raketer, tyngdloshet}.js`.
  - **Titlarna** är källornas fulla titlar, och korten har bara titeln (Joachims svar).
  - **Ur motorn borttaget:**
    - `egenNiva`, alltså nivån i omslagets undertitel ("Rörelse – djupdykning");
    - nivån i omslagets cachenyckel;
    - undantaget för länkblocket, som nu gäller djupdykningsböcker i stället för en nivå utöver de tre.
  - **Kvar i motorn:** nivåbytet och fler nivåer ur data. De fanns före djupdykningarna och prövas av provboken, vars
    extra nivå heter Extranivå.
  - **Gamla läsplatser** för nivån djupdykning läses inte längre.
  - **Grinden:**
    - nivåraden har inga djupdykningar;
    - sektionen står sist i Läs, med ett kort per djupdykning;
    - varje kort öppnar rätt bok (omslaget, förteckningen, ingen nivåväljare), och texten och nivån är desamma
      efteråt;
    - figurerna i djupdykningarna mäts där.
- **2026-11-06, Elevboken: underfrågor med egna rutor (Joachims beslut, ändrar "en ruta per huvudfråga"):**
  - **Plattformens ritning** fick två valfria fält, `hjalp` och `underfragor`. Ändringen är bakåtkompatibel och
    ska föras till Geografibok. Raderna står i tabellen under *Elevboken*.
  - **Utan fälten** ritas geografins frågor tecken för tecken som förut. Det jämfördes en gång med modulerna före
    ändringen (demografi: 34 frågor, samma DOM), och grinden prövar det sedan dess med kopian i
    `verktyg/elevbok-geografi/`.
  - **`data/fragor.json`** är ombyggd ur källan v2, ordagrant (43 av 43 rader):
    - fråga 1 har a–d, fråga 5 och 6 har a–c;
    - frågorna 5, 8 och 10 har en andra mening på en egen rad;
    - "Använd begreppen" och "Läs i" står i `hjalp` i alla tio.
  - **Tidigare svar:** Elevboken var pushad (d26ebcd), och elever kan ha svarat under `q_iii_01`, `q_iii_05` och
    `q_iii_06`. Ett sådant svar står kvar under underfrågorna, märkt "Ditt tidigare svar".
  - **Hjälpraderna** har plattformens dämpade förklaringsstil (som `.matris-forklaring`: `--muted`, 0,92 rem, vanlig
    vikt). Plattformen har ingen egen klass för hjälptext.
- **2026-11-06, grinden: bladvändningens tidsprov körs om en gång vid rött (Joachims order):** rött bara om båda
  körningarna är röda, gränserna 450 ms och 50 ms är desamma, och omkörningen står i utskriften. `--negativ` har
  fått "hackig bladvändning" (rött i båda körningarna) och "hackig bladvändning en gång" (grönt efter omkörningen).
- **2026-11-06, III B: luftmotstånd på alla nivåer (arbetsorder 6):** ordagrant ur `III-B-luftmotstand-alla-nivaer.md`,
  i avsnittet `friktion`.
  - **Standard:** tre rubriker efter "Friktionen beror på ytorna …", före "Friktion är ibland ett hinder …", och en
    punkt sist i Sammanfattningen.
  - **Enkel:** fyra rubriker på samma plats, och en punkt i Sammanfattningen.
  - **Fördjupning:** tre rubriker efter "Luftmotstånd växer med farten", som står kvar.
  - Sidorna i 1366 × 633: Enkel 17 → 20, Standard 16 → 18, Fördjupning 11 → 14. Inga brott och inga tunna sidor.
  - **Elevboken, fråga 6:** underfrågan d (`q_iii_06d`, "Vad är luftmotstånd och vad beror det på?"), och
    "luftmotstånd, farten, formen" sist i "Använd begreppen". De andra id:na och texterna är oförändrade.
- **2026-11-06, felet "texten försvinner" (arbetsorder 7):** en sida visade sidhuvudet men inga block.
  - **Orsaken:** varje blocks element finns en gång per bok och flyttas in i sidan som byggs. `byggSida` återanvänder
    en byggd sida så länge `flytt` är oförändrad, men `flytt` räknades bara upp av `paginera`, inte när `layout()`
    tog fram en sparad brytning för ett annat sidmått. Med sidmåttet A → B → A → B (till exempel helskärm av och på,
    eller ett fönster som ändrar storlek) flyttades blocken till A:s sidor, och B:s gamla sidor visades sedan utan dem.
    Att stänga och öppna boken hjälpte inte, eftersom brytningen var sparad. Att öppna en annan bok hjälpte, eftersom
    dess brytning räknade upp `flytt`.
  - **Rättningen:** en rad i `layout()`. `flytt` räknas upp när en annan brytning tas fram, så att dess sidor byggs om.
  - **Grinden:** sidmåttet A → B → A → B med boken öppen, där samma mått ska visa samma block. Provet var rött före
    rättningen, med 2–3 block borta i alla fyra lägen. Dessutom ett svep där varje sida i varje bok har block, också
    efter bladvändning fram och tillbaka och efter att en annan bok öppnats och stängts.
  - **Samtidigt:** ett intervall ("80–90") bryts inte efter tankstrecket. `bindTal` lägger ett ordskarvstecken
    (U+2060) efter strecket. Det provas med "80–90 procent" i provbokens Tryck, i en 1 px bred spalt.
- **2026-11-07, figuren vid stycket (order 8, Joachims beslut):**
  - **Inventeringen:** 15 figurer stod på ett annat uppslag (dator) eller en annan sida (mobil) än stycket före dem
    (`verktyg/bilder/figur-skild/`).
    - 5 rymdes inte på en sida tillsammans med stycket.
    - 10 skildes av 40 %-regeln. Tre av dem låg nära gränsen och avgjordes i en riktig sida.
    - Kantfall i innehållet: 0.
    - Joachims fall: III B Enkel i 1366 × 633, sidan 12 → 13, figuren "I förstoring".
  - **Uppslagsregeln och kantfallet:** se *Brytningen*.
  - **Utfallet på datorn** (9 av de 15 fallen):
    - Krympning (högst 15 %) löste 0 fall. Steget togs bort (Joachims beslut: kunde ge text under 14 px).
    - Flytt löste 7 fall. Sidorna som stycket lämnade blev 34, 37 och 40 % fyllda; i satellitfallet står stycket nu
      på vänstersidan och figuren på högersidan.
    - 2 fall är undantaget: III C Fördjupning i 1366 × 768, fönster och helskärm. Stycket står först på sin sida, och
      dess andra figur står på nästa uppslag.
  - **Mobilen:** 6 fall står kvar, med varning.
  - **Grinden:** uppslagsregeln och undantaget i svepet; varningar för mobilen; varning på batteri; omkörning av
    ett läge när Chrome stängs.
- **2026-11-07, kapitel I Materia och universum, avsnittssida I Solsystemet och jorden (order 9, steg 1):**
  - **Kapitlet:** `materia_och_universum/` med `kapitel.js`. Omslaget har överraden "Kapitel 1" och titeln "Materia
    och universum". Motivet `materia-och-universum` (figurer.js) är nytt: solen, planetbanorna och en förstoring av
    jorden med kolatomen, i samma stil som Kraft och rörelse. Filmerna har inget omslag för kapitlet.
  - **Kapitelindexet:** I Solsystemet och jorden, och II Universum och världsbilder · III Materia · IV Stjärnorna ·
    V Människan och rymden ("kommer"). Startsidan länkar kapitel I.
  - **Avsnittssidan:** texterna A Solsystemet · B Himlakroppar · C Jordklotet · D Dygn, månad, år och årstider på
    tre nivåer, och fyra djupdykningar ("kommer"). Ingen Elevbok ännu.
  - **Grinden:** startsidan och kapitelindexen för båda kapitlen (tabellen `KAPITEL`). Ett delkapitel där allt
    "kommer" prövas bara på hubben.
- **2026-11-07, Solsystemet och jorden: texterna (order 9, steg 2):** alla tolv böckerna (A–D × tre nivåer) är
  införda ordagrant ur `Kap1-Avsnitt1-Standard-A-D-redigerad.md` och `Kap1-Avsnitt1-{A,B,C,D}-…-Enkel-Fordjupning.md`.
  - **Struktur:** `##` blir avsnitt, och id:t kommer från källan (Fördjupning). Där källan saknar id blir det
    `inledning` och `sammanfattning`, annars titelns form, till exempel `solen-ar-centrum-i-vart-solsystem`. Enkel och
    Standard har samma avsnitt.
  - **Övrig konvertering:** `###` blir rubrik. "Det här lär du dig:" blir en liten rubrik utan kolon. Länkblocket
    följer motorns konvention.
  - **Bildmarkeringarna** står som kommentarer på sin plats i filerna. Eleven ser dem inte, och figurerna kommer i
    steg 3.
  - **Begreppen i Standard:** de som Enkel och Fördjupning markerar för samma text är markerade första gången de står
    i Standard-texten, i stycken och punkter men inte i rubriker. En böjd form blir `*form|grundform*`. Listan finns i
    filhuvudet.
  - **Kontroll:** ett skript jämför block för block med källorna, och alla tolv är ordagranna. `?kontroll` är grön
    för alla tolv: inga brott och inga tunna sidor, och förteckningen ryms på en sida. Varje bok har 10–13 sidor.
  - **Långa punktlistor** (mer än 7 punkter: Sammanfattningen i D, Standard och Fördjupning) står som två listor i
    följd, 60/40, med samma text. En lista delas aldrig, och som en enda lista blev sidan 34–55 px för hög. Med en
    delning på mitten blev sidan före brytningen 40 % fylld på mobilen.
  - **Steg 3, figurerna (2026-11-07):** fem nya figurtyper i `figurer.js`. Motorn ritar dem ur data, utan foton.
    Varje figur har `data-rymd`, och grinden mäter det figuren påstår:
    - **`himlakroppar_i_skala`:** cirklar i samma skala med namn, och en bit av solens kant om `kant` är angiven.
      Används till BILD S1 (A, Enkel och Standard: planeterna bredvid solens kant) och BILD M (B, Enkel och
      Standard: jorden och månen, Jupiter och dess fyra stora månar, och Merkurius som jämförelse). Grinden mäter
      att radierna står i diametrarnas förhållande.
    - **`avstandslinje`:** avstånden från solen som prickar på en linje, i AE eller miljoner km. Används till BILD S2
      (A Enkel), i miljoner km, eftersom AE först kommer i Fördjupning. Grinden mäter att lägena står i proportion
      till avstånden.
    - **`jordklot_tyngd`:** ett genomskuret jordklot med fyra personer (Sverige och Australien namngivna) och en
      kraftpil från var och en mot jordens mitt (BILD K, C). Grinden mäter att varje pil pekar mot mitten.
    - **`manfaser`:** jorden i mitten, solljuset från vänster. Inre ringen visar månen i åtta lägen, belyst mot
      solen. Ytterringen visar hur månen ser ut från jorden (BILD F, D). Grinden mäter den belysta halvan och
      faserna.
    - **`arstider`:** solen och jorden i fyra lägen, med axeln lutad 23,5° åt samma håll och natthalvan bort från
      solen. Sommar och vinter på norra halvklotet är markerade (BILD Å, D). Grinden mäter lutningen och att
      sommaren står där norra halvklotet lutar mot solen.

    Jordklotet, månfaserna och årstiderna är runda figurer och får upp till 45 % av sidhöjden, som kanonen.
    Provboken (Tryck) har ett fall av varje figurtyp med andra data. Bildtexterna är skrivna efter ordern och
    källornas bildbeskrivningar.
    - **Standard A har en enda bildmarkering.** Den beskriver storlekar och avstånd i samma skala på en lång linje,
      och ordern säger S1. Den har fått S1. Det finns ingen S2 i Standard.
  - **Källorna har inte** rutan "Så bläddrar du" (III:s källor angav den uttryckligen), inte rubriken "Det
    viktigaste" i Sammanfattningen och ingen rubrik i Standards Inledning. Inget av det lades till i steg 2.
- **2026-11-07, kapitel I, avsnitt I: Joachims tillägg efter rapporten:**
  - Rutan "Så bläddrar du" står sist i Inledningen i alla tolv böckerna, med samma text och placering som i III.
  - Rubriken "Det viktigaste" står först i Sammanfattningen i alla tolv.
  - Standards Inledning har Enkels rubrik (Solsystemet, Himlakroppar, Jordklotet, Dygn, månad, år och årstider).
  - Markeringen "roterar" i C Standard är struken.
  - **Listorna:** med rubriken i Sammanfattningen blev C Fördjupning (7 punkter) 3–12 px för hög. Listor med mer än
    6 punkter står nu som två listor i följd, med samma text.
  - **Kontrollskriptet** godkänner just dessa tillägg på sina platser, och inget annat.
- **2026-11-07, kapitel I, avsnitt I: de fyra djupdykningarna (arbetsorder 10):**
  - **Källorna** ligger i `kallor/kap1/` (Kap1-DD-A–D). De är införda ordagrant i
    `innehall/djupdykningar/{solstormar, venus, jupiters-manar, nedslag}.js` av `verktyg/kap1-omvandlare.js`.
  - **Modellen är III:s:** en egen bok utan nivåer, kortet längst ned i *Vill du veta mer?*, ingen Sammanfattning och
    inget länkblock.
    - Styckena före första `##` är Inledningen (onumrerad). Källan har ingen rubrik där, och ingen är tillagd.
  - **Avsnittens id** är valda i omvandlaren, en gång för alla.
  - **Korten** blev länkar när böckerna fick innehåll, som i motorn. Titlarna var redan böckernas titlar, och korten
    har ingen beskrivning (III:s modell: bara titeln).
  - **Bildmarkeringarna** står som kommentarer på sina platser.
  - **Kontrollen:** `verktyg/kap1-ordagrant.js` prövar böckerna mot källorna och att kortens titlar och ordning
    stämmer. Negativt prövat med ett ändrat ord, en struken bildmarkering och en kortad korttitel: alla tre röda.
  - **Jupiterfiguren (steg 2):** den första markeringen i "Jupiters månar och Saturnus ringar" ritas av
    `himlakroppar_i_skala` efter kommentaren, med orderns data och bildtext (Jupiter 139 800 km, Io 3 640, Europa
    3 120, Ganymedes 5 270, Kallisto 4 820). Storleken är figurtypens standard.
    - Med `storst: 150` blev månarna större, men då krympte figuren på datorn och namnen blev cirka 12 px.
    - Provboken (Tryck) har samma fall. Grinden mäter skalan i båda.
- **2026-11-07, motorn för Nästa steg (arbetsorder 11, steg 1):**
  - **Fristående böcker:** djupdykningarna blev ett av fyra slag (Nästa steg, övningsböcker, stödböcker), med
    länkar mellan böckerna och "↩ Tillbaka till <boken>". Se *Fristående böcker*.
  - **Blocken:**
    - `formel` med förklaringen som text: på en rad, och uttrycket krymper i en smal spalt;
    - `exempel` i rader;
    - `prova`, `rader`, `numrerad`, `bokref` och `boklank`;
    - index med understreck (`F_N`);
    - enheten `mN`.
  - **Brytningen:** formeln följer uppslagsregeln, ett EXEMPEL bryts bara mellan raderna och bara när det är högre
    än sidan, Svar står aldrig ensam, och en PROVA-ruta delas aldrig.
  - **Provboken** har en bok av varje slag med alla de nya blocken: ett exempel som ryms och ett som är högre än en
    sida i alla lägen, ett långt formeluttryck och länkar åt båda hållen.
  - **Grinden:** nya prov (se *Kontrollera*), fyra negativa prov, `--negativ=<namn>` och `--visa`.
- **2026-11-07, Nästa steg · Kraft och rörelse och Matematiken i fysiken (arbetsorder 11, steg 2):**
  - **Källorna** (de versioner ordern anger: textboken v3, övningsboken v2, Matematiken v2) ligger oförändrade i
    `kallor/nasta-steg/`. De är omvandlade av `verktyg/nasta-steg-omvandlare.js` och prövas av `verktyg/ordagrant.js`.
  - **Platserna:**
    - textboken: blocket *Nästa steg – gymnasiets fysik* under djupdykningarna på avsnittssida III;
    - övningsboken: fliken Öva där;
    - Matematiken i fysiken: en egen sida, `nasta_steg/matematiken_i_fysiken/` (bara boken). Den finns också utan
      kort på avsnittssida III. Textboken och övningsboken finns utan kort på Matematikens sida.
    - startsidan: blocket *Nästa steg* med listan (III Kraft och rörelse) och Matematiken i fysiken bredvid. Länkarna
      öppnar böckerna direkt.
  - **Länkarna:**
    - [MATTE] matchas på avsnittsrubriken och [ANVÄNDS I] på avsnittsnumret (titeln prövas också).
    - Fyra poster står som text utan länk, som ordern säger: "alla avsnitt i Nästa steg", "nästan alla avsnitt i
      Nästa steg", "Fysikboken: Resulterande kraft, Fördjupning" och "Fysikboken: Resulterande kraft".
    - Länken till övningsboken står sist i textbokens "Så här använder du boken" (det enda tillägget).
  - **Listor med fler än 6 punkter** är delade i listor med högst 4 punkter. Textbokens Sammanfattning (11 punkter)
    var annars 300–480 px för hög; Matematikens lista över prefixen (9) delades enligt samma regel.
  - **[BILD]** står som kommentarer på sina platser (figurerna: steg 3).
  - **Grinden:** startsidans Nästa steg (länkarna öppnar böckerna, Stäng och brödsmulan leder tillbaka) och
    Matematikens sida (scenariot för en sida med bara fristående böcker).
- **2026-11-07, figurerna i Nästa steg (arbetsorder 11, steg 3):**
  - **Två nya figurtyper:** `diagram_graf` och `vektor_rutnat` (se *Figurer*).
  - **Figurerna står efter sina bildmarkeringar**, skrivna av omvandlaren, och värdena är bildmarkeringarnas:
    - textboken: tre läge–tid-diagram (stilla, konstant hastighet, ökande fart) och cyklistens hastighet–tid-diagram
      med triangeln och rektangeln skuggade;
    - Matematiken: hastighet–tid-diagrammet med triangel, rektangel och streckade Δt och Δv (värdena som exemplet läser
      av: 4 s, 8 m/s, 10 s), Pythagoras 3 + 4 rutor med hypotenusan och den räta vinkeln, och 40 N + 30 N i skalan
      1 ruta = 10 N med resultanten 50 N.
  - **Klossen i vatten** (textboken, avsnitt 10) står bara som kommentar. `kraftpilar` ritar krafterna från
    föremålets mitt och kan inte rita vattnet, tryckpilarna mot sidorna eller lyftkraften med sitt namn.
  - **Provboken (Tryck)** har två diagram bredvid varandra med andra data (en kurva, och en graf med tal, ytor och
    Δ-linjer) och tre pilar på rutat papper med resultant och skala.
  - **Negativt prövat:** en punkt flyttad, ytornas hörn flyttade, en pil som inte börjar vid den förra spetsen och en
    resultant som slutar fel. Alla fyra röda.
  - **Värdena och namnen i figurerna** står i rapporten: diagrammens rubriker och axlarnas storheter, och pilarnas
    namn.
- **2026-11-07, Kraft och rörelse, avsnitt IV Fall, kast och balans, text A Resulterande kraft (arbetsorder 12,
  steg 1):**
  - **Avsnittssidan** `kraft_och_rorelse/fall_kast_och_balans/` är byggd som III (omslag, fyra textkort, nivåval),
    utan djupdykningsblock. A Resulterande kraft har tre nivåer, och B Fritt fall, C Kaströrelse och D Tyngdpunkt
    och balans är "kommer" (tomma filer).
  - IV är en länk i kapitelindexet. Titeln och beskrivningen är kortets.
  - Bannerns rad är kapitelindexets beskrivning av IV.
  - **Källan** (v3) ligger oförändrad i `kallor/kap3/`. Den är omvandlad av `verktyg/kap3-omvandlare.js` och prövas
    av `verktyg/ordagrant.js`.
  - **Tilläggen enligt III:s norm:** rutan "Så bläddrar du" sist i Inledningen och länkblocken. Källan har redan
    rubrikerna och begreppsmarkeringarna på alla nivåer.
  - **Fördjupning** har egna avsnitt (`komposanter`, `kraftuppdelning`). Nivåbytet går till närmaste föregående
    avsnitt.
  - **[BILD R1–R4]** står som kommentarer (figurerna: steg 2).
  - **Motorn:** webbläsarens framåt öppnar nu boken på läsplatsen, som sparas i historiken. Förut öppnades den vid
    adressen, och den pekar på sidans senaste rubrik. Börjar sidan mitt i ett avsnitt hamnade boken då ett uppslag
    för tidigt. Det syntes först på IV, där bara en text har innehåll.
- **2026-11-08, figurerna R1–R4 i IV A (arbetsorder 12, steg 2):**
  - **Den nya figurtypen** `resultant_rutor` har tre lägen: steg, vinklar och komposanter. `kraftpilar` har fått
    kedja, röd resultant, komposanter och lampan i snören (se *Figurer*).
  - **Figurerna står efter sina bildmarkeringar**, i `verktyg/kap3-figurer.js`:
    - R1: två kraftpilar på Standard och Enkel – 300 N + 200 N efter varandra, och 300 N åt vänster mot 250 N åt
      höger. Resultanterna är röda.
    - R2: tre steg på Standard och Enkel. F₁ (4, 0) och F₂ (3, 4) ger resultanten (7, 4) ≈ 81 N. Rubrikerna och
      bildtexten är skissens.
    - R3: 100 N vid 0°, 45°, 90° och 180° (200, ≈ 185, ≈ 140 och 0 N) på Standard och Enkel. Bildtexten är
      skissens.
    - R4: Fördjupning. Pilen (5, 1) har komposanterna 50 N och 10 N, och lampan hänger i två snören (50° och 130°
      från det vågräta, tyngden 10 N).
    - R4:s två delar står under varandra, som två figurer efter markeringen.
  - **Provboken (Tryck)** har ett fall av varje läge och av kedjan och lampan, med andra data.
  - **Negativt prövat:** ett fel per läge och per kraftpilsvariant. Alla fem röda.
  - **Matematikens sida** har fått luft under bannern (sidan har ingen flikrad).
- **2026-11-08, två rättelser i IV A:**
  - **Källan är nu v4** (`IV-A-Resulterande-kraft-alla-nivaer-v4.md`; v3 ligger kvar i `kallor/kap3/`). Enda
    skillnaden: [BILD R2] i Standard står direkt efter de tre stegen. Omvandlaren och ordagrant-kontrollen läser v4.
  - **R2 och stegen:** på dator och i helskärm står de på samma uppslag (stegen s. 9, R2 s. 10). På mobilen står
    stegen sist på s. 8 och R2 först på s. 9. De ryms inte på en sida tillsammans med rubriken och stycket före, och
    flyttas listan blir s. 8 tunn (under 40 %). Motorn är oförändrad, och ingen sida är delad för hand.
  - **Kapitelindexet, kort IV:** "Resulterande kraft, fritt fall, kaströrelse, tyngdpunkt och balans." Bannerns rad
    på avsnittssidan är samma text med liten bokstav.
- **2026-11-08, Nästa steg-textboken v4 (arbetsorder 13, del 1):**
  - **Källan är v4** (`kallor/nasta-steg/Nasta-steg-Kraft-och-rorelse-textbok-v4.md`; v3 ligger kvar). Texten är
    uppackad för självstudier: mellanled på egna rader, 11 PROVA-rutor och ett nytt sista avsnitt, *Facit till Prova
    själv*. Omvandlaren och ordagrant-kontrollen läser v4, och textboken är ordagrann (465 rader ur källan).
  - **Länken till övningsboken** står sist under rubriken "Pröva dig själv efter varje ny formel", efter meningen om
    övningsboken. Ordagrant-kontrollen godkänner den bara där.
  - **Den nya figuren** i avsnitt 4 under "Förflyttningen är arean under grafen" (`bild-s-formeln`): `diagram_graf`
    med v₀ = 2 m/s, a = 1 m/s², t = 4 s. Grafen går från (0; 2) till (4; 6), rektangeln heter "v₀ · t" och
    triangeln ovanpå "a · t² / 2", i två ljusa toner. `diagram_graf` har fått namn på ytorna (se *Figurer*).
  - **Negativt prövat** i alla fyra lägen, alla röda: ett hörn flyttat i data (triangeln till (4; 2,5)), ett namn
    utanför sin yta, och ytorna ritade 6 enheter vid sidan av sina koordinater.
  - **Textboken v4** har 93 sidor i 1366×633, 93 i 1366×768 och 89 på mobilen. Brytningstiden (median, CPU×6) är
    cirka 140 ms efter den snabbare brytningen. Kontrolläget är grönt; den tunna sidan 9 i helskärm försvann med
    exempelregeln (se *Brytningen*).
- **2026-11-08, länkar från Fördjupning till Nästa steg (arbetsorder 13, del 2):**
  - **Rutan "Vill du gå vidare?"** står sist i varje Fördjupningsbok i Kraft och rörelse, efter Sammanfattningens
    länkblock: "Läs mer i Nästa steg – gymnasiets kraft och rörelse:" och länkar som öppnar textboken vid avsnittet.
    Länktexten är avsnittets nummer och titel. Rutan är motorns (blocktypen `vidare`), inte källtextens.
  - **Kopplingen** står i `verktyg/vidare-rutor.js`, som skriver rutan i filerna och räknar länktexterna ur textboken.
    Den följer ordern rakt av:
    - III A Rörelse: 1. Storheter med riktning · 2. Medelhastighet och momentanhastighet · 3. Rörelsen i diagram ·
      4. Acceleration
    - III B Kraft och friktion: 7. Friktionskoefficienten · 6. Tyngden och fritt fall
    - III C Kraft och motkraft: 5. Newtons andra lag · 8. Rörelsemängd och impuls
    - III D Tyngdkraften: 6. Tyngden och fritt fall · 5. Newtons andra lag
    - IV A Resulterande kraft: 1. Storheter med riktning · 5. Newtons andra lag
    Avsnitt 9 och 10 (tryck och lyftkraft) har inga länkar än.
  - **IV A** skrivs om av `kap3-omvandlare.js`, som lägger in rutan i Fördjupningen. Ordagrant-kontrollen godkänner
    rutan bara sist i Fördjupningens Sammanfattning och bara med kopplingens länkar (prövat: en bytt länk ger FEL).
  - **Avsnittssida IV** har textboken, övningsboken och Matematiken i fysiken som länkmål utan kort.
  - **Grinden:** varje Fördjupningsbok med rutan öppnas, rutan står sist i boken, och varje länk öppnar textboken vid
    avsnittet med det numret och den titeln. "↩ Tillbaka till" leder tillbaka. Negativt prov: `vidare-länk med fel
    id` (`?kontroll&prova=vidare-fel`).
- **2026-11-11, IV B Fritt fall (Joachims uppdrag):**
  - **Källan** `kallor/kap3/IV-B-Fritt-fall-alla-nivaer-v2.md` är skriven av Claude. Den bygger på v1 (Joachims
    föreläsningsanteckningar), inspelningsmanuset och den inspelade föreläsningen, och går längre än filmen:
    - **Ur föreläsningen:** försöket med boken och pappret, "det är inte tyngdkraften som är lika stor, det är
      accelerationen" och stolen och taket.
    - **Nytt:** räkneexempel (stol eller tak, m/s till km/h), "en längre inbromsning ger en mindre kraft" (mattan,
      sanden, krockkudden, hjälmen), pappret ovanpå boken, Aristoteles och Galileo, hopparens kroppsställning och
      regndropparna.
    - **Fördjupning:** dessutom tiohoppet, sten och fjäder i siffror (a = F / m) och ett diagram (hastigheten och
      fallsträckan mot tiden).
  - **Figurerna** (`kap3-figurer-b.js`) är av befintliga sorter: kraftpilar (B1, B2, B4 och fallskärmshopparens fyra
    lägen med samma skala), `jordklot_tyngd` (B3) och `diagram_graf` (B6). Motorn är inte ändrad.
  - **Sammanfattningarna** är korta och delade i två punktlistor: motorn delar aldrig en punktlista, och en lång lista
    fick inte plats på en sida.
  - **Fördjupningens diagram** står efter Galileo. Direkt efter fallsträckorna stod det skilt från stycket före, fast de
    ryms tillsammans (kontrolläget, rött).
  - **Ordagrant-kontrollen** prövar B som A, också exempelrutorna och rutan "Testa själv". Negativt prövat: ett bytt
    ord och en bytt vidare-länk ger FEL.
  - **"Vill du gå vidare?"** i B: 6. Tyngden och fritt fall · 3. Rörelsen i diagram · 5. Newtons andra lag
    (`vidare-rutor.js`).
- **2026-11-11, musikvideor och föreläsningar per text, och Galileo på IV (Joachims uppdrag):**
  - **Musikvideo** är en ny flik, sist i flikraden, och en länk sist i Sammanfattningens länkblock.
  - **Hjälpmedel per text** (`texter[].hjalpmedel`). IV B Fritt fall har föreläsningen
    `youtube-nocookie.com/embed/9Pf7AWzPKds`. Musikvideon är på gång.
  - **Länken i löptexten:** i IV B Standard (avsnitt 2 Fritt fall, "En gammal missuppfattning") är meningen "Du kan
    läsa mer om Galileo i djupdykningen om honom." en länk till djupdykningen om Galileo. Meningen finns bara på
    Standard: Enkel och Fördjupning har den inte.
  - **Galileo-djupdykningen** står också på IV under "Vill du veta mer?". Det är samma bok (samma fil och id), ingen
    kopia, och läsplatsen sparas per avsnittssida.
  - **Sidfotens mått:** foten mäts med just den länkrad som står på sidan. Förut mättes alla fötter med bokens första
    rad. Det syntes när Sammanfattningens rad (Öva · Självskattning · Elevbok · Musikvideo) blev två rader:
    räkningen och den riktiga sidan skilde sig åt (IV B Enkel), och en sida fick inte plats (III B Enkel, helskärm).
  - **Länkraden** har tätare radavstånd (1,1, utan mellanrum mellan raderna), och sidfoten har lite mindre luft.
  - **Grinden:**
    - flikraden med Musikvideo sist;
    - hjälpmedel per text: varje text visar sin video, en text utan är tonad, och Läs-flikens textval rörs inte;
    - textlänkarna: länken öppnar boken, och Tillbaka leder tillbaka.
    - Negativt prov: `textlänk till en bok som inte finns`.
- **2026-11-11, IV C Kaströrelse, steg 1 (arbetsorder 16):**
  - **Källan** `kallor/kap3/IV-C-Kastrorelse-alla-nivaer-v1.md` (en oförändrad kopia) är omvandlad av
    `kap3-omvandlare.js --text c` och prövas av `ordagrant.js`.
  - **Bildmarkeringarna K1–K6** står som kommentarer. `verktyg/kap3-figurer-c.js` är tom tills steg 2.
  - **"Vill du gå vidare?"** i C: 1. Storheter med riktning · 6. Tyngden och fritt fall.
  - **En punktlista kan delas** mellan två punkter om den inte ryms på en sida (blocktypen `punktdel`, se blocken).
    Sammanfattningarnas "Det viktigaste" i C rymdes inte på någon nivå (15–178 px för mycket), och texten ska in
    ordagrant. Marginalerna är desamma som i en hel lista. `brytning-jamfor.js` före och efter: sidindelningen är
    densamma i alla 567 böcker × mått utom C, där listan nu delas i stället för att gå utanför sidan.
  - Kontrolläget säger till om en punktlista är delad fast den ryms. Det räknas som i brytningen: med rubrikerna före
    listan, och med sidfoten om en fot följer.
- **2026-11-12, IV C Kaströrelse, steg 2 (arbetsorder 16):**
  - **Två nya figurtyper:** `kastbana` (lägena hoghus, komposanter och vinklar) och `cirkelrorelse` (lägena snore och
    bil), se figurerna. K1–K6 står på sina platser i Standard och Enkel (`verktyg/kap3-figurer-c.js`), K4 är den
    befintliga `newtons_kanon`. Fördjupningen har inga figurer.
  - **Grinden** mäter figurerna (`figurKoll`: `kc`). Provboken (Provtryck) har ett fall av varje läge med andra data.
  - **Negativa prov**, ett per läge, med ett fel i taget i figurkoden (provboken): bollen på fel höjd, de lodräta pilarna
    som växer olika, 60° som landar för långt, kraftpilen 12° vid sidan av mitten och den raka linjen 15° från
    tangenten. Alla fem gav rött med sitt eget fel.
  - **Kontrolläget, punktlistor:** upphovsraden sist i boken hör till gruppen före (som i brytningen) och räknas nu med
    när kontrollen avgör om en delad lista hade rymts. Utan den sa kontrollen "delad fast den ryms" om "Det viktigaste"
    i III B Enkel, 1366×768. Brytningen är oförändrad.
- **2026-11-12, IV D Tyngdpunkt, balans och kroppen, steg 1 (arbetsorder 17):**
  - **Källan** `kallor/kap3/IV-D-Tyngdpunkt-balans-och-kroppen-alla-nivaer-v1.md` (en oförändrad kopia) är omvandlad av
    `kap3-omvandlare.js --text d` och prövas av `ordagrant.js`. Bildmarkeringarna D1–D5 står som kommentarer.
  - **Titeln** är "Tyngdpunkt, balans och kroppen" (förut "Tyngdpunkt och balans"): kortet och boken (`texter` i
    `delkapitel.js`), bannerns rad (`undertitel`) och kapitelindexets beskrivning av IV. Mappen och id:t
    `tyngdpunkt-och-balans` är desamma, så det eleven sparat gäller.
  - **"Vill du gå vidare?"** i D: 4. Acceleration · 5. Newtons andra lag · 8. Rörelsemängd och impuls.
