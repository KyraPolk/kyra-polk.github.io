/**
 * LOOPS
 * 
 * 0.Loops are used to execute code a repeated number of times until it hits a condition to stop.
 *  Loops are handy if you want to run the same code over and over again without writhing lines and
 * lines of unnecessary code. There are four types of loops in javascript: for loops, while loops, 
 * do-while loops, and for in loops. Loops are used to iterate over pieces of code wether its an array
 *  or an object. When creating loops we have to be careful that we do not create infinite loops
 *  because those can crash our code and make our computer move extremely slow. 
 * 
 * 1.While loops are used when we dont know the amount of times we need to iterate. the syntax required is a variable declared and set to a starting point, next
 * while(index </> variable set to starting point){increment or decrement}.
 * 
 * 2.For loops are used to iterate over strings and arrays syntax: 
 * keyword for(i = start when i is this; keep iterating until this condition is false, increment or decrement)
 * 
 * 3.For-in loops are used to loop over objects. syntax: keyword for(var key in obj)
 *  
 */

/**
 * 1. While loops
 */
//used for when we dont know how many times to iterate so we just declare a starting point 
let count = 0;//starting
//next we use the while keyword followed by the condition in parenthesis
while (count < 5){//counting iterating until the condition returns false
console.log(count);//logs 0,1,2,3,4 and excludes 5 because count it exits once count is no longer less than 5
count++//increment count by 1 each time 
}
//to loop over backwards we initialize our starting variable 
let count2 = 10;//starting 
while (count2 > 0){//continue while this condition is is true
    console.log(count2)
    count2--
}

/**
 * 2. For Loops
 */
//We use these to loop over strings and arrays
let array = [1, 2, 3];
//we are going to loop forward through the array
//syntax: we begin with the keyword "for" followed by (start; stop; increment){}
//start: when the index is 0
//stop: when the index is less than the arrays length(so if the array length is 5 the final index is 4 in the array
//since i wanna iterate over every single index in this example i will increment by 1 each time)
for (let i = 0; i < array.length; i++){
    console.log(array[i])// will log the values at indexes 0, 1, and 2 to the console
}
//to loop backwards over an array or string, we start at the array or string's final item in the array by initializing 
//the start from the array.length - 1 or whatever part of the array you want and decrement each iteration
//example:
let string = "live"
for (index = string.length - 1; index = 0; index--){
    console.log(string[index])//will log "evil" to the console
}

//3.For in Loops 
//syntax: for (variable in object){
//.          statement
//}
//example:
let obj = {
    country1: "United states",
    country2: "Mexico",
    country3: "Aruba",
    country4: "Puerto Rico"
}
for (var prop in obj){//loops over each set of properties
    console.log(key)//logs the keys
    console.log(obj[key])//logs the values
} 