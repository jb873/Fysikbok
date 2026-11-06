/* Avsnittssida III. Rörelse och kraft (Fysik · Kraft och rörelse, område 3), med texterna A Rörelse, B Kraft och
 * friktion, C Kraft och motkraft och D Tyngdkraften, en bok per text. Texterna följer Joachims föreläsning (beslut
 * 2026-11-03). Bara data; motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-rorelse-och-kraft',              // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }], // och till kapitelindexet
  nummer: 3,                                 // brödsmulan "3. Rörelse och kraft" och etiketten "Avsnitt III"
  titel: 'Rörelse och kraft',
  undertitel: 'rörelse, kraft, friktion och tyngdkraft', // bannerns rad: "— rörelse, kraft, friktion och tyngdkraft —"
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig. D har inget innehåll än och visas som "kommer".
  texter: [
    { id: 'rorelse', titel: 'Rörelse' },
    { id: 'kraft-och-friktion', titel: 'Kraft och friktion' },
    { id: 'kraft-och-motkraft', titel: 'Kraft och motkraft' },
    { id: 'tyngdkraften', titel: 'Tyngdkraften' }
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning).
  nivaer: [
    { id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }
  ],

  // Djupdykningarna hör till avsnittssidan, inte till en text (Joachims beslut 2026-11-05): de står längst ned på
  // avsnittssidan ("Vill du veta mer?") och öppnas som egna böcker, med en nivå och en egen läsplats. id är nyckeln
  // för det eleven sparat – byt det aldrig. Titlarna är källornas.
  djupdykningar: [
    { id: 'galileo', titel: 'Galileo mot Aristoteles – hur tröghetslagen upptäcktes', fil: 'innehall/djupdykningar/galileo.js' },
    { id: 'bromsstrackan', titel: 'Bromssträckan – varför fart och halka är farligt', fil: 'innehall/djupdykningar/bromsstrackan.js' },
    { id: 'raketer', titel: 'Raketer – att färdas där det inte finns något att trycka mot', fil: 'innehall/djupdykningar/raketer.js' },
    { id: 'tyngdloshet', titel: 'Är astronauterna tyngdlösa?', fil: 'innehall/djupdykningar/tyngdloshet.js' }
  ],

  // Plattformens hjälpmedel. Föreläsning, Öva och Elevboken är flikarna på delkapitlets sida; Öva, Självskattning,
  // Begreppslista och Elevboken länkas också inifrån boken. Utan adress är de synliga, märkta "kommer" och inte
  // klickbara. {begrepp}, {avsnitt} och {niva} i adressen fylls i där länken står.
  // Elevboken (2026-11-05): plattformens elevbok med fysikens frågor (elevbok.html, data/fragor.json).
  hjalpmedel: {
    forelasning:    { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: 'elevbok.html' }
  }
});
