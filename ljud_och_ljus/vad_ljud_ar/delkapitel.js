/* Avsnittssida I. Vad ljud är (Fysik · Ljud och ljus), med texterna A Ljud är vibrationer, B Ljudvågen, C Ljudets
 * hastighet och D Örat och hörseln, en bok per text och nivå (arbetsorder 33, 2026-11-21). Byggd som avsnitten i Kraft
 * och rörelse. Inga djupdykningar än (de skrivs senare): rubriken "Vill du veta mer?" står inte förrän det finns kort
 * (motorns norm). Bara data; motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-vad-ljud-ar',                    // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Ljud och ljus', href: '../index.html' }],      // och till kapitelindexet
  nummer: 1,                                 // brödsmulan "1. Vad ljud är" och etiketten "Avsnitt I"
  titel: 'Vad ljud är',
  undertitel: 'vibrationer, ljudvågen, ljudets hastighet, örat och hörseln',  // bannerns rad: kapitelindexets beskrivning av I
  overrad: 'Fysik · Ljud och ljus',           // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven sparat –
  // byt det aldrig. Källorna: kallor/kap2/Kap2-I-A…D-…md, omvandlade av verktyg/kap3-omvandlare.js --text 2ia … 2id.
  // Ingen ruta "Vill du gå vidare?" än (ordern; raderna i verktyg/vidare-rutor.js saknar avsnitt).
  texter: [
    { id: 'ljud-ar-vibrationer', titel: 'Ljud är vibrationer' },
    { id: 'ljudvagen', titel: 'Ljudvågen' },
    { id: 'ljudets-hastighet', titel: 'Ljudets hastighet' },
    { id: 'orat-och-horseln', titel: 'Örat och hörseln' }
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
