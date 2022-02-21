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
  
  //looking to see if the current char is an opening bracket and then pushing it to the stack
  switch(char){
    case '(': stack.push(')')
    break
    case '[': stack.push(']')
    break
    case '{': stack.push('}')
    break

    //if none of the values matches above, it will pop the closing bracket to be the topElement
    default:
      topElement = stack.pop()
      //then it will compare if the topElement matches the char. if the characters don't match, the expression is invalid
      if(char !== topElement) return false
  }
}
//if the stack still has remaining elements, it's not balanced and therefor false.
return stack.length === 0
}

console.log(isValid('(())'))