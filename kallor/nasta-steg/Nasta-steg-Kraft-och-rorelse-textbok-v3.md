# Nästa steg · Gymnasiets kraft och rörelse · TEXTBOK · v3 · 2026-11-07
# v3: fem justeringar efter andra granskningen (medelhastighet = förflyttning, kurvans böjning, två
# friktionsformler direkt, resulterande kraft bara i kraftuppgifter, isolerat system i sammanfattningen).
# v2: preciseringar efter granskning (momentan fart/hastighet, tecknad area, retardation = a motriktad v,
# fritt fall avgränsat, vilo-/glidfriktion som olikhet, isolerat system, ρgh som tryckökning, kraftpilar
# vid kraftproblem) och samma redovisning i alla exempel: Givet · Sökt · Lösning · Svar.
# Kapitel 4 Kraft och rörelse (i dag kapitel 3). Ligger på avsnittssidan III under djupdykningarna, och i den
# samlade listan "Nästa steg" på startsidan. Övningarna kommer i en egen bok (fliken Öva).
# Skriven av Claude. Innehållet följer gymnasiets Fysik 1 (ämnesplanen och en lärobokens innehållsförteckning
# som ämneslista – ingen text är hämtad därifrån).
# Strömformat: ## = avsnitt, ### = rubrik (påstående), stycke = textblock. *ord* = begrepp.
# [FORMEL: uttryck – förklaring], [EXEMPEL: rubrik] … [/EXEMPEL] = löst exempel, [MATTE: …] = hänvisning
# till boken Matematiken i fysiken, [BILD: …] = figur som motorn ritar. g = 9,82 N/kg = 9,82 m/s² genomgående.

## Så här använder du boken (onumrerad)

### Nästa steg är för dig som vill veta mer
Den här boken går vidare där fysikboken slutar. Den innehåller det som du möter i fysiken på gymnasiet, men skrivet för att du ska kunna läsa det redan nu. Boken förutsätter att du har läst Standard i Rörelse och kraft, och gärna Fördjupning. Du behöver inte kunna allt utantill, men du behöver känna igen begreppen resulterande kraft, tröghet, massa och tyngd.

Här gör fysiken något nytt: den räknar. Formlerna är inte till för att göra det svårare, utan för att beskriva det du redan förstår mer exakt. Varje formel i boken förklaras först med ord, och sedan används den i ett exempel.

### Läs boken i ordning och räkna själv innan du läser lösningen
Avsnitten bygger på varandra. Rörelsen kommer först, sedan krafterna som förändrar rörelsen och sist trycket. Hoppar du över ett avsnitt kan nästa bli svårt.

I varje avsnitt finns lösta exempel. Försök att lösa exemplet själv innan du läser lösningen. Täck över lösningen med handen eller ett papper, räkna, och jämför sedan. Det är där du lär dig mest. När du har läst ett avsnitt finns övningar till det i övningsboken under fliken Öva, med svar längst bak.

### Matematiken finns i en egen bok
I början av varje avsnitt står vad du behöver från matematiken, till exempel att lösa ut en storhet ur en formel eller att räkna med tiopotenser. Det finns i boken Matematiken i fysiken på startsidan. Känner du dig osäker, läs det avsnittet där först. Det är ingen omväg, det är en genväg.

## 1. Storheter med riktning (numrerad, id: storheter-med-riktning)

[MATTE: Storheter, enheter och prefix · Vektorer på rutat papper]

### Sträcka och förflyttning är inte samma sak
Tänk dig att du springer ett varv på en 400-metersbana och stannar där du började. Du har sprungit 400 meter. Ändå befinner du dig på exakt samma plats som när du startade. Fysiken skiljer därför på två saker. *Sträckan* är hur långt du har rört dig längs vägen, och den är 400 meter. *Förflyttningen* är hur långt det är från startpunkten till slutpunkten, i en viss riktning, och den är noll.

Förflyttningen är alltså en pil från där du började till där du slutade. Det spelar ingen roll vilken väg du tog. Går du 400 meter österut och sedan 300 meter västerut är sträckan 700 meter, men förflyttningen bara 100 meter österut.

### En vektor har både storlek och riktning
En storhet som bara har en storlek kallas en *skalär*. Massa, tid, temperatur och sträcka är skalärer. Det räcker att säga "5 kilogram" eller "20 sekunder". En storhet som också har en riktning kallas en *vektor*. Förflyttning är en vektor, och det är kraft också. Att säga "kraften är 30 newton" räcker inte, man måste också säga åt vilket håll den verkar.

Vektorer ritas som pilar. Pilens längd visar storleken och pilens riktning visar riktningen. Det är precis så du har ritat kraftpilar i fysikboken. När du lade ihop krafter i olika riktningar genom att sätta pilarna efter varandra, räknade du alltså redan med vektorer.

### Fart är en skalär, hastighet är en vektor
I vardagen används orden fart och hastighet som om de betydde samma sak. I fysiken är *fart* hur snabbt något rör sig, utan riktning. *Hastighet* är farten tillsammans med riktningen. En bil som kör 70 km/h norrut och en bil som kör 70 km/h söderut har samma fart men olika hastighet.

Skillnaden blir viktig när riktningen ändras. En bil som kör runt i en rondell med jämna 30 km/h har hela tiden samma fart, men hastigheten ändras hela tiden, eftersom riktningen ändras. Det är därför fysiken säger att bilen accelererar i rondellen, fast mätaren står still.

### Riktningen längs en linje anges med tecken
När allt rör sig längs en rak linje är det enkelt att ange riktningen. Man väljer en riktning som positiv, till exempel åt höger eller framåt. En förflyttning eller hastighet åt det hållet får plustecken, och en åt andra hållet får minustecken. En hastighet på −5 m/s betyder alltså 5 m/s åt det negativa hållet.

Vilket håll som är positivt väljer du själv, men du måste hålla fast vid valet genom hela uppgiften. Det är ett av de vanligaste felen på gymnasiet att byta riktning mitt i en lösning.

[EXEMPEL: Sträcka och förflyttning]
Ett barn går 120 m rakt fram till en kiosk, köper en glass och går 50 m tillbaka mot hemmet, där hon sätter sig på en bänk. Bestäm sträckan och förflyttningen.

Givet: 120 m mot kiosken, 50 m tillbaka. Sökt: sträckan och förflyttningen.

