/* Avsnittssidan II. Repetition – materia, densitet och värme (Fysik · Kraft och rörelse, område 3), med texterna
 * A Materia, B Densitet och värme och C Värmespridning, en bok per text. Bara data; motorn är bokskal/. Fälten
 * beskrivs i Fysik/README.md. Utkastet från 2026-10-29 (en bok) ligger i Fysik/Arkiv/materia_repetition/. */
Bok.delkapitel({
  id: 'fysik-materia-repetition',             // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: [{ text: 'Fysik', href: '../../index.html' },            // brödsmulorna länkar till startsidan
           { text: 'Kraft och rörelse', href: '../index.html' }], // och till kapitelindexet
  nummer: 2,                                 // brödsmulan "2. Repetition" och etiketten "Avsnitt II"
  titel: 'Repetition',
  undertitel: 'materia, densitet och värme',  // bannerns rad: "— materia, densitet och värme —"
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },
  kapitel: '../kapitel.js',                  // kapitlets gemensamma data: omslaget (överrad, titel, illustration)
  omslag: { undertitel: 'Repetition: {text}' },   // omslagets undertitel; {text} blir textens namn

  // Texterna A–C: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig.
  texter: [
    { id: 'materia', titel: 'Materia' },
    { id: 'densitet-och-varme', titel: 'Densitet och värme' },
    { id: 'varmespridning', titel: 'Värmespridning' }
  ],

  // Nivåerna är plattformens (📗 Enkel · 📘 Standard · 📕 Fördjupning). Enkel och Fördjupning är tomma än och visas
  // som "kommer".

  // Plattformens hjälpmedel. Föreläsning, Öva och Elevboken är flikarna på delkapitlets sida; Öva, Självskattning och
  // Begreppslista länkas också inifrån boken. Fysikens finns inte än: utan adress är de synliga, märkta "kommer" och
  // inte klickbara. {begrepp}, {avsnitt} och {niva} i adressen fylls i där länken står.
  hjalpmedel: {
    forelasning:    { href: null },
    ova:            { href: null },
    sjalvskattning: { href: null },
    begreppslista:  { href: null },
    elevbok:        { href: null }
  }
});
