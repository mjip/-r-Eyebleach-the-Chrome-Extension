var count = 0;
var filt;
chrome.storage.sync.get('filters', function (result){
	filt = result['filters'];
});
walk(document.body);
alert("PANIC!!!");
if (count > 5){
	setTimeout(sendEyeBleach, 6000);
}
alert("PAnic");

function sendEyeBleach(){	
	chrome.runtime.sendMessage(count);
	count = 0;
}

function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;

	}
}

function handleText(textNode)
{
	var v = textNode.textContent;
	if ( v.includes(filt)){
		count++;
	}
}
