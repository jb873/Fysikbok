/* Avsnittssida VI. Repetition: ljud och ljus, text A: Ljud – nivån fordjupning (📕).
 * Arbetsorder 30 (2026-11-20; källan v4: arbetsorder 32, 2026-11-21): kallor/kap3/VI-A-Repetition-Ljud-alla-nivaer-v4.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text via: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen, länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen, och i Fördjupningen rutan "Vill
 * du gå vidare?" sist. [BILD …] står som kommentar, med figuren efter (kap3-figurer-via.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljud med fysikens glasögon' },
        { typ: 'text', text: 'I Standard repeterade du vad ljud är och hur det beter sig. Nu när du har läst om tryck, energi och rörelse kan du förstå ljudet på ett djupare sätt. En ljudvåg är en tryckvåg. Den för med sig energi. Och hur fort den går beror på egenskaper hos ämnet som många läroböcker förenklar fel.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'varför en ljudvåg är små ändringar i lufttrycket',
          'hur våglängd, frekvens och hastighet hänger ihop',
          'vad som egentligen bestämmer ljudets hastighet',
          'varför decibelskalan växer så snabbt',
          'hur ljudbangen hänger ihop med hoppet från rymdens kant'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'ljud-och-tryck', titel: 'Ljud är tryck',
      block: [
        { typ: 'rubrik', text: 'En förtätning är ett litet övertryck' },
        { typ: 'text', text: 'I texten om tryck lärde du dig att luften omkring oss har trycket ungefär 100 kPa. I en förtätning ligger molekylerna tätare, och då är trycket lite högre. I en förtunning är det lite lägre. En ljudvåg är alltså små tryckändringar som vandrar genom luften. Det är dessa tryckändringar som trycker på trumhinnan och får den att svänga.' },
        { typ: 'rubrik', text: 'Örat känner av otroligt små tryckändringar' },
        { typ: 'text', text: 'Ändringarna är mycket små. I ett vanligt samtal skiljer sig trycket bara med ungefär 0,02 Pa från lufttrycket, alltså några miljondelar av 100 kPa. Ändå hör vi det tydligt. Det svagaste ljud vi kan höra motsvarar en tryckändring på ungefär 0,00002 Pa. Örat är ett av de känsligaste mätinstrument som finns.' }
      ]
    },
    {
      id: 'vaglangd-och-frekvens', titel: 'Våglängd och frekvens',
      block: [
        { typ: 'rubrik', text: 'Hastigheten är frekvensen gånger våglängden' },
        { typ: 'text', text: 'Varje svängning skickar iväg en ny våglängd. Om ljudkällan svänger f gånger per sekund skickar den iväg f våglängder per sekund. Sträckan som vågen hinner gå på en sekund, alltså hastigheten, blir därför frekvensen gånger våglängden.' },
        { typ: 'formel', uttryck: 'v = f · λ', forklaring: 'v hastigheten (m/s), f frekvensen (Hz), λ våglängden (m)' },
        { typ: 'text', text: 'Tecknet λ är den grekiska bokstaven lambda. I luft är v ungefär 340 m/s. Ett ljud med frekvensen 340 Hz har därför våglängden 1 m. Den mörkaste ton vi kan höra, 20 Hz, har våglängden 17 m, längre än ett klassrum. Den ljusaste, 20 000 Hz, har våglängden 1,7 cm.' },
        { typ: 'rubrik', text: 'Därför hörs basen genom väggen' },
        { typ: 'text', text: 'Ljud med låg frekvens har lång våglängd och böjer sig lättare runt hinder än ljud med kort våglängd. Basljud är också svåra att dämpa med vanliga väggar. Därför hör man ofta basen tydligare än diskanten från grannens musik, och trummorna tydligare än sången från en konsert långt borta.' }
      ]
    },
    {
      id: 'hastigheten-och-amnet', titel: 'Ljudets hastighet och ämnet',
      block: [
        { typ: 'rubrik', text: 'Hög densitet ger inte automatiskt snabbare ljud' },
        { typ: 'text', text: 'Många läroböcker skriver att ljudet går fortare i ämnen med hög densitet. Det stämmer att ljudet går fortare i vatten än i luft, och i stål än i vatten. Men hög densitet är inte orsaken till det. Bly har mycket högre densitet än aluminium, men ljudet går drygt 2 000 m/s i bly och över 6 000 m/s i aluminium.' },
        { typ: 'rubrik', text: 'Styvheten och densiteten drar åt olika håll' },
        { typ: 'text', text: 'Ljudets hastighet beror på två saker som drar åt olika håll. Ju hårdare partiklarna sitter ihop, alltså ju styvare ämnet är, desto snabbare för de vidare en knuff. Det gör ljudet snabbare. Ju högre densiteten är, alltså ju mer massa som är packad i varje kubikcentimeter, desto trögare är ämnet att sätta i rörelse. Det gör ljudet långsammare. Det är tröghet, samma sak som i avsnittet om rörelse.' },
        { typ: 'text', text: 'I fasta ämnen sitter partiklarna mycket hårt ihop, och det väger tyngst. Därför går ljudet fortast där. Aluminium är styvt men lätt, och därför är ljudet snabbt. Bly är tungt och mjukt, och därför är ljudet långsamt trots den höga densiteten.' }
      ]
    },
    {
      id: 'ljudets-energi', titel: 'Ljudets energi',
      block: [
        { typ: 'rubrik', text: 'Ljudvågen för med sig energi, men inte luft' },
        { typ: 'text', text: 'I texterna om energi lärde du dig att energi kan föras över utan att föremålet flyttas långt. En ljudvåg är ett sådant exempel. Luften svänger bara lite fram och tillbaka när vågen passerar, men energin vandrar vidare genom luften. När ljudvågen når trumhinnan utför den ett arbete på den och får den att svänga.' },
        { typ: 'rubrik', text: 'Decibelskalan växer i tiopotenser' },
        { typ: 'text', text: 'Hur mycket ljudenergi som passerar en viss yta varje sekund kallas *ljudintensitet|ljudintensitet*. För varje 10 dB blir ljudintensiteten tio gånger så stor. 70 dB är alltså tio gånger så stor intensitet som 60 dB, och 90 dB är tusen gånger så stor som 60 dB. Örat upplever ändå inte 70 dB som tio gånger så starkt. En tumregel är att det låter ungefär dubbelt så starkt. Därför är det lätt att underskatta hur mycket energi som träffar örat vid en hög konsert.' },
        { typ: 'rubrik', text: 'Ljudbangen och hoppet från rymdens kant' },
        { typ: 'text', text: 'I djupdykningen om hoppet från rymdens kant passerade fallskärmshopparna ljudets hastighet. När något går fortare än ljudet hinner ljudvågorna aldrig före det. Vågorna som skickas ut bildar tillsammans en stötvåg, en kon av kraftigt övertryck bakom föremålet. När konen passerar hörs en smäll, ljudbangen. Ljudets hastighet är också lägre i kall luft, och högt uppe i atmosfären är luften mycket kall. Därför var ljudets hastighet där lägre än vid marken, och det var lättare att passera den.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En ljudvåg är små tryckändringar i luften. Ett samtal ändrar trycket bara ungefär 0,02 Pa.',
          'v = f · λ. I luft har 340 Hz våglängden 1 m, 20 Hz 17 m och 20 000 Hz 1,7 cm.',
          'Långa vågor böjer sig lättare runt hinder, och basljud är svåra att dämpa.',
          'Ljudets hastighet beror både på hur styvt ämnet är och på densiteten. Styvhet gör ljudet snabbare, hög densitet gör det långsammare. Därför går ljudet fortare i aluminium än i bly.',
          'Ljudvågen för med sig energi men inte luft. Varje 10 dB ger tio gånger så stor ljudintensitet.',
          'Ett föremål som går fortare än ljudet drar med sig en stötvåg formad som en kon. Den hörs som en ljudbang när den passerar.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] },
        { typ: 'vidare', inledning: 'Läs mer i kapitel 2 Ljud och ljus – Vad ljud är:', lankar: [
          { text: 'Ljud är vibrationer: 1. Ljud är tryck', href: '../../ljud_och_ljus/vad_ljud_ar/index.html?niva=fordjupning#ljud-ar-vibrationer/ljud-ar-tryck' },
          { text: 'Ljudvågen: 2. Våglängd och hastighet', href: '../../ljud_och_ljus/vad_ljud_ar/index.html?niva=fordjupning#ljudvagen/vaglangd-och-hastighet' },
          { text: 'Ljudets hastighet: 1. Styvhet och densitet', href: '../../ljud_och_ljus/vad_ljud_ar/index.html?niva=fordjupning#ljudets-hastighet/styvhet-och-densitet' },
          { text: 'Örat och hörseln: 1. Örat förstärker trycket', href: '../../ljud_och_ljus/vad_ljud_ar/index.html?niva=fordjupning#orat-och-horseln/orat-forstarker' }
        ] }
      ]
    }
  ]
});
