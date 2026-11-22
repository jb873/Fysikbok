// Figurerna till kapitel 2 Ljud och ljus, II C Eko, ultraljud och dopplereffekten (verktyg/kap3-omvandlare.js --text 2iic): [{ borjar, figurer }].
// Arbetsorder 34 (2026-11-22). Figurtypen ljud i bokskal/figurer.js med avsnitt II:s egna lägen (id:t i texten är källans,
// C1–C4). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // förlopp, steg 1–4
  fig('C1', 'eko-berg', 'Ekot har färdats fram och tillbaka, alltså dubbla avståndet till berget.'),
  // förlopp, steg 1–5
  fig('C2', 'ekolod-botten', 'Pulsen går ned och tillbaka upp, så sträckan delas med 2 för att få djupet.'),
  // jämförelse: centrumen förskjutna längs färdvägen
  fig('C3', 'doppler-centrum', 'När ambulansen kör ligger vågorna tätare framför den och glesare bakom.'),
  // förlopp, steg 1–4
  fig('C4', 'ljudbang', 'När planet flyger fortare än ljudet hamnar vågorna bakom det och bildar en kon.')
];
