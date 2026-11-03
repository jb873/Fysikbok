/* Avsnittssidan I. Repetition – atomen, joner och bindningar (Fysik · Kraft och rörelse, område 3), med texterna
 * A Atomen och B Joner, isotoper och bindningar, en bok per text. Bara data; motorn är bokskal/. Fälten beskrivs i
 * Fysik/README.md. */
Bok.delkapitel({
  id: 'fysik-atomen-repetition',              // nyckeln för det eleven sparat (sida, nivå) – byt det aldrig
  amne: 'Fysik',
  smulor: ['Fysik', 'Kraft och rörelse'],
  nummer: 1,                                  // brödsmulan "1. Repetition" och etiketten "Avsnitt I"
  titel: 'Repetition',
  undertitel: 'atomen, joner och bindningar', // bannerns rad: "— atomen, joner och bindningar —"
  overrad: 'Fysik · Kraft och rörelse',       // över titeln på bokens första sida
  upphov: { namn: 'Joachim Björkman', ar: 2026 },

  // Texterna A och B: var och en en egen bok per nivå, i innehall/<text-id>/<nivå>.js. id är nyckeln för det eleven
  // sparat – byt det aldrig.
  texter: [
    { id: 'atomen', titel: 'Atomen' },
    { id: 'joner-isotoper-bindningar', titel: 'Joner, isotoper och bindningar' }
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
