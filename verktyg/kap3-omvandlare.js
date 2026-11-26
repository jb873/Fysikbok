// node verktyg/kap3-omvandlare.js [utmapp]
// Arbetsorder 12 (2026-11-07): Kraft och rörelse, avsnitt II (förut IV) Fall, kast och balans, text A Resulterande kraft –
// kallor/kap3/IV-A-Resulterande-kraft-alla-nivaer-v4.md → innehall/resulterande-kraft/{standard,enkel,fordjupning}.js,
// ordagrant i strömformatet. Utan utmapp skrivs filerna på sin plats i repot (och skriver över dem); med en tom utmapp
// hamnar de där, så att de kan jämföras först.
//
// Källans format (som I:s texter, Rörelse och kraft, ordern):
//   # 📘 STANDARD / # 📗 ENKEL / # 📕 FÖRDJUPNING   delar filen i tre böcker; övriga #-rader är kommentarer
//   ## Titel (onumrerad) / ## Titel (numrerad, id: x)   avsnitt (Inledning → inledning, Sammanfattning → sammanfattning)
//   ### …                       rubrik;  "Det här lär du dig:"  liten rubrik utan kolon
//   *ord|grundform*             begrepp (står kvar i texten)
//   [FORMEL: uttryck – förklaring]   formel (förklaringen som text, order 11)
//   - x  punkter;  1. x  numrerad lista;  [BILD …] kommentar på sin plats (figurerna: steg 2)
//   rader i följd utan tom rad: rader;  en ensam rad: ett stycke;  ==== och FIGURER-delen sist läses inte
// Tilläggen enligt I:s norm (ordern): rutan "Så bläddrar du" sist i Inledningen, och länkblocket sist i det sista
// numrerade avsnittet (Öva, Självskattning) och i Sammanfattningen (Öva, Självskattning, Elevboken).
//
// II B Fritt fall (2026-11-11, Joachims uppdrag): node verktyg/kap3-omvandlare.js --text b [utmapp]. Källan
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
       titel: 'C: Kaströrelse', order: 'Arbetsorder 16 (2026-11-11)' },
  // D Tyngdpunkt, balans och kroppen (arbetsorder 17, 2026-11-12): node verktyg/kap3-omvandlare.js --text d
  d: { kalla: 'IV-D-Tyngdpunkt-balans-och-kroppen-alla-nivaer-v1.md', mapp: 'tyngdpunkt-och-balans', figurer: './kap3-figurer-d.js',
       titel: 'D: Tyngdpunkt, balans och kroppen', order: 'Arbetsorder 17 (2026-11-12)' },
  // Avsnitt III (förut V) Tryck, arbete och maskiner, text A Tryck (arbetsorder 21, 2026-11-12; källan v3: arbetsorder 29): node verktyg/kap3-omvandlare.js --text va.
  // Källan märker exemplen [EXEMPEL: rubrik] … [/EXEMPEL], med tomma rader inne i rutan: de blir exempel i stycken, som i
  // Nästa steg (Givet, Sökt, Lösning och Svar i fetstil, brytbart mellan raderna).
  va: { kalla: 'V-A-Tryck-alla-nivaer-v5.md', mapp: 'tryck', figurer: './kap3-figurer-va.js', titel: 'A: Tryck',
        order: 'Arbetsorder 21 (2026-11-12; källan v5: arbetsorder 36, 2026-11-22)', sidmapp: 'kraft_och_rorelse/tryck_arbete_och_maskiner', sida: 'III. Tryck, arbete och maskiner' },
  // III B Energi och arbete (arbetsorder 28, 2026-11-19; källan v3: arbetsorder 29): node verktyg/kap3-omvandlare.js --text vb. Mappen behåller sitt
  // namn från arbetsorder 21 (arbete-och-effekt). Ingen ruta "Vill du gå vidare?" (raden i vidare-rutor.js saknar avsnitt).
  vb: { kalla: 'V-B-Energi-och-arbete-alla-nivaer-v3.md', mapp: 'arbete-och-effekt', figurer: './kap3-figurer-vb.js', titel: 'B: Energi och arbete',
        order: 'Arbetsorder 28 (2026-11-19)', sidmapp: 'kraft_och_rorelse/tryck_arbete_och_maskiner', sida: 'III. Tryck, arbete och maskiner' },
  // III C Mekanisk energi (arbetsorder 29, 2026-11-19): node verktyg/kap3-omvandlare.js --text vc. Mappen från arbetsorder 21.
  // Källan skriver Ep och Ek utan nedsänkning; de skrivs E_p och E_k, som motorn sätter nedsänkt (index, som i Nästa steg),
  // och ordagrant.js läser dem tillbaka som Ep och Ek.
  vc: { kalla: 'V-C-Mekanisk-energi-alla-nivaer-v2.md', mapp: 'mekanisk-energi', figurer: './kap3-figurer-vc.js', titel: 'C: Mekanisk energi',
        order: 'Arbetsorder 29 (2026-11-19)', sidmapp: 'kraft_och_rorelse/tryck_arbete_och_maskiner', sida: 'III. Tryck, arbete och maskiner', index: true },
  vd: { kalla: 'V-D-Maskiner-och-effekt-alla-nivaer-v3.md', mapp: 'havstangen-och-enkla-maskiner', figurer: './kap3-figurer-vd.js', titel: 'D: Maskiner och effekt',
        order: 'Arbetsorder 29 (2026-11-19)', sidmapp: 'kraft_och_rorelse/tryck_arbete_och_maskiner', sida: 'III. Tryck, arbete och maskiner' },
  // Avsnitt VI Repetition: ljud och ljus (arbetsorder 30, 2026-11-20): node verktyg/kap3-omvandlare.js --text via / --text vib.
  // "Det här repeterar du:" blir en liten rubrik utan kolon, som "Det här lär du dig:". Ett begrepp med stor bokstav utan
  // grundform (*Tinnitus*) får grundformen med liten bokstav (*Tinnitus|tinnitus*) – texten är densamma; grundform anger
  // de böjda (Hörselnerven → hörselnerv). ordagrant.js godtar just det tillägget för VI.
  via: { kalla: 'VI-A-Repetition-Ljud-alla-nivaer-v4.md', mapp: 'ljud', figurer: './kap3-figurer-via.js', titel: 'A: Ljud',
         order: 'Arbetsorder 30 (2026-11-20; källan v4: arbetsorder 32, 2026-11-21)', sidmapp: 'kraft_och_rorelse/ljud_och_ljus_repetition', sida: 'VI. Repetition: ljud och ljus',
         grundform: { 'Hörselnerven': 'hörselnerv' } },
  vib: { kalla: 'VI-B-Repetition-Ljus-alla-nivaer-v3.md', mapp: 'ljus', figurer: './kap3-figurer-vib.js', titel: 'B: Ljus',
         order: 'Arbetsorder 30 (2026-11-20)', sidmapp: 'kraft_och_rorelse/ljud_och_ljus_repetition', sida: 'VI. Repetition: ljud och ljus',
         grundform: {} },
  // Kapitel 2 Ljud och ljus, avsnitt I Vad ljud är (arbetsorder 33, 2026-11-21): node verktyg/kap3-omvandlare.js --text 2ia
  // (2ib, 2ic, 2id). Samma omvandlare som kapitel 3 (ordern: generell, ingen parallell variant): kap säger var källan
  // står (kallor/kap2/). Grundformen vid stor bokstav och "Det här lär du dig" som i VI.
  '2ia': { kap: 'kap2', kalla: 'Kap2-I-A-Ljud-ar-vibrationer-alla-nivaer-v5.md', mapp: 'ljud-ar-vibrationer', figurer: './kap2-figurer-ia.js',
           titel: 'A: Ljud är vibrationer', order: 'Arbetsorder 33 (2026-11-21)', sidmapp: 'ljud_och_ljus/vad_ljud_ar', sida: 'I. Vad ljud är', grundform: {} },
  '2ib': { kap: 'kap2', kalla: 'Kap2-I-B-Ljudvagen-alla-nivaer-v3.md', mapp: 'ljudvagen', figurer: './kap2-figurer-ib.js',
           titel: 'B: Ljudvågen', order: 'Arbetsorder 33 (2026-11-21)', sidmapp: 'ljud_och_ljus/vad_ljud_ar', sida: 'I. Vad ljud är', grundform: {} },
  '2ic': { kap: 'kap2', kalla: 'Kap2-I-C-Ljudets-hastighet-alla-nivaer-v4.md', mapp: 'ljudets-hastighet', figurer: './kap2-figurer-ic.js',
           titel: 'C: Ljudets hastighet', order: 'Arbetsorder 33 (2026-11-21)', sidmapp: 'ljud_och_ljus/vad_ljud_ar', sida: 'I. Vad ljud är', grundform: {} },
  '2id': { kap: 'kap2', kalla: 'Kap2-I-D-Orat-och-horseln-alla-nivaer-v2.md', mapp: 'orat-och-horseln', figurer: './kap2-figurer-id.js',
           titel: 'D: Örat och hörseln', order: 'Arbetsorder 33 (2026-11-21)', sidmapp: 'ljud_och_ljus/vad_ljud_ar', sida: 'I. Vad ljud är', grundform: {} },
  // Kapitel 2, avsnitt II Ljud omkring oss (arbetsorder 34, 2026-11-22): --text 2iia (2iib, 2iic, 2iid), som avsnitt I
  '2iia': { kap: 'kap2', kalla: 'Kap2-II-A-Toner-och-klang-alla-nivaer-v3.md', mapp: 'toner-och-klang', figurer: './kap2-figurer-iia.js',
            titel: 'A: Toner och klang', order: 'Arbetsorder 34 (2026-11-22)', sidmapp: 'ljud_och_ljus/ljud_omkring_oss', sida: 'II. Ljud omkring oss', grundform: {} },
  '2iib': { kap: 'kap2', kalla: 'Kap2-II-B-Resonans-och-instrument-alla-nivaer-v2.md', mapp: 'resonans-och-instrument', figurer: './kap2-figurer-iib.js',
            titel: 'B: Resonans och instrument', order: 'Arbetsorder 34 (2026-11-22)', sidmapp: 'ljud_och_ljus/ljud_omkring_oss', sida: 'II. Ljud omkring oss', grundform: {} },
  '2iic': { kap: 'kap2', kalla: 'Kap2-II-C-Eko-ultraljud-och-doppler-alla-nivaer-v2.md', mapp: 'eko-ultraljud-och-doppler', figurer: './kap2-figurer-iic.js',
            titel: 'C: Eko, ultraljud och dopplereffekten', order: 'Arbetsorder 34 (2026-11-22)', sidmapp: 'ljud_och_ljus/ljud_omkring_oss', sida: 'II. Ljud omkring oss', grundform: {} },
  '2iid': { kap: 'kap2', kalla: 'Kap2-II-D-Ljudniva-buller-och-halsa-alla-nivaer-v3.md', mapp: 'ljudniva-buller-och-halsa', figurer: './kap2-figurer-iid.js',
            titel: 'D: Ljudnivå, buller och hälsa', order: 'Arbetsorder 34 (2026-11-22)', sidmapp: 'ljud_och_ljus/ljud_omkring_oss', sida: 'II. Ljud omkring oss', grundform: {} },
  // Kapitel 2, avsnitt III Ljusets väg (arbetsorder 38, 2026-11-25): --text 2iiia (2iiib, 2iiic, 2iiid), som avsnitt I och II
  '2iiia': { kap: 'kap2', kalla: 'Kap2-III-A-Ljus-och-seende-alla-nivaer-v2.md', mapp: 'ljus-och-seende', figurer: './kap2-figurer-iiia.js',
            titel: 'A: Ljus och seende', order: 'Arbetsorder 38 (2026-11-25)', sidmapp: 'ljud_och_ljus/ljusets_vag', sida: 'III. Ljusets väg', grundform: {} },
  '2iiib': { kap: 'kap2', kalla: 'Kap2-III-B-Reflektion-och-speglar-alla-nivaer-v2.md', mapp: 'reflektion-och-speglar', figurer: './kap2-figurer-iiib.js',
            titel: 'B: Reflektion och speglar', order: 'Arbetsorder 38 (2026-11-25)', sidmapp: 'ljud_och_ljus/ljusets_vag', sida: 'III. Ljusets väg', grundform: {} },
  '2iiic': { kap: 'kap2', kalla: 'Kap2-III-C-Ljuset-bryts-alla-nivaer-v2.md', mapp: 'ljuset-bryts', figurer: './kap2-figurer-iiic.js',
            titel: 'C: Ljuset bryts', order: 'Arbetsorder 38 (2026-11-25)', sidmapp: 'ljud_och_ljus/ljusets_vag', sida: 'III. Ljusets väg', grundform: {} },
  '2iiid': { kap: 'kap2', kalla: 'Kap2-III-D-Linser-och-bilder-alla-nivaer-v2.md', mapp: 'linser-och-bilder', figurer: './kap2-figurer-iiid.js',
            titel: 'D: Linser och bilder', order: 'Arbetsorder 38 (2026-11-25)', sidmapp: 'ljud_och_ljus/ljusets_vag', sida: 'III. Ljusets väg', grundform: {} }
};
if (!TEXTER[TEXT]) { console.error('okänd text: ' + TEXT + ' (' + Object.keys(TEXTER).join(', ') + ')'); process.exit(1); }
const KAP = TEXTER[TEXT].kap || 'kap3';
const KALLA = path.join(ROT, 'kallor', KAP, TEXTER[TEXT].kalla);
const UT = process.argv.slice(2).find((a, i, v) => !a.startsWith('--') && v[i - 1] !== '--text');
const MAPP = (TEXTER[TEXT].sidmapp || 'kraft_och_rorelse/fall_kast_och_balans') + '/innehall/' + TEXTER[TEXT].mapp;
const SIDA = TEXTER[TEXT].sida || 'II. Fall, kast och balans';
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
    if (l === 'Det här repeterar du:' && TEXTER[TEXT].grundform) { slut(); a.block.push({ typ: 'underrubrik', text: 'Det här repeterar du' }); continue; }
    if ((m = /^\[FORMEL: (.+?) – (.+)\]$/.exec(l))) { slut(); a.block.push({ typ: 'formel', uttryck: m[1], forklaring: m[2] }); continue; }
    // (kapitel 2 III A, arbetsorder 38) en formel utan förklaring: bara uttrycket
    if ((m = /^\[FORMEL: ([^–]+)\]$/.exec(l))) { slut(); a.block.push({ typ: 'formel', uttryck: m[1] }); continue; }
    if (/^\[BILD/.test(l)) { slut(); a.block.push({ kommentar: l }); continue; }
    // (III A) [EXEMPEL: rubrik] … [/EXEMPEL]: stycken (tomma rader emellan), var och en med sina rader
    if ((m = /^\[EXEMPEL: (.+)\]$/.exec(l)) && rad.slice(i + 1).findIndex(x => x === '[/EXEMPEL]') >= 0 &&
        rad.slice(i + 1).findIndex(x => x === '[/EXEMPEL]') < (rad.slice(i + 1).findIndex(x => /^##? |^\[EXEMPEL/.test(x)) + 1 || Infinity)) {
      slut(); const st = [[]];
      while (rad[++i] !== '[/EXEMPEL]') { if (rad[i].trim()) st[st.length - 1].push(rad[i]); else if (st[st.length - 1].length) st.push([]); }
      if (!st[st.length - 1].length) st.pop();
      if (!st.length) fel.push(`${niva}: exemplet ”${m[1]}” har inga rader`);
      if (!/^Svar:/.test(st[st.length - 1][st[st.length - 1].length - 1] || '')) fel.push(`${niva}: exemplet ”${m[1]}” slutar inte med Svar:`);
      a.block.push({ typ: 'exempel', rubrik: m[1], stycken: st }); continue; }
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
  // tilläggen (I:s norm)
  const inl = avs.find(x => x.id === 'inledning'), sam = avs.find(x => x.id === 'sammanfattning'), numr = avs.filter(x => x.numrerad);
  if (!inl || !sam || !numr.length) fel.push(`${niva}: Inledning, numrerade avsnitt och Sammanfattning behövs`);
  else {
    inl.block.push(Object.assign({}, RUTA));
    numr[numr.length - 1].block.push({ typ: 'lank', till: ['ova', 'sjalvskattning'] });
    sam.block.push({ typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] });
    // Fördjupning (arbetsorder 13, del 2): rutan "Vill du gå vidare?" sist i Sammanfattningen – länkarna till Nästa steg
    // ur kopplingen i verktyg/vidare-rutor.js
    // (false = ingen ruta med avsikt, null = filen saknas i kopplingen: fel)
    if (niva === 'fordjupning') { const vb = VIDARE.block(MAPP + '/fordjupning.js');
      if (vb === null) fel.push(`${niva}: ${MAPP} saknas i verktyg/vidare-rutor.js`); else if (vb) sam.block.push(vb); }
  }
  return avs;
}
const bocker = Object.fromEntries(NIVAER.map(([, n]) => [n, las(delar[n] || [], n)]));
// (III C, arbetsorder 29) Ep och Ek med index: E_p och E_k i alla texter (motorn sätter dem nedsänkta)
if (TEXTER[TEXT].index) { const ix = s => typeof s === 'string' ? s.replace(/\bE([pk])\b/g, 'E_$1') : Array.isArray(s) ? s.map(ix) : s;
  for (const avs of Object.values(bocker)) for (const a of avs) for (const b of a.block) for (const k of ['text', 'uttryck', 'forklaring', 'rader', 'punkter', 'stycken']) if (b[k]) b[k] = ix(b[k]); }
// (VI, arbetsorder 30) begrepp med stor bokstav utan grundform: grundformen med liten bokstav (eller ur grundform-tabellen)
if (TEXTER[TEXT].grundform) { const G = TEXTER[TEXT].grundform;
  const gf = s => typeof s === 'string' ? s.replace(/\*([^*]+)\*/g, (m, o) => /^[A-ZÅÄÖ]/.test(o) && !o.includes('|') ? `*${o}|${G[o] || o[0].toLowerCase() + o.slice(1)}*` : m) : Array.isArray(s) ? s.map(gf) : s;
  for (const avs of Object.values(bocker)) for (const a of avs) for (const b of a.block) for (const k of ['text', 'rader', 'punkter', 'stycken']) if (b[k]) b[k] = gf(b[k]); }

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
  if (b.typ === 'exempel' && b.stycken) return `        { typ: 'exempel', rubrik: ${q(b.rubrik)}, stycken: [\n` +
    b.stycken.map(st => '          [' + st.map((x, k) => (k ? '           ' : '') + q(x)).join(',\n') + ']').join(',\n') + '\n        ] }';
  if (b.typ === 'exempel') return `        { typ: 'exempel', rubrik: ${q(b.rubrik)}, rader: [\n` + b.rader.map(x => '          ' + q(x)).join(',\n') + '\n        ] }';
  if (b.typ === 'vidare') return VIDARE.blockRad(b);
  return '        ' + js(b);
}
for (const [kod, n, ikon] of NIVAER) {
  const avs = bocker[n], ut = [];
  if (TEXT === 'a') ut.push(`/* Avsnittssida II. Fall, kast och balans, text A: Resulterande kraft – nivån ${n} (${ikon}). Arbetsorder 12`,
    ` * (2026-11-07): kallor/kap3/IV-A-Resulterande-kraft-alla-nivaer-v4.md (# ${ikon} ${kod}), införd ordagrant i`,
    ' * strömformatet av verktyg/kap3-omvandlare.js: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du',
    ' * dig:" = liten rubrik utan kolon. Tilläggen enligt I:s norm: rutan "Så bläddrar du" sist i Inledningen och',
    ' * länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen. [BILD …] står som kommentar, med figuren efter.', ' */');
  else if (TEXTER[TEXT].order) ut.push(`/* Avsnittssida ${SIDA}, text ${TEXTER[TEXT].titel} – nivån ${n} (${ikon}).`,
    ` * ${TEXTER[TEXT].order}: kallor/${KAP}/${TEXTER[TEXT].kalla} (# ${ikon} ${kod}), införd ordagrant i`,
    ` * strömformatet av verktyg/kap3-omvandlare.js --text ${TEXT}: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,`,
    ' * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i',
    ...(VIDARE.block(MAPP + '/fordjupning.js') ? [' * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill',
      ` * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (${TEXTER[TEXT].figurer.slice(2)}).`]
    : [' * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå',
      ` * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (${TEXTER[TEXT].figurer.slice(2)}).`]), ' */');
  else ut.push(`/* Avsnittssida II. Fall, kast och balans, text B: Fritt fall – nivån ${n} (${ikon}). Joachims uppdrag`,
    ` * 2026-11-11: kallor/kap3/IV-B-Fritt-fall-alla-nivaer-v2.md (# ${ikon} ${kod}), införd ordagrant i strömformatet av`,
    ' * verktyg/kap3-omvandlare.js --text b: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du dig:" =',
    ' * liten rubrik utan kolon, [EXEMPEL: …] = exempelruta, [RUTA: …] = ruta. Tilläggen enligt I:s norm: rutan "Så',
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
