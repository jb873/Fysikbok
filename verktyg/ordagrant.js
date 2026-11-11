// node verktyg/ordagrant.js [innehall-mapp]: innehållet mot Joachims källor i kallor/, ordagrant. Slutkoden är 1 om
// något inte är ordagrant. (Före arbetsorder 11 hette skriptet kap1-ordagrant.js.)
//  - kapitel 1, avsnitt I (kallor/kap1/): de tolv böckerna och de fyra djupdykningarna. Utan mapp prövas
//    materia_och_universum/solsystemet_och_jorden/innehall/.
//  - Nästa steg (kallor/nasta-steg/, arbetsorder 11): textboken, övningsboken och Matematiken i fysiken (se nedan).
//  - Kraft och rörelse IV, text A Resulterande kraft (kallor/kap3/, arbetsorder 12): tre nivåer (se nedan).
// Kapitel 1: varje nivåfil mot källan, i ordning – avsnitt (titel, numrerad), rubriker,
// stycken, punkter. Enkel/Fördjupning: tecken för tecken (med markeringarna). Standard: utan markeringarna, och
// markeringarna ska vara det enda som skiljer. Bildmarkeringarna ska finnas som kommentarer i samma ordning.
const fs = require('fs'), path = require('path');
const VIDARE = require('./vidare-rutor.js');       // rutan "Vill du gå vidare?" i Fördjupningen (arbetsorder 13, del 2)
const MAPP = process.argv[2] || path.join(__dirname, '..', 'materia_och_universum', 'solsystemet_och_jorden', 'innehall');
const DL = path.join(__dirname, '..', 'kallor', 'kap1') + path.sep;
const TEXTER = [['A', 'solsystemet', 'Kap1-Avsnitt1-A-Solsystemet-Enkel-Fordjupning.md'], ['B', 'himlakroppar', 'Kap1-Avsnitt1-B-Himlakroppar-Enkel-Fordjupning.md'],
  ['C', 'jordklotet', 'Kap1-Avsnitt1-C-Jordklotet-Enkel-Fordjupning.md'], ['D', 'dygn-manad-ar-arstider', 'Kap1-Avsnitt1-D-Dygn-manad-ar-Enkel-Fordjupning.md']];
