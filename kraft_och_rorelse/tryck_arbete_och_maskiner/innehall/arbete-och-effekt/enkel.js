/* Avsnittssida V. Tryck, arbete och maskiner, text B: Energi och arbete – nivån enkel (📗).
 * Arbetsorder 28 (2026-11-19): kallor/kap3/V-B-Energi-och-arbete-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vb: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vb.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Energi och arbete' },
        { typ: 'text', text: 'Tänk på allt som händer omkring dig en vanlig dag. Bussen kör till skolan. Lamporna lyser i klassrummet. Mikron värmer din mat. Du springer på rasten. Allt det här har en sak gemensamt: det behövs energi för att det ska hända.' },
        { typ: 'text', text: 'Ordet energi använder vi ofta i vardagen. Vi säger att vi har mycket energi eller att vi är slut. Ordet arbete använder vi också, till exempel när vi talar om läxor eller jobb. Men i fysiken betyder orden något mer exakt. I den här texten får du veta vad energi och arbete betyder i fysiken, och hur de hänger ihop.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *energi* är',
          'vilka olika former energi kan ha',
          'vad *energiprincipen* säger',
          'när man utför ett *arbete* i fysiken',
          'hur man räknar ut ett arbete'
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
        { typ: 'rubrik', text: 'Energi är det som behövs för att något ska hända' },
        { typ: 'text', text: 'Ingenting händer utan energi. En bil rullar inte utan bränsle eller el. En lampa lyser inte utan el. Du orkar inte springa om du inte har ätit. Energi är alltså det som behövs för att något ska röra sig, lyftas, värmas eller lysa.' },
        { typ: 'text', text: 'Man kan inte se energi. Men man kan se vad den gör. När en boll rullar ser du att den har energi, eftersom den kan knuffa till något den träffar. I fysiken säger man att *energi* är det som gör förändringar möjliga. Energi kan flyttas från en sak till en annan, och den kan byta form.' },
        { typ: 'rubrik', text: 'Energi mäts i joule' },
        { typ: 'text', text: 'Energi mäts i en enhet som heter *joule*. Den skrivs J. En joule är inte mycket. När du lyfter ett äpple från golvet upp till ett bord använder du ungefär en joule.' },
        { typ: 'text', text: 'Därför använder man ofta en större enhet, kilojoule. Den skrivs kJ. 1 kJ är 1 000 J. Titta på en matförpackning. Där står det hur många kilojoule maten innehåller. Det är så mycket energi din kropp kan få ut av maten.' },
        { typ: 'rubrik', text: 'Energi finns i olika former' },
        { typ: 'text', text: 'Energi kan finnas i många olika former. Här är fyra viktiga:' },
        { typ: 'punkter', punkter: [
          '*Rörelseenergi.* Allt som rör sig har rörelseenergi. En rullande boll, en bil som kör och en löpare som springer har alla rörelseenergi.',
          '*Lägesenergi.* Allt som är högt upp har lägesenergi. En sten på toppen av en klippa har lägesenergi. Om den faller ner blir lägesenergin rörelseenergi.',
          '*Elastisk energi.* Det som är hoptryckt eller uttänjt har elastisk energi. Ett spänt gummiband och en hoptryckt fjäder har elastisk energi. När du släpper dem far de iväg.',
          '*Kemisk energi.* Energi kan finnas lagrad i ämnen. Mat, bensin och batterier innehåller kemisk energi.'
        ] },
        { typ: 'text', text: 'Det finns fler former också, till exempel värme, ljus och el. Rörelseenergi, lägesenergi och elastisk energi har ett gemensamt namn: mekanisk energi. Den får du läsa mer om i nästa text.' }
      ]
    },
    {
      id: 'energiprincipen', titel: 'Energiprincipen',
      block: [
        { typ: 'rubrik', text: 'Energi kan inte försvinna, den kan bara byta form' },
        { typ: 'text', text: 'Det finns en lag i fysiken som gäller överallt och alltid. Den kallas *energiprincipen*. Den säger två saker:' },
        { typ: 'punkter', punkter: [
          'Energi kan inte skapas av ingenting.',
          'Energi kan inte försvinna.'
        ] },
        { typ: 'text', text: 'Det enda energi kan göra är att byta form. Man säger att den omvandlas.' },
        { typ: 'text', text: 'Tänk på när du cyklar. Maten du har ätit innehåller kemisk energi. Dina muskler omvandlar den till rörelseenergi, så att cykeln rullar. När du sedan bromsar försvinner inte rörelseenergin. Den omvandlas till värme i bromsarna. Känn på bromsen efter en lång nedförsbacke. Den är varm.' },
        { typ: 'rubrik', text: 'En boll som studsar visar hur energin byter form' },
        { typ: 'text', text: 'Gör så här: håll upp en boll och släpp den. Följ vad som händer med energin, steg för steg.' },
        { typ: 'punkter', punkter: [
          'Bollen är högt upp. Den har lägesenergi.',
          'Bollen faller. Lägesenergin blir rörelseenergi, och bollen går fortare och fortare.',
          'Bollen slår i golvet och trycks ihop. Rörelseenergin blir elastisk energi.',
          'Bollen fjädrar tillbaka. Den elastiska energin blir rörelseenergi, och bollen far uppåt.',
          'På vägen upp blir rörelseenergin lägesenergi igen.'
        ] },
        // [BILD B1: en boll som studsar i flera studsar, varje studs lägre än den förra; vid högsta punkten "lägesenergi", på vägen ned "rörelseenergi", mot golvet "elastisk energi", och små vågor vid golvet för värme och ljud]
        { id: 'bild-b1', typ: 'figur', namn: 'energi', lage: 'studs', studsar: 3, kvar: 0.6, bildtext: 'Energin byter form i varje studs: lägesenergi blir rörelseenergi, rörelseenergi blir elastisk energi och tillbaka. En del blir värme och ljud, och därför blir varje studs lägre.' },
        { typ: 'text', text: 'Men lägg märke till en sak. Bollen studsar inte lika högt som där du släppte den. Varje studs blir lite lägre. Har energin försvunnit? Nej. En del av energin har blivit värme i bollen och golvet. En del har blivit ljud, studsen du hör. Till slut ligger bollen still. Då har all dess mekaniska energi spridits ut omkring den, mest som värme.' },
        { typ: 'rubrik', text: 'Många tror att energi tar slut' },
        { typ: 'text', text: 'I vardagen säger vi att batteriet tar slut och att vi har gjort av med energin. Det låter som om energin försvinner. Men det gör den inte.' },
        { typ: 'text', text: 'Följ energin i en mobiltelefon. Batteriet har kemisk energi. Den blir el. Elen blir ljus i skärmen och ljud i högtalaren. Ljuset och ljudet blir till slut värme. Mobilen blir faktiskt lite varm när du använder den. Energin finns alltså kvar, men den har spridits ut som värme i luften omkring dig. Den värmen är mycket svår att samla ihop och använda igen. Därför måste vi ladda batteriet igen, trots att energin aldrig försvann.' }
      ]
    },
    {
      id: 'arbete', titel: 'Arbete',
      block: [
        { typ: 'rubrik', text: 'I fysiken betyder arbete att en kraft flyttar något' },
        { typ: 'text', text: 'I vardagen kan arbete betyda nästan allt som är jobbigt. I fysiken betyder ordet något mycket bestämt. Ett *arbete* utförs när ett föremål flyttas och en kraft verkar längs förflyttningen.' },
        { typ: 'text', text: 'Det måste alltså finnas två saker:' },
        { typ: 'punkter', punkter: [
          'en kraft',
          'en förflyttning längs samma linje som kraften'
        ] },
        { typ: 'text', text: 'Oftast pekar kraften åt samma håll som rörelsen, som när du lyfter eller drar. Men även en kraft som bromsar utför ett arbete. Det kommer längre fram.' },
        { typ: 'text', text: 'Här är två exempel på arbete:' },
        { typ: 'punkter', punkter: [
          'Du lyfter en låda från golvet till ett bord. Du drar lådan uppåt, och lådan flyttas uppåt. Det är ett arbete.',
          'Du drar en kälke i snön. Du drar framåt, och kälken flyttas framåt. Det är också ett arbete.'
        ] },
        { typ: 'rubrik', text: 'Man kan bli trött utan att utföra något arbete' },
        { typ: 'text', text: 'Det här kan låta konstigt. Du kan bli väldigt trött utan att utföra något arbete i fysikens mening.' },
        { typ: 'text', text: 'Tänk dig att du står still och håller en tung väska. Efter en stund blir armarna trötta. Men väskan flyttas inte. Det finns en kraft, men ingen förflyttning. Alltså utför du inget arbete. Samma sak händer om du trycker på en vägg. Du tar i, men väggen flyttas inte. Inget arbete.' },
        { typ: 'text', text: 'Varför blir du då trött? Dina muskler jobbar hela tiden för att hålla väskan uppe. De använder kemisk energi från maten. Men den energin blir värme i kroppen. Den blir inte arbete på väskan.' },
        { typ: 'text', text: 'Tänk dig sedan att du bär väskan rakt fram på en plan väg. Nu flyttas väskan. Men du håller väskan uppåt, och den flyttas framåt. Kraften och förflyttningen pekar åt olika håll. Då utför kraften uppåt inget arbete. Det är bara när kraften och förflyttningen ligger längs samma linje som det blir ett arbete.' },
        // [BILD B2: tre figurer – en person som lyfter en låda (kraft uppåt, rörelse uppåt: arbete), en person som håller lådan stilla (kraft uppåt, ingen rörelse: inget arbete på lådan – musklerna använder ändå energi), en person som bär lådan framåt (kraft uppåt, rörelse framåt: kraften uppåt utför inget arbete på lådan)]
        { id: 'bild-b2', typ: 'figur', namn: 'energi', lage: 'arbete', bildtext: 'Kraften från armarna pekar uppåt i alla tre bilderna. Bara när lådan flyttas uppåt, längs kraften, utför kraften ett arbete på lådan.' },
        { typ: 'rubrik', text: 'Man räknar ut arbete genom att ta kraften gånger sträckan' },
        { typ: 'text', text: 'När du lyfter något arbetar du mot tyngdkraften. Hur stort ett arbete är beror på två saker:' },
        { typ: 'punkter', punkter: [
          'Hur stor kraften är. Med dubbelt så stor kraft blir arbetet dubbelt så stort.',
          'Hur långt föremålet flyttas. Med dubbelt så lång sträcka blir arbetet också dubbelt så stort.'
        ] },
        { typ: 'text', text: 'Därför räknar man ut arbetet genom att ta kraften gånger sträckan.' },
        { typ: 'formel', uttryck: 'W = F · s', forklaring: 'W arbetet (J), F kraften i rörelsens riktning (N), s sträckan (m)' },
        { typ: 'text', text: 'W står för arbete. Bokstaven kommer från det engelska ordet work. F står för kraft och s för sträcka. Arbete mäts i joule, alltså samma enhet som energi. 1 joule är det arbete som utförs när en kraft på 1 newton flyttar något 1 meter.' },
        { typ: 'exempel', rubrik: 'Klotet upp på bordet', stycken: [
          ['Ett klot väger 50 kg. Det ska lyftas upp på ett bord som är 1 meter högt. Hur stort arbete krävs?'],
          ['Givet: Klotet har massan 50 kg. Varje kilo har tyngden ungefär 10 N, så klotets tyngd är 50 · 10 = 500 N. Vi tänker oss att klotet lyfts långsamt och jämnt. Då måste du dra uppåt med lika stor kraft som tyngden. Kraften är alltså F = 500 N. Sträckan är s = 1 m. Sökt: arbetet W.'],
          ['Lösning: Ta kraften gånger sträckan.',
           'W = F · s = 500 N · 1 m = 500 J',
           'Svar: Det krävs ett arbete på 500 J.']
        ] },
        { typ: 'rubrik', text: 'Arbete flyttar energi' },
        { typ: 'text', text: 'Vad händer med de 500 J du använde för att lyfta klotet? Enligt energiprincipen kan energin inte försvinna. Den har förts över till klotet. Klotets lägesenergi har ökat med 500 J. Om klotet rullar ner från bordet blir lägesenergin rörelseenergi.' },
        { typ: 'text', text: 'Så hänger arbete och energi ihop. Ett arbete är ett sätt att flytta över energi från en sak till en annan. När kraften verkar åt samma håll som rörelsen, som när du lyfter, får föremålet energi. Därför mäts både arbete och energi i joule, och därför säger man ofta att energi är förmågan att utföra ett arbete.' },
        { typ: 'text', text: 'En kraft som verkar mot rörelsen gör tvärtom. Den tar energi från föremålet. När en bil bromsar verkar friktionen bakåt medan bilen rör sig framåt. Då tar arbetet energi från bilen. Bilens rörelseenergi blir värme i bromsarna.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Energi är det som behövs för att något ska hända. Energi kan flyttas och byta form.',
          'Energi mäts i joule, J. 1 kJ är 1 000 J.',
          'Fyra energiformer är rörelseenergi, lägesenergi, elastisk energi och kemisk energi.',
          'Energiprincipen: energi kan inte skapas och inte försvinna. Den kan bara byta form.',
          'När energi har blivit värme som har spridits ut finns den kvar, men den är svår att använda igen.',
          'Ett arbete utförs bara när något flyttas och en kraft verkar längs förflyttningen.',
          'Arbete = kraft · sträcka, W = F · s. Arbete mäts i joule.',
          'En kraft med rörelsen ger energi. En kraft mot rörelsen tar energi.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
