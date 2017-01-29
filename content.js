var count = 0; 
var filt;

walk(document.body);


if (count > 5){
	setTimeout(sendEyeBleach, 6000);
}

function sendEyeBleach(){	
	chrome.runtime.sendMessage(count);
	count = 0;
}

function walk(node)
{
	chrome.storage.local.get('filters', function (result){
		filt = result['filters'];
		window.name = filt;
	});	
	var child, next;
	var fil = window.name;
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
	var fil = window.name;
	var v = textNode.textContent;
	if ( v.includes(fil)){
		count++;
	}
}
