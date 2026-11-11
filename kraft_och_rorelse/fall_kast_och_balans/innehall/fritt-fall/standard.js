/* Avsnittssida IV. Fall, kast och balans, text B: Fritt fall – nivån standard (📘). Joachims uppdrag
 * 2026-11-11: kallor/kap3/IV-B-Fritt-fall-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i strömformatet av
 * verktyg/kap3-omvandlare.js --text b: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du dig:" =
 * liten rubrik utan kolon, [EXEMPEL: …] = exempelruta, [RUTA: …] = ruta. Tilläggen enligt III:s norm: rutan "Så
 * bläddrar du" sist i Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i
 * Fördjupningen rutan "Vill du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-b.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Fritt fall' },
        { typ: 'text', text: 'Allt som vi släpper faller mot marken. En mobil, en boll, ett äpple. Det ser enkelt ut, men i ett fall verkar flera krafter samtidigt, och hastigheten ändras hela vägen ner. I den här texten använder du det du lärde dig om resulterande kraft för att förklara vad som händer när något faller. Du får också svar på en fråga som lurade människor i över 2 000 år: faller tunga saker fortare än lätta?' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'varför vi faller, och varför hastigheten ökar under fallet',
          'vad *gravitation* är, och vad den beror på',
          'vad ett *fritt fall* är, och hur du själv kan visa att det är luften och inte vikten som gör skillnaden',
          'vad som händer med krafterna på en fallskärmshoppare'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'varfor-vi-faller', titel: 'Varför vi faller',
      block: [
        { typ: 'rubrik', text: 'Tyngdkraften drar oss nedåt och luftmotståndet bromsar' },
        { typ: 'text', text: 'Tänk dig att du står på en stol och tar ett kliv ut i luften. Du faller mot golvet. Det beror på *tyngdkraften|tyngdkraft*, som drar dig mot jordens mitt. Men tyngdkraften är inte den enda kraften. Samtidigt som du faller måste du tränga undan luften, och luften bromsar dig. Den kraften är *luftmotståndet|luftmotstånd*, och den pekar uppåt, mot rörelsen.' },
        { typ: 'text', text: 'På väg ner från en stol är tyngdkraften mycket större än luftmotståndet. Den resulterande kraften pekar därför nedåt.' },
        // [BILD B1: en person som faller från en stol – lång kraftpil nedåt för tyngdkraften, kort kraftpil uppåt för luftmotståndet]
        { id: 'bild-b1', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Du' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 1.5 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, bildtext: 'På väg ner: tyngdkraften är mycket större än luftmotståndet. Den resulterande kraften pekar nedåt, och farten ökar.' },
        { typ: 'rubrik', text: 'Hastigheten ökar hela vägen ner' },
        { typ: 'text', text: 'När den resulterande kraften pekar åt samma håll som rörelsen ökar hastigheten. Du har alltså inte samma fart hela vägen. Du börjar på noll när du kliver ut, och du har som högst fart precis innan du når golvet. En rörelse där hastigheten ökar kallas *accelererande|acceleration*.' },
        { typ: 'text', text: 'Ju högre upp du börjar, desto längre hinner hastigheten öka. Därför gör det mycket ondare att hoppa ner från ett tak än från en stol.' },
        { typ: 'exempel', rubrik: 'Exempel: Stol eller tak?', rader: [
          'Från en stol, ungefär en halv meter, har du ungefär 3 m/s när du når golvet. Det är som när man går fort.',
          'Från ett garagetak, ungefär 3 meter, har du nästan 8 m/s. Det är ungefär 28 km/h, som en cyklist i full fart.',
          'Taket är sex gånger så högt, men farten blir ungefär två och en halv gång så stor. Det räcker för att landningen ska bli mycket hårdare.'
        ] },
        { typ: 'rubrik', text: 'Golvet bromsar dig när du landar' },
        { typ: 'text', text: 'När du träffar golvet måste du stanna. Då trycker golvet uppåt på dina fötter. För att du ska stanna måste golvets kraft uppåt vara större än tyngdkraften nedåt. Då pekar den resulterande kraften uppåt, mot rörelsen, och hastigheten minskar till noll.' },
        { typ: 'text', text: 'Många tror att golvets kraft bara är lika stor som tyngdkraften när man landar. Men då skulle den resulterande kraften vara noll, och hastigheten skulle inte ändras. För att bromsa måste golvet trycka hårdare än tyngdkraften drar.' },
        // [BILD B2: en person som landar – kraftpil uppåt från golvet som är större än tyngdkraften nedåt]
        { id: 'bild-b2', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Du' }, krafter: [{ namn: 'kraft från golvet', riktning: 'upp', storlek: 30 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, underlag: true, bildtext: 'När du landar trycker golvet uppåt hårdare än tyngdkraften drar. Den resulterande kraften pekar uppåt, och farten minskar till noll.' },
        { typ: 'rubrik', text: 'En längre inbromsning ger en mindre kraft' },
        { typ: 'text', text: 'Därför böjer man på benen när man landar. När knäna böjs tar inbromsningen längre tid och sker över en längre sträcka. Då behöver kraften från golvet inte bli lika stor. Landningen blir mjukare, och det gör mindre ont i fötter och knän.' },
        { typ: 'text', text: 'Samma idé finns överallt där vi vill skydda oss när något bromsar. Landningsmattan i gympasalen, sanden i längdhoppsgropen, krockkudden i bilen och den mjuka cellplasten i en cykelhjälm gör alla samma sak. De gör att inbromsningen tar längre tid och sker över en längre sträcka, och då blir kraften mindre.' },
        { typ: 'rubrik', text: 'Gravitation verkar mellan allt som har massa' },
        { typ: 'text', text: 'Tyngdkraften är ett exempel på något större. Alla föremål som har massa drar till sig varandra. Det kallas *gravitation*. Du drar i jorden, och jorden drar i dig. Även två böcker på ett bord drar i varandra, men kraften är så liten att den inte märks.' },
        { typ: 'text', text: 'Hur stor gravitationen är beror på två saker:' },
        { typ: 'punkter', punkter: [
          'Massan. Ju större massa, desto starkare gravitation. Jorden har en enorm massa och drar därför tydligt i allt omkring sig.',
          'Avståndet. Ju längre ifrån varandra föremålen är, desto svagare blir gravitationen.'
        ] },
        { typ: 'text', text: 'Tyngdkraften är alltså den gravitationskraft som jorden har på ett föremål. Den pekar alltid mot jordens mitt.' },
        // [BILD B3: jorden och människor på olika ställen på ytan, var och en med en kraftpil riktad mot jordens mitt]
        { id: 'bild-b3', typ: 'figur', namn: 'jordklot_tyngd', bildtext: 'Tyngdkraften pekar mot jordens mitt, var man än står. Det är det vi menar med ”nedåt”.' },
        { typ: 'text', text: 'Du drar faktiskt i jorden med exakt lika stor kraft som jorden drar i dig. Men jorden har så enormt mycket större massa att den inte rör sig märkbart. Det är du som faller mot jorden, inte jorden mot dig.' }
      ]
    },
    {
      id: 'fritt-fall', titel: 'Fritt fall',
      block: [
        { typ: 'rubrik', text: 'Luftmotståndet beror på formen' },
        { typ: 'text', text: 'Släpper du en bok och ett papper samtidigt landar boken först, och pappret seglar ner. Är det för att boken är tyngre? Det kan du själv ta reda på.' },
        { typ: 'ruta', rubrik: 'Testa själv: bok och papper', punkter: [
          'Håll en bok och ett plant papper på samma höjd och släpp dem samtidigt. Boken landar först, och pappret seglar ner.',
          'Knyckla ihop pappret till en hård boll och släpp igen. Nu landar de nästan samtidigt.',
          'Släta ut ett nytt papper, lägg det ovanpå boken och släpp boken. Pappret följer med boken hela vägen ner.'
        ] },
        { typ: 'text', text: 'Pappret väger lika mycket hela tiden. Det enda du ändrar är formen. Det platta pappret har en stor yta som tar emot mycket luft, och luftmotståndet blir stort jämfört med pappers tyngd. Den hopknycklade bollen har en liten yta, och luftmotståndet blir litet. Ligger pappret ovanpå boken är det boken som tränger undan luften, och pappret bromsas inte alls. Det är alltså luftmotståndet som gör skillnaden, inte vikten.' },
        { typ: 'rubrik', text: 'I luft faller stenen före fjädern' },
        { typ: 'text', text: 'Tänk dig att någon släpper en sten och en fjäder samtidigt från ett höghus. Båda påverkas av tyngdkraften nedåt och av luftmotståndet uppåt. Stenen når marken långt före fjädern.' },
        { typ: 'text', text: 'Det beror inte på att tyngdkraften drar stenen snabbare. Det beror på luftmotståndet. Fjädern väger nästan ingenting men har en stor yta som tar emot luft. Luftmotståndet blir därför stort i förhållande till fjäderns tyngd, och fjädern bromsas mycket. För stenen är luftmotståndet litet i förhållande till tyngden, och den bromsas nästan inte alls.' },
        // [BILD B4: stenen och fjädern i luft – för stenen en lång tyngdkraft och ett mycket kort luftmotstånd, för fjädern ett luftmotstånd nästan lika långt som tyngdkraften]
        { id: 'bild-b4-sten', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Sten', form: 'boll' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 0.6 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, bildtext: 'Stenen i luft: luftmotståndet är litet jämfört med tyngdkraften.' },
        { id: 'bild-b4-fjader', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Fjäder' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 9 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, bildtext: 'Fjädern i luft: luftmotståndet är nästan lika stort som tyngdkraften. Pilarna visar förhållandet för varje föremål – stenens tyngdkraft är egentligen mycket större än fjäderns.' },
        { typ: 'rubrik', text: 'Utan luft faller allt lika fort' },
        { typ: 'text', text: 'Om man tar bort luften blir det helt annorlunda. Ett utrymme utan luft kallas *vakuum*. I vakuum finns inget luftmotstånd. Där verkar bara tyngdkraften, och då faller stenen och fjädern lika fort och når marken samtidigt.' },
        { typ: 'text', text: 'Stenen dras visserligen med en större tyngdkraft än fjädern. Men stenen är också trögare, och det tar ut skillnaden. Båda får samma acceleration. Kom ihåg: det är inte tyngdkraften som är lika stor, det är accelerationen. Ett fall där tyngdkraften är den enda kraft som verkar kallas *fritt fall*.' },
        { typ: 'text', text: 'Det har testats på riktigt. Månen har nästan ingen atmosfär. 1971 släppte astronauten David Scott i Apollo 15 en hammare och en fjäder samtidigt på månens yta. De träffade marken på samma gång. Filmen från försöket finns kvar.' },
        { typ: 'rubrik', text: 'En gammal missuppfattning' },
        { typ: 'text', text: 'Många tror att tunga saker faller fortare än lätta. I luft kan det se ut så, men det är luftmotståndet som gör skillnaden, inte vikten.' },
        { typ: 'text', text: 'Missuppfattningen är mycket gammal. Den grekiske filosofen Aristoteles skrev för över 2 000 år sedan att tunga saker faller fortare, och i nästan två tusen år trodde de flesta honom. Ingen prövade det ordentligt. På 1600-talet gjorde italienaren Galileo Galilei försök och visade att föremål faller lika fort om luften inte bromsar dem olika mycket. Det var en av de första gångerna någon mätte i stället för att bara resonera. Du kan läsa mer om Galileo i djupdykningen om honom.' },
        { typ: 'rubrik', text: 'Hastigheten ökar med 10 m/s varje sekund' },
        { typ: 'text', text: 'I ett fritt fall nära jordytan ökar hastigheten lika mycket varje sekund, med ungefär 10 meter per sekund. Det kallas *tyngdaccelerationen|tyngdacceleration* och skrivs ungefär 10 m/s².' },
        { typ: 'text', text: 'Om något släpps från stillastående och faller fritt blir hastigheten:' },
        { typ: 'punkter', punkter: [
          'efter 0 s: 0 m/s',
          'efter 1 s: 10 m/s',
          'efter 2 s: 20 m/s',
          'efter 3 s: 30 m/s'
        ] },
        { typ: 'exempel', rubrik: 'Exempel: Från m/s till km/h', rader: [
          '1 m/s är 3,6 km/h. Multiplicera alltså med 3,6.',
          'Efter 3 s: 30 m/s · 3,6 = 108 km/h, ungefär som en bil på motorvägen.',
          'Efter 4 s: 40 m/s · 3,6 = 144 km/h.'
        ] },
        { typ: 'text', text: 'I verkligheten bromsar luftmotståndet, så hastigheten ökar lite långsammare ju fortare det går.' }
      ]
    },
    {
      id: 'fallskarmshopparen', titel: 'Fallskärmshopparen',
      block: [
        { typ: 'rubrik', text: 'Krafterna ändras under hoppet' },
        { typ: 'text', text: 'En fallskärmshoppare visar allt du har lärt dig i den här texten. Hon faller inte fritt, eftersom luften spelar stor roll. Under hoppet är det samma två krafter som verkar hela tiden: tyngdkraften nedåt och luftmotståndet uppåt. Tyngdkraften är lika stor hela tiden. Det är luftmotståndet som ändras, eftersom det blir större ju fortare man faller och ju större yta man har mot luften. Hoppet kan delas i fyra delar.' },
        { typ: 'numrerad', punkter: [
          'Farten ökar. Hopparen har just lämnat flygplanet. Farten är låg, och luftmotståndet är litet. Tyngdkraften är större än luftmotståndet, och hastigheten ökar.',
          'Konstant hastighet. När farten ökar växer luftmotståndet, tills det är lika stort som tyngdkraften. Då är den resulterande kraften noll, och hastigheten slutar öka. Hopparen faller nu med ungefär 200 km/h.',
          'Fallskärmen öppnas. Den stora skärmen ger plötsligt mycket större luftmotstånd. Luftmotståndet blir större än tyngdkraften, och den resulterande kraften pekar uppåt. Hastigheten minskar.',
          'Ny, lägre konstant hastighet. När farten minskar blir luftmotståndet mindre igen, tills det åter är lika stort som tyngdkraften. Hopparen fortsätter nedåt med en låg, jämn fart och kan landa säkert.'
        ] },
        // [BILD B5: fallskärmshopparen i fyra lägen – accelererar, konstant hastighet, bromsar, lägre konstant fart – med luftmotstånd uppåt och tyngdkraft nedåt; samma skala i alla fyra, så att pilarnas längder visar förhållandet mellan krafterna]
        { id: 'bild-b5-1', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 3 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '1. Farten ökar: tyngdkraften är större än luftmotståndet.' },
        { id: 'bild-b5-2', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 10 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '2. Konstant hastighet: krafterna är lika stora.' },
        { id: 'bild-b5-3', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 25 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '3. Skärmen öppnas: luftmotståndet är större än tyngdkraften, och farten minskar.' },
        { id: 'bild-b5-4', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 10 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '4. Lägre konstant fart: krafterna är lika stora igen.' },
        { typ: 'rubrik', text: 'Lika stora krafter betyder inte att man står stilla' },
        { typ: 'text', text: 'I del 2 och del 4 är krafterna lika stora. Många tror att det betyder att hopparen står stilla i luften. Men så är det inte. Lika stora krafter betyder att hastigheten inte ändras. Hopparen faller fortfarande, men med jämn fart. Det är samma sak som du lärde dig om tröghet: när den resulterande kraften är noll fortsätter föremålet som förut.' },
        { typ: 'rubrik', text: 'Kroppens form avgör den högsta farten' },
        { typ: 'text', text: 'Hopparen kan själv ändra luftmotståndet. Med magen nedåt och armar och ben utsträckta blir ytan mot luften stor, och farten slutar öka vid ungefär 200 km/h. Med huvudet först blir ytan mycket mindre. Då måste farten bli högre innan luftmotståndet hinner bli lika stort som tyngdkraften, och hopparen kan komma upp i över 250 km/h. Det är samma sak som med pappret: ju mindre yta mot luften, desto fortare faller man.' },
        { typ: 'text', text: 'Också regndroppar når en högsta fart. Utan luft skulle en droppe som faller från ett moln två kilometer upp träffa marken med ungefär 200 m/s. Det är 720 km/h, nästan lika fort som ett passagerarflygplan. Men luftmotståndet växer tills det är lika stort som droppens tyngd, och de största dropparna faller därför med högst ungefär 9 m/s. Det är luften som gör att ett regn inte gör ont.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'När vi faller drar tyngdkraften nedåt och luftmotståndet bromsar uppåt.',
          'Är tyngdkraften störst ökar hastigheten. Ju högre fallet börjar, desto högre fart.',
          'För att bromsa oss måste golvet trycka hårdare än tyngdkraften drar. En längre inbromsning ger en mindre kraft.',
          'Gravitation: allt med massa drar i varandra, starkare med större massa och svagare med större avstånd.'
        ] },
        { typ: 'punkter', punkter: [
          'Luftmotståndet beror på formen. I vakuum faller allt lika fort.',
          'I fritt fall är accelerationen densamma för allt: hastigheten ökar med ungefär 10 m/s varje sekund.',
          'Fallskärmshopparen: hastigheten ökar, blir konstant, minskar och blir konstant igen.',
          'Lika stora krafter betyder konstant hastighet, inte att man står stilla.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
