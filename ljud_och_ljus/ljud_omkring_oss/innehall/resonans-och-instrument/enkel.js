/* Avsnittssida II. Ljud omkring oss, text B: Resonans och instrument – nivån enkel (📗).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-B-Resonans-och-instrument-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iib.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'En ensam sträng hörs nästan inte' },
        { typ: 'text', text: 'Tänk dig en gitarrsträng som är spänd mellan två spikar i en planka. Om du knäpper på den hör du nästan ingenting. Men samma sträng på en gitarr hörs i hela rummet. Skillnaden är inte strängen. Skillnaden är det som strängen sitter på.' },
        { typ: 'text', text: 'I den här texten får du veta vad resonans är. Du får också veta hur instrument gör ljudet starkare, och hur olika instrument gör sina toner.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att allt som kan svänga har en egen takt',
          'vad *resonans* är',
          'hur en resonanslåda gör ljudet starkare',
          'hur stränginstrument, blåsinstrument och slagverk gör toner',
          'skillnaden mellan akustiska och elektriska instrument'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'egenfrekvens', titel: 'Allt har en egen frekvens',
      block: [
        { typ: 'rubrik', text: 'Allt som svänger har sin egen takt' },
        { typ: 'text', text: 'Knäpp på en linjal som sticker ut över en bordskant. Slå på en stämgaffel. Knacka på ett glas. Varje sak börjar svänga i en bestämd takt. Det är oftast samma takt varje gång för samma sak.' },
        { typ: 'text', text: 'Den takten kallas en *egenfrekvens*. En sak kan faktiskt ha flera egenfrekvenser, men oftast hörs en tydligast. Egenfrekvensen beror på hur stor saken är, vilken form den har, vad den är gjord av och hur den sitter fast.' },
        { typ: 'text', text: 'En lång linjal svänger långsammare än en kort. Ett stort glas har en lägre ton än ett litet. Därför låter varje glas lite olika när du knackar på det.' }
      ]
    },
    {
      id: 'resonans', titel: 'Resonans',
      block: [
        { typ: 'rubrik', text: 'Knuffar i rätt takt ger stora svängningar' },
        { typ: 'text', text: 'Tänk på en gunga. Den har också en egen takt. Det är den takt den svänger i av sig själv. Så här får du gungan att svänga högt:' },
        { typ: 'punkter', punkter: [
          'Knuffa gungan framåt när den just har vänt längst bak och börjar röra sig framåt.',
          'Gungan svänger fram och tillbaka.',
          'Knuffa igen när den börjar röra sig framåt nästa gång. Knuffa alltid åt samma håll som gungan rör sig.',
          'Fortsätt så. Svängningarna blir större och större.'
        ] },
        // [BILD B1: gungan i numrerade steg: 1 gungan har just vänt längst bak – en liten knuff framåt, i rörelsens riktning (pil) · 2 gungan svänger fram och tillbaka · 3 nästa gång den vänder – en ny knuff i samma takt · 4 svängningarna har blivit mycket större. Utslagen ritade som bågar som växer]
        { id: 'bild-b1', typ: 'figur', namn: 'ljud', lage: 'gunga', bildtext: 'Små knuffar i gungans egen takt får svängningarna att växa: resonans.' },
        { typ: 'text', text: 'Varje liten knuff ger lite mer energi i precis rätt ögonblick. Om du knuffar i fel takt, ibland när gungan är på väg mot dig, går det inte. Då bromsar knuffarna lika mycket som de hjälper.' },
        { typ: 'text', text: 'När något får knuffar i sin egen takt och därför börjar svänga mycket, kallas det *resonans*.' },
        { typ: 'rubrik', text: 'En stämgaffel kan få en annan att låta' },
        { typ: 'text', text: 'Det här är ett försök med två stämgafflar som är exakt likadana. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Ställ stämgafflarna på var sin låda, en bit från varandra.',
          'Slå an den ena stämgaffeln.',
          'Ljudvågorna från den når den andra stämgaffeln.',
          'Håll fast den första så att den slutar låta.',
          'Nu hörs en svag ton från den andra stämgaffeln, fast ingen har rört den.'
        ] },
        // [BILD B2: två likadana stämgafflar på var sin låda i numrerade steg: 1 den vänstra slås an · 2 ljudvågorna når den högra · 3 den vänstra hålls tyst · 4 den högra svänger och låter fast ingen har rört den]
        { id: 'bild-b2', typ: 'figur', namn: 'ljud', lage: 'stamgafflar', bildtext: 'Den högra stämgaffeln börjar svänga av ljudvågorna, eftersom båda har samma egenfrekvens.' },
        { typ: 'text', text: 'Ljudvågorna har knuffat på den andra stämgaffeln i exakt rätt takt, om och om igen, precis som knuffarna på gungan. Om den andra stämgaffeln har en annan ton händer ingenting. Takten stämmer inte.' }
      ]
    },
    {
      id: 'resonanslada', titel: 'Resonanslådan förstärker ljudet',
      block: [
        { typ: 'rubrik', text: 'En stor yta får mer luft att svänga' },
        { typ: 'text', text: 'En stämgaffel som svänger i luften hörs ganska svagt. Skänklarna är smala och knuffar bara på lite luft. Men prova det här:' },
        { typ: 'punkter', punkter: [
          'Slå an stämgaffeln och håll den i luften. Tonen är svag.',
          'Sätt foten på stämgaffeln mot en bordsskiva.',
          'Bordsskivan börjar svänga i samma takt som stämgaffeln.',
          'Bordsskivan är stor och knuffar på mycket mer luft. Tonen blir mycket starkare.'
        ] },
        // [BILD B3: stämgaffeln och bordet i numrerade steg: 1 stämgaffeln slås an och hålls i luften – svaga ljudvågor · 2 foten sätts mot bordsskivan · 3 bordsskivan svänger med i samma takt · 4 kraftigare ljudvågor sprids från hela bordsskivan]
        { id: 'bild-b3', typ: 'figur', namn: 'ljud', lage: 'stamgaffel-bord', bildtext: 'Bordsskivan svänger med och sätter mer luft i rörelse, så ljudet blir starkare.' },
        { typ: 'text', text: 'Det kallas *medsvängning*. Bordsskivan tvingas svänga med.' },
        { typ: 'rubrik', text: 'Gitarren har en resonanslåda' },
        { typ: 'text', text: 'En gitarr fungerar på samma sätt. Strängen är tunn och knuffar själv på nästan ingen luft. Men strängen sitter fast på gitarrens kropp. Kroppen är en ihålig låda av tunt trä. När strängen svänger börjar lådan svänga med, och luften inuti lådan också. Då blir ljudet mycket starkare. Lådan kallas *resonanslåda*.' },
        { typ: 'text', text: 'En fiol och en cello har också resonanslådor. I ett piano sitter strängarna över en stor träskiva som svänger med.' },
        { typ: 'text', text: 'Resonanslådan hjälper till på två sätt:' },
        { typ: 'punkter', punkter: [
          'Lådan har stor yta. Den får mycket luft att svänga.',
          'Lådan och luften inuti har egna egenfrekvenser. När strängen svänger nära någon av dem svänger lådan extra mycket genom resonans.'
        ] },
        { typ: 'text', text: 'Därför låter varje instrument lite olika, även två gitarrer som ser likadana ut. Lådans form är en del av instrumentets klang.' }
      ]
    },
    {
      id: 'instrumentfamiljer', titel: 'Instrumentfamiljerna',
      block: [
        { typ: 'rubrik', text: 'Stränginstrument' },
        { typ: 'text', text: 'I gitarr, fiol, cello och harpa är det strängar som svänger. Man knäpper på strängarna, drar en stråke över dem eller låter en hammare slå på dem, som i ett piano. Tonen beror på hur lång, tjock och spänd strängen är. Resonanslådan gör tonen starkare.' },
        { typ: 'rubrik', text: 'Blåsinstrument' },
        { typ: 'text', text: 'I blåsinstrument är det luften inuti ett rör som svänger. Luften i röret kallas *luftpelare*. Ju längre luftpelaren är, desto mörkare blir tonen. Därför är tuban stor och har en mörk ton, medan en liten flöjt har en ljus ton.' },
        { typ: 'text', text: 'Man får luften att börja svänga på olika sätt. I en flöjt blåser man mot en kant. I en klarinett eller saxofon får man ett tunt blad att vibrera. I en trumpet är det läpparna som vibrerar. För att byta ton öppnar och stänger man hål, eller trycker på knappar som kallas ventiler. Då blir luftpelaren kortare eller längre.' },
        { typ: 'text', text: 'Prova själv med en flaska. Så här gör du:' },
        { typ: 'punkter', punkter: [
          'Blås över öppningen på en tom flaska. Du hör en mörk ton.',
          'Häll i lite vatten. Nu finns det mindre luft kvar i flaskan.',
          'Blås igen. Tonen blir ljusare.'
        ] },
        // [BILD B4: tre likadana flaskor bredvid varandra med olika mycket vatten. Luften ovanför vattnet markerad. Mycket luft – låg ton, mindre luft – mellanton, lite luft – hög ton]
        { id: 'bild-b4', typ: 'figur', namn: 'ljud', lage: 'flaskor', bildtext: 'Ju mindre luft det finns i flaskan, desto ljusare ton när man blåser över den.' },
        { typ: 'rubrik', text: 'Slagverk' },
        { typ: 'text', text: 'Trummor, xylofon och triangel är slagverk. Man slår på det som ska svänga. I en trumma svänger ett spänt skinn. Ju hårdare skinnet är spänt, desto ljusare blir tonen. En xylofon har plattor av trä. Varje platta har sin egen egenfrekvens. Korta plattor ger ljusa toner, och långa plattor ger mörka toner.' }
      ]
    },
    {
      id: 'elektriska-instrument', titel: 'Akustiska och elektriska instrument',
      block: [
        { typ: 'rubrik', text: 'Elektriska instrument behöver förstärkare' },
        { typ: 'text', text: 'Instrument som gör ljud bara genom att något svänger, utan elektricitet, kallas *akustiska|akustisk*. Många av dem har en resonanslåda. En elgitarr har strängar, men ingen resonanslåda. Kroppen är massiv. Utan förstärkare låter den mycket svagt.' },
        { typ: 'text', text: 'I stället sitter det en *pickup|pickup* under strängarna. Den känner av hur strängarna svänger och gör om det till en elektrisk signal. Signalen blir starkare i en förstärkare. Sedan gör en högtalare om signalen till ljud igen.' },
        { typ: 'text', text: 'I en synt görs hela ljudet med elektricitet. Där finns inga strängar alls. Hur pickupar, förstärkare och högtalare fungerar får du läsa om i kapitlet om elektricitet.' },
        { typ: 'rubrik', text: 'Svängningar finns också utanför musiken' },
        { typ: 'text', text: 'Svängningar och resonans finns inte bara i instrument. På en del vägar finns en räfflad linje längs kanten. Om bilen kör ut på den skakar hjulen i takt med räfflorna. Det dånar och vibrerar i hela bilen. Det är meningen. En förare som håller på att somna eller köra av vägen ska vakna.' },
        { typ: 'text', text: 'En tvättmaskin kan också börja skaka mycket vid en viss hastighet. Det händer när trumman snurrar i samma takt som maskinen själv svänger.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Allt som kan svänga har en egen takt. Den kallas egenfrekvens.',
          'Resonans betyder att något får knuffar i sin egen takt och därför svänger mycket, som en gunga.',
          'Medsvängning betyder att en stor yta tvingas svänga med, som en bordsskiva under en stämgaffel. Det gör ljudet starkare.',
          'En resonanslåda i en gitarr, fiol eller ett piano gör ljudet starkare och påverkar klangen.',
          'I stränginstrument svänger strängar. I blåsinstrument svänger en luftpelare. I slagverk svänger skinn och plattor.',
          'En kortare luftpelare ger en ljusare ton. I en flaska ger mindre luft en ljusare ton.',
          'Akustiska instrument gör ljud genom att något svänger, ofta med en resonanslåda. Elektriska instrument använder elektricitet för att göra ljudet eller göra det starkare.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