Lösning: Sträckan är hela vägen hon har gått: 120 m + 50 m = 170 m. För förflyttningen väljer vi riktningen mot kiosken som positiv. Hon går först +120 m och sedan −50 m. Förflyttningen blir 120 m − 50 m = 70 m, alltså 70 m i riktning mot kiosken.
Svar: Sträckan är 170 m och förflyttningen 70 m i riktning mot kiosken.
[/EXEMPEL]

## 2. Medelhastighet och momentanhastighet (numrerad, id: medelhastighet)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Medelhastigheten är förflyttningen delad med tiden
I fysikboken lärde du dig att medelfarten är hela sträckan delad med hela tiden. *Medelhastigheten* räknas på samma sätt, men med förflyttningen i stället för sträckan. Därför har medelhastigheten en riktning, och den kan bli noll även om du har rört dig mycket.

[FORMEL: v = Δs / Δt – v medelhastigheten (m/s), Δs förflyttningen (m), Δt tiden (s)]

Tecknet Δ, den grekiska bokstaven delta, betyder "förändring av". Δs är förändringen av läget, alltså förflyttningen, och Δt är förändringen av tiden, alltså hur lång tid det tog.

### Löparen på banan har medelhastigheten noll
Löparen som springer ett varv på 400-metersbanan på 80 sekunder har medelfarten 400 m / 80 s = 5 m/s. Men eftersom förflyttningen är noll är medelhastigheten också noll. Det låter konstigt, men det säger något viktigt: medelhastigheten beskriver hur läget har ändrats, inte hur mycket man har sprungit.

För en rörelse längs en rak linje åt ett och samma håll är medelfarten och medelhastighetens storlek lika. Det är först när rörelsen vänder eller svänger som de skiljer sig.

### Momentanhastigheten är hastigheten i ett visst ögonblick
Hastighetsmätaren i en bil visar inte medelhastigheten för hela resan. Den visar hur fort bilen kör just nu, alltså den *momentana farten*. Lägger man till riktningen, som mätaren inte visar, får man *momentanhastigheten*. Man kan tänka sig den som medelhastigheten under ett mycket kort tidsintervall, så kort att hastigheten inte hinner ändras.

Om du mäter cyklistens förflyttning under en hel minut kan du beräkna medelhastigheten. Om du mäter förflyttningen under en tiondels sekund får du något som ligger mycket nära momentanhastigheten. Ju kortare tid, desto närmare kommer man. På gymnasiet och senare beskrivs det exakt med derivata i matematiken.

### Enheten för hastighet i fysiken är meter per sekund
I vardagen mäts hastighet oftast i km/h, men i fysiken används meter per sekund, m/s. Det beror på att alla formler bygger på grundenheterna meter, kilogram och sekund. Räknar du med km/h i en formel som också innehåller newton blir svaret fel.

Omvandlingen är enkel att komma ihåg. En timme har 3 600 sekunder och en kilometer har 1 000 meter. Därför är 1 m/s = 3,6 km/h. Från km/h till m/s delar man med 3,6, och från m/s till km/h multiplicerar man med 3,6.

[EXEMPEL: Från km/h till m/s]
En bil kör i 90 km/h. Hur många meter kommer den varje sekund?

Givet: v = 90 km/h. Sökt: v i m/s.

Lösning: 90 km/h / 3,6 = 25 m/s. Bilen kommer alltså 25 meter varje sekund – ungefär längden av en simbassäng.
Svar: 25 m/s.
[/EXEMPEL]

[EXEMPEL: Medelhastighet med vändning]
En hund springer 30 m bort från sin ägare på 6 s, vänder och springer 10 m tillbaka på 4 s. Bestäm hundens medelfart och medelhastighet för hela rörelsen.

Givet: 30 m bort på 6 s, 10 m tillbaka på 4 s. Sökt: medelfart och medelhastighet.

Lösning: Sträckan är 30 m + 10 m = 40 m och tiden 6 s + 4 s = 10 s. Medelfarten blir 40 m / 10 s = 4 m/s. Förflyttningen är 30 m − 10 m = 20 m bort från ägaren. Medelhastigheten blir 20 m / 10 s = 2 m/s, riktad bort från ägaren.
Svar: Medelfarten är 4 m/s och medelhastigheten 2 m/s bort från ägaren.
[/EXEMPEL]

## 3. Rörelsen i diagram (numrerad, id: rorelsen-i-diagram)

[MATTE: Diagram – läsa av, lutning och area]

### Ett läge–tid-diagram visar var föremålet är vid varje tidpunkt
En rörelse kan beskrivas i ett diagram. I ett *läge–tid-diagram* står tiden på den vågräta axeln och läget på den lodräta. Varje punkt i diagrammet visar var föremålet befinner sig vid en viss tidpunkt. Det är samma sak som prickmodellen i fysikboken, men prickarna är nu satta i ett koordinatsystem.

Står föremålet stilla blir grafen en vågrät linje, eftersom läget inte ändras. Rör det sig med konstant hastighet blir grafen en rak, lutande linje. Ju brantare linjen lutar, desto snabbare går det. När hastigheten förändras blir grafen en kurva. Hur kurvan böjer sig beror på rörelsens riktning och accelerationen. Ett föremål som rör sig åt det positiva hållet allt snabbare hinner längre för varje sekund, och då böjer kurvan sig uppåt.

[BILD: tre läge–tid-diagram bredvid varandra – stilla (vågrät linje), konstant hastighet (rak lutande linje), ökande fart åt det positiva hållet (kurva som böjer uppåt)]

### Lutningen i ett läge–tid-diagram är hastigheten
Lutningen av en linje är hur mycket den stiger för varje steg åt höger. I ett läge–tid-diagram är det hur mycket läget ändras per sekund, och det är ju precis hastigheten. Om linjen stiger 12 meter på 4 sekunder är lutningen 12 m / 4 s = 3 m/s. Det är föremålets hastighet.

Lutar linjen nedåt är hastigheten negativ. Föremålet rör sig då tillbaka, åt det håll man har valt som negativt.

### Ett hastighet–tid-diagram visar hur hastigheten ändras
I ett *hastighet–tid-diagram* står tiden på den vågräta axeln och hastigheten på den lodräta. Nu betyder en vågrät linje något helt annat än förut: hastigheten är konstant. Föremålet rör sig, men lika fort hela tiden. En lutande linje betyder att hastigheten ändras, alltså att föremålet accelererar eller retarderar.

Det vanligaste felet med diagram är att blanda ihop de två sorterna. Titta därför alltid först på vad som står på den lodräta axeln innan du tolkar en graf.

