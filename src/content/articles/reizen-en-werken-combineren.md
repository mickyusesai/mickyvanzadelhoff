---
title: "Reizen en werken combineren in 2026 – 16 manieren hoe jij dit kunt doen"
description: "Reizen en werken combineren in 2026: 16 manieren, van digital nomad tot working holiday, met actuele visa, lonen en platforms en een reisbudget-calculator."
date: 2018-05-05
updated: 2026-09-20
category: "digitalenomaden"
slug: "reizen-en-werken-combineren"
lang: "nl"
draft: false
featuredImage: "/images/headers/reizen-en-werken-combineren.webp"
---

**Reizen en werken combineren**, hoe doe je dat zonder een gigantische spaarpot? Ik schreef dit artikel in 2018, toen ik zelf net een paar jaar als digital nomad leefde en vanuit een koffietentje in Thailand of een appartement in Servië mijn geld verdiende. Inmiddels heb ik in 53 landen gewerkt en gereisd, is daar [een gratis boek](/boek/) uit voortgekomen en train ik bedrijven in Nederland in AI. Maar de vraag waarmee mensen me nog steeds mailen is dezelfde: hoe combineer je reizen en werken?

In dit artikel vind je zestien manieren. Eén ervan is online werken achter je laptop, de andere vijftien doe je gewoon op de plek van bestemming: in een hostel, op een boerderij in Australië, als au pair, als reisleider of als muzikant. Per manier lees je wat het oplevert, wat de voorwaarden in 2026 zijn en wat ik er zelf of via anderen van heb meegemaakt. Onderaan staat een rekenhulp waarmee je uitrekent hoe lang je met jouw spaargeld onderweg kunt blijven.

Er is sinds 2018 veel veranderd. Corona maakte thuiswerken normaal, meer dan zestig landen hebben inmiddels een speciaal visum voor mensen die op afstand werken, het Europese vrijwilligersprogramma EVS heet nu Europees Solidariteitskorps en een working holiday in Australië kost twee keer zoveel als toen. Alle cijfers in dit artikel heb ik op 20 september 2026 gecontroleerd. Wat ik niet meer kon controleren, heb ik weggehaald.

