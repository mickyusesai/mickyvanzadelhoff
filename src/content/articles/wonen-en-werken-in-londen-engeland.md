---
title: "Wonen en werken in Londen in Engeland – Tips voor de digital nomad"
description: "Wonen en werken in Londen als digital nomad in 2026: ETA en paspoort, live pondkoers, wat een maand kost, coworking, cafés en mijn eigen Peckham-tips."
date: 2018-11-06
updated: 2026-09-20
category: "digitalenomaden"
slug: "wonen-en-werken-in-londen-engeland"
lang: "nl"
draft: false
featuredImage: "/images/headers/wonen-en-werken-in-londen-engeland.webp"
---

**Wonen en werken in Londen als [digital nomad](/blog/digitalenomaden/digital-nomad-worden/), hoe is dat?** In 2018 mocht ik eindelijk, na al die jaren, over het zebrapad van Abbey Road lopen. De hoofdstad van Engeland klonk altijd vrij elitair in mijn oren: klassieke boekhandeltjes, dure koffiezaakjes en heel veel Beatles- en Harry Potter-verwijzingen. Daar zit een kern van waarheid in, maar de stad heeft veel meer kanten. Ze deed me op sommige plekken zelfs denken aan [Berlijn](/blog/digitalenomaden/wonen-en-werken-in-berlijn-duitsland/).

Sinds mijn bezoek is er voor Nederlanders wel het een en ander veranderd. Door de Brexit ben je in Londen geen EU-burger meer, maar een bezoeker: sinds 2 april 2025 heb je een digitale reistoestemming (ETA) nodig en sinds 8 april 2026 kost die 20 pond. De prijzen zijn flink gestegen en mijn favoriete vegan café bestaat niet meer. In dit artikel lees je wat je in 2026 moet regelen voordat je gaat, wat een maand Londen kost (met een rekentool en de live pondkoers), waar je goed kunt werken, hoe je mensen leert kennen en wat ik zelf het leukst vond. Ik woonde jaren als digital nomad in Europa en Azië; tegenwoordig train ik bedrijven in AI, maar de vragen over Londen blijven binnenkomen.

<div class="live-stats not-prose" id="londen-live" data-fallback-date="18 september 2026">
<div class="live-stats__tile"><p class="live-stats__label">1 euro is nu</p><p class="live-stats__value" data-live="eur-gbp">£ 0,86</p><p class="live-stats__sub">Britse pond, koers van de ECB</p></div>
<div class="live-stats__tile"><p class="live-stats__label">1 pond is nu</p><p class="live-stats__value" data-live="gbp-eur">€ 1,16</p><p class="live-stats__sub">wat je eigenlijk betaalt</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Een pint van £ 7</p><p class="live-stats__value" data-live="pint">€ 8,15</p><p class="live-stats__sub">gemiddelde prijs in een pub (Numbeo)</p></div>
<div class="live-stats__tile"><p class="live-stats__label">OV-dagplafond zones 1–2</p><p class="live-stats__value" data-live="cap">€ 10,36</p><p class="live-stats__sub">£ 8,90 per dag met contactless (TfL 2026)</p></div>
<p class="live-stats__note" data-live="note">Koers van 18 september 2026 (1 euro = 0,8588 pond). Zodra de pagina geladen is, wordt hij ververst via de ECB-koers van Frankfurter.</p>
</div>

<script>
(function () {
  var box = document.getElementById('londen-live'); if (!box || !window.fetch) return;
  var q = function (k) { return box.querySelector('[data-live="' + k + '"]'); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n); };
  fetch('https://api.frankfurter.dev/v1/latest?from=EUR&to=GBP').then(function (r) { return r.json(); }).then(function (res) {
    var rate = res.rates.GBP; if (!rate) return;
    q('eur-gbp').textContent = '£ ' + nl(rate, 2);
    q('gbp-eur').textContent = '€ ' + nl(1 / rate, 2);
    q('pint').textContent = '€ ' + nl(7 / rate, 2);
    q('cap').textContent = '€ ' + nl(8.9 / rate, 2);
    q('note').textContent = 'Live ECB-koers via Frankfurter van ' + res.date.split('-').reverse().join('-') + ' (1 euro = ' + nl(rate, 4) + ' pond).';
    var field = document.getElementById('londen-rate');
    if (field) { field.value = rate.toFixed(4); var ev = document.createEvent('Event'); ev.initEvent('input', true, true); field.dispatchEvent(ev); }
  }).catch(function () { /* fallback numbers stay */ });
})();
</script>

## Wat er sinds 2018 veranderd is voor Nederlanders

