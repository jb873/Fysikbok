/* Avsnittssida IV. Fall, kast och balans, text C: Kaströrelse – nivån standard (📘).
 * Arbetsorder 16 (2026-11-11): kallor/kap3/IV-C-Kastrorelse-alla-nivaer-v1.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text c: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-c.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kaströrelse' },
        { typ: 'text', text: 'En fotboll som sparkas mot mål, en basketboll på väg mot korgen och ett spjut som kastas följer alla samma sorts bana. De rör sig framåt och faller samtidigt. En sådan rörelse kallas *kaströrelse*. I texten om fritt fall såg du vad som händer när något faller rakt ned. Nu ska du se vad som händer när det samtidigt rör sig framåt, och hur samma idé förklarar varför satelliter kan kretsa runt jorden utan att falla ned.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att en kastad boll gör två rörelser samtidigt',
          'varför en kastad och en släppt boll når marken samtidigt',
          'hur kastvinkeln påverkar hur långt något kommer',
          'hur en *satellit* kan vara kvar i sin bana',
          'vilken kraft som behövs för att något ska röra sig i en cirkel'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'kastrorelse', titel: 'Kaströrelse',
      block: [
        { typ: 'rubrik', text: 'En kastad boll gör två rörelser samtidigt' },
        { typ: 'text', text: 'När du kastar en boll rakt fram rör den sig framåt. Men samtidigt drar tyngdkraften den nedåt, precis som i ett fritt fall. Bollen gör alltså två rörelser på en gång: en framåt och en nedåt.' },
        { typ: 'text', text: 'Det viktiga är att de två rörelserna inte påverkar varandra. Tyngdkraften drar bara nedåt. Den drar inte bakåt och bromsar inte rörelsen framåt. Om vi bortser från luftmotståndet finns det ingen kraft som verkar framåt eller bakåt. Därför fortsätter bollen framåt med samma fart hela tiden, samtidigt som den faller allt snabbare nedåt.' },
        { typ: 'rubrik', text: 'En kastad och en släppt boll landar samtidigt' },
        { typ: 'text', text: 'Tänk dig att du står på taket till ett höghus. Du släpper en boll rakt ned, och i samma ögonblick kastar du en annan boll rakt ut. Den kastade bollen landar långt bort från huset, och den släppta bollen landar vid husväggen. Men de landar samtidigt.' },
        { typ: 'text', text: 'Det beror på att fallet nedåt är exakt detsamma för båda. Båda börjar med farten noll nedåt, och tyngdkraften ger båda samma acceleration. Efter en sekund har båda fallit lika långt, efter två sekunder också. Att den ena bollen samtidigt rör sig framåt ändrar ingenting i fallet.' },
        // [BILD K1: höghus – en släppt boll och en kastad boll, bollarnas lägen varje halv sekund; de ligger på samma höjd vid varje tidpunkt]
        { typ: 'text', text: 'Det samma gäller en kula som skjuts vågrätt ur ett gevär och en kula som släpps från samma höjd. Om marken är plan och luftmotståndet försumbart når de marken samtidigt, även om den skjutna kulan landar hundratals meter bort.' },
        { typ: 'rubrik', text: 'Farten framåt är konstant och farten nedåt ökar' },
        { typ: 'text', text: 'Man kan följa den kastade bollen sekund för sekund. Framåt rör den sig lika långt varje sekund, eftersom ingen kraft ändrar den rörelsen. Nedåt faller den längre för varje sekund, eftersom tyngdkraften hela tiden ökar farten nedåt med ungefär 10 m/s varje sekund.' },
        { typ: 'text', text: 'När de två rörelserna läggs ihop blir banan en böjd linje som blir brantare och brantare. Den kallas *kastbana|kastbana*. Formen kommer av att den jämna rörelsen framåt och den allt snabbare rörelsen nedåt sker samtidigt.' },
        // [BILD K2: kastbanan med bollens läge varje sekund – vågräta pilar lika långa hela vägen, lodräta pilar som växer]
        { typ: 'text', text: 'Många tror att en kastad boll först flyger rakt fram och sedan plötsligt faller, som i en tecknad film där figuren springer ut över ett stup och hänger kvar i luften en stund. Men tyngdkraften verkar från första ögonblicket. Bollen börjar falla direkt när den lämnar handen.' },
        { typ: 'rubrik', text: 'En boll som kastas snett uppåt stiger först och faller sedan' },
        { typ: 'text', text: 'De flesta kast går snett uppåt, inte rakt fram. Då har bollen från början en fart både framåt och uppåt. Farten framåt är fortfarande konstant. Farten uppåt minskar däremot med 10 m/s varje sekund, eftersom tyngdkraften drar nedåt. Till slut är farten uppåt noll, och bollen är i banans högsta punkt. Sedan börjar den falla, och farten nedåt ökar.' },
        { typ: 'text', text: 'Banan blir en båge. Utan luftmotstånd är den symmetrisk: bollen tar lika lång tid upp som ned, och den landar med samma fart som den kastades med, om den landar på samma höjd.' },
        { typ: 'rubrik', text: 'Kastvinkeln avgör hur långt bollen kommer' },
        { typ: 'text', text: 'Hur långt en boll kommer beror på hur fort den kastas och i vilken vinkel. Kastas den nästan rakt upp stiger den högt men kommer inte långt fram. Kastas den nästan vågrätt får den mycket fart framåt men landar snabbt. Någonstans mitt emellan finns den bästa vinkeln.' },
        { typ: 'text', text: 'Om luftmotståndet kan försummas och bollen landar på samma höjd som den kastades från, kommer den längst vid 45°. Vinklarna 30° och 60° ger då exakt samma längd. Den ena bollen flyger lågt och snabbt, den andra högt och länge.' },
        // [BILD K3: tre kastbanor från samma punkt med samma fart – 30°, 45° och 60°; 45° längst, 30° och 60° landar på samma ställe]
        { typ: 'text', text: 'I verkligheten bromsar luften. Därför blir banan kortare än utan luft, och den blir brantare i slutet än i början. En fotboll eller en badmintonboll påverkas mycket av luften, en kula i kulstötning mycket lite.' }
      ]
    },
    {
      id: 'satelliter', titel: 'Från kast till satellit',
      block: [
        { typ: 'rubrik', text: 'Ju hårdare kastet är, desto längre bort landar bollen' },
        { typ: 'text', text: 'Isaac Newton tänkte sig en kanon högst upp på ett mycket högt berg. Kanonen skjuter en kula vågrätt. Med lite krut landar kulan nära berget. Med mer krut landar den längre bort. Varje gång faller kulan lika fort nedåt, men den hinner längre framåt innan den når marken.' },
        { typ: 'text', text: 'Men jorden är inte platt. Den är ett klot, och marken kröker sig nedåt. Om kulan skjuts tillräckligt fort kröker sig marken bort under den lika fort som kulan faller. Då når kulan aldrig marken. Den faller hela tiden, men den missar jorden och går runt den. Den är i *omloppsbana|omloppsbana*.' },
        // [BILD K4: Newtons kanon – kulbanor med ökande fart, den sista går runt jorden]
        { typ: 'rubrik', text: 'En satellit faller hela tiden men missar jorden' },
        { typ: 'text', text: 'Det är så alla satelliter fungerar. En satellit är inte uppe för att tyngdkraften har försvunnit. Tyngdkraften drar den mot jorden hela tiden. Men satelliten rör sig så fort i sidled att den faller runt jorden i stället för ned på den.' },
        { typ: 'text', text: 'Nära jorden behövs en fart på ungefär 8 km i sekunden, alltså nästan 30 000 km/h. Rymdstationen ISS, som kretsar ungefär 400 km upp, går runt hela jorden på ungefär en och en halv timme. Astronauterna i stationen svävar därför att de och stationen faller tillsammans, hela tiden.' },
        { typ: 'rubrik', text: 'En geostationär satellit står still över samma plats' },
        { typ: 'text', text: 'Ju högre upp en satellit är, desto längre tid tar ett varv. På ungefär 36 000 km höjd tar ett varv lika lång tid som jorden behöver för att snurra ett varv runt sin axel. Om satelliten då kretsar över ekvatorn, åt samma håll som jorden snurrar, följer den med jordens rotation. Sett från jorden står den still på himlen. En sådan satellit kallas *geostationär|geostationär satellit*.' },
        { typ: 'text', text: 'Geostationära satelliter används för tv-sändningar och väderbilder. En parabolantenn på ett hus kan riktas en gång för alla, eftersom satelliten alltid finns på samma ställe.' }
      ]
    },
    {
      id: 'cirkelrorelse', titel: 'Cirkelrörelse',
      block: [
        { typ: 'rubrik', text: 'En cirkelrörelse kräver en kraft in mot mitten' },
        { typ: 'text', text: 'Enligt tröghetslagen fortsätter ett föremål rakt fram om ingen kraft ändrar rörelsen. Ett föremål som rör sig i en cirkel ändrar hela tiden riktning. Då måste en kraft hela tiden verka på det. Den kraften pekar in mot cirkelns mitt och kallas *centripetalkraft*. Ordet betyder ungefär "kraft mot mitten". En sådan rörelse kallas *centralrörelse|centralrörelse* eller cirkelrörelse.' },
        { typ: 'text', text: 'För en satellit är det tyngdkraften som är centripetalkraften. För en boll i ett snöre som snurras runt är det snöret som drar bollen inåt.' },
        { typ: 'rubrik', text: 'Om kraften försvinner fortsätter föremålet rakt fram' },
        { typ: 'text', text: 'En diskuskastare snurrar runt med diskusen i handen. Handen drar diskusen inåt hela tiden, så att den går i en cirkel. När kastaren släpper försvinner kraften inåt. Då fortsätter diskusen rakt fram i den riktning den hade just i det ögonblicket, längs en rak linje som bara snuddar vid cirkeln. Den flyger alltså inte rakt utåt från mitten.' },
        // [BILD K5: en boll som snurras i ett snöre – kraftpil in mot mitten; när snöret släpps fortsätter bollen rakt fram längs en tangent]
        { typ: 'rubrik', text: 'En bil i en kurva behöver friktion' },
        { typ: 'text', text: 'När en bil svänger måste något dra den in mot kurvans mitt. Det är friktionen mellan däcken och vägen. Däcken trycker mot vägen, och vägen trycker tillbaka på däcken, inåt.' },
        { typ: 'text', text: 'Om vägen är isig blir friktionen liten. Då räcker den inte till för att hålla bilen i kurvan, och bilen fortsätter rakt fram ut i diket. Kraften inåt behöver också bli större ju fortare bilen kör. Därför sänker man farten före en skarp kurva.' },
        // [BILD K6: bil i en kurva sedd uppifrån – friktionskraft från vägen in mot kurvans mitt; på is fortsätter bilen rakt fram]
        { typ: 'rubrik', text: 'Många tror att något kastas utåt i en kurva' },
        { typ: 'text', text: 'När du sitter i en bil som svänger känns det som om något trycker dig utåt, mot dörren. Det kallas ofta *centrifugalkraft*. Men det finns ingen kraft som trycker dig utåt. Det du känner är din tröghet. Din kropp vill fortsätta rakt fram, men bilen svänger. Då trycker bildörren, eller bältet, dig inåt, så att du följer med i kurvan.' },
        { typ: 'text', text: 'Samma sak händer i en tvättmaskin som centrifugerar. Trumman snurrar fort, och trumväggen trycker kläderna inåt så att de går runt. Men vattnet i kläderna hålls inte fast. Det fortsätter rakt fram, genom hålen i trumman. Det är så kläderna blir torrare.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En kastad boll gör två rörelser samtidigt: framåt och nedåt. De påverkar inte varandra.',
          'Utan luftmotstånd är farten framåt konstant, och farten nedåt ökar med ungefär 10 m/s varje sekund.',
          'En kastad och en släppt boll från samma höjd landar samtidigt.',
          'Kastbanan är en båge. Utan luftmotstånd kommer en boll längst vid kastvinkeln 45°.',
          'En satellit faller hela tiden mot jorden men rör sig så fort i sidled att den missar och går runt den.',
          'En geostationär satellit går ett varv på samma tid som jorden snurrar ett varv och står därför still över samma plats.',
          'En cirkelrörelse kräver en kraft in mot mitten, centripetalkraft. Försvinner den fortsätter föremålet rakt fram.',
          'Det som känns som att man kastas utåt i en kurva är tröghet, inte en kraft utåt.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
