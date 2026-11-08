# Nästa steg · Gymnasiets kraft och rörelse · TEXTBOK · v4 · 2026-11-08
# v4: uppackad för självstudier utan genomgång. Härledningar steg för steg (s-formeln ur arean, den tidlösa formeln,
# impulsen, Arkimedes princip), alla mellanled i exemplen, ett stycke per idé, en ny figur (arean som ger s-formeln),
# korta [PROVA]-rutor efter nya formler med Facit sist. "Bromsförmågan" borttaget. Avsnitt, id och övriga figurer
# oförändrade.
# v3: fem justeringar efter andra granskningen. v2: preciseringar och Givet · Sökt · Lösning · Svar i alla exempel.
# Kapitel 4 Kraft och rörelse (i dag kapitel 3). Ligger på avsnittssidan III under djupdykningarna, och i den
# samlade listan "Nästa steg" på startsidan. Övningarna kommer i en egen bok (fliken Öva).
# Skriven av Claude. Innehållet följer gymnasiets Fysik 1 (ämnesplanen och en lärobokens innehållsförteckning
# som ämneslista – ingen text är hämtad därifrån).
# Strömformat: ## = avsnitt, ### = rubrik (påstående), stycke = textblock. *ord* = begrepp.
# [FORMEL: uttryck – förklaring], [EXEMPEL: rubrik] … [/EXEMPEL] = löst exempel, [MATTE: …] = hänvisning
# till boken Matematiken i fysiken, [PROVA] … [/PROVA] = korta kontrollfrågor (svar i Facit),
# [BILD: …] = figur som motorn ritar. g = 9,82 N/kg = 9,82 m/s² genomgående.

## Så här använder du boken (onumrerad)

### Nästa steg är för dig som vill veta mer
Den här boken går vidare där fysikboken slutar. Den innehåller det som du möter i fysiken på gymnasiet, men skrivet för att du ska kunna läsa det redan nu, på egen hand. Boken förutsätter att du har läst Fördjupning i Rörelse och kraft. Du behöver inte kunna allt utantill, men du behöver känna igen begreppen resulterande kraft, tröghet, massa och tyngd.

Här gör fysiken något nytt: den räknar. Formlerna är inte till för att göra det svårare, utan för att beskriva det du redan förstår mer exakt. Varje formel i boken förklaras först med ord. Sedan visas var den kommer ifrån, och sist används den i ett exempel där varje steg är utskrivet.

### Läs boken i ordning och räkna själv innan du läser lösningen
Avsnitten bygger på varandra. Rörelsen kommer först, sedan krafterna som förändrar rörelsen och sist trycket. Hoppar du över ett avsnitt kan nästa bli svårt.

I varje avsnitt finns lösta exempel. Försök att lösa exemplet själv innan du läser lösningen. Täck över lösningen med handen eller ett papper, räkna, och jämför sedan. Det är där du lär dig mest.

### Pröva dig själv efter varje ny formel
Efter de flesta nya formler finns en ruta som heter Prova själv. Där finns en eller två korta frågor. Svaren står i Facit längst bak i boken. Kan du svara är du redo att läsa vidare. Kan du inte svara, läs stycket före rutan en gång till innan du går vidare. Det tar en minut och sparar mycket tid senare.

När du har läst ett avsnitt finns fler övningar i övningsboken under fliken Öva, med ledtrådar och svar längst bak.

### Matematiken finns i en egen bok
I början av varje avsnitt står vad du behöver från matematiken, till exempel att lösa ut en storhet ur en formel eller att räkna med tiopotenser. Det finns i boken Matematiken i fysiken på startsidan. Känner du dig osäker, läs det avsnittet där först. Det är ingen omväg, det är en genväg.

## 1. Storheter med riktning (numrerad, id: storheter-med-riktning)

[MATTE: Storheter, enheter och prefix · Vektorer på rutat papper]

### Sträcka och förflyttning är inte samma sak
Tänk dig att du springer ett varv på en 400-metersbana och stannar där du började. Du har sprungit 400 meter. Ändå befinner du dig på exakt samma plats som när du startade. Fysiken skiljer därför på två saker.

*Sträckan* är hur långt du har rört dig längs vägen. Efter varvet är den 400 meter. *Förflyttningen* är hur långt det är från startpunkten till slutpunkten, i en viss riktning. Efter varvet är den noll, eftersom du står där du började.

Förflyttningen är alltså en pil från där du började till där du slutade. Det spelar ingen roll vilken väg du tog. Går du 400 meter österut och sedan 300 meter västerut är sträckan 700 meter, men förflyttningen bara 100 meter österut.

### En vektor har både storlek och riktning
En storhet som bara har en storlek kallas en *skalär*. Massa, tid, temperatur och sträcka är skalärer. Det räcker att säga "5 kilogram" eller "20 sekunder".

En storhet som också har en riktning kallas en *vektor*. Förflyttning är en vektor, och det är kraft också. Att säga "kraften är 30 newton" räcker inte. Man måste också säga åt vilket håll den verkar.

Vektorer ritas som pilar. Pilens längd visar storleken och pilens riktning visar riktningen. Det är precis så du har ritat kraftpilar i fysikboken. När du lade ihop krafter i olika riktningar genom att sätta pilarna efter varandra, räknade du alltså redan med vektorer.

### Fart är en skalär, hastighet är en vektor
I vardagen används orden fart och hastighet som om de betydde samma sak. I fysiken är *fart* hur snabbt något rör sig, utan riktning. *Hastighet* är farten tillsammans med riktningen. En bil som kör 70 km/h norrut och en bil som kör 70 km/h söderut har samma fart men olika hastighet.

Skillnaden blir viktig när riktningen ändras. En bil som kör runt i en rondell med jämna 30 km/h har hela tiden samma fart. Men hastigheten ändras hela tiden, eftersom riktningen ändras. Det är därför fysiken säger att bilen accelererar i rondellen, fast hastighetsmätaren står still.

### Riktningen längs en linje anges med tecken
När allt rör sig längs en rak linje är det enkelt att ange riktningen. Man väljer en riktning som positiv, till exempel åt höger eller framåt. En förflyttning eller hastighet åt det hållet får plustecken, och en åt andra hållet får minustecken. En hastighet på −5 m/s betyder alltså 5 m/s åt det negativa hållet.

Vilket håll som är positivt väljer du själv, men du måste hålla fast vid valet genom hela uppgiften. Det är ett av de vanligaste felen på gymnasiet att byta riktning mitt i en lösning. Skriv därför alltid upp ditt val, till exempel "framåt är positivt", innan du börjar räkna.

[EXEMPEL: Sträcka och förflyttning]
Ett barn går 120 m rakt fram till en kiosk, köper en glass och går 50 m tillbaka mot hemmet, där hon sätter sig på en bänk. Bestäm sträckan och förflyttningen.

Givet: 120 m mot kiosken, 50 m tillbaka. Sökt: sträckan och förflyttningen.

Lösning: Sträckan är hela vägen hon har gått, åt båda hållen:
120 m + 50 m = 170 m
För förflyttningen väljer vi riktningen mot kiosken som positiv. Hon går först +120 m och sedan −50 m:
120 m + (−50 m) = 70 m
Förflyttningen är positiv, alltså riktad mot kiosken.
Svar: Sträckan är 170 m och förflyttningen 70 m i riktning mot kiosken.
[/EXEMPEL]

[PROVA]
1a. Är tid en skalär eller en vektor? Är kraft en skalär eller en vektor?
1b. Du går 50 m framåt och sedan 80 m tillbaka. Framåt är positivt. Vilken är förflyttningen, med tecken?
[/PROVA]

## 2. Medelhastighet och momentanhastighet (numrerad, id: medelhastighet)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Medelhastigheten är förflyttningen delad med tiden
I fysikboken lärde du dig att medelfarten är hela sträckan delad med hela tiden. *Medelhastigheten* räknas på samma sätt, men med förflyttningen i stället för sträckan. Därför har medelhastigheten en riktning, och den kan bli noll även om du har rört dig mycket.

[FORMEL: v = Δs / Δt – v medelhastigheten (m/s), Δs förflyttningen (m), Δt tiden (s)]

Tecknet Δ är den grekiska bokstaven delta. Den betyder "förändring av" och räknas alltid som slutvärdet minus startvärdet. Δs är förändringen av läget, alltså förflyttningen. Δt är förändringen av tiden, alltså hur lång tid det tog.

