// Figurerna till V D Maskiner och effekt (verktyg/kap3-omvandlare.js --text vd): [{ borjar, figurer }]. Arbetsorder 29
// (2026-11-19). Nya lägen av figurtypen energi i bokskal/figurer.js: ramp, gungbrada och talja. Data enligt ordern (källan
// har ingen FIGURER-del); bildtexterna är skrivna här. D1–D3 står efter sin bildmarkering i Standard och Enkel.
module.exports = [
  // D1: klotet på 50 kg upp på bordet (1 m), rakt upp eller i en vagn längs en ramp på 2 m
  { borjar: '[BILD D1:', figurer: [
    { id: 'bild-d1', typ: 'figur', namn: 'energi', lage: 'ramp', massa: 50, hojd: 1, ramp: 2,
      bildtext: 'Rakt upp krävs en stor kraft längs en kort sträcka, uppför rampen en liten kraft längs en lång sträcka. Arbetet blir 500 J båda gångerna.' }
  ] },
  // D2: gungbrädan i balans, 800 N på 1 m och 400 N på 2 m
  { borjar: '[BILD D2:', figurer: [
    { id: 'bild-d2', typ: 'figur', namn: 'energi', lage: 'gungbrada', vanster: { kraft: 800, arm: 1 }, hoger: { kraft: 400, arm: 2 },
      bildtext: '800 N gånger 1 m och 400 N gånger 2 m ger samma moment, 800 Nm. Momenten vrider åt var sitt håll och tar ut varandra.' }
  ] },
  // D3: taljan, två repdelar; lasten lyft 1 m, 2 m rep indraget
  { borjar: '[BILD D3:', figurer: [
    { id: 'bild-d3', typ: 'figur', namn: 'energi', lage: 'talja', lyft: 1,
      bildtext: 'Två repdelar bär lasten, så dragkraften är halva tyngden. Men för att lyfta lasten 1 m måste du dra in 2 m rep.' }
  ] }
];
