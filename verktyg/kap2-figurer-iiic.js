// Figurerna till kapitel 2 Ljud och ljus, III C Ljuset bryts (verktyg/kap3-omvandlare.js --text 2iiic): [{ borjar, figurer }].
// Arbetsorder 38 (2026-11-25). Figurtypen ljus i bokskal/figurer.js med avsnitt III:s egna lägen (id:t i texten är källans).
// Varje [BILD …]-rad är specifikationen, bildtexterna är skrivna här. Strålarna är modellstrålar (#c2410c), räknade.
const fig = (nr, lage, bildtext) => ({ borjar: `[BILD ${nr}:`, figurer: [{ id: 'bild-' + nr.toLowerCase(), typ: 'figur', namn: 'ljus', lage, bildtext }] });
module.exports = [
  fig('C1', 'vagfront', 'Vågfrontens vänstra kant når vattnet först och går långsammare. Fronterna kommer tätare och vrids, och strålen bryts mot normalen.'),
  fig('C2', 'brytning-tva', 'Från luft till vatten bryts ljuset mot normalen, från vatten till luft från normalen. Lite ljus reflekteras vid ytan.'),
  fig('C3', 'penna-steg', 'Ögat förlänger strålarna rakt bakåt, så spetsen ser ut att ligga högre upp än den gör.'),
  fig('C4', 'fisk', 'Fisken ser ut att ligga högre upp och närmare ytan än den gör.'),
  fig('C5', 'glasskiva', 'Strålen bryts lika mycket in i glaset som ut. Den fortsätter parallellt med den inkommande, men förskjuten.'),
  fig('C6', 'pool', 'Ju snettare ljuset träffar ytan, desto mer bryts det. Vid ca 49° går strålen längs ytan, och vid större vinkel reflekteras allt ljus.'),
  fig('C7', 'fiber', 'Ljuset totalreflekteras mot manteln hela vägen genom fibern, också där den böjer.'),
  fig('C8', 'hagring', 'Strålen från himlen böjs gradvis uppåt i den varma luften. Ögat förlänger den rakt bakåt, och himlen syns på vägen.'),
  fig('C9', 'diamant', 'Ljuset totalreflekteras mot två sneda ytor och går ut genom toppen igen.'),
  fig('C10', 'prisma-vander', 'Prismat skickar tillbaka ljuset åt samma håll, och den övre strålen har blivit den nedre.')
];
