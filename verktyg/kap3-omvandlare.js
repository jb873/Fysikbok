// node verktyg/kap3-omvandlare.js [utmapp]
// Arbetsorder 12 (2026-11-07): Kraft och rörelse, avsnitt IV Fall, kast och balans, text A Resulterande kraft –
// kallor/kap3/IV-A-Resulterande-kraft-alla-nivaer-v4.md → innehall/resulterande-kraft/{standard,enkel,fordjupning}.js,
// ordagrant i strömformatet. Utan utmapp skrivs filerna på sin plats i repot (och skriver över dem); med en tom utmapp
// hamnar de där, så att de kan jämföras först.
//
// Källans format (som III:s texter, ordern):
//   # 📘 STANDARD / # 📗 ENKEL / # 📕 FÖRDJUPNING   delar filen i tre böcker; övriga #-rader är kommentarer
//   ## Titel (onumrerad) / ## Titel (numrerad, id: x)   avsnitt (Inledning → inledning, Sammanfattning → sammanfattning)
//   ### …                       rubrik;  "Det här lär du dig:"  liten rubrik utan kolon
//   *ord|grundform*             begrepp (står kvar i texten)
//   [FORMEL: uttryck – förklaring]   formel (förklaringen som text, order 11)
//   - x  punkter;  1. x  numrerad lista;  [BILD …] kommentar på sin plats (figurerna: steg 2)
//   rader i följd utan tom rad: rader;  en ensam rad: ett stycke;  ==== och FIGURER-delen sist läses inte
// Tilläggen enligt III:s norm (ordern): rutan "Så bläddrar du" sist i Inledningen, och länkblocket sist i det sista
// numrerade avsnittet (Öva, Självskattning) och i Sammanfattningen (Öva, Självskattning, Elevboken).
//
// IV B Fritt fall (2026-11-11, Joachims uppdrag): node verktyg/kap3-omvandlare.js --text b [utmapp]. Källan
// kallor/kap3/IV-B-Fritt-fall-alla-nivaer-v2.md har två märkningar till (bara i B): [EXEMPEL: rubrik] med raderna under
// (till nästa tomma rad) blir en exempelruta ("Exempel: rubrik"), och [RUTA: rubrik] med punkterna under blir en ruta.
// Figurerna står i kap3-figurer-b.js. Utan --text skrivs A som förut, tecken för tecken.
'use strict';
const fs = require('fs'), path = require('path');
const ROT = path.join(__dirname, '..');
const TEXT = (process.argv.find(a => a.startsWith('--text=')) || '').slice(7) ||
  (process.argv.includes('--text') ? process.argv[process.argv.indexOf('--text') + 1] : 'a');
const TEXTER = {
  a: { kalla: 'IV-A-Resulterande-kraft-alla-nivaer-v4.md', mapp: 'resulterande-kraft', figurer: './kap3-figurer.js' },
  b: { kalla: 'IV-B-Fritt-fall-alla-nivaer-v2.md', mapp: 'fritt-fall', figurer: './kap3-figurer-b.js' },
  // C Kaströrelse (arbetsorder 16, 2026-11-11): node verktyg/kap3-omvandlare.js --text c
  c: { kalla: 'IV-C-Kastrorelse-alla-nivaer-v1.md', mapp: 'kastrorelse', figurer: './kap3-figurer-c.js',
       titel: 'C: Kaströrelse', order: 'Arbetsorder 16 (2026-11-11)' }
};
if (!TEXTER[TEXT]) { console.error('okänd text: ' + TEXT + ' (a, b eller c)'); process.exit(1); }
const KALLA = path.join(ROT, 'kallor', 'kap3', TEXTER[TEXT].kalla);
const UT = process.argv.slice(2).find((a, i, v) => !a.startsWith('--') && v[i - 1] !== '--text');
const MAPP = 'kraft_och_rorelse/fall_kast_och_balans/innehall/' + TEXTER[TEXT].mapp;
const NIVAER = [['STANDARD', 'standard', '📘'], ['ENKEL', 'enkel', '📗'], ['FÖRDJUPNING', 'fordjupning', '📕']];
const RUTA = { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: ['Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
  'Klicka i innehållet för att gå till en sida.', 'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'] };
