var assert = require ("assert"),
    hundredDoors = require ("./doors-code");
    
//test: do we have a hallway?
assert( hundredDoors.hallway );

//test: do we have doors in our hallway?
assert( hundredDoors.hallway.doors );