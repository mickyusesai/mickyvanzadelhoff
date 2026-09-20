---
title: "Wat zijn cryptocurrencies en hoe werken ze? [2026]"
description: "Wat cryptocurrencies zijn en hoe ze werken in 2026: blockchain, munten, tokens en stablecoins, MiCA en belasting, met live cijfers en satoshi-rekentool."
date: 2024-01-25
updated: 2026-09-20
category: "web3"
slug: "wat-zijn-crypto-currencies"
lang: "nl"
draft: false
featuredImage: "/images/headers/wat-zijn-crypto-currencies.webp"
---

**Wat zijn cryptocurrencies nu eigenlijk?** Kort gezegd: digitaal geld dat geen bank nodig heeft. Transacties worden niet gecontroleerd door één partij, maar door duizenden computers wereldwijd die samen één grootboek bijhouden: de blockchain. Bitcoin was in 2009 de eerste; inmiddels worden er ruim 21.000 munten bijgehouden en hebben honderden miljoenen mensen er een beetje van.

In dit artikel leg ik zonder jargon uit hoe crypto werkt, hoe nieuwe munten ontstaan, wat het verschil is tussen munten, tokens, stablecoins en NFT's, waar je crypto in 2026 echt voor gebruikt en welke regels er sindsdien gelden. De cijfers bovenaan worden live opgehaald, zodat ze ook kloppen als je dit over een half jaar leest.

Wat er sinds de vorige versie veranderde: crypto is niet langer ongereguleerd. Sinds 2025 heeft iedere aanbieder in Europa een **MiCA-vergunning** nodig, stablecoins moeten gedekt zijn door echt geld, en grote beleggers kopen bitcoin via ETF's. Het Wilde Westen is een stuk minder wild geworden.

<div class="live-stats not-prose" id="wat-live" data-fallback-date="20 september 2026">
<div class="live-stats__tile"><p class="live-stats__label">Bitcoin nu</p><p class="live-stats__value" data-live="btc">€ 70.000</p><p class="live-stats__sub">de eerste en grootste cryptomunt</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Ethereum nu</p><p class="live-stats__value" data-live="eth">€ 2.250</p><p class="live-stats__sub">de computer op de blockchain</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Totale cryptomarkt</p><p class="live-stats__value" data-live="total">€ 2.380 mld</p><p class="live-stats__sub">alle munten bij elkaar</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Actieve munten</p><p class="live-stats__value" data-live="coins">21.333</p><p class="live-stats__sub">gevolgd door CoinGecko</p></div>
<p class="live-stats__note" data-live="note">Cijfers van 20 september 2026. Zodra de pagina geladen is, worden ze ververst via CoinGecko.</p>
</div>

<script>
(function () {
  var box = document.getElementById('wat-live'); if (!box || !window.fetch) return;
  var q = function (k) { return box.querySelector('[data-live="' + k + '"]'); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { maximumFractionDigits: d || 0 }).format(n); };
  Promise.all([
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=eur').then(function (r) { return r.json(); }),
    fetch('https://api.coingecko.com/api/v3/global').then(function (r) { return r.json(); })
  ]).then(function (res) {
    var p = res[0], g = res[1].data;
    q('btc').textContent = '€ ' + nl(p.bitcoin.eur);
    q('eth').textContent = '€ ' + nl(p.ethereum.eur);
    q('total').textContent = '€ ' + nl(g.total_market_cap.eur / 1e9) + ' mld';
    q('coins').textContent = nl(g.active_cryptocurrencies);
    q('note').textContent = 'Live cijfers via CoinGecko, opgehaald op ' + new Date().toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + '.';
    var k = document.getElementById('wat-koers'); if (k) { k.value = Math.round(p.bitcoin.eur); k.dispatchEvent(new Event('input')); }
  }).catch(function () { /* fallback numbers stay */ });
})();
</script>

## Wat is cryptocurrency?

Cryptocurrency, kortweg crypto, is geld dat alleen digitaal bestaat. Je kunt het naar iemand anders sturen zonder dat er een bank tussen zit, en de ontvanger kan het overal ter wereld binnen minuten gebruiken. Het 'crypto' in de naam komt van cryptografie: de wiskunde die ervoor zorgt dat alleen jij je munten kunt uitgeven en dat niemand een transactie achteraf kan aanpassen.