const fel = [];
const VIDARE = require('./vidare-rutor.js');      // rutan "Vill du gå vidare?" sist i Fördjupningen (arbetsorder 13)

const r = fs.readFileSync(KALLA, 'utf8').replace(/\r/g, '').split('\n');
// de tre delarna (FIGURER-delen sist hör inte till någon bok)
const delar = {};
let cur = null;
for (const l of r) {
  const m = /^# (📘|📗|📕) (STANDARD|ENKEL|FÖRDJUPNING)/.exec(l);
  if (m) { cur = NIVAER.find(n => n[0] === m[2])[1]; delar[cur] = []; continue; }
  if (/^# FIGURER/.test(l)) { cur = null; continue; }
  if (cur) delar[cur].push(l);
}

function las(rad, niva) {
  const avs = [];
  let a = null, stycke = [];
  const slut = () => { if (!stycke.length) return; a.block.push(stycke.length === 1 ? { typ: 'text', text: stycke[0] } : { typ: 'rader', rader: stycke }); stycke = []; };
  for (let i = 0; i < rad.length; i++) {
    const l = rad[i]; let m;
    if (!l.trim() || /^={3,}/.test(l) || /^# /.test(l)) { slut(); continue; }
    if ((m = /^## (.+?) \((numrerad|onumrerad)(?:, id: ([a-z0-9-]+))?\)$/.exec(l))) {
      slut();
      a = { id: m[3] || (m[1] === 'Inledning' ? 'inledning' : m[1] === 'Sammanfattning' ? 'sammanfattning' : null), titel: m[1], numrerad: m[2] === 'numrerad', block: [] };
      if (!a.id) fel.push(`${niva}: avsnittet ”${m[1]}” saknar id`);
      avs.push(a); continue;
    }
    if (!a) { fel.push(`${niva}: före första avsnittet: ${l}`); continue; }
    if (l.startsWith('### ')) { slut(); a.block.push({ typ: 'rubrik', text: l.slice(4) }); continue; }
    if (l === 'Det här lär du dig:') { slut(); a.block.push({ typ: 'underrubrik', text: 'Det här lär du dig' }); continue; }
    if ((m = /^\[FORMEL: (.+?) – (.+)\]$/.exec(l))) { slut(); a.block.push({ typ: 'formel', uttryck: m[1], forklaring: m[2] }); continue; }
    if (/^\[BILD/.test(l)) { slut(); a.block.push({ kommentar: l }); continue; }
    // (B) [EXEMPEL: rubrik] + raderna under, [RUTA: rubrik] + punkterna under
    if ((m = /^\[EXEMPEL: (.+)\]$/.exec(l))) { slut(); const rr = [];
      while (i + 1 < rad.length && rad[i + 1].trim()) rr.push(rad[++i]);
      if (!rr.length) fel.push(`${niva}: exemplet ”${m[1]}” har inga rader`);
      a.block.push({ typ: 'exempel', rubrik: 'Exempel: ' + m[1], rader: rr }); continue; }
    if ((m = /^\[RUTA: (.+)\]$/.exec(l))) { slut(); const ps = [];
      while (i + 1 < rad.length && rad[i + 1].startsWith('- ')) ps.push(rad[++i].slice(2));
      if (!ps.length) fel.push(`${niva}: rutan ”${m[1]}” har inga punkter`);
      a.block.push({ typ: 'ruta', rubrik: m[1], punkter: ps }); continue; }
    if (/^\[/.test(l) || /^#/.test(l)) fel.push(`${niva}: okänd märkning: ${l}`);
    if (l.startsWith('- ')) { slut(); const ps = [l.slice(2)]; while (i + 1 < rad.length && rad[i + 1].startsWith('- ')) ps.push(rad[++i].slice(2));
      a.block.push({ typ: 'punkter', punkter: ps }); continue; }
    if (/^\d+\. /.test(l)) { slut(); const ps = [l]; while (i + 1 < rad.length && /^\d+\. /.test(rad[i + 1])) ps.push(rad[++i]);
      ps.forEach((p, k) => { if (!p.startsWith((k + 1) + '. ')) fel.push(`${niva}: den numrerade listan hoppar: ${p}`); });
      a.block.push({ typ: 'numrerad', punkter: ps.map(p => p.replace(/^\d+\. /, '')) }); continue; }
    stycke.push(l);
  }
  slut();
  // tilläggen (III:s norm)
  const inl = avs.find(x => x.id === 'inledning'), sam = avs.find(x => x.id === 'sammanfattning'), numr = avs.filter(x => x.numrerad);
  if (!inl || !sam || !numr.length) fel.push(`${niva}: Inledning, numrerade avsnitt och Sammanfattning behövs`);
  else {
    inl.block.push(Object.assign({}, RUTA));
    numr[numr.length - 1].block.push({ typ: 'lank', till: ['ova', 'sjalvskattning'] });
    sam.block.push({ typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] });
    // Fördjupning (arbetsorder 13, del 2): rutan "Vill du gå vidare?" sist i Sammanfattningen – länkarna till Nästa steg
    // ur kopplingen i verktyg/vidare-rutor.js
    if (niva === 'fordjupning') sam.block.push(VIDARE.block(MAPP + '/fordjupning.js'));
  }
  return avs;
}
const bocker = Object.fromEntries(NIVAER.map(([, n]) => [n, las(delar[n] || [], n)]));

// Steg 2 (arbetsorder 12): figurerna efter sina bildmarkeringar – fylls i när figurtyperna finns
const FIGURER = require(TEXTER[TEXT].figurer);
if (!process.argv.includes('--utan-figurer')) for (const [n, avs] of Object.entries(bocker)) for (const F of FIGURER) {
  for (const a of avs) a.block = a.block.flatMap(b => b.kommentar && b.kommentar.startsWith(F.borjar) ? [b, ...F.figurer] : [b]);
}
if (fel.length) { console.error('FEL:\n  ' + fel.join('\n  ')); process.exit(1); }

const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const js = v => Array.isArray(v) ? '[' + v.map(js).join(', ') + ']'
  : v && typeof v === 'object' ? '{ ' + Object.entries(v).map(([k, x]) => `${k}: ${js(x)}`).join(', ') + ' }'
  : typeof v === 'string' ? q(v) : String(v);
function blockText(b) {
  if (b.kommentar) return `        // ${b.kommentar}`;
  if (['punkter', 'numrerad'].includes(b.typ)) return `        { typ: '${b.typ}', punkter: [\n` + b.punkter.map(x => '          ' + q(x)).join(',\n') + '\n        ] }';
  if (b.typ === 'ruta') return `        { typ: 'ruta', rubrik: ${q(b.rubrik)}, punkter: [\n` + b.punkter.map(x => '          ' + q(x)).join(',\n') + '\n        ] }';
  if (b.typ === 'rader') return `        { typ: 'rader', rader: [\n` + b.rader.map(x => '          ' + q(x)).join(',\n') + '\n        ] }';
  if (b.typ === 'exempel') return `        { typ: 'exempel', rubrik: ${q(b.rubrik)}, rader: [\n` + b.rader.map(x => '          ' + q(x)).join(',\n') + '\n        ] }';
  if (b.typ === 'vidare') return VIDARE.blockRad(b);
  return '        ' + js(b);
}
for (const [kod, n, ikon] of NIVAER) {
  const avs = bocker[n], ut = [];
  if (TEXT === 'a') ut.push(`/* Avsnittssida IV. Fall, kast och balans, text A: Resulterande kraft – nivån ${n} (${ikon}). Arbetsorder 12`,
    ` * (2026-11-07): kallor/kap3/IV-A-Resulterande-kraft-alla-nivaer-v4.md (# ${ikon} ${kod}), införd ordagrant i`,
    ' * strömformatet av verktyg/kap3-omvandlare.js: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du',
    ' * dig:" = liten rubrik utan kolon. Tilläggen enligt III:s norm: rutan "Så bläddrar du" sist i Inledningen och',
    ' * länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen. [BILD …] står som kommentar, med figuren efter.', ' */');
  else if (TEXTER[TEXT].order) ut.push(`/* Avsnittssida IV. Fall, kast och balans, text ${TEXTER[TEXT].titel} – nivån ${n} (${ikon}).`,
    ` * ${TEXTER[TEXT].order}: kallor/kap3/${TEXTER[TEXT].kalla} (# ${ikon} ${kod}), införd ordagrant i`,
    ` * strömformatet av verktyg/kap3-omvandlare.js --text ${TEXT}: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,`,
    ' * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i',
    ' * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill',
    ` * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (${TEXTER[TEXT].figurer.slice(2)}).`, ' */');
  else ut.push(`/* Avsnittssida IV. Fall, kast och balans, text B: Fritt fall – nivån ${n} (${ikon}). Joachims uppdrag`,
    ` * 2026-11-11: kallor/kap3/IV-B-Fritt-fall-alla-nivaer-v2.md (# ${ikon} ${kod}), införd ordagrant i strömformatet av`,
    ' * verktyg/kap3-omvandlare.js --text b: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du dig:" =',
    ' * liten rubrik utan kolon, [EXEMPEL: …] = exempelruta, [RUTA: …] = ruta. Tilläggen enligt III:s norm: rutan "Så',
    ' * bläddrar du" sist i Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i',
    ' * Fördjupningen rutan "Vill du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-b.js).', ' */');
  ut.push(`Bok.niva('${n}', {`, '  avsnitt: [');
  avs.forEach((a, ai) => {
    ut.push('    {', `      id: '${a.id}', titel: ${q(a.titel)}${a.numrerad ? '' : ', numrerad: false'},`, '      block: [');
    const bl = a.block.map(blockText), verk = a.block.map(b => !b.kommentar), sista = verk.lastIndexOf(true);
    bl.forEach((x, i) => ut.push(x + (verk[i] && i !== sista ? ',' : '')));
    ut.push('      ]', '    }' + (ai < avs.length - 1 ? ',' : ''));
  });
  ut.push('  ]', '});', '');
  const fil = path.join(UT || ROT, UT ? n + '.js' : path.join(MAPP, n + '.js'));
  fs.mkdirSync(path.dirname(fil), { recursive: true });
  fs.writeFileSync(fil, ut.join('\n'));
  const alla = avs.flatMap(a => a.block);
  console.log(`${n}: ${avs.map(a => a.id).join(' · ')} – ${alla.filter(b => b.kommentar).length} bildmarkeringar, ${alla.filter(b => b.typ === 'figur').length} figurer, ` +
    `${alla.filter(b => b.typ === 'formel').length} formler, ${alla.filter(b => b.typ === 'numrerad').length} numrerade listor → ${path.relative(ROT, fil)}`);
}
// Begreppen som är markerade (Standard: för Joachims strykning)
for (const [, n] of NIVAER) {
  const ord = [];
  bocker[n].flatMap(a => a.block).forEach(b => [].concat(b.text || [], b.punkter || [], b.rader || []).forEach(t => {
    for (const m of String(t).matchAll(/\*([^*|]+)(?:\|([^*]+))?\*/g)) ord.push(m[2] && m[2] !== m[1] ? `${m[1]} (${m[2]})` : m[1]); }));
  console.log(`begrepp ${n}: ${ord.join(', ')}`);
}
