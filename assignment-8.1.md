sharievans/jquery/data.js/61

```javascript
    set: function( owner, data, value ) { // This is a method.
		var prop, cache, unlock; // These are variables

		// There may be an unlock assigned to this node,
		// if there is no entry for this "owner", create one inline
		// and set the unlock as though an owner entry had always existed
        
		unlock = this.locker( owner ); // This is a property
		cache = this.cache[ unlock ]; // This is a property

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// [*] In the case where there was actually no "owner" entry and
			// this.locker( owner ) was called to create one, there will be
			// a corresponding empty plain object in the cache.
			//
			// Note, this will kill the reference between
			// "this.cache[ unlock ]" and "cache"
			if ( jQuery.isEmptyObject( cache ) ) {
				cache = data;
                
			// Otherwise, copy the properties one-by-one to the cache object
            
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}

		// [*] This is required to support an expectation made possible by the old
		// data system where plain objects used to initialize would be
		// set to the cache by reference, instead of having properties and
		// values copied.
		this.cache[ unlock ] = cache;

		return this;
	},
```
