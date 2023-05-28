/**
 * CONTROL FLOW
 * 
 * 0. Control flow is the order in which a computer executes code. Code is run in order from first line to last line 
 * in order, unless the computer encounters a structure of a function, conditional, or loops. Scripts use a conditional structure 
 * of if, if-else, else statements so that different code executes dependent on wether the code hits a statement that 
 * stops it from running. If the condition is true the computer returns and exits 
 * 
 * 1. If -- a single line of conditional code with one execution option. 
 * 
 * 2. Else if -- creates a conditional chain giving instruction for several conditional outcomes.
 * 
 * 3. Else -- used if none of the previous conditions are true, default to this.
 * 
 * 4. Switch statements -- used to perform different actions based on different conditions kinda like an if else if chain
 */

/**
 * 1. If statements
 */
//specifies a block of code to be executed if a condition is true, nothing else happens if this condition is not true
if ("four".length === 4){ //if this condition is true
    return true//do this
}

/**
 * 2. Else-if
 */
//chain itself to an if statement
//If the first condition is false, another block of code can be executed
let number = 25;
if(number >= 21){
    console.log("Tequila sunrise please")//what to do if first condition is true
} else if (number < 21){//else if the first condition resolves to false
    console.log("sparkling grape juice for you")//do this
}

/**
 * 3. Else
 */
//If all the conditions above resolve to false, another block of code can be executed
//tells code to do when no other condition is true
manDescription = ["intelligent", "funny", "provider", "no kids", "has good morals"];
if (manDescription.includes("married")){
    console.log("find another")
} else if (mandescription.includes("has kids")){
    console.log("don't settle")
} else if (manDescription.includes("has no morals")){
    console.log("that man better love god")
} else if (manDescription.includes("no job")){
    console.log("we don't want no scrub")
} else {//if the above conditions are all false
    console.log("a decent man so far")//this code will execute
}

/**
 * 4. Switch statement
 */
//a different way to create a conditional chain 
let color = "green"
switch (color) {//the parenthesis will be the color we are passing in the the switch statement
    case "blue": "like the ocean"//in the case that the color is blue return the string
    break;//stop
    case "red": "like blood"
    break;
    case "green": "reminds me of grass and money"
    break;
    default: "not the color we are looking for"//will return this string if nothing else is true
}