/* Avsnittssida I. Solsystemet och jorden, text D Dygn, månad, år och årstider – nivån standard. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-Standard-A-D-redigerad.md (# Text D), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats, med figuren efter (steg 3).
 * Joachims tillägg 2026-11-07: rutan "Så bläddrar du" sist i Inledningen och rubriken "Det viktigaste" först i
 * Sammanfattningen, som i III; Inledningens rubrik som i Enkel.
 * Begreppen (*ord*) är markerade som i Enkel och Fördjupning för samma text, första gången de står i den här texten
 * (arbetsorder 9; listan i rapporten, Joachim stryker): dygn, år, skottår, månader (månad), månens faser, nymåne, halvmåne, fullmåne, månförmörkelse, polcirkeln, midnattssol, mörkertid.
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Dygn, månad, år och årstider' },
        { typ: 'text', text: 'Varför blir det natt, varför har vi olika årstider och varför ser månen inte alltid likadan ut? Förklaringarna finns i hur jorden och månen rör sig i förhållande till solen. Genom att förstå dessa rörelser kan vi också förstå hur människan har börjat mäta tiden i *dygn*, *månader|månad* och *år*.' },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'jordens-och-manens-rorelser-hjalper-oss-att-mata-tiden', titel: 'Jordens och månens rörelser hjälper oss att mäta tiden',
      block: [
        { typ: 'rubrik', text: 'Jordens rotation ger oss dygn' },
        { typ: 'text', text: 'Ett dygn är den tid det tar för jorden att rotera ett varv i förhållande till solen, ungefär 24 timmar. Jorden roterar från väster mot öster, vilket gör att solen ser ut att gå upp i öster och ner i väster. Det är alltså jordens rörelse som skapar solens skenbara vandring över himlen.' },
        { typ: 'text', text: 'När en plats på jorden är vänd mot solen är det dag där. Samtidigt är det natt på den motsatta sidan av jorden eftersom den sidan är vänd bort från solen. När jorden fortsätter att rotera växlar platserna mellan ljus och mörker.' },
        { typ: 'text', text: 'En enkel modell är att låta en lampa föreställa solen och en jordglob föreställa jorden. När vi snurrar jordgloben kan vi se hur olika platser växlar mellan den belysta och den mörka sidan. Modellen visar hur dag och natt uppstår, men inte solens verkliga storlek eller avståndet till jorden.' },
        { typ: 'rubrik', text: 'Ett år är ett varv runt solen' },
        { typ: 'text', text: 'Ett år är den tid det tar för jorden att färdas ett varv runt solen. Ett sådant varv tar ungefär 365 dygn och sex timmar, vilket är lite längre än våra vanliga kalenderår. Om vi alltid använde exakt 365 dagar skulle kalendern så småningom hamna alltmer fel i förhållande till årstiderna.' },
        { typ: 'text', text: 'Därför har vi *skottår*, då februari får 29 dagar i stället för 28. Vanligtvis inträffar ett skottår vart fjärde år, men det finns några undantag för att kalendern ska bli mer exakt. Exempelvis är år som slutar på två nollor bara skottår om de är jämnt delbara med 400.' },
        { typ: 'rubrik', text: 'Månen rör sig runt jorden och förändrar sitt utseende' },
        { typ: 'text', text: 'Månen är jordens naturliga satellit och rör sig i en bana runt vår planet. Ett varv i förhållande till stjärnorna tar ungefär 27,3 dygn. Men tiden mellan två fullmånar är ungefär 29,5 dygn eftersom jorden samtidigt hinner förflytta sig i sin bana runt solen.' },
        { typ: 'text', text: 'Månen producerar inte eget ljus, utan reflekterar solljus. Den halva av månens yta som är vänd mot solen är belyst, medan den andra halvan är mörk. När månen rör sig runt jorden ser vi olika stor del av den belysta halvan, vilket skapar *månens faser*.' },
        { typ: 'text', text: 'Vid *nymåne* är den belysta delen nästan helt vänd bort från oss. Vid *halvmåne* ser vi ungefär halva månskivan belyst, och vid *fullmåne* ser vi nästan hela den sida som är vänd mot jorden belyst. Därefter minskar den synliga belysta delen igen, och cykeln upprepas.' },
        { typ: 'text', text: 'Många tror att månens faser beror på att jordens skugga faller över månen. Det stämmer inte, eftersom faserna uppstår när vi ser månens belysta halva från olika vinklar. Jordens skugga faller på månen vid en *månförmörkelse*, vilket är ett annat och betydligt ovanligare fenomen.' },
        // [BILD: Månens åtta faser. En central jord med månen i åtta positioner runt omkring. Solljuset kommer från en tydligt markerad riktning. För varje position visas både vilken halva av månen som belyses och hur månen ser ut från jorden. Bilden ska skilja på månens verkliga belysning och hur vi uppfattar den.]
        { id: 'bild-f', typ: 'figur', namn: 'manfaser', bildtext: 'Inre ringen: solen lyser alltid på den halva av månen som är vänd mot solen. Yttre ringen: så ser månen ut från jorden.' }
      ]
    },
    {
      id: 'jordaxelns-lutning-skapar-arstiderna', titel: 'Jordaxelns lutning skapar årstiderna',
      block: [
        { typ: 'rubrik', text: 'Jordaxeln lutar när jorden rör sig runt solen' },
        { typ: 'text', text: 'Jordaxeln lutar ungefär 23,5 grader jämfört med en linje som står vinkelrätt mot jordens bana runt solen. Under jordens årliga rörelse pekar axeln nästan hela tiden åt samma håll i rymden. Därför kommer norra halvklotet att vara vänt mer mot solen under en del av året och mer bort från solen under en annan del.' },
        { typ: 'text', text: 'När norra halvklotet lutar mot solen får vi sommar i Sverige. Då står solen högre på himlen och dagarna är längre, vilket gör att marken tar emot mer solenergi. När norra halvklotet lutar bort från solen får vi vinter, eftersom solen står lägre och dagarna är kortare.' },
        { typ: 'rubrik', text: 'Solens höjd påverkar hur mycket marken värms upp' },
        { typ: 'text', text: 'När solen står högt på himlen träffar solstrålarna marken mer rakt uppifrån. Då fördelas samma mängd solenergi över en mindre yta, vilket gör att uppvärmningen blir starkare. När solen står lågt sprids energin över en större yta och uppvärmningen blir svagare.' },
        { typ: 'text', text: 'Det kan jämföras med en ficklampa som lyser mot ett bord. Om du riktar lampan rakt ner bildas en mindre och mer koncentrerad ljusfläck. Om du vinklar lampan sprids ljuset över en större yta och blir svagare per kvadratcentimeter. Modellen visar hur solstrålarnas vinkel påverkar uppvärmningen, men tar inte hänsyn till exempelvis moln, vindar och havens värmelagring.' },
        { typ: 'rubrik', text: 'Årstiderna beror inte på avståndet till solen' },
        { typ: 'text', text: 'Många tror att det är sommar när jorden befinner sig nära solen och vinter när den är längre bort. Det stämmer inte, eftersom jorden faktiskt befinner sig närmast solen i början av januari, när vi har vinter i Sverige. Avståndet varierar dessutom ganska lite under året.' },
        { typ: 'text', text: 'Det avgörande är i stället jordaxelns lutning och hur den påverkar solstrålarnas vinkel och dagens längd. När vi har sommar på norra halvklotet är det vinter på södra halvklotet. Om årstiderna främst berodde på avståndet till solen skulle båda halvkloten ha sommar och vinter samtidigt.' },
        // [BILD: Jorden i fyra positioner runt solen med jordaxeln lutad 23,5 grader och pekande åt samma håll i alla positioner. Visa tydligt norra halvklotets sommar och vinter samt hur solljuset träffar jordytan. Avstånden behöver inte vara skalenliga, vilket ska framgå av bildens förklaring.]
        { id: 'bild-a', typ: 'figur', namn: 'arstider', bildtext: 'Jordaxeln lutar åt samma håll hela året. Avstånden och storlekarna är inte skalenliga.' },
        { typ: 'rubrik', text: 'Midnattssol och mörkertid beror på jordaxelns lutning' },
        { typ: 'text', text: 'I norra Sverige varierar dagens längd mycket mellan sommar och vinter. Norr om norra *polcirkeln* finns perioder då solen inte går ner under horisonten, vilket kallas *midnattssol*. Det beror på att norra delen av jorden lutar mot solen så mycket att dessa områden fortsätter att vara belysta under ett helt dygn.' },
        { typ: 'text', text: 'På vintern uppstår det motsatta fenomenet, som kallas polarnatt eller *mörkertid*. Då kan solen under en period vara under horisonten hela dygnet, eftersom norra delen av jorden lutar bort från solen. Det betyder inte att det alltid är fullständigt mörkt, eftersom skymningsljus, månsken och andra ljuskällor kan lysa upp omgivningen.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ett dygn uppstår genom jordens rotation och är ungefär 24 timmar.',
          'Ett år motsvarar jordens varv runt solen och är ungefär 365,25 dygn.',
          'Skottår behövs för att kalendern ska följa jordens rörelse runt solen.',
          'Månens faser uppstår eftersom vi ser olika mycket av månens belysta halva.',
          'Tiden mellan två fullmånar är ungefär 29,5 dygn.',
          'Årstiderna beror på jordaxelns lutning och hur den påverkar solens höjd och dagens längd.'
        ] },
        { typ: 'punkter', punkter: [
          'På sommaren står solen högre och dagarna är längre på norra halvklotet.',
          'Midnattssol och polarnatt uppstår på grund av jordaxelns lutning.',
          'Årstiderna orsakas inte av att avståndet mellan jorden och solen förändras.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
