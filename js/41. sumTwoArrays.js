// ons
// Output
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

/****************************************** */
// solution 1

// function arrayPlusArray(arr1, arr2){
//   let sumArr1 = arr1.reduce(function (prev, curr){
//     return prev + curr
//   }, 0)
//   let total = arr2.reduce(function(prev, curr){
//     return prev + curr
//   }, sumArr1)
//   return total
// }

/******************************************** */
// solution 2

// function arrayPlusArray(arr1, arr2) {
//   let arr = [...arr1, ...arr2];
//   return arr.reduce((a, b) => a + b);
// }


/******************************************** */
// solution 3

function arrayPlusArray(arr1, arr2) {
  total = 0
  for (let i=0; i<arr1.length; i++)
    total += arr1[i]
  for (let i=0; i<arr2.length; i++)
    total += arr2[i]
  return total
}



console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))