Toen ik in Londen was, liep ik met mijn ID-kaart door de douane en dacht ik nergens over na. Dat is voorbij. De tijdlijn hieronder laat zien wat er stap voor stap is veranderd, want dit is het eerste waar je in 2026 rekening mee moet houden.

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">Juni 2016</p><p class="timeline__title">Brexit-referendum</p><p class="timeline__text">Een krappe meerderheid stemt voor vertrek uit de EU. Jarenlang verandert er voor reizigers nog niets.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2018</p><p class="timeline__title">Mijn maanden in Londen</p><p class="timeline__text">Ik reis nog als EU-burger: ID-kaart mee, geen limiet op mijn verblijf, werken zoals ik wil.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">31 januari 2020</p><p class="timeline__title">Het VK verlaat de EU</p><p class="timeline__text">Er volgt een overgangsjaar waarin vrij verkeer van personen nog geldt tot en met 31 december 2020.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">1 januari 2021</p><p class="timeline__title">Einde vrij verkeer</p><p class="timeline__text">Nederlanders worden bezoekers: maximaal zes maanden per keer, geen baan bij een Britse werkgever.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">2 april 2025</p><p class="timeline__title">ETA verplicht voor EU-burgers</p><p class="timeline__text">Een digitale reistoestemming vooraf, eerst voor 10 pond, vanaf 9 april 2025 voor 16 pond.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">6</span><p class="timeline__year">8 april 2026</p><p class="timeline__title">ETA kost 20 pond</p><p class="timeline__text">Twee jaar geldig, meerdere bezoeken van maximaal zes maanden. Dit is de situatie op het moment van schrijven.</p></li>
</ol>

## Praktisch: ETA, paspoort en werken als bezoeker

![Een paspoort naast een telefoon met een groen vinkje](/images/spots/londen-eta-paspoort.webp "De ETA vraag je aan in de app, met je paspoort erbij")

Regel dit voordat je een ticket boekt, anders sta je op Schiphol of in Rotterdam bij de Eurostar-poortjes met een probleem:

- **Paspoort.** Je hebt een geldig paspoort nodig. Een Nederlandse ID-kaart wordt alleen nog in uitzonderingsgevallen geaccepteerd, dus neem daar geen risico mee.
- **ETA (Electronic Travel Authorisation).** Verplicht voor Nederlanders sinds 2 april 2025. Je vraagt hem aan via de app 'UK ETA' of gov.uk, hij kost sinds 8 april 2026 **20 pond** en is twee jaar geldig (of tot je paspoort verloopt). Je mag er meerdere keren mee naar het VK, telkens maximaal zes maanden. Nederland Wereldwijd adviseert om hem minimaal drie dagen voor vertrek aan te vragen.
- **Werken als bezoeker.** Als bezoeker mag je op afstand werken voor je Nederlandse klanten of werkgever, zolang dat niet het hoofddoel van je bezoek is. In dienst gaan bij een Brits bedrijf of je door een Britse partij laten betalen mag niet. Voor een digital nomad met Nederlandse opdrachtgevers is dat prima; wie Britse klanten wil binnenhalen, heeft een werkvisum nodig.
- **Verzekering.** Je Nederlandse basisverzekering dekt in het buitenland lang niet alle ziekenhuiskosten en geen repatriëring. Sluit een goede reisverzekering af die dat wel doet.
- **Belasting.** Blijf je langer weg dan een paar maanden, lees dan eerst [hoe belasting werkt als digital nomad](/blog/digitalenomaden/digital-nomad-belasting/). Waar je woont voor de Belastingdienst bepaal je niet met een ETA.

> Londen is een van de drukst bezochte steden ter wereld en dus druk en duur. Ga als digital nomad niet in het hoogseizoen. Buiten de zomermaanden is het rustiger en goedkoper, en dat scheelt in Londen echt honderden euro's per maand.

## Mensen leren kennen in Londen als digital nomad

Hoe je mensen leert kennen in Londen is voor iedereen verschillend, maar het was voor mij lastiger dan in andere steden. Engelsen houden een bepaalde afstand tot buitenlanders, merkten ik en andere nomaden die ik sprak. Een gesprek aanknopen lukt prima, maar je gesprekspartner draait zich net zo makkelijk weer terug naar zijn eigen vriendengroep. Diepere vriendschappen kosten hier tijd. Als je genoeg probeert, kom je altijd like-minded mensen tegen.

Coworkingspaces, koffiezaakjes en markten werken overal, maar er is één wijk waar het mij het makkelijkst afging: **Peckham**, in het zuiden. Kunstzinnig, multicultureel, met een paar fijne koffiezaakjes en heel veel plekken waar mensen samenkomen. Als buitenlander heb je hier sneller een klik.