<div class="tool not-prose" id="reizen-budget">
<p class="tool__title">Reken uit hoe lang je onderweg kunt blijven</p>
<p class="tool__intro">Vul je spaargeld in, wat je onderweg per maand verdient en wat je per maand uitgeeft. De uitkomst rekent direct mee.</p>
<div class="tool__grid">
<label class="tool__field">Spaargeld bij vertrek (€)<input class="tool__input" id="reizen-spaar" type="number" min="0" step="100" value="5000"></label>
<label class="tool__field">Verdiensten onderweg per maand (€)<input class="tool__input" id="reizen-inkomen" type="number" min="0" step="50" value="600"></label>
<label class="tool__field">Uitgaven per maand (€)<input class="tool__input" id="reizen-uitgaven" type="number" min="0" step="50" value="1200"></label>
<label class="tool__field">Vliegticket terug (€)<input class="tool__input" id="reizen-ticket" type="number" min="0" step="50" value="700"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Zo lang kun je weg</p><p class="tool__value" id="reizen-maanden">7 maanden</p><p class="tool__sub" id="reizen-maanden-sub">tot je spaargeld op is, ticket terug apart gehouden</p></div>
<div class="tool__result"><p class="tool__label">Verschil per maand</p><p class="tool__value" id="reizen-verschil">− € 600</p><p class="tool__sub" id="reizen-verschil-sub">wat je per maand van je spaargeld snoept</p></div>
</div>
<p class="tool__note">Rekenvoorbeeld, geen belofte. Een hostelbaan of house sit haalt de uitgaven omlaag; een working holiday of online werk haalt de verdiensten omhoog. Verdien je meer dan je uitgeeft, dan kun je in principe eindeloos door.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var nl = function (n) { return '€ ' + new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 }).format(Math.abs(n)); };
  function calc() {
    var spaar = +$('reizen-spaar').value || 0, ink = +$('reizen-inkomen').value || 0,
        uit = +$('reizen-uitgaven').value || 0, ticket = +$('reizen-ticket').value || 0;
    var verschil = ink - uit, pot = spaar - ticket;
    if (pot <= 0) {
      $('reizen-maanden').textContent = '0 maanden';
      $('reizen-maanden-sub').textContent = 'je spaargeld dekt het ticket terug nog niet';
    } else if (verschil >= 0) {
      $('reizen-maanden').textContent = 'Onbeperkt';
      $('reizen-maanden-sub').textContent = 'je verdient onderweg minstens wat je uitgeeft';
    } else {
      var m = Math.floor(pot / -verschil);
      $('reizen-maanden').textContent = m + (m === 1 ? ' maand' : ' maanden');
      $('reizen-maanden-sub').textContent = 'tot je spaargeld op is, ticket terug apart gehouden';
    }
    $('reizen-verschil').textContent = (verschil < 0 ? '− ' : '+ ') + nl(verschil);
    $('reizen-verschil-sub').textContent = verschil < 0 ? 'wat je per maand van je spaargeld snoept' : 'wat je per maand overhoudt';
  }
  ['reizen-spaar', 'reizen-inkomen', 'reizen-uitgaven', 'reizen-ticket'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
</script>

## 1. Word digital nomad en combineer werken en reizen

Omdat dit voor mij jarenlang dé manier was om reizen en werken te combineren, begin ik hier. Ik verdiende mijn geld met bloggen en affiliate marketing, volledig locatie-onafhankelijk. Soms vanuit een koffietentje in Thailand, soms vanuit mijn appartement in Servië. Ik had Nederlandse klanten en Nederlandse tarieven, en leefde in landen waar het leven een stuk goedkoper was. Dat verschil is de hele truc.

Digital nomads heb je in alle soorten en maten. Je kunt als digital nomad werken als **programmeur, webdesigner, online marketeer, schrijver, fotograaf, videograaf, social media manager, blogger, online coach of vertaler** en nog [tal van andere jobs](/blog/digitalenomaden/digital-nomad-banen/). Sinds corona komt daar een grote groep bij die ik in 2018 nog nauwelijks tegenkwam: mensen in loondienst die van hun werkgever een paar maanden per jaar op afstand mogen werken.

Wat ook nieuw is: **visa voor digital nomads**. In 2018 reisde iedereen op een toeristenvisum en deed alsof hij op vakantie was. Inmiddels hebben meer dan zestig landen een speciale regeling. Binnen de EU heb je daar als Nederlander niets aan, want je mag er sowieso wonen en werken; de veelbesproken nomadenvisa van Spanje en Portugal zijn bedoeld voor mensen van buiten Europa. Buiten de EU wordt het wel interessant:

*   **Thailand** heeft sinds 15 juli 2024 het Destination Thailand Visa (DTV): vijf jaar geldig, 180 dagen per binnenkomst (eenmalig te verlengen), 10.000 baht en je moet 500.000 baht op je rekening laten zien.
*   **Japan** heeft sinds april 2024 een nomadenvisum voor zes maanden, maar eist een jaarinkomen van minstens 10 miljoen yen. Nederland staat op de lijst van landen die mogen aanvragen.
*   **Zuid-Korea, Taiwan, Maleisië, Indonesië en de Filipijnen** hebben er inmiddels ook een.

Werk je langer dan een paar maanden vanuit het buitenland, lees dan ook [hoe belasting werkt als digital nomad](/blog/digitalenomaden/digital-nomad-belasting/); daar kom ik onderaan dit artikel nog op terug. Wil je weten hoe je online een inkomen opbouwt, begin dan bij [mijn stappenplan voor een eigen blog](/blog/ondernemen/blog-beginnen-starten-stappenplan/) of lees hoe je [digital nomad wordt](/blog/digitalenomaden/digital-nomad-worden/).

Genoeg over online werken. Laten we snel doorgaan met de manieren waarop je niet online, maar op de plek van bestemming je geld verdient.

## 2. Werken in een hostel

Veel backpackers overnachten in hostels, en als je dat zelf ook wel eens doet zul je vaak zien dat er enkele internationale 'vrijwilligers' werken.

Het hostel heeft er namelijk baat bij dat het personeel goed Engels spreekt zodat de gasten **zich welkom voelen**. Veel hostels bieden daarom enkele plekken aan vrijwilligers die de Engelse taal beheersen, in ruil voor een slaapplek, eten en drinken, een goede sfeer en soms ook wat zakgeld.

![Een hostelreceptie met een backpack, sleutels aan haakjes en een wereldkaart](/images/spots/reizen-hostel.webp "Werken in een hostel: een bed en eten in ruil voor een paar uur achter de balie")

Zeker wanneer je voor langere tijd ergens wilt blijven kan dit een manier zijn om geen cent uit te hoeven geven. Het werken in een hostel biedt je tevens de perfecte sfeer om veel mensen te ontmoeten en beetje bij beetje ook de lokale taal te leren. Je werkt tenslotte samen met de (vaak) lokale eigenaar van het hostel.

Zelf heb ik best veel in hostels geslapen en daar kwam ik deze werkstructuur vaak tegen. Wel met verschillende uitkomsten: de één vond het geweldig, de ander ging na een week gillend naar huis. Doorslaggevend was eigenlijk altijd de sfeer in het hostel. Past die sfeer wel bij jou? Vind je het bijvoorbeeld leuk om 24/7 met mensen te praten en biertjes te drinken, **of ben je misschien wat meer introvert?**

Veel mensen die vrijwilliger worden bij een hostel waren daar eerst te gast. Op die manier weet je ook zeker dat het hostel bij je past. Soms zul je even moeten vragen of ze een plek voor je hebben, maar heel vaak staat dit al aangegeven. Wil je vooraf zoeken, dan zijn er twee platforms die hier groot in zijn geworden: **Worldpackers** (59 dollar per jaar) en **Workaway** (69 dollar per jaar sinds januari 2026). Je betaalt dus voor het lidmaatschap, niet per plek. Goede hostels om als gast te beginnen vind je uiteraard op Hostelworld.

## 3. Engelse les geven op reis

Wanneer je goed Engels kan, kun je natuurlijk ook gaan werken als docent Engels ([of als vertaler](/blog/online-geld-verdienen/online-vertalen/)). Op veel plekken zijn ze al blij als iemand kan helpen bij de eerste stappen in de Engelse taal en gaat het dus nog **niet gelijk over de moeilijkste grammar** ;).

