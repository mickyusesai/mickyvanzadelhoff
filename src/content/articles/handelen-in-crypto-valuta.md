---
title: "Geld verdienen met crypto in 2026 – Ultieme guide"
description: "Geld verdienen met crypto in 2026: live koers, traden, staken met actuele percentages, periodiek inleggen, MiCA en box 3 uitgelegd, en waar je veilig begint."
date: 2024-01-01
updated: 2026-09-17
category: "web3"
slug: "handelen-in-crypto-valuta"
lang: "nl"
draft: false
featuredImage: "/images/headers/handelen-in-crypto-valuta.webp"
---

**Geld verdienen met crypto in 2026?** Je hebt er vast wel eens over gelezen: jonge mensen die miljonair werden met Bitcoin. Inmiddels hebben zo'n 774 miljoen mensen wereldwijd crypto, en dat aantal groeit nog steeds. De cryptomarkt van 2026 is dan ook een heel andere dan die van een paar jaar geleden: met vergunningen, ETF's, stablecoins en grote beleggers erbij.

In dit artikel lees je hoe crypto en blockchain werken, welke manieren er zijn om er geld mee te verdienen (traden, periodiek inleggen, staken, masternodes en mining), wat er sinds 2025 veranderd is aan regels en belasting, en waar je als Nederlander of Belg het goedkoopst en veiligst begint. De koers en de marktcijfers hieronder worden live opgehaald, dus die kloppen ook als je dit over een half jaar leest.

Laten we eerlijk zijn: naast alle miljonairs zijn er ook verliezers. Vaak zijn dat mensen die instapten vanwege de hype, zonder te begrijpen waar ze nu echt in investeerden. Daarom hier een evenwichtig artikel dat je vertelt **hoe je wél geld verdient met crypto in 2026** – op een verstandige manier.

<div class="live-stats not-prose" id="crypto-live" data-fallback-date="17 september 2026">
<div class="live-stats__tile"><p class="live-stats__label">Bitcoin nu</p><p class="live-stats__value" data-live="btc-eur">€ 66.700</p><p class="live-stats__sub" data-live="btc-usd">$ 76.600 · <span data-live="btc-24h">+1,6% in 24 uur</span></p></div>
<div class="live-stats__tile"><p class="live-stats__label">Bitcoin-dominantie</p><p class="live-stats__value" data-live="dominance">58,3%</p><p class="live-stats__sub">aandeel van Bitcoin in de hele markt</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Totale cryptomarkt</p><p class="live-stats__value" data-live="total">€ 2.290 mld</p><p class="live-stats__sub">alle munten bij elkaar</p></div>
<div class="live-stats__tile"><p class="live-stats__label">Actieve munten</p><p class="live-stats__value" data-live="coins">21.251</p><p class="live-stats__sub">gevolgd door CoinGecko</p></div>
<p class="live-stats__note" data-live="note">Cijfers van 17 september 2026. Zodra de pagina geladen is, worden ze ververst via CoinGecko.</p>
</div>

<script>
(function () {
  var box = document.getElementById('crypto-live'); if (!box || !window.fetch) return;
  var q = function (k) { return box.querySelector('[data-live="' + k + '"]'); };
  var nl = function (n, d) { return new Intl.NumberFormat('nl-NL', { maximumFractionDigits: d || 0 }).format(n); };
  Promise.all([
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur,usd&include_24hr_change=true').then(function (r) { return r.json(); }),
    fetch('https://api.coingecko.com/api/v3/global').then(function (r) { return r.json(); })
  ]).then(function (res) {
    var p = res[0].bitcoin, g = res[1].data, ch = p.eur_24h_change;
    q('btc-eur').textContent = '€ ' + nl(p.eur);
    q('btc-usd').firstChild.textContent = '$ ' + nl(p.usd) + ' · ';
    q('btc-24h').textContent = (ch >= 0 ? '+' : '') + nl(ch, 1) + '% in 24 uur';
    q('dominance').textContent = nl(g.market_cap_percentage.btc, 1) + '%';
    q('total').textContent = '€ ' + nl(g.total_market_cap.eur / 1e9) + ' mld';
    q('coins').textContent = nl(g.active_cryptocurrencies);
    q('note').textContent = 'Live cijfers via CoinGecko, opgehaald op ' + new Date().toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + '.';
  }).catch(function () { /* fallback numbers stay */ });
})();
</script>

Bitcoin zette in oktober 2025 een record neer van ruim 125.000 dollar, zakte in juni 2026 terug tot onder de 60.000 dollar en krabbelt sindsdien weer op. Wie roept dat crypto "dood" is, heeft het al een keer of vijf mis gehad. Wie roept dat het alleen maar omhoog gaat, ook.

## Zo begin je met crypto

Om geld te verdienen met crypto heb je allereerst een plek nodig om deze te kopen en te verhandelen. Dit doe je eenvoudig (en het goedkoopst) via het Nederlandse **[Finst](/go/finst)**: een vaste 0,15% per transactie zonder verborgen spread, 400+ munten en een MiCA-vergunning van de AFM. Een account aanmaken is gratis en makkelijk!

[Gratis Account Aanmaken](/go/finst)

## Wat zijn crypto en blockchain?

Je hebt vast wel eens van Bitcoin gehoord; een digitale munt die draait op **blockchaintechnologie**. Dat is een manier om gegevens gespreid digitaal op te slaan zonder daar één centraal punt voor te gebruiken. Duizenden computers over de hele wereld houden dezelfde kopie van het grootboek bij en controleren elkaar.

Hierdoor is het moeilijker te hacken dan bijvoorbeeld een reguliere bank (die wel één centraal punt of server heeft). Waar DDoS-aanvallen er steeds vaker voor zorgen dat banken platliggen, hebben cryptomunten **hier minder snel last van**.

Decentralisatie heeft ook als voordeel dat het minder kost. Je hebt je wellicht wel eens afgevraagd waarom de Rabobank in iedere Nederlandse stad zo'n gigantisch kantoor heeft… **Een kantoor van de Bitcoin is nergens te vinden ;)**

![Een netwerk van computers dat samen één grootboek bijhoudt](/images/spots/crypto-netwerk.webp "Blockchain: een netwerk van computers dat samen één grootboek bijhoudt")

Het is dan ook geen wonder dat de blockchaintechnologie met name **na de crisis van 2008** is opgekomen. Bij die crisis raakten veel mensen hun geld kwijt, mede doordat men **afhankelijk was van centrale financiële punten** zoals banken. De allereerste Bitcoin-block, van januari 2009, bevat niet voor niets een krantenkop over de bankenredding.

Buiten crypto als financieel betaalmiddel wordt blockchaintechnologie tegenwoordig ook gebruikt voor **NFT's** (non-fungible tokens), **gedecentraliseerde apps** en steeds vaker voor 'tokenisatie' van gewone dingen zoals aandelen, obligaties en vastgoed. Als je niet weet wat die dingen zijn, geen zorgen: crypto is iets waar je langzaam in komt en stap voor stap over leert. Verderop staat een tijdlijn die laat zien hoe het één uit het ander is ontstaan.

