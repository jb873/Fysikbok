// Figurerna till kapitel 2 Ljud och ljus, II B Resonans och instrument (verktyg/kap3-omvandlare.js --text 2iib): [{ borjar, figurer }].
// Arbetsorder 34 (2026-11-22). Figurtypen ljud i bokskal/figurer.js med avsnitt II:s egna lägen (id:t i texten är källans,
// B1–B5). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // förlopp, steg 1–4
  fig('B1', 'gunga', 'Små knuffar i gungans egen takt får svängningarna att växa: resonans.'),
  // förlopp, steg 1–4
  fig('B2', 'stamgafflar', 'Den högra stämgaffeln börjar svänga av ljudvågorna, eftersom båda har samma egenfrekvens.'),
  // förlopp, steg 1–4
  fig('B3', 'stamgaffel-bord', 'Bordsskivan svänger med och sätter mer luft i rörelse, så ljudet blir starkare.'),
  // jämförelse: luften ovanför vattnet
  fig('B4', 'flaskor', 'Ju mindre luft det finns i flaskan, desto ljusare ton när man blåser över den.'),
  // förlopp (Fördjupning), steg 1–4
  fig('B5', 'vinglas', 'Varje våg med glasets egenfrekvens gör svängningen större, tills glaset spricker.')
];
