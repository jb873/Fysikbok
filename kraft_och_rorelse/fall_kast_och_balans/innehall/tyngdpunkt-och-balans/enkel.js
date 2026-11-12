/* Avsnittssida IV. Fall, kast och balans, text D: Tyngdpunkt, balans och kroppen – nivån enkel (📗).
 * Arbetsorder 17 (2026-11-12): kallor/kap3/IV-D-Tyngdpunkt-balans-och-kroppen-alla-nivaer-v1.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text d: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-d.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tyngdpunkt, balans och kroppen' },
        { typ: 'text', text: 'Tänk på allt du gör med kroppen under en dag. Du står, går, cyklar och bär saker. Hela tiden håller du balansen utan att tänka på det. När du hoppar flyger du genom luften en kort stund. Och när du åker bil sitter du fastspänd med bälte, för att skyddas om bilen skulle krocka.' },
        { typ: 'text', text: 'I den här texten får du använda det du har lärt dig om krafter, fall och kast. Du ska förstå hur balans fungerar, vad som händer med kroppen när du hoppar och hur en bil skyddar dig vid en krock.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *tyngdpunkt* är',
          'varför vissa saker står stadigt och andra välter',
          'vad som händer med kroppen när du hoppar',
          'vad *G-kraft* är',
          'hur bältet och bilen skyddar dig vid en krock'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tyngdpunkt', titel: 'Tyngdpunkt och balans',
      block: [
        { typ: 'rubrik', text: 'Tyngdpunkten är där tyngdkraften verkar' },
        { typ: 'text', text: 'Tyngdkraften drar i allt som har massa. Den drar i varje liten del av en sak. Men när man ritar kraftpilar vore det krångligt att rita en pil för varje liten del. Därför tänker man sig att hela tyngdkraften drar i en enda punkt. Den punkten kallas *tyngdpunkt*.' },
        { typ: 'rubrik', text: 'Tyngdpunkten är där saken är i balans' },
        { typ: 'text', text: 'Lägg en linjal på ditt pekfinger. Flytta fingret tills linjalen balanserar. Då ligger fingret precis under linjalens tyngdpunkt. För en linjal är det i mitten.' },
        { typ: 'text', text: 'Men tyngdpunkten ligger inte alltid i mitten. Försök balansera en hammare på fingret. Den balanserar nära själva huvudet, inte mitt på skaftet. Det beror på att det mesta av hammarens massa sitter i huvudet. Tyngdpunkten ligger alltså där det mesta av massan finns.' },
        { typ: 'rubrik', text: 'Saker står stadigt när tyngdpunkten är ovanför stödytan' },
        { typ: 'text', text: 'Den yta en sak står på kallas *stödyta*. För en låda är stödytan lådans botten. För dig, när du står, är stödytan dina fötter och ytan mellan dem.' },
        { typ: 'text', text: 'En sak står stadigt så länge tyngdpunkten ligger rakt ovanför stödytan. Tänk dig att du lutar en låda lite. Om du släpper den faller den tillbaka och står rakt igen. Men om du lutar den mycket välter den.' },
        { typ: 'text', text: 'Vad är skillnaden? Tänk dig en linje som går rakt ner från lådans tyngdpunkt. Om linjen träffar lådans botten faller lådan tillbaka. Om linjen hamnar utanför botten välter lådan.' },
        // [BILD D1: en låda i tre lägen – står rakt, lutar lite (lodlinjen från tyngdpunkten innanför stödytan, lådan faller tillbaka), lutar mycket (lodlinjen utanför stödytan, lådan välter)]
        { typ: 'text', text: 'Det lutande tornet i Pisa i Italien lutar mycket. Men det står kvar, eftersom linjen rakt ner från tornets tyngdpunkt fortfarande träffar tornets bas.' },
        { typ: 'rubrik', text: 'Låg tyngdpunkt och bred stödyta ger stadighet' },
        { typ: 'text', text: 'Vissa saker är svåra att välta. En racerbil är låg och bred. Den har sin tyngdpunkt långt ner och en bred stödyta. Den kan luta mycket utan att välta.' },
        { typ: 'text', text: 'En hög lastbil med tung last högt upp är tvärtom. Den har sin tyngdpunkt högt upp. Den kan välta om den kör för fort i en skarp kurva.' },
        // [BILD D2: en låg, bred racerbil och en hög lastbil lutade lika mycket – racerbilens lodlinje innanför stödytan, lastbilens utanför]
        { typ: 'text', text: 'Samma sak gäller dig. Står du på en buss med fötterna ihop är det lätt att tappa balansen när bussen bromsar. Står du med fötterna isär och lite böjda knän blir stödytan bredare och tyngdpunkten lägre. Då står du mycket stadigare.' },
        { typ: 'rubrik', text: 'Kroppen flyttar tyngdpunkten hela tiden' },
        { typ: 'text', text: 'Ställ dig på ett ben. Lägg märke till att du lutar överkroppen lite åt sidan. Det gör du för att få tyngdpunkten rakt ovanför den fot du står på.' },
        { typ: 'text', text: 'Bär du en tung väska i höger hand lutar du dig åt vänster. Då hamnar tyngdpunkten för dig och väskan tillsammans ovanför fötterna.' },
        { typ: 'text', text: 'Du flyttar också tyngdpunkten varje gång du reser dig från en stol. Först lutar du överkroppen framåt. Då kommer tyngdpunkten ovanför fötterna, och sedan kan du resa dig. Försök resa dig med helt rak rygg och fötterna långt fram. Det går inte.' }
      ]
    },
    {
      id: 'hopp', titel: 'Jämvikt under hopp',
      block: [
        { typ: 'rubrik', text: 'När du hoppar följer din tyngdpunkt en kastbana' },
        { typ: 'text', text: 'När du hoppar trycker du ifrån mot marken. Du lämnar marken med en viss fart och åt ett visst håll. Sedan är det bara tyngdkraften som drar i dig. Du gör en kaströrelse, precis som en kastad boll.' },
        { typ: 'text', text: 'Det är din tyngdpunkt som följer kastbanan. Den går i en båge genom luften, upp och sedan ner.' },
        { typ: 'rubrik', text: 'Ingenting du gör i luften ändrar banan' },
        { typ: 'text', text: 'Du kan sprattla med armarna, dra upp benen eller vrida dig i luften. Men din tyngdpunkt fortsätter längs samma båge ändå. För att ändra banan skulle du behöva trycka på något. I luften finns det inget att trycka emot.' },
        // [BILD D3: en person i ett hopp i fem lägen; tyngdpunkten markerad i varje läge och följer en jämn kastbana, medan armar och ben har olika ställning]
        { typ: 'rubrik', text: 'Men kroppen kan ändra form runt tyngdpunkten' },
        { typ: 'text', text: 'Även om tyngdpunkten följer en bestämd båge kan resten av kroppen ändra form. Det använder höjdhoppare.' },
        { typ: 'text', text: 'Nästan alla höjdhoppare går över ribban baklänges, med ryggen först. De böjer kroppen som en båge över ribban. Då är huvudet och benen på var sin sida om ribban, och bara en liten del av kroppen är ovanför den. Tyngdpunkten kan till och med passera strax under ribban. Så kan hopparen ta sig över en högre ribba än tyngdpunkten själv kommer upp till.' },
        // [BILD D4: höjdhoppare i bågform över ribban; tyngdpunkten markerad strax under ribban]
        { typ: 'text', text: 'En balettdansare som gör ett stort språng gör något liknande. Högst upp drar hon upp armarna och benen. Då ser det ut som om hon svävar en kort stund, fast tyngdpunkten följer sin båge som vanligt.' },
        { typ: 'rubrik', text: 'När du landar måste tyngdpunkten vara över fötterna' },
        { typ: 'text', text: 'När du landar måste du få tyngdpunkten rakt ovanför fötterna igen. Annars ramlar du framåt eller bakåt. Därför böjer du knäna och sträcker fram armarna när du landar. Böjda knän gör dessutom att inbromsningen tar längre tid, så att det inte gör lika ont.' }
      ]
    },
    {
      id: 'kroppen', titel: 'Krafter på kroppen',
      block: [
        { typ: 'rubrik', text: 'G-kraft visar hur tung du känner dig' },
        { typ: 'text', text: 'När du står stilla trycker golvet uppåt på dig. Kraften är lika stor som din tyngd. Det känns helt vanligt.' },
        { typ: 'text', text: 'Men tänk på en hiss som plötsligt börjar åka uppåt. Då känns det som om du blir tyngre en kort stund. Golvet trycker hårdare på dig än vanligt. Samma sak händer i en berg-och-dalbana när vagnen svänger i botten av en backe. Du trycks ner i sätet.' },
        { typ: 'text', text: 'Det här beskrivs med *G-kraft*. G-kraften visar hur många gånger hårdare underlaget trycker på dig än när du står stilla. När du står stilla är G-kraften 1 g. Trycker sätet dubbelt så hårt är den 2 g. Då känns det som om du väger dubbelt så mycket.' },
        { typ: 'text', text: 'I en berg-och-dalbana kan det bli 3 eller 4 g en kort stund. En stridspilot som svänger skarpt kan få 9 g.' },
        { typ: 'rubrik', text: 'Stora G-krafter påverkar blodet' },
        { typ: 'text', text: 'När G-kraften blir stor blir även blodet tyngre. När en pilot svänger skarpt uppåt pressas blodet ner mot benen. Hjärtat orkar inte pumpa upp det till huvudet. Då får hjärnan för lite syre.' },
        { typ: 'text', text: 'Först blir synen grå. Om G-kraften blir ännu större kan piloten svimma. Därför har stridspiloter speciella dräkter. Dräkten kramar om benen och magen, så att blodet inte samlas där.' },
        { typ: 'text', text: 'Kroppen klarar mycket mer om G-kraften bara varar en mycket kort stund. Det är viktigt när en bil krockar.' },
        { typ: 'rubrik', text: 'I en krock stannar bilen nästan direkt, men inte du' },
        { typ: 'text', text: 'Tänk dig en bil som krockar rakt in i något. Bilen stannar på ungefär en tiondels sekund. Det är jättekort tid.' },
        { typ: 'text', text: 'Men du som sitter i bilen stannar inte av dig själv. Kommer du ihåg tröghetslagen? Din kropp fortsätter framåt i samma fart som bilen hade. Om ingenting stoppar dig fortsätter du tills du slår i ratten eller rutan. Därför skadades många människor svårt innan alla började använda bilbälte.' },
        { typ: 'rubrik', text: 'Bältet och krockkudden stoppar dig' },
        { typ: 'text', text: 'Bilbältet stoppar dig samtidigt som bilen stannar. Det sitter över bröstkorgen och höfterna, som är de starkaste delarna av kroppen. Där kan kroppen ta emot kraften bäst.' },
        { typ: 'text', text: 'Krockkudden blåses upp på några hundradels sekunder. Den tar emot huvudet och bröstet, så att de bromsas mjukt i stället för att slå i hård plast eller glas.' },
        { typ: 'rubrik', text: 'Den mjuka fronten skyddar dig' },
        { typ: 'text', text: 'Kommer du ihåg landningen med böjda knän? När inbromsningen tar längre tid blir kraften mindre. Samma sak gäller en bil som krockar.' },
        { typ: 'text', text: 'Därför är fronten på en bil byggd för att tryckas ihop vid en krock. Den delen kallas *deformationszon|deformationszon*. När fronten trycks ihop tar det lite längre tid för bilen att stanna. Då blir kraften på dig mindre. Men den del av bilen där du sitter, kupén, är byggd stark och styv. Den ska inte tryckas ihop, så att du har plats och skyddas.' },
        // [BILD D5: två bilar som krockar med en vägg – en styv bil som stannar på en mycket kort sträcka, och en bil med deformationszon där fronten trycks ihop och kupén är hel]
        { typ: 'text', text: 'Många tror att den säkraste bilen är den som är så stark att den inte får en enda buckla. Men så är det inte. En helt styv bil skulle stanna nästan direkt, och då skulle kraften på dig bli enorm. När en modern bil ser helt förstörd ut fram efter en krock har fronten gjort sitt jobb. Den har tryckts ihop för att skydda människorna inuti.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tyngdpunkten är den punkt där man tänker sig att hela tyngdkraften drar. Den ligger där det mesta av massan finns.',
          'En sak står stadigt så länge tyngdpunkten är rakt ovanför stödytan. Annars välter den.',
          'Låg tyngdpunkt och bred stödyta gör att saker står stadigt.',
          'När du hoppar följer din tyngdpunkt en kastbana. Inget du gör i luften ändrar den, men kroppen kan ändra form runt tyngdpunkten.',
          'G-kraft visar hur många gånger hårdare underlaget trycker på dig än när du står stilla.',
          'Stora G-krafter kan göra att man ser grått eller svimmar.',
          'I en krock fortsätter kroppen framåt på grund av trögheten. Bältet och krockkudden stoppar dig.',
          'Deformationszonen gör att inbromsningen tar längre tid, och då blir kraften mindre.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
