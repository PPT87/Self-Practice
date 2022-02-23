var isPalindrome = function(s){
  if (s.length === 0) return true

  s = s.toLowerCase().replace(/[^a-z0-9]/g,'')

  reverseStr = s.split('').reverse().join('')

  return s === reverseStr
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))