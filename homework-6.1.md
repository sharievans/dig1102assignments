sharievans/jquery/ajax.js/74

```javascript
    	if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) 
            {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} 
                
                else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}


// while ( (dataType = dataTypes[i++]) ) {
// while dataType is equal to dataTypes (incrementing numbers)
//
```

sharievans/jquery/attributes.js/84
```javascript
    	if ( proceed ) 
        {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) 
            {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) 
                {
					j = 0;
					while ( (clazz = classes[j++]) ) 
                    {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) 
                        {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}
        
// while ( (clazz = classes[j++]) ) {
// while clazz is equal to classes[incrmenting numbers starting from 0]

// while ( cur.indexOf( " " + clazz + " " ) >= 0 ) 
// while indexOf (Empty Strong plus clazz plus clazz) is greator than or equal to 0
//cur

```
sharievans/jquery/manipulation.js/454

```javascript
  {
    				tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					
                    while ( j-- ) 
                    {
						tmp = tmp.firstChild;
					}

					// Support: QtWebKit
					// jQuery.merge because core_push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
                
// while ( j-- ) 
// while incrementing j-1 numbers
                
```