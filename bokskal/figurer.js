/* Bokmotorns figurer: funktionella figurer, specificerade i data och ritade här som SVG i fysiktemats färger (klasserna
 * fig-* i bok.css). Bara figurer där en riktning eller ett läge bär betydelsen – inga dekorativa symboler.
 *
 * I innehållet:  {typ: 'figur', namn: '<figur>', ...figurens data, bildtext?, beskrivning?}
 * Figurens data avgör vad som ritas; motorn räknar ut lägen och riktningar (hur djupt något flyter, åt vilket håll
 * värmen flödar, hur lång en kraftpil är). beskrivning läses upp av skärmläsare; utan den skriver figuren en själv.
 *
 *   aggregationsformer  exempel?: ['is', 'vatten', 'vattenånga'], overgangar?: true
 *   flyter_sjunker      vatska?: {namn, densitet}, foremal: [{namn, densitet, ca?, stil?}] (1–4), enhet?: 'g/cm³'
 *   varmeflode          foremal?: [{namn, temp}, {namn, temp}], efter?: 'lika varm', slutrad?, enhet?: '°C'
 *   kraftpilar          foremal?: {namn?, form?: 'lada'|'boll'}, underlag?: false,
 *                       krafter: [{namn, riktning: 'upp'|'ner'|'vanster'|'hoger'|grader, storlek?}], enhet?: 'N', resultant?,
 *                       varden?: true, skala?
 *   kraftpar            satt: 'drag'|'knuff', foremal: [{namn}, {namn}], krafter: ['kraften på 1', 'kraften på 2'],
 *                       storlek?, enhet?: 'N', varden?: true
 *   skalmodell         atomer: [{namn, protoner, skal: [2, 8, …], neutroner?, symbol?}] (1–3), overgang?: 'tar upp 2 elektroner',
 *                       rader?: ['protoner'|'neutroner'|'elektroner'|'laddning'|'masstal', …]
 *   rorelsespar         rorelse: 'likformig'|'olikformig'|'accelererande'|'retarderad', prickar?: 6 (4–8), tider?: false
 *   friktion            foremal?: 'Block', underlag?: 'Bord', pilar?: true, ytor?: 'normal'|'grov'|'slat'
 *   lutande_plan        steg?: 3 (1–3) – Galileos tankeexperiment: lika branta, flackare, vågrätt
 *   stoppstracka        rader: [{fart, reaktion, broms}] (1–5), markering?: {varde, text}, enhet?: 'm'
 *   friktion (paneler)  paneler: [{rubrik, foremal, underlag, ytor}] (2–3) – förstoringarna bredvid varandra
 *   fallande_hiss       (inga data) – hissen som står still och hissen som faller fritt (två paneler)
 *   jord_och_mane       massa, tyngd: [jorden, månen], vag: [jorden, månen] – samma person på jorden och på månen (två paneler)
 *   newtons_kanon       (inga data) – jorden, berget, kanonen och tre kulbanor
 *   bildpilar           bild, bredd, hojd (fotots pixlar), utsnitt?: [x, y, b, h], maxhojd?: 0.2–0.45 (standard 0.45),
 *                       prickar?: [[x, y], …] (lägesmarkeringar), stråle?: {fran, till} (riktningen under prickarna),
 *                       pilar: [{namn, fran: [x, y], till: [x, y], etikett?: [x, y]}], lika?: [[0, 1]], beskrivning (krävs)
 *   himlakroppar_i_skala kroppar: [{namn, diameter (km), grupp?}], kant?: {namn, diameter}, storst? – i samma skala
 *   avstandslinje       kroppar: [{namn, ae}], enhet?: 'AE'|'miljoner km' – avstånden från solen på en linje
 *   jordklot_tyngd      personer?: [{vinkel, namn?}] – tyngdkraften mot jordens mitt
 *   manfaser            (inga data) – månen i åtta lägen och så ser den ut från jorden
 *   arstider            lutning?: 23.5 – jorden i fyra lägen runt solen
 *   diagram_graf        diagram: [{rubrik?, x: {storhet, enhet, max, steg?, tal?}, y, grafer, ytor?, delta?}] (1–3) –
 *                       diagram med rutnät, grafer, skuggade ytor och Δ-linjer (Nästa steg, se nedan)
 *   vektor_rutnat       pilar: [{dx, dy, namn?}], resultant?: {namn?}, ratVinkel?, skala? – pilar efter varandra på
 *                       rutat papper (Nästa steg, se nedan)
 *   resultant_rutor     lage: 'steg' | 'vinklar' | 'komposanter' – den resulterande kraften på rutat papper (Kraft och
 *                       rörelse IV A, se nedan); kraftpilar har dessutom kedja, rod, komposanter och lampan i snören
 *   kastbana            lage: 'hoghus' | 'komposanter' | 'vinklar' | 'hopp' – kaströrelsen räknad ur fysiken (IV C och D)
 *   cirkelrorelse       lage: 'snore' | 'bil' – kraften in mot mitten och den raka banan längs tangenten (IV C)
 *   stabilitet          lage: 'lada' | 'fordon' | 'hojdhopp' – tyngdpunkt, lodlinje och stödyta (IV D)
 *   krock               stopp?: [styv, deformationszon] (m) – två bilar mot en vägg, stoppsträckan och kupén (IV D)
 *   tryck               lage: 'sno' | 'hydraulik' | 'lyftkraft' | 'hydraulik-vag' – tryck, hydraulik och lyftkraft (V A)
 *   energi              lage: 'studs' | 'arbete' | 'snett' – energin byter form, när en kraft utför arbete, arbete när kraften drar snett (V B)
 *                       | 'fall' | 'gunga' | 'stavhopp' – mekanisk energi: staplarna, gungan och stavhoppet (V C)
 *                       | 'ramp' | 'gungbrada' | 'talja' – maskiner: två vägar upp, moment i balans, taljan (V D)
 *   ljud                lage: 'membran' | 'modeller' | 'doppler' | 'orat' | 'jamforelse' | 'resonans' | 'ekolod' | 'isolering' –
 *                       ljudvågor i partikel- och vågmodellen (VI A, se nedan)
 *   ljus                lage: 'foremal' | 'reflektion' | 'spegelbild' | 'speglar' | 'brytning' | 'penna' | 'totalreflektion' |
 *                       'linser' | 'ogat' | 'synfel' | 'prisma' | 'farg' | 'spektrum' | 'jamforelse' – ljusstrålar (VI B, se nedan)
 *
 * Figurerna ritas ungefär i textspaltens bredd (440 enheter), så att texten i dem blir läsbar (≈ 14–17 px).
 * Hela partiklar ritas i neutral sandfärg, som i filmernas modeller (bok.py: ATOM). En ny sorts figur är en ny
 * funktion här (motorn), inte något den som skriver innehåll gör. */
(function () {
  'use strict';

  const f = v => Math.round(v * 10) / 10;
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = (b, h, inne) => `<svg viewBox="0 0 ${b} ${h}" xmlns="http://www.w3.org/2000/svg">${inne}</svg>`;
  const text = (x, y, s, k = 'fig-text') => `<text x="${f(x)}" y="${f(y)}" class="${k}">${esc(s)}</text>`;
  const partikel = (x, y, r = 7.5) => `<circle class="fig-partikel" cx="${f(x)}" cy="${f(y)}" r="${r}"/>`;
  // Tal som i texten: decimalkomma och mellanslag mellan tusental (1 538). minDec: antal decimaler som alltid visas.
  const tal = (v, minDec = 0) => Number(v).toLocaleString('sv-SE', { minimumFractionDigits: minDec, maximumFractionDigits: 2 }).replace(/ /g, ' ');
  const fel = s => { throw new Error(s); };

  function pil(x1, y1, x2, y2, spets = 8, klass = '') {
    const a = Math.atan2(y2 - y1, x2 - x1), c = Math.cos(a), s = Math.sin(a);
    const bx = x2 - spets * 1.4 * c, by = y2 - spets * 1.4 * s, w = spets * 0.75;
    return `<line class="fig-pil ${klass}" x1="${f(x1)}" y1="${f(y1)}" x2="${f(bx)}" y2="${f(by)}"/>` +
      `<polygon class="fig-pilspets ${klass}" points="${f(x2)},${f(y2)} ${f(bx - w * s)},${f(by + w * c)} ${f(bx + w * s)},${f(by - w * c)}"/>`;
  }

  // Samma "slumpmässiga" oordning varje gång figuren ritas.
  function slump(fro) { let x = fro; return () => ((x = (x * 16807) % 2147483647) / 2147483647) - 0.5; }

  /* Fast, flytande, gas – och övergångarna mellan dem. Kolumner: 0–88, 176–264, 352–440. */
  Bok.figur('aggregationsformer', d => {
    const [exFast, exFlyt, exGas] = d.exempel || ['is', 'vatten', 'vattenånga'];
    const golv = 196, sl = slump(7);
    let s = `<line class="fig-bord" x1="0" y1="${golv + 1}" x2="440" y2="${golv + 1}"/>`;

    // Fast: tätt och i ordning, egen form
    for (let rad = 0; rad < 4; rad++) for (let k = 0; k < 5; k++) s += partikel(12 + k * 16, golv - 7.5 - rad * 16);

    // Flytande: tätt men oordnat, tar kärlets form
    s += `<rect class="fig-vatten" x="177" y="146" width="86" height="49" opacity=".55"/>`;
    [[186, 5, 188], [194, 4, 173], [186, 5, 158]].forEach(([x0, n, y]) => {
      for (let k = 0; k < n; k++) s += partikel(x0 + k * 16.5 + sl() * 4, y + sl() * 3);
    });
    s += `<line class="fig-vattenyta" x1="177" y1="146" x2="263" y2="146"/>`;
    s += `<path class="fig-kontur" d="M176 92 L176 ${golv} L264 ${golv} L264 92"/>`;

    // Gas: långt isär, rör sig fritt och fyller det stängda kärlet
    [[372, 86, 1, .4], [416, 80, -1, .3], [426, 124, -.3, -1], [380, 132, 1, -.6],
     [418, 166, -1, .5], [370, 178, .5, -1], [400, 104, .2, 1]].forEach(([x, y, dx, dy]) => {
      const l = Math.hypot(dx, dy), ux = dx / l, uy = dy / l;
      s += `<line class="fig-spar" x1="${f(x - ux * 11)}" y1="${f(y - uy * 11)}" x2="${f(x - ux * 21)}" y2="${f(y - uy * 21)}"/>`;
      s += partikel(x, y);
    });
    s += `<rect class="fig-kontur" x="353" y="64" width="86" height="${golv - 64}"/>`;

    // Rubriker, exempel och övergångar
    s += text(44, 24, 'Fast', 'fig-rubrik') + text(220, 24, 'Flytande', 'fig-rubrik') + text(396, 24, 'Gas', 'fig-rubrik');
    s += text(44, 222, exFast, 'fig-text fig-mitt fig-dampad') + text(220, 222, exFlyt, 'fig-text fig-mitt fig-dampad') +
         text(396, 222, exGas, 'fig-text fig-mitt fig-dampad');
    const overgangar = d.overgangar !== false;
    if (overgangar) {
      s += pil(96, 106, 168, 106) + text(132, 95, 'smälter', 'fig-pil-text');
      s += pil(168, 136, 96, 136) + text(132, 157, 'stelnar', 'fig-pil-text');
      s += pil(272, 106, 344, 106) + text(308, 95, 'förångas', 'fig-pil-text');
      s += pil(344, 136, 272, 136) + text(308, 157, 'kondenserar', 'fig-pil-text');
    }
    return { svg: svg(440, 230, s), beskrivning: `Fast (${exFast}), flytande (${exFlyt}) och gas (${exGas}).` +
      (overgangar ? ' Pilar: fast smälter till flytande och flytande stelnar till fast; flytande förångas till gas och gas kondenserar till flytande.' : '') };
  });

  /* Flyter eller sjunker – läget räknas ur densiteten. Den del av ett flytande föremål som är under ytan är
     föremålets densitet delad med vätskans; har föremålet högre densitet ligger det på botten. */
  const MATERIAL = { tra: [72, 36], is: [46, 46], jarn: [54, 29], foremal: [56, 36] };
  Bok.figur('flyter_sjunker', d => {
    const vatska = Object.assign({ namn: 'Vatten', densitet: 1 }, d.vatska), enhet = d.enhet || 'g/cm³';
    const foremal = d.foremal || fel('flyter_sjunker behöver foremal: [{namn, densitet}]');
    if (!foremal.length || foremal.length > 4) fel('flyter_sjunker ritar 1–4 föremål');
    const yta = 118, botten = 239, hoger = 429, vanster = 11;
    const rho = x => (x.ca ? 'ca ' : '') + tal(x.densitet, 1) + ' ' + enhet;
    let foremalen = '', etiketter = '', beskr = [];
    const steg = (hoger - vanster) / foremal.length;
    foremal.forEach((x, i) => {
      if (!(x.densitet > 0)) fel(`flyter_sjunker: ”${x.namn}” saknar densitet`);
      const stil = MATERIAL[x.stil] ? x.stil : 'foremal', [b, hjd] = MATERIAL[stil];
      const cx = vanster + steg * (i + 0.5), kvot = x.densitet / vatska.densitet;
      const utfall = kvot < 1 ? 'flyter' : kvot > 1 ? 'sjunker' : 'svävar';
      const y = kvot < 1 ? yta - hjd * (1 - kvot) : kvot > 1 ? botten - hjd : (yta + botten - hjd) / 2;
      foremalen += `<rect class="fig-${stil}" x="${f(cx - b / 2)}" y="${f(y)}" width="${b}" height="${hjd}" rx="${stil === 'is' ? 4 : 2}"/>`;
      // Det som flyter får sin etikett ovanför karet; det som sjunker eller svävar ovanför sig, i vätskan.
      const ey = kvot < 1 ? 19 : y - 49;
      etiketter += text(cx, ey, x.namn, 'fig-rubrik') + text(cx, ey + 20, rho(x), 'fig-text fig-mitt') +
        text(cx, ey + 39, utfall, 'fig-text fig-mitt fig-utfall fig-halo');
      beskr.push(`${x.namn}, ${rho(x)}, ${utfall}${kvot < 1 ? (kvot > 0.75 ? ' nästan helt under ytan' : kvot >= 0.4 ? ' delvis under ytan' : ' högt i ytan') : kvot > 1 ? ' och ligger på botten' : ''}.`);
    });
    // vätskans namn i ett hörn där inget föremål ligger på botten
    const nere = i => foremal[i].densitet >= vatska.densitet;
    const vx = !nere(0) ? 22 : !nere(foremal.length - 1) ? 418 : null;
    const vatskeEtikett = vx === null
      ? text(22, 60, vatska.namn + ', ' + tal(vatska.densitet, 1) + ' ' + enhet, 'fig-text fig-vanster')
      : text(vx, 207, vatska.namn, 'fig-rubrik ' + (vx < 220 ? 'fig-vanster' : 'fig-hoger')) +
        text(vx, 227, tal(vatska.densitet, 1) + ' ' + enhet, 'fig-text' + (vx < 220 ? '' : ' fig-hoger'));
    let s = foremalen;
    // vätskan läggs över, så att det som är under ytan syns genom den
    s += `<rect class="fig-vatten" x="${vanster}" y="${yta}" width="${hoger - vanster}" height="${botten + 1 - yta}" opacity=".5"/>`;
    s += `<line class="fig-vattenyta" x1="${vanster}" y1="${yta}" x2="${hoger}" y2="${yta}"/>`;
    s += `<path class="fig-kontur" d="M10 70 L10 240 L430 240 L430 70"/>`;
    s += etiketter + vatskeEtikett;
    return { svg: svg(440, 248, s), beskrivning: `Ett kar med ${vatska.namn.toLowerCase()}, ${tal(vatska.densitet, 1)} ${enhet}. ` + beskr.join(' ') };
  });

  /* Värme flödar från varmt till kallt – tills temperaturen är densamma. Pilen pekar från det varmare. */
  Bok.figur('varmeflode', d => {
    const [a, b] = d.foremal || [{ namn: 'varm', temp: 80 }, { namn: 'kall', temp: 20 }];
    const enhet = d.enhet || '°C', efter = d.efter || 'lika varm';
    const slutrad = d.slutrad || 'samma temperatur – inget mer värmeflöde';
    if (a.temp === b.temp) fel('varmeflode: föremålen har samma temperatur – då flödar ingen värme');
    const aVarm = a.temp > b.temp;
    let s = '';
    s += text(10, 18, 'Först', 'fig-rubrik fig-vanster');
    s += `<rect class="${aVarm ? 'fig-varm' : 'fig-kall'}" x="10" y="28" width="205" height="72" rx="3"/>`;
    s += `<rect class="${aVarm ? 'fig-kall' : 'fig-varm'}" x="215" y="28" width="205" height="72" rx="3"/>`;
    s += text(66, 54, a.namn, 'fig-text fig-mitt fig-dampad') + text(66, 86, `${tal(a.temp)} ${enhet}`, 'fig-text fig-stor fig-mitt');
    s += text(364, 54, b.namn, 'fig-text fig-mitt fig-dampad') + text(364, 86, `${tal(b.temp)} ${enhet}`, 'fig-text fig-stor fig-mitt');
    s += (aVarm ? pil(128, 70, 302, 70, 10) : pil(302, 70, 128, 70, 10)) + text(215, 56, 'värme', 'fig-pil-text fig-halo');

    s += text(10, 136, 'Sedan', 'fig-rubrik fig-vanster');
    s += `<rect class="fig-ljum" x="10" y="146" width="205" height="62" rx="3"/>`;
    s += `<rect class="fig-ljum" x="215" y="146" width="205" height="62" rx="3"/>`;
    const sedan = d.sluttemp != null ? `${tal(d.sluttemp)} ${enhet}` : efter;
    s += text(112, 183, sedan, 'fig-text fig-mitt') + text(318, 183, sedan, 'fig-text fig-mitt');
    s += text(215, 232, slutrad, 'fig-text fig-mitt fig-dampad');
    const [varm, kall] = aVarm ? [a, b] : [b, a];
    return { svg: svg(440, 240, s), beskrivning: `Först: ${a.namn} ${tal(a.temp)} ${enhet} och ${b.namn} ${tal(b.temp)} ${enhet}. ` +
      `En pil visar att värme flödar från det som är ${tal(varm.temp)} ${enhet} till det som är ${tal(kall.temp)} ${enhet}. Sedan: ${sedan} båda, ${slutrad}.` };
  });

  /* Kraftpilar: krafterna på ett föremål, ritade från dess mitt. Pilens riktning är kraftens riktning och dess
     längd är proportionell mot storleken (den största kraften får den längsta pilen).
     Arbetsorder 12 (2026-11-07), utan att det som fanns ändras:
       kedja: true      krafterna efter varandra (varje pil börjar vid den förras spets), resultanten under (R1)
       rod: true        resultanten röd (som i figurerna med rutat papper), inte streckad indigo
       komposanter: true  varje sned kraft med sina komposanter streckade: först åt sidan, sedan uppåt/nedåt (R4)
       foremal.form: 'lampa'  en lampa; snoren: true ritar snörena från lampan längs krafterna upp till taket (R4)
     Varje pil står i en g med data-storlek och data-g (grinden mäter längderna, summan och komposanterna). */
  const RIKTNING = { upp: 90, ner: 270, hoger: 0, vanster: 180, 'höger': 0, 'vänster': 180 };
  const RIKTORD = { 90: 'uppåt', 270: 'nedåt', 0: 'åt höger', 180: 'åt vänster' };
  Bok.figur('kraftpilar', d => {
    const krafter = d.krafter || fel('kraftpilar behöver krafter: [{namn, riktning, storlek}]');
    if (!krafter.length) fel('kraftpilar behöver minst en kraft');
    const enhet = d.enhet || 'N', form = (d.foremal && d.foremal.form) || 'lada';
    const grader = g => ((g % 360) + 360) % 360;
    const vinkel = r => grader(typeof r === 'number' ? r : RIKTNING[r] != null ? RIKTNING[r] : fel(`kraftpilar: okänd riktning ”${r}”`));
    const riktord = g => RIKTORD[g] || `i riktningen ${g}°`;
    // Föremålet är litet (64 × 48). Den största kraften får längden L; en kraft under ungefär en tredjedel av den
    // största ritas över föremålet. Figurens höjd följer krafterna, så att en figur med bara vågräta krafter blir låg.
    // skala: den storlek som får den längsta pilen – samma skala i flera figurer gör pilarna jämförbara mellan dem.
    // varden: false ritar längderna ur storleken men skriver inte ut värdena.
    const B = 440, L = 104, bh = 24, KANT = 12;
    const storst = d.skala || Math.max(...krafter.map(k => k.storlek || 1));
    const visa = d.varden !== false;
    const varde = m => m != null && visa ? `${tal(m)} ${enhet}` : '';
    const pilar = krafter.map(k => ({ namn: k.namn, g: vinkel(k.riktning), m: k.storlek, klass: '' }));
    const beskr = pilar.map(p => `${p.namn ? p.namn + ' ' : ''}${varde(p.m) ? varde(p.m) + ' ' : ''}${riktord(p.g)}`.trim());
    if (d.resultant) {
      let rx = 0, ry = 0;
      krafter.forEach(k => { const v = vinkel(k.riktning) * Math.PI / 180, m = k.storlek || 0; rx += m * Math.cos(v); ry += m * Math.sin(v); });
      const m = Math.round(Math.hypot(rx, ry) * 100) / 100;
      if (m > 0) {
        const g = grader(Math.round(Math.atan2(ry, rx) * 180 / Math.PI));
        // Parallell med en av krafterna: resultanten ritas en bit vid sidan om, med etiketten på andra sidan.
        pilar.push({ namn: 'Resultant', g, m, klass: 'fig-resultant' + (d.rod ? ' fig-rod' : ''), resultant: true, bredvid: !d.kedja && pilar.some(p => p.g === g) });
        beskr.push(`Resultanten${varde(m) ? ' ' + varde(m) : ''} ${riktord(g)}`);
      } else beskr.push('krafterna tar ut varandra');
    }
    // Lägen i förhållande till föremålets mitt (kedja: varje kraft från den förras spets, resultanten under)
    let kx = 0, ky = 0;
    for (const p of pilar) {
      const v = p.g * Math.PI / 180, l = Math.max(16, L * (p.m || storst) / storst);   // 16: pilspetsens egen längd
      p.lodrat = Math.abs(Math.sin(v)) >= Math.abs(Math.cos(v));
      if (d.kedja) {
        if (p.resultant) { p.x1 = 0; p.y1 = bh + 26; } else { p.x1 = kx; p.y1 = ky; }
        p.x2 = p.x1 + l * Math.cos(v); p.y2 = p.y1 - l * Math.sin(v);
        if (!p.resultant) { kx = p.x2; ky = p.y2; }
        continue;
      }
      // vågrät resultant över mitten, så att etiketten inte hamnar på underlaget
      p.x1 = p.bredvid ? (p.lodrat ? -18 : 0) : 0; p.y1 = p.bredvid && !p.lodrat ? (d.rod ? bh + 18 : -18) : 0;   // röd: under föremålet
      p.x2 = p.x1 + l * Math.cos(v); p.y2 = p.y1 - l * Math.sin(v);
    }
    // i en kedja: föremålet och pilarna i mitten av figuren i sidled
    const xs = pilar.flatMap(p => [p.x1, p.x2]), cx = d.kedja ? B / 2 - (Math.min(0, ...xs) + Math.max(0, ...xs)) / 2 : 220;
    // överst: föremålets namn (över föremålet) eller pilarna; snörena går till taket ovanför de högsta pilarna
    const namnHojd = d.foremal && d.foremal.namn ? 8 + 15 : 0;
    const overst = Math.min(-bh - namnHojd, ...pilar.map(p => p.y2 - 6)) - (d.snoren ? 26 : 0), nederst = Math.max(bh + (d.underlag ? 13 : 0), ...pilar.map(p => Math.max(p.y1, p.y2) + 6) , ...(d.kedja ? pilar.filter(p => p.resultant).map(p => p.y1 + 24) : []));
    const cy = KANT - overst, H = Math.ceil(nederst - overst + 2 * KANT);

    let s = '';
    if (d.underlag) s += `<line class="fig-bord" x1="70" y1="${cy + bh}" x2="370" y2="${cy + bh}"/>` +
      Array.from({ length: 15 }, (_, i) => `<line class="fig-skraffer" x1="${80 + i * 20}" y1="${cy + bh + 1}" x2="${70 + i * 20}" y2="${cy + bh + 12}"/>`).join('');
    // snörena: från lampan längs varje kraft som drar uppåt, till taket
    if (d.snoren) {
      const tak = KANT + 6;
      s += `<line class="fig-bord" x1="40" y1="${tak}" x2="400" y2="${tak}"/>` +
        Array.from({ length: 18 }, (_, i) => `<line class="fig-skraffer" x1="${50 + i * 20}" y1="${tak - 1}" x2="${40 + i * 20}" y2="${tak - 12}"/>`).join('');
      pilar.filter(p => !p.resultant && Math.sin(p.g * Math.PI / 180) > 0.01).forEach(p => {
        const v = p.g * Math.PI / 180, t = (cy - tak) / Math.sin(v);
        s += `<line class="fig-snore" x1="${f(cx)}" y1="${f(cy)}" x2="${f(cx + t * Math.cos(v))}" y2="${tak}"/>`;
      });
    }
    if (!d.kedja) s += form === 'boll' ? `<circle class="fig-foremal" cx="${cx}" cy="${cy}" r="${bh + 2}"/>`
      : form === 'lampa' ? `<path class="fig-foremal" d="M${f(cx - 22)} ${f(cy + 6)} L${f(cx - 10)} ${f(cy - 12)} L${f(cx + 10)} ${f(cy - 12)} L${f(cx + 22)} ${f(cy + 6)} Z"/><circle class="fig-lampa" cx="${f(cx)}" cy="${f(cy + 10)}" r="7"/>`
      : `<rect class="fig-foremal" x="${cx - 32}" y="${cy - bh}" width="64" height="${2 * bh}" rx="2"/>`;
    if (d.foremal && d.foremal.namn) s += text(cx - 38, cy - bh - 8, d.foremal.namn, 'fig-text fig-hoger fig-dampad');
    for (const p of pilar) {
      const x1 = cx + p.x1, y1 = cy + p.y1, x2 = cx + p.x2, y2 = cy + p.y2;
      // komposanterna: en sned kraft, streckat först åt sidan och sedan uppåt/nedåt till spetsen
      if (d.komposanter && !p.resultant && p.g % 90) s += `<line class="fig-komposant" data-komposant="x" data-kraft="${pilar.indexOf(p)}" x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y1)}"/>` +
        `<line class="fig-komposant" data-komposant="y" data-kraft="${pilar.indexOf(p)}" x1="${f(x2)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`;
      s += `<g class="fig-kraft" data-storlek="${p.m || ''}" data-g="${p.g}"${p.resultant ? ' data-resultant=""' : ''}>` + pil(x1, y1, x2, y2, 9, p.klass) + '</g>';
      if ((d.komposanter || d.snoren) && p.g % 90) {
        const v = p.g * Math.PI / 180, tx = x2 + 14 * Math.cos(v), ty = y2 - 14 * Math.sin(v) + 5;
        s += text(tx, ty, p.namn, `fig-pil-text fig-halo ${Math.cos(v) > 0 ? 'fig-vanster' : 'fig-hoger'} ${p.klass}`);
      } else if (p.lodrat) {
        // bredvid spetsen, namnet över värdet; resultanten till vänster om pilen
        const ty = y2 < y1 ? y2 + 10 : y2 - 20, tx = p.bredvid ? x2 - 10 : x2 + 10, ank = p.bredvid ? 'fig-hoger' : 'fig-vanster';
        s += text(tx, ty, p.namn, `fig-pil-text ${ank} ${p.klass}`) + (varde(p.m) ? text(tx, ty + 17, varde(p.m), `fig-text ${ank}`) : '');
      } else if (d.kedja) {
        // i en kedja: namnet och värdet över pilens mitt (resultanten: under den)
        // (en pil som går bakåt i kedjan: namnet under den, så att det inte hamnar på den förra pilens namn)
        const ty = p.resultant ? y1 + 22 : Math.cos(p.g * Math.PI / 180) < 0 ? y1 + 20 : y1 - 10;
        s += `<text x="${f((x1 + x2) / 2)}" y="${f(ty)}" class="fig-pil-text fig-halo fig-mitt ${p.klass}">${esc(p.namn || '')}` +
          (varde(p.m) ? `${p.namn ? ' ' : ''}<tspan class="fig-varde">${esc(varde(p.m))}</tspan>` : '') + `</text>`;
      } else {
        // bortom spetsen, på en rad – men aldrig inne i föremålet, när pilen är kortare än det
        const hoger = x2 > x1, ut = Math.max(Math.abs(p.x2), form === 'boll' ? bh + 2 : 32);
        const tx = cx + (hoger ? ut + 8 : -ut - 8), ank = hoger ? 'fig-vanster' : 'fig-hoger';
        s += `<text x="${f(tx)}" y="${f(y2 + 5)}" class="fig-pil-text fig-halo ${ank} ${p.klass}">${esc(p.namn)}` +
          (varde(p.m) ? ` <tspan class="fig-varde">${esc(varde(p.m))}</tspan>` : '') + `</text>`;
      }
    }
    if (!d.kedja) s += `<circle class="fig-angrepp" cx="${cx}" cy="${f(cy)}" r="3.5"/>`;
    const vad = (d.foremal && d.foremal.namn) || (form === 'boll' ? 'en boll' : form === 'lampa' ? 'en lampa' : 'en låda');
    return { svg: svg(B, H, s).replace('<svg ', `<svg data-kraftpilar="${d.kedja ? 'kedja' : form}" `), beskrivning: d.beskrivning || `Kraftpilar på ${vad}${d.kedja ? ', satta efter varandra' : ''}: ${beskr.join(', ')}.` };
  });

  /* Skalmodell: atomer och joner med elektronerna i skal, eller isotoper med kärnans partiklar. Motorn räknar ut
     laddningen (protoner − elektroner), masstalet och formeln (O²⁻), och vilka elektroner som flyttar vid en övergång:
     har den andra atomen fler elektroner är de nya markerade i den; har den färre är de som lämnas markerade i den första.
     Utan rader: isotoper (alla har neutroner) visar protoner, neutroner och masstal; annars protoner, elektroner, laddning. */
  const UPPHOJD = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  const laddningstext = q => q === 0 ? 'oladdad' : `laddning ${q > 0 ? '+' : '−'}${Math.abs(q)}`;
  const formel = (sym, q) => !sym ? '' : sym + (q === 0 ? '' : (Math.abs(q) === 1 ? '' : String(Math.abs(q)).split('').map(c => UPPHOJD[c]).join('')) + (q > 0 ? '⁺' : '⁻'));
  const st = (n, en, fl) => `${n} ${n === 1 ? en : fl}`;
  Bok.figur('skalmodell', d => {
    const atomer = d.atomer || fel('skalmodell behöver atomer: [{namn, protoner, skal}]');
    if (!atomer.length || atomer.length > 3) fel('skalmodell ritar 1–3 atomer');
    atomer.forEach(a => {
      if (!(a.protoner > 0)) fel(`skalmodell: ”${a.namn}” saknar protoner`);
      if (!Array.isArray(a.skal) || !a.skal.length) fel(`skalmodell: ”${a.namn}” saknar skal`);
    });
    const summa = a => a.skal.reduce((x, y) => x + y, 0);
    const overgang = d.overgang && atomer.length === 2;
    const isotoper = atomer.every(a => a.neutroner != null);
    const rader = d.rader || (isotoper && !overgang ? ['protoner', 'neutroner', 'masstal'] : ['protoner', 'elektroner', 'laddning']);
    // Elektroner som flyttar: de yttersta som lämnas (i den första) eller de nya (i den andra), räknade ur antalet.
    const markerade = atomer.map(() => 0);
    if (overgang) {
      const diff = summa(atomer[1]) - summa(atomer[0]);
      if (diff > 0) markerade[1] = diff; else markerade[0] = -diff;
    }
    const R0 = 15, STEG = 17, RE = 4.6;
    const Rmax = Math.max(...atomer.map(a => R0 + STEG * a.skal.length));
    const B = 440, top = 30, cy = top + Rmax, n = atomer.length;
    const xs = n === 1 ? [220] : n === 2 ? [overgang ? 100 : 120, overgang ? 340 : 320] : [74, 220, 366];
    let s = '', beskr = [];
    atomer.forEach((a, i) => {
      const cx = xs[i], e = summa(a), q = a.protoner - e;
      s += text(cx, 18, a.namn, 'fig-rubrik');
      // skalen, inifrån och ut; de markerade elektronerna är de yttersta i det yttersta skalet
      a.skal.forEach((antal, k) => {
        const r = R0 + STEG * (k + 1);
        s += `<circle class="fig-skal" cx="${cx}" cy="${f(cy)}" r="${r}"/>`;
        const ytterst = k === a.skal.length - 1;
        for (let j = 0; j < antal; j++) {
          const v = -Math.PI / 2 + 2 * Math.PI * j / antal;
          const mark = ytterst && j >= antal - markerade[i];
          s += `<circle class="fig-elektron${mark ? ' fig-elektron-flyttar' : ''}" cx="${f(cx + r * Math.cos(v))}" cy="${f(cy + r * Math.sin(v))}" r="${mark ? RE + 1.2 : RE}"/>`;
        }
      });
      // kärnan: partiklarna när de är få och neutronerna är givna, annars laddningen
      const nukl = a.protoner + (a.neutroner || 0);
      if (a.neutroner != null && nukl <= 4) {
        const lagen = { 1: [[0, 0]], 2: [[-5.5, 0], [5.5, 0]], 3: [[-6, 4], [6, 4], [0, -6.5]], 4: [[-5.5, -5.5], [5.5, -5.5], [-5.5, 5.5], [5.5, 5.5]] }[nukl];
        lagen.forEach(([dx, dy], j) => { s += `<circle class="${j < a.protoner ? 'fig-proton' : 'fig-neutron'}" cx="${f(cx + dx)}" cy="${f(cy + dy)}" r="5.6"/>`; });
      } else {
        s += `<circle class="fig-karna" cx="${cx}" cy="${f(cy)}" r="${R0 - 2}"/>` + text(cx, cy + 5, `${a.protoner}+`, 'fig-text fig-mitt fig-karntext');
      }
      // raderna under atomen
      const vad = {
        protoner: st(a.protoner, 'proton', 'protoner'), elektroner: st(e, 'elektron', 'elektroner'),
        neutroner: a.neutroner != null ? st(a.neutroner, 'neutron', 'neutroner') : '',
        masstal: a.neutroner != null ? `masstal ${a.protoner + a.neutroner}` : '', laddning: laddningstext(q)
      };
      let y = cy + Rmax + 30;
      const fml = formel(a.symbol, q);
      if (fml) { s += text(cx, y, fml, 'fig-text fig-stor fig-mitt'); y += 22; }
      rader.forEach(r => { if (vad[r]) { s += text(cx, y, vad[r], 'fig-text fig-mitt' + (r === 'laddning' || r === 'masstal' ? ' fig-utfall' : '')); y += 19; } });
      beskr.push(`${a.namn}${fml ? ' ' + fml : ''}: ${rader.map(r => vad[r]).filter(Boolean).join(', ')}, elektronerna i skalen ${a.skal.join(' + ')}.`);
    });
    let hojd = cy + Rmax + 30 + (atomer.some(a => a.symbol) ? 22 : 0) + rader.length * 19;
    if (overgang) {
      // pilen mellan atomerna, texten över den på två rader
      const ord = String(d.overgang).split(' '), mitt = Math.max(1, ord.length - 2);   // ”tar upp” / ”2 elektroner”
      s += pil(xs[0] + Rmax + 12, cy, xs[1] - Rmax - 16, cy, 8);
      s += text(220, cy - 30, ord.slice(0, mitt).join(' '), 'fig-pil-text') + text(220, cy - 12, ord.slice(mitt).join(' '), 'fig-pil-text');
      beskr.splice(1, 0, `Pil: ${d.overgang}; de elektroner som flyttar är markerade.`);
    }
    // förklaring av prickarna, längst ner
    const nyckel = [['fig-elektron', 'elektron']];
    if (overgang) nyckel.push(['fig-elektron fig-elektron-flyttar', 'elektron som flyttar']);
    if (atomer.some(a => a.neutroner != null && a.protoner + a.neutroner <= 4)) nyckel.unshift(['fig-proton', 'proton'], ['fig-neutron', 'neutron']);
    hojd += 6;
    const bredd = nyckel.reduce((x, [, t]) => x + 22 + t.length * 7.4 + 18, -18);
    let nx = 220 - bredd / 2;
    nyckel.forEach(([k, t]) => {
      s += `<circle class="${k}" cx="${f(nx + 6)}" cy="${f(hojd)}" r="5.2"/>` + text(nx + 17, hojd + 5, t, 'fig-text fig-vanster fig-dampad fig-liten');
      nx += 22 + t.length * 7.4 + 18;
    });
    hojd += 14;
    return { svg: svg(B, Math.ceil(hojd), s), beskrivning: 'Skalmodell. ' + beskr.join(' ') };
  });

  /* Rörelsespår (prickmodellen): en prick där föremålet är, med lika lång tid mellan prickarna – avståndet visar
     rörelsen. Under prickarna en stråle med pilspets åt höger: rörelseriktningen. Motorn räknar ut lägena:
     likformig lika stora avstånd; accelererande avstånd som växer jämnt (1, 2, 3 …); retarderad avstånd som krymper
     jämnt, tills de två sista nästan ligger ihop; olikformig ett fast ojämnt mönster (kort, långt, mellan, kort, långt …). */
  const RORELSE = {
    likformig: ['lika stora', 'likformig'], olikformig: ['olika långa', 'olikformig'],
    accelererande: ['växer', 'accelererande'], retarderad: ['krymper', 'retarderad']
  };
  const ANTAL = { 4: 'fyra', 5: 'fem', 6: 'sex', 7: 'sju', 8: 'åtta' };
  Bok.figur('rorelsespar', d => {
    const typ = d.rorelse, n = d.prickar == null ? 6 : d.prickar;
    if (!RORELSE[typ]) fel(`rorelsespar: okänd rörelse ”${typ}” (likformig, olikformig, accelererande eller retarderad)`);
    if (!ANTAL[n]) fel('rorelsespar ritar 4–8 prickar');
    const R = 6.5, X0 = 22, SPANN = 374, NARA = 2.6 * R;          // NARA: de två sista vid retardation, nästan ihop
    const m = n - 1;
    const avstand = typ === 'likformig' ? Array(m).fill(1)
      : typ === 'accelererande' ? Array.from({ length: m }, (_, i) => i + 1)
      : typ === 'olikformig' ? Array.from({ length: m }, (_, i) => [1, 3, 2][i % 3])
      : null;
    let steg;
    if (avstand) { const sum = avstand.reduce((a, b) => a + b, 0); steg = avstand.map(a => a * SPANN / sum); }
    else {
      // retarderad: avstånden minskar med lika mycket varje gång, från det största till NARA
      const forst = 2 * SPANN / m - NARA, minskar = (forst - NARA) / (m - 1);
      steg = Array.from({ length: m }, (_, i) => forst - i * minskar);
    }
    const xs = [X0];
    steg.forEach(a => xs.push(xs[xs.length - 1] + a));
    const yP = 16, yS = 40;
    let s = xs.map(x => `<circle class="fig-prick" cx="${f(x)}" cy="${yP}" r="${R}"/>`).join('');
    s += pil(6, yS, 434, yS, 8, 'fig-strale');
    let hojd = yS + 12;
    if (d.tider) {
      // tiderna under strålen; ligger två prickar för tätt för etiketterna hamnar den andra en rad längre ner
      let rad = 0;
      xs.forEach((x, i) => {
        rad = i && x - xs[i - 1] < 30 && rad === 0 ? 1 : 0;
        s += text(x, yS + 26 + rad * 18, `${i} s`, 'fig-text fig-mitt fig-dampad fig-liten');
        hojd = Math.max(hojd, yS + 32 + rad * 18);
      });
    }
    const [hur, namn] = RORELSE[typ];
    const beskr = `Rörelsespår: ${ANTAL[n]} prickar med lika lång tid emellan, avstånden ${hur === 'växer' || hur === 'krymper' ? hur : 'är ' + hur} – ${namn} rörelse.` +
      (d.tider ? ` Under prickarna står tiderna 0 s till ${m} s.` : '') + ' En pil visar rörelseriktningen åt höger.';
    return { svg: `<svg viewBox="0 0 440 ${Math.ceil(hojd)}" xmlns="http://www.w3.org/2000/svg" data-rorelse="${typ}">${s}</svg>`, beskrivning: beskr };
  });

  /* Kraftpar (Newtons tredje lag): två föremål, en kraft på vardera – lika långa pilar åt motsatt håll, var och en
     från sitt föremåls mitt (angreppspunkten). drag: ett snöre mellan föremålen, pilarna pekar mot det andra föremålet;
     knuff: föremålen ligger an mot varandra, pilarna pekar ifrån varandra. Under varje pil vilket föremål kraften
     verkar på (krafter[]), med värdet över pilen när storlek är given. Föremålen är neutrala rektanglar med namn. */
  const textbredd = (s, px) => String(s).length * px * 0.53;          // uppskattad bredd i figurens enheter
  Bok.figur('kraftpar', d => {
    const satt = d.satt;
    if (satt !== 'drag' && satt !== 'knuff') fel(`kraftpar: okänt sätt ”${satt}” (drag eller knuff)`);
    const foremal = d.foremal, krafter = d.krafter;
    if (!Array.isArray(foremal) || foremal.length !== 2 || !foremal.every(x => x && x.namn)) fel('kraftpar behöver två föremål: [{namn}, {namn}]');
    if (!Array.isArray(krafter) || krafter.length !== 2) fel('kraftpar behöver två krafter: [kraften på föremål 1, kraften på föremål 2]');
    const enhet = d.enhet || 'N', varde = d.storlek != null && d.varden !== false ? `${tal(d.storlek)} ${enhet}` : '';
    // Föremålen är så breda att namnet ryms över dem (högst 150). drag: föremålen ute vid kanterna med snöret emellan,
    // pilarna når nästan fram till varandra; knuff: föremålen mot varandra mitt i figuren, pilarna ut mot kanterna.
    const nb = foremal.map(x => textbredd(x.namn, 16.5));
    const BF = Math.min(150, Math.max(76, ...nb.map(b => b + 12))), bh = 24, cy = 56;
    const xs = satt === 'drag' ? [BF / 2 + 8, 440 - BF / 2 - 8] : [220 - BF / 2, 220 + BF / 2];
    const L = satt === 'drag' ? (xs[1] - xs[0]) / 2 - 18 : Math.min(Math.max(110, BF / 2 + 50), xs[0] - 14);
    const mot = satt === 'drag' ? [1, -1] : [-1, 1];                   // pilens riktning: +1 åt höger
    let s = '';
    if (satt === 'drag') s += `<line class="fig-snore" x1="${xs[0] + BF / 2}" y1="${cy}" x2="${xs[1] - BF / 2}" y2="${cy}"/>`;
    xs.forEach(x => { s += `<rect class="fig-foremal" x="${f(x - BF / 2)}" y="${cy - bh}" width="${f(BF)}" height="${2 * bh}" rx="2"/>`; });
    // namnen över föremålen; är de för långa för det står de utåt från mitten
    const krock = xs[0] + nb[0] / 2 + 8 > xs[1] - nb[1] / 2;
    foremal.forEach((x, i) => {
      s += krock ? text(i ? 224 : 216, cy - bh - 10, x.namn, 'fig-text ' + (i ? 'fig-vanster' : 'fig-hoger'))
        : text(xs[i], cy - bh - 10, x.namn, 'fig-text fig-mitt');
    });
    // pilarna, från mitten; etiketterna under pilarna – eller under föremålen, eller åt var sitt håll från figurens
    // mitt, när de annars står för tätt
    const spets = xs.map((x, i) => x + mot[i] * L);
    const lb = krafter.map(k => textbredd(k, 15.5));
    const ryms = lx => lx[0] + lb[0] / 2 + 8 <= lx[1] - lb[1] / 2 && lx[0] - lb[0] / 2 >= 2 && lx[1] + lb[1] / 2 <= 438;
    const lx = [xs.map((x, i) => (x + spets[i]) / 2), xs].find(ryms);
    xs.forEach((x, i) => {
      s += `<g class="fig-kraftpar-pil" data-foremal="${i + 1}">${pil(x, cy, spets[i], cy, 9)}</g>`;
      const ey = cy + bh + 22;
      s += !lx ? text(i ? 224 : 216, ey, krafter[i], 'fig-pil-text ' + (i ? 'fig-vanster' : 'fig-hoger'))
        : text(lx[i], ey, krafter[i], 'fig-pil-text');
      // värdet över den del av pilen som är utanför föremålet
      if (varde) s += text((x + mot[i] * BF / 2 + spets[i]) / 2, cy - 9, varde, 'fig-text fig-mitt fig-halo');
    });
    xs.forEach(x => { s += `<circle class="fig-angrepp" cx="${x}" cy="${cy}" r="3.5"/>`; });
    const H = cy + bh + 32;
    const riktning = m => m > 0 ? 'åt höger' : 'åt vänster';
    // den andra kraften mitt i meningen: ”Blocket drar …” → ”blocket drar …” (men ”B drar …” står kvar)
    const andra = String(krafter[1]).replace(/^(\p{Lu})(?=\p{Ll})/u, c => c.toLowerCase());
    const beskr = `Kraftpar: ${foremal[0].namn} och ${foremal[1].namn} ${satt === 'drag' ? 'är förbundna med ett snöre' : 'ligger an mot varandra'}. ` +
      `${krafter[0]} ${riktning(mot[0])} och ${andra} ${riktning(mot[1])}, lika stora krafter${varde ? ', ' + varde + ',' : ''} på två olika föremål.`;
    return { svg: `<svg viewBox="0 0 440 ${H}" xmlns="http://www.w3.org/2000/svg" data-kraftpar="${satt}">${s}</svg>`, beskrivning: beskr };
  });

  /* Friktion – ytorna i förstoring. Överst blocket på bordet som det ser ut, med kontaktytan i en liten streckad ruta;
     nederst samma ställe förstorat: blockets undersida och bordets yta har oregelbundna toppar och gropar som hakar i
     varandra. Mönstret är detsamma varje gång (fast frö); ytor avgör hur ojämnt det ritas. Pilarna verkar på blocket:
     draget framåt (åt höger) och friktionen bakåt, lika långa. Strecklinjerna från rutan går till förstoringens övre
     hörn; rubriken I förstoring står mitt emellan dem, så att de aldrig korsar den. Med andra namn än Block och Bord
     blir beskrivningen enklare ("Låda på hylla.") – skriv då gärna en egen beskrivning i data. */
  const YTOR = { normal: [4.5, 9.5, 1, 'små'], grov: [7.5, 13, 1.3, 'tydliga'], slat: [1.2, 3, 0.8, 'mycket små'] };
  const ytorNamn = y => String(y || 'normal').replace('ä', 'a');
  // De två ytorna i förstoringen Z (föremålets undersida och underlagets yta), kring höjden Y0. Samma mönster varje gång.
  function ytorna(Z, Y0, ytor) {
    const [amin, amax, vidd] = YTOR[ytor];
    const sl = slump(11), yta = [], topp = [];
    let forra = null;
    for (let x = Z.x, upp = true; ; upp = !upp) {
      const y = Y0 + (upp ? -1 : 1) * (amin + (sl() + 0.5) * (amax - amin));
      if (forra) { const t = 0.35 + (sl() + 0.5) * 0.3; yta.push([forra[0] + (x - forra[0]) * t, forra[1] + (y - forra[1]) * t + sl() * (amax - amin) * 0.6]); topp.push(false); }
      yta.push([x, y]); topp.push(upp); forra = [x, y];
      if (x >= Z.x + Z.b) break;
      x = Math.min(Z.x + Z.b, x + (8 + (sl() + 0.5) * 12) * vidd);
    }
    const undersida = yta.map(([x, y], i) => { const r = sl(); return [x, y - (topp[i] && r < -0.1 ? 0.6 : 1.8 + (r + 0.5) * 2.4)]; });
    const pts = l => l.map(([x, y]) => `${f(x)},${f(y)}`).join(' ');
    return `<polygon class="fig-yta-foremal" points="${Z.x},${Z.y} ${Z.x + Z.b},${Z.y} ${pts(undersida.slice().reverse())}"/>` +
      `<polygon class="fig-yta-underlag" points="${pts(yta)} ${Z.x + Z.b},${Z.y + Z.h} ${Z.x},${Z.y + Z.h}"/>` +
      `<polyline class="fig-ytlinje" points="${pts(undersida)}"/><polyline class="fig-ytlinje fig-ytlinje-underlag" points="${pts(yta)}"/>` +
      `<rect class="fig-lupp" x="${Z.x}" y="${Z.y}" width="${Z.b}" height="${Z.h}"/>`;
  }
  Bok.figur('friktion', d => {
    // paneler: två (eller fler) förstoringar bredvid varandra, var och en med rubrik och egna ytor – t.ex. däcket mot
    // torr asfalt och mot blank is (III B Djupdykning). Bara förstoringen, inga pilar.
    if (d.paneler) {
      const p = d.paneler;
      if (!Array.isArray(p) || p.length < 2 || p.length > 3) fel('friktion: paneler är en lista med 2–3 paneler');
      const gap = 24, b = (440 - gap * (p.length - 1)) / p.length, Z0 = { y: 30, h: 78 };
      let s = '';
      p.forEach((q, i) => {
        const ytor = ytorNamn(q.ytor);
        if (!YTOR[ytor]) fel(`friktion: okända ytor ”${q.ytor}” (normal, grov eller slat)`);
        const Z = { x: f(i * (b + gap)), y: Z0.y, b: f(b), h: Z0.h };
        s += `<g class="fig-friktion-panel" data-ytor="${ytor}">` + text(Z.x + Z.b / 2, 18, q.rubrik || '', 'fig-rubrik') + ytorna(Z, Z.y + 46, ytor) +
          text(Z.x + Z.b - 6, Z.y + 18, q.foremal || 'Block', 'fig-text fig-hoger fig-dampad') +
          text(Z.x + Z.b - 6, Z.y + Z.h - 6, q.underlag || 'Bord', 'fig-text fig-hoger fig-dampad') + '</g>';
      });
      const beskr = 'Förstorade ytor: ' + p.map(q => `${q.rubrik ? q.rubrik + ' – ' : ''}${(q.foremal || 'Block').toLowerCase()} mot ${(q.underlag || 'Bord').toLowerCase()}, ${YTOR[ytorNamn(q.ytor)][3]} toppar och gropar`).join('; ') + '.';
      return { svg: `<svg viewBox="0 0 440 ${Z0.y + Z0.h + 6}" xmlns="http://www.w3.org/2000/svg" data-friktion-paneler="${p.length}">${s}</svg>`, beskrivning: beskr };
    }
    const ytor = ytorNamn(d.ytor);
    const [, , , hur] = YTOR[ytor] || fel(`friktion: okända ytor ”${d.ytor}” (normal, grov eller slat)`);
    const foremal = d.foremal || 'Block', underlag = d.underlag || 'Bord', pilar = d.pilar !== false;
    // Så ser det ut: blocket (76 × 30) på bordslinjen med namnet till vänster, kontaktytan i rutan. Figuren hålls låg (186), så att den får
    // stå i textspaltens bredd (en figur är högst en knapp tredjedel av sidan)
    const BORD = 56, RUTA = { x: 200, y: 50, b: 40, h: 18 };
    // I förstoring: utsnittet, med ytorna kring Y0
    const Z = { x: 20, y: 104, b: 400, h: 78 }, Y0 = 150;
    let s = text(220, 17, 'Så ser det ut', 'fig-rubrik');
    s += `<line class="fig-bord" x1="70" y1="${BORD}" x2="370" y2="${BORD}"/>` +
      Array.from({ length: 15 }, (_, i) => `<line class="fig-skraffer" x1="${80 + i * 20}" y1="${BORD + 1}" x2="${72 + i * 20}" y2="${BORD + 10}"/>`).join('');
    s += `<rect class="fig-foremal" x="182" y="${BORD - 30}" width="76" height="30" rx="2"/>`;
    s += text(176, BORD - 10, foremal, 'fig-text fig-hoger fig-dampad') + text(380, BORD + 6, underlag, 'fig-text fig-vanster fig-dampad');
    s += `<rect class="fig-lupp" x="${RUTA.x}" y="${RUTA.y}" width="${RUTA.b}" height="${RUTA.h}"/>`;
    s += [[RUTA.x, Z.x], [RUTA.x + RUTA.b, Z.x + Z.b]].map(([a, b]) => `<line class="fig-lupp fig-lupplinje" x1="${a}" y1="${RUTA.y + RUTA.h}" x2="${b}" y2="${Z.y}"/>`).join('');
    s += text(220, Z.y - 8, 'I förstoring', 'fig-rubrik');
    // bordets yta: växelvis topp och grop med olika höjd och bredd, och en ojämn punkt på varje sluttning; blockets
    // undersida följer den en bit ovanför och ligger an mot några av topparna – blockets toppar står ner i gropar
    s += ytorna(Z, Y0, ytor);
    s += text(Z.x + Z.b - 8, Z.y + 20, foremal, 'fig-text fig-hoger fig-dampad') + text(Z.x + Z.b - 8, Z.y + Z.h - 6, underlag, 'fig-text fig-hoger fig-dampad');
    if (pilar) {
      // från blockets mitt i utsnittet, lika långa åt var sitt håll; etiketterna bortom spetsarna
      const cx = 220, cy = Z.y + 18, L = 90;
      s += `<g class="fig-friktion-pil" data-kraft="drag">${pil(cx, cy, cx + L, cy, 9)}</g><g class="fig-friktion-pil" data-kraft="friktion">${pil(cx, cy, cx - L, cy, 9)}</g>`;
      s += text(cx + L + 8, cy + 5, 'Drag', 'fig-pil-text fig-halo fig-vanster') + text(cx - L - 8, cy + 5, 'Friktion', 'fig-pil-text fig-halo fig-hoger');
      s += `<circle class="fig-angrepp" cx="${cx}" cy="${cy}" r="3.5"/>`;
    }
    const vanlig = foremal === 'Block' && underlag === 'Bord';
    const beskr = `${vanlig ? 'Ett block på ett bord' : `${foremal} på ${underlag.toLowerCase()}`}. I förstoring syns att båda ytorna har ${hur} toppar och gropar som hakar i varandra.` +
      (pilar ? ` Draget pekar framåt och friktionen bakåt på ${vanlig ? 'blocket' : 'föremålet'}.` : '');
    return { svg: `<svg viewBox="0 0 440 ${Z.y + Z.h + 6}" xmlns="http://www.w3.org/2000/svg" data-friktion="${ytor}">${s}</svg>`, beskrivning: beskr };
  });

  /* Bildpilar: ett foto med kraftpilar ritade ovanpå. Fotot visar den verkliga situationen; pilarna ritas ur data
     (fotots pixlar), så att de alltid blir rätt – samma längd när krafterna är lika (lika), rätt riktning, på rätt
     föremål. Pilarna är röda med vit kant (fysikens guld försvinner mot trä), med en prick i angreppspunkten och
     etiketten i samma röda färg. Figuren ritas i 440 enheters bredd, så att texten blir lika stor som i de andra
     figurerna, och får vara upp till 45 % av sidhöjden (bok.css). Fotot kan inte beskrivas ur data: beskrivning krävs.
     Fotot görs utan pilar; pilarna ritas alltid här. */
  Bok.figur('bildpilar', d => {
    if (!d.bild || !(d.bredd > 0) || !(d.hojd > 0)) fel('bildpilar behöver bild, bredd och hojd (fotots pixlar)');
    if (!d.beskrivning) fel('bildpilar behöver en beskrivning – fotot kan inte beskrivas ur data');
    // prickar: lägesmarkeringar (som i rörelsespåren) med lika lång tid emellan, och stråle: riktningen under dem.
    // Utan pilar går det också, om prickarna finns (curlingstenen i III A Djupdykning).
    const prickar = d.prickar || [], strale = d.stråle || d.strale || null;
    const pilar = d.pilar || (prickar.length ? [] : fel('bildpilar behöver pilar: [{namn, fran: [x, y], till: [x, y], etikett?}] (eller prickar)'));
    const [ux, uy, ub, uh] = d.utsnitt || [0, 0, d.bredd, d.hojd];
    if (ux < 0 || uy < 0 || ub <= 0 || uh <= 0 || ux + ub > d.bredd || uy + uh > d.hojd) fel('bildpilar: utsnittet går utanför bilden');
    const inne = ([x, y]) => x >= ux && x <= ux + ub && y >= uy && y <= uy + uh;
    pilar.forEach(p => { if (!p.fran || !p.till || !inne(p.fran) || !inne(p.till)) fel(`bildpilar: pilen ”${p.namn}” går utanför utsnittet`); });
    const langd = p => Math.hypot(p.till[0] - p.fran[0], p.till[1] - p.fran[1]);
    const lika = d.lika || [];
    lika.forEach(([a, b]) => {
      if (!pilar[a] || !pilar[b]) fel(`bildpilar: lika [${a}, ${b}] pekar på en pil som inte finns`);
      if (Math.abs(langd(pilar[a]) - langd(pilar[b])) > 1) fel(`bildpilar: ”${pilar[a].namn}” och ”${pilar[b].namn}” ska vara lika långa`);
    });
    const k = 440 / ub, H = f(uh * k), X = x => (x - ux) * k, Y = y => (y - uy) * k;
    let s = `<image href="${esc(d.bild)}" x="${f(-ux * k)}" y="${f(-uy * k)}" width="${f(d.bredd * k)}" height="${f(d.hojd * k)}" preserveAspectRatio="none"/>`;
    // lägesmarkeringarna och strålen under dem, i pilarnas röda färg med vit kant
    prickar.forEach(p => { if (!Array.isArray(p) || !inne(p)) fel('bildpilar: en prick går utanför utsnittet'); });
    if (strale && (!strale.fran || !strale.till || !inne(strale.fran) || !inne(strale.till))) fel('bildpilar: strålen går utanför utsnittet');
    if (strale) {
      const [x1, y1, x2, y2] = [X(strale.fran[0]), Y(strale.fran[1]), X(strale.till[0]), Y(strale.till[1])];
      s += `<g class="fig-bildpil-strale">${pil(x1, y1, x2, y2, 9, 'fig-bildpil-kant')}${pil(x1, y1, x2, y2, 9, 'fig-bildpil-rod')}</g>`;
    }
    s += prickar.map(([x, y]) => `<circle class="fig-bildpil-lage" cx="${f(X(x))}" cy="${f(Y(y))}" r="6"/>`).join('');
    pilar.forEach((p, i) => {
      const [x1, y1, x2, y2] = [X(p.fran[0]), Y(p.fran[1]), X(p.till[0]), Y(p.till[1])];
      // först den vita kanten, sedan den röda pilen; pricken i angreppspunkten
      s += `<g class="fig-bildpil" data-pil="${i}">${pil(x1, y1, x2, y2, 10, 'fig-bildpil-kant')}${pil(x1, y1, x2, y2, 10, 'fig-bildpil-rod')}` +
        `<circle class="fig-bildpil-prick" cx="${f(x1)}" cy="${f(y1)}" r="4.5"/></g>`;
    });
    // etiketterna sist, så att ingen pil går över en etikett; utan etikett: över pilens mitt
    pilar.forEach((p, i) => {
      const [ex, ey] = p.etikett ? [X(p.etikett[0]), Y(p.etikett[1])] : [(X(p.fran[0]) + X(p.till[0])) / 2, (Y(p.fran[1]) + Y(p.till[1])) / 2 - 12];
      s += `<text x="${f(ex)}" y="${f(ey)}" class="fig-bildpil-text" data-pil="${i}">${esc(p.namn)}</text>`;
    });
    const data = esc(JSON.stringify(lika)).replace(/"/g, '&quot;');
    // maxhojd: en lägre maxhöjd för just den här bilden (andel av sidhöjden, 0,2–0,45; annars 0,45 i bok.css), t.ex.
    // ett stående foto som annars inte ryms på samma sida som stycket före (III D, BILD M: 0,43)
    if (d.maxhojd != null && !(d.maxhojd >= 0.2 && d.maxhojd <= 0.45)) fel('bildpilar: maxhojd ska vara mellan 0.2 och 0.45 (andel av sidhöjden)');
    const stil = d.maxhojd != null ? ` style="max-height: calc(var(--sh) * ${d.maxhojd})" data-maxhojd="${d.maxhojd}"` : '';
    return { svg: `<svg viewBox="0 0 440 ${H}" xmlns="http://www.w3.org/2000/svg" data-bildpilar="${pilar.length}" data-lika="${data}"${prickar.length ? ` data-prickar="${prickar.length}"` : ''}${stil}>${s}</svg>`, beskrivning: d.beskrivning };
  });

  /* Stoppsträckan (III B Djupdykning, 2026-11-04): liggande staplar, en rad per fart, varje stapel i två delar –
   * reaktionssträckan (ljus) och bromssträckan (mörk). Fartens namn till vänster, stoppsträckan (summan) till höger,
   * en gemensam skala under staplarna (var tionde enhet, upp till den längsta stapeln) och förklaringen en gång.
   * markering: en streckad lodrät linje genom alla rader vid ett värde på skalan, med en etikett överst. */
  Bok.figur('stoppstracka', d => {
    const rader = d.rader, enhet = d.enhet || 'm', m = d.markering || null;
    if (!Array.isArray(rader) || !rader.length || rader.length > 5) fel('stoppstracka behöver rader: [{fart, reaktion, broms}] (1–5)');
    rader.forEach(r => { if (!(r.reaktion >= 0) || !(r.broms >= 0) || !r.fart) fel('stoppstracka: varje rad behöver fart, reaktion och broms'); });
    const summa = r => Math.round((r.reaktion + r.broms) * 100) / 100, max = Math.max(...rader.map(summa), m ? m.varde : 0);
    const X0 = 76, XS = 440 - 52, k = (XS - X0) / max, X = v => X0 + v * k;
    const TOPP = m ? 28 : 8, RAD = 30, BH = 16, yA = TOPP + rader.length * RAD + 2;
    const hart = v => `${tal(v)} ${enhet}`;                          // hårt mellanslag mellan tal och enhet
    let s = '';
    rader.forEach((r, i) => {
      const y = TOPP + i * RAD;
      s += `<g class="fig-stopp-rad" data-reaktion="${r.reaktion}" data-broms="${r.broms}">` +
        text(X0 - 8, y + BH - 3, r.fart, 'fig-text fig-hoger') +
        `<rect class="fig-stopp-reaktion" x="${X0}" y="${y}" width="${f(r.reaktion * k)}" height="${BH}"/>` +
        `<rect class="fig-stopp-broms" x="${f(X(r.reaktion))}" y="${y}" width="${f(r.broms * k)}" height="${BH}"/>` +
        text(X(summa(r)) + 6, y + BH - 3, hart(summa(r)), 'fig-text fig-vanster fig-stopp-total') + '</g>';
    });
    // skalan: var tionde enhet upp till den längsta stapeln
    s += `<line class="fig-bord" x1="${X0}" y1="${yA}" x2="${f(X(max))}" y2="${yA}"/>`;
    for (let v = 0; v <= max + 1e-9; v += 10) {
      s += `<line class="fig-bord" x1="${f(X(v))}" y1="${yA}" x2="${f(X(v))}" y2="${yA + 5}"/>` +
        text(X(v), yA + 20, v + 10 > max ? hart(v) : tal(v), 'fig-text fig-mitt fig-dampad fig-liten fig-stopp-skala');
    }
    if (m) {
      s += `<line class="fig-stopp-markering" data-varde="${m.varde}" x1="${f(X(m.varde))}" y1="${TOPP - 8}" x2="${f(X(m.varde))}" y2="${yA}"/>` +
        text(X(m.varde), TOPP - 12, m.text || '', 'fig-text fig-mitt fig-stopp-markering-text');
    }
    // förklaringen en gång, under skalan
    const yF = yA + 40;
    s += `<rect class="fig-stopp-reaktion" x="${X0}" y="${yF - 10}" width="14" height="10"/>` + text(X0 + 20, yF, 'reaktionssträcka', 'fig-text fig-vanster fig-liten') +
      `<rect class="fig-stopp-broms" x="${X0 + 150}" y="${yF - 10}" width="14" height="10"/>` + text(X0 + 170, yF, 'bromssträcka', 'fig-text fig-vanster fig-liten');
    const beskr = d.beskrivning || `Liggande staplar för ${rader.map(r => r.fart).join(', ').replace(/, ([^,]*)$/, ' och $1')}. Varje stapel består av reaktionssträcka och bromssträcka: ` +
      rader.map(r => `${tal(r.reaktion)} + ${tal(r.broms)} = ${hart(summa(r))}`).join(', ').replace(/, ([^,]*)$/, ' och $1') + '.' +
      (m ? ` En streckad linje vid ${hart(m.varde)}${m.text ? ' visar ' + m.text : ''}.` : '');
    return { svg: `<svg viewBox="0 0 440 ${yF + 6}" xmlns="http://www.w3.org/2000/svg" data-stoppstracka="${rader.length}" data-x0="${X0}" data-k="${k}">${s}</svg>`, beskrivning: beskr };
  });

  /* Den fallande hissen (III D Djupdykning, 2026-11-04): två hissar i genomskärning bredvid varandra. Till vänster står
   * hissen still: kabeln, en person på en våg som visar 70 kg, tyngdkraften nedåt och lika stor normalkraft uppåt
   * (kraftpilarnas stil, utan värden), bollen på golvet. Till höger faller hissen fritt: kabeln avklippt, vågen visar 0,
   * bara tyngdkraften, bollen svävar och en stråle utanför korgen visar att hela hissen faller. */
  const pilBoje = (pts, klass = '') => {                 // en böjd pil: en bana (path) och en spets i banans riktning
    const n = pts.length, [x2, y2] = pts[n - 1], [x1, y1] = pts[n - 2];
    const a = Math.atan2(y2 - y1, x2 - x1), c = Math.cos(a), sn = Math.sin(a), sp = 8, bx = x2 - sp * 1.4 * c, by = y2 - sp * 1.4 * sn, w = sp * 0.75;
    const d = n === 3 ? `M${f(pts[0][0])} ${f(pts[0][1])}Q${f(x1)} ${f(y1)} ${f(bx)} ${f(by)}`
      : `M${f(pts[0][0])} ${f(pts[0][1])}C${f(pts[1][0])} ${f(pts[1][1])} ${f(x1)} ${f(y1)} ${f(bx)} ${f(by)}`;
    return `<path class="fig-pil ${klass}" d="${d}"/><polygon class="fig-pilspets ${klass}" points="${f(x2)},${f(y2)} ${f(bx - w * sn)},${f(by + w * c)} ${f(bx + w * sn)},${f(by - w * c)}"/>`;
  };
  Bok.figur('fallande_hiss', d => {
    const L = 42, GOLV = 178;
    const panel = (px, faller) => {
      const cx = px + 40, cy = 124;                       // personen; kraftpilarna utgår från (cx + 14, cy)
      let s = `<g class="fig-hiss" data-faller="${faller}">` +
        text(px + 98, 14, faller ? 'Hissen faller fritt' : 'Hissen står still', 'fig-text fig-mitt fig-hiss-rubrik');
      // kabeln – eller den avklippta stumpen
      // (den avklippta: en kort lodrät stump från taket med en sned, trasig ände och några lösa trådar)
      const kx = px + 98;
      s += faller ? `<polygon class="fig-hiss-stump" points="${kx - 2},34 ${kx - 2},25 ${kx - 0.7},26.5 ${kx + 0.4},23 ${kx + 1.2},24 ${kx + 2},20.5 ${kx + 2},34"/>` +
          `<path class="fig-hiss-fransar" d="M${kx - 1.4} 25.6L${kx - 4.5} 22M${kx + 0.4} 23.4L${kx - 0.4} 19M${kx + 2} 21L${kx + 5} 17.5"/>`
        : `<line class="fig-hiss-kabel" x1="${kx}" y1="20" x2="${kx}" y2="34" style="stroke-width: 4"/>`;
      s += `<rect class="fig-hiss-korg" x="${px + 8}" y="34" width="180" height="${GOLV - 34}"/>`;
      // vågen med sin display, och personen på den
      s += `<rect class="fig-foremal" x="${cx - 24}" y="${GOLV - 16}" width="48" height="16"/>` +
        text(cx, GOLV - 3.5, faller ? '0' : '70 kg', 'fig-text fig-mitt fig-liten fig-hiss-display');
      const fot = GOLV - 16;
      s += `<g class="fig-gubbe"><line x1="${cx - 7}" y1="${fot}" x2="${cx}" y2="${fot - 24}"/><line x1="${cx + 7}" y1="${fot}" x2="${cx}" y2="${fot - 24}"/>` +
        `<line x1="${cx}" y1="${fot - 24}" x2="${cx}" y2="${fot - 54}"/><line x1="${cx}" y1="${fot - 46}" x2="${cx - 12}" y2="${fot - 30}"/>` +
        `<line x1="${cx}" y1="${fot - 46}" x2="${cx + 12}" y2="${fot - 30}"/><circle cx="${cx}" cy="${fot - 63}" r="8.5"/></g>`;
      // kraftpilarna från en punkt bredvid personen, med namnen till höger
      const ax = cx + 16;
      s += `<g class="fig-hiss-pil" data-kraft="tyngd">${pil(ax, cy, ax, cy + L, 8)}</g>` + text(ax + 8, cy + L - 2, 'tyngdkraft', 'fig-pil-text fig-vanster');
      if (!faller) s += `<g class="fig-hiss-pil" data-kraft="normal">${pil(ax, cy, ax, cy - L, 8)}</g>` + text(ax + 8, cy - L + 10, 'normalkraft', 'fig-pil-text fig-vanster');
      s += `<circle class="fig-angrepp" cx="${ax}" cy="${cy}" r="3.5"/>`;
      // bollen: på golvet – eller svävande bredvid personen
      s += `<circle class="fig-partikel" cx="${px + 160}" cy="${faller ? 112 : GOLV - 7}" r="7"/>`;
      // hela hissen faller: en stråle utanför korgen
      if (faller) s += pil(px + 196, 56, px + 196, 168, 7, 'fig-strale');
      return s + '</g>';
    };
    // Två paneler (III D massa, 2026-11-05): var hiss i en egen svg, så att de kan staplas på mobilen. På datorn står de
    // bredvid varandra precis som förut (den högra panelen visar figurens enheter 220–440).
    const beskr = d.beskrivning || 'Två hissar. I den som står still står en person på en våg som visar 70 kg; tyngdkraften drar nedåt och golvet trycker uppåt lika mycket. I den som faller fritt finns ingen kabel, vågen visar 0, bollen svävar och bara tyngdkraften verkar – nedåt.';
    return { svg: paneler('fallande_hiss', GOLV + 4, [panel(0, false), panel(240, true)], 'data-fallande-hiss="2"'), beskrivning: beskr };
  });

  /* Två paneler bredvid varandra (fallande_hiss, jord_och_mane), var och en en egen svg 220 enheter bred – den andra
   * visar enheterna 220–440, så att en figur ritad i 440 enheter delas utan att något flyttas. På datorn står de
   * bredvid varandra som en figur (samma storlek som en svg på 440 enheter, med samma gräns för höjden). Blir texten
   * under 14 px när de står bredvid varandra (mobilen) staplas de under varandra, så stora att den minsta texten är
   * 14 px – gränsen och storleken per figur står i bok.css (.fig-paneler). H: panelernas höjd i figurens enheter. */
  function paneler(namn, H, inne, attr = '') {
    return `<div class="fig-paneler" data-paneler="${namn}" ${attr} style="--fig-kvot: ${f(440 / H * 1000) / 1000}">` +
      inne.map((s, i) => `<svg viewBox="${i * 220} 0 220 ${H}" xmlns="http://www.w3.org/2000/svg" data-panel="${i + 1}">${s}</svg>`).join('') + '</div>';
  }

  /* Massa och tyngd på jorden och på månen (III D, BILD J, 2026-11-05): två lika stora paneler med samma person (en
   * streckgubbe som i hissen) på en badrumsvåg. Samma etikett "massa 60 kg" i båda; tyngdkraftspilen från personens
   * tyngdpunkt rakt nedåt (kraftpilarnas stil) med en gemensam skala – den största tyngden får pilen L – och vågens
   * display ur data. Jorden: sand med en grön kant; månen: grå med två kratrar i horisonten.
   * Data: massa, tyngd: [jorden, månen] (N), vag: [jorden, månen] (kg). */
  Bok.figur('jord_och_mane', d => {
    const massa = d.massa, tyngd = d.tyngd, vag = d.vag;
    if (!(massa > 0) || !Array.isArray(tyngd) || tyngd.length !== 2 || !Array.isArray(vag) || vag.length !== 2 || !tyngd.every(t => t > 0) || !vag.every(v => v >= 0))
      fel('jord_och_mane behöver massa, tyngd: [jorden, månen] och vag: [jorden, månen]');
    const L = 96, H = 182, cx = 104, fot = 104, GOLV = fot + 18, ty = fot - 30, k = L / Math.max(...tyngd);
    const NAMN = ['På jorden', 'På månen'], hart = (v, e) => `${tal(v)} ${e}`;
    const panel = (i, px) => {
      const x = v => px + v, l = tyngd[i] * k, spets = ty + l, mane = i === 1;
      let s = `<g class="fig-jm-panel" data-${mane ? 'mane' : 'jorden'}="1">` + text(x(110), 20, NAMN[i], 'fig-rubrik');
      // marken: jordens sand med grön kant, månens grå yta med två kratrar i horisonten
      s += `<rect class="${mane ? 'fig-jm-mane' : 'fig-jm-jord'}" x="${px}" y="${GOLV}" width="220" height="${H - GOLV}"/>` +
        `<line class="${mane ? 'fig-jm-mane-kant' : 'fig-jm-jord-kant'}" x1="${px}" y1="${GOLV}" x2="${px + 220}" y2="${GOLV}"/>`;
      if (mane) s += `<ellipse class="fig-jm-krater" cx="${x(172)}" cy="${GOLV + 5}" rx="15" ry="3.5"/><ellipse class="fig-jm-krater" cx="${x(204)}" cy="${GOLV + 12}" rx="9" ry="2.5"/>`;
      // vågen med displayen till vänster om pilen
      s += `<rect class="fig-foremal" x="${x(cx - 60)}" y="${fot}" width="84" height="18" rx="3"/>` +
        `<rect class="fig-jm-display" x="${x(cx - 54)}" y="${fot + 2}" width="46" height="14" rx="1.5"/>` +
        text(x(cx - 31), fot + 13.2, hart(vag[i], 'kg'), 'fig-text fig-mitt fig-jm-vag');
      // personen (samma som i hissen) och massan under den, till vänster om pilen
      s += `<g class="fig-gubbe"><line x1="${x(cx - 7)}" y1="${fot}" x2="${x(cx)}" y2="${fot - 24}"/><line x1="${x(cx + 7)}" y1="${fot}" x2="${x(cx)}" y2="${fot - 24}"/>` +
        `<line x1="${x(cx)}" y1="${fot - 24}" x2="${x(cx)}" y2="${fot - 54}"/><line x1="${x(cx)}" y1="${fot - 46}" x2="${x(cx - 12)}" y2="${fot - 30}"/>` +
        `<line x1="${x(cx)}" y1="${fot - 46}" x2="${x(cx + 12)}" y2="${fot - 30}"/><circle cx="${x(cx)}" cy="${fot - 63}" r="8.5"/></g>`;
      s += text(x(cx - 10), GOLV + 24, 'massa ' + hart(massa, 'kg'), 'fig-text fig-hoger fig-halo fig-jm-massa');
      // tyngdkraften från tyngdpunkten rakt nedåt, med etiketten till höger om spetsen
      s += `<g class="fig-jm-pil" data-tyngd="${tyngd[i]}">${pil(x(cx), ty, x(cx), spets, 9)}</g><circle class="fig-angrepp" cx="${x(cx)}" cy="${ty}" r="3.5"/>`;
      s += text(x(cx + 11), spets + 1, 'tyngd ' + hart(tyngd[i], 'N'), 'fig-pil-text fig-vanster fig-halo fig-jm-tyngd');
      return s + '</g>';
    };
    const beskr = d.beskrivning || `Två bilder bredvid varandra. På jorden står en person med massan ${hart(massa, 'kg')} på en våg som visar ${hart(vag[0], 'kg')}; en pil nedåt visar tyngden ${hart(tyngd[0], 'N')}. ` +
      `På månen står samma person, fortfarande ${hart(massa, 'kg')}, på en våg som visar ${hart(vag[1], 'kg')}; pilen nedåt visar tyngden ${hart(tyngd[1], 'N')}.`;
    return { svg: paneler('jord_och_mane', H, [panel(0, 0), panel(1, 220)], 'data-jord-och-mane="2"'), beskrivning: beskr };
  });

  /* Newtons kanon (III D Djupdykning, 2026-11-04): jorden, ett alldeles för högt berg upptill och en kanon som skjuter
   * vågrätt. Tre banor i samma pilfärg: låg fart landar nära berget, högre fart längre bort, och med tillräckligt hög
   * fart går kulan runt hela jorden (streckad cirkel med pil). */
  Bok.figur('newtons_kanon', d => {
    // Stor (Joachims justering 2026-11-05: 1,5 gånger större), och får vara upp till 48 % av sidhöjden (bok.css)
    const C = [220, 132], R = 69, B = 126, rad = g => g * Math.PI / 180;
    const paJorden = (g, r = R) => [C[0] + r * Math.sin(rad(g)), C[1] - r * Math.cos(rad(g))];   // g grader medurs från toppen
    const M = [C[0] + 18, C[1] - B];                       // kanonens mynning, högst upp på berget
    let s = `<circle class="fig-jorden" cx="${C[0]}" cy="${C[1]}" r="${R}"/>`;
    // berget: alldeles för högt, med kanonen på toppen
    const [v1, v2] = [paJorden(-12), paJorden(12)];
    s += `<polygon class="fig-berg" points="${f(v1[0])},${f(v1[1])} ${C[0]},${f(C[1] - B + 6)} ${f(v2[0])},${f(v2[1])}"/>`;
    s += `<rect class="fig-kanon" x="${C[0] - 6}" y="${C[1] - B - 4.5}" width="24" height="9" rx="2"/>`;
    // banorna: låg fart, högre fart, och runt hela jorden
    const L1 = paJorden(40), L2 = paJorden(100);
    s += `<g class="fig-kanon-bana" data-bana="1">${pilBoje([M, [M[0] + 36, M[1]], L1])}</g>`;
    s += `<g class="fig-kanon-bana" data-bana="2">${pilBoje([M, [M[0] + 105, M[1]], [C[0] + R + 51, C[1] - 45], L2])}</g>`;
    const Q = paJorden(156, B);
    s += `<g class="fig-kanon-bana" data-bana="3"><circle class="fig-pil fig-kanon-runt" cx="${C[0]}" cy="${C[1]}" r="${B}"/>${pilBoje([paJorden(146, B), paJorden(151, B), Q])}</g>`;
    // namnen intill sina banor: den låga på jorden vid landningen (med papperskant), den högre strax utanför
    // omloppsbanan där den landar, omloppsbanans på två rader strax utanför den till vänster
    s += text(L1[0] + 2, L1[1] + 20, 'låg fart', 'fig-pil-text fig-vanster fig-halo');
    s += text(C[0] + B + 6, L2[1] + 6, 'högre fart', 'fig-pil-text fig-vanster');
    s += `<text class="fig-pil-text fig-hoger" x="${C[0] - B - 6}" y="${C[1] - 4}">tillräckligt <tspan x="${C[0] - B - 6}" dy="18">hög fart</tspan></text>`;
    const beskr = d.beskrivning || 'Jorden med ett mycket högt berg och en kanon på toppen. Tre kulbanor: med låg fart landar kulan nära berget, med högre fart längre bort, och med tillräckligt hög fart går den runt hela jorden utan att landa.';
    return { svg: `<svg viewBox="0 0 440 ${C[1] + B + 6}" xmlns="http://www.w3.org/2000/svg" data-newtons-kanon="3">${s}</svg>`, beskrivning: beskr };
  });

  /* Galileos tankeexperiment med två lutande plan (III A Djupdykning, 2026-11-04), i tre steg under varandra:
   *   1. Lika branta – kulan släpps högt upp till vänster och når nästan samma höjd till höger.
   *   2. Flackare – det högra planet är flackare, och kulan rullar längre för att nå samma höjd.
   *   3. Vågrätt – det högra planet är vågrätt: kulan når aldrig höjden. Rörelsespåret (lika långa avstånd, lika lång
   *      tid emellan) och strålen visar att den rullar vidare i samma fart.
   * Den streckade linjen (guld) är starthöjden; kulan har sandfärg, där den stannar är den tonad. steg: 1–3 (3). */
  Bok.figur('lutande_plan', d => {
    const n = d.steg == null ? 3 : d.steg;
    if (![1, 2, 3].includes(n)) fel('lutande_plan ritar 1–3 steg');
    const RAD = 60, X0 = 110, X1 = 436, DAL = 170, H = 34, R = 5.5;
    // en kula som ligger på ett plan från p till q, en bit (andel t) från p: mittpunkten en radie ut från planet
    const pa = (p, q, t) => { const dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy);
      return [p[0] + dx * t + (dy / l) * R, p[1] + dy * t - (dx / l) * R]; };
    const NAMN = ['Lika branta', 'Flackare', 'Vågrätt'];
    let s = '';
    for (let i = 0; i < n; i++) {
      const yt = i * RAD, yb = yt + 44, yh = yb - H;
      const hoger = i === 0 ? DAL + 60 : i === 1 ? 400 : null;          // var det högra planet når starthöjden
      s += `<g class="fig-lp-steg" data-steg="${i + 1}">`;
      s += text(0, yb - 8, NAMN[i], 'fig-text fig-vanster');
      // planen: det vänstra lika brant i alla steg, det högra brant, flackt eller vågrätt
      s += `<polygon class="fig-foremal" points="${X0},${yh} ${DAL},${yb} ${X0},${yb}"/>`;
      if (hoger) s += `<polygon class="fig-foremal" points="${DAL},${yb} ${hoger},${yh} ${hoger},${yb}"/>`;
      s += `<line class="fig-bord" x1="${X0}" y1="${yb}" x2="${X1}" y2="${yb}"/>`;
      s += `<line class="fig-hojd" x1="${X0}" y1="${yh}" x2="${X1}" y2="${yh}"/>`;
      const [kx, ky] = pa([X0, yh], [DAL, yb], 0.1);
      s += `<circle class="fig-partikel" cx="${f(kx)}" cy="${f(ky)}" r="${R}"/>`;
      if (hoger) {
        // där kulan stannar: nästan samma höjd (steg 1, med friktion), samma höjd (steg 2, tänkt utan friktion)
        const [ex, ey] = pa([DAL, yb], [hoger, yh], i === 0 ? 0.88 : 0.97);
        s += `<circle class="fig-partikel fig-tonad" cx="${f(ex)}" cy="${f(ey)}" r="${R}"/>`;
      } else {
        // vågrätt: rörelsespåret (lika långa avstånd) och strålen åt höger
        for (let x = 200; x <= 380; x += 45) s += `<circle class="fig-prick" cx="${x}" cy="${f(yb - R)}" r="3.5"/>`;
        s += pil(DAL + 10, yb + 11, X1 - 2, yb + 11, 7, 'fig-strale');
      }
      s += '</g>';
    }
    const hojd = (n - 1) * RAD + (n === 3 ? 44 + 17 : 48);
    const beskr = d.beskrivning || (n === 3
      ? 'Tre steg: kulan rullar ner för ett plan och upp för ett annat. Ju flackare det andra planet är, desto längre rullar kulan för att nå starthöjden. När planet är vågrätt når den aldrig höjden och rullar vidare i samma fart.'
      : `${n === 1 ? 'Ett steg' : 'Två steg'}: kulan rullar ner för ett plan och upp för ett annat${n === 2 ? '. Ju flackare det andra planet är, desto längre rullar kulan för att nå starthöjden' : ' och når nästan samma höjd'}.`);
    return { svg: svg(440, hojd, s).replace('<svg ', `<svg data-lutande-plan="${n}" `), beskrivning: beskr };
  });

  /* ---------- Omslagsmotiven (Bok.illustration): ett per kapitel, i kapitel.js som illustration ----------
   * Ritade ur musikvideornas omslag (1800-talet/verktyg/bok.py, bara läst) med filmens koordinater och färger:
   * 792 enheter brett, från motivets topp (0) ned till marken (hojd). Omslaget (bok.js) lägger motivet under
   * undertiteln och krymper det på ett smalare omslag. id: ett unikt prefix för gradienter. */
  const OM = { ljusbla: '#96c4ec', koppar: '#ce8250', plan: '#284070', kloss: '#345084', lins: '#121e3e', sken: '#3c6096' };
  const PARTIKEL = { proton: [200, 74, 50], neutron: [150, 157, 168], elektron: [72, 150, 220] };   // bok.py: PROTON …
  const rgb = c => `rgb(${c.map(Math.round).join(',')})`;
  const punkter = l => l.map(p => p.map(f).join(',')).join(' ');
  // En partikel som i filmen (bok.py: kula): en skuggad kula med laddningen som tecken
  function kula(x, y, r, farg, tecken) {
    return `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="${rgb(farg)}" stroke="${rgb(farg.map(c => c * 0.6))}" stroke-width="${f(Math.max(1, r * 0.09))}"/>` +
      `<ellipse cx="${f(x - r * 0.32)}" cy="${f(y - r * 0.44)}" rx="${f(r * 0.3)}" ry="${f(r * 0.22)}" fill="${rgb(farg.map(c => c + (255 - c) * 0.5))}"/>` +
      (tecken ? `<text x="${f(x)}" y="${f(y + r * 0.04)}" font-family="EB Garamond" font-weight="600" font-size="${Math.max(10, Math.round(r * 1.25))}" ` +
        `fill="#fff" text-anchor="middle" dominant-baseline="central">${tecken}</text>` : '');
  }
  // En pil med fylld spets (bok.py: _pil)
  function omslagsPil(a, b, farg, w, spets) {
    const d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, ux = (b[0] - a[0]) / d, uy = (b[1] - a[1]) / d;
    const bas = [b[0] - ux * spets, b[1] - uy * spets];
    return `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(bas[0])}" y2="${f(bas[1])}" stroke="${farg}" stroke-width="${w}"/>` +
      `<polygon points="${punkter([b, [bas[0] - uy * spets * 0.5, bas[1] + ux * spets * 0.5], [bas[0] + uy * spets * 0.5, bas[1] - ux * spets * 0.5]])}" fill="${farg}"/>`;
  }
  // Kolatomen som på filmens omslag (bok.py: atom i closed_book_fysik): kärnans 6 protoner och 6 neutroner där
  // karna_positioner(6, 6, r) lägger dem (uträknat ur filmens kod, i enheter av kulans radie, yttersta först),
  // 2 elektroner i K-skalet och 4 i L-skalet.
  const KOL_KARNA = [[1.2655, -3.4355, 1], [0.9447, 3.4367, 0], [-3.207, 1.1692, 0], [-1.4659, -2.8719, 1], [2.8751, 0.9115, 1],
    [-0.8005, 2.5466, 1], [1.9376, -1.413, 0], [-2.28, -0.5388, 1], [-0.0678, -1.9321, 0], [1.1222, 1.3651, 0], [-1.0132, 0.7931, 0], [0.6892, -0.0308, 1]];
  function kolatom(cx, cy, R, rb, re, linje) {
    const kr = rb * 1.08 * Math.sqrt(11.5) + rb, rk = kr + (R - kr) * 0.46;           // bok.py: karna_radie
    const pa = (r, antal, vrid) => Array.from({ length: antal }, (_, k) => {
      const v = (-90 + vrid + k * 360 / antal) * Math.PI / 180; return [cx + r * Math.cos(v), cy + r * Math.sin(v)]; });
    return [rk, R].map(r => `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="none" stroke="${OM.ljusbla}" stroke-width="${linje}"/>`).join('') +
      KOL_KARNA.map(([x, y, p]) => kula(cx + x * rb, cy + y * rb, rb, p ? PARTIKEL.proton : PARTIKEL.neutron, p ? '+' : null)).join('') +
      [...pa(rk, 2, 90), ...pa(R, 4, 45)].map(([x, y]) => kula(x, y, re, PARTIKEL.elektron, '−')).join('');
  }

  /* Kraft och rörelse (filmens _kraft_och_rorelse, 2026-10-26): en kloss dras uppför ett lutande plan av kraften F
   * (koppar). Klossens tidigare lägen visar rörelsen, små pilar under klossen trycket mot underlaget, och en förstoring
   * av klossen kolatomen (materia). */
  Bok.illustration('kraft-och-rorelse', ({ hojd, id }) => {
    const L = OM.ljusbla, x0 = 0, x1 = 792, topp = 0, yb = hojd;
    const A = [x0 + 76, yb], C = [x1 - 84, topp + 150];
    const lang = Math.hypot(C[0] - A[0], C[1] - A[1]), u = [(C[0] - A[0]) / lang, (C[1] - A[1]) / lang], n = [u[1], -u[0]];
    const p = (s, h) => [A[0] + u[0] * s + n[0] * h, A[1] + u[1] * s + n[1] * h];      // s längs planet, h ovanför det
    const bw = 128, bh = 84, s0 = lang * 0.62;
    const kloss = s => [p(s - bw / 2, 0), p(s + bw / 2, 0), p(s + bw / 2, bh), p(s - bw / 2, bh)];
    // ett svagt blått sken bakom motivet (filmen: en suddad ellips; här en radiell toning)
    const sx0 = x0 + 90, sy0 = topp + 60, sx1 = x1 - 60, sy1 = yb + 40;
    let s = `<defs><radialGradient id="${id}-sken"><stop offset="0" stop-color="${OM.sken}" stop-opacity=".18"/>` +
      `<stop offset=".62" stop-color="${OM.sken}" stop-opacity=".15"/><stop offset="1" stop-color="${OM.sken}" stop-opacity="0"/></radialGradient></defs>` +
      `<ellipse class="omslag-sken" cx="${f((sx0 + sx1) / 2)}" cy="${f((sy0 + sy1) / 2)}" rx="${f((sx1 - sx0) / 2 + 70)}" ry="${f((sy1 - sy0) / 2 + 70)}" fill="url(#${id}-sken)"/>`;
    // det lutande planet och marken, med streck under marken
    s += `<polygon points="${punkter([A, [C[0], yb], C])}" fill="${OM.plan}" opacity=".75"/>`;
    let streck = '';
    for (let x = x0 + 50; x < x1 - 40; x += 22) streck += `M${x} ${f(yb + 2)}L${x - 14} ${f(yb + 16)}`;
    s += `<g stroke="${L}" fill="none" opacity=".85"><polygon points="${punkter([A, C, [C[0], yb]])}" stroke-width="2.2"/>` +
      `<line x1="${x0 + 40}" y1="${f(yb)}" x2="${x1 - 40}" y2="${f(yb)}" stroke-width="2.2"/><path d="${streck}" stroke-width="1.2"/></g>`;
    // rörelsen: klossens tidigare lägen, allt svagare bakåt
    [[2, 0.3], [1, 0.52]].forEach(([k, a]) => { s += `<polygon points="${punkter(kloss(s0 - k * 118))}" fill="none" stroke="${L}" stroke-width="1.6" opacity="${a}"/>`; });
    // trycket: små pilar från klossen in mot underlaget
    s += `<g opacity=".9">${[-0.36, -0.12, 0.12, 0.36].map(t => omslagsPil(p(s0 + t * bw, -4), p(s0 + t * bw, -36), L, 1.8, 10)).join('')}</g>`;
    // klossen och kraften F, som drar den uppför planet
    const fp = p(s0 + bw / 2 + 120, bh / 2 + 40);
    s += `<polygon points="${punkter(kloss(s0))}" fill="${OM.kloss}" stroke="${OM.koppar}" stroke-width="3"/>` +
      omslagsPil(p(s0 + bw / 2 + 4, bh / 2), p(s0 + bw / 2 + 170, bh / 2), OM.koppar, 6, 26) +
      `<text x="${f(fp[0])}" y="${f(fp[1])}" font-family="Marcellus" font-size="44" fill="${OM.koppar}" text-anchor="middle" dominant-baseline="central">F</text>`;
    // förstoringen: en lins på klossen och kolatomen i en cirkel ovanför planet
    const q = p(s0 - bw * 0.18, bh * 0.6), rq = 15, Z = [x0 + 190, topp + 120], RZ = 104;
    const dx = Z[0] - q[0], dy = Z[1] - q[1], d = Math.hypot(dx, dy), vx = -dy / d, vy = dx / d;
    s += `<g stroke="${L}" stroke-width="1.4" opacity=".55">` + [1, -1].map(t =>
      `<line x1="${f(q[0] + vx * rq * t)}" y1="${f(q[1] + vy * rq * t)}" x2="${f(Z[0] + vx * RZ * t)}" y2="${f(Z[1] + vy * RZ * t)}"/>`).join('') + '</g>';
    s += `<circle cx="${Z[0]}" cy="${Z[1]}" r="${RZ}" fill="${OM.lins}" stroke="${L}" stroke-width="2.2"/>` +
      `<circle cx="${f(q[0])}" cy="${f(q[1])}" r="${rq}" fill="none" stroke="${L}" stroke-width="2"/>` + kolatom(Z[0], Z[1], RZ - 22, 9, 7.5, 1.6);
    return s;
  });

  /* Materia och universum (arbetsorder 9, 2026-11-07; filmerna har inget omslag för kapitlet): solen nere till
   * vänster, planeternas banor runt den och planeterna på dem, och – som på Kraft och rörelse – en lins på jorden och
   * en förstoring med kolatomen (materia). Samma färger och samma sken som Kraft och rörelse. */
  Bok.illustration('materia-och-universum', ({ hojd, id }) => {
    const L = OM.ljusbla, x0 = 0, x1 = 792, topp = 0, yb = hojd;
    const S = [x0 + 130, yb - 92], RS = 88;                                    // solen (innanför ramen, ovanför upphovet)
    const sx0 = x0 + 90, sy0 = topp + 60, sx1 = x1 - 60, sy1 = yb + 40;
    let s = `<defs><radialGradient id="${id}-sken"><stop offset="0" stop-color="${OM.sken}" stop-opacity=".18"/>` +
      `<stop offset=".62" stop-color="${OM.sken}" stop-opacity=".15"/><stop offset="1" stop-color="${OM.sken}" stop-opacity="0"/></radialGradient>` +
      `<radialGradient id="${id}-sol" cx=".42" cy=".4"><stop offset="0" stop-color="#f3c98e"/><stop offset=".55" stop-color="${OM.koppar}"/>` +
      `<stop offset="1" stop-color="#a8613a"/></radialGradient></defs>` +
      `<ellipse class="omslag-sken" cx="${f((sx0 + sx1) / 2)}" cy="${f((sy0 + sy1) / 2)}" rx="${f((sx1 - sx0) / 2 + 70)}" ry="${f((sy1 - sy0) / 2 + 70)}" fill="url(#${id}-sken)"/>`;
    // stjärnorna: små prickar på fasta platser
    const STJ = [[150, 40], [260, 22], [330, 70], [420, 30], [500, 58], [600, 20], [700, 48], [740, 140], [560, 120], [460, 150],
      [380, 200], [640, 230], [720, 300], [300, 260], [210, 150], [120, 110], [520, 300], [430, 260]];
    s += `<g fill="${L}">${STJ.filter(([, y]) => y < yb - 40).map(([x, y], k) => `<circle cx="${x}" cy="${y}" r="${k % 3 ? 1.6 : 2.4}" opacity="${k % 2 ? .55 : .8}"/>`).join('')}</g>`;
    // banorna: ellipser runt solen, tillplattade (sedda snett), bara den del som står inom motivets ruta (de större
    // banorna når utanför den: utan att klippas skulle de gå ut över ramen och ned i upphovet)
    const BANOR = [200, 290, 390, 510, 640, 770], K = 0.34, ruta = [x0 + 40, x1 - 40, topp + 4, yb];
    const bage = r => { let d = '', pa = false;
      for (let g = 0; g <= 360; g += 1.5) { const v = g * Math.PI / 180, x = S[0] + r * Math.cos(v), y = S[1] - r * K * Math.sin(v);
        if (x >= ruta[0] && x <= ruta[1] && y >= ruta[2] && y <= ruta[3]) { d += (pa ? 'L' : 'M') + f(x) + ' ' + f(y); pa = true; } else pa = false; }
      return d; };
    s += `<path d="${BANOR.map(bage).join('')}" fill="none" stroke="${L}" stroke-width="1.6" opacity=".5"/>`;
    // planeterna på banorna (vinkeln uppåt höger), jorden på den tredje
    const pa = (r, v) => [S[0] + r * Math.cos(v * Math.PI / 180), S[1] - r * K * Math.sin(v * Math.PI / 180)];
    // Merkurius, Venus, Mars och Jupiter (jorden ritas för sig nedan); Jupiter högt på sin bana, fritt från förstoringen
    const PLANETER = [[0, 62, 7, '#b9a58e'], [1, 48, 10, '#e2c48a'], [3, -8, 9, '#c8714a'], [4, 72, 22, '#d6b083']];
    PLANETER.forEach(([b, v, r, farg]) => { const [x, y] = pa(BANOR[b], v); s += `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="${farg}" stroke="${L}" stroke-width="1.2" opacity=".95"/>`; });
    const J = pa(BANOR[2], 40), rj = 12;
    s += `<circle cx="${f(J[0])}" cy="${f(J[1])}" r="${rj}" fill="#4a86c4" stroke="${L}" stroke-width="1.6"/>` +
      `<path d="M${f(J[0] - 7)} ${f(J[1] - 3)} q4 -6 9 -2 q2 4 -3 6 z" fill="#7fb07a" opacity=".85"/>`;
    // solen
    s += `<circle cx="${S[0]}" cy="${S[1]}" r="${RS}" fill="url(#${id}-sol)" stroke="${OM.koppar}" stroke-width="3"/>`;
    // förstoringen: en lins på jorden och kolatomen i en cirkel uppe till höger
    const rq = 21, Z = [x1 - 170, topp + 130], RZ = 104;
    const dx = Z[0] - J[0], dy = Z[1] - J[1], d = Math.hypot(dx, dy), vx = -dy / d, vy = dx / d;
    s += `<g stroke="${L}" stroke-width="1.4" opacity=".55">` + [1, -1].map(t =>
      `<line x1="${f(J[0] + vx * rq * t)}" y1="${f(J[1] + vy * rq * t)}" x2="${f(Z[0] + vx * RZ * t)}" y2="${f(Z[1] + vy * RZ * t)}"/>`).join('') + '</g>';
    s += `<circle cx="${Z[0]}" cy="${Z[1]}" r="${RZ}" fill="${OM.lins}" stroke="${L}" stroke-width="2.2"/>` +
      `<circle cx="${f(J[0])}" cy="${f(J[1])}" r="${rq}" fill="none" stroke="${L}" stroke-width="2"/>` + kolatom(Z[0], Z[1], RZ - 22, 9, 7.5, 1.6);
    return s;
  });

  /* Ljud och ljus (kapitel 2, arbetsorder 33, 2026-11-21; ett nytt motiv, kräver Joachims godkännande): en högtalare
   * nere till vänster med ljudvågorna som bågar åt höger, ett prisma till höger där en ljusstråle delas i regnbågens
   * färger, och – som på de andra omslagen – en lins på en ljudvåg och en förstoring med luftens molekyler, täta i
   * förtätningarna och glesa i förtunningarna. Samma färger och samma sken som Kraft och rörelse. */
  Bok.illustration('ljud-och-ljus', ({ hojd, id }) => {
    const L = OM.ljusbla, x0 = 0, x1 = 792, topp = 0, yb = hojd;
    const sx0 = x0 + 90, sy0 = topp + 60, sx1 = x1 - 60, sy1 = yb + 40;
    let s = `<defs><radialGradient id="${id}-sken"><stop offset="0" stop-color="${OM.sken}" stop-opacity=".18"/>` +
      `<stop offset=".62" stop-color="${OM.sken}" stop-opacity=".15"/><stop offset="1" stop-color="${OM.sken}" stop-opacity="0"/></radialGradient></defs>` +
      `<ellipse class="omslag-sken" cx="${f((sx0 + sx1) / 2)}" cy="${f((sy0 + sy1) / 2)}" rx="${f((sx1 - sx0) / 2 + 70)}" ry="${f((sy1 - sy0) / 2 + 70)}" fill="url(#${id}-sken)"/>`;
    // högtalaren och ljudvågorna (bågar runt membranet)
    const H = [x0 + 110, yb - 120];
    s += `<rect x="${H[0] - 40}" y="${H[1] - 34}" width="34" height="68" rx="4" fill="${OM.kloss}" stroke="${L}" stroke-width="2.2"/>` +
      `<polygon points="${punkter([[H[0] - 6, H[1] - 30], [H[0] + 40, H[1] - 70], [H[0] + 40, H[1] + 70], [H[0] - 6, H[1] + 30]])}" fill="${OM.plan}" stroke="${L}" stroke-width="2.2"/>`;
    const bagar = [70, 110, 150, 190, 230];
    s += `<g fill="none" stroke="${L}" stroke-linecap="round">` + bagar.map((r, k) => { const v = 0.62;
      return `<path d="M${f(H[0] + 40 + r * Math.cos(-v))} ${f(H[1] + r * Math.sin(-v))} A${r} ${r} 0 0 1 ${f(H[0] + 40 + r * Math.cos(v))} ${f(H[1] + r * Math.sin(v))}" stroke-width="${k % 2 ? 1.6 : 3}" opacity="${f(0.95 - k * 0.12)}"/>`; }).join('') + '</g>';
    // prismat och spektrumet
    const P = [x1 - 230, yb - 110], ps = 92;
    const hor = [[P[0], P[1] - ps * 0.58], [P[0] - ps / 2, P[1] + ps * 0.29], [P[0] + ps / 2, P[1] + ps * 0.29]];
    s += omslagsPil([P[0] - 210, P[1] - 60], [P[0] - 26, P[1] - 14], OM.koppar, 5, 0);
    s += `<polygon points="${punkter(hor)}" fill="${OM.lins}" stroke="${L}" stroke-width="2.4" opacity=".95"/>`;
    ['#e05a4a', '#ee9a3c', '#f2d35a', '#6cc26a', '#5aa0e6', '#8a6ad8'].forEach((c, k) => {
      s += `<line x1="${f(P[0] + 20)}" y1="${f(P[1] - 8)}" x2="${f(x1 - 50)}" y2="${f(P[1] + 10 + k * 22)}" stroke="${c}" stroke-width="5" stroke-linecap="round" opacity=".9"/>`; });
    // förstoringen: en lins på den tredje ljudvågen och luftens molekyler i en cirkel
    const q = [H[0] + 40 + 150 * Math.cos(-0.35), H[1] + 150 * Math.sin(-0.35)], rq = 16, Z = [x0 + 360, topp + 120], RZ = 100;
    const dx = Z[0] - q[0], dy = Z[1] - q[1], d = Math.hypot(dx, dy), vx = -dy / d, vy = dx / d;
    s += `<g stroke="${L}" stroke-width="1.4" opacity=".55">` + [1, -1].map(t =>
      `<line x1="${f(q[0] + vx * rq * t)}" y1="${f(q[1] + vy * rq * t)}" x2="${f(Z[0] + vx * RZ * t)}" y2="${f(Z[1] + vy * RZ * t)}"/>`).join('') + '</g>';
    s += `<circle cx="${Z[0]}" cy="${Z[1]}" r="${RZ}" fill="${OM.lins}" stroke="${L}" stroke-width="2.2"/>` +
      `<circle cx="${f(q[0])}" cy="${f(q[1])}" r="${rq}" fill="none" stroke="${L}" stroke-width="2"/>`;
    const r = slump(9), lam = 80; let pr = '';
    for (let j = -5; j <= 5; j++) for (let x = -RZ; x <= RZ; x += 11) {
      const xe = x + r() * 4, y = j * 16 + r() * 6, xx = xe - 0.9 * lam / (2 * Math.PI) * Math.sin(2 * Math.PI * xe / lam);
      if (xx * xx + y * y < (RZ - 10) * (RZ - 10)) pr += `<circle cx="${f(Z[0] + xx)}" cy="${f(Z[1] + y)}" r="3.4"/>`; }
    s += `<g fill="${L}" opacity=".9">${pr}</g>`;
    return s;
  });

  /* ---------- Rymden (kapitel I Materia och universum, arbetsorder 9, 2026-11-07) ----------
   * Fem figurer där storlek, läge eller riktning bär betydelsen. Varje svg har data-rymd="<figur>", och grinden mäter
   * det som figuren påstår (storlekarna i samma skala, avstånden på linjen, pilarna mot jordens mitt, månens belysta
   * halva och faserna, jordaxelns lutning).
   *   himlakroppar_i_skala  kroppar: [{namn, diameter (km), grupp?}], kant?: {namn, diameter} (en bit av kanten till
   *                         vänster), storst?: diametern för den största kroppen i figuren (enheter)
   *   avstandslinje         kroppar: [{namn, ae}], enhet?: 'AE'|'miljoner km' – prickarna på en linje från solen
   *   jordklot_tyngd        personer?: [{vinkel (grader, 90 = överst), namn?}] (standard: fyra, Sverige och Australien)
   *   manfaser              (inga data) – månen i åtta lägen runt jorden, solljuset från vänster, och ytterringen: så
   *                         ser månen ut från jorden
   *   arstider              lutning?: 23.5 – jorden i fyra lägen runt solen, axeln åt samma håll */
  const RYMD_FARG = { Solen: '#f2c27b', Merkurius: '#b7b0a6', Venus: '#e6cf98', Jorden: '#8fb4d8', Mars: '#d38b62', Jupiter: '#d8b388',
    Saturnus: '#e4d2a2', Uranus: '#a8d4d6', Neptunus: '#7f9fd8' };
  const rymdFarg = n => RYMD_FARG[n] || '#d9d7d0';                     // månar och andra: grå
  const f3 = v => Math.round(v * 1000) / 1000;                         // en radie i skala: tre decimaler (grinden mäter 1 %)
  const textBredd = (s, px = 14.5) => String(s).length * px * 0.47;    // EB Garamond, ungefär
  // en etikett som stannar innanför figuren (0–B)
  const etikett = (x, y, s, B, klass = 'fig-text fig-liten') => {
    const w = textBredd(s) / 2;
    if (x - w < 2) return `<text x="2" y="${f(y)}" class="${klass} fig-vanster">${esc(s)}</text>`;
    if (x + w > B - 2) return `<text x="${B - 2}" y="${f(y)}" class="${klass} fig-hoger">${esc(s)}</text>`;
    return `<text x="${f(x)}" y="${f(y)}" class="${klass} fig-mitt">${esc(s)}</text>`;
  };
  const rymdSvg = (namn, b, h, inne) => svg(b, h, inne).replace('<svg ', `<svg data-rymd="${namn}" `);

  // Himlakropparna i samma skala: cirklarnas diametrar står i samma förhållande som kropparnas. Namnen under, i två rader
  // (varannan), med en tunn linje upp till kroppen; en bit av solens kant till vänster om kant är angiven.
  Bok.figur('himlakroppar_i_skala', d => {
    const K = (d.kroppar || []).filter(x => x && x.namn && x.diameter > 0);
    if (!K.length) fel('himlakroppar_i_skala: kroppar [{namn, diameter}] saknas');
    const B = 440, kant = d.kant, storst = Math.max(...K.map(x => x.diameter));
    const dmax = d.storst || (kant ? 40 : 90), k = dmax / storst;                         // enheter per km
    const radH = 22, y0 = 10 + dmax / 2, yText = y0 + dmax / 2 + 20, H = Math.round(yText + radH + 8);
    let s = '', xStart = 12;
    if (kant) {
      const R = kant.diameter * k / 2, syns = 30;
      s += `<circle class="fig-sol fig-kant" cx="${f(syns - R)}" cy="${f(H / 2)}" r="${f3(R)}" data-d="${kant.diameter}"/>`;
      s += `<text x="4" y="16" class="fig-text fig-liten fig-halo">${esc(kant.namn)}</text>`;
      xStart = syns + 14;
    }
    const behov = K.map(x => Math.max(x.diameter * k, 8)), extra = 14;
    const skiften = K.filter((x, i) => i && (x.grupp || 0) !== (K[i - 1].grupp || 0)).length;
    const luft = Math.max(6, (B - 8 - xStart - behov.reduce((a, b) => a + b, 0) - skiften * extra) / K.length);
    let x = xStart;
    K.forEach((kr, i) => {
      if (i && (kr.grupp || 0) !== (K[i - 1].grupp || 0)) x += extra;
      const cx = x + luft / 2 + behov[i] / 2, r = kr.diameter * k / 2, ty = yText + (i % 2) * radH;
      x += luft + behov[i];
      s += `<line class="fig-skal" x1="${f(cx)}" y1="${f(y0 + Math.max(r, 1) + 3)}" x2="${f(cx)}" y2="${f(ty - 12)}"/>`;
      s += `<circle class="fig-kropp" cx="${f(cx)}" cy="${f(y0)}" r="${f3(Math.max(r, 0.8))}" fill="${rymdFarg(kr.namn)}" data-d="${kr.diameter}"/>`;
      s += etikett(cx, ty, kr.namn, B);
    });
    const beskr = d.beskrivning || `I samma skala: ${K.map(x => x.namn).join(', ')}${kant ? `, bredvid en bit av kanten på ${kant.namn.toLowerCase()}` : ''}. ` +
      'Storlekarna kan jämföras direkt.';
    return { svg: rymdSvg('himlakroppar_i_skala', B, H, s), beskrivning: beskr };
  });

  // Avstånden från solen på en linje: prickarnas lägen står i proportion till avstånden. Namnen ovanför, åt höger så att
  // de inte krockar (de inre planeterna står tätt), med en tunn linje ned till pricken. Skalan under linjen.
  Bok.figur('avstandslinje', d => {
    const K = (d.kroppar || []).filter(x => x && x.namn && x.ae >= 0);
    if (!K.length) fel('avstandslinje: kroppar [{namn, ae}] saknas');
    const enhet = d.enhet || 'AE', faktor = enhet === 'AE' ? 1 : enhet === 'miljoner km' ? 149.6 : fel('avstandslinje: enhet AE eller miljoner km');
    const B = 440, x0 = 30, x1 = 420, maxAe = Math.max(...K.map(x => x.ae)), k = (x1 - x0) / maxAe;
    const yText = 18, yLinje = 50, H = 106;
    let s = `<line class="fig-bord" x1="${x0}" y1="${yLinje}" x2="${x1 + 8}" y2="${yLinje}"/>`;
    s += `<circle class="fig-sol fig-ae-sol" cx="${x0}" cy="${yLinje}" r="9" data-x0="${x0}" data-k="${k}"/>`;
    s += `<text x="${x0}" y="${yLinje + 27}" class="fig-text fig-liten fig-mitt">Solen</text>`;
    // namnen: från vänster, var och en så långt till höger som behövs för att inte krocka med föregående
    let hogerKant = -Infinity;
    K.forEach(kr => {
      const px = x0 + kr.ae * k, w = textBredd(kr.namn);
      let lx = Math.max(px, hogerKant + 6 + w / 2);
      if (lx + w / 2 > B - 2) lx = B - 2 - w / 2;
      hogerKant = lx + w / 2;
      s += `<line class="fig-skal" x1="${f(px)}" y1="${yLinje - 5}" x2="${f(lx)}" y2="${yText + 5}"/>`;
      s += `<circle class="fig-ae-prick" cx="${f(px)}" cy="${yLinje}" r="4" fill="${rymdFarg(kr.namn)}" data-ae="${kr.ae}"/>`;
      s += `<text x="${f(lx)}" y="${yText}" class="fig-text fig-liten fig-mitt">${esc(kr.namn)}</text>`;
    });
    // skalan: jämna steg i enheten
    const max = maxAe * faktor, rå = max / 5, p = Math.pow(10, Math.floor(Math.log10(rå))), steg = [1, 2, 5, 10].map(m => m * p).find(m => m >= rå);
    for (let v = steg; v <= max + 1e-9; v += steg) {
      const tx = x0 + v / faktor * k;
      s += `<line class="fig-bord" x1="${f(tx)}" y1="${yLinje}" x2="${f(tx)}" y2="${yLinje + 6}"/>`;
      s += `<text x="${f(tx)}" y="${yLinje + 22}" class="fig-text fig-liten fig-mitt fig-dampad">${tal(v)}</text>`;
    }
    s += `<text x="${B - 2}" y="${H - 7}" class="fig-text fig-liten fig-hoger fig-dampad">${esc(enhet)}</text>`;
    const beskr = d.beskrivning || `Avstånden från solen på en linje: ${K.map(x => `${x.namn} ${tal(Math.round(x.ae * faktor * 10) / 10)} ${enhet}`).join(', ')}.`;
    return { svg: rymdSvg('avstandslinje', B, H, s), beskrivning: beskr };
  });

  // Tyngdkraften mot jordens mitt: ett genomskuret jordklot med personer på olika ställen, var och en med fötterna mot
  // jordens mitt och en kraftpil från fötterna in mot mitten.
  Bok.figur('jordklot_tyngd', d => {
    const P = (d.personer || [{ vinkel: 65, namn: 'Sverige' }, { vinkel: 180 }, { vinkel: -115, namn: 'Australien' }, { vinkel: 0 }]);
    const B = 440, cx = 220, cy = 150, R = 92, H = 300, slut = 30;
    let s = `<circle class="fig-jorden" cx="${cx}" cy="${cy}" r="${R}"/>` +
      `<circle class="fig-jord-mantel" cx="${cx}" cy="${cy}" r="${f(R * 0.82)}"/>` +
      `<circle class="fig-jord-karna" cx="${cx}" cy="${cy}" r="${f(R * 0.42)}"/>`;
    P.forEach(p => {
      const a = p.vinkel * Math.PI / 180, ut = [Math.cos(a), -Math.sin(a)], fx = cx + R * ut[0], fy = cy + R * ut[1];
      // personen: fötterna på ytan, huvudet utåt
      s += `<g class="fig-gubbe" transform="translate(${f(fx)} ${f(fy)}) rotate(${f(90 - p.vinkel)}) scale(1.3)">` +
        '<line x1="0" y1="-10" x2="-4.5" y2="0"/><line x1="0" y1="-10" x2="4.5" y2="0"/><line x1="0" y1="-10" x2="0" y2="-22"/>' +
        '<line x1="-6.5" y1="-18" x2="6.5" y2="-18"/><circle cx="0" cy="-26.5" r="4.5"/></g>';
      s += `<g class="fig-tyngd" data-cx="${cx}" data-cy="${cy}">` + pil(fx - ut[0] * 2, fy - ut[1] * 2, cx + ut[0] * slut, cy + ut[1] * slut, 7) + '</g>';
      if (p.namn) {
        // namnet utanför huvudet; rakt uppe eller nere bredvid huvudet (annars går det utanför figuren), och inom figuren
        const rakt = Math.abs(ut[0]) < 0.3, rn = rakt ? R + 36 : R + 52;
        const lx = cx + rn * ut[0] + (rakt ? 16 : 0), ly = Math.min(H - 6, Math.max(16, cy + rn * ut[1] + 5));
        const ank = rakt || ut[0] > 0.3 ? 'fig-vanster' : 'fig-hoger';
        s += `<text x="${f(lx)}" y="${f(ly)}" class="fig-text ${ank}">${esc(p.namn)}</text>`;
      }
    });
    s += `<circle class="fig-prick" cx="${cx}" cy="${cy}" r="3"/>`;
    s += `<text x="${cx + 8}" y="${cy + 26}" class="fig-text fig-liten fig-vanster fig-halo">Jordens mitt</text>`;
    const namn = P.filter(p => p.namn).map(p => p.namn);
    const beskr = d.beskrivning || `Ett genomskuret jordklot med ${P.length} personer på olika ställen${namn.length ? ` (bland annat ${namn.join(' och ')})` : ''}, ` +
      'alla med fötterna mot jorden. Från var och en går en kraftpil in mot jordens mitt: nedåt är alltid mot jordens mitt, var man än står.';
    return { svg: rymdSvg('jordklot_tyngd', B, H, s), beskrivning: beskr };
  });

  // Månens faser: jorden i mitten, solljuset från vänster. Inre ringen: månen i åtta lägen, alltid belyst på den halva
  // som är vänd mot solen. Ytterringen: så ser månen ut från jorden i samma läge (växande: ljuset till höger).
  function fasIkon(X, Y, r, v) {
    const fi = ((v - 180) % 360 + 360) % 360, andel = Math.round((1 - Math.cos(fi * Math.PI / 180)) / 2 * 100) / 100;
    let s = `<g class="fig-mane-sedd" data-vinkel="${v}" data-andel="${andel}"><circle class="fig-mane-mork" cx="${f(X)}" cy="${f(Y)}" r="${r}"/>`;
    if (andel >= 0.995) s += `<circle class="fig-mane-ljus" cx="${f(X)}" cy="${f(Y)}" r="${r}"/>`;
    else if (andel > 0.005) {
      const vaxer = fi < 180, rx = f(r * Math.abs(Math.cos(fi * Math.PI / 180)));
      const top = `${f(X)} ${f(Y - r)}`, bot = `${f(X)} ${f(Y + r)}`;
      // den belysta halvan (höger när den växer), tillbaka längs skuggränsen (en ellips): tunn skära eller mer än halv
      const halv = vaxer ? `M${top} A${r} ${r} 0 0 1 ${bot}` : `M${top} A${r} ${r} 0 0 0 ${bot}`;
      const skara = andel < 0.5, svep = vaxer ? (skara ? 0 : 1) : (skara ? 1 : 0);
      s += `<path class="fig-mane-ljus" d="${halv} A${rx} ${r} 0 0 ${svep} ${top} Z"/>`;
    }
    return s + '</g>';
  }
  Bok.figur('manfaser', d => {
    const B = 440, cx = 250, cy = 134, rB = 64, rY = 108, rm = 10, rs = 11, H = 266;
    let s = [cy - 64, cy, cy + 64].map(y => pil(8, y, 66, y, 7)).join('') + `<text x="8" y="${cy - 78}" class="fig-text fig-liten">Solljus</text>`;
    s += `<circle class="fig-lupp" cx="${cx}" cy="${cy}" r="${rB}"/><circle class="fig-jorden" cx="${cx}" cy="${cy}" r="16"/>`;
    s += `<text x="${cx}" y="${cy + 34}" class="fig-text fig-liten fig-mitt">Jorden</text>`;
    const NAMN = { 180: 'Nymåne', 0: 'Fullmåne', 270: 'Halvmåne', 90: 'Halvmåne' };
    [0, 45, 90, 135, 180, 225, 270, 315].forEach(v => {
      const a = v * Math.PI / 180, x = cx + rB * Math.cos(a), y = cy - rB * Math.sin(a), X = cx + rY * Math.cos(a), Y = cy - rY * Math.sin(a);
      s += `<g class="fig-mane" data-vinkel="${v}"><circle class="fig-mane-mork" cx="${f(x)}" cy="${f(y)}" r="${rm}"/>` +
        `<path class="fig-mane-ljus" d="M${f(x)} ${f(y - rm)} A${rm} ${rm} 0 0 0 ${f(x)} ${f(y + rm)} Z"/></g>`;
      s += fasIkon(X, Y, rs, v);
      if (NAMN[v]) s += v === 180 ? `<text x="${f(X - rs - 6)}" y="${f(Y + 5)}" class="fig-text fig-liten fig-hoger">${NAMN[v]}</text>`
        : `<text x="${f(X + rs + 6)}" y="${f(Y + 5)}" class="fig-text fig-liten fig-vanster">${NAMN[v]}</text>`;
    });
    const beskr = d.beskrivning || 'Månen i åtta lägen runt jorden, med solljuset från vänster. Månen är alltid belyst på den halva som är vänd ' +
      'mot solen. Ytterringen visar hur månen ser ut från jorden i varje läge: nymåne när den står mellan jorden och solen, ' +
      'fullmåne när jorden står mellan solen och månen, och halvmåne däremellan.';
    return { svg: rymdSvg('manfaser', B, H, s), beskrivning: beskr };
  });

  // Årstiderna: solen i mitten, jorden i fyra lägen på banan (sedd snett), axeln lutad lika mycket åt samma håll i alla
  // lägen, natthalvan bort från solen. Där norra halvklotet lutar mot solen är det sommar där, där det lutar bort vinter.
  Bok.figur('arstider', d => {
    const lut = d.lutning != null ? d.lutning : 23.5, t = lut * Math.PI / 180;
    const B = 440, cx = 220, cy = 112, rx = 158, ry = 66, rj = 17, H = 226, n = [Math.sin(t), -Math.cos(t)];   // norr, på skärmen
    let s = `<ellipse class="fig-lupp" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`;
    const jord = v => {
      const a = v * Math.PI / 180, x = cx + rx * Math.cos(a), y = cy - ry * Math.sin(a);
      const ux = (cx - x), uy = (cy - y), ul = Math.hypot(ux, uy) || 1, u = [ux / ul, uy / ul];          // mot solen
      const mork = Array.from({ length: 19 }, (_, i) => { const b = Math.atan2(-u[1], -u[0]) - Math.PI / 2 + i * Math.PI / 18; return f(x + rj * Math.cos(b)) + ',' + f(y + rj * Math.sin(b)); });
      const mot = n[0] * u[0] + n[1] * u[1];       // > 0: norra halvklotet lutar mot solen
      return `<g class="fig-arstid" data-vinkel="${v}" data-lutning="${lut}" data-mot="${f(mot)}"><circle class="fig-jorden" cx="${f(x)}" cy="${f(y)}" r="${rj}"/>` +
        `<polygon class="fig-jorden-natt" points="${mork.join(' ')}"/>` +
        `<line class="fig-axel" x1="${f(x - n[0] * 27)}" y1="${f(y - n[1] * 27)}" x2="${f(x + n[0] * 27)}" y2="${f(y + n[1] * 27)}"/>` +
        `<text x="${f(x + n[0] * 35)}" y="${f(y + n[1] * 35 + 5)}" class="fig-text fig-liten fig-mitt">N</text></g>`;
    };
    s += jord(90);                                                          // bakom solen
    s += `<circle class="fig-sol" cx="${cx}" cy="${cy}" r="24"/><text x="${cx - 28}" y="${cy - 20}" class="fig-text fig-liten fig-hoger fig-halo">Solen</text>`;
    s += [180, 0, 270].map(jord).join('');
    // solljuset mot de två lägena med sommar och vinter
    s += pil(cx - 28, cy, cx - rx + rj + 6, cy, 7) + pil(cx + 28, cy, cx + rx - rj - 6, cy, 7);
    // etiketterna under lägena till vänster och höger, i två rader
    [[180, 'Sommar'], [0, 'Vinter']].forEach(([v, ord]) => {
      const x = cx + rx * Math.cos(v * Math.PI / 180), y = cy + 46;
      s += `<g class="fig-arstid-text" data-vinkel="${v}">` + etikett(x, y, ord, B, 'fig-text fig-hiss-rubrik') + etikett(x, y + 21, 'på norra halvklotet', B) + '</g>';
    });
    const beskr = d.beskrivning || `Jorden i fyra lägen runt solen. Jordaxeln lutar ${tal(lut)} grader åt samma håll i alla lägen. Där norra halvklotet ` +
      'lutar mot solen är det sommar där, och där det lutar bort från solen är det vinter. Avstånden är inte skalenliga.';
    return { svg: rymdSvg('arstider', B, H, s), beskrivning: beskr };
  });
  /* ---------- Diagram och vektorer (Nästa steg, arbetsorder 11, 2026-11-07) ----------
   *   diagram_graf   diagram: [{ rubrik?, x: {storhet, enhet, max, steg?, tal?}, y: {…},
   *                    grafer: [{ punkter: [[x, y], …], kurva?: true }], ytor?: [{ punkter, ton?: 1|2, namn?, etikett?: [x, y] }],
   *                    delta?: [{ fran: [x, y], till: [x, y], dx?: 'Δt', dy?: 'Δv' }] }] (1–3, bredvid varandra)
   *                  Axlar med rutnät (steg: en ruta), storhet och enhet på varje axel, talen var tal:e enhet (utan tal:
   *                  inga tal). Graferna: räta linjer mellan punkterna, eller en mjuk kurva genom dem (kurva: true).
   *                  Punkterna markeras. Ytorna (trianglar, rektanglar) skuggas i två ljusa toner, och Δ-linjerna är
   *                  streckade. Grinden mäter att varje punkt ligger på sin koordinat och att ytorna följer grafen.
   *                  En yta kan ha ett namn (arbetsorder 13: "v₀ · t", "a · t² / 2"), i ytans tyngdpunkt eller vid
   *                  etikett (textens mitt i axlarnas värden). Grinden mäter ytans hörn mot data och att namnet står i ytan.
   *   vektor_rutnat  pilar: [{ dx, dy, namn? }] (rutor; dy uppåt), resultant?: { namn? }, ratVinkel?: true, skala?: text
   *                  Rutat papper; pilarna efter varandra (varje pil börjar där den förra slutar), resultanten från den
   *                  första pilens början till den sista pilens spets. Grinden mäter det. */
  const DIA_TEXT = 19;                       // texten i diagrammen: 19 enheter = minst 14 px i mobilens spalt (328 px)
  Bok.figur('diagram_graf', d => {
    const D = d.diagram || fel('diagram_graf behöver diagram: [{x, y, grafer}]');
    if (!D.length || D.length > 3) fel('diagram_graf: 1–3 diagram');
    const B = 440, n = D.length, mellan = n > 1 ? 18 : 0, pw = (B - mellan * (n - 1)) / n;
    // Varje diagram: plats för rubriken överst, axelns namn ovanför den lodräta axeln, talen till vänster och under
    // (en rubrik kan ha flera rader: ['Konstant', 'hastighet'] – en smal del av figuren)
    const harTal = D.some(x => x.x.tal || x.y.tal), rubriker = D.map(x => [].concat(x.rubrik || [])), nRub = Math.max(...rubriker.map(r => r.length));
    const topp = (nRub ? nRub * (DIA_TEXT + 6) + 12 : 0) + DIA_TEXT + 16, vTal = harTal ? 30 : 6, nedre = (harTal ? DIA_TEXT + 6 : 0) + DIA_TEXT + 10;
    const hojdRutor = Math.max(...D.map(x => x.y.max / (x.y.steg || 1))), breddRutor = Math.max(...D.map(x => x.x.max / (x.x.steg || 1)));
    // Rutorna kvadratiska: samma storlek i alla diagram i figuren
    const ruta = Math.min((pw - vTal - 14) / breddRutor, (n > 1 ? 150 : 200) / hojdRutor);
    const H = Math.ceil(topp + hojdRutor * ruta + nedre);
    let s = '';
    const beskr = [];
    D.forEach((dg, i) => {
      // origo: diagrammet (talen, rutnätet och axelpilen) i mitten av sin del av figuren
      const anvand = vTal + dg.x.max / (dg.x.steg || 1) * ruta + 14;
      const x0 = i * (pw + mellan) + (pw - anvand) / 2 + vTal, y0 = topp + hojdRutor * ruta;
      const sx = ruta / (dg.x.steg || 1), sy = ruta / (dg.y.steg || 1);
      const X = v => x0 + v * sx, Y = v => y0 - v * sy;
      const xs = dg.x.max, ys = dg.y.max;
      // (axlarnas största värden ur data: grinden räknar punkternas lägen ur rutnätet och dem)
      s += `<g class="fig-diagram" data-diagram="${i + 1}" data-xmax="${xs}" data-ymax="${ys}">`;
      // ytorna under graferna
      (dg.ytor || []).forEach((y, j) => { s += `<polygon class="fig-yta fig-yta-${y.ton || 1}" points="${y.punkter.map(([a, b]) => f(X(a)) + ',' + f(Y(b))).join(' ')}" data-yta="${j + 1}" data-punkter="${y.punkter.map(p => p.join(',')).join(' ')}"/>`; });
      // rutnätet
      for (let v = 0; v <= xs + 1e-9; v += dg.x.steg || 1) s += `<line class="fig-rutnat" x1="${f(X(v))}" y1="${f(Y(0))}" x2="${f(X(v))}" y2="${f(Y(ys))}"/>`;
      for (let v = 0; v <= ys + 1e-9; v += dg.y.steg || 1) s += `<line class="fig-rutnat" x1="${f(X(0))}" y1="${f(Y(v))}" x2="${f(X(xs))}" y2="${f(Y(v))}"/>`;
      // axlarna med pilspets, namnen (storhet och enhet) och talen
      s += pil(X(0), Y(0), X(xs) + 12, Y(0), 7, 'fig-axel-pil') + pil(X(0), Y(0), X(0), Y(ys) - 12, 7, 'fig-axel-pil');
      s += `<text x="${f(X(0) + 8)}" y="${f(Y(ys) - 10)}" class="fig-text fig-diagram-axel fig-vanster">${esc(dg.y.storhet)} (${esc(dg.y.enhet)})</text>`;
      s += `<text x="${f(X(xs) + 12)}" y="${f(y0 + (dg.x.tal ? DIA_TEXT + 6 : 0) + DIA_TEXT + 4)}" class="fig-text fig-diagram-axel fig-hoger">${esc(dg.x.storhet)} (${esc(dg.x.enhet)})</text>`;
      if (dg.x.tal) for (let v = 0; v <= xs + 1e-9; v += dg.x.tal) s += `<text x="${f(X(v))}" y="${f(y0 + DIA_TEXT + 2)}" class="fig-text fig-diagram-tal fig-mitt" data-x="${v}">${tal(v)}</text>`;
      if (dg.y.tal) for (let v = dg.y.tal; v <= ys + 1e-9; v += dg.y.tal) s += `<text x="${f(X(0) - 6)}" y="${f(Y(v) + 6)}" class="fig-text fig-diagram-tal fig-hoger" data-y="${v}">${tal(v)}</text>`;
      rubriker[i].forEach((r, k) => { s += `<text x="${f(i * (pw + mellan) + pw / 2)}" y="${DIA_TEXT + 4 + k * (DIA_TEXT + 6)}" class="fig-text fig-diagram-rubrik fig-mitt">${esc(r)}</text>`; });
      // Δ-linjerna (streckade), namnen bredvid
      (dg.delta || []).forEach(dl => {
        const [a, b] = dl.fran, [c, e] = dl.till;
        s += `<line class="fig-delta" x1="${f(X(a))}" y1="${f(Y(b))}" x2="${f(X(c))}" y2="${f(Y(b))}" data-delta="x"/>` +
          `<line class="fig-delta" x1="${f(X(c))}" y1="${f(Y(b))}" x2="${f(X(c))}" y2="${f(Y(e))}" data-delta="y"/>`;
        if (dl.dx) s += `<text x="${f((X(a) + X(c)) / 2)}" y="${f(Y(b) - 7)}" class="fig-text fig-delta-text fig-mitt">${esc(dl.dx)}</text>`;
        if (dl.dy) s += `<text x="${f(X(c) + 7)}" y="${f((Y(b) + Y(e)) / 2 + 6)}" class="fig-text fig-delta-text fig-vanster">${esc(dl.dy)}</text>`;
      });
      // ytornas namn (arbetsorder 13): i ytans tyngdpunkt, eller där etikett anger (textens mitt, i axlarnas värden)
      (dg.ytor || []).forEach((y, j) => {
        if (!y.namn) return;
        const [ex, ey] = y.etikett || [y.punkter.reduce((a, p) => a + p[0], 0) / y.punkter.length, y.punkter.reduce((a, p) => a + p[1], 0) / y.punkter.length];
        s += `<text x="${f(X(ex))}" y="${f(Y(ey) + 6.5)}" class="fig-text fig-yta-namn fig-mitt" data-yta="${j + 1}">${esc(y.namn)}</text>`;
      });
      // graferna och punkterna
      (dg.grafer || []).forEach(g => {
        const P = g.punkter.map(([a, b]) => [X(a), Y(b)]);
        let dd = `M${f(P[0][0])} ${f(P[0][1])}`;
        if (g.kurva && P.length > 2) {
          // en mjuk kurva genom punkterna (Catmull–Rom som Bézierkurvor)
          for (let k = 0; k < P.length - 1; k++) {
            const p0 = P[k - 1] || P[k], p1 = P[k], p2 = P[k + 1], p3 = P[k + 2] || p2;
            dd += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
          }
        } else P.slice(1).forEach(p => { dd += ` L${f(p[0])} ${f(p[1])}`; });
        s += `<path class="fig-graf" d="${dd}" data-punkter="${g.punkter.map(p => p.join(',')).join(' ')}"${g.kurva ? ' data-kurva=""' : ''}/>`;
        g.punkter.forEach(([a, b]) => { s += `<circle class="fig-graf-punkt" cx="${f(X(a))}" cy="${f(Y(b))}" r="3.6" data-x="${a}" data-y="${b}"/>`; });
      });
      s += '</g>';
      beskr.push(`${rubriker[i].length ? rubriker[i].join(' ') + ': ' : ''}ett diagram med ${dg.x.storhet} (${dg.x.enhet}) på den vågräta axeln och ${dg.y.storhet} (${dg.y.enhet}) på den lodräta; ` +
        (dg.grafer || []).map(g => `${g.kurva ? 'en kurva' : 'en graf'} genom ${g.punkter.map(([a, b]) => `(${tal(a)}; ${tal(b)})`).join(', ')}`).join(', ') +
        ((dg.ytor || []).length ? `, med ${dg.ytor.length} skuggade ytor under grafen` +
          (dg.ytor.some(y => y.namn) ? ` (${dg.ytor.filter(y => y.namn).map(y => y.namn).join(' och ')})` : '') : '') + ((dg.delta || []).length ? ' och streckade Δ-linjer' : ''));
    });
    return { svg: svg(B, H, s).replace('<svg ', '<svg data-diagram-graf="' + n + '" '), beskrivning: beskr.join('. ') + '.' };
  });

  Bok.figur('vektor_rutnat', d => {
    const P = d.pilar || fel('vektor_rutnat behöver pilar: [{dx, dy}]');
    if (!P.length) fel('vektor_rutnat: minst en pil');
    // pilarnas lägen i rutor (dy uppåt), och rutnätets utsträckning med en ruta runt om
    const pts = [[0, 0]];
    P.forEach(p => { const [x, y] = pts[pts.length - 1]; pts.push([x + p.dx, y + p.dy]); });
    const minX = Math.min(...pts.map(p => p[0])) - 1, maxX = Math.max(...pts.map(p => p[0])) + 1;
    const minY = Math.min(...pts.map(p => p[1])) - 1, maxY = Math.max(...pts.map(p => p[1])) + 1;
    const nedre = d.skala ? DIA_TEXT + 12 : 4;
    const ruta = Math.min(52, 400 / (maxX - minX), 230 / (maxY - minY));
    const B = 440, bredd = (maxX - minX) * ruta, x0 = (B - bredd) / 2, H = Math.ceil((maxY - minY) * ruta + 8 + nedre);
    const X = v => x0 + (v - minX) * ruta, Y = v => 4 + (maxY - v) * ruta;
    let s = '';
    for (let v = minX; v <= maxX; v++) s += `<line class="fig-rutnat" x1="${f(X(v))}" y1="${f(Y(minY))}" x2="${f(X(v))}" y2="${f(Y(maxY))}"/>`;
    for (let v = minY; v <= maxY; v++) s += `<line class="fig-rutnat" x1="${f(X(minX))}" y1="${f(Y(v))}" x2="${f(X(maxX))}" y2="${f(Y(v))}"/>`;
    // tyngdpunkten: namnen står på den sida av pilen som är bort från den
    const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const namn = (a, b, t, klass) => {
      if (!t) return '';
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      let nx = -(b[1] - a[1]) / l, ny = (b[0] - a[0]) / l;                 // normalen (i rutor, y uppåt)
      if (nx * (mx - cx) + ny * (my - cy) < 0) { nx = -nx; ny = -ny; }
      const tx = X(mx) + nx * 16, ty = Y(my) - ny * 16 + 6;
      const ank = Math.abs(nx) < 0.3 ? 'fig-mitt' : nx > 0 ? 'fig-vanster' : 'fig-hoger';
      return `<text x="${f(tx)}" y="${f(ty)}" class="fig-text fig-vektor-text ${ank} ${klass}">${esc(t)}</text>`;
    };
    // rät vinkel: en liten kvadrat i hörnet mellan två vinkelräta pilar, inåt mot resultanten
    if (d.ratVinkel && P.length >= 2) {
      const [a, b, c] = [pts[0], pts[1], pts[2]];
      const u = [(a[0] - b[0]) / Math.hypot(a[0] - b[0], a[1] - b[1]), (a[1] - b[1]) / Math.hypot(a[0] - b[0], a[1] - b[1])];
      const w = [(c[0] - b[0]) / Math.hypot(c[0] - b[0], c[1] - b[1]), (c[1] - b[1]) / Math.hypot(c[0] - b[0], c[1] - b[1])];
      if (Math.abs(u[0] * w[0] + u[1] * w[1]) < 1e-9) {
        const k = 0.32;
        const q = [[b[0] + u[0] * k, b[1] + u[1] * k], [b[0] + (u[0] + w[0]) * k, b[1] + (u[1] + w[1]) * k], [b[0] + w[0] * k, b[1] + w[1] * k]];
        s += `<polyline class="fig-ratvinkel" points="${q.map(p => f(X(p[0])) + ',' + f(Y(p[1]))).join(' ')}"/>`;
      }
    }
    P.forEach((p, i) => {
      const a = pts[i], b = pts[i + 1];
      s += `<g class="fig-vektor" data-vektor="${i + 1}">${pil(X(a[0]), Y(a[1]), X(b[0]), Y(b[1]), 9)}</g>` + namn(a, b, p.namn, '');
    });
    if (d.resultant) {
      const a = pts[0], b = pts[pts.length - 1];
      s += `<g class="fig-vektor" data-vektor="resultant">${pil(X(a[0]), Y(a[1]), X(b[0]), Y(b[1]), 9, 'fig-resultant')}</g>` + namn(a, b, d.resultant.namn, 'fig-resultant');
    }
    if (d.skala) s += `<text x="${f(X(minX))}" y="${f(Y(minY) + DIA_TEXT + 6)}" class="fig-text fig-vektor-skala fig-vanster">${esc(d.skala)}</text>`;
    const beskr = `Rutat papper${d.skala ? ` (skalan ${d.skala})` : ''}: ` + P.map(p => `en pil ${Math.abs(p.dx) ? Math.abs(p.dx) + ' rutor ' + (p.dx > 0 ? 'åt höger' : 'åt vänster') : ''}${p.dx && p.dy ? ' och ' : ''}${Math.abs(p.dy) ? Math.abs(p.dy) + ' rutor ' + (p.dy > 0 ? 'uppåt' : 'nedåt') : ''}${p.namn ? ' (' + p.namn + ')' : ''}`).join(', ') +
      ', satta efter varandra' + (d.resultant ? `, och resultanten från den första pilens början till den sista pilens spets${d.resultant.namn ? ' (' + d.resultant.namn + ')' : ''}` : '') + (d.ratVinkel ? '; den räta vinkeln är markerad' : '') + '.';
    return { svg: svg(B, H, s).replace('<svg ', '<svg data-vektor-rutnat="' + P.length + '" '), beskrivning: beskr };
  });
  /* ---------- Resulterande kraft på rutat papper (Kraft och rörelse IV A, arbetsorder 12, 2026-11-07) ----------
   *   resultant_rutor  lage: 'steg' | 'vinklar' | 'komposanter'
   *     steg         krafter: [{dx, dy, namn?}, {dx, dy, namn?}] (rutor, dy uppåt), resultant?: {namn?}, rubriker?: [3],
   *                  skala?: text – tre rutor bredvid varandra: 1 båda krafterna från samma punkt, 2 den andra flyttad
   *                  (streckad) till den förstas spets, 3 resultanten (röd) från start till den flyttade pilens spets
   *     vinklar      kraft: 100, vinklar: [0, 45, 90, 180], enhet?: 'N' – två lika stora krafter från samma punkt med
   *                  vinkeln mellan sig, och resultanten (röd); värdet över varje (≈ när det inte är jämnt)
   *     komposanter  kraft: {dx, dy, namn?}, komposanter?: [namn x, namn y], skala?: text – en pil och dess
   *                  komposanter streckade längs rutorna (först åt sidan, sedan uppåt, till pilens spets)
   * Grinden mäter: pilarna börjar och slutar i rutnätets hörn, den flyttade pilen har samma komposanter, resultanten går
   * från start till den sista spetsen (steg); resultantens längd mot det uträknade värdet inom en pixel (vinklar);
   * komposanterna längs rutlinjerna och till pilens spets (komposanter). */
  const RR_TEXT = 19;
  // en rad som ryms i bredden b (EB Garamond, ungefär) – ord för ord
  const radbrytFig = (s, b, px = RR_TEXT) => { const ut = [];
    String(s).split(' ').forEach(o => { const r = ut.length ? ut[ut.length - 1] + ' ' + o : o;
      if (ut.length && r.length * px * 0.47 <= b) ut[ut.length - 1] = r; else ut.push(o); }); return ut; };
  const rrPil = (x1, y1, x2, y2, klass, data) => `<g class="fig-rr-pil ${klass}" ${data}>` +
    (Math.hypot(x2 - x1, y2 - y1) < 1 ? `<circle class="fig-rr-noll" cx="${f(x1)}" cy="${f(y1)}" r="4"/>` : pil(x1, y1, x2, y2, 8, klass)) + '</g>';
  const rrText = (x, y, s, klass = '', ank = 'fig-mitt') => `<text x="${f(x)}" y="${f(y)}" class="fig-text fig-rr-text ${ank} ${klass}">${esc(s)}</text>`;
  // Namnen vid pilarna: för varje namn prövas några lägen runt pilens mitt (kand: [dx, dy], i ordning), och det första
  // som ryms i området [x0, x1, y0, y1] och inte ligger på ett namn som redan står väljs (bredden ungefär, som ovan).
  const RR_RAD = RR_TEXT + 7;                // radavståndet i rubrikerna
  function placera(namn, omr) {
    const satta = [], ut = [];
    const ruta = (x, y, t, ank) => { const w = String(t).length * RR_TEXT * 0.5, x0 = ank === 'fig-vanster' ? x : ank === 'fig-hoger' ? x - w : x - w / 2;
      return [x0, y - RR_TEXT * 0.8, x0 + w, y + RR_TEXT * 0.3]; };
    const krock = (a, b) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
    namn.filter(n => n.t).forEach(n => {
      const val = n.kand.map(([dx, dy]) => { const ank = dx > 4 ? 'fig-vanster' : dx < -4 ? 'fig-hoger' : 'fig-mitt', x = n.mx + dx, y = n.my + dy;
        return { x, y, ank, r: ruta(x, y, n.t, ank) }; });
      const ok = val.find(v => v.r[0] >= omr[0] && v.r[2] <= omr[1] && v.r[1] >= omr[2] && v.r[3] <= omr[3] && !satta.some(r => krock(r, v.r))) || val[0];
      satta.push(ok.r); ut.push(rrText(ok.x, ok.y, n.t, n.klass, ok.ank));
    });
    return ut.join('');
  }
  const KAND = [[10, 14], [-10, -6], [10, -6], [-10, 14], [0, -10], [0, 26]];
  Bok.figur('resultant_rutor', d => {
    const lage = d.lage || fel('resultant_rutor behöver lage: steg, vinklar eller komposanter');
    const B = 440;
    let s = '', H, beskr;
    if (lage === 'steg') {
      const [F1, F2] = d.krafter || fel('resultant_rutor (steg) behöver krafter: [F1, F2]');
      const R = [F1.dx + F2.dx, F1.dy + F2.dy];
      const rub = d.rubriker || ['1', '2', '3'];
      // rutnätet: från en ruta till vänster om starten till en ruta bortom den längsta spetsen
      const xs = [0, F1.dx, F2.dx, R[0]], ys = [0, F1.dy, F2.dy, R[1]];
      const minX = Math.min(...xs) - 1, maxX = Math.max(...xs) + 3, minY = Math.min(...ys) - 1, maxY = Math.max(...ys) + 1;   // (3: namnen till höger)
      const mellan = 14, pw = (B - 2 * mellan) / 3, ruta = Math.min((pw - 4) / (maxX - minX), 26);
      const rubRader = rub.map(r => radbrytFig(r, pw - 4)), nRub = Math.max(...rubRader.map(r => r.length));
      const topp = nRub * RR_RAD + 8, gh = (maxY - minY) * ruta, nedre = RR_TEXT + 10 + (d.skala ? RR_TEXT + 6 : 0);   // F1:s namn under rutnätet
      H = Math.ceil(topp + gh + nedre);
      [0, 1, 2].forEach(i => {
        const x0 = i * (pw + mellan) + (pw - (maxX - minX) * ruta) / 2;
        const X = v => x0 + (v - minX) * ruta, Y = v => topp + (maxY - v) * ruta;
        s += `<g class="fig-rr-steg" data-steg="${i + 1}" data-ruta="${f(ruta)}" data-origo="${f(X(0))},${f(Y(0))}">`;
        for (let v = minX; v <= maxX; v++) s += `<line class="fig-rutnat" x1="${f(X(v))}" y1="${f(Y(minY))}" x2="${f(X(v))}" y2="${f(Y(maxY))}"/>`;
        for (let v = minY; v <= maxY; v++) s += `<line class="fig-rutnat" x1="${f(X(minX))}" y1="${f(Y(v))}" x2="${f(X(maxX))}" y2="${f(Y(v))}"/>`;
        rubRader[i].forEach((r, k) => { s += rrText(i * (pw + mellan) + pw / 2, RR_TEXT + k * RR_RAD, r, 'fig-rr-rubrik'); });
        const mitt = (a, b) => [(X(a[0]) + X(b[0])) / 2, (Y(a[1]) + Y(b[1])) / 2];
        // F1 från start; F2 från start (steg 1) eller från F1:s spets, streckad (steg 2 och 3); resultanten i steg 3
        s += rrPil(X(0), Y(0), X(F1.dx), Y(F1.dy), 'fig-rr-f1', `data-kraft="1" data-d="${F1.dx},${F1.dy}"`);
        const F2a = i === 0 ? [0, 0] : [F1.dx, F1.dy], F2b = i === 0 ? [F2.dx, F2.dy] : R;
        s += rrPil(X(F2a[0]), Y(F2a[1]), X(F2b[0]), Y(F2b[1]), 'fig-rr-f2' + (i ? ' fig-rr-flyttad' : ''), `data-kraft="2" data-d="${F2.dx},${F2.dy}"${i ? ' data-flyttad=""' : ''}`);
        if (i === 2) s += rrPil(X(0), Y(0), X(R[0]), Y(R[1]), 'fig-rr-resultant', `data-resultant=""`);
        const [m1x, m1y] = mitt([0, 0], [F1.dx, F1.dy]), [m2x, m2y] = mitt(F2a, F2b), [mrx, mry] = mitt([0, 0], R);
        s += placera([
          { t: F1.namn, mx: m1x, my: m1y, klass: 'fig-rr-f1', kand: [[0, 26], [0, -10], ...KAND] },
          i === 2 && d.resultant && { t: d.resultant.namn, mx: mrx, my: mry, klass: 'fig-rr-resultant', kand: [[-6, -12], [0, -14], ...KAND] },
          { t: F2.namn, mx: m2x, my: m2y, klass: 'fig-rr-f2', kand: KAND }
        ].filter(Boolean), [i * (pw + mellan), i * (pw + mellan) + pw, topp - 4, H]);
        s += '</g>';
      });
      if (d.skala) s += rrText(B / 2, H - 6, d.skala, 'fig-rr-skala');
      beskr = `Rutat papper i tre steg${d.skala ? ` (${d.skala})` : ''}. 1: båda krafterna från samma punkt, ${F1.dx} rutor åt höger och ${F2.dx} rutor åt höger och ${F2.dy} uppåt. ` +
        `2: den andra kraften flyttad, utan att vridas, så att den börjar vid spetsen av den första. 3: resultanten från startpunkten till den flyttade pilens spets, ${R[0]} rutor åt höger och ${R[1]} uppåt.`;
    } else if (lage === 'vinklar') {
      const F = d.kraft || 100, V = d.vinklar || [0, 45, 90, 180], enhet = d.enhet || 'N', n = V.length;
      const mellan = 10, pw = (B - mellan * (n - 1)) / n, L = Math.min(pw * 0.42, 52);
      const varden = V.map(v => 2 * F * Math.cos(v * Math.PI / 360));
      const etikett = (v, r) => [`${tal(v)}°`, `${Math.abs(r - Math.round(r)) > 0.05 ? '≈ ' + tal(Math.round(r / 5) * 5) : tal(Math.round(r))} ${enhet}`];
      const topp = 2 * RR_RAD + 12;
      // höjden: den högsta pilen (den andra kraften och resultanten når lika högt: L · sin v) plus marginal
      const upp = Math.max(...V.map(v => L * Math.sin(v * Math.PI / 180))) + 14;
      H = Math.ceil(topp + upp + 18);
      V.forEach((v, i) => {
        // pilarnas utsträckning i sidled (från startpunkten), i mitten av sin del av figuren
        const rad = v * Math.PI / 180, ex = [0, L, L * Math.cos(rad), L + L * Math.cos(rad)];
        const cx = i * (pw + mellan) + pw / 2, ox = cx - (Math.min(...ex) + Math.max(...ex)) / 2, oy = topp + upp;
        const ax = ox + L, ay = oy, bx = ox + L * Math.cos(rad), by = oy - L * Math.sin(rad);
        const rx = ox + (ax - ox) + (bx - ox), ry = oy + (by - oy);
        s += `<g class="fig-rr-vinkel" data-vinkel="${v}" data-kraft="${F}" data-varde="${f(varden[i] * 1000) / 1000}">`;
        s += rrPil(ox, oy, ax, ay, 'fig-rr-f1', 'data-kraft="1"') + rrPil(ox, oy, bx, by, 'fig-rr-f1', 'data-kraft="2"');
        s += rrPil(ox, oy, rx, ry, 'fig-rr-resultant', 'data-resultant=""');
        etikett(v, varden[i]).forEach((t, k) => { s += rrText(cx, RR_TEXT + k * RR_RAD, t, k ? 'fig-rr-resultant fig-rr-varde' : 'fig-rr-rubrik'); });
        s += '</g>';
      });
      beskr = `Två krafter på ${tal(F)} ${enhet} från samma punkt med vinkeln ${V.map(v => tal(v) + '°').join(', ')} mellan sig, och resultanten: ` +
        V.map((v, i) => `${tal(v)}° ger ${etikett(v, varden[i])[1]}`).join(', ') + '.';
    } else if (lage === 'komposanter') {
      const K = d.kraft || fel('resultant_rutor (komposanter) behöver kraft: {dx, dy}');
      const [nx, ny] = d.komposanter || [];
      const minX = Math.min(0, K.dx) - 1, maxX = Math.max(0, K.dx) + 1, minY = Math.min(0, K.dy) - 1, maxY = Math.max(0, K.dy) + 1;
      const ruta = Math.min(40, 380 / (maxX - minX)), bredd = (maxX - minX) * ruta, x0 = (B - bredd) / 2, nedre = d.skala ? RR_TEXT + 14 : 6;
      const gh = (maxY - minY) * ruta; H = Math.ceil(gh + 8 + nedre + RR_TEXT);
      const X = v => x0 + (v - minX) * ruta, Y = v => 4 + (maxY - v) * ruta;
      s += `<g class="fig-rr-komp" data-ruta="${f(ruta)}" data-origo="${f(X(0))},${f(Y(0))}">`;
      for (let v = minX; v <= maxX; v++) s += `<line class="fig-rutnat" x1="${f(X(v))}" y1="${f(Y(minY))}" x2="${f(X(v))}" y2="${f(Y(maxY))}"/>`;
      for (let v = minY; v <= maxY; v++) s += `<line class="fig-rutnat" x1="${f(X(minX))}" y1="${f(Y(v))}" x2="${f(X(maxX))}" y2="${f(Y(v))}"/>`;
      s += `<line class="fig-komposant" data-komposant="x" x1="${f(X(0))}" y1="${f(Y(0))}" x2="${f(X(K.dx))}" y2="${f(Y(0))}"/>` +
        `<line class="fig-komposant" data-komposant="y" x1="${f(X(K.dx))}" y1="${f(Y(0))}" x2="${f(X(K.dx))}" y2="${f(Y(K.dy))}"/>`;
      s += rrPil(X(0), Y(0), X(K.dx), Y(K.dy), 'fig-rr-f1', `data-kraft="1" data-d="${K.dx},${K.dy}"`);
      // namnen: komposanten åt sidan under (eller över) den, komposanten uppåt bredvid den, pilen vid sin mitt
      s += placera([
        { t: nx, mx: (X(0) + X(K.dx)) / 2, my: Y(0), klass: 'fig-rr-komp-text', kand: K.dy >= 0 ? [[0, 24], [0, -8]] : [[0, -8], [0, 24]] },
        { t: ny, mx: X(K.dx), my: (Y(0) + Y(K.dy)) / 2 + 6, klass: 'fig-rr-komp-text', kand: K.dx >= 0 ? [[8, 0], [-8, 0]] : [[-8, 0], [8, 0]] },
        { t: K.namn, mx: (X(0) + X(K.dx)) / 2, my: (Y(0) + Y(K.dy)) / 2, klass: 'fig-rr-f1', kand: [[-6, -10], [6, -10], [0, -14], ...KAND] }
      ], [0, B, 0, H]);
      s += '</g>';
      if (d.skala) s += rrText(X(minX), H - 6, d.skala, 'fig-rr-skala', 'fig-vanster');
      beskr = `En kraft på rutat papper, ${K.dx} rutor åt höger och ${K.dy} uppåt${d.skala ? ` (${d.skala})` : ''}, med komposanterna streckade längs rutorna: först ${K.dx} rutor åt sidan, sedan ${K.dy} uppåt till pilens spets.`;
    } else fel(`resultant_rutor: okänt läge ”${lage}”`);
    return { svg: svg(B, H, s).replace('<svg ', `<svg data-resultant-rutor="${lage}" `), beskrivning: d.beskrivning || beskr };
  });

  /* Kaströrelse (Kraft och rörelse IV C, arbetsorder 16, 2026-11-11). Text 19 enheter (som diagrammen i order 11: minst
   * 14 px i mobilens spalt), kraftpilarna i kraftpilarnas färg. Varje läge skriver sina mått i elementen (data-*), och
   * grinden mäter det figuren påstår i elementen själva.
   *   kastbana, lage 'hoghus':       hojd (m), fart (m/s), g?: 10, steg?: 0,5 (s) – ett hus, en släppt och en vågrätt
   *                                  kastad boll med lägena varje steg, streckade vågräta linjer mellan bollarna
   *   kastbana, lage 'komposanter':  fart (m/s), sekunder?: 3, g?: 10 – ett vågrätt kast med bollens läge varje sekund,
   *                                  en vågrät pil (farten framåt) och en lodrät pil (farten nedåt) vid varje läge
   *   kastbana, lage 'vinklar':      fart (m/s), vinklar?: [30, 45, 60], g?: 10 – banorna från samma punkt, utan luft
   *   kastbana, lage 'hopp':         fart?: 6, vinkel?: 45, g?: 10 – (IV D, arbetsorder 17) en enkel figur i fem lägen i ett hopp,
   *                                  tyngdpunkten som en prick på kastbanan i varje läge, figuren i olika ställning
   * Bollarnas lägen räknas ur fysiken (x = v·t, fallet g·t²/2), inte ritas för hand. */
  const KT = 19;
  const kastText = (x, y, s, k = '') => `<text x="${f(x)}" y="${f(y)}" class="fig-text fig-kast-text ${k}">${esc(s)}</text>`;
  const skraffer = (x1, x2, y) => `<line class="fig-bord" x1="${f(x1)}" y1="${f(y)}" x2="${f(x2)}" y2="${f(y)}"/>` +
    Array.from({ length: Math.floor((x2 - x1) / 20) }, (_, i) => `<line class="fig-skraffer" x1="${f(x1 + 10 + i * 20)}" y1="${f(y + 1)}" x2="${f(x1 + i * 20)}" y2="${f(y + 12)}"/>`).join('');
  Bok.figur('kastbana', d => {
    const lage = d.lage || fel('kastbana behöver lage: hoghus, komposanter, vinklar eller hopp'), g = d.g || 10, B = 440;
    let s = '', H = 0, beskr = '';
    if (lage === 'hoghus') {
      const h = d.hojd || fel('kastbana hoghus behöver hojd'), v = d.fart || fel('kastbana hoghus behöver fart'), dt = d.steg || 0.5;
      const T = Math.sqrt(2 * h / g), tider = [];
      for (let k = 0; k * dt <= T + 1e-9; k++) tider.push(k * dt);
      if (T - tider[tider.length - 1] > 1e-6) tider.push(T);
      const r = 7, husB = 58, x0 = 18 + husB, topp = KT + 16, nedre = 14 + KT + 10;
      const k = Math.min((B - x0 - 2 * r - 26) / (v * T), 250 / h);
      const Y = y => topp + (h - y) * k, xs = x0 + r + 2;
      H = Math.ceil(Y(0) + nedre);
      // huset (med fönster) och marken
      s += `<rect class="fig-hus" x="${18}" y="${topp}" width="${husB}" height="${f(h * k)}"/>`;
      for (let yy = topp + 12; yy < Y(0) - 18; yy += 26) for (const xx of [28, 50]) s += `<rect class="fig-hus-fonster" x="${xx}" y="${f(yy)}" width="12" height="14"/>`;
      s += skraffer(6, B - 6, Y(0));
      // banan för den kastade bollen
      const P = Array.from({ length: 41 }, (_, i) => { const t = T * i / 40; return [xs + v * t * k, Y(h - g * t * t / 2) - r]; });
      s += `<path class="fig-kast-bana" d="M${P.map(p => f(p[0]) + ' ' + f(p[1])).join(' L')}"/>`;
      // de streckade linjerna och bollarna vid varje tidpunkt
      tider.forEach(t => { const y = Y(h - g * t * t / 2) - r, xk = xs + v * t * k;
        if (t > 0) s += `<line class="fig-kast-hojd" x1="${f(xs + r)}" y1="${f(y)}" x2="${f(xk - r)}" y2="${f(y)}" data-t="${t}"/>`;
        s += `<circle class="fig-kast-boll fig-kast-slappt" cx="${f(xs)}" cy="${f(y)}" r="${r}" data-boll="slappt" data-t="${t}"/>`;
        s += `<circle class="fig-kast-boll fig-kast-kastad" cx="${f(xk)}" cy="${f(y)}" r="${r}" data-boll="kastad" data-t="${t}"/>`; });
      s += kastText(xs, Y(0) + 12 + KT, 'släppt', 'fig-mitt') + kastText(xs + v * T * k, Y(0) + 12 + KT, 'kastad', 'fig-mitt');
      s += kastText(18 + husB / 2, topp - 8, tal(h) + ' m', 'fig-mitt');
      beskr = `Ett höghus som är ${tal(h)} m högt. Från taket släpps en boll rakt ned och en annan kastas vågrätt med ${tal(v)} m/s, samtidigt. ` +
        `Bollarna är ritade var ${tal(dt)} sekund: de ligger på samma höjd vid varje tidpunkt, och båda når marken efter ${tal(Math.round(T * 100) / 100)} s, den kastade ${tal(Math.round(v * T * 10) / 10)} m från huset.`;
    } else if (lage === 'komposanter') {
      const v = d.fart || fel('kastbana komposanter behöver fart'), n = d.sekunder || 3;
      const r = 7, vanster = 34, topp = KT + 20;
      const k = Math.min((B - vanster - 40) / (v * n + 0.75 * v), 300 / (g * n * n / 2 + 0.75 * g * n)), kv = 0.75 * k;
      const X = x => vanster + x * k, Y = y => topp + y * k;         // y: fallet nedåt (m)
      H = Math.ceil(Y(g * n * n / 2) + g * n * kv + 14);
      const P = Array.from({ length: 41 }, (_, i) => { const t = n * i / 40; return [X(v * t), Y(g * t * t / 2)]; });
      s += `<path class="fig-kast-bana" d="M${P.map(p => f(p[0]) + ' ' + f(p[1])).join(' L')}"/>`;
      for (let t = 0; t <= n; t++) {
        const x = X(v * t), y = Y(g * t * t / 2), vy = g * t;
        s += `<circle class="fig-kast-boll fig-kast-kastad" cx="${f(x)}" cy="${f(y)}" r="${r}" data-t="${t}"/>`;
        s += `<g class="fig-kast-fart" data-riktning="x" data-t="${t}" data-varde="${v}" data-x1="${f(x)}" data-x2="${f(x + v * kv)}">${pil(x, y, x + v * kv, y, 7, 'fig-kast-vx')}</g>`;
        s += `<g class="fig-kast-fart" data-riktning="y" data-t="${t}" data-varde="${vy}" data-y1="${f(y)}" data-y2="${f(y + vy * kv)}">${vy ? pil(x, y, x, y + vy * kv, 7, 'fig-kast-vy') : ''}</g>`;
        s += kastText(x - r - 6, y + 6, tal(t) + ' s', 'fig-hoger');
      }
      s += kastText(X(0) + v * kv / 2 + 4, Y(0) - 12, 'framåt: lika', 'fig-vanster fig-kast-vx-text');
      s += kastText(X(v * 2) - 10, Y(2 * g) + g * kv + KT, 'nedåt: ökar', 'fig-hoger fig-kast-vy-text');
      beskr = `Ett vågrätt kast med ${tal(v)} m/s. Bollens läge är ritat varje sekund, ${n} sekunder. Vid varje läge visar en vågrät pil farten framåt, som är lika hela tiden, och en lodrät pil farten nedåt, som ökar med ${tal(g)} m/s varje sekund (${Array.from({ length: n + 1 }, (_, t) => tal(g * t)).join(', ')} m/s).`;
    } else if (lage === 'vinklar') {
      const v = d.fart || fel('kastbana vinklar behöver fart'), V = d.vinklar || [30, 45, 60], rad = a => a * Math.PI / 180;
      const R = a => v * v * Math.sin(2 * rad(a)) / g, Hm = a => (v * Math.sin(rad(a))) ** 2 / (2 * g);
      const maxR = Math.max(...V.map(R)), maxH = Math.max(...V.map(Hm)), x0 = 26, topp = KT + 18;
      const k = Math.min((B - x0 - 30) / maxR, 190 / maxH), Y0 = topp + maxH * k;
      H = Math.ceil(Y0 + 22);
      s += skraffer(6, B - 6, Y0);
      V.forEach(a => {
        const T = 2 * v * Math.sin(rad(a)) / g, P = Array.from({ length: 61 }, (_, i) => { const t = T * i / 60; return [x0 + v * Math.cos(rad(a)) * t * k, Y0 - (v * Math.sin(rad(a)) * t - g * t * t / 2) * k]; });
        s += `<path class="fig-kast-bana-v" d="M${P.map(p => f(p[0]) + ' ' + f(p[1])).join(' L')}" data-vinkel="${a}"/>`;
        s += `<circle class="fig-kast-landning" cx="${f(P[60][0])}" cy="${f(Y0)}" r="4" data-vinkel="${a}"/>`;
      });
      // vinklarnas namn: på varje bana, på första stället (från toppen och utåt) där namnet inte ligger på en annan bana
      // eller ett annat namn
      const bana = a => { const T = 2 * v * Math.sin(rad(a)) / g; return t => [x0 + v * Math.cos(rad(a)) * t * T * k, Y0 - (v * Math.sin(rad(a)) * t * T - g * (t * T) ** 2 / 2) * k]; };
      const lagda = [];
      V.forEach(a => {
        const w = (String(a).length + 1) * KT * 0.5 + 4, ovr = V.filter(b => b !== a).map(bana);
        const ledig = ([x, y]) => { const r = [x - w / 2, y - KT, x + w / 2, y + 3];
          return r[1] > 0 && ovr.every(b => Array.from({ length: 121 }, (_, i) => b(i / 120)).every(([px, py]) => px < r[0] - 3 || px > r[2] + 3 || py < r[1] - 3 || py > r[3] + 3)) &&
            lagda.every(q => r[2] < q[0] || r[0] > q[2] || r[3] < q[1] || r[1] > q[3]); };
        const kand = [0.5, 0.42, 0.58, 0.34, 0.66, 0.26, 0.74, 0.18, 0.82].map(t => { const [x, y] = bana(a)(t); return [x, y - 8]; });
        const [lx, ly] = kand.find(ledig) || kand[0];
        lagda.push([lx - w / 2, ly - KT, lx + w / 2, ly + 3]);
        s += kastText(lx, ly, a + '°', 'fig-mitt fig-halo');
      });
      s += `<circle class="fig-kast-start" cx="${x0}" cy="${f(Y0)}" r="4"/>`;
      const bast = V.reduce((a, b) => (R(b) > R(a) ? b : a));
      beskr = `Tre kastbanor från samma punkt med farten ${tal(v)} m/s, utan luftmotstånd: ${V.map(a => a + '°').join(', ')}. ${bast}° landar längst` +
        (V.length === 3 && Math.abs(V[0] + V[2] - 90) < 1e-9 ? `, ${V[0]}° och ${V[2]}° landar på samma ställe, och ${V[2]}° når högst.` : '.');
    } else if (lage === 'hopp') {
      // IV D (arbetsorder 17): en enkel figur i fem lägen i ett hopp – avstamp, uppåt, högst, nedåt, landning – med
      // tyngdpunkten som en prick i varje läge. Prickarna räknas ur kastet (samma tid mellan lägena); figurens
      // ställning ritas runt pricken och ändrar inte banan. Figuren är ritad mindre än i skala.
      const v = d.fart || 6, a = (d.vinkel || 45) * Math.PI / 180, T = 2 * v * Math.sin(a) / g, vx = v * Math.cos(a), vy = v * Math.sin(a);
      const kf = 52, x0 = 44, bredd = B - 2 * x0, k = Math.min(bredd / (vx * T), 120 / (vy * vy / (2 * g)));
      const topp = KT + 26 + 0.75 * kf, Y0 = topp + vy * vy / (2 * g) * k, mark = Y0 + 0.95 * kf;
      H = Math.ceil(mark + 16);
      const X = t => x0 + (bredd - vx * T * k) / 2 + vx * t * k, Y = t => Y0 - (vy * t - g * t * t / 2) * k;
      s += skraffer(6, B - 6, mark);
      const P = Array.from({ length: 41 }, (_, i) => [X(T * i / 40), Y(T * i / 40)]);
      s += `<path class="fig-kast-bana" d="M${P.map(p => f(p[0]) + ' ' + f(p[1])).join(' L')}"/>`;
      // ställningarna (meter från tyngdpunkten, y uppåt): huvud, nacke, höft, armar och ben (armbåge/knä, hand/fot)
      const S = [
        { hu: [0.33, 0.62], na: [0.25, 0.45], ho: [0, -0.12], ar: [[[0.45, 0.6], [0.6, 0.78]], [[0.02, 0.18], [-0.16, 0.02]]], be: [[[-0.15, -0.52], [-0.32, -0.95]], [[0.3, -0.32], [0.24, -0.76]]] },
        { hu: [0.2, 0.68], na: [0.14, 0.5], ho: [0, -0.12], ar: [[[0.28, 0.76], [0.38, 1.0]], [[0.04, 0.76], [0.14, 1.0]]], be: [[[-0.1, -0.52], [-0.36, -0.9]], [[0.16, -0.46], [0.0, -0.86]]] },
        { hu: [0.08, 0.68], na: [0.05, 0.5], ho: [0, -0.12], ar: [[[0.3, 0.36], [0.5, 0.3]], [[0.25, 0.3], [0.45, 0.24]]], be: [[[0.36, -0.08], [0.26, -0.5]], [[0.3, -0.14], [0.2, -0.56]]] },
        { hu: [-0.05, 0.68], na: [-0.04, 0.5], ho: [0, -0.12], ar: [[[0.24, 0.26], [0.5, 0.12]], [[0.2, 0.2], [0.46, 0.06]]], be: [[[0.4, -0.2], [0.76, -0.44]], [[0.35, -0.26], [0.7, -0.5]]] },
        { hu: [0.3, 0.6], na: [0.2, 0.44], ho: [0, -0.12], ar: [[[0.44, 0.4], [0.7, 0.42]], [[0.4, 0.34], [0.66, 0.36]]], be: [[[0.36, -0.46], [0.3, -0.95]], [[0.3, -0.5], [0.18, -0.95]]] }
      ];
      S.forEach((st, i) => {
        const t = T * i / 4, cx = X(t), cy = Y(t), p = q => f(cx + q[0] * kf) + ' ' + f(cy - q[1] * kf);
        let fig = `<path class="fig-hopp-kropp" d="M${p(st.na)} L${p(st.ho)}"/>`;
        st.ar.forEach(([e, h]) => { fig += `<path class="fig-hopp-lem" d="M${p(st.na)} L${p(e)} L${p(h)}"/>`; });
        st.be.forEach(([kn, fo]) => { fig += `<path class="fig-hopp-lem" d="M${p(st.ho)} L${p(kn)} L${p(fo)}"/>`; });
        fig += `<circle class="fig-hopp-huvud" cx="${f(cx + st.hu[0] * kf)}" cy="${f(cy - st.hu[1] * kf)}" r="${f(0.12 * kf)}"/>`;
        s += `<g class="fig-hopp-figur" data-t="${tal(Math.round(t * 1000) / 1000)}">${fig}</g>`;
        s += `<circle class="fig-tyngdpunkt fig-hopp-tp" cx="${f(cx)}" cy="${f(cy)}" r="5" data-t="${Math.round(t * 1000) / 1000}"/>`;
      });
      s += kastText(10, KT + 4, 'tyngdpunktens bana', 'fig-vanster fig-kast-vx-text');
      beskr = `Ett hopp i fem lägen med samma tid mellan: avstamp, på väg upp, högst upp, på väg ned och landning. Pricken är tyngdpunkten. ` +
        'Den följer en kastbana (streckad), fast armar och ben har olika ställning i varje läge.';
    } else fel('kastbana: okänt läge ”' + lage + '”');
    return { svg: svg(B, H, s).replace('<svg ', `<svg data-kastbana="${lage}" `), beskrivning: d.beskrivning || beskr };
  });

  /* Cirkelrörelse (IV C, arbetsorder 16), sedd uppifrån:
   *   lage 'snore': radie?, vinkel? (grader, bollen i snöret), slapp? (grader, där snöret släpps) – en boll som snurras i
   *                 ett snöre runt mitten (moturs): snöret och kraftpilen in mot mitten, och där snöret släpps bollen med
   *                 sin fortsatta raka bana längs tangenten (streckad pil)
   *   lage 'bil':   radie?, vinkel? – en bil i en kurva (moturs): friktionen från vägen in mot kurvans mitt, och en
   *                 streckad rak linje längs tangenten för vart bilen tar vägen om friktionen inte räcker
   * Vinklar räknas moturs från höger (matematikens). Grinden mäter att kraftpilen pekar mot mitten och att den raka
   * banan är vinkelrät mot radien där den börjar. */
  Bok.figur('cirkelrorelse', d => {
    const lage = d.lage || fel('cirkelrorelse behöver lage: snore eller bil'), B = 440, rad = a => a * Math.PI / 180;
    let s = '', H, beskr, nedersta = 0;
    const P = (C, R, a) => [C[0] + R * Math.cos(rad(a)), C[1] - R * Math.sin(rad(a))];
    const tangent = (a) => [-Math.sin(rad(a)), -Math.cos(rad(a))];          // moturs, i skärmens koordinater
    const kraft = (C, p, L, namn, tx, klass = '') => {
      const dx = C[0] - p[0], dy = C[1] - p[1], l = Math.hypot(dx, dy), e = [p[0] + dx / l * L, p[1] + dy / l * L];
      // utan tx: namnet vid pilens mitt, vinkelrätt ut från pilen (uppåt, eller åt höger om pilen är vågrät)
      let n = [-dy / l, dx / l]; if (n[1] > 0.2 || (Math.abs(n[1]) <= 0.2 && n[0] < 0)) n = [-n[0], -n[1]];
      return `<g class="fig-cirkel-kraft" data-cx="${f(C[0])}" data-cy="${f(C[1])}">${pil(p[0], p[1], e[0], e[1], 8)}</g>` +
        (tx ? kastText(tx[0], tx[1], namn, 'fig-kast-pil-text ' + klass) : etikett((p[0] + e[0]) / 2, (p[1] + e[1]) / 2, namn, n[0], n[1], 'fig-kast-pil-text ' + klass));
    };
    // en etikett vid punkten (x, y), förskjuten åt (ux, uy): förankrad efter riktningen och flyttad in i figuren om den
    // skulle gå utanför (bredden uppskattad i överkant)
    const etikett = (x, y, namn, ux, uy, klass = '', fore = null) => {
      const w = namn.length * KT * 0.45;
      let anc = ux > 0.35 ? 'fig-vanster' : ux < -0.35 ? 'fig-hoger' : 'fig-mitt';
      // ryms den inte bredvid punkten står den över eller under den i stället – vid en pilspets på den sida pilen pekar åt
      if ((anc === 'fig-vanster' && x + ux * 12 + w > B - 4) || (anc === 'fig-hoger' && x + ux * 12 - w < 4)) { ux = 0; uy = (fore ? fore[1] : uy) < 0 ? -1 : 1; anc = 'fig-mitt'; }
      x += ux * 12; y += uy * 12 + (uy > 0.35 ? KT * 0.75 : uy < -0.35 ? 0 : KT * 0.35);
      if (anc === 'fig-vanster') x = Math.min(x, B - 4 - w); else if (anc === 'fig-hoger') x = Math.max(x, 4 + w); else x = Math.max(4 + w / 2, Math.min(B - 4 - w / 2, x));
      y = Math.max(KT, y); nedersta = Math.max(nedersta, y + 6);
      return kastText(x, y, namn, anc + ' ' + klass); };
    const ut = (C, p) => { const dx = p[0] - C[0], dy = p[1] - C[1], l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
    const rakt = (C, p, a, L, namn) => { const t = tangent(a), e = [p[0] + t[0] * L, p[1] + t[1] * L], u = ut(C, e);
      return `<g class="fig-cirkel-tangent" data-cx="${f(C[0])}" data-cy="${f(C[1])}" data-bx="${f(p[0])}" data-by="${f(p[1])}">${pil(p[0], p[1], e[0], e[1], 8, 'fig-tangent')}</g>` +
        etikett(e[0], e[1], namn, u[0], u[1], 'fig-halo', t); };
    if (lage === 'snore') {
      const R = d.radie || 105, a = d.vinkel != null ? d.vinkel : 40, b = d.slapp != null ? d.slapp : 200, C = [220, 40 + R + 20];
      H = Math.ceil(C[1] + R + 40);
      s += `<circle class="fig-cirkel-bana" cx="${C[0]}" cy="${f(C[1])}" r="${R}"/>`;
      // rotationsriktningen: en kort båge med pilspets på banan, en bit före bollen
      const b1 = P(C, R, a - 52), b2 = P(C, R, a - 22);
      s += `<path class="fig-pil fig-cirkel-riktning" d="M${f(b1[0])} ${f(b1[1])} A${R} ${R} 0 0 0 ${f(b2[0])} ${f(b2[1])}"/>`;
      const tr = tangent(a - 22);
      s += `<polygon class="fig-pilspets fig-cirkel-riktning" points="${f(b2[0] + tr[0] * 9)},${f(b2[1] + tr[1] * 9)} ${f(b2[0] - tr[1] * 5)},${f(b2[1] + tr[0] * 5)} ${f(b2[0] + tr[1] * 5)},${f(b2[1] - tr[0] * 5)}"/>`;
      s += `<circle class="fig-cirkel-mitt" cx="${C[0]}" cy="${f(C[1])}" r="4"/>` + kastText(C[0], C[1] + KT + 8, 'mitten', 'fig-mitt');
      const p = P(C, R, a), q = P(C, R, b);
      s += `<line class="fig-snore" x1="${C[0]}" y1="${f(C[1])}" x2="${f(p[0])}" y2="${f(p[1])}"/>`;
      s += kraft(C, p, R * 0.55, 'snörets kraft', null, 'fig-halo');
      s += `<circle class="fig-kast-boll fig-kast-kastad" cx="${f(p[0])}" cy="${f(p[1])}" r="9"/>`;
      s += `<circle class="fig-kast-boll fig-kast-slappt" cx="${f(q[0])}" cy="${f(q[1])}" r="9"/>`;
      s += rakt(C, q, b, R * 0.95, 'snöret släpps');
      H = Math.max(H, Math.ceil(nedersta));
      beskr = d.beskrivning || 'En boll som snurras runt i ett snöre, sedd uppifrån. Snöret drar bollen in mot mitten: kraftpilen pekar mot cirkelns mitt. Där snöret släpps fortsätter bollen rakt fram längs en tangent, inte utåt från mitten.';
    } else if (lage === 'bil') {
      const R = d.radie || 150, a = d.vinkel != null ? d.vinkel : 62, w = 40, C = [210, 46 + R + w / 2 + 26];
      H = Math.ceil(C[1] + KT + 16);
      const a0 = 12, a1 = 168, arc = (r) => { const p0 = P(C, r, a0), p1 = P(C, r, a1); return `M${f(p0[0])} ${f(p0[1])} A${r} ${r} 0 0 0 ${f(p1[0])} ${f(p1[1])}`; };
      s += `<path class="fig-vag" d="${arc(R + w / 2)} L${f(P(C, R - w / 2, a1)[0])} ${f(P(C, R - w / 2, a1)[1])} A${R - w / 2} ${R - w / 2} 0 0 1 ${f(P(C, R - w / 2, a0)[0])} ${f(P(C, R - w / 2, a0)[1])} Z"/>`;
      s += `<path class="fig-vag-mitt" d="${arc(R)}"/>`;
      s += `<path class="fig-cirkel-mittkors" d="M${C[0] - 6} ${f(C[1])} L${C[0] + 6} ${f(C[1])} M${C[0]} ${f(C[1] - 6)} L${C[0]} ${f(C[1] + 6)}"/>` + kastText(C[0], C[1] + KT + 6, 'kurvans mitt', 'fig-mitt');
      const p = P(C, R, a), t = tangent(a), ang = Math.atan2(t[1], t[0]) * 180 / Math.PI;
      s += kraft(C, p, R * 0.42, 'friktion från vägen', [C[0], C[1] - R * 0.3], 'fig-mitt');
      s += rakt(C, p, a, R * 0.8, 'utan friktion: rakt fram');
      s += `<g class="fig-bil" transform="translate(${f(p[0])} ${f(p[1])}) rotate(${f(ang)})"><rect x="-17" y="-9" width="34" height="18" rx="4"/><rect class="fig-bil-ruta" x="2" y="-6" width="9" height="12" rx="2"/></g>`;
      H = Math.max(H, Math.ceil(nedersta));
      beskr = d.beskrivning || 'En bil i en kurva, sedd uppifrån. Friktionen från vägen drar bilen in mot kurvans mitt. Om friktionen inte räcker fortsätter bilen rakt fram längs tangenten, den streckade linjen.';
    } else fel('cirkelrorelse: okänt läge ”' + lage + '”');
    return { svg: svg(B, H, s).replace('<svg ', `<svg data-cirkelrorelse="${lage}" `), beskrivning: d.beskrivning || beskr };
  });
  /* Stabilitet (IV D, arbetsorder 17): tyngdpunkt, lodlinje och stödyta, i ett eller flera lägen bredvid varandra.
   *   lage 'lada':     bredd?: 2, hojd?: 3, vinklar?: [0, 15, 45] – en låda per vinkel, lutad åt höger runt sin högra
   *                    nedre kant; tyngdpunkten i lådans mitt och en streckad lodlinje ned till marken. Under varje låda
   *                    vad som händer: står rakt, faller tillbaka eller välter (räknat ur var lodlinjen träffar).
   *   lage 'fordon':   vinkel?: 30, fordon?: [{namn, sparvidd (m), tpHojd (m), hojd (m), form: 'racer' | 'last'}] –
   *                    fordonen bakifrån, lutade runt det högra hjulet; stödytan är sträckan mellan hjulen
   *   lage 'hojdhopp': ribba?: 2 (m) – en höjdhoppare i bågform (ryggen först) över ribban; tyngdpunkten räknad ur
   *                    kroppens delar (bål och lår, huvud, armar, underben)
   * Stödytan är markerad på marken. Grinden mäter var lodlinjen träffar, att tyngdpunkten ligger i lådans mitt och,
   * i höjdhoppet, att tyngdpunkten är under ribbans överkant och kroppen över den. */
  const vridP = (P, v) => ([x, y]) => [P[0] + x * Math.cos(v) - y * Math.sin(v), P[1] + x * Math.sin(v) + y * Math.cos(v)];
  const hornP = q => q.map(p => f(p[0]) + ',' + f(p[1])).join(' ');
  // en böjd pil runt P (radie R) från vinkeln a1 till a2 (radianer, skärmens): faller tillbaka eller välter
  const stabBage = (P, R, a1, a2, klass) => {
    const p = a => [P[0] + R * Math.cos(a), P[1] + R * Math.sin(a)], e = p(a2), riktn = Math.sign(a2 - a1), t = [-Math.sin(a2) * riktn, Math.cos(a2) * riktn];
    const b = [e[0] - t[0] * 9, e[1] - t[1] * 9];
    return `<path class="fig-pil fig-stab-pil ${klass}" d="M${f(p(a1)[0])} ${f(p(a1)[1])} A${f(R)} ${f(R)} 0 0 ${riktn > 0 ? 1 : 0} ${f(b[0])} ${f(b[1])}"/>` +
      `<polygon class="fig-pilspets fig-stab-pil ${klass}" points="${f(e[0])},${f(e[1])} ${f(b[0] - t[1] * 5)},${f(b[1] + t[0] * 5)} ${f(b[0] + t[1] * 5)},${f(b[1] - t[0] * 5)}"/>`;
  };
  Bok.figur('stabilitet', d => {
    const lage = d.lage || fel('stabilitet behöver lage: lada, fordon eller hojdhopp'), B = 440, rad = a => a * Math.PI / 180;
    let s = '', H, beskr;
    // ett lutat föremål i en panel: hörnen (lokalt, vridpunkten i 0,0, y uppåt negativ), tyngdpunkten och stödytans
    // vänstra ände (lokalt); tillbaka: om lodlinjen träffar stödytan
    const lutat = (P, v, tp, stod) => { const R = vridP(P, v), T = R(tp), S = R(stod);
      return { R, T, ute: T[0] > P[0] + 1e-6, stodyta: [Math.min(S[0], P[0]), Math.max(S[0], P[0])] }; };
    const lod = (T, mark, stodyta) => `<line class="fig-lodlinje" x1="${f(T[0])}" y1="${f(T[1])}" x2="${f(T[0])}" y2="${f(mark)}"/>` +
      `<line class="fig-stodyta" x1="${f(stodyta[0])}" y1="${f(mark)}" x2="${f(stodyta[1])}" y2="${f(mark)}"/>` +
      `<circle class="fig-tyngdpunkt" cx="${f(T[0])}" cy="${f(T[1])}" r="5.5"/>`;
    if (lage === 'lada') {
      const w = d.bredd || 2, h = d.hojd || 3, V = d.vinklar || [0, 15, 45], n = V.length, pb = B / n;
      const ext = V.map(a => [w * Math.cos(rad(a)) + h * Math.sin(rad(a)), w * Math.sin(rad(a)) + h * Math.cos(rad(a))]);
      const k = Math.min((pb - 34) / Math.max(...ext.map(e => e[0])), 180 / Math.max(...ext.map(e => e[1])));
      const topp = KT + 26, mark = topp + Math.max(...ext.map(e => e[1])) * k;
      H = Math.ceil(mark + 12 + KT + 8);
      s += skraffer(6, B - 6, mark);
      const utfall = [];
      V.forEach((a, i) => {
        const v = rad(a), hn = [[0, 0], [-w * k, 0], [-w * k, -h * k], [0, -h * k]];
        const xs = hn.map(vridP([0, 0], v)).map(p => p[0]), P = [pb * (i + 0.5) - (Math.min(...xs) + Math.max(...xs)) / 2, mark];
        const L = lutat(P, v, [-w * k / 2, -h * k / 2], [-w * k, 0]), ord = !a ? 'står rakt' : L.ute ? 'välter' : 'faller tillbaka';
        utfall.push(a + '°: ' + ord);
        let g = `<polygon class="fig-lada" points="${hornP(hn.map(L.R))}"/>` + lod(L.T, mark, L.stodyta);
        if (a) { const topp_ = L.R([-w * k / 2, -h * k]), fi = Math.atan2(topp_[1] - P[1], topp_[0] - P[0]), R = Math.hypot(topp_[0] - P[0], topp_[1] - P[1]) + 12;
          g += L.ute ? stabBage(P, R, fi - 0.12, fi + 0.3, 'fig-stab-valter') : stabBage(P, R, fi + 0.05, fi - 0.3, 'fig-stab-tillbaka'); }
        g += kastText(pb * (i + 0.5), KT + 4, a ? a + '°' : 'rak', 'fig-mitt');
        g += kastText(pb * (i + 0.5), mark + 12 + KT, ord, 'fig-mitt' + (a && L.ute ? ' fig-stab-valter-text' : ''));
        s += `<g class="fig-stab-panel" data-vinkel="${a}" data-utfall="${!a ? 'star' : L.ute ? 'valter' : 'tillbaka'}">${g}</g>`;
      });
      beskr = `En låda (bredd ${tal(w)}, höjd ${tal(h)}) i ${n} lägen: ${utfall.join(', ')}. Tyngdpunkten är i lådans mitt, ` +
        'och den streckade lodlinjen går rakt ned från den. Så länge linjen träffar lådans botten (stödytan) faller lådan tillbaka; hamnar den utanför välter lådan.';
    } else if (lage === 'fordon') {
      const a = d.vinkel != null ? d.vinkel : 30, v = rad(a);
      const F = d.fordon || [{ namn: 'racerbil', sparvidd: 1.8, tpHojd: 0.35, hojd: 0.85, form: 'racer' }, { namn: 'lastbil', sparvidd: 2.0, tpHojd: 2.2, hojd: 3.8, form: 'last' }];
      const n = F.length, pb = B / n;
      const ext = F.map(x => [(x.sparvidd + 0.4) * Math.cos(v) + x.hojd * Math.sin(v), (x.sparvidd + 0.4) * Math.sin(v) + x.hojd * Math.cos(v)]);
      const k = Math.min((pb - 30) / Math.max(...ext.map(e => e[0])), 200 / Math.max(...ext.map(e => e[1])));
      const topp = KT + 22, mark = topp + Math.max(...ext.map(e => e[1])) * k;
      H = Math.ceil(mark + 12 + KT + 8);
      s += skraffer(6, B - 6, mark);
      const utfall = [];
      F.forEach((x, i) => {
        const S = x.sparvidd * k, hj = (x.form === 'last' ? 0.5 : 0.32) * k, hb = (x.form === 'last' ? 0.3 : 0.28) * k;
        const lok = [[0.2 * k, 0], [-S - 0.2 * k, 0], [-S - 0.2 * k, -x.hojd * k], [0.2 * k, -x.hojd * k]];
        const xs = lok.map(vridP([0, 0], v)).map(p => p[0]), P = [pb * (i + 0.5) - (Math.min(...xs) + Math.max(...xs)) / 2, mark];
        const L = lutat(P, v, [-S / 2, -x.tpHojd * k], [-S, 0]), R = L.R, ord = L.ute ? 'välter' : 'står kvar';
        utfall.push(`${x.namn}: ${ord}`);
        const ruta = (x1, y1, x2, y2) => [[x1, y1], [x2, y1], [x2, y2], [x1, y2]].map(R);
        let g = '';
        // karossen: racerbilen låg och bred med en vinge, lastbilen ett högt skåp på ett chassi
        if (x.form === 'last') {
          g += `<polygon class="fig-fordon-chassi" points="${hornP(ruta(-S - 0.05 * k, -0.25 * k, 0.05 * k, -0.85 * k))}"/>`;
          g += `<polygon class="fig-fordon" points="${hornP(ruta(-S - 0.2 * k, -0.85 * k, 0.2 * k, -x.hojd * k))}"/>`;
          g += `<polygon class="fig-fordon-dorr" points="${hornP(ruta(-S / 2 - 0.02 * k, -0.95 * k, -S / 2 + 0.02 * k, -x.hojd * k + 0.1 * k))}"/>`;
        } else {
          g += `<polygon class="fig-fordon" points="${hornP([[-S - 0.2 * k, -0.1 * k], [0.2 * k, -0.1 * k], [0.12 * k, -0.5 * k], [-S / 2 + 0.3 * k, -0.62 * k], [-S / 2 - 0.3 * k, -0.62 * k], [-S - 0.12 * k, -0.5 * k]].map(R))}"/>`;
          g += `<polygon class="fig-fordon-dorr" points="${hornP([[-S / 2 - 0.25 * k, -0.5 * k], [-S / 2 + 0.25 * k, -0.5 * k], [-S / 2 + 0.18 * k, -0.62 * k], [-S / 2 - 0.18 * k, -0.62 * k]].map(R))}"/>`;
          g += `<polygon class="fig-fordon" points="${hornP(ruta(-S / 2 - 0.55 * k, -x.hojd * k, -S / 2 + 0.55 * k, -x.hojd * k + 0.08 * k))}"/>`;
          g += `<polygon class="fig-fordon-chassi" points="${hornP(ruta(-S / 2 - 0.35 * k, -0.62 * k, -S / 2 - 0.27 * k, -x.hojd * k + 0.1 * k))}"/>`;
          g += `<polygon class="fig-fordon-chassi" points="${hornP(ruta(-S / 2 + 0.27 * k, -0.62 * k, -S / 2 + 0.35 * k, -x.hojd * k + 0.1 * k))}"/>`;
        }
        [0, -S].forEach(cx => { const kp = R([cx, 0]);
          g += `<polygon class="fig-hjul" data-kx="${f(kp[0])}" data-ky="${f(kp[1])}" points="${hornP(ruta(cx - hb / 2, 0, cx + hb / 2, -hj))}"/>`; });
        g += lod(L.T, mark, L.stodyta);
        g += kastText(pb * (i + 0.5), KT + 4, x.namn, 'fig-mitt');
        g += kastText(pb * (i + 0.5), mark + 12 + KT, ord, 'fig-mitt' + (L.ute ? ' fig-stab-valter-text' : ''));
        s += `<g class="fig-stab-panel" data-vinkel="${a}" data-utfall="${L.ute ? 'valter' : 'tillbaka'}" data-sparvidd="${x.sparvidd}" data-tp-hojd="${x.tpHojd}">${g}</g>`;
      });
      beskr = `${F.map(x => x.namn[0].toUpperCase() + x.namn.slice(1)).join(' och ')} bakifrån, lutade ${a}° åt höger. Tyngdpunkten är markerad, och den streckade lodlinjen går rakt ned från den. ` +
        `Stödytan är sträckan mellan hjulen. ${utfall.map(u => u[0].toUpperCase() + u.slice(1)).join('. ')}.`;
    } else if (lage === 'hojdhopp') {
      const hb = d.ribba || 2, Rc = 0.62, al = rad(78), k = 150, x0 = B / 2 - 10, botten = hb - 1.15, mark = KT + 20 + (hb + 0.2 - botten) * k;
      const X = x => x0 + x * k, Y = y => mark - (y - botten) * k;
      H = Math.ceil(mark + 14 + KT + 6);
      // kroppen (meter, y uppåt): bål och lår en båge över ribban, huvud och armar till vänster, underbenen till höger
      const yc = hb + 0.13 - Rc, bagP = Array.from({ length: 41 }, (_, i) => { const t = Math.PI / 2 + al - 2 * al * i / 40; return [Rc * Math.cos(t) + 0.04, yc + Rc * Math.sin(t)]; });
      const axel = bagP[4], knä = bagP[40], huvud = [bagP[0][0] - 0.1, bagP[0][1] - 0.1];
      const arm = [[axel[0], axel[1]], [axel[0] - 0.12, axel[1] - 0.3], [axel[0] - 0.06, axel[1] - 0.58]];
      const ben = [[knä[0], knä[1]], [knä[0] + 0.1, knä[1] - 0.42]];
      // tyngdpunkten: bål och lår (68 %) jämnt längs bågen, huvudet 8 %, armarna 10 %, underbenen 14 %
      const langs = (p, m) => { const L = p.slice(1).map((q, i) => Math.hypot(q[0] - p[i][0], q[1] - p[i][1])), Lt = L.reduce((a, b) => a + b, 0);
        return L.reduce((a, l, i) => [a[0] + (p[i][0] + p[i + 1][0]) / 2 * l / Lt * m, a[1] + (p[i][1] + p[i + 1][1]) / 2 * l / Lt * m], [0, 0]); };
      const delar = [langs(bagP, 0.68), [huvud[0] * 0.08, huvud[1] * 0.08], langs(arm, 0.10), langs(ben, 0.14)];
      const tp = delar.reduce((a, p) => [a[0] + p[0], a[1] + p[1]], [0, 0]);
      // bara överdelen av stången
      s += `<line class="fig-stang" x1="${f(X(0))}" y1="${f(mark)}" x2="${f(X(0))}" y2="${f(Y(hb) + 6)}"/>`;
      const vag = p => 'M' + p.map(q => f(X(q[0])) + ' ' + f(Y(q[1]))).join(' L');
      s += `<path class="fig-kropp" d="${vag(bagP)}"/><path class="fig-kropp fig-lem" d="${vag(arm)}"/><path class="fig-kropp fig-lem" d="${vag(ben)}"/>`;
      s += `<circle class="fig-huvud" cx="${f(X(huvud[0]))}" cy="${f(Y(huvud[1]))}" r="${f(0.11 * k)}"/>`;
      s += `<circle class="fig-ribba" cx="${f(X(0))}" cy="${f(Y(hb))}" r="5"/>`;
      s += `<circle class="fig-tyngdpunkt" cx="${f(X(tp[0]))}" cy="${f(Y(tp[1]))}" r="5.5"/>`;
      // teckenförklaringen under figuren
      const ty = mark + 14 + KT * 0.7;
      s += `<circle class="fig-tyngdpunkt fig-tecken" cx="60" cy="${f(ty - 6)}" r="5.5"/>` + kastText(72, ty, 'tyngdpunkten', 'fig-vanster');
      s += `<circle class="fig-ribba-tecken" cx="260" cy="${f(ty - 6)}" r="5"/>` + kastText(272, ty, 'ribban', 'fig-vanster');
      beskr = `En höjdhoppare går över ribban (${tal(hb)} m) med ryggen först och kroppen böjd som en båge. Tyngdpunkten, räknad ur kroppens delar, ligger ${tal(Math.round((hb - tp[1]) * 100))} cm under ribban, medan kroppen går över den.`;
    } else fel('stabilitet: okänt läge ”' + lage + '”');
    return { svg: svg(B, H, s).replace('<svg ', `<svg data-stabilitet="${lage}" `), beskrivning: d.beskrivning || beskr };
  });

  /* Krock (IV D, arbetsorder 17): två bilar från sidan mot en vägg, ögonblicket då de har stannat. Överst en styv bil,
   * nederst en bil med deformationszon. Streckat: bilen när fronten nuddade väggen; den heldragna har rört sig
   * stoppsträckan framåt, och fronten är hoptryckt lika mycket. Kupén är lika lång i båda.
   *   stopp?: [0.05, 0.5] (m, den styva bilens och deformationszonens stoppsträcka), langd?: 4.4 (m), front?: 1.1 (m)
   * Grinden mäter att deformationszonens sträcka är tydligt längre (minst dubbelt) och att kupén är lika lång. */
  Bok.figur('krock', d => {
    const [s1, s2] = d.stopp || [0.05, 0.5], L = d.langd || 4.4, Fr = d.front || 1.1, B = 440, vagg = B - 30;
    if (!(s1 < s2) || s2 >= Fr) fel('krock: stopp ska vara [styv, deformationszon], den styva kortast och båda kortare än fronten');
    const k = 260 / L, kh = 1.45 * k, radH = KT + 14 + kh + 12 + KT + 20;
    let s = `<rect class="fig-vagg" x="${vagg}" y="8" width="20" height="${f(2 * radH - 8)}"/>`;
    [[s1, 'styv bil', 'kort tid – stor kraft', 72, 'styv'], [s2, 'deformationszon', 'längre tid – mindre kraft', 34, 'zon']].forEach(([st, namn, kraft, pl, id], i) => {
      const y0 = i * radH, mark = y0 + KT + 14 + kh, front0 = Fr * k, fram = vagg, bak0 = vagg - L * k, bak = bak0 + st * k;
      const kupe = 2.3 * k, bakDel = L * k - front0 - kupe;
      // kroppen (y uppåt från marken): bakdel, kupé och front
      const bil = (x0, front, kl) => { const xb = x0, xk = x0 + bakDel, xf = xk + kupe, xe = xf + front, Yy = h => mark - h * k;
        return `<polygon class="${kl}" points="${hornP([[xb, Yy(0.25)], [xb, Yy(0.95)], [xk, Yy(0.98)], [xk + 0.35 * k, Yy(1.45)], [xf - 0.3 * k, Yy(1.45)], [xf, Yy(0.98)], [xe, Yy(0.85)], [xe, Yy(0.25)]])}"/>`; };
      s += `<g class="fig-krock-rad" data-rad="${id}" data-stopp="${st}">`;
      s += bil(bak0, front0, 'fig-krock-fore');
      s += bil(bak, front0 - st * k, 'fig-krock-bil');
      // fronten hoptryckt: en sicksack över den del som har tryckts ihop (bara om den syns)
      const xf = bak + bakDel + kupe, fe = fram;
      if (st * k > 6) { const nz = Math.max(3, Math.round((fe - xf) / 9)), zz = Array.from({ length: nz + 1 }, (_, j) => [xf + (fe - xf) * j / nz, mark - (j % 2 ? 0.75 : 0.45) * k]);
        s += `<polyline class="fig-krock-veck" points="${hornP(zz)}"/>`; }
      s += `<rect class="fig-kupe" x="${f(bak + bakDel)}" y="${f(mark - 1.4 * k)}" width="${f(kupe)}" height="${f(0.36 * k)}" data-langd="${f(kupe)}"/>`;
      [bak + 0.75 * k, bak + bakDel + kupe + 0.1 * k].forEach(cx => { s += `<circle class="fig-krock-hjul" cx="${f(cx)}" cy="${f(mark - 0.33 * k)}" r="${f(0.33 * k)}"/>`; });
      s += `<line class="fig-bord" x1="6" y1="${f(mark)}" x2="${vagg}" y2="${f(mark)}"/>`;
      // stoppsträckan: från den streckade bilens bakända till den heldragnas
      s += `<line class="fig-krock-matt" x1="${f(bak0)}" y1="${f(mark + 10)}" x2="${f(bak)}" y2="${f(mark + 10)}" data-stracka="${f(bak - bak0)}"/>` +
        `<line class="fig-krock-matt" x1="${f(bak0)}" y1="${f(mark + 4)}" x2="${f(bak0)}" y2="${f(mark + 16)}"/><line class="fig-krock-matt" x1="${f(bak)}" y1="${f(mark + 4)}" x2="${f(bak)}" y2="${f(mark + 16)}"/>`;
      s += kastText(bak0 - 6, mark + 10 + KT * 0.35, 'stoppsträcka ' + (st < 1 ? tal(Math.round(st * 100)) + ' cm' : tal(st) + ' m'), 'fig-hoger');
      s += '</g>';
      s += kastText(10, y0 + KT + 4, namn, 'fig-vanster fig-krock-namn');
      // kraften från väggen på bilen: en pil åt vänster vid väggen, med texten före
      s += `<g class="fig-krock-kraft">${pil(vagg - 4, y0 + KT - 2, vagg - 4 - pl, y0 + KT - 2, 8)}</g>` + kastText(vagg - 4 - pl - 10, y0 + KT + 4, kraft, 'fig-hoger fig-kast-pil-text');
    });
    const H = Math.ceil(2 * radH);
    const beskr = `Två bilar har krockat rakt in i en vägg, sedda från sidan. Streckat: bilen när fronten nuddade väggen. Den styva bilen stannar på ${tal(Math.round(s1 * 100))} cm: kort tid och stor kraft. ` +
      `Bilen med deformationszon stannar på ${tal(Math.round(s2 * 100))} cm, fronten trycks ihop men kupén är hel: längre tid och mindre kraft.`;
    return { svg: svg(B, H, s).replace('<svg ', '<svg data-krock="1" '), beskrivning: d.beskrivning || beskr };
  });

  /* Tryck (Kraft och rörelse V A, arbetsorder 21, 2026-11-12). Text 19 enheter (minst 14 px i mobilens spalt), krafterna
   * i kraftpilarnas guld, tryckpilarna i vattnet i indigo. Varje läge skriver sina mått i elementen (data-*), och grinden
   * mäter det figuren påstår i elementen själva (verktyg/bok-grind.js, figurKoll: tr).
   *   lage 'sno':           tyngd?: 600 (N), skor?: [{namn, langd (m)}, {namn, langd}] – samma person i djup snö, en panel
   *                         per sko. Hur djupt foten sjunker räknas ur trycket (kortare sula: högre tryck); tyngdpilen är
   *                         lika lång i båda
   *   lage 'hydraulik':     areor?: [2, 100] (cm²) – två cylindrar med olja, sammankopplade; en smal och en bred kolv på
   *                         samma höjd, en kort pil ned på den lilla och en längre pil upp under bilen på den stora (pilen
   *                         har ett tak: skala 1:50 går inte), och samma tryck p i båda cylindrarna
   *   lage 'lyftkraft':     djup?: 0.7 (klossens överkant under ytan, i klossens sidor) – en kloss helt under vatten,
   *                         tryckpilar mot alla fyra sidor, långa i proportion till djupet, och lyftkraften uppåt =
   *                         undersidans pil − ovansidans
   *   lage 'hydraulik-vag': areor?: [2, 100] (cm²), krafter?: [200, 10000] (N), vag?: 0.5 (m) – samma lyft med sträckorna:
   *                         den lilla kolven pressas ned vag, den stora stiger vag · A₁/A₂ (samma oljevolym); krafterna,
   *                         areorna och sträckorna utskrivna */
  const cmText = m => tal(Math.round(m * 1000) / 10) + ' cm';
  Bok.figur('tryck', d => {
    const lage = d.lage || fel('tryck behöver lage: sno, hydraulik, lyftkraft eller hydraulik-vag'), B = 440;
    let s = '', H, beskr;
    if (lage === 'sno') {
      const tyngd = d.tyngd || 600, skor = d.skor || [{ namn: 'kängor', langd: 0.3 }, { namn: 'snöskor', langd: 0.8 }];
      if (skor.length !== 2 || !(skor[0].langd > 0 && skor[1].langd > 0) || skor[0].langd === skor[1].langd) fel('tryck sno: två skor med olika sullängd (m)');
      const k = 70, sjunk = l => Math.min(0.45, 0.03 / (l * l)) * k;          // px: kortare sula – högre tryck – djupare
      const pb = B / 2, S = KT + 16 + 123 - Math.min(...skor.map(x => sjunk(x.langd))), botten = S + Math.max(...skor.map(x => sjunk(x.langd))) + 34;
      H = Math.ceil(botten + KT + 14);
      const kort = Math.min(...skor.map(x => x.langd)), PL = 55;
      skor.forEach((x, i) => {
        const cx = pb * (i + 0.5) - 14, yF = S + sjunk(x.langd), L = x.langd * k, liten = x.langd === kort;
        let g = `<rect class="fig-sno" x="${f(pb * i + 8)}" y="${f(S)}" width="${f(pb - 16)}" height="${f(botten - S)}"/>`;
        g += `<line class="fig-sno-yta" x1="${f(pb * i + 8)}" y1="${f(S)}" x2="${f(pb * (i + 1) - 8)}" y2="${f(S)}"/>`;
        // personen från sidan: ben, bål, armar och huvud; sulan under foten
        g += `<path class="fig-hopp-lem" d="M${f(cx)} ${f(yF - 60)} L${f(cx - 3)} ${f(yF - 6)} M${f(cx)} ${f(yF - 60)} L${f(cx + 3)} ${f(yF - 6)}"/>`;
        g += `<path class="fig-hopp-kropp" d="M${f(cx)} ${f(yF - 60)} L${f(cx)} ${f(yF - 100)}"/>`;
        g += `<path class="fig-hopp-lem" d="M${f(cx)} ${f(yF - 98)} L${f(cx - 7)} ${f(yF - 62)} M${f(cx)} ${f(yF - 98)} L${f(cx + 7)} ${f(yF - 62)}"/>`;
        g += `<circle class="fig-hopp-huvud" cx="${f(cx)}" cy="${f(yF - 112)}" r="11"/>`;
        g += `<rect class="fig-tryck-sula${liten ? '' : ' fig-tryck-snosko'}" x="${f(cx - L / 2)}" y="${f(yF - 6)}" width="${f(L)}" height="6" rx="${liten ? 1.5 : 3}" data-langd="${x.langd}"/>`;
        // snön som täcker det som har sjunkit ned
        if (yF - S > 1) g += `<rect class="fig-sno-tacke" x="${f(cx - L / 2 - 5)}" y="${f(S)}" width="${f(L + 10)}" height="${f(yF - S + 1)}"/>`;
        g += `<g class="fig-tryck-tyngd" data-tyngd="${tyngd}">${pil(cx + 32, yF - 80, cx + 32, yF - 80 + PL, 8)}</g>`;
        g += kastText(cx + 40, yF - 46, 'tyngd', 'fig-vanster fig-kast-pil-text');
        g += kastText(pb * (i + 0.5), KT + 4, `${x.namn} – ${liten ? 'liten' : 'stor'} yta`, 'fig-mitt');
        g += kastText(pb * (i + 0.5), botten + KT + 4, yF - S > 0.1 * k ? 'sjunker ned' : 'står kvar ovanpå', 'fig-mitt');
        s += `<g class="fig-tryck-panel" data-sko="${esc(x.namn)}" data-langd="${x.langd}" data-yta="${f(S)}">${g}</g>`;
      });
      const [a, b] = skor[0].langd < skor[1].langd ? skor : [skor[1], skor[0]];
      beskr = `Samma person, med tyngden ${tal(tyngd)} N, i djup snö två gånger. Med ${a.namn} är ytan mot snön liten, trycket blir högt och personen sjunker ned. ` +
        `Med ${b.namn} är ytan stor, trycket blir lågt och personen står kvar ovanpå. Tyngdpilen är lika lång i båda.`;
    } else if (lage === 'hydraulik' || lage === 'hydraulik-vag') {
      const vagL = lage === 'hydraulik-vag', [A1, A2] = d.areor || [2, 100];
      if (!(A2 > A1 && A1 > 0)) fel('tryck hydraulik: areor [liten, stor] (cm²), den stora störst');
      const [F1, F2] = d.krafter || [200, 200 * A2 / A1], vag = d.vag || 0.5, upp = vag * A1 / A2;
      if (vagL && Math.abs(F1 * vag - F2 * upp) > 1e-9 * F2) fel('tryck hydraulik-vag: krafterna ska ha samma kvot som areorna');
      const c = Math.min(24 / Math.sqrt(A1), 156 / Math.sqrt(A2)), w1 = c * Math.sqrt(A1), w2 = c * Math.sqrt(A2);
      const x1 = 95, x2 = 300, L1 = 38, L2 = Math.min(L1 * A2 / A1, 116), ph = 22;
      const sPx = vagL ? 100 : 0, uPx = sPx * A1 / A2, yP0 = KT + 62, yB = yP0 + 145;
      const yL = yP0 + sPx, yR = yP0 - uPx;                 // kolvarnas undersidor (oljans yta) efter
      const v1 = [x1 - w1 / 2, x1 + w1 / 2], v2 = [x2 - w2 / 2, x2 + w2 / 2];
      // oljan: den lilla cylindern, röret längst ned och den stora cylindern, en yta
      const olja = [[v1[0], yL], [v1[0], yB], [v2[1], yB], [v2[1], yR], [v2[0], yR], [v2[0], yB - ph], [v1[1], yB - ph], [v1[1], yL]];
      s += `<polygon class="fig-olja" points="${hornP(olja)}"/>`;
      s += `<polyline class="fig-cylinder" points="${hornP([[v1[0], yP0 - 30], [v1[0], yB], [v2[1], yB], [v2[1], yP0 - 30]])}"/>`;
      s += `<polyline class="fig-cylinder" points="${hornP([[v1[1], yP0 - 30], [v1[1], yB - ph], [v2[0], yB - ph], [v2[0], yP0 - 30]])}"/>`;
      // kolvarna (före: streckade, på samma höjd)
      const kolv = (v, y, sida, A, F, vg) => `<g class="fig-tryck-kolv" data-sida="${sida}" data-area="${A}" data-kraft="${F}"${vagL ? ` data-vag="${vg}"` : ''}>` +
        (vagL ? `<rect class="fig-kolv-fore" x="${f(v[0] + 1)}" y="${f(yP0 - 10)}" width="${f(v[1] - v[0] - 2)}" height="10"/>` : '') +
        `<rect class="fig-kolv" x="${f(v[0] + 1)}" y="${f(y - 10)}" width="${f(v[1] - v[0] - 2)}" height="10"/></g>`;
      s += kolv(v1, yL, 'liten', A1, F1, vag) + kolv(v2, yR, 'stor', A2, F2, upp);
      // bilen på den stora kolven
      const cw = Math.min(w2 - 16, 128), bx = x2 - cw / 2, by = yR - 10, Y = h => by - h;
      s += `<polygon class="fig-krock-bil" points="${hornP([[bx, Y(9)], [bx, Y(26)], [bx + cw * 0.22, Y(28)], [bx + cw * 0.32, Y(46)], [bx + cw * 0.72, Y(46)], [bx + cw * 0.84, Y(28)], [bx + cw, Y(25)], [bx + cw, Y(9)]])}"/>`;
      s += `<polygon class="fig-kupe" points="${hornP([[bx + cw * 0.35, Y(29)], [bx + cw * 0.40, Y(42)], [bx + cw * 0.68, Y(42)], [bx + cw * 0.76, Y(29)]])}"/>`;
      [bx + cw * 0.2, bx + cw * 0.8].forEach(hx => { s += `<circle class="fig-krock-hjul" cx="${f(hx)}" cy="${f(Y(9))}" r="9"/>`; });
      // krafterna: ned på den lilla kolven, upp på den stora (i oljan, under kolven)
      s += `<g class="fig-tryck-kraft" data-sida="liten">${pil(x1, yL - 12 - L1, x1, yL - 12, 8)}</g>`;
      s += `<g class="fig-tryck-kraft" data-sida="stor">${pil(x2, yR + 3 + L2, x2, yR + 3, 9)}</g>`;
      // samma tryck p i båda cylindrarna
      const pY = (yL + yB - ph) / 2 + 7;
      s += `<text class="fig-text fig-kast-text fig-tryck-p fig-mitt" x="${f(x1)}" y="${f(Math.max(pY, yL + 22))}" data-sida="liten">p</text>`;
      s += `<text class="fig-text fig-kast-text fig-tryck-p fig-mitt" x="${f(v2[1] - 18)}" y="${f(yR + 50)}" data-sida="stor">p</text>`;
      if (!vagL) {
        s += kastText(x1, yL - 12 - L1 - 8, 'liten kraft', 'fig-mitt fig-kast-pil-text');
        s += kastText((v1[1] + v2[0]) / 2, yR + 3 + L2 / 2 + 6, 'stor kraft', 'fig-mitt fig-kast-pil-text');
        s += kastText(B / 2, yB + 12 + KT, 'p: samma tryck i hela oljan', 'fig-mitt');
        H = Math.ceil(yB + 12 + KT + 10);
        beskr = `En hydraulisk lyft: två cylindrar med olja, sammankopplade med ett rör längst ned. Den lilla kolven och den stora kolven står på samma höjd. ` +
          `En kort pil trycker ned den lilla kolven, och en längre pil lyfter den stora kolven med en bil på. Trycket p är lika stort i hela oljan, ` +
          `och den stora kolven har ${tal(A2 / A1)} gånger så stor yta – därför blir kraften på den ${tal(A2 / A1)} gånger så stor.`;
      } else {
        s += kastText(v1[1] + 8, yL - 12 - L1 / 2 + 6, tal(F1) + ' N', 'fig-vanster fig-kast-pil-text');
        s += kastText(v2[0] - 6, yP0 + 40, tal(F2) + ' N', 'fig-hoger fig-kast-pil-text');
        // sträckorna: den lilla kolven ned, den stora upp
        const matt = (x, ya, yb, sida, m) => `<g class="fig-tryck-matt" data-sida="${sida}" data-vag="${m}">` +
          `<line class="fig-krock-matt" x1="${f(x)}" y1="${f(ya)}" x2="${f(x)}" y2="${f(yb)}"/>` +
          `<line class="fig-krock-matt" x1="${f(x - 5)}" y1="${f(ya)}" x2="${f(x + 5)}" y2="${f(ya)}"/><line class="fig-krock-matt" x1="${f(x - 5)}" y1="${f(yb)}" x2="${f(x + 5)}" y2="${f(yb)}"/></g>`;
        s += matt(v1[0] - 14, yP0, yL, 'liten', vag) + kastText(v1[0] - 20, (yP0 + yL) / 2 + 6, cmText(vag), 'fig-hoger');
        s += matt(v2[1] + 8, yR, yP0, 'stor', upp) + kastText(v2[1] + 14, yP0 + 6, cmText(upp), 'fig-vanster');
        s += kastText(x1, yB + 8 + KT, tal(A1) + ' cm²', 'fig-mitt') + kastText(x2, yB + 8 + KT, tal(A2) + ' cm²', 'fig-mitt');
        H = Math.ceil(yB + 8 + KT + 10);
        beskr = `Samma hydrauliska lyft med sträckorna utmärkta. Den lilla kolven (${tal(A1)} cm²) pressas ned ${cmText(vag)} med kraften ${tal(F1)} N, ` +
          `och den stora kolven (${tal(A2)} cm²) stiger ${cmText(upp)} med kraften ${tal(F2)} N. Lika mycket olja flyttas: ${tal(A1)} · ${tal(vag * 100)} = ${tal(A2)} · ${tal(Math.round(upp * 1000) / 10)} cm³. ` +
          `Kraft gånger väg är lika stort på båda sidor: ${tal(F1)} · ${tal(vag)} = ${tal(F2)} · ${tal(upp)}.`;
      }
      s = s.replace('<polygon class="fig-olja"', `<polygon class="fig-olja" data-v1="${f(v1[0])},${f(v1[1])}" data-v2="${f(v2[0])},${f(v2[1])}"`);
    } else if (lage === 'lyftkraft') {
      const kl = 100, yta = KT + 16, dTop = (d.djup != null ? d.djup : 0.7) * kl, c = 0.42, cx = 150, top = yta + dTop, bot = top + kl;
      if (!(dTop > 0)) fel('tryck lyftkraft: djup > 0');
      const Lp = y => c * (y - yta), botten = bot + Lp(bot) + 18;
      H = Math.ceil(botten + 8);
      s += `<rect class="fig-vatten" x="8" y="${f(yta)}" width="${B - 16}" height="${f(botten - yta)}"/>`;
      s += `<line class="fig-vatten-yta" x1="8" y1="${f(yta)}" x2="${B - 8}" y2="${f(yta)}"/>`;
      s += `<rect class="fig-kloss" x="${f(cx - kl / 2)}" y="${f(top)}" width="${kl}" height="${kl}"/>`;
      const tp = (sida, x1, y1, x2, y2) => `<g class="fig-tryck-tryckpil" data-sida="${sida}">${pil(x1, y1, x2, y2, 7, 'fig-tryck-pil')}</g>`;
      s += tp('over', cx, top - Lp(top), cx, top) + tp('under', cx, bot + Lp(bot), cx, bot);
      for (const y of [top + kl / 4, top + 3 * kl / 4]) s += tp('vanster', cx - kl / 2 - Lp(y), y, cx - kl / 2, y) + tp('hoger', cx + kl / 2 + Lp(y), y, cx + kl / 2, y);
      const lyft = Lp(bot) - Lp(top), m = top + kl / 2;
      s += `<g class="fig-tryck-lyftkraft">${pil(cx, m + lyft / 2, cx, m - lyft / 2, 9, 'fig-tryck-lyft')}</g>`;
      s += kastText(cx + 12, top - 10, 'lägre tryck', 'fig-vanster') + kastText(cx + 12, bot + Lp(bot) / 2 + 8, 'högre tryck', 'fig-vanster');
      s += kastText(cx + kl / 2 + Lp(top + 3 * kl / 4) + 16, m + 6, 'lyftkraft', 'fig-vanster fig-tryck-lyft-text');
      beskr = 'En kloss helt under vatten. Vattnet trycker på klossen från alla håll, och pilarna är längre ju djupare de sitter. ' +
        'Pilarna mot sidorna är lika långa parvis och tar ut varandra. Pilen mot undersidan är längre än pilen mot ovansidan, och skillnaden är lyftkraften, som pekar uppåt.';
    } else fel('tryck: okänt läge ”' + lage + '”');
    return { svg: svg(B, H, s).replace('<svg ', `<svg data-tryck="${lage}" `), beskrivning: d.beskrivning || beskr };
  });

  /* ---------- Energi och arbete (Kraft och rörelse V B, arbetsorder 28, 2026-11-19) ----------
   * Text 19 enheter (som kastbanorna), kraftpilarna i kraftpilarnas guld. Rörelsepilarna är indigo, streckade och har
   * öppen spets: de ska inte kunna förväxlas med kraftpilar. Varje läge skriver sina mått i elementen (data-*), och
   * grinden mäter det figuren påstår i elementen själva (verktyg/bok-grind.js, figurKoll: en).
   *   energi, lage 'studs':  studsar?: 3 (1–5), kvar?: 0.6 (den del av höjden som är kvar efter varje studs, 0–1) – en
   *                          boll som släpps och studsar; banan är parabler (samma fart framåt, tiden ∝ √höjden), varje
   *                          topp lägre än den förra; bollen är hoptryckt bara vid golvet; "lägesenergi" i toppen,
   *                          "rörelseenergi" på vägen ned, "elastisk energi" vid golvet och små vågor vid varje studs
   *                          ("värme och ljud")
   *   energi, lage 'arbete': foremal?: 'lådan' – tre paneler: en person som lyfter lådan (kraft upp, rörelse upp: arbete), håller
   *                          den still (kraft upp, ingen rörelse) och bär den framåt (kraft upp, rörelse framåt)
   *   energi, lage 'snett':  kraft?: 100 (N), vinkel?: 30 (°) – en kälke som dras i ett snett rep; kraften i repet och dess
   *                          delar framåt (F · cos v) och uppåt (F · sin v), streckade som komposanterna i resultant_rutor;
   *                          vinkeln utmärkt, och rörelsen rakt fram
   *   energi, lage 'fall':   hojd?: 5 (m), lagen?: [5, 2.5, 0] (m) – (V C, arbetsorder 29) en boll som faller, och vid varje
   *                          läge två staplar: lägesenergins andel (i proportion till höjden) och rörelseenergins; tillsammans
   *                          lika höga i alla lägen
   *   energi, lage 'gunga':  vinkel?: 45 (°) – en gunga i tre lägen: högst till vänster och höger (samma höjd), lägst i mitten
   *   energi, lage 'stavhopp': (inga data) – ansatsen (staven rak), staven böjd i lådan, hopparen över ribban (staven rak)
   *   energi, lage 'ramp':   massa?: 50 (kg), hojd?: 1 (m), ramp?: 2 (m) – (V D) klotet upp på bordet rakt upp och i en vagn
   *                          längs rampen; krafterna, sträckorna och kraft gånger sträcka under båda
   *   energi, lage 'gungbrada': vanster?: {kraft: 800, arm: 1}, hoger?: {kraft: 400, arm: 2} – gungbrädan i balans, avstånden
   *                          i skala, tyngdpilarna i proportion och två lika stora motriktade vridpilar
   *   energi, lage 'talja':  lyft?: 1 (m) – ett fast och ett rörligt block, två repdelar; startläge och slutläge: lasten lyft
   *                          lyft m och 2 · lyft m rep indraget; dragkraftens pil halva tyngdpilen */
  const rorelsePil = (x1, y1, x2, y2) => {
    const a = Math.atan2(y2 - y1, x2 - x1), c = Math.cos(a), s = Math.sin(a), l = 12, w = 7;
    return `<line class="fig-rorelse" x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2 - 1.5 * c)}" y2="${f(y2 - 1.5 * s)}"/>` +
      `<polyline class="fig-rorelse-spets" points="${f(x2 - l * c - w * s)},${f(y2 - l * s + w * c)} ${f(x2)},${f(y2)} ${f(x2 - l * c + w * s)},${f(y2 - l * s - w * c)}"/>`;
  };
  const golvLinje = (x1, x2, y) => `<line class="fig-bord" x1="${f(x1)}" y1="${f(y)}" x2="${f(x2)}" y2="${f(y)}"/>` +
    Array.from({ length: Math.floor((x2 - x1) / 20) }, (_, i) => `<line class="fig-skraffer" x1="${f(x1 + 10 + i * 20)}" y1="${f(y + 1)}" x2="${f(x1 + i * 20)}" y2="${f(y + 12)}"/>`).join('');
  Bok.figur('energi', d => {
    const lage = d.lage || fel('energi behöver lage: studs, arbete, snett, fall, gunga, stavhopp, ramp, gungbrada eller talja'), B = 440;
    let s = '', H, beskr;
    if (lage === 'studs') {
      const n = d.studsar || 3, kvar = d.kvar != null ? d.kvar : 0.6;
      if (!(kvar > 0 && kvar < 1) || !(n >= 1 && n <= 5)) fel('energi studs: kvar mellan 0 och 1, studsar 1–5');
      const r = 13, h0 = 150, x0 = 132, xMax = B - 22, topp0 = r + 8, golvC = topp0 + h0, golv = golvC + r;
      const h = Array.from({ length: n + 1 }, (_, i) => h0 * Math.pow(kvar, i));
      // bredden: halva bågen ned från h0, hela bågar för studs 1 … n−1 och halva bågen upp till toppen efter den sista
      const k = (xMax - x0) / (Math.sqrt(h[0]) + 2 * h.slice(1, n).reduce((a, x) => a + Math.sqrt(x), 0) + Math.sqrt(h[n]));
      const halv = i => k * Math.sqrt(h[i]);
      // bågarna (bollens mitt): båge 0 från toppen till den första studsen, båge i från studs i till studs i+1 (den sista
      // till toppen efter den sista studsen)
      const studsX = [x0 + halv(0)];
      for (let i = 1; i < n; i++) studsX.push(studsX[i - 1] + 2 * halv(i));
      const bage = (xa, i, del) => {          // del: 'ned' (från toppen), 'hel', 'upp' (till toppen)
        const w = halv(i), pts = [], ty = golvC - h[i];
        const fran = del === 'ned' ? 0 : -1, till = del === 'upp' ? 0 : 1, xm = del === 'ned' ? xa : xa + w;
        for (let j = 0; j <= 24; j++) { const u = fran + (till - fran) * j / 24; pts.push([xm + u * w, ty + h[i] * u * u]); }
        return `<polyline class="fig-energi-bana" data-bage="${i}" points="${pts.map(p => f(p[0]) + ',' + f(p[1])).join(' ')}"/>`;
      };
      s += golvLinje(8, B - 8, golv);
      s += bage(x0, 0, 'ned');
      for (let i = 1; i <= n; i++) s += bage(studsX[i - 1], i, i === n ? 'upp' : 'hel');
      // värme och ljud: små vågor åt båda hållen vid varje studs
      studsX.forEach((x, i) => {
        let v = '';
        for (const sida of [-1, 1]) for (const rr of [9, 15]) {
          const a = x + sida * (r + 6 + rr * 0.35);
          v += `<path class="fig-energi-vag" d="M${f(a)} ${f(golv - rr)} Q${f(a + sida * rr * 0.55)} ${f(golv - rr / 2)} ${f(a)} ${f(golv - 1)}"/>`;
        }
        s += `<g class="fig-energi-vagor" data-studs="${i + 1}">${v}</g>`;
      });
      // bollarna: i toppen, på vägen ned, hoptryckt vid den första studsen, och svagt i topparna efter studsarna
      const boll = (x, y, rx, ry, klass, data) => `<ellipse class="fig-energi-boll ${klass}" ${data} cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}"/>`;
      for (let i = 1; i <= n; i++) s += boll(i === n ? xMax : studsX[i - 1] + halv(i), golvC - h[i], r, r, 'fig-energi-skugga', `data-topp="${i}"`);
      const uNed = 0.72, xNed = x0 + uNed * halv(0), yNed = topp0 + h0 * uNed * uNed;
      s += boll(x0, topp0, r, r, '', 'data-topp="0"') + boll(xNed, yNed, r, r, '', 'data-ned=""');
      const ry = r * 0.6, rx = r * 1.35;
      s += boll(studsX[0], golv - ry, rx, ry, '', 'data-golv=""');
      s += kastText(x0 - r - 8, topp0 + 6, 'lägesenergi', 'fig-hoger fig-energi-ord');
      s += kastText(xNed - r - 8, yNed + 6, 'rörelseenergi', 'fig-hoger fig-energi-ord');
      // "elastisk energi" till vänster om den första studsen, "värme och ljud" under golvet vid den andra (eller den enda)
      s += kastText(studsX[0] - rx - 22, golv - 6, 'elastisk energi', 'fig-hoger fig-energi-ord');
      const yT = golv + 14 + KT;
      s += kastText(studsX[Math.min(1, n - 1)], yT, 'värme och ljud', 'fig-mitt fig-energi-varme');
      H = Math.ceil(yT + 8);
      beskr = `En boll släpps och studsar ${n} ${n === 1 ? 'gång' : 'gånger'} mot ett golv. Varje studs blir lägre än den förra: bollen når ${tal(Math.round(kvar * 100))} % av höjden före. ` +
        'Högst upp har bollen lägesenergi, på vägen ned rörelseenergi, och mot golvet trycks den ihop: elastisk energi. Små vågor vid golvet visar värme och ljud.';
      s = s.replace('<line class="fig-bord"', `<line class="fig-bord" data-golv="${f(golv)}"`);
    } else if (lage === 'arbete') {
      const pw = B / 3, yG = KT + 40 + 128, lf = d.foremal || 'lådan';
      // förklaringen överst: kraftpil och rörelsepil
      s += `<g class="fig-energi-forklaring">${pil(B / 2 - 150, KT, B / 2 - 112, KT, 8)}${kastText(B / 2 - 104, KT + 6, 'kraft', 'fig-vanster fig-kast-pil-text')}` +
        `${rorelsePil(B / 2 + 18, KT, B / 2 + 56, KT)}${kastText(B / 2 + 64, KT + 6, 'rörelse', 'fig-vanster fig-energi-rorelse-text')}</g>`;
      const paneler = [
        { id: 'lyfter', ord: ['arbete'], rorelse: 'upp' },
        { id: 'haller', ord: ['inget arbete', 'på ' + lf], rorelse: null },
        { id: 'bar', ord: radbrytFig('kraften uppåt utför inget arbete på ' + lf, pw - 8), rorelse: 'fram' }
      ];
      paneler.forEach((p, i) => {
        const cx = pw * (i + 0.5), px = cx - 24, gang = p.id === 'bar';
        let g = golvLinje(pw * i + 6, pw * (i + 1) - 6, yG);
        // personen från sidan (ben, bål, huvud) och armarna fram till lådan
        g += `<path class="fig-hopp-lem" d="M${f(px)} ${f(yG - 52)} L${f(px - (gang ? 12 : 3))} ${f(yG)} M${f(px)} ${f(yG - 52)} L${f(px + (gang ? 12 : 3))} ${f(yG)}"/>`;
        g += `<path class="fig-hopp-kropp" d="M${f(px)} ${f(yG - 52)} L${f(px)} ${f(yG - 94)}"/>`;
        g += `<circle class="fig-hopp-huvud" cx="${f(px)}" cy="${f(yG - 106)}" r="11"/>`;
        const lx = cx - 6, ly = yG - 86, lb = 36, lh = 28;           // lådan
        g += `<path class="fig-hopp-lem" d="M${f(px)} ${f(yG - 90)} L${f(lx + 2)} ${f(ly + 10)} M${f(px)} ${f(yG - 86)} L${f(lx + 2)} ${f(ly + 18)}"/>`;
        if (p.id === 'lyfter') g += `<rect class="fig-energi-fore" x="${f(lx)}" y="${f(yG - lh)}" width="${lb}" height="${lh}"/>`;
        g += `<rect class="fig-lada fig-energi-lada" x="${f(lx)}" y="${f(ly)}" width="${lb}" height="${lh}"/>`;
        g += `<g class="fig-energi-kraft">${pil(lx + lb / 2, ly, lx + lb / 2, ly - 46, 8)}</g>`;
        if (p.rorelse === 'upp') g += `<g class="fig-energi-rorelse">${rorelsePil(lx + lb + 14, yG - 30, lx + lb + 14, ly - 6)}</g>`;
        if (p.rorelse === 'fram') g += `<g class="fig-energi-rorelse">${rorelsePil(lx - 4, ly + lh + 18, lx + lb + 30, ly + lh + 18)}</g>`;
        p.ord.forEach((t, j) => { g += kastText(cx, yG + 14 + KT + j * (KT + 9), t, 'fig-mitt fig-energi-ord' + (p.id === 'lyfter' ? ' fig-energi-arbete' : '')); });
        s += `<g class="fig-energi-panel" data-panel="${p.id}">${g}</g>`;
      });
      H = Math.ceil(yG + 14 + KT + (Math.max(...paneler.map(p => p.ord.length)) - 1) * (KT + 9) + 8);
      beskr = `Tre bilder av en person med ${lf}. Kraften från armarna pekar uppåt i alla tre. 1: personen lyfter ${lf}, som rör sig uppåt – ett arbete. ` +
        `2: personen håller ${lf} still – ingen rörelse, inget arbete på ${lf}. 3: personen bär ${lf} framåt – rörelsen är framåt, och kraften uppåt utför inget arbete på ${lf}. ` +
        'Kraftpilarna är guldfärgade, rörelsepilarna blå och streckade.';
    } else if (lage === 'snett') {
      const F = d.kraft || 100, v = d.vinkel != null ? d.vinkel : 30;
      if (!(v > 0 && v < 90) || !(F > 0)) fel('energi snett: kraft > 0 och vinkel mellan 0 och 90°');
      const rad = v * Math.PI / 180, L = 170, ax = 178, yG = KT + 34 + Math.max(L * Math.sin(rad) + 40, 120) + 36, ay = yG - 34;
      const tx = ax + L * Math.cos(rad), ty = ay - L * Math.sin(rad), fram = F * Math.cos(rad), upp = F * Math.sin(rad);
      s += golvLinje(8, B - 8, yG);
      // kälken: medarna och flaket; repet från flakets framkant snett uppåt, förbi kraftpilens spets
      s += `<path class="fig-energi-mede" d="M${f(ax - 122)} ${f(yG - 2)} L${f(ax - 6)} ${f(yG - 2)} Q${f(ax + 8)} ${f(yG - 2)} ${f(ax + 6)} ${f(yG - 14)}"/>`;
      s += `<rect class="fig-lada fig-energi-kalke" x="${f(ax - 116)}" y="${f(ay - 4)}" width="116" height="${f(yG - 10 - ay + 4)}"/>`;
      const rl = Math.min((B - 14 - ax) / Math.cos(rad), (ay - 6) / Math.sin(rad));
      s += `<line class="fig-snore" x1="${f(ax)}" y1="${f(ay)}" x2="${f(ax + rl * Math.cos(rad))}" y2="${f(ay - rl * Math.sin(rad))}"/>`;
      // delarna, streckade: först framåt längs marken, sedan uppåt till kraftpilens spets
      s += `<line class="fig-komposant" data-komposant="x" x1="${f(ax)}" y1="${f(ay)}" x2="${f(tx)}" y2="${f(ay)}"/>` +
        `<line class="fig-komposant" data-komposant="y" x1="${f(tx)}" y1="${f(ay)}" x2="${f(tx)}" y2="${f(ty)}"/>`;
      s += `<g class="fig-energi-repkraft" data-kraft="${F}" data-vinkel="${v}">${pil(ax, ay, tx, ty, 9)}</g>`;
      // vinkeln mellan marken och repet
      const vr = 46;
      s += `<path class="fig-energi-vinkel" d="M${f(ax + vr)} ${f(ay)} A${vr} ${vr} 0 0 0 ${f(ax + vr * Math.cos(rad))} ${f(ay - vr * Math.sin(rad))}"/>`;
      s += kastText(ax + (vr + 10) * Math.cos(rad / 2), ay - (vr + 10) * Math.sin(rad / 2) + 7, tal(v) + '°', 'fig-vanster fig-energi-vinkel-text');
      // talen: kraften vid pilens mitt (ovanför), delen framåt under den streckade linjen, delen uppåt bredvid
      const avr = x => Math.abs(x - Math.round(x)) > 0.05 ? '≈ ' + tal(Math.round(x)) : tal(Math.round(x));
      const del = (x, y, t, k, namn) => `<text x="${f(x)}" y="${f(y)}" class="fig-text fig-kast-text fig-energi-del ${k}" data-del="${namn}">${esc(t)}</text>`;
      s += del(ax + L * 0.5 * Math.cos(rad) - 14 * Math.sin(rad), ay - L * 0.5 * Math.sin(rad) - 14 * Math.cos(rad), tal(F) + ' N', 'fig-hoger fig-kast-pil-text fig-halo', 'kraft');
      s += del((ax + tx) / 2 + 18, ay + KT + 2, avr(fram) + ' N framåt', 'fig-mitt', 'fram');
      s += del(tx + 10, (ay + ty) / 2 + 7, avr(upp) + ' N uppåt', 'fig-vanster fig-halo', 'upp');
      // rörelsen: rakt fram, ovanför kälken
      const ry = ay - 30;
      s += `<g class="fig-energi-rorelse">${rorelsePil(ax - 112, ry, ax - 24, ry)}</g>` + kastText(ax - 68, ry - 12, 'rörelse', 'fig-mitt fig-energi-rorelse-text');
      H = Math.ceil(yG + 16);
      beskr = `En kälke som dras i ett rep. Repet drar med ${tal(F)} N snett uppåt, ${tal(v)}° mot marken. Kraften är delad i en del framåt, ${avr(fram)} N, och en del uppåt, ${avr(upp)} N. ` +
        'Kälken rör sig rakt fram längs marken, så bara delen framåt utför arbete.';
    } else if (lage === 'fall') {
      // C1: en boll som faller, i några lägen; vid varje läge lägesenergins och rörelseenergins staplar (andelar av den
      // mekaniska energin). Lägesenergins stapel är lika hög som bollens höjd över marken (samma skala).
      const Hm = d.hojd || 5, lagen = d.lagen || [Hm, Hm / 2, 0];
      if (!lagen.length || lagen.some(x => !(x >= 0 && x <= Hm))) fel('energi fall: lagen mellan 0 och hojd (m)');
      const n = lagen.length, pw = B / n, r = 11, S = 130, k = S / Hm, yG = KT + 34 + S + 2 * r + 6;
      // förklaringen överst
      s += `<g class="fig-energi-forklaring"><rect class="fig-energi-stapel fig-energi-ep" x="${f(B / 2 - 168)}" y="${f(KT - 8)}" width="14" height="14"/>` +
        kastText(B / 2 - 148, KT + 4, 'lägesenergi', 'fig-vanster') +
        `<rect class="fig-energi-stapel fig-energi-ek" x="${f(B / 2 + 18)}" y="${f(KT - 8)}" width="14" height="14"/>` + kastText(B / 2 + 38, KT + 4, 'rörelseenergi', 'fig-vanster') + '</g>';
      s += golvLinje(8, B - 8, yG);
      lagen.forEach((hm, i) => {
        const x0 = pw * i, bx = x0 + 30, ep = hm / Hm, ek = 1 - ep, cy = yG - r - 1 - hm * k;
        let g = '';
        if (i) g += `<line class="fig-kast-hojd" x1="${f(bx)}" y1="${f(yG - r - 1 - Hm * k)}" x2="${f(bx)}" y2="${f(cy - r - 3)}"/>`;
        g += `<circle class="fig-energi-boll fig-energi-fallboll" cx="${f(bx)}" cy="${f(cy)}" r="${r}"/>`;
        const stapel = (x, andel, klass, slag) => { const hh = andel * S;
          return `<rect class="fig-energi-stapel ${klass}" data-slag="${slag}" data-andel="${f(andel * 1000) / 1000}" x="${f(x)}" y="${f(yG - hh)}" width="24" height="${f(hh)}"/>` +
            kastText(x + 12, yG - hh - 7, tal(Math.round(andel * 100)) + ' %', 'fig-mitt'); };
        g += stapel(x0 + 60, ep, 'fig-energi-ep', 'lage') + stapel(x0 + 100, ek, 'fig-energi-ek', 'rorelse');
        g += kastText(bx + 46, yG + 14 + KT, hm === 0 ? '≈ 0 m' : tal(hm) + ' m', 'fig-mitt');
        s += `<g class="fig-energi-lage" data-hojd="${hm}">${g}</g>`;
      });
      H = Math.ceil(yG + 14 + KT + 8);
      s = s.replace('<line class="fig-bord"', `<line class="fig-bord" data-golv="${f(yG)}"`);
      beskr = `En boll som faller från ${tal(Hm)} m, i ${n} lägen: ` + lagen.map(x => `${x === 0 ? 'strax ovanför marken' : tal(x) + ' m'} – lägesenergi ${tal(Math.round(x / Hm * 100))} %, rörelseenergi ${tal(Math.round((1 - x / Hm) * 100))} %`).join('; ') +
        '. Staplarna är tillsammans lika höga i alla lägen.';
    } else if (lage === 'gunga') {
      // C2: en gunga i tre lägen – högst till vänster, lägst i mitten, högst till höger (samma vinkel åt båda hållen). Orden
      // vid ytterlägena står utanför gungan, vid mitten under den.
      const v = (d.vinkel || 45) * Math.PI / 180, L = 120, px = B / 2, py = KT + 6;
      s += `<line class="fig-bord" x1="${f(px - 100)}" y1="${f(py)}" x2="${f(px + 100)}" y2="${f(py)}"/>` +
        Array.from({ length: 10 }, (_, i) => `<line class="fig-skraffer" x1="${f(px - 100 + i * 20)}" y1="${f(py - 1)}" x2="${f(px - 90 + i * 20)}" y2="${f(py - 12)}"/>`).join('');
      const plats = [['vanster', -v], ['mitt', 0], ['hoger', v]].map(([id, a]) => ({ id, x: px + L * Math.sin(a), y: py + L * Math.cos(a), a }));
      const [pv, pm, ph] = plats;
      s += `<path class="fig-energi-bana" d="M${f(pv.x)} ${f(pv.y)} A${L} ${L} 0 0 0 ${f(ph.x)} ${f(ph.y)}"/>`;
      plats.forEach(p => {
        let g = `<line class="fig-snore" x1="${f(px)}" y1="${f(py)}" x2="${f(p.x)}" y2="${f(p.y)}"/>`;
        // barnet sitter upprätt på sitsen
        g += `<path class="fig-hopp-kropp" d="M${f(p.x)} ${f(p.y - 3)} L${f(p.x)} ${f(p.y - 30)}"/><circle class="fig-hopp-huvud" cx="${f(p.x)}" cy="${f(p.y - 40)}" r="9"/>`;
        g += `<path class="fig-hopp-lem" d="M${f(p.x)} ${f(p.y - 2)} L${f(p.x + 12)} ${f(p.y + 2)} L${f(p.x + 14)} ${f(p.y + 18)}"/>`;
        g += `<rect class="fig-energi-sits" x="${f(p.x - 15)}" y="${f(p.y - 3)}" width="30" height="6"/>`;
        if (p.id === 'mitt') {
          ['störst rörelseenergi', 'går fortast'].forEach((t, j) => { g += kastText(p.x, p.y + 44 + j * (KT + 9), t, 'fig-mitt' + (j ? '' : ' fig-energi-ord')); });
          g += `<g class="fig-energi-rorelse">${rorelsePil(p.x + 24, p.y, p.x + 72, p.y)}</g>`;
        } else {
          const ut = p.id === 'vanster' ? -1 : 1, x = p.x + ut * 20, ank = ut < 0 ? 'fig-hoger' : 'fig-vanster';
          ['störst', 'lägesenergi', 'står stilla'].forEach((t, j) => { g += kastText(x, p.y - 24 + j * (KT + 9), t, ank + (j < 2 ? ' fig-energi-ord' : '')); });
        }
        s += `<g class="fig-energi-gungplats" data-plats="${p.id}">${g}</g>`;
      });
      H = Math.ceil(pm.y + 44 + KT + 9 + 10);
      beskr = 'En gunga i tre lägen. Högst till vänster står den stilla ett ögonblick och har störst lägesenergi. Lägst i mitten går den fortast och har störst rörelseenergi. ' +
        'Högst till höger, på samma höjd som till vänster, står den stilla igen och har störst lägesenergi.';
    } else if (lage === 'stavhopp') {
      // C3: stavhoppet i tre lägen – ansatsen (staven rak, framåt), staven böjd i lådan, hopparen över ribban
      const pw = B / 3, yG = KT + 190;
      s += golvLinje(8, B - 8, yG);
      const gubbe = (axl, hoft, huvud, fot1, fot2, hand) => `<path class="fig-hopp-kropp" d="M${f(axl[0])} ${f(axl[1])} L${f(hoft[0])} ${f(hoft[1])}"/>` +
        `<path class="fig-hopp-lem" d="M${f(hoft[0])} ${f(hoft[1])} L${f(fot1[0])} ${f(fot1[1])} M${f(hoft[0])} ${f(hoft[1])} L${f(fot2[0])} ${f(fot2[1])} M${f(axl[0])} ${f(axl[1])} L${f(hand[0])} ${f(hand[1])}"/>` +
        `<circle class="fig-hopp-huvud" cx="${f(huvud[0])}" cy="${f(huvud[1])}" r="9"/>`;
      const steg = [];
      // 1: ansatsen – hopparen springer med staven rak framför sig
      { const c = pw * 0.5 - 20;
        steg.push({ ord: 'rörelseenergi', stav: `M${f(c - 20)} ${f(yG - 104)} L${f(c + 78)} ${f(yG - 74)}`,
          g: gubbe([c + 4, yG - 88], [c - 4, yG - 48], [c + 8, yG - 102], [c + 14, yG - 4], [c - 24, yG - 10], [c + 22, yG - 91]) +
            `<g class="fig-energi-rorelse">${rorelsePil(c - 30, yG - 136, c + 40, yG - 136)}</g>` }); }
      // 2: staven i lådan, böjd – hopparen hänger i den övre änden
      { const c = pw * 1.5, lx = c + 44, top = [c - 14, yG - 112];
        steg.push({ ord: 'elastisk energi', stav: `M${f(lx)} ${f(yG)} Q${f(c + 58)} ${f(yG - 104)} ${f(top[0])} ${f(top[1])}`,
          g: `<rect class="fig-energi-lada" x="${f(lx - 8)}" y="${f(yG - 6)}" width="16" height="6"/>` +
            gubbe([c - 24, yG - 96], [c - 36, yG - 56], [c - 30, yG - 110], [c - 30, yG - 16], [c - 48, yG - 22], top) });
      }
      // 3: över ribban – kroppen vågrät över ribban, staven släppt (rak)
      { const c = pw * 2.5 + 6, yR = yG - 132;
        steg.push({ ord: 'lägesenergi', stav: `M${f(c - 62)} ${f(yG)} L${f(c - 74)} ${f(yG - 118)}`,
          g: `<line class="fig-stang" x1="${f(c - 46)}" y1="${f(yG)}" x2="${f(c - 46)}" y2="${f(yR - 8)}"/><line class="fig-stang" x1="${f(c + 46)}" y1="${f(yG)}" x2="${f(c + 46)}" y2="${f(yR - 8)}"/>` +
            `<line class="fig-energi-ribba" x1="${f(c - 46)}" y1="${f(yR)}" x2="${f(c + 46)}" y2="${f(yR)}"/>` +
            gubbe([c + 18, yR - 16], [c - 18, yR - 14], [c + 32, yR - 22], [c - 42, yR - 26], [c - 40, yR - 18], [c + 26, yR - 2]) });
      }
      steg.forEach((st, i) => {
        s += `<g class="fig-energi-stavsteg" data-steg="${i + 1}">${st.g}<path class="fig-energi-stav" d="${st.stav}"/>` +
          kastText(pw * (i + 0.5), yG + 14 + KT, st.ord, 'fig-mitt fig-energi-ord') + '</g>';
      });
      H = Math.ceil(yG + 14 + KT + 8);
      beskr = 'Stavhoppet i tre lägen. 1: ansatsen – hopparen springer fort med staven rak framför sig: rörelseenergi. 2: staven är satt i lådan och böjd: elastisk energi. ' +
        '3: staven har rätat ut sig och hopparen är över ribban: lägesenergi.';
    } else if (lage === 'ramp') {
      // D1: klotet upp på bordet två vägar – rakt upp och i en vagn längs en ramp; kraft gånger sträcka lika i båda
      const m = d.massa || 50, h = d.hojd || 1, l = d.ramp || 2, T = m * 10, Fr = T * h / l;
      if (!(l > h && h > 0)) fel('energi ramp: rampen längre än höjden');
      const run = Math.sqrt(l * l - h * h), k = Math.min(70, 120 / run, 90 / h), yG = KT + 40 + h * k + 34, top = yG - h * k, r = 11;
      const sin = h / l, cos = run / l, nx = -sin, ny = -cos;   // rampens riktning (cos, −sin) och normalen uppåt-vänster
      const matt = (x1, y1, x2, y2, t, tx, ty, ank) => `<g class="fig-energi-matt"><line class="fig-krock-matt" x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/></g>` + kastText(tx, ty, t, ank);
      s += golvLinje(8, B - 8, yG);
      // vänster: rakt upp
      { const tx = 112, tb = 64, bx = 58;
        let g = `<rect class="fig-lada fig-energi-bord" x="${f(tx)}" y="${f(top)}" width="${tb}" height="${f(h * k)}"/>`;
        g += `<circle class="fig-energi-fore" cx="${f(bx)}" cy="${f(yG - r)}" r="${r}"/>`;
        g += `<circle class="fig-energi-boll fig-energi-klot" cx="${f(tx + tb / 2)}" cy="${f(top - r)}" r="${r}"/>`;
        const Lf = 56;
        g += `<g class="fig-energi-kraftpil" data-kraft="${T}">${pil(bx, yG - 2 * r - 4, bx, yG - 2 * r - 4 - Lf, 8)}</g>` + kastText(bx, yG - 2 * r - 4 - Lf - 8, tal(T) + ' N', 'fig-mitt fig-kast-pil-text');
        g += matt(tx - 10, yG, tx - 10, top, tal(h) + ' m', tx - 16, (yG + top) / 2 + 7, 'fig-hoger');
        g += kastText(110, yG + 14 + KT, `${tal(T)} N · ${tal(h)} m = ${tal(T * h)} J`, 'fig-mitt fig-energi-ord');
        s += `<g class="fig-energi-vagen" data-vag="rakt" data-kraft="${T}" data-stracka="${h}" data-mpx="${f(k)}" data-topp="${f(top)}">${g}</g>`;
      }
      // höger: vagnen längs rampen
      { const x0 = 236, x1 = x0 + run * k, tb = Math.min(56, B - 12 - x1);
        let g = `<polygon class="fig-energi-ramp" points="${f(x0)},${f(yG)} ${f(x1)},${f(top)} ${f(x1)},${f(yG)}"/>`;
        g += `<rect class="fig-lada fig-energi-bord" x="${f(x1)}" y="${f(top)}" width="${f(tb)}" height="${f(h * k)}"/>`;
        g += `<circle class="fig-energi-boll fig-energi-skugga" cx="${f(x1 + tb / 2)}" cy="${f(top - r)}" r="${r}"/>`;
        const t = 0.3, p = [x0 + t * run * k, yG - t * h * k], a = -Math.atan2(h, run) * 180 / Math.PI;
        g += `<g transform="rotate(${f(a)} ${f(p[0])} ${f(p[1])})"><rect class="fig-energi-vagn" x="${f(p[0] - 16)}" y="${f(p[1] - 15)}" width="32" height="10"/>` +
          `<circle class="fig-krock-hjul" cx="${f(p[0] - 9)}" cy="${f(p[1] - 3)}" r="3"/><circle class="fig-krock-hjul" cx="${f(p[0] + 9)}" cy="${f(p[1] - 3)}" r="3"/>` +
          `<circle class="fig-energi-boll fig-energi-klot" cx="${f(p[0])}" cy="${f(p[1] - 15 - r + 3)}" r="${r}"/></g>`;
        const Lf = 56 * Fr / T, q = [p[0] + 18 * cos + 10 * nx, p[1] - 18 * sin + 10 * ny];
        g += `<g class="fig-energi-kraftpil" data-kraft="${Fr}">${pil(q[0], q[1], q[0] + Lf * cos, q[1] - Lf * sin, 8)}</g>` +
          kastText(q[0] + Lf * cos + 4, q[1] - Lf * sin - 8, tal(Fr) + ' N', 'fig-vanster fig-kast-pil-text fig-halo');
        const o = 46, a1 = [x0 + o * nx, yG + o * ny], a2 = [x1 + o * nx, top + o * ny];
        g += matt(a1[0], a1[1], a2[0], a2[1], tal(l) + ' m', (a1[0] + a2[0]) / 2 + 14 * nx, (a1[1] + a2[1]) / 2 + 14 * ny, 'fig-hoger');
        g += kastText(330, yG + 14 + KT, `${tal(Fr)} N · ${tal(l)} m = ${tal(Fr * l)} J`, 'fig-mitt fig-energi-ord');
        s += `<g class="fig-energi-vagen" data-vag="ramp" data-kraft="${Fr}" data-stracka="${l}" data-mpx="${f(k)}" data-topp="${f(top)}">${g}</g>`;
      }
      s = s.replace('<line class="fig-bord"', `<line class="fig-bord" data-golv="${f(yG)}"`);
      H = Math.ceil(yG + 14 + KT + 8);
      beskr = `Ett klot på ${tal(m)} kg ska upp på ett bord som är ${tal(h)} m högt. Till vänster lyfts det rakt upp med ${tal(T)} N längs ${tal(h)} m. Till höger dras det i en vagn uppför en ramp som är ${tal(l)} m lång, med ${tal(Fr)} N. ` +
        `Arbetet blir ${tal(T * h)} J i båda fallen, och klotet hamnar på samma höjd.`;
    } else if (lage === 'gungbrada') {
      // D2: en gungbräda i balans – kraft gånger hävarm lika på båda sidor, avstånden i skala, två lika stora motriktade vridpilar
      const V = d.vanster || { kraft: 800, arm: 1 }, Hh = d.hoger || { kraft: 400, arm: 2 };
      if (Math.abs(V.kraft * V.arm - Hh.kraft * Hh.arm) > 1e-9 * V.kraft) fel('energi gungbrada: momenten ska vara lika stora');
      const cx = B / 2, k = Math.min(85, 150 / Math.max(V.arm, Hh.arm)), yP = KT + 112, Fmax = Math.max(V.kraft, Hh.kraft), M = V.kraft * V.arm;
      s += `<rect class="fig-energi-planka" x="${f(cx - 205)}" y="${f(yP)}" width="410" height="8"/>`;
      s += `<polygon class="fig-energi-vridpunkt" points="${f(cx)},${f(yP + 8)} ${f(cx - 17)},${f(yP + 44)} ${f(cx + 17)},${f(yP + 44)}"/>`;
      s += golvLinje(8, B - 8, yP + 44);
      [['vanster', V, -1, 12, 52], ['hoger', Hh, 1, 9, 36]].forEach(([sida, P, tecken, rh, kropp]) => {
        const x = cx + tecken * P.arm * k, Lw = 64 * P.kraft / Fmax;
        let g = `<circle class="fig-energi-sittpunkt" cx="${f(x)}" cy="${f(yP)}" r="2.5"/>`;
        g += `<path class="fig-hopp-kropp" d="M${f(x)} ${f(yP - 2)} L${f(x)} ${f(yP - 2 - kropp)}"/><circle class="fig-hopp-huvud" cx="${f(x)}" cy="${f(yP - 2 - kropp - rh)}" r="${rh}"/>`;
        const ax = x + tecken * 20;
        g += `<g class="fig-energi-tyngdpil" data-kraft="${P.kraft}">${pil(ax, yP - Lw, ax, yP - 1, 8)}</g>` + kastText(ax + tecken * 20, yP - Lw - 8, tal(P.kraft) + ' N', 'fig-mitt fig-kast-pil-text');   // utåt, fritt från huvudet
        // avståndet till vridningspunkten under plankan
        const my = yP + 16;
        g += `<g class="fig-energi-matt"><line class="fig-krock-matt" x1="${f(cx + tecken * 10)}" y1="${f(my)}" x2="${f(x)}" y2="${f(my)}"/><line class="fig-krock-matt" x1="${f(x)}" y1="${f(my - 5)}" x2="${f(x)}" y2="${f(my + 5)}"/></g>` +
          kastText((cx + tecken * 10 + x) / 2, my + 21, tal(P.arm) + ' m', 'fig-mitt');
        s += `<g class="fig-energi-person" data-sida="${sida}" data-kraft="${P.kraft}" data-arm="${P.arm}">${g}</g>`;
      });
      // vridpilarna: lika stora bågar kring vridningspunkten, åt var sitt håll
      const R = 70, bage =(sida, fran, till) => { const p1 = [cx + R * Math.cos(fran), yP - R * Math.sin(fran)], p2 = [cx + R * Math.cos(till), yP - R * Math.sin(till)];
        const tang = till > fran ? [-Math.sin(till), -Math.cos(till)] : [Math.sin(till), Math.cos(till)];   // spetsens riktning (skärmens y nedåt)
        const sp = 9, b = [p2[0] - tang[0] * sp * 1.3, p2[1] - tang[1] * sp * 1.3], w = sp * 0.7;
        return `<g class="fig-energi-vrid" data-sida="${sida}"><path class="fig-energi-vridbage" d="M${f(p1[0])} ${f(p1[1])} A${R} ${R} 0 0 ${till > fran ? 0 : 1} ${f(b[0])} ${f(b[1])}"/>` +
          `<polygon class="fig-energi-vridspets" points="${f(p2[0])},${f(p2[1])} ${f(b[0] - w * tang[1])},${f(b[1] + w * tang[0])} ${f(b[0] + w * tang[1])},${f(b[1] - w * tang[0])}"/></g>`; };
      const gr = Math.PI / 180;
      s += bage('vanster', 100 * gr, 150 * gr) + bage('hoger', 80 * gr, 30 * gr);
      // talen ovanför bågarna, högre än den vuxnas huvud bredvid
      s += kastText(cx - 4, yP - R - 8, tal(M) + ' Nm', 'fig-hoger fig-energi-vrid-text') + kastText(cx + 4, yP - R - 8, tal(M) + ' Nm', 'fig-vanster fig-energi-vrid-text');
      s = s.replace('<rect class="fig-energi-planka"', `<rect class="fig-energi-planka" data-vridpunkt="${f(cx)},${f(yP)}" data-mpx="${f(k)}"`);
      H = Math.ceil(yP + 44 + 16);
      beskr = `En gungbräda i balans med vridningspunkten i mitten. ${tal(V.kraft)} N sitter ${tal(V.arm)} m ut på ena sidan och ${tal(Hh.kraft)} N sitter ${tal(Hh.arm)} m ut på den andra. ` +
        `Momenten är lika stora, ${tal(V.kraft)} · ${tal(V.arm)} = ${tal(Hh.kraft)} · ${tal(Hh.arm)} = ${tal(M)} Nm. Två lika stora vridpilar åt var sitt håll visar att de tar ut varandra.`;
    } else if (lage === 'talja') {
      // D3: en talja med ett fast block i taket och ett rörligt block med lasten; två repdelar bär lasten. Startläge och
      // slutläge: lasten lyft lyft m och 2 · lyft m rep indraget; dragkraften halva tyngden.
      const lyft = d.lyft || 1, k = Math.min(40, 80 / lyft), pw = B / 2, yT = KT + 34, Lw = 56, rb = 14;
      [['start', 0], ['slut', 1]].forEach(([id, i]) => {
        const cx = pw * i + 100, Fy = yT + 26, yM0 = yT + 150, yM = yM0 - i * lyft * k, yH0 = yT + 90, yH = yH0 + i * 2 * lyft * k;
        let g = `<line class="fig-bord" x1="${f(cx - 70)}" y1="${f(yT)}" x2="${f(cx + 70)}" y2="${f(yT)}"/>` +
          Array.from({ length: 7 }, (_, j) => `<line class="fig-skraffer" x1="${f(cx - 70 + j * 20)}" y1="${f(yT - 1)}" x2="${f(cx - 60 + j * 20)}" y2="${f(yT - 12)}"/>`).join('');
        g += kastText(cx, KT + 4, id === 'start' ? 'startläge' : 'slutläge', 'fig-mitt fig-energi-ord');
        g += `<line class="fig-snore" x1="${f(cx)}" y1="${f(yT)}" x2="${f(cx)}" y2="${f(Fy)}"/>`;
        // repet: fäst i taket, ned och runt det rörliga blocket, upp och över det fasta, ned till handen
        g += `<line class="fig-energi-rep fig-energi-repdel" data-bar="" x1="${f(cx - 42)}" y1="${f(yT)}" x2="${f(cx - 42)}" y2="${f(yM)}"/>`;
        g += `<path class="fig-energi-rep" d="M${f(cx - 42)} ${f(yM)} A${rb} ${rb} 0 0 0 ${f(cx - 14)} ${f(yM)}"/>`;
        g += `<line class="fig-energi-rep fig-energi-repdel" data-bar="" x1="${f(cx - 14)}" y1="${f(Fy)}" x2="${f(cx - 14)}" y2="${f(yM)}"/>`;
        g += `<path class="fig-energi-rep" d="M${f(cx - 14)} ${f(Fy)} A${rb} ${rb} 0 0 1 ${f(cx + 14)} ${f(Fy)}"/>`;
        g += `<line class="fig-energi-rep fig-energi-repdel" data-drag="" x1="${f(cx + 14)}" y1="${f(Fy)}" x2="${f(cx + 14)}" y2="${f(yH)}"/>`;
        g += `<circle class="fig-energi-block" cx="${f(cx)}" cy="${f(Fy)}" r="${rb}"/><circle class="fig-energi-block fig-energi-rorligt" cx="${f(cx - 28)}" cy="${f(yM)}" r="${rb}"/>`;
        g += `<line class="fig-snore" x1="${f(cx - 28)}" y1="${f(yM)}" x2="${f(cx - 28)}" y2="${f(yM + 26)}"/>`;
        g += `<rect class="fig-lada fig-energi-last" x="${f(cx - 48)}" y="${f(yM + 26)}" width="40" height="30"/>`;
        g += `<g class="fig-energi-tyngdpil">${pil(cx - 28, yM + 56, cx - 28, yM + 56 + Lw, 8)}</g>` + kastText(cx - 38, Math.max(yM + 56 + Lw / 2 + 12, i ? yM0 + 74 : 0), 'tyngd', 'fig-hoger fig-kast-pil-text');   // i slutläget under den streckade lasten
        g += `<circle class="fig-energi-hand" cx="${f(cx + 14)}" cy="${f(yH)}" r="5"/>`;
        g += `<g class="fig-energi-dragpil">${pil(cx + 14, yH + 6, cx + 14, yH + 6 + Lw / 2, 8)}</g>` + kastText(cx + 22, yH + 6 + Lw / 4 + 12, 'dragkraft', 'fig-vanster fig-kast-pil-text');
        if (i) {
          // före: lasten och handen streckade; sträckorna utmärkta
          g += `<rect class="fig-energi-fore" x="${f(cx - 48)}" y="${f(yM0 + 26)}" width="40" height="30"/><circle class="fig-energi-fore" cx="${f(cx + 14)}" cy="${f(yH0)}" r="5"/>`;
          const matt = (x, y1, y2, data) => `<g class="fig-energi-matt" ${data}><line class="fig-krock-matt" x1="${f(x)}" y1="${f(y1)}" x2="${f(x)}" y2="${f(y2)}"/>` +
            `<line class="fig-krock-matt" x1="${f(x - 5)}" y1="${f(y1)}" x2="${f(x + 5)}" y2="${f(y1)}"/><line class="fig-krock-matt" x1="${f(x - 5)}" y1="${f(y2)}" x2="${f(x + 5)}" y2="${f(y2)}"/></g>`;
          g += matt(cx - 62, yM0 + 26, yM + 26, 'data-matt="lyft"') + kastText(cx - 68, (yM0 + yM) / 2 + 33, tal(lyft) + ' m', 'fig-hoger');
          g += matt(cx + 32, yH0, yH, 'data-matt="rep"') + kastText(cx + 38, (yH0 + yH) / 2 + 7, tal(2 * lyft) + ' m', 'fig-vanster');
        }
        s += `<g class="fig-energi-taljlage" data-lage="${id}" data-mpx="${f(k)}" data-lyft="${lyft}">${g}</g>`;
      });
      H = Math.ceil(yT + 150 + 56 + Lw + 14);
      beskr = `En talja med ett fast block i taket och ett rörligt block med lasten. Lasten bärs av två repdelar, och dragkraften är halva tyngden. ` +
        `Till vänster startläget, till höger slutläget: lasten har lyfts ${tal(lyft)} m, och ${tal(2 * lyft)} m rep har dragits in.`;
    } else fel('energi: okänt läge ”' + lage + '”');
    return { svg: svg(B, H, s).replace('<svg ', `<svg data-energi="${lage}" `), beskrivning: d.beskrivning || beskr };
  });


  /* ---------- Ljud och ljus (Kraft och rörelse VI, arbetsorder 30, 2026-11-20) ----------
   * Två nya figurslag, ritade som energi: text 19 enheter, och varje figur skriver sina mått i elementen (data-*), så att
   * grinden mäter det figuren påstår (verktyg/bok-grind.js, figurKoll: lj).
   *   ljud, lage: 'membran' (A1, steg 1–5) | 'modeller' (A2) | 'doppler' (A3) | 'orat' (A4, struktur) | 'jamforelse' (A5)
   *               | 'resonans' (A6, steg 1–4) | 'ekolod' (A7, steg 1–5) | 'isolering' (A8)
   *   ljus, lage: 'foremal' (B1) | 'reflektion' (B2) | 'spegelbild' (B3, steg 1–4) | 'speglar' (B4, struktur)
   *               | 'brytning' (B5, steg 1–3) | 'penna' (B6, steg 1–4) | 'totalreflektion' (B7, steg 1–3) | 'linser' (B8, struktur)
   *               | 'ogat' (B9, steg 1–4) | 'synfel' (B10) | 'prisma' (B11) | 'farg' (B12, steg 1–3) | 'spektrum' (B13, struktur)
   *               | 'jamforelse' (B14: ljud och ljus i två kolumner, inga pilar)
   *   Data: bara lage, bildtext? och beskrivning?; vinklar och brytningsindex står i figuren (n = 1,33 för vatten).
   * Förlopp har numrerade steg (README, "Figurer som visar ett förlopp får numrerade steg"): en ring med numret, "börja
   * här" vid steg 1 och en kort mening intill; svg:n har data-steg-antal. Strukturer får bara namn (data-struktur).
   * Färgerna (arbetsorder 30, kräver Joachims godkännande): ljusstrålar orangeröda (#c2410c), heldragna, med en liten
   * spets mitt på; strålar som ögat följer bakåt streckade i samma färg; normalen streckad i dämpat bläck; ljudvågornas
   * linje och vågfronter blågröna (#1f6f78); luftens molekyler mörkt sandfärgade prickar, den markerade molekylen indigo med
   * rörelsepilar (indigo, streckade, som förut). Kraftpilarna (guld) används inte här. */
  const LT = (x, y, s, k = '') => kastText(x, y, s, k);
  const LRAD = 26;                                   // radavståndet i figurernas text
  const stegNr = (n, x, y) => `<g class="fig-steg" data-steg="${n}" data-cx="${f(x)}" data-cy="${f(y)}"><circle class="fig-steg-ring" cx="${f(x)}" cy="${f(y)}" r="12"/>` +
    `<text x="${f(x)}" y="${f(y + 6.5)}" class="fig-text fig-kast-text fig-mitt fig-steg-nr">${n}</text></g>`;
  const borjaHar = (x, y, ank = 'fig-mitt') => `<text x="${f(x)}" y="${f(y)}" class="fig-text fig-kast-text ${ank} fig-steg-start">börja här</text>`;
  // ett steg: ringen vid (x, y) och meningen (rader) till höger (sida 1) eller vänster (sida −1) om den, eller under (sida 0)
  const steg = (n, x, y, rader, sida = 1) => stegNr(n, x, y) + [].concat(rader).map((r, i) => {
    const tx = sida > 0 ? x + 18 : sida < 0 ? x - 18 : x, ty = sida ? y + 6.5 + i * LRAD : y + 34 + i * LRAD;
    return `<text x="${f(tx)}" y="${f(ty)}" class="fig-text fig-kast-text ${sida > 0 ? 'fig-vanster' : sida < 0 ? 'fig-hoger' : 'fig-mitt'} fig-steg-text fig-halo" data-steg-text="${n}">${esc(r)}</text>`; }).join('');
  const rader = (x, y, rr, k = '') => [].concat(rr).map((r, i) => LT(x, y + i * LRAD, r, k)).join('');
  // ljusstrålar: heldragen linje med en liten spets en bit efter mitten (riktningen); skenbar: streckad, utan spets
  const stralSpets = (x1, y1, x2, y2, k = '', t = 0.55) => { const a = Math.atan2(y2 - y1, x2 - x1), c = Math.cos(a), s = Math.sin(a), l = 11, w = 5;
    const px = x1 + (x2 - x1) * t + 5 * c, py = y1 + (y2 - y1) * t + 5 * s;
    return `<polygon class="fig-ljus-spets ${k}" points="${f(px)},${f(py)} ${f(px - l * c - w * s)},${f(py - l * s + w * c)} ${f(px - l * c + w * s)},${f(py - l * s - w * c)}"/>`; };
  const strale = (x1, y1, x2, y2, data = '', k = '', spets = true) => `<line class="fig-ljus-strale ${k}" ${data} x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>` +
    (spets && Math.hypot(x2 - x1, y2 - y1) > 34 ? stralSpets(x1, y1, x2, y2, k) : '');
  const skenbar = (x1, y1, x2, y2, data = '', k = '') => `<line class="fig-ljus-skenbar ${k}" ${data} x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`;
  const normalLinje = (x1, y1, x2, y2, data = '') => `<line class="fig-normal" ${data} x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`;
  // en vinkel: bågen från riktningen a1 till a2 (radianer, skärmens y nedåt), den kortaste vägen
  const vinkelBage = (cx, cy, r, a1, a2, data = '') => { let dv = a2 - a1; while (dv > Math.PI) dv -= 2 * Math.PI; while (dv < -Math.PI) dv += 2 * Math.PI;
    const p1 = [cx + r * Math.cos(a1), cy + r * Math.sin(a1)], p2 = [cx + r * Math.cos(a1 + dv), cy + r * Math.sin(a1 + dv)];
    return `<path class="fig-vinkel" ${data} data-cx="${f(cx)}" data-cy="${f(cy)}" d="M${f(p1[0])} ${f(p1[1])} A${r} ${r} 0 0 ${dv > 0 ? 1 : 0} ${f(p2[0])} ${f(p2[1])}"/>`; };
  const vinkelText = (cx, cy, r, a1, a2, s, k = 'fig-mitt') => { let dv = a2 - a1; while (dv > Math.PI) dv -= 2 * Math.PI; while (dv < -Math.PI) dv += 2 * Math.PI;
    const a = a1 + dv / 2; return LT(cx + r * Math.cos(a), cy + r * Math.sin(a) + 7, s, k + ' fig-halo'); };
  const GR = Math.PI / 180;
  const snell = (v1, n1, n2) => { const x = n1 / n2 * Math.sin(v1 * GR); return x >= 1 ? null : Math.asin(x) / GR; };
  // ljudvågen i vågmodellen: trycket som en linje (topp där luften är tätast), med amplitud och våglängd i elementet
  const vagLinje = (x0, x1, yc, amp, lam, xTopp, data = '') => { const p = [];
    for (let x = x0; x <= x1 + 0.01; x += 2) p.push(f(x) + ',' + f(yc - amp * Math.cos(2 * Math.PI * (x - xTopp) / lam)));
    return `<polyline class="fig-ljud-vag" data-amplitud="${amp}" data-vaglangd="${lam}" data-topp="${f(xTopp)}" ${data} points="${p.join(' ')}"/>`; };
  // luftens molekyler: ett rutnät (avstånd a) med lite oordning, varje molekyl förskjuten s(x) från sitt viloläge –
  // förtätningar där s avtar. data-vaglangd: förtätningarnas avstånd (det grinden mäter i prickarna).
  const prickband = (x0, x1, y0, nr, a, sF, fro, data = '', jit = 0.45) => { const r = slump(fro); let p = '';
    for (let j = 0; j < nr; j++) for (let x = x0 + a / 2 + (j % 2) * a / 2; x < x1 - a / 4; x += a) {
      const xe = x + r() * a * jit, y = y0 + j * a * 0.9 + r() * a * 0.35, xx = xe + sF(xe);
      if (xx > x0 - 1 && xx < x1 + 1) p += `<circle class="fig-ljud-prick" cx="${f(xx)}" cy="${f(y)}" r="2.3"/>`; }
    return `<g class="fig-ljud-prickar" ${data}>${p}</g>`; };
  // förskjutningen när trycket har topp i xTopp: s(x) = −A · sin(2π(x − xTopp)/λ), A ur den relativa täthetsändringen k·A
  const forskj = (lam, kA, xTopp) => x => -kA * lam / (2 * Math.PI) * Math.sin(2 * Math.PI * (x - xTopp) / lam);
  // en tunn riktningspil (ljudets eller vågens väg), inte en kraftpil
  const riktPil = (x1, y1, x2, y2, k = '', data = '') => { const a = Math.atan2(y2 - y1, x2 - x1), c = Math.cos(a), s = Math.sin(a), l = 10, w = 5;
    return `<g class="fig-ljud-riktning ${k}" ${data}><line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2 - l * 0.8 * c)}" y2="${f(y2 - l * 0.8 * s)}"/>` +
      `<polygon points="${f(x2)},${f(y2)} ${f(x2 - l * c - w * s)},${f(y2 - l * s + w * c)} ${f(x2 - l * c + w * s)},${f(y2 - l * s - w * c)}"/></g>`; };
  const fet = (x, y, s, k = 'fig-vanster') => LT(x, y, s, k + ' fig-energi-ord');
  const ledare = (x1, y1, x2, y2) => `<line class="fig-ledare" x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`;
  const ogaFig = (x, y, mot = 1) => `<g class="fig-oga" data-x="${f(x)}" data-y="${f(y)}"><path class="fig-oga-vita" d="M${f(x - 14 * mot)} ${f(y)} Q${f(x)} ${f(y - 11)} ${f(x + 14 * mot)} ${f(y)} Q${f(x)} ${f(y + 11)} ${f(x - 14 * mot)} ${f(y)} Z"/>` +
    `<circle class="fig-oga-iris" cx="${f(x + 4 * mot)}" cy="${f(y)}" r="5"/></g>`;
  const ljudSvg = (B, H, s, namn, lage, stegAntal, struktur) => svg(B, H, s).replace('<svg ', `<svg data-${namn}="${lage}" ${stegAntal ? `data-steg-antal="${stegAntal}" ` : ''}${struktur ? 'data-struktur="" ' : ''}`);

  // Kapitel 2 avsnitt II (arbetsorder 34): vågor med TID på den vågräta axeln (som på ett oscilloskop), en kurva ur en
  // funktion, en person, en logaritmisk frekvensaxel och ambulansen
  const tidAxel = (x1, x2, y) => `<g class="fig-ljud-axel" data-axel="tid"><line x1="${f(x1)}" y1="${f(y)}" x2="${f(x2 - 6)}" y2="${f(y)}"/><polygon points="${f(x2 + 2)},${f(y)} ${f(x2 - 9)},${f(y - 5)} ${f(x2 - 9)},${f(y + 5)}"/></g>` +
    LT(x2 + 8, y + 6, 'tid', 'fig-vanster fig-ljud-axeltext');
  const kurva = (x0, x1, yc, fn, data = '', k = 'fig-ljud-vag') => { const p = [];
    for (let x = x0; x <= x1 + 0.01; x += 1) p.push(f(x) + ',' + f(yc - fn(x - x0)));
    return `<polyline class="${k}" ${data} points="${p.join(' ')}"/>`; };
  const gubbe = (x, yG, h = 50) => { const k = h / 50, F = v => f(v);
    return `<g class="fig-ljud-person" data-x="${F(x)}"><circle class="fig-hopp-huvud" cx="${F(x)}" cy="${F(yG - 50 * k)}" r="${F(8 * k)}"/><path class="fig-hopp-kropp" d="M${F(x)} ${F(yG - 42 * k)} L${F(x)} ${F(yG - 18 * k)}"/>` +
      `<path class="fig-hopp-lem" d="M${F(x)} ${F(yG - 18 * k)} L${F(x - 6 * k)} ${F(yG)} M${F(x)} ${F(yG - 18 * k)} L${F(x + 6 * k)} ${F(yG)} M${F(x)} ${F(yG - 36 * k)} L${F(x - 8 * k)} ${F(yG - 24 * k)} M${F(x)} ${F(yG - 36 * k)} L${F(x + 8 * k)} ${F(yG - 24 * k)}"/></g>`; };
  const ambulans = (xn, yc) => `<g class="fig-ljud-ambulans" data-x="${f(xn)}"><rect class="fig-ljud-bil" x="${f(xn - 20)}" y="${f(yc - 10)}" width="40" height="18" rx="3"/><rect class="fig-ljud-bil-fonster" x="${f(xn + 8)}" y="${f(yc - 7)}" width="9" height="7"/>` +
    `<rect class="fig-ljud-blixt" x="${f(xn - 6)}" y="${f(yc - 15)}" width="10" height="5"/><circle class="fig-ljud-hjul" cx="${f(xn - 11)}" cy="${f(yc + 9)}" r="4"/><circle class="fig-ljud-hjul" cx="${f(xn + 11)}" cy="${f(yc + 9)}" r="4"/></g>`;
  // en logaritmisk frekvensaxel: X(hz), och axeln med markeringar (data-hz) – som i I B3
  const logAxel = (xa, W, hz0, hz1) => { const a = Math.log10(hz0), b = Math.log10(hz1); return hz => xa + (Math.log10(hz) - a) / (b - a) * W; };
  // flygplanet med nosen i (xn, y), ungefär 26 enheter långt
  const flygplan = (xn, y) => { const P = (dx, dy) => f(xn - dx * 0.6) + ' ' + f(y + dy * 0.6);
    return `<g class="fig-ljud-plan" data-x="${f(xn)}" data-y="${f(y)}"><path d="M${P(0, 0)} L${P(10, -4)} L${P(34, -4)} L${P(40, -11)} L${P(44, -11)} L${P(42, 3)} L${P(10, 4)} Z"/>` +
      `<path d="M${P(18, 0)} L${P(28, 10)} L${P(32, 10)} L${P(28, 0)}"/></g>`; };

  Bok.figur('ljud', d => {
    const lage = d.lage || fel('ljud behöver lage: membran, modeller, doppler, orat, jamforelse, resonans, ekolod, isolering – eller (kapitel 2) linjal, membran-hoger, fjader, vakuum, vagtyper, tva-modeller, vagbegrepp, horomraden, aska, hastigheter, orat-delar, orat-vag, huvud, snacka, tonhojd-tid, styrka-tid, gitarrhals, klang-tid, strang-delar, tonomfang, gunga, stamgafflar, stamgaffel-bord, flaskor, vinglas, eko-berg, ekolod-botten, doppler-centrum, ljudbang, decibel, exponering, bullerbekampning, avstandslagen eller audiogram'), B = 440;
    let s = '', H, beskr, nSteg = 0, struktur = false;
    if (lage === 'membran') {
      // A1: tre ögonblick efter varandra (rader); s(x, t) = A · sin(2π(t − u/λ)) där vågen har hunnit (u ≤ λt)
      const lam = 100, kA = 0.9, A = kA * lam / (2 * Math.PI), x0 = 58, x1 = 262, top = 40, rh = 64, mark = 44, xm = x0 + mark;
      const sF = t => x => { const u = x - x0; return u >= 0 && u <= lam * t ? A * Math.sin(2 * Math.PI * (t - u / lam)) : 0; };
      const T = [0.25, 0.75, 1.25];
      s += `<line class="fig-ljud-hjalp" x1="${f(xm)}" y1="${f(top + 2)}" x2="${f(xm)}" y2="${f(top + 2 * rh + 92)}"/>`;
      T.forEach((t, i) => {
        const yc = top + 26 + i * rh, m = sF(t)(x0 + 0.001), mx = x0 - 8 + m;
        let g = `<rect class="fig-ljud-hogtalare" x="10" y="${f(yc - 11)}" width="15" height="22"/>` +
          `<path class="fig-ljud-kon" d="M25 ${f(yc - 11)} L${f(mx)} ${f(yc - 25)} L${f(mx)} ${f(yc + 25)} L25 ${f(yc + 11)} Z"/>` +
          `<line class="fig-ljud-membran" data-utslag="${f(m)}" x1="${f(mx)}" y1="${f(yc - 25)}" x2="${f(mx)}" y2="${f(yc + 25)}"/>`;
        // förtätningarna skuggade: där molekylerna ligger tätare än 1,6 gånger vilan (s' < −0,38), i sina förskjutna lägen
        const ds = x => (sF(t)(x + 0.5) - sF(t)(x - 0.5)); let ii = null;
        for (let x = x0; x <= x1; x += 1) { const tat = ds(x) < -0.38;
          if (tat && ii === null) ii = x + sF(t)(x);
          if ((!tat || x + 1 > x1) && ii !== null) { const xe = x + sF(t)(x); if (ii < x0 + 4) ii = x0 + 4; if (xe - ii > 4) g += `<rect class="fig-ljud-tat" data-tat="" x="${f(ii)}" y="${f(yc - 23)}" width="${f(xe - ii)}" height="46" rx="4"/>`; ii = null; } }
        g += prickband(x0, x1, yc - 19, 5, 8, sF(t), 11, `data-tid="${t}" data-vaglangd="${lam}"`, 0.12);
        g += `<circle class="fig-ljud-markerad" data-vila="${f(xm)}" cx="${f(xm + sF(t)(xm))}" cy="${f(yc - 0.5)}" r="4.4"/>`;
        s += `<g class="fig-ljud-ogonblick" data-rad="${i + 1}">${g}</g>`;
      });
      // steg 1–3 till höger om raderna, steg 4 och 5 under (arbetsorder 32, källan v4: 4 vågen vandrar bort, 5 den
      // markerade biten luft svänger bara lite (pilarna visar fram och tillbaka; en rad, så att texten håller 14 px på
      // mobilen) – underst, vid sin kolumn, så att stegen läses uppifrån)
      s += borjaHar(278, top - 12) + steg(1, 278, top + 12, ['membranet framåt:', 'förtätning']);
      s += steg(2, 278, top + 12 + rh, ['membranet bakåt:', 'förtunning']);
      s += steg(3, 278, top + 12 + 2 * rh, ['framåt igen:', 'ny förtätning']);
      const y4 = top + 2 * rh + 68;
      s += steg(4, 132, y4, ['förtätningarna vandrar bort']) + riktPil(366, y4, 434, y4);
      const y5 = y4 + 34;
      s += `<g class="fig-energi-rorelse">${rorelsePil(xm - 4, y5, xm - 24, y5)}${rorelsePil(xm + 4, y5, xm + 24, y5)}</g>`;
      s += steg(5, xm + 44, y5, ['luften svänger bara lite']);
      H = Math.ceil(y5 + 16); nSteg = 5;
      beskr = 'En högtalare och luften framför den i tre ögonblick. 1: membranet går framåt och trycker ihop luften: en förtätning. 2: membranet går bakåt, och bakom förtätningen blir luften gles: en förtunning. ' +
        '3: membranet går framåt igen och gör en ny förtätning. 4: förtätningarna och förtunningarna vandrar bort från högtalaren. 5: en markerad bit luft svänger bara lite fram och tillbaka medan vågen vandrar vidare.';
    } else if (lage === 'modeller') {
      // A2: samma ljudvåg i partikelmodellen och vågmodellen; vågtopparna där luften är tätast
      const lam = 150, xa = 70, xb = 430, xT = 110, yc = 200, amp = 40, ax = 62;
      s += fet(xa, 20, 'partikelmodellen') + prickband(xa, xb, 34, 5, 8, forskj(lam, 0.95, xT), 5, `data-vaglangd="${lam}" data-topp="${xT}"`, 0.12);
      s += LT(185, 88, 'förtunning', 'fig-mitt') + LT(436, 88, 'förtätning', 'fig-hoger');
      s += fet(xa, 114, 'vågmodellen');
      [xT, xT + lam].forEach(x => { s += `<line class="fig-ljud-hjalp" x1="${f(x)}" y1="${f(76)}" x2="${f(x)}" y2="${f(yc - amp - 3)}"/>`; });
      s += `<line class="fig-ljud-noll" x1="${ax}" y1="${yc}" x2="${xb + 4}" y2="${yc}"/>`;
      s += `<g class="fig-ljud-axel" data-axel="tryck"><line x1="${ax}" y1="${yc + amp + 22}" x2="${ax}" y2="${yc - amp - 30}"/><polygon points="${ax},${yc - amp - 38} ${ax - 5},${yc - amp - 27} ${ax + 5},${yc - amp - 27}"/></g>`;
      s += LT(ax - 6, yc - amp - 22, 'tryck', 'fig-hoger fig-ljud-axeltext');
      s += vagLinje(xa, xb, yc, amp, lam, xT);
      // våglängden mellan de två första topparna
      const ym = yc - amp - 10;
      s += `<g class="fig-ljud-matt" data-matt="vaglangd"><line class="fig-krock-matt" x1="${xT}" y1="${ym}" x2="${xT + lam}" y2="${ym}"/>` +
        `<line class="fig-krock-matt" x1="${xT}" y1="${ym - 5}" x2="${xT}" y2="${ym + 5}"/><line class="fig-krock-matt" x1="${xT + lam}" y1="${ym - 5}" x2="${xT + lam}" y2="${ym + 5}"/></g>`;
      s += LT(xT + lam / 2, ym - 8, 'våglängd', 'fig-mitt');
      s += `<g class="fig-ljud-etikett" data-del="topp">${rader(436, yc - amp - 44, ['vågtopp:', 'högre tryck'], 'fig-hoger')}</g>`;
      s += `<g class="fig-ljud-etikett" data-del="dal">${LT(xT + 1.5 * lam, yc + amp + 26, 'vågdal: lägre tryck', 'fig-mitt')}</g>`;
      H = Math.ceil(yc + amp + 36);
      beskr = 'Samma ljudvåg ritad på två sätt. Överst partikelmodellen: luftens molekyler som prickar, täta i förtätningarna och glesa i förtunningarna. ' +
        'Under vågmodellen: en linje som visar trycket, med den lodräta axeln märkt tryck. Vågtopparna, högre tryck, står under förtätningarna och vågdalarna, lägre tryck, under förtunningarna. Våglängden är avståndet mellan två vågtoppar.';
    } else if (lage === 'doppler') {
      // A3: ambulansen kör åt höger; vågfronterna skickades ut från de platser där den var (centrum bakåt), och de som är
      // framför ligger tätare än de bakom
      const xn = 232, yc = 106, c = 20, u = 0.45 * c, n = 5;
      for (let a = 1; a <= n; a++) s += `<circle class="fig-ljud-front" data-alder="${a}" cx="${f(xn - u * a)}" cy="${yc}" r="${f(c * a)}"/>`;
      s += `<g class="fig-ljud-ambulans"><rect class="fig-ljud-bil" x="${xn - 20}" y="${yc - 10}" width="40" height="18" rx="3"/><rect class="fig-ljud-bil-fonster" x="${xn + 8}" y="${yc - 7}" width="9" height="7"/>` +
        `<rect class="fig-ljud-blixt" x="${xn - 6}" y="${yc - 15}" width="10" height="5"/><circle class="fig-ljud-hjul" cx="${xn - 11}" cy="${yc + 9}" r="4"/><circle class="fig-ljud-hjul" cx="${xn + 11}" cy="${yc + 9}" r="4"/></g>`;
      s += `<g class="fig-energi-rorelse" data-rorelse="bilen">${rorelsePil(xn + 26, yc - 30, xn + 68, yc - 30)}</g>`;
      const yG = 216, person = (x) => `<g class="fig-ljud-person"><circle class="fig-hopp-huvud" cx="${x}" cy="${yG - 50}" r="8"/><path class="fig-hopp-kropp" d="M${x} ${yG - 42} L${x} ${yG - 18}"/>` +
        `<path class="fig-hopp-lem" d="M${x} ${yG - 18} L${x - 6} ${yG} M${x} ${yG - 18} L${x + 6} ${yG} M${x} ${yG - 36} L${x - 8} ${yG - 24} M${x} ${yG - 36} L${x + 8} ${yG - 24}"/></g>`;
      s += `<line class="fig-bord" x1="6" y1="${yG}" x2="${B - 6}" y2="${yG}"/>` + person(24) + person(B - 24);
      s += `<g class="fig-ljud-etikett" data-sida="bakom">${rader(8, yG + 24, ['lång våglängd:', 'mörkare ton'], 'fig-vanster')}</g>`;
      s += `<g class="fig-ljud-etikett" data-sida="framfor">${rader(B - 8, yG + 24, ['kort våglängd:', 'ljusare ton'], 'fig-hoger')}</g>`;
      H = yG + 24 + LRAD + 10;
      beskr = 'En ambulans som kör åt höger med sirenen på. Ljudvågorna sprids som ringar från de platser där ambulansen var. Framför ambulansen ligger ringarna tätt: kort våglängd och ljusare ton för den som står där. ' +
        'Bakom den ligger de glest: lång våglängd och mörkare ton.';
    } else if (lage === 'orat') {
      // A4: örats delar i genomskärning, bara namn
      struktur = true;
      const yc = 118;
      s += `<path class="fig-ljud-huvud" d="M58 40 L330 40 Q360 40 360 70 L360 180 Q360 200 330 200 L58 200 Z"/>`;
      [14, 26, 38].forEach((r, i) => { s += `<path class="fig-ljud-front" d="M${f(4 + i * 12)} ${f(yc - 26)} Q${f(16 + i * 12)} ${yc} ${f(4 + i * 12)} ${f(yc + 26)}"/>`; });
      s += `<path class="fig-ljud-ora" data-del="ytteröra" d="M78 ${yc - 14} C66 ${yc - 40} 70 ${yc - 70} 58 ${yc - 76} C40 ${yc - 84} 26 ${yc - 40} 40 ${yc} C50 ${yc + 30} 56 ${yc + 52} 74 ${yc + 52} C84 ${yc + 52} 84 ${yc + 34} 78 ${yc + 14}"/>`;
      s += `<path class="fig-ljud-gang" data-del="hörselgång" d="M78 ${yc - 14} L196 ${yc - 12} M78 ${yc + 14} L196 ${yc + 12}"/>`;
      s += `<line class="fig-ljud-trumhinna" data-del="trumhinna" x1="196" y1="${yc - 16}" x2="202" y2="${yc + 16}"/>`;
      s += `<g class="fig-ljud-ben" data-del="hörselben"><path d="M203 ${yc - 2} L214 ${yc - 8} L226 ${yc - 2} L238 ${yc - 6} L248 ${yc + 2}"/><circle cx="214" cy="${yc - 8}" r="5"/><circle cx="228" cy="${yc - 3}" r="5"/><rect x="242" y="${yc - 6}" width="9" height="12" rx="2"/></g>`;
      const sp = []; for (let i = 0; i <= 90; i++) { const v = i / 90 * 2.4 * 2 * Math.PI, r = 4 + 24 * i / 90; sp.push(f(286 + r * Math.cos(v)) + ',' + f(yc + r * Math.sin(v))); }
      s += `<polyline class="fig-ljud-snacka" data-del="hörselsnäcka" points="${sp.reverse().join(' ')}"/>`;
      s += `<path class="fig-ljud-nerv" data-del="hörselnerv" d="M312 ${yc - 6} C340 ${yc - 20} 360 ${yc + 4} 390 ${yc - 10} S420 ${yc - 14} 436 ${yc - 8}"/>`;
      const namn = (t, x, y, px, py) => ledare(x, y + (y < yc ? 6 : -20), px, py) + LT(x, y, t, 'fig-mitt fig-halo fig-ljud-namn');
      s += namn('ytteröra', 52, 22, 62, yc - 60) + namn('trumhinna', 178, 22, 199, yc - 14) + namn('hörselsnäcka', 312, 22, 290, yc - 26);
      s += namn('hörselgång', 128, 232, 128, yc + 14) + namn('hörselben', 236, 232, 228, yc + 4) + namn('hörselnerv', 388, 232, 392, yc - 8);
      H = 244;
      beskr = 'Örat i genomskärning. Ljudvågor kommer in från vänster till ytterörat och vidare in i hörselgången. Längst in sitter trumhinnan, sedan de tre hörselbenen, hörselsnäckan och hörselnerven som går till hjärnan.';
    } else if (lage === 'jamforelse') {
      // A5: tonhöjd (frekvens) överst och ljudstyrka (amplitud) underst, i båda modellerna
      const kol = [[8, 214], [226, 432]];
      const panel = (x0, x1, yT, t, lam, kA, amp, typ) => {
        let g = LT((x0 + x1) / 2, yT, t, 'fig-mitt fig-energi-ord');
        const xT = x0 + lam / 2;
        g += prickband(x0, x1, yT + 14, 3, 6.2, forskj(lam, kA, xT), 3, `data-vaglangd="${lam}"`);
        g += vagLinje(x0, x1, yT + 66, amp, lam, xT);
        return `<g class="fig-ljud-ljud" data-ljud="${typ}">${g}</g>`;
      };
      s += LT(B / 2, 20, 'tonhöjd – frekvensen skiljer', 'fig-mitt');
      s += panel(...kol[0], 48, 'ljust: hög frekvens', 40, 0.6, 18, 'ljust') + panel(...kol[1], 48, 'mörkt: låg frekvens', 90, 0.6, 18, 'morkt');
      s += `<line class="fig-ljud-skilje" x1="8" y1="138" x2="432" y2="138"/>`;
      s += LT(B / 2, 162, 'ljudstyrka – amplituden skiljer', 'fig-mitt');
      s += panel(...kol[0], 188, 'starkt: stor amplitud', 56, 0.8, 26, 'starkt') + panel(...kol[1], 188, 'svagt: liten amplitud', 56, 0.18, 7, 'svagt');
      H = 188 + 66 + 26 + 8;
      beskr = 'Fyra ljud i båda modellerna. Överst tonhöjden: det ljusa ljudet har vågtopparna tätt (hög frekvens), det mörka glest (låg frekvens), med samma amplitud. ' +
        'Underst ljudstyrkan: det starka ljudet har höga vågtoppar och mycket täta förtätningar, det svaga låga vågtoppar och nästan jämnt fördelade molekyler – men avståndet mellan förtätningarna är detsamma.';
    } else if (lage === 'resonans') {
      // A6: strängen ensam ger svaga ljudvågor; på gitarrens resonanslåda starkare, med samma våglängd (samma ton)
      const lam = 48, yS = 62, yG = 198;
      s += `<rect class="fig-ljud-fast" x="16" y="${yS - 16}" width="8" height="32"/><rect class="fig-ljud-fast" x="182" y="${yS - 16}" width="8" height="32"/>`;
      s += `<line class="fig-ljud-strang" x1="24" y1="${yS}" x2="182" y2="${yS}"/><path class="fig-ljud-svang" d="M24 ${yS} Q103 ${yS - 22} 182 ${yS} M24 ${yS} Q103 ${yS + 22} 182 ${yS}"/>`;
      s += `<g class="fig-ljud-ljud" data-ljud="svagt">${vagLinje(222, 432, yS, 7, lam, 222 + lam / 2)}</g>`;
      s += borjaHar(84, 32, 'fig-hoger') + steg(1, 100, 26, ['strängen knäpps']);
      s += steg(2, 236, yS + 38, ['svaga ljudvågor']);
      // gitarren: kroppen med ljudhål, strängen över den
      s += `<path class="fig-ljud-gitarr" d="M40 ${yG} C40 ${yG - 46} 92 ${yG - 46} 104 ${yG - 30} C114 ${yG - 50} 176 ${yG - 50} 176 ${yG} C176 ${yG + 50} 114 ${yG + 50} 104 ${yG + 30} C92 ${yG + 46} 40 ${yG + 46} 40 ${yG} Z"/>`;
      s += `<circle class="fig-ljud-hal" cx="128" cy="${yG}" r="13"/><rect class="fig-ljud-stall" x="58" y="${yG - 9}" width="8" height="18"/>`;
      s += `<line class="fig-ljud-strang" x1="62" y1="${yG}" x2="196" y2="${yG}"/><rect class="fig-ljud-hals" x="176" y="${yG - 7}" width="26" height="14"/>`;
      [[34, -1], [182, 1]].forEach(([x, sd]) => { [10, 18].forEach(r => { s += `<path class="fig-ljud-svang" d="M${f(x + sd * r * 0.3)} ${f(yG - r)} Q${f(x + sd * r * 0.75)} ${yG} ${f(x + sd * r * 0.3)} ${f(yG + r)}"/>`; }); });
      s += `<g class="fig-ljud-ljud" data-ljud="starkt">${vagLinje(222, 432, yG, 24, lam, 222 + lam / 2)}</g>`;
      s += steg(3, 40, yG - 64, ['lådan svänger med']);
      s += steg(4, 236, yG + 46, ['starkare ljudvågor,', 'samma ton']);
      H = yG + 46 + 6.5 + LRAD + 12; nSteg = 4;
      beskr = 'En gitarrsträng och en akustisk gitarr. 1: strängen knäpps. 2: strängen ensam ger svaga ljudvågor. 3: på gitarren förs svängningarna till lådan, som svänger med. ' +
        '4: lådan och luften i den sätter mer luft i svängning – ljudvågorna får större amplitud men samma våglängd, så tonen är densamma.';
    } else if (lage === 'ekolod') {
      // A7: signalen ned till fiskstimmet och ekot upp igen; sträckan ned och upp delas med 2
      const yY = 64, yF = 224, xs = 100, xe = 124;
      s += `<rect class="fig-ljud-vatten" x="0" y="${yY}" width="${B}" height="${yF + 34 - yY}"/><line class="fig-ljud-yta" x1="0" y1="${yY}" x2="${B}" y2="${yY}"/>`;
      s += `<path class="fig-ljud-bat" d="M50 ${yY - 18} L176 ${yY - 18} L160 ${yY + 4} L66 ${yY + 4} Z"/><rect class="fig-ljud-hytt" x="84" y="${yY - 36}" width="44" height="18"/>`;
      s += `<g class="fig-ljud-klocka"><circle cx="150" cy="${yY - 32}" r="9"/><line x1="150" y1="${yY - 32}" x2="150" y2="${yY - 38}"/><line x1="150" y1="${yY - 32}" x2="155" y2="${yY - 30}"/><rect x="147" y="${yY - 45}" width="6" height="3"/></g>`;
      for (let i = 0; i < 9; i++) { const fx = 74 + (i % 3) * 26 + (i % 2) * 6, fy = yF - 10 + Math.floor(i / 3) * 10; s += `<path class="fig-ljud-fisk" d="M${fx} ${fy} q9 -6 16 0 q-7 6 -16 0 Z M${fx + 16} ${fy} l5 -4 l0 8 Z"/>`; }
      s += riktPil(xs, yY + 8, xs, yF - 18, 'fig-ljud-signal', 'data-vag="ned"') + riktPil(xe, yF - 18, xe, yY + 8, 'fig-ljud-eko', 'data-vag="upp"');
      [0.3, 0.55].forEach(t => { const y = yY + 8 + t * (yF - 26 - yY); s += `<path class="fig-ljud-front" d="M${xs - 9} ${f(y)} Q${xs} ${f(y + 6)} ${xs + 9} ${f(y)}"/>`; });
      s += borjaHar(214, 22, 'fig-vanster') + steg(1, 200, 48, ['ljudsignalen skickas ned,', 'klockan startar']);
      s += steg(4, 200, 104, ['ekolodet hör ekot,', 'klockan stoppar']);
      s += steg(3, 200, 160, ['ekot studsar tillbaka']);
      s += steg(2, 200, yF - 4, ['signalen når fiskstimmet']);
      s += steg(5, 20, yF + 50, ['sträckan ned och upp delas med 2']);
      H = yF + 50 + 16; nSteg = 5;
      beskr = 'En båt med ett ekolod. 1: ekolodet skickar ned en ljudsignal, och klockan startar. 2: signalen når ett fiskstim. 3: ekot studsar tillbaka upp. 4: ekolodet hör ekot, och klockan stoppar. ' +
        '5: ljudet har gått både ned och upp, så sträckan delas med 2 för att få djupet.';
    } else if (lage === 'isolering') {
      // A8: samma ljudvåg från vänster mot en tung vägg och mot luftig isolering; svagare våg ut
      const lam = 40, rad = (yc, ut, amp, namn, vagg) => {
        let g = `<g class="fig-ljud-ljud" data-ljud="in">${vagLinje(10, 150, yc, 20, lam, 10 + lam / 2)}</g>`;
        g += vagg;
        g += `<g class="fig-ljud-ljud" data-ljud="ut">${vagLinje(ut, 432, yc, amp, lam, ut + lam / 2)}</g>`;
        return `<g class="fig-ljud-isolering" data-satt="${namn}">${g}</g>`; };
      const y1 = 80, y2 = 208;
      let vagg = `<rect class="fig-ljud-betong" x="160" y="${y1 - 46}" width="44" height="92"/>`;
      const r = slump(7); for (let i = 0; i < 26; i++) vagg += `<circle class="fig-ljud-ballast" cx="${f(166 + (r() + 0.5) * 32)}" cy="${f(y1 - 40 + (r() + 0.5) * 80)}" r="${f(1.5 + (r() + 0.5) * 1.5)}"/>`;
      s += rad(y1, 214, 4, 'vagg', vagg) + LT(182, y1 - 56, 'tung vägg (betong)', 'fig-mitt') + LT(432, y1 + 44, 'svag våg ut', 'fig-hoger');
      let iso = `<rect class="fig-ljud-isomaterial" x="160" y="${y2 - 46}" width="96" height="92"/>`;
      for (let i = 0; i < 7; i++) iso += `<path class="fig-ljud-fiber" d="M162 ${y2 - 40 + i * 13} q12 -6 24 0 t24 0 t24 0 t20 0"/>`;
      iso += `<polyline class="fig-ljud-studs" points="160,${y2} 184,${y2 - 34} 206,${y2 + 30} 226,${y2 - 26} 244,${y2 + 18} 256,${y2}"/>`;
      [184, 226].forEach(x => { iso += `<path class="fig-ljus-varme" d="M${x - 4} ${y2 + 40} q4 -5 0 -10 t0 -10"/>`; });
      s += rad(y2, 266, 9, 'isolering', iso) + LT(208, y2 - 56, 'luftig isolering', 'fig-mitt') + LT(208, y2 + 70, 'en del blir värme', 'fig-mitt fig-ljus-varme-text') + LT(432, y2 + 44, 'svagare våg ut', 'fig-hoger');
      H = y2 + 80;
      beskr = 'Två sätt att isolera mot ljud. Samma ljudvåg kommer från vänster. Överst en tung betongvägg: bara en svag våg kommer ut på andra sidan. ' +
        'Underst ett luftigt isoleringsmaterial: vågen studsar runt bland fibrerna, en del av energin blir värme, och en svagare våg kommer ut.';
    // ---------- Kapitel 2 Ljud och ljus, avsnitt I Vad ljud är (arbetsorder 33, 2026-11-21) ----------
    // Egna lägen (kapitel 2 har egna interna namn; figurernas id i texten är A1, A2 …, som i källan). Färgerna enligt
    // README, "Färger för ljud och ljus – standard för kapitel 2".
    } else if (lage === 'linjal') {
      // I A1: linjalen över bordskanten i steg 1–4; den fria änden svänger upp och ned, och ljudet sprids från den
      const yR = 120, xK = 190, L = 110, xT = xK + L, ut = 36;
      const fri = (dy, k) => `<path class="fig-ljud-linjal ${k}" data-utslag="${dy}" d="M${xK} ${yR} Q${f(xK + L * 0.55)} ${yR} ${xT} ${yR + dy}"/>`;
      s += `<rect class="fig-ljud-bord" x="8" y="${yR + 4}" width="${xK - 8}" height="16"/>` +
        `<rect class="fig-ljud-bord" x="18" y="${yR + 20}" width="10" height="80"/><rect class="fig-ljud-bord" x="104" y="${yR + 20}" width="10" height="80"/>`;
      s += `<line class="fig-ljud-linjal" x1="34" y1="${yR}" x2="${xK}" y2="${yR}"/>`;
      s += fri(-ut, 'fig-ljud-spok') + fri(ut, 'fig-ljud-spok') + fri(0, '');
      s += `<rect class="fig-ljud-hand" data-del="handen" x="62" y="${yR - 24}" width="66" height="20" rx="9"/>` +
        `<path class="fig-ljud-handlinje" d="M78 ${yR - 22} l0 16 M94 ${yR - 22} l0 16 M110 ${yR - 22} l0 16"/>`;
      s += `<g class="fig-energi-rorelse" data-rorelse="anden">${rorelsePil(xT + 16, yR - 4, xT + 16, yR - ut + 4)}${rorelsePil(xT + 16, yR + 4, xT + 16, yR + ut - 4)}</g>`;
      [40, 58, 76].forEach(r => { const a = 26 * GR;
        s += `<path class="fig-ljud-front" data-ljudvag="" d="M${f(xT + 8 + r * Math.cos(-a))} ${f(yR + r * Math.sin(-a))} A${r} ${r} 0 0 1 ${f(xT + 8 + r * Math.cos(a))} ${f(yR + r * Math.sin(a))}"/>`; });
      s += borjaHar(8, 22, 'fig-vanster') + steg(1, 20, 46, ['håll fast linjalen och knäpp', 'den fria änden nedåt']);
      s += steg(2, xT + 26, 66, ['svänger upp']);
      s += steg(3, xT + 26, yR + 54, ['svänger ned igen – många', 'gånger varje sekund'], -1);
      s += steg(4, 374, yR + 106, ['ljudet sprids', 'ut i luften'], -1);
      H = yR + 106 + 6.5 + LRAD + 12; nSteg = 4;
      beskr = 'En linjal som ligger på ett bord med halva längden utanför kanten. 1: handen håller fast linjalen mot bordet, och den fria änden knäpps nedåt. ' +
        '2: linjalen svänger upp. 3: den svänger ned igen, och rörelsen upprepas många gånger varje sekund. 4: ett surrande ljud sprids ut i luften från den svängande änden.';
    } else if (lage === 'membran-hoger') {
      // I A2: högtalaren i tre ögonblick (rader) och vågen åt höger. Prickarna är samma molekyler i alla rader: var och en
      // står kvar nära sitt viloläge (data-vila), bara tätare eller glesare – det är förtätningarna som vandrar.
      const lam = 100, kA = 0.9, A = kA * lam / (2 * Math.PI), x0 = 58, x1 = 262, top = 40, rh = 64, xm = x0 + 44;
      const sF = t => x => { const u = x - x0; return u >= 0 && u <= lam * t ? A * Math.sin(2 * Math.PI * (t - u / lam)) : 0; };
      // molekylerna: ett fast rutnät med lite oordning (samma i varje rad), förskjutna s(x) i varje ögonblick
      const r = slump(21), vila = [];
      for (let j = 0; j < 5; j++) for (let x = x0 + 4 + (j % 2) * 4; x < x1 - 2; x += 8) vila.push([x + r() * 8 * 0.12, j * 8 * 0.9 + r() * 8 * 0.35]);
      s += `<line class="fig-ljud-hjalp" x1="${f(xm)}" y1="${f(top + 2)}" x2="${f(xm)}" y2="${f(top + 2 * rh + 50)}"/>`;
      [0.25, 0.75, 1.25].forEach((t, i) => {
        const yc = top + 26 + i * rh, m = sF(t)(x0 + 0.001), mx = x0 - 8 + m;
        let g = `<rect class="fig-ljud-hogtalare" x="10" y="${f(yc - 11)}" width="15" height="22"/>` +
          `<path class="fig-ljud-kon" d="M25 ${f(yc - 11)} L${f(mx)} ${f(yc - 25)} L${f(mx)} ${f(yc + 25)} L25 ${f(yc + 11)} Z"/>` +
          `<line class="fig-ljud-membran" data-utslag="${f(m)}" x1="${f(mx)}" y1="${f(yc - 25)}" x2="${f(mx)}" y2="${f(yc + 25)}"/>`;
        const ds = x => (sF(t)(x + 0.5) - sF(t)(x - 0.5)); let ii = null;
        for (let x = x0; x <= x1; x += 1) { const tat = ds(x) < -0.38;
          if (tat && ii === null) ii = x + sF(t)(x);
          if ((!tat || x + 1 > x1) && ii !== null) { const xe = x + sF(t)(x); if (ii < x0 + 4) ii = x0 + 4; if (xe - ii > 4) g += `<rect class="fig-ljud-tat" data-tat="" x="${f(ii)}" y="${f(yc - 23)}" width="${f(xe - ii)}" height="46" rx="4"/>`; ii = null; } }
        g += `<g class="fig-ljud-prickar" data-tid="${t}" data-vaglangd="${lam}">` +
          vila.map(([x, y], k) => `<circle class="fig-ljud-prick" data-i="${k}" data-vila="${f(x)}" cx="${f(x + sF(t)(x))}" cy="${f(yc - 19 + y)}" r="2.3"/>`).join('') + '</g>';
        g += `<circle class="fig-ljud-markerad" data-vila="${f(xm)}" cx="${f(xm + sF(t)(xm))}" cy="${f(yc - 0.5)}" r="4.4"/>`;
        s += `<g class="fig-ljud-ogonblick" data-rad="${i + 1}">${g}</g>`;
      });
      s += borjaHar(278, top - 12) + steg(1, 278, top + 12, ['membranet framåt:', 'förtätning']);
      s += steg(2, 278, top + 12 + rh, ['membranet bakåt:', 'förtunning']);
      s += steg(3, 278, top + 12 + 2 * rh, ['framåt igen:', 'ny förtätning']);
      const y4 = top + 2 * rh + 68;
      s += steg(4, 70, y4, ['förtätningarna vandrar åt höger']) + riktPil(352, y4, 430, y4, '', 'data-vagen="hoger"');
      H = Math.ceil(y4 + 16); nSteg = 4;
      beskr = 'En högtalare och luften framför den i tre ögonblick, med luftens molekyler som prickar. 1: membranet går framåt och trycker ihop luften: en förtätning. ' +
        '2: membranet går bakåt, och bakom förtätningen blir luften gles: en förtunning. 3: membranet går framåt igen och gör en ny förtätning. ' +
        '4: förtätningarna och förtunningarna vandrar bort åt höger. Prickarna ligger kvar på ungefär samma ställen i alla tre ögonblicken, bara tätare eller glesare.';
    } else if (lage === 'fjader') {
      // I A3: spiralfjädern i tre ögonblick; en förtätning (knuff framåt och tillbaka) vandrar åt höger. Varvens förskjutning
      // s(x) = D · exp(−((x − c) / w)²): varven framför mitten trycks ihop, och när förtätningen har passerat är s ≈ 0 igen.
      const x0 = 52, n = 22, a = 10, D = 7, w = 18, top = 40, rh = 64, km = 10, xm = x0 + km * a;
      const sF = c => x => D * Math.exp(-((x - c) / w) * ((x - c) / w));
      s += `<line class="fig-ljud-hjalp" x1="${f(xm)}" y1="${f(top + 2)}" x2="${f(xm)}" y2="${f(top + 2 * rh + 46)}"/>`;
      [x0 + 26, xm, x0 + (n - 1) * a - 16].forEach((c, i) => {
        const yc = top + 26 + i * rh, sx = sF(c);
        let g = `<line class="fig-bord" x1="${x0 - 30}" y1="${yc + 18}" x2="${x0 + n * a + 4}" y2="${yc + 18}"/>`;
        // förtätningen skuggad: där varven ligger tätare än 0,8 gånger vilan
        const xs = Array.from({ length: n }, (_, k) => x0 + k * a + sx(x0 + k * a));
        let ii = null; for (let k = 1; k < n; k++) { const tat = xs[k] - xs[k - 1] < a * 0.8;
          if (tat && ii === null) ii = xs[k - 1]; if ((!tat || k === n - 1) && ii !== null) { const xe = tat ? xs[k] : xs[k - 1]; g += `<rect class="fig-ljud-tat" data-tat="" x="${f(ii - 4)}" y="${f(yc - 17)}" width="${f(xe - ii + 8)}" height="34" rx="4"/>`; ii = null; } }
        g += `<line class="fig-ljud-fjaderaxel" x1="${f(xs[0])}" y1="${yc}" x2="${f(xs[n - 1])}" y2="${yc}"/>`;
        xs.forEach((x, k) => { g += `<ellipse class="fig-ljud-varv${k === km ? ' fig-ljud-varv-markerad' : ''}" data-k="${k}" data-vila="${f(x0 + k * a)}" cx="${f(x)}" cy="${yc}" rx="3.4" ry="14"/>`; });
        if (i === 0) g += `<rect class="fig-ljud-hand" data-del="handen" x="${x0 - 30}" y="${yc - 10}" width="20" height="20" rx="7"/>` +
          `<g class="fig-energi-rorelse" data-rorelse="handen">${rorelsePil(x0 - 26, yc - 26, x0 + 6, yc - 26)}</g>`;
        s += `<g class="fig-ljud-ogonblick" data-rad="${i + 1}" data-mitt="${f(c)}">${g}</g>`;
      });
      s += borjaHar(278, top - 12) + steg(1, 278, top + 12, ['knuff framåt:', 'varven trycks ihop']);
      s += steg(2, 278, top + 12 + rh, ['förtätningen', 'vandrar']);
      s += steg(3, 278, top + 12 + 2 * rh, ['når andra änden;', 'varvet är tillbaka']);
      H = top + 12 + 2 * rh + 6.5 + LRAD + 12; nSteg = 3;
      beskr = 'En spiralfjäder på ett bord i tre ögonblick. 1: handen knuffar ena änden framåt, och varven trycks ihop. 2: förtätningen vandrar längs fjädern. ' +
        '3: förtätningen når andra änden. Ett rödmarkerat varv i mitten har bara rört sig lite fram och tillbaka och är tillbaka på sin plats.';
    } else if (lage === 'vakuum') {
      // I A4: vakuumförsöket i fyra rader. Klockan hänger i en tråd i glasklockan (vibrationerna leds inte ut genom bordet);
      // luften som prickar (antal: data-luft), ljudvågorna till örat (antal: data-ljud), pumpen till vänster.
      const rad = (i, luft, ljud, pump) => {
        const yt = 28 + i * 64, cx = 62, yb = yt + 50, r = slump(40 + i);
        let g = `<rect class="fig-ljud-platta" x="${cx - 36}" y="${yb}" width="72" height="6"/>`;
        g += `<path class="fig-ljud-glas" d="M${cx - 30} ${yb} L${cx - 30} ${yt + 18} Q${cx - 30} ${yt} ${cx} ${yt} Q${cx + 30} ${yt} ${cx + 30} ${yt + 18} L${cx + 30} ${yb} Z"/>`;
        for (let k = 0; k < luft; k++) g += `<circle class="fig-ljud-prick fig-ljud-luft" cx="${f(cx + r() * 54)}" cy="${f(yt + 26 + r() * 40)}" r="1.8"/>`;
        g += `<line class="fig-ljud-trad" x1="${cx}" y1="${yt + 2}" x2="${cx}" y2="${yt + 18}"/>`;
        g += `<g class="fig-ljud-vackare" data-x="${cx}" data-y="${yt + 30}"><circle cx="${cx}" cy="${yt + 30}" r="10"/><line x1="${cx}" y1="${yt + 30}" x2="${cx}" y2="${yt + 24}"/><line x1="${cx}" y1="${yt + 30}" x2="${cx + 5}" y2="${yt + 32}"/>` +
          `<circle class="fig-ljud-bjallra" cx="${cx - 8}" cy="${yt + 19}" r="3.5"/><circle class="fig-ljud-bjallra" cx="${cx + 8}" cy="${yt + 19}" r="3.5"/></g>`;
        g += `<path class="fig-ljud-ringer" d="M${cx - 16} ${yt + 14} l-4 -4 M${cx + 16} ${yt + 14} l4 -4"/>`;
        g += `<path class="fig-ljud-ror" d="M${cx - 36} ${yb + 3} L${cx - 50} ${yb + 3} L${cx - 50} ${yt + 30}"/><rect class="fig-ljud-pump" x="${cx - 58}" y="${yt + 14}" width="16" height="16" rx="2"/>`;
        if (pump) g += `<g class="fig-ljud-luftpil" data-luftpil="${pump}">${pump === 'ut' ? riktPil(cx - 50, yt + 12, cx - 50, yt - 6) : riktPil(cx - 50, yt - 6, cx - 50, yt + 12)}</g>`;
        const ora = `<path class="fig-ljud-ora" d="M${cx + 66} ${yt + 14} C${cx + 82} ${yt + 10} ${cx + 84} ${yt + 34} ${cx + 74} ${yt + 40} C${cx + 68} ${yt + 44} ${cx + 70} ${yt + 50} ${cx + 64} ${yt + 50}"/>`;
        let v = ''; for (let k = 0; k < ljud; k++) { const x = cx + 38 + k * 8; v += `<path class="fig-ljud-front" d="M${x} ${yt + 16} Q${x + 6} ${yt + 30} ${x} ${yt + 44}"/>`; }
        return `<g class="fig-ljud-forsok" data-rad="${i + 1}" data-luft="${luft}" data-ljud="${ljud}">${g}${ora}${v}</g>`;
      };
      s += rad(0, 40, 3, null) + rad(1, 14, 1, 'ut') + rad(2, 2, 0, 'ut') + rad(3, 40, 3, 'in');
      s += borjaHar(160, 19) + steg(1, 160, 40, ['klockan ringer under glasklockan,', 'ljudvågorna når örat']);
      s += steg(2, 160, 102, ['pumpen suger ut luften: svagare', 'ljud, fast klockan ringer']);
      s += steg(3, 160, 166, ['nästan ingen luft kvar:', 'nästan inget ljud hörs']);
      s += steg(4, 160, 230, ['luften släpps in igen:', 'ljudet kommer tillbaka']);
      H = 230 + 6.5 + LRAD + 12; nSteg = 4;
      beskr = 'Vakuumförsöket i fyra steg. En väckarklocka hänger i en tråd under en glasklocka, så att vibrationerna inte leds ut genom bordet. 1: klockan ringer, och ljudvågorna når örat. ' +
        '2: en pump suger ut luften – ljudet blir svagare, fast klockan fortfarande ringer. 3: nästan ingen luft är kvar, och nästan inget ljud hörs. 4: luften släpps in igen, och ljudet kommer tillbaka.';
    } else if (lage === 'vagtyper') {
      // I A5: samma spiralfjäder två gånger. Överst longitudinell våg (varven fram och tillbaka längs fjädern), underst
      // transversell (en puckel; varven på tvären). Pil för vågens riktning, dubbelpil (rörelsepilar) för varvens rörelse.
      struktur = true;
      const x0 = 70, n = 26, a = 11, yL = 74, yT = 206;
      // longitudinell: två förtätningar
      let g = fet(8, 24, 'longitudinell våg');
      const sL = x => 5 * Math.sin(2 * Math.PI * (x - x0) / 110);
      const xs = Array.from({ length: n }, (_, k) => x0 + k * a + sL(x0 + k * a));
      for (let k = 1; k < n; k++) if (xs[k] - xs[k - 1] < a * 0.75 && !(xs[k - 1] - (xs[k - 2] || -99) < a * 0.75)) { let e = k; while (e + 1 < n && xs[e + 1] - xs[e] < a * 0.75) e++;
        g += `<rect class="fig-ljud-tat" data-tat="" x="${f(xs[k - 1] - 4)}" y="${yL - 16}" width="${f(xs[e] - xs[k - 1] + 8)}" height="32" rx="4"/>`; }
      g += `<line class="fig-ljud-fjaderaxel" x1="${f(xs[0])}" y1="${yL}" x2="${f(xs[n - 1])}" y2="${yL}"/>`;
      xs.forEach((x, k) => { g += `<ellipse class="fig-ljud-varv" data-k="${k}" cx="${f(x)}" cy="${yL}" rx="3" ry="12"/>`; });
      g += `<rect class="fig-ljud-hand" data-del="handen" x="${x0 - 36}" y="${yL - 10}" width="20" height="20" rx="7"/>`;
      g += `<g class="fig-energi-rorelse fig-ljud-dubbel" data-riktning="langs" data-del="handen">${rorelsePil(x0 - 26, yL + 20, x0 - 46, yL + 20)}${rorelsePil(x0 - 26, yL + 20, x0 - 6, yL + 20)}</g>`;
      g += `<g class="fig-energi-rorelse fig-ljud-dubbel" data-riktning="langs" data-del="varven">${rorelsePil(386, yL, 366, yL)}${rorelsePil(386, yL, 406, yL)}</g>`;
      g += rader(386, yL + 30, ['varvens', 'rörelse'], 'fig-mitt');
      g += riktPil(200, yL - 30, 280, yL - 30, '', 'data-vagen=""') + LT(286, yL - 24, 'vågen', 'fig-vanster');
      s += `<g class="fig-ljud-vagtyp" data-vagtyp="longitudinell">${g}</g>`;
      s += `<line class="fig-ljud-skilje" x1="8" y1="134" x2="432" y2="134"/>`;
      // transversell: en puckel vid x = 230
      g = fet(8, 160, 'transversell våg');
      const yP = x => yT - 26 * Math.exp(-((x - 200) / 28) * ((x - 200) / 28));
      const pts = []; for (let x = x0; x <= x0 + (n - 1) * a; x += 2) pts.push(f(x) + ',' + f(yP(x)));
      g += `<polyline class="fig-ljud-fjaderaxel" points="${pts.join(' ')}"/>`;
      for (let k = 0; k < n; k++) { const x = x0 + k * a; g += `<ellipse class="fig-ljud-varv" data-k="${k}" cx="${f(x)}" cy="${f(yP(x))}" rx="3" ry="12"/>`; }
      g += `<rect class="fig-ljud-hand" data-del="handen" x="${x0 - 36}" y="${yT - 10}" width="20" height="20" rx="7"/>`;
      g += `<g class="fig-energi-rorelse fig-ljud-dubbel" data-riktning="tvars" data-del="handen">${rorelsePil(x0 - 52, yT, x0 - 52, yT - 20)}${rorelsePil(x0 - 52, yT, x0 - 52, yT + 20)}</g>`;
      g += `<g class="fig-energi-rorelse fig-ljud-dubbel" data-riktning="tvars" data-del="varven">${rorelsePil(386, yT, 386, yT - 22)}${rorelsePil(386, yT, 386, yT + 22)}</g>`;
      g += rader(386, yT + 44, ['varvens', 'rörelse'], 'fig-mitt');
      g += riktPil(200, yT - 46, 280, yT - 46, '', 'data-vagen=""') + LT(286, yT - 40, 'vågen', 'fig-vanster');
      s += `<g class="fig-ljud-vagtyp" data-vagtyp="transversell">${g}</g>`;
      H = yT + 44 + LRAD + 10;
      beskr = 'Samma spiralfjäder två gånger. Överst en longitudinell våg: handen rör sig fram och tillbaka längs fjädern, det blir förtätningar och förtunningar, och varven rör sig fram och tillbaka längs fjädern medan vågen går åt höger. ' +
        'Underst en transversell våg: handen rör sig åt sidan, en puckel vandrar åt höger, och varven rör sig på tvären.';
    } else if (lage === 'tva-modeller') {
      // I B1: samma ljudvåg i partikelmodellen och vågmodellen, rakt ovanför varandra. Vågtopparna rakt under förtätningarna,
      // vågdalarna rakt under förtunningarna (streckade hjälplinjer). Våglängden lika lång i båda.
      struktur = true;
      const lam = 130, xa = 70, xb = 360, xT = 100, yc = 180, amp = 34, ax = 62, yB = 40;
      s += prickband(xa, xb, yB, 5, 8, forskj(lam, 0.95, xT), 5, `data-vaglangd="${lam}" data-topp="${xT}"`, 0.12);
      const matt = (x1, x2, y, ty, data) => `<g class="fig-ljud-matt" data-matt="vaglangd" ${data}><line class="fig-krock-matt" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>` +
        `<line class="fig-krock-matt" x1="${x1}" y1="${y - 5}" x2="${x1}" y2="${y + 5}"/><line class="fig-krock-matt" x1="${x2}" y1="${y - 5}" x2="${x2}" y2="${y + 5}"/></g>` + LT((x1 + x2) / 2, ty, 'våglängd', 'fig-mitt');
      s += matt(xT, xT + lam, 28, 20, 'data-modell="partikel"');
      s += LT(xT, 96, 'förtätning', 'fig-mitt') + LT(xT + 1.5 * lam, 96, 'förtunning', 'fig-mitt');
      for (let x = xT; x <= xb + 0.1; x += lam / 2) { const topp = Math.round((x - xT) / (lam / 2)) % 2 === 0;
        s += `<line class="fig-ljud-hjalp" data-hjalp="${topp ? 'topp' : 'dal'}" x1="${f(x)}" y1="104" x2="${f(x)}" y2="${f(topp ? yc - amp - 2 : yc + amp + 2)}"/>`; }
      s += `<line class="fig-ljud-mittlinje" x1="${ax}" y1="${yc}" x2="${xb}" y2="${yc}"/>` + rader(xb + 6, yc + 2, ['vanligt', 'lufttryck'], 'fig-vanster');
      s += `<g class="fig-ljud-axel" data-axel="tryck"><line x1="${ax}" y1="${yc + amp + 12}" x2="${ax}" y2="${yc - amp - 26}"/><polygon points="${ax},${yc - amp - 34} ${ax - 5},${yc - amp - 23} ${ax + 5},${yc - amp - 23}"/></g>`;
      s += LT(ax - 6, yc - amp - 20, 'tryck', 'fig-hoger fig-ljud-axeltext');
      s += vagLinje(xa, xb, yc, amp, lam, xT);
      s += LT(xb + 6, yc - amp + 6, 'vågtopp', 'fig-vanster') + LT(xT + 1.5 * lam, yc + amp + 22, 'vågdal', 'fig-mitt');
      s += matt(xT, xT + lam, yc + amp + 12, yc + amp + 32, 'data-modell="vag"').replace(`>${'våglängd'}<`, '>våglängd<');
      const yA = yc + amp + 46;
      s += `<g class="fig-ljud-axel" data-axel="avstand"><line x1="${ax}" y1="${yA}" x2="${xb - 6}" y2="${yA}"/><polygon points="${xb + 2},${yA} ${xb - 9},${yA - 5} ${xb - 9},${yA + 5}"/></g>`;
      s += LT(xb + 8, yA + 6, 'avstånd', 'fig-vanster fig-ljud-axeltext');
      H = yA + 14;
      beskr = 'Samma ljudvåg ritad på två sätt, rakt ovanför varandra. Överst partikelmodellen: luften som prickar, täta i förtätningarna och glesa i förtunningarna. ' +
        'Under den vågmodellen: en linje som visar trycket. Varje vågtopp står rakt under en förtätning och varje vågdal rakt under en förtunning (streckade linjer). ' +
        'Den lodräta axeln är märkt tryck och den vågräta avstånd, och en streckad mittlinje visar det vanliga lufttrycket. Våglängden är lika lång i båda modellerna.';
    } else if (lage === 'vagbegrepp') {
      // I B2: en våg med våglängd, amplitud, vågtopp och vågdal utmärkta; under den hög och låg frekvens med samma
      // amplitud. Alla vågor har avstånd på den vågräta axeln och visar ljud i samma ämne.
      struktur = true;
      const dubbel = (x1, y1, x2, y2, data) => { const v = Math.atan2(y2 - y1, x2 - x1), c = Math.cos(v), si = Math.sin(v), l = 8, w = 4;
        const spets = (x, y, k) => `<polygon points="${f(x)},${f(y)} ${f(x - k * l * c - w * si)},${f(y - k * l * si + w * c)} ${f(x - k * l * c + w * si)},${f(y - k * l * si - w * c)}"/>`;
        return `<g class="fig-ljud-pilmatt" ${data}><line x1="${f(x1 + l * 0.8 * c)}" y1="${f(y1 + l * 0.8 * si)}" x2="${f(x2 - l * 0.8 * c)}" y2="${f(y2 - l * 0.8 * si)}"/>${spets(x2, y2, 1)}${spets(x1, y1, -1)}</g>`; };
      const axel = (x1, x2, y, tx) => `<g class="fig-ljud-axel" data-axel="avstand"><line x1="${x1}" y1="${y}" x2="${x2 - 6}" y2="${y}"/><polygon points="${x2 + 2},${y} ${x2 - 9},${y - 5} ${x2 - 9},${y + 5}"/></g>` + tx;
      const lam = 120, xT = 100, yc = 74, amp = 30, x0 = 40, x1 = 340;
      s += `<line class="fig-ljud-mittlinje" x1="${x0}" y1="${yc}" x2="${x1}" y2="${yc}"/>`;
      s += `<g class="fig-ljud-ljud" data-ljud="huvud">${vagLinje(x0, x1, yc, amp, lam, xT)}</g>`;
      s += dubbel(xT, yc - amp - 12, xT + lam, yc - amp - 12, `data-matt="vaglangd" data-langd="${lam}"`) + LT(xT + lam / 2, yc - amp - 20, 'våglängd', 'fig-mitt');
      s += dubbel(x1, yc, x1, yc - amp, `data-matt="amplitud" data-langd="${amp}"`) + LT(x1 + 8, yc - amp / 2 + 6, 'amplitud', 'fig-vanster');
      s += LT(xT + lam + 30, yc - amp + 8, 'vågtopp', 'fig-vanster') + ledare(xT + lam + 27, yc - amp + 1, xT + lam + 4, yc - amp);
      s += LT(xT + lam / 2, yc + amp + 22, 'vågdal', 'fig-mitt');
      s += axel(x0, x1 + 20, yc + amp + 40, LT(x1 + 28, yc + amp + 46, 'avstånd', 'fig-vanster fig-ljud-axeltext'));
      const panel = (xa, xb, l, typ, rubrik, under) => { const yv = 214, a2 = 20;
        return `<g class="fig-ljud-ljud" data-ljud="${typ}">${LT((xa + xb) / 2, yv - a2 - 16, rubrik, 'fig-mitt fig-energi-ord')}${vagLinje(xa, xb - 10, yv, a2, l, xa + l / 4)}</g>` +
          axel(xa, xb, yv + a2 + 12, LT(xb, yv + a2 + 34, 'avstånd', 'fig-hoger fig-ljud-axeltext')) + LT(xa, yv + a2 + 34, under, 'fig-vanster'); };
      s += `<line class="fig-ljud-skilje" x1="8" y1="162" x2="432" y2="162"/>`;
      s += panel(14, 214, 30, 'hog', 'hög frekvens', 'kort våglängd') + panel(234, 432, 80, 'lag', 'låg frekvens', 'lång våglängd');
      H = 214 + 20 + 46;
      beskr = 'En ljudvåg i vågmodellen med avstånd på den vågräta axeln. Våglängden är markerad från en vågtopp till nästa, amplituden från mittlinjen upp till en vågtopp, och en vågtopp och en vågdal har namn. ' +
        'Under den två vågor i samma ämne med samma amplitud: till vänster hög frekvens med många vågtoppar tätt och kort våglängd, till höger låg frekvens med få vågtoppar glest och lång våglängd.';
    } else if (lage === 'horomraden') {
      // I B3: frekvensaxeln med logaritmisk skala (1 Hz – 200 000 Hz): infraljud, hörbart ljud och ultraljud; under den
      // hörselområdena som staplar (människa, hund, fladdermus, delfin) och, för sig och märkta "läten", elefantens och
      // blåvalens låga läten. data-fran/data-till är frekvenserna (Hz).
      struktur = true;
      const xa = 20, W = 384, lg = Math.log10(200000), X = hz => xa + Math.log10(hz) / lg * W, yA = 48;
      [['infraljud', 1, 20], ['hörbart ljud', 20, 20000], ['ultraljud', 20000, 200000]].forEach(([t, a, b], i) => {
        s += `<rect class="fig-ljud-omrade fig-ljud-omrade-${i}" data-omrade="${t}" x="${f(X(a))}" y="${yA - 16}" width="${f(X(b) - X(a))}" height="12"/>` + LT((X(a) + X(b)) / 2, yA - 24, t, 'fig-mitt'); });
      s += `<g class="fig-ljud-axel" data-axel="frekvens" data-skala="log"><line x1="${xa}" y1="${yA}" x2="${f(X(200000) + 4)}" y2="${yA}"/><polygon points="${f(X(200000) + 14)},${yA} ${f(X(200000) + 3)},${yA - 5} ${f(X(200000) + 3)},${yA + 5}"/></g>`;
      [[20, '20'], [200, '200'], [2000, '2 000'], [20000, '20 000'], [200000, '200 000']].forEach(([hz, t]) => {
        s += `<line class="fig-ljud-tick" data-hz="${hz}" x1="${f(X(hz))}" y1="${yA - 4}" x2="${f(X(hz))}" y2="${yA + 5}"/>` + LT(X(hz), yA + 22, t, 'fig-mitt'); });
      s += LT(xa, yA + 22, 'Hz', 'fig-vanster fig-ljud-axeltext');
      const stapel = (namn, a, b, y, k = '') => `<g class="fig-ljud-stapel ${k}" data-namn="${namn}" data-fran="${a}" data-till="${b}"><rect x="${f(X(a))}" y="${y - 8}" width="${f(X(b) - X(a))}" height="14" rx="3"/></g>` +
        LT(X(a) - 6, y + 4, namn, 'fig-hoger');
      let g = fet(xa, yA + 50, 'hörselområden');
      [['människa', 20, 20000], ['hund', 60, 45000], ['fladdermus', 2000, 110000], ['delfin', 100, 150000]].forEach(([n, a, b], i) => { g += stapel(n, a, b, yA + 77 + i * 27); });
      s += `<g class="fig-ljud-grupp" data-grupp="horsel">${g}</g>`;
      s += `<line class="fig-ljud-skilje" x1="8" y1="${yA + 176}" x2="432" y2="${yA + 176}"/>`;
      // lätena på en rad (en stapel för båda, samma ungefärliga område), märkta "läten" först på raden
      g = fet(xa, yA + 204, 'läten') + stapel('elefant och blåval', 10, 40, yA + 200, 'fig-ljud-laten').replace(LT(X(10) - 6, yA + 204, 'elefant och blåval', 'fig-hoger'), LT(X(40) + 8, yA + 204, 'elefant och blåval', 'fig-vanster'));
      s += `<g class="fig-ljud-grupp" data-grupp="laten">${g}</g>`;
      H = yA + 218;
      beskr = 'En frekvensaxel från 1 Hz till 200 000 Hz med logaritmisk skala: varje markering, 20, 200, 2 000, 20 000 och 200 000 Hz, är tio gånger den förra. Axeln är indelad i infraljud (under 20 Hz), hörbart ljud (20–20 000 Hz) och ultraljud (över 20 000 Hz). ' +
        'Under axeln hörselområden som staplar: människa ungefär 20–20 000 Hz, hund 60–45 000 Hz, fladdermus 2 000–110 000 Hz och delfin 100–150 000 Hz. För sig, märkta läten: elefantens och blåvalens låga läten, ungefär 10–40 Hz.';
    } else if (lage === 'aska') {
      // I C1: åskan längs en vågrät linje från blixten till en person 3 km bort. Ljuset en rak pil över hela sträckan;
      // ljudet som vågfronter vid 1, 2 och 3 km (efter 3, 6 och 9 s, alltså ungefär 340 m/s). data-km, data-s.
      const xk = km => 50 + km * 112, yG = 168;
      s += `<line class="fig-bord" x1="16" y1="${yG}" x2="432" y2="${yG}"/>`;
      s += `<path class="fig-ljud-moln" d="M20 30 q4 -18 24 -14 q10 -14 26 -4 q18 -2 16 14 q4 14 -14 14 l-46 0 q-14 0 -6 -10 z"/>`;
      s += `<polygon class="fig-ljud-blixten" data-x="${xk(0)}" points="${xk(0) - 4},40 ${xk(0) + 8},40 ${xk(0) - 2},86 ${xk(0) + 10},86 ${xk(0) - 8},${yG} ${xk(0) - 2},104 ${xk(0) - 12},104"/>`;
      const P = xk(3);
      s += `<g class="fig-ljud-person" data-x="${P}"><circle class="fig-hopp-huvud" cx="${P}" cy="${yG - 50}" r="8"/><path class="fig-hopp-kropp" d="M${P} ${yG - 42} L${P} ${yG - 18}"/>` +
        `<path class="fig-hopp-lem" d="M${P} ${yG - 18} L${P - 6} ${yG} M${P} ${yG - 18} L${P + 6} ${yG} M${P} ${yG - 36} L${P - 8} ${yG - 24} M${P} ${yG - 36} L${P + 8} ${yG - 24}"/></g>`;
      s += strale(xk(0) + 14, 96, P - 14, 96, 'data-roll="ljuset"');
      s += `<polygon class="fig-ljus-spets" points="${P - 12},96 ${P - 24},91 ${P - 24},101"/>`;
      [1, 2, 3].forEach(km => { const r = xk(km) - xk(0), v = 18 * GR;
        s += `<path class="fig-ljud-front" data-km="${km}" data-s="${3 * km}" d="M${f(xk(0) + r * Math.cos(v))} ${f(yG - r * Math.sin(v))} A${r} ${r} 0 0 1 ${f(xk(km))} ${yG}"/>` +
          `<line class="fig-ljud-tick" x1="${f(xk(km))}" y1="${yG}" x2="${f(xk(km))}" y2="${yG + 8}"/>`; });
      s += borjaHar(92, 22, 'fig-vanster') + steg(1, 106, 46, ['blixten slår ned – ljuset', 'når personen nästan direkt']);
      s += steg(2, xk(1), yG + 30, ['efter 3 s:', '1 km'], 0) + steg(3, xk(2), yG + 30, ['efter 6 s:', '2 km'], 0) + steg(4, xk(3) - 4, yG + 30, ['efter 9 s:', 'mullret hörs'], 0);
      H = yG + 30 + 34 + LRAD + 10; nSteg = 4;
      beskr = 'Åskan längs en linje från blixten till en person 3 km bort. 1: blixten slår ned, och ljuset – en rak pil över hela sträckan – når personen nästan direkt. ' +
        '2: efter 3 sekunder har ljudet kommit 1 km. 3: efter 6 sekunder har det kommit 2 km. 4: efter 9 sekunder når mullret personen. Ljudet är ritat som vågfronter vid 1, 2 och 3 km.';
    } else if (lage === 'hastigheter') {
      // I C2: ljudets hastighet som liggande staplar i rätt proportion (data-v i m/s)
      struktur = true;
      const x0 = 84, W = 256, vmax = 6000;
      [['luft', 340, '340 m/s'], ['vatten', 1500, '1 500 m/s'], ['trä', 4000, 'ca 4 000 m/s'], ['stål', 5900, 'ca 5 900 m/s']].forEach(([n, v, t], i) => {
        const y = 30 + i * 40, w = v / vmax * W;
        s += LT(x0 - 8, y + 6, n, 'fig-hoger') + `<rect class="fig-ljud-hastighet" data-amne="${n}" data-v="${v}" x="${x0}" y="${y - 12}" width="${f(w)}" height="24" rx="3"/>` + LT(x0 + w + 8, y + 6, t, 'fig-vanster'); });
      s += `<line class="fig-bord" x1="${x0}" y1="10" x2="${x0}" y2="${30 + 3 * 40 + 20}"/>`;
      H = 30 + 3 * 40 + 28;
      beskr = 'Ljudets hastighet i fyra ämnen som liggande staplar: luft 340 m/s, vatten 1 500 m/s, trä ungefär 4 000 m/s och stål ungefär 5 900 m/s. Staplarnas längd är i rätt proportion.';
    } else if (lage === 'orat-delar') {
      // I D1: örat i genomskärning med namn på delarna och en klammer över ytteröra, mellanöra och inneröra
      struktur = true;
      const yc = 150, xt = 190, xo = 262;
      s += `<path class="fig-ljud-huvud" d="M66 98 L440 98 L440 206 L66 206 Z"/>`;
      s += `<path class="fig-ljud-ora" data-del="öronmussla" data-x="40" d="M72 ${yc - 12} C60 ${yc - 36} 64 ${yc - 56} 52 ${yc - 60} C34 ${yc - 66} 22 ${yc - 30} 34 ${yc + 2} C44 ${yc + 28} 50 ${yc + 46} 66 ${yc + 46} C76 ${yc + 46} 76 ${yc + 30} 72 ${yc + 12}"/>`;
      s += `<path class="fig-ljud-gang" data-del="hörselgång" data-x="130" d="M72 ${yc - 12} L${xt} ${yc - 10} M72 ${yc + 12} L${xt} ${yc + 10}"/>`;
      s += `<rect class="fig-ljud-mellan" x="${xt + 3}" y="${yc - 32}" width="${xo - xt - 3}" height="60" rx="10"/>`;
      s += `<line class="fig-ljud-trumhinna" data-del="trumhinna" data-x="${xt + 2}" x1="${xt}" y1="${yc - 14}" x2="${xt + 4}" y2="${yc + 14}"/>`;
      s += `<g class="fig-ljud-ben" data-del="hammare" data-x="204"><path d="M${xt + 4} ${yc + 4} L206 ${yc - 14}"/><circle cx="208" cy="${yc - 18}" r="6"/></g>`;
      s += `<g class="fig-ljud-ben" data-del="städ" data-x="228"><path d="M218 ${yc - 22} L236 ${yc - 22} L232 ${yc - 8} L226 ${yc + 2}"/></g>`;
      s += `<g class="fig-ljud-ben" data-del="stigbygel" data-x="248"><path d="M228 ${yc + 2} L240 ${yc + 2} M240 ${yc - 6} Q252 ${yc - 6} ${xo} ${yc - 4} M240 ${yc + 10} Q252 ${yc + 10} ${xo} ${yc + 8} M240 ${yc - 6} L240 ${yc + 10}"/></g>`;
      const sp = []; for (let i = 0; i <= 90; i++) { const v = i / 90 * 2.4 * 2 * Math.PI, r = 4 + 22 * i / 90; sp.push(f(292 + r * Math.cos(v)) + ',' + f(yc + 6 + r * Math.sin(v))); }
      s += `<polyline class="fig-ljud-snacka" data-del="snäcka" data-x="292" points="${sp.reverse().join(' ')}"/>`;
      s += `<g class="fig-ljud-balans" data-del="balansorgan" data-x="290"><path d="M276 ${yc - 22} a12 12 0 1 1 14 -12 M290 ${yc - 34} a10 10 0 1 1 14 8 M284 ${yc - 22} a9 9 0 1 0 -6 -14"/></g>`;
      // ovala fönstret (v2): membranet där stigbygelns fotplatta trycker in mot snäckan, på gränsen till innerörat
      s += `<ellipse class="fig-ljud-ovala" data-del="ovala fönstret" data-x="${xo + 3}" cx="${xo + 3}" cy="${yc + 2}" rx="3" ry="9"/>`;
      s += `<path class="fig-ljud-nerv" data-del="hörselnerv" data-x="370" d="M314 ${yc + 2} C340 ${yc - 12} 360 ${yc + 10} 390 ${yc - 4} S420 ${yc - 8} 436 ${yc - 2}"/>`;
      s += `<path class="fig-ljud-trumpet" data-del="örontrumpet" data-x="250" d="M232 ${yc + 28} C238 ${yc + 44} 252 ${yc + 52} 272 ${yc + 60}"/>`;
      // namnen
      const namn = (t, x, y, px, py) => ledare(x, y + (y < yc ? 6 : -20), px, py) + LT(x, y, t, 'fig-mitt fig-halo fig-ljud-namn');
      s += namn('öronmussla', 50, 78, 46, yc - 58) + namn('hammare', 184, 78, 207, yc - 24) + namn('städ', 250, 78, 230, yc - 22) + namn('balansorgan', 344, 78, 300, yc - 36);
      // hörselnerven och snäckan namnges inne i bilden (till höger, ovanför och under nerven), så att ledaren till ovala
      // fönstret går fritt under snäckan
      s += ledare(392, yc - 22, 404, yc - 6) + LT(392, yc - 26, 'hörselnerv', 'fig-mitt fig-halo fig-ljud-namn');
      s += ledare(350, yc + 34, 318, yc + 20) + LT(380, yc + 48, 'snäcka', 'fig-mitt fig-halo fig-ljud-namn');
      s += namn('hörselgång', 100, 236, 110, yc + 12) + namn('stigbygel', 210, 236, 250, yc + 10) + namn('ovala fönstret', 330, 236, xo + 1, yc + 12);
      s += namn('trumhinna', 150, 262, 192, yc + 14) + namn('örontrumpet', 260, 262, 256, yc + 53);
      // klammern över de tre delarna
      const klammer = (x1, x2, t, k) => `<g class="fig-ljud-klammer" data-del="${k}" data-fran="${x1}" data-till="${x2}"><path d="M${x1 + 1} 46 L${x1 + 1} 40 L${x2 - 1} 40 L${x2 - 1} 46 M${(x1 + x2) / 2} 40 L${(x1 + x2) / 2} 34"/></g>` + LT((x1 + x2) / 2, 26, t, 'fig-mitt fig-energi-ord');
      s += klammer(18, xt, 'ytteröra', 'ytteröra') + klammer(xt, xo, 'mellanöra', 'mellanöra') + klammer(xo, 362, 'inneröra', 'inneröra');
      H = 262 + 12;
      beskr = 'Örat i genomskärning. Ytterörat: öronmusslan och hörselgången, som slutar vid trumhinnan. Mellanörat: ett luftfyllt rum med hörselbenen hammaren, städet och stigbygeln, och örontrumpeten som går ned mot svalget. ' +
        'Stigbygeln trycker på ovala fönstret, ett litet membran in till snäckan. Innerörat: snäckan och balansorganet. Från snäckan går hörselnerven till hjärnan. Klammerna överst visar de tre delarna.';
    } else if (lage === 'orat-vag') {
      // I D2: ljudets väg genom örat i steg 1–6 på en förenklad genomskärning; delarna i ordning från vänster (data-x)
      const yc = 146;
      s += `<path class="fig-ljud-huvud" d="M44 112 L440 112 L440 182 L44 182 Z"/>`;
      [0, 1, 2].forEach(i => { s += `<path class="fig-ljud-front" d="M${f(4 + i * 10)} ${yc - 20} Q${f(12 + i * 10)} ${yc} ${f(4 + i * 10)} ${yc + 20}"/>`; });
      s += `<path class="fig-ljud-ora" d="M50 ${yc - 12} C40 ${yc - 30} 44 ${yc - 34} 38 ${yc - 32} M50 ${yc + 12} C44 ${yc + 26} 46 ${yc + 30} 40 ${yc + 30}"/>`;
      s += `<path class="fig-ljud-gang" data-del="hörselgång" data-x="90" d="M50 ${yc - 12} L132 ${yc - 10} M50 ${yc + 12} L132 ${yc + 10}"/>`;
      s += `<line class="fig-ljud-trumhinna" data-del="trumhinna" data-x="134" x1="132" y1="${yc - 14}" x2="136" y2="${yc + 14}"/>`;
      s += `<g class="fig-ljud-ben" data-del="hörselben" data-x="156"><path d="M136 ${yc} L146 ${yc - 8} L158 ${yc - 2} L168 ${yc - 6} L176 ${yc + 2}"/><circle cx="146" cy="${yc - 8}" r="4.5"/><circle cx="160" cy="${yc - 3}" r="4.5"/><rect x="172" y="${yc - 5}" width="8" height="11" rx="2"/></g>`;
      const sp = []; for (let i = 0; i <= 90; i++) { const v = i / 90 * 2.4 * 2 * Math.PI, r = 4 + 22 * i / 90; sp.push(f(206 + r * Math.cos(v)) + ',' + f(yc + r * Math.sin(v))); }
      s += `<g data-del="snäcka" data-x="206"><circle class="fig-ljud-vatska" cx="206" cy="${yc}" r="27"/><polyline class="fig-ljud-snacka" points="${sp.reverse().join(' ')}"/></g>`;
      s += `<ellipse class="fig-ljud-ovala" data-del="ovala fönstret" data-x="181" cx="181" cy="${yc + 1}" rx="2.6" ry="8"/>`;
      s += `<g class="fig-ljud-harceller" data-del="hårceller" data-x="248">${[0, 1, 2, 3, 4].map(k => `<line x1="${240 + k * 4}" y1="${yc + 8}" x2="${240 + k * 4}" y2="${yc - 4}"/>`).join('')}<line x1="236" y1="${yc + 8}" x2="260" y2="${yc + 8}"/></g>`;
      s += `<path class="fig-ljud-nerv" data-del="hörselnerv" data-x="300" d="M260 ${yc + 4} C290 ${yc - 10} 320 ${yc + 12} 352 ${yc - 2}"/>`;
      s += `<g class="fig-ljud-hjarna" data-del="hjärnan" data-x="396"><path d="M356 ${yc + 6} C350 ${yc - 26} 380 ${yc - 34} 400 ${yc - 28} C430 ${yc - 32} 440 ${yc - 6} 432 ${yc + 12} C428 ${yc + 30} 380 ${yc + 32} 356 ${yc + 6} Z"/>` +
        `<path class="fig-ljud-veck" d="M372 ${yc - 12} q8 8 0 16 M392 ${yc - 22} q-6 12 4 20 M414 ${yc - 16} q-8 10 2 22"/></g>`;
      // (v2: steg 4 ovala fönstret, 5 hårcellerna omvandlar rörelsen, 6 nervcellerna skickar impulser; stegen 2, 4 och 6
      // under bilden med meningen under ringen, så att de längre meningarna ryms)
      s += borjaHar(8, 20, 'fig-vanster') + steg(1, 20, 44, ['ljudvågen in', 'i hörselgången']);
      s += steg(3, 154, 44, ['hörselbenen', 'för vidare']) + steg(5, 286, 44, ['hårcellerna gör', 'om rörelsen', 'till signaler']);
      s += steg(2, 70, 202, ['trumhinnan', 'vibrerar'], 0) + steg(4, 200, 202, ['ovala fönstret:', 'vätskan svänger'], 0) + steg(6, 358, 202, ['nervcellerna', 'skickar impulser'], 0);
      H = 202 + 34 + LRAD + 12; nSteg = 6;
      beskr = 'Ljudets väg genom örat i sex steg. 1: ljudvågen kommer in i hörselgången. 2: trumhinnan vibrerar. 3: hörselbenen för vibrationerna vidare. ' +
        '4: stigbygeln trycker på ovala fönstret, och vätskan i snäckan sätts i svängning. 5: hårcellerna omvandlar rörelsen till signaler. 6: hörselnervens nervceller skickar impulser till hjärnan.';
    } else if (lage === 'huvud') {
      // I D3: ett huvud sett uppifrån, två gånger. Till vänster ljud rakt framifrån (raka fronter, båda öronen samtidigt);
      // till höger ljud från höger (högra örat först, skugga bakom huvudet vid vänster öra).
      struktur = true;
      const huvud = (cx, cy) => `<g class="fig-ljud-huvudet" data-cx="${cx}" data-cy="${cy}"><ellipse class="fig-ljud-skalle" cx="${cx}" cy="${cy}" rx="40" ry="48"/>` +
        `<path class="fig-ljud-nasa" d="M${cx - 7} ${cy - 46} L${cx} ${cy - 60} L${cx + 7} ${cy - 46}"/>` +
        `<ellipse class="fig-ljud-orat" data-ora="vanster" cx="${cx - 42}" cy="${cy}" rx="5" ry="11"/><ellipse class="fig-ljud-orat" data-ora="hoger" cx="${cx + 42}" cy="${cy}" rx="5" ry="11"/></g>`;
      const A = [108, 168], Bh = [318, 168];
      let g = LT(A[0], 22, 'ljud framifrån', 'fig-mitt fig-energi-ord') + huvud(...A);
      [42, 62, 82].forEach(y => { g += `<line class="fig-ljud-front" data-front="" x1="${A[0] - 70}" y1="${y}" x2="${A[0] + 70}" y2="${y}"/>`; });
      g += riktPil(A[0] + 86, 40, A[0] + 86, 92);
      g += rader(A[0], 246, ['båda öronen', 'samtidigt'], 'fig-mitt');
      s += `<g class="fig-ljud-panel" data-fran="fram">${g}</g>`;
      g = LT(Bh[0] + 10, 22, 'ljud från höger', 'fig-mitt fig-energi-ord');
      g += `<path class="fig-ljus-skugga fig-ljud-skuggan" data-x="${Bh[0] - 62}" d="M${Bh[0]} ${Bh[1] - 48} L${Bh[0] - 90} ${Bh[1] - 40} L${Bh[0] - 90} ${Bh[1] + 40} L${Bh[0]} ${Bh[1] + 48} Z"/>`;
      g += huvud(...Bh);
      [384, 406, 428].forEach(x => { g += `<line class="fig-ljud-front" data-front="" x1="${x}" y1="${Bh[1] - 60}" x2="${x}" y2="${Bh[1] + 50}"/>`; });
      g += riktPil(436, 52, 384, 52);
      g += LT(Bh[0] - 50, Bh[1] + 80, 'skugga', 'fig-mitt fig-ljus-skuggtext');
      g += rader(Bh[0] + 40, 246, ['högra örat', 'först'], 'fig-mitt');
      s += `<line class="fig-ljud-skilje" x1="216" y1="10" x2="216" y2="276"/>`;
      s += `<g class="fig-ljud-panel" data-fran="hoger">${g}</g>`;
      H = 246 + LRAD + 12;
      beskr = 'Ett huvud sett uppifrån, med näsan uppåt, två gånger. Till vänster kommer ljudvågorna rakt framifrån och når båda öronen samtidigt. ' +
        'Till höger kommer de från höger sida och når det högra örat först; huvudet skuggar det vänstra örat.';
    } else if (lage === 'snacka') {
      // I D4: snäckan utrullad till en lång kil, början till vänster. Membranet (basilarmembranet) är smalt vid början och
      // brett längst in. Bara två markeringar (v2): höga frekvenser vid början, låga längst in, med en pil däremellan –
      // inga mellanliggande värden, eftersom frekvenserna inte är jämnt fördelade längs membranet.
      struktur = true;
      const x0 = 30, x1 = 410, yc = 120, X = t => x0 + t * (x1 - x0);
      s += `<path class="fig-ljud-kil" d="M${x0} ${yc - 40} L${x1} ${yc - 14} Q${x1 + 12} ${yc} ${x1} ${yc + 14} L${x0} ${yc + 40}"/>`;
      s += `<line class="fig-ljud-kilstart" x1="${x0}" y1="${yc - 40}" x2="${x0}" y2="${yc + 40}"/>`;
      const bredd = t => 3 + 9 * t;
      s += `<polygon class="fig-ljud-basilar" data-bredd-borjan="${bredd(0) * 2}" data-bredd-slut="${bredd(1) * 2}" points="${X(0)},${yc - bredd(0)} ${X(1)},${yc - bredd(1)} ${X(1)},${yc + bredd(1)} ${X(0)},${yc + bredd(0)}"/>`;
      [[20000, 0.04, ['höga frekvenser', '(t.ex. 20 000 Hz)'], 'fig-vanster', x0 - 22], [20, 0.97, ['låga frekvenser', '(t.ex. 20 Hz)'], 'fig-hoger', 438]].forEach(([hz, t, txt, k, tx]) => {
        s += `<g class="fig-ljud-plats" data-hz="${hz}" data-x="${f(X(t))}"><line x1="${f(X(t))}" y1="${f(yc - bredd(t) - 2)}" x2="${f(X(t))}" y2="${yc - 50}"/></g>` +
          rader(tx, yc - 84, txt, k); });
      s += riktPil(X(0.42), yc - 72, X(0.68), yc - 72, '', 'data-frekvenspil=""');
      s += LT(x0, yc + 66, 'smalt och styvt', 'fig-vanster') + LT(x1, yc + 66, 'brett och mjukt', 'fig-hoger');
      s += LT(x0, yc + 92, 'början', 'fig-vanster fig-ljus-skuggtext') + LT(x1, yc + 92, 'längst in', 'fig-hoger fig-ljus-skuggtext');
      H = yc + 104;
      beskr = 'Snäckan utrullad till en lång kil, med början till vänster och slutet till höger. Membranet inuti är smalt och styvt vid början och brett och mjukt längst in. ' +
        'Höga frekvenser, till exempel 20 000 Hz, får membranet att svänga vid början, och låga frekvenser, till exempel 20 Hz, längst in. En pil går från de höga till de låga.';
    // ---------- Kapitel 2 Ljud och ljus, avsnitt II Ljud omkring oss (arbetsorder 34, 2026-11-22) ----------
    // Egna lägen; id:t i texten är källans (A1 …). Vågkurvorna i A1, A2 och A4 har TID på den vågräta axeln.
    } else if (lage === 'tonhojd-tid') {
      // II A1: två vågor med samma amplitud; överst hög frekvens (tätt), underst låg (glest)
      struktur = true;
      const x0 = 20, x1 = 396, amp = 26;
      const rad = (yc, lam, typ, namn) => `<g class="fig-ljud-ljud" data-ljud="${typ}">${LT(x0, yc - amp - 16, namn, 'fig-vanster fig-energi-ord')}${vagLinje(x0, x1, yc, amp, lam, x0 + lam / 4)}</g>` + tidAxel(x0, x1 + 8, yc + amp + 14);
      s += rad(74, 37.6, 'hog', 'hög ton – hög frekvens') + rad(196, 125, 'lag', 'låg ton – låg frekvens');
      H = 196 + amp + 14 + 22;
      beskr = 'Två ljudvågor ovanför varandra med samma amplitud och tid på den vågräta axeln. Överst en hög ton: många svängningar tätt, hög frekvens. Underst en låg ton: få svängningar glest, låg frekvens.';
    } else if (lage === 'styrka-tid') {
      // II A2: samma frekvens, olika amplitud; topparna rakt ovanför varandra (streckade hjälplinjer)
      struktur = true;
      const x0 = 20, x1 = 396, lam = 75.2, xT = x0 + lam / 4;
      const rad = (yc, amp, typ, namn) => `<g class="fig-ljud-ljud" data-ljud="${typ}">${LT(x0, yc - 30 - 16, namn, 'fig-vanster fig-energi-ord fig-halo')}${vagLinje(x0, x1, yc, amp, lam, xT)}</g>` + tidAxel(x0, x1 + 8, yc + 30 + 14);
      for (let x = xT; x <= x1; x += lam) s += `<line class="fig-ljud-hjalp" data-hjalp="topp" x1="${f(x)}" y1="${f(80 - 30)}" x2="${f(x)}" y2="${f(202 - 10)}"/>`;
      s += rad(80, 30, 'stark', 'stark ton – stor amplitud') + rad(202, 10, 'svag', 'svag ton – liten amplitud');
      H = 202 + 30 + 14 + 22;
      beskr = 'Två ljudvågor ovanför varandra med samma frekvens och tid på den vågräta axeln. Överst en stark ton med höga toppar, stor amplitud. Underst en svag ton med låga toppar, liten amplitud. ' +
        'Topparna står rakt ovanför varandra (streckade linjer), så svängningarna är lika täta.';
    } else if (lage === 'gitarrhals') {
      // II A3: gitarrhalsen från sidan två gånger. Sadeln till vänster, stallet till höger; banden där tonen blir en
      // halvton högre (strängen förkortas med 2^(−1/12) per band), det tolfte mitt på. Den svängande delen markerad med
      // en båge (data-fran, data-till); underst bara delen mellan det nedtryckta bandet och stallet.
      struktur = true;
      const xS = 34, L = 370, xB = xS + L, band = n => xS + L * (1 - Math.pow(2, -n / 12)), x12 = band(12);
      const rad = (yS, titel, fran, tryckt) => {
        let g = fet(8, yS - 36, titel);
        g += `<path class="fig-ljud-huvudstock" d="M6 ${yS + 2} L${xS} ${yS + 2} L${xS} ${yS + 14} L10 ${yS + 18} Z"/>`;
        g += `<rect class="fig-ljud-hals" x="${xS}" y="${yS + 3}" width="${f(band(14) - xS)}" height="11"/>`;
        g += `<path class="fig-ljud-kropp" d="M${f(band(14) - 6)} ${yS + 3} L432 ${yS + 3} Q438 ${yS + 3} 438 ${yS + 10} L438 ${yS + 34} Q438 ${yS + 40} 432 ${yS + 40} L${f(band(14) + 4)} ${yS + 40} Q${f(band(14) - 6)} ${yS + 40} ${f(band(14) - 6)} ${yS + 30} Z"/>`;
        for (let n = 1; n <= 14; n++) g += `<line class="fig-ljud-band" data-band="${n}" x1="${f(band(n))}" y1="${yS + 3}" x2="${f(band(n))}" y2="${yS}"/>`;
        g += `<rect class="fig-ljud-sadel" data-del="sadel" data-x="${xS}" x="${xS - 3}" y="${yS - 2}" width="5" height="6"/><rect class="fig-ljud-stall" data-del="stall" data-x="${xB}" x="${xB - 3}" y="${yS - 2}" width="7" height="6"/>`;
        if (tryckt) {
          g += `<line class="fig-ljud-strang" x1="${xS}" y1="${yS - 1}" x2="${f(x12 - 3)}" y2="${yS + 1}"/><line class="fig-ljud-strang" x1="${f(x12 - 3)}" y1="${yS + 1}" x2="${xB}" y2="${yS - 1}"/>`;
          g += `<ellipse class="fig-ljud-finger" data-x="${f(x12 - 6)}" cx="${f(x12 - 7)}" cy="${yS - 9}" rx="8" ry="7"/>`;
        } else g += `<line class="fig-ljud-strang" x1="${xS}" y1="${yS - 1}" x2="${xB}" y2="${yS - 1}"/>`;
        const a = fran, b = xB, m = (a + b) / 2;
        g += `<path class="fig-ljud-bage" data-fran="${f(a)}" data-till="${f(b)}" d="M${f(a)} ${yS - 1} Q${f(m)} ${yS - 29} ${f(b)} ${yS - 1} M${f(a)} ${yS - 1} Q${f(m)} ${yS + 27} ${f(b)} ${yS - 1}"/>`;
        return g;
      };
      s += `<g class="fig-ljud-gitarr-rad" data-rad="1">${rad(64, 'hela strängen svänger: låg ton', xS, false)}</g>`;
      s += LT(xS, 64 + 66, 'sadel', 'fig-mitt') + ledare(xS, 64 + 48, xS, 64 + 6) + LT(xB, 64 + 66, 'stall', 'fig-mitt') + ledare(xB, 64 + 48, xB, 64 + 6);
      const y2 = 196;
      s += `<g class="fig-ljud-gitarr-rad" data-rad="2" data-band12="${f(x12)}">${rad(y2, 'halva strängen svänger: högre ton', x12, true)}</g>`;
      s += LT(x12, y2 + 66, 'tolfte bandet', 'fig-mitt') + ledare(x12, y2 + 48, x12, y2 + 4);
      H = y2 + 66 + 12;
      beskr = 'En gitarrhals sedd från sidan, två gånger, med sadeln till vänster och stallet till höger. Överst svänger hela strängen mellan sadeln och stallet, en lång svängande del: låg ton. ' +
        'Underst trycker ett finger ned strängen vid det tolfte bandet, mitt på. Bara delen mellan bandet och stallet svänger, halva strängen: högre ton. Den svängande delen är markerad med en båge.';
    } else if (lage === 'klang-tid') {
      // II A4: ren ton, klang och brus med tid på den vågräta axeln. Klangen upprepar sig i samma takt som den rena tonen
      // (data-period), bruset utan mönster.
      struktur = true;
      const x0 = 20, x1 = 396, P = 75.2, A = 22, w = 2 * Math.PI / P;
      const ren = x => A * Math.sin(w * x);
      const kl = x => A / 1.55 * (Math.sin(w * x) + 0.55 * Math.sin(2 * w * x + 0.6) + 0.4 * Math.sin(3 * w * x + 1.1) + 0.25 * Math.sin(5 * w * x));
      const r = slump(17), br = []; for (let i = 0; i <= Math.ceil(x1 - x0) / 3 + 2; i++) br.push(r() * 2 * A * 0.95);
      const brus = x => { const i = Math.floor(x / 3), t = x / 3 - i; return br[i] * (1 - t) + br[i + 1] * t; };
      const rad = (yc, fn, typ, namn) => `<g class="fig-ljud-ljud" data-ljud="${typ}" data-period="${typ === 'brus' ? '' : P}">${LT(x0, yc - A - 14, namn, 'fig-vanster fig-energi-ord')}${kurva(x0, x1, yc, fn)}</g>` + tidAxel(x0, x1 + 8, yc + A + 12);
      s += rad(58, ren, 'ren', 'ren ton (stämgaffel)') + rad(146, kl, 'klang', 'klang (fiol)') + rad(234, brus, 'brus', 'brus (dusch)');
      H = 234 + A + 12 + 22;
      beskr = 'Tre ljud med tid på den vågräta axeln. Överst en ren ton från en stämgaffel: en jämn, mjuk våg. I mitten klang från en fiol: vågen upprepar sig i samma takt men har en taggigare form. ' +
        'Underst brus från en dusch: en helt oregelbunden kurva utan mönster.';
    } else if (lage === 'strang-delar') {
      // II A5: en sträng mellan två fästen, tre gånger: hela strängen (f), två halvor (2 f) och tre delar (3 f). Den
      // heldragna och den streckade kurvan är strängens två ytterlägen; de stilla punkterna (noderna) som prickar.
      struktur = true;
      const xa = 40, xb = 400, L = xb - xa, A = 17;
      [[1, 'grundton, f'], [2, '2 f'], [3, '3 f']].forEach(([n, t], i) => {
        const yc = 58 + i * 84, fn = sg => x => sg * A * Math.sin(n * Math.PI * x / L);
        let g = fet(xa, yc - A - 18, t);
        g += `<rect class="fig-ljud-fast" x="${xa - 8}" y="${yc - 14}" width="8" height="28"/><rect class="fig-ljud-fast" x="${xb}" y="${yc - 14}" width="8" height="28"/>`;
        g += kurva(xa, xb, yc, fn(1), 'data-ytterlage="1"', 'fig-ljud-strang-bage') + kurva(xa, xb, yc, fn(-1), 'data-ytterlage="-1"', 'fig-ljud-strang-bage fig-ljud-motsatt');
        for (let k = 1; k < n; k++) g += `<circle class="fig-ljud-nod" data-x="${f(xa + k * L / n)}" cx="${f(xa + k * L / n)}" cy="${yc}" r="4.5"/>`;
        s += `<g class="fig-ljud-strangrad" data-delar="${n}" data-fran="${xa}" data-till="${xb}" data-yc="${yc}">${g}</g>`;
      });
      H = 58 + 2 * 84 + A + 14;
      beskr = 'En sträng spänd mellan två fästen, ritad tre gånger. Överst svänger hela strängen som en båge: grundtonen, f. I mitten svänger den i två halvor åt motsatta håll med en stilla punkt i mitten: 2 f. ' +
        'Underst svänger den i tre delar med två stilla punkter: 3 f. Strängens ändar står still, och de stilla punkterna är markerade med en prick.';
    } else if (lage === 'tonomfang') {
      // II A6: tonomfången som liggande staplar över en logaritmisk frekvensaxel 20–20 000 Hz; normaltonen A 440 Hz
      // markerad under axeln. data-fran/data-till i Hz.
      struktur = true;
      const xa = 40, W = 360, X = logAxel(xa, W, 20, 20000), yA = 176;
      const st = [['piano', 27, 4200], ['gitarr', 82, 1200], ['flöjt', 260, 2100], ['människoröst', 80, 1000], ['bastuba', 40, 350]];
      st.forEach(([n, a, b], i) => { const y = 24 + i * 29;
        s += `<g class="fig-ljud-stapel" data-namn="${n}" data-fran="${a}" data-till="${b}"><rect x="${f(X(a))}" y="${y - 8}" width="${f(X(b) - X(a))}" height="14" rx="3"/></g>` + LT(X(b) + 8, y + 4, n, 'fig-vanster'); });
      s += `<g class="fig-ljud-axel" data-axel="frekvens" data-skala="log"><line x1="${xa}" y1="${yA}" x2="${f(X(20000) + 6)}" y2="${yA}"/><polygon points="${f(X(20000) + 16)},${yA} ${f(X(20000) + 5)},${yA - 5} ${f(X(20000) + 5)},${yA + 5}"/></g>`;
      [[20, '20'], [200, '200'], [2000, '2 000'], [20000, '20 000']].forEach(([hz, t]) => {
        s += `<line class="fig-ljud-tick" data-hz="${hz}" x1="${f(X(hz))}" y1="${yA - 4}" x2="${f(X(hz))}" y2="${yA + 5}"/>` + LT(X(hz), yA + 24, t, hz === 20000 ? 'fig-hoger' : 'fig-mitt'); });
      s += LT(X(20000) + 22, yA + 24, 'Hz', 'fig-mitt fig-ljud-axeltext');
      const xA = X(440);
      s += `<g class="fig-ljud-normalton" data-hz="440" data-x="${f(xA)}"><polygon points="${f(xA)},${yA + 6} ${f(xA - 6)},${yA + 16} ${f(xA + 6)},${yA + 16}"/></g>` + LT(xA, yA + 50, 'normaltonen A 440 Hz', 'fig-mitt');
      H = yA + 62;
      beskr = 'Tonomfång som liggande staplar över en frekvensaxel med logaritmisk skala från 20 Hz till 20 000 Hz, där varje markering är tio gånger den förra: piano ungefär 27–4 200 Hz, gitarr 82–1 200 Hz, ' +
        'flöjt 260–2 100 Hz, människoröst 80–1 000 Hz och bastuba 40–350 Hz. Under axeln är normaltonen A, 440 Hz, markerad.';
    } else if (lage === 'gunga') {
      // II B1: gungan i fyra bilder. Utslaget (bågen) växer för varje bild. I bild 1 och 3 har gungan just vänt längst bak
      // (till vänster), och knuffen är en pil i rörelsens riktning, framåt längs bågen (data-dx, data-dy: pilens riktning).
      const L = 86, yP = 30, P = [[56, 8, -8, true], [162, 12, 0, false], [268, 19, -19, true], [376, 34, 34, false]];
      P.forEach(([cx, A, v, knuff], i) => {
        const pt = (deg, r = L) => [cx + r * Math.sin(deg * GR), yP + r * Math.cos(deg * GR)], [sx, sy] = pt(v);
        let g = `<line class="fig-ljud-ram" x1="${cx - 30}" y1="${yP}" x2="${cx + 30}" y2="${yP}"/><circle class="fig-ljud-led" cx="${cx}" cy="${yP}" r="3"/>`;
        const [ax, ay] = pt(-A), [bx, by] = pt(A);
        g += `<path class="fig-ljud-utslag" d="M${f(ax)} ${f(ay)} A${L} ${L} 0 0 0 ${f(bx)} ${f(by)}"/>`;
        if (v !== -A) { const [gx, gy] = pt(-A); g += `<line class="fig-ljud-rep fig-ljud-spok" x1="${cx}" y1="${yP}" x2="${f(gx)}" y2="${f(gy)}"/>`; }
        if (v !== A) { const [gx, gy] = pt(A); g += `<line class="fig-ljud-rep fig-ljud-spok" x1="${cx}" y1="${yP}" x2="${f(gx)}" y2="${f(gy)}"/>`; }
        g += `<line class="fig-ljud-rep" x1="${cx}" y1="${yP}" x2="${f(sx)}" y2="${f(sy)}"/>`;
        g += `<g class="fig-ljud-sits" data-x="${f(sx)}" data-y="${f(sy)}" transform="rotate(${f(-v)} ${f(sx)} ${f(sy)})"><rect x="${f(sx - 10)}" y="${f(sy)}" width="20" height="5" rx="2"/><circle cx="${f(sx)}" cy="${f(sy - 9)}" r="6"/></g>`;
        if (knuff) {
          // tangenten framåt (mot ökande vinkel): (cos v, −sin v) i skärmens koordinater
          const tx = Math.cos(v * GR), ty = -Math.sin(v * GR);
          g += `<g class="fig-ljud-knuff" data-dx="${f(tx)}" data-dy="${f(ty)}">${riktPil(sx - 40 * tx, sy - 40 * ty + 2, sx - 13 * tx, sy - 13 * ty + 2)}</g>`;
        }
        if (i === 1) g += `<g class="fig-energi-rorelse">${rorelsePil(cx - 3, yP + L + 14, cx - 22, yP + L + 13)}${rorelsePil(cx + 3, yP + L + 14, cx + 22, yP + L + 13)}</g>`;
        s += `<g class="fig-ljud-gunga" data-bild="${i + 1}" data-utslag="${A}" data-vinkel="${v}" data-knuff="${knuff ? 1 : 0}">${g}</g>`;
      });
      const yR = 166;
      s += borjaHar(56, yR - 20) + steg(1, 56, yR, ['liten knuff', 'framåt'], 0) + steg(2, 162, yR, ['svänger fram', 'och tillbaka'], 0) + steg(3, 268, yR, ['ny knuff i', 'samma takt'], 0) + steg(4, 376, yR, ['mycket större', 'svängningar'], 0);
      H = yR + 34 + LRAD + 12; nSteg = 4;
      beskr = 'En gunga i fyra bilder, där bågen visar hur långt den svänger. 1: gungan har just vänt längst bak, och den får en liten knuff framåt, i rörelsens riktning (pilen). 2: gungan svänger fram och tillbaka. ' +
        '3: nästa gång den vänder längst bak får den en ny knuff i samma takt. 4: svängningarna har blivit mycket större – bågarna växer för varje bild.';
    } else if (lage === 'stamgafflar') {
      // II B2: två likadana stämgafflar på var sin låda, två rader. Överst: den vänstra slås an och svänger, ljudvågorna går
      // åt höger. Underst: den vänstra hålls tyst, den högra svänger fast ingen har rört den.
      const gaffel = (x, yT, svang, sida) => {
        let g = `<rect class="fig-ljud-lada" x="${x - 34}" y="${yT + 56}" width="68" height="22" rx="2"/><rect class="fig-ljud-ladhal" x="${x - 14}" y="${yT + 63}" width="28" height="8" rx="4"/>`;
        g += `<path class="fig-ljud-gaffel" d="M${x - 7} ${yT} L${x - 7} ${yT + 38} Q${x - 7} ${yT + 46} ${x} ${yT + 46} Q${x + 7} ${yT + 46} ${x + 7} ${yT + 38} L${x + 7} ${yT} M${x} ${yT + 46} L${x} ${yT + 56}"/>`;
        if (svang) [-1, 1].forEach(d => { [6, 12].forEach(r => { g += `<path class="fig-ljud-svang" d="M${f(x + d * (7 + r * 0.5))} ${yT + 4} Q${f(x + d * (7 + r))} ${yT + 20} ${f(x + d * (7 + r * 0.5))} ${yT + 36}"/>`; }); });
        return `<g class="fig-ljud-stamgaffel" data-sida="${sida}" data-svanger="${svang ? 1 : 0}" data-bredd="14" data-hojd="46" data-lada="68">${g}</g>`; };
      const fronter = (x0, n, d, yc) => { let g = ''; for (let k = 0; k < n; k++) { const x = x0 + d * k * 22; g += `<path class="fig-ljud-front" d="M${f(x)} ${yc - 18} Q${f(x + d * 8)} ${yc} ${f(x)} ${yc + 18}"/>`; } return g; };
      const xV = 70, xH = 252, T0 = 44, T1 = 186;
      s += gaffel(xV, T0, true, 'vanster') + gaffel(xH, T0, false, 'hoger');
      s += `<g class="fig-ljud-klubba"><line x1="${xV + 44}" y1="${T0 - 14}" x2="${xV + 14}" y2="${T0 + 8}"/><rect x="${xV + 6}" y="${T0 + 2}" width="14" height="10" rx="3" transform="rotate(-36 ${xV + 13} ${T0 + 7})"/></g>`;
      s += `<g class="fig-ljud-vagor" data-rad="1">${fronter(xV + 44, 6, 1, T0 + 22)}${riktPil(xV + 60, T0 + 52, xH - 50, T0 + 52, '', 'data-vagen="hoger"')}</g>`;
      s += borjaHar(8, 20, 'fig-vanster') + steg(1, 112, 15, ['den vänstra slås an']) + steg(2, xH + 54, T0 + 24, ['ljudvågorna', 'når den högra']);
      s += `<line class="fig-ljud-skilje" x1="8" y1="${T1 - 38}" x2="432" y2="${T1 - 38}"/>`;
      s += gaffel(xV, T1, false, 'vanster') + gaffel(xH, T1, true, 'hoger');
      s += `<rect class="fig-ljud-hand" data-del="handen" x="${xV - 13}" y="${T1 + 6}" width="26" height="24" rx="9"/>`;
      s += `<g class="fig-ljud-vagor" data-rad="2">${fronter(xH - 40, 3, -1, T1 + 22)}</g>`;
      s += steg(3, xV + 52, T1 - 18, ['den vänstra hålls tyst']) + steg(4, xH + 82, T1 + 6, ['den högra', 'svänger', 'och låter']);
      H = T1 + 78 + 12; nSteg = 4;
      beskr = 'Två likadana stämgafflar på var sin låda, i två rader. 1: den vänstra slås an med en klubba och svänger. 2: ljudvågorna går genom luften och når den högra. ' +
        '3: den vänstra hålls tyst med handen. 4: den högra svänger och låter, fast ingen har rört den.';
    } else if (lage === 'stamgaffel-bord') {
      // II B3: stämgaffeln i luften (svaga ljudvågor, liten amplitud) och med foten mot bordsskivan, som svänger med i
      // samma takt och ger kraftigare ljudvågor från hela skivan (större amplitud, samma våglängd).
      const gaffel = (x, yT) => `<path class="fig-ljud-gaffel" d="M${x - 7} ${yT} L${x - 7} ${yT + 38} Q${x - 7} ${yT + 46} ${x} ${yT + 46} Q${x + 7} ${yT + 46} ${x + 7} ${yT + 38} L${x + 7} ${yT} M${x} ${yT + 46} L${x} ${yT + 62}"/>` +
        [-1, 1].map(d => `<path class="fig-ljud-svang" d="M${f(x + d * 10)} ${yT + 4} Q${f(x + d * 15)} ${yT + 20} ${f(x + d * 10)} ${yT + 36}"/>`).join('');
      const lam = 34;
      // vänster: i luften, handen håller i skaftet
      s += gaffel(70, 92) + `<rect class="fig-ljud-hand" data-del="handen" x="58" y="${92 + 56}" width="24" height="26" rx="9"/>`;
      s += `<g class="fig-ljud-ljud" data-ljud="svagt">${vagLinje(92, 196, 112, 5, lam, 92 + lam / 2)}</g>`;
      s += borjaHar(8, 20, 'fig-vanster') + steg(1, 20, 44, ['i luften:', 'svaga ljudvågor']);
      s += `<line class="fig-ljud-skilje" x1="212" y1="10" x2="212" y2="240"/>`;
      // höger: foten mot bordsskivan
      const yB = 174, xa = 226, xb = 434, xg = 262;
      s += `<rect class="fig-ljud-bord" data-del="bordsskiva" x="${xa}" y="${yB}" width="${xb - xa}" height="10"/><rect class="fig-ljud-bord" x="${xa + 8}" y="${yB + 10}" width="8" height="14"/><rect class="fig-ljud-bord" x="${xb - 16}" y="${yB + 10}" width="8" height="14"/>`;
      s += gaffel(xg, yB - 62);
      [0.3, 0.55, 0.8].forEach(t => { const x = xa + t * (xb - xa); s += `<path class="fig-ljud-svang" d="M${f(x - 22)} ${yB + 14} Q${f(x)} ${yB + 22} ${f(x + 22)} ${yB + 14}"/>`; });
      s += `<g class="fig-ljud-ljud" data-ljud="starkt">${vagLinje(xa + 4, xb - 4, 86, 16, lam, xa + 4 + lam / 2)}</g>`;
      s += steg(4, 230, 26, ['kraftigare ljudvågor', 'från hela skivan']);
      s += steg(2, 300, 128, ['foten mot', 'bordsskivan']);
      s += steg(3, 250, yB + 42, ['skivan svänger med', 'i samma takt']);
      H = yB + 42 + 6.5 + LRAD + 12; nSteg = 4;
      beskr = 'Till vänster: 1: stämgaffeln slås an och hålls i luften – svaga ljudvågor med liten amplitud. Till höger: 2: stämgaffelns fot sätts mot bordsskivan. 3: bordsskivan svänger med i samma takt. ' +
        '4: kraftigare ljudvågor sprids från hela bordsskivan – större amplitud men samma våglängd, så tonen är densamma.';
    } else if (lage === 'flaskor') {
      // II B4: tre likadana flaskor med olika mycket vatten; luften ovanför vattnet markerad (data-luft, data-vatten i
      // enheter av flaskans höjd). Mycket luft – låg ton, lite luft – hög ton.
      struktur = true;
      const yT = 34, yN = 64, yB = 196, w = 64, hk = yB - yN;
      [[80, 0.25, ['mycket luft –', 'låg ton']], [220, 0.5, ['mindre luft –', 'mellanton']], [360, 0.75, ['lite luft –', 'hög ton']]].forEach(([x, v, t], i) => {
        const yV = yB - v * hk, form = `M${x - 9} ${yT} L${x - 9} ${yN - 8} Q${x - w / 2} ${yN - 4} ${x - w / 2} ${yN + 14} L${x - w / 2} ${yB - 6} Q${x - w / 2} ${yB} ${x - w / 2 + 6} ${yB} L${x + w / 2 - 6} ${yB} Q${x + w / 2} ${yB} ${x + w / 2} ${yB - 6} L${x + w / 2} ${yN + 14} Q${x + w / 2} ${yN - 4} ${x + 9} ${yN - 8} L${x + 9} ${yT} Z`;
        // luften: hela flaskans insida, vattnet ovanpå den nedifrån (raka väggar där vattnet står)
        let g = `<path class="fig-ljud-luftpelare" data-del="luft" data-hojd="${f(yV - yT)}" d="${form}"/>`;
        g += `<rect class="fig-ljud-vatten" data-del="vatten" data-hojd="${f(yB - yV)}" x="${x - w / 2 + 1}" y="${f(yV)}" width="${w - 2}" height="${f(yB - yV - 1)}" rx="5"/><line class="fig-ljud-yta" x1="${x - w / 2 + 1}" y1="${f(yV)}" x2="${x + w / 2 - 1}" y2="${f(yV)}"/>`;
        g += `<path class="fig-ljud-flaska" d="${form}"/>`;
        g += LT(x, yV - 10, 'luft', 'fig-mitt fig-halo');
        s += `<g class="fig-ljud-flaskan" data-nr="${i + 1}" data-vatten="${v}" data-ton="${['lag', 'mellan', 'hog'][i]}">${g}</g>` + rader(x, yB + 28, t, 'fig-mitt');
      });
      H = yB + 28 + LRAD + 12;
      beskr = 'Tre likadana flaskor bredvid varandra med olika mycket vatten. Luften ovanför vattnet är markerad. När man blåser över flaskan svänger luften: mycket luft ger låg ton, mindre luft en mellanton och lite luft hög ton.';
    } else if (lage === 'vinglas') {
      // II B5: vinglaset i fyra bilder. Glasets kant ritad uppifrån som en ring som deformeras mer och mer (data-e: hur
      // mycket ringen är utdragen till en oval); den streckade cirkeln är kanten i vila. Ljudvågorna med egenfrekvensen
      // kommer från vänster; i bild 4 spricker glaset.
      const C = [55, 165, 275, 385], E = [0, 0.07, 0.15, 0.24], R = 24, yR = 48;
      C.forEach((cx, i) => {
        const e = E[i], pts = [];
        for (let k = 0; k <= 72; k++) { const v = k / 72 * 2 * Math.PI, r = R * (1 + e * Math.cos(2 * v)); pts.push(f(cx + r * Math.cos(v)) + ',' + f(yR + r * Math.sin(v))); }
        let g = `<circle class="fig-ljud-vila" cx="${cx}" cy="${yR}" r="${R}"/><polyline class="fig-ljud-kant" data-e="${e}" points="${pts.join(' ')}"/>`;
        g += `<path class="fig-ljud-glas2" d="M${cx - 20} 92 Q${cx - 22} 130 ${cx} 136 Q${cx + 22} 130 ${cx + 20} 92 Z M${cx} 136 L${cx} 160 M${cx - 14} 162 L${cx + 14} 162"/>`;
        g += `<line class="fig-ljud-hjalp" x1="${cx}" y1="${yR + R + 4}" x2="${cx}" y2="88"/>`;
        [0, 1].forEach(k => { const x = cx - 46 + k * 10; g += `<path class="fig-ljud-front" d="M${x} 98 Q${x + 6} 112 ${x} 126"/>`; });
        if (i === 3) g += `<polyline class="fig-ljud-spricka" data-spricka="" points="${cx - 4},93 ${cx + 3},104 ${cx - 5},113 ${cx + 4},124 ${cx - 2},132"/><polyline class="fig-ljud-spricka" points="${cx + 3},104 ${cx + 13},110"/>`;
        s += `<g class="fig-ljud-glaset" data-bild="${i + 1}" data-e="${e}">${g}</g>`;
      });
      const yS = 204;
      s += borjaHar(55, yS - 20) + steg(1, 55, yS, ['tonen når', 'glaset'], 0);
      s += steg(2, 165, yS, ['kanten börjar', 'svänga'], 0) + steg(3, 275, yS, ['svängningen', 'växer'], 0) + steg(4, 385, yS, ['glaset', 'spricker'], 0);
      H = yS + 34 + LRAD + 12; nSteg = 4;
      beskr = 'Ett vinglas i fyra bilder. Överst syns glasets kant uppifrån som en ring, och den streckade cirkeln är kanten i vila. 1: en ton med glasets egenfrekvens når glaset. 2: kanten börjar svänga och blir lite oval. ' +
        '3: svängningen växer för varje våg, och ringen deformeras mer. 4: utslaget blir så stort att glaset spricker.';
    } else if (lage === 'eko-berg') {
      // II C1: eko mot en bergvägg. Ropet går åt höger till väggen, ekot (streckat) tillbaka till personen; avståndet
      // utmärkt (data-fran = personen, data-till = väggen), och att ljudet går fram och tillbaka.
      const yG = 200, xP = 44, xV = 384;
      s += `<line class="fig-bord" x1="8" y1="${yG}" x2="${xV}" y2="${yG}"/>` + gubbe(xP, yG);
      s += `<path class="fig-ljud-berg" data-x="${xV}" d="M${xV} ${yG} L${xV} 150 L${xV - 4} 118 L${xV + 2} 84 L${xV - 3} 52 L${xV + 4} 24 L436 18 L436 ${yG} Z"/>`;
      s += riktPil(xP + 26, 78, xV - 4, 78, 'fig-ljud-signal', 'data-vag="fram"') + riktPil(xV - 6, 156, xP + 30, 156, 'fig-ljud-eko', 'data-vag="tillbaka"');
      [0, 1].forEach(k => { const x = 150 + k * 24; s += `<path class="fig-ljud-front" d="M${x} 60 Q${x + 8} 78 ${x} 96"/>`; });
      [0, 1].forEach(k => { const x = 324 - k * 24; s += `<path class="fig-ljud-front fig-ljud-ekofront" d="M${x} 138 Q${x - 8} 156 ${x} 174"/>`; });
      s += borjaHar(100, 22) + steg(1, 100, 46, ['ropet går mot berget']);
      s += steg(2, xV - 22, 106, ['studsar mot', 'bergväggen'], -1);
      s += steg(3, 90, 184, ['ekot färdas tillbaka']);
      s += steg(4, 22, 112, ['hör ekot']);
      const yM = yG + 18;
      s += `<g class="fig-ljud-matt" data-matt="avstand" data-fran="${xP}" data-till="${xV}"><line class="fig-krock-matt" x1="${xP}" y1="${yM}" x2="${xV}" y2="${yM}"/>` +
        `<line class="fig-krock-matt" x1="${xP}" y1="${yM - 5}" x2="${xP}" y2="${yM + 5}"/><line class="fig-krock-matt" x1="${xV}" y1="${yM - 5}" x2="${xV}" y2="${yM + 5}"/></g>`;
      s += LT((xP + xV) / 2, yM + 26, 'avståndet till berget', 'fig-mitt') + LT((xP + xV) / 2, yM + 52, 'ljudet färdas dubbla avståndet: fram och tillbaka', 'fig-mitt');
      H = yM + 52 + 12; nSteg = 4;
      beskr = 'Eko mot en bergvägg. 1: en person ropar, och ljudvågen går mot berget. 2: ljudvågen träffar bergväggen och reflekteras. 3: ekot färdas tillbaka. 4: personen hör ekot. ' +
        'Avståndet till berget är utmärkt under bilden: ljudet färdas dubbla avståndet, fram och tillbaka.';
    } else if (lage === 'ekolod-botten') {
      // II C2: ekolodet mäter djupet till botten; pulsen ned och ekot upp (som VI A7, men mot botten)
      const yY = 64, yF = 222, xs = 100, xe = 124;
      s += `<rect class="fig-ljud-vatten" x="0" y="${yY}" width="${B}" height="${yF - yY}"/><line class="fig-ljud-yta" x1="0" y1="${yY}" x2="${B}" y2="${yY}"/>`;
      s += `<path class="fig-ljud-botten" data-y="${yF}" d="M0 ${yF} Q60 ${yF - 4} 120 ${yF} T240 ${yF} T360 ${yF} T440 ${yF} L440 ${yF + 22} L0 ${yF + 22} Z"/>`;
      s += `<path class="fig-ljud-bat" d="M50 ${yY - 18} L176 ${yY - 18} L160 ${yY + 4} L66 ${yY + 4} Z"/><rect class="fig-ljud-hytt" x="84" y="${yY - 36}" width="44" height="18"/>`;
      s += `<g class="fig-ljud-klocka"><circle cx="150" cy="${yY - 32}" r="9"/><line x1="150" y1="${yY - 32}" x2="150" y2="${yY - 38}"/><line x1="150" y1="${yY - 32}" x2="155" y2="${yY - 30}"/><rect x="147" y="${yY - 45}" width="6" height="3"/></g>`;
      s += riktPil(xs, yY + 8, xs, yF - 4, 'fig-ljud-signal', 'data-vag="ned"') + riktPil(xe, yF - 4, xe, yY + 8, 'fig-ljud-eko', 'data-vag="upp"');
      [0.3, 0.55].forEach(t => { const y = yY + 8 + t * (yF - 12 - yY); s += `<path class="fig-ljud-front" d="M${xs - 9} ${f(y)} Q${xs} ${f(y + 6)} ${xs + 9} ${f(y)}"/>`; });
      s += borjaHar(214, 22, 'fig-vanster') + steg(1, 200, 48, ['ljudpulsen skickas ned,', 'klockan startar']);
      s += steg(4, 200, 104, ['ekolodet tar emot ekot,', 'klockan stoppar']);
      s += steg(3, 200, 160, ['ekot studsar tillbaka']);
      s += steg(2, 200, yF - 22, ['pulsen når botten']);
      s += steg(5, 20, yF + 52, ['sträckan ned och upp delas med 2']);
      H = yF + 52 + 16; nSteg = 5;
      beskr = 'En båt med ett ekolod. 1: ekolodet skickar en ljudpuls nedåt, och klockan startar. 2: pulsen når botten. 3: ekot studsar tillbaka uppåt. 4: ekolodet tar emot ekot, och klockan stoppar. ' +
        '5: ljudet har gått både ned och upp, så sträckan delas med 2 för att få djupet.';
    } else if (lage === 'doppler-centrum') {
      // II C3: överst står ambulansen still – cirklarna har samma centrum. Underst kör den åt höger: varje cirkel har sitt
      // centrum där ambulansen var när den förtätningen sändes ut (data-cx = ambulansens läge då, data-alder), så att
      // cirklarna ligger tätare framför och glesare bakom.
      struktur = true;
      const c = 11, u = 5.5, n = 4;
      const panel = (xn, yc, yG, v, titel, ty) => {
        let g = fet(8, ty, titel);
        for (let a = 1; a <= n; a++) { const cx = xn - v * a; g += `<circle class="fig-ljud-front" data-alder="${a}" data-cx="${f(cx)}" cx="${f(cx)}" cy="${yc}" r="${c * a}"/>`; }
        g += ambulans(xn, yc).replace('<g class="fig-ljud-ambulans"', `<g class="fig-ljud-ambulans" transform="translate(${xn} ${yc}) scale(.55) translate(${-xn} ${-yc})"`);
        if (v) g += `<g class="fig-energi-rorelse" data-rorelse="bilen">${rorelsePil(xn + 36, yc - 30, xn + 72, yc - 30)}</g>`;
        g += `<line class="fig-bord" x1="8" y1="${yG}" x2="432" y2="${yG}"/>` + gubbe(30, yG, 30) + gubbe(410, yG, 30);
        return g; };
      s += `<g class="fig-ljud-dopplerpanel" data-v="0" data-x="220">${panel(220, 50, 88, 0, 'står still', 22)}</g>`;
      s += `<line class="fig-ljud-skilje" x1="8" y1="100" x2="432" y2="100"/>`;
      s += `<g class="fig-ljud-dopplerpanel" data-v="${u}" data-x="250">${panel(250, 150, 188, u, 'kör åt höger', 124)}</g>`;
      s += `<g class="fig-ljud-etikett" data-sida="bakom">${LT(46, 168, 'mörkare ton', 'fig-vanster')}</g><g class="fig-ljud-etikett" data-sida="framfor">${LT(394, 168, 'ljusare ton', 'fig-hoger')}</g>`;
      H = 200;
      beskr = 'Dopplereffekten i två bilder. Överst står ambulansen still: ljudvågorna sprids som cirklar med samma centrum och samma avstånd åt alla håll, och personerna på båda sidorna hör samma ton. ' +
        'Underst kör ambulansen åt höger. Varje cirkel har sitt centrum där ambulansen var när den förtätningen sändes ut, så cirklarna ligger tätare framför och glesare bakom. Personen framför hör en ljusare ton, personen bakom en mörkare.';
    } else if (lage === 'ljudbang') {
      // II C4: planet och ljudvågorna i fyra rutor. Varje cirkel sändes ut när planet var i cirkelns centrum (data-cx);
      // data-v är planets fart i ljudets fart. 1: v < 1, vågorna sprids före planet; 2: v = 1, de packas ihop vid nosen;
      // 3: v > 1, de hamnar bakom och bildar en kon (förenklad modell); 4: konen sveper över marken.
      const k = 10, n = 3;
      const ruta = (x0, y0, v, nr, txt) => {
        const xn = x0 + 200, yc = y0 + 92;
        let g = stegNr(nr, x0 + 14, y0 + 16) + txt.map((t, i) => `<text x="${x0 + 32}" y="${f(y0 + 22.5 + i * LRAD)}" class="fig-text fig-kast-text fig-vanster fig-steg-text fig-halo" data-steg-text="${nr}">${esc(t)}</text>`).join('');
        for (let a = 1; a <= n; a++) { const cx = xn - v * k * a; g += `<circle class="fig-ljud-front" data-alder="${a}" data-cx="${f(cx)}" cx="${f(cx)}" cy="${yc}" r="${k * a}"/>`; }
        if (v > 1) { const al = Math.asin(1 / v), Lk = 3 * v * k + 8; [-1, 1].forEach(sg => { g += `<line class="fig-ljud-kon" data-kon="${sg}" x1="${f(xn)}" y1="${yc}" x2="${f(xn - Lk * Math.cos(al))}" y2="${f(yc + sg * Lk * Math.sin(al))}"/>`; }); }
        g += flygplan(xn, yc);
        return `<g class="fig-ljud-bangruta" data-nr="${nr}" data-v="${v}" data-xn="${f(xn)}" data-yc="${yc}">${g}</g>`; };
      s += borjaHar(8, 21, 'fig-vanster');
      s += ruta(0, 26, 0.6, 1, ['långsammare än ljudet:', 'vågorna sprids', 'före planet']);
      s += ruta(220, 26, 1, 2, ['lika fort som ljudet:', 'vågorna packas ihop']);
      s += `<line class="fig-ljud-skilje" x1="214" y1="26" x2="214" y2="282"/><line class="fig-ljud-skilje" x1="8" y1="150" x2="432" y2="150"/>`;
      s += ruta(0, 154, 1.6, 3, ['fortare än ljudet: en', 'kon (förenklad modell)']);
      // ruta 4: konen sveper över marken – personen där konens undre linje når marken hör smällen
      const x4 = 220, y4 = 154, xn4 = x4 + 204, yc4 = y4 + 80, yG4 = y4 + 126, al = Math.asin(1 / 1.6), dx = (yG4 - yc4) / Math.tan(al);
      let g4 = stegNr(4, x4 + 14, y4 + 16) + ['konen sveper över', 'marken: en smäll'].map((t, i) => `<text x="${x4 + 32}" y="${f(y4 + 22.5 + i * LRAD)}" class="fig-text fig-kast-text fig-vanster fig-steg-text fig-halo" data-steg-text="4">${esc(t)}</text>`).join('');
      g4 += `<line class="fig-bord" x1="${x4 + 10}" y1="${yG4}" x2="432" y2="${yG4}"/>`;
      const Lo = (yc4 - y4 - 62) / Math.sin(al);
      g4 += `<line class="fig-ljud-kon" data-kon="1" x1="${xn4}" y1="${yc4}" x2="${f(xn4 - dx)}" y2="${yG4}"/><line class="fig-ljud-kon" data-kon="-1" x1="${xn4}" y1="${yc4}" x2="${f(xn4 - Lo * Math.cos(al))}" y2="${f(yc4 - Lo * Math.sin(al))}"/>`;
      g4 += flygplan(xn4, yc4) + gubbe(xn4 - dx, yG4, 30);
      s += `<g class="fig-ljud-bangruta" data-nr="4" data-v="1.6" data-xn="${xn4}" data-yc="${yc4}" data-mark="${yG4}" data-traff="${f(xn4 - dx)}">${g4}</g>`;
      H = 286; nSteg = 4;
      beskr = 'Ett flygplan och ljudvågorna i fyra rutor; varje cirkel sändes ut där planet var då. 1: planet flyger långsammare än ljudet – vågorna sprids före planet. 2: planet flyger lika fort som ljudet – vågorna packas ihop framför nosen. ' +
        '3: planet flyger fortare än ljudet – vågorna hamnar bakom och bildar en kon (en förenklad modell). 4: konen sveper över marken, och en person där hör en smäll.';
    } else if (lage === 'decibel') {
      // II D1: decibelskalan som lodräta staplar (data-db), alla i samma neutrala färg – inga riskfärger. Femton
      // vardagsljud med namn i 19 enheter ryms inte i stigande ordning på bredden (varje namn behöver 27 enheter på höjden),
      // så staplarna stiger mot 140 dB i mitten: de jämna värdena till vänster med namnet till vänster, de udda till höger
      // med namnet till höger. Den lodräta axeln (dB) till vänster.
      struktur = true;
      const k = 1.4, yB = 236, s_ = 11, bw = 9, x8 = 266;
      const V = [[0, 'hörtröskel'], [20, 'viskning'], [40, 'lugn villagata'], [60, 'vanligt samtal'], [80, 'tät trafik, skolmatsal'], [100, 'motorsåg'], [120, 'smärtgräns'], [140, 'gevärsskott'],
        [130, 'jetplan på nära håll'], [110, 'rockkonsert'], [90, 'gräsklippare'], [70, 'dammsugare'], [50, 'regn'], [30, 'tyst sovrum'], [10, 'andning']];
      const x0 = x8 - 8 * s_;
      for (let d = 0; d <= 140; d += 20) { const y = yB - d * k;
        s += `<line class="fig-ljud-rutlinje" x1="42" y1="${f(y)}" x2="436" y2="${f(y)}"/><line class="fig-ljud-tick" data-db="${d}" x1="38" y1="${f(y)}" x2="44" y2="${f(y)}"/>` + LT(34, y + 6, String(d), 'fig-hoger'); }
      s += `<line class="fig-ljud-axel-linje" x1="42" y1="${yB}" x2="42" y2="${f(yB - 140 * k - 8)}"/>` + LT(50, f(yB - 140 * k + 4), 'dB', 'fig-vanster fig-ljud-axeltext');
      V.forEach(([d, n], i) => { const x = x0 + i * s_, h = d * k, y = yB - h, vanster = i < 8;
        s += `<rect class="fig-ljud-db" data-db="${d}" data-namn="${n}" x="${f(x)}" y="${f(y)}" width="${bw}" height="${f(Math.max(h, 0.01))}"/>`;
        s += LT(vanster ? x - 4 : x + bw + 4, y + 6, n, (vanster ? 'fig-hoger' : 'fig-vanster') + ' fig-halo'); });
      s += `<line class="fig-bord" x1="42" y1="${yB}" x2="436" y2="${yB}"/>`;
      s += LT(232, yB + 34, 'nivåerna är ungefärliga och beror på avståndet', 'fig-mitt fig-ljus-skuggtext');
      H = yB + 46;
      beskr = 'Decibelskalan som lodräta staplar i samma neutrala färg, från 0 till 140 dB. Från vänster stiger staplarna i steg om 20 dB: 0 dB hörtröskel, 20 viskning, 40 lugn villagata, 60 vanligt samtal, 80 tät trafik och skolmatsal, ' +
        '100 motorsåg, 120 smärtgräns och 140 dB gevärsskott i mitten. Till höger sjunker de: 130 jetplan på nära håll, 110 rockkonsert, 90 gräsklippare, 70 dammsugare, 50 regn, 30 tyst sovrum och 10 dB andning. ' +
        'Nivåerna är ungefärliga och beror på avståndet.';
    } else if (lage === 'exponering') {
      // II D2: samma ljudexponering vid olika ljudnivåer – liggande staplar, var och en hälften så lång som den ovanför
      // (data-db, data-min = tiden i minuter)
      struktur = true;
      const xa = 76, W8 = 280, R = [[85, 480, '8 timmar'], [88, 240, '4 timmar'], [91, 120, '2 timmar'], [94, 60, '1 timme'], [97, 30, '30 minuter'], [100, 15, '15 minuter']];
      s += LT(220, 26, 'Samma ljudexponering vid olika ljudnivåer', 'fig-mitt fig-energi-ord');
      R.forEach(([db, min, t], i) => { const y = 64 + i * 30, w = min / 480 * W8;
        s += LT(xa - 10, y + 6, db + ' dB', 'fig-hoger') + `<rect class="fig-ljud-exponering" data-db="${db}" data-min="${min}" x="${xa}" y="${y - 9}" width="${f(w)}" height="18" rx="2"/>` + LT(xa + w + 8, y + 6, t, 'fig-vanster'); });
      H = 64 + 5 * 30 + 26;
      beskr = 'Samma ljudexponering vid olika ljudnivåer, som liggande staplar: 85 dB i 8 timmar, 88 dB i 4 timmar, 91 dB i 2 timmar, 94 dB i 1 timme, 97 dB i 30 minuter och 100 dB i 15 minuter. ' +
        'För varje 3 dB högre nivå är tiden hälften så lång, och varje stapel är hälften så lång som den ovanför.';
    } else if (lage === 'bullerbekampning') {
      // II D3: bullerbekämpningens tre steg som tre rutor från vänster till höger: källa, väg, mottagare; ljudets väg
      // som en pil under rutorna
      struktur = true;
      const R = [[8, 'källa', 'kalla'], [153, 'väg', 'vag'], [298, 'mottagare', 'mottagare']], w = 136, yT = 12, yB = 208;
      R.forEach(([x, t, id]) => { s += `<g class="fig-ljud-steg3" data-del="${id}" data-x="${x}"><rect class="fig-ljud-ruta" x="${x}" y="${yT}" width="${w}" height="${yB - yT}" rx="8"/>${fet(x + w / 2, yT + 26, t, 'fig-mitt')}</g>`; });
      // källa: bilen
      const xb = 76, yb = 96;
      s += `<g class="fig-ljud-bil2"><path class="fig-ljud-bil" d="M${xb - 44} ${yb} L${xb - 40} ${yb - 14} L${xb - 22} ${yb - 16} L${xb - 12} ${yb - 30} L${xb + 18} ${yb - 30} L${xb + 30} ${yb - 16} L${xb + 44} ${yb - 12} L${xb + 44} ${yb} Z"/>` +
        `<circle class="fig-ljud-hjul" cx="${xb - 24}" cy="${yb + 2}" r="8"/><circle class="fig-ljud-hjul" cx="${xb + 24}" cy="${yb + 2}" r="8"/></g>`;
      s += rader(xb, yb + 40, ['tystare däck,', 'lägre fart'], 'fig-mitt');
      // väg: vägen, bullerplanket och huset bakom
      const xv = 153;
      s += `<rect class="fig-ljud-vagbana" x="${xv + 8}" y="${yb - 2}" width="44" height="10"/><rect class="fig-ljud-plank" data-del="bullerplank" x="${xv + 62}" y="${yb - 46}" width="12" height="54"/>`;
      s += `<path class="fig-ljud-hus" d="M${xv + 90} ${yb + 8} L${xv + 90} ${yb - 18} L${xv + 108} ${yb - 34} L${xv + 126} ${yb - 18} L${xv + 126} ${yb + 8} Z"/>`;
      s += rader(xv + w / 2, yb + 40, ['bullerplank', 'mellan väg', 'och hus'], 'fig-mitt');
      // mottagare: huset med sovrummet på baksidan (bort från vägen, till höger) och en person med hörselkåpor
      const xm = 298;
      s += `<path class="fig-ljud-hus" d="M${xm + 14} ${yb + 8} L${xm + 14} ${yb - 24} L${xm + 46} ${yb - 50} L${xm + 78} ${yb - 24} L${xm + 78} ${yb + 8} Z"/>` +
        `<rect class="fig-ljud-sovrum" data-del="sovrum" x="${xm + 48}" y="${yb - 20}" width="26" height="24"/><line class="fig-ljud-sang" x1="${xm + 52}" y1="${yb}" x2="${xm + 70}" y2="${yb}"/>`;
      const xp = xm + 108, yp = yb - 26;
      s += `<g class="fig-ljud-horselkapor"><circle class="fig-hopp-huvud" cx="${xp}" cy="${yp}" r="10"/><path class="fig-ljud-bygel" d="M${xp - 12} ${yp} Q${xp} ${yp - 22} ${xp + 12} ${yp}"/>` +
        `<rect class="fig-ljud-kapa" x="${xp - 16}" y="${yp - 7}" width="7" height="14" rx="3"/><rect class="fig-ljud-kapa" x="${xp + 9}" y="${yp - 7}" width="7" height="14" rx="3"/><path class="fig-hopp-kropp" d="M${xp} ${yp + 10} L${xp} ${yp + 34}"/></g>`;
      s += rader(xm + w / 2, yb + 40, ['sovrummet på', 'baksidan,', 'hörselkåpor'], 'fig-mitt');
      s += riktPil(20, yB + 20, 424, yB + 20, 'fig-ljud-ljudvag', 'data-vagen="hoger"') + LT(220, yB + 46, 'ljudets väg', 'fig-mitt');
      H = yB + 58;
      beskr = 'Bullerbekämpningens tre steg som tre rutor med ljudets väg från vänster till höger. Källa: en bil – tystare däck och lägre fart. Väg: ett bullerplank mellan vägen och huset. ' +
        'Mottagare: ett hus med sovrummet på baksidan, bort från vägen, och en person med hörselkåpor.';
    } else if (lage === 'avstandslagen') {
      // II D4: ljudkällan i mitten och två klot (cirklar) med radien r och 2r. Strålarna från källan genom den lilla
      // rutans hörn på det inre klotet går till en dubbelt så bred ruta på det yttre – fyra lika stora rutor.
      struktur = true;
      const cx = 118, cy = 148, r1 = 52, r2 = 104, a = 22;
      s += LT(8, 24, 'fri ljudutbredning, utan reflexer', 'fig-vanster fig-energi-ord');
      s += `<circle class="fig-ljud-klot" data-r="${r1}" cx="${cx}" cy="${cy}" r="${r1}"/><circle class="fig-ljud-klot" data-r="${r2}" cx="${cx}" cy="${cy}" r="${r2}"/>`;
      [-1, 1].forEach(sg => { s += `<line class="fig-ljud-stralgang" x1="${cx}" y1="${cy}" x2="${cx + r2}" y2="${cy + sg * a}"/>`; });
      s += `<rect class="fig-ljud-yta-liten" data-sida="${a}" x="${cx + r1 - a / 4}" y="${cy - a / 2}" width="${a / 2}" height="${a}"/>`;
      s += `<g class="fig-ljud-yta-stor" data-sida="${2 * a}" data-rutor="4"><rect x="${cx + r2 - a / 2}" y="${cy - a}" width="${a}" height="${2 * a}"/>` +
        `<line x1="${cx + r2 - a / 2}" y1="${cy}" x2="${cx + r2 + a / 2}" y2="${cy}"/><line x1="${cx + r2}" y1="${cy - a}" x2="${cx + r2}" y2="${cy + a}"/></g>`;
      s += `<circle class="fig-ljud-kalla" cx="${cx}" cy="${cy}" r="6"/>`;
      s += `<line class="fig-ljud-radie" x1="${cx}" y1="${cy}" x2="${f(cx - r1 * 0.6)}" y2="${f(cy - r1 * 0.8)}"/>` + LT(cx - r1 * 0.3 - 10, cy - r1 * 0.4 - 4, 'r', 'fig-hoger fig-halo');
      s += `<line class="fig-ljud-radie" x1="${cx}" y1="${cy}" x2="${f(cx - r2 * 0.6)}" y2="${f(cy + r2 * 0.8)}"/>` + LT(cx - r2 * 0.45 - 8, cy + r2 * 0.6 + 4, '2r', 'fig-hoger fig-halo');
      s += rader(250, 104, ['dubbla avståndet –', 'fyra gånger större yta –', 'en fjärdedel av', 'intensiteten –', 'cirka 6 dB lägre'], 'fig-vanster');
      H = cy + r2 + 14;
      beskr = 'En ljudkälla i mitten och två klot runt den, ett på avståndet r och ett på avståndet 2r, med fri ljudutbredning utan reflexer. Samma ljud som går genom en liten ruta på det inre klotet sprids ut över fyra lika stora rutor på det yttre. ' +
        'Dubbla avståndet ger fyra gånger större yta, en fjärdedel av intensiteten och cirka 6 dB lägre ljudnivå.';
    } else if (lage === 'audiogram') {
      // II D5: audiogram – frekvensen 125–8 000 Hz på den vågräta axeln (oktaver, lika avstånd), hörtröskeln i dB HL på den
      // lodräta med 0 överst och större värden nedåt. Tre kurvor (data-hz, data-db i punkterna).
      struktur = true;
      const hz = [125, 250, 500, 1000, 2000, 4000, 8000], xa = 74, dx = 54, X = i => xa + i * dx, yo = 76, ky = 2, Y = db => yo + db * ky;
      s += LT(xa + 3 * dx, 26, 'frekvens (Hz)', 'fig-mitt fig-ljud-axeltext');
      hz.forEach((h, i) => { s += `<line class="fig-ljud-rutlinje" x1="${X(i)}" y1="${yo}" x2="${X(i)}" y2="${f(Y(80))}"/>` + LT(X(i), yo - 22, String(h).replace(/(\d)(\d{3})$/, '$1 $2'), 'fig-mitt'); });
      [0, 20, 40, 60, 80].forEach(d => { s += `<line class="fig-ljud-rutlinje" x1="${xa}" y1="${f(Y(d))}" x2="${X(6)}" y2="${f(Y(d))}"/><line class="fig-ljud-tick" data-db="${d}" x1="${xa - 5}" y1="${f(Y(d))}" x2="${xa}" y2="${f(Y(d))}"/>` + LT(xa - 9, Y(d) + 6, String(d), 'fig-hoger'); });
      s += `<g class="fig-ljud-axel" data-axel="dB HL" data-noll-overst=""><line x1="${xa}" y1="${yo}" x2="${xa}" y2="${f(Y(80) + 8)}"/><polygon points="${xa},${f(Y(80) + 16)} ${xa - 5},${f(Y(80) + 5)} ${xa + 5},${f(Y(80) + 5)}"/></g>`;
      s += LT(8, f(Y(80) + 38), 'hörtröskel (dB HL)', 'fig-vanster fig-ljud-axeltext');
      const K = [['normal', 'normal hörsel', [5, 5, 0, 5, 5, 10, 10]], ['buller', 'bullerskada', [10, 10, 10, 15, 30, 55, 30]], ['alder', 'åldersnedsättning', [10, 10, 15, 20, 35, 50, 65]]];
      K.forEach(([id, n, d]) => { s += `<g class="fig-ljud-kurva" data-kurva="${id}"><polyline points="${d.map((v, i) => X(i) + ',' + f(Y(v))).join(' ')}"/>` +
        d.map((v, i) => `<circle data-hz="${hz[i]}" data-db="${v}" cx="${X(i)}" cy="${f(Y(v))}" r="3.6"/>`).join('') + '</g>'; });
      s += LT(X(5) + 27, Y(10) + 24, 'normal hörsel', 'fig-mitt fig-halo fig-ljud-kurvnamn') + LT(X(5) - 10, Y(55) + 16, 'bullerskada', 'fig-hoger fig-halo fig-ljud-kurvnamn') + LT(X(6), Y(65) + 26, 'åldersnedsättning', 'fig-hoger fig-halo fig-ljud-kurvnamn');
      H = Y(80) + 48;
      beskr = 'Ett audiogram med frekvensen från 125 till 8 000 Hz på den vågräta axeln och hörtröskeln i dB HL på den lodräta, med 0 dB HL överst och större värden nedåt – längre ned betyder sämre hörsel. ' +
        'Tre kurvor: normal hörsel ligger nära 0 dB HL hela vägen. Bullerskadan har en dipp vid 4 000 Hz och är bättre igen vid 8 000 Hz. Åldersnedsättningen blir gradvis sämre mot de höga frekvenserna.';
    } else fel('ljud: okänt läge ”' + lage + '”');
    return { svg: ljudSvg(B, H, s, 'ljud', lage, nSteg, struktur), beskrivning: d.beskrivning || beskr };
  });

  let ljusNr = 0;                                    // unika id:n för färgövergångarna (B13)
  Bok.figur('ljus', d => {
    const lage = d.lage || fel('ljus behöver lage: foremal, reflektion, spegelbild, speglar, brytning, penna, totalreflektion, linser, ogat, synfel, prisma, farg, spektrum eller jamforelse'), B = 440, nV = 1.33;
    let s = '', H, beskr, nSteg = 0, struktur = false;
    const spegel = (x1, y1, x2, y2, bak) => { const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, bx = bak[0], by = bak[1]; let h = '';
      for (let t = 6; t < L; t += 12) h += `<line class="fig-skraffer" x1="${f(x1 + ux * t)}" y1="${f(y1 + uy * t)}" x2="${f(x1 + ux * (t - 6) + bx * 10)}" y2="${f(y1 + uy * (t - 6) + by * 10)}"/>`;
      return h + `<line class="fig-ljus-spegel" x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`; };
    if (lage === 'foremal') {
      // B1: tre föremål i samma ljus – svart (absorberar), spegel (reflekterar), glas (släpper igenom); skugga bakom det svarta
      const yG = 144, dx = 0.55, dy = 0.835, pw = B / 3;
      const golv = (x1, x2) => `<line class="fig-bord" x1="${f(x1)}" y1="${yG}" x2="${f(x2)}" y2="${yG}"/>`;
      // 1: svart låda, strålen tar slut på den; den strålen som snuddar hörnet visar skuggan
      { const cx = pw / 2 + 12, bx0 = cx - 18, bx1 = cx + 18, by = yG - 46;
        const yH = by + 16, sx = bx0 - (yH - 14) * dx / dy;
        s += `<g class="fig-ljus-panel" data-panel="absorberar">${golv(6, pw - 6)}`;
        s += `<polygon class="fig-ljus-skugga" points="${f(bx1)},${f(by)} ${f(bx1 + (yG - by) * dx / dy)},${yG} ${f(bx1)},${yG}"/>`;
        s += strale(sx, 14, bx0, yH, 'data-roll="in"') + strale(bx1 - (by - 14) * dx / dy, 14, bx1 + (yG - by) * dx / dy, yG, 'data-roll="snudd"', 'fig-ljus-svag');
        s += `<rect class="fig-ljus-svart" data-foremal="" x="${bx0}" y="${by}" width="36" height="46"/>`;
        s += `<path class="fig-ljus-varme" d="M${f(bx0 + 10)} ${f(by - 4)} q-5 -4 0 -9 t0 -9"/><path class="fig-ljus-varme" d="M${f(bx0 + 22)} ${f(by - 4)} q-5 -4 0 -9 t0 -9"/>`;
        s += LT(bx0 - 6, yG - 8, 'värme', 'fig-hoger fig-ljus-varme-text') + LT(cx + 30, yG - 6, 'skugga', 'fig-vanster fig-ljus-skuggtext');
        s += LT(cx, yG + 28, 'absorberar', 'fig-mitt fig-energi-ord') + '</g>'; }
      // 2: spegel på golvet, strålen studsar med samma vinkel
      { const cx = pw * 1.5, L = Math.min((yG - 14) / dy, (pw / 2 - 10) / dx);
        s += `<g class="fig-ljus-panel" data-panel="reflekterar">${golv(pw + 6, 2 * pw - 6)}${spegel(cx - 40, yG - 1, cx + 40, yG - 1, [0, 1])}`;
        s += strale(cx - L * dx, yG - 1 - L * dy, cx, yG - 1, 'data-roll="in"') + strale(cx, yG - 1, cx + L * dx, yG - 1 - L * dy, 'data-roll="ut"');
        s += LT(cx, yG + 28, 'reflekterar', 'fig-mitt fig-energi-ord') + '</g>'; }
      // 3: en glasruta, strålen fortsätter rakt
      { const cx = pw * 2.5, gx = cx - 5, gy = yG - 80, yI = gy + 26, x0 = gx - (yI - 14) * dx / dy, yU = yG - 8;
        s += `<g class="fig-ljus-panel" data-panel="genom">${golv(2 * pw + 6, B - 6)}`;
        s += strale(x0, 14, gx, yI, 'data-roll="in"', '', false) + strale(gx, yI, gx + (yU - yI) * dx / dy, yU, 'data-roll="ut"');
        s += `<rect class="fig-ljus-glas" x="${gx - 4}" y="${gy}" width="10" height="80"/>`;
        s += LT(cx, yG + 28, 'släpper igenom', 'fig-mitt fig-energi-ord') + '</g>'; }
      H = yG + 36;
      beskr = 'Tre föremål i samma ljus. Ett svart föremål tar upp ljuset, som blir värme, och bakom det blir det en skugga med föremålets form. En spegel reflekterar ljuset med samma vinkel. En glasruta släpper igenom ljuset, som fortsätter rakt fram.';
    } else if (lage === 'reflektion') {
      // B2: en stråle mot en plan spegel; normalen streckad; infallsvinkeln = reflektionsvinkeln, mätta mot normalen
      const v = 40, P = [220, 206], L = 182, a = v * GR, Q = [P[0] - L * Math.sin(a), P[1] - L * Math.cos(a)], R = [P[0] + L * Math.sin(a), P[1] - L * Math.cos(a)];
      s += spegel(50, P[1], 390, P[1], [0, 1]) + LT(392, P[1] + 34, 'spegel', 'fig-hoger');
      s += normalLinje(P[0], P[1], P[0], 42, 'data-yta="0"') + LT(P[0], 32, 'normal', 'fig-mitt fig-normal-text');
      s += strale(...Q, ...P, 'data-roll="in"') + strale(...P, ...R, 'data-roll="ut"');
      const up = -Math.PI / 2;
      s += vinkelBage(...P, 58, up, up - a, `data-vinkel="in" data-grader="${v}"`) + vinkelBage(...P, 58, up, up + a, `data-vinkel="ut" data-grader="${v}"`);
      s += vinkelText(...P, 80, up, up - a, tal(v) + '°') + vinkelText(...P, 80, up, up + a, tal(v) + '°');
      s += LT(P[0] - 22, P[1] - 8, 'infallsvinkel', 'fig-hoger fig-halo') + LT(P[0] + 22, P[1] - 8, 'reflektionsvinkel', 'fig-vanster fig-halo');
      H = P[1] + 44;
      beskr = `En ljusstråle mot en plan spegel. Normalen står vinkelrätt mot spegeln där strålen träffar och är streckad. Infallsvinkeln, mellan den inkommande strålen och normalen, är ${tal(v)}°, och reflektionsvinkeln, mellan den reflekterade strålen och normalen, är också ${tal(v)}°.`;
    } else if (lage === 'spegelbild') {
      // B3: lampan lyser på blomman; ljuset från blomman reflekteras i spegeln till ögat; ögat följer strålarna bakåt –
      // spegelbilden står lika långt bakom spegeln som blomman står framför
      const xM = 240, xB = 150, xV = 2 * xM - xB, yH = 140, yF = 222, E = [58, 204];
      const blomma = (x, k) => `<g class="fig-ljus-blomma ${k}" data-x="${x}"><path class="fig-ljus-stjalk" d="M${x} ${yF} L${x} ${yH + 10}"/>` +
        [0, 72, 144, 216, 288].map(g => `<circle class="fig-ljus-kronblad" cx="${f(x + 9 * Math.cos(g * GR))}" cy="${f(yH + 9 * Math.sin(g * GR))}" r="7"/>`).join('') + `<circle class="fig-ljus-mitt" cx="${x}" cy="${yH}" r="5"/></g>`;
      s += spegel(xM, 58, xM, 240, [1, 0]) + blomma(xB, '') + blomma(xV, 'fig-ljus-bild');
      s += `<g class="fig-ljus-lampa"><circle cx="44" cy="92" r="11"/><rect x="38" y="103" width="12" height="8"/></g>` + strale(55, 98, xB - 12, yH - 6, 'data-roll="lampa"');
      const P = y => { const t = (xM - E[0]) / (xV - E[0]); return E[1] + (y - E[1]) * t; };
      [[yH, 'topp'], [yF, 'fot']].forEach(([y, n]) => { const py = P(y);
        s += strale(xB, y, xM, py, `data-roll="till-spegeln" data-punkt="${n}"`) + strale(xM, py, E[0] + 12, E[1] + (py - E[1]) * 12 / (xM - E[0]), `data-roll="till-ogat" data-punkt="${n}"`);
        s += skenbar(xM, py, xV, y, `data-punkt="${n}"`); });
      s += ogaFig(E[0], E[1]);
      s += normalLinje(xM - 42, P(yH), xM, P(yH), 'data-yta="90"');
      // lika långt framför som bakom
      const ym = 254;
      [[xB, xM], [xM, xV]].forEach(([a, b], i) => { s += `<g class="fig-ljus-matt" data-matt="${i ? 'bakom' : 'framfor'}"><line class="fig-krock-matt" x1="${a + 2}" y1="${ym}" x2="${b - 2}" y2="${ym}"/>` +
        `<line class="fig-krock-matt" x1="${a + 2}" y1="${ym - 5}" x2="${a + 2}" y2="${ym + 5}"/><line class="fig-krock-matt" x1="${b - 2}" y1="${ym - 5}" x2="${b - 2}" y2="${ym + 5}"/></g>` + LT((a + b) / 2, ym + 24, 'lika långt', 'fig-mitt'); });
      s += borjaHar(80, 30, 'fig-hoger') + steg(1, 98, 24, ['lampan lyser på blomman']);
      s += steg(2, 262, 92, ['reflekteras i', 'spegeln']);
      s += steg(3, 40, 234, ['strålarna når ögat']);
      s += steg(4, 262, 172, ['ögat följer', 'strålarna bakåt']);
      H = ym + 34; nSteg = 4;
      beskr = 'En blomma framför en spegel. 1: en lampa lyser på blomman. 2: ljuset från blomman reflekteras i spegeln med lika stora vinklar. 3: strålarna når ögat. ' +
        '4: ögat följer strålarna bakåt i raka linjer (streckade), och spegelbilden ser ut att stå lika långt bakom spegeln som blomman står framför.';
    } else if (lage === 'speglar') {
      // B4: konkav spegel samlar parallella strålar i brännpunkten; konvex sprider dem
      struktur = true;
      const yc = 118, fv = 80, hh = [-46, -22, 22, 46];
      // konkav: x = xv − (y − yc)² / (4f), brännpunkten (xv − f, yc)
      { const xv = 196, F = [xv - fv, yc], xs = y => xv - (y - yc) * (y - yc) / (4 * fv);
        const p = []; for (let y = yc - 66; y <= yc + 66; y += 3) p.push(f(xs(y)) + ',' + f(y));
        let h = ''; for (let y = yc - 60; y <= yc + 60; y += 12) h += `<line class="fig-skraffer" x1="${f(xs(y))}" y1="${f(y)}" x2="${f(xs(y) + 10)}" y2="${f(y - 6)}"/>`;
        s += `<g class="fig-ljus-spegeltyp" data-typ="konkav" data-f="${F.join(',')}">${h}<polyline class="fig-ljus-spegel" points="${p.join(' ')}"/>`;
        hh.forEach(dh => { const y = yc + dh, x = xs(y), ux = F[0] - x, uy = F[1] - y, L = Math.hypot(ux, uy);
          s += strale(12, y, x, y, 'data-roll="in"') + strale(x, y, x + ux / L * (L + 34), y + uy / L * (L + 34), 'data-roll="ut"'); });
        s += `<circle class="fig-ljus-brannpunkt" cx="${F[0]}" cy="${F[1]}" r="4"/>` + ledare(F[0], F[1] + 6, F[0], yc + 80) + LT(F[0], yc + 100, 'brännpunkt', 'fig-mitt fig-halo');
        s += LT(110, 24, 'konkav spegel', 'fig-mitt fig-energi-ord') + '</g>'; }
      // konvex: x = xv + (y − yc)² / (4f); de reflekterade strålarna ser ut att komma från (xv + f, yc)
      { const xv = 330, Fv = [xv + fv, yc], xs = y => xv + (y - yc) * (y - yc) / (4 * fv);
        const p = []; for (let y = yc - 66; y <= yc + 66; y += 3) p.push(f(xs(y)) + ',' + f(y));
        let h = ''; for (let y = yc - 60; y <= yc + 60; y += 12) h += `<line class="fig-skraffer" x1="${f(xs(y))}" y1="${f(y)}" x2="${f(xs(y) + 10)}" y2="${f(y - 6)}"/>`;
        s += `<g class="fig-ljus-spegeltyp" data-typ="konvex" data-f="${Fv.join(',')}">${h}<polyline class="fig-ljus-spegel" points="${p.join(' ')}"/>`;
        hh.forEach(dh => { const y = yc + dh, x = xs(y), ux = x - Fv[0], uy = y - Fv[1], L = Math.hypot(ux, uy);
          s += strale(236, y, x, y, 'data-roll="in"') + strale(x, y, x + ux / L * 62, y + uy / L * 62, 'data-roll="ut"'); });
        s += LT(330, 24, 'konvex spegel', 'fig-mitt fig-energi-ord') + '</g>'; }
      H = yc + 110;
      beskr = 'Två böjda speglar. Till vänster en konkav spegel, som buktar inåt: parallella strålar reflekteras så att de samlas i en punkt, brännpunkten. Till höger en konvex spegel, som buktar utåt: parallella strålar sprids ut.';
    } else if (lage === 'brytning') {
      // B5: en bred stråle med vågfronter går snett ned i vatten; den sida som når vattnet först saktar in, fronterna
      // hamnar tätare och strålen viker av mot normalen. Varje del av strålen följs: i luft med farten 1, i vatten 1/n.
      const yY = 150, C = [250, yY], v1 = 50, v2 = snell(v1, 1, nV), a1 = v1 * GR, a2 = v2 * GR, w = 22, L0 = 168, lam = 22;
      const d1 = [Math.sin(a1), Math.cos(a1)], d2 = [Math.sin(a2), Math.cos(a2)], bx = w / Math.cos(a1);
      const E = u => [C[0] + u * bx, yY], Lu = u => L0 + u * bx * Math.sin(a1), S = u => [E(u)[0] - Lu(u) * d1[0], yY - Lu(u) * d1[1]];
      const pkt = (u, t) => t <= Lu(u) ? [S(u)[0] + t * d1[0], S(u)[1] + t * d1[1]] : [E(u)[0] + (t - Lu(u)) / nV * d2[0], yY + (t - Lu(u)) / nV * d2[1]];
      const tMax = L0 + bx * Math.sin(a1) + 150 * nV;
      s += `<rect class="fig-ljus-vatten" x="0" y="${yY}" width="${B}" height="160"/><line class="fig-ljus-yta" x1="0" y1="${yY}" x2="${B}" y2="${yY}"/>`;
      const kant = u => { const p = [S(u), E(u), pkt(u, tMax)]; return p; };
      const k0 = kant(-1), k1 = kant(1);
      s += `<polygon class="fig-ljus-stralyta" points="${[...k0, ...k1.slice().reverse()].map(p => f(p[0]) + ',' + f(p[1])).join(' ')}"/>`;
      [-1, 1].forEach(u => { const k = kant(u); s += `<polyline class="fig-ljus-kant" data-kant="${u}" points="${k.map(p => f(p[0]) + ',' + f(p[1])).join(' ')}"/>`; });
      for (let t = 24; t < tMax - 6; t += lam) {
        const us = (t - L0) / (bx * Math.sin(a1)), p = [pkt(-1, t)];
        if (us > -1 && us < 1) p.push(pkt(us, t));
        p.push(pkt(1, t));
        s += `<polyline class="fig-ljus-front" data-t="${f(t)}" points="${p.map(q => f(q[0]) + ',' + f(q[1])).join(' ')}"/>`;
      }
      s += strale(...S(0), ...C, `data-roll="in"`, 'fig-ljus-mittstrale') + strale(...C, C[0] + 150 * d2[0], yY + 150 * d2[1], 'data-roll="bruten"', 'fig-ljus-mittstrale');
      s += normalLinje(C[0], yY - 82, C[0], yY + 128, 'data-yta="0"') + LT(C[0] + 6, yY - 72, 'normal', 'fig-vanster fig-normal-text');
      const up = -Math.PI / 2, ned = Math.PI / 2, mitt = (a, b) => [C[0] + 46 * Math.cos((a + b) / 2), C[1] + 46 * Math.sin((a + b) / 2)];
      s += vinkelBage(...C, 46, up, up - a1, `data-vinkel="in" data-grader="${v1}"`) + vinkelBage(...C, 46, ned, ned - a2, `data-vinkel="bruten" data-grader="${f(v2)}"`);
      // namnen på den fria sidan om normalen, med en tunn linje till bågen
      const mi = mitt(up, up - a1), mb = mitt(ned, ned - a2);
      s += ledare(C[0] + 6, yY - 50, mi[0] + 2, mi[1]) + LT(C[0] + 8, yY - 46, 'infallsvinkel ' + tal(v1) + '°', 'fig-vanster fig-halo');
      s += ledare(C[0] - 6, yY + 46, mb[0] - 2, mb[1]) + LT(C[0] - 8, yY + 52, 'brytningsvinkel ' + tal(Math.round(v2)) + '°', 'fig-hoger fig-halo');
      s += LT(B - 6, yY - 10, 'luft', 'fig-hoger') + LT(B - 6, yY + 26, 'vatten', 'fig-hoger');
      s += `<g data-n="${nV}" class="fig-ljus-data"></g>`;
      s += borjaHar(214, 24, 'fig-hoger') + steg(1, 232, 18, ['strålen kommer snett', 'mot vattenytan']);
      s += steg(2, 150, yY - 32, ['ena sidan når', 'vattnet först och', 'saktar in'], -1);
      s += steg(3, 196, yY + 88, ['strålen viker av', 'mot normalen'], -1);
      H = yY + 138; nSteg = 3;
      beskr = `En bred ljusstråle med vågfronter (tvärgående streck) går snett ned mot en vattenyta. 1: strålen kommer snett mot ytan. 2: den ena sidan av vågfronten når vattnet först och saktar in, så vågfronterna hamnar tätare. ` +
        `3: strålen viker av mot normalen. Infallsvinkeln är ${tal(v1)}° och brytningsvinkeln ${tal(Math.round(v2))}°, båda mätta mot den streckade normalen.`;
    } else if (lage === 'penna') {
      // B6: ljuset från pennans spets under vattnet bryts från normalen vid ytan; ögat följer strålen bakåt, så spetsen
      // ser ut att ligga högre och pennan ser bruten ut
      const yY = 140, T = [200, 252], E = [404, 46], top = [110, 30];
      // punkten P på ytan där sin(luft) = n · sin(vatten)
      const fel_ = x => { const a = Math.atan2(x - T[0], T[1] - yY), b = Math.atan2(E[0] - x, yY - E[1]); return Math.sin(b) - nV * Math.sin(a); };
      let lo = T[0], hi = E[0]; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (fel_(m) > 0) lo = m; else hi = m; }
      const P = [(lo + hi) / 2, yY], va = Math.atan2(P[0] - T[0], T[1] - yY) / GR, vl = Math.atan2(E[0] - P[0], yY - E[1]) / GR;
      // den skenbara spetsen: strålen från ögat bakåt genom P, där den når lodlinjen genom spetsen
      const k = (T[0] - P[0]) / (P[0] - E[0]), Sk = [T[0], P[1] + (P[1] - E[1]) * k];
      const ytaX = top[0] + (yY - top[1]) * (T[0] - top[0]) / (T[1] - top[1]);
      s += `<rect class="fig-ljus-glaset" x="96" y="70" width="230" height="204" rx="6"/><rect class="fig-ljus-vatten" x="98" y="${yY}" width="226" height="132"/><line class="fig-ljus-yta" x1="98" y1="${yY}" x2="324" y2="${yY}"/>`;
      s += `<line class="fig-ljus-penna" data-del="verklig" x1="${top[0]}" y1="${top[1]}" x2="${T[0]}" y2="${T[1]}"/><line class="fig-ljus-penna fig-ljus-bild" data-del="skenbar" x1="${f(ytaX)}" y1="${yY}" x2="${f(Sk[0])}" y2="${f(Sk[1])}"/>`;
      s += `<circle class="fig-ljus-spets-punkt" data-spets="verklig" cx="${T[0]}" cy="${T[1]}" r="3.5"/><circle class="fig-ljus-spets-punkt fig-ljus-bild" data-spets="skenbar" cx="${f(Sk[0])}" cy="${f(Sk[1])}" r="3.5"/>`;
      s += strale(...T, ...P, 'data-roll="i-vattnet"') + strale(...P, E[0] - 10, E[1] + 10 * (P[1] - E[1]) / (E[0] - P[0]), 'data-roll="i-luften"');
      s += skenbar(...P, ...Sk, 'data-roll="bakat"');
      s += normalLinje(P[0], yY - 70, P[0], yY + 70, 'data-yta="0"');
      s += vinkelBage(...P, 40, Math.PI / 2, Math.PI / 2 + va * GR, `data-vinkel="vatten" data-grader="${f(va)}"`) + vinkelBage(...P, 40, -Math.PI / 2, -Math.PI / 2 + vl * GR, `data-vinkel="luft" data-grader="${f(vl)}"`);
      s += `<g data-n="${nV}" class="fig-ljus-data"></g>` + ogaFig(E[0], E[1], -1);
      s += borjaHar(T[0] - 8, T[1] + 28, 'fig-hoger') + steg(1, T[0] + 20, T[1] + 4, ['ljuset från spetsen'], 1);
      s += steg(2, P[0] + 16, yY + 30, ['bryts från', 'normalen'], 1);
      s += steg(3, 300, 30, ['ögat följer', 'strålen bakåt'], -1);
      s += steg(4, 150, 172, ['spetsen ser ut', 'att ligga högre'], -1);
      H = 288; nSteg = 4;
      beskr = 'En penna står snett i ett glas vatten. 1: ljuset från pennans spets går upp mot vattenytan. 2: vid ytan bryts det bort från normalen. 3: ögat följer strålen bakåt i en rak linje (streckad). ' +
        '4: spetsen ser ut att ligga högre upp än den gör, och pennan ser bruten ut.';
    } else if (lage === 'totalreflektion') {
      // B7: tre strålar mot vattenytan underifrån, allt snettare: bryts ut, går längs ytan, reflekteras tillbaka
      const yY = 84, pw = B / 3, vk = Math.asin(1 / nV) / GR, V = [30, vk, 65];
      s += `<rect class="fig-ljus-vatten" x="0" y="${yY}" width="${B}" height="150"/><line class="fig-ljus-yta" x1="0" y1="${yY}" x2="${B}" y2="${yY}"/>`;
      V.forEach((v, i) => {
        const cx = pw * (i + 0.5), a = v * GR, Li = [100, 88, 72][i], Q = [cx - Li * Math.sin(a), yY + Li * Math.cos(a)];
        let g = normalLinje(cx, yY - 62, cx, yY + 92, 'data-yta="0"') + strale(...Q, cx, yY, 'data-roll="in"');
        if (i === 0) { const b = snell(v, nV, 1) * GR; g += strale(cx, yY, cx + 72 * Math.sin(b), yY - 72 * Math.cos(b), `data-roll="ut" data-grader="${f(b / GR)}"`); }
        else if (i === 1) g += strale(cx, yY, cx + 62, yY, 'data-roll="langs"');
        else g += strale(cx, yY, cx + Li * Math.sin(a), yY + Li * Math.cos(a), 'data-roll="reflekterad"');
        g += vinkelBage(cx, yY, 34, Math.PI / 2, Math.PI / 2 + a, `data-vinkel="in" data-grader="${f(v)}"`) + vinkelText(cx, yY, 52, Math.PI / 2, Math.PI / 2 + a, tal(Math.round(v)) + '°');
        g += steg(i + 1, cx, yY + 160, [['strålen bryts', 'längs ytan', 'reflekteras ned'][i]], 0);
        s += `<g class="fig-ljus-panel" data-panel="${i + 1}" data-grader="${f(v)}">${g}</g>`;
      });
      s += LT(6, yY - 10, 'luft', 'fig-vanster') + LT(6, yY + 24, 'vatten', 'fig-vanster') + LT(pw * 2.5, yY + 136, 'totalreflektion', 'fig-mitt fig-energi-ord fig-halo');
      s += borjaHar(pw * 0.5, yY + 140, 'fig-mitt') + `<g data-n="${nV}" class="fig-ljus-data"></g>`;
      H = yY + 160 + 34 + 8; nSteg = 3;
      beskr = `Tre strålar från vattnet mot ytan, allt snettare. 1: vid 30° går strålen ut i luften och bryts bort från normalen. 2: vid ungefär ${tal(Math.round(vk))}° går den längs ytan. ` +
        '3: vid 65° kommer inget ljus ut – allt reflekteras tillbaka ned i vattnet: totalreflektion. Vinklarna är mätta mot den streckade normalen.';
    } else if (lage === 'linser') {
      // B8: konvex lins samlar parallella strålar i brännpunkten (brännvidden utmärkt); konkav lins sprider dem, och de ser
      // ut att komma från en punkt framför linsen (streckat)
      struktur = true;
      const yc = 110, fv = 74, hh = [-40, -18, 18, 40];
      { const xL = 96, F = [xL + fv, yc];
        s += `<g class="fig-ljus-linstyp" data-typ="konvex" data-lins="${xL}" data-f="${F.join(',')}"><path class="fig-ljus-lins" d="M${xL} ${yc - 58} Q${xL + 18} ${yc} ${xL} ${yc + 58} Q${xL - 18} ${yc} ${xL} ${yc - 58} Z"/>`;
        s += `<line class="fig-ljus-axel" x1="8" y1="${yc}" x2="212" y2="${yc}"/>`;
        hh.forEach(dh => { const y = yc + dh, ux = F[0] - xL, uy = F[1] - y, L = Math.hypot(ux, uy); s += strale(10, y, xL, y, 'data-roll="in"') + strale(xL, y, xL + ux / L * (L + 30), y + uy / L * (L + 30), 'data-roll="ut"'); });
        s += `<circle class="fig-ljus-brannpunkt" cx="${F[0]}" cy="${yc}" r="4"/>` + LT(F[0] + 4, yc - 52, 'brännpunkt', 'fig-mitt fig-halo') + ledare(F[0], yc - 48, F[0], yc - 6);
        const ym = yc + 78;
        s += `<g class="fig-ljus-matt" data-matt="brannvidd"><line class="fig-krock-matt" x1="${xL}" y1="${ym}" x2="${F[0]}" y2="${ym}"/><line class="fig-krock-matt" x1="${xL}" y1="${ym - 5}" x2="${xL}" y2="${ym + 5}"/><line class="fig-krock-matt" x1="${F[0]}" y1="${ym - 5}" x2="${F[0]}" y2="${ym + 5}"/></g>`;
        s += LT((xL + F[0]) / 2, ym + 24, 'brännvidd', 'fig-mitt') + LT(110, 24, 'konvex lins', 'fig-mitt fig-energi-ord') + '</g>'; }
      { const xL = 322, Fv = [xL - fv, yc];
        s += `<g class="fig-ljus-linstyp" data-typ="konkav" data-lins="${xL}" data-f="${Fv.join(',')}"><path class="fig-ljus-lins" d="M${xL - 11} ${yc - 58} L${xL + 11} ${yc - 58} Q${xL + 2} ${yc} ${xL + 11} ${yc + 58} L${xL - 11} ${yc + 58} Q${xL - 2} ${yc} ${xL - 11} ${yc - 58} Z"/>`;
        s += `<line class="fig-ljus-axel" x1="228" y1="${yc}" x2="432" y2="${yc}"/>`;
        hh.forEach(dh => { const y = yc + dh, ux = xL - Fv[0], uy = y - Fv[1], L = Math.hypot(ux, uy), t = (432 - xL) / ux;
          s += strale(232, y, xL, y, 'data-roll="in"') + strale(xL, y, xL + ux * t, y + uy * t, 'data-roll="ut"') + skenbar(xL, y, ...Fv, 'data-roll="bakat"'); });
        s += `<circle class="fig-ljus-brannpunkt" cx="${Fv[0]}" cy="${yc}" r="4"/>` + LT(330, 24, 'konkav lins', 'fig-mitt fig-energi-ord') + '</g>'; }
      H = yc + 112;
      beskr = 'Två linser. Till vänster en konvex lins, tjockast på mitten: parallella strålar bryts så att de samlas i brännpunkten, och avståndet från linsen dit är brännvidden. ' +
        'Till höger en konkav lins, tunnast på mitten: strålarna sprids ut och ser ut att komma från en punkt framför linsen (streckat).';
    } else if (lage === 'ogat') {
      // B9: ljus från ett träd bryts i hornhinnan och linsen och samlas på näthinnan – bilden blir upp och ned
      const O = [196, 150], R = 74, xT = 30, yTopp = 104, yFot = 196, xC = O[0] - R + 2, xLi = O[0] - R + 30, xN = O[0] + R - 4;
      const bild = { topp: [xN, O[1] + 34], fot: [xN, O[1] - 30] };
      s += `<circle class="fig-ljus-ogat" cx="${O[0]}" cy="${O[1]}" r="${R}"/>`;
      s += `<path class="fig-ljus-nathinna" d="M${f(O[0] + R * Math.cos(-55 * GR))} ${f(O[1] + R * Math.sin(-55 * GR))} A${R} ${R} 0 0 1 ${f(O[0] + R * Math.cos(55 * GR))} ${f(O[1] + R * Math.sin(55 * GR))}"/>`;
      s += `<path class="fig-ljus-hornhinna" d="M${f(xC + 8)} ${O[1] - 40} Q${f(xC - 18)} ${O[1]} ${f(xC + 8)} ${O[1] + 40}"/>`;
      s += `<line class="fig-ljus-iris" x1="${xC + 16}" y1="${O[1] - 36}" x2="${xC + 16}" y2="${O[1] - 16}"/><line class="fig-ljus-iris" x1="${xC + 16}" y1="${O[1] + 16}" x2="${xC + 16}" y2="${O[1] + 36}"/>`;
      s += `<ellipse class="fig-ljus-ogonlins" cx="${xLi}" cy="${O[1]}" rx="10" ry="24"/>`;
      s += `<path class="fig-ljus-synnerv" d="M${O[0] + R - 2} ${O[1] - 9} L${B - 4} ${O[1] - 9} M${O[0] + R - 2} ${O[1] + 9} L${B - 4} ${O[1] + 9}"/>`;
      const trad = (x, yt, yf, k = '') => { const h = yf - yt, sg = Math.sign(h); return `<g class="fig-ljus-trad ${k}"><line class="fig-ljus-stam" x1="${x}" y1="${f(yf)}" x2="${x}" y2="${f(yt + h * 0.45)}"/>` +
        `<path class="fig-ljus-krona" d="M${x} ${f(yt)} L${f(x + Math.abs(h) * 0.28)} ${f(yt + h * 0.62)} L${f(x - Math.abs(h) * 0.28)} ${f(yt + h * 0.62)} Z"/></g>`; };
      s += trad(xT, yTopp, yFot) + `<g data-bild="${f(bild.topp[1])},${f(bild.fot[1])}">${trad(xN - 8, bild.topp[1], bild.fot[1], 'fig-ljus-liten')}</g>`;
      // två strålar från toppen och två från foten: in genom hornhinnan, genom linsen, till bildpunkten
      [['topp', yTopp, [O[1] - 26, O[1] - 2], [O[1] - 14, O[1] + 2]], ['fot', yFot, [O[1] + 2, O[1] + 26], [O[1] - 2, O[1] + 14]]].forEach(([n, y0, yc_, yl]) => {
        yc_.forEach((yy, j) => { const yL = yl[j], mal = bild[n];
          s += strale(xT, y0, xC, yy, `data-fran="${n}"`, '', j === 0) + strale(xC, yy, xLi, yL, `data-fran="${n}"`, '', false) + strale(xLi, yL, ...mal, `data-fran="${n}" data-till="${n}"`, '', j === 0); }); });
      s += borjaHar(98, 24.5, 'fig-hoger') + steg(1, 116, 18, ['ljuset bryts i hornhinnan', 'och går in genom pupillen']);
      s += ledare(xLi, O[1] + R + 22, xLi, O[1] + 26) + steg(2, xLi, O[1] + R + 36, ['linsen bryter ljuset mer'], 1);
      s += steg(3, 294, 70, ['bilden på', 'näthinnan blir', 'upp och ned']);
      s += steg(4, 294, 178, ['synnerven till', 'hjärnan: vi ser', 'rättvänt']);
      H = O[1] + R + 36 + 20; nSteg = 4;
      beskr = 'Ett öga i genomskärning och ett träd framför det. 1: ljuset från trädet bryts i hornhinnan och går in genom pupillen. 2: linsen bryter ljuset mer. 3: strålarna samlas på näthinnan, där bilden blir upp och ned. ' +
        '4: synnerven leder signalerna till hjärnan, och vi uppfattar omgivningen rättvänd.';
    } else if (lage === 'synfel') {
      // B10: närsynt (strålarna möts framför näthinnan) och översynt (bakom); med en konkav respektive konvex lins möts de
      // på näthinnan
      const R = 34, cell = (x0, y0, typ, glas) => {
        const O = [x0 + 136, y0], xC = O[0] - R + 2, xN = O[0] + R - 2, h = 15, xG = x0 + 56;
        const mot = typ === 'nar' ? (glas ? xN : xN - 22) : (glas ? xN : xN + 26);
        let g = `<circle class="fig-ljus-ogat" cx="${O[0]}" cy="${O[1]}" r="${R}"/><path class="fig-ljus-nathinna" d="M${f(O[0] + R * Math.cos(-50 * GR))} ${f(O[1] + R * Math.sin(-50 * GR))} A${R} ${R} 0 0 1 ${f(O[0] + R * Math.cos(50 * GR))} ${f(O[1] + R * Math.sin(50 * GR))}"/>`;
        g += `<ellipse class="fig-ljus-ogonlins" cx="${xC + 12}" cy="${O[1]}" rx="6" ry="15"/>`;
        [-h, h].forEach(dh => {
          let x = x0 + 6, y = O[1] + dh;
          if (glas) { const yg = y, dy = typ === 'nar' ? dh * 0.18 : -dh * 0.22; g += strale(x, y, xG, yg, 'data-roll="in"', '', false); x = xG; y = yg; const yC = yg + dy; g += strale(xG, yg, xC + 12, yC, 'data-roll="glas"'); x = xC + 12; y = yC; }
          else { g += strale(x, y, xC + 12, y, 'data-roll="in"'); x = xC + 12; }
          const ux = mot - x, uy = O[1] - y;
          if (mot <= xN + 0.5) { g += strale(x, y, mot, O[1], 'data-roll="i-ogat"', '', false); const t = (xN - mot) / ux; if (t > 0) g += strale(mot, O[1], mot + ux * t, O[1] + uy * t, 'data-roll="efter"', '', false); }
          else { const t = (xN - 2 - x) / ux; g += strale(x, y, x + ux * t, y + uy * t, 'data-roll="i-ogat"', '', false) + skenbar(x + ux * t, y + uy * t, mot, O[1], 'data-roll="bakom"'); }
        });
        if (glas) g += typ === 'nar' ? `<path class="fig-ljus-lins" d="M${xG - 7} ${y0 - 30} L${xG + 7} ${y0 - 30} Q${xG + 1} ${y0} ${xG + 7} ${y0 + 30} L${xG - 7} ${y0 + 30} Q${xG - 1} ${y0} ${xG - 7} ${y0 - 30} Z"/>`
          : `<path class="fig-ljus-lins" d="M${xG} ${y0 - 30} Q${xG + 12} ${y0} ${xG} ${y0 + 30} Q${xG - 12} ${y0} ${xG} ${y0 - 30} Z"/>`;
        g += `<circle class="fig-ljus-motpunkt" cx="${f(mot)}" cy="${O[1]}" r="3"/>`;
        return `<g class="fig-ljus-synfel" data-typ="${typ}" data-glas="${glas ? 1 : 0}" data-nathinna="${f(xN)}" data-mot="${f(mot)}">${g}</g>`; };
      s += fet(8, 22, 'närsynt') + cell(0, 66, 'nar', false) + cell(220, 66, 'nar', true);
      s += LT(136, 126, 'möts framför näthinnan', 'fig-mitt') + LT(356, 126, 'med konkav lins', 'fig-mitt');
      s += `<line class="fig-ljud-skilje" x1="8" y1="142" x2="432" y2="142"/>`;
      s += fet(8, 166, 'översynt') + cell(0, 214, 'over', false) + cell(220, 214, 'over', true);
      s += LT(136, 274, 'möts bakom näthinnan', 'fig-mitt') + LT(356, 274, 'med konvex lins', 'fig-mitt');
      H = 286;
      beskr = 'Två synfel. Närsynt: strålarna möts framför näthinnan, och med en konkav lins framför ögat möts de på näthinnan. Översynt: strålarna skulle mötas bakom näthinnan (streckat), och med en konvex lins möts de på näthinnan.';
    } else if (lage === 'prisma') {
      // B11: vitt ljus in i ett prisma, ett spektrum ut; rött bryts minst och violett mest (brytningsindexen förstorade, så
      // att skillnaden syns)
      const A = [216, 34], Bv = [140, 196], Cv = [292, 196], N = { rott: 1.48, orange: 1.505, gult: 1.53, gront: 1.555, blatt: 1.585, violett: 1.62 };
      const sub = (p, q) => [p[0] - q[0], p[1] - q[1]], nrm = v => { const L = Math.hypot(...v); return [v[0] / L, v[1] / L]; };
      const bryt = (d, n_, r) => { const c = -(d[0] * n_[0] + d[1] * n_[1]), k = 1 - r * r * (1 - c * c); return k < 0 ? null : nrm([r * d[0] + (r * c - Math.sqrt(k)) * n_[0], r * d[1] + (r * c - Math.sqrt(k)) * n_[1]]); };
      const skar = (p, d, a, b) => { const e = sub(b, a), den = d[0] * e[1] - d[1] * e[0], t = ((a[0] - p[0]) * e[1] - (a[1] - p[1]) * e[0]) / den; return [p[0] + t * d[0], p[1] + t * d[1]]; };
      const nV1 = nrm([A[1] - Bv[1], -(A[0] - Bv[0])]), nV2 = nrm([Cv[1] - A[1], -(Cv[0] - A[0])]);   // utåtriktade normaler
      const S0 = [14, 150], P1 = [A[0] + (Bv[0] - A[0]) * 0.58, A[1] + (Bv[1] - A[1]) * 0.58], d0 = nrm(sub(P1, S0));
      s += `<polygon class="fig-ljus-prisma" points="${A.join(',')} ${Bv.join(',')} ${Cv.join(',')}"/>`;
      s += `<line class="fig-ljus-vitt-kant" x1="${S0[0]}" y1="${S0[1]}" x2="${f(P1[0])}" y2="${f(P1[1])}"/><line class="fig-ljus-vitt" x1="${S0[0]}" y1="${S0[1]}" x2="${f(P1[0])}" y2="${f(P1[1])}"/>`;
      const slut = {};
      Object.entries(N).forEach(([farg, n]) => {
        const d1 = bryt(d0, [-nV1[0], -nV1[1]].map(x => -x), 1 / n) || d0, P2 = skar(P1, d1, A, Cv), d2 = bryt(d1, [-nV2[0], -nV2[1]], n) || d1;
        const t = (B - 8 - P2[0]) / d2[0], P3 = [P2[0] + d2[0] * t, P2[1] + d2[1] * t]; slut[farg] = P3; slut[farg].y = x => P2[1] + (x - P2[0]) * d2[1] / d2[0];
        s += `<line class="fig-ljus-farg fig-farg-${farg}" data-farg="${farg}" x1="${f(P1[0])}" y1="${f(P1[1])}" x2="${f(P2[0])}" y2="${f(P2[1])}"/>` +
          `<line class="fig-ljus-farg fig-farg-${farg}" data-farg="${farg}" data-ut="" data-avvikelse="${f(Math.atan2(d2[1], d2[0]) / GR - Math.atan2(d0[1], d0[0]) / GR)}" x1="${f(P2[0])}" y1="${f(P2[1])}" x2="${f(P3[0])}" y2="${f(P3[1])}"/>`;
      });
      s += LT(20, 138, 'vitt ljus', 'fig-vanster fig-halo');
      s += LT(B - 8, slut.rott.y(B - 8 - 150) - 9, 'rött bryts minst', 'fig-hoger fig-halo fig-farg-text-rott') + LT(B - 8, slut.violett[1] + 24, 'violett bryts mest', 'fig-hoger fig-halo fig-farg-text-violett');
      H = Math.ceil(Math.max(226, slut.violett[1] + 34));
      beskr = 'Vitt ljus går in i ett prisma och delas upp i ett spektrum: rött, orange, gult, grönt, blått och violett. Rött ljus bryts minst och violett mest.';
    } else if (lage === 'farg') {
      // B12: vitt ljus träffar ett rött äpple; det röda reflekteras till ögat, de andra färgerna absorberas och blir värme
      const Ap = [222, 168], r = 40, E = [408, 58];
      const traff = [Ap[0] - r * Math.cos(50 * GR), Ap[1] - r * Math.sin(50 * GR)];
      [['rott', -6], ['gront', 0], ['blatt', 6]].forEach(([farg, o]) => { const x1 = 54 + o, y1 = 70 - o, x2 = traff[0] + o * 0.6, y2 = traff[1] - o * 0.6;
        s += `<line class="fig-ljus-farg fig-farg-${farg}" data-farg="${farg}" data-roll="in" x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`; });
      s += stralSpets(54, 70, traff[0], traff[1], 'fig-farg-gront') + LT(104, 68, 'vitt ljus', 'fig-vanster fig-energi-ord');
      s += `<line class="fig-ljus-farg fig-farg-rott" data-farg="rott" data-roll="ut" x1="${f(traff[0])}" y1="${f(traff[1])}" x2="${E[0] - 14}" y2="${E[1] + 4}"/>` + stralSpets(traff[0], traff[1], E[0] - 14, E[1] + 4, 'fig-farg-rott');
      s += `<circle class="fig-ljus-apple" cx="${Ap[0]}" cy="${Ap[1]}" r="${r}"/><path class="fig-ljus-stjalk" d="M${Ap[0]} ${Ap[1] - r + 2} q2 -10 6 -14"/><path class="fig-ljus-blad" d="M${Ap[0] + 4} ${Ap[1] - r - 6} q14 -10 22 -2 q-12 8 -22 2 Z"/>`;
      s += ogaFig(E[0], E[1], -1);
      [[-30, 20], [-14, 34]].forEach(([dx, dy]) => { s += `<path class="fig-ljus-varme" d="M${Ap[0] + dx - 18} ${Ap[1] + dy} q-5 -4 0 -9 t0 -9"/>`; });
      s += borjaHar(92, 30, 'fig-hoger') + steg(1, 110, 24, ['vitt ljus träffar äpplet']);
      s += steg(2, 300, 128, ['det röda ljuset', 'reflekteras till', 'ögat']);
      s += steg(3, 64, Ap[1] + r + 22, ['de andra färgerna absorberas', 'och blir värme']);
      H = Ap[1] + r + 22 + LRAD + 16; nSteg = 3;
      beskr = 'Vitt ljus, med alla färger, träffar ett rött äpple. 1: det vita ljuset träffar äpplet. 2: det röda ljuset reflekteras till ögat. 3: de flesta andra färgerna absorberas och blir värme.';
    } else if (lage === 'spektrum') {
      // B13: hela spektrumet från lång till kort våglängd, med exempel; pilen "mer energi per foton" mot kort våglängd
      struktur = true;
      const id = 'fig-spektrum-' + (++ljusNr), x0 = 24, bw = 36, y0 = 40, rh = 30;
      const R = [['radiovågor', 'radio och mobil'], ['mikrovågor', 'mikrovågsugn'], ['infrarött ljus', 'element, fjärrkontroll'], ['synligt ljus', 'regnbågens färger'],
        ['ultraviolett ljus', 'solen'], ['röntgenstrålning', 'röntgenbild'], ['gammastrålning', '']];
      s += `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c62828"/><stop offset=".2" stop-color="#ef6c00"/><stop offset=".4" stop-color="#f2c12e"/>` +
        `<stop offset=".6" stop-color="#2e7d32"/><stop offset=".8" stop-color="#1565c0"/><stop offset="1" stop-color="#6a1b9a"/></linearGradient></defs>`;
      R.forEach(([n, ex], i) => { const y = y0 + i * rh;
        s += `<rect class="fig-ljus-band ${i === 3 ? '' : 'fig-ljus-band-osynligt'}" data-rad="${i}" x="${x0}" y="${y}" width="${bw}" height="${rh}" ${i === 3 ? `style="fill: url(#${id})"` : ''}/>`;
        s += `<text x="${x0 + bw + 14}" y="${y + rh / 2 + 7}" class="fig-text fig-kast-text fig-vanster" data-rad="${i}"><tspan class="fig-energi-ord">${esc(n)}</tspan>${ex ? esc(': ' + ex) : ''}</text>`; });
      // vågen i bandet: våglängden krymper nedåt
      const p = []; let fas = 0; for (let y = y0 + 2; y <= y0 + 7 * rh - 2; y += 0.5) { const lam = 70 * Math.pow(6 / 70, (y - y0) / (7 * rh)); fas += 0.5 / lam * 2 * Math.PI; p.push(f(x0 + bw / 2 + 11 * Math.sin(fas)) + ',' + f(y)); }
      s += `<polyline class="fig-ljus-bandvag" points="${p.join(' ')}"/>`;
      s += riktPil(10, y0 + 6, 10, y0 + 7 * rh - 2, 'fig-ljus-energipil');
      s += LT(x0 - 18, y0 - 14, 'lång våglängd', 'fig-vanster') + LT(x0 - 18, y0 + 7 * rh + 24, 'kort våglängd – mer energi per foton', 'fig-vanster');
      H = y0 + 7 * rh + 34;
      beskr = 'Hela spektrumet som ett band, från lång våglängd överst till kort våglängd underst: radiovågor (radio och mobil), mikrovågor (mikrovågsugn), infrarött ljus (element och fjärrkontroll), synligt ljus (regnbågens färger), ' +
        'ultraviolett ljus (solen), röntgenstrålning (röntgenbild) och gammastrålning. En pil längs bandet visar att varje foton har mer energi ju kortare våglängden är.';
    } else if (lage === 'jamforelse') {
      // B14: ljud och ljus jämförda i två kolumner, med punkter under varandra och inga pilar
      const pkt = (x, y) => `<circle class="fig-ljus-punkt" cx="${f(x)}" cy="${f(y - 6)}" r="3"/>`;
      s += LT(B / 2, 20, 'gemensamt', 'fig-mitt fig-energi-ord');
      // de gemensamma punkterna på två rader, över båda kolumnerna
      [[12, 46, 'vågor'], [96, 46, 'våglängd och frekvens'], [314, 46, 'absorberas'], [12, 72, 'reflekteras (eko – spegel)'], [262, 72, 'för med sig energi']].forEach(([x, y, t]) => { s += pkt(x, y) + LT(x + 10, y, t, 'fig-vanster fig-ljus-gemensamt'); });
      s += `<line class="fig-ljud-skilje" x1="8" y1="84" x2="${B - 8}" y2="84"/>`;
      const yK = 108;
      s += LT(110, yK, 'ljud', 'fig-mitt fig-energi-ord fig-ljus-kolumn') + LT(330, yK, 'ljus', 'fig-mitt fig-energi-ord fig-ljus-kolumn');
      s += `<line class="fig-ljud-skilje" x1="${B / 2}" y1="${yK - 18}" x2="${B / 2}" y2="LODRAT_SLUT"/>`;
      const P = [[['tryckvåg i ett ämne'], ['våg som inte behöver ämne']], [['går inte genom vakuum'], ['går genom vakuum']], [['ca 340 m/s i luft'], ['ca 300 000 km/s']],
        [['snabbast i fasta ämnen'], ['snabbast i vakuum']], [['frekvensen hörs som', 'tonhöjd'], ['våglängden ses som', 'färg']]];
      let y = yK + 26;
      P.forEach(([a, b], i) => { [[a, 12, 'ljud'], [b, 228, 'ljus']].forEach(([rr, x, k]) => { s += pkt(x, y) + rader(x + 10, y, rr, `fig-vanster fig-ljus-skillnad" data-kolumn="${k}" data-rad="${i}`); });
        y += Math.max(a.length, b.length) * LRAD + 2; });
      H = Math.ceil(y - LRAD + 12); s = s.replace('LODRAT_SLUT', f(H - 4));
      beskr = 'Ljud och ljus jämförda. Gemensamt: båda är vågor med våglängd och frekvens, båda kan reflekteras (eko och spegel) och absorberas, och båda för med sig energi. ' +
        'Skillnader: ljud är en tryckvåg i ett ämne och går inte genom vakuum, ljus är en våg som inte behöver något ämne och går genom vakuum. Ljud går ca 340 m/s i luft, ljus ca 300 000 km/s. ' +
        'Ljud går snabbast i fasta ämnen, ljus i vakuum. Ljudets frekvens hörs som tonhöjd, ljusets våglängd ses som färg.';
    } else fel('ljus: okänt läge ”' + lage + '”');
    return { svg: ljudSvg(B, H, s, 'ljus', lage, nSteg, struktur), beskrivning: d.beskrivning || beskr };
  });

})();
