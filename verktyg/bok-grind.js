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
  'exempel helt fast sidan blir tunn': { adress: '&prova=exempel-helt', dk: 'provbok', regel: /fylld/ }
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

/* ---------- Chrome via DevTools-protokollet ---------- */

const vanta = ms => new Promise(r => setTimeout(r, ms));
const hamtaJson = u => new Promise((ok, fel) => http.get(u, r => { let d = ''; r.on('data', c => d += c); r.on('end', () => { try { ok(JSON.parse(d)); } catch (e) { fel(e); } }); }).on('error', fel));

async function chrome() {
  const port = 9400 + Math.floor(Math.random() * 500);
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'bok-grind-profil-'));
  const proc = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
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
    const sett = new Map(), par = new Map(), fr = new Map(), bp = new Map(), tal = new Set(), st = new Map(), fp = new Map(), hs = new Map(), pn = new Map(), jm = new Map(), ry = new Map(), ng = new Map(), rk = new Map();
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
            const paGraf = (x, y) => graf.isPointInStroke(new DOMPoint(x, y));
            g.querySelectorAll('polygon.fig-yta').forEach((p, j) => {
              const h = [...p.points].map(q => [q.x, q.y]);
              h.forEach(([x, y]) => { if (!nara(y, y0) && !paGraf(x, y)) f_.push('yta ' + (j + 1) + ': hörnet (' + x.toFixed(1) + ', ' + y.toFixed(1) + ') ligger varken på tidsaxeln eller på grafen'); });
              h.forEach(([x, y], k) => { const [x2, y2] = h[(k + 1) % h.length];
                if (nara(y, y0) && nara(y2, y0)) return;                 // på tidsaxeln
                if (nara(x, x2)) return;                                 // en lodrät kant
                if (!paGraf((x + x2) / 2, (y + y2) / 2)) f_.push('yta ' + (j + 1) + ': den övre kanten följer inte grafen'); });
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
      fr: { antal: fr.size, ytor: [...new Set([...fr.values()].map(x => x.ytor))], pilar: [...fr.values()].map(x => x.pilar.length), monster, fel: frFel }, tal: [...tal] };
  };`;

// Diagrammen och vektorerna (figurKoll: ng), i scenarierna
const NG_PROV = String.raw`if (spar.some(x => x.rk && x.rk.antal)) prova('figur: resulterande kraft – kraftpilarnas längder i proportion och resultanten summan med tecken (en kedja: från första början till sista spets), pilarna på rutat papper i rutnätets hörn och den flyttade pilen med samma komposanter, resultantens längd vid varje vinkel (±1 px), komposanterna längs rutlinjerna och snörkrafternas delar (sidodelarna tar ut varandra, uppåtdelarna = tyngden), inga texter utanför eller över varandra (' + spar.map(x => x.rk.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.rk.typer))].join(', ') + ')',
    spar.every(x => !x.rk.fel.length), spar.flatMap(x => x.rk.fel).join(' | '));
  if (spar.some(x => x.ng && x.ng.antal)) prova('figur: diagram och vektorer – punkterna på sina koordinater och grafen genom dem, de skuggade ytorna under grafen, pilarna efter varandra och resultanten från början till spets, ingen text under 14 px, utanför eller överlappande (' + spar.map(x => x.ng.antal).join(' + ') + ' figurer: ' + [...new Set(spar.flatMap(x => x.ng.typer))].join(', ') + ')',
    spar.every(x => !x.ng.fel.length), spar.flatMap(x => x.ng.fel).join(' | ') || 'minsta texten ' + Math.min(...spar.filter(x => x.ng.antal).map(x => x.ng.minPx)).toFixed(1) + ' px');`;

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
  for (const [sel, flik] of [['.nasta-steg', 'laes'], ['.ovningsbocker', 'ova'], ['.stodbocker', 'laes']]) {
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
      if (harOmslag && !stod && !omslag.includes('NÄSTA STEG')) fsFel.push(titel + ': omslaget ”' + omslag.slice(0, 90) + '”');
      if (stod && omslag) fsFel.push(titel + ': en stödbok ska inte ha något omslag');
      if (!toc.includes(titel)) fsFel.push(titel + ': förteckningen ”' + toc + '”');
      spar.push(await figurKoll());
      fsBocker.push({ t, titel, sel });
      await klicka(synlig('.bok-stang'), 450);
      if (!stangd()) fsFel.push(titel + ': Stäng ledde inte tillbaka (' + location.hash + ')');
    }
  }
  const laes = $('.flik[data-flik="laes"]'); if (laes && !laes.classList.contains('aktiv')) await klicka(laes, 150);
  if (fsBocker.length) prova('fristående böcker: varje kort (Nästa steg, Öva, stödbok) öppnar sin bok – adressen, ingen nivåväljare, förteckningen med titeln, omslaget med "Nästa steg" (inte för en stödbok) – och Stäng leder tillbaka (' + fsBocker.map(b => b.titel).join(', ') + ')',
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

/* ---------- Scenariot i sidan: bara motorns egna element, så att det gäller varje delkapitel ---------- */

const SCENARIO = String.raw`async (helskarmLage) => {
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
  prova('hubben: flikarna Föreläsning · Läs · Öva · Elevboken, Läs vald',
    flikar.map(f => f.textContent).join(' · ') === 'Föreläsning · Läs · Öva · Elevboken' && $('.flik.aktiv') && $('.flik.aktiv').dataset.flik === 'laes',
    flikar.map(f => f.textContent + (f.classList.contains('aktiv') ? '*' : '')).join(' · '));
  prova('hubben: en flik vars hjälpmedel saknar adress är tonad ("kommer") och går inte att välja',
    flikar.filter(f => f.getAttribute('aria-disabled') === 'true').every(f => { f.click(); return f.title.includes('kommer') && $('.flik.aktiv').dataset.flik === 'laes' && !$('section.flik-innehall[data-flik="laes"]').classList.contains('dold'); }));
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
  prova(helskarmLage ? 'öppna: boken öppnas i helskärm' : 'öppna: boken öppnas i fönstret', helsk() === helskarmLage, 'helskärm=' + helsk());
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
  await gest(dar);
  prova('minns: boken öppnas där eleven var (samma block)', visar(minne), syns() + ' (mindes ' + minne + ')');
  prova(helskarmLage ? 'minns: i helskärm igen' : 'minns: i fönstret igen', helsk() === helskarmLage, 'helskärm=' + helsk());

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
  const DD_SEK = 'section[data-flik="laes"] > .vill-veta-mer:not(.nasta-steg):not(.stodbocker)';
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
const BOKHUBB = String.raw`async (helskarmLage) => {
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
    prova(helskarmLage ? 'öppna: boken öppnas i helskärm' : 'öppna: boken öppnas (i fönstret, eller i helskärm om inställningen säger så)', oppen() && (!helskarmLage || helsk()), 'helskärm=' + helsk());
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
    await c.send('Page.addScriptToEvaluateOnNewDocument', { source: FANGA_FEL + (typeof felkod === 'string' ? felkod : '') });
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
    res.kontroller = await c.ev(res.bokhubb ? `(${BOKHUBB})(${lage.helskarm})` : `(${SCENARIO})(${lage.helskarm})`);
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
  const nav = res.kontroller.filter(x => x.ok).length;
  res.navigering = `${nav}/${res.kontroller.length}`;
  res.plats = res.kontroll && res.kontroll.gron === true;
  res.gron = res.kontroller.length > 0 && nav === res.kontroller.length && res.plats && res.fel.length === 0;
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
  { mapp: 'kraft_och_rorelse', nr: 'III', titel: 'Kraft och rörelse', avsnitt: ['atomen_repetition', 'materia_repetition', 'rorelse_och_kraft', 'fall_kast_och_balans'],
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
    prova(`startsida: ${tonade.map(x => x.nr).join(' och ')} tonade, aria-disabled, "Kommer" och inga länkar`,
      tonade.length > 0 && tonade.every(x => x.tag === 'SPAN' && x.dimmad && x.av === 'true' && x.kommer && !x.href));
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
      prova(`kapitelindex ${K.nr}: ${alla[n]}–${alla[alla.length - 1]} tonade, aria-disabled, "Kommer" och inga länkar`,
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
        `${r.plats ? 'alla sidor får plats' : 'PLATS/STRUKTUR RÖTT'}, JS-fel ${r.fel.length}`);
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
    for (const [namn, kod] of Object.entries(FEL).filter(([n]) => !NEGATIV_BARA || n.includes(NEGATIV_BARA))) for (const lage of LAGEN) {
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
        : kod.regel ? !r.gron && ((r.kontroll && r.kontroll.problem.some(p => kod.regel.test(p))) || r.kontroller.some(x => !x.ok && kod.regel.test(x.namn + ' ' + x.detalj)))
        : !r.gron;
      gront = gront && rott;
      console.log(`${rott ? 'GRÖNT' : 'RÖTT '}  negativ "${namn}", ${lage.namn}: grinden blev ` +
        (enGang ? (rott ? 'grön efter omkörningen, som den ska' : 'INTE grön efter en omkörning') : (rott ? 'röd, som den ska' : 'GRÖN – fångar inte felet')) +
        ` (navigering ${r.navigering}, plats ${r.plats ? 'grön' : 'röd'}, JS-fel ${r.fel.length}` +
        (r.brytTid ? `, brytningen median högst ${r.brytTid.median} ms` : '') +
        (namn.startsWith('hackig bladvändning') && r.bladTid ? `, bladvändningen: ${r.bladTid.omkord ? `första ${r.bladTid.omkord.total} ms / glapp ${r.bladTid.omkord.maxGlapp} ms (rött), omkörningen ` : 'ingen omkörning, '}${r.bladTid.total} ms / glapp ${r.bladTid.maxGlapp} ms (${r.bladTid.gron ? 'grönt' : 'rött'})` : '') + ')');
      // fångas felet inte: vad som hände i stället (JS-fel och prov som inte gick igenom)
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
  if (!NEGATIV) console.log(`\nOmkörningar av bladvändningens tidsprov: ${omkorningar.length ? omkorningar.length : 'inga'}` +
    omkorningar.map(o => `\n       ${o}`).join(''));
  if (!NEGATIV) console.log(`Omkörningar för att Chrome stängdes: ${chromeOmkorningar.length ? chromeOmkorningar.length : 'inga'}` +
    chromeOmkorningar.map(o => `\n       ${o}`).join(''));
  console.log(`\n${gront ? 'GRÖNT' : 'RÖTT'}: ${NEGATIV ? 'den negativa verifieringen' : 'bokmotorn och delkapitlen'}` +
    (BARA ? ` – bara ”${BARA}” (--bara); hela grinden är inte körd` : ''));
  process.exit(gront ? 0 : 1);
})().catch(e => { console.error(e); process.exit(2); });