> Vooral in Taiwan is veel vraag naar mensen die Engelse les kunnen geven. Daar zijn dan ook clubjes ontstaan van internationale mensen die daar Engels doceren. Een leuke combi, want daardoor heb je een soort internationaal clubje mensen die hetzelfde doen als jij waardoor je je sneller thuis zult voelen.

Ter indicatie: de privé-taalscholen in Taiwan (buxibans) betalen in 2026 zo'n 50.000 tot 75.000 Taiwanese dollar per maand, en een TEFL-certificaat is daar geen harde eis, al helpt een cursus van 120 uur bij het solliciteren. Let wel: voor een officiële werkvergunning stellen veel landen eisen aan je diploma en soms aan je nationaliteit. Zoek dat uit vóór je een ticket boekt.

Engels doceren is niet iets wat je zomaar even voor een maand kunt doen. Tenminste niet als je **van waarde wilt zijn** voor de lokale bevolking. Deze manier om werken en reizen te combineren gaat dan ook veelal per jaar.

De verhalen die ik hoor van mensen die in Taiwan Engelse les geven zijn enorm positief. Vaak leren ze daarmee ook zelf de taal van het land en hebben ze **het gevoel écht iets bij te dragen**. Kijk daarbij wel uit voor oplichting, zodat je uiteindelijk niet op een plek komt te werken waar je voor moet betalen (ja, dat soort dingen komen voor…).

## 4. Vrijwilligerswerk in het buitenland via het Europees Solidariteitskorps

Toen ik dit artikel schreef heette dit nog EVS, European Voluntary Service. Sinds 2018 heet het **Europees Solidariteitskorps** en het idee is hetzelfde gebleven: je gaat vrijwillig aan de slag bij een organisatie in een ander Europees land, en Europa betaalt.

Concreet: je bent tussen de 18 en 30 jaar, een project duurt van twee weken tot twaalf maanden, en vergoed worden **je reis, je verblijf, je eten, een verzekering, taalles en zakgeld** voor persoonlijke uitgaven. Je registreert je op het portaal van het Solidariteitskorps en organisaties met een passend project kunnen contact met je opnemen, of je zoekt zelf.

Op deze manier wil de EU maatschappelijke organisaties helpen meer voor de samenleving te betekenen, en tegelijk wil ze dat jij internationale ervaring opdoet en je meer 'Europeaan' voelt.

> Een goede optie dus voor als je je tijd nuttig wilt besteden en een nieuwe plek wilt ontdekken. Zelf hoor ik er alleen maar positieve ervaringen over.

Er is een breed scala aan organisaties waar je aan de slag kunt. De basis is dat het een maatschappelijk belang nastreeft binnen Europa. Het soort werk hangt dus volledig af van de organisatie en de plek die je uitkiest. Vaak duurt zo'n project een half jaar en beheersen deelnemers na dat half jaar de taal van het land. Ook over de mensen die ze binnen het project ontmoeten zijn deelnemers erg te spreken.

