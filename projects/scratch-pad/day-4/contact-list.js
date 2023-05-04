// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var object = {};//declare a new object and add properties
    object.id = id;
    object.nameFirst = nameFirst;
    object.nameLast = nameLast;
    return object;//return object with new key/values
} 


function makeContactList(){
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(makeContact){
            return contacts.push(makeContact);
        },
        findContact: function(fullName){//fullname is a string "firstname lastname"
            //create for loop to loop over array of objects
            for (var i = 0; i < contacts.length; i++){
                //contacts i accesses every object within the array now i need to access the fullName in  object
                //create a conditional statement for if fullname = object.fullname
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                    return contacts[i];
                }
            }
           
        },
        removeContact: function(contact){
            return contacts.splice(contact, 1);
        },
        printAllContactNames: function(){
            //need to loop over the array of contacts to access each object
            var output = [];
            for (var i = 0; i < contacts.length; i++){
                //now we want to print the full names to the console by looping over the firstname and lastnames of each object
                 //contacts[i] is each indidual object
                 output.push(contacts[i].nameFirst + " " + contacts[i].nameLast)
                 //should get an array of names in output array ==> ex: ["betty sue", "jane doe"]
                //loop over the output array of names
                for (let k = 0; k < output; k++){
                    
                }
                 }
            
                 return output.join("\n");
        }
    


     //returns an object



    }
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
