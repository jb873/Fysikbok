/* Avsnittssida I. Solsystemet och jorden, text C Jordklotet – nivån standard. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-Standard-A-D-redigerad.md (# Text C), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats tills figuren ritas (steg 3).
 * Begreppen (*ord*) är markerade som i Enkel och Fördjupning för samma text, första gången de står i den här texten
 * (arbetsorder 9; listan i rapporten, Joachim stryker): jordglob, gravitationen (gravitation), jordaxeln (jordaxel), roterar, atmosfär, växthusgaser.
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'text', text: 'Jorden är vårt hem i universum, men den är också en planet bland många andra. Från marken kan jorden kännas platt och stillastående, men från rymden ser vi ett nästan klotformat föremål som hela tiden rör sig. Genom att studera jordens form, rörelser och förhållanden kan vi förstå varför vår planet fungerar som den gör.' }
      ]
    },
    {
      id: 'jorden-ar-en-planet-i-standig-rorelse', titel: 'Jorden är en planet i ständig rörelse',
      block: [
        { typ: 'rubrik', text: 'Jorden är nästan klotformad' },
        { typ: 'text', text: 'Jorden är den tredje planeten från solen och den största av solsystemets fyra stenplaneter. Den har en diameter på ungefär 12 700 kilometer och ett omfång runt ekvatorn på cirka 40 000 kilometer. Jorden är nästan klotformad, men den är något tillplattad vid polerna och lite bredare vid ekvatorn.' },
        { typ: 'text', text: 'Att jorden är rund är svårt att upptäcka när vi står på marken eftersom planeten är så stor. Om du står vid havet ser horisonten ganska rak ut, trots att havsytan följer jordens krökning. På samma sätt kan en liten del av en stor boll se nästan platt ut när vi undersöker den på nära håll.' },
        { typ: 'text', text: 'En *jordglob* är en modell som visar jordens form och hur kontinenter och hav är placerade. Den hjälper oss att förstå sådant som är svårt att se på en platt karta, exempelvis att det går att färdas runt jorden. Jordgloben visar däremot inte jordens verkliga tillplattning eller höjdskillnaderna mellan berg och hav på ett märkbart sätt.' },
        { typ: 'rubrik', text: 'Gravitationen drar allt mot jordens centrum' },
        { typ: 'text', text: 'Jorden har en stor massa och påverkar därför föremål i sin omgivning genom *gravitationen|gravitation*. Den kraften gör att människor, vatten och luft hålls kvar vid planeten. Gravitationen verkar mot jordens centrum, oavsett var på jordytan vi befinner oss.' },
        { typ: 'text', text: 'Många tror att människor på jordens undersida skulle kunna falla av eftersom de verkar stå upp och ner jämfört med oss. Men det finns ingen särskild riktning som är uppåt eller nedåt i hela universum. För människor i Sverige och människor i Australien betyder nedåt i båda fallen riktningen mot jordens centrum.' },
        { typ: 'text', text: 'Tänk dig en jordglob med små figurer som står på olika platser på ytan. Om vi ritar en pil från varje figur mot jordens mitt ser vi att pilarna pekar åt olika håll på bilden. Modellen visar hur gravitationens riktning beror på var man befinner sig. Den har en gräns: på en jordglob sitter figurerna fast med lim, men på den riktiga jorden är det gravitationen själv som håller kvar oss.' },
        // [BILD: Ett genomskuret jordklot med fyra människor placerade på olika delar av jordytan. Från varje människa går en kraftpil mot jordens centrum. Bilden ska tydligt visa att nedåt alltid är mot jordens mitt.]
        { typ: 'rubrik', text: 'Jorden rör sig på två sätt samtidigt' },
        { typ: 'text', text: 'Jorden snurrar runt en tänkt linje genom nordpolen och sydpolen, *jordaxeln|jordaxel*. Den rörelsen kallas rotation, och ett varv tar ungefär ett dygn. Samtidigt färdas jorden i en nästan cirkelformad bana runt solen, och ett varv tar ungefär ett år. Det är solens gravitation som håller kvar jorden i banan.' },
        { typ: 'text', text: 'Jordaxeln står inte rakt upp i förhållande till banan, utan lutar ungefär 23,5 grader. Lutningen pekar nästan åt samma håll i rymden under hela året. Vad rotationen och lutningen betyder för dag och natt, år och årstider läser du om i texten om dygn, månad, år och årstider.' }
      ]
    },
    {
      id: 'jordens-forhallanden-gor-liv-mojligt', titel: 'Jordens förhållanden gör liv möjligt',
      block: [
        { typ: 'rubrik', text: 'Jordens avstånd till solen ger lagom förhållanden' },
        { typ: 'text', text: 'Jorden ligger på ett avstånd från solen där temperaturerna kan tillåta flytande vatten på ytan. Om jorden låg betydligt närmare solen skulle den ta emot mer solenergi och riskera att bli för varm. Om den låg mycket längre bort skulle den få mindre energi och kunna bli betydligt kallare.' },
        { typ: 'text', text: 'Avståndet är däremot inte det enda som avgör temperaturen. Venus ligger närmare solen än jorden och har en mycket tät *atmosfär* som bidrar till en extremt hög temperatur. Mars ligger längre bort och har en tunn atmosfär, vilket bidrar till att planeten är kall. Atmosfärens egenskaper spelar alltså också stor roll.' },
        { typ: 'rubrik', text: 'Flytande vatten är en förutsättning för livet på jorden' },
        { typ: 'text', text: 'Ungefär 71 procent av jordens yta täcks av vatten. Det mesta finns i haven, men vatten finns också i sjöar, floder, glaciärer, marken och atmosfären. Vatten kan förekomma som fast is, flytande vatten och vattenånga.' },
        { typ: 'text', text: 'Alla levande organismer på jorden behöver vatten för att fungera. I kroppens celler sker många kemiska reaktioner i vatten, och olika ämnen kan transporteras genom att vara lösta i det. När forskare söker efter liv på andra planeter undersöker de därför ofta om där finns eller har funnits flytande vatten.' },
        { typ: 'rubrik', text: 'Atmosfären skyddar jorden och påverkar temperaturen' },
        { typ: 'text', text: 'Jorden omges av ett lager gaser som kallas atmosfären. Den består huvudsakligen av kväve och syre, men innehåller också mindre mängder andra gaser. Atmosfären gör det möjligt för oss att andas och bidrar till att skapa förhållanden där liv kan existera.' },
        { typ: 'text', text: 'Atmosfären skyddar också jordytan mot mycket av solens skadliga ultravioletta strålning och bromsar många små föremål från rymden. Dessutom håller *växthusgaser* kvar en del av den värme som jorden annars skulle förlora till rymden. Utan den naturliga växthuseffekten skulle jordens medeltemperatur vara betydligt lägre än i dag.' },
        { typ: 'rubrik', text: 'Jorden är en av många planeter i universum' },
        { typ: 'text', text: 'Under lång tid kände människan bara till planeterna i vårt eget solsystem. Med hjälp av moderna teleskop har astronomer upptäckt tusentals planeter som kretsar kring andra stjärnor. Några av dessa planeter ligger på avstånd från sina stjärnor där flytande vatten skulle kunna förekomma under rätt förhållanden.' },
        { typ: 'text', text: 'Forskare undersöker bland annat planeternas storlek, temperatur och atmosfärer för att bedöma om liv skulle kunna finnas där. Ännu har vi inga säkra bevis för liv utanför jorden. Genom att jämföra andra planeter med vår egen kan vi däremot lära oss mer om varför förhållandena på jorden är så speciella.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'Jorden är den tredje planeten från solen och är nästan klotformad.',
          'Gravitationen drar föremål mot jordens centrum.',
          'Jorden *roterar* runt sin axel och färdas samtidigt runt solen.',
          'Jordaxeln lutar ungefär 23,5 grader.',
          'Jordens avstånd till solen, flytande vatten och atmosfären bidrar till att liv kan finnas här.',
          'Atmosfären skyddar jorden och påverkar temperaturen.',
          'Astronomer undersöker andra planeter för att söka efter förhållanden där liv kan finnas.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
