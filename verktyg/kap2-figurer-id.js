// Figurerna till kapitel 2 Ljud och ljus, I D Örat och hörseln (verktyg/kap3-omvandlare.js --text 2id): [{ borjar, figurer }].
// Arbetsorder 33 (2026-11-21); källan v2 i arbetsorder 34 (ovala fönstret i D1 och D2, D4 med två markeringar). Figurtypen ljud i bokskal/figurer.js med kapitel 2:s egna lägen (de interna namnen
// krockar inte med VI:s; id:t i texten är källans, D1–D4). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // struktur: namn på delarna och klammer över de tre delarna
  fig('D1', 'orat-delar', 'Örats tre delar: ytterörat, mellanörat och innerörat.'),
  // förlopp, steg 1–6
  fig('D2', 'orat-vag', 'Ljudet byter form på vägen: från tryckändringar i luft till signaler i en nerv.'),
  // jämförelse: ljud framifrån och från höger
  fig('D3', 'huvud', 'Ljud från sidan når det närmaste örat först, och huvudet skuggar det andra örat.'),
  // struktur (Fördjupning): bara två markeringar (v2, arbetsorder 34) – höga frekvenser vid början, låga längst in
  fig('D4', 'snacka', 'Höga frekvenser får membranet att svänga nära början, låga frekvenser längst in.')
];
