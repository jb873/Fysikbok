/* Avsnittssida III, text A: Rörelse – nivån Fördjupning. En självbärande bok ur samma kärna som Standard (fart och
 * hastighet med räkning, medelfart, tröghet och massa – förstå först, räkna sist). Joachims granskade källa
 * (III-A-Rorelse-alla-nivaer-v2.md, 2026-11-03), införd ordagrant i strömformatet – se standard.js. [FORMEL] är ett
 * formelblock; bråken i löptexten (600/120, v = s/t) står kvar som text. Samma avsnitts-id som Standard, och dessutom
 * att-rakna-pa-rorelse (bara i Fördjupning). */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Rörelse – fördjupning' },
        { typ: 'text', text: 'Den här texten bygger vidare på prickmodellen. Du får skilja på fart och hastighet, se varför en sväng också är en acceleration och räkna på rörelser. Allt hänger ihop med samma fråga: när behövs en kraft?' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*fart* och *hastighet* – och varför riktningen spelar roll',
          'att räkna ut fart och *medelfart*',
          '*tröghetslagen* och varför tröghet hänger ihop med massa'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'rorelsen-i-prickarna', titel: 'Rörelsen syns i prickarna',
      block: [
        { typ: 'rubrik', text: 'Prickarna visar både fart och riktning' },
        { typ: 'text', text: 'I prickmodellen är det alltid lika lång tid mellan två prickar. Avståndet mellan dem visar hur långt föremålet hann – alltså hur snabbt det rörde sig. Men prickarna visar också något mer: åt vilket håll föremålet rörde sig. En rörelse har alltid både en storlek och en riktning.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'likformig' },

        { typ: 'rubrik', text: 'Fart säger hur snabbt, hastighet säger också åt vilket håll' },
        { typ: 'text', text: 'I vardagen används orden fart och hastighet om vartannat, men i fysiken betyder de olika saker. *Fart* är hur lång sträcka något hinner på en viss tid. *Hastighet* är farten tillsammans med riktningen. Två bilar som möts på en landsväg och båda kör i 70 km/h har samma fart – men olika hastighet, eftersom de kör åt motsatta håll.' },

        { typ: 'rubrik', text: 'En likformig rörelse har både samma fart och samma riktning' },
        { typ: 'text', text: 'Det räcker alltså inte att farten är densamma för att en rörelse ska vara likformig. Riktningen måste också vara densamma. Ett tåg som kör rakt fram i jämna 120 km/h rör sig likformigt. Ett tåg som kör i jämna 120 km/h genom en lång kurva gör det inte, eftersom riktningen hela tiden ändras.' },

        { typ: 'rubrik', text: 'Acceleration är varje ändring av hastigheten – också en sväng' },
        { typ: 'text', text: '*Acceleration* betyder att hastigheten ändras. Det kan ske på tre sätt: farten ökar, farten minskar (retardation) eller riktningen ändras. Tänk på en bil som kör ett helt varv i en rondell och hela tiden visar 30 km/h på mätaren. Farten är densamma hela varvet, men riktningen ändras hela tiden – och då ändras hastigheten. Bilen accelererar alltså hela varvet. Även här krävs en kraft: friktionen mellan däcken och vägen, som drar bilen in mot rondellens mitt. På blank is, utan friktion, skulle bilen fortsätta rakt fram – precis som tröghetslagen säger.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'accelererande' },

        { typ: 'rubrik', text: 'Den som åker fort behöver inte accelerera' },
        { typ: 'text', text: 'Acceleration handlar om att hastigheten ändras, inte om hur stor den är. Ett flygplan som flyger rakt fram i jämna 900 km/h accelererar inte alls. En cykel som just börjar rulla går långsamt, men den accelererar, eftersom farten ökar. Det som avgör om en kraft påverkar föremålet är alltså inte hur fort det åker, utan om rörelsen ändras.' },

      ]
    },
    {
      id: 'troghetslagen', titel: 'Tröghetslagen',
      block: [
        { typ: 'rubrik', text: 'Tröghet hänger ihop med massa' },
        { typ: 'text', text: 'Alla föremål är tröga – men inte lika tröga. Ju större massa ett föremål har, desto större är dess tröghet, och desto större kraft behövs för att ändra dess rörelse. En tom kundvagn är lätt att få i gång och lätt att stoppa. En full kundvagn kräver mycket mer kraft, både för att komma i gång och för att stanna. En tung lastbil behöver därför mycket längre bromssträcka än en personbil i samma fart.' },

      ]
    },
    {
      id: 'att-rakna-pa-rorelse', titel: 'Att räkna på rörelse',
      block: [
        { typ: 'rubrik', text: 'Farten räknas ut som sträckan delad med tiden' },
        { typ: 'text', text: 'Nu när du vet vad fart är kan du räkna ut den. Man delar sträckan med tiden: v = s/t, där v är farten, s är sträckan och t är tiden. En cyklist som cyklar 600 meter på 120 sekunder har farten 600/120 = 5 m/s. Det betyder att cyklisten kommer 5 meter längre för varje sekund – i prickmodellen ligger prickarna 5 meter isär.' },
        { typ: 'formel', uttryck: 'v = [[s|t]]', forklaring: [['v', 'fart'], ['s', 'sträcka'], ['t', 'tid']] },

        { typ: 'rubrik', text: 'Med talet 3,6 räknar man om mellan m/s och km/h' },
        { typ: 'text', text: 'Den som håller farten 1 m/s hinner 3 600 meter på en timme, eftersom en timme är 3 600 sekunder – och 3 600 meter är 3,6 kilometer. Alltså är 1 m/s lika mycket som 3,6 km/h. Från m/s till km/h multiplicerar man med 3,6, och från km/h till m/s delar man med 3,6. Cyklistens 5 m/s blir 5 · 3,6 = 18 km/h.' },

        { typ: 'rubrik', text: 'Medelfarten är den jämna fart som ger samma resa' },
        { typ: 'text', text: 'Under en resa varierar farten nästan alltid. Medelfarten är den fart man skulle ha haft om man hade kört jämnt hela vägen och kommit fram på samma tid. Man räknar ut den med hela sträckan och hela tiden, inklusive stoppen. En buss som kör 90 km på 1,5 timme har medelfarten 90/1,5 = 60 km/h.' },

        { typ: 'rubrik', text: 'Medelfarten är inte medelvärdet av farterna' },
        { typ: 'text', text: 'Tänk dig att du cyklar 12 km till en sjö i 12 km/h, vilket tar en timme, och hem samma väg i 24 km/h, vilket tar en halvtimme. Det är lätt att tro att medelfarten blir (12 + 24)/2 = 18 km/h, men det stämmer inte. Hela sträckan är 24 km och hela tiden är 1,5 timme, så medelfarten blir 24/1,5 = 16 km/h. Den blir lägre, eftersom du cyklade längre tid med den låga farten. Lägg också märke till att det här är medelfart och inte medelhastighet: du kom tillbaka dit du började, så din förflyttning blev noll.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          '*Fart* är hur snabbt något rör sig. *Hastighet* är farten tillsammans med riktningen.',
          '*Acceleration* är varje ändring av hastigheten: farten ökar, farten minskar eller riktningen ändras. Varje acceleration kräver en kraft.',
          '*Tröghetslagen*: utan kraft – eller med krafter som tar ut varandra – fortsätter ett föremål i samma fart och riktning. Ju större massa, desto större tröghet.',
          'Farten räknas ut som v = s/t. 1 m/s = 3,6 km/h.',
          '*Medelfarten* räknas ut med hela sträckan och hela tiden – inte som medelvärdet av farterna.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
