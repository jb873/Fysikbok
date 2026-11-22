/* Avsnittssida I. Vad ljud är, text D: Örat och hörseln – nivån standard (📘).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-D-Orat-och-horseln-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2id: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-id.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Örat gör om luftens svängningar till signaler i hjärnan' },
        { typ: 'text', text: 'Du har läst att ljud är små tryckändringar som vandrar genom luften. Men hur kan sådana svängningar bli till röster, musik och fågelsång i ditt huvud? Det sker i en av kroppens mest förfinade konstruktioner, örat, och i hjärnan som tolkar det örat skickar vidare. I den här texten följer du ljudet hela vägen från luften utanför huvudet till hjärnan.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vilka delar örat består av',
          'vägen ljudet tar genom örat, steg för steg',
          'hur örat skyddar sig självt',
          'varför man kan säga att vi hör med hjärnan',
          'hur två öron hjälper oss att höra varifrån ljudet kommer',
          'vad örontrumpeten gör, och varför det lockar i öronen i ett flygplan'
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
        { typ: 'rubrik', text: 'Ytterörat, mellanörat och innerörat' },
        { typ: 'text', text: 'Det du kallar örat, den böjda broskbiten på sidan av huvudet, är bara början. Örat delas in i tre delar.' },
        { typ: 'text', text: '*Ytterörat|ytteröra* består av *öronmusslan|öronmussla* och *hörselgången|hörselgång*. Öronmusslan fångar upp ljudet som en tratt, och hörselgången leder in det i huvudet. Längst in i hörselgången sitter *trumhinnan|trumhinna*, ett tunt och spänt membran som skiljer ytterörat från mellanörat.' },
        { typ: 'text', text: '*Mellanörat|mellanöra* är ett litet hålrum fyllt med luft. Där sitter tre små ben som kallas *hörselben*: hammaren, städet och stigbygeln. De är kroppens minsta ben. Stigbygeln är bara omkring tre millimeter lång. Från mellanörat går också en smal gång ned till svalget, *örontrumpeten|örontrumpet*.' },
        { typ: 'text', text: '*Innerörat|inneröra* ligger inbäddat i skallbenet. Där finns *hörselsnäckan|hörselsnäcka*, en vätskefylld gång som är ihoprullad som ett snäckskal. Inuti snäckan sitter tusentals *hårceller|hårcell*, sinnesceller med små hårliknande utskott. Från snäckan går *hörselnerven|hörselnerv* till hjärnan. I innerörat sitter också balansorganet, som inte har med hörseln att göra men som känner av hur huvudet rör sig.' },
        // [BILD D1: örat i genomskärning med namn på delarna: öronmussla, hörselgång, trumhinna, hammare, städ, stigbygel, ovala fönstret, snäcka, hörselnerv, örontrumpet, balansorgan. De tre delarna ytteröra, mellanöra och inneröra markerade med en klammer var]
        { id: 'bild-d1', typ: 'figur', namn: 'ljud', lage: 'orat-delar', bildtext: 'Örats tre delar: ytterörat, mellanörat och innerörat.' }
      ]
    },
    {
      id: 'ljudets-vag', titel: 'Ljudets väg genom örat',
      block: [
        { typ: 'rubrik', text: 'Från luft till nervsignal i sex steg' },
        { typ: 'text', text: 'När någon säger ditt namn händer det här, på bråkdelen av en sekund:' },
        { typ: 'punkter', punkter: [
          'Öronmusslan fångar upp ljudvågen, och hörselgången leder in den till trumhinnan.',
          'Förtätningarna och förtunningarna trycker och drar i trumhinnan, så att den börjar vibrera i samma takt som ljudet.',
          'Trumhinnan sitter fast i hammaren. Vibrationerna förs vidare genom hammaren, städet och stigbygeln.',
          'Stigbygeln trycker på *ovala fönstret|ovala fönstret*, ett litet membran in till hörselsnäckan, och vätskan i snäckan sätts i svängning.',
          'Svängningarna i vätskan böjer hårcellernas små utskott. Hårcellerna omvandlar rörelserna till signaler som får hörselnervens nervceller att skicka elektriska impulser.',
          'Hörselnerven leder signalerna till hjärnan, som tolkar dem som ljud.'
        ] },
        // [BILD D2: ljudets väg genom örat i numrerade steg på en förenklad genomskärning: 1 ljudvågen kommer in i hörselgången · 2 trumhinnan vibrerar · 3 hörselbenen för vibrationerna vidare · 4 stigbygeln trycker på ovala fönstret och vätskan i snäckan sätts i svängning · 5 hårcellerna omvandlar rörelsen till signaler · 6 hörselnervens nervceller skickar impulser till hjärnan]
        { id: 'bild-d2', typ: 'figur', namn: 'ljud', lage: 'orat-vag', bildtext: 'Ljudet byter form på vägen: från tryckändringar i luft till signaler i en nerv.' },
        { typ: 'text', text: 'Lägg märke till att ljudet byter form på vägen. Det börjar som tryckändringar i luft, blir till rörelser i ett membran och i ben, sedan till svängningar i en vätska och till sist till elektriska signaler i en nerv.' },
        { typ: 'rubrik', text: 'Hårcellerna är känsliga och få' },
        { typ: 'text', text: 'I varje öra finns omkring 15 000 hårceller. Det låter mycket, men det är få jämfört med de miljontals sinnesceller som finns i ögat. Hårcellerna är också sköra. Starka ljud kan skada dem, och skadade hårceller växer normalt inte ut igen. Mer om det läser du i texten om ljudnivå och hälsa.' }
      ]
    },
    {
      id: 'orat-skyddar-sig', titel: 'Örat skyddar sig självt',
      block: [
        { typ: 'rubrik', text: 'Öronvaxet håller hörselgången ren' },
        { typ: 'text', text: 'Hörselgången har körtlar som tillverkar *öronvax|öronvax*. Vaxet fångar damm och smuts och skyddar huden mot bakterier. Det flyttar sig långsamt utåt av sig själv och tar med sig smutsen. Många tror att man måste rensa öronen med bomullspinnar, men då trycker man oftast in vaxet längre, mot trumhinnan. Ytterörat behöver bara tvättas där man når med fingret.' },
        { typ: 'rubrik', text: 'En liten muskel dämpar starka ljud' },
        { typ: 'text', text: 'I mellanörat finns små muskler som kan minska hörselbenens rörelser. Vid starka ljud kan en av dem, stigbygelmuskeln, dra ihop sig, så att mindre av vibrationerna förs vidare till snäckan. Det kallas en *skyddsreflex|skyddsreflex*. Den dämpar framför allt låga toner och ger bara ett begränsat skydd. Den kan aldrig ersätta hörselskydd. Dessutom behöver reflexen en kort stund för att komma igång. Mot en plötslig smäll, som ett skott eller en smällare nära örat, hinner den inte skydda. Därför är just smällar så farliga för hörseln.' }
      ]
    },
    {
      id: 'vi-hor-med-hjarnan', titel: 'Vi hör med hjärnan',
      block: [
        { typ: 'rubrik', text: 'Örat tar emot, hjärnan förstår' },
        { typ: 'text', text: 'Många tror att det är örat som hör. Örat fångar upp ljudet, bearbetar svängningarna, till exempel genom att sortera dem efter frekvens i snäckan, och gör om dem till nervsignaler. Men det är hjärnan som tolkar signalerna och gör dem till något vi förstår. Hjärnan jämför ljudet med allt vi har hört tidigare och känner igen det. Hör du ett "mjau" bakom en soptunna vet du direkt att det är en katt, fast du inte ser den. Det beror på att hjärnan har lärt sig hur en katt låter.' },
        { typ: 'rubrik', text: 'Hjärnan väljer vad vi lyssnar på' },
        { typ: 'text', text: 'Hjärnan kan också välja vad vi ska lägga märke till. I en matsal full av röster kan du ändå följa vad kompisen bredvid säger, och du reagerar direkt om någon längre bort säger ditt namn. Hjärnan sorterar bort mycket av det örat tar emot. Ljud som hela tiden finns där, som surret från ett kylskåp eller en fläkt, slutar vi ofta att märka. Vi upptäcker dem först när de tystnar.' }
      ]
    },
    {
      id: 'tva-oron', titel: 'Två öron ger riktning',
      block: [
        { typ: 'rubrik', text: 'Ljudet når det närmaste örat först' },
        { typ: 'text', text: 'Att ha två öron gör att vi kan höra varifrån ett ljud kommer. Kommer ljudet rakt framifrån når det båda öronen samtidigt. Kommer det från höger når det högra örat lite före det vänstra, eftersom ljudet har en längre väg till vänster öra. Skillnaden är mindre än en tusendels sekund, men hjärnan märker den.' },
        { typ: 'rubrik', text: 'Huvudet skuggar ljudet' },
        { typ: 'text', text: 'Dessutom ligger huvudet i vägen för ljudet till det bortre örat. Ljudet blir därför lite svagare där, särskilt de ljusa tonerna. Hjärnan använder både tidsskillnaden och styrkeskillnaden för att räkna ut riktningen. Den som bara hör på ett öra har därför svårt att avgöra varifrån ett ljud kommer.' },
        // [BILD D3: ett huvud sett uppifrån, två gånger bredvid varandra. Till vänster: ljudvågor rakt framifrån, når båda öronen samtidigt. Till höger: ljudvågor från höger sida, når högra örat först, och huvudet skuggar det vänstra örat]
        { id: 'bild-d3', typ: 'figur', namn: 'ljud', lage: 'huvud', bildtext: 'Ljud från sidan når det närmaste örat först, och huvudet skuggar det andra örat.' }
      ]
    },
    {
      id: 'orontrumpeten', titel: 'Örontrumpeten jämnar ut trycket',
      block: [
        { typ: 'rubrik', text: 'Trycket måste vara lika på båda sidor om trumhinnan' },
        { typ: 'text', text: 'Trumhinnan vibrerar bäst när lufttrycket är lika stort på båda sidor om den. Örontrumpeten, den smala gången mellan mellanörat och svalget, ser till det. När du sväljer eller gäspar öppnas den en kort stund, och luft kan strömma in i eller ut ur mellanörat tills trycket är lika.' },
        { typ: 'rubrik', text: 'Därför lockar det i öronen' },
        { typ: 'text', text: 'När ett flygplan stiger eller sjunker, när du åker snabb hiss i ett högt hus eller när du dyker, ändras trycket utanför örat snabbt. Örontrumpeten hinner inte jämna ut skillnaden, och trumhinnan buktar inåt eller utåt. Det känns som lock i öronen, och ljuden låter dämpade. Sväljer du, gäspar eller tuggar tuggummi öppnas örontrumpeten, och det säger "plopp" när trycket jämnas ut. När man är förkyld kan örontrumpeten vara svullen och igentäppt, och då kan det göra ont i öronen när man flyger.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Örat har tre delar: ytterörat (öronmussla, hörselgång), mellanörat (trumhinna, hammare, städ, stigbygel) och innerörat (hörselsnäcka med hårceller).',
          'Ljudets väg: hörselgång → trumhinna → hörselben → vätskan i snäckan → hårceller → hörselnerv → hjärnan.',
          'Ljudet byter form på vägen: från tryckändringar i luft till elektriska signaler.',
          'Öronvax håller hörselgången ren. En skyddsreflex i mellanörat dämpar starka ljud lite, men skyddet är begränsat och hinner inte med plötsliga smällar.',
          'Det är hjärnan som tolkar och känner igen ljuden, och som väljer vad vi lyssnar på.',
          'Två öron gör att vi hör varifrån ljudet kommer: ljudet når det närmaste örat först och starkast.',
          'Örontrumpeten jämnar ut trycket i mellanörat. Därför hjälper det att svälja när det lockar i öronen.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
