/* Avsnittssida I. Vad ljud är, text D: Örat och hörseln – nivån enkel (📗).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-D-Orat-och-horseln-alla-nivaer-v1.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2id: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-id.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Örat gör om ljud till signaler i hjärnan' },
        { typ: 'text', text: 'Du har läst att ljud är små ändringar i lufttrycket. De vandrar genom luften som förtätningar och förtunningar. Men hur blir det till musik, röster och fågelsång inne i ditt huvud?' },
        { typ: 'text', text: 'Det sker i örat och i hjärnan. Örat tar emot ljudet och gör om det till signaler. Hjärnan tar emot signalerna och förstår vad det är för ljud. I den här texten följer du ljudet hela vägen, från luften utanför huvudet till hjärnan.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vilka delar örat har',
          'vilken väg ljudet tar genom örat, steg för steg',
          'hur örat skyddar sig självt',
          'varför man säger att vi hör med hjärnan',
          'hur två öron hjälper dig att höra varifrån ljudet kommer',
          'varför det kan låsa sig i öronen när man flyger'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'orats-delar', titel: 'Örat består av tre delar',
      block: [
        { typ: 'rubrik', text: 'Ytterörat är det du kan se och ta på' },
        { typ: 'text', text: 'Det du kallar örat, den böjda biten på sidan av huvudet, är bara en liten del. Örat har tre delar: ytterörat, mellanörat och innerörat.' },
        { typ: 'text', text: '*Ytterörat|ytteröra* är den del du kan se och ta på. Den består av *öronmusslan|öronmussla* och *hörselgången|hörselgång*. Öronmusslan fångar upp ljudet, ungefär som en tratt. Hörselgången är det lilla röret som går in i huvudet. Längst in i hörselgången sitter *trumhinnan|trumhinna*. Det är en tunn hinna som är spänd som skinnet på en trumma.' },
        { typ: 'rubrik', text: 'Mellanörat har tre små ben' },
        { typ: 'text', text: 'Bakom trumhinnan finns *mellanörat|mellanöra*. Det är ett litet hålrum med luft i. Där sitter tre små ben som kallas *hörselben*. De heter hammaren, städet och stigbygeln. Det är kroppens minsta ben. Stigbygeln är bara ungefär tre millimeter lång.' },
        { typ: 'text', text: 'Från mellanörat går också en smal gång ned till halsen. Den kallas *örontrumpeten|örontrumpet*.' },
        { typ: 'rubrik', text: 'Innerörat har en snäcka med hårceller' },
        { typ: 'text', text: 'Längst in finns *innerörat|inneröra*. Det ligger skyddat inne i skallbenet. Där finns *hörselsnäckan|hörselsnäcka*. Den är en liten gång som är ihoprullad som ett snäckskal och fylld med vätska.' },
        { typ: 'text', text: 'Inuti snäckan sitter tusentals *hårceller|hårcell*. Det är celler med små hår på. Från snäckan går *hörselnerven|hörselnerv* till hjärnan.' },
        { typ: 'text', text: 'I innerörat finns också balansorganet. Det hjälper dig att hålla balansen, men det har inget med hörseln att göra.' },
        // [BILD D1: örat i genomskärning med namn på delarna: öronmussla, hörselgång, trumhinna, hammare, städ, stigbygel, snäcka, hörselnerv, örontrumpet, balansorgan. De tre delarna ytteröra, mellanöra och inneröra markerade med en klammer var]
        { id: 'bild-d1', typ: 'figur', namn: 'ljud', lage: 'orat-delar', bildtext: 'Örats tre delar: ytterörat, mellanörat och innerörat.' }
      ]
    },
    {
      id: 'ljudets-vag', titel: 'Ljudets väg genom örat',
      block: [
        { typ: 'rubrik', text: 'Ljudet går genom örat i sex steg' },
        { typ: 'text', text: 'Tänk dig att någon ropar ditt namn. På en bråkdel av en sekund händer det här:' },
        { typ: 'punkter', punkter: [
          'Öronmusslan fångar upp ljudvågen. Hörselgången leder in den till trumhinnan.',
          'Förtätningarna trycker på trumhinnan, och förtunningarna drar i den. Trumhinnan börjar vibrera i samma takt som ljudet.',
          'Trumhinnan sitter fast i hammaren. Vibrationerna går vidare från hammaren till städet och sedan till stigbygeln.',
          'Stigbygeln trycker på ett litet membran in till snäckan. Då börjar vätskan i snäckan att svänga.',
          'Vätskan som svänger böjer de små håren på hårcellerna. Då skickar hårcellerna elektriska signaler till hörselnerven.',
          'Hörselnerven leder signalerna till hjärnan. Hjärnan förstår att det är ett ljud, och att någon ropar ditt namn.'
        ] },
        // [BILD D2: ljudets väg genom örat i numrerade steg på en förenklad genomskärning: 1 ljudvågen kommer in i hörselgången · 2 trumhinnan vibrerar · 3 hörselbenen för vibrationerna vidare · 4 vätskan i snäckan sätts i svängning · 5 hårcellerna skickar signaler · 6 hörselnerven leder signalerna till hjärnan]
        { id: 'bild-d2', typ: 'figur', namn: 'ljud', lage: 'orat-vag', bildtext: 'Ljudet byter form på vägen: från tryckändringar i luft till signaler i en nerv.' },
        { typ: 'text', text: 'Ljudet byter alltså form flera gånger på vägen. Först är det tryckändringar i luften. Sedan blir det rörelser i trumhinnan och i benen. Sedan blir det svängningar i vätskan. Till sist blir det elektriska signaler i en nerv.' },
        { typ: 'rubrik', text: 'Hårcellerna är sköra' },
        { typ: 'text', text: 'I varje öra finns ungefär 15 000 hårceller. Det låter mycket, men i ögat finns miljontals celler som känner av ljus. Hårcellerna är alltså ganska få.' },
        { typ: 'text', text: 'De är också sköra. Starka ljud kan skada dem. Och hårceller som har skadats växer normalt inte ut igen. Om det får du läsa mer i texten om ljudnivå och hälsa.' }
      ]
    },
    {
      id: 'orat-skyddar-sig', titel: 'Örat skyddar sig självt',
      block: [
        { typ: 'rubrik', text: 'Öronvaxet håller hörselgången ren' },
        { typ: 'text', text: 'I hörselgången bildas *öronvax|öronvax*. Vaxet fångar damm och smuts. Det skyddar också huden i hörselgången mot bakterier. Vaxet flyttar sig långsamt utåt av sig självt och tar med sig smutsen ut.' },
        { typ: 'text', text: 'Många tror att man måste rensa öronen med bomullspinnar. Men då trycker man oftast in vaxet längre, närmare trumhinnan. Det räcker att tvätta ytterörat där du når med fingret.' },
        { typ: 'rubrik', text: 'En liten muskel dämpar starka ljud' },
        { typ: 'text', text: 'I mellanörat sitter två väldigt små muskler. De sitter fast i hörselbenen. När ett starkt ljud kommer drar musklerna ihop sig. Då blir hörselbenen stelare, och mindre av ljudet går vidare in till snäckan. Det skyddar hårcellerna.' },
        { typ: 'text', text: 'Men musklerna behöver en kort stund för att reagera. Om det smäller plötsligt, till exempel ett skott eller en smällare nära örat, hinner de inte skydda. Därför är smällar extra farliga för hörseln.' }
      ]
    },
    {
      id: 'vi-hor-med-hjarnan', titel: 'Vi hör med hjärnan',
      block: [
        { typ: 'rubrik', text: 'Örat tar emot, hjärnan förstår' },
        { typ: 'text', text: 'Många tror att det är örat som hör. Men örat tar bara emot ljudet och gör om det till signaler. Det är hjärnan som förstår vad signalerna betyder.' },
        { typ: 'text', text: 'Hjärnan jämför ljudet med allt den har hört tidigare. Den känner igen ljudet. Tänk dig att du hör ett "mjau" bakom en soptunna. Du ser ingen katt, men du vet ändå direkt att det är en katt. Det beror på att hjärnan har lärt sig hur en katt låter.' },
        { typ: 'rubrik', text: 'Hjärnan väljer vad du lyssnar på' },
        { typ: 'text', text: 'Hjärnan kan också välja vad du ska lyssna på. Tänk dig en matsal full av röster. Du kan ändå höra vad kompisen bredvid dig säger. Och om någon längre bort säger ditt namn, märker du det direkt.' },
        { typ: 'text', text: 'Hjärnan sorterar bort mycket av det örat tar emot. Ljud som finns hela tiden, som surret från ett kylskåp eller en fläkt, slutar du ofta att märka. Du upptäcker dem först när de tystnar.' }
      ]
    },
    {
      id: 'tva-oron', titel: 'Två öron ger riktning',
      block: [
        { typ: 'rubrik', text: 'Ljudet kommer fram till det närmaste örat först' },
        { typ: 'text', text: 'Du har två öron. Det gör att du kan höra varifrån ett ljud kommer. Så här fungerar det:' },
        { typ: 'punkter', punkter: [
          'Om ljudet kommer rakt framifrån når det båda öronen samtidigt.',
          'Om ljudet kommer från höger når det högra örat först. Ljudet har en lite längre väg till det vänstra örat.',
          'Hjärnan märker skillnaden. Skillnaden är mindre än en tusendels sekund, men hjärnan märker den ändå.'
        ] },
        { typ: 'rubrik', text: 'Huvudet står i vägen för ljudet' },
        { typ: 'text', text: 'Ljudet som ska till det bortre örat måste ta sig runt huvudet. Huvudet står i vägen, så ljudet blir lite svagare där. Det gäller särskilt ljusa ljud.' },
        { typ: 'text', text: 'Hjärnan använder båda skillnaderna. Den märker vilket öra som hör ljudet först, och vilket öra som hör det starkast. Så räknar den ut varifrån ljudet kommer. Den som bara hör på ett öra har därför svårt att veta varifrån ett ljud kommer.' },
        // [BILD D3: ett huvud sett uppifrån, två gånger bredvid varandra. Till vänster: ljudvågor rakt framifrån, når båda öronen samtidigt. Till höger: ljudvågor från höger sida, når högra örat först, och huvudet skuggar det vänstra örat]
        { id: 'bild-d3', typ: 'figur', namn: 'ljud', lage: 'huvud', bildtext: 'Ljud från sidan når det närmaste örat först, och huvudet skuggar det andra örat.' }
      ]
    },
    {
      id: 'orontrumpeten', titel: 'Örontrumpeten jämnar ut trycket',
      block: [
        { typ: 'rubrik', text: 'Trycket ska vara lika på båda sidor om trumhinnan' },
        { typ: 'text', text: 'Trumhinnan fungerar bäst när lufttrycket är lika stort på båda sidor om den. Det ser örontrumpeten till. Örontrumpeten är den smala gången mellan mellanörat och halsen.' },
        { typ: 'text', text: 'När du sväljer eller gäspar öppnas örontrumpeten en kort stund. Då kan luft komma in i mellanörat eller gå ut ur det. Så blir trycket lika på båda sidor.' },
        { typ: 'rubrik', text: 'Därför lockar det i öronen när man flyger' },
        { typ: 'text', text: 'Ibland ändras trycket utanför örat snabbt. Det händer när ett flygplan stiger eller landar, när du åker en snabb hiss i ett högt hus eller när du dyker. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Trycket utanför örat ändras snabbt.',
          'Örontrumpeten hinner inte jämna ut trycket.',
          'Trumhinnan buktar inåt eller utåt. Det känns som lock i öronen, och ljuden låter dämpade.',
          'Du sväljer, gäspar eller tuggar tuggummi. Örontrumpeten öppnas.',
          'Det säger "plopp" när trycket blir lika igen.'
        ] },
        { typ: 'text', text: 'När man är förkyld kan örontrumpeten vara svullen och täppt. Då kan det göra ont i öronen när man flyger.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Örat har tre delar: ytterörat, mellanörat och innerörat.',
          'Ytterörat är öronmusslan och hörselgången. Längst in sitter trumhinnan.',
          'I mellanörat finns tre små hörselben: hammaren, städet och stigbygeln.',
          'I innerörat finns hörselsnäckan. Den är fylld med vätska och har hårceller.',
          'Ljudets väg: hörselgången → trumhinnan → hörselbenen → vätskan i snäckan → hårcellerna → hörselnerven → hjärnan.',
          'Öronvaxet håller hörselgången ren. Små muskler dämpar starka ljud, men hinner inte skydda mot plötsliga smällar.',
          'Det är hjärnan som förstår och känner igen ljuden.',
          'Med två öron kan du höra varifrån ljudet kommer. Ljudet når det närmaste örat först och starkast.',
          'Örontrumpeten jämnar ut trycket. När det lockar i öronen hjälper det att svälja eller gäspa.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