Δ används i hela boken. Står du till exempel vid 3 m efter 2 s och vid 15 m efter 6 s, är Δs = 15 m − 3 m = 12 m och Δt = 6 s − 2 s = 4 s.

### Löparen på banan har medelhastigheten noll
Löparen som springer ett varv på 400-metersbanan på 80 sekunder har medelfarten 400 m / 80 s = 5 m/s. Men eftersom förflyttningen är noll är medelhastigheten också noll: 0 m / 80 s = 0 m/s.

Det låter konstigt, men det säger något viktigt. Medelhastigheten beskriver hur läget har ändrats, inte hur mycket man har sprungit. För en rörelse längs en rak linje åt ett och samma håll är medelfarten och medelhastighetens storlek lika. Det är först när rörelsen vänder eller svänger som de skiljer sig.

### Momentanhastigheten är hastigheten i ett visst ögonblick
Hastighetsmätaren i en bil visar inte medelhastigheten för hela resan. Den visar hur fort bilen kör just nu, alltså den *momentana farten*. Lägger man till riktningen, som mätaren inte visar, får man *momentanhastigheten*.

Man kan tänka sig momentanhastigheten som medelhastigheten under ett mycket kort tidsintervall. Om du mäter en cyklists förflyttning under en hel minut får du medelhastigheten för den minuten. Under den tiden kan hon ha bromsat och ökat flera gånger. Om du i stället mäter förflyttningen under en tiondels sekund hinner hastigheten nästan inte ändras, och då får du något som ligger mycket nära momentanhastigheten. Ju kortare tid, desto närmare kommer man. På gymnasiet beskrivs det exakt med derivata i matematiken.

### Enheten för hastighet i fysiken är meter per sekund
I vardagen mäts hastighet oftast i km/h, men i fysiken används meter per sekund, m/s. Det beror på att formlerna bygger på grundenheterna meter, kilogram och sekund. Räknar du med km/h i en formel som också innehåller newton blir svaret fel.

En timme har 3 600 sekunder och en kilometer har 1 000 meter. Därför är 1 m/s = 3,6 km/h. Från km/h till m/s delar man med 3,6, och från m/s till km/h multiplicerar man med 3,6. Ett sätt att komma ihåg riktningen: talet i m/s är alltid det mindre.

[EXEMPEL: Från km/h till m/s]
En bil kör i 90 km/h. Hur många meter kommer den varje sekund?

Givet: v = 90 km/h. Sökt: v i m/s.

Lösning: Från km/h till m/s delar vi med 3,6:
90 / 3,6 = 25
Bilen kommer alltså 25 meter varje sekund – ungefär längden av en simbassäng.
Svar: 25 m/s.
[/EXEMPEL]

[EXEMPEL: Medelhastighet med vändning]
En hund springer 30 m bort från sin ägare på 6 s, vänder och springer 10 m tillbaka på 4 s. Bestäm hundens medelfart och medelhastighet för hela rörelsen.

Givet: 30 m bort på 6 s, 10 m tillbaka på 4 s. Sökt: medelfart och medelhastighet.

Lösning: Vi väljer riktningen bort från ägaren som positiv.
Sträckan: 30 m + 10 m = 40 m. Tiden: 6 s + 4 s = 10 s.
Medelfart: 40 m / 10 s = 4 m/s
Förflyttningen: 30 m + (−10 m) = 20 m
Medelhastighet: 20 m / 10 s = 2 m/s, positiv, alltså bort från ägaren.
Svar: Medelfarten är 4 m/s och medelhastigheten 2 m/s bort från ägaren.
[/EXEMPEL]

[PROVA]
2a. Skriv 54 km/h i m/s.
2b. En boll rullar 6 m framåt och 2 m tillbaka på sammanlagt 4 s. Vilken är medelhastigheten?
[/PROVA]

## 3. Rörelsen i diagram (numrerad, id: rorelsen-i-diagram)

[MATTE: Diagram – läsa av, lutning och area]

### Ett läge–tid-diagram visar var föremålet är vid varje tidpunkt
En rörelse kan beskrivas i ett diagram. I ett *läge–tid-diagram* står tiden på den vågräta axeln och läget på den lodräta. Varje punkt i diagrammet visar var föremålet befinner sig vid en viss tidpunkt. Det är samma sak som prickmodellen i fysikboken, men prickarna är nu satta i ett koordinatsystem.

Diagrammets form avslöjar rörelsen. Står föremålet stilla blir grafen en vågrät linje, eftersom läget inte ändras. Rör det sig med konstant hastighet blir grafen en rak, lutande linje, eftersom läget ändras lika mycket varje sekund. Ju brantare linjen lutar, desto snabbare går det.

När hastigheten förändras blir grafen en kurva. Ett föremål som rör sig åt det positiva hållet allt snabbare hinner längre för varje sekund. Då blir varje steg uppåt i diagrammet större än det förra, och kurvan böjer sig uppåt.

[BILD: tre läge–tid-diagram bredvid varandra – stilla (vågrät linje), konstant hastighet (rak lutande linje), ökande fart åt det positiva hållet (kurva som böjer uppåt)]

### Lutningen i ett läge–tid-diagram är hastigheten
En linjes *lutning* är hur mycket den stiger för varje steg åt höger. Man tar två punkter på linjen, räknar ut hur mycket den stiger mellan dem och delar med hur långt åt höger de ligger från varandra.

I ett läge–tid-diagram stiger linjen med Δs och går åt höger med Δt. Lutningen blir Δs / Δt, och det är ju precis hastigheten från avsnitt 2. Om linjen stiger från 2 m till 14 m mellan 0 s och 4 s blir lutningen:
(14 m − 2 m) / (4 s − 0 s) = 12 m / 4 s = 3 m/s
Det är föremålets hastighet.

Lutar linjen nedåt blir Δs negativ, och då blir hastigheten negativ. Föremålet rör sig då tillbaka, åt det håll man har valt som negativt.

### Ett hastighet–tid-diagram visar hur hastigheten ändras
I ett *hastighet–tid-diagram* står tiden på den vågräta axeln och hastigheten på den lodräta. Nu betyder en vågrät linje något helt annat än förut: hastigheten är konstant. Föremålet rör sig, men lika fort hela tiden. En lutande linje betyder att hastigheten ändras, alltså att föremålet accelererar eller bromsar.

Det vanligaste felet med diagram är att blanda ihop de två sorterna. De kan se exakt likadana ut. Titta därför alltid först på vad som står på den lodräta axeln innan du tolkar en graf.

### Lutningen i ett hastighet–tid-diagram är accelerationen
Lutningen räknas på samma sätt som förut, men nu är det hastigheten som ändras. En linje som stiger från 0 till 6 m/s på 4 sekunder har lutningen:
(6 m/s − 0 m/s) / (4 s − 0 s) = 1,5 m/s²
Hastighetsändringen per sekund kallas acceleration, och den kommer i nästa avsnitt. Redan nu kan du se vad talet betyder: hastigheten ökar med 1,5 m/s varje sekund.

### Arean under grafen i ett hastighet–tid-diagram är förflyttningen
Ett hastighet–tid-diagram visar också hur långt föremålet har rört sig. Börja med det enklaste fallet. En bil kör med 20 m/s i 5 sekunder. Då har den kört 20 m/s · 5 s = 100 m.

Rita det i diagrammet. Grafen är en vågrät linje på höjden 20 m/s, från 0 s till 5 s. Under den bildas en rektangel med höjden 20 m/s och bredden 5 s. Rektangelns area är höjden gånger bredden, 20 m/s · 5 s = 100 m. Det är precis förflyttningen. Även enheten stämmer: m/s gånger s blir m.

Det gäller också när hastigheten ändras: arean mellan grafen och tidsaxeln är förflyttningen. Är grafen en lutande rak linje blir ytan en triangel eller en rektangel med en triangel ovanpå. Arean räknas ut med formlerna från matematiken: rektangeln är bas gånger höjd, och triangeln är bas gånger höjd delat med två.

Om hastigheten är negativ ligger grafen under tidsaxeln, och då räknas arean som negativ, eftersom föremålet rör sig tillbaka. Förflyttningen är summan av areorna med sina tecken. Sträckan är summan av areorna utan tecken, eftersom all väg räknas, framåt som bakåt.

