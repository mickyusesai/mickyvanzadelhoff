---
title: "Proof of Work versus Proof of Stake: zo werken de consensusmechanismen van crypto (2026)"
description: "Proof of Work versus Proof of Stake met de cijfers van 2026: stroomverbruik, hashrate, staking-rendement, een mining-rekentool en welke munt wat gebruikt."
date: 2024-01-21
updated: 2026-09-19
category: "web3"
slug: "proof-of-work-proof-of-stake-pow-pos-consensus-mechanism-cypto"
lang: "nl"
draft: false
featuredImage: "/images/headers/proof-of-work-proof-of-stake-pow-pos-consensus-mechanism-cypto.webp"
---

**Hoe weet een netwerk van duizenden computers zonder baas wie de waarheid spreekt?** Dat is de vraag waar elke blockchain een antwoord op moet hebben, en dat antwoord heet een consensusmechanisme. De twee bekendste zijn **Proof of Work (PoW)**, waar Bitcoin op draait, en **Proof of Stake (PoS)**, waar Ethereum in september 2022 naar overstapte. Het verschil bepaalt hoeveel stroom een munt verbruikt, of jij er rente op kunt krijgen en hoe moeilijk het is om het netwerk aan te vallen.

In dit artikel lees je hoe beide mechanismen werken, wat er sinds 2022 veranderde (Ethereum verbruikt 99,99% minder stroom, Bitcoin juist meer dan heel Nederland), wat het je oplevert om te staken, of thuis minen in Nederland nog kan (met een rekentool die je eigen stroomprijs meeneemt), welke munten wat gebruiken en welk mechanisme 'beter' is. Alle cijfers zijn gecontroleerd op de datum die erbij staat.

[**Koop en staak cryptomunten bij het Nederlandse Finst, met de laagste kosten en een MiCA-vergunning. Een account aanmaken is gratis >>**](/go/finst)

## Waarom een blockchain consensus nodig heeft

Bij een bank staat er één computer die bijhoudt wie hoeveel heeft. Bij crypto houden duizenden computers over de hele wereld dezelfde kopie van dat grootboek bij, en niemand is de baas. Dan moet er een regel zijn die bepaalt wie de volgende pagina (het 'block') mag schrijven en hoe de rest controleert of die klopt. Zonder zo'n regel kun je dezelfde munt twee keer uitgeven, de beruchte **double spend**.

Een goed consensusmechanisme doet drie dingen: het maakt eerlijk meedoen aantrekkelijk (je krijgt er munten voor), het maakt vals spelen duur (je verliest stroom of inzet), en het zorgt dat het netwerk doordraait als een deel van de deelnemers uitvalt of kwaad wil.

![Rijen computers die om het hardst aan één grote puzzel werken, met een gouden munt als prijs](/images/spots/proof-puzzel-race.webp "Proof of Work: wie de puzzel het snelst oplost, mag het volgende block schrijven")

## Wat is Proof of Work (PoW)?

Bij Proof of Work laten **miners** hun computers een rekenpuzzel oplossen. De puzzel is zo gemaakt dat je hem alleen door te gokken kunt kraken: miljarden pogingen per seconde, tot iemand het juiste getal vindt. Wie het eerst is, mag het volgende block schrijven en krijgt daarvoor nieuwe munten plus de transactiekosten. Bij Bitcoin is dat sinds de halving van april 2024 **3,125 Bitcoin per block**, elke tien minuten; de volgende halving komt rond 2028.

De 'work' is dus letterlijk stroom. Dat is de kracht van het systeem: wie de geschiedenis wil vervalsen, moet meer rekenkracht hebben dan alle andere miners bij elkaar, en die rekenkracht is in 2026 enorm. Het is ook de zwakte, want al die stroom kost geld en veroorzaakt uitstoot.

### De cijfers van 2026