Tot zover even de uitleg over cryptocurrencies. Om geld te verdienen met crypto zijn andere dingen wellicht interessanter; namelijk **welke cryptomunten er allemaal zijn** en wat de koers doet.

## De koers van Bitcoin, live

Het zal je niet ontgaan zijn dat Bitcoin de afgelopen jaren een achtbaan was. Van een dieptepunt van zo'n **15.500 dollar per munt** eind 2022 naar een record van **ruim 125.000 dollar** in oktober 2025. Wie op dat dieptepunt durfde in te stappen, kocht met een "**fikse korting**". En dat is meteen een belangrijk punt: als investeerder wil je altijd kansen zien, ongeacht de marktsituatie.

In plaats van een screenshot die na een maand verouderd is, staat hieronder de echte koers van Bitcoin in euro's. Standaard zie je de hele geschiedenis; met de knoppen onder de grafiek zoom je in op het afgelopen jaar of de afgelopen maand.

<div class="embed not-prose" id="btc-chart">
<div class="embed__frame"><div class="tradingview-widget-container" style="height:100%;width:100%"><div class="tradingview-widget-container__widget" style="height:100%;width:100%"></div></div></div>
<p class="embed__note">Bitcoin in euro's op Kraken, via TradingView. Met de knoppen onder de grafiek kies je van één maand tot de hele geschiedenis. De grafiek laadt pas als je hier scrolt en bevat geen advies, alleen de koers. Zie je niets (bijvoorbeeld door een adblocker)? <a href="https://www.tradingview.com/chart/?symbol=KRAKEN%3ABTCEUR" rel="noopener" target="_blank">Bekijk de koers op TradingView</a>.</p>
</div>

<script>
(function () {
  var box = document.getElementById('btc-chart'); if (!box) return;
  var frame = box.querySelector('.tradingview-widget-container'), done = false;
  function load() {
    if (done) return; done = true;
    var s = document.createElement('script');
    s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'; s.async = true;
    s.text = JSON.stringify({
      autosize: true, symbol: "KRAKEN:BTCEUR", interval: "W", timezone: "Europe/Amsterdam", theme: "light", style: "3",
      locale: "nl_NL", withdateranges: true, range: "ALL", hide_side_toolbar: true, hide_top_toolbar: false,
      allow_symbol_change: false, save_image: false, details: false, hotlist: false, calendar: false, hide_volume: true,
      backgroundColor: "#FFFFFF", gridColor: "rgba(228,224,245,0.7)", support_host: "https://www.tradingview.com"
    });
    frame.appendChild(s);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: '400px' });
    io.observe(box);
  } else { load(); }
})();
</script>

Kijk naar de hele geschiedenis en het lijkt alsof de prijs van Bitcoin vóór 2017 helemaal niet bewoog. Niets is echter minder waar: van een paar euro in 2012 naar 1.000 euro in 2013 was al een stijging van honderden procenten. Alleen is dat door de **exponentiële groei** van de latere jaren niet meer zichtbaar op één schaal. Belangrijk om te begrijpen is dat mensen, als het om de prijs van Bitcoin gaat, een kort geheugen lijken te hebben. Wat de prijs ook is, er zijn altijd mensen die roepen dat het naar nul gaat. **Maar de afgelopen vijftien jaar laten, met flinke dips van 50 tot 80% tussendoor, niets anders zien dan een stijgende trend.**

Om je een idee te geven: **wie in 2012 voor €1.000,- aan Bitcoin had gekocht, is nu miljonair**. Maar daar heb jij natuurlijk niets aan, want we kunnen niet terug in de tijd. Wat je er wél uit kunt halen, is een belangrijke les. Namelijk: waarom deze trend blijft bestaan en hoe je daarvan kunt profiteren.

## Waarom gaat de prijs van Bitcoin omhoog (en omlaag)?

De prijs van Bitcoin (en dit geldt voor alle crypto) heeft alles te maken met **schaarste, vraag en aanbod**.

Schaarste omdat er in totaal maar **21 miljoen Bitcoin beschikbaar zullen zijn**. Dit is vastgelegd in de code en niet aanpasbaar. Bovendien halveert elke vier jaar het aantal nieuwe Bitcoin dat per 'block' wordt uitgegeven: de **halving**. De laatste was op 20 april 2024 (van 6,25 naar 3,125 BTC per block), de volgende wordt rond april 2028 verwacht. Wanneer meer mensen Bitcoin willen hebben **om hun geld zeker te stellen, als middel tegen inflatie of gewoon als investering**, gaat de vraag omhoog terwijl het aanbod steeds langzamer groeit.

![Een munt op een achtbaan die omhoog gaat](/images/spots/crypto-koers-omhoog.webp "De koers van Bitcoin: een achtbaan met een stijgende lijn")

Wat het zo moeilijk maakt om te handelen in Bitcoin is dat de munt erg afhankelijk is geworden van hypes bij 'normale mensen', en die zijn niet altijd even goed te peilen. Mensen kopen munten niet vanwege de ontwikkeling erin, maar omdat ze het van iemand anders hebben gehoord. Een flink staaltje **massapsychologie** dus.

Al moet er wel de kanttekening bij geplaatst worden dat deze status **inmiddels flink veranderd is**. Sinds januari 2024 zijn er in de Verenigde Staten **Bitcoin spot ETF's** (Exchange Traded Funds), waarmee pensioenfondsen en vermogensbeheerders Bitcoin kopen zonder zelf een wallet te hoeven beheren. Het grootste fonds, dat van BlackRock, beheert inmiddels tientallen miljarden dollars. Dat maakt de markt volwassener, maar niet per se rustiger: toen die fondsen in juni 2026 op recordschaal geld terugtrokken, zakte de koers hard mee.

Ook overheden bemoeien zich ermee. De Amerikaanse regering richtte in maart 2025 een **Strategic Bitcoin Reserve** op. Let wel: die reserve bestaat uit Bitcoin die de overheid al in beslag had genomen; er wordt (tot nu toe) niet actief bijgekocht. Dus nee, "de VS koopt Bitcoin" klopt niet, hoe vaak je het ook leest.

## De grootste cryptomunten in 2026

Natuurlijk zijn er ook andere cryptovaluta. Sterker nog, er worden momenteel meer dan **21.000 actieve munten** bijgehouden. Lang niet allemaal relevant – sommige zijn letterlijk niets waard en verdwijnen zo snel als ze gekomen zijn. Maar tussen die duizenden munten zitten ook pareltjes.

Handig om te weten: alle cryptomunten die geen Bitcoin zijn, worden altcoins genoemd. Dit staat voor alternatieve munten. Bitcoin was de eerste munt op blockchaintechnologie, de rest volgde later.

Als je [geld wilt verdienen met crypto](/go/finst) kun je zeker eens naar de grootste cryptomunten kijken. De dertig grootste munten zijn samen goed voor zo'n **97% van de totale marktwaarde**. Dit zijn de twaalf grootste 'echte' munten op 17 september 2026 (afgeleide munten zoals gestakete of 'wrapped' ether laat ik weg), met wat ze doen:

