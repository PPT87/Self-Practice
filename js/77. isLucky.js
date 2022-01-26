// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.


let solution = (num) => {
  let firstSum = 0
  let secondSum = 0
  let splitNums = num.toString().split('')
  if (splitNums.length % 2 !== 0){
    return false
  }
  for (let i = 0; i < splitNums.length / 2; i++) {
    firstSum += parseInt(splitNums[i]);
  }
  for (let i=(splitNums.length/2); i<splitNums.length; i++){
    secondSum += parseInt(splitNums[i])
  }
  if (firstSum === secondSum) {
    return true
  } else {
    return false
  }
}

console.log(solution(239077));