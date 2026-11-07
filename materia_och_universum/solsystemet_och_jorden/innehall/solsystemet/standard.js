/* Avsnittssida I. Solsystemet och jorden, text A Solsystemet – nivån standard. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-Standard-A-D-redigerad.md (# Text A), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats tills figuren ritas (steg 3).
 * Begreppen (*ord*) är markerade som i Enkel och Fördjupning för samma text, första gången de står i den här texten
 * (arbetsorder 9; listan i rapporten, Joachim stryker): solsystem, kärnfusion, gravitation, stenplaneter, gasjättar, isjättar, skalmodell.
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'text', text: 'När vi tittar upp mot himlen ser vi solen på dagen och ibland månen och planeterna på natten. Alla dessa himlakroppar är delar av vårt *solsystem*, som består av solen och de föremål som rör sig runt den. Solsystemet bildades för ungefär 4,6 miljarder år sedan och är vår närmaste omgivning i det enorma universum.' }
      ]
    },
    {
      id: 'solen-ar-centrum-i-vart-solsystem', titel: 'Solen är centrum i vårt solsystem',
      block: [
        { typ: 'rubrik', text: 'Solen är en stjärna som ger oss ljus och värme' },
        { typ: 'text', text: 'Solen är en stjärna, precis som de tusentals ljuspunkter vi kan se på natthimlen. Skillnaden är att solen ligger mycket närmare jorden än någon annan stjärna. Därför ser den så stor och ljusstark ut på himlen, medan de andra stjärnorna bara ser ut som små prickar.' },
        { typ: 'text', text: 'Solen består huvudsakligen av de två grundämnena väte och helium. I solens inre är temperaturen och trycket så höga att väte omvandlas till helium genom en process som kallas *kärnfusion*. Vid denna process frigörs enorma mängder energi som så småningom lämnar solen som bland annat ljus och värme. Utan denna energi skulle jorden vara en mycket kall och mörk planet.' },
        { typ: 'rubrik', text: 'Gravitationen håller samman solsystemet' },
        { typ: 'text', text: 'Solen innehåller ungefär 99,8 procent av all massa i solsystemet. Det innebär att nästan all materia i solsystemet finns samlad i solen, trots att det finns åtta planeter och mängder av mindre himlakroppar. Solens stora massa gör att den har en mycket stark *gravitation*.' },
        { typ: 'text', text: 'Gravitation är samma kraft som får ett äpple att falla mot marken när du släpper det. Solens gravitation drar planeterna mot sig, samtidigt som planeternas rörelse gör att de fortsätter i sina banor runt solen. Utan solens gravitation skulle planeterna inte kunna fortsätta röra sig i dessa banor.' },
        { typ: 'text', text: 'Man kan föreställa sig en boll som snurrar runt i ett snöre. Snöret håller kvar bollen i en cirkelbana på ungefär samma sätt som gravitationen håller kvar planeterna i deras banor. Modellen hjälper oss att förstå varför planeterna inte bara fortsätter rakt fram, men den har en begränsning: gravitationen fungerar på avstånd och behöver inget verkligt snöre.' },
        { typ: 'rubrik', text: 'De fyra innersta planeterna har fasta ytor' },
        { typ: 'text', text: 'De fyra planeterna närmast solen är Merkurius, Venus, jorden och Mars, i den ordningen. De kallas *stenplaneter* eftersom de huvudsakligen består av sten och metall och har fasta ytor. Jorden är den största av dessa fyra planeter.' },
        { typ: 'text', text: 'Merkurius är den minsta planeten och ligger närmast solen. Venus har en mycket tät atmosfär som gör den till solsystemets varmaste planet, medan Mars är känd för sin rödaktiga färg. Jorden skiljer sig från de andra genom att den har stora mängder flytande vatten på ytan och är den enda planet där vi säkert vet att liv finns.' },
        { typ: 'rubrik', text: 'De fyra yttersta planeterna är jättar' },
        { typ: 'text', text: 'Utanför Mars ligger Jupiter, Saturnus, Uranus och Neptunus. De är betydligt större än stenplaneterna och saknar fasta ytor av samma slag som jorden. Jupiter och Saturnus kallas *gasjättar*, medan Uranus och Neptunus kallas *isjättar* eftersom deras inre innehåller stora mängder ämnen som vatten, ammoniak och metan.' },
        { typ: 'text', text: 'Skillnaderna mellan planeterna beror bland annat på hur solsystemet bildades. Nära den unga solen var det så varmt att framför allt sten och metall kunde samlas till planeter. Längre bort var det kallare, vilket gjorde att även olika isämnen kunde bilda fasta partiklar. Där kunde större planetkärnor växa fram och samla på sig stora mängder gas.' }
      ]
    },
    {
      id: 'solsystemet-ar-mycket-storre-an-bilderna-visar', titel: 'Solsystemet är mycket större än bilderna visar',
      block: [
        { typ: 'rubrik', text: 'Runt solen rör sig mer än planeter' },
        { typ: 'text', text: 'Utöver de åtta planeterna rör sig mängder av mindre himlakroppar runt solen: asteroider, dvärgplaneter och kometer. De flesta är rester från tiden då solsystemet bildades, och de berättar därför mycket om hur planeterna växte fram. Hur de skiljer sig från varandra läser du om i texten om himlakroppar.' },
        { typ: 'rubrik', text: 'Avstånden i solsystemet är mycket större än vi föreställer oss' },
        { typ: 'text', text: 'Avståndet från solen till jorden är ungefär 150 miljoner kilometer. Trots att ljuset färdas omkring 300 000 kilometer varje sekund tar det drygt åtta minuter för solljuset att nå oss. När vi ser solen ser vi den alltså som den såg ut för ungefär åtta minuter sedan.' },
        { typ: 'text', text: 'För att förstå avstånden kan vi använda en *skalmodell*, där allt förminskas lika mycket. I modellen Sweden Solar System föreställer Avicii Arena i Stockholm solen. Jorden skulle då vara ett klot med ungefär 64 centimeters diameter, placerat cirka 7,5 kilometer från arenan. Neptunus skulle ligga ungefär 225 kilometer bort.' },
        // [BILD: En vetenskapligt korrekt skalmodell av solsystemet där både planeternas storlekar och avstånden till solen återges i samma skala. Modellen visas som en mycket lång avståndslinje. Planeternas placering och storlek ska kunna jämföras utan att proportionerna förvrängs.]
        { typ: 'rubrik', text: 'Bilder av solsystemet visar sällan de verkliga avstånden' },
        { typ: 'text', text: 'Många tror att planeterna ligger ganska tätt intill varandra eftersom de ofta visas så i läroböcker och på affischer. I verkligheten är avstånden mellan planeterna enorma jämfört med deras storlekar. Om vi ritade både planeterna och avstånden i rätt proportioner på ett vanligt papper skulle de flesta planeterna bli så små att vi knappt kunde se dem.' },
        { typ: 'text', text: 'En vanlig bild av solsystemet är därför en förenklad modell. Den kan visa planeternas ordning och utseende, men den visar vanligtvis inte deras verkliga storlekar och avstånd samtidigt. För att förstå solsystemet behöver vi känna till både vad en modell visar och vad den utelämnar.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'Solen är en stjärna och innehåller nästan all massa i solsystemet.',
          'Gravitationen håller planeterna i sina banor runt solen.',
          'Solsystemet har åtta planeter: fyra inre stenplaneter och fyra yttre jättplaneter.',
          'Runt solen rör sig också asteroider, dvärgplaneter och kometer.',
          'Solljuset tar ungefär åtta minuter att nå jorden.',
          'Skalmodeller hjälper oss att förstå solsystemets enorma storlek och avstånd.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
