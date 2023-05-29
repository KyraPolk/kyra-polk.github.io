// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { arrayOrObject } = require("../function-master/function-master");

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(val){
    return val;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if (typeof value !== "object"){
        return typeof value;
    } else if (Array.isArray(value)){
        return "array";
    } else if (value == null){
        return "null";
    } else {
        return "object";
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, num){
    //see if array is an array
    if (Array.isArray(array) !== true || num < 0){
        return [];
    } else if(num === undefined ||  num === NaN){
        return array[0];
    } else if (num >= array.length){
        return array;
    } 
    //create a for loop to iterate over the array parameter
    let output = [];
    for(let i = 0; i < array.length; i++){
        
        if (num < array.length){
            array.length = num;
        }
        output.push(array[i]);
    }  return output;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, num){
    //see if array is an array
    if (Array.isArray(array) !== true || num < 0){
        return [];
    } else if(num === undefined ||  num === NaN){
        return array[array.length - 1];
    } else if (num >= array.length){
        return array;
    } 
    return array.slice(array.length - num);
}



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //loop over the array to make sure the value exists within the array
    //as an edgecase, i cannot use indexof
    
    if(!array.includes(value)){//if array does not have value
        return -1;//return negative 1
    } else {
        function first(val){//need a function to to pass each iteration into to test if each element is equal to value
            return val === value;//if the iteration of the array equals the original input value
        }
        return array.findIndex(first);//return the index of said value
    }//find index is a method that loops over an array and passes into a test function and stops iterating when the first test resolves to true


}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //need to loop over the array

        let answer = array.includes(value) ? true
             : !array.includes(value) ? false 
             : "value is undefined"; 
             return answer;


}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
//determine if collection is an array
if (Array.isArray(collection)){
    //iterate
    for (let i = 0; i < collection.length; i++){
        func(collection[i], i, collection)
    }
} else {//else its an object
    for (let key in collection){
        func(collection[key], key, collection);
    }
}
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    let output = [];//create an out array
    //loop over the array
    for(let i = 0; i < array.length; i++){
    if (_.indexOf(output, array[i]) === -1 ){
        output.push(array[i]);
        
    }
}   return output;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
     //filters array and only returns elements that are true in new array
        //loop over array
        var output = []
        if (Array.isArray(array)){
        for(var i = 0; i < array.length;i++){
            func(array[i], i, array)
            if (func(array[i], i, array) === true){
                output.push(array[i])
                
            }
        }}
    return output
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    let result = []
    //loop over the array
    for(var i = 0; i < array.length;i++){
        func(array[i],i,array)
        if(func(array[i],i,array) === false){
            result.push(array[i])
        }
    }return result
}




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
//declare a variable that takes an empty array
 let output = [[],[]]
 //loop over the array
 for(let i = 0; i < array.length; i++){
    func(array[i], i , array)
    if (func(array[i], i, array) === true){
    output[0].push(array[i])
 } else if (func(array[i], i, array) === false){
    output[1].push(array[i])//pass everything that doesnt pass into output[1]
 }
}return output;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection,func){
    let output = []
    //determine if collection is an array
if (Array.isArray(collection)){
    //iterate
    for (let i = 0; i < collection.length; i++){
       output.push(func(collection[i], i, collection))
    }
} else {//else its an object
    for (let key in collection){
        output.push(func(collection[key], key, collection));
    }
} return output
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop){
    //create an output array to push all values of 'prop'
    //use .map to loop over array of objects
   let output = array.map(item => item[prop])
   
   return output;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    //if func is not provided i need to test if each element is 'truthy'
    if (func === undefined){
        return collection.every(element => Boolean(element))
    }
//need to make sure collection is an array
    if (Array.isArray(collection) === true){//if collect is an array
    //loop over the collection
    //need to to see if collection contains objects
    return collection.every(function(element, index) {
        return func(element, index, collection);
      });
    }
     if (typeof collection === "object" && collection !== null) {
        return Object.values(collection).every(function(value, key) {
          return func(value, Object.keys(collection)[key], collection);
        });
      }
         
return false //any other kind of collection will return false
    }
   



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //need a call function to loop over every element of array
    //if func is not provided i need to test if each element is 'truthy'
    if (func === undefined){
        return collection.every(element => Boolean(element))
    }
      
      // Use Array.every or Object.every based on the type of the collection
      if (Array.isArray(collection)) {
        return collection.some(function(element, index) {
          return func(element, index, collection);
        });
      } else if (typeof collection === "object" && collection !== null) {
        return Object.values(collection).some(function(value, key) {
          return func(value, Object.keys(collection)[key], collection);
        });
        
      }
      return false //for anything else
    }
      
    
 


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    let result;
    //determine if seed recieved a value or not 
    if(seed === undefined){//if no seed value
        result = array[0];
        for(let i = 1; i < array.length; i++){
            result = func(result, array[i], i, array);//reassigning 'result' to result of func invocation
        }
    } else {//else it recieved no value
        result = seed;
        for(let i = 0; i < array.length;i++){
            result = func(result, array[i], i, array);
        }
    }

    return result;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object1, ...objects){
    //need to copy properties from object(s) to target object1
    //can use Object.assign
    let returnedTarget = Object.assign(object1, ...objects);
    return returnedTarget;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
