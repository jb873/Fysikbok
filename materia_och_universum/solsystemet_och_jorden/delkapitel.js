/* Avsnittssida I. Solsystemet och jorden (Fysik · Kapitel 1 Materia och universum), med texterna A Solsystemet,
 * B Himlakroppar, C Jordklotet och D Dygn, månad, år och årstider, en bok per text och nivå (arbetsorder 9,
 * 2026-11-07). Bara data; motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-solsystemet-och-jorden',         // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },                  // brödsmulorna länkar till startsidan
           { text: 'Materia och universum', href: '../index.html' }],   // och till kapitelindexet
  nummer: 1,                                 // brödsmulan "1. Solsystemet och jorden" och etiketten "Avsnitt I"
  titel: 'Solsystemet och jorden',
  undertitel: 'solsystemet, himlakroppar, jordklotet, dygn och årstider', // bannerns rad
  overrad: 'Fysik · Materia och universum',  // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig.
  texter: [
    { id: 'solsystemet', titel: 'Solsystemet' },
    { id: 'himlakroppar', titel: 'Himlakroppar' },
    { id: 'jordklotet', titel: 'Jordklotet' },
    { id: 'dygn-manad-ar-arstider', titel: 'Dygn, månad, år och årstider' }
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning).
  nivaer: [
    { id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }
  ],

  // Djupdykningarna hör till avsnittssidan ("Vill du veta mer?" längst ned) och öppnas som egna böcker (arbetsorder
  // 10, 2026-11-07; källorna i kallor/kap1/). Titeln är bokens titel ordagrant. id är nyckeln för det eleven sparat –
  // byt det aldrig.
  djupdykningar: [
    { id: 'solstormar', titel: 'Solstormar – när solen når jorden', fil: 'innehall/djupdykningar/solstormar.js' },
    { id: 'venus', titel: 'Venus – jordens heta tvilling', fil: 'innehall/djupdykningar/venus.js' },
    { id: 'jupiters-manar', titel: 'Jupiters månar och Saturnus ringar', fil: 'innehall/djupdykningar/jupiters-manar.js' },
    { id: 'nedslag', titel: 'Nedslag från rymden', fil: 'innehall/djupdykningar/nedslag.js' }
  ],

  // Plattformens hjälpmedel. Utan adress är de synliga, märkta "kommer" och inte klickbara. Ingen Elevbok ännu.
  hjalpmedel: {
    forelasning:    { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: null }
  }
});