*   **Rekenkracht (hashrate):** zo'n 926 exahash per seconde op 20 september 2026 (mempool.space, gemiddelde over drie dagen). In januari 2026 kwam het netwerk voor het eerst boven de 1.000 exahash, één zettahash. Ter vergelijking: bij mijn eerste artikel, in 2024, was dat ongeveer de helft.
*   **Stroomverbruik:** de Universiteit van Cambridge schatte het jaarverbruik van Bitcoin op 1 augustus 2026 op **141 terawattuur**. Heel Nederland verbruikte in 2024 zo'n 113 terawattuur (CBS). Bitcoin verbruikt dus meer stroom dan ons hele land, inclusief industrie.
*   **Wie er mijnt:** beursgenoteerde bedrijven met goedkope stroom in Texas, Paraguay of IJsland. In 2026 zie je een nieuwe trend: grote miners bouwen hun hallen om tot datacenters voor AI, omdat dat meer oplevert dan Bitcoin minen.

De volgende munten draaien op Proof of Work:

*   Bitcoin (BTC), de grootste, met een aparte chip (ASIC) die niets anders kan dan deze puzzel
*   Dogecoin (DOGE) en Litecoin (LTC), die sinds 2014 samen worden gemined
*   Monero (XMR), speciaal ontworpen zodat je met een gewone processor kunt minen
*   Zcash (ZEC), de privacymunt die in 2025-2026 tientallen keren over de kop ging
*   Kaspa (KAS) en Ethereum Classic (ETC)

Samen zijn alle PoW-munten op 20 september 2026 zo'n 1.680 miljard dollar waard (CoinGecko), waarvan het overgrote deel Bitcoin.

### Kun je thuis nog minen? Reken het uit

De eerlijke vraag die ik in 2024 oversloeg. Een moderne Bitcoin-miner, zoals de Antminer S21 XP, levert 270 terahash per seconde en verbruikt daarvoor zo'n 3.650 watt, dag en nacht; nieuw kost hij 8.000 tot 10.000 euro (Mineshop, begin 2026). Wat dat oplevert, hangt af van drie dingen: de Bitcoin-koers, de totale rekenkracht van het netwerk (jouw aandeel daarin bepaalt je deel van de 450 Bitcoin die per dag worden uitgegeven) en je stroomprijs. Vul je eigen stroomprijs van je jaarnota in; de koers en de netwerk-hashrate worden live opgehaald.

<div class="tool not-prose" id="proof-mining">
<p class="tool__title">Is Bitcoin minen in Nederland rendabel?</p>
<p class="tool__intro">Standaard: één Antminer S21 XP (270 TH/s, 3.650 W) tegen 30 cent per kilowattuur, met de Bitcoin-koers en de hashrate van het netwerk op 20 september 2026 (worden live ververst).</p>
<div class="tool__grid">
<label class="tool__field">Rekenkracht van je miner (TH/s)<input class="tool__input" id="proof-th" type="number" min="0" step="10" value="270"></label>
<label class="tool__field">Stroomverbruik (watt)<input class="tool__input" id="proof-watt" type="number" min="0" step="50" value="3650"></label>
<label class="tool__field">Je stroomprijs (€ per kWh)<input class="tool__input" id="proof-kwh" type="number" min="0" step="0.01" value="0.30"></label>
<label class="tool__field">Bitcoin-koers (€)<input class="tool__input" id="proof-koers" type="number" min="0" step="100" value="69983"></label>
<label class="tool__field">Hashrate van het netwerk (EH/s)<input class="tool__input" id="proof-net" type="number" min="1" step="10" value="926"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Opbrengst per dag</p><p class="tool__value" id="proof-opbrengst">€ 9,18</p><p class="tool__sub" id="proof-btc">0,000131 BTC per dag</p></div>
<div class="tool__result"><p class="tool__label">Stroomkosten per dag</p><p class="tool__value" id="proof-kosten">€ 26,28</p><p class="tool__sub" id="proof-maand">resultaat per maand: -€ 513</p></div>
</div>
<p class="tool__note" id="proof-note">Rekenvoorbeeld zonder aanschaf, koeling en onderhoud. Volgens Mineshop is thuis minen in Europa pas rendabel onder de 12 cent per kilowattuur, bijvoorbeeld met eigen zonnestroom.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n); };
  function calc() {
    var th = +$('proof-th').value || 0, watt = +$('proof-watt').value || 0, kwh = +$('proof-kwh').value || 0;
    var koers = +$('proof-koers').value || 0, net = +$('proof-net').value || 1;
    var btc = th / (net * 1e6) * 144 * 3.125, opbrengst = btc * koers, kosten = watt / 1000 * 24 * kwh, maand = (opbrengst - kosten) * 30;
    $('proof-opbrengst').textContent = '€ ' + nl(opbrengst, 2);
    $('proof-btc').textContent = nl(btc, 6) + ' BTC per dag';
    $('proof-kosten').textContent = '€ ' + nl(kosten, 2);
    $('proof-maand').textContent = 'resultaat per maand: ' + (maand < 0 ? '-' : '+') + '€ ' + nl(Math.abs(maand), 0);
  }
  ['proof-th', 'proof-watt', 'proof-kwh', 'proof-koers', 'proof-net'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
  if (!window.fetch) return;
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur').then(function (r) { return r.json(); }).then(function (p) {
    if (p.bitcoin && p.bitcoin.eur) { $('proof-koers').value = Math.round(p.bitcoin.eur); calc(); }
  }).catch(function () {});
  fetch('https://mempool.space/api/v1/mining/hashrate/3d').then(function (r) { return r.json(); }).then(function (h) {
    if (h.currentHashrate) { $('proof-net').value = Math.round(h.currentHashrate / 1e18); calc(); $('proof-note').textContent = 'Koers via CoinGecko en netwerk-hashrate via mempool.space, live opgehaald. Rekenvoorbeeld zonder aanschaf, koeling en onderhoud; volgens Mineshop is thuis minen in Europa pas rendabel onder de 12 cent per kilowattuur.'; }
  }).catch(function () {});
})();
</script>

