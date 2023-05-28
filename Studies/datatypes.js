/**
 * DATA-TYPES
 * 0. In programming, data types are essential to know when creating code. There are simple, or primitive datatypes and complex datatypes we 
 * manipulate. Simple/primitive data types include: booleans, numbers , and strings. Data types are important because 
 * they are attributes that are associated with data that tell the computer how to repond to the information given.
 * Knowing your data types can help improve efficiency and performance by helping to create the best plan for execution.
 * You can test which datatype a peice of data is by applying the 'typeof' function to it. A list of datatypes
 * includes: numbers, strings, booleans, arrays, objects, functions, undefined, null, NaN, infinity & -infinity.
 * 
 * 1. How to test which data type is what when programming?
 * Using the type of operator helps to identify what datatype a piece of data is. The typeof operator returns a string indicating the type of the operand's value.
 */

//1. Numbers//
//Plain numbers without commas or strings
//Numbers print to the console in blue
var number = 122;
console.log(number)//will print the number 122 to the console without string encapsulation 

//2. Strings//
//Any data encapsulated in qoutation marks, either single or double. Even numbers in qoutation marks is considered
//a string instead of a number
//Strings print to the console in black as default
var string = "Im tired";
var alsoAString = "25";
console.log(string)//prints "Im tired" to the console in black
console.log(alsoAString)// prints "25" to the console in black

//3. Booleans//
//A boolean represents one of two values: true or false only
//Used often in if statement to evaluste if a piece of information is truthy or falsey
//Boolean values are blue in the console
var isBoolean = true;
if (isBoolean === true){//if the variable isBoolean is absolutly true then log to console true
    console.log(true)
}
    console.log(false)//boolean used in an if statement

//4. Arrays//
//One of the main complex datatypes, it can collect a list of information and other data types stored withing a variable
//Arrays are a special type of object that is a coolection of elements. Each element in the array can be accessed but using the 
//index, or location within the list as a numerical value. Array indexes always start from zero. 
//you assign a variable to an array by using brackets [] to open and close the list.
var countriesIveTraveled = ["Mexico", "France", "Iceland", "Ireland", "Monaco", "Aruba"]
//         INDEXES =>          0         1          2           3         4         5
//you can access any index using bracket notation like the example below
//here im going to assign a variable called myFav to iceland using bracket notation, first you must assign it to the variable you want to refer to which in this case
var myFav = countriesIveTraveled[2]//assigned it to the 2nd index of the variable i wanted to access
console.log(myFav)//logs "Iceland" to the console
//another way to access elements in the array is by looping/iterating through the array
//You can even nest arrays!

//5.Objects//
//Objects are a datatype that is useful for storing and assigning a list of data as properties. Properties
//consist of a key: value pair where the key is assigned to a value. Arrays are also a type of object. Objects are noted by 
//an opening and closing curly braces {}. you can access data within objects by using dot or bracket notation.
//Objects can contain various datatypes all in one.
//Objects can also be nested as well!
var goals2023 ={
june: "Move on to Precourse",//june is the key and the string is the value
july: "Move on to Immersion",//dont forget the comma after each key:value pair
augustBirthday: true,
septemberAge: 26//dont need a comma for the last property in the object
} 
//using bracket notation we use qoutation marks and brackets referencing the object we wish to access
var ageThisYear = goals2023["septemberAge"]//bracket notation
console.log(ageThisYear)//logs 26 to console
var myBday = goals2023.augustBirthday//dot notation
console.log(myBday)//logs true to the console
//to get all values in an object you can use Object.values
//to get all keys in an object you use Object.keys
//you iterate through objects using a for in loop

//6. Functions//
//A function is block of reusable code that performs a task. Functions allow us to manipulate and store data.
//Functions are declared with the keyword 'function' and named relevent to what they do to make code easier to read.
//Functions can take in placeholders called parameters. Parameters can be any data within the parenthesis.
function example(parameter){
    //after declaring the function with parenthesis and the paremeter, you follow it with opening curly braces
    //then input your code folled by a closing curly brace
}
//we invoke the function by calling it with the name of the function, which in this case is example
//next use an opening and closing parenthesis filled with the arguements
//Arguements are the data that we pass into the function via the parameter to run the funtion using hose values.
example(arguement);//calls the function with an arguement passed into the function
//if we wish to print the results of running the function, we simply pass the function call into console.log if the function does not console.log
//the results already
console.log(example(arguement))//logs the results to the console
//Heres a real one for further reference
function complaint(string){
    console.log(string)
}
complaint("It's so much homework these last two weeks. Why? Just Why?")//calls the function with a string as the arguement
//Functions also help us have to write less code.

//7. Undefined//
//Undefined is a datatype thats very useful for when theres an undefined variable in our code. In other words it means that a variable 
//was declared but not given any assignment or value of even not declared at all. Helps make debugging a little easier as well.
//example:
//var //the variable is declared but not assigned so the console will print "name is undefined"
//when var name; is logged to the console
//console.log(name);//return undefined
//be sure to reference data given a value and you wont recieve this in the console.
//we also use undefined to test other data to see if it was given a value
if (name === undefined){
    console.log("assign it something")
}

//8. Null//
//Null is similar to undefined but it indicates the absence of a value for a variable. 
//When a variable is referenced without value we can assign it to null to indicate that it may have value later.
var num = null
//indicates the intentional absence of a value

//9. NaN//
//NaN is the abbreviation for "not a number". It is print to the console when we try and enact specific functions on 
//data that is not a valid number. For example, you cant use Math.abs() on a string. We also use it to test
//if a datatype is a number or not to help debug our code and prevent errors.
if (typeof value === NaN){
    return "false"
}//if the data is not a number its false in this example

//10.Infinity & -Infinity
//Infinity is a property of the global object and is a numeric value representing infinity.
//Negavtive infinity is a numeric value respresenting negative infinity
//these are useful for creating code that references a never ending ascending or descending value
//represented by a capital i infinity or negative infinity. A number reaches Infinity when it exceeds the limit for a number: 1.797693134862315E+308.
console.log(1 / Infinity);//logs 0

//11.What is the difference between simple/primitive and complex datatypes?
//Simple/primitive data types include: booleans, numbers , and strings.
//primitive values are passed into a function by copy
//complex data types include arrays and objects
//complex data types are copied by reference

//12.By Copy
//simple data is referenced by copy
let a = "a"
console.log(a)//logs "a"
//12. By Reference
//complex data
let b = {
    uno: "1",
    dos: "2"
}
console.log(b.uno)//logs "1"