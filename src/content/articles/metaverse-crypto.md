---
title: "Metaverse crypto in 2026 – Wat is er over van de 22 munten uit de hype?"
description: "Metaverse crypto in 2026: live koersen, de 22 munten uit mijn lijst met hun afstand tot de top, en wat er met Decentraland, The Sandbox en Meta gebeurde."
date: 2022-10-03
updated: 2026-09-19
category: "web3"
slug: "metaverse-crypto"
lang: "nl"
draft: false
featuredImage: "/images/headers/metaverse-crypto.webp"
---

Een virtuele wereld waarin alles mogelijk is. Welkom in de metaverse! Zo begon dit artikel in oktober 2022, met een lijst van **22 metaverse crypto** waarvan ik de potentie zag. Decentraland, The Sandbox, Axie Infinity, ApeCoin: munten van digitale werelden waar je land kocht, kleding droeg en naar concerten van Snoop Dogg ging.

Vier jaar later staat vrijwel elke munt uit die lijst meer dan 98% onder zijn top. Drie ervan worden niet eens meer bijgehouden door CoinGecko. Meta, het bedrijf dat zichzelf naar de metaverse vernoemde, verloor er in 2025 19,2 miljard dollar op en bevroor begin 2026 zijn eigen virtuele wereld op zijn eigen brillen. The Sandbox ontsloeg de helft van zijn mensen.

Ik laat dit artikel bewust online, maar dan eerlijk. Je ziet hieronder de live koersen van de vier bekendste metaverse-munten en hoe ver ze onder hun top staan, een tijdlijn van hoe de hype leegliep, de volledige lijst van 22 munten met hun stand op 20 september 2026 en waar je ze (nog) kunt kopen. En mijn advies of je er in 2026 nog iets mee moet. Wil je weten waar het in crypto in 2026 wél over gaat, van stablecoins tot tokenisatie? Dat staat in mijn [crypto-guide](/blog/web3/handelen-in-crypto-valuta/).

<div class="live-stats not-prose" id="metaverse-live" data-fallback-date="20 september 2026">
<div class="live-stats__tile"><p class="live-stats__label">Decentraland (MANA)</p><p class="live-stats__value" data-live="decentraland">€ 0,0705</p><p class="live-stats__sub" data-live="decentraland-sub">98,6% onder de top van november 2021</p></div>
<div class="live-stats__tile"><p class="live-stats__label">The Sandbox (SAND)</p><p class="live-stats__value" data-live="the-sandbox">€ 0,0345</p><p class="live-stats__sub" data-live="the-sandbox-sub">99,5% onder de top van november 2021</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Axie Infinity (AXS)</p><p class="live-stats__value" data-live="axie-infinity">€ 0,869</p><p class="live-stats__sub" data-live="axie-infinity-sub">99,4% onder de top van november 2021</p></div>
<div class="live-stats__tile"><p class="live-stats__label">ApeCoin (APE)</p><p class="live-stats__value" data-live="apecoin">€ 0,119</p><p class="live-stats__sub" data-live="apecoin-sub">99,5% onder de top van april 2022</p></div>
<p class="live-stats__note" data-live="note">Koersen van 20 september 2026. Zodra de pagina geladen is, worden ze ververst via CoinGecko.</p>
</div>

<script>
(function () {
  var box = document.getElementById('metaverse-live'); if (!box || !window.fetch) return;
  var q = function (k) { return box.querySelector('[data-live="' + k + '"]'); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n); };
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=decentraland,the-sandbox,axie-infinity,apecoin')
    .then(function (r) { return r.json(); })
    .then(function (list) {
      if (!list || !list.length) return;
      list.forEach(function (c) {
        var el = q(c.id); if (!el) return;
        var d = c.current_price < 0.1 ? 4 : (c.current_price < 10 ? 3 : 2);
        el.textContent = '€ ' + nl(c.current_price, d);
        q(c.id + '-sub').textContent = nl(Math.abs(c.ath_change_percentage), 1) + '% onder de top van ' + new Date(c.ath_date).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' });
      });
      q('note').textContent = 'Live koersen via CoinGecko, opgehaald op ' + new Date().toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + '.';
    }).catch(function () { /* fallback numbers stay */ });
})();
</script>

