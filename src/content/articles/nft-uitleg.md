---
title: "Geld verdienen met NFT's in 2026 – Eerlijke uitleg na de hype"
description: "Wat een NFT is, waarom de hype van 2021 leegliep en wat er in 2026 nog van over is. Met live floor prices, een flip-calculator en mijn Metabunkers-les."
date: 2021-12-26
updated: 2026-09-19
category: "web3"
slug: "nft-uitleg"
lang: "nl"
draft: false
featuredImage: "/images/headers/nft-uitleg.webp"
---

**Geld verdienen met NFT's?** Eind 2021 schreef ik dit artikel voor het eerst, midden in de hype. Beeple had net een digitaal kunstwerk voor 69 miljoen dollar verkocht, de eerste tweet ooit ging voor 2,9 miljoen dollar van de hand en in de Discord-groepen waar ik in zat, vlogen de winsten je om de oren. Ik startte zelfs met vrienden een eigen NFT-project.

Vijf jaar later ziet de wereld er anders uit. Diezelfde tweet kreeg in 2022 een hoogste bod van 280 dollar. Nike sloot zijn NFT-studio, Starbucks stopte met zijn NFT-spaarprogramma en de goedkoopste Bored Ape kost geen 350.000 dollar meer, maar een fractie daarvan. De actuele prijs staat hieronder, live.

In dit artikel lees je wat een NFT precies is, wat het ding waarde geeft (en wat niet), hoe de hype leegliep en wat er in 2026 eerlijk gezegd nog te verdienen valt: met het flippen van NFT's én met het uitbrengen van je eigen NFT. Ik neem je mee in wat ik zelf leerde met ons project Metabunkers. Wil je liever weten wat er van de bredere cryptowereld overbleef? Dat staat in mijn [crypto-guide voor 2026](/blog/web3/handelen-in-crypto-valuta/).

<div class="live-stats not-prose" id="nftuitleg-live" data-fallback-date="20 september 2026">
<div class="live-stats__tile"><p class="live-stats__label">Goedkoopste CryptoPunk</p><p class="live-stats__value" data-live="punks">29,65 ETH</p><p class="live-stats__sub" data-live="punks-sub">± $ 76.500 · 84% onder de top</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Goedkoopste Bored Ape</p><p class="live-stats__value" data-live="bayc">6,66 ETH</p><p class="live-stats__sub" data-live="bayc-sub">± $ 17.200 · 96% onder de top</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Goedkoopste Pudgy Penguin</p><p class="live-stats__value" data-live="pudgy">3,31 ETH</p><p class="live-stats__sub" data-live="pudgy-sub">± $ 8.500 · 94% onder de top</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Ether (ETH) nu</p><p class="live-stats__value" data-live="eth">€ 2.247</p><p class="live-stats__sub">de munt waarin NFT's geprijsd zijn</p></div>
<p class="live-stats__note" data-live="note">Cijfers van 20 september 2026. Zodra de pagina geladen is, worden ze ververst via CoinGecko.</p>
</div>

<script>
(function () {
  var box = document.getElementById('nftuitleg-live'); if (!box || !window.fetch) return;
  var q = function (k) { return box.querySelector('[data-live="' + k + '"]'); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { maximumFractionDigits: d || 0 }).format(n); };
  var get = function (u) { return fetch(u).then(function (r) { return r.json(); }); };
  var cols = [['punks', 'cryptopunks'], ['bayc', 'bored-ape-yacht-club'], ['pudgy', 'pudgy-penguins']];
  var calls = cols.map(function (c) { return get('https://api.coingecko.com/api/v3/nfts/' + c[1]); });
  calls.push(get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur'));
  Promise.all(calls).then(function (res) {
    cols.forEach(function (c, i) {
      var d = res[i]; if (!d || !d.floor_price) return;
      q(c[0]).textContent = nl(d.floor_price.native_currency, 2) + ' ETH';
      q(c[0] + '-sub').textContent = '± $ ' + nl(d.floor_price.usd) + ' · ' + nl(Math.abs(d.ath_change_percentage.usd)) + '% onder de top';
    });
    var e = res[3] && res[3].ethereum; if (e) q('eth').textContent = '€ ' + nl(e.eur);
    q('note').textContent = 'Live cijfers via CoinGecko, opgehaald op ' + new Date().toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + '.';
  }).catch(function () { /* fallback numbers stay */ });
})();
</script>

