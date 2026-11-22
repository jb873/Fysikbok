/* Avsnittssida I. Vad ljud är, text C: Ljudets hastighet – nivån fordjupning (📕).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-C-Ljudets-hastighet-alla-nivaer-v4.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ic.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Två egenskaper som drar åt olika håll' },
        { typ: 'text', text: 'I Standard såg du att styvheten gör ljudet snabbare och att hög densitet gör det långsammare. Här får du se varför, och hur dragkampen mellan dem avgörs i olika ämnen. Du får också se hur temperaturen påverkar ljudet, och hur havet har ett lager där ljud kan färdas tusentals kilometer.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur styvhet och densitet tillsammans bestämmer ljudets hastighet',
          'hur mycket temperaturen ändrar ljudets hastighet i luft',
          'vad ljudkanalen i havet är'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'styvhet-och-densitet', titel: 'Styvhet och densitet',
      block: [
        { typ: 'rubrik', text: 'Styvheten skyndar på, trögheten bromsar' },
        { typ: 'text', text: 'När en ljudvåg ska ta sig fram måste varje liten del av ämnet först tryckas ihop av grannen bakom och sedan själv sätta fart på grannen framför. Två egenskaper hos ämnet påverkar hur snabbt det går.' },
        { typ: 'text', text: 'Den första är *styvheten|styvhet*: hur stor kraft det krävs för att trycka ihop ämnet. Ju styvare ämnet är, desto större kraft knuffar på nästa del, och desto snabbare förs knuffen vidare. Styvheten gör ljudet snabbare.' },
        { typ: 'text', text: 'Den andra är *densiteten|densitet*: hur mycket massa varje liten del har. Ett föremål med stor massa har stor *tröghet*: det är svårare att sätta i rörelse. Tröghet läser du mer om i kapitlet Kraft och rörelse. En del av ämnet som har stor massa svarar därför långsammare på knuffen. Hög densitet gör ljudet långsammare.' },
        { typ: 'text', text: 'Ljudets hastighet blir alltså en dragkamp mellan styvheten och densiteten. Bly har hög densitet men låg styvhet, och båda drar mot ett långsamt ljud. Aluminium har låg densitet men hög styvhet, och båda drar mot ett snabbt ljud. Stål är ungefär tre gånger så tätt som aluminium men också ungefär tre gånger så styvt, och därför går ljudet ungefär lika fort i båda.' },
        { typ: 'rubrik', text: 'Därför går ljudet fortare i vatten än i luft' },
        { typ: 'text', text: 'Vatten har ungefär 800 gånger högre densitet än luft. Det borde göra ljudet mycket långsammare. Men vatten är också ungefär 15 000 gånger styvare än luft, eftersom det är så svårt att trycka ihop. Styvheten vinner dragkampen stort, och därför går ljudet över fyra gånger så fort i vatten.' }
      ]
    },
    {
      id: 'temperaturen', titel: 'Temperaturen',
      block: [
        { typ: 'rubrik', text: 'Ljudet blir 0,6 m/s snabbare för varje grad' },
        { typ: 'text', text: 'I en gas beror ljudets hastighet nästan bara på temperaturen. Vid 0 °C går ljudet ungefär 331 m/s, och för varje grad varmare ökar hastigheten med ungefär 0,6 m/s.' },
        { typ: 'formel', uttryck: 'v ≈ 331 + 0,6 · T', forklaring: 'v ljudets hastighet i luft (m/s), T temperaturen (°C)' },
        { typ: 'exempel', rubrik: 'Sommar och vinter', stycken: [
          ['Hur fort går ljudet en sommardag med 25 °C och en vinterdag med −20 °C?'],
          ['Givet: T = 25 °C respektive −20 °C. Sökt: hastigheten v.'],
          ['Lösning:',
           'v ≈ 331 + 0,6 · 25 = 331 + 15 = 346 m/s',
           'v ≈ 331 + 0,6 · (−20) = 331 − 12 = 319 m/s',
           'Svar: Ungefär 346 m/s på sommaren och 319 m/s på vintern.']
        ] },
        { typ: 'text', text: 'Det förklarar varför ljudets hastighet är lägre högt uppe i atmosfären, där det är mycket kallt. På tio kilometers höjd, där trafikflygplanen flyger, är det ofta runt −50 °C, och där går ljudet bara omkring 300 m/s.' }
      ]
    },
    {
      id: 'ljudkanalen-i-havet', titel: 'Ljudkanalen i havet',
      block: [
        { typ: 'rubrik', text: 'Ljud böjer av mot det långsammaste lagret' },
        { typ: 'text', text: 'I havet ändras ljudets hastighet med djupet. Nära ytan är vattnet varmt, och ljudet går fortare. Längre ned blir vattnet kallare, och ljudet går långsammare. Ännu längre ned ökar trycket så mycket att ljudet går fortare igen. Någonstans däremellan, ofta på ungefär 1 000 meters djup, finns ett lager där ljudet går som långsammast.' },
        { typ: 'text', text: 'När ljud går snett mellan lager med olika hastighet böjer det av mot det lager där det går långsammast. Ljud som skickas ut i det långsammaste lagret och går snett uppåt böjs därför tillbaka nedåt, och ljud som går snett nedåt böjs tillbaka uppåt. Ljudet fångas i lagret, ungefär som ljus i en glasfiber, och kan färdas tusentals kilometer. Lagret kallas ljudkanalen. Forskare tror att valar använder den för att höras över hela havsbassänger, och militären har använt den för att lyssna efter ubåtar.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljudets hastighet bestäms av en dragkamp: styvheten gör ljudet snabbare, densiteten (trögheten) gör det långsammare.',
          'Bly är tätt och mjukt, därför är ljudet långsamt. Aluminium är lätt och styvt, därför är ljudet snabbt.',
          'Vatten är 800 gånger tätare än luft, men 15 000 gånger styvare. Därför vinner styvheten.',
          'I luft gäller ungefär v ≈ 331 + 0,6 · T. Ljudet är långsammare i kall luft.',
          'I havet finns en ljudkanal där ljudet fångas och kan färdas tusentals kilometer.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