[BILD: hastighet–tid-diagram för en cyklist – från 0 till 6 m/s på 4 s, sedan konstant 6 m/s i 6 s; triangeln och rektangeln under grafen skuggade]

[EXEMPEL: Att läsa ett hastighet–tid-diagram]
En cyklist startar från stillastående och ökar jämnt till 6 m/s på 4 s. Sedan cyklar hon med 6 m/s i 6 s till. Bestäm accelerationen under de första 4 sekunderna och hur långt hon kommer på de 10 sekunderna.

Givet: 0 → 6 m/s på 4 s, sedan 6 m/s i 6 s. Sökt: accelerationen och förflyttningen.

Lösning: Accelerationen är lutningen under de första 4 sekunderna:
(6 m/s − 0 m/s) / 4 s = 1,5 m/s²
Förflyttningen är arean under grafen. Den består av två delar.
Triangeln, 0–4 s: bas 4 s och höjd 6 m/s. Area: 4 · 6 / 2 = 12 m
Rektangeln, 4–10 s: bas 6 s och höjd 6 m/s. Area: 6 · 6 = 36 m
Tillsammans: 12 m + 36 m = 48 m
Svar: Accelerationen är 1,5 m/s² och hon kommer 48 m.
[/EXEMPEL]

[PROVA]
3a. I ett hastighet–tid-diagram är grafen en vågrät linje på 4 m/s från 0 s till 3 s. Hur långt har föremålet rört sig?
3b. I ett läge–tid-diagram är grafen en vågrät linje. Vad gör föremålet?
[/PROVA]

## 4. Acceleration (numrerad, id: acceleration)

[MATTE: Formler – sätta in och lösa ut · Proportionalitet och kvadrat]

### Accelerationen är hastighetsändringen per sekund
*Acceleration* är hur snabbt hastigheten ändras. Om en bil ökar sin hastighet med 3 m/s varje sekund har den accelerationen 3 meter per sekund per sekund. Det skrivs 3 m/s², och utläses "tre meter per sekundkvadrat". Kvadraten kommer av att man delar med sekunder två gånger: först för att få en hastighet, sedan för att få hastighetsändringen per sekund.

[FORMEL: a = Δv / Δt – a accelerationen (m/s²), Δv hastighetsändringen (m/s), Δt tiden (s)]

En bil som går från 0 till 100 km/h på 9 sekunder har ökat hastigheten med 100 km/h. Först gör vi om till m/s: 100 / 3,6 ≈ 27,8 m/s. Sedan delar vi med tiden: 27,8 m/s / 9 s ≈ 3,1 m/s². Bilen ökar alltså sin hastighet med ungefär 3 m/s varje sekund.

### Acceleration med minustecken betyder att accelerationen pekar åt det negativa hållet
En bil kör åt det positiva hållet med 20 m/s och bromsar till stillastående på 4 sekunder. Hastighetsändringen är slutvärdet minus startvärdet: 0 − 20 = −20 m/s. Accelerationen blir −20 m/s / 4 s = −5 m/s². Minustecknet betyder att accelerationen pekar åt det negativa hållet, alltså bakåt, mot rörelsen. I vardagen kallas det att bilen *retarderar*.

Men ett minustecken betyder inte alltid att farten minskar. Det som avgör är om accelerationen och hastigheten pekar åt samma håll eller åt olika håll. Pekar de åt samma håll ökar farten. Pekar de åt olika håll minskar farten.

Tänk på en bil som backar, alltså kör åt det negativa hållet, och samtidigt gasar. Hastigheten är negativ och blir allt mer negativ, så accelerationen är också negativ. Men farten ökar, eftersom hastigheten och accelerationen pekar åt samma håll. Det är samma sak som du lärde dig med krafter: farten minskar när den resulterande kraften pekar mot rörelsen.

[PROVA]
4a. En cyklist ökar från 2 m/s till 8 m/s på 3 s. Hur stor är accelerationen?
4b. En boll rör sig åt det negativa hållet och får en positiv acceleration. Ökar eller minskar farten?
[/PROVA]

### Med konstant acceleration ökar hastigheten lika mycket varje sekund
Om accelerationen är konstant kallas rörelsen *likformigt accelererad*. Då kan man räkna ut både hastigheten och förflyttningen vid varje tidpunkt. Vi börjar med hastigheten.

En bil har starthastigheten v₀ och accelerationen a. Varje sekund ökar hastigheten med a. Efter 1 sekund har den ökat med a, efter 2 sekunder med 2 · a, och efter t sekunder med a · t. Hastigheten är därför starthastigheten plus det som har tillkommit:

[FORMEL: v = v₀ + a · t – v hastigheten efter tiden t, v₀ starthastigheten, a accelerationen, t tiden]

Det lilla nollan i v₀ betyder "vid tiden noll", alltså i början. En bil som startar med 5 m/s och accelererar med 2 m/s² har efter 3 s hastigheten 5 + 2 · 3 = 11 m/s.

### Förflyttningen är arean under grafen
För förflyttningen använder vi det du lärde dig i avsnitt 3: förflyttningen är arean under grafen i ett hastighet–tid-diagram. Vid konstant acceleration är grafen en rak linje som börjar på v₀ och stiger till v₀ + a · t. Ytan under den kan delas i två delar.

Den nedre delen är en rektangel med höjden v₀ och bredden t. Dess area är v₀ · t. Det är den sträcka bilen hade kört om den hade hållit starthastigheten hela tiden.

Den övre delen är en triangel med bredden t och höjden a · t, som är hastighetsökningen. Dess area är bas gånger höjd delat med två: t · a · t / 2 = a · t² / 2. Det är den extra sträckan som accelerationen ger.

Lägger man ihop de två delarna får man formeln för förflyttningen:

[BILD: hastighet–tid-diagram vid konstant acceleration – rak linje från v₀ vid t = 0 till v₀ + a·t vid tiden t. Ytan under är delad i en rektangel (höjd v₀, bredd t, märkt "v₀ · t") och en triangel ovanpå (höjd a·t, bredd t, märkt "a · t² / 2"). Exempeldata för ritningen: v₀ = 2 m/s, a = 1 m/s², t = 4 s.]

[FORMEL: s = v₀ · t + a · t² / 2 – s förflyttningen, v₀ starthastigheten, a accelerationen, t tiden]

Startar föremålet från stillastående är v₀ = 0. Då försvinner rektangeln, och formeln blir bara s = a · t² / 2.

### En tredje formel behövs när tiden inte är känd
Ibland vet man hastigheterna och accelerationen men inte tiden. Då kan man ta bort tiden ur formlerna. Det görs i två steg, och här står de för den som vill följa med. Du behöver inte kunna härledningen, men du ska kunna använda resultatet.

Steg 1: Lös ut t ur den första formeln. v = v₀ + a · t ger v − v₀ = a · t, och t = (v − v₀) / a.

Steg 2: Använd att förflyttningen också är medelhastigheten gånger tiden. När hastigheten ökar jämnt är medelhastigheten mitt emellan start och slut: (v₀ + v) / 2. Alltså s = (v₀ + v) / 2 · t. Sätt in t från steg 1:
s = (v₀ + v) / 2 · (v − v₀) / a
Gånga båda sidor med 2 · a:
2 · a · s = (v + v₀) · (v − v₀)
Multiplicera ut parenteserna: (v + v₀) · (v − v₀) = v² − v₀². Då blir det:

[FORMEL: v² − v₀² = 2 · a · s – samband mellan hastighet, acceleration och förflyttning utan tiden]

### Bromssträckan växer med kvadraten på hastigheten
Den tredje formeln förklarar något du såg i fysikboken om bromssträckan. När en bil bromsar till stillastående är sluthastigheten v = 0. Accelerationen är negativ, eftersom den pekar mot rörelsen. Formeln blir:
0 − v₀² = 2 · a · s
Lös ut s genom att dela båda sidor med 2 · a:
s = −v₀² / (2 · a)
Eftersom a är negativ blir s positiv. Bromsar bilen till exempel med −5 m/s² från 20 m/s blir s = −400 / (2 · (−5)) = −400 / (−10) = 40 m.

Det viktiga är att starthastigheten står i kvadrat. Dubbel hastighet ger därför fyra gånger så lång bromssträcka, och tre gånger hastigheten ger nio gånger så lång. Från 50 till 70 km/h ökar hastigheten med 40 procent, men bromssträckan nästan fördubblas, eftersom 1,4² ≈ 2.

