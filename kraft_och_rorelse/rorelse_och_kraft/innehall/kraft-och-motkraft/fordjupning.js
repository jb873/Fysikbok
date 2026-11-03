/* Avsnittssida III, text C: Kraft och motkraft – fördjupning. Samma källa och regler som standard.js; här visar
 * kraftparen värdet (10 N). Stycket om tyngd och normalkraft är sparat till text D och inte infört här. */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och motkraft – fördjupning' },
        { typ: 'text', text: 'Newtons tredje lag är enkel att säga men lätt att använda fel. Här får du se varför lika stora krafter ändå kan ge helt olika rörelser, och hur friktionen själv ingår i kraftpar.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'Newtons tredje lag – *kraft och motkraft* mellan två föremål',
          'varför lika stora krafter ger olika acceleration',
          'hur friktionen ingår i kraftpar'
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
        { typ: 'figur', namn: 'kraftpar', satt: 'drag', foremal: [{ namn: 'Block' }, { namn: 'Hand' }],
          krafter: ['Handen drar i blocket', 'Blocket drar i handen'], storlek: 10, enhet: 'N', varden: true },

        { typ: 'rubrik', text: 'Ett kraftpar verkar alltid på två olika föremål' },
        { typ: 'text', text: 'Kraften verkar på B, motkraften verkar på A. Därför kan kraft och motkraft aldrig ta ut varandra – krafter tar bara ut varandra när de verkar på samma föremål. När du drar blocket över bordet verkar fyra krafter på blocket: ditt drag, friktionen, tyngden och normalkraften. Ingen av dem är motkraft till någon annan av dem. Motkraften till ditt drag verkar på din hand, och motkraften till friktionen verkar på bordet.' },

        { typ: 'rubrik', text: 'Lika stora krafter kan ge olika rörelser' },
        { typ: 'text', text: 'En stor lastbil och en liten bil krockar. Vilken bil påverkas av störst kraft? Svaret överraskar många: krafterna är exakt lika stora, enligt Newtons tredje lag. Men den lilla bilen har mycket mindre massa, och därför ändras dess rörelse mycket mer. Samma kraft ger större acceleration på ett föremål med liten massa. Det är därför de som sitter i den lilla bilen skadas värre.' },

        { typ: 'rubrik', text: 'Skridskoåkarna glider olika fort om de har olika massa' },
        { typ: 'text', text: 'Två skridskoåkare knuffar varandra. Kraften och motkraften är lika stora, men om den ena väger dubbelt så mycket som den andra glider hon iväg med ungefär halva farten. Det är samma kraft men olika massa, och därför olika rörelse.' },
        { typ: 'figur', namn: 'kraftpar', satt: 'knuff', foremal: [{ namn: 'Skridskoåkare 1' }, { namn: 'Skridskoåkare 2' }],
          krafter: ['Kraft på åkare 1', 'Kraft på åkare 2'], storlek: 10, enhet: 'N', varden: true },

        { typ: 'rubrik', text: 'Raketen behöver inget att trycka mot' },
        { typ: 'text', text: 'En raket trycker ut gas bakåt, och gasen trycker raketen framåt med en lika stor kraft. Kraftparet finns mellan raketen och gasen, inte mellan raketen och luften. Därför fungerar en raket bäst i rymden, där inget luftmotstånd bromsar den.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En kraft är alltid en växelverkan mellan två föremål. Newtons tredje lag: kraft och motkraft är lika stora, motriktade och verkar på olika föremål.',
          'Kraft och motkraft kan aldrig ta ut varandra, eftersom de verkar på olika föremål.',
          'Lika stora krafter ger olika rörelser om massorna är olika.',
          'Friktionen på blocket har sin motkraft på bordet – inte i ditt drag.',
          'Fråga dig alltid: vilka två föremål växelverkar, och vilket föremål verkar kraften på?'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
