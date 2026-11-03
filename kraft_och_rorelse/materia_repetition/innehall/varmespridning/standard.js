/* Repetition II, text C: Värmespridning – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Texten är Joachims granskade källa (Repetition-II-Standard.md, samlad 2026-11-02), införd ordagrant: ### = en sida,
 * ett stycke = ett textblock, [FIGUR n], [FORMEL] och [EXEMPEL] = blocken ur arbetsordern där markeringen står.
 * Enheter med <sup>3</sup>. Inledningen och sammanfattningen är nya korttexter som Joachim granskar.
 *
 * Så skrivs innehållet (mer i Fysik/README.md):
 *   - ett avsnitt = {id, titel, sidor: [...]}; numrerad: false ger ett avsnitt utan nummer (Inledning, Sammanfattning)
 *   - en sida = {titel, block: [...]}; sidan ska få plats på en skärm – kontrollera med ?kontroll i adressen.
 *     En tät sida delas vid en styckegräns, och den andra halvan får samma titel.
 *   - *ord* = betonat begrepp (*smälter|smälta* när det står böjt), [[m|V]] = bråk, <sup>3</sup> för cm³
 *   - {typ: 'lank', till: ['ova', 'sjalvskattning']} sist i ett avsnitt länkar till plattformens hjälpmedel
 * Avsnittens id används när eleven byter nivå (samma avsnitt på den andra nivån), så de ska vara samma på alla nivåer. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      sidor: [
        {
          titel: 'Repetition: Värmespridning',
          block: [
            { typ: 'text', text: 'Det här är en repetition. Du bygger vidare på text B: värme flödar alltid från varmt till kallt. Nu ser du hur det går till.' },
            { typ: 'rubrik', text: 'Det här repeterar du' },
            { typ: 'punkter', punkter: [
              '*Ledning*, *strömning* och *strålning* – värmens tre vägar',
              'Hur värmespridning bromsas – från ulltröjan till termosen'
            ] },
            { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
              'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
              'Klicka i innehållet för att gå till en sida.',
              'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
            ] }
          ]
        }
      ]
    },
    {
      id: 'varmespridning', titel: 'Värmespridning', numrerad: false,
      sidor: [
        {
          titel: 'Värme sprids på tre olika sätt från varmt till kallt',
          block: [
            { typ: 'text', text: 'Värme är energi som flödar från något med högre temperatur till något med lägre temperatur. Det sker på tre olika sätt: *ledning*, *strömning* och *strålning*. Alla tre kan ske samtidigt, men de fungerar på olika sätt. När du förstår hur värme sprids kan du förklara varför en kastrull blir varm, hur luften rör sig i ett rum och hur solens värme når jorden.' }
          ]
        },
        {
          titel: 'Vid ledning för partiklarna energin vidare till varandra',
          block: [
            { typ: 'text', text: 'Vid *värmeledning* flyttas energi genom ett material utan att materialet självt flyttar sig. När en del av materialet värms upp börjar partiklarna där röra sig och vibrera kraftigare. De stöter till partiklarna bredvid, som i sin tur för energin vidare till sina grannar. På så sätt sprids värmen genom materialet, från den varmare delen till den kallare.' },
            { typ: 'text', text: 'Ledning är viktigast i fasta ämnen, där partiklarna sitter nära varandra. Om en kastrull står på en varm spis leds värmen genom metallen från botten till resten av kastrullen. Efter en stund kan även handtaget bli varmt, trots att det aldrig har rört vid spisplattan.' }
          ]
        },
        {
          titel: 'Metaller leder värme bra medan isolatorer bromsar värmen',
          block: [
            { typ: 'text', text: 'Metaller som koppar, aluminium och järn är bra *värmeledare*. Det beror bland annat på att metaller har fria elektroner som snabbt kan föra energin genom materialet. Därför används metaller till exempel i kastruller och värmeelement, där man vill att värmen ska spridas snabbt.' },
            { typ: 'text', text: 'Andra material, som trä, plast, ull och luft, leder värme mycket sämre och kallas därför *värmeisolatorer|värmeisolator*. Stillastående luft isolerar särskilt bra: luft leder värme dåligt, och när den står still kan värmen inte heller föras bort med strömning. En tjock ulltröja håller dig varm genom att stänga in luft mellan fibrerna, så att kroppen förlorar mindre värme. På samma sätt minskar ett fönster med dubbla glas värmeförlusten, eftersom det finns ett isolerande utrymme mellan rutorna.' }
          ]
        },
        {
          titel: 'Vid strömning flyttar sig vätskor och gaser och för värmen med sig',
          block: [
            { typ: 'text', text: 'Vid strömning förs värmen med när en vätska eller gas flyttar sig. När luft eller vatten värms upp minskar densiteten, och då stiger den varmare delen medan kallare delar sjunker. Det bildas en cirkulation där varmt och kallt hela tiden byter plats. Strömning kan därför ske i vätskor och gaser, men inte i fasta ämnen.' },
            { typ: 'text', text: 'Ett exempel är ett värmeelement under ett fönster. Elementet värmer luften närmast sig, och den varma luften stiger uppåt och sprider sig i rummet. Samtidigt sjunker kallare luft och strömmar längs golvet tillbaka mot elementet, där den värms upp på nytt. På så sätt bildas en luftström som värmer hela rummet.' }
          ]
        },
        {
          titel: 'Vid strålning kan värme överföras genom tomrum',
          block: [
            { typ: 'text', text: 'Värmestrålning skiljer sig från ledning och strömning, eftersom den inte behöver någon materia för att spridas. Alla föremål sänder ut strålning, och vid vanliga temperaturer är det framför allt *infraröd strålning* – *värmestrålning*. Ju varmare ett föremål är, desto mer energi strålar det ut.' },
            { typ: 'text', text: 'Strålning kan färdas genom *vakuum*, alltså tomrum där det nästan inte finns några partiklar. Därför når energin från solen jorden, trots att rymden är nästan tom. Du kan också känna värmestrålning från en brasa eller en glödande grill utan att röra vid den. Strålningen för över energi till huden, så att den blir varmare.' }
          ]
        },
        {
          titel: 'Mörka ytor tar upp mer strålning medan ljusa och blanka ytor reflekterar den',
          block: [
            { typ: 'text', text: 'Hur mycket strålning ett föremål tar upp beror bland annat på ytans färg. Mörka ytor tar upp mer av solens strålning än ljusa ytor, som reflekterar en större del. Därför blir en svart bil oftast varmare än en vit bil om båda står lika länge i starkt solsken.' },
            { typ: 'text', text: 'Blanka metallytor är särskilt bra på att reflektera värmestrålning. Det används till exempel i material som ska minska värmeförluster eller skydda mot stark strålning. Genom att reflektera strålningen kan man alltså både hålla kvar värme och hindra värme från att komma in.' }
          ]
        },
        {
          titel: 'En termos minskar värmespridningen genom ledning, strömning och strålning',
          block: [
            { typ: 'text', text: 'En termos är byggd för att minska värmespridningen på alla tre sätten. Den har dubbla väggar med vakuum emellan, och där finns nästan inga partiklar som kan leda värmen eller föra den vidare med strömning. Väggarnas blanka ytor reflekterar värmestrålningen och minskar värmeförlusten ännu mer.' },
            { typ: 'text', text: 'Termosens lock hindrar också varm luft och vattenånga från att strömma ut genom öppningen. Lite värme kan fortfarande ledas bort genom locket och där väggarna sitter ihop. En termos stoppar alltså inte värmespridningen helt, men den bromsar den så mycket att kaffet håller sig varmt länge.' },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      sidor: [
        {
          titel: 'Det viktigaste',
          block: [
            { typ: 'punkter', punkter: [
              'Vid *ledning* för partiklarna energin vidare till varandra. Metaller leder bra, luft och ull isolerar.',
              'Vid *strömning* flyttar sig en vätska eller gas och för värmen med sig. Det varma stiger och det kalla sjunker.',
              'Vid *strålning* sprids värmen utan materia, till och med genom tomrum. Mörka ytor tar upp strålning och blanka reflekterar den.',
              'En termos bromsar alla tre: vakuum stoppar ledning och strömning, blanka väggar stoppar strålning.'
            ] },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    }
  ]
});
