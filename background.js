chrome.contextMenus.create({
    "title" : "Copy(&C)",
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