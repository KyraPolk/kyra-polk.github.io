
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(input) {
//need to create a for loop to loop each iteration
//should loop each level of triangle separately
//should work on any input number
for (let triangle = "#"; triangle.length <= input; triangle += "#"){
console.log(triangle);//start:"#"; keep iterating as long as the length is less than or equal to input.
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //loop over the numbers 1-15
  for(let i = 1; i <= 15; i++){
    if (i % 15 === 0){
      console.log("fizzbuzz")
    } else if (i % 3 === 0){
      console.log("fizz");
    } else if (i % 5 === 0){
      console.log("buzz")
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
//should create a chess board with hashtags and spaces as a string in the console
//declare board as an empty array(we'll use .join later)
let board = [];
//create a nested for loop to push the values into later

for (let i = 0; i < size; i++){
  let row = "";
  for (let j = 0; j < size; j++){
    //create an if statement for if i + j is even or odd
    if ((i + j) % 2 === 0){
      row += " ";
    } else {
      row += "#";
    }
  }
  board.push(row);
}
console.log(board.join("\n") + "\n")//join the array into a string with line breaks
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
