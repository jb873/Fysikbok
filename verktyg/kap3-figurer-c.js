// Figurerna till IV C Kaströrelse (verktyg/kap3-omvandlare.js --text c): [{ borjar: början av bildmarkeringen, figurer }].
// Arbetsorder 16 (2026-11-11). Två nya figurtyper i bokskal/figurer.js: kastbana (lägena hoghus, komposanter, vinklar) och
// cirkelrorelse (lägena snore, bil); K4 är den befintliga newtons_kanon. Data enligt källans FIGURER-del: höjd 20 m,
// kastfart 10 m/s, g = 10. Figurerna står efter sin bildmarkering, på varje nivå där markeringen finns (Standard och
// Enkel – Fördjupningen har inga egna figurer).
module.exports = [
  // K1: höghuset – en släppt och en kastad boll, lägen var 0,5 s, på samma höjd vid varje tidpunkt
  { borjar: '[BILD K1:', figurer: [
    { id: 'bild-k1', typ: 'figur', namn: 'kastbana', lage: 'hoghus', hojd: 20, fart: 10, steg: 0.5,
      bildtext: 'Två bollar startar samtidigt från taket. Den släppta och den kastade bollen ligger på samma höjd vid varje tidpunkt, och båda når marken samtidigt.' }
  ] },
  // K2: kastbanan med vågrät och lodrät pil varje sekund
  { borjar: '[BILD K2:', figurer: [
    { id: 'bild-k2', typ: 'figur', namn: 'kastbana', lage: 'komposanter', fart: 10, sekunder: 3,
      bildtext: 'Farten framåt är lika stor hela vägen. Farten nedåt ökar med 10 m/s varje sekund.' }
  ] },
  // K3: tre kastvinklar med samma fart, utan luftmotstånd
  { borjar: '[BILD K3:', figurer: [
    { id: 'bild-k3', typ: 'figur', namn: 'kastbana', lage: 'vinklar', fart: 20, vinklar: [30, 45, 60],
      bildtext: 'Samma fart, tre vinklar. 45° kommer längst. 30° och 60° landar på samma ställe, men 60° går högre.' }
  ] },
  // K4: Newtons kanon (befintlig figur)
  { borjar: '[BILD K4:', figurer: [
    { id: 'bild-k4', typ: 'figur', namn: 'newtons_kanon',
      bildtext: 'Ju högre fart, desto längre bort landar kulan. Med tillräckligt hög fart faller den runt hela jorden.' }
  ] },
  // K5: bollen i snöret – kraften in mot mitten, rakt fram längs tangenten när snöret släpps
  { borjar: '[BILD K5:', figurer: [
    { id: 'bild-k5', typ: 'figur', namn: 'cirkelrorelse', lage: 'snore',
      bildtext: 'Snöret drar bollen in mot mitten. När snöret släpps fortsätter bollen rakt fram, inte utåt.' }
  ] },
  // K6: bilen i kurvan – friktionen in mot kurvans mitt, rakt fram utan friktion
  { borjar: '[BILD K6:', figurer: [
    { id: 'bild-k6', typ: 'figur', namn: 'cirkelrorelse', lage: 'bil',
      bildtext: 'Friktionen från vägen drar bilen in mot kurvans mitt. Utan friktion, till exempel på blankis, fortsätter bilen rakt fram.' }
  ] }
];
