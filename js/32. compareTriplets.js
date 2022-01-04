// Compare Triplets

// billy = [23, 54, 66]
// sally = [44, 12, 60]
// let result = [2,1]

function compareTriplets(arr1, arr2){
  let billy = 0
  let sally = 0
  for (let i=0; i<arr1.length; i++){
    if (arr1[i] > arr2[i]){
      billy++
    } else if (arr1[i] < arr2[i]){
      sally++
    }
  }
  return [billy, sally]
}

console.log(compareTriplets([1, 5, 6], [44, 12, 60]))