## Wat zijn metaverse crypto?

De metaverse is geen nieuwe term: hij komt uit het sciencefictionboek Snow Crash uit 1992. Bekend werd hij toen Facebook zich in oktober 2021 omdoopte tot Meta. **Een metaverse is een digitale wereld** waar mensen samenkomen: gamen, handelen, een galerie bezoeken, een vergadering houden. Een Zoom-call, maar dan in 3D.

Al dat virtuele verkeer heeft een munt nodig, en dat zijn de metaverse crypto. Met MANA koop je land en spullen in Decentraland, met SAND in The Sandbox, met AXS speel en stem je in Axie Infinity. De munten zijn buiten die werelden verhandelbaar voor euro's, en precies daarom kocht iedereen ze in 2021: niet om ermee te spelen, maar in de hoop dat ze meer waard zouden worden als de werelden vol liepen.

De werelden liepen niet vol. Dat is in één zin wat er gebeurde.

![Een VR-bril die stof verzamelt op een boekenplank](/images/spots/metaverse-vr-bril-stof.webp "De metaverse in 2026: de bril ligt op de plank")

## Hoe de metaverse-hype opkwam en leegliep

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">1992</p><p class="timeline__title">Het woord</p><p class="timeline__text">Neal Stephenson bedenkt 'metaverse' in zijn roman Snow Crash: een virtuele wereld waar je met een avatar in rondloopt.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2020</p><p class="timeline__title">Decentraland opent</p><p class="timeline__text">Na jaren bouwen gaat Decentraland in februari open in de browser. Land dat in 2017 zo'n 20 dollar kostte, wordt in de coronajaren duizenden dollars waard.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">2021</p><p class="timeline__title">De hype</p><p class="timeline__text">Facebook wordt Meta (oktober). In november betaalt een vastgoedfonds 2,43 miljoen dollar voor een stuk land in Decentraland; in december wisselt in The Sandbox land voor 4,3 miljoen van eigenaar. MANA en SAND bereiken hun top.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">2022</p><p class="timeline__title">De lege werelden</p><p class="timeline__text">Crypto stort in. In oktober meldt DappRadar dat Decentraland op één dag 38 actieve gebruikers met een transactie telt; The Sandbox komt op zo'n 500 per dag. De platforms spreken het tegen, maar de toon is gezet.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">2023</p><p class="timeline__title">Meta kiest AI</p><p class="timeline__text">Zuckerberg verlegt in februari de koers naar kunstmatige intelligentie. Het woord metaverse verdwijnt uit de presentaties.</p></li>
<li class="timeline__item"><span class="timeline__num">6</span><p class="timeline__year">2024</p><p class="timeline__title">Tweede poging</p><p class="timeline__text">Decentraland lanceert in oktober een nieuwe desktopversie met quests en minigames. Apple brengt de Vision Pro uit. De koersen bewegen nauwelijks.</p></li>
<li class="timeline__item"><span class="timeline__num">7</span><p class="timeline__year">2025</p><p class="timeline__title">The Sandbox halveert</p><p class="timeline__text">In augustus ontslaat The Sandbox meer dan de helft van zijn personeel, de oprichters stappen terug en het bedrijf richt zich op een memecoin-platform. Meta's Reality Labs verliest dit jaar 19,2 miljard dollar.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">8</span><p class="timeline__year">2026 – nu</p><p class="timeline__title">Geparkeerd</p><p class="timeline__text">Meta ontslaat in januari zo'n duizend mensen bij Reality Labs en bevriest Horizon Worlds op zijn Quest-brillen; de focus gaat naar slimme brillen. De metaverse-munten staan 98 tot 100% onder hun top.</p></li>
</ol>

## De 22 munten uit mijn lijst, vijf jaar later

Dit is de volledige lijst uit 2022, in dezelfde volgorde, met de koers in euro's op 20 september 2026 volgens CoinGecko, de hoogste koers ooit, hoe ver de munt daaronder staat, en of je hem op 20 september 2026 bij een Nederlandse exchange met MiCA-vergunning kon kopen (nagekeken op de muntenlijst van Finst en de marktenlijst van Bitvavo).

