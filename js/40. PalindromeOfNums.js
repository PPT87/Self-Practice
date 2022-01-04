function isPalindrome (num){
  let reverseNum = String(num).split('').reverse().join('')
  let arrNum = String(num)
  if (arrNum === reverseNum){
    return true
  } else{
    return false
  }
}


console.log(isPalindrome(121))