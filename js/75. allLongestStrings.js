// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].


function solution(inputArray){
  let longestLength = inputArray[0].length

  for (let i=1; i<inputArray.length; i++){
    if (longestLength < inputArray[i].length){
      longestLength = inputArray[i].length
    }
  }
  inputArray = inputArray.filter(element => {
    return element.length === longestLength
  })
  return inputArray
};

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));
console.log(solution(["abc", "eeee", "abcd", "dcd"]));

/*************************************************/
// solution 2

// function solution(inputArray) {
//   let largestLength = 0

//   for (let i=0; i<inputArray.length; i++){
//     if (inputArray[i].length > largestLength){
//       result = []
//       largestLength = inputArray[i].length
//       result.push(inputArray[i]);
//     }
//     else if (inputArray[i].length === largestLength){
//       result.push(inputArray[i])
//     }
//   }
//   return result
// }