const las = f => fs.readFileSync(f, 'utf8').replace(/\r/g, '').split('\n');
const avmarkera = s => s.replace(/\*([^*|]+)(?:\|[^*]+)?\*/g, '$1');
function kallsekvens(lines) {
  const ut = [], bilder = [];
  for (const l0 of lines) { const l = l0.trim();
    if (!l || /^={3,}/.test(l) || /^# /.test(l)) continue;
    let m;
    if ((m = /^## (.+?) \((numrerad|onumrerad)/.exec(l))) ut.push(`AVSNITT ${m[1]} ${m[2]}`);
    else if (l.startsWith('### ')) ut.push('RUBRIK ' + l.slice(4));
    else if (l === 'Det här lär du dig:') ut.push('UNDERRUBRIK Det här lär du dig');
    else if (l.startsWith('- ')) ut.push('PUNKT ' + l.slice(2));
    else if (l.startsWith('[BILD')) bilder.push(l);
    else ut.push('TEXT ' + l);
  }
  return { ut, bilder };
}
function filsekvens(fil) {
  let data; global.Bok = { niva: (n, d) => { data = d; } };
  const kod = fs.readFileSync(fil, 'utf8'); eval(kod);
  const ut = [];
  for (const a of data.avsnitt) { ut.push(`AVSNITT ${a.titel} ${a.numrerad === false ? 'onumrerad' : 'numrerad'}`);
    for (const b of a.block) {
      if (b.typ === 'rubrik') ut.push('RUBRIK ' + b.text); else if (b.typ === 'underrubrik') ut.push('UNDERRUBRIK ' + b.text);
      else if (b.typ === 'text') ut.push('TEXT ' + b.text); else if (b.typ === 'punkter') b.punkter.forEach(p => ut.push('PUNKT ' + p));
      else if (b.typ === 'ruta') ut.push('RUTA ' + b.rubrik + ': ' + b.punkter.join(' / '));
      else if (b.typ !== 'lank' && b.typ !== 'figur') ut.push('OKÄNT ' + b.typ); } }
  const bilder = [...kod.matchAll(/^\s*\/\/ (\[BILD.*)$/gm)].map(m => m[1]);
  return { ut, bilder, data };
}
let fel = 0;
// Enkels Inledningsrubrik per text (Standard har fått samma, Joachims beslut 2026-11-07)
const ENKEL_RUBRIK = {};
for (const [, id, fil] of [['A', 'solsystemet', 'Kap1-Avsnitt1-A-Solsystemet-Enkel-Fordjupning.md'], ['B', 'himlakroppar', 'Kap1-Avsnitt1-B-Himlakroppar-Enkel-Fordjupning.md'],
  ['C', 'jordklotet', 'Kap1-Avsnitt1-C-Jordklotet-Enkel-Fordjupning.md'], ['D', 'dygn-manad-ar-arstider', 'Kap1-Avsnitt1-D-Dygn-manad-ar-Enkel-Fordjupning.md']]) {
  const r = las(DL + fil), i = r.findIndex(l => /^## Inledning/.test(l)); ENKEL_RUBRIK[id] = r.slice(i + 1).find(l => l.startsWith('### ')).slice(4); }
const std = {}; { let cur = null; for (const l of las(DL + 'Kap1-Avsnitt1-Standard-A-D-redigerad.md')) { const m = /^# Text ([A-D]) – /.exec(l); if (m) { cur = m[1]; std[cur] = []; continue; } if (cur) std[cur].push(l); } }
for (const [B, id, fil] of TEXTER) {
  const r = las(DL + fil), ie = r.findIndex(l => /^# 📗 ENKEL/.test(l)), iff = r.findIndex(l => /^# 📕 FÖRDJUPNING/.test(l));
  const delar = { enkel: r.slice(ie + 1, iff), fordjupning: r.slice(iff + 1), standard: std[B] };
  for (const [niva, lines] of Object.entries(delar)) {
    const k = kallsekvens(lines), f = filsekvens(path.join(MAPP, id, niva + '.js'));
    const RUTA = 'RUTA Så bläddrar du: Pilarna bredvid boken, ← och → på tangentbordet, eller svep. / Klicka i innehållet för att gå till en sida. / Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.';
    const seq = f.ut.slice(), tFel = [];
    const iInl = seq.indexOf('AVSNITT Inledning onumrerad'), iNasta = seq.findIndex((x, i) => i > iInl && x.startsWith('AVSNITT'));
    if (seq[iNasta - 1] === RUTA) seq.splice(iNasta - 1, 1); else tFel.push('rutan står inte sist i Inledningen');
    if (niva === 'standard') { const enkRub = ENKEL_RUBRIK[id]; if (seq[iInl + 1] === 'RUBRIK ' + enkRub) seq.splice(iInl + 1, 1); else tFel.push('Inledningens rubrik ”' + enkRub + '” saknas'); }
    const iSam = seq.indexOf('AVSNITT Sammanfattning onumrerad');
    if (seq[iSam + 1] === 'RUBRIK Det viktigaste') seq.splice(iSam + 1, 1); else tFel.push('”Det viktigaste” saknas');
    if (tFel.length) { fel++; console.log('   TILLÄGGEN: ' + tFel.join(', ')); }
    f.ut = seq;
    const fut = niva === 'standard' ? f.ut.map(avmarkera) : f.ut;
    let ok = k.ut.length === fut.length && k.ut.every((x, i) => x === fut[i]);
    const bok = JSON.stringify(k.bilder) === JSON.stringify(f.bilder);
    const markeringar = niva === 'standard' ? f.ut.filter((x, i) => x !== fut[i]).length : 0;
    const antal = { avsnitt: k.ut.filter(x => x.startsWith('AVSNITT')).length, block: k.ut.length };
    console.log(`${ok && bok ? 'ORDAGRANT' : 'FEL      '}  ${B} ${id}/${niva}: ${antal.avsnitt} avsnitt, ${antal.block} rader ur källan, ${k.bilder.length} bildmarkeringar` +
      (niva === 'standard' ? `, ${markeringar} block med begreppsmarkering` : ''));
    if (!ok) { fel++; const i = k.ut.findIndex((x, j) => x !== fut[j]); console.log('   första skillnaden:\n   källan: ' + k.ut[i] + '\n   filen:  ' + fut[i]); }
    if (!bok) { fel++; console.log('   bildmarkeringarna skiljer: ' + JSON.stringify(k.bilder) + ' / ' + JSON.stringify(f.bilder)); }
  }
}
// Djupdykningarna (arbetsorder 10): titeln (# ) = kortets titel i delkapitel.js, i källornas ordning A–D;
// styckena före första ## = avsnittet Inledning (onumrerat); sedan avsnitt, rubriker och stycken tecken för tecken.
// Inga tillägg är godkända. Bildmarkeringarna ska stå som kommentarer i samma ordning.
const DD = [['A', 'Kap1-DD-A-Solstormar-redigerad.md'], ['B', 'Kap1-DD-B-Venus-redigerad.md'],
  ['C', 'Kap1-DD-C-Jupiters-manar-och-Saturnus-ringar-redigerad.md'], ['D', 'Kap1-DD-D-Nedslag-fran-rymden-redigerad.md']];
let delkap; global.Bok = { delkapitel: d => { delkap = d; } };
eval(fs.readFileSync(path.join(MAPP, '..', 'delkapitel.js'), 'utf8'));
const kort = delkap.djupdykningar || [];
if (kort.length !== DD.length) { fel++; console.log(`FEL        djupdykningarna: ${kort.length} kort, ${DD.length} källor`); }
DD.forEach(([B, fil], i) => {
  const r = las(DL + fil), it = r.findIndex(l => /^# /.test(l)), titel = r[it].slice(2);
  const k = kallsekvens(['## Inledning (onumrerad)'].concat(r.slice(it + 1).map(l => /^## /.test(l) ? l + ' (numrerad)' : l)));
  const d = kort[i];
  if (!d || d.titel !== titel) { fel++; console.log(`FEL        ${B}: kortet ${i + 1} heter ”${d && d.titel}”, källan ”${titel}”`); return; }
  const f = filsekvens(path.join(MAPP, '..', d.fil));
  const ok = k.ut.length === f.ut.length && k.ut.every((x, j) => x === f.ut[j]);
  const bok = JSON.stringify(k.bilder) === JSON.stringify(f.bilder);
  const inl = f.data.avsnitt[0] && f.data.avsnitt[0].titel === 'Inledning' && f.data.avsnitt[0].numrerad === false;
  console.log(`${ok && bok && inl ? 'ORDAGRANT' : 'FEL      '}  ${B} djupdykningar/${d.id}: ”${titel}”, ${k.ut.filter(x => x.startsWith('AVSNITT')).length - 1} avsnitt + ` +
    `Inledningen, ${k.ut.length} rader ur källan, ${k.bilder.length} bildmarkeringar`);
  if (!ok) { fel++; const j = k.ut.findIndex((x, n) => x !== f.ut[n]); console.log('   första skillnaden:\n   källan: ' + k.ut[j] + '\n   filen:  ' + f.ut[j]); }
  if (!bok) { fel++; console.log('   bildmarkeringarna skiljer: ' + JSON.stringify(k.bilder) + ' / ' + JSON.stringify(f.bilder)); }
  if (!inl) { fel++; console.log('   det första avsnittet är inte Inledningen (onumrerad)'); }
});
// ---------- Nästa steg (arbetsorder 11): textboken, övningsboken och Matematiken i fysiken mot kallor/nasta-steg/ ----------
// Källan och filen läses var för sig till samma följd: avsnitt (titel, numrerad), rubriker, stycken (rader i följd som
// ett stycke med radbrytningar), punkter, numrerade punkter (med numret), formler (uttryck – förklaring), exempel
// (rubrik, raderna och de tomma raderna mellan styckena), PROVA-raderna, MATTE och ANVÄNDS I (posterna). Bildmarkeringarna
// ska stå som kommentarer i samma ordning. Det enda godkända tillägget: länken till övningsboken i textbokens första
// avsnitt, sist under rubriken "Pröva dig själv efter varje ny formel" (v4, arbetsorder 13). Dessutom: varje länk pekar på ett avsnitt med just det namnet (MATTE: rubriken, ANVÄNDS I: numret).
const NS_KALLOR = path.join(__dirname, '..', 'kallor', 'nasta-steg') + path.sep, NS_ROT = path.join(__dirname, '..');
const NS = [
  { kalla: 'Nasta-steg-Kraft-och-rorelse-textbok-v4.md', fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/nasta-steg/textbok.js', bok: 'nasta-kraft-och-rorelse', namn: 'textboken' },
  { kalla: 'Nasta-steg-Kraft-och-rorelse-ovningsbok-v2.md', fil: 'kraft_och_rorelse/rorelse_och_kraft/innehall/nasta-steg/ovningsbok.js', bok: 'ovning-kraft-och-rorelse', namn: 'övningsboken' },
  { kalla: 'Matematiken-i-fysiken-v2.md', fil: 'nasta_steg/matematiken_i_fysiken/innehall/matematiken.js', bok: 'stod-matematiken', namn: 'Matematiken i fysiken' }
];
function nsKalla(f) {
  const r = las(NS_KALLOR + f), ut = [], bilder = [];
  let i = r.findIndex(l => /^## /.test(l)), st = [];
  const slut = () => { if (st.length) ut.push('STYCKE ' + st.join(' ⏎ ')); st = []; };
  for (; i < r.length; i++) {
    const l = r[i]; let m;
    if (!l.trim()) { slut(); continue; }
    if ((m = /^## (?:\d+\. )?(.+?) \((numrerad|onumrerad)/.exec(l))) { slut(); ut.push(`AVSNITT ${m[1]} ${m[2]}`); continue; }
    if (l.startsWith('### ')) { slut(); ut.push('RUBRIK ' + l.slice(4)); continue; }
    if ((m = /^\[FORMEL: (.+)\]$/.exec(l))) { slut(); ut.push('FORMEL ' + m[1]); continue; }
    if ((m = /^\[MATTE: (.+)\]$/.exec(l))) { slut(); ut.push('MATTE ' + m[1]); continue; }
    if ((m = /^\[ANVÄNDS I: (.+)\]$/.exec(l))) { slut(); ut.push('ANVÄNDS ' + m[1]); continue; }
    if (l.startsWith('[BILD')) { slut(); bilder.push(l); continue; }
    if ((m = /^\[EXEMPEL: (.+)\]$/.exec(l))) { slut(); ut.push('EXEMPEL ' + m[1]);
      let tom = false;
      for (i++; r[i] !== '[/EXEMPEL]'; i++) { if (!r[i].trim()) { tom = true; continue; } ut.push((tom && ut[ut.length - 1] !== 'EXEMPEL ' + m[1] ? 'EXRAD+ ' : 'EXRAD ') + r[i]); tom = false; }
      continue; }
    if (l === '[PROVA]') { slut(); ut.push('PROVA'); for (i++; r[i] !== '[/PROVA]'; i++) if (r[i].trim()) ut.push('PROVARAD ' + r[i]); continue; }
    if (l.startsWith('- ')) { slut(); ut.push('PUNKT ' + l.slice(2)); continue; }
    if (/^\d+\. /.test(l)) { slut(); ut.push('NUMMER ' + l); continue; }
    st.push(l);
  }
  slut();
  return { ut, bilder };
}
function nsFil(f) {
  let data; global.Bok = { niva: (n, d) => { data = d; } };
  const kod = fs.readFileSync(path.join(NS_ROT, f), 'utf8'); eval(kod);
  const ut = [], lankar = [];
  for (const a of data.avsnitt) { ut.push(`AVSNITT ${a.titel} ${a.numrerad === false ? 'onumrerad' : 'numrerad'}`);
    for (const b of a.block) {
      if (b.typ === 'rubrik') ut.push('RUBRIK ' + b.text);
      else if (b.typ === 'text') ut.push('STYCKE ' + b.text);
      else if (b.typ === 'rader') ut.push('STYCKE ' + b.rader.join(' ⏎ '));
      else if (b.typ === 'punkter') b.punkter.forEach(p => ut.push('PUNKT ' + p));
      else if (b.typ === 'numrerad') b.punkter.forEach((p, k) => ut.push(`NUMMER ${k + 1}. ${p}`));
      else if (b.typ === 'formel') ut.push(`FORMEL ${b.uttryck} – ${b.forklaring}`);
      else if (b.typ === 'exempel') { ut.push('EXEMPEL ' + b.rubrik); b.stycken.forEach((s, si) => s.forEach((x, ri) => ut.push((si && !ri ? 'EXRAD+ ' : 'EXRAD ') + x))); }
      else if (b.typ === 'prova') { ut.push('PROVA'); b.rader.forEach(x => ut.push('PROVARAD ' + x)); }
      else if (b.typ === 'bokref') { ut.push((b.etikett === 'Matematik du behöver:' ? 'MATTE ' : b.etikett === 'Används i Nästa steg:' ? 'ANVÄNDS ' : 'BOKREF? ') + b.lankar.map(l => l.text).join(' · '));
        b.lankar.filter(l => l.bok).forEach(l => lankar.push(l)); }
      else if (b.typ === 'boklank') ut.push('BOKLANK ' + b.bok);
      else if (b.typ !== 'figur') ut.push('OKÄNT ' + b.typ);
    } }
  const bilder = [...kod.matchAll(/^\s*\/\/ (\[BILD.*)$/gm)].map(m => m[1]);
  return { ut, bilder, data, lankar };
}
const nsFiler = Object.fromEntries(NS.map(B => [B.bok, nsFil(B.fil)]));
for (const B of NS) {
  const k = nsKalla(B.kalla), f = nsFiler[B.bok], seq = f.ut.slice(), tFel = [];
  if (B.bok === 'nasta-kraft-och-rorelse') {
    // tillägget: länken till övningsboken i det första avsnittet, sist under rubriken "Pröva dig själv efter varje ny
    // formel" (textboken v4, arbetsorder 13): före nästa rubrik eller nästa avsnitt, efter stycket om övningsboken
    const r = seq.indexOf('RUBRIK Pröva dig själv efter varje ny formel'), a2 = seq.findIndex((x, i) => i > 0 && x.startsWith('AVSNITT'));
    const j = seq.findIndex((x, i) => i > r && (x.startsWith('RUBRIK') || x.startsWith('AVSNITT')));
    if (r > 0 && r < a2 && j <= a2 && seq[j - 1] === 'BOKLANK ovning-kraft-och-rorelse' && /övningsboken/.test(seq[j - 2])) seq.splice(j - 1, 1);
    else tFel.push('länken till övningsboken står inte sist under ”Pröva dig själv efter varje ny formel” i ”Så här använder du boken”');
  }
  const ok = k.ut.length === seq.length && k.ut.every((x, i) => x === seq[i]);
  const bok = JSON.stringify(k.bilder) === JSON.stringify(f.bilder);
  // länkarna: målet finns och heter som posten
  for (const l of f.lankar) {
    const mal = Object.entries(nsFiler).find(([b]) => b === l.bok), a = mal && mal[1].data.avsnitt.find(x => x.id === l.ankare);
    const nr = a && mal[1].data.avsnitt.filter(x => x.numrerad !== false).indexOf(a) + 1;
    if (!a || !(l.text === a.titel || l.text === `${nr}. ${a.titel}`)) tFel.push(`länken ”${l.text}” går till ${l.bok}/${l.ankare}` + (a ? ` (”${nr}. ${a.titel}”)` : ' (finns inte)'));
  }
  const n = t => k.ut.filter(x => x.startsWith(t)).length;
  console.log(`${ok && bok && !tFel.length ? 'ORDAGRANT' : 'FEL      '}  Nästa steg: ${B.namn}: ${n('AVSNITT')} avsnitt, ${k.ut.length} rader ur källan ` +
    `(${n('FORMEL')} formler, ${n('EXEMPEL ')} exempel, ${k.ut.filter(x => x === 'PROVA').length} prova), ${k.bilder.length} bildmarkeringar, ${f.lankar.length} länkar`);
  if (!ok) { fel++; const i = k.ut.findIndex((x, j) => x !== seq[j]); console.log('   första skillnaden:\n   källan: ' + k.ut[i] + '\n   filen:  ' + seq[i]); }
  if (!bok) { fel++; console.log('   bildmarkeringarna skiljer: ' + JSON.stringify(k.bilder) + ' / ' + JSON.stringify(f.bilder)); }
  if (tFel.length) { fel++; console.log('   ' + tFel.join('\n   ')); }
}

// ---------- Kraft och rörelse, avsnitt IV, text A Resulterande kraft (arbetsorder 12): kallor/kap3/IV-A-…-v4.md ----------
// Var och en av de tre nivåerna mot sin del av källan (# 📘 STANDARD, # 📗 ENKEL, # 📕 FÖRDJUPNING), i ordning: avsnitt,
// rubriker, "Det här lär du dig", stycken, punkter, numrerade punkter, formler. Bildmarkeringarna som kommentarer i samma
// ordning. Godkända tillägg (III:s norm, ordern): rutan "Så bläddrar du" sist i Inledningen och länkblocket sist i det
// sista numrerade avsnittet och sist i Sammanfattningen – på just de platserna, och inget annat.
// IV B Fritt fall (2026-11-11) prövas likadant mot kallor/kap3/IV-B-…-v2.md. Där finns också [EXEMPEL: rubrik] (raderna
// under) och [RUTA: rubrik] (punkterna under): de hör till källan och ska stå på sin plats i boken.
for (const [TX, KF, MP] of [['A', 'IV-A-Resulterande-kraft-alla-nivaer-v4.md', 'resulterande-kraft'],
                            ['B', 'IV-B-Fritt-fall-alla-nivaer-v2.md', 'fritt-fall']]) {
  const r = las(path.join(__dirname, '..', 'kallor', 'kap3', KF)), delar = {};
  let cur = null;
  for (const l of r) { const m = /^# (?:📘|📗|📕) (STANDARD|ENKEL|FÖRDJUPNING)/.exec(l);
    if (m) { cur = { STANDARD: 'standard', ENKEL: 'enkel', 'FÖRDJUPNING': 'fordjupning' }[m[1]]; delar[cur] = []; continue; }
    if (/^# FIGURER/.test(l)) { cur = null; continue; } if (cur) delar[cur].push(l); }
  const kalla = rad => { const ut = [], bilder = []; let st = [];
    const slut = () => { if (st.length) ut.push('STYCKE ' + st.join(' ⏎ ')); st = []; };
    for (let i = 0; i < rad.length; i++) { const l = rad[i]; let m;
      if (!l.trim() || /^={3,}/.test(l) || /^# /.test(l)) { slut(); continue; }
      if ((m = /^\[EXEMPEL: (.+)\]$/.exec(l))) { slut(); const rr = []; while (i + 1 < rad.length && rad[i + 1].trim()) rr.push(rad[++i]);
        ut.push(`EXEMPEL Exempel: ${m[1]}: ${rr.join(' ⏎ ')}`); continue; }
      if ((m = /^\[RUTA: (.+)\]$/.exec(l))) { slut(); const ps = []; while (i + 1 < rad.length && rad[i + 1].startsWith('- ')) ps.push(rad[++i].slice(2));
        ut.push(`RUTA ${m[1]}: ${ps.join(' / ')}`); continue; }
      if ((m = /^## (.+?) \((numrerad|onumrerad)/.exec(l))) { slut(); ut.push(`AVSNITT ${m[1]} ${m[2]}`); continue; }
      if (l.startsWith('### ')) { slut(); ut.push('RUBRIK ' + l.slice(4)); continue; }
      if (l === 'Det här lär du dig:') { slut(); ut.push('UNDERRUBRIK Det här lär du dig'); continue; }
      if ((m = /^\[FORMEL: (.+)\]$/.exec(l))) { slut(); ut.push('FORMEL ' + m[1]); continue; }
      if (l.startsWith('[BILD')) { slut(); bilder.push(l); continue; }
      if (l.startsWith('- ')) { slut(); ut.push('PUNKT ' + l.slice(2)); continue; }
      if (/^\d+\. /.test(l)) { slut(); ut.push('NUMMER ' + l); continue; }
      st.push(l); }
    slut(); return { ut, bilder }; };
  for (const niva of ['standard', 'enkel', 'fordjupning']) {
    const fil = path.join(__dirname, '..', 'kraft_och_rorelse', 'fall_kast_och_balans', 'innehall', MP, niva + '.js');
    let data; global.Bok = { niva: (n, d) => { data = d; } };
    const kod = fs.readFileSync(fil, 'utf8'); eval(kod);
    const f = [];
    for (const a of data.avsnitt) { f.push(`AVSNITT ${a.titel} ${a.numrerad === false ? 'onumrerad' : 'numrerad'}`);
      for (const b of a.block) {
        if (b.typ === 'rubrik') f.push('RUBRIK ' + b.text); else if (b.typ === 'underrubrik') f.push('UNDERRUBRIK ' + b.text);
        else if (b.typ === 'text') f.push('STYCKE ' + b.text); else if (b.typ === 'rader') f.push('STYCKE ' + b.rader.join(' ⏎ '));
        else if (b.typ === 'punkter') b.punkter.forEach(p => f.push('PUNKT ' + p));
        else if (b.typ === 'numrerad') b.punkter.forEach((p, k) => f.push(`NUMMER ${k + 1}. ${p}`));
        else if (b.typ === 'formel') f.push(`FORMEL ${b.uttryck} – ${b.forklaring}`);
        else if (b.typ === 'ruta') f.push('RUTA ' + b.rubrik + ': ' + b.punkter.join(' / '));
        else if (b.typ === 'exempel') f.push(`EXEMPEL ${b.rubrik}: ${b.rader.join(' ⏎ ')}`);
        else if (b.typ === 'lank') f.push('LANK ' + b.till.join(','));
        else if (b.typ === 'vidare') f.push('VIDARE ' + b.lankar.map(l => `${l.text} → ${l.bok}/${l.ankare}`).join(' · '));
        else if (b.typ !== 'figur') f.push('OKÄNT ' + b.typ); } }
    const k = kalla(delar[niva] || []), tFel = [], seq = f.slice();
    // tilläggen på sina platser
    const RUTA_T = 'RUTA Så bläddrar du: Pilarna bredvid boken, ← och → på tangentbordet, eller svep. / Klicka i innehållet för att gå till en sida. / Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.';
    const fore = (i) => seq.findIndex((x, j) => j > i && x.startsWith('AVSNITT'));
    const iInl = seq.indexOf('AVSNITT Inledning onumrerad'), nInl = fore(iInl);
    if (seq[nInl - 1] === RUTA_T) seq.splice(nInl - 1, 1); else tFel.push('rutan står inte sist i Inledningen');
    const iSam = seq.indexOf('AVSNITT Sammanfattning onumrerad');
    if (seq[iSam - 1] === 'LANK ova,sjalvskattning') seq.splice(iSam - 1, 1); else tFel.push('länkblocket står inte sist i det sista numrerade avsnittet');
    // Fördjupning (arbetsorder 13, del 2): rutan "Vill du gå vidare?" sist i Sammanfattningen, med kopplingens länkar
    // (verktyg/vidare-rutor.js) – och ingen annanstans
    if (niva === 'fordjupning') {
      const vb = VIDARE.block(`kraft_och_rorelse/fall_kast_och_balans/innehall/${MP}/fordjupning.js`);
      const vant = 'VIDARE ' + vb.lankar.map(l => `${l.text} → ${l.bok}/${l.ankare}`).join(' · ');
      if (seq[seq.length - 1] === vant) seq.pop(); else tFel.push('rutan "Vill du gå vidare?" står inte sist i Sammanfattningen med länkarna ' + vant.slice(7));
    }
    if (seq.some(x => x.startsWith('VIDARE '))) tFel.push('rutan "Vill du gå vidare?" står på fel plats');
    const iSam2 = seq.indexOf('AVSNITT Sammanfattning onumrerad');
    if (seq[seq.length - 1] === 'LANK ova,sjalvskattning,elevbok' && iSam2 >= 0) seq.pop(); else tFel.push('länkblocket står inte sist i Sammanfattningen');
    const ok = k.ut.length === seq.length && k.ut.every((x, i) => x === seq[i]);
    const bilder = [...kod.matchAll(/^\s*\/\/ (\[BILD.*)$/gm)].map(m => m[1]), bok = JSON.stringify(k.bilder) === JSON.stringify(bilder);
    console.log(`${ok && bok && !tFel.length ? 'ORDAGRANT' : 'FEL      '}  IV ${TX} ${MP}/${niva}: ${k.ut.filter(x => x.startsWith('AVSNITT')).length} avsnitt, ${k.ut.length} rader ur källan, ${k.bilder.length} bildmarkeringar`);
    if (!ok) { fel++; const i = k.ut.findIndex((x, j) => x !== seq[j]); console.log('   första skillnaden:\n   källan: ' + k.ut[i] + '\n   filen:  ' + seq[i]); }
    if (!bok) { fel++; console.log('   bildmarkeringarna skiljer: ' + JSON.stringify(k.bilder) + ' / ' + JSON.stringify(bilder)); }
    if (tFel.length) { fel++; console.log('   TILLÄGGEN: ' + tFel.join(', ')); }
  }
}

console.log(fel ? `\nFEL: ${fel}` : '\nAlla tolv böckerna ordagrant mot källorna, med Joachims tillägg 2026-11-07 (rutan, "Det viktigaste", Standards Inledningsrubrik) och inget annat.' +
  '\nDe fyra djupdykningarna ordagrant mot källorna, utan tillägg, och korten heter som böckerna.' +
  '\nNästa steg (textboken, övningsboken) och Matematiken i fysiken ordagrant mot källorna, med länken till övningsboken (ordern) och inget annat, och varje länk går till avsnittet med sitt namn.' +
  '\nKraft och rörelse IV A (Resulterande kraft) och IV B (Fritt fall), tre nivåer var, ordagrant mot källorna, med rutan och länkblocken enligt III:s norm, och i Fördjupningen rutan "Vill du gå vidare?" sist (order 13), och inget annat.');
process.exitCode = fel ? 1 : 0;
