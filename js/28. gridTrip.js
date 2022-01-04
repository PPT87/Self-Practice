/*-----------------------------------------------------------------------------
Challenge: 28-gridTrip

Difficulty: Intermediate

Prompt:

- This challenge uses an imaginary grid where the y coordinate increases when you move up and decreases when you move down. Similarly, the x coordinate increases when you move right and decreases when you move left.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers. The value in the first index of the array represents the starting x position on the grid. The second value in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to mean moving Up, Down, Right & Left, respectively. Each direction character is followed by digits representing how many units to move in that direction. For example, a string of 'D15R2U4' moves up 15 units, right 2 units, and finally, down 4 units from the starting coordinates.
- The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x position and the final y position. Do not modify the array argument).

Hint:
- Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction. Be sure to use the global flag, e.g. /cat/g, when defining the regexp.

Examples:

gridTrip( [0, 0], 'U2R1' ) // => [1, 2]
gridTrip( [10, 5], 'D5L15U2' ) //-> [-5, 2]
gridTrip( [100, -22], 'L2L15D50U1D9') //=> [83, -80]
-----------------------------------------------------------------------------*/
// Your solution for 28-gridTrip here:

/*--- Process one character at a time ---*/
function gridTrip(xyArr, moves) {
  // create result array with starting positions
  var result = [xyArr[0], xyArr[1]];
  // lookup object for result arr index and multiplier for each dir char
  const lookup = {'R': [0, 1], 'U': [1, 1], 'L': [0, -1], 'D': [1, -1]};
  var idx = 0;
  while (idx < moves.length) {
    // first char of the move string is the direction to be used to access the lookup object
    var dir = moves[idx];
    idx++;
    var numString = '';
    while ('0123456789'.includes(moves[idx]) && idx < moves.length) {
      numString += moves[idx];
      idx++;
    }
    result[lookup[dir][0]] += numString * lookup[dir][1];
  }
  return result;
}

/*--- Using regular expressions to break up the moves into an array ---*/
// function gridTrip(xyArr, moves) {
//   var result = [xyArr[0], xyArr[1]];
//   const lookup = {'R': [0, 1], 'U': [1, 1], 'L': [0, -1], 'D': [1, -1]}; 
//   regular expressions are fantastic - be sure to use the 'global' flag with the match method
//   moves = moves.match(/[UDLR]\d+/g);
//   moves.forEach(function(move) {
//     var dir = move.charAt(0);
//     result[lookup[dir][0]] += move.substr(1) * lookup[dir][1];
//   });
//   return result;
// }


console.log(gridTrip( [0, 0], 'U2R1' )) // => [1, 2]
console.log(gridTrip( [10, 5], 'D5L15U2' )) //-> [-5, 2]
console.log(gridTrip( [100, -22], 'L2L15D50U1D9')) //=> [83, -80]