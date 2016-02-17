chrome.contextMenus.create({
    "title" : chrome.i18n.getMessage("copy"),
    "type" : "normal",
    "contexts" : ["page", "link"],
    "onclick" : onClick
});

function onClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "copy"
        });
    });
}