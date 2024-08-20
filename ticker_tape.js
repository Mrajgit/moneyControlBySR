(function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [
            { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
            { "proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD" },
            { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
            { "proName": "BITSTAMP:BTCUSD", "title": "BITCOIN" },
            { "proName": "BITSTAMP:ETHUSD", "title": "ETHEREUM" },
            { "description": "SENSEX", "proName": "BSE:SENSEX" },
            { "description": "NETFLIX", "proName": "NASDAQ:NFLX" },
            { "description": "AMAZON", "proName": "NASDAQ:AMZN" },
            { "description": "APPLE", "proName": "NASDAQ:AAPL" },
            { "description": "NIKE", "proName": "NYSE:NKE" },
            { "description": "BITCOIN", "proName": "BINANCE:BTCUSDT" }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
    });
    document.body.appendChild(script);
})();
