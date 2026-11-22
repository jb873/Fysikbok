/* Avsnittssida I. Vad ljud är, text B: Ljudvågen – nivån fordjupning (📕).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-B-Ljudvagen-alla-nivaer-v3.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ib.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljudvågen i siffror' },
        { typ: 'text', text: 'I Standard lärde du dig vad våglängd och frekvens är. Här ser du hur de hänger ihop med varandra och med ljudets hastighet, och hur man räknar med dem. Med två enkla formler kan du räkna ut hur lång en ljudvåg är, och förstå varför fladdermöss måste använda ultraljud.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *svängningstid* är och hur den hänger ihop med frekvensen',
          'formeln v = f · λ och hur man använder den',
          'hur långa ljudvågorna är för de ljud vi hör',
          'varför en fladdermus behöver ultraljud för att hitta en mygga'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'svangningstid', titel: 'Svängningstiden',
      block: [
        { typ: 'rubrik', text: 'Svängningstiden är tiden för en hel svängning' },
        { typ: 'text', text: 'Den tid det tar för en ljudkälla att göra en hel svängning, fram och tillbaka, kallas *svängningstid|svängningstid*. Den betecknas T och mäts i sekunder. Om en sträng svänger 100 gånger på en sekund tar varje svängning en hundradels sekund. Svängningstiden är alltså 1 delat med frekvensen, och frekvensen är 1 delat med svängningstiden.' },
        { typ: 'formel', uttryck: 'f = 1 / T', forklaring: 'f frekvensen (Hz), T svängningstiden (s)' },
        { typ: 'exempel', rubrik: 'Gitarrsträngen', stycken: [
          ['En gitarrsträng svänger med svängningstiden 0,005 s. Vilken frekvens har tonen?'],
          ['Givet: T = 0,005 s. Sökt: frekvensen f.'],
          ['Lösning:',
           'f = 1 / T = 1 / 0,005 s = 200 Hz',
           'Svar: Tonen har frekvensen 200 Hz.']
        ] },
        { typ: 'exempel', rubrik: 'Stämgaffeln', stycken: [
          ['En stämgaffel ger tonen 440 Hz. Hur lång tid tar en svängning?'],
          ['Givet: f = 440 Hz. Sökt: svängningstiden T.'],
          ['Lösning:',
           'T = 1 / f = 1 / 440 Hz ≈ 0,0023 s',
           'Svar: En svängning tar ungefär 0,0023 s, alltså drygt två tusendels sekund.']
        ] }
      ]
    },
    {
      id: 'vaglangd-och-hastighet', titel: 'Våglängd och hastighet',
      block: [
        { typ: 'rubrik', text: 'Hastigheten är frekvensen gånger våglängden' },
        { typ: 'text', text: 'Under en svängningstid hinner ljudkällan skicka iväg exakt en våglängd. Under samma tid hinner förtätningen som skickades först röra sig en våglängd framåt. Om källan svänger f gånger per sekund skickar den alltså iväg f våglängder varje sekund, och den sträcka vågen hinner på en sekund, alltså hastigheten, blir frekvensen gånger våglängden. Våglängden betecknas med den grekiska bokstaven λ, lambda.' },
        { typ: 'formel', uttryck: 'v = f · λ', forklaring: 'v hastigheten (m/s), f frekvensen (Hz), λ våglängden (m)' },
        { typ: 'rubrik', text: 'Ljud vi hör är från 1,7 cm till 17 m långt' },
        { typ: 'text', text: 'Ljudets hastighet i luft är ungefär 340 m/s, vilket du läser mer om i nästa text. Med formeln kan vi då räkna ut våglängden för olika ljud genom att dela hastigheten med frekvensen.' },
        { typ: 'exempel', rubrik: 'Det mörkaste och det ljusaste ljudet', stycken: [
          ['Hur lång är våglängden för det mörkaste ljud vi hör, 20 Hz, och för det ljusaste, 20 000 Hz? Ljudets hastighet i luft är 340 m/s.'],
          ['Givet: v = 340 m/s, f = 20 Hz respektive 20 000 Hz. Sökt: våglängden λ.'],
          ['Lösning:',
           'λ = v / f = 340 m/s / 20 Hz = 17 m',
           'λ = v / f = 340 m/s / 20 000 Hz = 0,017 m',
           'Svar: Det mörkaste ljudet har våglängden 17 m, längre än ett klassrum. Det ljusaste har våglängden 1,7 cm.']
        ] },
        { typ: 'text', text: 'Basljudens långa vågor är en anledning till att man hör basen från en fest långt bort, medan diskanten försvinner. Långa vågor böjer sig lättare runt hus och andra hinder än korta, och de dämpas mindre av väggar.' }
      ]
    },
    {
      id: 'fladdermusens-ljud', titel: 'Fladdermusens ljud',
      block: [
        { typ: 'rubrik', text: 'Korta vågor behövs för att upptäcka små saker' },
        { typ: 'text', text: 'En ljudvåg studsar bara tydligt tillbaka från ett föremål som är ungefär lika stort som våglängden eller större. Ett föremål som är mycket mindre än våglängden får vågen att gå runt det nästan som om det inte fanns. Det är därför fladdermöss använder ultraljud. En mygga är bara några millimeter stor. En fladdermus som skickar ut ultraljud med frekvensen 50 000 Hz får en våglängd på' },
        { typ: 'text', text: 'λ = 340 m/s / 50 000 Hz ≈ 0,007 m, alltså ungefär 7 mm.' },
        { typ: 'text', text: 'Det är ungefär lika långt som myggan, och därför studsar ljudet tillbaka från den. Med ett ljud på 1 000 Hz, där våglängden är 34 cm, skulle myggan vara osynlig för fladdermusen. Samma princip används när läkare undersöker kroppen med ultraljud. Ju högre frekvens, desto mindre detaljer kan man se.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Svängningstiden T är tiden för en hel svängning. f = 1 / T.',
          'Hastigheten är frekvensen gånger våglängden: v = f · λ.',
          'I luft har ljud vi hör våglängder från ca 1,7 cm (20 000 Hz) till ca 17 m (20 Hz).',
          'Långa vågor böjer sig runt hinder. Därför hörs basen långt.',
          'För att upptäcka små föremål behövs korta våglängder. Därför använder fladdermöss ultraljud.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
