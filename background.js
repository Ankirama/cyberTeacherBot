chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    // do your things
    chrome.tabs.executeScript(null, {code:"var test = window.frames['mainCyber'].frames['exo']; test.document.getElementsByName('response')[0].value = test.document.getElementsByName('result')[0].value; test.document.getElementById('s').submit();"});
  }
})
