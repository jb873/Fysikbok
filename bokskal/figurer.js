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
     längd är proportionell mot storleken (den största kraften får den längsta pilen). */
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
    const B = 440, L = 104, bh = 24, cx = 220, KANT = 12;
    const storst = d.skala || Math.max(...krafter.map(k => k.storlek || 1));
    const visa = d.varden !== false;
    const varde = m => m != null && visa ? `${tal(m)} ${enhet}` : '';
    const pilar = krafter.map(k => ({ namn: k.namn, g: vinkel(k.riktning), m: k.storlek, klass: '' }));
    const beskr = pilar.map(p => `${p.namn}${varde(p.m) ? ' ' + varde(p.m) : ''} ${riktord(p.g)}`);
    if (d.resultant) {
      let rx = 0, ry = 0;
      krafter.forEach(k => { const v = vinkel(k.riktning) * Math.PI / 180, m = k.storlek || 0; rx += m * Math.cos(v); ry += m * Math.sin(v); });
      const m = Math.round(Math.hypot(rx, ry) * 100) / 100;
      if (m > 0) {
        const g = grader(Math.round(Math.atan2(ry, rx) * 180 / Math.PI));
        // Parallell med en av krafterna: resultanten ritas en bit vid sidan om, med etiketten på andra sidan.
        pilar.push({ namn: 'Resultant', g, m, klass: 'fig-resultant', bredvid: pilar.some(p => p.g === g) });
        beskr.push(`Resultanten${varde(m) ? ' ' + varde(m) : ''} ${riktord(g)}`);
      } else beskr.push('krafterna tar ut varandra');
    }
    // Lägen i förhållande till föremålets mitt
    for (const p of pilar) {
      const v = p.g * Math.PI / 180, l = Math.max(16, L * (p.m || storst) / storst);   // 16: pilspetsens egen längd
      p.lodrat = Math.abs(Math.sin(v)) >= Math.abs(Math.cos(v));
      // vågrät resultant över mitten, så att etiketten inte hamnar på underlaget
      p.x1 = p.bredvid ? (p.lodrat ? -18 : 0) : 0; p.y1 = p.bredvid && !p.lodrat ? -18 : 0;
      p.x2 = p.x1 + l * Math.cos(v); p.y2 = p.y1 - l * Math.sin(v);
    }
    // överst: föremålets namn (över föremålet) eller pilarna
    const namnHojd = d.foremal && d.foremal.namn ? 8 + 15 : 0;
    const overst = Math.min(-bh - namnHojd, ...pilar.map(p => p.y2 - 6)), nederst = Math.max(bh + (d.underlag ? 13 : 0), ...pilar.map(p => p.y2 + 6));
    const cy = KANT - overst, H = Math.ceil(nederst - overst + 2 * KANT);

    let s = '';
    if (d.underlag) s += `<line class="fig-bord" x1="70" y1="${cy + bh}" x2="370" y2="${cy + bh}"/>` +
      Array.from({ length: 15 }, (_, i) => `<line class="fig-skraffer" x1="${80 + i * 20}" y1="${cy + bh + 1}" x2="${70 + i * 20}" y2="${cy + bh + 12}"/>`).join('');
    s += form === 'boll' ? `<circle class="fig-foremal" cx="${cx}" cy="${cy}" r="${bh + 2}"/>`
      : `<rect class="fig-foremal" x="${cx - 32}" y="${cy - bh}" width="64" height="${2 * bh}" rx="2"/>`;
    if (d.foremal && d.foremal.namn) s += text(cx - 38, cy - bh - 8, d.foremal.namn, 'fig-text fig-hoger fig-dampad');
    for (const p of pilar) {
      const x1 = cx + p.x1, y1 = cy + p.y1, x2 = cx + p.x2, y2 = cy + p.y2;
      s += pil(x1, y1, x2, y2, 9, p.klass);
      if (p.lodrat) {
        // bredvid spetsen, namnet över värdet; resultanten till vänster om pilen
        const ty = y2 < y1 ? y2 + 10 : y2 - 20, tx = p.bredvid ? x2 - 10 : x2 + 10, ank = p.bredvid ? 'fig-hoger' : 'fig-vanster';
        s += text(tx, ty, p.namn, `fig-pil-text ${ank} ${p.klass}`) + (varde(p.m) ? text(tx, ty + 17, varde(p.m), `fig-text ${ank}`) : '');
      } else {
        // bortom spetsen, på en rad – men aldrig inne i föremålet, när pilen är kortare än det
        const hoger = x2 > x1, ut = Math.max(Math.abs(p.x2), form === 'boll' ? bh + 2 : 32);
        const tx = cx + (hoger ? ut + 8 : -ut - 8), ank = hoger ? 'fig-vanster' : 'fig-hoger';
        s += `<text x="${f(tx)}" y="${f(y2 + 5)}" class="fig-pil-text fig-halo ${ank} ${p.klass}">${esc(p.namn)}` +
          (varde(p.m) ? ` <tspan class="fig-varde">${esc(varde(p.m))}</tspan>` : '') + `</text>`;
      }
    }
    s += `<circle class="fig-angrepp" cx="${cx}" cy="${f(cy)}" r="3.5"/>`;
    const vad = (d.foremal && d.foremal.namn) || (form === 'boll' ? 'en boll' : 'en låda');
    return { svg: svg(B, H, s), beskrivning: `Kraftpilar på ${vad}: ${beskr.join(', ')}.` };
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
})();
