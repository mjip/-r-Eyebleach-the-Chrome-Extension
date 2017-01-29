walk(document.body);

var count = 0;
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
	chrome.runtime.sendMessage("fhplmfolganpnfgghfmhcjcchacdpldk", {"counter": count});
}

function handleText(textNode) 
{
	switch ( textNode ){
		case "Trump":
			count++;
		case "TRUMP":
			count++;
	}
}
