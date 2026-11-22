/* Avsnittssida II. Ljud omkring oss, text A: Toner och klang – nivån standard (📘).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-A-Toner-och-klang-alla-nivaer-v3.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iia.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Två ord som vardagsspråket blandar ihop' },
        { typ: 'text', text: '"Prata högre, jag hör inte!" Det har du säkert sagt eller hört. Men i fysiken betyder ett högre ljud något annat än det man brukar mena. Ett ljud kan vara ljust eller mörkt, och det kan vara starkt eller svagt. Det är två helt olika egenskaper. I den här texten får du veta vad som bestämmer var och en av dem, varför en gitarrsträng kan ge olika toner och varför ett piano och en gitarr inte låter likadant fast de spelar samma ton.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att *tonhöjd* bestäms av frekvensen',
          'att *ljudstyrka* bestäms av amplituden',
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
        { typ: 'rubrik', text: 'Hög frekvens ger en ljus ton' },
        { typ: 'text', text: 'Ett ljud som vi uppfattar med en bestämd tonhöjd kallas en *ton*. Hur ljus eller mörk tonen låter kallas *tonhöjd*, och den bestäms framför allt av ljudets grundfrekvens, alltså hur många gånger ljudkällan svänger per sekund. Ju fler svängningar per sekund, desto högre och ljusare ton. En flöjt, en fågel eller ett litet barns röst har höga toner. En kontrabas, en mistlur eller en björns brummande har låga.' },
        // [BILD A1: två vågkurvor ovanför varandra med samma amplitud och tid på den vågräta axeln. Överst hög ton: många svängningar tätt. Underst låg ton: få svängningar glest. Namn: "hög ton – hög frekvens" och "låg ton – låg frekvens"]
        { id: 'bild-a1', typ: 'figur', namn: 'ljud', lage: 'tonhojd-tid', bildtext: 'Med samma amplitud har den höga tonen fler svängningar per sekund än den låga.' },
        { typ: 'text', text: 'Lägg fingrarna mot halsen och sjung först en ljus och sedan en mörk ton. Vid den ljusa tonen svänger stämbanden snabbare, och det känns som ett fint surr. Vid den mörka tonen svänger de långsammare.' },
        { typ: 'rubrik', text: 'Röster har olika tonhöjd' },
        { typ: 'text', text: 'När en vuxen man pratar svänger stämbanden ungefär 100–120 gånger per sekund. Hos en vuxen kvinna är det ungefär dubbelt så många, och hos barn ännu fler. Skillnaden beror på stämbandens storlek. Långa och tjocka stämband svänger långsammare än korta och tunna. Under puberteten växer struphuvudet och stämbanden blir längre och tjockare, särskilt hos killar. Då sjunker rösten, ibland nästan en hel oktav, och under tiden kan den spricka och hoppa mellan ljust och mörkt. Det kallas *målbrott*.' }
      ]
    },
    {
      id: 'ljudstyrka', titel: 'Amplituden bestämmer ljudstyrkan',
      block: [
        { typ: 'rubrik', text: 'Samma ton kan vara stark eller svag' },
        { typ: 'text', text: 'Hur starkt ett ljud är kallas *ljudstyrka*, och den bestäms av amplituden, alltså hur stora tryckändringarna är. När du trycker ned en pianotangent slår en liten hammare inne i pianot mot strängen. Ett kraftigt anslag får strängen att svänga kraftigt, och tonen blir stark. Ett lätt anslag ger svagare svängningar och en svag ton. Men det är samma tangent, samma sträng och samma ton. Frekvensen ändras inte, bara amplituden.' },
        // [BILD A2: två vågkurvor ovanför varandra med samma frekvens och tid på den vågräta axeln. Överst stark ton: höga toppar. Underst svag ton: låga toppar. Topparna står rakt ovanför varandra, så att det syns att svängningarna är lika täta. Namn: "stark ton – stor amplitud" och "svag ton – liten amplitud"]
        { id: 'bild-a2', typ: 'figur', namn: 'ljud', lage: 'styrka-tid', bildtext: 'Samma frekvens men olika amplitud: den starka tonen har större tryckändringar.' },
        { typ: 'rubrik', text: 'Många säger "högt" när de menar "starkt"' },
        { typ: 'text', text: 'Många tror att ett högt ljud är detsamma som ett starkt ljud. I vardagen säger vi ofta "prata högre" när vi vill att någon ska prata starkare. Men i fysiken handlar högt och lågt om tonhöjden. Den som tog uppmaningen "prata högre" bokstavligt i fysikens mening skulle börja prata med ljusare röst, inte starkare. En person kan prata med ljus röst och samtidigt svagt, eller med mörk röst och samtidigt starkt. I fysiken skiljer man noga på de två:' },
        { typ: 'punkter', punkter: [
          'hög eller låg handlar om tonhöjd och frekvens',
          'stark eller svag handlar om ljudstyrka och amplitud'
        ] },
        { typ: 'text', text: 'Hur ljudstyrkan mäts, i decibel, läser du om i texten om ljudnivå och hälsa.' }
      ]
    },
    {
      id: 'strangen', titel: 'Strängens längd, tjocklek och spänning',
      block: [
        { typ: 'rubrik', text: 'En kortare sträng ger en ljusare ton' },
        { typ: 'text', text: 'Knäpp på en gitarrsträng så att hela strängen svänger, och du hör en mörk ton. Tryck sedan ned strängen vid det tolfte bandet, mitt på strängen. Nu kan bara halva strängen svänga. Den svänger dubbelt så fort, och tonen blir ljusare. En kortare sträng svänger snabbare och ger en högre frekvens. Det är så man spelar olika toner på en gitarr, en fiol eller en cello: fingrarna gör den svängande delen av strängen kortare eller längre. I ett piano finns i stället en egen sträng för varje ton. De långa strängarna ger de mörka tonerna och de korta de ljusa.' },
        // [BILD A3: en gitarrhals sedd från sidan två gånger. Överst: hela strängen svänger mellan stallet och sadeln, lång svängande del, "låg ton". Underst: ett finger trycker ned strängen vid tolfte bandet (mitt på), bara halva strängen svänger – delen mellan det nedtryckta bandet och stallet (inte delen mot sadeln), "högre ton". Den svängande delen markerad med en båge]
        { id: 'bild-a3', typ: 'figur', namn: 'ljud', lage: 'gitarrhals', bildtext: 'Halva strängen svänger dubbelt så fort, och tonen blir ljusare.' },
        { typ: 'rubrik', text: 'Tjocklek och spänning spelar också roll' },
        { typ: 'text', text: 'Två saker till bestämmer tonen. En tjock och tung sträng svänger långsammare än en tunn och lätt. Därför har en gitarr strängar av olika tjocklek, och basens strängar är tjockare än gitarrens. Dessutom spelar det roll hur hårt strängen är spänd. Ju hårdare den är spänd, desto snabbare svänger den och desto ljusare blir tonen. Det är det man ändrar när man *stämmer|stämma* ett instrument: man vrider på stämskruvarna tills strängen ger precis rätt ton.' },
        { typ: 'text', text: 'Sammanfattat: en kort, tunn och hårt spänd sträng ger en ljus ton, medan en lång, tjock och löst spänd sträng ger en mörk ton.' },
        { typ: 'rubrik', text: 'Normaltonen är 440 Hz' },
        { typ: 'text', text: 'För att alla instrument i en orkester ska låta rätt tillsammans måste de vara stämda efter samma ton. Därför har man bestämt att tonen A, som kallas *normaltonen|normalton*, ska ha frekvensen 440 Hz. En stämgaffel som ger just den tonen används för att stämma pianon och andra instrument. I dag använder många i stället en stämapp i mobilen, som mäter frekvensen och visar om strängen är för ljus eller för mörk.' }
      ]
    },
    {
      id: 'klang', titel: 'Övertoner ger klang',
      block: [
        { typ: 'rubrik', text: 'En ton är nästan aldrig ren' },
        { typ: 'text', text: 'Spela tonen A på ett piano och sedan samma A på en gitarr och en flöjt. Frekvensen är densamma, men du hör ändå skillnad. Det beror på att en ton från ett instrument nästan aldrig består av bara en frekvens. Förutom *grundtonen|grundton*, som bestämmer tonhöjden, innehåller den flera svagare toner med högre frekvens. De kallas *övertoner|överton*. Varje instrument har sin egen blandning av övertoner. Den påverkar instrumentets *klang*, alltså ljudets särskilda karaktär. Även hur tonen börjar och klingar av påverkar klangen. En pianoton börjar med ett slag och dör sedan långsamt bort, medan en flöjtton kan hålla i lika länge som blåsaren orkar. Det är klangen som gör att du kan höra skillnad på en fiol och en trumpet, och att du känner igen en kompis röst i telefonen innan hen har sagt sitt namn.' },
        { typ: 'rubrik', text: 'En ren ton, en klang och brus' },
        { typ: 'text', text: 'En ton som bara består av en enda frekvens kallas en *ren ton*. En stämgaffel ger nästan en ren ton, och den ser ut som en mjuk, jämn våg på ett oscilloskop. En ton från ett instrument eller en röst har övertoner. Kurvan upprepar sig fortfarande regelbundet, men den har fått en mer komplicerad form. Ljud där väldigt många frekvenser blandas utan något mönster och utan tydlig tonhöjd kallas *brus*. Brus låter som suset från en dusch, ett vattenfall eller en radio mellan två kanaler. Kurvan för brus är helt oregelbunden.' },
        // [BILD A4: tre vågkurvor ovanför varandra med tid på den vågräta axeln. Överst ren ton (stämgaffel): en jämn, mjuk våg. I mitten klang (fiol): en våg med samma upprepningstakt men taggigare form. Underst brus (dusch): en helt oregelbunden kurva utan mönster. Namn: "ren ton", "klang", "brus"]
        { id: 'bild-a4', typ: 'figur', namn: 'ljud', lage: 'klang-tid', bildtext: 'En ren ton, en klang med övertoner och brus utan mönster.' },
        { typ: 'text', text: 'Brus är ett ord från fysiken och beskriver hur ljudet är uppbyggt. *Buller|buller* är något annat. Det är ljud som är oönskat och störande, oavsett om det är brus eller toner. En granne som spelar trumpet mitt i natten är buller, fast det är toner.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tonhöjd bestäms av frekvensen. Hög frekvens ger en hög, ljus ton, låg frekvens en låg, mörk ton.',
          'Ljudstyrka bestäms av amplituden. Samma ton kan vara stark eller svag.',
          'I fysiken betyder "högt" ljust, inte starkt. "Prata högre" borde egentligen vara "prata starkare".',
          'En kort, tunn och hårt spänd sträng ger en ljus ton. En lång, tjock och löst spänd sträng ger en mörk ton.',
          'Normaltonen A har frekvensen 440 Hz och används när man stämmer instrument.',
          'En ton från ett instrument består av en grundton och övertoner. Blandningen av övertoner, och hur tonen börjar och klingar av, ger klangen.',
          'En ren ton har en enda frekvens. Brus är många frekvenser blandade utan mönster. Buller är ljud som stör.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
