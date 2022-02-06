
const sumArray = (array) => {
  if (!array || array.length === 0){
    return 0
  }
  let sum = 0 
  sortedArray = array.sort((a,b) => a-b).slice(1,-1)
  for (let i = 0; i < sortedArray.length; i++){
    sum += sortedArray[i]
  }
  return sum
}

console.log(sumArray([ 0, 1, 2, 3, 4, 5]));