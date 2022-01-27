// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

let solution = (a) => {
  let sortedNums = []
  
  for (let i=0; i<a.length; i++){
    if (a[i] !== -1){
      sortedNums.push(a[i])
      sortedNums = sortedNums.sort((a,b) => a-b)
    }
  }
  for (let i=0; i<a.length; i++){
    if (a[i] !== -1){
      a[i] = sortedNums.shift()
      
    }
  }
  return a
}


/*********************************************/
//solution 2

// let solution = (a) => {
//   let sortedNumbers = a.filter(number => number !== -1).sort((a,b) => a-b)
//   return result = a.map(number => number !== -1 ? sortedNumbers.shift() : number)
// }

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])); [-1, 150, 160, 170, -1, -1, 180, 190];