### Lutningen i ett hastighet–tid-diagram är accelerationen
På samma sätt som förut är lutningen hur mycket storheten på den lodräta axeln ändras per sekund. Nu är det hastigheten som ändras, och hastighetsändringen per sekund kallas acceleration. En linje som stiger från 0 till 6 m/s på 4 sekunder har lutningen 6 m/s / 4 s = 1,5 m/s². Det betyder att hastigheten ökar med 1,5 m/s varje sekund.

### Arean under grafen i ett hastighet–tid-diagram är förflyttningen
Ett hastighet–tid-diagram innehåller också information om hur långt föremålet har rört sig. Om en bil kör med 20 m/s i 5 sekunder har den kört 20 · 5 = 100 meter. I diagrammet blir det en rektangel under den vågräta linjen, med höjden 20 och bredden 5. Rektangelns area är 100, precis förflyttningen.

Det gäller alltid, även när hastigheten ändras. Arean mellan grafen och tidsaxeln är förflyttningen. När grafen är en lutande rak linje blir området en triangel eller en parallelltrapets, och arean räknas ut med formlerna från matematiken.

Om hastigheten är negativ ligger grafen under tidsaxeln, och då räknas arean som negativ: föremålet rör sig tillbaka. Förflyttningen är summan av areorna med sina tecken. Sträckan är summan av areorna utan tecken, eftersom all väg räknas, framåt som bakåt.

[BILD: hastighet–tid-diagram för en cyklist – från 0 till 6 m/s på 4 s, sedan konstant 6 m/s i 6 s; triangeln och rektangeln under grafen skuggade]

[EXEMPEL: Att läsa ett hastighet–tid-diagram]
En cyklist startar från stillastående och ökar jämnt till 6 m/s på 4 s. Sedan cyklar hon med 6 m/s i 6 s till. Bestäm accelerationen under de första 4 sekunderna och hur långt hon kommer på de 10 sekunderna.

Givet: 0 → 6 m/s på 4 s, sedan 6 m/s i 6 s. Sökt: accelerationen och förflyttningen.

Lösning: Accelerationen är lutningen under de första 4 sekunderna: 6 m/s / 4 s = 1,5 m/s². Förflyttningen är arean under grafen. Den första delen är en triangel med basen 4 s och höjden 6 m/s: 4 · 6 / 2 = 12 m. Den andra delen är en rektangel med basen 6 s och höjden 6 m/s: 6 · 6 = 36 m. Totalt kommer hon 12 m + 36 m = 48 m.
Svar: Accelerationen är 1,5 m/s² och hon kommer 48 m.
[/EXEMPEL]

## 4. Acceleration (numrerad, id: acceleration)

[MATTE: Formler – sätta in och lösa ut · Proportionalitet och kvadrat]

### Accelerationen är hastighetsändringen per sekund
*Acceleration* är hur snabbt hastigheten ändras. Om en bil ökar sin hastighet med 3 m/s varje sekund har den accelerationen 3 meter per sekund per sekund. Det skrivs 3 m/s², och utläses "tre meter per sekundkvadrat".

[FORMEL: a = Δv / Δt – a accelerationen (m/s²), Δv hastighetsändringen (m/s), Δt tiden (s)]

En bil som går från 0 till 100 km/h på 9 sekunder har ökat hastigheten med 100 / 3,6 ≈ 27,8 m/s. Accelerationen blir 27,8 / 9 ≈ 3,1 m/s².

### Retardation är acceleration med minustecken
En bil som kör åt det positiva hållet och bromsar från 20 m/s till 0 på 4 sekunder har accelerationen (0 − 20) / 4 = −5 m/s². Minustecknet betyder att accelerationen är riktad åt det negativa hållet, alltså mot rörelsen. I vardagen kallas det retardation.

Men minustecknet betyder inte alltid att farten minskar. Det som avgör är om accelerationen och hastigheten pekar åt samma håll eller åt olika håll. Pekar de åt samma håll ökar farten, pekar de åt olika håll minskar den. En bil som kör åt det negativa hållet och gasar har både negativ hastighet och negativ acceleration, och dess fart ökar. Det är samma sak som du lärde dig med krafter: farten minskar när den resulterande kraften pekar mot rörelsen.

### Med konstant acceleration kan rörelsen räknas ut
Om accelerationen är konstant kan man räkna ut både hastigheten och förflyttningen vid varje tidpunkt. Det kallas *likformigt accelererad rörelse*. Den första formeln säger att hastigheten är starthastigheten plus det som har tillkommit:

[FORMEL: v = v₀ + a · t – v hastigheten efter tiden t, v₀ starthastigheten, a accelerationen, t tiden]

Den andra formeln ger förflyttningen. Den kommer från arean under grafen i ett hastighet–tid-diagram: en rektangel för starthastigheten och en triangel för ökningen.

[FORMEL: s = v₀ · t + a · t² / 2 – s förflyttningen, v₀ starthastigheten, a accelerationen, t tiden]

En tredje formel är praktisk när man inte känner tiden. Den fås genom att man kombinerar de två första.

[FORMEL: v² − v₀² = 2 · a · s – samband mellan hastighet, acceleration och förflyttning utan tiden]

### Bromssträckan växer med kvadraten på hastigheten
Den tredje formeln förklarar något du såg i djupdykningen om bromssträckan. När en bil bromsar till stillastående blir slutfarten noll, och formeln ger att bromssträckan är s = v₀² / (2 · bromsförmågan). Hastigheten står i kvadrat. Dubbel hastighet ger därför fyra gånger så lång bromssträcka, och tre gånger hastigheten ger nio gånger så lång.

Det är därför en liten ökning av hastigheten gör så stor skillnad. Från 50 till 70 km/h ökar hastigheten med 40 procent, men bromssträckan nästan fördubblas, eftersom 1,4² ≈ 2.

[EXEMPEL: En bil accelererar]
En bil startar från stillastående med accelerationen 3,0 m/s². Hur fort kör den efter 9,0 s, och hur långt har den kört då?

Givet: v₀ = 0, a = 3,0 m/s², t = 9,0 s. Sökt: v och s.

Lösning: v₀ = 0. Hastigheten blir v = 0 + 3,0 · 9,0 = 27 m/s, vilket är ungefär 97 km/h. Förflyttningen blir s = 0 · 9,0 + 3,0 · 9,0² / 2 = 3,0 · 81 / 2 ≈ 120 m.
Svar: 27 m/s (ungefär 97 km/h) och ungefär 120 m.
[/EXEMPEL]

[EXEMPEL: En bil bromsar]
En bil kör i 20 m/s och bromsar med accelerationen −5,0 m/s². Hur lång tid tar det att stanna, och hur lång är bromssträckan?

