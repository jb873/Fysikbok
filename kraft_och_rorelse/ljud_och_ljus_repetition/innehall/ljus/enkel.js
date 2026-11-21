/* Avsnittssida VI. Repetition: ljud och ljus, text B: Ljus – nivån enkel (📗).
 * Arbetsorder 30 (2026-11-20): kallor/kap3/VI-B-Repetition-Ljus-alla-nivaer-v3.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vib.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Repetition: ljus' },
        { typ: 'text', text: 'Tänk dig att strömmen går en kväll när det är mörkt ute. Plötsligt ser du ingenting. Vi behöver ljus för att se. I den här repetitionen går vi igenom det viktigaste om ljus, steg för steg. Det är bra att kunna inför provet.' },
        { typ: 'underrubrik', text: 'Det här repeterar du' },
        { typ: 'punkter', punkter: [
          'vad en *ljuskälla* är och hur fort ljuset går',
          'hur ljus *reflekteras* i speglar',
          'hur ljus *bryts* när det går in i vatten och glas',
          'hur *linser* fungerar',
          'hur ögat fungerar och hur glasögon hjälper',
          'varför saker har olika färger',
          'ljus som vi inte kan se'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'ljusets-vag', titel: 'Ljuset färdas rakt och snabbt',
      block: [
        { typ: 'rubrik', text: 'En ljuskälla lyser själv' },
        { typ: 'text', text: 'En *ljuskälla* är något som skickar ut eget ljus. Solen, en lampa, en ficklampa och en eld är ljuskällor.' },
        { typ: 'text', text: 'De flesta saker omkring dig är inte ljuskällor. Ett bord eller en bok lyser inte själv. Du ser dem för att ljus från en lampa eller solen träffar dem och studsar vidare in i dina ögon.' },
        { typ: 'text', text: 'Månen är inte heller en ljuskälla, fast den lyser på natten. Den lyser för att solljuset studsar mot den.' },
        { typ: 'rubrik', text: 'Ljuset går rakt fram, och därför blir det skuggor' },
        { typ: 'text', text: 'Ljuset går i raka linjer. Det kan inte böja sig runt saker. Därför blir det en skugga bakom något som ljuset inte kan gå igenom. Skuggans form beror på hur saken ser ut och varifrån ljuset kommer. När man ritar ljus ritar man därför raka linjer som kallas *ljusstrålar*.' },
        { typ: 'rubrik', text: 'Tre saker kan hända när ljuset träffar något' },
        { typ: 'text', text: 'När ljus träffar en sak kan tre saker hända. Ljuset kan *absorberas*. Det betyder att saken tar upp ljuset, och ljuset blir då värme. Ljuset kan också *reflekteras*. Det betyder att ljuset studsar tillbaka. Till sist kan ljuset gå igenom saken, om saken är genomskinlig. Genomskinligt kallas också *transparent|transparent*. Glas och vatten är transparenta. Ofta händer flera av sakerna samtidigt.' },
        // [BILD B1: tre föremål i samma ljus bredvid varandra: ett svart som absorberar (pilen tar slut, "värme"), en spegel som reflekterar (pilen studsar), en glasruta som släpper igenom (pilen fortsätter); bakom ett ogenomskinligt föremål en skugga som följer föremålets form]
        { id: 'bild-b1', typ: 'figur', namn: 'ljus', lage: 'foremal', bildtext: 'Ljuset kan absorberas, reflekteras eller gå igenom.' },
        { typ: 'rubrik', text: 'Inget går fortare än ljuset' },
        { typ: 'text', text: 'Ljuset går nästan 300 000 kilometer varje sekund. Det är det snabbaste som finns. Ljuset från solen tar ändå drygt 8 minuter på sig att komma till jorden, eftersom solen är så långt bort.' },
        { typ: 'text', text: 'Ljus kan gå genom vakuum, alltså tom rymd. Det kan inte ljud. Därför når solljuset oss, men inte ljudet från solen.' },
        { typ: 'text', text: 'I vatten och glas går ljuset lite långsammare. I vatten går det ungefär 225 000 km/s och i glas ungefär 200 000 km/s.' }
      ]
    },
    {
      id: 'reflektion', titel: 'Reflektion och speglar',
      block: [
        { typ: 'rubrik', text: 'Ljuset studsar med samma vinkel som det kommer in' },
        { typ: 'text', text: 'När en ljusstråle träffar en spegel studsar den, ungefär som en boll som studsar mot en vägg eller en biljardboll mot kanten.' },
        { typ: 'text', text: 'För att mäta vinklarna ritar man en tänkt linje som står rakt ut från spegeln där strålen träffar. Linjen kallas *normal|normal*.' },
        { typ: 'punkter', punkter: [
          'Vinkeln mellan strålen som kommer in och normalen kallas *infallsvinkel*.',
          'Vinkeln mellan strålen som studsar ut och normalen kallas *reflektionsvinkel*.'
        ] },
        { typ: 'text', text: '*Reflektionslagen|reflektionslagen* säger att de två vinklarna alltid är lika stora.' },
        // [BILD B2: en ljusstråle mot en plan spegel; normalen streckad; infallsvinkel och reflektionsvinkel utmärkta och lika stora]
        { id: 'bild-b2', typ: 'figur', namn: 'ljus', lage: 'reflektion', bildtext: 'Infallsvinkeln är lika stor som reflektionsvinkeln.' },
        { typ: 'rubrik', text: 'Släta ytor ger spegelbild, skrovliga sprider ljuset' },
        { typ: 'text', text: 'En spegel och en vit vägg reflekterar båda mycket ljus. Men du ser dig själv bara i spegeln. Varför?' },
        { typ: 'text', text: 'Spegeln är helt slät. Allt ljus studsar åt samma håll, och då blir det en spegelbild. Väggen ser slät ut, men den är skrovlig om man tittar riktigt nära. Ljuset träffar små gropar och kullar och studsar åt alla möjliga håll. Därför ser du väggen, men ingen spegelbild.' },
        { typ: 'rubrik', text: 'Spegelbilden ser ut att vara bakom spegeln' },
        { typ: 'text', text: 'När du tittar i en spegel ser det ut som om det finns ett rum bakom den. Så här går det till, steg för steg:' },
        { typ: 'punkter', punkter: [
          'En lampa lyser på en blomma.',
          'Ljuset från blomman studsar i spegeln.',
          'Ljuset kommer in i ditt öga.',
          'Ditt öga tror att ljuset har gått rakt hela tiden. Därför ser blomman ut att stå bakom spegeln, lika långt bakom som den står framför.'
        ] },
        // [BILD B3: numrerade steg: 1 en lampa lyser på en blomma · 2 ljuset från blomman reflekteras i spegeln med lika stora vinklar · 3 strålarna når ögat · 4 ögat följer strålarna bakåt (streckat) – spegelbilden ser ut att stå lika långt bakom spegeln som blomman står framför]
        { id: 'bild-b3', typ: 'figur', namn: 'ljus', lage: 'spegelbild', bildtext: 'Spegelbilden ser ut att stå lika långt bakom spegeln.' },
        { typ: 'rubrik', text: 'Böjda speglar' },
        { typ: 'text', text: 'Det finns också speglar som är böjda.' },
        { typ: 'text', text: 'En spegel som buktar inåt, som insidan av en sked, kallas *konkav*. Den samlar ljuset i en punkt som kallas *brännpunkten*. Om man sätter en lampa i brännpunkten går allt ljus åt samma håll. Därför finns det konkava speglar i ficklampor. Om du håller ansiktet nära en konkav spegel ser det större ut. Därför används den som sminkspegel.' },
        { typ: 'text', text: 'En spegel som buktar utåt, som baksidan av en sked, kallas *konvex*. Den sprider ljuset. I en konvex spegel ser allt mindre ut, men du ser mer av det som finns omkring. Därför sitter det konvexa speglar i vägkorsningar där man inte kan se runt hörnet.' },
        // [BILD B4: konkav och konvex spegel bredvid varandra; parallella strålar som samlas i brännpunkten respektive sprids ut]
        { id: 'bild-b4', typ: 'figur', namn: 'ljus', lage: 'speglar', bildtext: 'En konkav spegel samlar ljuset, en konvex sprider det.' }
      ]
    },
    {
      id: 'brytning', titel: 'Brytning',
      block: [
        { typ: 'rubrik', text: 'Ljuset viker av när det går in i vatten' },
        { typ: 'text', text: 'När ljus går snett in i vatten eller glas ändrar det riktning. Det kallas att ljuset *bryts*.' },
        { typ: 'text', text: 'Varför gör det så? Ljuset går långsammare i vatten än i luft. Tänk dig en bil som kör snett från en asfaltväg ut på sand. Det ena framhjulet kommer ut på sanden först. Det hjulet bromsas, men det andra hjulet rullar fortfarande fort på asfalten. Då svänger bilen.' },
        { typ: 'text', text: 'Ljuset gör likadant, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Ljusstrålen kommer snett mot vattenytan.',
          'Den ena sidan av ljusvågen når vattnet först och går långsammare.',
          'Hela strålen viker av och går i en ny riktning.'
        ] },
        // [BILD B5: numrerade steg: 1 en bred ljusstråle med vågfronter (tvärgående streck) går snett mot vattenytan · 2 ena sidan av vågfronten når vattnet först och saktar in, vågfronterna hamnar tätare · 3 strålen viker av mot normalen i vattnet; infallsvinkel och brytningsvinkel utmärkta, brytningsvinkeln mindre]
        { id: 'bild-b5', typ: 'figur', namn: 'ljus', lage: 'brytning', bildtext: 'Den sida som når vattnet först saktar in först, och strålen viker av.' },
        { typ: 'text', text: 'Ett ämne där ljuset går långsamt kallas *optiskt tätare*. Vatten är optiskt tätare än luft. Det handlar bara om hur fort ljuset går, inte om hur tungt ämnet är.' },
        { typ: 'text', text: 'När ljuset går från luft till vatten viker det av in mot normalen. När ljuset går tillbaka från vatten till luft viker det av bort från normalen. Om ljuset går rakt in, längs normalen, går det långsammare men fortsätter rakt fram.' },
        { typ: 'rubrik', text: 'En penna i vatten ser bruten ut' },
        { typ: 'text', text: 'Ställ en penna snett i ett glas vatten. Den ser ut att vara knäckt vid vattenytan. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Ljuset från spetsen av pennan går upp genom vattnet.',
          'Vid vattenytan bryts ljuset och ändrar riktning.',
          'Ditt öga tror att ljuset har gått rakt hela vägen.',
          'Därför ser spetsen ut att vara högre upp än den är, och pennan ser bruten ut.'
        ] },
        // [BILD B6: numrerade steg: 1 ljuset från pennans spets under vattnet går upp mot ytan · 2 vid ytan bryts det från normalen · 3 ögat följer strålen bakåt i rak linje (streckat) · 4 spetsen ser ut att ligga högre – pennan ser bruten ut]
        { id: 'bild-b6', typ: 'figur', namn: 'ljus', lage: 'penna', bildtext: 'Ögat följer strålen bakåt, så spetsen ser ut att ligga högre.' },
        { typ: 'text', text: 'Av samma skäl ser en pool grundare ut än den är. Se upp när du hoppar i!' },
        { typ: 'rubrik', text: 'Ibland kommer inget ljus ut alls' },
        { typ: 'text', text: 'När ljus går från vatten upp i luften viker det av. Om strålen går snettare och snettare händer något särskilt:' },
        { typ: 'punkter', punkter: [
          'Först går strålen ut i luften och viker av.',
          'Om den går snettare viker den av så mycket att den går längs vattenytan.',
          'Om den går ännu snettare kommer den inte ut alls. Allt ljus studsar tillbaka ned i vattnet, som mot en spegel.'
        ] },
        { typ: 'text', text: 'Det sista kallas *totalreflektion*.' },
        // [BILD B7: numrerade steg under en vattenyta: 1 strålen går ut och bryts · 2 snettare: strålen går längs ytan · 3 ännu snettare: allt ljus reflekteras tillbaka ned – totalreflektion]
        { id: 'bild-b7', typ: 'figur', namn: 'ljus', lage: 'totalreflektion', bildtext: 'Träffar strålen ytan tillräckligt snett kommer inget ljus ut – det kallas totalreflektion.' },
        { typ: 'text', text: 'Totalreflektion används i *fiberoptik*. En glasfiber är en tunn tråd av glas. Ljuset studsar fram och tillbaka inuti tråden och kan inte komma ut. Därför kan ljuset gå långt genom tråden. Internet fungerar till stor del med sådana fiberkablar. Informationen skickas som blinkande ljus.' }
      ]
    },
    {
      id: 'linser', titel: 'Linser',
      block: [
        { typ: 'rubrik', text: 'En lins är en glasskiva som bryter ljuset' },
        { typ: 'text', text: 'En *lins* är en genomskinlig skiva av glas eller plast med böjda ytor. Glasögon har linser. Lägg märke till skillnaden: en spegel reflekterar ljuset, men en lins bryter ljuset.' },
        { typ: 'rubrik', text: 'En konvex lins samlar ljuset' },
        { typ: 'text', text: 'En lins som är tjockare på mitten kallas *konvex*. Den bryter ljusstrålarna så att de samlas i en punkt. Punkten kallas *brännpunkten*. Avståndet från linsen till brännpunkten kallas *brännvidd*.' },
        { typ: 'text', text: 'Ett förstoringsglas är en konvex lins. Om du håller det i solen samlas allt solljus i brännpunkten. Där blir det så varmt att ett papper kan börja brinna. Om du håller en konvex lins nära det du tittar på ser det större ut.' },
        { typ: 'rubrik', text: 'En konkav lins sprider ljuset' },
        { typ: 'text', text: 'En lins som är tunnare på mitten kallas *konkav*. Den sprider ut ljusstrålarna i stället för att samla dem. Om du tittar på något genom en konkav lins ser det mindre ut.' },
        // [BILD B8: konvex och konkav lins bredvid varandra; parallella strålar som samlas i brännpunkten (brännvidden utmärkt) respektive sprids ut och ser ut att komma från en punkt framför linsen (streckat)]
        { id: 'bild-b8', typ: 'figur', namn: 'ljus', lage: 'linser', bildtext: 'En konvex lins samlar ljuset, en konkav sprider det.' },
        { typ: 'text', text: 'Ju mer böjd en lins är, desto mer bryter den ljuset. Då hamnar brännpunkten närmare linsen, och brännvidden blir kortare.' }
      ]
    },
    {
      id: 'ogat-och-instrument', titel: 'Ögat och optiska instrument',
      block: [
        { typ: 'rubrik', text: 'Ögat fungerar som en kamera' },
        { typ: 'text', text: 'Så här ser du, steg för steg:' },
        { typ: 'punkter', punkter: [
          'Ljuset träffar först *hornhinnan|hornhinna*, ögats genomskinliga yta längst fram. Där bryts ljuset för första gången.',
          'Ljuset går in genom pupillen. Pupillen är det svarta hålet mitt i den färgade delen av ögat.',
          'Bakom pupillen sitter ögats lins. Den är konvex och bryter ljuset lite till.',
          'Ljuset samlas längst bak i ögat, på *näthinnan*. Där blir det en skarp bild. Bilden är faktiskt upp och ned.',
          'Näthinnan har celler som känner av ljus. De skickar signaler genom synnerven till hjärnan. Hjärnan tolkar signalerna så att du ser världen rättvänd.'
        ] },
        // [BILD B9: numrerade steg: 1 ljus från ett träd bryts i hornhinnan och går in genom pupillen · 2 linsen bryter ljuset mer · 3 strålarna samlas på näthinnan – bilden blir upp och ned · 4 synnerven leder signalerna till hjärnan – vi uppfattar omgivningen rättvänd]
        { id: 'bild-b9', typ: 'figur', namn: 'ljus', lage: 'ogat', bildtext: 'Bilden på näthinnan blir upp och ned.' },
        { typ: 'rubrik', text: 'Linsen ändrar form' },
        { typ: 'text', text: 'När du tittar på något nära blir linsen rundare. Då bryter den ljuset mer. När du tittar långt bort blir linsen plattare och bryter ljuset mindre. Därför kan du se skarpt både nära och långt bort.' },
        { typ: 'rubrik', text: 'Glasögon hjälper när bilden hamnar fel' },
        { typ: 'text', text: 'Om bilden inte hamnar precis på näthinnan blir allt suddigt. Det finns två vanliga synfel.' },
        { typ: 'text', text: 'Om du är *närsynt* samlas ljuset framför näthinnan. Du ser bra det som är nära, men suddigt det som är långt bort. Då behöver du glasögon med konkava linser. De sprider ut ljuset lite, så att bilden hamnar längre bak, på näthinnan.' },
        { typ: 'text', text: 'Om du är *översynt* samlas ljuset bakom näthinnan. Du ser suddigt det som är nära. Då behöver du glasögon med konvexa linser. De samlar ljuset lite tidigare, så att bilden hamnar på näthinnan.' },
        // [BILD B10: två öga-bilder bredvid varandra: närsynt (strålarna möts framför näthinnan → med konkav lins möts de på näthinnan) och översynt (möts bakom näthinnan → med konvex lins möts de på näthinnan)]
        { id: 'bild-b10', typ: 'figur', namn: 'ljus', lage: 'synfel', bildtext: 'Glasögonen flyttar bilden till näthinnan.' },
        { typ: 'rubrik', text: 'Instrument som hjälper oss att se' },
        { typ: 'text', text: 'Med linser kan vi se saker som ögat inte klarar själv:' },
        { typ: 'punkter', punkter: [
          'En *lupp* är en konvex lins som förstorar små saker, som en insekt eller en ädelsten.',
          'Ett *mikroskop* har två konvexa linser efter varandra. Det förstorar så mycket att man kan se celler och bakterier.',
          'En *kikare* har linser som förstorar och prismor som vänder bilden rätt. Med den kan man se saker som är långt bort.',
          'En *kamera* har en lins som gör en bild på en sensor som känner av ljus. Det fungerar som ögat, där bilden hamnar på näthinnan. För att få en skarp bild flyttar kameran linsen fram och tillbaka.'
        ] }
      ]
    },
    {
      id: 'farger', titel: 'Färger',
      block: [
        { typ: 'rubrik', text: 'Vitt ljus består av alla färger' },
        { typ: 'text', text: 'Solljuset ser vitt ut. Men det är faktiskt en blandning av alla färger.' },
        { typ: 'text', text: 'Om vitt ljus får gå genom ett *prisma* delas det upp i färger. Ett prisma är en glasbit med plana, slipade ytor. Färgerna kommer i en bestämd ordning: rött, orange, gult, grönt, blått och violett. Ett sådant färgband kallas ett *spektrum*.' },
        { typ: 'text', text: 'Ljus är vågor, ungefär som ljud. Avståndet från en vågtopp till nästa kallas *våglängd*. Olika färger har olika våglängd, och därför bryts de olika mycket. Rött ljus har längst våglängd och bryts minst. Violett ljus har kortast våglängd och bryts mest.' },
        // [BILD B11: vitt ljus in i ett prisma, spektrum ut; rött bryts minst, violett mest]
        { id: 'bild-b11', typ: 'figur', namn: 'ljus', lage: 'prisma', bildtext: 'Rött ljus bryts minst och violett mest.' },
        { typ: 'rubrik', text: 'Regnbågen' },
        { typ: 'text', text: 'En regnbåge är solljus som delas upp i regndroppar. Varje droppe fungerar som ett litet prisma. Ljuset går in i droppen, bryts, studsar mot droppens baksida och bryts igen när det går ut.' },
        { typ: 'text', text: 'Därför ser du bara en regnbåge när solen är bakom dig och det regnar framför dig. Rött syns alltid ytterst i bågen och violett innerst.' },
        { typ: 'rubrik', text: 'Därför har saker olika färg' },
        { typ: 'text', text: 'Varför är ett äpple rött? Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Vitt ljus, med alla färger, träffar äpplet.',
          'Äpplet reflekterar främst det röda ljuset. Det röda ljuset kommer in i ditt öga.',
          'Äpplet absorberar det mesta av de andra färgerna. De blir värme.'
        ] },
        { typ: 'text', text: 'Ett blått föremål reflekterar blått ljus. Ett vitt föremål reflekterar alla färger. Ett svart föremål absorberar alla färger.' },
        // [BILD B12: numrerade steg: 1 vitt ljus träffar ett rött äpple · 2 det röda ljuset reflekteras till ögat · 3 de flesta andra färgerna absorberas och blir värme]
        { id: 'bild-b12', typ: 'figur', namn: 'ljus', lage: 'farg', bildtext: 'Äpplet reflekterar främst rött ljus.' },
        { typ: 'text', text: 'Om man lyser på ett rött äpple med bara blått ljus finns det inget rött ljus som kan studsa tillbaka. Då ser äpplet svart ut.' },
        { typ: 'rubrik', text: 'Svarta kläder blir varma i solen' },
        { typ: 'text', text: 'Ljus som absorberas blir värme. En svart tröja absorberar nästan allt ljus. Därför blir den varm på en solig dag. En vit tröja reflekterar det mesta av ljuset och blir inte lika varm. Det är därför många hus i varma länder är vitmålade.' }
      ]
    },
    {
      id: 'osynligt-ljus', titel: 'Ljus som vi inte kan se',
      block: [
        { typ: 'rubrik', text: 'Det finns mer ljus än det vi ser' },
        { typ: 'text', text: 'Det ljus vi ser med ögonen är bara en liten del av en stor familj. Alla i familjen går lika fort som ljuset, men de har olika våglängd. Vi kan inte se de andra, men vi använder dem varje dag.' },
        { typ: 'text', text: 'Här är familjen, från lång till kort våglängd:' },
        { typ: 'punkter', punkter: [
          'radiovågor',
          'mikrovågor',
          'infrarött ljus',
          'synligt ljus',
          'ultraviolett ljus',
          'röntgenstrålning',
          'gammastrålning'
        ] },
        { typ: 'text', text: 'Strålningen kommer i små energipaket. Ju kortare våglängden är, desto mer energi finns i varje paket.' },
        // [BILD B13: hela spektrumet som ett band från lång till kort våglängd med exempel: radio och mobil, mikrovågsugn, värmeelement och fjärrkontroll (IR), regnbågens färger (synligt), solen (UV), röntgenbild, gammastrålning; pil "mer energi per foton" mot kort våglängd]
        { id: 'bild-b13', typ: 'figur', namn: 'ljus', lage: 'spektrum', bildtext: 'Ju kortare våglängd, desto mer energi har varje foton.' },
        { typ: 'rubrik', text: 'Infrarött ljus känns som värme' },
        { typ: 'text', text: '*Infrarött ljus|infrarött ljus*, IR-ljus, har lite längre våglängd än rött ljus. Vi kan inte se det, men vi känner det som värme. Ett element eller en brasa skickar ut mycket IR-ljus. Fjärrkontrollen till tv:n skickar också signaler med IR-ljus.' },
        { typ: 'rubrik', text: 'Ultraviolett ljus kan skada huden' },
        { typ: 'text', text: '*Ultraviolett ljus|ultraviolett ljus*, UV-ljus, har lite kortare våglängd än violett ljus. Det finns i solljuset. UV-ljus har mycket energi och kan skada huden. Det är UV-ljuset som gör att du blir solbränd.' },
        { typ: 'text', text: 'Högt uppe i luften finns ett lager som kallas ozonlagret. Det stoppar nästan allt av det farligaste UV-ljuset och en stor del av resten. Under 1900-talet släppte människor ut ämnen som kallas freoner. De fanns i kylskåp och sprayburkar och förstörde ozonlagret. Nu är freoner förbjudna, och ozonlagret håller sakta på att bli bättre.' },
        { typ: 'rubrik', text: 'Radiovågor, mikrovågor och röntgen' },
        { typ: 'text', text: 'Radiovågor och mikrovågor används för att skicka information till mobiltelefoner, wifi och radio. En mikrovågsugn värmer maten med mikrovågor. Röntgenstrålning går rakt igenom de mjuka delarna av kroppen, men skelettet stoppar mer. Därför kan läkare ta röntgenbilder av ben.' },
        { typ: 'rubrik', text: 'Ljus är energi' },
        { typ: 'text', text: 'Ljus för med sig energi. Den kallas *strålningsenergi*. Växterna tar upp energin i solljuset och lagrar den som kemisk energi. Det kallas fotosyntes. Solceller gör om ljusets energi till el. Det lär du dig mer om i kapitlet om elektricitet.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En ljuskälla lyser själv. Ljuset går rakt fram, och därför blir det skuggor.',
          'Ljus kan absorberas, reflekteras eller gå igenom.',
          'Ljuset går nästan 300 000 km/s och kan gå genom vakuum. Det kan inte ljud.',
          'Reflektionslagen: infallsvinkeln är lika stor som reflektionsvinkeln.',
          'En konkav spegel samlar ljuset. En konvex spegel sprider det.',
          'Ljuset bryts när det går in i ett ämne där det går långsammare. Vid totalreflektion kommer inget ljus ut. Fiberoptik använder totalreflektion.',
          'En konvex lins samlar ljuset i brännpunkten. En konkav lins sprider ljuset.',
          'Hornhinnan och linsen gör en bild på näthinnan. Närsynta behöver konkava linser. Översynta behöver konvexa.',
          'Vitt ljus består av alla färger. Ett prisma delar upp det i ett spektrum.',
          'En sak har den färg den reflekterar. Svart absorberar nästan allt ljus och blir varmare i solen än vitt.',
          'Det finns ljus vi inte ser: radiovågor, mikrovågor, IR, UV, röntgen och gammastrålning.'
        ] },
        { typ: 'rubrik', text: 'Ljud och ljus är olika sorters vågor' },
        { typ: 'text', text: 'Ljud och ljus liknar varandra på många sätt. Båda är vågor. Båda har våglängd och frekvens. Båda kan studsa tillbaka: ljud blir eko och ljus blir en spegelbild. Båda kan tas upp av saker, och båda har energi.' },
        { typ: 'text', text: 'Men det finns en stor skillnad. Ljud är knuffar mellan partiklar. Därför behöver ljud luft, vatten eller något annat att gå igenom. Ljus behöver inga partiklar alls. Därför kan solljuset komma till oss genom den tomma rymden, men vi hör aldrig ljud från solen. Ljuset är dessutom nästan en miljon gånger snabbare än ljudet.' },
        // [BILD B14: jämförelse ljud och ljus i två kolumner med punkter under varandra. Gemensamt (överst, över båda kolumnerna): vågor · våglängd och frekvens · reflekteras (eko – spegel) · absorberas · för med sig energi. Skillnader (rad för rad, ljud | ljus): tryckvåg i ett ämne | våg som inte behöver ämne · går inte genom vakuum | går genom vakuum · ca 340 m/s i luft | ca 300 000 km/s · snabbast i fasta ämnen | snabbast i vakuum · frekvensen hörs som tonhöjd | våglängden ses som färg]
        { id: 'bild-b14', typ: 'figur', namn: 'ljus', lage: 'jamforelse', bildtext: 'Ljud behöver ett ämne att färdas i, ljus gör det inte.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
