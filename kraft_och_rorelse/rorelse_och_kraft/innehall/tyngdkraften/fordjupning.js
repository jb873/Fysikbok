/* Avsnittssida III, text D: Tyngdkraften – nivån Fördjupning. En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims källa (III-D-Tyngdkraften-alla-nivaer.md, 2026-11-04), införd ordagrant i strömformatet: ### = rubrik,
 * ett stycke = ett textblock. Samma bilder som Standard ([BILD T], [BILD F], [BILD M], bildpilar). [FORMEL] och
 * [TABELL] är formel- och tabellblocket, med data ur arbetsordern III D. "F = m · g" i löptexten står som text.
 * "Det här lär du dig:" står som liten rubrik utan kolon, som i text A–C.
 * Avsnittens id (inledning, tyngdkraft-och-normalkraft, massa-och-tyngd, sammanfattning) är desamma på alla nivåer. */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tyngdkraften – fördjupning' },
        { typ: 'text', text: 'Den här texten bygger vidare på blocket på bordet. Du får se vad gravitationen beror på, räkna ut tyngden med en formel och följa tyngdkraften till dess motkraft. Du får också se när normalkraften och tyngden inte är lika stora – och varför en våg kan visa fel.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *gravitationen|gravitation* beror på – massa och avstånd',
          'att räkna ut tyngden: F = m · g',
          'tyngdkraftens motkraft, och när *normalkraften|normalkraft* skiljer sig från tyngden'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tyngdkraft-och-normalkraft', titel: 'Tyngdkraften och normalkraften',
      block: [
        { typ: 'rubrik', text: 'Gravitationen beror på massorna och avståndet' },
        { typ: 'text', text: 'Alla föremål med massa drar i varandra – det är *gravitation*. Hur stark dragningen är beror på två saker. Ju större massor, desto starkare dragning: därför märker vi jordens dragning men inte stolens. Ju större avstånd, desto svagare dragning: dubbelt så långt bort ger bara en fjärdedel så stark kraft. Jordens dragning kallas *tyngdkraft*, och den är riktad mot jordens centrum.' },

        { typ: 'rubrik', text: 'Tyngdkraften ritas från tyngdpunkten' },
        { typ: 'text', text: 'Tyngdkraften verkar egentligen på varje liten del av blocket. Men man kan räkna som om hela kraften verkade i en enda punkt, *tyngdpunkten|tyngdpunkt*. På ett jämnt block ligger den i mitten. Därför ritas tyngdkraften som en pil rakt nedåt från blockets mitt.' },
        // BILD T: tyngdkraften på blocket
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'tyngdkraft', fran: [300, 552], till: [300, 800], etikett: [520, 830] }],
          beskrivning: 'En person drar i ett rep fäst i ett träblock på ett bord. En pil pekar rakt nedåt från blockets mitt: tyngdkraften.' },

        { typ: 'rubrik', text: 'Tyngdkraft och normalkraft är inte kraft och motkraft' },
        { typ: 'text', text: 'En bok ligger på ett bord. Jorden drar boken nedåt med tyngdkraften, och bordet trycker boken uppåt med normalkraften. Krafterna är lika stora och motriktade, så det är frestande att kalla dem kraft och motkraft. Men de verkar båda på boken – och då kan de inte vara ett kraftpar. De är två olika krafter som tar ut varandra: jämvikt.' },

        { typ: 'rubrik', text: 'Tyngdkraftens motkraft är att boken drar jorden' },
        { typ: 'text', text: 'Byt plats på föremålen: ”jorden drar boken” blir ”boken drar jorden”. Boken drar alltså jorden uppåt med en lika stor kraft. Varför märks det inte? Jorden har så enormt mycket större massa att samma kraft knappt ändrar dess rörelse. Normalkraftens motkraft är på samma sätt att boken trycker nedåt på bordet.' },

        { typ: 'rubrik', text: 'Normalkraften är inte alltid lika stor som tyngden' },
        { typ: 'text', text: 'Normalkraften blir lika stor som tyngden bara när föremålet ligger still på ett vågrätt underlag och inget annat trycker eller drar uppåt eller nedåt. Trycker du ner blocket med handen blir normalkraften större än tyngden – bordet måste ta emot både tyngden och ditt tryck. Drar du blocket snett uppåt med repet blir normalkraften mindre, eftersom repet då lyfter lite. Och då blir också friktionen mindre.' },
        // BILD F: fyra krafter på blocket (samma som Standard)
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [500, 470], till: [740, 470], etikett: [920, 470] },
                  { namn: 'friktion', fran: [250, 640], till: [10, 640], etikett: [140, 745] },
                  { namn: 'tyngdkraft', fran: [300, 552], till: [300, 800], etikett: [520, 830] },
                  { namn: 'normalkraft', fran: [420, 658], till: [420, 410], etikett: [420, 375] }],
          lika: [[0, 1], [2, 3]],
          beskrivning: 'Samma bild. Fyra pilar på blocket: tyngdkraften nedåt och lika stor normalkraft uppåt, dragkraften framåt och lika stor friktion bakåt.' },

        { typ: 'rubrik', text: 'Varje riktning för sig' },
        { typ: 'text', text: 'Med fyra krafter på blocket tittar man på varje riktning för sig. Lodrätt: tyngdkraft och normalkraft – här är det jämvikt så länge blocket ligger kvar på bordet. Vågrätt: dragkraft och friktion – här avgör resultanten om blocket accelererar, retarderar eller fortsätter i samma fart. Friktionen beror i sin tur på normalkraften, så de två riktningarna hänger ihop.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'massa-och-tyngd', titel: 'Massa och tyngd',
      block: [
        { typ: 'rubrik', text: 'En dynamometer mäter kraft med en fjäder' },
        { typ: 'text', text: 'Kraft mäts i *newton* (N) med en *dynamometer*. Fjädern i den dras ut lika mycket för varje newton – dubbelt så stor kraft ger dubbelt så lång utdragning, så länge fjädern inte töjs för mycket. Det gör att skalan kan delas in jämnt.' },
        // BILD M: dynamometern (samma som Standard)
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/dynamometer.jpg', bredd: 1086, hojd: 1448, utsnitt: [0, 420, 1086, 1028], maxhojd: 0.43,
          pilar: [{ namn: 'tyngdkraft', fran: [540, 1300], till: [540, 1440], etikett: [790, 1395] },
                  { namn: 'fjäderns kraft', fran: [540, 1205], till: [540, 1065], etikett: [820, 1120] }],
          lika: [[0, 1]],
          bildtext: 'Dynamometern visar 2 N. Påsen har tyngden 2 N – och massan ungefär 0,2 kg.',
          beskrivning: 'En dynamometer med en fjäder och en skala från 0 till 5 newton hänger från en krok. I den nedre kroken hänger en tygpåse. Visaren står på 2. Två lika långa pilar på påsen: tyngdkraften nedåt och fjäderns kraft uppåt.' },

        { typ: 'rubrik', text: 'Tyngden räknas ut som massan gånger g' },
        { typ: 'text', text: 'Tyngden beror på massan och på hur hårt den plats man är på drar. Sambandet skrivs F = m · g, där F är tyngden i newton, m är massan i kilogram och g är tyngdfaktorn i newton per kilogram (N/kg). På jorden är g ungefär 9,8 N/kg, som ofta avrundas till 10 N/kg. En ryggsäck med massan 5 kg har tyngden F = 5 · 9,8 = 49 N, alltså ungefär 50 N.' },
        { typ: 'formel', uttryck: 'F = m · g',
          forklaring: [['F', 'tyngd (N)'], ['m', 'massa (kg)'], ['g', 'tyngdfaktor (N/kg)']] },

        { typ: 'rubrik', text: 'g är olika på olika himlakroppar' },
        { typ: 'text', text: 'Tyngdfaktorn g beror på himlakroppens massa och storlek. På månen är g ungefär 1,6 N/kg, på Mars ungefär 3,7 N/kg och på Jupiter ungefär 25 N/kg. En person med massan 60 kg har därför tyngden ungefär 590 N på jorden, 96 N på månen, 220 N på Mars och 1 500 N på Jupiter – men massan är 60 kg överallt.' },
        { typ: 'tabell', rubriker: ['Himlakropp', 'g (N/kg)', 'Tyngd för 60 kg'],
          rader: [['Jorden', '9,8', '590 N'], ['Månen', '1,6', '96 N'],
                  ['Mars', '3,7', '220 N'], ['Jupiter', '25', '1 500 N']] },

        { typ: 'rubrik', text: 'Massa och tyngd mäts på olika sätt' },
        { typ: 'text', text: '*Massa* mäts i kilogram och är densamma överallt. *Tyngd* är en kraft och mäts i newton. En badrumsvåg mäter egentligen kraften du trycker med, och räknar om den till kilogram med jordens g. Tar du med vågen till månen visar den därför bara en sjättedel av din massa – vågen är ”inställd fel”. En balansvåg, som jämför två föremål, visar däremot rätt på månen, eftersom båda sidorna dras lika mycket svagare.' },

        { typ: 'rubrik', text: 'I en hiss visar vågen fel' },
        { typ: 'text', text: 'Ställ en våg i en hiss. När hissen accelererar uppåt måste golvet trycka dig uppåt hårdare än din tyngd – annars skulle du inte få fart uppåt. Vågen visar då mer än vanligt. När hissen bromsar in på väg uppåt, eller accelererar nedåt, visar vågen mindre. Din massa och din tyngd är desamma hela tiden; det är normalkraften som ändras, och det är den vågen mäter.' },

        { typ: 'rubrik', text: 'Massan avgör trögheten, tyngden avgör friktionen' },
        { typ: 'text', text: 'På månen trycks blocket mindre hårt mot underlaget, så normalkraften och friktionen blir en sjättedel. Men massan – och därmed trögheten – är densamma. Det krävs alltså lika stor resulterande kraft för att ge blocket samma acceleration som på jorden. Astronauterna på månen märkte det: tung utrustning var lätt att lyfta, men lika svår att få i gång och stoppa i sidled.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Gravitationen blir starkare med större massor och svagare med större avstånd.',
          'Tyngdkraft och normalkraft verkar på samma föremål – jämvikt. Tyngdkraftens motkraft är att föremålet drar jorden.',
          'Normalkraften är lika stor som tyngden bara om inget annat trycker eller drar lodrätt.',
          'Tyngden: F = m · g. På jorden är g ≈ 9,8 N/kg, på månen ≈ 1,6 N/kg.',
          'En våg mäter normalkraften – därför visar den fel på månen och i en hiss som accelererar.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
