/* Avsnittssida V. Tryck, arbete och maskiner, text C: Mekanisk energi – nivån standard (📘).
 * Arbetsorder 29 (2026-11-19): kallor/kap3/V-C-Mekanisk-energi-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vc: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vc.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Mekanisk energi' },
        { typ: 'text', text: 'En gunga som svänger, en boll som studsar och en berg-och-dalbana som rusar nedför en backe har något gemensamt. Hela tiden byts två slags energi mot varandra: energin i rörelsen och energin i höjden. Tillsammans med energin i det som spänns eller trycks ihop kallas de *mekanisk energi*. I den här texten får du veta vad som avgör hur mycket mekanisk energi något har, hur man räknar ut lägesenergin och hur energin vandrar mellan formerna utan att försvinna.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad som avgör hur stor *rörelseenergi* något har',
          'vad som avgör hur stor *lägesenergi* något har, och hur man räknar ut den',
          'vad *elastisk energi* är',
          'hur energin omvandlas mellan formerna i en gunga, en fallande boll och ett vattenkraftverk'
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
        { typ: 'text', text: 'Allt som rör sig har *rörelseenergi*. En rullande boll, en springande hund och en bil i fart har rörelseenergi. Det märks när de stoppas. En boll som träffar en burk kan välta den, och en bil som krockar kan trycka ihop en annan bil. Rörelseenergin är det som kan utföra ett arbete när föremålet bromsas.' },
        { typ: 'rubrik', text: 'Tyngre och snabbare ger mer rörelseenergi' },
        { typ: 'text', text: 'Hur stor rörelseenergin är beror på två saker. Den första är massan. En lastbil och en cykel som rör sig lika fort har mycket olika rörelseenergi. Lastbilen är tyngre och har därför mycket mer energi. Den andra är farten. En bil som kör fort har mer rörelseenergi än samma bil som kör långsamt.' },
        { typ: 'text', text: 'Rörelseenergin växer snabbare när farten ökar än när massan ökar. Om massan fördubblas fördubblas rörelseenergin. Men om farten fördubblas blir rörelseenergin fyra gånger så stor. Därför är höga hastigheter så farliga i trafiken. En bil i 100 km/h har fyra gånger så mycket rörelseenergi som samma bil i 50 km/h, och all den energin måste tas om hand när bilen stannar.' }
      ]
    },
    {
      id: 'lagesenergi', titel: 'Lägesenergi',
      block: [
        { typ: 'rubrik', text: 'Det som är högt upp har lägesenergi' },
        { typ: 'text', text: 'Ett föremål som befinner sig högt upp har *lägesenergi*. Energin märks först när föremålet faller. En sten på en klippa gör ingenting så länge den ligger still, men om den faller blir lägesenergin rörelseenergi. Lägesenergi är en form av *potentiell energi|potentiell energi*, alltså energi som finns lagrad och kan bli rörelse.' },
        { typ: 'text', text: 'Lägesenergin är större ju tyngre föremålet är och ju högre upp det befinner sig. En tung sten på en hög klippa har mycket lägesenergi. En lätt sten på en låg kant har lite.' },
        { typ: 'rubrik', text: 'Lägesenergin räknas från en vald nivå' },
        { typ: 'text', text: 'Lägesenergi räknas alltid från en nivå som man själv väljer, till exempel golvet, marken eller havsytan. En bok på ett bord har lägesenergi jämfört med golvet. Men om vi väljer bordsskivan som nivå är bokens lägesenergi noll, eftersom boken ligger precis på den nivå där vi har bestämt att lägesenergin ska vara noll.' },
        { typ: 'text', text: 'Det spelar ingen roll vilken nivå man väljer, så länge man håller sig till den. Det som betyder något är hur mycket lägesenergin ändras när föremålet flyttas upp eller ned. Ett klot som rullar från ett bord till golvet får lika mycket rörelseenergi oavsett om rummet ligger vid havet eller på ett berg.' },
        { typ: 'rubrik', text: 'Lägesenergin är lika stor som arbetet att lyfta upp föremålet' },
        { typ: 'text', text: 'I texten om energi och arbete såg du att arbetet för att lyfta ett föremål blir lägesenergi. Arbetet är kraften gånger sträckan. Om föremålet lyfts långsamt med jämn fart är kraften lika stor som tyngden, och sträckan är höjden. Lägesenergin är därför tyngden gånger höjden. Tyngden är massan gånger g, ungefär 10 N per kilogram.' },
        { typ: 'formel', uttryck: 'E_p = m · g · h', forklaring: 'E_p lägesenergin (J), m massan (kg), g ≈ 10 N/kg, h höjden (m)' },
        { typ: 'exempel', rubrik: 'Upp i hopptornet', stycken: [
          ['Maja väger 50 kg och klättrar upp i ett hopptorn som är 5 meter högt. Hur mycket lägesenergi har hon fått jämfört med vattenytan?'],
          ['Givet: m = 50 kg, g ≈ 10 N/kg, h = 5 m. Sökt: lägesenergin E_p.'],
          ['Lösning:',
           'E_p = m · g · h = 50 kg · 10 N/kg · 5 m = 2 500 J',
           'Svar: Maja har fått 2 500 J lägesenergi, alltså 2,5 kJ.']
        ] }
      ]
    },
    {
      id: 'elastisk-energi', titel: 'Elastisk energi',
      block: [
        { typ: 'rubrik', text: 'Det som spänns eller trycks ihop lagrar energi' },
        { typ: 'text', text: 'När ett gummiband spänns, en fjäder trycks ihop eller en pilbåge dras upp lagras energi i föremålet. Den kallas *elastisk energi*. Föremålet strävar efter att återgå till sin vanliga form, och när det släpps blir den elastiska energin rörelseenergi. Gummibandet far iväg och pilen skjuts fram.' },
        { typ: 'text', text: 'Elastisk energi finns på många ställen. En studsboll trycks ihop när den slår i golvet och fjädrar tillbaka. En trampolin spänns när du landar och kastar dig uppåt igen. Fjädrarna i en bil och sulorna i ett par löparskor lagrar elastisk energi när de trycks ihop, och en del av energin blir rörelse igen när de återtar sin form. Liksom lägesenergin är den elastiska energin en sorts potentiell energi: lagrad energi som kan bli rörelse.' }
      ]
    },
    {
      id: 'omvandlingar', titel: 'Mekanisk energi omvandlas',
      block: [
        { typ: 'rubrik', text: 'Det som försvinner i lägesenergi kommer tillbaka som rörelseenergi' },
        { typ: 'text', text: 'Släpp en boll från 5 meters höjd. Högst upp har den bara lägesenergi. Om vi bortser från luftmotståndet minskar lägesenergin när bollen faller, och rörelseenergin ökar lika mycket. Halvvägs ned har bollen förlorat halva sin höjd och därför halva sin lägesenergi, som har blivit rörelseenergi. Precis innan den når marken har all lägesenergi blivit rörelseenergi. Den mekaniska energin, summan av de två, är då hela tiden lika stor. Energin bevaras alltid, men den mekaniska energin är bara konstant så länge ingen del av den omvandlas till andra former, som värme.' },
        // [BILD C1: en boll som faller från 5 m i tre lägen (5 m, 2,5 m, strax ovanför marken); bredvid varje läge två staplar för lägesenergi och rörelseenergi: 100 % / 0 %, 50 % / 50 %, 0 % / 100 %, och summan alltid lika hög]
        { id: 'bild-c1', typ: 'figur', namn: 'energi', lage: 'fall', hojd: 5, lagen: [5, 2.5, 0], bildtext: 'Bollen tappar höjd och får fart. Lägesenergin blir rörelseenergi, men tillsammans är de lika stora hela vägen ned.' },
        { typ: 'rubrik', text: 'En gunga byter energi fram och tillbaka' },
        { typ: 'text', text: 'En gunga visar samma sak om och om igen. I det högsta läget står gungan stilla ett ögonblick. Där har den störst lägesenergi och ingen rörelseenergi. På väg ned blir lägesenergin rörelseenergi, och i det lägsta läget går gungan som fortast. På väg upp på andra sidan blir rörelseenergin lägesenergi igen.' },
        // [BILD C2: en gunga i tre lägen – högst till vänster ("störst lägesenergi, står stilla"), lägst i mitten ("störst rörelseenergi, går fortast"), högst till höger ("störst lägesenergi, står stilla")]
        { id: 'bild-c2', typ: 'figur', namn: 'energi', lage: 'gunga', vinkel: 45, bildtext: 'Högst upp står gungan stilla och har störst lägesenergi. I mitten går den fortast och har störst rörelseenergi.' },
        { typ: 'text', text: 'Om ingen puttar på stannar gungan efter en stund. Energin försvinner inte. Luftmotståndet och friktionen i fästena omvandlar lite av den mekaniska energin till värme i varje svängning. Den som puttar på tillför ny energi genom att utföra ett arbete.' },
        { typ: 'rubrik', text: 'Vattenkraften bygger på samma omvandling' },
        { typ: 'text', text: 'Ett vattenkraftverk utnyttjar lägesenergin i vatten. Bakom en damm ligger vattnet högt. När det släpps ned genom en tunnel blir lägesenergin rörelseenergi, och det strömmande vattnet driver runt en turbin. Turbinen driver en generator som omvandlar rörelsen till elektrisk energi. Hur generatorn fungerar lär du dig i kapitlet om elektricitet. Ju högre fallhöjden är och ju mer vatten som rinner, desto mer energi kan kraftverket ta tillvara.' },
        { typ: 'rubrik', text: 'Många tror att tunga föremål faller fortare' },
        { typ: 'text', text: 'En tung och en lätt sten som släpps från samma höjd faller lika fort, om luftmotståndet är litet. Det såg du i texten om fritt fall. Men de har inte lika mycket energi. Den tunga stenen hade mer lägesenergi från början och får därför mer rörelseenergi. Samma fart, men mer energi. Det är därför en tung sten gör större skada när den landar.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Mekanisk energi är rörelseenergi, lägesenergi och elastisk energi.',
          'Rörelseenergin är större ju tyngre föremålet är och ju fortare det rör sig. Dubbelt så hög fart ger fyra gånger så mycket rörelseenergi.',
          'Lägesenergin är större ju tyngre föremålet är och ju högre upp det befinner sig. Den räknas från en vald nivå.',
          'Lägesenergi räknas ut med E_p = m · g · h.',
          'Elastisk energi lagras i det som spänns eller trycks ihop.',
          'När ett föremål faller blir lägesenergin rörelseenergi. Utan friktion är den mekaniska energin hela tiden lika stor.',
          'Friktion och luftmotstånd omvandlar mekanisk energi till värme.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
