chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details.url);
        if( details.url == "http://www.multiplayerpiano.com/script.js" ) {
            console.log(chrome.extension.getURL('script_modified.js'));
            return {redirectUrl: chrome.extension.getURL('script_modified.js') }
        };
    },
    { urls: ["*://*.multiplayerpiano.com/script.js"] },
    ["blocking"]);

