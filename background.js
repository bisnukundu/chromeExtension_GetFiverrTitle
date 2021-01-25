chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www\.fiverr/.test(current_tab_info.url)) {
            chrome.browserAction.onClicked.addListener(() => {
                chrome.tabs.executeScript(null, { file: 'ui.js' }, () => console.log('inject'))
            })
        }
    })
})