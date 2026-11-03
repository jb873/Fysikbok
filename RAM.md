# RAM – Fysikboken: bygg innehåll med bokformatet

> Överlämning och ram för fysik-innehållschatten. Bokmotorn är byggd, fryst och verifierad; allt kvar är innehåll.

## Vad det här är
Bokmotorn är **byggd, fryst och verifierad**. Delkapitelsidan matchar plattformen, och fysiken har sin egen färgidentitet. Nu är allt kvar **innehåll**: bygg kapitlet *Kraft och rörelse* (område 3) i bokformatet. Motorn rörs inte.

## Det som finns
- **Bokmotorn `bokskal/`** — fryst, data-driven (delkapitel, nivå, figur, hjälpmedelslänk = bara data). Grind: `verktyg/bok-grind.js`, 0 JS-fel i 1366×768 + helskärm.
- **Delkapitelsidan** byggd efter geografis avsnittssida (`jb873/geografibok`, `delkapitel/geologi/avsnitt-2-plattektonik.html`), i fysikens färger.
- Repetition I och II är byggda ur Joachims granskade texter (se tabellen under Struktur).

## Fysikens profil
- **Bas (delad med alla böcker):** papper `#ece2c8`, bläck `#1b2a36`, Marcellus SC.
- **Accent:** indigo `#4a2d66` + antikt guld `#a07d2f`. Guldnyanser: `--accent-2-mork #6f561c` (text), `--accent-2-ljus #cfae62` (på mörkt).
- **Neutraler = basens delade värden:** muted `#625646`, linjer bläck på låg opacitet (`rgba(27,42,54,0.15–0.2)`), faktaruta `--paper-light` + 7 % indigo-wash. Indigon är fysikens — bär den inte vidare till andra ämnen.

## Struktur
Kapitel → **avsnittssidor** (I, II, …) → **texter A–D** (flikarna, som geografins *Näringslivet*). En avsnittssida är en mapp (ett delkapitel) under kapitlet.

**EN BOK PER TEXT:** `texter: [{id, titel}]` i `delkapitel.js`, och en bok per text och nivå i `innehall/<text>/<nivå>.js`. Nivåer 📗 Enkel · 📘 Standard · 📕 Fördjupning; **Standard byggs först.**

Längden per text avgörs av innehållet. Regel: **innehållsförteckningen ska rymmas på en sida** (32 sidor gick inte, 10–19 går). Blir en text för lång blir den två texter.

Kapitlet *Kraft och rörelse*:

| | Avsnittssida | Texter | |
|---|---|---|---|
| I. | Repetition | A Atomen · B Joner, isotoper och bindningar | byggd |
| II. | Repetition | A Materia · B Densitet och värme · C Värmespridning | byggd |
| III. | Rörelse och kraft | A Rörelse · B Kraft · C Friktion · D Newtons lagar | |
| IV. | Tyngdkraften | A Gravitation och tyngd · B Fall och kast · C Tyngdpunkt och balans | |
| V. | Arbete och energi | A Arbete · B Hävstång och enkla maskiner · C Energi · D Effekt | |
| VI. | Repetition: Ljud och ljus | | |

Repetitionerna finns för att proven omfattar allt eleven gjort tidigare.

## Innehåll
- **Kärndokument → Standard först → Enkel och Fördjupning ur samma kärna → Joachim granskar.**
- **Arbetsgång:** Claude ger innehållsbeskrivning → ChatGPT skriver → Claude faktakollar och bearbetar (kortar inte, behåller rubriker) → samlad källfil med begrepp och figurer → Code.
- **Sidtitlar är PÅSTÅENDEN** – eleverna läser rubrikerna för att veta vad de ska lära sig.
- **Huvudtexten i sammanhållna stycken** (3–5 meningar), inga punktlistor.
- Huvudtexten numreras bara när en bok har två eller fler avsnitt.
- **Det eleverna tycker är svårt** (missuppfattningar) får egna stycken med konkreta exempel.
- **ENKEL PACKAR UPP, KORTAR INTE:** samma fakta, fler steg emellan, vardag före begrepp, formler i ord före symboler, räkneexempel ett led i taget, samma figurer som Standard. Ofta bokens längsta nivå.

## Figurer (`bokskal/figurer.js`)
`aggregationsformer` · `flyter_sjunker` · `varmeflode` · `kraftpilar` · `skalmodell`.

En ny figurtyp är en ny funktion i `figurer.js` (utbyggnad av motorn) – rita i kod, inte AI-bilder, när antal eller läge är innehållet. Planerade: **rörelsespår** (likformig / accelererande / retarderande), **kraftpar** (Newtons tredje lag).

## Arbetsrutiner
- **Ingen git:** säkerhetskopior i `C:\Users\jb\Documents\Fysik-backup\` före och efter varje order.
- **Skärmbilder** i `Fysik/verktyg/bilder/<order>/`, aldrig i Temp.
- **Gamla versioner** av innehåll till `Fysik/Arkiv/`.

## Konventioner (ram)
- **Hubb → öppna → stäng:** en text öppnar boken i **helskärm**; ✕ Stäng/Esc/bakåt återvänder, boken minns sidan.
- **Flikar:** Föreläsning · Läs · Öva · Elevboken. Självskattning och Begreppsbank på **kapitelnivå** som resurs-kort.
- **Läsning:** texten flödar och motorn bryter sidorna; mjuk idéregel – en rubrik börjar ny sida om mindre än en tredjedel av sidan är kvar; krymp aldrig texten; funktionella figurer bara där en riktning bär betydelse — fysikens kraftpilar OK; inga dekorativa symboler.
- Texten flödar; sidnummer används inte – hänvisa till rubriker.
- **Rollout:** område 3 i nya formatet nu. Områden 1 (Materia och Universum) och 2 (Ljud och ljus) ligger kvar i gamla formatet, retrofittas senare.

## Kända luckor
- **Kapitelindex för Kraft och rörelse** finns inte än → brödsmulorna är text, inte länkar, och Självskattning/Begreppsbank har ingen plats. Bygg kapitelindexet med dess resurs-kort.
- **Hjälpmedlen** (Föreläsning/Öva/Elevboken, Självskattning, Begreppslista) står som "kommer" tills fysikens finns.
- **Begreppslänkarna:** plattformens riktiga adressformat, inte `{begrepp}`.
- **Test på riktig Chromebook** – allt är emulerat.

## Första uppgiften
Nästa avsnittssida är III. Rörelse och kraft: innehållsbeskrivningar → texter → figurtyperna rörelsespår och kraftpar.

## Rör inte
- Motorn utan arbetsorder. Motorn är utbyggd två gånger 2026-11 (skalmodell, en bok per text); varje utbyggnad görs via egen order och grinden.
- De andra böckerna.
