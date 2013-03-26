var assert = require("assert");

//assert(1 + 1 == 1, '1 + 1 does not equal 1');
//assert.equal(1, 1 + 1, '1 + 1 does not equal 1');

/**
 * four functions with two parameters:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * 
 * Must accept positive and negative Numbers (int or 
 * float) AND zero. Must not make an error!
 */
 
/**
 * testing 
 * one | two 
 * ====+=====
 *  +1 | +1  
 *  +1 | +0  
 *  +1 | -1 
 *  -1 | +1 
 *  -1 | +0 
 *  -1 | -1 
 *  +0 | +1
 *  +0 | +0
 *  +0 | -1
 */
 
 function addition (a,b) {
     return (a + b);
 }
 
  function testAddition (a, b, c, message) {
     assert( addition( a,b )==c, message);
 }
 
 
assert( addition( 1,1) == 2, '1 + 1 = 2');
 

testAddition( 1, 1, 2, '1 + 1 = 2');
testAddition( 1, 0, 1, '1 + 0 = 1');
testAddition( 1, -1, 0, '1 + (-1) = 0');
testAddition( -1, 1, 0, '-1 + 1 = 0');
testAddition( -1, 0, -1, '-1 + 0 = -1');
testAddition( -1, -1, -2, '-1 + (-1) = -2');
testAddition( 0, 1, 1, '0 + 1 = 1');
testAddition( 0, 0, 0, '0 + 0 = 0');
testAddition(0, -1, -1, '0 + (-1) = -1');

