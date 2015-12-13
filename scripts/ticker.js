var viewableContent = "",
    tickerContent = "",
    placeHolder = 0,
    viewSize = 133,
    ticker = document.getElementById("ticker"),
    FEED_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22aal%22%2C%22aapl%22%2C%22adbe%22%2C%22adi%22%2C%22adp%22%2C%22adsk%22%2C%22akam%22%2C%22alxn%22%2C%22amat%22%2C%22amgn%22%2C%22amzn%22%2C%22atvi%22%2C%22avgo%22%2C%22bbby%22%2C%22bidu%22%2C%22biib%22%2C%22bmrn%22%2C%22ca%22%2C%22celg%22%2C%22cern%22%2C%22chkp%22%2C%22chrw%22%2C%22chtr%22%2C%22cmcsa%22%2C%22cmcsk%22%2C%22cost%22%2C%22csco%22%2C%22ctsh%22%2C%22ctxs%22%2C%22disca%22%2C%22disck%22%2C%22dish%22%2C%22dltr%22%2C%22ea%22%2C%22ebay%22%2C%22esrx%22%2C%22expd%22%2C%22fast%22%2C%22fb%22%2C%22fisv%22%2C%22fox%22%2C%22FOXA%22%2C%22GILD%22%2C%22GMCR%22%2C%22GOOG%22%2C%22GOOGL%22%2C%22GRMN%22%2C%22HSIC%22%2C%22ILMN%22%2C%22INCY%22%2C%22INTC%22%2C%22INTU%22%2C%22ISRG%22%2C%22JD%22%2C%22KHC%22%2C%22KLAC%22%2C%22LBTYA%22%2C%22LBTYK%22%2C%22LILA%22%2C%22LILAK%22%2C%22LLTC%22%2C%22LMCA%22%2C%22LMCK%22%2C%22LRCX%22%2C%22LVNTA%22%2C%22MAR%22%2C%22MAT%22%2C%22MDLZ%22%2C%22MNST%22%2C%22MSFT%22%2C%22MU%22%2C%22MYL%22%2C%22NFLX%22%2C%22NTAP%22%2C%22NVDA%22%2C%22NXPI%22%2C%22ORLY%22%2C%22PAYX%22%2C%22PCAR%22%2C%22PCLN%22%2C%22PYPL%22%2C%22QCOM%22%2C%22QVCA%22%2C%22REGN%22%2C%22ROST%22%2C%22SBAC%22%2C%22SBUX%22%2C%22SIRI%22%2C%22SNDK%22%2C%22SPLS%22%2C%22SRCL%22%2C%22STX%22%2C%22SWKS%22%2C%22SYMC%22%2C%22TRIP%22%2C%22TSCO%22%2C%22TSLA%22%2C%22TXN%22%2C%22VIAB%22%2C%22VIP%22%2C%22VOD%22%2C%22VRSK%22%2C%22VRTX%22%2C%22WBA%22%2C%22WDC%22%2C%22WFM%22%2C%22WYNN%22%2C%22XLNX%22%2C%22YHOO%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';


$.getJSON(FEED_URL, function (data) {
    console.log(data);
    var i, x, seperator = "///";

    for (x = 0; x < 5; x++) {
        seperator = "_" + seperator + "_";
    }

    tickerContent = "";
    for (i = 0; i < data.query.count; i++) {
        //        console.log((data.query.results.quote[i].Symbol).toUpperCase());
        if (data.query.results.quote[i].Ask && data.query.results.quote[i].Bid) { //making sure the prices aren't null
            tickerContent += (data.query.results.quote[i].Symbol).toUpperCase() + ":__Ask:_" + data.query.results.quote[i].Ask + ":__Bid:_" + data.query.results.quote[i].Bid + "_(" + data.query.results.quote[i].PercentChange + ")" + seperator;

        }
    }

    for (i = 0; i < viewSize; i++) {
        tickerContent = "_" + tickerContent + "_";
    }

    console.log(tickerContent);

    setInterval(tickerScroll, 125);
});

function tickerScroll() {
    viewableContent = tickerContent.substr(placeHolder, viewSize);
    viewableContent = viewableContent.replace(/_/g, "<span class='whiteout'>_</span>");
    ticker.innerHTML = viewableContent;
    placeHolder++;

    if (placeHolder > tickerContent.length - viewSize) {
        placeHolder = 0;
    }
}