Givet: v₀ = 20 m/s, a = −5,0 m/s², v = 0. Sökt: t och s.

Lösning: Bilen har stannat när v = 0. Formeln v = v₀ + a · t ger 0 = 20 + (−5,0) · t, alltså t = 4,0 s. Bromssträckan blir s = 20 · 4,0 + (−5,0) · 4,0² / 2 = 80 − 40 = 40 m. Kontroll med den tredje formeln: 0² − 20² = 2 · (−5,0) · s ger s = 400 / 10 = 40 m. Samma svar.
Svar: 4,0 s och 40 m.
[/EXEMPEL]

## 5. Newtons andra lag (numrerad, id: newtons-andra-lag)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Den resulterande kraften ger föremålet en acceleration
I fysikboken lärde du dig att den resulterande kraften avgör hur rörelsen ändras. Pekar den framåt ökar farten, pekar den bakåt minskar den, och är den noll ändras ingenting. Isaac Newton gjorde det sambandet exakt. Hans andra lag säger att accelerationen är proportionell mot den resulterande kraften och omvänt proportionell mot massan.

[FORMEL: F = m · a – F den resulterande kraften (N), m massan (kg), a accelerationen (m/s²)]

Formeln kallas ofta *kraftekvationen*. Lägg märke till att det är den resulterande kraften som står i formeln, inte en av krafterna. Den vanligaste missen är att sätta in dragkraften och glömma friktionen.

### Dubbel kraft ger dubbel acceleration, dubbel massa halverad
Formeln säger två saker. Med samma massa ger dubbelt så stor resulterande kraft dubbelt så stor acceleration. Och med samma kraft ger dubbelt så stor massa bara hälften så stor acceleration. Det är tröghet uttryckt med siffror: massan är ett mått på hur svårt det är att ändra ett föremåls rörelse.

Det stämmer med det du känner i vardagen. En tom kundvagn får fart av en lätt knuff, medan en fullastad vagn kräver mycket mer kraft för samma acceleration.

### En newton är den kraft som ger 1 kg accelerationen 1 m/s²
Kraftekvationen visar vad enheten newton egentligen är. 1 N är den resulterande kraft som ger ett föremål med massan 1 kg accelerationen 1 m/s². Uttryckt i grundenheter är alltså 1 N = 1 kg · m/s².

Det förklarar också varför man måste räkna i kilogram, meter och sekunder. Formeln är byggd så att svaret blir i newton bara om massan är i kilogram och accelerationen i m/s².

### Tröghetslagen är ett specialfall av den andra lagen
Om den resulterande kraften är noll säger formeln att accelerationen också är noll. Hastigheten ändras alltså inte: föremålet ligger still eller rör sig rakt fram med samma fart. Det är tröghetslagen, Newtons första lag. Den första lagen är alltså inbyggd i den andra.

I över tvåtusen år trodde man, efter Aristoteles, att en kraft behövs för att hålla något i rörelse. Newtons andra lag säger något annat: en kraft behövs för att ändra rörelsen. Att en bil behöver motorns kraft för att hålla farten beror bara på att friktionen och luftmotståndet hela tiden försöker bromsa den.

[EXEMPEL: Blocket på bordet]
Ett block med massan 2,0 kg dras över ett bord med dragkraften 10 N. Friktionen är 4,0 N. Bestäm blockets acceleration.

Givet: m = 2,0 kg, dragkraft 10 N, friktion 4,0 N. Sökt: a.

Lösning: Den resulterande kraften är 10 N − 4,0 N = 6,0 N framåt. Kraftekvationen ger a = F / m = 6,0 / 2,0 = 3,0 m/s². Blocket ökar alltså sin hastighet med 3 m/s varje sekund.
Svar: 3,0 m/s² framåt.
[/EXEMPEL]

[EXEMPEL: Kraften som behövs]
En bil med massan 1 200 kg accelererar från stillastående till 20 m/s på 8,0 s. Hur stor är den resulterande kraften på bilen?

Givet: m = 1 200 kg, v₀ = 0, v = 20 m/s, t = 8,0 s. Sökt: den resulterande kraften.

Lösning: Först accelerationen: a = 20 / 8,0 = 2,5 m/s². Sedan kraftekvationen: F = 1 200 · 2,5 = 3 000 N. Motorns kraft måste vara större än så, eftersom en del går åt till att övervinna friktionen och luftmotståndet.
Svar: 3 000 N, alltså 3,0 kN.
[/EXEMPEL]

## 6. Tyngden och fritt fall (numrerad, id: tyngden-och-fritt-fall)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Tyngden är den kraft som ger fallaccelerationen
I fysikboken räknade du ut tyngden med F = m · g, där g ≈ 9,8 N/kg. Nu kan du se varför samma g dyker upp när något faller. Om tyngdkraften är den enda kraft som verkar på ett föremål är den också den resulterande kraften. Kraftekvationen ger då m · a = m · g, och massan tar ut sig: a = g.

Alla föremål som faller fritt får alltså samma acceleration, oavsett massa. Med fritt fall menas att tyngdkraften är den enda kraft som verkar, alltså att luftmotståndet är så litet att det kan försummas. Nära jordytan är g dessutom i stort sett konstant. Ett tungt föremål dras med större kraft, men det är också trögare, och de två effekterna tar ut varandra exakt. Det syntes tydligt 1971, när en astronaut på månen, där det inte finns någon luft, släppte en hammare och en fjäder samtidigt. De landade samtidigt.

### N/kg och m/s² är samma enhet
Tyngdfaktorn g skrivs ibland 9,82 N/kg och ibland 9,82 m/s². Det är samma sak. Eftersom 1 N = 1 kg · m/s² blir 1 N/kg = 1 kg · m/s² / kg = 1 m/s². Talet 9,82 betyder alltså två saker samtidigt: varje kilogram dras med 9,82 newton, och ett fritt fallande föremål ökar sin hastighet med 9,82 m/s varje sekund. I Sverige är g ungefär 9,82.

### Ett fritt fall följer formlerna för konstant acceleration
Eftersom accelerationen är konstant kan formlerna från avsnitt 4 användas direkt, med a = g. För ett föremål som släpps från stillastående blir hastigheten och fallsträckan:

[FORMEL: v = g · t och s = g · t² / 2 – v hastigheten (m/s), s fallsträckan (m), g = 9,82 m/s², t tiden (s)]

