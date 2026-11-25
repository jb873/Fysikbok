/* Avsnittssida III. Ljusets väg, text C: Ljuset bryts – nivån enkel (📗).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-C-Ljuset-bryts-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiic.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljuset byter riktning när det byter ämne' },
        { typ: 'text', text: 'Prova det här. Ställ en penna snett i ett glas med vatten. Titta på glaset från sidan. Pennan ser ut att vara knäckt precis där vattenytan är. Men pennan är hel.' },
        { typ: 'text', text: 'Har du stått vid kanten av en pool? Då ser botten ut att vara närmare än den är. Poolen ser grundare ut än den är.' },
        { typ: 'text', text: 'I båda fallen är det ljuset som har bytt riktning på vägen till ditt öga. I den här texten får du veta varför det händer. Du får också veta hur samma sak gör att internet kan skickas genom tunna trådar av glas.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att ljuset går olika fort i olika ämnen, och vad *optisk täthet* betyder',
          'varför ljuset byter riktning när det går från ett ämne till ett annat. Det kallas att ljuset *bryts|bryta*',
          'varför saker under vatten ser ut att ligga högre upp än de gör',
          'vad *totalreflektion* är, och hur den används i *fiberoptik*',
          'hur det kan se ut som vatten på en varm väg'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'olika-fort', titel: 'Ljuset går olika fort i olika ämnen',
      block: [
        { typ: 'rubrik', text: 'Långsammare i vatten och glas' },
        { typ: 'text', text: 'I texten om ljus och seende lärde du dig att ljuset går nästan 300 000 kilometer på en sekund i luft. I andra genomskinliga ämnen går ljuset långsammare:' },
        { typ: 'punkter', punkter: [
          'I vatten går det ungefär 225 000 km/s.',
          'I glas går det ungefär 200 000 km/s.',
          'I diamant går det bara ungefär 124 000 km/s.'
        ] },
        { typ: 'text', text: 'Ett ämne där ljuset går långsamt säger man har hög *optisk täthet*. Vatten är optiskt tätare än luft. Glas är optiskt tätare än vatten.' },
        { typ: 'rubrik', text: 'Många tror att det är densiteten som avgör' },
        { typ: 'text', text: 'Ordet täthet får många att tänka på densitet. Densitet betyder hur tungt något är för sin storlek. Men optisk täthet är något annat.' },
        { typ: 'text', text: 'Ta matolja som exempel. Olja är lättare än vatten. Därför flyter oljan ovanpå vattnet. Ändå går ljuset långsammare i olja än i vatten. Olja är alltså optiskt tätare än vatten, fast den är lättare.' },
        { typ: 'text', text: 'Det som avgör hur fort ljuset går är hur ämnets partiklar påverkar ljuset. Det är inte hur tunga de är.' },
        { typ: 'text', text: 'Du vet redan att ljud går fortare i vatten än i luft. Ljus gör tvärtom. Det går långsammare i vatten än i luft. Ljud och ljus är olika sorters vågor. De påverkas av olika saker.' }
      ]
    },
    {
      id: 'stralen-byter-riktning', titel: 'Strålen byter riktning',
      block: [
        { typ: 'rubrik', text: 'Den del av ljuset som kommer fram först saktar in först' },
        { typ: 'text', text: 'Ljus kan beskrivas som en våg som rör sig framåt. För att förstå varför ljuset byter riktning kan du tänka på en rad elever. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Eleverna går arm i arm, bredvid varandra, på en plan asfaltyta.',
          'De kommer snett mot ett fält med djup snö.',
          'Eleven längst till vänster kommer ut i snön först. Hon börjar gå långsammare.',
          'De andra är kvar på asfalten. De går fortfarande lika fort.',
          'Därför vrids raden.',
          'När alla har kommit ut i snön går raden rakt igen. Men nu går den åt ett annat håll än förut.'
        ] },
        { typ: 'text', text: 'Samma sak händer med ljuset när det kommer snett mot en vattenyta. Den del av ljusvågen som når vattnet först saktar in först. Då vrids vågen. Man säger att ljuset *bryts|bryta*.' },
        // [BILD C1: vågfronten vid vattenytan i numrerade steg, sedd från sidan: 1 en bred ljusvåg (rader av vågfronter vinkelräta mot strålen) kommer snett ned mot vattenytan · 2 vänstra kanten av vågfronten når vattnet först och går långsammare, vågfronterna ligger tätare i vattnet · 3 högra kanten är fortfarande i luften och går fortare · 4 vågfronten har vridits och strålen går brantare nedåt i vattnet. Strålen ritad #c2410c genom vågfronternas mitt. Geometrin kontrolleras: vågfronterna är hela tiden vinkelräta mot strålen, och avståndet mellan vågfronterna i vattnet är 3/4 av avståndet i luft]
        { id: 'bild-c1', typ: 'figur', namn: 'ljus', lage: 'vagfront', bildtext: 'Vågfrontens vänstra kant når vattnet först och går långsammare. Fronterna kommer tätare och vrids, och strålen bryts mot normalen.' },
        { typ: 'text', text: 'Om ljuset kommer rakt mot ytan blir det annorlunda. Då når hela vågen vattnet på samma gång. Hela vågen saktar in samtidigt. Ingen del kommer före. Därför fortsätter ljuset rakt fram. Det går långsammare, men det byter inte riktning. Riktningen ändras bara när ljuset kommer snett.' },
        { typ: 'rubrik', text: 'Mot normalen in, från normalen ut' },
        { typ: 'text', text: 'Kommer du ihåg normalen från texten om speglar? Normalen är en tänkt linje som står rakt ut från ytan. När man beskriver hur ljuset bryts mäter man vinklarna mot normalen.' },
        { typ: 'punkter', punkter: [
          'Vinkeln mellan strålen som kommer in och normalen heter infallsvinkel.',
          'Vinkeln mellan den brutna strålen och normalen heter *brytningsvinkel*.'
        ] },
        { typ: 'text', text: 'Nu kan man säga hur ljuset bryts:' },
        { typ: 'punkter', punkter: [
          'När ljuset går in i ett optiskt tätare ämne, till exempel från luft till vatten, bryts det mot normalen. Brytningsvinkeln blir mindre än infallsvinkeln.',
          'När ljuset går ut i ett optiskt tunnare ämne, till exempel från vatten till luft, bryts det från normalen. Brytningsvinkeln blir större än infallsvinkeln.'
        ] },
        { typ: 'text', text: 'Ljuset kan gå samma väg åt båda hållen. Det är samma brytning, bara baklänges.' },
        // [BILD C2: brytning i två fall sida vid sida, strukturfigur. Vänster luft → vatten: inkommande stråle från vänster uppe, en svag reflekterad stråle uppåt höger, en bruten stråle i vattnet närmare normalen, normalen streckad. Höger vatten → luft: stråle nedifrån vänster, bruten stråle i luften längre från normalen. Namn: normal, infallsvinkel, brytningsvinkel, reflekterat ljus, luft, vatten]
        { id: 'bild-c2', typ: 'figur', namn: 'ljus', lage: 'brytning-tva', bildtext: 'Från luft till vatten bryts ljuset mot normalen, från vatten till luft från normalen. Lite ljus reflekteras vid ytan.' },
        { typ: 'text', text: 'Vid vattenytan händer oftast två saker på samma gång. Det mesta av ljuset går in i vattnet och bryts. Men en liten del av ljuset studsar på ytan. Därför ser du både botten och en svag spegelbild av himlen när du tittar ned i en sjö.' }
      ]
    },
    {
      id: 'brytningen-lurar-ogat', titel: 'Brytningen lurar ögat',
      block: [
        { typ: 'rubrik', text: 'Pennan i glaset' },
        { typ: 'text', text: 'Kommer du ihåg spegeln? Där såg du att hjärnan tror att ljuset har gått rakt hela vägen. Samma sak gör att pennan i glaset ser knäckt ut. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Ljus går från pennans spets under vattnet upp mot ytan.',
          'Vid ytan går ljuset ut i luften. Där bryts det från normalen.',
          'Ljuset fortsätter till ditt öga.',
          'Ögat och hjärnan tror att ljuset har gått rakt. De följer strålen rakt bakåt.',
          'Då ser det ut som om spetsen ligger högre upp än den gör.',
          'Hela delen av pennan under vattnet ser ut att ligga högre. Därför ser pennan knäckt ut vid ytan.'
        ] },
        // [BILD C3: pennan i glaset i numrerade steg, sedd från sidan: 1 två strålar går från pennans spets under vatten upp mot ytan · 2 vid ytan bryts båda från normalen · 3 strålarna når pupillens övre och nedre kant (ögat ritat stort så att pupillen har en bredd) · 4 strålarna förlängs rakt bakåt (streckat) och möts i en punkt högre upp, där spetsen ser ut att ligga · 5 pennan ser bruten ut vid vattenytan. Verklig penna heldragen, skenbar del ljus och streckad]
        { id: 'bild-c3', typ: 'figur', namn: 'ljus', lage: 'penna-steg', bildtext: 'Ögat förlänger strålarna rakt bakåt, så spetsen ser ut att ligga högre upp än den gör.' },
        { typ: 'rubrik', text: 'Fisken ligger djupare än den ser ut' },
        { typ: 'text', text: 'Samma sak händer om du står på en brygga och tittar på en fisk i vattnet. Du ser fisken. Men fisken är längre ned än den ser ut att vara. Om du vill fånga fisken med en håv måste du sikta lite under den.' },
        // [BILD C4: fisken under bryggan, sedd från sidan: en person på bryggan tittar snett ned i vattnet. Två strålar från fiskens nos bryts vid ytan och når pupillens övre och nedre kant. Strålarna förlängs streckat bakåt och möts vid en skenbar fisk som ligger högre upp och närmare ytan. Den verkliga fisken heldragen, den skenbara ljus. Strukturfigur med namn: verklig fisk, skenbar fisk]
        { id: 'bild-c4', typ: 'figur', namn: 'ljus', lage: 'fisk', bildtext: 'Fisken ser ut att ligga högre upp och närmare ytan än den gör.' },
        { typ: 'text', text: 'Därför ser också en pool eller en klar sjö grundare ut än den är. Om du tittar rakt ned ser vattnet ut att vara ungefär tre fjärdedelar så djupt som det är. En pool som är fyra meter djup ser ut att vara tre meter djup. Därför är det svårt att se hur djupt vatten är bara genom att titta. Dyk aldrig där du inte vet hur djupt det är.' },
        { typ: 'text', text: 'Repet till en båts ankare ser också ut att knäckas vid vattenytan, av samma skäl.' },
        { typ: 'rubrik', text: 'Ett fönster flyttar bara ljuset lite åt sidan' },
        { typ: 'text', text: 'Ljus som går snett genom en fönsterruta bryts två gånger:' },
        { typ: 'punkter', punkter: [
          'När det går in i glaset bryts det mot normalen.',
          'När det går ut i luften igen bryts det lika mycket från normalen.',
          'Därför kommer ljuset ut åt samma håll som det kom in. Det har bara flyttats lite åt sidan.'
        ] },
        // [BILD C5: en stråle genom en tjock glasskiva, strukturfigur: strålen kommer snett in, bryts mot normalen i glaset, bryts lika mycket från normalen ut, och fortsätter parallellt med den inkommande strålen. Den inkommande strålens förlängning streckad visar förskjutningen. Normaler streckade]
        { id: 'bild-c5', typ: 'figur', namn: 'ljus', lage: 'glasskiva', bildtext: 'Strålen bryts lika mycket in i glaset som ut. Den fortsätter parallellt med den inkommande, men förskjuten.' },
        { typ: 'text', text: 'Ett vanligt fönster är så tunt att du inte märker något. Världen ser vanlig ut genom fönstret. Men om du tittar genom ett tjockt glasblock kan du se att det som ligger bakom verkar flyttat åt sidan.' }
      ]
    },
    {
      id: 'totalreflektion', titel: 'Totalreflektion',
      block: [
        { typ: 'rubrik', text: 'Ibland kommer ljuset inte ut alls' },
        { typ: 'text', text: 'Tänk dig att du har en vattentät lampa längst ned på botten av en pool. Du lyser upp mot vattenytan. Så här händer det när du lutar lampan mer och mer:' },
        { typ: 'punkter', punkter: [
          'Du lyser rakt upp. Ljuset går rakt ut i luften.',
          'Du lutar lampan lite. Ljuset bryts från normalen när det kommer ut.',
          'Du lutar lampan mer. Ljuset bryts ännu mer.',
          'När lampan lutar ungefär 49 grader från normalen bryts ljuset så mycket att det går precis längs vattenytan.',
          'Du lutar lampan ännu lite till. Nu kommer inget ljus ut i luften alls. Allt ljus studsar tillbaka ned i vattnet.'
        ] },
        { typ: 'text', text: 'Det sista kallas *totalreflektion*. Vattenytans undersida fungerar då som en perfekt spegel.' },
        // [BILD C6: fem lampor på botten av en pool i numrerade steg, från vänster till höger allt snettare: 1 rakt upp – strålen går rakt ut · 2 snett – strålen bryts från normalen · 3 ännu snettare – strålen bryts mer · 4 infallsvinkel ca 49° – brytningsvinkeln är 90° och strålen går längs ytan · 5 mer än 49° – allt ljus reflekteras tillbaka ned i vattnet, totalreflektion. En svag reflekterad stråle ritas också i steg 2–4. Normaler streckade]
        { id: 'bild-c6', typ: 'figur', namn: 'ljus', lage: 'pool', bildtext: 'Ju snettare ljuset träffar ytan, desto mer bryts det. Vid ca 49° går strålen längs ytan, och vid större vinkel reflekteras allt ljus.' },
        { typ: 'text', text: 'Totalreflektion kan bara hända när ljuset är på väg ut i ett optiskt tunnare ämne. Det kan vara från vatten till luft, eller från glas till luft. Vinkeln där totalreflektionen börjar kallas *gränsvinkel*. I vatten är gränsvinkeln ungefär 49 grader. I glas är den ungefär 42 grader.' },
        { typ: 'text', text: 'Du kan se totalreflektion själv. Dyk ned i en simbassäng och titta snett upp mot ytan. Där ser ytan ut som en blank spegel. Du ser botten av poolen i den.' },
        { typ: 'rubrik', text: 'Fiberoptik skickar ljus genom glastrådar' },
        { typ: 'text', text: 'En optisk fiber är en tunn tråd av väldigt rent glas. Den är ungefär lika tjock som ett hårstrå. Så här tar sig ljuset fram i den:' },
        { typ: 'punkter', punkter: [
          'Ljus skickas in i ena änden av tråden.',
          'Ljuset träffar trådens sida mycket snett, med större infallsvinkel än gränsvinkeln.',
          'Därför totalreflekteras det. Inget ljus kommer ut genom sidan.',
          'Ljuset studsar fram genom tråden. Det fungerar även om tråden böjer sig, så länge den inte böjs för skarpt.',
          'Ljuset kommer ut i andra änden.'
        ] },
        { typ: 'text', text: 'Det här kallas *fiberoptik*. Runt glastråden finns ett skikt som har lite lägre optisk täthet. Det gör att totalreflektionen fungerar, även om tråden blir smutsig eller sliten på utsidan.' },
        // [BILD C7: ljus i en optisk fiber, strukturfigur: en måttligt böjd glastråd i genomskärning med kärna och mantel, en stråle som går in i ena änden och totalreflekteras i sicksack mot mantelns gräns hela vägen till andra änden. Namn: kärna, mantel, totalreflektion]
        { id: 'bild-c7', typ: 'figur', namn: 'ljus', lage: 'fiber', bildtext: 'Ljuset totalreflekteras mot manteln hela vägen genom fibern, också där den böjer.' },
        { typ: 'text', text: 'Optiska fibrer används till mycket. Nästan allt du gör på internet skickas någon del av vägen genom fibrer, som snabba blinkningar av ljus. Det ligger kablar med fibrer på havets botten mellan olika världsdelar.' },
        { typ: 'text', text: 'Läkare använder också fibrer. Ett gastroskop är en tunn slang som förs ned i magen. En del av fibrerna i slangen leder ljus ned i magen. Andra fibrer skickar bilden tillbaka till en skärm.' },
        { typ: 'text', text: 'Även många reflexer bygger på totalreflektion. I texten om speglar såg du att en cykelreflex har små hörn med tre ytor. Ytorna fungerar som speglar. Men det är totalreflektion i plasten som skickar tillbaka ljuset. Därför behöver reflexen ingen metall.' }
      ]
    },
    {
      id: 'hagringen', titel: 'Hägringen',
      block: [
        { typ: 'rubrik', text: 'Vatten på vägen som inte finns' },
        { typ: 'text', text: 'En varm sommardag kan det se ut som om det ligger vatten på vägen långt framför bilen. När du kommer närmare är vägen helt torr. Det du såg var inte vatten. Det var himlen.' },
        { typ: 'text', text: 'Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Solen har gjort asfalten väldigt varm.',
          'Asfalten värmer luften närmast vägen. Där är luften varmast.',
          'Varm luft är tunnare än kall luft. I tunnare luft går ljuset en aning fortare.',
          'Ljus från himlen går snett nedåt mot vägen. Det kommer in i luft som blir varmare och varmare.',
          'Därför böjs ljuset lite i taget uppåt, tills det går upp mot ditt öga.',
          'Ögat följer strålen rakt bakåt. Då ser det ut som om himlen ligger på vägen.',
          'Himlen på vägen ser ut som en blank vattenyta.'
        ] },
        { typ: 'text', text: 'Det kallas en *hägring*.' },
        // [BILD C8: hägring på varm väg i numrerade steg, sedd från sidan: 1 ljus från himlen går snett nedåt mot vägen långt fram · 2 närmast asfalten är luften varmast (markerat med allt ljusare skikt) · 3 strålen böjs gradvis uppåt i en jämn båge, utan något knä · 4 strålen når bilistens öga · 5 ögat förlänger strålen rakt bakåt (streckat), och himlen syns som en blank fläck på vägen]
        { id: 'bild-c8', typ: 'figur', namn: 'ljus', lage: 'hagring', bildtext: 'Strålen från himlen böjs gradvis uppåt i den varma luften. Ögat förlänger den rakt bakåt, och himlen syns på vägen.' },
        { typ: 'text', text: 'I många böcker står det att en hägring är totalreflektion. Men det finns ingen skarp yta där ljuset studsar. Ljuset böjs lite i taget, eftersom luften blir varmare lite i taget.' },
        { typ: 'text', text: 'Här spelar tätheten faktiskt roll. Det beror på att det är samma ämne, luft, som är lite tunnare på ett ställe och lite tätare på ett annat. Det är när man jämför olika ämnen, som olja och vatten, som densiteten inte avgör.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljuset går olika fort i olika ämnen. Det går fortast i luft, långsammare i vatten och ännu långsammare i glas.',
          'Ett ämne där ljuset går långsamt har hög optisk täthet. Det är inte samma sak som densitet.',
          'När ljuset kommer snett från ett ämne till ett annat byter det riktning. Det kallas att ljuset bryts.',
          'In i ett optiskt tätare ämne bryts ljuset mot normalen. Ut i ett optiskt tunnare ämne bryts det från normalen.',
          'Om ljuset kommer rakt mot ytan ändras hastigheten, men inte riktningen.',
          'Brytningen lurar ögat. Pennan ser knäckt ut. Fisken ligger djupare än den ser ut. Poolen är djupare än den ser ut.',
          'Totalreflektion betyder att allt ljus studsar tillbaka. Det händer när ljuset går ut i ett optiskt tunnare ämne och kommer tillräckligt snett.',
          'Optiska fibrer och reflexer använder totalreflektion.',
          'En hägring uppstår när ljus från himlen böjs uppåt i den varma luften över en väg.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
