// Capitalize Letters
// Return a single string with the first letter of every word capitalized
// ex. capitalizeLetters ('i love javascript') === 'I Love Javascript'

// function capitalizeLetters(str){
//   let strArr = str.toLowerCase().split(' ')

//   for (let i=0; i< strArr.length; i++){
//     strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1)
//   }
//   return strArr.join(' ')
// }

function capitalizeLetters(str){
  return str.toLowerCase().split(' ').map(word=> word[0].toUpperCase() + word.substring(1)).join(' ')
}


console.log(capitalizeLetters ('i love javascript'))