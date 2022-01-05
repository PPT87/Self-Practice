// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

/********************************************************************** */

let string = "The quick brown fox jumps over the lazy dog."

function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let count = 0

  splitAlphabet = alphabet.split('')
  splitString = string.toLowerCase().split(' ').join('').split('')

  for (let i=0; i<splitAlphabet.length; i++){
    if (splitString.indexOf(splitAlphabet[i]) > -1)
      count++
  }
  return (count >= 26)? true : false;
}

console.log(isPangram(string))

/********************************************************************** */
// solution 2

// function isPangram(str){
//   var alphabet = ['a', 'b', 'c', 'd', 'e',
//          'f', 'g', 'h', 'i', 'j',
//          'l', 'm', 'n', 'o', 'p',
//          'q', 'r', 's', 't', 'u',
//          'v', 'w', 'x', 'y', 'z'
//        ];
//        str=str.toLowerCase();
//        for (var i = 0; i < alphabet.length; i++) {
//            if (str.indexOf(alphabet[i])<0) {
//              return false;
//            }
//        }
//        return true
//  }



/********************************************************************** */
// solution 3

// function isPangram(string){
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//   const s = string.toUpperCase()
//   return alphabet.every(n => s.includes(n))
// }