Efter en sekund faller en sten med ungefär 10 m/s och har fallit ungefär 5 meter. Efter två sekunder faller den med 20 m/s och har fallit 20 meter, och efter tre sekunder 30 m/s och 44 meter. Fallsträckan växer med kvadraten på tiden, och det är därför prickarna i prickmodellen för ett fallande föremål hamnar allt längre ifrån varandra.

### Luftmotståndet ger en gränshastighet
Formlerna gäller bara om luftmotståndet är litet. När farten ökar blir luftmotståndet större, och den resulterande kraften nedåt blir mindre. Accelerationen minskar därför efter hand. Till slut är luftmotståndet lika stort som tyngden, den resulterande kraften blir noll och farten slutar öka. Den farten kallas *gränshastigheten*.

En fallskärmshoppare som faller med magen nedåt når en gränshastighet på ungefär 55 m/s, omkring 200 km/h. När fallskärmen vecklas ut blir luftmotståndet plötsligt mycket större än tyngden. Den resulterande kraften pekar då uppåt, hopparen retarderar, och en ny, låg gränshastighet nås på ungefär 5 m/s.

[EXEMPEL: En sten släpps från en bro]
En sten släpps från en bro och träffar vattnet efter 3,0 s. Hur fort faller den när den träffar vattnet, och hur hög är bron? Luftmotståndet försummas.

Givet: v₀ = 0, t = 3,0 s, g = 9,82 m/s². Sökt: v och s.

Lösning: v = g · t = 9,82 · 3,0 ≈ 29 m/s. s = g · t² / 2 = 9,82 · 9,0 / 2 ≈ 44 m. Bron är ungefär 44 meter hög.
Svar: Ungefär 29 m/s, och bron är ungefär 44 m hög.
[/EXEMPEL]

## 7. Friktionskoefficienten (numrerad, id: friktionskoefficienten)

[MATTE: Formler – sätta in och lösa ut]

### Friktionen beror på normalkraften och på ytorna
I fysikboken lärde du dig att friktionen beror på ytorna och på hur hårt de trycks mot varandra. Det kan skrivas som en formel. Hur hårt ytorna trycks mot varandra är normalkraften, och hur ytorna är beskaffade uttrycks med ett tal, *friktionskoefficienten*, som skrivs med den grekiska bokstaven μ (my).

[FORMEL: F_vila ≤ μ_vila · F_N – vilofriktionen är högst μ_vila gånger normalkraften (N)]

[FORMEL: F_glid ≈ μ_glid · F_N – glidfriktionen är ungefär μ_glid gånger normalkraften (N); μ saknar enhet]

Det finns alltså två formler, en för föremål som står still och en för föremål som glider. Vad skillnaden betyder förklaras längre fram i avsnittet. Friktionskoefficienten saknar enhet, eftersom den är en kvot mellan två krafter. Den är ett mått på hur bra greppet är mellan just de två ytorna.

### Friktionskoefficienten är olika för olika ytor
För gummi mot torr asfalt är friktionskoefficienten ungefär 0,8. Det betyder att friktionen kan bli upp till 80 procent av normalkraften. För gummi mot is är den bara ungefär 0,1, och för en skridsko mot is ungefär 0,01. För trä mot trä ligger den omkring 0,3–0,5.

Värdena är ungefärliga, eftersom de beror på temperatur, fukt, smuts och hur slitna ytorna är. Det är därför bilprovning och vinterdäck handlar så mycket om just friktion.

### Vilofriktionen är större än glidfriktionen
I fysikboken såg du att friktionen följer med när du drar hårdare i ett block, upp till en gräns. Den friktion som håller blocket stilla kallas *vilofriktion*, och formeln ger dess största möjliga värde. När blocket väl glider verkar *glidfriktion*, som oftast är lite mindre. Därför finns det två friktionskoefficienter för samma ytor: en för vila och en för glidning.

Skillnaden kan skrivas så här. Så länge föremålet står still är vilofriktionen precis så stor som behövs för att hålla emot, men högst μ_vila · F_N. Den kan alltså vara allt från noll upp till det värdet. När föremålet glider är friktionen ungefär μ_glid · F_N, oberoende av hur hårt man drar. Ett block som ingen drar i har alltså ingen friktion alls, fast formeln skulle ge ett värde – formeln anger gränsen, inte friktionen i varje läge.

Det förklarar varför det är tyngst att få en tung låda att börja glida, och lättare att hålla den i gång. Det förklarar också varför ABS-bromsar fungerar: ett däck som rullar har vilofriktion mot vägen, medan ett låst hjul som glider bara har glidfriktion.

[EXEMPEL: Att skjuta en låda]
En låda med massan 30 kg står på ett golv. Friktionskoefficienten mellan lådan och golvet är 0,40. Hur stor kraft behövs för att få lådan att glida?

Givet: m = 30 kg, μ_vila = 0,40. Sökt: den kraft som behövs för att lådan ska börja glida.

Lösning: Normalkraften är lika stor som tyngden, eftersom golvet är vågrätt och ingen annan kraft verkar uppåt eller nedåt: F_N = m · g = 30 · 9,82 ≈ 295 N. Vilofriktionen kan högst bli 0,40 · 295 ≈ 118 N. En kraft på drygt 118 N behövs.
Svar: Drygt 118 N, alltså ungefär 0,12 kN.
[/EXEMPEL]

[EXEMPEL: Bromsa på torr asfalt och på is]
Hur kraftigt kan en bil som mest bromsa på torr asfalt (μ = 0,8) och på is (μ = 0,1)?

Givet: μ = 0,8 på asfalt och 0,1 på is. Sökt: den största bromsaccelerationen.

Lösning: Hjulen rullar utan att låsa sig, så det är vilofriktionen mellan däck och väg som bromsar bilen. Den är som störst μ · m · g. Kraftekvationen ger accelerationen a = μ · m · g / m = μ · g. Massan tar ut sig. På asfalt blir a = 0,8 · 9,82 ≈ 7,9 m/s², och på is a = 0,1 · 9,82 ≈ 1,0 m/s². Eftersom bromssträckan är s = v₀² / (2a) blir bromssträckan på is ungefär 8 gånger längre än på asfalt, vid samma hastighet.
Svar: Ungefär 7,9 m/s² på asfalt och 1,0 m/s² på is. Bromssträckan på is blir ungefär 8 gånger längre.
[/EXEMPEL]

## 8. Rörelsemängd och impuls (numrerad, id: rorelsemangd)

[MATTE: Formler – sätta in och lösa ut]

