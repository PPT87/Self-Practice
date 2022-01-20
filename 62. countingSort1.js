// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// Example

// arr = [1,1,3,2,1]

// All of the values are in the range [0...3], so create an array of zeros, result = [0,0,0,0]. The results of each iteration follow:

// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]


let countingSort = (arr) => {
  let countsArr = []
  for (let i=0; i<arr.length; i++){
    countsArr[arr[i]] = 0
    // console.log(countsArr[i])  
  }
  for (let i=0; i<arr.length; i++){
    let nums = arr[i]
    countsArr[nums]++
    // console.log(countsArr)
  }
  return countsArr
}

console.log(countingSort([0,1,2,2,2,3,3,4,5,6,7,7,8,9,9,9,10,10]));

