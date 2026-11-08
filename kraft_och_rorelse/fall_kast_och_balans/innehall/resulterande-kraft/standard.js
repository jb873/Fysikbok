/* Avsnittssida IV. Fall, kast och balans, text A: Resulterande kraft – nivån standard (📘). Arbetsorder 12
 * (2026-11-07): kallor/kap3/IV-A-Resulterande-kraft-alla-nivaer-v3.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js: ## = avsnitt, ### = rubrik, ett stycke = ett textblock, "Det här lär du
 * dig:" = liten rubrik utan kolon. Tilläggen enligt III:s norm: rutan "Så bläddrar du" sist i Inledningen och
 * länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen. [BILD …] står som kommentar, med figuren efter.
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Resulterande kraft' },
        { typ: 'text', text: 'Ofta verkar flera krafter på ett föremål samtidigt. I kapitlet om kraft och friktion såg du att dragkraften och friktionen kan ta ut varandra. Nu ska du lära dig att lägga ihop krafter – både krafter som verkar längs samma linje och krafter som verkar i olika riktningar. Det du får fram kallas den resulterande kraften, och det är den som avgör hur föremålet rör sig.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*resulterande kraft* – alla krafter tillsammans',
          'att lägga ihop krafter åt samma håll och åt motsatt håll',
          'att rita den resulterande kraften när krafterna verkar i olika riktningar'
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
        { typ: 'rubrik', text: 'Den resulterande kraften är alla krafter tillsammans' },
        { typ: 'text', text: 'När flera krafter verkar på samma föremål spelar det ingen roll hur många de är. Föremålet rör sig som om det bara fanns en enda kraft, som är alla krafterna tillsammans. Den kraften kallas den *resulterande kraften|resulterande kraft*, eller kortare *resultanten|resultant*. Det är den du ska titta på när du vill veta vad som händer med föremålet.' },
        { typ: 'rubrik', text: 'Krafter åt samma håll läggs ihop' },
        { typ: 'text', text: 'Tänk dig att en bil har fått motorstopp och att två personer skjuter på den bakifrån. Den ena skjuter med kraften 300 N och den andra med 200 N. Båda krafterna pekar framåt, och därför hjälps de åt. Den resulterande kraften blir 300 N + 200 N = 500 N framåt.' },
        { typ: 'text', text: 'Om man ritar krafterna som pilar sätter man den ena pilen direkt efter den andra. Den resulterande kraften är då en pil från början av den första till spetsen av den andra – lika lång som båda pilarna tillsammans.' },
        // [BILD R1: krafter åt samma håll och åt motsatt håll]
        { id: 'bild-r1-samma', typ: 'figur', namn: 'kraftpilar', kedja: true, rod: true, resultant: true, krafter: [{ riktning: 'hoger', storlek: 300 }, { riktning: 'hoger', storlek: 200 }] },
        { id: 'bild-r1-motsatt', typ: 'figur', namn: 'kraftpilar', rod: true, resultant: true, krafter: [{ riktning: 'vanster', storlek: 300 }, { riktning: 'hoger', storlek: 250 }] },
        { typ: 'rubrik', text: 'Krafter åt motsatt håll dras från varandra' },
        { typ: 'text', text: 'I en dragkamp drar det ena laget åt vänster med 300 N och det andra åt höger med 250 N. Nu motverkar krafterna varandra. Den resulterande kraften blir skillnaden mellan dem: 300 N − 250 N = 50 N. Den pekar åt samma håll som den största kraften, alltså åt vänster, mot laget som drar hårdast.' },
        { typ: 'text', text: 'Om båda lagen drar exakt lika hårt blir den resulterande kraften noll. Krafterna tar ut varandra, och det är *jämvikt|jämvikt*. Repet står still mitt emellan lagen, trots att båda lagen anstränger sig så mycket de kan.' },
        { typ: 'rubrik', text: 'Den resulterande kraften avgör hur rörelsen ändras' },
        { typ: 'text', text: 'Är den resulterande kraften noll ändras inte rörelsen. Ett föremål som ligger still fortsätter att ligga still, och ett föremål som rör sig fortsätter i samma fart och riktning. Det är tröghetslagen. Är den resulterande kraften inte noll ändras rörelsen åt det håll som resultanten pekar: föremålet accelererar om den pekar framåt och retarderar om den pekar bakåt.' },
        { typ: 'text', text: 'Många tror att det måste finnas en resulterande kraft framåt så länge något rör sig framåt. Men en bil som kör i jämn fart på motorvägen har en resulterande kraft som är noll. Motorns kraft framåt är precis lika stor som luftmotståndet och friktionen bakåt. Först när föraren gasar mer blir resultanten större än noll, och då ökar farten.' }
      ]
    },
    {
      id: 'krafter-i-olika-riktningar', titel: 'Krafter i olika riktningar',
      block: [
        { typ: 'rubrik', text: 'Krafter i olika riktningar kan inte bara läggas ihop som tal' },
        { typ: 'text', text: 'Två barn drar en pulka med var sitt rep. Det ena drar rakt framåt med 40 N. Det andra går en bit vid sidan och drar snett framåt med 50 N. Det är lätt att tro att den resulterande kraften blir 40 N + 50 N = 90 N, men det stämmer inte. En del av det andra barnets kraft drar åt sidan och inte framåt. Därför blir den resulterande kraften mindre än 90 N, och den pekar snett.' },
        { typ: 'text', text: 'När krafterna verkar i olika riktningar kan man alltså inte bara räkna ihop talen. I stället hittar man den resulterande kraften genom att rita.' },
        { typ: 'rubrik', text: 'Den resulterande kraften kan ritas på rutat papper' },
        { typ: 'text', text: 'För att rita krafterna behöver du en skala, till exempel att en ruta motsvarar 10 N. Sedan gör du så här, i tre steg:' },
        { typ: 'numrerad', punkter: [
          'Rita båda krafterna från samma punkt, med rätt längd och rätt riktning. Kraften 40 N blir 4 rutor åt höger. Kraften 50 N går snett: 3 rutor åt höger och 4 rutor uppåt. Den pilen blir precis 5 rutor lång, alltså 50 N.',
          'Flytta den andra pilen så att den börjar där den första pilen slutar. Pilen ska ha samma längd och samma riktning som förut – du flyttar den, men vrider den inte.',
          'Rita en pil från startpunkten till spetsen av den flyttade pilen. Det är den resulterande kraften. Mät hur lång den är och räkna om med skalan.'
        ] },
        { typ: 'text', text: 'I exemplet med pulkan går den resulterande kraften 7 rutor åt höger och 4 rutor uppåt. Mäter du den blir den ungefär 8 rutor lång, alltså ungefär 80 N. Den pekar snett framåt, lite närmare det andra barnets riktning eftersom den kraften är störst.' },
        { typ: 'text', text: 'I exemplet går pilarna genom rutornas hörn, och därför kan du räkna rutorna. Så är det inte alltid. Går en pil inte genom hörnen ritar och mäter du längden med linjal och vinkeln med gradskiva. Rutorna är då ett stöd, men det är mätningen som gäller.' },
        // [BILD R2: att rita den resulterande kraften på rutat papper, i tre steg]
        { id: 'bild-r2', typ: 'figur', namn: 'resultant_rutor', lage: 'steg', krafter: [{ dx: 4, dy: 0, namn: '40 N' }, { dx: 3, dy: 4, namn: '50 N' }], resultant: { namn: '≈ 81 N' }, rubriker: ['1. Båda krafterna från samma punkt', '2. Flytta 50 N till spetsen av 40 N', '3. Resultanten från start till slut'], bildtext: 'Skala: 1 ruta = 10 N. 50 N = 3 rutor höger + 4 rutor upp. Resultanten = 7 rutor höger + 4 rutor upp ≈ 8,1 rutor ≈ 81 N.' },
        { typ: 'rubrik', text: 'Pilen behåller sin riktning när den flyttas' },
        { typ: 'text', text: 'Det vanligaste misstaget när man ritar är att vrida pilen när man flyttar den, så att den till exempel pekar rakt uppåt eller fortsätter i samma riktning som den första pilen. Men en kraft har både storlek och riktning, och båda måste vara desamma efter flytten. Rutorna hjälper dig: pilen på 50 N gick tre rutor åt höger och fyra rutor uppåt, och den ska göra exakt samma sak efter flytten.' },
        { typ: 'text', text: 'Det spelar ingen roll vilken av pilarna du flyttar. Flyttar du den första pilen till spetsen av den andra i stället får du samma resulterande kraft.' },
        { typ: 'rubrik', text: 'Ju större vinkeln är, desto mindre blir den resulterande kraften' },
        { typ: 'text', text: 'Tänk dig två krafter på 100 N vardera. Pekar de åt samma håll, vinkeln 0°, blir den resulterande kraften 200 N. Är vinkeln mellan dem 45° blir resultanten ungefär 185 N, och vid 90° ungefär 140 N. Pekar krafterna rakt mot varandra, vinkeln 180°, tar de ut varandra och resultanten blir noll.' },
        // [BILD R3: två krafter på 100 N med vinkeln 0°, 45°, 90° och 180°]
        { id: 'bild-r3', typ: 'figur', namn: 'resultant_rutor', lage: 'vinklar', kraft: 100, vinklar: [0, 45, 90, 180], bildtext: 'Två krafter på 100 N. Ju större vinkel, desto mindre resulterande kraft.' },
        { typ: 'text', text: 'Här ser du att det du lärde dig om krafter längs samma linje bara är två specialfall. Krafter åt samma håll är vinkeln 0°, och krafter åt motsatt håll är vinkeln 180°. Alla andra vinklar ligger någonstans mellan.' },
        { typ: 'rubrik', text: 'Därför drar man åt samma håll när man behöver stor kraft' },
        { typ: 'text', text: 'När ett stort fartyg ska bogseras in i hamnen drar bogserbåtarna så nära samma riktning som möjligt. Ju större vinkeln mellan dem är, desto mer av kraften drar åt sidan i stället för framåt. Den delen hjälper inte till att dra fartyget framåt, men den kan användas för att styra det. Samma sak gäller när ni är två som drar en tung släde: går ni bredvid varandra med repen nästan parallella får släden nästan hela er sammanlagda kraft.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Den *resulterande kraften|resulterande kraft* (resultanten) är alla krafter på ett föremål tillsammans.',
          'Krafter åt samma håll läggs ihop. Krafter åt motsatt håll dras från varandra, och resultanten pekar åt den största kraftens håll.',
          'Är den resulterande kraften noll är det jämvikt, och rörelsen ändras inte.',
          'Krafter i olika riktningar läggs ihop genom att rita: sätt den ena pilen efter den andra, utan att vrida den, och rita pilen från start till slut.',
          'Ju större vinkeln mellan två krafter är, desto mindre blir den resulterande kraften.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
