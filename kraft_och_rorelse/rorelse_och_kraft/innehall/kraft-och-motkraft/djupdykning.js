/* Avsnittssida III, text C: Kraft och motkraft – nivån Djupdykning, "Raketer – att färdas där det inte finns något att
 * trycka mot". Joachims källa (Djupdykning-C-Raketer-redigerad.md, 2026-11-04), införd ordagrant i strömformatet:
 * ## = avsnitt (numrerat), ### = rubrik, ett stycke = ett textblock. Ingen Sammanfattning och inget länkblock.
 * [BILD R] är raket.jpg och [BILD A] astronaut.jpg, med två lika långa pilar på två olika föremål (bildpilar, som
 * BILD C i text C). Etiketterna är långa i förhållande till fotot: de står där de ryms utan att överlappa (se data).
 * Avsnitten är andra än på de andra nivåerna: ett nivåbyte härifrån går till Inledningen (bokens början). */
Bok.niva('djupdykning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'En raket kan accelerera i rymden fast det inte finns något att trycka mot' },
        { typ: 'text', text: 'Föreställ dig en raket som färdas långt ute i rymden, tusentals kilometer från jorden. Runt raketen finns nästan ingen luft, ingen mark och ingenting som den kan ta spjärn mot. Ändå kan astronauterna starta raketmotorn och få raketen att öka farten. Hur är det möjligt att accelerera när det inte finns något utanför raketen att trycka mot?' },
        { typ: 'text', text: 'På jorden är vi vana vid att rörelse uppstår när något trycker mot något annat. När du går framåt trycker fötterna marken bakåt, och marken trycker dig framåt. När en bil accelererar trycker däcken vägen bakåt, och vägen trycker bilen framåt. Det är därför lätt att tro att en raket måste trycka mot luften för att kunna röra sig.' },
        { typ: 'text', text: 'Men om den förklaringen vore riktig skulle raketmotorer sluta fungera när de lämnade jordens atmosfär. I verkligheten fungerar raketmotorer utmärkt i rymdens nästan fullständiga vakuum. De behöver varken luft eller mark att trycka mot för att skapa en framåtriktad kraft. Förklaringen finns i Newtons tredje lag, som du redan känner till som lagen om kraft och motkraft.' }
      ]
    },
    {
      id: 'egen-gas', titel: 'Raketen använder sin egen gas för att skapa en motkraft',
      block: [
        { typ: 'rubrik', text: 'Raketen trycker gasen bakåt och gasen trycker raketen framåt' },
        { typ: 'text', text: 'Inuti en vanlig kemisk raketmotor förbränns bränsle tillsammans med ett ämne som tillför syre till förbränningen. Det bildas mycket heta gaser under högt tryck som strömmar genom en öppning längst bak på motorn, ett så kallat munstycke. Munstycket är utformat så att gaserna accelereras till mycket hög hastighet när de lämnar raketen. Genom att pressa ut gaserna bakåt får raketen en kraft som driver den framåt.' },
        { typ: 'text', text: 'Här kan vi använda knepet från genomgången om kraft och motkraft: byt plats på orden. Raketen trycker gasen bakåt, och gasen trycker raketen framåt. Dessa två krafter är lika stora och motsatt riktade, precis som Newtons tredje lag säger. Det är alltså gasen som raketen själv skickar ut som skapar den kraft som driver raketen framåt.' },
        { typ: 'text', text: 'Det viktiga är att kraftparet verkar på två olika saker. Raketen påverkar gasen med en kraft bakåt, medan gasen påverkar raketen med en lika stor kraft framåt. Därför tar krafterna inte ut varandra, eftersom de inte verkar på samma föremål. Raketen behöver inte trycka mot luften utanför eller mot marken under sig.' },
        // BILD R: raketen och gasen – kraft och motkraft. Pilarna strax under flamman och raketen (y 590), lika långa
        // (300 px); etiketterna är för långa för att stå bredvid varandra under pilarna: den första under sin pil,
        // den andra till höger om sin pils spets, under raketen
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/raket.jpg', bredd: 1672, hojd: 941, utsnitt: [0, 300, 1672, 420],
          pilar: [{ namn: 'raketen trycker gasen', fran: [420, 590], till: [120, 590], etikett: [350, 695] },
                  { namn: 'gasen trycker raketen', fran: [480, 590], till: [780, 590], etikett: [1150, 605] }],
          lika: [[0, 1]],
          bildtext: 'Raketen trycker gasen bakåt och gasen trycker raketen framåt. Krafterna är lika stora men verkar på två olika föremål.',
          beskrivning: 'En raket i rymden med en gasflamma bakåt ur motorn. En röd pil på gasen pekar bakåt: raketen trycker gasen. En lika lång röd pil på raketen pekar framåt: gasen trycker raketen.' },

        { typ: 'rubrik', text: 'Raketen tar med sig allt den behöver för att kunna fungera i rymden' },
        { typ: 'text', text: 'Det finns en viktig skillnad mellan en raketmotor och en vanlig flygplansmotor. Flygplansmotorn använder luft från omgivningen, bland annat för att få syre till förbränningen. En raket tar däremot med sig både bränsle och det ämne som behövs för att bränslet ska kunna förbrännas, vanligtvis ett oxidationsmedel. Därför kan förbränningen fortsätta även när raketen befinner sig utanför atmosfären.' },
        { typ: 'text', text: 'Många tror att raketmotorn måste suga in luft för att kunna skicka ut gas bakåt. Men gasen kommer från ämnen som raketen redan har med sig och som reagerar inne i motorn. När gasen accelereras bakåt uppstår den framåtriktade kraften på raketen, oavsett om den befinner sig på jorden eller i rymden. I själva verket kan en raketmotor ge något större drivkraft i vakuum än vid jordytan, eftersom omgivningens lufttryck då inte motverkar gasutströmningen på samma sätt.' }
      ]
    },
    {
      id: 'vardagliga', titel: 'Samma kraftpar finns i många vardagliga situationer',
      block: [
        { typ: 'rubrik', text: 'En ballong som släpps fungerar som en enkel raket' },
        { typ: 'text', text: 'Du kan undersöka principen med en vanlig ballong. Blås upp ballongen utan att knyta den och håll sedan öppningen stängd med fingrarna. När du släpper öppningen strömmar luften snabbt ut och ballongen flyger åt motsatt håll. Den rör sig ofta ryckigt eftersom öppningen ändrar riktning medan luften strömmar ut.' },
        { typ: 'text', text: 'Det som händer är samma sak som i raketmotorn. Ballongen pressar ut luften åt ett håll, och luften påverkar ballongen med en kraft åt motsatt håll. Ballongen behöver inte trycka mot den omgivande luften för att flyga iväg. Principen skulle fungera även i vakuum om ballongen innehöll gas under tryck, eftersom det är den utströmmande gasen som skapar motkraften.' },

        { typ: 'rubrik', text: 'Rekyl och vattenstrålar visar hur kraft och motkraft fungerar' },
        { typ: 'text', text: 'När ett gevär avfyras pressas kulan framåt genom pipan samtidigt som geväret påverkas av en kraft bakåt. Den bakåtriktade rörelsen kallas rekyl och är ett exempel på Newtons tredje lag. Geväret och kulan påverkar varandra med lika stora, motriktade krafter under den tid de samverkar. Eftersom geväret har mycket större massa än kulan blir dess hastighetsförändring betydligt mindre.' },
        { typ: 'text', text: 'Ett liknande exempel finns hos bläckfiskar och andra bläckfiskdjur som kan förflytta sig genom att spruta ut vatten. Djuret pressar vatten bakåt genom en öppning och får samtidigt en kraft som driver det åt motsatt håll. Genom att rikta vattenstrålen kan djuret också ändra rörelseriktning. Principen liknar raketens, men i stället för heta gaser använder djuret vatten.' },
        { typ: 'text', text: 'Du har kanske också märkt vad som händer när någon kliver ur en liten båt och upp på en brygga. När personen skjuter ifrån med foten påverkas båten av en kraft bakåt. Samtidigt påverkar båten personen med en lika stor kraft framåt. Båten kan därför glida bort från bryggan just när personen försöker kliva i land.' },

        { typ: 'rubrik', text: 'Lika stora krafter behöver inte ge lika stora rörelser' },
        { typ: 'text', text: 'Det kan verka märkligt att raketen och gasen påverkar varandra med lika stora krafter men får så olika rörelser. Förklaringen ligger i deras massor. En liten mängd gas har låg massa och kan accelereras till mycket hög hastighet, medan den betydligt tyngre raketen får en mindre hastighetsökning av samma kraft under samma tid. Lika stora krafter innebär alltså inte att två föremål får lika stor acceleration.' },
        { typ: 'text', text: 'Tänk på personen som kliver ur den lilla båten. Personen kan få en ganska liten hastighetsförändring medan den lättare båten glider iväg tydligt åt andra hållet. Om samma person skjuter ifrån mot en mycket stor och tung båt blir båtens rörelse nästan omärkbar. Det beror på att större massa innebär större tröghet.' },
        { typ: 'text', text: 'Raketer måste därför skicka ut gas med mycket hög hastighet för att få en tillräckligt stor drivkraft. Ju mer gas som lämnar motorn varje sekund, och ju snabbare den skickas ut, desto större kan drivkraften bli. Stora raketmotorer förbrukar därför enorma mängder drivmedel under uppskjutningen. Gasen strömmar bakåt med mycket hög hastighet, medan den tunga raketen gradvis bygger upp sin hastighet framåt.' }
      ]
    },
    {
      id: 'pa-vag-upp', titel: 'Raketen på väg upp',
      block: [
        { typ: 'rubrik', text: 'Raketen får allt mindre massa när drivmedlet förbrukas' },
        { typ: 'text', text: 'En raket skiljer sig från en vanlig bil genom att dess massa förändras kraftigt under färden. En bil blir visserligen något lättare när bränslet förbrukas, men förändringen är liten jämfört med bilens totala massa. En stor uppskjutningsraket kan däremot bestå till största delen av drivmedel vid starten. När detta förbrukas och gaserna lämnar raketen minskar massan snabbt.' },
        { typ: 'text', text: 'Det får en viktig konsekvens för accelerationen. Du har tidigare lärt dig att ett föremål med liten massa är lättare att accelerera än ett föremål med stor massa. Om raketmotorn ger samma drivkraft medan raketens massa minskar, blir accelerationen därför större. Raketen kan alltså öka farten allt snabbare under delar av uppskjutningen, även om motorns drivkraft inte ökar.' },

        { typ: 'rubrik', text: 'Flera raketsteg gör att raketen slipper bära på tomma tankar' },
        { typ: 'text', text: 'Tänk dig att du ska springa uppför en lång backe med en tung ryggsäck. Efter hand använder du maten och vattnet som finns i säcken, men du måste fortfarande bära själva ryggsäcken. Om du kunde lämna kvar sådant du inte längre behövde skulle det bli lättare att fortsätta uppför backen. En raket har samma problem med sina tomma drivmedelstankar och förbrukade motorer.' },
        { typ: 'text', text: 'Därför byggs många stora raketer i flera steg. När det första stegets drivmedel är förbrukat kan hela steget kopplas loss så att resten av raketen slipper bära dess massa. Därefter startar eller fortsätter nästa steg att driva raketen framåt. Vissa moderna raketsteg kan dessutom återvända till jorden och användas igen.' },
        { typ: 'text', text: 'Att släppa ett tomt steg gör inte automatiskt att raketen får en extra knuff framåt. Fördelen är att den återstående raketen får mindre massa och därför kan använda sitt kvarvarande drivmedel mer effektivt. På så sätt kan raketer nå de mycket höga hastigheter som behövs för att placera satelliter i omloppsbana eller skicka rymdsonder till andra planeter.' },

        { typ: 'rubrik', text: 'Drivkraften måste vara större än tyngdkraften när raketen lyfter' },
        { typ: 'text', text: 'Föreställ dig en stor raket som står på uppskjutningsplatsen. Jordens tyngdkraft drar raketen nedåt, medan marken håller den uppe genom en normalkraft. När motorerna startar börjar en drivkraft verka uppåt på raketen. Men om drivkraften är mindre än tyngdkraften kan raketen inte lyfta från marken.' },
        { typ: 'text', text: 'För att raketen ska börja accelerera uppåt måste drivkraften bli större än tyngdkraften som drar den nedåt. När raketen har lämnat marken finns inte längre någon normalkraft från uppskjutningsplatsen. Om drivkraften är större än tyngdkraften och luftmotståndet tillsammans blir den resulterande kraften riktad uppåt. Då accelererar raketen uppåt.' },

        { typ: 'rubrik', text: 'Raketen påverkas av flera krafter samtidigt' },
        { typ: 'text', text: 'Detta liknar träblocket som du tidigare har studerat i kapitlet. När du drar blocket över bordet avgör skillnaden mellan dragkraft och friktion hur rörelsen förändras i vågrät riktning. För raketen gäller samma princip, men nu är det bland annat drivkraften uppåt och tyngdkraften nedåt som måste jämföras. Det är den resulterande kraften som avgör hur raketens hastighet förändras.' },
        { typ: 'text', text: 'Det är också viktigt att skilja mellan raketens drivkraft och dess hastighet. En raket kan fortsätta röra sig uppåt även om motorns drivkraft för ett ögonblick är mindre än tyngdkraften. Då minskar hastigheten uppåt, men raketen behöver inte omedelbart börja falla. Precis som med ett föremål som kastas uppåt kan rörelsen fortsätta trots att accelerationen är riktad nedåt.' }
      ]
    },
    {
      id: 'i-rymden', titel: 'I rymden behöver raketen inte någon motor för att fortsätta',
      block: [
        { typ: 'rubrik', text: 'Tröghetslagen gör att raketen kan färdas vidare med motorn avstängd' },
        { typ: 'text', text: 'När raketen väl har nått rymden förändras förutsättningarna. Det finns nästan ingen luft som bromsar rörelsen, och raketen behöver inte längre använda sin motor för att övervinna luftmotståndet. Om inga krafter alls påverkade raketen skulle den enligt tröghetslagen fortsätta i samma fart längs en rak linje. Motorn behövs alltså för att förändra hastigheten, inte för att hålla själva rörelsen igång.' },
        { typ: 'text', text: 'Många tror att en rymdfarkost måste ha motorn igång hela tiden för att inte stanna, men det är samma missuppfattning som Galileo och Newton hjälpte oss att övervinna. En rymdsond kan färdas under långa perioder med motorerna avstängda. Gravitationen från solen och planeterna kan fortfarande förändra dess hastighet och riktning. Om sonden behöver ändra sin bana kan den använda små raketmotorer för att skapa en ny kraft.' },
        { typ: 'text', text: 'Det förklarar också varför satelliter kan fortsätta kretsa runt jorden utan att hela tiden drivas av motorer. De har en hög hastighet framåt samtidigt som jordens gravitation ständigt böjer deras bana. Satelliten faller därför hela tiden mot jorden men rör sig så snabbt i sidled att den fortsätter runt planeten. En satellit i en tillräckligt hög bana möter mycket litet luftmotstånd och kan därför kretsa länge utan större korrigeringar.' },

        { typ: 'rubrik', text: 'En astronaut som kastar en verktygslåda rör sig själv åt motsatt håll' },
        { typ: 'text', text: 'Föreställ dig en astronaut som svävar fritt utanför en rymdstation. Astronauten håller i en verktygslåda och skjuter plötsligt lådan rakt bort från sig. Verktygslådan börjar röra sig i den riktning som astronauten skjuter den, men samtidigt börjar astronauten glida åt motsatt håll. Ingen behöver ta spjärn mot rymdstationen eller mot någon luft.' },
        { typ: 'text', text: 'Förklaringen är återigen kraft och motkraft. Astronauten påverkar verktygslådan med en kraft framåt, och verktygslådan påverkar astronauten med en lika stor kraft bakåt. Eftersom verktygslådan har betydligt mindre massa får den en större hastighetsförändring än astronauten. När de väl har skilts åt fortsätter båda att röra sig, så länge inga andra krafter förändrar deras rörelser.' },
        // BILD A: astronauten och verktygslådan – pilen på lådan från dess mitt åt höger, pilen på astronauten från
        // händerna längs armen åt vänster, båda 250 px; etiketterna i rymden, inte på jorden och inte på hjälmen
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/astronaut.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'astronauten skjuter lådan', fran: [1370, 345], till: [1620, 345], etikett: [1260, 485] },
                  { namn: 'lådan skjuter astronauten', fran: [690, 330], till: [440, 330], etikett: [640, 590] }],
          lika: [[0, 1]],
          bildtext: 'Under knuffen skjuter astronauten lådan framåt och lådan skjuter astronauten bakåt. Lådan har mindre massa och får därför större fart.',
          beskrivning: 'En astronaut svävar i rymden med armarna utsträckta mot en verktygslåda som glider bort åt höger. En röd pil på lådan pekar bort från astronauten. En lika lång röd pil på astronauten pekar åt andra hållet.' }
      ]
    },
    {
      id: 'vetenskapen', titel: 'Vetenskapen visade att raketer kan fungera i tomrum',
      block: [
        { typ: 'rubrik', text: 'Tsiolkovskij visade att raketer kunde användas för rymdfärder' },
        { typ: 'text', text: 'Under slutet av 1800-talet började flera forskare undersöka om det skulle vara möjligt att färdas utanför jordens atmosfär. En av pionjärerna var den ryske läraren och forskaren Konstantin Tsiolkovskij. Han studerade hur raketer kunde accelerera genom att skicka ut gas och hur deras hastighet påverkades av mängden drivmedel. År 1903 publicerade han ett arbete som blev en viktig grund för den moderna rakettekniken.' },
        { typ: 'text', text: 'Tsiolkovskij förstod att en raket inte behövde luft omkring sig för att fungera. Han undersökte hur hög hastighet en raket skulle kunna uppnå genom att förbruka sitt drivmedel och skicka ut gas med hög hastighet. Han föreslog också tekniska lösningar för framtida rymdfärder, bland annat raketer med flytande drivmedel och flera steg. Hans arbete var framför allt teoretiskt, men visade att rymdfärder kunde undersökas med fysikens lagar och matematiska beräkningar.' },

        { typ: 'rubrik', text: 'Goddard skickade upp den första raketen med flytande drivmedel' },
        { typ: 'text', text: 'I USA arbetade fysikern Robert Goddard med att utveckla raketer som kunde nå mycket höga höjder. Han undersökte bland annat motorer som använde flytande bränsle och flytande syre. Den 16 mars 1926 lyckades han genomföra den första uppskjutningen av en raket med flytande drivmedel. Raketen flög bara omkring 12 meter upp och färden varade ungefär två och en halv sekund.' },
        { typ: 'text', text: 'Med dagens mått var uppskjutningen mycket blygsam. Men Goddard hade visat att en teknik som tidigare främst hade utvecklats teoretiskt faktiskt kunde fungera i praktiken. Flytande drivmedel kom senare att användas i många av de stora raketer som skickat satelliter och människor ut i rymden. Goddards första lyckade flygning blev därför en viktig händelse i rymdfartens historia.' },

        { typ: 'rubrik', text: 'Även på 1900-talet trodde vissa att raketer behövde luft att trycka mot' },
        { typ: 'text', text: 'Det märkliga är att missuppfattningen om raketer och luft levde kvar långt in på 1900-talet. När Goddard diskuterade möjligheten att skicka raketer mot månen blev hans idéer ifrågasatta, bland annat i den amerikanska tidningen The New York Times. I en ledare från januari 1920 hävdade tidningen felaktigt att en raket inte kunde fungera i rymdens vakuum eftersom den saknade luft att trycka mot. Kritiken byggde alltså på samma missförstånd som många elever fortfarande kan ha när de först möter raketfysiken.' },
        { typ: 'text', text: 'Nästan femtio år senare hade rymdfarten förändrat människans möjligheter. Satelliter kretsade runt jorden och astronauter hade färdats ut i rymden. Den 17 juli 1969, dagen efter uppskjutningen av Apollo 11 mot månen, publicerade The New York Times en rättelse av sin gamla förklaring. Tidningen erkände att Newtons lagar visade att raketer kunde fungera även i vakuum.' }
      ]
    },
    {
      id: 'tredje-lagen', titel: 'Newtons tredje lag gör det möjligt att färdas genom rymden',
      block: [
        { typ: 'rubrik', text: 'Samma naturlag får dig att gå framåt och en raket att lämna jorden' },
        { typ: 'text', text: 'Vi började med en fråga som verkade svår att besvara: hur kan en raket accelerera i rymden när det inte finns någonting att trycka mot? Svaret är att raketen inte behöver något yttre föremål att ta spjärn mot, eftersom den skickar ut en del av sin egen massa. Raketen pressar gasen bakåt, och gasen påverkar raketen med en lika stor kraft framåt. Kraftparet verkar på två olika föremål och tar därför aldrig ut varandra.' },
        { typ: 'text', text: 'Det är samma lag som påverkar dig när du går framåt. Din fot trycker marken bakåt och marken trycker foten framåt, vilket gör att du kan accelerera. Skillnaden är att du använder marken för att skapa kraftparet, medan raketen använder gasen som den själv skickar ut. Den grundläggande fysiken är densamma.' },
        { typ: 'text', text: 'Berättelsen om raketer visar också hur vetenskapen kan förändra vår uppfattning om vad som är möjligt. För drygt hundra år sedan fanns det människor som ansåg att rymdfärder var omöjliga eftersom raketer inte skulle kunna fungera utan luft. I dag vet vi att det är just Newtons tredje lag som gör raketdrift möjlig i vakuum. Det som först verkar omöjligt blir begripligt när vi förstår vilka föremål som faktiskt påverkar varandra med kraft och motkraft.' }
      ]
    }
  ]
});