### Rörelsemängd är massa gånger hastighet
En lastbil och en cykel som kör lika fort är inte lika svåra att stoppa. Lastbilen har mycket mer "rörelse" i sig. Det beskrivs med storheten *rörelsemängd*, som är massan gånger hastigheten. Rörelsemängd är en vektor och har samma riktning som hastigheten.

[FORMEL: p = m · v – p rörelsemängden (kg·m/s), m massan (kg), v hastigheten (m/s)]

En personbil på 1 000 kg i 20 m/s har rörelsemängden 20 000 kg·m/s. En tennisboll på 0,06 kg i 50 m/s har bara 3 kg·m/s.

### Impulsen är kraften gånger tiden
För att ändra ett föremåls rörelsemängd behövs en kraft som verkar under en viss tid. Produkten av kraften och tiden kallas *impuls*, och den är lika med ändringen av rörelsemängden. Det är kraftekvationen skriven på ett annat sätt: F = m · a = m · Δv / Δt, alltså F · Δt = m · Δv.

[FORMEL: F · Δt = Δp – F kraften (N), Δt tiden kraften verkar (s), Δp ändringen av rörelsemängden (kg·m/s)]

Formeln säger något viktigt: samma ändring av rörelsemängd kan göras med en stor kraft under kort tid eller med en liten kraft under lång tid.

### Krockkudden förlänger tiden och minskar kraften
När en bil krockar ska förarens rörelsemängd ner till noll. Det går inte att ändra. Men tiden det tar kan ändras. Slår huvudet i ratten stoppas det på kanske en hundradels sekund, och kraften blir enorm. En krockkudde gör att inbromsningen tar ungefär tio gånger längre tid, och då blir kraften ungefär tio gånger mindre.

Samma princip finns överallt. Du böjer på knäna när du landar efter ett hopp, en målvakt för med händerna när hon tar emot bollen, och en klätterlina är töjbar för att stoppa ett fall mjukt. I alla fallen förlängs tiden så att kraften blir mindre.

### Rörelsemängden bevaras när föremål påverkar varandra
När två föremål knuffar på varandra verkar lika stora krafter på dem i motsatta riktningar, under exakt samma tid. Det är Newtons tredje lag, kraft och motkraft. Impulserna blir därför lika stora och motriktade, och den ena får lika mycket rörelsemängd framåt som den andra får bakåt. Den totala rörelsemängden ändras inte. Det kallas *rörelsemängdens bevarande*.

Det gäller under ett villkor: inga yttre krafter får ge systemet någon impuls, eller så tar de yttre krafterna ut varandra. Ett sådant system kallas *isolerat*. Två skridskoåkare på blank is är nästan isolerade: tyngden och normalkraften tar ut varandra, och friktionen är mycket liten. Två personer som knuffar ifrån varandra på en sandig grusgång är inte isolerade, eftersom friktionen mot marken snabbt bromsar dem.

Det förklarar raketen och astronauten från djupdykningarna. Raketen skickar gas bakåt med stor rörelsemängd, och får lika stor rörelsemängd framåt. Astronauten som knuffar iväg verktygslådan får lika stor rörelsemängd åt andra hållet, men eftersom hon har större massa blir hennes hastighet mindre.

[EXEMPEL: Krockkudden]
En person med massan 70 kg sitter i en bil som krockar i 15 m/s. Hur stor är den genomsnittliga kraften på personen om hon stoppas på 0,010 s, och om hon stoppas på 0,10 s av en krockkudde?

Givet: m = 70 kg, v₀ = 15 m/s, v = 0, Δt = 0,010 s eller 0,10 s. Sökt: den genomsnittliga kraften.

Lösning: Ändringen av rörelsemängd är 70 · 15 = 1 050 kg·m/s. Utan krockkudde: F = 1 050 / 0,010 = 105 000 N. Med krockkudde: F = 1 050 / 0,10 = 10 500 N. Krockkudden gör kraften tio gånger mindre.
Svar: 105 000 N utan krockkudde och 10 500 N med, alltså ungefär 110 kN och 11 kN.
[/EXEMPEL]

[EXEMPEL: Två skridskoåkare knuffar ifrån]
Två skridskoåkare står stilla på isen och knuffar ifrån varandra. Den ena har massan 50 kg och glider iväg med 3,0 m/s. Den andra har massan 75 kg. Hur fort glider hon åt andra hållet?

Givet: m₁ = 50 kg, v₁ = 3,0 m/s, m₂ = 75 kg, båda stilla från början. Sökt: v₂.

Lösning: Före knuffen är den totala rörelsemängden noll, och det måste den vara efteråt också. Den första får rörelsemängden 50 · 3,0 = 150 kg·m/s. Den andra måste få lika mycket åt andra hållet: 75 · v = 150, alltså v = 2,0 m/s.
Svar: 2,0 m/s åt motsatt håll.
[/EXEMPEL]

## 9. Tryck (numrerad, id: tryck)

[MATTE: Storheter, enheter och prefix · Tiopotenser · Formler – sätta in och lösa ut]

### Tryck är kraft per yta
En kraft kan vara fördelad över en stor eller en liten yta. *Tryck* är hur stor kraft som verkar på varje kvadratmeter. Enheten är pascal, Pa, och 1 Pa är en newton per kvadratmeter. Det är en mycket liten enhet, så tryck anges ofta i kilopascal, kPa.

[FORMEL: p = F / A – p trycket (Pa), F kraften vinkelrätt mot ytan (N), A arean (m²)]

Formeln förklarar varför en kniv skär och en spik går in i trä: kraften samlas på en mycket liten yta, och trycket blir enormt. Snöskor och breda däck gör tvärtom. De fördelar tyngden på en stor yta, så att trycket blir litet och man inte sjunker igenom.

### Lufttrycket kommer från tyngden av luften ovanför
Vi lever på botten av ett hav av luft som är flera mil djupt. Luften har massa, och tyngden av all luft ovanför oss trycker på allt vid jordytan. Vid havsytan är lufttrycket ungefär 101 kPa, alltså drygt 100 000 newton på varje kvadratmeter. Det motsvarar ungefär 10 newton på varje kvadratcentimeter, eller tyngden av ett kilo på en yta lika stor som en fingertopp.

Vi märker inte trycket, eftersom det verkar lika mycket åt alla håll och eftersom luften i kroppen trycker tillbaka lika mycket. Men om luften pumpas ut ur en burk trycks den ihop av lufttrycket utifrån.

