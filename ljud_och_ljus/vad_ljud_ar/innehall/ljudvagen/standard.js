/* Avsnittssida I. Vad ljud är, text B: Ljudvågen – nivån standard (📘).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-B-Ljudvagen-alla-nivaer-v3.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ib.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'En ljudvåg kan beskrivas med några få ord' },
        { typ: 'text', text: 'I förra texten såg du att ljud är förtätningar och förtunningar som sprids genom luften. Men ljud är inte bara ljud. En fågel som kvittrar, en mistlur som tutar och en hund som hör något du inte hör – alla är ljudvågor, men de skiljer sig åt. För att kunna beskriva skillnaderna använder fysiken några få ord. När du kan dem kan du beskriva vilken ljudvåg som helst.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur samma ljudvåg kan ritas på två sätt',
          'vad *våglängd*, *frekvens* och *amplitud* betyder',
          'vilka ljud människan kan höra',
          'vad *infraljud* och *ultraljud* är, och vilka djur som använder dem'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tva-modeller', titel: 'Ljudvågen kan ritas på två sätt',
      block: [
        { typ: 'rubrik', text: 'Partikelmodellen visar luften' },
        { typ: 'text', text: 'Ett sätt att rita en ljudvåg är att rita luften som prickar. Där det är förtätningar ritar man prickarna tätt, och där det är förtunningar glest. Det kallas *partikelmodellen|partikelmodell*. Den visar ganska nära vad som händer i luften, men den är besvärlig att rita och svår att mäta i.' },
        { typ: 'rubrik', text: 'Vågmodellen visar trycket' },
        { typ: 'text', text: 'Därför ritar man oftare ljudet som en böljande linje, en våg. Det kallas *vågmodellen|vågmodell*. Linjen visar hur trycket i luften ändras längs ljudvågen. I en förtätning är trycket lite högre, och där går linjen upp till en *vågtopp*. I en förtunning är trycket lite lägre, och där går linjen ned till en *vågdal*. Mitt emellan finns en rak linje som visar det vanliga lufttrycket.' },
        // [BILD B1: samma ljudvåg i två modeller rakt ovanför varandra. Överst partikelmodellen: prickar som är täta i förtätningarna och glesa i förtunningarna. Under den vågmodellen: en böljande linje där varje vågtopp ligger rakt under en förtätning och varje vågdal rakt under en förtunning, med lodräta streckade hjälplinjer. Våglängden markerad i båda modellerna, lika lång: från förtätning till förtätning och från vågtopp till vågtopp. Vågmodellens lodräta axel märkt "tryck", den vågräta "avstånd", en streckad mittlinje märkt "vanligt lufttryck"]
        { id: 'bild-b1', typ: 'figur', namn: 'ljud', lage: 'tva-modeller', bildtext: 'Varje vågtopp står rakt under en förtätning och varje vågdal rakt under en förtunning.' },
        { typ: 'text', text: 'Många tror att vågmodellen visar att luften rör sig upp och ned som vattnet i en våg på sjön. Så är det inte. Luften svänger fram och tillbaka i samma riktning som ljudet färdas. Linjens höjd visar bara hur högt trycket är. Vågmodellen är alltså ett diagram, inte en bild av hur luften ser ut.' }
      ]
    },
    {
      id: 'vaglangd-frekvens-amplitud', titel: 'Våglängd, frekvens och amplitud',
      block: [
        { typ: 'rubrik', text: 'Våglängden är avståndet mellan två vågtoppar' },
        { typ: 'text', text: 'Avståndet från en vågtopp till nästa vågtopp kallas *våglängd*. Man kan lika gärna mäta från en vågdal till nästa, eller från en förtätning till nästa. Våglängden för ljud man hör är allt från några centimeter till flera meter.' },
        { typ: 'rubrik', text: 'Frekvensen är antalet svängningar per sekund' },
        { typ: 'text', text: 'Hur många gånger ljudkällan svänger fram och tillbaka på en sekund kallas *frekvens*. Frekvens mäts i enheten *hertz|hertz*, som förkortas Hz. 1 Hz betyder en svängning per sekund. Om en gitarrsträng svänger 110 gånger på en sekund har tonen frekvensen 110 Hz. För stora frekvenser används också kilohertz, kHz. 1 kHz är 1 000 Hz. Enheten är uppkallad efter den tyske fysikern Heinrich Hertz.' },
        { typ: 'text', text: 'Surret från insekter är ett bra exempel. Ett bi kan slå med vingarna ungefär 200 gånger i sekunden, och vingarna sätter luften i svängning. Vingslagen skapar ett surr där frekvenser kring 200 Hz ingår. En mygga slår med vingarna betydligt snabbare, flera hundra gånger i sekunden, och det bidrar till att myggans surr låter ljusare och gnälligare.' },
        { typ: 'text', text: 'Varje svängning skickar iväg en ny förtätning. Om ljudkällan svänger snabbt kommer förtätningarna tätt efter varandra, och våglängden blir kort. Om den svänger långsamt kommer de glest, och våglängden blir lång. När ljudet färdas genom samma ämne hör alltså hög frekvens ihop med kort våglängd, och låg frekvens med lång våglängd. Frekvensen avgör om ett ljud låter ljust eller mörkt. Ett ljud med hög frekvens, som en flöjt, låter ljust. Ett ljud med låg frekvens, som en bas, låter mörkt.' },
        { typ: 'rubrik', text: 'Amplituden visar hur kraftigt luften svänger' },
        { typ: 'text', text: 'Hur mycket lufttrycket ändras när ljudvågen passerar kallas *amplitud*. I vågmodellen är amplituden avståndet från mittlinjen upp till en vågtopp, eller ned till en vågdal. Ju kraftigare ljudkällan svänger, desto större blir amplituden. Stor amplitud ger ett starkt ljud, liten amplitud ett svagt. Amplituden har inget med frekvensen att göra. Ett ljud kan vara både ljust och starkt, eller ljust och svagt. Om skillnaden mellan tonhöjd och ljudstyrka läser du mer i texten om toner och klang.' },
        { typ: 'rubrik', text: 'Ljudvågen kan visas på en skärm' },
        { typ: 'text', text: 'Vågmodellen är inte bara en ritning. Om en mikrofon fångar upp ljudet kan en skärm visa ljudvågen som en linje. Ett sådant instrument kallas *oscilloskop|oscilloskop*, och i dag finns det appar som gör samma sak med mobilens mikrofon. Visslar du en ljus ton ser du många vågtoppar tätt. Brummar du en mörk ton ser du färre, glesare toppar. Visslar du starkare blir topparna högre, men lika täta. Så kan man se frekvens och amplitud med egna ögon.' },
        { typ: 'text', text: 'Lägg märke till en skillnad. I vågmodellen visar den vågräta axeln avståndet. På ett oscilloskop visar den i stället tiden. Därför visar avståndet mellan topparna på skärmen hur lång tid det går mellan två svängningar, inte ljudets våglängd.' },
        // [BILD B2: en våg i vågmodellen med tre saker utmärkta: våglängd (dubbelpil från vågtopp till vågtopp), amplitud (dubbelpil från mittlinjen upp till en vågtopp), och en vågtopp respektive en vågdal med namn. Alla vågor har avstånd på den vågräta axeln och visar ljud i samma ämne. Under den två vågor bredvid varandra med samma amplitud: hög frekvens (många vågtoppar tätt, kort våglängd) och låg frekvens (få vågtoppar glest, lång våglängd)]
        { id: 'bild-b2', typ: 'figur', namn: 'ljud', lage: 'vagbegrepp', bildtext: 'Med samma amplitud ger hög frekvens kort våglängd och låg frekvens lång våglängd.' }
      ]
    },
    {
      id: 'horomradet', titel: 'Hörområdet',
      block: [
        { typ: 'rubrik', text: 'Människan hör ungefär 20–20 000 Hz' },
        { typ: 'text', text: 'Vi kan inte höra alla ljudvågor. För att vi ska höra ett ljud måste frekvensen vara högre än ungefär 20 Hz och lägre än ungefär 20 000 Hz. Det kallas människans *hörområde*. Vanligt tal ligger mitt i området, ungefär mellan några hundra och några tusen hertz, och där hör vi som allra bäst.' },
        { typ: 'rubrik', text: 'Med åldern försvinner de ljusaste ljuden' },
        { typ: 'text', text: 'Med stigande ålder blir det ofta svårare att höra de högsta frekvenserna. Hörseln påverkas också av buller och skiljer sig mellan olika människor. Många vuxna hör inte ljud över 15 000 Hz, och vissa mycket ljusa ljud, till exempel från en del insekter, kan vara svåra för vuxna att uppfatta fast barn och ungdomar hör dem. Det finns till och med ringsignaler och larm på ungefär 17 000 Hz som vissa tonåringar kan höra men som många vuxna inte uppfattar.' }
      ]
    },
    {
      id: 'infra-och-ultraljud', titel: 'Infraljud och ultraljud',
      block: [
        { typ: 'rubrik', text: 'Infraljud har lägre frekvens än vi kan höra' },
        { typ: 'text', text: 'Ljud med lägre frekvens än 20 Hz kallas *infraljud*. Infraljud uppstår vid åska, jordbävningar och vulkanutbrott, när stora vågor slår mot en kust och när väderfronter drar fram. Det kommer också från stora maskiner, ventilationssystem och vindkraftverk. Infraljud har mycket lång våglängd och kan färdas mycket långt. Det dämpas mindre än ljus ljud, men blir ändå svagare med avståndet. Elefanter pratar med varandra med infraljud över flera kilometer, och blåvalarnas djupa läten kan höras av andra valar på hundratals kilometers avstånd i havet. Även om vi inte hör infraljud kan vi ibland känna det, något du läser mer om i texten om buller och hälsa.' },
        { typ: 'rubrik', text: 'Ultraljud har högre frekvens än vi kan höra' },
        { typ: 'text', text: 'Ljud med högre frekvens än 20 000 Hz kallas *ultraljud*. Många tror att ultraljud är extra starkt ljud. Men "ultra" handlar om frekvensen, inte om styrkan. Ett ultraljud kan vara både starkt och svagt, men vi hör det inte i alla fall.' },
        { typ: 'text', text: 'Många djur hör ultraljud. En hund hör upp till ungefär 45 000 Hz, och därför finns det hundvisselpipor som hunden hör men inte människan. Fladdermöss skickar ut ultraljud på upp till 200 000 Hz och lyssnar på ekot för att hitta insekter och undvika hinder i mörker. Delfiner gör likadant i vattnet. Människan använder ultraljud bland annat i vården, något du läser mer om i texten om eko och ultraljud.' },
        // [BILD B3: en frekvensaxel som en vågrät pil från 1 Hz till 200 000 Hz, indelad i infraljud (under 20 Hz), hörbart ljud (20–20 000 Hz) och ultraljud (över 20 000 Hz). Under axeln staplar med ungefärliga HÖRSELOMRÅDEN: människa (20–20 000 Hz), hund (ca 60–45 000 Hz), fladdermus (ca 2 000–110 000 Hz), delfin (ca 100–150 000 Hz). Separat, tydligt märkt "läten": elefantens och blåvalens låga läten (under ca 20–40 Hz). Axeln med logaritmisk skala, markeringar vid 20, 200, 2 000, 20 000 och 200 000 Hz]
        { id: 'bild-b3', typ: 'figur', namn: 'ljud', lage: 'horomraden', bildtext: 'Människan hör ungefär 20–20 000 Hz. Hunden, fladdermusen och delfinen hör också ultraljud.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En ljudvåg kan ritas i partikelmodellen, med prickar, eller i vågmodellen, som en linje som visar trycket.',
          'I vågmodellen motsvarar en vågtopp en förtätning och en vågdal en förtunning. Luften åker inte upp och ned.',
          'Våglängd är avståndet mellan två vågtoppar.',
          'Frekvens är antalet svängningar per sekund och mäts i hertz (Hz). Hög frekvens ger kort våglängd och ett ljust ljud.',
          'Amplitud är hur stor tryckändringen är i ljudvågen. Stor amplitud ger ett starkt ljud.',
          'Människan hör ungefär 20–20 000 Hz. Med åldern försvinner de högsta frekvenserna.',
          'Infraljud har lägre frekvens än 20 Hz, ultraljud högre än 20 000 Hz. Många djur kan höra dem.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
