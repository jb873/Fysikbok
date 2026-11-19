/* Avsnittssida V. Tryck, arbete och maskiner, text B: Energi och arbete – nivån standard (📘).
 * Arbetsorder 28 (2026-11-19): kallor/kap3/V-B-Energi-och-arbete-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vb: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vb.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Energi och arbete' },
        { typ: 'text', text: 'En bil rullar, en lampa lyser, en kopp te blir varm och du orkar springa uppför en trappa. Allt det kräver energi. Energi är något vi talar om varje dag, i maten, i elräkningen och när vi är trötta. I fysiken har ordet en exakt betydelse, och det har också ordet arbete. I den här texten får du veta vad de betyder, hur de hänger ihop och varför energi aldrig kan ta slut, bara byta form.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *energi* är, och vilka former energin kan ha',
          'vad *energiprincipen* säger',
          'när man utför ett *arbete* i fysiken, och när man inte gör det',
          'hur man räknar ut ett arbete',
          'hur arbete och energi hänger ihop'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'energi', titel: 'Vad är energi?',
      block: [
        { typ: 'rubrik', text: 'Energi är förmågan att få något att hända' },
        { typ: 'text', text: 'Allt som händer kräver energi. För att en bil ska rulla, en låda ska lyftas eller vatten ska värmas behövs energi. Energin syns inte, men den märks på vad den kan åstadkomma. *Energi* är det som gör förändringar möjliga: att något sätts i rörelse, värms upp eller börjar lysa. Energi kan föras över från ett föremål till ett annat och omvandlas från en form till en annan.' },
        { typ: 'text', text: 'Energi mäts i *joule*, som skrivs J. Det är en liten enhet. Att lyfta ett äpple en meter kräver ungefär 1 joule. Därför anges energi ofta i kilojoule, kJ, där 1 kJ = 1 000 J. På matförpackningar står det hur många kilojoule maten innehåller.' },
        { typ: 'rubrik', text: 'Energin finns i olika former' },
        { typ: 'text', text: 'Energi kan finnas i många former. Några av de viktigaste är:' },
        { typ: 'punkter', punkter: [
          '*rörelseenergi* – allt som rör sig har rörelseenergi, till exempel en rullande boll eller en bil i fart',
          '*lägesenergi* – allt som befinner sig högt upp har lägesenergi, till exempel vatten bakom en damm eller en sten på en klippa',
          '*elastisk energi* – det som är hoptryckt eller uttänjt, som en fjäder eller ett spänt gummiband',
          '*kemisk energi* – energi som är lagrad i ämnen, till exempel i mat, bensin och batterier'
        ] },
        { typ: 'text', text: 'Dessutom finns bland annat värme, ljus och elektrisk energi. Rörelseenergi, lägesenergi och elastisk energi tillsammans kallas mekanisk energi. Dem går nästa text igenom närmare.' }
      ]
    },
    {
      id: 'energiprincipen', titel: 'Energiprincipen',
      block: [
        { typ: 'rubrik', text: 'Energi kan inte skapas eller förstöras, bara omvandlas' },
        { typ: 'text', text: 'En av de viktigaste lagarna i hela fysiken är *energiprincipen*. Den säger att energi aldrig kan skapas av ingenting och aldrig kan försvinna. Energi kan bara omvandlas, alltså byta form. Den totala mängden energi är alltid densamma.' },
        { typ: 'text', text: 'När du cyklar omvandlar musklerna kemisk energi från maten till rörelseenergi. När du bromsar försvinner inte rörelseenergin. Den blir värme i bromsarna och däcken. Känner du på en cykelbroms efter en lång nedförsbacke märker du att den har blivit varm.' },
        { typ: 'rubrik', text: 'En studsande boll visar hur energin byter form' },
        { typ: 'text', text: 'Håll upp en boll och släpp den. Högt upp har bollen lägesenergi. När den faller blir lägesenergin rörelseenergi, och bollen går allt fortare. När den slår i golvet trycks den ihop, och rörelseenergin blir elastisk energi. Bollen fjädrar tillbaka, den elastiska energin blir rörelseenergi igen, och bollen far uppåt. På vägen upp blir rörelseenergin lägesenergi.' },
        // [BILD B1: en boll som studsar i flera studsar, varje studs lägre än den förra; vid högsta punkten "lägesenergi", på vägen ned "rörelseenergi", mot golvet "elastisk energi", och små vågor vid golvet för värme och ljud]
        { id: 'bild-b1', typ: 'figur', namn: 'energi', lage: 'studs', studsar: 3, kvar: 0.6, bildtext: 'Energin byter form i varje studs: lägesenergi blir rörelseenergi, rörelseenergi blir elastisk energi och tillbaka. En del blir värme och ljud, och därför blir varje studs lägre.' },
        { typ: 'text', text: 'Men bollen når inte lika högt som där den släpptes, och varje studs blir lägre. Energin har inte försvunnit. En del har blivit värme i bollen och golvet, och en del har blivit ljud. Till slut ligger bollen still, och all dess mekaniska energi har omvandlats och spridits ut i omgivningen, främst som värme.' },
        { typ: 'rubrik', text: 'Många tror att energi förbrukas' },
        { typ: 'text', text: 'I vardagen säger vi att vi förbrukar energi, att batteriet tar slut och att elen går åt. Men energin försvinner aldrig. När ett batteri laddas ur har den kemiska energin omvandlats till elektrisk energi, sedan till ljus och ljud, och till slut till värme. Energin finns kvar, men den har spridits ut som värme i omgivningen. Utspridd på det sättet blir den mycket svår att använda igen. Det är därför vi måste fortsätta tillföra energi, trots att den aldrig tar slut.' }
      ]
    },
    {
      id: 'arbete', titel: 'Arbete',
      block: [
        { typ: 'rubrik', text: 'I fysiken utförs ett arbete när en kraft flyttar något' },
        { typ: 'text', text: 'I vardagen betyder arbete nästan allt som är ansträngande. I fysiken betyder det något mycket bestämt. Ett *arbete* utförs när ett föremål flyttas och en kraft verkar längs förflyttningen. Det krävs alltså två saker: en kraft och en förflyttning längs samma linje som kraften. Oftast verkar kraften åt samma håll som rörelsen, som när du lyfter eller drar. Men även en kraft som verkar mot rörelsen, som när något bromsas, utför ett arbete. Det kommer längre fram i texten.' },
        { typ: 'text', text: 'När du lyfter en låda från golvet till ett bord drar du uppåt, och lådan flyttas uppåt. Då utför du ett arbete. När du drar en kälke framåt i snön drar du framåt, och kälken flyttas framåt. Även det är ett arbete.' },
        { typ: 'rubrik', text: 'Man kan bli trött utan att utföra något arbete' },
        { typ: 'text', text: 'Om du står still och håller en tung väska blir du trött. Men i fysiken utför du inget arbete, eftersom väskan inte flyttas. Samma sak gäller när du trycker på en vägg som inte rör sig. Kraften finns, men ingen förflyttning.' },
        { typ: 'text', text: 'Att du ändå blir trött beror på att musklerna arbetar hela tiden för att hålla väskan uppe. De använder kemisk energi från maten, men den blir värme i kroppen, inte arbete på väskan.' },
        { typ: 'text', text: 'Om du bär väskan rakt fram på plan mark flyttas den, men inte i kraftens riktning. Du håller väskan uppåt, och den rör sig framåt. Kraften uppåt utför därför inget arbete. Det är bara den del av kraften som verkar längs rörelsen som räknas.' },
        // [BILD B2: tre figurer – en person som lyfter en låda (kraft uppåt, rörelse uppåt: arbete), en person som håller lådan stilla (kraft uppåt, ingen rörelse: inget arbete på lådan – musklerna använder ändå energi), en person som bär lådan framåt (kraft uppåt, rörelse framåt: kraften uppåt utför inget arbete på lådan)]
        { id: 'bild-b2', typ: 'figur', namn: 'energi', lage: 'arbete', bildtext: 'Kraften från armarna pekar uppåt i alla tre bilderna. Bara när lådan flyttas uppåt, längs kraften, utför kraften ett arbete på lådan.' },
        { typ: 'rubrik', text: 'Arbete är kraft gånger sträcka' },
        { typ: 'text', text: 'När du lyfter något arbetar du mot tyngdkraften. Hur stort arbetet är beror på hur stor kraften är och hur långt föremålet flyttas. Dubbelt så stor kraft ger dubbelt så stort arbete, och dubbelt så lång sträcka ger också dubbelt så stort arbete. Arbetet räknas ut som kraften gånger sträckan.' },
        { typ: 'formel', uttryck: 'W = F · s', forklaring: 'W arbetet (J), F kraften i rörelsens riktning (N), s sträckan (m)' },
        { typ: 'text', text: 'Bokstaven W kommer från engelskans work. Arbete mäts i joule, samma enhet som energi. 1 joule är det arbete som utförs när kraften 1 newton flyttar något 1 meter.' },
        { typ: 'exempel', rubrik: 'Klotet upp på bordet', stycken: [
          ['Ett klot som väger 50 kg ska lyftas upp på ett bord som är 1 meter högt. Hur stort arbete krävs?'],
          ['Givet: Klotets massa är 50 kg, så tyngden är ungefär 500 N. Klotet lyfts långsamt med jämn fart. Då är kraften som lyfter lika stor som tyngden, F = 500 N. Sträckan är s = 1 m. Sökt: arbetet W.'],
          ['Lösning:',
           'W = F · s = 500 N · 1 m = 500 J',
           'Svar: Det krävs ett arbete på 500 J.']
        ] },
        { typ: 'rubrik', text: 'Arbete för över energi' },
        { typ: 'text', text: 'När du har lyft klotet upp på bordet har dess lägesenergi ökat med 500 J. Arbetet du utförde försvann inte. Energin fördes över till klotet genom arbetet. Om klotet rullar ner från bordet blir lägesenergin rörelseenergi.' },
        { typ: 'text', text: 'Det är så arbete och energi hänger ihop. Ett arbete är ett sätt att föra över energi. En kraft som verkar med rörelsen ger föremålet energi. Därför har arbete och energi samma enhet, joule, och därför säger man ofta att energi är förmågan att utföra ett arbete.' },
        { typ: 'text', text: 'En kraft som verkar mot rörelsen tar i stället energi från föremålet. När en bil bromsar verkar friktionen bakåt medan bilen rör sig framåt. Arbetet tar då energi från bilen, och bilens rörelseenergi blir värme i bromsarna.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Energi gör förändringar möjliga. Den kan föras över och omvandlas. Energi mäts i joule, J.',
          'Några energiformer är rörelseenergi, lägesenergi, elastisk energi och kemisk energi.',
          'Energiprincipen: energi kan inte skapas eller förstöras, bara omvandlas.',
          'Energi som har spridits ut som värme finns kvar, men den blir svår att använda igen.',
          'Ett arbete utförs när ett föremål flyttas och en kraft verkar längs förflyttningen. Utan förflyttning, inget arbete.',
          'Arbete = kraft · sträcka, W = F · s. Arbete mäts i joule.',
          'Arbete är ett sätt att föra över energi. En kraft med rörelsen ger energi, en kraft mot rörelsen tar energi.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
