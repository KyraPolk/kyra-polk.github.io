'use strict';

const { last, reject, map, some, reduce } = require("lodash");
const { unique, pluck } = require("../projects/underpants/underpants");

// YOU KNOW WHAT TO DO //
/**
 * 1. identity: The definition of a function. It's a function the essentially does nothing. It
 * simply returns the value it recieves.
 * 
 * @param {value} : the param the function takes in
 * @param {function} action: just returns that same value
 * @param {return} : it returns the input parameter with no changes
 */
_.identity = function(val){
    return val;
};
module.exports._identity = identity;

/**
 * 2. typeof: The type of operator is used on data to determine the kind of data type they are. The
 * typeof operator returns a string indication the type of the operand's value. We use it also to distinguish between
 * arrays and objects, null, and dates.
 * 
 * @param {value} any: This function takes in any sort of data except a function
 * @param {function} action: Determines the datatype of the input value
 * @param {return} : returns a string of the datatype that the input value is
 * Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
 */

_.typeOf = function(value){
    if (typeof value !== "object"){
        return typeof value;//if it does not return "object" just enact the operator on value
    } else if (Array.isArray(value)){//test if the object is an array
        return "array";
    } else if (value == null){//test if the object is null
        return "null";
    } else {
        return "object";
    }
}
module.exports._.typeof = typeof

/**
 * 3. First: This function takes two arguements an array and a number to return the first instance of the number
 * in the array. It returns the first element of an array if the second parameter is undefined. 
 * 
 * @param {array} collection: the function takes in the parameter of an array of numbers 
 * @param {num} : a number to find the first instance of in the array.
 * @param {function} action: It finds the first instance of num in the array of num 
 * @param {return} : it returns the out put array of the first instance of num
 */

_.first = function(array, num){
    //see if array is an array
    if (Array.isArray(array) !== true || num < 0){//if the arguement for array is not an array or the num is not positive
        return [];
    } else if(num === undefined ||  num === NaN){//if num is undefined or the arguement passed for num is not a number
        return array[0];
    } else if (num >= array.length){//if the length is less than the num return the entire array
        return array;
    } //otherwise we can loop over array
    //create a for loop to iterate over the array parameter
    let output = [];
    for(let i = 0; i < array.length; i++){
        if (num < array.length){////if the num is less than the array length
            array.length = num;
        }
        output.push(array[i]);
    }  return output;
}

module.exports._.first = first

/**
 * 4. Last: The function _.last is a function that loops over an array and returns the last occuring instance in the array. 
 * If num is undefined or if num is not a number it returns the final element. 
 * 
 * @param {array} collection: The function takes an array of numbers
 * @param {num} : a number to test in the array
 * @param {function} action:The function loops over the array and tests if the arguements are valid and then finds the last instance 
 * @param {return} :returns the last iteration of num or the last element in the array
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

module.exports._.last = last

/**
 * 5. indexOf: It iterates over the array to determine if a value is in the array, and if it is, it returns the first instance of the values.
 * If it is not within the array, it returns -1. It essentially checks if the array includes the passed in element. and returns its index.
 * 
 * @param {array} collection:a collection as an array 
 * @param {value} :a value that we are looking for in the array
 * @param {function} action: this function returns of index of the value passed in within the array. if the value does
 * not exist within the array, it returns -1
 * @Param {return} : this function returns the index of the value we want to find in the input array
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
module.exports._.indexOf = indexOf

/**
 * 6. Contains: It is a function that essentially does what the .includes() method does. It returns a boolean value
 * based on wether or not a string, or in this case only an array, conatins the value we are hoping for.
 * if it does not contain the value, then the function returns "value is undefined".
 * 
 * @param {array} collection: The parameter is an array of elements
 * @param {value} : the value is the element we are checking to see if in the input array
 * @param {function} action: It loops over an array at each value and exits and returns true if the array contains the value,
 * otherwise if it loops over the array's entirety and the value does not match any iteration, it returns false. If
 * the value of the function is undefined.
 * @param {return} : returns a boolean value of wether the array contains the value
 */

