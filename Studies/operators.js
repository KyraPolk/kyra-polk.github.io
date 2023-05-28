/**
 * OPERATORS
 * 
 * 0. Operators are used for comparing data, assigning, data, arithmetic, and booleans. an operator is a set symbol that
 *  performs operations on values and variables. in javascript, there are dozens of different operators 
 * that we apply to data.
 * 
 * 1.Assignment Operators
 * These operators are used to assign a value to a variable and assigns the value of its right operand to
 *  its left operand.
 * 
 * 2.Arithmetic Operators
 * These operators are used to perform mathmatical applications such as add, subtract, multiply, divide,
 * remainder, exponential math, incrementing, and decrementing.
 * 
 * 3.Comparison Operators
 * These operators compare two values and return a boolean. they also determine the difference between values
 * or variables
 * 
 * 4.Logical Operators
 * These are used in logical statements to compare logical expressions and return a boolean. Used in "if"
 * statements.
 * 
 * 5.Unary Operators
 * A unary operator is an operator with only one operand.
 * 
 * 6.Ternary Operators
 * These are used kinda like if statements. consists of a condition ? if true do this : if false do this 
 */



/*EXAMPLES - all examples of each kind of operator
 * 
 * 1.Assignment operators   
 */
//operator     =  (assigns)
var three = 3 //assigns the variable to a piece of data
let total = 5
//operator    +=  (x + y)
total += 3//adds 3 to total and now total = 8
//operator    -=. (x - y)
total -= 3//subtracts 3 from total so total = 5
//operator   *=   (x * y)
total *= 3//multiples total(5) times 3 so total equals 15
//operator    /=.  (x / y)
total /= 3//divides total(15) by 3 so total is now equal to 5
//operator     %=.   (x % y)
total %= 3//figure the remainder of 5 divided by 3 so the total's remainder is 2
//operator    **=   (x ** y)
three **= 2// three => 3 raised to the 2nd power so the result would equal 9


/**
 * 2.Arithmetic operator
 */
//operator +
console.log(2 + 2) //addition
//operator -
console.log(2 - 1)//subtraction
//operator *
console.log(5 * 5)//multiplication
//operator /
console.log(10 / 2)//division
//operator **
console.log(2 ** 3)//exponential
//operator %
console.log(6 % 2)//remainder
//operator ++
let count = 0
count++//increases count by 1
//operator --
let sum = 3
sum-- //decreases sum by one


/**
 * 3. Comparison operator
 */
//operator == loosely equals
if ("5" == 5){
    return true
}
//operator === absolutely equal to
if (string1 === string2){
    return true
}
//operator != not equal
if (string1 != string2){
    return false
}
//operator !== not absolutely equal to
if ("three" !== 3){
    console.log("not absolutely equal")
}
//operator > greater than
if (3 > 2){
    console.log("high")
}
//operator < less than
if (2 < 3){
    console.log("low")
}
//operator >= greater than or equal to
if (string.length >= 0){
    return []
}
//operator <= less than or equal to
if (x <= 10){
    console.log("less than 11")
}

/**
 * 4.Logical Operator
 */
//operator && and operator - both conditions must be true
if (1 > 0 && 1 < 2){//if both condition are true this code runs
    return true
}
//operator || or operator
if (1 > 0 || 1 > 2){// at least one or the other must be true for this code to run
    console.log("one of these coditions are true")
}
//operator ! the not operator
arr = [ 1, 2, 3]
if (!arr.includes(4)){// putting the ! operator in front of a condition changes its nature to the opoosite condition
    arr.push(4)
}

/**
 * 5.Unary Operators
 */
//we can test and what what kind of data x is by using the typeof operator
let x = "string"
console.log(typeof x)//logs string to the console because the kind of data x point to is a string

/**
 * 6.Ternary Operator
 */
//works similar to an "if" statement and takes in 3 operands
//syntax:
//(condition to test) ? (if true) do this : (if false) do that
let age = 25
let youth = age <= 35 ? "Still young" : "You're youth is fading."
