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
 
 
//Writing the function
function addition (a, b)
    {   
        return (a + b);
    }
    
 
//Writing the first test
assert.equal(2, addition (1, 1));
//Failed: addition is not defined
 