// Figurerna till VI B Ljus (verktyg/kap3-omvandlare.js --text vib): [{ borjar, figurer }]. Arbetsorder 30 (2026-11-20).
// Figurtypen ljus i bokskal/figurer.js (ny, arbetsorder 30); varje [BILD …]-rad är specifikationen, bildtexterna är
// skrivna här. B1–B14 står efter sin bildmarkering i Standard och Enkel (Fördjupningen har inga figurer); B14 sist i
// sammanfattningen.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljus', lage, bildtext }] });
module.exports = [
  fig('B1', 'foremal', 'Ljuset kan absorberas, reflekteras eller gå igenom.'),
  // normalen streckad, vinklarna mot normalen
  fig('B2', 'reflektion', 'Infallsvinkeln är lika stor som reflektionsvinkeln.'),
  // förlopp, steg 1–4
  fig('B3', 'spegelbild', 'Spegelbilden ser ut att stå lika långt bakom spegeln.'),
  // struktur: bara namn
  fig('B4', 'speglar', 'En konkav spegel samlar ljuset, en konvex sprider det.'),
  // förlopp, steg 1–3: vågfronterna, ena sidan når vattnet först
  fig('B5', 'brytning', 'Den sida som når vattnet först saktar in först, och strålen viker av.'),
  // förlopp, steg 1–4
  fig('B6', 'penna', 'Ögat följer strålen bakåt, så spetsen ser ut att ligga högre.'),
  // förlopp, steg 1–3
  fig('B7', 'totalreflektion', 'Träffar strålen ytan tillräckligt snett kommer inget ljus ut – det kallas totalreflektion.'),
  // struktur: bara namn
  fig('B8', 'linser', 'En konvex lins samlar ljuset, en konkav sprider det.'),
  // förlopp, steg 1–4
  fig('B9', 'ogat', 'Bilden på näthinnan blir upp och ned.'),
  fig('B10', 'synfel', 'Glasögonen flyttar bilden till näthinnan.'),
  fig('B11', 'prisma', 'Rött ljus bryts minst och violett mest.'),
  // förlopp, steg 1–3
  fig('B12', 'farg', 'Äpplet reflekterar främst rött ljus.'),
  // struktur: bara namn
  fig('B13', 'spektrum', 'Ju kortare våglängd, desto mer energi har varje foton.'),
  // jämförelse i två kolumner, inga pilar
  fig('B14', 'jamforelse', 'Ljud behöver ett ämne att färdas i, ljus gör det inte.')
];
