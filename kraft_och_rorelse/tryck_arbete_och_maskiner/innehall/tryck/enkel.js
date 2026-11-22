/* Avsnittssida V. Tryck, arbete och maskiner, text A: Tryck – nivån enkel (📗).
 * Arbetsorder 21 (2026-11-12; källan v5: arbetsorder 36, 2026-11-22): kallor/kap3/V-A-Tryck-alla-nivaer-v5.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text va: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-va.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tryck' },
        { typ: 'text', text: 'Tänk på en kniv. Den skarpa sidan skär lätt genom en tomat. Men om du vänder kniven och trycker med den trubbiga sidan händer nästan ingenting, fast du trycker lika hårt. Eller tänk på djup snö. Med vanliga skor sjunker du ned till knäna. Med skidor glider du ovanpå.' },
        { typ: 'text', text: 'Varför blir det så olika? Svaret är ett begrepp som heter *tryck*. Tryck handlar inte bara om hur hårt något trycker. Det handlar om hur stor yta kraften sprids ut på. I den här texten får du se hur tryck förklarar allt från knivar och traktorer till varför stora fartyg flyter.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *tryck* är, och hur man mäter det',
          'när ett högt tryck är bra och när det är dåligt',
          'hur fordon och djur är byggda för att inte sjunka ned',
          'hur man kan lyfta en bil med liten kraft med hjälp av *hydraulik*',
          'varför vatten trycker saker uppåt, och varför något flyter eller sjunker'
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
        { typ: 'rubrik', text: 'Samma kraft kan kännas helt olika' },
        { typ: 'text', text: 'Ta en vässad blyertspenna. Håll den mellan tummen och pekfingret, så att spetsen är mot pekfingret och den trubbiga änden mot tummen. Tryck ihop fingrarna lätt.' },
        { typ: 'text', text: 'Du märker att det gör ont i pekfingret, där spetsen är. Men det gör inte ont i tummen. Det konstiga är att pennan trycker lika hårt på båda fingrarna. Det beror på att pennan står still. Om tummen tryckte hårdare än pekfingret skulle pennan röra sig mot pekfingret. När den står still trycker fingrarna lika hårt från båda hållen, och då trycker pennan lika hårt tillbaka mot båda.' },
        { typ: 'text', text: 'Så varför gör det bara ont i det ena fingret? Det beror på ytan. Spetsen är mycket liten. Där samlas hela kraften på en pytteliten plats på huden. Den trubbiga änden är större. Där sprids samma kraft ut över en större yta, så varje liten del av tummen får bara lite av kraften.' },
        { typ: 'rubrik', text: 'Tryck är hur mycket kraft varje del av ytan får' },
        { typ: 'text', text: 'Det här är vad *tryck* betyder. Tryck är hur mycket kraft som trycker på varje liten del av en yta.' },
        { typ: 'text', text: 'Det finns två regler att komma ihåg:' },
        { typ: 'punkter', punkter: [
          'Om samma kraft trycker på en liten yta blir trycket högt.',
          'Om samma kraft trycker på en stor yta blir trycket lågt.'
        ] },
        { typ: 'text', text: 'Tänk på snön igen. Du väger lika mycket med skor som med skidor. Kraften mot snön är alltså lika stor. Men skorna är små, så kraften samlas på en liten yta. Trycket blir högt, och snön ger efter. Skidorna är långa och breda. Samma kraft sprids ut över en mycket större yta. Trycket blir lågt, och snön håller.' },
        // [BILD V1: samma person i djup snö två gånger – med kängor (liten yta, sjunker ned) och med snöskor (stor yta, står kvar ovanpå); tyngden lika stor i båda, utritad som lika långa pilar]
        { id: 'bild-v1', typ: 'figur', namn: 'tryck', lage: 'sno', tyngd: 600, skor: [{ namn: 'kängor', langd: 0.3 }, { namn: 'snöskor', langd: 0.8 }], bildtext: 'Tyngden är lika stor i båda bilderna. Med kängor samlas den på en liten yta, och trycket blir högt. Med snöskor fördelas den på en stor yta, och trycket blir lågt.' },
        { typ: 'rubrik', text: 'Tryck mäts i pascal' },
        { typ: 'text', text: 'Tryck är kraft på en yta. Kraft mäter vi i newton och yta i kvadratmeter. Därför mäts tryck i newton per kvadratmeter. Den enheten har fått ett eget namn: *pascal*. Den skrivs Pa och har fått sitt namn efter en fransk forskare som hette Blaise Pascal.' },
        { typ: 'text', text: '1 Pa betyder att en kraft på 1 newton sprids ut över en hel kvadratmeter. Det är ett väldigt litet tryck. Ett papper som ligger på ett bord trycker ungefär så mycket på bordet. Därför använder man oftast en större enhet, *kilopascal*, som skrivs kPa. 1 kPa är 1 000 Pa. Luften omkring oss trycker på oss med ungefär 100 kPa, utan att vi märker det.' },
        { typ: 'text', text: 'Tryck mäts med en *tryckmätare*. På bensinstationer finns tryckmätare för bildäck. Där står trycket ofta i en annan enhet, bar. 1 bar är samma sak som 100 kPa. En personbil har oftast lite mer än 2 bar i däcken.' },
        { typ: 'rubrik', text: 'Ett högt tryck är bra när något ska skära eller sticka' },
        { typ: 'text', text: 'Allt som skär eller sticker använder högt tryck. En kniv har en egg som är mycket tunn. När du trycker på kniven samlas kraften på den tunna eggen, och trycket blir så högt att tomaten går sönder. En slö kniv har en tjockare egg. Kraften sprids ut på en större yta, och trycket blir lägre. Därför måste du trycka mycket hårdare med en slö kniv.' },
        { typ: 'text', text: 'Samma sak gäller för en spik, en nål, en sax och en yxa. Spetsen eller eggen är liten, och därför blir trycket högt fast kraften inte är så stor.' },
        { typ: 'text', text: 'Högt tryck hjälper också till att få fäste. Dubbdäck har små metallstift. Varje stift har en liten yta, så trycket blir högt och stiften trycks ned i isen. Då slirar inte bilen. Fotbollsskor har dobbar av samma skäl. Dobbarna trycks ned i gräset och ger fäste.' },
        { typ: 'rubrik', text: 'Ett högt tryck kan också förstöra' },
        { typ: 'text', text: 'Tryck kan även göra skada. En smal klack på en sko har en mycket liten yta, kanske en kvadratcentimeter. När personen tar ett steg vilar nästan hela kroppens tyngd på den lilla klacken. Trycket blir så högt att ett mjukt trägolv får små gropar. Därför får man inte gå med smala klackar på vissa gamla golv.' },
        { typ: 'text', text: 'Har du burit en tung påse med tunna handtag? Handtagen skär in i fingrarna. Bär du samma påse med breda handtag känns den mycket bättre. Påsen väger lika mycket. Men med breda handtag sprids kraften ut på en större del av handen, och då blir trycket lägre. Det är därför en bra ryggsäck har breda, mjuka remmar.' },
        { typ: 'text', text: 'En madrass gör samma sak. Den formar sig efter kroppen, så att tyngden sprids ut på en stor yta. Även en spikmatta fungerar så. Varje spik är vass, men det finns tusentals spikar. Tyngden delas mellan alla, så varje spik trycker bara lite.' },
        { typ: 'rubrik', text: 'Tunga fordon behöver breda däck eller band' },
        { typ: 'text', text: 'En traktor kör ofta på mjuk åkermark. Om den hade smala däck skulle hela den tunga traktorn tryckas ned på en liten yta. Trycket skulle bli högt, och traktorn skulle sjunka ned i jorden. Därför har traktorer stora, breda däck. Tyngden sprids ut, trycket blir lägre, och traktorn stannar ovanpå marken.' },
        { typ: 'text', text: 'Det finns ett skäl till. När marken trycks ihop blir den hård, och då får växterna svårt att växa. Breda däck skyddar alltså också jorden.' },
        { typ: 'text', text: 'Skogsmaskiner, pistmaskiner i skidbackar och snöskotrar har ofta band i stället för hjul. Ett band ligger mot marken på en lång sträcka. Då blir ytan mycket stor och trycket mycket lågt.' },
        { typ: 'text', text: 'Stora lastbilar har många hjul. De behöver inte så många hjul för att rulla. Men om hela den tunga lasten låg på få hjul skulle trycket mot vägen bli så högt att asfalten gick sönder. Fler hjul betyder att tyngden delas på fler ställen.' },
        { typ: 'text', text: 'Den som kör bil i djup sand brukar släppa ut lite luft ur däcken. Ett mjukare däck plattas till mot marken, och då blir ytan mot sanden större. Trycket blir lägre, och bilen sjunker inte ned.' },
        { typ: 'rubrik', text: 'Djur och växter använder också tryck' },
        { typ: 'text', text: 'Naturen använder samma knep. En kamel går i mjuk sand hela dagarna. Den har breda, mjuka fötter, så att den inte sjunker ned. Ett lodjur har stora tassar med mycket päls. De fungerar som snöskor, och därför kan lodjuret springa i djup snö.' },
        { typ: 'text', text: 'Andra djur behöver högt tryck. Rovdjurs hörntänder och rovfåglars klor är spetsiga, så att de lätt tränger in i bytet. En mygga har en snabel som är tunnare än ett hårstrå. Därför behöver myggan bara en mycket liten kraft för att sticka genom huden. Även växter använder högt tryck. Rosor och kaktusar har vassa taggar som skyddar dem mot djur som vill äta dem.' },
        { typ: 'rubrik', text: 'Man räknar ut tryck genom att dela kraften med arean' },
        { typ: 'text', text: 'Tryck kan räknas ut. Man tar kraften och delar med arean, alltså med hur stor ytan är. Det är kraften som trycker rakt mot ytan som räknas. En kraft som bara drar längs ytan trycker inte mot den.' },
        { typ: 'formel', uttryck: 'p = F / A', forklaring: 'p trycket (Pa), F kraften (N), A arean (m²)' },
        { typ: 'text', text: 'Bokstaven p står för tryck, F står för kraft och A står för area. Kraften ska vara i newton och arean i kvadratmeter. Då blir trycket i pascal.' },
        { typ: 'exempel', rubrik: 'Kängor eller skidor', stycken: [
          ['Lisa väger 60 kg. Hennes tyngd är då ungefär 600 N. Med kängor står hon på en yta som tillsammans är 0,04 m². På skidor står hon på en yta som är ungefär 0,25 m². Hur stort blir trycket mot snön?'],
          ['Givet: Kraften är 600 N. Arean är 0,04 m² med kängor och 0,25 m² med skidor. Sökt: trycket.'],
          ['Lösning: Dela kraften med arean. Först med kängor:',
           'p = 600 N / 0,04 m² = 15 000 Pa',
           '15 000 Pa är 15 kPa.',
           'Sedan med skidor:',
           'p = 600 N / 0,25 m² = 2 400 Pa',
           '2 400 Pa är 2,4 kPa.',
           'Svar: Med kängor blir trycket 15 kPa. Med skidor blir det 2,4 kPa, alltså drygt sex gånger lägre. Därför sjunker Lisa inte ned när hon har skidor.']
        ] },
        { typ: 'text', text: 'Var noga med arean. Den ska vara i kvadratmeter. En kvadratmeter är en kvadrat som är 100 cm åt båda hållen. Den rymmer alltså 100 · 100 = 10 000 kvadratcentimeter. Om en yta är angiven i cm² måste du dela med 10 000 för att få den i m².' }
      ]
    },
    {
      id: 'hydraulik', titel: 'Tryck kan lyfta tungt med hydraulik',
      block: [
        { typ: 'rubrik', text: 'Vatten sprider trycket åt alla håll' },
        { typ: 'text', text: 'Gör så här: fyll en plastpåse med vatten och knyt ihop den. Stick några små hål runt om i påsen med en nål. Kläm sedan på påsen ovanifrån.' },
        { typ: 'text', text: 'Vattnet sprutar ut ur alla hålen. Det sprutar åt sidorna, nedåt och snett uppåt, inte bara åt det håll du klämmer. Trycket du gör på ett ställe sprids alltså till hela vattnet.' },
        { typ: 'text', text: 'Det beror på att vatten nästan inte går att trycka ihop. Vattnets molekyler ligger redan tätt intill varandra. När du trycker på dem på ett ställe finns det ingen plats att trycka ihop dem på. I stället trycker de på molekylerna bredvid, som trycker på nästa, och så vidare genom hela vätskan. I en sluten behållare ökar trycket därför lika mycket överallt. Längre ned är trycket alltid lite högre, eftersom vätskan själv väger något. Men det extra tryck som du skapar sprids lika mycket till alla delar av vätskan.' },
        { typ: 'rubrik', text: 'Två kolvar kan förvandla en liten kraft till en stor' },
        { typ: 'text', text: 'Det här används i *hydraulik*. En hydraulisk lyft består av två rör, eller cylindrar, fyllda med olja. Cylindrarna är kopplade till varandra. I varje cylinder finns en platta som kan glida upp och ned. Plattan kallas *kolv*. Den ena kolven är liten och den andra är stor.' },
        { typ: 'text', text: 'Så här fungerar det, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Du trycker på den lilla kolven. Den har liten yta, så även en liten kraft ger ett ganska högt tryck i oljan.',
          'Tryckökningen sprids genom oljan och blir lika stor överallt, också under den stora kolven.',
          'Den stora kolven har mycket större yta. Varje liten del av den får lika mycket tryck. Därför blir den totala kraften på den stora kolven mycket stor.'
        ] },
        { typ: 'text', text: 'Om den stora kolven är 50 gånger så stor som den lilla blir kraften 50 gånger så stor. Då kan du lyfta en bil med en kraft som du klarar med armarna.' },
        // [BILD V2: hydraulisk lyft – liten kolv med en kort pil nedåt (liten kraft), stor kolv med en lång pil uppåt (stor kraft) under en bil, oljan emellan; samma tryck markerat i båda cylindrarna]
        { id: 'bild-v2', typ: 'figur', namn: 'tryck', lage: 'hydraulik', areor: [2, 100], bildtext: 'Trycket är lika stort i hela oljan. Den stora kolven har mycket större yta, och därför blir kraften på den mycket större.' },
        { typ: 'rubrik', text: 'Hydraulik finns i många maskiner' },
        { typ: 'text', text: 'På en bilverkstad lyfts bilar upp med hydrauliska lyftar. Om en bil får punktering kan föraren lyfta den med en domkraft, och många domkrafter är hydrauliska. En grävmaskin har hydraulcylindrar som rör armen och skopan, och därför kan den lyfta flera ton jord.' },
        { typ: 'text', text: 'Bilens bromsar är också hydrauliska. När föraren trampar på bromspedalen trycker pedalen på en liten kolv. Trycket sprids genom en vätska, bromsvätska, i tunna rör ut till hjulen. Där finns kolvar som pressar bromsbeläggen hårt mot bromsskivorna. På så sätt kan en fot stoppa en bil som väger över ett ton.' },
        { typ: 'rubrik', text: 'Hydrauliken ger inget gratis' },
        { typ: 'text', text: 'Det låter nästan för bra för att vara sant. Men det finns ett pris. När den lilla kolven trycks ned flyttar den lite olja. Den oljan ska fördelas under den stora kolven, som är mycket bredare. Därför rör sig den stora kolven bara en liten bit.' },
        { typ: 'text', text: 'Om den stora kolven är 50 gånger så stor måste du alltså trycka ned den lilla kolven 50 centimeter för att den stora ska lyftas en centimeter. Det är därför man pumpar många gånger med en domkraft. Man vinner kraft men förlorar väg. Det gäller för alla maskiner, och mer om det kommer i texten om maskiner och effekt.' }
      ]
    },
    {
      id: 'lyftkraft', titel: 'Tryckskillnader i vatten ger lyftkraft',
      block: [
        { typ: 'rubrik', text: 'Ju djupare du dyker, desto högre blir trycket' },
        { typ: 'text', text: 'Har du dykt ned till botten i den djupa delen av en bassäng? Då har du kanske känt att det trycker i öronen. Det beror på vattnet ovanför dig. Vatten väger något, och allt vatten ovanför dig trycker på dig.' },
        { typ: 'text', text: 'Ju djupare du dyker, desto mer vatten finns ovanför dig. Därför blir trycket högre ju längre ned du kommer. För varje meter ökar trycket med ungefär 10 kPa. På 10 meters djup har trycket ökat lika mycket som hela luftens tryck.' },
        { typ: 'text', text: 'Vattnet trycker inte bara nedåt. Det trycker från alla håll: ovanifrån, från sidorna och underifrån. På samma djup är trycket lika stort åt alla håll. Därför känns det likadant i öronen även om du vrider på huvudet.' },
        { typ: 'rubrik', text: 'Vattnet trycker hårdare på undersidan' },
        { typ: 'text', text: 'Tänk dig en kloss som hålls under vattenytan. Vattnet trycker på klossen från alla håll.' },
        { typ: 'punkter', punkter: [
          'Från sidorna trycker vattnet lika mycket från vänster som från höger. De krafterna tar ut varandra.',
          'Ovansidan av klossen ligger lite högre upp i vattnet. Där är trycket lite lägre.',
          'Undersidan ligger lite djupare. Där är trycket lite högre.'
        ] },
        { typ: 'text', text: 'Vattnet trycker alltså hårdare uppåt på undersidan än nedåt på ovansidan. Skillnaden blir en kraft som pekar uppåt. Den kraften kallas *lyftkraft*.' },
        // [BILD V3: kloss nedsänkt i vatten – tryckpilar mot alla sidor, längre pilar mot undersidan än mot ovansidan, och den resulterande lyftkraften uppåt]
        { id: 'bild-v3', typ: 'figur', namn: 'tryck', lage: 'lyftkraft', djup: 0.7, bildtext: 'Vattnet trycker hårdare ju djupare det är. Trycket mot undersidan är större än mot ovansidan, och skillnaden är lyftkraften.' },
        { typ: 'text', text: 'Du har säkert känt lyftkraften. Under vattnet kan du lyfta en kompis som du inte orkar lyfta på land. En sten på botten av en sjö känns lättare än samma sten på stranden. Stenen väger lika mycket, men vattnet hjälper till att lyfta den.' },
        { typ: 'rubrik', text: 'Lyftkraften är lika stor som tyngden av vattnet som trycks undan' },
        { typ: 'text', text: 'När du kliver ned i ett badkar stiger vattnet. Din kropp tar plats, och vattnet måste flytta på sig. Man säger att kroppen tränger undan vatten.' },
        { typ: 'text', text: 'Lyftkraften är precis lika stor som tyngden av det vatten som trängs undan. Den regeln kallas *Arkimedes princip*. Den har fått sitt namn efter Arkimedes, en grekisk forskare som levde för mer än 2 000 år sedan.' },
        { typ: 'text', text: 'En liter vatten väger ungefär 1 kg. Om en sten är helt under vattnet och tränger undan en liter vatten blir lyftkraften därför ungefär 10 N. Det är lika mycket som tyngden av en liter vatten. En större sten tränger undan mer vatten och får större lyftkraft. Om stenen som tränger undan en liter väger mer än 1 kg är dess tyngd större än lyftkraften, och då sjunker den. Men den känns lättare än på land.' },
        { typ: 'rubrik', text: 'Något flyter när lyftkraften blir lika stor som tyngden' },
        { typ: 'text', text: 'Lägg en träbit i vatten. Först sjunker den ned en bit. Ju längre ned den sjunker, desto mer vatten tränger den undan. Och ju mer vatten den tränger undan, desto större blir lyftkraften.' },
        { typ: 'text', text: 'Till slut blir lyftkraften lika stor som träbitens tyngd. Då tar krafterna ut varandra, och träbiten slutar sjunka. Den flyter.' },
        { typ: 'text', text: 'En vanlig sten kan inte göra så. Även när hela stenen är under vattnet tränger den inte undan tillräckligt mycket vatten. Lyftkraften blir mindre än tyngden, och stenen sjunker till botten. Det finns dock en sten som flyter: pimpsten. Den bildas vid vulkanutbrott och är full av små hål med gas.' },
        { typ: 'text', text: 'För ett föremål som är massivt, alltså helt fyllt med samma material, handlar det om densitet. Om föremålet har lägre densitet än vatten flyter det. Om det har högre densitet än vatten sjunker det. Trä har lägre densitet än vatten. Sten och järn har högre.' },
        { typ: 'text', text: 'Tänk dig en träkloss och en metallkloss som är precis lika stora. Du håller ned båda under vattnet. De tar lika stor plats, så de tränger undan lika mycket vatten. Då får de lika stor lyftkraft. Men när du släpper dem stiger träklossen, och metallklossen sjunker. Det beror inte på lyftkraften, för den är lika stor. Det beror på tyngden. Träklossens tyngd är mindre än lyftkraften, så den åker upp. Metallklossens tyngd är större än lyftkraften, så den åker ned.' },
        { typ: 'rubrik', text: 'Många tror att tunga saker sjunker och lätta saker flyter' },
        { typ: 'text', text: 'Ett gem väger nästan ingenting, men det sjunker. Ett stort fartyg av stål väger tiotusentals ton, men det flyter. Det är alltså inte bara vikten som avgör.' },
        { typ: 'text', text: 'Det som avgör är hur mycket vatten föremålet tränger undan jämfört med hur mycket det väger. Ett fartyg är ihåligt. Inuti skrovet finns mycket luft. Därför tar fartyget stor plats i vattnet och tränger undan en enorm mängd vatten. Det vattnet väger lika mycket som hela fartyget, och då flyter fartyget. Man kan också säga det så här: stålet och luften inuti väger tillsammans mindre än lika mycket vatten. Fartyget som helhet har lägre densitet än vatten.' },
        { typ: 'text', text: 'Om fartyget får ett hål i skrovet rinner vatten in, och luften trycks undan. Då väger fartyget mer, men det tränger inte undan mer vatten. Till slut blir tyngden större än lyftkraften, och fartyget sjunker.' },
        { typ: 'text', text: 'Lyftkraft finns inte bara i vatten. Den finns i alla vätskor och gaser, också i luft. En heliumballong stiger för att den tränger undan luft som väger mer än ballongen själv. Då blir lyftkraften från luften större än ballongens tyngd.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tryck är hur mycket kraft som trycker på varje del av en yta.',
          'Samma kraft på en liten yta ger högt tryck. Samma kraft på en stor yta ger lågt tryck.',
          'Tryck mäts i pascal, Pa. 1 kPa är 1 000 Pa. Man räknar ut tryck med p = F / A.',
          'Högt tryck är bra för att skära, sticka och få fäste, men det kan också förstöra till exempel golv.',
          'Breda däck, band, skidor och breda tassar sprider ut tyngden så att trycket blir lågt.',
          'Om du ökar trycket i en instängd vätska sprids ökningen lika mycket till hela vätskan. Hydraulik gör en liten kraft till en stor kraft, men den lilla kolven måste röras mycket längre.',
          'Trycket i vatten ökar med djupet, ungefär 10 kPa för varje meter.',
          'Vattnet trycker hårdare på undersidan av ett föremål än på ovansidan. Skillnaden är lyftkraften.',
          'Lyftkraften är lika stor som tyngden av vattnet som trängs undan. Ett föremål flyter när lyftkraften blir lika stor som dess tyngd.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
