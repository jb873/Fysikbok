/* Repetition II, text A: Materia – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Texten är Joachims granskade källa (Repetition-II-Standard.md, samlad 2026-11-02), införd ordagrant: ### = en sida,
 * ett stycke = ett textblock, [FIGUR n], [FORMEL] och [EXEMPEL] = blocken ur arbetsordern där markeringen står.
 * Enheter med <sup>3</sup>. Inledningen och sammanfattningen är nya korttexter som Joachim granskar.
 *
 * Så skrivs innehållet (mer i Fysik/README.md):
 *   - ett avsnitt = {id, titel, sidor: [...]}; numrerad: false ger ett avsnitt utan nummer (Inledning, Sammanfattning)
 *   - en sida = {titel, block: [...]}; sidan ska få plats på en skärm – kontrollera med ?kontroll i adressen.
 *     En tät sida delas vid en styckegräns, och den andra halvan får samma titel.
 *   - *ord* = betonat begrepp (*smälter|smälta* när det står böjt), [[m|V]] = bråk, <sup>3</sup> för cm³
 *   - {typ: 'lank', till: ['ova', 'sjalvskattning']} sist i ett avsnitt länkar till plattformens hjälpmedel
 * Avsnittens id används när eleven byter nivå (samma avsnitt på den andra nivån), så de ska vara samma på alla nivåer. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      sidor: [
        {
          titel: 'Repetition: Materia',
          block: [
            { typ: 'text', text: 'Det här är en repetition. Du har mött innehållet förut – läs i lugn takt och se efter vad du känner igen. Allt bygger på en enda modell: materia består av partiklar som hela tiden rör sig.' },
            { typ: 'rubrik', text: 'Det här repeterar du' },
            { typ: 'punkter', punkter: [
              '*Materia* och dess partiklar',
              '*Aggregationsformer|aggregationsform* – fast, flytande och gas, och hur ett ämne byter form'
            ] },
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
      id: 'materia', titel: 'Materia', numrerad: false,
      sidor: [
        {
          titel: 'Materia är allt som har massa och tar plats',
          block: [
            { typ: 'text', text: 'Allt som har massa och tar plats kallas *materia*. Luften omkring oss, vattnet vi dricker, en sten och vår egen kropp är exempel på materia. Materia kan vara synlig eller osynlig, men den har alltid massa och tar alltid plats. Ljus, ljud och värme är däremot inte materia. De är sätt som energi förflyttas på från en plats till en annan.' }
          ]
        },
        {
          titel: 'All materia består av partiklar som hela tiden rör sig',
          block: [
            { typ: 'text', text: 'All materia är uppbyggd av små partiklar – atomer eller molekyler – som du läste om i förra repetitionen. Partiklarna är aldrig helt stilla utan rör sig hela tiden, även i fasta ämnen. När ett ämne värms upp får partiklarna mer *rörelseenergi* och rör sig i genomsnitt snabbare. *Temperaturen|temperatur* är ett mått på partiklarnas genomsnittliga rörelseenergi: ju högre temperatur, desto snabbare rör sig partiklarna.' }
          ]
        },
        {
          titel: 'Materia finns i tre vanliga aggregationsformer',
          block: [
            { typ: 'text', text: 'Materia finns i tre vanliga *aggregationsformer|aggregationsform*: fast form, flytande form och gasform. I ett fast ämne sitter partiklarna tätt och oftast i ett ordnat mönster, där de vibrerar kring sina platser. Därför har ett fast ämne egen form och bestämd volym. Is, järn och sten är exempel på fasta ämnen.' },
            { typ: 'text', text: 'I en vätska ligger partiklarna fortfarande tätt, men de kan röra sig och glida förbi varandra. Därför har en vätska ingen egen form utan tar formen av kärlet den står i, medan volymen är nästan densamma. I en gas är partiklarna långt ifrån varandra och rör sig fritt åt alla håll. En gas har därför varken bestämd form eller bestämd volym, utan sprider sig tills den fyller hela kärlet.' }
          ]
        },
        {
          titel: 'Ett ämne kan byta aggregationsform när det värms eller kyls',
          block: [
            { typ: 'text', text: 'När ett fast ämne värms tillräckligt mycket *smälter|smälta* det och blir flytande. Värms vätskan ännu mer *förångas* den och blir gas. När ett ämne kyls sker det omvända: gasen *kondenserar|kondensera* till vätska, och vätskan *stelnar|stelna* till fast form. Vatten är ett tydligt exempel, eftersom vi möter det både som is, flytande vatten och vattenånga.' },
            { typ: 'figur', namn: 'aggregationsformer', exempel: ['is', 'vatten', 'vattenånga'], overgangar: true }
          ]
        },
        {
          titel: 'Ett ämne kan byta aggregationsform när det värms eller kyls',
          block: [
            { typ: 'text', text: 'Vatten behöver inte koka för att bli gas. Även långt under kokpunkten kan vattenmolekyler lämna vätskans yta och blandas med luften. Det kallas *avdunstning*, och det är därför blöta kläder torkar även när det är kallt ute.' }
          ]
        },
        {
          titel: 'Varje ämne har sin egen smältpunkt och kokpunkt',
          block: [
            { typ: 'text', text: '*Smältpunkten|smältpunkt* är den temperatur där ett fast ämne blir flytande. *Kokpunkten|kokpunkt* är den temperatur där en vätska kokar och blir gas. Rent vatten har smältpunkten 0 °C och kokpunkten 100 °C vid normalt lufttryck. Järn har betydligt högre värden: smältpunkten är ungefär 1 538 °C och kokpunkten ungefär 2 862 °C. Kokpunkten beror på lufttrycket och blir till exempel lägre högt uppe på ett berg.' }
          ]
        },
        {
          titel: 'Temperaturen står still medan ett rent ämne smälter eller kokar',
          block: [
            { typ: 'text', text: 'När ett rent ämne värms upp stiger temperaturen, eftersom partiklarna får mer rörelseenergi. Men när ämnet når sin smältpunkt eller kokpunkt står temperaturen still så länge övergången pågår. Energin som tillförs går då åt till att lösgöra partiklarna från varandra, så att de kan röra sig friare, i stället för att få dem att röra sig snabbare. Därför håller kokande vatten 100 °C vid normalt lufttryck, hur mycket man än fortsätter att värma.' },
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
              '*Materia* är allt som har massa och tar plats. Den består av partiklar som hela tiden rör sig, och *temperaturen|temperatur* är ett mått på hur snabbt de rör sig.',
              'Materia finns som fast, flytande och gas. Det som skiljer dem åt är hur tätt partiklarna sitter och hur fritt de rör sig.',
              'Vid *smältpunkten|smältpunkt* och *kokpunkten|kokpunkt* byter ett ämne form. Medan det sker står temperaturen still.'
            ] },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    }
  ]
});