| # | Munt | Koers | Top ooit | Onder de top | Te koop in NL |
|---|---|---|---|---|---|
| 1 | Decentraland (MANA) | € 0,070 | € 5,21 (nov 2021) | 98,6% | Finst, Bitvavo |
| 2 | The Sandbox (SAND) | € 0,035 | € 7,49 (nov 2021) | 99,5% | Finst, Bitvavo |
| 3 | ApeCoin (APE) | € 0,12 | € 25,43 (apr 2022) | 99,5% | Finst, Bitvavo |
| 4 | Axie Infinity (AXS) | € 0,87 | € 142,75 (nov 2021) | 99,4% | Finst, Bitvavo |
| 5 | Enjin (ENJ) | € 0,023 | € 4,29 (nov 2021) | 99,5% | Bitvavo |
| 6 | Gala (GALA) | € 0,0016 | € 0,74 (nov 2021) | 99,8% | Finst, Bitvavo |
| 7 | My Neighbor Alice (ALICE) | € 0,12 | € 34,29 (mrt 2021) | 99,7% | Finst, Bitvavo |
| 8 | Aavegotchi (GHST) | € 0,056 | € 3,38 (apr 2024) | 98,3% | Nee |
| 9 | Flow (FLOW) | € 0,026 | € 35,97 (apr 2021) | 99,9% | Nee |
| 10 | Wemix (WEMIX) | € 0,17 | € 21,89 (nov 2021) | 99,2% | Nee |
| 11 | Netvrk (NETVR) | € 0,0009 | € 6,54 (nov 2021) | 99,99% | Nee |
| 12 | Highstreet (HIGH) | € 0,027 | € 33,88 (dec 2021) | 99,9% | Nee |
| 13 | Floki (FLOKI) | € 0,000022 | € 0,00032 (jun 2024) | 93,0% | Finst, Bitvavo |
| 14 | Metahero (HERO) | € 0,00049 | € 0,22 (dec 2021) | 99,8% | Nee |
| 15 | Terra Virtua Kolect (TVK) | niet meer gevolgd | – | – | Nee |
| 16 | Epik Prime (EPIK) | niet meer gevolgd | – | – | Nee |
| 17 | RFOX (RFOX) | € 0,00015 | € 0,32 (apr 2021) | 99,95% | Nee |
| 18 | Bloktopia (BLOK) | niet meer gevolgd | – | – | Nee |
| 19 | Render (RENDER) | € 1,33 | € 12,42 (mrt 2024) | 89,3% | Finst, Bitvavo |
| 20 | Star Atlas (ATLAS) | € 0,00012 | € 0,23 (sep 2021) | 99,9% | Nee |
| 21 | Alien Worlds (TLM) | € 0,0013 | € 0,61 (mei 2021) | 99,8% | Finst, Bitvavo |
| 22 | Cornucopias (COPI) | € 0,0012 | € 0,12 (dec 2023) | 99,0% | Nee |

Bron: CoinGecko, koersen en toppen in euro's, 20 september 2026. Wat opvalt:

*   **Negentien van de 22 staan 98% of meer onder hun top.** Wie op de top kocht en vasthield, heeft van elke 100 euro nog 1 of 2 euro over. Ter vergelijking: bitcoin stond half september 2026 zo'n 40% onder zijn top van oktober 2025.
*   **Drie munten bestaan feitelijk niet meer.** Terra Virtua Kolect, Epik Prime en Bloktopia worden niet meer gevolgd door CoinGecko; van Bloktopia en Metahero reageerde de website in september 2026 ook niet meer.
*   **De twee 'minst slechte' zijn geen metaverse-munten meer.** Render (89% onder de top) verhuurt rekenkracht van grafische kaarten en vond in AI een nieuwe klant. Floki (93% onder de top) is vooral een memecoin. Allebei hebben ze hun top ook later, in 2024, en niet in 2021.
*   **De grote werelden leven nog, hun munten nauwelijks.** Decentraland heeft sinds 2024 een nieuwe desktopversie en wordt bestuurd door zijn DAO; The Sandbox draait door met de helft van het personeel. Maar MANA en SAND zijn samen minder dan 250 miljoen euro waard, een fractie van 2021.

![Een klein blokjesstadje op een tafel met een grafiek erboven die steil omlaag loopt](/images/spots/metaverse-grafiek-omlaag.webp "Van de 22 munten staan er negentien meer dan 98% onder hun top")

