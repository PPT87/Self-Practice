// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

let solution = (s) => {
  let startBracket = s.indexOf('(')
  let endBracket = s.indexOf(')')
  let reverseLetters = []
  for (let i=startBracket+1; i<endBracket; i++){
    reverseLetters.push(s[i])
    console.log(reverseLetters.reverse())
  }
}

console.log(solution("a(bc)de"))
