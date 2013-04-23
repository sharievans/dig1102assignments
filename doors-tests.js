var assert = require( "assert" ),
    hundredDoors = require( "./doors-code.js" );
    
//do we have a hallway?
assert( hundredDoors.hallway );

//do we have doors in the hallway?
assert( hundredDoors.hallway.doors );

//do we have 10 doors?
assert.equal( hundredDoors.hallway.doors.length, 10 );

//are all the doors closed?
hundredDoors.hallway.doors.forEach( function (door) {
    assert.equal( door, 0 );
});

//can we change the state of a door(create toggle function)?
assert( hundredDoors.hallway.toggle );

// can we change closed to open?
// can we change open to closed?