## 5. Erasmus+ training of jongerenuitwisseling

Er is nog een aanvulling op de vorige manier. Buiten vrijwilligerswerk in het buitenland betaalt Europa via Erasmus+ ook **internationale trainingen en jongerenuitwisselingen**. Zelf heb ik aan een aantal meegedaan en zo zijn veel van mijn internationale vriendschappen ontstaan.

Zo ben ik naar Zweden, Servië, Roemenië, Turkije en Hongarije geweest voor trainingsweken over integratie, digitaal ondernemen, klimaat, muziek en netwerken. Hier heb ik enorm veel uit geleerd en veel mooie herinneringen aan overgehouden. De andere deelnemers aan deze weken **kwamen uit 35 verschillende landen!**

Interessant aan deze weken is dat Erasmus+ ze volledig vergoedt: je reis, verblijf, eten, drinken en uitjes. Jongerenuitwisselingen zijn voor deelnemers van 13 tot 30 jaar, trainingen voor jongerenwerkers hebben geen bovengrens. Je doet altijd mee via een organisatie, niet op eigen houtje; de trainingen staan in de Europese kalender van SALTO-YOUTH.

Grappig hoe dingen lopen: inmiddels coördineer ik zelf Erasmus+-projecten en bouwde ik met EasyReimburse een tool waarmee organisaties de reiskosten van deelnemers afhandelen. Hoe je je aanmeldt, welke voorwaarden eraan zitten en meer over mijn ervaringen [vind je hier](/blog/tips/erasmus-plus-training/).

<aside class="cta-box cta-box--book not-prose"><div><p class="cta-box__eyebrow">Gratis boek</p><p><strong>Dé inspiratie voor een vrij leven.</strong> Alle verhalen en lessen uit zes jaar reizen en online werken staan in mijn boek. Gratis en direct te downloaden, geen e-mail nodig.</p></div><a class="btn btn-primary" href="/boek/">Download het boek</a></aside>

## 6. Working holiday: handarbeid in Australië, Canada of Nieuw-Zeeland

Misschien was dit wel het **eerste waar je aan dacht** toen je begon te zoeken naar manieren om werken en reizen te combineren. Ik heb tal van verhalen gehoord van mensen die in Australië, Nieuw-Zeeland of Canada waren om daar te werken. Zij vroegen een working holiday-visum aan en zochten ter plekke naar werk, vaak in de landbouw, de horeca of op een boerderij. Gewoon simpele jobs, vaak handarbeid.

![Een mand met geplukte appels en werkhandschoenen in een boomgaard](/images/spots/reizen-boomgaard.webp "Een working holiday: fruit plukken in Australië betaalt in 2026 minstens 26,44 Australische dollar per uur")

Zo zien de regelingen er in 2026 uit voor Nederlanders:

| Land | Visum | Leeftijd | Duur | Kosten en voorwaarden |
|---|---|---|---|---|
| Australië | Working Holiday (subclass 417) | 18 t/m 30 | 12 maanden | AUD 840 sinds 1 juli 2026; max. 6 maanden bij één werkgever; tweede jaar na 88 dagen werk in een regionaal gebied (AUD 1.000) |
| Nieuw-Zeeland | Working Holiday Visa | 18 t/m 30 | 12 maanden | Minimaal NZD 4.200 op je rekening; leges wisselen per jaar, check de fee calculator van Immigration New Zealand |
| Canada | International Experience Canada (Working Holiday) | 18 t/m 30 | 12 maanden | Minimaal CAD 2.500 bij aankomst; loting via de IEC-pool, het seizoen 2026 opende op 19 december 2025 |

Gecontroleerd op 20 september 2026. In alle drie de landen geldt je leeftijd op het moment van aanvragen, dus dien vóór je 31e in.

Omdat deze landen welvarend zijn, krijg je voor dat soort werk goede verdiensten (als je het vergelijkt met Nederland). In Australië is het minimumloon sinds 1 juli 2026 **26,44 Australische dollar per uur**, en als 'casual' medewerker zonder vakantiedagen zelfs 33,05 dollar. Het is dan ook een goede manier om deze landen te ontdekken, want met een Nederlands salaris zijn het dure landen.