## Wat is een NFT?

NFT staat voor **non-fungible token**. In correct Nederlands: een niet-verwisselbare token. Oké.

Een NFT is een uniek eigendomsbewijs op de blockchain. Vergelijk het met een kunstcollectie: elk werk is anders en krijgt zijn eigen waarde. Eén bitcoin is altijd precies hetzelfde als een andere bitcoin (verwisselbaar dus), maar NFT nummer 4.312 uit een collectie is niet hetzelfde als nummer 4.313.

Net als bij echte kunst kun je een NFT verkopen. Alleen betaal je met [crypto](/blog/web3/handelen-in-crypto-valuta/), meestal ether, en wordt de transactie vastgelegd op de blockchain. Daar staat voor iedereen te lezen wie de eigenaar is.

> De blockchain is een manier om gegevens gespreid (gedecentraliseerd) op te slaan. Zie het als een grote database die over duizenden computers verdeeld is, zodat niemand in zijn eentje de inhoud kan aanpassen.

Bij een NFT hoort meestal een plaatje, een video, een muziekbestand of een 3D-model. Bij fysieke kunst zie je wie de eigenaar is doordat het bij iemand aan de muur hangt; bij digitale kunst regelt de NFT dat. Eigenlijk kan alles wat je online vindt een NFT worden, van een tweet tot een toegangskaartje.

![Een bijna lege galerie met drie kleine pixelkunstwerken aan de muur](/images/spots/nftuitleg-galerij.webp "Een NFT is een eigendomsbewijs: het plaatje zelf mag overal hangen")

Belangrijk om te snappen: wie een NFT koopt, is de eigenaar van de token, maar het plaatje zelf mag nog steeds overal op internet staan. Je koopt het eigendomsbewijs, niet het auteursrecht. Een beetje zoals je overal foto's van de Nachtwacht tegenkomt, terwijl er maar één in het Rijksmuseum hangt.

![Everydays: The First 5000 Days van Beeple](/images/migrated/nft-geld-verdienen-beeple-1.webp "Everydays: The First 5000 Days van Beeple, in maart 2021 bij Christie's verkocht voor 69,3 miljoen dollar")

## Wat geeft een NFT waarde (en wat niet)?

Net als bij fysieke kunst is een NFT waard **wat een gek ervoor geeft**. Zou de Mona Lisa nu voor één euro te koop staan, dan wil praktisch iedereen op de wereld hem hebben, en bij een veiling gaat de prijs net zo lang omhoog tot er één koper overblijft. Schaarste plus vraag: daar komt de prijs vandaan.

In 2021 was die vraag enorm. Mensen zaten thuis door corona, hadden geld over en wilden ergens bij horen. Wie een NFT kocht, hoopte hem later voor meer door te verkopen aan de volgende koper. Dat werkt precies zolang er een volgende koper is. En dat is de les van de afgelopen jaren: **de vraag naar de meeste NFT's was hype, geen gebruik.** Een onderzoek uit september 2023 concludeerde dat 95% van alle NFT-collecties op dat moment niets meer waard was.

Wat wél bleef, is de techniek: een uniek, overdraagbaar bewijs op een blockchain. Daar wordt in 2026 nog steeds mee gebouwd, alleen hoor je het woord NFT er zelden bij. Daarover verderop meer.

## Hoe de NFT-hype opkwam en leegliep

