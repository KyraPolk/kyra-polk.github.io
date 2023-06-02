/**
 * VARIABLES
 * 
 * 0. Variables are like named containers for storing data. They store various datatypes such as strings, numbers, objects,
 *  arrays, and other datat-types that can be referenced later by using the variable name. Variable means anything that can vary which is why 
 * we call them such. Variables can be renamed and reassigned and accessed to change the data within which makes them extremely 
 * important when creating code. Before using a variable it must first be declared, otherwise you may recieve a reference error.  
 * 
 * 1. To create a variable, you must first declare it using var, let, or const
 * depending on how and where you want the data to be accessible, and then you must name it.
 * 
 * 2. There are two phases of using variables: declaration and initialiazation which is where it is assigned.
 * 
 * 3.When code is run variables that are declared using var are always hoisted to the top of your code.
 */

//Declaration//
//In this phase the variable is declared using var and named using camelcase. At this phase the variable is undefined
var myProject;//declared using var
console.log(myProject)//will print undefined although its been declared
let password = "passThisWord";//declared using let... let is also block scoped but allows reaasignment
let input = "passThisWord"
if (password === input){
    let message = "Correct!";
} 
console.log(message)//does not log "Correct!" cant access a variable outside of its scope when declared with let
//const hungry;//declared using const...does not allow reassignment
function birthday(today){
const previousAge = 25;
if (today === "August 4"){
    let newAge = 26
}
}
console.log(previousAge)//an error occurs because outside of the function, previousAge has not been defined
//Initialization//
//In this phase we are assigning our variable to data
var myProject = "Bootcamp"
console.log(myProject)//will print "Bootcamp"

//Re-Asignment//
//Taking a previously assign variable and changing the data it is assigned to
var myProject = "Bootcamp"//where it is declared
var myProject = "to Precourse"
console.log(myProject)//will print "to Precourse" to the console because it was reassigned

//Hoisting//
//Hoisting is the default behavior of moving declarations to the top of the processed code. Functions and variables
//declared with the keyword "var" are hoisted for the computer to evaluate first. 
//because of this, you can access a function at any point including before its actually been declared
console.log(evenOrOdd(19));//calling the function and it will log the result the function declared below
function evenOrOdd(num){
    if (num % 2 === 0){
        return "Even"
    } else {
        return "Odd"
    }
}