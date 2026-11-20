/* Avsnittssida V. Tryck, arbete och maskiner, text D: Maskiner och effekt – nivån fordjupning (📕).
 * Arbetsorder 29 (2026-11-19): kallor/kap3/V-D-Maskiner-och-effekt-alla-nivaer-v3.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vd: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vd.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Maskiner och effekt i vardagen' },
        { typ: 'text', text: 'I Standard såg du att alla maskiner följer den gyllene regeln, att effekt är arbete per tid och att ingen maskin kan använda all energi. Här ser du samma idéer i en maskin som du kanske använder varje dag, cykeln. Du får också jämföra effekten hos kroppen, en cyklist och en bil, och se vad som händer med verkningsgraden när energin passerar flera maskiner efter varandra.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur cykelns växlar byter kraft mot väg',
          'hur stor effekt kroppen och en bilmotor har',
          'hur man räknar ut verkningsgraden i en kedja av maskiner'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'cykelns-vaxlar', titel: 'Cykelns växlar',
      block: [
        { typ: 'rubrik', text: 'En lätt växel vinner kraft och förlorar väg' },
        { typ: 'text', text: 'På en cykel med växlar kan du välja hur pedalerna och bakhjulet ska hänga ihop. På en lätt växel sitter kedjan på ett litet kugghjul fram och ett stort bak. Då måste du trampa många varv för att bakhjulet ska snurra ett varv. Varje tramptag flyttar cykeln en kort sträcka, men det krävs lite kraft. Det är perfekt i en brant uppförsbacke.' },
        { typ: 'text', text: 'På en tung växel är det tvärtom. Ett varv med pedalerna ger flera varv på bakhjulet. Cykeln kommer långt för varje tramptag, men du måste trycka hårdare. Det passar på plan väg och i medvind.' },
        { typ: 'text', text: 'Arbetet för att komma uppför backen är detsamma oavsett växel, eftersom det beror på höjden och tyngden. Växeln bestämmer bara hur arbetet fördelas: liten kraft och många tramptag, eller stor kraft och få tramptag. Det är mekanikens gyllene regel i en vardaglig maskin.' }
      ]
    },
    {
      id: 'effekt-i-siffror', titel: 'Effekt i siffror',
      block: [
        { typ: 'rubrik', text: 'Kroppen, cyklisten och bilen' },
        { typ: 'text', text: 'Kroppen omvandlar energi hela tiden, också när du sover. I vila är effekten ungefär 80–100 W, ungefär som en gammaldags glödlampa. Det mesta blir värme som håller kroppen varm.' },
        { typ: 'text', text: 'En vältränad elitcyklist kan hålla en effekt på ungefär 400 W på pedalerna i en timme. En vanlig vuxen orkar kanske 100–150 W lika länge. Under några få sekunder kan en stark idrottare komma upp i över 1 000 W.' },
        { typ: 'text', text: 'En vanlig personbil har en motor på ungefär 100 kW, alltså 100 000 W. Det motsvarar ungefär 136 hk, eller effekten från flera hundra cyklister på en gång.' },
        { typ: 'rubrik', text: 'Kilowattimme är en enhet för energi' },
        { typ: 'text', text: 'På elräkningen står energin i kilowattimmar, kWh. Det är den energi som omvandlas när effekten 1 kW används i en timme. Eftersom en timme är 3 600 sekunder är 1 kWh = 1 000 W · 3 600 s = 3 600 000 J. Lägg märke till att kWh är energi, inte effekt, trots att ordet watt finns i namnet.' }
      ]
    },
    {
      id: 'verkningsgrad-i-kedja', titel: 'Verkningsgrad i en kedja',
      block: [
        { typ: 'rubrik', text: 'Verkningsgraderna multipliceras' },
        { typ: 'text', text: 'Ofta passerar energin flera maskiner efter varandra, och varje maskin tar en del som värme. Då multipliceras verkningsgraderna.' },
        { typ: 'text', text: 'Ett exempel: en elbil laddas från elnätet. Laddaren och batteriet har tillsammans en verkningsgrad på ungefär 90 procent, och elmotorn ungefär 90 procent. Av energin som kommer från eluttaget blir då ungefär 0,9 · 0,9 = 0,81, alltså 81 procent, rörelse. I en bensinbil är motorns verkningsgrad ungefär 30 procent, och dessutom krävs energi för att ta fram och transportera bensinen. Därför kommer en elbil mycket längre på samma mängd energi.' },
        { typ: 'rubrik', text: 'Ju fler steg, desto mer går förlorat' },
        { typ: 'text', text: 'Om energin ska passera fem maskiner som var och en har en verkningsgrad på 80 procent blir den totala verkningsgraden 0,8 · 0,8 · 0,8 · 0,8 · 0,8 ≈ 0,33, bara en tredjedel. Därför försöker ingenjörer göra kedjorna så korta som möjligt, och varje steg så bra som möjligt.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Cykelns lätta växel vinner kraft och förlorar väg. Den tunga växeln gör tvärtom. Arbetet uppför backen är detsamma.',
          'Kroppen i vila har en effekt på ungefär 80–100 W. En elitcyklist kan hålla omkring 400 W i en timme.',
          'En bilmotor på 100 kW motsvarar ungefär 136 hk.',
          '1 kWh är energi, inte effekt: 1 kWh = 3 600 000 J.',
          'När energin passerar flera maskiner multipliceras verkningsgraderna.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
