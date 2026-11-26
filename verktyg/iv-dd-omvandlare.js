// node verktyg/iv-dd-omvandlare.js – djupdykningarna till avsnitt II, förut IV (arbetsorder 19, 2026-11-12), en bok var i
// kraft_och_rorelse/fall_kast_och_balans/innehall/djupdykningar/<id>.js, som I:s och kapitel 1:s.
// Källorna kallor/kap3/IV-DD-*-redigerad.md (oförändrade kopior) har bara två rubriknivåer:
//  # = bokens titel (= kortets titel i delkapitel.js) · styckena före första ## = Inledningen (onumrerad, utan rubrik,
//  som kapitel 1:s djupdykningar) · ## = ett avsnitt (numrerat) med samma text som påståenderubrik överst, så att
//  sidan får en rubrik (källan har ingen ###-nivå) · [BILD …] = en kommentar på sin plats (eleven ser den inte) ·
//  övriga rader = stycken. Ingen Sammanfattning och inget länkblock (README: Djupdykningar).
// Avsnittens id är valda här en gång för alla: de är nycklar för läsplatsen – byt dem aldrig.
'use strict';
const fs = require('fs'), path = require('path');
const ROT = path.join(__dirname, '..');
const KALLOR = path.join(ROT, 'kallor', 'kap3');
const UT = path.join(ROT, 'kraft_och_rorelse', 'fall_kast_och_balans', 'innehall', 'djupdykningar');
const DD = [
  { id: 'rymdhoppet', fil: 'IV-DD-1-Hoppet-fran-rymdens-kant-redigerad.md',
    avsnitt: ['forberedelser', 'tryckdrakten', 'ljudhastigheten', 'tatare-luft', 'snurrandet', 'hogre-hopp'] },
  { id: 'bollar', fil: 'IV-DD-2-Bollar-som-svanger-i-luften-redigerad.md',
    avsnitt: ['luften', 'skruv', 'topspin', 'golfbollen', 'fladdrande-boll', 'badmintonbollen'] },
  { id: 'berg-och-dalbanan', fil: 'IV-DD-3-Berg-och-dalbanan-redigerad.md',
    avsnitt: ['forsta-backen', 'botten', 'kronet', 'loopen', 'droppformade-loopar', 'matningar'] },
  { id: 'bilbaltet', fil: 'IV-DD-4-Bilbaltet-en-svensk-uppfinning-redigerad.md',
    avsnitt: ['forr', 'trepunktsbaltet', 'krockdockor', 'tillsammans', 'stadstrafik', 'hela-varlden'] }
];
const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
function avsnitt(D) {
  let titel = null; const avs = [{ id: 'inledning', titel: 'Inledning', numrerad: false, block: [] }];
  for (const l0 of fs.readFileSync(path.join(KALLOR, D.fil), 'utf8').replace(/\r/g, '').split('\n')) {
    const l = l0.trim(); if (!l) continue;
    if (/^# /.test(l)) { if (titel) throw new Error(D.fil + ': två titlar'); titel = l.slice(2); continue; }
    if (!titel) throw new Error(D.fil + ': text före titeln: ' + l);
    if (l.startsWith('## ')) { avs.push({ titel: l.slice(3), numrerad: true, block: [{ typ: 'rubrik', text: l.slice(3) }] }); continue; }
    const a = avs[avs.length - 1];
    if (/^\[BILD/.test(l)) a.block.push({ kommentar: l });
    else if (/^(#|- |\d+\. |[>|*])/.test(l)) throw new Error(D.fil + ': okänt format: ' + l);
    else a.block.push({ typ: 'text', text: l });
  }
  if (!avs[0].block.length) throw new Error(D.fil + ': ingen inledning');
  if (avs.length - 1 !== D.avsnitt.length) throw new Error(D.fil + ': ' + (avs.length - 1) + ' avsnitt i källan, ' + D.avsnitt.length + ' id');
  avs.slice(1).forEach((a, i) => { a.id = D.avsnitt[i]; });
  return { titel, avs };
}
fs.mkdirSync(UT, { recursive: true });
for (const D of DD) {
  const { titel, avs } = avsnitt(D);
  const ut = [`/* Avsnittssida II. Fall, kast och balans – djupdykningen "${titel}".`,
    ` * Arbetsorder 19 (2026-11-12): kallor/kap3/${D.fil}, infört ordagrant i strömformatet: styckena före första`,
    ' * ## = Inledningen (utan rubrik, som källan), ## = avsnitt med samma text som påståenderubrik, ett stycke = ett',
    ' * textblock. Ingen Sammanfattning och inget länkblock. [BILD …] står som kommentar på sin plats; eleven ser dem',
    ' * inte. Skriven av verktyg/iv-dd-omvandlare.js. */', "Bok.niva('djupdykning', {", '  avsnitt: ['];
  avs.forEach((a, ai) => {
    ut.push('    {', `      id: '${a.id}', titel: ${q(a.titel)}${a.numrerad ? '' : ', numrerad: false'},`, '      block: [');
    const sista = a.block.map((b, i) => b.kommentar ? -1 : i).filter(i => i >= 0).pop();
    a.block.forEach((b, i) => ut.push(b.kommentar ? `        // ${b.kommentar}` : `        { typ: '${b.typ}', text: ${q(b.text)} }${i !== sista ? ',' : ''}`));
    ut.push('      ]', '    }' + (ai < avs.length - 1 ? ',' : ''));
  });
  ut.push('  ]', '});', '');
  fs.writeFileSync(path.join(UT, D.id + '.js'), ut.join('\n'));
  const ord = avs.flatMap(a => a.block.filter(b => b.typ === 'text').map(b => b.text)).join(' ').split(/\s+/).filter(Boolean).length;
  console.log(`djupdykning ${D.id}: "${titel}", ${avs.length - 1} avsnitt + Inledningen, ${ord} ord i styckena, ` +
    `${avs.reduce((n, a) => n + a.block.filter(b => b.kommentar).length, 0)} bildmarkeringar`);
}
