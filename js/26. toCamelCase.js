/*-----------------------------------------------------------------------------
Challenge: 26-toCamelCase

Difficulty: Intermediate

Prompt:

- Write a function called toCamelCase that accepts a single string as an argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
- If the string argument does not contain a "_" or a "-", return the same string.

Hints:

- This is a great challenge for using regular expressions combined with the String.replace method.

Examples:

toCamelCase( 'sei' ) // => 'sei'
toCamelCase( 'sei-rocks' ) // => 'seiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
-----------------------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:

// function toCamelCase(str) {
//   return str.replace(/[_-]\w/g, function(match) {
//     return match.charAt(1).toUpperCase();
//   });
// }

/* Take advantage of the implicit return of an arrow function for a one-line solution */
// function toCamelCase(str) {
//   return str.replace(/[_-]\w/g, match => match.charAt(1).toUpperCase());
// }

// function toCamelCase(str){
//   return str.split('_').map(function(word,index){
//     if(index === 0){
//       return word.toLowerCase();
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join('');
// }

function toCamelCase(str){
  if (str.includes('-')){
    return str.split('-').map(function(word, index){
      if (index === 0){
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
  } else if(str.includes('_')){
    return str.split('_').map(function(word, index){
      if (index === 0){
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
  } else{
    return str
  }
}



console.log(toCamelCase( 'sei' )) // => 'sei'
console.log(toCamelCase( 'sei-rocks' )) // => 'seiRocks'
console.log(toCamelCase( 'Mama-mia' )) // => 'MamaMia'
console.log(toCamelCase( 'banana_Turkey_potato' )) // => 'bananaTurkeyPotato'
console.log(toCamelCase( 'A_b_c' )) // => 'ABC'