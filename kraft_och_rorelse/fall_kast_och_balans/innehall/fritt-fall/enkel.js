/* Avsnittssida IV. Fall, kast och balans, text B: Fritt fall – nivån enkel (📗). Joachims uppdrag
 * 2026-11-11: kallor/kap3/IV-B-Fritt-fall-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i strömformatet av
 * verktyg/kap3-omvandlare.js --text b: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du dig:" =
 * liten rubrik utan kolon, [EXEMPEL: …] = exempelruta, [RUTA: …] = ruta. Tilläggen enligt III:s norm: rutan "Så
 * bläddrar du" sist i Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i
 * Fördjupningen rutan "Vill du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-b.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Fritt fall' },
        { typ: 'text', text: 'Tappar du mobilen faller den i golvet. Hoppar du från en stol landar du på golvet. Allt som vi släpper faller nedåt. Det är så vanligt att vi sällan tänker på det. Men vad är det egentligen som händer när något faller? Vilka krafter verkar, och varför går det fortare och fortare? Och faller tunga saker fortare än lätta?' },
        { typ: 'text', text: 'I den här texten får du använda det du lärde dig om resulterande kraft. Du ska se att ett fall kan förklaras med två krafter: en som drar nedåt och en som bromsar.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'varför vi faller, och varför det går fortare och fortare',
          'vad *gravitation* är',
          'vad ett *fritt fall* är',
          'hur du kan testa själv att det är luften som bromsar',
          'hur en fallskärm fungerar'
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
        { typ: 'rubrik', text: 'Tyngdkraften drar oss nedåt' },
        { typ: 'text', text: 'Tänk dig att du står på en stol. Du tar ett kliv rakt ut i luften. Vad händer? Du faller ner mot golvet. Det beror på att jorden drar i dig. Den kraften kallas *tyngdkraften|tyngdkraft*. Den drar alltid mot jordens mitt, och det är det vi menar när vi säger "nedåt".' },
        { typ: 'rubrik', text: 'Luftmotståndet bromsar' },
        { typ: 'text', text: 'När du faller måste du tränga dig igenom luften. Luften är inte tom. Den är full av små partiklar som du krockar med. Därför bromsar luften dig lite. Den kraften kallas *luftmotståndet|luftmotstånd*. Den pekar uppåt, åt motsatt håll mot rörelsen.' },
        { typ: 'text', text: 'Du kan känna luftmotståndet om du håller ut handen genom ett bilfönster. Luften trycker handen bakåt. Ju fortare bilen kör, desto hårdare trycker luften.' },
        { typ: 'rubrik', text: 'Tyngdkraften vinner' },
        { typ: 'text', text: 'När du faller från en stol verkar alltså två krafter på dig. Tyngdkraften drar nedåt, och luftmotståndet bromsar uppåt. Men de är inte lika stora. Tyngdkraften är mycket större. Den resulterande kraften pekar därför nedåt, och du faller.' },
        // [BILD B1: en person som faller från en stol – lång kraftpil nedåt för tyngdkraften, kort kraftpil uppåt för luftmotståndet]
        { id: 'bild-b1', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Du' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 1.5 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, bildtext: 'På väg ner: tyngdkraften är mycket större än luftmotståndet. Den resulterande kraften pekar nedåt, och farten ökar.' },
        { typ: 'text', text: 'Titta på bilden. Den långa pilen nedåt är tyngdkraften. Den korta pilen uppåt är luftmotståndet. Den långa pilen är större, så du rör dig nedåt.' },
        { typ: 'rubrik', text: 'Det går fortare och fortare' },
        { typ: 'text', text: 'När du kliver ut från stolen har du ingen fart alls i början. Sedan går det fortare och fortare. Precis innan du når golvet har du som högst fart.' },
        { typ: 'text', text: 'Varför ökar farten? Det beror på att den resulterande kraften pekar nedåt, åt samma håll som du rör dig. En kraft som pekar åt samma håll som rörelsen gör att farten ökar. När farten ökar säger man att det är en *accelererande|acceleration* rörelse.' },
        { typ: 'rubrik', text: 'Högre upp ger hårdare landning' },
        { typ: 'text', text: 'Ju högre upp du hoppar från, desto längre tid har farten på sig att öka. Därför gör det mycket ondare att hoppa från ett tak än från en stol.' },
        { typ: 'exempel', rubrik: 'Exempel: Stol eller tak?', rader: [
          'Från en stol når du golvet med ungefär 3 m/s. Det är som när man går fort.',
          'Från ett garagetak når du marken med nästan 8 m/s. Det är som en cyklist i full fart.'
        ] },
        { typ: 'rubrik', text: 'Golvet stoppar dig' },
        { typ: 'text', text: 'När du träffar golvet stannar du. Något måste ha bromsat dig. Det är golvet. Golvet trycker uppåt på dina fötter.' },
        { typ: 'text', text: 'För att du ska stanna räcker det inte att golvet trycker lika mycket som tyngdkraften drar. Då skulle krafterna ta ut varandra, och du skulle fortsätta med samma fart. Golvet måste trycka hårdare uppåt än tyngdkraften drar nedåt. Då pekar den resulterande kraften uppåt, och farten minskar tills du står still.' },
        // [BILD B2: en person som landar – kraftpil uppåt från golvet som är större än tyngdkraften nedåt]
        { id: 'bild-b2', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Du' }, krafter: [{ namn: 'kraft från golvet', riktning: 'upp', storlek: 30 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, underlag: true, bildtext: 'När du landar trycker golvet uppåt hårdare än tyngdkraften drar. Den resulterande kraften pekar uppåt, och farten minskar till noll.' },
        { typ: 'rubrik', text: 'Böjda knän ger en mjukare landning' },
        { typ: 'text', text: 'Har du hoppat ner från något högt med raka ben? Då vet du att det gör ont. Har du böjt på knäna när du landade gick det mycket bättre. Varför?' },
        { typ: 'text', text: 'När du böjer knäna tar det längre tid att stanna. Du bromsar under en längre sträcka i stället för på en gång. Då behöver golvet inte trycka lika hårt på dig. Kraften blir mindre, och landningen blir mjukare. Det är därför man alltid böjer på benen när man hoppar ner från något.' },
        { typ: 'text', text: 'Samma sak gäller den tjocka mattan i gympasalen, sanden i längdhoppsgropen och krockkudden i bilen. Alla gör att det tar längre tid att stanna. Då blir kraften mindre, och det gör mindre ont.' },
        { typ: 'rubrik', text: 'Allt som har massa drar i varandra' },
        { typ: 'text', text: 'Tyngdkraften är jordens drag i dig. Men det är inte bara jorden som drar. Allt som har massa drar i allt annat som har massa. Det kallas *gravitation*.' },
        { typ: 'text', text: 'Du drar alltså i jorden, och jorden drar i dig. Två böcker på ett bord drar i varandra också. Men den kraften är så liten att du aldrig märker den. Gravitationen blir bara stor när minst ett av föremålen har en jättestor massa, som jorden.' },
        { typ: 'text', text: 'Hur stark gravitationen är beror på två saker:' },
        { typ: 'punkter', punkter: [
          'Massan. Ju större massa, desto starkare drar det. Jorden har en enorm massa och drar därför tydligt i allt.',
          'Avståndet. Ju längre ifrån varandra saker är, desto svagare drar de. Långt ute i rymden är jordens drag mycket svagare.'
        ] },
        { typ: 'text', text: 'Tyngdkraften är alltså jordens gravitation. Den drar alltid mot jordens mitt, var du än står på jorden.' },
        // [BILD B3: jorden och människor på olika ställen på ytan, var och en med en kraftpil riktad mot jordens mitt]
        { id: 'bild-b3', typ: 'figur', namn: 'jordklot_tyngd', bildtext: 'Tyngdkraften pekar mot jordens mitt, var man än står. Det är det vi menar med ”nedåt”.' }
      ]
    },
    {
      id: 'fritt-fall', titel: 'Fritt fall',
      block: [
        { typ: 'rubrik', text: 'Testa själv med en bok och ett papper' },
        { typ: 'text', text: 'Vad tror du händer om du släpper en bok och ett papper på samma gång? Vilken kommer ner först? Du kan testa det hemma eller i klassrummet.' },
        { typ: 'ruta', rubrik: 'Testa själv: bok och papper', punkter: [
          'Håll en bok och ett plant papper lika högt. Släpp dem samtidigt. Boken landar först, och pappret seglar ner.',
          'Knyckla ihop pappret till en hård boll. Släpp igen. Nu landar de nästan samtidigt.'
        ] },
        { typ: 'text', text: 'Pappret väger lika mycket båda gångerna. Det enda du ändrade var formen. Det platta pappret har en stor yta, och luften bromsar det mycket. Bollen har en liten yta, och luften bromsar den nästan inte alls. Det var alltså luften som gjorde skillnaden, inte vikten.' },
        { typ: 'rubrik', text: 'En sten faller fortare än en fjäder i luft' },
        { typ: 'text', text: 'Tänk dig att någon står på taket på ett höghus. Hon släpper en sten och en fjäder på exakt samma gång. Vilken kommer ner först?' },
        { typ: 'text', text: 'Stenen kommer ner först. Fjädern seglar långsamt fram och tillbaka och kommer ner mycket senare. Men varför?' },
        { typ: 'text', text: 'Båda påverkas av samma två krafter: tyngdkraften nedåt och luftmotståndet uppåt. Skillnaden är hur stora krafterna är i förhållande till varandra. Fjädern väger nästan ingenting, men den har en stor yta som tar emot luft. Luftmotståndet blir då stort jämfört med fjäderns tyngd, och fjädern bromsas mycket. Stenen är tung och har en liten yta. För stenen är luftmotståndet litet jämfört med tyngden, och den bromsas nästan inte alls.' },
        // [BILD B4: stenen och fjädern i luft – för stenen en lång tyngdkraft och ett mycket kort luftmotstånd, för fjädern ett luftmotstånd nästan lika långt som tyngdkraften]
        { id: 'bild-b4-sten', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Sten', form: 'boll' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 0.6 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, bildtext: 'Stenen i luft: luftmotståndet är litet jämfört med tyngdkraften.' },
        { id: 'bild-b4-fjader', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Fjäder' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 9 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, bildtext: 'Fjädern i luft: luftmotståndet är nästan lika stort som tyngdkraften. Pilarna visar förhållandet för varje föremål – stenens tyngdkraft är egentligen mycket större än fjäderns.' },
        { typ: 'rubrik', text: 'Utan luft faller de lika fort' },
        { typ: 'text', text: 'Tänk dig nu att man gör samma sak i ett rum där all luft har pumpats bort. Ett utrymme utan luft kallas *vakuum*. Där finns inget luftmotstånd.' },
        { typ: 'text', text: 'I vakuum verkar bara tyngdkraften. Då faller stenen och fjädern lika fort, och de når golvet på samma gång. Det kan låta konstigt, men det är sant.' },
        { typ: 'text', text: 'Stenen dras visserligen hårdare av tyngdkraften än fjädern. Men stenen är också mycket trögare. Den är svårare att få fart på. De två sakerna tar ut varandra exakt. Därför får stenen och fjädern samma acceleration. Det är alltså inte tyngdkraften som är lika stor. Det är accelerationen.' },
        { typ: 'text', text: 'Ett fall där tyngdkraften är den enda kraft som verkar kallas ett *fritt fall*.' },
        { typ: 'rubrik', text: 'Astronauterna testade det på månen' },
        { typ: 'text', text: 'På månen finns nästan ingen luft. Det är nästan vakuum. År 1971 landade rymdfarkosten Apollo 15 på månen. Astronauten David Scott tog en hammare i ena handen och en fjäder i den andra. Han släppte dem samtidigt, och en kamera filmade.' },
        { typ: 'text', text: 'Hammaren och fjädern landade på samma gång. Det bevisade att det är luften, inte vikten, som gör att saker faller olika fort på jorden.' },
        { typ: 'text', text: 'Många tror att tunga saker alltid faller fortare än lätta. På jorden kan det se ut så. Men det är luftmotståndet som gör skillnaden, inte vikten.' },
        { typ: 'text', text: 'Den missuppfattningen är mycket gammal. I över 2 000 år, ända sedan den grekiske filosofen Aristoteles, trodde nästan alla att tunga saker faller fortare. Först på 1600-talet visade Galileo Galilei med försök att det inte stämmer.' },
        { typ: 'rubrik', text: 'Hastigheten ökar lika mycket varje sekund' },
        { typ: 'text', text: 'Hur fort går det när något faller fritt? Nära jordytan ökar hastigheten med ungefär 10 meter per sekund, varje sekund. Den ökningen kallas *tyngdaccelerationen|tyngdacceleration*.' },
        { typ: 'text', text: 'Om du släpper en sten från stillastående och den faller fritt blir det så här:' },
        { typ: 'punkter', punkter: [
          'efter 0 sekunder: 0 m/s',
          'efter 1 sekund: 10 m/s',
          'efter 2 sekunder: 20 m/s',
          'efter 3 sekunder: 30 m/s'
        ] },
        { typ: 'text', text: 'Varje sekund kommer alltså 10 m/s till. Efter tre sekunder faller stenen med 30 meter per sekund. Det är ungefär 110 km/h, lika fort som en bil på motorvägen.' },
        { typ: 'exempel', rubrik: 'Exempel: Hur fort är 30 m/s?', rader: [
          'Varje meter per sekund är 3,6 kilometer i timmen.',
          '30 m/s blir då 30 · 3,6 = 108 km/h, alltså ungefär 110 km/h.'
        ] },
        { typ: 'text', text: 'I verkligheten finns det luft, och luftmotståndet bromsar lite. Därför går det lite långsammare ju fortare stenen faller.' }
      ]
    },
    {
      id: 'fallskarmshopparen', titel: 'Fallskärmshopparen',
      block: [
        { typ: 'rubrik', text: 'Samma två krafter hela tiden' },
        { typ: 'text', text: 'En fallskärmshoppare hoppar ut från ett flygplan. Under hela hoppet verkar samma två krafter: tyngdkraften nedåt och luftmotståndet uppåt.' },
        { typ: 'text', text: 'Tyngdkraften är lika stor hela tiden. Det är luftmotståndet som ändras. Det blir större ju fortare man faller. Det blir också större ju större yta man har mot luften. Därför ändras rörelsen under hoppet. Vi kan dela hoppet i fyra delar.' },
        { typ: 'rubrik', text: 'Del 1: Farten ökar' },
        { typ: 'text', text: 'Hopparen har just hoppat ut. Farten är låg, och luftmotståndet är litet. Tyngdkraften är mycket större än luftmotståndet. Den resulterande kraften pekar nedåt, och farten ökar.' },
        { typ: 'rubrik', text: 'Del 2: Farten slutar öka' },
        { typ: 'text', text: 'Ju fortare hopparen faller, desto större blir luftmotståndet. Till slut är luftmotståndet lika stort som tyngdkraften. Krafterna tar ut varandra, och den resulterande kraften blir noll. Då slutar farten att öka. Hopparen faller nu med ungefär 200 km/h, men farten är jämn.' },
        { typ: 'rubrik', text: 'Del 3: Fallskärmen öppnas och bromsar' },
        { typ: 'text', text: 'Hopparen drar i snöret, och fallskärmen vecklas ut. Den stora skärmen tar emot mycket luft. Luftmotståndet blir plötsligt mycket större än tyngdkraften. Nu pekar den resulterande kraften uppåt, mot rörelsen. Farten minskar.' },
        { typ: 'rubrik', text: 'Del 4: En ny, lägre jämn fart' },
        { typ: 'text', text: 'När farten minskar blir luftmotståndet mindre igen. Till slut är det åter lika stort som tyngdkraften. Krafterna tar ut varandra igen, och farten blir jämn. Men nu är farten mycket lägre, ungefär som när man springer. Hopparen kan landa säkert.' },
        // [BILD B5: fallskärmshopparen i fyra lägen – accelererar, konstant hastighet, bromsar, lägre konstant fart – med luftmotstånd uppåt och tyngdkraft nedåt; samma skala i alla fyra, så att pilarnas längder visar förhållandet mellan krafterna]
        { id: 'bild-b5-1', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 3 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '1. Farten ökar: tyngdkraften är större än luftmotståndet.' },
        { id: 'bild-b5-2', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 10 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '2. Konstant hastighet: krafterna är lika stora.' },
        { id: 'bild-b5-3', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 25 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '3. Skärmen öppnas: luftmotståndet är större än tyngdkraften, och farten minskar.' },
        { id: 'bild-b5-4', typ: 'figur', namn: 'kraftpilar', foremal: { namn: 'Hopparen' }, krafter: [{ namn: 'luftmotstånd', riktning: 'upp', storlek: 10 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }], resultant: true, varden: false, skala: 25, bildtext: '4. Lägre konstant fart: krafterna är lika stora igen.' },
        { typ: 'rubrik', text: 'Lika stora krafter betyder jämn fart, inte stillastående' },
        { typ: 'text', text: 'Titta på del 2 och del 4. Där är krafterna lika stora. Många tror att det betyder att hopparen står stilla i luften. Men det gör hon inte. Hon faller hela tiden.' },
        { typ: 'text', text: 'Lika stora krafter betyder att farten inte ändras. Hopparen fortsätter nedåt med samma fart. Det är samma sak som du lärde dig om tröghet: när krafterna tar ut varandra fortsätter allt som förut. Står något still fortsätter det att stå still. Rör det sig fortsätter det att röra sig med samma fart.' },
        { typ: 'rubrik', text: 'Luften skyddar oss mot regnet' },
        { typ: 'text', text: 'Också regndroppar faller genom luften. Utan luft skulle en regndroppe från ett högt moln komma ner nästan lika fort som ett flygplan flyger. Men luftmotståndet bromsar droppen, precis som fallskärmen bromsar hopparen. Därför faller regndroppar ganska långsamt, och regnet gör inte ont.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Tyngdkraften drar nedåt och luftmotståndet bromsar uppåt.',
          'Tyngdkraften är störst, så det går fortare och fortare.',
          'Golvet stoppar dig genom att trycka hårdare än tyngdkraften drar. Böjda knän gör landningen mjukare.',
          'Gravitation: allt med massa drar i varandra.'
        ] },
        { typ: 'punkter', punkter: [
          'Luften bromsar mer när ytan är stor. Utan luft faller allt lika fort.',
          'I fritt fall ökar hastigheten med ungefär 10 m/s varje sekund.',
          'Fallskärmshopparen: farten ökar, blir jämn, minskar och blir jämn igen.',
          'Lika stora krafter betyder jämn fart, inte att man står stilla.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
