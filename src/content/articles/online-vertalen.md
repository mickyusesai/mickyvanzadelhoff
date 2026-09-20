---
title: "Geld verdienen met online vertalen in 2026 (en wat AI veranderde)"
description: "Geld verdienen met online vertalen in 2026: actuele tarieven per woord, welke platforms nog bestaan, wat AI met het vak deed en waar nog geld zit."
date: 2018-04-22
updated: 2026-09-19
category: "online-geld-verdienen"
slug: "online-vertalen"
lang: "nl"
draft: false
featuredImage: "/images/headers/online-vertalen.webp"
---

**Wel eens nagedacht over het inzetten van je talenknobbel?** Dan kun je online gaan vertalen en daar geld mee verdienen vanachter je laptop. Een ideale bron van inkomsten als je graag reist of vanuit huis werkt. Zelf vertaal ik niet (ik moet soms nog werken aan mijn eigen spelling), maar ik heb in mijn jaren als online marketeer regelmatig **vertalers ingehuurd voor de webteksten van mijn klanten**. Meestal ging het om een website die ook een Duitse of Engelse doelgroep moest aanspreken.

In dit artikel lees je wat je in 2026 verdient met online vertalen (met actuele tarieven per woord en een rekenhulp), via welke platforms je aan opdrachten komt en welke daarvan sinds mijn vorige versie zijn verdwenen, hoe je zelf klanten vindt, en vooral: wat AI met dit vak heeft gedaan en waar nog wél geld te verdienen valt.

Want laat ik eerlijk zijn: van alle manieren van [online geld verdienen](/blog/online-geld-verdienen/online-geld-verdienen/) die ik beschrijf, is vertalen het hardst geraakt door kunstmatige intelligentie. In 2018 schreef ik dat Google Translate "niet volstaat" voor bedrijven. In 2026 laat een groot deel van die bedrijven hun teksten door AI vertalen en huren ze alleen nog een mens in om het na te kijken. Wie dat weet, kan er nog steeds een goed inkomen mee verdienen. Wie dat negeert, concurreert met een gratis tool.

## Hoeveel geld verdien je met online vertalen in 2026?

Online kun je van alles vertalen: webteksten, blogs, productbeschrijvingen, contracten, rapporten, ondertitels, een manuscript voor een boek. De meeste vertalers rekenen **een tarief per woord**, soms met een minimumbedrag per opdracht.

![Een bureau met twee opengeslagen woordenboeken en een laptop met twee tekstkolommen](/images/spots/vertalen-bureau.webp "Vertalen in 2026: de machine doet de eerste versie, de mens het verschil")

Dit zijn de tarieven die Nederlandse vertaalbureaus en vertalers in 2026 hanteren, gecontroleerd op 19 september 2026:

| Soort vertaalwerk | Tarief per woord | Toelichting |
|---|---|---|
| Standaardvertaling (webtekst, blog, mail) | €0,08 tot €0,20 | Het gros van de opdrachten; de onderkant staat onder druk |
| Specialistisch of beëdigd (juridisch, medisch, technisch) | €0,12 tot €0,25 | Vraagt vakkennis of een inschrijving in het Rbtv |
| Post-editing van een AI-vertaling | €0,02 tot €0,05 | Nakijken en corrigeren van machinevertaling; ongeveer de helft van een gewone vertaling |
| Uurtarief (bij werk per uur) | €30 tot €40 | Wat freelance vertalers gemiddeld rekenen als ze niet per woord werken |

De trend is duidelijk. Vertalers vertelden de NOS in september 2024 dat het gangbare tarief van 12 cent per woord naar 10 cent was gezakt en richting 8 cent werd gedrukt, terwijl hun kosten juist stegen. "De tarieven kelderen", en AI is de hoofdschuldige. Het nakijken van AI-vertalingen betaalt de helft, maar kost bij een slechte machinevertaling bijna evenveel tijd.

