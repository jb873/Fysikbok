/* Avsnittssida VI. Repetition: ljud och ljus, text A: Ljud – nivån enkel (📗).
 * Arbetsorder 30 (2026-11-20): kallor/kap3/VI-A-Repetition-Ljud-alla-nivaer-v3.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text via: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-via.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Repetition: ljud' },
        { typ: 'text', text: 'Ljud finns omkring dig hela tiden: röster, musik, trafik, fåglar. Du har redan lärt dig om ljud. I den här repetitionen går vi igenom det viktigaste en gång till, steg för steg. Det är bra att kunna inför provet.' },
        { typ: 'underrubrik', text: 'Det här repeterar du' },
        { typ: 'punkter', punkter: [
          'vad ljud är',
          'vad *frekvens*, *amplitud* och *våglängd* betyder',
          'vad som gör att ett ljud låter ljust eller mörkt, starkt eller svagt',
          'hur fort ljudet går',
          'vad eko och buller är',
          'vad *ultraljud* och *infraljud* är',
          'vad *dopplereffekten* är',
          'hur örat fungerar, och hur hörseln kan skadas'
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
        { typ: 'rubrik', text: 'Ljud börjar med något som svänger' },
        { typ: 'text', text: 'Lägg handen mot halsen och säg "aaa". Du känner att det skakar. Det är dina stämband som svänger fram och tillbaka. Allt ljud börjar så, med något som svänger, eller vibrerar.' },
        { typ: 'text', text: 'Fler exempel:' },
        { typ: 'punkter', punkter: [
          'En gitarrsträng svänger när du knäpper på den.',
          'En trumma svänger när du slår på den.',
          'En högtalare har en tunn skiva som svänger när musiken spelas.'
        ] },
        { typ: 'rubrik', text: 'Ljudet sprids genom luften' },
        { typ: 'text', text: 'Tänk dig en högtalare som spelar. Den tunna skivan i högtalaren kallas membran. Så här blir det ljud, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Membranet rör sig framåt. Det trycker ihop luften framför sig. Där ligger luftmolekylerna tätare. Det kallas en *förtätning*.',
          'Membranet rör sig bakåt. Där blir det glesare med molekyler. Det kallas en *förtunning*.',
          'Membranet svänger fram och tillbaka hela tiden. Därför blir det förtätningar och förtunningar om och om igen.',
          'Förtätningarna och förtunningarna sprids ut åt alla håll. Det är en *ljudvåg*.'
        ] },
        // [BILD A1: numrerade steg 1–5 ("börja här"), partikelmodell: 1 högtalarens membran rör sig framåt och trycker ihop luften framför sig – förtätning · 2 membranet rör sig bakåt – bakom förtätningen blir det glest, förtunning · 3 membranet rör sig framåt igen – ny förtätning · 4 förtätningar och förtunningar vandrar bort från högtalaren · 5 en markerad molekyl svänger bara lite fram och tillbaka på sin plats]
        { id: 'bild-a1', typ: 'figur', namn: 'ljud', lage: 'membran', bildtext: 'Förtätningarna vandrar bort, men varje molekyl svänger bara på sin plats.' },
        { typ: 'text', text: 'Luften flyttar inte med ljudet. Varje molekyl knuffar bara på molekylen bredvid och åker lite fram och tillbaka. Det är knuffen som går vidare. Det är som när du knuffar till ena änden av en lång spiralfjäder. Varje varv rör sig bara lite fram och tillbaka, men knuffen går hela vägen till andra änden.' },
        { typ: 'rubrik', text: 'Ljud kan inte gå genom vakuum' },
        { typ: 'text', text: 'Ljudet sprids genom att molekyler knuffar på varandra. Då måste det finnas molekyler. Ljud kan gå genom luft, genom vatten och genom fasta saker som trä och metall.' },
        { typ: 'text', text: 'Men ute i rymden finns det nästan inga molekyler alls. Det kallas vakuum. Där finns inget som kan knuffa vidare ljudet. Därför kan ljud inte färdas genom rymden. Två astronauter kan inte höra varandra, hur högt de än skriker. De måste prata med radio.' }
      ]
    },
    {
      id: 'ljudvagen', titel: 'Ljudvågen',
      block: [
        { typ: 'rubrik', text: 'Man kan rita ljudvågen på två sätt' },
        { typ: 'text', text: 'Ljudvågor syns inte, men man kan rita dem. Det finns två sätt:' },
        { typ: 'punkter', punkter: [
          'I partikelmodellen ritar man molekylerna som prickar. Där det är förtätningar ligger prickarna tätt. Där det är förtunningar ligger de glest.',
          'I vågmodellen ritar man en böljande linje, som en våg på vattnet. Förtätningarna blir *vågtoppar* och förtunningarna blir *vågdalar*. Linjen visar trycket i luften: högt i förtätningarna och lågt i förtunningarna. Luften åker inte upp och ned.'
        ] },
        { typ: 'text', text: 'Båda bilderna visar samma ljud.' },
        // [BILD A2: samma ljudvåg i partikelmodellen (prickar) och i vågmodellen (böljande linje) ovanför varandra; vågtopp, vågdal och våglängd utmärkta; vågmodellens lodräta axel märkt "tryck", vågtopp = högre tryck (förtätning), vågdal = lägre tryck (förtunning)]
        { id: 'bild-a2', typ: 'figur', namn: 'ljud', lage: 'modeller', bildtext: 'Vågtopparna står där luften är tätast och trycket högst.' },
        { typ: 'rubrik', text: 'Tre ord som beskriver ljudvågen' },
        { typ: 'punkter', punkter: [
          '*Våglängd|våglängd* är avståndet från en vågtopp till nästa vågtopp.',
          '*Frekvens|frekvens* är hur många gånger ljudkällan svänger varje sekund. Frekvens mäts i *hertz|hertz*. Det skrivs Hz. 1 Hz betyder att något svänger en gång varje sekund. 100 Hz betyder 100 gånger varje sekund.',
          '*Amplitud|amplitud* är hur stora svängningarna är, alltså hur höga vågtopparna är.'
        ] },
        { typ: 'text', text: 'Frekvensen och våglängden hänger ihop. Om frekvensen är hög kommer vågtopparna tätt. Då blir våglängden kort. Om frekvensen är låg kommer vågtopparna glest. Då blir våglängden lång.' }
      ]
    },
    {
      id: 'toner', titel: 'Toner och ljudstyrka',
      block: [
        { typ: 'rubrik', text: 'Frekvensen gör att ljudet låter ljust eller mörkt' },
        { typ: 'text', text: 'Ett ljud med hög frekvens låter ljust. Tänk på en fågel som kvittrar eller en flöjt. Ett ljud med låg frekvens låter mörkt. Tänk på en bas eller en mistlur på en båt.' },
        { typ: 'text', text: 'Människan kan höra ljud från ungefär 20 Hz till ungefär 20 000 Hz. När man blir äldre blir det svårare att höra de allra ljusaste ljuden.' },
        { typ: 'text', text: 'En stämgaffel ger en ren ton. Den har bara en frekvens. De flesta ljud, som röster och musik, har många frekvenser på samma gång. Om väldigt många frekvenser blandas utan att det finns någon tydlig ton kallas ljudet *brus*. Tänk på suset från en dusch eller ett vattenfall.' },
        { typ: 'rubrik', text: 'Amplituden gör att ljudet låter starkt eller svagt' },
        { typ: 'text', text: 'Knäpp hårt på en gitarrsträng. Den svänger mycket, och ljudet blir starkt. Amplituden är stor. Vänta en stund. Strängen svänger mindre och mindre, och ljudet blir svagare. Till slut tystnar det.' },
        { typ: 'text', text: 'Lägg märke till en sak: tonen ändras inte. Strängen svänger lika många gånger per sekund hela tiden, så frekvensen är densamma. Det är bara amplituden som blir mindre.' },
        // [BILD A5: fyra ljud jämförda i båda modellerna, prickar och våglinje bredvid varandra: ljust ljud (tätt mellan vågtopparna, hög frekvens), mörkt ljud (glest, låg frekvens), starkt ljud (höga vågtoppar, stor amplitud, prickarna mycket täta i förtätningarna men samma avstånd mellan förtätningarna som i det svaga ljudet), svagt ljud (låga vågtoppar, liten amplitud, liten skillnad mellan förtätning och förtunning); jämförelserna åtskilda: överst tonhöjd (frekvens), nederst ljudstyrka (amplitud)]
        { id: 'bild-a5', typ: 'figur', namn: 'ljud', lage: 'jamforelse', bildtext: 'Överst skiljer frekvensen, underst bara amplituden.' },
        { typ: 'rubrik', text: 'Ljudstyrka mäts i decibel' },
        { typ: 'text', text: 'Hur starkt ett ljud är mäts i *decibel|decibel*. Det skrivs dB.' },
        { typ: 'text', text: 'Här är några exempel:' },
        { typ: 'punkter', punkter: [
          '0 dB är ungefär det svagaste ljud som en ung person med god hörsel kan höra.',
          'En viskning är ungefär 30 dB.',
          'Ett vanligt samtal är ungefär 60 dB.',
          'Tät trafik är ungefär 80 dB.',
          'En jetmotor nära är ungefär 130 dB.'
        ] },
        { typ: 'text', text: 'En tumregel: om ljudet blir 10 dB starkare upplever vi att det blir ungefär dubbelt så starkt.' },
        { typ: 'rubrik', text: 'Ljudet blir svagare längre bort' },
        { typ: 'text', text: 'Ljudet sprids ut åt alla håll, som ringar på vattnet fast i alla riktningar. Ju längre bort du kommer, desto större yta har ljudet spridits över. Därför blir ljudet svagare ju längre bort du är.' },
        { typ: 'rubrik', text: 'En resonanslåda gör ljudet starkare' },
        { typ: 'text', text: 'Tänk på en gunga. Om du knuffar i precis rätt takt blir gungningarna större och större. Det kallas *resonans*. Allt som kan svänga har en takt som det helst svänger i. Får det knuffar i den takten börjar det svänga kraftigt.' },
        { typ: 'text', text: 'En gitarrsträng som sitter ensam låter svagt. Strängen är så smal att den bara får lite luft att svänga. I en akustisk gitarr sitter strängarna på en ihålig trälåda. När strängen svänger börjar lådan också svänga, och luften inuti lådan också. Lådan är stor, så den får mycket mer luft att svänga. Då blir ljudvågorna kraftigare, och ljudet blir mycket starkare. Lådan kallas resonanslåda.' },
        { typ: 'text', text: 'Fioler, trummor och pianon har också resonanslådor. En elgitarr har ingen resonanslåda. Därför låter den mycket svagt om man inte kopplar in den i en förstärkare.' },
        // [BILD A6: akustisk gitarr i numrerade steg: 1 strängen knäpps · 2 strängen ensam ger svaga ljudvågor · 3 svängningarna förs till lådan som också svänger · 4 lådan och luften i den sätter mer luft i svängning – starkare ljudvågor med större amplitud (samma avstånd mellan förtätningarna, samma ton)]
        { id: 'bild-a6', typ: 'figur', namn: 'ljud', lage: 'resonans', bildtext: 'Lådan ger större amplitud men samma våglängd, alltså samma ton.' }
      ]
    },
    {
      id: 'hastighet', titel: 'Ljudets hastighet',
      block: [
        { typ: 'rubrik', text: 'Ljudet går ungefär 340 meter per sekund i luft' },
        { typ: 'text', text: 'Ljudet färdas ungefär 340 meter varje sekund i luft. Det är snabbt, men ljuset är nästan en miljon gånger snabbare. I varm luft går ljudet lite fortare än i kall luft.' },
        { typ: 'text', text: 'Det märks när det åskar. Blixten och mullret uppstår samtidigt. Men du ser blixten först, eftersom ljuset kommer fram nästan direkt. Mullret kommer efter, eftersom ljudet är långsammare.' },
        { typ: 'text', text: 'Så kan du räkna ut hur långt bort åskan är:' },
        { typ: 'punkter', punkter: [
          'Räkna sekunderna från blixten till mullret.',
          'Ljudet går ungefär 1 kilometer på 3 sekunder.',
          'Dela antalet sekunder med 3. Då får du ungefär hur många kilometer bort åskan är.'
        ] },
        { typ: 'rubrik', text: 'Ljudet går fortare i vatten och metall' },
        { typ: 'text', text: 'I vatten går ljudet ungefär 1 500 meter per sekund. I stål går det ungefär 5 000 meter per sekund. Ljudet går fortare där partiklarna sitter hårt ihop, för då kan de snabbare knuffa vidare ljudet. Därför kan man höra ett tåg i rälsen innan man hör det i luften.' },
        { typ: 'rubrik', text: 'Räkna sträcka med hastighet och tid' },
        { typ: 'text', text: 'Om du vet hur fort ljudet går och hur länge det har gått, kan du räkna ut hur långt det har gått.' },
        { typ: 'formel', uttryck: 's = v · t', forklaring: 's sträckan (m), v hastigheten (m/s), t tiden (s)' },
        { typ: 'exempel', rubrik: 'Åskan', stycken: [
          ['Du ser en blixt. 6 sekunder senare hör du mullret. Hur långt bort är åskvädret?'],
          ['Givet: Ljudets hastighet är v = 340 m/s. Tiden är t = 6 s. Sökt: sträckan s.'],
          ['Lösning: Multiplicera hastigheten med tiden.',
           's = v · t = 340 m/s · 6 s = 2 040 m',
           'Svar: Åskvädret är ungefär 2 km bort.']
        ] }
      ]
    },
    {
      id: 'eko-och-buller', titel: 'Eko och buller',
      block: [
        { typ: 'rubrik', text: 'Eko är ljud som studsar tillbaka' },
        { typ: 'text', text: 'Har du ropat i en tunnel eller mot en bergvägg? Då har du hört ditt rop komma tillbaka. Det är ett *eko*. Ljudvågorna studsar mot den hårda väggen och kommer tillbaka. Man säger att ljudet reflekteras.' },
        { typ: 'text', text: 'Mjuka saker fungerar tvärtom. Tyg, mattor och mjuka plattor tar upp ljudet i stället för att låta det studsa. Man säger att de absorberar ljudet. Därför har många klassrum mjuka plattor i taket. Då ekar det mindre, och det blir lättare att höra vad som sägs.' },
        { typ: 'rubrik', text: 'Ett ekolod mäter avstånd med eko' },
        { typ: 'text', text: 'Fiskebåtar har ofta ett *ekolod*. Det fungerar så här:' },
        { typ: 'punkter', punkter: [
          'Ekolodet skickar ned ett ljud i vattnet och startar en klocka.',
          'Ljudet går ned, träffar botten eller ett fiskstim och studsar tillbaka.',
          'Ekolodet hör ekot och stoppar klockan.',
          'Ekolodet räknar ut avståndet.'
        ] },
        // [BILD A7: ekolod i numrerade steg: 1 båten skickar ned en ljudsignal, klockan startar · 2 signalen når fiskstimmet · 3 ekot studsar tillbaka · 4 ekolodet hör ekot, klockan stoppar · 5 sträckan delas med 2]
        { id: 'bild-a7', typ: 'figur', namn: 'ljud', lage: 'ekolod', bildtext: 'Ljudet går ned och upp, så sträckan delas med 2.' },
        { typ: 'text', text: 'Kom ihåg att ljudet har gått både ned och upp. Därför måste man dela sträckan med 2.' },
        { typ: 'exempel', rubrik: 'Ekolodet', stycken: [
          ['Ett ekolod skickar ned ett ljud. Ekot från ett fiskstim kommer tillbaka efter 0,4 s. Hur djupt är fiskstimmet? Ljudet går 1 500 m/s i vatten.'],
          ['Givet: v = 1 500 m/s, t = 0,4 s. Sökt: djupet.'],
          ['Lösning: Räkna först hur långt ljudet gick, ned och upp.',
           's = v · t = 1 500 m/s · 0,4 s = 600 m',
           'Dela sedan med 2, eftersom ljudet gick både ned och upp.',
           '600 m / 2 = 300 m',
           'Svar: Fiskstimmet är 300 m ned.']
        ] },
        { typ: 'rubrik', text: 'Buller är ljud som stör' },
        { typ: 'text', text: 'Ljud som stör och som man inte vill höra kallas *buller*. Det kan vara trafik, byggmaskiner eller en granne som spelar hög musik.' },
        { typ: 'text', text: 'Starka ljud kan skada hörseln:' },
        { typ: 'punkter', punkter: [
          'Ljud över ungefär 85 dB kan skada hörseln om man lyssnar länge, till exempel med hög volym i hörlurarna.',
          'Mycket starka ljud, över ungefär 120 dB, kan skada hörseln direkt.',
          'Även buller som inte är så starkt kan göra att man blir stressad och sover sämre.'
        ] },
        { typ: 'text', text: 'Man kan stoppa buller på två sätt. Tunga material som betong och sten är svåra att få att svänga, så de släpper igenom lite ljud. I luftiga isoleringsmaterial studsar ljudet runt inuti materialet. Då blir ljudets energi till lite värme, och ljudet blir svagare. Och öronproppar och hörselskydd skyddar örat direkt.' },
        // [BILD A8: två sätt att isolera, samma ljudvåg från vänster: genom en tung vägg (betong) kommer bara en svag våg ut · i luftigt isoleringsmaterial studsar vågen runt och en del av energin blir värme – svagare våg ut]
        { id: 'bild-a8', typ: 'figur', namn: 'ljud', lage: 'isolering', bildtext: 'Två sätt att isolera: en tung vägg och ett luftigt material.' }
      ]
    },
    {
      id: 'ultraljud-och-infraljud', titel: 'Ultraljud och infraljud',
      block: [
        { typ: 'rubrik', text: 'Det finns ljud som människor inte kan höra' },
        { typ: 'text', text: 'Människan hör ljud mellan ungefär 20 Hz och 20 000 Hz. Ljud utanför det området kan vi inte höra:' },
        { typ: 'punkter', punkter: [
          'Ljud med högre frekvens än 20 000 Hz kallas *ultraljud*.',
          'Ljud med lägre frekvens än 20 Hz kallas *infraljud*.'
        ] },
        { typ: 'text', text: 'Många djur kan höra sådana ljud.' },
        { typ: 'rubrik', text: 'Ultraljud används av djur och i vården' },
        { typ: 'text', text: 'Fladdermöss skickar ut ultraljud när de flyger. Ljudet studsar mot insekter och väggar, och fladdermusen hör ekot. Så kan den hitta mat och flyga i mörker utan att krocka. Delfiner gör likadant i vattnet.' },
        { typ: 'text', text: 'Läkare använder också ultraljud. En ultraljudsmaskin skickar in ultraljud i kroppen och lyssnar på ekot från olika delar. Av ekot gör den en bild på en skärm. Så kan man till exempel titta på ett foster i mammans mage.' },
        { typ: 'rubrik', text: 'Infraljud kan färdas långt' },
        { typ: 'text', text: 'Elefanter och valar pratar med varandra med infraljud. Infraljud kan gå väldigt långt. Valar kan höra varandra på många mils avstånd. Åska och jordbävningar ger också infraljud.' }
      ]
    },
    {
      id: 'doppler', titel: 'Dopplereffekten',
      block: [
        { typ: 'rubrik', text: 'Sirenen ändrar ton när ambulansen kör förbi' },
        { typ: 'text', text: 'Har du hört en ambulans köra förbi med sirenen på? Medan den kommer mot dig låter sirenen ljusare. När den har kört förbi låter den mörkare. Det kallas *dopplereffekten*.' },
        { typ: 'text', text: 'Så här går det till:' },
        { typ: 'punkter', punkter: [
          'När ambulansen kör mot dig trycks ljudvågorna framför den ihop. Våglängden blir kortare. Fler vågor når ditt öra varje sekund. Frekvensen blir högre, och ljudet låter ljusare.',
          'När ambulansen kör ifrån dig dras ljudvågorna bakom den ut. Våglängden blir längre. Färre vågor når ditt öra varje sekund. Frekvensen blir lägre, och ljudet låter mörkare.'
        ] },
        { typ: 'text', text: 'Sirenen låter egentligen likadant hela tiden. Det är bara det du hör som ändras.' },
        // [BILD A3: ambulans i rörelse åt höger; ljudvågorna framför den tätare (kort våglängd), bakom den glesare (lång våglängd); en person på var sida]
        { id: 'bild-a3', typ: 'figur', namn: 'ljud', lage: 'doppler', bildtext: 'Framför ambulansen trycks ljudvågorna ihop, bakom den dras de ut.' },
        { typ: 'rubrik', text: 'Fortare än ljudet blir det en smäll' },
        { typ: 'text', text: 'Vissa stridsflygplan kan flyga fortare än ljudet. Då hinner ljudvågorna inte före planet. Det bildas en kraftig tryckvåg bakom planet, formad som en kon. När den når dig på marken hör du en kraftig smäll. Det kallas *ljudbang|ljudbang*. Så länge planet flyger fortare än ljudet följer tryckvågen med, så alla som planet flyger över hör smällen.' }
      ]
    },
    {
      id: 'orat', titel: 'Örat och hörseln',
      block: [
        { typ: 'rubrik', text: 'Örat gör om ljud till signaler i hjärnan' },
        { typ: 'text', text: 'Följ ljudet från luften in till hjärnan, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Ytterörat, den del du ser, fångar upp ljudvågorna. De går in i hörselgången.',
          'Längst in i hörselgången sitter *trumhinnan*. Den är tunn som ett trumskinn och börjar svänga när ljudvågorna träffar den.',
          'Trumhinnan sitter ihop med tre små *hörselben*. De heter hammaren, städet och stigbygeln. De är kroppens minsta ben, och de för svängningarna vidare.',
          'Hörselbenen för svängningarna in till *hörselsnäckan*. Den ser ut som ett snäckskal och är fylld med vätska.',
          'I hörselsnäckan finns *hårceller*. De gör om svängningarna till nervsignaler.',
          '*Hörselnerven|hörselnerv* leder signalerna till hjärnan. Hjärnan tolkar dem som ljud.'
        ] },
        // [BILD A4: örats delar i genomskärning – ytteröra, hörselgång, trumhinna, hörselben, hörselsnäcka, hörselnerv – med ljudvågorna som kommer in]
        { id: 'bild-a4', typ: 'figur', namn: 'ljud', lage: 'orat', bildtext: 'Örats delar, från ytterörat till hörselnerven.' },
        { typ: 'rubrik', text: 'Två öron hjälper dig att höra varifrån ljudet kommer' },
        { typ: 'text', text: 'Om ett ljud kommer från höger når det ditt högra öra lite före det vänstra. Det hörs också lite starkare i det högra örat. Hjärnan märker skillnaden och förstår att ljudet kommer från höger.' },
        { typ: 'rubrik', text: 'En hörselskada kan bli bestående' },
        { typ: 'text', text: 'Starka ljud kan skada hårcellerna i hörselsnäckan. Skadade hårceller växer normalt inte ut igen. Därför kan en hörselskada bli kvar för alltid.' },
        { typ: 'text', text: '*Tinnitus|tinnitus* betyder att man hör ett pip eller ett brus i öronen, fast det är tyst omkring en. Tinnitus kan ha flera orsaker. Ibland är det ett tecken på att hörseln har skadats. Skydda därför hörseln. Ha lagom volym i hörlurarna och använd hörselskydd där det är mycket buller.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljud är vibrationer. Ljudet sprids som förtätningar och förtunningar. Ljud kan inte gå genom vakuum.',
          'Våglängd är avståndet mellan två vågtoppar. Frekvens är antalet svängningar per sekund och mäts i hertz. Amplitud är hur stora svängningarna är.',
          'Hög frekvens låter ljust och låg frekvens låter mörkt. Människan hör ungefär 20–20 000 Hz.',
          'Stor amplitud låter starkt. Ljudstyrka mäts i decibel.',
          'En resonanslåda gör ljudet starkare.',
          'Ljudet går ungefär 340 m/s i luft, 1 500 m/s i vatten och 5 000 m/s i stål. Sträcka = hastighet · tid.',
          'Eko är ljud som studsar tillbaka. Ett ekolod mäter avstånd med eko.',
          'Ljud över 85 dB kan skada hörseln.',
          'Ultraljud är över 20 000 Hz och infraljud är under 20 Hz.',
          'Dopplereffekten: sirenen låter ljusare när den kommer mot dig och mörkare när den åker ifrån dig.',
          'Örat: trumhinna, hörselben, hörselsnäcka med hårceller och hörselnerv. Skadade hårceller växer normalt inte ut igen.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