> Wel heb ik veel mensen over dit soort werk horen praten als in een zure realiteit. De landen zijn namelijk zo duur dat je aan je werk niet veel overhoudt. Geen illusies dus over snel rijk worden.

Houd er tevens rekening mee dat het goed is om wat geld achter de hand te hebben (Nieuw-Zeeland en Canada eisen dat zelfs). Je zult niet de eerste zijn die niet binnen een paar weken werk vindt. **Het werk is daarbij erg seizoensgebonden.** Met een spaarpotje voorkom je dat je in een van die verre landen blut bent.

## 7. Proppen of een cocktail maken in het buitenland

Werken in het buitenland kan natuurlijk ook achter de bar of als propper voor bijvoorbeeld een discotheek. Dit is erg seizoensgebonden werk, maar wanneer je in het juiste jaargetijde komt smeken ze om mensen zoals jij.

Denk hierbij vooral aan bestemmingen die voor jongeren populair zijn als je je kans op succes wilt vergroten. Ik doel dan op plekken als **Albufeira, Lloret de Mar, Blanes, Sunny Beach, Ibiza, Chersonissos of Rimini**. Of wanneer je liever ver weg gaat, **een eiland als Koh Phangan**, al is bij die laatste wél het hele jaar door werk te vinden.

Om werk als propper of bartender te doen moet je natuurlijk wel sociaal zijn en enkele talen spreken. Ook zijn sales skills altijd handig. Misschien dat dat studentenbaantje als abonnementenverkoper dan toch nog van pas komt ;).

## 8. House sitting of huizenruil overal ter wereld

Mijn ouders hebben het wel eens gedaan om geld te besparen op hun vakantie: house sitting. Je verblijft dan gratis in het huis van iemand anders die zelf op reis is. De dienst die daar tegenover staat is meestal dat je op de huisdieren past en de planten water geeft. Op die manier **kun je verblijven in de mooiste villa's** in het buitenland.

Het grootste platform hiervoor is **TrustedHousesitters**. Als oppasser betaal je in 2026 een jaarlidmaatschap van 129 tot 259 dollar, en bij de goedkopere abonnementen komt daar per sit nog 12 dollar boekingskosten bij. Dat verdien je met één week in een huis waar je anders een hotel voor had betaald ruimschoots terug.

Een andere mogelijkheid die hierop aansluit is huizenruil. Hierbij ruil je letterlijk je huis met dat van iemand anders. Vaak vind je aanbiedingen hiervoor in relevante **Facebookgroepen** of op een **platform voor huizenruil**. Zo kun je in ieder geval ergens gratis verblijven en de plek ontdekken.

Andere opties voor gratis verblijven zijn dingen als Couchsurfing, maar meer daarover vind je bij [de blog over gratis de wereld rond reizen](/blog/tips/wereldreis-maken-zonder-geld/).

## 9. Internationaal oppassen

Vind je het leuk om op kinderen te passen? Dan is dit wat voor jou. Je komt te wonen bij een gezin om daar mee te helpen met het verzorgen van de kinderen, beter bekend als **au pair**. In ruil voor het oppassen krijg je kost, inwoning en zakgeld.

Zelf ken ik iemand die zo'n nannybedrijf heeft en zij vertelde mij dat de meeste gezinnen die vragen naar een au pair, het zal je niet verbazen, best rijk zijn. De ouders werken veel en een fulltime oppas is dan handig.

Om je een idee te geven van de spelregels: een au pair die naar Nederland komt mag maximaal 30 uur per week werken, verdeeld over vijf dagen, en krijgt maximaal 340 euro zakgeld per maand plus kost, inwoning en een verzekering. Andere landen hebben vergelijkbare regels. Een gezin vinden doe je via platforms als AuPairWorld of via een bemiddelingsbureau.

Oppassen kan natuurlijk ook zonder dat je in het huis woont van het kind waar je op past. Zo was mijn zusje van plan om een half jaar op Malta te wonen. Zij heeft toen in Facebookgroepen van Malta **vermeld dat ze graag zou werken als oppas**. Binnen no time had ze een plek gevonden waar ze vier dagen in de week kon oppassen.

Daar kreeg ze goed genoeg voor betaald om haar tijd op Malta te bekostigen. Het gezin waarvoor ze oppaste was zelf internationaal en Engels was dan ook de voertaal. Zo kun jij ook internationaal gaan oppassen.

## 10. Steward(ess) worden en werken terwijl je reist

