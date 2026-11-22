/* Avsnittssida I. Vad ljud är, text C: Ljudets hastighet – nivån standard (📘).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-C-Ljudets-hastighet-alla-nivaer-v4.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ic.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljudet tar tid på sig' },
        { typ: 'text', text: 'När någon pratar med dig verkar ljudet komma fram direkt. Men ljudet tar faktiskt tid på sig att färdas från munnen till ditt öra. Oftast märker vi det inte, eftersom avstånden är så korta. Men när det åskar, när du står långt bak på en konsert eller ser någon hugga ved på avstånd, märker du att ljudet kommer efter. I den här texten får du veta hur fort ljudet går, varför det går olika fort i olika ämnen och hur du kan räkna med ljudets hastighet.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur fort ljudet går i luft, och varför vi ser blixten innan vi hör åskan',
          'att ljudet går fortare i vatten och i fasta ämnen',
          'vad som avgör hur fort ljudet går, och varför det inte är densiteten',
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
        { typ: 'rubrik', text: 'Ljudet hinner en kilometer på tre sekunder' },
        { typ: 'text', text: 'I luft färdas ljudet ungefär 340 meter varje sekund, alltså 340 m/s. Det är snabbare än ett jetplan, men mycket långsammare än ljuset. Ljuset färdas nästan en miljon gånger fortare och hinner runt jorden sju gånger på en sekund. Över de avstånd vi ser omkring oss kommer ljuset därför fram i stort sett direkt, medan ljudet tar ungefär 3 sekunder på sig för varje kilometer.' },
        { typ: 'rubrik', text: 'Därför ser du blixten innan du hör åskan' },
        { typ: 'text', text: 'Blixten och åskknallen uppstår i samma ögonblick. Men ljuset från blixten når dig nästan direkt, medan ljudet måste färdas genom luften i sin egen takt. Räknar du sekunderna från blixten till mullret och delar med 3, får du ungefär hur många kilometer bort blixten slog ned. Hör du mullret 9 sekunder efter blixten är åskvädret ungefär 3 kilometer bort. Blir tiden mellan blixt och muller kortare gång på gång kan det vara ett tecken på att åskvädret närmar sig.' },
        // [BILD C1: åskan i numrerade steg längs en vågrät linje från blixten till en person 3 km bort: 1 blixten slår ned – ljuset når personen nästan direkt · 2 efter 3 sekunder har ljudet kommit 1 km · 3 efter 6 sekunder har det kommit 2 km · 4 efter 9 sekunder når mullret personen. Ljuset ritat som en rak pil över hela sträckan, ljudet som vågfronter vid 1, 2 och 3 km]
        { id: 'bild-c1', typ: 'figur', namn: 'ljud', lage: 'aska', bildtext: 'Ljuset kommer fram nästan direkt, men ljudet behöver ungefär 3 sekunder för varje kilometer.' },
        { typ: 'rubrik', text: 'Många tror att ljudet kommer fram direkt' },
        { typ: 'text', text: 'Många tror att det man ser och det man hör alltid händer samtidigt. På korta avstånd stämmer det nästan, men inte på långa. Står du 85 meter från scenen på en konsert tar det en fjärdedels sekund innan ljudet når dig. Ser du någon hugga ved på andra sidan en sjö ser du yxan träffa innan du hör hugget. Förr startades löpartävlingar med ett startskott, och då hörde löparen i den yttersta banan smällen en liten stund efter den som stod närmast startern. I dag sitter det därför högtalare bakom varje startblock.' },
        { typ: 'rubrik', text: 'Ljudet går lite fortare i varm luft' },
        { typ: 'text', text: 'Ljudets hastighet i luft beror också på temperaturen. Ju varmare luften är, desto fortare rör sig molekylerna, och desto snabbare förs en knuff vidare. En varm sommardag går ljudet ungefär 345 m/s, en kall vinterdag ungefär 320 m/s. Talet 340 m/s gäller ungefär vid vanlig rumstemperatur.' }
      ]
    },
    {
      id: 'olika-amnen', titel: 'Ljudet går fortare i vatten och fasta ämnen',
      block: [
        { typ: 'rubrik', text: 'I vatten går ljudet mer än fyra gånger så fort' },
        { typ: 'text', text: 'I vatten färdas ljudet ungefär 1 500 m/s, mer än fyra gånger så fort som i luft. Är du ute och simmar kan det hända att du inte hör en motorbåt som är långt borta. Men dyker du ned under ytan kan du höra motorn och propellern tydligt. Båten skapar ljud både i luften och i vattnet, och i vattnet kan ljudet färdas långa sträckor.' },
        { typ: 'rubrik', text: 'I fasta ämnen går ljudet ännu fortare' },
        { typ: 'text', text: 'I fasta ämnen går ljudet oftast ännu fortare. I trä längs fibrerna kan det gå omkring 4 000 m/s och i stål nästan 6 000 m/s, alltså mer än 17 gånger så fort som i luft. Därför kan rälsen börja "sjunga" av ett tåg som närmar sig, innan tåget hörs genom luften. Gå ändå aldrig upp på spåret för att lyssna – det är livsfarligt. Av samma skäl kan den som ligger med örat mot marken höra steg och hovslag långt bort.' },
        // [BILD C2: ljudets hastighet i olika ämnen som liggande staplar: luft 340 m/s · vatten 1 500 m/s · trä ca 4 000 m/s · stål ca 5 900 m/s. Varje stapel märkt med ämnets namn och hastigheten]
        { id: 'bild-c2', typ: 'figur', namn: 'ljud', lage: 'hastigheter', bildtext: 'Ljudet går fortast i fasta ämnen och långsammast i luft.' }
      ]
    },
    {
      id: 'varfor-olika-fort', titel: 'Varför ljudet går olika fort',
      block: [
        { typ: 'rubrik', text: 'Styvheten och densiteten avgör tillsammans' },
        { typ: 'text', text: 'Ljudet förs vidare genom att partiklar knuffar på varandra. Hur fort det går beror på två egenskaper hos ämnet. Den ena är hur hårt partiklarna hänger ihop, alltså hur svårt det är att trycka ihop eller böja ämnet. Ett ämne som är svårt att trycka ihop kallas *styvt|styv*. Ju styvare ämnet är, desto snabbare sprids vibrationerna.' },
        { typ: 'text', text: 'Den andra egenskapen är densiteten, och den verkar åt motsatt håll, något du läser om nedan. I en gas är molekylerna långt ifrån varandra och knappt bundna till varandra. Gasen går lätt att trycka ihop, och en knuff förs vidare ganska långsamt. Vatten är mycket svårare att trycka ihop, och där förs knuffen vidare fortare. I ett fast ämne som stål sitter partiklarna hårt bundna till varandra, nästan som om de vore kopplade med styva fjädrar. Rör sig en partikel följer grannen med nästan direkt, och ljudet rusar fram.' },
        { typ: 'rubrik', text: 'Många tror att det beror på densiteten' },
        { typ: 'text', text: 'I många böcker står det att ljudet går fortare i ämnen med hög *densitet*, alltså ämnen där mycket massa är packad på liten volym. Det låter rimligt, eftersom vatten har högre densitet än luft och stål högre än vatten. Men det är inte densiteten som är orsaken. Det syns om man jämför två metaller. Bly har mycket högre densitet än aluminium, men i bly går ljudet bara drygt 2 000 m/s, medan det i aluminium går över 6 000 m/s. Aluminium är styvt men lätt, bly är tungt men mjukt. Hög densitet gör tvärtom ett ämne trögare, eftersom partiklarna har mer massa att sätta i rörelse, och det gör ljudet långsammare. Att ljudet ändå går så fort i fasta ämnen beror på att de är så mycket styvare, och det väger tyngre än den högre densiteten. Varför det är så läser du mer om i Fördjupning.' }
      ]
    },
    {
      id: 'rakna-med-ljudet', titel: 'Räkna med ljudets hastighet',
      block: [
        { typ: 'rubrik', text: 'Sträcka är hastighet gånger tid' },
        { typ: 'text', text: 'Eftersom ljudet går med en jämn hastighet kan man räkna ut hur långt det har färdats om man vet hur lång tid det tog. Det är samma samband som du har använt i matematiken.' },
        { typ: 'formel', uttryck: 's = v · t', forklaring: 's sträckan (m), v hastigheten (m/s), t tiden (s)' },
        { typ: 'exempel', rubrik: 'Åskan', stycken: [
          ['Du ser en blixt och hör mullret 6 sekunder senare. Hur långt bort slog blixten ned?'],
          ['Givet: v = 340 m/s, t = 6 s. Sökt: sträckan s.'],
          ['Lösning:',
           's = v · t = 340 m/s · 6 s = 2 040 m',
           'Svar: Blixten slog ned ungefär 2 km bort.']
        ] },
        { typ: 'text', text: 'Vet man i stället sträckan kan man räkna ut tiden genom att dela sträckan med hastigheten.' },
        { typ: 'exempel', rubrik: 'Konserten', stycken: [
          ['Du står 34 m från högtalarna på en konsert. Hur lång tid tar det för ljudet att nå dig?'],
          ['Givet: s = 34 m, v = 340 m/s. Sökt: tiden t.'],
          ['Lösning:',
           't = s / v = 34 m / 340 m/s = 0,1 s',
           'Svar: Ljudet når dig efter en tiondels sekund.']
        ] },
        { typ: 'rubrik', text: 'Så mätte man ljudets hastighet förr' },
        { typ: 'text', text: 'För flera hundra år sedan mätte forskare ljudets hastighet på just det här sättet. De ställde upp en kanon och placerade en observatör med ett tidtagningsur flera kilometer bort, där man kände till avståndet exakt. När kanonen avfyrades såg observatören blixten från mynningen direkt och började mäta tiden. När knallen kom fram stoppade han uret. Avståndet delat med tiden gav ljudets hastighet. Man fick fram värden mycket nära dem vi använder i dag.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljudet färdas ungefär 340 m/s i luft, ungefär 1 kilometer på 3 sekunder. Ljuset är nästan en miljon gånger snabbare.',
          'Därför ser vi blixten innan vi hör åskan. Antalet sekunder delat med 3 ger ungefär avståndet i kilometer.',
          'I varm luft går ljudet lite fortare än i kall luft.',
          'Ljudet går ungefär 1 500 m/s i vatten och ännu fortare i fasta ämnen, nästan 6 000 m/s i stål.',
          'Ljudets hastighet beror på både styvhet och densitet. Styvhet gör ljudet snabbare, hög densitet gör det långsammare. Därför går ljudet fortare i aluminium än i det mycket tyngre blyet.',
          'Sträcka = hastighet · tid, s = v · t. Tid = sträcka / hastighet.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
