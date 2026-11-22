/* Avsnittssida II. Ljud omkring oss, text C: Eko, ultraljud och dopplereffekten – nivån standard (📘).
 * Arbetsorder 34 (2026-11-22): kallor/kap2/Kap2-II-C-Eko-ultraljud-och-doppler-alla-nivaer-v2.md (# 📘 STANDARD), införd ordagrant i
 * strömformatet av verktyg/kap3-omvandlare.js --text 2iic: ## = avsnitt, ### = rubrik, ett stycke = ett textblock,
 * "Det här lär du dig:" = liten rubrik utan kolon. Tilläggen enligt kapitlets norm: rutan "Så bläddrar du" sist i
 * Inledningen och länkblocket sist i det sista numrerade avsnittet och i Sammanfattningen (ingen ruta "Vill du gå
 * vidare?": ordern). [BILD …] står som kommentar, med figuren efter (kap2-figurer-iic.js).
 */
Bok.niva('standard', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Ljud som studsar och ljud som rör sig' },
        { typ: 'text', text: 'Ljud fortsätter inte bara rakt fram. Det kan studsa mot berg och väggar och komma tillbaka som ett eko. Fiskare, läkare och fladdermöss utnyttjar ekot för att "se" sådant som ögat inte når. Och när ljudkällan själv rör sig händer något märkligt med tonen. I den här texten får du veta hur eko fungerar, hur ultraljud används och varför sirenen på en ambulans låter annorlunda när den kör förbi.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'vad *eko* och *efterklang* är, och hur man dämpar dem',
          'hur ett *ekolod* mäter djup',
          'hur djur, läkare och tekniker använder ultraljud',
          'vad *dopplereffekten|dopplereffekt* är',
          'vad som händer när något rör sig fortare än ljudet'
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
        { typ: 'rubrik', text: 'Ljudet reflekteras mot hårda ytor' },
        { typ: 'text', text: 'När en ljudvåg träffar en hård, slät yta som en bergvägg, en husvägg eller en kakelvägg studsar det mesta av ljudet tillbaka. Man säger att ljudet *reflekteras|reflektera*. Står du en bit från en bergvägg och ropar hör du ditt rop igen en stund senare. Det är ett *eko*. För att du ska höra ett kort ljud som ett tydligt eget eko, och inte bara som en del av ropet, behöver ekot ofta komma ungefär en tiondels sekund senare. Det är en tumregel. På den tiden hinner ljudet färdas ungefär 34 meter fram och tillbaka, vilket motsvarar en vägg ungefär 17 meter bort.' },
        // [BILD C1: eko mot en bergvägg i numrerade steg: 1 en person ropar – ljudvågen går mot berget · 2 ljudvågen träffar bergväggen och reflekteras · 3 ekot färdas tillbaka · 4 personen hör ekot. Avståndet till berget utmärkt, och att ljudet färdas dubbla avståndet fram och tillbaka]
        { id: 'bild-c1', typ: 'figur', namn: 'ljud', lage: 'eko-berg', bildtext: 'Ekot har färdats fram och tillbaka, alltså dubbla avståndet till berget.' },
        { typ: 'rubrik', text: 'Inomhus blir ekot en efterklang' },
        { typ: 'text', text: 'I ett vanligt rum är väggarna för nära för att du ska höra ett tydligt eko. Ljudet studsar i stället många gånger fram och tillbaka mellan väggar, golv och tak, och alla reflexerna blandas. Det gör att ljudet dröjer kvar en stund efter att det har tystnat. Det kallas *efterklang*. I en simhall med kakel på alla väggar blir efterklangen lång, och det kan vara svårt att höra vad någon säger. I en kyrka kan lång efterklang göra att orgelmusik låter mäktig.' },
        { typ: 'rubrik', text: 'Mjuka och porösa material dämpar ljudet' },
        { typ: 'text', text: 'Hur ett rum låter kallas rummets *akustik|akustik*. Ett klassrum med dålig akustik är tröttsamt att vara i, eftersom alla ljud studsar runt. För att förbättra akustiken sätter man upp mjuka, porösa plattor i taket och på väggarna. Ljudet går in i de små hålen i materialet och studsar inte tillbaka lika mycket. Mattor, gardiner och stoppade möbler gör samma sak. I en musikstudio är väggarna täckta av sådana *ljudabsorbenter|ljudabsorbent*, så att inga ekon kommer med på inspelningen.' }
      ]
    },
    {
      id: 'ekolod', titel: 'Ekolodet mäter avstånd med eko',
      block: [
        { typ: 'rubrik', text: 'Tiden för ekot avslöjar avståndet' },
        { typ: 'text', text: 'Ett *ekolod* på en båt skickar en kort ljudpuls rakt ned i vattnet. Ljudet studsar mot botten, och ekolodet mäter hur lång tid det tar innan ekot kommer tillbaka. Eftersom man vet att ljudet går ungefär 1 500 m/s i vatten kan man räkna ut avståndet. Men ljudet har gått både ned och upp igen, så sträckan som räknas fram måste delas med 2.' },
        // [BILD C2: ekolod i numrerade steg: 1 båten skickar en ljudpuls nedåt, klockan startar · 2 pulsen når botten · 3 ekot studsar tillbaka uppåt · 4 ekolodet tar emot ekot, klockan stoppar · 5 sträckan delas med 2]
        { id: 'bild-c2', typ: 'figur', namn: 'ljud', lage: 'ekolod-botten', bildtext: 'Pulsen går ned och tillbaka upp, så sträckan delas med 2 för att få djupet.' },
        { typ: 'exempel', rubrik: 'Hur djupt är det?', stycken: [
          ['Ett ekolod skickar en ljudpuls mot botten och tar emot ekot 0,2 s senare. Hur djupt är vattnet? Ljudets hastighet i vatten är 1 500 m/s.'],
          ['Givet: v = 1 500 m/s, t = 0,2 s. Sökt: djupet.'],
          ['Lösning: Ljudet går ned och upp.',
           's = v · t = 1 500 m/s · 0,2 s = 300 m',
           'djupet = 300 m / 2 = 150 m',
           'Svar: Vattnet är 150 m djupt.']
        ] },
        { typ: 'rubrik', text: 'Ekolod ritar kartor och hittar fisk' },
        { typ: 'text', text: 'Ett ekolod skickar pulser hela tiden medan båten åker. Genom att mäta djupet på många platser kan man göra kartor över botten och upptäcka grund, stenar och vrak. Ett fiskstim reflekterar också ljud, och därför använder yrkesfiskare ekolod för att se på vilket djup fisken finns. Ekolod använder oftast ultraljud.' }
      ]
    },
    {
      id: 'ultraljud', titel: 'Ultraljud används för att se det dolda',
      block: [
        { typ: 'rubrik', text: 'Fladdermöss och delfiner ser med ljud' },
        { typ: 'text', text: 'Fladdermöss jagar i mörker. De skickar ut korta skrik av ultraljud och lyssnar på ekona. Av tiden tills ekot kommer tillbaka kan fladdermusen avgöra hur långt bort en insekt är. Skillnader mellan ekona som når de två öronen hjälper den att avgöra riktningen. Delfiner gör likadant i grumligt vatten. Att hitta saker med hjälp av eko kallas *ekolokalisering|ekolokalisering*.' },
        { typ: 'rubrik', text: 'Ultraljud i vården' },
        { typ: 'text', text: 'Inom vården används ultraljud för att se in i kroppen utan att operera. En apparat som hålls mot huden skickar in ultraljud. Ljudet reflekteras på olika sätt mot olika vävnader, mot vätska, muskler och ben, och apparaten gör om ekona till en bild på en skärm. Alla gravida i Sverige erbjuds en ultraljudsundersökning, där man kan se fostret röra sig. Man undersöker också hjärtat, blodkärlen och organ i magen. Ultraljudet i vården har frekvenser på flera miljoner hertz. Ju högre frekvens, desto kortare våglängd, och desto mindre detaljer kan man se. Undersökningen räknas som säker vid de nivåer som används. Ljud används också för att behandla vissa njurstenar. Då riktas kraftiga stötvågor mot stenen så att den slås sönder i mindre bitar, och patienten slipper operation. Det är en annan teknik än den ultraljudsundersökning som ger bilder.' },
        { typ: 'rubrik', text: 'Ultraljud i tekniken' },
        { typ: 'text', text: 'Ultraljud används också utanför vården. I en ultraljudstvätt får kraftiga svängningar i vattnet smutsen att lossna från smycken, glasögon och ömtåliga föremål. Inom industrin skickar man ultraljud genom metall för att hitta sprickor och dåliga svetsfogar. En spricka reflekterar ljudet, och då syns den i ekot.' }
      ]
    },
    {
      id: 'doppler', titel: 'Dopplereffekten',
      block: [
        { typ: 'rubrik', text: 'Sirenen låter ljusare när den närmar sig' },
        { typ: 'text', text: 'När en ambulans med påslagen siren kör förbi dig låter sirenen ljusare medan ambulansen närmar sig och mörkare när den har passerat. Precis när den kör förbi faller tonen. Det kallas *dopplereffekten|dopplereffekt*, efter den österrikiske fysikern Christian Doppler.' },
        { typ: 'rubrik', text: 'Ljudkällan kör ikapp sina egna vågor' },
        { typ: 'text', text: 'Sirenen skickar ut förtätningar i jämn takt. Om ambulansen står still sprids de lika tätt åt alla håll. Men när ambulansen kör hinner den en bit framåt mellan varje förtätning. Framför ambulansen hamnar förtätningarna därför tätare. Våglängden blir kortare, fler förtätningar når ditt öra varje sekund, och du hör en högre frekvens. Bakom ambulansen hamnar förtätningarna glesare. Våglängden blir längre, och du hör en lägre frekvens.' },
        // [BILD C3: dopplereffekten, två bilder ovanför varandra. Överst: ambulansen står still, cirklar av ljudvågor med samma centrum och samma avstånd åt alla håll, en person på var sida. Underst: ambulansen kör åt höger, varje cirkel har sitt centrum där ambulansen var när den förtätningen sändes ut (centrumen förskjutna längs färdvägen), så att cirklarna ligger tätare framför och glesare bakom; personen framför markerad "ljusare ton", personen bakom "mörkare ton"]
        { id: 'bild-c3', typ: 'figur', namn: 'ljud', lage: 'doppler-centrum', bildtext: 'När ambulansen kör ligger vågorna tätare framför den och glesare bakom.' },
        { typ: 'text', text: 'Många tror att sirenen själv ändrar ton. Men föraren inne i ambulansen hör hela tiden samma ton. Det är bara den som står stilla utanför som hör tonen ändras. Ju fortare ljudkällan rör sig, desto större blir skillnaden. Dopplereffekten uppstår också om det är du som rör dig mot eller från en ljudkälla, till exempel när du åker tåg förbi en järnvägsövergång där klockorna ringer.' }
      ]
    },
    {
      id: 'ljudbang', titel: 'Fortare än ljudet: ljudbangen',
      block: [
        { typ: 'rubrik', text: 'Vågorna samlas i en stötvåg' },
        { typ: 'text', text: 'Ju fortare ett plan flyger, desto tätare hamnar ljudvågorna framför det. Om planet flyger exakt lika fort som ljudet, hinner vågorna inte före planet alls. Flyger det ännu fortare lämnar planet sina vågor bakom sig. Vågorna som skickas ut från olika punkter längs vägen hamnar då på en gemensam yta som har formen av en kon bakom planet. Där samlas tryckändringarna till kraftiga tryckvågor, *stötvågor|stötvåg*. Ett verkligt plan skapar flera stötvågor, bland annat vid nosen och vid stjärten, men bilden av en kon är en bra förenklad modell.' },
        // [BILD C4: flygplanet och vågorna i numrerade steg: 1 planet flyger långsammare än ljudet – vågorna sprids före planet · 2 planet flyger lika fort som ljudet – vågorna packas ihop framför nosen · 3 planet flyger fortare än ljudet – vågorna hamnar bakom och bildar en kon (förenklad modell) · 4 konen sveper över marken – en person hör en smäll]
        { id: 'bild-c4', typ: 'figur', namn: 'ljud', lage: 'ljudbang', bildtext: 'När planet flyger fortare än ljudet hamnar vågorna bakom det och bildar en kon.' },
        { typ: 'rubrik', text: 'Smällen följer med planet' },
        { typ: 'text', text: 'När stötvågen sveper förbi någon på marken hör den en kraftig smäll, en *ljudbang*. Många tror att ljudbangen bara uppstår i det ögonblick då planet passerar ljudets hastighet, "när det spränger ljudvallen". Men så länge planet flyger fortare än ljudet bildas stötvågor som följer med planet. När de når marken hör människor inom ett brett område under flygvägen en ljudbang. Smällen hörs alltså inte bara när planet passerar ljudets hastighet, utan kan höras längs en stor del av vägen. Därför får överljudsplan i de flesta länder bara flyga så fort över hav och glest befolkade områden. En piska som smäller gör samma sak i liten skala: snärtens yttersta spets rör sig fortare än ljudet.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'Ljud reflekteras mot hårda ytor. Som tumregel hörs ett tydligt eko om väggen är ungefär 17 m bort eller mer.',
          'I rum blandas reflexerna till efterklang. Mjuka och porösa material dämpar ljudet och förbättrar akustiken.',
          'Ett ekolod mäter tiden för ekot: sträckan s = v · t delas med 2, eftersom ljudet går ned och upp.',
          'Fladdermöss och delfiner använder ekolokalisering. I vården används ultraljud för att se in i kroppen, i tekniken för att rengöra och hitta sprickor.',
          'Dopplereffekten: en ljudkälla som närmar sig låter ljusare, en som avlägsnar sig låter mörkare. Källan själv låter likadant hela tiden.',
          'Något som rör sig fortare än ljudet släpar en kon av tryck, en stötvåg, efter sig. Den hörs som en ljudbang längs en stor del av flygvägen, inte bara när planet passerar ljudets hastighet.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] }
      ]
    }
  ]
});
