var assert = require("assert"),
hundredDoors = require("./doors-code");

// test: do we have a Hallway?
assert( hundredDoors.hallway );
// test: do we have Doors in our Hallway?
assert( hundredDoors.hallway.doors );
// test: do we have 100 Doors?
assert( hundredDoors.hallway.doors.length, 10 );
// test: are all the Doors "closed"?