De conclusie zie je meteen: met een Nederlandse stroomprijs betaal je per dag bijna drie keer zoveel aan stroom als je miner aan Bitcoin oplevert. Daarom staan de miners in Paraguay en niet in Purmerend.

## Wat is Proof of Stake (PoS)?

Bij Proof of Stake zijn er geen miners maar **validators**. In plaats van stroom zetten zij munten in als onderpand: hun 'stake'. Het netwerk kiest (willekeurig, met een grotere kans naarmate je meer inzet) wie het volgende block mag voorstellen, en andere validators controleren het. Doe je je werk goed, dan krijg je een beloning uit de transactiekosten en nieuwe munten. Speel je vals of ben je vaak offline, dan verlies je een deel van je inzet: **slashing**.

Het idee is simpel: wie het netwerk wil aanvallen, moet eerst een groot deel van alle munten kopen, en vernietigt daarmee de waarde van zijn eigen bezit. Vals spelen is niet duur in stroom, maar in geld.

![Munten opgesloten in een glazen kist met een ketting, naast een stembus](/images/spots/proof-inzet-stembus.webp "Proof of Stake: je zet munten in als onderpand en krijgt daar stemrecht en beloning voor terug")

### Hoe werkt PoS bij Ethereum?

Ethereum is het grootste PoS-netwerk. Om zelf een validator te draaien heb je **32 ether** nodig (op 20 september 2026 ruim 70.000 euro) en een computer die altijd aan staat. Sinds de **Pectra-upgrade van 7 mei 2025** kan één validator tot 2.048 ether inzetten, zodat grote partijen niet honderden losse validators hoeven te draaien. Het gevolg: het aantal validators daalde met zo'n 16%, terwijl de totale inzet steeg. De stand in 2026:

*   Zo'n **38 tot 39 miljoen ether** staat ingezet, ongeveer **32% van alle ether** (Everstake, mei 2026; ultrasound.money via CoinLaw, juli 2026).
*   Het rendement voor validators ligt rond de **2 tot 3% per jaar**; bij Lido, de grootste staking-aanbieder, was dat in juli 2026 zo'n 2,4% bruto.
*   Wie geen 32 ether heeft, staakt via een aanbieder. Bij [Finst](/go/finst) zet je staking met één schuifje aan; voor ether was dat op 17 september 2026 **1,50%** per jaar, voor Solana 2,80%, voor Cardano 1,20% en voor Cosmos 10,00%. Je munten blijven verhandelbaar en de beloning wordt wekelijks uitgekeerd.

