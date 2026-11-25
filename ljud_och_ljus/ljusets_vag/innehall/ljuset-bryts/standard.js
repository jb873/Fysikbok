/* Avsnittssida III. Ljusets väg, text C: Ljuset bryts – nivån standard (📘).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-C-Ljuset-bryts-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiic.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljuset byter riktning när det byter ämne' },
        { typ: 'text', text: 'Ställ en penna snett i ett glas vatten och titta från sidan. Pennan ser ut att vara bruten precis vid vattenytan. Stå vid kanten av en pool, och botten ser ut att ligga närmare än den gör. Pennan är hel och poolen är djup. Det är ljuset som har bytt riktning på vägen till ditt öga. I den här texten får du veta varför, och hur samma sak gör att internet kan skickas genom trådar av glas.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att ljuset går olika fort i olika ämnen, och vad *optisk täthet* betyder',
          'varför ljuset byter riktning, alltså *bryts|bryta*, när det går från ett ämne till ett annat',
          'varför saker under vatten ser ut att ligga högre upp än de gör',
          'vad *totalreflektion* är och hur den används i *fiberoptik*',
          'hur en hägring på en varm väg uppstår'
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
        { typ: 'text', text: 'I texten om ljus och seende såg du att ljuset går nästan 300 000 km/s i luft, men långsammare i andra genomskinliga ämnen. I vatten går det ungefär 225 000 km/s, i vanligt glas omkring 200 000 km/s och i diamant bara omkring 124 000 km/s. Ett ämne där ljuset går långsamt sägs ha hög *optisk täthet*. Vatten är optiskt tätare än luft, och glas är optiskt tätare än vatten.' },
        { typ: 'rubrik', text: 'Många tror att det är densiteten som avgör' },
        { typ: 'text', text: 'Ordet täthet får många att tro att det handlar om densitet, alltså hur tungt ämnet är per liter. Men det gör det inte. Matolja har lägre densitet än vatten och flyter ovanpå. Ändå är olja optiskt tätare än vatten, och ljuset går långsammare i oljan. Det som avgör är hur ämnets partiklar påverkar ljuset, inte hur tunga de är. Jämför med ljudet: ljud går fortare i vatten än i luft, ljus går långsammare. Ljud och ljus är olika sorters vågor och påverkas av olika egenskaper hos ämnet.' }
      ]
    },
    {
      id: 'stralen-byter-riktning', titel: 'Strålen byter riktning',
      block: [
        { typ: 'rubrik', text: 'Den del av ljuset som kommer fram först saktar in först' },
        { typ: 'text', text: 'Ljus kan beskrivas som en våg som rör sig fram. Tänk på en rad elever som går arm i arm på en plan asfaltsyta och kommer snett mot ett fält med djup snö. Den elev som når snön först börjar gå långsammare, medan de andra fortfarande går lika fort på asfalten. Raden vrids. När alla har kommit ut i snön går raden rakt igen, men åt ett annat håll än förut. Samma sak händer med ljusvågen när den kommer snett mot vattenytan. Den del av vågen som når vattnet först saktar in först, och vågen vrids. Man säger att ljuset *bryts|bryta*.' },
        // [BILD C1: vågfronten vid vattenytan i numrerade steg, sedd från sidan: 1 en bred ljusvåg (rader av vågfronter vinkelräta mot strålen) kommer snett ned mot vattenytan · 2 vänstra kanten av vågfronten når vattnet först och går långsammare, vågfronterna ligger tätare i vattnet · 3 högra kanten är fortfarande i luften och går fortare · 4 vågfronten har vridits och strålen går brantare nedåt i vattnet. Strålen ritad #c2410c genom vågfronternas mitt. Geometrin kontrolleras: vågfronterna är hela tiden vinkelräta mot strålen, och avståndet mellan vågfronterna i vattnet är 3/4 av avståndet i luft]
        { id: 'bild-c1', typ: 'figur', namn: 'ljus', lage: 'vagfront', bildtext: 'Vågfrontens vänstra kant når vattnet först och går långsammare. Fronterna kommer tätare och vrids, och strålen bryts mot normalen.' },
        { typ: 'text', text: 'Om ljuset kommer rakt mot ytan når hela vågen vattnet samtidigt. Då saktar hela vågen in på en gång, och ljuset fortsätter rakt fram. Hastigheten ändras, men inte riktningen. Riktningen ändras bara när ljuset kommer snett.' },
        { typ: 'rubrik', text: 'Mot normalen in, från normalen ut' },
        { typ: 'text', text: 'Precis som vid reflektion mäter man vinklarna mot normalen, den tänkta linjen vinkelrätt mot ytan. Vinkeln mellan den inkommande strålen och normalen är infallsvinkeln. Vinkeln mellan den brutna strålen och normalen kallas *brytningsvinkel*.' },
        { typ: 'text', text: 'När ljuset går in i ett optiskt tätare ämne, till exempel från luft till vatten, bryts det mot normalen. Brytningsvinkeln blir mindre än infallsvinkeln. När ljuset går ut i ett optiskt tunnare ämne, från vatten till luft, bryts det från normalen. Brytningsvinkeln blir större än infallsvinkeln. Ljuset kan gå samma väg åt båda hållen, så det är samma brytning som körs baklänges.' },
        // [BILD C2: brytning i två fall sida vid sida, strukturfigur. Vänster luft → vatten: inkommande stråle från vänster uppe, en svag reflekterad stråle uppåt höger, en bruten stråle i vattnet närmare normalen, normalen streckad. Höger vatten → luft: stråle nedifrån vänster, bruten stråle i luften längre från normalen. Namn: normal, infallsvinkel, brytningsvinkel, reflekterat ljus, luft, vatten]
        { id: 'bild-c2', typ: 'figur', namn: 'ljus', lage: 'brytning-tva', bildtext: 'Från luft till vatten bryts ljuset mot normalen, från vatten till luft från normalen. Lite ljus reflekteras vid ytan.' },
        { typ: 'text', text: 'Vid ytan händer oftast två saker samtidigt. Det mesta av ljuset går in i vattnet och bryts, men en liten del reflekteras. Det är därför du ser både botten och en svag spegelbild av himlen när du tittar ned i en sjö.' }
      ]
    },
    {
      id: 'brytningen-lurar-ogat', titel: 'Brytningen lurar ögat',
      block: [
        { typ: 'rubrik', text: 'Pennan i glaset' },
        { typ: 'text', text: 'Hjärnan förutsätter, som du såg med spegeln, att ljuset har gått rakt hela vägen. När ljus från pennans spets under vatten når ytan bryts det från normalen och fortsätter mot ditt öga. Ögat följer strålen rakt bakåt, och då hamnar den skenbara spetsen högre upp än den verkliga. Den del av pennan som är under vatten ser ut att ligga högre, och pennan ser bruten ut vid ytan.' },
        // [BILD C3: pennan i glaset i numrerade steg, sedd från sidan: 1 två strålar går från pennans spets under vatten upp mot ytan · 2 vid ytan bryts båda från normalen · 3 strålarna når pupillens övre och nedre kant (ögat ritat stort så att pupillen har en bredd) · 4 strålarna förlängs rakt bakåt (streckat) och möts i en punkt högre upp, där spetsen ser ut att ligga · 5 pennan ser bruten ut vid vattenytan. Verklig penna heldragen, skenbar del ljus och streckad]
        { id: 'bild-c3', typ: 'figur', namn: 'ljus', lage: 'penna-steg', bildtext: 'Ögat förlänger strålarna rakt bakåt, så spetsen ser ut att ligga högre upp än den gör.' },
        { typ: 'rubrik', text: 'Fisken ligger djupare än den ser ut' },
        { typ: 'text', text: 'Samma sak händer när du tittar på en fisk i vattnet från en brygga. Fisken syns, men den är längre ned än den ser ut att vara. Den som vill fånga fisken med håv eller spjut måste sikta under fisken. Därför ser också en pool eller en klar sjö grundare ut än den är. Tittar man rakt ned ser vattnet ungefär tre fjärdedelar så djupt ut som det verkligen är. Därför är det svårt att bedöma vattendjupet bara genom att titta. Man ska aldrig dyka där man inte vet hur djupt det är. Ankarrepet till en båt ser också ut att knäckas vid vattenytan.' },
        // [BILD C4: fisken under bryggan, sedd från sidan: en person på bryggan tittar snett ned i vattnet. Två strålar från fiskens nos bryts vid ytan och når pupillens övre och nedre kant. Strålarna förlängs streckat bakåt och möts vid en skenbar fisk som ligger högre upp och närmare ytan. Den verkliga fisken heldragen, den skenbara ljus. Strukturfigur med namn: verklig fisk, skenbar fisk]
        { id: 'bild-c4', typ: 'figur', namn: 'ljus', lage: 'fisk', bildtext: 'Fisken ser ut att ligga högre upp och närmare ytan än den gör.' },
        { typ: 'rubrik', text: 'Ett fönster flyttar bara ljuset lite åt sidan' },
        { typ: 'text', text: 'När ljus går snett genom en fönsterruta bryts det två gånger: mot normalen när det går in i glaset och lika mycket från normalen när det går ut. Strålen kommer ut åt samma håll som den kom in, bara lite förskjuten åt sidan. Därför ser världen genom ett fönster inte förvrängd ut. Genom ett tjockt glasblock kan man däremot se att det som ligger bakom verkar flyttat.' },
        // [BILD C5: en stråle genom en tjock glasskiva, strukturfigur: strålen kommer snett in, bryts mot normalen i glaset, bryts lika mycket från normalen ut, och fortsätter parallellt med den inkommande strålen. Den inkommande strålens förlängning streckad visar förskjutningen. Normaler streckade]
        { id: 'bild-c5', typ: 'figur', namn: 'ljus', lage: 'glasskiva', bildtext: 'Strålen bryts lika mycket in i glaset som ut. Den fortsätter parallellt med den inkommande, men förskjuten.' }
      ]
    },
    {
      id: 'totalreflektion', titel: 'Totalreflektion',
      block: [
        { typ: 'rubrik', text: 'Ibland kommer ljuset inte ut alls' },
        { typ: 'text', text: 'Tänk dig att du lyser med en vattentät lampa från botten av en pool upp mot ytan. Riktar du lampan rakt upp går ljuset rakt ut i luften. Lutar du lampan bryts strålen från normalen när den kommer ut, och den bildar en större vinkel än innan. Lutar du ännu mer blir brytningsvinkeln till slut 90°, och då går strålen precis längs vattenytan. För vatten händer det när infallsvinkeln är ungefär 49°. Lutar du ännu lite till kommer inget ljus ut alls. Allt ljus reflekteras tillbaka ned i vattnet, som om vattenytans undersida vore en perfekt spegel. Det kallas *totalreflektion*.' },
        // [BILD C6: fem lampor på botten av en pool i numrerade steg, från vänster till höger allt snettare: 1 rakt upp – strålen går rakt ut · 2 snett – strålen bryts från normalen · 3 ännu snettare – strålen bryts mer · 4 infallsvinkel ca 49° – brytningsvinkeln är 90° och strålen går längs ytan · 5 mer än 49° – allt ljus reflekteras tillbaka ned i vattnet, totalreflektion. En svag reflekterad stråle ritas också i steg 2–4. Normaler streckade]
        { id: 'bild-c6', typ: 'figur', namn: 'ljus', lage: 'pool', bildtext: 'Ju snettare ljuset träffar ytan, desto mer bryts det. Vid ca 49° går strålen längs ytan, och vid större vinkel reflekteras allt ljus.' },
        { typ: 'text', text: 'Totalreflektion kan bara hända när ljuset är på väg ut i ett optiskt tunnare ämne, till exempel från vatten eller glas till luft. Den vinkel där det börjar kallas *gränsvinkel*. I glas är gränsvinkeln ungefär 42°, i vatten ungefär 49°. Du kan se totalreflektion om du dyker ned i en simbassäng och tittar snett upp mot ytan. Där ser ytan ut som en blank spegel som visar botten.' },
        { typ: 'rubrik', text: 'Fiberoptik skickar ljus genom glastrådar' },
        { typ: 'text', text: 'En optisk fiber är en tunn tråd av mycket rent glas, ungefär lika tjock som ett hårstrå. När ljus skickas in i ena änden träffar det trådens sida så snett att det totalreflekteras. Ljuset studsar fram genom tråden, även när den böjer sig, så länge böjen inte är för skarp, och kommer ut i andra änden. Det kallas *fiberoptik*. Runt glaset finns ett skikt med lite lägre optisk täthet, så att totalreflektionen fungerar även om tråden blir smutsig eller nött.' },
        // [BILD C7: ljus i en optisk fiber, strukturfigur: en måttligt böjd glastråd i genomskärning med kärna och mantel, en stråle som går in i ena änden och totalreflekteras i sicksack mot mantelns gräns hela vägen till andra änden. Namn: kärna, mantel, totalreflektion]
        { id: 'bild-c7', typ: 'figur', namn: 'ljus', lage: 'fiber', bildtext: 'Ljuset totalreflekteras mot manteln hela vägen genom fibern, också där den böjer.' },
        { typ: 'text', text: 'Nästan all information på internet går någon del av vägen genom optiska fibrer, som korta ljusblinkningar i mycket högt tempo. Kablar med fibrer ligger på havets botten mellan kontinenterna. Läkare använder fibrer i ett gastroskop, en tunn slang som förs ned i magen. En del fibrer leder ljus ned, andra skickar bilden tillbaka till en skärm.' },
        { typ: 'text', text: 'Även många reflexer bygger på totalreflektion. I en cykelreflex av plast fungerar de tre ytorna i varje hörn som speglar, men det är totalreflektion i plasten som skickar tillbaka ljuset. Ingen metallbeläggning behövs.' }
      ]
    },
    {
      id: 'hagringen', titel: 'Hägringen',
      block: [
        { typ: 'rubrik', text: 'Vatten på vägen som inte finns' },
        { typ: 'text', text: 'En varm sommardag kan det se ut som om det ligger vatten på vägen långt fram. När du kommer närmare är vägen torr. Det du såg var inte vatten, utan himlen. Asfalten är mycket varm och värmer luften närmast vägen. Varm luft är tunnare än kall luft, och i tunnare luft går ljuset en aning fortare. Ljus från himlen som går snett nedåt mot vägen kommer därför in i allt tunnare luft och böjs gradvis uppåt, tills det går upp mot ditt öga. Ögat följer strålen rakt bakåt, och den skenbara himlen hamnar på vägen. Det ser ut som en blank vattenyta. Det kallas en *hägring*.' },
        // [BILD C8: hägring på varm väg i numrerade steg, sedd från sidan: 1 ljus från himlen går snett nedåt mot vägen långt fram · 2 närmast asfalten är luften varmast (markerat med allt ljusare skikt) · 3 strålen böjs gradvis uppåt i en jämn båge, utan något knä · 4 strålen når bilistens öga · 5 ögat förlänger strålen rakt bakåt (streckat), och himlen syns som en blank fläck på vägen]
        { id: 'bild-c8', typ: 'figur', namn: 'ljus', lage: 'hagring', bildtext: 'Strålen från himlen böjs gradvis uppåt i den varma luften. Ögat förlänger den rakt bakåt, och himlen syns på vägen.' },
        { typ: 'text', text: 'Många läroböcker beskriver hägringen som totalreflektion. Men det finns ingen skarp yta där ljuset studsar. Strålen böjs lite i taget, eftersom luftens temperatur ändras lite i taget. Inom ett och samma ämne, som luft, kan tätheten alltså spela in. Det är jämförelser mellan olika ämnen, som olja och vatten, där densiteten inte avgör.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljuset går olika fort i olika ämnen: nästan 300 000 km/s i luft, ca 225 000 km/s i vatten och ca 200 000 km/s i glas. Ett ämne där ljuset går långsamt har hög optisk täthet. Det är inte samma sak som densitet.',
          'När ljuset kommer snett från ett ämne till ett annat byter det riktning. Det kallas att ljuset bryts. Den del av vågen som kommer in först saktar in först.',
          'In i ett optiskt tätare ämne bryts ljuset mot normalen, ut i ett optiskt tunnare ämne bryts det från normalen. Rakt in ändras hastigheten men inte riktningen.',
          'Brytningen gör att saker under vatten ser ut att ligga högre upp än de gör. Pennan ser bruten ut, fisken ligger djupare och poolen är djupare än den ser ut.',
          'När ljus går ut i ett optiskt tunnare ämne och infallsvinkeln är större än gränsvinkeln reflekteras allt ljus tillbaka. Det kallas totalreflektion. Det används i optiska fibrer och i reflexer.',
          'En hägring på en varm väg uppstår när ljuset från himlen böjs gradvis uppåt i den varma luften närmast vägen.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