| # | Munt | Marktwaarde | Wat het is |
|---|---|---|---|
| 1 | Bitcoin (BTC) | ± €1.340 mld | Digitaal goud, het begin van alles |
| 2 | Ethereum (ETH) | ± €260 mld | De computer op de blockchain waar de meeste apps op draaien |
| 3 | Tether (USDT) | ± €160 mld | Stablecoin, altijd één dollar waard |
| 4 | BNB (BNB) | ± €84 mld | Munt van de exchange Binance en zijn eigen blockchain |
| 5 | XRP (XRP) | ± €72 mld | Snelle betalingen tussen banken en landen |
| 6 | USD Coin (USDC) | ± €64 mld | Stablecoin met Amerikaanse en Europese vergunningen |
| 7 | Solana (SOL) | ± €51 mld | Snelle, goedkope blockchain voor apps en memecoins |
| 8 | Tron (TRX) | ± €28 mld | Blockchain waar veel stablecoin-betalingen overheen gaan |
| 9 | Zcash (ZEC) | ± €20 mld | Privacymunt, in 2025–2026 sterk gestegen |
| 10 | Hyperliquid (HYPE) | ± €16 mld | Gedecentraliseerde handelsbeurs met eigen munt |
| 11 | Dogecoin (DOGE) | ± €12 mld | De eerste memecoin, sinds 2013 |
| 12 | Monero (XMR) | ± €8 mld | Privacymunt, niet op Nederlandse exchanges |

Bron: CoinPaprika en CoinLore, marktwaarde in euro's afgerond, 17 september 2026. Daarna volgen onder meer Chainlink, Cardano, Avalanche, Stellar, Litecoin en Bitcoin Cash. Wat je in dit lijstje niet meer terugvindt: **Terra (LUNA)** en de **FTX-token**, allebei ingestort (daarover later meer). En de [$TRUMP-memecoin](/blog/web3/official-trump-kopen-ideal/) die ik in januari 2025 nog toevoegde? Die piekte op 73 dollar en is nu nog geen 2 dollar waard: een verlies van ruim 97%. Een prima les over hypes.

Reden voor investeerders om juist naar altcoins te kijken in plaats van Bitcoin, is omdat hier nog **veel meer groei mogelijk is**. Bitcoin zal niet zomaar 1000% omhoog schieten (een x10 van jouw investering). Bij kleinere munten is dit realistischer, zeker in een opkomende markt.

Wanneer een bear market omslaat in een bull market, is een vertienvoudiging van je investering haalbaar. Maar het omgekeerde gebeurt net zo makkelijk: de meeste kleine munten uit de vorige cyclus staan nu 80 tot 99% lager. Dit is precies waarom investeerders blijven zoeken naar de volgende "hidden gem", en waarom de meesten hem niet vinden.

Uiteraard gaat dit samen met een risico. Je hoeft geen rekenwonder te zijn om te begrijpen dat je maximale risico (**bij spot trading zoals op [Finst](/go/finst)**) altijd 100% is van het bedrag dat je inlegt. Handel dus alleen met geld dat je bereid bent te verliezen. Zo voorkom je dat je uit een verliesgevende investering moet stappen, simpelweg omdat je het geld nodig hebt. Dat is dé valkuil waar veel mensen in trappen.

Don't be stupid ;) Doe je onderzoek, blijf geduldig en speel het slim.

**[›> Wil je eerst de basis snappen voordat je een euro inlegt? Alles Over Crypto geeft een gratis online Bitcoin-training waarin ze uitleggen hoe de markt in elkaar zit en waar zij zelf op letten bij het kiezen van munten. Klik hier om de gratis training te volgen.](/go/get-crypto-masterclass)**

[Volg gratis online crypto training](/go/get-crypto-masterclass)

## Van Bitcoin tot tokenisatie: zo ontwikkelde crypto zich

Voordat we naar het geld verdienen gaan, is het handig om te zien hoe het één uit het ander is ontstaan. Elke golf bouwde op de vorige, en elke golf had zijn eigen hype én zijn eigen kater.

<ol class="timeline not-prose">
<li class="timeline__item"><span class="timeline__num">1</span><p class="timeline__year">2009</p><p class="timeline__title">Bitcoin: geld zonder bank</p><p class="timeline__text">Digitaal geld dat je rechtstreeks naar iemand stuurt. Eén doel: waarde overmaken zonder tussenpersoon.</p></li>
<li class="timeline__item"><span class="timeline__num">2</span><p class="timeline__year">2011 – 2013</p><p class="timeline__title">De eerste altcoins</p><p class="timeline__text">Litecoin, XRP en Dogecoin: variaties op het idee van Bitcoin. Sneller, goedkoper of gewoon als grap.</p></li>
<li class="timeline__item"><span class="timeline__num">3</span><p class="timeline__year">2015</p><p class="timeline__title">Ethereum: de computer op de blockchain</p><p class="timeline__text">Slimme contracten maken programma's mogelijk die niemand kan stopzetten. Vanaf hier kan alles gebouwd worden.</p></li>
<li class="timeline__item"><span class="timeline__num">4</span><p class="timeline__year">2017</p><p class="timeline__title">ICO's en tokens</p><p class="timeline__text">Iedereen geeft een eigen token uit op Ethereum. Bitcoin naar 20.000 dollar, en daarna een crash van 80%.</p></li>
<li class="timeline__item"><span class="timeline__num">5</span><p class="timeline__year">2020</p><p class="timeline__title">DeFi: financiën zonder bank</p><p class="timeline__text">Lenen, sparen en handelen via apps als Uniswap en Aave, zonder loket. Rendement uit code in plaats van uit een bank.</p></li>
<li class="timeline__item"><span class="timeline__num">6</span><p class="timeline__year">2021</p><p class="timeline__title">NFT's en metaverse</p><p class="timeline__text">Digitaal eigendom van kunst, land en spullen. Een miljardenhype die grotendeels weer leegliep, maar de techniek bleef.</p></li>
<li class="timeline__item"><span class="timeline__num">7</span><p class="timeline__year">2022 – 2023</p><p class="timeline__title">De grote schoonmaak</p><p class="timeline__text">Terra en FTX vallen om, Bitcoin zakt naar 15.500 dollar. Ethereum stapt over op Proof-of-Stake en verbruikt 99,95% minder stroom.</p></li>
<li class="timeline__item"><span class="timeline__num">8</span><p class="timeline__year">2024</p><p class="timeline__title">ETF's en memecoins</p><p class="timeline__text">Wall Street komt binnen via Bitcoin-ETF's, de halving doet zijn werk en Bitcoin passeert de 100.000 dollar. Tegelijk explodeert het memecoin-casino.</p></li>
<li class="timeline__item timeline__item--now"><span class="timeline__num">9</span><p class="timeline__year">2025 – nu</p><p class="timeline__title">AI-crypto, stablecoins, tokenisatie en regels</p><p class="timeline__text">AI-agents die met crypto betalen, stablecoins die meer verwerken dan Visa, aandelen en obligaties als token op de blockchain, en MiCA dat de Europese markt ordent. Minder hype, meer gebruik.</p></li>
</ol>

