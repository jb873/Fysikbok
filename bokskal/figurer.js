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
 *   bildpilar           bild, bredd, hojd (fotots pixlar), utsnitt?: [x, y, b, h], maxhojd?: 0.2–0.45 (standard 0.45),
 *                       prickar?: [[x, y], …] (lägesmarkeringar), stråle?: {fran, till} (riktningen under prickarna),
 *                       pilar: [{namn, fran: [x, y], till: [x, y], etikett?: [x, y]}], lika?: [[0, 1]], beskrivning (krävs)
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
  Bok.figur('friktion', d => {
    const ytor = String(d.ytor || 'normal').replace('ä', 'a');
    const [amin, amax, vidd, hur] = YTOR[ytor] || fel(`friktion: okända ytor ”${d.ytor}” (normal, grov eller slat)`);
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
    s += `<polygon class="fig-yta-foremal" points="${Z.x},${Z.y} ${Z.x + Z.b},${Z.y} ${pts(undersida.slice().reverse())}"/>`;
    s += `<polygon class="fig-yta-underlag" points="${pts(yta)} ${Z.x + Z.b},${Z.y + Z.h} ${Z.x},${Z.y + Z.h}"/>`;
    s += `<polyline class="fig-ytlinje" points="${pts(undersida)}"/><polyline class="fig-ytlinje fig-ytlinje-underlag" points="${pts(yta)}"/>`;
    s += `<rect class="fig-lupp" x="${Z.x}" y="${Z.y}" width="${Z.b}" height="${Z.h}"/>`;
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
})();
