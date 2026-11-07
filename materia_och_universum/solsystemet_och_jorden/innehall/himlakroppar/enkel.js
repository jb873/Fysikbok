/* Avsnittssida I. Solsystemet och jorden, text B Himlakroppar – nivån enkel. Arbetsorder 9 (2026-11-07):
 * Kap1-Avsnitt1-B-Himlakroppar-Enkel-Fordjupning.md (📗 ENKEL), infört ordagrant i strömformatet: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Länkblocket (motorns konvention) sist i det sista numrerade
 * avsnittet och i Sammanfattningen. [BILD …] står som kommentar på sin plats, med figuren efter (steg 3).
 * Joachims tillägg 2026-11-07: rutan "Så bläddrar du" sist i Inledningen och rubriken "Det viktigaste" först i
 * Sammanfattningen, som i III.
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Himlakroppar' },
        { typ: 'text', text: 'I rymden finns många olika sorters föremål. En del är enorma och lyser, som solen. Andra är små stenar som man nästan inte kan se. Alla naturliga föremål i rymden kallas *himlakroppar*. I den här texten lär du dig skillnaden mellan dem.' },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'himlakropparna-har-olika-egenskaper', titel: 'Himlakropparna har olika egenskaper',
      block: [
        { typ: 'rubrik', text: 'Stjärnor lyser av sig själva' },
        { typ: 'text', text: 'En *stjärna* är ett enormt klot av het gas. Inne i stjärnan är det så varmt och trycket så stort att kärnfusion pågår. Det betyder att små atomer slås ihop till större, och då frigörs massor av energi. Energin strålar ut som ljus och värme. Solen är en stjärna, och det finns otroligt många fler.' },
        { typ: 'rubrik', text: 'En stjärna som ser stark ut behöver inte vara stor' },
        { typ: 'text', text: 'På natthimlen ser vissa stjärnor starkare ut än andra. Det betyder inte att de är större. En stjärna kan se stark ut för att den ligger nära oss, eller för att den skickar ut väldigt mycket ljus.' },
        { typ: 'text', text: 'Två stjärnor som ser ut att sitta bredvid varandra på himlen kan dessutom ligga mycket långt från varandra. Den ena kan vara mycket längre bort än den andra. Det ser bara ut som att de sitter tillsammans, för att vi ser dem från samma håll.' },
        { typ: 'rubrik', text: 'Planeter går runt en stjärna och lyser inte själva' },
        { typ: 'text', text: 'En *planet* är en stor himlakropp som går runt en stjärna. De åtta planeterna i vårt solsystem går runt solen. Forskare har också hittat tusentals planeter som går runt andra stjärnor. De kallas *exoplaneter*.' },
        { typ: 'text', text: 'Planeter lyser inte själva. När du ser Venus lysa på kvällshimlen är det solljus som studsar mot planeten och når dina ögon. Det är samma sak som när en vit vägg syns i mörkret för att en ficklampa lyser på den. Väggen lyser inte själv, den reflekterar ljuset.' },
        { typ: 'text', text: 'Venus kallas ibland aftonstjärnan eller morgonstjärnan, eftersom den syns så tydligt strax efter solnedgången eller strax före soluppgången. Men namnet är missvisande. Venus är ingen stjärna, utan en planet som lyser starkt för att den ligger ganska nära både solen och jorden och har moln som reflekterar mycket ljus.' },
        { typ: 'rubrik', text: 'Dvärgplaneter är nästan planeter' },
        { typ: 'text', text: 'En *dvärgplanet* går också runt solen. Den är så stor att den har blivit rund. Men den är inte tillräckligt stor för att ha samlat ihop eller knuffat bort allt annat i sin bana. Den delar sin bana med andra föremål. Därför räknas den inte som en riktig planet. Man kan jämföra med en skolgård. En planet är som den största eleven på sin del av skolgården, den som alla andra håller sig undan för. En dvärgplanet är rund och ganska stor, men den delar sin plats med många andra ungefär lika stora.' },
        { typ: 'text', text: 'Pluto är den mest kända dvärgplaneten. Pluto räknades länge som den nionde planeten. År 2006 bestämde astronomerna tydligare vad en planet är, och då blev Pluto en dvärgplanet. Pluto är mindre än vår måne. Andra dvärgplaneter är Ceres i asteroidbältet och Eris långt utanför Neptunus.' },
        { typ: 'rubrik', text: 'Månar går runt planeter' },
        { typ: 'text', text: 'En *måne* är en himlakropp som går runt en planet eller en dvärgplanet. Vår måne är ungefär en fjärdedel så stor som jorden. Den ligger ungefär 384 000 kilometer bort. Månen lyser inte heller själv. Den reflekterar solljus, precis som planeterna.' },
        { typ: 'rubrik', text: 'Jorden är inte den enda planeten med måne' },
        { typ: 'text', text: 'Många tror att det bara är jorden som har en måne. Vår måne syns ju så tydligt. Men nästan alla planeter har månar. Mars har två små månar, och Jupiter och Saturnus har många. En del månar är jättestora. Jupiters måne Ganymedes och Saturnus måne Titan är till och med större än planeten Merkurius.' },
        // [BILD M: jorden och månen, och Jupiter med sina fyra största månar, alla i samma skala]
        { id: 'bild-m', typ: 'figur', namn: 'himlakroppar_i_skala', kroppar: [{ namn: 'Jorden', diameter: 12756, grupp: 0 }, { namn: 'Månen', diameter: 3475, grupp: 0 }, { namn: 'Jupiter', diameter: 142984, grupp: 1 }, { namn: 'Io', diameter: 3643, grupp: 1 }, { namn: 'Europa', diameter: 3122, grupp: 1 }, { namn: 'Ganymedes', diameter: 5268, grupp: 1 }, { namn: 'Kallisto', diameter: 4821, grupp: 1 }, { namn: 'Merkurius', diameter: 4879, grupp: 2 }], bildtext: 'Jorden och månen, Jupiter med sina fyra största månar och Merkurius som jämförelse – alla i samma skala.' }
      ]
    },
    {
      id: 'mindre-himlakroppar-berattar-om-solsystemets-historia', titel: 'Mindre himlakroppar berättar om solsystemets historia',
      block: [
        { typ: 'rubrik', text: 'Asteroider är klumpar av sten och metall' },
        { typ: 'text', text: 'En *asteroid* är en mindre himlakropp av sten och metall som går runt solen. De flesta finns i asteroidbältet, mellan Mars och Jupiter. En del asteroider är som stora stenblock. Andra är flera hundra kilometer stora.' },
        { typ: 'text', text: 'Asteroiderna är intressanta för forskarna. De har inte förändrats mycket sedan solsystemet bildades. Därför är de som gamla spår från den tiden. Man har skickat rymdsonder till asteroider för att fotografera dem och ta med prover hem.' },
        { typ: 'rubrik', text: 'Kometer är smutsiga snöbollar' },
        { typ: 'text', text: 'En *komet* är en mindre himlakropp av is, sten och damm. Man brukar säga att den är som en smutsig snöboll. Långt från solen är kometen kall och mörk och svår att se.' },
        { typ: 'text', text: 'När kometen kommer närmare solen värms den upp. Isen blir till gas, och damm lossnar. Då bildas ett moln runt kometen och en lång svans som kan synas från jorden. Svansen pekar alltid bort från solen. Det beror på att solens strålning och solvinden trycker gasen och dammet bakåt. När kometen är på väg bort från solen kan svansen alltså vara framför kometen.' },
        { typ: 'rubrik', text: 'Ett stjärnfall är ingen stjärna' },
        { typ: 'text', text: 'I rymden finns mängder av små stenar och metallbitar. Ibland kommer en sådan liten bit in i jordens luft i mycket hög fart. Då blir biten och luften runt den så het att det lyser. Vi ser ett ljust streck på himlen. Det kallas en *meteor*, eller ett stjärnfall.' },
        { typ: 'text', text: 'Många tror att ett stjärnfall är en stjärna som faller. Men det stämmer inte. En stjärna är ju enorm, ofta större än solen, och ligger otroligt långt bort. Ett stjärnfall är bara en liten sten, ofta inte större än ett sandkorn, som brinner upp högt uppe i luften.' },
        { typ: 'rubrik', text: 'En meteorit är en sten från rymden som når marken' },
        { typ: 'text', text: 'Ibland är stenen så stor att den inte brinner upp helt. Det som är kvar och landar på marken kallas en *meteorit*. De flesta meteoriter är små. Men stora meteoriter har slagit ner och gjort kratrar.' },
        { typ: 'text', text: 'Meteoriter är värdefulla för forskarna. En del av dem bildades för mer än fyra miljarder år sedan, samtidigt som solsystemet. När man undersöker dem får man veta mer om hur allt började.' },
        { typ: 'rubrik', text: 'Astronomerna sorterar himlakropparna' },
        { typ: 'text', text: 'Forskarna delar in himlakropparna i grupper: stjärnor, planeter, månar och så vidare. Det gör det lättare att jämföra dem och förstå hur de har bildats. Indelningen är en modell.' },
        { typ: 'text', text: 'Men naturen passar inte alltid in i våra grupper. Vissa asteroider liknar kometer. Och det går inte att avgöra vad något är bara genom att se hur stort det är. Därför tittar forskarna på flera saker: hur himlakroppen rör sig, vilken form den har och vad som finns runt den.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Himlakroppar är naturliga föremål i rymden.',
          'Stjärnor lyser av sig själva. Planeter och månar reflekterar ljus.',
          'Planeter går runt en stjärna. Dvärgplaneter har inte rensat sin bana.',
          'Månar går runt planeter. Nästan alla planeter har månar.',
          'Asteroider är av sten och metall. Kometer har också is och får en svans nära solen.',
          'Ett stjärnfall är en meteor, en liten sten som brinner upp i luften. En meteorit är det som når marken.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
