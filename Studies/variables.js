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
let happy;//declared using let... let is also block scoped but allows reaasignment
//const hungry;//declared using const...does not allow reassignment
//Initialization//
//In this phase we are assigning our variable to data
var myProject = "Bootcamp"
console.log(myProject)//will print "Bootcamp"

//Re-Asignment//
//Taking a previously assign variable and changing the data it is assigned to
var myProject = "Bootcamp"//where it is declared
var myProject = "to Precourse"
console.log(myProject)//will print "to Precourse" to the console because it was reassigned