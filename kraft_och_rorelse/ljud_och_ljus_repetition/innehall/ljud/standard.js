/* Avsnittssida VI. Repetition: ljud och ljus, text A: Ljud – nivån standard (📘).
 * Arbetsorder 30 (2026-11-20; källan v4: arbetsorder 32, 2026-11-21): kallor/kap3/VI-A-Repetition-Ljud-alla-nivaer-v4.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text via: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-via.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Repetition: ljud' },
        { typ: 'text', text: 'Du har redan arbetat med ljud. Den här repetitionen samlar det viktigaste: vad ljud är, hur en ljudvåg ser ut, vad som bestämmer tonhöjd och ljudstyrka, hur fort ljudet går, och hur örat fångar upp det. I slutet av varje avsnitt finns det som är bra att kunna inför provet.' },
        { typ: 'underrubrik', text: 'Det här repeterar du' },
        { typ: 'punkter', punkter: [
          'vad ljud är, och varför det behöver ett ämne att färdas i',
          '*frekvens*, *amplitud* och *våglängd*',
          'tonhöjd, ljudstyrka och *decibel*',
          'ljudets hastighet',
          'eko, ekolod och buller',
          '*ultraljud* och *infraljud*',
          '*dopplereffekten*',
          'örat och hörselskador'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'vad-ar-ljud', titel: 'Ljud är vibrationer',
      block: [
        { typ: 'rubrik', text: 'Allt ljud kommer från något som svänger' },
        { typ: 'text', text: 'Allt ljud börjar med att något svänger fram och tillbaka, alltså vibrerar. En gitarrsträng svänger när du knäpper på den. Dina stämband svänger när du pratar. Membranet i en högtalare svänger när musiken spelas. Håller du handen framför en högtalare som spelar högt kan du känna luften vibrera.' },
        { typ: 'rubrik', text: 'Ljudet sprids som förtätningar och förtunningar' },
        { typ: 'text', text: 'När högtalarens membran rör sig framåt trycker det ihop luftmolekylerna framför sig. Där blir luften tätare, en *förtätning*. När membranet rör sig bakåt lämnar det ett område där molekylerna ligger glesare, en *förtunning*. Membranet svänger hela tiden, och därför bildas förtätningar och förtunningar om och om igen. De sprids ut åt alla håll som en *ljudvåg*. En gitarrsträng och dina stämband gör likadant, men hos högtalaren är det lättast att se.' },
        // [BILD A1: numrerade steg 1–5 ("börja här"), partikelmodell: 1 högtalarens membran rör sig framåt och trycker ihop luften framför sig – förtätning · 2 membranet rör sig bakåt – bakom förtätningen blir det glest, förtunning · 3 membranet rör sig framåt igen – ny förtätning · 4 förtätningar och förtunningar vandrar bort från högtalaren · 5 en markerad bit luft svänger bara lite fram och tillbaka medan vågen vandrar vidare]
        { id: 'bild-a1', typ: 'figur', namn: 'ljud', lage: 'membran', bildtext: 'Förtätningarna vandrar bort, men luften svänger bara lite fram och tillbaka.' },
        { typ: 'text', text: 'Luften i sig flyttar sig inte med ljudet. Luftens molekyler rör sig hela tiden oordnat, men ljudvågen ger luften en liten extra svängning fram och tillbaka. Luften knuffar på luften intill och svänger tillbaka. Det är knuffen som vandrar vidare, ungefär som när man knuffar till ena änden av en lång spiralfjäder. Varje varv rör sig bara lite fram och tillbaka, men knuffen går hela vägen till andra änden.' },
        { typ: 'rubrik', text: 'Ljud behöver ett ämne att färdas i' },
        { typ: 'text', text: 'Eftersom ljudet sprids genom att partiklar knuffar på varandra behövs det partiklar. Ljud kan gå genom gaser som luft, genom vätskor som vatten och genom fasta ämnen som trä och metall. Men i vakuum, där det inte finns några partiklar alls, kan ljud inte färdas. Rymden är nästan ett vakuum, så där kan ljud inte färdas. Två astronauter i rymddräkter kan inte höra varandra skrika, de måste använda radio.' }
      ]
    },
    {
      id: 'ljudvagen', titel: 'Ljudvågen',
      block: [
        { typ: 'rubrik', text: 'Ljudvågen kan visas med två modeller' },
        { typ: 'text', text: 'En ljudvåg kan ritas på två sätt. I partikelmodellen ritar man molekylerna som prickar, täta i förtätningarna och glesa i förtunningarna. I vågmodellen ritar man en böljande linje som visar trycket i luften. Förtätningarna, där trycket är lite högre, blir *vågtoppar*, och förtunningarna blir *vågdalar*. Linjen visar alltså inte att luften rör sig upp och ned. Båda modellerna beskriver samma ljud.' },
        // [BILD A2: samma ljudvåg i partikelmodellen (prickar) och i vågmodellen (böljande linje) ovanför varandra; vågtopp, vågdal och våglängd utmärkta; vågmodellens lodräta axel märkt "tryck", vågtopp = högre tryck (förtätning), vågdal = lägre tryck (förtunning)]
        { id: 'bild-a2', typ: 'figur', namn: 'ljud', lage: 'modeller', bildtext: 'Vågtopparna står där luften är tätast och trycket högst.' },
        { typ: 'rubrik', text: 'Våglängd, frekvens och amplitud' },
        { typ: 'text', text: 'Avståndet från en vågtopp till nästa kallas *våglängd*. Hur många svängningar ljudkällan gör varje sekund kallas *frekvens*. Frekvens mäts i *hertz|hertz*, Hz. 1 Hz betyder en svängning per sekund. Hur stora svängningarna är, alltså hur höga vågtopparna är, kallas *amplitud*.' },
        { typ: 'text', text: 'Hög frekvens betyder att vågtopparna kommer tätt, och då är våglängden kort. Låg frekvens betyder att de kommer glest, och då är våglängden lång.' }
      ]
    },
    {
      id: 'toner', titel: 'Toner och ljudstyrka',
      block: [
        { typ: 'rubrik', text: 'Frekvensen bestämmer tonhöjden' },
        { typ: 'text', text: 'Ett ljud med hög frekvens låter ljust, som en flöjt eller en fågel. Ett ljud med låg frekvens låter mörkt, som en bas eller en mistlur. Människan kan höra ljud med frekvenser från ungefär 20 Hz till ungefär 20 000 Hz. Med åldern försämras förmågan att höra de högsta tonerna.' },
        { typ: 'text', text: 'En ren ton, som från en stämgaffel, har en enda frekvens. De flesta ljud, som röster och instrument, innehåller många frekvenser samtidigt. När väldigt många frekvenser blandas utan någon tydlig tonhöjd, som i suset från ett vattenfall, kallas ljudet *brus*.' },
        { typ: 'rubrik', text: 'Amplituden bestämmer ljudstyrkan' },
        { typ: 'text', text: 'Ju kraftigare ljudkällan svänger, desto större blir amplituden och desto starkare låter ljudet. Knäpper du hårt på en gitarrsträng låter det starkt. Efter en stund svänger strängen mindre och mindre, och ljudet blir svagare tills det tystnar. Frekvensen är densamma hela tiden, så tonen ändras inte. Det är bara styrkan som minskar.' },
        // [BILD A5: fyra ljud jämförda i båda modellerna, prickar och våglinje bredvid varandra: ljust ljud (tätt mellan vågtopparna, hög frekvens), mörkt ljud (glest, låg frekvens), starkt ljud (höga vågtoppar, stor amplitud, prickarna mycket täta i förtätningarna men samma avstånd mellan förtätningarna som i det svaga ljudet), svagt ljud (låga vågtoppar, liten amplitud, liten skillnad mellan förtätning och förtunning); jämförelserna åtskilda: överst tonhöjd (frekvens), nederst ljudstyrka (amplitud)]
        { id: 'bild-a5', typ: 'figur', namn: 'ljud', lage: 'jamforelse', bildtext: 'Överst skiljer frekvensen, underst bara amplituden.' },
        { typ: 'rubrik', text: 'Ljudstyrka mäts i decibel' },
        { typ: 'text', text: 'Ljudstyrka mäts i *decibel|decibel*, dB. 0 dB är ungefär det svagaste ljud som en ung person med god hörsel kan höra. Ett vanligt samtal ligger på ungefär 60 dB, tät trafik på ungefär 80 dB och en jetmotor på nära håll på ungefär 130 dB. En tumregel är att ett ljud som är 10 dB starkare upplevs ungefär dubbelt så starkt.' },
        { typ: 'rubrik', text: 'Ljudet blir svagare på avstånd' },
        { typ: 'text', text: 'Ljudet sprids åt alla håll, och dess energi fördelas över en allt större yta. Därför blir ljudet svagare ju längre från ljudkällan du kommer.' },
        { typ: 'rubrik', text: 'En resonanslåda gör ljudet starkare' },
        { typ: 'text', text: 'Allt som kan svänga har en egen frekvens som det helst svänger med. Om det påverkas av svängningar nära den frekvensen börjar det svänga kraftigt. Det kallas *resonans*. Du känner igen det från en gunga: knuffar du i rätt takt blir gungningarna allt större.' },
        { typ: 'text', text: 'En gitarrsträng ensam låter svagt, eftersom den är så smal att den bara sätter lite luft i rörelse. I en akustisk gitarr sitter strängarna på en ihålig trälåda. När strängen svänger börjar lådan svänga med, och luften i den också. Lådan har stor yta och sätter mycket mer luft i svängning. Ljudvågorna får större amplitud, och ljudet blir mycket starkare. Lådan kallas resonanslåda. Fioler, trummor och pianon har också resonanslådor. En elgitarr har ingen resonanslåda, så utan förstärkare låter den mycket svagt.' },
        // [BILD A6: akustisk gitarr i numrerade steg: 1 strängen knäpps · 2 strängen ensam ger svaga ljudvågor · 3 svängningarna förs till lådan som också svänger · 4 lådan och luften i den sätter mer luft i svängning – starkare ljudvågor med större amplitud (samma avstånd mellan förtätningarna, samma ton)]
        { id: 'bild-a6', typ: 'figur', namn: 'ljud', lage: 'resonans', bildtext: 'Lådan ger större amplitud men samma våglängd, alltså samma ton.' }
      ]
    },
    {
      id: 'hastighet', titel: 'Ljudets hastighet',
      block: [
        { typ: 'rubrik', text: 'Ljudet går ungefär 340 meter per sekund i luft' },
        { typ: 'text', text: 'Ljudet färdas ungefär 340 m/s i luft. Det är fort, men mycket långsammare än ljuset, som går nästan en miljon gånger fortare. Därför ser du blixten innan du hör åskan. Ljuset når dig nästan direkt, men ljudet behöver ungefär 3 sekunder för att gå 1 kilometer. Räkna sekunderna mellan blixten och mullret och dela med 3, så vet du ungefär hur många kilometer bort åskvädret är. Ljudets hastighet i luft beror också på temperaturen. I varm luft går ljudet lite fortare än i kall.' },
        { typ: 'rubrik', text: 'Ljudet går fortare i vatten och fasta ämnen' },
        { typ: 'text', text: 'I vatten går ljudet ungefär 1 500 m/s, och i stål ungefär 5 000 m/s. Ljudet går fortare där partiklarna hänger ihop hårdare, eftersom de då snabbare för knuffen vidare till nästa partikel. Därför kan du höra ett tåg i rälsen innan du hör det i luften.' },
        { typ: 'rubrik', text: 'Avstånd kan räknas ut med sträcka = hastighet · tid' },
        { typ: 'text', text: 'Om du vet hur länge ljudet har färdats kan du räkna ut sträckan.' },
        { typ: 'formel', uttryck: 's = v · t', forklaring: 's sträckan (m), v hastigheten (m/s), t tiden (s)' },
        { typ: 'exempel', rubrik: 'Åskan', stycken: [
          ['Du ser en blixt och hör mullret 6 sekunder senare. Hur långt bort är åskvädret?'],
          ['Givet: v = 340 m/s, t = 6 s. Sökt: sträckan s.'],
          ['Lösning:',
           's = v · t = 340 m/s · 6 s = 2 040 m',
           'Svar: Åskvädret är ungefär 2 km bort.']
        ] }
      ]
    },
    {
      id: 'eko-och-buller', titel: 'Eko och buller',
      block: [
        { typ: 'rubrik', text: 'Eko är ljud som studsar tillbaka' },
        { typ: 'text', text: 'När en ljudvåg träffar en hård och slät yta, som en bergvägg, reflekteras den, alltså studsar tillbaka. Ljudet som kommer tillbaka kallas *eko*. Mjuka och porösa material, som tyg, mattor och skumplast, tar i stället upp ljudet. Man säger att de absorberar det. Därför sitter det ofta mjuka plattor i klassrumstak, så att det inte ekar.' },
        { typ: 'rubrik', text: 'Ekolod använder eko för att mäta avstånd' },
        { typ: 'text', text: 'Ett *ekolod* på en båt skickar ut en ljudsignal mot botten och mäter hur lång tid det tar innan ekot kommer tillbaka. Ljudet har då gått ned och upp igen, så sträckan måste delas med 2.' },
        // [BILD A7: ekolod i numrerade steg: 1 båten skickar ned en ljudsignal, klockan startar · 2 signalen når fiskstimmet · 3 ekot studsar tillbaka · 4 ekolodet hör ekot, klockan stoppar · 5 sträckan delas med 2]
        { id: 'bild-a7', typ: 'figur', namn: 'ljud', lage: 'ekolod', bildtext: 'Ljudet går ned och upp, så sträckan delas med 2.' },
        { typ: 'exempel', rubrik: 'Ekolodet', stycken: [
          ['Ett ekolod skickar ned en signal, och ekot från ett fiskstim kommer tillbaka efter 0,4 s. Hur djupt är fiskstimmet? Ljudets hastighet i vatten är 1 500 m/s.'],
          ['Givet: v = 1 500 m/s, t = 0,4 s. Sökt: djupet.'],
          ['Lösning: Ljudet går ned och upp.',
           's = v · t = 1 500 m/s · 0,4 s = 600 m',
           'djupet = 600 m / 2 = 300 m',
           'Svar: Fiskstimmet är 300 m ned.']
        ] },
        { typ: 'rubrik', text: 'Buller kan skada hörseln' },
        { typ: 'text', text: 'Ljud som är störande och oönskat kallas *buller*. Starka ljud över ungefär 85 dB kan skada hörseln om man utsätts för dem länge, till exempel vid hög musik i hörlurar eller på en konsert. Mycket starka ljud, över ungefär 120 dB, kan skada hörseln direkt. Även svagare buller kan ge stress och sömnproblem.' },
        { typ: 'text', text: 'Buller kan stoppas på två sätt. Tunga och täta material, som betong och sten, är svåra att få att svänga, och därför släpper de igenom lite ljud. I luftiga isoleringsmaterial studsar ljudvågorna åt olika håll inuti materialet, och friktionen mellan luften och fibrerna gör om ljudenergin till värme. Hörselskydd och öronproppar skyddar örat direkt.' },
        // [BILD A8: två sätt att isolera, samma ljudvåg från vänster: genom en tung vägg (betong) kommer bara en svag våg ut · i luftigt isoleringsmaterial studsar vågen runt och en del av energin blir värme – svagare våg ut]
        { id: 'bild-a8', typ: 'figur', namn: 'ljud', lage: 'isolering', bildtext: 'Två sätt att isolera: en tung vägg och ett luftigt material.' }
      ]
    },
    {
      id: 'ultraljud-och-infraljud', titel: 'Ultraljud och infraljud',
      block: [
        { typ: 'rubrik', text: 'Ljud som vi inte kan höra' },
        { typ: 'text', text: 'Ljud med högre frekvens än 20 000 Hz kallas *ultraljud*. Ljud med lägre frekvens än 20 Hz kallas *infraljud*. Vi människor kan inte höra någon av dem, men många djur kan.' },
        { typ: 'text', text: 'Fladdermöss och delfiner skickar ut ultraljud och lyssnar efter ekot. På så sätt kan de hitta föda och undvika hinder i mörker eller grumligt vatten. Inom vården används ultraljud för att se in i kroppen, till exempel för att titta på ett foster i mammans mage. Maskinen skickar in ultraljud och gör en bild av ekona från olika delar av kroppen.' },
        { typ: 'text', text: 'Elefanter och valar kommunicerar med infraljud. Infraljud kan färdas mycket långt, och valar kan höra varandra på många mils avstånd. Även åska och jordbävningar ger infraljud.' }
      ]
    },
    {
      id: 'doppler', titel: 'Dopplereffekten',
      block: [
        { typ: 'rubrik', text: 'Ljudet ändras när ljudkällan rör sig' },
        { typ: 'text', text: 'När en ambulans med sirenen påslagen kör förbi låter sirenen ljusare medan ambulansen närmar sig och mörkare när den har passerat. Det kallas *dopplereffekten*.' },
        { typ: 'text', text: 'När ambulansen kör mot dig trycks ljudvågorna framför den ihop. Våglängden blir kortare, fler vågor når ditt öra varje sekund, frekvensen blir högre och tonen ljusare. När ambulansen kör ifrån dig dras ljudvågorna ut. Våglängden blir längre, frekvensen lägre och tonen mörkare. Sirenen i sig låter likadant hela tiden. Det är bara det du hör som ändras.' },
        // [BILD A3: ambulans i rörelse åt höger; ljudvågorna framför den tätare (kort våglängd), bakom den glesare (lång våglängd); en person på var sida]
        { id: 'bild-a3', typ: 'figur', namn: 'ljud', lage: 'doppler', bildtext: 'Framför ambulansen trycks ljudvågorna ihop, bakom den dras de ut.' },
        { typ: 'rubrik', text: 'Fortare än ljudet: ljudbangen' },
        { typ: 'text', text: 'Om något rör sig fortare än ljudet, som ett snabbt stridsflygplan, hinner ljudvågorna inte före det. Då bildas en kraftig tryckvåg, en *stötvåg|stötvåg*, som breder ut sig som en kon bakom planet. När stötvågen passerar någon på marken hörs en kraftig smäll, en *ljudbang|ljudbang*. Planet drar stötvågen med sig så länge det flyger fortare än ljudet, så smällen hörs överallt där planet passerar, inte bara där det gick över ljudets hastighet.' }
      ]
    },
    {
      id: 'orat', titel: 'Örat och hörseln',
      block: [
        { typ: 'rubrik', text: 'Så fångar örat upp ljudet' },
        { typ: 'text', text: 'Örat gör om ljudvågor till signaler som hjärnan kan tolka, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Ytterörat fångar upp ljudvågorna och leder in dem i hörselgången.',
          'Ljudvågorna får *trumhinnan* att svänga.',
          'Trumhinnan för svängningarna vidare till tre små *hörselben*: hammaren, städet och stigbygeln.',
          'Hörselbenen för svängningarna in till *hörselsnäckan*, som är fylld med vätska.',
          'I hörselsnäckan finns *hårceller* som gör om svängningarna till nervsignaler.',
          '*Hörselnerven|hörselnerv* leder signalerna till hjärnan, som tolkar dem som ljud.'
        ] },
        // [BILD A4: örats delar i genomskärning – ytteröra, hörselgång, trumhinna, hörselben, hörselsnäcka, hörselnerv – med ljudvågorna som kommer in]
        { id: 'bild-a4', typ: 'figur', namn: 'ljud', lage: 'orat', bildtext: 'Örats delar, från ytterörat till hörselnerven.' },
        { typ: 'rubrik', text: 'Två öron visar varifrån ljudet kommer' },
        { typ: 'text', text: 'Eftersom du har två öron når ett ljud från höger det högra örat lite före det vänstra, och det hörs lite starkare där. Hjärnan använder skillnaden för att avgöra varifrån ljudet kommer.' },
        { typ: 'rubrik', text: 'Hörselskador blir ofta bestående' },
        { typ: 'text', text: 'Starka ljud kan skada hårcellerna i hörselsnäckan. Skadade hårceller växer normalt inte ut igen, så en hörselskada kan bli bestående. *Tinnitus|tinnitus* är ett pip eller brus i öronen som hörs fast det är tyst omkring en. Det kan ha flera orsaker, men det kan vara ett tecken på att hörseln har tagit skada. Därför är det viktigt att skydda hörseln mot starka ljud, med lagom volym i hörlurarna och hörselskydd i bullriga miljöer.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljud är vibrationer som sprids som förtätningar och förtunningar. Ljud behöver ett ämne och kan inte gå genom vakuum.',
          'Våglängd är avståndet mellan två vågtoppar. Frekvens är antalet svängningar per sekund och mäts i hertz. Amplitud är hur stora svängningarna är.',
          'Frekvensen bestämmer tonhöjden. Människan hör ungefär 20–20 000 Hz. Amplituden bestämmer ljudstyrkan, som mäts i decibel.',
          'Resonans: något som får svängningar i sin egen takt svänger kraftigt. En gitarrs resonanslåda gör ljudet starkare. Ljudet blir svagare på avstånd.',
          'Ljudet går ungefär 340 m/s i luft, 1 500 m/s i vatten och 5 000 m/s i stål. s = v · t.',
          'Eko är reflekterat ljud. Ekolod mäter avstånd med eko. Ljud över 85 dB kan skada hörseln.',
          'Ultraljud är över 20 000 Hz och infraljud under 20 Hz.',
          'Dopplereffekten: ljudet låter ljusare när källan närmar sig och mörkare när den avlägsnar sig.',
          'Örat: trumhinna, hörselben, hörselsnäcka med hårceller och hörselnerv. Skadade hårceller växer normalt inte ut igen.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
