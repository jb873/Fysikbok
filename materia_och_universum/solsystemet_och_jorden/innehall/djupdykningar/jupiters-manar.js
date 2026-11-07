/* Avsnittssida I. Solsystemet och jorden – djupdykningen "Jupiters månar och Saturnus ringar".
 * Arbetsorder 10 (2026-11-07): kallor/kap1/Kap1-DD-C-Jupiters-manar-och-Saturnus-ringar-redigerad.md,
 * infört ordagrant i strömformatet: styckena före första ## = Inledningen (utan rubrik, som källan), ## = avsnitt,
 * ### = rubrik, ett stycke = ett textblock. Ingen Sammanfattning och inget länkblock. [BILD …] står som kommentar
 * på sin plats; eleven ser dem inte. Skriven av verktyg/kap1-omvandlare.js.
 * Den första markeringen ritas av motorn efter kommentaren (himlakroppar_i_skala, order 10 steg 2).
 */
Bok.niva('djupdykning', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Inledning', numrerad: false,
      block: [
        { typ: 'text', text: 'Tänk dig att du riktar ett teleskop mot Jupiter, solsystemets största planet. Bredvid den ljusa planetskivan ser du fyra små ljusprickar nästan på rad. Nästa kväll har prickarna flyttat sig, och några dagar senare ligger de i en helt annan ordning. Vad är det du ser?' },
        { typ: 'text', text: 'Ungefär så gick det till när den italienske forskaren Galileo Galilei år 1610 hittade fyra himlakroppar som kretsade runt Jupiter. Upptäckten ändrade människans bild av universum. I dag vet vi att de fyra månarna är helt olika världar, med vulkaner, istäcken och kanske hav där liv skulle kunna finnas.' },
        { typ: 'text', text: 'Ännu längre bort finns Saturnus, omgiven av lysande ringar. På håll ser de ut som en enda skiva, men de består av otaliga bitar av is. Hur kan så mycket material kretsa runt en planet utan att falla ner? Och varför har några av solsystemets mest spännande platser visat sig vara månar och inte planeter?' }
      ]
    },
    {
      id: 'galileos-upptackt', titel: 'Galileos upptäckt visade att allt inte kretsar kring jorden',
      block: [
        { typ: 'rubrik', text: 'Fyra ljusprickar ändrade bilden av universum' },
        { typ: 'text', text: 'Den 7 januari 1610 riktade Galileo sitt hemmabyggda teleskop mot Jupiter och såg tre små ljusprickar intill planeten. Först trodde han att det var stjärnor långt bakom. Men natt efter natt bytte prickarna plats, samtidigt som de hela tiden följde med Jupiter över himlen. Några dagar senare såg han en fjärde.' },
        { typ: 'text', text: 'Galileo drog slutsatsen att prickarna var månar som kretsade runt Jupiter. Det var stort. De flesta människor trodde då att allt på himlen kretsade runt jorden, och här fanns himlakroppar som uppenbart kretsade runt något annat. Upptäckten bevisade inte att jorden går runt solen, men den visade att jorden inte är mittpunkten för allting.' },
        { typ: 'text', text: 'Månarna fick namnen Io, Europa, Ganymedes och Kallisto, och kallas de galileiska månarna. Du kan se dem själv. Med en vanlig handkikare som du håller stadigt, gärna mot ett staket, syns de som små prickar bredvid Jupiter. Titta flera kvällar i rad och rita av vad du ser, så gör du samma observation som Galileo.' },
        { typ: 'rubrik', text: 'Jupiter är som ett litet solsystem' },
        { typ: 'text', text: 'Jupiter är så stor att mer än 1 300 jordklot skulle få plats inuti den. Dess gravitation håller nästan hundra månar i omloppsbana, på samma sätt som solens gravitation håller planeterna i sina banor. Av de fyra stora månarna ligger Io närmast och går runt Jupiter på mindre än två dygn. Kallisto ligger längst ut och behöver drygt två veckor.' },
        { typ: 'text', text: 'Många tror att en måne alltid är en död, grå stenklump som vår egen måne, men så är det inte. Jupiters fyra stora månar skiljer sig lika mycket från varandra som planeterna gör. En är täckt av vulkaner, en annan av is, och flera kan ha hela hav under ytan.' },
        // [BILD: Jupiter med sina fyra största månar i rätt storlek jämfört med varandra. Io gulorange med vulkanfläckar, Europa ljus med mörka sprickor, Ganymedes brungrå med ljusare fält och Kallisto mörk och full av kratrar. Ingen text i bilden.]
        { id: 'bild-jupiter', typ: 'figur', namn: 'himlakroppar_i_skala', kroppar: [{ namn: 'Jupiter', diameter: 139800 }, { namn: 'Io', diameter: 3640 }, { namn: 'Europa', diameter: 3120 }, { namn: 'Ganymedes', diameter: 5270 }, { namn: 'Kallisto', diameter: 4820 }], bildtext: 'Jupiter och dess fyra stora månar i samma skala. Ganymedes är större än planeten Merkurius.' }
      ]
    },
    {
      id: 'fyra-manar', titel: 'Jupiters fyra stora månar är helt olika världar',
      block: [
        { typ: 'rubrik', text: 'Io har fler aktiva vulkaner än någon annan himlakropp' },
        { typ: 'text', text: 'Io ser ut som en pizza. Ytan är gul, orange, röd och svart av svavelföreningar från vulkanerna. Här finns hundratals aktiva vulkaner, och vissa sprutar upp material flera hundra kilometer över ytan. Io är den mest vulkaniska himlakropp vi känner till.' },
        { typ: 'text', text: 'Men hur kan Io vara så het när den ligger så långt från solen? Svaret är Jupiters gravitation. Ios bana är inte helt rund, eftersom månarna Europa och Ganymedes hela tiden drar lite i den. Därför kommer Io ibland lite närmare Jupiter och ibland lite längre bort, och Jupiters dragning kramar och sträcker månen om vartannat. Böj en ståltråd fram och tillbaka några gånger och känn hur den blir varm. Samma sak händer inne i Io, och värmen smälter berg och driver vulkanerna.' },
        { typ: 'text', text: 'Fenomenet kallas tidvattenuppvärmning, eftersom det är samma slags kraft som ger tidvatten på jorden. Rymdsonder har fotograferat utbrotten och mätt värmestrålningen från de heta lavafälten. Därför vet vi att Io är aktiv just nu.' },
        { typ: 'rubrik', text: 'Europa döljer ett hav under isen' },
        { typ: 'text', text: 'Europa ser helt annorlunda ut. Ytan är ljus vattenis, korsad av långa mörka sprickor. Det finns nästan inga kratrar, och det visar att ytan är ung. Gamla kratrar har suddats ut när isen har rört sig och nytt material har pressats upp underifrån.' },
        { typ: 'text', text: 'Under isen finns troligen ett hav av salt, flytande vatten som täcker hela månen. Det kan innehålla ungefär dubbelt så mycket vatten som alla jordens hav tillsammans. Vattnet hålls flytande av samma tidvattenvärme som gör Io så het.' },
        { typ: 'text', text: 'Ingen har borrat genom isen och sett havet. Hur kan vi då veta att det finns? När rymdsonden Galileo flög förbi Europa mätte den magnetfältet runt månen. Fältet betedde sig som om det fanns ett lager av elektriskt ledande vätska under ytan, och salt vatten leder ström. Det är ett exempel på hur forskare kan upptäcka något dolt genom att mäta hur det påverkar omgivningen.' },
        { typ: 'rubrik', text: 'Ganymedes är större än planeten Merkurius' },
        { typ: 'text', text: 'Ganymedes är den största månen i solsystemet, med en diameter på ungefär 5 300 km. Den är alltså större än planeten Merkurius, men eftersom den består till stor del av is väger den bara ungefär hälften så mycket. Om Ganymedes hade gått i egen bana runt solen hade vi kallat den en planet.' },
        { typ: 'text', text: 'Ganymedes är den enda månen vi känner till som har ett eget magnetfält. Det betyder att något elektriskt ledande rör sig djupt inne i månen, troligen en järnrik kärna. Även Ganymedes tros ha ett hav av salt vatten djupt under isen.' },
        { typ: 'rubrik', text: 'Kallisto är full av gamla kratrar' },
        { typ: 'text', text: 'Kallisto, den yttersta av de fyra, har en mörk yta som är fullsatt av nedslagskratrar. Där finns knappast någon plats som inte har träffats. Ytan har knappt förändrats på miljarder år, så kratrarna ligger kvar och visar hur ofta det smällde i solsystemets ungdom.' },
        { typ: 'text', text: 'På jorden suddas gamla kratrar ut av väder, vatten och rörelser i jordskorpan. Kallisto är som en historiebok som aldrig har skrivits om. Även här finns mätningar som tyder på ett hav djupt under isen.' }
      ]
    },
    {
      id: 'europas-hav', titel: 'Europas hav kan ha förutsättningar för liv',
      block: [
        { typ: 'rubrik', text: 'Liv behöver vatten, ämnen och energi' },
        { typ: 'text', text: 'På jorden finns liv nästan överallt där det finns flytande vatten: i hav, i heta källor och djupt nere i sprickor i berggrunden. Vissa organismer lever där solljus aldrig når ner. Det har fått forskare att fråga sig om liv också skulle kunna finnas i Europas mörka hav.' },
        { typ: 'text', text: 'Liv som vi känner det behöver flytande vatten, rätt kemiska ämnen och en energikälla. Europa har gott om vatten, och värmen i månens inre kan driva kemiska reaktioner där vatten möter berg på havsbotten. På jordens havsbotten finns heta källor där bakterier lever på energi från kemiska reaktioner, helt utan solljus. Om liknande källor finns på Europa kan enkla livsformer kanske klara sig där.' },
        // [BILD: Genomskärning av Europa: ett tjockt istäcke överst, ett djupt mörkblått hav och en stenig havsbotten där en varm källa släpper ut mineralrikt vatten. Ingen text i bilden.]
        { typ: 'rubrik', text: 'Förutsättningar för liv är inte samma sak som liv' },
        { typ: 'text', text: 'Många tror att forskare redan har hittat liv på Europa, eftersom de har hittat tecken på ett hav. Men det har de inte, och än så länge har vi inte hittat liv någon annanstans än på jorden. Att en plats har vatten, ämnen och energi betyder att liv skulle kunna finnas där, inte att det gör det.' },
        { typ: 'text', text: 'Det svåra är att undersöka ett hav under flera kilometer is. Rymdsonder kan fotografera sprickorna, mäta isens tjocklek med radar och undersöka ämnen på ytan som kan ha kommit upp från havet. NASA:s rymdsond Europa Clipper, som sköts upp i oktober 2024, ska nå Jupiter år 2030 och flyga förbi Europa ett femtiotal gånger för att ta reda på om havet kan vara beboeligt.' }
      ]
    },
    {
      id: 'saturnus-ringar', titel: 'Saturnus ringar består av otaliga bitar av is',
      block: [
        { typ: 'rubrik', text: 'Ringarna är inte fasta skivor' },
        { typ: 'text', text: 'I ett bra teleskop ser Saturnus ringar ut som en stel skiva runt planeten. I själva verket består de av otaliga separata bitar, mest vattenis med lite sten och damm. Varje bit går runt Saturnus i sin egen bana, som en liten måne.' },
        { typ: 'text', text: 'De minsta bitarna är mindre än sandkorn, de största stora som hus. Isen reflekterar solljuset bra, och därför lyser ringarna så starkt. På håll flyter alla bitar ihop till något som ser ut som en hel yta, ungefär som en flock fåglar kan se ut som ett enda moln.' },
        { typ: 'text', text: 'Många tror att en rymdfarkost skulle kunna landa på Saturnus ringar, men det går inte. Det finns ingen fast yta, bara fritt svävande isbitar. En farkost som flyger rakt genom ringarna riskerar i stället att träffas av is som rör sig med mycket hög fart i förhållande till farkosten.' },
        { typ: 'rubrik', text: 'Ringarna är enormt breda men extremt tunna' },
        { typ: 'text', text: 'Saturnus huvudringar sträcker sig ungefär 70 000 km ut från planeten, mer än fem gånger jordens diameter. Ändå är de på de flesta ställen bara omkring tio meter tjocka. Om ringarna krympte till ett papper med samma bredd som ett A4-ark skulle de vara tusentals gånger tunnare än pappret.' },
        { typ: 'text', text: 'Varför ligger allt i ett så tunt lager? Bitarna krockar hela tiden med varandra. En bit som rör sig uppåt eller nedåt ut ur planet stöter förr eller senare ihop med andra, och då bromsas just den rörelsen. Under lång tid har krockarna plattat till ringarna, som en hög sand som skakas tills den ligger jämnt.' },
        { typ: 'text', text: 'Rymdsonden Cassini undersökte ringarna från många vinklar. När solljuset föll nästan rakt från sidan kastade små ojämnheter långa skuggor, och forskarna kunde mäta hur höga de var. Cassini mätte också hur ljuset från stjärnor bakom ringarna blinkade när ringbitarna passerade framför. På så sätt vet vi att ringarna har både täta och mycket glesa delar.' },
        { typ: 'rubrik', text: 'Månarna formar ringarna' },
        { typ: 'text', text: 'Ringarna är uppdelade i många smalare ringar med mellanrum. Det mest kända mellanrummet heter Cassinis delning och syns i ett bra amatörteleskop. Det skapas av månen Mimas. Bitar i mellanrummet går exakt två varv runt Saturnus på den tid som Mimas går ett, och därför får de en liten knuff av Mimas gravitation på samma ställe varje gång. Knuffarna flyttar till slut bort dem, ungefär som när man puttar en gunga i rätt takt.' },
        { typ: 'text', text: 'Några små månar rör sig längs ringarnas kanter och vallar materialet med sin gravitation som herdehundar. De ger ringarna skarpa kanter och skapar vågor i dem. Ringarna är alltså inte stillastående utan förändras hela tiden.' },
        { typ: 'text', text: 'Hur gamla ringarna är vet forskarna inte säkert. Isen är förvånansvärt ren, och det tyder på att ringarna kan vara mycket yngre än Saturnus, kanske bara några hundra miljoner år. En möjlighet är att en måne kom för nära och slets sönder av Saturnus gravitation. Andra forskare menar att ringarna kan vara lika gamla som planeten.' }
      ]
    },
    {
      id: 'jatteplaneter', titel: 'Alla jätteplaneter har ringar och Saturnus har ovanliga månar',
      block: [
        { typ: 'rubrik', text: 'Jupiter, Uranus och Neptunus har också ringar' },
        { typ: 'text', text: 'Saturnus är inte ensam om ringar. Jupiter, Uranus och Neptunus har också ringsystem, men de är mörka och tunna och nästan omöjliga att se i ett vanligt teleskop. Jupiters ringar består mest av fint damm från små månar, Uranus har smala mörka ringar och Neptunus har ringar med märkliga bågar av samlat material. Ringar verkar alltså vara vanliga runt jätteplaneter. Saturnus ringar är bara mycket ljusare, eftersom de består av is.' },
        { typ: 'rubrik', text: 'Titan har en tjock atmosfär och sjöar av flytande metan' },
        { typ: 'text', text: 'Saturnus största måne Titan är också större än Merkurius. Den är den enda månen i solsystemet med en tjock atmosfär. Luften består mest av kväve, precis som vår, men innehåller också metan, och ett orange dis gör att man inte kan se ytan från rymden.' },
        { typ: 'text', text: 'Vid Titans yta är det ungefär –180 °C, alldeles för kallt för flytande vatten. Där är vattenis lika hård som berg. Men metan och etan, som hos oss är gaser, är flytande på Titan. De regnar ner, rinner i floder och samlas i sjöar och hav. Titan är den enda plats utanför jorden där vi vet att det finns sjöar på ytan.' },
        { typ: 'text', text: 'I januari 2005 landade den europeiska sonden Huygens på Titan efter en färd i fallskärm genom atmosfären. Den fotograferade marken under nedfärden och visade rundslipade isblock som liknade stenar i en uttorkad flodbädd. Det var den första landningen i det yttre solsystemet.' }
      ]
    },
    {
      id: 'rymdsonder', titel: 'Rymdsonder avslöjar det som teleskop inte kan se',
      block: [
        { typ: 'rubrik', text: 'Galileo och Cassini förändrade vår kunskap' },
        { typ: 'text', text: 'Rymdsonden Galileo, uppkallad efter forskaren, gick in i omloppsbana runt Jupiter år 1995 och undersökte planeten och dess månar i åtta år. Den fotograferade vulkanutbrott på Io och Europas sprickiga is, och dess magnetfältsmätningar gav de starkaste bevisen för havet under Europas yta.' },
        { typ: 'text', text: 'Cassini nådde Saturnus år 2004 och arbetade där till 2017. Den fotograferade ringarna och månarna från alla håll. Bland annat upptäckte den att den lilla månen Enceladus sprutar ut vattenånga och iskristaller från sprickor vid sydpolen. Det betyder att också Enceladus har ett hav under isen, och materialet från fontänerna bildar en av Saturnus yttersta ringar.' },
        { typ: 'rubrik', text: 'Juice är på väg till Jupiters isiga månar' },
        { typ: 'text', text: 'Den europeiska rymdsonden Juice sköts upp den 14 april 2023. Resan är lång, och för att få upp farten flyger Juice förbi andra himlakroppar och lånar fart av deras gravitation. Den 28 september 2026 svepte Juice förbi jorden på mindre än 9 000 kilometers höjd över Indiska oceanen och fotograferade jorden och månen. En sista förbiflygning av jorden väntar i januari 2029, och i juli 2031 ska Juice nå Jupiter.' },
        { typ: 'text', text: 'Juice ska undersöka Europa, Kallisto och framför allt Ganymedes, och till sist gå in i omloppsbana runt Ganymedes. Den blir då den första rymdsonden som kretsar runt en annan måne än vår egen. Med radar som tränger ner i isen, kameror och instrument för magnetfält och gravitation ska forskarna försöka ta reda på hur tjock isen är och hur haven under den ser ut.' },
        { typ: 'text', text: 'Juice kommer inte att borra genom isen eller leta efter levande organismer. Den ska mäta sådant som avslöjar vad som finns där vi inte kan se. Det är samma arbetssätt som Galileo använde när han drog slutsatser från fyra ljusprickar, men med instrument som kan mäta mycket mer än ett teleskop från 1600-talet. Kanske kommer de viktigaste upptäckterna i Jupiters närhet inte att handla om själva planeten, utan om vad som finns i mörkret under isen på någon av dess månar.' }
      ]
    }
  ]
});