**Voordat je hoofdpijn krijgt van alle termen…** Ik probeer je vooral een idee te geven van wat er allemaal gebeurt; dat allemaal willen begrijpen is niet direct nodig. Voor wie geld wil verdienen met crypto zijn andere dingen van belang. Namelijk: **hoe verhandel je crypto?**

## Geld verdienen met crypto

Er zijn meer dan genoeg kansen om **geld te verdienen met crypto**. Hieronder de vier manieren die er in 2026 echt toe doen, van de meest voorkomende tot de meest exotische. Ik begin met de manier waarop de meeste mensen het doen: kopen en vasthouden, of handelen.

## 1. Geld verdienen met het traden van crypto

Goed om jezelf af te vragen voordat je in de handel van cryptovaluta stapt, is hoe mensen hier in het verleden zo rijk mee zijn geworden. Denk bijvoorbeeld aan de enorme pieken in de markt: **Bitcoin schoot eind 2017 naar bijna 20.000 dollar, terwijl het een jaar eerder nog een paar honderd euro waard was**. Wie toen had ingekocht, had zijn winst kunnen tellen.

In de bull market die volgde op de halving van 2024 gebeurde het opnieuw. **Bitcoin brak in december 2024 voor het eerst door de 100.000 dollar** en zette in oktober 2025 een record neer van ruim 125.000 dollar. En zoals altijd trokken altcoins mee in de slipstream. Maar let op wat er daarna gebeurde: op 10 oktober 2025 werd in één dag voor zo'n 19 miljard dollar aan posities met hefboom geliquideerd, de grootste 'wipe-out' ooit. Wie met geleend geld handelde, was alles kwijt. Wie gewoon munten bezat, had een slechte dag en verder niets.

Dat is meteen de belangrijkste les van dit hele artikel: **handel zonder hefboom**. Alles wat je hieronder leest gaat over gewoon munten kopen ('spot'), niet over speculeren met geleend geld.

## Zo werkt het verhandelen van cryptovaluta

Wanneer je gaat handelen in crypto is het alvast goed om te weten dat dit anders gaat dan op de 'normale' [aandelenmarkt](/blog/online-geld-verdienen/aandelen-handelen/). De koers schommelt veel meer heen en weer en daar kun jij van profiteren; door laag in te kopen en hoog te verkopen. Het gebeurt niet weinig dat een koers op één dag **zomaar 25% omhoog (of omlaag) schiet, zeker bij [meme-coins](/blog/web3/meme-coins-kopen-crypto/)**. En anders dan de beurs is de cryptomarkt 24 uur per dag, 7 dagen per week open.

Maar om nou achter je laptop te gaan zitten om de markt te timen? Wellicht is dat niet zo'n heel goed plan als je net begint, dan probeer je namelijk iets te doen waar je eigenlijk jaren ervaring voor nodig hebt…

Veel beginnende crypto traders zetten dan ook vaak in op de **lange termijn** en zien zichzelf meer als **investeerder**.

Je koopt dan cryptomunten en bepaalt eventueel van tevoren al een moment om deze te verkopen. Daarna is geduld een schone zaak. Bij het kopen van cryptomunten kun je ervoor kiezen om maandelijks een beetje te kopen. Een proces dat ook wel **Dollar Cost Averaging (DCA)** wordt genoemd, omdat je de munten voor een gemiddelde prijs inkoopt en zo het risico van een verkeerd instapmoment minimaliseert. Wie sinds januari 2025 elke maand €100 in Bitcoin had gestopt, heeft de top van oktober 2025 én de dip van juni 2026 meegemaakt zonder er wakker van te liggen.

Dat is dan ook wat ik zelf doe. Iedere maand leg ik een beetje in en zo breid ik langzaam mijn portfolio uit. **Geen hogere wiskunde, maar wel iets dat me op de lange termijn winst oplevert**. Bij [Finst](/go/finst) heet dit 'auto invest': je stelt één keer in hoeveel je per week of maand wilt kopen en verder kijk je er niet meer naar om. Zie hieronder een screenshot van mijn eigen **account** uit een eerdere cyclus.

![Mijn crypto portfolio op Bitvavo](/images/migrated/mijn-crypto-portfolio-op-bitvavo-1.webp "Mijn crypto portfolio op Bitvavo")

Deze screenshot was voor mij ooit een goede dag. Sindsdien zijn de meeste van deze munten flink gestegen, weer gedaald en weer gestegen. Daarmee wil ik dan ook gelijk je verwachtingen temperen, want het ziet er lang niet altijd zo groen uit. Investeren in crypto doe ik voor de lange termijn, omdat ik weet **dat deze projecten doelen en plannen hebben**.

Er zitten dagen tussen dat mijn portfolio met €1.000,- stijgt en dagen waarop het net zo hard daalt. Maar omdat ik weet dat ik het nu of binnenkort niet ga uitbetalen, laat ik me daar niet door beïnvloeden. **Geduld is de sleutel.**

Zelf heb ik dus vooral **altcoins** gekocht.

Daarbuiten heb ik enkele kleinere cryptomunten gekocht via andere exchanges. Die kleinere munten hebben soms een kans om bijvoorbeeld **100x over de kop** te gaan, maar hebben een veel groter risico om te falen als project. Crypto parels worden ze genoemd. Een voorbeeldje daarvan zijn deze via de crypto exchange KuCoin:

![Kucoin portfolio exchange](/images/migrated/kucoin-exchange-portfolio-2.webp "kucoin-exchange-portfolio")

Kleinere crypto (low cap coins) zijn wat moeilijker te verhandelen omdat ze **niet** op een Nederlandse exchange beschikbaar zijn.

Deze munten heb ik dan ook gekocht via KuCoin. Omdat je daar niet met iDEAL of Bancontact kunt betalen, heb ik daarvoor crypto gekocht op [**Finst**](/go/finst) om deze vervolgens naar KuCoin over te maken. Goed om te weten: KuCoin heeft sinds november 2025 een Europese MiCA-vergunning (via Oostenrijk), dus dit kan tegenwoordig ook netjes binnen de Europese regels.

**[Meer weten over hoe je zelf munten beoordeelt in plaats van blind een tip te volgen? In de gratis Bitcoin-training van Alles Over Crypto leggen ze uit waar zij naar kijken. Klik hier om de gratis training te volgen. >>](/go/get-crypto-masterclass)**

## Hier handel je in cryptovaluta (crypto exchange)

Er zijn verschillende plekken om crypto te verhandelen. Wees bewust van je keuze. Sommige platforms pakken grove commissies op je winsten of je inleg, of verstoppen die in een 'spread' tussen de aan- en verkoopprijs. De makkelijkste én goedkoopste manier om te beginnen met crypto kopen is **[Finst](/go/finst)**.

