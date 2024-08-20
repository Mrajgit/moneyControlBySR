function loadWidget(symbol, container) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbol": symbol,
        "width": 350,
        "height": 250,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
    });
    container.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".container");

    // SENSEX Widget
    var sensexDiv = document.createElement("div");
    sensexDiv.className = "tradingview-widget-container";
    container.appendChild(sensexDiv);
    loadWidget("BSE:SENSEX", sensexDiv);

    // BTCUSDT Widget
    var btcDiv = document.createElement("div");
    btcDiv.className = "tradingview-widget-container";
    container.appendChild(btcDiv);
    loadWidget("BINANCE:BTCUSDT", btcDiv);

    // ETHUSD Widget
    var ethDiv = document.createElement("div");
    ethDiv.className = "tradingview-widget-container";
    container.appendChild(ethDiv);
    loadWidget("COINBASE:ETHUSD", ethDiv);

    // Coinbase BTCUSD Widget
    var coinbaseBtcDiv = document.createElement("div");
    coinbaseBtcDiv.className = "tradingview-widget-container";
    container.appendChild(coinbaseBtcDiv);
    loadWidget("COINBASE:BTCUSD", coinbaseBtcDiv);

    // Bybit BTCUSDT Widget
    var bybitBtcDiv = document.createElement("div");
    bybitBtcDiv.className = "tradingview-widget-container";
    container.appendChild(bybitBtcDiv);
    loadWidget("BYBIT:BTCUSDT.P", bybitBtcDiv);
});
