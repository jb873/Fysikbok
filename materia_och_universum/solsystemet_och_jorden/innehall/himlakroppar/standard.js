/* Avsnittssida I. Solsystemet och jorden, text B Himlakroppar – nivån standard. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-Standard-A-D-redigerad.md (# Text B), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats, med figuren efter (steg 3).
 * Begreppen (*ord*) är markerade som i Enkel och Fördjupning för samma text, första gången de står i den här texten
 * (arbetsorder 9; listan i rapporten, Joachim stryker): himlakroppar, stjärna, planet, exoplaneter, dvärgplanet, måne, asteroid, komet, meteor, meteoriter (meteorit).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'text', text: 'När vi studerar rymden möter vi många olika slags föremål. Vissa är enorma och producerar sitt eget ljus, medan andra är små och nästan osynliga. Alla dessa naturliga föremål i rymden kallas *himlakroppar*, men de skiljer sig åt genom sin storlek, sitt innehåll och hur de rör sig.' }
      ]
    },
    {
      id: 'himlakropparna-har-olika-egenskaper', titel: 'Himlakropparna har olika egenskaper',
      block: [
        { typ: 'rubrik', text: 'Stjärnor producerar sitt eget ljus' },
        { typ: 'text', text: 'En *stjärna* är ett mycket stort och hett klot av framför allt gas och plasma som producerar energi genom kärnfusion. Energin sprids ut i rymden som bland annat ljus och värme. Vår egen sol är en stjärna, men det finns oerhört många andra stjärnor i universum.' },
        { typ: 'text', text: 'När vi tittar upp mot natthimlen ser vi stjärnor som ligger på mycket olika avstånd från jorden. En ljusstark stjärna behöver inte vara större än en svagare stjärna, eftersom ljusstyrkan också beror på avståndet och hur mycket ljus stjärnan skickar ut. Två stjärnor som ser ut att ligga nära varandra på himlen kan därför i verkligheten ligga mycket långt ifrån varandra.' },
        { typ: 'rubrik', text: 'Planeter kretsar kring stjärnor' },
        { typ: 'text', text: 'En *planet* är en stor himlakropp som kretsar kring en stjärna och inte producerar eget ljus genom kärnfusion. Planeterna i vårt solsystem kretsar kring solen, men astronomer har också upptäckt tusentals planeter runt andra stjärnor. Sådana planeter kallas *exoplaneter*.' },
        { typ: 'text', text: 'När vi ser Venus eller Jupiter lysa på natthimlen är det inte för att planeterna producerar eget ljus. I stället reflekterar de solljus, ungefär som en spegel eller en ljus vägg som blir synlig när en lampa lyser på den. Hur mycket ljus vi ser beror bland annat på planetens storlek, avstånd och hur väl dess yta eller atmosfär reflekterar ljus.' },
        { typ: 'rubrik', text: 'Dvärgplaneter liknar planeter men uppfyller inte alla kraven' },
        { typ: 'text', text: 'En *dvärgplanet* kretsar kring solen och har tillräckligt stor massa för att gravitationen ska göra den ungefär klotformad. Skillnaden mot en planet är att dvärgplaneten inte har blivit dominerande i sitt banområde. Den delar därför området med andra föremål som inte har samlats upp eller försvunnit.' },
        { typ: 'text', text: 'Pluto är den mest kända dvärgplaneten. Den räknades tidigare som en planet, men klassificerades år 2006 som dvärgplanet när astronomerna bestämde en tydligare definition av vad en planet är. Det finns också andra dvärgplaneter, exempelvis Ceres i asteroidbältet och Eris långt utanför Neptunus. Pluto är mindre än jordens *måne* och består av både sten och is. Trots att Pluto inte längre räknas som en planet är den fortfarande en viktig himlakropp att undersöka.' },
        { typ: 'rubrik', text: 'Månar kretsar kring planeter och andra himlakroppar' },
        { typ: 'text', text: 'En måne är en naturlig himlakropp som kretsar kring exempelvis en planet eller en dvärgplanet. Jordens måne är ungefär en fjärdedel så bred som jorden och befinner sig i genomsnitt omkring 384 000 kilometer bort. Precis som planeterna producerar månen inte eget synligt ljus, utan reflekterar solljus.' },
        { typ: 'text', text: 'Många tror att jorden är den enda planeten som har en måne eftersom vår måne är så tydlig på natthimlen. I verkligheten har bland annat Mars, Jupiter, Saturnus, Uranus och Neptunus månar. Jupiter och Saturnus har mycket stora familjer av månar. Två av dem, Jupiters måne Ganymedes och Saturnus måne Titan, är till och med större än planeten Merkurius.' },
        // [BILD: En storleksjämförelse mellan jorden och månen samt Jupiter och fyra av dess största månar. Samtliga himlakroppars diameter ska visas i samma skala. Bilden ska tydliggöra att månar kan vara mycket olika stora.]
        { id: 'bild-m', typ: 'figur', namn: 'himlakroppar_i_skala', kroppar: [{ namn: 'Jorden', diameter: 12756, grupp: 0 }, { namn: 'Månen', diameter: 3475, grupp: 0 }, { namn: 'Jupiter', diameter: 142984, grupp: 1 }, { namn: 'Io', diameter: 3643, grupp: 1 }, { namn: 'Europa', diameter: 3122, grupp: 1 }, { namn: 'Ganymedes', diameter: 5268, grupp: 1 }, { namn: 'Kallisto', diameter: 4821, grupp: 1 }, { namn: 'Merkurius', diameter: 4879, grupp: 2 }], bildtext: 'Jorden och månen, Jupiter med sina fyra största månar och Merkurius som jämförelse – alla i samma skala.' }
      ]
    },
    {
      id: 'mindre-himlakroppar-berattar-om-solsystemets-historia', titel: 'Mindre himlakroppar berättar om solsystemets historia',
      block: [
        { typ: 'rubrik', text: 'Asteroider består framför allt av sten och metall' },
        { typ: 'text', text: 'En *asteroid* är en mindre himlakropp som rör sig runt solen och vanligtvis består av sten och metall. De flesta kända asteroiderna finns i asteroidbältet mellan Mars och Jupiter, men det finns också asteroider i andra delar av solsystemet. Storleken varierar från små kroppar till föremål som är flera hundra kilometer stora.' },
        { typ: 'text', text: 'Asteroider är viktiga för forskarna eftersom många har förändrats relativt lite sedan solsystemet bildades. Genom att undersöka deras sammansättning kan astronomerna få ledtrådar om hur planeterna växte fram. Rymdsonder har därför skickats till asteroider för att fotografera dem och ibland samla in material.' },
        { typ: 'rubrik', text: 'Kometer kan utveckla långa lysande svansar' },
        { typ: 'text', text: 'En *komet* är en mindre himlakropp som innehåller frusna ämnen, sten och stoft. När den befinner sig långt från solen är den ofta mycket kall och svår att upptäcka. När kometen kommer närmare solen värms dess yta upp och gas och stoft frigörs.' },
        { typ: 'text', text: 'Det frigjorda materialet bildar ett moln omkring kometen och kan utveckla en eller flera långa svansar. Solljus gör att vi kan se delar av molnet och svansarna, ibland till och med från jorden utan teleskop. Svansen pekar bort från solen, eftersom solvinden och solstrålningen trycker materialet bakåt. En komet som är på väg bort från solen kan därför ha svansen framför sig. Kometens svans är alltså inte ett spår som kometen lämnar efter sig när den rör sig.' },
        { typ: 'rubrik', text: 'Meteorer är ljusspår i jordens atmosfär' },
        { typ: 'text', text: 'I solsystemet finns mängder av små sten- och metallföremål som kallas meteoroider. När en meteoroid kommer in i jordens atmosfär med hög hastighet värms den och luften omkring den kraftigt upp. Då kan ett ljust spår uppstå på himlen, och detta ljusfenomen kallas en *meteor*.' },
        { typ: 'text', text: 'Många tror att ett stjärnfall är en stjärna som faller ner från himlen. Det stämmer inte, eftersom stjärnor är enorma himlakroppar som ligger mycket långt bort. Ett stjärnfall är i stället en meteor som oftast uppstår när ett litet föremål från rymden kommer in i atmosfären.' },
        { typ: 'text', text: 'Om delar av meteoroiden överlever färden genom atmosfären och når marken kallas de *meteoriter|meteorit*. Meteoriter kan vara mycket små, men det finns också stora exemplar som har bildat nedslagskratrar. Genom att undersöka meteoriter får forskarna information om material som bildades för miljarder år sedan.' },
        { typ: 'rubrik', text: 'Astronomerna delar in himlakroppar för att förstå dem' },
        { typ: 'text', text: 'Inom vetenskapen använder vi begrepp och indelningar för att beskriva naturen. När astronomer skiljer mellan stjärnor, planeter, månar och andra himlakroppar blir det lättare att jämföra deras egenskaper. Indelningen fungerar som en modell som hjälper oss att förstå hur olika föremål bildas och rör sig.' },
        { typ: 'text', text: 'Modellen har samtidigt begränsningar eftersom naturen inte alltid passar perfekt in i våra kategorier. Vissa asteroider liknar kometer, och gränsen mellan mycket små planeter och stora månar kan vara svår att förstå enbart utifrån storleken. Därför använder forskarna flera egenskaper, bland annat rörelse, form och omgivning, när de klassificerar himlakroppar.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'Himlakroppar är naturliga föremål i rymden.',
          'Stjärnor producerar eget ljus genom kärnfusion.',
          'Planeter kretsar kring stjärnor och reflekterar deras ljus.',
          'Dvärgplaneter liknar planeter men har inte rensat sina banområden.',
          'Månar kretsar kring planeter och andra himlakroppar.'
        ] },
        { typ: 'punkter', punkter: [
          'Asteroider består framför allt av sten och metall, medan kometer också innehåller frusna ämnen.',
          'En meteor är ett ljusfenomen i atmosfären, medan en meteorit är material som nått marken.',
          'Ett stjärnfall är inte en stjärna som faller.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
