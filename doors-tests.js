var assert = require( "assert" ),
    hundredDoors = require( "./doors-code.js" );
    
//do we have a hallway?
assert( hundredDoors.hallway );

////do we have doors in the hallway?
assert( hundredDoors.hallway.doors );

//do we have 10 doors?
assert.equal( hundredDoors.hallway.doors.length, 10 );