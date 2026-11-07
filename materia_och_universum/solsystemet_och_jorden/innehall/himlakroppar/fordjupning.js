/* Avsnittssida I. Solsystemet och jorden, text B Himlakroppar – nivån fordjupning. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-B-Himlakroppar-Enkel-Fordjupning.md (📕 FÖRDJUPNING), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats, med figuren efter (steg 3).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Himlakroppar – fördjupning' },
        { typ: 'text', text: 'I Standard lärde du dig vad som skiljer olika himlakroppar åt. Här får du veta vad en stjärnas färg berättar, exakt vad som krävs för att något ska räknas som planet, hur man kan hitta planeter runt andra stjärnor fast de inte syns, och varifrån kometerna kommer.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att en stjärnas färg visar hur het den är',
          'de tre villkoren för att något ska vara en planet',
          'hur exoplaneter upptäcks',
          'var kometerna kommer ifrån, och varför meteorregn kommer samma tid varje år'
        ] }
      ]
    },
    {
      id: 'stjarnor-och-planeter', titel: 'Stjärnor och planeter',
      block: [
        { typ: 'rubrik', text: 'En stjärnas färg visar hur het ytan är' },
        { typ: 'text', text: 'Titta noga på stjärnhimlen en klar natt, så ser du att stjärnorna har lite olika färger. Vissa är blåvita, andra gula eller rödaktiga. Färgen beror på stjärnans yttemperatur. Det är samma sak som när en järnstång värms i en ässja: först glöder den mörkröd, sedan orange och gul och till slut vitglödgad.' },
        { typ: 'text', text: 'De blåvita stjärnorna är hetast, med yttemperaturer över 10 000 grader. Röda stjärnor är svalast, med ungefär 3 000 grader. Solen ligger mittemellan, med knappt 6 000 grader, och lyser gulvitt. Färgen gör alltså att astronomer kan mäta temperaturen på en stjärna som ligger biljoner kilometer bort.' },
        { typ: 'rubrik', text: 'En planet måste uppfylla tre villkor' },
        { typ: 'text', text: 'När Pluto blev dvärgplanet 2006 bestämde Internationella astronomiska unionen tre villkor för att en himlakropp ska räknas som planet i vårt solsystem. Den ska gå i en bana runt solen. Den ska ha så stor massa att den egna gravitationen har gjort den ungefär klotformad. Och den ska ha rensat sitt banområde, alltså vara så dominerande att den har samlat upp eller knuffat bort det mesta i närheten.' },
        { typ: 'text', text: 'Pluto uppfyller de två första villkoren men inte det tredje. Den rör sig i ett område utanför Neptunus, Kuiperbältet, tillsammans med tusentals andra isiga kroppar. En del av dem är nästan lika stora som Pluto. Definitionen är ett exempel på hur en indelning är något forskarna bestämmer för att kunna jämföra, och att den kan ändras när man lär sig mer.' },
        { typ: 'rubrik', text: 'Exoplaneter hittas genom sin påverkan på stjärnan' },
        { typ: 'text', text: 'En planet runt en annan stjärna är nästan omöjlig att se direkt. Den lyser inte själv och drunknar i stjärnans ljus. Därför letar astronomerna efter spår av planeten i stjärnans ljus.' },
        { typ: 'text', text: 'Den vanligaste metoden kallas *transitmetoden*. När en planet passerar framför sin stjärna, sett från oss, skymmer den en liten del av stjärnan. Stjärnans ljus blir då svagare under en kort stund, för en planet som jorden bara med ungefär en hundradels procent. Om ljuset blir svagare med jämna mellanrum vet man att en planet går runt stjärnan. Hur mycket ljuset minskar visar planetens storlek, och tiden mellan passagerna visar hur lång tid ett varv tar.' },
        { typ: 'text', text: 'En annan metod bygger på att stjärnan och planeten drar i varandra. Planeten får stjärnan att vingla lite fram och tillbaka, och det kan mätas i stjärnans ljus. Med de två metoderna har man hittat flera tusen exoplaneter. Det är en av förklaringarna till att man i dag tror att de flesta stjärnor har planeter.' }
      ]
    },
    {
      id: 'kometer-och-meteorer', titel: 'Kometer och meteorer',
      block: [
        { typ: 'rubrik', text: 'Kometerna kommer från solsystemets yttre delar' },
        { typ: 'text', text: 'Kometer bildades långt från solen, där det var så kallt att is kunde finnas. Många kometer kommer från Kuiperbältet utanför Neptunus. Andra kommer från ett ännu mer avlägset område som kallas *Oorts moln*, en väldig skal av isiga kroppar som tros omge hela solsystemet långt ut i rymden.' },
        { typ: 'text', text: 'Ibland störs en sådan kropp, till exempel av en stjärna som passerar på stort avstånd eller av de stora planeternas gravitation. Då kan den börja falla in mot solen i en mycket långsträckt ellipsbana. Vissa kometer kommer tillbaka med jämna mellanrum. Halleys komet syns från jorden ungefär vart 76:e år och kommer tillbaka nästa gång år 2061.' },
        { typ: 'rubrik', text: 'En komet har ofta två svansar' },
        { typ: 'text', text: 'I Standard såg du att svansen pekar bort från solen. Ofta har en komet i själva verket två svansar. Den ena består av gas som blir elektriskt laddad av solens strålning. Den förs rakt bort från solen av solvinden, en ström av laddade partiklar från solen, och blir smal, rak och blåaktig.' },
        { typ: 'text', text: 'Den andra svansen består av damm. Dammkornen trycks också bort av solljuset, men inte lika hårt, och de följer delvis kometens bana. Därför blir dammsvansen bredare, böjd och gulvit. Att svansarna beter sig olika visar att de består av olika material.' },
        { typ: 'rubrik', text: 'Meteorregn kommer när jorden passerar en komets spår' },
        { typ: 'text', text: 'En komet som har passerat solen lämnar efter sig ett stråk av damm längs sin bana. När jorden på sin färd runt solen korsar ett sådant stråk kommer mängder av dammkorn in i atmosfären. Då ser vi många stjärnfall under några nätter. Det kallas ett *meteorregn*.' },
        { typ: 'text', text: 'Eftersom jorden passerar samma ställe i sin bana vid samma tid varje år, kommer meteorregnen samma tid varje år. Det mest kända är Perseiderna i augusti, då man en mörk natt kan se många stjärnfall i timmen. Dammet kommer från kometen Swift–Tuttle. Ett stjärnfall en augustinatt kan alltså vara ett dammkorn som en komet tappade för hundratals år sedan.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'punkter', punkter: [
          'En stjärnas färg visar yttemperaturen: blåvita är hetast, röda svalast.',
          'En planet går runt solen, är klotformad och har rensat sitt banområde.',
          'Exoplaneter hittas genom att stjärnans ljus blir svagare när planeten passerar, eller genom att stjärnan vinglar.',
          'Kometerna kommer från Kuiperbältet och Oorts moln långt ute i solsystemet.',
          'En komet kan ha två svansar, en av gas och en av damm.',
          'Meteorregn kommer när jorden korsar en komets dammstråk, samma tid varje år.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
