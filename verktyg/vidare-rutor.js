// node verktyg/vidare-rutor.js – rutan "Vill du gå vidare?" sist i varje Fördjupningsbok i Kraft och rörelse
// (arbetsorder 13, del 2, 2026-11-08). Rutan är motorns (blocktypen vidare: rubriken och inledningen står i bok.js), inte
// källtextens. Här står bara kopplingen: vilka avsnitt i Nästa steg-textboken som varje Fördjupningstext länkar till.
// Länktexten är avsnittets nummer och titel, räknade ur textboken, så att den alltid stämmer med boken.
// Utan argument skrivs blocket in sist i Sammanfattningen i varje fil i tabellen (ett block som redan står där byts ut).
// Modulen används också av kap3-omvandlare.js (IV A skrivs om därifrån) och av ordagrant.js (rutan godkänns där).
'use strict';
const fs = require('fs'), path = require('path');
const ROT = path.join(__dirname, '..');
const TEXTBOK = 'nasta-kraft-och-rorelse';
const TEXTBOK_FIL = 'kraft_och_rorelse/rorelse_och_kraft/innehall/nasta-steg/textbok.js';
// Kopplingen efter textens innehåll (ordern): Fördjupningsboken → avsnitten i Nästa steg, i ordningen de står i rutan.
// Avsnitt 9 och 10 (tryck och lyftkraft) får inga länkar nu – de kopplas till kapitlet Vatten, luft och värme.
const TABELL = [
  { fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/rorelse/fordjupning.js', text: 'III A Rörelse',
    avsnitt: ['storheter-med-riktning', 'medelhastighet', 'rorelsen-i-diagram', 'acceleration'] },
  { fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/kraft-och-friktion/fordjupning.js', text: 'III B Kraft och friktion',
    avsnitt: ['friktionskoefficienten', 'tyngden-och-fritt-fall'] },
  { fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/kraft-och-motkraft/fordjupning.js', text: 'III C Kraft och motkraft',
    avsnitt: ['newtons-andra-lag', 'rorelsemangd'] },
  { fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/tyngdkraften/fordjupning.js', text: 'III D Tyngdkraften',
    avsnitt: ['tyngden-och-fritt-fall', 'newtons-andra-lag'] },
  { fil: 'kraft_och_rorelse/fall_kast_och_balans/innehall/resulterande-kraft/fordjupning.js', text: 'IV A Resulterande kraft',
    avsnitt: ['storheter-med-riktning', 'newtons-andra-lag'] },
  // IV B (2026-11-11): fallsträckan och g (avsnitt 6), hastighet och sträcka i diagram (3), a = F / m (5)
  { fil: 'kraft_och_rorelse/fall_kast_och_balans/innehall/fritt-fall/fordjupning.js', text: 'IV B Fritt fall',
    avsnitt: ['tyngden-och-fritt-fall', 'rorelsen-i-diagram', 'newtons-andra-lag'] },
  // IV C (arbetsorder 16): kastet delat i komposanter (avsnitt 1) och fallet (6)
  { fil: 'kraft_och_rorelse/fall_kast_och_balans/innehall/kastrorelse/fordjupning.js', text: 'IV C Kaströrelse',
    avsnitt: ['storheter-med-riktning', 'tyngden-och-fritt-fall'] }
];
function lasBok(fil) {
  let data; const B = global.Bok; global.Bok = { niva: (n, d) => { data = d; } };
  try { eval(fs.readFileSync(path.join(ROT, fil), 'utf8')); } finally { global.Bok = B; }
  return data;
}
// Textbokens numrerade avsnitt: id → "N. Titel" (numret som motorn räknar det)
function avsnittsnamn() {
  const ut = {}; let n = 0;
  for (const a of lasBok(TEXTBOK_FIL).avsnitt) if (a.numrerad !== false) ut[a.id] = `${++n}. ${a.titel}`;
  return ut;
}
// Blocket för en fil i tabellen (fil: sökväg från repots rot, med / )
function block(fil) {
  const rad = TABELL.find(r => r.fil === fil.split(path.sep).join('/'));
  if (!rad) return null;
  const namn = avsnittsnamn();
  return { typ: 'vidare', lankar: rad.avsnitt.map(id => {
    if (!namn[id]) throw new Error(`${rad.text}: avsnittet ”${id}” finns inte i Nästa steg-textboken`);
    return { text: namn[id], bok: TEXTBOK, ankare: id };
  }) };
}
const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const blockRad = b => `        { typ: 'vidare', lankar: [\n` + b.lankar.map(l => `          { text: ${q(l.text)}, bok: ${q(l.bok)}, ankare: ${q(l.ankare)} }`).join(',\n') + '\n        ] }';
module.exports = { TABELL, TEXTBOK, block, blockRad };

if (require.main === module) {
  for (const rad of TABELL) {
    const fil = path.join(ROT, rad.fil);
    const t0 = fs.readFileSync(fil, 'utf8'), crlf = t0.includes('\r\n'), rader = t0.replace(/\r\n/g, '\n').split('\n');
    // ett block som redan står där tas bort (det skrivs om)
    for (let i = rader.findIndex(l => l.includes("{ typ: 'vidare'")); i >= 0; i = rader.findIndex(l => l.includes("{ typ: 'vidare'"))) {
      let j = i; while (!/\] \}$/.test(rader[j])) j++;
      rader.splice(i, j - i + 1);
      if (rader[i - 1].endsWith(',')) rader[i - 1] = rader[i - 1].slice(0, -1);
    }
    // Sammanfattningen: det sista blocket före "      ]" efter id: 'sammanfattning'
    const s = rader.findIndex(l => /id: 'sammanfattning'/.test(l));
    if (s < 0) throw new Error(rad.fil + ': ingen Sammanfattning');
    const slut = rader.findIndex((l, i) => i > s && l === '      ]');
    if (!rader[slut - 1].endsWith(',')) rader[slut - 1] += ',';
    rader.splice(slut, 0, blockRad(block(rad.fil)));
    fs.writeFileSync(fil, rader.join(crlf ? '\r\n' : '\n'));
    console.log(`${rad.text}: ${block(rad.fil).lankar.map(l => l.text).join(' · ')} → ${rad.fil}`);
  }
}