[EXEMPEL: En bil accelererar]
En bil startar från stillastående med accelerationen 3,0 m/s². Hur fort kör den efter 9,0 s, och hur långt har den kört då?

Givet: v₀ = 0, a = 3,0 m/s², t = 9,0 s. Sökt: v och s.

Lösning: Hastigheten:
v = v₀ + a · t = 0 + 3,0 · 9,0 = 27 m/s
27 m/s är 27 · 3,6 ≈ 97 km/h.
Förflyttningen. Eftersom v₀ = 0 är s = a · t² / 2:
s = 3,0 · 9,0² / 2 = 3,0 · 81 / 2 = 243 / 2 ≈ 120 m
Svar: 27 m/s (ungefär 97 km/h) och ungefär 120 m.
[/EXEMPEL]

[EXEMPEL: En bil bromsar]
En bil kör i 20 m/s och bromsar med accelerationen −5,0 m/s². Hur lång tid tar det att stanna, och hur lång är bromssträckan?

Givet: v₀ = 20 m/s, a = −5,0 m/s², v = 0 (bilen stannar). Sökt: t och s.

Lösning: Tiden. Utgå från v = v₀ + a · t och sätt in värdena:
0 = 20 + (−5,0) · t
Dra ifrån 20 på båda sidor:
−20 = −5,0 · t
Dela båda sidor med −5,0:
t = 4,0 s
Bromssträckan med s-formeln:
s = v₀ · t + a · t² / 2 = 20 · 4,0 + (−5,0) · 4,0² / 2 = 80 + (−5,0) · 16 / 2 = 80 − 40 = 40 m
Kontroll med den tredje formeln, utan tiden:
0² − 20² = 2 · (−5,0) · s
−400 = −10 · s
s = 40 m. Samma svar.
Svar: 4,0 s och 40 m.
[/EXEMPEL]

[PROVA]
4c. En vagn startar från stillastående och accelererar med 2,0 m/s² i 5,0 s. Hur långt har den kommit?
4d. En bil bromsar från 30 m/s till 0 med accelerationen −6,0 m/s². Hur lång är bromssträckan? Använd den tredje formeln.
[/PROVA]

## 5. Newtons andra lag (numrerad, id: newtons-andra-lag)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Den resulterande kraften ger föremålet en acceleration
I fysikboken lärde du dig att den resulterande kraften avgör hur rörelsen ändras. Pekar den framåt ökar farten, pekar den bakåt minskar den, och är den noll ändras ingenting. Isaac Newton gjorde det sambandet exakt. Hans andra lag säger att accelerationen är proportionell mot den resulterande kraften och omvänt proportionell mot massan.

[FORMEL: F = m · a – F den resulterande kraften (N), m massan (kg), a accelerationen (m/s²)]

Formeln kallas ofta *kraftekvationen*. Lägg märke till att det är den resulterande kraften som står i formeln, inte en av krafterna. Den vanligaste missen är att sätta in dragkraften och glömma friktionen. Räkna därför alltid ut den resulterande kraften först, och sätt in den sedan.

### Dubbel kraft ger dubbel acceleration, dubbel massa halverad
Lös ut accelerationen ur formeln: a = F / m. Nu syns två saker. Kraften står i täljaren, så med samma massa ger dubbelt så stor resulterande kraft dubbelt så stor acceleration. Massan står i nämnaren, så med samma kraft ger dubbelt så stor massa bara hälften så stor acceleration.

Det är tröghet uttryckt med siffror. Massan är ett mått på hur svårt det är att ändra ett föremåls rörelse. Det stämmer med det du känner i vardagen. En tom kundvagn får fart av en lätt knuff, medan en fullastad vagn kräver mycket mer kraft för samma acceleration.

### En newton är den kraft som ger 1 kg accelerationen 1 m/s²
Kraftekvationen visar vad enheten newton egentligen är. Sätt in m = 1 kg och a = 1 m/s²: F = 1 kg · 1 m/s² = 1 kg · m/s². Det är 1 N. Uttryckt i grundenheter är alltså 1 N = 1 kg · m/s².

Det förklarar också varför man måste räkna i kilogram, meter och sekunder. Formeln är byggd så att svaret blir i newton bara om massan är i kilogram och accelerationen i m/s². Sätter du in massan i gram blir svaret tusen gånger för stort.

### Tröghetslagen är ett specialfall av den andra lagen
Om den resulterande kraften är noll säger formeln att 0 = m · a. Massan är inte noll, så accelerationen måste vara noll. Hastigheten ändras alltså inte: föremålet ligger still eller rör sig rakt fram med samma fart. Det är tröghetslagen, Newtons första lag. Den första lagen är alltså inbyggd i den andra.

I över tvåtusen år trodde man, efter Aristoteles, att en kraft behövs för att hålla något i rörelse. Newtons andra lag säger något annat: en kraft behövs för att ändra rörelsen. Att en bil behöver motorns kraft för att hålla farten beror bara på att friktionen och luftmotståndet hela tiden bromsar den. Motorns kraft tar ut dem, så att den resulterande kraften blir noll.

[EXEMPEL: Blocket på bordet]
Ett block med massan 2,0 kg dras över ett bord med dragkraften 10 N. Friktionen är 4,0 N. Bestäm blockets acceleration.

Givet: m = 2,0 kg, dragkraft 10 N framåt, friktion 4,0 N bakåt. Sökt: a.

Lösning: Framåt är positivt. Den resulterande kraften:
F = 10 N − 4,0 N = 6,0 N framåt
Lös ut a ur kraftekvationen genom att dela båda sidor med m:
a = F / m = 6,0 / 2,0 = 3,0 m/s²
Blocket ökar alltså sin hastighet med 3 m/s varje sekund.
Svar: 3,0 m/s² framåt.
[/EXEMPEL]

[EXEMPEL: Kraften som behövs]
En bil med massan 1 200 kg accelererar från stillastående till 20 m/s på 8,0 s. Hur stor är den resulterande kraften på bilen?

Givet: m = 1 200 kg, v₀ = 0, v = 20 m/s, t = 8,0 s. Sökt: den resulterande kraften.

Lösning: Kraftekvationen kräver accelerationen, så den räknas ut först:
a = Δv / Δt = (20 − 0) / 8,0 = 2,5 m/s²
Sedan kraftekvationen:
F = m · a = 1 200 · 2,5 = 3 000 N
Motorns kraft måste vara större än så, eftersom en del går åt till att ta ut friktionen och luftmotståndet. 3 000 N är det som blir över och ger accelerationen.
Svar: 3 000 N, alltså 3,0 kN.
[/EXEMPEL]

[PROVA]
5a. En resulterande kraft på 12 N verkar på en låda med massan 4,0 kg. Hur stor blir accelerationen?
5b. Kraften fördubblas och massan är densamma. Vad händer med accelerationen?
[/PROVA]

## 6. Tyngden och fritt fall (numrerad, id: tyngden-och-fritt-fall)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Tyngden är den kraft som ger fallaccelerationen
I fysikboken räknade du ut tyngden med F = m · g, där g ≈ 9,8 N/kg. Nu kan du se varför samma g dyker upp när något faller.

Om tyngdkraften är den enda kraft som verkar på ett föremål är den också den resulterande kraften. Kraftekvationen säger att den resulterande kraften är m · a. Tyngdkraften är m · g. De är samma kraft, så:
m · a = m · g
Dela båda sidor med m. Då försvinner massan:
a = g

Alla föremål som faller fritt får alltså samma acceleration, oavsett massa. Med *fritt fall* menas att tyngdkraften är den enda kraft som verkar, alltså att luftmotståndet är så litet att det kan bortses ifrån.

### Ett tungt och ett lätt föremål faller lika fort utan luft
Det kan kännas fel att en tung sten och en lätt sten faller lika fort. Förklaringen är att två saker växer lika mycket. Ett tungt föremål dras med större kraft, men det är också trögare och svårare att få fart på. Har stenen dubbelt så stor massa dras den med dubbelt så stor kraft, men den behöver också dubbelt så stor kraft för samma acceleration. Effekterna tar ut varandra exakt.

Det syntes tydligt 1971, när en astronaut på månen, där det inte finns någon luft, släppte en hammare och en fjäder samtidigt. De landade samtidigt. På jorden faller fjädern långsammare, men det beror på luftmotståndet, inte på att den är lätt.

