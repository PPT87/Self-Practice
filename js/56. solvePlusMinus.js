// HACKERRANK - Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667

/************************************************************/
// solution does not meet all requirements???

// let plusMinus = (arr) => {
//   let positiveNums = 0
//   let negativeNums = 0
//   let zeroNums = 0
//   let arrLength = arr.length
//   let results = {}
//   let positiveFraction = null
//   let negativeFraction = null
//   let zeroFraction = null
//   for (let i=0; i<arrLength; i++){
//     if (results[arr[i]]){
//       results[arr[i]]++
//     } else {
//       results[arr[i]] = 1
//     }
//   }
//   for (let i in results){
//     let counts = parseInt(i)
//     if (counts > 0){
//       positiveNums++
//       positiveFraction = ((positiveNums/arrLength).toFixed(6))
//     } else if (counts < 0){
//       negativeNums++
//       negativeFraction = ((negativeNums/arrLength).toFixed(6))
//     } else if (counts === 0) {
//       zeroNums++
//       zeroFraction = ((zeroNums/arrLength).toFixed(6))
//     }
//   }
//     return (
//       console.log(positiveFraction),
//       console.log(negativeFraction),
//       console.log(zeroFraction)
//     )
// }


/***************************************************************/
// working solution
function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  let len = arr.length;
  arr.forEach((num) => {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });
  return(
    console.log((positiveCount/len).toFixed(6)),
    console.log((negativeCount/len).toFixed(6)),
    console.log((zeroCount/len).toFixed(6))
  )
}
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]));