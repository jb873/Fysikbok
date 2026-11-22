// bok-grind.js – verifierar bokmotorn och varje delkapitel i Fysik.
//
//   node verktyg/bok-grind.js              alla delkapitel (och provboken) i alla lägen
//   node verktyg/bok-grind.js --negativ    negativ verifiering: felen i FEL läggs in med flit, ett i taget, och grinden
//                                          ska bli röd för vart och ett i varje läge (utom "hackig bladvändning en
//                                          gång", som ska bli grön efter omkörningen)
//   node verktyg/bok-grind.js --bilder     sparar skärmbilder av hubben och boken (i verktyg/bilder/grind/)
//
// Delkapitlen letas upp på disken: varje mapp <område>/<delkapitel>/ med en delkapitel.js. Ett nytt delkapitel
// kommer alltså med av sig självt. För varje delkapitel prövas:
//   1. att index.html är byte för byte lika med mall/delkapitel/index.html (motorn är fryst; allt annat är data)
//   2. i Chrome (headless), i varje läge nedan: navigeringen (hubb → öppna → bläddra → hoppa → stäng → minns),
//      att alla sidor får plats och att strukturen är hel (?kontroll), och att inga JS-fel uppstår – fångade med
//      window.onerror och unhandledrejection, och med Chromes egna undantag (Runtime.exceptionThrown) som extra nät.
// Har delkapitlet texter (en bok per text) prövas också att en annan text är en egen bok och att varje text minns
// sin sida. Har det ett kapitel (kapitel.js) prövas omslaget: första öppningen, texterna innanför ramen och i
// ordning, motivet under undertiteln, Home till innehållet, och bladvändningen till och från omslaget. Provboken (verktyg/provbok/) har texter och prövar dessutom det som det riktiga innehållet inte använder
// än: en text som är "kommer", en nivå som bara en text har, hjälpmedel med adress, begrepp som länkar, en fjärde
// nivå ur data (Extranivå) och kraftpilarna. Har ett delkapitel plattformens elevbok (hjalpmedel.elevbok = en sida i mappen)
// prövas den över http på dator och mobil (provaElevboken nedan).
'use strict';
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path'), http = require('http'), os = require('os');

const ROT = path.resolve(__dirname, '..');
const MALL = path.join(ROT, 'mall', 'delkapitel', 'index.html');
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const NEGATIV = process.argv.some(a => a === '--negativ' || a.startsWith('--negativ=')), BILDER = process.argv.includes('--bilder');
// --bara=<del av namnet>: bara de delkapitel vars namn innehåller texten (snabbt prov medan man arbetar; inte grönt för boken)
const BARA = (process.argv.find(a => a.startsWith('--bara=')) || '').slice(7);
const BILDMAPP = path.join(__dirname, 'bilder', 'grind');

// --webb prövar den publicerade boken (GitHub Pages) i stället för filerna på disken; --webb=<adress> en annan adress.
// Sidorna hämtas då därifrån, men delkapitlen listas och mallen jämförs fortfarande på disken.
const WEBB = process.argv.find(a => a === '--webb' || a.startsWith('--webb='));
const BAS = WEBB ? (WEBB.split('=')[1] || 'https://jb873.github.io/Fysikbok/').replace(/\/?$/, '/')
  : 'file:///' + ROT.replace(/\\/g, '/') + '/';
const adressTill = fil => BAS + path.relative(ROT, fil).split(path.sep).join('/');

// Målskärmen: Chromebook 1366 × 768. I fönstret återstår ca 1366 × 633; 1366 × 768 i fönstret och i helskärm.
// Mobilen är inte målskärm men ska fungera.
const LAGEN = [
  { namn: '1366×633 i fönstret', B: 1366, H: 633, helskarm: false },
  { namn: '1366×768 i fönstret', B: 1366, H: 768, helskarm: false },
  { namn: '1366×768 i helskärm', B: 1366, H: 768, helskarm: true },
  { namn: 'mobil 390×664', B: 390, H: 664, helskarm: true, mobil: true }
];
// Chrome körs utan fönster (--headless=new). Då kan ingen sida gå i helskärm: proven av själva helskärmen ("boken öppnas
// i helskärm", "i helskärm igen") redovisas som "hoppat (inget fönsterläge)" i stället för ✗, och i stället provas att
// boken begär helskärm (requestFullscreen) när den öppnas med en gest (arbetsorder 36). Sidbrytningen i helskärmsmåttet
// (1366 × 768) provas som förut, i läget "1366×768 i helskärm" och i kontrolläget.
const CHROME_FLAGGOR = ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run'];
const UTAN_FONSTER = CHROME_FLAGGOR.some(f => f.startsWith('--headless'));

// Felen i den negativa verifieringen. Vart och ett ska ge rött i varje läge (V12: samma läge som grinden); "hackig
// bladvändning en gång" prövar omkörningen av bladvändningens tidsprov och ska ge grönt.
const FEL = {
  'js-fel': `addEventListener('load', () => setTimeout(() => { throw new Error('negativ verifiering: injicerat fel'); }, 0));`,
  'för tät sida': `addEventListener('DOMContentLoaded', () => { const s = document.createElement('style');
    s.textContent = '.sida { font-size: calc(var(--fs) * 1.45) !important; }'; document.head.append(s); });`,
  'stäng fungerar inte': `history.back = () => {};`,
  // motorns provkrok (bara med ?kontroll): en rubrik flyttas sist på sidan före – brytningsreglerna ska ge rött
  'rubrik sist på en sida': { adress: '&prova=rubrik-sist' },
  // en konstgjord fördröjning på 250 ms i varje brytning: medianen ska bli över 200 ms i varje läge
  'långsam brytning': { adress: '&prova=langsam' },
  // sidan blockeras 80 ms var 100:e ms medan bladvändningen mäts: tidsprovet ska bli rött i båda körningarna
  'hackig bladvändning': { blad: 'hack' },
  // samma, men bara i den första körningen: omkörningen ska ge grönt, och utskriften visa att den behövdes
  'hackig bladvändning en gång': { blad: 'forsta' },
  // Nästa steg (arbetsorder 11): motorns provkrokar flyttar en post först på nästa sida – i provboken, som har alla
  // rutorna. Brytningsreglerna (?kontroll) eller grindens mätning av rutorna ska ge rött.
  'formel skild från stycket': { adress: '&prova=formel-skild', dk: 'provbok', regel: /formel/i },
  'exempel delat fast det ryms': { adress: '&prova=exempel-delat', dk: 'provbok', regel: /exempel/i },
  'Svar ensam på ny sida': { adress: '&prova=svar-ensam', dk: 'provbok', regel: /Svar/ },
  'PROVA-ruta delad': { adress: '&prova=prova-delad', dk: 'provbok', regel: /PROVA/ },
  // Exempelregeln (arbetsorder 13): ett exempel delat före ett mellanled ska ge rött, och utan regeln (exemplet hålls
  // helt) blir sidan före exemplet i provbokens avsnitt "Provexempel efter ett kort stycke" tunn i alla lägen
  'exempel delat i ett mellanled': { adress: '&prova=exempel-mellanled', dk: 'provbok', regel: /mellanled/ },
  'exempel helt fast sidan blir tunn': { adress: '&prova=exempel-helt', dk: 'provbok', regel: /fylld/ },
  // Rutan "Vill du gå vidare?" (arbetsorder 13, del 2): motorns provkrok ger den första länken i varje ruta ett id som
  // inte finns i textboken – kontrolläget och grindens prov av länkarna ska ge rött
  'vidare-länk med fel id': { adress: '&prova=vidare-fel', dk: 'rorelse_och_kraft', regel: /vidare/i },
  // Länken i löptexten (2026-11-11): motorns provkrok låter länken i IV B Standard gå till en bok som inte finns på
  // avsnittssidan – kontrolläget och grindens prov av textlänkarna ska ge rött
  'textlänk till en bok som inte finns': { adress: '&prova=textlank-fel', dk: 'fall_kast_och_balans', regel: /textlänk|finns inte på avsnittssidan/i },
  // En punktlista får delas bara om den inte ryms (arbetsorder 16): motorns provkrok delar en lista som ryms på mitten
  'punktlista delad fast den ryms': { adress: '&prova=punktlista-delad', dk: 'provbok', regel: /punktlistan är delad, fast den ryms/ },
  // Exempelregeln för punktlistor (arbetsorder 31): listan delas bara mellan två punkter och med minst två punkter på
  // varje sida – motorns provkrok flyttar den sista punkten ensam till nästa sida; och utan regeln (listan hålls hel)
  // blir sidan före listan i provbokens avsnitt "Provpunktlista efter ett kort stycke" tunn
  'punktlista med en punkt ensam på en sida': { adress: '&prova=punkt-ensam', dk: 'provbok', regel: /bara en punkt på sidan/ },
  'punktlista hel fast sidan blir tunn': { adress: '&prova=punktlista-hel', dk: 'provbok', regel: /fylld/ },
  // Rader i följd får delas enligt 40 %-regeln, aldrig mitt i ett mellanled (arbetsorder 21): motorns provkrok delar
  // rader före en uträkning – i V A Fördjupning, där rader står i avsnitt över flera sidor (provbokens rader står sist
  // i ett avsnitt på en sida och kan inte flyttas)
  'rader delade i ett mellanled': { adress: '&prova=rader-mellanled', dk: 'tryck_arbete_och_maskiner', regel: /mellanled/ },
  // Helskärmsmåttet (arbetsorder 36): helskärmens egna prov hoppas över utan fönster, men en sida som är för hög i
  // Chromebookens helskärmsmått ska fortfarande ge rött. Texten görs för stor bara när fönstret är minst 700 px högt
  // (1366 × 768), och felet prövas i läget "1366×768 i helskärm": kontrolläget ska säga att en sida i helskärmsmåttet
  // inte får plats.
  'för hög sida i helskärmsmåttet': { kod: `addEventListener('DOMContentLoaded', () => { const s = document.createElement('style');
    s.textContent = '@media (min-height: 700px) { .sida { font-size: calc(var(--fs) * 1.45) !important; } }'; document.head.append(s); });`,
    lagen: ['1366×768 i helskärm'], matt: 'Chromebook i helskärm' }
};
// --negativ=<del av namnet>: bara de negativa proven vars namn innehåller texten
const NEGATIV_BARA = (process.argv.find(a => a.startsWith('--negativ=')) || '').slice(10);

const FANGA_FEL = `window.__fel = [];
  window.onerror = function (m, s, l) { window.__fel.push(m + ' (' + String(s).split('/').pop() + ':' + l + ')'); };
  window.addEventListener('unhandledrejection', function (e) { window.__fel.push('unhandledrejection: ' + (e.reason && e.reason.message || e.reason)); });`;

/* ---------- Delkapitlen på disken ---------- */

function delkapitel() {
  const ut = [];
  for (const omr of fs.readdirSync(ROT, { withFileTypes: true })) {
    if (!omr.isDirectory() || ['bokskal', 'mall', 'verktyg', 'node_modules'].includes(omr.name) || omr.name.startsWith('.')) continue;
    for (const d of fs.readdirSync(path.join(ROT, omr.name), { withFileTypes: true })) {
      const mapp = path.join(ROT, omr.name, d.name);
      if (d.isDirectory() && fs.existsSync(path.join(mapp, 'delkapitel.js'))) ut.push({ namn: `${omr.name}/${d.name}`, mapp, prov: false });
    }
  }
  const prov = path.join(__dirname, 'provbok');
  if (fs.existsSync(path.join(prov, 'delkapitel.js'))) ut.push({ namn: 'verktyg/provbok (provdata)', mapp: prov, prov: true });
  // Läget utan texter (en bok per nivå, texterna är dess avsnitt): det vanliga scenariot, inget provscenario
  const utan = path.join(__dirname, 'provbok-utan-texter');
  if (fs.existsSync(path.join(utan, 'delkapitel.js'))) ut.push({ namn: 'verktyg/provbok-utan-texter (provdata)', mapp: utan, prov: false });
  return BARA ? ut.filter(d => d.namn.includes(BARA)) : ut;
}

/* ---------- Strömformatet i innehållet (arbetsorder 30) ----------
 * Innehållsfilerna i V och VI, lästa på disken (ingen webbläsare): varje begrepp *ord|grundform* med skiljetecken utanför
 * markeringen, ett begrepp med stor bokstav har en grundform, varje figur ritas av motorn (namn och läge finns), avsnittens
 * och figurernas id är rätt skrivna och unika – och i VI samma som i källans huvud ("Avsnittens id"), i ordning. Negativt
 * prov (--negativ): felen i STROM_FEL läggs in ett i taget i en kopia i minnet, och kontrollen ska ge rött för just det. */
const STROM_MAPPAR = ['kraft_och_rorelse/tryck_arbete_och_maskiner/innehall', 'kraft_och_rorelse/ljud_och_ljus_repetition/innehall',
  'ljud_och_ljus/vad_ljud_ar/innehall', 'ljud_och_ljus/ljud_omkring_oss/innehall'];   // kapitel 2, avsnitt I (arbetsorder 33) och II (34)
const STROM_KALLOR = { 'kraft_och_rorelse/ljud_och_ljus_repetition/innehall/ljud': 'VI-A-Repetition-Ljud-alla-nivaer-v4.md',
  'kraft_och_rorelse/ljud_och_ljus_repetition/innehall/ljus': 'VI-B-Repetition-Ljus-alla-nivaer-v3.md',
  // kapitel 2 (arbetsorder 33): källorna i kallor/kap2/
  'ljud_och_ljus/vad_ljud_ar/innehall/ljud-ar-vibrationer': 'kap2/Kap2-I-A-Ljud-ar-vibrationer-alla-nivaer-v5.md',
  'ljud_och_ljus/vad_ljud_ar/innehall/ljudvagen': 'kap2/Kap2-I-B-Ljudvagen-alla-nivaer-v3.md',
  'ljud_och_ljus/vad_ljud_ar/innehall/ljudets-hastighet': 'kap2/Kap2-I-C-Ljudets-hastighet-alla-nivaer-v4.md',
  'ljud_och_ljus/vad_ljud_ar/innehall/orat-och-horseln': 'kap2/Kap2-I-D-Orat-och-horseln-alla-nivaer-v2.md',
  'ljud_och_ljus/ljud_omkring_oss/innehall/toner-och-klang': 'kap2/Kap2-II-A-Toner-och-klang-alla-nivaer-v3.md',
  'ljud_och_ljus/ljud_omkring_oss/innehall/resonans-och-instrument': 'kap2/Kap2-II-B-Resonans-och-instrument-alla-nivaer-v2.md',
  'ljud_och_ljus/ljud_omkring_oss/innehall/eko-ultraljud-och-doppler': 'kap2/Kap2-II-C-Eko-ultraljud-och-doppler-alla-nivaer-v2.md',
  'ljud_och_ljus/ljud_omkring_oss/innehall/ljudniva-buller-och-halsa': 'kap2/Kap2-II-D-Ljudniva-buller-och-halsa-alla-nivaer-v3.md' };
const VI_IN = 'kraft_och_rorelse/ljud_och_ljus_repetition/innehall/', K2_IN = 'ljud_och_ljus/vad_ljud_ar/innehall/', K2_II_IN = 'ljud_och_ljus/ljud_omkring_oss/innehall/';
const STROM_FEL = [
  { namn: 'saknad grundform (VI)', fil: VI_IN + 'ljud/standard.js', fran: '*Tinnitus|tinnitus*', till: '*Tinnitus*', regel: /grundform/ },
  { namn: 'skiljetecken innanför markering (VI)', fil: VI_IN + 'ljud/standard.js', fran: 'kallas *eko*.', till: 'kallas *eko.*', regel: /skiljetecken/ },
  { namn: 'okänd figur (VI)', fil: VI_IN + 'ljus/standard.js', fran: "lage: 'prisma'", till: "lage: 'regnbage'", regel: /figur/ },
  { namn: 'felaktig id (VI)', fil: VI_IN + 'ljud/enkel.js', fran: "id: 'doppler'", till: "id: 'dopler'", regel: /\bid\b/ },
  // kapitel 2 (arbetsorder 33): samma fyra fel i avsnitt I Vad ljud är
  { namn: 'saknad grundform (kap 2)', fil: K2_IN + 'orat-och-horseln/standard.js', fran: '*Ytterörat|ytteröra*', till: '*Ytterörat*', regel: /grundform/ },
  { namn: 'skiljetecken innanför markering (kap 2)', fil: K2_IN + 'ljud-ar-vibrationer/standard.js', fran: 'kallas *vakuum*.', till: 'kallas *vakuum.*', regel: /skiljetecken/ },
  { namn: 'okänd figur (kap 2)', fil: K2_IN + 'ljudvagen/standard.js', fran: "lage: 'horomraden'", till: "lage: 'horomrade'", regel: /figur/ },
  { namn: 'felaktig id (kap 2)', fil: K2_IN + 'ljudets-hastighet/enkel.js', fran: "id: 'i-luft'", till: "id: 'i_luft'", regel: /\bid\b/ },
  // avsnitt II (arbetsorder 34)
  { namn: 'saknad grundform (kap 2 II)', fil: K2_II_IN + 'toner-och-klang/standard.js', fran: '*Buller|buller*', till: '*Buller*', regel: /grundform/ },
  { namn: 'skiljetecken innanför markering (kap 2 II)', fil: K2_II_IN + 'resonans-och-instrument/standard.js', fran: 'kallas *luftpelare*.', till: 'kallas *luftpelare.*', regel: /skiljetecken/ },
  { namn: 'okänd figur (kap 2 II)', fil: K2_II_IN + 'eko-ultraljud-och-doppler/standard.js', fran: "lage: 'doppler-centrum'", till: "lage: 'doppler-centrumm'", regel: /figur/ },
  { namn: 'felaktig id (kap 2 II)', fil: K2_II_IN + 'ljudniva-buller-och-halsa/enkel.js', fran: "id: 'horselskador'", till: "id: 'horsel_skador'", regel: /\bid\b/ }
];
function stromFiler() {
  const ut = [];
  for (const m of STROM_MAPPAR) { const abs = path.join(ROT, m); if (!fs.existsSync(abs)) continue;
    for (const t of fs.readdirSync(abs)) for (const n of ['standard', 'enkel', 'fordjupning']) {
      const fil = path.join(abs, t, n + '.js'); if (fs.existsSync(fil)) ut.push({ fil: `${m}/${t}/${n}.js`, mapp: `${m}/${t}`, niva: n, kod: fs.readFileSync(fil, 'utf8') }); } }
  return ut;
}
// källans huvud: "# Avsnittens id: Standard och Enkel: a · b · … # Fördjupning: a · …" → { standard, enkel, fordjupning }
function kallansId(kalla) {
  const r = fs.readFileSync(path.join(ROT, 'kallor', kalla.includes('/') ? '' : 'kap3', kalla), 'utf8').replace(/\r/g, '').split('\n');
  const i = r.findIndex(l => /^# Avsnittens id:/.test(l)); if (i < 0) return null;
  let s = ''; for (let j = i; j < r.length && /^#/.test(r[j]) && !/^# ?=|^#\s*$/.test(r[j]); j++) s += ' ' + r[j].replace(/^#\s?/, '');
  const lista = t => (t || '').split('·').map(x => x.trim().replace(/\.$/, '')).filter(Boolean);
  const se = /Standard och Enkel:(.*?)Fördjupning:/.exec(s), fd = /Fördjupning:(.*)$/.exec(s);
  return se && fd ? { standard: lista(se[1]), enkel: lista(se[1]), fordjupning: lista(fd[1]) } : null;
}
function stromKoll(filer) {
  const F = {}, B0 = global.Bok, W0 = global.window;
  global.window = W0 || {}; global.Bok = { figur: (n, fn) => { F[n] = fn; }, illustration: () => {} };
  const fig = path.join(ROT, 'bokskal', 'figurer.js'); delete require.cache[require.resolve(fig)]; require(fig);
  const fel = [];
  try {
    for (const x of filer) {
      let data; global.Bok = { niva: (n, d) => { data = d; } };
      try { eval(x.kod); } catch (e) { fel.push(`${x.fil}: läses inte (${e.message})`); continue; }
      const f_ = m => fel.push(`${x.fil}: ${m}`), strangar = [], figurer = [], avsId = [];
      const samla = o => { if (typeof o === 'string') strangar.push(o); else if (Array.isArray(o)) o.forEach(samla); };
      for (const a of data.avsnitt) { avsId.push(a.id);
        for (const b of a.block) { ['text', 'rader', 'punkter', 'stycken'].forEach(k => samla(b[k])); if (b.typ === 'figur') figurer.push(b); } }
      for (const s of strangar) {
        if ((s.match(/\*/g) || []).length % 2) f_(`udda antal * i ”${s.slice(0, 60)}…”`);
        for (const m of s.matchAll(/\*([^*]+)\*/g)) { const [ord, gf] = m[1].split('|');
          if (/^[.,;:!?]|[.,;:!?]$/.test(ord) || (gf && /[.,;:!?]$/.test(gf))) f_(`skiljetecken innanför markeringen: *${m[1]}*`);
          if (!gf && /^[A-ZÅÄÖ]/.test(ord) && (x.mapp.startsWith(VI_IN) || x.mapp.startsWith(K2_IN) || x.mapp.startsWith(K2_II_IN))) f_(`begreppet *${ord}* har stor bokstav men ingen grundform`); } }   // (bara VI: ordern; V A har namnet *Arkimedes princip*)
      for (const b of figurer) {
        if (!F[b.namn]) { f_(`okänd figur ”${b.namn}” (${b.id})`); continue; }
        try { const r = F[b.namn](b); if (!r || !/<svg/.test(typeof r === 'string' ? r : r.svg)) f_(`figuren ${b.id} (${b.namn}${b.lage ? ' ' + b.lage : ''}) ritar ingen svg`); }
        catch (e) { f_(`figuren ${b.id} (${b.namn}${b.lage ? ' ' + b.lage : ''}) ritas inte: ${e.message}`); }
      }
      const idFel = (lista, re, slag) => { lista.forEach(i => { if (!re.test(String(i))) f_(`${slag} id ”${i}” är felskrivet`); });
        lista.filter((i, k) => lista.indexOf(i) !== k).forEach(i => f_(`${slag} id ”${i}” finns två gånger`)); };
      idFel(avsId, /^[a-z0-9]+(-[a-z0-9]+)*$/, 'avsnittets'); idFel(figurer.map(b => b.id), /^bild-[a-z]+\d+$/, 'figurens');
      const k = STROM_KALLOR[x.mapp] && kallansId(STROM_KALLOR[x.mapp]);
      if (STROM_KALLOR[x.mapp] && !k) f_('källans huvud saknar "Avsnittens id"');
      if (k && avsId.join(' · ') !== k[x.niva].join(' · ')) f_(`avsnittens id ${avsId.join(' · ')} är inte källans ${k[x.niva].join(' · ')}`);
    }
  } finally { global.Bok = B0; global.window = W0; }
  return fel;
}

/* ---------- Chrome via DevTools-protokollet ---------- */

const vanta = ms => new Promise(r => setTimeout(r, ms));
const hamtaJson = u => new Promise((ok, fel) => http.get(u, r => { let d = ''; r.on('data', c => d += c); r.on('end', () => { try { ok(JSON.parse(d)); } catch (e) { fel(e); } }); }).on('error', fel));

async function chrome() {
  const port = 9400 + Math.floor(Math.random() * 500);
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'bok-grind-profil-'));
  const proc = spawn(CHROME, [...CHROME_FLAGGOR,
    `--remote-debugging-port=${port}`, `--user-data-dir=${profil}`, 'about:blank'], { stdio: 'ignore' });
  let mal;
  for (let i = 0; i < 60 && !mal; i++) { await vanta(200); try { mal = (await hamtaJson(`http://127.0.0.1:${port}/json`)).find(t => t.type === 'page'); } catch (e) { /* startar */ } }
  if (!mal) throw new Error('Chrome startade inte (' + CHROME + ')');
  const ws = new WebSocket(mal.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const vant = {}, undantag = [];
  ws.onmessage = m => {
    const d = JSON.parse(m.data);
    if (d.id && vant[d.id]) { vant[d.id](d); delete vant[d.id]; }
    if (d.method === 'Runtime.exceptionThrown') { const x = d.params.exceptionDetails, st = x.stackTrace && x.stackTrace.callFrames ? x.stackTrace.callFrames.slice(0, 4).map(c => (c.functionName || '(anonym)') + ' ' + String(c.url).split('/').pop() + ':' + (c.lineNumber + 1)).join(' < ') : String(x.url || '').split('/').pop() + ':' + (x.lineNumber + 1);
      undantag.push((x.exception ? x.exception.description.split('\n')[0] : x.text) + ' [' + st + ']'); }
    // __gest({x, y}) i sidan: ett riktigt musklick där, som en elevs – det ger webbläsaren en äkta användargest
    // (helskärm kräver en sådan, och en programmerad gest gäller bara några sekunder).
    if (d.method === 'Runtime.bindingCalled' && d.params.name === '__gest') {
      const { x, y } = JSON.parse(d.params.payload);
      // stängs Chrome mitt i klicket blir det ett undantag i körningen (rött), inte en krasch i grinden
      ['mousePressed', 'mouseReleased'].reduce((p, type) => p.then(() => send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1 })), Promise.resolve())
        .catch(e => undantag.push('grinden: ' + e.message));
    }
  };
  // Ett anrop som inte får svar (Chrome har stängts eller hängt sig) ger fel efter två minuter – grinden blir röd
  // i stället för att vänta för evigt.
  ws.onclose = () => Object.keys(vant).forEach(i => vant[i]({ error: 'Chrome stängdes' }));
  const send = (method, params = {}) => new Promise((ok, fel) => {
    const i = ++id, t = setTimeout(() => { delete vant[i]; fel(new Error(method + ': inget svar från Chrome')); }, 120000);
    vant[i] = d => { clearTimeout(t); d.error && d.error === 'Chrome stängdes' ? fel(new Error(method + ': Chrome stängdes')) : ok(d); };
    if (ws.readyState !== 1) return vant[i]({ error: 'Chrome stängdes' });
    ws.send(JSON.stringify({ id: i, method, params }));
  });
  const ev = async uttryck => {
    const svar = (await send('Runtime.evaluate', { expression: uttryck, awaitPromise: true, returnByValue: true, userGesture: true })).result;
    if (svar.exceptionDetails) throw new Error('i sidan: ' + (svar.exceptionDetails.exception ? svar.exceptionDetails.exception.description : svar.exceptionDetails.text));
    return svar.result.value;
  };
  const stang = async () => {
    try { ws.close(); } catch (e) { /* redan stängd */ }
    // Har Chrome redan avslutats kommer inget nytt 'exit' – vänta då inte (annars hänger grinden)
    if (proc.exitCode === null && proc.signalCode === null) {
      proc.kill();
      await Promise.race([new Promise(r => proc.once('exit', r).once('error', r)), vanta(10000)]);
    }
    try { fs.rmSync(profil, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }); } catch (e) { /* Windows släpper filen senare; tmp städas av systemet */ }
  };
  return { send, ev, undantag, stang };
}

/* ---------- Figurerna i den öppna boken: rörelsespår och kraftpar mäts ----------
 * Bläddrar igenom boken och mäter
 *  - rörelsespåren: likformig lika avstånd, accelererande avstånd som växer jämnt, retarderad avstånd som krymper
 *    jämnt, olikformig avstånd som både växer och krymper; strålens pilspets till höger om prickarna;
 *  - kraftparen: två föremål och två pilar, var och en från sitt föremåls mitt, lika långa och motriktade – mot det
 *    andra föremålet (drag) eller ifrån det (knuff);
 *  - friktionen: ytorna hakar i varandra utan att gå in i varandra, strecklinjerna korsar inga rubriker, draget åt
 *    höger och friktionen åt vänster, lika långa och från samma punkt på blocket; samma ytor ger samma mönster;
 *  - bildpilarna: fotot laddas, pilarna i lika är lika långa (±1 px på skärmen), ingen pil eller etikett utanför
 *    utsnittet, etiketterna överlappar inte varandra;
 *  - två paneler (fallande_hiss, jord_och_mane): lika stora, ingen text under 14 px på skärmen och ingen som överlappar
 *    en annan – bredvid varandra eller staplade (mobilen);
 *  - jorden och månen: pilarna i tyngdernas förhållande (±1 px), personerna lika stora, samma massa i båda.
 * Klistras in i scenarierna (behöver v och $$). */
const FIGURKOLL = String.raw`const figurKoll = async () => {
    const sett = new Map(), par = new Map(), fr = new Map(), bp = new Map(), tal = new Set(), st = new Map(), fp = new Map(), hs = new Map(), pn = new Map(), jm = new Map(), ry = new Map(), ng = new Map(), rk = new Map(), kc = new Map(), tb = new Map(), tr = new Map(), en = new Map(), lj = new Map();
    // g och N/kg i rubriker, innehållet, sidhuvudet och tabellhuvuden: i vanlig stil med rätt skiftläge (span.sym i
    // EB Garamond, inte kapitäler – där blir g ett G och kg KG)
    const SYMKOLL = /(?<![\p{L}\p{N}\/])(?:N\/kg|g)(?![\p{L}\p{N}\/²³])/gu, symSett = new Set(), symFel = [];
    // ett vanligt (brytbart) mellanslag mellan ett tal och en enhet, eller i ett tusental, i texten (inte i figurerna)
    const BRYTS = /\d (?:\d{3}(?!\d)|(?:km\/h|m\/s|g\/cm³|kg\/m³|cm³|m³|°C|kN|N|kJ|J|kW|W|kg|g|km|cm|mm|m|min|h|s|%)(?![\p{L}\p{N}]))/u;
    for (let n = 1; n <= $$('.lr-sida').length; n++) {
      Bok.gaTill(n); await v(30);
      $$('.scen .sida[data-nr="' + n + '"] .sidinnehall').forEach(s => {
        const w = document.createTreeWalker(s, NodeFilter.SHOW_TEXT); let t;
        while ((t = w.nextNode())) if (!t.parentElement.closest('svg')) { const m = t.textContent.match(BRYTS); if (m) tal.add('s. ' + n + ': ”' + t.textContent.slice(Math.max(0, m.index - 12), m.index + 10) + '”'); }
      });
      $$('.scen .sida[data-nr="' + n + '"]').forEach(s => s.querySelectorAll('h1, h2, h3, h4, thead th, .toc-titel, .sh-namn, .boktitel').forEach(e => {
        const w = document.createTreeWalker(e, NodeFilter.SHOW_TEXT); let t;
        while ((t = w.nextNode())) for (const m of t.textContent.matchAll(SYMKOLL)) {
          const p = t.parentElement, cs = getComputedStyle(p), id = e.tagName + ' ' + m[0] + ' i ”' + e.textContent.trim().slice(0, 50) + '”';
          if (symSett.has(id)) continue;
          symSett.add(id);
          if (!(p.classList.contains('sym') && p.textContent === m[0] && cs.fontVariantCaps === 'normal' && cs.textTransform === 'none' && cs.fontFamily.includes('EB Garamond')))
            symFel.push('s. ' + n + ': ' + id + ' (' + cs.fontFamily.split(',')[0] + ', ' + cs.fontVariantCaps + ')');
        }
      }));
      $$('.scen svg[data-rorelse]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (!sett.has(id)) sett.set(id, { typ: s.dataset.rorelse, xs: [...s.querySelectorAll('circle.fig-prick')].map(c => c.cx.baseVal.value),
          spets: Math.max(...[...s.querySelectorAll('.fig-pilspets')].flatMap(p => [...p.points].map(q => q.x))) });
      });
      $$('.scen svg[data-kraftpar]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (!par.has(id)) par.set(id, { satt: s.dataset.kraftpar,
          mitt: [...s.querySelectorAll('rect.fig-foremal')].map(r => [r.x.baseVal.value + r.width.baseVal.value / 2, r.y.baseVal.value + r.height.baseVal.value / 2]),
          pilar: [...s.querySelectorAll('g.fig-kraftpar-pil')].map(g => { const l = g.querySelector('line'), t = g.querySelector('polygon').points[0];
            return { x1: l.x1.baseVal.value, y1: l.y1.baseVal.value, x2: t.x, y2: t.y }; }) });
      });
      $$('.scen svg[data-friktion]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (fr.has(id)) return;
        const punkter = k => { const p = s.querySelector('polyline.' + k); return p ? [...p.points].map(q => [q.x, q.y]) : []; };
        const ytlinjer = [...s.querySelectorAll('polyline.fig-ytlinje')];
        fr.set(id, { ytor: s.dataset.friktion, ritad: !!s.querySelector('polygon.fig-yta-foremal') && !!s.querySelector('polygon.fig-yta-underlag'),
          rubriker: [...s.querySelectorAll('text.fig-rubrik')].map(t => { const b = t.getBBox(); return [b.x, b.y, b.x + b.width, b.y + b.height, t.textContent]; }),
          linjer: [...s.querySelectorAll('line.fig-lupplinje')].map(l => [l.x1.baseVal.value, l.y1.baseVal.value, l.x2.baseVal.value, l.y2.baseVal.value]),
          undersida: ytlinjer[0] ? [...ytlinjer[0].points].map(q => [q.x, q.y]) : [], yta: punkter('fig-ytlinje-underlag'),
          pilar: [...s.querySelectorAll('g.fig-friktion-pil')].map(g => { const l = g.querySelector('line'), t = g.querySelector('polygon').points[0];
            return { kraft: g.dataset.kraft, x1: l.x1.baseVal.value, y1: l.y1.baseVal.value, x2: t.x, y2: t.y }; }) });
      });
      // stoppsträckan: staplarnas delar mot värdena, totalen och markeringen (mäts direkt, i skärmens pixlar)
      $$('.scen svg[data-stoppstracka]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (st.has(id)) return;
        const r = s.getBoundingClientRect(), vb = s.viewBox.baseVal, sk = Math.min(r.width / vb.width, r.height / vb.height);
        const x0 = +s.dataset.x0, k = +s.dataset.k, f_ = [];
        s.querySelectorAll('g.fig-stopp-rad').forEach((g, i) => {
          const re = +g.dataset.reaktion, br = +g.dataset.broms, a = g.querySelector('rect.fig-stopp-reaktion'), b = g.querySelector('rect.fig-stopp-broms');
          const tot = g.querySelector('text.fig-stopp-total').textContent, totV = parseFloat(tot.replace(',', '.'));
          if (Math.abs(a.x.baseVal.value - x0) * sk > 1 || Math.abs(a.width.baseVal.value - re * k) * sk > 1) f_.push('rad ' + (i + 1) + ': reaktionssträckan');
          if (Math.abs(b.x.baseVal.value - (x0 + re * k)) * sk > 1 || Math.abs(b.width.baseVal.value - br * k) * sk > 1) f_.push('rad ' + (i + 1) + ': bromssträckan');
          if (Math.abs(totV - (re + br)) > 0.001 || !/ /.test(tot)) f_.push('rad ' + (i + 1) + ': totalen ”' + tot + '”');
        });
        const m = s.querySelector('line.fig-stopp-markering');
        if (m && Math.abs(m.x1.baseVal.value - (x0 + +m.dataset.varde * k)) * sk > 1) f_.push('markeringen på fel ställe');
        st.set(id, { rader: s.querySelectorAll('g.fig-stopp-rad').length, markering: !!m, fel: f_ });
      });
      // den fallande hissen: tyngdkraften lika lång i båda panelerna, och i den stilla hissen lika lång som normalkraften
      // (åt motsatt håll); i den fallande ingen normalkraft
      $$('.scen [data-fallande-hiss]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (hs.has(id)) return;
        const pil = g => { const l = g.querySelector('line'), t = g.querySelector('polygon').points[0]; return t.y - l.y1.baseVal.value; };
        const paneler = [...s.querySelectorAll('g.fig-hiss')].map(g => ({ faller: g.dataset.faller === 'true',
          tyngd: [...g.querySelectorAll('g.fig-hiss-pil[data-kraft="tyngd"]')].map(pil), normal: [...g.querySelectorAll('g.fig-hiss-pil[data-kraft="normal"]')].map(pil) }));
        const f_ = [], still = paneler.find(p => !p.faller), faller = paneler.find(p => p.faller);
        if (!still || !faller || still.tyngd.length !== 1 || faller.tyngd.length !== 1) f_.push('panelerna saknar tyngdkraften');
        else {
          if (Math.abs(still.tyngd[0] - faller.tyngd[0]) > 0.5) f_.push('tyngdkraften olika lång i panelerna: ' + still.tyngd[0] + '/' + faller.tyngd[0]);
          if (still.normal.length !== 1 || Math.abs(still.normal[0] + still.tyngd[0]) > 0.5 || !(still.tyngd[0] > 0)) f_.push('normalkraften i den stilla hissen: ' + still.normal.join(','));
          if (faller.normal.length) f_.push('normalkraft i den fallande hissen');
        }
        hs.set(id, { fel: f_ });
      });
      // två paneler (fallande_hiss, jord_och_mane): lika stora på skärmen, ingen text under 14 px – bredvid varandra
      // eller staplade (mobilen) – och ingen text som överlappar en annan i samma panel
      $$('.scen .fig-paneler').forEach(w => {
        const id = w.closest('[data-post]').dataset.post;
        if (pn.has(id)) return;
        const f_ = [], sv = [...w.querySelectorAll(':scope > svg')];
        const sk = sv.map(s => s.getBoundingClientRect().width / s.viewBox.baseVal.width);
        if (sv.length !== 2 || Math.abs(sk[0] - sk[1]) > 0.002) f_.push('panelerna är olika stora: ' + sk.map(k => k.toFixed(3)).join('/'));
        const minPx = Math.min(...sv.flatMap((s, i) => [...s.querySelectorAll('text')].map(t => parseFloat(getComputedStyle(t).fontSize) * sk[i])));
        if (!(minPx >= 13.95)) f_.push('en text är bara ' + minPx.toFixed(1) + ' px på skärmen (minst 14)');
        sv.forEach((s, i) => { const r = [...s.querySelectorAll('text')].map(t => [t.textContent, t.getBoundingClientRect()]);
          r.forEach(([a, p], j) => r.slice(j + 1).forEach(([b, q]) => { if (p.left < q.right - 0.5 && q.left < p.right - 0.5 && p.top < q.bottom - 0.5 && q.top < p.bottom - 0.5) f_.push('panel ' + (i + 1) + ': ”' + a + '” och ”' + b + '” överlappar'); })); });
        const r0 = sv[0].getBoundingClientRect(), r1 = sv[1] ? sv[1].getBoundingClientRect() : r0;
        pn.set(id, { fig: w.dataset.paneler, staplad: r1.top >= r0.bottom - 0.5, minPx, fel: f_ });
      });
      // jorden och månen: pilen på månen = pilen på jorden × tyngden på månen / tyngden på jorden (±1 px på skärmen),
      // samma person lika stor i båda, samma massa i båda och etiketterna ur data
      $$('.scen [data-jord-och-mane]').forEach(w => {
        const id = w.closest('[data-post]').dataset.post;
        if (jm.has(id)) return;
        const f_ = [], sv = [...w.querySelectorAll(':scope > svg')], sk = sv.map(s => s.getBoundingClientRect().width / s.viewBox.baseVal.width);
        const p = sv.map((s, i) => { const g = s.querySelector('g.fig-jm-pil'), l = g.querySelector('line'), t = g.querySelector('polygon').points[0];
          const gb = s.querySelector('g.fig-gubbe').getBBox();
          return { tyngd: +g.dataset.tyngd, px: (t.y - l.y1.baseVal.value) * sk[i], lodrat: Math.abs(t.x - l.x1.baseVal.value) < 0.01 && t.y > l.y1.baseVal.value,
            gubbe: [gb.width * sk[i], gb.height * sk[i]], massa: s.querySelector('text.fig-jm-massa').textContent.replace(/\s/g, ' '),
            tyngdText: s.querySelector('text.fig-jm-tyngd').textContent.replace(/\s/g, ' '), vag: s.querySelector('text.fig-jm-vag').textContent.replace(/\s/g, ' ') }; });
        if (p.length !== 2) f_.push(p.length + ' paneler');
        else {
          const [j, m] = p, bor = j.px * m.tyngd / j.tyngd;
          if (!(Math.abs(m.px - bor) <= 1)) f_.push('pilen på månen är ' + m.px.toFixed(1) + ' px, ska vara ' + bor.toFixed(1));
          if (!j.lodrat || !m.lodrat) f_.push('en pil pekar inte rakt nedåt');
          if (Math.abs(j.gubbe[0] - m.gubbe[0]) > 0.5 || Math.abs(j.gubbe[1] - m.gubbe[1]) > 0.5) f_.push('personerna är olika stora');
          if (j.massa !== m.massa || !/^massa \d/.test(j.massa)) f_.push('massan: ”' + j.massa + '” / ”' + m.massa + '”');
          p.forEach(x => { if (x.tyngdText !== 'tyngd ' + String(x.tyngd).replace('.', ',') + ' N') f_.push('etiketten ”' + x.tyngdText + '” för ' + x.tyngd + ' N'); });
        }
        jm.set(id, { vag: p.map(x => x.vag), fel: f_ });
      });
      // friktion i paneler: i varje panel ligger ytorna an utan att gå in i varandra, och panelen har en rubrik
      $$('.scen svg[data-friktion-paneler]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (fp.has(id)) return;
        const f_ = [];
        s.querySelectorAll('g.fig-friktion-panel').forEach((g, i) => {
          const u = [...g.querySelector('polyline.fig-ytlinje:not(.fig-ytlinje-underlag)').points], y = [...g.querySelector('polyline.fig-ytlinje-underlag').points];
          const glapp = y.map((p, j) => p.y - u[j].y);
          if (u.length !== y.length || glapp.some(v => v < 0)) f_.push('panel ' + (i + 1) + ': föremålet går ner i underlaget');
          else if (!glapp.some(v => v < 1.5)) f_.push('panel ' + (i + 1) + ': ytorna ligger inte an');
          if (!g.querySelector('text.fig-rubrik') || !g.querySelector('text.fig-rubrik').textContent.trim()) f_.push('panel ' + (i + 1) + ': ingen rubrik');
        });
        fp.set(id, { paneler: s.querySelectorAll('g.fig-friktion-panel').length, fel: f_ });
      });
      // rymdfigurerna (kapitel I, order 9, 2026-11-07): det figuren påstår, mätt i dess egna element – storlekarna i samma
      // skala, prickarna i proportion till avstånden, pilarna mot jordens mitt, månens belysta halva mot solen och
      // faserna, jordaxlarna lika lutade åt samma håll och sommaren där norra halvklotet lutar mot solen; inga texter
      // som överlappar eller står utanför figuren
      $$('.scen svg[data-rymd]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (ry.has(id)) return;
        const typ = s.dataset.rymd, f_ = [];
        if (typ === 'himlakroppar_i_skala') {
          const k = [...s.querySelectorAll('circle.fig-kropp, circle.fig-kant')].map(c => ({ r: c.r.baseVal.value, d: +c.dataset.d })).filter(x => x.r >= 1);
          const kv = k.map(x => x.r * 2 / x.d), hi = Math.max(...kv), lo = Math.min(...kv);
          if (k.length < 2 || (hi - lo) / hi > 0.01) f_.push('storlekarna står inte i samma skala (' + k.length + ' kroppar)');
        } else if (typ === 'avstandslinje') {
          const sol = s.querySelector('.fig-ae-sol'), x0 = +sol.dataset.x0, k = +sol.dataset.k, p = [...s.querySelectorAll('circle.fig-ae-prick')];
          p.forEach(c => { if (Math.abs(c.cx.baseVal.value - (x0 + +c.dataset.ae * k)) > 0.2) f_.push('pricken för ' + c.dataset.ae + ' AE står fel'); });
          if (p.length < 2) f_.push(p.length + ' prickar');
        } else if (typ === 'jordklot_tyngd') {
          const g = [...s.querySelectorAll('g.fig-tyngd')];
          if (g.length < 3) f_.push(g.length + ' pilar');
          g.forEach((e, i) => { const l = e.querySelector('line'), t = e.querySelector('polygon').points[0], cx = +e.dataset.cx, cy = +e.dataset.cy;
            const v1 = Math.atan2(t.y - l.y1.baseVal.value, t.x - l.x1.baseVal.value), v2 = Math.atan2(cy - l.y1.baseVal.value, cx - l.x1.baseVal.value);
            if (Math.abs(Math.atan2(Math.sin(v1 - v2), Math.cos(v1 - v2))) > 0.02) f_.push('pil ' + (i + 1) + ' pekar inte mot jordens mitt'); });
        } else if (typ === 'manfaser') {
          const m = [...s.querySelectorAll('g.fig-mane')], o = [...s.querySelectorAll('g.fig-mane-sedd')];
          if (m.length !== 8 || o.length !== 8) f_.push(m.length + ' månar, ' + o.length + ' i ytterringen');
          m.forEach(g => { const c = g.querySelector('circle').getBBox(), l = g.querySelector('.fig-mane-ljus').getBBox();
            if (!(l.x + l.width / 2 < c.x + c.width / 2 - 1)) f_.push('månen i läget ' + g.dataset.vinkel + '° är inte belyst mot solen'); });
          o.forEach(g => { const v = +g.dataset.vinkel, bor = Math.round((1 + Math.cos(v * Math.PI / 180)) / 2 * 100) / 100;
            if (Math.abs(+g.dataset.andel - bor) > 0.011) f_.push('fasen i läget ' + v + '° (' + g.dataset.andel + ', ska vara ' + bor + ')'); });
        } else if (typ === 'arstider') {
          const g = [...s.querySelectorAll('g.fig-arstid')];
          const lut = g.map(e => { const l = e.querySelector('line.fig-axel'); return Math.atan2(l.x2.baseVal.value - l.x1.baseVal.value, l.y1.baseVal.value - l.y2.baseVal.value) * 180 / Math.PI; });
          if (g.length !== 4 || lut.some(x => Math.abs(x - +g[0].dataset.lutning) > 0.3)) f_.push('axlarna: ' + lut.map(x => x.toFixed(1)).join('/') + ' (ska vara ' + (g[0] && g[0].dataset.lutning) + ')');
          s.querySelectorAll('g.fig-arstid-text').forEach(t => { const e = s.querySelector('g.fig-arstid[data-vinkel="' + t.dataset.vinkel + '"]'), mot = e ? +e.dataset.mot : 0, ord = t.textContent;
            if (/Sommar/.test(ord) ? !(mot > 0) : /Vinter/.test(ord) ? !(mot < 0) : false) f_.push('”' + ord + '” står vid fel läge'); });
        }
        const vb = s.viewBox.baseVal, tx = [...s.querySelectorAll('text')].map(t => [t.textContent, t.getBBox()]);
        tx.forEach(([a, p], j) => {
          if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
          tx.slice(j + 1).forEach(([b, q]) => { if (p.x < q.x + q.width - 0.5 && q.x < p.x + p.width - 0.5 && p.y < q.y + q.height - 0.5 && q.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
        });
        ry.set(id, { typ, fel: f_ });
      });
      // Diagram och vektorer (Nästa steg, arbetsorder 11), mätta i figurens egna element:
      //  - diagram_graf: varje markerad punkt ligger på sin koordinat, räknad ur rutnätet (linjerna vid 0 och vid max
      //    på varje axel) och, om de finns, axelns tal; grafen går genom punkterna; varje skuggad ytas hörn ligger på
      //    tidsaxeln eller på grafen, och dess övre kant följer grafen (mitten av kanten på grafen);
      //  - vektor_rutnat: varje pil börjar där den förra slutar, och resultanten går från den första pilens början till
      //    den sista pilens spets;
      //  - båda: ingen text under 14 px på skärmen, utanför figuren eller över en annan text.
      $$('.scen svg[data-diagram-graf], .scen svg[data-vektor-rutnat]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (ng.has(id)) return;
        const f_ = [], typ = s.dataset.diagramGraf ? 'diagram_graf' : 'vektor_rutnat', N = 0.6;
        const nara = (a, b) => Math.abs(a - b) <= N;
        if (typ === 'diagram_graf') {
          s.querySelectorAll('g.fig-diagram').forEach(g => {
            const vl = [...g.querySelectorAll('line.fig-rutnat')].filter(l => nara(l.x1.baseVal.value, l.x2.baseVal.value)).map(l => l.x1.baseVal.value).sort((a, b) => a - b);
            const hl = [...g.querySelectorAll('line.fig-rutnat')].filter(l => nara(l.y1.baseVal.value, l.y2.baseVal.value)).map(l => l.y1.baseVal.value).sort((a, b) => b - a);
            const grafer = [...g.querySelectorAll('path.fig-graf')], graf = { isPointInStroke: p => grafer.some(x => x.isPointInStroke(p)) };
            // axlarna: rutnätets första och sista linje är 0 och axelns största värde (data-xmax/-ymax, ur data); talen
            // på axlarna och punkterna ska stå där värdena hamnar på den skalan
            const x0 = vl[0], y0 = hl[0], kx = (vl[vl.length - 1] - x0) / +g.dataset.xmax, ky = (y0 - hl[hl.length - 1]) / +g.dataset.ymax;
            g.querySelectorAll('text[data-x]').forEach(t => { if (!nara(+t.getAttribute('x'), x0 + +t.dataset.x * kx)) f_.push('talet ' + t.dataset.x + ' på den vågräta axeln står fel'); });
            g.querySelectorAll('text[data-y]').forEach(t => { if (!nara(+t.getAttribute('y') - 6, y0 - +t.dataset.y * ky)) f_.push('talet ' + t.dataset.y + ' på den lodräta axeln står fel'); });
            g.querySelectorAll('circle.fig-graf-punkt').forEach(c => {
              const X = +c.dataset.x, Y = +c.dataset.y, cx = c.cx.baseVal.value, cy = c.cy.baseVal.value;
              if (!nara(cx, x0 + X * kx) || !nara(cy, y0 - Y * ky)) f_.push('punkten (' + X + '; ' + Y + ') står inte på sin koordinat');
              if (!graf.isPointInStroke(new DOMPoint(cx, cy))) f_.push('grafen går inte genom punkten (' + X + '; ' + Y + ')');
            });
            // ytorna: hörnen på tidsaxeln eller på grafen, och mitten av varje kant som inte ligger på axeln eller är lodrät på grafen
            // (arbetsorder 13: en yta kan ligga på en annan – rektangeln under triangeln – och då får hörnet eller kanten
            // ligga på den andra ytans kant; varje hörn står på sin koordinat i data, och ytans namn står inne i ytan)
            const paGraf = (x, y) => graf.isPointInStroke(new DOMPoint(x, y));
            const ytor = [...g.querySelectorAll('polygon.fig-yta')].map(p => [...p.points].map(q => [q.x, q.y]));
            const paStracka = (x, y, [a, b], [c, d]) => { const L = (c - a) ** 2 + (d - b) ** 2, t = L ? Math.max(0, Math.min(1, ((x - a) * (c - a) + (y - b) * (d - b)) / L)) : 0;
              return Math.hypot(x - a - t * (c - a), y - b - t * (d - b)) <= N; };
            const paAnnanYta = (x, y, j) => ytor.some((h, k) => k !== j && h.some((p, i) => paStracka(x, y, p, h[(i + 1) % h.length])));
            g.querySelectorAll('polygon.fig-yta').forEach((p, j) => {
              const h = ytor[j];
              h.forEach(([x, y]) => { if (!nara(y, y0) && !paGraf(x, y) && !paAnnanYta(x, y, j)) f_.push('yta ' + (j + 1) + ': hörnet (' + x.toFixed(1) + ', ' + y.toFixed(1) + ') ligger varken på tidsaxeln, på grafen eller på en annan yta'); });
              h.forEach(([x, y], k) => { const [x2, y2] = h[(k + 1) % h.length];
                if (nara(y, y0) && nara(y2, y0)) return;                 // på tidsaxeln
                if (nara(x, x2)) return;                                 // en lodrät kant
                if (!paGraf((x + x2) / 2, (y + y2) / 2) && !paAnnanYta((x + x2) / 2, (y + y2) / 2, j)) f_.push('yta ' + (j + 1) + ': den övre kanten följer inte grafen'); });
              if (p.dataset.punkter) p.dataset.punkter.split(' ').forEach((q, k) => { const [X, Y] = q.split(',').map(Number);
                if (!h[k] || !nara(h[k][0], x0 + X * kx) || !nara(h[k][1], y0 - Y * ky)) f_.push('yta ' + (j + 1) + ': hörnet (' + X + '; ' + Y + ') står inte på sin koordinat'); });
              const namn = g.querySelector('text.fig-yta-namn[data-yta="' + p.dataset.yta + '"]');
              if (namn) { const b = namn.getBBox(), in_ = (x, y) => p.isPointInFill(new DOMPoint(x, y));
                if (![[b.x, b.y], [b.x + b.width, b.y], [b.x, b.y + b.height], [b.x + b.width, b.y + b.height]].every(([x, y]) => in_(x, y))) f_.push('yta ' + (j + 1) + ': namnet ”' + namn.textContent + '” står inte inne i ytan'); }
            });
          });
        } else {
          const pil = e => { const l = e.querySelector('line'), t = e.querySelector('polygon').points[0]; return { a: [l.x1.baseVal.value, l.y1.baseVal.value], b: [t.x, t.y] }; };
          const P = [...s.querySelectorAll('g.fig-vektor:not([data-vektor="resultant"])')].map(pil), R = s.querySelector('g.fig-vektor[data-vektor="resultant"]');
          P.slice(1).forEach((p, k) => { if (!nara(p.a[0], P[k].b[0]) || !nara(p.a[1], P[k].b[1])) f_.push('pil ' + (k + 2) + ' börjar inte där pil ' + (k + 1) + ' slutar'); });
          if (R) { const r = pil(R);
            if (!nara(r.a[0], P[0].a[0]) || !nara(r.a[1], P[0].a[1])) f_.push('resultanten börjar inte där den första pilen börjar');
            if (!nara(r.b[0], P[P.length - 1].b[0]) || !nara(r.b[1], P[P.length - 1].b[1])) f_.push('resultanten slutar inte vid den sista pilens spets'); }
          if (!P.length) f_.push('inga pilar');
        }
        const vb = s.viewBox.baseVal, skala = s.getBoundingClientRect().width / vb.width, tx = [...s.querySelectorAll('text')].map(t => [t.textContent, t.getBBox(), parseFloat(getComputedStyle(t).fontSize) * skala]);
        tx.forEach(([a, p, px], j) => {
          if (px < 13.95) f_.push('”' + a + '” är ' + px.toFixed(1) + ' px');
          if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
          tx.slice(j + 1).forEach(([b, q]) => { if (p.x < q.x + q.width - 0.5 && q.x < p.x + p.width - 0.5 && p.y < q.y + q.height - 0.5 && q.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
        });
        ng.set(id, { typ, minPx: Math.min(...tx.map(x => x[2])), fel: f_ });
      });
      // Kaströrelse och cirkelrörelse (IV C, arbetsorder 16), mätt i figurernas egna element:
      //  - kastbana hoghus: den släppta och den kastade bollen på samma höjd vid varje tidpunkt (och den streckade linjen
      //    mellan dem), den släppta rakt ned (samma x) och den kastade lika långt framåt varje steg;
      //  - kastbana komposanter: pilarna från bollen; de vågräta lika långa, de lodräta 0 vid start och lika mycket
      //    längre varje sekund;
      //  - kastbana vinklar: vinkeln närmast 45° landar längst, vinklar som tillsammans är 90° (30° och 60°) landar på
      //    samma ställe (±1 px på skärmen), och den största vinkeln når högst;
      //  - cirkelrorelse: kraftpilen pekar mot mitten (den ritade mitten), och den raka banan börjar på cirkeln och är
      //    vinkelrät mot radien där (tangenten), inte utåt;
      //  - alla: ingen text under 14 px på skärmen, utanför figuren eller över en annan text.
      $$('.scen svg[data-kastbana], .scen svg[data-cirkelrorelse]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (kc.has(id)) return;
        const f_ = [], N = 0.6, nara = (a, b, t = N) => Math.abs(a - b) <= t, sk = s.getBoundingClientRect().width / s.viewBox.baseVal.width;
        const pilAv = g => { const l = g.querySelector('line'), t = g.querySelector('polygon'); return l && t ? { a: [l.x1.baseVal.value, l.y1.baseVal.value], b: [t.points[0].x, t.points[0].y] } : null; };
        const vinkelFel = (u, v) => { const a = Math.atan2(u[1], u[0]) - Math.atan2(v[1], v[0]); return Math.abs(Math.atan2(Math.sin(a), Math.cos(a))); };
        const typ = s.dataset.kastbana ? 'kastbana ' + s.dataset.kastbana : 'cirkelrorelse ' + s.dataset.cirkelrorelse;
        if (s.dataset.kastbana === 'hoghus') {
          const B = k => [...s.querySelectorAll('circle[data-boll="' + k + '"]')].map(c => ({ t: +c.dataset.t, x: c.cx.baseVal.value, y: c.cy.baseVal.value }));
          const sl = B('slappt'), ka = B('kastad');
          if (sl.length < 3 || sl.length !== ka.length) f_.push(sl.length + ' släppta och ' + ka.length + ' kastade bollar');
          sl.forEach((b, i) => { const k = ka[i];
            if (!k || k.t !== b.t || !nara(k.y, b.y)) f_.push('bollarna står inte på samma höjd vid ' + b.t + ' s');
            if (!nara(b.x, sl[0].x)) f_.push('den släppta bollen faller inte lodrätt (vid ' + b.t + ' s)'); });
          s.querySelectorAll('line.fig-kast-hojd').forEach(l => { const b = sl.find(x => x.t === +l.dataset.t);
            if (!b || !nara(l.y1.baseVal.value, b.y) || !nara(l.y2.baseVal.value, b.y)) f_.push('den streckade linjen vid ' + l.dataset.t + ' s ligger inte på bollarnas höjd'); });
          const per = ka.length > 1 ? (ka[1].x - ka[0].x) / (ka[1].t - ka[0].t) : 0;
          ka.slice(1).forEach((k, i) => { const dx = k.x - ka[i].x, bor = per * (k.t - ka[i].t);
            if (!(dx > 0) || !nara(dx, bor)) f_.push('den kastade bollen flyttar ' + dx.toFixed(1) + ' framåt mellan ' + ka[i].t + ' och ' + k.t + ' s, ska vara ' + bor.toFixed(1)); });
        } else if (s.dataset.kastbana === 'komposanter') {
          const boll = t => s.querySelector('circle.fig-kast-boll[data-t="' + t + '"]');
          const G = r => [...s.querySelectorAll('g.fig-kast-fart[data-riktning="' + r + '"]')].map(g => ({ t: g.dataset.t, p: pilAv(g) }));
          const vx = G('x'), vy = G('y');
          const fran = x => { const c = boll(x.t); return x.p && c && nara(x.p.a[0], c.cx.baseVal.value) && nara(x.p.a[1], c.cy.baseVal.value); };
          vx.concat(vy).forEach(x => { if (x.p && !fran(x)) f_.push('pilen vid ' + x.t + ' s börjar inte i bollen'); });
          const lx = vx.map(x => x.p ? x.p.b[0] - x.p.a[0] : 0);
          if (vx.length < 3 || lx.some(l => !(l > 0) || !nara(l, lx[0])) || vx.some(x => x.p && !nara(x.p.a[1], x.p.b[1]))) f_.push('de vågräta pilarna är inte vågräta och lika långa: ' + lx.map(l => l.toFixed(1)).join('/'));
          const ly = vy.map(x => x.p ? x.p.b[1] - x.p.a[1] : 0), okat = ly.slice(1).map((l, i) => l - ly[i]);
          if (ly.length !== vx.length || !nara(ly[0], 0) || okat.some(d => !(d > 1) || !nara(d, okat[0])) || vy.some(x => x.p && !nara(x.p.a[0], x.p.b[0]))) f_.push('de lodräta pilarna växer inte lika mycket varje sekund från 0: ' + ly.map(l => l.toFixed(1)).join('/'));
        } else if (s.dataset.kastbana === 'vinklar') {
          const B = [...s.querySelectorAll('path.fig-kast-bana-v')].map(p => { const e = p.getPointAtLength(p.getTotalLength()); return { v: +p.dataset.vinkel, x: e.x, topp: p.getBBox().y }; });
          if (B.length < 2) f_.push(B.length + ' banor');
          const langst = B.reduce((a, b) => (b.x > a.x ? b : a), B[0]), nara45 = B.reduce((a, b) => (Math.abs(b.v - 45) < Math.abs(a.v - 45) ? b : a), B[0]);
          if (langst && langst.v !== nara45.v && !nara(langst.x, nara45.x)) f_.push(langst.v + '° landar längst, inte ' + nara45.v + '°');
          B.forEach((a, i) => B.slice(i + 1).forEach(b => { if (a.v + b.v === 90 && Math.abs(a.x - b.x) * sk > 1) f_.push(a.v + '° och ' + b.v + '° landar ' + (Math.abs(a.x - b.x) * sk).toFixed(1) + ' px isär'); }));
          const hogst = B.reduce((a, b) => (b.topp < a.topp ? b : a), B[0]);
          if (hogst && hogst.v !== Math.max(...B.map(b => b.v))) f_.push(hogst.v + '° når högst, inte ' + Math.max(...B.map(b => b.v)) + '°');
        } else if (s.dataset.kastbana === 'hopp') {
          const D = [...s.querySelectorAll('circle.fig-hopp-tp')].map(c => [c.cx.baseVal.value, c.cy.baseVal.value]);
          const dx = D.slice(1).map((p, i) => p[0] - D[i][0]), dy = D.slice(1).map((p, i) => p[1] - D[i][1]), d2 = dy.slice(1).map((v, i) => v - dy[i]);
          if (D.length < 4) f_.push(D.length + ' lägen');
          if (dx.some(v => !(v > 0) || !nara(v, dx[0]))) f_.push('tyngdpunkterna står inte lika långt isär i sidled: ' + dx.map(v => v.toFixed(1)).join('/'));
          if (d2.some(v => !(v > 0.5) || !nara(v, d2[0]))) f_.push('tyngdpunkterna följer inte ett kast (lodräta steg ' + dy.map(v => v.toFixed(1)).join('/') + ')');
          const bana = s.querySelector('path.fig-kast-bana'), L = bana ? bana.getTotalLength() : 0, B_ = bana ? Array.from({ length: 801 }, (_, i) => bana.getPointAtLength(L * i / 800)) : [];
          D.forEach(p => { if (!B_.some(q => Math.hypot(q.x - p[0], q.y - p[1]) <= 1.2)) f_.push('tyngdpunkten vid (' + p.map(v => v.toFixed(0)) + ') ligger inte på den streckade banan'); });
          const form = [...s.querySelectorAll('g.fig-hopp-figur')].map((g, i) => { const b = g.getBBox(); return D[i] ? [b.x - D[i][0], b.y - D[i][1], b.width, b.height] : [0, 0, 0, 0]; });
          const olika = form.filter((x, i) => form.slice(0, i).every(y => x.some((v, j) => Math.abs(v - y[j]) > 2))).length;
          if (olika < 3) f_.push('figuren har bara ' + olika + ' olika ställningar');
        } else if (s.dataset.cirkelrorelse) {
          const m = s.querySelector('.fig-cirkel-mitt, .fig-cirkel-mittkors'), mb = m && m.getBBox(), M = mb && [mb.x + mb.width / 2, mb.y + mb.height / 2];
          const K = [...s.querySelectorAll('g.fig-cirkel-kraft')], T = [...s.querySelectorAll('g.fig-cirkel-tangent')];
          if (!M || !K.length || !T.length) f_.push((M ? '' : 'ingen mitt, ') + K.length + ' kraftpilar, ' + T.length + ' raka banor');
          K.forEach(g => { const p = pilAv(g), C = [+g.dataset.cx, +g.dataset.cy];
            if (M && (!nara(C[0], M[0]) || !nara(C[1], M[1]))) f_.push('kraftpilens mitt är inte den ritade mitten');
            if (vinkelFel([p.b[0] - p.a[0], p.b[1] - p.a[1]], [C[0] - p.a[0], C[1] - p.a[1]]) > 0.02) f_.push('kraftpilen pekar inte mot mitten'); });
          T.forEach(g => { const p = pilAv(g), C = [+g.dataset.cx, +g.dataset.cy], b = [+g.dataset.bx, +g.dataset.by];
            const u = [p.b[0] - p.a[0], p.b[1] - p.a[1]], r = [p.a[0] - C[0], p.a[1] - C[1]];
            if (!nara(p.a[0], b[0]) || !nara(p.a[1], b[1])) f_.push('den raka banan börjar inte där bollen eller bilen är');
            if (Math.abs(u[0] * r[0] + u[1] * r[1]) / Math.hypot(...u) / Math.hypot(...r) > 0.02) f_.push('den raka banan är inte vinkelrät mot radien (ingen tangent)'); });
        }
        const vb = s.viewBox.baseVal, tx = [...s.querySelectorAll('text')].filter(t => t.textContent.trim()).map(t => [t.textContent, t.getBBox(), parseFloat(getComputedStyle(t).fontSize) * sk]);
        tx.forEach(([a, p, px], j) => {
          if (px < 13.95) f_.push('”' + a + '” är ' + px.toFixed(1) + ' px');
          if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
          tx.slice(j + 1).forEach(([b, q]) => { if (p.x < q.x + q.width - 0.5 && q.x < p.x + p.width - 0.5 && p.y < q.y + q.height - 0.5 && q.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
        });
        kc.set(id, { typ, minPx: tx.length ? Math.min(...tx.map(x => x[2])) : Infinity, fel: f_ });
      });
      // Tyngdpunkt, balans och kroppen (IV D, arbetsorder 17), mätt i figurernas egna element:
      //  - stabilitet lada och fordon, i varje läge: lodlinjen lodrät från tyngdpunkten ned till marken; stödytan på
      //    marken, från lådans ena nedre hörn till det andra (sett uppifrån) eller mellan hjulens kontaktpunkter; lådans
      //    tyngdpunkt i lådans mitt; texten under ("välter" eller inte) stämmer med var lodlinjen träffar, och det stämmer
      //    med fysiken: lådan välter när tan(vinkeln) > bredden / höjden (mätta i lådan), fordonet när tan(vinkeln) >
      //    halva spårvidden / tyngdpunktens höjd;
      //  - stabilitet hojdhopp: tyngdpunkten under ribbans överkant och kroppen (bågen) över ribban;
      //  - kastbana hopp (i kc ovan): tyngdpunktsprickarna lika långt isär i sidled och lodrätt som i ett kast (samma
      //    ökning i fallet mellan varje läge), på den streckade banan, och figuren i minst tre olika ställningar;
      //  - krock: deformationszonens stoppsträcka minst dubbelt så lång som den styva bilens, kupén lika lång i båda och
      //    båda bilarna an mot väggen;
      //  - alla: ingen text under 14 px på skärmen, utanför figuren eller över en annan text.
      $$('.scen svg[data-stabilitet], .scen svg[data-krock]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (tb.has(id)) return;
        const f_ = [], N = 0.6, nara = (a, b, t = N) => Math.abs(a - b) <= t, sk = s.getBoundingClientRect().width / s.viewBox.baseVal.width;
        const pts = e => [...e.points].map(p => [p.x, p.y]);
        const typ = s.dataset.stabilitet ? 'stabilitet ' + s.dataset.stabilitet : 'krock';
        if (s.dataset.stabilitet === 'lada' || s.dataset.stabilitet === 'fordon') {
          const P = [...s.querySelectorAll('g.fig-stab-panel')];
          if (!P.length) f_.push('inga lägen');
          P.forEach(g => {
            const v = +g.dataset.vinkel, namn = v + '°', T = g.querySelector('circle.fig-tyngdpunkt'), l = g.querySelector('line.fig-lodlinje'), st = g.querySelector('line.fig-stodyta');
            if (!T || !l || !st) return f_.push(namn + ': tyngdpunkt, lodlinje eller stödyta saknas');
            const tx = T.cx.baseVal.value, ty = T.cy.baseVal.value, mark = st.y1.baseVal.value, sx = [st.x1.baseVal.value, st.x2.baseVal.value].sort((a, b) => a - b);
            if (!nara(l.x1.baseVal.value, tx) || !nara(l.x2.baseVal.value, tx) || !nara(l.y1.baseVal.value, ty) || !nara(l.y2.baseVal.value, mark)) f_.push(namn + ': lodlinjen går inte lodrätt från tyngdpunkten till marken');
            let kant, tipp;
            if (s.dataset.stabilitet === 'lada') {
              const q = pts(g.querySelector('polygon.fig-lada'));
              const mitt = [q.reduce((a, p) => a + p[0], 0) / q.length, q.reduce((a, p) => a + p[1], 0) / q.length];
              if (q.length !== 4 || !nara(tx, mitt[0]) || !nara(ty, mitt[1])) f_.push(namn + ': tyngdpunkten är inte i lådans mitt');
              kant = [q[0][0], q[1][0]].sort((a, b) => a - b);
              if (!nara(q[0][1], mark)) f_.push(namn + ': lådan står inte på marken');
              const w = Math.hypot(q[1][0] - q[0][0], q[1][1] - q[0][1]), h = Math.hypot(q[2][0] - q[1][0], q[2][1] - q[1][1]);
              tipp = Math.tan(v * Math.PI / 180) > w / h;
            } else {
              kant = [...g.querySelectorAll('polygon.fig-hjul')].map(e => +e.dataset.kx).sort((a, b) => a - b);
              if (kant.length !== 2) f_.push(namn + ': ' + kant.length + ' hjul');
              kant = [kant[0], kant[kant.length - 1]];
              tipp = Math.tan(v * Math.PI / 180) > +g.dataset.sparvidd / 2 / +g.dataset.tpHojd;
            }
            if (!nara(sx[0], kant[0]) || !nara(sx[1], kant[1])) f_.push(namn + ': stödytan är inte ' + (s.dataset.stabilitet === 'lada' ? 'lådans botten' : 'sträckan mellan hjulen') + ' (' + sx.map(x => x.toFixed(1)) + ' / ' + kant.map(x => x.toFixed(1)) + ')');
            const inne = tx >= sx[0] - N && tx <= sx[1] + N, valter = [...g.querySelectorAll('text')].some(t => /välter/.test(t.textContent));
            if (valter === inne) f_.push(namn + ': texten säger ' + (valter ? '”välter”' : 'att den står') + ', men lodlinjen träffar ' + (inne ? 'inom' : 'utanför') + ' stödytan');
            if (tipp === inne) f_.push(namn + ': lodlinjen träffar ' + (inne ? 'inom' : 'utanför') + ' stödytan, men vid ' + v + '° ska den ' + (tipp ? 'välta' : 'stå'));
          });
        } else if (s.dataset.stabilitet === 'hojdhopp') {
          const R = s.querySelector('circle.fig-ribba'), T = s.querySelector('circle.fig-tyngdpunkt:not(.fig-tecken)'), K = s.querySelector('path.fig-kropp:not(.fig-lem)');
          if (!R || !T || !K) f_.push('ribba, tyngdpunkt eller kropp saknas');
          else {
            const rx = R.cx.baseVal.value, topp = R.cy.baseVal.value - R.r.baseVal.value, halv = parseFloat(getComputedStyle(K).strokeWidth) / 2;
            if (!(T.cy.baseVal.value > topp)) f_.push('tyngdpunkten är inte under ribbans överkant');
            const L = K.getTotalLength(), over = Array.from({ length: 401 }, (_, i) => K.getPointAtLength(L * i / 400)).filter(p => Math.abs(p.x - rx) <= 2);
            if (!over.length || over.some(p => !(p.y + halv < topp))) f_.push('kroppen går inte över ribban');
          }
        } else {
          const vagg = s.querySelector('rect.fig-vagg'), vx = vagg ? vagg.x.baseVal.value : NaN, rad = {};
          s.querySelectorAll('g.fig-krock-rad').forEach(g => {
            const fore = pts(g.querySelector('polygon.fig-krock-fore')), bil = pts(g.querySelector('polygon.fig-krock-bil')), kupe = g.querySelector('rect.fig-kupe');
            const minx = q => Math.min(...q.map(p => p[0])), maxx = q => Math.max(...q.map(p => p[0]));
            rad[g.dataset.rad] = { stracka: minx(bil) - minx(fore), kupe: kupe.width.baseVal.value };
            if (!nara(maxx(bil), vx) || !nara(maxx(fore), vx)) f_.push(g.dataset.rad + ': bilen står inte an mot väggen');
          });
          const { styv, zon } = rad;
          if (!styv || !zon) f_.push('raderna saknas');
          else {
            if (!(styv.stracka > 0) || !(zon.stracka >= 2 * styv.stracka)) f_.push('deformationszonens sträcka (' + zon.stracka.toFixed(1) + ') är inte tydligt längre än den styva bilens (' + styv.stracka.toFixed(1) + ')');
            if (!nara(styv.kupe, zon.kupe)) f_.push('kupén är inte lika lång (' + styv.kupe.toFixed(1) + ' / ' + zon.kupe.toFixed(1) + ')');
          }
        }
        const vb = s.viewBox.baseVal, tx = [...s.querySelectorAll('text')].filter(t => t.textContent.trim()).map(t => [t.textContent, t.getBBox(), parseFloat(getComputedStyle(t).fontSize) * sk]);
        tx.forEach(([a, p, px], j) => {
          if (px < 13.95) f_.push('”' + a + '” är ' + px.toFixed(1) + ' px');
          if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
          tx.slice(j + 1).forEach(([b, q]) => { if (p.x < q.x + q.width - 0.5 && q.x < p.x + p.width - 0.5 && p.y < q.y + q.height - 0.5 && q.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
        });
        tb.set(id, { typ, minPx: tx.length ? Math.min(...tx.map(x => x[2])) : Infinity, fel: f_ });
      });
      // Tryck (V A, arbetsorder 21), mätt i figurernas egna element:
      //  - sno: tyngdpilarna exakt lika långa och rakt nedåt; den större sulan minst dubbelt så lång som den mindre; den
      //    mindre sulan sjunker minst 5 px djupare under snöytan;
      //  - hydraulik: den stora kolven minst dubbelt så bred och pilen vid den längre, ned på den lilla och upp på den
      //    stora; oljan en yta från den lilla cylinderns yttervägg till den storas; kolvarna på samma höjd (före
      //    förflyttningen); samma p i båda cylindrarna;
      //  - lyftkraft: varje tryckpil lika lång i förhållande till sitt djup (jämn ökning), sidopilarna parvis lika
      //    långa, undersidans pil längre än ovansidans och lyftkraftens pil uppåt = undersidans − ovansidans;
      //  - hydraulik-vag (dessutom): sträckorna utskrivna (ur data-vag), samma oljevolym A₁·s₁ = A₂·s₂, samma kraft gånger
      //    väg F₁·s₁ = F₂·s₂, och de ritade förflyttningarna i areornas kvot;
      //  - alla: ingen text under 14 px, utanför figuren eller över en annan text.
      $$('.scen svg[data-tryck]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (tr.has(id)) return;
        const f_ = [], N = 0.6, nara = (a, b, t = N) => Math.abs(a - b) <= t, sk = s.getBoundingClientRect().width / s.viewBox.baseVal.width;
        const lage = s.dataset.tryck, typ = 'tryck ' + lage;
        const pilL = g => { const l = g.querySelector('line.fig-pil'), p = g.querySelector('polygon.fig-pilspets').points[0], x1 = l.x1.baseVal.value, y1 = l.y1.baseVal.value;
          return { x1, y1, x2: p.x, y2: p.y, L: Math.hypot(p.x - x1, p.y - y1) }; };
        if (lage === 'sno') {
          const P = [...s.querySelectorAll('g.fig-tryck-panel')].map(g => { const r = g.querySelector('rect.fig-tryck-sula');
            return { namn: g.dataset.sko, yta: +g.dataset.yta, bredd: r.width.baseVal.value, botten: r.y.baseVal.value + r.height.baseVal.value, pil: pilL(g.querySelector('g.fig-tryck-tyngd')) }; });
          if (P.length !== 2) f_.push(P.length + ' paneler');
          else {
            const [a, b] = P[0].bredd < P[1].bredd ? P : [P[1], P[0]];
            if (!nara(a.pil.L, b.pil.L)) f_.push('tyngdpilarna är inte lika långa (' + a.pil.L.toFixed(1) + ' / ' + b.pil.L.toFixed(1) + ')');
            if (!(a.pil.y2 > a.pil.y1 && b.pil.y2 > b.pil.y1 && nara(a.pil.x1, a.pil.x2) && nara(b.pil.x1, b.pil.x2))) f_.push('tyngdpilarna pekar inte rakt nedåt');
            if (!(b.bredd >= 2 * a.bredd)) f_.push(b.namn + ': ytan mot snön är inte tydligt större än med ' + a.namn + ' (' + b.bredd.toFixed(1) + ' / ' + a.bredd.toFixed(1) + ')');
            if (!(a.botten - a.yta >= b.botten - b.yta + 5)) f_.push(a.namn + ' sjunker inte djupare än ' + b.namn + ' (' + (a.botten - a.yta).toFixed(1) + ' / ' + (b.botten - b.yta).toFixed(1) + ' px)');
          }
        } else if (lage === 'hydraulik' || lage === 'hydraulik-vag') {
          const K = {}, Fp = {};
          s.querySelectorAll('g.fig-tryck-kolv').forEach(g => { const r = g.querySelector('rect.fig-kolv'), fo = g.querySelector('rect.fig-kolv-fore');
            K[g.dataset.sida] = { x: r.x.baseVal.value, b: r.width.baseVal.value, y: r.y.baseVal.value, fore: fo ? fo.y.baseVal.value : null, A: +g.dataset.area, F: +g.dataset.kraft, s: +g.dataset.vag }; });
          s.querySelectorAll('g.fig-tryck-kraft').forEach(g => { Fp[g.dataset.sida] = pilL(g); });
          const k1 = K.liten, k2 = K.stor, o = s.querySelector('polygon.fig-olja');
          if (!k1 || !k2 || !Fp.liten || !Fp.stor || !o) f_.push('kolvar, pilar eller olja saknas');
          else {
            if (!(k2.b >= 2 * k1.b)) f_.push('den stora kolven är inte tydligt bredare (' + k2.b.toFixed(1) + ' / ' + k1.b.toFixed(1) + ')');
            if (!(Fp.stor.L > Fp.liten.L + 5)) f_.push('pilen vid den stora kolven är inte längre (' + Fp.stor.L.toFixed(1) + ' / ' + Fp.liten.L.toFixed(1) + ')');
            if (!(Fp.liten.y2 > Fp.liten.y1) || !(Fp.stor.y2 < Fp.stor.y1)) f_.push('pilarna pekar inte ned på den lilla kolven och upp på den stora');
            const xs = [...o.points].map(p => p.x);
            if (o.points.length !== 8 || !(Math.min(...xs) <= k1.x + 1.5 && Math.max(...xs) >= k2.x + k2.b - 1.5)) f_.push('oljan förbinder inte cylindrarna');
            const hojd = q => q.fore != null ? q.fore : q.y;
            if (!nara(hojd(k1), hojd(k2))) f_.push('kolvarna står inte på samma höjd (' + hojd(k1).toFixed(1) + ' / ' + hojd(k2).toFixed(1) + ')');
            const pp = [...s.querySelectorAll('text.fig-tryck-p')];
            if (pp.length !== 2 || pp[0].textContent !== pp[1].textContent || !pp.every(t => { const q = K[t.dataset.sida], bb = t.getBBox(); return q && bb.x >= q.x - 0.5 && bb.x + bb.width <= q.x + q.b + 0.5; }))
              f_.push('samma tryck är inte markerat i båda cylindrarna');
            if (lage === 'hydraulik-vag') {
              const cm = m => (Math.round(m * 1000) / 10).toLocaleString('sv-SE') + ' cm', texter = [...s.querySelectorAll('text')].map(t => t.textContent);
              [k1.s, k2.s].forEach(m => { if (!texter.includes(cm(m))) f_.push('sträckan ' + cm(m) + ' står inte utskriven'); });
              if (!nara(k1.A * k1.s, k2.A * k2.s, 1e-9 * k2.A)) f_.push('oljevolymen är inte lika: ' + k1.A + ' · ' + k1.s + ' / ' + k2.A + ' · ' + k2.s);
              if (!nara(k1.F * k1.s, k2.F * k2.s, 1e-9 * k2.F)) f_.push('kraft gånger väg är inte lika: ' + k1.F + ' · ' + k1.s + ' / ' + k2.F + ' · ' + k2.s);
              const d1 = k1.y - k1.fore, d2 = k2.fore - k2.y;
              if (!(d1 > 0) || !(d2 > 0) || !nara(d2, d1 * k1.A / k2.A, 0.3)) f_.push('de ritade sträckorna har inte areornas kvot (' + d1.toFixed(1) + ' ned / ' + d2.toFixed(1) + ' upp)');
            }
          }
        } else if (lage === 'lyftkraft') {
          const yl = s.querySelector('line.fig-vatten-yta'), y0 = yl ? yl.y1.baseVal.value : NaN, P = {};
          s.querySelectorAll('g.fig-tryck-tryckpil').forEach(g => (P[g.dataset.sida] = P[g.dataset.sida] || []).push(pilL(g)));
          const lyftG = s.querySelector('g.fig-tryck-lyftkraft');
          if (!P.over || !P.under || !P.vanster || !P.hoger || !lyftG) f_.push('pilar saknas');
          else {
            const alla = [].concat(P.over, P.under, P.vanster, P.hoger), c = P.over[0].L / (P.over[0].y2 - y0);
            alla.forEach(p => { if (!nara(p.L, c * (p.y2 - y0))) f_.push('pilen på djupet ' + (p.y2 - y0).toFixed(1) + ' är ' + p.L.toFixed(1) + ', inte ' + (c * (p.y2 - y0)).toFixed(1) + ' (jämn ökning med djupet)'); });
            P.vanster.forEach(v => { const h = P.hoger.find(q => nara(q.y2, v.y2)); if (!h || !nara(h.L, v.L)) f_.push('sidopilarna på djupet ' + (v.y2 - y0).toFixed(1) + ' är inte parvis lika långa'); });
            if (P.vanster.length !== P.hoger.length) f_.push('olika många pilar på sidorna');
            if (!(P.under[0].L > P.over[0].L)) f_.push('pilen mot undersidan är inte längre än pilen mot ovansidan');
            const L = pilL(lyftG);
            if (!(L.y2 < L.y1) || !nara(L.L, P.under[0].L - P.over[0].L)) f_.push('lyftkraften (' + L.L.toFixed(1) + ') är inte skillnaden mellan undersidans och ovansidans pil (' + (P.under[0].L - P.over[0].L).toFixed(1) + ')');
          }
        } else f_.push('okänt läge');
        const vb = s.viewBox.baseVal, tx = [...s.querySelectorAll('text')].filter(t => t.textContent.trim()).map(t => [t.textContent, t.getBBox(), parseFloat(getComputedStyle(t).fontSize) * sk]);
        tx.forEach(([a, p, px], j) => {
          if (px < 13.95) f_.push('”' + a + '” är ' + px.toFixed(1) + ' px');
          if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
          tx.slice(j + 1).forEach(([b, q]) => { if (p.x < q.x + q.width - 0.5 && q.x < p.x + p.width - 0.5 && p.y < q.y + q.height - 0.5 && q.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
        });
        tr.set(id, { typ, minPx: tx.length ? Math.min(...tx.map(x => x[2])) : Infinity, fel: f_ });
      });
      // Energi och arbete (V B, arbetsorder 28), mätt i figurernas egna element:
      //  - studs: varje toppunkt på banan lägre än den förra (minst 2 px), aldrig lika hög eller högre; bollen hoptryckt
      //    (bredare än hög) bara där den når golvet, och rund överallt annars; en våg vid varje studs;
      //  - arbete: kraftpilen pekar rakt uppåt i alla tre panelerna; rörelsepilen uppåt i den första, ingen i den
      //    mittersta och vågrät framåt i den tredje; ordet "arbete" ensamt bara vid den första (de andra säger "inget
      //    arbete");
      //  - snett: repkraftens vinkel mot marken är den utskrivna (±0,5°); delen framåt och delen uppåt streckade från
      //    pilens början till dess spets (som komposanterna i resultant_rutor); talen vid delarna = kraften gånger de
      //    ritade delarnas andel av pilen (±1 N); kraftens tal = kraften; rörelsepilen vågrät framåt;
      //  - (V C, arbetsorder 29) fall: staplarna tillsammans lika höga, lägesenergins i proportion till höjden; gunga:
      //    ytterlägena på samma höjd och mitten lägst; stavhopp: staven böjd bara i mittläget, lägena och orden i ordning;
      //  - (V D, arbetsorder 29) ramp: samma sluthöjd, rampen så lång och hög som utskrivet, kraft gånger sträcka lika och
      //    utskrivet under båda; gungbrada: plankan vågrät, momenten lika, avstånden i skala, vridpilarna lika stora och
      //    motriktade; talja: två bärande repdelar, lyft och indraget rep i bilden, dragkraften halva tyngden;
      //  - alla: rörelsepilarna ser inte ut som kraftpilar (annan färg och streckade), ingen text under 14 px, utanför
      //    figuren eller över en annan text.
      $$('.scen svg[data-energi]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (en.has(id)) return;
        const f_ = [], N = 0.6, nara = (a, b, t = N) => Math.abs(a - b) <= t, sk = s.getBoundingClientRect().width / s.viewBox.baseVal.width;
        const lage = s.dataset.energi, typ = 'energi ' + lage;
        const pilL = g => { const l = g.querySelector('line.fig-pil'), p = g.querySelector('polygon.fig-pilspets').points[0], x1 = l.x1.baseVal.value, y1 = l.y1.baseVal.value;
          return { x1, y1, x2: p.x, y2: p.y, L: Math.hypot(p.x - x1, p.y - y1), el: l }; };
        const rorL = g => { const l = g.querySelector('line.fig-rorelse'), p = g.querySelector('polyline.fig-rorelse-spets').points[1];
          return { x1: l.x1.baseVal.value, y1: l.y1.baseVal.value, x2: p.x, y2: p.y, el: l }; };
        // rörelsepilarna mot kraftpilarna: annan färg, och streckade
        const kraftEl = s.querySelector('line.fig-pil'), rorEl = [...s.querySelectorAll('line.fig-rorelse')];
        rorEl.forEach(l => { const a = getComputedStyle(l), b = kraftEl && getComputedStyle(kraftEl);
          if (a.strokeDasharray === 'none' || (b && (a.stroke === b.stroke || a.strokeDasharray === b.strokeDasharray))) f_.push('en rörelsepil ser ut som en kraftpil (' + a.stroke + ', ' + a.strokeDasharray + ')'); });
        // (arbetsorder 29) kraftpilarna och deras tal är guld, och talen har ingen färgad kant (bara vit halo)
        const guld = (() => { const t = document.createElementNS('http://www.w3.org/2000/svg', 'line'); t.style.stroke = 'var(--accent-2-mork)'; s.appendChild(t); const v = getComputedStyle(t).stroke; t.remove(); return v; })();
        s.querySelectorAll('line.fig-pil').forEach(l => { const c = getComputedStyle(l).stroke; if (c !== guld) f_.push('en kraftpil är inte guld (' + c + ')'); });
        s.querySelectorAll('text.fig-kast-pil-text').forEach(t => { const c = getComputedStyle(t);
          if (c.fill !== guld || (c.stroke !== 'none' && !t.classList.contains('fig-halo'))) f_.push('talet ' + t.textContent + ' är inte guld (' + c.fill + ', kant ' + c.stroke + ')'); });
        if (lage === 'studs') {
          const golv = +s.querySelector('line.fig-bord').dataset.golv;
          const bagar = [...s.querySelectorAll('polyline.fig-energi-bana')].sort((a, b) => +a.dataset.bage - +b.dataset.bage);
          const topp = bagar.map(b => Math.min(...[...b.points].map(p => p.y)));
          if (topp.length < 2) f_.push(topp.length + ' bågar');
          topp.slice(1).forEach((t, i) => { if (!(t >= topp[i] + 2)) f_.push('toppen efter studs ' + (i + 1) + ' är inte lägre än den förra (' + (golv - t).toFixed(1) + ' / ' + (golv - topp[i]).toFixed(1) + ' px över golvet)'); });
          const bollar = [...s.querySelectorAll('ellipse.fig-energi-boll')];
          let vidGolv = 0;
          bollar.forEach(e => { const rx = e.rx.baseVal.value, ry = e.ry.baseVal.value, nere = nara(e.cy.baseVal.value + ry, golv, 1), hop = rx > ry + 1;
            if (nere) vidGolv++;
            if (hop !== nere) f_.push('bollen vid y ' + e.cy.baseVal.value.toFixed(1) + ' är ' + (hop ? 'hoptryckt men når inte golvet' : 'rund men står mot golvet')); });
          if (!vidGolv) f_.push('ingen boll mot golvet');
          if (s.querySelectorAll('g.fig-energi-vagor').length !== topp.length - 1) f_.push('inte en våg vid varje studs');
        } else if (lage === 'arbete') {
          const P = {};
          s.querySelectorAll('g.fig-energi-panel').forEach(g => { const r = g.querySelector('g.fig-energi-rorelse');
            P[g.dataset.panel] = { kraft: pilL(g.querySelector('g.fig-energi-kraft')), ror: r ? rorL(r) : null, ord: [...g.querySelectorAll('text.fig-energi-ord')].map(t => t.textContent).join(' ') }; });
          const { lyfter: a, haller: b, bar: c } = P;
          if (!a || !b || !c) f_.push('panelerna saknas');
          else {
            [['lyfter', a], ['håller', b], ['bär', c]].forEach(([n, p]) => { if (!(nara(p.kraft.x1, p.kraft.x2) && p.kraft.y2 < p.kraft.y1 - 10)) f_.push(n + ': kraftpilen pekar inte rakt uppåt'); });
            if (!a.ror || !(nara(a.ror.x1, a.ror.x2) && a.ror.y2 < a.ror.y1 - 10)) f_.push('lyfter: rörelsepilen pekar inte uppåt');
            if (b.ror) f_.push('håller: det finns en rörelsepil, fast lådan står still');
            if (!c.ror || !(nara(c.ror.y1, c.ror.y2) && c.ror.x2 > c.ror.x1 + 10)) f_.push('bär: rörelsepilen är inte vågrät framåt');
            if (a.ord !== 'arbete') f_.push('lyfter: ”' + a.ord + '”, inte ”arbete”');
            [['håller', b], ['bär', c]].forEach(([n, p]) => { if (!/inget arbete/.test(p.ord)) f_.push(n + ': ”' + p.ord + '” – ordet arbete utan ”inget”'); });
          }
        } else if (lage === 'snett') {
          const g = s.querySelector('g.fig-energi-repkraft'), K = g && pilL(g), x = s.querySelector('line.fig-komposant[data-komposant="x"]'), y = s.querySelector('line.fig-komposant[data-komposant="y"]');
          const T = n => (s.querySelector('text[data-del="' + n + '"]') || {}).textContent || '', tl = t => parseFloat(t.replace(/[≈\s]/g, '').replace(',', '.'));
          if (!K || !x || !y) f_.push('repkraften eller delarna saknas');
          else {
            const F = +g.dataset.kraft, v = +g.dataset.vinkel, vM = Math.atan2(K.y1 - K.y2, K.x2 - K.x1) * 180 / Math.PI;
            if (!nara(vM, v, 0.5)) f_.push('repet drar i ' + vM.toFixed(1) + '° mot marken, inte ' + v + '°');
            const vt = [...s.querySelectorAll('text')].find(t => /°$/.test(t.textContent));
            if (!vt || tl(vt.textContent) !== v) f_.push('vinkeln står inte utskriven som ' + v + '°');
            const xa = [x.x1, x.y1, x.x2, x.y2].map(e => e.baseVal.value), ya = [y.x1, y.y1, y.x2, y.y2].map(e => e.baseVal.value);
            if (!nara(xa[0], K.x1) || !nara(xa[1], K.y1) || !nara(xa[3], K.y1) || !nara(xa[2], K.x2)) f_.push('delen framåt går inte vågrätt från pilens början till under spetsen');
            if (!nara(ya[0], K.x2) || !nara(ya[2], K.x2) || !nara(ya[1], K.y1) || !nara(ya[3], K.y2)) f_.push('delen uppåt går inte lodrätt upp till pilens spets');
            const fram = F * (xa[2] - xa[0]) / K.L, upp = F * (ya[1] - ya[3]) / K.L;
            if (!(Math.abs(tl(T('fram')) - fram) <= 1)) f_.push('delen framåt: ”' + T('fram') + '”, ritad ' + fram.toFixed(1) + ' N');
            if (!(Math.abs(tl(T('upp')) - upp) <= 1)) f_.push('delen uppåt: ”' + T('upp') + '”, ritad ' + upp.toFixed(1) + ' N');
            if (tl(T('kraft')) !== F) f_.push('kraften: ”' + T('kraft') + '”, inte ' + F + ' N');
            const r = s.querySelector('g.fig-energi-rorelse'), R = r && rorL(r);
            if (!R || !(nara(R.y1, R.y2) && R.x2 > R.x1 + 10)) f_.push('rörelsepilen är inte vågrät framåt');
          }
        } else if (lage === 'fall') {
          // C1: lägesenergins och rörelseenergins staplar tillsammans lika höga i alla lägen; lägesenergins stapel i
          // proportion till bollens höjd över marken (noll vid marken)
          const golv = +s.querySelector('line.fig-bord').dataset.golv, L = [...s.querySelectorAll('g.fig-energi-lage')].map(g => {
            const b = g.querySelector('circle.fig-energi-fallboll'), h = r => (g.querySelector('rect[data-slag="' + r + '"]') || { height: { baseVal: { value: NaN } } }).height.baseVal.value;
            return { hm: +g.dataset.hojd, hpx: golv - b.cy.baseVal.value - b.r.baseVal.value - 1, ep: h('lage'), ek: h('rorelse') }; });
          if (L.length < 2) f_.push(L.length + ' lägen');
          L.forEach(x => { if (!nara(x.ep + x.ek, L[0].ep + L[0].ek)) f_.push('staplarna vid ' + x.hm + ' m är tillsammans ' + (x.ep + x.ek).toFixed(1) + ', inte ' + (L[0].ep + L[0].ek).toFixed(1)); });
          const topp = L.reduce((a, x) => x.hpx > a.hpx ? x : a, L[0]), kv = topp.ep / topp.hpx;
          L.forEach(x => { if (!nara(x.ep, kv * x.hpx, 1)) f_.push('lägesenergins stapel vid ' + x.hm + ' m är ' + x.ep.toFixed(1) + ', inte ' + (kv * x.hpx).toFixed(1) + ' (i proportion till höjden)'); });
        } else if (lage === 'gunga') {
          // C2: de två högsta lägena på samma höjd, mitten lägst
          const P = {};
          s.querySelectorAll('g.fig-energi-gungplats').forEach(g => { const r = g.querySelector('rect.fig-energi-sits');
            P[g.dataset.plats] = { y: r.y.baseVal.value + r.height.baseVal.value / 2, ord: [...g.querySelectorAll('text')].map(t => t.textContent).join(' ') }; });
          if (!P.vanster || !P.mitt || !P.hoger) f_.push('lägena saknas');
          else {
            if (!nara(P.vanster.y, P.hoger.y)) f_.push('ytterlägena står inte på samma höjd (' + P.vanster.y.toFixed(1) + ' / ' + P.hoger.y.toFixed(1) + ')');
            if (!(P.mitt.y > Math.max(P.vanster.y, P.hoger.y) + 5)) f_.push('mitten är inte lägst');
            if (!/lägesenergi/.test(P.vanster.ord) || !/lägesenergi/.test(P.hoger.ord) || !/rörelseenergi/.test(P.mitt.ord)) f_.push('orden står vid fel läge');
          }
        } else if (lage === 'stavhopp') {
          // C3: staven böjd bara i mittläget (mer än 6 px från den raka linjen), rak i de andra; lägena i ordning från
          // vänster, med orden rörelseenergi, elastisk energi och lägesenergi
          const S = [...s.querySelectorAll('g.fig-energi-stavsteg')].map(g => { const p = g.querySelector('path.fig-energi-stav'), n = p.getTotalLength(), a = p.getPointAtLength(0), b = p.getPointAtLength(n);
            const L = Math.hypot(b.x - a.x, b.y - a.y), dev = Math.max(...Array.from({ length: 41 }, (_, i) => { const q = p.getPointAtLength(n * i / 40); return Math.abs((b.x - a.x) * (a.y - q.y) - (a.x - q.x) * (b.y - a.y)) / L; }));
            return { steg: +g.dataset.steg, x: Math.min(a.x, b.x), dev, ord: [...g.querySelectorAll('text.fig-energi-ord')].map(t => t.textContent).join(' ') }; });
          if (S.length !== 3) f_.push(S.length + ' lägen');
          else {
            S.forEach(x => { const bojd = x.dev > 6; if (bojd !== (x.steg === 2)) f_.push('läge ' + x.steg + ': staven är ' + (bojd ? 'böjd (' + x.dev.toFixed(1) + ' px)' : 'rak') + (x.steg === 2 ? ', men ska vara böjd' : ', men ska vara rak')); });
            const ord = S.slice().sort((a, b) => a.x - b.x);
            if (ord.map(x => x.steg).join() !== '1,2,3') f_.push('lägena står inte i ordning från vänster');
            if (ord.map(x => x.ord).join(' · ') !== 'rörelseenergi · elastisk energi · lägesenergi') f_.push('orden: ' + ord.map(x => x.ord).join(' · '));
          }
        } else if (lage === 'ramp') {
          // D1: båda vägarna slutar på samma höjd; rampen ritad lika lång som utskrivet, och lika hög som bordet;
          // kraft gånger sträcka lika för båda, och det står under båda
          const V = {};
          s.querySelectorAll('g.fig-energi-vagen').forEach(g => { V[g.dataset.vag] = { F: +g.dataset.kraft, s: +g.dataset.stracka, k: +g.dataset.mpx, topp: +g.dataset.topp, g,
            bord: g.querySelector('rect.fig-energi-bord'), text: [...g.querySelectorAll('text.fig-energi-ord')].map(t => t.textContent).join(' ') }; });
          const { rakt: a, ramp: b } = V, golv = +s.querySelector('line.fig-bord').dataset.golv;
          if (!a || !b) f_.push('vägarna saknas');
          else {
            const ta = a.bord.y.baseVal.value, tb = b.bord.y.baseVal.value;
            if (!nara(ta, tb)) f_.push('vägarna slutar inte på samma höjd (' + ta.toFixed(1) + ' / ' + tb.toFixed(1) + ')');
            const pts = [...b.g.querySelector('polygon.fig-energi-ramp').points], lng = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y), upp = pts[0].y - pts[1].y;
            if (!nara(pts[1].y, tb)) f_.push('rampen slutar inte vid bordets kant');
            if (!nara(lng, b.s * b.k, 1)) f_.push('rampen är ' + (lng / b.k).toFixed(2) + ' m lång i bilden, inte ' + b.s + ' m');
            if (!nara(upp, a.s * a.k, 1) || !nara(golv - ta, a.s * a.k, 1)) f_.push('höjden är inte ' + a.s + ' m i bilden (' + (upp / b.k).toFixed(2) + ' m)');
            if (!nara(a.F * a.s, b.F * b.s, 1e-9 * a.F)) f_.push('kraft gånger sträcka är inte lika: ' + a.F + ' · ' + a.s + ' / ' + b.F + ' · ' + b.s);
            [a, b].forEach(x => { if (!x.text.endsWith('= ' + (x.F * x.s).toLocaleString('sv-SE') + ' J')) f_.push('under vägen står ”' + x.text + '”'); });
          }
        } else if (lage === 'gungbrada') {
          // D2: plankan vågrät; kraft gånger hävarm lika på båda sidor; avstånden i skala (samma px per meter); två
          // lika stora vridpilar åt motsatt håll kring vridningspunkten
          const pl = s.querySelector('rect.fig-energi-planka'), [vx, vy] = pl.dataset.vridpunkt.split(',').map(Number), k = +pl.dataset.mpx;
          if (pl.getAttribute('transform')) f_.push('plankan är vriden');
          const P = [...s.querySelectorAll('g.fig-energi-person')].map(g => ({ sida: g.dataset.sida, F: +g.dataset.kraft, l: +g.dataset.arm, x: g.querySelector('circle.fig-energi-sittpunkt').cx.baseVal.value, y: g.querySelector('circle.fig-energi-sittpunkt').cy.baseVal.value }));
          if (P.length !== 2) f_.push(P.length + ' personer');
          else {
            if (!nara(P[0].y, P[1].y) || !nara(P[0].y, pl.y.baseVal.value)) f_.push('de sitter inte på samma vågräta planka');
            if (!nara(P[0].F * P[0].l, P[1].F * P[1].l, 1e-9 * P[0].F)) f_.push('momenten är inte lika: ' + P[0].F + ' · ' + P[0].l + ' / ' + P[1].F + ' · ' + P[1].l);
            P.forEach(p => { if (!nara(Math.abs(p.x - vx), p.l * k)) f_.push(p.sida + ': ' + (Math.abs(p.x - vx) / k).toFixed(2) + ' m från vridpunkten i bilden, inte ' + p.l + ' m'); });
            if ((P[0].x - vx) * (P[1].x - vx) >= 0) f_.push('de sitter inte på var sin sida');
          }
          const W = [...s.querySelectorAll('g.fig-energi-vrid')].map(g => { const p = g.querySelector('path'), sp = g.querySelector('polygon').points[0], a = p.getPointAtLength(0);
            const v = q => Math.atan2(vy - q.y, q.x - vx) * 180 / Math.PI, d = ((v(sp) - v(a) + 540) % 360) - 180;
            return { r: Math.hypot(a.x - vx, a.y - vy), r2: Math.hypot(sp.x - vx, sp.y - vy), d }; });
          if (W.length !== 2) f_.push(W.length + ' vridpilar');
          else {
            if (!nara(Math.abs(W[0].d), Math.abs(W[1].d), 0.5) || !nara(W[0].r, W[1].r) || !nara(W[0].r2, W[1].r2)) f_.push('vridpilarna är inte lika stora (' + W.map(w => w.d.toFixed(1) + '° r ' + w.r.toFixed(1)).join(' / ') + ')');
            if (Math.sign(W[0].d) === Math.sign(W[1].d)) f_.push('vridpilarna går åt samma håll');
          }
        } else if (lage === 'talja') {
          // D3: lasten bärs av exakt två repdelar (lodräta, ned till det rörliga blocket); lasten lyft lyft m och 2 · lyft m
          // rep indraget mellan start och slut; dragkraftens pil hälften så lång som tyngdpilen
          const T = {};
          s.querySelectorAll('g.fig-energi-taljlage').forEach(g => { const M = g.querySelector('circle.fig-energi-rorligt'), my = M.cy.baseVal.value;
            const bar = [...g.querySelectorAll('line.fig-energi-repdel')].filter(l => nara(Math.max(l.y1.baseVal.value, l.y2.baseVal.value), my) && nara(l.x1.baseVal.value, l.x2.baseVal.value) && Math.abs(l.x1.baseVal.value - M.cx.baseVal.value) <= M.r.baseVal.value + 0.6);
            T[g.dataset.lage] = { my, bar: bar.length, k: +g.dataset.mpx, lyft: +g.dataset.lyft, hand: g.querySelector('circle.fig-energi-hand').cy.baseVal.value,
              tyngd: pilL(g.querySelector('g.fig-energi-tyngdpil')), drag: pilL(g.querySelector('g.fig-energi-dragpil')), text: [...g.querySelectorAll('text')].map(t => t.textContent) }; });
          const { start: a, slut: b } = T;
          if (!a || !b) f_.push('start- eller slutläget saknas');
          else {
            [['start', a], ['slut', b]].forEach(([n, x]) => {
              if (x.bar !== 2) f_.push(n + ': lasten bärs av ' + x.bar + ' repdelar, inte 2');
              if (!nara(x.drag.L, x.tyngd.L / 2)) f_.push(n + ': dragkraftens pil är ' + x.drag.L.toFixed(1) + ', inte hälften av tyngdpilen (' + x.tyngd.L.toFixed(1) + ')');
              if (!(x.drag.y2 > x.drag.y1 && x.tyngd.y2 > x.tyngd.y1)) f_.push(n + ': pilarna pekar inte nedåt'); });
            const lyft = (a.my - b.my) / a.k, rep = (b.hand - a.hand) / a.k, m = x => x.toLocaleString('sv-SE') + ' m';
            if (!nara(lyft, a.lyft, 0.02)) f_.push('lasten är lyft ' + lyft.toFixed(2) + ' m i bilden, inte ' + a.lyft + ' m');
            if (!nara(rep, 2 * a.lyft, 0.02)) f_.push('repet är indraget ' + rep.toFixed(2) + ' m i bilden, inte ' + 2 * a.lyft + ' m');
            if (!b.text.includes(m(a.lyft)) || !b.text.includes(m(2 * a.lyft))) f_.push('sträckorna ' + m(a.lyft) + ' och ' + m(2 * a.lyft) + ' står inte utskrivna');
          }
        } else f_.push('okänt läge');
        const vb = s.viewBox.baseVal, tx = [...s.querySelectorAll('text')].filter(t => t.textContent.trim()).map(t => [t.textContent, t.getBBox(), parseFloat(getComputedStyle(t).fontSize) * sk]);
        tx.forEach(([a, p, px], j) => {
          if (px < 13.95) f_.push('”' + a + '” är ' + px.toFixed(1) + ' px');
          if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
          tx.slice(j + 1).forEach(([b, q]) => { if (p.x < q.x + q.width - 0.5 && q.x < p.x + p.width - 0.5 && p.y < q.y + q.height - 0.5 && q.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
        });
        en.set(id, { typ, minPx: tx.length ? Math.min(...tx.map(x => x[2])) : Infinity, fel: f_ });
      });
      // Ljud och ljus (Kraft och rörelse VI, arbetsorder 30), mätt i figurernas egna element:
      //  - förlopp (README: "Figurer som visar ett förlopp får numrerade steg"): ringarna 1 … N en gång var, N som
      //    figuren ska ha, en mening intill varje ring och "börja här" vid steg 1; strukturer och övriga: inga nummer;
      //  - normalen streckad och vinkelrät mot ytan, och varje vinkelbåge börjar på normalen (vinklarna mäts mot den);
      //  - ljud: A1 molekylen nära sitt viloläge, membranet fram–bak–fram, förtätningarna tätare och den första längre bort i
      //    det tredje ögonblicket; A2 axeln märkt "tryck", vågtopparna under förtätningarna, topp och dal märkta åt rätt håll;
      //    A3 fronterna tätare framför än bakom och orden på rätt sida; A5 tonhöjden: olika våglängd, samma amplitud,
      //    ljudstyrkan: samma våglängd (också mellan förtätningarna i prickarna), olika amplitud; A6 samma våglängd och större
      //    amplitud; A7 signalen ned och ekot upp; A8 svagare våg ut med samma våglängd;
      //  - ljus: reflektionslagen (B1, B2, B3), spegelbilden lika långt bakom (B3), brännpunkterna (B4, B8), Snells lag med
      //    n = 1,33 och vågfronterna tätare i vattnet (B5), pennan (B6), totalreflektionen (B7), bilden upp och ned (B9),
      //    synfelen (B10), prismats ordning (B11), bara det röda ljuset till ögat (B12), spektrumets ordning (B13), två
      //    kolumner utan pilar (B14);
      //  - rörelsepilarna indigo och streckade; ingen text under 14 px, utanför figuren eller över en annan.
      $$('.scen svg[data-ljud], .scen svg[data-ljus]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (lj.has(id)) return;
        const bb = s.getBoundingClientRect(), vb = s.viewBox.baseVal, sk = Math.min(bb.width / vb.width, bb.height / vb.height);
        const namn = s.dataset.ljud ? 'ljud' : 'ljus', lage = s.dataset.ljud || s.dataset.ljus, typ = namn + ' ' + lage, f_ = [];
        const nara = (a, b, t) => Math.abs(a - b) <= (t == null ? 0.6 : t);
        const L_ = el => [el.x1.baseVal.value, el.y1.baseVal.value, el.x2.baseVal.value, el.y2.baseVal.value];
        const P_ = el => [...el.points].map(p => [p.x, p.y]);
        const ak = (a, b) => { const d = Math.abs(a[0] * b[0] + a[1] * b[1]) / Math.hypot(...a) / Math.hypot(...b); return Math.acos(Math.min(1, d)) * 180 / Math.PI; };   // spetsig vinkel mellan två linjer
        const rikt = l => [l[2] - l[0], l[3] - l[1]];
        const avst = (x, y, l) => Math.abs((l[2] - l[0]) * (l[1] - y) - (l[0] - x) * (l[3] - l[1])) / Math.hypot(l[2] - l[0], l[3] - l[1]);
        const q = (sel, r) => (r || s).querySelector(sel), qa = (sel, r) => [...(r || s).querySelectorAll(sel)];
        const txt = r => qa('text', r).map(t => t.textContent).join(' ');
        // vågen i en polyline: våglängden (medianen mellan topparna) och amplituden
        const vag = el => { const p = P_(el), ys = p.map(x => x[1]), mx = Math.max(...ys), mn = Math.min(...ys), amp = (mx - mn) / 2, t = [];
          for (let i = 1; i < p.length - 1; i++) if (ys[i] <= ys[i - 1] && ys[i] < ys[i + 1] && ys[i] < mn + amp * 0.2) t.push(p[i][0]);
          const dx = t.slice(1).map((x, i) => x - t[i]).sort((a, b) => a - b); return { lam: dx.length ? dx[Math.floor(dx.length / 2)] : NaN, amp, toppar: t }; };
        // förtätningarna i prickarna: tätheten (utjämnad) och dess toppar
        const tathet = (g, lam) => { const xs = qa('circle.fig-ljud-prick', g).map(c => c.cx.baseVal.value), x0 = Math.min(...xs), x1 = Math.max(...xs), sg = lam / 7, d = [];
          for (let x = x0; x <= x1; x++) d.push(xs.reduce((a, xi) => a + Math.exp(-((x - xi) * (x - xi)) / (2 * sg * sg)), 0));
          const m = d.reduce((a, b) => a + b, 0) / d.length, w = Math.round(lam / 3), t = [];
          for (let i = w; i < d.length - w; i++) if (d[i] > m * 1.04 && d.slice(i - w, i + w + 1).every(v => v <= d[i])) t.push(x0 + i);
          const dx = t.slice(1).map((x, i) => x - t[i]).sort((a, b) => a - b); return { toppar: t, lam: dx.length ? dx[Math.floor(dx.length / 2)] : NaN }; };
        // stegen
        const FORLOPP = { 'ljud membran': 5, 'ljud resonans': 4, 'ljud ekolod': 5, 'ljud linjal': 4, 'ljud membran-hoger': 4, 'ljud fjader': 3, 'ljud vakuum': 4, 'ljud aska': 4, 'ljud orat-vag': 6, 'ljud gunga': 4, 'ljud stamgafflar': 4, 'ljud stamgaffel-bord': 4, 'ljud vinglas': 4, 'ljud eko-berg': 4, 'ljud ekolod-botten': 5, 'ljud ljudbang': 4, 'ljus spegelbild': 4, 'ljus brytning': 3, 'ljus penna': 4, 'ljus totalreflektion': 3, 'ljus ogat': 4, 'ljus farg': 3 };
        const STRUKTUR = ['ljud orat', 'ljus speglar', 'ljus linser', 'ljus spektrum', 'ljud vagtyper', 'ljud tva-modeller', 'ljud vagbegrepp', 'ljud horomraden', 'ljud hastigheter', 'ljud orat-delar', 'ljud huvud', 'ljud snacka',
          'ljud tonhojd-tid', 'ljud styrka-tid', 'ljud gitarrhals', 'ljud klang-tid', 'ljud strang-delar', 'ljud tonomfang', 'ljud flaskor', 'ljud doppler-centrum', 'ljud decibel', 'ljud exponering', 'ljud bullerbekampning', 'ljud avstandslagen', 'ljud audiogram'];
        const ringar = qa('g.fig-steg'), N = FORLOPP[typ];
        if (N) {
          if (+s.dataset.stegAntal !== N) f_.push('förloppet ska ha ' + N + ' steg, figuren säger ' + s.dataset.stegAntal);
          const nr = ringar.map(g => +g.dataset.steg).sort((a, b) => a - b);
          if (nr.join() !== Array.from({ length: N }, (_, i) => i + 1).join()) f_.push('stegen är ' + nr.join(', ') + ', inte 1–' + N);
          ringar.forEach(g => { const c = q('circle', g), cx = c.cx.baseVal.value, cy = c.cy.baseVal.value, tt = qa('text[data-steg-text="' + g.dataset.steg + '"]');
            const d = Math.min(...tt.map(t => { const b = t.getBBox(); return Math.hypot(Math.max(b.x - cx, 0, cx - b.x - b.width), Math.max(b.y - cy, 0, cy - b.y - b.height)); }));
            if (!tt.length) f_.push('steg ' + g.dataset.steg + ' har ingen mening'); else if (d > 40) f_.push('meningen till steg ' + g.dataset.steg + ' står ' + d.toFixed(0) + ' från ringen'); });
          const bh = qa('text.fig-steg-start'), r1 = ringar.find(g => g.dataset.steg === '1');
          if (bh.length !== 1 || !r1) f_.push('"börja här" står ' + bh.length + ' gånger');
          else { const b = bh[0].getBBox(), c = q('circle', r1), cx = c.cx.baseVal.value, cy = c.cy.baseVal.value, d = Math.hypot(Math.max(b.x - cx, 0, cx - b.x - b.width), Math.max(b.y - cy, 0, cy - b.y - b.height));
            if (d > 40) f_.push('"börja här" står ' + d.toFixed(0) + ' från steg 1'); }
        } else {
          if (ringar.length || qa('text.fig-steg-start').length) f_.push((STRUKTUR.includes(typ) ? 'en struktur' : 'figuren') + ' har numrerade steg');
          if (STRUKTUR.includes(typ) && s.dataset.struktur == null) f_.push('strukturen är inte märkt som struktur');
        }
        // normalen och vinklarna
        const normaler = qa('line.fig-normal');
        if (['ljus reflektion', 'ljus brytning', 'ljus penna', 'ljus totalreflektion'].includes(typ) && !normaler.length) f_.push('normalen saknas');
        normaler.forEach(n => { const l = L_(n), y = +n.dataset.yta;
          if (getComputedStyle(n).strokeDasharray === 'none') f_.push('normalen är inte streckad');
          if (y === 0 && !nara(l[0], l[2])) f_.push('normalen är inte lodrät (ytan är vågrät)');
          if (y === 90 && !nara(l[1], l[3])) f_.push('normalen är inte vågrät (ytan är lodrät)'); });
        qa('path.fig-vinkel').forEach(p => { const a = p.getPointAtLength(0), cx = +p.dataset.cx, cy = +p.dataset.cy;
          if (!normaler.some(n => avst(a.x, a.y, L_(n)) <= 0.6 && avst(cx, cy, L_(n)) <= 0.6)) f_.push('vinkeln ' + (p.dataset.vinkel || '') + ' mäts inte mot normalen'); });
        // rörelsepilarna: indigo och streckade
        const ind = (() => { const t = document.createElementNS('http://www.w3.org/2000/svg', 'line'); t.style.stroke = 'var(--accent)'; s.appendChild(t); const v = getComputedStyle(t).stroke; t.remove(); return v; })();
        qa('line.fig-rorelse').forEach(l => { const c = getComputedStyle(l); if (c.stroke !== ind || c.strokeDasharray === 'none') f_.push('en rörelsepil är inte indigo och streckad'); });
        const st = r => { const l = L_(q('line.fig-ljus-strale[data-roll="' + r + '"]') || { x1: { baseVal: { value: NaN } }, y1: { baseVal: { value: NaN } }, x2: { baseVal: { value: NaN } }, y2: { baseVal: { value: NaN } } }); return l; };
        const nV = +((q('.fig-ljus-data') || { dataset: {} }).dataset.n || 1.33);
        if (lage === 'membran') {
          const R = qa('g.fig-ljud-ogonblick').sort((a, b) => +a.dataset.rad - +b.dataset.rad);
          if (R.length !== 3) f_.push(R.length + ' ögonblick');
          else {
            const lam = +q('g.fig-ljud-prickar', R[0]).dataset.vaglangd;
            const ut = R.map(g => +q('line.fig-ljud-membran', g).dataset.utslag);
            if (!(ut[0] > 1 && ut[1] < -1 && ut[2] > 1)) f_.push('membranet går inte fram, bak, fram (' + ut.map(x => x.toFixed(1)).join(' / ') + ')');
            R.forEach((g, i) => { const m = q('circle.fig-ljud-markerad', g); if (!m || !nara(m.cx.baseVal.value, +m.dataset.vila, lam * 0.2)) f_.push('ögonblick ' + (i + 1) + ': den markerade molekylen är långt från sin plats');
              const xs = qa('circle.fig-ljud-prick', g).map(c => c.cx.baseVal.value), tat = qa('rect.fig-ljud-tat', g);
              tat.forEach(r => { const a = r.x.baseVal.value, w = r.width.baseVal.value, inne = xs.filter(x => x >= a && x <= a + w).length / Math.max(w, 1), alla = xs.length / (Math.max(...xs) - Math.min(...xs));
                if (!(inne > alla * 1.3)) f_.push('ögonblick ' + (i + 1) + ': förtätningen vid ' + a.toFixed(0) + ' är inte tätare (' + (inne / alla).toFixed(2) + ' gånger)'); }); });
            const tat = R.map(g => qa('rect.fig-ljud-tat', g).map(r => r.x.baseVal.value + r.width.baseVal.value / 2));
            if (tat[0].length !== 1 || tat[2].length !== 2) f_.push('förtätningarna: ' + tat.map(t => t.length).join(', ') + ' (ska vara 1, 1, 2)');
            else if (!(Math.max(...tat[2]) > tat[0][0] + 0.8 * lam)) f_.push('den första förtätningen har inte vandrat bort');
          }
        } else if (lage === 'modeller') {
          const ax = q('g.fig-ljud-axel[data-axel="tryck"]'), tt = qa('text').find(t => t.textContent === 'tryck');
          if (!ax || !tt) f_.push('den lodräta axeln är inte märkt "tryck"');
          else { const p = q('polygon', ax).points[0], b = tt.getBBox(); if (Math.hypot(Math.max(b.x - p.x, 0, p.x - b.x - b.width), Math.max(b.y - p.y, 0, p.y - b.y - b.height)) > 30) f_.push('"tryck" står inte vid axelns topp'); }
          const v = vag(q('polyline.fig-ljud-vag')), g = q('g.fig-ljud-prickar'), lam = +g.dataset.vaglangd, d = tathet(g, lam);
          if (!nara(v.lam, lam, 1)) f_.push('vågen har våglängden ' + v.lam.toFixed(1) + ', inte ' + lam);
          v.toppar.filter(x => x > Math.min(...d.toppar) - lam / 3 && x < Math.max(...d.toppar) + lam / 3).forEach(x => { if (!d.toppar.some(t => nara(t, x, lam / 10))) f_.push('vågtoppen vid ' + x.toFixed(0) + ' står inte under en förtätning (' + d.toppar.map(t => t.toFixed(0)).join(', ') + ')'); });
          if (!d.toppar.length) f_.push('inga förtätningar i prickarna');
          const yv = P_(q('polyline.fig-ljud-vag')).map(p => p[1]), top = q('g[data-del="topp"]'), dal = q('g[data-del="dal"]');
          if (!top || !/högre tryck/.test(txt(top)) || top.getBBox().y + top.getBBox().height > Math.min(...yv)) f_.push('vågtoppen är inte märkt "högre tryck" ovanför');
          if (!dal || !/lägre tryck/.test(txt(dal)) || dal.getBBox().y < Math.max(...yv)) f_.push('vågdalen är inte märkt "lägre tryck" nedanför');
        } else if (lage === 'doppler') {
          const c = qa('circle.fig-ljud-front').map(e => [e.cx.baseVal.value, e.r.baseVal.value]).sort((a, b) => a[1] - b[1]);
          const h = c.map(x => x[0] + x[1]), v = c.map(x => x[0] - x[1]), m = a => a.slice(1).reduce((s_, x, i) => s_ + Math.abs(x - a[i]), 0) / (a.length - 1);
          const r = q('g[data-rorelse="bilen"]'), R_ = r && L_(q('line.fig-rorelse', r));
          if (!R_ || !(R_[2] > R_[0] + 10)) f_.push('ambulansen kör inte åt höger');
          if (!(m(h) < m(v) - 2)) f_.push('fronterna framför (' + m(h).toFixed(1) + ') ligger inte tätare än bakom (' + m(v).toFixed(1) + ')');
          const fr = q('g[data-sida="framfor"]'), bk = q('g[data-sida="bakom"]');
          if (!fr || !bk || !/kort/.test(txt(fr)) || !/ljusare/.test(txt(fr)) || !/lång/.test(txt(bk)) || !/mörkare/.test(txt(bk)) || !(fr.getBBox().x > bk.getBBox().x)) f_.push('orden står på fel sida');
        } else if (lage === 'jamforelse' && namn === 'ljud') {
          const J = {}; qa('g.fig-ljud-ljud').forEach(g => { const v = vag(q('polyline.fig-ljud-vag', g)), pk = q('g.fig-ljud-prickar', g); J[g.dataset.ljud] = { v, d: tathet(pk, +pk.dataset.vaglangd) }; });
          const { ljust: a, morkt: b, starkt: c, svagt: e } = J;
          if (!a || !b || !c || !e) f_.push('ljuden saknas');
          else {
            if (!(a.v.lam < b.v.lam - 5)) f_.push('det ljusa ljudet har inte kortare våglängd än det mörka');
            if (!nara(a.v.amp, b.v.amp)) f_.push('tonhöjden: amplituderna skiljer (' + a.v.amp.toFixed(1) + ' / ' + b.v.amp.toFixed(1) + ')');
            if (!nara(c.v.lam, e.v.lam, 1)) f_.push('ljudstyrkan: våglängderna skiljer (' + c.v.lam.toFixed(1) + ' / ' + e.v.lam.toFixed(1) + ')');
            if (!(c.v.amp > e.v.amp + 5)) f_.push('det starka ljudet har inte större amplitud');
            [['ljust', a], ['mörkt', b], ['starkt', c], ['svagt', e]].forEach(([n, x]) => { if (!nara(x.d.lam, x.v.lam, x.v.lam * 0.15)) f_.push(n + ': förtätningarna ligger ' + x.d.lam.toFixed(1) + ' isär, vågen ' + x.v.lam.toFixed(1)); });
            if (!nara(c.d.lam, e.d.lam, c.v.lam * 0.15)) f_.push('starkt och svagt ljud har olika avstånd mellan förtätningarna (' + c.d.lam.toFixed(1) + ' / ' + e.d.lam.toFixed(1) + ')');
          }
        } else if (lage === 'resonans') {
          const a = q('g[data-ljud="svagt"] polyline'), b = q('g[data-ljud="starkt"] polyline'), va = a && vag(a), vb_ = b && vag(b);
          if (!a || !b) f_.push('vågorna saknas');
          else { if (!nara(va.lam, vb_.lam, 1)) f_.push('lådan ändrar våglängden (' + va.lam.toFixed(1) + ' / ' + vb_.lam.toFixed(1) + ')'); if (!(vb_.amp > va.amp * 1.5)) f_.push('lådan ger inte större amplitud'); }
        } else if (lage === 'ekolod') {
          const pil = g => g && { l: L_(q('line', g)), p: q('polygon', g).points[0] };
          const ned = pil(q('g[data-vag="ned"]')), upp = pil(q('g[data-vag="upp"]'));
          if (!ned || !(ned.p.y > ned.l[1] + 20)) f_.push('signalen går inte ned');
          if (!upp || !(upp.p.y < upp.l[1] - 20)) f_.push('ekot går inte upp');
        } else if (lage === 'isolering') {
          qa('g.fig-ljud-isolering').forEach(g => { const i = vag(q('g[data-ljud="in"] polyline', g)), u = vag(q('g[data-ljud="ut"] polyline', g));
            if (!(u.amp < i.amp - 2)) f_.push(g.dataset.satt + ': vågen ut är inte svagare'); if (!nara(u.lam, i.lam, 1)) f_.push(g.dataset.satt + ': våglängden ändras'); });
        } else if (lage === 'orat') {
          ['ytteröra', 'hörselgång', 'trumhinna', 'hörselben', 'hörselsnäcka', 'hörselnerv'].forEach(n => { if (!qa('text').some(t => t.textContent === n)) f_.push('"' + n + '" saknas'); });
        // ---- Kapitel 2 Ljud och ljus, avsnitt I (arbetsorder 33) ----
        } else if (lage === 'linjal') {
          const ut = qa('path.fig-ljud-linjal').map(p => +p.dataset.utslag).sort((a, b) => a - b);
          if (!(ut.length === 3 && ut[0] < -10 && ut[2] > 10)) f_.push('linjalen svänger inte upp och ned (' + ut.join(' / ') + ')');
          if (!q('g[data-rorelse="anden"]')) f_.push('rörelsepilarna vid änden saknas');
          if (qa('path.fig-ljud-front[data-ljudvag]').length < 2) f_.push('ljudet som sprids saknas');
        } else if (lage === 'membran-hoger') {
          // fetstil i ordern: samma prickar följer INTE med vågen – varje prick står nära sitt viloläge, i alla tre
          // ögonblicken samma prickar; förtätningarna vandrar åt höger
          const R = qa('g.fig-ljud-ogonblick').sort((a, b) => +a.dataset.rad - +b.dataset.rad);
          const lam = +q('g.fig-ljud-prickar').dataset.vaglangd;
          const vila = R.map(g => qa('circle.fig-ljud-prick', g).map(c => c.dataset.vila).join(','));
          if (R.length !== 3 || vila.some(v => v !== vila[0])) f_.push('ögonblicken har inte samma prickar');
          R.forEach((g, i) => { const lang = qa('circle.fig-ljud-prick', g).map(c => Math.abs(c.cx.baseVal.value - +c.dataset.vila)), m = Math.max(...lang);
            if (!(m <= lam * 0.2)) f_.push('ögonblick ' + (i + 1) + ': en prick har flyttat sig ' + m.toFixed(1) + ' (mer än en femtedels våglängd) – prickarna följer med vågen'); });
          const ut = R.map(g => +q('line.fig-ljud-membran', g).dataset.utslag);
          if (!(ut[0] > 1 && ut[1] < -1 && ut[2] > 1 && Math.max(...ut.map(Math.abs)) < lam * 0.25)) f_.push('membranet svänger inte fram, bak, fram på samma ställe (' + ut.map(x => x.toFixed(1)).join(' / ') + ')');
          const tat = R.map(g => qa('rect.fig-ljud-tat', g).map(r => r.x.baseVal.value + r.width.baseVal.value / 2));
          if (!(tat[0].length && tat[2].length && Math.max(...tat[2]) > Math.max(...tat[0]) + 0.8 * lam)) f_.push('förtätningen vandrar inte åt höger');
          const p = q('g[data-vagen="hoger"]'), pl = p && L_(q('line', p)), pp = p && q('polygon', p).points[0];
          if (!p || !(pp.x > pl[0] + 20)) f_.push('vågens pil går inte åt höger');
        } else if (lage === 'fjader') {
          // fetstil i ordern: det markerade varvet rör sig bara lite och är tillbaka på sin plats i sista steget
          const R = qa('g.fig-ljud-ogonblick').sort((a, b) => +a.dataset.rad - +b.dataset.rad);
          const m = R.map(g => { const e = q('ellipse.fig-ljud-varv-markerad', g); return e ? e.cx.baseVal.value - +e.dataset.vila : NaN; });
          const a0 = (() => { const v = qa('ellipse.fig-ljud-varv', R[0]).map(e => +e.dataset.vila); return v[1] - v[0]; })();
          if (R.length !== 3 || m.some(isNaN)) f_.push('det markerade varvet saknas');
          else { if (!(Math.max(...m.map(Math.abs)) < a0)) f_.push('det markerade varvet flyttar sig ' + Math.max(...m.map(Math.abs)).toFixed(1) + ' (mer än ett varvs avstånd)');
            if (!(Math.abs(m[2]) <= 0.5)) f_.push('det markerade varvet är inte tillbaka på sin plats i steg 3 (' + m[2].toFixed(1) + ')');
            if (!(Math.abs(m[1]) > 1)) f_.push('det markerade varvet rör sig inte när förtätningen passerar'); }
          const c = R.map(g => +g.dataset.mitt);
          if (!(c[0] < c[1] && c[1] < c[2])) f_.push('förtätningen vandrar inte längs fjädern');
          if (R.some(g => qa('ellipse.fig-ljud-varv', g).some(e => Math.abs(e.cx.baseVal.value - +e.dataset.vila) >= a0))) f_.push('ett varv flyttar sig mer än ett varvs avstånd');
          const rgb_ = e => (getComputedStyle(e).stroke.match(/\d+/g) || []).map(Number), rv = rgb_(q('ellipse.fig-ljud-varv-markerad'));
          if (!(rv[0] > rv[1] + 80 && rv[0] > rv[2] + 80)) f_.push('det markerade varvet är inte rödmarkerat');
        } else if (lage === 'vakuum') {
          const R = qa('g.fig-ljud-forsok').sort((a, b) => +a.dataset.rad - +b.dataset.rad), l = R.map(g => +g.dataset.luft), j = R.map(g => +g.dataset.ljud);
          if (R.length !== 4) f_.push(R.length + ' rader');
          else { if (!(l[0] > l[1] && l[1] > l[2] && l[3] === l[0])) f_.push('luften: ' + l.join(', ') + ' (ska minska och komma tillbaka)');
            if (!(j[0] > j[1] && j[1] > j[2] && j[2] === 0 && j[3] === j[0])) f_.push('ljudet: ' + j.join(', ') + ' (ska bli svagare, nästan inget, och komma tillbaka)');
            R.forEach((g, i) => { if (qa('path.fig-ljud-front', g).length !== j[i]) f_.push('rad ' + (i + 1) + ': ljudvågorna stämmer inte med data-ljud');
              if (qa('circle.fig-ljud-luft', g).length !== l[i]) f_.push('rad ' + (i + 1) + ': luften stämmer inte med data-luft'); }); }
          R.forEach((g, i) => { const t = q('line.fig-ljud-trad', g), k = q('g.fig-ljud-vackare', g), pl = q('rect.fig-ljud-platta', g);
            const kb = k && k.getBBox(), tl = t && L_(t);
            if (!t || !k || !(tl[3] >= kb.y - 1 && tl[1] < kb.y)) f_.push('rad ' + (i + 1) + ': klockan hänger inte i en tråd');
            else if (!(kb.y + kb.height < pl.y.baseVal.value - 2)) f_.push('rad ' + (i + 1) + ': klockan står på plattan (vibrationerna leds ut)'); });
        } else if (lage === 'vagtyper') {
          const lo = q('g[data-vagtyp="longitudinell"]'), tr = q('g[data-vagtyp="transversell"]');
          const pilRikt = g => qa('line.fig-rorelse', g).map(L_);
          if (!lo || !tr) f_.push('vågtyperna saknas');
          else {
            if (!(lo.getBBox().y < tr.getBBox().y)) f_.push('den longitudinella står inte överst');
            const dl = q('g.fig-ljud-dubbel[data-del="varven"]', lo), dt = q('g.fig-ljud-dubbel[data-del="varven"]', tr);
            if (!dl || pilRikt(dl).some(x => !nara(x[1], x[3]) || nara(x[0], x[2]))) f_.push('longitudinell: dubbelpilen för varven går inte längs fjädern');
            if (!dt || pilRikt(dt).some(x => !nara(x[0], x[2]) || nara(x[1], x[3]))) f_.push('transversell: dubbelpilen för varven går inte på tvären');
            [lo, tr].forEach(g => { const p = q('g[data-vagen]', g), pl = p && L_(q('line', p)), pp = p && q('polygon', p).points[0]; if (!p || !(pp.x > pl[0] + 20)) f_.push(g.dataset.vagtyp + ': vågens pil saknas eller går inte åt höger'); });
          }
        } else if (lage === 'tva-modeller') {
          // fetstil i ordern: vågtopp rakt under förtätning, vågdal rakt under förtunning; tryck och avstånd på axlarna;
          // samma våglängd utmärkt i båda modellerna
          const v = vag(q('polyline.fig-ljud-vag')), g = q('g.fig-ljud-prickar'), lam = +g.dataset.vaglangd, d = tathet(g, lam);
          const P = P_(q('polyline.fig-ljud-vag')), ys = P.map(p => p[1]), ymax = Math.max(...ys), dalar = [];
          for (let i = 1; i < P.length - 1; i++) if (ys[i] >= ys[i - 1] && ys[i] > ys[i + 1] && ys[i] > ymax - v.amp * 0.2) dalar.push(P[i][0]);
          if (!nara(v.lam, lam, 1)) f_.push('vågen har våglängden ' + v.lam.toFixed(1) + ', inte ' + lam);
          if (!d.toppar.length) f_.push('inga förtätningar i prickarna');
          v.toppar.filter(x => x > Math.min(...d.toppar) - lam / 3 && x < Math.max(...d.toppar) + lam / 3).forEach(x => { if (!d.toppar.some(t => nara(t, x, lam / 10))) f_.push('vågtoppen vid ' + x.toFixed(0) + ' står inte rakt under en förtätning (' + d.toppar.map(t => t.toFixed(0)).join(', ') + ')'); });
          dalar.forEach(x => { if (!d.toppar.some(t => nara(Math.abs(x - t), lam / 2, lam / 10))) f_.push('vågdalen vid ' + x.toFixed(0) + ' står inte rakt under en förtunning'); });
          ['tryck', 'avstånd', 'vanligt', 'lufttryck', 'förtätning', 'förtunning', 'vågtopp', 'vågdal'].forEach(n => { if (!qa('text').some(t => t.textContent === n)) f_.push('"' + n + '" saknas'); });
          if (!q('g.fig-ljud-axel[data-axel="tryck"]') || !q('g.fig-ljud-axel[data-axel="avstand"]')) f_.push('axlarna tryck och avstånd saknas');
          const m = qa('g.fig-ljud-matt[data-matt="vaglangd"]').map(x => { const l = L_(q('line', x)); return Math.abs(l[2] - l[0]); });
          if (m.length !== 2 || !m.every(x => nara(x, lam, 1))) f_.push('våglängden är inte utmärkt lika lång i båda modellerna (' + m.map(x => x.toFixed(1)).join(' / ') + ', våglängden ' + lam + ')');
          const mitt = q('line.fig-ljud-mittlinje'); if (!mitt || getComputedStyle(mitt).strokeDasharray === 'none') f_.push('mittlinjen är inte streckad');
        } else if (lage === 'vagbegrepp') {
          const V = {}; qa('g.fig-ljud-ljud').forEach(g => { V[g.dataset.ljud] = vag(q('polyline.fig-ljud-vag', g)); });
          if (!V.huvud || !V.hog || !V.lag) f_.push('vågorna saknas');
          else {
            if (!nara(V.hog.amp, V.lag.amp)) f_.push('hög och låg frekvens har olika amplitud (' + V.hog.amp.toFixed(1) + ' / ' + V.lag.amp.toFixed(1) + ')');
            if (!(V.hog.lam < V.lag.lam - 10)) f_.push('hög frekvens har inte kortare våglängd');
            const mv = q('g[data-matt="vaglangd"]'), ma = q('g[data-matt="amplitud"]');
            if (!mv || !nara(+mv.dataset.langd, V.huvud.lam, 1)) f_.push('våglängdens pil är inte en våglängd');
            if (!ma || !nara(+ma.dataset.langd, V.huvud.amp, 1)) f_.push('amplitudens pil är inte amplituden');
          }
          if (qa('text').filter(t => t.textContent === 'avstånd').length !== 3) f_.push('inte alla vågor har "avstånd" på axeln');
          ['våglängd', 'amplitud', 'vågtopp', 'vågdal'].forEach(n => { if (!qa('text').some(t => t.textContent === n)) f_.push('"' + n + '" saknas'); });
        } else if (lage === 'horomraden') {
          // fetstil i ordern: logaritmisk axel, bara hörselområden som staplar, lätena för sig märkta "läten"
          const tk = qa('line.fig-ljud-tick').map(l => [+l.dataset.hz, l.x1.baseVal.value]).sort((a, b) => a[0] - b[0]);
          const steg_ = tk.slice(1).map((t, i) => t[1] - tk[i][1]);
          if (tk.length !== 5 || steg_.some(x => !nara(x, steg_[0], 0.6))) f_.push('axeln är inte logaritmisk (avstånden ' + steg_.map(x => x.toFixed(1)).join(', ') + ')');
          const X = hz => tk[0][1] + (Math.log10(hz) - Math.log10(tk[0][0])) * steg_[0];
          const hors = q('g[data-grupp="horsel"]'), lat = q('g[data-grupp="laten"]');
          const st = g => qa('g.fig-ljud-stapel', g).map(x => ({ n: x.dataset.namn, a: +x.dataset.fran, b: +x.dataset.till, r: q('rect', x) }));
          const H_ = st(hors);
          if (H_.map(x => x.n).join(',') !== 'människa,hund,fladdermus,delfin') f_.push('hörselområdena är ' + H_.map(x => x.n).join(', '));
          H_.concat(st(lat)).forEach(x => { if (!nara(x.r.x.baseVal.value, X(x.a), 1) || !nara(x.r.x.baseVal.value + x.r.width.baseVal.value, X(x.b), 1)) f_.push(x.n + ': stapeln står inte vid ' + x.a + '–' + x.b + ' Hz'); });
          const lt = st(lat);
          if (!lat || !/elefant/.test(lt.map(x => x.n).join(',')) || !/blåval/.test(lt.map(x => x.n).join(',')) || !qa('text', lat).some(t => t.textContent === 'läten')) f_.push('lätena står inte för sig, märkta "läten"');
          else if (!(lat.getBBox().y > hors.getBBox().y + hors.getBBox().height)) f_.push('lätena står inte under hörselområdena');
          if (qa('g.fig-ljud-stapel', hors).some(x => x.classList.contains('fig-ljud-laten'))) f_.push('ett läte står bland hörselområdena');
          ['infraljud', 'hörbart ljud', 'ultraljud'].forEach(n => { if (!q('rect[data-omrade="' + n + '"]')) f_.push('"' + n + '" saknas'); });
          const om = n => { const r = q('rect[data-omrade="' + n + '"]'); return r && [r.x.baseVal.value, r.x.baseVal.value + r.width.baseVal.value]; };
          if (om('hörbart ljud') && (!nara(om('hörbart ljud')[0], X(20), 1) || !nara(om('hörbart ljud')[1], X(20000), 1))) f_.push('hörbart ljud är inte 20–20 000 Hz');
        } else if (lage === 'aska') {
          const lj_ = q('line.fig-ljus-strale[data-roll="ljuset"]'), bx = +q('polygon.fig-ljud-blixten').dataset.x, px = +q('g.fig-ljud-person').dataset.x;
          const l = lj_ && L_(lj_);
          if (!l || !nara(l[1], l[3]) || !(l[0] <= bx + 20 && l[2] >= px - 20)) f_.push('ljuset är inte en rak pil över hela sträckan');
          const fr = qa('path.fig-ljud-front[data-km]').map(p => ({ km: +p.dataset.km, s: +p.dataset.s, x: p.getPointAtLength(p.getTotalLength()).x }));
          if (fr.map(x => x.km).join(',') !== '1,2,3') f_.push('vågfronterna står inte vid 1, 2 och 3 km');
          fr.forEach(x => { if (!nara(x.x, bx + x.km * (px - bx) / 3, 1)) f_.push(x.km + ' km: fronten står vid ' + x.x.toFixed(0) + ', inte en tredjedel av vägen per km');
            if (x.s !== 3 * x.km) f_.push(x.km + ' km efter ' + x.s + ' s (ska vara ' + 3 * x.km + ' s)'); });
          [['efter 3 s:', '1 km'], ['efter 6 s:', '2 km'], ['efter 9 s:', 'mullret hörs']].forEach(([a, b]) => { if (!qa('text').some(t => t.textContent === a) || !qa('text').some(t => t.textContent === b)) f_.push('"' + a + ' ' + b + '" saknas'); });
        } else if (lage === 'hastigheter') {
          const r = qa('rect.fig-ljud-hastighet').map(x => [x.dataset.amne, +x.dataset.v, x.width.baseVal.value]);
          const k = r.map(x => x[2] / x[1]);
          if (r.map(x => x[0] + ' ' + x[1]).join(', ') !== 'luft 340, vatten 1500, trä 4000, stål 5900') f_.push('staplarna är ' + r.map(x => x[0] + ' ' + x[1]).join(', '));
          if (k.some(x => Math.abs(x / k[0] - 1) > 0.01)) f_.push('staplarna är inte i rätt proportion');
        } else if (lage === 'orat-delar') {
          const D = {}; qa('[data-del]').forEach(e => { D[e.dataset.del] = e; });
          ['öronmussla', 'hörselgång', 'trumhinna', 'hammare', 'städ', 'stigbygel', 'ovala fönstret', 'snäcka', 'hörselnerv', 'örontrumpet', 'balansorgan', 'ytteröra', 'mellanöra', 'inneröra'].forEach(n => {
            if (!qa('text').some(t => t.textContent === n)) f_.push('"' + n + '" saknas'); if (!D[n]) f_.push(n + ' är inte ritad'); });
          const K = n => D[n] && [+D[n].dataset.fran, +D[n].dataset.till];
          if (K('ytteröra') && K('mellanöra') && K('inneröra')) {
            if (!nara(K('ytteröra')[1], K('mellanöra')[0]) || !nara(K('mellanöra')[1], K('inneröra')[0])) f_.push('klammerna följer inte på varandra');
            [['ytteröra', ['öronmussla', 'hörselgång']], ['mellanöra', ['hammare', 'städ', 'stigbygel']], ['inneröra', ['snäcka', 'balansorgan']]].forEach(([k, dl]) => dl.forEach(n => {
              const x = D[n] && +D[n].dataset.x; if (!(x > K(k)[0] && x < K(k)[1])) f_.push(n + ' står inte i ' + k); }));
            // ovala fönstret (I D v2, arbetsorder 34): där stigbygeln slutar, vid gränsen mellan mellanöra och inneröra
            const ov = D['ovala fönstret'] && +D['ovala fönstret'].dataset.x;
            if (!(ov > +D.stigbygel.dataset.x && ov < +D['snäcka'].dataset.x && Math.abs(ov - K('inneröra')[0]) <= 6)) f_.push('ovala fönstret står inte mellan stigbygeln och snäckan, vid innerörat');
          }
        } else if (lage === 'orat-vag') {
          const ord = ['hörselgång', 'trumhinna', 'hörselben', 'ovala fönstret', 'snäcka', 'hårceller', 'hörselnerv', 'hjärnan'].map(n => { const e = q('[data-del="' + n + '"]'); return [n, e ? +e.dataset.x : NaN]; });
          ord.forEach((x, i) => { if (isNaN(x[1])) f_.push(x[0] + ' saknas'); else if (i && !(x[1] > ord[i - 1][1])) f_.push(x[0] + ' står före ' + ord[i - 1][0]); });
        } else if (lage === 'huvud') {
          const pf = q('g[data-fran="fram"]'), ph = q('g[data-fran="hoger"]');
          const hv = g => { const h_ = q('g.fig-ljud-huvudet', g); return h_ && { cx: +h_.dataset.cx, cy: +h_.dataset.cy, v: q('[data-ora="vanster"]', h_), h: q('[data-ora="hoger"]', h_) }; };
          const A = pf && hv(pf), B_ = ph && hv(ph);
          if (!A || !B_) f_.push('huvudena saknas');
          else {
            const fa = qa('line.fig-ljud-front', pf).map(L_), fb = qa('line.fig-ljud-front', ph).map(L_);
            if (!fa.length || fa.some(l => !nara(l[1], l[3]) || l[1] > A.cy - 48)) f_.push('framifrån: fronterna är inte raka och framför huvudet');
            if (!nara(A.v.cy.baseVal.value, A.h.cy.baseVal.value)) f_.push('framifrån: öronen är inte lika långt från fronterna');
            if (!fb.length || fb.some(l => !nara(l[0], l[2]) || l[0] < B_.cx + 42)) f_.push('från höger: fronterna är inte raka och till höger om huvudet');
            if (!(B_.h.cx.baseVal.value > B_.v.cx.baseVal.value)) f_.push('från höger: det högra örat är inte närmast');
            const sk = q('.fig-ljud-skuggan', ph); if (!sk || !(+sk.dataset.x < B_.cx)) f_.push('från höger: skuggan står inte vid det vänstra örat');
          }
        } else if (lage === 'snacka') {
          const p = qa('g.fig-ljud-plats').map(g => [+g.dataset.hz, +g.dataset.x]), kil = q('path.fig-ljud-kil').getBBox(), t_ = n => qa('text').find(x => x.textContent === n);
          // (I D v2, arbetsorder 34: bara två markeringar – höga frekvenser vid början, låga längst in, en pil däremellan)
          if (p.map(x => x[0]).join(',') !== '20000,20' || !(p[1][1] > p[0][1])) f_.push('markeringarna är ' + p.map(x => x[0]).join(', ') + ' (ska vara bara höga frekvenser vid början och låga längst in)');
          else { if (!(p[0][1] < kil.x + kil.width * 0.15)) f_.push('höga frekvenser står inte vid början'); if (!(p[1][1] > kil.x + kil.width * 0.85)) f_.push('låga frekvenser står inte längst in'); }
          if (!t_('höga frekvenser') || !t_('låga frekvenser') || !(t_('höga frekvenser').getBBox().x < t_('låga frekvenser').getBBox().x)) f_.push('"höga frekvenser" och "låga frekvenser" saknas eller står i fel ordning');
          if (qa('text').some(x => /(2 000|200) Hz/.test(x.textContent))) f_.push('mellanliggande frekvenser står utskrivna');
          const fp = q('g[data-frekvenspil]'), fl = fp && L_(q('line', fp)), fpp = fp && q('polygon', fp).points[0];
          if (!fp || !(fpp.x > fl[0] + 20)) f_.push('pilen från höga till låga frekvenser saknas');
          const b = q('polygon.fig-ljud-basilar'); if (!b || !(+b.dataset.breddBorjan < +b.dataset.breddSlut)) f_.push('membranet är inte smalt vid början och brett längst in');
          const t = n => qa('text').find(x => x.textContent === n);
          if (!t('smalt och styvt') || !t('brett och mjukt') || !(t('smalt och styvt').getBBox().x < t('brett och mjukt').getBBox().x)) f_.push('"smalt och styvt" står inte vid början och "brett och mjukt" i slutet');
        // ---- Kapitel 2 Ljud och ljus, avsnitt II (arbetsorder 34) ----
        } else if (lage === 'tonhojd-tid' || lage === 'styrka-tid' || lage === 'klang-tid') {
          // fetstil i ordern (II A1, A2, A4): den vågräta axeln märkt "tid", inte avstånd – en tidsaxel under varje våg
          const V = {}; qa('g.fig-ljud-ljud').forEach(g => { V[g.dataset.ljud] = g; });
          const ax = qa('g.fig-ljud-axel[data-axel="tid"]'), tid = qa('text').filter(t => t.textContent === 'tid'), nv = Object.keys(V).length;
          if (!nv || ax.length !== nv || tid.length !== nv) f_.push('inte varje våg har en vågrät axel märkt "tid" (' + ax.length + ' axlar, ' + tid.length + ' "tid", ' + nv + ' vågor)');
          if (qa('text').some(t => /avstånd/.test(t.textContent)) || q('[data-axel="avstand"]')) f_.push('en axel är märkt avstånd');
          ax.forEach(a => { const l = L_(q('line', a)); if (!nara(l[1], l[3])) f_.push('en tidsaxel är inte vågrät'); });
          // y på en kurva (linjärt mellan punkterna)
          const yPa = (P, x) => { for (let i = 1; i < P.length; i++) if (P[i][0] >= x) { const t = (x - P[i - 1][0]) / (P[i][0] - P[i - 1][0]); return P[i - 1][1] + t * (P[i][1] - P[i - 1][1]); } return NaN; };
          const upprepas = (g, per) => { const P = P_(q('polyline', g)); let m = 0; for (let x = P[0][0]; x + per <= P[P.length - 1][0]; x += 1) m = Math.max(m, Math.abs(yPa(P, x) - yPa(P, x + per))); return m; };
          if (lage === 'tonhojd-tid') {
            const h = V.hog && vag(q('polyline', V.hog)), l = V.lag && vag(q('polyline', V.lag));
            if (!h || !l) f_.push('vågorna saknas');
            else { if (!nara(h.amp, l.amp, 0.5)) f_.push('amplituden är inte densamma (' + h.amp.toFixed(1) + ' / ' + l.amp.toFixed(1) + ')');
              if (!(h.lam < l.lam * 0.6)) f_.push('den höga tonen svänger inte tätare (' + h.lam.toFixed(1) + ' / ' + l.lam.toFixed(1) + ')');
              if (!(V.hog.getBBox().y < V.lag.getBBox().y)) f_.push('den höga tonen står inte överst'); }
          } else if (lage === 'styrka-tid') {
            const a = V.stark && vag(q('polyline', V.stark)), b = V.svag && vag(q('polyline', V.svag));
            if (!a || !b) f_.push('vågorna saknas');
            else { if (!nara(a.lam, b.lam, 0.5)) f_.push('frekvensen är inte densamma (' + a.lam.toFixed(1) + ' / ' + b.lam.toFixed(1) + ')');
              if (!(a.amp > 2 * b.amp)) f_.push('den starka tonen har inte större amplitud');
              if (a.toppar.length !== b.toppar.length || a.toppar.some((x, i) => !nara(x, b.toppar[i], 1.5))) f_.push('topparna står inte rakt ovanför varandra (' + a.toppar.map(x => x.toFixed(0)).join(',') + ' / ' + b.toppar.map(x => x.toFixed(0)).join(',') + ')');
              if (!(V.stark.getBBox().y < V.svag.getBBox().y)) f_.push('den starka tonen står inte överst'); }
          } else {
            if (!V.ren || !V.klang || !V.brus) f_.push('ren ton, klang och brus saknas');
            else { const per = +V.ren.dataset.period, a = vag(q('polyline', V.ren));
              if (!nara(a.lam, per, 1.5)) f_.push('den rena tonens period är inte ' + per);
              if (+V.klang.dataset.period !== per || upprepas(V.klang, per) > 1.2) f_.push('klangen upprepar sig inte i samma takt som den rena tonen');
              if (!(upprepas(V.brus, per) > 8)) f_.push('bruset upprepar sig i den rena tonens takt');
              const ys = ['ren', 'klang', 'brus'].map(k => V[k].getBBox().y); if (!(ys[0] < ys[1] && ys[1] < ys[2])) f_.push('ordningen är inte ren ton, klang, brus uppifrån');
              [['ren', 'ren ton'], ['klang', 'klang'], ['brus', 'brus']].forEach(([k, n]) => { if (!qa('text', V[k]).some(t => t.textContent.startsWith(n))) f_.push('"' + n + '" saknas'); }); }
          }
        } else if (lage === 'gitarrhals') {
          // fetstil i ordern (II A3): underst svänger delen mellan det nedtryckta bandet och stallet, inte delen mot sadeln
          const R = qa('g.fig-ljud-gitarr-rad').sort((a, b) => +a.dataset.rad - +b.dataset.rad);
          const del = (g, n) => q('[data-del="' + n + '"]', g), dx = (g, n) => +del(g, n).dataset.x, bage = g => q('path.fig-ljud-bage', g);
          if (R.length !== 2 || R.some(g => !bage(g) || !del(g, 'sadel') || !del(g, 'stall'))) f_.push('två rader med sadel, stall och båge saknas');
          else {
            const [a, b] = R, x12 = +b.dataset.band12, ba = bage(a), bb = bage(b), BA = ba.getBBox(), BB = bb.getBBox();
            if (!nara(+ba.dataset.fran, dx(a, 'sadel'), 1) || !nara(+ba.dataset.till, dx(a, 'stall'), 1) || !nara(BA.x, dx(a, 'sadel'), 1) || !nara(BA.x + BA.width, dx(a, 'stall'), 1)) f_.push('överst: bågen går inte från sadeln till stallet');
            if (!nara(x12, (dx(b, 'sadel') + dx(b, 'stall')) / 2, 2)) f_.push('det tolfte bandet är inte mitt på strängen');
            const b12 = q('line.fig-ljud-band[data-band="12"]', b); if (!b12 || !nara(b12.x1.baseVal.value, x12)) f_.push('det tolfte bandet saknas');
            if (!nara(+bb.dataset.fran, x12, 1) || !nara(+bb.dataset.till, dx(b, 'stall'), 1) || !nara(BB.x, x12, 1) || !nara(BB.x + BB.width, dx(b, 'stall'), 1))
              f_.push('underst: den svängande delen är inte mellan det nedtryckta bandet och stallet (' + BB.x.toFixed(0) + '–' + (BB.x + BB.width).toFixed(0) + ', bandet ' + x12.toFixed(0) + ', stallet ' + dx(b, 'stall') + ')');
            const fi = q('.fig-ljud-finger', b); if (!fi || !(+fi.dataset.x <= x12 && +fi.dataset.x > x12 - 12)) f_.push('fingret trycker inte ned strängen vid det tolfte bandet');
          }
          ['sadel', 'stall', 'tolfte bandet'].forEach(n => { if (!qa('text').some(t => t.textContent === n)) f_.push('"' + n + '" saknas'); });
          if (!/låg ton/.test(txt(R[0])) || !/högre ton/.test(txt(R[1]))) f_.push('"låg ton" och "högre ton" saknas');
        } else if (lage === 'strang-delar') {
          const R = qa('g.fig-ljud-strangrad').sort((a, b) => +a.dataset.delar - +b.dataset.delar);
          if (R.map(g => g.dataset.delar).join() !== '1,2,3') f_.push('raderna är ' + R.map(g => g.dataset.delar).join(', ') + ' delar');
          R.forEach(g => { const n = +g.dataset.delar, a = +g.dataset.fran, b = +g.dataset.till, yc = +g.dataset.yc, Ls = b - a;
            const nod = qa('circle.fig-ljud-nod', g).map(c => c.cx.baseVal.value).sort((x, y) => x - y);
            if (nod.length !== n - 1 || nod.some((x, k) => !nara(x, a + (k + 1) * Ls / n, 1))) f_.push(n + ' delar: de stilla punkterna står inte där strängen delas (' + nod.map(x => x.toFixed(0)).join(', ') + ')');
            const pl = qa('polyline', g).map(P_);
            if (pl.length !== 2) f_.push(n + ' delar: strängens två ytterlägen saknas');
            pl.forEach(P => { if (!nara(P[0][1], yc) || !nara(P[P.length - 1][1], yc) || !nara(P[0][0], a, 1) || !nara(P[P.length - 1][0], b, 1)) f_.push(n + ' delar: strängens ändar står inte still vid fästena');
              nod.forEach(x => { const p = P.reduce((m, r) => Math.abs(r[0] - x) < Math.abs(m[0] - x) ? r : m); if (!nara(p[1], yc, 1)) f_.push(n + ' delar: strängen rör sig vid den stilla punkten ' + x.toFixed(0)); });
              let byt = 0, sg0 = 0; P.forEach(p => { const v = p[1] - yc; if (Math.abs(v) > 0.3) { if (sg0 && Math.sign(v) !== sg0) byt++; sg0 = Math.sign(v); } });
              if (byt !== n - 1) f_.push(n + ' delar: strängen svänger i ' + (byt + 1) + ' delar'); });
            if (pl.length === 2 && pl[0].some((p, i) => !nara(p[1] - yc, -(pl[1][i][1] - yc), 0.6))) f_.push(n + ' delar: ytterlägena är inte åt motsatta håll'); });
          ['grundton, f', '2 f', '3 f'].forEach(t => { if (!qa('text').some(x => x.textContent === t)) f_.push('"' + t + '" saknas'); });
        } else if (lage === 'tonomfang') {
          const tk = qa('line.fig-ljud-tick').map(l => [+l.dataset.hz, l.x1.baseVal.value]).sort((a, b) => a[0] - b[0]);
          const steg_ = tk.slice(1).map((t, i) => t[1] - tk[i][1]);
          if (tk.map(t => t[0]).join() !== '20,200,2000,20000' || steg_.some(x => !nara(x, steg_[0], 0.6))) f_.push('axeln är inte logaritmisk 20–20 000 Hz (' + tk.map(t => t[0]).join(', ') + '; avstånden ' + steg_.map(x => x.toFixed(1)).join(', ') + ')');
          const X = hz => tk[0][1] + (Math.log10(hz) - Math.log10(tk[0][0])) * steg_[0];
          const ST = { piano: [27, 4200], gitarr: [82, 1200], 'flöjt': [260, 2100], 'människoröst': [80, 1000], bastuba: [40, 350] };
          const S = qa('g.fig-ljud-stapel');
          if (S.map(g => g.dataset.namn).sort().join() !== Object.keys(ST).sort().join()) f_.push('staplarna är ' + S.map(g => g.dataset.namn).join(', '));
          S.forEach(g => { const v = ST[g.dataset.namn], r = q('rect', g); if (!v) return;
            if (+g.dataset.fran !== v[0] || +g.dataset.till !== v[1]) f_.push(g.dataset.namn + ': ' + g.dataset.fran + '–' + g.dataset.till + ' Hz (ska vara ' + v[0] + '–' + v[1] + ')');
            if (!nara(r.x.baseVal.value, X(v[0]), 1) || !nara(r.x.baseVal.value + r.width.baseVal.value, X(v[1]), 1)) f_.push(g.dataset.namn + ': stapeln står inte vid ' + v[0] + '–' + v[1] + ' Hz');
            if (!qa('text').some(t => t.textContent === g.dataset.namn)) f_.push('"' + g.dataset.namn + '" saknas'); });
          const ax = q('g.fig-ljud-axel[data-axel="frekvens"] line'), nt = q('g.fig-ljud-normalton');
          if (!nt || +nt.dataset.hz !== 440 || !nara(+nt.dataset.x, X(440), 1)) f_.push('normaltonen står inte vid 440 Hz');
          else if (!(q('polygon', nt).getBBox().y > ax.y1.baseVal.value)) f_.push('normaltonen är inte markerad under axeln');
          if (S.some(g => q('rect', g).y.baseVal.value > ax.y1.baseVal.value)) f_.push('en stapel står under axeln');
          if (!qa('text').some(t => t.textContent === 'normaltonen A 440 Hz')) f_.push('"normaltonen A 440 Hz" saknas');
        } else if (lage === 'gunga') {
          // fetstil i ordern (II B1): knuffen är en pil i gungans rörelseriktning
          const G = qa('g.fig-ljud-gunga').sort((a, b) => +a.dataset.bild - +b.dataset.bild), ut = G.map(g => +g.dataset.utslag);
          if (G.length !== 4) f_.push(G.length + ' bilder');
          if (ut.some((u, i) => i && !(u > ut[i - 1]))) f_.push('utslagen växer inte (' + ut.join(', ') + ')');
          G.forEach(g => { const b = q('path.fig-ljud-utslag', g), a = +g.dataset.utslag, x0 = q('circle.fig-ljud-led', g).cx.baseVal.value, bx = b && b.getBBox();
            if (!b || !nara(bx.width / 2, 86 * Math.sin(a * Math.PI / 180), 1.5)) f_.push('bild ' + g.dataset.bild + ': bågen visar inte utslaget ' + a + '°');
            else if (!nara(bx.x + bx.width / 2, x0, 1)) f_.push('bild ' + g.dataset.bild + ': bågen är inte symmetrisk kring upphängningen'); });
          const kn = G.filter(g => g.dataset.knuff === '1');
          if (kn.length !== 2) f_.push(kn.length + ' knuffar (ska vara 2: bild 1 och 3)');
          kn.forEach(g => { const v = +g.dataset.vinkel, A = +g.dataset.utslag, p = q('g.fig-ljud-knuff', g), si = q('g.fig-ljud-sits', g);
            if (!p) { f_.push('bild ' + g.dataset.bild + ': knuffens pil saknas'); return; }
            const l = L_(q('line', p)), sp = q('polygon', p).points[0], ddx = sp.x - l[0], ddy = sp.y - l[1];
            if (!nara(v, -A, 0.01)) f_.push('bild ' + g.dataset.bild + ': gungan är inte längst bak när den knuffas');
            // framåt längs bågen (mot ökande vinkel): (cos v, −sin v)
            const tx = Math.cos(v * Math.PI / 180), ty = -Math.sin(v * Math.PI / 180), c = (ddx * tx + ddy * ty) / Math.hypot(ddx, ddy);
            if (!(c > 0.97)) f_.push('bild ' + g.dataset.bild + ': knuffen går inte i gungans rörelseriktning (cos ' + c.toFixed(2) + ')');
            if (Math.hypot(sp.x - +si.dataset.x, sp.y - +si.dataset.y) > 16) f_.push('bild ' + g.dataset.bild + ': knuffen når inte sitsen'); });
        } else if (lage === 'stamgafflar') {
          const F = qa('g.fig-ljud-stamgaffel').map(g => ({ g, b: q('path.fig-ljud-gaffel', g).getBBox(), l: q('rect.fig-ljud-lada', g).getBBox() }));
          if (F.length !== 4) f_.push(F.length + ' stämgafflar');
          else {
            if (new Set(F.map(x => x.b.width.toFixed(1) + 'x' + x.b.height.toFixed(1) + '/' + x.l.width.toFixed(1) + 'x' + x.l.height.toFixed(1))).size !== 1) f_.push('stämgafflarna och lådorna är inte likadana');
            F.sort((a, b) => a.b.y - b.b.y || a.b.x - b.b.x);
            const [v1, h1, v2, h2] = F, sv = x => x.g.dataset.svanger === '1';
            if (!(v1.b.x < h1.b.x && v2.b.x < h2.b.x)) f_.push('raderna har inte en vänster och en höger stämgaffel');
            if (!sv(v1) || sv(h1)) f_.push('rad 1: bara den vänstra ska svänga');
            if (sv(v2) || !sv(h2)) f_.push('rad 2: den vänstra ska vara tyst och den högra svänga');
            if (qa('path.fig-ljud-svang', v2.g).length || qa('path.fig-ljud-svang', h1.g).length) f_.push('en tyst stämgaffel har svängningsstreck');
            const hd = q('[data-del="handen"]'), hb = hd && hd.getBBox();
            if (!hb || !(hb.x < v2.b.x + v2.b.width && hb.x + hb.width > v2.b.x && hb.y < v2.b.y + v2.b.height && hb.y + hb.height > v2.b.y)) f_.push('handen håller inte den vänstra stämgaffeln i rad 2');
            const p = q('g.fig-ljud-vagor[data-rad="1"] g[data-vagen="hoger"]'), pl = p && L_(q('line', p)), pp = p && q('polygon', p).points[0];
            if (!p || !(pp.x > pl[0] + 20) || !(pl[0] > v1.b.x && pp.x < h1.b.x)) f_.push('rad 1: ljudvågorna går inte från den vänstra till den högra');
          }
        } else if (lage === 'stamgaffel-bord') {
          const a = q('g[data-ljud="svagt"] polyline'), b = q('g[data-ljud="starkt"] polyline'), bord = q('rect[data-del="bordsskiva"]');
          if (!a || !b || !bord) f_.push('vågorna eller bordsskivan saknas');
          else { const va = vag(a), vb_ = vag(b), bx = bord.getBBox();
            if (!(vb_.amp > 1.5 * va.amp)) f_.push('ljudvågorna från bordet är inte kraftigare (' + vb_.amp.toFixed(1) + ' / ' + va.amp.toFixed(1) + ')');
            if (!nara(va.lam, vb_.lam, 1)) f_.push('bordet ändrar takten (våglängden ' + va.lam.toFixed(1) + ' / ' + vb_.lam.toFixed(1) + ')');
            const pb = b.getBBox(); if (!(pb.width > 0.8 * bx.width)) f_.push('de kraftigare ljudvågorna sprids inte från hela skivan');
            const gf = qa('path.fig-ljud-gaffel').map(p => p.getBBox()).find(g => g.x > bx.x && g.x < bx.x + bx.width);
            if (!gf || !nara(gf.y + gf.height, bx.y, 1)) f_.push('stämgaffelns fot står inte mot bordsskivan');
            if (qa('path.fig-ljud-svang').filter(p => p.getBBox().y > bx.y).length < 2) f_.push('bordsskivan svänger inte med'); }
        } else if (lage === 'flaskor') {
          const B = qa('g.fig-ljud-flaskan').sort((a, b) => +a.dataset.nr - +b.dataset.nr).map(g => ({ g, f: q('path.fig-ljud-flaska', g).getBBox(), v: q('[data-del="vatten"]', g).getBBox(), l: +q('[data-del="luft"]', g).dataset.hojd }));
          if (B.length !== 3) f_.push(B.length + ' flaskor');
          else {
            if (new Set(B.map(x => x.f.width.toFixed(1) + 'x' + x.f.height.toFixed(1) + '@' + x.f.y.toFixed(1))).size !== 1) f_.push('flaskorna är inte likadana');
            if (!(B[0].f.x < B[1].f.x && B[1].f.x < B[2].f.x)) f_.push('flaskorna står inte bredvid varandra');
            if (!(B[0].v.height < B[1].v.height && B[1].v.height < B[2].v.height)) f_.push('vattnet ökar inte från vänster till höger');
            B.forEach((x, i) => { if (!nara(x.l + x.v.height, x.f.height, 1.5)) f_.push('flaska ' + (i + 1) + ': luften är inte allt ovanför vattnet');
              const lt = qa('text', x.g).find(t => t.textContent === 'luft'), lb = lt && lt.getBBox(); if (!lb || !(lb.y + lb.height <= x.v.y + 1 && lb.y >= x.f.y)) f_.push('flaska ' + (i + 1) + ': "luft" står inte i luften ovanför vattnet'); });
            // mer luft – lägre ton: tonen under flaskan med mest luft är den låga
            const ton = x => { const t = qa('text').filter(t => /ton$/.test(t.textContent)).sort((a, b) => Math.abs(a.getBBox().x + a.getBBox().width / 2 - x.f.x - x.f.width / 2) - Math.abs(b.getBBox().x + b.getBBox().width / 2 - x.f.x - x.f.width / 2))[0]; return t && t.textContent; };
            if (B.map(ton).join(' · ') !== 'låg ton · mellanton · hög ton') f_.push('tonerna under flaskorna är ' + B.map(ton).join(' · ') + ' (mest luft ska ge låg ton)');
          }
        } else if (lage === 'vinglas') {
          const G = qa('g.fig-ljud-glaset').sort((a, b) => +a.dataset.bild - +b.dataset.bild), e = G.map(g => +g.dataset.e);
          if (G.length !== 4 || e[0] !== 0 || e.some((x, i) => i && !(x > e[i - 1]))) f_.push('ringen deformeras inte mer och mer (' + e.join(', ') + ')');
          G.forEach((g, i) => { const P = P_(q('polyline.fig-ljud-kant', g)), c = q('circle.fig-ljud-vila', g), cx = c.cx.baseVal.value, cy = c.cy.baseVal.value, r = P.map(p => Math.hypot(p[0] - cx, p[1] - cy));
            const kv = Math.max(...r) / Math.min(...r); if (!nara(kv, (1 + e[i]) / (1 - e[i]), 0.02)) f_.push('bild ' + (i + 1) + ': ringen stämmer inte med deformationen ' + e[i]);
            if (!qa('path.fig-ljud-front', g).length) f_.push('bild ' + (i + 1) + ': ljudvågorna saknas');
            if (!!q('[data-spricka]', g) !== (i === 3)) f_.push('bild ' + (i + 1) + (i === 3 ? ': glaset spricker inte' : ': glaset spricker för tidigt')); });
        } else if (lage === 'eko-berg') {
          const xP = +q('g.fig-ljud-person').dataset.x, xV = +q('path.fig-ljud-berg').dataset.x;
          const pil = n => { const g = q('g[data-vag="' + n + '"]'); return g && { l: L_(q('line', g)), p: q('polygon', g).points[0], g }; }, fr = pil('fram'), ti = pil('tillbaka');
          if (!fr || !(fr.p.x > fr.l[0] + 20) || !nara(fr.p.x, xV, 8) || !(fr.l[0] < xP + 40)) f_.push('ropet går inte från personen till bergväggen');
          if (!ti || !(ti.p.x < ti.l[0] - 20) || !(ti.p.x < xP + 40) || !nara(ti.l[0], xV, 10)) f_.push('ekot går inte från bergväggen tillbaka till personen');
          else if (!ti.g.classList.contains('fig-ljud-eko')) f_.push('ekot är inte ritat som eko (streckat)');
          const m = q('g[data-matt="avstand"]'), ml = m && L_(q('line', m));
          if (!m || !nara(Math.min(ml[0], ml[2]), xP, 1) || !nara(Math.max(ml[0], ml[2]), xV, 1)) f_.push('avståndet till berget är inte utmärkt från personen till väggen');
          if (!/dubbla avståndet/.test(txt()) || !/fram och tillbaka/.test(txt())) f_.push('att ljudet färdas dubbla avståndet, fram och tillbaka, står inte');
        } else if (lage === 'ekolod-botten') {
          const pil = g => g && { l: L_(q('line', g)), p: q('polygon', g).points[0] };
          const ned = pil(q('g[data-vag="ned"]')), upp = pil(q('g[data-vag="upp"]')), yb = +q('path.fig-ljud-botten').dataset.y;
          if (!ned || !(ned.p.y > ned.l[1] + 20) || !nara(ned.p.y, yb, 8)) f_.push('pulsen går inte ned till botten');
          if (!upp || !(upp.p.y < upp.l[1] - 20) || !nara(upp.l[1], yb, 8)) f_.push('ekot går inte upp från botten');
          if (!/delas med 2/.test(txt())) f_.push('"delas med 2" saknas');
        } else if (lage === 'doppler-centrum') {
          // fetstil i ordern (II C3): varje cirkel har sitt centrum där ambulansen var när den sändes ut
          const P = qa('g.fig-ljud-dopplerpanel').sort((a, b) => +a.dataset.v - +b.dataset.v);
          const C = g => qa('circle.fig-ljud-front', g).map(c => ({ a: +c.dataset.alder, x: c.cx.baseVal.value, r: c.r.baseVal.value })).sort((a, b) => a.a - b.a);
          if (P.length !== 2 || +P[0].dataset.v !== 0 || !(+P[1].dataset.v > 0)) f_.push('en stillastående och en körande ambulans saknas');
          else {
            const xa = g => +q('g.fig-ljud-ambulans', g).dataset.x, s0 = C(P[0]), s1 = C(P[1]), u = +P[1].dataset.v, x1 = xa(P[1]), kr = s1.length && s1[0].r / s1[0].a;
            if (!s0.length || s0.some(c => !nara(c.x, xa(P[0])))) f_.push('överst: cirklarna har inte samma centrum som ambulansen');
            if (s1.length < 3 || s1.some(c => !nara(c.x, x1 - u * c.a))) f_.push('underst: cirklarnas centrum är inte där ambulansen var när de sändes ut (' + s1.map(c => c.x.toFixed(1)).join(', ') + ', ambulansen ' + x1 + ')');
            if (s0.concat(s1).some(c => !nara(c.r, kr * c.a))) f_.push('radierna växer inte lika för varje cirkel');
            const fram = s1.slice(1).map((c, i) => (c.x + c.r) - (s1[i].x + s1[i].r)), bak = s1.slice(1).map((c, i) => (s1[i].x - s1[i].r) - (c.x - c.r));
            if (!(Math.max(...fram) < Math.min(...bak))) f_.push('underst: cirklarna ligger inte tätare framför än bakom');
            const pr = q('g[data-rorelse="bilen"]', P[1]), pl = pr && L_(q('line', pr)); if (!pl || !(pl[2] > pl[0])) f_.push('underst: ambulansen kör inte åt höger');
            const lab = n => q('g.fig-ljud-etikett[data-sida="' + n + '"] text'), lj_ = lab('framfor'), mo = lab('bakom');
            if (!lj_ || lj_.textContent !== 'ljusare ton' || !(lj_.getBBox().x > x1) || !mo || mo.textContent !== 'mörkare ton' || !(mo.getBBox().x + mo.getBBox().width < x1)) f_.push('"ljusare ton" står inte framför och "mörkare ton" inte bakom');
          }
        } else if (lage === 'ljudbang') {
          const R = qa('g.fig-ljud-bangruta').sort((a, b) => +a.dataset.nr - +b.dataset.nr);
          if (R.map(g => g.dataset.nr).join() !== '1,2,3,4') f_.push('rutorna är ' + R.map(g => g.dataset.nr).join(', '));
          R.slice(0, 3).forEach(g => { const v = +g.dataset.v, xn = +g.dataset.xn, yc = +g.dataset.yc, C = qa('circle.fig-ljud-front', g).map(c => ({ x: c.cx.baseVal.value, y: c.cy.baseVal.value, r: c.r.baseVal.value })), nr = g.dataset.nr;
            if (C.length < 3) f_.push('ruta ' + nr + ': för få vågor');
            // varje cirkel sändes ut där planet var: centrum v · r bakom nosen, på flygvägen
            if (C.some(c => !nara(c.x, xn - v * c.r) || !nara(c.y, yc))) f_.push('ruta ' + nr + ': vågorna sändes inte ut där planet var');
            if (v < 1 && C.some(c => !(c.x + c.r > xn + 1))) f_.push('ruta ' + nr + ': vågorna sprids inte före planet');
            if (v === 1 && C.some(c => !nara(c.x + c.r, xn))) f_.push('ruta ' + nr + ': vågorna packas inte ihop vid nosen');
            if (v > 1) { if (C.some(c => !(c.x + c.r < xn - 1))) f_.push('ruta ' + nr + ': vågorna hamnar inte bakom planet');
              const K = qa('line.fig-ljud-kon', g).map(L_); if (K.length !== 2) f_.push('ruta ' + nr + ': konen saknas');
              K.forEach(l => { if (!nara(l[0], xn) || !nara(l[1], yc)) f_.push('ruta ' + nr + ': konen utgår inte från nosen'); C.forEach(c => { if (!nara(avst(c.x, c.y, l), c.r, 1)) f_.push('ruta ' + nr + ': konen tangerar inte vågorna'); }); }); }
            if (v >= 1 !== (nr !== '1') || (nr === '2') !== (v === 1)) f_.push('ruta ' + nr + ': fel fart (' + v + ')'); });
          if (R[2] && !/förenklad modell/.test(txt(R[2]))) f_.push('konen är inte märkt som förenklad modell');
          if (R[3]) { const g = R[3], k = qa('line.fig-ljud-kon', g).map(L_).find(l => nara(l[3], +g.dataset.mark)), pe = q('g.fig-ljud-person', g);
            if (!k || !pe || !nara(k[2], +pe.dataset.x, 1) || !nara(k[0], +g.dataset.xn)) f_.push('ruta 4: konen når inte personen på marken'); }
        } else if (lage === 'decibel') {
          // fetstil i ordern (II D1): neutral färg på alla staplar – inga riskfärger (risken beror också på tiden).
          // Arbetsorder 35: liggande staplar, en rad per ljud, från 0 dB överst till 140 dB nederst, namnet till vänster.
          const NAMN = { 0: 'hörtröskel', 10: 'andning', 20: 'viskning', 30: 'tyst sovrum', 40: 'lugn villagata', 50: 'regn', 60: 'vanligt samtal', 70: 'dammsugare', 80: 'tät trafik, skolmatsal', 90: 'gräsklippare', 100: 'motorsåg', 110: 'rockkonsert', 120: 'smärtgräns', 130: 'jetplan på nära håll', 140: 'gevärsskott' };
          const S = qa('rect.fig-ljud-db').map(r => ({ r, d: +r.dataset.db, n: r.dataset.namn, x: r.x.baseVal.value, y: r.y.baseVal.value, w: r.width.baseVal.value, h: r.height.baseVal.value }));
          if (S.map(x => x.d).sort((a, b) => a - b).join() !== Object.keys(NAMN).join()) f_.push('staplarna är ' + S.map(x => x.d).join(', ') + ' dB');
          const fs_ = new Set(S.map(x => getComputedStyle(x.r).fill + '/' + getComputedStyle(x.r).stroke));
          if (fs_.size !== 1) f_.push('staplarna har olika färg (' + [...fs_].join(' · ') + ')');
          S.forEach(x => { const c = (getComputedStyle(x.r).fill.match(/[\d.]+/g) || []).slice(0, 3).map(Number); if (c.length < 3 || Math.max(...c) - Math.min(...c) > 30) f_.push(x.d + ' dB: stapeln har inte en neutral färg (' + getComputedStyle(x.r).fill + ')'); });
          // liggande: alla börjar vid samma x, längden i proportion till dB, lika höga
          if (S.some(x => !nara(x.x, S[0].x))) f_.push('staplarna börjar inte vid samma linje');
          if (S.some(x => !(x.h > 8) || !nara(x.h, S[0].h))) f_.push('staplarna är inte liggande och lika höga');
          const k = S.filter(x => x.d).map(x => x.w / x.d); if (k.some(v => Math.abs(v / k[0] - 1) > 0.01)) f_.push('staplarnas längd är inte i proportion till dB');
          // en rad per ljud, 0 dB överst och 140 dB nederst
          const Y = S.slice().sort((a, b) => a.y - b.y);
          if (Y.some((x, i) => i && !(x.d > Y[i - 1].d && x.y >= Y[i - 1].y + Y[i - 1].h))) f_.push('raderna går inte från 0 dB överst till 140 dB nederst (' + Y.map(x => x.d).join(', ') + ')');
          S.forEach(x => { if (x.n !== NAMN[x.d]) f_.push(x.d + ' dB heter ' + x.n);
            const t = qa('text').find(t => t.textContent === NAMN[x.d]), b = t && t.getBBox();
            if (!b || Math.abs(b.y + b.height / 2 - (x.y + x.h / 2)) > 6 || !(b.x + b.width <= x.x + 0.5 && b.x + b.width >= x.x - 14)) f_.push('"' + NAMN[x.d] + '" står inte till vänster om stapeln (' + x.d + ' dB)'); });
          const tk = qa('line.fig-ljud-tick').map(l => [+l.dataset.db, l.x1.baseVal.value]).sort((a, b) => a[0] - b[0]);
          if (tk.length < 2 || tk.some((t, i) => i && !(t[1] > tk[i - 1][1]))) f_.push('dB-axeln växer inte åt höger');
          S.forEach(x => { const t = tk.find(t => t[0] === x.d) || (tk.length > 1 && [x.d, tk[0][1] + (x.d - tk[0][0]) * (tk[1][1] - tk[0][1]) / (tk[1][0] - tk[0][0])]); if (t && Math.abs(x.x + x.w - t[1]) > 1) f_.push(x.d + ' dB: stapeln slutar inte vid ' + x.d + ' på axeln'); });
          if (!qa('text').some(t => t.textContent === 'nivåerna är ungefärliga och beror på avståndet')) f_.push('noteringen om ungefärliga nivåer saknas');
          if (qa('text').some(t => /risk|farlig|säker/i.test(t.textContent))) f_.push('figuren talar om risk');
        } else if (lage === 'exponering') {
          // fetstil i ordern (II D2): rubriken "Samma ljudexponering vid olika ljudnivåer" – inga ord som "utan risk"
          if (!qa('text').some(t => t.textContent === 'Samma ljudexponering vid olika ljudnivåer')) f_.push('rubriken "Samma ljudexponering vid olika ljudnivåer" saknas');
          if (qa('text').some(t => /risk|säker|ofarlig|farlig|tillåt|ok\b/i.test(t.textContent))) f_.push('figuren har ord om risk: ' + qa('text').filter(t => /risk|säker|ofarlig|farlig|tillåt|ok\b/i.test(t.textContent)).map(t => t.textContent).join(', '));
          const S = qa('rect.fig-ljud-exponering').map(r => ({ d: +r.dataset.db, m: +r.dataset.min, w: r.width.baseVal.value, y: r.y.baseVal.value })).sort((a, b) => a.y - b.y);
          if (S.map(x => x.d + ':' + x.m).join() !== '85:480,88:240,91:120,94:60,97:30,100:15') f_.push('staplarna är ' + S.map(x => x.d + ' dB ' + x.m + ' min').join(', '));
          S.forEach((x, i) => { if (i && Math.abs(x.w / S[i - 1].w - 0.5) > 0.005) f_.push(x.d + ' dB: stapeln är inte hälften så lång som den ovanför'); });
          ['8 timmar', '4 timmar', '2 timmar', '1 timme', '30 minuter', '15 minuter'].forEach(t => { if (!qa('text').some(x => x.textContent === t)) f_.push('"' + t + '" saknas'); });
        } else if (lage === 'bullerbekampning') {
          const R = qa('g.fig-ljud-steg3').map(g => [g.dataset.del, +g.dataset.x]).sort((a, b) => a[1] - b[1]);
          if (R.map(x => x[0]).join() !== 'kalla,vag,mottagare') f_.push('rutorna är ' + R.map(x => x[0]).join(', ') + ' från vänster');
          const p = q('g[data-vagen="hoger"]'), pl = p && L_(q('line', p)), pp = p && q('polygon', p).points[0];
          if (!p || !(pp.x > pl[0] + 20) || !(pl[0] < R[0][1] + 40 && pp.x > R[2][1] + 100)) f_.push('ljudets väg går inte från vänster till höger genom alla tre rutorna');
          ['källa', 'väg', 'mottagare', 'tystare däck,', 'lägre fart', 'bullerplank', 'sovrummet på', 'baksidan,', 'hörselkåpor', 'ljudets väg'].forEach(t => { if (!qa('text').some(x => x.textContent === t)) f_.push('"' + t + '" saknas'); });
          const pk = q('[data-del="bullerplank"]').getBBox(), vb_ = q('rect.fig-ljud-vagbana').getBBox(), hus = qa('path.fig-ljud-hus').map(h => h.getBBox()).sort((a, b) => a.x - b.x);
          if (!(pk.x > vb_.x + vb_.width && pk.x + pk.width < hus[0].x)) f_.push('bullerplanket står inte mellan vägen och huset');
          const so = q('[data-del="sovrum"]').getBBox(), h2 = hus[hus.length - 1];
          if (!(so.x + so.width / 2 > h2.x + h2.width / 2)) f_.push('sovrummet är inte på baksidan (bort från vägen)');
          if (!q('g.fig-ljud-horselkapor')) f_.push('personen med hörselkåpor saknas');
        } else if (lage === 'avstandslagen') {
          const K = qa('circle.fig-ljud-klot').map(c => ({ x: c.cx.baseVal.value, y: c.cy.baseVal.value, r: c.r.baseVal.value })).sort((a, b) => a.r - b.r);
          if (K.length !== 2 || !nara(K[1].r, 2 * K[0].r) || !nara(K[0].x, K[1].x) || !nara(K[0].y, K[1].y)) f_.push('klotens radier är inte r och 2r runt samma källa');
          const sl = q('rect.fig-ljud-yta-liten'), sg = q('g.fig-ljud-yta-stor'), a = sl && +sl.dataset.sida;
          if (!sl || !sg || !nara(+sg.dataset.sida, 2 * a) || +sg.dataset.rutor !== 4 || qa('line', sg).length !== 2) f_.push('den stora rutan är inte dubbelt så bred med fyra lika stora rutor');
          else { const bs = q('rect', sg).getBBox(), bl = sl.getBBox();
            if (!nara(bs.height, 2 * bl.height) || !nara(bs.y + bs.height / 2, K[0].y) || !nara(bl.y + bl.height / 2, K[0].y)) f_.push('rutorna stämmer inte med sina mått');
            qa('line.fig-ljud-stralgang').map(L_).forEach(l => { if (!nara(l[0], K[0].x) || !nara(l[1], K[0].y)) f_.push('en stråle börjar inte i källan');
              const yi = K[0].y + (l[3] - K[0].y) * K[0].r / (l[2] - K[0].x); if (!nara(Math.abs(yi - K[0].y), a / 2, 0.8) || !nara(Math.abs(l[3] - K[0].y), a, 0.8) || !nara(l[2], K[0].x + K[1].r)) f_.push('strålen går inte genom den lilla rutans hörn till den stora rutans'); }); }
          ['fri ljudutbredning, utan reflexer', 'dubbla avståndet –', 'fyra gånger större yta –', 'en fjärdedel av', 'intensiteten –', 'cirka 6 dB lägre', 'r', '2r'].forEach(t => { if (!qa('text').some(x => x.textContent === t)) f_.push('"' + t + '" saknas'); });
        } else if (lage === 'audiogram') {
          // fetstil i ordern (II D5): den lodräta axeln dB HL med 0 överst och större värden nedåt
          const tk = qa('line.fig-ljud-tick[data-db]').map(l => [+l.dataset.db, l.y1.baseVal.value]).sort((a, b) => a[0] - b[0]);
          if (!tk.length || tk[0][0] !== 0 || tk.some((t, i) => i && !(t[1] > tk[i - 1][1]))) f_.push('0 dB HL står inte överst med större värden nedåt');
          const Y = d => tk[0][1] + (d - tk[0][0]) * (tk[tk.length - 1][1] - tk[0][1]) / (tk[tk.length - 1][0] - tk[0][0]);
          if (!q('g.fig-ljud-axel[data-axel="dB HL"]') || !qa('text').some(t => t.textContent === 'hörtröskel (dB HL)') || !qa('text').some(t => t.textContent === 'frekvens (Hz)')) f_.push('axlarnas namn saknas');
          const HZ = [125, 250, 500, 1000, 2000, 4000, 8000], K = {};
          qa('g.fig-ljud-kurva').forEach(g => { const p = qa('circle', g).map(c => ({ hz: +c.dataset.hz, d: +c.dataset.db, x: c.cx.baseVal.value, y: c.cy.baseVal.value }));
            K[g.dataset.kurva] = p; if (p.map(x => x.hz).join() !== HZ.join()) f_.push(g.dataset.kurva + ': frekvenserna är ' + p.map(x => x.hz).join(', '));
            const dx = p.slice(1).map((x, i) => x.x - p[i].x); if (dx.some(v => !nara(v, dx[0]))) f_.push(g.dataset.kurva + ': oktaverna står inte med lika avstånd');
            p.forEach(x => { if (!nara(x.y, Y(x.d), 0.8)) f_.push(g.dataset.kurva + ': punkten vid ' + x.hz + ' Hz står inte vid ' + x.d + ' dB HL'); }); });
          const d = k => (K[k] || []).map(x => x.d);
          if (!K.normal || d('normal').some(v => v > 10)) f_.push('normal hörsel ligger inte nära 0 dB HL');
          if (!K.buller || !(d('buller')[5] > d('buller')[4] + 10 && d('buller')[5] > d('buller')[6] + 10)) f_.push('bullerskadan har ingen dipp vid 4 000 Hz som blir bättre vid 8 000 Hz');
          if (!K.alder || d('alder').some((v, i) => i && v < d('alder')[i - 1]) || !(d('alder')[6] > d('alder')[0] + 30)) f_.push('åldersnedsättningen blir inte gradvis sämre mot höga frekvenser');
          ['normal hörsel', 'bullerskada', 'åldersnedsättning'].forEach(t => { if (!qa('text').some(x => x.textContent === t)) f_.push('"' + t + '" saknas'); });
        } else if (lage === 'foremal') {
          const pA = q('g[data-panel="absorberar"]'), pR = q('g[data-panel="reflekterar"]'), pG = q('g[data-panel="genom"]');
          const ia = L_(q('line[data-roll="in"]', pA)), box = q('rect.fig-ljus-svart', pA), bx = box.x.baseVal.value, by = box.y.baseVal.value;
          if (!(ia[2] >= bx - 1 && ia[2] <= bx + box.width.baseVal.value + 1 && ia[3] >= by - 1 && ia[3] <= by + box.height.baseVal.value + 1) || q('line[data-roll="ut"]', pA)) f_.push('ljuset tar inte slut på det svarta föremålet');
          const ir = L_(q('line[data-roll="in"]', pR)), ur = L_(q('line[data-roll="ut"]', pR));
          if (!nara(ak(rikt(ir), [0, 1]), ak(rikt(ur), [0, 1]), 0.5) || !nara(ir[2], ur[0]) || !nara(ir[3], ur[1])) f_.push('spegeln: vinklarna är inte lika');
          const ig = L_(q('line[data-roll="in"]', pG)), ug = L_(q('line[data-roll="ut"]', pG));
          if (ak(rikt(ig), rikt(ug)) > 0.5 || !nara(ig[2], ug[0]) || !nara(ig[3], ug[1])) f_.push('ljuset genom glaset fortsätter inte rakt');
          if (!q('polygon.fig-ljus-skugga', pA)) f_.push('skuggan saknas');
        } else if (lage === 'reflektion') {
          const i = st('in'), u = st('ut'), n = L_(normaler[0]), vi = ak(rikt(i), rikt(n)), vu = ak(rikt(u), rikt(n));
          if (!nara(vi, vu, 0.5)) f_.push('infallsvinkeln ' + vi.toFixed(1) + '° och reflektionsvinkeln ' + vu.toFixed(1) + '° är inte lika');
          if (!nara(i[2], n[0]) || !nara(u[0], n[0])) f_.push('strålen träffar inte spegeln vid normalen');
          qa('path.fig-vinkel').forEach(p => { if (!nara(+p.dataset.grader, vi, 0.5)) f_.push('vinkeln ' + p.dataset.grader + '° är ritad ' + vi.toFixed(1) + '°'); });
          if (qa('text').filter(t => t.textContent === Math.round(vi) + '°').length !== 2) f_.push('vinklarna står inte utskrivna (' + Math.round(vi) + '°)');
        } else if (lage === 'spegelbild') {
          const xm = L_(q('line.fig-ljus-spegel'))[0], bl = qa('g.fig-ljus-blomma'), x = bl.map(g => +g.dataset.x).sort((a, b) => a - b);
          if (bl.length !== 2 || !nara(xm - x[0], x[1] - xm, 1)) f_.push('spegelbilden står inte lika långt bakom spegeln (' + (xm - x[0]).toFixed(1) + ' / ' + (x[1] - xm).toFixed(1) + ')');
          ['topp', 'fot'].forEach(n => { const a = L_(q('line[data-roll="till-spegeln"][data-punkt="' + n + '"]')), b = L_(q('line[data-roll="till-ogat"][data-punkt="' + n + '"]')), c = L_(q('line.fig-ljus-skenbar[data-punkt="' + n + '"]'));
            if (!nara(a[2], xm) || !nara(b[0], xm) || !nara(c[0], xm) || !nara(a[3], b[1]) || !nara(a[3], c[1])) f_.push(n + ': strålarna möts inte i spegeln');
            if (!nara(ak(rikt(a), [1, 0]), ak(rikt(b), [1, 0]), 0.5)) f_.push(n + ': vinklarna i spegeln är inte lika');
            if (!nara(c[2], x[1], 1) || !nara(c[3], a[1], 1)) f_.push(n + ': ögat följer inte strålen bakåt till spegelbilden'); });
        } else if (lage === 'speglar' || lage === 'linser') {
          qa(lage === 'speglar' ? 'g.fig-ljus-spegeltyp' : 'g.fig-ljus-linstyp').forEach(g => { const [fx, fy] = g.dataset.f.split(',').map(Number);
            qa('line.fig-ljus-strale[data-roll="ut"]', g).forEach(l => { if (avst(fx, fy, L_(l)) > 1) f_.push(g.dataset.typ + ': en stråle ' + (g.dataset.typ === 'konkav' && lage === 'speglar' || g.dataset.typ === 'konvex' && lage === 'linser' ? 'går inte genom' : 'kommer inte från') + ' brännpunkten (' + avst(fx, fy, L_(l)).toFixed(1) + ')'); });
            if (lage === 'linser' && g.dataset.typ === 'konvex') { const m = q('g[data-matt="brannvidd"] line', g), l = L_(m); if (!nara(Math.abs(l[2] - l[0]), Math.abs(fx - +g.dataset.lins), 1)) f_.push('brännvidden är inte avståndet till brännpunkten'); }
            if (lage === 'linser' && g.dataset.typ === 'konkav') qa('line.fig-ljus-skenbar', g).forEach(l => { const b = L_(l); if (!nara(b[2], fx) || !nara(b[3], fy)) f_.push('konkav: de streckade linjerna går inte till punkten framför linsen'); }); });
        } else if (lage === 'brytning' || lage === 'penna') {
          const n = L_(normaler[0]), i = st(lage === 'brytning' ? 'in' : 'i-vattnet'), b = st(lage === 'brytning' ? 'bruten' : 'i-luften');
          const v1 = ak(rikt(i), rikt(n)), v2 = ak(rikt(b), rikt(n));
          const [vu, vn] = lage === 'brytning' ? [v1, v2] : [v2, v1];   // vinkeln i luften och i vattnet
          if (!nara(Math.sin(vu * Math.PI / 180) / Math.sin(vn * Math.PI / 180), nV, 0.02)) f_.push('brytningen följer inte n = ' + nV + ' (' + vu.toFixed(1) + '° i luften, ' + vn.toFixed(1) + '° i vattnet)');
          if (!(vn < vu)) f_.push('strålen bryts inte ' + (lage === 'brytning' ? 'mot' : 'från') + ' normalen');
          if (!nara(i[2], n[0]) || !nara(b[0], n[0])) f_.push('strålen bryts inte vid normalen');
          qa('path.fig-vinkel').forEach(p => { const v = p.dataset.vinkel, m = v === 'in' || v === 'vatten' ? v1 : v2; if (!nara(+p.dataset.grader, m, 0.5)) f_.push('vinkeln ' + v + ' är ' + p.dataset.grader + '°, ritad ' + m.toFixed(1) + '°'); });
          if (lage === 'brytning') {
            const yY = n[1] + 82, d1 = rikt(i), d2 = rikt(b), L1 = Math.hypot(...d1), L2 = Math.hypot(...d2), F = qa('polyline.fig-ljus-front').map(P_);
            const luft = F.filter(p => p.every(x => x[1] < yY - 0.6)), vatten = F.filter(p => p.every(x => x[1] > yY + 0.6)), over = F.filter(p => p.some(x => x[1] < yY - 0.6) && p.some(x => x[1] > yY + 0.6));
            const steg_ = (A, d, L) => { const pr = A.map(p => (p[0][0] * d[0] + p[0][1] * d[1]) / L).sort((a, b) => a - b); return pr.slice(1).map((x, k) => x - pr[k]); };
            const sa = steg_(luft, d1, L1), sv = steg_(vatten, d2, L2), m = a => a.reduce((x, y) => x + y, 0) / a.length;
            if (!sa.length || !sv.length) f_.push('vågfronterna saknas i luften eller vattnet');
            else if (!nara(m(sv) / m(sa), 1 / nV, 0.03)) f_.push('vågfronterna i vattnet ligger ' + m(sv).toFixed(1) + ' isär, i luften ' + m(sa).toFixed(1) + ' (ska vara 1/' + nV + ')');
            luft.concat(vatten).forEach(p => { const d = luft.includes(p) ? d1 : d2; if (Math.abs(90 - ak([p[p.length - 1][0] - p[0][0], p[p.length - 1][1] - p[0][1]], d)) > 1) f_.push('en vågfront står inte vinkelrätt mot strålen'); });
            if (!over.length || over.some(p => p.length !== 3 || !nara(p[1][1], yY))) f_.push('vågfronterna knäcks inte vid ytan');
          } else {
            const T = q('circle[data-spets="verklig"]'), S = q('circle[data-spets="skenbar"]'), ty = T.cy.baseVal.value, sy = S.cy.baseVal.value;
            if (!(sy < ty - 10)) f_.push('spetsen ser inte ut att ligga högre');
            if (avst(S.cx.baseVal.value, sy, b) > 1) f_.push('den skenbara spetsen ligger inte på strålen bakåt');
          }
        } else if (lage === 'totalreflektion') {
          const vk = Math.asin(1 / nV) * 180 / Math.PI, P = qa('g.fig-ljus-panel').sort((a, b) => +a.dataset.panel - +b.dataset.panel);
          const vin = P.map(g => { const n = L_(q('line.fig-normal', g)); return ak(rikt(L_(q('line[data-roll="in"]', g))), rikt(n)); });
          if (P.length !== 3 || !(vin[0] < vin[1] && vin[1] < vin[2])) f_.push('strålarna blir inte allt snettare (' + vin.map(v => v.toFixed(1)).join(', ') + ')');
          else {
            const n0 = L_(q('line.fig-normal', P[0])), u = q('line[data-roll="ut"]', P[0]), vu = u && ak(rikt(L_(u)), rikt(n0));
            if (!u || !nara(Math.sin(vu * Math.PI / 180), nV * Math.sin(vin[0] * Math.PI / 180), 0.01)) f_.push('steg 1: strålen ut bryts inte enligt n = ' + nV);
            const l = q('line[data-roll="langs"]', P[1]); if (!l || !nara(L_(l)[1], L_(l)[3]) || !nara(vin[1], vk, 0.5)) f_.push('steg 2: strålen går inte längs ytan vid gränsvinkeln ' + vk.toFixed(1) + '°');
            const r = q('line[data-roll="reflekterad"]', P[2]), n2 = L_(q('line.fig-normal', P[2]));
            if (!r || !nara(ak(rikt(L_(r)), rikt(n2)), vin[2], 0.5) || q('line[data-roll="ut"]', P[2]) || !(vin[2] > vk)) f_.push('steg 3: allt ljus reflekteras inte tillbaka');
          }
        } else if (lage === 'ogat') {
          const [it, ifo] = q('g[data-bild]').dataset.bild.split(',').map(Number);
          if (!(it > ifo)) f_.push('bilden på näthinnan är inte upp och ned');
          qa('line.fig-ljus-strale[data-till]').forEach(l => { const b = L_(l), y = l.dataset.till === 'topp' ? it : ifo; if (!nara(b[3], y, 1)) f_.push('en stråle från ' + l.dataset.till + ' når inte bildens ' + l.dataset.till); });
        } else if (lage === 'synfel') {
          qa('g.fig-ljus-synfel').forEach(g => { const m = +g.dataset.mot, n = +g.dataset.nathinna, gl = g.dataset.glas === '1', t = g.dataset.typ;
            if (gl && !nara(m, n, 1)) f_.push(t + ' med lins: strålarna möts inte på näthinnan');
            if (!gl && t === 'nar' && !(m < n - 5)) f_.push('närsynt: strålarna möts inte framför näthinnan');
            if (!gl && t === 'over' && !(m > n + 5)) f_.push('översynt: strålarna möts inte bakom näthinnan');
            const cy = q('circle.fig-ljus-motpunkt', g).cy.baseVal.value;
            qa('line[data-roll="i-ogat"]', g).forEach(l => { if (avst(m, cy, L_(l)) > 1) f_.push(t + ': en stråle går inte mot mötespunkten'); }); });
        } else if (lage === 'prisma') {
          const A = ['rott', 'orange', 'gult', 'gront', 'blatt', 'violett'].map(c => { const l = q('line[data-farg="' + c + '"][data-ut]'); return l ? Math.abs(+l.dataset.avvikelse) : NaN; });
          if (!A.every((x, i) => i === 0 || x > A[i - 1])) f_.push('färgerna bryts inte allt mer från rött till violett (' + A.map(x => x.toFixed(1)).join(', ') + ')');
        } else if (lage === 'farg') {
          const ut = qa('line[data-roll="ut"]');
          if (ut.length !== 1 || ut[0].dataset.farg !== 'rott') f_.push('det är inte bara det röda ljuset som reflekteras');
          else { const o = q('g.fig-oga'), l = L_(ut[0]); if (Math.hypot(l[2] - +o.dataset.x, l[3] - +o.dataset.y) > 20) f_.push('det röda ljuset når inte ögat'); }
        } else if (lage === 'spektrum') {
          const n = qa('text[data-rad]').sort((a, b) => a.getBBox().y - b.getBBox().y).map(t => t.textContent.split(':')[0]);
          const R = ['radiovågor', 'mikrovågor', 'infrarött ljus', 'synligt ljus', 'ultraviolett ljus', 'röntgenstrålning', 'gammastrålning'];
          if (n.join() !== R.join()) f_.push('spektrumets ordning: ' + n.join(', '));
          const p = P_(q('polyline.fig-ljus-bandvag')), xc = p.reduce((a, x) => a + x[0], 0) / p.length, k = [];
          for (let i = 1; i < p.length; i++) if ((p[i - 1][0] - xc) * (p[i][0] - xc) < 0) k.push(p[i][1]);
          const d = k.slice(1).map((y, i) => y - k[i]), h = Math.floor(d.length / 2), m = a => a.reduce((x, y) => x + y, 0) / a.length;
          if (!(m(d.slice(h)) < m(d.slice(0, h)))) f_.push('vågen i bandet får inte kortare våglängd nedåt');
        } else if (lage === 'jamforelse') {
          if (qa('polygon, line.fig-pil, .fig-ljud-riktning').length) f_.push('jämförelsen har pilar');
          const ka = qa('text.fig-ljus-kolumn'), l = ka.find(t => t.textContent === 'ljud'), r = ka.find(t => t.textContent === 'ljus');
          if (!l || !r || !(l.getBBox().x < r.getBBox().x)) f_.push('kolumnerna ljud och ljus saknas');
          qa('text[data-kolumn]').forEach(t => { const b = t.getBBox(), v = t.dataset.kolumn === 'ljud'; if (v ? b.x + b.width > vb.width / 2 : b.x < vb.width / 2) f_.push('"' + t.textContent + '" står i fel kolumn'); });
        } else if (!(lage === 'jamforelse')) f_.push('okänt läge');
        const tx = qa('text').filter(t => t.textContent.trim()).map(t => [t.textContent, t.getBBox(), parseFloat(getComputedStyle(t).fontSize) * sk]);
        tx.forEach(([a, p, px], j) => {
          if (px < 13.95) f_.push('”' + a + '” är ' + px.toFixed(1) + ' px');
          if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
          tx.slice(j + 1).forEach(([b, q2]) => { if (p.x < q2.x + q2.width - 0.5 && q2.x < p.x + p.width - 0.5 && p.y < q2.y + q2.height - 0.5 && q2.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
        });
        lj.set(id, { typ, minPx: tx.length ? Math.min(...tx.map(x => x[2])) : Infinity, fel: f_ });
      });
      // Resulterande kraft (Kraft och rörelse IV A, arbetsorder 12), mätt i figurernas egna element:
      //  - resultant_rutor steg: varje pil börjar och slutar i ett rutnätshörn; den flyttade F₂ har samma komposanter som
      //    F₂ i det första steget; resultanten går från startpunkten till den flyttade pilens spets;
      //  - resultant_rutor vinklar: resultantens längd på skärmen = kraftens pil × det uträknade värdet / kraften (±1 px);
      //  - resultant_rutor komposanter: komposanterna längs rutlinjerna, från pilens början till dess spets;
      //  - kraftpilar: pilarnas längder i proportion till krafterna (±1 %), och resultanten = summan med tecken (en kedja:
      //    från den första pilens början till den sista spetsen); med komposanter: sidodelarna tar ut varandra och
      //    uppåtdelarna är tillsammans lika med den nedåtriktade kraften (lampan i två snören).
      $$('.scen svg[data-resultant-rutor], .scen svg[data-kraftpilar]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (rk.has(id)) return;
        const f_ = [], N = 0.6, nara = (a, b, t = N) => Math.abs(a - b) <= t;
        const pilAv = g => { const l = g.querySelector('line.fig-pil'), t = g.querySelector('polygon.fig-pilspets'), c = g.querySelector('circle');
          if (!l) return c ? { a: [c.cx.baseVal.value, c.cy.baseVal.value], b: [c.cx.baseVal.value, c.cy.baseVal.value] } : null;
          return { a: [l.x1.baseVal.value, l.y1.baseVal.value], b: [t.points[0].x, t.points[0].y] }; };
        const vek = p => [p.b[0] - p.a[0], p.b[1] - p.a[1]], langd = p => Math.hypot(...vek(p));
        let typ;
        if (s.dataset.resultantRutor) {
          typ = 'resultant_rutor ' + s.dataset.resultantRutor;
          if (s.dataset.resultantRutor === 'steg') {
            const steg = [...s.querySelectorAll('g.fig-rr-steg')], f2 = [];
            if (steg.length !== 3) f_.push(steg.length + ' steg');
            steg.forEach((g, i) => {
              const L = [...g.querySelectorAll('line.fig-rutnat')], vx = L.filter(l => nara(l.x1.baseVal.value, l.x2.baseVal.value)).map(l => l.x1.baseVal.value),
                hy = L.filter(l => nara(l.y1.baseVal.value, l.y2.baseVal.value)).map(l => l.y1.baseVal.value);
              const horn = ([x, y]) => vx.some(v => nara(v, x)) && hy.some(v => nara(v, y));
              const P = [...g.querySelectorAll('g.fig-rr-pil')].map(e => Object.assign(pilAv(e), { e }));
              P.forEach(p => { if (!horn(p.a) || !horn(p.b)) f_.push('steg ' + (i + 1) + ': en pil börjar eller slutar inte i ett rutnätshörn'); });
              const F1 = P.find(p => p.e.dataset.kraft === '1'), F2 = P.find(p => p.e.dataset.kraft === '2'), R = P.find(p => p.e.hasAttribute('data-resultant'));
              if (F2) f2.push(vek(F2));
              if (i > 0 && F1 && F2 && (!nara(F2.a[0], F1.b[0]) || !nara(F2.a[1], F1.b[1]))) f_.push('steg ' + (i + 1) + ': F₂ börjar inte vid spetsen av F₁');
              if (i === 2 && (!R || !nara(R.a[0], F1.a[0]) || !nara(R.a[1], F1.a[1]) || !nara(R.b[0], F2.b[0]) || !nara(R.b[1], F2.b[1]))) f_.push('steg 3: resultanten går inte från start till den flyttade pilens spets');
            });
            if (f2.length === 3 && f2.slice(1).some(v => !nara(v[0], f2[0][0]) || !nara(v[1], f2[0][1]))) f_.push('F₂ har inte samma komposanter efter flytten (' + f2.map(v => v.map(x => x.toFixed(1)).join(',')).join(' / ') + ')');
          } else if (s.dataset.resultantRutor === 'vinklar') {
            const k = s.getBoundingClientRect().width / s.viewBox.baseVal.width;
            s.querySelectorAll('g.fig-rr-vinkel').forEach(g => {
              const F1 = pilAv(g.querySelector('g.fig-rr-pil[data-kraft="1"]')), R = pilAv(g.querySelector('g.fig-rr-pil[data-resultant]'));
              const vantat = langd(F1) * k * +g.dataset.varde / +g.dataset.kraft, fick = langd(R) * k;
              if (Math.abs(vantat - fick) > 1) f_.push(g.dataset.vinkel + '°: resultanten är ' + fick.toFixed(1) + ' px, ska vara ' + vantat.toFixed(1) + ' px (' + g.dataset.varde + ' av ' + g.dataset.kraft + ')');
            });
          } else if (s.dataset.resultantRutor === 'komposanter') {
            const g = s.querySelector('g.fig-rr-komp'), P = pilAv(g.querySelector('g.fig-rr-pil[data-kraft="1"]'));
            const cx = g.querySelector('line.fig-komposant[data-komposant="x"]'), cyl = g.querySelector('line.fig-komposant[data-komposant="y"]');
            const L = [...g.querySelectorAll('line.fig-rutnat')], vx = L.filter(l => nara(l.x1.baseVal.value, l.x2.baseVal.value)).map(l => l.x1.baseVal.value),
              hy = L.filter(l => nara(l.y1.baseVal.value, l.y2.baseVal.value)).map(l => l.y1.baseVal.value);
            const pa = l => [l.x1.baseVal.value, l.y1.baseVal.value, l.x2.baseVal.value, l.y2.baseVal.value];
            const [ax1, ay1, ax2, ay2] = pa(cx), [bx1, by1, bx2, by2] = pa(cyl);
            if (!nara(ay1, ay2) || !hy.some(v => nara(v, ay1))) f_.push('komposanten åt sidan går inte längs en rutlinje');
            if (!nara(bx1, bx2) || !vx.some(v => nara(v, bx1))) f_.push('komposanten uppåt går inte längs en rutlinje');
            if (!nara(ax1, P.a[0]) || !nara(ay1, P.a[1]) || !nara(ax2, bx1) || !nara(ay2, by1) || !nara(bx2, P.b[0]) || !nara(by2, P.b[1])) f_.push('komposanterna går inte från pilens början till dess spets');
          }
        } else {
          typ = 'kraftpilar' + (s.dataset.kraftpilar === 'kedja' ? ' (kedja)' : s.dataset.kraftpilar === 'lampa' ? ' (lampa)' : '');
          const K = [...s.querySelectorAll('g.fig-kraft')].map(e => Object.assign(pilAv(e), { m: +e.dataset.storlek, g: +e.dataset.g, res: e.hasAttribute('data-resultant'), e }));
          const F = K.filter(p => !p.res), R = K.find(p => p.res);
          // längderna i proportion (pilar som har sin minsta längd, 16, räknas inte)
          const kvot = F.filter(p => langd(p) > 16.5 && p.m).map(p => langd(p) / p.m), hi = Math.max(...kvot), lo = Math.min(...kvot);
          if (kvot.length > 1 && (hi - lo) / hi > 0.01) f_.push('pilarnas längder står inte i proportion till krafterna');
          if (R) {
            const k = kvot.length ? kvot[0] : 1, sum = F.reduce((a, p) => [a[0] + vek(p)[0], a[1] + vek(p)[1]], [0, 0]), r = vek(R);
            // (bara när ingen pil har sin minsta längd: då står längderna inte i proportion)
            if (langd(R) > 16.5 && F.every(p => langd(p) > 16.5) && (!nara(r[0], sum[0], 1) || !nara(r[1], sum[1], 1))) f_.push('resultanten är inte summan av krafterna (' + r.map(x => x.toFixed(1)) + ' / ' + sum.map(x => x.toFixed(1)) + ')');
            if (s.dataset.kraftpilar === 'kedja' && (!nara(R.a[0], F[0].a[0]) || !nara(R.b[0], F[F.length - 1].b[0]))) f_.push('resultanten går inte från den första pilens början till den sista spetsen (i sidled)');
            if (Math.abs(+R.e.dataset.storlek - Math.hypot(...[F.reduce((a, p) => a + p.m * Math.cos(p.g * Math.PI / 180), 0), F.reduce((a, p) => a + p.m * Math.sin(p.g * Math.PI / 180), 0)])) > 0.02) f_.push('resultantens värde är inte summan med tecken');
          }
          if (s.dataset.kraftpilar === 'kedja') F.slice(1).forEach((p, i) => { if (!nara(p.a[0], F[i].b[0]) || !nara(p.a[1], F[i].b[1])) f_.push('pil ' + (i + 2) + ' börjar inte vid spetsen av pil ' + (i + 1)); });
          const komp = [...s.querySelectorAll('line.fig-komposant')];
          if (komp.length) {
            const sx = komp.filter(l => l.dataset.komposant === 'x').map(l => l.x2.baseVal.value - l.x1.baseVal.value);
            const sy = komp.filter(l => l.dataset.komposant === 'y').map(l => l.y1.baseVal.value - l.y2.baseVal.value);
            const ner = F.filter(p => nara(p.g, 270, 0.01)).reduce((a, p) => a + langd(p), 0);
            if (Math.abs(sx.reduce((a, b) => a + b, 0)) > 1 || sx.length < 2) f_.push('snörkrafternas sidodelar tar inte ut varandra (' + sx.map(x => x.toFixed(1)).join(', ') + ')');
            if (Math.abs(sy.reduce((a, b) => a + b, 0) - ner) > 1) f_.push('snörkrafternas uppåtdelar (' + sy.map(x => x.toFixed(1)).join(' + ') + ') är inte lika med tyngdkraften (' + ner.toFixed(1) + ')');
          }
        }
        // texterna: inga utanför figuren eller över en annan; i resultant_rutor ingen under 14 px (kraftpilar har sin
        // egen textstorlek sedan förut, som i III:s figurer)
        if (s.dataset.resultantRutor || ['kedja', 'lampa'].includes(s.dataset.kraftpilar) || s.querySelector('.fig-rod')) {
          const vb = s.viewBox.baseVal, skala = s.getBoundingClientRect().width / vb.width, tx = [...s.querySelectorAll('text')].filter(t => t.textContent.trim()).map(t => [t.textContent, t.getBBox(), parseFloat(getComputedStyle(t).fontSize) * skala]);
          tx.forEach(([a, p, px], j) => {
            if (s.dataset.resultantRutor && px < 13.95) f_.push('”' + a + '” är ' + px.toFixed(1) + ' px');
            if (p.x < -0.5 || p.y < -0.5 || p.x + p.width > vb.width + 0.5 || p.y + p.height > vb.height + 0.5) f_.push('”' + a + '” står utanför figuren');
            tx.slice(j + 1).forEach(([b, q]) => { if (p.x < q.x + q.width - 0.5 && q.x < p.x + p.width - 0.5 && p.y < q.y + q.height - 0.5 && q.y < p.y + p.height - 0.5) f_.push('”' + a + '” och ”' + b + '” överlappar'); });
          });
        }
        rk.set(id, { typ, fel: f_ });
      });
      $$('.scen svg[data-bildpilar]').forEach(s => {
        const id = s.closest('[data-post]').dataset.post;
        if (bp.has(id)) return;
        // bildens yta i rutan: ett stående foto begränsas av höjden och står i mitten av en bredare ruta
        const r = s.getBoundingClientRect(), vb = s.viewBox.baseVal, img = s.querySelector('image');
        const sk = Math.min(r.width / vb.width, r.height / vb.height), ox = (r.width - vb.width * sk) / 2, oy = (r.height - vb.height * sk) / 2;
        const ruta = e => { const q = e.getBoundingClientRect(); return [q.left - r.left - ox, q.top - r.top - oy, q.right - r.left - ox, q.bottom - r.top - oy]; };
        bp.set(id, { vb: [vb.width, vb.height], px: sk, lika: JSON.parse(s.dataset.lika || '[]'), antal: +s.dataset.bildpilar,
          bild: img ? { href: new URL(img.getAttribute('href'), location.href).href, b: img.width.baseVal.value, h: img.height.baseVal.value } : null,
          pilar: [...s.querySelectorAll('g.fig-bildpil')].map(g => { const l = g.querySelector('line.fig-bildpil-rod'), t = g.querySelector('polygon.fig-bildpil-rod').points[0];
            return { x1: l.x1.baseVal.value, y1: l.y1.baseVal.value, x2: t.x, y2: t.y }; }),
          etiketter: [...s.querySelectorAll('text.fig-bildpil-text')].map(t => ({ namn: t.textContent, ruta: ruta(t) })), bredd: vb.width * sk, hojd: vb.height * sk,
          prickar: [...s.querySelectorAll('circle.fig-bildpil-lage')].map(c => [c.cx.baseVal.value, c.cy.baseVal.value]),
          strale: [...s.querySelectorAll('g.fig-bildpil-strale line.fig-bildpil-rod')].map(l => [l.x1.baseVal.value, l.y1.baseVal.value, l.x2.baseVal.value, l.y2.baseVal.value]),
          // etikettens storlek på skärmen: textens storlek i figurens enheter gånger figurens skala
          minPx: Math.min(...[...s.querySelectorAll('text.fig-bildpil-text')].map(t => parseFloat(getComputedStyle(t).fontSize) * sk)) });
      });
    }
    const fel = [], lika = (p, q) => Math.abs(p - q) < 0.6;
    for (const [id, x] of sett) {
      const a = x.xs.slice(1).map((s, i) => s - x.xs[i]), d = a.slice(1).map((s, i) => s - a[i]);
      const ok = x.typ === 'likformig' ? a.every(s => lika(s, a[0]))
        : x.typ === 'accelererande' ? d.every(s => s > 1 && lika(s, d[0]))
        : x.typ === 'retarderad' ? d.every(s => s < -1 && lika(s, d[0]))
        : x.typ === 'olikformig' && d.some(s => s > 1) && d.some(s => s < -1);
      if (!ok || x.xs.length < 4 || !(x.spets > Math.max(...x.xs))) fel.push(id + ' (' + x.typ + '): ' + a.map(s => Math.round(s)).join(', '));
    }
    const parFel = [];
    for (const [id, x] of par) {
      const [p, q] = x.pilar, [m, n] = x.mitt;
      if (x.pilar.length !== 2 || x.mitt.length !== 2) { parFel.push(id + ': ' + x.mitt.length + ' föremål, ' + x.pilar.length + ' pilar'); continue; }
      const dx = [p.x2 - p.x1, q.x2 - q.x1], dy = [p.y2 - p.y1, q.y2 - q.y1], len = dx.map((s, i) => Math.hypot(s, dy[i]));
      const fran = lika(p.x1, m[0]) && lika(p.y1, m[1]) && lika(q.x1, n[0]) && lika(q.y1, n[1]);
      const mot = lika(dx[0], -dx[1]) && lika(dy[0], -dy[1]);
      const motAndra = Math.sign(dx[0]) === Math.sign(n[0] - m[0]);       // pilen på föremål 1 pekar mot föremål 2
      const ok = fran && lika(len[0], len[1]) && len[0] > 20 && mot && (x.satt === 'drag' ? motAndra : x.satt === 'knuff' && !motAndra);
      if (!ok) parFel.push(id + ' (' + x.satt + '): längd ' + len.map(Math.round).join('/') + ', riktning ' + dx.map(Math.round).join('/') + (fran ? '' : ', börjar inte i föremålens mitt'));
    }
    // friktionen: båda ytorna ritade, blockets undersida aldrig under bordets yta men an mot den någonstans, ytorna
    // ojämna; strecklinjerna korsar ingen rubrik; pilarna (om några) lika långa från samma punkt, draget åt höger och
    // friktionen åt vänster, ovanför bordets yta (på blocket)
    const frFel = [], monster = {};
    for (const [id, x] of fr) {
      const f_ = [];
      if (!x.ritad || x.yta.length < 8 || x.undersida.length !== x.yta.length) f_.push('ytorna saknas');
      else {
        const glapp = x.yta.map((p, i) => p[1] - x.undersida[i][1]);
        if (glapp.some(g => g < 0)) f_.push('blocket går ner i bordet');
        if (!glapp.some(g => g < 1.5)) f_.push('ytorna ligger inte an');
        const ys = x.yta.map(p => p[1]);
        if (Math.max(...ys) - Math.min(...ys) < 2) f_.push('ytan är slät');
      }
      const korsar = x.linjer.filter(([x1, y1, x2, y2]) => x.rubriker.some(([a, b, c, e]) =>
        Array.from({ length: 101 }, (_, i) => [x1 + (x2 - x1) * i / 100, y1 + (y2 - y1) * i / 100]).some(([px, py]) => px > a - 2 && px < c + 2 && py > b - 2 && py < e + 2)));
      if (x.linjer.length !== 2 || x.rubriker.length !== 2 || x.rubriker.some(r => !(r[2] - r[0] > 20)) || korsar.length) f_.push(x.linjer.length + ' strecklinjer, ' + x.rubriker.length + ' rubriker' + (korsar.length ? ', en linje korsar en rubrik' : ''));
      if (x.pilar.length) {
        const [dr, fk] = ['drag', 'friktion'].map(k => x.pilar.find(p => p.kraft === k));
        const yMin = x.yta.length ? Math.min(...x.yta.map(p => p[1])) : 0;
        if (!dr || !fk || x.pilar.length !== 2 || !(dr.x2 > dr.x1) || !(fk.x2 < fk.x1) || !lika(dr.x1, fk.x1) || !lika(dr.y1, fk.y1) ||
          !lika(dr.x2 - dr.x1, fk.x1 - fk.x2) || !lika(dr.y1, dr.y2) || !(dr.y1 < yMin)) f_.push('pilarna: ' + JSON.stringify(x.pilar.map(p => [p.kraft, Math.round(p.x1), Math.round(p.x2)])));
      }
      if (f_.length) frFel.push(id + ' (' + x.ytor + '): ' + f_.join(', '));
      // samma mönster varje gång: samma ytor ger samma punkter
      const nyckel = JSON.stringify(x.yta);
      if (monster[x.ytor] && monster[x.ytor] !== nyckel) frFel.push(id + ': mönstret skiljer sig från en annan figur med samma ytor');
      monster[x.ytor] = nyckel;
    }
    // bildpilarna: fotot laddas (med fotots proportioner), pilarna i lika är lika långa (±1 px på skärmen), ingen pil
    // eller etikett utanför utsnittet, och etiketterna överlappar inte varandra
    const bpFel = [], laddad = {};
    for (const [id, x] of bp) {
      const f_ = [];
      if (!x.bild) f_.push('ingen bild');
      else {
        if (!(x.bild.href in laddad)) laddad[x.bild.href] = await new Promise(ok => { const i = new Image(); i.onload = () => ok([i.naturalWidth, i.naturalHeight]); i.onerror = () => ok(null); i.src = x.bild.href; });
        const n = laddad[x.bild.href];
        if (!n) f_.push('bilden laddas inte (' + x.bild.href.split('/').pop() + ')');
        else if (Math.abs(n[0] / n[1] - x.bild.b / x.bild.h) > 0.005) f_.push('bildens proportioner ' + n.join('×') + ' stämmer inte med data');
      }
      if (x.pilar.length !== x.antal || x.etiketter.length !== x.antal) f_.push(x.pilar.length + ' pilar, ' + x.etiketter.length + ' etiketter, ' + x.antal + ' i data');
      const len = x.pilar.map(p => Math.hypot(p.x2 - p.x1, p.y2 - p.y1) * x.px);
      x.lika.forEach(([a, b]) => { if (!(Math.abs(len[a] - len[b]) <= 1)) f_.push('pil ' + a + ' och ' + b + ' är ' + Math.round(len[a]) + ' och ' + Math.round(len[b]) + ' px'); });
      const ute = (px, py) => px < -0.5 || py < -0.5 || px > x.vb[0] + 0.5 || py > x.vb[1] + 0.5;
      x.pilar.forEach((p, i) => { if (ute(p.x1, p.y1) || ute(p.x2, p.y2)) f_.push('pil ' + i + ' utanför utsnittet'); });
      x.etiketter.forEach(e => { if (e.ruta[0] < -0.5 || e.ruta[1] < -0.5 || e.ruta[2] > x.bredd + 0.5 || e.ruta[3] > x.hojd + 0.5) f_.push('etiketten ”' + e.namn + '” utanför utsnittet'); });
      x.etiketter.forEach((e, i) => x.etiketter.slice(i + 1).forEach(g => { const [a, b] = [e.ruta, g.ruta];
        if (a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3]) f_.push('etiketterna ”' + e.namn + '” och ”' + g.namn + '” överlappar'); }));
      if (!(x.minPx >= 13.95)) f_.push('en etikett är bara ' + x.minPx.toFixed(1) + ' px på skärmen (minst 14)');
      // lägesmarkeringarna: lika stora avstånd (±1 px på skärmen) och allt – prickar och stråle – innanför bilden
      const avst = x.prickar.slice(1).map((p, i) => Math.hypot(p[0] - x.prickar[i][0], p[1] - x.prickar[i][1]) * x.px);
      if (avst.length && Math.max(...avst) - Math.min(...avst) > 1) f_.push('prickarnas avstånd är olika: ' + avst.map(a => a.toFixed(1)).join('/') + ' px');
      if (x.prickar.some(p => ute(p[0], p[1]))) f_.push('en prick utanför bilden');
      x.strale.forEach(l => { if (ute(l[0], l[1]) || ute(l[2], l[3])) f_.push('strålen utanför bilden'); });
      if (f_.length) bpFel.push(id + ': ' + f_.join(', '));
    }
    return { antal: sett.size, typer: [...new Set([...sett.values()].map(x => x.typ))], fel,
      par: { antal: par.size, satt: [...new Set([...par.values()].map(x => x.satt))], fel: parFel },
      bp: { antal: bp.size, pilar: [...bp.values()].reduce((a, x) => a + x.pilar.length, 0), fel: bpFel,
        minPx: bp.size ? Math.min(...[...bp.values()].map(x => x.minPx)) : null },
      sym: { antal: symSett.size, fel: symFel },
      st: { antal: st.size, fel: [...st].flatMap(([id, x]) => x.fel.map(e => id + ': ' + e)) },
      fp: { antal: fp.size, fel: [...fp].flatMap(([id, x]) => x.fel.map(e => id + ': ' + e)) },
      hs: { antal: hs.size, fel: [...hs].flatMap(([id, x]) => x.fel.map(e => id + ': ' + e)) },
      pn: { antal: pn.size, staplade: [...pn.values()].filter(x => x.staplad).length, minPx: pn.size ? Math.min(...[...pn.values()].map(x => x.minPx)) : null,
        fel: [...pn].flatMap(([id, x]) => x.fel.map(e => id + ': ' + e)) },
      jm: { antal: jm.size, fel: [...jm].flatMap(([id, x]) => x.fel.map(e => id + ': ' + e)) },
      ry: { antal: ry.size, typer: [...new Set([...ry.values()].map(x => x.typ))], fel: [...ry].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      rk: { antal: rk.size, typer: [...new Set([...rk.values()].map(x => x.typ))], fel: [...rk].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      ng: { antal: ng.size, typer: [...new Set([...ng.values()].map(x => x.typ))], minPx: Math.min(...[...ng.values()].map(x => x.minPx)), fel: [...ng].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      tb: { antal: tb.size, typer: [...new Set([...tb.values()].map(x => x.typ))], minPx: Math.min(...[...tb.values()].map(x => x.minPx)), fel: [...tb].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      tr: { antal: tr.size, typer: [...new Set([...tr.values()].map(x => x.typ))], minPx: Math.min(...[...tr.values()].map(x => x.minPx)), fel: [...tr].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      en: { antal: en.size, typer: [...new Set([...en.values()].map(x => x.typ))], minPx: Math.min(...[...en.values()].map(x => x.minPx)), fel: [...en].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      lj: { antal: lj.size, typer: [...new Set([...lj.values()].map(x => x.typ))], minPx: Math.min(...[...lj.values()].map(x => x.minPx)), fel: [...lj].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      kc: { antal: kc.size, typer: [...new Set([...kc.values()].map(x => x.typ))], minPx: Math.min(...[...kc.values()].map(x => x.minPx)), fel: [...kc].flatMap(([id, x]) => x.fel.map(e => id + ' (' + x.typ + '): ' + e)) },
      fr: { antal: fr.size, ytor: [...new Set([...fr.values()].map(x => x.ytor))], pilar: [...fr.values()].map(x => x.pilar.length), monster, fel: frFel }, tal: [...tal] };
  };`;

// Diagrammen och vektorerna (figurKoll: ng), i scenarierna
const NG_PROV = String.raw`if (spar.some(x => x.rk && x.rk.antal)) prova('figur: resulterande kraft – kraftpilarnas längder i proportion och resultanten summan med tecken (en kedja: från första början till sista spets), pilarna på rutat papper i rutnätets hörn och den flyttade pilen med samma komposanter, resultantens längd vid varje vinkel (±1 px), komposanterna längs rutlinjerna och snörkrafternas delar (sidodelarna tar ut varandra, uppåtdelarna = tyngden), inga texter utanför eller över varandra (' + spar.map(x => x.rk.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.rk.typer))].join(', ') + ')',
    spar.every(x => !x.rk.fel.length), spar.flatMap(x => x.rk.fel).join(' | '));
  if (spar.some(x => x.ng && x.ng.antal)) prova('figur: diagram och vektorer – punkterna på sina koordinater och grafen genom dem, de skuggade ytorna under grafen, pilarna efter varandra och resultanten från början till spets, ingen text under 14 px, utanför eller överlappande (' + spar.map(x => x.ng.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.ng.typer))].join(', ') + ')',
    spar.every(x => !x.ng.fel.length), spar.flatMap(x => x.ng.fel).join(' | ') || 'minsta texten ' + Math.min(...spar.filter(x => x.ng.antal).map(x => x.ng.minPx)).toFixed(1) + ' px');
  if (spar.some(x => x.kc && x.kc.antal)) prova('figur: kaströrelse och cirkelrörelse – bollarna på samma höjd vid varje tidpunkt, den släppta rakt ned och den kastade lika långt framåt varje steg, de vågräta pilarna lika långa och de lodräta lika mycket längre varje sekund, 45° längst, 30° och 60° på samma ställe (±1 px) och 60° högst, hoppets tyngdpunkter på en kastbana, kraftpilen mot mitten och den raka banan längs tangenten, ingen text under 14 px, utanför eller överlappande (' + spar.map(x => x.kc.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.kc.typer))].join(', ') + ')',
    spar.every(x => !x.kc.fel.length), spar.flatMap(x => x.kc.fel).join(' | ') || 'minsta texten ' + Math.min(...spar.filter(x => x.kc.antal).map(x => x.kc.minPx)).toFixed(1) + ' px');
  if (spar.some(x => x.tb && x.tb.antal)) prova('figur: tyngdpunkt, balans och krock – lodlinjen lodrät från tyngdpunkten, stödytan under lådan eller mellan hjulen, lådans tyngdpunkt i mitten, texten (välter eller inte) som lodlinjen och fysiken säger, höjdhopparens tyngdpunkt under ribban och kroppen över, deformationszonens sträcka minst dubbelt så lång och kupén lika lång, ingen text under 14 px, utanför eller överlappande (' + spar.map(x => x.tb.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.tb.typer))].join(', ') + ')',
    spar.every(x => !x.tb.fel.length), spar.flatMap(x => x.tb.fel).join(' | ') || 'minsta texten ' + Math.min(...spar.filter(x => x.tb.antal).map(x => x.tb.minPx)).toFixed(1) + ' px');
  if (spar.some(x => x.tr && x.tr.antal)) prova('figur: tryck – tyngdpilarna lika långa, den större sulan minst dubbelt så lång och den mindre sjunker djupare; den stora kolven minst dubbelt så bred och pilen vid den längre, oljan förbinder cylindrarna, kolvarna på samma höjd och samma p i båda; tryckpilarna i proportion till djupet, sidopilarna parvis lika, lyftkraften = undersidans − ovansidans pil; sträckorna utskrivna, samma oljevolym och samma kraft gånger väg, de ritade sträckorna i areornas kvot; ingen text under 14 px, utanför eller överlappande (' + spar.map(x => x.tr.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.tr.typer))].join(', ') + ')',
    spar.every(x => !x.tr.fel.length), spar.flatMap(x => x.tr.fel).join(' | ') || 'minsta texten ' + Math.min(...spar.filter(x => x.tr.antal).map(x => x.tr.minPx)).toFixed(1) + ' px');
  if (spar.some(x => x.en && x.en.antal)) prova('figur: energi och arbete – varje studs lägre än den förra och bollen hoptryckt bara vid golvet, en våg vid varje studs; kraftpilen uppåt i alla tre panelerna, rörelsepilen uppåt i den första, ingen i den mittersta och vågrät i den tredje, ordet arbete ensamt bara vid den första; repets vinkel som den utskrivna, delarna framåt och uppåt från pilens början till spetsen och talen vid dem = kraften gånger delarnas andel (±1 N); staplarna lika höga tillsammans och lägesenergins i proportion till höjden; gungans ytterlägen på samma höjd och mitten lägst; staven böjd bara i stavhoppets mittläge och lägena i ordning; rampens och bordets höjd lika, rampens längd och kraft gånger sträcka; gungbrädan vågrät, momenten lika, avstånden i skala och vridpilarna lika stora och motriktade; taljans två bärande repdelar, lyftet och det indragna repet, dragkraften halva tyngden; kraftpilarna och deras tal guld; rörelsepilarna i annan färg och streckade; ingen text under 14 px, utanför eller överlappande (' + spar.map(x => x.en.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.en.typer))].join(', ') + ')',
    spar.every(x => !x.en.fel.length), spar.flatMap(x => x.en.fel).join(' | ') || 'minsta texten ' + Math.min(...spar.filter(x => x.en.antal).map(x => x.en.minPx)).toFixed(1) + ' px');
  if (spar.some(x => x.lj && x.lj.antal)) prova('figur: ljud och ljus – förloppen med stegen 1 … N, en mening intill varje ring och "börja här" vid steg 1, strukturerna utan nummer; normalen streckad och vinkelrät mot ytan och vinklarna mätta mot den; membranet fram–bak–fram, molekylen på sin plats och förtätningarna som vandrar bort; axeln märkt "tryck" och vågtopparna under förtätningarna; dopplerns fronter tätare framför; tonhöjden olika våglängd och samma amplitud, ljudstyrkan samma våglängd (också i prickarna) och olika amplitud; resonanslådan samma våglängd och större amplitud; ekolodets signal ned och eko upp; isoleringen svagare våg ut; reflektionslagen, spegelbilden lika långt bakom, brännpunkterna och brännvidden, Snells lag med n = 1,33 och vågfronterna tätare i vattnet, pennans spets högre, totalreflektionen vid gränsvinkeln, bilden upp och ned, synfelen, prismats och spektrumets ordning, bara det röda ljuset till ögat, två kolumner utan pilar; kapitel 2: linjalen upp och ned, samma prickar som inte följer med vågen åt höger, det röda varvet tillbaka på sin plats, luften och ljudet i vakuumförsöket och klockan i en tråd, dubbelpilarna längs och på tvären, vågtopp under förtätning och vågdal under förtunning med samma våglängd i båda modellerna, samma amplitud för hög och låg frekvens, den logaritmiska axeln med hörselområdena och lätena för sig, ljuset över hela sträckan och fronterna vid 1, 2 och 3 km, staplarna i proportion, örats delar i sina klammer och i ordning, öronen och skuggan, snäckans frekvenser; rörelsepilarna indigo och streckade; ingen text under 14 px, utanför eller överlappande (' + spar.map(x => x.lj.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.lj.typer))].join(', ') + ')',
    spar.every(x => !x.lj.fel.length), spar.flatMap(x => x.lj.fel).join(' | ') || 'minsta texten ' + Math.min(...spar.filter(x => x.lj.antal).map(x => x.lj.minPx)).toFixed(1) + ' px');`;

/* ---------- Fristående böcker (arbetsorder 11): Nästa steg, övningsböcker, stödböcker och länkarna mellan dem ----------
 * Klistras in i scenarierna (behöver v, $, $$, synlig, prova, gest, klicka, oppen, stangd, figurKoll, spar, harOmslag).
 *  - Nästa steg: blocket "Nästa steg – gymnasiets fysik" står sist i Läs (under djupdykningarna), ett kort per bok;
 *  - fliken Öva har övningsböckernas kort (fliken går att välja);
 *  - varje kort (Nästa steg, Öva, en stödbok med kort) öppnar sin bok: adressen, ingen nivåväljare, förteckningen
 *    med titeln, omslaget med överraden (inte för en stödbok); figurerna mäts; Stäng leder tillbaka;
 *  - en länk till en annan bok (Matematik du behöver, Används i, övningsboken) öppnar den boken vid avsnittet, och
 *    "↩ Tillbaka till <boken>" leder tillbaka till samma ställe. */
const FRISTAENDE = String.raw`
  const fsKort = sel => $$(sel + ' .fordj-kort[data-oppna]');
  const nastaSek = $('section[data-flik="laes"] > .vill-veta-mer.nasta-steg:not([hidden])');
  const ovaSek = $('section[data-flik="ova"] > .vill-veta-mer.ovningsbocker:not([hidden])');
  const stodSek = $('section[data-flik="laes"] > .vill-veta-mer.stodbocker:not([hidden])');
  if (nastaSek) {
    const synligaILas = [...nastaSek.parentElement.children].filter(e => !e.hidden && e.offsetParent !== null);
    prova('nästa steg: blocket "Nästa steg – gymnasiets fysik" står sist i Läs, under djupdykningarna, med ett kort per bok (' + fsKort('.nasta-steg').length + ')',
      synligaILas[synligaILas.length - 1] === nastaSek && nastaSek.querySelector('h2').textContent === 'Nästa steg – gymnasiets fysik' && fsKort('.nasta-steg').length > 0,
      synligaILas.map(e => e.className || e.tagName).join(' | '));
  }
  if (ovaSek) {
    const flik = $('.flik[data-flik="ova"]');
    prova('öva: fliken Öva går att välja och har övningsbokens kort', flik && flik.getAttribute('aria-disabled') !== 'true' && fsKort('.ovningsbocker').length > 0,
      flik && flik.getAttribute('aria-disabled'));
  }
  const fsFel = [], fsBocker = [];
  for (const [sel, flik, overrad] of [['.nasta-steg', 'laes', 'NÄSTA STEG'], ['.ovningsbocker', 'ova', 'NÄSTA STEG'], ['.stodbocker', 'laes', null], ['.repetitionsbocker', 'laes', 'REPETITION']]) {
    for (let i = 0; i < fsKort(sel).length; i++) {
      const fl = $('.flik[data-flik="' + flik + '"]'); if (fl && !fl.classList.contains('aktiv')) await klicka(fl, 150);
      const kort = fsKort(sel)[i], titel = kort.querySelector('.fordj-kort-titel').textContent.trim(), t = kort.dataset.text;
      await gest(kort, 900);
      const hash = location.hash, utanNiva = getComputedStyle($('.bokapp .niva')).display === 'none';
      const stod = sel === '.stodbocker';
      if (!stod) { Bok.gaTill(0); await v(150); }
      const omslag = $$('.scen .sida.omslag text').map(x => x.textContent).join(' ');
      Bok.gaTill(1); await v(150);
      const toc = (synlig('.scen .boktitel') || {}).textContent || '';
      if (!oppen() || !hash.startsWith('#' + t + '/')) fsFel.push(titel + ': öppnade ' + hash);
      if (!utanNiva) fsFel.push(titel + ': nivåväljaren syns');
      if (harOmslag && !stod && !omslag.includes(overrad)) fsFel.push(titel + ': omslaget ”' + omslag.slice(0, 90) + '”');
      if (stod && omslag) fsFel.push(titel + ': en stödbok ska inte ha något omslag');
      if (!toc.includes(titel)) fsFel.push(titel + ': förteckningen ”' + toc + '”');
      spar.push(await figurKoll());
      fsBocker.push({ t, titel, sel });
      await klicka(synlig('.bok-stang'), 450);
      if (!stangd()) fsFel.push(titel + ': Stäng ledde inte tillbaka (' + location.hash + ')');
    }
  }
  const laes = $('.flik[data-flik="laes"]'); if (laes && !laes.classList.contains('aktiv')) await klicka(laes, 150);
  if (fsBocker.length) prova('fristående böcker: varje kort (Nästa steg, Öva, stödbok, repetitionsbok) öppnar sin bok – adressen, ingen nivåväljare, förteckningen med titeln, omslaget med sortens överrad (inte för en stödbok) – och Stäng leder tillbaka (' + fsBocker.map(b => b.titel).join(', ') + ')',
    !fsFel.length, fsFel.join(' | '));
  // Länkarna mellan böckerna: i varje bok den första länken till en annan bok – den öppnar den boken vid avsnittet, och
  // "Tillbaka till …" leder tillbaka
  const lFel = [], lProv = [];
  for (const b of fsBocker) {
    const fl = $('.flik[data-flik="' + (b.sel === '.ovningsbocker' ? 'ova' : 'laes') + '"]'); if (fl && !fl.classList.contains('aktiv')) await klicka(fl, 150);
    const kort = fsKort(b.sel).find(k => k.dataset.text === b.t); if (!kort) continue;
    await gest(kort, 900);
    const n = $$('.lr-sida').length;
    // den första länken av varje slag: i en rad "Matematik du behöver:"/"Används i" (bokref) och en boklänk
    const forstaPa = {};
    for (let s = 1; s <= n; s++) { Bok.gaTill(s); await v(40);
      for (const sl of ['.b-bokref', '.b-boklank']) if (!(sl in forstaPa) && $$('.scen ' + sl + ' a.bok-lank').some(a => a.offsetParent !== null)) forstaPa[sl] = s; }
    for (const [sl, s] of Object.entries(forstaPa)) {
      Bok.gaTill(s); await v(80);
      const lank = $$('.scen ' + sl + ' a.bok-lank').find(a => a.offsetParent !== null);
      if (!lank) continue;
      const fore = { plats: Bok.plats, hash: location.hash }, mal = lank.dataset.bok, ankare = lank.dataset.ankare, text = lank.textContent.trim();
      await klicka(lank, 400);
      const dit = location.hash, chip = synlig('.tillbaka-chip:not([hidden])'), chipText = chip ? chip.textContent : '';
      if (!oppen() || !dit.startsWith('#' + mal + '/') || (ankare && dit !== '#' + mal + '/' + ankare)) lFel.push(b.titel + ' → ”' + text + '”: ' + dit + ' (väntat #' + mal + '/' + ankare + ')');
      if (!chipText.includes('Tillbaka till') || !chipText.includes(b.titel.slice(0, 12))) lFel.push(b.titel + ': chipet ”' + chipText + '”');
      if (chip) await klicka(chip, 400);
      if (Bok.plats !== fore.plats || location.hash.split('/')[0] !== fore.hash.split('/')[0]) lFel.push(b.titel + ': tillbaka hamnade ' + location.hash + ' / ' + Bok.plats + ' (väntat ' + fore.hash + ' / ' + fore.plats + ')');
      lProv.push(b.titel.slice(0, 24) + ' → ' + text);
    }
    await klicka(synlig('.bok-stang'), 450);
  }
  if (laes && !laes.classList.contains('aktiv')) await klicka(laes, 150);
  if (lProv.length) prova('länkar: en länk till en annan bok öppnar den vid avsnittet, och "↩ Tillbaka till <boken>" leder tillbaka till samma ställe (' + lProv.join('; ') + ')',
    !lFel.length && stangd(), lFel.join(' | '));
`;

/* ---------- Rutan "Vill du gå vidare?" (arbetsorder 13, del 2) ----------
 * Klistras in i scenariot för delkapitel med texter. Varje Fördjupningsbok öppnas från hubben; har den rutan ska den stå
 * sist i boken (bara upphovsraden efter), med rubriken och inledningen. Varje länk i rutan öppnar Nästa steg-textboken
 * vid avsnittet: adressen är bokens och avsnittets, avsnittets början syns, och avsnittets nummer och titel är länkens
 * text. "↩ Tillbaka till <boken>" leder tillbaka till rutan. */
const VIDARE = String.raw`
  {
    const vFel = [], vProv = [];
    const kn = JSON.parse(document.body.dataset.kontroll).nivaer;
    const fordj = Object.keys(kn).filter(k => /\/fordjupning$/.test(k) && typeof kn[k] === 'object').map(k => k.split('/')[0]);
    const nivKnapp = n => $$('section[data-flik="laes"] > .niva-valjare > button.niva-knapp').find(b => b.dataset.niva === n);
    const niva0 = ($('section[data-flik="laes"] > .niva-valjare > button.niva-knapp.aktiv') || { dataset: {} }).dataset.niva;
    let rutor = 0;
    if (nivKnapp('fordjupning')) for (const t of fordj) {
      await klicka(nivKnapp('fordjupning'), 150);
      const knapp = $$('.underdel-knapp[data-oppna]').find(b => b.dataset.text === t); if (!knapp) continue;
      await gest(knapp, 900);
      const n = $$('.lr-sida').length; let sida = 0;
      for (let s = n; s >= Math.max(1, n - 4) && !sida; s--) { Bok.gaTill(s); await v(40); if ($$('.scen .b-vidare').some(e => e.offsetParent !== null)) sida = s; }
      if (!sida) { await klicka(synlig('.bok-stang'), 450); continue; }
      rutor++;
      const ruta = $$('.scen .b-vidare').find(e => e.offsetParent !== null), efter = [];
      for (let e = ruta.nextElementSibling; e; e = e.nextElementSibling) if (!e.matches('.upphov')) efter.push(e.className || e.tagName);
      if (sida !== n || efter.length) vFel.push(t + ': rutan står inte sist i boken (s.' + sida + ' av ' + n + (efter.length ? ', efter den: ' + efter.join(', ') : '') + ')');
      const rub = (ruta.querySelector('h4') || {}).textContent, inl = (ruta.querySelector('p') || {}).textContent;
      // (arbetsorder 33) länkar till en annan sida (a.bok-lank-sida): inledningen "Läs mer i kapitel …", adressen går till
      // en avsnittssida med ?niva=…#text/avsnitt, och texten är "Textens titel: N. Avsnittets titel" (målet prövas av
      // verktyg/vidare-rutor.js, som räknar fram länken ur målsidans böcker, och av ordagrant.js)
      const sid = [...ruta.querySelectorAll('a.bok-lank-sida')];
      if (rub !== 'Vill du gå vidare?' || inl !== (sid.length ? inl.startsWith('Läs mer i kapitel ') && inl : 'Läs mer i Nästa steg – gymnasiets kraft och rörelse:')) vFel.push(t + ': rubriken/inledningen ”' + rub + '” / ”' + inl + '”');
      sid.forEach(a => { const u = new URL(a.href);
        if (!/\/index\.html$/.test(u.pathname) || !/^\?niva=[a-z]+$/.test(u.search) || !/^#[a-z0-9-]+\/[a-z0-9-]+$/.test(u.hash) || !/^.+: \d+\. .+$/.test(a.textContent.trim())) vFel.push(t + ' → ”' + a.textContent.trim() + '”: ' + a.getAttribute('href'));
        else vProv.push(t + ' → ' + a.textContent.trim() + ' (annan sida)'); });
      const antal = ruta.querySelectorAll('a.bok-lank').length;
      if (!antal && !sid.length) vFel.push(t + ': rutan har inga länkar');
      for (let i = 0; i < antal; i++) {
        Bok.gaTill(sida); await v(80);
        const lank = $$('.scen .b-vidare a.bok-lank').filter(a => a.offsetParent !== null)[i];
        const fore = Bok.plats, mal = lank.dataset.bok, ankare = lank.dataset.ankare, text = lank.textContent.trim();
        await klicka(lank, 450);
        const start = synlig('.scen [data-post="' + ankare + '-start"]');
        const namn = start ? (start.querySelector('.avsnittsnr').textContent.trim() + '. ' + start.querySelector('h1').textContent.trim()) : '';
        if (!oppen() || location.hash !== '#' + mal + '/' + ankare || !start || namn !== text)
          vFel.push(t + ' → ”' + text + '”: ' + location.hash + ', ' + (start ? 'avsnittet heter ”' + namn + '”' : 'avsnittets början syns inte'));
        const chip = synlig('.tillbaka-chip:not([hidden])');
        if (chip) await klicka(chip, 450); else vFel.push(t + ' → ”' + text + '”: inget tillbaka-chip');
        if (Bok.plats !== fore) vFel.push(t + ' → ”' + text + '”: tillbaka hamnade på ' + Bok.plats + ' (väntat ' + fore + ')');
        vProv.push(t + ' → ' + text);
      }
      await klicka(synlig('.bok-stang'), 450);
    }
    if (niva0 && nivKnapp(niva0)) await klicka(nivKnapp(niva0), 150);
    if (rutor) prova('vidare: rutan "Vill du gå vidare?" står sist i Fördjupningen, och varje länk öppnar Nästa steg-textboken vid avsnittet med det numret och den titeln; Tillbaka leder tillbaka (' + rutor + ' rutor, ' + vProv.length + ' länkar: ' + vProv.join('; ') + ')',
      !vFel.length && stangd(), vFel.join(' | '));
  }
`;

/* ---------- Länkar i löptexten (2026-11-11) ----------
 * [text](#bok/ankare) i en text: kontrolläget listar länkarna (textlankar). Varje bok med en sådan länk öppnas från
 * hubben, länken hittas i ett stycke eller en punkt, och den öppnar den andra boken (adressen börjar med bokens namn,
 * och med ankaret om det finns). "↩ Tillbaka till <boken>" leder tillbaka dit eleven var. (IV B Standard → Galileo.) */
const TEXTLANK = String.raw`
  {
    const tl = JSON.parse(document.body.dataset.kontroll).textlankar || [], tFel = [], tProv = [];
    const nivKnapp = n => $$('section[data-flik="laes"] > .niva-valjare > button.niva-knapp').find(b => b.dataset.niva === n);
    const niva0 = ($('section[data-flik="laes"] > .niva-valjare > button.niva-knapp.aktiv') || { dataset: {} }).dataset.niva;
    for (const l of tl) {
      if (!nivKnapp(l.niva)) continue;
      await klicka(nivKnapp(l.niva), 150);
      const knapp = $$('.underdel-knapp[data-oppna]').find(b => b.dataset.text === l.text);
      if (!knapp) { tFel.push(l.text + ': texten går inte att öppna'); continue; }
      await gest(knapp, 900);
      const n = $$('.lr-sida').length; let sida = 0;
      const hitta = () => $$('.scen a.bok-lank[data-bok="' + l.mal + '"]').find(a => a.offsetParent !== null && a.textContent === l.lanktext && a.closest('.b-text, li'));
      for (let s = 1; s <= n && !sida; s++) { Bok.gaTill(s); await v(40); if (hitta()) sida = s; }
      if (!sida) { tFel.push(l.text + '/' + l.niva + ': länken ”' + l.lanktext + '” syns inte'); await klicka(synlig('.bok-stang'), 450); continue; }
      const fore = Bok.plats;
      await klicka(hitta(), 600);
      if (!oppen() || !location.hash.startsWith('#' + l.mal + '/' + (l.ankare || ''))) tFel.push(l.text + ' → ' + l.mal + ': ' + location.hash);
      const chip = synlig('.tillbaka-chip:not([hidden])');
      if (chip) await klicka(chip, 450); else tFel.push(l.text + ' → ' + l.mal + ': inget tillbaka-chip');
      if (Bok.plats !== fore) tFel.push(l.text + ' → ' + l.mal + ': tillbaka hamnade på ' + Bok.plats + ' (väntat ' + fore + ')');
      tProv.push(l.text + '/' + l.niva + ' s.' + sida + ' → ' + l.mal);
      await klicka(synlig('.bok-stang'), 450);
    }
    if (niva0 && nivKnapp(niva0)) await klicka(nivKnapp(niva0), 150);
    if (tl.length) prova('textlänkar: länken i löptexten öppnar boken (' + tProv.join('; ') + '), och Tillbaka leder tillbaka',
      !tFel.length && stangd(), tFel.join(' | '));
  }
`;

/* ---------- Scenariot i sidan: bara motorns egna element, så att det gäller varje delkapitel ---------- */

const SCENARIO = String.raw`async (helskarmLage, utanFonster) => {
  // Utan fönster (arbetsorder 36): själva helskärmen hoppas över; boken ska ändå begära helskärm när den öppnas
  const helskHoppas = helskarmLage && utanFonster;
  const hoppa = namn => k.push({ namn, ok: true, hoppat: 'inget fönsterläge', detalj: '' });
  let begard = 0; const rf0 = Element.prototype.requestFullscreen;
  if (helskHoppas && rf0) Element.prototype.requestFullscreen = function () { begard++; return rf0.apply(this, arguments); };
  const v = ms => new Promise(r => setTimeout(r, ms));
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const synlig = s => $$(s).find(e => e.offsetParent !== null);
  const k = [];
  const prova = (namn, ok, detalj) => k.push({ namn, ok: !!ok, detalj: detalj == null ? '' : String(detalj) });
  const syns = () => $$('.scen .uppslag > .sida[data-nr]').map(e => +e.dataset.nr);
  const tangent = t => document.dispatchEvent(new KeyboardEvent('keydown', { key: t, bubbles: true }));
  const oppen = () => !$('.bokapp').hidden;
  const helsk = () => !!document.fullscreenElement;
  const klicka = async (e, ms = 120) => { e.click(); await v(ms); };
  // Det som öppnar boken klickas med musen (__gest i grinden), som en elev gör – helskärm kräver en äkta gest.
  const gest = async (e, ms = 650) => {
    e.scrollIntoView({ block: 'center' }); await v(60);
    const r = e.getBoundingClientRect();
    __gest(JSON.stringify({ x: r.left + r.width / 2, y: r.top + r.height / 2 })); await v(ms);
  };
  const stangd = () => !oppen() && location.hash === '' && !helsk();
  // Sidorna bryts efter sidmåttet, så platser är block (data-post), inte sidnummer: sidan som visar ett block
  const sidaMed = id => $$('.scen .uppslag > .sida[data-nr]').find(s => s.querySelector('[data-post="' + id + '"]'));
  const visar = id => !!sidaMed(id);
  // Omslaget (kapitel.js): undertiteln, och att texterna står innanför ramen i ordning och motivet under dem
  const harOmslag = JSON.parse(document.body.dataset.kontroll).omslag;
  const omslagUnder = () => $$('.scen .sida.omslag text.omslag-under').map(t => t.textContent).join(' ');
  const omslagKoll = () => {
    const svg = $('.scen .sida.omslag svg');
    if (!svg) return { fel: ['inget omslag i scenen'], text: [] };
    const folie = svg.querySelector('.omslag-folie'), [x0, y0, x1, y1] = folie.dataset.ram.split(' ').map(Number);
    const texter = [...svg.querySelectorAll('.omslag-folie text, text.omslag-under, text.omslag-upphov')];
    const fel = [];
    texter.forEach(t => { const b = t.getBBox();
      if (b.x < x0 + 4 || b.x + b.width > x1 - 4 || b.y < y0 || b.y + b.height > y1) fel.push('”' + t.textContent + '” går utanför ramen'); });
    const y = texter.map(t => +t.getAttribute('y'));
    if (y.some((v, i) => i && v <= y[i - 1])) fel.push('texterna står inte i ordning uppifrån: ' + y.join(', '));
    const ram = folie.querySelectorAll('rect')[1].getBoundingClientRect();
    const delar = [...svg.querySelectorAll('.omslag-motiv > :not(defs):not(.omslag-sken)')].map(e => e.getBoundingClientRect());
    if (!delar.length) fel.push('inget motiv');
    else {
      const m = { top: Math.min(...delar.map(r => r.top)), bottom: Math.max(...delar.map(r => r.bottom)), left: Math.min(...delar.map(r => r.left)), right: Math.max(...delar.map(r => r.right)) };
      const under = [...svg.querySelectorAll('text.omslag-under')].pop(), upphov = svg.querySelector('text.omslag-upphov');
      if (under && m.top < under.getBoundingClientRect().bottom) fel.push('motivet går upp i undertiteln');
      if (upphov && m.bottom > upphov.getBoundingClientRect().top) fel.push('motivet går ned i upphovet');
      if (m.left < ram.left || m.right > ram.right || m.top < ram.top || m.bottom > ram.bottom) fel.push('motivet går utanför ramen');
    }
    return { fel, text: texter.map(t => t.textContent) };
  };
  ${FIGURKOLL}
  // Kontrollpanelen (?kontroll) är redan avläst; på mobilen täcker den annars texterna som musen ska trycka på
  if ($('.kontrollpanel')) $('.kontrollpanel').style.display = 'none';

  // Hubben: plattformens avsnittssida (geografiboken) – hero-banner, flikar, texter och nivåer
  const hero = $('body > header.hero-banner > .hero-inner');
  prova('hubben: hero-banner med brödsmulor, avsnittsetikett, titel och undertitel',
    hero && hero.querySelector('nav.brodsmulor > span.aktuell[aria-current="page"]') && hero.querySelector('span.avsnitt-label') && hero.querySelector('h1') && hero.querySelector('p.subtitel'),
    hero && [...hero.children].map(e => e.textContent.trim()).join(' | '));
  prova('hubben: main.sida direkt efter bannern', hero && hero.parentElement.nextElementSibling === $('main.sida'));
  prova('hubben: sidan är inte bredare än skärmen (annars zoomar mobilen ut)', document.documentElement.scrollWidth <= innerWidth,
    document.documentElement.scrollWidth + ' > ' + innerWidth);
  const flikar = $$('main.sida > .flikar-rad > button.flik');
  // (Musikvideo sist sedan 2026-11-11: arbetsgången föreläsning, läsa, öva, elevboken och sist musikvideon)
  prova('hubben: flikarna Föreläsning · Läs · Öva · Elevboken · Musikvideo, Läs vald',
    flikar.map(f => f.textContent).join(' · ') === 'Föreläsning · Läs · Öva · Elevboken · Musikvideo' && $('.flik.aktiv') && $('.flik.aktiv').dataset.flik === 'laes',
    flikar.map(f => f.textContent + (f.classList.contains('aktiv') ? '*' : '')).join(' · '));
  prova('hubben: en flik vars hjälpmedel saknar adress är tonad ("kommer") och går inte att välja',
    flikar.filter(f => f.getAttribute('aria-disabled') === 'true').every(f => { f.click(); return f.title.includes('kommer') && $('.flik.aktiv').dataset.flik === 'laes' && !$('section.flik-innehall[data-flik="laes"]').classList.contains('dold'); }));
  // Hjälpmedel per text (2026-11-11: föreläsning och musikvideo per avsnitt): har en text en egen adress står texterna
  // överst i fliken. Varje text med adress visar sin (vald, med sin video i ramen), en text utan är tonad ("kommer"), och
  // Läs-flikens textval rörs inte.
  {
    const th = JSON.parse(document.body.dataset.kontroll).textHjalpmedel || {}, hfFel = [], hfProv = [];
    const FL = { forelasning: 'forelasning', ova: 'ova', elevboken: 'elevbok', musikvideo: 'musikvideo' };
    const lasKnappar = $$('.underdel-knapp').length;
    for (const f of flikar.filter(f => FL[f.dataset.flik] && f.getAttribute('aria-disabled') !== 'true')) {
      const hm = FL[f.dataset.flik];
      if (!Object.keys(th).some(t => th[t][hm])) continue;
      f.click(); await v(150);
      const sek = $('section.flik-innehall[data-flik="' + f.dataset.flik + '"]');
      const kn = () => [...sek.querySelectorAll('.flik-texter > button.flik-text')];
      if (kn().length !== Object.keys(th).length) hfFel.push(f.dataset.flik + ': ' + kn().length + ' texter i fliken, väntat ' + Object.keys(th).length);
      for (const t of kn().map(b => b.dataset.flikText)) {
        const b = kn().find(x => x.dataset.flikText === t), url = th[t] && th[t][hm];
        if (!url) { if (b.getAttribute('aria-disabled') !== 'true' || !b.title.includes('kommer')) hfFel.push(f.dataset.flik + '/' + t + ': inte tonad'); continue; }
        b.click(); await v(150);
        const nb = kn().find(x => x.dataset.flikText === t), ram = sek.querySelector('iframe'), src = ram && ram.getAttribute('src');
        if (!nb || !nb.classList.contains('aktiv') || src !== url + (url.includes('?') ? '&' : '?') + 'embed=1') hfFel.push(f.dataset.flik + '/' + t + ': ' + src);
        else hfProv.push(f.dataset.flik + '/' + t);
      }
    }
    if ($$('.underdel-knapp').length !== lasKnappar || $$('.flik-text.underdel-knapp').length) hfFel.push('textvalet i Läs ändrades');
    flikar.find(f => f.dataset.flik === 'laes').click(); await v(150);
    // videoramarna tas bort igen (en inbäddad spelare tar fokus, och då vägrar webbläsaren nästa helskärm i scenariot)
    $$('section.flik-innehall iframe').forEach(r => r.remove()); if (document.activeElement && document.activeElement.tagName === 'IFRAME') document.activeElement.blur();
    window.focus();
    if (hfProv.length || hfFel.length) prova('hubben: hjälpmedel per text – fliken visar den valda textens video (' + hfProv.join(', ') + '), en text utan är tonad',
      !hfFel.length && !$('section.flik-innehall[data-flik="laes"]').classList.contains('dold'), hfFel.join(' | '));
  }
  prova('hubben: inga egna hjälpmedelskort (Självskattning och Begreppsbank hör till kapitelindex)', !$('main.sida .resurs-kort, main.sida [class*="hjalp"]'));
  const nivaer = $$('section[data-flik="laes"] > .niva-valjare > button.niva-knapp');
  prova('hubben: nivåerna 📗 Enkel · 📘 Standard · 📕 Fördjupning',
    ['📗 Enkel', '📘 Standard', '📕 Fördjupning'].every((t, i) => nivaer[i] && nivaer[i].textContent === t), nivaer.map(b => b.textContent).join(' · '));
  const vald = $('.niva-valjare .niva-knapp.aktiv');
  prova('hubben: en nivå med innehåll är vald', vald && !vald.hasAttribute('aria-disabled'), vald && vald.textContent);
  prova('hubben: nivåer utan innehåll är tonade ("kommer") och går inte att välja',
    $$('.niva-valjare .niva-knapp[aria-disabled]').every(b => b.title.includes('kommer')) && (() => { const t = $('.niva-valjare .niva-knapp[aria-disabled]'); if (!t) return true; t.click(); return $('.niva-valjare .niva-knapp.aktiv') === vald; })());
  const texter = $$('section[data-flik="laes"] > .underdel-valjare > button.underdel-knapp');
  prova('hubben: texterna som A, B … med titel, en markerad',
    texter.length > 0 && texter.every((t, i) => t.querySelector('span.underdel-bokstav').textContent === 'ABCDEFGHIJ'[i] && t.querySelector('span.underdel-titel').textContent.trim()) && $$('.underdel-knapp.aktiv').length === 1,
    texter.map(t => t.textContent).join(' | '));
  // Hubben ritar om texterna när boken stängs (den markerade följer eleven): hämta knappen på nytt varje gång
  const text = i => $$('.underdel-knapp')[i];

  // Inställningen "Boken öppnas": i fönstret-lägena väljs I fönstret i menyn, som en elev gör
  if (!helskarmLage) {
    await gest(text(0));
    await klicka(synlig('.bok-innehall'));
    await klicka([...$$('.meny .val button')].find(b => b.dataset.v === 'nej'));
    tangent('Escape'); await v(80);
    await klicka(synlig('.bok-stang'), 400);
    prova('inställning: "Boken öppnas: I fönstret" valdes i menyn', stangd());
  }

  // Öppna: text A på vald nivå
  const textA = text(0), startA = textA.dataset.oppna, titelA = textA.querySelector('.underdel-titel').textContent;
  await gest(textA);
  const antal = $$('.lr-sida').length;
  prova('öppna: ett tryck på en text öppnar boken', oppen());
  if (helskHoppas) { hoppa('öppna: boken öppnas i helskärm'); prova('öppna: boken begär helskärm när den öppnas (inget fönsterläge)', begard > 0, 'begäranden=' + begard); }
  else prova(helskarmLage ? 'öppna: boken öppnas i helskärm' : 'öppna: boken öppnas i fönstret', helsk() === helskarmLage, 'helskärm=' + helsk());
  if (harOmslag) {
    // Omslaget: första gången öppnas boken där, före innehållet (sida 0); undertiteln är textens namn
    const om = omslagKoll();
    prova('omslag: första gången öppnas boken på omslaget, med textens namn i undertiteln, och adressen pekar på det',
      startA === 'omslag' && JSON.stringify(syns()) === '[0]' && omslagUnder().includes(titelA) && location.hash.endsWith('omslag') && Bok.sida === 0,
      syns() + ' ' + location.hash + ' | ' + omslagUnder() + ' (' + titelA + ', ' + startA + ')');
    prova('omslag: överrad, titel, undertitel och upphov står innanför ramen, i ordning uppifrån, och motivet under undertiteln',
      !om.fel.length, om.fel.join(' | ') || om.text.join(' / '));
    const upp = !!$('.scen .uppslag.ar-uppslag');
    prova(upp ? 'omslag: på uppslaget står omslaget ensamt till höger (boken stängd)' : 'omslag: omslaget fyller sidan',
      upp ? !!$('.scen .uppslag.med-omslag > .fore-omslag + .sida.omslag.hogersida') : (() => { const o = $('.scen .sida.omslag'); if (!o) return false;
        const r = o.getBoundingClientRect(), st = $('.scen').style;
        return Math.abs(r.width - parseFloat(st.getPropertyValue('--sb'))) < 1 && Math.abs(r.height - parseFloat(st.getPropertyValue('--sh'))) < 1; })(),
      $$('.scen .uppslag > *').map(e => e.className).join(' + '));
    const posO = (synlig('.las-sidtext') || synlig('.position') || {}).textContent || '';
    prova('omslag: sidpositionen säger "Omslag", och bakåt går inte längre', posO.includes('Omslag') && (synlig('.sidpil-bak') || synlig('.bottenlist .knapp')).disabled, posO);
    tangent('ArrowRight'); await v(450);
    prova('omslag: → öppnar boken på innehållet (sida 1)', syns()[0] === 1 && !!$('.scen .sida[data-nr="1"] .boktitel'), syns());
    tangent('Home'); await v(80);
    prova('omslag: Home går till innehållet, inte till omslaget', syns()[0] === 1, syns());
  } else prova('öppna: text A öppnar boken där texten börjar, och adressen pekar på en rubrik', visar(startA) && location.hash.length > 1 &&
    sidaMed(startA).querySelector('.sh-namn').textContent.includes(titelA), syns() + ' ' + location.hash + ' (' + titelA + ', ' + startA + ')');
  prova('öppna: delkapitlets sida är inert bakom boken', $('.hero-banner').inert === true && $('main.sida').inert === true);
  const steg = syns().length, s0 = syns()[0];

  // Bläddra
  tangent('ArrowRight'); await v(80);
  prova('bläddra: → visar nästa ' + (steg > 1 ? 'uppslag' : 'sida'), syns()[0] === s0 + steg, syns());
  tangent('ArrowLeft'); await v(80);
  prova('bläddra: ← tillbaka', syns()[0] === s0, syns());
  await klicka(synlig('.sidpil-fram') || synlig('.bottenlist .knapp:last-child'));
  prova('bläddra: pilen bredvid boken', syns()[0] === s0 + steg, syns());

  // Var är jag
  const vis = syns();
  prova('var är jag: lägesremsan markerar just de sidor som syns', JSON.stringify($$('.lr-sida.synlig').map(e => +e.dataset.nr)) === JSON.stringify(vis), $$('.lr-sida.synlig').map(e => e.dataset.nr));
  prova('var är jag: varje synlig sida har sidhuvud och sidnummer', vis.every(n => { const s = $('.scen .sida[data-nr="' + n + '"]'); return s && +s.querySelector('.sh-folio').textContent === n && s.querySelector('.sh-namn').textContent.trim(); }));
  const pos = (synlig('.las-sidtext') || synlig('.position') || {}).textContent || '';
  prova('var är jag: sidpositionen "Sida ' + vis.join('–') + ' av ' + antal + '"', pos.includes('Sida ' + vis.join('–')) && pos.includes('av ' + antal), pos);
  await klicka(synlig('.bok-innehall'));
  // du är här: avsnittet som de synliga sidorna hör till (raden börjar på eller före sidan, nästa rad efter den)
  const tocRader = $$('.meny .toc-a'), markerade = tocRader.filter(b => b.getAttribute('aria-current') === 'page');
  prova('meny: Innehåll öppnar förteckningen med "du är här" vid avsnittet', !$('.meny').hidden && markerade.length >= 1 && markerade.every(b => { const n = tocRader[tocRader.indexOf(b) + 1];
    return +b.dataset.till <= Math.max(...vis) && (!n || +n.dataset.till > Math.min(...vis)); }), markerade.map(b => b.textContent).join(' | ') + ' (sidor ' + vis + ')');
  tangent('Escape'); await v(80);
  prova('meny: Esc stänger menyn, boken är kvar', $('.meny').hidden && oppen());
  tangent('ArrowLeft'); await v(80);

  // Hopp via innehållet i menyn och tillbaka: till ett avsnitt som inte syns (förteckningen har bara avsnitten – i en
  // kort bok syns alla från början, och då hoppar eleven från sista sidan)
  await klicka(synlig('.bok-innehall'));
  const tocTill = () => $$('.meny .toc-knapp').map(b => +b.dataset.till);
  let malsida = tocTill().find(n => n > s0 + 2 * steg) || tocTill().find(n => !syns().includes(n));
  if (!malsida) { tangent('Escape'); await v(80); tangent('End'); await v(80); await klicka(synlig('.bok-innehall')); malsida = tocTill().find(n => !syns().includes(n)); }
  const fore = syns();
  await klicka($('.meny .toc-knapp[data-till="' + malsida + '"]'));
  prova('hoppa: en rad i innehållet går till sidan', $('.meny').hidden && syns().includes(malsida), syns() + ' (mål ' + malsida + ')');
  const chip = synlig('.tillbaka-chip:not([hidden])'), dit = chip && +(chip.textContent.match(/sida (\d+)/) || [])[1];
  prova('hoppa: "Tillbaka till sida x" visas, x där eleven var', fore.includes(dit), chip && chip.textContent);
  if (chip) await klicka(chip);
  prova('hoppa: tillbaka-knappen går tillbaka', syns()[0] === fore[0], syns());
  if (syns()[0] !== s0) { Bok.gaTill(s0); await v(80); }

  // Innehållsförteckningen räknas ur brytningen: varje rad leder till en sida där rubriken (eller avsnittet) syns
  await klicka(synlig('.bok-innehall'));
  const rader = $$('.meny .toc-knapp').map(b => [+b.dataset.till, b.querySelector('.toc-titel').textContent.trim(), b.classList.contains('toc-a'), !!b.querySelector('.toc-nr').textContent.trim(), b.dataset.avsnitt]);
  tangent('Escape'); await v(80);
  const fel = [];
  for (const [till, titel, avsnitt] of rader) {
    Bok.gaTill(till); await v(30);
    const sidan = $('.scen .sida[data-nr="' + till + '"]');
    if (!sidan || !(avsnitt ? sidan.querySelector('.sh-namn').textContent.includes(titel) : $$('.scen .sida[data-nr="' + till + '"] .sidtitel').some(e => e.textContent.trim() === titel))) fel.push(till + ' ' + titel);
  }
  prova('innehåll: varje rad leder till en sida där rubriken syns (' + rader.length + ' rader)', rader.length > 0 && !fel.length, fel.join(' | '));
  // Bara huvudrubrikerna, som i en tryckt bok: en rad per avsnitt (lägesremsans grupper utom innehållssidan), inga ###-rubriker
  const grupper = $$('.lr-grupp').length - 1;
  prova('innehåll: bara huvudrubrikerna (avsnitten) står i förteckningen, inga ###-rubriker (' + rader.length + ' avsnitt)',
    rader.every(r => r[2]) && rader.length === grupper && !$('.meny .toc ol, .meny .toc-s'), rader.length + ' rader, ' + grupper + ' avsnitt');
  tangent('End'); await v(80);
  prova('bläddra: End går till sista sidan', syns().includes(antal), syns());
  tangent('Home'); await v(80);

  // Nivåknappen och menyn – Esc stänger det översta lagret, inte boken
  await klicka(synlig('.bokapp .niva-knapp'));
  const lista = $('.niva-lista');
  prova('nivå: nivåknappen öppnar listan över nivåerna', !lista.hidden && lista.querySelectorAll('button').length === nivaer.length);
  prova('nivå: nivåer utan innehåll går inte att välja i boken', [...lista.querySelectorAll('button[aria-disabled]')].length === $$('.niva-valjare .niva-knapp[aria-disabled]').length);
  tangent('Escape'); await v(80);
  prova('nivå: Esc stänger listan, boken är kvar', lista.hidden && oppen());

  // Nivåbyte i boken: från en rubrik mitt i boken genom alla nivåer med innehåll och tillbaka – varje gång samma
  // avsnitt (sidhuvudets namn). Rörelsespåren och kraftparen kontrolleras på varje nivå.
  const nivaVal = () => [...$('.niva-lista').querySelectorAll('button')];
  const franNiva = nivaVal().findIndex(b => b.getAttribute('aria-checked') === 'true');
  const ovriga = nivaVal().map((b, i) => i).filter(i => i !== franNiva && !nivaVal()[i].hasAttribute('aria-disabled'));
  const valjNiva = async i => { await klicka(synlig('.bokapp .niva-knapp')); await klicka(nivaVal()[i], 250); };
  const spar = [];
  if (ovriga.length) {
    // Avsnitten på varje nivå (förteckningen). En nivå kan ha avsnitt som de andra saknar (III A Fördjupning).
    const avsnittPa = async i => { await valjNiva(i); await klicka(synlig('.bok-innehall'));
      const r = $$('.meny .toc-a').map(b => ({ till: +b.dataset.till, id: b.dataset.avsnitt, titel: b.querySelector('.toc-titel').textContent.trim() }));
      tangent('Escape'); await v(80); return r; };
    const listor = {};
    for (const i of [franNiva, ...ovriga]) listor[i] = await avsnittPa(i);
    await valjNiva(franNiva);
    // Från ett avsnitt mitt i boken genom alla nivåer och tillbaka: varje gång samma avsnitt, eller – finns det inte på
    // nivån – det närmaste föregående som finns där (sidhuvudets namn)
    const numrerade = rader.filter(r => r[3]), mitt = (numrerade.length ? numrerade : rader)[Math.floor((numrerade.length || rader.length) / 2)];
    Bok.gaTill(mitt[0]); await v(80);
    let nu = mitt[4], fran = franNiva;
    const fel = [], vag = [];
    for (const i of [...ovriga, franNiva]) {
      const ids = listor[fran].map(a => a.id), bakat = ids.slice(0, ids.indexOf(nu) + 1).reverse();
      const mal = bakat.map(id => listor[i].find(a => a.id === id)).find(Boolean);
      await valjNiva(i);
      const s = sidaMed(Bok.plats), dar = s && s.querySelector('.sh-namn').textContent.trim();
      if (!mal || !dar || !dar.includes(mal.titel)) fel.push(nivaVal()[i].textContent + ': ' + dar + ' (väntat ' + (mal && mal.titel) + ')');
      vag.push(nivaVal()[i].textContent + ' ' + (mal && mal.titel));
      if (mal) nu = mal.id;
      fran = i;
    }
    prova('nivå: nivåbyte i boken (' + [franNiva, ...ovriga, franNiva].map(i => nivaVal()[i].textContent).join(' → ') + ') hamnar i samma avsnitt, eller i det närmaste föregående som finns på nivån',
      !fel.length, 'från ”' + mitt[1] + '”: ' + (fel.length ? fel.join(' | ') : vag.join(' → ')));
    for (const i of ovriga) { await valjNiva(i); spar.push(await figurKoll()); }
    // Ett avsnitt som bara finns på en nivå (III A Fördjupning: Att räkna på rörelse): nivåbytet därifrån går till det
    // närmaste föregående avsnitt som finns på den nya nivån
    let fall = null;
    for (const x of Object.keys(listor)) for (const y of Object.keys(listor)) if (!fall && x !== y) {
      const ids = new Set(listor[y].map(a => a.id)), a = listor[x].find(q => !ids.has(q.id));
      if (a) { const fore = listor[x].slice(0, listor[x].indexOf(a)).reverse().find(q => ids.has(q.id));
        fall = { x: +x, y: +y, a, mal: fore && listor[y].find(q => q.id === fore.id) }; }
    }
    if (fall) {
      await valjNiva(fall.x); Bok.gaTill(fall.a.till); await v(80);
      await valjNiva(fall.y);
      const s = sidaMed(Bok.plats), dar = s && s.querySelector('.sh-namn').textContent.trim();
      prova('nivå: från ett avsnitt som bara finns på en nivå går nivåbytet till närmaste föregående avsnitt på den nya nivån',
        !!fall.mal && !!dar && dar.includes(fall.mal.titel), '”' + fall.a.titel + '” (' + nivaVal()[fall.x].textContent + ') → ' + nivaVal()[fall.y].textContent + ': ' + dar + ' (väntat ' + (fall.mal && fall.mal.titel) + ')');
    }
    await valjNiva(franNiva);
  }
  spar.push(await figurKoll());
  tangent('Home'); await v(80);

  // Läs en bit, stäng med ✕, öppna igen: boken minns läsplatsen (ett block)
  tangent('ArrowRight'); await v(60); tangent('ArrowRight'); await v(60);
  const minne = Bok.plats;
  await klicka(synlig('.bok-stang'), 450);
  prova('stäng: ✕ Stäng går tillbaka till delkapitlet (och lämnar helskärmen)', stangd(), 'hash=' + location.hash + ' helskärm=' + helsk());
  const dar = $('.underdel-knapp.aktiv'), lage = $('section[data-flik="laes"] .intro').textContent;
  prova('stäng: hubben säger var eleven var (texten markerad, läsplatsen nämnd)', dar && dar.dataset.oppna === minne && lage.includes('läste senast'),
    (dar && dar.textContent + ' → ' + dar.dataset.oppna) + ' | ' + lage + ' (mindes ' + minne + ')');
  prova('stäng: fokus tillbaka på texten som öppnade boken', document.activeElement === $('.underdel-knapp[data-fokus="text-a"]'), document.activeElement && document.activeElement.textContent);
  const begardFore = begard;
  await gest(dar);
  prova('minns: boken öppnas där eleven var (samma block)', visar(minne), syns() + ' (mindes ' + minne + ')');
  if (helskHoppas) { hoppa('minns: i helskärm igen'); prova('minns: boken begär helskärm igen (inget fönsterläge)', begard > begardFore, 'begäranden=' + (begard - begardFore)); }
  else prova(helskarmLage ? 'minns: i helskärm igen' : 'minns: i fönstret igen', helsk() === helskarmLage, 'helskärm=' + helsk());

  // Esc: i helskärm tar webbläsaren Esc och lämnar helskärmen – det görs här som webbläsaren gör det
  if (helsk()) await document.exitFullscreen(); else tangent('Escape');
  await v(450);
  prova('stäng: Esc går tillbaka till delkapitlet', stangd(), 'hash=' + location.hash);

  // En annan text öppnar boken där den texten börjar. Har bara en text innehåll (de andra "kommer") öppnas den igen.
  const annan = $('.underdel-knapp[data-oppna]:not(.aktiv)');
  const avsn = annan || $('.underdel-knapp[data-oppna]');
  const start = avsn.dataset.oppna, titel = avsn.querySelector('.underdel-titel').textContent;
  const textB = annan && avsn.dataset.text;          // satt när varje text är en egen bok (texter i delkapitel.js)
  await gest(avsn);
  // en text som inte lästs än öppnas på sitt omslag (undertiteln är textens namn), annars där den börjar
  const paOmslaget = start === 'omslag';
  if (annan) prova('öppna: en annan text öppnar boken där den texten börjar' + (paOmslaget ? ' (på sitt omslag)' : ''),
    visar(start) && (paOmslaget ? omslagUnder().includes(titel) : sidaMed(start).querySelector('.sh-namn').textContent.includes(titel)), syns() + ' (' + titel + ', ' + start + ')');
  else prova('öppna: den enda texten med innehåll öppnas igen där eleven var (de andra är "kommer")', visar(start) &&
    $$('.underdel-knapp:not([data-oppna])').every(b => b.getAttribute('aria-disabled') === 'true'), syns() + ' (' + start + ')');
  if (textB) {
    if (paOmslaget) { const u = omslagUnder(), om = omslagKoll();
      prova('en bok per text: texten är en egen bok med eget omslag', u.includes(titel) && !u.includes(titelA) && !om.fel.length, u + ' (A: ' + titelA + ') ' + om.fel.join(' | ')); }
    tangent('Home'); await v(80);
    const bt = $('.scen .sida[data-nr="1"] .boktitel'), btTitel = bt && bt.firstChild.textContent.trim();
    prova('en bok per text: texten är en egen bok med egen innehållsförteckning', btTitel === titel && btTitel !== titelA, btTitel + ' (A: ' + titelA + ')');
    if (paOmslaget) { tangent('ArrowLeft'); await v(450); }    // tillbaka till omslaget, där boken öppnades
  }
  history.back(); await v(450);
  prova('stäng: webbläsarens bakåt går tillbaka till delkapitlet', stangd(), 'hash=' + location.hash);
  history.forward(); await v(450);
  prova('framåt: boken kommer tillbaka på samma sida', oppen() && visar(start), syns());
  await klicka(synlig('.bok-stang'), 450);
  prova('stäng: igen', stangd());
  if (textB) {
    const aktiv = $('.underdel-knapp.aktiv');
    prova('en bok per text: varje text minns sin egen sida, och den senast lästa är markerad',
      text(0).dataset.oppna === minne && aktiv && aktiv.dataset.text === textB, 'A → ' + text(0).dataset.oppna + ' (mindes ' + minne + '), markerad: ' + (aktiv && aktiv.dataset.text));
  }

  // Figurerna i de andra texterna: varje text med innehåll öppnas och mäts på varje nivå med innehåll
  const andraTexter = $$('.underdel-knapp[data-oppna]').map(b => b.dataset.text).filter(t => t && t !== text(0).dataset.text);
  for (const t of andraTexter) {
    await gest($$('.underdel-knapp').find(b => b.dataset.text === t));
    for (const i of nivaVal().map((b, i) => i).filter(i => !nivaVal()[i].hasAttribute('aria-disabled'))) { await valjNiva(i); spar.push(await figurKoll()); }
    await klicka(synlig('.bok-stang'), 450);
  }

  // Djupdykningarna (djupdykningar i delkapitel.js, Joachims beslut 2026-11-05): ingen nivå, utan egna böcker längst
  // ned i Läs ("Vill du veta mer?"). Varje kort öppnar sin bok – omslaget "Djupdykning" med titeln, förteckningen,
  // ingen nivåväljare – och figurerna i den mäts; efteråt är texten och nivån eleven valt desamma.
  const ddAntal = Object.keys(JSON.parse(document.body.dataset.kontroll).nivaer).filter(n => n.startsWith('djupdykning-')).length;
  // (djupdykningarnas block: inte Nästa steg eller en stödbok, som har samma stil – arbetsorder 11)
  const DD_SEK = 'section[data-flik="laes"] > .vill-veta-mer:not(.nasta-steg):not(.stodbocker):not(.repetitionsbocker)';
  const ddKort = () => $$(DD_SEK + ':not([hidden]) .fordj-kort');
  if (ddAntal || ddKort().length) {
    const sek = $(DD_SEK);
    const nivarad = $$('section[data-flik="laes"] > .niva-valjare > button.niva-knapp').map(b => b.textContent);
    prova('djupdykningar: nivåraden har bara nivåerna, ingen djupdykning (' + nivarad.join(' · ') + ')',
      !nivarad.some(t => /djupdykning/i.test(t)) && (nivarad.length === 3 || /Provbok/.test(document.title)), nivarad.join(' · '));
    // (längst ned, eller direkt följt av Nästa steg-blocket, som står allra sist – arbetsorder 11)
    const efterDd = [...sek.parentElement.children].slice([...sek.parentElement.children].indexOf(sek) + 1).filter(e => !e.hidden);
    prova('djupdykningar: "Vill du veta mer?" står längst ned i Läs (bara Nästa steg under), ett kort per djupdykning (' + ddAntal + ')',
      sek && !sek.hidden && efterDd.every(e => e.matches('.vill-veta-mer.nasta-steg')) && sek.querySelector('h2').textContent === 'Vill du veta mer?' && ddKort().length === ddAntal,
      ddKort().map(b => b.textContent).join(' | '));
    // ingressen (arbetsorder 19): på ett kort som har en står den under titeln, syns och är en mening
    const ingr = ddKort().map(b => b.querySelector('.fordj-kort-ingress')).filter(Boolean);
    if (ingr.length) prova('djupdykningar: kortens ingress står under titeln och är en mening (' + ingr.length + ' kort)',
      ingr.every(e => e.previousElementSibling && e.previousElementSibling.matches('.fordj-kort-titel') && e.getBoundingClientRect().height > 0 &&
        /^[^.!?]+[.!?]$/.test(e.textContent.trim())), ingr.map(e => e.textContent.trim()).join(' | '));
    const valt = () => ({ text: ($('.underdel-knapp.aktiv') || { dataset: {} }).dataset.text, niva: ($('.niva-valjare .niva-knapp.aktiv') || { dataset: {} }).dataset.niva });
    const f0 = valt(), ddFel = [];
    for (let i = 0; i < ddKort().length; i++) {
      const kort = ddKort()[i], titel = kort.querySelector('.fordj-kort-titel').textContent.trim(), t = kort.dataset.text;
      // en djupdykning utan innehåll står som "kommer": tonad, och den öppnar ingen bok (2026-11-07, kapitel I)
      if (!kort.dataset.oppna) { if (kort.getAttribute('aria-disabled') !== 'true') ddFel.push(titel + ': varken en bok eller tonad "kommer"'); continue; }
      await gest(kort, 900);
      const hash = location.hash, utanNiva = getComputedStyle($('.bokapp .niva')).display === 'none';
      Bok.gaTill(0); await v(150);
      const omslag = $$('.scen .sida.omslag text').map(x => x.textContent).join(' ');
      Bok.gaTill(1); await v(150);
      const toc = (synlig('.scen .boktitel') || {}).textContent || '';
      if (!oppen() || !hash.startsWith('#' + t + '/')) ddFel.push(titel + ': öppnade ' + hash);
      if (!utanNiva) ddFel.push(titel + ': nivåväljaren syns');
      if (harOmslag && !(omslag.includes('DJUPDYKNING') && omslag.includes(titel.split(' ')[0]))) ddFel.push(titel + ': omslaget ”' + omslag.slice(0, 90) + '”');
      if (!toc.includes(titel)) ddFel.push(titel + ': förteckningen ”' + toc + '”');
      spar.push(await figurKoll());
      await klicka(synlig('.bok-stang'), 450);
      const f1 = valt();
      if (!stangd() || f1.text !== f0.text || f1.niva !== f0.niva) ddFel.push(titel + ': efter stängningen ' + JSON.stringify(f1) + ' (före ' + JSON.stringify(f0) + ')');
    }
    prova('djupdykningar: varje kort öppnar sin djupdykning som en egen bok (omslaget "Djupdykning" med titeln, förteckningen, ingen nivåväljare) och efteråt är texten och nivån desamma',
      !ddFel.length, ddFel.join(' | ') || ddKort().map(b => b.dataset.text).join(', '));
  }
  ${FRISTAENDE}
  ${VIDARE}
  ${TEXTLANK}
  if (spar.some(x => x.antal)) prova('figur: rörelsespårens avstånd följer rörelsetypen (' + spar.map(x => x.antal).join(' + ') + ' spår)',
    spar.every(x => !x.fel.length), spar.flatMap(x => x.fel).join(' | ') || spar.flatMap(x => x.typer).filter((t, i, l) => l.indexOf(t) === i).join(', '));
  if (spar.some(x => x.par.antal)) prova('figur: kraftparens pilar är lika långa, motriktade och börjar i var sitt föremåls mitt (' + spar.map(x => x.par.antal).join(' + ') + ' par)',
    spar.every(x => !x.par.fel.length), spar.flatMap(x => x.par.fel).join(' | ') || spar.flatMap(x => x.par.satt).filter((t, i, l) => l.indexOf(t) === i).join(', '));
  if (spar.some(x => x.fr.antal)) {
    // samma ytor ska ge samma mönster i alla böcker
    const monster = {}, olika = [];
    spar.forEach(x => Object.entries(x.fr.monster).forEach(([y, m]) => { if (monster[y] && monster[y] !== m) olika.push(y); monster[y] = m; }));
    prova('figur: friktionen – ytorna hakar i varandra, strecklinjerna korsar inga rubriker, draget framåt och friktionen bakåt på blocket, samma mönster varje gång (' + spar.map(x => x.fr.antal).join(' + ') + ' figurer)',
      spar.every(x => !x.fr.fel.length) && !olika.length, spar.flatMap(x => x.fr.fel).concat(olika.map(y => 'mönstret för ' + y + ' skiljer sig mellan böckerna')).join(' | ') || spar.flatMap(x => x.fr.ytor).filter((t, i, l) => l.indexOf(t) === i).join(', '));
  }
  if (spar.some(x => x.bp.antal)) prova('figur: bildpilarna – fotot laddas, pilarna i lika är lika långa (±1 px), ingen pil eller etikett utanför utsnittet, etiketterna överlappar inte och är minst 14 px på skärmen, lägesmarkeringarna har lika stora avstånd (±1 px) inom bilden (' + spar.map(x => x.bp.antal).join(' + ') + ' bilder)',
    spar.every(x => !x.bp.fel.length), spar.flatMap(x => x.bp.fel).join(' | ') ||
      spar.reduce((a, x) => a + x.bp.pilar, 0) + ' pilar, minsta etiketten ' + Math.min(...spar.filter(x => x.bp.antal).map(x => x.bp.minPx)).toFixed(1) + ' px');
  if (spar.some(x => x.st.antal)) prova('figur: stoppsträckan – delarna proportionella mot värdena (±1 px), totalen = summan med hårt mellanslag, markeringen på rätt ställe på skalan (' + spar.map(x => x.st.antal).join(' + ') + ' figurer)',
    spar.every(x => !x.st.fel.length), spar.flatMap(x => x.st.fel).join(' | '));
  if (spar.some(x => x.fp.antal)) prova('figur: friktion i paneler – i varje panel ligger ytorna an utan att gå in i varandra, och panelen har en rubrik (' + spar.map(x => x.fp.antal).join(' + ') + ' figurer)',
    spar.every(x => !x.fp.fel.length), spar.flatMap(x => x.fp.fel).join(' | '));
  if (spar.some(x => x.hs.antal)) prova('figur: den fallande hissen – tyngdkraften lika lång i båda panelerna, i den stilla hissen lika lång som normalkraften, i den fallande ingen normalkraft (' + spar.map(x => x.hs.antal).join(' + ') + ' figurer)',
    spar.every(x => !x.hs.fel.length), spar.flatMap(x => x.hs.fel).join(' | '));
  if (spar.some(x => x.pn.antal)) prova('figur: två paneler – lika stora, ingen text under 14 px på skärmen (bredvid varandra eller staplade), ingen text överlappar en annan (' + spar.map(x => x.pn.antal).join(' + ') + ' figurer)',
    spar.every(x => !x.pn.fel.length), spar.flatMap(x => x.pn.fel).join(' | ') ||
      spar.reduce((a, x) => a + x.pn.staplade, 0) + ' staplade, minsta texten ' + Math.min(...spar.filter(x => x.pn.antal).map(x => x.pn.minPx)).toFixed(1) + ' px');
  if (spar.some(x => x.jm.antal)) prova('figur: jorden och månen – pilen på månen = pilen på jorden × tyngdernas förhållande (±1 px), personerna lika stora, samma massa i båda, tyngden ur data (' + spar.map(x => x.jm.antal).join(' + ') + ' figurer)',
    spar.every(x => !x.jm.fel.length), spar.flatMap(x => x.jm.fel).join(' | '));
  if (spar.some(x => x.ry.antal)) prova('figur: rymdfigurerna – storlekarna i samma skala, prickarna i proportion till avstånden, pilarna mot jordens mitt, månens belysta halva mot solen och faserna rätt, jordaxlarna lika lutade och sommaren där norra halvklotet lutar mot solen, inga texter som överlappar eller står utanför (' + spar.map(x => x.ry.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.ry.typer))].join(', ') + ')',
    spar.every(x => !x.ry.fel.length), spar.flatMap(x => x.ry.fel).join(' | '));
  ${NG_PROV}
  prova('text: tal och enhet (och tusental) står med hårt mellanslag på varje sida, i varje text och nivå (' + spar.length + ' böcker)',
    spar.every(x => !x.tal.length), spar.flatMap(x => x.tal).slice(0, 6).join(' | '));
  prova('text: g och N/kg i rubriker, innehållet, sidhuvudet och tabellhuvuden står i vanlig stil med rätt skiftläge, inte i kapitäler (' + spar.reduce((a, x) => a + x.sym.antal, 0) + ' ställen)',
    spar.every(x => !x.sym.fel.length), spar.flatMap(x => x.sym.fel).slice(0, 6).join(' | '));
  if (andraTexter.length) prova('figur: figurerna i de andra texterna (' + andraTexter.join(', ') + ') är mätta på varje nivå', stangd(), 'hash=' + location.hash);
  return k;
}`;

// En sida med bara fristående böcker (arbetsorder 11: Matematiken i fysiken): ingen text eller nivå. Hubben (bannern,
// inga texter, nivåer eller läsläge, flikraden borta om delkapitlet säger flikar: false), korten och länkarna
// (FRISTAENDE), och i den första boken: bläddra, Innehåll och hopp, Home och End, Esc.
const BOKHUBB = String.raw`async (helskarmLage, utanFonster) => {
  // Utan fönster (arbetsorder 36): själva helskärmen hoppas över; boken ska ändå begära helskärm när den öppnas
  const helskHoppas = helskarmLage && utanFonster;
  const hoppa = namn => k.push({ namn, ok: true, hoppat: 'inget fönsterläge', detalj: '' });
  let begard = 0; const rf0 = Element.prototype.requestFullscreen;
  if (helskHoppas && rf0) Element.prototype.requestFullscreen = function () { begard++; return rf0.apply(this, arguments); };
  const v = ms => new Promise(r => setTimeout(r, ms));
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const synlig = s => $$(s).find(e => e.offsetParent !== null);
  const k = [];
  const prova = (namn, ok, detalj) => k.push({ namn, ok: !!ok, detalj: detalj == null ? '' : String(detalj) });
  const syns = () => $$('.scen .uppslag > .sida[data-nr]').map(e => +e.dataset.nr);
  const tangent = t => document.dispatchEvent(new KeyboardEvent('keydown', { key: t, bubbles: true }));
  const oppen = () => !$('.bokapp').hidden;
  const helsk = () => !!document.fullscreenElement;
  const klicka = async (e, ms = 120) => { e.click(); await v(ms); };
  const gest = async (e, ms = 650) => {
    e.scrollIntoView({ block: 'center' }); await v(60);
    const r = e.getBoundingClientRect();
    __gest(JSON.stringify({ x: r.left + r.width / 2, y: r.top + r.height / 2 })); await v(ms);
  };
  const stangd = () => !oppen() && location.hash === '' && !helsk();
  const sidaMed = id => $$('.scen .uppslag > .sida[data-nr]').find(s => s.querySelector('[data-post="' + id + '"]'));
  const harOmslag = JSON.parse(document.body.dataset.kontroll).omslag;
  ${FIGURKOLL}
  if ($('.kontrollpanel')) $('.kontrollpanel').style.display = 'none';
  const spar = [];
  const hero = $('body > header.hero-banner > .hero-inner');
  prova('hubb (bara fristående böcker): hero-banner med brödsmulor och titel', hero && hero.querySelector('nav.brodsmulor > span.aktuell') && hero.querySelector('h1'),
    hero && [...hero.children].map(e => e.textContent.trim()).join(' | '));
  prova('hubb (bara fristående böcker): inga texter, nivåer eller läsläge', !synlig('.underdel-knapp') && !synlig('.niva-valjare') && !synlig('section[data-flik="laes"] .intro'));
  prova('hubb (bara fristående böcker): sidan är inte bredare än skärmen', document.documentElement.scrollWidth <= innerWidth, document.documentElement.scrollWidth + ' > ' + innerWidth);
  const kort = $$('.fordj-kort[data-oppna]');
  prova('hubb (bara fristående böcker): minst ett kort öppnar en bok', kort.length > 0, kort.map(b => b.textContent.trim()).join(' | '));
  // den första boken: bläddra, innehåll, hopp och tillbaka, Home/End, Esc
  if (kort.length) {
    await gest(kort[0], 900);
    if (helskHoppas) { prova('öppna: boken öppnas', oppen()); hoppa('öppna: boken öppnas i helskärm'); prova('öppna: boken begär helskärm när den öppnas (inget fönsterläge)', begard > 0, 'begäranden=' + begard); }
    else prova(helskarmLage ? 'öppna: boken öppnas i helskärm' : 'öppna: boken öppnas (i fönstret, eller i helskärm om inställningen säger så)', oppen() && (!helskarmLage || helsk()), 'helskärm=' + helsk());
    Bok.gaTill(1); await v(100);
    const s0 = syns()[0], steg = syns().length;
    tangent('ArrowRight'); await v(80);
    prova('bläddra: → visar nästa ' + (steg > 1 ? 'uppslag' : 'sida'), syns()[0] === s0 + steg, syns());
    tangent('ArrowLeft'); await v(80);
    await klicka(synlig('.bok-innehall'));
    const till = $$('.meny .toc-knapp').map(b => +b.dataset.till).find(n => !syns().includes(n));
    if (till) await klicka($('.meny .toc-knapp[data-till="' + till + '"]')); else { tangent('Escape'); await v(80); }
    prova('hoppa: en rad i innehållet går till sidan', !till || syns().includes(till), syns() + ' (mål ' + till + ')');
    tangent('End'); await v(80);
    prova('bläddra: End går till sista sidan', syns().includes($$('.lr-sida').length), syns());
    tangent('Home'); await v(80);
    if (helsk()) await document.exitFullscreen(); else tangent('Escape');
    await v(450);
    prova('stäng: Esc går tillbaka till sidan', stangd(), 'hash=' + location.hash);
  }
  ${FRISTAENDE}
  ${NG_PROV}
  if (spar.length) prova('text: tal och enhet (och tusental) står med hårt mellanslag på varje sida (' + spar.length + ' böcker)',
    spar.every(x => !x.tal.length), spar.flatMap(x => x.tal).slice(0, 6).join(' | '));
  return k;
}`;

// Provboken: det som Materia inte använder än (texter som egna böcker, hjälpmedel med adress, begreppslänkar,
// en extra nivå ur data, kraftpilar).
const PROVSCENARIO = String.raw`async () => {
  const v = ms => new Promise(r => setTimeout(r, ms));
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const synlig = s => $$(s).find(e => e.offsetParent !== null);
  const k = [];
  const prova = (namn, ok, detalj) => k.push({ namn, ok: !!ok, detalj: detalj == null ? '' : String(detalj) });
  const tangent = t => document.dispatchEvent(new KeyboardEvent('keydown', { key: t, bubbles: true }));
  const oppen = () => !$('.bokapp').hidden;
  prova('prov: en extra nivå (Extranivå) ur data, utan ändring i motorn', $$('.niva-valjare .niva-knapp').map(b => b.textContent).some(t => t.startsWith('Extranivå')));
  $('.flik[data-flik="ova"]').click(); await v(300);
  const ovaRam = $('section.flik-innehall[data-flik="ova"]:not(.dold) iframe.flik-ram');
  prova('prov: en flik med adress (Öva) visar hjälpmedlet inbäddat (embed=1)', ovaRam && ovaRam.getAttribute('src') === 'hjalpmedel.html?vad=ova&avsnitt=&embed=1' &&
    $('section.flik-innehall[data-flik="laes"]').classList.contains('dold') && $('.flik.aktiv').dataset.flik === 'ova', ovaRam && ovaRam.getAttribute('src'));
  prova('prov: en flik utan adress (Elevboken) är fortfarande "kommer"', $('.flik[data-flik="elevboken"]').getAttribute('aria-disabled') === 'true');
  $('.flik[data-flik="laes"]').click(); await v(100);
  prova('prov: Läs tillbaka – texterna och nivåerna syns igen', !$('section.flik-innehall[data-flik="laes"]').classList.contains('dold') && $('.underdel-knapp').offsetParent !== null);
  $('.underdel-knapp').click(); await v(600);
  tangent('Home'); await v(150);
  const b = $('.scen a.begrepp');
  prova('prov: ett begrepp i texten länkar till begreppslistan', b && b.getAttribute('href') === 'hjalpmedel.html?vad=begrepp#kraft', b && b.getAttribute('href'));
  const b2 = $$('.scen a.begrepp').find(a => a.textContent === 'krafter');
  prova('prov: ett böjt begrepp länkar till grundformen (*krafter|kraft*)', b2 && b2.getAttribute('href').endsWith('#kraft'), b2 && b2.getAttribute('href'));
  b.click(); await v(500);
  const ram = $('.hm-ram');
  prova('prov: begreppet öppnas ovanpå boken, inbäddat (embed=1)', !$('.hm-panel').hidden && ram.getAttribute('src') === 'hjalpmedel.html?vad=begrepp&embed=1#kraft', ram.getAttribute('src'));
  let iframeText = ''; try { iframeText = ram.contentDocument && ram.contentDocument.body ? ram.contentDocument.body.textContent : '(ej läsbar från file://)'; } catch (e) { iframeText = '(ej läsbar)'; }
  tangent('Escape'); await v(100);
  prova('prov: Esc stänger hjälpmedlet, boken är kvar', $('.hm-panel').hidden && oppen());
  // Sidorna bryts efter sidmåttet: leta upp sidan med ett block i stället för att anta vilken det är
  const hitta = async sel => { for (let n = 1; n <= $$('.lr-sida').length; n++) { Bok.gaTill(n); await v(40); if ($('.scen ' + sel)) return $('.scen ' + sel); } return null; };
  const fig = await hitta('.figur-bild[aria-label^="Kraftpilar"]');
  const spetsar = fig ? fig.querySelectorAll('.fig-pilspets').length : 0;
  prova('prov: kraftpilarna ritas ur data – en pil per kraft och resultanten', spetsar === 5, spetsar + ' pilar; ' + (fig && fig.getAttribute('aria-label')));
  prova('prov: resultanten räknas ur krafterna (10 N höger − 4 N vänster = 6 N höger)', fig && /Resultanten 6 N åt höger/.test(fig.getAttribute('aria-label')));
  const linjer = fig ? [...fig.querySelectorAll('line.fig-pil')].map(l => Math.hypot(l.x2.baseVal.value - l.x1.baseVal.value, l.y2.baseVal.value - l.y1.baseVal.value)) : [];
  prova('prov: kraftpilens längd följer storleken (20 N dubbelt så lång som 10 N)', linjer.length >= 3 && Math.abs((linjer[0] + 12.6) / (linjer[2] + 12.6) - 2) < 0.02, linjer.map(Math.round));
  // Sista sidan i avsnittet: länken ut till öva/självskattning
  tangent('End'); await v(100);
  const lank = $$('.scen .b-lank a.lank-post');
  prova('prov: länkblocket i avsnittets slut länkar till Öva med avsnittet ifyllt', lank.some(a => a.getAttribute('href') === 'hjalpmedel.html?vad=ova&avsnitt=krafter'), lank.map(a => a.getAttribute('href')));
  prova('prov: länkblocket visar ett hjälpmedel utan adress som "kommer"', $$('.scen .b-lank .lank-post.kommer').length > 0);
  const fs_ = await hitta('.figur-bild[aria-label^="Ett kar"]');
  const rects = fs_ ? [...fs_.querySelectorAll('rect[class^="fig-"]')].filter(r => /fig-(tra|is|jarn|foremal)/.test(r.getAttribute('class'))) : [];
  const under = rects.map(r => (118 - +r.getAttribute('y')) / +r.getAttribute('height'));
  prova('prov: flyter/sjunker räknar läget ur densiteten (0,25 → 75 % ovanför ytan)', rects.length === 2 && Math.abs(under[0] - 0.75) < 0.01 && +rects[1].getAttribute('y') + +rects[1].getAttribute('height') === 239, under.map(x => x.toFixed(2)));
  // Byt nivå i boken: samma avsnitt på den andra nivån
  synlig('.bokapp .niva-knapp').click(); await v(100);
  [...$('.niva-lista').querySelectorAll('button')].find(x => x.textContent.startsWith('Extranivå')).click(); await v(200);
  const huvuden = $$('.scen .sida[data-nr] .sh-namn').map(e => e.textContent);
  prova('prov: nivåbyte i boken hamnar i samma avsnitt', huvuden.some(t => /Krafter/.test(t)) && synlig('.bokapp .niva-knapp').textContent.startsWith('Extranivå'), huvuden.join(' | '));
  synlig('.bok-stang').click(); await v(450);
  const vald = $('.niva-valjare .niva-knapp.aktiv');
  prova('prov: hubben följer nivåbytet', !oppen() && vald && vald.textContent.startsWith('Extranivå'), 'öppen=' + oppen() + ' hash=' + location.hash + ' vald=' + (vald && vald.textContent));
  // En bok per text: en text utan innehåll är "kommer"; en text utan den valda nivån öppnas på en nivå den har
  const text = id => $$('.underdel-knapp').find(b => b.dataset.text === id);
  const tom = text('energi');
  if (tom) { tom.click(); await v(300); }
  prova('prov: en text utan innehåll (Energi) är tonad ("kommer") och öppnar ingen bok',
    tom && tom.getAttribute('aria-disabled') === 'true' && tom.title.includes('kommer') && !tom.hasAttribute('data-oppna') && !oppen(), tom && tom.title);
  text('tryck').click(); await v(600);
  const nk = synlig('.bokapp .niva-knapp');
  prova('prov: en text utan den valda nivån (Extranivå) öppnas på Standard', oppen() && nk && nk.textContent.startsWith('Standard'), nk && nk.textContent);
  // Strömformatet (Tryck): en sidbrytning ger ny sida; ett långt stycke + figur som inte ryms tillsammans – stycket
  // stannar och figuren står först på nästa sida
  const sf = id => Bok.sidaFor(id);
  const forstPaSidan = async id => { Bok.gaTill(sf(id)); await v(60); const s = $('.scen .sida[data-nr="' + sf(id) + '"] .sidinnehall'); return !!s && s.firstElementChild.dataset.post === id; };
  prova('prov: en sidbrytning ger ny sida (strömformatet)', sf('efter-brytning') === sf('fore-brytning') + 1 && await forstPaSidan('efter-brytning'),
    'före s. ' + sf('fore-brytning') + ', efter s. ' + sf('efter-brytning'));
  prova('prov: långt stycke + figur som inte ryms tillsammans: stycket stannar, figuren står först på nästa sida',
    sf('figur-efter') === sf('langt-stycke') + 1 && await forstPaSidan('figur-efter'), 'stycket s. ' + sf('langt-stycke') + ', figuren s. ' + sf('figur-efter'));
  // Rörelsespåren i Tryck: alla fyra typerna, 4–8 prickar, med och utan tider
  ${FIGURKOLL}
  const sp = await figurKoll();
  prova('prov: rörelsespåren – avstånden lika / växande / krympande / ojämna efter rörelsetypen',
    sp.antal === 4 && sp.typer.length === 4 && !sp.fel.length, sp.antal + ' spår: ' + (sp.fel.join(' | ') || sp.typer.join(', ')));
  // Tal och enhet: hårda mellanslag, och i en spalt som är 1 px bred (där raden bryts vid varje vanligt mellanslag)
  // står "10 N", "1 538 °C", "5 m/s" och "18 km/h" ändå på en rad
  Bok.gaTill(sf('tal-och-enhet')); await v(60);
  const te = $('.scen [data-post="tal-och-enhet"]');
  const smal = te.cloneNode(true); smal.style.cssText = 'position:absolute;left:0;top:0;width:1px;visibility:hidden';
  document.body.appendChild(smal);
  const enRad = t => {
    const w = document.createTreeWalker(smal, NodeFilter.SHOW_TEXT); let nod;
    while ((nod = w.nextNode()) && !nod.textContent.includes(t));
    if (!nod) return null;
    const r = document.createRange(), i = nod.textContent.indexOf(t); r.setStart(nod, i); r.setEnd(nod, i + t.length);
    return new Set([...r.getClientRects()].map(q => Math.round(q.top))).size === 1;
  };
  const par = ['10 N', '1 538 °C', '5 m/s', '18 km/h'];
  const tePar = par.map(t => t.replace(/ /g, '·') + ': ' + (enRad(t) ? 'en rad' : 'BRUTEN'));
  const kontroll = enRad('16 − 6');                 // vanliga mellanslag: ska brytas i den smala spalten
  smal.remove();
  prova('prov: tal och enhet bryts aldrig isär – "16 − 6 = 10 N" och "1 538 °C" (hårda mellanslag, också i tusentalet)',
    tePar.every(t => t.endsWith('en rad')) && kontroll === false, tePar.join(' | ') + ' | 16 − 6 (vanliga mellanslag): ' + (kontroll ? 'en rad – spalten bryter inte' : 'bruten, som den ska'));
  // Ett intervall (80–90) bryts inte efter tankstrecket (ordskarvstecken, 2026-11-06): på en rad i den 1 px breda spalten
  Bok.gaTill(sf('intervall')); await v(60);
  const iv = $('.scen [data-post="intervall"]').cloneNode(true); iv.style.cssText = smal.style.cssText; document.body.appendChild(iv);
  const ivRad = (() => { const w = document.createTreeWalker(iv, NodeFilter.SHOW_TEXT); let nod;
    while ((nod = w.nextNode()) && !/80–/.test(nod.textContent));
    if (!nod) return null; const i = nod.textContent.indexOf('80–'), r = document.createRange(); r.setStart(nod, i); r.setEnd(nod, Math.min(nod.textContent.length, i + 5));
    return new Set([...r.getClientRects()].map(q => Math.round(q.top))).size === 1; })();
  iv.remove();
  prova('prov: ett intervall ("80–90 procent") bryts inte efter tankstrecket', ivRad === true, ivRad === null ? '"80–" hittas inte' : ivRad ? 'en rad' : 'BRUTET efter strecket');
  // Kraftparen i Tryck: drag och knuff, lika långa motriktade pilar från var sitt föremåls mitt
  prova('prov: kraftparen – pilarna lika långa och motriktade, mot det andra föremålet (drag) och ifrån det (knuff)',
    sp.par.antal === 2 && sp.par.satt.length === 2 && !sp.par.fel.length, sp.par.antal + ' par: ' + (sp.par.fel.join(' | ') || sp.par.satt.join(', ')));
  const etikett = async id => { Bok.gaTill(sf(id)); await v(60); const e = $('.scen [data-post="' + id + '"] .figur-bild'); return e ? e.getAttribute('aria-label') : ''; };
  const texterI = id => [...$$('.scen [data-post="' + id + '"] svg text')].map(t => t.textContent);
  const drag = await etikett('par-drag'), dragText = texterI('par-drag');
  prova('prov: kraftpar med värde – värdet över båda pilarna och beskrivningen ur data',
    dragText.filter(t => t === '12,5 N').length === 2 && drag === 'Kraftpar: Provföremål A och B är förbundna med ett snöre. A dras mot B åt höger och B dras mot A åt vänster, lika stora krafter, 12,5 N, på två olika föremål.',
    dragText.join(' · ') + ' | ' + drag);
  const knuff = await etikett('par-knuff'), knuffText = texterI('par-knuff');
  prova('prov: kraftpar utan värde – inga värden, pilarna ifrån varandra i beskrivningen',
    !knuffText.some(t => / N$/.test(t)) && /^Kraftpar: Provföremål nr 1 och Provföremål nr 2 ligger an mot varandra\. Kraften på föremål 1 åt vänster och kraften på föremål 2 åt höger, lika stora krafter på två olika föremål\.$/.test(knuff),
    knuffText.join(' · ') + ' | ' + knuff);
  // Kraftpilar utan värden, skala 20: pilen för 10 är halva den längsta (104), för 5 en fjärdedel
  const uv = await etikett('pilar-utan-varden'), uvText = texterI('pilar-utan-varden');
  const uvLinjer = [...$$('.scen [data-post="pilar-utan-varden"] line.fig-pil')].map(l => Math.hypot(l.x2.baseVal.value - l.x1.baseVal.value, l.y2.baseVal.value - l.y1.baseVal.value) + 12.6);
  prova('prov: kraftpilar utan värden – längderna ur storleken och skalan, inga "N" i figuren eller beskrivningen',
    !uvText.join(' ').includes(' N') && uv === 'Kraftpilar på Provlåda: Framåt åt höger, Bakåt åt vänster, Resultanten åt höger.' &&
    uvLinjer.length === 3 && Math.abs(uvLinjer[0] - 52) < 0.5 && Math.abs(uvLinjer[1] - 26) < 0.5 && Math.abs(uvLinjer[2] - 26) < 0.5,
    uvLinjer.map(Math.round).join('/') + ' | ' + uvText.join(' · ') + ' | ' + uv);
  // Friktion: ritas utan fel ur data, med och utan pilar; mätningen (figurKoll) gäller båda
  const frP = await etikett('friktion-pilar'), frG = await etikett('friktion-grov');
  const frPilar = id => $$('.scen [data-post="' + id + '"] g.fig-friktion-pil').length;
  Bok.gaTill(sf('friktion-pilar')); await v(60); const nP = frPilar('friktion-pilar'), bt = $('.scen [data-post="friktion-pilar"] figcaption');
  Bok.gaTill(sf('friktion-grov')); await v(60); const nG = frPilar('friktion-grov'), gText = texterI('friktion-grov');
  prova('prov: friktion – ritas ur data med pilar (draget och friktionen) och utan pilar (grova ytor, egna namn), och mätningen håller',
    sp.fr.antal === 2 && !sp.fr.fel.length && sp.fr.ytor.join(',') === 'normal,grov' && nP === 2 && nG === 0 && bt && bt.textContent === 'Provbildtext under friktionen.' &&
    frP === 'Ett block på ett bord. I förstoring syns att båda ytorna har små toppar och gropar som hakar i varandra. Draget pekar framåt och friktionen bakåt på blocket.' &&
    frG === 'Låda på hylla. I förstoring syns att båda ytorna har tydliga toppar och gropar som hakar i varandra.' && gText.includes('Låda') && gText.includes('Hylla'),
    (sp.fr.fel.join(' | ') || sp.fr.ytor.join(',')) + ' | pilar ' + nP + '/' + nG + ' | ' + frP + ' | ' + frG);
  // Bildpilar: utsnittet (900 × 360 av fotot → 440 × 176), två pilar, en etikett utan läge (över pilens mitt),
  // beskrivningen ur data; mätningen (figurKoll) gäller den
  const bpE = await etikett('bildpilar-utsnitt');
  Bok.gaTill(sf('bildpilar-utsnitt')); await v(60);
  const bpS = $('.scen [data-post="bildpilar-utsnitt"] svg[data-bildpilar]'), bpVb = bpS ? bpS.viewBox.baseVal : null;
  const bpT = $('.scen [data-post="bildpilar-utsnitt"] figcaption');
  prova('prov: bildpilar – utsnittet, två lika långa pilar med etiketter, beskrivningen och bildtexten ur data, och mätningen håller',
    sp.bp.antal === 1 && !sp.bp.fel.length && sp.bp.pilar === 2 && bpVb && bpVb.width === 440 && Math.abs(bpVb.height - 176) < 0.1 &&
    bpE === 'Provbeskrivning av fotot.' && bpT && bpT.textContent === 'Provbildtext under fotot.' &&
    texterI('bildpilar-utsnitt').join(',') === 'provpil 1,provpil 2',
    (sp.bp.fel.join(' | ') || sp.bp.pilar + ' pilar') + ' | ' + (bpVb && bpVb.width + '×' + bpVb.height) + ' | ' + bpE + ' | ' + texterI('bildpilar-utsnitt').join(','));
  Bok.gaTill(sf('spar-retarderad')); await v(60);
  const ret = $('.scen [data-post="spar-retarderad"] svg'), tider = ret ? [...ret.querySelectorAll('text')].map(t => t.textContent) : [];
  prova('prov: rörelsespår med tider – en tid per prick (0 s, 1 s …) och beskrivningen ur data',
    tider.join(',') === '0 s,1 s,2 s,3 s,4 s,5 s' && /^Rörelsespår: sex prickar med lika lång tid emellan, avstånden krymper – retarderad rörelse\./.test(ret.closest('.figur-bild').getAttribute('aria-label')),
    tider.join(',') + ' | ' + (ret && ret.closest('.figur-bild').getAttribute('aria-label')));
  // Newtons kanon: tre banor (två som landar, en runt jorden), namnen och beskrivningen ur motorn
  const kanonE = await etikett('newtons-kanon-prov'), kanon = $('.scen [data-post="newtons-kanon-prov"] svg[data-newtons-kanon]');
  const kanonBanor = kanon ? [...kanon.querySelectorAll('g.fig-kanon-bana')].map(g => g.dataset.bana).join(',') : '', kanonText = kanon ? [...kanon.querySelectorAll('text')].map(t => t.textContent) : [];
  prova('prov: Newtons kanon – tre banor (låg fart, högre fart, runt jorden) med namn, och beskrivningen ur motorn',
    kanonBanor === '1,2,3' && ['låg fart', 'högre fart', 'tillräckligt hög fart'].every(t => kanonText.includes(t)) && !!kanon.querySelector('circle.fig-kanon-runt') &&
    /^Jorden med ett mycket högt berg och en kanon på toppen\./.test(kanonE), kanonBanor + ' | ' + kanonText.join(', ') + ' | ' + kanonE);
  // Lutande plan med två steg: två rader (Lika branta, Flackare), den streckade starthöjden i varje, kulan som stannar
  // på starthöjden i det flackare steget, och beskrivningen ur motorn
  const lpE = await etikett('lutande-plan-2'), lp = $('.scen [data-post="lutande-plan-2"] svg[data-lutande-plan]');
  const lpSteg = lp ? [...lp.querySelectorAll('g.fig-lp-steg')] : [];
  const lpNamn = lpSteg.map(g => g.querySelector('text').textContent), lpHojd = lpSteg.map(g => g.querySelectorAll('line.fig-hojd').length);
  const lpFlack = lpSteg[1] && (() => { const h = lpSteg[1].querySelector('line.fig-hojd').y1.baseVal.value, k = lpSteg[1].querySelector('circle.fig-tonad');
    return k && Math.abs(k.cy.baseVal.value - h) < 6.5; })();
  prova('prov: lutande plan i två steg – Lika branta och Flackare, starthöjden streckad i varje steg, kulan når starthöjden på det flackare planet, beskrivningen ur motorn',
    lp && lp.dataset.lutandePlan === '2' && lpNamn.join(',') === 'Lika branta,Flackare' && lpHojd.every(n => n === 1) && lpFlack &&
    lpE === 'Två steg: kulan rullar ner för ett plan och upp för ett annat. Ju flackare det andra planet är, desto längre rullar kulan för att nå starthöjden.',
    lpNamn.join(',') + ' | ' + lpHojd.join('/') + ' | ' + lpE);
  synlig('.bok-stang').click(); await v(450);
  const dd = $$('.niva-valjare .niva-knapp').find(b => b.textContent.startsWith('Extranivå'));
  prova('prov: i hubben är Extranivå "kommer" när texten Tryck är vald', !oppen() && $('.underdel-knapp.aktiv').dataset.text === 'tryck' && dd && dd.getAttribute('aria-disabled') === 'true',
    'markerad: ' + $('.underdel-knapp.aktiv').dataset.text + ', Extranivå ' + (dd && dd.getAttribute('aria-disabled')));
  return k;
}`;

/* ---------- Bladvändningen: bläddring vänder ett blad, hopp gör det inte, aldrig en kö ----------
 * Körs i varje läge efter scenariot. BLAD: vändning framåt och bakåt (det nya uppslaget syns direkt, lagret ovanpå
 * försvinner), hopp via innehållet utan vändning, en snabb serie om 10 sidbyten (rätt sida, högst ett blad åt gången,
 * inget kvar efteråt) och inställningen Av. BLADTID: en vändning med CPU:n strypt 6 gånger – från tangenten tills
 * lagret är borta, och det längsta glappet mellan två bildrutor; blir det rött körs det om en gång (provaBlad), och
 * rött är det bara om båda körningarna är röda. BLADRM: med prefers-reduced-motion inga animationer. */
const BLADHJALP = String.raw`const v = ms => new Promise(r => setTimeout(r, ms));
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const synlig = s => $$(s).find(e => e.offsetParent !== null);
  const tangent = t => document.dispatchEvent(new KeyboardEvent('keydown', { key: t, bubbles: true }));
  const syns = () => $$('.scen .uppslag > .sida[data-nr]').map(s => +s.dataset.nr);
  const lager = () => $$('.blad-lager').length;
  // animationer i boken (bladlagret och scenen) – inte reglagens toningar
  const iBoken = a => a.effect && a.effect.target && a.effect.target.closest && a.effect.target.closest('.blad-lager, .scen');
  const igang = () => document.getAnimations().filter(a => a.playState === 'running' && iBoken(a)).length;
  const oppna = async () => { if (Bok.oppen) return; ($('.underdel-knapp.aktiv[data-oppna]') || $('[data-oppna]')).click(); await v(800); };`;
const BLAD = String.raw`async () => {
  ${BLADHJALP}
  const k = [], prova = (namn, ok, detalj) => k.push({ namn, ok: !!ok, detalj: detalj == null ? '' : String(detalj) });
  await oppna();
  const antal = $$('.lr-sida').length, upp = !!$('.scen .uppslag.ar-uppslag'), steg = upp ? 2 : 1;
  Bok.gaTill(1); await v(300);
  prova('blad: ett hopp (Bok.gaTill) vänder inget blad', !lager(), lager() + ' lager');
  // framåt: det nya uppslaget står i scenen direkt, bladet i ett lager ovanpå, som försvinner
  tangent('ArrowRight');
  const direkt = syns(), under = lager(), mot = !!$('.blad-lager .blad.fran-hoger'), tid = document.getAnimations().filter(iBoken).map(a => a.effect.getComputedTiming().duration);
  await v(520);
  prova('blad: → vänder ett blad (' + (upp ? 'från höger till vänster' : 'sidan lyfts åt vänster') + '), det nya uppslaget syns direkt och lagret är borta efteråt',
    direkt[0] === 1 + steg && under === 1 && mot && !lager() && !igang() && tid.length > 0 && tid.every(t => t <= 450),
    'syns ' + direkt + ', lager ' + under + ', längd ' + [...new Set(tid)].join('/') + ' ms, efteråt ' + lager() + ' lager');
  tangent('ArrowLeft');
  const bak = syns(), underB = lager(), motB = upp ? !!$('.blad-lager .blad.fran-vanster') : !!$('.blad-lager .blad-fast');
  await v(520);
  prova('blad: ← vänder bladet tillbaka och visar förra uppslaget direkt', bak[0] === 1 && underB === 1 && motB && !lager(), 'syns ' + bak + ', lager ' + underB);
  // hopp via innehållet: ingen vändning
  synlig('.bok-innehall').click(); await v(150);
  const mal = $$('.meny .toc-knapp').map(b => +b.dataset.till).find(n => n > 1 + steg);
  if (mal) { $('.meny .toc-knapp[data-till="' + mal + '"]').click(); await v(20); }
  else { tangent('Escape'); await v(80); }                  // en kort bok: inget avsnitt bortom uppslaget – stäng menyn
  prova('blad: ett hopp i innehållet vänder inget blad, bara direkt till sidan', !mal || (syns().includes(mal) && !lager()), 'mål ' + mal + ', syns ' + syns() + ', lager ' + lager());
  await v(300); Bok.gaTill(1); await v(300);
  // snabb serie: 7 framåt och 3 bakåt med 15 ms emellan – rätt sida på slutet, högst ett blad åt gången, ingen kö
  let i = 0, mest = 0;
  const maxI = upp ? Math.floor((antal - 1) / 2) : antal - 1;
  for (const t of [...Array(7).fill('ArrowRight'), ...Array(3).fill('ArrowLeft')]) {
    i = Math.max(0, Math.min(maxI, i + (t === 'ArrowRight' ? 1 : -1)));
    tangent(t); mest = Math.max(mest, lager()); await v(15);
  }
  const vantat = 1 + i * steg, slut = syns()[0];
  await v(470);
  prova('blad: en snabb serie om 10 sidbyten hamnar rätt, med högst ett blad åt gången och inget kvar efteråt (ingen kö)',
    slut === vantat && mest <= 1 && !lager() && !igang(), 'sida ' + slut + ' (väntat ' + vantat + '), högst ' + mest + ' lager, efteråt ' + lager() + ' lager, ' + igang() + ' animationer');
  // inställningen Av: direkt sidbyte
  synlig('.bok-innehall').click(); await v(150);
  $('.meny .val button[data-v="direkt"]').click(); tangent('Escape'); await v(100);
  tangent('ArrowRight');
  const av = lager() + igang();
  await v(100);
  synlig('.bok-innehall').click(); await v(150);
  $('.meny .val button[data-v="blad"]').click(); tangent('Escape'); await v(100);
  prova('blad: inställningen "Bladvändning: Av" ger direkt sidbyte, utan animation', av === 0, av + ' lager/animationer');
  // Omslaget: ← från innehållet vänder bladet tillbaka till omslaget, → vänder omslaget och boken öppnas
  if (JSON.parse(document.body.dataset.kontroll).omslag) {
    Bok.gaTill(1); await v(300);
    tangent('ArrowLeft');
    const o = syns(), oLager = lager(), oBlad = upp ? !!$('.blad-lager .blad.fran-vanster .blad-sida.bak .omslag') : !!$('.blad-lager .blad .omslag');
    await v(520);
    const oKvar = lager();
    tangent('ArrowRight');
    const i = syns(), iLager = lager(), iBlad = !!$('.blad-lager .blad.fran-hoger .blad-sida.fram .sida.omslag');
    await v(520);
    prova('blad: ← från innehållet vänder bladet till omslaget, → vänder omslaget och öppnar boken på innehållet',
      JSON.stringify(o) === '[0]' && oLager === 1 && oBlad && !oKvar && i[0] === 1 && iLager === 1 && iBlad && !lager() && !igang(),
      'bakåt ' + o + ' (lager ' + oLager + ', omslaget på bladet ' + oBlad + '), framåt ' + i + ' (lager ' + iLager + ', omslaget på bladet ' + iBlad + '), efteråt ' + lager() + ' lager');
  }
  return k;
}`;
// En vändning: från tangenten (sidbytet ingår) tills lagret är borta, och glappen mellan bildrutorna
const BLADEN = String.raw`async () => {
  const lager = () => document.querySelectorAll('.blad-lager').length;
  const tangent = t => document.dispatchEvent(new KeyboardEvent('keydown', { key: t, bubbles: true }));
  const ramar = [];
  let t0 = performance.now(), slut = null;
  // när lagret tas bort (exakt, inte vid nästa bildruta)
  const obs = new MutationObserver(() => { if (!lager() && slut === null) slut = performance.now(); });
  obs.observe(document.querySelector('.scen-ram'), { childList: true });
  tangent('ArrowRight');
  const upplagt = performance.now() - t0;                     // själva sidbytet (synkront, innan vändningen spelas)
  await new Promise(ok => { const ram = t => { ramar.push(t); if (lager()) requestAnimationFrame(ram); else ok(); };
    requestAnimationFrame(ram); setTimeout(ok, 3000); });
  obs.disconnect();
  const glapp = ramar.slice(1).map((t, j) => t - ramar[j]);
  // hela vändningen: från tangenten (sidbytet ingår) tills lagret är borta
  return { total: Math.round((slut || performance.now()) - t0), upplagt: Math.round(upplagt), ramar: ramar.length, maxGlapp: Math.round(Math.max(0, ...glapp)) };
}`;
// Som brytningstiden: en uppvärmningsvändning som inte räknas (sidorna byggs första gången), sedan tre vändningar;
// medianen jämförs med 450 ms. hack (bara --negativ, "hackig bladvändning"): sidan blockeras 80 ms var 100:e ms medan
// vändningarna mäts – ett medvetet långsamt läge, som ska ge glapp över 50 ms i båda körningarna.
const BLADTID = String.raw`async (hack) => {
  ${BLADHJALP}
  await oppna();
  const en = async () => { Bok.gaTill(1); await v(400); return await (${BLADEN})(); };
  await en();
  const h = hack ? setInterval(() => { const t = performance.now(); while (performance.now() - t < 80); }, 100) : null;
  try {
    const m = [await en(), await en(), await en()], tot = m.map(x => x.total).sort((a, b) => a - b);
    return { total: tot[1], max: tot[2], upplagt: Math.max(...m.map(x => x.upplagt)), ramar: m[1].ramar, maxGlapp: Math.max(...m.map(x => x.maxGlapp)) };
  } finally { clearInterval(h); }
}`;
const BLADRM = String.raw`async () => {
  ${BLADHJALP}
  await oppna(); Bok.gaTill(1); await v(300);
  tangent('ArrowRight'); const a = lager() + igang() + $$('.in-framat, .in-bakat').length; await v(60);
  Bok.gaTill(5); const b = lager() + igang(); await v(60);
  tangent('ArrowLeft'); const c = lager() + igang() + $$('.in-framat, .in-bakat').length;
  return { a, b, c };
}`;

// På batteri mäts ingen tid (Windows: Win32_Battery, BatteryStatus 1 = på batteri)
let paBatteri = null;
function batteri() {
  if (paBatteri !== null) return paBatteri;
  try {
    const ut = require('child_process').execSync('powershell -NoProfile -Command "(Get-CimInstance Win32_Battery | Select-Object -First 1).BatteryStatus"', { encoding: 'utf8', timeout: 15000 }).trim();
    paBatteri = ut === '1';
  } catch (e) { paBatteri = false; }
  return paBatteri;
}

// Tidsprovet körs om automatiskt en gång (samma läge, samma delkapitel, samma sida) om det blir rött: en belastad dator
// ger ibland ett glapp över 50 ms i ett oförändrat delkapitel (Joachims order 2026-11-06). Rött bara om båda
// körningarna är röda; gränserna (450 ms, 50 ms) är desamma. Omkörningen syns i utskriften (OMKÖRD).
async function provaBlad(c, lage, hack) {
  const k = await c.ev(`(${BLAD})()`);
  if (batteri()) k.push({ namn: 'blad: tidtagning med CPU:n strypt 6 gånger – ej mätt (datorn går på batteri)', ok: true, detalj: '' });
  else {
    // hack (bara --negativ): 'hack' = hackigt i båda körningarna, 'forsta' = bara i den första (omkörningen ska rädda)
    const mat = async n => {
      await c.send('Emulation.setCPUThrottlingRate', { rate: 6 });
      const t = await c.ev(`(${BLADTID})(${hack === 'hack' || (hack === 'forsta' && n === 1)})`);
      await c.send('Emulation.setCPUThrottlingRate', { rate: 1 });
      return t;
    };
    const godkand = t => t.total <= 450 && t.maxGlapp <= 50;
    const beskriv = t => `median ${t.total} ms från tangenten, max ${t.max} ms (sidbytet högst ${t.upplagt} ms), ${t.ramar} bildrutor, längsta glapp ${t.maxGlapp} ms`;
    const forsta = await mat(1), t = godkand(forsta) ? forsta : await mat(2), omkord = t === forsta ? null : forsta;
    k.push({ namn: 'blad: en vändning tar högst 450 ms med CPU:n strypt 6 gånger (medianen av 3 efter en uppvärmning), utan hack (inget glapp över 50 ms mellan bildrutorna); vid rött körs provet om en gång, rött bara om båda körningarna är röda',
      ok: godkand(t), detalj: omkord ? `båda körningarna röda – första: ${beskriv(omkord)}; andra: ${beskriv(t)}` : beskriv(t) });
    k.tid = Object.assign({}, t, { omkord, gron: godkand(t) });
  }
  await c.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  const rm = await c.ev(`(${BLADRM})()`);
  await c.send('Emulation.setEmulatedMedia', { features: [] });
  k.push({ namn: 'blad: med prefers-reduced-motion inga animationer – direkt sidbyte, också vid hopp', ok: !rm.a && !rm.b && !rm.c, detalj: JSON.stringify(rm) });
  await c.ev(`(async () => { if (Bok.oppen) { [...document.querySelectorAll('.bok-stang')].find(e => e.offsetParent).click(); await new Promise(r => setTimeout(r, 450)); } })()`);
  return k;
}

/* ---------- Tomma sidor (2026-11-06, arbetsorder 7: "texten försvinner") ----------
 * Felet: en sida visade sidhuvudet men inga block. Blockens element finns en gång per bok och flyttas in i sidan som
 * byggs; en sparad brytning för ett annat sidmått togs fram utan att sidorna byggdes om, så sidor vars block flyttats
 * till det andra måttets sidor visades tomma (sidmåttet A → B → A → B, t.ex. helskärm av och på).
 * SIDMATT: boken öppen mitt i, sidmåttet A → B → A → B – inget uppslag får bli tomt (återskapar felet).
 * SVEP: varje sida i varje bok (texterna på varje nivå och djupdykningarna) har block; sedan bladvändning fram och
 * tillbaka i den första boken, en annan bok öppnas och stängs, och den första boken gås igenom igen. */
const TOMMA = String.raw`const v = ms => new Promise(r => setTimeout(r, ms)), $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  // sidor i scenen med sidhuvud men utan block (omslaget, nr 0, har inget sidinnehåll)
  const tomma = () => $$('.scen .uppslag > .sida[data-nr]').filter(s => s.dataset.nr !== '0' && s.querySelector('.sidhuvud') && !s.querySelector('.sidinnehall > *')).map(s => s.dataset.nr);
  const stang = async () => { if (!Bok.oppen) return; const s = $$('.bok-stang').find(e => e.offsetParent); if (s) s.click(); await v(500); };`;
const TOMMA_SVEP = String.raw`async () => {
  ${TOMMA}
  await stang();
  const fel = [], bocker = [];
  const start = { text: ($('.underdel-knapp.aktiv') || { dataset: {} }).dataset.text, niva: ($('.niva-valjare .niva-knapp.aktiv') || { dataset: {} }).dataset.niva };
  // varje sida i den öppna boken: inga tomma, och blocken (data-post) per sida – jämför (en tidigare genomgång) säger
  // till om en sida har tappat block
  // Uppslagsregeln (order 8, 2026-11-07): också varje figur vars stycke (närmast före, bakåt över figurer) står på ett
  // annat uppslag (dator) / en annan sida (mobil) – med om stycket står först på sin sida (efter rubrikerna: undantaget)
  const skilda = [];
  // (en formel följer samma regel som en figur, arbetsorder 11: slaget 'm')
  const slag = b => b.matches('figure.b-figur') ? 'f' : b.matches('.b-formel') ? 'm' : b.matches('p.b-text') ? 't' : b.matches('h2, h3, .b-rubrik, [class*="avsnittsstart"], .sidtitel') ? 'r' : 'a';
  const medStycket = sl => sl === 'f' || sl === 'm';
  // Rutorna och formlerna (arbetsorder 11), mätta på skärmen: varje rad i ett EXEMPEL eller en PROVA-ruta (sida, höjd,
  // Svar) och sidans plats för text; varje formels uttryck – på en rad, inom spalten
  const rutor = { exempel: 0, prova: 0, delade: 0, fyrtio: 0, fel: [] }, formler = { antal: 0, fel: [] };
  // (arbetsorder 13) en rad i ett exempel som hör ihop med raden före – Svar, eller ett mellanled: i samma stycke och en
  // uträkning (börjar inte med versal, eller "x = …") eller efter en rad som slutar med kolon; samma regel som bok.js
  const RAKNING = /^(?!\p{Lu})|^\S{1,15} [=≈<>≤≥]/u, bunden = (x, fore) => x.svar || (!x.ny && (/:\s*$/.test(fore.t) || RAKNING.test(x.t)));
  const hela = async (namn, jamfor) => { const n = $$('.lr-sida').length, ids = {}, bl = {}, rr = {}, kap = {}, pos = {}, uppslag = !!$('.scen .uppslag.ar-uppslag');
    for (let s = 1; s <= n; s += 1) { Bok.gaTill(s); await v(25); const t = tomma(); if (t.length) fel.push(namn + ': sida ' + t.join(','));
      $$('.scen .uppslag > .sida[data-nr]').forEach(e => { ids[e.dataset.nr] = [...e.querySelectorAll('[data-post]')].map(p => p.dataset.post).join(',');
        const inne = e.querySelector('.sidinnehall'); if (inne && !e.classList.contains('innehallssida')) bl[e.dataset.nr] = [...inne.children].map(b => [b.dataset.post, slag(b)]);
        if (inne && !jamfor && !(e.dataset.nr in rr)) {
          const cs = getComputedStyle(inne); kap[e.dataset.nr] = inne.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
          rr[e.dataset.nr] = [...inne.querySelectorAll('.b-rutarad')].map(x => ({ ruta: x.dataset.ruta, rad: +x.dataset.rad, svar: x.hasAttribute('data-svar'),
            prova: x.classList.contains('rr-prova'), h: x.getBoundingClientRect().height, post: x.dataset.post, ny: x.classList.contains('rr-ny'),
            t: (x.querySelector('p') || x).textContent }));
          // blockens läge på sidan (från textens överkant): det som står före ett exempel som delats enligt 40 %-regeln
          const topp = inne.getBoundingClientRect().top + parseFloat(cs.paddingTop);
          pos[e.dataset.nr] = [...inne.children].map(b => { const q = b.getBoundingClientRect(); return { post: b.dataset.post, sl: slag(b), top: q.top - topp, bottom: q.bottom - topp }; });
          const ir = inne.getBoundingClientRect();
          inne.querySelectorAll('.formel-uttryck').forEach(u => { const r = u.getBoundingClientRect(), lh = parseFloat(getComputedStyle(u).fontSize) * 1.6;
            formler.antal++;
            if (u.scrollWidth > u.clientWidth + 1 || r.right > ir.right + 1 || r.left < ir.left - 1) formler.fel.push(namn + ' s.' + e.dataset.nr + ': ”' + u.textContent + '” går utanför spalten');
            // (ett bråk, [[m|V]], står på en rad men är högre: det räknas inte)
            else if (r.height > lh && !u.querySelector('.brak')) formler.fel.push(namn + ' s.' + e.dataset.nr + ': ”' + u.textContent + '” står på mer än en rad'); });
        } }); }
    if (jamfor) Object.keys(jamfor).forEach(nr => { if (jamfor[nr] !== ids[nr]) fel.push(namn + ': sida ' + nr + ' har inte samma block som förut (' + (ids[nr] || '').split(',').filter(Boolean).length + ' av ' + jamfor[nr].split(',').filter(Boolean).length + ')'); });
    else {
      const alla = Object.keys(bl).map(Number).sort((a, b) => a - b).flatMap(nr => bl[nr].map(([post, sl], i) => ({ nr, i, post, sl })));
      const plats = nr => uppslag ? (nr % 2 ? nr : nr - 1) : nr;
      alla.forEach((b, j) => { if (!medStycket(b.sl)) return; let k = j - 1; while (k >= 0 && medStycket(alla[k].sl)) k--;
        const st = alla[k]; if (!st || st.sl !== 't' || plats(st.nr) === plats(b.nr)) return;
        skilda.push({ bok: namn, figur: b.post, formel: b.sl === 'm', stycke: st.nr, sida: b.nr, uppslag, forst: bl[st.nr].slice(0, st.i).every(x => x[1] === 'r') }); });
      // Rutorna: ett EXEMPEL som ryms på en sida står på ett uppslag (datorn) / en sida (mobilen); raden Svar står
      // aldrig ensam på ett nytt uppslag / en ny sida; en PROVA-ruta är hel (en sida)
      const grupper = {};
      Object.keys(rr).map(Number).sort((a, b) => a - b).forEach(nr => rr[nr].forEach(x => (grupper[x.ruta] = grupper[x.ruta] || []).push(Object.assign({ nr }, x))));
      Object.entries(grupper).forEach(([id, rad]) => {
        rad.sort((a, b) => a.rad - b.rad);
        const sid = [...new Set(rad.map(x => x.nr))], hojd = rad.reduce((s, x) => s + x.h, 0), minKap = Math.min(...sid.map(nr => kap[nr]));
        if (rad[0].prova) { rutor.prova++; if (sid.length > 1) rutor.fel.push(namn + ': PROVA-rutan ' + id + ' är delad (s.' + sid.join('–') + ')'); return; }
        rutor.exempel++;
        if (sid.length > 1) rutor.delade++;
        // Ett exempel som ryms får delas enligt 40 %-regeln (arbetsorder 13): det som står före exemplet och rubrikerna
        // före det på dess första sida är under 40 % av sidan – och aldrig mitt i ett mellanled eller före Svar
        let fyrtio = false;
        if (sid.length > 1 && hojd <= minKap) {
          const P = pos[sid[0]] || [];
          let st = P.findIndex(b => b.post === rad[0].post); while (st > 0 && P[st - 1].sl === 'r') st--;
          fyrtio = st > 0 && P[st - 1].bottom - P[0].top < 0.4 * kap[sid[0]] + 1;
          if (fyrtio) rutor.fyrtio++;
          rad.forEach((x, k) => { if (k && x.nr !== rad[k - 1].nr && !x.svar && bunden(x, rad[k - 1]))
            rutor.fel.push(namn + ': exemplet ' + id + ' är delat mitt i ett mellanled (s.' + x.nr + ': ”' + x.t.slice(0, 40) + '”)'); });
        }
        if (!fyrtio && new Set(sid.map(plats)).size > 1 && hojd <= minKap) rutor.fel.push(namn + ': exemplet ' + id + ' står på flera ' + (uppslag ? 'uppslag' : 'sidor') + ' (s.' + sid.join('–') + ') fast det ryms på en sida (' + Math.round(hojd) + ' av ' + Math.round(minKap) + ' px)');
        const sv = rad[rad.length - 1], fore = rad[rad.length - 2];
        if (sv.svar && fore && plats(sv.nr) !== plats(fore.nr)) rutor.fel.push(namn + ': raden Svar i exemplet ' + id + ' står ensam på ' + (uppslag ? 'ett nytt uppslag' : 'en ny sida') + ' (s.' + sv.nr + ')');
      });
    }
    return { n, ids }; };
  // böckerna: varje text på varje nivå (en nivå som är "kommer" för texten hoppas över), och varje djupdykning
  const texter = $$('.underdel-knapp[data-oppna]').map(b => b.dataset.text), nivaer = $$('.niva-valjare .niva-knapp').map(b => b.dataset.niva);
  const lista = [];
  for (const text of (texter.length ? texter : [null])) for (const niva of (nivaer.length ? nivaer : [null])) lista.push({ text, niva });
  const textKnapp = x => x.text ? $$('.underdel-knapp[data-oppna]').find(b => b.dataset.text === x.text) : $('[data-oppna]');
  // texten väljs först (knappen öppnar boken), sedan nivån i hubben, och boken öppnas igen: då är det rätt bok
  const oppnaBok = async x => {
    await stang();
    const tb = textKnapp(x); if (!tb) return false;
    tb.click(); await v(500); await stang();
    const nb = x.niva && $$('.niva-valjare .niva-knapp').find(b => b.dataset.niva === x.niva);
    if (nb) { if (nb.getAttribute('aria-disabled') === 'true') return false; nb.click(); await v(150);
      // (hubben ritas om: knapparna byts ut)
      if (!$$('.niva-valjare .niva-knapp.aktiv').some(b => b.dataset.niva === x.niva)) return false; }
    textKnapp(x).click(); await v(700); return Bok.oppen;
  };
  const oppnade = [];
  for (const x of lista) if (await oppnaBok(x)) { const namn = (x.text || 'boken') + '/' + (x.niva || ''), r = await hela(namn); bocker.push([namn, r.n]); oppnade.push(Object.assign({ ids: r.ids }, x)); }
  // (korten hämtas på nytt för varje bok: hubben ritas om när en bok stängs, och då byts korten ut)
  const antalKort = $$('.fordj-kort:not([aria-disabled="true"])').length;
  for (let kn = 0; kn < antalKort; kn++) { await stang(); const kort = $$('.fordj-kort:not([aria-disabled="true"])')[kn]; if (!kort) continue;
    const namn = kort.textContent.trim().slice(0, 30); kort.click(); await v(700);
    if (Bok.oppen) bocker.push([namn, (await hela(namn)).n]); }
  const svep = { bocker: bocker.length, sidor: bocker.reduce((s, b) => s + b[1], 0), fel: fel.slice(), skilda, rutor, formler };
  // bladvändning fram och tillbaka i den första boken, en annan bok öppnas och stängs, och den första gås igenom igen
  // (blocken på varje sida ska vara desamma som i den första genomgången)
  fel.length = 0;
  const forsta = oppnade[0], annan = oppnade.find(x => forsta && x.text !== forsta.text) || oppnade[1];
  let efter = null;
  if (forsta && await oppnaBok(forsta)) {
    Bok.gaTill(3); await v(200);
    const tangent = t => document.dispatchEvent(new KeyboardEvent('keydown', { key: t, bubbles: true }));
    for (const t of ['ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowLeft', 'ArrowLeft', 'ArrowLeft', 'ArrowRight']) { tangent(t); await v(450); const tm = tomma(); if (tm.length) fel.push('efter ' + t + ': sida ' + tm.join(',')); }
    if (annan && await oppnaBok(annan)) { Bok.gaTill(4); await v(200); tangent('ArrowRight'); await v(450); }
    if (await oppnaBok(forsta)) await hela('tillbaka i ' + (forsta.text || 'boken') + '/' + (forsta.niva || ''), forsta.ids);
    efter = fel.slice();
  }
  await stang();
  // tillbaka till texten och nivån från före svepet (resten av körningen väntar sig dem)
  const nb = start.niva && $$('.niva-valjare .niva-knapp').find(b => b.dataset.niva === start.niva); if (nb) { nb.click(); await v(150); }
  const tb = start.text && $$('.underdel-knapp[data-oppna]').find(b => b.dataset.text === start.text); if (tb) { tb.click(); await v(700); await stang(); }
  return { svep, efter };
}`;
async function provaTommaSidor(c, lage) {
  const k = [];
  // SIDMATT: från node, eftersom sidmåttet byts med CDP (som ett nytt fönstermått eller helskärm av och på)
  const A = { width: lage.B, height: lage.H }, B = lage.mobil ? { width: 430, height: 900 } : { width: 1807, height: 1068 };
  const satt = m => c.send('Emulation.setDeviceMetricsOverride', { width: m.width, height: m.height, deviceScaleFactor: 1, mobile: !!lage.mobil });
  await c.ev(`(async () => { ${TOMMA} await stang(); ($('.underdel-knapp.aktiv[data-oppna]') || $('[data-oppna]')).click(); await v(800);
    Bok.gaTill(Math.max(2, Math.floor($$('.lr-sida').length / 2))); await v(300); })()`);
  // per steg: tomma sidor, och uppslagets block (data-post) – samma sidmått ska visa samma block varje gång
  const steg = [], forra = {};
  let tappat = false;
  for (const [namn, m] of [['A', A], ['B', B], ['A', A], ['B', B]]) {
    await satt(m); await vanta(700);
    const x = await c.ev(`(() => { ${TOMMA} return { tomma: tomma(), nr: $$('.scen .uppslag > .sida[data-nr]').map(s => s.dataset.nr).join('–'),
      block: $$('.scen .uppslag > .sida[data-nr] [data-post]').map(p => p.dataset.post) }; })()`);
    // (jämförs när samma sidor visas; läsplatsen kan flytta uppslaget)
    const f = forra[namn], olika = f && f.nr === x.nr && f.block.join() !== x.block.join();
    if (olika || x.tomma.length) tappat = true;
    steg.push(`${namn}: sida ${x.nr}, ${x.block.length} block` + (x.tomma.length ? ` – TOM sida ${x.tomma.join(',')}` : '') +
      (olika ? ` – ${f.block.length - x.block.filter(b => f.block.includes(b)).length} block BORTA` : f && f.nr !== x.nr ? ' (annat uppslag än förra gången)' : ''));
    forra[namn] = f || x;
  }
  await satt(A); await vanta(700);
  await c.ev(`(async () => { ${TOMMA} await stang(); })()`);
  k.push({ namn: 'tomma sidor: sidmåttet A → B → A → B med boken öppen – inget uppslag blir tomt eller tappar block (samma mått, samma block)',
    ok: !tappat, detalj: `A ${A.width}×${A.height}, B ${B.width}×${B.height}: ` + steg.join(' · ') });
  const r = await c.ev(`(${TOMMA_SVEP})()`);
  k.push({ namn: 'tomma sidor: varje sida i varje bok (texterna på varje nivå, djupdykningarna) har block',
    ok: r.svep.bocker > 0 && !r.svep.fel.length, detalj: `${r.svep.bocker} böcker, ${r.svep.sidor} sidor` + (r.svep.fel.length ? ' – TOMMA: ' + r.svep.fel.join('; ') : '') });
  // Uppslagsregeln (order 8): på datorn står ingen figur på ett annat uppslag än stycket före den, utom när stycket
  // står först på sin sida (undantaget, varning); på mobilen bara varningar (inga flyttar för mobilens skull)
  const sk = r.svep.skilda, beskriv = x => `${x.bok} s.${x.stycke}→${x.sida} (${x.figur})`;
  const brott = sk.filter(x => x.uppslag && !x.forst), varn = sk.filter(x => !x.uppslag || x.forst);
  k.push({ namn: 'uppslagsregeln: ingen figur eller formel står på ett annat uppslag än stycket före den (datorn; undantaget: stycket först på sin sida)',
    ok: !brott.length, detalj: brott.length ? 'SKILDA: ' + brott.map(x => (x.formel ? 'formel ' : '') + beskriv(x)).join('; ') : 'inga' });
  k.varningar = varn.map(x => `${x.formel ? 'formeln' : 'figuren'} på ${x.uppslag ? 'ett annat uppslag' : 'en annan sida'} än stycket: ${beskriv(x)}` + (x.uppslag ? ' – stycket först på sin sida (undantag)' : ' – mobilen'));
  // Nästa steg (arbetsorder 11): rutorna och formlerna, mätta på skärmen i varje bok
  const ru = r.svep.rutor, fo = r.svep.formler;
  if (ru.exempel) k.push({ namn: `rutor: varje EXEMPEL som ryms står på ${lage.mobil ? 'en sida' : 'ett uppslag'}, och raden Svar står aldrig ensam på ${lage.mobil ? 'en ny sida' : 'ett nytt uppslag'}; ett exempel som ryms delas bara enligt 40 %-regeln och aldrig mitt i ett mellanled (${ru.exempel} exempel, ${ru.delade} delade mellan raderna, ${ru.fyrtio} av dem enligt 40 %-regeln)`,
    ok: !ru.fel.some(f => !/PROVA/.test(f)), detalj: ru.fel.filter(f => !/PROVA/.test(f)).join('; ') });
  if (ru.prova) k.push({ namn: `rutor: varje PROVA-ruta är hel (${ru.prova})`, ok: !ru.fel.some(f => /PROVA/.test(f)), detalj: ru.fel.filter(f => /PROVA/.test(f)).join('; ') });
  if (fo.antal) k.push({ namn: `formel: varje formel står på en rad och ryms i spalten (${fo.antal})`, ok: !fo.fel.length, detalj: fo.fel.slice(0, 4).join('; ') });
  k.push({ namn: 'tomma sidor: inget blir tomt efter bladvändning fram och tillbaka och efter att en annan bok öppnats och stängts',
    ok: !!r.efter && !r.efter.length, detalj: r.efter ? (r.efter.length ? 'TOMMA: ' + r.efter.join('; ') : 'inga') : 'kunde inte öppna boken' });
  return k;
}

/* ---------- Hubben när allt "kommer" (2026-11-07) ----------
 * Ingen text har innehåll än: Läs säger "Texterna kommer.", textknapparna syns inte, varje nivå och varje djupdykning
 * är tonad ("kommer") och går inte att öppna, flikarna finns, och inget JS-fel. */
const HUBB_KOMMER = String.raw`async () => {
  const v = ms => new Promise(r => setTimeout(r, ms)), $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)], k = [];
  const prova = (namn, ok, detalj) => k.push({ namn, ok: !!ok, detalj: detalj == null ? '' : String(detalj) });
  const lage = ($('section[data-flik="laes"] .intro') || {}).textContent || '';
  prova('hubb (allt kommer): Läs säger "Texterna kommer."', lage.trim() === 'Texterna kommer.', lage);
  const texter = $('section[data-flik="laes"] .underdel-valjare');
  prova('hubb (allt kommer): textknapparna syns inte', !texter || texter.hidden || !texter.offsetParent);
  const nivaer = $$('.niva-valjare .niva-knapp');
  prova('hubb (allt kommer): varje nivå är tonad ("kommer")', nivaer.length > 0 && nivaer.every(b => b.getAttribute('aria-disabled') === 'true'), nivaer.map(b => b.textContent + ' ' + b.getAttribute('aria-disabled')).join(', '));
  const kort = $$('.fordj-kort');
  if (kort.length) {
    kort.forEach(b => b.click()); await v(500);
    prova('hubb (allt kommer): djupdykningarna är tonade och öppnar ingen bok', kort.every(b => b.getAttribute('aria-disabled') === 'true') && !Bok.oppen, kort.length + ' kort');
  }
  prova('hubb (allt kommer): flikarna finns', $$('.flik').length >= 3, $$('.flik').map(f => f.textContent.trim()).join(' · '));
  return k;
}`;

/* ---------- Omkörning när Chrome stängs (2026-11-07, Joachims beslut) ----------
 * Headless Chrome har stängts mitt i en körning, bara när datorn gick på batteri (5–6/11). Stängs Chrome körs läget om
 * en gång; omkörningen syns i utskriften (OMKÖRD) och i sammanställningen sist. Stängs det igen är läget rött. */
const chromeOmkorningar = [];
const stangdes = r => (r.fel || []).some(f => /Chrome stängdes/.test(f));
async function medOmkorning(fn, namn) {
  let r = await fn();
  if (stangdes(r)) {
    console.log(`       OMKÖRD: Chrome stängdes (${namn}) – läget körs om en gång`);
    chromeOmkorningar.push(namn);
    r = await fn();
  }
  return r;
}

/* ---------- En körning: ett delkapitel i ett läge ---------- */

async function kor(dk, lage, felkod) {
  const c = await chrome();
  const res = { kontroller: [], fel: [], kontroll: null };
  try {
    await c.send('Page.enable'); await c.send('Runtime.enable');
    await c.send('Runtime.addBinding', { name: '__gest' });
    await c.send('Emulation.setDeviceMetricsOverride', { width: lage.B, height: lage.H, deviceScaleFactor: 1, mobile: !!lage.mobil });
    if (lage.mobil) await c.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 1 });
    await c.send('Page.addScriptToEvaluateOnNewDocument', { source: FANGA_FEL + (typeof felkod === 'string' ? felkod : (felkod && felkod.kod) || '') });
    const url = adressTill(path.join(dk.mapp, 'index.html')) + '?kontroll' + ((felkod && felkod.adress) || '');
    const ladda = async adress => {
      await c.send('Page.navigate', { url: 'about:blank' }); await vanta(100);
      await c.send('Page.navigate', { url: adress });
      for (let i = 0; i < 60; i++) { await vanta(150); if (await c.ev('!!(document.body && document.body.dataset.kontroll)').catch(() => false)) break; }
      await vanta(200);
    };
    await ladda(url);
    res.kontroll = JSON.parse(await c.ev('document.body.dataset.kontroll || "null"'));
    if (BILDER) await bild(c, dk, lage, 'hubb');
    // Ett delkapitel där allt "kommer" (ingen text har innehåll än, t.ex. en ny avsnittssida före texterna,
    // 2026-11-07): bara hubben prövas – det finns ingen bok att öppna
    res.allaKommer = !!res.kontroll && Object.keys(res.kontroll.nivaer).length > 0 && Object.values(res.kontroll.nivaer).every(x => typeof x === 'string');
    if (res.allaKommer) res.kontroller = await c.ev(`(${HUBB_KOMMER})()`);
    else {
    // en sida utan nivåer, med bara fristående böcker (Matematiken i fysiken, arbetsorder 11): ett eget scenario
    res.bokhubb = !!res.kontroll && !res.kontroll.niva;
    res.kontroller = await c.ev(res.bokhubb ? `(${BOKHUBB})(${lage.helskarm}, ${UTAN_FONSTER})` : `(${SCENARIO})(${lage.helskarm}, ${UTAN_FONSTER})`);
    if (dk.prov && !lage.mobil) res.kontroller.push(...await c.ev(`(${PROVSCENARIO})()`));
    const blad = await provaBlad(c, lage, felkod && felkod.blad);
    res.kontroller.push(...blad); res.bladTid = blad.tid || null;
    const tom = await provaTommaSidor(c, lage);
    res.kontroller.push(...tom); res.figurVarningar = tom.varningar || [];
    // En adress som pekar på en rubrik (#atomer-2) öppnar boken där rubriken står; Stäng leder till hubben i samma
    // delkapitel. Rubrikernas adresser kommer ur kontrolläget (adress → block).
    const ankare = ((res.kontroll && res.kontroll.ankare) || []).filter(([a, p]) => p !== a && /-\d+$/.test(a));
    const [adr, post] = ankare[Math.floor(ankare.length / 2)] || ['innehall', 'innehall'];
    // på den nivå som adresserna räknades för (en rubriks adress är den n:te rubriken i avsnittet på en viss nivå)
    await ladda(url + (res.kontroll && res.kontroll.niva ? '&niva=' + res.kontroll.niva : '') + '#' + encodeURIComponent(adr));
    const direkt = await c.ev(`(async () => {
      const v = ms => new Promise(r => setTimeout(r, ms)), $ = s => document.querySelector(s);
      const sidor = [...document.querySelectorAll('.scen .uppslag > .sida[data-nr]')];
      const forst = !$('.bokapp').hidden && sidor.some(s => s.querySelector('[data-post="${post}"]'));
      [...document.querySelectorAll('.bok-stang')].find(e => e.offsetParent).click(); await v(450);
      return { forst, sedan: $('.bokapp').hidden && location.hash === '' && !!document.body.dataset.klar, syns: sidor.map(s => s.dataset.nr) };
    })()`);
    res.kontroller.push({ namn: `adress: index.html#${adr} öppnar boken där rubriken står`, ok: direkt.forst, detalj: direkt.syns.join('-') + ' (' + post + ')' });
    res.kontroller.push({ namn: 'adress: Stäng leder därifrån till hubben i samma delkapitel', ok: direkt.sedan, detalj: '' });

    // Läsplatsen är ett block: läs till ett ställe, stäng, byt sidmått (fönster ↔ helskärm ↔ mobil) – samma block syns
    const alt = lage.mobil ? { B: 1366, H: 633, namn: '1366×633' } : lage.H === 633 ? { B: 1366, H: 768, namn: '1366×768' } : { B: 390, H: 664, mobil: true, namn: 'mobil 390×664' };
    // (en sida med bara fristående böcker: det första kortet)
    const oppnaren = `(document.querySelector('.underdel-knapp.aktiv') || document.querySelector('.fordj-kort[data-oppna]'))`;
    const minne = await c.ev(`(async () => {
      const v = ms => new Promise(r => setTimeout(r, ms));
      ${oppnaren}.click(); await v(600);
      Bok.gaTill(Math.max(2, Math.round(document.querySelectorAll('.lr-sida').length * 0.6))); await v(200);
      const p = Bok.plats;
      [...document.querySelectorAll('.bok-stang')].find(e => e.offsetParent).click(); await v(450);
      return p;
    })()`);
    await c.send('Emulation.setDeviceMetricsOverride', { width: alt.B, height: alt.H, deviceScaleFactor: 1, mobile: !!alt.mobil });
    await vanta(400);
    const igen = await c.ev(`(async () => {
      const v = ms => new Promise(r => setTimeout(r, ms));
      ${oppnaren}.click(); await v(700);
      const sidor = [...document.querySelectorAll('.scen .uppslag > .sida[data-nr]')];
      const id = ${JSON.stringify(minne)};
      const ok = !!id && sidor.some(s => s.querySelector('[data-post="' + id + '"]'));
      [...document.querySelectorAll('.bok-stang')].find(e => e.offsetParent).click(); await v(450);
      return { ok, syns: sidor.map(s => s.dataset.nr).join('-') };
    })()`);
    await c.send('Emulation.setDeviceMetricsOverride', { width: lage.B, height: lage.H, deviceScaleFactor: 1, mobile: !!lage.mobil });
    await vanta(300);
    res.kontroller.push({ namn: `minne: läsplatsen (ett block) syns igen efter byte till ${alt.namn}`, ok: igen.ok, detalj: minne + ' → sidor ' + igen.syns });

    // Prestanda: brytningen med CPU:n strypt 6 gånger, som på en Chromebook. Varje bok (text × nivå): ett
    // uppvärmningsvarv som inte räknas, sedan 5 mätvarv – medianen ska vara under 200 ms (maxet redovisas)
    await c.send('Emulation.setCPUThrottlingRate', { rate: 6 });
    res.brytTid = await c.ev('Bok.brytTid(5)');
    await c.send('Emulation.setCPUThrottlingRate', { rate: 1 });
    const over = res.brytTid ? res.brytTid.bocker.filter(b => !(b.median < 200)) : [{ bok: '(ingen bok)', median: NaN, max: NaN }];
    res.kontroller.push({ namn: 'prestanda: brytningen under 200 ms med CPU:n strypt 6 gånger (medianen av 5 varv efter uppvärmning, varje bok)',
      ok: !over.length, detalj: over.map(b => `${b.bok} median ${b.median} ms (max ${b.max})`).join(', ') });
    if (BILDER) { await c.ev(`${oppnaren}.click()`); await vanta(500); await bild(c, dk, lage, 'bok'); }
    }
    res.fel = (await c.ev('window.__fel')).concat(c.undantag.map(u => 'undantag: ' + u));
    res.fel = [...new Set(res.fel)];
  } catch (e) {
    res.fel.push('grinden: ' + e.message);
  } finally { await c.stang(); }
  const riktiga = res.kontroller.filter(x => !x.hoppat), nav = riktiga.filter(x => x.ok).length;
  res.hoppat = res.kontroller.filter(x => x.hoppat);
  res.navigering = `${nav}/${riktiga.length}`;
  res.plats = res.kontroll && res.kontroll.gron === true;
  res.gron = riktiga.length > 0 && nav === riktiga.length && res.plats && res.fel.length === 0;
  return res;
}

async function bild(c, dk, lage, vad) {
  fs.mkdirSync(BILDMAPP, { recursive: true });
  const sh = await c.send('Page.captureScreenshot', { format: 'png' });
  const fil = path.join(BILDMAPP, `${path.basename(dk.mapp)}_${lage.namn.replace(/[^0-9a-zåäö]+/gi, '-')}_${vad}.png`);
  fs.writeFileSync(fil, Buffer.from(sh.result.data, 'base64'));
  console.log('   bild:', fil);
}

/* ---------- Startsidan och kapitelindexen: vägen mellan sidorna ----------
 * Startsidan (index.html) → varje byggt kapitels kapitelindex → avsnittssidorna → brödsmulorna tillbaka. Ett tonat
 * kort (kapitel, avsnitt eller resurs som inte finns än) är inte en länk och leder ingenstans. KAPITEL: de byggda
 * kapitlen i startsidans ordning (2026-11-07: kapitel I Materia och universum, arbetsorder 9). */
const KAPITEL = [
  { mapp: 'materia_och_universum', nr: 'I', titel: 'Materia och universum', avsnitt: ['solsystemet_och_jorden'],
    alla: 'I II III IV V' },
  // kapitel 2 Ljud och ljus (arbetsorder 33): avsnitt I byggt, II och III (ljuset) tonade
  { mapp: 'ljud_och_ljus', nr: 'II', titel: 'Ljud och ljus', avsnitt: ['vad_ljud_ar', 'ljud_omkring_oss'], alla: 'I II III' },
  { mapp: 'kraft_och_rorelse', nr: 'III', titel: 'Kraft och rörelse', avsnitt: ['atomen_repetition', 'materia_repetition', 'rorelse_och_kraft', 'fall_kast_och_balans', 'tryck_arbete_och_maskiner', 'ljud_och_ljus_repetition'],
    alla: 'I II III IV V VI' }
];
const STARTSIDANS_KAPITEL = 'I Materia och universum · II Ljud och ljus · III Kraft och rörelse';
// Nästa steg på startsidan (arbetsorder 11): listan (ett kapitel per post) och Matematiken i fysiken, i den ordningen
const NASTA_STEG = [
  { nr: 'III', titel: 'Kraft och rörelse', href: 'rorelse_och_kraft/index.html#nasta-kraft-och-rorelse', sida: 'kraft_och_rorelse/rorelse_och_kraft/index.html', bok: 'nasta-kraft-och-rorelse' },
  { nr: null, titel: 'Matematiken i fysiken', href: 'matematiken_i_fysiken/index.html#stod-matematiken', sida: 'nasta_steg/matematiken_i_fysiken/index.html', bok: 'stod-matematiken' }
];
const ROMERSKA = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

async function provaSidorna(lage) {
  const c = await chrome();
  const k = [], fel = [];
  const prova = (namn, ok, detalj) => k.push({ namn, ok: !!ok, detalj: detalj == null ? '' : String(detalj) });
  const start = adressTill(path.join(ROT, 'index.html'));
  try {
    await c.send('Page.enable'); await c.send('Runtime.enable');
    await c.send('Emulation.setDeviceMetricsOverride', { width: lage.B, height: lage.H, deviceScaleFactor: 1, mobile: !!lage.mobil });
    await c.send('Page.addScriptToEvaluateOnNewDocument', { source: FANGA_FEL });
    const har = async () => decodeURI(await c.ev('location.href.split("#")[0]'));
    const samlaFel = async () => fel.push(...await c.ev('window.__fel || []'));
    const ga = async url => { await c.send('Page.navigate', { url }); await vanta(700); };
    const klicka = async (sel, vant = 900) => { await samlaFel(); await c.ev(`document.querySelector(${JSON.stringify(sel)}).click()`); await vanta(vant); };
    const kort = sel => c.ev(`[...document.querySelectorAll(${JSON.stringify(sel)})].map(e => ({ tag: e.tagName, dimmad: e.classList.contains('dimmad'),
      av: e.getAttribute('aria-disabled'), href: e.href || null, kommer: !!e.querySelector('.kommer-snart') || /Kommer/.test(e.textContent),
      titel: (e.querySelector('.kap-titel, h3, h4') || {}).textContent, nr: (e.querySelector('.romersk') || {}).textContent }))`);
    const bred = async namn => prova(`${namn}: inte bredare än skärmen`, await c.ev('document.documentElement.scrollWidth <= innerWidth'));
    const tonadeLederIngenstans = async (namn, sel) => {
      const fore = await har();
      const n = await c.ev(`[...document.querySelectorAll(${JSON.stringify(sel)})].map(e => { e.click(); return 1; }).length`);
      await vanta(400);
      prova(`${namn}: de ${n} tonade korten går inte att klicka sig vidare från`, n > 0 && await har() === fore);
    };

    // Startsidan: de byggda kapitlen är länkar till sina kapitelindex, de andra tonade
    await ga(start);
    const kap = await kort('ul.innehallsforteckning > li > .kapitel-kort');
    prova('startsida: kapitlen ' + STARTSIDANS_KAPITEL, kap.map(x => x.nr + ' ' + x.titel).join(' · ') === STARTSIDANS_KAPITEL, kap.map(x => x.nr + ' ' + x.titel).join(' · '));
    const byggda = KAPITEL.map(K => K.nr), tonade = kap.filter(x => !byggda.includes(x.nr));
    // (arbetsorder 33) med kapitel 2 är alla tre kapitlen byggda: då ska inget kapitel vara tonat
    prova(tonade.length ? `startsida: ${tonade.map(x => x.nr).join(' och ')} tonade, aria-disabled, "Kommer" och inga länkar` : 'startsida: alla kapitlen är byggda, inget är tonat',
      tonade.every(x => x.tag === 'SPAN' && x.dimmad && x.av === 'true' && x.kommer && !x.href) && kap.length === KAPITEL.length + tonade.length);
    for (const K of KAPITEL) {
      const x = kap.find(y => y.nr === K.nr), mal = new URL(K.mapp + '/index.html', start).href;
      prova(`startsida: ${K.nr} länkar till kapitelindexet`, x && x.tag === 'A' && x.href === mal && !x.kommer, x && x.href);
    }
    const ov = await kort('.sektion-avgransare:not(.nasta-steg-omrade) .kapitel-kort');
    prova('startsida: Översikt – Huvudelevbok och Självskattning, tonade "Kommer"',
      ov.map(x => x.titel).join(', ') === 'Huvudelevbok, Självskattning' && ov.every(x => x.tag === 'SPAN' && x.dimmad && x.av === 'true' && x.kommer));
    await bred('startsida');
    await tonadeLederIngenstans('startsida', '.kapitel-kort.dimmad');

    // Nästa steg (arbetsorder 11): listan över kapitlen med Nästa steg och, bredvid den, Matematiken i fysiken. Varje
    // länk öppnar sin bok direkt (adressen #<bok>); Stäng leder till sidan med boken och brödsmulan Fysik till startsidan.
    const ns = await kort('.nasta-steg-omrade .kapitel-kort');
    prova('startsida: Nästa steg – listan (' + NASTA_STEG.filter(x => x.nr).map(x => x.nr + ' ' + x.titel).join(', ') + ') och Matematiken i fysiken bredvid, länkar',
      ns.map(x => (x.nr ? x.nr + ' ' : '') + x.titel).join(' · ') === NASTA_STEG.map(x => (x.nr ? x.nr + ' ' : '') + x.titel).join(' · ') && ns.every(x => x.tag === 'A' && !x.kommer),
      ns.map(x => (x.nr ? x.nr + ' ' : '') + x.titel + ' → ' + x.href).join(' | '));
    if (!lage.mobil) prova('startsida: Matematiken i fysiken står bredvid listan Nästa steg (dator)', await c.ev(`(() => {
      const l = document.querySelector('.nasta-steg-lista').getBoundingClientRect(), m = document.querySelector('.matematik-kort').getBoundingClientRect();
      return m.left >= l.right - 1 && Math.abs(m.top - l.top) < 2; })()`));
    for (const N of NASTA_STEG) {
      await ga(start);
      await klicka(`.nasta-steg-omrade a.kapitel-kort[href$="${N.href}"]`, 2500);
      const r = await c.ev(`({ sida: location.href.split('#')[0], oppen: !!(window.Bok && Bok.oppen), hash: location.hash,
        titel: (document.querySelector('.scen .boktitel') || document.querySelector('.scen .omslag-under') || {}).textContent || '' })`);
      prova(`startsida → ${N.titel}: boken öppnas direkt`, decodeURI(r.sida) === new URL(N.sida, start).href && r.oppen && r.hash.startsWith('#' + N.bok + '/'), JSON.stringify(r));
      await c.ev(`[...document.querySelectorAll('.bok-stang')].find(e => e.offsetParent).click()`); await vanta(600);
      const efter = await c.ev(`({ oppen: Bok.oppen, sida: location.href.split('#')[0] })`);
      await klicka('.hero-banner .brodsmulor a');
      prova(`${N.titel}: Stäng leder till sidan med boken, och brödsmulan Fysik till startsidan`, !efter.oppen && decodeURI(efter.sida) === new URL(N.sida, start).href && await har() === start, JSON.stringify(efter));
    }

    for (const K of KAPITEL) {
      const kapitel = new URL(K.mapp + '/index.html', start).href, alla = K.alla.split(' '), n = K.avsnitt.length;
      const avsnitt = K.avsnitt.map(d => new URL(`${K.mapp}/${d}/index.html`, start).href);
      // Kapitelindexet
      await ga(start);
      await klicka(`a.kapitel-kort[href$="${K.mapp}/index.html"]`);
      prova(`startsida → kapitelindexet ${K.titel}`, await har() === kapitel, await har());
      const smula = await c.ev(`[...document.querySelectorAll('.brodsmulor > *')].map(e => e.tagName + ':' + e.textContent.trim() + (e.href ? '→' + e.href : '')).join(' | ')`);
      prova(`kapitelindex ${K.nr}: brödsmulan Fysik (länk) › ${K.titel}, etiketten Kapitel ${K.nr}`,
        smula === `A:Fysik→${start} | SPAN:› | SPAN:${K.titel}` && await c.ev(`document.querySelector('.hero-banner .avsnitt-label').textContent === 'Kapitel ${K.nr}'`), smula);
      const av = await kort('ul.innehallsforteckning > li > .kapitel-kort');
      prova(`kapitelindex ${K.nr}: avsnittssidorna ${alla[0]}–${alla[alla.length - 1]}`, av.map(x => x.nr).join(' ') === K.alla, av.map(x => x.nr + ' ' + x.titel).join(' · '));
      prova(`kapitelindex ${K.nr}: ${ROMERSKA[0]}–${ROMERSKA[n - 1]} länkar till avsnittssidorna`,
        avsnitt.every((u, i) => av[i] && av[i].tag === 'A' && av[i].href === u && !av[i].kommer), av.slice(0, n).map(x => x.href).join(' | '));
      if (n < alla.length) prova(`kapitelindex ${K.nr}: ${alla[n]}–${alla[alla.length - 1]} tonade, aria-disabled, "Kommer" och inga länkar`,
        av.slice(n).length === alla.length - n && av.slice(n).every(x => x.tag === 'SPAN' && x.dimmad && x.av === 'true' && x.kommer && !x.href));
      const res = await kort('.resurser-rad .resurs-kort');
      prova(`kapitelindex ${K.nr}: resurserna Begreppsbank och Självskattning, tonade "Kommer"`,
        res.map(x => x.titel).join(', ') === 'Begreppsbank, Självskattning' && res.every(x => x.tag === 'SPAN' && x.dimmad && x.av === 'true' && x.kommer));
      await bred(`kapitelindex ${K.nr}`);
      await tonadeLederIngenstans(`kapitelindex ${K.nr}`, '.kapitel-kort.dimmad, .resurs-kort.dimmad');

      // Avsnittssidorna och brödsmulorna tillbaka
      for (const [i, mal] of avsnitt.entries()) {
        await klicka(`a.kapitel-kort[href$="${K.avsnitt[i]}/index.html"]`, 1200);
        prova(`kapitelindex ${K.nr} → avsnittssida ${ROMERSKA[i]}`, await har() === mal, await har());
        const s = await c.ev(`[...document.querySelectorAll('.hero-banner .brodsmulor a')].map(a => a.textContent + '→' + a.href).join(' | ')`);
        prova(`avsnittssida ${K.nr}.${ROMERSKA[i]}: brödsmulorna Fysik och ${K.titel} är länkar dit`, s === `Fysik→${start} | ${K.titel}→${kapitel}`, s);
        await klicka('.hero-banner .brodsmulor a:last-of-type');
        prova(`avsnittssida ${K.nr}.${ROMERSKA[i]} → brödsmulan ${K.titel} → kapitelindexet`, await har() === kapitel, await har());
      }
      await klicka('.hero-banner .brodsmulor a');
      prova(`kapitelindex ${K.nr} → brödsmulan Fysik → startsidan`, await har() === start, await har());
      await ga(avsnitt[0]); await vanta(500);
      await klicka('.hero-banner .brodsmulor a');
      prova(`avsnittssida ${K.nr}.I → brödsmulan Fysik → startsidan`, await har() === start, await har());
    }
    await samlaFel();
  } catch (e) {
    fel.push('grinden: ' + e.message);
  } finally { await c.stang(); }
  const ok = k.filter(x => x.ok).length;
  return { kontroller: k, fel: [...new Set(fel.concat(c.undantag.map(u => 'undantag: ' + u)))], navigering: `${ok}/${k.length}`, gron: k.length > 0 && ok === k.length && !fel.length && !c.undantag.length };
}

/* ---------- Elevboken: plattformens elevbok i fliken och inifrån boken (2026-11-05) ----------
 * Plattformens elevbok (plattform/, ur Geografibok) hämtar sina frågor med fetch (data/fragor.json), och det går inte
 * från file:// – därför serveras Fysik/ här över http (127.0.0.1); med --webb prövas Pages. Prövas för varje
 * delkapitel vars hjalpmedel.elevbok är en sida i mappen med en data/fragor.json:
 *  - sidan inbäddad: frågorna ritas, numrerade 1–n i datafilens ordning, med frågans text; hjälpraderna (hjalp) under
 *    frågan i vanlig stil, bara frågan i fetstil; underfrågorna (underfragor) som a, b, c … utan eget nummer, med en
 *    ruta var och ingen ruta för huvudfrågan (2026-11-06); ingen banner;
 *  - ett svar i en underfrågas ruta sparas under fysikens prefix (fys-elev-), inget under geografins (geo-elev-), och
 *    finns kvar efter omladdning; exporten (Spara mitt arbete) innehåller bara fys-elev-nycklar, med underfrågans svar,
 *    fast geografin har data på samma ursprung; ett svar som sparats under huvudfrågan innan den fick underfrågor står
 *    kvar under dem, märkt "Ditt tidigare svar";
 *  - fliken Elevboken på avsnittssidan visar sidan inbäddad, med svaret;
 *  - länken i Sammanfattningen öppnar elevboken ovanpå boken, och Esc leder tillbaka till samma sida.
 * Negativt prov (--negativ): ?prova=prefix låter sidan använda plattformens standardprefix – provet ska bli rött. */
const ELEV_PREFIX = 'fys-elev-';
const TYPER = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.ttf': 'font/ttf', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' };
let httpBas = null;
async function httpAdress() {
  if (WEBB) return BAS;
  if (httpBas) return httpBas;
  const server = http.createServer((q, r) => {
    const fil = path.join(ROT, decodeURIComponent(new URL(q.url, 'http://x').pathname));
    if (!fil.startsWith(ROT) || !fs.existsSync(fil) || fs.statSync(fil).isDirectory()) { r.writeHead(404); return r.end(); }
    r.writeHead(200, { 'Content-Type': TYPER[path.extname(fil).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(fil).pipe(r);
  });
  await new Promise(ok => server.listen(0, '127.0.0.1', ok));
  server.unref();
  return (httpBas = `http://127.0.0.1:${server.address().port}/`);
}
// hjalpmedel.elevbok i delkapitel.js: en sida i delkapitlets mapp, med data/fragor.json bredvid – annars null
function elevbokSida(dk) {
  const m = /elevbok:\s*\{\s*href:\s*'([^']+)'/.exec(fs.readFileSync(path.join(dk.mapp, 'delkapitel.js'), 'utf8'));
  if (!m || /^[a-z]+:|^\//i.test(m[1])) return null;
  const fil = path.join(dk.mapp, m[1].split(/[?#]/)[0]);
  return fs.existsSync(fil) && fs.existsSync(path.join(path.dirname(fil), 'data', 'fragor.json')) ? m[1] : null;
}

async function provaElevboken(dk, lage, prova = '') {
  const c = await chrome(), k = [], fel = [];
  const provaK = (namn, ok, detalj) => k.push({ namn, ok: !!ok, detalj: detalj == null ? '' : String(detalj) });
  try {
    await c.send('Page.enable'); await c.send('Runtime.enable');
    await c.send('Emulation.setDeviceMetricsOverride', { width: lage.B, height: lage.H, deviceScaleFactor: 1, mobile: !!lage.mobil });
    if (lage.mobil) await c.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 1 });
    await c.send('Page.addScriptToEvaluateOnNewDocument', { source: FANGA_FEL });
    const mapp = (await httpAdress()) + path.relative(ROT, dk.mapp).split(path.sep).join('/') + '/';
    const sida = elevbokSida(dk), fragor = JSON.parse(fs.readFileSync(path.join(dk.mapp, 'data', 'fragor.json'), 'utf8'));
    const alla = fragor.avsnitt.flatMap(x => x.fragor), antal = alla.length;
    // svaret prövas i den första underfrågans ruta (finns ingen: den första frågans)
    const medUnder = alla.find(f => f.underfragor && f.underfragor.length), malId = medUnder ? medUnder.underfragor[0].id : alla[0].id;
    const ga = async url => { await c.send('Page.navigate', { url }); for (let i = 0; i < 60; i++) { await vanta(150);
      if (await c.ev(`document.querySelectorAll('.elevbok-fraga-block').length > 0 || !!(document.body && document.body.dataset.klar)`).catch(() => false)) break; } await vanta(300); };
    // frågorna i ett dokument (sidan själv eller en inbäddad ram): per fråga numret, textens rader, hjälpraderna och
    // deras stil, underfrågornas bokstäver och rutornas fråge-id
    const LAS = `d => { const bl = [...d.querySelectorAll('.elevbok-fraga-block')], t = [...d.querySelectorAll('.elevbok-fraga-titel')];
      const b = d.querySelector('.hero-banner'), ta = d.querySelector('.elevbok-textarea[data-fraga-id="${malId}"]');
      return { antal: t.length, nr: t.map(e => e.textContent.split('.')[0]).join(','), banner: !!b && getComputedStyle(b).display !== 'none' && b.getBoundingClientRect().height > 0,
        fragor: bl.map(x => { const ti = x.querySelector('.elevbok-fraga-titel'), hj = [...x.querySelectorAll('.elevbok-fraga-hjalp p')];
          return { id: x.dataset.fragaId, text: ti.textContent.replace(/^\\d+\\. /, ''), rader: ti.innerText.split('\\n').length, vikt: +getComputedStyle(ti).fontWeight,
            hjalp: hj.map(p => p.textContent), hjalpStil: hj.map(p => { const s = getComputedStyle(p); return +s.fontWeight + ' ' + s.fontStyle; }),
            under: [...x.querySelectorAll('.elevbok-underfraga:not(.elevbok-tidigare-svar)')].map(u => ({ id: u.dataset.fragaId,
              titel: u.querySelector('.elevbok-underfraga-titel').textContent, rutor: [...u.querySelectorAll('.elevbok-textarea')].map(r => r.dataset.fragaId) })),
            rutor: [...x.querySelectorAll('.elevbok-textarea')].map(r => r.dataset.fragaId),
            tidigare: [...x.querySelectorAll('.elevbok-tidigare-svar')].map(u => ({ titel: u.querySelector('.elevbok-underfraga-titel').textContent,
              id: (u.querySelector('.elevbok-textarea') || {}).dataset.fragaId, svar: (u.querySelector('.elevbok-textarea') || {}).value })) }; }),
        svar: ta ? ta.value : '' }; }`;

    // 1. Sidan inbäddad: numren, frågans text, hjälpraderna i vanlig stil, underfrågorna med en ruta var
    await ga(mapp + sida + '?embed=1' + prova);
    const a = await c.ev(`(${LAS})(document)`);
    const nr = Array.from({ length: antal }, (_, i) => i + 1).join(',');
    provaK(`elevboken: ${antal} frågor ritas, numrerade 1–${antal} (underfrågorna utan eget nummer), frågans text som i datafilen`,
      a.antal === antal && a.nr === nr && a.fragor.every((x, i) => x.id === alla[i].id && x.text === alla[i].fraga && x.rader === alla[i].fraga.split('\n').length),
      `${a.antal} frågor, nr ${a.nr}` + a.fragor.filter((x, i) => !alla[i] || x.text !== alla[i].fraga).map(x => ` | ${x.id}: ${JSON.stringify(x.text).slice(0, 60)}`).join(''));
    provaK('elevboken: hjälpraderna ("Använd begreppen", "Läs i") under frågan i vanlig stil – bara frågan i fetstil',
      a.fragor.every((x, i) => JSON.stringify(x.hjalp) === JSON.stringify(alla[i].hjalp || []) && x.vikt >= 600 && x.hjalpStil.every(s => s === '400 normal')),
      a.fragor.map(x => `${x.id}: ${x.hjalp.length} rader ${[...new Set(x.hjalpStil)].join('/')}, frågan ${x.vikt}`).join(' · '));
    provaK('elevboken: underfrågorna a, b, c … med var sin ruta (deras id), huvudfrågan utan egen ruta; en fråga utan underfrågor har en ruta',
      a.fragor.every((x, i) => { const u = alla[i].underfragor || [];
        return u.length ? x.under.length === u.length && x.under.every((y, j) => y.id === u[j].id && y.titel === u[j].bokstav + '. ' + u[j].fraga && y.rutor.join() === u[j].id)
          && x.rutor.join() === u.map(y => y.id).join() : !x.under.length && x.rutor.join() === alla[i].id; }),
      a.fragor.map(x => `${x.id}: ${x.under.length ? x.under.map(y => y.titel.split('.')[0]).join('') : '–'} (${x.rutor.length} ${x.rutor.length === 1 ? 'ruta' : 'rutor'})`).join(' · '));
    provaK('elevboken: inbäddad (?embed=1) syns varken banner eller brödsmulor', !a.banner);
    const text = 'Grindens provsvar ' + Date.now();
    const spar = await c.ev(`(async () => { const ta = document.querySelector('.elevbok-textarea[data-fraga-id="${malId}"]'); ta.value = ${JSON.stringify(text)};
      ta.dispatchEvent(new Event('input', { bubbles: true })); await new Promise(r => setTimeout(r, 2600));
      const nycklar = Object.keys(localStorage), egen = nycklar.find(n => n === '${ELEV_PREFIX}svar-' + DELKAPITEL_ID);
      let svar = null; try { svar = JSON.parse(localStorage.getItem(egen))['${malId}']; } catch (e) {}
      return { nycklar, egen, svar, dk: DELKAPITEL_ID }; })()`);
    provaK(`elevboken: ett svar i en underfrågas ruta (${malId}) sparas under ${ELEV_PREFIX}svar-…, inget under geo-elev-`,
      spar.svar === text && !spar.nycklar.some(n => n.startsWith('geo-elev-')), spar.nycklar.join(', '));
    await ga(mapp + sida + '?embed=1' + prova);
    const b = await c.ev(`(${LAS})(document)`);
    provaK('elevboken: svaret finns kvar efter omladdning', b.svar === text, b.svar.slice(0, 40));
    // Ett svar som sparades under en huvudfråga innan den fick underfrågor står kvar under dem, märkt "Ditt tidigare svar"
    if (medUnder) {
      const gammalt = 'Grindens tidigare svar ' + Date.now();
      await c.ev(`(() => { const n = '${ELEV_PREFIX}svar-' + DELKAPITEL_ID, o = JSON.parse(localStorage.getItem(n) || '{}');
        o['${medUnder.id}'] = ${JSON.stringify(gammalt)}; localStorage.setItem(n, JSON.stringify(o)); })()`);
      await ga(mapp + sida + '?embed=1' + prova);
      const g = await c.ev(`(${LAS})(document)`), gf = g.fragor.find(x => x.id === medUnder.id) || { tidigare: [] };
      const ovriga = g.fragor.filter(x => x.id !== medUnder.id).every(x => !x.tidigare.length);
      provaK(`elevboken: ett tidigare svar under huvudfrågan (${medUnder.id}) står kvar under underfrågorna, märkt "Ditt tidigare svar"`,
        gf.tidigare.length === 1 && gf.tidigare[0].titel === 'Ditt tidigare svar' && gf.tidigare[0].id === medUnder.id && gf.tidigare[0].svar === gammalt && ovriga,
        JSON.stringify(gf.tidigare));
      await c.ev(`(() => { const n = '${ELEV_PREFIX}svar-' + DELKAPITEL_ID, o = JSON.parse(localStorage.getItem(n) || '{}');
        delete o['${medUnder.id}']; localStorage.setItem(n, JSON.stringify(o)); })()`);
      await ga(mapp + sida + '?embed=1' + prova);
    }
    // geografin har data på samma ursprung (jb873.github.io): den ska inte komma med i fysikens export
    const exp = await c.ev(`(async () => {
      localStorage.setItem('geo-elev-svar-geologi', JSON.stringify({ q_prov: 'geografins svar' }));
      let blob = null; const orig = URL.createObjectURL; URL.createObjectURL = x => { blob = x; return orig.call(URL, x); };
      const knapp = [...document.querySelectorAll('.elevdata-knapp')][0]; if (!knapp) return null;
      HTMLAnchorElement.prototype.click = function () {};          // ingen nedladdning i provet
      knapp.click(); await new Promise(r => setTimeout(r, 200)); URL.createObjectURL = orig;
      if (!blob) return null; const p = JSON.parse(await blob.text()), s = p.data['${ELEV_PREFIX}svar-' + DELKAPITEL_ID];
      let under = null; try { under = JSON.parse(s)['${malId}']; } catch (e) {}
      return { nycklar: Object.keys(p.data), under }; })()`);
    provaK(`elevboken: exporten (Spara mitt arbete) innehåller bara ${ELEV_PREFIX}nycklar, med underfrågans svar`,
      exp && exp.nycklar.length && exp.nycklar.every(n => n.startsWith(ELEV_PREFIX)) && exp.nycklar.includes(ELEV_PREFIX + 'svar-' + spar.dk) && exp.under === text,
      exp ? exp.nycklar.join(', ') + `; ${malId}: ${exp.under === text ? 'med' : 'SAKNAS'}` : 'ingen export');

    // 2. Fliken Elevboken på avsnittssidan
    await ga(mapp + 'index.html');
    const f = await c.ev(`(async () => {
      const v = ms => new Promise(r => setTimeout(r, ms)), flik = document.querySelector('.flik[data-flik="elevboken"]');
      if (!flik || flik.getAttribute('aria-disabled') === 'true') return { flik: false };
      flik.click(); let ram = null, d = null;
      for (let i = 0; i < 60; i++) { await v(150); ram = document.querySelector('section.flik-innehall[data-flik="elevboken"]:not(.dold) iframe.flik-ram');
        d = ram && ram.contentDocument; if (d && d.querySelectorAll('.elevbok-fraga-titel').length) break; }
      await v(300);
      return { flik: true, src: ram && ram.getAttribute('src'), las: d ? (${LAS})(d) : null };
    })()`);
    provaK('elevboken: fliken Elevboken visar elevboken inbäddad (embed=1), utan banner, med svaret', f.flik && f.src === sida + '?embed=1' &&
      f.las && f.las.antal === antal && !f.las.banner && f.las.svar === text, f.flik ? `${f.src}, ${f.las && f.las.antal} frågor, banner ${f.las && f.las.banner}` : 'fliken är "kommer"');

    // 3. Länken inifrån boken (Sammanfattningen) och tillbaka till samma sida
    const l = await c.ev(`(async () => {
      const v = ms => new Promise(r => setTimeout(r, ms)), $ = s => document.querySelector(s);
      const syns = () => [...document.querySelectorAll('.scen .uppslag > .sida[data-nr]')].map(s => s.dataset.nr).join('-');
      document.querySelector('.flik[data-flik="laes"]').click(); await v(100);
      document.querySelector('.underdel-knapp.aktiv').click(); await v(900);
      const n = document.querySelectorAll('.lr-sida').length; let lank = null;
      for (let s = n; s >= 1 && !lank; s--) { Bok.gaTill(s); await v(120);
        lank = [...document.querySelectorAll('.scen .b-lank a.lank-post')].find(a => a.textContent.trim().startsWith('Elevbok') && !a.classList.contains('kommer')); }
      if (!lank) return { lank: false };
      const fore = syns(); lank.click();
      let ram = null, d = null;
      for (let i = 0; i < 60; i++) { await v(150); ram = $('.hm-panel:not([hidden]) iframe'); d = ram && ram.contentDocument;
        if (d && d.querySelectorAll('.elevbok-fraga-titel').length) break; }
      const las = d ? (${LAS})(d) : null, src = ram && ram.getAttribute('src');
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); await v(500);
      return { lank: true, fore, src, las, stangd: $('.hm-panel').hidden, oppen: !$('.bokapp').hidden, efter: syns() };
    })()`);
    provaK('elevboken: länken i Sammanfattningen öppnar elevboken ovanpå boken (embed=1), Esc leder tillbaka till samma sida',
      l.lank && l.src === sida + '?embed=1' && l.las && l.las.antal === antal && !l.las.banner && l.stangd && l.oppen && l.efter === l.fore,
      l.lank ? `${l.src}, ${l.las && l.las.antal} frågor, sida ${l.fore} → ${l.efter}, panelen stängd ${l.stangd}` : 'ingen länk till Elevbok i boken');
    await c.ev(`(async () => { const s = [...document.querySelectorAll('.bok-stang')].find(e => e.offsetParent); if (s) s.click(); })()`);
    const ramFel = await c.ev(`[...document.querySelectorAll('iframe')].flatMap(r => { try { return r.contentWindow.__fel || []; } catch (e) { return []; } })`);
    fel.push(...(await c.ev('window.__fel')), ...ramFel);
  } catch (e) {
    fel.push('grinden: ' + e.message);
  } finally { await c.stang(); }
  const ok = k.filter(x => x.ok).length;
  return { kontroller: k, fel: [...new Set(fel.concat(c.undantag.map(u => 'undantag: ' + u)))], navigering: `${ok}/${k.length}`, gron: k.length > 0 && ok === k.length && !fel.length && !c.undantag.length };
}

/* Geografins frågor ritas som förut (2026-11-06): plattformens ritning fick valfria fält (hjalp, underfragor), och
 * utan dem ska allt ritas exakt som i geografin. verktyg/elevbok-geografi/ har en ordagrann kopia av geografins
 * fragor.json (demografi, cd9251d), ett avsnitt per ruta: varje fråga med sitt nummer (grund- och fördjupningsfrågor
 * för sig) och sin text, EN ruta med frågans id, inga hjälprader eller underfrågor, separatorn före fördjupningen,
 * bilderna, och plattformens standardprefix (geo-elev-). */
const GEO_ELEVBOK = path.join(__dirname, 'elevbok-geografi');
async function provaGeografinsElevbok(lage) {
  const c = await chrome(), k = [], fel = [];
  try {
    await c.send('Page.enable'); await c.send('Runtime.enable');
    await c.send('Emulation.setDeviceMetricsOverride', { width: lage.B, height: lage.H, deviceScaleFactor: 1, mobile: !!lage.mobil });
    await c.send('Page.addScriptToEvaluateOnNewDocument', { source: FANGA_FEL });
    const data = JSON.parse(fs.readFileSync(path.join(GEO_ELEVBOK, 'data', 'fragor.json'), 'utf8'));
    // väntat ur datafilen, med geografins numrering (grund 1…, fördjupning 1…, per avsnitt)
    const vantat = data.avsnitt.map(a => { let g = 0, f = 0; return { id: a.id, fordj: a.fragor.some(x => x.typ === 'fordjupning'),
      fragor: a.fragor.map(x => ({ id: x.id, titel: (x.typ === 'fordjupning' ? ++f : ++g) + '. ' + x.fraga, bilder: (x.bilder || []).length })) }; });
    await c.send('Page.navigate', { url: (await httpAdress()) + 'verktyg/elevbok-geografi/elevbok.html' });
    for (let i = 0; i < 60; i++) { await vanta(150); if (await c.ev(`document.querySelectorAll('.elevbok-fraga-block').length > 0`).catch(() => false)) break; }
    await vanta(300);
    const r = await c.ev(`[...document.querySelectorAll('.underdel')].map(u => ({ id: u.dataset.underdelId,
      sep: !!u.querySelector('.fordjupning-separator'), egna: !!u.querySelector('.egna-fragor-host'),
      nytt: u.querySelectorAll('.elevbok-fraga-hjalp, .elevbok-underfraga').length,
      fragor: [...u.querySelectorAll('.elevbok-fraga-block')].map(b => ({ id: b.dataset.fragaId, titel: b.querySelector('.elevbok-fraga-titel').textContent,
        rutor: [...b.querySelectorAll('.elevbok-textarea')].map(t => t.dataset.fragaId), bilder: b.querySelectorAll('.fraga-bild').length,
        barn: [...b.children].map(e => e.className).join(' > ') })) })).concat([{ prefix: (window.ELEVBOK_PREFIX || 'geo-elev-') }])`);
    const prefix = r.pop().prefix, felAvsnitt = [];
    vantat.forEach((v, i) => { const u = r[i] || { fragor: [] };
      const ok = u.id === v.id && u.sep === v.fordj && u.egna && !u.nytt && u.fragor.length === v.fragor.length && u.fragor.every((b, j) => { const w = v.fragor[j];
        return b.id === w.id && b.titel === w.titel && b.rutor.join() === w.id && b.bilder === w.bilder &&
          b.barn === ['elevbok-fraga-titel', ...(w.bilder ? ['fraga-bilder'] : []), 'elevbok-textarea-wrapper', 'sparstatus'].join(' > '); });
      if (!ok) felAvsnitt.push(`${v.id}: ${JSON.stringify(u).slice(0, 300)}`); });
    const antal = vantat.reduce((s, v) => s + v.fragor.length, 0);
    k.push({ namn: `elevboken: geografins frågor (kopia av demografi, ${data.avsnitt.length} avsnitt, ${antal} frågor) ritas som förut – nummer, text, en ruta per fråga, inga hjälprader eller underfrågor, fördjupningen och bilderna`,
      ok: !felAvsnitt.length && prefix === 'geo-elev-', detalj: felAvsnitt.join(' | ') || `prefix ${prefix}` });
    fel.push(...(await c.ev('window.__fel')));
  } catch (e) {
    fel.push('grinden: ' + e.message);
  } finally { await c.stang(); }
  const ok = k.filter(x => x.ok).length;
  return { kontroller: k, fel: [...new Set(fel.concat(c.undantag.map(u => 'undantag: ' + u)))], navigering: `${ok}/${k.length}`, gron: k.length > 0 && ok === k.length && !fel.length && !c.undantag.length };
}

/* ---------- Webben: visar den samma filer som disken? ----------
 * Annars prövar --webb en annan version än den på disken (Pages har inte byggt klart, eller något är inte pushat). */

async function jamforWebben(lista) {
  const filer = [path.join(ROT, 'index.html'), ...KAPITEL.map(K => path.join(ROT, K.mapp, 'index.html'))];
  const samla = mapp => fs.readdirSync(mapp, { withFileTypes: true }).forEach(f =>
    f.isDirectory() ? samla(path.join(mapp, f.name)) : filer.push(path.join(mapp, f.name)));
  [path.join(ROT, 'bokskal'), path.join(ROT, 'plattform'), ...lista.map(d => d.mapp)].filter(m => fs.existsSync(m)).forEach(samla);
  // och kapitlens kapitel.js (kapitel: '…' i delkapitel.js), som ligger utanför delkapitlens mappar
  lista.forEach(d => { const m = /^\s*kapitel:\s*'([^']+)'/m.exec(fs.readFileSync(path.join(d.mapp, 'delkapitel.js'), 'utf8'));
    const fil = m && path.resolve(d.mapp, m[1]); if (fil && !filer.includes(fil)) filer.push(fil); });
  const lf = b => Buffer.from(b.toString('latin1').replace(/\r\n/g, '\n'), 'latin1');
  const avvikande = [];
  for (const fil of filer) {
    const svar = await fetch(adressTill(fil)).catch(e => ({ ok: false, status: e.message }));
    const lika = svar.ok && Buffer.compare(lf(Buffer.from(await svar.arrayBuffer())), lf(fs.readFileSync(fil))) === 0;
    if (!lika) avvikande.push(path.relative(ROT, fil) + (svar.ok ? ' (annat innehåll)' : ` (${svar.status})`));
  }
  return { antal: filer.length, avvikande };
}

/* ---------- Huvudprogrammet ---------- */

(async () => {
  const lista = delkapitel();
  const mall = fs.readFileSync(MALL);
  let gront = true;
  const hoppade = [];              // prov som hoppades över (inget fönsterläge, arbetsorder 36)
  const omkorningar = [];          // bladvändningens tidsprov som kördes om (rött i första körningen)
  console.log(`Bokmotorn: ${lista.length} delkapitel (${lista.map(d => d.namn).join(', ')})`);
  console.log(`Prövar: ${WEBB ? 'den publicerade boken, ' + BAS : 'filerna på disken'}\n`);
  // På batteri (2026-11-07, Joachims beslut): varna – tiderna är opålitliga och headless Chrome kan stängas
  if (batteri()) console.log('VARNING: datorn går på batteri – bladvändningens tidsprov mäts inte, brytningens tider är opålitliga, och Chrome kan stängas (då körs läget om en gång). Sätt i laddaren för en grind som räknas.\n');

  if (WEBB) {
    const j = await jamforWebben(lista);
    gront = gront && !j.avvikande.length;
    console.log(`${j.avvikande.length ? 'RÖTT ' : 'GRÖNT'}  webben visar samma filer som disken: ${j.antal - j.avvikande.length}/${j.antal}`);
    j.avvikande.forEach(f => console.log(`       ✗ ${f}`));
    console.log('');
  }

  // 1. index.html är mallen, ordagrant
  for (const dk of lista) {
    const lika = fs.existsSync(path.join(dk.mapp, 'index.html')) && Buffer.compare(fs.readFileSync(path.join(dk.mapp, 'index.html')), mall) === 0;
    console.log(`${lika ? 'GRÖNT' : 'RÖTT '}  ${dk.namn}: index.html ${lika ? 'är mallen ordagrant' : 'skiljer sig från mall/delkapitel/index.html'}`);
    gront = gront && lika;
  }
  console.log('');

  // 1 b. Strömformatet i V och VI (arbetsorder 30), och texterna ordagrant mot källorna (verktyg/ordagrant.js)
  if (!BARA || STROM_MAPPAR.some(m => m.includes(BARA))) {
    const filer = stromFiler();
    if (!NEGATIV) {
      const fel = stromKoll(filer);
      gront = gront && !fel.length;
      console.log(`${fel.length ? 'RÖTT ' : 'GRÖNT'}  strömformatet i V, VI och kapitel 2: ${filer.length} böcker – begreppen med skiljetecken utanför och grundform vid stor bokstav, figurerna ritas, id:n rätt skrivna, unika och (VI) som i källans huvud`);
      fel.forEach(f => console.log(`       ✗ ${f}`));
      const og = require('child_process').spawnSync(process.execPath, [path.join(__dirname, 'ordagrant.js')], { encoding: 'utf8' });
      const ogFel = og.stdout.split('\n').filter(l => /^FEL|^   /.test(l));
      gront = gront && og.status === 0;
      console.log(`${og.status === 0 ? 'GRÖNT' : 'RÖTT '}  texterna ordagrant mot källorna (verktyg/ordagrant.js): ${og.stdout.split('\n').filter(l => /^ORDAGRANT/.test(l)).length} böcker`);
      ogFel.slice(0, 12).forEach(f => console.log(`       ✗ ${f.trim()}`));
    } else for (const x of STROM_FEL.filter(x => !NEGATIV_BARA || x.namn.includes(NEGATIV_BARA))) {
      const ny = filer.map(y => y.fil === x.fil ? Object.assign({}, y, { kod: y.kod.split(x.fran).join(x.till) }) : y);
      const insatt = filer.some(y => y.fil === x.fil && y.kod.includes(x.fran));
      const fel = insatt ? stromKoll(ny).filter(f => f.startsWith(x.fil) && x.regel.test(f)) : [];
      gront = gront && fel.length > 0;
      console.log(`${fel.length ? 'GRÖNT' : 'RÖTT '}  negativ "${x.namn}": ${!insatt ? 'FELET GICK INTE ATT LÄGGA IN (' + x.fran + ' saknas)' : fel.length ? 'strömformatet blev rött, som det ska' : 'GRÖNT – fångar inte felet'}`);
      fel.slice(0, 2).forEach(f => console.log(`       fångat: ${f}`));
    }
    console.log('');
  }

  if (!NEGATIV) {
    // 2. Startsidan och kapitelindexet: vägen mellan sidorna, på dator och mobil
    for (const lage of [LAGEN[0], LAGEN[3]]) {
      const r = await medOmkorning(() => provaSidorna(lage), 'startsida och kapitelindex, ' + lage.namn);
      gront = gront && r.gron;
      console.log(`${r.gron ? 'GRÖNT' : 'RÖTT '}  startsida och kapitelindex, ${lage.namn}: ${r.navigering}, JS-fel ${r.fel.length}`);
      r.kontroller.filter(x => !x.ok).forEach(x => console.log(`       ✗ ${x.namn}${x.detalj ? ' – ' + x.detalj : ''}`));
      r.fel.forEach(f => console.log(`       JS-fel: ${f}`));
    }
    console.log('');
    // 2 b. Elevboken (plattformens), på dator och mobil, för delkapitel som har den
    const medElevbok = lista.filter(d => !d.prov && elevbokSida(d));
    for (const dk of medElevbok) for (const lage of [LAGEN[0], LAGEN[3]]) {
      const r = await medOmkorning(() => provaElevboken(dk, lage), 'elevboken ' + dk.namn + ', ' + lage.namn);
      gront = gront && r.gron;
      console.log(`${r.gron ? 'GRÖNT' : 'RÖTT '}  elevboken ${dk.namn}, ${lage.namn}: ${r.navigering}, JS-fel ${r.fel.length}`);
      r.kontroller.filter(x => !x.ok).forEach(x => console.log(`       ✗ ${x.namn}${x.detalj ? ' – ' + x.detalj : ''}`));
      r.fel.forEach(f => console.log(`       JS-fel: ${f}`));
    }
    // geografins data ritas som förut med plattformens ritning
    if (medElevbok.length && fs.existsSync(GEO_ELEVBOK)) for (const lage of [LAGEN[0], LAGEN[3]]) {
      const r = await medOmkorning(() => provaGeografinsElevbok(lage), 'elevboken med geografins data, ' + lage.namn);
      gront = gront && r.gron;
      console.log(`${r.gron ? 'GRÖNT' : 'RÖTT '}  elevboken med geografins data (verktyg/elevbok-geografi), ${lage.namn}: ${r.navigering}, JS-fel ${r.fel.length}`);
      r.kontroller.filter(x => !x.ok).forEach(x => console.log(`       ✗ ${x.namn}${x.detalj ? ' – ' + x.detalj : ''}`));
      r.fel.forEach(f => console.log(`       JS-fel: ${f}`));
    }
    if (medElevbok.length) console.log('');
    // 3. Varje delkapitel i varje läge
    for (const dk of lista) for (const lage of LAGEN) {
      const r = await medOmkorning(() => kor(dk, lage), dk.namn + ', ' + lage.namn);
      gront = gront && r.gron;
      const matt = r.kontroll && Object.values(r.kontroll.nivaer).filter(x => typeof x === 'object')
        .map(x => Object.entries(x.matt).map(([n, m]) => `${n} ${m.text}${m.for_stora.length ? ' FÅR INTE PLATS: ' + m.for_stora.map(f => 's.' + f.sida).join(',') : ''}`).join('; ')).join(' | ');
      console.log(`${r.gron ? 'GRÖNT' : 'RÖTT '}  ${dk.namn}, ${lage.namn}: ${r.allaKommer ? '(allt kommer – bara hubben) ' : ''}navigering ${r.navigering}, ` +
        `${r.plats ? 'alla sidor får plats' : 'PLATS/STRUKTUR RÖTT'}, JS-fel ${r.fel.length}${r.hoppat && r.hoppat.length ? `, hoppat ${r.hoppat.length}` : ''}`);
      (r.hoppat || []).forEach(x => { console.log(`       hoppat (${x.hoppat}): ${x.namn}`); hoppade.push(`${dk.namn}, ${lage.namn}: ${x.namn}`); });
      if (matt && lage === LAGEN[0]) console.log(`       text: ${matt}`);
      if (r.brytTid) console.log(`       brytningen (CPU×6, median/max av 5 varv): ` + r.brytTid.bocker.map(b => `${b.bok || 'boken'} ${b.median}/${b.max}`).join(' · ') + ' ms');
      if (r.bladTid) console.log(`       bladvändningen (CPU×6, median/max av 3 efter uppvärmning): ${r.bladTid.total}/${r.bladTid.max} ms från tangenten (sidbytet högst ${r.bladTid.upplagt} ms), längsta glapp ${r.bladTid.maxGlapp} ms`);
      if (r.bladTid && r.bladTid.omkord) {
        const o = r.bladTid.omkord;
        console.log(`       OMKÖRD: bladvändningens tidsprov var rött i första körningen (${o.total}/${o.max} ms, längsta glapp ${o.maxGlapp} ms) och ${r.bladTid.gron ? 'grönt' : 'rött'} i omkörningen`);
        omkorningar.push(`${dk.namn}, ${lage.namn}: första ${o.total} ms / glapp ${o.maxGlapp} ms → omkörningen ${r.bladTid.total} ms / glapp ${r.bladTid.maxGlapp} ms (${r.bladTid.gron ? 'grönt' : 'rött'})`);
      }
      r.kontroller.filter(x => !x.ok).forEach(x => console.log(`       ✗ ${x.namn}${x.detalj ? ' – ' + x.detalj : ''}`));
      // --visa: också proven som gick igenom (för en rapport)
      if (process.argv.includes('--visa')) r.kontroller.filter(x => x.ok).forEach(x => console.log(`       ✓ ${x.namn}${x.detalj ? ' – ' + x.detalj.slice(0, 160) : ''}`));
      r.fel.forEach(f => console.log(`       JS-fel: ${f}`));
      if (r.kontroll) r.kontroll.problem.forEach(p => console.log(`       problem: ${p}`));
      if (r.kontroll && lage === LAGEN[0]) r.kontroll.varningar.forEach(p => console.log(`       varning: ${p}`));
      // mobilen: varningarna som bara gäller mobilen (figuren på en annan sida än stycket – inga flyttar för mobilens skull)
      (r.figurVarningar || []).forEach(p => console.log(`       varning: ${p}`));
      if (r.kontroll && lage.mobil) r.kontroll.varningar.filter(p => /mobilen/.test(p)).forEach(p => console.log(`       varning: ${p}`));
    }
  } else {
    // Negativ verifiering: varje fel, i varje läge, på första riktiga delkapitlet – grinden ska bli röd
    const dk0 = lista.find(d => !d.prov) || lista[0];
    for (const [namn, kod] of Object.entries(FEL).filter(([n]) => !NEGATIV_BARA || n.includes(NEGATIV_BARA))) for (const lage of LAGEN.filter(l => !kod.lagen || kod.lagen.includes(l.namn))) {
      const dk = (kod.dk && lista.find(d => d.namn.includes(kod.dk))) || dk0;
      const r = await kor(dk, lage, kod);
      // den långsamma brytningen ska fångas av just tidsprovet, den hackiga bladvändningen av bladvändningens tidsprov
      // i båda körningarna (första körningen röd, omkörningen röd)
      // "en gång": hacket bara i första körningen – omkörningen ska behövas och ge grönt (det enda felet som ska bli grönt)
      const enGang = namn === 'hackig bladvändning en gång';
      const rott = namn === 'långsam brytning' ? r.kontroller.some(x => x.namn.startsWith('prestanda') && !x.ok)
        : namn === 'hackig bladvändning' ? r.kontroller.some(x => x.namn.startsWith('blad: en vändning') && !x.ok) && !!(r.bladTid && r.bladTid.omkord)
        : enGang ? r.gron && !!(r.bladTid && r.bladTid.omkord)
        // rutornas regler: rött, och just den regeln är bruten (i brytningsreglerna eller i grindens mätning)
        // ett mått (arbetsorder 36): rött, och kontrolläget säger att en sida i just det måttet inte får plats
        : kod.matt ? !r.gron && !!r.kontroll && Object.values(r.kontroll.nivaer).some(x => typeof x === 'object' && x.matt[kod.matt] && x.matt[kod.matt].for_stora.length)
        : kod.regel ? !r.gron && ((r.kontroll && r.kontroll.problem.some(p => kod.regel.test(p))) || r.kontroller.some(x => !x.ok && kod.regel.test(x.namn + ' ' + x.detalj)))
        : !r.gron;
      gront = gront && rott;
      console.log(`${rott ? 'GRÖNT' : 'RÖTT '}  negativ "${namn}", ${lage.namn}: grinden blev ` +
        (enGang ? (rott ? 'grön efter omkörningen, som den ska' : 'INTE grön efter en omkörning') : (rott ? 'röd, som den ska' : 'GRÖN – fångar inte felet')) +
        ` (navigering ${r.navigering}, plats ${r.plats ? 'grön' : 'röd'}, JS-fel ${r.fel.length}` +
        (r.brytTid ? `, brytningen median högst ${r.brytTid.median} ms` : '') +
        (namn.startsWith('hackig bladvändning') && r.bladTid ? `, bladvändningen: ${r.bladTid.omkord ? `första ${r.bladTid.omkord.total} ms / glapp ${r.bladTid.omkord.maxGlapp} ms (rött), omkörningen ` : 'ingen omkörning, '}${r.bladTid.total} ms / glapp ${r.bladTid.maxGlapp} ms (${r.bladTid.gron ? 'grönt' : 'rött'})` : '') + ')');
      // fångas felet inte: vad som hände i stället (JS-fel och prov som inte gick igenom)
      if (kod.matt && rott) Object.entries(r.kontroll.nivaer).filter(([, x]) => typeof x === 'object' && x.matt[kod.matt] && x.matt[kod.matt].for_stora.length).slice(0, 2)
        .forEach(([n, x]) => console.log(`       ✗ fångat: ${n}, ${kod.matt}: får inte plats – ` + x.matt[kod.matt].for_stora.map(f => `sida ${f.sida} (+${f.px} px)`).join(', ')));
      if (kod.regel && rott) [...(r.kontroll ? r.kontroll.problem.filter(p => kod.regel.test(p)) : []), ...r.kontroller.filter(x => !x.ok && kod.regel.test(x.namn + ' ' + x.detalj)).map(x => x.namn)]
        .slice(0, 2).forEach(p => console.log(`       fångat: ${p.slice(0, 200)}`));
      if (!rott) { r.fel.forEach(f => console.log(`       JS-fel: ${f.split('\n').slice(0, 3).join(' ')}`));
        r.kontroller.filter(x => !x.ok).forEach(x => console.log(`       ✗ ${x.namn}${x.detalj ? ' – ' + x.detalj : ''}`)); }
    }
    // Elevbokens prefix: med plattformens standardprefix (?prova=prefix) ska provet för prefixet bli rött
    for (const dkE of lista.filter(d => !d.prov && elevbokSida(d))) for (const lage of [LAGEN[0], LAGEN[3]]) {
      const r = await provaElevboken(dkE, lage, '&prova=prefix');
      const rott = r.kontroller.some(x => x.namn.startsWith('elevboken: ett svar i en underfrågas ruta') && !x.ok);
      gront = gront && rott;
      console.log(`${rott ? 'GRÖNT' : 'RÖTT '}  negativ "elevbokens prefix", ${dkE.namn}, ${lage.namn}: grinden blev ${rott ? 'röd, som den ska' : 'GRÖN – fångar inte felet'}`);
      if (!rott) r.kontroller.forEach(x => console.log(`       ${x.ok ? '✓' : '✗'} ${x.namn}${x.detalj ? ' – ' + x.detalj : ''}`));
    }
  }
  if (!NEGATIV) console.log(`\nHoppade prov (inget fönsterläge – Chrome körs utan fönster och kan inte gå i helskärm): ${hoppade.length}`);
  if (!NEGATIV) console.log(`Omkörningar av bladvändningens tidsprov: ${omkorningar.length ? omkorningar.length : 'inga'}` +
    omkorningar.map(o => `\n       ${o}`).join(''));
  if (!NEGATIV) console.log(`Omkörningar för att Chrome stängdes: ${chromeOmkorningar.length ? chromeOmkorningar.length : 'inga'}` +
    chromeOmkorningar.map(o => `\n       ${o}`).join(''));
  console.log(`\n${gront ? 'GRÖNT' : 'RÖTT'}: ${NEGATIV ? 'den negativa verifieringen' : 'bokmotorn och delkapitlen'}` +
    (BARA ? ` – bara ”${BARA}” (--bara); hela grinden är inte körd` : ''));
  process.exit(gront ? 0 : 1);
})().catch(e => { console.error(e); process.exit(2); });
