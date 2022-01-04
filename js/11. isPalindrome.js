/*-----------------------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that is the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

/*--- Using a for loop ---*/
function isPalindrome (str){
  let reverseString = str.toLowerCase().replaceAll(' ', '').split('').reverse().join('')
  let originalStr = str.toLowerCase().split(' ').join('')
    
  if (reverseString === originalStr){
    return true
  }
  else{
    return false
}
}


// function isPalindrome(str) {
//   str = str.toLowerCase();
//   // loop to replace spaces
//   while (str.includes(' ')) str = str.replace(' ', '');
//   for (var i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
//   }
//   return true;
// }

/*--- Using regular expression to replace spaces ---*/
// function isPalindrome(str) {
//   // regular expression to replace all spaces
//   str = str.toLowerCase().replace(/ /g, '');
//   for (var i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
//   }
//   return true;
// }



console.log(isPalindrome('SEI Rocks')); //=> false
console.log(isPalindrome('rotor')); //=> true
console.log(isPalindrome('A nut for a jar of tuna')); //=> true
console.log(isPalindrome('')); //=> true