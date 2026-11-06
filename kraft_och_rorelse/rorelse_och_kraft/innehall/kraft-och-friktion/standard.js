/* Avsnittssida III, text B: Kraft och friktion – standardnivån. En egen bok (en bok per text, delkapitel.js: texter).
 * Joachims granskade källa (III-B-C-Kraft-friktion-motkraft-alla-nivaer-v2.md, 2026-11-03), införd ordagrant i
 * strömformatet: ### = rubrik, ett stycke = ett textblock, [FIGUR n] = figuren där markeringen står (data ur
 * arbetsordern). Motorn bryter sidorna. "Det här lär du dig:" står som liten rubrik utan kolon, som i text A.
 * Kraftpilarna utan värden (newton införs i text D) och med samma skala (16), så att pilarna går att jämföra mellan
 * figurerna. "Kraft bakåt" med flit: texten säger först efter figur 5 att den heter friktion.
 * Figur 1 är fotot med dragkraften (bildpilar, BILD A i arbetsordern 2026-11-04); de andra figurerna står kvar.
 * Avsnittens id (inledning, kraft-och-kraftpilar, krafterna-avgor-rorelsen, friktion, sammanfattning) är desamma på alla nivåer;
 * huvudrubrikerna (avsnitten) står i innehållsförteckningen, ###-rubrikerna bara i texten (Joachims beslut 2026-11-04).
 * Sist i avsnittet friktion (2026-11-05): "Friktion är ibland ett hinder och ibland en nödvändighet" utvecklad till sex
 * rubriker, ordagrant ur III-B-Standard-friktion-hinder-nodvandighet-v2.md. Den gamla versionen ligger i
 * Arkiv/2026-11-05-fore-textandringar/kraft-och-friktion/. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och friktion' },
        { typ: 'text', text: 'I texten om rörelse såg du att en rörelse bara ändras när en kraft påverkar föremålet. Nu tittar vi på själva krafterna: vad en kraft är, vad som händer när två krafter drar åt olika håll, och varför saker bromsas.' },
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
      id: 'kraft-och-kraftpilar', titel: 'Kraft och kraftpilar',
      block: [
        { typ: 'rubrik', text: 'En kraft är en knuff eller ett drag' },
        { typ: 'text', text: 'I vardagen betyder kraft ofta styrka – ”han har mycket kraft”. I fysiken betyder det något mer bestämt: en *kraft* är en knuff eller ett drag på ett föremål. En kraft behövs för att ett föremål som ligger stilla ska börja röra sig, och en kraft behövs för att ett föremål som rör sig ska ändra fart eller riktning. Det är precis vad tröghetslagen säger: utan kraft fortsätter allt som det gör.' },

        { typ: 'rubrik', text: 'En kraft ritas som en pil' },
        { typ: 'text', text: 'En kraft har alltid en storlek och en riktning. Därför ritar man den som en pil. Pilen börjar där kraften angriper föremålet, den pekar åt det håll kraften verkar, och ju större kraften är, desto längre ritas pilen. När du drar ett block åt höger ritas kraften som en pil åt höger från blocket.' },
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [300, 552], till: [580, 552], etikett: [750, 600] }],
          beskrivning: 'En person drar i ett rep som sitter fast i ett träblock på ett bord. En pil från blocket pekar framåt i repets riktning: dragkraften.' },

      ]
    },
    {
      id: 'krafterna-avgor-rorelsen', titel: 'Krafterna avgör rörelsen',
      block: [
        { typ: 'rubrik', text: 'Lika stora krafter åt olika håll tar ut varandra' },
        { typ: 'text', text: 'Tänk dig att du drar i blocket, men det rör sig inte. Då måste det finnas en kraft till, som verkar åt motsatt håll – bakåt. Kraften framåt och kraften bakåt är lika stora, och därför tar de ut varandra. Tillsammans blir det som om ingen kraft verkade alls, och blocket ligger kvar.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 10 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 10 }] },
        { typ: 'text', text: 'Det som räknas är alltså inte varje kraft för sig, utan alla krafter tillsammans. Krafterna tillsammans kallas *resultanten|resultant*. Är krafterna lika stora och motriktade är resultanten noll.' },

        { typ: 'rubrik', text: 'Är kraften framåt större accelererar blocket' },
        { typ: 'text', text: 'Om du drar hårdare blir kraften framåt större än kraften bakåt. Då är resultanten inte längre noll – den pekar framåt – och blocket börjar röra sig. Farten ökar: blocket accelererar. Det är en accelererande rörelse, precis som i texten om rörelse, och nu ser du vad som orsakar den.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 16 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 6 }] },

        { typ: 'rubrik', text: 'Är krafterna lika stora igen rör sig blocket likformigt' },
        { typ: 'text', text: 'När blocket väl har kommit i gång kan du minska draget så att kraften framåt blir lika stor som kraften bakåt. Då är resultanten noll igen – men blocket står inte still. Det fortsätter i samma fart. Det är tröghetslagen: med en resultant som är noll fortsätter blocket som det gör, och det rör sig redan. Rörelsen är likformig.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 6 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 6 }] },
        { typ: 'text', text: 'Här ligger en vanlig missuppfattning. Många tror att du måste dra hårdare än kraften bakåt för att blocket ska fortsätta röra sig. Men det behövs bara för att öka farten. För att hålla samma fart räcker det att krafterna är lika stora.' },

        { typ: 'rubrik', text: 'Är kraften bakåt större retarderar blocket' },
        { typ: 'text', text: 'Om du drar mindre, eller släpper taget, blir kraften bakåt större än kraften framåt. Resultanten pekar då bakåt, och blocket saktar in tills det stannar. Det är en retarderad rörelse.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, varden: false, skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 2 }, { namn: 'Kraft bakåt', riktning: 'vanster', storlek: 6 }] },

      ]
    },
    {
      id: 'friktion', titel: 'Friktion',
      block: [
        { typ: 'rubrik', text: 'Kraften bakåt är friktion' },
        { typ: 'text', text: 'Kraften som verkar bakåt på blocket kallas *friktion*. Friktion uppstår när två ytor gnids mot varandra, här blockets undersida och bordet. Även ytor som ser släta ut är ojämna om man tittar riktigt nära, och de små ojämnheterna hakar i varandra och bromsar.' },
        { typ: 'figur', namn: 'friktion',
          bildtext: 'Även släta ytor är ojämna när man tittar riktigt nära.' },

        { typ: 'rubrik', text: 'Friktionen växer med draget – upp till en gräns' },
        { typ: 'text', text: 'Friktionen finns inte där hela tiden. Ligger blocket bara stilla och ingen drar i det, finns ingen friktion alls. När du börjar dra uppstår friktionen, och den blir precis lika stor som ditt drag. Drar du lite, blir friktionen liten. Drar du mer, blir friktionen större. Därför ligger blocket kvar. Men friktionen kan inte växa hur mycket som helst. När ditt drag blir större än den största friktion som ytorna klarar, börjar blocket glida.' },

        { typ: 'rubrik', text: 'Det är lättare att hålla i gång ett block än att få det att börja glida' },
        { typ: 'text', text: 'När blocket väl glider blir friktionen lite mindre än den var precis innan blocket släppte. Därför krävs det mest kraft för att få något att börja glida. Du har säkert märkt det när du skjuter en tung möbel: det tar emot mest i början, och sedan går det lättare.' },

        { typ: 'rubrik', text: 'Friktionen beror på ytorna och på hur hårt de trycks mot varandra' },
        { typ: 'text', text: 'Hur stor friktionen kan bli beror på två saker. Den första är ytorna. Gummi mot asfalt ger stor friktion, medan stål mot is ger liten. Den andra är hur hårt ytorna trycks mot varandra. Ett tungt block trycks hårdare mot bordet än ett lätt, och därför är det svårare att dra.' },

        { typ: 'rubrik', text: 'Friktion är ibland ett hinder och ibland en nödvändighet' },
        { typ: 'text', text: 'Friktion bromsar och sliter, och därför försöker man ofta minska den. Samtidigt skulle nästan ingenting i vardagen fungera utan den. Om friktionen är bra eller dålig beror alltså på vad man vill göra. Ibland vill man att saker ska glida så lätt som möjligt, och ibland vill man att de ska sitta fast.' },

        { typ: 'rubrik', text: 'Friktion gör ytor varma och nöter ner dem' },
        { typ: 'text', text: 'När två ytor gnids mot varandra blir de varma. Du kan prova själv: gnid händerna hårt mot varandra en stund, så känner du värmen. Samma sak händer i en cykels bromsar och i en bils motor. Rörelsen bromsas, och en del av den blir värme i stället. Det är en anledning till att det behövs mer kraft för att hålla i gång en maskin med mycket friktion.' },
        { typ: 'text', text: 'Friktionen nöter också ner ytorna. De små ojämnheterna som hakar i varandra slits loss lite i taget. Därför blir skosulor tunnare, bildäck slits ner och bromsbelägg måste bytas. Även en sten i en flod blir rund och slät efter lång tid, eftersom sand och vatten gnider mot den år efter år.' },

        { typ: 'rubrik', text: 'Kullager, olja och valla minskar friktionen' },
        { typ: 'text', text: 'Ett sätt att minska friktionen är att låta delarna rulla i stället för att glida. I hjul och maskiner sitter kullager: små stålkulor mellan delarna, så att de rullar mot varandra i stället för att gnidas. Att rulla ger mycket mindre friktion än att glida. Därför är det lättare att dra en väska med hjul än att släpa den längs marken.' },
        { typ: 'text', text: 'Ett annat sätt är att lägga något mellan ytorna. Olja och smörjfett lägger sig som ett tunt lager mellan delarna i en motor, så att ytorna inte skaver direkt mot varandra. Skidvalla gör att skidorna glider bättre på snön. Utan smörjning skulle en bilmotor bli så varm att den gick sönder efter kort tid.' },

        { typ: 'rubrik', text: 'Utan friktion skulle vi inte kunna gå eller stanna' },
        { typ: 'text', text: 'Men utan friktion skulle vi inte kunna gå. När du tar ett steg trycker din fot bakåt mot marken, och det är friktionen som gör att foten inte slinter. Du märker hur viktig den är när du går på blank is. Foten glider iväg bakåt, och du får ta små försiktiga steg.' },
        { typ: 'text', text: 'Bilar behöver friktion på två ställen. Däcken måste ha grepp mot vägen, annars skulle de bara snurra utan att bilen kom framåt. Och när föraren bromsar trycks bromsbeläggen mot en skiva som sitter på hjulet, så att hjulet bromsas. Men det hjälper bara om däcken i sin tur har grepp mot vägen. Därför sandar man isiga vägar och har dubbdäck på vintern: för att öka friktionen.' },

        { typ: 'rubrik', text: 'Friktion håller saker på plats' },
        { typ: 'text', text: 'Friktion behövs också när ingenting ska röra sig. En spik sitter kvar i en bräda därför att träet trycker hårt mot spiken och friktionen håller emot. En knut går inte upp av sig själv, eftersom snöret trycks mot sig självt. Du kan hålla en penna och skriva med den därför att friktionen mellan fingrarna och pennan hindrar den från att glida ur handen.' },
        { typ: 'text', text: 'Många tror att det vore bäst om friktionen försvann helt, men tänk dig hur världen då skulle se ut. Allt som stod på ett lutande underlag skulle glida ner. Knutar skulle gå upp, skruvar lossna och du skulle inte kunna hålla i någonting. Och den som väl kommit i rörelse skulle inte kunna stanna – precis som tröghetslagen säger. Friktion är alltså inte något dåligt i sig. Ibland vill vi ha så lite som möjligt och ibland så mycket som möjligt.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En *kraft* är en knuff eller ett drag. Den ritas som en pil med storlek och riktning.',
          '*Resultanten|resultant* är alla krafter tillsammans. Är den noll ändras inte rörelsen – föremålet ligger still eller rör sig likformigt.',
          'Pekar resultanten framåt accelererar föremålet. Pekar den bakåt retarderar det.',
          '*Friktion* bromsar när ytor gnids mot varandra. Den växer med draget upp till en gräns, och den beror på ytorna och hur hårt de trycks mot varandra.',
          'Friktion kan vara ett hinder, men utan den kan vi varken gå eller bromsa.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