### N/kg och m/s² är samma enhet
Tyngdfaktorn g skrivs ibland 9,82 N/kg och ibland 9,82 m/s². Det är samma sak. Eftersom 1 N = 1 kg · m/s² blir:
1 N/kg = 1 kg · m/s² / kg = 1 m/s²
Talet 9,82 betyder alltså två saker samtidigt. Varje kilogram dras med 9,82 newton, och ett fritt fallande föremål ökar sin hastighet med 9,82 m/s varje sekund. I Sverige är g ungefär 9,82.

### Ett fritt fall följer formlerna för konstant acceleration
Eftersom accelerationen är konstant kan formlerna från avsnitt 4 användas direkt, med a = g. För ett föremål som släpps från stillastående är v₀ = 0. Då blir v = 0 + g · t och s = 0 · t + g · t² / 2, alltså:

[FORMEL: v = g · t och s = g · t² / 2 – v hastigheten (m/s), s fallsträckan (m), g = 9,82 m/s², t tiden (s)]

Räknar vi med g ≈ 10 m/s² för att se mönstret blir det så här. Efter en sekund faller en sten med ungefär 10 m/s och har fallit ungefär 5 meter. Efter två sekunder faller den med 20 m/s och har fallit 20 meter. Efter tre sekunder faller den med 30 m/s och har fallit 45 meter.

Hastigheten ökar lika mycket varje sekund, men fallsträckan växer med kvadraten på tiden. Det är därför prickarna i prickmodellen för ett fallande föremål hamnar allt längre ifrån varandra.

[PROVA]
6a. En sten släpps och faller fritt i 2,0 s. Hur fort faller den då? Använd g = 9,82 m/s².
6b. En boll väger dubbelt så mycket som en annan. Hur mycket större blir dess acceleration i fritt fall?
[/PROVA]

### Luftmotståndet ger en gränshastighet
Formlerna gäller bara om luftmotståndet är litet. Så här går det när det inte är det. I början är farten låg och luftmotståndet litet, och föremålet accelererar nästan med g. När farten ökar blir luftmotståndet större. Den resulterande kraften nedåt, tyngden minus luftmotståndet, blir då mindre, och accelerationen minskar.

Till slut är luftmotståndet lika stort som tyngden. Den resulterande kraften blir noll, accelerationen blir noll och farten slutar öka. Den farten kallas *gränshastigheten*.

En fallskärmshoppare som faller med magen nedåt når en gränshastighet på ungefär 55 m/s, omkring 200 km/h. När fallskärmen vecklas ut blir luftmotståndet plötsligt mycket större än tyngden. Den resulterande kraften pekar då uppåt, och hopparen bromsar in. När farten har minskat så mycket att luftmotståndet åter är lika stort som tyngden når hopparen en ny, låg gränshastighet på ungefär 5 m/s.

[EXEMPEL: En sten släpps från en bro]
En sten släpps från en bro och träffar vattnet efter 3,0 s. Hur fort faller den när den träffar vattnet, och hur hög är bron? Luftmotståndet försummas.

Givet: v₀ = 0, t = 3,0 s, g = 9,82 m/s². Sökt: v och s.

Lösning: Hastigheten:
v = g · t = 9,82 · 3,0 ≈ 29 m/s
Fallsträckan:
s = g · t² / 2 = 9,82 · 3,0² / 2 = 9,82 · 9,0 / 2 ≈ 44 m
Bron är lika hög som stenen har fallit.
Svar: Ungefär 29 m/s, och bron är ungefär 44 m hög.
[/EXEMPEL]

## 7. Friktionskoefficienten (numrerad, id: friktionskoefficienten)

[MATTE: Formler – sätta in och lösa ut]

### Friktionen beror på normalkraften och på ytorna
I fysikboken lärde du dig att friktionen beror på ytorna och på hur hårt de trycks mot varandra. Det kan skrivas som en formel. Hur hårt ytorna trycks mot varandra är normalkraften, F_N. Hur ytorna är beskaffade uttrycks med ett tal, *friktionskoefficienten*, som skrivs med den grekiska bokstaven μ (my).

Friktionskoefficienten saknar enhet, eftersom den är en kraft delad med en annan kraft, och då tar enheterna ut varandra. Den är ett mått på hur bra greppet är mellan just de två ytorna.

### Friktionskoefficienten är olika för olika ytor
För gummi mot torr asfalt är friktionskoefficienten ungefär 0,8. Det betyder att friktionen kan bli upp till 80 procent av normalkraften. För gummi mot is är den bara ungefär 0,1, och för en skridsko mot is ungefär 0,01. För trä mot trä ligger den omkring 0,3–0,5.

Värdena är ungefärliga, eftersom de beror på temperatur, fukt, smuts och hur slitna ytorna är. Det är därför vinterdäck och däckens mönsterdjup handlar så mycket om just friktion.

### Vilofriktionen anpassar sig upp till en gräns
I fysikboken såg du att friktionen följer med när du drar hårdare i ett block som står still. Drar du med 5 N håller friktionen emot med 5 N. Drar du med 10 N håller den emot med 10 N. Den friktion som håller blocket stilla kallas *vilofriktion*. Den är alltid precis så stor som behövs, men den kan inte bli hur stor som helst. Den största vilofriktionen är μ_vila gånger normalkraften:

[FORMEL: F_vila ≤ μ_vila · F_N – vilofriktionen är högst μ_vila gånger normalkraften (N)]

Tecknet ≤ betyder "mindre än eller lika med". Formeln anger alltså gränsen, inte friktionen i varje läge. Ett block som ingen drar i har ingen friktion alls, fast formeln skulle ge ett värde. Först när du drar hårdare än gränsen börjar blocket glida.

### Glidfriktionen är ungefär konstant och oftast mindre
När blocket väl glider verkar *glidfriktion*. Den beror inte på hur hårt man drar, utan är ungefär lika stor hela tiden:

[FORMEL: F_glid ≈ μ_glid · F_N – glidfriktionen är ungefär μ_glid gånger normalkraften (N); μ saknar enhet]

För samma två ytor är μ_glid oftast lite mindre än μ_vila. Därför är det tyngst att få en tung låda att börja glida, och lättare att hålla den i gång. Det förklarar också varför ABS-bromsar fungerar. Ett däck som rullar har vilofriktion mot vägen, och den kan bli större än glidfriktionen hos ett låst hjul som glider.

[EXEMPEL: Att skjuta en låda]
En låda med massan 30 kg står på ett vågrätt golv. Friktionskoefficienten för vila mellan lådan och golvet är 0,40. Hur stor kraft behövs för att få lådan att börja glida?

Givet: m = 30 kg, μ_vila = 0,40. Sökt: den kraft som behövs för att lådan ska börja glida.

Lösning: Först normalkraften. Golvet är vågrätt och inget annat trycker eller lyfter, så normalkraften är lika stor som tyngden:
F_N = m · g = 30 · 9,82 ≈ 295 N
Sedan den största vilofriktionen:
F_vila,max = μ_vila · F_N = 0,40 · 295 ≈ 118 N
Lådan börjar glida när du skjuter hårdare än så.
Svar: Drygt 118 N, alltså ungefär 0,12 kN.
[/EXEMPEL]

[EXEMPEL: Bromsa på torr asfalt och på is]
Hur kraftigt kan en bil som mest bromsa på torr asfalt (μ = 0,8) och på is (μ = 0,1)?

Givet: μ = 0,8 på asfalt och 0,1 på is. Sökt: den största bromsaccelerationen.

Lösning: Hjulen rullar utan att låsa sig, så det är vilofriktionen mellan däck och väg som bromsar bilen. På en vågrät väg är normalkraften m · g. Den största friktionen blir:
F = μ · m · g
Friktionen är den enda kraften längs vägen, så den är den resulterande kraften. Kraftekvationen ger accelerationens storlek:
a = F / m = μ · m · g / m
Massan står både över och under bråkstrecket och tar ut sig:
a = μ · g
På asfalt: a = 0,8 · 9,82 ≈ 7,9 m/s². På is: a = 0,1 · 9,82 ≈ 1,0 m/s².
Bromsningen beror alltså inte på bilens massa. Bromssträckan växer när bromsningen blir svagare: med åtta gånger svagare bromsning blir bromssträckan ungefär åtta gånger längre vid samma hastighet.
Svar: Ungefär 7,9 m/s² på asfalt och 1,0 m/s² på is. Bromssträckan på is blir ungefär 8 gånger längre.
[/EXEMPEL]

