// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

let sortArray = (array) => {
  let oddNums = array.filter(number => number % 2).sort((a,b) => a-b)
  return result = array.map(number => number % 2 ? oddNums.shift() : number)
}

/***********************************************************/
// solution 2

let sortArray = (array) => {
  let oddNums = []
  for (let i=0; i<array.length; i++){
    if (array[i] % 2 !== 0){
      oddNums.push(array[i])
      oddNums = oddNums.sort((a,b) => a-b)
    }
  }
  for (let i=0; i<array.length; i++){
    if (array[i] % 2 !== 0){
      array[i] = oddNums.shift()
    }
  }
  return array
}

console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));