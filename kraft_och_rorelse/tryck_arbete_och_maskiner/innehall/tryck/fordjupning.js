/* Avsnittssida V. Tryck, arbete och maskiner, text A: Tryck – nivån fordjupning (📕).
 * Arbetsorder 21 (2026-11-12): kallor/kap3/V-A-Tryck-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text va: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-va.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Trycket i siffror' },
        { typ: 'text', text: 'I Standard såg du att tryck är kraft fördelad på en yta, att hydraulik kan förvandla en liten kraft till en stor och att lyftkraften kommer av att vattnet trycker hårdare underifrån. Här räknar du på det. Siffrorna visar saker som är svåra att se med bara ord: att en människa i klackskor kan trycka hårdare mot golvet än en elefant, att en bil vilar på en yta som inte är mycket större än ett par vykort, och varför nästan hela isberget ligger under vattnet.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur man räknar med tryck och byter mellan enheterna Pa, kPa och bar',
          'hur stor yta en bil står på, och varför den beror på däcktrycket',
          'hur kraften och vägen hänger ihop i en hydraulisk lyft',
          'hur man räknar ut lyftkraften med Arkimedes princip',
          'varför isberg, ubåtar och badande i salt vatten följer samma regel'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tryck-i-siffror', titel: 'Räkna med tryck',
      block: [
        { typ: 'rubrik', text: 'Arean avgör mer än man tror' },
        { typ: 'text', text: 'Eftersom trycket är kraften delad med arean betyder en tio gånger mindre yta ett tio gånger högre tryck. Det gör att små ytor kan ge häpnadsväckande höga tryck.' },
        { typ: 'rader', rader: [
          'Jämför en person i klackskor med en elefant. Personen väger 60 kg, alltså ungefär 600 N. I det ögonblick då hela tyngden vilar på en klack med arean 1 cm², alltså 0,0001 m², blir trycket',
          'p = 600 N / 0,0001 m² = 6 000 000 Pa = 6 000 kPa.',
          'En elefant väger 5 ton, alltså ungefär 50 000 N. Varje fot har en area på ungefär 0,125 m², så fyra fötter har 0,5 m². Trycket blir',
          'p = 50 000 N / 0,5 m² = 100 000 Pa = 100 kPa.',
          'Klacken trycker alltså ungefär 60 gånger hårdare mot golvet än elefanten. Elefanten väger nästan hundra gånger mer, men dess fötter är flera tusen gånger större.'
        ] },
        { typ: 'rubrik', text: 'Pa, kPa och bar' },
        { typ: 'text', text: 'I tekniken används ofta enheten bar, där 1 bar = 100 kPa = 100 000 Pa. Den är praktisk eftersom lufttrycket vid havsytan är ungefär 1 bar. Ett däcktryck på 2,2 bar är alltså 220 kPa.' },
        { typ: 'text', text: 'Det tryck som visas på en däcktrycksmätare är däckets övertryck. Det betyder hur mycket högre trycket i däcket är än lufttrycket utanför. Ett tomt, platt däck visar 0, fast luften i det har samma tryck som omgivningen.' },
        { typ: 'rubrik', text: 'Bilen vilar på en yta som är lite större än ett vykort per hjul' },
        { typ: 'text', text: 'Däcktrycket bestämmer hur stor yta bilen står på. Luften i däcket trycker ned mot vägen med samma tryck som det inne i däcket. Däcket plattas till precis så mycket att luftens tryck mot vägen bär upp bilen.' },
        { typ: 'rader', rader: [
          'En bil som väger 1 500 kg har tyngden ungefär 15 000 N. Med däcktrycket 220 kPa blir den sammanlagda ytan mot vägen ungefär',
          'A = F / p = 15 000 N / 220 000 Pa ≈ 0,068 m² ≈ 680 cm².',
          'Det är ungefär 170 cm² per däck, lite större än ett vykort. Hela bilens grepp om vägen, när den svänger, bromsar och accelererar, sker genom de fyra små ytorna.'
        ] },
        { typ: 'text', text: 'Uträkningen visar också varför man släpper ut luft ur däcken i sand. Halveras däcktrycket fördubblas ytan, och trycket mot marken halveras. Däckets väggar är dock lite styva och bär också en del, så i verkligheten stämmer siffrorna ungefärligt.' }
      ]
    },
    {
      id: 'hydraulik-i-siffror', titel: 'Hydraulik i siffror',
      block: [
        { typ: 'rubrik', text: 'Kraften växer lika mycket som arean' },
        { typ: 'rader', rader: [
          'I en hydraulisk lyft är trycket lika stort vid båda kolvarna. Om den lilla kolven har arean 2 cm² och du trycker med 200 N, blir trycket i oljan',
          'p = 200 N / 0,0002 m² = 1 000 000 Pa = 1 000 kPa.',
          'Om den stora kolven har arean 100 cm², alltså 0,01 m², blir kraften på den',
          'F = p · A = 1 000 000 Pa · 0,01 m² = 10 000 N.',
          'Det räcker för att lyfta en bil på 1 000 kg. Den stora kolven är 50 gånger så stor som den lilla, och kraften blir 50 gånger så stor. Kraften växer i samma förhållande som arean.'
        ] },
        { typ: 'rubrik', text: 'Vägen minskar lika mycket som kraften växer' },
        { typ: 'text', text: 'Oljan som den lilla kolven trycker undan måste få plats under den stora. Trycks den lilla kolven ned 50 cm flyttar den 2 cm² · 50 cm = 100 cm³ olja. Under den stora kolven fördelas samma 100 cm³ på 100 cm², så den stora kolven stiger bara 1 cm.' },
        { typ: 'text', text: 'Kraften blev 50 gånger större, och vägen blev 50 gånger kortare. Det är ingen tillfällighet. Kraft gånger väg är lika stort på båda sidor: 200 N · 0,5 m = 100 N·m och 10 000 N · 0,01 m = 100 N·m. Den produkten kallas arbete, och den kommer du att möta i nästa text. En maskin kan ändra kraften, men aldrig arbetet.' },
        // [BILD V4: hydraulisk lyft med sträckor – den lilla kolven pressas ned 50 cm, den stora stiger 1 cm; krafterna 200 N och 10 000 N utskrivna]
        { typ: 'rubrik', text: 'Därför får det inte finnas luft i bromsarna' },
        { typ: 'text', text: 'Hydrauliken fungerar bara för att vätskan inte går att trycka ihop. Allt som pedalen trycker undan måste genast trycka på bromskolvarna. Men om det kommer in luft i bromssystemet förändras det. Luft är en gas, och gaser går lätt att trycka ihop. När föraren trampar trycks först luftbubblorna ihop, i stället för att bromsarna tas i. Pedalen känns mjuk och går långt ned, och bilen bromsar sämre. Därför luftar en bilmekaniker bromsarna, vilket betyder att all luft pressas ut ur systemet.' }
      ]
    },
    {
      id: 'arkimedes', titel: 'Arkimedes princip i siffror',
      block: [
        { typ: 'rubrik', text: 'En liter undanträngt vatten ger 10 N lyftkraft' },
        { typ: 'text', text: 'Eftersom lyftkraften är lika stor som tyngden av det undanträngda vattnet, och en liter vatten väger 1 kg, gäller en enkel regel: varje liter som ett föremål tränger undan ger ungefär 10 N lyftkraft.' },
        { typ: 'text', text: 'En sten som väger 2,6 kg och har volymen 1 liter har tyngden 26 N. Under vatten tränger den undan 1 liter och får lyftkraften 10 N. Den resulterande kraften nedåt blir 26 N − 10 N = 16 N. Under vattnet känns stenen alltså som om den vägde 1,6 kg. Så kan man också mäta ett föremåls volym: man väger det i luft och under vatten, och skillnaden visar hur mycket vatten det tränger undan.' },
        { typ: 'rubrik', text: 'Den del som är under vattnet visar föremålets densitet' },
        { typ: 'text', text: 'Ett föremål som flyter sjunker ned tills det undanträngda vattnet väger lika mycket som föremålet. Därför visar hur stor del som ligger under ytan hur föremålets densitet förhåller sig till vattnets.' },
        { typ: 'text', text: 'Is har densiteten ungefär 920 kg/m³ och havsvatten ungefär 1 025 kg/m³. Kvoten är ungefär 0,9. Därför ligger ungefär nio tiondelar av ett isberg under ytan. Det man ser är bara toppen, vilket är därför det är så farligt för fartyg.' },
        { typ: 'rubrik', text: 'Salt vatten bär bättre än sött vatten' },
        { typ: 'text', text: 'Salt vatten har högre densitet än sött vatten. En liter salt vatten väger alltså mer, och samma undanträngda volym ger större lyftkraft. Därför flyter ett fartyg lite högre i havet än i en sjö. I Döda havet, som är så salt att densiteten är ungefär 1 240 kg/m³, flyter en människa så högt att hon kan sitta i vattnet och läsa en tidning.' },
        { typ: 'rubrik', text: 'En ubåt ändrar sin egen tyngd' },
        { typ: 'text', text: 'En ubåt har samma volym hela tiden och tränger därför alltid undan lika mycket vatten när den är under ytan. Lyftkraften är alltså konstant. För att dyka eller stiga ändrar ubåten i stället sin egen tyngd. Den har stora tankar som kallas ballasttankar. När tankarna fylls med vatten blir ubåten tyngre än lyftkraften, och den sjunker. När vattnet pressas ut med tryckluft blir ubåten lättare, och lyftkraften lyfter den. Fiskar gör något liknande med sin simblåsa, som de kan fylla med mer eller mindre gas.' },
        { typ: 'text', text: 'Trycket i vatten och lyftkraften kan räknas mer exakt med formler som tar med vätskans densitet och djupet. Det kan du läsa om i Nästa steg, i avsnitten om tryck och lyftkraft.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En liten yta ger högt tryck. En klack kan trycka ungefär 60 gånger hårdare mot golvet än en elefants fot.',
          '1 bar = 100 kPa = 100 000 Pa. Däcktrycksmätare visar övertrycket, alltså hur mycket högre trycket är än lufttrycket.',
          'Ytan en bil står på är ungefär tyngden delad med däcktrycket, för en vanlig bil ungefär 170 cm² per däck.',
          'I en hydraulisk lyft växer kraften i samma förhållande som arean, och vägen minskar i samma förhållande. Kraft gånger väg är lika stort på båda sidor.',
          'Luft i bromssystemet är farligt, eftersom gas går att trycka ihop.',
          'Varje liter undanträngt vatten ger ungefär 10 N lyftkraft.',
          'Hur stor del av ett flytande föremål som ligger under ytan visar dess densitet jämfört med vattnets. Ungefär nio tiondelar av ett isberg ligger under ytan.',
          'Salt vatten ger större lyftkraft än sött. En ubåt dyker och stiger genom att ändra sin egen tyngd.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] },
        { typ: 'vidare', lankar: [
          { text: '9. Tryck', bok: 'nasta-kraft-och-rorelse', ankare: 'tryck' },
          { text: '10. Lyftkraft', bok: 'nasta-kraft-och-rorelse', ankare: 'lyftkraft' }
        ] }
      ]
    }
  ]
});
