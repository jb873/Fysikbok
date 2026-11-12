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
  // sparat – byt det aldrig.
  // Musikvideor per text (2026-11-12): hjalpmedel i texten går före avsnittssidans. YouTube med inbäddningsadressen
  // (youtube-nocookie.com/embed/<id>), som i IV.
  texter: [
    { id: 'rorelse', titel: 'Rörelse' },
    { id: 'kraft-och-friktion', titel: 'Kraft och friktion',
      hjalpmedel: { musikvideo: { href: 'https://www.youtube-nocookie.com/embed/Ym4e-c0AKj8' } } },   // youtu.be/Ym4e-c0AKj8 (Friktion)
    { id: 'kraft-och-motkraft', titel: 'Kraft och motkraft' },
    { id: 'tyngdkraften', titel: 'Tyngdkraften',
      hjalpmedel: { musikvideo: { href: 'https://www.youtube-nocookie.com/embed/ZVu1O_0pF2s' } } }    // youtu.be/ZVu1O_0pF2s (Massa och tyngd)
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

  // Nästa steg (arbetsorder 11, 2026-11-07): gymnasiets fysik som fristående böcker – textboken i ett eget block under
  // djupdykningarna och övningsboken i fliken Öva. Matematiken i fysiken ligger på sin egen sida (startsidan) och finns
  // här utan kort, som mål för textbokens länkar "Matematik du behöver:". Källorna: kallor/nasta-steg/, omvandlade av
  // verktyg/nasta-steg-omvandlare.js. id är nyckeln för det eleven sparat – byt det aldrig.
  nastaSteg: [
    { id: 'kraft-och-rorelse', titel: 'Nästa steg · Kraft och rörelse – textbok', fil: 'innehall/nasta-steg/textbok.js' }
  ],
  ovningsbocker: [
    { id: 'kraft-och-rorelse', titel: 'Nästa steg · Kraft och rörelse – övningsbok', fil: 'innehall/nasta-steg/ovningsbok.js' }
  ],
  stodbocker: [
    { id: 'matematiken', titel: 'Matematiken i fysiken', fil: '../../nasta_steg/matematiken_i_fysiken/innehall/matematiken.js' }
  ],

  // Plattformens hjälpmedel. Föreläsning, Öva och Elevboken är flikarna på delkapitlets sida; Öva, Självskattning,
  // Begreppslista och Elevboken länkas också inifrån boken. Utan adress är de synliga, märkta "kommer" och inte
  // klickbara. {begrepp}, {avsnitt} och {niva} i adressen fylls i där länken står.
  // Elevboken (2026-11-05): plattformens elevbok med fysikens frågor (elevbok.html, data/fragor.json).
  hjalpmedel: {
    forelasning:    { href: null },
    musikvideo:     { href: null },            // per text (texter ovan); fliken visar den valda textens
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: 'elevbok.html' }
  }
});