Aan de bovenkant is er weinig veranderd: een juridische of medische vertaler met specialisatie, of een beëdigd vertaler, verdient nog altijd €0,15 tot €0,25 per woord. Bij een blog van 800 woorden gaat het dan om ruim €100; bij een handleiding van 20.000 woorden om enkele duizenden euro's. Reken zelf uit wat een opdracht je oplevert en wat dat per uur betekent:

<div class="tool not-prose" id="vertalen-calc">
<p class="tool__title">Reken uit wat een vertaalopdracht je oplevert</p>
<p class="tool__intro">Vul de omvang, je woordtarief en je tempo in; de uitkomst rekent direct mee.</p>
<div class="tool__grid">
<label class="tool__field">Aantal woorden in de opdracht<input class="tool__input" id="vertalen-woorden" type="number" min="0" step="100" value="2000"></label>
<label class="tool__field">Tarief per woord (€)<input class="tool__input" id="vertalen-tarief" type="number" min="0" step="0.01" value="0.10"></label>
<label class="tool__field">Woorden die je per uur vertaalt<input class="tool__input" id="vertalen-tempo" type="number" min="1" step="50" value="350"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Opbrengst van de opdracht</p><p class="tool__value" id="vertalen-bedrag">€ 200</p><p class="tool__sub">exclusief btw</p></div>
<div class="tool__result"><p class="tool__label">Effectief uurtarief</p><p class="tool__value" id="vertalen-uur">€ 35</p><p class="tool__sub">bij dit tempo</p></div>
</div>
<p class="tool__note">Rekenvoorbeeld, geen belofte. Een ervaren vertaler haalt bij een gewone tekst zo'n 300 tot 400 woorden per uur; bij post-editing ligt het tempo hoger, maar het tarief per woord is 2 tot 5 cent.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var nl = function (n) { return '€ ' + new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 }).format(n); };
  function calc() {
    var woorden = +$('vertalen-woorden').value || 0, tarief = +$('vertalen-tarief').value || 0, tempo = +$('vertalen-tempo').value || 0;
    var bedrag = woorden * tarief, uur = tempo > 0 ? tarief * tempo : 0;
    $('vertalen-bedrag').textContent = nl(bedrag); $('vertalen-uur').textContent = nl(uur);
  }
  ['vertalen-woorden', 'vertalen-tarief', 'vertalen-tempo'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
</script>

Speel even met het tarief en je ziet het probleem van het vak: bij 8 cent per woord en 350 woorden per uur verdien je €28 per uur bruto, als zzp'er. Bij 15 cent is dat €52. Het verschil zit niet in harder werken, maar in het soort opdrachten dat je aanneemt.


<aside class="cta-box cta-box--book not-prose"><div><p class="cta-box__eyebrow">Gratis boek</p><p><strong>Dé inspiratie voor een vrij leven.</strong> Alle verhalen en lessen uit zes jaar reizen en online werken staan in mijn boek. Gratis en direct te downloaden, geen e-mail nodig.</p></div><a class="btn btn-primary" href="/boek/">Download het boek</a></aside>


## Wat AI met het vertaalvak deed

Om te snappen waar je in 2026 instapt, is het goed om te zien hoe snel het is gegaan. Twintig jaar geleden was machinevertaling een grap; nu speelt het een rol in de meerderheid van de opdrachten.

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">2006</p><p class="timeline__title">Google Translate</p><p class="timeline__text">Gratis en voor iedereen, maar de vertalingen zijn zo krom dat professionele vertalers er niet wakker van liggen.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2017</p><p class="timeline__title">DeepL</p><p class="timeline__text">Een Duits bedrijf levert voor het eerst machinevertalingen die leesbaar zijn. Vertaalbureaus beginnen met 'post-editing': de machine vertaalt, de mens corrigeert.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">2018 – 2019</p><p class="timeline__title">De platforms worden opgekocht</p><p class="timeline__text">TextMaster gaat naar Acolad (2018), Gengo naar Lionbridge (2019). De vertaalmarktplaatsen van mijn eerste versie van dit artikel worden onderdelen van grote vertaalconcerns.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">November 2022</p><p class="timeline__title">ChatGPT</p><p class="timeline__text">Vertalen wordt een bijzaak van een chatbot. Bedrijven ontdekken dat een korte mail of productbeschrijving 'goed genoeg' uit de machine komt.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">September 2024</p><p class="timeline__title">"De tarieven kelderen"</p><p class="timeline__text">Nederlandse vertalers vertellen de NOS dat het woordtarief van 12 naar 10 cent zakte en richting 8 cent gaat. Een Duits-vertaler ziet gewoon vertaalwerk teruglopen van 70% naar 18% van haar opdrachten.</p></li>
<li class="timeline__item"><span class="timeline__num">6</span><p class="timeline__year">2025</p><p class="timeline__title">Elf procent minder vertalers</p><p class="timeline__text">Het Europese ELIS-onderzoek telt 11% minder actieve vertalers dan een jaar eerder (in 2024 was de daling nog 3%). Bij zo'n 60% van de opdrachten speelt automatische vertaling of post-editing een rol.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">7</span><p class="timeline__year">2026 – nu</p><p class="timeline__title">Specialist of nakijker</p><p class="timeline__text">Wie generieke teksten vertaalt, concurreert met een gratis tool. Wie een vakgebied, een beëdiging of creatief werk heeft, en AI als gereedschap gebruikt, verdient nog altijd goed.</p></li>
</ol>

Wat betekent dit voor jou als je in 2026 begint? Drie dingen. Ten eerste: **kies een specialisatie**. Juridisch, medisch, technisch, financieel of marketing (waar de toon belangrijker is dan de letterlijke vertaling) betalen nog steeds goed. Ten tweede: **gebruik AI zelf**. Een vertaler die DeepL of ChatGPT als eerste versie gebruikt en zijn eigen kwaliteit erbovenop legt, werkt twee keer zo snel als een collega die alles uittypt. Ten derde: **zoek je eigen klanten**. Bij vertaalbureaus en marktplaatsen is de prijsdruk het grootst; bij een eigen klant die jou vertrouwt, bepaal jij het tarief.

## Hoe krijg je opdrachten als online vertaler?

Geld verdienen met vertalen begint bij klanten. Je zult op zoek moeten naar bedrijven die websites, boeken en documenten vertaald willen hebben, of zorgen dat die bedrijven jou vinden. Dat laatste gebeurt pas als je een tijdje bezig bent en klanten je naam doorgeven. In het begin richt je je dus op actief werven of op een platform. Hieronder de manieren die in september 2026 nog werken; de lijst uit mijn vorige versie heb ik flink opgeschoond.

### 1. Gengo (Lionbridge)

Gengo is sinds 2019 onderdeel van Lionbridge en bestaat nog steeds. Het platform werkt met meer dan 70 talencombinaties en ruim 21.000 goedgekeurde vertalers; je maakt een gratis account aan en doet een tweedelige test voordat je opdrachten mag aannemen. Je wordt per opdracht betaald, en het bedrag staat vooraf bij elke klus; Gengo zegt zelf dat het inkomen per taal verschilt, afhankelijk van de vraag. Handig om te beginnen en om een portfolio op te bouwen, niet om van te leven.

### 2. Upwork en Fiverr

Upwork is een breed freelanceplatform waar geregeld vertaalopdrachten voorbijkomen. Je ziet vooraf wat een opdracht oplevert, maar je concurreert wereldwijd, dus een goed profiel en een paar voorbeelden zijn essentieel. Upwork houdt een variabel percentage van 0 tot 15% in per contract; op Fiverr, waar je jezelf als 'gig' aanbiedt, is dat een vaste 20%. Beide platforms zijn vol met aanbieders die AI-vertalingen doorverkopen, dus onderscheid je op specialisatie en moedertaalniveau.

### 3. TextMaster (Acolad)

TextMaster hoort sinds 2018 bij de Acolad-groep en werkt nog steeds met freelance vertalers via app.textmaster.com. Ook hier doe je eerst een test. Het aanbod bestaat vooral uit webteksten, productbeschrijvingen en marketingcontent voor bedrijven, precies het soort werk waar AI de prijs drukt. Zie het als instroom, niet als bestemming.

### 4. Zelf bedrijven benaderen

Wil je zelf bepalen voor wie je vertaalt en meer verdienen, dan benader je bedrijven rechtstreeks. Denk aan een website die je tegenkwam vol spelfouten of kromme vertalingen. [Stuur dat bedrijf een acquisitiemail](/blog/ondernemen/acquisitie-mail-voorbeeld1/) waarin je één alinea laat zien hoe het beter kan. Je zult niet de eerste zijn die zo aan klanten komt. Nederlandse webshops die naar Duitsland of België uitbreiden zijn een dankbare doelgroep: een Duitse klant vergeeft geen automatische vertaling.

### 5. Wees zichtbaar en gebruik je netwerk

Voor vrijwel alle diensten die ik zelf afneem, kijk ik eerst in mijn netwerk, en voor vertaalwerk deed ik dat ook. Zorg dus dat mensen wéten dat je vertaalt: een simpele website met je talen, specialisatie en een paar voorbeelden, en een LinkedIn-profiel dat hetzelfde zegt. Vertel het tegen mensen die je tegenkomt en voor je het weet gaat **het balletje rollen**. Netwerk is goud.

### 6. Beëdigd vertaler worden

Voor officiële documenten (diploma's, aktes, contracten voor de rechtbank) is een beëdigde vertaling verplicht, en die mag alleen worden gemaakt door een vertaler die is ingeschreven in het Register beëdigde tolken en vertalers (Rbtv), beheerd door Bureau Wbtv namens het ministerie van Justitie en Veiligheid. Dat vraagt een aangetoond taalniveau en een opleiding of toets, maar het is het deel van de markt waar AI niets mag en waar de tarieven het hoogst zijn. Als je vertalen serieus als vak wilt, is dit de route.

### 7. Online taalles geven

Je hoeft niet per se teksten te vertalen als je een talenknobbel hebt. Ik zie met regelmaat digital nomads die hun geld verdienen door online Engels of Nederlands te geven. Op Preply bepaal je zelf je tarief en houdt het platform bij nieuwe docenten 33% in, wat daalt naar 18% bij veel lesuren; italki houdt 15% in; Cambly betaalt een vast bedrag van $0,17 per minuut ($10,20 per uur) maar regelt de leerlingen voor je. Nederlands als tweede taal is een niche met veel vraag en weinig aanbod.

### 8. Ondertitelen en taalwerk voor AI

Twee aanverwante routes die nog betalen. Rev betaalt freelancers $0,70 tot $1,10 per audiominuut voor het ondertitelen in een andere taal, na een toelatingstest. En de AI-bedrijven zelf hebben mensen nodig die vertalingen beoordelen en taaldata annoteren: Appen doet dat via zijn platform CrowdGen in honderden talen. Het is instapwerk tegen instaptarieven, maar het leert je precies waar de machine nog fouten maakt, en dat is kennis die je bij je eigen klanten kunt verkopen.

Van de lijst met dertien websites uit mijn vorige versie zijn er meerdere overgenomen (VerbalizeIt door Smartling, Pacific Interpreters door LanguageLine) of niet meer gericht op freelance vertalers. Die heb ik weggehaald; wat hierboven staat, heb ik in september 2026 gecontroleerd.

![Een brug van letters tussen twee oevers](/images/spots/vertalen-brug.webp "Een goede vertaler bouwt de brug; de machine levert de stenen")

## Platforms voor vertalers op een rij

| Platform | Wat het inhoudt | Wat je vooraf moet doen |
|---|---|---|
| Gengo (Lionbridge) | Betaling per opdracht, tarief vooraf zichtbaar | Gratis account en tweedelige test |
| Upwork | 0% tot 15% commissie per contract | Profiel met voorbeelden |
| Fiverr | 20% van elke order | Een 'gig' aanmaken |
| TextMaster (Acolad) | Betaling per woord voor webcontent | Test bij aanmelding |
| Preply (taalles) | 33% commissie, dalend tot 18% | Profiel en proefles |
| Italki (taalles) | 15% commissie | Profiel en video |
| Cambly (taalles) | Vast $0,17 per minuut | Aanmelding, geen eigen werving nodig |
| Rev (ondertiteling) | $0,70 tot $1,10 per audiominuut | Toelatingstest |
| Rbtv (beëdigd) | Geen commissie, eigen tarieven | Inschrijving via Bureau Wbtv |

Gecontroleerd op 19 september 2026. Bedragen in dollars gelden voor de Amerikaanse platforms; je wordt in dollars uitbetaald.

## Het grote nadeel van vertalen via het internet

Ik schreef het hierboven al, maar het verdient een eigen kopje: **de markt voor gewone vertalingen krimpt**. Elf procent minder vertalers in één jaar, tarieven die van 12 naar 8 cent zakten, en klanten die een AI-vertaling 'goed genoeg' vinden voor een mail met fouten. Wie in 2026 instapt om generieke webteksten te vertalen, begint een race naar de bodem tegen een tegenstander die gratis is.

Tegelijk is er een andere kant. Zestig procent van de opdrachten heeft een mens nodig die de machine controleert. Juridische, medische en financiële teksten mogen niet fout zijn. Marketingteksten moeten klínken, en dat kan een machine nog niet in een taal die ze niet aanvoelt. En een beëdigde vertaling mag simpelweg niet door AI worden gemaakt. Daar zit het werk, en daar zitten de tarieven.

Mijn advies als je hieraan begint: behandel vertalen niet als bijbaan waarbij je woorden omzet, maar als vak waarin je een specialisme opbouwt. Combineer het met taalles, ondertiteling of copywriting in je tweede taal, zodat je niet van één soort opdracht afhankelijk bent. En gebruik AI elke dag, zodat jij degene bent die weet wat het wel en niet kan. Voor wie dat doet, is vertalen nog altijd een van de manieren om locatie-onafhankelijk geld te verdienen. Voor wie dat niet doet, is het dat niet meer.

## Veelgestelde vragen over online vertalen

### Moet ik een vertaalopleiding hebben?

Voor platforms als Gengo, Upwork en TextMaster niet; daar doe je een test. Voor beëdigd vertaalwerk wel: inschrijving in het Rbtv vraagt een aangetoond taalniveau en een erkende opleiding of toets. Voor eigen klanten telt vooral je portfolio en je moedertaalniveau in de doeltaal.

### In welke taal moet ik vertalen?

Altijd náár je moedertaal. Een Nederlander vertaalt dus Engels-Nederlands of Duits-Nederlands, niet andersom. Engels, Duits en Frans zijn de meest gevraagde combinaties met Nederlands; voor kleinere talen is de concurrentie kleiner maar de vraag ook.

### Wat is post-editing en moet ik het doen?

Post-editing (of MTPE) is het nakijken en corrigeren van een machinevertaling. Het betaalt 2 tot 5 cent per woord, ongeveer de helft van een gewone vertaling, en bij een slechte machinevertaling kost het bijna evenveel tijd. Doe het om binnen te komen bij een bureau, maar bouw ondertussen aan opdrachten waar je je eigen tarief bepaalt.

### Moet ik me inschrijven bij KVK?

Zodra je structureel voor klanten buiten je vrienden- en familiekring werkt, wil KVK dat je je inschrijft als ondernemer. Incidentele opdrachten geef je op als inkomsten uit overig werk in je aangifte. Werk je via een buitenlands platform en word je in dollars betaald, dan geef je dat gewoon in euro's op; de Belastingdienst wil je wereldwijde inkomen zien.
