/* Matematiken i fysiken (arbetsorder 11, 2026-11-07): kallor/nasta-steg/Matematiken-i-fysiken-v2.md, införd ordagrant i
 * strömformatet av verktyg/nasta-steg-omvandlare.js. ## = avsnitt, ### = rubrik, ett stycke = ett textblock, rader i
 * följd = rader; [FORMEL], [EXEMPEL], [PROVA], [MATTE] och [ANVÄNDS I] = formel, exempel, prova och bokref (länkar
 * till den andra boken); [BILD …] står som kommentar på sin plats.
 */
Bok.niva('stodbok', {
  avsnitt: [
    {
      id: 'sa-har-anvander-du-boken', titel: 'Så här använder du boken', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Matematiken är fysikens språk' },
        { typ: 'text', text: 'I fysikboken har du lärt dig förklara saker med ord: varför en låda glider, varför en båt flyter, varför det är svårare att bromsa i hög fart. På gymnasiet gör fysiken ett steg till. Den säger inte bara att något blir större, utan hur mycket större. Då behövs matematik.' },
        { typ: 'text', text: 'Den här boken samlar den matematik som fysiken använder. Det är inte ny matematik. Det mesta har du redan mött i matematikboken: enheter, tiopotenser, formler, proportionalitet, diagram och Pythagoras sats. Här visas hur samma verktyg används när talen har enheter och betyder något verkligt.' },
        { typ: 'rubrik', text: 'Läs det avsnitt du behöver, när du behöver det' },
        { typ: 'text', text: 'Du behöver inte läsa boken från början till slut. I varje avsnitt i Nästa steg står vilken matematik du behöver. Känner du dig osäker, läs det avsnittet här först. Varje avsnitt börjar med vad du redan kan och slutar med några korta uppgifter, så att du kan pröva om du har förstått. Svaren finns i Facit längst bak.' },
        { typ: 'text', text: 'Det lönar sig att läsa avsnitt 4, om formler, ordentligt. Det används i nästan varje fysikuppgift, och det är där de flesta fel uppstår.' }
      ]
    },
    {
      id: 'enheter', titel: 'Storheter, enheter och prefix',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: 'alla avsnitt i Nästa steg' }] },
        { typ: 'rubrik', text: 'En storhet är ett mätetal gånger en enhet' },
        { typ: 'text', text: 'Allt som kan mätas i fysiken kallas en *storhet*: längd, tid, massa, kraft, hastighet. Ett värde på en storhet består alltid av två delar, ett *mätetal* och en *enhet*. I "3,5 meter" är 3,5 mätetalet och meter enheten. Mätetalet säger hur många gånger enheten ryms i det vi har mätt.' },
        { typ: 'text', text: 'Därför betyder ett tal utan enhet ingenting i fysiken. Om någon säger att en sträcka är 5 vet du inte om det är 5 millimeter eller 5 mil. Skriv alltid enheten, både i svaret och i uträkningen. Det är inte en formalitet, det är halva svaret.' },
        { typ: 'text', text: 'Varje storhet har en egen bokstav, en *storhetsbeteckning*. Sträcka skrivs s, tid t, massa m, kraft F och hastighet v. Enheten skrivs med ett eget tecken: meter m, sekund s, kilogram kg och newton N. Lägg märke till att samma bokstav kan betyda olika saker. Kursivt *m* är massan, rakt m är enheten meter. Sammanhanget avgör.' },
        { typ: 'rubrik', text: 'Fysiken bygger på några få grundenheter' },
        { typ: 'text', text: 'Forskare i hela världen använder samma enhetssystem, SI-systemet. Det bygger på sju grundenheter. I den här boken behövs tre av dem: meter för längd, sekund för tid och kilogram för massa. Alla andra enheter du möter är sammansatta av dem.' },
        { typ: 'text', text: 'Hastighet är sträcka delad med tid, så enheten blir meter per sekund, m/s. Area är längd gånger längd, så enheten blir kvadratmeter, m². Även newton är sammansatt: 1 N är den kraft som ger 1 kg accelerationen 1 m/s², så 1 N = 1 kg · m/s². Enheterna följer alltså samma räkneregler som talen. Det är det som gör att du kan använda enheterna för att kontrollera en uträkning.' },
        { typ: 'rubrik', text: 'Ett prefix är ett förkortat tal' },
        { typ: 'text', text: 'Ibland är talen mycket stora eller mycket små. Då sätter man ett *prefix* framför enheten. Ett prefix är egentligen ett tal: kilo betyder tusen, så 1 km = 1 000 m. Milli betyder en tusendel, så 1 mm = 0,001 m. De prefix som används mest i fysiken är:' },
        { typ: 'punkter', punkter: [
          'giga, G = 1 000 000 000 = 10⁹',
          'mega, M = 1 000 000 = 10⁶',
          'kilo, k = 1 000 = 10³'
        ] },
        { typ: 'punkter', punkter: [
          'hekto, h = 100 = 10²',
          'deci, d = 0,1 = 10⁻¹',
          'centi, c = 0,01 = 10⁻²'
        ] },
        { typ: 'punkter', punkter: [
          'milli, m = 0,001 = 10⁻³',
          'mikro, µ = 0,000 001 = 10⁻⁶',
          'nano, n = 0,000 000 001 = 10⁻⁹'
        ] },
        { typ: 'text', text: 'Ett knep är att alltid läsa prefixet som ett tal. 5,9 MPa betyder 5,9 · 1 000 000 Pa. 250 mN betyder 250 · 0,001 N = 0,25 N.' },
        { typ: 'rubrik', text: 'Räkna alltid i grundenheter' },
        { typ: 'text', text: 'Formlerna i fysiken fungerar bara om alla värden har samma slags enheter. Den säkraste regeln är därför: gör om alla värden till grundenheter innan du sätter in dem i en formel. Längder i meter, tider i sekunder, massor i kilogram. Då blir svaret automatiskt i rätt grundenhet, och du behöver inte fundera över vad som blir vad.' },
        { typ: 'text', text: 'Ett vanligt fel är att blanda: att sätta in tiden i minuter och sträckan i kilometer och sedan tro att svaret är i m/s. Gör om först, räkna sedan.' },
        { typ: 'rubrik', text: 'Kilometer per timme och meter per sekund skiljer sig med faktorn 3,6' },
        { typ: 'text', text: 'I vardagen mäts hastighet i km/h, men i fysiken räknar man i m/s. En timme har 3 600 sekunder och en kilometer har 1 000 meter. 1 km/h är därför 1 000 m / 3 600 s, vilket är 1 / 3,6 m/s. Det ger en enkel regel:' },
        { typ: 'punkter', punkter: [
          'från km/h till m/s: dela med 3,6',
          'från m/s till km/h: gånga med 3,6'
        ] },
        { typ: 'text', text: 'En bil i 90 km/h kör alltså 90 / 3,6 = 25 m/s. En löpare i 5 m/s springer 5 · 3,6 = 18 km/h. Det lönar sig att kontrollera riktningen: m/s ger alltid det mindre talet.' },
        { typ: 'rubrik', text: 'Areor och volymer har prefixet i kvadrat och kub' },
        { typ: 'text', text: 'Här gör nästan alla fel någon gång. En meter är 100 centimeter. Men en kvadratmeter är inte 100 kvadratcentimeter. En kvadratmeter är en kvadrat som är 100 cm lång och 100 cm bred, och den innehåller 100 · 100 = 10 000 kvadratcentimeter. På samma sätt är en kubikmeter 100 · 100 · 100 = 1 000 000 kubikcentimeter.' },
        { typ: 'text', text: 'Rita gärna en kvadrat när du är osäker. Det är lättare att se än att komma ihåg. Det är också användbart att veta att 1 liter är 1 dm³, alltså 1 000 cm³, och att 1 m³ är 1 000 liter.' },
        { typ: 'exempel', rubrik: 'Klackens area', stycken: [
          ['En klack har arean 1,0 cm². Skriv arean i kvadratmeter.'],
          ['Lösning: 1 m² = 10 000 cm², så 1 cm² = 1 / 10 000 m² = 0,000 1 m².',
           'Svar: 1,0 cm² = 0,000 1 m² = 1,0 · 10⁻⁴ m².']
        ] },
        { typ: 'prova', rader: [
          '1a. Skriv 72 km/h i m/s.',
          '1b. Skriv 0,35 kN i newton.',
          '1c. Skriv 300 cm² i m².',
          '1d. Ett paket väger 2 500 g. Skriv massan i kilogram.'
        ] }
      ]
    },
    {
      id: 'tiopotenser', titel: 'Tiopotenser',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: '9. Tryck', bok: 'nasta-kraft-och-rorelse', ankare: 'tryck' }, { text: '10. Lyftkraft', bok: 'nasta-kraft-och-rorelse', ankare: 'lyftkraft' }] },
        { typ: 'rubrik', text: 'Exponenten räknar nollorna' },
        { typ: 'text', text: 'I fysiken möter du tal som är för stora eller för små för att skriva ut. Ljuset färdas 300 000 000 meter på en sekund. Det är lätt att räkna fel på nollorna. Därför skriver man sådana tal med *tiopotenser*.' },
        { typ: 'text', text: '10³ betyder 10 · 10 · 10 = 1 000. Exponenten, den lilla trean, säger hur många tior som gångras ihop. Det är också antalet nollor efter ettan. 10⁶ är en miljon och 10⁹ en miljard. 300 000 000 kan då skrivas 3 · 10⁸, eftersom det är 3 gånger ett tal med åtta nollor.' },
        { typ: 'rubrik', text: 'En negativ exponent betyder division' },
        { typ: 'text', text: '10⁻³ betyder inte ett negativt tal. Det betyder en tusendel: 1 / 10³ = 0,001. Minustecknet säger att vi delar med tian i stället för att gånga. 10⁻¹ är 0,1, 10⁻² är 0,01 och 10⁻⁶ är en miljondel.' },
        { typ: 'text', text: 'Ett sätt att se det: exponenten säger hur många steg decimalkommat flyttas. Positiv exponent flyttar kommat åt höger och gör talet större. Negativ exponent flyttar det åt vänster och gör talet mindre. 4,5 · 10⁻³ är alltså 0,004 5.' },
        { typ: 'text', text: 'Många tror att 10⁻³ är ett negativt tal, men det är det inte. Det är ett litet positivt tal. Ett negativt tal har minustecknet framför sig, som −0,001.' },
        { typ: 'rubrik', text: 'Grundpotensform har en siffra före kommat' },
        { typ: 'text', text: 'Samma tal kan skrivas på många sätt: 3 000 = 3 · 10³ = 30 · 10² = 0,3 · 10⁴. För att alla ska skriva lika används *grundpotensform*. Där står det alltid ett tal mellan 1 och 10 framför tiopotensen. 3 000 skrivs alltså 3 · 10³ och 0,000 45 skrivs 4,5 · 10⁻⁴.' },
        { typ: 'text', text: 'Grundpotensform har en fördel till: det syns direkt hur stort talet är. Jordens massa är ungefär 6,0 · 10²⁴ kg och en elektrons massa ungefär 9,1 · 10⁻³¹ kg. Exponenterna visar på ett ögonblick att skillnaden är enorm.' },
        { typ: 'rubrik', text: 'Vid multiplikation adderas exponenterna' },
        { typ: 'text', text: 'När två tiopotenser multipliceras läggs exponenterna ihop. 10³ · 10⁴ är tre tior gånger fyra tior, alltså sju tior: 10⁷. Vid division dras exponenterna ifrån varandra: 10⁷ / 10⁴ = 10³.' },
        { typ: 'text', text: 'Har talen siffror framför tiopotensen räknar du siffrorna för sig och tiopotenserna för sig:' },
        { typ: 'formel', uttryck: '(a · 10ᵐ) · (b · 10ⁿ) = (a · b) · 10ᵐ⁺ⁿ', forklaring: 'siffror gånger siffror, exponenter plus exponenter' },
        { typ: 'text', text: '(2 · 10³) · (4 · 10⁵) = 8 · 10⁸. Och (6 · 10⁸) / (3 · 10²) = 2 · 10⁶.' },
        { typ: 'rubrik', text: 'Räknaren har en egen knapp för tiopotenser' },
        { typ: 'text', text: 'På miniräknaren skriver du tiopotenser med en särskild knapp, ofta märkt EE, EXP eller ×10ˣ. 3 · 10⁸ slås in som 3 EE 8. Skärmen visar ofta 3E8.' },
        { typ: 'text', text: 'Ett vanligt fel är att slå "3 × 10 EE 8". Då blir det 3 · 10 · 10⁸ = 3 · 10⁹, tio gånger för stort. Knappen EE betyder redan "gånger tio upphöjt till", så du ska inte själv skriva gånger tio.' },
        { typ: 'exempel', rubrik: 'Ljusets resa från solen', stycken: [
          ['Ljuset färdas 3,0 · 10⁸ m/s. Avståndet till solen är 1,5 · 10¹¹ m. Hur lång tid tar ljuset på sig?'],
          ['Givet: v = 3,0 · 10⁸ m/s, s = 1,5 · 10¹¹ m. Sökt: t.',
           'Lösning: t = s / v = (1,5 · 10¹¹) / (3,0 · 10⁸) = (1,5 / 3,0) · 10¹¹⁻⁸ = 0,5 · 10³ = 500 s.',
           'Svar: Ungefär 500 s, alltså drygt 8 minuter.']
        ] },
        { typ: 'prova', rader: [
          '2a. Skriv 45 000 000 i grundpotensform.',
          '2b. Skriv 2,5 · 10⁻³ som decimaltal.',
          '2c. Beräkna (4 · 10⁵) · (2 · 10³).',
          '2d. Beräkna (9 · 10⁶) / (3 · 10⁻²).'
        ] }
      ]
    },
    {
      id: 'vardesiffror', titel: 'Värdesiffror och avrundning',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: '11. Problemlösning steg för steg', bok: 'nasta-kraft-och-rorelse', ankare: 'problemlosning' }] },
        { typ: 'rubrik', text: 'Ett mätvärde är aldrig helt exakt' },
        { typ: 'text', text: 'När du mäter en bänk med ett måttband kanske du får 1,73 m. Du vet inte om den egentligen är 1,7314 m. Måttbandet räcker bara till centimeter. Talet 1,73 säger därför två saker: hur lång bänken är, och hur noga den har mätts. Fysiken håller reda på det med *värdesiffror*.' },
        { typ: 'text', text: 'Värdesiffrorna är de siffror i ett mätvärde som verkligen har mätts. 1,73 m har tre värdesiffror. 1,7 m har två och visar en grövre mätning. 1,730 m har fyra, och nollan på slutet betyder något: den säger att mätningen var så noggrann att även millimetrarna blev noll.' },
        { typ: 'rubrik', text: 'Nollor först i ett tal räknas inte' },
        { typ: 'text', text: 'Nollor som bara visar var kommat står är inte värdesiffror. 0,004 5 kg har två värdesiffror, fyran och femman. Nollorna framför finns bara för att talet är litet. Skriver du i stället 4,5 g eller 4,5 · 10⁻³ kg försvinner nollorna och det syns tydligt att det är två värdesiffror.' },
        { typ: 'text', text: 'Nollor mellan andra siffror räknas alltid. 205 har tre värdesiffror. Nollor i slutet av ett heltal är osäkra: 1 200 m kan ha två, tre eller fyra värdesiffror. Vill man vara tydlig skriver man i grundpotensform. 1,2 · 10³ m har två värdesiffror, 1,200 · 10³ m har fyra.' },
        { typ: 'rubrik', text: 'Svaret får inte vara noggrannare än det minst noggranna värdet' },
        { typ: 'text', text: 'Om du delar en sträcka på 100 m med en tid på 13 s visar räknaren 7,692307692. Men så noga vet du inte hastigheten. Tiden var bara mätt med två värdesiffror. Regeln är:' },
        { typ: 'punkter', punkter: [
          'Vid multiplikation och division får svaret lika många värdesiffror som det givna värde som har minst antal värdesiffror.'
        ] },
        { typ: 'text', text: '100 m har här tre värdesiffror och 13 s två. Svaret ska då ha två: 7,7 m/s. Fler siffror vore att låtsas att man vet mer än man gör.' },
        { typ: 'text', text: 'Talen i formlerna räknas inte. Tvåan i s = a · t² / 2 är exakt och påverkar inte antalet värdesiffror. Det gör inte heller ett antal som går att räkna exakt, som 4 hjul.' },
        { typ: 'rubrik', text: 'Avrunda först i svaret' },
        { typ: 'text', text: 'Avrundar du i varje steg växer felet. Räkna därför med minst en extra siffra i mellanleden, eller låt räknaren behålla hela talet, och avrunda först i svaret. Det är därför exemplen i Nästa steg ibland visar en siffra mer i mellanleden än i svaret.' },
        { typ: 'text', text: 'Avrundning sker som vanligt: är nästa siffra 5 eller mer avrundar du uppåt, annars nedåt. 7,692 med två värdesiffror blir 7,7, eftersom siffran efter sjuan är 6.' },
        { typ: 'exempel', rubrik: 'Värdesiffror i ett svar', stycken: [
          ['En vagn med massan 1,25 kg påverkas av en resulterande kraft på 3,0 N. Beräkna accelerationen.'],
          ['Givet: m = 1,25 kg (tre värdesiffror), F = 3,0 N (två värdesiffror). Sökt: a.',
           'Lösning: a = F / m = 3,0 / 1,25 = 2,4 m/s². Räknaren visar exakt 2,4, och svaret ska ha två värdesiffror.',
           'Svar: a = 2,4 m/s².']
        ] },
        { typ: 'prova', rader: [
          '3a. Hur många värdesiffror har 0,050 2 m?',
          '3b. Hur många värdesiffror har 3,00 · 10⁸ m/s?',
          '3c. Beräkna 25,0 m / 3,1 s och svara med rätt antal värdesiffror.',
          '3d. Skriv 0,000 82 kg i grundpotensform.'
        ] }
      ]
    },
    {
      id: 'formler', titel: 'Formler – sätta in och lösa ut',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: 'nästan alla avsnitt i Nästa steg' }] },
        { typ: 'rubrik', text: 'En formel är en mening skriven med bokstäver' },
        { typ: 'text', text: 'En formel är ett kort sätt att säga något som också kan sägas med ord. v = s / t betyder: hastigheten är sträckan delad med tiden. F = m · a betyder: den resulterande kraften är massan gånger accelerationen. Läs alltid formeln högt med ord innan du använder den. Då vet du vad den säger, och det blir lättare att se om svaret är rimligt.' },
        { typ: 'text', text: 'Bokstäverna i en formel kallas *variabler*, eftersom de kan ha olika värden. När två bokstäver står bredvid varandra betyder det multiplikation: m·a och ma betyder samma sak. Ett litet tecken nedanför, som v₀, är ett *index*. Det skiljer två värden på samma storhet åt. v₀ är hastigheten i början och v hastigheten i slutet.' },
        { typ: 'rubrik', text: 'Sätt in värdet med enheten' },
        { typ: 'text', text: 'När du använder en formel byter du ut bokstäverna mot värden. Skriv gärna in enheterna också, åtminstone de första gångerna. Då ser du om de går ihop.' },
        { typ: 'text', text: 'En kraft på 12 N verkar på en vagn med massan 4,0 kg. Formeln a = F / m ger a = 12 N / 4,0 kg = 3,0 N/kg. Och eftersom 1 N = 1 kg · m/s² är 1 N/kg = 1 m/s². Svaret blir 3,0 m/s², och enheten visar att det verkligen är en acceleration. Får du en enhet som inte passar det du söker har du använt fel formel eller satt in något fel.' },
        { typ: 'rubrik', text: 'Att lösa ut är att göra samma sak på båda sidor' },
        { typ: 'text', text: 'Ofta söker du en annan storhet än den som står ensam i formeln. Vet du hastigheten och tiden men söker sträckan, har du formeln v = s / t men vill ha s ensamt. Då ska du *lösa ut* s.' },
        { typ: 'text', text: 'En formel är en ekvation, och den fungerar som en balansvåg. Det som står till vänster om likhetstecknet är lika mycket värt som det som står till höger. Gör du samma sak på båda sidor är de fortfarande lika. Det är samma balansmetod som du har använt för ekvationer i matematiken. Målet är att få den sökta bokstaven ensam på ena sidan.' },
        { typ: 'text', text: 'I v = s / t är s delat med t. Det motsatta till att dela med t är att gånga med t. Gånga därför båda sidor med t:' },
        { typ: 'rader', rader: [
          'v = s / t',
          'v · t = s / t · t',
          'v · t = s'
        ] },
        { typ: 'text', text: 'Nu står s ensamt: s = v · t. Vill du i stället ha t gör du ett steg till. Dela båda sidor med v:' },
        { typ: 'rader', rader: [
          'v · t = s',
          'v · t / v = s / v',
          't = s / v'
        ] },
        { typ: 'text', text: 'Skriv ut mellanleden. Det tar några sekunder, och det är där du upptäcker om du har gjort fel.' },
        { typ: 'rubrik', text: 'Det motsatta räknesättet tar bort det som står i vägen' },
        { typ: 'text', text: 'Varje räknesätt har ett motsatt räknesätt som tar ut det:' },
        { typ: 'punkter', punkter: [
          'plus tas bort med minus, och minus med plus',
          'gånger tas bort med division, och division med gånger',
          'kvadrat tas bort med kvadratrot'
        ] },
        { typ: 'text', text: 'Titta på vad som händer med den sökta bokstaven och ta bort det i omvänd ordning. I formeln s = a · t² / 2 söker vi t. Först har t kvadrerats, sedan gångrats med a, sedan delats med 2. Vi tar bort det baklänges:' },
        { typ: 'rader', rader: [
          's = a · t² / 2',
          '2 · s = a · t²        (gånga båda sidor med 2)',
          '2 · s / a = t²        (dela båda sidor med a)',
          't = √(2 · s / a)      (dra roten ur båda sidor)'
        ] },
        { typ: 'rubrik', text: 'Lös ut först, sätt in sedan' },
        { typ: 'text', text: 'Det finns två sätt att lösa en uppgift. Antingen sätter du in siffrorna direkt och löser ekvationen med siffror, eller så löser du ut den sökta storheten med bokstäver först och sätter in siffrorna sist. På gymnasiet lönar sig det andra sättet. Det blir färre siffror att hålla reda på, det syns vad svaret beror på och det går att kontrollera.' },
        { typ: 'text', text: 'Ett exempel från Nästa steg: när en bil bromsar med friktion blir accelerationen a = μ · m · g / m. Med bokstäver syns det direkt att m tar ut sig, så a = μ · g. Bromsningen beror alltså inte på bilens massa. Hade du satt in siffror från början hade du aldrig sett det.' },
        { typ: 'text', text: 'Många tror att man kan flytta en term "över till andra sidan och byta tecken" utan att tänka. Det fungerar ibland, men det leder lätt till fel när det finns både gånger och division. Det säkra är att alltid göra samma sak på båda sidor och skriva ut det.' },
        { typ: 'exempel', rubrik: 'Hur lång tid tar fallet?', stycken: [
          ['En sten släpps från 20 m höjd. Hur lång tid tar det innan den når marken? Luftmotståndet kan försummas.'],
          ['Givet: s = 20 m, a = g = 9,82 m/s², starthastighet noll. Sökt: t.',
           'Lösning: Formeln är s = a · t² / 2. Lös ut t:',
           '2 · s = a · t²',
           't² = 2 · s / a',
           't = √(2 · s / a) = √(2 · 20 / 9,82) = √4,07 ≈ 2,02 s',
           'Svar: Ungefär 2,0 s.']
        ] },
        { typ: 'prova', rader: [
          '4a. Lös ut m ur F = m · a.',
          '4b. Lös ut A ur p = F / A.',
          '4c. Lös ut a ur v = v₀ + a · t.',
          '4d. En bil kör 150 m på 6,0 s med jämn fart. Beräkna farten. Lös ut först, sätt in sedan.'
        ] }
      ]
    },
    {
      id: 'proportionalitet', titel: 'Proportionalitet och kvadrat',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: '4. Acceleration', bok: 'nasta-kraft-och-rorelse', ankare: 'acceleration' }, { text: '5. Newtons andra lag', bok: 'nasta-kraft-och-rorelse', ankare: 'newtons-andra-lag' }, { text: '6. Tyngden och fritt fall', bok: 'nasta-kraft-och-rorelse', ankare: 'tyngden-och-fritt-fall' }] },
        { typ: 'rubrik', text: 'Proportionalitet betyder att dubbelt ger dubbelt' },
        { typ: 'text', text: 'Två storheter är *proportionella* om de växer i samma takt. Dubblar du den ena dubblas den andra, tredubblar du den ena tredubblas den andra. Tyngden är proportionell mot massan: 2 kg dras med 19,6 N och 4 kg med 39,3 N.' },
        { typ: 'text', text: 'En proportionalitet kan alltid skrivas y = k · x, där k är ett fast tal som kallas *proportionalitetskonstanten*. För tyngden är det F = m · g, och konstanten är g = 9,82 N/kg. I ett diagram blir proportionalitet en rät linje som går genom origo, alltså genom punkten där båda storheterna är noll.' },
        { typ: 'text', text: 'Många tror att alla räta linjer visar proportionalitet, men så är det inte. Linjen måste också gå genom origo. Hastigheten för en bil som börjar på 10 m/s och accelererar ökar längs en rät linje, men den börjar inte på noll. Fördubblas tiden fördubblas därför inte hastigheten.' },
        { typ: 'rubrik', text: 'Omvänd proportionalitet betyder att dubbelt ger hälften' },
        { typ: 'text', text: 'Ibland går två storheter åt motsatt håll. Ska du köra 100 km tar det 2 timmar i 50 km/h men bara 1 timme i 100 km/h. Dubbel fart ger halva tiden. Storheterna är *omvänt proportionella*.' },
        { typ: 'text', text: 'Omvänd proportionalitet syns i formler där storheten står i nämnaren. I a = F / m är accelerationen omvänt proportionell mot massan: samma kraft på dubbelt så stor massa ger halva accelerationen. Det är just det Nästa steg menar med "dubbel massa, halverad acceleration".' },
        { typ: 'rubrik', text: 'Kvadrat betyder att dubbelt ger fyra gånger' },
        { typ: 'text', text: 'Ibland växer en storhet snabbare än den andra. Bromssträckan är proportionell mot hastigheten i kvadrat: s = v² / (2 · a). Dubblar du hastigheten blir bromssträckan 2² = 4 gånger så lång. Tredubblar du den blir den 3² = 9 gånger så lång.' },
        { typ: 'text', text: 'Det är därför små ändringar i hastighet ger stora skillnader i bromssträcka. Kör du 1,4 gånger så fort blir bromssträckan 1,4² ≈ 2 gånger så lång. Ett diagram över en kvadratisk storhet är inte en rät linje utan en kurva som blir brantare och brantare.' },
        { typ: 'rubrik', text: 'Formeln visar vad som händer om du ändrar något' },
        { typ: 'text', text: 'Du behöver inte räkna ut allt från början för att svara på frågor som "vad händer om massan fördubblas?". Titta på formeln:' },
        { typ: 'punkter', punkter: [
          'Står storheten i täljaren, ger dubbelt dubbelt.',
          'Står den i nämnaren, ger dubbelt hälften.',
          'Står den i kvadrat, ger dubbelt fyra gånger.'
        ] },
        { typ: 'text', text: 'Det kallas att resonera med formeln, och det är ett av de mest användbara sätten att tänka i fysiken. Det fungerar också för att kontrollera svar. Fördubblas massan och accelerationen också fördubblas, har något gått fel.' },
        { typ: 'rubrik', text: 'I en tabell syns sambandet om du dividerar eller multiplicerar' },
        { typ: 'text', text: 'Har du mätvärden i en tabell kan du ta reda på sambandet:' },
        { typ: 'punkter', punkter: [
          'Om y / x är lika för alla mätningar är y proportionell mot x.',
          'Om y · x är lika för alla mätningar är y omvänt proportionell mot x.',
          'Om y / x² är lika för alla mätningar är y proportionell mot x i kvadrat.'
        ] },
        { typ: 'text', text: 'I verkliga mätningar blir kvoterna aldrig exakt lika, eftersom det alltid finns mätfel. Är de nästan lika har du ändå hittat sambandet.' },
        { typ: 'exempel', rubrik: 'Bromssträcka i olika fart', stycken: [
          ['En bil har bromssträckan 25 m när den kör i 50 km/h. Hur lång blir bromssträckan i 100 km/h med samma bromsning?'],
          ['Givet: s₁ = 25 m vid v₁ = 50 km/h, v₂ = 100 km/h. Sökt: s₂.',
           'Lösning: Bromssträckan är proportionell mot hastigheten i kvadrat. Hastigheten fördubblas, så bromssträckan blir 2² = 4 gånger så lång: 4 · 25 m = 100 m.',
           'Svar: 100 m.']
        ] },
        { typ: 'prova', rader: [
          '5a. En låda dras med en kraft som fördubblas. Massan är densamma. Vad händer med accelerationen?',
          '5b. En kraft verkar på en yta som blir tre gånger så stor. Vad händer med trycket, p = F / A?',
          '5c. En sten faller i 2 s och sedan i 4 s. Hur många gånger längre faller den på 4 s? (Använd s = g · t² / 2.)',
          '5d. Mätvärden: x = 1, 2, 3 och y = 5, 10, 15. Vilket samband har x och y?'
        ] }
      ]
    },
    {
      id: 'diagram', titel: 'Diagram – läsa av, lutning och area',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: '3. Rörelsen i diagram', bok: 'nasta-kraft-och-rorelse', ankare: 'rorelsen-i-diagram' }, { text: '4. Acceleration', bok: 'nasta-kraft-och-rorelse', ankare: 'acceleration' }] },
        { typ: 'rubrik', text: 'Läs axlarna innan du läser grafen' },
        { typ: 'text', text: 'Ett diagram visar hur en storhet ändras när en annan ändras. Det första du ska göra är att läsa axlarna. Vilken storhet står på den vågräta axeln och vilken på den lodräta? Vilka enheter har de? Hur mycket är varje ruta värd?' },
        { typ: 'text', text: 'Det låter enkelt, men det är det vanligaste felet. Ett läge–tid-diagram och ett hastighet–tid-diagram kan se exakt likadana ut, men de betyder helt olika saker. En vågrät linje betyder att föremålet står still i det första och att det rör sig med jämn fart i det andra.' },
        { typ: 'text', text: 'Att *läsa av* betyder att gå från ett värde på ena axeln, rakt till grafen och sedan rakt till den andra axeln. Läs alltid av med enhet. "Vid 4 s är hastigheten 6 m/s" är ett svar, "6" är det inte.' },
        { typ: 'rubrik', text: 'Lutningen är ändringen på lodräta axeln delad med ändringen på vågräta' },
        { typ: 'text', text: 'En grafs *lutning* visar hur snabbt den lodräta storheten ändras jämfört med den vågräta. Du räknar ut den genom att ta två punkter på grafen och dividera skillnaden i höjdled med skillnaden i sidled. Skillnaden skrivs ofta med den grekiska bokstaven Δ, delta.' },
        { typ: 'formel', uttryck: 'k = Δy / Δx', forklaring: 'lutningen är ändringen på lodräta axeln delad med ändringen på vågräta axeln' },
        { typ: 'text', text: 'Välj punkter som ligger långt ifrån varandra och där grafen går genom ett hörn i rutnätet. Då blir avläsningen noggrannast.' },
        { typ: 'text', text: 'Lutningen har en enhet, och den är den lodräta axelns enhet delad med den vågräta axelns enhet. I ett läge–tid-diagram blir det m / s, en hastighet. I ett hastighet–tid-diagram blir det (m/s) / s = m/s², en acceleration. Enheten säger alltså vad lutningen betyder.' },
        { typ: 'rubrik', text: 'Lutningen kan vara negativ' },
        { typ: 'text', text: 'Om grafen går nedåt åt höger är Δy negativ, och då blir lutningen negativ. I ett hastighet–tid-diagram betyder det att hastigheten minskar. Är grafen vågrät är lutningen noll, och den lodräta storheten ändras inte alls.' },
        { typ: 'text', text: 'Om grafen är krökt är lutningen olika på olika ställen. Då ritar man en *tangent*, en rak linje som bara snuddar vid grafen i den punkt man undrar över, och räknar ut tangentens lutning. Det är så momentanhastigheten bestäms i ett läge–tid-diagram.' },
        { typ: 'rubrik', text: 'Arean under grafen är produkten av axlarnas storheter' },
        { typ: 'text', text: 'Det andra du kan räkna ut i ett diagram är *arean* mellan grafen och den vågräta axeln. Arean har enheten för lodräta axeln gånger enheten för vågräta axeln. I ett hastighet–tid-diagram blir det (m/s) · s = m, alltså en sträcka. Arean under grafen är förflyttningen.' },
        { typ: 'text', text: 'Areor under raka grafer består av rektanglar och trianglar:' },
        { typ: 'punkter', punkter: [
          'rektangel: area = bas · höjd',
          'triangel: area = bas · höjd / 2'
        ] },
        { typ: 'text', text: 'En vagn som rör sig med 4 m/s i 5 s ger en rektangel. Arean är 5 s · 4 m/s = 20 m, och den sträckan har vagnen kört. Ligger grafen under axeln räknas arean som negativ, och det betyder att föremålet har rört sig bakåt.' },
        // [BILD: Hastighet–tid-diagram på rutat papper. En graf som går rakt från (0 s, 0 m/s) till (4 s, 8 m/s) och sedan vågrätt till (10 s, 8 m/s). Arean under grafen är indelad i en triangel (0–4 s) och en rektangel (4–10 s) i två olika ljusa toner. Mellan 0 och 4 s är Δt och Δv markerade med streckade linjer som visar lutningen.]
        { id: 'bild-diagram', typ: 'figur', namn: 'diagram_graf', diagram: [{ x: { storhet: 'tid', enhet: 's', max: 10, steg: 1, tal: 2 }, y: { storhet: 'hastighet', enhet: 'm/s', max: 10, steg: 1, tal: 2 }, grafer: [{ punkter: [[0, 0], [4, 8], [10, 8]] }], ytor: [{ punkter: [[0, 0], [4, 8], [4, 0]], ton: 1 }, { punkter: [[4, 0], [4, 8], [10, 8], [10, 0]], ton: 2 }], delta: [{ fran: [0, 0], till: [4, 8], dx: 'Δt', dy: 'Δv' }] }] },
        { typ: 'exempel', rubrik: 'Lutning och area i samma diagram', stycken: [
          ['Använd diagrammet ovan. Hur stor är accelerationen de första 4 sekunderna, och hur långt har vagnen kört efter 10 s?'],
          ['Lösning: Lutningen mellan 0 och 4 s är Δv / Δt = (8 − 0) / (4 − 0) = 2 m/s². Arean består av en triangel och en rektangel. Triangeln: 4 · 8 / 2 = 16 m. Rektangeln: (10 − 4) · 8 = 48 m. Tillsammans 16 + 48 = 64 m.',
           'Svar: Accelerationen är 2 m/s² och vagnen har kört 64 m.']
        ] },
        { typ: 'prova', rader: [
          '6a. I ett läge–tid-diagram går grafen från 2 m vid 0 s till 14 m vid 4 s. Beräkna lutningen och säg vad den betyder.',
          '6b. Vilken enhet får arean under grafen i ett kraft–tid-diagram?',
          '6c. I ett hastighet–tid-diagram minskar hastigheten från 12 m/s till 0 m/s på 3 s. Beräkna accelerationen och bromssträckan.'
        ] }
      ]
    },
    {
      id: 'pythagoras', titel: 'Pythagoras sats och vinklar',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: '1. Storheter med riktning', bok: 'nasta-kraft-och-rorelse', ankare: 'storheter-med-riktning' }, { text: 'Fysikboken: Resulterande kraft, Fördjupning' }] },
        { typ: 'rubrik', text: 'I en rätvinklig triangel hänger sidorna ihop' },
        { typ: 'text', text: 'En triangel som har en rät vinkel, alltså 90°, kallas *rätvinklig*. Den längsta sidan ligger mitt emot den räta vinkeln och kallas *hypotenusa*. De två kortare sidorna, som bildar den räta vinkeln, kallas *kateter*.' },
        { typ: 'text', text: 'För alla rätvinkliga trianglar gäller *Pythagoras sats*:' },
        { typ: 'formel', uttryck: 'c² = a² + b²', forklaring: 'c är hypotenusan, a och b är kateterna' },
        { typ: 'text', text: 'Har kateterna längderna 3 och 4 blir c² = 9 + 16 = 25. Hypotenusan är √25 = 5. Triangeln med sidorna 3, 4 och 5 är så vanlig att det lönar sig att känna igen den.' },
        { typ: 'rubrik', text: 'Pythagoras sats ger längden av två pilar i rät vinkel' },
        { typ: 'text', text: 'I fysiken används Pythagoras sats nästan alltid till pilar som är vinkelräta mot varandra. Går du 30 m österut och sedan 40 m norrut har du rört dig längs två kateter. Förflyttningen, pilen från start till mål, är hypotenusan: √(30² + 40²) = √2 500 = 50 m.' },
        { typ: 'text', text: 'Samma sak gäller krafter. En båt som dras med 30 N österut och 40 N norrut påverkas av en resulterande kraft på 50 N, snett åt nordost. Kraften blir inte 70 N, eftersom krafterna drar åt olika håll. Den blir inte heller 10 N, eftersom de inte drar mot varandra.' },
        { typ: 'text', text: 'Många tror att två krafter alltid ska läggas ihop genom att talen adderas. Det gäller bara när krafterna verkar åt samma håll. Verkar de vinkelrätt mot varandra används Pythagoras sats, och resultanten blir alltid mindre än summan men större än den största av de två.' },
        { typ: 'rubrik', text: 'Vinkeln ger riktningen' },
        { typ: 'text', text: 'En pil har både längd och riktning. Längden får du med Pythagoras sats. Riktningen anges med en vinkel, till exempel vinkeln mellan pilen och en vågrät linje. På rutat papper kan du mäta vinkeln med en gradskiva.' },
        { typ: 'text', text: 'Kom ihåg några vinklar som du ofta behöver. En rät vinkel är 90°, ett halvt varv 180° och ett helt varv 360°. Vinkelsumman i en triangel är alltid 180°. Är de två kateterna lika långa är vinkeln mellan hypotenusan och kateterna 45°.' },
        { typ: 'text', text: 'På gymnasiet räknar man ut vinkeln i stället för att mäta den. Det görs med *sinus*, *cosinus* och *tangens*, som beskriver förhållandet mellan sidorna i en rätvinklig triangel. Det kommer i gymnasiets matematik. Grunden är densamma som här: en rätvinklig triangel där pilen är hypotenusan.' },
        // [BILD: Rutat papper med en pil 3 rutor åt höger och en pil 4 rutor uppåt, satta efter varandra. En tredje pil går från början av den första till spetsen av den andra och är märkt som hypotenusa. Den räta vinkeln är markerad med en liten kvadrat.]
        { id: 'bild-pythagoras', typ: 'figur', namn: 'vektor_rutnat', pilar: [{ dx: 3, dy: 0, namn: '3' }, { dx: 0, dy: 4, namn: '4' }], resultant: { namn: 'hypotenusa' }, ratVinkel: true },
        { typ: 'exempel', rubrik: 'Simmaren i floden', stycken: [
          ['En simmare simmar rakt över en flod med 1,2 m/s. Strömmen för honom med sig nedströms med 0,5 m/s. Hur stor är simmarens fart i förhållande till stranden?'],
          ['Givet: 1,2 m/s rakt över och 0,5 m/s längs floden, vinkelräta mot varandra. Sökt: farten.',
           'Lösning: v = √(1,2² + 0,5²) = √(1,44 + 0,25) = √1,69 = 1,3 m/s.',
           'Svar: 1,3 m/s, snett nedströms.']
        ] },
        { typ: 'prova', rader: [
          '7a. Två kateter är 6 cm och 8 cm. Hur lång är hypotenusan?',
          '7b. En låda dras med 12 N åt höger och 5 N uppåt. Hur stor är den resulterande kraften?',
          '7c. En hypotenusa är 10 m och en katet 6 m. Hur lång är den andra kateten?'
        ] }
      ]
    },
    {
      id: 'vektorer', titel: 'Vektorer på rutat papper',
      block: [
        { typ: 'bokref', etikett: 'Används i Nästa steg:', lankar: [{ text: '1. Storheter med riktning', bok: 'nasta-kraft-och-rorelse', ankare: 'storheter-med-riktning' }, { text: '5. Newtons andra lag', bok: 'nasta-kraft-och-rorelse', ankare: 'newtons-andra-lag' }, { text: 'Fysikboken: Resulterande kraft' }] },
        { typ: 'rubrik', text: 'En vektor ritas som en pil i skala' },
        { typ: 'text', text: 'En *vektor* är en storhet med både storlek och riktning, som en kraft eller en förflyttning. Den ritas som en pil. Pilens riktning visar åt vilket håll vektorn pekar, och pilens längd visar hur stor den är.' },
        { typ: 'text', text: 'För att längden ska betyda något bestämmer du en *skala*, till exempel att en ruta är 10 N. En kraft på 50 N blir då en pil som är fem rutor lång. Skriv alltid upp skalan bredvid figuren. Utan skala är pilen bara en bild.' },
        { typ: 'rubrik', text: 'Pilar läggs ihop genom att sättas efter varandra' },
        { typ: 'text', text: 'Två vektorer läggs ihop genom att den andra pilens början sätts vid den första pilens spets. Du flyttar pilen, men den får behålla både sin längd och sin riktning. Summan, den *resulterande* vektorn, är pilen från den första pilens början till den sista pilens spets.' },
        { typ: 'text', text: 'Det spelar ingen roll i vilken ordning pilarna sätts. Den resulterande pilen blir densamma. Det fungerar också för fler än två pilar: sätt dem efter varandra en i taget och dra sedan resultanten från början till slut. Hamnar den sista spetsen precis vid starten är resultanten noll, och då är krafterna i jämvikt.' },
        { typ: 'text', text: 'Är pilarna parallella blir det enkelt. Pilar åt samma håll ger en pil som är lika lång som båda tillsammans. Pilar åt motsatt håll ger en pil som är skillnaden mellan dem, åt den största pilens håll. Det är samma sak som du har gjort med krafter längs en linje.' },
        { typ: 'rubrik', text: 'Rutorna ger komposanterna' },
        { typ: 'text', text: 'På rutat papper kan varje pil beskrivas med hur många rutor den går i sidled och hur många den går i höjdled. De två delarna kallas pilens *komposanter*. En pil som går 3 rutor åt höger och 2 rutor uppåt har komposanterna 3 och 2.' },
        { typ: 'text', text: 'Komposanterna gör det lätt att lägga ihop pilar utan att rita. Du lägger ihop alla sidledskomposanter för sig och alla höjdledskomposanter för sig. Pilar åt vänster och nedåt räknas med minustecken. Resultantens längd får du sedan med Pythagoras sats.' },
        { typ: 'text', text: 'En pil (3, 2) plus en pil (1, −5) ger (3 + 1, 2 − 5) = (4, −3). Resultanten går 4 rutor åt höger och 3 rutor nedåt, och längden är √(4² + 3²) = 5 rutor.' },
        { typ: 'rubrik', text: 'En kraft kan delas upp i två riktningar' },
        { typ: 'text', text: 'Det fungerar också baklänges. En kraft som drar snett kan delas upp i en del som drar framåt och en del som drar uppåt. Det kallas *kraftuppdelning*. När du drar en kälke i ett snöre som pekar snett uppåt, är det bara den framåtriktade delen som drar kälken framåt. Den uppåtriktade delen lyfter lite och minskar normalkraften.' },
        { typ: 'text', text: 'På rutat papper gör du uppdelningen genom att rita en rätvinklig triangel med kraften som hypotenusa. Kateterna är de två komposanterna. Det är så man räknar på gymnasiet också, men där räknas komposanterna ut med sinus och cosinus i stället för att räknas i rutor.' },
        // [BILD: Rutat papper med skalan 1 ruta = 10 N. Två kraftpilar: 40 N åt höger (4 rutor) och 30 N rakt uppåt (3 rutor). Pilarna satta efter varandra och den resulterande pilen från första pilens början till andra pilens spets. Resultanten är 5 rutor = 50 N.]
        { id: 'bild-vektorer', typ: 'figur', namn: 'vektor_rutnat', pilar: [{ dx: 4, dy: 0, namn: '40 N' }, { dx: 0, dy: 3, namn: '30 N' }], resultant: { namn: '50 N' }, skala: '1 ruta = 10 N' },
        { typ: 'exempel', rubrik: 'Två hundar drar en släde', stycken: [
          ['En hund drar en släde med 60 N rakt framåt. En annan hund drar med 80 N rakt åt sidan. Bestäm den resulterande kraften med rutat papper och med räkning. Skala: 1 ruta = 20 N.'],
          ['Givet: F₁ = 60 N framåt, F₂ = 80 N åt sidan. Sökt: resulterande kraft.',
           'Lösning: F₁ blir 3 rutor framåt och F₂ 4 rutor åt sidan. Sätt pilarna efter varandra. Resultanten går från starten till den andra pilens spets och mäts till 5 rutor, alltså 5 · 20 = 100 N. Med räkning: F = √(60² + 80²) = √10 000 = 100 N. Vinkeln mot framåtriktningen mäts med gradskiva till ungefär 53°.',
           'Svar: 100 N, snett framåt åt den andra hundens håll.']
        ] },
        { typ: 'prova', rader: [
          '8a. Lägg ihop pilarna (2, 5) och (4, −1). Ange resultantens komposanter.',
          '8b. Tre krafter: 20 N åt höger, 50 N åt vänster och 10 N åt höger. Bestäm den resulterande kraften.',
          '8c. En pil har komposanterna (5, 12) rutor och skalan är 1 ruta = 2 N. Hur stor är kraften?'
        ] }
      ]
    },
    {
      id: 'facit', titel: 'Facit', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Svar till Prova själv' },
        { typ: 'rader', rader: [
          '1a. 72 / 3,6 = 20 m/s',
          '1b. 0,35 · 1 000 = 350 N',
          '1c. 300 / 10 000 = 0,030 m²',
          '1d. 2,5 kg'
        ] },
        { typ: 'rader', rader: [
          '2a. 4,5 · 10⁷',
          '2b. 0,002 5',
          '2c. 8 · 10⁸',
          '2d. 3 · 10⁸ (eftersom 6 − (−2) = 8)'
        ] },
        { typ: 'rader', rader: [
          '3a. Tre (5, 0 och 2)',
          '3b. Tre',
          '3c. 8,064… avrundas till två värdesiffror: 8,1 m/s',
          '3d. 8,2 · 10⁻⁴ kg'
        ] },
        { typ: 'rader', rader: [
          '4a. m = F / a',
          '4b. A = F / p',
          '4c. a = (v − v₀) / t',
          '4d. v = s / t = 150 / 6,0 = 25 m/s'
        ] },
        { typ: 'rader', rader: [
          '5a. Accelerationen fördubblas.',
          '5b. Trycket blir en tredjedel så stort.',
          '5c. 4 gånger längre, eftersom tiden fördubblas och sträckan beror på tiden i kvadrat.',
          '5d. y är proportionell mot x, y = 5 · x.'
        ] },
        { typ: 'rader', rader: [
          '6a. Lutningen är (14 − 2) / (4 − 0) = 3 m/s. Det är hastigheten.',
          '6b. N · s, newtonsekund. Det är impulsen.',
          '6c. Accelerationen är (0 − 12) / 3 = −4 m/s². Bromssträckan är triangelns area: 3 · 12 / 2 = 18 m.'
        ] },
        { typ: 'rader', rader: [
          '7a. √(36 + 64) = √100 = 10 cm',
          '7b. √(144 + 25) = √169 = 13 N',
          '7c. √(100 − 36) = √64 = 8 m'
        ] },
        { typ: 'rader', rader: [
          '8a. (6, 4)',
          '8b. 20 − 50 + 10 = −20, alltså 20 N åt vänster.',
          '8c. Längden är √(25 + 144) = √169 = 13 rutor, alltså 13 · 2 = 26 N.'
        ] }
      ]
    }
  ]
});
