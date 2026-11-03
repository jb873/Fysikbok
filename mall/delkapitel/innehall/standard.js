/* MALL – en nivås bok. Byt 'standard' mot nivåns id (samma som filnamnet) på båda ställena.
 * En självbärande bok: eleven läser den utan de andra nivåerna. Avsnittens id ska vara desamma på alla nivåer, så att
 * nivåbytet hittar rätt avsnitt. Texten flödar: skriv en ström av block – motorn bryter sidorna; dela aldrig en sida
 * för hand. Kontrollera med ?kontroll. Blocktyperna, figurerna och brytningsreglerna står i Fysik/README.md.
 * Lämna avsnitt: [] så länge nivån inte har innehåll. */
Bok.niva('standard', {
  avsnitt: [
    // {
    //   id: 'avsnittets-id', titel: 'Avsnittets namn',
    //   block: [
    //     { typ: 'rubrik', text: 'En påståenderubrik, som sammanfattar det som följer' },
    //     { typ: 'text', text: 'Brödtext med ett *begrepp*.' },
    //     { typ: 'figur', namn: '…' },                          // står på samma sida som stycket före
    //     { typ: 'rubrik', text: 'Nästa påstående' },
    //     { typ: 'text', text: '…' },
    //     { typ: 'lank', till: ['ova', 'sjalvskattning'] }      // sist i avsnittet
    //   ]
    // }
  ]
});
