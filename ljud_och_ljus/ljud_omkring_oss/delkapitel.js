/* Avsnittssida II. Ljud omkring oss (Fysik · Ljud och ljus), med texterna A Toner och klang, B Resonans och instrument,
 * C Eko, ultraljud och dopplereffekten och D Ljudnivå, buller och hälsa, en bok per text och nivå (arbetsorder 34,
 * 2026-11-22). Byggd som avsnitt I. Inga djupdykningar än (de skrivs senare): rubriken "Vill du veta mer?" står inte förrän det finns kort
 * (motorns norm). Bara data; motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-ljud-omkring-oss',                    // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Ljud och ljus', href: '../index.html' }],      // och till kapitelindexet
  nummer: 2,                                 // brödsmulan "2. Ljud omkring oss" och etiketten "Avsnitt II"
  titel: 'Ljud omkring oss',
  undertitel: 'toner och klang, resonans och instrument, eko, ultraljud och dopplereffekten, ljudnivå, buller och hälsa',  // bannerns rad: kapitelindexets beskrivning av II
  overrad: 'Fysik · Ljud och ljus',           // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven sparat –
  // byt det aldrig. Källorna: kallor/kap2/Kap2-II-A…D-…md, omvandlade av verktyg/kap3-omvandlare.js --text 2iia … 2iid.
  // Ingen ruta "Vill du gå vidare?" än (ordern; raderna i verktyg/vidare-rutor.js saknar avsnitt).
  texter: [
    { id: 'toner-och-klang', titel: 'Toner och klang' },
    { id: 'resonans-och-instrument', titel: 'Resonans och instrument' },
    { id: 'eko-ultraljud-och-doppler', titel: 'Eko, ultraljud och dopplereffekten' },
    { id: 'ljudniva-buller-och-halsa', titel: 'Ljudnivå, buller och hälsa' }
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
