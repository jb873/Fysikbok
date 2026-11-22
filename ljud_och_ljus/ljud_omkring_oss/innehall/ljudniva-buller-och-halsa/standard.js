/* Avsnittssida II. Ljud omkring oss, text D: Ljudnivå, buller och hälsa – nivån standard (📘).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-D-Ljudniva-buller-och-halsa-alla-nivaer-v3.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iid: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iid.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljud kan vara skönt, men också skada' },
        { typ: 'text', text: 'Musik i hörlurarna, sorlet i matsalen, trafiken utanför fönstret. Vissa ljud väljer vi själva, andra tvingas vi höra. Starka ljud kan skada hörseln för alltid, och även ljud som inte är särskilt starka kan göra oss stressade och trötta. I den här texten får du veta hur man mäter hur starkt ett ljud är, när ljud blir farligt för hörseln och vad både du själv och samhället kan göra mot buller.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur ljudnivå mäts i *decibel*',
          'varför ljudet blir svagare på avstånd',
          'hur hörseln skadas, och vad *tinnitus* är',
          'att risken beror både på hur starkt ljudet är och hur länge man hör det',
          'hur *buller* påverkar hälsan, och hur det kan minskas'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'decibel', titel: 'Ljudnivå mäts i decibel',
      block: [
        { typ: 'rubrik', text: 'Decibelskalan börjar vid det svagaste vi hör' },
        { typ: 'text', text: 'Hur starkt ett ljud är anges som en *ljudnivå*, och den mäts i *decibel*, som förkortas dB. Man mäter med en *ljudnivåmätare*, och det finns appar som gör ungefär samma sak med mobilens mikrofon. Skalan börjar vid 0 dB, som ungefär motsvarar det svagaste ljud en ung person med god hörsel kan höra. Vid omkring 120 dB gör ljudet ont i öronen. Det kallas smärtgränsen.' },
        // [BILD D1: decibelskalan som lodräta staplar från 0 till 140 dB med vardagsljud: 0 hörtröskel · 10 andning · 20 viskning · 30 tyst sovrum · 40 lugn villagata · 50 regn · 60 vanligt samtal · 70 dammsugare · 80 tät trafik, skolmatsal · 90 gräsklippare · 100 motorsåg · 110 rockkonsert · 120 smärtgräns · 130 jetplan på nära håll · 140 gevärsskott. Neutral färg på alla staplar (inga riskfärger – risken beror också på tiden). Liten notering: nivåerna är ungefärliga och beror på avståndet]
        { id: 'bild-d1', typ: 'figur', namn: 'ljud', lage: 'decibel', bildtext: 'Decibelskalan går från hörtröskeln vid 0 dB till ungefär 140 dB för ett gevärsskott.' },
        { typ: 'rubrik', text: 'Tio decibel mer låter ungefär dubbelt så starkt' },
        { typ: 'text', text: 'Decibelskalan är inte en vanlig skala där varje steg är lika stort. En tumregel är att ett ljud som är 10 dB starkare låter ungefär dubbelt så starkt för örat. Ett ljud på 70 dB låter alltså ungefär dubbelt så starkt som ett på 60 dB, och ett ljud på 80 dB ungefär fyra gånger så starkt. Men energin som når örat ökar mycket mer än så, något du läser om i Fördjupning. Därför är det lätt att underskatta hur mycket starkare 100 dB är än 80 dB.' }
      ]
    },
    {
      id: 'avstand', titel: 'Ljudet blir svagare på avstånd',
      block: [
        { typ: 'rubrik', text: 'Energin sprids över en allt större yta' },
        { typ: 'text', text: 'Ljudet från en högtalare sprids åt alla håll. Ju längre bort från högtalaren du kommer, desto större yta har ljudet hunnit spridas över, ungefär som när en ballong blåses upp och gummit blir tunnare. Samma energi delas på en allt större yta, och därför når mindre energi ditt öra. Ljudet blir svagare. Det är därför det hjälper så mycket att stå längre bort från högtalarna på en konsert. Ljudet dämpas dessutom lite av luften själv, mest de ljusa tonerna. Därför hör man mest basen från en fest långt bort.' }
      ]
    },
    {
      id: 'horselskador', titel: 'Hörselskador och tinnitus',
      block: [
        { typ: 'rubrik', text: 'Starka ljud skadar hårcellerna' },
        { typ: 'text', text: 'Du har läst att det är hårcellerna i snäckan som gör om svängningarna till nervsignaler. Om ljudet är för starkt kan hårcellerna skadas. Hos människan växer skadade hårceller normalt inte ut igen, och därför kan en hörselskada bli bestående. En hörselskada smyger sig ofta på. Först försvinner de ljusaste tonerna. Senare blir det svårt att höra vad folk säger, särskilt när det är sorl omkring en.' },
        { typ: 'rubrik', text: 'Varningssignaler efter starka ljud' },
        { typ: 'text', text: 'Efter en konsert eller ett pass med för hög musik i hörlurarna kan det kännas som lock i öronen, ljuden låter dämpade och det kan susa eller pipa. Ofta går det över efter några timmar eller dagar. Men det är en varningssignal: hårcellerna har överbelastats. Att höra ljud, till exempel pip eller sus, fast det inte finns någon motsvarande ljudkälla omkring en kallas *tinnitus*. Tinnitus kan uppstå efter starka ljud och förekommer ofta tillsammans med hörselskador, men kan också ha andra orsaker. För en del går det aldrig över. Tinnitus eller plötsligt sämre hörsel efter ett starkt ljud ska tas på allvar, och om besvären inte går över bör man låta vården undersöka hörseln.' },
        { typ: 'rubrik', text: 'Risken beror på både nivå och tid' },
        { typ: 'text', text: 'Många tror att bara obehagliga ljud är farliga. Men örat skiljer inte på musik du älskar och buller du hatar. Det är ljudnivån och tiden som avgör. Inom arbetsmiljön används 85 dB under 8 timmar som en viktig gräns för bullerexponering. För varje ökning med 3 dB behöver tiden halveras för att ljudexponeringen ska bli ungefär lika stor: 88 dB i 4 timmar, 91 dB i 2 timmar och så vidare. Vid 100 dB, som på en konsert eller i hörlurar på full volym, ger redan en kvart lika stor exponering som 85 dB en hel arbetsdag. Det betyder inte att ljud under gränsen är helt riskfria, men det visar hur snabbt risken ökar när ljudet blir starkare. Ett mycket kraftigt ljud, som en smällare eller ett skott nära örat, kan skada hörseln på en enda gång.' },
        // [BILD D2: "Samma ljudexponering vid olika ljudnivåer" – liggande staplar: 85 dB – 8 timmar · 88 dB – 4 timmar · 91 dB – 2 timmar · 94 dB – 1 timme · 97 dB – 30 minuter · 100 dB – 15 minuter. Varje stapel hälften så lång som den ovanför]
        { id: 'bild-d2', typ: 'figur', namn: 'ljud', lage: 'exponering', bildtext: 'För varje 3 dB högre ljudnivå halveras tiden för samma ljudexponering.' },
        { typ: 'rubrik', text: 'Skydda hörseln' },
        { typ: 'text', text: 'Det finns två sätt att skydda hörseln: att sänka ljudnivån och att använda hörselskydd. I hörlurarna kan du själv sänka volymen och ta pauser. På en konsert kan du inte påverka ljudet, men du kan stå längre från högtalarna och använda öronproppar. På arbetsplatser med buller gäller regler för hur mycket buller de anställda utsätts för under en arbetsdag. Arbetsgivaren ska erbjuda hörselskydd redan vid lägre nivåer, och vid en daglig exponering kring 85 dB gäller strängare krav, bland annat att hörselskydden ska användas. Ett *skyddsombud* företräder de anställda i frågor om arbetsmiljön. Små barn är extra sårbara, eftersom de inte själva kan säga ifrån eller gå därifrån. Därför ska de ha hörselkåpor på konserter och vid fyrverkerier.' }
      ]
    },
    {
      id: 'buller', titel: 'Buller påverkar hälsan',
      block: [
        { typ: 'rubrik', text: 'Buller är ljud som stör' },
        { typ: 'text', text: 'Ljud som är störande och oönskat kallas *buller*. Det behöver inte vara starkt. Ett droppande kranvatten eller en granne som spelar musik genom väggen kan vara buller fast ljudnivån är låg. Det viktiga är att vi inte har valt ljudet själva. Trafiken är det buller som stör flest människor i Sverige. Ungefär var sjunde vuxen besväras av trafikbuller hemma.' },
        { typ: 'rubrik', text: 'Buller påverkar mer än öronen' },
        { typ: 'text', text: 'Buller som inte är tillräckligt starkt för att skada hörseln kan ändå påverka hälsan. Den som utsätts för buller under lång tid kan bli stressad, få svårt att koncentrera sig och sova sämre. Forskning har visat att elever i bullriga skolor lär sig sämre, och att långvarigt trafikbuller ökar risken för högt blodtryck och hjärtsjukdom. Även djur påverkas. Fåglar i städer sjunger starkare och ljusare för att höras över trafiken, och hundar kan bli rädda vid fyrverkerier.' },
        { typ: 'text', text: 'Infraljud har så låg frekvens att vi normalt inte hör det. Mycket kraftigt infraljud kan kännas och ge obehag. Däremot är det inte klarlagt att svagt infraljud i vanliga miljöer orsakar några särskilda hälsoproblem.' }
      ]
    },
    {
      id: 'bullerbekampning', titel: 'Bullerbekämpning',
      block: [
        { typ: 'rubrik', text: 'Buller kan stoppas i tre steg' },
        // [BILD D3: bullerbekämpningens tre steg som tre rutor bredvid varandra med ljudets väg från vänster till höger: källa (en bil – tystare däck och lägre fart) · väg (ett bullerplank mellan väg och hus) · mottagare (ett hus med sovrummet på baksidan och en person med hörselkåpor)]
        { id: 'bild-d3', typ: 'figur', namn: 'ljud', lage: 'bullerbekampning', bildtext: 'Buller kan minskas vid källan, på vägen och hos mottagaren.' },
        { typ: 'text', text: 'För att buller ska vara ett problem krävs tre saker: något som låter, en väg för ljudet att spridas och någon som hör det. Därför kan man bekämpa buller på tre ställen:' },
        { typ: 'punkter', punkter: [
          'Vid källan: tystare motorer, däck och maskiner, ljuddämpare på bilar, lägre hastighet och asfalt som är tystare. Ett kylskåp som står ojämnt och vibrerar kan ställas rakt.',
          'På vägen: bullerplank och jordvallar längs vägar, mer avstånd mellan väg och hus, ljudisolerade väggar och fönster. En tung vägg är svår att få att svänga och släpper igenom lite ljud. Ett poröst material inuti väggen tar upp ljudenergin och gör om den till värme. Lägg märke till skillnaden mellan två ord: ljudabsorbenter, som mjuka plattor i taket, minskar ljudets reflexer inne i ett rum, medan ljudisolering hindrar ljud från att ta sig genom en vägg till ett annat rum.',
          'Hos mottagaren: hörselskydd, och att lägga sovrummet på den tysta sidan av huset.'
        ] },
        { typ: 'rubrik', text: 'Både du och samhället har ansvar' },
        { typ: 'text', text: 'En del buller kan du själv påverka: volymen i dina hörlurar, att använda hörselskydd när du klipper gräset eller att inte spela hög musik när grannarna sover. Annat måste samhället ta ansvar för. Ett av Sveriges miljömål heter God bebyggd miljö, och där ingår att människor inte ska utsättas för skadligt buller. När nya vägar, järnvägar, flygplatser eller vindkraftverk planeras måste man räkna ut hur mycket buller de ger. För vindkraftverk används till exempel vanligtvis riktvärdet 40 dB utomhus vid de närmaste bostäderna.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljudnivå mäts i decibel, dB. 0 dB är ungefär hörtröskeln och omkring 120 dB smärtgränsen.',
          'En tumregel: 10 dB mer låter ungefär dubbelt så starkt.',
          'Ljudet blir svagare på avstånd, eftersom energin sprids över en allt större yta.',
          'Starka ljud skadar hårcellerna i snäckan. Skadade hårceller växer normalt inte ut igen. Tinnitus är pip eller sus utan ljudkälla. Det förekommer ofta tillsammans med hörselskador men kan ha andra orsaker.',
          'Risken beror på nivå och tid. I arbetsmiljön är 85 dB i 8 timmar en viktig gräns, och varje 3 dB mer halverar tiden för samma exponering: 100 dB i 15 minuter motsvarar en hel arbetsdag i 85 dB.',
          'Buller är oönskat ljud. Det kan ge stress, sömnproblem och sämre inlärning, även när det inte är starkt.',
          'Buller kan bekämpas vid källan, på vägen och hos mottagaren.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
