/* Repetition I, text B: Joner, isotoper och bindningar – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Avsnitten är Joachims granskade källa (Repetition-Atomen-Standard.md, samlad 2026-11-01), införd ordagrant:
 * ### = en sida, ett stycke = ett textblock, [FIGUR n] = figuren där markeringen står. Formler med <sub>/<sup> och
 * minustecknet −. Inledningen och sammanfattningen är bokens egna, ur arbetsordern 2026-11-02.
 *
 * Så skrivs innehållet (mer i Fysik/README.md):
 *   - ett avsnitt = {id, titel, sidor: [...]}; numrerad: false ger ett avsnitt utan nummer (Inledning, Sammanfattning)
 *   - en sida = {titel, block: [...]}; sidan ska få plats på en skärm – kontrollera med ?kontroll i adressen.
 *     En tät sida delas vid en styckegräns, och den andra halvan får samma titel.
 *   - *ord* = betonat begrepp (*atomer|atom* när det står böjt), <sub>2</sub> och <sup>2−</sup> för index och laddning
 *   - {typ: 'lank', till: ['ova', 'sjalvskattning']} sist i ett avsnitt länkar till plattformens hjälpmedel
 * Avsnittens id används när eleven byter nivå (samma avsnitt på den andra nivån), så de ska vara samma på alla nivåer. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      sidor: [
        {
          titel: 'Repetition: Joner, isotoper och bindningar',
          block: [
            { typ: 'text', text: 'Det här avsnittet är en repetition. Du bygger vidare på modellen från texten om atomen: atomen med sina elektroner i skal. Nu ser du vad som händer när atomer tar upp, lämnar eller delar elektroner.' },
            { typ: 'rubrik', text: 'Det här repeterar du' },
            { typ: 'punkter', punkter: [
              '*Joner och isotoper|jon* – när antalet elektroner eller neutroner ändras',
              '*Kemiska bindningar|kemisk bindning* – hur atomer sitter ihop'
            ] }
          ]
        },
        {
          titel: 'Repetition: Joner, isotoper och bindningar',
          block: [
            { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
              'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
              'Klicka i innehållet för att gå till en sida.',
              'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
            ] }
          ]
        }
      ]
    },
    {
      id: 'joner-och-isotoper', titel: 'Joner och isotoper',
      sidor: [
        {
          titel: 'En jon är en atom eller molekyl som har laddning',
          block: [
            { typ: 'text', text: 'En atom är oladdad eftersom den har lika många elektroner som protoner. Men en atom kan ta upp eller lämna elektroner för att få fullt yttersta skal. Då blir antalet elektroner och protoner olika. Får atomen fler elektroner än protoner blir den negativt laddad. Får den färre blir den positivt laddad. En laddad atom eller molekyl kallas en *jon*. Det är bara elektronerna som flyttar, aldrig protonerna, och därför är jonen fortfarande samma grundämne.' }
          ]
        },
        {
          titel: 'Atomer med nästan fullt yttersta skal tar upp elektroner och blir negativa joner',
          block: [
            { typ: 'text', text: 'En syreatom har 8 protoner och 8 elektroner, och 6 av elektronerna ligger i det yttersta skalet. Genom att ta upp 2 elektroner får den ett fullt yttersta skal med 8. Då har den 10 elektroner men fortfarande 8 protoner och får laddningen −2. Den kallas en *oxidjon*, O<sup>2−</sup>.' },
            { typ: 'figur', namn: 'skalmodell', overgang: 'tar upp 2 elektroner',
              atomer: [ { namn: 'Syreatom', protoner: 8, skal: [2, 6], symbol: 'O' },
                        { namn: 'Oxidjon', protoner: 8, skal: [2, 8], symbol: 'O' } ] }
          ]
        },
        {
          titel: 'Atomer med nästan fullt yttersta skal tar upp elektroner och blir negativa joner',
          block: [
            { typ: 'text', text: 'En kloratom har 17 protoner och 17 elektroner, och 7 av dem ligger ytterst. Den behöver bara ta upp 1 elektron för att få fullt yttersta skal. Då har den 18 elektroner och 17 protoner och får laddningen −1. Den kallas en *kloridjon*, Cl<sup>−</sup>.' }
          ]
        },
        {
          titel: 'Atomer med få elektroner ytterst lämnar dem och blir positiva joner',
          block: [
            { typ: 'text', text: 'För en atom med få elektroner ytterst är det lättare att lämna dem än att ta upp många nya. När de lämnas blir skalet innanför det yttersta – och det skalet är redan fullt. Därför blir jonen stabil.' },
            { typ: 'text', text: 'Litium har 3 elektroner: 2 i K-skalet och 1 i L-skalet. När litium lämnar sin yttersta elektron finns ett fullt K-skal kvar. Jonen har 3 protoner men bara 2 elektroner och får laddningen +1. Den kallas en litiumjon, Li<sup>+</sup>.' }
          ]
        },
        {
          titel: 'Atomer med få elektroner ytterst lämnar dem och blir positiva joner',
          block: [
            { typ: 'figur', namn: 'skalmodell', overgang: 'lämnar 1 elektron',
              atomer: [ { namn: 'Litiumatom', protoner: 3, skal: [2, 1], symbol: 'Li' },
                        { namn: 'Litiumjon', protoner: 3, skal: [2], symbol: 'Li' } ],
              bildtext: 'Det som blir kvar ytterst är det fulla K-skalet.' },
            { typ: 'text', text: 'Magnesium har 12 elektroner: 2, 8 och 2. När magnesium lämnar sina 2 yttersta elektroner blir det fulla L-skalet ytterst. Jonen har 12 protoner och 10 elektroner och får laddningen +2. Den kallas en magnesiumjon, Mg<sup>2+</sup>.' }
          ]
        },
        {
          titel: 'En sammansatt jon är flera atomer som tillsammans har en laddning',
          block: [
            { typ: 'text', text: 'En jon behöver inte vara en enda atom. Flera atomer kan sitta ihop och tillsammans ha en laddning. Det kallas en *sammansatt jon*. Ett exempel är hydroxidjonen, OH<sup>−</sup>, som består av en syreatom och en väteatom. Tillsammans har de 9 protoner men 10 elektroner, och därför är laddningen −1.' }
          ]
        },
        {
          titel: 'Isotoper är atomer av samma grundämne med olika antal neutroner',
          block: [
            { typ: 'text', text: 'Det är antalet protoner som avgör vilket grundämne en atom är. Antalet neutroner kan däremot variera, och atomer av samma grundämne med olika många neutroner kallas *isotoper|isotop*. Neutroner har ingen laddning, så en isotop är ingen jon. Protonerna och neutronerna tillsammans kallas *masstalet|masstal*.' }
          ]
        },
        {
          titel: 'Isotoper är atomer av samma grundämne med olika antal neutroner',
          block: [
            { typ: 'text', text: 'Väte har alltid 1 proton. Vanligt väte har ingen neutron, deuterium har 1 och tritium har 2. Alla tre är väte, eftersom de har en proton.' },
            { typ: 'figur', namn: 'skalmodell',
              atomer: [ { namn: 'Väte', protoner: 1, neutroner: 0, skal: [1] },
                        { namn: 'Deuterium', protoner: 1, neutroner: 1, skal: [1] },
                        { namn: 'Tritium', protoner: 1, neutroner: 2, skal: [1] } ] },
            { typ: 'text', text: 'Kol har alltid 6 protoner. Den vanligaste isotopen, kol-12, har 6 neutroner och masstalet 12. Kol-13 har 7 neutroner och kol-14 har 8. Alla tre är kol, men kärnorna väger olika mycket.' }
          ]
        },
        {
          titel: 'Kol-14 avslöjar hur gammalt något är',
          block: [
            { typ: 'text', text: 'Kol-14 bildas i atmosfären och kommer in i allt levande, bland annat genom födan. Så länge en organism lever tar den upp nytt kol. När den dör slutar upptaget, och det kol-14 som finns kvar sönderfaller långsamt. *Halveringstiden|halveringstid* är ungefär 5 730 år. Det betyder att hälften av kol-14-atomerna har sönderfallit efter så lång tid.' },
            { typ: 'text', text: 'Genom att mäta hur mycket kol-14 som finns kvar i till exempel trä eller ben kan forskare räkna ut hur länge sedan organismen dog. Metoden kallas kol-14-datering och fungerar ungefär 50 000 år bakåt i tiden.' },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    },
    {
      id: 'kemiska-bindningar', titel: 'Kemiska bindningar',
      sidor: [
        {
          titel: 'Atomer binds ihop för att få fullt yttersta skal',
          block: [
            { typ: 'text', text: 'Genom att bindas till varandra kan atomer få fullt yttersta skal och bli stabila. Det finns tre sorters *kemiska bindningar|kemisk bindning*, och vilken som bildas beror på vilka atomer som möts. Två icke-metaller bildar en kovalent bindning. En metall och en icke-metall bildar en jonbindning. Metallatomer hålls ihop av metallbindning.' }
          ]
        },
        {
          titel: 'I en kovalent bindning delar atomerna på elektroner',
          block: [
            { typ: 'text', text: 'I en *kovalent bindning*, även kallad elektronparbindning, delar två atomer på ett elektronpar. Paret räknas till båda atomernas yttersta skal. På så sätt får båda fullt yttersta skal utan att någon av dem lämnar ifrån sig elektroner, och atomerna sitter ihop i en *molekyl*.' },
            { typ: 'text', text: 'Metan, CH<sub>4</sub>, består av en kolatom och fyra väteatomer. Kol har 4 valenselektroner och delar ett elektronpar med var och en av väteatomerna. Då har kol 8 elektroner ytterst, och varje väteatom har 2 – ett fullt K-skal.' },
            { typ: 'text', text: 'Vatten, H<sub>2</sub>O, består av en syreatom och två väteatomer. Syre har 6 valenselektroner och behöver 2 till. Genom att dela ett elektronpar med var och en av väteatomerna får syre 8 elektroner ytterst, och båda väteatomerna får fullt K-skal.' }
          ]
        },
        {
          titel: 'I en jonbindning håller positiva och negativa joner ihop varandra',
          block: [
            { typ: 'text', text: 'När en metall möter en icke-metall lämnar metallatomen elektroner som icke-metallatomen tar upp. Då bildas positiva och negativa joner, och de dras till varandra eftersom de har motsatt laddning. Det kallas *jonbindning*. Jonerna bildar inga molekyler. De ordnar sig i ett regelbundet mönster som kallas *kristallgitter*. En sådan förening kallas ett *salt*, och i ett salt tar laddningarna alltid ut varandra.' }
          ]
        },
        {
          titel: 'I en jonbindning håller positiva och negativa joner ihop varandra',
          block: [
            { typ: 'text', text: 'Natriumklorid, NaCl, är vanligt koksalt. Natrium lämnar 1 elektron och blir en natriumjon, Na<sup>+</sup>. Klor tar upp elektronen och blir en kloridjon, Cl<sup>−</sup>. Laddningarna är +1 och −1, så det går en kloridjon på varje natriumjon.' },
            { typ: 'text', text: 'Magnesiumklorid, MgCl<sub>2</sub>, bildas när magnesium lämnar 2 elektroner och blir en magnesiumjon, Mg<sup>2+</sup>. Två kloratomer tar upp var sin elektron och blir två kloridjoner. Det behövs alltså två kloridjoner för varje magnesiumjon för att laddningarna tillsammans ska bli noll.' }
          ]
        },
        {
          titel: 'I en metallbindning delar alla atomerna på sina valenselektroner',
          block: [
            { typ: 'text', text: 'I en metall släpper atomerna sina yttersta elektroner. Elektronerna rör sig fritt genom hela metallen som ett gemensamt elektronmoln. Kvar blir positiva metalljoner, och de hålls ihop av att de dras till de negativa elektronerna runt dem. Det är elektronmolnet som binder ihop metallen. Det kallas *metallbindning*.' }
          ]
        },
        {
          titel: 'De fria elektronerna förklarar metallernas egenskaper',
          block: [
            { typ: 'text', text: 'Koppar leder elektrisk ström och värme mycket bra, eftersom elektronerna kan röra sig genom metallen. Därför görs elledningar av koppar. De positiva jonerna kan också glida förbi varandra utan att bindningen bryts, eftersom elektronmolnet fortfarande håller ihop dem. Därför kan koppar böjas och dras ut till tunna trådar utan att gå sönder.' },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      sidor: [
        {
          titel: 'Det viktigaste',
          block: [
            { typ: 'punkter', punkter: [
              'En *jon* bildas när en atom tar upp eller lämnar elektroner. Tar den upp blir den negativ, lämnar den blir den positiv. Bara elektronerna flyttar.',
              '*Isotoper|isotop* har samma antal protoner men olika många neutroner. Med kol-14 kan man räkna ut hur gammalt något är som en gång levt.',
              'Atomer binds ihop genom *kovalent bindning* (delar elektroner), *jonbindning* (joner med motsatt laddning) eller *metallbindning* (gemensamt elektronmoln).'
            ] },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    }
  ]
});
