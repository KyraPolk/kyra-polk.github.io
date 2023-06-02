/**
 * FUNCTIONS
 * 
 * 0. A function is block of reusable code that performs a task. Functions allow
 * us to manipulate and store data.Functions are declared with the keyword 'function' 
 * and named relevent to what they do to make code easier to read.Functions can take 
 * in placeholders called parameters. Parameters can be any data within the parenthesis.
 * 
 * 1. The two phases of using function: Creation phase and Execution phase. First we must create the function and declare it using the keyword function.
 * Next we can execute or call the function by using the function name with parenthesis wrapped around the arguement, or the data being passed into the function
 * 
 * 2. The difference between a parameter and an arguement is that a parameter is a placeholder for the value that will be passed in to the function whereas
 * the arguement is the actual variable or data we are calling the function with to test.
 * 
 * 3. The syntax for a named function is:
 * function name(){}
 * 
 * 4. We assign a function to a variable by declaring the variable with let, const, or var followed by a name for the function,
 * and then assign it to the keyword function()
 * var functionName = function(){}
 * 
 * 5.Functions can optionally take inputs and optionally return a single value.We make parameters optional in JavaScript by
 *  not passing in an argument to the function call. We specify inputs by placing parameters
 * within the parenthesis. We can even plug in the kind of data we want to return. We use return statements to specify output.
 *
 * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is not true because we cannot access data
 * before its declared. A scope allows you to limit access to certain variables to specific areas based on the context its used. This
 *  context determines where you can and can't access certain variables and functions. Scopes usually can be identified by the brackets that enclose the data 
 * being declared.
 * 
 * 7. Closures: Functions form closures around the data they contain. If the object returned from the function and is held in memory somewhere (referenced), that
 * closure stays alive, and data can continue to exist in these closures. A closure is a function enclosed with
 * refernces to the variables in its outer scope.
 */

//1. Creation phase
//creating the function execution content
function example(parameter){//declaring the function
return parameter//execution content
}
//.  Execution phase
//calling the function with arguements
example("example")//calling the function using the function name filled with the datta we apply the function to

//2. Difference between parameter and arguement 
function add(parameter1, parameter2){// <= placeholders for the passed in variables used in function creation
return parameter1 + parameter2;
}
//arguements are used for function exucution
console.log(add(2, 4));// logs 6 to the console

//3.The syntax for a named function:
//keyword then function name followed by regular function syntax
function name(param){
    return param + "changes"
}

//4. How to assign a function to a variable
//declare the variable first and then assign it to a function
var assignedFunc = function(){
}

//5. Functions that optionally take in parameters and optionally return single values
//example:
function again(){//param optional
    //optional
}

//6. Scopes
//limits access to certain variables to certain areas
//for instance if statements are block scoped
//These two keywords provide Block Scope in JavaScript: let and const
// code here can NOT use testVar

function exampleFunc() {
    let testVar = "block scoped";//this variable is function/local scoped
    // code here CAN use testVar
  }
  console.log(testVar)//it does not log anything to the console. In fact you'll get an error that it is not defined
  // code here can NOT use testVar

  //another example of scope showing that functions can access variables from a parent scope
  function add1(){
    let num = 1
     function increment(){
      return console.log(num++)
    }
    increment()
  }
  add1()//logs 1 to the console and everytime increment is invoked, it remembers the old value of num and adds 1
  //7. Closures
  //a function enclosed with refernces to the variables in its outer scope.
  function addThem(x) {
    return function (y) {
      return x + y;//referencing x outside this inner function
    };
  }