![Een dakterras op een parkeergarage met lichtjes en de skyline](/images/spots/londen-dakterras-peckham.webp "Het dak van de parkeergarage in Peckham: gratis uitzicht over Londen")

> Ga bijvoorbeeld naar **Frank's Cafe**, de bar op het dak van een oude parkeergarage aan Rye Lane. Het hoort bij Bold Tendencies, een kunstprogramma dat het dak sinds 2007 gebruikt; in 2026 vierden ze hun twintigste seizoen. Het dak is gratis toegankelijk (vol is vol), Frank's is open van half mei tot half september, woensdag tot en met zondag van 11 tot 23 uur, en je kunt er alleen met kaart betalen. Het uitzicht over de stad bij zonsondergang is het beste gratis uitje van Londen.

En loop ook even binnen bij de **South London Gallery** aan Peckham Road, waar sinds 1891 hedendaagse kunst hangt. De tentoonstellingen zijn gratis; open op woensdag van 12 tot 21 uur en donderdag tot en met zondag van 12 tot 18 uur.

## Werken vanuit Londen als digital nomad

Werken vanuit Londen is heerlijk: iedereen spreekt Engels en de stad zit vol authentieke zaakjes waar je met een laptop welkom bent. Je betaalt alleen wel flink voor koffie en lunch (een cappuccino kost gemiddeld 4,27 pond, een simpele maaltijd 20 pond volgens Numbeo). Loop vooral rond: je vindt in elke wijk een plek die bij je past.

Mijn favoriete werkcafé van 2018, het volledig vegan The Canvas Cafe in Shoreditch, is in 2022 gesloten. Wat er nog wel is: **Charlie's Cafe & Bakery** in Wood Green (169 High Road), met een eigen bakkerij, grote tafels en een menukaart waar ook vegan en glutenvrij op staat. Online wordt het nog steeds een 'hidden gem' genoemd, en terecht.

Coworking is in Londen duur, maar er zit sinds een paar jaar meer keuze in de markt. Dit zijn de tarieven die ik op 20 september 2026 op de sites zelf heb gecontroleerd (exclusief 20% btw):

| Coworking | Dagpas | Per maand | Waar |
|---|---|---|---|
| Huckletree (Flex) | vanaf £ 25 | £ 250 | Soho, Oxford Circus, Westminster, Liverpool Street, Kensington |
| Huckletree (Unlimited) | – | £ 350 | zelfde locaties, onbeperkt gebruik |
| Second Home | £ 25 | op aanvraag | Spitalfields en Holland Park |
| Gemiddelde markt (Mindspace-overzicht 2026) | – | £ 200 tot £ 450 | heel Londen |

> Ben je te avontuurlijk om op één vaste plek te werken? Loop dan vooral veel rond. Londen kent zoveel aangename zaakjes dat je er vast één vindt die het beste bij jou aansluit. Dat is het voordeel van een grote westerse stad ;)

## Genieten van vrije tijd in Londen

Er is zoveel te doen in Londen dat het ligt aan waar je op uit bent. De London Eye, de Big Ben en de Tower of London kun je afvinken, maar die vind ik zelf best saai. Dit is mijn voorgekauwde bucketlist met de prijzen van 2026:

1. **De Ghost Bus Tour.** Een zwarte bus uit de jaren zestig neemt je 75 minuten mee langs de spookachtige plekken van de stad, terwijl acteurs alle gekke verhalen erbij vertellen. Griezelig, maar vooral grappig. Vertrek na zonsondergang vanaf 8 Northumberland Avenue in Westminster, 25 pond per volwassene.
2. **Warner Bros. Studio Tour: The Making of Harry Potter.** Voor de fans bijna verplicht: de sets, rekwisieten en kostuums staan er allemaal. 58,50 pond voor een volwassene, en je reist er nog naartoe (het ligt bij Watford).
3. **Sherlock Holmes.** Het museum op 221B Baker Street kost 19 pond en is dagelijks open van 9:30 tot 18 uur. Wil je het rustiger aanpakken, ga dan naar de Sherlock Holmes-pub tegenover het vertrekpunt van de Ghost Bus.
4. **Abbey Road.** Het zebrapad is gratis en het bordje op de hoek wordt nog steeds volgeschreven door Beatles-fans. Voor mij het moment waarop ik dacht: ik ben er echt.
5. **Thee bij Sketch.** Het designtheehuis in Mayfair waar de muren vol schetsen hangen. Wel even sparen: de afternoon tea in The Gallery begint bij 85 pond per persoon. Ik ging voor één luxe middag, en die was het waard.

