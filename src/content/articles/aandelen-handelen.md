---
title: "Geld verdienen met beleggen in aandelen in 2026 – Zo begin je"
description: "Beleggen in aandelen in 2026: live grafiek, brokers vergeleken, ETF's, samengesteld rendement berekenen, hefboom en de box 3-regels van 2026 en 2028."
date: 2018-04-22
updated: 2026-09-19
category: "online-geld-verdienen"
slug: "aandelen-handelen"
lang: "nl"
draft: false
featuredImage: "/images/headers/aandelen-handelen.webp"
---

**Beleggen in aandelen** is voor mij altijd de saaiste én de betrouwbaarste manier geweest om geld te laten groeien. Saai, omdat je het beste zo min mogelijk doet. Betrouwbaar, omdat de wereldwijde aandelenmarkt over de laatste honderd jaar, met alle crashes erbij, gemiddeld zo'n 7% per jaar boven de inflatie heeft opgeleverd.

In dit artikel lees je wat een aandeel eigenlijk is, hoe je in 2026 een broker kiest (en waarom de kosten sinds mijn eerste versie van dit artikel flink zijn gedaald), wat het verschil is tussen losse aandelen, beleggingsfondsen en ETF's, hoe samengesteld rendement werkt (met een rekentool), wat een hefboom doet en wat de Belastingdienst in box 3 van je wil. Sinds ik dit artikel in 2018 schreef is er veel veranderd: brokers rekenen nog maar een euro per order, ETF's zijn de standaard geworden voor beginners, de box 3-regels zijn omgegooid en de rente op je spaarrekening is terug. De grafiek hieronder is live, dus die klopt ook als je dit over een jaar leest.

Eerst even terug naar de basis: wat is een aandeel eigenlijk?

## Wat is een aandeel?

Een aandeel is **een stukje bedrijf dat jij kunt bezitten**. Je koopt een aandeel in een bedrijf en bent daarmee letterlijk een klein beetje eigenaar. Bedrijven geven aandelen uit om geld op te halen voor een grote investering; dat gebeurt via een **beursgang**. Daarna kun je die stukjes bedrijf op de beurs kopen en verkopen, tegenwoordig bijna altijd via een app van een online broker.

![Een gebouw dat als een taart is aangesneden, met één punt op een bordje](/images/spots/aandelen-stukje-bedrijf.webp "Een aandeel: één punt van de taart is van jou")

> De prijs van een aandeel wordt bepaald door **vraag en aanbod**. Willen veel mensen een aandeel kopen, dan gaat de prijs omhoog. Willen veel mensen het verkopen, dan gaat de prijs omlaag.
>
> Jij verdient geld met aandelen op twee manieren: door een aandeel voor meer te verkopen dan je ervoor betaalde (koerswinst), en doordat sommige bedrijven een deel van hun winst aan aandeelhouders uitkeren (dividend).

Waarom de vraag naar een aandeel verandert? Daar zijn talloze redenen voor. In de coronacrisis kelderden de aandelen van vliegmaatschappijen, omdat beleggers bang waren voor faillissementen. Tegelijk floreerden de makers van vaccins. In 2025 en 2026 zag je hetzelfde spel rond AI: chipbedrijven als ASML en Nvidia werden de motor van de beurs, terwijl bedrijven die AI dreigt te vervangen juist onder druk kwamen te staan.

Om te beleggen in aandelen moet je **begrijpen dat dit soort gebeurtenissen de koers beweegt**, maar je hoeft ze niet te voorspellen. Dat is de belangrijkste les die ik in de jaren dat ik beleg heb geleerd: de meeste mensen die het proberen te voorspellen, verliezen van de mensen die gewoon breed gespreid kopen en wachten.

Wil je toch leren hoe je zelf een bedrijf beoordeelt? Dan is [deze cursus van een uur over het analyseren van aandelen](/go/cursus-aandelen) een prima start (€75 op het moment van schrijven, gemaakt met Tim Nijsmans, docent Private Banking).

## De wereldwijde aandelenmarkt, live

