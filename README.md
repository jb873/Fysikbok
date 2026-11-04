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

- **Var är jag:** sidhuvudet på varje sida visar avsnittets nummer och namn, och sidnumret står i det yttre hörnet.
- **Bläddra** med pilarna, ← och → (och PageUp/PageDown, Home/End) eller genom att svepa. Klick i
  innehållsförteckningen (sida 1) hoppar.
- **Sidvändning:** en snabb toning på 0,17 s eller *Direkt*. Animationen är av när datorn är inställd på minskad
  rörelse.
- **Inställningar** (under Innehåll):
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
    figurer.js                  de funktionella figurerna (SVG), specificerade i data
    typsnitt/                   EB Garamond och Marcellus SC (OFL)
  mall/delkapitel/              mallen för ett nytt delkapitel (kopieras hel)
  index.html                    startsidan: kapitlen I–III (I och II tonade "Kommer"), Översikt
  kraft_och_rorelse/            ett arbetsområde (kapitel III)
    index.html                  kapitelindexet: avsnittssidorna I–VI och resurskorten (tonade tills de finns)
    atomen_repetition/          avsnittssida I. Repetition – ett delkapitel, bara data
      index.html                mallen, ordagrant
      delkapitel.js             nummer, titel, undertitel, texter, hjälpmedel
      innehall/atomen/          text A: en bok per nivå (enkel.js, standard.js, fordjupning.js)
      innehall/joner-isotoper-bindningar/   text B
    materia_repetition/         avsnittssida II. Repetition, texterna materia/, densitet-och-varme/, varmespridning/
    rorelse_och_kraft/          avsnittssida III. Rörelse och kraft, texterna rorelse/, kraft-och-friktion/ och
                                kraft-och-motkraft/ (A–C, strömformatet) och tyngdkraften/ (D, tom: "kommer")
  Arkiv/                        gamla versioner (materia_repetition: utkastet från 2026-10-29)
  verktyg/
    bok-grind.js                verifieringen (se nedan)
    bilder/                     skärmbilder: grind/ (--bilder) och en mapp per arbete
    provbok/                    provdata för grinden, med texter (en bok per text) – inte elevinnehåll
    provbok-utan-texter/        provdata utan texter: grinden prövar att det läget fungerar som förut
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

## Lägga till en nivå

Varje nivå är en **självbärande bok** i sin egen fil, `innehall/<id>.js`. Den har egen innehållsförteckning och egna
sidor, och eleven läser den utan de andra nivåerna.

- **Ge en tom nivå innehåll:** skriv avsnitt i dess fil, som nu är `Bok.niva('enkel', { avsnitt: [] })`. Statusen
  härleds ur innehållet: med avsnitt blir nivån valbar, och utan avsnitt är den "kommer". Statusen skrivs aldrig för
  hand.
- **En ny sorts nivå,** till exempel *Djupdykning* bara där ämnet bär det:
  - Skriv ut hela listan `nivaer` i `delkapitel.js`, de tre plattformsnivåerna och den nya:
    `[{ id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }, { id: 'djupdykning', namn: 'Djupdykning' }]`.
  - Skapa `innehall/djupdykning.js` med `Bok.niva('djupdykning', {...})`.

  Ordningen i `nivaer` är ordningen i nivåvalet. `ikon` står före namnet på nivåknappen.
- **Avsnittens `id`** ska vara desamma på alla nivåer som har avsnittet. Det är så nivåbytet hittar rätt ställe.
  Ett avsnitt som bara finns på en nivå får ett eget id.
