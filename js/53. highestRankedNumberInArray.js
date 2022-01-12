// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
  let result = {}
  let maxCount = 0
  let maxNum = null
  for (let i = 0; i < arr.length; i++){
    let nums = arr[i]
    if (result[nums]){
      result[nums]++
    } else{
      result[nums] = 1
    }
  }
  for (i in result){
    if (result[i] > maxCount){
      maxCount = result[i]
      maxNum = i
    } else if (result[i] === maxCount){
      maxNum = i
    }
  }
  return parseInt(maxNum)
  }

  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))