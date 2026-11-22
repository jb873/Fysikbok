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
// Avsnitt 9 och 10 (tryck och lyftkraft) länkas från V A Tryck (arbetsorder 21, 2026-11-12).
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
    avsnitt: ['storheter-med-riktning', 'tyngden-och-fritt-fall'] },
  // IV D (arbetsorder 17): G-kraften ur accelerationen (avsnitt 4), a = F / m (5) och impulsen i krocken (8)
  { fil: 'kraft_och_rorelse/fall_kast_och_balans/innehall/tyngdpunkt-och-balans/fordjupning.js', text: 'IV D Tyngdpunkt, balans och kroppen',
    avsnitt: ['acceleration', 'newtons-andra-lag', 'rorelsemangd'] },
  // V A (arbetsorder 21): tryck (avsnitt 9) och lyftkraft (10), enligt ordern
  { fil: 'kraft_och_rorelse/tryck_arbete_och_maskiner/innehall/tryck/fordjupning.js', text: 'V A Tryck',
    avsnitt: ['tryck', 'lyftkraft'] },
  // V B (arbetsorder 28): ingen ruta – Nästa steg har inget avsnitt om energi och arbete (ordern). En rad utan avsnitt
  // betyder "ingen ruta här, med avsikt"; en fil som saknas i tabellen är fortfarande ett fel.
  { fil: 'kraft_och_rorelse/tryck_arbete_och_maskiner/innehall/arbete-och-effekt/fordjupning.js', text: 'V B Energi och arbete',
    avsnitt: [] },
  // V C och V D (arbetsorder 29): ingen ruta, som B
  { fil: 'kraft_och_rorelse/tryck_arbete_och_maskiner/innehall/mekanisk-energi/fordjupning.js', text: 'V C Mekanisk energi', avsnitt: [] },
  { fil: 'kraft_och_rorelse/tryck_arbete_och_maskiner/innehall/havstangen-och-enkla-maskiner/fordjupning.js', text: 'V D Maskiner och effekt', avsnitt: [] },
  // VI A (arbetsorder 33): länkar till kapitel 2 Ljud och ljus, avsnitt I Vad ljud är, där innehållet hör hemma – en annan
  // sida (sida: mappen från roten, nivån och [text, avsnitt]); rutan får inledningen ur sida.inledning. VI B (arbetsorder
  // 30): ingen ruta än – kapitlets avsnitt om ljus finns inte
  { fil: 'kraft_och_rorelse/ljud_och_ljus_repetition/innehall/ljud/fordjupning.js', text: 'VI A Ljud', avsnitt: [],
    sida: { mapp: 'ljud_och_ljus/vad_ljud_ar', niva: 'fordjupning', inledning: 'Läs mer i kapitel 2 Ljud och ljus – Vad ljud är:',
      lankar: [['ljud-ar-vibrationer', 'ljud-ar-tryck'], ['ljudvagen', 'vaglangd-och-hastighet'], ['ljudets-hastighet', 'styvhet-och-densitet'],
               ['orat-och-horseln', 'orat-forstarker']] } },
  { fil: 'kraft_och_rorelse/ljud_och_ljus_repetition/innehall/ljus/fordjupning.js', text: 'VI B Ljus', avsnitt: [] },
  // Kapitel 2 Ljud och ljus, avsnitt I (arbetsorder 33): inga rutor än (ordern)
  { fil: 'ljud_och_ljus/vad_ljud_ar/innehall/ljud-ar-vibrationer/fordjupning.js', text: 'Kap 2 I A Ljud är vibrationer', avsnitt: [] },
  { fil: 'ljud_och_ljus/vad_ljud_ar/innehall/ljudvagen/fordjupning.js', text: 'Kap 2 I B Ljudvågen', avsnitt: [] },
  { fil: 'ljud_och_ljus/vad_ljud_ar/innehall/ljudets-hastighet/fordjupning.js', text: 'Kap 2 I C Ljudets hastighet', avsnitt: [] },
  { fil: 'ljud_och_ljus/vad_ljud_ar/innehall/orat-och-horseln/fordjupning.js', text: 'Kap 2 I D Örat och hörseln', avsnitt: [] }
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
// (arbetsorder 33) En länk till en annan sida: texten är "Textens titel: N. Avsnittets titel" ur målsidans delkapitel.js och
// boken på nivån, och adressen går från källfilens avsnittssida till målsidan (?niva=…#text/avsnitt). Finns texten eller
// avsnittet inte är det ett fel här, så att en länk aldrig kan peka fel.
function sidlankar(rad) {
  const S = rad.sida, fran = rad.fil.split('/').slice(0, -3).join('/');
  let dk; const B = global.Bok; global.Bok = { delkapitel: d => { dk = d; } };
  try { eval(fs.readFileSync(path.join(ROT, S.mapp, 'delkapitel.js'), 'utf8')); } finally { global.Bok = B; }
  return S.lankar.map(([t, a]) => {
    const tx = dk.texter.find(x => x.id === t); if (!tx) throw new Error(`${rad.text}: texten ”${t}” finns inte på ${S.mapp}`);
    let n = 0; const av = lasBok(`${S.mapp}/innehall/${t}/${S.niva}.js`).avsnitt.map(x => ({ id: x.id, nr: x.numrerad !== false ? ++n : null, titel: x.titel })).find(x => x.id === a);
    if (!av || !av.nr) throw new Error(`${rad.text}: avsnittet ”${a}” finns inte (numrerat) i ${tx.titel}, ${S.niva}`);
    return { text: `${tx.titel}: ${av.nr}. ${av.titel}`, href: `${path.posix.relative(fran, S.mapp)}/index.html?niva=${S.niva}#${t}/${a}` };
  });
}
// Blocket för en fil i tabellen (fil: sökväg från repots rot, med / )
function block(fil) {
  const rad = TABELL.find(r => r.fil === fil.split(path.sep).join('/'));
  if (!rad) return null;
  if (rad.sida) return { typ: 'vidare', inledning: rad.sida.inledning, lankar: sidlankar(rad) };
  if (!rad.avsnitt.length) return false;      // ingen ruta, med avsikt (V B)
  const namn = avsnittsnamn();
  return { typ: 'vidare', lankar: rad.avsnitt.map(id => {
    if (!namn[id]) throw new Error(`${rad.text}: avsnittet ”${id}” finns inte i Nästa steg-textboken`);
    return { text: namn[id], bok: TEXTBOK, ankare: id };
  }) };
}
const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const blockRad = b => `        { typ: 'vidare', ${b.inledning ? `inledning: ${q(b.inledning)}, ` : ''}lankar: [\n` + b.lankar.map(l => l.href ? `          { text: ${q(l.text)}, href: ${q(l.href)} }`
  : `          { text: ${q(l.text)}, bok: ${q(l.bok)}, ankare: ${q(l.ankare)} }`).join(',\n') + '\n        ] }';
module.exports = { TABELL, TEXTBOK, block, blockRad };

if (require.main === module) {
  for (const rad of TABELL.filter(r => r.avsnitt.length || r.sida)) {
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
