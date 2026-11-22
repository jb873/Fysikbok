/* Avsnittssida II. Ljud omkring oss, text D: Ljudnivå, buller och hälsa – nivån enkel (📗).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-D-Ljudniva-buller-och-halsa-alla-nivaer-v3.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iid: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iid.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljud kan vara skönt, men också skada' },
        { typ: 'text', text: 'Tänk på alla ljud du hör under en dag. Musik i hörlurarna. Sorlet i matsalen. Bilar utanför fönstret. Vissa ljud väljer du själv. Andra måste du höra fast du inte vill.' },
        { typ: 'text', text: 'Starka ljud kan skada hörseln för alltid. Och även ljud som inte är så starka kan göra dig stressad och trött. I den här texten får du veta hur man mäter hur starkt ett ljud är. Du får också veta när ljud blir farligt för hörseln, och vad du och samhället kan göra mot buller.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur man mäter ljud i *decibel*',
          'varför ljudet blir svagare långt bort',
          'hur hörseln kan skadas, och vad *tinnitus* är',
          'att det farliga beror både på hur starkt ljudet är och hur länge du hör det',
          'vad *buller* är, och hur man kan minska det'
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
        { typ: 'rubrik', text: 'Decibel visar hur starkt ett ljud är' },
        { typ: 'text', text: 'Hur starkt ett ljud är kallas *ljudnivå*. Den mäts i *decibel*. Det skrivs dB. Man mäter med en *ljudnivåmätare*. Det finns också appar som gör ungefär samma sak med mobilens mikrofon.' },
        { typ: 'text', text: 'Skalan börjar på 0 dB. Det är ungefär det svagaste ljud en ung person med bra hörsel kan höra. Vid ungefär 120 dB gör ljudet ont i öronen. Det kallas smärtgränsen.' },
        { typ: 'text', text: 'Här är några exempel:' },
        { typ: 'punkter', punkter: [
          '10 dB: andning',
          '30 dB: ett tyst sovrum',
          '60 dB: ett vanligt samtal',
          '80 dB: tät trafik eller en skolmatsal',
          '100 dB: en motorsåg',
          '110 dB: en rockkonsert',
          '130 dB: ett jetplan på nära håll'
        ] },
        // [BILD D1: decibelskalan som lodräta staplar från 0 till 140 dB med vardagsljud: 0 hörtröskel · 10 andning · 20 viskning · 30 tyst sovrum · 40 lugn villagata · 50 regn · 60 vanligt samtal · 70 dammsugare · 80 tät trafik, skolmatsal · 90 gräsklippare · 100 motorsåg · 110 rockkonsert · 120 smärtgräns · 130 jetplan på nära håll · 140 gevärsskott. Neutral färg på alla staplar (inga riskfärger – risken beror också på tiden). Liten notering: nivåerna är ungefärliga och beror på avståndet]
        { id: 'bild-d1', typ: 'figur', namn: 'ljud', lage: 'decibel', bildtext: 'Decibelskalan går från hörtröskeln vid 0 dB till ungefär 140 dB för ett gevärsskott.' },
        { typ: 'rubrik', text: 'Tio decibel mer låter ungefär dubbelt så starkt' },
        { typ: 'text', text: 'Decibelskalan fungerar inte som en vanlig linjal. En tumregel är att om ljudet blir 10 dB starkare, låter det ungefär dubbelt så starkt. 70 dB låter alltså ungefär dubbelt så starkt som 60 dB. 80 dB låter ungefär fyra gånger så starkt som 60 dB.' },
        { typ: 'text', text: 'Men energin som når örat ökar ännu mer. Därför är det lätt att tro att 100 dB inte är så mycket starkare än 80 dB. Det är det.' }
      ]
    },
    {
      id: 'avstand', titel: 'Ljudet blir svagare på avstånd',
      block: [
        { typ: 'rubrik', text: 'Ljudet sprids ut över en större yta' },
        { typ: 'text', text: 'Ljudet från en högtalare sprids åt alla håll. Tänk på en ballong som blåses upp. Ju större ballongen blir, desto tunnare blir gummit. Ljudet gör ungefär likadant. Ju längre bort du är, desto större yta har ljudet spridits över. Samma energi delas på en större yta. Därför når mindre energi ditt öra, och ljudet blir svagare.' },
        { typ: 'text', text: 'Det är därför det hjälper att stå långt från högtalarna på en konsert. Luften dämpar också ljudet lite, mest de ljusa tonerna. Därför hör man mest basen från en fest långt bort.' }
      ]
    },
    {
      id: 'horselskador', titel: 'Hörselskador och tinnitus',
      block: [
        { typ: 'rubrik', text: 'Starka ljud skadar hårcellerna' },
        { typ: 'text', text: 'I snäckan inne i örat finns hårceller. De gör om ljudets svängningar till signaler till hjärnan. Om ljudet är för starkt kan hårcellerna skadas. Hårceller som har skadats växer normalt inte ut igen. Därför kan en hörselskada bli kvar hela livet.' },
        { typ: 'text', text: 'En hörselskada kommer ofta smygande:' },
        { typ: 'punkter', punkter: [
          'Först försvinner de allra ljusaste tonerna. Man märker det knappt.',
          'Sedan blir det svårare att höra vad folk säger.',
          'Det blir särskilt svårt när det är sorl omkring en, som i en matsal.'
        ] },
        { typ: 'rubrik', text: 'Varningssignaler efter starka ljud' },
        { typ: 'text', text: 'Efter en konsert, eller efter att du har lyssnat på för hög musik, kan det kännas som lock i öronen. Ljuden låter dämpade, och det kan susa eller pipa. Ofta går det över efter några timmar eller dagar. Men det är en varning. Hårcellerna har fått för mycket.' },
        { typ: 'text', text: 'Om man hör pip eller sus fast det är tyst omkring en kallas det *tinnitus*. Tinnitus kan komma efter starka ljud, och det finns ofta tillsammans med hörselskador. Men det kan också ha andra orsaker. För en del människor går det aldrig över. Om du får tinnitus eller hör sämre efter ett starkt ljud, och det inte går över, ska du kontakta vården.' },
        { typ: 'rubrik', text: 'Både styrka och tid spelar roll' },
        { typ: 'text', text: 'Många tror att bara jobbiga ljud är farliga. Men örat skiljer inte på musik du gillar och buller du hatar. Det som spelar roll är hur starkt ljudet är och hur länge du hör det.' },
        { typ: 'text', text: 'På arbetsplatser används 85 dB i 8 timmar som en viktig gräns. Om ljudet blir 3 dB starkare måste tiden halveras för att örat ska få lika mycket ljud. Ljud under gränsen är inte helt utan risk, men så här snabbt minskar tiden när ljudet blir starkare:' },
        { typ: 'punkter', punkter: [
          '85 dB: 8 timmar',
          '88 dB: 4 timmar',
          '91 dB: 2 timmar',
          '94 dB: 1 timme',
          '97 dB: 30 minuter',
          '100 dB: 15 minuter'
        ] },
        // [BILD D2: "Samma ljudexponering vid olika ljudnivåer" – liggande staplar: 85 dB – 8 timmar · 88 dB – 4 timmar · 91 dB – 2 timmar · 94 dB – 1 timme · 97 dB – 30 minuter · 100 dB – 15 minuter. Varje stapel hälften så lång som den ovanför]
        { id: 'bild-d2', typ: 'figur', namn: 'ljud', lage: 'exponering', bildtext: 'För varje 3 dB högre ljudnivå halveras tiden för samma ljudexponering.' },
        { typ: 'text', text: 'På en konsert, eller i hörlurar med full volym, kan ljudet vara 100 dB. Då får örat lika mycket ljud på en kvart som under en hel arbetsdag med 85 dB. Ett väldigt kraftigt ljud, som en smällare eller ett skott nära örat, kan skada hörseln på en enda gång.' },
        { typ: 'rubrik', text: 'Så skyddar du hörseln' },
        { typ: 'text', text: 'Det finns två sätt att skydda hörseln. Man kan sänka ljudet, eller man kan använda hörselskydd.' },
        { typ: 'text', text: 'I hörlurarna kan du själv sänka volymen och ta pauser. På en konsert kan du inte ändra ljudet. Men du kan stå längre från högtalarna och använda öronproppar.' },
        { typ: 'text', text: 'På arbetsplatser finns regler för hur mycket buller de anställda får utsättas för under en dag. Arbetsgivaren ska erbjuda hörselskydd. Om det bullrar mycket under hela dagen måste hörselskydden också användas. Ett *skyddsombud* hjälper de anställda med frågor om arbetsmiljön.' },
        { typ: 'text', text: 'Små barn behöver extra skydd. De kan inte själva säga till eller gå därifrån om ljudet är för starkt. Därför ska de ha hörselkåpor på konserter och när det är fyrverkerier.' }
      ]
    },
    {
      id: 'buller', titel: 'Buller påverkar hälsan',
      block: [
        { typ: 'rubrik', text: 'Buller är ljud som stör' },
        { typ: 'text', text: 'Ljud som stör och som man inte vill höra kallas *buller*. Buller behöver inte vara starkt. En kran som droppar, eller en granne som spelar musik genom väggen, kan vara buller fast det inte är så högt. Det viktiga är att man inte har valt ljudet själv.' },
        { typ: 'text', text: 'Trafiken är det buller som stör flest människor i Sverige. Ungefär var sjunde vuxen störs av trafikbuller där de bor.' },
        { typ: 'rubrik', text: 'Buller påverkar mer än öronen' },
        { typ: 'text', text: 'Buller kan påverka hälsan, även när det inte är så starkt att det skadar hörseln. Den som hör buller under lång tid kan:' },
        { typ: 'punkter', punkter: [
          'bli stressad',
          'få svårt att koncentrera sig',
          'sova sämre'
        ] },
        { typ: 'text', text: 'Forskare har sett att elever i bullriga skolor lär sig sämre. Trafikbuller under många år ökar också risken för högt blodtryck och hjärtsjukdom.' },
        { typ: 'text', text: 'Djur påverkas också. Fåglar i städer sjunger starkare och ljusare för att höras över trafiken. Många hundar blir rädda när det är fyrverkerier.' },
        { typ: 'text', text: 'Infraljud är så mörkt att vi normalt inte hör det. Mycket starkt infraljud kan man känna, och det kan kännas obehagligt. Men forskarna har inte visat att det svaga infraljud som finns omkring oss till vardags är farligt.' }
      ]
    },
    {
      id: 'bullerbekampning', titel: 'Bullerbekämpning',
      block: [
        { typ: 'rubrik', text: 'Buller kan stoppas på tre ställen' },
        { typ: 'text', text: 'För att buller ska vara ett problem behövs tre saker. Något måste låta. Ljudet måste kunna spridas. Och någon måste höra det. Därför kan man stoppa buller på tre ställen.' },
        { typ: 'text', text: 'Vid källan, där ljudet uppstår:' },
        { typ: 'punkter', punkter: [
          'tystare motorer, däck och maskiner',
          'lägre hastighet på vägarna',
          'asfalt som är tystare',
          'ett kylskåp som vibrerar kan ställas rakt'
        ] },
        { typ: 'text', text: 'På vägen, där ljudet sprids:' },
        { typ: 'punkter', punkter: [
          'bullerplank och jordvallar längs vägar',
          'större avstånd mellan vägar och hus',
          'väggar och fönster som släpper igenom lite ljud'
        ] },
        { typ: 'text', text: 'Hos den som hör:' },
        { typ: 'punkter', punkter: [
          'hörselskydd',
          'sovrummet på den tysta sidan av huset'
        ] },
        // [BILD D3: bullerbekämpningens tre steg som tre rutor bredvid varandra med ljudets väg från vänster till höger: källa (en bil – tystare däck och lägre fart) · väg (ett bullerplank mellan väg och hus) · mottagare (ett hus med sovrummet på baksidan och en person med hörselkåpor)]
        { id: 'bild-d3', typ: 'figur', namn: 'ljud', lage: 'bullerbekampning', bildtext: 'Buller kan minskas vid källan, på vägen och hos mottagaren.' },
        { typ: 'text', text: 'En tung vägg är svår att få att svänga. Därför släpper den igenom lite ljud. Inuti många väggar finns också ett luftigt material. Det tar upp ljudets energi och gör om den till lite värme.' },
        { typ: 'text', text: 'Lägg märke till skillnaden. Mjuka plattor i taket gör att ljudet studsar mindre inne i rummet. Men de stoppar inte ljudet från att gå igenom väggen till rummet bredvid. Det gör ljudisolering inuti väggen.' },
        { typ: 'rubrik', text: 'Både du och samhället har ansvar' },
        { typ: 'text', text: 'Du kan själv göra en del. Du kan ha lagom volym i hörlurarna. Du kan använda hörselskydd när du klipper gräset. Och du kan låta bli att spela hög musik när grannarna sover.' },
        { typ: 'text', text: 'Annat måste samhället ta ansvar för. Sverige har ett miljömål som heter God bebyggd miljö. Där ingår att människor inte ska störas av skadligt buller. När man planerar nya vägar, järnvägar, flygplatser eller vindkraftverk måste man räkna ut hur mycket buller de ger. För vindkraftverk brukar man till exempel ha som mål att ljudet inte ska vara starkare än 40 dB utomhus vid de närmaste husen.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljudnivå mäts i decibel, dB. 0 dB är det svagaste vi hör. Omkring 120 dB gör ont i öronen.',
          'En tumregel: 10 dB mer låter ungefär dubbelt så starkt.',
          'Ljudet blir svagare långt bort, eftersom det sprids över en större yta.',
          'Starka ljud skadar hårcellerna i örat. De växer normalt inte ut igen.',
          'Tinnitus är pip eller sus i öronen utan att något låter. Det kan komma efter starka ljud.',
          'Både styrka och tid spelar roll. En kvart i 100 dB ger lika mycket ljud till örat som en hel arbetsdag i 85 dB.',
          'Buller är ljud som stör. Det kan ge stress och dålig sömn.',
          'Man kan stoppa buller vid källan, på vägen och hos den som hör.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
