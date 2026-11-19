/* Avsnittssida V. Tryck, arbete och maskiner, text B: Energi och arbete – nivån fordjupning (📕).
 * Arbetsorder 28 (2026-11-19): kallor/kap3/V-B-Energi-och-arbete-alla-nivaer-v3.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vb: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vb.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Energi och arbete i siffror' },
        { typ: 'text', text: 'I Standard såg du att arbete är kraft gånger sträcka och att arbetet blir energi hos föremålet. Med de två idéerna kan man räkna på sådant som annars är svårt att jämföra, till exempel hur mycket energi det krävs att gå uppför en trappa och hur mycket av den energin som finns i en banan. Här räknar du också på vad som händer när kraften drar snett, och varför friktionen alltid tar energi från rörelsen.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur energin i mat anges, och hur kilojoule och kilokalorier hänger ihop',
          'hur mycket arbete kroppen utför i en trappa, och varför kroppen behöver mer energi än så',
          'hur man räknar arbete när kraften drar snett',
          'varför friktionen alltid omvandlar rörelseenergi till värme'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'energi-i-maten', titel: 'Energin i maten',
      block: [
        { typ: 'rubrik', text: 'Kilojoule och kilokalorier' },
        { typ: 'text', text: 'På matförpackningar anges energin både i kilojoule, kJ, och i kilokalorier, kcal. Kalori är en äldre enhet som fortfarande används för mat. 1 kcal är ungefär 4,2 kJ. En banan innehåller ungefär 400 kJ, alltså ungefär 95 kcal.' },
        { typ: 'rubrik', text: 'Trappan kräver mindre arbete än man tror' },
        { typ: 'rader', rader: [
          'En person som väger 60 kg har tyngden ungefär 600 N. Att gå uppför trapporna i ett hus med tre våningar, ungefär 10 meter upp, kräver arbetet',
          'W = F · s = 600 N · 10 m = 6 000 J = 6 kJ.',
          'Det är bara en liten del av energin i en banan.'
        ] },
        { typ: 'rubrik', text: 'Kroppen behöver ändå mycket mer energi' },
        { typ: 'text', text: 'Kroppens muskler kan inte omvandla all kemisk energi till arbete. Ungefär en fjärdedel blir arbete, och resten blir värme. Det är därför du blir varm när du anstränger dig. För att utföra 6 kJ arbete måste kroppen alltså omvandla ungefär 24 kJ kemisk energi. Med en banan på 400 kJ räcker det ändå till ungefär 15 sådana trappturer.' },
        { typ: 'text', text: 'Därtill förbrukar kroppen energi hela tiden, också i vila, för att hålla hjärtat igång, andas och hålla sig varm. En tonåring behöver ungefär 10 000 kJ per dygn. Det mesta av den energin går inte till arbete i fysikens mening, utan blir till slut värme. Hur stor del av energin som blir användbart arbete kallas verkningsgrad. Det kommer du att möta igen i texten om maskiner och effekt.' }
      ]
    },
    {
      id: 'arbete-i-vinkel', titel: 'Arbete när kraften drar snett',
      block: [
        { typ: 'rubrik', text: 'Bara delen längs rörelsen utför arbete' },
        { typ: 'text', text: 'När du drar en kälke drar du oftast snett uppåt i ett rep, medan kälken rör sig rakt fram längs marken. Då är det bara den del av kraften som pekar framåt som utför arbete. Den del som pekar uppåt lyfter lite i kälken men flyttar den inte framåt.' },
        { typ: 'rader', rader: [
          'I avsnittet om resulterande kraft såg du hur en kraft kan delas upp i en del åt sidan och en del uppåt. Samma uppdelning används här. Om repet drar med 100 N i vinkeln 30° mot marken är delen framåt ungefär 87 N. Dras kälken 10 m blir arbetet',
          'W = 87 N · 10 m = 870 J,',
          'inte 1 000 J. Ju brantare du drar, desto mindre blir delen framåt och desto mer av din kraft går åt till att dra uppåt.'
        ] },
        // [BILD B3: kälke som dras med ett snett rep; kraften i repet delad i en del framåt (87 N) och en del uppåt; rörelsen rakt framåt längs marken]
        { id: 'bild-b3', typ: 'figur', namn: 'energi', lage: 'snett', kraft: 100, vinkel: 30, bildtext: 'Repet drar med 100 N snett uppåt. Kälken rör sig rakt fram, så bara delen framåt, ungefär 87 N, utför arbete på kälken.' },
        { typ: 'rubrik', text: 'Friktionen tar alltid energi från rörelsen' },
        { typ: 'text', text: 'En kraft som verkar mot rörelsen utför också ett arbete, men åt andra hållet. Den tar energi från föremålet i stället för att ge det energi. Ett sådant arbete kallas negativt arbete. Friktionen verkar alltid mot rörelsen. Därför tar den alltid rörelseenergi från föremålet och omvandlar den till värme.' },
        { typ: 'text', text: 'Om du skjuter en låda framåt med 200 N över ett golv och friktionen är 200 N bakåt, rör sig lådan med jämn fart. Ditt arbete ger lådan energi, och friktionens arbete tar lika mycket energi från den. Lådan får alltså ingen ny rörelseenergi. Hela ditt arbete blir värme i golvet och lådans undersida. Det är därför händerna blir varma när du gnider dem mot varandra.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Energin i mat anges i kJ och kcal. 1 kcal är ungefär 4,2 kJ.',
          'Att gå 10 m uppför en trappa kräver ungefär 6 kJ arbete för en person på 60 kg.',
          'Musklerna gör ungefär en fjärdedel av den kemiska energin till arbete. Resten blir värme.',
          'Hur stor del av energin som blir användbart arbete kallas verkningsgrad.',
          'När kraften drar snett utför bara delen längs rörelsen något arbete.',
          'Friktionen verkar mot rörelsen och omvandlar alltid rörelseenergi till värme.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