[![Crypto kopen](/images/migrated/finst-crypto-kopen-2.webp)](/go/finst)

Starten met Finst is net zo simpel als het lijkt. Je maakt een account aan en kunt met de app op je telefoon direct starten met het kopen van crypto. Je vindt er **400+ verschillende cryptomunten** en betaalt een vaste 0,15% per transactie, zonder verborgen spread. Per €1.000 is dat €1,50, tegenover €2,50 bij Bitvavo. Een uitgebreide review lees je in mijn [Finst review](/blog/review/finst-crypto-exchange/), en de vergelijking met de grootste van Nederland in mijn [Bitvavo review](/blog/review/bitvavo-review-crypto/).

Belangrijk om vooraf te weten is dat [**Finst**](/go/finst) een verificatieproces heeft dat zo'n 5 minuten duurt. Dit is belangrijk voor de veiligheid, maar zorgt er dus voor dat je even je paspoort of rijbewijs bij de hand moet houden. Dit proces heet **KYC**, oftewel **Know Your Customer**, en is verplicht voor Europese crypto exchanges.

Via onderstaande knop maak je gratis een account aan bij de Nederlandse crypto exchange met de laagste handelskosten. Goed om te weten: als je niets verhandelt, betaal je niets.

Daarbij is Finst **een Nederlands bedrijf** met een MiCA-vergunning van de AFM (sinds juli 2025). Daarover zo meer.

[Koop crypto via Finst](/go/finst)

Hoewel het voor de beginner niet aan te raden is, zijn er ook tal van andere platforms om crypto te verhandelen. Deze zijn wat moeilijker in gebruik en ondersteunen bijvoorbeeld geen iDEAL- of Bancontact-betaling. Wel vind je er voor de liefhebber meer opties om te traden.

Wanneer je een beeld hebt in welke crypto je wilt handelen, is het makkelijker om [een goede crypto exchange](/blog/web3/beste-crypto-exchange/) te vinden. Niet ieder platform maakt het namelijk mogelijk om in iedere munt te handelen.

![Een hond met zonnebril op een grote munt kijkt naar een grafiek](/images/spots/crypto-meme.webp "Memecoins: leuk voor de grap, gevaarlijk voor je spaargeld")

### MiCA: crypto in Europa is sinds 2025 gereguleerd

Dit is de grootste verandering sinds ik dit artikel voor het eerst schreef. Sinds 30 december 2024 geldt in de hele EU de **MiCA-verordening** (Markets in Crypto-Assets). Iedere aanbieder die in Nederland crypto wil verkopen, moet daarvoor een vergunning hebben van de AFM (of van een andere Europese toezichthouder). De Nederlandse overgangsperiode liep af op 30 juni 2025, de laatste Europese landen volgden op 1 juli 2026.

Wat dat voor jou betekent: een platform met vergunning moet je geld gescheiden bewaren van het bedrijfsgeld, moet transparant zijn over kosten en staat onder toezicht. Finst (vergunning sinds 24 juli 2025) en Bitvavo (sinds 27 juni 2025) hebben allebei zo'n vergunning. Grote buitenlandse namen die geen Europese vergunning hebben, mogen Nederlanders niet meer bedienen: Binance is bijvoorbeeld niet beschikbaar voor Nederlanders. Zie je een aanbieder zonder vergunning die je toch als Nederlander wil helpen? Wegwezen.

Let wel: **staking en lending vallen buiten MiCA**. Dat mag een platform gewoon aanbieden, maar er is geen toezicht op. Daarover hieronder meer.

### Omvallende crypto exchanges, hacks en instortende munten

**Zo slecht als in 2022 is de cryptomarkt niet vaak in het nieuws geweest**. In mei van dat jaar stortte **TerraUSD** in, een 'stabiele munt' die plotseling al zijn waarde verloor. Deze munt had de belofte om altijd precies één dollar waard te zijn, maar werd praktisch gezien waardeloos.

Dit kwam door mismanagement en omdat, hier wordt het wat ingewikkeld, het onderpand voor die waarde werd gedekt door hun eigen munt '**Terra Luna**'. Doordat die laatste extreem in waarde daalde, waren er **geen tegoeden** meer die de stabiele TerraUSD dekten. Die ineenstorting heeft veel mensen heel erg veel geld gekost. Het is precies de reden waarom MiCA nu eist dat een stablecoin gedekt is door echt geld op een echte bankrekening.

![Een toren van munten die omvalt](/images/spots/crypto-terra-luna.webp "Terra Luna: een toren van munten die in mei 2022 omviel")

Toen in november 2022 ook nog **één van de grootste crypto exchanges omviel**, was dat een volgende schok voor de cryptomarkt. In het digitale equivalent van een bankrun kon FTX niet meer aan zijn betalingsverplichtingen voldoen. Dit vanwege fraude én omdat ze ook hier veel waarde hadden opgeslagen in hun eigen munt '**FTT**'. Oprichter Sam Bankman-Fried zit inmiddels een celstraf van 25 jaar uit.

![Een bankgebouw dat afbrokkelt](/images/spots/crypto-ftx.webp "FTX: de exchange die in november 2022 als een bank omviel")

Denk niet dat dit soort dingen verleden tijd zijn. In februari 2025 werd bij exchange **Bybit voor zo'n 1,5 miljard dollar** aan Ethereum gestolen, de grootste cryptohack ooit. In 2026 volgden onder meer een hack van een DeFi-protocol (Kelp DAO, bijna 300 miljoen dollar) en een aanval op gebruikers van de Coldcard hardware wallet (ruim 100 miljoen dollar). De regels zijn strenger geworden, de aanvallers ook.

Simpel gezegd: wil je voorkomen dat je zelf geld verliest aan zo'n scam, hack of mismanagement? Zorg dan dat je alleen investeert en verhandelt via [betrouwbare crypto exchanges](/blog/web3/beste-crypto-exchange/) met een Europese vergunning, die transparant zijn over wat ze met jouw geld doen. Zet twee-factor-authenticatie aan met een authenticator-app, nooit via sms. En laat grote bedragen die je jaren wilt vasthouden niet op een exchange staan, maar op een eigen wallet waarvan alleen jij de sleutel hebt.

**Je kunt relatief snel geld verdienen met crypto**, of verliezen als je het verkeerd doet natuurlijk. Zorg daarom dat je weet waar je mee bezig bent en volg bijvoorbeeld eerst één van deze [gratis crypto cursussen](/blog/web3/gratis-crypto-bitcoin-cursussen/). Wees bij je handel alert op nieuws rondom de munt die jij verhandelt en de cryptomarkt in het algemeen.

Een verbod van een munt door een overheid zal een negatieve invloed hebben op de koers, dan moet je er dus al uit zijn. Maar anderzijds kan er ook positief nieuws zijn, bijvoorbeeld wanneer een groot fonds meldt in een specifieke cryptomunt te stappen. **Of wanneer een overheid een Bitcoin-reserve aanlegt.** Dat is meteen terug te zien in de koers.

