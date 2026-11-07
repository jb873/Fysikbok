/* Avsnittssida I. Solsystemet och jorden, text A Solsystemet – nivån fordjupning. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-A-Solsystemet-Enkel-Fordjupning.md (📕 FÖRDJUPNING), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats, med figuren efter (steg 3).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Solsystemet – fördjupning' },
        { typ: 'text', text: 'I Standard lärde du dig vad som finns i solsystemet och att gravitationen håller ihop det. Här går du vidare till hur planeterna faktiskt rör sig och hur solsystemet bildades. Det är kunskap som du bygger vidare på i gymnasiets fysik och astronomi.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att planeterna närmast solen rör sig snabbast och har kortast år',
          'varför planeterna inte faller in i solen',
          'att avstånd i solsystemet mäts i *astronomiska enheter|astronomisk enhet*',
          'hur solen och planeterna bildades ur ett moln av gas och stoft'
        ] }
      ]
    },
    {
      id: 'planeternas-rorelser', titel: 'Planeternas rörelser',
      block: [
        { typ: 'rubrik', text: 'Planeterna faller hela tiden mot solen men träffar den aldrig' },
        { typ: 'text', text: 'Om solen drar i planeterna, varför faller de inte in i solen? Svaret är att de faktiskt faller hela tiden. En planet rör sig snabbt framåt, och samtidigt drar solen den inåt. Medan planeten faller inåt hinner den också röra sig så långt framåt att den hela tiden missar solen. Banan böjs därför till en kurva runt solen.' },
        { typ: 'text', text: 'Det är samma förklaring som gäller för rymdstationen runt jorden. Den faller också hela tiden, men har så hög fart att den faller runt jorden i stället för ner på den. Hade planeten haft lägre fart skulle banan böjas mer och planeten närma sig solen. Hade den haft högre fart skulle den kunna lämna solsystemet.' },
        { typ: 'rubrik', text: 'Planeterna närmast solen rör sig snabbast' },
        { typ: 'text', text: 'Gravitationen blir svagare ju längre bort från solen man kommer. En planet nära solen dras därför hårt och måste röra sig snabbt för att inte falla in. Merkurius färdas ungefär 48 kilometer per sekund, jorden 30 kilometer per sekund och Neptunus bara drygt 5 kilometer per sekund.' },
        { typ: 'text', text: 'De yttre planeterna har alltså både längre väg att gå och lägre fart. Därför blir deras år mycket långa. Ett år på Merkurius är 88 dygn, medan ett år på Neptunus är ungefär 165 jordår. Sedan Neptunus upptäcktes 1846 har den bara hunnit gå ett enda varv runt solen.' },
        { typ: 'text', text: 'Sambandet upptäcktes av Johannes Kepler i början av 1600-talet. Han såg att det finns en exakt regel mellan en planets avstånd till solen och hur lång tid ett varv tar. Ungefär 70 år senare kunde Isaac Newton visa att regeln följer av gravitationen.' },
        { typ: 'rubrik', text: 'Planeternas banor är ellipser' },
        { typ: 'text', text: 'Planeternas banor är inte helt runda cirklar, utan *ellipser*, en sorts tillplattade cirklar. Solen ligger inte i mitten av ellipsen, utan en bit åt ena sidan. Därför är en planet ibland lite närmare solen och ibland lite längre bort. När den är närmast går den snabbast.' },
        { typ: 'text', text: 'För jorden är skillnaden liten. Jorden är ungefär 147 miljoner kilometer från solen när den är närmast och 152 miljoner kilometer när den är längst bort. Det är för lite för att ge årstider, vilket du läser om i texten om dygn, månad, år och årstider. För vissa kometer är ellipsen däremot mycket långsträckt.' },
        { typ: 'rubrik', text: 'Avstånd i solsystemet mäts i astronomiska enheter' },
        { typ: 'text', text: 'Kilometer blir opraktiskt när avstånden är så stora. Astronomer använder därför *astronomisk enhet*, förkortat AE. En astronomisk enhet är jordens medelavstånd till solen, ungefär 150 miljoner kilometer.' },
        { typ: 'text', text: 'Med den enheten blir avstånden lätta att jämföra. Jupiter ligger ungefär 5 AE från solen och Neptunus ungefär 30 AE. För ännu större avstånd, till andra stjärnor, räcker inte heller den astronomiska enheten. Där används ljusår, som du möter längre fram i kapitlet.' }
      ]
    },
    {
      id: 'solsystemets-bildning', titel: 'Hur solsystemet bildades',
      block: [
        { typ: 'rubrik', text: 'Solsystemet bildades ur ett moln av gas och stoft' },
        { typ: 'text', text: 'För ungefär 4,6 miljarder år sedan fanns ett stort moln av gas och stoft där solsystemet ligger i dag. Gasen var mest väte och helium. Stoftet var små korn av bland annat sten, metall och is, rester efter äldre stjärnor som hade exploderat. Gravitationen fick molnet att börja dra ihop sig.' },
        { typ: 'text', text: 'När molnet drog ihop sig började det snurra allt snabbare, på samma sätt som en konståkare snurrar snabbare när hon drar in armarna. Snurrandet gjorde att molnet plattades till en skiva. I mitten samlades det mesta av massan, och där blev det så tätt och varmt att kärnfusion startade. Solen hade fötts.' },
        { typ: 'rubrik', text: 'Planeterna växte fram i skivan runt den unga solen' },
        { typ: 'text', text: 'I skivan runt solen krockade stoftkornen och klumpade ihop sig. Små klumpar blev större klumpar, och de största drog till sig ännu mer material med sin gravitation. Till slut hade några få kroppar samlat på sig det mesta i sitt område. De blev planeterna.' },
        { typ: 'text', text: 'Det förklarar något som annars vore märkligt: alla planeter rör sig runt solen åt samma håll och nästan i samma plan. De bildades ju ur samma snurrande skiva. Asteroiderna och kometerna är bitar som aldrig blev planeter.' },
        { typ: 'rubrik', text: 'Avståndet till solen avgjorde vad planeterna blev' },
        { typ: 'text', text: 'I Standard såg du att det var varmt nära solen och kallt längre ut. Gränsen där det blev tillräckligt kallt för att is skulle kunna bildas ligger ungefär mellan Mars och Jupiter. Den kallas *snögränsen*. Innanför den fanns bara sten och metall, och planeterna blev små stenplaneter.' },
        { typ: 'text', text: 'Utanför snögränsen fanns det mycket mer fast material, eftersom isen kom till. Planetkärnorna kunde därför växa sig mycket större, så stora att deras gravitation räckte för att dra till sig väldiga mängder väte och helium från skivan. Så blev Jupiter och Saturnus gasjättar. Längst ut, där materialet var glesare, växte Uranus och Neptunus långsammare och fick mindre gas.' },
        { typ: 'rubrik', text: 'Modellen prövas mot andra solsystem' },
        { typ: 'text', text: 'Hur vet man att det gick till så här? Ingen var ju där. Men astronomer kan i dag se unga stjärnor som har skivor av gas och stoft runt sig, och i några skivor syns luckor där planeter håller på att bildas. Det stöder modellen.' },
        { typ: 'text', text: 'Samtidigt har upptäckterna av planeter runt andra stjärnor visat att modellen inte förklarar allt. Man har hittat gasjättar som ligger mycket nära sin stjärna, där de enligt modellen inte borde ha kunnat bildas. Därför tror forskarna att planeter kan flytta sig i sina banor efter att de har bildats. Modellen förfinas alltså fortfarande.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'Planeterna faller hela tiden mot solen, men rör sig så snabbt framåt att de faller runt den.',
          'Planeterna närmast solen rör sig snabbast och har kortast år.',
          'Planeternas banor är ellipser med solen en bit från mitten.',
          'En astronomisk enhet (AE) är jordens medelavstånd till solen, ungefär 150 miljoner kilometer.',
          'Solsystemet bildades ur ett snurrande moln av gas och stoft för ungefär 4,6 miljarder år sedan.',
          'Planeterna växte fram i skivan runt solen. Därför går de åt samma håll och nästan i samma plan.',
          'Snögränsen förklarar varför de inre planeterna är av sten och de yttre är jättar.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