Andere netwerken hebben andere regels. Bij Cardano delegeer je je munten aan een 'stake pool' zonder ze uit handen te geven, bij Polkadot nomineer je validators, bij Solana staak je bij een validator naar keuze en helpt een tijdstempel-mechanisme (Proof of History) het netwerk sneller te maken. Bij Tron en BNB Chain kiest een beperkt aantal partijen de validators, wat sneller maar ook minder gedecentraliseerd is.

De volgende munten draaien op Proof of Stake:

*   Ethereum (ETH), sinds 15 september 2022
*   Solana (SOL), Cardano (ADA), Polkadot (DOT), Avalanche (AVAX)
*   Cosmos (ATOM), Tezos (XTZ), Near (NEAR), Sui (SUI)
*   Tron (TRX) en BNB (BNB), in een variant met een vast aantal validators

Samen zijn alle PoS-munten op 20 september 2026 zo'n 570 miljard dollar waard (CoinGecko).

Let wel: staking valt buiten de Europese MiCA-regels. Een platform mag het aanbieden, maar er is geen toezicht op de voorwaarden. Kijk dus altijd of je munten vast staan en wie de beloning uitkeert.

## Van Bitcoin tot Pectra: zo ontwikkelde consensus zich

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">2009</p><p class="timeline__title">Bitcoin: Proof of Work</p><p class="timeline__text">Satoshi Nakamoto lost het double-spend-probleem op met een rekenpuzzel. Minen kan nog op een gewone laptop.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2012</p><p class="timeline__title">Peercoin: de eerste Proof of Stake</p><p class="timeline__text">De eerste munt die inzet in plaats van stroom gebruikt. Klein gebleven, maar het idee is geboren.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">2015</p><p class="timeline__title">Ethereum start op PoW</p><p class="timeline__text">Ethereum begint als Proof-of-Work-netwerk, met de belofte ooit over te stappen. Dat duurt zeven jaar.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">2017 – 2020</p><p class="timeline__title">Cardano, Tezos, Solana</p><p class="timeline__text">Een nieuwe generatie blockchains begint meteen op Proof of Stake. In december 2020 start de Beacon Chain, de PoS-laag van Ethereum.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">15 september 2022</p><p class="timeline__title">The Merge</p><p class="timeline__text">Ethereum schakelt over op Proof of Stake en verbruikt 99,99% minder stroom. De grootste technische operatie in de geschiedenis van crypto.</p></li>
<li class="timeline__item"><span class="timeline__num">6</span><p class="timeline__year">April 2024</p><p class="timeline__title">Vierde Bitcoin-halving</p><p class="timeline__text">De beloning per block gaat van 6,25 naar 3,125 Bitcoin. Minen wordt een spel voor bedrijven met goedkope stroom.</p></li>
<li class="timeline__item"><span class="timeline__num">7</span><p class="timeline__year">Mei 2025</p><p class="timeline__title">Pectra</p><p class="timeline__text">Eén Ethereum-validator mag voortaan tot 2.048 ether inzetten. Het aantal validators daalt, de totale inzet stijgt.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">8</span><p class="timeline__year">2026 – nu</p><p class="timeline__title">Één zettahash en 32% ingezet</p><p class="timeline__text">Bitcoin passeert de 1.000 exahash, een derde van alle ether staat ingezet, en miners bouwen hun hallen om voor AI.</p></li>
</ol>

## Proof of Work en Proof of Stake naast elkaar

| | Proof of Work | Proof of Stake |
|---|---|---|
| Wie schrijft het block | De miner die de puzzel het eerst oplost | Een validator, gekozen naar rato van zijn inzet |
| Wat het kost om mee te doen | Hardware en stroom | Munten als onderpand (bij Ethereum 32 ether) |
| Wat vals spelen kost | Meer rekenkracht dan de rest van het netwerk | Je inzet wordt afgepakt (slashing) |
| Stroomverbruik | Bitcoin: ± 141 TWh per jaar (Cambridge, augustus 2026) | Ethereum: ± 0,0026 TWh per jaar (ethereum.org) |
| Rendement voor jou | Alleen als je zelf mijnt, en in Nederland is dat verliesgevend | Staking: 1 tot 10% per jaar, afhankelijk van de munt |
| Nieuwe munten | Vast schema, bij Bitcoin elke vier jaar gehalveerd | Per netwerk anders; Ethereum geeft weinig nieuwe ether uit |
| Grootste voorbeeld | Bitcoin (± 1.680 miljard dollar aan PoW-munten) | Ethereum (± 570 miljard dollar aan PoS-munten) |

