/* Avsnittssida I. Solsystemet och jorden, text D Dygn, månad, år och årstider – nivån fordjupning. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-D-Dygn-manad-ar-Enkel-Fordjupning.md (📕 FÖRDJUPNING), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats, med figuren efter (steg 3).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Dygn, månad, år och årstider – fördjupning' },
        { typ: 'text', text: 'I Standard lärde du dig att dygn, månader, år och årstider beror på jordens och månens rörelser. Här blir modellen mer exakt. Du får se att ett dygn inte alltid är ett varv, att vår kalender har bytts ut, varför vi alltid ser samma sida av månen och varför det inte blir förmörkelse varje månad. Du får också räkna ut hur högt solen står i Sverige.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'skillnaden mellan *soldygn|soldygn* och *stjärndygn|stjärndygn*',
          'varför månen alltid visar samma sida, och när förmörkelser kan inträffa',
          'vad solstånd och dagjämningar är',
          'hur man räknar ut solens högsta höjd och var polcirkeln ligger'
        ] }
      ]
    },
    {
      id: 'tiden-och-manen', titel: 'Tiden och månen',
      block: [
        { typ: 'rubrik', text: 'Ett dygn är lite mer än ett varv' },
        { typ: 'text', text: 'Om du mäter hur lång tid det tar för en avlägsen stjärna att komma tillbaka till samma plats på himlen får du 23 timmar och 56 minuter. Det är den tid det tar för jorden att snurra exakt ett varv, och det kallas ett *stjärndygn*. Men vårt vanliga dygn, *soldygnet*, är 24 timmar. Varför skiljer det fyra minuter?' },
        { typ: 'text', text: 'Under det dygn jorden snurrar har den också hunnit flytta sig en bit i sin bana runt solen. Solen syns då från en lite annan vinkel, och jorden måste snurra lite mer än ett helt varv för att solen ska stå på samma plats på himlen igen. De fyra minuterna läggs till varje dygn. Under ett helt år blir det precis ett extra varv: jorden snurrar ungefär 366 varv på ett år som har 365 soldygn.' },
        { typ: 'rubrik', text: 'Kalendern har rättats flera gånger' },
        { typ: 'text', text: 'Den kalender som romarna införde, den julianska, hade ett skottår vart fjärde år. Men året är inte exakt 365 dygn och 6 timmar, utan några minuter kortare. Därför blev det för många skottår, och kalendern drog sig en dag fel på ungefär 128 år. På 1500-talet låg vårdagjämningen tio dagar för tidigt i kalendern.' },
        { typ: 'text', text: 'År 1582 infördes därför den gregorianska kalendern med regeln om år som slutar på två nollor. Den följer jordens varv så noga att den blir en dag fel först på ungefär 3 000 år. Sverige bytte kalender 1753. Då hoppade man direkt från den 17 februari till den 1 mars för att komma ikapp.' },
        { typ: 'rubrik', text: 'Månen visar alltid samma sida mot jorden' },
        { typ: 'text', text: 'Från jorden ser vi alltid samma sida av månen. Det betyder inte att månen står still. Den snurrar runt sin egen axel exakt lika fort som den går runt jorden: ett varv på ungefär 27 dygn. Därför vänder den hela tiden samma sida mot oss. Det kallas *bunden rotation*.' },
        { typ: 'text', text: 'Prova själv. Gå runt en stol och håll ansiktet vänt mot stolen hela tiden. När du har gått ett varv har du också vridit dig ett varv runt dig själv. Bunden rotation beror på att jordens gravitation under miljarder år har bromsat månens snurrande, tills det passade exakt med varvet runt jorden. Månens baksida är alltså inte mörk, den syns bara aldrig härifrån. Den kallas därför ibland månens frånsida.' },
        { typ: 'rubrik', text: 'Förmörkelser kräver att solen, jorden och månen står helt i linje' },
        { typ: 'text', text: 'Vid en *solförmörkelse* hamnar månen mellan solen och jorden och skymmer solen. Vid en *månförmörkelse* hamnar jorden mellan solen och månen, så att jordens skugga faller på månen. Solförmörkelser kan därför bara inträffa vid nymåne, och månförmörkelser bara vid fullmåne.' },
        { typ: 'text', text: 'Men det är nymåne och fullmåne varje månad. Varför blir det inte förmörkelse varje gång? Månens bana lutar ungefär 5 grader mot jordens bana runt solen. Oftast passerar månen därför lite ovanför eller under linjen mellan solen och jorden. Bara när nymånen eller fullmånen inträffar precis där banorna korsar varandra blir det förmörkelse. Det händer ett par gånger om året.' }
      ]
    },
    {
      id: 'solens-hojd', titel: 'Solens höjd och årstiderna',
      block: [
        { typ: 'rubrik', text: 'Solstånd och dagjämningar delar in året' },
        { typ: 'text', text: 'Fyra dagar om året har särskilda namn. Vid *sommarsolståndet*, omkring den 21 juni, lutar norra halvklotet som mest mot solen. Då står solen som högst och dagen är som längst. Vid *vintersolståndet*, omkring den 21 december, lutar norra halvklotet som mest bort från solen, och dagen är som kortast.' },
        { typ: 'text', text: 'Mitt emellan, omkring den 20 mars och den 23 september, är det *dagjämning*. Då lutar jordaxeln varken mot eller bort från solen, sett från solen. Dag och natt är då ungefär lika långa överallt på jorden, tolv timmar var.' },
        { typ: 'rubrik', text: 'Solens högsta höjd går att räkna ut' },
        { typ: 'text', text: 'Hur högt solen står mitt på dagen beror på var du bor och på årstiden. Vid dagjämning står solen lika många grader över horisonten som 90 grader minus platsens latitud. Stockholm ligger på ungefär 59 grader nordlig latitud. Vid dagjämning står solen där som högst 90 − 59 = 31 grader över horisonten.' },
        { typ: 'text', text: 'Vid sommarsolståndet lägger man till jordaxelns lutning, 23,5 grader. Då står solen i Stockholm ungefär 54 grader upp. Vid vintersolståndet drar man i stället ifrån lutningen, och solen når bara ungefär 7 grader över horisonten. Det är den stora skillnaden i solhöjd, och därmed i hur mycket solljuset värmer, som ger oss så tydliga årstider i Sverige.' },
        { typ: 'rubrik', text: 'Polcirkeln ligger där jordaxelns lutning bestämmer' },
        { typ: 'text', text: 'Polcirkeln är inte en slumpmässig linje. Den ligger på 90 − 23,5 = 66,5 grader nordlig latitud. Exakt på polcirkeln går solen precis inte ner vid sommarsolståndet och precis inte upp vid vintersolståndet. Ju längre norrut man kommer från polcirkeln, desto fler dygn med midnattssol och desto längre mörkertid.' },
        { typ: 'text', text: 'Om jordaxeln hade lutat mer skulle polcirkeln ligga längre söderut, och årstiderna bli mer extrema. Om axeln inte lutat alls skulle det inte finnas några årstider. Lutningen är alltså det som bestämmer var polcirkeln ligger, hur högt solen kan stå och hur stor skillnaden blir mellan sommar och vinter.' },
        { typ: 'rubrik', text: 'Den varmaste tiden kommer efter den ljusaste' },
        { typ: 'text', text: 'Sommarsolståndet i juni är årets ljusaste dag, men den varmaste tiden kommer i juli och augusti. Det beror på att mark och hav tar tid att värmas upp. Även efter midsommar tar marken emot mer energi från solen varje dag än den förlorar, så temperaturen fortsätter att stiga en tid.' },
        { typ: 'text', text: 'Samma sak gäller på vintern. Den mörkaste dagen är i december, men det är oftast kallast i januari och februari. Det är som när du värmer vatten på spisen: vattnet fortsätter att bli varmare en stund efter att du har vridit ner plattan. Haven, som tar extra lång tid att värma, gör att fördröjningen blir störst nära kusten.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'Ett stjärndygn, ett helt varv, är 23 timmar och 56 minuter. Ett soldygn är 24 timmar.',
          'Den gregorianska kalendern infördes 1582. Sverige bytte 1753.',
          'Månen har bunden rotation och visar därför alltid samma sida mot jorden.',
          'Förmörkelser blir inte varje månad, eftersom månens bana lutar ungefär 5 grader.',
          'Solstånd och dagjämningar markerar årets ljusaste, mörkaste och jämnaste dagar.'
        ] },
        { typ: 'punkter', punkter: [
          'Solens högsta höjd vid dagjämning är 90 grader minus latituden. Lutningen läggs till på sommaren och dras ifrån på vintern.',
          'Polcirkeln ligger på 66,5 grader, bestämd av jordaxelns lutning.',
          'Det varmaste kommer efter det ljusaste, eftersom mark och hav tar tid att värmas.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
