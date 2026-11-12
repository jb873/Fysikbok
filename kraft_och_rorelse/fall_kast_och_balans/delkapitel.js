/* Avsnittssida IV. Fall, kast och balans (Fysik · Kraft och rörelse), med texterna A Resulterande kraft, B Fritt fall,
 * C Kaströrelse och D Tyngdpunkt, balans och kroppen, en bok per text och nivå (arbetsorder 12, 2026-11-07). B (Fritt
 * fall, 2026-11-11), C (Kaströrelse, arbetsorder 16) och D (arbetsorder 17; titeln var "Tyngdpunkt och balans", mappen
 * heter som förut) har fått innehåll efter A. Bara data; motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-fall-kast-och-balans',           // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }], // och till kapitelindexet
  nummer: 4,                                 // brödsmulan "4. Fall, kast och balans" och etiketten "Avsnitt IV"
  titel: 'Fall, kast och balans',
  undertitel: 'resulterande kraft, fritt fall, kaströrelse, tyngdpunkt, balans och kroppen',  // bannerns rad: kapitelindexets beskrivning av IV
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig. Källorna till A–D: kallor/kap3/, omvandlade av verktyg/kap3-omvandlare.js (--text a–d).
  // Föreläsning och musikvideo per text (2026-11-11): hjalpmedel i texten går före avsnittssidans. YouTube med
  // inbäddningsadressen (youtube-nocookie.com/embed/<id>); motorn lägger till ?embed=1, som YouTube inte bryr sig om.
  texter: [
    { id: 'resulterande-kraft', titel: 'Resulterande kraft' },
    { id: 'fritt-fall', titel: 'Fritt fall',
      hjalpmedel: { forelasning: { href: 'https://www.youtube-nocookie.com/embed/9Pf7AWzPKds' },   // youtu.be/9Pf7AWzPKds
                    musikvideo: { href: 'https://www.youtube-nocookie.com/embed/jNTgCvWn1Qs' } } },   // youtu.be/jNTgCvWn1Qs
    { id: 'kastrorelse', titel: 'Kaströrelse' },
    { id: 'tyngdpunkt-och-balans', titel: 'Tyngdpunkt, balans och kroppen' }
  ],

  // Djupdykningar (2026-11-11): Galileo-djupdykningen hör till avsnittssida III, men finns också här under "Vill du veta
  // mer?" – samma bok (samma fil och id), ingen kopia. IV B Standard länkar dit. Läsplatsen sparas per avsnittssida.
  djupdykningar: [
    { id: 'galileo', titel: 'Galileo mot Aristoteles – hur tröghetslagen upptäcktes', fil: '../rorelse_och_kraft/innehall/djupdykningar/galileo.js' }
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning).
  nivaer: [
    { id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }
  ],

  // Nästa steg (arbetsorder 13, del 2): textboken finns här utan kort, som mål för länkarna i rutan "Vill du gå vidare?"
  // sist i Fördjupningen – och övningsboken och Matematiken i fysiken, som textboken i sin tur länkar till. Böckerna är
  // III:s (samma id: samma bok, men läsplatsen sparas per avsnittssida).
  nastaSteg: [
    { id: 'kraft-och-rorelse', titel: 'Nästa steg · Kraft och rörelse – textbok', fil: '../rorelse_och_kraft/innehall/nasta-steg/textbok.js', kort: false }
  ],
  ovningsbocker: [
    { id: 'kraft-och-rorelse', titel: 'Nästa steg · Kraft och rörelse – övningsbok', fil: '../rorelse_och_kraft/innehall/nasta-steg/ovningsbok.js', kort: false }
  ],
  stodbocker: [
    { id: 'matematiken', titel: 'Matematiken i fysiken', fil: '../../nasta_steg/matematiken_i_fysiken/innehall/matematiken.js' }
  ],

  // Plattformens hjälpmedel. Utan adress är de synliga, märkta "kommer" och inte klickbara.
  hjalpmedel: {
    // Föreläsningarna och musikvideorna står per text (texter ovan); fliken visar den valda textens.
    forelasning:    { href: null },
    musikvideo:     { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: null }
  }
});
