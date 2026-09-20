---
title: "Bitcoin halving uitgelegd: alles over de volgende halving in 2028"
description: "Wat de Bitcoin halving is, wanneer de volgende komt (rond april 2028) en wat hij met de koers deed in 2012, 2016, 2020 en 2024. Met live countdown."
date: 2024-01-19
updated: 2026-09-20
category: "web3"
slug: "bitcoin-halving"
lang: "nl"
draft: false
featuredImage: "/images/headers/bitcoin-halving.webp"
---

**De Bitcoin halving** is het moment waarop de beloning voor miners in één klap halveert. Het zit ingebakken in de code van Bitcoin, gebeurt elke 210.000 blocks (ongeveer elke vier jaar) en is de reden dat er nooit meer dan 21 miljoen bitcoin zullen bestaan. De laatste halving was op 20 april 2024; de volgende wordt rond april 2028 verwacht.

In dit artikel lees je hoe de halving werkt, waarom hij bestaat, wat er bij de vier vorige halvings met de koers gebeurde en wat je er als bezitter van bitcoin mee moet. De teller hieronder haalt de actuele blokhoogte live op, dus je ziet altijd precies hoe ver we zijn.

Sinds de vorige versie van dit artikel is de halving van 2024 geweest. Bitcoin stond toen rond de 64.000 dollar, brak in december 2024 voor het eerst door de 100.000 dollar en zette in oktober 2025 een record neer van ruim 125.000 dollar. Daarna zakte de koers in juni 2026 weer tot onder de 60.000 dollar. Het patroon van de vorige cycli hield dus stand, maar minder extreem dan daarvoor. Daarover verderop meer.

<div class="live-stats not-prose" id="halving-live" data-fallback-date="20 september 2026">
<div class="live-stats__tile"><p class="live-stats__label">Huidig block</p><p class="live-stats__value" data-live="height">967.812</p><p class="live-stats__sub">beloning nu 3,125 BTC per block</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Tot de halving</p><p class="live-stats__value" data-live="left">82.188 blocks</p><p class="live-stats__sub" data-live="days">ongeveer 571 dagen</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Verwachte datum</p><p class="live-stats__value" data-live="eta">rond 14 april 2028</p><p class="live-stats__sub">bij gemiddeld 10 minuten per block</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Al in omloop</p><p class="live-stats__value" data-live="supply">20,09 mln BTC</p><p class="live-stats__sub" data-live="pct">95,7% van 21 miljoen</p></div>
<p class="live-stats__note" data-live="note">Stand van 20 september 2026 (block 967.812). Zodra de pagina geladen is, wordt de blokhoogte ververst via mempool.space.</p>
</div>

<script>
(function () {
  var box = document.getElementById('halving-live'); if (!box || !window.fetch) return;
  var q = function (k) { return box.querySelector('[data-live="' + k + '"]'); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { maximumFractionDigits: d || 0 }).format(n); };
  var TARGET = 1050000, REWARD = 3.125;
  fetch('https://mempool.space/api/blocks/tip/height').then(function (r) { return r.text(); }).then(function (t) {
    var h = parseInt(t, 10); if (!h) return;
    var left = Math.max(TARGET - h, 0), eta = new Date(Date.now() + left * 600000);
    var supply = h < TARGET ? 19687500 + (h - 840000) * REWARD : 19687500 + 210000 * REWARD + (h - TARGET) * REWARD / 2;
    q('height').textContent = nl(h);
    q('left').textContent = nl(left) + ' blocks';
    q('days').textContent = 'ongeveer ' + nl(left / 144) + ' dagen';
    q('eta').textContent = left ? 'rond ' + eta.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }) : 'de halving is geweest';
    q('supply').textContent = nl(supply / 1e6, 2) + ' mln BTC';
    q('pct').textContent = nl(supply / 21e6 * 100, 1) + '% van 21 miljoen';
    q('note').textContent = 'Live blokhoogte via mempool.space, opgehaald op ' + new Date().toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + '. De datum gaat uit van gemiddeld 10 minuten per block; in de praktijk gaat het vaak iets sneller.';
  }).catch(function () { /* fallback stays */ });
})();
</script>

## Wat is de Bitcoin halving?

Bitcoin heeft een paar eigenschappen die in de code vastliggen en die niemand kan veranderen. De belangrijkste: er komen er maximaal **21 miljoen**, en nieuwe bitcoin komen alleen in omloop als beloning voor miners die een nieuw block aan de blockchain toevoegen. Die beloning begon in 2009 op 50 bitcoin per block en wordt elke 210.000 blocks gehalveerd. Dat is de halving.