In 2022 stond hier ook nog een promotie voor een memecoin die je op een buitenlandse exchange kon kopen. Die heb ik verwijderd: ik kon niet meer nagaan wat er van het project geworden is, en die exchange mag Nederlanders sinds 2026 niet meer bedienen. Daarover hieronder meer.

## Waar koop je metaverse crypto in 2026?

De grootste verandering sinds 2022 is niet de koers, maar de regels. Sinds eind 2024 geldt in de EU de MiCA-verordening: wie in Nederland crypto wil aanbieden, heeft een vergunning nodig van de AFM of een andere Europese toezichthouder. De overgangsperiode liep op 1 juli 2026 af. Wat dat voor dit lijstje betekent:

**Nederlandse exchanges met vergunning.** De negen munten uit de tabel met "Finst, Bitvavo" of "Bitvavo" koop je gewoon met iDEAL bij [Finst](/go/finst) (0,15% per transactie, de goedkoopste van Nederland) of [Bitvavo](/go/bitvavo) (de grootste). Mijn ervaringen staan in mijn [Finst-review](/blog/review/finst-crypto-exchange/) en [Bitvavo-review](/blog/review/bitvavo-review-crypto/).

**Kleinere munten.** Die stonden in 2022 op grote buitenlandse platforms. KuCoin heeft sinds november 2025 een Europese vergunning via Oostenrijk en mag Nederlanders dus bedienen. Binance, MEXC en Bitget hebben zo'n vergunning niet: Binance is al sinds juli 2023 niet beschikbaar voor Nederlanders, MEXC stopt in november 2026 met zijn Nederlandse klanten en Bitget biedt in Europa geen diensten aan tot het een vergunning heeft. Naar die drie verwijs ik daarom niet meer.

Mijn advies: koop niets wat niet bij een exchange met Europese vergunning staat. Niet omdat het verboden is om ergens anders te kopen, maar omdat een munt die geen enkel gereguleerd platform wil noteren, meestal een reden heeft.

## Is investeren in metaverse crypto in 2026 nog iets?

Als thema: nee. In 2022 schreef ik dat je moest spreiden over meerdere kanshebbers, omdat je niet wist welke metaverse zou winnen. Het antwoord bleek: geen van allen. De werelden met bezoekers heten Roblox en Fortnite en hebben geen munt; waar je daar wél geld verdient, lees je in [geld verdienen met de metaverse](/blog/web3/geld-verdienen-metaverse/).

Als les: ja. Een munt van een virtuele wereld is alleen iets waard als die wereld gebruikt wordt. Kijk dus niet naar de roadmap maar naar de bezoekers, en wees eerlijk over waarom je koopt. Ik kocht in 2022 zelf land en munten omdat ik dacht dat anderen er later meer voor zouden betalen. Dat is geen investering, dat is een gok op de volgende koper.

Wat ik in 2026 wel doe: elke maand een vast bedrag in de grote munten, bij een exchange met vergunning, en er verder niet naar kijken. Saai, maar het werkt door de cycli heen. Hoe dat precies gaat, wat het kost, hoe staking en box 3 meetellen en welke munten in 2026 groot zijn, staat allemaal in [geld verdienen met crypto in 2026](/blog/web3/handelen-in-crypto-valuta/). Wil je toch een metaverse-munt in je portfolio omdat je in de wereld erachter gelooft? Neem er dan één, klein, en alleen met geld dat je kunt missen.

## Conclusie: metaverse crypto in 2026

De metaverse-hype van 2021 leverde een lijst van 22 munten op die in 2026 vrijwel allemaal 98% of meer onder hun top staan, en drie die er niet meer zijn. De werelden zelf bestaan nog, maar leeg. Meta gaf er meer dan 80 miljard dollar aan uit en koos voor slimme brillen. Het is een van de duidelijkste voorbeelden van een hype die geen gebruik werd.

De koersen bovenaan dit artikel blijven live, dus je kunt over een jaar zelf zien of ik het mis had. Tot die tijd: crypto kopen doe je in 2026 verstandiger via [de grote munten en periodiek inleggen](/blog/web3/handelen-in-crypto-valuta/) dan via een virtuele wereld waar niemand woont.
