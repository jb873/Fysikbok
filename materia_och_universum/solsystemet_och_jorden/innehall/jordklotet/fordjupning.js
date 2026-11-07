/* Avsnittssida I. Solsystemet och jorden, text C Jordklotet – nivån fordjupning. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-C-Jordklotet-Enkel-Fordjupning.md (📕 FÖRDJUPNING), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats tills figuren ritas (steg 3).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Jordklotet – fördjupning' },
        { typ: 'text', text: 'I Standard lärde du dig att jorden är rund, att gravitationen drar mot jordens mitt och vad som gör liv möjligt. Här får du se hur man kunde veta att jorden är rund och hur stor den är långt innan någon kunde flyga ut i rymden. Du får också lära dig hur jorden ser ut inuti, varför vi har norrsken och vad som avgör om en planet kan ha liv.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur man redan under antiken visste att jorden är rund och kunde räkna ut hur stor den är',
          'att jorden har skikt inuti, och hur man vet det fast ingen har varit där',
          'att jorden har ett magnetfält som skyddar oss och ger norrsken',
          'vad den *beboeliga zonen* är'
        ] }
      ]
    },
    {
      id: 'hur-man-vet', titel: 'Hur man vet hur jorden ser ut',
      block: [
        { typ: 'rubrik', text: 'Grekerna visste att jorden är rund' },
        { typ: 'text', text: 'Redan för ungefär 2 300 år sedan argumenterade den grekiske filosofen Aristoteles för att jorden är ett klot. Han hade två bevis. Vid en månförmörkelse faller jordens skugga på månen, och skuggans kant är alltid rund. Bara ett klot ger en rund skugga, oavsett hur det vänds. Dessutom såg resenärer som färdades söderut nya stjärnor dyka upp över horisonten, vilket bara går om marken är krökt.' },
        { typ: 'text', text: 'Ett tredje bevis kunde sjömännen se själva. När ett skepp seglar bort försvinner först skrovet och sist toppen av masten. Skeppet försvinner bakom jordens krökning, uppifrån och ner. Om jorden vore platt skulle skeppet i stället bara bli mindre och mindre.' },
        { typ: 'rubrik', text: 'Eratosthenes mätte jordens omkrets med skuggor' },
        { typ: 'text', text: 'För ungefär 2 200 år sedan räknade Eratosthenes ut hur stor jorden är. Han visste att solen en viss dag stod rakt ovanför staden Syene i Egypten, så att solen lyste rakt ner i en djup brunn. Samma dag och tid kastade en pinne i Alexandria, längre norrut, en skugga. Skuggan visade att solstrålarna där föll in med en vinkel på ungefär 7 grader.' },
        { typ: 'text', text: 'Eftersom solen är så långt bort är solstrålarna nästan parallella. Vinkelskillnaden måste därför bero på jordens krökning. 7 grader är ungefär en femtiondel av ett helt varv på 360 grader. Eratosthenes visste avståndet mellan städerna, och han multiplicerade det med 50. Svaret låg nära de 40 000 kilometer vi vet i dag. Han mätte alltså hela jorden med en pinne, en skugga och ett avstånd.' },
        { typ: 'rubrik', text: 'Jorden har skikt inuti' },
        { typ: 'text', text: 'Jorden är inte likadan hela vägen in. Ytterst finns *jordskorpan*, ett tunt skal av sten som är några mil tjockt. Under den finns *manteln*, som är av het sten som långsamt kan flyta, ungefär som mycket seg kola. Innerst finns *kärnan*, som mest består av järn och nickel. Den yttre kärnan är flytande, och den inre kärnan är fast trots att den är mycket het, eftersom trycket är så enormt.' },
        { typ: 'text', text: 'Om jorden vore ett äpple skulle skorpan vara tunnare än skalet. Det djupaste hål människan har borrat, på Kolahalvön i Ryssland, är drygt 12 kilometer. Det är bara en bråkdel av vägen genom skorpan, och avståndet till jordens mitt är ungefär 6 400 kilometer.' },
        { typ: 'rubrik', text: 'Jordbävningar avslöjar jordens inre' },
        { typ: 'text', text: 'Hur kan man veta hur jorden ser ut inuti när ingen har kommit dit? Svaret kommer från jordbävningar. En jordbävning skickar ut vågor som färdas genom hela jordklotet. Mätstationer runt om i världen registrerar när vågorna kommer fram.' },
        { typ: 'text', text: 'Vågorna färdas olika fort i olika material och böjs av när de går från ett skikt till ett annat. En sorts vågor kan inte alls färdas genom vätska. Eftersom de vågorna aldrig når fram till andra sidan jorden har forskarna kunnat dra slutsatsen att den yttre kärnan är flytande. Jordens inre är alltså en modell som bygger på mätningar, inte på att någon har sett det.' }
      ]
    },
    {
      id: 'jordens-skydd', titel: 'Jordens skydd och livets villkor',
      block: [
        { typ: 'rubrik', text: 'Jorden har ett magnetfält' },
        { typ: 'text', text: 'Jorden är som en stor magnet. Det är därför en kompassnål pekar mot norr. Magnetfältet uppstår i den flytande yttre kärnan, där smält järn rör sig och skapar elektriska strömmar. Strömmarna ger i sin tur ett magnetfält som når långt ut i rymden.' },
        { typ: 'text', text: 'Magnetfältet skyddar jorden. Solen skickar hela tiden ut en ström av laddade partiklar, *solvinden*. Magnetfältet böjer av de flesta partiklarna så att de inte når jordytan. Utan magnetfältet skulle solvinden med tiden kunna ha nött bort en stor del av atmosfären. Forskare tror att det är en del av förklaringen till att Mars, som har förlorat sitt magnetfält, i dag har en så tunn atmosfär.' },
        { typ: 'rubrik', text: 'Norrsken uppstår när solvinden träffar atmosfären' },
        { typ: 'text', text: 'Nära polerna leder magnetfältet en del av solvindens partiklar ner mot atmosfären. När partiklarna krockar med syre och kväve högt uppe i atmosfären börjar gaserna lysa. Det är *norrskenet*. Det gröna ljuset kommer från syre och de röda och lila tonerna från syre högre upp och från kväve.' },
        { typ: 'text', text: 'Norrsken syns oftast i norra Sverige, men när solen är extra aktiv och skickar ut mycket partiklar kan det synas långt söderut. På södra halvklotet heter samma fenomen sydsken.' },
        { typ: 'rubrik', text: 'Växthuseffekten gör jorden 33 grader varmare' },
        { typ: 'text', text: 'I Standard såg du att växthusgaser håller kvar en del av värmen. Siffrorna visar hur viktig effekten är. Utan växthuseffekten skulle jordens medeltemperatur vara ungefär −18 grader. Med den är medeltemperaturen ungefär +15 grader. Skillnaden på drygt 30 grader är skillnaden mellan en isplanet och en planet med flytande hav.' },
        { typ: 'text', text: 'Växthuseffekten är alltså i grunden något naturligt och nödvändigt. Problemet med klimatförändringarna är att människan genom att bränna kol, olja och gas ökar mängden växthusgaser. Då förstärks effekten, och temperaturen stiger.' },
        { typ: 'rubrik', text: 'Den beboeliga zonen är där vatten kan vara flytande' },
        { typ: 'text', text: 'Runt varje stjärna finns ett område där en planet skulle få lagom mycket värme för att vatten ska kunna vara flytande på ytan. Det kallas den *beboeliga zonen*. Runt en het, ljusstark stjärna ligger zonen långt ut. Runt en sval, röd stjärna ligger den mycket nära stjärnan.' },
        { typ: 'text', text: 'Att en planet ligger i den beboeliga zonen räcker ändå inte. Planeten behöver också rätt storlek för att hålla kvar en atmosfär, och gärna ett magnetfält som skyddar atmosfären. Venus ligger strax innanför zonen, lite för nära solen, och dess täta atmosfär har gjort den till en het ugn. Mars ligger i zonens yttre del men är för liten för att ha kunnat hålla kvar en tjock atmosfär. Jorden har alla villkoren uppfyllda samtidigt, och det är det som gör den så ovanlig.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'Jordens runda skugga på månen och skepp som försvinner bakom horisonten visar att jorden är rund.',
          'Eratosthenes räknade ut jordens omkrets med skuggor för ungefär 2 200 år sedan.',
          'Jorden har en skorpa, en mantel och en kärna av järn och nickel. Det vet man från jordbävningsvågor.',
          'Jordens magnetfält uppstår i den flytande yttre kärnan och skyddar oss mot solvinden.',
          'Norrsken uppstår när solvindens partiklar får gaser högt i atmosfären att lysa.',
          'Utan växthuseffekten skulle jordens medeltemperatur vara ungefär −18 grader i stället för +15 grader.',
          'Den beboeliga zonen är området runt en stjärna där vatten kan vara flytande.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
