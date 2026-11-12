/* Avsnittssida IV. Fall, kast och balans, text C: Kaströrelse – nivån enkel (📗).
 * Arbetsorder 16 (2026-11-11): kallor/kap3/IV-C-Kastrorelse-alla-nivaer-v1.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text c: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-c.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kaströrelse' },
        { typ: 'text', text: 'Tänk på en fotboll som sparkas högt mot mål. Den flyger framåt, stiger, vänder och faller ner. Eller tänk på en basketboll som kastas mot korgen. Den gör samma sak. Allt som kastas eller sparkas följer en sorts båge genom luften.' },
        { typ: 'text', text: 'En sådan rörelse kallas *kaströrelse*. I texten om fritt fall såg du vad som händer när något faller rakt ner. Nu ska du se vad som händer när något faller och samtidigt rör sig framåt. Samma tanke förklarar också hur satelliter kan åka runt jorden utan att ramla ner.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att en kastad boll gör två rörelser på samma gång',
          'varför en kastad och en släppt boll landar samtidigt',
          'varför kastvinkeln spelar roll',
          'hur en *satellit* kan stanna uppe',
          'vad som behövs för att något ska åka runt i en cirkel'
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
        { typ: 'rubrik', text: 'En kastad boll rör sig framåt och faller samtidigt' },
        { typ: 'text', text: 'När du kastar en boll rakt fram rör den sig framåt. Det är den ena rörelsen. Men samtidigt drar tyngdkraften bollen nedåt. Det är den andra rörelsen. Bollen gör alltså två saker på en gång: den åker framåt och den faller.' },
        { typ: 'text', text: 'Det viktiga är att de två rörelserna inte stör varandra. Tyngdkraften drar bara rakt nedåt. Den bromsar inte bollen framåt. Om vi bortser från luften finns det inget som bromsar bollen framåt. Därför åker bollen lika fort framåt hela tiden. Samtidigt faller den fortare och fortare nedåt.' },
        { typ: 'rubrik', text: 'Den kastade och den släppta bollen landar samtidigt' },
        { typ: 'text', text: 'Tänk dig att du står uppe på taket på ett höghus. Du har en boll i varje hand. Den ena bollen släpper du bara, så att den faller rakt ner. Den andra bollen kastar du rakt ut från huset. Du gör det på exakt samma gång.' },
        { typ: 'text', text: 'Den släppta bollen landar precis vid husväggen. Den kastade bollen landar långt ut från huset. Men de landar på samma gång. Det kan låta konstigt, men det stämmer.' },
        { typ: 'text', text: 'Förklaringen är att båda bollarna faller på exakt samma sätt. Båda börjar utan någon fart nedåt. Tyngdkraften drar lika i båda. Efter en sekund har båda fallit lika långt. Efter två sekunder har båda fallit lika långt igen. Att den ena bollen samtidigt åker framåt gör ingen skillnad för fallet.' },
        // [BILD K1: höghus – en släppt boll och en kastad boll, bollarnas lägen varje halv sekund; de ligger på samma höjd vid varje tidpunkt]
        { id: 'bild-k1', typ: 'figur', namn: 'kastbana', lage: 'hoghus', hojd: 20, fart: 10, steg: 0.5, bildtext: 'Två bollar startar samtidigt från taket. Den släppta och den kastade bollen ligger på samma höjd vid varje tidpunkt, och båda når marken samtidigt.' },
        { typ: 'text', text: 'Titta på bilden. Bollarna är ritade varje halv sekund. Vid varje tidpunkt ligger de på samma höjd. Den kastade bollen är bara längre fram.' },
        { typ: 'rubrik', text: 'Framåt går det lika fort, nedåt går det fortare och fortare' },
        { typ: 'text', text: 'Man kan följa den kastade bollen sekund för sekund. Framåt kommer den lika långt varje sekund. Ingen kraft bromsar den framåt, så farten framåt ändras inte.' },
        { typ: 'text', text: 'Nedåt är det annorlunda. Där drar tyngdkraften hela tiden. Därför går det fortare och fortare nedåt, precis som i ett fritt fall. Farten nedåt ökar med ungefär 10 m/s varje sekund.' },
        { typ: 'text', text: 'När man lägger ihop de två rörelserna blir banan en böjd linje. Den blir brantare och brantare. Den böjda linjen kallas *kastbana|kastbana*.' },
        // [BILD K2: kastbanan med bollens läge varje sekund – vågräta pilar lika långa hela vägen, lodräta pilar som växer]
        { id: 'bild-k2', typ: 'figur', namn: 'kastbana', lage: 'komposanter', fart: 10, sekunder: 3, bildtext: 'Farten framåt är lika stor hela vägen. Farten nedåt ökar med 10 m/s varje sekund.' },
        { typ: 'rubrik', text: 'Bollen börjar falla direkt' },
        { typ: 'text', text: 'Har du sett en tecknad film där en figur springer ut över ett stup? Figuren hänger kvar i luften en stund, tittar ner och faller först sedan. Många tror att en kastad boll gör likadant: att den först flyger rakt fram och sedan plötsligt börjar falla.' },
        { typ: 'text', text: 'Men så är det inte. Tyngdkraften drar i bollen från första ögonblicket. Bollen börjar falla direkt när den lämnar handen. Därför är banan böjd hela vägen, redan från början.' },
        { typ: 'rubrik', text: 'En boll som kastas snett uppåt stiger först och faller sedan' },
        { typ: 'text', text: 'Oftast kastar man inte rakt fram, utan snett uppåt. Då åker bollen både framåt och uppåt från början.' },
        { typ: 'text', text: 'Framåt går det lika fort hela tiden, precis som förut. Men uppåt är det annorlunda. Tyngdkraften drar nedåt, och därför minskar farten uppåt. Bollen stiger långsammare och långsammare. Till slut slutar den stiga. Då är bollen i bågens högsta punkt. Sedan börjar den falla, och farten nedåt ökar.' },
        { typ: 'text', text: 'Banan blir en båge. Om det inte fanns någon luft skulle bågen vara likadan på båda sidor. Bollen skulle ta lika lång tid upp som ner.' },
        { typ: 'rubrik', text: 'Vinkeln avgör hur långt bollen kommer' },
        { typ: 'text', text: 'Hur långt en boll kommer beror på två saker. Den ena är hur hårt du kastar. Den andra är i vilken vinkel du kastar.' },
        { typ: 'text', text: 'Kastar du nästan rakt upp stiger bollen högt, men den kommer nästan ingenting framåt. Kastar du nästan rakt fram får bollen mycket fart framåt, men den landar snabbt. Den bästa vinkeln ligger mitt emellan.' },
        { typ: 'text', text: 'Om det inte fanns någon luft skulle bollen komma längst om du kastade i vinkeln 45°. Den är precis mitt emellan rakt fram och rakt upp. Kastar du i 30° eller i 60° kommer bollen exakt lika långt. Den ena bollen flyger lågt och snabbt. Den andra flyger högt och länge.' },
        // [BILD K3: tre kastbanor från samma punkt med samma fart – 30°, 45° och 60°; 45° längst, 30° och 60° landar på samma ställe]
        { id: 'bild-k3', typ: 'figur', namn: 'kastbana', lage: 'vinklar', fart: 20, vinklar: [30, 45, 60], bildtext: 'Samma fart, tre vinklar. 45° kommer längst. 30° och 60° landar på samma ställe, men 60° går högre.' },
        { typ: 'text', text: 'På riktigt finns det luft. Luften bromsar bollen. Därför kommer den inte lika långt som den skulle utan luft. En fotboll eller en badmintonboll bromsas mycket av luften. En tung kula i kulstötning bromsas nästan inte alls.' }
      ]
    },
    {
      id: 'satelliter', titel: 'Från kast till satellit',
      block: [
        { typ: 'rubrik', text: 'Ju hårdare kastet är, desto längre bort landar bollen' },
        { typ: 'text', text: 'För över 300 år sedan tänkte forskaren Isaac Newton ut ett tankeexperiment. Han tänkte sig en kanon högst upp på ett jättehögt berg. Kanonen skjuter en kula rakt fram.' },
        { typ: 'text', text: 'Med lite krut flyger kulan en kort bit och landar nära berget. Med mer krut flyger den längre. Med ännu mer krut flyger den ännu längre. Varje gång faller kulan lika fort nedåt. Men ju fortare den åker framåt, desto längre hinner den innan den når marken.' },
        { typ: 'rubrik', text: 'Jorden är rund, så marken kröker sig bort' },
        { typ: 'text', text: 'Men jorden är inte platt. Den är ett klot. Marken kröker sig nedåt, bort från kulan.' },
        { typ: 'text', text: 'Om kulan skjuts tillräckligt fort händer något speciellt. Marken kröker sig bort under kulan lika fort som kulan faller. Då når kulan aldrig marken. Den faller hela tiden, men den missar jorden och åker runt den. Kulan har hamnat i en *omloppsbana|omloppsbana*.' },
        // [BILD K4: Newtons kanon – kulbanor med ökande fart, den sista går runt jorden]
        { id: 'bild-k4', typ: 'figur', namn: 'newtons_kanon', bildtext: 'Ju högre fart, desto längre bort landar kulan. Med tillräckligt hög fart faller den runt hela jorden.' },
        { typ: 'rubrik', text: 'En satellit faller hela tiden men missar jorden' },
        { typ: 'text', text: 'Precis så fungerar alla satelliter. Många tror att satelliter stannar uppe för att det inte finns någon tyngdkraft i rymden. Men det stämmer inte. Tyngdkraften drar satelliten mot jorden hela tiden. Satelliten åker bara så fort åt sidan att den faller runt jorden i stället för ner på den.' },
        { typ: 'text', text: 'Det går väldigt fort. Nära jorden behöver en satellit åka ungefär 8 km varje sekund. Det är nästan 30 000 km/h. Rymdstationen ISS åker runt hela jorden på ungefär en och en halv timme. Astronauterna i stationen svävar för att de och stationen faller tillsammans hela tiden.' },
        { typ: 'rubrik', text: 'En geostationär satellit står still över samma plats' },
        { typ: 'text', text: 'Ju högre upp en satellit är, desto längre tid tar det att åka ett varv. Långt ute, ungefär 36 000 km upp, tar ett varv ett helt dygn. Det är lika lång tid som jorden behöver för att snurra ett varv runt sig själv.' },
        { typ: 'text', text: 'Om satelliten åker över ekvatorn, åt samma håll som jorden snurrar, följer den med jorden. Från jorden ser det ut som om satelliten står still på himlen. En sådan satellit kallas *geostationär|geostationär satellit*.' },
        { typ: 'text', text: 'Det är väldigt praktiskt. Parabolen på ett hustak kan riktas mot satelliten en gång, och sedan behöver den aldrig flyttas. Satelliten finns alltid på samma plats. Därför används geostationära satelliter för tv och väderbilder.' }
      ]
    },
    {
      id: 'cirkelrorelse', titel: 'Cirkelrörelse',
      block: [
        { typ: 'rubrik', text: 'För att åka i en cirkel behövs en kraft inåt' },
        { typ: 'text', text: 'Kommer du ihåg tröghetslagen? Ett föremål fortsätter rakt fram om ingen kraft ändrar rörelsen. Men ett föremål som åker i en cirkel svänger hela tiden. Då måste en kraft hela tiden dra det inåt, mot cirkelns mitt.' },
        { typ: 'text', text: 'Den kraften kallas *centripetalkraft*. Ordet betyder ungefär "kraft mot mitten". En rörelse i en cirkel kallas *centralrörelse|centralrörelse* eller cirkelrörelse.' },
        { typ: 'text', text: 'Snurra en boll i ett snöre runt dig. Du känner hur snöret drar i handen. Snöret drar bollen inåt, mot dig, hela tiden. Det är snöret som är centripetalkraften. För en satellit är det tyngdkraften som drar den inåt, mot jorden.' },
        { typ: 'rubrik', text: 'Om kraften försvinner fortsätter föremålet rakt fram' },
        { typ: 'text', text: 'En diskuskastare snurrar runt med diskusen i handen. Handen drar diskusen inåt hela tiden, så att den åker i en cirkel.' },
        { typ: 'text', text: 'När kastaren släpper diskusen försvinner kraften inåt. Vad händer då? Diskusen fortsätter rakt fram, åt det håll den var på väg just när den släpptes. Den flyger alltså inte rakt utåt från kastaren. Den flyger rakt fram, längs en linje som bara nuddar cirkeln.' },
        // [BILD K5: en boll som snurras i ett snöre – kraftpil in mot mitten; när snöret släpps fortsätter bollen rakt fram längs en tangent]
        { id: 'bild-k5', typ: 'figur', namn: 'cirkelrorelse', lage: 'snore', bildtext: 'Snöret drar bollen in mot mitten. När snöret släpps fortsätter bollen rakt fram, inte utåt.' },
        { typ: 'rubrik', text: 'En bil i en kurva behöver friktion' },
        { typ: 'text', text: 'När en bil kör i en kurva svänger den. Då måste något dra bilen in mot kurvans mitt. Det är friktionen mellan däcken och vägen. Vägen trycker däcken inåt.' },
        { typ: 'text', text: 'På en isig väg är friktionen liten. Då räcker den inte. Bilen klarar inte att svänga, och den fortsätter rakt fram, kanske ut i diket. Kraften inåt behöver också vara större ju fortare bilen kör. Därför ska man sakta ner före en skarp kurva.' },
        // [BILD K6: bil i en kurva sedd uppifrån – friktionskraft från vägen in mot kurvans mitt; på is fortsätter bilen rakt fram]
        { id: 'bild-k6', typ: 'figur', namn: 'cirkelrorelse', lage: 'bil', bildtext: 'Friktionen från vägen drar bilen in mot kurvans mitt. Utan friktion, till exempel på blankis, fortsätter bilen rakt fram.' },
        { typ: 'rubrik', text: 'Det finns ingen kraft som kastar dig utåt' },
        { typ: 'text', text: 'När du sitter i en bil som svänger kärvt känns det som om du trycks utåt, mot dörren. Många kallar det centrifugalkraft och tror att det är en kraft som trycker utåt. Men det finns ingen sådan kraft.' },
        { typ: 'text', text: 'Det du känner är din tröghet. Din kropp vill fortsätta rakt fram, men bilen svänger. Då är det bildörren eller bältet som trycker dig inåt, så att du följer med i svängen. Det är därför det känns som om du trycks mot dörren. Det är egentligen dörren som trycker på dig.' },
        { typ: 'text', text: 'Samma sak händer i en tvättmaskin som centrifugerar. Trumman snurrar mycket fort. Trumväggen trycker kläderna inåt så att de åker runt. Men vattnet i kläderna sitter inte fast. Det fortsätter rakt fram och åker ut genom hålen i trumman. Därför blir kläderna torrare.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En kastad boll gör två rörelser på samma gång: den åker framåt och den faller.',
          'Framåt går det lika fort hela tiden. Nedåt går det fortare och fortare, ungefär 10 m/s mer varje sekund.',
          'En kastad boll och en släppt boll från samma höjd landar samtidigt.',
          'Bollen börjar falla direkt när den lämnar handen. Banan är en båge.',
          'Utan luft kommer en boll längst om den kastas i vinkeln 45°.',
          'En satellit faller hela tiden mot jorden, men den åker så fort åt sidan att den missar jorden och åker runt den.',
          'En geostationär satellit åker ett varv på ett dygn och står därför still över samma plats.',
          'För att åka i en cirkel behövs en kraft inåt, centripetalkraft. Försvinner den fortsätter föremålet rakt fram.',
          'Det som känns som en kraft utåt i en kurva är tröghet.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
