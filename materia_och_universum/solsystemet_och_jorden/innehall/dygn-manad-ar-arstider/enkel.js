/* Avsnittssida I. Solsystemet och jorden, text D Dygn, månad, år och årstider – nivån enkel. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-D-Dygn-manad-ar-Enkel-Fordjupning.md (📗 ENKEL), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats tills figuren ritas (steg 3).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Dygn, månad, år och årstider' },
        { typ: 'text', text: 'Varför blir det natt? Varför är det varmt på sommaren och kallt på vintern? Och varför ser månen olika ut olika kvällar? Svaren finns i hur jorden och månen rör sig. I den här texten får du veta hur rörelserna ger oss dygn, månader, år och årstider.' }
      ]
    },
    {
      id: 'jordens-och-manens-rorelser-hjalper-oss-att-mata-tiden', titel: 'Jordens och månens rörelser hjälper oss att mäta tiden',
      block: [
        { typ: 'rubrik', text: 'Jorden snurrar ett varv på ett dygn' },
        { typ: 'text', text: 'Jorden snurrar hela tiden runt sin jordaxel. Ett varv tar ungefär 24 timmar. Det kallas ett *dygn*.' },
        { typ: 'text', text: 'Jorden snurrar från väster mot öster. Därför ser det ut som att solen går upp i öster på morgonen och ner i väster på kvällen. Men det är inte solen som rör sig över himlen. Det är vi som snurrar med jorden.' },
        { typ: 'rubrik', text: 'Det är dag på den sida som är vänd mot solen' },
        { typ: 'text', text: 'Solen lyser alltid på halva jorden. På den halvan är det dag. På den andra halvan, som är vänd bort från solen, är det natt. När jorden snurrar kommer du först in i ljuset, då blir det morgon. Sedan snurrar du vidare in i mörkret, då blir det kväll.' },
        { typ: 'text', text: 'Därför är det natt i Australien när det är dag i Sverige. Vi är på var sin sida av jorden.' },
        { typ: 'rubrik', text: 'Du kan visa dag och natt med en lampa och en jordglob' },
        { typ: 'text', text: 'Tänd en lampa i ett mörkt rum. Lampan är solen. Håll en jordglob en bit bort och snurra den långsamt. Då ser du hur olika länder kommer in i ljuset och sedan ut i mörkret igen.' },
        { typ: 'text', text: 'Modellen visar hur dag och natt uppstår. Men den visar inte hur stor solen är, eller hur långt bort den är. I verkligheten är solen mycket större än jorden och ligger väldigt långt bort.' },
        { typ: 'rubrik', text: 'Ett år är ett varv runt solen' },
        { typ: 'text', text: 'Samtidigt som jorden snurrar åker den runt solen. Ett varv runt solen tar ungefär 365 dygn och 6 timmar. Det kallas ett *år*.' },
        { typ: 'text', text: 'Men i vår kalender har ett vanligt år bara 365 dagar. De 6 timmarna blir över varje år. Efter fyra år har de blivit 24 timmar, alltså ett helt dygn.' },
        { typ: 'rubrik', text: 'Skottår gör att kalendern stämmer' },
        { typ: 'text', text: 'Därför har vi *skottår*. Ungefär vart fjärde år får februari en extra dag, den 29 februari. Då hinner kalendern ifatt jordens varv runt solen. Utan skottår skulle kalendern långsamt glida, och efter några hundra år skulle midsommar komma mitt i våren.' },
        { typ: 'text', text: 'Det finns några undantag. År som slutar på två nollor, som 1900 och 2100, är bara skottår om de går jämnt att dela med 400. Därför var 2000 ett skottår, men 2100 blir det inte.' },
        { typ: 'rubrik', text: 'Månen går runt jorden på ungefär en månad' },
        { typ: 'text', text: 'Månen åker runt jorden. Från en fullmåne till nästa tar det ungefär 29,5 dygn. Det är ungefär en *månad*, och ordet månad kommer faktiskt från månen.' },
        { typ: 'rubrik', text: 'Månen lyser inte själv' },
        { typ: 'text', text: 'Månen har inget eget ljus. Den lyser för att solen lyser på den. Precis som jorden är månen alltid belyst på den halva som är vänd mot solen. Den andra halvan är mörk.' },
        { typ: 'text', text: 'När månen åker runt jorden ser vi den från olika håll. Ibland ser vi hela den belysta halvan, ibland bara en bit av den och ibland ingenting. Det är det som kallas *månens faser*.' },
        { typ: 'rubrik', text: 'Månens faser följer varandra i en cykel' },
        { typ: 'text', text: 'Vid *nymåne* ligger månen mellan jorden och solen. Den belysta halvan är vänd bort från oss, och vi ser nästan ingenting. Sedan växer den belysta delen, kväll efter kväll. Vid *halvmåne* ser vi halva månskivan lysa.' },
        { typ: 'text', text: 'Vid *fullmåne* ligger jorden mellan solen och månen. Då ser vi hela den belysta halvan, och månen är helt rund. Sedan minskar den belysta delen igen, tills det blir nymåne och allt börjar om.' },
        // [BILD F: månens faser – månen i åtta lägen runt jorden, solljuset från ett håll, och hur månen ser ut från jorden i varje läge]
        { typ: 'rubrik', text: 'Jordens skugga ger inte månens faser' },
        { typ: 'text', text: 'Många tror att månens faser beror på att jordens skugga faller på månen. Men så är det inte. Faserna beror bara på från vilket håll vi ser den belysta halvan.' },
        { typ: 'text', text: 'Ibland faller jordens skugga faktiskt på månen. Det kallas en *månförmörkelse*. Men det är ovanligt och händer bara några gånger på ett par år, och bara vid fullmåne. Faserna ser vi varje månad.' }
      ]
    },
    {
      id: 'jordaxelns-lutning-skapar-arstiderna', titel: 'Jordaxelns lutning skapar årstiderna',
      block: [
        { typ: 'rubrik', text: 'Jordaxeln lutar hela året' },
        { typ: 'text', text: 'Jordaxeln står inte rakt upp. Den lutar ungefär 23,5 grader. Och den lutar åt samma håll ute i rymden hela året, medan jorden åker runt solen.' },
        { typ: 'text', text: 'Det gör att norra halvan av jorden, där Sverige ligger, ibland lutar mot solen och ibland lutar bort från solen. När norra halvan lutar mot solen har vi sommar. När den lutar bort från solen har vi vinter.' },
        { typ: 'rubrik', text: 'På sommaren står solen högt och dagarna är långa' },
        { typ: 'text', text: 'När norra halvan lutar mot solen står solen högt på himlen mitt på dagen. Dagarna blir långa och nätterna korta. Solen hinner värma marken länge varje dag.' },
        { typ: 'text', text: 'På vintern lutar norra halvan bort från solen. Då står solen lågt, även mitt på dagen. Dagarna blir korta och nätterna långa. Solen hinner inte värma så mycket.' },
        { typ: 'rubrik', text: 'Solljus rakt uppifrån värmer mer än snett solljus' },
        { typ: 'text', text: 'Det spelar stor roll om solljuset kommer rakt uppifrån eller snett. Prova med en ficklampa och ett bord. Lys rakt ner på bordet. Då blir ljusfläcken liten och stark. Luta nu ficklampan. Då blir ljusfläcken stor men svagare.' },
        { typ: 'text', text: 'Det är samma ljus, men det sprids ut på en större yta. Så är det med solljuset också. På sommaren kommer solljuset mer rakt uppifrån och värmer marken mycket. På vintern kommer det snett och sprids ut, och då värmer det mindre. Modellen visar inte allt som påverkar vädret, till exempel moln och vind, men den förklarar varför solen värmer olika mycket.' },
        { typ: 'rubrik', text: 'Årstiderna beror inte på avståndet till solen' },
        { typ: 'text', text: 'Många tror att det är sommar när jorden är nära solen och vinter när den är långt bort. Det låter logiskt, men det stämmer inte. Jorden är faktiskt närmast solen i början av januari, mitt i vår vinter. Avståndet ändras dessutom bara lite under året.' },
        { typ: 'text', text: 'Det finns ett enkelt sätt att se att avståndet inte kan vara orsaken. När vi har sommar i Sverige har de vinter i Australien. Om avståndet var orsaken skulle hela jorden ha sommar samtidigt. Det är alltså lutningen som avgör.' },
        // [BILD Å: jorden i fyra lägen runt solen med jordaxeln lutad åt samma håll – sommar och vinter på norra halvklotet]
        { typ: 'rubrik', text: 'Midnattssol och mörkertid finns i norra Sverige' },
        { typ: 'text', text: 'Långt norrut i Sverige ändras dagens längd mycket under året. Norr om *polcirkeln* går solen inte ner alls under några veckor på sommaren. Den är uppe hela natten. Det kallas *midnattssol*. Det beror på att norra delen av jorden då lutar så mycket mot solen att den är i ljuset hela dygnet, fast jorden snurrar.' },
        { typ: 'text', text: 'På vintern blir det tvärtom. Då går solen inte upp alls under en tid. Det kallas *mörkertid*. Men det är inte kolsvart hela dygnet. Mitt på dagen blir det ändå lite ljust, en skymning, och månen och snön kan lysa upp.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'Jorden snurrar ett varv på ett dygn. Det ger dag och natt.',
          'Jorden åker ett varv runt solen på ett år. Skottår gör att kalendern stämmer.',
          'Månen går runt jorden på ungefär en månad. Månen lyser inte själv.',
          'Månens faser beror på hur mycket av den belysta halvan vi ser, inte på jordens skugga.',
          'Årstiderna beror på att jordaxeln lutar, inte på avståndet till solen.',
          'På sommaren står solen högt, dagarna är långa och solljuset värmer mer.',
          'Midnattssol och mörkertid finns norr om polcirkeln.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