## Wonen in Londen als digital nomad

Ik hoef het eigenlijk niet meer te zeggen, maar Londen heeft een van de hoogste huurprijzen ter wereld. Volgens Numbeo (19 september 2026) betaal je voor een eenkamerappartement in het centrum gemiddeld 2.155 pond per maand en daarbuiten 1.720 pond. Dat straalt af op Airbnb's en hostels, dus als je krap bij kas zit, ga je niet in de zomer.

### Airbnb

Een heel appartement voor jezelf is in Londen een luxe geworden. Volgens AirDNA lag de gemiddelde prijs van een geboekte Airbnb-nacht in Londen in 2026 op 234 dollar, omgerekend zo'n 200 pond. Een privékamer bij iemand thuis is goedkoper, en in het laagseizoen vind je die buiten zone 1 nog voor een redelijke prijs. Het fijne van een eigen plek blijft dat je een dag thuis kunt werken of kunt bijslapen na een lange werkdag.

### Hostels

Hostels zijn in Londen nog steeds de goedkoopste oplossing én de makkelijkste manier om internationale mensen te leren kennen. Op Hostelworld beginnen dorm-bedden in september 2026 bij zo'n 19 tot 33 dollar per nacht (omgerekend 17 tot 29 pond); in de zomer en rond feestdagen loopt dat volgens Hostelz op tot 35 à 50 pond. Veel mensen verdwijnen in hostels weer snel, maar soms bouw je juist daar een sterke band op met iemand. Dat geeft balans. Zo ervaar ik dat tenminste altijd. Just a tip ;)

## Wat kost een maand Londen in 2026?

![Stapels pond- en euromunten op een tafel met een weegschaal](/images/spots/londen-pond-munt.webp "Reken in ponden, denk in euro's: dat scheelt in Londen zo'n 16 procent")

De cijfers hieronder komen van Numbeo (bijgewerkt op 19 september 2026, 435 bijdragers in het afgelopen jaar), Transport for London, Hostelworld en de coworkingsites hierboven. Gecontroleerd op 20 september 2026.

| Kostenpost | Prijs in pond | Bron |
|---|---|---|
| Hostelbed, laagseizoen | £ 17 – £ 29 per nacht | Hostelworld |
| Hostelbed, zomer | £ 35 – £ 50 per nacht | Hostelz |
| Eenkamerappartement, centrum | £ 2.155 per maand | Numbeo |
| Eenkamerappartement, buiten centrum | £ 1.720 per maand | Numbeo |
| Coworking, hot desk | £ 200 – £ 450 per maand | Huckletree, Mindspace |
| Maaltijd in een goedkoop restaurant | £ 20 | Numbeo |
| Cappuccino | £ 4,27 | Numbeo |
| Pint bier in de pub | £ 7 | Numbeo |
| OV, dagplafond zones 1–2 | £ 8,90 | TfL |
| OV, maandkaart zones 1–2 | £ 172 | Numbeo |
| Internet thuis | £ 31 per maand | Numbeo |
| Levensonderhoud zonder huur (Numbeo-schatting) | £ 1.061 per maand | Numbeo |

Reken je eigen maand uit. De koers wordt automatisch ingevuld zodra de pagina de live koers heeft opgehaald, maar je mag hem ook zelf aanpassen.

