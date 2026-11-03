/* Avsnittssida III, text C: Kraft och motkraft – enkel nivå. Samma källa, regler och figurer som standard.js. */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och motkraft' },
        { typ: 'text', text: 'Har du märkt att ett block drar i din hand när du drar i det? Det känns som om blocket drar tillbaka. Och det gör det! I den här texten lär du dig att krafter alltid kommer två och två. Du lär dig också varför friktionen inte är motkraften till ditt drag.' },
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
        { typ: 'rubrik', text: 'Blocket drar tillbaka i din hand' },
        { typ: 'text', text: 'Tänk på blocket som du drog över bordet. Tänk dig att det sitter ett snöre i blocket, och att du håller i snöret. När du drar känner du att snöret spänns. Det drar i din hand. Ju hårdare du drar i blocket, desto hårdare drar snöret i dig.' },
        { typ: 'figur', namn: 'kraftpar', satt: 'drag', foremal: [{ namn: 'Block' }, { namn: 'Hand' }],
          krafter: ['Handen drar i blocket', 'Blocket drar i handen'] },
        { typ: 'text', text: 'Det är blocket som drar tillbaka i dig. Den kraften kallas *motkraft*. Din kraft drar blocket mot dig. Motkraften drar dig mot blocket.' },

        { typ: 'rubrik', text: 'Krafter kommer alltid två och två' },
        { typ: 'text', text: 'Så är det inte bara med blocket. Det gäller alltid. När något knuffar eller drar i något annat, så knuffar eller drar det andra tillbaka. Och den kraften tillbaka är precis lika stor. Den verkar bara åt andra hållet.' },
        { typ: 'text', text: 'Den här regeln kallas Newtons tredje lag. Man kan också säga lagen om *kraft och motkraft*. Kraften och motkraften är alltid lika stora, de drar åt var sitt håll, och de kommer alltid samtidigt.' },

        { typ: 'rubrik', text: 'Kraften och motkraften verkar på olika saker' },
        { typ: 'text', text: 'Här kommer det viktiga. Kraften och motkraften verkar inte på samma sak. Din kraft verkar på blocket. Motkraften verkar på dig. De verkar alltså på två olika saker.' },
        { typ: 'text', text: 'Kommer du ihåg att två lika stora krafter åt olika håll kan ta ut varandra? Det gäller bara när båda krafterna verkar på samma sak. Kraft och motkraft verkar på olika saker. Därför tar de aldrig ut varandra.' },

        { typ: 'rubrik', text: 'Friktionen är inte motkraften till ditt drag' },
        { typ: 'text', text: 'Det är lätt att tro att friktionen är motkraften till ditt drag. Båda verkar ju åt andra hållet. Men så är det inte, och det är viktigt att hålla isär dem.' },
        { typ: 'text', text: 'Friktionen kommer från bordet. Den verkar på blocket och bromsar det. Motkraften till ditt drag kommer från blocket. Den verkar på din hand. Det är den du känner när snöret spänns.' },

        { typ: 'rubrik', text: 'Fråga dig: vilken sak verkar kraften på?' },
        { typ: 'text', text: 'Det finns ett enkelt knep för att inte blanda ihop dem. Fråga dig: vilken sak verkar kraften på?' },
        { typ: 'text', text: 'Om båda krafterna verkar på blocket – ditt drag och friktionen – då kan de ta ut varandra. Om den ena kraften verkar på blocket och den andra verkar på dig – då är det kraft och motkraft.' },

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
          'Friktionen är inte motkraften till ditt drag. Friktionen verkar på blocket. Motkraften till ditt drag verkar på dig.',
          'Fråga dig alltid: vilken sak verkar kraften på?',
          'Vi kan gå, skridskoåkare glider isär och raketer lyfter – tack vare kraft och motkraft.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