Voordat we het over brokers en strategieën hebben, wil ik je laten zien waar dit artikel eigenlijk om draait. Hieronder zie je de koers van de iShares Core MSCI World, met bijna 128 miljard euro een van de grootste ETF's van Europa. Daarin zitten zo'n 1.400 grote bedrijven uit 23 ontwikkelde landen, in euro's op de beurs van Amsterdam. Zet de grafiek op "Alles" en kijk naar de trend, niet naar de deuken.

<div class="embed not-prose" id="aandelen-chart">
<div class="embed__frame"><div class="tradingview-widget-container" style="height:100%;width:100%"><div class="tradingview-widget-container__widget" style="height:100%;width:100%"></div></div></div>
<p class="embed__note">iShares Core MSCI World (IWDA) in euro's op Euronext Amsterdam, via TradingView. Met de knoppen onder de grafiek kies je van één maand tot de hele geschiedenis. De grafiek laadt pas als je hier scrolt en bevat geen advies, alleen de koers. Zie je niets (bijvoorbeeld door een adblocker)? <a href="https://www.tradingview.com/chart/?symbol=EURONEXT%3AIWDA" rel="noopener" target="_blank">Bekijk de koers op TradingView</a>.</p>
</div>

<script>
(function () {
  var box = document.getElementById('aandelen-chart'); if (!box) return;
  var frame = box.querySelector('.tradingview-widget-container'), done = false;
  function load() {
    if (done) return; done = true;
    var s = document.createElement('script');
    s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'; s.async = true;
    s.text = JSON.stringify({
      autosize: true, symbol: "EURONEXT:IWDA", interval: "W", timezone: "Europe/Amsterdam", theme: "light", style: "3",
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

Zie je die deuk in 2020 (corona) en die in 2022 (inflatie en rente)? Op het moment zelf voelde dat als het einde van de wereld. Op de schaal van de hele grafiek zijn het hobbels. Wie in de dip verkocht, verloor. Wie gewoon door bleef kopen, staat er nu flink beter voor. Over de laatste tien jaar leverde de MSCI World in euro's gemiddeld ruim 12% per jaar op, sinds 2000 (dus inclusief de dotcom-crash en de kredietcrisis) zo'n 6,6% per jaar.

## Kies een broker om te beleggen in aandelen

Om aandelen te kopen heb je een beleggingsrekening nodig bij een **broker**. Letterlijk vertaald een beurshandelaar, en misschien denk je dan aan iemand die op Wall Street met papieren staat te zwaaien. In de praktijk is een broker in 2026 gewoon een app op je telefoon.

![Een smartphone op een bureau met een stijgende lijngrafiek, naast een kop koffie](/images/spots/aandelen-broker-app.webp "Een broker in 2026: een app, een koffie en vooral veel geduld")

Zelf ben ik jaren geleden bij [eToro](/go/etoro-trading) begonnen, omdat je daar met kleine bedragen kon starten en naast aandelen ook ETF's, grondstoffen en crypto vindt. Een account aanmaken is gratis en makkelijk, en op aandelen en ETF's betaal je geen commissie [via deze link](/go/etoro-trading).

[Maak gratis een eToro-account](/go/etoro-trading)

Maar eerlijk is eerlijk: de markt is sinds 2018 enorm veranderd. Nederlandse en Duitse brokers zijn zó goedkoop geworden dat je vooral moet kijken naar wat bij jouw manier van beleggen past. Dit zijn de tarieven die ik op 19 september 2026 heb gecontroleerd:

| Broker | Aandeel Euronext Amsterdam | ETF's | Rente op niet-belegd geld | Let op |
|---|---|---|---|---|
| Trade Republic | €1 per order | Gratis via een maandelijks spaarplan, anders €1 | 2% (3% voor nieuwe klanten) | Duitse bank met Nederlandse IBAN; alleen online support |
| DEGIRO | €2 + €1 afhandelingskosten | €1 voor de kernselectie (ongeveer 1.500 ETF's op Tradegate), anders vanaf €3 | Geen | Sinds oktober 2025 vallen populaire ETF's op Euronext buiten de kernselectie |
| eToro | 0% commissie, je betaalt de spread | 0% commissie | Tot 3,55% op dollarsaldo, afhankelijk van je saldo | Rekening in dollars: 0,5% wisselkosten bij storten, $5 per opname |
| Je eigen bank (ING, ABN AMRO, Rabobank) | Verschilt per bank, meestal duurder | Eigen fondsen | Spaarrente 1,25% tot 1,50% | Makkelijk, maar je betaalt voor het gemak |

Waar je op let bij het kiezen van een broker:

*   **Wat kost een order, en wat kost het aanhouden van je portefeuille?** Voor iemand die één keer per maand koopt en dertig jaar wacht, is een spaarplan van €0 per maand het verschil tussen honderden euro's kosten en niets.
*   **In welke valuta staat je rekening?** Een dollarrekening (zoals bij eToro) betekent wisselkosten bij elke storting en opname en een wisselkoersrisico bovenop je beleggingsrisico.
*   **Kun je in euro's beleggen in ETF's?** Voor Nederlanders is dat de kern.
*   **Wil je ook crypto?** Dan zou ik daarvoor eerder een [crypto exchange](/blog/web3/beste-crypto-exchange/) als [Finst](/blog/review/finst-crypto-exchange/) gebruiken dan de crypto-afdeling van een broker.
*   **Wat is de reputatie en onder welke toezichthouder valt de broker?** Nederlandse brokers vallen onder de AFM, Trade Republic onder de Duitse BaFin, eToro voor Europese klanten onder de Cypriotische CySEC.
*   **Wil je met een hefboom handelen?** Dan zit je bij een CFD-broker als eToro; daarover verderop meer, met alle waarschuwingen die erbij horen.

Of een broker **aansluit op jouw strategie** hangt vooral af van of je aandelen snel wilt verhandelen of ze jarenlang wilt vasthouden. Voor die laatste groep (de meeste mensen die dit lezen, vermoed ik) zijn de kosten per order bijna niet meer relevant. Voor wie dagelijks handelt, tellen spreads en wisselkosten juist dubbel.

## Het verschil tussen aandelen, beleggingsfondsen en ETF's

Bij een **beleggingsfonds** koop je met één transactie in één keer een hele mand aandelen. Het fonds haalt collectief geld op en maakt daar een gespreide portefeuille van, beheerd door een fondsmanager die daar een vergoeding voor vraagt.

![Een rieten mand vol kleine gekleurde blokjes, één blokje limoengroen](/images/spots/aandelen-etf-mandje.webp "Een ETF: één mandje met honderden bedrijven erin")

Het **moderne alternatief is de ETF**, het exchange-traded fund. Ook een mandje aandelen, maar dan zonder actieve beheerder: de ETF volgt gewoon een index, zoals de AEX, de S&P 500 of de MSCI World. Daardoor zijn de jaarlijkse kosten heel laag (de iShares Core MSCI World rekent 0,20% per jaar) en kun je hem net als een aandeel op de beurs kopen. In 2018 moest ik ETF's nog uitleggen; in 2026 zijn ze voor beginners de standaard, en terecht.

Het voordeel van zo'n mandje: waar het ene bedrijf een beetje daalt, stijgt het andere. Je risico is gespreid en je **groeit gewoon met de markt mee**. Het nadeel is dat je nooit de jackpot wint: je haalt nooit meer dan het gemiddelde.

Bij **losse aandelen** koop je een stukje van één bedrijf. Dat kan procentueel veel harder stijgen (en dalen) en heeft dus **meer risico én meer groeimogelijkheden**. Wil je in meerdere bedrijven losse aandelen kopen, dan heb je al snel een groter bedrag nodig; één aandeel ASML kost in 2026 honderden euro's. Bij veel brokers kun je gelukkig ook fracties van aandelen kopen.

Mijn advies is niet zo ingewikkeld: **bouw eerst een basis met een brede ETF** en koop daarnaast, als je dat leuk vindt, met een klein deel van je geld losse aandelen van bedrijven die je begrijpt. Instappen in een ETF kan [via eToro](/go/etoro-trading), waar je honderden ETF's vindt, of via een van de brokers uit de tabel.

<aside class="cta-box cta-box--book not-prose"><div><p class="cta-box__eyebrow">Gratis boek</p><p><strong>Dé inspiratie voor een vrij leven.</strong> Alle verhalen en lessen uit zes jaar reizen en online werken staan in mijn boek. Gratis en direct te downloaden, geen e-mail nodig.</p></div><a class="btn btn-primary" href="/boek/">Download het boek</a></aside>

## Maak een budget om te beleggen in aandelen

Als je nieuw bent, zit je waarschijnlijk met twee vragen.

**1. Hoeveel geld heb ik nodig om te beginnen?** Minder dan ooit. Bij Trade Republic en DEGIRO koop je een ETF vanaf een paar euro, bij eToro kun je storten vanaf €10. Een startvermogen van duizenden euro's is niet nodig; een vast bedrag per maand is veel belangrijker.

**2. Hoeveel wil ik in aandelen stoppen?** Twee vuistregels die ik zelf hanteer. Eén: beleg alleen geld dat je de komende tien jaar niet nodig hebt. Twee: houd eerst een buffer van drie tot zes maanden aan uitgaven op een spaarrekening. En daar is in 2026 weer iets mee te verdienen: de ECB verhoogde de depositorente in september 2026 naar 2,50%, en waar de grootbanken blijven hangen op 1,25% tot 1,50%, betalen kleinere banken en spaarplatforms rond de 3% op vrij opneembaar spaargeld.

Bij een brede ETF kun je een groot deel van je beleggingen kwijt, juist omdat het risico gespreid is. De klassieke verdeling voor een lange horizon is zo'n 80% aandelen en 20% obligaties; hoe dichter je bij het moment komt dat je het geld nodig hebt, hoe meer je richting obligaties en spaargeld schuift. Bij losse aandelen wordt het een ander verhaal: **spreid je kansen** over sectoren en landen en zet nooit alles op één bedrijf, hoe overtuigd je ook bent.

## Focus op de lange termijn (en laat rendement op rendement zijn werk doen)

Beleggen in aandelen lijkt vaak gepaard te gaan met ingewikkelde strategieën. Dat hoeft niet. De strategie die voor de meeste mensen het beste werkt, past in één zin: **koop elke maand voor een vast bedrag, wat de koers ook doet, en kijk er zo min mogelijk naar om**.

Dat maandelijks inleggen heet **DCA (dollar cost averaging)**: soms koop je duur, soms goedkoop, en gemiddeld zit je goed. Het haalt de emotie uit het beleggen, en emotie is precies wat beleggers geld kost.

Waarom de lange termijn zo belangrijk is? Omdat je rendement over je rendement krijgt. De S&P 500, de 500 grootste Amerikaanse bedrijven, leverde van 1926 tot 2026 gemiddeld 10,5% per jaar op inclusief dividend, en zo'n 7,3% per jaar na inflatie. Reken zelf maar uit wat dat met je inleg doet:

<div class="tool not-prose" id="aandelen-calc">
<p class="tool__title">Reken uit wat samengesteld rendement met jouw inleg doet</p>
<p class="tool__intro">Vul je eigen cijfers in; de uitkomst rekent direct mee. Het rendement is een gemiddelde per jaar, vóór kosten en belasting.</p>
<div class="tool__grid">
<label class="tool__field">Startbedrag (€)<input class="tool__input" id="aandelen-start" type="number" min="0" step="100" value="1000"></label>
<label class="tool__field">Inleg per maand (€)<input class="tool__input" id="aandelen-maand" type="number" min="0" step="10" value="200"></label>
<label class="tool__field">Gemiddeld rendement per jaar (%)<input class="tool__input" id="aandelen-rendement" type="number" min="-20" max="30" step="0.1" value="7"></label>
<label class="tool__field">Aantal jaren<input class="tool__input" id="aandelen-jaren" type="number" min="1" max="60" step="1" value="20"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Eindbedrag</p><p class="tool__value" id="aandelen-eind">€ 0</p><p class="tool__sub" id="aandelen-eind-sub">na 20 jaar</p></div>
<div class="tool__result"><p class="tool__label">Waarvan rendement</p><p class="tool__value" id="aandelen-winst">€ 0</p><p class="tool__sub" id="aandelen-inleg-sub">op een inleg van € 0</p></div>
</div>
<p class="tool__note">Rekenvoorbeeld, geen belofte. De 7% is ongeveer wat de wereldwijde aandelenmarkt de afgelopen honderd jaar gemiddeld per jaar boven de inflatie opleverde; in losse jaren was het van −40% tot +30%.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var nl = function (n) { return '€ ' + new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 }).format(n); };
  function calc() {
    var p = +$('aandelen-start').value || 0, m = +$('aandelen-maand').value || 0;
    var r = (+$('aandelen-rendement').value || 0) / 100, y = Math.max(1, Math.round(+$('aandelen-jaren').value || 1));
    var n = y * 12, rm = Math.pow(1 + r, 1 / 12) - 1, fv;
    if (Math.abs(rm) < 1e-9) { fv = p + m * n; } else { fv = p * Math.pow(1 + rm, n) + m * (Math.pow(1 + rm, n) - 1) / rm; }
    var inleg = p + m * n;
    $('aandelen-eind').textContent = nl(fv); $('aandelen-eind-sub').textContent = 'na ' + y + ' jaar';
    $('aandelen-winst').textContent = nl(fv - inleg); $('aandelen-inleg-sub').textContent = 'op een inleg van ' + nl(inleg);
  }
  ['aandelen-start', 'aandelen-maand', 'aandelen-rendement', 'aandelen-jaren'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
</script>

Zie je wat er gebeurt als je het aantal jaren van 10 naar 30 zet? De laatste tien jaar leveren meer op dan de eerste twintig bij elkaar. Dat is geen truc, dat is rendement over rendement. **Hoe langer de periode, hoe zwaarder de laatste jaren wegen**, en daarom is vroeg beginnen belangrijker dan veel inleggen.

Het beste wat je na het kopen kunt doen, is er **niet te vaak naar kijken**. Koersen gaan dagelijks omhoog en omlaag; als je voor de lange termijn belegt, is dat ruis. Word je onrustig van een rode dag? Dan is een brede ETF met een maandelijks spaarplan waarschijnlijk de enige vorm van beleggen die bij je past. En dat is prima.

## CFD's, leverage en het hefboomeffect

Oké, we hebben het nu gehad over langetermijndenken. Er is ook een andere manier om met een kleine inleg grote posities in te nemen: handelen met een **hefboom**, meestal via een **CFD (contract for difference)**.

Een hefboom of multiplier betekent dat je met €500 en een hefboom van 5 in feite voor €2.500 aan een aandeel handelt. Stijgt het aandeel 1%, dan maak je op je €500 een winst van 5%. **Je winsten én verliezen zijn dus vijf keer zo groot.** Daalt het aandeel 20%, dan is je hele inleg weg.

![Een wip waarop een kleine munt een enorme stapel munten omhoog tilt, balancerend op de rand van een klif](/images/spots/aandelen-hefboom.webp "Een hefboom: een kleine inleg tilt een grote positie, tot de wip kantelt")

Sinds de Europese regels van ESMA mogen particulieren maximaal een hefboom van 5:1 op losse aandelen en 20:1 op grote indices gebruiken, en moet elke CFD-aanbieder erbij vertellen hoeveel van zijn klanten geld verliezen. Bij eToro is dat volgens hun eigen risicowaarschuwing in september 2026 51% van de particuliere beleggers. Dat is dus geen kleine lettertjes, dat is de helft.

Een CFD maakt het ook mogelijk om **short te gaan**: je zet dan in op een daling in plaats van een stijging. Bij eToro vind je de hefboom onder de term [leverage](/go/cfd-etoro). Er is één regel die ik je wil meegeven: gebruik altijd een stoploss, en gebruik nooit een hoge hefboom op iets volatiels als [crypto](/blog/web3/handelen-in-crypto-valuta/). Weet je niet wat een stoploss is? Dan is leverage traden nu nog niet the way to go ;).

[Leverage traden op eToro](/go/cfd-etoro)

## Risico's bij beleggen in aandelen

Beleggen is **nooit zonder risico**. Het risico van een brede ETF is kleiner dan dat van losse aandelen, maar ook een ETF kan in een slecht jaar 30 tot 40% dalen; de MSCI World verloor in 2008 ruim 40% in dollars. De risico's waar je over na moet denken:

*   **De markt zelf.** Een oorlog, een pandemie, een energiecrisis of een renteschok (herkenbaar?) drukt de winsten van bedrijven en daarmee de koersen. Het enige medicijn is tijd: elke crash in de grafiek hierboven is tot nu toe weer goedgemaakt.
*   **Wisselkoersen.** Beleg je in Amerikaanse aandelen, dan beleg je ook in de dollar. In 2025 zakte de dollar ten opzichte van de euro, en dat kostte Nederlandse beleggers rendement terwijl de Amerikaanse beurs zelf steeg. Een wereldwijde ETF heeft dit risico ook (ruim de helft van de MSCI World is Amerikaans), maar spreidt het.
*   **Eén bedrijf.** Een bedrijf kan omvallen, gefraudeerd hebben of simpelweg ingehaald worden. Dat risico spreid je weg met een mandje; bij losse aandelen draag je het zelf.
*   **Jijzelf.** Verkopen in paniek, kopen op een hype, te vaak handelen: verreweg de meeste verliezen van particuliere beleggers komen niet van de markt maar van hun eigen gedrag.

## Belasting over aandelen in 2026 (box 3)

Dit onderdeel sloeg ik in de eerste versie van dit artikel over, en dat was een fout, want het scheelt echt geld. In Nederland vallen aandelen en ETF's in **box 3**, net als spaargeld en crypto. Je betaalt geen belasting over je winst bij verkoop, maar jaarlijks over de **waarde op 1 januari**, ook als je niets hebt verkocht.

![Een kalenderblad met de eerste dag omcirkeld en een stapel munten erop](/images/spots/aandelen-box3.webp "Box 3: de fiscus kijkt naar de waarde van je beleggingen op 1 januari")

Voor 2026 gelden deze cijfers: beleggingen tellen als 'overige bezittingen' met een forfaitair rendement van 6,00%, spaargeld met 1,28% (voorlopig) en schulden met 2,70% (voorlopig, boven een drempel van €3.800). Over dat fictieve rendement betaal je 36% belasting. Het heffingsvrije vermogen is €59.357 per persoon, €118.714 met fiscaal partner. Effectief betaal je over beleggingen boven die vrijstelling dus zo'n 2,2% van de waarde per jaar.

<div class="tool not-prose" id="aandelen-box3">
<p class="tool__title">Reken uit wat je in 2026 in box 3 betaalt</p>
<p class="tool__intro">Waarde van je spaargeld en beleggingen op 1 januari 2026, zonder schulden en zonder fiscaal partner. Met partner verdubbelt de vrijstelling.</p>
<div class="tool__grid">
<label class="tool__field">Spaargeld (€)<input class="tool__input" id="aandelen-b3-spaar" type="number" min="0" step="1000" value="20000"></label>
<label class="tool__field">Aandelen, ETF's en crypto (€)<input class="tool__input" id="aandelen-b3-beleg" type="number" min="0" step="1000" value="60000"></label>
</div>
<div class="tool__results">
<div class="tool__result"><p class="tool__label">Belasting box 3</p><p class="tool__value" id="aandelen-b3-belasting">€ 0</p><p class="tool__sub">per jaar, tarief 36%</p></div>
<div class="tool__result"><p class="tool__label">Belaste grondslag</p><p class="tool__value" id="aandelen-b3-grondslag">€ 0</p><p class="tool__sub" id="aandelen-b3-sub">na vrijstelling van € 59.357</p></div>
</div>
<p class="tool__note">Rekent met de forfaits van 2026: 1,28% op spaargeld (voorlopig) en 6,00% op beleggingen. Was je werkelijke rendement lager dan het forfait, dan kun je via de tegenbewijsregeling over dat lagere rendement aangifte doen.</p>
</div>

<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var nl = function (n) { return '€ ' + new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 0 }).format(n); };
  var VRIJ = 59357, SPAAR = 0.0128, BELEG = 0.06, TARIEF = 0.36;
  function calc() {
    var s = +$('aandelen-b3-spaar').value || 0, b = +$('aandelen-b3-beleg').value || 0, tot = s + b;
    var grondslag = Math.max(0, tot - VRIJ);
    var forfait = tot > 0 ? (s * SPAAR + b * BELEG) / tot : 0;
    var belasting = grondslag * forfait * TARIEF;
    $('aandelen-b3-belasting').textContent = nl(belasting);
    $('aandelen-b3-grondslag').textContent = nl(grondslag);
    $('aandelen-b3-sub').textContent = 'na vrijstelling van ' + nl(VRIJ) + ', forfait ' + new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 2 }).format(forfait * 100) + '%';
  }
  ['aandelen-b3-spaar', 'aandelen-b3-beleg'].forEach(function (id) { $(id).addEventListener('input', calc); });
  calc();
})();
</script>

