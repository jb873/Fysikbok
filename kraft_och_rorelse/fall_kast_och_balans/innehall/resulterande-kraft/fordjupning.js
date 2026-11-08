/* Avsnittssida IV. Fall, kast och balans, text A: Resulterande kraft – nivån fordjupning (📕). Arbetsorder 12
 * (2026-11-07): kallor/kap3/IV-A-Resulterande-kraft-alla-nivaer-v3.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du
 * dig:" = liten rubrik utan kolon. Tilläggen enligt III:s norm: rutan "Så bläddrar du" sist i Inledningen och
 * länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen. [BILD …] står som kommentar, med figuren efter.
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Resulterande kraft – fördjupning' },
        { typ: 'text', text: 'I Standard ritade du den resulterande kraften genom att flytta pilar på rutat papper. Här lär du dig att göra samma sak med räkning i stället, på det sätt som man gör på gymnasiet. Du får också se att en kraft kan delas upp i två delar, och varför ett spänt snöre aldrig kan bli helt rakt.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att beskriva en kraft med två delar, *komposanter|komposant*',
          'att lägga ihop krafter del för del och räkna ut resultanten med Pythagoras sats',
          'att dela upp en kraft i två delar'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'komposanter', titel: 'En kraft har två delar',
      block: [
        { typ: 'rubrik', text: 'En kraft på rutat papper kan beskrivas med två tal' },
        { typ: 'text', text: 'Rita en kraftpil på rutat papper och räkna rutorna. Pilen går ett visst antal rutor åt sidan och ett visst antal rutor uppåt. Med skalan 1 ruta = 10 N kan en pil som går 5 rutor åt höger och 1 ruta uppåt beskrivas med de två talen 50 N åt höger och 10 N uppåt. De två delarna kallas kraftens *komposanter|komposant*.' },
        { typ: 'text', text: 'Komposanterna är inte två nya krafter som verkar på föremålet. De är ett annat sätt att beskriva samma kraft. En kraft snett uppåt höger gör precis samma sak som en kraft rakt åt höger och en kraft rakt uppåt tillsammans.' },
        { typ: 'rubrik', text: 'Krafter läggs ihop genom att lägga ihop delarna var för sig' },
        { typ: 'text', text: 'Här är fördelen med komposanter. För att lägga ihop två krafter i olika riktningar behöver du inte rita. Du lägger ihop delarna åt sidan för sig och delarna uppåt för sig. En kraft som går 5 rutor höger och 1 upp, plus en kraft som går 1 ruta höger och 3 upp, blir tillsammans 6 rutor höger och 4 upp.' },
        { typ: 'text', text: 'Prova att rita samma två krafter med metoden från Standard: flytta den ena pilen till spetsen av den andra. Pilen från start till slut går precis 6 rutor höger och 4 upp. De två metoderna ger alltså samma svar, och det är ingen slump. När du flyttar pilen lägger du ju till dess steg åt sidan och dess steg uppåt till den första pilens.' },
        { typ: 'rubrik', text: 'Resultantens storlek räknas ut med Pythagoras sats' },
        { typ: 'text', text: 'När du vet komposanterna kan du räkna ut hur lång resultanten är. Delen åt sidan, delen uppåt och resultanten bildar en rätvinklig triangel, och resultanten är hypotenusan. Med Pythagoras sats blir resultanten i exemplet √(6² + 4²) = √52 ≈ 7,2 rutor, alltså ungefär 72 N.' },
        { typ: 'text', text: 'Pulkan i Standard fungerar på samma sätt. Krafterna var 4 rutor åt höger och 3 rutor höger och 4 upp. Tillsammans blir det 7 rutor höger och 4 upp, och resultanten blir √(7² + 4²) = √65 ≈ 8,1 rutor, alltså ungefär 81 N. Det är samma svar som du fick genom att rita och mäta, men nu exakt.' },
        { typ: 'text', text: 'Det enklaste fallet är två krafter som verkar vinkelrätt mot varandra. Två krafter på 30 N och 40 N i rät vinkel ger resultanten √(30² + 40²) = √2 500 = 50 N. Lägg märke till att svaret är mindre än 30 N + 40 N = 70 N, på samma sätt som pulkans resultant i Standard blev mindre än summan av krafterna.' },
        { typ: 'formel', uttryck: 'R = √(Fₓ² + Fᵧ²)', forklaring: 'R resultantens storlek (N), Fₓ delen åt sidan (N), Fᵧ delen uppåt (N)' },
        { typ: 'rubrik', text: 'Jämvikt betyder att delarna tar ut varandra i båda riktningarna' },
        { typ: 'text', text: 'Med komposanter blir det tydligt vad jämvikt betyder när krafterna inte ligger längs samma linje. Resultanten är noll bara om delarna åt sidan tar ut varandra och delarna uppåt och nedåt också tar ut varandra. Båda villkoren måste gälla samtidigt.' },
        { typ: 'text', text: 'Tänk på en lampa som hänger i två snören som går snett uppåt åt var sitt håll. Snörenas delar åt sidan är lika stora och motriktade, så de tar ut varandra. Snörenas delar uppåt är tillsammans lika stora som lampans tyngd. Därför hänger lampan still.' },
        // [BILD R4: en kraft delad i två komposanter på rutat papper, och lampan i två snören]
        { id: 'bild-r4-komposanter', typ: 'figur', namn: 'resultant_rutor', lage: 'komposanter', kraft: { dx: 5, dy: 1, namn: 'F' }, komposanter: ['50 N', '10 N'], skala: '1 ruta = 10 N' },
        { id: 'bild-r4-lampa', typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lampa' }, snoren: true, komposanter: true, varden: false, krafter: [{ namn: 'snörkraft', riktning: 130, storlek: 6.527036446661393 }, { namn: 'snörkraft', riktning: 50, storlek: 6.527036446661393 }, { namn: 'tyngdkraft', riktning: 'ner', storlek: 10 }] }
      ]
    },
    {
      id: 'kraftuppdelning', titel: 'En kraft kan delas upp',
      block: [
        { typ: 'rubrik', text: 'En kraft kan delas upp i två delar' },
        { typ: 'text', text: 'Det går också att gå åt andra hållet: att börja med en kraft och dela upp den i två delar. Det är ofta det som behövs för att förstå vad en kraft gör. Drar du en kälke med ett rep snett uppåt kan dragkraften delas upp i en del framåt och en del uppåt. Delen framåt drar kälken framåt. Delen uppåt lyfter lite i kälken, så att normalkraften och friktionen blir mindre. Kom ihåg att delarna inte är två krafter. Det är fortfarande en enda kraft i repet, men den gör två saker samtidigt.' },
        { typ: 'text', text: 'Ju brantare du håller repet, desto större blir delen uppåt och desto mindre delen framåt. I en enkel modell, där du drar lika hårt hela tiden och friktionen bara beror på normalkraften, finns det därför en bästa vinkel. Håller du repet för lågt får du ingen hjälp med friktionen, och håller du det för högt drar du mest uppåt. För en kälke på snö är den bästa vinkeln ganska liten, eftersom friktionen mellan medar och snö är liten.' },
        { typ: 'rubrik', text: 'Tyngdkraften i en backe delas upp längs backen och mot backen' },
        { typ: 'text', text: 'I texten om tyngdkraften såg du att normalkraften är mindre än tyngden i en backe. Med kraftuppdelning ser man varför. Tyngdkraften pekar rakt nedåt, men man kan dela upp den i en del längs backen och en del vinkelrätt mot backen. Delen vinkelrätt mot backen tas emot av normalkraften. Om inget annat trycker eller drar vinkelrätt mot backen, och föremålet ligger kvar mot den, är normalkraften lika stor som just den delen. Delen längs backen drar föremålet nedför.' },
        { typ: 'text', text: 'På en plan väg är hela tyngdkraften vinkelrät mot underlaget, och ingen del drar framåt. I en lodrät vägg är hela tyngdkraften riktad längs ytan. Alla backar däremellan har en del av varje. Ju brantare backen är, desto större blir delen längs backen. Därför drar tyngdkraften hårdare nedför en brant backe än en flack.' },
        { typ: 'rubrik', text: 'Ett spänt snöre kan aldrig bli helt rakt' },
        { typ: 'text', text: 'Häng en tung väska mitt på ett snöre som är spänt mellan två stolpar. Snöret böjer sig nedåt i mitten. Försök sedan att dra snöret så rakt som möjligt. Det går inte, hur hårt du än drar.' },
        { typ: 'text', text: 'Förklaringen är komposanterna. Väskans tyngd måste tas emot av snörets delar uppåt. Ju rakare snöret är, desto mindre del av snörkraften pekar uppåt. Med ett nästan rakt snöre måste kraften i snöret bli enorm för att delen uppåt ska räcka. I en enkel modell, med en tyngd mitt på ett vågrätt snöre, skulle ett helt rakt snöre kräva en oändligt stor kraft. Det är samma sak som du såg i Standard: ju mer två krafter drar isär, desto mindre blir resultanten. Det är också därför kraftledningar alltid hänger i en båge mellan stolparna.' },
        { typ: 'rubrik', text: 'Hastighet kan också delas upp i två delar' },
        { typ: 'text', text: 'Komposanter används inte bara för krafter. Allt som har både storlek och riktning kan delas upp på samma sätt, och det gäller också hastighet. En boll som kastas snett uppåt har en del av hastigheten framåt och en del uppåt. I texten om kaströrelse ser du att de två delarna beter sig helt olika: om luftmotståndet är litet är delen framåt densamma hela tiden, medan delen uppåt hela tiden ändras av tyngdkraften. Storheter som har både storlek och riktning kallas på gymnasiet *vektorer|vektor*.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En kraft kan beskrivas med två delar, komposanter: en del åt sidan och en del uppåt.',
          'Krafter läggs ihop genom att lägga ihop komposanterna var för sig. Det ger samma svar som att rita.',
          'Resultantens storlek räknas ut med Pythagoras sats: R = √(Fₓ² + Fᵧ²).',
          'Jämvikt betyder att delarna tar ut varandra i båda riktningarna samtidigt.',
          'En kraft kan delas upp i två delar, till exempel tyngdkraften i en backe eller dragkraften i ett snett rep.',
          'Ett spänt snöre med en tyngd kan aldrig bli helt rakt, eftersom kraften i snöret då skulle bli oändligt stor.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
