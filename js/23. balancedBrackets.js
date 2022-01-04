/*-----------------------------------------------------------------------------
Challenge: 23-balancedBrackets

Difficulty: Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as an argument.
- The input string is composed entirely of parentheses, brackets, or curly braces, i.e., (), [], or {}. Referred to as "braces" from this point forward.
- The balancedBrackets function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them. These examples may explain it best:

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:

/*
  The solution for this challenge is best implemented using
  a data structure known as a 'stack'. Think of a stack working a lot
  like a stack of papers where you always place new papers on top
  and always remove the top paper.
*/

function balancedBrackets(str) {
  // can't be balanced if string odd in length
  if (str.length % 2) return false;
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    var b = str.charAt(i);
    if ( '([{'.includes(b) ) {
      // add opening brackets to the stack
      stack.push(b);
    } else {
      // not an opening bracket, so remove last opening and check if matched
      if (!'() {} []'.includes(stack.pop() + b)) return false;
    }
  }
  return true;
}

/*--- Using Array.every method to iterate unless false is returned
      Also using arrow function ---*/
// function balancedBrackets(str) {
//   var stack = [];
//   return str.split('').every(c => {
//     if ('([{'.includes(c)) {
//       return stack.push(c);
//     } else {
//       return '() {} []'.includes(stack.pop() + c)
//     }
//   });
// }

/*--- Holy ternary Batman! Almost a one-liner! ---*/
// function balancedBrackets(str) {
//   var a = [];
//   return str.split('').every(c => '([{'.includes(c) ? a.push(c) : '() {} []'.includes(a.pop() + c));
// }
