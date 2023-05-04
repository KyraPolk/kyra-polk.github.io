// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //create a function that returns a function
    return function test(value){
        if (value > base){
            return true;
        } else if (value < base){
            return false;
        }
           
        
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
   //create a return statement that is a function that takes in the parameter "value" 
    return function(value){
        //create an if statement to test if the value is less than base
        if (value < base){
            return true;
        } else if (value > base){
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //need to create a function that takes the string as a parameter
    return function (string){
        //create an if statement
        if (startsWith.toLowerCase() === string[0].toLowerCase()){
            return true;
        } else if (startsWith.toLowerCase() !== string[0].toLowerCase()){
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //create a return statement thats a function with the parameter of "string"
    return function(string){
        //create an if statement to test the last value of the string to make sure it is equal
        if (string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){
            return true;
        } else if (string[string.length - 1].toLowerCase() !== endsWith.toLowerCase()){
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //modify is a function that will return modified version of strings
    
        var arg = [];
        //create a for loop to loop over the array of stringsthe strings parameter
        for (var i = 0; i < strings.length; i++){
            arg.push(modify(strings[i]));
        }
        return arg;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //test is a function designed to test each item in the array
    
    //need a for loop to loop over the array of strings
    for (var i = 0; i < strings.length; i++){
        if (test(strings[i]) !== true){
            return false;
        }  
       
    }
    return true;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
