/* PROVDATA för verktyg/bok-grind.js – inte elevinnehåll. Text B: en egen bok, bara på standardnivån (Extranivån
 * och de andra nivåerna är "kommer" för den här texten). Skriven i strömformatet (block, inga sidor): grinden prövar
 * en sidbrytning och regelkonflikten – ett stycke och en figur som inte ryms tillsammans på en sida – och
 * rörelsespåren (alla fyra rörelsetyperna, med och utan tider, 4–8 prickar), kraftparen (drag och knuff, med och
 * utan värde) och kraftpilar utan värden med en gemensam skala. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'tryck', titel: 'Tryck',
      block: [
        { typ: 'rubrik', text: 'Provrubrik i en egen bok' },
        { typ: 'text', id: 'fore-brytning', text: 'Provtext: den här texten är en egen bok, med en egen innehållsförteckning. Den är skriven som en ström av block, och motorn bryter sidorna.' },
        { typ: 'sidbrytning' },
        { typ: 'rubrik', id: 'efter-brytning', text: 'Provrubrik efter en sidbrytning' },
        { typ: 'text', text: 'Provtext: rubriken ovanför börjar en ny sida, eftersom en sidbrytning står före den.' },
        { typ: 'rubrik', text: 'Ett långt stycke och en figur' },
        { typ: 'text', id: 'langt-stycke', text: 'Provtext: det här stycket är långt med flit. Tillsammans med figuren efter det ryms det inte på en sida, så stycket stannar där det står och figuren börjar nästa sida. Figuren delas aldrig. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida. Provtext som fyller ut stycket, så att det blir ungefär två tredjedelar av en sida.' },
        { typ: 'figur', id: 'figur-efter', namn: 'flyter_sjunker', foremal: [
          { namn: 'Kork', densitet: 0.25 },
          { namn: 'Sten', densitet: 2.6 }
        ] },
        // Rörelsespåret: grinden mäter att avstånden följer rörelsetypen (lika / växande / krympande / ojämna)
        { typ: 'rubrik', text: 'Provrubrik: rörelsespår' },
        { typ: 'text', text: 'Provtext: likformig rörelse med tiderna under prickarna.' },
        { typ: 'figur', id: 'spar-likformig', namn: 'rorelsespar', rorelse: 'likformig', tider: true },
        { typ: 'text', text: 'Provtext: accelererande rörelse, åtta prickar.' },
        { typ: 'figur', id: 'spar-accelererande', namn: 'rorelsespar', rorelse: 'accelererande', prickar: 8 },
        { typ: 'text', text: 'Provtext: retarderad rörelse med tiderna – de två sista prickarna nästan ihop.' },
        { typ: 'figur', id: 'spar-retarderad', namn: 'rorelsespar', rorelse: 'retarderad', tider: true },
        { typ: 'text', text: 'Provtext: olikformig rörelse, fyra prickar.' },
        { typ: 'figur', id: 'spar-olikformig', namn: 'rorelsespar', rorelse: 'olikformig', prickar: 4, bildtext: 'Provbildtext under ett rörelsespår.' },
        // Tal och enhet: skrivet med vanliga mellanslag – motorn gör dem hårda, så att raden aldrig bryts där.
        // ("ca" gör stycket så långt att kantfallet uppstod i mobilläget: 40 %-regeln skilde stycket från hissen på sida
        // 8 och balansen fyllde sedan sida 7 – grinden prövar att de nu står tillsammans, order 8, 2026-11-07)
        { typ: 'text', id: 'tal-och-enhet', text: 'Provtext: resultanten blir 16 − 6 = 10 N, och järn smälter vid 1 538 °C. Farten är 5 m/s, eller ca 18 km/h.' },
        // Symboler och enheter i rubriker och tabellhuvuden: grinden prövar att g och N/kg står i vanlig stil med rätt
        // skiftläge (inte kapitäler, där g blir G)
        { typ: 'rubrik', text: 'Provrubrik: tyngdfaktorn g i N/kg' },
        { typ: 'underrubrik', text: 'Provunderrubrik: F = m · g' },
        { typ: 'tabell', rubriker: ['Prov', 'g (N/kg)', 'm (kg)'], rader: [['Jorden', '9,8', '1'], ['Månen', '1,6', '1']] },
        // Lutande plan (Galileos tankeexperiment) med två steg och motorns egen beskrivning
        { typ: 'text', text: 'Provtext: lutande plan i två steg.' },
        { typ: 'figur', id: 'lutande-plan-2', namn: 'lutande_plan', steg: 2, bildtext: 'Provbildtext under de lutande planen.' },
        // Stoppsträckan med ett decimaltal och en markering, och friktion i två paneler (grinden mäter båda)
        { typ: 'text', text: 'Provtext: stoppsträckan i två rader.' },
        { typ: 'figur', id: 'stoppstracka-prov', namn: 'stoppstracka', rader: [{ fart: 'Prov 1', reaktion: 6.5, broms: 3 }, { fart: 'Prov 2', reaktion: 12, broms: 10 }],
          markering: { varde: 15, text: 'provmärke' }, enhet: 'm' },
        { typ: 'text', text: 'Provtext: två ytor i förstoring.' },
        { typ: 'figur', id: 'friktion-paneler', namn: 'friktion', paneler: [{ rubrik: 'Prov grov', foremal: 'Låda', underlag: 'Golv', ytor: 'grov' }, { rubrik: 'Prov slät', foremal: 'Låda', underlag: 'Is', ytor: 'slat' }] },
        // Den fallande hissen och Newtons kanon med motorns egna beskrivningar
        { typ: 'text', text: 'Provtext: den fallande hissen.' },
        { typ: 'figur', id: 'fallande-hiss-prov', namn: 'fallande_hiss' },
        { typ: 'text', text: 'Provtext: Newtons kanon.' },
        { typ: 'figur', id: 'newtons-kanon-prov', namn: 'newtons_kanon', bildtext: 'Provbildtext under kanonen.' },
        // Jorden och månen med andra värden och motorns egen beskrivning (grinden mäter pilarnas förhållande)
        { typ: 'text', text: 'Provtext: jorden och månen.' },
        { typ: 'figur', id: 'jord-och-mane-prov', namn: 'jord_och_mane', massa: 50, tyngd: [490, 80], vag: [50, 8] },
        // Kraftparen: grinden mäter att pilarna är lika långa, motriktade och börjar i var sitt föremåls mitt
        { typ: 'rubrik', text: 'Provrubrik: kraftpar' },
        { typ: 'text', text: 'Provtext: ett kraftpar med snöre, med värdet.' },
        { typ: 'figur', id: 'par-drag', namn: 'kraftpar', satt: 'drag', foremal: [{ namn: 'Provföremål A' }, { namn: 'B' }],
          krafter: ['A dras mot B', 'B dras mot A'], storlek: 12.5, enhet: 'N' },
        { typ: 'text', text: 'Provtext: ett kraftpar där föremålen knuffar varandra, långa namn, utan värde.' },
        { typ: 'figur', id: 'par-knuff', namn: 'kraftpar', satt: 'knuff', foremal: [{ namn: 'Provföremål nr 1' }, { namn: 'Provföremål nr 2' }],
          krafter: ['Kraften på föremål 1', 'Kraften på föremål 2'], bildtext: 'Provbildtext under ett kraftpar.' },
        // Kraftpilar utan värden och med en gemensam skala: 5 av 20 ger en fjärdedel så lång pil som 20 skulle ge
        { typ: 'text', text: 'Provtext: kraftpilar utan värden, med skalan 20.' },
        { typ: 'figur', id: 'pilar-utan-varden', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Provlåda' }, underlag: true, varden: false, skala: 20, resultant: true,
          krafter: [{ namn: 'Framåt', riktning: 'hoger', storlek: 10 }, { namn: 'Bakåt', riktning: 'vanster', storlek: 5 }] },
        // Friktion: ytorna i förstoring, med pilar (som i texten) och utan pilar, grova ytor och andra namn
        { typ: 'text', text: 'Provtext: friktion i förstoring.' },
        { typ: 'figur', id: 'friktion-pilar', namn: 'friktion', bildtext: 'Provbildtext under friktionen.' },
        // (intervallet 80–90: grinden prövar att det inte bryts efter tankstrecket)
        { typ: 'text', id: 'intervall', text: 'Provtext: friktion utan pilar, grova ytor, 80–90 procent.' },
        { typ: 'figur', id: 'friktion-grov', namn: 'friktion', foremal: 'Låda', underlag: 'Hylla', pilar: false, ytor: 'grov' },
        // Bildpilar: ett utsnitt av fotot (avsnittssida III), två lika långa pilar, beskrivningen ur data
        { typ: 'text', text: 'Provtext: ett foto med kraftpilar, ett utsnitt.' },
        { typ: 'figur', id: 'bildpilar-utsnitt', namn: 'bildpilar', bild: '../../kraft_och_rorelse/rorelse_och_kraft/bilder/block-rep.jpg',
          bredd: 1672, hojd: 941, utsnitt: [600, 380, 900, 360],
          pilar: [{ namn: 'provpil 1', fran: [690, 503], till: [950, 503], etikett: [820, 460] },
                  { namn: 'provpil 2', fran: [1255, 525], till: [995, 525] }],
          lika: [[0, 1]], beskrivning: 'Provbeskrivning av fotot.', bildtext: 'Provbildtext under fotot.' },
        // Rymdfigurerna (kapitel I, order 9): andra data än i innehållet – grinden mäter skalan, lägena, pilarna, faserna och axlarna
        { typ: 'text', text: 'Provtext: himlakroppar i skala, tre provkroppar i två grupper.' },
        { typ: 'figur', id: 'himlakroppar-prov', namn: 'himlakroppar_i_skala', kroppar: [{ namn: 'Prov A', diameter: 3000 }, { namn: 'Prov B', diameter: 1000, grupp: 1 }, { namn: 'Prov C', diameter: 2000, grupp: 1 }], storst: 60 },
        // Jupiterfiguren (order 10, djupdykningen Jupiters månar och Saturnus ringar): en stor kropp och fyra små, en grupp
        // Nästa steg (order 11): två diagram bredvid varandra (en kurva, och en graf med tal, ytor och Δ-linjer) och
        // tre pilar på rutat papper (en åt vänster, inte alla vinkelräta) med resultant och skala – andra data än i böckerna
        { typ: 'text', text: 'Provtext: två provdiagram bredvid varandra.' },
        { typ: 'figur', id: 'diagram-prov', namn: 'diagram_graf', diagram: [
          { rubrik: 'Prov A', x: { storhet: 'tid', enhet: 's', max: 3, steg: 1 }, y: { storhet: 'läge', enhet: 'm', max: 9, steg: 3 },
            grafer: [{ punkter: [[0, 9], [1, 4], [2, 1], [3, 0]], kurva: true }] },
          { rubrik: 'Prov B', x: { storhet: 'tid', enhet: 's', max: 6, steg: 1, tal: 2 }, y: { storhet: 'v', enhet: 'm/s', max: 6, steg: 1, tal: 2 },
            grafer: [{ punkter: [[0, 2], [2, 6], [6, 6]] }], ytor: [{ punkter: [[0, 0], [0, 2], [2, 6], [2, 0]], ton: 1 }, { punkter: [[2, 0], [2, 6], [6, 6], [6, 0]], ton: 2 }],
            delta: [{ fran: [0, 2], till: [2, 6], dx: 'Δt', dy: 'Δv' }] }
        ], bildtext: 'Provbildtext under diagrammen.' },
        { typ: 'text', text: 'Provtext: tre provpilar på rutat papper.' },
        { typ: 'figur', id: 'vektor-prov', namn: 'vektor_rutnat', pilar: [{ dx: 3, dy: 0, namn: 'Prov 1' }, { dx: 0, dy: 2, namn: 'Prov 2' }, { dx: -1, dy: 1, namn: 'Prov 3' }],
          resultant: { namn: 'Provresultant' }, skala: '1 ruta = 5 N', bildtext: 'Provbildtext under pilarna.' },
        // Resulterande kraft (order 12): varje läge av resultant_rutor och kraftpilarnas kedja och lampa, med andra data
        { typ: 'text', text: 'Provtext: tre provsteg på rutat papper.' },
        { typ: 'figur', id: 'rr-steg-prov', namn: 'resultant_rutor', lage: 'steg', krafter: [{ dx: 3, dy: 1, namn: 'Prov 1' }, { dx: -1, dy: 3, namn: 'Prov 2' }],
          resultant: { namn: 'Provres.' }, rubriker: ['Provsteg ett', 'Provsteg två', 'Provsteg tre'], skala: '1 ruta = 5 N' },
        { typ: 'text', text: 'Provtext: två provkrafter vid två vinklar.' },
        { typ: 'figur', id: 'rr-vinklar-prov', namn: 'resultant_rutor', lage: 'vinklar', kraft: 50, vinklar: [30, 120] },
        { typ: 'text', text: 'Provtext: en provkraft och dess komposanter.' },
        { typ: 'figur', id: 'rr-komp-prov', namn: 'resultant_rutor', lage: 'komposanter', kraft: { dx: -3, dy: 2, namn: 'Prov' }, komposanter: ['Prov x', 'Prov y'] },
        { typ: 'text', text: 'Provtext: tre provkrafter efter varandra.' },
        { typ: 'figur', id: 'kedja-prov', namn: 'kraftpilar', kedja: true, rod: true, resultant: true,
          krafter: [{ riktning: 'hoger', storlek: 40 }, { riktning: 'hoger', storlek: 20 }, { riktning: 'vanster', storlek: 30 }] },
        { typ: 'text', text: 'Provtext: en provlampa i två snören.' },
        { typ: 'figur', id: 'lampa-prov', namn: 'kraftpilar', foremal: { form: 'lampa' }, snoren: true, komposanter: true, varden: false,
          krafter: [{ namn: 'prov', riktning: 145, storlek: 8 / (2 * Math.sin(35 * Math.PI / 180)) }, { namn: 'prov', riktning: 35, storlek: 8 / (2 * Math.sin(35 * Math.PI / 180)) }, { namn: 'provtyngd', riktning: 'ner', storlek: 8 }] },
        // Kaströrelse och cirkelrörelse (order 16): varje läge av kastbana och cirkelrorelse, med andra data än i IV C
        { typ: 'text', text: 'Provtext: ett provhus på 45 m, en släppt och en kastad provboll, varje sekund.' },
        { typ: 'figur', id: 'kast-hoghus-prov', namn: 'kastbana', lage: 'hoghus', hojd: 45, fart: 15, steg: 1 },
        { typ: 'text', text: 'Provtext: ett provkast i fyra sekunder.' },
        { typ: 'figur', id: 'kast-komp-prov', namn: 'kastbana', lage: 'komposanter', fart: 15, sekunder: 4 },
        { typ: 'text', text: 'Provtext: tre provvinklar.' },
        { typ: 'figur', id: 'kast-vinklar-prov', namn: 'kastbana', lage: 'vinklar', fart: 30, vinklar: [20, 45, 70] },
        { typ: 'text', text: 'Provtext: en provboll i ett provsnöre.' },
        { typ: 'figur', id: 'cirkel-snore-prov', namn: 'cirkelrorelse', lage: 'snore', radie: 90, vinkel: 120, slapp: 300 },
        { typ: 'text', text: 'Provtext: en provbil i en provkurva.' },
        { typ: 'figur', id: 'cirkel-bil-prov', namn: 'cirkelrorelse', lage: 'bil', radie: 130, vinkel: 75 },
        // Tyngdpunkt, balans och kroppen (order 17): varje nytt läge av stabilitet, kastbana hopp och krock, med andra data än i IV D
        { typ: 'text', text: 'Provtext: en smalare provlåda i tre provlägen.' },
        { typ: 'figur', id: 'stab-lada-prov', namn: 'stabilitet', lage: 'lada', bredd: 1, hojd: 2, vinklar: [10, 20, 35] },
        { typ: 'text', text: 'Provtext: två provfordon lutade 20°.' },
        { typ: 'figur', id: 'stab-fordon-prov', namn: 'stabilitet', lage: 'fordon', vinkel: 20,
          fordon: [{ namn: 'provbil', sparvidd: 1.6, tpHojd: 0.6, hojd: 1.5, form: 'racer' }, { namn: 'provbuss', sparvidd: 2.0, tpHojd: 2.0, hojd: 3.2, form: 'last' }] },
        { typ: 'text', text: 'Provtext: ett provhopp.' },
        { typ: 'figur', id: 'kast-hopp-prov', namn: 'kastbana', lage: 'hopp', fart: 5, vinkel: 30 },
        { typ: 'text', text: 'Provtext: en provhoppare över en lägre provribba.' },
        { typ: 'figur', id: 'stab-hojdhopp-prov', namn: 'stabilitet', lage: 'hojdhopp', ribba: 1.6 },
        { typ: 'text', text: 'Provtext: två provbilar mot en provvägg.' },
        { typ: 'figur', id: 'krock-prov', namn: 'krock', stopp: [0.1, 0.7], langd: 4.8, front: 1.2 },

        { typ: 'text', text: 'Provtext: Jupiter och de fyra stora månarna i samma skala.' },
        { typ: 'figur', id: 'jupiter-prov', namn: 'himlakroppar_i_skala', kroppar: [{ namn: 'Jupiter', diameter: 139800 }, { namn: 'Io', diameter: 3640 }, { namn: 'Europa', diameter: 3120 }, { namn: 'Ganymedes', diameter: 5270 }, { namn: 'Kallisto', diameter: 4820 }], bildtext: 'Provbildtext under Jupiter och månarna.' },
        { typ: 'text', text: 'Provtext: en avståndslinje i AE.' },
        { typ: 'figur', id: 'avstand-prov', namn: 'avstandslinje', kroppar: [{ namn: 'Prov 1', ae: 0.5 }, { namn: 'Prov 2', ae: 0.8 }, { namn: 'Prov 3', ae: 4 }], enhet: 'AE' },
        { typ: 'text', text: 'Provtext: tre personer på ett jordklot.' },
        { typ: 'figur', id: 'jordklot-prov', namn: 'jordklot_tyngd', personer: [{ vinkel: 90, namn: 'Prov N' }, { vinkel: 210 }, { vinkel: -30, namn: 'Prov S' }] },
        { typ: 'text', text: 'Provtext: månens faser.' },
        { typ: 'figur', id: 'manfaser-prov', namn: 'manfaser', bildtext: 'Provbildtext under månens faser.' },
        { typ: 'text', text: 'Provtext: årstiderna med axeln lutad 30 grader.' },
        { typ: 'figur', id: 'arstider-prov', namn: 'arstider', lutning: 30 },
        { typ: 'lank', till: ['ova'] }
      ]
    }
  ]
});
