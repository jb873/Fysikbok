/* Avsnittssida III, text D: Tyngdkraften – nivån Enkel. En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims källa (III-D-Tyngdkraften-alla-nivaer.md, 2026-11-04), införd ordagrant i strömformatet: ### = rubrik,
 * ett stycke = ett textblock. Samma bilder som Standard ([BILD T], [BILD F], [BILD M], bildpilar). "Det här lär du
 * dig:" står som liten rubrik utan kolon, som i text A–C.
 * Avsnittens id (inledning, tyngdkraft-och-normalkraft, att-mata-kraft, massa-och-tyngd, sammanfattning) är desamma på alla
 * nivåer; huvudrubrikerna (avsnitten) står i innehållsförteckningen, ###-rubrikerna bara i texten (Joachims beslut 2026-11-04). */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tyngdkraften' },
        { typ: 'text', text: 'Du har dragit ett block över ett bord. Men det finns en kraft som verkar på blocket hela tiden, även när ingen drar i det. Det är jordens dragningskraft. I den här texten får du veta vad den gör. Du får också veta varför blocket inte faller genom bordet, och varför massa och tyngd inte är samma sak.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*tyngdkraft* och *normalkraft* – och de fyra krafterna på blocket',
          'hur kraft mäts i *newton* med en *dynamometer*',
          'skillnaden mellan *massa* och *tyngd* – på jorden och på månen'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tyngdkraft-och-normalkraft', titel: 'Tyngdkraften och normalkraften',
      block: [
        { typ: 'rubrik', text: 'Jorden drar allt mot sig' },
        { typ: 'text', text: 'Släpp en penna. Den faller ner mot golvet. Hoppa upp. Du landar igen. Det är för att jorden drar i allt som finns runt den. Den kraften kallas *tyngdkraft*. Tyngdkraften är det som håller dig kvar på marken, och det som får saker att falla när du släpper dem.' },

        { typ: 'rubrik', text: 'Tyngdkraften drar mot jordens mitt' },
        { typ: 'text', text: 'Tyngdkraften drar alltid mot jordens mitt. Därför faller saker ”nedåt” var du än står på jorden. En person i Sverige och en person i Australien dras båda mot jordens mitt. För båda två känns det som att saker faller rakt ner.' },

        { typ: 'rubrik', text: 'Allt som har massa drar i varandra' },
        { typ: 'text', text: 'Det är inte bara jorden som drar. Allt som har massa drar i varandra. Det kallas *gravitation*. Du och stolen du sitter på drar faktiskt lite i varandra. Men den kraften är så liten att du aldrig märker den. Jorden är så enormt stor att den drar mycket hårdare. Därför är det jordens dragning vi märker.' },

        { typ: 'rubrik', text: 'Tyngdkraften verkar också när blocket ligger still' },
        { typ: 'text', text: 'Många tror att tyngdkraften bara verkar när något faller. Men så är det inte. Tänk på träblocket på bordet. Det ligger helt stilla. Ändå drar jorden i det hela tiden. Kraften försvinner inte bara för att blocket inte rör sig.' },
        // BILD T: tyngdkraften på blocket
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'tyngdkraft', fran: [300, 552], till: [300, 800], etikett: [520, 830] }],
          beskrivning: 'En person drar i ett rep fäst i ett träblock på ett bord. En pil pekar rakt nedåt från blockets mitt: tyngdkraften.' },
        { typ: 'text', text: 'Titta på bilden. Pilen pekar rakt ner från blockets mitt. Den visar tyngdkraften. Punkten där pilen börjar kallas *tyngdpunkt*.' },
        { typ: 'text', text: 'Egentligen drar jorden i varje liten bit av blocket – i varje hörn, i mitten och i kanterna. Men det skulle bli väldigt många pilar att rita. Därför låtsas man att hela tyngdkraften drar i en enda punkt. Den punkten är tyngdpunkten. På ett jämnt block, där träet är lika tungt överallt, ligger tyngdpunkten mitt i blocket.' },

        { typ: 'rubrik', text: 'Bordet trycker blocket uppåt' },
        { typ: 'text', text: 'Om jorden hela tiden drar blocket nedåt – varför faller det inte genom bordet? Svaret är att bordet trycker tillbaka. Bordet trycker blocket uppåt. Den kraften kallas *normalkraft*.' },
        { typ: 'text', text: 'Du kan känna normalkraften själv. Håll ut handen med handflatan uppåt och lägg en bok på den. Du känner att boken trycker ner i handen. För att boken inte ska falla måste du trycka uppåt lika mycket. Det är precis det bordet gör med blocket – bordet är som en hand som håller emot.' },
        { typ: 'text', text: 'När blocket ligger still är normalkraften precis lika stor som tyngdkraften. Tyngdkraften drar nedåt, och normalkraften trycker uppåt, lika mycket. Båda krafterna verkar på blocket. Därför tar de ut varandra. Blocket är i *jämvikt* uppåt och nedåt, och det ligger kvar. Det är samma sak som när dragkraften och friktionen var lika stora i texten om kraft och friktion – fast nu gäller det uppåt och nedåt.' },

        { typ: 'rubrik', text: 'Bordet trycker hårdare om blocket är tyngre' },
        { typ: 'text', text: 'Lägg en tung sten ovanpå blocket. Nu drar jorden hårdare i blocket och stenen tillsammans. Då trycker bordet uppåt hårdare också. Normalkraften blir lika stor som den nya tyngden.' },
        { typ: 'text', text: 'Bordet anpassar alltså hur hårt det trycker, precis som friktionen anpassar sig efter hur hårt du drar. Men bordet har en gräns. Om du lägger på för mycket orkar bordet inte trycka tillbaka. Då går det sönder.' },

        { typ: 'rubrik', text: 'Normalkraften är inte tyngdkraftens motkraft' },
        { typ: 'text', text: 'Många tror att normalkraften är motkraften till tyngdkraften. De är ju lika stora och pekar åt var sitt håll. Men så är det inte. Kommer du ihåg regeln om kraft och motkraft? De verkar alltid på två olika saker.' },
        { typ: 'text', text: 'Tyngdkraften verkar på blocket. Normalkraften verkar också på blocket. Båda verkar på samma sak. Därför kan de inte vara kraft och motkraft. De är två olika krafter som tar ut varandra – det är jämvikt.' },

        { typ: 'rubrik', text: 'Blocket har fyra krafter på sig när du drar i det' },
        { typ: 'text', text: 'Nu kan vi samla alla krafterna på blocket. När du drar blocket över bordet verkar fyra krafter på det. Tyngdkraften drar nedåt. Normalkraften trycker uppåt. Dragkraften drar framåt. Friktionen bromsar bakåt.' },
        // BILD F: fyra krafter på blocket (samma som Standard)
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [500, 470], till: [740, 470], etikett: [920, 470] },
                  { namn: 'friktion', fran: [250, 640], till: [10, 640], etikett: [140, 745] },
                  { namn: 'tyngdkraft', fran: [300, 552], till: [300, 800], etikett: [520, 830] },
                  { namn: 'normalkraft', fran: [420, 658], till: [420, 410], etikett: [420, 375] }],
          lika: [[0, 1], [2, 3]],
          beskrivning: 'Samma bild. Fyra pilar på blocket: tyngdkraften nedåt och lika stor normalkraft uppåt, dragkraften framåt och lika stor friktion bakåt.' },

        { typ: 'rubrik', text: 'Titta på en riktning i taget' },
        { typ: 'text', text: 'Fyra krafter kan verka mycket. Men det blir enkelt om du tittar på en riktning i taget.' },
        { typ: 'text', text: 'Uppåt och nedåt: tyngdkraften och normalkraften är lika stora. De tar ut varandra. Därför rör sig blocket inte uppåt eller nedåt.' },
        { typ: 'text', text: 'Framåt och bakåt: här bestämmer dragkraften och friktionen. Om dragkraften är större ökar farten. Om de är lika stora fortsätter blocket i samma fart. Om friktionen är större saktar blocket in. Det är samma sak som du lärde dig i texten om kraft och friktion.' },

        { typ: 'rubrik', text: 'En tyngre låda är svårare att dra' },
        { typ: 'text', text: 'Tänk dig en tom flyttlåda på golvet. Den är lätt att dra. Fyll den nu med böcker. Nu är den mycket svårare att dra. Varför?' },
        { typ: 'text', text: 'Den fulla lådan har större massa. Då drar jorden hårdare i den. Lådan trycks hårdare mot golvet, och golvet trycker tillbaka med en större normalkraft. När ytorna trycks hårdare mot varandra blir friktionen större. Därför måste du dra hårdare.' },
      ]
    },
    {
      id: 'att-mata-kraft', titel: 'Att mäta kraft',
      block: [
        { typ: 'rubrik', text: 'Kraft mäts i newton' },
        { typ: 'text', text: 'Lyft en tung matkasse. Lyft sedan en lätt. Du känner att den tunga kräver mer kraft. För att kunna jämföra krafter mäter vi dem. Enheten för kraft heter *newton*. Den förkortas N.' },

        { typ: 'rubrik', text: 'En dynamometer mäter kraft med en fjäder' },
        { typ: 'text', text: 'Kraft mäter man med en *dynamometer*. Inuti finns en fjäder. När något drar i fjädern dras den ut. Ju hårdare det drar, desto längre dras fjädern ut. Vid fjädern sitter en skala, och där kan man läsa av hur stor kraften är i newton.' },
        // BILD M: dynamometern (samma som Standard)
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/dynamometer.jpg', bredd: 1086, hojd: 1448, utsnitt: [0, 420, 1086, 1028], maxhojd: 0.43,
          pilar: [{ namn: 'tyngdkraft', fran: [540, 1300], till: [540, 1440], etikett: [790, 1395] },
                  { namn: 'fjäderns kraft', fran: [540, 1205], till: [540, 1065], etikett: [820, 1120] }],
          lika: [[0, 1]],
          bildtext: 'Dynamometern visar 2 N. Påsen har tyngden 2 N – och massan ungefär 0,2 kg.',
          beskrivning: 'En dynamometer med en fjäder och en skala från 0 till 5 newton hänger från en krok. I den nedre kroken hänger en tygpåse. Visaren står på 2. Två lika långa pilar på påsen: tyngdkraften nedåt och fjäderns kraft uppåt.' },
        { typ: 'text', text: 'Titta på bilden. Ett föremål hänger i dynamometern. Jorden drar föremålet nedåt, och föremålet drar i fjädern. Fjädern dras ut tills den drar föremålet uppåt lika hårt som jorden drar det nedåt. Då står visaren still, och du kan läsa av tyngdkraften. Ett tungt föremål drar ut fjädern mer än ett lätt.' },

      ]
    },
    {
      id: 'massa-och-tyngd', titel: 'Massa och tyngd',
      block: [
        { typ: 'rubrik', text: 'Massa är hur mycket materia något innehåller' },
        { typ: 'text', text: 'Nu kommer två ord som är lätta att blanda ihop: massa och tyngd. Vi tar dem ett i taget.' },
        { typ: 'text', text: '*Massa* är hur mycket materia något innehåller – hur mycket ”grejer” det är i det. Massa mäts i kilogram, kg. Tänk på en ryggsäck med böcker som har massan 5 kg. Böckerna innehåller lika mycket materia var du än är. I Sverige, på en fjälltopp eller på månen – det är alltid samma böcker.' },

        { typ: 'rubrik', text: 'Tyngd är hur hårt jorden drar' },
        { typ: 'text', text: '*Tyngd* är något annat. Tyngd är hur hårt jorden drar i något. Tyngd är alltså en kraft, och den mäts i newton, N.' },
        { typ: 'text', text: 'Massan är alltid densamma. Men tyngden kan ändras. Om något annat drar svagare än jorden, till exempel månen, blir tyngden mindre. Böckerna är samma, men de dras inte lika hårt.' },

        { typ: 'rubrik', text: 'Varje kilogram dras med ungefär 10 newton' },
        { typ: 'text', text: 'På jorden finns ett enkelt samband. Varje kilogram dras nedåt med ungefär 10 newton. Egentligen är det 9,8 newton, men vi avrundar till 10 för att det ska bli lätt att räkna.' },
        { typ: 'text', text: 'Det betyder att du tar massan i kilogram och gör den tio gånger större. Då får du tyngden i newton. Vi tar det steg för steg.' },
        { typ: 'text', text: 'En liter mjölk har massan ungefär 1 kg. Tio gånger 1 är 10. Mjölkpaketet har alltså tyngden ungefär 10 N. Ryggsäcken med böcker har massan 5 kg. Tio gånger 5 är 50. Ryggsäcken har tyngden ungefär 50 N. En person med massan 60 kg: tio gånger 60 är 600. Personen har tyngden ungefär 600 N.' },
        { typ: 'text', text: 'Lägg märke till att det alltid är massan som kommer först. Massan har du redan, och den ändras inte. Tyngden räknar du ut från massan.' },

        { typ: 'rubrik', text: 'När vi säger att vi väger 60 kg menar vi massan' },
        { typ: 'text', text: 'I vardagen säger vi ”jag väger 60 kilo”. Då använder vi ordet vikt, och vi säger kilogram. Därför tror många att kilogram är en enhet för hur tung man är. Men i fysiken är kilogram en enhet för massa. 60 kg är massan. Tyngden är ungefär 600 N.' },

        { typ: 'rubrik', text: 'Vågen mäter egentligen en kraft' },
        { typ: 'text', text: 'En badrumsvåg fungerar faktiskt nästan som en dynamometer. När du står på vågen trycker du nedåt på den. Vågen mäter hur hårt du trycker – alltså din tyngd. Men vågen är inställd för jorden. Den räknar om kraften och visar svaret i kilogram. Därför ser du din massa på vågen, fast den egentligen har mätt en kraft.' },

        { typ: 'rubrik', text: 'På månen är massan densamma' },
        { typ: 'text', text: 'Tänk dig att du reser till månen. Där skulle du kunna hoppa mycket högre, och tunga saker skulle kännas lätta. Det beror på att månen drar mycket svagare än jorden. Månens dragningskraft är bara ungefär en sjättedel av jordens.' },
        { typ: 'text', text: 'En person med massan 60 kg har tyngden ungefär 600 N på jorden. På månen drar månen bara en sjättedel så hårt. En sjättedel av 600 är 100. Tyngden på månen är alltså ungefär 100 N. Men massan är fortfarande 60 kg. Personen innehåller precis lika mycket materia som förut.' },
        { typ: 'text', text: 'Om personen tog med sig sin badrumsvåg till månen skulle vågen visa ungefär 10 kg. Det är inte för att personen har blivit mindre. Det är för att vågen mäter hur hårt man trycker – och på månen trycker man inte lika hårt. Vågen är bara gjord för att räkna rätt på jorden.' },

        { typ: 'rubrik', text: 'Ingenting försvinner på månen' },
        { typ: 'text', text: 'Många tror att man blir lättare på månen för att något försvinner från kroppen. Men ingenting försvinner. Kroppen är precis likadan. Det enda som är annorlunda är att månen drar svagare. Därför kan astronauter hoppa högt på månen – utan att ha förlorat ett enda gram.' },

        { typ: 'rubrik', text: 'På månen blir friktionen mindre' },
        { typ: 'text', text: 'Ta med träblocket till månen och lägg det på ett likadant bord. Månen drar svagare i blocket. Då trycks blocket inte lika hårt mot bordet, och normalkraften blir mindre. När ytorna inte trycks lika hårt mot varandra blir friktionen mindre. Därför är det lättare att dra blocket på månen.' },

        { typ: 'rubrik', text: 'Men blocket är lika trögt på månen' },
        { typ: 'text', text: 'Här kommer något som överraskar många. Blocket har samma massa på månen. Därför är det lika trögt som på jorden. Det är lika svårt att få upp farten snabbt, och lika svårt att stoppa det när det väl rör sig.' },
        { typ: 'text', text: 'Tänk dig en stor sten på månen. Du kan lyfta den lätt, eftersom månen drar så svagt i den. Men om stenen kommer rullande mot dig är den lika svår att stoppa som på jorden. Den innehåller lika mycket materia, och den är lika trög. Astronauterna som var på månen fick lära sig det. De kunde bära tung utrustning, men de var tvungna att röra sig försiktigt, för det var svårt att stanna.' },
        { typ: 'text', text: 'Massan bestämmer alltså hur trögt något är. Tyngden bestämmer hur hårt något trycks mot underlaget – och därmed hur stor friktionen blir. Det är därför massa och tyngd är två olika saker.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          '*Tyngdkraften|tyngdkraft* är jordens dragningskraft. Den drar allt mot jordens mitt – också det som ligger stilla.',
          'Bordet trycker uppåt med en *normalkraft*. Tyngdkraften och normalkraften verkar båda på blocket och tar ut varandra. Det är jämvikt, inte kraft och motkraft.',
          'Kraft mäts i *newton* (N) med en *dynamometer*. Varje kilogram dras nedåt med ungefär 10 N.',
          '*Massa* är hur mycket materia något innehåller (kg). *Tyngd* är hur hårt jorden drar i det (N).',
          'På månen är massan densamma men tyngden mycket mindre. Friktionen blir mindre, men blocket är lika trögt.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
