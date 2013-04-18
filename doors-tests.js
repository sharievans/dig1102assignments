var assert = require("assert"),
hundredDoors = require("./doors-code");

// test: do we have a Hallway?
assert( hundredDoors.hallway );

// test: do we have Doors in our Hallway?
assert( hundredDoors.hallway.doors );

// test: do we have 100 Doors?
assert.equal( hundredDoors.hallway.doors.length, 10 );

// test: are all the Doors "closed"?
hundredDoors.hallway.doors.forEach( function( door ) {
    assert.equal( door, 0 );
});

// do: PASS 1 -- take a walk down the hallway, change the state of the doors
assert( hundredDoors.hallway.toggle );