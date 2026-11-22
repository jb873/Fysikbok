/* Avsnittssida I. Vad ljud är, text D: Örat och hörseln – nivån fordjupning (📕).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-D-Orat-och-horseln-alla-nivaer-v1.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2id: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-id.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Örat som mätinstrument' },
        { typ: 'text', text: 'I Standard följde du ljudets väg genom örat. Här ser du tre finesser i den vägen. Mellanörat förstärker trycket, snäckan sorterar ljudet efter frekvens, och hjärnan mäter tidsskillnader som är kortare än en tusendels sekund.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'varför hörselbenen behövs, och hur de förstärker trycket',
          'hur snäckan skiljer ljusa toner från mörka',
          'varför de ljusaste tonerna är de första som försvinner med åldern',
          'hur stor tidsskillnaden mellan öronen är, räknat med s = v · t'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'orat-forstarker', titel: 'Örat förstärker trycket',
      block: [
        { typ: 'rubrik', text: 'Ljud studsar mot vätska' },
        { typ: 'text', text: 'När ljud i luft träffar en vattenyta studsar nästan allt tillbaka. Bara omkring en tusendel av energin går in i vattnet. Det är därför det blir så tyst när du doppar huvudet under ytan. Snäckan är fylld med vätska, och om luftens ljudvågor träffade vätskan direkt skulle nästan allt ljud gå förlorat. Mellanörats uppgift är att lösa det problemet.' },
        { typ: 'rubrik', text: 'Liten yta ger stort tryck' },
        { typ: 'text', text: '*Tryck|tryck* är kraft fördelad på en yta: p = F / A. Samma kraft ger större tryck om ytan är mindre. Det utnyttjar örat. Trumhinnan har en yta på omkring 55 kvadratmillimeter, men stigbygelns fotplatta, som trycker på membranet in till snäckan, har bara omkring 3 kvadratmillimeter. Kraften som samlas upp av den stora trumhinnan trycker alltså på en nästan 20 gånger mindre yta. Dessutom fungerar hörselbenen som en liten hävstång som ökar kraften något. Sammanlagt blir trycket mot snäckan ungefär 20 gånger större än trycket mot trumhinnan. Utan den förstärkningen skulle vi höra mycket sämre.' },
        { typ: 'formel', uttryck: 'p = F / A', forklaring: 'p tryck (Pa), F kraft (N), A area (m²)' },
        { typ: 'text', text: 'Om tryck läser du mer i kapitlet om tryck. Samma princip används när en sko med klack trycker hårdare mot golvet än en sko med platt sula.' }
      ]
    },
    {
      id: 'snackan-sorterar', titel: 'Snäckan sorterar frekvenser',
      block: [
        { typ: 'rubrik', text: 'Varje plats i snäckan svarar på sin frekvens' },
        { typ: 'text', text: 'Om man kunde rulla ut snäckan skulle den vara drygt tre centimeter lång. Längs hela snäckan går ett membran, *basilarmembranet|basilarmembran*, som hårcellerna sitter på. Membranet är smalt och styvt i början av snäckan och brett och mjukt i slutet. En ljus ton får membranet att svänga kraftigast nära början, en mörk ton längst in. Hårcellerna på olika platser svarar alltså på olika frekvenser, ungefär som tangenterna på ett piano. Hjärnan vet vilka hårceller som skickar signaler och därmed vilken tonhöjd ljudet har.' },
        // [BILD D4: snäckan utrullad till en lång kil, med början till vänster och slutet till höger. Markeringar längs membranet: 20 000 Hz vid början, 2 000 Hz i mitten, 200 Hz och 20 Hz längst in. Text: "smalt och styvt" vid början, "brett och mjukt" i slutet]
        { id: 'bild-d4', typ: 'figur', namn: 'ljud', lage: 'snacka', bildtext: 'Ljusa toner får membranet att svänga nära början, mörka toner längst in.' },
        { typ: 'rubrik', text: 'Därför försvinner de ljusaste tonerna först' },
        { typ: 'text', text: 'Alla ljud, ljusa som mörka, passerar början av snäckan på vägen in. Hårcellerna där får därför ta emot mest under ett helt liv, och det är de som först slits ut och skadas av starka ljud. Därför är det de ljusaste tonerna som försvinner först när hörseln försämras med åldern eller av buller.' }
      ]
    },
    {
      id: 'tidsskillnaden', titel: 'Tidsskillnaden mellan öronen',
      block: [
        { typ: 'rubrik', text: 'Hjärnan mäter tiondelar av tusendels sekunder' },
        { typ: 'text', text: 'I Standard såg du att ljud från sidan når det närmaste örat först. Hur stor är tidsskillnaden? Den kan räknas ut med s = v · t, eller t = s / v.' },
        { typ: 'exempel', rubrik: 'Ljudet från sidan', stycken: [
          ['Ljud från höger når det högra örat först. Till det vänstra örat måste ljudet färdas ungefär 0,2 m längre. Hur mycket senare når ljudet det vänstra örat? Ljudets hastighet är 340 m/s.'],
          ['Givet: s = 0,2 m, v = 340 m/s. Sökt: tiden t.'],
          ['Lösning:',
           't = s / v = 0,2 m / 340 m/s ≈ 0,0006 s',
           'Svar: Ljudet når det vänstra örat ungefär 0,6 tusendels sekund senare.']
        ] },
        { typ: 'text', text: 'Det är den största skillnaden som kan uppstå, när ljudet kommer rakt från sidan. Kommer ljudet snett framifrån blir skillnaden mindre. Ändå kan hjärnan skilja på tidsskillnader på bara några hundratusendelar av en sekund. Det gör att vi kan avgöra ett ljuds riktning ner till några få grader.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljud i luft studsar nästan helt mot vätska. Mellanörat löser det genom att förstärka trycket.',
          'Trumhinnan är ungefär 20 gånger större än stigbygelns fotplatta. Med p = F / A blir trycket mot snäckan ungefär 20 gånger större.',
          'Snäckans membran svänger på olika platser för olika frekvenser: ljusa toner i början, mörka längst in.',
          'Hårcellerna i början av snäckan slits först. Därför försvinner de ljusaste tonerna först.',
          'Tidsskillnaden mellan öronen är högst ungefär 0,0006 s, och hjärnan kan märka ännu mindre skillnader.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
