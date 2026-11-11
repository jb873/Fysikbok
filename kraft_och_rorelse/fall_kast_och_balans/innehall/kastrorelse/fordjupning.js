/* Avsnittssida IV. Fall, kast och balans, text C: Kaströrelse – nivån fordjupning (📕).
 * Arbetsorder 16 (2026-11-11): kallor/kap3/IV-C-Kastrorelse-alla-nivaer-v1.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text c: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-c.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kaströrelsen i siffror' },
        { typ: 'text', text: 'I Standard såg du att en kastad boll gör två rörelser samtidigt, och att de inte påverkar varandra. Det är en kraftfull idé, för den betyder att ett krångligt kast kan delas upp i två enkla rörelser som räknas var för sig: en likformig rörelse framåt och ett fritt fall nedåt. Här använder du den idén för att räkna på kast, och för att förstå varför satelliter på olika höjd går olika fort.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att det är fallets tid som avgör hur länge ett kast varar',
          'hur man räknar ut hur långt ett vågrätt kast når',
          'varför 45° är den bästa vinkeln utan luft, och varför idrottare ändå kastar lägre',
          'hur fort en satellit måste röra sig, och varför höga banor tar längre tid',
          'hur centripetalkraften beror på farten'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'kastet-i-siffror', titel: 'Kastet i siffror',
      block: [
        { typ: 'rubrik', text: 'Fallet bestämmer hur länge kastet varar' },
        { typ: 'text', text: 'Eftersom rörelsen nedåt är ett fritt fall, oberoende av rörelsen framåt, bestäms kastets tid bara av fallet. En boll som kastas vågrätt från 20 meters höjd faller lika länge som en boll som släpps från samma höjd. Med g ≈ 10 m/s² tar ett fall på 20 m ungefär 2 sekunder, eftersom fallsträckan efter 2 s är 20 m.' },
        { typ: 'text', text: 'Hur fort bollen kastades framåt påverkar inte tiden alls. Den påverkar bara hur långt bort bollen hinner under de 2 sekunderna.' },
        { typ: 'rubrik', text: 'Kastlängden är farten framåt gånger tiden' },
        { typ: 'text', text: 'Rörelsen framåt är likformig. Då är sträckan framåt farten gånger tiden, precis som i en vanlig likformig rörelse. Kastas bollen från 20 m höjd med 10 m/s rakt fram hinner den 10 m/s · 2 s = 20 m från huset innan den landar. Kastas den med 15 m/s landar den 30 m bort, men fortfarande efter 2 sekunder.' },
        { typ: 'text', text: 'Det här sättet att tänka, att dela upp en rörelse i en del framåt och en del nedåt och räkna på var och en för sig, är precis det man gör med vektorer på gymnasiet. Hastigheten delas upp i en vågrät och en lodrät del, som kallas komposanter. Det kan du läsa mer om i Nästa steg.' },
        { typ: 'rubrik', text: 'I högsta punkten är farten uppåt noll' },
        { typ: 'text', text: 'Kastas en boll snett uppåt har den från början en fart både framåt och uppåt. Anta att farten uppåt är 20 m/s. Tyngdkraften minskar den med ungefär 10 m/s varje sekund. Efter 1 s är farten uppåt 10 m/s och efter 2 s är den 0. Då är bollen i sin högsta punkt. Lika lång tid tar det sedan att falla ned igen, så bollen är i luften i 4 sekunder.' },
        { typ: 'text', text: 'Det betyder att bollen i högsta punkten fortfarande rör sig, men bara framåt. Den står inte stilla. Hela tiden i luften har den samma fart framåt som när den kastades.' },
        { typ: 'rubrik', text: 'Varför 45° är bäst, och varför idrottare kastar lägre' },
        { typ: 'text', text: 'Kastets längd beror på två saker som drar åt olika håll. En stor vinkel ger mycket fart uppåt, och då är bollen länge i luften. En liten vinkel ger mycket fart framåt. Längden är farten framåt gånger tiden i luften, och den produkten blir störst när farten delas lika mellan framåt och uppåt. Det sker vid 45°.' },
        { typ: 'text', text: 'Men i verkliga idrotter kastar man nästan alltid lägre än 45°. Det finns två skäl. Det första är att kastet startar från axelhöjd, ungefär två meter över marken. Då är kulan redan en bit upp när den släpps, och den får extra falltid på vägen ned. Därför lönar det sig att kasta lite flackare. Det andra skälet är att en människa kan kasta hårdare framåt än uppåt, eftersom kroppen är byggd för det. Kulstötare stöter därför oftast i ungefär 35–40°.' }
      ]
    },
    {
      id: 'omloppsbanor', titel: 'Omloppsbanor',
      block: [
        { typ: 'rubrik', text: 'Nära jorden krävs ungefär 8 km/s' },
        { typ: 'text', text: 'Newtons kanon visar att det finns en fart där kulan faller runt jorden. Den farten kan uppskattas. Jordens yta kröker sig ungefär 5 meter nedåt på 8 kilometer. Och en sak som faller fritt faller ungefär 5 meter på den första sekunden. Om kulan alltså rör sig 8 km på en sekund faller den 5 m, men marken har då också sjunkit 5 m under den. Kulan är lika högt över marken som förut. Den har hamnat i omloppsbana.' },
        { typ: 'text', text: 'Därför är 8 km/s, nästan 30 000 km/h, den fart som behövs för en omloppsbana nära jordytan. I verkligheten går det inte nära marken, eftersom luftmotståndet skulle bromsa. Satelliter placeras därför ovanför det mesta av atmosfären, som ISS på ungefär 400 km höjd. Där är farten ungefär 7,7 km/s, och ett varv tar ungefär 92 minuter.' },
        { typ: 'rubrik', text: 'Högre upp går det långsammare och varvet blir längre' },
        { typ: 'text', text: 'Högre upp är tyngdkraften svagare, eftersom gravitationen avtar med avståndet. Då behövs en mindre fart för att falla runt jorden, och dessutom är varvet längre. Både den lägre farten och den längre vägen gör att varvet tar längre tid.' },
        { typ: 'text', text: 'På ungefär 36 000 km höjd tar ett varv lika lång tid som jorden behöver för att rotera ett varv. Det är den geostationära banan. Månen ligger ännu längre bort, ungefär 384 000 km, och går ett varv på ungefär 27 dygn. Det är samma fysik: månen faller också hela tiden mot jorden men missar den.' },
        { typ: 'rubrik', text: 'Centripetalkraften växer snabbt med farten' },
        { typ: 'text', text: 'I Standard såg du att en bil i en kurva behöver en kraft inåt, och att kraften behöver vara större ju fortare bilen kör. Hur mycket större? Centripetalkraften växer med kvadraten på farten. Dubbel fart kräver fyra gånger så stor kraft. Tre gånger farten kräver nio gånger så stor kraft. En skarpare kurva, alltså en mindre cirkel, kräver också större kraft.' },
        { typ: 'text', text: 'Det är samma mönster som för bromssträckan, som också växer med kvadraten på farten. Därför är det så farligt att köra för fort in i en kurva. Om friktionen mellan däck och väg räcker precis i 50 km/h räcker den långt ifrån i 70 km/h, eftersom kraften som behövs då är nästan dubbelt så stor.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ett kast kan delas i en likformig rörelse framåt och ett fritt fall nedåt, som räknas var för sig.',
          'Kastets tid bestäms bara av fallet. Från 20 m höjd tar fallet ungefär 2 s, oavsett farten framåt.',
          'Kastlängden är farten framåt gånger tiden i luften.',
          'I högsta punkten är farten uppåt noll, men farten framåt finns kvar.',
          'Utan luft och från marken ger 45° längst kast. Från axelhöjd och med kroppens begränsningar ger en lägre vinkel, ungefär 35–40°, längst.',
          'Nära jorden krävs ungefär 8 km/s för en omloppsbana. ISS går ett varv på ungefär 92 minuter.',
          'Högre upp går satelliterna långsammare och varvet tar längre tid. I geostationär bana tar ett varv ett dygn.',
          'Centripetalkraften växer med kvadraten på farten. Dubbel fart kräver fyra gånger så stor kraft.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] },
        { typ: 'vidare', lankar: [
          { text: '1. Storheter med riktning', bok: 'nasta-kraft-och-rorelse', ankare: 'storheter-med-riktning' },
          { text: '6. Tyngden och fritt fall', bok: 'nasta-kraft-och-rorelse', ankare: 'tyngden-och-fritt-fall' }
        ] }
      ]
    }
  ]
});
