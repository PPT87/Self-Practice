//Find pairs for a target sum in an array
let num = [1, 2, 5, 6, 7, 8, 5]
let target = 13

function sumTwo(num, target){
  for (let i=0; i<num.length; i++){
    for (let j=i+1; j<num.length; j++){
      if (num[i] + num[j] === target){
        twoPairs = [num[i], num[j]]
        return twoPairs
    }
    }
  }
}

console.log(sumTwo([1, 2, 5, 6, 7, 8, 5], 13))