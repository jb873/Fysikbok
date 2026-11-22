/* Avsnittssida II. Ljud omkring oss, text A: Toner och klang – nivån fordjupning (📕).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-A-Toner-och-klang-alla-nivaer-v3.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iia.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Musikens matematik' },
        { typ: 'text', text: 'I Standard lärde du dig att tonhöjden bestäms av frekvensen och klangen av övertonerna. Här ser du att musiken bygger på enkla förhållanden mellan frekvenser. Två toner där den ena har dubbelt så hög frekvens låter nästan som samma ton, och en sträng som svänger ger automatiskt övertoner med 2, 3 och 4 gånger grundtonens frekvens.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad en *oktav* är',
          'varför en sträng ger övertoner, och vilka frekvenser de har',
          'hur stort tonomfång olika instrument och röster har'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'oktaver', titel: 'Oktaver',
      block: [
        { typ: 'rubrik', text: 'En oktav upp är dubbel frekvens' },
        { typ: 'text', text: 'Om du jämför två toner där den ena har exakt dubbelt så hög frekvens som den andra, låter de nästan som samma ton, bara ljusare. Avståndet mellan dem kallas en *oktav|oktav*. Normaltonen A har frekvensen 440 Hz. Ett A en oktav högre har 880 Hz, och ett A en oktav lägre har 220 Hz. När en man och en kvinna eller ett barn sjunger samma melodi sjunger de ofta en oktav ifrån varandra, och det låter ändå som samma melodi.' },
        { typ: 'text', text: 'Varje oktav delas i musiken in i tolv halvtonssteg, och därför har ett piano tolv tangenter, sju vita och fem svarta, för varje oktav. Ett piano har 88 tangenter, ungefär sju oktaver, från omkring 27 Hz till omkring 4 200 Hz.' },
        { typ: 'text', text: 'Människans hörområde, 20–20 000 Hz, är ungefär tio oktaver: 20, 40, 80, 160, 320, 640, 1 280, 2 560, 5 120, 10 240 och 20 480 Hz.' }
      ]
    },
    {
      id: 'overtonerna', titel: 'Övertonerna',
      block: [
        { typ: 'rubrik', text: 'En sträng svänger i flera delar samtidigt' },
        { typ: 'text', text: 'När du knäpper på en sträng svänger den inte bara som en enda båge. Samtidigt svänger den också i två halvor, i tre tredjedelar, i fyra fjärdedelar och så vidare. Strängens ändar sitter fast och kan inte röra sig, men mitt emellan kan strängen dela upp sig i delar som svänger åt motsatta håll.' },
        { typ: 'text', text: 'En halv sträng svänger dubbelt så fort som hela strängen, och en tredjedels sträng tre gånger så fort. Därför har övertonerna frekvenser som är 2, 3, 4 … gånger grundtonens frekvens. Om grundtonen är 110 Hz, som A-strängen på en gitarr, får övertonerna frekvenserna 220, 330, 440 och 550 Hz och så vidare. Den första övertonen ligger alltså exakt en oktav över grundtonen.' },
        // [BILD A5: en sträng spänd mellan två fästen, ritad tre gånger ovanför varandra. Överst svänger hela strängen som en båge: grundton, f. I mitten svänger den i två halvor åt motsatta håll med en stilla punkt i mitten: 2 f. Underst svänger den i tre delar med två stilla punkter: 3 f. De stilla punkterna markerade med en prick]
        { id: 'bild-a5', typ: 'figur', namn: 'ljud', lage: 'strang-delar', bildtext: 'Strängen svänger på en gång som en helhet, i två halvor och i tre delar: f, 2 f och 3 f.' },
        { typ: 'rubrik', text: 'Klangen är blandningen' },
        { typ: 'text', text: 'Hur starka de olika övertonerna blir beror på instrumentet: var strängen knäpps eller stryks, vad strängen är gjord av och hur instrumentets kropp svänger med. En flöjt ger svaga övertoner och låter nästan rent. En fiol och en trumpet ger starka övertoner och låter skarpare. Om du knäpper en gitarrsträng nära stallet blir övertonerna starkare och tonen vassare. Knäpper du mitt på strängen blir tonen mjukare. En elektronisk synt kan härma olika instrument genom att blanda en grundton med just de övertoner instrumentet har.' }
      ]
    },
    {
      id: 'tonomfang', titel: 'Tonomfång',
      block: [
        { typ: 'rubrik', text: 'Instrument och röster täcker olika delar av hörområdet' },
        { typ: 'text', text: 'Det område av toner som ett instrument eller en röst kan ge kallas dess *tonomfång|tonomfång*. Pianot har ett av de största, drygt sju oktaver. En vanlig gitarr täcker ungefär fyra oktaver, från drygt 80 Hz och uppåt. En flöjt spelar ljust, ungefär från 260 Hz och tre oktaver uppåt. En människoröst klarar oftast ungefär två oktaver. En bas eller en tuba når ned mot 40 Hz. Men övertonerna når mycket högre än grundtonerna. Därför behöver en bra högtalare kunna återge frekvenser långt över den högsta tonen på pianot, annars försvinner klangen.' },
        // [BILD A6: liggande staplar över en frekvensaxel med logaritmisk skala från 20 Hz till 20 000 Hz: piano (ca 27–4 200 Hz), gitarr (ca 82–1 200 Hz), flöjt (ca 260–2 100 Hz), människoröst (ca 80–1 000 Hz), bastuba (ca 40–350 Hz). Under axeln markerat normaltonen A 440 Hz]
        { id: 'bild-a6', typ: 'figur', namn: 'ljud', lage: 'tonomfang', bildtext: 'Pianot har störst tonomfång av instrumenten här, och normaltonen A har frekvensen 440 Hz.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En oktav högre betyder dubbel frekvens. A är 220, 440 och 880 Hz i tre oktaver.',
          'Ett piano har tolv tangenter per oktav och omkring sju oktaver. Hörområdet är ungefär tio oktaver.',
          'En sträng svänger i hela sin längd och samtidigt i halvor, tredjedelar och så vidare.',
          'Därför har övertonerna 2, 3, 4 … gånger grundtonens frekvens.',
          'Blandningen av övertoner bestämmer klangen. Var och hur man knäpper strängen ändrar blandningen.',
          'Olika instrument och röster har olika tonomfång. Övertonerna når mycket högre än grundtonerna.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
