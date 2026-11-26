// Figurerna till III A Tryck (verktyg/kap3-omvandlare.js --text va): [{ borjar, figurer }]. Arbetsorder 21 (2026-11-12).
// Ny figurtyp i bokskal/figurer.js: tryck (lägena sno, hydraulik, lyftkraft och hydraulik-vag). Data enligt ordern
// (källan har ingen FIGURER-del); bildtexterna är skrivna här. V1–V3 står efter sin bildmarkering i Standard och Enkel,
// V4 i Fördjupningen.
module.exports = [
  // V1: samma person i djup snö, med kängor och med snöskor; tyngden lika stor i båda
  { borjar: '[BILD V1:', figurer: [
    { id: 'bild-v1', typ: 'figur', namn: 'tryck', lage: 'sno', tyngd: 600, skor: [{ namn: 'kängor', langd: 0.3 }, { namn: 'snöskor', langd: 0.8 }],
      bildtext: 'Tyngden är lika stor i båda bilderna. Med kängor samlas den på en liten yta, och trycket blir högt. Med snöskor fördelas den på en stor yta, och trycket blir lågt.' }
  ] },
  // V2: hydraulisk lyft – liten kolv och stor kolv (2 och 100 cm²) på samma höjd, bilen på den stora
  { borjar: '[BILD V2:', figurer: [
    { id: 'bild-v2', typ: 'figur', namn: 'tryck', lage: 'hydraulik', areor: [2, 100],
      bildtext: 'Trycket är lika stort i hela oljan. Den stora kolven har mycket större yta, och därför blir kraften på den mycket större.' }
  ] },
  // V3: kloss under vatten – tryckpilar mot alla sidor och lyftkraften uppåt
  { borjar: '[BILD V3:', figurer: [
    { id: 'bild-v3', typ: 'figur', namn: 'tryck', lage: 'lyftkraft', djup: 0.7,
      bildtext: 'Vattnet trycker hårdare ju djupare det är. Trycket mot undersidan är större än mot ovansidan, och skillnaden är lyftkraften.' }
  ] },
  // V4: samma lyft med sträckorna – 50 cm ned och 1 cm upp, 200 N och 10 000 N, 2 cm² och 100 cm²
  { borjar: '[BILD V4:', figurer: [
    { id: 'bild-v4', typ: 'figur', namn: 'tryck', lage: 'hydraulik-vag', areor: [2, 100], krafter: [200, 10000], vag: 0.5,
      bildtext: 'Den lilla kolven pressas ned 50 cm och den stora stiger 1 cm. Kraften blir 50 gånger så stor, och vägen 50 gånger så kort.' }
  ] }
];
