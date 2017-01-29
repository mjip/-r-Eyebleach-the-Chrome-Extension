var totalCount = 0;
var threshold = 1269;

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  totalCount = totalCount + response;
  if ( totalCount > threshold ){
    chrome.tabs.create({url : "http://i.imgur.com/XxiaNNo.gifv"});
  }
})
