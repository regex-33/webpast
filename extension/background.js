browser.runtime.onInstalled.addListener(function(){

    browser.declarativeContent.onPageChanged.removeRules(undefined, function(){
        browser.declarativeContent.onPageChanged.addRules([{
            conditions: [new browser.declarativeContent.PageStateMatcher({
                //pageUrl: {hostEquals: 'github.com'}
            })],
            actions: [new browser.declarativeContent.ShowPageAction()]
        }])
    })
})
