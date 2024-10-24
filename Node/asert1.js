const assert = require('assert');
let x = 4;
let y = 5;
try {
    assert(x == y);
}
 catch {
    console.log(`${x} is not equal to ${y}`);
}