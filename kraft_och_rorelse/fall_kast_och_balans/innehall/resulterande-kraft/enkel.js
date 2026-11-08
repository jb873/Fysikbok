/* Avsnittssida IV. Fall, kast och balans, text A: Resulterande kraft – nivån enkel (📗). Arbetsorder 12
 * (2026-11-07): kallor/kap3/IV-A-Resulterande-kraft-alla-nivaer-v3.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du
 * dig:" = liten rubrik utan kolon. Tilläggen enligt III:s norm: rutan "Så bläddrar du" sist i Inledningen och
 * länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen. [BILD …] står som kommentar, med figuren efter.
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Resulterande kraft' },
        { typ: 'text', text: 'Ofta drar eller knuffar flera krafter på samma sak på en gång. Du har redan sett blocket på bordet: du drar framåt och friktionen drar bakåt. I den här texten lär du dig att lägga ihop krafter. Först krafter som drar åt samma håll eller åt motsatt håll. Sedan krafter som drar snett mot varandra.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*resulterande kraft* – alla krafter tillsammans',
          'att lägga ihop krafter åt samma håll och åt motsatt håll',
          'att rita den resulterande kraften när krafterna drar snett'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'krafter-langs-samma-linje', titel: 'Krafter längs samma linje',
      block: [
        { typ: 'rubrik', text: 'Alla krafter tillsammans kallas den resulterande kraften' },
        { typ: 'text', text: 'Tänk dig att flera personer knuffar på samma låda. En del knuffar hårt, andra lite. Lådan kan ändå bara röra sig på ett sätt. Den rör sig som om alla knuffar hade blivit en enda stor knuff.' },
        { typ: 'text', text: 'Den enda kraften som är alla krafter tillsammans kallas den *resulterande kraften|resulterande kraft*. Ibland säger man bara *resultanten|resultant*. Det är den som bestämmer vad som händer med lådan.' },
        { typ: 'rubrik', text: 'Två krafter åt samma håll hjälps åt' },
        { typ: 'text', text: 'En bil har fått motorstopp. Två personer skjuter på den bakifrån. Den ena skjuter med 300 N och den andra med 200 N. Båda skjuter framåt, så de hjälps åt.' },
        { typ: 'text', text: 'Då lägger man ihop krafterna: 300 N + 200 N = 500 N. Den resulterande kraften är alltså 500 N, och den pekar framåt. Ritar man krafterna som pilar sätter man den ena pilen direkt efter den andra. Tillsammans blir de en lång pil.' },
        // [BILD R1: krafter åt samma håll och åt motsatt håll]
        { id: 'bild-r1-samma', typ: 'figur', namn: 'kraftpilar', kedja: true, rod: true, resultant: true, krafter: [{ riktning: 'hoger', storlek: 300 }, { riktning: 'hoger', storlek: 200 }] },
        { id: 'bild-r1-motsatt', typ: 'figur', namn: 'kraftpilar', rod: true, resultant: true, krafter: [{ riktning: 'vanster', storlek: 300 }, { riktning: 'hoger', storlek: 250 }] },
        { typ: 'rubrik', text: 'Två krafter åt motsatt håll motverkar varandra' },
        { typ: 'text', text: 'Nu tänker vi oss en dragkamp. Laget till vänster drar med 300 N. Laget till höger drar med 250 N. Krafterna drar åt var sitt håll, så de motverkar varandra.' },
        { typ: 'text', text: 'Då räknar man ut skillnaden: 300 N − 250 N = 50 N. Den resulterande kraften är alltså 50 N. Den pekar åt vänster, mot laget som drar hårdast. När två krafter drar åt motsatt håll pekar den resulterande kraften alltid åt den största kraftens håll.' },
        { typ: 'rubrik', text: 'Lika stora krafter åt motsatt håll ger jämvikt' },
        { typ: 'text', text: 'Om båda lagen drar precis lika hårt blir skillnaden noll. Den resulterande kraften är noll. Det kallas *jämvikt|jämvikt*.' },
        { typ: 'text', text: 'Repet står då still mitt emellan lagen. Det kan se ut som om ingen gör någonting. Men båda lagen drar så hårt de kan. Krafterna finns, men de tar ut varandra.' },
        { typ: 'rubrik', text: 'Den resulterande kraften bestämmer vad som händer' },
        { typ: 'text', text: 'Om den resulterande kraften är noll ändras inte rörelsen. Det som ligger still fortsätter att ligga still. Det som rör sig fortsätter i samma fart och åt samma håll. Det är tröghetslagen.' },
        { typ: 'text', text: 'Om den resulterande kraften pekar framåt ökar farten – föremålet accelererar. Om den pekar bakåt minskar farten – föremålet retarderar. Det är alltså den resulterande kraften som avgör, inte varje kraft för sig.' },
        { typ: 'rubrik', text: 'En bil i jämn fart har ingen resulterande kraft' },
        { typ: 'text', text: 'Många tror att något som rör sig framåt måste ha en kraft framåt som är större än krafterna bakåt. Men tänk på en bil som kör i jämn fart på motorvägen. Motorn ger en kraft framåt. Luftmotståndet och friktionen ger krafter bakåt. När farten är jämn är krafterna lika stora.' },
        { typ: 'text', text: 'Den resulterande kraften är alltså noll, fast bilen kör fort. Bilen fortsätter ändå, för det säger tröghetslagen. Först när föraren gasar mer blir kraften framåt störst, och då ökar farten.' }
      ]
    },
    {
      id: 'krafter-i-olika-riktningar', titel: 'Krafter i olika riktningar',
      block: [
        { typ: 'rubrik', text: 'Krafter som drar snett kan inte bara räknas ihop' },
        { typ: 'text', text: 'Två barn drar en pulka med var sitt rep. Det ena barnet går rakt framför pulkan och drar med 40 N. Det andra barnet går en bit vid sidan och drar snett framåt med 50 N. Mellan repen blir det en vinkel.' },
        { typ: 'text', text: 'Det är lätt att tro att pulkan dras med 40 N + 50 N = 90 N. Men så är det inte. Det andra barnet drar ju lite åt sidan också. Den delen hjälper inte till att dra pulkan framåt. Därför blir den resulterande kraften mindre än 90 N. När krafterna drar snett måste man rita för att hitta den resulterande kraften.' },
        { typ: 'rubrik', text: 'Först väljer man en skala' },
        { typ: 'text', text: 'På rutat papper kan du rita krafter som pilar. Först bestämmer du hur mycket en ruta ska vara. Vi säger att en ruta är 10 N.' },
        { typ: 'text', text: 'Då blir kraften 40 N en pil som är 4 rutor lång. Den pekar rakt åt höger. Kraften 50 N pekar snett. Den pilen går 3 rutor åt höger och 4 rutor uppåt. Mät den med linjal, så ser du att den är precis 5 rutor lång. Det stämmer: 5 rutor är 50 N.' },
        { typ: 'rubrik', text: 'Steg 1: Rita båda pilarna från samma punkt' },
        { typ: 'text', text: 'Sätt en prick på papperet. Det är pulkan. Rita pilen på 40 N från pricken, 4 rutor åt höger. Rita sedan pilen på 50 N från samma prick: 3 rutor åt höger och 4 rutor uppåt.' },
        { typ: 'text', text: 'Nu ser du båda krafterna som drar i pulkan. Men du ser ännu inte vad de blir tillsammans.' },
        { typ: 'rubrik', text: 'Steg 2: Flytta den ena pilen till spetsen av den andra' },
        { typ: 'text', text: 'Nu flyttar du pilen på 50 N. Du ritar den igen, men nu ska den börja där pilen på 40 N slutar, vid spetsen.' },
        { typ: 'text', text: 'Det viktiga är att pilen är precis likadan efter flytten. Den ska vara lika lång och peka åt exakt samma håll. Du flyttar den, men du vrider den inte. Räkna rutorna: pilen ska gå 3 rutor åt höger och 4 rutor uppåt, precis som förut.' },
        // [BILD R2: att rita den resulterande kraften på rutat papper, i tre steg]
        { id: 'bild-r2', typ: 'figur', namn: 'resultant_rutor', lage: 'steg', krafter: [{ dx: 4, dy: 0, namn: '40 N' }, { dx: 3, dy: 4, namn: '50 N' }], resultant: { namn: '≈ 81 N' }, rubriker: ['1. Båda krafterna från samma punkt', '2. Flytta 50 N till spetsen av 40 N', '3. Resultanten från start till slut'], bildtext: 'Skala: 1 ruta = 10 N. 50 N = 3 rutor höger + 4 rutor upp. Resultanten = 7 rutor höger + 4 rutor upp ≈ 8,1 rutor ≈ 81 N.' },
        { typ: 'rubrik', text: 'Steg 3: Rita pilen från start till slut' },
        { typ: 'text', text: 'Nu ritar du en ny pil. Den börjar i pricken där du startade. Den slutar vid spetsen av pilen som du flyttade. Den nya pilen är den resulterande kraften.' },
        { typ: 'text', text: 'Mät hur lång pilen är. I exemplet blir den ungefär 8 rutor lång. En ruta är 10 N, så den resulterande kraften är ungefär 80 N. Det är mindre än 90 N, precis som vi trodde. Pilen pekar snett framåt.' },
        { typ: 'text', text: 'I exemplet gick pilarna genom rutornas hörn, så att du kunde räkna rutorna. Om en pil inte gör det mäter du den med linjal i stället. Vinkeln mäter du med en gradskiva.' },
        { typ: 'rubrik', text: 'Det vanligaste felet är att vrida pilen' },
        { typ: 'text', text: 'När man flyttar en pil är det lätt att vrida den. Den kanske råkar peka rakt uppåt, eller åt samma håll som den första pilen. Då blir svaret fel.' },
        { typ: 'text', text: 'En kraft har både en storlek och en riktning. Båda måste vara likadana efter flytten. Rutorna hjälper dig att kontrollera. Räkna hur många rutor pilen går åt sidan och hur många den går uppåt. Det ska vara samma antal före och efter flytten.' },
        { typ: 'rubrik', text: 'Ju mer krafterna drar isär, desto mindre blir den resulterande kraften' },
        { typ: 'text', text: 'Tänk dig två krafter som är 100 N var. Drar de åt exakt samma håll blir de 200 N tillsammans. Drar de lite isär, med vinkeln 45°, blir de ungefär 185 N. Drar de rakt åt sidan från varandra, med vinkeln 90°, blir de ungefär 140 N. Drar de rakt mot varandra, med vinkeln 180°, blir det noll.' },
        // [BILD R3: två krafter på 100 N med vinkeln 0°, 45°, 90° och 180°]
        { id: 'bild-r3', typ: 'figur', namn: 'resultant_rutor', lage: 'vinklar', kraft: 100, vinklar: [0, 45, 90, 180], bildtext: 'Två krafter på 100 N. Ju större vinkel, desto mindre resulterande kraft.' },
        { typ: 'text', text: 'Ju mer krafterna drar isär, desto mer av kraften drar åt sidorna i stället för framåt. Därför går man bredvid varandra när man är två som drar en tung släde. Då drar båda nästan åt samma håll, och släden får nästan all kraft.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Den *resulterande kraften|resulterande kraft* (resultanten) är alla krafter tillsammans.',
          'Krafter åt samma håll läggs ihop. Krafter åt motsatt håll dras från varandra.',
          'När två krafter drar åt motsatt håll pekar den resulterande kraften åt den största kraftens håll.',
          'Är den resulterande kraften noll är det jämvikt, och rörelsen ändras inte.',
          'Krafter som drar snett ritar man: flytta den ena pilen till spetsen av den andra utan att vrida den, och rita pilen från start till slut.',
          'Ju mer krafterna drar isär, desto mindre blir den resulterande kraften.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
