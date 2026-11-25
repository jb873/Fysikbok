/* Avsnittssida III. Ljusets väg, text D: Linser och bilder – nivån fordjupning (📕).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-D-Linser-och-bilder-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiid: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiid.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Att räkna med linser' },
        { typ: 'text', text: 'I Standard ritade du strålar för att se var bilden hamnar. Här får du räkna i stället. Du får lära dig hur optiker anger styrkan på en lins, varför det talet ofta missförstås, och hur man räknar ut exakt var en bild hamnar och hur stor den blir. Till sist får du se varför billiga linser kan ge färgade kanter.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad en *dioptri* är och hur den hänger ihop med brännvidden',
          'vad som händer när två linser sitter tätt ihop',
          'hur man använder *linsformeln*',
          'vad *färgfel* är'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'dioptri', titel: 'Dioptri',
      block: [
        { typ: 'rubrik', text: 'Styrkan är ett genom brännvidden' },
        { typ: 'text', text: 'En lins med kort brännvidd bryter ljuset mycket, alltså är den stark. Därför anger optiker en lins styrka som ett genom brännvidden, mätt i meter. Enheten kallas *dioptri* och skrivs D. Konvexa linser får plustecken och konkava minustecken.' },
        { typ: 'formel', uttryck: 'D = 1 / f', forklaring: 'D linsens styrka (dioptri), f brännvidden (m)' },
        { typ: 'exempel', rubrik: 'Brännvidden för ett par läsglasögon', stycken: [
          ['Ett par läsglasögon har styrkan +2,0 D. Vilken brännvidd har linserna?'],
          ['Givet: D = 2,0 dioptrier. Sökt: brännvidden f.'],
          ['Lösning:',
           'f = 1 / D = 1 / 2,0 = 0,5 m',
           'Svar: Brännvidden är 0,5 m, alltså 50 cm. Linserna är konvexa.']
        ] },
        { typ: 'rubrik', text: 'Många tror att talet är brännvidden i centimeter' },
        { typ: 'text', text: 'Det står ofta ett tal på linser, och linsens styrka står på glasögonrecept, till exempel −2,5 eller +12. Många tror att talet är brännvidden i centimeter, och flera läroböcker skriver så. Men talet är styrkan i dioptrier. En lins märkt +12 har brännvidden 1/12 m, ungefär 8 cm, inte 12 cm. Och en +2-lins är svagare och har längre brännvidd än en +15-lins, inte tvärtom.' },
        { typ: 'rubrik', text: 'Linser tätt ihop adderas' },
        { typ: 'text', text: 'Sitter två tunna linser tätt intill varandra kan man, med god noggrannhet, lägga ihop deras dioptrier. Det är därför optiker använder dioptrier och inte brännvidder. Hos en optiker får du pröva glasögon med en ram där man sätter in olika linser framför varandra. En lins på +1,5 D och en på +0,5 D tillsammans blir +2,0 D. En konvex och en lika stark konkav lins tar ut varandra och blir 0 D, som vanligt fönsterglas.' }
      ]
    },
    {
      id: 'linsformeln', titel: 'Linsformeln',
      block: [
        { typ: 'rubrik', text: 'Var hamnar bilden?' },
        { typ: 'text', text: 'Om man vet linsens brännvidd och hur långt bort föremålet står kan man räkna ut var bilden hamnar. Avståndet från linsen till föremålet kallas a och avståndet från linsen till bilden kallas b. Formeln gäller för en tunn lins, en bra modell för de flesta enkla linser.' },
        { typ: 'formel', uttryck: '1/a + 1/b = 1/f', forklaring: 'a avståndet från linsen till föremålet, b avståndet från linsen till bilden, f brännvidden, alla i samma enhet' },
        { typ: 'text', text: 'Förhållandet mellan avstånden avgör också hur stor bilden blir. Om b är dubbelt så stort som a blir bilden dubbelt så stor som föremålet.' },
        // [BILD D8: linsformelns avstånd, strukturfigur: ett ljus till vänster om en konvex lins, en upp och nedvänd bild till höger, de två strålarna från Standard ritade. Under axeln: a från ljuset till linsen, b från linsen till bilden, f från linsen till F]
        { id: 'bild-d8', typ: 'figur', namn: 'ljus', lage: 'linsformel', bildtext: 'Räkneexemplet i skala: a = 15 cm, b = 30 cm och f = 10 cm. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'exempel', rubrik: 'Bilden från en projektorlins', stycken: [
          ['En konvex lins har brännvidden 10 cm. Ett starkt upplyst föremål står 15 cm från linsen. Var hamnar bilden, och hur stor blir den?'],
          ['Givet: f = 10 cm, a = 15 cm. Sökt: avståndet b och förstoringen.'],
          ['Lösning:',
           '1/b = 1/f − 1/a = 1/10 − 1/15 = 3/30 − 2/30 = 1/30',
           'b = 30 cm',
           'Förstoring = b / a = 30 cm / 15 cm = 2',
           'Svar: Bilden hamnar 30 cm bakom linsen och blir dubbelt så stor som föremålet, upp och ned.']
        ] },
        { typ: 'text', text: 'Prova själv vad som händer om föremålet står exakt 20 cm bort, alltså två brännvidder. Då blir b också 20 cm och bilden lika stor som föremålet. Det är gränsen mellan kamerafallet och projektorfallet från Standard.' }
      ]
    },
    {
      id: 'fargfel', titel: 'Färgfel',
      block: [
        { typ: 'rubrik', text: 'Färgerna har olika brännpunkt' },
        { typ: 'text', text: 'Vitt ljus är en blandning av alla färger, och olika färger bryts lite olika mycket i glas. Blått ljus bryts mer än rött. En enkel lins har därför en brännpunkt för blått ljus som ligger lite närmare linsen än brännpunkten för rött. När den blå delen av bilden är skarp är den röda lite suddig, och tvärtom. Det syns som färgade kanter runt ljusa föremål, och det kallas *färgfel*.' },
        { typ: 'text', text: 'Kameraobjektiv och bra kikare har därför flera linser av olika glassorter, som är sammansatta så att färgfelen tar ut varandra. Ett mobilobjektiv kan innehålla fem eller sex linser, fast det bara är några millimeter tjockt. Varför olika färger bryts olika mycket får du veta i texten om färger.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En lins styrka anges i dioptrier: D = 1/f, med brännvidden i meter. Konvexa linser har plus, konkava minus.',
          'Linsens styrka på en lins eller ett glasögonrecept anges i dioptrier, inte som brännvidd i cm. +12 betyder ungefär 8 cm.',
          'Dioptrierna för linser som sitter tätt ihop läggs ihop.',
          'Linsformeln 1/a + 1/b = 1/f ger avståndet till bilden. Förstoringen är b/a.',
          'Olika färger bryts olika mycket. Därför har en enkel lins färgfel, som rättas med flera linser av olika glas.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
