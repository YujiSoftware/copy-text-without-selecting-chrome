(function(){
    var metaKey;
    
    updateMetaKey();
    
    chrome.storage.onChanged.addListener(function(changes, areaName){
        if(areaName == "sync"){
            updateMetaKey();
        }
    })

    document.addEventListener("click", function(event){
        if((event.altKey && metaKey == "Alt")
            || (event.ctrlKey && metaKey == "Ctrl")
            || (event.shiftKey && metaKey == "Shift")) { 
            copyCommand(event.target);
            event.preventDefault();
        }
    }, false);

    function updateMetaKey(){
        chrome.storage.sync.get({
            metaKey: 'Alt',
        }, function(items) {
            metaKey = items.metaKey;
        });
    };

    function copyCommand(clickedElement){
        var text = getText(clickedElement.firstChild, "\r\n");
        copy(text.trim());
        
        var rect = clickedElement.getBoundingClientRect();
        var frame = document.createElement("div");
        frame.style.position = "absolute";
        frame.style.top = (rect.top + window.scrollY) + "px";
        frame.style.left = (rect.left + window.scrollX) + "px";
        frame.style.width = (rect.width - 4) + "px";
        frame.style.height = (rect.height - 4) + "px";
        frame.style.border = "solid 2px gold";
        frame.style.borderRadius = "5px";
        frame.style.zIndex = "99999";
        frame.style.pointerEvents = "none";
        document.body.appendChild(frame);
        
        $(frame).fadeIn(300, "swing").delay(500).fadeOut(500, "swing");
        
        // console.log(text.trim());
    }

    function copy(text){
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
})();
