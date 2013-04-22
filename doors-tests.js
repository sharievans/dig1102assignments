var assert = require ("assert"),
    hundredDoors = require ("./doors-code");
    
//test: do we have a hallway?
assert( hundredDoors.hallway );

//test: do we have doors in our hallway?
assert( hundredDoors.hallway.doors );

//test: do we have 10 doors?
assert.equal( hundredDoors.hallway.doors.length, 10);

//test: are all the doors "closed"?
hundredDoors.hallway.doors.forEach( function( door ) {
    assert.equal( door, 0); 
    });
    
//can we change the state of the doors? (Toggle function)
assert( hundredDoors.hallway.toggle);

//can we make a door open?
assert( hundredDoors.hallway.toggle(0) === 1);

//can we make an open door closed?
assert( hundredDoors.hallway.toggle(1) === 0);