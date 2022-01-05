// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let newArr=[]
  splitStr = str.split(' ')

  for (let i=0; i<splitStr.length; i++){
    if (splitStr[i] === '!' || splitStr[i] ==="," || splitStr[i] ==="." || splitStr[i] ==="?"){
      newArr.push(splitStr[i])
    } else{
      finalStr = splitStr[i].slice(1) + splitStr[i][0] + 'ay'
      newArr.push(finalStr)
    }
  }
  return newArr.join(' ')
}


console.log(pigIt('Hello world !'))