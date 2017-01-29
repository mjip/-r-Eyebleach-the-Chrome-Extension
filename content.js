var count = 0;
var passes = 0;

walk(document.body);
//alert("count equals "+count+"/n"+"passes equals "+passes);
//alert("type is "+type);

chrome.runtime.sendMessage(count);

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
	if ( v.includes("Trump")){
		count++;
	}
	passes++;

}
