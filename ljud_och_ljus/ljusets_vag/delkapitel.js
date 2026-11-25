/* Avsnittssida III. Ljusets väg (Fysik · Ljud och ljus), med texterna A Ljus och seende, B Reflektion och speglar,
 * C Ljuset bryts och D Linser och bilder, en bok per text och nivå (arbetsorder 38, 2026-11-25). Byggd som avsnitt I
 * och II. Inga djupdykningar än: rubriken "Vill du veta mer?" står inte förrän det finns kort (motorns norm). Bara
 * data; motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-ljusets-vag',                         // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Ljud och ljus', href: '../index.html' }],      // och till kapitelindexet
  nummer: 3,                                 // brödsmulan "3. Ljusets väg" och etiketten "Avsnitt III"
  titel: 'Ljusets väg',
  undertitel: 'ljus och seende, reflektion och speglar, ljusets brytning, linser och bilder',  // bannerns rad: kapitelindexets beskrivning av III
  overrad: 'Fysik · Ljud och ljus',           // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven sparat –
  // byt det aldrig. Källorna: kallor/kap2/Kap2-III-A…D-…-v2.md, omvandlade av verktyg/kap3-omvandlare.js --text 2iiia … 2iiid.
  // Ingen ruta "Vill du gå vidare?" än (ordern; raderna i verktyg/vidare-rutor.js saknar avsnitt). Inga föreläsningar
  // eller musikvideor än (hjälpmedlen "kommer").
  texter: [
    { id: 'ljus-och-seende', titel: 'Ljus och seende' },
    { id: 'reflektion-och-speglar', titel: 'Reflektion och speglar' },
    { id: 'ljuset-bryts', titel: 'Ljuset bryts' },
    { id: 'linser-och-bilder', titel: 'Linser och bilder' }
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
