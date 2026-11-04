/* Avsnittssida III, text C: Kraft och motkraft – fördjupning. Samma källa (v3) och regler som standard.js; här visar
 * kraftparet med skridskoåkarna värdet (10 N), som förut. BILD B och C står efter varandra, som i källan. */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och motkraft – fördjupning' },
        { typ: 'text', text: 'Newtons tredje lag är enkel att säga men lätt att använda fel. Här följer du krafterna från handen genom repet och blocket ända ner till jorden, och ser varför lika stora krafter ändå kan ge helt olika rörelser.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'Newtons tredje lag – *kraft och motkraft* mellan två föremål',
          'att följa kraftparen i en hel kedja av föremål',
          'varför lika stora krafter ger olika acceleration'
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
        { typ: 'rubrik', text: 'Krafter är alltid en växelverkan mellan två föremål' },
        { typ: 'text', text: 'En kraft finns aldrig ensam. Den uppstår alltid mellan två föremål som påverkar varandra – en växelverkan. Newtons tredje lag säger: om föremål A påverkar föremål B med en kraft, påverkar B föremål A med en lika stor kraft i motsatt riktning. Krafterna kallas *kraft och motkraft*, eller ett kraftpar.' },

        { typ: 'rubrik', text: 'Krafterna på ett föremål och kraftparen är två olika frågor' },
        { typ: 'text', text: 'Bilden visar krafterna på blocket: dragkraften från repet och friktionen från bordet. De verkar på samma föremål och tar ut varandra – blocket är i *jämvikt*. Men de är inte ett kraftpar. Ett kraftpar verkar alltid på två olika föremål, som handen och repet i nästa bild.' },
        // BILD B: krafterna på blocket
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [300, 552], till: [580, 552], etikett: [750, 600] },
                  { namn: 'friktion', fran: [300, 640], till: [20, 640], etikett: [160, 745] }],
          lika: [[0, 1]],
          beskrivning: 'Samma bild. Två lika långa pilar utgår från blocket: dragkraften framåt och friktionen bakåt. Båda verkar på blocket och tar ut varandra.' },
        // BILD C: kraft och motkraft
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941, utsnitt: [440, 330, 1152, 520],
          pilar: [{ namn: 'jag drar i repet', fran: [690, 503], till: [950, 503], etikett: [820, 460] },
                  { namn: 'repet drar i mig', fran: [1255, 525], till: [995, 525], etikett: [1125, 615] }],
          lika: [[0, 1]],
          beskrivning: 'Samma bild. En pil sitter på repet och pekar mot handen: handen drar i repet. En lika lång pil sitter på handen och pekar mot blocket: repet drar i handen. Pilarna verkar på två olika föremål.' },
        { typ: 'text', text: 'För att inte blanda ihop dem tar man ett föremål i taget. Frågan ”vilka krafter verkar på blocket?” avgör om blocket rör sig. Frågan ”vad är motkraften till den här kraften?” leder alltid till ett annat föremål.' },

        { typ: 'rubrik', text: 'Repet är ett eget föremål med ett kraftpar i varje ände' },
        { typ: 'text', text: 'Om man ser repet som ett eget föremål finns det två kraftpar. I ena änden drar handen i repet, och repet drar i handen. I andra änden drar repet i blocket, och blocket drar i repet. På repet verkar alltså två krafter – handens drag åt höger och blockets drag åt vänster – och när repet är i vila är de lika stora. Därför drar repet lika hårt i båda ändarna.' },

        { typ: 'rubrik', text: 'Kedjan av kraftpar slutar i jorden' },
        { typ: 'text', text: 'Följ friktionen vidare. Bordet bromsar blocket – och blocket drar bordet med sig lika mycket. Varför rör sig då inte bordet? För att golvet håller emot med friktion mot bordsbenen. Golvets friktion har i sin tur en motkraft: bordet drar golvet med sig. Golvet sitter fast i huset, och huset i jorden. Samma sak gäller dig: repet drar dig framåt, och friktionen mellan dina fötter och golvet håller dig kvar. Kedjan av kraftpar slutar alltid i jorden – och eftersom jorden är så enormt mycket tyngre än allt annat märks dess rörelse inte.' },

        { typ: 'rubrik', text: 'Lika stora krafter kan ge olika rörelser' },
        { typ: 'text', text: 'En stor lastbil och en liten bil krockar. Vilken bil påverkas av störst kraft? Svaret överraskar många: krafterna är exakt lika stora, enligt Newtons tredje lag. Men den lilla bilen har mycket mindre massa, och därför ändras dess rörelse mycket mer. Samma kraft ger större acceleration på ett föremål med liten massa. Det är därför de som sitter i den lilla bilen skadas värre.' },

        { typ: 'rubrik', text: 'Skridskoåkarna glider olika fort om de har olika massa' },
        { typ: 'text', text: 'Två skridskoåkare knuffar varandra. Kraften och motkraften är lika stora, men om den ena har dubbelt så stor massa som den andra glider hon iväg med ungefär halva farten. Det är samma kraft men olika massa, och därför olika rörelse.' },
        { typ: 'figur', namn: 'kraftpar', satt: 'knuff', foremal: [{ namn: 'Skridskoåkare 1' }, { namn: 'Skridskoåkare 2' }],
          krafter: ['Kraft på åkare 1', 'Kraft på åkare 2'], storlek: 10, enhet: 'N', varden: true },

        { typ: 'rubrik', text: 'I en dragkamp vinner den som får störst friktion från marken' },
        { typ: 'text', text: 'Två personer drar i var sin ände av ett rep. Repet drar lika hårt i båda – så länge det är i vila är krafterna på repet lika stora. Det som avgör är friktionen mellan fötterna och marken. Den växer, precis som för blocket, men bara upp till en gräns. Den vars fötter först börjar glida förlorar. Därför vinner ofta den som tar bäst spjärn, har bäst skor eller trycks hårdast mot marken – inte den som ”drar hårdast”.' },

        { typ: 'rubrik', text: 'Raketen behöver inget att trycka mot' },
        { typ: 'text', text: 'En raket trycker ut gas bakåt, och gasen trycker raketen framåt med en lika stor kraft. Kraftparet finns mellan raketen och gasen, inte mellan raketen och luften. Därför fungerar en raket också i rymden.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En kraft är alltid en växelverkan mellan två föremål. Newtons tredje lag: kraft och motkraft är lika stora, motriktade och verkar på olika föremål.',
          'Krafter som verkar på samma föremål kan ta ut varandra (*jämvikt*). Kraft och motkraft kan aldrig det.',
          'Kraftparen bildar en kedja – från handen genom repet, blocket, bordet och golvet ner till jorden.',
          'Lika stora krafter ger olika rörelser om massorna är olika.',
          'I en dragkamp avgör friktionen mot marken, inte vem som drar hårdast.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
