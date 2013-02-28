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
sharievans/jquery/manipulation/569

```javascript
function setGlobalEval( elems, refElements ) {
    var l = elems.length,
		i = 0;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}
// Name: setGlobalEval
// Argument: elems, refElements
// In-scope variables: l = elems.length, i = 0
```

sharievans/jquery/callbacks.js/5

```javascript

function createOptions( options ) {
    var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}
// Name: createOptions
// Argument: options
// In-scope variable:object
// Return: object;
```