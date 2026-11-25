/* Avsnittssida VI. Repetition: ljud och ljus, text B: Ljus – nivån fordjupning (📕).
 * Arbetsorder 30 (2026-11-20): kallor/kap3/VI-B-Repetition-Ljus-alla-nivaer-v3.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vib.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljuset med fysikens glasögon' },
        { typ: 'text', text: 'I Standard repeterade du hur ljuset reflekteras, bryts och delas upp i färger. Här går vi djupare. Du får se hur man mäter avstånd i universum med ljusets hastighet, hur man anger hur stark en glasögonlins är, varför solglasögon kan ta bort blänk från vatten, vad som gör laserljus så speciellt och hur ljuset avslöjar vad stjärnorna är gjorda av.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad ett ljusår är, och vad brytningsindex betyder',
          'hur glasögonlinsers styrka anges i dioptrier',
          'vad polariserat ljus är',
          'hur en laser skiljer sig från en lampa',
          'hur man kan se vilka ämnen en stjärna består av'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'ljuset-i-siffror', titel: 'Ljuset i siffror',
      block: [
        { typ: 'rubrik', text: 'Ett ljusår är en sträcka, inte en tid' },
        { typ: 'text', text: 'Ljuset går ungefär 300 000 km varje sekund. På ett år hinner det ungefär 9 500 miljarder km. Den sträckan kallas ett *ljusår*. Avstånd i universum är så stora att man mäter dem i ljusår. Den närmaste stjärnan efter solen ligger drygt 4 ljusår bort. Det betyder att ljuset vi ser från den i kväll lämnade stjärnan för drygt 4 år sedan. Ju längre ut i rymden vi tittar, desto längre bakåt i tiden ser vi.' },
        { typ: 'rubrik', text: 'Brytningsindex anger hur mycket ljuset saktar in' },
        { typ: 'text', text: 'Hur mycket ett ämne bryter ljuset anges med ett tal som kallas brytningsindex. Det är ljusets hastighet i vakuum delad med hastigheten i ämnet. Vatten har brytningsindex ungefär 1,33, eftersom ljuset går 1,33 gånger fortare i vakuum än i vatten. Glas har ungefär 1,5 och diamant 2,4. Diamant bryter alltså ljuset mycket, och det är en del av förklaringen till att en slipad diamant gnistrar.' },
        { typ: 'text', text: 'Brytningsindex har inget med densitet att göra. Matolja har lägre densitet än vatten och flyter på det, men oljan har högre brytningsindex och bryter ljuset mer.' }
      ]
    },
    {
      id: 'dioptri', titel: 'Dioptri',
      block: [
        { typ: 'rubrik', text: 'Glasögons styrka anges i dioptrier' },
        { typ: 'text', text: 'Optiker anger hur starkt en lins bryter ljuset i *dioptrier*. Dioptritalet är 1 delat med brännvidden i meter. En lins med brännvidden 0,5 m har alltså 2 dioptrier, och en lins med brännvidden 0,1 m, alltså 10 cm, har 10 dioptrier. Konvexa linser får plustecken och konkava minustecken.' },
        { typ: 'text', text: 'Ju längre från noll dioptritalet är, desto kortare är brännvidden och desto starkare bryter linsen ljuset. En lins på +15 dioptrier är alltså starkare och mer böjd än en lins på +2 dioptrier, och en lins på −6 är starkare än en på −1. Det är tvärtom mot vad man kanske tror, och en del läroböcker blandar ihop det. Den som är kraftigt närsynt kan ha glasögon på kanske −6, och den som behöver läsglasögon kanske +2.' }
      ]
    },
    {
      id: 'polariserat-ljus', titel: 'Polariserat ljus',
      block: [
        { typ: 'rubrik', text: 'Ljus är vågor som svänger åt olika håll' },
        { typ: 'text', text: 'Ljus kan beskrivas som vågor. I vanligt ljus från solen eller en lampa svänger vågorna åt alla möjliga håll. När ljus reflekteras mot en blank, plan yta som vatten eller en våt väg svänger mycket av det reflekterade ljuset åt samma håll, längs ytan. Ljuset blir då delvis polariserat.' },
        { typ: 'rubrik', text: 'Polaroidglasögon tar bort blänket' },
        { typ: 'text', text: 'Ett polarisationsfilter fungerar ungefär som ett galler med mikroskopiska springor. Det släpper bara igenom vågor som svänger åt ett visst håll. Polaroidsolglasögon har ett filter som stoppar ljus som svänger längs vattenytan. Därför minskar de blänket kraftigt från en sjö eller en våt väg, men släpper igenom ljuset från allt annat. Med sådana glasögon kan man se ned i vattnet trots att solen glittrar på ytan.' }
      ]
    },
    {
      id: 'laser', titel: 'Laser',
      block: [
        { typ: 'rubrik', text: 'Laserljus har en färg och går åt ett håll' },
        { typ: 'text', text: 'En vanlig lampa skickar ut ljus med många olika våglängder åt alla håll. En laser skickar ut ljus med nästan en enda våglängd, alltså en enda färg, och vågorna går nästan exakt åt samma håll och i takt med varandra. Därför sprids laserstrålen mycket lite och bildar en liten punkt även långt bort.' },
        { typ: 'text', text: 'Det gör lasern användbar där man måste vara exakt: för att mäta avstånd, i streckkodsläsare, för att skicka ljus genom fiberkablar, för att operera ögon och för att skära i metall. Eftersom all energi samlas i en tunn stråle kan även en svag laser skada ögat. Titta därför aldrig in i en laserstråle.' }
      ]
    },
    {
      id: 'spektrallinjer', titel: 'Spektrallinjer',
      block: [
        { typ: 'rubrik', text: 'Varje grundämne har sitt eget fingeravtryck' },
        { typ: 'text', text: 'Om man värmer upp en gas av ett enda grundämne börjar den lysa. Låter man ljuset gå genom ett prisma blir det inget fullständigt spektrum, utan bara några skarpa linjer med bestämda färger. Varje grundämne har sitt eget mönster av linjer, ungefär som ett fingeravtryck. Natrium lyser starkt gult, och det är därför gamla gatlampor lyste gult.' },
        { typ: 'rubrik', text: 'Så vet vi vad stjärnorna består av' },
        { typ: 'text', text: 'En stjärnas heta inre sänder ut ljus med alla färger. På vägen ut passerar ljuset stjärnans svalare yttre gaslager. Atomerna där tar upp just de färger som de själva skulle lysa med om de var heta. I stjärnans spektrum blir det därför mörka linjer, *absorptionslinjer|absorptionslinje*, på exakt de platser där grundämnenas ljusa linjer skulle ha legat. Genom att jämföra dem med grundämnenas fingeravtryck kan forskare avgöra vilka ämnen en stjärna består av, utan att någonsin åka dit. Grundämnet helium upptäcktes först i solens ljus, innan man hittade det på jorden. Det är också så man vet att universum till största delen består av väte och helium, något du läste om i kapitlet om materia och universum.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ett ljusår är den sträcka ljuset går på ett år, ungefär 9 500 miljarder km.',
          'Brytningsindex är ljusets hastighet i vakuum delad med hastigheten i ämnet. Det har inget med densitet att göra.',
          'Dioptri = 1 / brännvidden i meter. Ju längre från noll dioptritalet är, desto starkare är linsen.',
          'Reflekterat ljus från blanka ytor är delvis polariserat. Polaroidglasögon stoppar det och minskar blänket.',
          'Laserljus har nästan en enda färg, och strålen sprids mycket lite.',
          'Varje grundämne ger sitt eget mönster av spektrallinjer. I stjärnornas ljus syns mönstren som mörka absorptionslinjer. Så vet vi vad stjärnorna består av.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] },
        { typ: 'vidare', inledning: 'Läs mer i kapitel 2 Ljud och ljus:', lankar: [
          { text: 'Ljus och seende: 2. Ljusår', href: '../../ljud_och_ljus/ljusets_vag/index.html?niva=fordjupning#ljus-och-seende/ljusar' },
          { text: 'Ljus och seende: 4. Förmörkelser', href: '../../ljud_och_ljus/ljusets_vag/index.html?niva=fordjupning#ljus-och-seende/formorkelser' },
          { text: 'Reflektion och speglar: 3. Hörnreflektorn och månen', href: '../../ljud_och_ljus/ljusets_vag/index.html?niva=fordjupning#reflektion-och-speglar/horn-och-manen' },
          { text: 'Ljuset bryts: 1. Brytningsindex', href: '../../ljud_och_ljus/ljusets_vag/index.html?niva=fordjupning#ljuset-bryts/brytningsindex' },
          { text: 'Ljuset bryts: 2. Diamanten', href: '../../ljud_och_ljus/ljusets_vag/index.html?niva=fordjupning#ljuset-bryts/diamanten' },
          { text: 'Linser och bilder: 1. Dioptri', href: '../../ljud_och_ljus/ljusets_vag/index.html?niva=fordjupning#linser-och-bilder/dioptri' },
          { text: 'Linser och bilder: 2. Linsformeln', href: '../../ljud_och_ljus/ljusets_vag/index.html?niva=fordjupning#linser-och-bilder/linsformeln' }
        ] }
      ]
    }
  ]
});
