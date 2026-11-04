/* Avsnittssida III, text C: Kraft och motkraft – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims källa v3 (III-C-Kraft-och-motkraft-v3.md, 2026-11-04), som ersätter text C ur v2 helt (v2 i Arkiv/), införd
 * ordagrant i strömformatet: ### = rubrik, ett stycke = ett textblock. [BILD B] och [BILD C] är fotot block-rep.jpg
 * med kraftpilar (bildpilar, data ur arbetsordern); [FIGUR 7] är kraftparet med skridskoåkarna, som förut. Kraftparet
 * visas mellan handen och repet. "Det här lär du dig:" står som liten rubrik utan kolon, som i text A.
 * Avsnittens id (inledning, kraft-och-motkraft, motkraft-eller-jamvikt, i-vardagen, sammanfattning) är desamma på alla nivåer;
 * huvudrubrikerna (avsnitten) står i innehållsförteckningen, ###-rubrikerna bara i texten (Joachims beslut 2026-11-04). */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och motkraft' },
        { typ: 'text', text: 'När du drar i ett rep känner du att repet drar tillbaka i din hand. Det är ingen inbillning – det är en kraft. I den här texten lär du dig att krafter alltid kommer i par, och varför friktionen inte är motkraften till ditt drag.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*kraft och motkraft* – att krafter alltid kommer i par',
          'varför kraft och motkraft inte tar ut varandra',
          'skillnaden mellan motkraft och friktion'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'kraft-och-motkraft', titel: 'Kraft och motkraft',
      block: [
        { typ: 'rubrik', text: 'Först tittar vi på krafterna på blocket' },
        { typ: 'text', text: 'Bilden visar samma situation som i texten om kraft och friktion: någon drar i ett rep som sitter fast i ett block på ett bord. Titta först bara på blocket. Två krafter verkar på det. Repet drar blocket framåt med en dragkraft, och bordet bromsar blocket bakåt med friktion. Båda pilarna utgår från blocket, och de är lika långa. Krafterna tar ut varandra, och blocket ligger still.' },
        // BILD B: krafterna på blocket
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [300, 552], till: [580, 552], etikett: [750, 600] },
                  { namn: 'friktion', fran: [300, 640], till: [20, 640], etikett: [160, 745] }],
          lika: [[0, 1]],
          beskrivning: 'Samma bild. Två lika långa pilar utgår från blocket: dragkraften framåt och friktionen bakåt. Båda verkar på blocket och tar ut varandra.' },

        { typ: 'rubrik', text: 'Nu tittar vi på handen och repet' },
        { typ: 'text', text: 'Titta nu på ett annat ställe i samma bild – där handen håller i repet. Där finns också två krafter, men de är av ett annat slag. Handen drar i repet, och repet drar tillbaka i handen. Du känner det själv: ju hårdare du drar i repet, desto hårdare drar det i dig. Kraften tillbaka kallas *motkraft*.' },
        // BILD C: kraft och motkraft – pilen på handen börjar på fingrarna (y 525; 552 i skissen är under handen)
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941, utsnitt: [440, 330, 1152, 520],
          pilar: [{ namn: 'jag drar i repet', fran: [690, 503], till: [950, 503], etikett: [820, 460] },
                  { namn: 'repet drar i mig', fran: [1255, 525], till: [995, 525], etikett: [1125, 615] }],
          lika: [[0, 1]],
          beskrivning: 'Samma bild. En pil sitter på repet och pekar mot handen: handen drar i repet. En lika lång pil sitter på handen och pekar mot blocket: repet drar i handen. Pilarna verkar på två olika föremål.' },
        { typ: 'text', text: 'Jämför pilarna med bilden innan. Där satt båda pilarna på blocket. Här sitter den ena på repet och den andra på handen.' },

        { typ: 'rubrik', text: 'Krafter kommer alltid i par' },
        { typ: 'text', text: 'Det gäller inte bara repet. När ett föremål påverkar ett annat med en kraft, påverkar det andra föremålet tillbaka med en lika stor kraft åt motsatt håll. Kraften och motkraften är alltid lika stora, de verkar alltid åt motsatt håll, och de uppstår alltid samtidigt. Det kallas Newtons tredje lag, eller lagen om *kraft och motkraft*.' },
        { typ: 'text', text: 'Ett knep för att hitta motkraften är att byta plats på föremålen i meningen. ”Handen drar i repet” blir ”repet drar i handen”. ”Repet drar i blocket” blir ”blocket drar i repet”.' },

        { typ: 'rubrik', text: 'Kraft och motkraft verkar på olika föremål' },
        { typ: 'text', text: 'Det viktiga är att kraften och motkraften verkar på två olika föremål. Din kraft verkar på repet. Motkraften verkar på dig. Därför tar de inte ut varandra. För att krafter ska ta ut varandra måste de verka på samma föremål – som dragkraften och friktionen gör på blocket i den första bilden.' },

      ]
    },
    {
      id: 'motkraft-eller-jamvikt', titel: 'Motkraft eller jämvikt?',
      block: [
        { typ: 'rubrik', text: 'Friktionen är inte motkraften till dragkraften' },
        { typ: 'text', text: 'Det är lätt att tro att friktionen är motkraften till dragkraften, eftersom de pekar åt var sitt håll i den första bilden. Men så är det inte. Båda verkar på blocket, och då kan de inte vara kraft och motkraft. De är två olika krafter som tar ut varandra – blocket är i *jämvikt*.' },
        { typ: 'text', text: 'Prova knepet: ”repet drar i blocket” blir ”blocket drar i repet”. Det är dragkraftens motkraft, och den verkar på repet. Friktionen har sin egen motkraft: ”bordet bromsar blocket” blir ”blocket drar bordet med sig” – lika mycket, men på bordet.' },

        { typ: 'rubrik', text: 'Fråga dig: vilket föremål verkar kraften på?' },
        { typ: 'text', text: 'En enkel regel hjälper. Verkar båda krafterna på samma föremål kan de ta ut varandra – som dragkraften och friktionen på blocket. Verkar den ena på ett föremål och den andra på ett annat, är det kraft och motkraft – som mellan handen och repet.' },

      ]
    },
    {
      id: 'i-vardagen', titel: 'Kraft och motkraft i vardagen',
      block: [
        { typ: 'rubrik', text: 'Du går framåt genom att trycka marken bakåt' },
        { typ: 'text', text: 'Kraft och motkraft förklarar hur du kan gå. När du tar ett steg trycker din fot bakåt mot marken. Marken trycker då tillbaka på din fot med en lika stor kraft framåt – och det är den kraften som för dig framåt. Kraften från marken är friktion. Här är friktionen alltså själv en del av en kraft och en motkraft: foten trycker marken bakåt, och marken trycker foten framåt. Utan friktion skulle foten bara glida bakåt, och då skulle det inte uppstå någon kraft och motkraft mellan foten och marken.' },

        { typ: 'rubrik', text: 'Två skridskoåkare som knuffar varandra glider isär' },
        { typ: 'text', text: 'Tänk dig två skridskoåkare som står stilla mitt emot varandra på isen. Den ena knuffar den andra. Båda glider iväg, åt var sitt håll. Den som knuffade blev alltså också knuffad – av motkraften. Kraften verkade på den ena skridskoåkaren och motkraften på den andra, lika stora och åt motsatt håll.' },
        { typ: 'figur', namn: 'kraftpar', satt: 'knuff', foremal: [{ namn: 'Skridskoåkare 1' }, { namn: 'Skridskoåkare 2' }],
          krafter: ['Kraft på åkare 1', 'Kraft på åkare 2'] },

        { typ: 'rubrik', text: 'En raket trycker gasen bakåt och gasen trycker raketen framåt' },
        { typ: 'text', text: 'En raket fungerar på samma sätt. Motorn trycker ut het gas bakåt med en stor kraft. Gasen trycker då tillbaka på raketen med en lika stor kraft framåt. Raketen behöver alltså ingen luft eller mark att trycka mot – därför fungerar den också ute i rymden.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Krafter kommer alltid i par: om ett föremål påverkar ett annat med en kraft, påverkar det andra tillbaka med en lika stor *motkraft* åt motsatt håll.',
          'Kraft och motkraft verkar på olika föremål. Därför tar de inte ut varandra.',
          'Dragkraften och friktionen på blocket verkar på samma föremål. De tar ut varandra – det är *jämvikt*, inte kraft och motkraft.',
          'Fråga dig alltid: vilket föremål verkar kraften på? Byt plats på föremålen i meningen, så hittar du motkraften.',
          'Vi går, skridskoåkare glider isär och raketer lyfter tack vare kraft och motkraft.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
