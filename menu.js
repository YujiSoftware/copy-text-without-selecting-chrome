var clickedElement = null;

document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) { 
        clickedElement = event.target;
    }
}, true);

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "copy") {
        var text = clickedElement.textContent;
        
        var textArea = document.createElement("textarea");
        textArea.style.cssText = "position: absolute; left: -100%;";

        try{
            document.body.appendChild(textArea);

            textArea.value = text;
            textArea.select();
        
            document.execCommand("copy");
        }finally{
            document.body.removeChild(textArea);
        }
    }
});