[PROVA]
7a. En kälke med normalkraften 200 N glider på snö där μ_glid = 0,05. Hur stor är glidfriktionen?
7b. Ett block ligger stilla på ett bord och ingen drar i det. Hur stor är friktionen?
[/PROVA]

## 8. Rörelsemängd och impuls (numrerad, id: rorelsemangd)

[MATTE: Formler – sätta in och lösa ut]

### Rörelsemängd är massa gånger hastighet
En lastbil och en cykel som kör lika fort är inte lika svåra att stoppa. Lastbilen har mycket mer "rörelse" i sig. Det beskrivs med storheten *rörelsemängd*, som är massan gånger hastigheten. Rörelsemängd är en vektor och har samma riktning som hastigheten.

[FORMEL: p = m · v – p rörelsemängden (kg·m/s), m massan (kg), v hastigheten (m/s)]

En personbil på 1 000 kg i 20 m/s har rörelsemängden 1 000 · 20 = 20 000 kg·m/s. En tennisboll på 0,06 kg i 50 m/s har bara 0,06 · 50 = 3 kg·m/s. Bokstaven p för rörelsemängd ska inte blandas ihop med p för tryck i avsnitt 9. Det är två olika storheter som råkar ha samma bokstav.

### Impulsen är kraften gånger tiden
För att ändra ett föremåls rörelsemängd behövs en kraft som verkar under en viss tid. Det följer direkt av kraftekvationen. Här är stegen.

Kraftekvationen är F = m · a. Accelerationen är hastighetsändringen delad med tiden, a = Δv / Δt. Sätt in den:
F = m · Δv / Δt
Gånga båda sidor med Δt:
F · Δt = m · Δv
Höger sida, massan gånger hastighetsändringen, är ändringen av rörelsemängden, Δp. Vänster sida, kraften gånger tiden, kallas *impuls*.

[FORMEL: F · Δt = Δp – F kraften (N), Δt tiden kraften verkar (s), Δp ändringen av rörelsemängden (kg·m/s)]

Formeln säger att impulsen är lika med ändringen av rörelsemängden. Den säger också något viktigt: samma ändring av rörelsemängd kan göras med en stor kraft under kort tid eller med en liten kraft under lång tid.

### Krockkudden förlänger tiden och minskar kraften
När en bil krockar ska förarens rörelsemängd ner till noll. Den ändringen går inte att påverka. Men tiden det tar kan påverkas. Slår huvudet i ratten stoppas det på kanske en hundradels sekund, och då blir kraften enorm. En krockkudde gör att inbromsningen tar ungefär tio gånger längre tid. Eftersom F · Δt är lika stort i båda fallen blir kraften ungefär tio gånger mindre.

Samma princip finns överallt. Du böjer på knäna när du landar efter ett hopp, en målvakt för med händerna när hon tar emot bollen, och en klätterlina är töjbar för att stoppa ett fall mjukt. I alla fallen förlängs tiden så att kraften blir mindre.

[PROVA]
8a. Vilken rörelsemängd har en cyklist med massan 60 kg (med cykeln) i 5,0 m/s?
8b. Samma ändring av rörelsemängd görs på dubbelt så lång tid. Hur stor blir kraften jämfört med förut?
[/PROVA]

### Rörelsemängden bevaras när föremål påverkar varandra
Tänk på två skridskoåkare som knuffar ifrån varandra. Enligt Newtons tredje lag, kraft och motkraft, verkar lika stora krafter på dem i motsatta riktningar. Krafterna verkar dessutom under exakt samma tid, eftersom de bara finns så länge händerna är i kontakt.

Då blir impulserna F · Δt lika stora och motriktade. Den ena får alltså lika mycket rörelsemängd framåt som den andra får bakåt. Lägger man ihop rörelsemängderna blir ändringen noll. Den totala rörelsemängden ändras inte. Det kallas *rörelsemängdens bevarande*.

Det gäller under ett villkor: inga krafter utifrån får ändra rörelsemängden, eller så tar krafterna utifrån ut varandra. Ett sådant system kallas *isolerat*. Två skridskoåkare på blank is är nästan isolerade. Tyngden och normalkraften tar ut varandra, och friktionen är mycket liten. Två personer som knuffar ifrån varandra på en grusgång är inte isolerade, eftersom friktionen mot marken snabbt bromsar dem.

Det förklarar raketen och astronauten från djupdykningarna. Raketen skickar gas bakåt med stor rörelsemängd och får lika stor rörelsemängd framåt. Astronauten som knuffar iväg verktygslådan får lika stor rörelsemängd åt andra hållet. Men eftersom hon har större massa än lådan blir hennes hastighet mindre.

[EXEMPEL: Krockkudden]
En person med massan 70 kg sitter i en bil som krockar i 15 m/s. Hur stor är den genomsnittliga kraften på personen om hon stoppas på 0,010 s, och om hon stoppas på 0,10 s av en krockkudde?

Givet: m = 70 kg, v₀ = 15 m/s, v = 0, Δt = 0,010 s eller 0,10 s. Sökt: den genomsnittliga kraften.

Lösning: Ändringen av rörelsemängd är densamma i båda fallen. Vi räknar med storleken:
Δp = m · Δv = 70 · 15 = 1 050 kg·m/s
Lös ut F ur F · Δt = Δp genom att dela båda sidor med Δt: F = Δp / Δt.
Utan krockkudde: F = 1 050 / 0,010 = 105 000 N
Med krockkudde: F = 1 050 / 0,10 = 10 500 N
Krockkudden gör tiden tio gånger längre och kraften tio gånger mindre.
Svar: 105 000 N utan krockkudde och 10 500 N med, alltså ungefär 110 kN och 11 kN.
[/EXEMPEL]

[EXEMPEL: Två skridskoåkare knuffar ifrån]
Två skridskoåkare står stilla på isen och knuffar ifrån varandra. Den ena har massan 50 kg och glider iväg med 3,0 m/s. Den andra har massan 75 kg. Hur fort glider hon åt andra hållet?

Givet: m₁ = 50 kg, v₁ = 3,0 m/s, m₂ = 75 kg, båda stilla från början. Sökt: v₂.

Lösning: Före knuffen står båda still, så den totala rörelsemängden är noll. Den måste vara noll efteråt också. Den första åkaren får rörelsemängden:
p₁ = 50 · 3,0 = 150 kg·m/s
Den andra måste få lika mycket åt andra hållet:
75 · v₂ = 150
Dela båda sidor med 75:
v₂ = 2,0 m/s
Den tyngre åkaren får lägre hastighet, men lika stor rörelsemängd.
Svar: 2,0 m/s åt motsatt håll.
[/EXEMPEL]

## 9. Tryck (numrerad, id: tryck)

[MATTE: Storheter, enheter och prefix · Tiopotenser · Formler – sätta in och lösa ut]

### Tryck är kraft per yta
En kraft kan vara fördelad över en stor eller en liten yta. *Tryck* är hur stor kraft som verkar på varje kvadratmeter. Enheten är pascal, Pa, och 1 Pa är en newton per kvadratmeter. Det är en mycket liten enhet, så tryck anges ofta i kilopascal, kPa.

[FORMEL: p = F / A – p trycket (Pa), F kraften vinkelrätt mot ytan (N), A arean (m²)]

Formeln förklarar varför en kniv skär och en spik går in i trä. Kraften samlas på en mycket liten yta, och då blir trycket enormt. Snöskor och breda däck gör tvärtom. De fördelar tyngden på en stor yta, så att trycket blir litet och man inte sjunker igenom.

Arean ska vara i kvadratmeter. Kom ihåg att 1 m² är 10 000 cm², eftersom en kvadratmeter är 100 cm åt båda hållen. Det är det vanligaste felet i tryckuppgifter.

### Lufttrycket kommer från tyngden av luften ovanför
Vi lever på botten av ett hav av luft som är flera mil djupt. Luften har massa, och tyngden av all luft ovanför oss trycker på allt vid jordytan. Vid havsytan är lufttrycket ungefär 101 kPa, alltså drygt 100 000 newton på varje kvadratmeter. Det motsvarar ungefär 10 newton på varje kvadratcentimeter, eller tyngden av ett kilo på en yta lika stor som en fingertopp.

