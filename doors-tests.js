var assert = require( "assert" ),
    hundredDoors = require( "./doors-code.js" );
    
//do we have a hallway?
assert( hundredDoors.hallway );

//Do we have doors in our hallway?
assert( hundredDoors.hallway.doors );

//Do we have 10 doors?
assert.equal( hundredDoors.hallway.doors.length, 10 );

//are all the doors closed?
