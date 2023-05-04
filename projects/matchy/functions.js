/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*create a function declaration called `search` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String of a name
*/
function search(array, string){
    //loops thorugh the animals array and return the object if the string(name) exists
    for (let i = 0; i < array.length; i++){
        //if statement for if the index's object's name is the same as the string parameter we will return the entire object
        if (array[i].name === string){
            return array[i];
        } 
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Write a function declaration called `replace` with a signature of `replace(animals, name, replacement)
function replace(animals, name, replacement){
    //loop over the animals array and access each name
    for (let i = 0; i < animals.length; i++){
        //If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
        if (animals[i].name === name){
            return animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare a function declaration called `remove` with a signature of `remove(animals, name)
function remove(animals, name){
    //need to loop over the animals array to access each object individually
    for (let i = 0; i < animals.length; i++){
        //If an animal with that name exists within the `animals` Array, remove it
        if (animals[i].name === name){
            return animals.splice(animals[i],1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function declaration called `add` with a signature of `add(animals, animal)
function add(animals, animal){
    //need to check if the animal Object has a `name` property with a length > 0 && if the animal Object has a `species` property with a length > 0
    //create an if statement to test 
    //loop through animals array
    if(animal.name.length > 0 && animal.species.length > 0){
        for (let i = 0; i < animals.length; i++){
            if (animals[i].name === animal.name){
        return;
    } 
    animals.push(animal);
}
}
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
