/* Avsnittssida II. Ljud omkring oss, text B: Resonans och instrument – nivån fordjupning (📕).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-B-Resonans-och-instrument-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iib.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Resonans på gott och ont' },
        { typ: 'text', text: 'I Standard såg du hur resonans och medsvängning gör musik starkare. Här ser du vad som händer med energin när ljudet förstärks, varför två försök med samma flaska ger motsatta resultat, och hur resonans kan bli farlig när det gäller broar och byggnader.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'varför en förstärkt ton tystnar fortare',
          'varför en flaska med mer vatten ger ljusare ton när man blåser men mörkare när man knackar',
          'hur resonans kan skada broar och glas, och hur ingenjörer förhindrar det'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'energin', titel: 'Energin',
      block: [
        { typ: 'rubrik', text: 'Starkare, men kortare' },
        { typ: 'text', text: 'Slå an en stämgaffel och håll den i luften. Den låter svagt, men länge, kanske en halv minut. Slå an den lika hårt och ställ den mot bordet. Nu låter den mycket starkare, men tystnar efter bara några sekunder. Det följer av energiprincipen. Stämgaffeln får en bestämd mängd energi när du slår an den. I luften sprids energin långsamt som ljud. Mot bordet förs energin över till bordsskivan och sprids snabbt som ljud. Bordet skapar ingen ny energi, det gör bara att energin lämnar stämgaffeln fortare. Därför blir ljudet starkare men kortare. Samma sak gäller en gitarr: resonanslådan gör inte tonen gratis starkare, den tar energin från strängens svängning snabbare.' }
      ]
    },
    {
      id: 'flaskorna', titel: 'Flaskorna',
      block: [
        { typ: 'rubrik', text: 'Blås och knacka ger motsatt resultat' },
        { typ: 'text', text: 'Ställ upp några likadana glasflaskor med olika mycket vatten. Blåser du över öppningarna är det luften i flaskan som svänger. Mer vatten ger mindre luft och ljusare ton. Men knackar du på flaskorna med en sked är det glaset och vattnet som svänger. Vattnet följer med i svängningen och gör flaskan tyngre att sätta i rörelse, och då svänger den långsammare. Mer vatten ger nu en mörkare ton. Samma flaskor, samma vatten, men tvärtom resultat. Det visar att man alltid måste fråga sig vad det är som svänger.' }
      ]
    },
    {
      id: 'broar-och-glas', titel: 'Broar och glas',
      block: [
        { typ: 'rubrik', text: 'Soldater bryter takten på broar' },
        { typ: 'text', text: 'En bro har också egenfrekvenser. Om många människor går i takt över en bro och takten råkar ligga nära brons egenfrekvens, kan bron börja svänga allt kraftigare, precis som gungan. Därför har det länge varit en regel att soldater som marscherar ska gå ur takt när de går över en bro. År 2000 öppnades en gångbro över Themsen i London som började svaja i sidled redan första dagen. Människorna på bron började omedvetet gå i takt med svajet och gjorde det ännu större. Bron fick stängas och byggas om med dämpare, som tar upp svängningsenergin.' },
        { typ: 'rubrik', text: 'Tacomabron och glaset' },
        { typ: 'text', text: 'En berömd film från 1940 visar hur bron över Tacoma Narrows i USA vrider sig allt våldsammare i vinden innan den rasar. Den används ofta som exempel på resonans. Men i dag förklarar forskare kollapsen på ett annat sätt. Vinden blåste inte i takt med brons svängning. I stället skapade bron själv virvlar i vinden när den vred sig, och virvlarna förstärkte vridningen. Det kallas fladder. Det liknar resonans, eftersom svängningarna byggs upp, men det är ändå något annat.' },
        { typ: 'text', text: 'Ett mer rent exempel på resonans är glaset som spricker av en ton. Om en sångare eller en högtalare ger en mycket stark ton precis på ett vinglas egenfrekvens, kan glaset svänga så kraftigt att det spricker. Det har gjorts, men det är svårt: tonen måste träffa egenfrekvensen exakt och vara mycket stark, och glaset måste vara tunt och utan skador.' },
        // [BILD B5: ett vinglas i numrerade steg: 1 en ton med glasets egenfrekvens når glaset · 2 glasets kant börjar svänga · 3 svängningen växer för varje våg · 4 utslaget blir så stort att glaset spricker. Glasets kant ritad som en ring som deformeras mer och mer]
        { id: 'bild-b5', typ: 'figur', namn: 'ljud', lage: 'vinglas', bildtext: 'Varje våg med glasets egenfrekvens gör svängningen större, tills glaset spricker.' },
        { typ: 'rubrik', text: 'Ingenjörer bygger bort resonansen' },
        { typ: 'text', text: 'Höga hus, broar och maskiner konstrueras så att deras egenfrekvenser inte ligger nära de svängningar de kan utsättas för, från vind, trafik, människor eller jordbävningar. Dessutom används dämpare som tar upp svängningsenergin. I en del skyskrapor hänger en enorm tyngd högt upp i huset som svänger emot byggnadens rörelser och lugnar dem.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En resonanslåda skapar ingen energi. Den gör att energin lämnar strängen eller stämgaffeln fortare, så att ljudet blir starkare men kortare.',
          'Blåser man i en flaska svänger luften i den: mer vatten ger mindre luft och ljusare ton. Knackar man på flaskan svänger glas och vatten: mer vatten ger mörkare ton.',
          'Broar och byggnader har egenfrekvenser. Svängningar i rätt takt kan bygga upp farliga rörelser, därför bryter soldater takten.',
          'Tacomabron rasade av fladder, som liknar resonans men inte är samma sak.',
          'Ingenjörer undviker resonans med rätt konstruktion och med dämpare.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
