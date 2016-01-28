chrome.contextMenus.create({
    "title" : "Copy(&C)",
    "type" : "normal",
    "contexts" : ["page"],
    "onclick" : function(info, tab){
        var url = "https://www.google.co.jp/"
        chrome.tabs.create({ url : url});
    }
});