Vi märker inte trycket, eftersom det verkar lika mycket åt alla håll och eftersom luften i kroppen trycker tillbaka lika mycket. Men om luften pumpas ut ur en burk finns inget som trycker tillbaka inifrån, och då trycks burken ihop av lufttrycket utifrån.

### Trycket i en vätska ökar med djupet
I en vätska trycker tyngden av vätskan ovanför. Ju djupare man kommer, desto mer vätska finns ovanför, och desto större blir trycket. Tryckökningen beror på vätskans densitet ρ (grekiska bokstaven rå), tyngdfaktorn och djupet:

[FORMEL: Δp = ρ · g · h – Δp tryckökningen på grund av vätskan (Pa), ρ vätskans densitet (kg/m³), g = 9,82 N/kg, h djupet (m)]

Formeln kommer från p = F / A. Tänk dig en vattenpelare med arean A och höjden h. Dess volym är A · h och dess massa ρ · A · h. Tyngden blir ρ · A · h · g. Dela tyngden med arean, så försvinner A, och trycket från pelaren blir ρ · g · h.

För vatten med densiteten 1 000 kg/m³ blir tryckökningen på 10 meters djup 1 000 · 9,82 · 10 ≈ 98 000 Pa. Det är ungefär lika mycket som hela lufttrycket. För varje 10 meter man dyker ökar trycket alltså med ungefär ett lufttryck. Formeln ger bara den del av trycket som vätskan står för. Det totala trycket som en dykare känner är lufttrycket vid ytan plus tryckökningen från vattnet.

### Trycket i en vätska verkar åt alla håll
Trycket i en vätska verkar inte bara nedåt. Det verkar lika mycket åt alla håll: uppåt, nedåt och åt sidorna. Gör man hål i en vattenfylld flaska på olika höjder sprutar vattnet ut åt sidan, och längst från de nedersta hålen, där trycket är störst.

Det är också därför en dammvägg måste vara tjockast längst ner. Det är där vattnet trycker hårdast mot den. Formen på behållaren spelar ingen roll. Trycket på ett visst djup beror bara på djupet, inte på hur mycket vatten som finns runt omkring.

[EXEMPEL: Tryck mot golvet]
En person med massan 60 kg står på ett golv. Skosulorna har tillsammans arean 300 cm². Hur stort tryck utövar hon på golvet? Hur stort blir trycket om hon i stället står på en klack med arean 1,0 cm²?

Givet: m = 60 kg, A = 300 cm² respektive 1,0 cm². Sökt: trycket.

Lösning: Kraften mot golvet är tyngden:
F = m · g = 60 · 9,82 ≈ 590 N
Arean i m². 1 m² = 10 000 cm², så vi delar med 10 000:
300 cm² = 300 / 10 000 m² = 0,030 m²
Trycket på hela sulorna:
p = F / A = 590 / 0,030 ≈ 20 000 Pa = 20 kPa
På en klack: 1,0 cm² = 1,0 / 10 000 m² = 0,000 1 m², och
p = 590 / 0,000 1 = 5 900 000 Pa ≈ 5,9 MPa
Trycket blir 300 gånger större, eftersom arean är 300 gånger mindre.
Svar: Ungefär 20 kPa på hela sulorna och ungefär 5,9 MPa på klacken.
[/EXEMPEL]

[EXEMPEL: Dykaren]
Hur stort är det totala trycket på en dykare på 25 m djup i en sjö?

Givet: h = 25 m, ρ = 1 000 kg/m³, lufttrycket 101 kPa. Sökt: det totala trycket.

Lösning: Tryckökningen från vattnet:
Δp = ρ · g · h = 1 000 · 9,82 · 25 ≈ 246 000 Pa = 246 kPa
Det totala trycket är lufttrycket plus tryckökningen:
101 kPa + 246 kPa = 347 kPa
Det är drygt tre gånger så stort som vid ytan.
Svar: Ungefär 347 kPa, drygt tre gånger trycket vid ytan.
[/EXEMPEL]

[PROVA]
9a. En kraft på 200 N verkar på 0,50 m². Hur stort är trycket?
9b. Hur mycket ökar trycket på 5,0 m djup i vatten?
[/PROVA]

## 10. Lyftkraft (numrerad, id: lyftkraft)

[MATTE: Formler – sätta in och lösa ut · Storheter, enheter och prefix]

### Lyftkraften är en tryckskillnad
Varför flyter vissa saker? Tänk dig en kloss som är nedsänkt i vatten. Vattnet trycker på klossens alla sidor. Trycken mot sidorna är lika stora och motriktade, så de tar ut varandra.

Men undersidan ligger djupare än ovansidan, och där är trycket större. Vattnet trycker alltså hårdare uppåt mot undersidan än nedåt mot ovansidan. Skillnaden blir en resulterande kraft uppåt, *lyftkraften*.

Det betyder att lyftkraften inte är någon mystisk egenskap hos vatten. Den är en följd av att trycket ökar med djupet. Därför finns lyftkraft i alla vätskor och gaser, också i luft.

[BILD: kloss nedsänkt i vatten – tryckpilar mot alla sidor, längre pilar mot undersidan än mot ovansidan, och den resulterande lyftkraften uppåt]

### Lyftkraften är lika stor som tyngden av den undanträngda vätskan
Lyftkraften kan räknas ut med det du lärde dig om tryck. Klossen har arean A på ovansidan och undersidan, och höjden h.

Undersidan ligger h meter djupare än ovansidan. Tryckskillnaden mellan dem är därför ρ · g · h. Kraften är tryck gånger area, så skillnaden i kraft blir:
F_L = ρ · g · h · A
Men h · A är klossens volym V. Alltså:
F_L = ρ · V · g

Titta nu på vad ρ · V är. Det är densiteten för vätskan gånger klossens volym, alltså massan av den vätska som skulle ha fått plats där klossen är. Gånger g blir det tyngden av den vätskan. Lyftkraften är lika stor som tyngden av den vätska som föremålet tränger undan. Det kallas *Arkimedes princip*, efter den grekiske matematikern som upptäckte den för mer än 2 200 år sedan.

[FORMEL: F_L = ρ · V · g – F_L lyftkraften (N), ρ vätskans densitet (kg/m³), V volymen av den undanträngda vätskan (m³), g = 9,82 N/kg]

Lägg märke till att det är vätskans densitet som står i formeln, inte föremålets. Lyftkraften beror bara på hur mycket vätska som trängs undan, inte på vad föremålet är gjort av. En träkloss och en järnkloss med samma volym får samma lyftkraft när de är helt nedsänkta.

### Ett föremål flyter om lyftkraften kan bli lika stor som tyngden
Ett föremål i vätska påverkas av två krafter: tyngdkraften nedåt och lyftkraften uppåt. Om föremålet helt nedsänkt får en lyftkraft som är större än tyngden stiger det mot ytan. Där sticker det upp en bit och tränger undan mindre vätska, så lyftkraften minskar. Den minskar tills den är exakt lika stor som tyngden. Då flyter det.

Om lyftkraften är mindre än tyngden även när föremålet är helt nedsänkt sjunker det. Det blir samma sak som att jämföra densiteter: ett föremål flyter om dess densitet är mindre än vätskans. Det var det du lärde dig om flytande och sjunkande i fysikboken, nu med krafterna som förklaring.

### Ett fartyg av stål flyter för att det är fullt av luft
Stål har en densitet på nästan 8 000 kg/m³, åtta gånger mer än vatten, och en stålkula sjunker direkt. Men ett fartyg är inte massivt. Det är ett skal av stål runt en stor volym luft. Fartygets *medeldensitet*, alltså hela massan delad med hela volymen, är mindre än vattnets. Därför kan det tränga undan så mycket vatten att lyftkraften blir lika stor som tyngden.

Samma princip förklarar varför en ballong med helium stiger. Helium har mycket lägre densitet än luft, och ballongen tränger undan luft som väger mer än ballongen själv.

[EXEMPEL: En kloss i vatten]
En kloss med volymen 1,0 dm³ hålls helt nedsänkt i vatten. Hur stor är lyftkraften? Flyter klossen om den är av trä med massan 0,60 kg, och om den är av järn med massan 7,9 kg?

