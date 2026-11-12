/* Avsnittssida IV. Fall, kast och balans, text D: Tyngdpunkt, balans och kroppen – nivån standard (📘).
 * Arbetsorder 17 (2026-11-12): kallor/kap3/IV-D-Tyngdpunkt-balans-och-kroppen-alla-nivaer-v1.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text d: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-d.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tyngdpunkt, balans och kroppen' },
        { typ: 'text', text: 'När du står på ett ben, cyklar eller bär en tung väska håller kroppen hela tiden balansen utan att du tänker på det. När du hoppar följer du en kastbana, och när en bil krockar utsätts kroppen för krafter som är många gånger större än tyngden. I den här texten använder du det du har lärt dig om krafter, fall och kast för att förstå hur balans fungerar, vad som händer med kroppen i ett hopp och hur en bil skyddar dig vid en krock.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *tyngdpunkt* är, och när ett föremål står stadigt eller välter',
          'vad som händer med tyngdpunkten under ett hopp',
          'vad *G-kraft* betyder, och hur den påverkar kroppen',
          'hur bältet, krockkudden och *deformationszonen|deformationszon* skyddar dig vid en krock'
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
        { typ: 'rubrik', text: 'Tyngdpunkten är den punkt där tyngdkraften verkar' },
        { typ: 'text', text: 'Tyngdkraften drar i varje liten del av ett föremål. Men när man räknar och ritar räcker det att tänka sig att hela tyngdkraften verkar i en enda punkt. Den punkten kallas föremålets *tyngdpunkt*. Det är därifrån man ritar tyngdkraftens pil.' },
        { typ: 'text', text: 'Tyngdpunkten är den punkt där föremålet är i balans. En linjal balanserar på fingret om fingret är precis under linjalens mitt. Där ligger tyngdpunkten. En hammare balanserar däremot nära huvudet, eftersom det mesta av massan finns där. Tyngdpunkten ligger alltså där massan är samlad, inte alltid i mitten.' },
        { typ: 'rubrik', text: 'Ett föremål står stadigt när tyngdpunkten är över stödytan' },
        { typ: 'text', text: 'Den yta som ett föremål står på kallas *stödyta*. För en låda är det lådans botten. För en människa som står är det fötterna och ytan mellan dem.' },
        { typ: 'text', text: 'Ett föremål står stadigt så länge tyngdpunkten ligger rakt ovanför stödytan. Om man lutar föremålet flyttas tyngdpunkten åt sidan. Så länge en lodrät linje från tyngdpunkten fortfarande träffar stödytan, faller föremålet tillbaka när man släpper det. Men om linjen hamnar utanför stödytan välter föremålet.' },
        // [BILD D1: en låda i tre lägen – står rakt, lutar lite (lodlinjen från tyngdpunkten innanför stödytan, lådan faller tillbaka), lutar mycket (lodlinjen utanför stödytan, lådan välter)]
        { typ: 'text', text: 'Det lutande tornet i Pisa står kvar för att lodlinjen från dess tyngdpunkt fortfarande träffar inom tornets bas. Hade det lutat lite till hade det rasat.' },
        { typ: 'rubrik', text: 'Låg tyngdpunkt och bred stödyta ger stabilitet' },
        { typ: 'text', text: 'Ju lägre tyngdpunkten ligger och ju bredare stödytan är, desto mer kan ett föremål luta innan det välter. En racerbil är låg och bred, och den välter nästan aldrig. En hög lastbil med tung last högt upp kan däremot välta i en skarp kurva.' },
        { typ: 'text', text: 'Samma sak gäller dig. Står du på bussen med fötterna ihop tappar du lätt balansen när bussen bromsar. Står du bredbent, med lite böjda knän, blir stödytan bredare och tyngdpunkten lägre, och då står du mycket stadigare.' },
        // [BILD D2: en låg, bred racerbil och en hög lastbil lutade lika mycket – racerbilens lodlinje innanför stödytan, lastbilens utanför]
        { typ: 'rubrik', text: 'Kroppen flyttar tyngdpunkten för att hålla balansen' },
        { typ: 'text', text: 'När du står på ett ben måste kroppens tyngdpunkt ligga rakt ovanför den enda foten. Därför lutar du automatiskt överkroppen lite åt det hållet. När du bär en tung väska i höger hand lutar du dig åt vänster, så att den gemensamma tyngdpunkten för dig och väskan hamnar ovanför fötterna.' },
        { typ: 'text', text: 'Du flyttar också tyngdpunkten varje gång du reser dig från en stol. Innan du kan resa dig måste du luta överkroppen framåt, så att tyngdpunkten kommer ovanför fötterna. Försök resa dig med ryggen rak och fötterna långt fram, så märker du att det inte går.' }
      ]
    },
    {
      id: 'hopp', titel: 'Jämvikt under hopp',
      block: [
        { typ: 'rubrik', text: 'I luften följer tyngdpunkten en kastbana' },
        { typ: 'text', text: 'När du hoppar lämnar du marken med en viss fart och i en viss riktning. Från det ögonblicket verkar bara tyngdkraften på dig, om luftmotståndet är litet. Du är i en kaströrelse, precis som bollen i texten om kaströrelse. Det är din tyngdpunkt som följer kastbanan.' },
        { typ: 'text', text: 'Ingenting du gör i luften kan ändra den banan. Du kan sträcka ut armarna, dra upp benen eller vrida dig, men tyngdpunkten fortsätter längs samma båge. För att ändra banan behövs en kraft utifrån, och i luften finns det inget att trycka emot.' },
        // [BILD D3: en person i ett hopp i fem lägen; tyngdpunkten markerad i varje läge och följer en jämn kastbana, medan armar och ben har olika ställning]
        { typ: 'rubrik', text: 'Kroppen kan röra sig runt tyngdpunkten' },
        { typ: 'text', text: 'Även om tyngdpunktens bana är bestämd kan kroppen ändra form runt den. En höjdhoppare utnyttjar det. I den teknik som nästan alla höjdhoppare använder, där man går över ribban baklänges med ryggen först, böjer hopparen kroppen som en båge över ribban. Då kan delar av kroppen vara ovanför ribban medan tyngdpunkten passerar strax under den. Hopparen kommer över en högre ribba än tyngdpunkten själv når.' },
        // [BILD D4: höjdhoppare i bågform över ribban; tyngdpunkten markerad strax under ribban]
        { typ: 'text', text: 'En balettdansare som gör ett stort språng drar upp benen och armarna när hon är högst upp. Då flyttas kroppen uppåt i förhållande till tyngdpunkten. Huvudet och bålen ligger nästan stilla en kort stund, även om tyngdpunkten följer sin båge. Det ser ut som om dansaren svävar.' },
        { typ: 'rubrik', text: 'Vid landningen ska tyngdpunkten hamna över fötterna' },
        { typ: 'text', text: 'När du landar efter ett hopp måste du få tyngdpunkten rakt ovanför fötterna igen. Annars faller du framåt eller bakåt. Därför böjer man knäna och för fram armarna vid landningen. Böjda knän gör också inbromsningen längre, så att kraften från marken blir mindre, som du läste om i texten om fritt fall.' }
      ]
    },
    {
      id: 'kroppen', titel: 'Krafter på kroppen',
      block: [
        { typ: 'rubrik', text: 'G-kraft jämför kraften på kroppen med tyngden' },
        { typ: 'text', text: 'När du står stilla trycker golvet på dig med en kraft som är lika stor som din tyngd. Det känns normalt. Men i en hiss som börjar åka uppåt, eller i en berg-och-dalbana som svänger i botten av en backe, trycker underlaget hårdare, och du känner dig tyngre. Det beskrivs med *G-kraft*.' },
        { typ: 'text', text: 'G-kraften anger hur många gånger större kraften på kroppen är än vanligt. När du står stilla är den 1 g. Om underlaget trycker dubbelt så hårt som vanligt är den 2 g, och då känns det som om du väger dubbelt så mycket. I en berg-och-dalbana kan det bli 3–4 g en kort stund. En stridspilot i en skarp sväng kan utsättas för 9 g.' },
        { typ: 'rubrik', text: 'Stora G-krafter påverkar kroppen' },
        { typ: 'text', text: 'Vid höga G-krafter blir blodet också "tyngre". När en pilot svänger skarpt uppåt pressas blodet ned mot benen, och hjärtat orkar inte pumpa upp det till huvudet. Hjärnan får för lite syre. Först blir synen grå, och vid ännu högre G-kraft kan man svimma. Därför bär stridspiloter särskilda dräkter som kramar om benen och magen och hindrar blodet från att samlas där.' },
        { typ: 'text', text: 'Kroppen klarar mycket högre G-krafter om de bara varar en mycket kort stund. Det är det som avgör hur farlig en krock är.' },
        { typ: 'rubrik', text: 'I en krock stannar bilen på en bråkdel av en sekund' },
        { typ: 'text', text: 'När en bil krockar rakt in i något stannar bilen på ungefär en tiondels sekund. Men du som sitter i bilen stannar inte av dig själv. Enligt tröghetslagen fortsätter din kropp framåt i samma fart som bilen hade. Om inget stoppar dig fortsätter du tills du slår i ratten, instrumentbrädan eller vindrutan. Det är så de flesta skador uppstod innan bilbältet blev vanligt.' },
        { typ: 'text', text: 'Bilbältet stoppar dig tillsammans med bilen. Det fördelar kraften över de starka delarna av kroppen, över bröstkorgen och bäckenet. Krockkudden blåses upp på några hundradels sekunder och tar emot huvudet och bröstet, så att de bromsas mjukt i stället för mot hård plast eller glas.' },
        { typ: 'rubrik', text: 'Deformationszonen gör att det tar längre tid att stanna' },
        { typ: 'text', text: 'Kraften vid en krock beror på hur lång tid inbromsningen tar. Det är samma sak som när du landar efter ett hopp: böjda knän ger längre inbromsning och mindre kraft. En bil har därför en *deformationszon|deformationszon*, en del av bilen fram och bak som är byggd för att tryckas ihop vid en krock.' },
        { typ: 'text', text: 'När fronten trycks ihop tar det längre tid för bilen att stanna. Kraften på bilen och på dig blir då mindre. Samtidigt är kupén, där du sitter, byggd stark och styv, så att den inte trycks in mot dig.' },
        // [BILD D5: två bilar som krockar med en vägg – en styv bil som stannar på en mycket kort sträcka, och en bil med deformationszon där fronten trycks ihop och kupén är hel]
        { typ: 'text', text: 'Många tror att den säkraste bilen är den som är så stark att den inte får en buckla vid en krock. Men en helt styv bil skulle stanna nästan direkt, och då skulle kraften på dig bli enorm. Det är just därför moderna bilar ofta ser svårt skadade ut efter en krock. Fronten har gjort sitt jobb: den har tryckts ihop för att skydda dig.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tyngdpunkten är den punkt där man kan tänka sig att hela tyngdkraften verkar. Den ligger där massan är samlad.',
          'Ett föremål står stadigt så länge lodlinjen från tyngdpunkten träffar stödytan. Hamnar den utanför välter föremålet.',
          'Låg tyngdpunkt och bred stödyta ger stabilitet. Kroppen flyttar hela tiden tyngdpunkten för att hålla balansen.',
          'I ett hopp följer tyngdpunkten en kastbana som ingenting i luften kan ändra. Kroppen kan bara ändra form runt den.',
          'G-kraft anger hur många gånger större kraften på kroppen är än vanligt. Stående stilla är den 1 g.',
          'Höga G-krafter kan få blodet att lämna huvudet, så att man ser grått eller svimmar.',
          'I en krock fortsätter kroppen framåt på grund av trögheten. Bältet och krockkudden stoppar den.',
          'Deformationszonen gör att inbromsningen tar längre tid, och då blir kraften mindre. Kupén är styv för att skydda dig.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
