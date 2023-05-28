////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {//should use recursion
  //base case
  var rangeArr = [];
  //create condition if step should be undefined
  if (start === end){//immediately stop and return an empty array if start and end are the same

    return rangeArr
  }
  if (step === undefined && start < end){//if step is not declared step = 1
    step = 1;
  } else if (step === undefined && end < start){
    step = -1
  }
  var larger = Math.max(start, end);//to return the larger of the two arguements
  var smaller = Math.min(start, end);//to return the lower of the two arguements
  if (step < 0) {
  	for (var i = larger; i >= smaller; i+= step){//if the incrementing is negative loop and push each value to range array
        rangeArr.push(i);
      }
  } else if (step > 0) {
    for (var i = smaller; i <= larger; i+= step){
      rangeArr.push(i);
      
  }
  
}
return rangeArr
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, total=0) {
//base
if (array.length === 0){ //when array is [] return the sum
  return total;
}
total += array[0]
return sum(array.slice(1), total)//slice the array each iteration for a new value of array[0]
//recursion
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array, output=[]) {
//base case
if (array.length === 0){
  return output;
}
//in all other cases array.length is greater than zero so we will need to push array[at last index] to output and then slice the array at end
output.push(array[array.length - 1])
return reverseArray(array.slice(0, -1), output)
}
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array, output=[]) {
  if (array.length === 0){
    return output
  }
  //in all other cases array.length is greater than zero so we will need to push array[at last index] to output and then slice the array at end
  output.push(array.reverse())
  return reverseArrayInPlace(array.slice(0, -1), output)

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
let rest = null;
//create a for loop to iterate backwards throught the input array 
for (let i = array.length - 1; i >= 0; i--){
  rest = { value: array[i], rest: rest };
}
return rest;//each iteration, rest is being assigned to an object with a value prop set equal to array[i]
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) {
//base
if(list.rest === null){//because a list always ends with null
output.push(list.value);
return output
}
//recursion
output.push(list.value)
return listToArray(list.rest, output)

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(list) {
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
//base case
if (number === 0) {
  return list.value;
} else if (list.rest === null) {
  return undefined;
} else {
  return nth(list.rest, number-1);
}
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
//takes in two inputs and see if they are absolutely equal to each other
//determine if x and y are not objects
if (typeof x !== 'object' && typeof y !== 'object'){
return x === y;
}
if (typeof x !== 'object' || typeof y !== 'object'){
  return false;
}
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);

if (xKeys.length !== yKeys.length){
  return false;
}
//create a for loop to iterate through xKeys 
for(let i = 0; i < xKeys.length; i++){
  if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    return false;
  }
}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
