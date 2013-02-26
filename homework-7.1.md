sharievans/jquery/manipulation/546

```javascript

function findOrAppend( elem, tag ) {
    return elem.getElementsByTagName( tag )[ 0 ] || elem.appendChild( elem.ownerDocument.createElement(tag) );
// Name: findOrAppend
// Arguments: elem, tag
// Return: return elem.getElementsByTagName( tag )[ 0 ] || elem.appendChild( elem.ownerDocument.createElement(tag) );   
```
sharievans/jquery/manipulation/551

```javascript

function disableScript( elem ) {
    var attr = elem.getAttributeNode("type");
	elem.type = ( attr && attr.specified ) + "/" + elem.type;
	return elem;
}
// Name: disableScript
// Argument: elem
// In scope variable: attr
// Return: elem;
```

sharievans/jquery/manipulation/556

```javascript

function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}
// Name: restoreScript
// Argument: elem
// In-scope variable: match
// Return: elem;
```