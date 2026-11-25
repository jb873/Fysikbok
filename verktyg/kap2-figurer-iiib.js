// Figurerna till kapitel 2 Ljud och ljus, III B Reflektion och speglar (verktyg/kap3-omvandlare.js --text 2iiib): [{ borjar, figurer }].
// Arbetsorder 38 (2026-11-25). Figurtypen ljus i bokskal/figurer.js med avsnitt III:s egna lägen (id:t i texten är källans).
// Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här. Strålarna är modellstrålar (#c2410c), räknade.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljus', lage, bildtext }] });
module.exports = [
  fig('B1', 'reflektionslagen', 'Infallsvinkeln är lika stor som reflektionsvinkeln. Båda mäts mot normalen.'),
  fig('B2', 'slat-skrovlig', 'På en slät yta pekar normalerna åt samma håll och strålarna studsar parallellt. På en skrovlig yta sprids ljuset.'),
  fig('B3', 'spegelbild-steg', 'Båda strålarna följer reflektionslagen. Förlängda bakåt möts de 50 cm bakom spegeln, där du ser blomman.'),
  fig('B4', 'fonster', 'Rutan reflekterar lite ljus hela tiden. På dagen överröstas det av ljuset utifrån, på kvällen ser du rummet.'),
  fig('B5', 'reflex', 'Efter två reflektioner går ljuset tillbaka parallellt med det som kom in. En riktig reflex har tre ytor; här visas två.'),
  fig('B6', 'buktiga-speglar', 'En konkav spegel samlar parallella strålar i brännpunkten. Från en konvex spegel ser strålarna ut att komma från en brännpunkt bakom spegeln.'),
  fig('B7', 'stralkastare', 'Med lampan i brännpunkten går det reflekterade ljuset ut nästan parallellt.'),
  fig('B8', 'vagspegel', 'Den konvexa spegeln visar en stor del av vägen, så att föraren ser cyklisten bakom huset.'),
  // förlopp (Fördjupning): halva personens längd
  fig('B9', 'hel-kropp', 'Strålarna från fötterna och hjässan träffar spegeln halvvägs till ögonen. Spegeln behöver vara hälften så lång som du.'),
  fig('B10', 'periskop', 'Två speglar som lutar 45° vänder ljuset två gånger, så att du ser över kanten.')
];
