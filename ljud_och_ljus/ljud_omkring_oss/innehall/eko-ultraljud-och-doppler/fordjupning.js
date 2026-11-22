/* Avsnittssida II. Ljud omkring oss, text C: Eko, ultraljud och dopplereffekten – nivån fordjupning (📕).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-C-Eko-ultraljud-och-doppler-alla-nivaer-v2.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iic.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Fortare än ljudet, och ljud som mäter fart' },
        { typ: 'text', text: 'I Standard såg du att ett plan som flyger fortare än ljudet drar en stötvåg efter sig, och att dopplereffekten ändrar tonen hos en ljudkälla som rör sig. Här får du veta hur man anger fart i förhållande till ljudets hastighet, varför det ibland bildas ett moln runt ett plan, hur en människa har fallit fortare än ljudet och hur läkare mäter blodets fart med dopplereffekten.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *machtal* är',
          'varför det kan bildas ett moln runt ett plan nära ljudets hastighet',
          'hur en fallskärmshoppare passerade ljudets hastighet utan flygplan',
          'hur dopplereffekten används för att mäta blodflöde'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'machtal', titel: 'Machtal',
      block: [
        { typ: 'rubrik', text: 'Farten jämförs med ljudets hastighet' },
        { typ: 'text', text: 'För snabba plan anger man ofta farten som ett *machtal|machtal*, efter den österrikiske fysikern Ernst Mach. Machtalet är farten delad med ljudets hastighet just där planet flyger. Mach 1 betyder exakt ljudets hastighet, Mach 2 dubbelt så fort.' },
        { typ: 'formel', uttryck: 'Ma = v / vljud', forklaring: 'Ma machtalet, v farten (m/s), vljud ljudets hastighet där föremålet rör sig (m/s)' },
        { typ: 'text', text: 'Eftersom ljudets hastighet beror på temperaturen är Mach 1 inte samma fart överallt. Vid marken, där det är varmt, är Mach 1 ungefär 1 230 km/h. På tio kilometers höjd, där luften kan vara −50 °C, är Mach 1 bara drygt 1 080 km/h. Ett stridsflygplan som JAS 39 Gripen kan flyga i ungefär Mach 2. Passagerarplanet Concorde flög i drygt Mach 2 mellan Europa och USA fram till 2003.' },
        { typ: 'exempel', rubrik: 'Vilket machtal?', stycken: [
          ['Ett plan flyger 600 m/s på en höjd där ljudets hastighet är 300 m/s. Vilket machtal har planet?'],
          ['Givet: v = 600 m/s, vljud = 300 m/s. Sökt: machtalet Ma.'],
          ['Lösning:',
           'Ma = v / vljud = 600 m/s / 300 m/s = 2',
           'Svar: Planet flyger i Mach 2.']
        ] }
      ]
    },
    {
      id: 'ljudvallen', titel: 'Ljudvallen',
      block: [
        { typ: 'rubrik', text: 'Molnet runt planet' },
        { typ: 'text', text: 'När ett plan närmar sig ljudets hastighet blir tryckändringarna runt det mycket kraftiga. På vissa ställen runt planet sjunker trycket så mycket att luften också svalnar. Om luften är fuktig kondenserar vattenångan till små droppar, precis som när ditt andetag syns en kall dag. Då kan ett moln som ser ut som en kon eller en skiva synas runt planet en kort stund. Molnet bildas där trycket är lågt och försvinner så fort trycket stiger igen. Det syns oftast vid fuktigt väder och över hav.' },
        { typ: 'rubrik', text: 'Hoppet från rymdens kant' },
        { typ: 'text', text: 'Den 14 oktober 2012 hoppade österrikaren Felix Baumgartner från en ballong på ungefär 39 kilometers höjd. Där uppe är luften så tunn att den knappt bromsar ett fallande föremål. Han föll fritt i över fyra minuter och nådde efter knappt en minut farten ungefär 1 360 km/h. Eftersom luften på den höjden är mycket kall är ljudets hastighet där bara omkring 1 100 km/h. Baumgartner blev därmed den första människa som passerade ljudets hastighet i fritt fall, utan flygplan eller farkost, ungefär Mach 1,25. Längre ned blev luften tätare och bromsade honom, och han landade med fallskärm.' }
      ]
    },
    {
      id: 'doppler-i-varden', titel: 'Doppler i vården',
      block: [
        { typ: 'rubrik', text: 'Blodet ändrar ekots frekvens' },
        { typ: 'text', text: 'I vården används dopplereffekten för att mäta hur fort blodet strömmar. En ultraljudsapparat skickar in ultraljud med en bestämd frekvens. Ljudet studsar mot blodkropparna, som rör sig. Blodkroppar som rör sig mot apparaten skickar tillbaka ett eko med något högre frekvens, och blodkroppar som rör sig bort ger ett eko med något lägre. Apparaten jämför frekvenserna och räknar ut blodets fart. På skärmen visas det ofta med färger, till exempel rött för blod som strömmar mot apparaten och blått för blod som strömmar bort. På så sätt kan läkare upptäcka förträngningar i blodkärl och se om hjärtats klaffar sluter tätt.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Machtalet är farten delad med ljudets hastighet där föremålet rör sig. Mach 1 är ljudets hastighet.',
          'Mach 1 är lägre högt upp, där luften är kall: ungefär 1 230 km/h vid marken och 1 080 km/h på 10 km höjd.',
          'Nära ljudets hastighet kan trycket sjunka så mycket runt planet att vattenånga kondenserar till ett moln.',
          'Felix Baumgartner föll 2012 fortare än ljudet från 39 km höjd, ungefär Mach 1,25.',
          'Dopplereffekten används i vården för att mäta blodets fart: blod som rör sig mot apparaten ger högre frekvens i ekot.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
