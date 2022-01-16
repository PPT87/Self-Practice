// Given an array of integers, where all elements but one occur twice, find the unique element.
// Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4.

let lonelyinteger = (a) => {
  let result = {}
  for (let i=0; i<a.length; i++){
    let num = a[i]
    if (result[num]){
      result[num]++
    } else {
      result[num] = 1
    }
  }
  for (let i in result){
    if(result[i] == 1){
      return parseInt(i)
    }
  }
}


console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));