Een van de meest voor de hand liggende manieren om reizen en werken te combineren is natuurlijk door als piloot of stewardess te gaan werken. Groot nadeel is dat je daar niet zomaar in rolt. Gezien een pilotenopleiding erg lang duurt, praat ik graag met je verder over de optie cabin attendant.

> Om stewardess te worden hoef je niet eerst een aparte opleiding te doen. Bij KLM kun je solliciteren als je minimaal 21 jaar bent, een havo- of mbo-4-diploma hebt, tussen de 1,58 en 1,90 meter lang bent, 50 meter kunt zwemmen en vloeiend Nederlands en Engels spreekt. KLM leidt je daarna zelf op. De selectie is streng, want het werk brengt veel verantwoordelijkheid mee.

Meer vliegmaatschappijen hebben zulke regelingen. Een lekker leventje lijkt me: je vliegt naar de andere kant van de wereld en krijgt alles vergoed terwijl je daar verblijft. Dit is dan ook een populaire keuze voor jonge mensen die (nog) geen gezin hebben.

![Uitzicht vanuit een vliegtuigraam met een koffiekopje op het tafeltje](/images/spots/reizen-vliegtuigraam.webp "Cabin attendant: de wereld zien terwijl je werkt")

Het wordt ook vaak gezien als een job die je juist doet in die periode van je leven. Maar ik heb ook een stewardess gesproken die zegt: "**Eens een stewardess, altijd een stewardess. Je wordt verliefd op het vak en het reizen en ik kan dat niet loslaten.**" Toen ik haar sprak deed ze het werk al 15 jaar en was ze op bijna iedere plek ter wereld geweest.

## 11. Campingwerk in het buitenland

Een andere manier om in het buitenland te werken is campingwerk. Je werkt dan als animatiemedewerker of receptionist. Wat dit werk kenmerkt is dat het enorm seizoensgebonden is. Veel campings in Frankrijk zitten **maar een paar weken per jaar écht vol**, en dat is vaak ook de enige periode dat ze extra hulpkrachten zoals jou zoeken. De grote animatiebureaus vragen meestal dat je minimaal zes tot acht weken beschikbaar bent, liefst heel juli en augustus.

Wanneer je die periode prima vindt is het een leuke bezigheid. Je krijgt kost en inwoning en wordt natuurlijk ook betaald. Ter indicatie: Toukaï, een van de grootste animatiebureaus voor Franse campings, adverteert in 2026 met een salaris tot 2.005 euro per maand. Al weet ik uit ervaring dat het loon voor dit soort werk aan de onderkant nogal kan tegenvallen…

## 12. Werken en reizen combineren als reisleider

Je kunt natuurlijk ook andere mensen hun reizen **verzorgen en begeleiden**. Je gaat dan mee als reisleider met een groep reizigers. Hiervoor zul je gewoon moeten solliciteren bij een reisorganisatie. Maar weet, voordat je daaraan begint, dat die functie best populair is.

Zo kreeg ik ooit mee dat de reisleiders van Beachmasters (jongerenreizen) werden uitgekozen tijdens een sollicitatieweekend. Beachmasters valt inmiddels met GOGO onder Sunweb, en de werving voor alle drie de merken begint elk jaar in december met een selectiedag; wie wordt aangenomen krijgt in april of mei een training van vijf dagen. Het werk zelf is super sociaal en er wordt van je verwacht dat je lange nachten maakt ;). Maar uiteraard **zijn er genoeg andere reisorganisaties te bedenken**, van wandelreizen tot groepsrondreizen.

## 13. Free city tours geven

Je kent ze wellicht, de hordes mensen die een (persoon met) paraplu achtervolgen in een populaire toeristische bestemming. **Het zijn de mensen die een free tour geven.**

> Mensen die met een free tour meegaan, mogen achteraf zelf beslissen wat ze de tour waard vinden. Je werkt dus op basis van een fooi. Op platforms als GuruWalk ligt die fooi meestal tussen de 5 en 20 euro per persoon.

Zelf ontmoette ik iemand in Sarajevo, een man van 50 die iedere paar maanden op een andere plek woont. Hij vindt geschiedenis interessant en verdiept zich vooraf erg in de stad waar hij naartoe gaat.

Hij koppelt zijn historische kennis vervolgens aan plekken in de stad en geeft tours aan mensen die daarin geïnteresseerd zijn. Een erg interessante manier van werken als je het mij vraagt. Een groepje van twintig man met een fooi van een tientje per persoon en je kunt weer even vooruit op je bestemming. Let wel op de lokale regels: steeds meer steden eisen een gidsvergunning of beperken groepsgroottes.

