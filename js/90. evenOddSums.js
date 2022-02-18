// Take in an array and return an array of the sums of even and odd numbers
// ex. evenOddSums([50,60,60,45,71]) == [170,116]

const evenOddSums = (arr) => {
  let oddSumArr = []
  let evenSumArr = []

  arr.forEach(num => {
    num % 2 === 0 ? evenSumArr.push(num) : oddSumArr.push(num)
  });

  oddSumArr = oddSumArr.reduce((acc, curr) => acc + curr)
  evenSumArr = evenSumArr.reduce((acc, curr) => acc + curr)

  return [oddSumArr, evenSumArr]
}


console.log(evenOddSums([50,60,60,45,71]))