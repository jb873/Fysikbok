/* Avsnittssida III, text D: Tyngdkraften – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims källa (III-D-Tyngdkraften-alla-nivaer.md, 2026-11-04), införd ordagrant i strömformatet: ### = rubrik,
 * ett stycke = ett textblock. [BILD T] och [BILD F] är fotot block-rep.jpg och [BILD M] fotot dynamometer.jpg, med
 * kraftpilar (bildpilar, data ur arbetsordern III D; lägena justerade så att pilar och etiketter inte överlappar).
 * "Det här lär du dig:" står som liten rubrik utan kolon, som i text A–C.
 * Avsnittens id (inledning, tyngdkraft-och-normalkraft, att-mata-kraft, massa-och-tyngd, sammanfattning) är desamma på alla
 * nivåer; huvudrubrikerna (avsnitten) står i innehållsförteckningen, ###-rubrikerna bara i texten (Joachims beslut 2026-11-04). */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tyngdkraften' },
        { typ: 'text', text: 'Hittills har du dragit ett block över ett bord. Men det finns en kraft som verkar på blocket hela tiden, även när ingen drar i det: jordens dragningskraft. I den här texten får du veta vad den gör, varför blocket ändå inte faller genom bordet, och varför massa och tyngd inte är samma sak.' },
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
        { typ: 'rubrik', text: 'Jordens dragningskraft påverkar alla föremål' },
        { typ: 'text', text: 'Allt som har massa påverkas av jordens dragningskraft, som kallas *tyngdkraft*. Det är tyngdkraften som gör att en sten faller mot marken när du släpper den och som håller oss kvar på jordytan. Tyngdkraften är alltid riktad mot jordens centrum, vilket förklarar varför föremål faller nedåt oavsett var på jorden vi befinner oss. En människa som står i Sverige och en människa som står på andra sidan jordklotet påverkas båda av en kraft riktad mot jordens mitt.' },
        { typ: 'text', text: 'Alla föremål som har massa drar faktiskt i varandra genom *gravitation*. Du och stolen du sitter på drar exempelvis i varandra, men kraften är så liten att du inte märker den. Jorden har däremot en enorm massa och utövar därför en mycket större dragningskraft på föremålen omkring oss. Det är denna kraft vi märker som tyngdkraft i vardagen.' },

        { typ: 'rubrik', text: 'Tyngdkraften påverkar även föremål som ligger stilla' },
        { typ: 'text', text: 'Många tror att tyngdkraften bara verkar när något faller, men det stämmer inte. Tänk på träblocket som vi tidigare drog över ett bord för att undersöka dragkraft och friktion. Även när blocket ligger helt stilla drar jorden det nedåt med sin tyngdkraft. Kraften försvinner alltså inte bara för att blocket har slutat röra sig.' },
        { typ: 'text', text: 'Vi kan visa tyngdkraften med en kraftpil som pekar rakt nedåt från blockets tyngdpunkt. *Tyngdpunkten|tyngdpunkt* är den punkt där vi kan tänka oss att föremålets hela tyngdkraft verkar. På ett jämnt och symmetriskt träblock ligger tyngdpunkten ungefär mitt i blocket.' },
        // BILD T: tyngdkraften på blocket
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'tyngdkraft', fran: [300, 552], till: [300, 800], etikett: [520, 830] }],
          beskrivning: 'En person drar i ett rep fäst i ett träblock på ett bord. En pil pekar rakt nedåt från blockets mitt: tyngdkraften.' },

        { typ: 'rubrik', text: 'Bordet trycker blocket uppåt med en normalkraft' },
        { typ: 'text', text: 'Om tyngdkraften hela tiden drar blocket nedåt kan man undra varför det inte faller genom bordet. Förklaringen är att bordet påverkar blocket med en kraft uppåt, som kallas *normalkraft*. När blocket ligger stilla på ett vågrätt bord är normalkraften lika stor som tyngdkraften, men riktad åt motsatt håll. De båda krafterna verkar på samma föremål och tar därför ut varandra, vilket innebär att blocket är i *jämvikt* i lodrät riktning.' },
        { typ: 'text', text: 'Normalkraften kan förändras beroende på hur hårt blocket trycker mot bordet. Om vi lägger en tung sten ovanpå blocket ökar den sammanlagda tyngden och bordet måste trycka uppåt med en större kraft. Bordet kan därför anpassa sin normalkraft efter belastningen, ungefär som friktionen kan anpassa sig efter dragkraften. Men det finns en gräns för hur mycket belastning bordet tål, och blir kraften för stor kan det gå sönder.' },

        { typ: 'rubrik', text: 'Tyngdkraften och normalkraften är inte kraft och motkraft' },
        { typ: 'text', text: 'Många tror att normalkraften är tyngdkraftens motkraft, eftersom de är lika stora och riktade åt motsatta håll. Men det stämmer inte med lagen om kraft och motkraft som du har läst om, eftersom kraft och motkraft alltid verkar på två olika föremål. Tyngdkraften och normalkraften verkar däremot båda på samma block. Därför kan de ta ut varandra och ge jämvikt – något som kraft och motkraft aldrig gör.' },

        { typ: 'rubrik', text: 'Fyra krafter påverkar blocket när det dras över bordet' },
        { typ: 'text', text: 'När vi drar träblocket över bordet påverkas det av fyra krafter. Tyngdkraften drar nedåt, normalkraften trycker uppåt, dragkraften verkar framåt och friktionen verkar bakåt. Eftersom tyngdkraften och normalkraften tar ut varandra förändras inte blockets rörelse uppåt eller nedåt. Det är i stället skillnaden mellan dragkraften och friktionen som avgör om blocket accelererar, retarderar eller fortsätter i samma fart.' },
        { typ: 'text', text: 'Det viktiga är att undersöka krafterna i varje riktning för sig. Ett block kan alltså vara i jämvikt uppåt och nedåt samtidigt som det accelererar framåt. Om dragkraften är större än friktionen ökar farten framåt, medan lika stora krafter framåt och bakåt innebär att farten inte förändras. På så sätt kan vi använda kraftpilar för att förklara hur flera krafter tillsammans påverkar ett föremåls rörelse.' },
        // BILD F: fyra krafter på blocket – isär så att ingen pil korsar en annan: tyngdkraften från blockets mitt,
        // normalkraften från undersidan (x 420), dragkraften från blockets högra överkant ovanför repet, friktionen
        // från undersidans vänstra del
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [500, 470], till: [740, 470], etikett: [920, 470] },
                  { namn: 'friktion', fran: [250, 640], till: [10, 640], etikett: [140, 745] },
                  { namn: 'tyngdkraft', fran: [300, 552], till: [300, 800], etikett: [520, 830] },
                  { namn: 'normalkraft', fran: [420, 658], till: [420, 410], etikett: [420, 375] }],
          lika: [[0, 1], [2, 3]],
          beskrivning: 'Samma bild. Fyra pilar på blocket: tyngdkraften nedåt och lika stor normalkraft uppåt, dragkraften framåt och lika stor friktion bakåt.' },

        { typ: 'rubrik', text: 'Ett tyngre block ger större friktion mot bordet' },
        { typ: 'text', text: 'Tänk dig att du först drar en tom trälåda över golvet och sedan fyller den med böcker. Den fyllda lådan har större massa och påverkas därför av en större tyngdkraft. Den trycks hårdare mot golvet, vilket gör att golvet också påverkar lådan med en större normalkraft. På samma underlag leder den större normalkraften vanligtvis till större friktion, och därför behöver du dra hårdare för att få lådan att glida.' },
      ]
    },
    {
      id: 'att-mata-kraft', titel: 'Att mäta kraft',
      block: [
        { typ: 'rubrik', text: 'Kraft mäts i newton med hjälp av en dynamometer' },
        { typ: 'text', text: 'När du lyfter en tung matkasse känner du att du måste använda en större kraft än när du lyfter en lätt kasse. För att kunna jämföra krafter behöver vi mäta hur stora de är, och enheten för kraft är *newton* (N). Ett vanligt mätinstrument är en *dynamometer*, som innehåller en fjäder som dras ut när den belastas. Ju större kraft som påverkar fjädern, desto längre dras den ut.' },
        { typ: 'text', text: 'Om du hänger ett föremål i en dynamometer drar jordens tyngdkraft föremålet nedåt. Föremålet drar i sin tur i dynamometerns fjäder, som dras ut tills fjädern drar föremålet uppåt lika hårt som tyngdkraften drar det nedåt. På instrumentets skala kan du då läsa av hur stor tyngdkraften är i newton. Ett tungt föremål ger därför ett större utslag än ett lätt föremål.' },
        // BILD M: dynamometern – utsnittet visar hela skalan med visaren och påsen; maxhojd 0.43 (Joachims beslut: med 0.45
        // ryms stycket före och bilden inte på samma sida i 1366×633, och sidan före blir tunn)
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/dynamometer.jpg', bredd: 1086, hojd: 1448, utsnitt: [0, 420, 1086, 1028], maxhojd: 0.43,
          pilar: [{ namn: 'tyngdkraft', fran: [540, 1300], till: [540, 1440], etikett: [790, 1395] },
                  { namn: 'fjäderns kraft', fran: [540, 1205], till: [540, 1065], etikett: [820, 1120] }],
          lika: [[0, 1]],
          bildtext: 'Dynamometern visar 2 N. Påsen har tyngden 2 N – och massan ungefär 0,2 kg.',
          beskrivning: 'En dynamometer med en fjäder och en skala från 0 till 5 newton hänger från en krok. I den nedre kroken hänger en tygpåse. Visaren står på 2. Två lika långa pilar på påsen: tyngdkraften nedåt och fjäderns kraft uppåt.' },

      ]
    },
    {
      id: 'massa-och-tyngd', titel: 'Massa och tyngd',
      block: [
        { typ: 'rubrik', text: 'Massa beskriver mängden materia medan tyngd är en kraft' },
        { typ: 'text', text: 'När vi beskriver ett föremål behöver vi skilja mellan två begrepp: *massa* och *tyngd*. Massan beskriver hur mycket materia föremålet innehåller och mäts i kilogram (kg). Tyngden är däremot den kraft som jorden drar föremålet med, och den mäts i newton (N). Ett föremål kan därför ha samma massa på olika platser men olika tyngd beroende på hur stark gravitationen är.' },
        { typ: 'text', text: 'Tänk dig en ryggsäck som innehåller böcker med den sammanlagda massan 5 kg. Böckerna innehåller lika mycket materia oavsett om ryggsäcken finns i Sverige eller på månen. Däremot förändras den kraft som drar böckerna nedåt när gravitationen förändras. Det är därför viktigt att inte blanda ihop massa med tyngd.' },

        { typ: 'rubrik', text: 'Varje kilogram påverkas av ungefär 10 newton på jorden' },
        { typ: 'text', text: 'På jordytan är tyngdkraften ungefär 9,8 newton för varje kilogram massa. För att göra beräkningar enklare avrundar vi vanligtvis detta till 10 N per kilogram. Det betyder att ett föremål med massan 1 kg har tyngden ungefär 10 N, medan ett föremål med massan 5 kg har tyngden ungefär 50 N.' },
        { typ: 'text', text: 'Sambandet är enkelt: för att beräkna tyngden i newton multiplicerar vi massan i kilogram med ungefär tio. En person med massan 60 kg påverkas därför av en tyngdkraft på cirka 600 N. Om personens massa fördubblas blir också tyngdkraften dubbelt så stor, så länge gravitationen är densamma.' },

        { typ: 'rubrik', text: 'När vi säger att vi väger 60 kg menar vi egentligen massan' },
        { typ: 'text', text: 'I vardagen använder vi ofta ordet vikt när vi pratar om hur många kilogram en människa eller ett föremål väger. Många tror därför att kilogram är en enhet för tyngd, men i fysiken är kilogram en enhet för massa. En person som säger att den väger 60 kg anger egentligen sin massa, medan tyngden på jorden är ungefär 600 N.' },
        { typ: 'text', text: 'En vanlig badrumsvåg mäter hur hårt du trycker mot vågen när du står stilla på den. Vågen är inställd för jordens gravitation och räknar om kraften till ett värde i kilogram. Därför visar den normalt din massa, trots att själva mätningen bygger på en kraft. I fysiken använder vi alltså kilogram för massa och newton för tyngd.' },

        { typ: 'rubrik', text: 'På månen är massan densamma men tyngden mindre' },
        { typ: 'text', text: 'Om du kunde resa till månen skulle du märka att det är betydligt lättare att hoppa högt och lyfta tunga föremål. Det beror på att månens dragningskraft är ungefär en sjättedel av jordens. En person med massan 60 kg har tyngden ungefär 600 N på jorden men bara omkring 100 N på månen. Massan är däremot fortfarande exakt densamma, 60 kg.' },
        { typ: 'text', text: 'Många tror att man blir lättare på månen därför att en del av massan försvinner, men det stämmer inte. Kroppen innehåller fortfarande lika mycket materia och samma antal partiklar som på jorden. Skillnaden är att månen drar i kroppen med en svagare kraft. Därför kan en astronaut hoppa högre på månen utan att ha förlorat någon massa.' },

        { typ: 'rubrik', text: 'På månen blir friktionen mindre men trögheten är densamma' },
        { typ: 'text', text: 'Tänk dig att vi tar med oss träblocket från bordet och placerar det på ett liknande underlag på månen. Eftersom månens tyngdkraft är svagare trycks blocket inte lika hårt mot underlaget, vilket innebär att normalkraften blir mindre. Om materialet och kontaktytorna är desamma blir även friktionen mindre, och det behövs därför mindre kraft för att övervinna friktionen när vi drar blocket.' },
        { typ: 'text', text: 'Men blockets massa har inte förändrats, och därför är dess tröghet fortfarande densamma. Många tror att ett föremål som väger mindre på månen automatiskt är lättare att få i gång eller stoppa, men så är det inte. Om vi bortser från friktionen krävs samma kraft för att ge blocket en viss acceleration på månen som på jorden, eftersom massan är oförändrad. Blocket har alltså lika stor tröghet även om tyngdkraften är mycket mindre.' },
        { typ: 'text', text: 'Detta visar den avgörande skillnaden mellan massa och tyngd. Tyngden bestämmer hur hårt ett föremål trycks mot underlaget – och därmed hur stor friktionen blir. Massan bestämmer däremot hur trögt föremålet är, alltså hur svårt det är att ändra dess fart. Genom att skilja mellan dessa begrepp kan vi förstå både varför friktionen förändras på månen och varför föremålets tröghet är densamma.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          '*Tyngdkraften|tyngdkraft* är jordens dragningskraft. Den drar allt mot jordens centrum – också det som ligger stilla.',
          'Bordet trycker uppåt med en *normalkraft*. Tyngdkraften och normalkraften verkar båda på blocket och tar ut varandra – jämvikt, inte kraft och motkraft.',
          'Kraft mäts i *newton* (N) med en *dynamometer*. Varje kilogram dras nedåt med ungefär 10 N på jorden.',
          '*Massa* är hur mycket materia något innehåller (kg). *Tyngd* är hur hårt jorden drar i det (N).',
          'På månen är massan densamma men tyngden en sjättedel. Friktionen blir mindre, men trögheten är densamma.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