## 14. Sportactiviteiten organiseren en begeleiden

**Werken terwijl je reist naar de mooiste skigebieden?** Of vind je mountainbiken leuker? Hoe dan ook, als sportdocent op een vakantiebestemming kun je mensen begeleiden bij allerlei soorten sporten. Enige ervaring is hiervoor natuurlijk wel handig, maar het vereist niet altijd een diploma. Vooral praktische ervaring is van belang.

Natuurlijk zijn ook deze jobs vrij seizoensgebonden, maar als je er twee combineert kun je zo **in de winter én de zomer aan de slag.**

## 15. De wereld over cruisen

In een prachtig cruiseschip over de wereld varen. Het kan als je er gewoon op gaat werken. Je kunt werken in een van de restaurants, als kok, badmeester, het kan van alles zijn **als het cruiseschip het maar heeft.**

Ter indicatie: voor horeca- en bedieningsfuncties ligt het salaris meestal tussen de 1.000 en 2.500 euro bruto per maand, en daar komen kost en inwoning aan boord gratis bovenop. Contracten lopen vaak per reis of per een aantal maanden achter elkaar.

Je moet wel een beetje van de zee houden, maar dan is het ook puur genieten. Leuk is ook dat je zelf op het cruiseschip waarschijnlijk weinig uitgeeft, en je dus flink spaart met dit soort trips. Als het schip aan land komt kun je daar nog even genieten van de bestemming voordat het weer vertrekt.

## 16. Als muzikant de wereld over reizen

Talent is vereist, maar om wat muzikale optredens in het buitenland te scoren hoef je niet wereldberoemd te zijn of drie albums te hebben uitgebracht.

> Zelf speelde ik gitaar op podia in Servië, Hongarije en Thailand, en draaide ik als dj in Spanje. Deze boekingen regelde ik vaak pas als ik daar was door gewoon naar binnen te stappen bij bars en clubs. Heel veel vergoeding kreeg ik daar niet voor, maar ik kan mij zo voorstellen dat je er met wat extra inzet best van kunt leven. Misschien zelfs als straatmuzikant?

Ik ben ook bevriend met een onbekende band die **iedere zomer langs de campings in Frankrijk toert**. Ze hebben deze campings zelf benaderd en gevraagd of ze in ruil voor hun optredens geld kunnen krijgen om de reis te bekostigen. Nu gaan ze ieder jaar zes weken op 'muziekvakantie'.

## Zo veranderde reizen en werken sinds ik dit schreef

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">2018</p><p class="timeline__title">Toeristenvisum en een laptop</p><p class="timeline__text">Digital nomads reizen op toeristenvisa en doen alsof ze op vakantie zijn. Het Europese vrijwilligerswerk EVS gaat op in het Europees Solidariteitskorps.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2020</p><p class="timeline__title">Corona maakt thuiswerken normaal</p><p class="timeline__text">Kantoren gaan dicht, Zoom wordt standaard. Wat eerst een rare hobby van bloggers was, wordt ineens beleid bij grote werkgevers.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">2022 – 2023</p><p class="timeline__title">Europa opent nomadenvisa</p><p class="timeline__text">Portugal en Spanje lanceren visa voor mensen die op afstand werken. Voor Nederlanders overbodig, maar het signaal is duidelijk: landen concurreren om remote workers.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">2024</p><p class="timeline__title">Azië volgt</p><p class="timeline__text">Japan (april) en Thailand (juli) krijgen een nomadenvisum, Zuid-Korea en Indonesië ook. Thailand telt binnen een jaar tienduizenden aanvragen.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">2025</p><p class="timeline__title">Duurder, maar meer keus</p><p class="timeline__text">Working holiday-visa en platforms als Workaway worden duurder. Tegelijk zijn er meer dan zestig landen met een regeling voor remote werk.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">6</span><p class="timeline__year">2026 – nu</p><p class="timeline__title">Reizen en werken is gewoon geworden</p><p class="timeline__text">Van hostelvrijwilliger tot werknemer op afstand: de keuze is groter dan ooit. Zelf werk ik vanuit Nederland en train ik bedrijven in AI, met het reizen als bagage.</p></li>
</ol>

## Alle 16 manieren op een rij

