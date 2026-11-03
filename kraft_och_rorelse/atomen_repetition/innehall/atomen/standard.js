/* Repetition I, text A: Atomen – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
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
          titel: 'Repetition: Atomen',
          block: [
            { typ: 'text', text: 'Det här avsnittet är en repetition. Du har mött innehållet förut – läs i lugn takt och se efter vad du känner igen. Allt bygger på en enda modell: atomen med sina elektroner i skal.' },
            { typ: 'rubrik', text: 'Det här repeterar du' },
            { typ: 'punkter', punkter: [
              '*Atomer|atom* – kärnan, elektronerna och skalen',
              '*Periodiska systemet* – perioder och grupper'
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
      id: 'atomer', titel: 'Atomer',
      sidor: [
        {
          titel: 'En atom består av en kärna med elektroner runt',
          block: [
            { typ: 'text', text: 'All materia är uppbyggd av *atomer|atom*. I atomens mitt finns en liten *kärna|atomkärna* med *protoner|proton* och *neutroner|neutron*. Protonerna är positivt laddade och neutronerna saknar laddning. Runt kärnan rör sig de negativt laddade *elektronerna|elektron*. Nästan hela atomens massa sitter i kärnan, eftersom protoner och neutroner är mycket tyngre än elektroner.' }
          ]
        },
        {
          titel: 'Antalet protoner avgör vilket grundämne det är',
          block: [
            { typ: 'text', text: 'Det är antalet protoner i kärnan som bestämmer vilket *grundämne* en atom är. Antalet kallas grundämnets *atomnummer*. Alla kolatomer har 6 protoner och alla syreatomer har 8. I en atom finns lika många elektroner som protoner, så laddningarna tar ut varandra och atomen är oladdad.' }
          ]
        },
        {
          titel: 'Elektronerna ligger i skal som fylls inifrån och ut',
          block: [
            { typ: 'text', text: 'Elektronerna ligger i *skal|elektronskal* runt kärnan. Det innersta skalet, K-skalet, rymmer 2 elektroner och nästa, L-skalet, rymmer 8. Det tredje, M-skalet, kan rymma 18, men atomen är stabil redan när det har 8. Skalen fylls inifrån och ut. Elektronerna i det yttersta skalet kallas *valenselektroner|valenselektron*, och det är de som avgör hur atomen reagerar.' }
          ]
        },
        {
          titel: 'Vanliga atomer har olika många elektroner ytterst',
          block: [
            { typ: 'text', text: 'Litium har 3 elektroner: 2 i K-skalet och 1 i L-skalet. Kol har 6: 2 och 4. Syre har 8: 2 och 6. Neon har 10: 2 och 8, och då är L-skalet fullt.' },
            { typ: 'figur', namn: 'skalmodell', rader: ['protoner', 'elektroner'],
              atomer: [ { namn: 'Neon', protoner: 10, skal: [2, 8] },
                        { namn: 'Natrium', protoner: 11, skal: [2, 8, 1] },
                        { namn: 'Klor', protoner: 17, skal: [2, 8, 7] } ],
              bildtext: 'Neon har fullt yttersta skal. Natrium har 1 elektron ytterst och klor 7.' }
          ]
        },
        {
          titel: 'Vanliga atomer har olika många elektroner ytterst',
          block: [
            { typ: 'text', text: 'Natrium har 11 elektroner: 2, 8 och 1. Klor har 17: 2, 8 och 7. Neon har alltså ett fullt yttersta skal, natrium har bara 1 elektron ytterst och klor har 7. Den skillnaden förklarar både periodiska systemet och varför atomer bildar joner.' },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    },
    {
      id: 'periodiska-systemet', titel: 'Periodiska systemet',
      sidor: [
        {
          titel: 'Periodiska systemet ordnar grundämnena efter atomnummer',
          block: [
            { typ: 'text', text: 'I *periodiska systemet* står alla grundämnen i ordning efter atomnummer, alltså efter antalet protoner. Väte har nummer 1, helium 2, litium 3 och så vidare. För varje steg får atomen en proton och en elektron till. Elektronerna fyller skalen efter ett mönster som upprepas, och därför upprepas också grundämnenas egenskaper.' }
          ]
        },
        {
          titel: 'En period är en rad, och den visar hur många skal atomen har',
          block: [
            { typ: 'text', text: 'De vågräta raderna kallas *perioder|period*. Grundämnen i samma period har lika många elektronskal. Litium, kol och neon står i period 2 och har två skal. Natrium och klor står i period 3 och har tre. När en ny period börjar, börjar ett nytt skal fyllas.' }
          ]
        },
        {
          titel: 'En grupp är en kolumn, och grundämnen i samma grupp liknar varandra',
          block: [
            { typ: 'text', text: 'De lodräta kolumnerna kallas *grupper|grupp*. Grundämnen i samma grupp har lika många valenselektroner. Eftersom det är valenselektronerna som styr hur en atom reagerar, får grundämnena i en grupp liknande egenskaper. Tre grupper är särskilt viktiga: alkalimetallerna, halogenerna och ädelgaserna.' }
          ]
        },
        {
          titel: 'Alkalimetallerna i grupp 1 har en elektron ytterst',
          block: [
            { typ: 'text', text: 'Litium, natrium och kalium är *alkalimetaller|alkalimetall*. De är mjuka metaller som reagerar kraftigt, särskilt med vatten, och reaktionen blir kraftigare ju längre ner i gruppen man kommer. Med bara 1 elektron ytterst lämnar de den lätt och blir positiva joner med laddningen +1. Väte står också i grupp 1, eftersom det har 1 elektron, men räknas inte som en alkalimetall.' }
          ]
        },
        {
          titel: 'Halogenerna i grupp 17 har sju elektroner ytterst',
          block: [
            { typ: 'text', text: 'Fluor, klor, brom och jod är *halogener|halogen*. Med 7 valenselektroner behöver de bara ta upp 1 elektron för att få ett fullt yttersta skal, och då blir de negativa joner med laddningen −1. Halogenerna är mycket reaktiva och reagerar gärna med metaller. Namnet betyder saltbildare: när klor reagerar med natrium bildas natriumklorid, vanligt koksalt.' }
          ]
        },
        {
          titel: 'Ädelgaserna i grupp 18 har fullt yttersta skal och reagerar nästan inte alls',
          block: [
            { typ: 'text', text: 'Helium, neon och argon är *ädelgaser|ädelgas*. Deras yttersta skal är redan fullt, och därför reagerar de nästan aldrig med andra ämnen. Neon har 8 elektroner ytterst. Helium har bara 2, men eftersom heliumets enda skal är K-skalet är det ändå fullt. Ädelgaser används där man vill undvika reaktioner, till exempel argon i glödlampor och helium i ballonger, där det till skillnad från väte inte kan brinna.' }
          ]
        },
        {
          titel: 'Atomer blir stabila genom att likna närmaste ädelgas',
          block: [
            { typ: 'text', text: 'Andra atomer kan bli stabila genom att få samma elektronfördelning som ädelgasen närmast i periodiska systemet. Det sker genom att de tar upp, lämnar eller delar elektroner. Natrium lämnar sin yttersta elektron och får samma fördelning som neon. Klor tar upp en elektron och får samma fördelning som argon. När en atom tar upp eller lämnar elektroner bildas en jon – det är nästa del.' },
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
              'En *atom* har en kärna med protoner och neutroner, och elektroner i skal runt den. Antalet protoner avgör grundämnet.',
              'K-skalet rymmer 2 elektroner, L-skalet 8, och M-skalet är stabilt med 8. Elektronerna ytterst – valenselektronerna – styr hur atomen reagerar.',
              'I *periodiska systemet* visar perioden antalet skal och gruppen antalet valenselektroner. Alkalimetaller har 1, halogener 7 och ädelgaser fullt skal.'
            ] },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    }
  ]
});
