// Take in an array and return an array of the sums of even and odd numbers
// ex. evenOddSums([50,60,60,45,71]) == [170,116]


//Solution 1
// const evenOddSums = (arr) => {
//   let oddSumArr = []
//   let evenSumArr = []

//   arr.forEach(num => {
//     num % 2 === 0 ? evenSumArr.push(num) : oddSumArr.push(num)
//   });

//   oddSumArr = oddSumArr.reduce((acc, curr) => acc + curr)
//   evenSumArr = evenSumArr.reduce((acc, curr) => acc + curr)

//   return [oddSumArr, evenSumArr]
// }


//Solution 2
const evenOddSums = (arr) => {
  let oddSum = 0
  let evenSum = 0

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)))

  return([evenSum, oddSum])
}


console.log(evenOddSums([50,60,60,45,71]))