Cijfers gecontroleerd op 20 september 2026.

## Ethereums overstap van PoW naar PoS: The Merge

Op 15 september 2022 stapte Ethereum over van Proof of Work naar Proof of Stake, 'The Merge'. Vóór die tijd stonden er, net als bij Bitcoin, hallen vol computers om Ethereum te minen; die verbruikten volgens Cambridge zo'n 21 terawattuur per jaar. Na de overstap verbruikt het hele netwerk ongeveer 0,0026 terawattuur, een daling van **99,99%** (ethereum.org, op basis van een studie van het CCRI). Voor de oude miners was het einde oefening; een deel verhuisde naar Ethereum Classic, dat wél op PoW bleef.

Wat het voor jou veranderde: sinds The Merge kun je ether staken en dus rente krijgen op munten die je toch al vasthoudt. En sinds de Pectra-upgrade van mei 2025 is dat ook voor grote partijen (pensioenfondsen, ETF-aanbieders) praktisch geworden. Het is de reden dat 'staking' in de Amerikaanse Ethereum-ETF's in 2025 en 2026 zo'n groot onderwerp werd.

![Een stroommeter naast een klein groen blaadje, met op de achtergrond een reusachtige energiecentrale](/images/spots/proof-stroommeter.webp "Proof of Stake tegenover Proof of Work: 0,0026 tegen 141 terawattuur per jaar")

## De beste Nederlandse exchanges om te staken en te kopen

### 1. Finst

Goedkoopste exchange van Nederland, met staking op vijftien munten en bundels.

*   Handelskosten: 0,15%, zonder spread
*   Aanbod: ruim 400 munten
*   Vergunning: MiCA-vergunning van de AFM sinds juli 2025

[Maak gratis account](/go/finst)

of [lees mijn Finst review](/blog/review/finst-crypto-exchange/)

### 2. Bitvavo

Grootste crypto exchange van Nederland, met staking ('Earn') op ruim 65 munten.

*   Handelskosten: 0,25% bij een marktorder
*   Aanbod: ruim 400 munten
*   Vergunning: MiCA-vergunning van de AFM sinds juni 2025

[Maak gratis account](/go/bitvavo)

of [lees mijn Bitvavo review](/blog/review/bitvavo-review-crypto/)

## Welk consensusmechanisme is beter?

Het eerlijke antwoord: het hangt af van wat je van een netwerk wilt.

**Proof of Work** is het meest bewezen. Bitcoin draait sinds 2009 zonder één geslaagde aanval op het netwerk zelf, en de enorme hoeveelheid stroom die erin zit, is precies wat het zo moeilijk maakt om de geschiedenis te herschrijven. Voor 'digitaal goud', waar niets belangrijker is dan dat het grootboek klopt, is dat een sterk argument. De prijs is een stroomverbruik groter dan dat van Nederland, en een mining-industrie die steeds meer in handen komt van een paar grote bedrijven.

**Proof of Stake** is efficiënter en sneller, en maakt het mogelijk dat jij als houder meedoet en beloond wordt. Voor netwerken waar veel gebeurt (apps, stablecoins, tokenisatie) is dat de logische keuze, en de overstap van Ethereum bewees dat het op grote schaal werkt. De prijs is dat wie veel munten heeft, ook veel macht heeft, en dat een paar grote staking-aanbieders een groot deel van de inzet beheren.

Voor jou als belegger is het onderscheid vooral praktisch: op een PoS-munt kun je staken en dus een paar procent per jaar extra munten krijgen, op Bitcoin niet. Daar staat tegenover dat Bitcoin de enige munt is die je zonder nadenken tien jaar kunt laten liggen. Zelf heb ik beide, en zet ik staking aan op alles waar het kan. Hoe dat werkt, en wat de belasting ervan vindt, lees je in mijn [guide over geld verdienen met crypto](/blog/web3/handelen-in-crypto-valuta/).

[**Koop en staak cryptomunten bij het Nederlandse Finst, met de laagste kosten en een MiCA-vergunning. Een account aanmaken is gratis >>**](/go/finst)
