// node verktyg/kap1-ordagrant.js [innehall-mapp]: kapitel 1, avsnitt I, mot källorna i kallor/kap1/. Utan mapp
// prövas materia_och_universum/solsystemet_och_jorden/innehall/. Slutkoden är 1 om något inte är ordagrant.
// Varje nivåfil mot källan, i ordning – avsnitt (titel, numrerad), rubriker,
// stycken, punkter. Enkel/Fördjupning: tecken för tecken (med markeringarna). Standard: utan markeringarna, och
// markeringarna ska vara det enda som skiljer. Bildmarkeringarna ska finnas som kommentarer i samma ordning.
const fs = require('fs'), path = require('path');
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
console.log(fel ? `\nFEL: ${fel}` : '\nAlla tolv böckerna ordagrant mot källorna, med Joachims tillägg 2026-11-07 (rutan, "Det viktigaste", Standards Inledningsrubrik) och inget annat.');
process.exitCode = fel ? 1 : 0;
