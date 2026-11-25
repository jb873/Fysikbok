/* Avsnittssida III. Ljusets väg, text D: Linser och bilder – nivån enkel (📗).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-D-Linser-och-bilder-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiid: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiid.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Linser finns överallt' },
        { typ: 'text', text: 'Linser finns på massor av ställen. Det finns linser i glasögon och i kontaktlinser. Det finns linser i kameran i din mobil. Det finns linser i kikare och mikroskop. Och du har en lins i vart och ett av dina ögon.' },
        { typ: 'text', text: 'En *lins* är en genomskinlig bit glas eller plast. Den har ytor som är buktiga. Linsen bryter ljuset på ett speciellt sätt. Då kan ljuset samlas till en bild.' },
        { typ: 'text', text: 'I texten om brytning lärde du dig att ljuset byter riktning när det går in i glas. Nu ska du använda det för att förstå hur linser fungerar.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'skillnaden mellan *konvexa|konvex* och *konkava|konkav* linser',
          'vad *brännpunkt* och *brännvidd* betyder',
          'hur en lins kan göra en bild på ett papper, och varför bilden blir upp och ned',
          'varför ett förstoringsglas gör saker större',
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
        { typ: 'text', text: 'När ljus går genom en lins bryts det två gånger. Först bryts det när det går in i glaset. Sedan bryts det igen när det går ut ur glaset.' },
        { typ: 'text', text: 'Kommer du ihåg fönsterrutan? Där kom ljuset ut åt samma håll som det gick in. Det berodde på att rutans två ytor är parallella.' },
        { typ: 'text', text: 'I en lins är ytorna inte parallella. Vid kanterna lutar ytorna mot varandra. Så här händer det med en stråle nära kanten:' },
        { typ: 'punkter', punkter: [
          'Strålen träffar linsens framsida.',
          'Den bryts när den går in i glaset.',
          'Den bryts igen när den går ut ur glaset.',
          'Båda gångerna böjs den åt samma håll, in mot linsens mitt.'
        ] },
        // [BILD D2: en stråle genom kanten av en konvex lins, förstorad detalj i numrerade steg: 1 en stråle parallell med den optiska axeln träffar linsens framsida nära kanten · 2 strålen bryts mot normalen när den går in i glaset · 3 strålen bryts från normalen när den går ut ur glaset · 4 båda brytningarna har böjt strålen åt samma håll, in mot axeln. Normalerna streckade i båda träffpunkterna]
        { id: 'bild-d2', typ: 'figur', namn: 'ljus', lage: 'linskant', bildtext: 'Strålen bryts två gånger, in i glaset och ut ur det. Båda gångerna böjs den in mot axeln.' },
        { typ: 'text', text: 'Ljuset som går genom kanten av linsen böjs mer än ljuset nära mitten. Mitt i linsen är ytorna nästan parallella. Där går ljuset nästan rakt igenom.' },
        { typ: 'rubrik', text: 'Konvex lins samlar, konkav lins sprider' },
        { typ: 'text', text: 'Det finns två huvudsorter av linser.' },
        { typ: 'text', text: 'En lins som är tjockast på mitten kallas *konvex*. Den samlar ljuset. Om parallella strålar går genom en konvex lins, böjs de in mot mitten. På andra sidan linsen samlas de i en punkt. Den punkten kallas *brännpunkt*. Ett annat ord är *fokus*. Avståndet från linsens mitt till brännpunkten kallas *brännvidd*. En konvex lins kallas också *samlingslins*.' },
        { typ: 'text', text: 'Ljus kan gå genom linsen åt båda hållen. Därför har linsen en brännpunkt på var sin sida. Båda ligger lika långt från linsen.' },
        { typ: 'text', text: 'En lins som är tunnast på mitten kallas *konkav*. Den sprider ljuset. Om parallella strålar går genom en konkav lins, böjs de utåt. Efter linsen ser det ut som om strålarna kommer från en punkt framför linsen, på den sida där ljuset kom ifrån. Det är den konkava linsens brännpunkt. Ingen stråle går verkligen genom den punkten. En konkav lins kallas också *spridningslins*.' },
        // [BILD D1: konvex och konkav lins sida vid sida, strukturfigur. Vänster: fem parallella strålar mot en konvex lins, efter linsen samlas de i brännpunkten F, F markerad på båda sidor, brännvidden utsatt · höger: fem parallella strålar mot en konkav lins, efter linsen sprids de, förlängningarna streckade bakåt till brännpunkten F på den sida ljuset kommer från. Optisk axel streckad. Namn: konvex lins, konkav lins, brännpunkt F, brännvidd. Bildtexten säger att brytningen ritas förenklat i linsens mitt]
        { id: 'bild-d1', typ: 'figur', namn: 'ljus', lage: 'linstyper', bildtext: 'En konvex lins samlar parallella strålar i brännpunkten F, en konkav lins sprider dem. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'En lins som buktar mycket bryter ljuset mycket. Då hamnar brännpunkten nära linsen. Brännvidden blir kort. En lins som är nästan platt bryter ljuset lite. Då blir brännvidden lång.' },
        { typ: 'text', text: 'Även en vattendroppe är en konvex lins. Prova det här. Lägg en plastficka över en text. Släpp en droppe vatten på plastfickan. Bokstäverna under droppen ser större ut.' },
        { typ: 'rubrik', text: 'Brännglaset kan tända eld' },
        { typ: 'text', text: 'Håll en konvex lins i solen. Då samlas solljuset i en liten, ljus prick i brännpunkten. Allt ljus som träffar linsen hamnar på en liten fläck. Där blir det väldigt varmt. Om du håller ett papper där kan papperet börja brinna. Därför kallas en sådan lins ibland ett brännglas.' },
        { typ: 'text', text: 'Det här kan också hända av misstag. En vattenflaska eller en glaskula i ett soligt fönster fungerar som en lins. Den kan samla solljuset på en gardin. Så har det faktiskt börjat brinna i hus.' }
      ]
    },
    {
      id: 'bilder-pa-papper', titel: 'Bilder på ett papper',
      block: [
        { typ: 'rubrik', text: 'En konvex lins kan göra en bild som går att fånga' },
        { typ: 'text', text: 'Det här kan du prova själv. Så här gör du:' },
        { typ: 'punkter', punkter: [
          'Ställ dig längst in i ett rum, en dag när det är ljust ute.',
          'Håll en konvex lins mellan fönstret och ett vitt papper.',
          'Flytta papperet sakta fram och tillbaka bakom linsen.',
          'På ett visst avstånd syns en skarp bild av fönstret och träden utanför på papperet. Bilden har färger. Men den är upp och ned.'
        ] },
        { typ: 'text', text: 'En bild som går att fånga på ett papper, en skärm eller en vägg kallas en *verklig bild*. Den uppstår där ljuset från saken verkligen samlas.' },
        { typ: 'rubrik', text: 'Två strålar visar var bilden hamnar' },
        { typ: 'text', text: 'Från varje punkt på en sak går ljus åt alla håll. Det ljus som träffar linsen samlas i en enda punkt bakom linsen. Men hur vet man var den punkten är?' },
        { typ: 'text', text: 'Det räcker att rita två strålar. De är lätta att följa:' },
        { typ: 'punkter', punkter: [
          'Den första strålen går parallellt med linjen genom linsens mitt. Den linjen kallas den optiska axeln. Strålen bryts genom brännpunkten på andra sidan.',
          'Den andra strålen går rakt genom linsens mitt. Där är glasets ytor nästan parallella. Därför fortsätter strålen rakt fram.',
          'Där de två strålarna korsar varandra hamnar bilden.'
        ] },
        // [BILD D3: verklig bild med en konvex lins i numrerade steg: 1 ett ljus står till vänster om linsen, längre bort än brännpunkten · 2 en stråle från lågans topp går parallellt med axeln och bryts genom brännpunkten F på andra sidan · 3 en stråle från lågans topp går rakt genom linsens mitt · 4 strålarna korsar varandra till höger om linsen, nedanför axeln · 5 där står ett papper, och på det syns ljuset upp och ned. Optisk axel streckad, F markerad på båda sidor]
        { id: 'bild-d3', typ: 'figur', namn: 'ljus', lage: 'verklig-bild', bildtext: 'Strålarna från lågans topp möts bakom linsen, och på papperet syns ljuset upp och ned. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'Titta på bilden. Strålarna från toppen av lågan korsar varandra nedanför axeln. Toppen hamnar alltså längst ned i bilden. Därför blir bilden upp och ned. Den blir också vänd åt sidan.' },
        { typ: 'rubrik', text: 'Många tror att halva linsen ger halva bilden' },
        { typ: 'text', text: 'Tänk dig att du täcker över halva linsen med ett papper. Vad händer med bilden? Många tror att halva bilden försvinner. Men så blir det inte. Hela bilden finns kvar. Den blir bara mörkare.' },
        { typ: 'text', text: 'Varför då? Ljuset från varje punkt på saken går genom hela linsen. Alla delar av linsen skickar ljuset till samma punkt i bilden. Om du täcker halva linsen kommer bara hälften så mycket ljus till varje punkt. Men alla punkter får fortfarande lite ljus. Därför syns hela bilden, fast svagare.' },
        { typ: 'text', text: 'Samma sak gör att en liten smutsfläck på kameralinsen i din mobil inte syns som en fläck på fotot.' }
      ]
    },
    {
      id: 'var-foremalet-star', titel: 'Var föremålet står avgör bilden',
      block: [
        { typ: 'rubrik', text: 'Många tror att en lins alltid förstorar' },
        { typ: 'text', text: 'En konvex lins kallas ofta förstoringsglas. Därför tror många att den alltid gör saker större. Men det stämmer inte. Vilken bild linsen ger beror på hur långt bort saken står.' },
        { typ: 'punkter', punkter: [
          'Saken står långt bort, mer än två brännvidder från linsen. Då blir bilden upp och ned och mindre än saken. Den hamnar nära brännpunkten på andra sidan. Så fungerar en kamera. Ett hus som är tiotals meter högt blir en bild som är några millimeter stor inne i kameran.',
          'Saken står närmare, mellan en och två brännvidder från linsen. Då blir bilden upp och ned och större än saken. Den hamnar längre bort. Så fungerar en projektor. En liten, starkt upplyst bild nära linsen blir en stor bild på väggen.',
          'Saken står precis i brännpunkten. Då går strålarna ut parallellt efter linsen. De samlas inte till någon bild på ett papper.',
          'Saken står närmare linsen än brännpunkten. Då blir det ingen bild på papperet. Men om du tittar genom linsen ser du saken större. Det är det förstoringsglaset gör.'
        ] },
        // [BILD D4: var föremålet står avgör bilden, tre lägen ovanför varandra, strukturfigur. Överst: föremål (en pil) långt bort, mer än 2F – liten upp och nedvänd bild nära F på andra sidan, namn "kamera" · mitten: föremål mellan F och 2F – stor upp och nedvänd bild långt bort, namn "projektor" · nederst: föremål innanför F – ingen verklig bild, streckade förlängningar bakåt ger en stor rättvänd skenbild på samma sida som föremålet, namn "förstoringsglas". F och 2F markerade på axeln i alla tre]
        { id: 'bild-d4', typ: 'figur', namn: 'ljus', lage: 'tre-lagen', bildtext: 'Var föremålet står avgör hur bilden blir. Brytningen ritas förenklat i linsens mitt.' }
      ]
    },
    {
      id: 'forstoringsglaset', titel: 'Förstoringsglaset',
      block: [
        { typ: 'rubrik', text: 'Innanför brännpunkten blir bilden stor och rättvänd' },
        { typ: 'text', text: 'Nu ska vi titta noga på förstoringsglaset. Saken står närmare linsen än brännpunkten. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Ljus från en punkt på saken går genom linsen.',
          'Eftersom saken står innanför brännpunkten fortsätter strålarna att spridas efter linsen. De möts inte bakom linsen.',
          'Därför blir det ingen bild på något papper.',
          'Men om du tittar genom linsen kommer strålarna in i ditt öga.',
          'Hjärnan följer strålarna rakt bakåt.',
          'Där strålarna ser ut att komma ifrån ser du saken. Den ser större ut och står rätt.'
        ] },
        // [BILD D5: förstoringsglaset i numrerade steg: 1 en liten pil står mellan linsen och brännpunkten · 2 en stråle från pilens topp parallellt med axeln bryts genom F på andra sidan · 3 en stråle från pilens topp går rakt genom linsens mitt · 4 efter linsen sprids de två strålarna · 5 strålarna förlängs streckat bakåt och möts i en större, rättvänd pil bakom den verkliga, skenbilden · 6 ögat bakom linsen: de strålar från pilens topp som når pupillen ritas tunnare, och deras streckade förlängningar går till samma punkt i skenbilden. OBS: konstruktionsstrålarna (steg 2–3) bestämmer var skenbilden ligger; de behöver inte själva träffa ögat. Geometrin kontrolleras]
        { id: 'bild-d5', typ: 'figur', namn: 'ljus', lage: 'forstoringsglas', bildtext: 'Förlängda bakåt möts strålarna i en större, rättvänd skenbild. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'En sådan bild kallas en *skenbild*. Ljuset kommer inte på riktigt från den platsen. Det ser bara ut så. En skenbild kan du inte fånga på ett papper. Du kan bara se den genom linsen.' },
        { typ: 'text', text: 'Kommer du ihåg spegelbilden från texten om speglar? Den är också en skenbild. Det finns ingen blomma bakom spegeln, det ser bara ut så.' },
        { typ: 'rubrik', text: 'En konkav lins förminskar alltid' },
        { typ: 'text', text: 'En konkav lins sprider ljuset. Strålarna från en sak möts aldrig efter linsen. Därför kan en konkav lins aldrig göra en bild på ett papper.' },
        { typ: 'text', text: 'Om du tittar genom en konkav lins ser du alltid en skenbild. Den är mindre än saken och står rätt. Det gäller var saken än står.' },
        { typ: 'text', text: 'Konkava linser används till exempel i glasögon för den som är närsynt. Hur det fungerar får du veta i texten om ögat.' },
        // [BILD D6: konkav lins, strukturfigur: en pil framför en konkav lins, en stråle parallell med axeln sprids ut så att den ser ut att komma från F på samma sida, en stråle genom mitten går rakt, de streckade förlängningarna möts i en mindre rättvänd skenbild närmare linsen än pilen. Namn: föremål, konkav lins, skenbild]
        { id: 'bild-d6', typ: 'figur', namn: 'ljus', lage: 'konkav-lins', bildtext: 'Genom en konkav lins blir skenbilden mindre och rättvänd. Brytningen ritas förenklat i linsens mitt.' }
      ]
    },
    {
      id: 'halkamera-med-lins', titel: 'Hålkameran får en lins',
      block: [
        { typ: 'rubrik', text: 'Ljus och skarp på samma gång' },
        { typ: 'text', text: 'I texten om ljus och seende lärde du dig om hålkameran. Den hade ett problem:' },
        { typ: 'punkter', punkter: [
          'Ett litet hål ger en skarp bild, men den är mörk.',
          'Ett stort hål ger en ljus bild, men den är suddig.',
          'Bilden blir suddig för att ljus från samma punkt på trädet kommer in genom olika delar av hålet. Ljuset hamnar då på olika ställen på papperet.'
        ] },
        { typ: 'text', text: 'Nu kan du lösa problemet. Sätt en konvex lins i det stora hålet. Linsen tar emot mycket ljus från varje punkt på trädet. Sedan samlar den allt det ljuset i en enda punkt på papperet. Bilden blir både ljus och skarp.' },
        // [BILD D7: hålkamera utan och med lins sida vid sida, strukturfigur. Vänster: stort hål – tre strålar från trädets topp går genom olika delar av hålet och träffar papperet på tre olika ställen, en suddig fläck · höger: samma hål med en konvex lins – de tre strålarna från trädets topp bryts och samlas i en punkt på papperet, en skarp bild. Namn: utan lins: suddigt, med lins: skarpt]
        { id: 'bild-d7', typ: 'figur', namn: 'ljus', lage: 'halkamera-lins', bildtext: 'Utan lins blir bilden suddig, med lins skarp. Brytningen ritas förenklat i linsens mitt.' },
        { typ: 'text', text: 'Det är precis så en kamera fungerar. Det gällde de första kamerorna för snart 200 år sedan, och det gäller kameran i din mobil.' },
        { typ: 'text', text: 'En sak till är viktig. En lins ger en skarp bild bara på ett bestämt avstånd. Om papperet står för nära eller för långt bort blir bilden suddig. I en kamera flyttas därför linsen lite fram eller tillbaka tills bilden blir skarp. Det kallas att ställa in skärpan. Du har också linser i ögonen. Hur ögonen ställer in skärpan får du veta i texten om ögat.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En lins bryter ljuset två gånger: när ljuset går in och när det går ut.',
          'En konvex lins är tjockast på mitten. Den samlar ljuset i brännpunkten.',
          'En konkav lins är tunnast på mitten. Den sprider ljuset.',
          'Brännvidden är avståndet från linsen till brännpunkten. Ju mer linsen buktar, desto kortare brännvidd.',
          'När saken står utanför brännpunkten kan en konvex lins göra en verklig bild på ett papper. Bilden är upp och ned.',
          'Om du täcker halva linsen blir bilden mörkare, men hela bilden syns kvar.',
          'Var saken står avgör bilden. Långt bort blir bilden liten, som i en kamera. Närmare blir den stor, som i en projektor.',
          'Innanför brännpunkten gör en konvex lins en förstorad skenbild som står rätt. Så fungerar ett förstoringsglas.',
          'En konkav lins gör alltid en skenbild som är mindre och står rätt.',
          'En lins i hålkameran gör bilden både ljus och skarp. Så fungerar en kamera.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
