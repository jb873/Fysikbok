/* Avsnittssida I. Vad ljud är, text A: Ljud är vibrationer – nivån enkel (📗).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-A-Ljud-ar-vibrationer-alla-nivaer-v5.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ia.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljud finns omkring dig hela tiden' },
        { typ: 'text', text: 'Var tyst en stund och lyssna. Kanske hör du någon som pratar, en fläkt som surrar, en bil som kör förbi eller musik från någons hörlurar. Det finns ljud omkring oss nästan hela tiden. Därför tänker vi sällan på vad ljud egentligen är.' },
        { typ: 'text', text: 'Men alla ljud, från en tyst viskning till en hög åskknall, börjar på samma sätt. Och de tar sig fram till ditt öra på samma sätt. I den här texten får du veta hur det går till, steg för steg.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att allt ljud börjar med något som *vibrerar|vibrera*',
          'hur ljudet tar sig fram genom luften som *förtätningar|förtätning* och *förtunningar|förtunning*',
          'att ljudvågen för med sig energi, men inte luft',
          'varför ljud behöver något att färdas i, och varför det är tyst i rymden'
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
        { typ: 'rubrik', text: 'Något som svänger fram och tillbaka vibrerar' },
        { typ: 'text', text: 'Prova det här. Lägg fingrarna mot halsen och säg ett långt "aaaaa". Känner du att det skakar under fingrarna? Det är dina stämband. De sitter inne i halsen och svänger fram och tillbaka väldigt snabbt när du pratar.' },
        { typ: 'text', text: 'När något svänger fram och tillbaka på det sättet säger man att det *vibrerar|vibrera*. Rörelsen kallas en *vibration*.' },
        { typ: 'text', text: 'Allt ljud börjar med en vibration. När du knäpper på en gitarrsträng vibrerar strängen. När du slår på en trumma vibrerar trumskinnet. Inuti en högtalare finns en tunn skiva som kallas membran. Membranet vibrerar i takt med musiken.' },
        { typ: 'text', text: 'Även ljud som inte är trevliga börjar så. En borrmaskin, en tvättmaskin och en motor låter för att något i dem vibrerar. Fin musik och störande oväsen börjar alltså på precis samma sätt.' },
        { typ: 'text', text: 'Ibland är det luften själv som vibrerar. Om du blåser över öppningen på en tom flaska hör du en ton. Då är det luften inuti flaskan som svänger. När det blixtrar blir luften runt blixten väldigt varm på ett ögonblick. Luften utvidgas med en kraftig stöt. Den stöten hör vi som åskans knall.' },
        { typ: 'rubrik', text: 'Ofta går det för fort för att du ska se det' },
        { typ: 'text', text: 'Vibrationerna är ofta så små och så snabba att du inte kan se dem. En gitarrsträng som spelar en vanlig ton svänger flera hundra gånger varje sekund. Ögat hinner inte se det. Strängen ser bara lite suddig ut.' },
        { typ: 'text', text: 'Men du kan se en vibration om den är lite långsammare. Ta en linjal och lägg den på ett bord så att halva linjalen sticker ut över kanten. Håll fast den del som ligger på bordet. Knäpp sedan till den del som sticker ut. Så här händer det:' },
        { typ: 'punkter', punkter: [
          'Linjalens ände åker ned.',
          'Sedan svänger den upp.',
          'Sedan ned igen. Den svänger upp och ned många gånger varje sekund.',
          'Ofta hör du ett surrande ljud.'
        ] },
        // [BILD A1: linjalen över bordskanten i numrerade steg: 1 handen håller fast linjalen mot bordet, den fria änden knäpps nedåt · 2 linjalen svänger upp · 3 linjalen svänger ned igen, rörelsen upprepas många gånger varje sekund · 4 surrande ljud sprids ut i luften från den svängande änden]
        { id: 'bild-a1', typ: 'figur', namn: 'ljud', lage: 'linjal', bildtext: 'Den fria änden svänger upp och ned många gånger varje sekund, och ljudet sprids ut i luften.' },
        { typ: 'text', text: 'Prova att skjuta in linjalen så att en mindre bit sticker ut. Då svänger den snabbare, och ljudet blir ljusare.' },
        { typ: 'text', text: 'En stämgaffel är ett verktyg som är gjort för att vibrera. Den ser ut som en gaffel med två långa pinnar, som kallas skänklar. När du slår till skänklarna börjar de svänga och ger en ren ton. Om du sätter en stämgaffel som låter ned i ett glas vatten, stänker det. Det visar att skänklarna fortfarande svänger, fast du inte ser det.' }
      ]
    },
    {
      id: 'fortatningar', titel: 'Ljudet sprids som förtätningar och förtunningar',
      block: [
        { typ: 'rubrik', text: 'Det som vibrerar knuffar på luften' },
        { typ: 'text', text: 'Luften ser tom ut, men den är full av mycket små partiklar som kallas *molekyler|molekyl*. De är så små att man inte kan se dem, inte ens i mikroskop.' },
        { typ: 'text', text: 'Tänk dig nu membranet i en högtalare. Så här blir det ljud, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Membranet rör sig framåt. Det knuffar till molekylerna framför sig. Molekylerna trycks ihop, och luften blir tätare där. Ett sådant område kallas en *förtätning*.',
          'Membranet rör sig bakåt. Bakom förtätningen blir det glesare med molekyler. Ett sådant område kallas en *förtunning*.',
          'Membranet rör sig framåt igen. En ny förtätning bildas.',
          'Membranet fortsätter att svänga fram och tillbaka. Förtätningarna och förtunningarna vandrar bort från högtalaren åt alla håll.'
        ] },
        { typ: 'text', text: 'Förtätningarna och förtunningarna som vandrar iväg kallas tillsammans en *ljudvåg*.' },
        { typ: 'text', text: 'Från de flesta ljudkällor sprids ljudvågen åt alla håll på samma gång. Du har säkert sett ringarna som sprids när man kastar en sten i vatten. Ljudet sprids på liknande sätt, fast i alla riktningar: uppåt, nedåt, framåt och bakåt. Därför hör alla i klassrummet den som pratar, även de som sitter bakom.' },
        // [BILD A2: högtalarmembran i numrerade steg, partikelmodell med prickar: 1 membranet rör sig framåt och trycker ihop luften framför sig – förtätning · 2 membranet rör sig bakåt – bakom förtätningen blir det glest, förtunning · 3 membranet rör sig framåt igen – en ny förtätning bildas · 4 förtätningar och förtunningar vandrar bort från högtalaren åt höger (bara en riktning i bilden). OBS: membranet svänger fram och tillbaka på samma ställe; förtätningarna flyttar sig åt höger; samma prickar följer INTE med vågen bort – prickarna ligger kvar i stort sett på samma ställe, bara tätare och glesare]
        { id: 'bild-a2', typ: 'figur', namn: 'ljud', lage: 'membran-hoger', bildtext: 'Förtätningarna vandrar åt höger, men prickarna ligger kvar på ungefär samma ställen.' },
        { typ: 'rubrik', text: 'Alla ljudkällor gör likadant' },
        { typ: 'text', text: 'I en högtalare är det lättast att förstå vad som händer. Men alla saker som låter fungerar på samma sätt. En gitarrsträng trycker ihop luften på den sida som den rör sig mot. På andra sidan blir det glesare. Dina stämband sätter luften i halsen och munnen i rörelse. När du pratar strömmar förtätningar och förtunningar ut ur din mun.' }
      ]
    },
    {
      id: 'energin-gar-vidare', titel: 'Luften stannar, energin går vidare',
      block: [
        { typ: 'rubrik', text: 'Luften svänger, men följer inte med ljudet' },
        { typ: 'text', text: 'Många tror att ljudet är luft som flyger från högtalaren hela vägen till örat. Men så är det inte. Tänk efter: om musiken var luft som flög ut ur högtalaren, då skulle det blåsa hela tiden när någon spelar musik. Det gör det inte.' },
        { typ: 'text', text: 'I stället händer det här. Luftens molekyler flyger hela tiden omkring åt alla möjliga håll. Det har de alltid gjort, även när det är tyst. När ett ljud kommer får luften en liten extra rörelse. Den knuffas lite framåt och svänger sedan tillbaka. Luften svänger alltså bara lite fram och tillbaka när ljudet passerar. Ljudet bär inte med sig luften från högtalaren till ditt öra. Det är vågen som går vidare, inte luften.' },
        { typ: 'text', text: 'Du kan se hur det fungerar med en lång spiralfjäder. Lägg den på ett bord. Ge ena änden en snabb knuff framåt och dra sedan tillbaka handen. Så här händer det:' },
        { typ: 'punkter', punkter: [
          'Varven närmast handen trycks ihop.',
          'Den hoptryckta delen vandrar längs fjädern.',
          'Den hoptryckta delen når andra änden.'
        ] },
        { typ: 'text', text: 'Om du har satt en färgad lapp på ett av varven i mitten ser du att lappen bara rör sig en liten bit fram och tillbaka. Sedan är den tillbaka där den var. Fjädern ligger kvar på bordet. Det var bara knuffen som vandrade.' },
        // [BILD A3: spiralfjäder på ett bord i numrerade steg: 1 handen knuffar ena änden framåt – varven trycks ihop · 2 förtätningen vandrar längs fjädern · 3 förtätningen når andra änden; ett rödmarkerat varv i mitten har bara rört sig lite fram och tillbaka och är tillbaka på sin plats]
        { id: 'bild-a3', typ: 'figur', namn: 'ljud', lage: 'fjader', bildtext: 'Förtätningen vandrar längs fjädern, men det röda varvet är tillbaka på sin plats.' },
        { typ: 'rubrik', text: 'Det är energi som färdas med ljudet' },
        { typ: 'text', text: 'Vad är det då som färdas med ljudvågen? Det är *energi*. Ljudkällan sätter luften i svängning. När förtätningarna och förtunningarna vandrar iväg, följer energin med dem från ett ställe i luften till nästa, hela vägen till ditt öra.' },
        { typ: 'text', text: 'Du kan märka att ljud har energi när ljudet är starkt. Om du står nära en stor högtalare på en konsert kan du känna basen i bröstet. En kraftig smäll kan få fönsterrutor att skallra. Det är ljudvågens energi som får rutan att röra sig.' },
        { typ: 'text', text: 'När ljudvågen når ditt öra får den trumhinnan i örat att vibrera. Då börjar du höra. Om örat får du läsa mer i en annan text.' }
      ]
    },
    {
      id: 'ljud-behover-amne', titel: 'Ljud behöver ett ämne',
      block: [
        { typ: 'rubrik', text: 'Ljud kan gå genom luft, vatten och fasta saker' },
        { typ: 'text', text: 'Ljudet tar sig fram genom att partiklar knuffar på varandra. Därför måste det finnas partiklar där ljudet ska fram. Men det behöver inte vara luft.' },
        { typ: 'text', text: 'Ljud kan gå genom alla ämnen. Det kan gå genom gaser, som luft. Det kan gå genom vätskor, som vatten. Och det kan gå genom fasta ämnen, som trä, betong och metall.' },
        { typ: 'text', text: 'Du kan prova själv. Lägg örat mot en bordsskiva. Be en kompis knacka lätt i andra änden av bordet. Du hör knackningarna tydligt, eftersom ljudet går genom träet.' },
        { typ: 'text', text: 'Om du dyker ned i en simbassäng kan du höra när någon slår två stenar mot varandra under vattnet. Valar och delfiner pratar med varandra med ljud som går genom havet.' },
        { typ: 'rubrik', text: 'I vakuum kan ljud inte färdas' },
        { typ: 'text', text: 'Ett utrymme där det inte finns några partiklar alls kallas *vakuum*. I vakuum finns ingenting som kan knuffa vidare ljudet. Därför kan ljud inte färdas genom vakuum.' },
        { typ: 'text', text: 'Det kan man visa med ett försök. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Man ställer en väckarklocka som ringer under en glasklocka. Man hör ringningen.',
          'Med en pump suger man ut luften ur glasklockan. Ringningen hörs svagare och svagare. Men man ser att klockan fortfarande ringer.',
          'När nästan all luft är borta hör man nästan ingenting.',
          'Man släpper in luften igen. Då kommer ljudet tillbaka.'
        ] },
        // [BILD A4: vakuumförsöket i numrerade steg: 1 en ringande väckarklocka under en glasklocka med luft – ljudvågor når örat · 2 en pump suger ut luften – ljudet blir svagare, klockan ringer fortfarande · 3 nästan ingen luft kvar – nästan inget ljud hörs · 4 luften släpps in igen – ljudet kommer tillbaka. Klockan hänger i en tråd eller står på mjukt underlag så att vibrationerna inte leds ut genom bordet]
        { id: 'bild-a4', typ: 'figur', namn: 'ljud', lage: 'vakuum', bildtext: 'Utan luft finns inget som kan föra ljudet vidare till örat.' },
        { typ: 'rubrik', text: 'Därför är det tyst i rymden' },
        { typ: 'text', text: 'Ute i rymden, mellan planeter och stjärnor, finns det nästan inga partiklar. Rymden är nästan ett vakuum. Därför kan ljud inte färdas där.' },
        { typ: 'text', text: 'Många tror att det smäller och dånar när något exploderar i rymden. Det gör det ofta i filmer. Men i verkligheten kan man inte höra en explosion i rymden på avstånd. Det finns inget ämne där som kan föra ljudet vidare.' },
        { typ: 'text', text: 'Två astronauter som arbetar utanför rymdstationen kan inte prata med varandra genom rymden. Det spelar ingen roll hur nära varandra de är. Inuti hjälmen finns det luft, men mellan hjälmarna finns ingen. Därför pratar de via radio. På månen finns ingen luft heller. Även när en sten från rymden slår ned på månen är det tyst.' },
        { typ: 'text', text: 'Ljus kan däremot gå genom vakuum. Därför kan vi se solen och stjärnorna, men vi kan aldrig höra dem.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Allt ljud börjar med något som vibrerar. Det betyder att det svänger fram och tillbaka.',
          'Stämband, gitarrsträngar, trumskinn och högtalarmembran är exempel på saker som vibrerar och gör ljud.',
          'Det som vibrerar knuffar på luften. Då bildas förtätningar, där luften är tät, och förtunningar, där den är gles.',
          'Förtätningarna och förtunningarna vandrar iväg åt alla håll. Det kallas en ljudvåg.',
          'Luften följer inte med ljudet. Den svänger bara lite fram och tillbaka. Det är vågen som går vidare, och den har med sig energi.',
          'Ljud kan gå genom gaser, vätskor och fasta ämnen.',
          'Ljud kan inte gå genom vakuum. Därför är det tyst i rymden.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
