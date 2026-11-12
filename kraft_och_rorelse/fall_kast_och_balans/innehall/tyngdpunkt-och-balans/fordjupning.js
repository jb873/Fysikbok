/* Avsnittssida IV. Fall, kast och balans, text D: Tyngdpunkt, balans och kroppen – nivån fordjupning (📕).
 * Arbetsorder 17 (2026-11-12): kallor/kap3/IV-D-Tyngdpunkt-balans-och-kroppen-alla-nivaer-v1.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text d: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-d.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Stabilitet och krafter i siffror' },
        { typ: 'text', text: 'I Standard såg du att ett föremål välter när lodlinjen från tyngdpunkten hamnar utanför stödytan, och att en deformationszon minskar kraften i en krock. Här går vi ett steg längre och sätter siffror på båda delarna. Du ser hur man kan avgöra hur långt något kan luta innan det välter, var kroppens tyngdpunkt ligger och hur många g en krock egentligen ger.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur tippvinkeln beror på tyngdpunktens höjd och stödytans bredd',
          'var tyngdpunkten ligger hos sammansatta föremål och hos din egen kropp',
          'hur man räknar ut G-kraft från accelerationen',
          'hur deformationszonens längd påverkar G-kraften i en krock'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'stabilitet', titel: 'Stabilitet',
      block: [
        { typ: 'rubrik', text: 'Tippvinkeln bestäms av tyngdpunktens höjd och stödytans bredd' },
        { typ: 'text', text: 'Ett föremål välter när lodlinjen från tyngdpunkten passerar stödytans kant. Den vinkel det då har lutat kallas *tippvinkel*. Tippvinkeln beror på förhållandet mellan två mått: hur långt det är från tyngdpunkten ut till stödytans kant, sett uppifrån, och hur högt tyngdpunkten ligger.' },
        { typ: 'text', text: 'För en låda med tyngdpunkten mitt i är avståndet ut till kanten halva bredden. Är lådan lika bred som hög, ligger tyngdpunkten på halva höjden, och de två måtten är lika. Då är tippvinkeln 45°. Är lådan dubbelt så hög som bred halveras avståndet ut till kanten i förhållande till höjden, och tippvinkeln blir bara ungefär 27°. En smal, hög bokhylla välter därför mycket lättare än en låg byrå, och det är därför höga bokhyllor ska skruvas fast i väggen.' },
        { typ: 'rubrik', text: 'Biltillverkare mäter hur lätt en bil välter' },
        { typ: 'text', text: 'För bilar beskrivs stabiliteten med samma förhållande: halva spårvidden, alltså halva avståndet mellan hjulen, delat med tyngdpunktens höjd. En vanlig personbil har ett förhållande på ungefär 1,4, en hög SUV ungefär 1,1–1,2 och en tung lastbil mindre än 1. Ju lägre tal, desto lättare kan fordonet välta i en kurva eller vid en undanmanöver. Därför lastar man tungt gods lågt, och därför är takboxen tänkt för lätt packning.' },
        { typ: 'rubrik', text: 'Tyngdpunkten hos sammansatta föremål kan ligga utanför föremålet' },
        { typ: 'text', text: 'Tyngdpunkten hos två föremål tillsammans ligger på linjen mellan deras egna tyngdpunkter, närmast det tyngsta. Bär du en väska på 10 kg och väger själv 50 kg ligger den gemensamma tyngdpunkten en sjättedel av vägen från din tyngdpunkt mot väskans. Det är den punkten du lutar dig för att få ovanför fötterna.' },
        { typ: 'text', text: 'En tyngdpunkt behöver inte ens ligga inuti föremålet. En ring eller en bumerang har sin tyngdpunkt i luften mitt i. Hos en människa som står rakt ligger tyngdpunkten ungefär i höjd med naveln, något inne i kroppen. När du böjer dig framåt flyttas den, och i en djup bugning kan den hamna utanför kroppen. Det är just det höjdhopparen utnyttjar när kroppen böjs i en båge över ribban.' }
      ]
    },
    {
      id: 'g-kraft-i-siffror', titel: 'G-kraft i siffror',
      block: [
        { typ: 'rubrik', text: 'G-kraften är accelerationen delad med g' },
        { typ: 'text', text: 'G-kraften kan räknas ut. När du accelererar trycker sätet på dig med en extra kraft som ger dig accelerationen. Om man delar accelerationen med g = 9,82 m/s² får man hur många g den extra kraften motsvarar.' },
        { typ: 'text', text: 'En bil som går från 0 till 100 km/h på 3,0 s har en acceleration på ungefär 27,8 / 3,0 ≈ 9,3 m/s². Det motsvarar ungefär 0,9 g framåt. Du trycks bakåt i sätet med nästan lika stor kraft som din tyngd. En vanlig bil som gör samma sak på 10 s ger bara knappt 0,3 g.' },
        { typ: 'rubrik', text: 'I en krock är G-kraften enorm' },
        { typ: 'text', text: 'I en krock bromsar bilen i stället. Anta att en bil i 50 km/h, alltså ungefär 13,9 m/s, kör rakt in i en betongvägg. Hur stor inbromsningen blir beror på hur långt bilen hinner röra sig medan den stannar, alltså hur mycket fronten trycks ihop.' },
        { typ: 'text', text: 'Med formeln för bromssträcka, som du kan läsa om i Nästa steg, går det att räkna ut. Om fronten trycks ihop 0,5 m blir accelerationen ungefär 13,9² / (2 · 0,5) ≈ 190 m/s², alltså ungefär 20 g. Om bilen i stället vore helt styv och stannade på 5 cm, skulle accelerationen bli tio gånger större, ungefär 200 g. Den sträckan klarar ingen människa. Deformationszonen är alltså inte en detalj. Den är skillnaden mellan att överleva och att inte göra det.' },
        { typ: 'rubrik', text: 'Vad kroppen tål beror på hur länge och åt vilket håll' },
        { typ: 'text', text: 'Kroppen tål G-krafter olika bra beroende på riktning och tid. Riktad från huvud mot fötter, som för en pilot som svänger uppåt, får många grå syn redan vid 4–5 g, eftersom blodet lämnar hjärnan. Framifrån eller bakifrån, som i en bil, tål kroppen mycket mer. Under en bråkdel av en sekund har människor överlevt mer än 40 g, när kroppen var väl fastspänd och kraften fördelad.' },
        { typ: 'text', text: 'Det förklarar hur bältet och krockkudden fungerar. De gör två saker samtidigt: de förlänger inbromsningen lite, så att G-kraften blir mindre, och de fördelar kraften över en stor yta på de starka delarna av kroppen, så att ingen enskild del tar för mycket. Samma princip, att en längre inbromsning ger mindre kraft, kallas impuls på gymnasiet och finns i Nästa steg.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tippvinkeln beror på förhållandet mellan avståndet från tyngdpunkten ut till stödytans kant och tyngdpunktens höjd. En kub tippar vid 45°, en låda dubbelt så hög som bred redan vid ungefär 27°.',
          'Bilars stabilitet beskrivs med halva spårvidden delad med tyngdpunktens höjd. Låga tal betyder att fordonet välter lättare.',
          'Två föremåls gemensamma tyngdpunkt ligger på linjen mellan dem, närmast det tyngsta. En tyngdpunkt kan ligga utanför föremålet.',
          'G-kraften är accelerationen delad med g. 0–100 km/h på 3 s ger ungefär 0,9 g.',
          'En krock i 50 km/h där fronten trycks ihop 0,5 m ger ungefär 20 g. Utan deformationszon blir det ungefär tio gånger mer.',
          'Kroppen tål mer G-kraft framifrån än från huvud mot fötter, och mer om kraften varar kort och fördelas. Bältet och krockkudden förlänger inbromsningen och fördelar kraften.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] },
        { typ: 'vidare', lankar: [
          { text: '4. Acceleration', bok: 'nasta-kraft-och-rorelse', ankare: 'acceleration' },
          { text: '5. Newtons andra lag', bok: 'nasta-kraft-och-rorelse', ankare: 'newtons-andra-lag' },
          { text: '8. Rörelsemängd och impuls', bok: 'nasta-kraft-och-rorelse', ankare: 'rorelsemangd' }
        ] }
      ]
    }
  ]
});
