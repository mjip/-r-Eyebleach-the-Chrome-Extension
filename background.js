var totalCount = 0;
var threshold = 15;
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  totalCount = totalCount + response;
  if ( totalCount > threshold ){
    //alert("PANIC");
  }
})
