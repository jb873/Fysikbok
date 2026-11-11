// Figurerna till IV B Fritt fall (verktyg/kap3-omvandlare.js --text b): [{ borjar: början av bildmarkeringen, figurer }].
// Joachims uppdrag 2026-11-11. Alla figurer är av befintliga sorter i bokskal/figurer.js (motorn ändras inte): kraftpilar,
// jordklot_tyngd och diagram_graf. Kraftpilarna utan värden: det är förhållandet mellan krafterna som räknas. Figurerna
// står efter sin bildmarkering, på varje nivå där markeringen finns.
const pilar = (id, foremal, krafter, extra) => Object.assign(
  { id, typ: 'figur', namn: 'kraftpilar', foremal, krafter, resultant: true, varden: false }, extra);
const luft = storlek => ({ namn: 'luftmotstånd', riktning: 'upp', storlek });
const tyngd = storlek => ({ namn: 'tyngdkraft', riktning: 'ner', storlek });

module.exports = [
  // B1: på väg ner från stolen – tyngdkraften mycket större än luftmotståndet, resultanten nedåt
  { borjar: '[BILD B1:', figurer: [
    pilar('bild-b1', { namn: 'Du' }, [luft(1.5), tyngd(10)],
      { bildtext: 'På väg ner: tyngdkraften är mycket större än luftmotståndet. Den resulterande kraften pekar nedåt, och farten ökar.' })
  ] },
  // B2: landningen – golvets kraft uppåt större än tyngdkraften, resultanten uppåt
  { borjar: '[BILD B2:', figurer: [
    pilar('bild-b2', { namn: 'Du' }, [{ namn: 'kraft från golvet', riktning: 'upp', storlek: 30 }, tyngd(10)],
      { underlag: true, bildtext: 'När du landar trycker golvet uppåt hårdare än tyngdkraften drar. Den resulterande kraften pekar uppåt, och farten minskar till noll.' })
  ] },
  // B3: tyngdkraften mot jordens mitt (befintlig figur, standardpersonerna)
  { borjar: '[BILD B3:', figurer: [
    { id: 'bild-b3', typ: 'figur', namn: 'jordklot_tyngd',
      bildtext: 'Tyngdkraften pekar mot jordens mitt, var man än står. Det är det vi menar med ”nedåt”.' }
  ] },
  // B4: stenen och fjädern i luft – var och en med sitt eget förhållande mellan krafterna
  { borjar: '[BILD B4:', figurer: [
    pilar('bild-b4-sten', { namn: 'Sten', form: 'boll' }, [luft(0.6), tyngd(10)],
      { bildtext: 'Stenen i luft: luftmotståndet är litet jämfört med tyngdkraften.' }),
    pilar('bild-b4-fjader', { namn: 'Fjäder' }, [luft(9), tyngd(10)],
      { bildtext: 'Fjädern i luft: luftmotståndet är nästan lika stort som tyngdkraften. Pilarna visar förhållandet för varje föremål – stenens tyngdkraft är egentligen mycket större än fjäderns.' })
  ] },
  // B5: fallskärmshopparen i fyra lägen, samma skala (den största kraften, luftmotståndet i läge 3, får den längsta pilen)
  { borjar: '[BILD B5:', figurer: [
    pilar('bild-b5-1', { namn: 'Hopparen' }, [luft(3), tyngd(10)], { skala: 25, bildtext: '1. Farten ökar: tyngdkraften är större än luftmotståndet.' }),
    pilar('bild-b5-2', { namn: 'Hopparen' }, [luft(10), tyngd(10)], { skala: 25, bildtext: '2. Konstant hastighet: krafterna är lika stora.' }),
    pilar('bild-b5-3', { namn: 'Hopparen' }, [luft(25), tyngd(10)], { skala: 25, bildtext: '3. Skärmen öppnas: luftmotståndet är större än tyngdkraften, och farten minskar.' }),
    pilar('bild-b5-4', { namn: 'Hopparen' }, [luft(10), tyngd(10)], { skala: 25, bildtext: '4. Lägre konstant fart: krafterna är lika stora igen.' })
  ] },
  // B6 (Fördjupning): hastigheten och fallsträckan mot tiden, g ≈ 10 m/s²
  { borjar: '[BILD B6:', figurer: [
    { id: 'bild-b6', typ: 'figur', namn: 'diagram_graf', diagram: [
      { rubrik: 'Hastighet', x: { storhet: 'tid', enhet: 's', max: 4, steg: 1, tal: 1 }, y: { storhet: 'hastighet', enhet: 'm/s', max: 40, steg: 10, tal: 10 },
        grafer: [{ punkter: [[0, 0], [1, 10], [2, 20], [3, 30], [4, 40]] }] },
      { rubrik: 'Fallsträcka', x: { storhet: 'tid', enhet: 's', max: 4, steg: 1, tal: 1 }, y: { storhet: 'fallsträcka', enhet: 'm', max: 80, steg: 20, tal: 20 },
        grafer: [{ punkter: [[0, 0], [1, 5], [2, 20], [3, 45], [4, 80]], kurva: true }] }],
      bildtext: 'Ett fritt fall de första fyra sekunderna (g ≈ 10 m/s²).' }
  ] }
];
