// node verktyg/kap1-omvandlare.js [utmapp] [--json]
// Skriver om kapitel 1, avsnitt I, ur källorna i kallor/kap1/. Utan utmapp skrivs filerna i
// materia_och_universum/solsystemet_och_jorden/innehall/, och de som finns där skrivs över. Med utmapp (en tom mapp)
// kan resultatet jämföras med repot först.
// Order 9 steg 2: Kap1-Avsnitt1-källorna → innehall/<text>/<nivå>.js i strömformatet, ordagrant.
//  ## Titel (numrerad|onumrerad[, id: x]) = avsnitt (id: källans, annars inledning/sammanfattning/titelns slug)
//  ### X = rubrik · "Det här lär du dig:" = underrubrik utan kolon · "- x" = punkter · övriga rader = stycken
//  [BILD …] = en JS-kommentar på sin plats (figuren kommer i steg 3; eleven ser inget)
//  länkblocket: sist i det sista numrerade avsnittet (ova, sjalvskattning) och i Sammanfattningen (+ elevbok)
//  Standard: begreppen som Enkel och Fördjupning markerar (*ord*) markeras första gången de står i varje Standard-text
//  (i stycken och punkter, inte i rubriker); en böjd form blir *form|grundform*.
const fs = require('fs'), path = require('path');
const DL = path.join(__dirname, '..', 'kallor', 'kap1') + path.sep;
const UT = process.argv.slice(2).find(a => !a.startsWith('--')) || path.join(__dirname, '..', 'materia_och_universum', 'solsystemet_och_jorden', 'innehall');
const TEXTER = [
  { bokstav: 'A', id: 'solsystemet', titel: 'Solsystemet', fil: 'Kap1-Avsnitt1-A-Solsystemet-Enkel-Fordjupning.md' },
  { bokstav: 'B', id: 'himlakroppar', titel: 'Himlakroppar', fil: 'Kap1-Avsnitt1-B-Himlakroppar-Enkel-Fordjupning.md' },
  { bokstav: 'C', id: 'jordklotet', titel: 'Jordklotet', fil: 'Kap1-Avsnitt1-C-Jordklotet-Enkel-Fordjupning.md' },
  { bokstav: 'D', id: 'dygn-manad-ar-arstider', titel: 'Dygn, månad, år och årstider', fil: 'Kap1-Avsnitt1-D-Dygn-manad-ar-Enkel-Fordjupning.md' }
];
const rader = f => fs.readFileSync(DL + f, 'utf8').replace(/\r/g, '').split('\n');
const slug = s => s.toLowerCase().replace(/[åä]/g, 'a').replace(/ö/g, 'o').replace(/é/g, 'e').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Standard: texterna A–D i en fil (# Text X – …)
function standardDelar() {
  const r = rader('Kap1-Avsnitt1-Standard-A-D-redigerad.md'), ut = {};
  let cur = null;
  for (const l of r) { const m = /^# Text ([A-D]) – /.exec(l); if (m) { cur = m[1]; ut[cur] = []; continue; } if (cur) ut[cur].push(l); }
  return ut;
}
// Enkel och Fördjupning: delarna efter "# 📗 ENKEL" och "# 📕 FÖRDJUPNING"
function nivaDelar(fil) {
  const r = rader(fil), ut = { enkel: [], fordjupning: [] };
  let cur = null;
  for (const l of r) { if (/^# 📗 ENKEL/.test(l)) { cur = 'enkel'; continue; } if (/^# 📕 FÖRDJUPNING/.test(l)) { cur = 'fordjupning'; continue; } if (cur) ut[cur].push(l); }
  return ut;
}
function avsnittUr(lines) {
  const avs = [];
  let a = null, punkter = null;
  // en lång lista (mer än 6 punkter; 7 sedan rubriken "Det viktigaste" lades till, 2026-11-07) blir två listor i följd, så att motorn kan bryta mellan dem (en lista delas aldrig;
  // Sammanfattningen i D, Standard och Fördjupning, var annars för hög för en sida – som III D Fördjupning 2026-11-05);
  // den första listan är större (60 %), så att sidan före brytningen fylls
  const slutPunkter = () => { if (punkter) { if (punkter.length > 6) { const h = Math.ceil(punkter.length * 0.6); a.block.push({ typ: 'punkter', punkter: punkter.slice(0, h) }, { typ: 'punkter', punkter: punkter.slice(h) }); }
    else a.block.push({ typ: 'punkter', punkter }); punkter = null; } };
  for (const l0 of lines) {
    const l = l0.trim();
    if (!l || /^={3,}/.test(l) || (/^# /.test(l))) { slutPunkter(); continue; }
    const m = /^## (.+?) \((numrerad|onumrerad)(?:, id: ([a-z0-9-]+))?\)$/.exec(l);
    if (m) { slutPunkter(); const titel = m[1];
      a = { id: m[3] || (titel === 'Inledning' ? 'inledning' : titel === 'Sammanfattning' ? 'sammanfattning' : slug(titel)), titel, numrerad: m[2] === 'numrerad', block: [] };
      avs.push(a); continue; }
    if (!a) throw new Error('text före första avsnittet: ' + l);
    if (l.startsWith('- ')) { (punkter = punkter || []).push(l.slice(2)); continue; }
    slutPunkter();
    if (l.startsWith('### ')) a.block.push({ typ: 'rubrik', text: l.slice(4) });
    else if (l === 'Det här lär du dig:') a.block.push({ typ: 'underrubrik', text: 'Det här lär du dig' });
    else if (/^\[BILD/.test(l)) a.block.push({ kommentar: l });
    else if (/^#/.test(l)) throw new Error('okänd rubriknivå: ' + l);
    else a.block.push({ typ: 'text', text: l });
  }
  slutPunkter();
  // länkblocket (motorns konvention, README: Hjälpmedel)
  const numr = avs.filter(x => x.numrerad);
  if (numr.length) numr[numr.length - 1].block.push({ typ: 'lank', till: ['ova', 'sjalvskattning'] });
  const s = avs.find(x => x.id === 'sammanfattning');
  if (s) s.block.push({ typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] });
  return avs;
}
// begreppen i en nivå: grundformen (efter |) eller ordet
const begreppI = avs => { const ut = [];
  avs.forEach(a => a.block.forEach(b => [].concat(b.text || [], b.punkter || []).forEach(t => {
    for (const m of t.matchAll(/\*([^*|]+)(?:\|([^*]+))?\*/g)) { const g = (m[2] || m[1]).trim(); if (!ut.some(x => x.toLowerCase() === g.toLowerCase())) ut.push(g); } }))); return ut; };
// markera i Standard: första förekomsten (exakt ord först i textordning; en böjd form: ordet som börjar med grundformen)
function markera(avs, begrepp) {
  const rapport = [];
  const fa = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const g of begrepp) {
    const exakt = new RegExp(`(?<![\\p{L}\\p{N}])${fa(g)}(?![\\p{L}\\p{N}])`, 'iu');
    // en böjd form: grundformen + en vanlig ändelse (inte en sammansättning som asteroidbältet)
    const bojd = new RegExp(`(?<![\\p{L}\\p{N}])${fa(g)}(?:en|er|erna|ar|arna|na|n|et|ets|ens|ns|s|e|a)?(?![\\p{L}\\p{N}])`, 'iu');
    let gjort = false;
    for (const sok of [bojd]) for (const a of avs) { for (const b of a.block) {
      if (gjort || (b.typ !== 'text' && b.typ !== 'punkter')) continue;
      const falt = b.typ === 'text' ? [['text', null]] : b.punkter.map((_, i) => ['punkter', i]);
      for (const [k, i] of falt) {
        if (gjort) break;
        const t = i === null ? b[k] : b[k][i];
        // inte inne i en redan satt markering
        const fri = s => { const m = sok.exec(s); if (!m) return null;
          const fore = s.slice(0, m.index); if ((fore.match(/\*/g) || []).length % 2) return null; return m; };
        const m = fri(t); if (!m) continue;
        const ord = m[0], ny = t.slice(0, m.index) + (ord.toLowerCase() === g.toLowerCase() && ord === g ? `*${ord}*` : `*${ord}|${g}*`) + t.slice(m.index + ord.length);
        if (i === null) b[k] = ny; else b[k][i] = ny;
        rapport.push({ begrepp: g, form: ord, avsnitt: a.titel, mening: ny.replace(/\*([^*|]+)(\|[^*]+)?\*/g, (x, o) => x.includes(ord) ? '[' + o + ']' : o).split(/(?<=[.!?])\s+/).find(m => m.includes('[')) }); gjort = true;
      } } }
    if (!gjort) rapport.push({ begrepp: g, form: null });
  }
  return rapport;
}
const q = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
function skriv(avs, niva, text, kalla, extra) {
  const ut = [];
  ut.push(`/* Avsnittssida I. Solsystemet och jorden, text ${text.bokstav} ${text.titel} – nivån ${niva}. Arbetsorder 9 (2026-11-07):`);
  ut.push(` * ${kalla}, infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,`);
  ut.push(` * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade`);
  ut.push(` * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats, med figuren efter (steg 3).`);
  ut.push(` * Joachims tillägg 2026-11-07: rutan "Så bläddrar du" sist i Inledningen och rubriken "Det viktigaste" först i`);
  ut.push(` * Sammanfattningen, som i III${niva === 'standard' ? '; Inledningens rubrik som i Enkel' : ''}.`);
  if (extra) extra.forEach(r => ut.push(' * ' + r));
  ut.push(' */');
  ut.push(`Bok.niva('${niva}', {`, '  avsnitt: [');
  avs.forEach((a, ai) => {
    ut.push('    {', `      id: '${a.id}', titel: ${q(a.titel)}${a.numrerad ? '' : ', numrerad: false'},`, '      block: [');
    const bl = a.block.map(b => {
      if (b.kommentar) return `        // ${b.kommentar}`;
      if (b.typ === 'punkter') return `        { typ: 'punkter', punkter: [\n${b.punkter.map(p => '          ' + q(p)).join(',\n')}\n        ] }`;
      if (b.typ === 'lank') return `        { typ: 'lank', till: [${b.till.map(q).join(', ')}] }`;
      if (b.typ === 'ruta') return `        { typ: 'ruta', rubrik: ${q(b.rubrik)}, punkter: [\n${b.punkter.map(p => '          ' + q(p)).join(',\n')}\n        ] }`;
      if (b.typ === 'figur') return '        ' + JSON.stringify(b).replace(/"([a-z]+)":/g, '$1: ').replace(/"/g, "'").replace(/,(?=[a-z{\['])/g, ', ').replace(/\{(?=[a-z])/g, '{ ').replace(/\}/g, ' }').replace(/ \} \}/g, ' } }');
      return `        { typ: '${b.typ}', text: ${q(b.text)} }`;
    });
    // kommatecken mellan block, inte efter en kommentar eller sist
    const verkliga = bl.map((x, i) => [x, !a.block[i].kommentar]);
    const sista = verkliga.map(([, v], i) => v ? i : -1).filter(i => i >= 0).pop();
    verkliga.forEach(([x, v], i) => ut.push(x + (v && i !== sista ? ',' : '')));
    ut.push('      ]', '    }' + (ai < avs.length - 1 ? ',' : ''));
  });
  ut.push('  ]', '});', '');
  return ut.join('\n');
}

// Steg 3 (--figurer): figurerna efter bildmarkeringarna, i källans ordning. Data och bildtexter: arbetsorder 9 (BILD S1,
// S2, M, K, F, Å); Standard A har en markering, som får S1 (ordern), och ingen S2 (rapporterat).
const PLANETER = [['Merkurius', 4879, 0.39], ['Venus', 12104, 0.72], ['Jorden', 12756, 1], ['Mars', 6792, 1.52], ['Jupiter', 142984, 5.2],
  ['Saturnus', 120536, 9.58], ['Uranus', 51118, 19.2], ['Neptunus', 49528, 30.05]];
const FIG = {
  S1: { typ: 'figur', namn: 'himlakroppar_i_skala', kant: { namn: 'Solen', diameter: 1392700 }, kroppar: PLANETER.map(([namn, diameter]) => ({ namn, diameter })),
    bildtext: 'Planeterna i samma skala, bredvid en bit av solens kant.' },
  S2: { typ: 'figur', namn: 'avstandslinje', enhet: 'miljoner km', kroppar: PLANETER.map(([namn, , ae]) => ({ namn, ae })),
    bildtext: 'Planeternas avstånd till solen. Avstånden har en annan skala än storlekarna i bilden ovan.' },
  M: { typ: 'figur', namn: 'himlakroppar_i_skala', kroppar: [['Jorden', 12756, 0], ['Månen', 3475, 0], ['Jupiter', 142984, 1], ['Io', 3643, 1], ['Europa', 3122, 1],
    ['Ganymedes', 5268, 1], ['Kallisto', 4821, 1], ['Merkurius', 4879, 2]].map(([namn, diameter, grupp]) => ({ namn, diameter, grupp })),
    bildtext: 'Jorden och månen, Jupiter med sina fyra största månar och Merkurius som jämförelse – alla i samma skala.' },
  K: { typ: 'figur', namn: 'jordklot_tyngd', bildtext: 'Nedåt är alltid mot jordens mitt, var man än står på jorden.' },
  F: { typ: 'figur', namn: 'manfaser', bildtext: 'Inre ringen: solen lyser alltid på den halva av månen som är vänd mot solen. Yttre ringen: så ser månen ut från jorden.' },
  Å: { typ: 'figur', namn: 'arstider', bildtext: 'Jordaxeln lutar åt samma håll hela året. Avstånden och storlekarna är inte skalenliga.' }
};
const FIGURER = { solsystemet: { enkel: ['S1', 'S2'], standard: ['S1'], fordjupning: [] }, himlakroppar: { enkel: ['M'], standard: ['M'], fordjupning: [] },
  jordklotet: { enkel: ['K'], standard: ['K'], fordjupning: [] }, 'dygn-manad-ar-arstider': { enkel: ['F', 'Å'], standard: ['F', 'Å'], fordjupning: [] } };
const medFigurer = (avs, lista) => { let i = 0;
  avs.forEach(a => { a.block = a.block.flatMap(b => b.kommentar ? [b, Object.assign({ id: 'bild-' + lista[i].toLowerCase().replace('å', 'a') }, FIG[lista[i++]])] : [b]); });
  if (i !== lista.length) throw new Error('bildmarkeringarna: ' + i + ' i källan, ' + lista.length + ' figurer');
  return avs; };
// Figurerna (order 9 steg 3) och Joachims tillägg (2026-11-07) är alltid med; utan dem blev det tidigare steg.
const FIGURER_PA = true, TILLAGG_PA = true;
// Rutan "Så bläddrar du" – ordagrant som i III (kraft_och_rorelse/rorelse_och_kraft/innehall/*/…)
const RUTA = { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: ['Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
  'Klicka i innehållet för att gå till en sida.', 'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'] };
const std = standardDelar(), alla = {}, begreppsRapport = {};
for (const T of TEXTER) {
  const nd = nivaDelar(T.fil);
  let enk = avsnittUr(nd.enkel), ford = avsnittUr(nd.fordjupning), stand = avsnittUr(std[T.bokstav]);
  if (FIGURER_PA) { enk = medFigurer(enk, FIGURER[T.id].enkel); stand = medFigurer(stand, FIGURER[T.id].standard); ford = medFigurer(ford, FIGURER[T.id].fordjupning); }
  const begrepp = begreppI(enk).concat(begreppI(ford).filter(g => !begreppI(enk).some(x => x.toLowerCase() === g.toLowerCase())));
  const STRUKNA = { jordklotet: ['roterar'] };                      // Joachims beslut 2026-11-07
  const rapp = markera(stand, begrepp.filter(g => !(STRUKNA[T.id] || []).includes(g)));
  begreppsRapport[T.id] = rapp;
  if (TILLAGG_PA) {
    const inl = a => a.find(x => x.id === 'inledning'), sam = a => a.find(x => x.id === 'sammanfattning');
    const forsta = inl(enk).block[0];
    if (!forsta || forsta.typ !== 'rubrik') throw new Error(T.id + ': Enkels Inledning börjar inte med en rubrik');
    inl(stand).block.unshift({ typ: 'rubrik', text: forsta.text });
    for (const a of [enk, stand, ford]) { inl(a).block.push(Object.assign({}, RUTA)); sam(a).block.unshift({ typ: 'rubrik', text: 'Det viktigaste' }); }
  }
  alla[T.id] = { enkel: enk, standard: stand, fordjupning: ford };
  const kallaStd = 'Kap1-Avsnitt1-Standard-A-D-redigerad.md (# Text ' + T.bokstav + ')', kallaEF = T.fil;
  const mark = ['Begreppen (*ord*) är markerade som i Enkel och Fördjupning för samma text, första gången de står i den här texten',
    '(arbetsorder 9; listan i rapporten, Joachim stryker): ' + rapp.filter(r => r.form).map(r => r.form === r.begrepp ? r.begrepp : `${r.form} (${r.begrepp})`).join(', ') + '.'];
  if (UT) {
    fs.mkdirSync(path.join(UT, T.id), { recursive: true });
    fs.writeFileSync(path.join(UT, T.id, 'standard.js'), skriv(stand, 'standard', T, kallaStd, mark));
    fs.writeFileSync(path.join(UT, T.id, 'enkel.js'), skriv(enk, 'enkel', T, kallaEF + ' (📗 ENKEL)'));
    fs.writeFileSync(path.join(UT, T.id, 'fordjupning.js'), skriv(ford, 'fordjupning', T, kallaEF + ' (📕 FÖRDJUPNING)'));
  }
}
if (process.argv.includes('--json')) console.log(JSON.stringify(alla, null, 1));
for (const [t, r] of Object.entries(begreppsRapport)) {
  console.log(`\n${t}: markerade ${r.filter(x => x.form).length}, inte i Standard ${r.filter(x => !x.form).length}`);
  r.forEach(x => console.log(`  ${x.form ? '✓' : '–'} ${x.begrepp}${x.form && x.form !== x.begrepp ? ` (som "${x.form}")` : ''}${x.form ? ' · ' + x.avsnitt : ''}`));
}
for (const [t, n] of Object.entries(alla)) console.log(`${t}: ` + Object.entries(n).map(([k, a]) => `${k} ${a.map(x => x.id).join('/')}`).join(' | '));