Elke golf bouwde op de vorige, en de grootste golf had de grootste kater. In vogelvlucht:

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">2012</p><p class="timeline__title">Gekleurde munten</p><p class="timeline__text">Meni Rosenfeld beschrijft hoe je een bitcoin een extra laag geeft, zodat hij iets anders vertegenwoordigt dan geld. Het idee achter elke NFT.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2014</p><p class="timeline__title">Quantum, de eerste NFT</p><p class="timeline__text">Kevin McCoy en Anil Dash maken op een conferentie de eerste NFT: een videoclip, ter plekke verkocht voor 4 dollar. In 2021 bij Sotheby's voor bijna 1,5 miljoen.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">2017</p><p class="timeline__title">CryptoPunks en CryptoKitties</p><p class="timeline__text">10.000 pixelpunks worden in juni gratis weggegeven. Kattenfokspel CryptoKitties legt in november het Ethereum-netwerk plat.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">2021</p><p class="timeline__title">De hype</p><p class="timeline__text">Beeple 69 miljoen, de eerste tweet 2,9 miljoen, ruim 17 miljard dollar aan handel. Iedereen maakt NFT's. Ik ook.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">2022</p><p class="timeline__title">De kater</p><p class="timeline__text">Crypto stort in. De tweet krijgt als hoogste bod 280 dollar. De goedkoopste Bored Ape piekt in mei op 128 ETH en zakt daarna hard.</p></li>
<li class="timeline__item"><span class="timeline__num">6</span><p class="timeline__year">2023</p><p class="timeline__title">Opruimen</p><p class="timeline__text">Een onderzoek telt 95% waardeloze collecties. Marktplaatsen maken royalty's voor makers optioneel. Op Bitcoin verschijnen 'Ordinals'.</p></li>
<li class="timeline__item"><span class="timeline__num">7</span><p class="timeline__year">2024</p><p class="timeline__title">Merken stappen uit</p><p class="timeline__text">Starbucks stopt in maart met zijn NFT-programma Odyssey, Nike sluit in december zijn NFT-studio RTFKT.</p></li>
<li class="timeline__item"><span class="timeline__num">8</span><p class="timeline__year">2025</p><p class="timeline__title">Klein, maar levend</p><p class="timeline__text">2,8 miljard dollar aan verkopen in het eerste halfjaar, vooral kleine van 80 tot 100 dollar. Yuga Labs verkoopt de rechten op CryptoPunks voor zo'n 20 miljoen dollar aan een stichting.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">9</span><p class="timeline__year">2026 – nu</p><p class="timeline__title">Na de hype</p><p class="timeline__text">OpenSea handelt op 22 blockchains, verhoogt de commissie naar 1% en stelt zijn eigen SEA-token uit. Gas kost centen. NFT's leven door als tickets, productpaspoorten en lidmaatschappen.</p></li>
</ol>

## Kun je in 2026 nog geld verdienen met NFT's?

Eerlijk antwoord: een beetje, met veel werk en een reëel risico dat je inleg verdampt. De markt is niet dood, maar wel klein. Volgens de cijfers van CryptoSlam wisselden in de eerste helft van 2025 elke maand vier tot zes miljoen NFT's van eigenaar, voor gemiddeld 80 tot 100 dollar per stuk. In november 2025 was de totale maandomzet nog zo'n 320 miljoen dollar. Ter vergelijking: in 2021 ging er in het hele jaar ruim 17 miljard dollar om.

Er zijn nog altijd twee manieren. De eerste is NFT's kopen en met winst doorverkopen (flippen). De tweede is je eigen werk als NFT uitbrengen. Ik loop ze allebei langs, inclusief wat er in 2026 anders is dan toen ik dit voor het eerst schreef.

## Manier 1: NFT's kopen en verkopen (flippen)

Het principe is simpel: je koopt een NFT voor 0,05 ETH en verkoopt hem een week later voor 0,08 ETH. Het verschil is je winst, min de commissie van de marktplaats, een eventuele royalty voor de maker en de netwerkkosten (gas). Zo koop je in 2026 een NFT:

