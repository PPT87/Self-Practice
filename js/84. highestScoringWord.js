// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

/*     solution 1      */
// const high = (x) => {
//   var splitArr = x.split(" "),
//     maxSum = 0,
//     result = "";
//   for (let i = 0; i < splitArr.length; i++) {
//     var word = splitArr[i],
//       currentSum = 0;
//     for (let j = 0; j < word.length; j++) {
//       currentSum += word.charCodeAt(j) - 96;
//     }
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       result = word;
//       console.log(word, currentSum)
//     }
//   }
//   return result;
// }


/* solution 2 */
const high = (x) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let highestWord = ''
  let highestCount = 0
  let splitArray = x.split(' ')

  for (let i=0; i<splitArray.length; i++){
    let sum = 0
    let word = splitArray[i]
    for (let j=0; j<word.length; j++){
      let char = word[j]
      sum += alphabet.indexOf(char) + 1
    }
    if (sum > highestCount){
      highestCount = sum
      highestWord = word
    }
  }
  return  highestWord
}

console.log(high("man i need a taxi up to ubud")) //"taxi"
console.log(high("what time are we climbing up the volcano")) //"volcano"
console.log(high("take me to semynak")) //"semynak"
console.log(high("aa b")) //"aa"
console.log(high("b aa")) // "b"
console.log(high("bb d")) // "bb"
console.log(high("d bb")) // "d"
console.log(high("aaa b")) // "aaa"