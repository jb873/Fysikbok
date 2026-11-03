/* Materia – repetition, standardnivån. UTKAST 2026-10-29: texten är skriven ur innehållspunkterna i arbetsordern
 * och väntar på Joachims granskning.
 *
 * Så skrivs innehållet (mer i Fysik/README.md):
 *   - ett avsnitt = {id, titel, sidor: [...]}; numrerad: false ger ett avsnitt utan nummer (Inledning, Sammanfattning)
 *   - en sida = {titel, block: [...]}; sidan ska få plats på en skärm – kontrollera med ?kontroll i adressen
 *   - *ord* = betonat begrepp (*atomer|atom* när det står böjt), [[m|V]] = bråk, <sub>2</sub> och <sup>3</sup> för index
 *   - {typ: 'lank', till: ['ova', 'sjalvskattning']} sist i ett avsnitt länkar till plattformens hjälpmedel
 * Avsnittens id används när eleven byter nivå (samma avsnitt på den andra nivån), så de ska vara samma på alla nivåer. */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      sidor: [
        {
          titel: 'Repetition: Materia',
          block: [
            { typ: 'text', text: 'Det här kapitlet är en repetition. Du har mött innehållet förut – läs i lugn takt och se efter vad du känner igen.' },
            { typ: 'rubrik', text: 'Det här repeterar du' },
            { typ: 'punkter', punkter: [
              '*Materia* – allt som har massa och tar plats',
              '*Massa och volym* – hur mycket och hur stort',
              '*Densitet* – varför något flyter eller sjunker',
              '*Värme och temperatur* – vad som är skillnaden'
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
      id: 'materia', titel: 'Materia',
      sidor: [
        {
          titel: 'Vad är materia?',
          block: [
            { typ: 'ruta', stil: 'definition', text: '*Materia* är allt som har massa och tar plats.' },
            { typ: 'punkter', punkter: [
              'Luften, vattnet, en sten och din egen kropp är materia.',
              'Ljus, ljud och värme är inte materia. De är energi.'
            ] },
            { typ: 'rubrik', text: 'Atomer och molekyler' },
            { typ: 'punkter', punkter: [
              'All materia är uppbyggd av mycket små partiklar som kallas *atomer|atom*.',
              'Det finns 118 kända atomslag, till exempel väte, syre, kol och järn.',
              'När atomer sitter ihop bildar de *molekyler|molekyl*.',
              'En vattenmolekyl, H<sub>2</sub>O, består av två väteatomer och en syreatom.'
            ] }
          ]
        },
        {
          titel: 'Fast, flytande och gas',
          block: [
            { typ: 'text', text: 'Materia finns i tre *aggregationsformer|aggregationsform*. Samma ämne kan byta form när det värms eller kyls.' },
            { typ: 'figur', namn: 'aggregationsformer', exempel: ['is', 'vatten', 'vattenånga'], overgangar: true,
              beskrivning: 'Vatten som is, flytande vatten och vattenånga. Pilar: is smälter till vatten och vatten stelnar till is; vatten förångas till vattenånga och vattenånga kondenserar till vatten.' },
            { typ: 'punkter', punkter: [
              '*Fast*: partiklarna sitter tätt och i ordning. Ämnet har egen form.',
              '*Flytande*: partiklarna sitter tätt men glider förbi varandra. Ämnet tar kärlets form.',
              '*Gas*: partiklarna är långt isär och rör sig fritt. Gasen fyller hela kärlet.'
            ] },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    },
    {
      id: 'massa-och-volym', titel: 'Massa och volym',
      sidor: [
        {
          titel: 'Hur mycket och hur stort',
          block: [
            { typ: 'jamforelse', kolumner: [
              { rubrik: 'Massa', punkter: [
                'Hur mycket materia något innehåller.',
                'Mäts med en våg.',
                'Enhet: *kilogram* (kg).'
              ] },
              { rubrik: 'Volym', punkter: [
                'Hur stor plats något tar.',
                'Mäts till exempel med ett mätglas.',
                'Enhet: *kubikmeter* (m³) eller *liter* (l).'
              ] }
            ] },
            { typ: 'ruta', text: 'Massa och volym är två olika saker. En uppblåst ballong har stor volym men liten massa. En blykula har liten volym men stor massa.' }
          ]
        },
        {
          titel: 'Enheter att känna igen',
          block: [
            { typ: 'tabell', rubriker: ['Massa', ''], rader: [
              ['1 kg', '= 1 000 g'],
              ['1 ton', '= 1 000 kg']
            ] },
            { typ: 'tabell', rubriker: ['Volym', ''], rader: [
              ['1 m³', '= 1 000 l'],
              ['1 l', '= 10 dl = 1 000 ml'],
              ['1 l', '= 1 dm³'],
              ['1 ml', '= 1 cm³']
            ] },
            { typ: 'text', text: '*Kilo* betyder tusen och *milli* betyder en tusendel.' },
            { typ: 'ruta', text: 'Massa och volym är grunden för *densitet*. När du vet båda kan du räkna ut den – det är nästa avsnitt.' },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    },
    {
      id: 'densitet', titel: 'Densitet',
      sidor: [
        {
          titel: 'Vad är densitet?',
          block: [
            { typ: 'text', text: '*Densitet* talar om hur mycket massa det finns i en viss volym av ett ämne.' },
            { typ: 'formel', uttryck: 'ρ = [[m|V]]', forklaring: [
              ['ρ', 'densitet (uttalas ”rå”)'],
              ['m', 'massa'],
              ['V', 'volym']
            ] },
            { typ: 'text', text: 'Enhet: g/cm³ eller kg/m³. Vatten har densiteten 1,0 g/cm³, alltså 1 000 kg/m³.' }
          ]
        },
        {
          titel: 'Räkna ut densiteten',
          block: [
            { typ: 'exempel', rader: [
              'En bit aluminium har massan 54 g och volymen 20 cm³.',
              'ρ = [[m|V]] = [[54 g|20 cm³]] = 2,7 g/cm³'
            ] },
            { typ: 'punkter', punkter: [
              'Densiteten hör till ämnet. En liten och en stor bit aluminium har samma densitet.',
              'Massa och volym ändras med storleken – men kvoten mellan dem är densamma.'
            ] }
          ]
        },
        {
          titel: 'Flyter eller sjunker?',
          block: [
            { typ: 'figur', namn: 'flyter_sjunker',
              vatska: { namn: 'Vatten', densitet: 1.0 },
              foremal: [
                { namn: 'Trä', densitet: 0.5, ca: true, stil: 'tra' },
                { namn: 'Is', densitet: 0.92, stil: 'is' },
                { namn: 'Järn', densitet: 7.9, stil: 'jarn' }
              ],
              beskrivning: 'Ett kar med vatten, 1,0 g/cm³. En träbit, ca 0,5 g/cm³, flyter halvt under ytan. En isbit, 0,92 g/cm³, flyter nästan helt under ytan. En järnbit, 7,9 g/cm³, ligger på botten.',
              bildtext: 'Ju närmare vattnets densitet, desto djupare ligger det som flyter.' },
            { typ: 'ruta', punkter: [
              'Lägre densitet än vätskan: föremålet *flyter*.',
              'Högre densitet än vätskan: föremålet *sjunker*.'
            ] },
            { typ: 'text', text: 'Samma sak gäller i luft. En heliumballong stiger eftersom helium har lägre densitet än luften.' },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    },
    {
      id: 'varme-och-temperatur', titel: 'Värme och temperatur',
      sidor: [
        {
          titel: 'Två olika saker',
          block: [
            { typ: 'text', text: 'Temperatur och värme låter som samma sak, men det är det inte.' },
            { typ: 'jamforelse', kolumner: [
              { rubrik: 'Temperatur', punkter: [
                'Hur varmt eller kallt något är.',
                'Mäts med en termometer.',
                'Enhet: *grader Celsius* (°C).'
              ] },
              { rubrik: 'Värme', punkter: [
                'Energi som flödar från något varmt till något kallt.',
                'Enhet: *joule* (J), som all energi.'
              ] }
            ] },
            { typ: 'ruta', text: 'Kort sagt: *temperatur* är hur varmt något är. *Värme* är energi som flödar.' }
          ]
        },
        {
          titel: 'Från varmt till kallt',
          block: [
            { typ: 'figur', namn: 'varmeflode', foremal: [{ namn: 'varm', temp: 80 }, { namn: 'kall', temp: 20 }],
              beskrivning: 'Först: ett varmt föremål på 80 °C mot ett kallt på 20 °C, och en pil som visar att värme flödar från det varma till det kalla. Sedan: båda är lika varma och inget mer värme flödar.' },
            { typ: 'punkter', punkter: [
              'Värme flödar alltid från det varmare till det kallare.',
              'Flödet fortsätter tills båda har samma temperatur.',
              'Ett varmt te svalnar för att värme flödar ut till den kallare luften.'
            ] },
            { typ: 'ruta', text: 'Kyla flödar inte. När en isbit känns kall i handen är det värme som flödar från handen till isen.' }
          ]
        },
        {
          titel: 'Värmeutvidgning',
          block: [
            { typ: 'text', text: 'De flesta ämnen *utvidgas* – tar större plats – när de värms upp. När de kyls ner drar de ihop sig.' },
            { typ: 'punkter', punkter: [
              'Massan är densamma, men volymen blir större.',
              'Vätskan i en termometer utvidgas och stiger när det blir varmare.',
              'Järnvägsräls och broar har små glipor så att de inte bucklar sig när de utvidgas en varm sommardag.'
            ] },
            { typ: 'ruta', rubrik: 'Koppling till densitet', text: 'När volymen ökar men massan är densamma blir densiteten lägre. Därför stiger varm luft uppåt.' }
          ]
        },
        {
          titel: 'Smälta och koka',
          block: [
            { typ: 'text', text: 'Ett ämne byter aggregationsform vid bestämda temperaturer.' },
            { typ: 'punkter', punkter: [
              '*Smältpunkt*: där ett fast ämne smälter – och där vätskan stelnar igen.',
              '*Kokpunkt*: där en vätska kokar och blir gas.'
            ] },
            { typ: 'tabell', rubriker: ['Ämne', 'Smältpunkt', 'Kokpunkt'], rader: [
              ['Vatten', '0 °C', '100 °C'],
              ['Järn', '1 538 °C', '2 862 °C']
            ], fotnot: 'Kokpunkterna gäller vid normalt lufttryck.' },
            { typ: 'punkter', punkter: [
              'Medan is smälter eller vatten kokar står temperaturen still. Värmen går åt till att byta form.',
              'Vatten kan också *avdunsta* – bli gas – långt under kokpunkten, till exempel när tvätt torkar.'
            ] },
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
              '*Materia* är allt som har massa och tar plats. Den är uppbyggd av atomer och finns som fast, flytande och gas.',
              '*Massa* är hur mycket materia något innehåller (kg). *Volym* är hur stor plats det tar (m³ eller liter).',
              '*Densitet*: ρ = [[m|V]]. Lägre densitet än vätskan – flyter. Högre – sjunker.',
              '*Temperatur* är hur varmt något är (°C). *Värme* är energi som flödar från varmt till kallt.',
              'När ämnen värms upp utvidgas de, och vid smältpunkten och kokpunkten byter de form.'
            ] },
            { typ: 'lank', till: ['ova', 'sjalvskattning'] }
          ]
        }
      ]
    }
  ]
});