1. **Maak een wallet.** [MetaMask](https://metamask.io/) is nog altijd de bekendste; Rabby en Phantom zijn goede alternatieven. Schrijf je herstelwoorden op papier en deel ze met niemand, ook niet met 'de helpdesk'.
2. **Koop ether** bij een Nederlandse exchange met MiCA-vergunning, bijvoorbeeld [Finst](/go/finst) (0,15% per transactie), en stuur die naar je wallet. Hoe dat werkt lees je in mijn [stappenplan crypto kopen met iDEAL](/blog/web3/crypto-kopen-met-ideal-stappenplan/).
3. **Verbind je wallet met een marktplaats.** OpenSea is nog steeds de grootste; welke andere er zijn lees je in [mijn NFT-guide](/blog/web3/nft-guide/#marktplaats-kiezen).
4. **Koop de NFT en betaal de gas.** Groot verschil met 2021: een transactie op Ethereum kostte toen tientallen tot honderden euro's, in 2026 meestal centen tot een paar euro. Op netwerken als Base en Polygon betaal je vrijwel niets.
5. **Zet hem weer te koop** voor een hogere prijs. OpenSea rekent sinds begin 2026 1% commissie (dat was 0,5%).

![Een open portemonnee met één gloeiende token erin](/images/spots/nftuitleg-wallet.webp "Je wallet is je portemonnee én je kluis: wie je herstelwoorden heeft, heeft alles")

Of een flip iets oplevert, hangt af van twee dingen: of je het juiste project kiest én of de kosten je winst niet opeten. Dat laatste reken je hieronder uit.

<div class="tool not-prose" id="nftuitleg-calc">
<p class="tool__title">Reken uit wat een NFT-flip oplevert</p>
<p class="tool__intro">Vul je eigen cijfers in; de uitkomst rekent direct mee. Prijzen in ETH, de uitkomst in euro's.</p>
<div class="tool__grid">
<label class="tool__field">Aankoopprijs (ETH)<input class="tool__input" id="nftuitleg-buy" type="number" min="0" step="0.01" value="0.05"></label>
<label class="tool__field">Verkoopprijs (ETH)<input class="tool__input" id="nftuitleg-sell" type="number" min="0" step="0.01" value="0.08"></label>
<label class="tool__field">Commissie marktplaats (%)<input class="tool__input" id="nftuitleg-fee" type="number" min="0" step="0.1" value="1"></label>
<label class="tool__field">Royalty voor de maker (%)<input class="tool__input" id="nftuitleg-roy" type="number" min="0" step="0.1" value="2.5"></label>
<label class="tool__field">Gas per transactie (€)<input class="tool__input" id="nftuitleg-gas" type="number" min="0" step="0.1" value="1"></label>
<label class="tool__field">Koers ether (€ per ETH)<input class="tool__input" id="nftuitleg-eth" type="number" min="0" step="1" value="2247"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Nettowinst</p><p class="tool__value" id="nftuitleg-net">€ 59</p><p class="tool__sub">na commissie, royalty en gas</p></div>
<div class="tool__result"><p class="tool__label">Rendement</p><p class="tool__value" id="nftuitleg-pct">52%</p><p class="tool__sub">op je inleg, vóór belasting</p></div>
</div>
<p class="tool__note">Rekenvoorbeeld, geen belofte. OpenSea rekent sinds begin 2026 1% commissie, royalty's zijn bij de meeste collecties optioneel en gas op Ethereum kost in 2026 meestal centen tot een paar euro (bronnen in de tekst). De koers van ether van 20 september 2026 staat al ingevuld.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 }).format(n); };
  function calc() {
    var buy = +$('nftuitleg-buy').value || 0, sell = +$('nftuitleg-sell').value || 0, fee = +$('nftuitleg-fee').value || 0,
        roy = +$('nftuitleg-roy').value || 0, gas = +$('nftuitleg-gas').value || 0, eth = +$('nftuitleg-eth').value || 0;
    var cost = buy * eth + gas, net = sell * (1 - (fee + roy) / 100) * eth - gas - cost;
    $('nftuitleg-net').textContent = '€ ' + fmt(net);
    $('nftuitleg-pct').textContent = cost > 0 ? fmt(net / cost * 100) + '%' : '–';
  }
  ['nftuitleg-buy', 'nftuitleg-sell', 'nftuitleg-fee', 'nftuitleg-roy', 'nftuitleg-gas', 'nftuitleg-eth'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
</script>

Het kiezen van het project is het echte werk. Waar je op let (hoe groot de collectie is, hoeveel er te koop staat, het handelsvolume, het team, de community) beschrijf ik stap voor stap in mijn artikel over [NFT-research](/blog/web3/nft-project-research-onderzoeken-flippen/). Ik leerde flippen begin 2022 in een Nederlandse cursus die inmiddels niet meer bestaat.

Wat ik je vooral wil meegeven: in 2021 kon je bijna niet verkeerd kopen, omdat alles steeg. In 2026 kan dat wel. Handel alleen met geld dat je kunt missen en zie het als leergeld, niet als inkomen.

## Manier 2: je eigen NFT uitbrengen

Ben je ontwerper, fotograaf, muzikant of illustrator? Dan is een NFT een manier om digitaal werk te verkopen met een eigendomsbewijs erbij. In 2021 doken Eminem, Snoop Dogg en Gary Vaynerchuk erin; in 2026 is het vooral iets voor makers met een eigen publiek. Zonder bereik verkoop je niets, hoe mooi het ook is.

Voor het gemak neem ik je mee in het project dat ik eind 2021 samen met een groep vrienden opzette: **Metabunkers**.

![Het logo van Metabunkers](/images/migrated/metabunkers-logo-zwart-groot.webp "Metabunkers, ons eigen NFT-project uit 2021")

### Stap 1: de kunst en het verhaal

Wij maakten pixel voor pixel handgetekende bunkers: een plek die je de illusie van veiligheid geeft als de wereld ten onder gaat. Met een knipoog. Het concept om de bunkers heen bleek belangrijker dan hoe een bunker eruitzag: kopers vonden vooral het verhaal leuk. Wij schreven daarom letterlijk een verhaal, geïnspireerd op de radio-uitzending van War of the Worlds uit 1938, over buren die hun auto's inpakken en wegrijden terwijl de nieuwslezer een invasie meldt.

Dat is de les die overeind blijft: wie een NFT verkoopt, verkoopt een verhaal. Een gekleurd vierkant kan technisch prima een NFT zijn, maar wie wil dat hebben?

![Een kleine betonnen bunker op een heuvel onder een nachthemel, in pixelstijl](/images/spots/nftuitleg-bunker.webp "Metabunkers: het verhaal verkocht beter dan het plaatje")

### Stap 2: van kunst naar NFT

Je hoeft niets te programmeren. Op OpenSea (of een andere marktplaats) upload je een afbeelding, video of 3D-model, vult naam en beschrijving in en 'mint' het: vanaf dat moment staat het op de blockchain. Je kiest daarbij een netwerk. In 2021 was Ethereum duur en Polygon het goedkope alternatief; in 2026 kost minten op Ethereum zelf ook nog maar centen tot een paar euro, en op Base of Polygon vrijwel niets.

Collecties van duizenden stuks met een eigen smart contract zijn een ander verhaal. Daarvoor huur je een developer in of leer je het zelf. Hoe dat zit, welke blockchains er zijn en waar je plaatje eigenlijk opgeslagen staat, lees je in mijn [NFT-guide](/blog/web3/nft-guide/).

### Stap 3: promotie (het echte werk)

Er zijn miljoenen NFT's gemaakt. Daaruit naar voren komen kost meer tijd dan het maken. Een goed project begint met promotie vóórdat er een NFT bestaat: op X (toen nog Twitter), Discord en Instagram. Niet doodgooien met reclame, maar humor en community bouwen. Vraag je bij elke post af: zou ik dit zelf kopen? Pas als het antwoord ja is, valt er iets te verwachten.

Wat wij aan Metabunkers overhielden: een hoop geleerd over verhaal, community en marketing, en het besef dat een NFT-project vooral een marketingproject is. De collectie staat nog altijd op OpenSea.

## Wat er in 2026 van NFT's overblijft

De handel in plaatjes is een niche geworden, maar het idee erachter, een uniek en overdraagbaar bewijs op een blockchain, wordt nog steeds gebruikt. Alleen zonder dat het woord NFT erbij staat:

*   **Productpaspoorten.** Horlogemerk Breitling geeft bij elk horloge een digitaal paspoort op de blockchain uit via Arianee; datzelfde platform telt inmiddels ruim 4 miljoen uitgegeven passen. En vanaf 18 februari 2027 is een digitaal productpaspoort in de EU verplicht voor accu's van elektrische auto's en grote industriële batterijen; textiel volgt later. Blockchain is daarbij overigens niet verplicht.
*   **Lidmaatschappen.** Restaurant Flyfish Club in New York laat je in 2026 nog steeds alleen binnen met een token in je wallet; een lidmaatschap kost 2.500 dollar entree plus 3.500 dollar per jaar, en er is een wachtlijst.
*   **Tickets.** Het Nederlandse GUTS Tickets, dat kaartjes op de blockchain zette tegen doorverkoop, ging op in CM.com; de techniek erachter heet nu OPEN Ticketing.
*   **Herinneringen.** POAP, het digitale aanwezigheidsbewijs voor events, bestaat in 2026 nog en telt volgens de eigen site meer dan een miljoen uitgegeven POAP's.

Wat bedrijven daarmee kunnen (en wat er van de bekende voorbeelden uit 2022 is geworden), lees je in [mijn artikel met NFT-ideeën voor bedrijven](/blog/web3/nft-ideeen-bedrijf/). De grotere ontwikkelingen in crypto, zoals stablecoins, tokenisatie, MiCA en ETF's, staan in [de crypto-guide](/blog/web3/handelen-in-crypto-valuta/).

## Veelgestelde vragen over NFT's

### Is een NFT hetzelfde als crypto?

Nee. Crypto zoals bitcoin en ether zijn verwisselbare munten: elke munt is gelijk. Een NFT is een uniek bewijs op dezelfde soort blockchain. Je hebt wel crypto nodig om een NFT te kopen, meestal ether.

### Moet ik belasting betalen over NFT's?

Ja. Voor de Belastingdienst zijn NFT's bezit, net als crypto: ze tellen mee in box 3 tegen de waarde op 1 januari. Hoe box 3 in 2026 werkt en wat het je kost, reken ik voor in de [crypto-guide](/blog/web3/handelen-in-crypto-valuta/).

### Zijn NFT's dood?

De hype wel, de techniek niet. Er worden nog miljoenen NFT's per maand verhandeld, alleen voor tientallen dollars per stuk in plaats van tienduizenden. En de nuttige toepassingen (tickets, paspoorten, lidmaatschappen) noemen zichzelf zelden nog NFT.

### Wat heeft de metaverse ermee te maken?

In 2021 was het idee dat je met NFT's land, kleding en spullen zou bezitten in virtuele werelden. Wat daarvan terechtkwam lees je in mijn artikel over [metaverse crypto](/blog/web3/metaverse-crypto/).

## Conclusie: NFT's in 2026

Voor wie nieuw is, voelt het allemaal nog steeds overweldigend. Logisch. Maar de beste manier om het te snappen is nog altijd dezelfde: koop één goedkope NFT van een paar euro, stuur hem naar een andere wallet, zet hem te koop en ervaar hoe het werkt. Dat kost in 2026 bijna niets meer aan gas.

Verwacht er alleen geen inkomen van. Wie in 2021 riep dat NFT's kopen "net als Bitcoin kopen in 2012" was, en ja, dat riep ik ook, heeft ongelijk gekregen. Wat overeind bleef, is de techniek en de les dat een goed verhaal meer waard is dan een goed plaatje. Wil je met crypto beginnen op een manier die wél door de jaren heen werkt? Lees dan [hoe ik zelf in crypto investeer](/blog/web3/handelen-in-crypto-valuta/): elke maand een beetje, in de grote munten, bij een exchange met vergunning.

<aside class="cta-box cta-box--book not-prose"><div><p class="cta-box__eyebrow">Gratis boek</p><p><strong>Dé inspiratie voor een vrij leven.</strong> Alle verhalen en lessen uit zes jaar reizen en online werken staan in mijn boek. Gratis en direct te downloaden, geen e-mail nodig.</p></div><a class="btn btn-primary" href="/boek/">Download het boek</a></aside>
