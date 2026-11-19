// Figurerna till V B Energi och arbete (verktyg/kap3-omvandlare.js --text vb): [{ borjar, figurer }]. Arbetsorder 28
// (2026-11-19). Ny figurtyp i bokskal/figurer.js: energi (lägena studs, arbete och snett) – ingen befintlig typ ritar
// en studsande boll, en person med en låda eller en kälke med vinkel och tal vid delarna. Data enligt ordern (källan har
// ingen FIGURER-del); bildtexterna är skrivna här. B1 och B2 står efter sin bildmarkering i Standard och Enkel, B3 i
// Fördjupningen.
module.exports = [
  // B1: en boll som studsar tre gånger, varje studs lägre (60 % av höjden kvar)
  { borjar: '[BILD B1:', figurer: [
    { id: 'bild-b1', typ: 'figur', namn: 'energi', lage: 'studs', studsar: 3, kvar: 0.6,
      bildtext: 'Energin byter form i varje studs: lägesenergi blir rörelseenergi, rörelseenergi blir elastisk energi och tillbaka. En del blir värme och ljud, och därför blir varje studs lägre.' }
  ] },
  // B2: lyfter, håller still, bär framåt – kraften uppåt i alla tre, rörelsen upp, ingen och framåt
  { borjar: '[BILD B2:', figurer: [
    { id: 'bild-b2', typ: 'figur', namn: 'energi', lage: 'arbete',
      bildtext: 'Kraften från armarna pekar uppåt i alla tre bilderna. Bara när lådan flyttas uppåt, längs kraften, utför kraften ett arbete på lådan.' }
  ] },
  // B3: kälken och repet i 30°, 100 N delat i ungefär 87 N framåt och 50 N uppåt
  { borjar: '[BILD B3:', figurer: [
    { id: 'bild-b3', typ: 'figur', namn: 'energi', lage: 'snett', kraft: 100, vinkel: 30,
      bildtext: 'Repet drar med 100 N snett uppåt. Kälken rör sig rakt fram, så bara delen framåt, ungefär 87 N, utför arbete på kälken.' }
  ] }
];
