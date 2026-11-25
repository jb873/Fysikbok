// Figurerna till kapitel 2 Ljud och ljus, III A Ljus och seende (verktyg/kap3-omvandlare.js --text 2iiia): [{ borjar, figurer }].
// Arbetsorder 38 (2026-11-25). Figurtypen ljus i bokskal/figurer.js med avsnitt III:s egna lägen (id:t i texten är källans).
// Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här. Strålarna är modellstrålar (#c2410c), räknade.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljus', lage, bildtext }] });
module.exports = [
  // förlopp: lampan, tallriken, ögat, synnerven – inga strålar ut ur ögat
  fig('A1', 'se-tallrik', 'Du ser tallriken när ljus från lampan studsar på den och når ditt öga.'),
  // förlopp: alla strålar heldragna som modell; ingen stråle från strålen mot tjuvens öga
  fig('A2', 'mus-tjuv', 'Strålarna är ritade som modell. I verkligheten ser man bara det ljus som når ögat, så tjuven ser musen men inte strålen.'),
  // struktur: absorberas, reflekteras, går igenom
  fig('A3', 'tre-ytor', 'Ljus som träffar något kan absorberas, reflekteras eller gå igenom.'),
  // struktur: skarp och suddig skugga, raka linjer från lampans kanter förbi bollens kanter
  fig('A4', 'skuggor', 'En liten lampa ger en skarp skugga. En stor lampa ger en helskugga i mitten och halvskugga runt om.'),
  // förlopp: strålarna korsar varandra i hålet
  fig('A5', 'halkamera', 'Strålarna från trädets topp och fot korsar varandra i hålet, så bilden blir upp och ned.'),
  // tabell: bokens tabellblock, i samma stil som bokens andra tabeller (id:t som figurernas, så att ordagrant.js hoppar över den)
  { borjar: '[BILD A6:', figurer: [{ id: 'bild-a6', typ: 'tabell', rubriker: ['Ämne', 'Ljusets hastighet', 'Ljudets hastighet'],
    rader: [['Vakuum', 'ca 300 000 km/s', 'går inte'], ['Luft', 'nästan 300 000 km/s', 'ca 340 m/s'], ['Vatten', 'ca 225 000 km/s', 'ca 1 500 m/s']] }] },
  // förlopp (Fördjupning): Fizeaus kugghjul
  fig('A7', 'fizeau', 'Av hur fort hjulet snurrade när ljuset försvann räknade Fizeau ut ljusets hastighet.'),
  // struktur (Fördjupning): helskugga och halvskugga i stor skala, inte i skala
  fig('A8', 'solformorkelse', 'Där månens helskugga når jorden blir solförmörkelsen total, i halvskuggan partiell. Figuren är inte i skala.')
];
