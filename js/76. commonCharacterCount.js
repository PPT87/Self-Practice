// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


function solution(s1, s2) {
  let result1 = {}
  let result2 = {}

  for (let i=0; i<s1.length; i++){
    let s1Char = s1[i]
    if (result1[s1Char]){
      result1[s1Char]++
    } else {
      result1[s1Char] = 1
    }
  }
  for (let i=0; i<s2.length; i++){
    let s2Char = s2[i]
    if (result2[s2Char]){
      result2[s2Char]++
    } else {
      result2[s2Char] = 1
    }
  }
  let count = 0
  for (property in result1){
    if (result2[property]){ //checking to see if result2 contain any properties of result1
      if(result2[property] < result1[property]){ //is result2 props < result1 props?
        count += result2[property]
      } else{
        count += result1[property] 
      }
    }
  } 
  return count
}

console.log(solution('aabcc','adcaa')); 3