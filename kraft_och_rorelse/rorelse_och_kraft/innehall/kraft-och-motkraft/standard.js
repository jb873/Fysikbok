/* Avsnittssida III, text C: Kraft och motkraft – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims granskade källa (III-B-C-Kraft-friktion-motkraft-alla-nivaer-v2.md, 2026-11-03), införd ordagrant i
 * strömformatet: ### = rubrik, ett stycke = ett textblock, [FIGUR n] = figuren där markeringen står (data ur
 * arbetsordern). "Det här lär du dig:" står som liten rubrik utan kolon, som i text A. Stycket "SPARAT TILL TEXT D"
 * i källan är inte infört. *olika* i källan var betoning, inte begrepp: vanlig text (Joachims beslut 2026-11-03).
 * Avsnittens id (inledning, kraft-och-motkraft, sammanfattning) är desamma på alla nivåer. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och motkraft' },
        { typ: 'text', text: 'När du drar i ett block känner du att blocket drar tillbaka i din hand. Det är ingen inbillning – det är en kraft. I den här texten lär du dig att krafter alltid kommer i par, och varför friktionen inte är motkraften till ditt drag.' },
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
      id: 'kraft-och-motkraft', titel: 'Kraft och motkraft', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'När du drar i blocket drar blocket i dig' },
        { typ: 'text', text: 'Tänk tillbaka på blocket du drog över bordet. Om du drar i ett snöre som sitter fast i blocket känner du hur snöret spänns och drar i din hand. Det är blocket som drar tillbaka i dig. Ju hårdare du drar, desto hårdare känns det i handen. Den kraften kallas *motkraft*.' },
        { typ: 'figur', namn: 'kraftpar', satt: 'drag', foremal: [{ namn: 'Block' }, { namn: 'Hand' }],
          krafter: ['Handen drar i blocket', 'Blocket drar i handen'] },

        { typ: 'rubrik', text: 'Krafter kommer alltid i par' },
        { typ: 'text', text: 'Det gäller inte bara blocket. När ett föremål påverkar ett annat med en kraft, påverkar det andra föremålet tillbaka med en lika stor kraft åt motsatt håll. Kraften och motkraften är alltid lika stora, de verkar alltid åt motsatt håll, och de uppstår alltid samtidigt. Det kallas Newtons tredje lag, eller lagen om *kraft och motkraft*.' },

        { typ: 'rubrik', text: 'Kraft och motkraft verkar på olika föremål' },
        { typ: 'text', text: 'Det viktiga är att kraften och motkraften verkar på två olika föremål. Din kraft verkar på blocket. Motkraften verkar på dig. Därför tar de inte ut varandra. För att krafter ska ta ut varandra måste de verka på samma föremål – som draget och friktionen gör på blocket.' },

        { typ: 'rubrik', text: 'Friktionen är inte motkraften till ditt drag' },
        { typ: 'text', text: 'Det är lätt att tro att friktionen är motkraften till ditt drag, eftersom båda verkar åt motsatt håll. Men så är det inte. Friktionen verkar på blocket och kommer från bordet. Motkraften till ditt drag verkar på din hand och kommer från blocket. Friktionen bromsar blocket. Motkraften är det du känner i handen. Friktionen har en egen motkraft: blocket drar bordet med sig framåt, lika mycket.' },
        { typ: 'text', text: 'En enkel regel hjälper: fråga dig vilket föremål kraften verkar på. Verkar båda krafterna på blocket kan de ta ut varandra – då handlar det om draget och friktionen. Verkar den ena på blocket och den andra på dig är det kraft och motkraft.' },

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
          'Friktionen är inte motkraften till ditt drag. Friktionen verkar på blocket – motkraften till ditt drag verkar på dig.',
          'Fråga dig alltid: vilket föremål verkar kraften på?',
          'Vi går, skridskoåkare glider isär och raketer lyfter tack vare kraft och motkraft.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
