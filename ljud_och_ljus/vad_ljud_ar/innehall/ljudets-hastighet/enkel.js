/* Avsnittssida I. Vad ljud är, text C: Ljudets hastighet – nivån enkel (📗).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-C-Ljudets-hastighet-alla-nivaer-v4.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ic.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljudet behöver tid för att komma fram' },
        { typ: 'text', text: 'När en kompis pratar med dig verkar det som att ljudet kommer fram direkt. Men så är det inte riktigt. Ljudet behöver lite tid för att färdas från munnen till ditt öra. Avståndet är så kort att du inte märker det.' },
        { typ: 'text', text: 'Men ibland märker du att ljudet kommer efter. Det gäller till exempel när det åskar, när du står långt bak på en konsert eller när du ser någon hugga ved långt bort. I den här texten får du veta hur fort ljudet går. Du får också veta varför det går olika fort i olika ämnen och hur du kan räkna med ljudets hastighet.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur fort ljudet går i luft, och varför du ser blixten innan du hör åskan',
          'att ljudet går fortare i vatten och i fasta saker',
          'vad det är som bestämmer hur fort ljudet går',
          'hur du räknar ut avstånd och tid med ljudets hastighet'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'i-luft', titel: 'Ljudet går ungefär 340 meter per sekund i luft',
      block: [
        { typ: 'rubrik', text: 'Ljudet går en kilometer på tre sekunder' },
        { typ: 'text', text: 'I luft går ljudet ungefär 340 meter varje sekund. Det skrivs 340 m/s. Det är snabbare än ett jetplan.' },
        { typ: 'text', text: 'Men ljuset är mycket, mycket snabbare. Ljuset går nästan en miljon gånger fortare än ljudet. På en sekund hinner ljuset sju varv runt hela jorden. När något händer en bit bort ser vi det därför i stort sett direkt. Men ljudet behöver ungefär 3 sekunder för att gå 1 kilometer.' },
        { typ: 'rubrik', text: 'Du ser blixten innan du hör åskan' },
        { typ: 'text', text: 'När det åskar händer blixten och smällen samtidigt. Men du ser blixten först och hör mullret sedan. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Blixten slår ned. Ljuset från blixten når dina ögon nästan direkt.',
          'Ljudet från blixten börjar färdas genom luften.',
          'Efter 3 sekunder har ljudet gått ungefär 1 kilometer.',
          'Efter 6 sekunder har ljudet gått ungefär 2 kilometer.',
          'När ljudet når dig hör du mullret.'
        ] },
        // [BILD C1: åskan i numrerade steg längs en vågrät linje från blixten till en person 3 km bort: 1 blixten slår ned – ljuset når personen nästan direkt · 2 efter 3 sekunder har ljudet kommit 1 km · 3 efter 6 sekunder har det kommit 2 km · 4 efter 9 sekunder når mullret personen. Ljuset ritat som en rak pil över hela sträckan, ljudet som vågfronter vid 1, 2 och 3 km]
        { id: 'bild-c1', typ: 'figur', namn: 'ljud', lage: 'aska', bildtext: 'Ljuset kommer fram nästan direkt, men ljudet behöver ungefär 3 sekunder för varje kilometer.' },
        { typ: 'text', text: 'Så kan du räkna ut hur långt bort åskan är. Räkna sekunderna från blixten tills du hör mullret. Dela sedan antalet sekunder med 3. Då får du ungefär hur många kilometer bort blixten slog ned. Om det tar 9 sekunder är åskan ungefär 3 kilometer bort. Om tiden mellan blixt och muller blir kortare och kortare, kan det betyda att åskvädret närmar sig.' },
        { typ: 'rubrik', text: 'Ljudet kommer inte alltid fram direkt' },
        { typ: 'text', text: 'Många tror att man alltid hör något i samma ögonblick som man ser det. När det är nära stämmer det nästan. Men när det är långt bort stämmer det inte.' },
        { typ: 'text', text: 'Om du står 85 meter från scenen på en konsert tar det en fjärdedels sekund innan ljudet når dig. Om du ser någon hugga ved på andra sidan en sjö, ser du först yxan träffa. Lite senare hör du hugget.' },
        { typ: 'text', text: 'Förr startade man löptävlingar med ett startskott. Då hörde löparen som stod längst bort smällen lite senare än den som stod närmast. Därför sitter det i dag en liten högtalare bakom varje löpares startblock.' },
        { typ: 'rubrik', text: 'I varm luft går ljudet lite fortare' },
        { typ: 'text', text: 'Hur fort ljudet går i luft beror också på hur varm luften är. I varm luft rör sig molekylerna fortare, och då går ljudet också lite fortare. En varm sommardag går ljudet ungefär 345 m/s. En kall vinterdag går det ungefär 320 m/s. Talet 340 m/s gäller ungefär när det är lika varmt som inomhus.' }
      ]
    },
    {
      id: 'olika-amnen', titel: 'Ljudet går fortare i vatten och fasta ämnen',
      block: [
        { typ: 'rubrik', text: 'I vatten går ljudet mer än fyra gånger så fort' },
        { typ: 'text', text: 'I vatten går ljudet ungefär 1 500 m/s. Det är mer än fyra gånger så fort som i luft.' },
        { typ: 'text', text: 'Tänk dig att du simmar i en sjö. En motorbåt är långt borta, och du hör den inte. Men om du dyker ned under ytan kan du höra motorn och propellern tydligt. Båten gör ljud både i luften och i vattnet. I vattnet kan ljudet gå långt.' },
        { typ: 'rubrik', text: 'I fasta ämnen går ljudet ännu fortare' },
        { typ: 'text', text: 'I fasta ämnen går ljudet oftast ännu fortare. I trä kan det gå ungefär 4 000 m/s, om ljudet går längs träets fibrer. I stål går det nästan 6 000 m/s. Det är mer än 17 gånger så fort som i luft.' },
        { typ: 'text', text: 'Därför kan rälsen börja "sjunga" när ett tåg närmar sig, innan man hör tåget genom luften. Om du ligger med örat mot marken kan du höra steg och hovslag långt bort. Ljudet går genom marken.' },
        { typ: 'text', text: 'Men lägg aldrig örat mot en järnvägsräls. Det är livsfarligt att vistas på spåret.' },
        // [BILD C2: ljudets hastighet i olika ämnen som liggande staplar: luft 340 m/s · vatten 1 500 m/s · trä ca 4 000 m/s · stål ca 5 900 m/s. Varje stapel märkt med ämnets namn och hastigheten]
        { id: 'bild-c2', typ: 'figur', namn: 'ljud', lage: 'hastigheter', bildtext: 'Ljudet går fortast i fasta ämnen och långsammast i luft.' }
      ]
    },
    {
      id: 'varfor-olika-fort', titel: 'Varför ljudet går olika fort',
      block: [
        { typ: 'rubrik', text: 'Det beror på hur hårt partiklarna sitter ihop, och på densiteten' },
        { typ: 'text', text: 'Ljudet går framåt genom att partiklar knuffar på varandra. Hur fort det går beror på två saker. Den första är hur hårt partiklarna sitter ihop. Man kan också säga: hur svårt det är att trycka ihop ämnet. Ett ämne som är svårt att trycka ihop kallas *styvt|styv*. Ju styvare, desto fortare går ljudet. Den andra saken är densiteten. Den får du läsa om lite längre ned.' },
        { typ: 'text', text: 'Jämför de tre:' },
        { typ: 'punkter', punkter: [
          'I luft är molekylerna långt ifrån varandra, och de sitter inte ihop. Luft är lätt att trycka ihop. Knuffen går ganska långsamt vidare.',
          'Vatten är mycket svårare att trycka ihop. Där går knuffen fortare.',
          'I stål sitter partiklarna hårt ihop, ungefär som om de var kopplade med stela fjädrar. När en partikel rör sig följer grannen med nästan direkt. Där går ljudet väldigt fort.'
        ] },
        { typ: 'rubrik', text: 'Hög densitet gör inte ljudet snabbare' },
        { typ: 'text', text: 'Många böcker skriver att ljudet går fortare i ämnen med hög *densitet*. Densitet betyder hur mycket massa det finns på en viss volym. Ett ämne med hög densitet är tungt för sin storlek.' },
        { typ: 'text', text: 'Det låter rimligt. Vatten har högre densitet än luft, och stål har högre densitet än vatten. Och ljudet går fortare i vatten än i luft, och fortare i stål än i vatten. Men den höga densiteten är inte förklaringen.' },
        { typ: 'text', text: 'Det märks om man jämför bly och aluminium. Bly är en mycket tung metall. Den har mycket högre densitet än aluminium. Om densiteten gjorde ljudet snabbt, skulle ljudet gå fortast i bly. Men det är tvärtom. I bly går ljudet bara drygt 2 000 m/s. I aluminium går det över 6 000 m/s.' },
        { typ: 'text', text: 'Förklaringen är att aluminium är styvt, men bly är mjukt. Styvheten gör ljudet snabbare. Hög densitet gör det tvärtom långsammare, eftersom tunga partiklar är trögare att få i rörelse. I bly drar båda åt samma håll, och ljudet blir långsamt.' }
      ]
    },
    {
      id: 'rakna-med-ljudet', titel: 'Räkna med ljudets hastighet',
      block: [
        { typ: 'rubrik', text: 'Sträcka är hastighet gånger tid' },
        { typ: 'text', text: 'Ljudet går med samma fart hela vägen. Därför kan du räkna ut hur långt det har gått, om du vet hur länge det har gått. Du multiplicerar hastigheten med tiden. Det är samma sak som du har räknat med i matematiken.' },
        { typ: 'formel', uttryck: 's = v · t', forklaring: 's sträckan (m), v hastigheten (m/s), t tiden (s)' },
        { typ: 'exempel', rubrik: 'Åskan', stycken: [
          ['Du ser en blixt. 6 sekunder senare hör du mullret. Hur långt bort slog blixten ned?'],
          ['Givet: Ljudets hastighet är v = 340 m/s. Tiden är t = 6 s. Sökt: sträckan s.'],
          ['Lösning: Multiplicera hastigheten med tiden.',
           's = v · t = 340 m/s · 6 s = 2 040 m',
           'Svar: Blixten slog ned ungefär 2 km bort.']
        ] },
        { typ: 'text', text: 'Om du i stället vet hur långt det är, kan du räkna ut tiden. Då delar du sträckan med hastigheten.' },
        { typ: 'exempel', rubrik: 'Konserten', stycken: [
          ['Du står 34 m från högtalarna på en konsert. Hur lång tid tar det innan ljudet når dig?'],
          ['Givet: Sträckan är s = 34 m. Ljudets hastighet är v = 340 m/s. Sökt: tiden t.'],
          ['Lösning: Dela sträckan med hastigheten.',
           't = s / v = 34 m / 340 m/s = 0,1 s',
           'Svar: Ljudet når dig efter en tiondels sekund.']
        ] },
        { typ: 'rubrik', text: 'Så mätte man ljudets hastighet förr' },
        { typ: 'text', text: 'För flera hundra år sedan ville forskare ta reda på hur fort ljudet går. De gjorde så här:' },
        { typ: 'punkter', punkter: [
          'De ställde upp en kanon. Flera kilometer bort stod en person med ett tidtagningsur. Man visste exakt hur långt det var mellan dem.',
          'När kanonen sköt såg personen eldblixten direkt. Då startade han uret.',
          'När knallen kom fram stoppade han uret.',
          'Avståndet delat med tiden gav ljudets hastighet.'
        ] },
        { typ: 'text', text: 'De fick fram ett värde som är mycket nära det vi använder i dag.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljudet går ungefär 340 m/s i luft. Det är ungefär 1 kilometer på 3 sekunder.',
          'Ljuset är nästan en miljon gånger snabbare. Därför ser du blixten innan du hör åskan.',
          'Räkna sekunderna mellan blixt och muller och dela med 3. Då får du ungefär avståndet i kilometer.',
          'I varm luft går ljudet lite fortare än i kall luft.',
          'Ljudet går ungefär 1 500 m/s i vatten och nästan 6 000 m/s i stål.',
          'Hur fort ljudet går beror på hur styvt ämnet är och på dess densitet. Styvt gör ljudet snabbare, tungt gör det långsammare.',
          'Sträcka = hastighet · tid. Tid = sträcka / hastighet.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
