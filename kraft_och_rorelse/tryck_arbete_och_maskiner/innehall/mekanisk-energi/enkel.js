/* Avsnittssida III. Tryck, arbete och maskiner, text C: Mekanisk energi – nivån enkel (📗).
 * Arbetsorder 29 (2026-11-19): kallor/kap3/V-C-Mekanisk-energi-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vc: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vc.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Mekanisk energi' },
        { typ: 'text', text: 'Tänk på en gunga. Du drar dig bakåt, lyfter fötterna och åker framåt. Högst upp stannar gungan ett ögonblick. Sedan åker den tillbaka. Under hela tiden händer något med energin. Den byter form, fram och tillbaka.' },
        { typ: 'text', text: 'I den förra texten lärde du dig att energi kan byta form men aldrig försvinna. I den här texten ska vi titta närmare på tre former av energi som hänger ihop med rörelse och läge. Tillsammans kallas de *mekanisk energi*.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *rörelseenergi* är, och vad som gör den stor eller liten',
          'vad *lägesenergi* är, och hur man räknar ut den',
          'vad *elastisk energi* är',
          'hur energin byter form i en fallande boll, en gunga och ett vattenkraftverk'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'rorelseenergi', titel: 'Rörelseenergi',
      block: [
        { typ: 'rubrik', text: 'Allt som rör sig har rörelseenergi' },
        { typ: 'text', text: 'Allt som rör sig har *rörelseenergi*. En boll som rullar har rörelseenergi. En hund som springer har rörelseenergi. En bil som kör har rörelseenergi.' },
        { typ: 'text', text: 'Man märker rörelseenergin när något stoppas. En boll som rullar in i en burk kan välta burken. En bil som krockar kan trycka ihop en annan bil. Det är rörelseenergin som gör det.' },
        { typ: 'rubrik', text: 'Tyngre föremål har mer rörelseenergi' },
        { typ: 'text', text: 'Tänk dig en lastbil och en cykel som kör lika fort. Vilken skulle du helst bli påkörd av? Cykeln, förstås. Lastbilen är mycket tyngre, och därför har den mycket mer rörelseenergi. Ju större massa något har, desto mer rörelseenergi har det.' },
        { typ: 'rubrik', text: 'Snabbare föremål har mer rörelseenergi' },
        { typ: 'text', text: 'Tänk dig sedan samma bil två gånger. Först kör den långsamt, sedan fort. När den kör fort har den mer rörelseenergi. Ju fortare något rör sig, desto mer rörelseenergi har det.' },
        { typ: 'text', text: 'Farten påverkar rörelseenergin extra mycket. Om bilen kör dubbelt så fort får den inte dubbelt så mycket rörelseenergi. Den får fyra gånger så mycket. En bil i 100 km/h har alltså fyra gånger så mycket rörelseenergi som samma bil i 50 km/h. All den energin måste bromsarna ta hand om när bilen ska stanna. Det är därför det är så farligt att köra fort.' }
      ]
    },
    {
      id: 'lagesenergi', titel: 'Lägesenergi',
      block: [
        { typ: 'rubrik', text: 'Det som är högt upp har lägesenergi' },
        { typ: 'text', text: 'Ett föremål som är högt upp har *lägesenergi*. Tänk på en sten som ligger på kanten av en klippa. Så länge den ligger still händer ingenting. Men om den faller ned får den fart. Lägesenergin blir då rörelseenergi.' },
        { typ: 'text', text: 'Lägesenergi är en sorts *potentiell energi|potentiell energi*. Potentiell betyder ungefär möjlig. Energin finns lagrad och kan bli rörelse om föremålet faller.' },
        { typ: 'text', text: 'Två saker avgör hur stor lägesenergin är:' },
        { typ: 'punkter', punkter: [
          'Ju tyngre föremålet är, desto större lägesenergi.',
          'Ju högre upp föremålet är, desto större lägesenergi.'
        ] },
        { typ: 'rubrik', text: 'Man bestämmer själv varifrån man räknar' },
        { typ: 'text', text: 'Lägesenergi räknas alltid från en nivå som man väljer, till exempel golvet, marken eller havsytan.' },
        { typ: 'text', text: 'Tänk på en bok som ligger på ett bord. Jämfört med golvet har boken lägesenergi, eftersom den kan falla ned på golvet. Men om du väljer bordet som nivå har boken ingen lägesenergi. Den ligger ju precis på den nivå där du har bestämt att lägesenergin ska vara noll.' },
        { typ: 'text', text: 'Vilken nivå du väljer spelar ingen roll, bara du håller dig till samma nivå hela tiden. Det viktiga är hur mycket lägesenergin ändras när något flyttas upp eller ned. Ett klot som rullar ner från ett bord får lika mycket fart oavsett om bordet står vid havet eller uppe på ett berg.' },
        { typ: 'rubrik', text: 'Lägesenergin är lika stor som arbetet att lyfta upp föremålet' },
        { typ: 'text', text: 'I texten om energi och arbete lyfte vi ett klot upp på ett bord. Arbetet vi gjorde blev lägesenergi hos klotet. Därför kan man räkna ut lägesenergin på samma sätt som arbetet.' },
        { typ: 'text', text: 'Arbetet är kraften gånger sträckan:' },
        { typ: 'punkter', punkter: [
          'Om du lyfter långsamt och jämnt är kraften som behövs lika stor som tyngden. Tyngden är massan gånger 10, eftersom varje kilo har tyngden ungefär 10 N. Man skriver massan gånger g, där g är ungefär 10 N/kg.',
          'Sträckan är höjden.'
        ] },
        { typ: 'text', text: 'Så lägesenergin blir massan gånger g gånger höjden.' },
        { typ: 'formel', uttryck: 'E_p = m · g · h', forklaring: 'E_p lägesenergin (J), m massan (kg), g ≈ 10 N/kg, h höjden (m)' },
        { typ: 'text', text: 'E_p står för potentiell energi, alltså lägesenergi. m står för massa och h för höjd.' },
        { typ: 'exempel', rubrik: 'Upp i hopptornet', stycken: [
          ['Maja väger 50 kg. Hon klättrar upp i ett hopptorn som är 5 meter högt. Hur mycket lägesenergi har hon fått jämfört med vattenytan?'],
          ['Givet: Massan är m = 50 kg. g är ungefär 10 N/kg. Höjden är h = 5 m. Sökt: lägesenergin E_p.'],
          ['Lösning: Multiplicera massan, g och höjden.',
           'E_p = m · g · h = 50 kg · 10 N/kg · 5 m = 2 500 J',
           'Svar: Maja har fått 2 500 J lägesenergi. Det är samma sak som 2,5 kJ.']
        ] }
      ]
    },
    {
      id: 'elastisk-energi', titel: 'Elastisk energi',
      block: [
        { typ: 'rubrik', text: 'Det som spänns eller trycks ihop har elastisk energi' },
        { typ: 'text', text: 'Spänn ett gummiband mellan fingrarna. Nu har gummibandet *elastisk energi*. Gummibandet vill tillbaka till sin vanliga form. När du släpper det far det iväg. Den elastiska energin blir rörelseenergi.' },
        { typ: 'text', text: 'Samma sak händer med en fjäder som trycks ihop och en pilbåge som dras upp. När du släpper skjuts pilen iväg.' },
        { typ: 'text', text: 'Elastisk energi finns på fler ställen än man tror:' },
        { typ: 'punkter', punkter: [
          'En studsboll trycks ihop när den slår i golvet. Sedan fjädrar den tillbaka och far uppåt.',
          'En trampolin spänns när du landar på den. Sedan kastar den dig uppåt igen.',
          'Fjädrarna i en bil och sulorna i löparskor lagrar energi när de trycks ihop. När de fjädrar tillbaka blir en del av energin rörelse igen.'
        ] },
        { typ: 'text', text: 'Elastisk energi är också en sorts potentiell energi. Den är lagrad och kan bli rörelse.' }
      ]
    },
    {
      id: 'omvandlingar', titel: 'Mekanisk energi omvandlas',
      block: [
        { typ: 'rubrik', text: 'När något faller blir lägesenergi rörelseenergi' },
        { typ: 'text', text: 'Följ en boll som släpps från 5 meters höjd, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Högst upp hålls bollen still. Den har bara lägesenergi och ingen rörelseenergi.',
          'Bollen faller. Lägesenergin blir mindre, eftersom bollen kommer längre ned. Rörelseenergin blir större, eftersom bollen går fortare.',
          'Halvvägs ned har bollen tappat halva sin höjd. Då har hälften av lägesenergin blivit rörelseenergi.',
          'Precis innan bollen når marken har all lägesenergi blivit rörelseenergi.'
        ] },
        { typ: 'text', text: 'Det viktiga är att lägesenergin minskar exakt lika mycket som rörelseenergin ökar, om vi bortser från luftmotståndet. Om man lägger ihop dem blir summan hela tiden lika stor. Den summan är bollens mekaniska energi. Så fungerar energiprincipen: energin försvinner inte, den byter bara form.' },
        // [BILD C1: en boll som faller från 5 m i tre lägen (5 m, 2,5 m, strax ovanför marken); bredvid varje läge två staplar för lägesenergi och rörelseenergi: 100 % / 0 %, 50 % / 50 %, 0 % / 100 %, och summan alltid lika hög]
        { id: 'bild-c1', typ: 'figur', namn: 'energi', lage: 'fall', hojd: 5, lagen: [5, 2.5, 0], bildtext: 'Bollen tappar höjd och får fart. Lägesenergin blir rörelseenergi, men tillsammans är de lika stora hela vägen ned.' },
        { typ: 'rubrik', text: 'En gunga byter energi fram och tillbaka' },
        { typ: 'text', text: 'En gunga gör samma sak om och om igen:' },
        { typ: 'punkter', punkter: [
          'I det högsta läget stannar gungan ett ögonblick. Där har den mest lägesenergi och ingen rörelseenergi.',
          'På väg ned blir lägesenergin rörelseenergi.',
          'I det lägsta läget går gungan som fortast. Där har den mest rörelseenergi.',
          'På väg upp på andra sidan blir rörelseenergin lägesenergi igen.'
        ] },
        // [BILD C2: en gunga i tre lägen – högst till vänster ("störst lägesenergi, står stilla"), lägst i mitten ("störst rörelseenergi, går fortast"), högst till höger ("störst lägesenergi, står stilla")]
        { id: 'bild-c2', typ: 'figur', namn: 'energi', lage: 'gunga', vinkel: 45, bildtext: 'Högst upp står gungan stilla och har störst lägesenergi. I mitten går den fortast och har störst rörelseenergi.' },
        { typ: 'text', text: 'Men om ingen puttar stannar gungan efter en stund. Har energin försvunnit? Nej. Luften bromsar gungan lite, och det blir friktion där gungan sitter fast. Varje gång gungan svänger blir lite av energin värme. När någon puttar på gungan får den ny energi.' },
        { typ: 'rubrik', text: 'Vattenkraft använder lägesenergi' },
        { typ: 'text', text: 'Ett vattenkraftverk använder lägesenergin i vatten. Bakom en damm ligger mycket vatten högt upp. Vattnet släpps ned genom en tunnel. På vägen ned blir lägesenergin rörelseenergi. Det strömmande vattnet får en turbin att snurra. Turbinen driver en generator som gör elektrisk energi. Hur det går till får du lära dig i kapitlet om elektricitet.' },
        { typ: 'text', text: 'Ju högre vattnet faller och ju mer vatten som rinner, desto mer energi kan kraftverket få ut.' },
        { typ: 'rubrik', text: 'Många tror att tunga saker faller fortare' },
        { typ: 'text', text: 'Släpp en tung sten och en lätt sten från samma höjd. Många tror att den tunga landar först. Men om luftmotståndet är litet landar de samtidigt. Det lärde du dig i texten om fritt fall.' },
        { typ: 'text', text: 'De har ändå inte lika mycket energi. Den tunga stenen hade mer lägesenergi från början, eftersom den är tyngre. Därför får den också mer rörelseenergi när den faller. Stenarna har samma fart men olika mycket energi. Det är därför en tung sten gör mer skada när den landar.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Mekanisk energi är rörelseenergi, lägesenergi och elastisk energi.',
          'Rörelseenergin är större ju tyngre något är och ju fortare det rör sig. Dubbelt så hög fart ger fyra gånger så mycket rörelseenergi.',
          'Lägesenergin är större ju tyngre något är och ju högre upp det är. Man väljer själv nivån man räknar från.',
          'Lägesenergi räknas ut med E_p = m · g · h.',
          'Elastisk energi finns i det som spänns eller trycks ihop.',
          'När något faller blir lägesenergi rörelseenergi. Summan är hela tiden lika stor, om det inte finns friktion.',
          'Friktion och luftmotstånd gör om mekanisk energi till värme.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