Drie dingen die je moet weten:

*   **Tegenbewijsregeling.** Was je werkelijke rendement (koerswinst plus dividend, min koersverlies) lager dan het forfait, dan mag je sinds de uitspraken van de Hoge Raad aangifte doen over dat werkelijke rendement. In een slecht beursjaar scheelt dat veel.
*   **Dividendbelasting.** Op Nederlands dividend wordt 15% ingehouden, en dat verreken je gewoon in je aangifte. Op Amerikaans dividend houdt de VS standaard 30% in; met een W-8BEN-formulier (de meeste brokers regelen dat automatisch) wordt dat 15%, dat je ook weer kunt verrekenen.
*   **Vanaf 2028 verandert alles.** De Tweede Kamer stemde op 12 februari 2026 in met de Wet werkelijk rendement box 3. Vanaf 2028 betaal je 36% over je echte rendement, inclusief koerswinst die je nog niet hebt verzilverd, met een heffingsvrij resultaat van €1.800 per persoon. Verliezen worden dan verrekenbaar. De Eerste Kamer moet nog stemmen, dus de details kunnen nog schuiven.

## Veelgestelde vragen over beleggen in aandelen

**Is 2026 een goed moment om te beginnen?** Voor een langetermijnbelegger is het antwoord bijna altijd: het beste moment was tien jaar geleden, het op één na beste moment is nu. Beleg je maandelijks, dan maakt het instapmoment nauwelijks uit.

