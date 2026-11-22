/* Avsnittssida I. Vad ljud är, text B: Ljudvågen – nivån enkel (📗).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-B-Ljudvagen-alla-nivaer-v3.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ib.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Några få ord räcker för att beskriva ljud' },
        { typ: 'text', text: 'I förra texten läste du att ljud är förtätningar och förtunningar som sprids genom luften. Men alla ljud är inte likadana. Tänk på en fågel som kvittrar. Tänk sedan på en båt som tutar med en djup mistlur. Båda är ljud, men de låter helt olika. Och ibland hör en hund något som du inte hör alls.' },
        { typ: 'text', text: 'För att kunna beskriva hur ljud skiljer sig åt använder man några få ord. När du har lärt dig dem kan du beskriva alla ljud som finns.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att man kan rita ljud på två sätt',
          'vad orden *våglängd*, *frekvens* och *amplitud* betyder',
          'vilka ljud vi människor kan höra',
          'vad *infraljud* och *ultraljud* är, och vilka djur som kan höra dem'
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
        { typ: 'rubrik', text: 'I partikelmodellen ritar man luften som prickar' },
        { typ: 'text', text: 'Ljud syns inte. Men man kan rita det. Ett sätt är att rita luften som små prickar. Där det är förtätningar ritar man prickarna tätt. Där det är förtunningar ritar man dem glest. Det kallas *partikelmodellen|partikelmodell*.' },
        { typ: 'text', text: 'Partikelmodellen visar ganska bra hur det ser ut i luften. Men den tar lång tid att rita, och det är svårt att mäta något i den.' },
        { typ: 'rubrik', text: 'I vågmodellen ritar man en böljande linje' },
        { typ: 'text', text: 'Därför ritar man oftast ljud på ett annat sätt, som en böljande linje. Det kallas *vågmodellen|vågmodell*.' },
        { typ: 'text', text: 'Linjen visar hur stort trycket i luften är. I en förtätning är luften lite mer hoptryckt, och trycket är lite högre. Där går linjen upp. Den högsta punkten kallas en *vågtopp*. I en förtunning är trycket lite lägre. Där går linjen ned. Den lägsta punkten kallas en *vågdal*. I mitten går en rak linje. Den visar hur stort trycket är när det är tyst.' },
        // [BILD B1: samma ljudvåg i två modeller rakt ovanför varandra. Överst partikelmodellen: prickar som är täta i förtätningarna och glesa i förtunningarna. Under den vågmodellen: en böljande linje där varje vågtopp ligger rakt under en förtätning och varje vågdal rakt under en förtunning, med lodräta streckade hjälplinjer. Våglängden markerad i båda modellerna, lika lång: från förtätning till förtätning och från vågtopp till vågtopp. Vågmodellens lodräta axel märkt "tryck", den vågräta "avstånd", en streckad mittlinje märkt "vanligt lufttryck"]
        { id: 'bild-b1', typ: 'figur', namn: 'ljud', lage: 'tva-modeller', bildtext: 'Varje vågtopp står rakt under en förtätning och varje vågdal rakt under en förtunning.' },
        { typ: 'text', text: 'Titta på bilden. Varje vågtopp ligger precis under en förtätning. Varje vågdal ligger precis under en förtunning. Det är samma ljud, ritat på två sätt.' },
        { typ: 'text', text: 'Många tror att linjen visar att luften åker upp och ned, som vattnet när det är vågor på en sjö. Men så är det inte. Luften svänger fram och tillbaka, i samma riktning som ljudet färdas. Linjen är ett diagram som visar trycket. Den är inte en bild av hur luften ser ut.' }
      ]
    },
    {
      id: 'vaglangd-frekvens-amplitud', titel: 'Våglängd, frekvens och amplitud',
      block: [
        { typ: 'rubrik', text: 'Våglängden är avståndet från en vågtopp till nästa' },
        { typ: 'text', text: 'Avståndet från en vågtopp till nästa vågtopp kallas *våglängd*. Man kan också mäta från en vågdal till nästa vågdal. Det blir lika långt.' },
        { typ: 'text', text: 'Ljud som vi hör har en våglängd på allt från några centimeter till flera meter.' },
        { typ: 'rubrik', text: 'Frekvensen är hur många gånger det svänger varje sekund' },
        { typ: 'text', text: 'Hur många gånger ljudkällan svänger fram och tillbaka på en sekund kallas *frekvens*.' },
        { typ: 'text', text: 'Frekvens mäts i enheten *hertz|hertz*. Det skrivs Hz. 1 Hz betyder att något svänger en gång varje sekund. 100 Hz betyder att det svänger 100 gånger varje sekund. Om en gitarrsträng svänger 110 gånger på en sekund har tonen frekvensen 110 Hz.' },
        { typ: 'text', text: 'För stora tal används också kilohertz. Det skrivs kHz. 1 kHz är 1 000 Hz. Ordet hertz kommer från en tysk forskare som hette Heinrich Hertz.' },
        { typ: 'text', text: 'Lyssna på insekter som surrar. Ett bi kan slå med vingarna ungefär 200 gånger varje sekund. Vingarna sätter luften i svängning. Därför finns det en ton kring 200 Hz i biets surr. En mygga slår med vingarna mycket snabbare, flera hundra gånger varje sekund. Därför låter myggans surr ljusare och gnälligare än biets.' },
        { typ: 'rubrik', text: 'Hög frekvens ger kort våglängd' },
        { typ: 'text', text: 'Frekvens och våglängd hänger ihop. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Varje gång ljudkällan svänger skickar den iväg en ny förtätning.',
          'Om ljudkällan svänger snabbt kommer förtätningarna tätt efter varandra. Då blir våglängden kort.',
          'Om ljudkällan svänger långsamt kommer förtätningarna glest. Då blir våglängden lång.'
        ] },
        { typ: 'text', text: 'Det gäller när ljudet går genom samma ämne, till exempel luft. I vatten går ljudet fortare, och då blir alla våglängder längre.' },
        { typ: 'text', text: 'Frekvensen bestämmer om ljudet låter ljust eller mörkt. Hög frekvens låter ljust, som en flöjt eller en fågel. Låg frekvens låter mörkt, som en bas eller en mistlur.' },
        { typ: 'rubrik', text: 'Amplituden är hur kraftigt luften svänger' },
        { typ: 'text', text: 'Hur mycket trycket i luften ändras när ljudet passerar kallas *amplitud*. I vågmodellen ser du amplituden som avståndet från mittlinjen upp till en vågtopp. Ju kraftigare ljudkällan svänger, desto större blir amplituden.' },
        { typ: 'text', text: 'Stor amplitud ger ett starkt ljud. Liten amplitud ger ett svagt ljud.' },
        { typ: 'text', text: 'Lägg märke till att amplitud och frekvens är två olika saker. Ett ljud kan vara ljust och starkt. Det kan också vara ljust och svagt. Om skillnaden mellan hur ljust och hur starkt ett ljud är får du läsa mer i texten om toner och klang.' },
        { typ: 'rubrik', text: 'Du kan se ljudvågen på en skärm' },
        { typ: 'text', text: 'Vågmodellen är inte bara något man ritar. Man kan faktiskt se ljudvågen på en skärm. En mikrofon fångar upp ljudet, och skärmen visar det som en böljande linje. Ett sådant instrument kallas *oscilloskop|oscilloskop*. Det finns också appar som gör samma sak med mobilens mikrofon.' },
        { typ: 'text', text: 'Prova själv om du har en sådan app. Så här kan du göra:' },
        { typ: 'punkter', punkter: [
          'Vissla en ljus ton. Du ser många vågtoppar tätt intill varandra.',
          'Brumma en mörk ton. Du ser färre vågtoppar, och de ligger glesare.',
          'Vissla samma ton, men starkare. Vågtopparna blir högre, men de ligger lika tätt.'
        ] },
        { typ: 'text', text: 'Så kan du se frekvens och amplitud med dina egna ögon.' },
        { typ: 'text', text: 'Men tänk på en sak. I vågmodellen visar linjen hur trycket ändras längs en sträcka. På skärmen visar linjen hur trycket ändras med tiden. Avståndet mellan topparna på skärmen är alltså tiden mellan två svängningar, inte våglängden.' },
        // [BILD B2: en våg i vågmodellen med tre saker utmärkta: våglängd (dubbelpil från vågtopp till vågtopp), amplitud (dubbelpil från mittlinjen upp till en vågtopp), och en vågtopp respektive en vågdal med namn. Alla vågor har avstånd på den vågräta axeln och visar ljud i samma ämne. Under den två vågor bredvid varandra med samma amplitud: hög frekvens (många vågtoppar tätt, kort våglängd) och låg frekvens (få vågtoppar glest, lång våglängd)]
        { id: 'bild-b2', typ: 'figur', namn: 'ljud', lage: 'vagbegrepp', bildtext: 'Med samma amplitud ger hög frekvens kort våglängd och låg frekvens lång våglängd.' }
      ]
    },
    {
      id: 'horomradet', titel: 'Hörområdet',
      block: [
        { typ: 'rubrik', text: 'Vi kan höra ljud mellan ungefär 20 och 20 000 Hz' },
        { typ: 'text', text: 'Vi människor kan inte höra alla ljud. För att vi ska höra ett ljud måste frekvensen vara högre än ungefär 20 Hz. Den måste också vara lägre än ungefär 20 000 Hz. Det kallas människans *hörområde*.' },
        { typ: 'text', text: 'När vi pratar ligger ljudet mitt i hörområdet. Där hör vi som allra bäst.' },
        { typ: 'rubrik', text: 'När man blir äldre hör man inte de ljusaste ljuden' },
        { typ: 'text', text: 'När man blir äldre blir det ofta svårare att höra de allra ljusaste ljuden. Hörseln kan också skadas av starka ljud, och den är olika hos olika människor. Många vuxna kan inte höra ljud över 15 000 Hz. Vissa insekter låter så ljust att barn hör dem, men inte alla vuxna.' },
        { typ: 'text', text: 'Det finns till och med ringsignaler som ligger på ungefär 17 000 Hz. Vissa tonåringar kan höra dem, men många vuxna märker ingenting.' }
      ]
    },
    {
      id: 'infra-och-ultraljud', titel: 'Infraljud och ultraljud',
      block: [
        { typ: 'rubrik', text: 'Infraljud är för mörkt för att vi ska höra det' },
        { typ: 'text', text: 'Ljud som har lägre frekvens än 20 Hz kallas *infraljud*. Vi kan inte höra det.' },
        { typ: 'text', text: 'Infraljud kommer från naturen, till exempel från åska, jordbävningar och vulkaner. Det uppstår också när stora vågor slår mot en strand och när vädret ändras. Infraljud kommer också från stora maskiner, fläktar och vindkraftverk.' },
        { typ: 'text', text: 'Infraljud har mycket lång våglängd. Det kan färdas mycket långt. Det blir svagare ju längre det går, men inte lika snabbt som ljusa ljud. Elefanter pratar med varandra med infraljud, fast de är flera kilometer ifrån varandra. Blåvalar gör djupa läten som andra valar kan höra på hundratals kilometers avstånd i havet.' },
        { typ: 'text', text: 'Vi kan inte höra infraljud, men ibland kan vi känna det. Det får du läsa mer om i texten om buller och hälsa.' },
        { typ: 'rubrik', text: 'Ultraljud är för ljust för att vi ska höra det' },
        { typ: 'text', text: 'Ljud som har högre frekvens än 20 000 Hz kallas *ultraljud*.' },
        { typ: 'text', text: 'Många tror att ultraljud betyder ett väldigt starkt ljud. Men det stämmer inte. Ordet "ultra" handlar om frekvensen, alltså hur ljust ljudet är. Det handlar inte om hur starkt det är. Vi hör inte ultraljud, oavsett om det är starkt eller svagt.' },
        { typ: 'text', text: 'Många djur kan höra ultraljud. En hund hör ljud upp till ungefär 45 000 Hz. Därför finns det hundvisselpipor. När man blåser i en sådan hör hunden det, men människan hör ingenting.' },
        { typ: 'text', text: 'Fladdermöss gör ultraljud när de flyger. Ljudet studsar mot insekter och väggar och kommer tillbaka som ett eko. Fladdermusen lyssnar på ekot och vet då var insekterna finns och var det är hinder. Så kan den jaga i mörker utan att krocka. Delfiner gör likadant i vattnet.' },
        { typ: 'text', text: 'Människor använder också ultraljud, till exempel inom vården. Det får du läsa mer om i texten om eko och ultraljud.' },
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
          'Man kan rita ljud på två sätt: som prickar i partikelmodellen eller som en böljande linje i vågmodellen.',
          'I vågmodellen är en vågtopp en förtätning och en vågdal en förtunning. Linjen visar trycket. Luften åker inte upp och ned.',
          'Våglängd är avståndet från en vågtopp till nästa.',
          'Frekvens är hur många gånger det svänger varje sekund. Den mäts i hertz (Hz).',
          'Hög frekvens ger kort våglängd och ett ljust ljud. Låg frekvens ger lång våglängd och ett mörkt ljud.',
          'Amplitud är hur stor tryckändringen är i ljudvågen. Stor amplitud ger ett starkt ljud.',
          'Människan hör ljud mellan ungefär 20 och 20 000 Hz.',
          'Infraljud är under 20 Hz. Ultraljud är över 20 000 Hz. Många djur kan höra dem.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
