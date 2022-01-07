// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

/***************************************************************************** */
// solution 1

function twoSum(numbers, target) {
  for (let i=0; i<numbers.length; i++){
    for (let j=1; j<numbers.length; j++){
      if (numbers[i] + numbers[j] === target){
        return [i, j]
      }
    }
  }
}

/***************************************************************************** */
// solution 2

// const twoSum = (numbers, target) => {
//   for (let i = 0; i < numbers.length - 1; i++)
//       for (let j = i + 1; j < numbers.length; j++)
//           if (numbers[i] + numbers[j] == target) return [i, j]
// }


console.log(twoSum([1,2,3], 4))
// console.log(twoSum([1234,5678,9012], 14690))
// console.log(twoSum([2,2,3], 4))