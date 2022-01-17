// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9 

// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3+ 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x


let diagonalDifference = (arr) => {
  let diag1 = 0
  let diag2 = 0
  let arrLength = arr.length - 1

  for (let i=0; i<arr.length; i++){
    diag1 += arr[i][i]
    console.log('diagonal 1',diag1)
    diag2 += arr[i][arrLength]
    arrLength--
    console.log('diagonal 2', diag2)
  }
  return Math.abs(diag1 - diag2)
}


console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8,-12]]))