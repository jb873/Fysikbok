/* Avsnittssida III, text B: Kraft och friktion – nivån Djupdykning, "Bromssträckan – varför fart och halka är farligt".
 * Joachims källa (Djupdykning-B-Bromsstrackan-redigerad.md, 2026-11-04), införd ordagrant i strömformatet: ## = avsnitt
 * (numrerat), ### = rubrik, ett stycke = ett textblock. Ingen Sammanfattning och inget länkblock (arbetsordern).
 * [BILD S] är figuren stoppstracka; [BILD Y] är figuren friktion med två paneler (torr asfalt och blank is).
 * Avsnitten är andra än på de andra nivåerna: ett nivåbyte härifrån går till Inledningen (bokens början). */
Bok.niva('djupdykning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ett barn springer ut på vägen och bilen måste stanna' },
        { typ: 'text', text: 'Du kör bil genom ett bostadsområde en eftermiddag. Hastighetsmätaren visar 50 km/h, vägen är torr och trafiken är lugn. Plötsligt springer ett barn ut mellan två parkerade bilar, bara några meter framför dig. Du reagerar, trycker ned bromspedalen så hårt du kan och hoppas att bilen hinner stanna.' },
        { typ: 'text', text: 'Men bilen stannar inte direkt, trots att du bromsar för fullt. Under den första korta stunden fortsätter den till och med med nästan oförändrad fart. Sedan börjar den bromsa, men rullar fortfarande flera meter innan den står stilla. Varför kan inte bilen bara stanna när du trycker på bromsen?' },
        { typ: 'text', text: 'Svaret finns i fysikens lagar om rörelse, tröghet och friktion. Enligt tröghetslagen fortsätter ett föremål att röra sig i samma fart så länge ingen resulterande kraft förändrar rörelsen. För att bilen ska stanna måste därför en kraft bromsa den, och vid en vanlig inbromsning kommer denna kraft från friktionen mellan däcken och vägbanan. Hur snabbt bilen kan stanna beror framför allt på hastigheten, förarens reaktionstid och hur mycket grepp däcken har mot vägen.' }
      ]
    },
    {
      id: 'stoppstrackan', titel: 'Stoppsträckan börjar innan bilen bromsar',
      block: [
        { typ: 'rubrik', text: 'Stoppsträckan består av reaktionssträcka och bromssträcka' },
        { typ: 'text', text: 'När föraren upptäcker barnet börjar en kedja av händelser. Först måste ögonen uppfatta situationen, hjärnan förstå faran och kroppen reagera genom att flytta foten till bromspedalen. Under denna tid fortsätter bilen nästan med samma hastighet som tidigare. Sträckan som bilen hinner färdas innan bromsningen börjar kallas reaktionssträcka.' },
        { typ: 'text', text: 'Först när bromsarna börjar verka mot hjulen kan bilen börja minska farten. Den sträcka bilen färdas från att bromsningen börjar tills bilen står helt stilla kallas bromssträcka. Tillsammans bildar reaktionssträckan och bromssträckan bilens stoppsträcka. Det betyder att bilen måste ha tillräckligt med utrymme för båda delarna om föraren ska hinna undvika en olycka.' },

        { typ: 'rubrik', text: 'Under reaktionstiden fortsätter bilen nästan i full fart' },
        { typ: 'text', text: 'Många tror att en bil börjar bromsa i samma ögonblick som föraren ser en fara, men det stämmer inte. Hjärnan behöver tid för att tolka vad som händer och skicka signaler till musklerna. En reaktionstid på omkring en sekund används ofta i enkla beräkningar, även om den verkliga tiden kan vara både kortare och betydligt längre. Under denna sekund fortsätter bilen framåt utan att föraren ännu har påbörjat bromsningen.' },
        { typ: 'text', text: 'Om föraren är trött, distraherad eller tittar på mobilen kan reaktionstiden öka kraftigt. Tänk dig att föraren tittar ned på telefonen i två sekunder samtidigt som bilen kör i 50 km/h. Under den tiden hinner bilen färdas nästan 28 meter utan att föraren ser vad som händer framför bilen. Det är längre än flera personbilar parkerade efter varandra.' },

        { typ: 'rubrik', text: 'Dubbelt så hög fart ger dubbelt så lång reaktionssträcka' },
        { typ: 'text', text: 'Föreställ dig två bilar vars förare har samma reaktionstid på en sekund. Den ena bilen kör i 30 km/h och hinner då ungefär 8 meter innan föraren börjar bromsa. Den andra bilen kör i 60 km/h och hinner ungefär 17 meter under samma tid. Eftersom den andra bilen färdas dubbelt så snabbt blir också reaktionssträckan dubbelt så lång.' },
        { typ: 'text', text: 'Det här sambandet är enkelt att förstå om vi tänker på hur långt bilen hinner under en viss tid. Om farten fördubblas hinner bilen dubbelt så långt på varje sekund. Om reaktionstiden däremot fördubblas medan farten är densamma, fördubblas också reaktionssträckan. En förare kan alltså få en längre reaktionssträcka både genom att köra fortare och genom att reagera långsammare.' }
      ]
    },
    {
      id: 'bromsstrackan', titel: 'Bromssträckan ökar mycket snabbare än hastigheten',
      block: [
        { typ: 'rubrik', text: 'En bil med dubbelt så hög fart behöver ungefär fyra gånger så lång bromssträcka' },
        { typ: 'text', text: 'När föraren trycker ned bromspedalen skapas bromskrafter i bilens bromssystem. Bromsarna motverkar hjulens rotation, och friktionen mellan däcken och vägbanan ger en kraft som bromsar bilens rörelse framåt. Hur stor bromskraften kan bli beror bland annat på hur bra däcken greppar vägen. På torr asfalt med bra däck kan bilen bromsas betydligt kraftigare än på en isig väg.' },
        { typ: 'text', text: 'Men hastigheten har en ännu större betydelse än många föreställer sig. Om en bil fördubblar sin hastighet blir bromssträckan ungefär fyra gånger så lång, förutsatt att bromsningen sker med samma retardation. Även om bromskraften är lika stor behövs alltså en mycket längre sträcka för att få bilen att stanna.' },
        { typ: 'text', text: 'Man kan också tänka på vad som händer under själva inbromsningen. Om friktionen ger samma retardation tar det dubbelt så lång tid att stanna från dubbelt så hög fart. Samtidigt färdas bilen i genomsnitt dubbelt så snabbt under inbromsningen. Kombinationen av dubbelt så lång tid och dubbelt så hög medelfart gör att bromssträckan blir fyra gånger så lång.' },

        { typ: 'rubrik', text: 'Skillnaden mellan 30 och 70 km/h kan avgöra om en olycka sker' },
        { typ: 'text', text: 'Tänk dig att tre bilar kör på samma torra asfalt med likadana däck och lika bra bromsar. Alla tre förarna har en reaktionstid på en sekund och bromsar sedan kraftigt. Bilen som kör i 30 km/h får ungefär 8 meter reaktionssträcka och 4–5 meter bromssträcka, vilket ger en stoppsträcka på omkring 13 meter. Det är ungefär längden av tre vanliga personbilar.' },
        { typ: 'text', text: 'När hastigheten ökar till 50 km/h blir reaktionssträckan cirka 14 meter och bromssträckan ungefär 12 meter. Den sammanlagda stoppsträckan blir då omkring 26 meter, alltså ungefär dubbelt så lång som vid 30 km/h. Ökar vi hastigheten till 70 km/h blir reaktionssträckan cirka 19 meter och bromssträckan cirka 24 meter. Stoppsträckan har nu vuxit till ungefär 43 meter.' },
        // BILD S: stoppsträckan vid 30, 50 och 70 km/h
        { typ: 'figur', namn: 'stoppstracka',
          rader: [{ fart: '30 km/h', reaktion: 8, broms: 5 }, { fart: '50 km/h', reaktion: 14, broms: 12 }, { fart: '70 km/h', reaktion: 19, broms: 24 }],
          markering: { varde: 26, text: 'barnet' }, enhet: 'm',
          bildtext: 'Stoppsträckan = reaktionssträcka + bromssträcka. Reaktionssträckan växer i takt med farten, bromssträckan mycket snabbare.',
          beskrivning: 'Tre liggande staplar för 30, 50 och 70 km/h. Varje stapel består av reaktionssträcka och bromssträcka: 8 + 5 = 13 m, 14 + 12 = 26 m och 19 + 24 = 43 m. En streckad linje vid 26 m visar var barnet står: bilen i 50 km/h hinner precis stanna, bilen i 70 km/h gör det inte.' },

        { typ: 'rubrik', text: 'En liten hastighetsökning kan få stora konsekvenser' },
        { typ: 'text', text: 'Det är lätt att tro att skillnaden mellan 50 och 70 km/h inte är särskilt stor. Men i vårt exempel behöver bilen som kör i 70 km/h omkring 17 meter längre sträcka för att stanna. Om ett barn dyker upp 26 meter framför bilarna kan bilen som kör i 50 km/h precis hinna stanna under de antagna förhållandena. Bilen som kör i 70 km/h har däremot fortfarande betydande fart när den når samma punkt.' },
        { typ: 'text', text: 'Detta är en viktig anledning till att hastighetsgränser är lägre där många människor rör sig nära trafiken. En bil som träffar en människa med högre fart kan dessutom orsaka betydligt svårare skador. En krock i dubbelt så hög fart blir ungefär fyra gånger så kraftfull – varför förklaras i avsnittet om energi. Hastigheten påverkar alltså både möjligheten att undvika olyckan och hur allvarliga följderna kan bli.' }
      ]
    },
    {
      id: 'friktionen-avgor', titel: 'Friktionen avgör hur kraftigt bilen kan bromsa',
      block: [
        { typ: 'rubrik', text: 'Torr asfalt ger bättre grepp än vatten och is' },
        { typ: 'text', text: 'På en torr asfaltväg kan gummidäcken få ett bra grepp mot underlaget. När föraren bromsar kan friktionen mellan däcken och vägen därför ge en stor bromsande kraft. Om asfalten är våt kan greppet minska, särskilt om däcken är slitna eller vägen har dålig ytstruktur. På blank is blir friktionen ofta mycket mindre och bilen får betydligt svårare att bromsa.' },
        { typ: 'text', text: 'Du har tidigare lärt dig att friktionen kan öka när en kraft försöker få två ytor att glida mot varandra, men bara upp till en viss gräns. Samma princip gäller mellan bildäck och vägbanan. Så länge däcken har grepp kan friktionen anpassa sig efter hur hårt bilen bromsar, men när gränsen nås kan däcken börja slira. På is är denna gräns mycket lägre än på torr asfalt.' },

        { typ: 'rubrik', text: 'På blank is kan bromssträckan bli många gånger längre' },
        { typ: 'text', text: 'Föreställ dig att bilen kör i 50 km/h och att föraren börjar bromsa kraftigt. På torr asfalt kanske bromssträckan blir omkring 12 meter, men på blank is kan den under svåra förhållanden bli 60–100 meter eller ännu längre. Det motsvarar ungefär fem till tio gånger så lång bromssträcka som på den torra vägen. Exakt hur långt bilen glider beror på däck, temperatur, isens yta och andra förhållanden.' },
        { typ: 'text', text: 'Många tror att en bil alltid bromsar lika effektivt om man bara trycker tillräckligt hårt på bromspedalen. Men bromsarna kan inte skapa mer grepp mellan däcken och vägen än vad friktionen tillåter. När däcken redan har nått gränsen för sitt grepp hjälper det inte att trycka ännu hårdare. Det är därför även moderna bilar med mycket bra bromssystem kan få extremt långa bromssträckor på is.' },
        // BILD Y: däcket mot torr asfalt och mot is (friktion med två paneler)
        { typ: 'figur', namn: 'friktion',
          paneler: [{ rubrik: 'Torr asfalt', foremal: 'Däck', underlag: 'Asfalt', ytor: 'grov' },
                    { rubrik: 'Blank is', foremal: 'Däck', underlag: 'Is', ytor: 'slat' }],
          bildtext: 'Däcket mot torr asfalt och mot blank is. Ju slätare ytorna är, desto lägre är gränsen för hur stor friktionen kan bli.',
          beskrivning: 'Två förstorade ytor. Till vänster ett däck mot torr asfalt: båda ytorna är ojämna och hakar i varandra. Till höger ett däck mot blank is: isen är nästan helt slät och ger lite grepp.' },

        { typ: 'rubrik', text: 'Vinterdäck och sand förbättrar greppet mot hala vägar' },
        { typ: 'text', text: 'För att minska risken för halka försöker man öka friktionen mellan däcken och vägen. Vinterdäck har gummiblandningar och mönster som är anpassade för kyla, snö och is. Dubbdäck har dessutom små metalldubbar som kan få grepp i isen och förbättra bromsförmågan på mycket hala underlag. Det är därför rätt däck kan göra stor skillnad när temperaturen sjunker.' },
        { typ: 'text', text: 'En annan metod är att sprida sand eller grus på isiga vägar. Sandkornen skapar en grövre kontaktyta som gör att däcken lättare kan få grepp. Samma princip används när man sandar gångvägar för att människor inte ska halka. Både bilar och skor behöver friktion mot underlaget för att kunna bromsa och ändra riktning.' },

        { typ: 'rubrik', text: 'Slitna däck och vattenplaning kan göra att bilen förlorar greppet' },
        { typ: 'text', text: 'När det regnar behöver däckens mönster leda undan vattnet mellan gummit och vägbanan. Om däcken är slitna eller om bilen kör mycket fort kan vatten samlas framför och under däcket. I värsta fall lyfts däcket delvis från vägbanan och glider ovanpå ett lager vatten. Detta kallas vattenplaning.' },
        { typ: 'text', text: 'Vid vattenplaning förlorar däcken mycket av kontakten med asfalten. Då kan både bromsförmågan och möjligheten att styra bilen försämras kraftigt. Föraren kan uppleva att bilen inte längre reagerar som den brukar på rattens rörelser. Det visar varför däckens mönsterdjup, vägbanans vattenmängd och bilens hastighet har så stor betydelse vid regn.' },

        { typ: 'rubrik', text: 'ABS-bromsar hindrar hjulen från att låsa sig' },
        { typ: 'text', text: 'Föreställ dig att en förare trycker mycket hårt på bromspedalen på en hal väg. Om hjulen låser sig slutar de rotera, och däcken börjar glida över vägen. Då uppstår glidfriktion i stället för det grepp som ett rullande hjul normalt kan utnyttja. Eftersom glidfriktionen ofta är mindre än den maximala vilofriktionen kan bilen få längre bromssträcka och bli svårare att styra.' },
        { typ: 'text', text: 'Moderna bilar har därför ett låsningsfritt bromssystem som kallas ABS. Systemet känner av när ett hjul håller på att låsa sig och minskar tillfälligt bromstrycket så att hjulet kan fortsätta rotera. Sedan ökas bromstrycket igen, och detta upprepas många gånger varje sekund. På så sätt försöker systemet utnyttja så mycket av däckens grepp som möjligt utan att hjulen låser sig.' },
        { typ: 'text', text: 'En viktig fördel med ABS är att föraren vanligtvis kan fortsätta styra bilen under kraftig inbromsning. På många vägunderlag kan systemet också ge kortare bromssträcka än om hjulen låser sig helt. Men ABS innebär inte alltid den kortaste möjliga bromssträckan på varje underlag, exempelvis på löst grus eller djup snö. Systemet kan inte heller skapa mer friktion än vad däcken och underlaget tillåter.' }
      ]
    },
    {
      id: 'sakerhetsbaltet', titel: 'Säkerhetsbältet stoppar kroppen när bilen stannar',
      block: [
        { typ: 'rubrik', text: 'Kroppen fortsätter framåt på grund av trögheten' },
        { typ: 'text', text: 'När en bil bromsar kraftigt minskar bilens hastighet, men människorna inuti bilen har också en rörelse som måste förändras. Enligt tröghetslagen fortsätter kroppen framåt om ingen kraft bromsar den. Det är därför du tippar framåt när en buss bromsar hastigt. Om bilen krockar och stannar mycket snabbt kan kroppen fortsätta framåt med nästan samma hastighet som bilen hade före krocken.' },
        { typ: 'text', text: 'Många tror att det uppstår en särskild kraft som kastar passagerarna framåt vid en inbromsning. Men det behövs ingen sådan framåtriktad kraft för att förklara rörelsen. Kroppen fortsätter helt enkelt med sin tidigare hastighet på grund av trögheten. Det som behövs är i stället en kraft som bromsar kroppen så att den kan stanna tillsammans med bilen.' },

        { typ: 'rubrik', text: 'Bilbältet och krockkudden minskar risken för svåra skador' },
        { typ: 'text', text: 'Bilbältet håller kvar kroppen och ger den bromsande kraft som behövs för att minska hastigheten. Vid en kraftig inbromsning eller krock börjar bältet bromsa kroppen och fördelar kraften över starkare delar av kroppen, framför allt bröstkorgen och bäckenet. Bältets konstruktion hjälper också till att förlänga tiden som kroppen bromsas under. Det minskar den genomsnittliga kraft som annars skulle behövas för att stoppa kroppen mycket tvärt.' },
        { typ: 'text', text: 'Krockkudden fungerar som ett extra skydd vid vissa kollisioner. Den fylls mycket snabbt med gas och hjälper till att bromsa framför allt huvudet och överkroppen under en något längre tid och över en större yta. Därmed kan belastningen på kroppen minska. Krockkudden är konstruerad för att samverka med bilbältet, inte ersätta det.' }
      ]
    },
    {
      id: 'cyklar-och-mopeder', titel: 'Samma fysik gäller för cyklar och mopeder',
      block: [
        { typ: 'rubrik', text: 'En cykel behöver också en viss sträcka för att stanna' },
        { typ: 'text', text: 'Tänk dig att du cyklar i 20 km/h på en rak cykelväg. Plötsligt kliver en fotgängare ut framför dig och du måste bromsa kraftigt. Precis som för en bil börjar stoppsträckan med den sträcka du hinner cykla innan du reagerar. Därefter behöver däcken tillräckligt med friktion mot marken för att minska hastigheten.' },
        { typ: 'text', text: 'Om du fördubblar cykelns fart från 10 till 20 km/h blir bromssträckan ungefär fyra gånger så lång, om retardationen är densamma. Det gäller alltså samma samband för cyklar som för bilar, även om de faktiska bromssträckorna kan skilja sig åt. På en cykel påverkas bromsningen dessutom av hur hårt du använder fram- och bakbromsen samt hur kroppens tyngd fördelas. Om du bromsar för hårt med framhjulet kan bakhjulet lyfta, medan ett låst hjul kan få cykeln att sladda.' },

        { typ: 'rubrik', text: 'Grus och is kan få cykeln att förlora greppet' },
        { typ: 'text', text: 'På en cykel märks underlagets betydelse särskilt tydligt. När du cyklar på asfalt kan däcken normalt få ett bra grepp, men på löst grus kan de lättare börja slira eller glida. På is kan friktionen bli så liten att både bromsning och styrning blir mycket svåra. Det är särskilt farligt i kurvor, eftersom däcken då behöver grepp både för att hålla cykeln upprätt och för att ändra dess rörelseriktning.' },
        { typ: 'text', text: 'Samma fysik gäller för en moped som färdas i högre hastighet. Även om mopeden är mindre än en bil kan den behöva en lång sträcka för att stanna. Föraren måste därför anpassa hastigheten efter underlaget och hålla tillräckligt avstånd till trafiken framför. Att köra långsammare på grus, våta löv eller is handlar inte bara om försiktighet utan om att den tillgängliga friktionen är begränsad.' }
      ]
    },
    {
      id: 'fysikens-lagar', titel: 'Fysikens lagar avgör om du hinner stanna',
      block: [
        { typ: 'rubrik', text: 'Hastighet, friktion och reaktionstid bestämmer stoppsträckan' },
        { typ: 'text', text: 'Vi återvänder till barnet som plötsligt springer ut framför bilen. Om föraren hinner stanna beror på hur långt bilen färdas innan bromsningen börjar och hur lång sträcka som sedan behövs för att få den att stanna. Reaktionstiden avgör den första delen, medan hastigheten och friktionen har stor betydelse för den andra. När hastigheten ökar blir båda delarna längre, men bromssträckan växer mycket snabbare än farten.' },
        { typ: 'text', text: 'Föraren kan inte bestämma hur fysikens lagar ska fungera, men kan påverka förutsättningarna. Genom att sänka hastigheten minskar både reaktionssträckan och bromssträckan. Genom att vara uppmärksam och undvika distraktioner kan föraren reagera snabbare, medan rätt däck och anpassad körning hjälper till att utnyttja friktionen. Vägbanans skick kan föraren däremot inte alltid påverka, vilket gör det ännu viktigare att anpassa farten efter förhållandena.' },
        { typ: 'text', text: 'Nästa gång du ser en bil bromsa kraftigt eller själv behöver stanna snabbt med cykeln kan du tänka på vad som faktiskt händer. Föremålet vill inte fortsätta därför att någon osynlig kraft driver det framåt, utan därför att det har tröghet. För att förändra rörelsen måste en bromsande kraft verka, och den kraften är begränsad av greppet mot underlaget. Det är därför några extra kilometer i timmen, en sekunds ouppmärksamhet eller en isig väg kan vara skillnaden mellan att hinna stanna och att inte göra det.' }
      ]
    }
  ]
});