Daarbij zie je ook dat met de trends mee sommige altcoins bovengemiddeld presteren. In 2023 zagen we altcoins die focusten op de [Metaverse](/blog/web3/metaverse-crypto/) en NFT's bovengemiddeld presteren. In 2024 en 2025 verschoof de aandacht naar [AI-crypto](/blog/web3/ai-crypto-kunstmatige-intelligentie/) en memecoins. In 2026 gaat het vooral over stablecoins, privacymunten en tokenisatie: saaier, maar dat is precies waar de grote partijen instappen.

## 2. Staking cryptovaluta

Buiten het traden in cryptovaluta zijn er ook nog andere manieren om geld te verdienen met digitale munten. Eén van die manieren is door munten uit te zetten (**staking**).

Dit houdt in dat je munten inzet om het netwerk van die munt te helpen draaien en te beveiligen. Hier staat een vergoeding tegenover vanuit het cryptonetwerk, vergelijkbaar met rente. Het werkt alleen bij munten die op **Proof-of-Stake** draaien (Ethereum, Solana, Cardano, Cosmos), niet bij Bitcoin.

**Solana is hierbij een populaire munt**. Wie zelf staakt via het Solana-netwerk krijgt zo'n 6 tot 8% per jaar; via een Nederlands platform houd je daar na hun marge minder van over. Buiten dat rendement moet je natuurlijk ook vooral kijken naar wat de waarde van de munt in die tijd doet. Een rendement van 3% helpt weinig als de munt 30% zakt, en het is een bonus als hij 30% stijgt.

Crypto staken is lang niet zo moeilijk als het eerst was. Tegenwoordig kun je met [**een account bij Finst**](/go/finst) staking met één schuifje inschakelen voor vijftien munten. De beloning wordt wekelijks uitgekeerd en je munten blijven gewoon verkoopbaar. Dit zijn de percentages die Finst op 17 september 2026 op zijn stakingpagina toont (jaarlijks, geschat, na aftrek van hun marge):

| Munt | Finst |
|---|---|
| Cosmos (ATOM) | 10,00% |
| Gram (GRAM, voorheen Toncoin) | 9,00% |
| Kusama (KSM) | 7,00% |
| Injective (INJ) | 3,40% |
| Tezos (XTZ) | 3,10% |
| NEAR Protocol (NEAR) | 2,90% |
| Solana (SOL) | 2,80% |
| Core (CORE) | 2,80% |
| Algorand (ALGO) | 2,70% |
| Celestia (TIA) | 2,50% |
| Polygon (POL) | 1,65% |
| Tron (TRX) | 1,60% |
| Ethereum (ETH) | 1,50% |
| Polkadot (DOT) | 1,25% |
| Cardano (ADA) | 1,20% |

Ter vergelijking: bij Bitvavo heet staking sinds 2026 'Earn' en heb je de keus tussen **Flex** (munten blijven verhandelbaar) en **Fixed** (munten staan een vaste periode vast, hoger percentage). Voor de munten die beide platforms aanbieden, waren de percentages in september 2026: Cosmos 3,8% Flex of 11,5% Fixed, Solana 1,1% of 3,3%, NEAR 0,9% of 2,8%, Tezos 0,5% Flex. Kies je voor de flexibele variant, dan zit je bij Finst dus meestal hoger. Percentages veranderen elk kwartaal; de actuele staan in de app.

Stel dus dat je ervoor kiest om voor een langere tijd cryptovaluta te houden, dan kun je staking **net zo goed inschakelen** zodat je er sowieso nog wat extra munten bij krijgt!

Zie het als een vorm van **rente op je spaargeld**, met één belangrijk verschil: staking valt buiten de MiCA-regels en dus buiten het toezicht van de AFM. Het platform bepaalt zelf de voorwaarden, en de beloning krijg je in de munt zelf, niet in euro's.

## 3. Geld verdienen als masternode met cryptomunten

Je kunt ook geld verdienen met cryptovaluta door het inzetten van '**masternodes**'. Een masternode is niets anders dan een crypto wallet waarin je een flink aantal munten bewaart, gekoppeld aan een computer die **24/7 actief is om bepaalde taken rondom de cryptomunt uit te voeren**.

Voor het uitvoeren van deze taken word je door het netwerk vergoed. Het enige nadeel daarvan is wel dat je vrij veel cryptomunten nodig hebt om te starten. Bij Dash en Flux is dat bijvoorbeeld 1.000 munten, bij Beldex 10.000 munten en bij XDC Network zelfs 10 miljoen munten.

Munten die populair zijn om als 'masternode' geld mee te verdienen zijn:

> **1\. XDC Network (XDC)  
> 2\. Dash (DASH)  
> 3\. Beldex (BDX)  
> 4\. Flux (FLUX)**

Eerlijk is eerlijk: dit is een niche. De meeste mensen die 'passief inkomen' met crypto willen, zijn beter af met gewoon staken.

## 4. Mining crypto

Deze is voor de normale cryptoliefhebber niet heel erg relevant, maar je kunt ervoor kiezen **om cryptomunten te gaan minen**.

Simpel gezegd betekent minen dat jij een computer laat draaien om puzzels op te lossen. Aan de hand daarvan worden nieuwe cryptomunten '**gemined**' en zijn ze dus in jouw bezit.

De reden waarom dit irrelevant is voor de normale mens, is omdat de energieprijs in Nederland vrij hoog is en je daardoor waarschijnlijk meer kosten maakt dan het oplevert. Sinds de halving van 2024 krijgen miners bovendien nog maar 3,125 Bitcoin per block, de helft van daarvoor. Het is een industrie geworden van beursgenoteerde bedrijven met goedkope stroom in IJsland, Texas of Paraguay. Daar staan **tienduizenden computers** dag en nacht te draaien om puzzels op te lossen. Dat ziet er zo uit:

![Rijen servers met ventilatoren in een hal met bergen erachter](/images/spots/crypto-mining.webp "Bitcoin-mining: hallen vol computers waar stroom goedkoop is")

Goed om daarbij te weten is dat veel 'miners' actief waren op de Ethereum-blockchain. Maar dit is sinds september 2022 verleden tijd vanwege de upgrade van het Ethereum-netwerk ('The Merge'). Zij zijn toen van **Proof-of-Work (PoW)** naar **Proof-of-Stake (PoS)** gegaan. Deze andere werkwijze verminderde het energieverbruik met zo'n 99,95%, omdat de '**blocks**' van de '**blockchain**' nu veel efficiënter worden gevalideerd.

Goed, je hoeft dit echt niet allemaal te begrijpen om succesvol te zijn met crypto.

Over het algemeen kun je stellen dat als mensen zeggen geld te verdienen met crypto, **ze dat doen door crypto te kopen en vast te houden of te traden**. Als jij geld wilt verdienen met crypto, is dat dan ook waar je wilt zijn.

## Belasting over crypto in 2026 (box 3)

Dit onderdeel sloeg ik vroeger over, maar het kost mensen meer geld dan ze denken. In Nederland valt crypto in **box 3**, net als spaargeld en aandelen. Je betaalt geen belasting over je winst bij verkoop, maar jaarlijks over de **waarde op 1 januari**, ook als je niets hebt verkocht.

