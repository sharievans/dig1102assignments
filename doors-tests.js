var assert = require( "assert" ),
    hundredDoors = require( "./doors-code.js" );
    
//do we have a hallway?
assert( hundredDoors.hallway );

//Do we have doors in our hallway?
assert( hundredDoors.hallway.doors );