// Figurerna till IV D Tyngdpunkt, balans och kroppen (verktyg/kap3-omvandlare.js --text d): [{ borjar, figurer }].
// Arbetsorder 17 (2026-11-12). Nya figurtyper i bokskal/figurer.js: stabilitet (lägena lada, fordon, hojdhopp) och krock;
// kastbana har fått läget hopp. Data enligt källans FIGURER-del. Figurerna står efter sin bildmarkering i Standard och
// Enkel – Fördjupningen har inga egna figurer.
module.exports = [
  // D1: lådan (bredd 2, höjd 3) rak, lutad 15° och lutad 45°
  { borjar: '[BILD D1:', figurer: [
    { id: 'bild-d1', typ: 'figur', namn: 'stabilitet', lage: 'lada', bredd: 2, hojd: 3, vinklar: [0, 15, 45],
      bildtext: 'Lutar lådan lite träffar lodlinjen från tyngdpunkten fortfarande stödytan, och lådan faller tillbaka. Lutar den mycket hamnar linjen utanför, och lådan välter.' }
  ] },
  // D2: en låg racerbil och en hög lastbil bakifrån, båda lutade 30°
  { borjar: '[BILD D2:', figurer: [
    { id: 'bild-d2', typ: 'figur', namn: 'stabilitet', lage: 'fordon', vinkel: 30,
      bildtext: 'Båda lutar 30°. Racerbilens lodlinje träffar mellan hjulen, men lastbilens hamnar utanför: lastbilen välter.' }
  ] },
  // D3: ett hopp i fem lägen, tyngdpunkten på en kastbana
  { borjar: '[BILD D3:', figurer: [
    { id: 'bild-d3', typ: 'figur', namn: 'kastbana', lage: 'hopp', fart: 6, vinkel: 45,
      bildtext: 'Armar och ben har olika ställning i varje läge, men tyngdpunkten följer en jämn kastbana.' }
  ] },
  // D4: höjdhopparen i bågform över ribban
  { borjar: '[BILD D4:', figurer: [
    { id: 'bild-d4', typ: 'figur', namn: 'stabilitet', lage: 'hojdhopp', ribba: 2,
      bildtext: 'Kroppen går över ribban, men tyngdpunkten passerar strax under den.' }
  ] },
  // D5: två bilar mot en vägg – styv bil och bil med deformationszon
  { borjar: '[BILD D5:', figurer: [
    { id: 'bild-d5', typ: 'figur', namn: 'krock', stopp: [0.05, 0.5],
      bildtext: 'Den styva bilen stannar på några centimeter. Bilen med deformationszon trycks ihop fram, stannar på en längre sträcka och får mindre kraft – kupén är hel.' }
  ] }
];
