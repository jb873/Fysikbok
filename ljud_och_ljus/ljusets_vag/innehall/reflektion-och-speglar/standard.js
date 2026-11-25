/* Avsnittssida III. Ljusets väg, text B: Reflektion och speglar – nivån standard (📘).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-B-Reflektion-och-speglar-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiib.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'En vägg och en spegel reflekterar båda ljus' },
        { typ: 'text', text: 'Både en vit vägg och en spegel reflekterar nästan allt ljus som träffar dem. Ändå ser de helt olika ut. I väggen ser du bara en ljus yta, i spegeln ser du dig själv. I den här texten får du veta varför, och vad som händer med ljuset när det studsar mot plana och buktiga ytor.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*reflektionslagen*, och hur man mäter vinklarna mot en *normal*',
          'varför en slät yta ger en spegelbild men en skrovlig yta inte gör det',
          'var spegelbilden finns och varför texten i en spegel är spegelvänd',
          'hur en reflex skickar tillbaka ljuset mot den som lyser',
          'vad *konkava|konkav* och *konvexa|konvex* speglar gör med ljuset, och vad de används till'
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
        { typ: 'text', text: 'Om du spelar biljard eller innebandy vet du att bollen studsar mot kanten på ett bestämt sätt. Skjuter du snett mot kanten studsar bollen ut lika snett åt andra hållet. Ljus gör likadant när det träffar en spegel.' },
        { typ: 'rubrik', text: 'Vinklarna mäts mot normalen' },
        { typ: 'text', text: 'För att beskriva hur ljuset studsar ritar man en tänkt linje som står vinkelrätt mot spegeln, där strålen träffar. Linjen kallas *normal*. Vinkeln mellan den inkommande strålen och normalen kallas *infallsvinkel*. Vinkeln mellan den reflekterade strålen och normalen kallas *reflektionsvinkel*. *Reflektionslagen|reflektionslagen* säger att infallsvinkeln alltid är lika stor som reflektionsvinkeln.' },
        // [BILD B1: reflektionslagen, strukturfigur: en plan spegel, en inkommande stråle snett uppifrån vänster och en reflekterad stråle snett uppåt höger, normalen streckad och vinkelrät mot spegeln i träffpunkten. Vinklarna markerade mellan strålarna och normalen, båda 40°. Namn: spegel, normal, infallsvinkel, reflektionsvinkel]
        { id: 'bild-b1', typ: 'figur', namn: 'ljus', lage: 'reflektionslagen', bildtext: 'Infallsvinkeln är lika stor som reflektionsvinkeln. Båda mäts mot normalen.' },
        { typ: 'text', text: 'Man mäter mot normalen och inte mot själva spegeln, eftersom det fungerar för alla ytor, även buktiga. Om strålen kommer rakt mot spegeln, längs normalen, är infallsvinkeln 0°. Då studsar ljuset rakt tillbaka samma väg.' }
      ]
    },
    {
      id: 'slat-och-skrovlig', titel: 'Släta och skrovliga ytor',
      block: [
        { typ: 'rubrik', text: 'En slät yta skickar ljuset vidare i ordning' },
        { typ: 'text', text: 'En spegel är mycket slät. Den består oftast av en glasskiva med ett tunt lager aluminium eller silver på baksidan. När ett knippe parallella ljusstrålar träffar en sådan yta har alla strålarna samma infallsvinkel. Därför får de också samma reflektionsvinkel, och de fortsätter parallellt efter att ha studsat. Ljuset behåller sin ordning, och därför kan ögat se en skarp bild i spegeln.' },
        { typ: 'rubrik', text: 'En skrovlig yta sprider ljuset åt alla håll' },
        { typ: 'text', text: 'En vit vägg, ett papper eller din tröja ser kanske släta ut, men i förstoring är ytan full av små ojämnheter. Varje stråle följer fortfarande reflektionslagen, men ytan lutar åt olika håll på olika ställen. Därför studsar strålarna åt alla möjliga håll. Det kallas att ljuset sprids. Något annat ord för det är *diffus* reflektion.' },
        // [BILD B2: två ytor sida vid sida, samma knippe med fem parallella strålar mot båda: vänster en plan spegel – strålarna studsar parallellt, korta streckade normaler i varje träffpunkt pekar åt samma håll · höger en skrovlig yta i förstoring – normalerna pekar åt olika håll, strålarna studsar åt olika håll. Strukturfigur med namn: slät yta, skrovlig yta]
        { id: 'bild-b2', typ: 'figur', namn: 'ljus', lage: 'slat-skrovlig', bildtext: 'På en slät yta pekar normalerna åt samma håll och strålarna studsar parallellt. På en skrovlig yta sprids ljuset.' },
        { typ: 'text', text: 'Det är den spridningen som gör att du kan se föremål som inte lyser själva. Ljuset från varje punkt på väggen sprids åt alla håll, så alla i rummet får lite ljus från varje punkt, var de än står. En spegel skickar däremot ljuset från lampan vidare åt ett enda håll, och därför ser du lampan i spegeln och inte själva spegelytan.' },
        { typ: 'text', text: 'En väg en natt visar skillnaden tydligt. Torr asfalt är skrovlig och sprider billyktornas ljus, så att du ser vägen. När vägen är våt fylls ojämnheterna med vatten, och ytan blir mycket mer lik en spegel. Då studsar mycket av ljuset från mötande bilar rakt mot dig och bländar, samtidigt som vägen framför dig ser mörk ut.' }
      ]
    },
    {
      id: 'spegelbilden', titel: 'Spegelbilden',
      block: [
        { typ: 'rubrik', text: 'Bilden ser ut att finnas bakom spegeln' },
        { typ: 'text', text: 'När du tittar på en blomma i en spegel ser det ut som om blomman står bakom spegeln. Men där finns ingen blomma, och inget ljus kommer därifrån. Ljuset har gått från blomman till spegeln och studsat in i ditt öga. Hjärnan förutsätter att ljus går rakt fram, och följer därför strålarna bakåt i en rak linje, rakt igenom spegeln. Där strålarna verkar komma ifrån ser du blomman.' },
        // [BILD B3: spegelbildens konstruktion i numrerade steg: 1 en lampa lyser på en blomma som står 50 cm framför en plan spegel · 2 två strålar från blommans topp går till två närliggande punkter på spegeln och reflekteras enligt reflektionslagen · 3 de reflekterade strålarna når pupillens övre och nedre kant (ögat ritat stort i genomskärning så att pupillen har en bredd) · 4 strålarna förlängs streckat bakåt genom spegeln och möts i en punkt 50 cm bakom spegeln, där spegelbilden ses. OBS: geometrin ska vara exakt – infallsvinkel lika med reflektionsvinkel i båda träffpunkterna. Avstånden 50 cm och 50 cm utsatta]
        { id: 'bild-b3', typ: 'figur', namn: 'ljus', lage: 'spegelbild-steg', bildtext: 'Båda strålarna följer reflektionslagen. Förlängda bakåt möts de 50 cm bakom spegeln, där du ser blomman.' },
        { typ: 'text', text: 'Man kan konstruera var spegelbilden hamnar med hjälp av reflektionslagen. Det visar sig att bilden alltid ser ut att finnas lika långt bakom spegeln som föremålet står framför den. Står du en meter från badrumsspegeln ser du dig själv två meter bort. Bilden är lika stor som föremålet och står rättvänd.' },
        { typ: 'rubrik', text: 'Spegelbilden är spegelvänd' },
        { typ: 'text', text: 'Lyfter du höger hand lyfter din spegelbild handen på samma sida som din. Men om du tänker dig att spegelbilden är en person som står vänd mot dig, är det hennes vänstra hand. Text på din tröja blir baklänges i spegeln. Det kallas att spegelbilden är *spegelvänd*. Många tror att spegeln byter plats på höger och vänster. Men det som står till höger hos dig står till höger i spegeln också. Det spegeln vänder på är fram och bak: din näsa pekar mot spegeln, och spegelbildens näsa pekar mot dig. Därför står ordet AMBULANS spegelvänt på framsidan av en ambulans. Den som kör bilen framför ser ambulansen i backspegeln, och där blir texten rättvänd igen.' },
        { typ: 'rubrik', text: 'Fönstret blir en spegel på kvällen' },
        { typ: 'text', text: 'En fönsterruta reflekterar bara några procent av ljuset och släpper igenom resten. På dagen kommer det mycket mer ljus utifrån än det ljus från rummet som rutan reflekterar. Det svaga reflekterade ljuset drunknar, och du ser ut genom fönstret. På kvällen, när det är mörkt ute och tänt inne, är det tvärtom. Nu kommer det nästan inget ljus utifrån, och det reflekterade ljuset från rummet syns tydligt. Fönstret har inte ändrat sig, det är ljuset på de två sidorna som har bytt plats.' },
        // [BILD B4: fönstret dag och kväll sida vid sida, strukturfigur: vänster dag – tjocka strålar utifrån går in genom rutan, en tunn stråle från en lampa inne reflekteras i rutan · höger kväll – inga strålar utifrån, samma tunna reflekterade stråle från lampan inne når ögat. Namn: dag – du ser ut, kväll – du ser rummet]
        { id: 'bild-b4', typ: 'figur', namn: 'ljus', lage: 'fonster', bildtext: 'Rutan reflekterar lite ljus hela tiden. På dagen överröstas det av ljuset utifrån, på kvällen ser du rummet.' }
      ]
    },
    {
      id: 'reflexen', titel: 'Reflexen skickar ljuset tillbaka',
      block: [
        { typ: 'rubrik', text: 'En reflex fungerar som speglar i ett hörn' },
        { typ: 'text', text: 'En vanlig spegel skickar ljuset från en bils lyktor vidare åt ett annat håll, och föraren ser ingenting. En reflex är byggd så att ljuset kommer tillbaka mot den som lyser. Tittar du noga på en cykelreflex ser du att den består av många små hörn. Varje hörn har tre små ytor som står vinkelrätt mot varandra, som hörnet i en låda. Ljuset som kommer in i hörnet studsar mot ytorna, en efter en, och går sedan ut tillbaka åt precis det håll det kom ifrån. Bilden visar en förenklad modell sedd från sidan, där man bara ser två av ytorna.' },
        // [BILD B5: reflexens hörn som förenklad tvådimensionell modell, sedd från sidan med två ytor i rät vinkel (bildtexten säger att en riktig reflex har tre ytor), i numrerade steg: 1 ljus från en billykta går in i hörnet · 2 strålen reflekteras mot den första ytan · 3 strålen reflekteras mot den andra ytan · 4 strålen går ut parallellt med den inkommande strålen, tillbaka mot bilen. Normalerna streckade i varje träffpunkt]
        { id: 'bild-b5', typ: 'figur', namn: 'ljus', lage: 'reflex', bildtext: 'Efter två reflektioner går ljuset tillbaka parallellt med det som kom in. En riktig reflex har tre ytor; här visas två.' },
        { typ: 'text', text: 'Det spelar nästan ingen roll hur reflexen lutar. Ljuset kommer ändå tillbaka mot bilen. Därför syns en fotgängare med reflex på över hundra meters avstånd i halvljus, men en person i mörka kläder bara på några tiotals meter. Reflexer i vägskyltar och på reflexvästar fungerar på samma sätt, eller med små glaskulor som skickar tillbaka ljuset.' }
      ]
    },
    {
      id: 'buktiga-speglar', titel: 'Buktiga speglar',
      block: [
        { typ: 'rubrik', text: 'Konkav buktar inåt, konvex buktar utåt' },
        { typ: 'text', text: 'Alla speglar är inte plana. En spegel som buktar inåt, som insidan av en sked, kallas *konkav*. En spegel som buktar utåt, som baksidan av en sked, kallas *konvex*. Ett sätt att komma ihåg det: kupa handen. Handflatan är konkav, handryggen är konvex. Reflektionslagen gäller fortfarande för varje stråle, men eftersom ytan lutar olika mycket på olika ställen blir normalerna olika, och strålarna studsar åt olika håll.' },
        { typ: 'rubrik', text: 'En konkav spegel samlar ljuset i brännpunkten' },
        { typ: 'text', text: 'När parallella ljusstrålar träffar en konkav spegel reflekteras de så att de samlas i stort sett i en punkt framför spegeln. Punkten kallas *brännpunkt* eller *fokus*. Avståndet från spegeln till brännpunkten kallas *brännvidd*. Riktar man en konkav spegel mot solen samlas solljuset i brännpunkten, och där kan det bli så varmt att man kan koka vatten. Det används i solugnar. Parabolantenner fungerar på samma sätt, men med radiovågor från satelliter i stället för synligt ljus. Mottagaren sitter i antennens brännpunkt.' },
        // [BILD B6: konkav och konvex spegel sida vid sida, strukturfigur. Vänster: fem parallella strålar mot en konkav spegel (parabolisk form, strålarna följer reflektionslagen mot den verkliga ytan), reflekteras och möts i brännpunkten F framför spegeln, brännvidden markerad · höger: fem parallella strålar mot en konvex spegel, reflekteras utåt, de reflekterade strålarna förlängs streckat bakom spegeln och ser ut att komma från en tänkt brännpunkt F där. Namn: konkav spegel, konvex spegel, brännpunkt, brännvidd]
        { id: 'bild-b6', typ: 'figur', namn: 'ljus', lage: 'buktiga-speglar', bildtext: 'En konkav spegel samlar parallella strålar i brännpunkten. Från en konvex spegel ser strålarna ut att komma från en brännpunkt bakom spegeln.' },
        { typ: 'text', text: 'Det fungerar också åt andra hållet. Om man sätter en lampa i brännpunkten reflekteras ljuset så att det går ut nästan parallellt. Så är en ficklampa och en strålkastare byggd. Ljuset sprids då inte ut i rummet utan går som en stark ljuskägla åt ett håll.' },
        // [BILD B7: strålkastaren i numrerade steg: 1 en lampa sitter i den konkava spegelns brännpunkt · 2 ljuset från lampan går åt alla håll mot spegeln · 3 varje stråle reflekteras enligt reflektionslagen · 4 de reflekterade strålarna går ut nästan parallellt framåt som en smal ljuskägla]
        { id: 'bild-b7', typ: 'figur', namn: 'ljus', lage: 'stralkastare', bildtext: 'Med lampan i brännpunkten går det reflekterade ljuset ut nästan parallellt.' },
        { typ: 'text', text: 'En konkav spegel kan också förstora. Håller du en sminkspegel eller rakspegel nära ansiktet ser du ditt ansikte förstorat och rättvänt. Håller du den långt bort ser du dig själv upp och ned och mindre. Prova med insidan av en blank sked.' },
        { typ: 'rubrik', text: 'En konvex spegel sprider ljuset' },
        { typ: 'text', text: 'När parallella strålar träffar en konvex spegel reflekteras de så att de sprids ut. De ser ut att komma från en punkt bakom spegeln. I en konvex spegel ser allt mindre ut, men du ser mycket mer av omgivningen än i en lika stor plan spegel. Därför sitter konvexa speglar i skymda korsningar och utfarter, i butiker där personalen vill se hela lokalen, och som sidospeglar på bilar. Eftersom allt ser mindre ut verkar det också vara längre bort än det är. Därför står det på vissa backspeglar att föremålen är närmare än de ser ut.' },
        // [BILD B8: konvex vägspegel i en skymd korsning, sedd uppifrån: en bil står vid utfarten, en spegel på andra sidan vägen. Strålar från en cyklist som kommer bakom ett hus träffar den konvexa spegeln och reflekteras mot föraren. Strukturfigur med namn: konvex spegel, skymd väg]
        { id: 'bild-b8', typ: 'figur', namn: 'ljus', lage: 'vagspegel', bildtext: 'Den konvexa spegeln visar en stor del av vägen, så att föraren ser cyklisten bakom huset.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Reflektionslagen: infallsvinkeln är alltid lika stor som reflektionsvinkeln. Båda mäts mot normalen, en tänkt linje vinkelrätt mot ytan.',
          'En slät yta reflekterar parallella strålar parallellt och ger en spegelbild. En skrovlig yta sprider ljuset åt alla håll, och därför ser vi föremål från alla håll.',
          'Spegelbilden ser ut att finnas lika långt bakom spegeln som föremålet står framför den. Den är spegelvänd.',
          'Ett fönster blir en spegel på kvällen, när ljuset inne är starkare än ljuset ute.',
          'En reflex skickar tillbaka ljuset mot den som lyser, eftersom ljuset studsar mot ytor som står vinkelrätt mot varandra.',
          'En konkav spegel samlar parallella strålar i brännpunkten. En lampa i brännpunkten ger parallellt ljus, som i en ficklampa.',
          'En konvex spegel sprider ljuset och ger en mindre bild av en större del av omgivningen.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