<div class="tool not-prose" id="londen-calc">
<p class="tool__title">Reken uit wat een maand Londen jou kost</p>
<p class="tool__intro">Vul je eigen cijfers in ponden in; de uitkomst rekent direct om naar euro's.</p>
<div class="tool__grid">
<label class="tool__field">Nachten in Londen<input class="tool__input" id="londen-nights" type="number" min="1" step="1" value="30"></label>
<label class="tool__field">Prijs per nacht (£)<input class="tool__input" id="londen-night-price" type="number" min="0" step="1" value="30"></label>
<label class="tool__field">Dagen in een coworking<input class="tool__input" id="londen-cowork-days" type="number" min="0" step="1" value="8"></label>
<label class="tool__field">Dagpas coworking (£)<input class="tool__input" id="londen-cowork-price" type="number" min="0" step="1" value="25"></label>
<label class="tool__field">Eten en drinken per dag (£)<input class="tool__input" id="londen-food" type="number" min="0" step="1" value="30"></label>
<label class="tool__field">Vervoer per dag (£)<input class="tool__input" id="londen-transport" type="number" min="0" step="0.1" value="8.9"></label>
<label class="tool__field">Koers: ponden per euro<input class="tool__input" id="londen-rate" type="number" min="0.01" step="0.0001" value="0.8588"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Totaal in ponden</p><p class="tool__value" id="londen-total-gbp">£ 2.267</p><p class="tool__sub">voor de ingevulde periode</p></div>
<div class="tool__result"><p class="tool__label">Totaal in euro's</p><p class="tool__value" id="londen-total-eur">€ 2.640</p><p class="tool__sub" id="londen-per-day">€ 88 per dag</p></div>
</div>
<p class="tool__note">Rekenvoorbeeld met de gemiddelden uit de tabel, geen belofte. Uitjes, simkaart en verzekering komen er nog bij.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var ids = ['londen-nights', 'londen-night-price', 'londen-cowork-days', 'londen-cowork-price', 'londen-food', 'londen-transport', 'londen-rate'];
  var fmt = function (sym, n) { return sym + ' ' + new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 }).format(n); };
  function calc() {
    var nights = +$('londen-nights').value || 0, price = +$('londen-night-price').value || 0;
    var cd = +$('londen-cowork-days').value || 0, cp = +$('londen-cowork-price').value || 0;
    var food = +$('londen-food').value || 0, tr = +$('londen-transport').value || 0;
    var rate = +$('londen-rate').value || 0.8588;
    var gbp = nights * price + cd * cp + nights * (food + tr);
    var eur = gbp / rate;
    $('londen-total-gbp').textContent = fmt('£', gbp);
    $('londen-total-eur').textContent = fmt('€', eur);
    $('londen-per-day').textContent = fmt('€', nights ? eur / nights : 0) + ' per dag';
  }
  ids.forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
</script>

Het is een dure stad, maar Londen biedt ook oplossingen. Spreek je goed Engels en ben je goed in je vak, dan is het de moeite waard om Britse bedrijven aan te schrijven voor opdrachten die je vanuit Nederland uitvoert. Als bezoeker mag je namelijk niet in dienst treden bij een Brits bedrijf of je door een Britse partij laten betalen, dus regel de facturatie en het werk netjes vanuit je Nederlandse bedrijf. Een paar goed betaalde opdrachten maken het leven in Groot-Brittannië simpelweg een stuk aangenamer.

## Conclusie wonen en werken in Londen als digital nomad

Londen is een typische westerse wereldstad: er is enorm veel te doen, van toeristische attracties tot ghost tours, en er zijn artistieke wijken zoals Peckham waar je als buitenlander sneller aansluiting vindt. De stad leeft.

Wel moet je flink wat geld neerleggen om er comfortabel te wonen en te werken, en sinds 2025 regel je vooraf een ETA en neem je je paspoort mee. Wees daarop voorbereid. Maar als je er eenmaal bent, weet ik zeker dat je een toffe tijd gaat hebben.

## Veelgestelde vragen over Londen als digital nomad

### Heb ik als Nederlander een visum nodig voor Londen?

Nee, maar wel een ETA: een digitale reistoestemming die je vooraf aanvraagt via de app 'UK ETA'. Hij kost 20 pond (sinds 8 april 2026), is twee jaar geldig en goed voor meerdere bezoeken van maximaal zes maanden. Neem je paspoort mee; een ID-kaart volstaat in de regel niet meer.

### Mag ik in Londen werken als digital nomad?

Op afstand werken voor je Nederlandse klanten of werkgever mag, zolang het niet het hoofddoel van je bezoek is. Werken voor een Britse werkgever of je laten betalen door een Britse partij mag niet zonder werkvisum.

### Hoeveel geld heb ik nodig voor een maand Londen?

Met een hostelbed, af en toe een coworkingdag en normaal eten kom je volgens de rekentool hierboven al snel op zo'n 2.200 tot 2.600 euro per maand. Een eigen appartement in het centrum kost gemiddeld 2.155 pond per maand aan huur alleen (Numbeo, september 2026).

### Wanneer kan ik het beste naar Londen?

Buiten de zomermaanden. Hostelbedden kosten dan 17 tot 29 pond in plaats van 35 tot 50, Airbnb's zijn goedkoper en het is rustiger op straat en in de cafés.

<aside class="cta-box cta-box--book not-prose"><div><p class="cta-box__eyebrow">Gratis boek</p><p><strong>Dé inspiratie voor een vrij leven.</strong> Alle verhalen en lessen uit zes jaar reizen en online werken staan in mijn boek. Gratis en direct te downloaden, geen e-mail nodig.</p></div><a class="btn btn-primary" href="/boek/">Download het boek</a></aside>
