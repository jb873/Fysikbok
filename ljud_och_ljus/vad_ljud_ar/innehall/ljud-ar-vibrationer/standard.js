/* Avsnittssida I. Vad ljud är, text A: Ljud är vibrationer – nivån standard (📘).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-A-Ljud-ar-vibrationer-alla-nivaer-v5.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ia.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljud finns omkring dig hela tiden' },
        { typ: 'text', text: 'Just nu hör du kanske röster, en fläkt, bilar utanför eller musik i någons hörlurar. Ljud är så vanligt att vi sällan tänker på vad det egentligen är. Men alla ljud, från en viskning till en åskknall, uppstår på samma sätt och sprids på samma sätt. I den här texten får du veta hur.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att allt ljud börjar med något som *vibrerar|vibrera*',
          'hur ljudet sprids som *förtätningar|förtätning* och *förtunningar|förtunning*',
          'att ljudvågen för med sig energi, men inte luft',
          'varför ljud behöver ett ämne att färdas i, och varför det är tyst i rymden'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'nagot-svanger', titel: 'Allt ljud börjar med något som svänger',
      block: [
        { typ: 'rubrik', text: 'Ett föremål som svänger fram och tillbaka vibrerar' },
        { typ: 'text', text: 'Lägg fingrarna mot halsen och säg ett långt "aaa". Du känner hur det skakar. Det är dina stämband som svänger fram och tillbaka mycket snabbt. När något svänger fram och tillbaka på det sättet säger man att det *vibrerar|vibrera*, och rörelsen kallas en *vibration*.' },
        { typ: 'text', text: 'Allt ljud börjar med en vibration. En gitarrsträng vibrerar när du knäpper på den. Ett trumskinn vibrerar när du slår på det. I en högtalare finns ett tunt membran som vibrerar i takt med musiken. Även ljud som vi inte tycker om, som från en borrmaskin eller en tvättmaskin, kommer från något som vibrerar. Vackra toner och störande buller uppstår alltså på precis samma sätt.' },
        { typ: 'text', text: 'Ibland är det luften själv som vibrerar. När du blåser i en flöjt, eller blåser över öppningen på en flaska, sätts luften inuti i svängning. När det blixtrar hettas luften runt blixten upp så snabbt att den utvidgas med en kraftig stöt, och den stöten hör vi som åskans knall och muller.' },
        { typ: 'rubrik', text: 'Ofta går vibrationen för fort för att synas' },
        { typ: 'text', text: 'Vibrationerna är ofta så snabba och så små att vi inte ser dem. En gitarrsträng som spelar en vanlig ton svänger flera hundra gånger varje sekund, och för ögat ser den bara lite suddig ut. Men det finns sätt att se vibrationen. Lägg en linjal så att halva sticker ut över kanten på ett bord, håll fast den andra halvan och knäpp till den fria änden. Linjalen svänger upp och ned och kan ge ifrån sig ett surrande ljud. Gör du den fria delen kortare svänger den snabbare och ljudet blir ljusare.' },
        // [BILD A1: linjalen över bordskanten i numrerade steg: 1 handen håller fast linjalen mot bordet, den fria änden knäpps nedåt · 2 linjalen svänger upp · 3 linjalen svänger ned igen, rörelsen upprepas många gånger varje sekund · 4 surrande ljud sprids ut i luften från den svängande änden]
        { id: 'bild-a1', typ: 'figur', namn: 'ljud', lage: 'linjal', bildtext: 'Den fria änden svänger upp och ned många gånger varje sekund, och ljudet sprids ut i luften.' },
        { typ: 'text', text: 'En stämgaffel är ett verktyg som är gjort för att vibrera. Den har två skänklar, och när man slår till dem svänger de fram och tillbaka och ger en ren ton. Sätter man en stämgaffel som låter mot vattenytan i ett glas stänker det, eftersom skänklarna fortfarande svänger.' }
      ]
    },
    {
      id: 'fortatningar', titel: 'Ljudet sprids som förtätningar och förtunningar',
      block: [
        { typ: 'rubrik', text: 'Det som vibrerar knuffar på luften' },
        { typ: 'text', text: 'Luften omkring oss består av mycket små partiklar, *molekyler|molekyl*, som hela tiden rör sig åt alla håll. Tänk dig membranet i en högtalare. När membranet rör sig framåt knuffar det till molekylerna framför sig. De pressas ihop, och luften blir lite tätare där. Ett sådant område kallas en *förtätning*.' },
        { typ: 'text', text: 'När membranet sedan rör sig bakåt blir det ett område där molekylerna ligger glesare än vanligt. Det kallas en *förtunning*. Membranet svänger hela tiden fram och tillbaka, så det bildas förtätningar och förtunningar om och om igen. Förtätningarna och förtunningarna sprids bort från högtalaren. Tillsammans bildar de en *ljudvåg*.' },
        { typ: 'text', text: 'Från de flesta ljudkällor sprids ljudvågen åt alla håll samtidigt. Tänk på ringarna som sprids när en sten faller i vatten, men i alla riktningar, som ett klot som växer. Därför hör alla i ett klassrum den som pratar, även de som sitter bakom.' },
        // [BILD A2: högtalarmembran i numrerade steg, partikelmodell med prickar: 1 membranet rör sig framåt och trycker ihop luften framför sig – förtätning · 2 membranet rör sig bakåt – bakom förtätningen blir det glest, förtunning · 3 membranet rör sig framåt igen – en ny förtätning bildas · 4 förtätningar och förtunningar vandrar bort från högtalaren åt höger (bara en riktning i bilden). OBS: membranet svänger fram och tillbaka på samma ställe; förtätningarna flyttar sig åt höger; samma prickar följer INTE med vågen bort – prickarna ligger kvar i stort sett på samma ställe, bara tätare och glesare]
        { id: 'bild-a2', typ: 'figur', namn: 'ljud', lage: 'membran-hoger', bildtext: 'Förtätningarna vandrar åt höger, men prickarna ligger kvar på ungefär samma ställen.' },
        { typ: 'rubrik', text: 'En gitarrsträng och dina stämband gör likadant' },
        { typ: 'text', text: 'Hos högtalaren är det lättast att se vad som händer, men alla ljudkällor fungerar på samma sätt. När en gitarrsträng rör sig åt ena hållet trycker den ihop luften på den sidan, och på andra sidan blir det glesare. När dina stämband vibrerar sätter de luften i halsen och munnen i svängning, och förtätningar och förtunningar strömmar ut ur munnen när du pratar.' }
      ]
    },
    {
      id: 'energin-gar-vidare', titel: 'Luften stannar, energin går vidare',
      block: [
        { typ: 'rubrik', text: 'Luften svänger, men följer inte med ljudet' },
        { typ: 'text', text: 'Många tror att ljudet är luft som flyger från ljudkällan hela vägen till örat. Så är det inte. Om det vore så skulle det blåsa ur högtalaren varje gång musiken spelar. Luftens molekyler rör sig visserligen hela tiden, snabbt och oordnat åt alla håll. Men när en ljudvåg passerar får luften dessutom en liten, ordnad rörelse fram och tillbaka. Luften på ett ställe knuffar till luften intill och svänger sedan tillbaka. Ljudvågen transporterar alltså inte luften från högtalaren till örat. Luften svänger fram och tillbaka, medan vågen går vidare.' },
        { typ: 'text', text: 'Du kan jämföra med en lång spiralfjäder som ligger på ett bord. Om du ger ena änden en snabb knuff framåt och sedan drar tillbaka, ser du en förtätning vandra längs fjädern ända till andra änden. Men varje varv i fjädern rör sig bara lite fram och tillbaka. Fjädern som helhet ligger kvar.' },
        // [BILD A3: spiralfjäder på ett bord i numrerade steg: 1 handen knuffar ena änden framåt – varven trycks ihop · 2 förtätningen vandrar längs fjädern · 3 förtätningen når andra änden; ett rödmarkerat varv i mitten har bara rört sig lite fram och tillbaka och är tillbaka på sin plats]
        { id: 'bild-a3', typ: 'figur', namn: 'ljud', lage: 'fjader', bildtext: 'Förtätningen vandrar längs fjädern, men det röda varvet är tillbaka på sin plats.' },
        { typ: 'rubrik', text: 'Ljudet för med sig energi' },
        { typ: 'text', text: 'Det som färdas med ljudvågen är *energi*. Ljudkällan sätter luften i svängning, och när förtätningar och förtunningar sprids förs energin vidare från ett område i luften till nästa. Ljud är alltså vibrationer som sprids som en våg och för med sig energi. Att ljud verkligen har energi märks när ljudet är starkt. Står du nära en stor högtalare på en konsert kan du känna basen i bröstet, och en kraftig smäll kan få fönsterrutor att skallra. Det är ljudvågens energi som sätter rutan i rörelse. När ljudvågen når ditt öra får den trumhinnan att vibrera, och så börjar hörseln, något du läser mer om i texten om örat.' }
      ]
    },
    {
      id: 'ljud-behover-amne', titel: 'Ljud behöver ett ämne',
      block: [
        { typ: 'rubrik', text: 'Ljud kan färdas genom gaser, vätskor och fasta ämnen' },
        { typ: 'text', text: 'Eftersom ljudet sprids genom att partiklar knuffar på varandra måste det finnas partiklar där ljudet ska fram. Det behöver inte vara luft. Ljud kan färdas genom alla ämnen: gaser som luft, vätskor som vatten och fasta ämnen som trä, betong och metall. Lägger du örat mot en bordsskiva medan någon knackar lätt i andra änden hör du knackningarna tydligt genom träet. Dyker du ned i en simbassäng kan du höra när någon slår två stenar mot varandra under vattnet. Valar och delfiner pratar med varandra genom havet.' },
        { typ: 'rubrik', text: 'I vakuum finns inget som kan föra ljudet vidare' },
        { typ: 'text', text: 'Ett utrymme där det inte finns några partiklar alls kallas *vakuum*. Där finns inget som kan knuffa vidare en vibration, och därför kan ljud inte färdas genom vakuum. Det kan man visa med ett försök. Man ställer en ringande väckarklocka under en glasklocka och pumpar ut luften. Ju mindre luft som finns kvar, desto svagare hörs ringningen, trots att man ser att klockan fortfarande ringer. Släpper man in luften igen kommer ljudet tillbaka.' },
        // [BILD A4: vakuumförsöket i numrerade steg: 1 en ringande väckarklocka under en glasklocka med luft – ljudvågor når örat · 2 en pump suger ut luften – ljudet blir svagare, klockan ringer fortfarande · 3 nästan ingen luft kvar – nästan inget ljud hörs · 4 luften släpps in igen – ljudet kommer tillbaka. Klockan hänger i en tråd eller står på mjukt underlag så att vibrationerna inte leds ut genom bordet]
        { id: 'bild-a4', typ: 'figur', namn: 'ljud', lage: 'vakuum', bildtext: 'Utan luft finns inget som kan föra ljudet vidare till örat.' },
        { typ: 'rubrik', text: 'Därför är det tyst i rymden' },
        { typ: 'text', text: 'Mellan planeterna och stjärnorna finns nästan inga partiklar alls. Rymden är nästan ett vakuum, och därför kan ljud inte färdas där. Många tror att man skulle höra en explosion i rymden, eftersom det smäller och dånar i science fiction-filmer. Men en explosion ute i rymden kan inte höras på avstånd, eftersom det inte finns något ämne i det nästan tomma rummet som kan föra ljudvågorna vidare. Astronauter som arbetar utanför rymdstationen kan inte prata med varandra genom tomrummet, hur nära varandra de än är. Inuti hjälmen finns luft, och ljudet går via radio. På månen finns ingen luft, så även när en meteorit slår ned är det tyst. Ljus kan däremot färdas genom vakuum. Därför ser vi solen och stjärnorna, men hör dem aldrig.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Allt ljud börjar med något som vibrerar, alltså svänger fram och tillbaka: stämband, strängar, trumskinn, högtalarmembran.',
          'Det som vibrerar knuffar på luften. Det bildas förtätningar, där luften är tätare, och förtunningar, där den är glesare. De sprids åt alla håll som en ljudvåg.',
          'Luften följer inte med ljudet. Den svänger bara lite fram och tillbaka. Det är vågen som färdas vidare, och den för med sig energi.',
          'Ljud kan färdas genom gaser, vätskor och fasta ämnen, men inte genom vakuum. Därför är det tyst i rymden.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
