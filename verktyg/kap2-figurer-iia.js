// Figurerna till kapitel 2 Ljud och ljus, II A Toner och klang (verktyg/kap3-omvandlare.js --text 2iia): [{ borjar, figurer }].
// Arbetsorder 34 (2026-11-22). Figurtypen ljud i bokskal/figurer.js med avsnitt II:s egna lägen (id:t i texten är källans,
// A1–A6). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // jämförelse: samma amplitud, tid på den vågräta axeln
  fig('A1', 'tonhojd-tid', 'Med samma amplitud har den höga tonen fler svängningar per sekund än den låga.'),
  // jämförelse: samma frekvens, topparna rakt ovanför varandra
  fig('A2', 'styrka-tid', 'Samma frekvens men olika amplitud: den starka tonen har större tryckändringar.'),
  // struktur: den svängande delen mellan bandet och stallet
  fig('A3', 'gitarrhals', 'Halva strängen svänger dubbelt så fort, och tonen blir ljusare.'),
  // jämförelse: ren ton, klang och brus
  fig('A4', 'klang-tid', 'En ren ton, en klang med övertoner och brus utan mönster.'),
  // struktur (Fördjupning): 1, 2 och 3 svängande delar
  fig('A5', 'strang-delar', 'Strängen svänger på en gång som en helhet, i två halvor och i tre delar: f, 2 f och 3 f.'),
  // diagram (Fördjupning): logaritmisk axel 20–20 000 Hz
  fig('A6', 'tonomfang', 'Pianot har störst tonomfång av instrumenten här, och normaltonen A har frekvensen 440 Hz.')
];
