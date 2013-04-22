var assert = require ("assert"),
    hundredDoors = require ("./doors-code");
    
//test: do we have a hallway?
assert( hundredDoors.hallway );

//test: do we have doors in our hallway?
assert( hundredDoors.hallway.doors );

//test: do we have 10 doors?
assert.equal( hundredDoors.hallway.doors.length, 10);