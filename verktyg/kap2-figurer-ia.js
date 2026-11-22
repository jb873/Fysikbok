// Figurerna till kapitel 2 Ljud och ljus, I A Ljud är vibrationer (verktyg/kap3-omvandlare.js --text 2ia): [{ borjar, figurer }].
// Arbetsorder 33 (2026-11-21). Figurtypen ljud i bokskal/figurer.js med kapitel 2:s egna lägen (de interna namnen
// krockar inte med VI:s; id:t i texten är källans, A1–A5). Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljud', lage, bildtext }] });
module.exports = [
  // förlopp, steg 1–4
  fig('A1', 'linjal', 'Den fria änden svänger upp och ned många gånger varje sekund, och ljudet sprids ut i luften.'),
  // förlopp, steg 1–4; samma prickar i alla tre ögonblicken, bara tätare och glesare – vågen går åt höger
  fig('A2', 'membran-hoger', 'Förtätningarna vandrar åt höger, men prickarna ligger kvar på ungefär samma ställen.'),
  // förlopp, steg 1–3; det rödmarkerade varvet är tillbaka på sin plats i steg 3
  fig('A3', 'fjader', 'Förtätningen vandrar längs fjädern, men det röda varvet är tillbaka på sin plats.'),
  // förlopp, steg 1–4; klockan hänger i en tråd
  fig('A4', 'vakuum', 'Utan luft finns inget som kan föra ljudet vidare till örat.'),
  // struktur (Fördjupning): longitudinell överst, transversell underst
  fig('A5', 'vagtyper', 'I en longitudinell våg svänger varven längs vågens riktning, i en transversell på tvären.')
];
