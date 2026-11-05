/* Avsnittssida III, text D: Tyngdkraften – nivån Fördjupning (v2). En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims källa (III-D-Tyngdkraften-Fordjupning-v2.md, 2026-11-05), införd ordagrant i strömformatet: ## = avsnitt,
 * ### = rubrik, ett stycke = ett textblock. Fördjupning förutsätter Standard (Joachims regel 2026-11-05): den upprepar
 * inte Standard, så avsnittet att-mata-kraft (dynamometern) och bilderna T, F och M finns inte här. Nivåbytet från
 * att-mata-kraft går till närmaste föregående avsnitt som finns här, tyngdkraft-och-normalkraft (samma regel som i A).
 * [FORMEL] är formelblocket (gravitationslagen med motorns bråkskrivning), [TABELL] tabellblocket (två tabeller) och
 * [BILD J] figuren jord_och_mane med 590 N och 96 N, direkt efter tabellen. Ingen jämförelse i Fördjupning.
 * Tabellhuvudena med stor bokstav först, som i v1 ("Avstånd från jordens mitt", "Tyngd för 60 kg"); g (N/kg) i gemener.
 * "Det här lär du dig:" står som liten rubrik utan kolon, som i text A–C. Den gamla versionen ligger i
 * Arkiv/2026-11-05-fore-fordjupning-v2/. Avsnittens id: inledning, tyngdkraft-och-normalkraft, massa-och-tyngd,
 * sammanfattning; huvudrubrikerna (avsnitten) står i innehållsförteckningen, ###-rubrikerna bara i texten. */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Tyngdkraften – fördjupning' },
        { typ: 'text', text: 'I Standard lärde du dig att jorden drar allt mot sig, att bordet trycker uppåt med en normalkraft och att massa och tyngd är olika saker. Här går vi vidare, till sådant du möter igen i fysiken på gymnasiet. Du får se lagen som Newton formulerade för gravitationen, varför havet stiger och sjunker två gånger om dygnet och varför ett kilogram inte längre är en metallbit i Paris.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          '*gravitationslagen*: hur dragningen beror på massorna och avståndet',
          'att tyngdkraften har en motkraft, och när normalkraften inte är lika stor som tyngden',
          'att räkna ut tyngden med F = m · g, och att g är olika på olika platser',
          'varför tunga och lätta föremål faller lika fort'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'tyngdkraft-och-normalkraft', titel: 'Gravitationen och normalkraften',
      block: [
        { typ: 'rubrik', text: 'Newtons gravitationslag beskriver hur alla massor drar i varandra' },
        { typ: 'text', text: 'Isaac Newton insåg att det är samma kraft som får ett äpple att falla och som håller månen kvar i sin bana runt jorden. Han beskrev den i *gravitationslagen*: alla föremål med massa drar i varandra, och kraften beror på två saker. Den blir större ju större massorna är, och den blir mindre ju längre ifrån varandra föremålen är. Det var första gången någon visade att samma fysik gäller på jorden och i rymden.' },
        { typ: 'text', text: 'Lagen kan skrivas som en formel. Talet G är en konstant som är mycket liten, ungefär 0,000 000 000 067. Det är därför vi aldrig märker dragningen mellan vanliga föremål. Två personer på 60 kg som står en meter ifrån varandra drar i varandra med en kraft på mindre än en miljondels newton. Först när den ena massan är så enorm som jordens blir kraften stor nog att märkas.' },
        { typ: 'formel', uttryck: 'F = G · [[m₁ · m₂|r²]]',
          forklaring: [['F', 'kraften (N)'], ['G', 'gravitationskonstanten'], ['m₁ och m₂', 'massorna (kg)'], ['r', 'avståndet mellan deras mittpunkter (m)']] },

        { typ: 'rubrik', text: 'Dubbelt så långt bort ger en fjärdedel så stark dragning' },
        { typ: 'text', text: 'I formeln står avståndet i kvadrat. Det betyder att dragningen avtar snabbt när avståndet växer. Dubbelt så långt bort ger en fjärdedel så stark kraft, tre gånger så långt bort ger en niondel. Avståndet räknas från jordens mitt, inte från marken. Du som står på jordytan är redan ungefär 6 400 km från jordens mitt.' },
        { typ: 'text', text: 'Därför märks det knappt att man flyger högt upp. På tio kilometers höjd, där flygplanen flyger, är dragningen nästan densamma som på marken. Rymdstationen ISS, 400 km upp, dras fortfarande med ungefär 90 procent av kraften vid jordytan. Först mycket långt bort blir skillnaden stor. Vid månens avstånd är jordens dragning bara några tiotusendelar av den vid jordytan, men den räcker för att hålla kvar månen i sin bana.' },
        { typ: 'tabell', rubriker: ['Plats', 'Avstånd från jordens mitt', 'g (N/kg)'],
          rader: [['Jordytan', '6 400 km', '9,8'], ['ISS', '6 800 km', '8,7'],
                  ['6 400 km över marken', '12 800 km', '2,5'], ['Månens avstånd', '384 000 km', '0,003']] },

        { typ: 'rubrik', text: 'Månens dragning ger tidvatten i haven' },
        { typ: 'text', text: 'Månen drar inte lika hårt i hela jorden. Den sida av jorden som vänder sig mot månen är närmare och dras lite hårdare än jordens mitt, och den bortre sidan dras lite svagare. Skillnaden är liten, men den räcker för att vattnet i haven ska bilda två svaga upphöjningar – en mot månen och en på andra sidan. När jorden snurrar passerar varje kust båda upphöjningarna. Därför stiger och sjunker havet ungefär två gånger per dygn. Det kallas *tidvatten*.' },
        { typ: 'text', text: 'Solen bidrar också, men mindre. När solen, jorden och månen står på linje, vid nymåne och fullmåne, samverkar de och tidvattnet blir extra stort. I Atlanten kan vattnet stiga flera meter. I Östersjön märks tidvattnet knappt, eftersom havet är nästan instängt och vattnet inte hinner strömma in genom de smala sunden.' },

        { typ: 'rubrik', text: 'Tyngdkraftens motkraft är att boken drar i jorden' },
        { typ: 'text', text: 'Du vet redan att tyngdkraften och normalkraften inte är kraft och motkraft, eftersom båda verkar på boken. Men tyngdkraften har förstås en motkraft. Byt plats på orden: ”jorden drar boken” blir ”boken drar jorden”. Boken drar alltså jorden uppåt med en lika stor kraft, som gravitationslagen säger: dragningen är ömsesidig.' },
        { typ: 'text', text: 'Varför märks det inte? Samma kraft ändrar rörelsen mindre ju större massa föremålet har. En bok med massan 1 kg dras med ungefär 10 N och faller. Jorden dras med samma 10 N mot boken, men jordens massa är ungefär 6 000 000 000 000 000 000 000 000 kg. Rörelseförändringen blir så liten att den inte går att mäta. Många tror att den stora jorden drar hårdare i boken än boken drar i jorden, men krafterna är exakt lika stora. Det är verkan av kraften som skiljer sig.' },

        { typ: 'rubrik', text: 'Normalkraften anpassar sig efter vad som händer' },
        { typ: 'text', text: 'Normalkraften är ingen fast kraft. Den blir precis så stor som behövs för att föremålet inte ska tränga in i underlaget. Trycker du ner blocket med handen blir normalkraften större än tyngden, eftersom bordet nu måste ta emot både tyngden och ditt tryck. Drar du blocket snett uppåt med repet blir normalkraften mindre, eftersom repet lyfter lite. Då blir också friktionen mindre – därför är det lättare att dra en kälke med repet snett uppåt än rakt framåt.' },
        { typ: 'text', text: 'På en sluttning är normalkraften också mindre än tyngden. Tyngdkraften pekar fortfarande rakt nedåt mot jordens mitt, men underlaget lutar. Normalkraften är alltid vinkelrät mot underlaget, och därför tar den bara emot en del av tyngden. Den andra delen drar föremålet nedför backen. På gymnasiet lär du dig att dela upp tyngdkraften i två delar, en längs backen och en vinkelrät mot den. Ju brantare backen är, desto större blir delen som drar nedför och desto mindre blir normalkraften. Det är därför en pulka glider fortare i en brant backe.' }
      ]
    },
    {
      id: 'massa-och-tyngd', titel: 'Massa och tyngd',
      block: [
        { typ: 'rubrik', text: 'Tyngden räknas ut med massan och tyngdfaktorn' },
        { typ: 'text', text: 'I Standard räknade du med att varje kilogram dras med ungefär 10 N. Mer exakt är det 9,8 N, och sambandet skrivs F = m · g. F är tyngden i newton, m är massan i kilogram och g är *tyngdfaktorn|tyngdfaktor* i newton per kilogram (N/kg). En ryggsäck med massan 5 kg har tyngden F = 5 · 9,8 = 49 N, alltså ungefär 50 N.' },
        { typ: 'formel', uttryck: 'F = m · g',
          forklaring: [['F', 'tyngd (N)'], ['m', 'massa (kg)'], ['g', 'tyngdfaktor (N/kg)']] },

        { typ: 'rubrik', text: 'Tyngdfaktorn är olika på olika himlakroppar' },
        { typ: 'text', text: 'Tyngdfaktorn beror på himlakroppens massa och storlek, precis som gravitationslagen säger. På månen är g ungefär 1,6 N/kg, på Mars ungefär 3,7 N/kg och på Jupiter ungefär 25 N/kg. En person med massan 60 kg har därför olika tyngd på olika himlakroppar, men massan är 60 kg överallt.' },
        { typ: 'tabell', rubriker: ['Himlakropp', 'g (N/kg)', 'Tyngd för 60 kg'],
          rader: [['Jorden', '9,8', '590 N'], ['Månen', '1,6', '96 N'],
                  ['Mars', '3,7', '220 N'], ['Jupiter', '25', '1 500 N']] },
        { typ: 'figur', namn: 'jord_och_mane', massa: 60, tyngd: [590, 96], vag: [60, 10],
          bildtext: 'Samma person på jorden och på månen: massan är densamma, men månen drar bara en sjättedel så hårt. Vågen mäter kraften och visar därför fel på månen.',
          beskrivning: 'Två bilder bredvid varandra. På jorden står en person med massan 60 kg på en våg som visar 60 kg; en lång pil nedåt visar tyngden 590 N. På månen står samma person, fortfarande 60 kg, på en våg som visar 10 kg; pilen nedåt är bara en sjättedel så lång, 96 N.' },

        { typ: 'rubrik', text: 'Tyngdfaktorn varierar också på jorden' },
        { typ: 'text', text: 'Även på jorden är g inte exakt densamma överallt. Vid ekvatorn är g ungefär 9,78 N/kg och vid polerna ungefär 9,83 N/kg. Det beror på två saker. Jorden är lite tillplattad, så vid polerna är man närmare jordens mitt. Och jorden snurrar, så vid ekvatorn behövs en liten del av dragningen för att hålla kvar dig i den snabba rörelsen runt jordaxeln. I Sverige är g ungefär 9,82 N/kg.' },
        { typ: 'text', text: 'Skillnaden är bara en halv procent, men den går att mäta. Geologer använder mycket känsliga instrument som mäter g för att hitta tunga malmkroppar eller lättare saltlager under marken. Där det finns mer massa under fötterna blir g en aning större.' },

        { typ: 'rubrik', text: 'En balansvåg mäter massa, en badrumsvåg mäter kraft' },
        { typ: 'text', text: 'En badrumsvåg mäter hur hårt du trycker på den, alltså en kraft, och räknar sedan om kraften till kilogram med jordens g. På månen visar den därför bara en sjättedel av din massa. Den är inställd för jorden.' },
        { typ: 'text', text: 'En *balansvåg* fungerar på ett annat sätt. Den jämför föremålet med vikter av känd massa på andra sidan. På månen dras båda sidorna lika mycket svagare, och därför väger den fortfarande jämnt. En balansvåg visar alltså rätt massa var den än står, så länge det finns någon tyngdkraft alls. Därför används balansvågar fortfarande i laboratorier när massan ska bestämmas mycket noggrant.' },

        { typ: 'rubrik', text: 'Tunga och lätta föremål faller lika fort' },
        { typ: 'text', text: 'Massa har två egenskaper som du har mött i olika delar av kapitlet. Massan avgör hur hårt ett föremål dras av jorden – den tunga massan. Massan avgör också hur trögt föremålet är, alltså hur svårt det är att ändra dess fart – den tröga massan. Det märkliga är att de två alltid är exakt lika stora.' },
        { typ: 'text', text: 'Det har en överraskande följd. En sten med dubbelt så stor massa dras med dubbelt så stor kraft, men den är också dubbelt så trög. De två effekterna tar ut varandra, och därför faller tunga och lätta föremål lika fort om luftmotståndet inte stör. Många tror att tunga saker faller fortare, men det beror bara på luften. En astronaut på månen, där det inte finns någon luft, släppte en hammare och en fjäder samtidigt, och de landade samtidigt. Hur fallet går till lär du dig i nästa avsnittssida, Fall, kast och balans.' },

        { typ: 'rubrik', text: 'Kilogrammet bestäms av en naturkonstant' },
        { typ: 'text', text: 'Ett kilogram var länge massan av en bestämd metallcylinder av platina och iridium, som förvarades i ett valv utanför Paris sedan 1889. Alla vågar i världen jämfördes till slut med den. Men cylindern visade sig ändra sig en aning – jämförd med sina kopior skilde den sig med ungefär femtio miljondels gram efter hundra år.' },
        { typ: 'text', text: 'Sedan 2019 bestäms kilogrammet i stället av en naturkonstant, Plancks konstant, som är densamma överallt och aldrig ändras. Det gör att forskare var som helst i världen kan bestämma ett exakt kilogram utan att resa till Paris. Massan är alltså inte bara ett tal på en våg, utan något som fysiken kan definiera med samma noggrannhet överallt.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Gravitationslagen: alla massor drar i varandra, starkare med större massor och svagare med avståndet i kvadrat.',
          'Dragningen räknas från jordens mitt, därför är den nästan lika stark på ISS som på marken.',
          'Månens dragning är olika stark på jordens två sidor och ger tidvatten.',
          'Tyngdkraftens motkraft är att föremålet drar jorden – lika stora krafter, olika verkan.'
        ] },
        // (listan i två block: med åtta punkter ryms Sammanfattningen inte på en sida, och motorn delar aldrig ett block)
        { typ: 'punkter', punkter: [
          'Normalkraften anpassar sig: större när man trycker ner, mindre när man drar snett uppåt eller står i en backe.',
          'Tyngden: F = m · g. På jorden är g ≈ 9,8 N/kg men varierar lite med platsen; på månen ≈ 1,6 N/kg.',
          'En balansvåg mäter massa och visar rätt överallt, en badrumsvåg mäter kraft.',
          'Tung och trög massa är lika stora, därför faller tunga och lätta föremål lika fort utan luft.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
