/* Avsnittssida I. Solsystemet och jorden – djupdykningen "Venus – jordens heta tvilling".
 * Arbetsorder 10 (2026-11-07): kallor/kap1/Kap1-DD-B-Venus-redigerad.md,
 * infört ordagrant i strömformatet: styckena före första ## = Inledningen (utan rubrik, som källan), ## = avsnitt,
 * ### = rubrik, ett stycke = ett textblock. Ingen Sammanfattning och inget länkblock. [BILD …] står som kommentar
 * på sin plats; eleven ser dem inte. Skriven av verktyg/kap1-omvandlare.js.
 */
Bok.niva('djupdykning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'text', text: 'Tänk dig att du reser till en planet som är nästan lika stor som jorden. Den har berg, vida slätter, vulkaner och en atmosfär runt hela planeten. Tyngdkraften är nästan lika stark som här. Det låter som en plats där människor skulle kunna bo.' },
        { typ: 'text', text: 'När din rymdfarkost närmar sig planeten upptäcker du något fruktansvärt. Vid marken är det omkring 465 °C, varmt nog att smälta bly. Lufttrycket är ungefär 90 gånger högre än på jorden, och över marken ligger tjocka moln av svavelsyra. Ingen människa skulle överleva där.' },
        { typ: 'text', text: 'Planeten heter Venus och är vår närmaste granne i riktning mot solen. Den kallas jordens tvilling, eftersom planeterna är så lika i storlek och uppbyggnad. Ändå har de blivit två helt olika världar. Hur gick det till, och vad kan Venus lära oss om vår egen planet?' }
      ]
    },
    {
      id: 'tvilling', titel: 'Venus liknar jorden i storlek men är en helt annan värld',
      block: [
        { typ: 'rubrik', text: 'Två nästan lika stora stenplaneter' },
        { typ: 'text', text: 'Om du ställde Venus och jorden bredvid varandra skulle du ha svårt att se vilken som är störst. Jordens diameter är ungefär 12 700 km och Venus ungefär 12 100 km, så Venus är bara cirka fem procent mindre. Båda är stenplaneter med en fast yta, en mantel av berg och en kärna som till stor del består av järn.' },
        { typ: 'text', text: 'Även tyngdkraften är ungefär densamma. Om din massa är 50 kg här är den fortfarande 50 kg på Venus, för massan ändras inte när du flyttar dig. Din tyngd, alltså kraften som drar dig mot marken, skulle däremot vara ungefär tio procent mindre, eftersom Venus har lite mindre massa än jorden. Tyngdkraften är alltså inte problemet för den som vill besöka Venus.' },
        { typ: 'text', text: 'Det som gör Venus så annorlunda är atmosfären. Jordens luft består mest av kväve och syre, och vi har flytande vatten och behagliga temperaturer. Venus atmosfär består nästan helt av koldioxid, och hela planeten är inbäddad i tjocka moln. Därför kan vi aldrig se Venus yta i ett vanligt teleskop, fast planeten ibland kommer närmare oss än någon annan planet.' }
      ]
    },
    {
      id: 'morgon-och-kvall', titel: 'Venus syns bara på morgonen och kvällen',
      block: [
        { typ: 'rubrik', text: 'Morgonstjärnan och aftonstjärnan är samma planet' },
        { typ: 'text', text: 'Du har kanske sett en mycket ljusstark punkt lågt på himlen strax efter solnedgången. Den lyser starkare än alla stjärnor, och efter solen och månen är den himlens ljusaste föremål. Det är troligen Venus. Ibland kallas den aftonstjärnan och vid andra tider morgonstjärnan, men det är samma planet.' },
        { typ: 'text', text: 'Venus är ingen stjärna och lyser inte av sig själv. Liksom månen reflekterar den solljus, och de vita molnen reflekterar det mesta av ljuset som träffar dem. Det är därför Venus lyser så starkt.' },
        { typ: 'rubrik', text: 'Venus bana ligger innanför jordens' },
        { typ: 'text', text: 'Venus ligger närmare solen än jorden, så dess bana ligger innanför vår. Sett från jorden kan Venus därför aldrig komma långt bort från solen på himlen. När Venus ligger öster om solen syns den på kvällen efter solnedgången, och när den ligger väster om solen syns den på morgonen före soluppgången.' },
        { typ: 'text', text: 'Mitt i natten tittar vi ut från jorden åt motsatt håll från solen, och där kan Venus aldrig vara. Därför står Venus aldrig högt på himlen vid midnatt, så som Mars eller Jupiter kan göra. Venus kan vara ovanför horisonten mitt på dagen, men då drunknar den i dagsljuset.' }
        // [BILD: Solsystemet ovanifrån med solen i mitten, Venus bana innanför jordens bana och Venus i tre lägen. Två siktlinjer från jorden visar hur Venus kan synas öster respektive väster om solen. Ingen text i bilden.]
      ]
    },
    {
      id: 'faser', titel: 'Venus faser hjälpte Galileo att ändra vår världsbild',
      block: [
        { typ: 'rubrik', text: 'Venus visar olika stor del av sin belysta sida' },
        { typ: 'text', text: 'Månen ser ibland rund ut, ibland halv och ibland som en smal skära. Den byter inte form, utan vi ser olika mycket av den halva som solen lyser på. Samma sak händer med Venus. Följer du planeten i ett teleskop under några månader kan du se den växa från en smal skära till en nästan rund skiva.' },
        { typ: 'text', text: 'När Venus ligger på nästan samma sida om solen som vi, ser vi mest dess mörka nattsida, och planeten blir en tunn skära. Den är då närmast oss och ser stor ut i teleskopet. När Venus ligger på andra sidan solen ser vi nästan hela den belysta sidan, men den är då längre bort och ser liten ut.' },
        { typ: 'rubrik', text: 'Faserna passade inte den gamla världsbilden' },
        { typ: 'text', text: 'I början av 1600-talet trodde de flesta i Europa att jorden stod still i universums mitt. I den gamla modellen, som går tillbaka på astronomen Ptolemaios, rörde sig solen och planeterna runt jorden, och Venus låg alltid ungefär mellan jorden och solen. Då skulle vi bara kunna se Venus som en skära, aldrig nästan full. Den polske astronomen Copernicus hade i stället föreslagit att planeterna, jorden också, rör sig runt solen.' },
        { typ: 'text', text: 'Hösten 1610 riktade Galileo Galilei sitt teleskop mot Venus och såg att den gick igenom en hel serie faser, från skära till nästan full. Det var omöjligt i Ptolemaios modell men passade perfekt om Venus kretsade runt solen. För första gången kunde en observation avgöra mellan två modeller av himlen.' },
        { typ: 'text', text: 'Galileos upptäckt bevisade att Venus kretsar runt solen, men inte att jorden gör det. Det fanns nämligen en modell där planeterna kretsade runt solen medan solen i sin tur kretsade runt jorden. Tillsammans med andra observationer, som Jupiters månar, bidrog Venus faser ändå till att den gamla världsbilden till slut övergavs.' }
      ]
    },
    {
      id: 'vaxthuseffekt', titel: 'Venus växthuseffekt har gjort planeten glödhet',
      block: [
        { typ: 'rubrik', text: 'Koldioxiden håller kvar värmen' },
        { typ: 'text', text: 'På jorden är växthuseffekten naturlig och nödvändig. Solljus går genom atmosfären och värmer marken, som sedan strålar ut värme. Växthusgaser som koldioxid och vattenånga fångar en del av den strålningen och skickar tillbaka en del mot marken. Utan växthuseffekten skulle jorden vara en frusen boll.' },
        { typ: 'text', text: 'På Venus har samma process gått till överdrift. Atmosfären består till ungefär 96 procent av koldioxid och är så tjock att den väger ungefär 90 gånger mer än jordens. Resultatet är omkring 465 °C vid marken, dag som natt och vid polerna som vid ekvatorn.' },
        { typ: 'text', text: 'Många tror att Venus är solsystemets hetaste planet bara för att den ligger nära solen, men det stämmer inte. Merkurius ligger ännu närmare solen men är på nattsidan kallare än –170 °C, eftersom den saknar atmosfär som håller kvar värmen. Det är Venus tjocka koldioxidatmosfär, inte avståndet till solen, som gör den till den hetaste planeten.' },
        { typ: 'rubrik', text: 'Venus kan ha drabbats av en skenande växthuseffekt' },
        { typ: 'text', text: 'Forskare tror att Venus en gång kan ha haft mycket mer vatten, kanske till och med hav. Eftersom Venus ligger närmare solen fick den mer solenergi och blev varmare. Mer vatten avdunstade, och vattenånga är också en växthusgas. Mer vattenånga gav mer uppvärmning, som gav ännu mer vattenånga. En sådan självförstärkande uppvärmning kallas en skenande växthuseffekt.' },
        { typ: 'text', text: 'Högt upp i atmosfären kan solens ultravioletta strålning slå sönder vattenmolekyler. Det lätta vätet läcker då ut i rymden och kommer aldrig tillbaka, och därmed är vattnet förlorat för alltid. Forskare har hittat spår i Venus atmosfär som visar att planeten har förlorat stora mängder vatten. Om Venus någonsin hade riktiga hav, och i så fall hur länge, vet vi ännu inte.' },
        { typ: 'rubrik', text: 'Molnen består av svavelsyra och trycket är enormt' },
        { typ: 'text', text: 'Venus moln består av små droppar svavelsyra, ett starkt frätande ämne. Det kan regna svavelsyra från molnen, men dropparna hinner avdunsta i den heta luften långt innan de når marken.' },
        { typ: 'text', text: 'Vid ytan är trycket ungefär 90 gånger högre än vid havsytan på jorden. Det är som att befinna sig nästan en kilometer ner i havet. En rymddräkt skulle inte klara både värmen och trycket, och landare som skickas dit måste byggas som tjockväggiga tryckkärl.' }
        // [BILD: Venus yta med mörka vulkaniska berg, vida steniga slätter och en tät gulorange himmel där svagt, utspritt solljus tränger igenom molnen. Ingen lava, inga lågor och ingen text i bilden.]
      ]
    },
    {
      id: 'dygn-och-ar', titel: 'Ett dygn på Venus är längre än ett år',
      block: [
        { typ: 'rubrik', text: 'Venus roterar långsammast av alla planeter' },
        { typ: 'text', text: 'Jorden snurrar ett varv runt sin axel på ett dygn och går ett varv runt solen på ett år. Hos Venus är det nästan tvärtom. Ett varv runt solen tar ungefär 225 jorddygn, men ett varv runt den egna axeln tar 243 jorddygn. Venus hinner alltså ett helt varv runt solen innan den har snurrat ett enda varv runt sig själv.' },
        { typ: 'text', text: 'Ingen annan planet roterar så långsamt. Eftersom ytan inte syns genom molnen mätte forskare rotationen med radar. De skickade radiovågor mot Venus och mätte hur ekot förändrades när det studsade mot den roterande ytan.' },
        { typ: 'rubrik', text: 'Solen går upp i väster' },
        { typ: 'text', text: 'Venus snurrar dessutom åt motsatt håll mot jorden och de flesta andra planeter. Om du stod på Venus och kunde se solen genom molnen skulle den gå upp i väster och ner i öster. Varför Venus roterar baklänges vet ingen säkert. En idé är att en stor krock för länge sedan vände på planetens rotation, en annan att solens dragning i den tjocka atmosfären med tiden har bromsat och vänt den.' },
        { typ: 'text', text: 'Många tror att det måste ta 243 jorddygn från en soluppgång till nästa på Venus, men så är det inte. Eftersom Venus både snurrar baklänges och samtidigt går runt solen, tar det bara ungefär 117 jorddygn mellan två soluppgångar. Du kan testa själv: snurra långsamt åt ena hållet medan du går runt en lampa åt andra hållet, och se hur ofta lampan dyker upp rakt framför dig.' }
      ]
    },
    {
      id: 'rymdsonder', titel: 'Rymdsonder har avslöjat Venus',
      block: [
        { typ: 'rubrik', text: 'De första sonderna krossade drömmen om en tropisk tvilling' },
        { typ: 'text', text: 'Innan rymdåldern visste ingen vad som fanns under Venus moln. Några trodde på varma hav, träsk och regnskog, eftersom Venus var så lik jorden. År 1962 flög den amerikanska rymdsonden Mariner 2 förbi Venus. Det var första gången en sond lyckades undersöka en annan planet på nära håll, och dess mätningar av värmestrålningen visade att ytan var glödhet.' },
        { typ: 'text', text: 'Den 15 december 1970 landade den sovjetiska sonden Venera 7 på Venus. Det var första gången en farkost landade på en annan planet och skickade data från ytan. Den överlevde bara i ungefär 20 minuter, men hann mäta temperatur och tryck. Senare Venera-sonder tog de första bilderna från ytan, som visade ett stenigt ökenlandskap utan hav och skogar.' },
        { typ: 'rubrik', text: 'Radar ser genom molnen' },
        { typ: 'text', text: 'Eftersom kameror inte ser igenom molnen kartläggs ytan med radar. Radiovågor tränger igenom molnen, studsar mot marken och ekot avslöjar berg, dalar och kratrar. Från 1990 kartlade den amerikanska sonden Magellan nästan hela Venus på det sättet. Den hittade enorma vulkaner, lavaslätter och bergskedjor. Senare har forskare jämfört Magellans radarbilder tagna med några månaders mellanrum och sett tecken på att vulkaner fortfarande har utbrott.' },
        { typ: 'text', text: 'Den japanska sonden Akatsuki studerade Venus atmosfär från omloppsbana i nästan nio år. Den visade att vindarna högt uppe blåser runt hela planeten på bara fyra dygn, trots att planeten själv behöver 243 dygn för ett varv. Långsam planet, rasande atmosfär.' }
      ]
    },
    {
      id: 'klimatet', titel: 'Venus visar hur viktig atmosfären är för klimatet',
      block: [
        { typ: 'rubrik', text: 'Avståndet till solen förklarar inte allt' },
        { typ: 'text', text: 'Venus och jorden har nästan samma storlek och består av samma slags berg och metall. Ändå har jorden hav och liv, medan Venus är en glödhet tryckkokare. Det visar att en planets klimat inte bara beror på avståndet till solen. Atmosfärens sammansättning och tjocklek och hur mycket vatten planeten har spelar minst lika stor roll.' },
        { typ: 'text', text: 'Därför är klimatforskare intresserade av Venus. Samma fysik som styr växthuseffekten på jorden styr den på Venus, men i ett extremt läge. Den som vill förstå hur växthusgaser påverkar en planets temperatur har ett naturligt experiment i grannplaneten.' },
        { typ: 'text', text: 'Många tror att den globala uppvärmningen kan göra jorden lika het som Venus, men det förutsäger inte klimatforskningen. Venus atmosfär innehåller över hundratusen gånger mer koldioxid än jordens, och den skillnaden kan vi inte skapa. Det betyder inte att jordens uppvärmning är ofarlig. Några graders uppvärmning räcker för att ge stora problem för människor och natur, men det är en helt annan sak än Venus.' },
        { typ: 'rubrik', text: 'Frågan om Venus förlorade hav är fortfarande öppen' },
        { typ: 'text', text: 'En av de stora olösta frågorna är om Venus en gång hade ett klimat som jordens. Vissa datormodeller visar att Venus kan ha haft hav i miljarder år. Andra pekar på att planeten var för varm för hav redan från början. Det finns ännu inte tillräckligt med mätningar för att avgöra saken.' },
        { typ: 'text', text: 'Nya rymduppdrag planeras för att mäta Venus atmosfär och berggrund ännu noggrannare. Svaret spelar roll långt utanför vårt solsystem. Astronomer har hittat tusentals planeter runt andra stjärnor, och för att veta vilka som kan ha liv måste vi förstå varför jorden blev jorden och Venus blev Venus.' },
        { typ: 'text', text: 'När du nästa gång ser Venus lysa på morgon- eller kvällshimlen ser du alltså en planet som började nästan som vår men tog en helt annan väg. Bakom de vita molnen döljer sig vulkaner, ett glödhett landskap och en historia som forskarna fortfarande försöker förstå.' }
      ]
    }
  ]
});