![Een spaarvarken op een belastingformulier](/images/spots/crypto-belasting.webp "Box 3: de fiscus kijkt naar de waarde van je crypto op 1 januari")

Voor 2026 gelden deze cijfers: crypto telt als 'overige bezittingen' met een forfaitair rendement van 6,00%, waarover je 36% belasting betaalt. Effectief is dat ongeveer 2,2% van de waarde van je crypto per jaar. Het heffingsvrije vermogen is €59.357 per persoon (€118.714 met fiscaal partner).

Een rekenvoorbeeld voor iemand zonder fiscaal partner met €30.000 spaargeld en €50.000 aan crypto op 1 januari 2026:

*   Forfaitair rendement: €30.000 × 1,28% (spaargeld) + €50.000 × 6,00% (crypto) = €3.384, ofwel 4,23% van het totale vermogen van €80.000.
*   Grondslag: €80.000 min het heffingsvrije vermogen van €59.357 = €20.643.
*   Belastbaar voordeel: €20.643 × 4,23% = €873. Daarover 36% belasting = **ongeveer €314 per jaar**.

Was je werkelijke rendement lager dan het forfait, bijvoorbeeld in een slecht cryptojaar, dan kun je via de **tegenbewijsregeling** je echte rendement opgeven en betaal je minder. Daarvoor moet je wel je aankopen, verkopen en de waarde op 1 januari kunnen aantonen: exporteer dus elk jaar je transactieoverzicht uit de app.

Vanaf 2028 wil de overheid overstappen op een heffing over het werkelijke rendement; de Tweede Kamer stemde daar in februari 2026 mee in. Dat betekent straks: belasting over wat je écht verdiende, inclusief ongerealiseerde koerswinst. Houd je aankopen dus goed bij. Voor België gelden andere regels (daar hangt het af van of je als 'goede huisvader' belegt of speculeert); laat je daar adviseren.

## Wordt Bitcoin het nieuwe goud?

Er zijn mensen die denken dat Bitcoin het nieuwe goud wordt: een manier om te investeren met **relatief laag risico**.

Goud was in het verleden altijd een plaats om te investeren wanneer er financiële instabiliteit was; goud behield toch wel zijn waarde. De reden waarom mensen denken dat dit **met Bitcoin hetzelfde is**, is omdat er nooit meer dan 21 miljoen beschikbaar zullen zijn.

Daar hoeven we verder niet heel diep op in te gaan, maar feit is dat er bij Bitcoin schaarste optreedt en de verwachting dus is dat de koers op lange termijn blijft stijgen (of stabiel wordt).

