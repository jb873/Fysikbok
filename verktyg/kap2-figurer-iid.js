// Figurerna till kapitel 2 Ljud och ljus, II D Ljudnivå, buller och hälsa (verktyg/kap3-omvandlare.js --text 2iid): [{ borjar, figurer }].
// Arbetsorder 34 (2026-11-22). Figurtypen ljud i bokskal/figurer.js med avsnitt II:s egna lägen (id:t i texten är källans,
// D1–D5). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // diagram: lodräta staplar i neutral färg
  fig('D1', 'decibel', 'Decibelskalan går från hörtröskeln vid 0 dB till ungefär 140 dB för ett gevärsskott.'),
  // diagram: samma ljudexponering
  fig('D2', 'exponering', 'För varje 3 dB högre ljudnivå halveras tiden för samma ljudexponering.'),
  // struktur: källa, väg och mottagare
  fig('D3', 'bullerbekampning', 'Buller kan minskas vid källan, på vägen och hos mottagaren.'),
  // struktur (Fördjupning): fri ljudutbredning
  fig('D4', 'avstandslagen', 'Dubbla avståndet sprider ljudet över fyra gånger så stor yta: cirka 6 dB lägre.'),
  // diagram (Fördjupning): 0 dB HL överst
  fig('D5', 'audiogram', 'Bullerskadan syns som en dipp vid 4 000 Hz, åldersnedsättningen som en kurva som går nedåt mot de höga frekvenserna.')
];
