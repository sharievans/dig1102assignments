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
 
function addition( a, b ) {
    return( a + b );
}

 
assert( addition( 1, 1 ) === 2, '1 + 1 = 2');
assert( addition( 1, 0 ) === 1, '1 + 0 = 1');


function testAddition( a, b, c, message) {
    assert( addition( a, b ) === c, message);
}

testAddition( 1, 1, 2, '1 + 1 = 2');
testAddition( 1, -1, 0, '1 + (-1) = 0');
testAddition( -1, 1, 0, '-1 + 1 = 0');
testAddition( -1, 0, -1, '-1 + 0 = -1');
testAddition( -1, -1, -2, '-1 + (-1) = -2');
testAddition( 0, 1, 1, '0 + 1 = 1');
testAddition( 0, 0, 0, '0 + 0 = 0');
testAddition( 0, -1, -1, '0 + (-1) = -1');


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
 
function division( a, b ) {
    if ( a !== 0 )
    return( a / b );
    
    else 
    return( 'You cannot divide 0');
}

assert( division( 1, 1 ) === 1, '1 / 1 = 1');
assert( division( 1, 0 ) === Infinity, '1 / 0 = Infinity');


function testDivision( a, b, c, message ) {
    assert( division( a, b) === c, message );
}


testDivision( 1, 1, 1, '1 / 1 = 1');
testDivision( 1, -1, -1, '1 / -1 = -1');
testDivision( -1, 1, -1, '-1 / 1 = -1');
testDivision( -1, 0, -Infinity, '-1 / 0 = -Infinity');
testDivision( -1, -1, 1, '-1 / -1 = -Infinity');
testDivision( 0, 1, 'You cannot divide 0', '0 / 1 = You cannot divide 0');


