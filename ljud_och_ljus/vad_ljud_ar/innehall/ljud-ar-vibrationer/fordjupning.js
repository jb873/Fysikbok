/* Avsnittssida I. Vad ljud är, text A: Ljud är vibrationer – nivån fordjupning (📕).
 * Arbetsorder 33 (2026-11-21): kallor/kap2/Kap2-I-A-Ljud-ar-vibrationer-alla-nivaer-v5.md (# 📕 FÖRDJUPNING), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2ia: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-ia.js).
 */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljudet sett med fysikerns ögon' },
        { typ: 'text', text: 'I Standard lärde du dig att ljud är förtätningar och förtunningar som vandrar genom ett ämne. Här går vi ett steg längre. Du får se att en ljudvåg egentligen är små ändringar i trycket, hur små de ändringarna är, och att det finns två sorters vågor. Den skillnaden har till och med avslöjat vad som finns långt inne i jorden.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att en ljudvåg är små tryckändringar, och hur små de är',
          'skillnaden mellan *longitudinella* och *transversella* vågor',
          'hur jordbävningsvågor visar att jordens yttre kärna är flytande',
          'varför ljus kan gå genom vakuum men inte ljud'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'ljud-ar-tryck', titel: 'Ljud är tryck',
      block: [
        { typ: 'rubrik', text: 'En förtätning är ett litet övertryck' },
        { typ: 'text', text: 'Luften omkring oss trycker på allt med ett tryck på ungefär 100 kPa, alltså 100 000 pascal. Tryck är kraft fördelad på en yta, något du läser mer om i kapitlet om tryck. Trycket kommer av att luftens molekyler hela tiden krockar med allt de träffar. I en förtätning ligger molekylerna tätare, och då blir krockarna lite fler. Trycket blir lite högre än vanligt. I en förtunning blir det lite lägre. En ljudvåg är alltså små ändringar i lufttrycket som vandrar genom luften. Det är de ändringarna som trycker på trumhinnan och får den att svänga.' },
        { typ: 'rubrik', text: 'Ändringarna är otroligt små' },
        { typ: 'text', text: 'När du pratar med någon på en meters avstånd ändras lufttrycket vid deras öra med ungefär 0,02 Pa. Det är bara en femmiljondel av lufttrycket. Det svagaste ljud en ung människa kan höra motsvarar en tryckändring på ungefär 0,00002 Pa, och då rör sig trumhinnan mindre än diametern på en atom. Först vid omkring 20 Pa, en tusen gånger större ändring än i ett samtal, gör ljudet ont i öronen. Örat klarar alltså tryckändringar från de minsta till en miljon gånger större. Det är ett av de känsligaste mätinstrument som finns.' }
      ]
    },
    {
      id: 'tva-sorters-vagor', titel: 'Två sorters vågor',
      block: [
        { typ: 'rubrik', text: 'I en ljudvåg svänger partiklarna längs vågens riktning' },
        { typ: 'text', text: 'I en ljudvåg i luft svänger luften fram och tillbaka i samma riktning som vågen färdas, ovanpå molekylernas vanliga oordnade rörelse. En sådan våg kallas *longitudinell|longitudinell våg*. Spiralfjädern som du knuffar i ena änden visar precis det: varven rör sig fram och tillbaka längs fjädern.' },
        { typ: 'rubrik', text: 'I en transversell våg svänger partiklarna på tvären' },
        { typ: 'text', text: 'Det finns också vågor där delarna svänger på tvären mot vågens riktning. Om du i stället rycker spiralfjäderns ände åt sidan, vandrar en puckel längs fjädern medan varven rör sig åt sidan och tillbaka. En sådan våg kallas *transversell|transversell våg*. En våg i ett hopprep eller en "våg" på en läktare, där varje person ställer sig upp och sätter sig, är transversella. En gitarrsträng svänger också på tvären, men ljudet som den skapar i luften är longitudinellt.' },
        // [BILD A5: samma spiralfjäder två gånger ovanför varandra. Överst longitudinell våg: handen rör sig fram och tillbaka längs fjädern, förtätningar och förtunningar, pil för vågens riktning och dubbelpil längs fjädern för varvens rörelse. Nederst transversell våg: handen rör sig åt sidan, en puckel vandrar, pil för vågens riktning och dubbelpil på tvären för varvens rörelse]
        { id: 'bild-a5', typ: 'figur', namn: 'ljud', lage: 'vagtyper', bildtext: 'I en longitudinell våg svänger varven längs vågens riktning, i en transversell på tvären.' },
        { typ: 'rubrik', text: 'En gas eller vätska kan bara bära longitudinella vågor' },
        { typ: 'text', text: 'För att en transversell våg ska kunna vandra måste delarna hänga ihop så att en del som rör sig åt sidan drar med sig grannen. I ett fast ämne gör de det. I en gas eller en vätska glider molekylerna förbi varandra, så där kan bara longitudinella vågor, tryckvågor, ta sig fram. Det är därför ljud i luft och vatten alltid är longitudinellt.' },
        { typ: 'rubrik', text: 'Jordbävningsvågor avslöjar jordens inre' },
        { typ: 'text', text: 'När det blir en jordbävning sprids två sorters vågor genom jorden. P-vågor är longitudinella tryckvågor, alltså samma sorts våg som ljud. De går snabbast och kommer fram först. S-vågor är transversella och kommer fram senare. På mätstationer runt hela jorden har man upptäckt att S-vågorna aldrig kommer fram på andra sidan jorden, medan P-vågorna gör det. Förklaringen är att S-vågorna inte kan ta sig igenom ett skikt i jordens inre. Ett skikt som stoppar transversella vågor men släpper igenom tryckvågor måste vara flytande. Så vet vi att jordens yttre kärna är flytande, utan att någon har varit där.' }
      ]
    },
    {
      id: 'ljud-och-ljus-i-vakuum', titel: 'Ljud och ljus i vakuum',
      block: [
        { typ: 'rubrik', text: 'Ljud behöver partiklar, ljus gör det inte' },
        { typ: 'text', text: 'Ljud är en *mekanisk våg*. Det betyder att det är partiklar i ett ämne som svänger och för vågen vidare. Utan partiklar finns ingen ljudvåg, och därför kan ljud inte gå genom vakuum. Ljus är en annan sorts våg, där det inte är partiklar som svänger. Ljus behöver inget ämne och färdas allra snabbast i vakuum. Därför når solljuset oss genom 150 miljoner kilometer tomrum, medan ljudet från solens kraftiga utbrott aldrig når oss. Hur ljus fungerar läser du mer om i avsnitten om ljus.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En ljudvåg är små ändringar i lufttrycket. I ett samtal ändras trycket bara cirka 0,02 Pa, och örat klarar ändringar från ca 0,00002 Pa till ca 20 Pa.',
          'Ljud är en longitudinell våg: partiklarna svänger i samma riktning som vågen färdas. I en transversell våg svänger de på tvären.',
          'Gaser och vätskor kan bara bära longitudinella vågor. Därför stoppas jordbävningarnas S-vågor av jordens flytande yttre kärna.',
          'Ljud är en mekanisk våg och behöver ett ämne. Ljus behöver det inte och går genom vakuum.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
