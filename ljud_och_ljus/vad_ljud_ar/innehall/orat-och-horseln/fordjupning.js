/* Avsnittssida I. Vad ljud är, text D: Örat och hörseln – nivån fordjupning (📕).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-D-Orat-och-horseln-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
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
        { typ: 'text', text: 'När ljud i luft träffar en vattenyta studsar nästan allt tillbaka. Bara omkring en tusendel av energin går in i vattnet. Snäckan är fylld med vätska, och om luftens ljudvågor träffade vätskan direkt skulle nästan allt ljud gå förlorat. Mellanörats uppgift är att lösa det problemet.' },
        { typ: 'rubrik', text: 'Liten yta ger stort tryck' },
        { typ: 'text', text: '*Tryck|tryck* är kraft fördelad på en yta: p = F / A. Samma kraft ger större tryck om ytan är mindre. Det utnyttjar örat. Trumhinnan har en yta på omkring 55 kvadratmillimeter, men stigbygelns fotplatta, som trycker på membranet in till snäckan, har bara omkring 3 kvadratmillimeter. Trumhinnan har alltså en mycket större yta än stigbygelns fotplatta, ungefär 20 gånger så stor. Hörselbenen fungerar dessutom som en liten hävstång. Tillsammans gör detta att trycket mot snäckans vätska blir betydligt större än trycket mot trumhinnan, ungefär 20 gånger. På så sätt överförs ljudenergin mycket effektivare från luft till vätska. Utan mellanörat skulle vi höra mycket sämre.' },
        { typ: 'formel', uttryck: 'p = F / A', forklaring: 'p tryck (Pa), F kraft (N), A area (m²)' },
        { typ: 'text', text: 'Om tryck läser du mer i kapitlet om tryck. Samma princip används när en sko med klack trycker hårdare mot golvet än en sko med platt sula.' }
      ]
    },
    {
      id: 'snackan-sorterar', titel: 'Snäckan sorterar frekvenser',
      block: [
        { typ: 'rubrik', text: 'Varje plats i snäckan svarar på sin frekvens' },
        { typ: 'text', text: 'Om man kunde rulla ut snäckan skulle den vara drygt tre centimeter lång. Längs hela snäckan går ett membran, *basilarmembranet|basilarmembran*, som hårcellerna sitter på. Membranet är smalt och styvt i början av snäckan och brett och mjukt i slutet. En ljus ton får membranet att svänga kraftigast nära början, en mörk ton längst in. Hårcellerna på olika platser svarar alltså på olika frekvenser, ungefär som tangenterna på ett piano. Hjärnan vet vilka hårceller som skickar signaler och därmed vilken tonhöjd ljudet har.' },
        // [BILD D4: snäckan utrullad till en lång kil, med början till vänster och slutet till höger. Bara två markeringar: "höga frekvenser (t.ex. 20 000 Hz)" vid början och "låga frekvenser (t.ex. 20 Hz)" längst in, med en pil däremellan. Inga mellanliggande värden, eftersom frekvenserna inte är jämnt fördelade längs membranet. Text: "smalt och styvt" vid början, "brett och mjukt" i slutet]
        { id: 'bild-d4', typ: 'figur', namn: 'ljud', lage: 'snacka', bildtext: 'Höga frekvenser får membranet att svänga nära början, låga frekvenser längst in.' },
        { typ: 'rubrik', text: 'Därför försvinner de ljusaste tonerna först' },
        { typ: 'text', text: 'De hårceller som reagerar på höga frekvenser sitter nära snäckans början. De delarna är särskilt känsliga för vissa typer av skador och för förändringar som kommer med åldern. Därför försämras hörseln ofta först för de höga frekvenserna. Det kan göra det svårare att höra vissa språkljud, som s, f och t, även om man fortfarande hör att någon pratar.' }
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
          'Trumhinnan är ungefär 20 gånger större än stigbygelns fotplatta, och hörselbenen fungerar som en hävstång. Tillsammans blir trycket mot snäckan ungefär 20 gånger större.',
          'Snäckans membran svänger på olika platser för olika frekvenser: ljusa toner i början, mörka längst in.',
          'Hårcellerna för höga frekvenser, nära snäckans början, är särskilt känsliga. Därför försämras hörseln ofta först för höga toner.',
          'Tidsskillnaden mellan öronen är högst ungefär 0,0006 s, och hjärnan kan märka ännu mindre skillnader.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