> Een leuk gedachte-experiment: als Bitcoin daadwerkelijk zoals goud wordt, heeft het **het potentieel om richting 1,4 miljoen dollar per munt** te groeien. Dan heeft het dezelfde marktwaarde als al het goud ter wereld (zo'n 30 biljoen dollar in september 2026). Dat getal was een paar jaar geleden nog 650.000 dollar; goud is sindsdien zelf óók hard gestegen.

Je ziet dan ook dat Bitcoin meer en meer gebruikt wordt **om waarde in op te slaan**. Meer nog dan als betaalmiddel. Dit wordt versterkt door de economische context van de afgelopen jaren. De inflatie na corona en de geldverruiming die eraan voorafging **hebben investeerders ertoe aangezet om naar alternatieven te zoeken**. Omdat Bitcoin een beperkt aanbod en een voorspelbare uitgifte heeft, wordt het steeds vaker gezien als bescherming tegen inflatie. Of dat in de praktijk zo werkt? In 2026 bewoog Bitcoin vooral mee met de aandelenmarkt, terwijl goud juist zijn eigen weg ging. Het is een jong bezit, en dat gedrag is nog niet uitgekristalliseerd.

## De eindeloze potentie van altcoins

Altcoins daarentegen zijn juist aan een opmars bezig om daadwerkelijk als 'geld' te worden ingezet, zodat je er bijvoorbeeld je koffie mee kunt betalen. Al is dat niet het enige doel van crypto.

![Een boeket van verschillende munten in een vaas](/images/spots/crypto-altcoins.webp "Altcoins: duizenden munten, elk met een eigen idee")

Je zult tijdens je zoektocht zien dat iedere munt een eigen filosofie nastreeft en daarmee andere functionaliteiten heeft. Om je wat voorbeelden te geven:

*   **Stablecoins (USDC, USDT)** – Munten die altijd één dollar waard zijn. Saai, maar inmiddels het meest gebruikte stukje crypto ter wereld: er gaat meer geld in om dan bij Visa. Handig om even 'uit de markt' te stappen zonder naar je bank te hoeven.
*   **VeChain (VET)** – Slaat stappen van een logistiek proces op in de blockchain, waardoor jij bijvoorbeeld weet of je wijn daadwerkelijk uit de streek komt die de leverancier belooft.
*   **Chiliz (CHZ)** – Met deze token koop je stemrecht binnen jouw favoriete sportclub. Fans stemmen over zaken als het nieuwe shirt of de muziek in het stadion.
*   **Filecoin (FIL)** – Zie dit als de Google Cloud onder de cryptocurrencies. Alleen dan zonder Google. Dataopslag wordt gedaan door gebruikers van het netwerk en is dus decentraal.
*   **Chainlink (LINK)** – Het 'kabeltje' tussen blockchains en de echte wereld, van koersdata tot verzekeringen. Steeds vaker de laag waar banken hun tokenisatie-projecten op bouwen.
*   **Zcash (ZEC) en Monero (XMR)** – Privacymunten: transacties die niemand kan meelezen. In 2025 en 2026 de grote verrassing van de markt, maar door diezelfde privacy niet bij Nederlandse exchanges te koop.

Bovenstaand lijstje zou ik met gemak kunnen aanvullen met nog honderden projecten. Wat ik vooral duidelijk probeer te maken, is dat crypto meer is dan het nieuws je vaak doet geloven en dat de gehele revolutie echt nog **in de kinderschoenen** staat.

> Stel je een wereld voor zonder banken, omdat iedereen de bank is. Een wereld zonder Facebook, omdat we samen de regels voor social media bepalen. Een wereld zonder al die apps die ertussen gaan zitten zoals Thuisbezorgd, Uber en Airbnb. Bedrijven die met blockchaintechnologie overbodig zijn.

**Wat je vaak ziet is dat mensen beginnen met crypto voor het geld en dat ze blijven voor de revolutie**. Als je de mogelijkheden eenmaal ziet, is het moeilijk om er niet enthousiast over te worden (naar mijn ervaring).

[**Leer meer over crypto, Bitcoin en altcoins in deze gratis online training >>**](/go/get-crypto-masterclass)

## Begrippen in de cryptowereld

Als je begint met crypto kom je veel nieuwe begrippen tegen. Wellicht dus handig voor jou om te weten wat deze allemaal inhouden.

### Altcoins

Alle cryptomunten behalve Bitcoin.

### Fiat

Het gewone geld dat wordt uitgegeven door een overheid, zoals euro's en dollars.

### Stablecoin

Een cryptomunt die gekoppeld is aan gewoon geld, meestal de dollar. Eén USDC is altijd (ongeveer) één dollar. Handig om winst in te parkeren zonder de cryptomarkt te verlaten. Sinds MiCA mogen in Europa alleen stablecoins met een vergunning worden aangeboden.

### Crypto wallet

De portemonnee waarin je cryptomunten bewaart. Dit kan letterlijk een reeks woorden op een papiertje zijn, maar ook een app of een USB-achtig apparaatje (hardware wallet). Wanneer je handelt op een exchange met vergunning kun je je munten daar ook laten staan; voor grote bedragen die je jaren vasthoudt is een eigen wallet veiliger.

### Exchanges

Plekken om crypto te verhandelen. Er zijn er veel, maar de grootste van Nederland (en van heel Europa in euro's) is [Bitvavo](/go/bitvavo). De goedkoopste is [Finst](/go/finst).

### Spot en hefboom

Spot betekent dat je munten echt koopt en bezit. Bij handelen met hefboom (leverage, futures) leen je geld om een grotere positie in te nemen: winsten én verliezen worden vermenigvuldigd, en bij een flinke daling ben je alles kwijt. Op 10 oktober 2025 gebeurde dat in één dag voor 19 miljard dollar.

### Satoshi

Dit is de (anonieme) maker van Bitcoin, maar de term wordt ook gebruikt voor het kleinste stukje Bitcoin: één satoshi is 0,00000001 Bitcoin, oftewel één honderdmiljoenste. Je hoeft dus nooit een hele Bitcoin te kopen.

### Market cap

De market cap van een cryptomunt is de totale marktwaarde: het aantal munten in omloop maal de prijs per munt. Dit is iets anders dan de prijs van een munt. Iedere cryptovaluta heeft namelijk een andere hoeveelheid munten. Bij Bitcoin zijn dit er maximaal 21.000.000 en bij Cardano zijn dit er maar liefst 45.000.000.000. Dat zijn drie extra nullen! Staar je dus nooit blind op alleen de prijs van de munt.

### Bitcoin-dominantie

Dit is het aandeel van Bitcoin in de totale cryptomarkt; het actuele percentage staat bovenaan dit artikel. Daalt de dominantie, dan doen altcoins het relatief goed ('altseason').

### Halving

Elke vier jaar halveert het aantal nieuwe Bitcoin dat miners per block krijgen. De laatste halving was in april 2024, de volgende wordt rond april 2028 verwacht. Historisch begon een groot deel van de koersstijgingen in het jaar na een halving.

### NFT

Non-fungible token. Anders dan bij cryptomunten zijn NFT's allemaal uniek. Zie het zo: één Bitcoin is altijd één Bitcoin, welke je ook hebt. Bij een NFT is iedere NFT net even anders dan de andere.

### Proof-of-Work en Proof-of-Stake

Beide zijn consensusmechanismen waarop een blockchain kan draaien. Bij Proof-of-Work (Bitcoin) rekenen computers om blocks te valideren; bij Proof-of-Stake (Ethereum, Solana, Cardano) zetten deelnemers hun munten in als onderpand. Vandaar dat je op die laatste munten kunt staken.

### Tokenisatie

Een bestaand bezit, zoals een aandeel, een obligatie of een stuk vastgoed, als token op een blockchain zetten. Daardoor is het 24 uur per dag verhandelbaar en in kleine stukjes te kopen. In 2026 de snelst groeiende toepassing van blockchain bij banken.

### MiCA

Markets in Crypto-Assets, de Europese wet die sinds 2025 bepaalt wie crypto mag aanbieden en onder welke voorwaarden. In Nederland houdt de AFM toezicht.

## Cursussen in crypto traden

Dan nog een interessant onderdeel over de verschillende cursussen over crypto die je hebt in Nederland en België. Online wordt er best wat aangeboden op het gebied van crypto en Bitcoin, maar niet alles is zo goed als wordt beloofd. In dit overzicht vergelijk ik [de gratis crypto- en Bitcoin-cursussen](/blog/web3/gratis-crypto-bitcoin-cursussen/), en in mijn [review van Madelon Vos](/blog/review/madelon-vos-review-bitcoin-crypto-traden/) lees je over de bekendste betaalde opleiding.

Zelf heb ik eigenlijk één partij die ik aanraad om mee te beginnen.

## Gratis Bitcoin-training van Alles Over Crypto

Uitgever: [Alles Over Crypto](/go/get-crypto-masterclass)

![Money mastery crypto masterclass allesovercrypto](/images/migrated/Money-mastery-crypto-masterclass-allesovercrypto.webp "Money Mastery, het betaalde programma van Alles Over Crypto")

Alles Over Crypto (van Patrick Suiker) is de grootste crypto-opleider van Nederland. Hun instap is een **gratis online Bitcoin-training**: daarin leer je de basis van Bitcoin en crypto, hoe de marktcyclus werkt en waar zij zelf op letten bij het beoordelen van munten. Wie daarna verder wil, kan doorstromen naar hun betaalde programma **Money Mastery** (op het moment van schrijven €97 per maand, opzegbaar), met onder andere technische analyse en hun eigen munt-selecties.

Mijn eerlijke advies: volg de gratis training, neem hun muntkeuzes als input en niet als waarheid, en beslis pas daarna of je meer wilt. Niemand weet welke munt 100x gaat, ook zij niet. Wat je wél kunt leren is hoe je zelf een project beoordeelt, en dat is veel meer waard.

**[› GRATIS training crypto](/go/get-crypto-masterclass)**

## Conclusie geld verdienen met cryptovaluta

Geld verdienen met cryptovaluta is niet voor iedereen weggelegd, maar wel voor iedereen mogelijk. Heb je geen technische kennis, kies er dan voor om gewoon iedere maand wat op de grotere cryptomunten in te leggen om zo een potje op te bouwen voor later (geen financieel advies, maar dit is wat ik zou doen in die situatie). Zet staking aan op de munten die je toch vasthoudt, houd rekening met box 3, zet twee-factor-authenticatie aan en handel alleen bij een platform met Europese vergunning.

Het is naar mijn idee zeker één van [de betrouwbare manieren om online geld te verdienen](/blog/online-geld-verdienen/online-geld-verdienen/). Zolang je maar niet verward raakt door alle koersschommelingen op korte termijn. Wie Bitcoin minimaal vier jaar vasthield, heeft tot nu toe nog nooit met verlies verkocht. Dat is geen garantie voor de toekomst, wel een goede reden om je horizon lang te houden.

Wil je zelf **beginnen met het kopen van cryptomunten** en op deze manier online geld verdienen? Dan is de eerste stap om [een account aan te maken bij Finst](/go/finst). Daarbij kun je, om je verder te verdiepen, [deze gratis online Bitcoin-training volgen](/go/get-crypto-masterclass). **Succes!**
