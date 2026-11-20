/* Avsnittssida V. Tryck, arbete och maskiner, text D: Maskiner och effekt – nivån standard (📘).
 * Arbetsorder 29 (2026-11-19): kallor/kap3/V-D-Maskiner-och-effekt-alla-nivaer-v3.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vd: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vd.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Maskiner och effekt' },
        { typ: 'text', text: 'Med ett spett kan du flytta en sten som du aldrig skulle orka lyfta. Med en ramp kan du rulla upp en tung tunna på ett flak. Med en talja kan en person lyfta en motor ur en bil. Ingen av de här maskinerna minskar arbetet. De byter bara en stor kraft mot en lång väg. I den här texten får du veta hur det går till, och varför samma regel gäller för alla maskiner. Du får också veta hur man mäter hur snabbt ett arbete görs, och hur stor del av energin en maskin faktiskt kan använda.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *mekanikens gyllene regel* säger',
          'hur ett *lutande plan*, en *hävstång* och en *talja* fungerar',
          'vad *moment* är, och när en gungbräda är i balans',
          'vad *effekt* är och hur den räknas ut',
          'vad *verkningsgrad* betyder'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'gyllene-regeln', titel: 'Mekanikens gyllene regel',
      block: [
        { typ: 'rubrik', text: 'Det man vinner i kraft förlorar man i väg' },
        { typ: 'text', text: 'Ett klot som väger 50 kg ska upp på ett bord som är 1 meter högt. Klotets tyngd är ungefär 500 N. Om du lyfter det rakt upp krävs kraften 500 N längs sträckan 1 m. Arbetet blir 500 N · 1 m = 500 J.' },
        { typ: 'text', text: 'Du kan också lägga klotet i en vagn och dra vagnen uppför en ramp som är 2 meter lång. Om vi bortser från vagnens vikt och från friktionen behövs bara halva kraften, 250 N, men sträckan blir dubbelt så lång. Arbetet blir 250 N · 2 m = 500 J, alltså lika mycket. Klotet hamnar på samma höjd och får samma lägesenergi, 500 J, oavsett vilken väg det tar.' },
        // [BILD D1: klotet på 50 kg som ska upp på ett bord 1 m högt, två vägar: rakt upp (500 N, 1 m) och i en vagn som dras längs en ramp som är 2 m lång (250 N, 2 m); under båda står 500 J]
        { id: 'bild-d1', typ: 'figur', namn: 'energi', lage: 'ramp', massa: 50, hojd: 1, ramp: 2, bildtext: 'Rakt upp krävs en stor kraft längs en kort sträcka, uppför rampen en liten kraft längs en lång sträcka. Arbetet blir 500 J båda gångerna.' },
        { typ: 'text', text: 'Det här kallas *mekanikens gyllene regel*: det man vinner i kraft förlorar man i väg. En maskin kan minska kraften, men då måste den verka längs en längre sträcka. Arbetet blir aldrig mindre, eftersom en maskin inte kan skapa energi. I en maskin utan friktion är arbetet lika stort hur man än gör. I verkliga maskiner behövs lite mer arbete, eftersom en del blir värme genom friktion. Samma regel gällde för hydrauliken i texten om tryck: den lilla kolven måste röras mycket längre än den stora.' }
      ]
    },
    {
      id: 'lutande-plan', titel: 'Lutande plan',
      block: [
        { typ: 'rubrik', text: 'En längre väg ger en mindre kraft' },
        { typ: 'text', text: 'Rampen är ett *lutande plan*, en av de enklaste maskinerna. Ju längre och flackare rampen är, desto mindre kraft behövs, men desto längre måste föremålet flyttas. En rullstolsramp är lång och flack för att den som kör ska orka. En lastbil har ofta en ramp för att rulla upp tunga föremål på flaket.' },
        { typ: 'rubrik', text: 'Därför går vägar i serpentiner uppför berg' },
        { typ: 'text', text: 'En väg som går rakt uppför ett berg skulle bli så brant att bilarna inte orkade. Därför slingrar sig bergsvägar i serpentiner, fram och tillbaka längs sluttningen. Vägen blir mycket längre, men den blir flackare, och motorn behöver inte dra lika hårt. Bilen måste ändå upp till samma höjd, och arbetet mot tyngdkraften blir detsamma. Det är samma sak när du går i sicksack uppför en brant backe.' }
      ]
    },
    {
      id: 'havstangen', titel: 'Hävstången',
      block: [
        { typ: 'rubrik', text: 'En hävstång vrider sig runt en vridningspunkt' },
        { typ: 'text', text: 'En *hävstång* är en stång som kan vrida sig runt en punkt. Punkten kallas *vridningspunkt*. Ett spett, en kofot, en gungbräda och en sax är hävstänger. När kraften verkar vinkelrätt mot stången kallas avståndet från vridningspunkten till den plats där kraften verkar för hävarm. Så verkar krafterna i alla exempel i den här texten.' },
        { typ: 'text', text: 'När du flyttar en sten med ett spett sticker du in den korta änden under stenen och lägger en liten sten eller en stock under spettet som vridningspunkt. Sedan trycker du ned den långa änden. Om din ände är tio gånger så lång som änden under stenen räcker en tiondel så stor kraft. Men din ände måste röras tio gånger så långt. Den gyllene regeln gäller igen.' },
        { typ: 'rubrik', text: 'Kraft gånger hävarm kallas moment' },
        { typ: 'text', text: 'Hur mycket en kraft vrider en hävstång beror både på kraften och på hävarmen. Kraften gånger hävarmen kallas *moment*. En liten kraft långt ut kan vrida lika mycket som en stor kraft nära vridningspunkten. Det är därför en dörr är lätt att öppna om du trycker vid handtaget, men tung om du trycker nära gångjärnen.' },
        { typ: 'text', text: 'Moment och arbete räknas båda som en kraft gånger en längd, men de är olika saker. Arbete anger hur mycket energi som förs över när något flyttas. Moment anger hur starkt en kraft försöker vrida något runt en punkt.' },
        { typ: 'rubrik', text: 'En gungbräda är i balans när momenten är lika stora' },
        { typ: 'text', text: 'En vuxen som väger 80 kg, alltså 800 N, sitter 1 meter från mitten av en gungbräda. Ett barn som väger 40 kg, alltså 400 N, sitter på andra sidan. Var ska barnet sitta för att gungbrädan ska vara i balans?' },
        { typ: 'text', text: 'Den vuxnes moment är 800 N · 1 m = 800 Nm. Barnet har halva tyngden och måste därför sitta på dubbla avståndet, 2 m. Då blir barnets moment 400 N · 2 m = 800 Nm, och momenten tar ut varandra. Gungbrädan är i balans när kraft gånger hävarm är lika stort på båda sidor.' },
        // [BILD D2: gungbräda i balans – vridningspunkten i mitten, 800 N på 1 m på ena sidan, 400 N på 2 m på andra sidan, avstånden utmärkta; två motriktade vridpilar, lika stora, som visar att momenten tar ut varandra]
        { id: 'bild-d2', typ: 'figur', namn: 'energi', lage: 'gungbrada', vanster: { kraft: 800, arm: 1 }, hoger: { kraft: 400, arm: 2 }, bildtext: '800 N gånger 1 m och 400 N gånger 2 m ger samma moment, 800 Nm. Momenten vrider åt var sitt håll och tar ut varandra.' },
        { typ: 'formel', uttryck: 'F₁ · l₁ = F₂ · l₂', forklaring: 'F krafterna (N), l hävarmarna (m), gungbrädan i balans' },
        { typ: 'rubrik', text: 'Alla hävstänger vinner inte kraft' },
        { typ: 'text', text: 'En del hävstänger gör tvärtom. I din underarm sitter armbågen som vridningspunkt, och muskeln fäster bara några centimeter från den. Handen sitter långt ut. Muskeln måste därför dra mycket hårdare än vikten du håller i handen. Men en liten förkortning av muskeln ger en stor rörelse i handen. Armen förlorar kraft men vinner väg och fart, och det är det du behöver när du kastar en boll.' }
      ]
    },
    {
      id: 'taljan', titel: 'Taljan',
      block: [
        { typ: 'rubrik', text: 'Ett block ändrar riktningen på kraften' },
        { typ: 'text', text: 'Ett *block* är ett hjul med ett spår för ett rep. Om ett block sitter fast i taket och du drar ned i repet lyfts lasten upp. Kraften blir inte mindre: du måste fortfarande dra med lika stor kraft som lastens tyngd. Men det är lättare att dra nedåt med hela kroppens tyngd än att lyfta uppåt med armarna.' },
        { typ: 'rubrik', text: 'En talja delar lasten mellan flera repdelar' },
        { typ: 'text', text: 'En *talja* är flera block som sitter ihop. Lasten hänger då i flera delar av samma rep. Om lasten bärs av två repdelar behöver du bara dra med halva kraften. Men för att lasten ska lyftas 1 meter måste båda repdelarna bli 1 meter kortare, och då måste du dra in 2 meter rep. Med fyra repdelar behövs en fjärdedel av kraften, men du måste dra in fyra gånger så mycket rep.' },
        // [BILD D3: talja med ett fast block i taket och ett rörligt block med lasten; lasten bärs av två repdelar; dragkraften halva tyngden; startläge och slutläge bredvid varandra: lasten har lyfts 1 m och 2 m rep har dragits in]
        { id: 'bild-d3', typ: 'figur', namn: 'energi', lage: 'talja', lyft: 1, bildtext: 'Två repdelar bär lasten, så dragkraften är halva tyngden. Men för att lyfta lasten 1 m måste du dra in 2 m rep.' },
        { typ: 'text', text: 'Taljor används i byggkranar, på segelbåtar och i verkstäder där motorer lyfts ur bilar.' }
      ]
    },
    {
      id: 'effekt', titel: 'Effekt',
      block: [
        { typ: 'rubrik', text: 'Effekt är hur snabbt ett arbete görs' },
        { typ: 'text', text: 'Hittills har du sett hur maskiner kan minska den kraft som behövs. Maskiner skiljer sig också åt på ett annat sätt: hur snabbt de kan utföra ett arbete.' },
        { typ: 'text', text: 'Två elever går uppför samma trappa. Den ena går lugnt och den andra springer. Om de väger lika mycket utför de samma arbete, eftersom de lyfter samma tyngd lika högt. Men den som springer gör arbetet på kortare tid. Hen har större *effekt*.' },
        { typ: 'text', text: 'Effekt är hur stort arbete som utförs per sekund, eller hur snabbt energi omvandlas. Den räknas ut som arbetet delat med tiden.' },
        { typ: 'formel', uttryck: 'P = W / t', forklaring: 'P effekten (W), W arbetet (J), t tiden (s)' },
        { typ: 'text', text: 'Effekt mäts i *watt|watt*, som skrivs W. 1 watt betyder att 1 joule omvandlas varje sekund. Det är samma enhet som står på lampor och elektriska apparater. En spisplatta på 2 000 W omvandlar 2 000 J elektrisk energi till värme varje sekund. Lägg märke till att W i formeln betyder arbete, medan W efter ett tal betyder watt.' },
        { typ: 'exempel', rubrik: 'Gå eller springa i trappan', stycken: [
          ['En elev som väger 60 kg går uppför en trappa som är 3 meter hög. Det tar 10 sekunder. Samma elev springer uppför trappan på 3 sekunder. Hur stor är effekten i de två fallen?'],
          ['Givet: Tyngden är ungefär 600 N och höjden 3 m. Arbetet är W = 600 N · 3 m = 1 800 J i båda fallen. Tiden är 10 s och 3 s. Sökt: effekten P.'],
          ['Lösning:',
           'Gå: P = 1 800 J / 10 s = 180 W',
           'Spring: P = 1 800 J / 3 s = 600 W',
           'Svar: Effekten är 180 W när eleven går och 600 W när hen springer.']
        ] },
        { typ: 'rubrik', text: 'Hästkraft är en gammal enhet för effekt' },
        { typ: 'text', text: 'För bilar och båtar anges effekten ofta i *hästkrafter|hästkraft*, hk. Enheten skapades när ångmaskinerna skulle ersätta hästar, och man ville kunna jämföra en maskin med hur många hästar den motsvarade. 1 hk är ungefär 735 W. En bil med en motor på 100 kW har alltså ungefär 136 hk.' }
      ]
    },
    {
      id: 'verkningsgrad', titel: 'Verkningsgrad',
      block: [
        { typ: 'rubrik', text: 'Ingen maskin kan använda all energi' },
        { typ: 'text', text: 'När en maskin arbetar blir aldrig all energi det man vill ha. En del blir alltid värme genom friktion. *Verkningsgrad|verkningsgrad* anger hur stor del av den tillförda energin som blir nyttig energi. Den skrivs ofta i procent. Om en maskin får 1 000 J, och 800 J blir nyttig rörelse medan 200 J blir värme, är verkningsgraden 80 procent.' },
        { typ: 'text', text: 'En elmotor kan ha en verkningsgrad på 90 procent. Av 100 J elektrisk energi blir 90 J rörelse, och 10 J blir värme. En bensinmotor i en bil har en verkningsgrad på ungefär 30 procent. Det mesta av energin i bensinen blir värme som går ut med avgaserna och genom kylaren. Kroppens muskler har en verkningsgrad på ungefär 25 procent, och därför blir du varm när du anstränger dig.' },
        { typ: 'text', text: 'Verkningsgraden kan aldrig bli högre än 100 procent, eftersom en maskin inte kan skapa energi. För att nå 100 procent skulle maskinen inte få ha någon friktion eller andra förluster alls. Någon sådan maskin finns inte, så i verkligheten är verkningsgraden alltid lägre.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Mekanikens gyllene regel: det man vinner i kraft förlorar man i väg. Arbetet blir aldrig mindre.',
          'Ett lutande plan minskar kraften men förlänger vägen. Därför går bergsvägar i serpentiner.',
          'En hävstång vrider sig runt en vridningspunkt. Kraft gånger hävarm kallas moment.',
          'En gungbräda är i balans när F₁ · l₁ = F₂ · l₂.',
          'En talja delar lasten på flera repdelar. Två repdelar ger halva kraften men dubbelt så långt rep.',
          'Effekt är arbete per tid, P = W / t. Effekt mäts i watt, och 1 hk är ungefär 735 W.',
          'Verkningsgrad är hur stor del av energin som blir nyttig. Den kan aldrig bli högre än 100 procent, och i verkliga maskiner är den alltid lägre.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
