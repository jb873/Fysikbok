/* Avsnittssida III. Rörelse och kraft (Fysik · Kraft och rörelse, område 3), med texterna A Rörelse, B Kraft och
 * motkraft och C Tyngdkraften, en bok per text. Texterna följer Joachims föreläsning (beslut 2026-11-03). Bara data;
 * motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-rorelse-och-kraft',              // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }], // och till kapitelindexet
  nummer: 3,                                 // brödsmulan "3. Rörelse och kraft" och etiketten "Avsnitt III"
  titel: 'Rörelse och kraft',
  undertitel: 'rörelse, kraft och tyngdkraft', // bannerns rad: "— rörelse, kraft och tyngdkraft —"
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },

  // Texterna A–C: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig. B och C har inget innehåll än och visas som "kommer".
  texter: [
    { id: 'rorelse', titel: 'Rörelse' },
    { id: 'kraft-och-motkraft', titel: 'Kraft och motkraft' },
    { id: 'tyngdkraften', titel: 'Tyngdkraften' }
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning).

  // Plattformens hjälpmedel. Föreläsning, Öva och Elevboken är flikarna på delkapitlets sida; Öva, Självskattning och
  // Begreppslista länkas också inifrån boken. Fysikens finns inte än: utan adress är de synliga, märkta "kommer" och
  // inte klickbara. {begrepp}, {avsnitt} och {niva} i adressen fylls i där länken står.
  hjalpmedel: {
    forelasning:    { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: null }
  }
});
