/* Avsnittssida V. Tryck, arbete och maskiner, text C: Mekanisk energi – nivån fordjupning (📕).
 * Arbetsorder 29 (2026-11-19): kallor/kap3/V-C-Mekanisk-energi-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vc: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vc.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Mekanisk energi i siffror' },
        { typ: 'text', text: 'I Standard såg du att rörelseenergin växer med massan och ännu mer med farten, och att lägesenergin kan räknas ut med E_p = m · g · h. Här får du formeln för rörelseenergin. Med de två formlerna kan du räkna ut hur fort något går efter ett fall, varför en dubbelt så hög fart ger fyra gånger så lång bromssträcka och hur högt en stavhoppare som mest kan komma.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur man räknar ut rörelseenergi',
          'varför farten betyder så mycket mer än massan',
          'hur man räknar ut farten efter ett fall med hjälp av energin',
          'hur stavhoppet är en kedja av energiomvandlingar'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'rorelseenergi-i-siffror', titel: 'Rörelseenergin i siffror',
      block: [
        { typ: 'rubrik', text: 'Rörelseenergin växer med farten i kvadrat' },
        { typ: 'text', text: 'Rörelseenergin räknas ut med formeln' },
        { typ: 'formel', uttryck: 'E_k = m · v² / 2', forklaring: 'E_k rörelseenergin (J), m massan (kg), v farten (m/s)' },
        { typ: 'rader', rader: [
          'Farten står i kvadrat, alltså multiplicerad med sig själv. Det är därför den betyder så mycket. En bil som väger 1 000 kg och kör i 10 m/s, ungefär 36 km/h, har rörelseenergin',
          'E_k = 1 000 · 10 · 10 / 2 = 50 000 J = 50 kJ.',
          'Samma bil i 20 m/s, ungefär 72 km/h, har',
          'E_k = 1 000 · 20 · 20 / 2 = 200 000 J = 200 kJ.',
          'Farten fördubblades, men energin blev fyra gånger så stor. Vid tre gånger farten blir den nio gånger så stor.'
        ] },
        { typ: 'rubrik', text: 'Därför blir bromssträckan fyra gånger så lång' },
        { typ: 'text', text: 'När en bil bromsar tar friktionen hand om rörelseenergin. Bromskraften är ungefär lika stor oavsett fart, och arbetet är kraften gånger sträckan. Fyra gånger så mycket energi kräver därför fyra gånger så lång sträcka. Det är förklaringen till det du läste i djupdykningen om bromssträckan: dubbel fart, fyrdubblad bromssträcka.' }
      ]
    },
    {
      id: 'farten-ur-hojden', titel: 'Farten ur höjden',
      block: [
        { typ: 'rubrik', text: 'Lägesenergin bestämmer farten efter ett fall' },
        { typ: 'text', text: 'När något faller utan luftmotstånd blir all lägesenergi rörelseenergi. Då är m · g · h lika med m · v² / 2. Massan finns på båda sidor och kan strykas. Kvar blir att farten bara beror på höjden.' },
        { typ: 'text', text: 'En boll som faller 5 meter har per kilogram lägesenergin 10 · 5 = 50 J. Det ska bli rörelseenergi, v² / 2 = 50, alltså v² = 100 och v = 10 m/s. Det gäller för en kula, en sten och en människa. Det är samma sak som du såg i fritt fall, att alla föremål faller lika fort utan luftmotstånd, men nu förklarat med energi.' },
        { typ: 'rubrik', text: 'Det gäller också i backar' },
        { typ: 'text', text: 'Samma räkning gäller för en pulka i en backe eller en vagn i en berg-och-dalbana, så länge friktionen är liten. Det är bara höjdskillnaden som räknas, inte hur backen ser ut. En vagn som rullar 20 meter nedåt får ungefär 20 m/s, oavsett om backen är brant eller flack. I verkligheten blir farten lite lägre, eftersom friktion och luftmotstånd tar en del av energin.' }
      ]
    },
    {
      id: 'stavhoppet', titel: 'Stavhoppet',
      block: [
        { typ: 'rubrik', text: 'Ett stavhopp är en kedja av energiomvandlingar' },
        { typ: 'text', text: 'En stavhoppare springer in mot ribban så fort hon kan. Där har hon stor rörelseenergi. När staven sätts i lådan böjs den, och rörelseenergin blir elastisk energi i staven. Staven rätar ut sig och lyfter hopparen, och den elastiska energin blir lägesenergi.' },
        // [BILD C3: stavhoppet i tre lägen – ansatsen ("rörelseenergi"), staven böjd ("elastisk energi"), hopparen över ribban ("lägesenergi")]
        { id: 'bild-c3', typ: 'figur', namn: 'energi', lage: 'stavhopp', bildtext: 'Rörelseenergin från ansatsen blir elastisk energi i den böjda staven och sedan lägesenergi när hopparen kommer upp över ribban.' },
        { typ: 'rubrik', text: 'Farten bestämmer hur högt man kan komma' },
        { typ: 'text', text: 'Om all rörelseenergi blev lägesenergi skulle v² / 2 = g · h. Med farten 10 m/s, som de bästa stavhopparna har i ansatsen, blir h = 100 / 20 = 5 m. Hopparens tyngdpunkt ligger redan ungefär 1 meter över marken vid starten, och hon kan trycka på lite med armarna. Därför kan de bästa ta sig över 6 meter. Utan en snabb ansats spelar det ingen roll hur bra staven är. Det är farten som är energin.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Rörelseenergi räknas ut med E_k = m · v² / 2. Dubbel fart ger fyra gånger energin, och tredubbel fart nio gånger.',
          'Därför blir bromssträckan fyra gånger så lång när farten fördubblas.',
          'Utan luftmotstånd beror farten efter ett fall bara på höjden. 5 m ger 10 m/s, oavsett massa.',
          'I en backe räknas bara höjdskillnaden, inte hur brant backen är.',
          'Stavhoppet omvandlar rörelseenergi till elastisk energi och sedan till lägesenergi. Ansatsfarten bestämmer hur högt hopparen kan komma.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
