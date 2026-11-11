/* PROVDATA för verktyg/bok-grind.js – inte elevinnehåll. Nästa steg (arbetsorder 11): en fristående bok (nastaSteg) med
 * de nya märkningarna – FORMEL (förklaringen som text, ett långt uttryck och index med understreck), EXEMPEL (ett som
 * ryms och ett som är högre än en sida i alla lägen, så att det delas mellan raderna), PROVA, rader i följd
 * (mellanled), en numrerad lista, länkar till en annan bok (bokref, boklank) och en post utan länk. */
Bok.niva('nasta-steg', {
  avsnitt: [
    {
      id: 'inledning', titel: 'Så här använder du provboken', numrerad: false,
      block: [
        { typ: 'rubrik', text: 'Provrubrik: boken har en övningsbok' },
        { typ: 'text', text: 'Provtext före länken till övningsboken.' },
        { typ: 'boklank', bok: 'ovning-prov-ovning' }
      ]
    },
    {
      id: 'formler', titel: 'Provformler',
      block: [
        { typ: 'bokref', etikett: 'Matematik du behöver:', lankar: [{ text: 'Provmatte ett', bok: 'stod-prov-matte', ankare: 'matte-ett' },
          { text: 'Provmatte två', bok: 'stod-prov-matte', ankare: 'matte-tva' }, { text: 'Fysikboken: utan länk' }] },
        { typ: 'rubrik', text: 'Provrubrik: en formel står med stycket före' },
        { typ: 'text', text: 'Provtext före formeln, med ett index: F_N är normalkraften och μ_vila friktionskoefficienten.' },
        { typ: 'formel', uttryck: 'F_vila ≤ μ_vila · F_N', forklaring: 'provförklaring under formeln (N)' },
        { typ: 'text', text: 'Provtext före ett långt uttryck som ska stå på en rad.' },
        { typ: 'formel', uttryck: '(a · 10ᵐ) · (b · 10ⁿ) = (a · b) · 10ᵐ⁺ⁿ', forklaring: 'provförklaring till det långa uttrycket' },
        { typ: 'text', text: 'Provtext före mellanleden.' },
        { typ: 'rader', rader: ['v = s / t', 'v · t = s / t · t', '2 · s = a · t²        (provkommentar)'] },
        { typ: 'numrerad', punkter: ['Provsteg ett.', 'Provsteg två.', 'Provsteg tre.'] }
      ]
    },
    {
      // Ett exempel med åtta korta rader fyller mer än 40 % av sidan i alla lägen (raderna följer textstorleken, som
      // följer sidhöjden), och stycket och formeln efter ryms ändå på sidan: grindens negativa prov flyttar formeln
      // från sitt stycke, och då är det ett brott mot regeln (det som står före stycket är inte tunt)
      id: 'formel-efter-exempel', titel: 'Provformel efter ett exempel',
      block: [
        { typ: 'exempel', rubrik: 'Provexempel före formeln', stycken: [['Provrad 1.', 'Provrad 2.', 'Provrad 3.', 'Provrad 4.', 'Provrad 5.', 'Provrad 6.', 'Provrad 7.', 'Svar: Provsvar.']] },
        { typ: 'text', text: 'Provtext före formeln.' },
        { typ: 'formel', uttryck: 'p = m · v', forklaring: 'provförklaring' }
      ]
    },
    {
      id: 'exempel', titel: 'Provexempel',
      block: [
        { typ: 'rubrik', text: 'Provrubrik: ett exempel som ryms' },
        { typ: 'text', text: 'Provtext före exemplet.' },
        { typ: 'exempel', rubrik: 'Provexempel som ryms', stycken: [
          ['En provfråga i exemplet. Hur långt kommer provet på 9,0 s?'],
          ['Givet: v₀ = 0, a = 3,0 m/s². Sökt: s.'],
          ['Lösning: s = a · t² / 2', 's = 3,0 · 81 / 2 ≈ 120 m', 'Svar: Ungefär 120 m.'] ] },
        { typ: 'prova', rader: ['1a. Provuppgift ett.', '1b. Provuppgift två.', '1c. Provuppgift tre.'] },
        { typ: 'rubrik', text: 'Provrubrik: ett exempel som är högre än en sida' },
        { typ: 'text', text: 'Provtext före det långa exemplet.' },
        { typ: 'exempel', rubrik: 'Provexempel som delas', stycken: [
          ['En provfråga i det långa exemplet.'],
          ['Givet: provvärden. Sökt: provsvaret.'],
          ['Lösning:'].concat(Array.from({ length: 44 }, (_, i) => `Steg ${i + 1}: provrad i lösningen.`)),
          ['Svar: Provsvaret.'] ] },
        { typ: 'text', text: 'Provtext efter det långa exemplet.' }
      ]
    },
    {
      // Exempelregeln (arbetsorder 13): ett exempel som ryms på en sida men inte efter avsnittets början och stycket, som
      // då är under 40 % av sidan. Exemplet delas mellan raderna, inte mitt i ett mellanled (en uträkning, eller raden
      // efter en rad som slutar med kolon) och inte före Svar. Grindens negativa prov stänger av regeln
      // (?prova=exempel-helt): då blir sidan med stycket tunn.
      id: 'exempel-fyrtio', titel: 'Provexempel efter ett kort stycke',
      block: [
        { typ: 'text', text: 'Provtext före ett exempel som ryms på en sida, men inte efter det här stycket.' },
        { typ: 'exempel', rubrik: 'Provexempel som delas enligt 40 %-regeln', stycken: [
          ['En provfråga: hur långt kommer provet på 3,0 s?'],
          ['Givet: v₀ = 2,0 m/s, a = 2,0 m/s², t = 3,0 s. Sökt: s.'],
          ['Lösning: Först provhastigheten i slutet:', 'v = 2,0 + 2,0 · 3,0 = 8,0 m/s', 'Sedan provsträckan med s-formeln:',
            's = 2,0 · 3,0 + 2,0 · 3,0² / 2', 's = 6,0 + 9,0 = 15 m', 'Kontroll med medelhastigheten:', 's = (2,0 + 8,0) / 2 · 3,0 = 15 m',
            'Samma provsvar som förut.', 'Provsträckan blir alltså densamma med båda formlerna.', 'Det är rimligt för ett prov som ökar farten.',
            'Svar: 15 m.'] ] }
      ]
    },
    {
      // Punktlistor (arbetsorder 16): en kort lista som ryms (grindens negativa prov ?prova=punktlista-delad delar den)
      // och en lång lista som är högre än sidan och delas mellan punkterna
      id: 'punktlistor', titel: 'Provpunktlistor',
      block: [
        { typ: 'rubrik', text: 'En kort lista ryms på en sida' },
        { typ: 'text', text: 'Provtext före den korta listan.' },
        { typ: 'punkter', punkter: ['Första punkten i den korta listan.', 'Andra punkten i den korta listan.', 'Tredje punkten i den korta listan.'] },
        { typ: 'rubrik', text: 'En lång lista delas mellan punkterna' },
        { typ: 'punkter', punkter: Array.from({ length: 34 }, (_, i) => `Punkt ${i + 1} i den långa provlistan, som är högre än en sida.`) }
      ]
    }
  ]
});
