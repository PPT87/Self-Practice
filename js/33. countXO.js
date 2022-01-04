//codewars example
function XO(str) {
  //code here
let arrStr = str.toUpperCase().split("") //change all to upper case and then put each letter into an array
console.log(arrStr) //shows the array of changes from above


//filters the X's and gets the count of each element
const countX = arrStr.filter(x => x==='X').length 
console.log(`total X's`, countX)


//filters the O's and gets the count of each
const countO = arrStr.filter (o => o==='O').length
console.log( `total O's`, countO)

if (countX === countO){
return true
}else {
  return false
}
}
XO("OOooXxx")

//Hunter's solution
// function XO(str) {
//   //code here
//   console.log('Sanity Check', str)

//   //initialize variables to track occurrences of each character
//   let xCount = 0
//   let oCount = 0

//   // iterate through the length of the string
//   for (let i = 0; i < str.length; i++) { //iterates 1 at a time, starting at 0, up to str.length
//     // apply toLowerCase() to account for upper case letters
//     if (str[i].toLowerCase() === 'x') xCount++ //will check to see which items are 'x' and then count for each instance
//     if (str[i].toLowerCase() === 'o') oCount++
//   }

//   if (xCount === oCount) {
//     return true
//   } else {
//     return false
//   }

// }