Omdat er gemiddeld elke tien minuten een block bijkomt, zit er ongeveer vier jaar tussen twee halvings. In 2012 ging de beloning van 50 naar 25 bitcoin, in 2016 naar 12,5, in 2020 naar 6,25 en sinds 20 april 2024 krijgen miners **3,125 bitcoin** per block. Bij de volgende halving, rond april 2028, wordt dat 1,5625.

![Een grote gouden munt die als een taart doormidden wordt gesneden, met een mes ernaast](/images/spots/halving-taart.webp "Elke 210.000 blocks wordt de beloning voor miners doormidden gesneden")

Het gevolg: het aantal nieuwe bitcoin dat per dag op de markt komt, wordt steeds kleiner. In 2026 zijn dat er zo'n 450 per dag; na 2028 nog 225. Rond het jaar 2140 wordt de laatste bitcoin gemined, al is ruim 95% er in 2026 al.

## Hoe hangt de halving samen met mining?

Blocks worden aan de blockchain toegevoegd via **mining**. Speciale computers (ASIC's, gebouwd om zo snel mogelijk te 'hashen') proberen als eerste een rekenpuzzel op te lossen. Wie wint, mag het volgende block toevoegen met alle recente transacties erin en krijgt de beloning: de nieuwe bitcoin plus de transactiekosten van dat block.

Mining zorgt er zo voor dat transacties permanent en zonder centrale partij worden vastgelegd. Miners steken stroom en hardware in het netwerk en worden daarvoor in bitcoin betaald. De halving raakt hen dus direct in hun omzet. Wie na een halving niet efficiënt genoeg is, stopt; de rest gaat door en de puzzel wordt automatisch makkelijker of moeilijker gemaakt, zodat er gemiddeld weer elke tien minuten een block komt.

![Een pikhouweel dat leunt tegen een stapel gloeiende blokken, met een klein muntje bovenop](/images/spots/halving-mijnwerker.webp "Miners doen het werk; de halving bepaalt wat ze ervoor krijgen")

In Nederland is minen al jaren niet rendabel: de stroom is te duur. Het is een industrie geworden van beursgenoteerde bedrijven met hallen vol computers in IJsland, Texas of Paraguay. Elke halving maakt die race harder.

## Alle Bitcoin halvings op een rij

Er zijn tot nu toe vier halvings geweest. Dit zijn de data, de blocks en wat de koers deed, in dollars, afgerond:

| Halving | Datum | Block | Beloning per block | Koers rond de halving | Piek in de cyclus erna |
|---|---|---|---|---|---|
| 1 | 28 november 2012 | 210.000 | 50 → 25 BTC | ± $12 | ruim $1.000 (november 2013) |
| 2 | 9 juli 2016 | 420.000 | 25 → 12,5 BTC | ± $650 | bijna $20.000 (december 2017) |
| 3 | 11 mei 2020 | 630.000 | 12,5 → 6,25 BTC | ± $8.600 | ruim $67.000 (november 2021) |
| 4 | 20 april 2024 | 840.000 | 6,25 → 3,125 BTC | ± $64.000 | ruim $125.000 (oktober 2025) |
| 5 | rond april 2028 (verwacht) | 1.050.000 | 3,125 → 1,5625 BTC | – | – |

Bron: Kraken Learn voor de historische data, de koersen van 2024 en 2025 uit mijn [crypto gids](/blog/web3/handelen-in-crypto-valuta/); gecontroleerd op 20 september 2026.

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">2009</p><p class="timeline__title">Het begin: 50 bitcoin per block</p><p class="timeline__text">Satoshi Nakamoto mined het eerste block. Bitcoin is nog niets waard en de beloning is 50 munten per block.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2012</p><p class="timeline__title">Eerste halving: 25 BTC</p><p class="timeline__text">Bitcoin kost zo'n 12 dollar. Een jaar later staat hij voor het eerst boven de 1.000 dollar.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">2016</p><p class="timeline__title">Tweede halving: 12,5 BTC</p><p class="timeline__text">Van zo'n 650 dollar naar bijna 20.000 dollar eind 2017, gevolgd door een crash van 80%.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">2020</p><p class="timeline__title">Derde halving: 6,25 BTC</p><p class="timeline__text">Midden in de coronacrisis, rond 8.600 dollar. In november 2021 piekt bitcoin boven de 67.000 dollar.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">2024</p><p class="timeline__title">Vierde halving: 3,125 BTC</p><p class="timeline__text">Rond 64.000 dollar, met Wall Street erbij via ETF's. December 2024: voor het eerst boven de 100.000, oktober 2025: ruim 125.000 dollar.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">6</span><p class="timeline__year">2028</p><p class="timeline__title">Vijfde halving: 1,5625 BTC</p><p class="timeline__text">Verwacht rond april 2028 bij block 1.050.000. Het aantal nieuwe bitcoin per dag daalt van 450 naar 225.</p></li>
</ol>

## Wanneer is de volgende Bitcoin halving?

De volgende halving vindt plaats bij **block 1.050.000**. Op 20 september 2026 stond de teller op block 967.812, dus er moesten er nog 82.188 bij. Bij gemiddeld tien minuten per block kom je dan uit rond 14 april 2028; omdat blocks de laatste jaren gemiddeld iets sneller komen dan tien minuten, kan het ook eind maart worden. De teller bovenaan dit artikel rekent het live voor je uit.

Een exacte datum is er dus niet, en dat is geen fout. De halving is gekoppeld aan een blokhoogte, niet aan een kalender. De code kent geen datums, alleen blocks.

## Wat de halving doet met het aanbod, in euro's

Reken het zelf uit. Elke dag komen er zo'n 144 blocks bij. Vul de bitcoinkoers in en je ziet hoeveel nieuwe bitcoin er per dag op de markt komt, nu en na de halving.

<div class="tool not-prose" id="halving-calc">
<p class="tool__title">Hoeveel nieuwe bitcoin komt er per dag bij?</p>
<p class="tool__intro">De koers wordt live opgehaald via CoinGecko; lukt dat niet, dan rekent de tool met de koers van 20 september 2026.</p>
<div class="tool__grid">
<label class="tool__field">Bitcoinkoers (€)<input class="tool__input" id="halving-koers" type="number" min="1" step="100" value="70000"></label>
<label class="tool__field">Blocks per dag<input class="tool__input" id="halving-blocks" type="number" min="1" step="1" value="144"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Nu (3,125 BTC per block)</p><p class="tool__value" id="halving-nu">€ 31,5 mln</p><p class="tool__sub" id="halving-nu-btc">450 BTC per dag</p></div>
<div class="tool__result"><p class="tool__label">Na de halving (1,5625 BTC)</p><p class="tool__value" id="halving-na">€ 15,8 mln</p><p class="tool__sub" id="halving-na-btc">225 BTC per dag</p></div>
</div>
<p class="tool__note" id="halving-bron">Rekenvoorbeeld met de koers van 20 september 2026. Dit is wat miners aan nieuwe munten ontvangen en dus wat er dagelijks aan vers aanbod bij kan komen; transactiekosten zijn niet meegerekend.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { maximumFractionDigits: d || 0 }).format(n); };
  function calc() {
    var koers = +$('halving-koers').value || 0, blocks = +$('halving-blocks').value || 0;
    var nu = blocks * 3.125, na = blocks * 1.5625;
    $('halving-nu').textContent = '€ ' + nl(nu * koers / 1e6, 1) + ' mln';
    $('halving-na').textContent = '€ ' + nl(na * koers / 1e6, 1) + ' mln';
    $('halving-nu-btc').textContent = nl(nu, 1) + ' BTC per dag';
    $('halving-na-btc').textContent = nl(na, 1) + ' BTC per dag';
  }
  ['halving-koers', 'halving-blocks'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
  if (!window.fetch) return;
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur').then(function (r) { return r.json(); }).then(function (res) {
    var p = res.bitcoin && res.bitcoin.eur; if (!p) return;
    $('halving-koers').value = Math.round(p);
    $('halving-bron').textContent = 'Rekenvoorbeeld met de live koers via CoinGecko (' + new Date().toLocaleString('nl-NL', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) + '). Dit is wat miners aan nieuwe munten ontvangen en dus wat er dagelijks aan vers aanbod bij kan komen; transactiekosten zijn niet meegerekend.';
    calc();
  }).catch(function () { /* fallback stays */ });
})();
</script>

