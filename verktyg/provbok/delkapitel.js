/* PROVDATA för verktyg/bok-grind.js – inte elevinnehåll. Provboken prövar det som det riktiga innehållet inte använder
 * än: en bok per text (texter, innehall/<text>/<nivå>.js) – också en nivå som bara en text har och en text som är
 * "kommer" –, hjälpmedel med adress (också som flik), begrepp som länkar, en extra nivå ur data (Extranivå) och
 * kraftpilarna. Den är byggd med mallen precis som ett delkapitel – utan en rad i motorn. */
Bok.delkapitel({
  id: 'fysik-provbok',
  amne: 'Fysik',
  smulor: ['Fysik', 'Provdata'],
  nummer: 9,
  titel: 'Provbok',
  undertitel: 'inte elevinnehåll',
  overrad: 'Provdata för bok-grind',
  kapitel: '../provkapitel.js',               // omslaget (provkapitlet)
  omslag: { undertitel: 'Prov: {text}' },     // omslagets undertitel ur en mall
  texter: [
    { id: 'krafter', titel: 'Krafter', undertitel: 'inte elevinnehåll' },   // alla fyra nivåer, Extranivå bara här
    { id: 'tryck', titel: 'Tryck' },                                         // bara Standard
    { id: 'energi', titel: 'Energi' }                                        // tom på alla nivåer: "kommer"
  ],
  nivaer: [
    { id: 'enkel', namn: 'Enkel', ikon: '📗' },
    { id: 'standard', namn: 'Standard', ikon: '📘' },
    { id: 'fordjupning', namn: 'Fördjupning', ikon: '📕' },
    { id: 'extra', namn: 'Extranivå' }
  ],
  standardniva: 'standard',
  // Nästa steg (arbetsorder 11): en fristående bok av varje slag – Nästa steg (blocket i Läs), en övningsbok (fliken
  // Öva) och en stödbok utan kort (bara länkmål) – med de nya märkningarna och länkar mellan böckerna
  nastaSteg: [{ id: 'prov-nasta', titel: 'Provbok · Nästa steg', fil: 'innehall/nasta/textbok.js' }],
  ovningsbocker: [{ id: 'prov-ovning', titel: 'Provbok · Nästa steg – övningsbok', fil: 'innehall/nasta/ovningsbok.js' }],
  stodbocker: [{ id: 'prov-matte', titel: 'Provbok · Matematik', fil: 'innehall/nasta/matte.js' }],
  hjalpmedel: {
    forelasning:    { href: null },
    ova:            { href: 'hjalpmedel.html?vad=ova&avsnitt={avsnitt}' },
    sjalvskattning: { href: 'hjalpmedel.html?vad=sjalvskattning' },
    begreppslista:  { href: 'hjalpmedel.html?vad=begrepp#{begrepp}' },
    elevbok:        { href: null }
  }
});
