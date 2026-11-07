// node verktyg/nasta-steg-omvandlare.js [utmapp]
// Arbetsorder 11 (2026-11-07): Nästa steg · Kraft och rörelse (textbok och övningsbok) och Matematiken i fysiken ur
// kallor/nasta-steg/ → böckernas filer i strömformatet, ordagrant. Utan utmapp skrivs filerna på sina platser i repot
// (och skriver över dem); med en tom utmapp hamnar de där, så att de kan jämföras först.
//
// Källornas format (ordern):
//   # …                       före första ## = kommentarer till Code (visas inte)
//   ## Titel (onumrerad) / ## N. Titel (numrerad, id: x)   avsnitt (numret räknas av motorn och prövas här)
//   ### …                     rubrik
//   *ord*                     begrepp (står kvar i texten)
//   [FORMEL: uttryck – förklaring]          formel, förklaringen som text
//   [EXEMPEL: rubrik] … [/EXEMPEL]           exempel: raderna, stycken åtskilda av tomma rader
//   [PROVA] … [/PROVA]                       Prova själv: raderna
//   [MATTE: A · B]            "Matematik du behöver:" – länkar till Matematiken i fysiken, efter avsnittsrubriken
//   [ANVÄNDS I: …]            "Används i Nästa steg:" – länkar till textboken, efter avsnittsnumret; övrigt som text
//   [BILD: …]                 kommentar på sin plats (figurerna: steg 3)
//   - x                       punkter;  1. x  numrerad lista (stegplan)
//   rader i följd utan tom rad emellan: rader (mellanled); en ensam rad: ett stycke
// Tillägg som inte står i källan (ordern): länken till övningsboken sist i textbokens "Så här använder du boken".
'use strict';
const fs = require('fs'), path = require('path');
const ROT = path.join(__dirname, '..'), KALLOR = path.join(ROT, 'kallor', 'nasta-steg');
const UT = process.argv.slice(2).find(a => !a.startsWith('--'));
// Böckernas adressnamn på avsnittssidorna (delkapitel.js: nastaSteg, ovningsbocker, stodbocker)
const TEXTBOK = 'nasta-kraft-och-rorelse', OVNINGSBOK = 'ovning-kraft-och-rorelse', MATEMATIK = 'stod-matematiken';
const BOCKER = [
  { kalla: 'Nasta-steg-Kraft-och-rorelse-textbok-v3.md', niva: 'nasta-steg', bok: TEXTBOK,
    fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/nasta-steg/textbok.js', titel: 'Nästa steg · Kraft och rörelse – textbok' },
  { kalla: 'Nasta-steg-Kraft-och-rorelse-ovningsbok-v2.md', niva: 'ovningsbok', bok: OVNINGSBOK,
    fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/nasta-steg/ovningsbok.js', titel: 'Nästa steg · Kraft och rörelse – övningsbok' },
  { kalla: 'Matematiken-i-fysiken-v2.md', niva: 'stodbok', bok: MATEMATIK,
    fil: 'nasta_steg/matematiken_i_fysiken/innehall/matematiken.js', titel: 'Matematiken i fysiken' }
];
const slug = s => s.toLowerCase().replace(/[åä]/g, 'a').replace(/ö/g, 'o').replace(/é/g, 'e').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const rader = f => fs.readFileSync(path.join(KALLOR, f), 'utf8').replace(/\r/g, '').split('\n');

// Källan → avsnitt med block (ännu utan länkarnas mål)
function las(B) {
  const avs = [], fel = [];
  let a = null, i = 0, numr = 0;
  const r = rader(B.kalla);
  // kommentarerna före första ##
  while (i < r.length && !/^## /.test(r[i])) { if (r[i].trim() && !/^# /.test(r[i])) fel.push('text före första ##: ' + r[i]); i++; }
  let stycke = [];
  const slutStycke = () => { if (!stycke.length) return; a.block.push(stycke.length === 1 ? { typ: 'text', text: stycke[0] } : { typ: 'rader', rader: stycke }); stycke = []; };
  for (; i < r.length; i++) {
    const l = r[i];
    let m;
    if (!l.trim()) { slutStycke(); continue; }
    if ((m = /^## (?:(\d+)\. )?(.+?) \((numrerad|onumrerad)(?:, id: ([a-z0-9-]+))?\)$/.exec(l))) {
      slutStycke();
      const numrerad = m[3] === 'numrerad';
      if (numrerad && +m[1] !== ++numr) fel.push(`avsnittet ”${m[2]}” har nummer ${m[1]}, motorn räknar ${numr}`);
      if (!numrerad && m[1]) fel.push(`onumrerat avsnitt med nummer: ${l}`);
      a = { id: m[4] || slug(m[2]), titel: m[2], numrerad, nr: numrerad ? +m[1] : null, block: [] };
      avs.push(a); continue;
    }
    if (!a) { fel.push('före första avsnittet: ' + l); continue; }
    if (/^### /.test(l)) { slutStycke(); a.block.push({ typ: 'rubrik', text: l.slice(4) }); continue; }
    if ((m = /^\[FORMEL: (.+?) – (.+)\]$/.exec(l))) { slutStycke(); a.block.push({ typ: 'formel', uttryck: m[1], forklaring: m[2] }); continue; }
    if ((m = /^\[MATTE: (.+)\]$/.exec(l))) { slutStycke(); a.block.push({ typ: 'bokref', etikett: 'Matematik du behöver:', kalla: 'MATTE', poster: m[1].split(' · ') }); continue; }
    if ((m = /^\[ANVÄNDS I: (.+)\]$/.exec(l))) { slutStycke(); a.block.push({ typ: 'bokref', etikett: 'Används i Nästa steg:', kalla: 'ANVÄNDS I', poster: m[1].split(' · ') }); continue; }
    if (/^\[BILD/.test(l)) { slutStycke(); a.block.push({ kommentar: l }); continue; }
    if ((m = /^\[EXEMPEL: (.+)\]$/.exec(l))) {
      slutStycke();
      const st = [[]];
      for (i++; i < r.length && r[i] !== '[/EXEMPEL]'; i++) { if (!r[i].trim()) { if (st[st.length - 1].length) st.push([]); } else st[st.length - 1].push(r[i]); }
      if (i >= r.length) fel.push('[EXEMPEL] utan [/EXEMPEL]: ' + m[1]);
      a.block.push({ typ: 'exempel', rubrik: m[1], stycken: st.filter(x => x.length) }); continue;
    }
    if (l === '[PROVA]') {
      slutStycke();
      const ps = [];
      for (i++; i < r.length && r[i] !== '[/PROVA]'; i++) if (r[i].trim()) ps.push(r[i]);
      if (i >= r.length) fel.push('[PROVA] utan [/PROVA]');
      a.block.push({ typ: 'prova', rader: ps }); continue;
    }
    if (/^\[/.test(l)) fel.push('okänd märkning: ' + l);
    if (/^#/.test(l)) fel.push('okänd rubriknivå: ' + l);
    if (/^- /.test(l)) {
      slutStycke();
      const ps = [l.slice(2)];
      while (i + 1 < r.length && /^- /.test(r[i + 1])) ps.push(r[++i].slice(2));
      // En lista delas aldrig av motorn: en lista med fler än 6 punkter blir flera listor i följd, med högst 4 punkter
      // i varje och jämnt fördelat (som i kapitel 1). Textboken: Sammanfattningens 11 punkter var 300–480 px för höga.
      const delar = ps.length > 6 ? Math.ceil(ps.length / 4) : 1, per = Math.ceil(ps.length / delar);
      for (let k = 0; k < ps.length; k += per) a.block.push({ typ: 'punkter', punkter: ps.slice(k, k + per) });
      continue;
    }
    if (/^\d+\. /.test(l)) {
      slutStycke();
      const ps = [l];
      while (i + 1 < r.length && /^\d+\. /.test(r[i + 1])) ps.push(r[++i]);
      ps.forEach((p, k) => { if (!p.startsWith((k + 1) + '. ')) fel.push('den numrerade listan hoppar: ' + p); });
      a.block.push({ typ: 'numrerad', punkter: ps.map(p => p.replace(/^\d+\. /, '')) }); continue;
    }
    stycke.push(l);
  }
  slutStycke();
  return { avs, fel };
}

const lasta = Object.fromEntries(BOCKER.map(B => [B.bok, las(B)]));
const fel = BOCKER.flatMap(B => lasta[B.bok].fel.map(f => B.kalla + ': ' + f));
// Länkarna: MATTE efter avsnittsrubriken i Matematiken i fysiken, ANVÄNDS I efter avsnittsnumret i textboken
const omatchade = [];
const matte = lasta[MATEMATIK].avs, text = lasta[TEXTBOK].avs;
for (const B of BOCKER) for (const a of lasta[B.bok].avs) a.block = a.block.map(b => {
  if (b.typ !== 'bokref') return b;
  const lankar = b.poster.map(p => {
    if (b.kalla === 'MATTE') {
      const m = matte.find(x => x.titel === p);
      if (m) return { text: p, bok: MATEMATIK, ankare: m.id };
    } else {
      const n = /^(\d+)\. (.+)$/.exec(p), t = n && text.find(x => x.nr === +n[1]);
      if (t && t.titel === n[2]) return { text: p, bok: TEXTBOK, ankare: t.id };
      if (t) fel.push(`${B.kalla}: [ANVÄNDS I] ”${p}” – avsnitt ${n[1]} i textboken heter ”${t.titel}”`);
    }
    omatchade.push(`${B.kalla}, ”${a.titel}”: [${b.kalla}] ”${p}”`);
    return { text: p };
  });
  return { typ: 'bokref', etikett: b.etikett, lankar };
});
// Tillägget: länken till övningsboken sist i textbokens instruktionssida (det första avsnittet)
text[0].block.push({ typ: 'boklank', bok: OVNINGSBOK });

// Steg 3 (arbetsorder 11): figurerna efter sina bildmarkeringar (kommentaren står kvar). Värdena är bildmarkeringarnas.
// Textbokens klossen i vatten står bara som kommentar: kraftpilar ritar krafterna från föremålets mitt och kan inte rita
// vattnet, tryckpilarna mot sidorna eller lyftkraften med sitt namn (rapporten).
const tid = (max, tal) => ({ storhet: 'tid', enhet: 's', max, steg: 1, tal });
const FIGURER = [
  { bok: TEXTBOK, borjar: '[BILD: tre läge–tid-diagram bredvid varandra', figur: { id: 'bild-lage-tid', typ: 'figur', namn: 'diagram_graf', diagram: [
    { rubrik: 'Stilla', x: tid(4), y: { storhet: 'läge', enhet: 'm', max: 8, steg: 2 }, grafer: [{ punkter: [[0, 4], [4, 4]] }] },
    { rubrik: ['Konstant', 'hastighet'], x: tid(4), y: { storhet: 'läge', enhet: 'm', max: 8, steg: 2 }, grafer: [{ punkter: [[0, 0], [4, 8]] }] },
    { rubrik: ['Ökande', 'fart'], x: tid(4), y: { storhet: 'läge', enhet: 'm', max: 8, steg: 2 }, grafer: [{ punkter: [[0, 0], [1, 0.5], [2, 2], [3, 4.5], [4, 8]], kurva: true }] }
  ] } },
  { bok: TEXTBOK, borjar: '[BILD: hastighet–tid-diagram för en cyklist', figur: { id: 'bild-cyklist', typ: 'figur', namn: 'diagram_graf', diagram: [
    { x: tid(10, 2), y: { storhet: 'hastighet', enhet: 'm/s', max: 8, steg: 1, tal: 2 }, grafer: [{ punkter: [[0, 0], [4, 6], [10, 6]] }],
      ytor: [{ punkter: [[0, 0], [4, 6], [4, 0]], ton: 1 }, { punkter: [[4, 0], [4, 6], [10, 6], [10, 0]], ton: 2 }] }
  ] } },
  { bok: MATEMATIK, borjar: '[BILD: Hastighet–tid-diagram på rutat papper', figur: { id: 'bild-diagram', typ: 'figur', namn: 'diagram_graf', diagram: [
    { x: tid(10, 2), y: { storhet: 'hastighet', enhet: 'm/s', max: 10, steg: 1, tal: 2 }, grafer: [{ punkter: [[0, 0], [4, 8], [10, 8]] }],
      ytor: [{ punkter: [[0, 0], [4, 8], [4, 0]], ton: 1 }, { punkter: [[4, 0], [4, 8], [10, 8], [10, 0]], ton: 2 }],
      delta: [{ fran: [0, 0], till: [4, 8], dx: 'Δt', dy: 'Δv' }] }
  ] } },
  { bok: MATEMATIK, borjar: '[BILD: Rutat papper med en pil 3 rutor', figur: { id: 'bild-pythagoras', typ: 'figur', namn: 'vektor_rutnat',
    pilar: [{ dx: 3, dy: 0, namn: '3' }, { dx: 0, dy: 4, namn: '4' }], resultant: { namn: 'hypotenusa' }, ratVinkel: true } },
  { bok: MATEMATIK, borjar: '[BILD: Rutat papper med skalan 1 ruta = 10 N', figur: { id: 'bild-vektorer', typ: 'figur', namn: 'vektor_rutnat',
    pilar: [{ dx: 4, dy: 0, namn: '40 N' }, { dx: 0, dy: 3, namn: '30 N' }], resultant: { namn: '50 N' }, skala: '1 ruta = 10 N' } }
];
const FIGURER_PA = !process.argv.includes('--utan-figurer');
if (FIGURER_PA) for (const F of FIGURER) {
  let gjort = 0;
  for (const a of lasta[F.bok].avs) a.block = a.block.flatMap(b => b.kommentar && b.kommentar.startsWith(F.borjar) ? (gjort++, [b, F.figur]) : [b]);
  if (gjort !== 1) fel.push(`figuren ${F.figur.id}: ${gjort} bildmarkeringar börjar med ”${F.borjar}”`);
}

if (fel.length) { console.error('FEL:\n  ' + fel.join('\n  ')); process.exit(1); }

// Skrivaren: block i samma stil som de andra böckerna
const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const js = v => Array.isArray(v) ? '[' + v.map(js).join(', ') + ']'
  : v && typeof v === 'object' ? '{ ' + Object.entries(v).map(([k, x]) => `${k}: ${js(x)}`).join(', ') + ' }'
  : typeof v === 'string' ? q(v) : String(v);
function blockText(b) {
  if (b.kommentar) return `        // ${b.kommentar}`;
  if (b.typ === 'exempel') return `        { typ: 'exempel', rubrik: ${q(b.rubrik)}, stycken: [\n` +
    b.stycken.map(st => '          [' + st.map(q).join(',\n           ') + ']').join(',\n') + '\n        ] }';
  if (['prova', 'rader'].includes(b.typ)) return `        { typ: '${b.typ}', rader: [\n` + b.rader.map(x => '          ' + q(x)).join(',\n') + '\n        ] }';
  if (['punkter', 'numrerad'].includes(b.typ)) return `        { typ: '${b.typ}', punkter: [\n` + b.punkter.map(x => '          ' + q(x)).join(',\n') + '\n        ] }';
  return '        ' + js(b);
}
function skriv(B) {
  const avs = lasta[B.bok].avs, ut = [];
  ut.push(`/* ${B.titel} (arbetsorder 11, 2026-11-07): kallor/nasta-steg/${B.kalla}, införd ordagrant i`,
    ' * strömformatet av verktyg/nasta-steg-omvandlare.js. ## = avsnitt, ### = rubrik, ett stycke = ett textblock, rader i',
    ' * följd = rader; [FORMEL], [EXEMPEL], [PROVA], [MATTE] och [ANVÄNDS I] = formel, exempel, prova och bokref (länkar',
    ' * till den andra boken); [BILD …] står som kommentar på sin plats.' +
    (B.bok === TEXTBOK ? ' Tillägg (ordern): länken till övningsboken sist i "Så här\n * använder du boken".' : ''), ' */');
  ut.push(`Bok.niva('${B.niva}', {`, '  avsnitt: [');
  avs.forEach((a, ai) => {
    ut.push('    {', `      id: '${a.id}', titel: ${q(a.titel)}${a.numrerad ? '' : ', numrerad: false'},`, '      block: [');
    const bl = a.block.map(blockText), verkliga = a.block.map(b => !b.kommentar), sista = verkliga.lastIndexOf(true);
    bl.forEach((x, i) => ut.push(x + (verkliga[i] && i !== sista ? ',' : '')));
    ut.push('      ]', '    }' + (ai < avs.length - 1 ? ',' : ''));
  });
  ut.push('  ]', '});', '');
  return ut.join('\n');
}
for (const B of BOCKER) {
  const fil = path.join(UT || ROT, UT ? path.basename(B.fil) : B.fil);
  fs.mkdirSync(path.dirname(fil), { recursive: true });
  fs.writeFileSync(fil, skriv(B));
  const avs = lasta[B.bok].avs, alla = avs.flatMap(a => a.block);
  const antal = t => alla.filter(b => b.typ === t).length;
  console.log(`${B.titel}: ${avs.length} avsnitt (${avs.filter(a => a.numrerad).length} numrerade), ${antal('formel')} formler, ` +
    `${antal('exempel')} exempel, ${antal('prova')} prova, ${alla.filter(b => b.kommentar).length} bildmarkeringar → ${path.relative(ROT, fil)}`);
}
console.log(omatchade.length ? '\nLänkar som inte kunde matchas (står som text):\n  ' + omatchade.join('\n  ') : '\nAlla länkar matchade.');
