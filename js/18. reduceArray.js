/*-----------------------------------------------------------------------------
Challenge: 18-reduceArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.

- Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
- The reduceArray function should return whatever is returned by the callback function on the last iteration.
- The reduceArray function should iterate over each element in the array (first arg). For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the current element; and (3) the index of the current iteration.
- On the first iteration, provide the third argument passed to reduceArray as the first argument when invoking the callback. For subsequent iterations, provide the value returned by the callback during the previous iteration.

Examples:

reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n;
}, 0);
//=> 6

reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0);
//=> 9

reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} );
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------------------*/
// Your solution for 18-reduceArray here:

function reduceArray(arr, cb, initAcc) {
  var acc = initAcc;
  arr.forEach(function(el, idx) {
    acc = cb(acc, el, idx);
  });
  return acc;
}


// function reduceArray(acc, n, i){
//   acc.reduce(function(acc, n){
//     console.log(acc+n)
//     return acc + n 
//   }, 0)
// }


// function reduceArray(acc, n, i){
//   acc.reduce(function(acc, n, i){
//     console.log(acc+n+i)
//     return acc + n + i
//   }, 0)
// }

// function reduceArray (arr, callback, acc){
//   arr.reduce(function (acc, v){
//     if(acc[v]){
//       acc[v]++
//     }
//     else{
//       acc[v] =1
//     }
//     console.log(acc)
//     return acc
//   }, {})
// }


// reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
//   acc[v] = acc[v] ? acc[v] + 1 : 1;
//   return acc;
// }, {} );