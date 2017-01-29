var totalCount = 0;
var threshold = 5;
var gifs = ['http://gph.is/1ezQpeu', 'http://gph.is/1yHPykr', 'http://gph.is/1bAs7fj', 'http://gph.is/1H9cU0G', 'http://gph.is/2aD83Pn', 'http://gph.is/2aDlMWN', 'http://gph.is/1AZjmo7', 'http://gph.is/1Q0xW6y', 'http://gph.is/1oNJiAk', 'http://gph.is/1ixgBU5', 'http://gph.is/1pSdkSn', 'http://gph.is/1leuVQy', 'http://gph.is/2cuTuB2', 'http://gph.is/1Bno0Bh', 'http://gph.is/YZreDU', 'http://gph.is/1jWpy9s', 'http://gph.is/VxjCu3', 'http://gph.is/28Ws7Ld', 'http://gph.is/1ZexrL0'];

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  var randomNum = Math.floor(Math.random() * 20);
  totalCount = totalCount + response;
  if ( totalCount > threshold ){
    chrome.tabs.create({url : gifs[randomNum]});
  }
})
