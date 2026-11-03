/* Repetition II, text B: Densitet och värme – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
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
          titel: 'Repetition: Densitet och värme',
          block: [
            { typ: 'text', text: 'Det här är en repetition. Du bygger vidare på partikelmodellen från text A: materia består av partiklar som rör sig snabbare ju varmare det är.' },
            { typ: 'rubrik', text: 'Det här repeterar du' },
            { typ: 'punkter', punkter: [
              '*Densitet* – varför något flyter eller sjunker',
              '*Värme* och temperatur – och vad som händer när ämnen värms upp'
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
      id: 'densitet-och-varme', titel: 'Densitet och värme', numrerad: false,
      sidor: [
        {
          titel: 'Massa och volym beskriver två olika egenskaper hos materia',
          block: [
            { typ: 'text', text: '*Massa* är ett mått på hur mycket materia ett föremål innehåller, och den mäts med en våg. Vanliga enheter för massa är kilogram (kg) och gram (g). *Volym* är hur stor plats ett föremål tar, och den mäts till exempel i kubikmeter (m<sup>3</sup>), liter (l) eller kubikcentimeter (cm<sup>3</sup>). En uppblåst ballong har stor volym men liten massa, medan en liten blykula har stor massa trots sin lilla volym.' },
            { typ: 'text', text: 'Volym kan anges i olika enheter beroende på hur stort föremålet är. En liter är lika mycket som en kubikdecimeter (1 l = 1 dm<sup>3</sup>), och en milliliter är lika mycket som en kubikcentimeter (1 ml = 1 cm<sup>3</sup>). Sambanden behövs när man jämför volymer eller räknar ut densitet.' }
          ]
        },
        {
          titel: 'Densitet beskriver hur stor massa ett ämne har per volym',
          block: [
            { typ: 'text', text: '*Densitet* talar om hur mycket massa det finns i en viss volym av ett ämne. Man räknar ut den genom att dela massan med volymen.' },
            { typ: 'formel', uttryck: 'ρ = [[m|V]]', forklaring: [
              ['ρ', 'densitet (uttalas ”rå”)'], ['m', 'massa'], ['V', 'volym'] ] },
            { typ: 'text', text: 'Vanliga enheter för densitet är gram per kubikcentimeter (g/cm<sup>3</sup>) och kilogram per kubikmeter (kg/m<sup>3</sup>). Vatten har densiteten 1,0 g/cm<sup>3</sup>, vilket betyder att en kubikcentimeter vatten har massan 1 gram.' }
          ]
        },
        {
          titel: 'Densitet beskriver hur stor massa ett ämne har per volym',
          block: [
            { typ: 'exempel', rader: [
              'En bit aluminium har massan 54 g och volymen 20 cm<sup>3</sup>.',
              'ρ = [[m|V]] = [[54 g|20 cm<sup>3</sup>]] = 2,7 g/cm<sup>3</sup>' ] },
            { typ: 'text', text: 'Aluminium har alltså densiteten 2,7 g/cm<sup>3</sup>, och varje kubikcentimeter aluminium har massan 2,7 gram.' }
          ]
        },
        {
          titel: 'Densiteten beror på ämnet och inte på föremålets storlek',
          block: [
            { typ: 'text', text: 'Olika ämnen har olika densitet, eftersom deras partiklar har olika massa och är olika tätt packade. En stor bit aluminium har större massa och volym än en liten bit, men båda har samma densitet. Om volymen fördubblas, fördubblas också massan, och då är förhållandet mellan massa och volym detsamma. Densiteten är därför en egenskap hos själva ämnet – så länge temperaturen och trycket är desamma.' }
          ]
        },
        {
          titel: 'Föremål med lägre medeldensitet än vätskan flyter',
          block: [
            { typ: 'text', text: 'Ett föremål som har lägre medeldensitet än vätskan omkring det flyter, och ett föremål med högre medeldensitet sjunker. *Medeldensiteten|medeldensitet* är hela föremålets massa delad med hela dess volym. Trä har ofta densiteten ungefär 0,5 g/cm<sup>3</sup> och flyter därför på vatten, medan järn med densiteten 7,9 g/cm<sup>3</sup> sjunker. Is har densiteten 0,92 g/cm<sup>3</sup> och flyter därför med största delen under vattenytan.' },
            { typ: 'figur', namn: 'flyter_sjunker', vatska: { namn: 'Vatten', densitet: 1.0 },
              foremal: [ { namn: 'Trä', densitet: 0.5, ca: true, stil: 'tra' },
                         { namn: 'Is', densitet: 0.92, stil: 'is' },
                         { namn: 'Järn', densitet: 7.9, stil: 'jarn' } ],
              bildtext: 'Ju närmare vattnets densitet, desto djupare ligger det som flyter.' }
          ]
        },
        {
          titel: 'Föremål med lägre medeldensitet än vätskan flyter',
          block: [
            { typ: 'text', text: 'Samma sak gäller i gaser: en heliumballong stiger eftersom ballongen med sitt helium tillsammans har lägre medeldensitet än luften omkring.' }
          ]
        },
        {
          titel: 'Temperatur och värme är inte samma sak',
          block: [
            { typ: 'text', text: 'Temperaturen anger hur varmt eller kallt något är och mäts oftast i grader Celsius (°C). Som du läste i text A hänger temperaturen ihop med partiklarnas genomsnittliga rörelseenergi. *Värme* är däremot energi som flödar från något med högre temperatur till något med lägre temperatur, och den mäts i joule (J). Flödet fortsätter tills föremålen har samma temperatur, om inget annat påverkar dem.' },
            { typ: 'figur', namn: 'varmeflode', foremal: [ { namn: 'varm', temp: 80 }, { namn: 'kall', temp: 20 } ] }
          ]
        },
        {
          titel: 'Temperatur och värme är inte samma sak',
          block: [
            { typ: 'text', text: 'Kyla flödar inte från kalla föremål till varma. När du håller en isbit i handen känns det kallt därför att värme flödar från din varmare hand till den kallare isen. Handen förlorar energi, medan isen tar emot energi och kan börja smälta.' }
          ]
        },
        {
          titel: 'De flesta ämnen utvidgas när temperaturen stiger',
          block: [
            { typ: 'text', text: 'När ett ämne värms upp får partiklarna mer rörelseenergi, och avståndet mellan dem blir oftast större. Ämnet *utvidgas|utvidgning* och får större volym, medan massan är densamma. Eftersom samma massa då fördelas på en större volym minskar densiteten. Därför stiger varm luft uppåt i kallare luft, och varmt vatten lägger sig ofta ovanpå kallare vatten.' },
            { typ: 'text', text: 'Värmeutvidgning märks också hos fasta föremål i vardagen. Broar byggs med särskilda fogar, så att materialet kan utvidgas varma dagar utan att bron skadas. Elledningar utvidgas också när det blir varmare och hänger därför slakare på sommaren än på vintern.' }
          ]
        },
        {
          titel: 'Vatten har sin största densitet vid 4 °C',
          block: [
            { typ: 'text', text: 'Vatten är ovanligt, eftersom det inte följer det vanliga sambandet mellan temperatur och densitet vid alla temperaturer. Vatten har sin största densitet vid ungefär 4 °C och får lägre densitet både när det värms och när det kyls ner mot 0 °C. När vatten fryser ordnar sig molekylerna så att de hamnar längre ifrån varandra, och därför har is lägre densitet än flytande vatten.' },
            { typ: 'text', text: 'Det har stor betydelse för livet i sjöar. När ytvattnet kyls under 4 °C får det lägre densitet och stannar därför vid ytan, där det till slut fryser. Isen flyter och bildar ett skyddande lager som bromsar avkylningen av vattnet under. Därför fryser sjöar uppifrån och ner, och fiskar och andra djur kan överleva vintern i det flytande vattnet under isen.' },
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
              '*Densitet* är massa per volym: ρ = [[m|V]]. Den hör till ämnet, inte till föremålets storlek.',
              'Ett föremål med lägre medeldensitet än vätskan flyter. Ett med högre sjunker.',
              '*Temperatur* är hur varmt något är. *Värme* är energi som flödar från varmt till kallt.',
              'De flesta ämnen utvidgas när de värms upp, och då minskar densiteten. Vatten är ett undantag: det har störst densitet vid 4 °C.'
            ] },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    }
  ]
});
