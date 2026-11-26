/* Avsnittssida III. Tryck, arbete och maskiner, text D: Maskiner och effekt – nivån enkel (📗).
 * Arbetsorder 29 (2026-11-19): kallor/kap3/V-D-Maskiner-och-effekt-alla-nivaer-v3.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text vd: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap3-figurer-vd.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Maskiner och effekt' },
        { typ: 'text', text: 'Människor har alltid behövt flytta och lyfta tunga saker. Långt innan det fanns motorer byggde man pyramider och borgar av enorma stenar. Hur gick det till? Med enkla maskiner: ramper, stänger att bända med och rep med hjul.' },
        { typ: 'text', text: 'Ingen av de här maskinerna gör arbetet mindre. De gör det bara lättare, genom att du får använda mindre kraft. Men det har ett pris, och det priset får du lära dig om i den här texten. Du får också lära dig hur man mäter hur snabbt ett arbete görs, och varför ingen maskin kan använda all energi den får.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *mekanikens gyllene regel* säger',
          'hur ett *lutande plan*, en *hävstång* och en *talja* fungerar',
          'vad *moment* är, och när en gungbräda är i balans',
          'vad *effekt* är',
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
        { typ: 'rubrik', text: 'Man kan välja: stor kraft och kort väg, eller liten kraft och lång väg' },
        { typ: 'text', text: 'Tänk dig ett klot som väger 50 kg. Det ska upp på ett bord som är 1 meter högt. Klotets tyngd är ungefär 500 N.' },
        { typ: 'text', text: 'Du kan göra det på två sätt.' },
        { typ: 'rader', rader: [
          'Det första sättet är att lyfta klotet rakt upp. Då måste du dra med lika stor kraft som tyngden, 500 N. Sträckan är 1 meter. Arbetet blir:',
          '500 N · 1 m = 500 J'
        ] },
        { typ: 'rader', rader: [
          'Det andra sättet är att lägga klotet i en vagn och dra vagnen uppför en ramp som är 2 meter lång. Rampen är dubbelt så lång som bordet är högt. Om vi inte räknar med vagnens vikt och friktionen behöver du bara halva kraften, 250 N. Men nu är sträckan 2 meter. Arbetet blir:',
          '250 N · 2 m = 500 J'
        ] },
        { typ: 'text', text: 'Arbetet blir lika stort båda gångerna. Klotet hamnar ju på samma höjd, och det får lika mycket lägesenergi, 500 J, vilken väg det än tar.' },
        // [BILD D1: klotet på 50 kg som ska upp på ett bord 1 m högt, två vägar: rakt upp (500 N, 1 m) och i en vagn som dras längs en ramp som är 2 m lång (250 N, 2 m); under båda står 500 J]
        { id: 'bild-d1', typ: 'figur', namn: 'energi', lage: 'ramp', massa: 50, hojd: 1, ramp: 2, bildtext: 'Rakt upp krävs en stor kraft längs en kort sträcka, uppför rampen en liten kraft längs en lång sträcka. Arbetet blir 500 J båda gångerna.' },
        { typ: 'rubrik', text: 'Det man vinner i kraft förlorar man i väg' },
        { typ: 'text', text: 'Det här är en regel som gäller för alla maskiner. Den kallas *mekanikens gyllene regel*:' },
        { typ: 'text', text: 'Det man vinner i kraft förlorar man i väg.' },
        { typ: 'text', text: 'Med rampen vinner du kraft, eftersom du behöver ta i mindre. Men du förlorar väg, eftersom du måste gå längre. Arbetet blir aldrig mindre. Det kan det inte bli, för då skulle maskinen ha skapat energi, och energi kan inte skapas. I verkligheten blir arbetet till och med lite större, eftersom en del energi blir värme genom friktion.' },
        { typ: 'text', text: 'Du har redan sett regeln en gång. Kom ihåg hydrauliken i texten om tryck. Där behövdes en liten kraft på den lilla kolven, men den lilla kolven måste tryckas ned mycket längre än den stora kolven rörde sig.' }
      ]
    },
    {
      id: 'lutande-plan', titel: 'Lutande plan',
      block: [
        { typ: 'rubrik', text: 'En ramp är ett lutande plan' },
        { typ: 'text', text: 'En ramp kallas i fysiken ett *lutande plan*. Det är en av de enklaste maskinerna som finns.' },
        { typ: 'text', text: 'Det gäller att:' },
        { typ: 'punkter', punkter: [
          'ju längre och flackare rampen är, desto mindre kraft behövs',
          'ju längre och flackare rampen är, desto längre måste du gå'
        ] },
        { typ: 'text', text: 'En ramp för rullstolar är lång och flack. Då orkar den som kör rullstolen ta sig upp. En lastbil har ofta en ramp som man kan rulla upp tunga saker på.' },
        { typ: 'rubrik', text: 'Bergsvägar slingrar sig i serpentiner' },
        { typ: 'text', text: 'Har du åkt bil uppför ett högt berg? Då har vägen säkert slingrat sig fram och tillbaka i skarpa kurvor. En sådan väg kallas serpentinväg.' },
        { typ: 'text', text: 'En väg rakt upp skulle vara kortare, men den skulle bli så brant att bilarna inte orkade upp. Serpentinvägen är mycket längre, men den är flackare. Bilen behöver inte dra lika hårt. Men bilen måste fortfarande upp till samma höjd, så arbetet blir lika stort. Du gör likadant när du går i sicksack uppför en brant backe.' }
      ]
    },
    {
      id: 'havstangen', titel: 'Hävstången',
      block: [
        { typ: 'rubrik', text: 'En hävstång vrider sig runt en punkt' },
        { typ: 'text', text: 'En *hävstång* är en stång som kan vrida sig runt en punkt. Punkten kallas *vridningspunkt*. Här är några hävstänger:' },
        { typ: 'punkter', punkter: [
          'ett spett som man bänder med',
          'en kofot',
          'en gungbräda',
          'en sax'
        ] },
        { typ: 'text', text: 'Avståndet från vridningspunkten till platsen där kraften verkar kallas hävarm. I alla exempel här verkar kraften rakt mot stången, alltså vinkelrätt.' },
        { typ: 'rubrik', text: 'Med ett spett kan du flytta en stor sten' },
        { typ: 'text', text: 'Tänk dig att du ska flytta en stor sten med ett spett. Så här gör du:' },
        { typ: 'punkter', punkter: [
          'Du sticker in den korta änden av spettet under stenen.',
          'Du lägger en liten sten under spettet, nära den stora stenen. Den lilla stenen blir vridningspunkten.',
          'Du trycker ned den långa änden av spettet.'
        ] },
        { typ: 'text', text: 'Om din ände är tio gånger så lång som änden under stenen räcker det med en tiondel av kraften. Du kan alltså flytta en sten som du aldrig hade orkat lyfta. Men din ände måste röras tio gånger så långt som stenen lyfts. Det är den gyllene regeln igen: du vinner kraft och förlorar väg.' },
        { typ: 'rubrik', text: 'Kraft gånger hävarm kallas moment' },
        { typ: 'text', text: 'Hur mycket en kraft vrider på en hävstång beror på två saker:' },
        { typ: 'punkter', punkter: [
          'hur stor kraften är',
          'hur långt från vridningspunkten kraften verkar'
        ] },
        { typ: 'text', text: 'Kraften gånger hävarmen kallas *moment*.' },
        { typ: 'text', text: 'Pröva med en dörr. Tryck på dörren ute vid handtaget. Den öppnas lätt. Tryck sedan nära gångjärnen, där dörren sitter fast. Nu måste du ta i mycket mer. Hävarmen är kort, och då behövs en större kraft för att få samma moment.' },
        { typ: 'text', text: 'Moment och arbete räknas båda som kraft gånger en längd. Men de är olika saker. Arbete handlar om hur mycket energi som flyttas när något förflyttas. Moment handlar om hur starkt en kraft vrider något.' },
        { typ: 'rubrik', text: 'En gungbräda är i balans när momenten är lika stora' },
        { typ: 'text', text: 'En vuxen väger 80 kg och har tyngden 800 N. Hon sitter 1 meter från mitten av en gungbräda. På andra sidan sitter ett barn som väger 40 kg och har tyngden 400 N. Var ska barnet sitta för att gungbrädan ska vara i balans?' },
        { typ: 'rader', rader: [
          'Räkna ut den vuxnes moment:',
          '800 N · 1 m = 800 Nm'
        ] },
        { typ: 'rader', rader: [
          'Barnet har halva tyngden. Då måste barnet sitta dubbelt så långt ut, alltså 2 meter från mitten. Räkna ut barnets moment:',
          '400 N · 2 m = 800 Nm'
        ] },
        { typ: 'text', text: 'Nu är momenten lika stora på båda sidor. Då är gungbrädan i balans.' },
        // [BILD D2: gungbräda i balans – vridningspunkten i mitten, 800 N på 1 m på ena sidan, 400 N på 2 m på andra sidan, avstånden utmärkta; två motriktade vridpilar, lika stora, som visar att momenten tar ut varandra]
        { id: 'bild-d2', typ: 'figur', namn: 'energi', lage: 'gungbrada', vanster: { kraft: 800, arm: 1 }, hoger: { kraft: 400, arm: 2 }, bildtext: '800 N gånger 1 m och 400 N gånger 2 m ger samma moment, 800 Nm. Momenten vrider åt var sitt håll och tar ut varandra.' },
        { typ: 'formel', uttryck: 'F₁ · l₁ = F₂ · l₂', forklaring: 'F krafterna (N), l hävarmarna (m), gungbrädan i balans' },
        { typ: 'rubrik', text: 'Din arm är en hävstång som förlorar kraft' },
        { typ: 'text', text: 'Alla hävstänger hjälper inte till med kraften. Din underarm är en hävstång. Armbågen är vridningspunkten. Muskeln som lyfter armen sitter fast bara några centimeter från armbågen, men handen sitter långt ut.' },
        { typ: 'text', text: 'Det betyder att muskeln måste dra mycket hårdare än det du håller i handen väger. Armen förlorar alltså kraft. Men när muskeln drar ihop sig lite grann rör sig handen en lång bit. Armen vinner väg och fart. Det är bra när du ska kasta en boll.' }
      ]
    },
    {
      id: 'taljan', titel: 'Taljan',
      block: [
        { typ: 'rubrik', text: 'Ett block ändrar åt vilket håll du drar' },
        { typ: 'text', text: 'Ett *block* är ett hjul med ett spår för ett rep. Tänk dig ett block som sitter fast i taket. Ett rep går över blocket. I ena änden hänger en låda. När du drar nedåt i den andra änden åker lådan uppåt.' },
        { typ: 'text', text: 'Blocket gör inte kraften mindre. Du måste dra lika hårt som lådan väger. Men det är lättare att dra nedåt, eftersom du kan använda din egen tyngd, än att lyfta uppåt med armarna.' },
        { typ: 'rubrik', text: 'En talja gör kraften mindre' },
        { typ: 'text', text: 'En *talja* är flera block som sitter ihop. Lasten hänger då i flera delar av samma rep.' },
        { typ: 'text', text: 'Om lasten hänger i två repdelar delar de på tyngden. Varje repdel bär hälften. Då behöver du bara dra med halva kraften.' },
        { typ: 'text', text: 'Men det finns ett pris. Om lasten ska lyftas 1 meter måste båda repdelarna bli 1 meter kortare. Då måste du dra in 2 meter rep. Du vinner kraft och förlorar väg.' },
        { typ: 'text', text: 'Med fyra repdelar behöver du bara en fjärdedel av kraften. Men du måste dra in fyra gånger så mycket rep.' },
        // [BILD D3: talja med ett fast block i taket och ett rörligt block med lasten; lasten bärs av två repdelar; dragkraften halva tyngden; startläge och slutläge bredvid varandra: lasten har lyfts 1 m och 2 m rep har dragits in]
        { id: 'bild-d3', typ: 'figur', namn: 'energi', lage: 'talja', lyft: 1, bildtext: 'Två repdelar bär lasten, så dragkraften är halva tyngden. Men för att lyfta lasten 1 m måste du dra in 2 m rep.' },
        { typ: 'text', text: 'Taljor finns i byggkranar, på segelbåtar och i bilverkstäder, där man lyfter ut tunga motorer.' }
      ]
    },
    {
      id: 'effekt', titel: 'Effekt',
      block: [
        { typ: 'rubrik', text: 'Effekt är hur snabbt arbetet görs' },
        { typ: 'text', text: 'Hittills har du sett hur maskiner kan göra kraften mindre. Men maskiner skiljer sig också åt på ett annat sätt: hur snabbt de gör ett arbete.' },
        { typ: 'text', text: 'Två elever väger lika mycket. Båda går uppför samma trappa. Den ena går lugnt. Den andra springer.' },
        { typ: 'text', text: 'Vem utför mest arbete? Ingen av dem. De lyfter samma tyngd lika högt, så arbetet är lika stort. Men den som springer gör arbetet på kortare tid. Det är skillnaden. Hen har större *effekt*.' },
        { typ: 'text', text: 'Effekt är hur mycket arbete som görs varje sekund. Man kan också säga att effekt är hur snabbt energi omvandlas. Man räknar ut effekten genom att dela arbetet med tiden.' },
        { typ: 'formel', uttryck: 'P = W / t', forklaring: 'P effekten (W), W arbetet (J), t tiden (s)' },
        { typ: 'rubrik', text: 'Effekt mäts i watt' },
        { typ: 'text', text: 'Effekt mäts i *watt|watt*. Det skrivs W. 1 watt betyder att 1 joule omvandlas varje sekund.' },
        { typ: 'text', text: 'Du har säkert sett watt på lampor och elektriska apparater. En spisplatta på 2 000 W gör om 2 000 joule el till värme varje sekund.' },
        { typ: 'text', text: 'Var uppmärksam på en sak. I formeln betyder W arbete. Men när W står efter ett tal, som 2 000 W, betyder det watt.' },
        { typ: 'exempel', rubrik: 'Gå eller springa i trappan', stycken: [
          ['En elev väger 60 kg. Hen går uppför en trappa som är 3 meter hög. Det tar 10 sekunder. Sedan springer eleven uppför samma trappa på 3 sekunder. Hur stor är effekten i de två fallen?'],
          ['Givet: Tyngden är ungefär 600 N. Höjden är 3 m. Först räknar vi ut arbetet, som är lika stort båda gångerna:',
           'W = 600 N · 3 m = 1 800 J',
           'Tiden är 10 s när eleven går och 3 s när hen springer. Sökt: effekten P.'],
          ['Lösning: Dela arbetet med tiden.',
           'Gå: P = 1 800 J / 10 s = 180 W',
           'Spring: P = 1 800 J / 3 s = 600 W',
           'Svar: Effekten är 180 W när eleven går och 600 W när hen springer.']
        ] },
        { typ: 'rubrik', text: 'Hästkraft är en gammal enhet' },
        { typ: 'text', text: 'För bilar och båtar anger man ofta effekten i *hästkrafter|hästkraft*. Det skrivs hk. Enheten kommer från den tid då ångmaskiner började ersätta hästar. Man ville kunna säga hur många hästar en maskin var värd. 1 hk är ungefär 735 W.' }
      ]
    },
    {
      id: 'verkningsgrad', titel: 'Verkningsgrad',
      block: [
        { typ: 'rubrik', text: 'Ingen maskin kan använda all energi' },
        { typ: 'text', text: 'När en maskin arbetar blir inte all energi det man vill ha. En del blir alltid värme, eftersom det finns friktion. *Verkningsgrad|verkningsgrad* betyder hur stor del av energin som blir nyttig. Man skriver den ofta i procent. Tänk dig en maskin som får 1 000 J. 800 J blir rörelse och 200 J blir värme. Då är verkningsgraden 80 procent.' },
        { typ: 'text', text: 'Här är några exempel:' },
        { typ: 'punkter', punkter: [
          'En elmotor har en verkningsgrad på ungefär 90 procent. Av 100 J el blir 90 J rörelse. Resten, 10 J, blir värme.',
          'En bensinmotor i en bil har en verkningsgrad på ungefär 30 procent. Det mesta av energin i bensinen blir värme.',
          'Dina muskler har en verkningsgrad på ungefär 25 procent. Därför blir du varm när du tränar.'
        ] },
        { typ: 'text', text: 'Verkningsgraden kan aldrig bli mer än 100 procent, för då skulle maskinen skapa energi. Det går inte enligt energiprincipen. För att nå 100 procent skulle maskinen inte få ha någon friktion alls, och någon sådan maskin finns inte.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Mekanikens gyllene regel: det man vinner i kraft förlorar man i väg. Arbetet blir aldrig mindre.',
          'En ramp är ett lutande plan. Den gör kraften mindre men vägen längre. Därför går bergsvägar i serpentiner.',
          'En hävstång vrider sig runt en vridningspunkt. Kraft gånger hävarm kallas moment.',
          'En gungbräda är i balans när momenten är lika stora på båda sidor: F₁ · l₁ = F₂ · l₂.',
          'En talja delar lasten på flera repdelar. Med två repdelar behövs halva kraften, men du måste dra in dubbelt så mycket rep.',
          'Effekt är hur snabbt ett arbete görs: P = W / t. Effekt mäts i watt. 1 hk är ungefär 735 W.',
          'Verkningsgrad är hur stor del av energin som blir nyttig. Den kan aldrig bli högre än 100 procent, och i verkliga maskiner är den alltid lägre.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