### Trycket i en vätska ökar med djupet
I en vätska trycker tyngden av vätskan ovanför. Ju djupare man kommer, desto mer vätska finns ovanför, och desto större blir trycket. Trycket beror på vätskans densitet, tyngdfaktorn och djupet:

[FORMEL: Δp = ρ · g · h – Δp tryckökningen på grund av vätskan (Pa), ρ vätskans densitet (kg/m³), g = 9,82 N/kg, h djupet (m)]

För vatten med densiteten 1 000 kg/m³ blir trycket på 10 meters djup 1 000 · 9,82 · 10 ≈ 98 000 Pa, ungefär lika mycket som hela lufttrycket. För varje 10 meter man dyker ökar trycket alltså med ungefär ett lufttryck. Formeln ger alltså bara den del av trycket som vätskan står för. Det totala trycket som en dykare känner är lufttrycket vid ytan plus tryckökningen från vattnet.

### Trycket i en vätska verkar åt alla håll
Trycket i en vätska verkar inte bara nedåt. Det verkar lika mycket åt alla håll: uppåt, nedåt och åt sidorna. Gör man hål i en vattenfylld flaska på olika höjder sprutar vattnet ut åt sidan, och längst från de nedersta hålen, där trycket är störst.

Det är också därför en dammvägg måste vara tjockast längst ner. Det är där vattnet trycker hårdast mot den. Formen på behållaren spelar ingen roll – trycket på ett visst djup beror bara på djupet, inte på hur mycket vatten som finns runt omkring.

[EXEMPEL: Tryck mot golvet]
En person med massan 60 kg står på ett golv. Skosulorna har tillsammans arean 300 cm². Hur stort tryck utövar hon på golvet? Hur stort blir trycket om hon i stället står på en klack med arean 1,0 cm²?

Givet: m = 60 kg, A = 300 cm² respektive 1,0 cm². Sökt: trycket.

Lösning: Tyngden är 60 · 9,82 ≈ 590 N. Arean 300 cm² = 0,030 m². Trycket blir p = 590 / 0,030 ≈ 20 000 Pa = 20 kPa. På en klack: 1,0 cm² = 0,000 1 m², och p = 590 / 0,000 1 = 5 900 000 Pa ≈ 5,9 MPa – nästan 300 gånger större.
Svar: Ungefär 20 kPa på hela sulorna och ungefär 5,9 MPa på klacken.
[/EXEMPEL]

[EXEMPEL: Dykaren]
Hur stort är det totala trycket på en dykare på 25 m djup i en sjö?

Givet: h = 25 m, ρ = 1 000 kg/m³, lufttrycket 101 kPa. Sökt: det totala trycket.

Lösning: Tryckökningen från vattnet: Δp = 1 000 · 9,82 · 25 ≈ 246 000 Pa = 246 kPa. Lufttrycket är 101 kPa. Totalt blir trycket ungefär 347 kPa, alltså drygt tre gånger så stort som vid ytan.
Svar: Ungefär 347 kPa, drygt tre gånger trycket vid ytan.
[/EXEMPEL]

## 10. Lyftkraft (numrerad, id: lyftkraft)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Lyftkraften är en tryckskillnad
Varför flyter vissa saker? Tänk dig en kloss som är nedsänkt i vatten. Vattnet trycker på klossens alla sidor. Trycken mot sidorna tar ut varandra. Men undersidan ligger djupare än ovansidan, och där är trycket större. Vattnet trycker alltså hårdare uppåt mot undersidan än nedåt mot ovansidan. Skillnaden blir en resulterande kraft uppåt, *lyftkraften*.

Det betyder att lyftkraften inte är någon mystisk egenskap hos vatten. Den är en följd av att trycket ökar med djupet. Därför finns lyftkraft i alla vätskor och gaser, också i luft.

[BILD: kloss nedsänkt i vatten – tryckpilar mot alla sidor, längre pilar mot undersidan än mot ovansidan, och den resulterande lyftkraften uppåt]

### Lyftkraften är lika stor som tyngden av den undanträngda vätskan
Om man räknar ut tryckskillnaden för klossen med formeln p = ρ · g · h blir resultatet att lyftkraften är lika stor som tyngden av den vätska som klossen tränger undan. Det kallas *Arkimedes princip*, efter den grekiske matematikern som upptäckte den för mer än 2 200 år sedan.

[FORMEL: F_L = ρ · V · g – F_L lyftkraften (N), ρ vätskans densitet (kg/m³), V volymen av den undanträngda vätskan (m³), g = 9,82 N/kg]

Lägg märke till att det är vätskans densitet som står i formeln, inte föremålets. Lyftkraften beror bara på hur mycket vätska som trängs undan, inte på vad föremålet är gjort av.

### Ett föremål flyter om lyftkraften kan bli lika stor som tyngden
Ett föremål i vätska påverkas av två krafter: tyngdkraften nedåt och lyftkraften uppåt. Om föremålet helt nedsänkt får en lyftkraft som är större än tyngden stiger det mot ytan. Där sticker det upp en bit, tränger undan mindre vätska, och lyftkraften minskar tills den är exakt lika stor som tyngden. Då flyter det. Om lyftkraften är mindre än tyngden även när föremålet är helt nedsänkt sjunker det.

Det blir samma sak som att jämföra densiteter: ett föremål flyter om dess densitet är mindre än vätskans. Det var det du lärde dig om flytande och sjunkande i fysikboken – nu med krafterna som förklaring.

### Ett fartyg av stål flyter för att det är fullt av luft
Stål har en densitet på nästan 8 000 kg/m³, åtta gånger mer än vatten, och en stålkula sjunker direkt. Men ett fartyg är inte massivt. Det är ett skal av stål runt en stor volym luft. Fartygets medeldensitet, alltså hela massan delad med hela volymen, är mindre än vattnets. Därför kan det tränga undan så mycket vatten att lyftkraften blir lika stor som tyngden.

Samma princip förklarar varför en ballong med helium stiger. Helium har mycket lägre densitet än luft, och ballongen tränger undan luft som väger mer än ballongen själv.

[EXEMPEL: En kloss i vatten]
En kloss med volymen 1,0 dm³ hålls helt nedsänkt i vatten. Hur stor är lyftkraften? Flyter klossen om den är av trä med massan 0,60 kg, och om den är av järn med massan 7,9 kg?

Givet: V = 1,0 dm³, träklossen 0,60 kg, järnklossen 7,9 kg. Sökt: lyftkraften, och om klossarna flyter.

