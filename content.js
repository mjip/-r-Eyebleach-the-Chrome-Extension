var count = 0;

walk(document.body);
alert("count equals "+count);

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
		if (count>5){
			var overlaydiv = document.createElement("div");
			overlaydiv.class = "overlay";
			document.getElementByTagName("body")[0].appendChild(overlaydiv);
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("fix.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		}
	}
}