_.contains = function(array, value){
    //need to loop over the array

        let answer = array.includes(value) ? true
             : !array.includes(value) ? false 
             : "value is undefined"; 
             return answer;
}
module.exports._.contains = contains

/**
 * 7. each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. Each does not return anything.
 * 
 * @param {Array or Object} collection: The collection over which to iterate over 
 * @param {function} : and it takes in a function to apply to each iteration
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @param {return} :does not return anything
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * 8. Unique: Essentially deletes/removes duplicate occurances of an array and returns a new array 
 * by pushing only the first instance of each element into the new array. Then returns that new array. Its checks
 * every value in the original array in acsending order.
 * 
 * @param {Array or Object} collection: The collection this function operates on is an array
 * @param {function} action: This function loops over the input array and tests to see if each element in the array
 * is the only one in the original array and if it is, then we push it into its own brand new array of unique items.
 * @param {return} : returns an output array without duplicates
 */

_.unique = function(array){
    let output = [];//create an out array
    //loop over the array
    for(let i = 0; i < array.length; i++){
    if (_.indexOf(output, array[i]) === -1 ){
        output.push(array[i]);
     //need to remove all duplicates from the array   
    }
}   return output;
}
module.exports._.unique = unique

/**
 * 9. Filter: One of the four major array functions that when an array is declared, we automatically have access to. Filter
 * takes an input array, loops over each element in acsending order starting from the zero index. At each element, 
 * it passes it into a function that will return a boolean values of true or false. if true, the element will be pushed
 * into a new array. 
 * 
 * @param {Array or Object} collection: takes in an array 
 * @param {func} : a function to test each iteration with
 * @param {function} action: This function will loop over each element in the array and pass it into the arguement function
 * @param {return} : returns a new array of elements that returned true when passed into the callback function.
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

module.exports._.filter = filter

/**
 * 10. Reject: Similar to filter function but the inverse. This function returns a collection of elements that returned
 * false when passed in to the callback function. Loops over each iteration and if something is false the element is pushed
 * into a new array.
 * 
 * @param {Array or Object} collection: The parameter is an array 
 * @param {func} :a function to pass each iteration into.
 * @param {function} action: The function will apply the input function to each element of the input array and create a new array of the elements that did not pass the function
 * @param {return} : return an array of values that did not pass the callback function.
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
module.exports._.reject = reject

/**
 * 11. Partition: This function returns an array consisting of two subarrays for a collection(array)
 * filled with two different collections(arrays). The first a collection containing all of the elements of the original array 
 * that when passed into the callback function, they returned true. The second, a collection(array) 
 * of all the elements of the original array that when passed into the input callback function, they return false.
 * 
 * @param {Array or Object} collection: The parameter is and array 
 * @param {func} : a function that we passed each iteration into.
 * @param {function} action: The function takes in an array, loops over it and passed the item into the input function
 * and if the callback resolves to true, we push the element into the first sub array, if false we push that element into the second
 * subarray.
 * @param {return}: returns a new array of elements that resolved to true when passed into the input function.
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
    module.exports._.partition = partition

    /**
     * 12. Map: A function, in fact one of the main four functions we have instant access to when we dlare an array. 
     * This map function iterates over the input array beginning from the zero index and passing each iteration into the input function. The
     * function then returns the result and passes the result into a brand new output array. The output array that is returned from the function will
     * consist of the results of calling the input function on each element in the original array. Should return an array with the same length as the input array.
     * each element in the new array will be a modified version of the original array[i].
     * 
     * @param {Array or Object} collection: The parameter is a an input array OR an input object 
     * @param{func} :input function we enact on each element.
     * @param {function} action: this function takes an input array or object and loops over it passing each iteration into a callback function
     * @param {return} :This function returns a modified version of the input array as a new array.
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
    module.exports._.map = map

    /**
     * 13. Pluck: This function can loop over an array of objects and access the input property pushin
     *  it into the new array of objects or altering a property in an object. takes the element from the
     *  list one by one and starts extracting the given property's detail in ascending order
     * starting from the first element.
     * 
     * @param {Array or Object} collection: The parameters are an array(as an array of objects) 
     *  @param {prop} :the property we wish to access and change in each iteration
     * @param {function} action: We are using this function to loop over the array of objects and access
     *  a property in an object.
     * @param {return} :returns a new array filled with each objects' property in the array of objects
     */

    _.pluck = function(array, prop){
        //create an output array to push all values of 'prop'
        //use .map to loop over array of objects
       let output = array.map(item => item[prop])
       
       return output;
    }
    module.exports._.pluck = pluck

    /**
     * 14. Every: The every function tests whether every last element in the array passes the test implemented
     *  by the provided input function. It returns a Boolean value. Only if every element passes the test,
     *  will the function resolve to true.
     * 
     * @param {Array or Object} collection: The parameters are a collection, really an array
     *  @param {func} :a function that we pass each iteration into.
     * @param {function} action: It loops over the input array and pass in every element
     *  into a function that resolves a boolean value. 
     * @param {return} :If all the elements passed in resolve
     *  to true, the function will return true. else it will return false.
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
        module.exports._.every = every

        /**
         * 15. Some: A function that test if any, at least one of, the elements in an array pass the function as true.
         * This a boolean based callback function that each element is passed in as an arguement. If at least one of the i
         * terations pass the funtion will return true.
         * 
         * @param {Array or Object} collection: The parameter is an array and 
         * @param {func} :a function that tests each element in the input array
         * @param {function} action: This function loops over the input and applies the fuction to each iteration
         * @param {return} :if any of the iterations that are passed in to the function
         * return true, then the function return true. 
         */

        _.some = function(collection, func){
            //need a call function to loop over every element of array
            //if func is not provided i need to test if each element is 'truthy'
            if (func === undefined){
                return collection.every(element => Boolean(element))
            }
              
              // Use Array.every or Object.values based on the type of the collection
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
            module.exports._.some = some

            /**
             * 16. Reduce: The reduce function iterates over an array. Reduce can return any value. It runs a callback
             * function over each and every element in an array in ascending order. The result of running this function
             * is a single value. When it iterates at each step, it adds the current array value to the result
             *  from the previous iteration. If no seed value is given the function will begin from array[0].
             * 
             * @param {Array or Object} collection: the array the function is looping over.
             * @param {seed}:the type of data that we need to return and the initial value of the accumulator/result
             * @param {func}:the function that we pass the current iteration into
             * @param {function} action: This function passes a function to each current iteration and accumulates the the results into the 
             * data type it returns, we can determine the data it returns by assigning the seed value to an array[], obj{}, or a  string"".
             * @param {return}: returns the total accumulatuon of each iteration as the data initialized by the seed value
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
            module.exports._.reduce = reduce

            /**
             * 17. Extend: This function takes a target object and adds/replaces properties within the original target object. It's
             * a non-destructive function that takes the properties of one or more other objects and adds them to the target without mutations.
             * Returns the changed target object.
             * 
             * @param {Array or Object} collection:The parameters are first the target object we are adding everything to and the
             * @param {object(s)} :second parameter(s) are the objects with the properties we essentially aim to "push" those properties into
             * @param {function} action: The function copies all various properties from one or more source objects to a target object.
             * @param {return}: returns the target object containing everything from the other objects conbined 
             */

            _.extend = function(object1, ...objects){
                //need to copy properties from object(s) to target object1
                //can use Object.assign
                let returnedTarget = Object.assign(object1, ...objects);
                return returnedTarget;
            }
            module.exports._.extend = extend