## Heeft de halving effect op de prijs van Bitcoin?

Dit is de vraag waar iedereen op wacht, en het eerlijke antwoord is: tot nu toe wel, maar steeds minder, en niemand weet of het patroon standhoudt.

De logica is simpel. De halving verlaagt het tempo waarin nieuwe bitcoin op de markt komen. Blijft de vraag gelijk of groeit ze, dan moet de prijs omhoog. De inflatie van bitcoin (het percentage nieuwe munten per jaar) ligt sinds 2024 onder de 1%, lager dan die van goud. Het is precies de reden dat mensen bitcoin 'digitaal goud' noemen.

![Een zandloper waar in plaats van zand gouden muntjes doorheen vallen, steeds minder](/images/spots/halving-zandloper.webp "Elke halving laat het zand langzamer lopen")

De geschiedenis laat dat zien: na elke halving volgde binnen twaalf tot achttien maanden een nieuw record, gevolgd door een flinke daling. Na 2024 gebeurde het opnieuw: van 64.000 naar ruim 125.000 dollar in oktober 2025, en daarna in juni 2026 terug tot onder de 60.000. Maar let op twee dingen:

*   **Het effect wordt kleiner.** Een verdubbeling van de schaarste doet meer bij een klein netwerk dan bij een markt waar ETF's en pensioenfondsen in zitten. Van 12 naar 1.000 dollar was een factor 80; van 64.000 naar 125.000 was nog geen factor 2.
*   **De halving is bekend.** Iedereen weet wanneer hij komt, dus een deel is al in de prijs verwerkt. Wat de koers écht beweegt, zijn vraag (ETF-instroom, grote beleggers), rente, regelgeving en, eerlijk is eerlijk, massapsychologie.

