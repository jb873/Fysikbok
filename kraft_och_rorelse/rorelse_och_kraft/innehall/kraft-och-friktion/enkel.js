/* Avsnittssida III, text B: Kraft och friktion – enkel nivå. Samma källa, regler och figurer som standard.js. */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och friktion' },
        { typ: 'text', text: 'I texten om rörelse lärde du dig att en rörelse bara ändras när en kraft påverkar den. Nu ska vi titta närmare på krafterna. Vad är en kraft? Vad händer när två krafter drar åt olika håll? Och varför bromsas saker?' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad en *kraft* är och hur den ritas',
          'hur krafter åt olika håll avgör rörelsen – *resultant*',
          '*friktion* och vad den beror på'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'kraft-och-friktion', titel: 'Kraft och friktion', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'En kraft är en knuff eller ett drag' },
        { typ: 'text', text: 'När vi säger att någon har mycket kraft menar vi ofta att personen är stark. I fysiken betyder ordet något annat. Där är en *kraft* en knuff eller ett drag. Om du knuffar på en dörr verkar du med en kraft på dörren. Om du drar i ett snöre verkar du med en kraft på snöret.' },
        { typ: 'text', text: 'En kraft behövs för två saker. Den behövs för att något som ligger stilla ska börja röra sig. Och den behövs för att något som redan rör sig ska ändra fart eller riktning. Det är det tröghetslagen säger: utan en kraft fortsätter allt som det gör.' },

        { typ: 'rubrik', text: 'En kraft ritas som en pil' },
        { typ: 'text', text: 'En kraft har alltid en storlek – hur stark den är. Den har också en riktning – åt vilket håll den drar eller knuffar. Därför ritar man en kraft som en pil. Pilen börjar på föremålet, där kraften tar tag. Pilen pekar åt det håll kraften verkar. Och ju starkare kraften är, desto längre ritar man pilen.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 10 }] },
        { typ: 'text', text: 'Titta på bilden. Någon drar ett block åt höger. Därför pekar pilen åt höger. Pricken visar var kraften tar tag i blocket.' },

        { typ: 'rubrik', text: 'Två lika stora krafter åt olika håll tar ut varandra' },
        { typ: 'text', text: 'Tänk dig att du drar i ett tungt block, men det rör sig inte. Hur kan det komma sig? Du drar ju! Svaret är att det finns en kraft till. Den verkar åt andra hållet – bakåt. Kraften bakåt är precis lika stor som ditt drag framåt.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 10 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 10 }] },
        { typ: 'text', text: 'När två lika stora krafter drar åt var sitt håll tar de ut varandra. Det är som en dragkamp där båda lagen drar lika hårt. Repet rör sig inte, fast alla drar. Precis så är det med blocket: krafterna tar ut varandra, och blocket ligger kvar.' },

        { typ: 'rubrik', text: 'Resultanten är alla krafter tillsammans' },
        { typ: 'text', text: 'För att veta hur ett föremål ska röra sig räcker det inte att titta på en kraft i taget. Man måste titta på alla krafter tillsammans. Alla krafter tillsammans kallas *resultanten|resultant*.' },
        { typ: 'text', text: 'När krafterna är lika stora och drar åt var sitt håll blir resultanten noll. Det betyder att det blir som om ingen kraft verkade alls. Då ändras inte rörelsen.' },

        { typ: 'rubrik', text: 'När kraften framåt är störst accelererar blocket' },
        { typ: 'text', text: 'Nu drar du hårdare i blocket. Ditt drag framåt blir större än kraften bakåt. Då tar krafterna inte längre ut varandra. Resultanten pekar framåt, åt det håll du drar.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 16 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 6 }] },
        { typ: 'text', text: 'Nu börjar blocket röra sig, och farten ökar hela tiden. Blocket accelererar. Kommer du ihåg prickarna i texten om rörelse, där avstånden blev längre och längre? Det är samma sak. Nu vet du vad som orsakar det: kraften framåt är större än kraften bakåt.' },

        { typ: 'rubrik', text: 'När krafterna är lika stora igen rör sig blocket likformigt' },
        { typ: 'text', text: 'Blocket glider nu framåt. Då drar du lite mindre, så att ditt drag blir precis lika stort som kraften bakåt. Krafterna tar ut varandra igen, och resultanten är noll. Stannar blocket då? Nej! Det fortsätter att glida i samma fart.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 6 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 6 }] },
        { typ: 'text', text: 'Det är tröghetslagen igen. När resultanten är noll fortsätter blocket som det gör. Och nu rör det sig ju redan. Därför fortsätter det i samma fart. Rörelsen är likformig.' },

        { typ: 'rubrik', text: 'Du behöver inte dra hårdare för att blocket ska fortsätta' },
        { typ: 'text', text: 'Många tror att man måste dra hårdare än kraften bakåt hela tiden, annars stannar blocket. Det är lätt att tro, men det stämmer inte. Att dra hårdare behövs bara när man vill att farten ska öka. Vill man bara att blocket ska fortsätta i samma fart räcker det att ditt drag är lika stort som kraften bakåt.' },

        { typ: 'rubrik', text: 'När kraften bakåt är störst retarderar blocket' },
        { typ: 'text', text: 'Till sist släpper du taget, eller drar mycket svagare. Nu blir kraften bakåt större än ditt drag. Resultanten pekar bakåt.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 2 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 6 }] },
        { typ: 'text', text: 'Blocket saktar in för varje sekund, tills det står still. Det retarderar. Precis som prickarna som kom närmare och närmare varandra i texten om rörelse.' },

        { typ: 'rubrik', text: 'Kraften bakåt heter friktion' },
        { typ: 'text', text: 'Nu ska vi titta på vad kraften bakåt egentligen är. Den heter *friktion*. Friktion uppstår när två ytor gnids mot varandra – här undersidan av blocket och bordet.' },
        { typ: 'text', text: 'Ett bord kan se helt slätt ut. Men om du kunde titta på det i ett mikroskop skulle du se små gropar och toppar. Blockets undersida ser likadan ut. När blocket dras över bordet hakar de små topparna i varandra. Det är det som bromsar, och det är det som är friktion.' },
        { typ: 'figur', namn: 'friktion',
          bildtext: 'Även släta ytor är ojämna när man tittar riktigt nära.' },

        { typ: 'rubrik', text: 'Friktionen finns bara när någon drar' },
        { typ: 'text', text: 'Friktionen finns inte där hela tiden. Om blocket bara ligger på bordet och ingen drar i det, så finns det ingen friktion alls. Friktionen uppstår först när du börjar dra.' },
        { typ: 'text', text: 'Och den blir precis lika stor som ditt drag. Drar du lite blir friktionen liten. Drar du lite mer blir friktionen lite större. Det är därför blocket ligger kvar fast du drar – friktionen växer och blir lika stor som ditt drag.' },

        { typ: 'rubrik', text: 'Friktionen har en gräns' },
        { typ: 'text', text: 'Men friktionen kan inte växa hur mycket som helst. Den har en gräns. När ditt drag blir större än den gränsen orkar friktionen inte hålla emot längre. Då börjar blocket glida.' },
        { typ: 'text', text: 'När blocket väl glider blir friktionen lite mindre. Därför är det tyngst i början. Du har säkert märkt det när du har skjutit på en tung byrå eller soffa. Det tar emot mycket när du ska få i gång den. Men när den väl glider går det lättare.' },

        { typ: 'rubrik', text: 'Friktionen beror på ytorna och på hur hårt de trycks ihop' },
        { typ: 'text', text: 'Hur stor friktionen kan bli beror på två saker. Den första är vilka ytor det är. Gummi mot asfalt ger mycket friktion – därför har bilar gummidäck. Metall mot is ger nästan ingen friktion – därför har skridskor metallskenor.' },
        { typ: 'text', text: 'Den andra saken är hur hårt ytorna trycks mot varandra. Ett tungt block trycks hårdare mot bordet än ett lätt block. Då blir friktionen större, och det tunga blocket blir svårare att dra.' },

        { typ: 'rubrik', text: 'Ibland vill vi ha mindre friktion' },
        { typ: 'text', text: 'Friktion bromsar. Den gör också att saker slits ut och blir varma. Därför vill man ofta minska friktionen. I hjul och maskiner sitter kullager. Kullager är små kulor som gör att delarna rullar i stället för att gnidas mot varandra. Olja och smörjfett gör ytorna glattare. Och skidvalla gör att skidorna glider lättare på snön.' },

        { typ: 'rubrik', text: 'Ibland behöver vi friktion' },
        { typ: 'text', text: 'Men utan friktion skulle vi inte ens kunna gå. Tänk på hur det är att gå på blank is. Foten glider iväg, eftersom det är så lite friktion. När du går på vanlig mark trycker du foten bakåt mot marken, och friktionen gör att foten fastnar i stället för att glida.' },
        { typ: 'text', text: 'Bilar behöver också friktion. Utan friktion skulle däcken bara snurra, och bilen skulle inte komma framåt. Bromsarna skulle inte heller kunna stoppa bilen. Därför sandar man isiga vägar och har dubbdäck på vintern. Då blir friktionen större.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En *kraft* är en knuff eller ett drag. Den ritas som en pil. Pilen visar hur stark kraften är och åt vilket håll den verkar.',
          '*Resultanten|resultant* är alla krafter tillsammans. Är den noll ändras inte rörelsen. Föremålet ligger still, eller fortsätter i samma fart.',
          'Är kraften framåt störst accelererar föremålet. Är kraften bakåt störst retarderar det.',
          '*Friktion* är kraften som bromsar när två ytor gnids mot varandra. Den växer med ditt drag, upp till en gräns.',
          'Friktion kan vara i vägen, men utan friktion kan vi varken gå eller bromsa.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    }
  ]
});
