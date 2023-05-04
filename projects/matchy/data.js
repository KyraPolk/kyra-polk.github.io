/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Elephant';
animal['name'] = 'Dumbo';
animal.noises = [];
//print the object to the console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `noises` and assign it to an empty array
var noises = [];
//give `noises` it's first element using bracket notation
noises[0] = 'grunt';
//Using an array function add another noise to the end of `noises`
noises.push('trumpet');
//Add an element to `noises` using this function
noises.unshift('snort');
//add another element to the end of `noises` using bracket syntax
noises[noises.length] = 'cry';
//`console.log` the length of `noises`
console.log(noises.length);
//`console.log` the last element in `noises` again without hard coding the index
console.log(noises.length - 1);
//`console.log` the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign the `noises` property on `animal` to our new `noises` array using bracket notation
animal['noises'] = noises;
//Using any syntax add another noise to the `noises` property on `animal`
animal.noises.push('chewing');
//console.log animal object
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array
var animals = [];
//`push` our `animal` that we created to `animals`
animals.push(animal);
//console.log animals
console.log(animals);
//Create a variable called `duck` and assign it to species: 'duck', name: 'Jerome', noises: 'quack', 'honk', 'sneeze', 'woosh'
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
//`push` `duck` to `animals`
animals.push(duck);
//console.log animals
console.log(animals);
//Create two more animal objects each with a species, a name, and at least two sounds and add each one of them to `animals
var dog = {
  species: 'canine',
  name: 'Blazer',
  noises: ['howl', 'bark', 'growl', 'whimper']
};
var bird = {
  species: 'avian',
  name: 'Rio',
  noises: ['squawk', 'hello world',]

};
animals.push(dog);
animals.push(bird);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Arrays are a complex data type that is good for holding various different types of data in an organized list that is easy to loop over and access by index
var friends = [];
//Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input
function getRandom(animals){
  //get a random animal and add its `name` to `friends`
   return Math.floor(Math.random() * animals.length);
}
friends.push(animals[getRandom(animals)].name);
// console.log friends
console.log(friends);
// adding friends to dog & bird objects
dog['friends'] = friends;
bird['friends'] = friends;
//console.log your work
console.log(animals);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}