/* Avsnittssida III. Ljusets väg, text A: Ljus och seende – nivån enkel (📗).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-A-Ljus-och-seende-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiia.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Utan ljus ser du ingenting' },
        { typ: 'text', text: 'Tänk dig att strömmen går en mörk kväll. Plötsligt är det kolsvart i rummet. Bordet står kvar. Väggarna finns kvar. Dina händer finns kvar. Men du ser dem inte.' },
        { typ: 'text', text: 'Sedan tänder du en ficklampa. Då ser du bordet och väggarna igen. Det låter självklart, men det visar en viktig sak. För att du ska se något måste det komma ljus från det och in i dina ögon. Utan ljus kan ögat inte se något alls.' },
        { typ: 'text', text: 'Läran om ljus kallas *optik*. I den här texten får du veta hur det går till när du ser något. Du får också veta vad som händer när ljus träffar olika saker, och varför det blir skuggor.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad en *ljuskälla* är, och att de flesta saker inte lyser själva',
          'hur det går till när du ser något, steg för steg',
          'att ljus kan *absorberas|absorbera*, *reflekteras|reflektera* eller gå igenom en sak',
          'varför det blir skuggor, och hur en hålkamera fungerar',
          'hur snabbt ljuset är, jämfört med ljudet'
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
        { typ: 'text', text: 'Solen lyser. En lampa lyser. En låga på ett stearinljus lyser. Skärmen på din mobil lyser. Allt det här skickar ut eget ljus. En sak som skickar ut eget ljus kallas en *ljuskälla*.' },
        { typ: 'text', text: 'De flesta saker omkring dig är inte ljuskällor. En bok lyser inte. Ett träd lyser inte. Ditt ansikte lyser inte. Ändå kan du se dem. Det beror på att ljus från en ljuskälla träffar dem.' },
        { typ: 'text', text: 'Månen är inte heller en ljuskälla, fast den kan se ut att lysa starkt på natten. Månen lyser inte själv. Det är solens ljus som träffar månen och studsar tillbaka mot jorden. Det ljuset ser vi.' },
        { typ: 'rubrik', text: 'Ljuset går från saken in i ögat' },
        { typ: 'text', text: 'Tänk dig att du sitter vid ett bord i ett mörkt rum. Du tänder en lampa. Nu ser du en tallrik på bordet. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Lampan skickar ut ljus åt alla håll.',
          'En del av ljuset träffar tallriken.',
          'Ljuset studsar från tallriken åt många håll. En liten del av ljuset kommer in i dina ögon.',
          'Längst bak i ögat finns *näthinnan|näthinna*. Där blir det en bild av tallriken.',
          'Näthinnan skickar signaler genom synnerven till hjärnan.',
          'Hjärnan tolkar signalerna. Nu upplever du att du ser en tallrik.'
        ] },
        // [BILD A1: hur vi ser, i numrerade steg: 1 lampan skickar ut ljus åt alla håll (några strålar ritade) · 2 en stråle träffar tallriken på bordet · 3 ljuset studsar från tallriken åt flera håll, en stråle går mot ögat · 4 ljuset kommer in i ögat och träffar näthinnan · 5 signalen går genom synnerven till hjärnan. Ljusstrålar #c2410c med pilar i ljusets riktning. Inga strålar ut ur ögat]
        { id: 'bild-a1', typ: 'figur', namn: 'ljus', lage: 'se-tallrik', bildtext: 'Du ser tallriken när ljus från lampan studsar på den och når ditt öga.' },
        { typ: 'text', text: 'Allt du ser fungerar på samma sätt. Ibland kommer ljuset direkt från en ljuskälla, till exempel när du tittar på en lampa. Oftast har ljuset först träffat en sak och sedan studsat in i ditt öga. När du är ute är det solen som är ljuskällan. Det gäller även en grå dag när det är molnigt. Då sprids solens ljus genom molnen.' },
        { typ: 'rubrik', text: 'Många tror att ögonen skickar ut något' },
        { typ: 'text', text: 'För länge sedan trodde många att ögonen skickade ut osynliga strålar. De trodde att strålarna gick ut från ögat och "kände på" det man tittade på. Det trodde man i över tusen år.' },
        { typ: 'text', text: 'Vi har kvar den tanken i språket. Vi säger att någon "kastar en blick" på något. Det låter som om blicken flyger iväg från ögat.' },
        { typ: 'text', text: 'Men tänk efter. Om ögonen själva skickade ut det som behövs för att se, då skulle du se lika bra i ett helt mörkt rum. Det gör du inte. Du ser ingenting i mörker.' },
        { typ: 'text', text: 'För ungefär tusen år sedan levde en forskare i Kairo som hette Ibn al-Haytham. Han gjorde noggranna försök med ljus. Han visade att det är tvärtom. Ljuset går från sakerna in i ögat. Ögat tar emot ljus. Det skickar inte ut något.' },
        { typ: 'rubrik', text: 'Själva ljusstrålen syns inte från sidan' },
        { typ: 'text', text: 'Prova att lysa med en ficklampa i ett rent rum. Du ser en ljus fläck på väggen där ljuset träffar. Men själva strålen, mellan lampan och väggen, ser du knappt alls.' },
        { typ: 'text', text: 'Varför då? Ljuset i strålen går rakt fram mot väggen. Det går inte mot dina ögon. Och du ser bara ljus som kommer in i dina ögon.' },
        { typ: 'text', text: 'Men om det finns damm, rök eller dimma i luften blir det annorlunda. Då träffar ljuset de små partiklarna. En del av ljuset studsar åt sidan, och en del av det kommer in i dina ögon. Då ser du strålen. Därför kan du se solstrålar som ljusa strimmor genom ett dammigt fönster. Därför ser du strålkastarnas ljus en dimmig kväll. Och därför släpper man ut rök på konserter, så att publiken ser laserstrålarna.' },
        { typ: 'text', text: 'Tänk dig en mus och en tjuv i ett mörkt rum. En ficklampa ligger på bordet och lyser mot musen.' },
        { typ: 'punkter', punkter: [
          'Musen ser lampan. Ljuset från lampan går rakt in i musens ögon.',
          'Tjuven står vid sidan av strålen. Han ser musen, för ljus som har träffat musen studsar mot hans ögon.',
          'Men tjuven ser inte själva strålen mellan lampan och musen. Inget ljus från strålen går åt hans håll.'
        ] },
        // [BILD A2: musen och tjuven i ett mörkt rum, sedd från sidan: en ficklampa på bordet lyser mot en mus vid väggen. 1 musen ser lampan, eftersom ljus från lampan går rakt in i musens ögon · 2 tjuven, som står vid sidan av strålen, ser musen, eftersom ljus som har träffat musen studsar mot tjuvens ögon · 3 tjuven ser inte strålen mellan lampan och musen, eftersom inget ljus från strålen går åt hans håll. Alla ljusstrålar ritas heldragna #c2410c som modellstrålar, även strålen mellan lampan och musen – ljuset finns där. Det som skiljer är vart strålarna går: från strålen mellan lampan och musen går ingen stråle mot tjuvens öga. Bildtexten säger att strålarna är ritade som modell och att man i verkligheten bara ser det ljus som når ögat]
        { id: 'bild-a2', typ: 'figur', namn: 'ljus', lage: 'mus-tjuv', bildtext: 'Strålarna är ritade som modell. I verkligheten ser man bara det ljus som når ögat, så tjuven ser musen men inte strålen.' },
        { typ: 'text', text: 'Det här förklarar också varför rymden är svart. Solens ljus går hela tiden genom rymden. Men där finns nästan inga partiklar som kan skicka ljuset åt sidan. Därför ser astronauterna solen som en bländande skiva mot en svart himmel.' }
      ]
    },
    {
      id: 'ljus-moter-foremal', titel: 'Ljus som träffar en sak',
      block: [
        { typ: 'rubrik', text: 'Tre saker kan hända med ljuset' },
        { typ: 'text', text: 'När ljus träffar en sak kan tre olika saker hända.' },
        { typ: 'text', text: 'Ljuset kan *absorberas|absorbera*. Det betyder att saken tar upp ljuset. Då blir ljusets energi oftast till värme. Det är därför en svart bil blir varm i solen.' },
        { typ: 'text', text: 'Ljuset kan *reflekteras|reflektera*. Det betyder att ljuset studsar tillbaka från saken.' },
        { typ: 'text', text: 'Ljuset kan gå igenom saken. En sak som släpper igenom ljus så att du kan se igenom den kallas *genomskinlig*. Ett annat ord för det är *transparent*. Luft, vatten och glas är transparenta.' },
        // [BILD A3: tre ytor sida vid sida, samma inkommande ljus mot varje: 1 mörk yta – ljuset absorberas, små värmevågor ovanför ytan · 2 ljus matt yta – ljuset reflekteras åt många håll · 3 glasskiva – ljuset går igenom och fortsätter på andra sidan. Strukturfigur med namn: absorberas, reflekteras, går igenom]
        { id: 'bild-a3', typ: 'figur', namn: 'ljus', lage: 'tre-ytor', bildtext: 'Ljus som träffar något kan absorberas, reflekteras eller gå igenom.' },
        { typ: 'text', text: 'Ofta händer flera saker på samma gång. En röd tröja reflekterar en del av ljuset och absorberar resten. Ett fönster släpper igenom det mesta av ljuset, men reflekterar lite.' },
        { typ: 'text', text: 'Det finns också saker som är ett mellanting. Frostat glas i ett badrumsfönster och smörpapper släpper igenom ljus. Men de sprider ljuset åt alla håll. Därför blir det ljust bakom dem, men du kan inte se igenom.' },
        { typ: 'text', text: 'En sak som inte släpper igenom något ljus alls kallas *ogenomskinlig*. En vägg och en bok är ogenomskinliga.' },
        { typ: 'rubrik', text: 'Det du ser är ljuset som studsar' },
        { typ: 'text', text: 'En sak som inte lyser själv kan du bara se tack vare ljuset som den reflekterar. En vit vägg reflekterar nästan allt ljus som träffar den. Därför ser den ljus ut. En svart yta absorberar nästan allt ljus. Den reflekterar bara lite. Därför ser den mörk ut.' },
        { typ: 'text', text: 'Det här är viktigt i trafiken. En mörk kväll är det svårt att se en mattsvart bil eller en person i mörka kläder. Det kommer så lite ljus från dem att ögat knappt märker dem. En reflex fungerar tvärtom. Den skickar tillbaka mycket av ljuset från bilens lyktor mot föraren. Därför syns du mycket bättre med reflex. Hur en reflex fungerar läser du om i texten om reflektion och speglar.' },
        { typ: 'rubrik', text: 'Luft och rent glas är svåra att se' },
        { typ: 'text', text: 'Luften omkring dig ser du inte alls. Den släpper igenom nästan allt ljus och reflekterar nästan inget. Därför kommer det inget ljus från luften som ögat kan se som en yta.' },
        { typ: 'text', text: 'En ren glasruta släpper också igenom det mesta av ljuset. Men en glasyta reflekterar alltid lite ljus. Därför kan du ibland se glaset. Om rutan är smutsig syns den tydligt. Det är smutsen som reflekterar ljuset. Fåglar flyger ibland in i stora fönster. De har inte sett glaset, bara det som finns bakom.' }
      ]
    },
    {
      id: 'rakt-fram', titel: 'Ljus går rakt fram',
      block: [
        { typ: 'rubrik', text: 'Därför blir det skuggor' },
        { typ: 'text', text: 'Ljus går i raka linjer. Det svänger inte runt hörn. Det fortsätter rakt fram tills det träffar något, eller tills det går in i ett annat ämne.' },
        { typ: 'text', text: 'Tänk dig att ljus från en lampa träffar en boll. Bollen är ogenomskinlig. Ljuset kan inte gå igenom den. Ljuset kan inte heller böja sig runt den. Bakom bollen blir det därför ett område dit ljuset inte når. Det området är bollens *skugga*.' },
        { typ: 'text', text: 'Skuggan får samma kontur som saken har när man ser den från lampan. Det beror också på att ljuset går rakt. Om du vrider saken eller flyttar lampan ändras skuggan. På kvällen när solen står lågt blir skuggorna långa och utdragna, eftersom ljuset faller snett mot marken.' },
        { typ: 'text', text: 'I fysiken ritar man ljusets väg som raka linjer med en pil på. De kallas *ljusstrålar|ljusstråle*. Pilen visar åt vilket håll ljuset går.' },
        { typ: 'rubrik', text: 'Skarpa och suddiga skuggor' },
        { typ: 'text', text: 'Ibland har skuggor skarpa kanter. Ibland har de suddiga kanter. Det beror på hur stor ljuskällan är.' },
        { typ: 'text', text: 'En liten ljuskälla ger skarpa skuggor. Det kan till exempel vara en liten lysdiod. Allt ljus kommer då från nästan samma punkt. En plats bakom saken får antingen ljus eller inget ljus alls. Därför blir kanten skarp.' },
        { typ: 'text', text: 'Solen är egentligen enorm, men den är så långt bort att den ser liten ut på himlen. Därför ger solen också ganska skarpa skuggor en klar dag. Men om du tittar noga ser du att kanten är lite suddig.' },
        { typ: 'text', text: 'En stor ljuskälla ger skuggor med suddiga kanter. Det kan vara en lampa med matt glas, eller en lång lysrörslampa i taket. Då kommer ljuset från många olika punkter på lampan. Så här blir det:' },
        { typ: 'punkter', punkter: [
          'Mitt bakom saken når inget ljus fram alls. Där blir det helt mörkt. Det kallas *helskugga*.',
          'I kanten av skuggan når ljus från en del av lampan fram. Ljuset från resten av lampan skyms av saken.',
          'Där blir det inte helt mörkt, utan grått. Det kallas *halvskugga*.'
        ] },
        { typ: 'text', text: 'En mulen dag är hela himlen som en enda stor lampa. Ljuset kommer från alla håll. Därför blir skuggorna så svaga att du knappt ser dem.' },
        // [BILD A4: skarp och suddig skugga sida vid sida, sedd från sidan. Vänster: liten lampa, en boll och en vägg – två raka strålar från lampan förbi bollens kanter, en mörk skugga med skarpa kanter på väggen. Höger: stor matt lampa, samma boll och vägg – strålar från lampans övre och nedre kant förbi bollens kanter, mitten helskugga, kanterna halvskugga. Strukturfigur med namn: helskugga, halvskugga]
        { id: 'bild-a4', typ: 'figur', namn: 'ljus', lage: 'skuggor', bildtext: 'En liten lampa ger en skarp skugga. En stor lampa ger en helskugga i mitten och halvskugga runt om.' },
        { typ: 'rubrik', text: 'Skuggans storlek beror på avståndet' },
        { typ: 'text', text: 'Du har kanske gjort skuggfigurer med händerna på väggen. Då har du märkt att skuggan ändrar storlek.' },
        { typ: 'text', text: 'Håller du handen nära lampan blir skuggan stor. Håller du handen nära väggen blir skuggan ungefär lika stor som handen.' },
        { typ: 'text', text: 'Det beror på de raka strålarna. Strålarna från en liten lampa sprider ut sig, som en kon. När handen är nära lampan har strålarna förbi handens kanter lång väg kvar till väggen. De hinner sprida ut sig mycket. Därför blir skuggan stor. När handen är nära väggen hinner strålarna nästan inte sprida sig alls. Därför blir skuggan liten.' },
        { typ: 'rubrik', text: 'Hålkameran gör en bild upp och ned' },
        { typ: 'text', text: 'Att ljus går rakt fram kan också göra en bild. Det kan du prova själv. Du behöver en låda, något att göra ett litet hål med och lite smörpapper. Så här gör du:' },
        { typ: 'punkter', punkter: [
          'Gör ett litet hål mitt på ena sidan av lådan.',
          'Ta bort den motsatta sidan och sätt smörpapper där i stället.',
          'Gå in i ett mörkt rum och rikta hålet mot ett ljust fönster eller en lampa.',
          'Titta på papperet. Där syns en svag bild av det som finns utanför. Men bilden är upp och ned.'
        ] },
        { typ: 'text', text: 'En sådan låda kallas en *hålkamera*. På latin heter den camera obscura. Det betyder "mörkt rum". Det är därifrån ordet kamera kommer.' },
        { typ: 'text', text: 'Varför blir bilden upp och ned? Trädet utanför lyser inte själv. Solljuset träffar trädet och studsar åt många håll från varje del av det. Men bara det ljus som går precis genom det lilla hålet kommer in i lådan.' },
        { typ: 'punkter', punkter: [
          'Ljuset från toppen av trädet går snett nedåt genom hålet. Det hamnar längst ned på papperet.',
          'Ljuset från trädets fot går snett uppåt genom hålet. Det hamnar högst upp på papperet.',
          'Strålarna korsar varandra i hålet. Därför blir bilden upp och ned.'
        ] },
        // [BILD A5: hålkameran i numrerade steg: 1 solljus träffar ett träd utanför lådan och reflekteras från trädets topp och fot · 2 strålen från toppen går snett nedåt genom det lilla hålet · 3 strålen från foten går snett uppåt genom samma hål · 4 strålarna korsar varandra i hålet · 5 på papperet längst bak syns en upp och nedvänd bild av trädet]
        { id: 'bild-a5', typ: 'figur', namn: 'ljus', lage: 'halkamera', bildtext: 'Strålarna från trädets topp och fot korsar varandra i hålet, så bilden blir upp och ned.' },
        { typ: 'text', text: 'Av samma skäl blir bilden också vänd åt sidan. Det som är till vänster ute hamnar till höger på papperet.' },
        { typ: 'text', text: 'Om du gör hålet större blir bilden ljusare. Men den blir också suddigare. Då kommer ljus från samma punkt på trädet in genom olika delar av hålet. Ljuset hamnar då på lite olika ställen på papperet. Ett litet hål ger en skarp men mörk bild. Ett stort hål ger en ljus men suddig bild. I texten om linser får du se hur man löser det. Med en lins i hålet blir bilden både ljus och skarp. Så fungerar kameran i din mobil.' }
      ]
    },
    {
      id: 'ljusets-hastighet', titel: 'Ljusets hastighet',
      block: [
        { typ: 'rubrik', text: 'Inget går fortare än ljuset' },
        { typ: 'text', text: 'Ljus färdas otroligt snabbt. Det går nästan 300 000 kilometer på en enda sekund. Det gäller i luft och i vakuum, alltså tomrum utan några partiklar.' },
        { typ: 'text', text: 'Det är svårt att föreställa sig hur fort det är. Jorden är ungefär 40 000 kilometer runt. På en sekund skulle ljuset hinna åka sju och ett halvt varv runt jorden.' },
        { typ: 'text', text: 'Ljuset från månen når oss efter drygt en sekund. Ljuset från solen tar ungefär 8 minuter. När du tittar på en solnedgång ser du alltså solen som den såg ut för 8 minuter sedan.' },
        { typ: 'text', text: 'Ingenting kan färdas fortare än ljuset i vakuum.' },
        { typ: 'formel', uttryck: 'ljusets hastighet i vakuum c ≈ 300 000 km/s = 300 000 000 m/s' },
        { typ: 'rubrik', text: 'Ljuset går långsammare i vatten och glas' },
        { typ: 'text', text: 'I vatten och glas går ljuset lite långsammare än i luft. Men det går fortfarande väldigt fort. I vatten går ljuset ungefär 225 000 kilometer på en sekund. I glas går det ungefär 200 000 kilometer på en sekund.' },
        { typ: 'text', text: 'Att ljuset byter hastighet när det går in i ett annat ämne är viktigt. Det får ljuset att ändra riktning. Det läser du om i texten om ljusets brytning.' },
        { typ: 'rubrik', text: 'Ljus och ljud är helt olika snabba' },
        { typ: 'text', text: 'Du vet redan en del om ljud. Jämför ljud och ljus:' },
        { typ: 'punkter', punkter: [
          'Ljud behöver ett ämne att färdas i. Ljud kan inte gå genom vakuum alls. Ljus går allra fortast i vakuum.',
          'Ljud går fortare i vatten än i luft. Ljus går långsammare i vatten än i luft.',
          'I luft går ljud ungefär 340 meter på en sekund. Ljus går nästan 300 000 kilometer på en sekund. Ljuset är alltså nästan en miljon gånger snabbare.'
        ] },
        // [BILD A6: tabell, strukturfigur. Kolumner: ämne · ljusets hastighet · ljudets hastighet. Rader: vakuum – ca 300 000 km/s – går inte · luft – nästan 300 000 km/s – ca 340 m/s · vatten – ca 225 000 km/s – ca 1 500 m/s. Samma tabellstil som tidigare tabeller i kapitel 2]
        { id: 'bild-a6', typ: 'tabell', rubriker: ['Ämne', 'Ljusets hastighet', 'Ljudets hastighet'], rader: [['Vakuum', 'ca 300 000 km/s', 'går inte'], ['Luft', 'nästan 300 000 km/s', 'ca 340 m/s'], ['Vatten', 'ca 225 000 km/s', 'ca 1 500 m/s']] },
        { typ: 'text', text: 'Därför ser du blixten innan du hör åskan. Ljuset från blixten når dig nästan i samma ögonblick som blixten slår ned. Ljudet tar ungefär 3 sekunder för varje kilometer.' },
        { typ: 'text', text: 'Du kan märka samma sak på en stor idrottsplats. Om du sitter långt bort ser du en spelare sparka till bollen. En liten stund senare hör du smällen. Ljuset kom fram direkt. Ljudet behövde lite tid.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En ljuskälla skickar ut eget ljus. Solen och lampor är ljuskällor.',
          'De flesta saker lyser inte själva. Månen lyser inte heller själv. Vi ser dem för att de reflekterar ljus.',
          'Du ser en sak när ljus från den kommer in i ditt öga. Ögat skickar inte ut något.',
          'En ljusstråle syns inte från sidan. Men om det finns damm, rök eller dimma ser du den.',
          'När ljus träffar en sak kan det absorberas, reflekteras eller gå igenom.',
          'Ljus går rakt fram. Därför blir det skuggor.',
          'En liten ljuskälla ger skarpa skuggor. En stor ljuskälla ger helskugga och halvskugga.',
          'I en hålkamera blir bilden upp och ned, eftersom strålarna korsar varandra i hålet.',
          'Ljus går nästan 300 000 km på en sekund. Det är nästan en miljon gånger snabbare än ljud i luft.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
