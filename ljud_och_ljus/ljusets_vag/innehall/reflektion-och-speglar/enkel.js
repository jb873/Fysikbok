/* Avsnittssida III. Ljusets väg, text B: Reflektion och speglar – nivån enkel (📗).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-B-Reflektion-och-speglar-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiib.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'En vägg och en spegel reflekterar båda ljus' },
        { typ: 'text', text: 'Titta på en vit vägg. Titta sedan i en spegel. Båda två reflekterar nästan allt ljus som träffar dem. Ändå ser de helt olika ut. I väggen ser du bara en ljus yta. I spegeln ser du dig själv.' },
        { typ: 'text', text: 'Hur kan det bli så olika, när båda reflekterar ljuset? I den här texten får du veta varför. Du får också veta vad som händer med ljuset när det studsar mot ytor som är plana och ytor som är buktiga.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*reflektionslagen*, och vad en *normal* är',
          'varför en slät yta ger en spegelbild, men inte en skrovlig yta',
          'var spegelbilden finns, och varför text blir baklänges i en spegel',
          'hur en reflex skickar tillbaka ljuset',
          'vad *konkava|konkav* och *konvexa|konvex* speglar gör, och vad de används till'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'reflektionslagen', titel: 'Reflektionslagen',
      block: [
        { typ: 'rubrik', text: 'Ljuset studsar som en boll mot en vägg' },
        { typ: 'text', text: 'Tänk dig att du spelar innebandy. Du skjuter bollen snett mot sargen. Bollen studsar ut igen, lika snett, men åt andra hållet. Samma sak händer när man spelar biljard och bollen studsar mot kanten.' },
        { typ: 'text', text: 'Ljus gör likadant när det träffar en spegel. Om ljuset kommer snett mot spegeln studsar det ut lika snett åt andra hållet.' },
        { typ: 'rubrik', text: 'Vinklarna mäts mot normalen' },
        { typ: 'text', text: 'För att kunna mäta hur snett ljuset kommer ritar man en tänkt linje. Linjen står rakt ut från spegeln, i 90 graders vinkel, precis där strålen träffar. Den linjen kallas *normal*.' },
        { typ: 'text', text: 'Sedan mäter man två vinklar:' },
        { typ: 'punkter', punkter: [
          'Vinkeln mellan strålen som kommer in och normalen. Den kallas *infallsvinkel*.',
          'Vinkeln mellan strålen som studsar ut och normalen. Den kallas *reflektionsvinkel*.'
        ] },
        { typ: 'text', text: '*Reflektionslagen|reflektionslagen* säger att de två vinklarna alltid är lika stora. Om ljuset kommer in med 40 grader mot normalen, studsar det ut med 40 grader mot normalen.' },
        // [BILD B1: reflektionslagen, strukturfigur: en plan spegel, en inkommande stråle snett uppifrån vänster och en reflekterad stråle snett uppåt höger, normalen streckad och vinkelrät mot spegeln i träffpunkten. Vinklarna markerade mellan strålarna och normalen, båda 40°. Namn: spegel, normal, infallsvinkel, reflektionsvinkel]
        { id: 'bild-b1', typ: 'figur', namn: 'ljus', lage: 'reflektionslagen', bildtext: 'Infallsvinkeln är lika stor som reflektionsvinkeln. Båda mäts mot normalen.' },
        { typ: 'text', text: 'Varför mäter man mot normalen och inte mot spegeln? Det fungerar för alla ytor, även för speglar som är buktiga. Det får du se längre fram.' },
        { typ: 'text', text: 'Om ljuset kommer rakt mot spegeln, precis längs normalen, är infallsvinkeln 0 grader. Då studsar ljuset rakt tillbaka samma väg som det kom.' }
      ]
    },
    {
      id: 'slat-och-skrovlig', titel: 'Släta och skrovliga ytor',
      block: [
        { typ: 'rubrik', text: 'En slät yta skickar ljuset vidare i ordning' },
        { typ: 'text', text: 'En spegel är väldigt slät. Den är oftast gjord av en glasskiva med ett tunt lager metall på baksidan, till exempel aluminium.' },
        { typ: 'text', text: 'Tänk dig att flera ljusstrålar kommer bredvid varandra, alla åt samma håll. Sådana strålar kallas parallella. Så här händer det när de träffar en spegel:' },
        { typ: 'punkter', punkter: [
          'Spegeln är helt slät, så alla strålarna träffar den med samma vinkel.',
          'Därför studsar alla strålarna ut med samma vinkel.',
          'Strålarna går fortfarande bredvid varandra efter studsen.',
          'Ljuset har kvar sin ordning. Därför kan ögat se en skarp bild i spegeln.'
        ] },
        { typ: 'rubrik', text: 'En skrovlig yta sprider ljuset åt alla håll' },
        { typ: 'text', text: 'En vit vägg ser slät ut. Ett papper ser slätt ut. Men om du tittar i ett mikroskop ser du att ytan är full av små gropar och toppar. Ytan är skrovlig.' },
        { typ: 'text', text: 'Varje stråle följer fortfarande reflektionslagen. Men ytan lutar åt olika håll på olika ställen. Därför studsar strålarna åt alla möjliga håll. Man säger att ljuset sprids. Ett annat ord för det är *diffus* reflektion.' },
        // [BILD B2: två ytor sida vid sida, samma knippe med fem parallella strålar mot båda: vänster en plan spegel – strålarna studsar parallellt, korta streckade normaler i varje träffpunkt pekar åt samma håll · höger en skrovlig yta i förstoring – normalerna pekar åt olika håll, strålarna studsar åt olika håll. Strukturfigur med namn: slät yta, skrovlig yta]
        { id: 'bild-b2', typ: 'figur', namn: 'ljus', lage: 'slat-skrovlig', bildtext: 'På en slät yta pekar normalerna åt samma håll och strålarna studsar parallellt. På en skrovlig yta sprids ljuset.' },
        { typ: 'text', text: 'Det är tur att de flesta ytor sprider ljuset. Det är därför du kan se saker. Ljuset från varje punkt på väggen sprids åt alla håll. Alla i rummet får lite ljus från varje punkt, var de än står. Därför kan alla se väggen.' },
        { typ: 'text', text: 'En spegel gör inte så. Den skickar ljuset från lampan vidare åt ett enda håll. Därför ser du lampan i spegeln, men inte själva spegelytan.' },
        { typ: 'text', text: 'Du kan se skillnaden en kväll när du åker bil. Torr asfalt är skrovlig. Den sprider ljuset från bilens lyktor, och du ser vägen framför dig. Men när det regnar fylls de små groparna i asfalten med vatten. Då blir ytan mycket mer lik en spegel. Mycket av ljuset från bilarna som kommer emot studsar rakt mot dig och bländar. Samtidigt ser vägen framför dig mörk ut.' }
      ]
    },
    {
      id: 'spegelbilden', titel: 'Spegelbilden',
      block: [
        { typ: 'rubrik', text: 'Bilden ser ut att finnas bakom spegeln' },
        { typ: 'text', text: 'Tänk dig att du tittar på en blomma i en spegel. Det ser ut som om blomman står bakom spegeln. Men där finns ingen blomma. Det kommer inget ljus därifrån heller. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Ljus från blomman går till spegeln.',
          'Ljuset studsar mot spegeln och kommer in i ditt öga.',
          'Din hjärna vet inte att ljuset har studsat. Hjärnan tror att ljuset har gått rakt hela vägen.',
          'Därför ser det ut som om ljuset kommer från en plats bakom spegeln.',
          'Där ser du blomman.'
        ] },
        // [BILD B3: spegelbildens konstruktion i numrerade steg: 1 en lampa lyser på en blomma som står 50 cm framför en plan spegel · 2 två strålar från blommans topp går till två närliggande punkter på spegeln och reflekteras enligt reflektionslagen · 3 de reflekterade strålarna når pupillens övre och nedre kant (ögat ritat stort i genomskärning så att pupillen har en bredd) · 4 strålarna förlängs streckat bakåt genom spegeln och möts i en punkt 50 cm bakom spegeln, där spegelbilden ses. OBS: geometrin ska vara exakt – infallsvinkel lika med reflektionsvinkel i båda träffpunkterna. Avstånden 50 cm och 50 cm utsatta]
        { id: 'bild-b3', typ: 'figur', namn: 'ljus', lage: 'spegelbild-steg', bildtext: 'Båda strålarna följer reflektionslagen. Förlängda bakåt möts de 50 cm bakom spegeln, där du ser blomman.' },
        { typ: 'text', text: 'Spegelbilden ser alltid ut att vara lika långt bakom spegeln som saken är framför spegeln. Om blomman står 50 centimeter framför spegeln, ser spegelbilden ut att stå 50 centimeter bakom. Om du står en meter från badrumsspegeln, ser du dig själv två meter bort. Bilden är lika stor som du och står rätt, inte upp och ned.' },
        { typ: 'rubrik', text: 'Spegelbilden är spegelvänd' },
        { typ: 'text', text: 'Prova att lyfta din högra hand framför en spegel. Spegelbilden lyfter handen på samma sida som din. Men tänk dig att spegelbilden är en annan person som står och tittar på dig. Då är det hennes vänstra hand.' },
        { typ: 'text', text: 'Det märks tydligt med text. Om du har en tröja med text på, blir texten baklänges i spegeln. Man säger att spegelbilden är *spegelvänd*.' },
        { typ: 'text', text: 'Många tror att spegeln byter plats på höger och vänster. Men titta igen. Det som är till höger hos dig är till höger i spegeln också. Det spegeln vänder på är fram och bak. Din näsa pekar mot spegeln. Spegelbildens näsa pekar mot dig.' },
        { typ: 'text', text: 'Det här använder man på ambulanser. På framsidan står ordet AMBULANS skrivet baklänges. Den som kör bilen framför ser ambulansen i backspegeln. I spegeln vänds texten en gång till, och då kan föraren läsa den rätt.' },
        { typ: 'rubrik', text: 'Fönstret blir en spegel på kvällen' },
        { typ: 'text', text: 'Har du märkt att fönstret blir som en spegel på kvällen? På dagen ser du ut genom samma fönster. Fönstret har inte ändrat sig. Det är ljuset som har ändrat sig.' },
        { typ: 'text', text: 'En fönsterruta släpper igenom det mesta av ljuset. Men den reflekterar alltid lite, några procent.' },
        { typ: 'punkter', punkter: [
          'På dagen kommer det mycket ljus utifrån. Det är mycket starkare än det lilla ljus från rummet som rutan reflekterar. Därför märks inte spegelbilden, och du ser ut.',
          'På kvällen är det mörkt ute och tänt inne. Nu kommer nästan inget ljus utifrån. Det lilla ljus från rummet som rutan reflekterar syns tydligt. Därför ser du rummet och dig själv i fönstret.'
        ] },
        // [BILD B4: fönstret dag och kväll sida vid sida, strukturfigur: vänster dag – tjocka strålar utifrån går in genom rutan, en tunn stråle från en lampa inne reflekteras i rutan · höger kväll – inga strålar utifrån, samma tunna reflekterade stråle från lampan inne når ögat. Namn: dag – du ser ut, kväll – du ser rummet]
        { id: 'bild-b4', typ: 'figur', namn: 'ljus', lage: 'fonster', bildtext: 'Rutan reflekterar lite ljus hela tiden. På dagen syns det inte för allt ljus utifrån, på kvällen ser du rummet.' }
      ]
    },
    {
      id: 'reflexen', titel: 'Reflexen skickar ljuset tillbaka',
      block: [
        { typ: 'rubrik', text: 'En reflex fungerar som speglar i ett hörn' },
        { typ: 'text', text: 'Tänk dig att en bil lyser på en vanlig spegel. Ljuset studsar iväg åt ett annat håll. Föraren ser ingenting. En reflex är byggd på ett annat sätt. Den skickar tillbaka ljuset mot den som lyser.' },
        { typ: 'text', text: 'Titta noga på en cykelreflex. Du ser att den består av massor av små hörn. Varje hörn har tre små ytor som står i rät vinkel mot varandra, ungefär som hörnet inuti en låda. Bilden visar hörnet från sidan, så där ser du bara två av ytorna. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Ljus från bilens lyktor går in i ett av hörnen.',
          'Ljuset studsar mot den första ytan.',
          'Sedan studsar det mot nästa yta.',
          'Efter studsarna går ljuset ut igen, tillbaka åt precis samma håll som det kom ifrån. Det går tillbaka mot bilen.'
        ] },
        // [BILD B5: reflexens hörn som förenklad tvådimensionell modell, sedd från sidan med två ytor i rät vinkel (bildtexten säger att en riktig reflex har tre ytor), i numrerade steg: 1 ljus från en billykta går in i hörnet · 2 strålen reflekteras mot den första ytan · 3 strålen reflekteras mot den andra ytan · 4 strålen går ut parallellt med den inkommande strålen, tillbaka mot bilen. Normalerna streckade i varje träffpunkt]
        { id: 'bild-b5', typ: 'figur', namn: 'ljus', lage: 'reflex', bildtext: 'Efter två reflektioner går ljuset tillbaka parallellt med det som kom in. En riktig reflex har tre ytor; här visas två.' },
        { typ: 'text', text: 'Det fina med en reflex är att den nästan inte behöver vara riktad åt rätt håll. Ljuset kommer ändå tillbaka mot bilen.' },
        { typ: 'text', text: 'Det här är viktigt för din säkerhet. En person med reflex syns på över hundra meters avstånd när bilen har halvljus. En person i mörka kläder syns bara på några tiotals meter. Reflexvästar och vägskyltar fungerar på samma sätt. Ibland används i stället små glaskulor, som också skickar tillbaka ljuset.' }
      ]
    },
    {
      id: 'buktiga-speglar', titel: 'Buktiga speglar',
      block: [
        { typ: 'rubrik', text: 'Konkav buktar inåt, konvex buktar utåt' },
        { typ: 'text', text: 'Alla speglar är inte plana. Ta en blank sked och titta på den.' },
        { typ: 'punkter', punkter: [
          'Insidan av skeden buktar inåt. En spegel som buktar inåt kallas *konkav*.',
          'Baksidan av skeden buktar utåt. En spegel som buktar utåt kallas *konvex*.'
        ] },
        { typ: 'text', text: 'Ett sätt att komma ihåg det: kupa handen. Handflatan är konkav. Handryggen är konvex.' },
        { typ: 'text', text: 'Reflektionslagen gäller fortfarande för varje stråle. Men ytan lutar olika mycket på olika ställen. Därför studsar strålarna åt olika håll.' },
        { typ: 'rubrik', text: 'En konkav spegel samlar ljuset i en punkt' },
        { typ: 'text', text: 'Tänk dig att parallella strålar, till exempel solljus, träffar en konkav spegel. Då studsar strålarna så att de samlas i stort sett i en punkt framför spegeln. Den punkten kallas *brännpunkt*. Ett annat ord för den är *fokus*. Avståndet från spegeln till brännpunkten kallas *brännvidd*.' },
        // [BILD B6: konkav och konvex spegel sida vid sida, strukturfigur. Vänster: fem parallella strålar mot en konkav spegel (parabolisk form, strålarna följer reflektionslagen mot den verkliga ytan), reflekteras och möts i brännpunkten F framför spegeln, brännvidden markerad · höger: fem parallella strålar mot en konvex spegel, reflekteras utåt, de reflekterade strålarna förlängs streckat bakom spegeln och ser ut att komma från en tänkt brännpunkt F där. Namn: konkav spegel, konvex spegel, brännpunkt, brännvidd]
        { id: 'bild-b6', typ: 'figur', namn: 'ljus', lage: 'buktiga-speglar', bildtext: 'En konkav spegel samlar parallella strålar i brännpunkten. Från en konvex spegel ser strålarna ut att komma från en brännpunkt bakom spegeln.' },
        { typ: 'text', text: 'Allt ljus samlas i brännpunkten. Därför kan det bli väldigt varmt där. Riktar man en stor konkav spegel mot solen kan man koka vatten i brännpunkten. Det kallas en solugn.' },
        { typ: 'text', text: 'En parabolantenn är också en konkav spegel. Den tar inte emot synligt ljus, utan radiovågor från satelliter. Vågorna samlas i brännpunkten. Där sitter mottagaren.' },
        { typ: 'text', text: 'Det fungerar också åt andra hållet. Om man sätter en lampa i brännpunkten händer det här:' },
        { typ: 'punkter', punkter: [
          'Lampan skickar ljus åt alla håll mot spegeln.',
          'Varje stråle studsar mot spegeln enligt reflektionslagen.',
          'Strålarna går ut nästan parallellt framåt.',
          'Ljuset blir en smal och stark ljuskägla åt ett enda håll.'
        ] },
        // [BILD B7: strålkastaren i numrerade steg: 1 en lampa sitter i den konkava spegelns brännpunkt · 2 ljuset från lampan går åt alla håll mot spegeln · 3 varje stråle reflekteras enligt reflektionslagen · 4 de reflekterade strålarna går ut nästan parallellt framåt som en smal ljuskägla]
        { id: 'bild-b7', typ: 'figur', namn: 'ljus', lage: 'stralkastare', bildtext: 'Med lampan i brännpunkten går det reflekterade ljuset ut nästan parallellt.' },
        { typ: 'text', text: 'Så är en ficklampa och en strålkastare byggd.' },
        { typ: 'text', text: 'En konkav spegel kan också förstora. Håll en sminkspegel nära ansiktet. Då ser du ditt ansikte större och rättvänt. Håll den långt bort. Då ser du dig själv mindre och upp och ned. Du kan prova samma sak med insidan av en blank sked.' },
        { typ: 'rubrik', text: 'En konvex spegel sprider ljuset' },
        { typ: 'text', text: 'När parallella strålar träffar en konvex spegel studsar de ut åt olika håll. De sprids. Det ser ut som om de kommer från en punkt bakom spegeln.' },
        { typ: 'text', text: 'I en konvex spegel ser allt mindre ut. Men du ser mycket mer av omgivningen än i en lika stor plan spegel. Därför används konvexa speglar där man behöver se mycket på en gång:' },
        { typ: 'punkter', punkter: [
          'i korsningar och utfarter där man inte kan se runt hörnet',
          'i affärer, så att personalen ser hela butiken',
          'som sidospeglar på bilar'
        ] },
        // [BILD B8: konvex vägspegel i en skymd korsning, sedd uppifrån: en bil står vid utfarten, en spegel på andra sidan vägen. Strålar från en cyklist som kommer bakom ett hus träffar den konvexa spegeln och reflekteras mot föraren. Strukturfigur med namn: konvex spegel, skymd väg]
        { id: 'bild-b8', typ: 'figur', namn: 'ljus', lage: 'vagspegel', bildtext: 'Den konvexa spegeln visar en stor del av vägen, så att föraren ser cyklisten bakom huset.' },
        { typ: 'text', text: 'Eftersom allt ser mindre ut verkar det också vara längre bort än det är. Därför står det på vissa backspeglar att sakerna är närmare än de ser ut. Det är bra att veta när man ska bedöma hur långt bort en bil är.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Reflektionslagen: infallsvinkeln är lika stor som reflektionsvinkeln.',
          'Vinklarna mäts mot normalen. Normalen är en tänkt linje som står rakt ut från ytan.',
          'En slät yta, som en spegel, skickar strålarna vidare i ordning. Då blir det en spegelbild.',
          'En skrovlig yta sprider ljuset åt alla håll. Därför kan vi se saker från alla håll.',
          'Spegelbilden ser ut att vara lika långt bakom spegeln som saken är framför. Den är spegelvänd.',
          'Ett fönster blir en spegel på kvällen, när det är ljusare inne än ute.',
          'En reflex skickar tillbaka ljuset mot den som lyser.',
          'En konkav spegel buktar inåt och samlar ljuset i brännpunkten.',
          'En konvex spegel buktar utåt och sprider ljuset. Den visar mer av omgivningen, men allt ser mindre ut.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
