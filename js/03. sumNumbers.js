/*-----------------------------------------------------------------------------
Challenge: 03-sumNumbers

Difficulty: Basic

Prompt:

- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).

Examples:

sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

sumNumbers([1,2,3,4,5])
function sumNumbers (num){
  let sum = 0
  for (i=0; i<num.length; i++){
    sum += num[i]
  }
} 