/*-----------------------------------------------------------------------------
Challenge: 22-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments, which are both arrays. The array arguments may contain any mixture of strings, numbers, or booleans - but no reference types (objects).
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common, the intersection function should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------------------*/
// Your solution for 22-intersection here:

// function intersection(a1, a2) {
//   var result = [];
  // create copy of 2nd array for purpose of handling dups
//   var _a2 = [...a2];
//   a1.forEach(val => {
//     var idx = _a2.indexOf(val);
//     if (idx > -1) result.push(_a2.splice(idx, 1)[0]);
//   });
//   return result;
// }

function intersection(arr1, arr2){
  if (arr1>arr2){
    return arr1.filter(elem => arr2.includes(elem))
  } else if (arr2>arr1){
    return arr2.filter(elem => arr1.includes(elem))
    }
  }

  console.log(intersection(['a', 1], [])) //=> []
  console.log(intersection(['a', 1], [true, 'a', 15])) //=> ['a']
  console.log(intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1])) //=> [1, true, 1]