Givet: V = 1,0 dm³, träklossen 0,60 kg, järnklossen 7,9 kg, ρ_vatten = 1 000 kg/m³. Sökt: lyftkraften, och om klossarna flyter.

Lösning: Volymen i m³. 1 dm³ = 1 liter = 0,001 m³:
V = 0,001 0 m³
Lyftkraften:
F_L = ρ · V · g = 1 000 · 0,001 0 · 9,82 ≈ 9,8 N
Den är lika stor för båda klossarna, eftersom de har samma volym.
Träklossens tyngd: 0,60 · 9,82 ≈ 5,9 N. Det är mindre än 9,8 N, så klossen stiger och flyter.
Järnklossens tyngd: 7,9 · 9,82 ≈ 78 N. Det är mycket mer än 9,8 N, så klossen sjunker.
Svar: Lyftkraften är 9,8 N. Träklossen flyter och järnklossen sjunker.
[/EXEMPEL]

[EXEMPEL: Isberget]
Is har densiteten 917 kg/m³ och havsvatten 1 025 kg/m³. Hur stor del av ett isberg ligger under vattenytan?

Givet: ρ_is = 917 kg/m³, ρ_hav = 1 025 kg/m³. Sökt: andelen under ytan.

Lösning: Kalla hela isbergets volym V och volymen under ytan V_under. Isberget flyter, så lyftkraften är lika stor som tyngden.
Tyngden: m · g = 917 · V · g
Lyftkraften: bara delen under ytan tränger undan vatten, så F_L = 1 025 · V_under · g
Sätt dem lika:
1 025 · V_under · g = 917 · V · g
Dela båda sidor med g. Då försvinner g:
1 025 · V_under = 917 · V
Dela båda sidor med 1 025 · V:
V_under / V = 917 / 1 025 ≈ 0,89
Svar: Ungefär 89 procent, nästan nio tiondelar, ligger under ytan.
[/EXEMPEL]

[PROVA]
10a. Ett föremål med volymen 0,002 0 m³ är helt nedsänkt i vatten. Hur stor är lyftkraften?
10b. Två klossar med samma volym, en av trä och en av sten, hålls helt nedsänkta. Vilken får störst lyftkraft?
[/PROVA]

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
Det viktigaste steget är det första. En bild tvingar dig att bestämma vad som händer, och den visar ofta vad som saknas. Det är också i bilden som de flesta fel upptäcks, till exempel en glömd friktionskraft eller en kraft som verkar på fel föremål. Skriv också alltid upp lösningen på samma sätt: Givet, Sökt, Lösning och Svar, som i alla exempel i boken.

Kom ihåg vad du lärde dig om kraft och motkraft: de verkar på olika föremål. När du ritar krafterna på ett föremål ska motkrafterna inte vara med, eftersom de verkar på något annat.

### Kontrollera alltid om svaret är rimligt
Ett svar kan vara rätt uträknat men ändå fel, om en siffra har skrivits fel eller en enhet glömts. Fråga dig därför alltid: är det här ett rimligt svar? En bil som accelererar med 300 m/s² eller en låda som behöver 50 000 N för att skjutas har nästan säkert räknats fel.

Kontrollera också enheten. Om du söker en kraft och får svaret i m/s har något gått snett. Och ange inte fler värdesiffror i svaret än i de givna värdena. Ett svar kan inte bli noggrannare än mätningarna det bygger på.

[EXEMPEL: Släden]
En släde med massan 40 kg dras från stillastående över vågrät snö med en kraft på 120 N, riktad rakt framåt. Friktionskoefficienten mellan släden och snön är 0,15. Hur fort åker släden efter 4,0 s, och hur långt har den kommit?

Lösning:
Steg 1–2: Givet m = 40 kg, F_drag = 120 N, μ = 0,15, v₀ = 0, t = 4,0 s. Sökt v och s. Framåt är positivt.
Steg 3: På släden verkar dragkraften framåt, friktionen bakåt, tyngden nedåt och normalkraften uppåt.
Steg 4: Uppåt och nedåt. Släden rör sig inte uppåt eller nedåt, så tyngden och normalkraften tar ut varandra:
F_N = m · g = 40 · 9,82 ≈ 393 N
Friktionen: F_f = μ · F_N = 0,15 · 393 ≈ 59 N
Framåt blir den resulterande kraften: 120 − 59 = 61 N
Steg 5: Accelerationen: a = F / m = 61 / 40 ≈ 1,53 m/s²
Hastigheten efter 4,0 s: v = v₀ + a · t = 0 + 1,53 · 4,0 ≈ 6,1 m/s
Sträckan: s = a · t² / 2 = 1,53 · 4,0² / 2 = 1,53 · 16 / 2 ≈ 12 m
(Räkna med en extra decimal i mellanleden och avrunda först i svaret.)
Steg 6–7: Enheterna stämmer. 6,1 m/s är 6,1 · 3,6 ≈ 22 km/h, rimligt för en släde som dras hårt på snö.
Svar: Ungefär 6,1 m/s och 12 m.
[/EXEMPEL]

## Sammanfattning (onumrerad)

### Det viktigaste
- En vektor har storlek och riktning. Förflyttning, hastighet, acceleration, kraft och rörelsemängd är vektorer.
- Medelhastigheten är förflyttningen delad med tiden: v = Δs / Δt. Momentanhastigheten är hastigheten i ett ögonblick.
- I ett läge–tid-diagram är lutningen hastigheten. I ett hastighet–tid-diagram är lutningen accelerationen och arean förflyttningen.
- Acceleration är hastighetsändringen per sekund: a = Δv / Δt. Vid konstant acceleration gäller v = v₀ + a · t, s = v₀ · t + a · t² / 2 och v² − v₀² = 2 · a · s.
- Newtons andra lag: den resulterande kraften är massan gånger accelerationen, F = m · a. 1 N = 1 kg · m/s².
- Alla föremål faller fritt med samma acceleration g = 9,82 m/s². N/kg och m/s² är samma enhet.
- Vilofriktionen är högst μ_vila · F_N. Glidfriktionen är ungefär μ_glid · F_N och oftast lite mindre.
- Rörelsemängd p = m · v. Impulsen F · Δt är lika med ändringen av rörelsemängden. Rörelsemängden bevaras när föremål påverkar varandra, om systemet är isolerat.
- Tryck är kraft per yta, p = F / A. I en vätska ökar trycket med djupet: Δp = ρ · g · h.
- Lyftkraften är lika med tyngden av den undanträngda vätskan: F_L = ρ · V · g.
- Lös problem i steg: rita, välj föremål och riktning, sätt ut krafterna, ta fram resultanten, räkna med enheter och pröva rimligheten.

## Facit till Prova själv (onumrerad)

### Svar
1a. Tid är en skalär. Kraft är en vektor.
1b. 50 m + (−80 m) = −30 m, alltså 30 m bakåt.

2a. 54 / 3,6 = 15 m/s
2b. Förflyttningen är 6 − 2 = 4 m. Medelhastigheten är 4 m / 4 s = 1 m/s framåt.

3a. Arean är 4 · 3 = 12 m.
3b. Det står stilla.

4a. (8 − 2) / 3 = 2 m/s²
4b. Farten minskar, eftersom hastigheten och accelerationen pekar åt olika håll.
4c. s = a · t² / 2 = 2,0 · 5,0² / 2 = 2,0 · 25 / 2 = 25 m
4d. 0 − 30² = 2 · (−6,0) · s ger −900 = −12 · s, alltså s = 75 m.

5a. a = F / m = 12 / 4,0 = 3,0 m/s²
5b. Accelerationen fördubblas.

6a. v = g · t = 9,82 · 2,0 ≈ 20 m/s
6b. Den blir inte större alls. Båda faller med accelerationen g.

7a. F_glid = 0,05 · 200 = 10 N
7b. Noll. Vilofriktionen är bara så stor som behövs, och ingen kraft behöver hållas emot.

8a. p = 60 · 5,0 = 300 kg·m/s
8b. Hälften så stor.

9a. p = 200 / 0,50 = 400 Pa
9b. Δp = 1 000 · 9,82 · 5,0 ≈ 49 000 Pa ≈ 49 kPa

10a. F_L = 1 000 · 0,002 0 · 9,82 ≈ 20 N
10b. Lika stor. Lyftkraften beror bara på volymen och vätskans densitet.
