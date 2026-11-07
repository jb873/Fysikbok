/* Matematiken i fysiken (arbetsorder 11, 2026-11-07): stödboken till Nästa steg, på en egen sida som startsidan
 * länkar till. Den gäller hela fysikboken, inte ett kapitel. Sidan har bara boken: inga texter, nivåer eller flikar
 * (nivaer: [], flikar: false). Bara data; motorn är bokskal/. Fälten beskrivs i Fysik/README.md (Fristående böcker). */
Bok.delkapitel({
  id: 'fysik-matematiken-i-fysiken',          // nyckeln för det eleven sparat – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' }],     // brödsmulan länkar till startsidan
  titel: 'Matematiken i fysiken',
  undertitel: null,
  overrad: 'Fysik',                           // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  nivaer: [],
  flikar: false,

  // Boken (kortet på sidan). Textboken och övningsboken i Nästa steg finns här utan kort, som mål för länkarna
  // "Används i Nästa steg:" (och textbokens länk till övningsboken). id är nyckeln för det eleven sparat – byt det aldrig.
  stodbocker: [
    { id: 'matematiken', titel: 'Matematiken i fysiken', fil: 'innehall/matematiken.js', kort: true }
  ],
  nastaSteg: [
    { id: 'kraft-och-rorelse', titel: 'Nästa steg · Kraft och rörelse – textbok', fil: '../../kraft_och_rorelse/rorelse_och_kraft/innehall/nasta-steg/textbok.js', kort: false }
  ],
  ovningsbocker: [
    { id: 'kraft-och-rorelse', titel: 'Nästa steg · Kraft och rörelse – övningsbok', fil: '../../kraft_och_rorelse/rorelse_och_kraft/innehall/nasta-steg/ovningsbok.js', kort: false }
  ],
  hjalpmedel: {}
});
