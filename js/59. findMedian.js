// Find the Median of array

function findMedian (arr){
  sortedArr = arr.sort((a,b) => a-b)
  mid = Math.floor(arr.length / 2)
  return arr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid] + sortedArr[mid - 1]) / 2;
}

console.log(findMedian([7,4,0,3]))