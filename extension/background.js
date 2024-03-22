browser.runtime.onInstalled.addListener(function() {
    browser.declarativeContent.onPageChanged.removeRules(undefined, function() {
        browser.declarativeContent.onPageChanged.addRules([{
            conditions: [new browser.declarativeContent.PageStateMatcher({
                // Add your page URL condition here
            })],
            actions: [new browser.declarativeContent.ShowPageAction()]
        }]);
    });
});

