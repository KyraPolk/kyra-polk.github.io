// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//first we will want to create a for loop that iterates through numbers from 1 to 100
for (var i = 1; i < 101; i++){
    //we need an if statement for when i is equal to a multiple of 3 only
    if( i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
        //need a statement for when i is equal to a multiple of 5 only
    } else if (i % 5 === 0 && i % 3 !== 0){
        console.log("Buzz");
        //need a statement for when i is a multiple of BOTH 3 and 5
    } else if (i % 15 === 0){
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}