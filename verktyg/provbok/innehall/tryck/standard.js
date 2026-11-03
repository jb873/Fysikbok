/* PROVDATA för verktyg/bok-grind.js – inte elevinnehåll. Text B: en egen bok, bara på standardnivån (Djupdykning
 * och de andra nivåerna är "kommer" för den här texten). Skriven i strömformatet (block, inga sidor): grinden prövar
 * en sidbrytning och regelkonflikten – ett stycke och en figur som inte ryms tillsammans på en sida. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'tryck', titel: 'Tryck',
      block: [
        { typ: 'rubrik', text: 'Provrubrik i en egen bok' },
        { typ: 'text', id: 'fore-brytning', text: 'Provtext: den här texten är en egen bok, med en egen innehållsförteckning. Den är skriven som en ström av block, och motorn bryter sidorna.' },
        { typ: 'sidbrytning' },
        { typ: 'rubrik', id: 'efter-brytning', text: 'Provrubrik efter en sidbrytning' },
        { typ: 'text', text: 'Provtext: rubriken ovanför börjar en ny sida, eftersom en sidbrytning står före den.' },
        { typ: 'rubrik', text: 'Ett långt stycke och en figur' },
        { typ: 'text', id: 'langt-stycke', text: 'Provtext: det här stycket är långt med flit. Tillsammans med figuren efter det ryms det inte på en sida, så stycket stannar där det står och figuren börjar nästa sida. Figuren delas aldrig. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida.' },
        { typ: 'figur', id: 'figur-efter', namn: 'flyter_sjunker', foremal: [
          { namn: 'Kork', densitet: 0.25 },
          { namn: 'Sten', densitet: 2.6 }
        ] },
        { typ: 'lank', till: ['ova'] }
      ]
    }
  ]
});
