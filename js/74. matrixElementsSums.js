// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2],
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.

// matrix: [
//   [4, 0, 1],
//   [10, 7, 0],
//   [0, 0, 0],
//   [9, 1, 2],
// ];
// the output should be
// solution(matrix) = 15.

let solution = (matrix) => {
  let sum = 0
  let zeroIndex = []

  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length; j++){
      if(matrix[i][j] === 0){
        zeroIndex.push(j)
      } else if (zeroIndex.indexOf(j) === -1){
        sum += matrix[i][j]
      }
    }
  }
  return sum
};

// console.log(
//   solution([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ])
// );

console.log(
  solution([
    [4, 0, 1],
    [10, 7, 0],
    [0, 0, 0],
    [9, 1, 2],
  ])
);
