/* Avsnittssida III. Ljusets väg, text A: Ljus och seende – nivån fordjupning (📕).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-A-Ljus-och-seende-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiia.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Hur vet man hur snabbt ljuset är?' },
        { typ: 'text', text: 'I Standard lärde du dig att ljuset färdas nästan 300 000 kilometer varje sekund. Men hur kan man mäta något som är så snabbt att det inte ens verkar ta någon tid? Här får du följa hur forskare under flera hundra år kom fram till svaret, och hur man i dag använder ljusets hastighet för att mäta avståndet till månen på några centimeter när. Du får också se att skuggor fungerar likadant i rymden som i klassrummet.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur Rømer och Fizeau mätte ljusets hastighet',
          'vad ett *ljusår* är',
          'hur man räknar ut avståndet till månen med en laserstråle',
          'varför det blir sol- och månförmörkelser'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'mata-ljusets-hastighet', titel: 'Att mäta ljusets hastighet',
      block: [
        { typ: 'rubrik', text: 'Galileis lyktor räckte inte' },
        { typ: 'text', text: 'På 1600-talet ville Galileo Galilei ta reda på om ljuset behöver tid för att färdas. Två personer ställde sig på var sin kulle med var sin lykta som hade en lucka. Den ena öppnade sin lucka, och så fort den andra såg ljuset öppnade han sin. Men hur långt isär de än stod tog det lika lång tid. Det som tog tid var människornas reaktioner, inte ljusets färd. Galilei drog slutsatsen att ljuset, om det alls tar tid, är för snabbt för att mätas på det sättet.' },
        { typ: 'rubrik', text: 'Rømer såg att Jupiters måne var försenad' },
        { typ: 'text', text: 'År 1676 hittade den danske astronomen Ole Rømer en väg. Han studerade Io, en av Jupiters månar. Io går runt Jupiter på drygt 42 timmar och försvinner regelbundet in i Jupiters skugga. Rømer märkte att förmörkelserna kom flera minuter för sent de månader då jorden befann sig långt från Jupiter, och för tidigt när jorden var nära. Hans förklaring var att ljuset från Io behöver längre tid när det har längre väg att gå. Rømer uppskattade att ljuset behövde ungefär 22 minuter för att korsa hela jordbanan. Den verkliga tiden är ungefär 17 minuter. Rømer räknade inte själv fram någon hastighet. Det gjorde den holländske forskaren Christiaan Huygens, som med Rømers siffror och de avstånd man kände då fick omkring 220 000 km/s. Det var för lite, men det var den första mätningen som visade att ljuset verkligen tar tid.' },
        { typ: 'rubrik', text: 'Fizeau mätte med ett kugghjul' },
        { typ: 'text', text: 'År 1849 lyckades fransmannen Hippolyte Fizeau mäta ljusets hastighet på jorden. Han lät ljus gå mellan kuggarna på ett snurrande kugghjul, drygt 8 kilometer bort till en spegel och tillbaka.' },
        // [BILD A7: Fizeaus försök i numrerade steg: 1 en lampa lyser genom en lucka mellan två kuggar på ett kugghjul · 2 ljuset går ca 8 km till en spegel · 3 spegeln skickar ljuset tillbaka samma väg · 4 hjulet har hunnit vrida sig, och ljuset träffar en kugg och syns inte · 5 snurrar hjulet ännu fortare hinner nästa lucka fram, och ljuset syns igen. Avståndet ritas förkortat med en markering "ca 8,6 km"]
        { id: 'bild-a7', typ: 'figur', namn: 'ljus', lage: 'fizeau', bildtext: 'Av hur fort hjulet snurrade när ljuset försvann räknade Fizeau ut ljusets hastighet.' },
        { typ: 'text', text: 'När hjulet snurrade långsamt hann ljuset tillbaka genom samma lucka. När hjulet snurrade lagom fort hade en kugg hunnit komma i vägen, och ljuset försvann. Genom att veta hur fort hjulet snurrade kunde Fizeau räkna ut hur lång tid ljuset behövde för de drygt 17 kilometerna fram och tillbaka. Han fick ungefär 313 000 km/s. I dag vet man att ljusets hastighet i vakuum är exakt 299 792 458 m/s.' }
      ]
    },
    {
      id: 'ljusar', titel: 'Ljusår',
      block: [
        { typ: 'rubrik', text: 'Ett ljusår är en sträcka, inte en tid' },
        { typ: 'text', text: 'Avstånden i rymden är så stora att kilometer blir opraktiskt. Därför använder astronomer *ljusår*. Ett ljusår är den sträcka ljuset färdas på ett år. Trots ordet "år" är det alltså en längd.' },
        { typ: 'exempel', rubrik: 'Hur långt är ett ljusår?', stycken: [
          ['Ljuset går 300 000 km på en sekund. Hur långt går det på ett år?'],
          ['Givet: v = 300 000 km/s. Ett år är 365 · 24 · 60 · 60 s ≈ 31 500 000 s. Sökt: sträckan s.'],
          ['Lösning:',
           's = v · t = 300 000 km/s · 31 500 000 s ≈ 9 500 000 000 000 km',
           'Svar: Ett ljusår är ungefär 9 500 miljarder kilometer.']
        ] },
        { typ: 'text', text: 'Den närmaste stjärnan efter solen, Proxima Centauri, ligger drygt 4 ljusår bort. Ljuset du ser från den när du tittar upp lämnade stjärnan för drygt 4 år sedan. Från avlägsna galaxer har ljuset varit på väg i miljontals eller miljarder år. Att titta ut i rymden är därför också att titta bakåt i tiden.' }
      ]
    },
    {
      id: 'manen-och-lasern', titel: 'Månen och lasern',
      block: [
        { typ: 'rubrik', text: 'Speglar på månen' },
        { typ: 'text', text: 'När astronauterna i Apollo 11, 14 och 15 landade på månen åren 1969 till 1971 ställde de ut speciella reflektorer. En sådan reflektor skickar ljuset tillbaka exakt åt det håll det kom ifrån, ungefär som en cykelreflex. Från observatorier på jorden skickar man fortfarande korta laserpulser mot reflektorerna och mäter hur lång tid det tar innan ljuset kommer tillbaka. Det tar ungefär 2,5 sekunder.' },
        { typ: 'exempel', rubrik: 'Avståndet till månen', stycken: [
          ['En laserpuls skickas mot reflektorn på månen och kommer tillbaka efter 2,56 s. Hur långt bort är månen?'],
          ['Givet: v = 300 000 km/s, tiden fram och tillbaka 2,56 s. Sökt: avståndet s.'],
          ['Lösning: Ljuset går fram och tillbaka, så tiden till månen är hälften.',
           't = 2,56 s / 2 = 1,28 s',
           's = v · t = 300 000 km/s · 1,28 s = 384 000 km',
           'Svar: Månen är ungefär 384 000 km bort.']
        ] },
        { typ: 'text', text: 'Samma metod som när du räknade avståndet till ett åskväder används alltså för månen, men med ljus i stället för ljud. Mätningarna är så noggranna att man har kunnat visa att månen långsamt glider bort från jorden, med knappt 4 centimeter per år.' }
      ]
    },
    {
      id: 'formorkelser', titel: 'Förmörkelser',
      block: [
        { typ: 'rubrik', text: 'Skuggor i rymdens skala' },
        { typ: 'text', text: 'Jorden och månen kastar skuggor i solljuset, precis som en boll i lampljuset. Solen är en stor ljuskälla, så skuggorna har både helskugga och halvskugga.' },
        { typ: 'text', text: 'När månen kommer precis mellan solen och jorden faller månens skugga på jorden. Den som befinner sig i helskuggan ser hela solen skymmas. Det kallas en total *solförmörkelse*, och det blir mörkt mitt på dagen. Månens helskugga är oftast bara några hundra kilometer bred eller smalare där den når jorden, och därför ser man en total solförmörkelse bara från en smal stråk av jordytan. Den som står i halvskuggan ser bara en del av solen skymmas, en partiell solförmörkelse.' },
        // [BILD A8: solförmörkelse, strukturfigur sedd från sidan, inte i skala: solen till vänster, månen i mitten, jorden till höger. Strålar från solens övre och nedre kant förbi månens kanter. Helskuggan (mörk kon) når en liten fläck på jorden – "total solförmörkelse". Halvskuggan (grå) täcker ett större område – "partiell solförmörkelse"]
        { id: 'bild-a8', typ: 'figur', namn: 'ljus', lage: 'solformorkelse', bildtext: 'Där månens helskugga når jorden blir solförmörkelsen total, i halvskuggan partiell. Figuren är inte i skala.' },
        { typ: 'text', text: 'När jorden i stället kommer mellan solen och månen hamnar månen i jordens skugga, och då blir det en *månförmörkelse*. Månen blir sällan helt svart, utan brukar få en rödaktig färg. Det beror på att lite solljus böjs av i jordens atmosfär och når månen ändå. Varför just det röda ljuset kommer fram läser du om i texten om färger.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Galileis försök med lyktor visade bara att ljuset är för snabbt för att mätas med människors reaktioner.',
          'Rømer upptäckte 1676 att ljuset tar tid, genom att Jupiters måne Io syntes försenad när jorden var långt från Jupiter.',
          'Fizeau mätte ljusets hastighet på jorden 1849 med ett snurrande kugghjul och en spegel. I dag vet man att den är 299 792 458 m/s i vakuum.',
          'Ett ljusår är den sträcka ljuset färdas på ett år, ungefär 9 500 miljarder km.',
          'Med laserpulser mot reflektorer på månen och s = v · t mäter man avståndet till månen, ungefär 384 000 km.',
          'Sol- och månförmörkelser är skuggor i stor skala, med helskugga och halvskugga.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
