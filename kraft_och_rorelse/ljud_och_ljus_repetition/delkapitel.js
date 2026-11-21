/* Avsnittssidan VI. Repetition – ljud och ljus (Fysik · Kraft och rörelse), med texterna A Ljud och B Ljus, en bok per
 * text och nivå (arbetsorder 30, 2026-11-20). Byggd som repetitionerna I och II (titeln "Repetition", omslaget
 * "Repetition: {text}") och med nivåerna som V. Inga djupdykningar. Bara data; motorn är bokskal/. Fälten beskrivs i
 * Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-ljud-och-ljus-repetition',      // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }], // och till kapitelindexet
  nummer: 6,                                 // brödsmulan "6. Repetition" och etiketten "Avsnitt VI"
  titel: 'Repetition',
  undertitel: 'ljud och ljus',               // bannerns rad: "— ljud och ljus —"
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)
  omslag: { undertitel: 'Repetition: {text}' },   // omslagets undertitel; {text} blir textens namn

  // Texterna A och B: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig. Källan till A: kallor/kap3/VI-A-Repetition-Ljud-alla-nivaer-v3.md, omvandlad av
  // verktyg/kap3-omvandlare.js --text via; till B: kallor/kap3/VI-B-Repetition-Ljus-alla-nivaer-v3.md, --text vib.
  // Ingen ruta "Vill du gå vidare?": kapitlen om ljud och ljus finns inte än (raderna i verktyg/vidare-rutor.js saknar avsnitt).
  texter: [
    { id: 'ljud', titel: 'Ljud' },
    { id: 'ljus', titel: 'Ljus' }
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning).
  nivaer: [
    { id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }
  ],

  // Plattformens hjälpmedel. Utan adress är de synliga, märkta "kommer" och inte klickbara.
  hjalpmedel: {
    forelasning:    { href: null },
    musikvideo:     { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: null }
  }
});
