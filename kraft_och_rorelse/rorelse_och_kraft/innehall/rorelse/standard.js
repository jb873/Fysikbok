/* Avsnittssida III, text A: Rörelse – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims granskade källa (III-A-Rorelse-alla-nivaer-v2.md, 2026-11-03), införd ordagrant i strömformatet:
 * ### = rubrik, ett stycke = ett textblock, [FIGUR rorelsespar: X] = figuren där markeringen står. Motorn bryter sidorna.
 * "Det här lär du dig:" står som liten rubrik utan kolon, som "Det här repeterar du" i Repetition I.
 * Avsnittens id (inledning, rorelse, sammanfattning) är desamma på alla nivåer – nivåbytet hittar samma avsnitt. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Rörelse' },
        { typ: 'text', text: 'I det här kapitlet handlar det om krafter – och för att förstå vad en kraft gör behöver du först kunna se hur något rör sig. Här lär du dig att läsa av en rörelse och att känna igen när en kraft är med i spelet.' },
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
      id: 'rorelse', titel: 'Rörelse', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'En rörelse kan beskrivas med var föremålet är efter lika lång tid' },
        { typ: 'text', text: 'Tänk dig att du fotograferar en bil som kör förbi, en gång varje sekund, och sätter en prick där bilen var på varje bild. Mellan två prickar har det alltså alltid gått lika lång tid. Avståndet mellan prickarna visar hur långt bilen hann under den tiden. Ligger prickarna långt isär rör sig bilen snabbt, ligger de tätt rör den sig långsamt. På det sättet kan man se hur en rörelse ser ut, utan att räkna.' },

        { typ: 'rubrik', text: 'Vid likformig rörelse är avståndet mellan prickarna lika långt' },
        { typ: 'text', text: 'Om föremålet hinner lika långt under varje tidsenhet är rörelsen *likformig|likformig rörelse*. Prickarna ligger då på lika stort avstånd från varandra hela vägen. Ett tåg som kör rakt fram i jämn fart på en lång raksträcka rör sig likformigt, och det gör också en hockeypuck som glider över blank is. Farten ändras inte och riktningen ändras inte.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'likformig' },
        { typ: 'text', text: 'En likformig rörelse behöver ingen kraft för att fortsätta. Det betyder inte alltid att inga krafter alls verkar. Tåget har motorns kraft framåt och luftmotstånd och friktion bakåt, men krafterna är lika stora och tar ut varandra. Det är som om ingen kraft verkade alls, och därför fortsätter tåget i samma fart.' },

        { typ: 'rubrik', text: 'Vid olikformig rörelse är avstånden olika långa' },
        { typ: 'text', text: 'Om föremålet hinner olika långt under lika långa tider är rörelsen *olikformig|olikformig rörelse*. Prickarna ligger då ojämnt – ibland tätt, ibland glest. De flesta rörelser i vardagen är olikformiga. En cykel i stadstrafik saktar in vid korsningar, står still vid rödljus och trampar i gång igen. När en rörelse ändras på det sättet är det alltid en kraft som påverkar föremålet: en knuff, ett drag, en broms eller något som tar emot.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'olikformig' },

        { typ: 'rubrik', text: 'Vid accelererande rörelse blir avstånden längre och längre' },
        { typ: 'text', text: 'När avståndet mellan prickarna växer för varje tidsenhet ökar farten. Då säger man att föremålet *accelererar|acceleration*. En bil som startar vid grönt ljus hinner bara en liten bit den första sekunden, lite längre nästa och ännu längre sekunden därpå. Det som får bilen att accelerera är en kraft framåt från motorn som är större än krafterna som bromsar.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'accelererande' },

        { typ: 'rubrik', text: 'Vid retarderad rörelse blir avstånden kortare och kortare' },
        { typ: 'text', text: 'När avståndet mellan prickarna krymper för varje tidsenhet minskar farten. Då säger man att föremålet *retarderar|retardation*. En bil som bromsar in mot ett rödljus hinner allt kortare bit för varje sekund, tills prickarna nästan hamnar på varandra och bilen står still. Det som får bilen att retardera är en kraft bakåt, från bromsarna och friktionen mot vägen.' },
        { typ: 'figur', namn: 'rorelsespar', rorelse: 'retarderad' },

        { typ: 'rubrik', text: 'Bara en kraft kan ändra fart eller riktning' },
        { typ: 'text', text: 'I alla de olikformiga rörelserna gäller samma sak: när farten eller riktningen ändras är det en kraft som ligger bakom. En boll som ligger still på golvet börjar inte rulla av sig själv – någon måste sparka på den. En boll som rullar svänger inte av sig själv – något måste knuffa den åt sidan. Och en boll som rullar slutar inte av sig själv – det är friktionen mot golvet och luftmotståndet som bromsar den.' },

        { typ: 'rubrik', text: 'Tröghetslagen: ett föremål fortsätter som det gör om ingen kraft ändrar det' },
        { typ: 'text', text: 'Det här kallas *tröghetslagen*. Ett föremål som ligger stilla förblir i vila, och ett föremål som rör sig fortsätter i samma fart och samma riktning – så länge ingen kraft påverkar det, eller så länge krafterna som påverkar det tar ut varandra. Föremålets *tröghet* gör att det fortsätter som det gör.' },
        { typ: 'text', text: 'Du känner tröghetslagen i kroppen varje gång en buss bromsar hastigt. Bussen saktar in, men din kropp fortsätter framåt i samma fart, och därför tippar du framåt. Ingen kraft ”kastar” dig framåt – det är bussen som stannar, medan du fortsätter. Det är därför bilbältet behövs: det är kraften som stoppar dig.' },

        { typ: 'rubrik', text: 'Många tror att det behövs en kraft för att något ska fortsätta röra sig' },
        { typ: 'text', text: 'Det är lätt att tro att en rörelse kräver en kraft hela tiden, eftersom saker runt oss stannar när vi slutar knuffa på dem. Men de stannar inte av sig själva – de stannar för att friktion och luftmotstånd bromsar dem. På blank is glider en hockeypuck mycket långt, eftersom friktionen är så liten. Ute i rymden, där det varken finns luft eller underlag, skulle den glida vidare i all evighet. En kraft behövs alltså för att ändra en rörelse, inte för att hålla den igång.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Vid *likformig rörelse|likformig rörelse* hinner föremålet lika långt varje tidsenhet. Ingen kraft verkar, eller krafterna tar ut varandra.',
          'Vid *olikformig rörelse|olikformig rörelse* ändras farten eller riktningen – då påverkar en kraft föremålet.',
          'Ökar farten *accelererar|acceleration* föremålet, minskar den *retarderar|retardation* det.',
          '*Tröghetslagen*: ett föremål förblir i vila eller fortsätter i samma fart och riktning om ingen kraft ändrar det.',
          'En kraft behövs för att ändra en rörelse, inte för att hålla den igång.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
