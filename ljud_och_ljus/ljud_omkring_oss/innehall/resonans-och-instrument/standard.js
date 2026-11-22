/* Avsnittssida II. Ljud omkring oss, text B: Resonans och instrument – nivån standard (📘).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-B-Resonans-och-instrument-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iib.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Varför låter en gitarr men inte en ensam sträng?' },
        { typ: 'text', text: 'Spänn en gitarrsträng mellan två spikar i en planka och knäpp på den. Du hör nästan ingenting. Men samma sträng på en akustisk gitarr hörs i hela rummet. Skillnaden är inte strängen, utan det som strängen sitter på. I den här texten får du veta vad resonans är, hur instrument använder den för att förstärka ljudet och hur olika instrument skapar sina toner.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att allt som kan svänga har en egen frekvens',
          'vad *resonans* är',
          'hur en resonanslåda förstärker ljudet',
          'hur stränginstrument, blåsinstrument och slagverk skapar toner',
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
        { typ: 'rubrik', text: 'Ett föremål som får svänga fritt svänger i sin egen takt' },
        { typ: 'text', text: 'Knäpp på en linjal som sticker ut över en bordskant, slå till en stämgaffel eller knacka på ett glas. När ett föremål får svänga fritt gör det ofta med en viss frekvens som är särskilt tydlig, och den är densamma varje gång. Den kallas en *egenfrekvens*. Ett föremål kan ha flera egenfrekvenser, beroende på hur det svänger, men oftast hörs en av dem tydligast. Egenfrekvenserna beror på föremålets storlek, form, material och hur det sitter fast. En lång linjal har lägre egenfrekvens än en kort, och ett stort glas har lägre än ett litet. Det är därför varje glas har sin egen klang när man knackar på det.' }
      ]
    },
    {
      id: 'resonans', titel: 'Resonans',
      block: [
        { typ: 'rubrik', text: 'Knuffar i rätt takt bygger upp stora svängningar' },
        { typ: 'text', text: 'Tänk på en gunga. Den har också en egen takt, den takt den svänger i av sig själv. Om du knuffar gungan i samma riktning som den rör sig, en gång för varje sväng och i samma takt som den svänger, blir svängningarna större och större. Varje liten knuff tillför lite energi i rätt ögonblick. Knuffar du i fel takt, ibland när gungan är på väg mot dig, motverkar knuffarna varandra och gungan kommer ingenstans.' },
        // [BILD B1: gungan i numrerade steg: 1 gungan har just vänt längst bak – en liten knuff framåt, i rörelsens riktning (pil) · 2 gungan svänger fram och tillbaka · 3 nästa gång den vänder – en ny knuff i samma takt · 4 svängningarna har blivit mycket större. Utslagen ritade som bågar som växer]
        { id: 'bild-b1', typ: 'figur', namn: 'ljud', lage: 'gunga', bildtext: 'Små knuffar i gungans egen takt får svängningarna att växa: resonans.' },
        { typ: 'text', text: 'När något påverkas av svängningar i sin egen takt, alltså med sin egenfrekvens, och därför börjar svänga kraftigt, kallas det *resonans*.' },
        { typ: 'rubrik', text: 'En stämgaffel kan få en annan att sjunga' },
        { typ: 'text', text: 'Ställ två likadana stämgafflar på var sin låda en bit från varandra. Slå an den ena, vänta en stund och håll sedan fast den så att den tystnar. Nu hörs en svag ton från den andra stämgaffeln, fast ingen har rört den. Ljudvågorna från den första har knuffat på den andra med exakt dess egenfrekvens, gång på gång, precis som knuffarna på gungan. Byter du ut den andra stämgaffeln mot en med annan ton händer ingenting. Takten stämmer inte.' },
        // [BILD B2: två likadana stämgafflar på var sin låda i numrerade steg: 1 den vänstra slås an · 2 ljudvågorna når den högra · 3 den vänstra hålls tyst · 4 den högra svänger och låter fast ingen har rört den]
        { id: 'bild-b2', typ: 'figur', namn: 'ljud', lage: 'stamgafflar', bildtext: 'Den högra stämgaffeln börjar svänga av ljudvågorna, eftersom båda har samma egenfrekvens.' }
      ]
    },
    {
      id: 'resonanslada', titel: 'Resonanslådan förstärker ljudet',
      block: [
        { typ: 'rubrik', text: 'En stor yta sätter mer luft i rörelse' },
        { typ: 'text', text: 'En stämgaffel som svänger i luften hörs ganska svagt. Skänklarna är så smala att de bara knuffar på lite luft. Men om du ställer foten på stämgaffeln mot en bordsskiva blir tonen mycket starkare. Bordsskivan tvingas svänga med i samma takt som stämgaffeln, och eftersom den har en så stor yta sätter den mycket mer luft i rörelse. Det kallas *medsvängning*.' },
        // [BILD B3: stämgaffeln och bordet i numrerade steg: 1 stämgaffeln slås an och hålls i luften – svaga ljudvågor · 2 foten sätts mot bordsskivan · 3 bordsskivan svänger med i samma takt · 4 kraftigare ljudvågor sprids från hela bordsskivan]
        { id: 'bild-b3', typ: 'figur', namn: 'ljud', lage: 'stamgaffel-bord', bildtext: 'Bordsskivan svänger med och sätter mer luft i rörelse, så ljudet blir starkare.' },
        { typ: 'rubrik', text: 'Instrumentens resonanslådor' },
        { typ: 'text', text: 'De flesta akustiska stränginstrument använder samma knep. En gitarrsträng är tunn och sätter själv nästan ingen luft i rörelse. Men strängen sitter på ett stall som för svängningarna vidare till gitarrens kropp, en ihålig låda av tunt trä. Locket och botten börjar svänga, och luften inuti lådan också. Ljudet blir mycket starkare. Lådan kallas *resonanslåda*. En fiol, en cello och ett piano har också resonanslådor eller resonansbottnar. Pianots strängar sitter över en stor träskiva som svänger med.' },
        { typ: 'text', text: 'En resonanslåda förstärker på två sätt. Dels har lådans lock och botten stor yta och sätter mycket luft i rörelse. Dels har lådan och luften inuti egna egenfrekvenser, och när strängens svängningar ligger nära någon av dem kan lådan svänga extra kraftigt genom resonans. Därför låter varje instrument lite olika, även två gitarrer av samma modell. Formen på lådan är en del av instrumentets klang.' }
      ]
    },
    {
      id: 'instrumentfamiljer', titel: 'Instrumentfamiljerna',
      block: [
        { typ: 'rubrik', text: 'Stränginstrument' },
        { typ: 'text', text: 'I gitarr, fiol, cello och harpa är det strängar som svänger. Strängarna knäpps, stryks med en stråke eller slås an av en hammare som i pianot. Tonen bestäms av strängens längd, tjocklek och spänning, och resonanslådan förstärker den.' },
        { typ: 'rubrik', text: 'Blåsinstrument' },
        { typ: 'text', text: 'I blåsinstrument är det luften i ett rör som svänger. Den luften kallas *luftpelare*. Ju längre luftpelaren är, desto lägre ton. Därför är tuban stor och piccolaflöjten liten. Blåsaren får luften att börja svänga på olika sätt. I en flöjt blåser man mot en kant, i en klarinett eller saxofon får man ett tunt rörblad att vibrera, och i en trumpet är det läpparna som vibrerar mot munstycket. Tonen ändras genom att man öppnar och stänger hål eller trycker på ventiler, så att luftpelaren blir kortare eller längre.' },
        { typ: 'text', text: 'Du kan prova med flaskor. Blås över öppningen på en tom flaska, och du hör en mörk ton. Häll i lite vatten och blås igen. Nu finns det mindre luft kvar i flaskan, och tonen blir ljusare. Det är luften i flaskan som svänger, och ju mindre luft, desto ljusare ton.' },
        // [BILD B4: tre likadana flaskor bredvid varandra med olika mycket vatten. Luften ovanför vattnet markerad. Mycket luft – låg ton, mindre luft – mellanton, lite luft – hög ton]
        { id: 'bild-b4', typ: 'figur', namn: 'ljud', lage: 'flaskor', bildtext: 'Ju mindre luft det finns i flaskan, desto ljusare ton när man blåser över den.' },
        { typ: 'rubrik', text: 'Slagverk' },
        { typ: 'text', text: 'I slagverk som trummor, xylofon och triangel slår man på det som ska svänga. I en trumma svänger ett spänt skinn, och ju hårdare det är spänt, desto ljusare blir tonen. I en xylofon har varje träplatta sin egen egenfrekvens. De korta plattorna ger ljusa toner och de långa mörka.' }
      ]
    },
    {
      id: 'elektriska-instrument', titel: 'Akustiska och elektriska instrument',
      block: [
        { typ: 'rubrik', text: 'Elektriska instrument förstärker utan låda' },
        { typ: 'text', text: 'Instrument som skapar hörbart ljud bara genom mekaniska svängningar kallas *akustiska|akustisk*. Många av dem, som gitarren och fiolen, har en resonanslåda. Elektriska instrument använder i stället elektriska signaler för att skapa eller förstärka ljudet. En elgitarr har strängar men ingen resonanslåda. Kroppen är massiv, och utan förstärkare låter den mycket svagt. Under strängarna sitter i stället en *pickup|pickup*, som känner av strängarnas svängningar och omvandlar dem till en elektrisk signal. Signalen förstärks i en förstärkare, och en högtalare gör om den till ljud igen. I en synt skapas hela ljudet elektriskt, utan några strängar alls. Hur pickupar, förstärkare och högtalare fungerar läser du om i kapitlet om elektricitet.' },
        { typ: 'rubrik', text: 'Svängningar utanför musiken' },
        { typ: 'text', text: 'Tvingade svängningar och resonans finns inte bara i instrument. På en del vägar finns en räfflad kantlinje. Kör bilen ut på den skakar hjulen i takt med räfflorna, och det dånar och vibrerar i hela bilen. Det är meningen: föraren som håller på att somna eller köra av vägen ska vakna. Även en tvättmaskin kan börja skaka våldsamt vid ett visst varvtal, när trumman snurrar i samma takt som maskinens egen svängning.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Allt som kan svänga har egenfrekvenser, frekvenser som det helst svänger med.',
          'Resonans: när något påverkas av svängningar med sin egenfrekvens börjar det svänga kraftigt, som en gunga som knuffas i rätt takt.',
          'Medsvängning: en stor yta som tvingas svänga med, som en bordsskiva under en stämgaffel, sätter mer luft i rörelse och förstärker ljudet.',
          'Resonanslådan i en gitarr, fiol eller ett piano förstärker ljudet och påverkar klangen.',
          'I stränginstrument svänger strängar, i blåsinstrument en luftpelare, i slagverk skinn och plattor. Kortare luftpelare ger ljusare ton.',
          'Akustiska instrument skapar ljud genom mekaniska svängningar, ofta med en resonanslåda. Elektriska instrument använder elektriska signaler för att skapa eller förstärka ljudet.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
