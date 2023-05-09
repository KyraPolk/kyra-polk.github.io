//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];//declare an empty array
    for (var key in object){//loop over the object keys
    if (typeof object[key] === "string") {//if statement to exclude other data types
        array.push(object[key]);//push all strings into array
    }
    }
    return array.join(' ');//return array joined into a string
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (typeof collection !== "object"){//first weed out anything that does not evaluate to an object
        return "Neither"
    } else if (collection instanceof Date){//if a date, neither
        return "Neither"
    } else if (Array.isArray(collection) === true){//test if an array
        return "array"
    } else {
        return "object"//object as a collection
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //access the first character of each word and capitalize it
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //first i need to split the string of words into an array
    let words = string.split(' ');
  
    // capitalize the first letter of each word and join them back into a string
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // join the capitalized words into a single string and return it
    return capitalizedWords.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//object should be an object with a name property
//need to check if the object has a name property with hasOwnProperty
if (object.hasOwnProperty('name') === true){
    object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
    return "Welcome" + " " + object.name + "!";
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//This function should take an object with properties of BOTH name and species
//The values' first index should be capitalized
if (object.hasOwnProperty('name') === true && object.hasOwnProperty('species') === true){
    object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    object. species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    return object.name + " " + "is a" + " " + object.species;
}
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //Need to check if the object has a 'noises' property
    //need to make sure that property is an array
    if (object.hasOwnProperty('noises') === true && object.noises.length > 0){
        return object.noises.join(' ');
    } else {
        return "there are no noises";
    } 
    
    //Need to return the object.noises as a string
    //if there is no noises property or if noises is an empty array, return 'there are no noises'

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//string is a string of words and word is the test we are checking for in the string
//need to loop over the string to access each word by splitting the string into an array
var stringle = string.split();
for (let i = 0; i < stringle.length; i++){
//if "word" is in "string" return true
if (stringle[i].includes(word) === true){
    return true;
}
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//function should add a name to the object's friends array if it has the property
//first we need to test if the object has the property friends
if (object.hasOwnProperty('friends') === true && Array.isArray(object.friends) === true){
    object.friends.push(name);
} //return the object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//Should take a name and object and return "true" if 'name' is in friends array 'false' otherwise
//need to check if the object has friends as a property and that property is an array
if (object.hasOwnProperty('friends') === true && Array.isArray(object.friends) === true){
    if(object.friends.includes(name) === true){
        return true;
    }
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//should take a name and an array(as a list of people)
//this function should return a list of all the names that 'name' is NOT friends with
//imagine that the array is an array of objects containing names and friend properties
//first i need to loop over the array of objects to access each object individually
//declare an empty array
var enemies = [];
var allObjectNames = [];
for (let i = 0; i < array.length; i++){
    allObjectNames.push(array[i].names);//("Jimmy","Bob","Liza", "Sara")
    //loop over the allObjectNames
    for (let j = 0; j < allObjectNames.length; j++){
        //access friends arrays
    }
}

return enemies;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//should take in an object, key, and value to update the given object.
//if the property already exists, then reassign the value 
if (object.hasOwnProperty(key) === true){
     object[key] = value;
}
object[key] = value;
return object;
//if the property does not exist, add the property to the object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//should take in an object and an array of strings
//should remove(delete) any properties that are listed in the string ex: ["a: 1"] <= it would delete this property
//im gonna need to loop over the array of strings to get each element 
for (let i = 0; i < array.length; i++){
    //need to create an if statement for if object hasOwnProperty of array[i], delete array[i]
    let prop = array[i];
    //if the object hasOwnProperty(prop) === true, then delete that property
    if (object.hasOwnProperty(prop) === true){
        delete object[prop];
    }
}
return object;//return the updated object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//should take an input array and output an array with all the duplicates deleted
//can use .filter method with .indexof

    let newArray = array.filter(function(value, index, array){
        return array.indexOf(value) === index;
});
    

return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}