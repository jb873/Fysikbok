/* Avsnittssida II. Ljud omkring oss, text C: Eko, ultraljud och dopplereffekten – nivån enkel (📗).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-C-Eko-ultraljud-och-doppler-alla-nivaer-v2.md (# 📗 ENKEL), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iic.js).
 */
Bok.niva('enkel', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljud som studsar och ljud som rör sig' },
        { typ: 'text', text: 'Ljud går inte bara rakt fram. Det kan studsa mot berg och väggar och komma tillbaka. Fiskare, läkare och fladdermöss använder det för att "se" saker som ögat inte når.' },
        { typ: 'text', text: 'Ljudet kan också ändra sig när det som låter rör sig. I den här texten får du veta hur eko fungerar och hur ultraljud används. Du får också veta varför sirenen på en ambulans låter annorlunda när den kör förbi.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *eko* och *efterklang* är, och hur man dämpar dem',
          'hur ett *ekolod* mäter hur djupt vattnet är',
          'hur djur, läkare och andra använder ultraljud',
          'vad *dopplereffekten|dopplereffekt* är',
          'vad som händer när något åker fortare än ljudet'
        ] },
        { typ: 'ruta', rubrik: 'Så bläddrar du', punkter: [
          'Pilarna bredvid boken, ← och → på tangentbordet, eller svep.',
          'Klicka i innehållet för att gå till en sida.',
          'Stäng eller Esc tar dig tillbaka till delkapitlet. Boken minns var du var.'
        ] }
      ]
    },
    {
      id: 'eko', titel: 'Eko är ljud som studsar tillbaka',
      block: [
        { typ: 'rubrik', text: 'Ljudet studsar mot hårda väggar' },
        { typ: 'text', text: 'När ljudet träffar en hård och slät yta, som en bergvägg eller en husvägg, studsar det mesta tillbaka. Man säger att ljudet *reflekteras|reflektera*.' },
        { typ: 'text', text: 'Har du ropat mot en bergvägg? Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Du ropar. Ljudvågen går iväg mot berget.',
          'Ljudvågen träffar bergväggen och studsar tillbaka.',
          'Ljudet färdas tillbaka mot dig.',
          'Du hör ditt rop en gång till. Det är ett *eko*.'
        ] },
        // [BILD C1: eko mot en bergvägg i numrerade steg: 1 en person ropar – ljudvågen går mot berget · 2 ljudvågen träffar bergväggen och reflekteras · 3 ekot färdas tillbaka · 4 personen hör ekot. Avståndet till berget utmärkt, och att ljudet färdas dubbla avståndet fram och tillbaka]
        { id: 'bild-c1', typ: 'figur', namn: 'ljud', lage: 'eko-berg', bildtext: 'Ekot har färdats fram och tillbaka, alltså dubbla avståndet till berget.' },
        { typ: 'text', text: 'För att du ska höra ekot som ett eget ljud behöver det oftast komma ungefär en tiondels sekund efter ropet. Annars blandas det ihop med ropet. Det betyder att väggen bör vara ungefär 17 meter bort eller mer. Det är en tumregel, inte en exakt gräns.' },
        { typ: 'rubrik', text: 'Inomhus blir ekot en efterklang' },
        { typ: 'text', text: 'I ett vanligt rum är väggarna för nära för att du ska höra ett tydligt eko. I stället studsar ljudet många gånger mellan väggar, golv och tak. Alla studsar blandas ihop. Därför hörs ljudet en liten stund till, efter att det har slutat. Det kallas *efterklang*.' },
        { typ: 'text', text: 'I en simhall med kakel på väggarna är efterklangen lång. Där kan det vara svårt att höra vad någon säger. I en kyrka gör den långa efterklangen att orgelmusiken låter mäktig.' },
        { typ: 'rubrik', text: 'Mjuka saker dämpar ljudet' },
        { typ: 'text', text: 'Hur ett rum låter kallas rummets *akustik|akustik*. Om allt ljud studsar runt i ett klassrum blir det tröttsamt att vara där.' },
        { typ: 'text', text: 'Därför sätter man upp mjuka plattor med små hål i taket och på väggarna. Ljudet går in i hålen och studsar inte tillbaka lika mycket. Mattor, gardiner och soffor dämpar också ljudet. I en musikstudio är väggarna täckta med sådana mjuka plattor. De kallas *ljudabsorbenter|ljudabsorbent*. Då kommer inga ekon med på inspelningen.' }
      ]
    },
    {
      id: 'ekolod', titel: 'Ekolodet mäter avstånd med eko',
      block: [
        { typ: 'rubrik', text: 'Tiden för ekot visar hur djupt det är' },
        { typ: 'text', text: 'Många båtar har ett *ekolod*. Det fungerar så här:' },
        { typ: 'punkter', punkter: [
          'Ekolodet skickar ned ett kort ljud i vattnet och startar en klocka.',
          'Ljudet går ned och träffar botten.',
          'Ljudet studsar och går tillbaka upp.',
          'Ekolodet hör ekot och stoppar klockan.',
          'Ekolodet räknar ut hur långt det är till botten.'
        ] },
        // [BILD C2: ekolod i numrerade steg: 1 båten skickar en ljudpuls nedåt, klockan startar · 2 pulsen når botten · 3 ekot studsar tillbaka uppåt · 4 ekolodet tar emot ekot, klockan stoppar · 5 sträckan delas med 2]
        { id: 'bild-c2', typ: 'figur', namn: 'ljud', lage: 'ekolod-botten', bildtext: 'Pulsen går ned och tillbaka upp, så sträckan delas med 2 för att få djupet.' },
        { typ: 'text', text: 'Ljudet går ungefär 1 500 meter per sekund i vatten. Om man vet hur länge ljudet var borta kan man räkna ut hur långt det har gått. Men kom ihåg att ljudet har gått både ned och upp. Därför delar man sträckan med 2.' },
        { typ: 'exempel', rubrik: 'Hur djupt är det?', stycken: [
          ['Ett ekolod skickar ned ett ljud. Ekot kommer tillbaka efter 0,2 s. Hur djupt är vattnet? Ljudet går 1 500 m/s i vatten.'],
          ['Givet: v = 1 500 m/s, t = 0,2 s. Sökt: djupet.'],
          ['Lösning: Räkna först hur långt ljudet gick, ned och upp.',
           's = v · t = 1 500 m/s · 0,2 s = 300 m',
           'Dela sedan med 2, eftersom ljudet gick både ned och upp.',
           '300 m / 2 = 150 m',
           'Svar: Vattnet är 150 m djupt.']
        ] },
        { typ: 'rubrik', text: 'Ekolodet ritar kartor och hittar fisk' },
        { typ: 'text', text: 'Ett ekolod skickar ljud hela tiden medan båten åker. Genom att mäta djupet på många ställen kan man göra en karta över botten. Man ser var det är grunt, var det finns stenar och var det ligger gamla vrak. Fisk studsar också tillbaka ljud. Därför använder fiskare ekolod för att se var fisken simmar.' }
      ]
    },
    {
      id: 'ultraljud', titel: 'Ultraljud används för att se det dolda',
      block: [
        { typ: 'rubrik', text: 'Fladdermöss och delfiner ser med ljud' },
        { typ: 'text', text: 'Fladdermöss jagar i mörker. De skickar ut korta skrik av ultraljud och lyssnar efter ekot. Hur lång tid ekot tar visar hur långt bort en insekt är. Skillnaden mellan ekona som når de två öronen visar åt vilket håll den är. Delfiner gör likadant i grumligt vatten. Att hitta saker med eko kallas *ekolokalisering|ekolokalisering*.' },
        { typ: 'rubrik', text: 'Ultraljud i vården' },
        { typ: 'text', text: 'Läkare och barnmorskor använder ultraljud för att se in i kroppen utan att operera. Så här går det till:' },
        { typ: 'punkter', punkter: [
          'En apparat hålls mot huden. Den skickar in ultraljud i kroppen.',
          'Ljudet studsar på olika sätt mot vätska, muskler och ben.',
          'Apparaten tar emot ekona.',
          'Ekona blir till en bild på en skärm.'
        ] },
        { typ: 'text', text: 'Alla som är gravida i Sverige får göra en ultraljudsundersökning. Då kan man se fostret röra sig. Man kan också titta på hjärtat, blodkärlen och organen i magen. Undersökningen räknas som säker.' },
        { typ: 'text', text: 'Ultraljudet i vården har frekvenser på flera miljoner hertz. Ju högre frekvens, desto kortare våglängd. Då kan man se mindre detaljer.' },
        { typ: 'text', text: 'Ljud kan också användas för att behandla vissa njurstenar. Då riktas kraftiga tryckvågor mot stenen inne i kroppen, så att den går sönder i små bitar. Då slipper patienten en operation. Det är en annan teknik än den som ger bilder.' },
        { typ: 'rubrik', text: 'Ultraljud i tekniken' },
        { typ: 'text', text: 'Ultraljud används också på andra sätt. I en ultraljudstvätt svänger vattnet så kraftigt att smutsen lossnar från smycken och glasögon. Inom industrin skickar man ultraljud genom metall. Om det finns en spricka studsar ljudet mot den. Så kan man hitta sprickor och dåliga svetsfogar.' }
      ]
    },
    {
      id: 'doppler', titel: 'Dopplereffekten',
      block: [
        { typ: 'rubrik', text: 'Sirenen ändrar ton när ambulansen kör förbi' },
        { typ: 'text', text: 'Har du hört en ambulans köra förbi med sirenen på? Medan den kommer mot dig låter sirenen ljusare. När den har kört förbi låter den mörkare. Precis när den passerar faller tonen. Det kallas *dopplereffekten|dopplereffekt*. Den har fått sitt namn efter en forskare som hette Christian Doppler.' },
        { typ: 'rubrik', text: 'Ambulansen kör ikapp sina egna vågor' },
        { typ: 'text', text: 'Varför händer det? Så här går det till:' },
        { typ: 'punkter', punkter: [
          'Sirenen skickar ut förtätningar i jämn takt.',
          'Om ambulansen står still sprids förtätningarna lika tätt åt alla håll.',
          'Om ambulansen kör hinner den en bit framåt mellan varje förtätning.',
          'Framför ambulansen hamnar förtätningarna tätare. Våglängden blir kortare. Fler förtätningar når ditt öra varje sekund. Du hör en ljusare ton.',
          'Bakom ambulansen hamnar förtätningarna glesare. Våglängden blir längre. Du hör en mörkare ton.'
        ] },
        // [BILD C3: dopplereffekten, två bilder ovanför varandra. Överst: ambulansen står still, cirklar av ljudvågor med samma centrum och samma avstånd åt alla håll, en person på var sida. Underst: ambulansen kör åt höger, varje cirkel har sitt centrum där ambulansen var när den förtätningen sändes ut (centrumen förskjutna längs färdvägen), så att cirklarna ligger tätare framför och glesare bakom; personen framför markerad "ljusare ton", personen bakom "mörkare ton"]
        { id: 'bild-c3', typ: 'figur', namn: 'ljud', lage: 'doppler-centrum', bildtext: 'När ambulansen kör ligger vågorna tätare framför den och glesare bakom.' },
        { typ: 'text', text: 'Många tror att sirenen själv ändrar ton. Men föraren inne i ambulansen hör hela tiden samma ton. Det är bara den som står utanför som hör tonen ändras. Ju fortare ambulansen kör, desto mer ändras tonen.' },
        { typ: 'text', text: 'Det fungerar också åt andra hållet. Om du åker tåg förbi en järnvägsövergång där klockorna ringer, hör du samma sak. Då är det du som rör dig.' }
      ]
    },
    {
      id: 'ljudbang', titel: 'Fortare än ljudet: ljudbangen',
      block: [
        { typ: 'rubrik', text: 'Vågorna samlas till en stötvåg' },
        { typ: 'text', text: 'Vissa flygplan kan flyga fortare än ljudet. Så här händer det med ljudvågorna:' },
        { typ: 'punkter', punkter: [
          'Planet flyger långsammare än ljudet. Ljudvågorna hinner före planet.',
          'Planet flyger lika fort som ljudet. Ljudvågorna packas ihop framför planets nos.',
          'Planet flyger fortare än ljudet. Planet lämnar sina ljudvågor bakom sig. De samlas till en stor tryckvåg bakom planet. Den har formen av en kon och kallas en *stötvåg|stötvåg*.',
          'När stötvågen sveper förbi någon på marken hör den en kraftig smäll.'
        ] },
        // [BILD C4: flygplanet och vågorna i numrerade steg: 1 planet flyger långsammare än ljudet – vågorna sprids före planet · 2 planet flyger lika fort som ljudet – vågorna packas ihop framför nosen · 3 planet flyger fortare än ljudet – vågorna hamnar bakom och bildar en kon (förenklad modell) · 4 konen sveper över marken – en person hör en smäll]
        { id: 'bild-c4', typ: 'figur', namn: 'ljud', lage: 'ljudbang', bildtext: 'När planet flyger fortare än ljudet hamnar vågorna bakom det och bildar en kon.' },
        { typ: 'text', text: 'Smällen kallas *ljudbang*.' },
        { typ: 'rubrik', text: 'Smällen följer med planet' },
        { typ: 'text', text: 'Många tror att ljudbangen bara hörs i det ögonblick när planet blir snabbare än ljudet. Men så är det inte. Så länge planet flyger fortare än ljudet följer stötvågen med bakom planet. När den når marken hör människor i ett område under planet smällen. Den kan alltså höras längs en stor del av flygvägen. Därför får sådana plan oftast bara flyga så fort över havet eller där få människor bor.' },
        { typ: 'text', text: 'En piska som smäller gör samma sak, fast i liten skala. Den yttersta spetsen på piskan rör sig fortare än ljudet.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljud studsar mot hårda ytor. Det kallas att ljudet reflekteras. Som tumregel hörs ett tydligt eko om väggen är ungefär 17 m bort eller mer.',
          'I ett rum blandas studsarna till efterklang. Mjuka saker och plattor med hål dämpar ljudet.',
          'Ett ekolod mäter hur länge ekot tar. Sträckan delas med 2, eftersom ljudet går både ned och upp.',
          'Fladdermöss och delfiner hittar saker med eko.',
          'I vården används ultraljud för att se in i kroppen. I tekniken används det för att göra rent och hitta sprickor.',
          'Dopplereffekten: en siren som kommer mot dig låter ljusare. En siren som åker ifrån dig låter mörkare.',
          'Ett plan som flyger fortare än ljudet drar en stötvåg efter sig. Den hörs som en smäll, en ljudbang.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