Lösning: 1,0 dm³ = 0,001 0 m³. Lyftkraften blir F_L = 1 000 · 0,001 0 · 9,82 ≈ 9,8 N. Träklossens tyngd är 0,60 · 9,82 ≈ 5,9 N, mindre än lyftkraften, så den stiger och flyter. Järnklossens tyngd är 7,9 · 9,82 ≈ 78 N, mycket större än lyftkraften, så den sjunker.
Svar: Lyftkraften är 9,8 N. Träklossen flyter och järnklossen sjunker.
[/EXEMPEL]

[EXEMPEL: Isberget]
Is har densiteten 917 kg/m³ och havsvatten 1 025 kg/m³. Hur stor del av ett isberg ligger under vattenytan?

Givet: ρ_is = 917 kg/m³, ρ_havsvatten = 1 025 kg/m³. Sökt: andelen under ytan.

Lösning: När isberget flyter är lyftkraften lika stor som tyngden. Tyngden är 917 · V · g, där V är hela isbergets volym. Lyftkraften är 1 025 · V_under · g. Sätter man dem lika tar g ut sig, och V_under / V = 917 / 1 025 ≈ 0,89. Ungefär 89 procent av isberget, nästan nio tiondelar, ligger under ytan.
Svar: Ungefär 89 procent, nästan nio tiondelar.
[/EXEMPEL]

## 11. Problemlösning steg för steg (numrerad, id: problemlosning)

[MATTE: Formler – sätta in och lösa ut · Värdesiffror och avrundning]

### Ett fysikproblem löses i samma steg varje gång
På gymnasiet består en stor del av fysiken av att lösa problem. Det som skiljer den som lyckas från den som fastnar är sällan räknandet, utan att ha en plan. Här är en plan som fungerar för nästan alla problem i den här boken.

1. Läs uppgiften och rita en bild. Markera vad som är givet och vad som söks.
2. Välj vilket föremål du tittar på, och välj en positiv riktning.
3. Handlar uppgiften om krafter: rita alla krafter som verkar på föremålet, och bara dem. Handlar den bara om rörelse (läge, hastighet, tid) behövs inga kraftpilar – då räcker en skiss av rörelsen.
4. Om uppgiften handlar om krafter: beräkna den resulterande kraften i varje aktuell riktning.
5. Använd kraftekvationen eller rörelseformlerna, och lös ut det som söks innan du sätter in siffror.
6. Räkna med enheter, och kontrollera att svaret har rätt enhet.
7. Pröva om svaret är rimligt.

### Rita alltid först
Det viktigaste steget är det första. Skriv också alltid upp lösningen på samma sätt: Givet, Sökt, Lösning och Svar, som i alla exempel i boken. En bild tvingar dig att bestämma vad som händer, och den visar ofta vad som saknas. Det är också i bilden som de flesta fel upptäcks, till exempel en glömd friktionskraft eller en kraft som verkar på fel föremål.

Kom ihåg vad du lärde dig om kraft och motkraft: de verkar på olika föremål. När du ritar krafterna på ett föremål ska motkrafterna inte vara med, eftersom de verkar på något annat.

### Kontrollera alltid om svaret är rimligt
Ett svar kan vara rätt uträknat men ändå fel, om en siffra har skrivits fel eller en enhet glömts. Fråga dig därför alltid: är det här ett rimligt svar? En bil som accelererar med 300 m/s² eller en låda som behöver 50 000 N för att skjutas har nästan säkert räknats fel.

Kontrollera också enheten. Om du söker en kraft och får svaret i m/s har något gått snett. Och ange inte fler värdesiffror i svaret än i de givna värdena – ett svar kan inte bli noggrannare än mätningarna det bygger på.

[EXEMPEL: Släden]
En släde med massan 40 kg dras från stillastående över vågrät snö med en kraft på 120 N, riktad rakt framåt. Friktionskoefficienten mellan släden och snön är 0,15. Hur fort åker släden efter 4,0 s, och hur långt har den kommit?

Lösning:
Steg 1–2: Givet m = 40 kg, F = 120 N, μ = 0,15, v₀ = 0, t = 4,0 s. Sökt v och s. Framåt är positivt.
Steg 3: På släden verkar dragkraften framåt, friktionen bakåt, tyngden nedåt och normalkraften uppåt.
Steg 4: Uppåt och nedåt tar tyngden och normalkraften ut varandra, så F_N = m · g = 40 · 9,82 ≈ 393 N. Friktionen blir F_f = 0,15 · 393 ≈ 59 N. Framåt blir den resulterande kraften 120 − 59 = 61 N.
Steg 5: a = F / m = 61 / 40 ≈ 1,53 m/s². Hastigheten efter 4,0 s: v = 0 + 1,53 · 4,0 ≈ 6,1 m/s. Sträckan: s = 1,53 · 4,0² / 2 ≈ 12 m. (Räkna med en extra decimal i mellanleden och avrunda först i svaret.)
Steg 6–7: Enheterna stämmer. 6 m/s är ungefär 22 km/h, rimligt för en släde som dras hårt på snö.
Svar: Ungefär 6,1 m/s och 12 m.
[/EXEMPEL]

## Sammanfattning (onumrerad)

### Det viktigaste
- En vektor har storlek och riktning. Förflyttning, hastighet, acceleration, kraft och rörelsemängd är vektorer.
- Medelhastigheten är förflyttningen delad med tiden: v = Δs / Δt. Momentanhastigheten är hastigheten i ett ögonblick.
- I ett läge–tid-diagram är lutningen hastigheten. I ett hastighet–tid-diagram är lutningen accelerationen och arean förflyttningen.
- Acceleration är hastighetsändringen per sekund: a = Δv / Δt. Vid konstant acceleration gäller v = v₀ + a · t och s = v₀ · t + a · t² / 2.
- Newtons andra lag: den resulterande kraften är massan gånger accelerationen, F = m · a. 1 N = 1 kg · m/s².
- Alla föremål faller fritt med samma acceleration g = 9,82 m/s². N/kg och m/s² är samma enhet.
- Friktionen är högst μ gånger normalkraften. Vilofriktionen är större än glidfriktionen.
- Rörelsemängd p = m · v. Impulsen F · Δt är lika med ändringen av rörelsemängden. Rörelsemängden bevaras när föremål påverkar varandra, om systemet är isolerat.
- Tryck är kraft per yta, p = F / A. I en vätska ökar trycket med djupet: p = ρ · g · h.
- Lyftkraften är lika med tyngden av den undanträngda vätskan: F_L = ρ · V · g.
- Lös problem i steg: rita, välj föremål, sätt ut krafterna, ta fram resultanten, räkna och pröva rimligheten.
