/* Avsnittssida III. Ljusets väg, text B: Reflektion och speglar – nivån fordjupning (📕).
 * Arbetsorder 38 (2026-11-25): kallor/kap2/Kap2-III-B-Reflektion-och-speglar-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iiib: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iiib.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Reflektionslagen räcker långt' },
        { typ: 'text', text: 'I Standard lärde du dig reflektionslagen och hur en spegelbild uppstår. Med bara de två sakerna kan man förklara förvånansvärt mycket. Här använder du dem för att svara på en fråga som många gissar fel på, för att förstå vad som händer mellan två speglar, och för att se hur en enkel idé gör det möjligt att mäta avståndet till månen.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'hur stor en spegel måste vara för att du ska se hela dig själv',
          'hur många bilder du ser mellan två speglar',
          'hur ett *periskop* fungerar',
          'varför en hörnreflektor alltid skickar tillbaka ljuset'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'hela-kroppen', titel: 'Hur stor spegel behöver du?',
      block: [
        { typ: 'rubrik', text: 'Halva din längd räcker' },
        { typ: 'text', text: 'Många tror att man behöver en spegel som är lika lång som man själv för att se hela kroppen, eller att man kan se mer av sig själv om man går längre bort från spegeln. Båda delarna är fel. Det räcker med en spegel som är hälften så lång som du, och avståndet spelar ingen roll.' },
        { typ: 'text', text: 'Det kan man visa med reflektionslagen. Ljuset från dina fötter ska studsa i spegeln och komma in i ditt öga. Normalen i träffpunkten är vågrät, och eftersom infallsvinkeln och reflektionsvinkeln är lika stora träffar ljuset spegeln precis mitt emellan ögonhöjden och fotsulorna. På samma sätt träffar ljuset från toppen av huvudet spegeln mitt emellan ögonen och hjässan. Den del av spegeln som behövs är därför hälften så lång som avståndet från hjässan till fötterna.' },
        // [BILD B9: personen framför en vägghängd plan spegel, sedd från sidan, i numrerade steg: 1 en stråle från fötterna går till spegeln och reflekteras in i ögat · 2 den träffar spegeln på höjden mitt emellan ögonen och golvet, normalen streckad · 3 en stråle från hjässan träffar spegeln mitt emellan ögonen och hjässan · 4 den del av spegeln som används är markerad och är hälften så lång som personen]
        { id: 'bild-b9', typ: 'figur', namn: 'ljus', lage: 'hel-kropp', bildtext: 'Strålarna från fötterna och hjässan träffar spegeln halvvägs till ögonen. Spegeln behöver vara hälften så lång som du.' },
        { typ: 'text', text: 'Går du längre bort lutar strålarna mindre, men träffpunkterna ligger kvar på samma höjd. Du kan pröva det själv på en immig badrumsspegel. Rita runt ditt ansikte i spegeln med fingret, och backa sedan. Ansiktet ryms fortfarande i ringen, och ringen är hälften så stor som ditt ansikte.' }
      ]
    },
    {
      id: 'tva-speglar', titel: 'Två speglar',
      block: [
        { typ: 'rubrik', text: 'Speglarna speglar varandra' },
        { typ: 'text', text: 'Ställer du två plana speglar i rät vinkel mot varandra och lägger ett mynt framför dem ser du tre mynt i speglarna. Ljuset kan studsa en gång i den ena spegeln, en gång i den andra, eller först i den ena och sedan i den andra. Ju mindre vinkeln mellan speglarna är, desto fler bilder blir det.' },
        { typ: 'text', text: 'Vid 90° ser du tre bilder, och vid 60° ser du fem, om myntet ligger mitt emellan speglarna. Vid andra vinklar och lägen kan antalet bero på var myntet ligger. Står speglarna parallellt mot varandra, som i en hiss eller hos frisören, studsar ljuset fram och tillbaka och bilderna fortsätter i en lång rad som blir allt mörkare, eftersom en del av ljuset försvinner vid varje reflektion. Ett kalejdoskop bygger på samma sak.' },
        { typ: 'rubrik', text: 'Periskopet ser över hinder' },
        { typ: 'text', text: 'Ett *periskop* är ett rör med två plana speglar som lutar 45°. Ljuset kommer in upptill, studsar i den övre spegeln rakt nedåt genom röret och studsar i den nedre spegeln ut mot ögat. Eftersom bilden speglas två gånger blir den rättvänd. Med ett periskop kan man se över en mur eller en folkmassa, och ubåtar har använt periskop för att se över vattenytan.' },
        // [BILD B10: periskopet i numrerade steg: 1 ljus från ett föremål kommer vågrätt in i rörets övre öppning · 2 strålen träffar den övre spegeln som lutar 45° och reflekteras rakt nedåt · 3 strålen träffar den nedre spegeln som lutar 45° och reflekteras vågrätt ut · 4 strålen når ögat. Normalerna streckade]
        { id: 'bild-b10', typ: 'figur', namn: 'ljus', lage: 'periskop', bildtext: 'Två speglar som lutar 45° vänder ljuset två gånger, så att du ser över kanten.' }
      ]
    },
    {
      id: 'horn-och-manen', titel: 'Hörnreflektorn och månen',
      block: [
        { typ: 'rubrik', text: 'Två reflektioner vänder strålen helt' },
        { typ: 'text', text: 'I Standard såg du att en reflex består av små hörn. Man kan förstå varför de skickar tillbaka ljuset genom att följa vinklarna. Tänk på två speglar i rät vinkel, sett från sidan. När strålen studsar i den första spegeln ändras dess riktning, och när den studsar i den andra ändras den lika mycket till. Tillsammans vänder de två reflektionerna strålen exakt 180°, hur den än kommer in. Med tre speglar som står vinkelrätt mot varandra, som i ett hörn av en låda, fungerar det i alla riktningar i rummet. En sådan konstruktion kallas en *hörnreflektor*.' },
        { typ: 'rubrik', text: 'Reflektorerna på månen' },
        { typ: 'text', text: 'De reflektorer som astronauterna ställde ut på månen, och som du läste om i texten om ljus och seende, är hörnreflektorer. Varje reflektor består av ett hundratal små glasprismor med tre ytor i rät vinkel. Därför kommer laserpulsen tillbaka mot jorden, fast reflektorn står still på månen medan jorden roterar och laserns läge hela tiden ändras. Med en vanlig plan spegel skulle ljuset ha studsat iväg ut i rymden, om inte spegeln hade varit riktad exakt mot observatoriet.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'För att se hela dig själv behöver du en spegel som är hälften så lång som du. Avståndet till spegeln spelar ingen roll.',
          'Två speglar i vinkel ger flera bilder: tre vid 90°, fem vid 60°. Parallella speglar ger en lång rad bilder.',
          'Ett periskop har två speglar som lutar 45° och låter dig se över hinder.',
          'Två eller tre speglar i rät vinkel mot varandra vänder strålen 180°. Det är så hörnreflektorer, cykelreflexer och reflektorerna på månen fungerar.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
