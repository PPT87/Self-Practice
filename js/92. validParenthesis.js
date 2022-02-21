// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
const stack = []

for (let i=0; i<s.length; i++){
  let char = s[i]
  console.log(char)
  switch(char){
    case '(': stack.push(')')
    break
    case '[': stack.push(']')
    break
    case '{': stack.push('}')
    break
    default:
      topElement = stack.pop()
      if(char !== topElement) return false
  }
}
return stack.length === 0
}

console.log(isValid('(())'))