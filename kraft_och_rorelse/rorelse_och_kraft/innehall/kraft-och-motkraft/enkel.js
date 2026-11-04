/* Avsnittssida III, text C: Kraft och motkraft – enkel nivå. Samma källa (v3), regler och figurer som standard.js. */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och motkraft' },
        { typ: 'text', text: 'Har du märkt att ett rep drar i din hand när du drar i det? Det känns som om repet drar tillbaka. Och det gör det! I den här texten lär du dig att krafter alltid kommer två och två. Du lär dig också varför friktionen inte är motkraften till ditt drag.' },
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
        { typ: 'rubrik', text: 'Först tittar vi på blocket' },
        { typ: 'text', text: 'Titta på bilden. Någon drar i ett rep. Repet sitter fast i ett block som ligger på ett bord. Det är samma block som i texten om kraft och friktion.' },
        { typ: 'text', text: 'Titta nu bara på blocket. Två pilar sitter på blocket. Den ena pilen pekar framåt. Det är dragkraften – repet drar blocket framåt. Den andra pilen pekar bakåt. Det är friktionen – bordet bromsar blocket. Pilarna är lika långa. Därför tar krafterna ut varandra, och blocket ligger still.' },
        // BILD B: krafterna på blocket
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [300, 552], till: [580, 552], etikett: [750, 600] },
                  { namn: 'friktion', fran: [300, 640], till: [20, 640], etikett: [160, 745] }],
          lika: [[0, 1]],
          beskrivning: 'Samma bild. Två lika långa pilar utgår från blocket: dragkraften framåt och friktionen bakåt. Båda verkar på blocket och tar ut varandra.' },

        { typ: 'rubrik', text: 'Nu tittar vi på handen och repet' },
        { typ: 'text', text: 'Titta nu på ett annat ställe i bilden – där handen håller i repet. Där finns också två krafter. Men de är av ett annat slag än krafterna på blocket.' },
        // BILD C: kraft och motkraft
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'jag drar i repet', fran: [690, 503], till: [950, 503], etikett: [820, 460] },
                  { namn: 'repet drar i mig', fran: [1255, 525], till: [995, 525], etikett: [1125, 615] }],
          lika: [[0, 1]],
          beskrivning: 'Samma bild. En pil sitter på repet och pekar mot handen: handen drar i repet. En lika lång pil sitter på handen och pekar mot blocket: repet drar i handen. Pilarna verkar på två olika föremål.' },
        { typ: 'text', text: 'Den ena pilen sitter på repet. Den visar att handen drar i repet. Den andra pilen sitter på handen. Den visar att repet drar i handen. Du kan känna det själv: ju hårdare du drar i repet, desto hårdare drar repet i dig. Kraften tillbaka kallas *motkraft*.' },

        { typ: 'rubrik', text: 'Titta på var pilarna sitter' },
        { typ: 'text', text: 'Jämför de två bilderna. I den första bilden sitter båda pilarna på samma sak – blocket. I den andra bilden sitter pilarna på två olika saker – den ena på repet och den andra på handen. Det är den stora skillnaden, och den är viktig att komma ihåg.' },

        { typ: 'rubrik', text: 'Krafter kommer alltid två och två' },
        { typ: 'text', text: 'Så är det inte bara med repet. Det gäller alltid. När något knuffar eller drar i något annat, så knuffar eller drar det andra tillbaka. Och den kraften tillbaka är precis lika stor. Den verkar bara åt andra hållet.' },
        { typ: 'text', text: 'Den här regeln kallas Newtons tredje lag. Man kan också säga lagen om *kraft och motkraft*. Kraften och motkraften är alltid lika stora, de drar åt var sitt håll, och de kommer alltid samtidigt.' },

        { typ: 'rubrik', text: 'Byt plats på orden så hittar du motkraften' },
        { typ: 'text', text: 'Det finns ett knep för att hitta motkraften. Säg vad som händer i en mening, och byt sedan plats på sakerna. ”Handen drar i repet” blir ”repet drar i handen”. Det är motkraften. ”Repet drar i blocket” blir ”blocket drar i repet”. Det är också en motkraft.' },

        { typ: 'rubrik', text: 'Kraften och motkraften verkar på olika saker' },
        { typ: 'text', text: 'Kraften och motkraften verkar alltså aldrig på samma sak. Din kraft verkar på repet. Motkraften verkar på dig.' },
        { typ: 'text', text: 'Kommer du ihåg att två lika stora krafter åt olika håll kan ta ut varandra? Det gäller bara när båda krafterna verkar på samma sak, som på blocket. Kraft och motkraft verkar på olika saker. Därför tar de aldrig ut varandra.' },

        { typ: 'rubrik', text: 'Friktionen är inte motkraften till dragkraften' },
        { typ: 'text', text: 'Det är lätt att tro att friktionen är motkraften till dragkraften. De pekar ju åt var sitt håll i den första bilden. Men så är det inte. Både dragkraften och friktionen sitter på blocket – samma sak. Då kan de inte vara kraft och motkraft. De är två olika krafter som tar ut varandra. Det kallas att blocket är i *jämvikt*.' },
        { typ: 'text', text: 'Prova knepet med att byta plats på orden. ”Repet drar i blocket” blir ”blocket drar i repet”. Det är dragkraftens motkraft – och den sitter på repet, inte på blocket.' },

        { typ: 'rubrik', text: 'Du går genom att trycka marken bakåt' },
        { typ: 'text', text: 'Kraft och motkraft förklarar något du gör varje dag: att gå. När du tar ett steg trycker du foten bakåt mot marken. Marken trycker då tillbaka på din fot, lika hårt, men framåt. Det är den kraften från marken som för dig framåt. Kraften från marken är friktion. Här är friktionen alltså själv en del av en kraft och en motkraft.' },
        { typ: 'text', text: 'Det här fungerar bara om det finns friktion. På blank is glider foten bara bakåt. Då kan du inte trycka mot marken, och marken kan inte trycka tillbaka. Därför är det så svårt att gå på is.' },

        { typ: 'rubrik', text: 'Skridskoåkare som knuffar varandra glider isär' },
        { typ: 'text', text: 'Tänk dig två kompisar som står still på isen med skridskor på. De står mitt emot varandra. Den ena knuffar den andra. Vad händer? Båda glider iväg, åt var sitt håll!' },
        { typ: 'figur', namn: 'kraftpar', satt: 'knuff', foremal: [{ namn: 'Skridskoåkare 1' }, { namn: 'Skridskoåkare 2' }],
          krafter: ['Kraft på åkare 1', 'Kraft på åkare 2'] },
        { typ: 'text', text: 'Den som knuffade blev också knuffad. Det var motkraften. Kraften verkade på den ena kompisen och motkraften på den andra. De var lika stora och åt var sitt håll.' },

        { typ: 'rubrik', text: 'En raket trycker gasen bakåt' },
        { typ: 'text', text: 'En raket fungerar på samma sätt. Raketens motor trycker ut het gas bakåt, väldigt kraftigt. Gasen trycker då tillbaka på raketen, lika kraftigt, men framåt. Det är det som får raketen att lyfta. Raketen behöver alltså inte trycka mot luften eller marken. Därför fungerar den också ute i rymden, där det inte finns någon luft.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Krafter kommer alltid två och två. När något drar eller knuffar i något annat, drar eller knuffar det andra tillbaka lika hårt. Den kraften kallas *motkraft*.',
          'Kraften och motkraften verkar på olika saker. Därför tar de inte ut varandra.',
          'Dragkraften och friktionen sitter båda på blocket. De tar ut varandra. Det är *jämvikt* – inte kraft och motkraft.',
          'Byt plats på orden i meningen, så hittar du motkraften.',
          'Vi kan gå, skridskoåkare glider isär och raketer lyfter – tack vare kraft och motkraft.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
