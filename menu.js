var showInfo = function () {
    console.log("Show Info is invoked");
}
var showAnotherInfo = function () {
    console.log("Show Another Info");
}
chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "showInfo") {
        showInfo();
    }
    if (message.functiontoInvoke == "showAnotherInfo") {
        showAnotherInfo();
    }
});