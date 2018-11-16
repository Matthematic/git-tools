const SELECTORS = {
    ALL_FILES: 'div:not(.Details--on) > div.file-header > div.file-actions > button',
    ONLY_LIB: 'Only Lib',

};

let page = document.getElementById('buttonDiv');
  const kSelectors = [SELECTORS.ALL_FILES, SELECTORS.ONLY_LIB];
  function constructOptions(kSelectors) {
    for (let item of kSelectors) {
      let button = document.createElement('button');
      button.style.value = item;
      button.addEventListener('click', function() {
        chrome.storage.sync.set({selector: item}, function() {
          console.log('selector is ' + item);
        })
      });
      page.appendChild(button);
    }
  }
  constructOptions(kSelectors);