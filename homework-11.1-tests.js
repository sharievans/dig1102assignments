var assert = require('assert'),
    calculator = require('./homework-11.1-code.js');
    
    /**
 * Tests for division...
 * +1 | +1 | +1
 * +1 | +0 | +0
 * +1 | -1 | -1
 * -1 | +1 | -1
 * -1 | +0 | +0
 * -1 | -1 | +1
 * +0 | +1 | +0
 * +0 | +0 | +0
 * +0 | -1 | +0
 */
 
assert( calculator.division( 1, 1 ) === 1);
assert( calculator.division( 1, 0 ) === 0);