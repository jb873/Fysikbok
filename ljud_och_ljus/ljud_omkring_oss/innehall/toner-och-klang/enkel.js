/* Avsnittssida II. Ljud omkring oss, text A: Toner och klang – nivån enkel (📗).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-A-Toner-och-klang-alla-nivaer-v3.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iia.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Högt och starkt är inte samma sak' },
        { typ: 'text', text: '"Prata högre, jag hör inte!" Det har du säkert hört någon säga. Men i fysiken betyder ett högt ljud inte samma sak som det man brukar mena.' },
        { typ: 'text', text: 'Ett ljud kan vara ljust eller mörkt. Ett ljud kan också vara starkt eller svagt. Det är två helt olika saker. I den här texten får du veta vad som bestämmer var och en av dem. Du får också veta varför en gitarrsträng kan ge olika toner, och varför ett piano och en gitarr inte låter likadant fast de spelar samma ton.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att *tonhöjd* beror på frekvensen',
          'att *ljudstyrka* beror på amplituden',
          'vad som bestämmer vilken ton en sträng ger',
          'vad *övertoner|överton* och *klang* är',
          'skillnaden mellan en ren ton, en klang och *brus*'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tonhojd', titel: 'Frekvensen bestämmer tonhöjden',
      block: [
        { typ: 'rubrik', text: 'Snabba svängningar ger en ljus ton' },
        { typ: 'text', text: 'Ett ljud där vi hör en bestämd tonhöjd kallas en *ton*. Hur ljus eller mörk en ton låter kallas *tonhöjd*.' },
        { typ: 'text', text: 'Det är frekvensen som bestämmer tonhöjden. Om något svänger många gånger varje sekund blir tonen hög och ljus. Om det svänger färre gånger blir tonen låg och mörk.' },
        { typ: 'text', text: 'En flöjt, en fågel och ett litet barn har ljusa toner. En kontrabas, en mistlur och en brummande björn har mörka toner.' },
        // [BILD A1: två vågkurvor ovanför varandra med samma amplitud och tid på den vågräta axeln. Överst hög ton: många svängningar tätt. Underst låg ton: få svängningar glest. Namn: "hög ton – hög frekvens" och "låg ton – låg frekvens"]
        { id: 'bild-a1', typ: 'figur', namn: 'ljud', lage: 'tonhojd-tid', bildtext: 'Med samma amplitud har den höga tonen fler svängningar per sekund än den låga.' },
        { typ: 'text', text: 'Prova själv. Lägg fingrarna mot halsen. Sjung först en ljus ton och sedan en mörk ton. När du sjunger den ljusa tonen svänger stämbanden snabbare. Det känns som ett fint surr under fingrarna. När du sjunger den mörka tonen svänger de långsammare.' },
        { typ: 'rubrik', text: 'Därför låter rösten olika' },
        { typ: 'text', text: 'När en vuxen man pratar svänger stämbanden ungefär 100–120 gånger varje sekund. Hos en vuxen kvinna svänger de ungefär dubbelt så många gånger. Hos barn svänger de ännu snabbare.' },
        { typ: 'text', text: 'Det beror på hur stora stämbanden är. Långa och tjocka stämband svänger långsammare. Korta och tunna stämband svänger snabbare.' },
        { typ: 'text', text: 'När man kommer i puberteten växer struphuvudet. Stämbanden blir längre och tjockare, särskilt hos killar. Så här kan det gå till:' },
        { typ: 'punkter', punkter: [
          'Stämbanden växer.',
          'De svänger långsammare, och rösten blir mörkare.',
          'Under tiden kan rösten spricka och hoppa mellan ljust och mörkt.',
          'Till sist är rösten mörkare än förut, ibland mycket mörkare.'
        ] },
        { typ: 'text', text: 'Det kallas *målbrott*.' }
      ]
    },
    {
      id: 'ljudstyrka', titel: 'Amplituden bestämmer ljudstyrkan',
      block: [
        { typ: 'rubrik', text: 'Samma ton kan vara stark eller svag' },
        { typ: 'text', text: 'Hur starkt ett ljud är kallas *ljudstyrka*. Det är amplituden som bestämmer ljudstyrkan. Amplituden är hur stora tryckändringarna i luften är.' },
        { typ: 'text', text: 'Tänk på ett piano. När du trycker ned en tangent slår en liten hammare inne i pianot mot en sträng. Om du trycker hårt slår hammaren hårt, och strängen svänger kraftigt. Då blir tonen stark. Om du trycker lätt på samma tangent svänger strängen lite. Då blir tonen svag. Men det är samma tangent och samma ton. Frekvensen är densamma. Det är bara amplituden som ändras.' },
        // [BILD A2: två vågkurvor ovanför varandra med samma frekvens och tid på den vågräta axeln. Överst stark ton: höga toppar. Underst svag ton: låga toppar. Topparna står rakt ovanför varandra, så att det syns att svängningarna är lika täta. Namn: "stark ton – stor amplitud" och "svag ton – liten amplitud"]
        { id: 'bild-a2', typ: 'figur', namn: 'ljud', lage: 'styrka-tid', bildtext: 'Samma frekvens men olika amplitud: den starka tonen har större tryckändringar.' },
        { typ: 'rubrik', text: '"Prata högre" betyder egentligen något annat' },
        { typ: 'text', text: 'Många tror att ett högt ljud är samma sak som ett starkt ljud. Vi säger "prata högre" när vi menar att någon ska prata starkare. Men i fysiken handlar högt och lågt om tonhöjden, alltså om ljudet är ljust eller mörkt.' },
        { typ: 'text', text: 'Tänk om någon följde uppmaningen "prata högre" helt bokstavligt. Då skulle personen börja prata med ljusare röst. Men det är inte det man menar. Man menar "prata starkare".' },
        { typ: 'text', text: 'Tonhöjd och styrka är alltså två olika saker. Man kan prata med ljus röst och samtidigt tyst. Man kan också prata med mörk röst och samtidigt starkt.' },
        { typ: 'text', text: 'I fysiken skiljer man noga på det här:' },
        { typ: 'punkter', punkter: [
          'Hög eller låg handlar om tonhöjd. Det bestäms av frekvensen.',
          'Stark eller svag handlar om ljudstyrka. Det bestäms av amplituden.'
        ] },
        { typ: 'text', text: 'Hur man mäter ljudstyrka får du läsa om i texten om ljudnivå och hälsa.' }
      ]
    },
    {
      id: 'strangen', titel: 'Strängens längd, tjocklek och spänning',
      block: [
        { typ: 'rubrik', text: 'En kortare sträng ger en ljusare ton' },
        { typ: 'text', text: 'Tänk dig en gitarr. Så här kan du ändra tonen:' },
        { typ: 'punkter', punkter: [
          'Knäpp på en sträng så att hela strängen svänger. Du hör en mörk ton.',
          'Tryck ned strängen med ett finger vid det tolfte bandet. Det är mitt på strängen.',
          'Knäpp igen. Nu kan bara den kortare delen av strängen svänga.',
          'Den korta delen svänger snabbare. Tonen blir ljusare.'
        ] },
        // [BILD A3: en gitarrhals sedd från sidan två gånger. Överst: hela strängen svänger mellan stallet och sadeln, lång svängande del, "låg ton". Underst: ett finger trycker ned strängen vid tolfte bandet (mitt på), bara halva strängen svänger – delen mellan det nedtryckta bandet och stallet (inte delen mot sadeln), "högre ton". Den svängande delen markerad med en båge]
        { id: 'bild-a3', typ: 'figur', namn: 'ljud', lage: 'gitarrhals', bildtext: 'Halva strängen svänger dubbelt så fort, och tonen blir ljusare.' },
        { typ: 'text', text: 'Det är så man spelar olika toner på en gitarr, en fiol eller en cello. Fingrarna gör den del av strängen som svänger kortare eller längre.' },
        { typ: 'text', text: 'I ett piano finns det en egen sträng för varje ton. De långa strängarna ger de mörka tonerna. De korta strängarna ger de ljusa tonerna.' },
        { typ: 'rubrik', text: 'Tjockleken och spänningen spelar också roll' },
        { typ: 'text', text: 'Det finns två saker till som bestämmer tonen.' },
        { typ: 'text', text: 'Den första är hur tjock strängen är. En tjock sträng är tyngre och svänger långsammare än en tunn. Därför har en gitarr strängar som är olika tjocka. En bas har ännu tjockare strängar än en gitarr.' },
        { typ: 'text', text: 'Den andra är hur hårt strängen är spänd. Ju hårdare den är spänd, desto snabbare svänger den. Då blir tonen ljusare. När man *stämmer|stämma* en gitarr vrider man på skruvarna längst upp på halsen. Då spänns strängen hårdare eller lösare, tills den ger precis rätt ton.' },
        { typ: 'text', text: 'Kom ihåg det så här:' },
        { typ: 'punkter', punkter: [
          'En kort, tunn och hårt spänd sträng ger en ljus ton.',
          'En lång, tjock och löst spänd sträng ger en mörk ton.'
        ] },
        { typ: 'rubrik', text: 'Alla stämmer efter samma ton' },
        { typ: 'text', text: 'I en orkester måste alla instrument vara stämda efter samma ton. Annars låter det fel när de spelar tillsammans. Därför har man bestämt att tonen A ska ha frekvensen 440 Hz. Den tonen kallas *normaltonen|normalton*.' },
        { typ: 'text', text: 'Man kan stämma ett instrument med en stämgaffel som ger just den tonen. I dag använder många i stället en stämapp i mobilen. Appen lyssnar på strängen och visar om tonen är för ljus eller för mörk.' }
      ]
    },
    {
      id: 'klang', titel: 'Övertoner ger klang',
      block: [
        { typ: 'rubrik', text: 'Samma ton låter olika på olika instrument' },
        { typ: 'text', text: 'Spela tonen A på ett piano. Spela sedan samma A på en gitarr och en flöjt. Frekvensen är densamma, men du hör ändå skillnad. Varför?' },
        { typ: 'text', text: 'Det beror på att en ton från ett instrument nästan aldrig bara är en enda frekvens. Det finns en *grundton*. Den bestämmer vilken ton det är. Men samtidigt hörs flera svagare toner med högre frekvens. De kallas *övertoner|överton*.' },
        { typ: 'text', text: 'Varje instrument har sin egen blandning av övertoner. Den påverkar instrumentets *klang*. Klangen är det särskilda sättet ett instrument låter på. Även hur tonen börjar och hur den klingar av påverkar klangen. En pianoton börjar med ett slag och tonar sedan bort. En flöjtton kan låta lika länge som man blåser. Det är klangen som gör att du hör skillnad på en fiol och en trumpet. Det är också klangen som gör att du känner igen en kompis röst i telefonen innan hen har sagt sitt namn.' },
        { typ: 'rubrik', text: 'Ren ton, klang och brus' },
        { typ: 'text', text: 'Det finns tre sorters ljud att hålla isär.' },
        { typ: 'text', text: 'En *ren ton* har bara en enda frekvens. En stämgaffel ger nästan en ren ton. På ett oscilloskop ser den ut som en mjuk, jämn våg.' },
        { typ: 'text', text: 'En ton från ett instrument eller en röst har övertoner. Den kallas en klang. Kurvan upprepar sig fortfarande på samma sätt hela tiden, men formen är mer krokig.' },
        { typ: 'text', text: '*Brus|brus* är ljud där väldigt många frekvenser blandas utan något mönster. Brus har ingen tydlig ton. Det låter som suset från en dusch, ett vattenfall eller en radio som inte hittar någon kanal. Kurvan för brus är helt oregelbunden.' },
        // [BILD A4: tre vågkurvor ovanför varandra med tid på den vågräta axeln. Överst ren ton (stämgaffel): en jämn, mjuk våg. I mitten klang (fiol): en våg med samma upprepningstakt men taggigare form. Underst brus (dusch): en helt oregelbunden kurva utan mönster. Namn: "ren ton", "klang", "brus"]
        { id: 'bild-a4', typ: 'figur', namn: 'ljud', lage: 'klang-tid', bildtext: 'En ren ton, en klang med övertoner och brus utan mönster.' },
        { typ: 'rubrik', text: 'Brus och buller är inte samma sak' },
        { typ: 'text', text: 'Brus är ett ord från fysiken. Det beskriver hur ljudet är uppbyggt. *Buller|buller* är något annat. Buller är ljud som stör och som man inte vill höra. Det kan vara brus, men det kan också vara toner. Om grannen spelar trumpet mitt i natten är det buller, fast det är toner.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tonhöjden bestäms av frekvensen. Hög frekvens ger en ljus ton. Låg frekvens ger en mörk ton.',
          'Ljudstyrkan bestäms av amplituden. Samma ton kan vara stark eller svag.',
          'I fysiken betyder "högt" ljust, inte starkt. Man borde säga "prata starkare", inte "prata högre".',
          'En kort, tunn och hårt spänd sträng ger en ljus ton. En lång, tjock och löst spänd sträng ger en mörk ton.',
          'Normaltonen A har frekvensen 440 Hz.',
          'En ton från ett instrument har en grundton och övertoner. Övertonerna, och hur tonen börjar och slutar, ger instrumentets klang.',
          'En ren ton har bara en frekvens. Brus är många frekvenser blandade utan mönster.',
          'Buller är ljud som stör.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
