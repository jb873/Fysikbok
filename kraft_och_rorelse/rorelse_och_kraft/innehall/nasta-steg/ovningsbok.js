/* Nästa steg · Kraft och rörelse – övningsbok (arbetsorder 11, 2026-11-07): kallor/nasta-steg/Nasta-steg-Kraft-och-rorelse-ovningsbok-v2.md, införd ordagrant i
 * strömformatet av verktyg/nasta-steg-omvandlare.js. ## = avsnitt, ### = rubrik, ett stycke = ett textblock, rader i
 * följd = rader; [FORMEL], [EXEMPEL], [PROVA], [MATTE] och [ANVÄNDS I] = formel, exempel, prova och bokref (länkar
 * till den andra boken); [BILD …] står som kommentar på sin plats.
 */
Bok.niva('ovningsbok', {
  avsnitt: [
    {
      id: 'sa-har-anvander-du-ovningsboken', titel: 'Så här använder du övningsboken', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Räkna uppgifterna efter att du har läst avsnittet' },
        { typ: 'text', text: 'Varje avsnitt i övningsboken hör till samma avsnitt i textboken. Läs avsnittet och exemplen där först. Börja med uppgifterna märkta ● och gå vidare till ●● och ●●●. Du behöver inte göra alla – men försök med minst en ●●● i varje avsnitt.' },
        { typ: 'rubrik', text: 'Skriv lösningen som i textboken' },
        { typ: 'text', text: 'Skriv upp Givet, Sökt, Lösning och Svar, precis som i exemplen. Rita en bild när uppgiften handlar om krafter. Räkna med enheter hela vägen, och avrunda först i svaret.' },
        { typ: 'rubrik', text: 'Använd ledtråden innan du tittar på svaret' },
        { typ: 'text', text: 'Fastnar du på en ●●●-uppgift finns en ledtråd i slutet av boken. Läs bara ledtråden och försök igen. Titta på svaret först när du är klar – har du fått ett annat svar, leta efter felet innan du läser vidare. Det är där du lär dig mest.' }
      ]
    },
    {
      id: 'storheter-med-riktning', titel: 'Storheter med riktning',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '1.1 ● Vilka av storheterna är vektorer och vilka är skalärer? Massa, förflyttning, tid, hastighet, temperatur, kraft, fart.' },
        { typ: 'text', text: '1.2 ● Ett barn går 250 m österut och sedan 250 m västerut. Bestäm sträckan och förflyttningen.' },
        { typ: 'text', text: '1.3 ●● En brevbärare går 300 m norrut, 200 m söderut och 150 m norrut. Bestäm sträckan och förflyttningen.' },
        { typ: 'text', text: '1.4 ●● Två bilar kör på samma väg med farten 80 km/h, den ena norrut och den andra söderut. Har de samma fart? Samma hastighet? Förklara.' },
        { typ: 'text', text: '1.5 ●● En hiss åker 12 m upp och sedan 30 m ner. Uppåt är positivt. Ange förflyttningen med tecken.' },
        { typ: 'text', text: '1.6 ●●● En löpare springer 3 varv på en 400-metersbana och stannar halvvägs in på fjärde varvet, mitt emot startpunkten. Banan kan ses som en cirkel med diametern 127 m. Bestäm sträckan och förflyttningens storlek.' }
      ]
    },
    {
      id: 'medelhastighet', titel: 'Medelhastighet och momentanhastighet',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '2.1 ● Omvandla till m/s: 36 km/h, 72 km/h och 108 km/h.' },
        { typ: 'text', text: '2.2 ● Omvandla till km/h: 5 m/s, 15 m/s och 340 m/s (ljudets fart i luft).' },
        { typ: 'text', text: '2.3 ● En bil kör 180 m rakt fram på 12 s. Bestäm medelhastigheten.' },
        { typ: 'text', text: '2.4 ●● En cyklist cyklar 6,0 km på 15 min. Bestäm medelfarten i m/s och i km/h.' },
        { typ: 'text', text: '2.5 ●● En simmare simmar 50 m fram och 50 m tillbaka i en bassäng på 64 s. Bestäm medelfarten och medelhastigheten.' },
        { typ: 'text', text: '2.6 ●● Visar hastighetsmätaren i en bil medelhastighet, momentan fart eller momentanhastighet? Motivera.' },
        { typ: 'text', text: '2.7 ●●● En bil kör 30 km i 90 km/h och sedan 30 km i 60 km/h, åt samma håll. Bestäm medelhastigheten för hela sträckan. (Varning: svaret är inte 75 km/h.)' }
      ]
    },
    {
      id: 'rorelsen-i-diagram', titel: 'Rörelsen i diagram',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '3.1 ● Vad betyder en vågrät linje i ett läge–tid-diagram? I ett hastighet–tid-diagram?' },
        { typ: 'text', text: '3.2 ● I ett läge–tid-diagram går en rak linje från 0 m vid 0 s till 40 m vid 8 s. Bestäm hastigheten.' },
        { typ: 'text', text: '3.3 ● I ett läge–tid-diagram går en rak linje från 50 m vid 0 s till 20 m vid 10 s. Bestäm hastigheten. Vad betyder tecknet?' },
        { typ: 'text', text: '3.4 ● I ett hastighet–tid-diagram är grafen en vågrät linje på 4,0 m/s under 12 s. Bestäm förflyttningen.' },
        { typ: 'text', text: '3.5 ●● I ett hastighet–tid-diagram går en rak linje från 2 m/s vid 0 s till 14 m/s vid 6 s. Bestäm accelerationen och förflyttningen under de 6 sekunderna.' },
        { typ: 'text', text: '3.6 ●● En bil kör med 25 m/s i 10 s och bromsar sedan jämnt till stillastående på 5 s. Rita hastighet–tid-diagrammet och bestäm hela förflyttningen.' },
        { typ: 'text', text: '3.7 ●● Två bilar har samma läge vid en viss tidpunkt. Måste de ha samma hastighet då? Förklara med ett läge–tid-diagram.' },
        { typ: 'text', text: '3.8 ●●● En boll kastas rakt upp med 10 m/s. I ett hastighet–tid-diagram (uppåt positivt) går grafen rakt nedåt från 10 m/s till −10 m/s på ungefär 2,0 s. Bestäm bollens förflyttning och sträcka under de 2,0 sekunderna.' }
      ]
    },
    {
      id: 'acceleration', titel: 'Acceleration',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '4.1 ● En bil ökar hastigheten från 10 m/s till 25 m/s på 5,0 s. Bestäm accelerationen.' },
        { typ: 'text', text: '4.2 ● Ett tåg bromsar från 30 m/s till 12 m/s på 20 s. Bestäm accelerationen.' },
        { typ: 'text', text: '4.3 ● En boll rullar nedför en backe och ökar hastigheten från 1,0 m/s till 4,0 m/s på 2,0 s. Bestäm accelerationen.' },
        { typ: 'text', text: '4.4 ● Vad betyder det att en bil har accelerationen 2 m/s²?' },
        { typ: 'text', text: '4.5 ●● En motorcykel startar från stillastående med accelerationen 4,0 m/s². Hur fort kör den efter 6,0 s, och hur långt har den kört?' },
        { typ: 'text', text: '4.6 ●● En cyklist som cyklar i 8,0 m/s bromsar med accelerationen −2,0 m/s². Hur lång tid tar det att stanna, och hur lång är bromssträckan?' },
        { typ: 'text', text: '4.7 ●● Ett flygplan behöver 70 m/s för att lyfta och accelererar med 2,5 m/s² från stillastående. Hur lång måste startbanan vara minst?' },
        { typ: 'text', text: '4.8 ●● Bromssträckan för en bil i 50 km/h är 12 m. Hur lång blir bromssträckan i 70 km/h och i 100 km/h, med samma bromsförmåga?' },
        { typ: 'text', text: '4.9 ●●● En bil kör åt det negativa hållet med hastigheten −15 m/s och har accelerationen −2,0 m/s². Ökar eller minskar farten? Vad är hastigheten efter 3,0 s?' }
      ]
    },
    {
      id: 'newtons-andra-lag', titel: 'Newtons andra lag',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '5.1 ● En resulterande kraft på 12 N verkar på en låda med massan 4,0 kg. Bestäm accelerationen.' },
        { typ: 'text', text: '5.2 ● Vilken resulterande kraft behövs för att ge en bil med massan 900 kg accelerationen 2,0 m/s²?' },
        { typ: 'text', text: '5.3 ●● En kälke med massan 15 kg dras med 60 N framåt. Friktionen är 15 N. Bestäm accelerationen.' },
        { typ: 'text', text: '5.4 ●● En boll med massan 0,45 kg får accelerationen 300 m/s² när den sparkas. Under tillslaget är fotens kraft så mycket större än alla andra krafter att de kan försummas. Hur stor är kraften från foten?' },
        { typ: 'text', text: '5.5 ●● Samma kraft verkar på en tom och en fullastad kundvagn. Den fullastade har fyra gånger så stor massa. Hur förhåller sig accelerationerna?' },
        { typ: 'text', text: '5.6 ●● Två personer drar i en låda åt motsatta håll med lika stora krafter, medan lådan redan glider framåt på ett friktionsfritt golv. Vad händer med lådans rörelse?' },
        { typ: 'text', text: '5.7 ●●● En bil med massan 1 100 kg kör i 25 m/s och bromsar till stillastående på 5,0 s. Hur stor är den bromsande resulterande kraften?' },
        { typ: 'text', text: '5.8 ●●● En hiss med massan 800 kg (med passagerare) ska accelerera uppåt med 1,5 m/s². Hur stor kraft måste vajern dra med?' }
      ]
    },
    {
      id: 'tyngden-och-fritt-fall', titel: 'Tyngden och fritt fall',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '6.1 ● Hur stor är tyngden av en ryggsäck med massan 6,0 kg?' },
        { typ: 'text', text: '6.2 ● En sten släpps och faller fritt i 2,0 s. Hur fort faller den då, och hur långt har den fallit?' },
        { typ: 'text', text: '6.3 ● Hur stor är tyngden av en person med massan 55 kg?' },
        { typ: 'text', text: '6.4 ●● Visa att enheten N/kg är samma sak som m/s².' },
        { typ: 'text', text: '6.5 ●● En nyckel tappas från ett tak och träffar marken efter 1,5 s. Hur högt är taket? Luftmotståndet försummas.' },
        { typ: 'text', text: '6.6 ●● Hur lång tid tar det för en sten att falla 45 m?' },
        { typ: 'text', text: '6.7 ●●● En fallskärmshoppare med massan 80 kg faller med konstant hastighet. Hur stort är luftmotståndet? Varför ändras inte hastigheten?' },
        { typ: 'text', text: '6.8 ●●● På månen är g = 1,62 m/s². Hur lång tid tar det för en hammare att falla 1,5 m där, jämfört med på jorden?' }
      ]
    },
    {
      id: 'friktionskoefficienten', titel: 'Friktionskoefficienten',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '7.1 ● En låda har normalkraften 200 N mot golvet. Friktionskoefficienten för glidning är 0,30. Hur stor är glidfriktionen?' },
        { typ: 'text', text: '7.2 ● Varför har ett block som ligger stilla på ett bord och som ingen drar i ingen friktion?' },
        { typ: 'text', text: '7.3 ● Vilken av ytorna ger störst friktionskoefficient mot ett bildäck: torr asfalt, våt asfalt eller blank is?' },
        { typ: 'text', text: '7.4 ● En kartong har normalkraften 80 N mot ett bord. μ_glid = 0,25. Hur stor är glidfriktionen när kartongen skjuts över bordet?' },
        { typ: 'text', text: '7.5 ●● En möbel med massan 50 kg står på ett golv. μ_vila = 0,45. Hur stor kraft behövs för att få den att börja glida?' },
        { typ: 'text', text: '7.6 ●● Du drar i en låda med 40 N, men den står still. μ_vila · F_N = 90 N. Hur stor är vilofriktionen?' },
        { typ: 'text', text: '7.7 ●● En skridskoåkare med massan 60 kg glider på is med μ_glid = 0,010. Hur stor är friktionen, och hur stor blir retardationen?' },
        { typ: 'text', text: '7.8 ●● Varför är friktionen inte alltid lika stor som friktionskoefficienten gånger normalkraften?' },
        { typ: 'text', text: '7.9 ●●● En bil i 20 m/s bromsar så hårt det går utan att hjulen låser sig. μ_vila = 0,80 på torr asfalt och 0,10 på is. Bestäm bromssträckan i båda fallen.' }
      ]
    },
    {
      id: 'rorelsemangd', titel: 'Rörelsemängd och impuls',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '8.1 ● Bestäm rörelsemängden för en löpare med massan 70 kg som springer i 8,0 m/s.' },
        { typ: 'text', text: '8.2 ● En lastbil med massan 12 000 kg och en bil med massan 1 200 kg kör båda i 20 m/s. Hur många gånger större rörelsemängd har lastbilen?' },
        { typ: 'text', text: '8.3 ●● En fotboll med massan 0,43 kg ligger stilla och sparkas iväg i 25 m/s. Foten har kontakt med bollen i 0,010 s. Bestäm impulsen och den genomsnittliga kraften.' },
        { typ: 'text', text: '8.4 ●● Förklara med impuls varför man böjer på knäna när man hoppar ner från en mur.' },
        { typ: 'text', text: '8.5 ●● En vuxen (80 kg) och ett barn (40 kg) står stilla på isen och knuffar ifrån varandra. Barnet får hastigheten 2,0 m/s. Vilken hastighet får den vuxne?' },
        { typ: 'text', text: '8.6 ●● Varför gäller rörelsemängdens bevarande ganska bra för skridskoåkare på is, men dåligt för två personer som knuffar ifrån varandra på grus?' },
        { typ: 'text', text: '8.7 ●●● En kanon med massan 900 kg står fritt på hjul och skjuter en kula med massan 6,0 kg i 300 m/s i förhållande till marken. Friktionen försummas. Med vilken hastighet rullar kanonen bakåt?' }
      ]
    },
    {
      id: 'tryck', titel: 'Tryck',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '9.1 ● En kraft på 600 N verkar på arean 0,20 m². Bestäm trycket.' },
        { typ: 'text', text: '9.2 ● Hur stor är tryckökningen från vattnet på 5,0 m djup?' },
        { typ: 'text', text: '9.3 ● Varför sjunker man mindre ner i snön med snöskor än med vanliga kängor?' },
        { typ: 'text', text: '9.4 ●● En elefant med massan 4 000 kg står på fyra fötter med arean 0,10 m² vardera. En person med massan 60 kg står på en klack med arean 1,0 cm². Vem utövar störst tryck mot marken? Vem trycker med störst kraft?' },
        { typ: 'text', text: '9.5 ●● Hur stort är det totala trycket på 15 m djup i en sjö? Lufttrycket är 101 kPa.' },
        { typ: 'text', text: '9.6 ●● Lufttrycket är ungefär 101 kPa. Hur stor kraft trycker luften med på en bordsskiva med arean 1,5 m²? Varför går bordet inte sönder?' },
        { typ: 'text', text: '9.7 ●●● På vilket djup är tryckökningen i havsvatten (ρ = 1 025 kg/m³) lika stor som lufttrycket, 101 kPa?' }
      ]
    },
    {
      id: 'lyftkraft', titel: 'Lyftkraft',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '10.1 ● En sten med volymen 2,0 dm³ är helt nedsänkt i vatten. Hur stor är lyftkraften?' },
        { typ: 'text', text: '10.2 ● Varför flyter en vanlig träbit men inte en kompakt sten av samma storlek?' },
        { typ: 'text', text: '10.3 ● En tom PET-flaska med volymen 1,5 dm³ hålls helt under vattnet. Hur stor är lyftkraften?' },
        { typ: 'text', text: '10.4 ●● En kloss med massan 3,0 kg och volymen 2,5 dm³ släpps i vatten. Flyter den eller sjunker den?' },
        { typ: 'text', text: '10.5 ●● En korkbit med densiteten 240 kg/m³ flyter i vatten. Hur stor del av korken ligger under ytan?' },
        { typ: 'text', text: '10.6 ●● Hur stor är lyftkraften i luft (ρ = 1,2 kg/m³) på en människa med volymen 70 dm³? Jämför med tyngden om massan är 70 kg.' },
        { typ: 'text', text: '10.7 ●● Två lika stora klossar, en av aluminium och en av bly, hålls helt nedsänkta i vatten. Är lyftkraften lika stor på båda? Förklara.' },
        { typ: 'text', text: '10.8 ●●● En heliumballong har volymen 0,010 m³. Ballongen med helium har massan 4,0 g. Kan den lyfta ett snöre med massan 5,0 g? (Luftens densitet 1,2 kg/m³.)' }
      ]
    },
    {
      id: 'problemlosning', titel: 'Problemlösning steg för steg',
      block: [
        { typ: 'rubrik', text: 'Uppgifter' },
        { typ: 'text', text: '11.1 ● Ange stegen i problemlösningsplanen i rätt ordning: rimlighet, rita, resulterande kraft, välj föremål och riktning, räkna med enheter, sätt ut krafterna, formel.' },
        { typ: 'text', text: '11.2 ●● En låda med massan 20 kg dras över ett golv med 100 N vågrätt. μ_glid = 0,25. Bestäm accelerationen.' },
        { typ: 'text', text: '11.3 ●● En bil med massan 1 000 kg accelererar från 0 till 20 m/s på 10 s. Friktion och luftmotstånd är tillsammans 400 N. Hur stor kraft driver bilen framåt?' },
        { typ: 'text', text: '11.4 ●● En sten släpps från 20 m höjd. Hur fort träffar den marken? Använd v² − v₀² = 2as. Kontrollera rimligheten.' },
        { typ: 'text', text: '11.5 ●●● En pulka med massan 12 kg åker med 6,0 m/s in på ett vågrätt snöfält och stannar efter 18 m. Bestäm friktionskoefficienten.' },
        { typ: 'text', text: '11.6 ●●● En låda med massan 25 kg står på ett lastbilsflak. μ_vila = 0,40. Hur kraftigt kan lastbilen accelerera innan lådan börjar glida?' }
      ]
    },
    {
      id: 'ledtradar', titel: 'Ledtrådar', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ledtrådar till ●●●-uppgifterna' },
        { typ: 'text', text: '1.6 Förflyttningen är rakt från start till slut – var på cirkeln står löparen?' },
        { typ: 'text', text: '2.7 Räkna ut tiden för varje del först. Medelhastighet = hela förflyttningen / hela tiden.' },
        { typ: 'text', text: '3.8 Dela upp arean i en del över och en del under tidsaxeln.' },
        { typ: 'text', text: '4.9 Jämför tecknen på hastighet och acceleration.' },
        { typ: 'text', text: '5.7 Räkna först ut accelerationen med a = Δv / Δt.' },
        { typ: 'text', text: '5.8 Två krafter verkar: vajern uppåt och tyngden nedåt. Resultanten ska ge accelerationen.' },
        { typ: 'text', text: '6.7 Konstant hastighet betyder att accelerationen är noll. Vad säger det om den resulterande kraften?' },
        { typ: 'text', text: '6.8 Lös ut t ur s = g · t² / 2.' },
        { typ: 'text', text: '7.9 Den bromsande kraften är μ · m · g. Vilken acceleration ger det? Använd sedan v² − v₀² = 2as.' },
        { typ: 'text', text: '8.7 Den totala rörelsemängden före skottet är noll.' },
        { typ: 'text', text: '9.7 Sätt ρ · g · h = 101 000 Pa och lös ut h.' },
        { typ: 'text', text: '10.8 Jämför lyftkraften (luftens densitet) med tyngden av ballong och snöre.' },
        { typ: 'text', text: '11.5 Räkna ut accelerationen med v² − v₀² = 2as. Friktionen är den enda kraften som bromsar.' },
        { typ: 'text', text: '11.6 Det är vilofriktionen som får lådan att följa med. Hur stor acceleration kan den som mest ge?' }
      ]
    },
    {
      id: 'svar', titel: 'Svar', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Svar till avsnitt 1 – Storheter med riktning' },
        { typ: 'text', text: '1.1 Vektorer: förflyttning, hastighet, kraft. Skalärer: massa, tid, temperatur, fart.' },
        { typ: 'text', text: '1.2 Sträckan är 500 m och förflyttningen 0 m.' },
        { typ: 'text', text: '1.3 Sträckan är 650 m. Förflyttningen är 300 − 200 + 150 = 250 m norrut.' },
        { typ: 'text', text: '1.4 Samma fart, 80 km/h, men olika hastighet, eftersom hastigheten också har en riktning.' },
        { typ: 'text', text: '1.5 12 − 30 = −18 m, alltså 18 m nedåt.' },
        { typ: 'text', text: '1.6 Sträckan är 3 · 400 + 200 = 1 400 m. Förflyttningen är banans diameter, ungefär 127 m.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 2 – Medelhastighet och momentanhastighet' },
        { typ: 'text', text: '2.1 10 m/s, 20 m/s och 30 m/s.' },
        { typ: 'text', text: '2.2 18 km/h, 54 km/h och 1 224 km/h.' },
        { typ: 'text', text: '2.3 15 m/s framåt.' },
        { typ: 'text', text: '2.4 6 000 m / 900 s ≈ 6,7 m/s, alltså 24 km/h.' },
        { typ: 'text', text: '2.5 Medelfarten är 100 / 64 ≈ 1,6 m/s. Medelhastigheten är 0, eftersom förflyttningen är noll.' },
        { typ: 'text', text: '2.6 Momentan fart: farten just nu, utan riktning.' },
        { typ: 'text', text: '2.7 Tiderna är 30/90 h = 20 min och 30/60 h = 30 min. Medelhastigheten blir 60 km / 50 min = 72 km/h.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 3 – Rörelsen i diagram' },
        { typ: 'text', text: '3.1 Läge–tid: föremålet står stilla. Hastighet–tid: föremålet rör sig med konstant hastighet.' },
        { typ: 'text', text: '3.2 40 / 8 = 5,0 m/s.' },
        { typ: 'text', text: '3.3 (20 − 50) / 10 = −3,0 m/s. Föremålet rör sig åt det negativa hållet.' },
        { typ: 'text', text: '3.4 4,0 · 12 = 48 m.' },
        { typ: 'text', text: '3.5 Accelerationen är 12 / 6 = 2,0 m/s². Förflyttningen är arean: (2 + 14) / 2 · 6 = 48 m.' },
        { typ: 'text', text: '3.6 25 · 10 + 25 · 5 / 2 = 250 + 62,5 ≈ 310 m.' },
        { typ: 'text', text: '3.7 Nej. Graferna skär varandra i den punkten, men de kan ha olika lutning – och lutningen är hastigheten. Den ena bilen kan till exempel köra om den andra just då.' },
        { typ: 'text', text: '3.8 Arean över axeln (första sekunden) är +5 m och under axeln −5 m. Förflyttningen är 0 – bollen är tillbaka. Sträckan är 5 + 5 = 10 m.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 4 – Acceleration' },
        { typ: 'text', text: '4.1 15 / 5,0 = 3,0 m/s².' },
        { typ: 'text', text: '4.2 (12 − 30) / 20 = −0,90 m/s².' },
        { typ: 'text', text: '4.3 (4,0 − 1,0) / 2,0 = 1,5 m/s².' },
        { typ: 'text', text: '4.4 Hastigheten ökar med 2 m/s varje sekund.' },
        { typ: 'text', text: '4.5 v = 4,0 · 6,0 = 24 m/s. s = 4,0 · 36 / 2 = 72 m.' },
        { typ: 'text', text: '4.6 t = 8,0 / 2,0 = 4,0 s. s = 8,0 · 4,0 − 2,0 · 16 / 2 = 16 m.' },
        { typ: 'text', text: '4.7 v² = 2as ger s = 70² / (2 · 2,5) = 980 m, alltså ungefär 1,0 km.' },
        { typ: 'text', text: '4.8 Bromssträckan växer med kvadraten på hastigheten: 12 · (70/50)² ≈ 24 m och 12 · (100/50)² = 48 m.' },
        { typ: 'text', text: '4.9 Accelerationen och hastigheten pekar åt samma håll, så farten ökar. v = −15 + (−2,0) · 3,0 = −21 m/s.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 5 – Newtons andra lag' },
        { typ: 'text', text: '5.1 12 / 4,0 = 3,0 m/s².' },
        { typ: 'text', text: '5.2 900 · 2,0 = 1 800 N.' },
        { typ: 'text', text: '5.3 (60 − 15) / 15 = 3,0 m/s².' },
        { typ: 'text', text: '5.4 0,45 · 300 = 140 N.' },
        { typ: 'text', text: '5.5 Den fullastade får en fjärdedel så stor acceleration.' },
        { typ: 'text', text: '5.6 Den resulterande kraften är noll, så accelerationen är noll. Lådan fortsätter att glida framåt i samma fart – tröghetslagen.' },
        { typ: 'text', text: '5.7 a = −25 / 5,0 = −5,0 m/s². F = 1 100 · 5,0 = 5 500 N bakåt.' },
        { typ: 'text', text: '5.8 Den resulterande kraften uppåt ska vara 800 · 1,5 = 1 200 N. Tyngden är 800 · 9,82 ≈ 7 860 N. Vajerkraften blir 7 860 + 1 200 ≈ 9 100 N.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 6 – Tyngden och fritt fall' },
        { typ: 'text', text: '6.1 6,0 · 9,82 ≈ 59 N.' },
        { typ: 'text', text: '6.2 v = 9,82 · 2,0 ≈ 20 m/s. s = 9,82 · 4,0 / 2 ≈ 20 m.' },
        { typ: 'text', text: '6.3 55 · 9,82 ≈ 540 N, ungefär 540 N.' },
        { typ: 'text', text: '6.4 1 N = 1 kg · m/s², så 1 N/kg = 1 kg · m/s² / kg = 1 m/s².' },
        { typ: 'text', text: '6.5 9,82 · 1,5² / 2 ≈ 11 m.' },
        { typ: 'text', text: '6.6 t = √(2 · 45 / 9,82) ≈ 3,0 s.' },
        { typ: 'text', text: '6.7 Luftmotståndet är lika stort som tyngden, 80 · 9,82 ≈ 790 N. Den resulterande kraften är noll, så accelerationen är noll.' },
        { typ: 'text', text: '6.8 Månen: √(2 · 1,5 / 1,62) ≈ 1,4 s. Jorden: √(2 · 1,5 / 9,82) ≈ 0,55 s.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 7 – Friktionskoefficienten' },
        { typ: 'text', text: '7.1 0,30 · 200 = 60 N.' },
        { typ: 'text', text: '7.2 Ingen kraft försöker få blocket att glida, så vilofriktionen behöver inte hålla emot något. Formeln anger bara den största möjliga vilofriktionen.' },
        { typ: 'text', text: '7.3 Torr asfalt (ungefär 0,8), sedan våt asfalt, och minst blank is (ungefär 0,1).' },
        { typ: 'text', text: '7.4 0,25 · 80 = 20 N.' },
        { typ: 'text', text: '7.5 F_N = 50 · 9,82 ≈ 491 N. Kraften behöver vara större än 0,45 · 491 ≈ 220 N.' },
        { typ: 'text', text: '7.6 40 N – precis så stor som behövs för att hålla emot, inte 90 N.' },
        { typ: 'text', text: '7.7 F = 0,010 · 60 · 9,82 ≈ 5,9 N. a = μ · g ≈ 0,098 m/s².' },
        { typ: 'text', text: '7.8 För ett föremål som står still är vilofriktionen bara så stor som behövs för att hålla emot. μ · F_N är det största värdet den kan få, inte värdet den alltid har.' },
        { typ: 'text', text: '7.9 a = μ · g. Asfalt: a ≈ 7,9 m/s², s = 20² / (2a) ≈ 25 m. Is: a ≈ 0,98 m/s², s ≈ 200 m.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 8 – Rörelsemängd och impuls' },
        { typ: 'text', text: '8.1 70 · 8,0 = 560 kg·m/s.' },
        { typ: 'text', text: '8.2 10 gånger större (240 000 mot 24 000 kg·m/s).' },
        { typ: 'text', text: '8.3 Impulsen är 0,43 · 25 ≈ 11 kg·m/s. Kraften blir 10,8 / 0,010 ≈ 1 100 N.' },
        { typ: 'text', text: '8.4 Ändringen av rörelsemängd är densamma, men inbromsningen tar längre tid. Då blir kraften mindre (F · Δt = Δp).' },
        { typ: 'text', text: '8.5 40 · 2,0 = 80 · v ger v = 1,0 m/s åt motsatt håll.' },
        { typ: 'text', text: '8.6 På isen är friktionen mycket liten, så systemet är nästan isolerat. På grus ger friktionen mot marken en stor yttre impuls.' },
        { typ: 'text', text: '8.7 6,0 · 300 = 900 · v ger v = 2,0 m/s bakåt.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 9 – Tryck' },
        { typ: 'text', text: '9.1 600 / 0,20 = 3 000 Pa = 3,0 kPa.' },
        { typ: 'text', text: '9.2 1 000 · 9,82 · 5,0 ≈ 49 000 Pa ≈ 49 kPa.' },
        { typ: 'text', text: '9.3 Snöskorna har större area. Samma tyngd fördelas på en större yta, så trycket mot snön blir mindre.' },
        { typ: 'text', text: '9.4 Elefanten: 4 000 · 9,82 / 0,40 ≈ 98 000 Pa ≈ 98 kPa. Klacken: 60 · 9,82 / 0,000 1 ≈ 5 900 000 Pa ≈ 5,9 MPa. Klacken trycker ungefär 60 gånger hårdare. Elefanten trycker däremot med mycket större kraft: ungefär 39 kN mot 0,59 kN.' },
        { typ: 'text', text: '9.5 1 000 · 9,82 · 15 ≈ 147 kPa. Totalt ≈ 248 kPa.' },
        { typ: 'text', text: '9.6 101 000 · 1,5 ≈ 150 000 N. Luften trycker lika mycket på undersidan.' },
        { typ: 'text', text: '9.7 h = 101 000 / (1 025 · 9,82) ≈ 10 m.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 10 – Lyftkraft' },
        { typ: 'text', text: '10.1 1 000 · 0,002 0 · 9,82 ≈ 20 N.' },
        { typ: 'text', text: '10.2 Den vanliga träbiten har lägre densitet än vatten, den kompakta stenen högre. Lyftkraften är lika stor för båda, eftersom de tränger undan lika mycket vatten, men stenens tyngd är större än lyftkraften. (Det finns träslag som sjunker och stenar som flyter, till exempel pimpsten.)' },
        { typ: 'text', text: '10.3 1 000 · 0,001 5 · 9,82 ≈ 15 N.' },
        { typ: 'text', text: '10.4 Tyngd ≈ 29 N. Lyftkraft helt nedsänkt ≈ 25 N. Tyngden är större – klossen sjunker. (Densiteten 1 200 kg/m³ är större än vattnets.)' },
        { typ: 'text', text: '10.5 240 / 1 000 = 0,24, alltså 24 procent.' },
        { typ: 'text', text: '10.6 1,2 · 0,070 · 9,82 ≈ 0,82 N, mot tyngden ≈ 690 N. Lyftkraften är under en promille av tyngden.' },
        { typ: 'text', text: '10.7 Ja. Lyftkraften beror bara på hur mycket vatten som trängs undan, alltså på volymen – inte på vad klossen är gjord av. Däremot är tyngderna olika.' },
        { typ: 'text', text: '10.8 Lyftkraft = 1,2 · 0,010 · 9,82 ≈ 0,12 N. Tyngd av ballong och snöre = 0,009 0 · 9,82 ≈ 0,088 N. Lyftkraften är större – ja.' },
        { typ: 'rubrik', text: 'Svar till avsnitt 11 – Problemlösning steg för steg' },
        { typ: 'text', text: '11.1 Rita · välj föremål och riktning · sätt ut krafterna · resulterande kraft · formel · räkna med enheter · rimlighet.' },
        { typ: 'text', text: '11.2 F_N ≈ 196 N, friktion ≈ 49 N, resulterande ≈ 51 N, a ≈ 2,5 m/s².' },
        { typ: 'text', text: '11.3 a = 2,0 m/s², resulterande kraft 2 000 N, drivande kraft 2 000 + 400 = 2 400 N.' },
        { typ: 'text', text: '11.4 v = √(2 · 9,82 · 20) ≈ 20 m/s ≈ 71 km/h. Rimligt för ett fall från ett sexvåningshus.' },
        { typ: 'text', text: '11.5 Framåt är positivt. v² − v₀² = 2as ger 0 − 6,0² = 2 · a · 18, alltså a = −1,0 m/s². Friktionen har beloppet 12 · 1,0 = 12 N och är riktad bakåt. μ = 12 / (12 · 9,82) ≈ 0,10.' },
        { typ: 'text', text: '11.6 Vilofriktionen ger lådan accelerationen, högst μ · g = 0,40 · 9,82 ≈ 3,9 m/s².' }
      ]
    }
  ]
});
