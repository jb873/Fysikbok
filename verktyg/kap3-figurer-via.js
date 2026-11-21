// Figurerna till VI A Ljud (verktyg/kap3-omvandlare.js --text via): [{ borjar, figurer }]. Arbetsorder 30 (2026-11-20).
// Figurtypen ljud i bokskal/figurer.js (ny, arbetsorder 30); varje [BILD …]-rad är specifikationen, bildtexterna är
// skrivna här. A1–A8 står efter sin bildmarkering i Standard och Enkel (Fördjupningen har inga figurer).
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // förlopp, steg 1–5: membranet, förtätning och förtunning, vågen vandrar, luften svänger bara lite (källan v4)
  fig('A1', 'membran', 'Förtätningarna vandrar bort, men luften svänger bara lite fram och tillbaka.'),
  // samma våg i partikelmodellen och vågmodellen; den lodräta axeln märkt "tryck"
  fig('A2', 'modeller', 'Vågtopparna står där luften är tätast och trycket högst.'),
  fig('A3', 'doppler', 'Framför ambulansen trycks ljudvågorna ihop, bakom den dras de ut.'),
  // struktur: bara namn
  fig('A4', 'orat', 'Örats delar, från ytterörat till hörselnerven.'),
  // tonhöjd och ljudstyrka som två separata jämförelser; starkt och svagt ljud med samma avstånd mellan förtätningarna
  fig('A5', 'jamforelse', 'Överst skiljer frekvensen, underst bara amplituden.'),
  // förlopp, steg 1–4: större amplitud, samma ton och samma våglängd
  fig('A6', 'resonans', 'Lådan ger större amplitud men samma våglängd, alltså samma ton.'),
  // förlopp, steg 1–5
  fig('A7', 'ekolod', 'Ljudet går ned och upp, så sträckan delas med 2.'),
  fig('A8', 'isolering', 'Två sätt att isolera: en tung vägg och ett luftigt material.')
];
