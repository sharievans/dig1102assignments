sharievans/jquery/src/ajax.js/482

```javascript	
        
        if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}
```
Guard clause: 
Default Statement: no content
If the statement is false..
    If there is data?
    If the statement is true, run ajax test.
    
    Is s.cache === false?
    If that is true, run rts.test(cacheURL)
    
    
    
    
sharievans/jquery/src/ajax.js/542
```javascript
    	if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}
```
 
Default statement: There is no tranport.
If this is true ( -1, "No Transport")
If this is false: jqXHR.readyState = 1;

if ( fireGlobals ) {
If this statement is true, then globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
If its false, "timeout".



    

