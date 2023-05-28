/**
 * STRING_MANIPULATION
 * 
 * 0.In programming, string manipulation is essential. It allows us to check and update string data.
 * String handling techniques are used to remove, replace, add, and update characters in a piece of text.
 * To do so we use string methods that are pre-programed within languages for string manipulation. There are two ways to
 * access the characters of a string: using operators or string methods.
 * 
 * 1.A string operator is a operator that operates on a string to piece it together. The "+" operator can be
 * used to concatenate a string with another string or character.
 * let concat = "Hello" + " World"//adds the words together
 * if we console.log(concat) "Hello World" would be printed to the console.
 * The shorthand assignment operator "+=" is also used to concatenate strings
 * let concat2 = "Hello" += " World"
 * if we console.log(concat2) "Hello World")
 * One thing to be sure to note is that when concatenating strings, you must add the proper spacing maually
 * 
 * 2.String methods are built in programming actions that perform changes on strings specifically to get the desired result.
 * They are methods to do things like replace all characters in a string or to "slice" words at indexes.
 * let example = "cat".replace("c", "b")
 * if we console.log(example) "bat" would print to the console
 */

//1.String Operator example
//to concatenate strings we use the string operator +
//here is a string
let desires = "To travel to thirty countries"
let goalAge = "by thirty years old"
//we can use a the string operator to combine the strings
let goal = desires + " " + goalAge
console.log(goal)//prints : "To travel to thirty countries by thirty years old"

//2.A list of string methods and what they do:
let string = "Project"
//using the above for examples below
//string.length => returns the length of a string including spaces
string.length// returns 7
//string.slice() => a non-destructive(pure) method that removes items in a string
string.slice(1) // returns "roject"
//string.substring() & string.substr() => extracts parts of a string
//string.replace() => replaces first instance of in a string
string.replace("j", "t")//returns "Protect"
//string.replaceAll() => replaces all instances of in a string
//string.toUpperCase() => sets all characters to uppercase
string.toLowerCase()// returns "project"
//string.toLowercase() => sets all characters to lowercase
string.toUpperCase()//returns "PROJECT"
//string1.concat(string2) => concatenates one string to another
//string.trim() => trims off the extra spaces between the characters and qoutation marks
//string.split() => super important: allows you to split a string into an array
//string.charAt() => accesses a character at the specified index
string.charAt(o)//returns "P"