Uiteindelijk is de halving één van de vele factoren. Wie zijn hele plan hangt aan "na de halving gaat het omhoog", speculeert. Wie snapt dat de halving het aanbod structureel afknijpt en daar zijn lange termijn op inricht, belegt.

## Wat zegt het Bitcoin whitepaper over de halving?

Grappig genoeg komt het woord 'halving' in het whitepaper van Satoshi Nakamoto uit 2008 niet voor. Wel legt het de gedachte erachter uit. In sectie 6 staat (vrij vertaald):

> "De gestage toevoeging van een constante hoeveelheid nieuwe munten is vergelijkbaar met goudmijnwerkers die middelen besteden om goud aan de circulatie toe te voegen. In ons geval wordt CPU-tijd en elektriciteit besteed."

En over de moeilijkheidsgraad, die ervoor zorgt dat blocks ondanks snellere hardware elke tien minuten blijven komen:

> "Om te compenseren voor de toenemende snelheid van hardware en de wisselende interesse in het draaien van nodes, wordt de proof-of-work-moeilijkheidsgraad bepaald door een voortschrijdend gemiddelde dat een gemiddeld aantal blocks per uur als doel heeft. Worden ze te snel gegenereerd, dan neemt de moeilijkheidsgraad toe."

De halving zelf staat in de code van Bitcoin: elke 210.000 blocks wordt de beloning gehalveerd, tot hij rond 2140 op nul uitkomt. Het maximum van 21 miljoen is daar simpelweg de optelsom van.

## Moet je je als bezitter zorgen maken over de halving?

Nee. De halving is een geprogrammeerd, voorspelbaar event. Voor jou als bezitter verandert er niets aan je munten; er komen er alleen minder bij. De mensen die er direct iets van merken, zijn miners.

Wat ik zelf doe, is er niet op handelen. Ik leg iedere maand een vast bedrag in via [Finst](/go/finst), wat de koers ook doet, en laat de halving zijn werk doen op de lange termijn. Wie bitcoin minimaal vier jaar vasthield, heeft tot nu toe nog nooit met verlies verkocht. Geen garantie voor de toekomst, wel een goede reden om je horizon lang te houden. En houd rekening met box 3; hoe dat werkt, lees je in [mijn crypto gids](/blog/web3/handelen-in-crypto-valuta/).

## Veelgestelde vragen

### Wanneer was de laatste Bitcoin halving?

Op 20 april 2024, bij block 840.000. De beloning ging van 6,25 naar 3,125 bitcoin per block.

### Wanneer is de volgende Bitcoin halving?

Bij block 1.050.000, naar verwachting rond april 2028. De exacte dag hangt af van hoe snel blocks worden gemined; de teller bovenaan dit artikel houdt het bij.

### Hoeveel bitcoin zijn er nog te minen?

Op 20 september 2026 waren er ruim 20 miljoen bitcoin in omloop, zo'n 95,7% van de 21 miljoen. De laatste fracties worden pas rond 2140 gemined.

### Gaat de koers omhoog door de halving?

Na elke vorige halving kwam er binnen anderhalf jaar een nieuw record, maar het effect wordt elke cyclus kleiner en niemand kan het garanderen. Zie de halving als één factor, niet als een belofte.

## Zelf beginnen met bitcoin

Wil je bitcoin kopen voordat de volgende halving er is? Dat doe je het goedkoopst via het Nederlandse [Finst](/go/finst): 0,15% handelskosten zonder spread, een MiCA-vergunning van de AFM en periodiek inleggen met één instelling. Hoe dat stap voor stap gaat, lees je in [mijn stappenplan crypto kopen met iDEAL](/blog/web3/crypto-kopen-met-ideal-stappenplan/), en welke exchanges er verder zijn in [mijn vergelijking van de beste crypto exchanges](/blog/web3/beste-crypto-exchange/).

[Investeer in bitcoin via Finst](/go/finst)
