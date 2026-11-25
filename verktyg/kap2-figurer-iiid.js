// Figurerna till kapitel 2 Ljud och ljus, III D Linser och bilder (verktyg/kap3-omvandlare.js --text 2iiid): [{ borjar, figurer }].
// Arbetsorder 38 (2026-11-25). Figurtypen ljus i bokskal/figurer.js med avsnitt III:s egna lägen (id:t i texten är källans).
// Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här. Strålarna är modellstrålar (#c2410c), räknade. I linsfigurerna (utom D2)
// ritas brytningen förenklat i linsens mittlinje, och bildtexten säger det.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljus', lage, bildtext }] });
module.exports = [
  fig('D2', 'linskant', 'Strålen bryts två gånger, in i glaset och ut ur det. Båda gångerna böjs den in mot axeln.'),
  fig('D1', 'linstyper', 'En konvex lins samlar parallella strålar i brännpunkten F, en konkav lins sprider dem. Brytningen ritas förenklat i linsens mitt.'),
  fig('D3', 'verklig-bild', 'Strålarna från lågans topp möts bakom linsen, och på papperet syns ljuset upp och ned. Brytningen ritas förenklat i linsens mitt.'),
  fig('D4', 'tre-lagen', 'Var föremålet står avgör hur bilden blir. Brytningen ritas förenklat i linsens mitt.'),
  fig('D5', 'forstoringsglas', 'Förlängda bakåt möts strålarna i en större, rättvänd skenbild. Brytningen ritas förenklat i linsens mitt.'),
  fig('D6', 'konkav-lins', 'Genom en konkav lins blir skenbilden mindre och rättvänd. Brytningen ritas förenklat i linsens mitt.'),
  fig('D7', 'halkamera-lins', 'Utan lins blir bilden suddig, med lins skarp. Brytningen ritas förenklat i linsens mitt.'),
  // struktur (Fördjupning): räkneexemplet a = 15, b = 30, f = 10 i skala
  fig('D8', 'linsformel', 'Räkneexemplet i skala: a = 15 cm, b = 30 cm och f = 10 cm. Brytningen ritas förenklat i linsens mitt.')
];