Anders dan euro's wordt crypto niet uitgegeven door een centrale bank. Bitcoin heeft geen eigenaar, geen hoofdkantoor en geen directeur. De regels zitten in de code, en die code draait op computers van vrijwilligers, bedrijven en enthousiastelingen over de hele wereld. Dat is het hele idee: geld waarvan de regels vastliggen en niet door één partij veranderd kunnen worden.

![Een groot opengeslagen kasboek waarvan de pagina's met kettingschakels aan elkaar zitten](/images/spots/watiscrypto-grootboek.webp "De blockchain: één grootboek dat duizenden computers samen bijhouden")

## Hoe werkt een blockchain?

Zie de blockchain als een kasboek. Elke pagina (een 'block') bevat een lijst transacties: wie stuurde hoeveel naar wie. Als een pagina vol is, wordt hij verzegeld en aan de vorige vastgemaakt (de 'chain'). Duizenden computers bewaren een kopie van dat hele kasboek en controleren elkaar. Wil iemand een oude pagina vervalsen, dan klopt zijn kopie niet meer met die van de rest, en wordt hij genegeerd.

Daardoor is een blockchain moeilijker te hacken dan een bank, die één centrale server heeft. Het is ook de reden dat crypto na de bankencrisis van 2008 opkwam: mensen hadden gezien wat er gebeurt als je afhankelijk bent van een paar centrale partijen. Het allereerste bitcoin-block van januari 2009 bevat niet voor niets een krantenkop over de bankenredding.

Handig om te weten: alles op een blockchain is openbaar. Iedereen kan zien welk adres hoeveel naar welk adres stuurde. Alleen staat er geen naam bij het adres. Crypto is dus niet anoniem, maar pseudoniem. En omdat je bij een exchange met vergunning je paspoort laat zien, weet die exchange wel wie jij bent.

## Hoe ontstaan nieuwe cryptomunten?

Nieuwe bitcoin ontstaan door **mining**. Computers over de hele wereld strijden om een rekenpuzzel op te lossen; wie wint, mag het volgende block aan de keten toevoegen en krijgt daarvoor nieuwe bitcoin plus de transactiekosten. Dat heet Proof-of-Work. De beloning halveert elke vier jaar (de [halving](/blog/web3/bitcoin-halving/)): sinds april 2024 is het 3,125 bitcoin per block, en er komen er nooit meer dan 21 miljoen. Ruim 95% daarvan is in 2026 al gemined.

Niet alle munten werken zo. Ethereum stapte in september 2022 over op **Proof-of-Stake**: in plaats van rekenkracht zetten deelnemers hun eigen munten in als onderpand om transacties te controleren, en krijgen ze daarvoor een vergoeding. Dat verbruikt zo'n 99,95% minder stroom. Het is ook de reden dat je op munten als Ethereum, Solana en Cardano kunt 'staken' en op bitcoin niet.

Weer andere munten worden helemaal niet gemined. Een ontwikkelaar maakt ze in één keer aan en verdeelt ze, of ze ontstaan als een bestaande blockchain zich splitst (een 'fork'). Bij dat soort munten is de vraag wie ze bezit en waarom minstens zo belangrijk als de techniek.

## Munten, tokens, stablecoins en NFT's

Onder 'crypto' vallen een paar heel verschillende dingen. Dit zijn de vier hoofdsoorten:

| Soort | Wat het is | Voorbeelden | Waar het voor dient |
|---|---|---|---|
| Munt (coin) | Heeft een eigen blockchain | Bitcoin, Ethereum, Solana | Waarde overmaken, opslaan; bij Ethereum en Solana ook apps laten draaien |
| Token | Draait op de blockchain van een ander | Chainlink, Uniswap, de meeste kleine projecten | Toegang tot een dienst, stemrecht in een project, of gewoon speculatie |
| Stablecoin | Token die altijd één dollar (of euro) waard is | USDC, USDT | Betalen en sparen zonder koersschommeling; even 'uit de markt' stappen |
| NFT | Uniek token, niet inwisselbaar voor een ander | Digitale kunst, tickets, in-game spullen | Bewijs van eigendom van één specifiek ding |

Stand van 20 september 2026. Een gewone cryptomunt is 'fungibel': elke bitcoin is precies evenveel waard als elke andere bitcoin, net als elke euro. Een NFT (non-fungible token) is juist uniek; de ene is een compleet ander ding dan de andere. De NFT-hype van 2021 is grotendeels leeggelopen, maar de techniek wordt nog gebruikt voor onder meer tickets en digitale eigendomsbewijzen.

![Een grote gouden munt en een kleinere gekleurde speelfiche naast elkaar op een tafel](/images/spots/watiscrypto-munt-token.webp "Munt of token: een eigen blockchain, of meeliften op die van een ander")

Stablecoins zijn de saaiste én de meest gebruikte soort. Er gaat inmiddels meer geld in om dan bij Visa, vooral voor internationale betalingen. Sinds MiCA mogen in Europa alleen stablecoins met een vergunning worden aangeboden, en moeten ze gedekt zijn door echt geld op een echte bankrekening. Dat is een directe les uit 2022, toen de 'stabiele' munt TerraUSD in een paar dagen al zijn waarde verloor.

## Waar gebruik je crypto voor in 2026?

*   **Waarde opslaan.** Bitcoin wordt vooral gebruikt als 'digitaal goud': een bezit met een vaste, beperkte voorraad. Sinds 2024 kopen pensioenfondsen en vermogensbeheerders het via ETF's, zonder zelf een wallet te beheren.
*   **Betalen.** Vooral met stablecoins, en vooral over grenzen heen. Voor een koffie in Nederland gebruik je nog gewoon je pinpas.
*   **Apps zonder tussenpersoon.** Op Ethereum en Solana draaien programma's ('smart contracts') die niemand kan stopzetten: lenen, sparen en handelen zonder loket (DeFi).
*   **Tokenisatie.** Gewone dingen zoals aandelen, obligaties en vastgoed als token op een blockchain zetten, zodat ze 24 uur per dag verhandelbaar zijn. In 2026 de snelst groeiende toepassing bij banken.
*   **Investeren.** Laten we eerlijk zijn: dit is waar de meeste mensen mee beginnen. Hoe dat verstandig kan, lees je in [mijn gids over geld verdienen met crypto](/blog/web3/handelen-in-crypto-valuta/).

## Regels en belasting: crypto is niet meer ongereguleerd

Vroeger stond in dit artikel dat er geen overheidsregulering was. Dat klopt niet meer. Sinds 30 december 2024 geldt in de hele EU de **MiCA-verordening** (Markets in Crypto-Assets). Iedere aanbieder die in Nederland crypto wil verkopen of bewaren, moet een vergunning hebben van de AFM of van een andere Europese toezichthouder. Sinds 1 juli 2026 is dat in de hele EU verplicht. Finst en Bitvavo hebben zo'n vergunning; Binance bijvoorbeeld niet, en dat is dan ook niet beschikbaar voor Nederlanders.

Belasting betaal je ook. In Nederland valt crypto in **box 3**, net als spaargeld en aandelen: niet over je winst bij verkoop, maar jaarlijks over de waarde op 1 januari, boven het heffingsvrije vermogen. Vanaf 2028 wil de overheid overstappen op een heffing over het werkelijke rendement. Exporteer daarom elk jaar je transactieoverzicht uit de app. De rekenvoorbeelden staan in [de crypto gids](/blog/web3/handelen-in-crypto-valuta/).

## Hoeveel bitcoin krijg je voor je geld?

Een veelgehoorde misvatting: "Bitcoin is te duur, ik kan geen 70.000 euro missen." Je hoeft nooit een hele bitcoin te kopen. Eén bitcoin bestaat uit honderd miljoen **satoshi**, en je koopt gewoon een stukje. Reken het uit:

<div class="tool not-prose" id="wat-sats">
<p class="tool__title">Van euro's naar satoshi</p>
<p class="tool__intro">Vul een bedrag in. De koers wordt live ingevuld zodra de cijfers bovenaan geladen zijn; anders rekent de tool met de koers van 20 september 2026.</p>
<div class="tool__grid">
<label class="tool__field">Bedrag (€)<input class="tool__input" id="wat-bedrag" type="number" min="0" step="10" value="50"></label>
<label class="tool__field">Bitcoinkoers (€)<input class="tool__input" id="wat-koers" type="number" min="1" step="100" value="70000"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Je krijgt</p><p class="tool__value" id="wat-btc">0,00071429 BTC</p><p class="tool__sub">een stukje van één bitcoin</p></div>
<div class="tool__result"><p class="tool__label">In satoshi</p><p class="tool__value" id="wat-satoshi">71.429</p><p class="tool__sub">1 bitcoin = 100.000.000 satoshi</p></div>
</div>
<p class="tool__note">Zonder handelskosten gerekend; bij een Nederlandse exchange betaal je daar 0,15% tot 0,25% bovenop.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n); };
  function calc() {
    var bedrag = +$('wat-bedrag').value || 0, koers = +$('wat-koers').value || 1, btc = bedrag / koers;
    $('wat-btc').textContent = nl(btc, 8) + ' BTC';
    $('wat-satoshi').textContent = nl(Math.round(btc * 1e8), 0);
  }
  ['wat-bedrag', 'wat-koers'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
</script>

## Voordelen en risico's van cryptocurrency

**Voordelen**

*   Je stuurt geld de wereld over zonder bank, zonder wisselkoers en zonder wachttijd van dagen.
*   De regels liggen vast in code. Niemand kan besluiten er ineens meer bitcoin bij te drukken.
*   Je hebt geen toestemming nodig. Een wallet maak je in een minuut, ook zonder bankrekening.
*   Je kunt met een paar euro beginnen.

**Risico's**

*   De koers beweegt hard. Dalingen van 50 tot 80% zijn in de geschiedenis van bitcoin normaal geweest.
*   Verlies je de sleutel van je eigen wallet, dan is het geld weg. Er is geen helpdesk die het terugzet.
*   Oplichting en hacks. In 2025 werd bij één exchange voor 1,5 miljard dollar gestolen. Een vergunning helpt, goede beveiliging aan jouw kant helpt meer.
*   Van de ruim 21.000 munten verdwijnt het grootste deel weer. Alleen omdat iets crypto heet, is het nog niets waard.

![Een sleutel en een hangslot die op het scherm van een smartphone liggen](/images/spots/watiscrypto-sleutel.webp "Wie de sleutel heeft, heeft de munten. Bewaar hem dus goed")

## Hoe begin je met cryptocurrencies?

Om te beginnen kies je een [crypto exchange](/blog/web3/beste-crypto-exchange/): een platform met vergunning waar je euro's stort en daarmee crypto koopt. In Nederland zijn dat vooral deze twee:

### 1. Finst

Goedkoopste exchange van Nederland, met cryptobundels en automatisch periodiek inleggen.

*   Handelskosten: 0,15%, zonder spread
*   Aanbod: 400+ munten

[Maak gratis account](/go/finst) of [lees mijn Finst review](/blog/review/finst-crypto-exchange/)

### 2. Bitvavo

Grootste exchange van de Benelux met het breedste aanbod in euro's.

*   Handelskosten: 0,25% bij een directe aankoop, 0,15% met een limietorder
*   Aanbod: 420+ munten

[Maak gratis account](/go/bitvavo) of [lees mijn Bitvavo review](/blog/review/bitvavo-review-crypto/)

Bij allebei stort je gratis met iDEAL of Bancontact en kun je vanaf een paar euro kopen. Hoe dat stap voor stap gaat, lees je in [mijn stappenplan crypto kopen met iDEAL](/blog/web3/crypto-kopen-met-ideal-stappenplan/). Wil je eerst meer begrijpen, volg dan een van [deze gratis crypto cursussen](/blog/web3/gratis-crypto-bitcoin-cursussen/).

## Veelgestelde vragen

### Is crypto hetzelfde als bitcoin?

Nee. Bitcoin is de eerste en grootste cryptomunt, goed voor ruim de helft van de hele markt. Alle andere munten heten altcoins.

### Is crypto anoniem?

Niet echt. Transacties zijn openbaar, alleen staat er geen naam bij een adres. Een exchange met vergunning kent jouw identiteit wel, net als je bank.

### Kan een cryptomunt naar nul gaan?

Ja, en dat gebeurt regelmatig bij kleine munten. Bitcoin en Ethereum bestaan al meer dan tien jaar en zijn een ander verhaal, maar ook daar zijn dalingen van tientallen procenten normaal.

### Moet ik een hele bitcoin kopen?

Nee. Je koopt een stukje, tot op een honderdmiljoenste nauwkeurig. Vanaf een paar euro doe je mee.
