/* Avsnittssida III. Ljusets väg, text D: Linser och bilder – nivån standard (📘).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-D-Linser-och-bilder-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiid: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiid.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Linser finns överallt' },
        { typ: 'text', text: 'Det sitter linser i glasögon och kontaktlinser, i mobilens kamera, i projektorer, kikare och mikroskop. Du har dessutom en lins i vart och ett av dina ögon. En *lins* är en genomskinlig bit glas eller plast med buktiga ytor. Den bryter ljuset på ett bestämt sätt, så att det kan samlas till en bild. I den här texten får du använda det du har lärt dig om brytning för att förstå hur linser fungerar och vilka bilder de ger.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'skillnaden mellan *konvexa|konvex* och *konkava|konkav* linser',
          'vad *brännpunkt* och *brännvidd* betyder för en lins',
          'hur en lins kan ge en *verklig bild* på ett papper, och varför den är upp och ned',
          'varför ett förstoringsglas förstorar, och vad en *skenbild* är',
          'hur en lins gör hålkameran både ljus och skarp'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'linser-samlar-och-sprider', titel: 'Linser samlar och sprider ljus',
      block: [
        { typ: 'rubrik', text: 'Ljuset bryts två gånger' },
        { typ: 'text', text: 'När ljus går genom en lins bryts det två gånger: först när det går in i glaset och sedan när det går ut igen. Du såg i texten om brytning att en plan glasskiva bara flyttar ljuset lite åt sidan, eftersom de två ytorna är parallella. I en lins är ytorna inte parallella. Längs kanterna lutar ytorna mot varandra, och då ändrar ljuset riktning på samma sätt vid båda brytningarna. Ljuset som går genom kanten av linsen böjs därför mer än ljuset nära mitten.' },
        // [BILD D2: en stråle genom kanten av en konvex lins, förstorad detalj i numrerade steg: 1 en stråle parallell med den optiska axeln träffar linsens framsida nära kanten · 2 strålen bryts mot normalen när den går in i glaset · 3 strålen bryts från normalen när den går ut ur glaset · 4 båda brytningarna har böjt strålen åt samma håll, in mot axeln. Normalerna streckade i båda träffpunkterna]
        { id: 'bild-d2', typ: 'figur', namn: 'ljus', lage: 'linskant', bildtext: 'Strålen bryts två gånger, in i glaset och ut ur det. Båda gångerna böjs den in mot axeln.' },
        { typ: 'rubrik', text: 'Konvex lins samlar, konkav lins sprider' },
        { typ: 'text', text: 'En lins som är tjockast på mitten kallas *konvex*. Parallella ljusstrålar som går genom den bryts in mot mitten och samlas i en punkt på andra sidan, linsens *brännpunkt* eller *fokus*. Avståndet från linsens mitt till brännpunkten kallas *brännvidd*. Eftersom ljus kan gå genom linsen åt båda hållen har linsen en brännpunkt på var sin sida, lika långt från linsen. En konvex lins kallas också *samlingslins*.' },
        { typ: 'text', text: 'En lins som är tunnast på mitten kallas *konkav*. Parallella strålar som går genom den bryts utåt och sprids. Efter linsen ser de ut att komma från en punkt på samma sida som ljuset kom ifrån. Det är den konkava linsens brännpunkt. Ingen stråle går verkligen genom den punkten, och därför ritas strålarnas förlängningar streckade. En konkav lins kallas också *spridningslins*.' },
        // [BILD D1: konvex och konkav lins sida vid sida, strukturfigur. Vänster: fem parallella strålar mot en konvex lins, efter linsen samlas de i brännpunkten F, F markerad på båda sidor, brännvidden utsatt · höger: fem parallella strålar mot en konkav lins, efter linsen sprids de, förlängningarna streckade bakåt till brännpunkten F på den sida ljuset kommer från. Optisk axel streckad. Namn: konvex lins, konkav lins, brännpunkt F, brännvidd. Bildtexten säger att brytningen ritas förenklat i linsens mitt]
        { id: 'bild-d1', typ: 'figur', namn: 'ljus', lage: 'linstyper', bildtext: 'En konvex lins samlar parallella strålar i brännpunkten F, en konkav lins sprider dem. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'Ju mer bukig en lins är, desto mer bryts ljuset och desto kortare blir brännvidden. En tunn, platt lins har lång brännvidd och en tjock, kraftigt buktande lins har kort. Även en vattendroppe och en glaskula fungerar som konvexa linser. Lägg en droppe vatten på en plastficka över en text, så blir bokstäverna under droppen större.' },
        { typ: 'rubrik', text: 'Brännglaset kan tända eld' },
        { typ: 'text', text: 'Håller du en konvex lins i solen samlas solljuset i en liten, ljus fläck i brännpunkten. All den energi som träffar linsen samlas på en liten yta, och där kan det bli så varmt att papper börjar brinna. Därför kallas en sådan lins ibland ett brännglas. Samma sak kan hända av misstag. En vattenflaska eller en glaskula som står i ett soligt fönster kan samla solljuset på en gardin, och det har orsakat bränder.' }
      ]
    },
    {
      id: 'bilder-pa-papper', titel: 'Bilder på ett papper',
      block: [
        { typ: 'rubrik', text: 'En konvex lins kan ge en bild som går att fånga' },
        { typ: 'text', text: 'Stå längst in i ett rum och håll en konvex lins mellan ett fönster och ett vitt papper. Flytta papperet fram och tillbaka. På ett visst avstånd syns en skarp bild av fönstret och träden utanför, i färg men upp och ned. En bild som kan fångas på en skärm, ett papper eller en vägg kallas en *verklig bild*. Den bildas där ljuset från föremålet verkligen samlas.' },
        { typ: 'rubrik', text: 'Två strålar visar var bilden hamnar' },
        { typ: 'text', text: 'Från varje punkt på ett föremål går ljus åt alla håll, och all den del av ljuset som träffar linsen samlas i samma punkt bakom linsen. För att hitta den punkten räcker det att rita två strålar som är lätta att följa. Den första går parallellt med den optiska axeln, linjen genom linsens mitt, och bryts genom brännpunkten på andra sidan. Den andra går genom linsens mitt, där glasets två ytor är nästan parallella, och fortsätter rakt fram. Där de två strålarna korsar varandra hamnar bilden av punkten.' },
        // [BILD D3: verklig bild med en konvex lins i numrerade steg: 1 ett ljus står till vänster om linsen, längre bort än brännpunkten · 2 en stråle från lågans topp går parallellt med axeln och bryts genom brännpunkten F på andra sidan · 3 en stråle från lågans topp går rakt genom linsens mitt · 4 strålarna korsar varandra till höger om linsen, nedanför axeln · 5 där står ett papper, och på det syns ljuset upp och ned. Optisk axel streckad, F markerad på båda sidor]
        { id: 'bild-d3', typ: 'figur', namn: 'ljus', lage: 'verklig-bild', bildtext: 'Strålarna från lågans topp möts bakom linsen, och på papperet syns ljuset upp och ned. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'Gör man likadant för lågans fot, som står på axeln, hamnar dess bild också på axeln. Toppen hamnar alltså nedanför axeln och foten på axeln. Därför blir bilden upp och ned. Den är också vänd höger mot vänster.' },
        { typ: 'rubrik', text: 'Många tror att halva linsen ger halva bilden' },
        { typ: 'text', text: 'Om man täcker över halva linsen med ett papper tror många att halva bilden försvinner. Men så blir det inte. Hela bilden syns kvar, bara mörkare. Ljuset från varje punkt på föremålet går genom hela linsen, och alla delar av linsen skickar det till samma punkt i bilden. Täcker man halva linsen kommer bara hälften så mycket ljus fram till varje punkt, men alla punkter får fortfarande ljus. Det är samma sak som gör att en smutsfläck på en kameralins inte syns som en fläck i fotot.' }
      ]
    },
    {
      id: 'var-foremalet-star', titel: 'Var föremålet står avgör bilden',
      block: [
        { typ: 'rubrik', text: 'Många tror att en lins alltid förstorar' },
        { typ: 'text', text: 'En konvex lins kallas ofta förstoringsglas, och många tror därför att den alltid förstorar. Men vilken bild linsen ger beror på hur långt bort föremålet står. Det kan du se om du flyttar ljuset i figuren närmare linsen och ritar de två strålarna igen.' },
        { typ: 'text', text: 'Står föremålet långt bort, mer än två brännvidder från linsen, blir bilden upp och ned, mindre än föremålet och hamnar nära brännpunkten på andra sidan. Så fungerar en kamera. Ett hus som är tiotals meter högt blir en bild på några millimeter på kamerans bildsensor.' },
        { typ: 'text', text: 'Står föremålet närmare, mellan en och två brännvidder från linsen, blir bilden upp och ned men större än föremålet, och den hamnar längre bort. Så fungerar en projektor: en liten, starkt belyst bild nära linsen blir en stor bild på väggen.' },
        { typ: 'text', text: 'Står föremålet precis i brännpunkten går strålarna ut parallellt efter linsen. De samlas inte till någon bild på ett papper bakom linsen.' },
        // [BILD D4: var föremålet står avgör bilden, tre lägen ovanför varandra, strukturfigur. Överst: föremål (en pil) långt bort, mer än 2F – liten upp och nedvänd bild nära F på andra sidan, namn "kamera" · mitten: föremål mellan F och 2F – stor upp och nedvänd bild långt bort, namn "projektor" · nederst: föremål innanför F – ingen verklig bild, streckade förlängningar bakåt ger en stor rättvänd skenbild på samma sida som föremålet, namn "förstoringsglas". F och 2F markerade på axeln i alla tre]
        { id: 'bild-d4', typ: 'figur', namn: 'ljus', lage: 'tre-lagen', bildtext: 'Var föremålet står avgör hur bilden blir. Brytningen ritas förenklat i linsens mitt.' }
      ]
    },
    {
      id: 'forstoringsglaset', titel: 'Förstoringsglaset',
      block: [
        { typ: 'rubrik', text: 'Innanför brännpunkten blir bilden stor och rättvänd' },
        { typ: 'text', text: 'Står föremålet närmare linsen än brännpunkten händer något annat. Strålarna från en punkt på föremålet sprids fortfarande efter linsen, fast mindre än förut, och de möts aldrig. Det blir ingen bild på något papper. Men om du tittar genom linsen fångar ditt öga upp strålarna. Hjärnan följer dem rakt bakåt, och där de ser ut att komma ifrån ser du föremålet, större och rättvänt. Så fungerar ett förstoringsglas eller en lupp.' },
        // [BILD D5: förstoringsglaset i numrerade steg: 1 en liten pil står mellan linsen och brännpunkten · 2 en stråle från pilens topp parallellt med axeln bryts genom F på andra sidan · 3 en stråle från pilens topp går rakt genom linsens mitt · 4 efter linsen sprids de två strålarna · 5 strålarna förlängs streckat bakåt och möts i en större, rättvänd pil bakom den verkliga, skenbilden · 6 ögat bakom linsen: de strålar från pilens topp som når pupillen ritas tunnare, och deras streckade förlängningar går till samma punkt i skenbilden. OBS: konstruktionsstrålarna (steg 2–3) bestämmer var skenbilden ligger; de behöver inte själva träffa ögat. Geometrin kontrolleras]
        { id: 'bild-d5', typ: 'figur', namn: 'ljus', lage: 'forstoringsglas', bildtext: 'Förlängda bakåt möts strålarna i en större, rättvänd skenbild. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'En sådan bild kallas en *skenbild*. Ljuset kommer inte verkligen från den platsen, det bara ser ut så. En skenbild kan man inte fånga på ett papper, bara se genom linsen. Spegelbilden i en plan spegel är också en skenbild.' },
        { typ: 'rubrik', text: 'En konkav lins förminskar alltid' },
        { typ: 'text', text: 'En konkav lins sprider ljuset, och strålarna från ett föremål möts aldrig efter linsen. Därför ger en konkav lins aldrig någon verklig bild. Tittar man genom den ser man alltid en skenbild som är mindre än föremålet och rättvänd, var föremålet än står. Konkava linser används bland annat i glasögon för närsynta. Hur de hjälper ögat får du veta i texten om ögat.' },
        // [BILD D6: konkav lins, strukturfigur: en pil framför en konkav lins, en stråle parallell med axeln sprids ut så att den ser ut att komma från F på samma sida, en stråle genom mitten går rakt, de streckade förlängningarna möts i en mindre rättvänd skenbild närmare linsen än pilen. Namn: föremål, konkav lins, skenbild]
        { id: 'bild-d6', typ: 'figur', namn: 'ljus', lage: 'konkav-lins', bildtext: 'Genom en konkav lins blir skenbilden mindre och rättvänd. Brytningen ritas förenklat i linsens mitt.' }
      ]
    },
    {
      id: 'halkamera-med-lins', titel: 'Hålkameran får en lins',
      block: [
        { typ: 'rubrik', text: 'Ljus och skarp på samma gång' },
        { typ: 'text', text: 'I texten om ljus och seende såg du att hålkameran har ett problem. Ett litet hål ger en skarp men mörk bild, och ett stort hål en ljus men suddig. Det beror på att ljuset från en punkt på trädet, som kommer in genom olika delar av ett stort hål, hamnar på olika ställen på papperet.' },
        { typ: 'text', text: 'Sätter man en konvex lins i det stora hålet blir det annorlunda. Linsen tar emot mycket ljus från varje punkt på trädet, och den samlar allt det ljuset i en enda punkt på papperet. Bilden blir både ljus och skarp. Det är precis så en kamera fungerar, från de första kamerorna på 1800-talet till kameran i din mobil.' },
        // [BILD D7: hålkamera utan och med lins sida vid sida, strukturfigur. Vänster: stort hål – tre strålar från trädets topp går genom olika delar av hålet och träffar papperet på tre olika ställen, en suddig fläck · höger: samma hål med en konvex lins – de tre strålarna från trädets topp bryts och samlas i en punkt på papperet, en skarp bild. Namn: utan lins: suddigt, med lins: skarpt]
        { id: 'bild-d7', typ: 'figur', namn: 'ljus', lage: 'halkamera-lins', bildtext: 'Utan lins blir bilden suddig, med lins skarp. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'Det finns en sak till som är viktig. En lins ger en skarp bild bara på ett bestämt avstånd. Står papperet för nära eller för långt bort blir bilden suddig. I en kamera flyttas linsen därför lite fram eller tillbaka tills bilden blir skarp. Det kallas att ställa in skärpan. Du har också linser i ögonen, och hur de ställer in skärpan får du veta i texten om ögat.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En lins bryter ljuset två gånger, när det går in och när det går ut.',
          'En konvex lins, tjockast på mitten, samlar parallella strålar i brännpunkten. En konkav lins, tunnast på mitten, sprider dem så att de ser ut att komma från en brännpunkt framför linsen.',
          'Brännvidden är avståndet från linsen till brännpunkten. Ju mer bukig linsen är, desto kortare brännvidd.',
          'När föremålet står utanför brännpunkten kan en konvex lins ge en verklig bild som går att fånga på ett papper. Den är upp och ned.',
          'Var bilden hamnar och hur stor den blir beror på var föremålet står. Långt bort: liten bild, som i en kamera. Mellan en och två brännvidder: stor bild, som i en projektor.',
          'Innanför brännpunkten ger en konvex lins en förstorad, rättvänd skenbild. Så fungerar ett förstoringsglas.',
          'En konkav lins ger alltid en förminskad, rättvänd skenbild.',
          'En lins i hålkameran gör bilden både ljus och skarp. Så fungerar en kamera.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
