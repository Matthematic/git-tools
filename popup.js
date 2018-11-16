let changeColor = document.getElementById('changeColor');

let selector = '';
chrome.storage.sync.get('selector', function(data) {
    selector = data.selector;
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    console.log(color);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: "document.querySelectorAll('" + selector + "').forEach(function(node) { node.click(); });"});
    });
};