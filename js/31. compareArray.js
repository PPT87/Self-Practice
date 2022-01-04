// write a function diff(arrA, arrB)
// accepts 2 arrays and return a new array
// that contains all the values that are not contained both arrays
// const a = [1, 2, 3, 4]
// const b = [3, 4, 5, 6]


// most simplest answer
const a = [1, 2, 3, 4]
const b = [3, 4, 5, 6]
  function diff(arrA, arrB){
console.log('start off data', arrA, arrB)

let compareAtoB = arrA.filter(n => !arrB.includes(n)) //checking to see which numbers in arrA is not included in arrB
console.log(compareAtoB)

let compareBtoA = arrB.filter(n => !arrA.includes(n))//checking to see which numbers in arrB is not included in arrA
console.log(compareBtoA)

let diffArr = compareAtoB.concat(compareBtoA) //this is combining the numbers

  }
  console.log(
    diff(a,b)
  )