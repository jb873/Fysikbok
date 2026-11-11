/* Avsnittssida IV. Fall, kast och balans, text B: Fritt fall – nivån fordjupning (📕). Joachims uppdrag
 * 2026-11-11: kallor/kap3/IV-B-Fritt-fall-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i strömformatet av
 * verktyg/kap3-omvandlare.js --text b: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du dig:" =
 * liten rubrik utan kolon, [EXEMPEL: …] = exempelruta, [RUTA: …] = ruta. Tilläggen enligt III:s norm: rutan "Så
 * bläddrar du" sist i Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i
 * Fördjupningen rutan "Vill du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-b.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Fritt fall i siffror' },
        { typ: 'text', text: 'I Standard såg du att hastigheten i ett fritt fall ökar med ungefär 10 m/s varje sekund. Men hur långt hinner något falla på en sekund, två eller tre? Och varför får en sten och en fjäder exakt samma acceleration i vakuum, fast stenen dras med större kraft? Här går vi ett steg längre och tittar på fallet med siffror, ungefär som man gör på gymnasiet.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur lång *fallsträckan|fallsträcka* blir efter en viss tid',
          'hur hastighet och fallsträcka ser ut i ett diagram',
          'hur du kan mäta din egen reaktionstid med en linjal',
          'varför massan tar ut sig i fritt fall',
          'att tyngdaccelerationen är olika på olika platser',
          'hur gravitationen beror på avståndet'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'fallstracka', titel: 'Hur långt man faller',
      block: [
        { typ: 'rubrik', text: 'Fallsträckan växer snabbare än hastigheten' },
        { typ: 'text', text: 'Hastigheten i ett fritt fall ökar lika mycket varje sekund. Men sträckan som föremålet faller ökar inte lika mycket varje sekund. Den växer allt snabbare. Det beror på att föremålet faller fortare för varje sekund som går, och då hinner det längre.' },
        { typ: 'text', text: 'Under den första sekunden ökar hastigheten från 0 till 10 m/s. Medelhastigheten under den sekunden är därför 5 m/s, och föremålet faller 5 meter. Under nästa sekund ökar hastigheten från 10 till 20 m/s, så medelhastigheten är 15 m/s och föremålet faller 15 meter till. Räknar man så sekund för sekund får man, med g ≈ 10 m/s²:' },
        { typ: 'punkter', punkter: [
          'efter 1 s: 5 m',
          'efter 2 s: 20 m',
          'efter 3 s: 45 m',
          'efter 4 s: 80 m'
        ] },
        { typ: 'text', text: 'Fallsträckan växer med kvadraten på tiden. Dubbel tid ger fyra gånger så lång sträcka, och tre gånger tiden ger nio gånger så lång. I Nästa steg skrivs det som en formel: fallsträckan är g gånger tiden i kvadrat, delat med två.' },
        { typ: 'rubrik', text: 'Galileo hittade mönstret med udda tal' },
        { typ: 'text', text: 'Titta på hur långt föremålet faller under varje enskild sekund: 5 m, sedan 15 m, sedan 25 m, sedan 35 m. Det är 5 gånger 1, 3, 5 och 7, alltså de udda talen. Det mönstret upptäckte den italienske forskaren Galileo Galilei redan på 1600-talet.' },
        { typ: 'text', text: 'Galileo kunde inte mäta ett fritt fall, eftersom det går för fort för hans tids klockor. I stället lät han kulor rulla nedför lutande rännor. Där går rörelsen långsammare men följer samma mönster. Genom att mäta tiden med en vattenklocka kunde han se att sträckorna växte som de udda talen. Det var ett av de första exemplen på att man mätte i stället för att bara resonera, och det är grunden för hur fysiken arbetar i dag.' },
        { typ: 'rubrik', text: 'I ett diagram blir hastigheten en rak linje och sträckan en kurva' },
        { typ: 'text', text: 'Ritar man hastigheten mot tiden blir det en rak linje, eftersom hastigheten ökar lika mycket varje sekund. Linjen lutar mer ju större accelerationen är. Ritar man fallsträckan mot tiden blir det i stället en kurva som blir brantare och brantare, eftersom föremålet hinner längre för varje sekund.' },
        // [BILD B6: två diagram bredvid varandra för ett fritt fall de första fyra sekunderna – hastigheten mot tiden (en rak linje till 40 m/s) och fallsträckan mot tiden (en kurva genom 5, 20, 45 och 80 m)]
        { id: 'bild-b6', typ: 'figur', namn: 'diagram_graf', diagram: [{ rubrik: 'Hastighet', x: { storhet: 'tid', enhet: 's', max: 4, steg: 1, tal: 1 }, y: { storhet: 'hastighet', enhet: 'm/s', max: 40, steg: 10, tal: 10 }, grafer: [{ punkter: [[0, 0], [1, 10], [2, 20], [3, 30], [4, 40]] }] }, { rubrik: 'Fallsträcka', x: { storhet: 'tid', enhet: 's', max: 4, steg: 1, tal: 1 }, y: { storhet: 'fallsträcka', enhet: 'm', max: 80, steg: 20, tal: 20 }, grafer: [{ punkter: [[0, 0], [1, 5], [2, 20], [3, 45], [4, 80]], kurva: true }] }], bildtext: 'Ett fritt fall de första fyra sekunderna (g ≈ 10 m/s²). Hastigheten ökar lika mycket varje sekund: en rak linje. Fallsträckan växer allt snabbare: en kurva.' },
        { typ: 'rubrik', text: 'Hopp från tiometerstornet' },
        { typ: 'text', text: 'Mönstret går också att använda baklänges: vet man fallhöjden kan man räkna ut hur länge fallet varar och hur fort det går.' },
        { typ: 'exempel', rubrik: 'Exempel: Hopp från tiometerstornet', rader: [
          'Efter 1 s har man fallit 5 m och efter 2 s 20 m. 10 m ligger mellan dem, efter ungefär 1,4 s.',
          'Hastigheten är då ungefär 10 · 1,4 = 14 m/s.',
          '14 m/s · 3,6 ≈ 50 km/h. Därför ska man träffa vattnet med fötterna först och kroppen sträckt.'
        ] },
        { typ: 'rubrik', text: 'Du kan mäta din reaktionstid med en linjal' },
        { typ: 'text', text: 'Mönstret kan användas till något praktiskt. Be en kompis hålla en linjal lodrätt, med nollan nedåt. Håll tummen och pekfingret strax nedanför linjalen, utan att röra den. Kompisen släpper linjalen utan förvarning, och du griper den så fort du kan. Läs av hur många centimeter linjalen hann falla.' },
        { typ: 'text', text: 'Eftersom linjalen faller fritt kan sträckan räknas om till en tid. Har den fallit 5 cm tog det ungefär 0,10 s. 20 cm motsvarar ungefär 0,20 s, och 45 cm ungefär 0,30 s. De flesta griper linjalen efter 15–25 cm, alltså en reaktionstid på ungefär 0,2 sekunder. Det är samma tid som en bilförare behöver innan foten ens har börjat röra sig mot bromsen.' }
      ]
    },
    {
      id: 'lika-fort', titel: 'Varför allt faller lika fort',
      block: [
        { typ: 'rubrik', text: 'Massan tar ut sig' },
        { typ: 'text', text: 'En sten med massan 2 kg dras av tyngdkraften med dubbelt så stor kraft som en sten på 1 kg. Ändå faller de lika fort. Hur går det ihop?' },
        { typ: 'text', text: 'Det beror på att massan spelar två roller. Den avgör hur hårt jorden drar, men den avgör också hur trög stenen är, alltså hur svår den är att få fart på. Den tunga stenen dras med dubbel kraft, men den behöver också dubbel kraft för att få samma acceleration. De två effekterna tar ut varandra exakt. Därför får alla föremål samma acceleration i fritt fall, oavsett massa.' },
        { typ: 'text', text: 'Isaac Newton beskrev det med sin andra lag: accelerationen är den resulterande kraften delad med massan. I fritt fall är den resulterande kraften tyngden, som är massan gånger g. Delar man med massan blir bara g kvar. Det är därför tyngdfaktorn g, som du räknar med när du räknar ut tyngd, samtidigt är accelerationen i ett fritt fall.' },
        { typ: 'exempel', rubrik: 'Exempel: Sten och fjäder i siffror', rader: [
          'Stenen: massan 2 kg, tyngden 20 N. Accelerationen blir 20 N / 2 kg = 10 m/s².',
          'Fjädern: massan 5 g = 0,005 kg, tyngden 0,05 N. Accelerationen blir 0,05 N / 0,005 kg = 10 m/s².',
          'Tyngdkraften på stenen är 400 gånger så stor, men accelerationen är densamma.'
        ] },
        { typ: 'rubrik', text: 'Tyngdaccelerationen är olika på olika platser' },
        { typ: 'text', text: 'I Sverige är g ungefär 9,82 m/s². Men talet är inte exakt detsamma överallt på jorden. Vid ekvatorn är det ungefär 9,78 m/s² och vid polerna ungefär 9,83 m/s². Det finns två skäl. Jorden är lite tillplattad, så vid polerna står man närmare jordens mitt. Dessutom roterar jorden, och vid ekvatorn går en del av dragningen åt till att hålla dig kvar i rotationen.' },
        { typ: 'text', text: 'Skillnaderna är små på jorden men stora i resten av solsystemet. På månen är g ungefär 1,6 m/s². Där faller en hammare alltså mycket långsammare än på jorden, men fortfarande lika fort som en fjäder. På Jupiter, vid molntopparna, är g ungefär 25 m/s².' },
        { typ: 'rubrik', text: 'Gravitationen avtar snabbt med avståndet' },
        { typ: 'text', text: 'I Standard såg du att gravitationen blir svagare med större avstånd. Men hur mycket svagare? Newton visade att det är avståndet till jordens mitt som räknas, och att gravitationen avtar med kvadraten på avståndet. Dubbelt så långt från jordens mitt ger en fjärdedel så stor kraft. Tre gånger så långt ger en niondel.' },
        { typ: 'text', text: 'På jordytan är du ungefär 6 400 km från jordens mitt. Om du var på 6 400 km höjd, alltså dubbelt så långt från mitten, skulle tyngdkraften bara vara en fjärdedel av den vanliga. Rymdstationen ISS kretsar däremot på ungefär 400 km höjd. Där är tyngdkraften fortfarande nästan 90 procent av den på marken. Att astronauterna svävar beror alltså inte på att tyngdkraften har försvunnit, utan på att de faller fritt hela tiden. Det kan du läsa mer om i djupdykningen om tyngdlöshet.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Fallsträckan växer med kvadraten på tiden: 5, 20, 45 och 80 meter efter 1, 2, 3 och 4 sekunder.',
          'I ett diagram blir hastigheten en rak linje och fallsträckan en kurva.',
          'Sträckan under varje sekund växer som de udda talen 1, 3, 5, 7 (Galileo).',
          'Med en fallande linjal kan du mäta din reaktionstid: 20 cm är ungefär 0,2 s.'
        ] },
        { typ: 'punkter', punkter: [
          'Massan bestämmer både tyngden och trögheten, så accelerationen blir alltid g.',
          'g är ungefär 9,82 m/s² i Sverige och 1,6 m/s² på månen.',
          'Gravitationen avtar med kvadraten på avståndet: dubbelt avstånd ger en fjärdedel.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] },
        { typ: 'vidare', lankar: [
          { text: '6. Tyngden och fritt fall', bok: 'nasta-kraft-och-rorelse', ankare: 'tyngden-och-fritt-fall' },
          { text: '3. Rörelsen i diagram', bok: 'nasta-kraft-och-rorelse', ankare: 'rorelsen-i-diagram' },
          { text: '5. Newtons andra lag', bok: 'nasta-kraft-och-rorelse', ankare: 'newtons-andra-lag' }
        ] }
      ]
    }
  ]
});
