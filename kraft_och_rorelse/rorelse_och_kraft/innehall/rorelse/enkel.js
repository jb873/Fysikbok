/* Avsnittssida III, text A: Rörelse – nivån Enkel. En självbärande bok ur samma kärna som Standard (packar upp:
 * samma fakta, fler steg, vardag före begrepp). Joachims granskade källa (III-A-Rorelse-alla-nivaer-v2.md,
 * 2026-11-03), införd ordagrant i strömformatet – se standard.js. Samma avsnitts-id som Standard. */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Rörelse' },
        { typ: 'text', text: 'Det här kapitlet handlar om krafter. En kraft är något som knuffar eller drar. Men innan vi kan förstå vad en kraft gör, behöver vi kunna se hur saker rör sig. Det är det du lär dig i den här texten.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*likformig rörelse|likformig rörelse* och *olikformig rörelse|olikformig rörelse*',
          '*acceleration* och *retardation*',
          '*tröghetslagen*'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'rorelsen-i-prickarna', titel: 'Rörelsen syns i prickarna',
      block: [
        { typ: 'rubrik', text: 'Vi kan rita en rörelse med prickar' },
        { typ: 'text', text: 'Tänk dig att du står vid en väg och fotograferar en bil som kör förbi. Du tar en bild varje sekund. På varje bild sätter du en prick där bilen var. Mellan två prickar har det alltså gått precis en sekund.' },
        { typ: 'text', text: 'Nu kan du titta på avståndet mellan prickarna. Avståndet visar hur långt bilen hann på en sekund. Om prickarna ligger långt isär hann bilen långt – då åkte den fort. Om prickarna ligger tätt hann den bara en kort bit – då åkte den långsamt. Prickarna är alltså ett sätt att se en rörelse, utan att räkna något.' },

        { typ: 'rubrik', text: 'När avstånden är lika långa är rörelsen likformig' },
        { typ: 'text', text: 'Ibland ligger prickarna på exakt samma avstånd från varandra hela vägen. Det betyder att föremålet hann lika långt varje sekund. En sådan rörelse kallas *likformig rörelse|likformig rörelse*. Ordet likformig betyder ungefär ”likadan hela tiden”: farten är densamma och riktningen är densamma.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'likformig' },
        { typ: 'text', text: 'Ett exempel är ett tåg som kör rakt fram på en lång, rak räls, i precis samma fart hela tiden. Ett annat exempel är en hockeypuck som glider över blank is. Pucken glider och glider, lika fort, åt samma håll.' },

        { typ: 'rubrik', text: 'Ett tåg i jämn fart påverkas av krafter som tar ut varandra' },
        { typ: 'text', text: 'Man kan tro att inga krafter alls verkar på tåget, eftersom det bara rullar på i samma fart. Men så är det inte. Motorn drar tåget framåt. Samtidigt bromsar luften tåget, och det kallas *luftmotstånd*. Rälsen bromsar också, där hjulen gnids mot den, och det kallas *friktion*. Motorns kraft framåt och luftmotståndet och friktionen bakåt är lika stora, men de drar åt olika håll. Då tar de ut varandra, och det blir som om ingen kraft verkade alls. Därför fortsätter tåget i precis samma fart.' },

        { typ: 'rubrik', text: 'När avstånden är olika långa är rörelsen olikformig' },
        { typ: 'text', text: 'Ofta ligger prickarna inte jämnt. Ibland ligger de tätt, ibland glest. Det betyder att föremålet hann olika långt under olika sekunder. En sådan rörelse kallas *olikformig rörelse|olikformig rörelse*. De flesta rörelser du ser varje dag är olikformiga.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'olikformig' },
        { typ: 'text', text: 'Tänk på när du cyklar genom stan. Du saktar in vid en korsning, du stannar vid ett rödljus och sedan trampar du i gång igen. Farten ändras hela tiden. Varje gång farten ändras är det en kraft som gör det. Det kan vara dina ben som trampar, bromsarna som tar i eller friktionen mot vägen.' },

        { typ: 'rubrik', text: 'När avstånden blir längre och längre accelererar föremålet' },
        { typ: 'text', text: 'Ibland blir avståndet mellan prickarna längre för varje sekund. Det betyder att föremålet hinner lite längre för varje sekund som går – farten ökar. Då säger man att föremålet *accelererar|acceleration*.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'accelererande' },
        { typ: 'text', text: 'Tänk på en bil som står vid ett rödljus. När det blir grönt börjar bilen köra. Den första sekunden hinner den bara en liten bit. Nästa sekund hinner den lite längre, och sekunden efter ännu längre. Det som gör att bilen ökar farten är motorn, som drar bilen framåt med en kraft. Den kraften är större än krafterna som bromsar.' },

        { typ: 'rubrik', text: 'När avstånden blir kortare och kortare retarderar föremålet' },
        { typ: 'text', text: 'Ibland blir avståndet mellan prickarna kortare för varje sekund. Det betyder att föremålet hinner en kortare bit för varje sekund – farten minskar. Då säger man att föremålet *retarderar|retardation*. Ordet retardera betyder ungefär ”sakta in”.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'retarderad' },
        { typ: 'text', text: 'Tänk på en bil som kör fram mot ett rödljus och bromsar. För varje sekund hinner bilen en lite kortare bit. Till slut ligger prickarna nästan på varandra, och då står bilen still. Det som gör att bilen saktar in är bromsarna och friktionen mot vägen. De drar bilen bakåt med en kraft.' },

      ]
    },
    {
      id: 'troghetslagen', titel: 'Tröghetslagen',
      block: [
        { typ: 'rubrik', text: 'Det behövs en kraft för att ändra en rörelse' },
        { typ: 'text', text: 'Titta tillbaka på de olika rörelserna. Varje gång farten ändrades, eller riktningen ändrades, var det en kraft som gjorde det. Det gäller alltid.' },
        { typ: 'text', text: 'En fotboll som ligger still på gräset börjar aldrig rulla av sig själv. Någon måste sparka på den. En boll som rullar svänger aldrig av sig själv. Något måste knuffa den åt sidan. Och en boll som rullar slutar inte heller av sig själv. Det är friktionen mot gräset och luftmotståndet som bromsar den, lite i taget, tills den ligger still.' },

        { typ: 'rubrik', text: 'Tröghetslagen säger att allt fortsätter som det gör om ingen kraft ändrar det' },
        { typ: 'text', text: 'Det du just läste har ett namn: *tröghetslagen*. Den säger två saker. Ett föremål som ligger stilla, det fortsätter att ligga stilla. Ett föremål som rör sig, det fortsätter i samma fart och åt samma håll. Så är det så länge ingen kraft påverkar föremålet – eller så länge krafterna tar ut varandra, som på tåget.' },
        { typ: 'text', text: 'Att föremål fortsätter som de gör kallas *tröghet*. Man kan säga att föremålet är ”trögt”: det ändrar sig inte av sig självt.' },

        { typ: 'rubrik', text: 'Du känner tröghetslagen när bussen bromsar' },
        { typ: 'text', text: 'Tänk dig att du står i en buss. Plötsligt bromsar bussen hårt. Då tippar du framåt. Det känns som om något knuffar dig framåt – men det gör inget. Det som händer är att bussen saktar in, medan din kropp fortsätter framåt i samma fart som förut. Din kropp är trög. Den fortsätter som den gjorde.' },
        { typ: 'text', text: 'Det är därför vi har bilbälte. När bilen bromsar fortsätter din kropp framåt, precis som i bussen. Bältet håller emot. Det är bältet som är kraften som stoppar dig.' },

        { typ: 'rubrik', text: 'En rörelse behöver ingen kraft för att fortsätta' },
        { typ: 'text', text: 'Många tror att något måste knuffas hela tiden för att fortsätta röra sig. Det är lätt att tro, för det mesta runt oss stannar när vi slutar knuffa. En leksaksbil som du knuffar på golvet rullar en bit och stannar sedan.' },
        { typ: 'text', text: 'Men leksaksbilen stannar inte av sig själv. Den stannar för att friktionen mot golvet och luftmotståndet bromsar den. Om du knuffar en hockeypuck på blank is glider den mycket längre, eftersom friktionen mot isen är så liten. Ute i rymden finns ingen luft och inget golv. Där skulle pucken glida vidare för alltid. En kraft behövs alltså bara när man vill ändra en rörelse – inte för att den ska fortsätta.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Vid *likformig rörelse|likformig rörelse* hinner föremålet lika långt varje sekund. Ingen kraft verkar, eller krafterna tar ut varandra.',
          'Vid *olikformig rörelse|olikformig rörelse* ändras farten eller riktningen. Då är det en kraft som påverkar föremålet.',
          'Ökar farten *accelererar|acceleration* föremålet. Minskar farten *retarderar|retardation* det.',
          '*Tröghetslagen*: det som ligger stilla fortsätter att ligga stilla, och det som rör sig fortsätter i samma fart och riktning – om ingen kraft ändrar det.',
          'En kraft behövs för att ändra en rörelse, inte för att den ska fortsätta.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
