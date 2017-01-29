var count = 0;
chrome.runtime.onMessage.addListener(function(message, sender, function sendResponse){
  count += message;
  if (count > 2){
    alert("PANIC!!");
  } 
  alert("PANIC!!!!!!!");
});
alert("PANIC!!!!!!!");