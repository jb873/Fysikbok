// Figurerna till III C Mekanisk energi (verktyg/kap3-omvandlare.js --text vc): [{ borjar, figurer }]. Arbetsorder 29
// (2026-11-19). Nya lägen av figurtypen energi i bokskal/figurer.js: fall, gunga och stavhopp. Data enligt ordern (källan
// har ingen FIGURER-del); bildtexterna är skrivna här. C1 och C2 står efter sin bildmarkering i Standard och Enkel, C3 i
// Fördjupningen.
module.exports = [
  // C1: bollen från 5 m i tre lägen, lägesenergi och rörelseenergi som staplar
  { borjar: '[BILD C1:', figurer: [
    { id: 'bild-c1', typ: 'figur', namn: 'energi', lage: 'fall', hojd: 5, lagen: [5, 2.5, 0],
      bildtext: 'Bollen tappar höjd och får fart. Lägesenergin blir rörelseenergi, men tillsammans är de lika stora hela vägen ned.' }
  ] },
  // C2: gungan högst till vänster, lägst i mitten, högst till höger
  { borjar: '[BILD C2:', figurer: [
    { id: 'bild-c2', typ: 'figur', namn: 'energi', lage: 'gunga', vinkel: 45,
      bildtext: 'Högst upp står gungan stilla och har störst lägesenergi. I mitten går den fortast och har störst rörelseenergi.' }
  ] },
  // C3: stavhoppet – ansatsen, staven böjd, över ribban
  { borjar: '[BILD C3:', figurer: [
    { id: 'bild-c3', typ: 'figur', namn: 'energi', lage: 'stavhopp',
      bildtext: 'Rörelseenergin från ansatsen blir elastisk energi i den böjda staven och sedan lägesenergi när hopparen kommer upp över ribban.' }
  ] }
];
