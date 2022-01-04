/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers

//  PSEUDOCODE
// plain english
// outline for our code
// easily translate into actual code

Difficulty: Basic
// function that accepts two arguments
// function addTwoNumbers (a,b)
// check if either argument is or is not a number
// might want to use an if else statement
// HINT: look into the'OR operator' or 'AND operator'

Prompt:

- Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN

-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers (a,b){
  if (typeof a ==='number' && typeof b ==='number'){
    return a+b
  } else {
    return NaN
  }
} 
