/* Avsnittssida V. Tryck, arbete och maskiner, text A: Tryck – nivån standard (📘).
 * Arbetsorder 21 (2026-11-12): kallor/kap3/V-A-Tryck-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text va: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-va.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tryck' },
        { typ: 'text', text: 'En kniv skär, men baksidan av samma kniv gör det inte. Med kängor sjunker du ner i djup snö, men med skidor glider du ovanpå. En bil kan lyftas av en domkraft som du pumpar med en hand, och ett stålfartyg som väger tusentals ton flyter. Allt detta förklaras med samma begrepp: tryck. Det handlar inte bara om hur stor en kraft är, utan om hur stor yta kraften fördelas på.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *tryck* är, och hur det mäts',
          'när högt tryck är bra och när det är ett problem',
          'hur fordon, djur och växter är byggda för högt eller lågt tryck',
          'hur *hydraulik* kan lyfta tunga saker med en liten kraft',
          'varför tryckskillnader i vatten ger en *lyftkraft*, och varför saker flyter eller sjunker'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tryck', titel: 'Tryck är kraft fördelad på en yta',
      block: [
        { typ: 'rubrik', text: 'Samma kraft kan ge helt olika verkan' },
        { typ: 'text', text: 'Håll en vässad blyertspenna mellan tummen och pekfingret, med spetsen mot pekfingret och den trubbiga änden mot tummen. Tryck lätt. Det gör ont i pekfingret, men inte i tummen. Ändå är krafterna lika stora. Det är kraft och motkraft: pennan trycker lika hårt på båda fingrarna. Skillnaden är ytan. Mot pekfingret samlas hela kraften på den lilla spetsen. Mot tummen fördelas den på en mycket större yta.' },
        { typ: 'text', text: 'Det är det som kallas *tryck*. Tryck är hur stor kraft som verkar på varje del av en yta. Stor kraft på liten yta ger högt tryck. Samma kraft på stor yta ger lågt tryck.' },
        // [BILD V1: samma person i djup snö två gånger – med kängor (liten yta, sjunker ned) och med snöskor (stor yta, står kvar ovanpå); tyngden lika stor i båda, utritad som lika långa pilar]
        { typ: 'rubrik', text: 'Tryck mäts i pascal' },
        { typ: 'text', text: 'Eftersom tryck är kraft per yta mäts det i newton per kvadratmeter. Den enheten kallas *pascal*, efter den franske forskaren Blaise Pascal, och skrivs Pa. Ett tryck på 1 Pa betyder att kraften 1 newton fördelas på en kvadratmeter.' },
        { typ: 'text', text: 'Det är ett mycket litet tryck. Ett papper som ligger på ett bord trycker ungefär så mycket. Därför anges tryck ofta i *kilopascal*, kPa, där 1 kPa = 1 000 Pa. Lufttrycket runt oss är ungefär 100 kPa.' },
        { typ: 'text', text: 'Tryck mäts med en *tryckmätare*, som också kallas manometer. På en bensinstation finns en sådan för bildäck. Där anges trycket ofta i bar, och 1 bar är 100 kPa. Ett vanligt däcktryck i en personbil är drygt 2 bar.' },
        { typ: 'rubrik', text: 'Högt tryck är bra när något ska skära eller tränga in' },
        { typ: 'text', text: 'Alla verktyg som skär, sticker eller tränger in i något bygger på högt tryck. En kniv har en egg som är så tunn att även en liten kraft blir ett enormt tryck mot det som ska skäras. En slö kniv har en bredare egg, och därför måste du trycka mycket hårdare för att få samma tryck. Samma sak gäller en spik, en nål, en sax och en yxa.' },
        { typ: 'text', text: 'Högt tryck används också för att få fäste. Dubbdäck har små metallstift som trycker ned i isen. Fotbollsskor har dobbar och klätterskor för is har spikar under. Den lilla ytan ger ett så högt tryck att underlaget ger efter, och då fastnar foten eller däcket.' },
        { typ: 'rubrik', text: 'Högt tryck kan också skada' },
        { typ: 'text', text: 'Samma sak som gör en kniv bra kan förstöra ett golv. En smal klack trycker hela kroppens tyngd mot en yta som bara är någon kvadratcentimeter stor. Trycket blir så högt att ett trägolv får märken. Därför är smala klackar förbjudna på en del gamla golv.' },
        { typ: 'text', text: 'En tung väska med smala remmar skär in i axlarna, medan samma väska med breda, vadderade remmar känns lättare. Väskan väger lika mycket, men trycket mot axlarna blir mindre. På samma sätt fördelar en madrass kroppens tyngd på en stor yta, så att trycket blir lågt. Även en spikmatta fungerar på det sättet. Varje spik är vass, men det finns så många att tyngden fördelas på tusentals spetsar, och trycket från varje spets blir lågt.' },
        { typ: 'rubrik', text: 'Tunga fordon behöver lågt tryck mot marken' },
        { typ: 'text', text: 'En traktor har stora, breda däck. Om den hade smala däck skulle den sjunka ned i den mjuka åkern och packa ihop jorden så att växterna får svårt att växa. Skogsmaskiner, pistmaskiner och snöskotrar har ofta band i stället för hjul. Banden ligger an mot marken på en lång sträcka, så att tyngden fördelas på en stor yta.' },
        { typ: 'text', text: 'Tunga lastbilar har många hjulaxlar. Det är inte för att de behöver fler hjul för att rulla, utan för att tyngden ska fördelas. Annars skulle trycket mot vägen bli så högt att asfalten skulle förstöras snabbt.' },
        { typ: 'text', text: 'Den som kör i djup sand släpper ofta ut lite luft ur däcken. Ett mjukare däck plattas till mer mot marken och får en större yta mot sanden. Då blir trycket lägre och bilen sjunker inte ned.' },
        { typ: 'rubrik', text: 'Djur och växter är byggda för högt eller lågt tryck' },
        { typ: 'text', text: 'Naturen är full av samma lösningar. En kamel har breda, mjuka fötter som inte sjunker ned i sanden. Ett lodjur har stora, håriga tassar som fungerar som snöskor, och därför kan det jaga i djup snö. Ankans simhud gör foten bred, vilket hjälper både i vattnet och på mjuk dy.' },
        { typ: 'text', text: 'Andra djur behöver högt tryck. Rovdjurens hörntänder och rovfåglarnas klor är spetsiga, så att de lätt tränger in. En mygga sticker med en snabel som är tunnare än ett hårstrå, och därför räcker en mycket liten kraft för att den ska komma genom huden. Rosens taggar och kaktusens taggar skyddar växterna med samma knep.' },
        { typ: 'rubrik', text: 'Trycket räknas ut som kraft delat med area' },
        { typ: 'text', text: 'Tryck kan räknas ut med en formel. Man delar kraften med arean som kraften fördelas på.' },
        { typ: 'formel', uttryck: 'p = F / A', forklaring: 'p trycket (Pa), F kraften (N), A arean (m²)' },
        { typ: 'exempel', rubrik: 'Kängor eller skidor', stycken: [
          ['Lisa väger 60 kg, så hennes tyngd är ungefär 600 N. Med kängor på står hon på en yta som tillsammans är 0,04 m². På skidor är ytan ungefär 0,25 m². Hur stort är trycket mot snön i de två fallen?'],
          ['Givet: F = 600 N, A = 0,04 m² med kängor och 0,25 m² med skidor. Sökt: trycket p.'],
          ['Lösning: Med kängor:',
           'p = 600 N / 0,04 m² = 15 000 Pa = 15 kPa',
           'Med skidor:',
           'p = 600 N / 0,25 m² = 2 400 Pa = 2,4 kPa',
           'Svar: Med kängor är trycket 15 kPa och med skidor 2,4 kPa, alltså drygt sex gånger lägre. Därför sjunker hon inte ned med skidor.']
        ] },
        { typ: 'text', text: 'Arean måste vara i kvadratmeter. Kom ihåg att 1 m² är 10 000 cm², eftersom en kvadratmeter är 100 cm åt båda hållen.' }
      ]
    },
    {
      id: 'hydraulik', titel: 'Tryck kan lyfta tungt med hydraulik',
      block: [
        { typ: 'rubrik', text: 'Ett tryck i en vätska sprids åt alla håll' },
        { typ: 'text', text: 'Fyll en plastpåse med vatten, knyt ihop den och stick några hål i den med en nål. Kläm sedan på påsen. Vattnet sprutar ut genom alla hål, åt alla håll, inte bara åt det håll du klämmer. Trycket du skapar på ett ställe sprids genom hela vätskan.' },
        { typ: 'text', text: 'Det beror på att en vätska nästan inte går att trycka ihop. Molekylerna ligger redan tätt intill varandra. När du trycker på vätskan på ett ställe trycker molekylerna på varandra hela vägen genom vätskan. Trycket blir lika stort överallt i en sluten behållare.' },
        { typ: 'rubrik', text: 'En liten kolv kan ge en stor kraft' },
        { typ: 'text', text: 'Det används i *hydraulik*. I en hydraulisk lyft finns två cylindrar fyllda med olja och sammankopplade med ett rör. I varje cylinder finns en rörlig platta som kallas *kolv*. Den ena kolven är liten och den andra är stor.' },
        { typ: 'text', text: 'När du trycker på den lilla kolven skapar du ett tryck i oljan. Eftersom trycket är lika stort överallt trycker oljan lika mycket på varje kvadratcentimeter av den stora kolven. Men den stora kolven har mycket större yta. Därför blir kraften på den mycket större. Om den stora kolven har 50 gånger så stor yta blir kraften 50 gånger så stor.' },
        // [BILD V2: hydraulisk lyft – liten kolv med en kort pil nedåt (liten kraft), stor kolv med en lång pil uppåt (stor kraft) under en bil, oljan emellan; samma tryck markerat i båda cylindrarna]
        { typ: 'rubrik', text: 'Hydraulik finns i bromsar, grävmaskiner och lyftar' },
        { typ: 'text', text: 'En bilverkstad lyfter bilar med hydrauliska lyftar, och en domkraft lyfter en bil med hjälp av en liten pump. En grävmaskin rör skopan och armen med hydraulcylindrar, och därför kan den lyfta flera ton. Även bilens bromsar är hydrauliska. När du trampar på bromspedalen trycker du på en liten kolv. Trycket sprids genom bromsvätskan ut till alla fyra hjulen, där större kolvar trycker bromsbeläggen hårt mot bromsskivorna.' },
        { typ: 'text', text: 'Men hydrauliken ger ingenting gratis. Den lilla kolven måste röras mycket längre än den stora. Ska bilen lyftas en centimeter måste du pressa ned den lilla kolven 50 centimeter, eller pumpa många gånger. Man vinner kraft men förlorar väg. Det gäller för alla maskiner, och det kommer du att se mer av i texten om hävstången och enkla maskiner.' }
      ]
    },
    {
      id: 'lyftkraft', titel: 'Tryckskillnader i vatten ger lyftkraft',
      block: [
        { typ: 'rubrik', text: 'Trycket i vatten ökar med djupet' },
        { typ: 'text', text: 'Om du dyker till botten av en djup bassäng känner du ett tryck i öronen. Det beror på att vattnet ovanför dig väger något. Ju djupare du kommer, desto mer vatten finns ovanför, och desto högre blir trycket. För varje meter ned ökar trycket med ungefär 10 kPa. På 10 meters djup har trycket alltså ökat med lika mycket som hela lufttrycket.' },
        { typ: 'text', text: 'Trycket i vattnet verkar åt alla håll, inte bara nedåt. Det trycker lika mycket från sidan och underifrån som ovanifrån på samma djup. Därför känns trycket i öronen likadant oavsett hur du vrider huvudet.' },
        { typ: 'rubrik', text: 'Vattnet trycker hårdare underifrån än ovanifrån' },
        { typ: 'text', text: 'Tänk dig en kloss som hålls under vattnet. Vattnet trycker på klossen från alla håll. Trycket från sidorna tar ut varandra. Men klossens undersida ligger djupare än ovansidan, och där är trycket högre. Därför trycker vattnet hårdare uppåt mot undersidan än nedåt mot ovansidan.' },
        { typ: 'text', text: 'Skillnaden blir en resulterande kraft uppåt. Den kallas *lyftkraft*. Det är därför en sten känns lättare att lyfta under vatten, och därför du kan bära en kompis i bassängen som du aldrig hade orkat lyfta på land.' },
        // [BILD V3: kloss nedsänkt i vatten – tryckpilar mot alla sidor, längre pilar mot undersidan än mot ovansidan, och den resulterande lyftkraften uppåt]
        { typ: 'rubrik', text: 'Lyftkraften är lika stor som tyngden av vattnet som trycks undan' },
        { typ: 'text', text: 'När ett föremål sänks ned i vatten måste vattnet flytta på sig. Föremålet tränger undan vatten. Lyftkraften är exakt lika stor som tyngden av det vatten som trängs undan. Det kallas *Arkimedes princip*, efter den grekiske forskaren Arkimedes som levde för över 2 000 år sedan.' },
        { typ: 'text', text: 'En liter vatten väger ungefär 1 kg. Om en sten tränger undan en liter vatten blir lyftkraften därför ungefär 10 N. Väger stenen mer än 1 kg sjunker den, eftersom tyngden är större än lyftkraften. Men den känns lättare under vattnet.' },
        { typ: 'rubrik', text: 'Ett föremål flyter när lyftkraften kan bli lika stor som tyngden' },
        { typ: 'text', text: 'När du lägger en bit trä i vatten sjunker den ned en bit. Ju djupare den sjunker, desto mer vatten tränger den undan, och desto större blir lyftkraften. När lyftkraften har blivit lika stor som träbitens tyngd slutar den att sjunka. Då flyter den. Krafterna är i jämvikt.' },
        { typ: 'text', text: 'En sten kan aldrig tränga undan tillräckligt mycket vatten. Även när den är helt under vattnet är lyftkraften mindre än tyngden, och därför sjunker den. Om något flyter eller sjunker beror alltså på om det kan tränga undan så mycket vatten att vattnet väger lika mycket som föremålet. För ett massivt föremål avgörs det av densiteten. Ett föremål med lägre densitet än vatten flyter, och ett föremål med högre densitet sjunker.' },
        { typ: 'rubrik', text: 'Många tror att tunga saker sjunker och lätta saker flyter' },
        { typ: 'text', text: 'Ett gem väger nästan ingenting, men det sjunker. Ett stort fartyg av stål väger tiotusentals ton, men det flyter. Det är alltså inte vikten som avgör. Det är hur mycket vatten föremålet tränger undan jämfört med hur mycket det väger.' },
        { typ: 'text', text: 'Ett fartyg är ihåligt. Skrovet är fullt av luft, och därför tränger fartyget undan en enorm mängd vatten. Så länge det undanträngda vattnet väger lika mycket som fartyget flyter det. Om fartyget får ett hål i skrovet rinner vatten in, luften försvinner, och då kan det sjunka. Lyftkraft finns förresten inte bara i vatten utan i alla vätskor och gaser, också i luft. Därför stiger en heliumballong: den tränger undan luft som väger mer än ballongen.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tryck är kraft fördelad på en yta. Samma kraft på en mindre yta ger högre tryck.',
          'Tryck mäts i pascal, Pa. 1 Pa är 1 N per kvadratmeter, och 1 kPa är 1 000 Pa. Trycket räknas ut med p = F / A.',
          'Högt tryck är bra när något ska skära, sticka eller få fäste. Det kan skada när det trycker sönder ett underlag.',
          'Breda däck, band, snöskor och breda tassar fördelar tyngden så att trycket blir lågt.',
          'Ett tryck i en vätska sprids lika mycket åt alla håll. Med hydraulik kan en liten kraft på en liten kolv bli en stor kraft på en stor kolv, men den lilla kolven måste röras längre.',
          'Trycket i vatten ökar med djupet, ungefär 10 kPa per meter.',
          'Vattnet trycker hårdare underifrån än ovanifrån. Skillnaden är lyftkraften.',
          'Lyftkraften är lika stor som tyngden av det undanträngda vattnet. Ett föremål flyter när lyftkraften kan bli lika stor som tyngden.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
