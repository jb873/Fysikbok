/* Avsnittssida VI. Repetition: ljud och ljus, text B: Ljus – nivån standard (📘).
 * Arbetsorder 30 (2026-11-20): kallor/kap3/VI-B-Repetition-Ljus-alla-nivaer-v3.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vib.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Repetition: ljus' },
        { typ: 'text', text: 'Utan ljus skulle vi inte se någonting. Den här repetitionen samlar det viktigaste om ljus: var det kommer ifrån, hur det reflekteras och bryts, hur speglar, linser och ögat fungerar, varför saker har färg och vilket ljus vi inte kan se.' },
        { typ: 'underrubrik', text: 'Det här repeterar du' },
        { typ: 'punkter', punkter: [
          '*ljuskällor*, ljusets hastighet och skuggor',
          '*reflektion* och speglar',
          '*brytning* och *totalreflektion*',
          '*linser*, *brännpunkt* och *brännvidd*',
          'ögat, glasögon och optiska instrument',
          'färger och *spektrum*',
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
        { typ: 'rubrik', text: 'En ljuskälla skickar ut eget ljus' },
        { typ: 'text', text: 'En *ljuskälla* skickar ut eget ljus. Solen, en lampa, en ficklampa och en eld är ljuskällor. De flesta saker omkring oss är inte ljuskällor. Vi ser dem för att ljus från en ljuskälla träffar dem och studsar in i våra ögon. Månen är ingen ljuskälla. Den lyser för att den reflekterar ljus från solen.' },
        { typ: 'rubrik', text: 'Ljuset går rakt fram' },
        { typ: 'text', text: 'Ljuset färdas i raka linjer. Därför bildas en skugga bakom ett föremål som ljuset inte kan gå igenom. Skuggans form beror på föremålets form och på varifrån ljuset kommer, eftersom ljuset inte kan böja runt föremålet. När man ritar ljus ritar man därför raka *ljusstrålar*.' },
        { typ: 'rubrik', text: 'Ljus kan absorberas, reflekteras eller gå igenom' },
        { typ: 'text', text: 'När ljuset träffar ett föremål kan tre saker hända. Ljuset kan *absorberas*, alltså tas upp av föremålet, och blir då värme. Ljuset kan *reflekteras*, alltså studsa tillbaka. Eller så kan ljuset gå igenom föremålet om det är genomskinligt, *transparent|transparent*, som glas och vatten. Oftast händer flera av sakerna samtidigt.' },
        // [BILD B1: tre föremål i samma ljus bredvid varandra: ett svart som absorberar (pilen tar slut, "värme"), en spegel som reflekterar (pilen studsar), en glasruta som släpper igenom (pilen fortsätter); bakom ett ogenomskinligt föremål en skugga som följer föremålets form]
        { id: 'bild-b1', typ: 'figur', namn: 'ljus', lage: 'foremal', bildtext: 'Ljuset kan absorberas, reflekteras eller gå igenom.' },
        { typ: 'rubrik', text: 'Ljuset är det snabbaste som finns' },
        { typ: 'text', text: 'Ljuset färdas nästan 300 000 kilometer per sekund i vakuum. Ingenting kan röra sig fortare. Ljuset från solen tar drygt 8 minuter att nå jorden. Till skillnad från ljud kan ljus färdas genom vakuum, och därför når solljuset oss genom tomma rymden. I luft går ljuset nästan lika fort som i vakuum, men i vatten bara ungefär 225 000 km/s och i glas ungefär 200 000 km/s.' }
      ]
    },
    {
      id: 'reflektion', titel: 'Reflektion och speglar',
      block: [
        { typ: 'rubrik', text: 'Infallsvinkeln är lika stor som reflektionsvinkeln' },
        { typ: 'text', text: 'När en ljusstråle träffar en spegel studsar den på samma sätt som en biljardboll mot kanten. För att mäta vinklarna ritar man en tänkt linje som står vinkelrätt mot spegeln där strålen träffar. Den kallas *normal|normal*. Vinkeln mellan den inkommande strålen och normalen kallas *infallsvinkel*, och vinkeln mellan den reflekterade strålen och normalen kallas *reflektionsvinkel*. *Reflektionslagen|reflektionslagen* säger att infallsvinkeln alltid är lika stor som reflektionsvinkeln.' },
        // [BILD B2: en ljusstråle mot en plan spegel; normalen streckad; infallsvinkel och reflektionsvinkel utmärkta och lika stora]
        { id: 'bild-b2', typ: 'figur', namn: 'ljus', lage: 'reflektion', bildtext: 'Infallsvinkeln är lika stor som reflektionsvinkeln.' },
        { typ: 'rubrik', text: 'En slät yta ger en spegelbild, en skrovlig yta sprider ljuset' },
        { typ: 'text', text: 'En spegel och en vit vägg reflekterar båda mycket ljus. Skillnaden är ytan. Spegeln är helt slät, så parallella strålar reflekteras åt samma håll och bildar en spegelbild. Väggen är skrovlig i liten skala, så strålarna träffar ytan i olika vinklar och sprids åt alla håll. Därför ser du väggen men inte din spegelbild i den.' },
        { typ: 'rubrik', text: 'Spegelbilden ser ut att finnas bakom spegeln' },
        { typ: 'text', text: 'När du tittar i en spegel ser du en *spegelbild*. Ljuset från föremålet reflekteras i spegeln och når ditt öga. Ögat följer strålarna bakåt i en rak linje, och därför ser föremålet ut att stå bakom spegeln, lika långt bakom som det står framför.' },
        // [BILD B3: numrerade steg: 1 en lampa lyser på en blomma · 2 ljuset från blomman reflekteras i spegeln med lika stora vinklar · 3 strålarna når ögat · 4 ögat följer strålarna bakåt (streckat) – spegelbilden ser ut att stå lika långt bakom spegeln som blomman står framför]
        { id: 'bild-b3', typ: 'figur', namn: 'ljus', lage: 'spegelbild', bildtext: 'Spegelbilden ser ut att stå lika långt bakom spegeln.' },
        { typ: 'rubrik', text: 'Böjda speglar samlar eller sprider ljuset' },
        { typ: 'text', text: 'En spegel som buktar inåt kallas *konkav*. Den samlar parallella strålar i en punkt, *brännpunkten*. Sätter man en lampa i brännpunkten reflekteras allt ljus åt samma håll, och därför sitter konkava speglar i ficklampor och strålkastare. Om du håller ansiktet nära en konkav spegel ser det större ut, och därför används konkava speglar som sminkspeglar.' },
        { typ: 'text', text: 'En spegel som buktar utåt kallas *konvex*. Den sprider ljuset. I en konvex spegel ser allt mindre ut, men man ser mer av omgivningen. Därför sitter konvexa speglar i skymda vägkorsningar och i butiker.' },
        // [BILD B4: konkav och konvex spegel bredvid varandra; parallella strålar som samlas i brännpunkten respektive sprids ut]
        { id: 'bild-b4', typ: 'figur', namn: 'ljus', lage: 'speglar', bildtext: 'En konkav spegel samlar ljuset, en konvex sprider det.' }
      ]
    },
    {
      id: 'brytning', titel: 'Brytning',
      block: [
        { typ: 'rubrik', text: 'Ljuset bryts när det byter hastighet' },
        { typ: 'text', text: 'När ljus går snett från ett ämne till ett annat, till exempel från luft till vatten, ändrar det riktning. Det kallas att ljuset *bryts*. Orsaken är att ljuset får en annan hastighet. I vatten går ljuset långsammare än i luft.' },
        { typ: 'text', text: 'Tänk dig en bil som kör snett från asfalt ut på sand. Det ena framhjulet når sanden först och bromsas, medan det andra fortfarande rullar fort på asfalten. Då svänger bilen. Ljuset gör likadant: den del av ljusvågen som når vattnet först saktar in först, och hela strålen viker av. Ett ämne där ljuset går långsamt sägs vara *optiskt tätare*. Det har inget med densitet att göra, utan bara med ljusets hastighet.' },
        // [BILD B5: numrerade steg: 1 en bred ljusstråle med vågfronter (tvärgående streck) går snett mot vattenytan · 2 ena sidan av vågfronten når vattnet först och saktar in, vågfronterna hamnar tätare · 3 strålen viker av mot normalen i vattnet; infallsvinkel och brytningsvinkel utmärkta, brytningsvinkeln mindre]
        { id: 'bild-b5', typ: 'figur', namn: 'ljus', lage: 'brytning', bildtext: 'Den sida som når vattnet först saktar in först, och strålen viker av.' },
        { typ: 'text', text: 'När ljuset går från luft till vatten bryts det mot normalen, och brytningsvinkeln blir mindre än infallsvinkeln. När ljuset går åt andra hållet, från vatten till luft, bryts det från normalen. Ljus som träffar ytan vinkelrätt, längs normalen, ändrar hastighet men fortsätter rakt fram utan att byta riktning.' },
        { typ: 'rubrik', text: 'Därför ser en penna i vatten bruten ut' },
        { typ: 'text', text: 'En penna som står snett i ett glas vatten ser ut att vara bruten vid vattenytan. Ljuset från den del av pennan som är under vatten bryts när det går ut i luften. Ögat kan inte se att ljuset har ändrat riktning, utan följer strålarna bakåt i rak linje. Därför ser den delen av pennan ut att ligga högre upp än den gör. Av samma skäl ser en pool alltid grundare ut än den är.' },
        // [BILD B6: numrerade steg: 1 ljuset från pennans spets under vattnet går upp mot ytan · 2 vid ytan bryts det från normalen · 3 ögat följer strålen bakåt i rak linje (streckat) · 4 spetsen ser ut att ligga högre – pennan ser bruten ut]
        { id: 'bild-b6', typ: 'figur', namn: 'ljus', lage: 'penna', bildtext: 'Ögat följer strålen bakåt, så spetsen ser ut att ligga högre.' },
        { typ: 'rubrik', text: 'Totalreflektion håller kvar ljuset' },
        { typ: 'text', text: 'När ljus går från vatten eller glas ut i luft bryts det bort från normalen. Om strålen träffar ytan allt snettare kommer den till slut att brytas så mycket att den går längs ytan. Lutar den ännu mer kommer inget ljus ut alls. Allt reflekteras tillbaka, som i en perfekt spegel. Det kallas *totalreflektion*.' },
        // [BILD B7: numrerade steg under en vattenyta: 1 strålen går ut och bryts · 2 snettare: strålen går längs ytan · 3 ännu snettare: allt ljus reflekteras tillbaka ned – totalreflektion]
        { id: 'bild-b7', typ: 'figur', namn: 'ljus', lage: 'totalreflektion', bildtext: 'Ju snettare strålen träffar ytan, desto mer bryts den.' },
        { typ: 'text', text: 'Totalreflektion används i *fiberoptik*. I en tunn glasfiber studsar ljuset hela tiden mot fiberns kant genom totalreflektion och kommer därför inte ut. Ljuset kan på så sätt följa fibern mil efter mil. Internet bygger på fiberkablar där information skickas som ljusblinkningar.' }
      ]
    },
    {
      id: 'linser', titel: 'Linser',
      block: [
        { typ: 'rubrik', text: 'En lins bryter ljuset' },
        { typ: 'text', text: 'En *lins* är en genomskinlig skiva av glas eller plast med böjda ytor. Linsen bryter ljuset, till skillnad från en spegel som reflekterar det. Hur ljuset bryts beror på linsens form.' },
        { typ: 'rubrik', text: 'En konvex lins samlar ljuset i en brännpunkt' },
        { typ: 'text', text: 'En lins som är tjockare på mitten kallas *konvex*. Den bryter parallella ljusstrålar så att de samlas i en punkt, *brännpunkten*. Avståndet från linsen till brännpunkten kallas *brännvidd*. Ett förstoringsglas är en konvex lins. Håller du det i solen samlas ljuset i brännpunkten, och där blir det så varmt att ett papper kan börja brinna. Håller man en konvex lins nära det man tittar på ser det förstorat ut.' },
        { typ: 'rubrik', text: 'En konkav lins sprider ljuset' },
        { typ: 'text', text: 'En lins som är tunnare på mitten kallas *konkav*. Den sprider ut ljusstrålarna. Strålarna ser ut att komma från en punkt framför linsen. Tittar man genom en konkav lins ser föremålen mindre ut.' },
        // [BILD B8: konvex och konkav lins bredvid varandra; parallella strålar som samlas i brännpunkten (brännvidden utmärkt) respektive sprids ut och ser ut att komma från en punkt framför linsen (streckat)]
        { id: 'bild-b8', typ: 'figur', namn: 'ljus', lage: 'linser', bildtext: 'En konvex lins samlar ljuset, en konkav sprider det.' },
        { typ: 'text', text: 'Ju mer böjd en lins är, desto mer bryter den ljuset, och desto kortare blir brännvidden.' }
      ]
    },
    {
      id: 'ogat-och-instrument', titel: 'Ögat och optiska instrument',
      block: [
        { typ: 'rubrik', text: 'Hornhinnan och linsen skapar en bild i ögat' },
        { typ: 'text', text: 'Ljuset bryts först i *hornhinnan|hornhinna*, ögats genomskinliga yta längst fram. Sedan går det in genom pupillen, som är ett hål i den färgade regnbågshinnan. Bakom pupillen sitter ögats konvexa lins. Hornhinnan och linsen samlar tillsammans ljuset så att det bildar en skarp bild på *näthinnan* längst bak i ögat. Näthinnan har ljuskänsliga celler som skickar signaler genom synnerven till hjärnan. Bilden på näthinnan är upp och ned. Hjärnan bearbetar signalerna så att vi ändå uppfattar omgivningen rättvänd.' },
        // [BILD B9: numrerade steg: 1 ljus från ett träd bryts i hornhinnan och går in genom pupillen · 2 linsen bryter ljuset mer · 3 strålarna samlas på näthinnan – bilden blir upp och ned · 4 synnerven leder signalerna till hjärnan – vi uppfattar omgivningen rättvänd]
        { id: 'bild-b9', typ: 'figur', namn: 'ljus', lage: 'ogat', bildtext: 'Bilden på näthinnan blir upp och ned.' },
        { typ: 'rubrik', text: 'Linsen ändrar form för att ställa in skärpan' },
        { typ: 'text', text: 'När du tittar på något nära blir linsen rundare och bryter ljuset mer. När du tittar långt bort blir den plattare och bryter ljuset mindre. På så sätt hamnar bilden på näthinnan oavsett avstånd. Det kallas *ackommodation*.' },
        { typ: 'rubrik', text: 'Glasögon rättar till synfel' },
        { typ: 'text', text: 'Om bilden inte hamnar precis på näthinnan blir den suddig. Är man *närsynt* samlas ljuset framför näthinnan. Man ser bra på nära håll men suddigt på långt håll. Då behövs glasögon med konkava linser, som sprider ut ljuset lite så att bilden flyttas bakåt till näthinnan. Är man *översynt* samlas ljuset bakom näthinnan, och man ser suddigt på nära håll. Då behövs konvexa linser, som samlar ljuset lite tidigare.' },
        // [BILD B10: två öga-bilder bredvid varandra: närsynt (strålarna möts framför näthinnan → med konkav lins möts de på näthinnan) och översynt (möts bakom näthinnan → med konvex lins möts de på näthinnan)]
        { id: 'bild-b10', typ: 'figur', namn: 'ljus', lage: 'synfel', bildtext: 'Glasögonen flyttar bilden till näthinnan.' },
        { typ: 'rubrik', text: 'Optiska instrument använder linser och speglar' },
        { typ: 'text', text: 'Med linser kan man se det som är för litet eller för långt bort för ögat.' },
        { typ: 'punkter', punkter: [
          'En *lupp* är en konvex lins som förstorar små saker.',
          'Ett *mikroskop* har två konvexa linser efter varandra och kan förstora mycket, till exempel celler och bakterier.',
          'En *kikare* har konvexa linser som förstorar och prismor som vänder bilden rätt.',
          'En *kamera* har en lins som skapar en bild på en ljuskänslig sensor, precis som ögat skapar en bild på näthinnan. När man ställer in skärpan flyttas linsen fram eller tillbaka.'
        ] }
      ]
    },
    {
      id: 'farger', titel: 'Färger',
      block: [
        { typ: 'rubrik', text: 'Vitt ljus är en blandning av färger' },
        { typ: 'text', text: 'Solljus ser vitt ut, men det består av alla färger blandade. Om vitt ljus går genom ett *prisma*, en glasbit med plana ytor, delas det upp i ett *spektrum*: rött, orange, gult, grönt, blått och violett. Ljus kan beskrivas som vågor, precis som ljud. Avståndet mellan två vågtoppar kallas *våglängd*, och olika våglängder uppfattar vi som olika färger. Ljus med olika våglängd bryts olika mycket. Violett ljus har kortast våglängd och bryts mest. Rött ljus har längst våglängd och bryts minst.' },
        // [BILD B11: vitt ljus in i ett prisma, spektrum ut; rött bryts minst, violett mest]
        { id: 'bild-b11', typ: 'figur', namn: 'ljus', lage: 'prisma', bildtext: 'Rött ljus bryts minst och violett mest.' },
        { typ: 'rubrik', text: 'Regnbågen är solljus som delas i regndroppar' },
        { typ: 'text', text: 'En regnbåge uppstår när solljus går in i regndroppar, bryts, reflekteras mot droppens baksida och bryts igen på vägen ut. Varje droppe fungerar som ett litet prisma. Därför ser man en regnbåge bara när solen är bakom en och regnet framför. Rött syns alltid ytterst och violett innerst.' },
        { typ: 'rubrik', text: 'Ett föremål har den färg som det reflekterar' },
        { typ: 'text', text: 'Ett rött äpple ser rött ut för att det främst reflekterar rött ljus och absorberar det mesta av de andra färgerna. Ett blått föremål reflekterar blått. Ett vitt föremål reflekterar alla färger, och ett svart absorberar alla. Om man lyser på ett rött äpple med bara blått ljus finns det inget rött ljus att reflektera, och då ser äpplet svart ut.' },
        // [BILD B12: numrerade steg: 1 vitt ljus träffar ett rött äpple · 2 det röda ljuset reflekteras till ögat · 3 de flesta andra färgerna absorberas och blir värme]
        { id: 'bild-b12', typ: 'figur', namn: 'ljus', lage: 'farg', bildtext: 'Äpplet reflekterar främst rött ljus.' },
        { typ: 'rubrik', text: 'Mörka färger blir varmare i solen' },
        { typ: 'text', text: 'Ljus som absorberas blir värme. Ett svart föremål absorberar nästan allt synligt ljus och blir därför varmare i solen än ett vitt, som reflekterar det mesta. Därför blir en svart tröja varm på en solig dag, och därför är husen i varma länder ofta vitmålade.' }
      ]
    },
    {
      id: 'osynligt-ljus', titel: 'Ljus som vi inte kan se',
      block: [
        { typ: 'rubrik', text: 'Det synliga ljuset är en liten del av ett stort spektrum' },
        { typ: 'text', text: 'Det ljus vi ser är bara en liten del av en mycket större familj av strålning. Alla har samma natur och färdas med ljusets hastighet, men de har olika våglängd. Från längst till kortast våglängd är det radiovågor, mikrovågor, infrarött ljus, synligt ljus, ultraviolett ljus, röntgenstrålning och gammastrålning. Strålningen kommer i små energipaket som kallas *fotoner|foton*. Ju kortare våglängden är, desto mer energi har varje foton. Därför kan UV-ljus och röntgenstrålning skada kroppens celler, medan radiovågor inte gör det.' },
        // [BILD B13: hela spektrumet som ett band från lång till kort våglängd med exempel: radio och mobil, mikrovågsugn, värmeelement och fjärrkontroll (IR), regnbågens färger (synligt), solen (UV), röntgenbild, gammastrålning; pil "mer energi per foton" mot kort våglängd]
        { id: 'bild-b13', typ: 'figur', namn: 'ljus', lage: 'spektrum', bildtext: 'Ju kortare våglängd, desto mer energi har varje foton.' },
        { typ: 'rubrik', text: 'Infrarött och ultraviolett ljus' },
        { typ: 'text', text: '*Infrarött ljus|infrarött ljus*, IR-ljus, har lite längre våglängd än rött ljus. Det känner vi som värme, till exempel från ett element eller en brasa. Fjärrkontroller skickar signaler med IR-ljus.' },
        { typ: 'text', text: '*Ultraviolett ljus|ultraviolett ljus*, UV-ljus, har lite kortare våglängd än violett ljus. Det finns i solljuset och har så mycket energi att det kan skada huden. Det är UV-ljuset som gör att man blir solbränd. Högt uppe i atmosfären finns ozonlagret. Det tar upp nästan all av den farligaste UV-strålningen och en stor del av den övriga. Under 1900-talet släppte människor ut ämnen som kallas freoner, från kylskåp och sprayburkar, och de bröt ned ozonlagret. Freoner är nu förbjudna, och ozonlagret håller långsamt på att återhämta sig.' },
        { typ: 'rubrik', text: 'Radiovågor, mikrovågor och röntgenstrålning' },
        { typ: 'text', text: 'Radiovågor och mikrovågor används för att skicka information, till exempel till mobiltelefoner, wifi och radio. En mikrovågsugn värmer maten med mikrovågor. Röntgenstrålning har så mycket energi att den går rakt igenom mjuka delar av kroppen men stoppas mer av skelettet. Därför kan man ta röntgenbilder av ben.' },
        { typ: 'rubrik', text: 'Ljus är energi' },
        { typ: 'text', text: 'Ljus för med sig energi, *strålningsenergi*. Växterna tar upp energin i solljuset och lagrar den som kemisk energi genom fotosyntesen. Solceller gör om ljusets energi till elektrisk energi, något du lär dig mer om i kapitlet om elektricitet.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En ljuskälla skickar ut eget ljus. Ljuset går rakt fram, och därför bildas skuggor. Ljus kan absorberas, reflekteras eller gå igenom.',
          'Ljuset går nästan 300 000 km/s i vakuum och kan, till skillnad från ljud, färdas genom vakuum.',
          'Reflektionslagen: infallsvinkeln är lika stor som reflektionsvinkeln. En konkav spegel samlar ljuset, en konvex sprider det.',
          'Ljuset bryts när det byter hastighet. Från luft till vatten bryts det mot normalen. Vid totalreflektion kommer inget ljus ut. Fiberoptik använder totalreflektion.',
          'En konvex lins samlar ljuset i brännpunkten. En konkav lins sprider ljuset. Brännvidden är avståndet till brännpunkten.',
          'Hornhinnan och linsen skapar en bild på näthinnan. Linsen ändrar form för att ställa in skärpan. Närsynta behöver konkava linser och översynta konvexa.',
          'Vitt ljus är en blandning av färger som kan delas upp i ett spektrum. Ett föremål har den färg det reflekterar. Svart absorberar nästan allt ljus och blir varmare i solen än vitt.',
          'Utanför det synliga ljuset finns radiovågor, mikrovågor, IR, UV, röntgen och gammastrålning. Kortare våglängd ger mer energi per foton.'
        ] },
        { typ: 'rubrik', text: 'Ljud och ljus är båda vågor, men av olika slag' },
        { typ: 'text', text: 'Ljud och ljus har mycket gemensamt. Båda är vågor med våglängd och frekvens, båda kan reflekteras och absorberas, och båda för med sig energi. Den stora skillnaden är vad som svänger. Ljud är tryckvågor där partiklar knuffar på varandra, och därför behöver ljud ett ämne att färdas i. Ljus är en annan sorts våg, som inte behöver några partiklar. Därför når solljuset oss genom rymden, men inte ljudet från solen. Ljuset är också nästan en miljon gånger snabbare.' },
        // [BILD B14: jämförelse ljud och ljus i två kolumner med punkter under varandra. Gemensamt (överst, över båda kolumnerna): vågor · våglängd och frekvens · reflekteras (eko – spegel) · absorberas · för med sig energi. Skillnader (rad för rad, ljud | ljus): tryckvåg i ett ämne | våg som inte behöver ämne · går inte genom vakuum | går genom vakuum · ca 340 m/s i luft | ca 300 000 km/s · snabbast i fasta ämnen | snabbast i vakuum · frekvensen hörs som tonhöjd | våglängden ses som färg]
        { id: 'bild-b14', typ: 'figur', namn: 'ljus', lage: 'jamforelse', bildtext: 'Ljud behöver ett ämne att färdas i, ljus gör det inte.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
