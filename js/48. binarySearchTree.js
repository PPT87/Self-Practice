// values need to be sorted
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function binary (val, arr){
  let lower = 0 
  let upper = arr.length - 1

  while(lower <= upper){
    console.log('try')
    const middle = lower + Math.floor((upper-lower)/2) //this is to determine the middle spot. If the array is odd, the Math.floor rounds down.
    if(val === arr[middle]){  //if the number being searched happens to be the in the middle position, return the middle value
      return middle
    }
    if (val < arr[middle]){ //this looks to see if the number is lower or higher than the middle value
      upper = middle -1 //setting the limit left of the middle number
    } else{
      lower = middle +1 //setting the limit right of the middle number
    }
  }
  return -1 //returns -1 if the number being searched is not in the array.
}

console.log(binary(7, values))

// function binary (val, arr){
//   let lower = 0
//   let upper = arr.length - 1
//   while(lower <= upper){
//     const middle = lower + Math.floor((upper-lower)/2)
//     if (val === arr[middle]){
//       return middle
//     } if (val < arr[middle]){
//       upper = arr[middle] - 1
//     } else{
//       lower = arr[middle] + 1
//     }
//   }
//   return -1
// }