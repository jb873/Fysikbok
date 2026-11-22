/* Avsnittssida II. Ljud omkring oss, text D: Ljudnivå, buller och hälsa – nivån fordjupning (📕).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-D-Ljudniva-buller-och-halsa-alla-nivaer-v3.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iid: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iid.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Decibelskalan i siffror' },
        { typ: 'text', text: 'I Standard lärde du dig att 10 dB mer låter ungefär dubbelt så starkt. Här får du se vad som egentligen händer med energin, hur mycket ljudet avtar med avståndet och hur en hörselskada syns i ett hörseltest.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *ljudintensitet* är, och hur den hänger ihop med decibel',
          'hur mycket svagare ljudet blir när avståndet fördubblas',
          'vad ett *audiogram* är, och hur en bullerskada syns i det'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'ljudintensitet', titel: 'Ljudintensitet',
      block: [
        { typ: 'rubrik', text: 'Tio gånger mer energi för varje 10 dB' },
        { typ: 'text', text: 'Hur mycket ljudenergi som passerar en kvadratmeter varje sekund kallas *ljudintensitet|ljudintensitet*. Den mäts i watt per kvadratmeter, W/m². Decibelskalan är byggd så att varje ökning med 10 dB betyder tio gånger så stor intensitet. Örat uppfattar ändå inte tio gånger mer energi som tio gånger så starkt, utan ungefär dubbelt så starkt. Det är därför man använder en sådan skala.' },
        { typ: 'punkter', punkter: [
          '10 dB mer: 10 gånger så stor intensitet',
          '20 dB mer: 100 gånger så stor intensitet',
          '30 dB mer: 1 000 gånger så stor intensitet'
        ] },
        { typ: 'exempel', rubrik: 'Samtal och konsert', stycken: [
          ['Ett samtal ligger på 60 dB och en konsert på 110 dB. Hur många gånger större är ljudintensiteten på konserten?'],
          ['Givet: skillnaden är 110 dB − 60 dB = 50 dB. Sökt: hur många gånger större intensiteten är.'],
          ['Lösning: Varje 10 dB är en faktor 10. 50 dB är fem steg om 10 dB.',
           '10 · 10 · 10 · 10 · 10 = 100 000',
           'Svar: Ljudintensiteten på konserten är 100 000 gånger större än i samtalet.']
        ] },
        { typ: 'text', text: 'Örat klarar alltså intensiteter som skiljer sig en biljon gånger, från hörtröskeln vid 0 dB till smärtgränsen vid 120 dB.' },
        { typ: 'rubrik', text: 'Två högtalare ger bara 3 dB mer' },
        { typ: 'text', text: 'Om två likadana högtalare spelar lika starkt blir den sammanlagda intensiteten dubbelt så stor som från en. Det motsvarar bara ungefär 3 dB mer. Det är samma 3 dB som i regeln om hörselskador: 3 dB mer är dubbelt så mycket energi in i örat, och därför halveras tiden som ger samma ljudexponering.' }
      ]
    },
    {
      id: 'avstandslagen', titel: 'Avståndslagen',
      block: [
        { typ: 'rubrik', text: 'Dubbla avståndet ger fyra gånger mindre intensitet' },
        { typ: 'text', text: 'Ljud som sprids från en liten ljudkälla åt alla håll sprids över ytan av ett klot som växer. Ytan av ett klot ökar med kvadraten på radien. På dubbla avståndet är ytan fyra gånger så stor, och samma energi delas på fyra gånger så stor yta. Intensiteten blir då en fjärdedel. Det motsvarar ungefär 6 dB lägre ljudnivå. På tio gånger så stort avstånd är intensiteten bara en hundradel, alltså 20 dB lägre.' },
        // [BILD D4: en ljudkälla i mitten och två klot runt den, ett på avståndet r och ett på avståndet 2r. Samma lilla ruta på det inre klotet motsvarar fyra lika stora rutor på det yttre. Text: "dubbla avståndet – fyra gånger större yta – en fjärdedel av intensiteten – cirka 6 dB lägre". Märkt "fri ljudutbredning, utan reflexer"]
        { id: 'bild-d4', typ: 'figur', namn: 'ljud', lage: 'avstandslagen', bildtext: 'Dubbla avståndet sprider ljudet över fyra gånger så stor yta: cirka 6 dB lägre.' },
        { typ: 'exempel', rubrik: 'Högtalaren på konserten', stycken: [
          ['Två meter från en högtalare är ljudnivån 112 dB. Hur stark är den 16 meter bort, om ljudet sprids fritt?'],
          ['Givet: 2 m → 4 m → 8 m → 16 m är tre fördubblingar. Varje fördubbling ger ungefär 6 dB lägre. Sökt: ljudnivån.'],
          ['Lösning:',
           '112 dB − 3 · 6 dB = 112 dB − 18 dB = 94 dB',
           'Svar: Ungefär 94 dB.']
        ] },
        { typ: 'text', text: 'Inomhus stämmer avståndslagen sämre, eftersom ljudet också reflekteras mot väggar och tak.' }
      ]
    },
    {
      id: 'audiogram', titel: 'Audiogram',
      block: [
        { typ: 'rubrik', text: 'Ett hörseltest visar hörseln vid olika frekvenser' },
        { typ: 'text', text: 'Vid ett hörseltest får man lyssna på toner med olika frekvenser i hörlurar. Tonerna görs svagare och svagare, och man trycker på en knapp så länge man hör dem. Resultatet ritas i ett diagram som kallas *audiogram|audiogram*. Där visas för varje frekvens hur stark tonen måste vara för att man ska höra den. Skalan i ett audiogram är dB HL, där 0 dB HL är det som en normalhörande ung person nätt och jämnt hör vid varje frekvens. Det är alltså en annan nollpunkt än på decibelskalan i Standard. En normal hörsel ligger nära 0 dB HL vid alla frekvenser. Ju längre ned kurvan går, desto sämre hör man den frekvensen.' },
        { typ: 'rubrik', text: 'Bullerskadan syns som en dipp' },
        { typ: 'text', text: 'En hörselskada av buller har ett typiskt utseende. Bullerskador påverkar ofta hörseln särskilt mycket vid frekvenser omkring 3 000–6 000 Hz, medan den är nästan normal vid lägre frekvenser. I audiogrammet syns det som en dipp, ett hack nedåt i kurvan, ofta kring 4 000 Hz. Det beror bland annat på hur ljud överförs och förstärks i örat. Vid åldersnedsättning går kurvan i stället gradvis nedåt mot de högsta frekvenserna. En läkare kan alltså ofta se på audiogrammet vad hörselnedsättningen beror på.' },
        // [BILD D5: ett audiogram med frekvens (125–8 000 Hz) på den vågräta axeln och hörtröskel i dB HL på den lodräta, 0 dB HL överst och större värden nedåt. Tre kurvor: normal hörsel (nära 0 dB hela vägen), bullerskada (dipp vid 4 000 Hz, bättre igen vid 8 000 Hz), åldersnedsättning (gradvis sämre mot höga frekvenser)]
        { id: 'bild-d5', typ: 'figur', namn: 'ljud', lage: 'audiogram', bildtext: 'Bullerskadan syns som en dipp vid 4 000 Hz, åldersnedsättningen som en kurva som går nedåt mot de höga frekvenserna.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljudintensitet är ljudenergi per kvadratmeter och sekund, W/m².',
          'Varje 10 dB mer betyder tio gånger så stor intensitet. 3 dB mer betyder dubbelt så stor intensitet.',
          'Dubbla avståndet ger en fjärdedel av intensiteten, ungefär 6 dB lägre, om ljudet sprids fritt.',
          'Ett audiogram visar hur stark en ton måste vara för att man ska höra den vid olika frekvenser.',
          'En bullerskada syns ofta som en dipp kring 4 000 Hz. Åldersnedsättning syns som en kurva som sjunker mot höga frekvenser.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
