chrome.contextMenus.create({
    "title" : "Copy(&C)",
    "type" : "normal",
    "contexts" : ["page"],
    "onclick" : onClick
});

function onClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

    //Add all you functional Logic here
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "showInfo"
        });
    });
}