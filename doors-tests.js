var assert = require( "assert" ),
    hundredDoors = require( "./doors-code.js" );
    
//do we have a hallway?
assert( hundredDoors.hallway );

// do we have doors in the hallway?
assert( hundredDoors.hallway.doors );

// do we have 10 doors?
assert.equal( hundredDoors.hallway.doors.length, 10 );

//a re all the doors closed?
hundredDoors.hallway.doors.forEach( function ( door ) {
    assert.equal( door, 0 );
    });
    
// can we change the state of a door(create toggle function)?
assert( hundredDoors.hallway.toggle );

// can we change open to closed?
assert( hundredDoors.hallway.toggle( 0 ) === 1 );

// can we do the opposite?
assert( hundredDoors.hallway.toggle( 1 ) === 0 );

// is there a pass?
assert( hundredDoors.hallway.pass );