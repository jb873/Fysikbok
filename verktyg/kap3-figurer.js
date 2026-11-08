// Figurerna till kapitel III:s texter (verktyg/kap3-omvandlare.js): [{ borjar: början av bildmarkeringen, figurer: [...] }].
// Arbetsorder 12, steg 2: R1–R4 i IV A Resulterande kraft (källans FIGURER-del och Joachims skisser
// resultant-rutat-papper-skiss-v2.png och resultant-vinklar-skiss.png). Figurerna står efter sin bildmarkering, på varje
// nivå där markeringen finns. Rubrikerna i R2 och bildtexterna i R2 och R3 är skissernas texter.
module.exports = [
  // R1: kraftpilar med värdena – överst två krafter åt höger efter varandra och resultanten under, underst två krafter
  // åt var sitt håll från samma punkt; resultanten röd
  { borjar: '[BILD R1:', figurer: [
    { id: 'bild-r1-samma', typ: 'figur', namn: 'kraftpilar', kedja: true, rod: true, resultant: true,
      krafter: [{ riktning: 'hoger', storlek: 300 }, { riktning: 'hoger', storlek: 200 }] },
    { id: 'bild-r1-motsatt', typ: 'figur', namn: 'kraftpilar', rod: true, resultant: true,
      krafter: [{ riktning: 'vanster', storlek: 300 }, { riktning: 'hoger', storlek: 250 }] }
  ] },
  // R2: tre steg på rutat papper, F₁ = (4, 0), F₂ = (3, 4), resultanten (7, 4), 1 ruta = 10 N
  { borjar: '[BILD R2:', figurer: [
    { id: 'bild-r2', typ: 'figur', namn: 'resultant_rutor', lage: 'steg',
      krafter: [{ dx: 4, dy: 0, namn: '40 N' }, { dx: 3, dy: 4, namn: '50 N' }], resultant: { namn: '≈ 81 N' },
      rubriker: ['1. Båda krafterna från samma punkt', '2. Flytta 50 N till spetsen av 40 N', '3. Resultanten från start till slut'],
      bildtext: 'Skala: 1 ruta = 10 N. 50 N = 3 rutor höger + 4 rutor upp. Resultanten = 7 rutor höger + 4 rutor upp ≈ 8,1 rutor ≈ 81 N.' }
  ] },
  // R3: två krafter på 100 N vid 0°, 45°, 90° och 180°
  { borjar: '[BILD R3:', figurer: [
    { id: 'bild-r3', typ: 'figur', namn: 'resultant_rutor', lage: 'vinklar', kraft: 100, vinklar: [0, 45, 90, 180],
      bildtext: 'Två krafter på 100 N. Ju större vinkel, desto mindre resulterande kraft.' }
  ] },
  // R4 (Fördjupning): en pil (5, 1) med komposanterna streckade, och lampan i två snören med snörkrafternas
  // komposanter och tyngdkraften (10 N; snörena 50° och 130° från det vågräta: sidodelarna lika stora och motriktade,
  // uppåtdelarna tillsammans lika med tyngden)
  { borjar: '[BILD R4:', figurer: [
    { id: 'bild-r4-komposanter', typ: 'figur', namn: 'resultant_rutor', lage: 'komposanter',
      kraft: { dx: 5, dy: 1, namn: 'F' }, komposanter: ['50 N', '10 N'], skala: '1 ruta = 10 N' },
    { id: 'bild-r4-lampa', typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lampa' }, snoren: true, komposanter: true, varden: false,
      krafter: [{ namn: 'snörkraft', riktning: 130, storlek: 10 / (2 * Math.sin(50 * Math.PI / 180)) },
        { namn: 'snörkraft', riktning: 50, storlek: 10 / (2 * Math.sin(50 * Math.PI / 180)) }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }] }
  ] }
];
