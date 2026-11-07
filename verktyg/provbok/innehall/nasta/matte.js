/* PROVDATA för verktyg/bok-grind.js – inte elevinnehåll. En stödbok (stodbocker, utan kort: bara länkmål), arbetsorder
 * 11, med länkar tillbaka till Nästa steg-boken ("Används i") och en PROVA-ruta. */
Bok.niva('stodbok', {
  avsnitt: [
    {
      id: 'matte-ett', titel: 'Provmatte ett',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: 'Provformler', bok: 'nasta-prov-nasta', ankare: 'formler' }, { text: 'alla provavsnitt' }] },
        { typ: 'rubrik', text: 'Provrubrik i stödboken' },
        { typ: 'text', text: 'Provtext i stödboken.' },
        { typ: 'prova', rader: ['2a. Provuppgift.', '2b. Provuppgift.'] }
      ]
    },
    {
      id: 'matte-tva', titel: 'Provmatte två',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: 'Provexempel', bok: 'nasta-prov-nasta', ankare: 'exempel' }] },
        { typ: 'rubrik', text: 'Provrubrik två i stödboken' },
        { typ: 'text', text: 'Provtext två i stödboken.' }
      ]
    }
  ]
});
