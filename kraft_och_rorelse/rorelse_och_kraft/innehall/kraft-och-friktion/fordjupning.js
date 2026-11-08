/* Avsnittssida III, text B: Kraft och friktion – fördjupning. Samma källa och regler som standard.js; här visar
 * kraftpilarna värdena i newton. "16 − 6 = 10 N" står som text i löptexten (minustecken U+2212). Figur 1 är fotot
 * med dragkraften (bildpilar, BILD A i arbetsordern 2026-11-04), utan värde. */
Bok.niva('fordjupning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Kraft och friktion – fördjupning' },
        { typ: 'text', text: 'Den här texten bygger vidare på blocket. Du får räkna ut resultanter, skilja på två sorters friktion och se varför friktionen inte beror på hur stor yta som ligger mot underlaget.' },
        { typ: 'underrubrik', text: 'Det här lär du dig' },
        { typ: 'punkter', punkter: [
          'att räkna ut *resultanten|resultant* av krafter i newton',
          '*vilofriktion* och *glidfriktion*',
          '*normalkraft*, *rullfriktion* och *luftmotstånd*'
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
        { typ: 'rubrik', text: 'En kraft har storlek, riktning och angreppspunkt' },
        { typ: 'text', text: 'En kraft är en knuff eller ett drag, och den beskrivs av tre saker: hur stor den är, åt vilket håll den verkar och var den angriper föremålet. Därför ritas den som en pil från angreppspunkten. Kraftens storlek mäts i enheten newton, N – mer om det i texten om tyngdkraften.' },
        { typ: 'figur', namn: 'bildpilar', bild: 'bilder/block-rep.jpg', bredd: 1672, hojd: 941,
          pilar: [{ namn: 'dragkraft', fran: [300, 552], till: [580, 552], etikett: [750, 600] }],
          beskrivning: 'En person drar i ett rep som sitter fast i ett träblock på ett bord. En pil från blocket pekar framåt i repets riktning: dragkraften.' },

      ]
    },
    {
      id: 'krafterna-avgor-rorelsen', titel: 'Krafterna avgör rörelsen',
      block: [
        { typ: 'rubrik', text: 'Resultanten får man genom att lägga ihop krafterna med hänsyn till riktningen' },
        { typ: 'text', text: 'Krafter som verkar längs samma linje läggs ihop med hänsyn till riktningen. Krafter åt samma håll adderas, krafter åt motsatt håll subtraheras. Drar du blocket framåt med 16 N och friktionen bromsar med 6 N blir resultanten 16 − 6 = 10 N framåt. Drar du med 6 N och friktionen är 6 N blir resultanten 0 N.' },
        { typ: 'figur', namn: 'kraftpilar', foremal: { form: 'lada', namn: 'Block' }, underlag: true, enhet: 'N', skala: 16, resultant: true,
          krafter: [{ namn: 'Dragkraft', riktning: 'hoger', storlek: 16 }, { namn: 'Friktion', riktning: 'vanster', storlek: 6 }] },

        { typ: 'rubrik', text: 'Resultanten avgör hur rörelsen ändras' },
        { typ: 'text', text: 'Är resultanten noll ändras inte rörelsen: föremålet ligger still eller rör sig likformigt. Är resultanten skild från noll ändras rörelsen i resultantens riktning. Ju större resultanten är, desto snabbare ändras rörelsen – och ju större massa föremålet har, desto långsammare ändras den för samma resultant. Det sambandet kallas Newtons andra lag.' },

      ]
    },
    {
      id: 'friktion', titel: 'Friktion',
      block: [
        { typ: 'rubrik', text: 'Vilofriktionen anpassar sig efter draget' },
        { typ: 'text', text: 'Så länge blocket ligger stilla kallas friktionen *vilofriktion*. Den är inte en fast kraft, utan blir exakt lika stor som draget, så att resultanten blir noll. Drar du med 3 N är vilofriktionen 3 N, drar du med 8 N är den 8 N. Men den har ett största värde. Överstiger draget det värdet börjar blocket glida.' },
        { typ: 'figur', namn: 'friktion',
          bildtext: 'Även släta ytor är ojämna när man tittar riktigt nära.' },

        { typ: 'rubrik', text: 'Glidfriktionen är mindre än den största vilofriktionen' },
        { typ: 'text', text: 'När blocket glider kallas friktionen *glidfriktion*. Den är ungefär lika stor oavsett hur fort blocket glider, och den är mindre än den största vilofriktionen. Därför krävs störst kraft för att få något att börja glida. Det förklarar också varför bilar har låsningsfria bromsar: ett hjul som rullar utan att slira använder vilofriktionen mot vägen, som är större än glidfriktionen i ett låst hjul som glider.' },

        { typ: 'rubrik', text: 'Friktionen beror på normalkraften, inte på hur stor yta som ligger an' },
        { typ: 'text', text: 'Ett block som ligger på ett bord trycker mot bordet, och bordet trycker tillbaka uppåt med en kraft som kallas *normalkraft*. Friktionen är ungefär proportionell mot normalkraften: dubbelt så tungt block ger ungefär dubbelt så stor friktion. Det överraskande är att friktionen nästan inte beror på hur stor yta som ligger mot underlaget. Vänder du blocket så att det ligger på sin smalare sida blir friktionen ungefär densamma, eftersom samma tyngd fördelas på en mindre yta som trycks hårdare.' },

        { typ: 'rubrik', text: 'Rullfriktion är mycket mindre än glidfriktion' },
        { typ: 'text', text: 'När något rullar i stället för att glida blir friktionen mycket mindre. Det kallas *rullfriktion*. Det är därför hjulet och kullagret är så viktiga uppfinningar: en tung vagn på hjul går att dra med en bråkdel av den kraft som behövs för att släpa samma last.' },

        { typ: 'rubrik', text: 'Luftmotstånd växer med farten' },
        { typ: 'text', text: 'Friktionen mellan ytor är ungefär densamma oavsett fart, men *luftmotstånd* är annorlunda. Ju fortare något rör sig, desto större blir luftmotståndet. En cyklist som trampar lika hårt hela tiden accelererar först, men luftmotståndet växer med farten. Till slut är luftmotståndet och friktionen tillsammans lika stora som cyklistens kraft framåt, resultanten blir noll och cyklisten fortsätter i jämn fart. Det är därför man inte kan cykla hur fort som helst.' },

        // Luftmotstånd (III-B-luftmotstand-alla-nivaer.md, 2026-11-05, ordagrant)
        { typ: 'rubrik', text: 'Dubbelt så hög fart ger fyra gånger så stort luftmotstånd' },
        { typ: 'text', text: 'Luftmotståndet växer inte i takt med farten, utan mycket snabbare. Dubblar du farten blir luftmotståndet ungefär fyra gånger så stort, och tredubblar du den blir det nio gånger så stort. Man säger att luftmotståndet är proportionellt mot farten i kvadrat. Förklaringen är att två saker ökar samtidigt. I dubbelt så hög fart träffar du dubbelt så mycket luft varje sekund, och varje del av luften måste knuffas undan dubbelt så snabbt. Två gånger två blir fyra.' },
        { typ: 'text', text: 'Samma sak gäller en bil. Kör den i 110 km/h i stället för 70 km/h blir luftmotståndet ungefär (110/70)² ≈ 2,5 gånger så stort. Det är den största anledningen till att bränsleförbrukningen ökar så mycket på motorvägen.' },

        { typ: 'rubrik', text: 'Därför är det så svårt att cykla fortare när du redan cyklar fort' },
        { typ: 'text', text: 'I låg fart är luftmotståndet litet, och det mesta av din kraft går åt till rullfriktionen mot vägen. Men luftmotståndet växer så snabbt att det tar över. Redan vid ungefär 20 km/h är det den största bromsande kraften, och vid 40 km/h går ungefär 80–90 procent av din kraft åt till att tränga undan luft.' },
        { typ: 'text', text: 'Att öka från 20 till 40 km/h kräver alltså ungefär fyra gånger så stor kraft. Men du måste dessutom hålla den kraften över dubbelt så lång sträcka varje sekund. Det du orkar med i benen – hur mycket arbete du gör varje sekund – måste därför bli ungefär åtta gånger så stort. Det är därför en vältränad cyklist kan hålla 40 km/h en stund, men 50 km/h kräver nästan dubbelt så mycket som 40 km/h. Arbete och energi per sekund kallas effekt, och den lär du dig mer om i avsnittet om arbete och energi.' },

        { typ: 'rubrik', text: 'Cyklister och fåglar ligger i rad för att minska luftmotståndet' },
        { typ: 'text', text: 'Den som cyklar tätt bakom någon annan slipper en stor del av luftmotståndet, eftersom den främsta cyklisten redan har knuffat undan luften. Bakom en annan cyklist kan man spara ungefär en tredjedel av kraften. Därför cyklar tävlingscyklister i klunga och turas om att ligga först. Flyttfåglar som flyger i V-form sparar också kraft, genom att utnyttja luftströmmarna från fågeln framför, och lastbilar som kör i tät kolonn drar mindre bränsle.' },
        { typ: 'lank', till: ['ova', 'sjalvskattning'] }
      ]
    },
    {
      id: 'sammanfattning', titel: 'Sammanfattning', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Det viktigaste' },
        { typ: 'punkter', punkter: [
          'En kraft har storlek, riktning och angreppspunkt. Storleken mäts i newton (N).',
          'Krafter längs samma linje läggs ihop med hänsyn till riktningen; summan är *resultanten|resultant*.',
          '*Vilofriktionen|vilofriktion* blir lika stor som draget, upp till ett största värde. *Glidfriktionen|glidfriktion* är mindre.',
          'Friktionen beror på *normalkraften|normalkraft*, inte på hur stor yta som ligger an. *Rullfriktion* är mycket mindre än glidfriktion.',
          '*Luftmotståndet|luftmotstånd* växer med farten, och därför finns en högsta fart.'
        ] },
        { typ: 'lank', till: ['ova', 'sjalvskattning', 'elevbok'] },
        { typ: 'vidare', lankar: [
          { text: '7. Friktionskoefficienten', bok: 'nasta-kraft-och-rorelse', ankare: 'friktionskoefficienten' },
          { text: '6. Tyngden och fritt fall', bok: 'nasta-kraft-och-rorelse', ankare: 'tyngden-och-fritt-fall' }
        ] }
      ]
    }
  ]
});
