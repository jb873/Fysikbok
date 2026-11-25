/* Avsnittssida III. Ljusets väg, text A: Ljus och seende – nivån standard (📘).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-A-Ljus-och-seende-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiia.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Utan ljus ser du ingenting' },
        { typ: 'text', text: 'Om strömmen går en mörk kväll försvinner rummet omkring dig. Bordet, väggarna och dina egna händer finns kvar, men du ser dem inte längre. Tänder du en ficklampa kommer de tillbaka. Det verkar självklart, men det säger något viktigt: för att du ska se något måste det komma ljus från det till dina ögon. Läran om ljus kallas *optik*, och i den här texten får du veta hur seendet går till, vad som händer när ljus träffar olika föremål och varför ljuset ger skuggor.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'skillnaden mellan *ljuskällor|ljuskälla* och föremål som inte lyser själva',
          'hur du ser saker, steg för steg',
          'att ljus kan *absorberas|absorbera*, *reflekteras|reflektera* eller gå igenom ett föremål',
          'varför ljus ger skuggor, och hur en hålkamera fungerar',
          'hur snabbt ljuset färdas, jämfört med ljudet'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'hur-vi-ser', titel: 'Hur vi ser',
      block: [
        { typ: 'rubrik', text: 'En ljuskälla skickar ut eget ljus' },
        { typ: 'text', text: 'Solen, en lampa, en stearinljuslåga och skärmen på din mobil skickar ut eget ljus. Sådant som skickar ut eget ljus kallas en *ljuskälla*. Det mesta omkring oss är inte ljuskällor. En bok, ett träd eller ditt ansikte lyser inte av sig självt. Månen är inte heller en ljuskälla, fast den kan lysa starkt på natten. Det ljus vi ser från månen är solljus som har träffat månen och kommit tillbaka mot jorden.' },
        { typ: 'rubrik', text: 'Ljuset går från föremålet in i ögat' },
        { typ: 'text', text: 'Tänk dig att du sitter vid ett bord i ett mörkt rum och tänder en lampa. Lampan skickar ut ljus åt alla håll. En del av ljuset träffar en tallrik på bordet. Från tallriken studsar ljuset vidare åt många håll, och en liten del av det kommer in i dina ögon. Längst bak i ögat finns *näthinnan|näthinna*, och där bildas en bild av tallriken. Näthinnan skickar signaler genom synnerven till hjärnan, och det är hjärnan som tolkar signalerna så att du upplever att du ser en tallrik.' },
        // [BILD A1: hur vi ser, i numrerade steg: 1 lampan skickar ut ljus åt alla håll (några strålar ritade) · 2 en stråle träffar tallriken på bordet · 3 ljuset studsar från tallriken åt flera håll, en stråle går mot ögat · 4 ljuset kommer in i ögat och träffar näthinnan · 5 signalen går genom synnerven till hjärnan. Ljusstrålar #c2410c med pilar i ljusets riktning. Inga strålar ut ur ögat]
        { id: 'bild-a1', typ: 'figur', namn: 'ljus', lage: 'se-tallrik', bildtext: 'Du ser tallriken när ljus från lampan studsar på den och når ditt öga.' },
        { typ: 'text', text: 'Allt du ser fungerar på samma sätt. Antingen kommer ljuset direkt från en ljuskälla, som när du tittar på en lampa, eller så har det först träffat något och sedan studsat in i ögat. Ute är det solen som är ljuskällan, även en mulen dag när solljuset sprids av molnen.' },
        { typ: 'rubrik', text: 'Många tror att ögonen skickar ut något' },
        { typ: 'text', text: 'I över tusen år trodde många lärda människor att ögonen skickade ut osynliga synstrålar som "kände på" det man tittade på. Spår av den tanken finns kvar i språket, när vi säger att någon "kastar en blick" eller har "en genomträngande blick". Men om ögonen själva skickade ut det som behövs för att se, skulle vi se lika bra i ett kolsvart rum. Det gör vi inte. Redan i antiken fanns det tänkare som trodde att ljuset kommer in i ögat. Men det var forskaren Ibn al-Haytham, som levde i Kairo för omkring tusen år sedan, som med noggranna försök visade att det är så: ljuset går från föremålen in i ögat. Ögat tar emot ljus, det skickar inte ut något.' },
        { typ: 'rubrik', text: 'Själva ljusstrålen syns inte från sidan' },
        { typ: 'text', text: 'Om du lyser med en ficklampa i ett rent rum ser du en ljus fläck där ljuset träffar väggen. Men själva strålen mellan lampan och väggen syns knappt alls. Det beror på att ljuset i strålen går rakt fram, mot väggen och inte mot dina ögon. För att du ska se något måste ljus komma in i ögat. Om det däremot finns damm, rök eller dimma i luften träffar ljuset de små partiklarna, och en del av ljuset studsar åt sidan, rakt in i dina ögon. Då ser du strålen. Det är därför du ser solstrålar som strimmor genom ett dammigt fönster, ljuskäglor från strålkastare en dimmig kväll och laserstrålar på en konsert där man har släppt ut rök.' },
        // [BILD A2: musen och tjuven i ett mörkt rum, sedd från sidan: en ficklampa på bordet lyser mot en mus vid väggen. 1 musen ser lampan, eftersom ljus från lampan går rakt in i musens ögon · 2 tjuven, som står vid sidan av strålen, ser musen, eftersom ljus som har träffat musen studsar mot tjuvens ögon · 3 tjuven ser inte strålen mellan lampan och musen, eftersom inget ljus från strålen går åt hans håll. Alla ljusstrålar ritas heldragna #c2410c som modellstrålar, även strålen mellan lampan och musen – ljuset finns där. Det som skiljer är vart strålarna går: från strålen mellan lampan och musen går ingen stråle mot tjuvens öga. Bildtexten säger att strålarna är ritade som modell och att man i verkligheten bara ser det ljus som når ögat]
        { id: 'bild-a2', typ: 'figur', namn: 'ljus', lage: 'mus-tjuv', bildtext: 'Strålarna är ritade som modell. I verkligheten ser man bara det ljus som når ögat, så tjuven ser musen men inte strålen.' },
        { typ: 'text', text: 'Samma sak förklarar varför rymden är svart, fast solljuset hela tiden strömmar genom den. Där finns nästan inga partiklar som kan skicka ljuset åt sidan. Astronauter ser solen som en bländande skiva mot en svart himmel.' }
      ]
    },
    {
      id: 'ljus-moter-foremal', titel: 'Ljus som träffar ett föremål',
      block: [
        { typ: 'rubrik', text: 'Tre saker kan hända med ljuset' },
        { typ: 'text', text: 'När ljus träffar ett föremål kan tre saker hända. Ljuset kan *absorberas|absorbera*. Det betyder att föremålet tar upp ljuset, och ljusets energi blir oftast värme. Ljuset kan *reflekteras|reflektera*. Det betyder att det studsar tillbaka från föremålet. Ljuset kan också gå igenom föremålet. Ett föremål som släpper igenom ljuset så att man ser igenom det kallas *genomskinligt|genomskinlig*, eller *transparent*. Luft, vatten och glas är transparenta.' },
        // [BILD A3: tre ytor sida vid sida, samma inkommande ljus mot varje: 1 mörk yta – ljuset absorberas, små värmevågor ovanför ytan · 2 ljus matt yta – ljuset reflekteras åt många håll · 3 glasskiva – ljuset går igenom och fortsätter på andra sidan. Strukturfigur med namn: absorberas, reflekteras, går igenom]
        { id: 'bild-a3', typ: 'figur', namn: 'ljus', lage: 'tre-ytor', bildtext: 'Ljus som träffar något kan absorberas, reflekteras eller gå igenom.' },
        { typ: 'text', text: 'Oftast händer flera saker samtidigt. En röd tröja reflekterar en del av ljuset och absorberar resten. En fönsterruta släpper igenom det mesta av ljuset men reflekterar lite. Frostat glas och smörpapper är ett mellanting. De släpper igenom ljus, men sprider det åt alla håll så att du inte ser igenom. Ett föremål som varken släpper igenom ljus eller låter dig se igenom det, som en vägg eller en bok, kallas *ogenomskinligt|ogenomskinlig*.' },
        { typ: 'rubrik', text: 'Det vi ser är det reflekterade ljuset' },
        { typ: 'text', text: 'Ett föremål som inte är en ljuskälla ser du bara tack vare ljuset som det reflekterar. En vit vägg reflekterar nästan allt ljus som träffar den och ser därför ljus ut. En svart yta absorberar nästan allt ljus och reflekterar mycket lite. Därför är det svårt att se en mattsvart bil, eller en människa i mörka kläder, en mörk kväll. Det kommer så lite ljus från dem att ögat knappt märker dem. En reflex fungerar tvärtom: den skickar tillbaka mycket av billyktornas ljus mot föraren. Hur det går till läser du om i texten om reflektion och speglar.' },
        { typ: 'rubrik', text: 'Luft och rent glas är svåra att se' },
        { typ: 'text', text: 'Luften omkring dig ser du inte alls. Den släpper igenom nästan allt ljus och reflekterar nästan inget, så den skickar inget ljus som ögat kan uppfatta som en yta. En ren glasruta släpper också igenom det mesta av ljuset. Men en glasyta reflekterar alltid lite ljus, och därför kan man ibland se den. Om rutan är smutsig syns den tydligt. Det är smutsen som reflekterar ljuset. Fåglar som flyger in i stora glasrutor har inte sett glaset, bara det som finns bakom.' }
      ]
    },
    {
      id: 'rakt-fram', titel: 'Ljus går rakt fram',
      block: [
        { typ: 'rubrik', text: 'Därför blir det skuggor' },
        { typ: 'text', text: 'Ljus färdas i raka linjer, så länge det inte träffar något eller går in i ett annat ämne. När ljuset från en lampa träffar ett ogenomskinligt föremål kan ljuset inte böja sig runt föremålet. Bakom föremålet blir det ett område dit ljuset inte når. Det är föremålets *skugga*. Skuggan får formen av föremålets kontur sett från lampan, just för att ljuset går rakt. Därför ändras skuggan när du vrider föremålet eller flyttar lampan. Faller skuggan snett mot marken blir den utdragen, som de långa skuggorna en kväll när solen står lågt. I fysiken ritar man ljusets väg som raka linjer med en pil, *ljusstrålar|ljusstråle*.' },
        { typ: 'rubrik', text: 'Skarpa och suddiga skuggor' },
        { typ: 'text', text: 'En liten ljuskälla, som en liten lysdiod, ger skarpa skuggor. Det beror på att allt ljus kommer från nästan samma punkt. En punkt bakom föremålet får antingen ljus eller inget ljus alls. Solen är egentligen enorm, men den ser liten ut på himlen. Därför ger solen också ganska skarpa skuggor en klar dag, men med en smal halvskugga i kanten.' },
        { typ: 'text', text: 'En stor ljuskälla, som en lampa med matt glas eller en lysrörsarmatur, ger skuggor med suddiga kanter. Då kommer ljuset från många punkter på lampan. Mitt bakom föremålet når inget ljus fram. Det kallas *helskugga*. Men i kanten når ljus från en del av lampan fram, medan resten skyms. Där blir det en grå zon, en *halvskugga*. En mulen dag är hela himlen en stor ljuskälla. Därför blir skuggorna så svaga att du knappt ser dem.' },
        // [BILD A4: skarp och suddig skugga sida vid sida, sedd från sidan. Vänster: liten lampa, en boll och en vägg – två raka strålar från lampan förbi bollens kanter, en mörk skugga med skarpa kanter på väggen. Höger: stor matt lampa, samma boll och vägg – strålar från lampans övre och nedre kant förbi bollens kanter, mitten helskugga, kanterna halvskugga. Strukturfigur med namn: helskugga, halvskugga]
        { id: 'bild-a4', typ: 'figur', namn: 'ljus', lage: 'skuggor', bildtext: 'En liten lampa ger en skarp skugga. En stor lampa ger en helskugga i mitten och halvskugga runt om.' },
        { typ: 'rubrik', text: 'Skuggans storlek beror på avståndet' },
        { typ: 'text', text: 'Du har säkert gjort skuggfigurer med händerna på väggen. Håller du handen nära lampan blir skuggan stor. Håller du den nära väggen blir skuggan nästan lika stor som handen. Förklaringen är de raka strålarna. Strålarna från en liten lampa sprider ut sig. Ju närmare lampan handen är, desto mer hinner strålarna förbi handens kanter sprida sig innan de når väggen, och desto större blir skuggan.' },
        { typ: 'rubrik', text: 'Hålkameran ger en bild upp och ned' },
        { typ: 'text', text: 'Att ljus går rakt fram kan också ge en bild. Ta en låda, gör ett litet hål i ena sidan och sätt smörpapper på den motsatta sidan. Rikta hålet mot ett ljust fönster eller en lampa i ett mörkt rum. På papperet syns då en svag bild av det som finns utanför, men upp och ned. En sådan låda kallas en *hålkamera*. På latin heter den camera obscura, som betyder "mörkt rum", och det är där ordet kamera kommer ifrån.' },
        { typ: 'text', text: 'Trädet lyser inte själv. Solljuset träffar trädet och reflekteras åt många håll från varje del av det. Men bara det ljus som går exakt genom hålet når papperet. Ljuset från trädets topp går snett nedåt genom hålet och hamnar längst ned på papperet. Ljuset från trädets fot går snett uppåt och hamnar högst upp. Strålarna korsar varandra i hålet, och därför blir bilden upp och ned och vänd höger mot vänster.' },
        // [BILD A5: hålkameran i numrerade steg: 1 solljus träffar ett träd utanför lådan och reflekteras från trädets topp och fot · 2 strålen från toppen går snett nedåt genom det lilla hålet · 3 strålen från foten går snett uppåt genom samma hål · 4 strålarna korsar varandra i hålet · 5 på papperet längst bak syns en upp och nedvänd bild av trädet]
        { id: 'bild-a5', typ: 'figur', namn: 'ljus', lage: 'halkamera', bildtext: 'Strålarna från trädets topp och fot korsar varandra i hålet, så bilden blir upp och ned.' },
        { typ: 'text', text: 'Gör man hålet större blir bilden ljusare, men också suddigare. Då kommer ljus från samma punkt på trädet in genom olika delar av hålet och hamnar på olika ställen på papperet. Ett litet hål ger en skarp men mörk bild, ett stort hål en ljus men suddig. I texten om linser får du se hur en lins löser det problemet. Med en lins i hålet blir bilden både ljus och skarp, och så fungerar kameran i din mobil.' }
      ]
    },
    {
      id: 'ljusets-hastighet', titel: 'Ljusets hastighet',
      block: [
        { typ: 'rubrik', text: 'Inget går fortare än ljuset' },
        { typ: 'text', text: 'Ljuset färdas otroligt snabbt, nästan 300 000 kilometer varje sekund i luft och i vakuum. På en sekund skulle ljuset hinna sju och ett halvt varv runt jorden. Ljuset från månen når oss efter drygt en sekund, och ljuset från solen efter ungefär 8 minuter. Ser du på solnedgången ser du alltså solen som den var för 8 minuter sedan. Ingenting kan färdas fortare än ljuset i vakuum.' },
        { typ: 'formel', uttryck: 'ljusets hastighet i vakuum c ≈ 300 000 km/s = 300 000 000 m/s' },
        { typ: 'rubrik', text: 'Ljuset går långsammare i vatten och glas' },
        { typ: 'text', text: 'I vatten och glas går ljuset långsammare än i luft, men fortfarande mycket fort. I vatten är hastigheten ungefär 225 000 km/s och i glas omkring 200 000 km/s. Att ljuset byter hastighet när det går från ett ämne till ett annat får viktiga följder, och dem läser du om i texten om ljusets brytning.' },
        { typ: 'rubrik', text: 'Ljus och ljud är helt olika snabba' },
        { typ: 'text', text: 'Jämför med ljudet. Ljud behöver ett ämne att färdas i och går inte alls genom vakuum. Ljus går allra fortast i vakuum. Ljud går fortare i vatten än i luft, medan ljus går långsammare i vatten än i luft. Och i luft är ljuset nästan en miljon gånger snabbare än ljudet.' },
        // [BILD A6: tabell, strukturfigur. Kolumner: ämne · ljusets hastighet · ljudets hastighet. Rader: vakuum – ca 300 000 km/s – går inte · luft – nästan 300 000 km/s – ca 340 m/s · vatten – ca 225 000 km/s – ca 1 500 m/s. Samma tabellstil som tidigare tabeller i kapitel 2]
        { id: 'bild-a6', typ: 'tabell', rubriker: ['Ämne', 'Ljusets hastighet', 'Ljudets hastighet'], rader: [['Vakuum', 'ca 300 000 km/s', 'går inte'], ['Luft', 'nästan 300 000 km/s', 'ca 340 m/s'], ['Vatten', 'ca 225 000 km/s', 'ca 1 500 m/s']] },
        { typ: 'text', text: 'Därför ser du blixten innan du hör åskan. Ljuset från blixten når dig nästan i samma ögonblick som blixten slår ned, medan ljudet tar ungefär 3 sekunder per kilometer. Det är också därför du ser en fotbollsspelare långt borta sparka bollen en kort stund innan du hör smällen. För ljuset är vägen så kort att det inte märks.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En ljuskälla skickar ut eget ljus. Det mesta vi ser, även månen, lyser inte själv utan reflekterar ljus.',
          'Vi ser ett föremål när ljus från det kommer in i ögat. Ögat skickar inte ut något.',
          'En ljusstråle syns inte från sidan, om inte damm, rök eller dimma skickar en del av ljuset mot ögat.',
          'När ljus träffar ett föremål kan det absorberas, reflekteras eller gå igenom. Transparenta ämnen, som luft, vatten och glas, släpper igenom ljuset.',
          'Ljus går rakt fram. Därför blir det skuggor. En liten ljuskälla ger skarpa skuggor, en stor ljuskälla ger helskugga och halvskugga.',
          'En hålkamera ger en upp och nedvänd bild, eftersom strålarna korsar varandra i hålet.',
          'Ljuset färdas nästan 300 000 km/s i luft och vakuum, långsammare i vatten och glas. I luft är ljuset nästan en miljon gånger snabbare än ljudet.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
