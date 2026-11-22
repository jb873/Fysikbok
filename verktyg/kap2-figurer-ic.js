// Figurerna till kapitel 2 Ljud och ljus, I C Ljudets hastighet (verktyg/kap3-omvandlare.js --text 2ic): [{ borjar, figurer }].
// Arbetsorder 33 (2026-11-21). Figurtypen ljud i bokskal/figurer.js med kapitel 2:s egna lägen (de interna namnen
// krockar inte med VI:s; id:t i texten är källans, C1–C2). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // förlopp, steg 1–4: ljuset en rak pil, ljudet som vågfronter vid 1, 2 och 3 km
  fig('C1', 'aska', 'Ljuset kommer fram nästan direkt, men ljudet behöver ungefär 3 sekunder för varje kilometer.'),
  // jämförelse: staplarna i rätt proportion
  fig('C2', 'hastigheter', 'Ljudet går fortast i fasta ämnen och långsammast i luft.')
];
