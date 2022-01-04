/*-----------------------------------------------------------------------------
Challenge: 29-addChecker

Difficulty: Intermediate

Prompt:

- Write a function called addChecker that accepts two arguments.
- The first argument is an array containing at least two integers. The integers in the array have been pre-sorted in ascending order.
- The second argument is an integer.
- The addChecker function should return true if there are two integers in the array of integers (first argument) that, when added together, equals the integer passed in as the second argument.
- If there are no two integers in the array with a sum equal to the second argument, addChecker should return false.

Hint:

- An efficient solution can leverage the fact that the integers in the array come sorted for you.

Examples:

addChecker( [1, 2], 3 ) // => true
addChecker( [-3, 2], 9 ) // => false
addChecker( [10, 15, 16, 22], 32 ) // => true
addChecker( [10, 15, 16, 22], 19 ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 29-addChecker here:

/* inefficient solution - does not leverage sorted array */
// function addChecker(nums, total) {
//   var result = false;
//   for (i = 0; i < nums.length - 1; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === total) return true; 
//     }
//   }
//   return result;
// }

/* efficient solution - leveraging the sorted array */
// function addChecker(nums, total) {
//   var result = false;
//   var start = 0
//   var end = nums.length - 1; 
//   while (start < end) {
//     var sum = nums[start] + nums[end];
//     if (sum === total) return true;
//     sum < total ? start++ : end--;
//   }
//   return result;
// }

function addChecker (arr, total){
  let sum = 0
  let addCheck = false
  for (let i=0; i<arr.length; i++){
    for (let j = i+1; j<arr.length;j++){
        if (arr[i]+arr[j]===total){
          return true
        }
    }
  }
  return addCheck
}


console.log(addChecker( [1, 2], 3 )) // => true
console.log(addChecker( [-3, 2], 9 )) // => false
console.log(addChecker( [10, 15, 16, 22], 32 )) // => true