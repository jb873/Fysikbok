/* Avsnittssida III. Tryck, arbete och maskiner (Fysik · Kraft och rörelse), med texterna A Tryck, B Energi och arbete,
 * C Mekanisk energi och D Maskiner och effekt, en bok per text och nivå (arbetsorder 21, 2026-11-12; den nya indelningen
 * av B och D: arbetsorder 28, 2026-11-19). Alla fyra har innehåll (C och D: arbetsorder 29). Inga djupdykningar än: rubriken "Vill du veta mer?" står inte förrän det finns kort (motorns norm). Bara data;
 * motorn är bokskal/. Fälten beskrivs i Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-tryck-arbete-och-maskiner',      // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }], // och till kapitelindexet
  nummer: 3,                                 // brödsmulan "3. Tryck, arbete och maskiner" och etiketten "Avsnitt III"
  titel: 'Tryck, arbete och maskiner',
  undertitel: 'tryck, energi och arbete, mekanisk energi, maskiner och effekt',  // bannerns rad: kapitelindexets beskrivning av V
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)

  // Texterna A–D: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig. Källan till A: kallor/kap3/V-A-Tryck-alla-nivaer-v5.md, omvandlad av
  // verktyg/kap3-omvandlare.js --text va; till B: kallor/kap3/V-B-Energi-och-arbete-alla-nivaer-v3.md, --text vb; till C:
  // kallor/kap3/V-C-Mekanisk-energi-alla-nivaer-v2.md, --text vc; till D: kallor/kap3/V-D-Maskiner-och-effekt-alla-nivaer-v3.md,
  // --text vd.
  // B och D bytte titel i arbetsorder 28 men behöll id och mapp (arbete-och-effekt, havstangen-och-enkla-maskiner).
  // Musikvideor per text (arbetsorder 37, 2026-11-24): hjalpmedel i texten går före avsnittssidans. YouTube med
  // inbäddningsadressen (youtube-nocookie.com/embed/<id>), som i III och IV. A har tre videor i följd i spelaren:
  // embed/<id1>?playlist=<id2>,<id3> (ingen spellista på kanalen – YouTube bygger listan i spelaren); motorn lägger
  // till &embed=1 när adressen redan har ett ?.
  texter: [
    { id: 'tryck', titel: 'Tryck',
      // youtu.be/fhiCdH0cIAM (Tryck), youtu.be/To0FtvgLKIU (Hydraulik), youtu.be/4hpDGxSWUeU (Lyftkraft)
      hjalpmedel: { musikvideo: { href: 'https://www.youtube-nocookie.com/embed/fhiCdH0cIAM?playlist=To0FtvgLKIU,4hpDGxSWUeU' } } },
    { id: 'arbete-och-effekt', titel: 'Energi och arbete',
      hjalpmedel: { musikvideo: { href: 'https://www.youtube-nocookie.com/embed/aK9ZnL9IC7s' } } },    // youtu.be/aK9ZnL9IC7s (Energin finns kvar)
    { id: 'mekanisk-energi', titel: 'Mekanisk energi' },
    { id: 'havstangen-och-enkla-maskiner', titel: 'Maskiner och effekt',
      hjalpmedel: { musikvideo: { href: 'https://www.youtube-nocookie.com/embed/oWxHIVFGpCk' } } }     // youtu.be/oWxHIVFGpCk (Det man vinner i kraft)
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning).
  nivaer: [
    { id: 'enkel', namn: 'Enkel', ikon: '📗' }, { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' }
  ],

  // Nästa steg (som II): textboken finns här utan kort, som mål för länkarna i rutan "Vill du gå vidare?" sist i
  // Fördjupningen – och övningsboken och Matematiken i fysiken, som textboken i sin tur länkar till. Böckerna är I:s
  // (samma id: samma bok, men läsplatsen sparas per avsnittssida).
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
    forelasning:    { href: null },
    musikvideo:     { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: null }
  }
});