- **Varje nivå i `nivaer` har en fil,** också en tom (med texter: en per text). Saknas filen säger kontrolläget till.

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
      { typ: 'lank', till: ['ova', 'sjalvskattning'] }      // sist i avsnittet
    ] }
  ]
});
```

- **Avsnitt:** `{id, titel, block}`. `numrerad: false` ger ett avsnitt utan nummer (Inledning, Sammanfattning), och
  `kort` ger ett kortare namn i sidhuvudet. Numreringen, förteckningen, remsan och sidnumren räknas av sig själva.
- **`rubrik`** är påståenderubriken: den står i innehållsförteckningen och i adressen. **`underrubrik`** är en liten
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
- **Ingen sida under 40 %** fylld, utom sista sidan i ett avsnitt och sidan före en sidbrytning (`?kontroll`).
- **Balansen:** sidorna packas en i taget, så en sida blir tunn när nästa grupp inte får plats. Då tar den tunna sidan
  den sista gruppen (rubriken och dess stycke) från sidan före, om gruppen ryms och sidan före inte själv blir tunn.
  En grupp efter en sidbrytning eller en delad figur flyttas inte. (2026-11-03: Rörelse, Fördjupning, där sida 4
  annars blev 40 % fylld.)

Brytningen väntar på typsnitten (annars mäts fel), sparas per sidmått och görs om bara när sidmåttet ändras. Den
tar ungefär 10–90 ms med CPU:n strypt 6 gånger, som på en Chromebook (grinden: medianen under 200 ms). Innehållsförteckningen räknar ut sidnumren för
rubrikerna och krymper fortfarande sin egen text (ned till 70 %) om den behöver.
- **I texten:**
  - `*begrepp*` blir betonat, i djupblått som i filmerna.
  - `*atomer|atom*` skriver begreppet böjt men länkar till grundformen.
  - `[[m|V]]` blir ett bråk.
  - `<sub>2</sub>` och `<sup>3</sup>` ger index. Annan HTML visas som text.
  - Tal och enhet hålls ihop: mellanslaget mellan ett tal och en enhet efter det (`10 N`, `1 538 °C`, `5 m/s`,
    `18 km/h`) och tusentalsmellanslaget (`1 538`) blir hårda (U+00A0) när texten ritas, så att raden aldrig bryts
    där. Skriv vanliga mellanslag i källfilerna. Enheterna står i `ENHETER` i `bok.js`.
  - `*ord*` är alltid ett begrepp. Vill man bara betona ett ord blir det vanlig text.

| Block | Fält |
|---|---|
| `rubrik` | `text` |
| `text` | `text` (brödtext) |
| `punkter` | `punkter: [...]` |
| `figur` | `namn`, figurens data, `bildtext?`, `beskrivning?` (se *Figurer*) |
| `lank` | `till: ['ova', 'sjalvskattning', …]`: länk till plattformens hjälpmedel (se *Hjälpmedel*) |
| `ruta` | `rubrik?`, `text` eller `punkter`, `stil: 'definition'` för en större definitionsruta |
| `jamforelse` | `kolumner: [{rubrik, punkter}]`: två spalter sida vid sida |
| `formel` | `uttryck`, `forklaring: [[tecken, betydelse], …]` |
| `exempel` | `rubrik?` (standard "Exempel"), `rader: [...]` |
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
| `friktion` | `foremal?: 'Block'`, `underlag?: 'Bord'`, `pilar?: true`, `ytor?: 'normal' \| 'grov' \| 'slat'` | ytorna i förstoring. Överst "Så ser det ut": blocket på bordslinjen och kontaktytan i en streckad ruta. Nederst "I förstoring": blockets undersida och bordets yta med oregelbundna toppar och gropar som hakar i varandra (samma mönster varje gång; `ytor` avgör hur ojämnt), i olika dämpade färger. Strecklinjerna från rutan går till förstoringens hörn och korsar aldrig rubrikerna. Pilarna verkar på blocket: draget framåt och friktionen bakåt, lika långa; `pilar: false` ritar bara ytorna. Med andra namn än Block och Bord blir beskrivningen enklare ("Låda på hylla.") – skriv gärna en egen. |
| `bildpilar` | `bild` (adress från delkapitlets sida), `bredd`, `hojd` (fotots pixlar), `utsnitt?: [x, y, b, h]`, `pilar: [{namn, fran: [x, y], till: [x, y], etikett?: [x, y]}]`, `lika?: [[0, 1]]`, `beskrivning` (krävs), `bildtext?` | ett foto med kraftpilar ritade ovanpå. Allt i fotots pixlar. Fotot visar den verkliga situationen; pilarna ritas ur data, så att de alltid blir rätt. Pilarna är röda (#b3261e) med vit kant och en prick i angreppspunkten; etiketten (namnet, mitt på `etikett`, annars över pilens mitt) i samma röda, halvfet med vit kant. `lika`: pilar som ska vara lika långa – motorn vägrar rita annars (högst 1 px skillnad i fotot), och grinden mäter. En pil utanför utsnittet är fel. Fotot görs utan pilar. Figuren får vara upp till 45 % av sidhöjden. |

- `beskrivning` läses upp av skärmläsare. Utan den skriver figuren en själv ur sina data (inte `bildpilar`: ett foto
  kan inte beskrivas ur data).
- Figuren tar högst 32 % av sidhöjden, ett foto (`bildpilar`) högst 45 %.
- En figur med fel data visas som en markering på sidan, och kontrolläget säger vad som är fel.
- **En ny sorts figur** (inte en ny figur av en befintlig sort) är en ny funktion i `bokskal/figurer.js`. Det är
  utbyggnad av motorn, inte innehåll.

## Hjälpmedel: plattformens, länkade, aldrig byggda här

Plattformens hjälpmedel länkas, som i de andra böckerna. Motorn bygger inga egna quiz- eller ordlisteverktyg.

| Hjälpmedel (`hjalpmedel`) | Var det syns |
|---|---|
| `forelasning` | fliken **Föreläsning** på delkapitlets sida |
| `ova` | fliken **Öva**, och länken i slutet av varje text i boken |
| `elevbok` | fliken **Elevboken** |
| `sjalvskattning` | länken i slutet av varje text i boken (resurskortet hör till kapitlets index) |
| `begreppslista` | varje `*begrepp*` i boken (resurskortet Begreppsbank hör till kapitlets index) |

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
- **I slutet av ett avsnitt → öva/självskattning:** blocket `{ typ: 'lank', till: ['ova', 'sjalvskattning'] }` sist
  på avsnittets sista sida.
  - Det står i sidans fot, som en tyst rad under en tunn linje.
  - Det står där redan innan hjälpmedlet finns, så att sidan rymmer det.
  - Kontrolläget varnar för ett numrerat avsnitt som saknar länken.
- **Inifrån boken** öppnas ett hjälpmedel ovanpå boken, inbäddat med plattformens `?embed=1`. Eleven behåller sidan
  och helskärmen. Där finns också *Öppna i egen flik ↗* och *Tillbaka till boken* (eller Esc).
- **Ett nytt hjälpmedel** utöver de fem läggs till i `hjalpmedel` med ett eget namn: `{ namn: '…', href: '…' }`.
  Det kan länkas inifrån boken med `lank`. Flikraden är plattformens och ändras inte.

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
       innehållsförteckningen ska leda till en sida där rubriken syns. Nivålistan och menyn ska stängas med Esc.
       Boken ska stängas med ✕, Esc och bakåt, och öppnas igen på samma block. En adress till en rubrik ska öppna
       boken där. Läsplatsen ska synas igen efter byte av sidmått (fönster ↔ helskärm ↔ mobil). Är texterna egna
       böcker ska en annan text öppna en egen bok, och varje text minnas sin plats. Har boken flera nivåer med
       innehåll ska ett nivåbyte från en rubrik mitt i boken, genom alla nivåer och tillbaka, hamna i samma avsnitt.
       Figurerna mäts i varje text och på varje nivå: rörelsespårens avstånd ska följa rörelsetypen, och
       kraftparens pilar ska vara lika långa, motriktade och börja i var sitt föremåls mitt. I friktionen ska ytorna
       haka i varandra utan att gå in i varandra, strecklinjerna inte korsa rubrikerna, draget peka framåt och
       friktionen bakåt (lika långa, på blocket), och samma ytor ge samma mönster i alla böcker. Ingen sida får ha ett
       vanligt (brytbart) mellanslag mellan tal och enhet eller i ett tusental.
     - **Att brytningen följer reglerna och alla sidor får plats** (kontrolläget), och att brytningen tar under
       200 ms med CPU:n strypt 6 gånger: medianen av 5 mätvarv efter en uppvärmning, för varje bok. Grinden skriver
       ut median och max per bok. (Ett enda varv var för brusigt när datorn var belastad eller gick på batteri.)
     - **Att inga JS-fel uppstår.** De fångas med `window.onerror`, `unhandledrejection` och Chromes egna undantag.

  Startsidan och kapitelindexet prövas på dator och mobil: startsida → kapitelindex → avsnittssidorna → brödsmulorna
  tillbaka, och att tonade kort (kapitel, avsnitt, resurser som kommer) inte är länkar och inte leder någonstans.
  `verktyg/provbok-utan-texter/` prövar läget utan texter med samma scenario. Provboken har tre texter (Krafter,
  Tryck, Energi) och prövar dessutom:
  - en bok per text, en text som är "kommer" (Energi) och en nivå som bara en text har (Djupdykning)
  - strömformatet (Tryck): en sidbrytning, och ett långt stycke + figur som inte ryms tillsammans
  - rörelsespåren (Tryck): alla fyra rörelsetyperna, 4–8 prickar, med och utan tider
  - kraftparen (Tryck): drag och knuff, med och utan värde, och beskrivningen ur data
  - kraftpilar utan värden och med en gemensam skala (Tryck)
  - friktionen (Tryck): med pilar och bildtext, och utan pilar med grova ytor och andra namn, och beskrivningen ur data
  - bildpilar (Tryck): ett utsnitt av fotot på avsnittssida III, två lika långa pilar, en etikett utan läge,
    beskrivningen och bildtexten ur data
  - tal och enhet (Tryck): "16 − 6 = 10 N", "1 538 °C", "5 m/s" och "18 km/h" står på en rad också i en spalt som
    är 1 px bred, medan "16 − 6" (vanliga mellanslag) bryts där
  - hjälpmedel med adress, också som inbäddad flik (Öva)
  - begreppslänkar
  - inbäddningen
  - en fjärde nivå
  - nivåbyte i boken
  - kraftpilarna
- **`node verktyg/bok-grind.js --negativ`:** lägger in fem fel med flit, ett i taget, i varje läge. Felen är ett
  JS-fel, en för tät sida, en Stäng som inte fungerar, en sida som slutar med en rubrik (motorns provkrok
  `?kontroll&prova=rubrik-sist`) och en brytning som tar 250 ms längre (`?kontroll&prova=langsam`). Grinden ska bli
  röd för vart och ett; den långsamma brytningen ska fångas av just tidsprovet.
- **`--bilder`** sparar skärmbilder av hubben och boken i `verktyg/bilder/grind/`. Alla skärmbilder sparas under
  `verktyg/bilder/`, med en undermapp per arbete (till exempel `repetition-1/`).
- **`--webb`** prövar den publicerade boken på https://jb873.github.io/Fysikbok/ i stället för filerna på disken
  (`--webb=<adress>` för en annan adress). Grinden kontrollerar först att webben visar samma filer som disken.
  Visar den inte det, är något inte pushat eller så har Pages inte byggt klart. Kör den efter varje push.
- **`--bara=<namn>`** prövar bara de delkapitel vars namn innehåller texten, till exempel `--bara=rorelse_och_kraft`.
  Det är ett snabbt prov medan man arbetar. Grinden är grön först när hela har körts.

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
- Namn och © står på sista sidan och i sidans fot, ur `upphov`.
