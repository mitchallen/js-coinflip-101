// Author: Mitch Allen
// File: test-coinflip.js

import {coinFlip} from './coinflip.js';

// define test function for coinFlip()
function testCoinFlip() {
    // define the number of coin flips to generate
    const LIMIT = 100;

    // create an array filled with coin flip results
    let arr = Array.from({length: LIMIT}, () => coinFlip());

    // log the generated coin flips
    console.log(arr);

    // count the occurences of 1s and 0s
    let occurrences = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

    // log a summary of the occurences
    console.log(occurrences);
}

// call test function for coinFlip()
testCoinFlip();