| Manier | Verdien je eraan? | Seizoen | Past bij jou als… |
|---|---|---|---|
| 1. Digital nomad | Ja, jouw eigen tarief | Hele jaar | je online werk hebt of wilt opbouwen |
| 2. Hostelwerk | Nee, kost en inwoning | Hele jaar | je sociaal bent en langer wilt blijven |
| 3. Engelse les | Ja, lokaal salaris | Per schooljaar | je minimaal een jaar wilt blijven |
| 4. Solidariteitskorps | Nee, alles vergoed plus zakgeld | Hele jaar | je 18 t/m 30 bent en iets wilt bijdragen |
| 5. Erasmus+ training | Nee, alles vergoed | Hele jaar, per week | je korte, intensieve weken zoekt |
| 6. Working holiday | Ja, minimumloon of meer | Seizoensgebonden | je 18 t/m 30 bent en fysiek werk niet schuwt |
| 7. Bar of proppen | Ja, laag | Zomer | je van nachtleven houdt |
| 8. House sitting | Nee, gratis verblijf | Hele jaar | je van dieren houdt en flexibel bent |
| 9. Au pair | Zakgeld plus kost en inwoning | Hele jaar | je goed met kinderen bent |
| 10. Cabin attendant | Ja, salaris | Hele jaar | je een vaste baan met reizen wilt |
| 11. Campingwerk | Ja, laag tot gemiddeld | Zomer | je zes tot acht weken vrij bent |
| 12. Reisleider | Ja, laag tot gemiddeld | Zomer | je energie voor groepen hebt |
| 13. Free tours | Fooi | Hele jaar | je van geschiedenis en vertellen houdt |
| 14. Sportinstructeur | Ja | Winter en zomer | je een sport goed beheerst |
| 15. Cruiseschip | Ja, plus kost en inwoning | Per contract | je maanden aan boord wilt zijn |
| 16. Muzikant | Wisselend | Hele jaar | je talent en lef hebt |

## Vacatureplatform voor werken in het buitenland

Zoeken naar **werk in het buitenland** kan soms lastig zijn. Gelukkig zijn er online platforms waar je tal van vacatures vindt. Het platform dat ik in dit artikel jarenlang aanraadde, Grenzelooswerk, heet inmiddels **[Yobbers](https://www.yobbers.com/nl/)**. Het is gratis voor werkzoekenden en bemiddelt vooral bij banen van zes tot twaalf maanden in Portugal, Spanje, Griekenland, Malta en Bulgarije: klantenservice, sales, marketing, ook zonder ervaring. Je krijgt een eigen recruiter en hulp bij het vinden van woonruimte.

## Belasting, verzekering en uitschrijven: regel dit vóór je gaat

Dit stuk stond niet in de eerste versie van dit artikel, en dat was een fout. Drie dingen die ik iedereen aanraad om vóór vertrek uit te zoeken:

*   **Uitschrijven of niet.** Blijf je in een periode van twaalf maanden meer dan acht maanden in het buitenland, dan moet je dat bij je gemeente melden en word je uitgeschreven uit de Basisregistratie Personen. Zonder Nederlands adres kun je geen eenmanszaak bij de KVK aanhouden, dus voor digital nomads met een eigen bedrijf is dit een grote beslissing.
*   **Zorgverzekering.** Werk je grotendeels buiten Nederland, dan vervalt je recht op de Nederlandse basisverzekering, ook als je nog ingeschreven staat. Dan heb je een internationale ziektekostenverzekering nodig. Een gewone doorlopende reisverzekering dekt vaak alleen kortere reizen; check de maximale reisduur in je polis.
*   **Belasting.** Waar je belasting betaalt hangt af van waar je fiscaal woont, niet van waar je laptop staat. Alles daarover lees je in [mijn artikel over belasting als digital nomad](/blog/digitalenomaden/digital-nomad-belasting/).

## Conclusie reizen en werken combineren

Er zijn genoeg opties om te werken terwijl je reist, en de meeste vragen geen spaarpot maar lef. Voor mij was de laptop jarenlang de sleutel, en die manier is in 2026 makkelijker dan ooit: werkgevers zijn gewend aan werken op afstand en landen rollen de rode loper uit.

Alle verhalen over hoe dat er in de praktijk uitzag, van een fietstocht naar Turkije tot werken vanuit Servië, staan in [mijn gratis boek](/boek/). Wil je zelf online geld verdienen, begin dan bij [mijn stappenplan om een blog te beginnen](/blog/ondernemen/blog-beginnen-starten-stappenplan/). En kies je voor een van de andere vijftien manieren? Laat me weten hoe het gaat.
