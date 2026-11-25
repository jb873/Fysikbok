/* Avsnittssida III. Ljusets väg, text C: Ljuset bryts – nivån fordjupning (📕).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-C-Ljuset-bryts-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiic.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ett tal för hur mycket ljuset bryts' },
        { typ: 'text', text: 'I Standard lärde du dig att ljuset bryts för att det byter hastighet. Ju större skillnad i hastighet, desto mer bryts ljuset. Här får du ett tal som beskriver det, *brytningsindex*. Med det kan du förklara varför en diamant glittrar mer än glas, hur kikare använder prismor i stället för speglar, och varför även ljud och havsvågor bryts.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *brytningsindex* är och hur man räknar med det',
          'varför en diamant glittrar så mycket',
          'hur ett prisma kan vända en ljusstråle helt med totalreflektion',
          'att alla sorters vågor bryts när de byter hastighet'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'brytningsindex', titel: 'Brytningsindex',
      block: [
        { typ: 'rubrik', text: 'Hur många gånger långsammare än i vakuum' },
        { typ: 'text', text: 'Ljusets hastighet i vakuum skrivs c och är ungefär 300 000 km/s. *Brytningsindex|brytningsindex* för ett ämne, som skrivs n, talar om hur många gånger snabbare ljuset går i vakuum än i ämnet.' },
        { typ: 'formel', uttryck: 'n = c / v', forklaring: 'n brytningsindex (saknar enhet), c ljusets hastighet i vakuum (km/s), v ljusets hastighet i ämnet (km/s)' },
        { typ: 'exempel', rubrik: 'Brytningsindex för vatten', stycken: [
          ['Ljuset går ungefär 225 000 km/s i vatten. Vilket brytningsindex har vatten?'],
          ['Givet: c = 300 000 km/s, v = 225 000 km/s. Sökt: n.'],
          ['Lösning:',
           'n = c / v = 300 000 km/s / 225 000 km/s ≈ 1,33',
           'Svar: Vatten har brytningsindex ungefär 1,33.']
        ] },
        { typ: 'text', text: 'Luft har brytningsindex 1,0003, nästan samma som vakuum. Vanligt glas har omkring 1,5, matolja omkring 1,47 och diamant 2,42. Ju större brytningsindex, desto mer bryts ljuset när det kommer in i ämnet från luft. Det finns en lag som säger exakt hur stor brytningsvinkeln blir för varje infallsvinkel, brytningslagen. Den lär du dig på gymnasiet, men principen är den du redan kan: ju större skillnad i brytningsindex, desto större ändring av riktningen.' }
      ]
    },
    {
      id: 'diamanten', titel: 'Diamanten',
      block: [
        { typ: 'rubrik', text: 'Liten gränsvinkel ger mycket glitter' },
        { typ: 'text', text: 'När ljuset går från ett ämne ut i luft blir gränsvinkeln mindre ju högre ämnets brytningsindex är. För vatten är den ungefär 49°, för glas 42° och för diamant bara ungefär 24°. Diamantens lilla gränsvinkel gör att ljus lätt totalreflekteras mot stenens inre ytor, eftersom det räcker att ljuset kommer lite snett.' },
        { typ: 'text', text: 'En diamantslipare formar stenen så att ljuset som kommer in uppifrån totalreflekteras mot de sneda ytorna i stenens nedre del och studsar tillbaka upp mot betraktaren. Genom att slipa ytorna i bestämda vinklar får man mycket av ljuset att komma ut genom toppen i stället för att läcka ut genom botten. Därför blixtrar en slipad diamant så mycket mer än en glasbit med samma form. Färgspelet, att diamanten blixtrar i regnbågens färger, beror på att olika färger bryts olika mycket, något du läser om i texten om färger.' },
        // [BILD C9: slipad diamant i genomskärning i numrerade steg: 1 ljus kommer in genom den plana toppen och bryts · 2 strålen träffar en av de sneda nedre ytorna med större vinkel än 24° och totalreflekteras · 3 strålen träffar den motsatta sneda ytan och totalreflekteras igen · 4 strålen går ut genom toppen mot betraktarens öga. Geometrin kontrolleras: infallsvinklarna i steg 2 och 3 är större än 24° och följer reflektionslagen]
        { id: 'bild-c9', typ: 'figur', namn: 'ljus', lage: 'diamant', bildtext: 'Ljuset totalreflekteras mot två sneda ytor och går ut genom toppen igen.' }
      ]
    },
    {
      id: 'prismat-vander', titel: 'Prismat som vänder strålen',
      block: [
        { typ: 'rubrik', text: 'Totalreflektion i stället för speglar' },
        { typ: 'text', text: 'Ett prisma med en rät vinkel och två vinklar på 45° kan vända en ljusstråle. Ljuset går rakt in genom den långa sidan, så det bryts inte. Inne i glaset träffar det den första korta sidan med infallsvinkeln 45°. Det är mer än glasets gränsvinkel på 42°, så ljuset totalreflekteras. Sedan träffar det den andra korta sidan, också med 45°, och totalreflekteras igen. Ljuset går ut tillbaka åt det håll det kom ifrån, och strålarna har bytt plats: den som var överst är nu nederst.' },
        // [BILD C10: rätvinkligt prisma i numrerade steg: 1 två parallella strålar, en övre och en nedre, går rakt in genom prismats långa sida · 2 de totalreflekteras mot den första korta sidan (infallsvinkel 45°, normalen streckad) · 3 de totalreflekteras mot den andra korta sidan · 4 de går ut genom den långa sidan tillbaka åt samma håll, och den övre strålen har blivit den nedre. Geometrin kontrolleras: båda strålarna träffar båda korta sidorna med exakt 45°]
        { id: 'bild-c10', typ: 'figur', namn: 'ljus', lage: 'prisma-vander', bildtext: 'Prismat skickar tillbaka ljuset åt samma håll, och den övre strålen har blivit den nedre.' },
        { typ: 'text', text: 'Vid totalreflektion reflekteras allt ljus vid gränsytan, utan de förluster som en spegelbeläggning ger. Även en bra spegel absorberar några procent. Dessutom kan en spegelbeläggning bli repig och matt. Därför används prismor i kikare. I en vanlig fältkikare skulle bilden annars bli upp och ned, och två prismor vänder den rätt. Den tekniken beskrivs mer i texten om optiska instrument.' }
      ]
    },
    {
      id: 'alla-vagor-bryts', titel: 'Alla vågor bryts',
      block: [
        { typ: 'rubrik', text: 'Ljud och havsvågor gör likadant' },
        { typ: 'text', text: 'Brytning är inget som bara gäller ljus. Alla vågor bryts när de byter hastighet. Havsvågor går långsammare där vattnet är grunt. När vågor kommer snett mot en strand når den del av vågen som är närmast land det grunda vattnet först och saktar in, och vågen vrids. Därför kommer vågorna nästan alltid rakt in mot stranden, även om vinden blåser snett.' },
        { typ: 'text', text: 'Ljud bryts också. En kväll när luften närmast en sjö är kall och luften högre upp är varmare går ljudet fortare högre upp. Ljudvågor som går snett uppåt böjs då tillbaka ned mot marken. Därför kan man ibland höra röster från andra sidan sjön förvånansvärt tydligt en stilla sommarkväll.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Brytningsindex n = c / v talar om hur många gånger långsammare ljuset går i ett ämne än i vakuum. Vatten har ungefär 1,33, glas 1,5 och diamant 2,42.',
          'Ju större skillnaden i brytningsindex är, desto mer ändras ljusets riktning vid samma infallsvinkel. När ljuset går från ett ämne till luft blir gränsvinkeln mindre ju högre ämnets brytningsindex är.',
          'Diamantens gränsvinkel är bara ungefär 24°. En slipad diamant är formad så att mycket av ljuset totalreflekteras inuti och kommer ut genom toppen.',
          'Ett rätvinkligt prisma kan vända en stråle med två totalreflektioner. Prismor används i kikare för att vända bilden rätt.',
          'Alla vågor bryts när de byter hastighet, även havsvågor och ljud.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
