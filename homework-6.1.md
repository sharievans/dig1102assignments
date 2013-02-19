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