**Wat is het verschil tussen de AEX en de MSCI World?** De AEX bevat de 25 grootste fondsen van de Amsterdamse beurs en hangt zwaar op een paar bedrijven, zoals ASML en Shell. De MSCI World spreidt over zo'n 1.400 bedrijven in 23 landen. Voor een basisportefeuille kies ik altijd de wereld boven Nederland.

**Moet ik mijn beleggingen opgeven?** Ja, in box 3, naar de waarde op 1 januari. Nederlandse brokers geven de gegevens door aan de Belastingdienst; de aangifte staat meestal al vooringevuld. Beleg je bij een buitenlandse broker als eToro of Trade Republic, controleer dan zelf of alles erin staat.

**Wat is een spread?** Het verschil tussen de koop- en verkoopprijs op hetzelfde moment. Bij brokers "zonder commissie" zit daar hun verdienmodel; bij populaire aandelen en ETF's is de spread klein, bij exotische fondsen kan hij oplopen tot een paar procent.

## Conclusie beleggen in aandelen

Klaar om te beleggen in aandelen? [Maak een account aan bij een online broker](/go/etoro-trading) en begin vandaag nog met je eerste, kleine, maandelijkse inleg. Afhankelijk van het risico dat jij acceptabel vindt, kies je voor:

*   Een brede ETF of beleggingsfonds, elke maand een vast bedrag (laag risico, de basis voor bijna iedereen)
*   Losse aandelen van bedrijven die je begrijpt (gemiddeld risico, met een klein deel van je geld)
*   CFD's en hefboom (hoog risico, de helft van de klanten verliest, alleen met geld dat je kunt missen)

Hoe hoger het risico, hoe groter het mogelijke rendement, én het mogelijke verlies. Dat zie je ook bij **speculatieve assets zoals crypto**, die je tevens op [eToro](/go/etoro-trading) kunt kopen. Mijn eigen geld zit voor het grootste deel gewoon in een wereldwijde ETF, en daar kijk ik hooguit één keer per maand naar.

Succes met het **beleggen in aandelen** gewenst!

[**Leer hoe je zelf de juiste aandelen vindt en eenvoudig analyseert. Bekijk deze cursus van een uur >>**](/go/cursus-aandelen)
