// node verktyg/brytning-jamfor.js --spara <fil.json> | --jamfor <fil.json>
// Sidindelningen före och efter en ändring i brytningen (2026-11-08, snabbare brytning): för varje avsnittssida (som
// grinden: varje delkapitel.js, provboken och provboken utan texter), i tre fönster (1366×633, 1366×768 och mobilen
// 390×664), bryts varje bok med innehåll i Chromebookens två mått och i fönstrets eget mått, både som för eleven och
// som i kontrolläget (Bok.sidindelning). --spara skriver resultatet; --jamfor bryter igen och jämför sida för sida:
// blockens id, fyllnaden på fyra decimaler och det som inte får plats. Slutkoden är 1 om något skiljer.
'use strict';
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path'), http = require('http'), os = require('os');
const ROT = path.resolve(__dirname, '..');
const CHROME = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const arg = n => { const i = process.argv.indexOf(n); return i > 0 ? process.argv[i + 1] : null; };
const SPARA = arg('--spara'), JAMFOR = arg('--jamfor');
if (!SPARA === !JAMFOR) { console.error('node verktyg/brytning-jamfor.js --spara <fil.json> | --jamfor <fil.json>'); process.exit(2); }
const FONSTER = [['1366×633', 1366, 633, false], ['1366×768', 1366, 768, false], ['mobil 390×664', 390, 664, true]];

function delkapitel() {
  const ut = [];
  for (const omr of fs.readdirSync(ROT, { withFileTypes: true })) {
    if (!omr.isDirectory() || ['bokskal', 'mall', 'verktyg', 'node_modules'].includes(omr.name) || omr.name.startsWith('.')) continue;
    for (const d of fs.readdirSync(path.join(ROT, omr.name), { withFileTypes: true }))
      if (d.isDirectory() && fs.existsSync(path.join(ROT, omr.name, d.name, 'delkapitel.js'))) ut.push(`${omr.name}/${d.name}`);
  }
  for (const p of ['verktyg/provbok', 'verktyg/provbok-utan-texter']) if (fs.existsSync(path.join(ROT, p, 'delkapitel.js'))) ut.push(p);
  return ut;
}
const vanta = ms => new Promise(r => setTimeout(r, ms));
const hamta = u => new Promise((ok, fel) => http.get(u, r => { let d = ''; r.on('data', c => d += c); r.on('end', () => { try { ok(JSON.parse(d)); } catch (e) { fel(e); } }); }).on('error', fel));

async function chrome() {
  const port = 9300 + Math.floor(Math.random() * 300), profil = fs.mkdtempSync(path.join(os.tmpdir(), 'bj-'));
  const proc = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files', `--remote-debugging-port=${port}`, `--user-data-dir=${profil}`, 'about:blank'], { stdio: 'ignore' });
  let mal; for (let i = 0; i < 75 && !mal; i++) { await vanta(200); try { mal = (await hamta(`http://127.0.0.1:${port}/json`)).find(t => t.type === 'page'); } catch (e) {} }
  const ws = new WebSocket(mal.webSocketDebuggerUrl); await new Promise(r => ws.onopen = r);
  let id = 0; const vant = {};
  ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && vant[d.id]) { vant[d.id](d); delete vant[d.id]; } };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; vant[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async x => { const r = await send('Runtime.evaluate', { expression: x, awaitPromise: true, returnByValue: true });
    if (r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0, 400)); return r.result.result.value; };
  return { send, ev, stang: () => { ws.close(); proc.kill(); } };
}

(async () => {
  const resultat = {};
  for (const [lage, B, H, mobil] of FONSTER) {
    const c = await chrome();
    await c.send('Runtime.enable'); await c.send('Page.enable');
    await c.send('Emulation.setDeviceMetricsOverride', { width: B, height: H, deviceScaleFactor: 1, mobile: mobil });
    for (const dk of delkapitel()) {
      await c.send('Page.navigate', { url: 'file:///' + ROT.replace(/\\/g, '/') + '/' + dk + '/index.html' });
      await vanta(500);
      const r = await c.ev(`(async () => { const v = ms => new Promise(r => setTimeout(r, ms));
        for (let i = 0; i < 200 && !document.body.dataset.klar; i++) await v(100);
        if (document.fonts) await document.fonts.ready; await v(800);
        return window.Bok && Bok.sidindelning ? Bok.sidindelning() : null; })()`);
      (resultat[dk] = resultat[dk] || {})[lage] = r;
      process.stdout.write('.');
    }
    c.stang(); await vanta(300);
  }
  console.log('');
  if (SPARA) {
    fs.writeFileSync(SPARA, JSON.stringify(resultat));
    const n = Object.values(resultat).reduce((a, x) => a + Object.values(x).reduce((b, y) => b + Object.keys(y || {}).length, 0), 0);
    console.log(`Sparat: ${Object.keys(resultat).length} avsnittssidor, ${n} böcker × fönster → ${SPARA}`);
    process.exit(0);
  }
  const fore = JSON.parse(fs.readFileSync(JAMFOR, 'utf8')), skillnader = [];
  let bocker = 0, sidor = 0;
  for (const dk of new Set([...Object.keys(fore), ...Object.keys(resultat)])) for (const [lage] of FONSTER) {
    const a = (fore[dk] || {})[lage] || {}, b = (resultat[dk] || {})[lage] || {};
    for (const bok of new Set([...Object.keys(a), ...Object.keys(b)])) for (const matt of new Set([...Object.keys(a[bok] || {}), ...Object.keys(b[bok] || {})])) {
      bocker++;
      for (const slag of ['elev', 'provad']) {
        // elevens brytning: blocken och det som inte får plats; fyllnaden används där bara för sidor nära 40 %, som provas
        // i en riktig sida också efter 2026-11-08 – en nästan full sidas fyllnad är räkningens (kontrolläget provar den)
        const utanFyll = s => String(s).replace(/ \d+\.\d{4}$/, '');
        const n = slag === 'elev' ? utanFyll : (s => s);
        const x = (((a[bok] || {})[matt] || {})[slag] || []).map(n), y = (((b[bok] || {})[matt] || {})[slag] || []).map(n);
        sidor += x.length;
        const k = x.findIndex((s, i) => s !== y[i]);
        if (k >= 0 || x.length !== y.length) skillnader.push(`${dk}, ${lage}, ${bok}, ${matt}, ${slag}: ${x.length} → ${y.length} sidor` +
          (k >= 0 ? `; sida ${k + 1}: ”${String(x[k]).slice(-60)}” → ”${String(y[k]).slice(-60)}”` : ''));
      }
    }
  }
  console.log(`${skillnader.length ? 'SKILJER' : 'SAMMA'}: ${bocker} böcker × mått, ${sidor} sidor (elevens och kontrollägets brytning)` +
    (skillnader.length ? '\n  ' + skillnader.slice(0, 40).join('\n  ') : ''));
  process.exit(skillnader.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
