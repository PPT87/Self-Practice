// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

let miniMaxSum = (arr) => {
  let maxCount = 0
  let maxSum = 0;
  let minCount = 0
  let minSum = 0

  for (let i=0; i<arr.length; i++){
    minSum += arr[i];
    minCount = minSum - Math.max(...arr);
  }
  for (let i=0; i<arr.length; i++){
    maxSum += arr[i]
    maxCount = maxSum - Math.min(...arr)
  }
  return (
    console.log(minCount || 0, maxCount || 0)
    )
}

console.log(miniMaxSum([7, 69, 2, 221, 8974]))