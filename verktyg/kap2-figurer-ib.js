// Figurerna till kapitel 2 Ljud och ljus, I B Ljudvågen (verktyg/kap3-omvandlare.js --text 2ib): [{ borjar, figurer }].
// Arbetsorder 33 (2026-11-21). Figurtypen ljud i bokskal/figurer.js med kapitel 2:s egna lägen (de interna namnen
// krockar inte med VI:s; id:t i texten är källans, B1–B3). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // struktur: vågtopp rakt under förtätning, vågdal rakt under förtunning; tryck och avstånd på axlarna
  fig('B1', 'tva-modeller', 'Varje vågtopp står rakt under en förtätning och varje vågdal rakt under en förtunning.'),
  // struktur: våglängd, amplitud, vågtopp och vågdal; hög och låg frekvens med samma amplitud
  fig('B2', 'vagbegrepp', 'Med samma amplitud ger hög frekvens kort våglängd och låg frekvens lång våglängd.'),
  // struktur: logaritmisk frekvensaxel, hörselområdena som staplar och lätena för sig
  fig('B3', 'horomraden', 'Människan hör ungefär 20–20 000 Hz. Hunden, fladdermusen och delfinen hör också ultraljud.')
];
