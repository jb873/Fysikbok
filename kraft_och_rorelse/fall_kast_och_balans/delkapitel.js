/* Avsnittssida IV. Fall, kast och balans (Fysik · Kraft och rörelse), med texterna A Resulterande kraft, B Fritt fall,
 * C Kaströrelse och D Tyngdpunkt och balans, en bok per text och nivå (arbetsorder 12, 2026-11-07). Bara A har
 * innehåll; B–D är "kommer" (tomma filer). Inga djupdykningar än. Bara data; motorn är bokskal/. Fälten beskrivs i
 * Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-fall-kast-och-balans',           // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }], // och till kapitelindexet
  nummer: 4,                                 // brödsmulan "4. Fall, kast och balans" och etiketten "Avsnitt IV"
  titel: 'Fall, kast och balans',
  undertitel: 'fritt fall, kaströrelse, tyngdpunkt och balans',  // bannerns rad: kapitelindexets beskrivning av IV
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig. Källan till A: kallor/kap3/, omvandlad av verktyg/kap3-omvandlare.js.
  texter: [
    { id: 'resulterande-kraft', titel: 'Resulterande kraft' },
    { id: 'fritt-fall', titel: 'Fritt fall' },
    { id: 'kastrorelse', titel: 'Kaströrelse' },
    { id: 'tyngdpunkt-och-balans', titel: 'Tyngdpunkt och balans' }
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning).
  nivaer: [
    { id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }
  ],

  // Plattformens hjälpmedel. Utan adress är de synliga, märkta "kommer" och inte klickbara.
  hjalpmedel: {
    forelasning:    { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: null }
  }
});
