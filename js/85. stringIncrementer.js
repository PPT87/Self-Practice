// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

let incrementString = (string) => {
  let regex = /[0-9]/g;
  let index = string.search(regex);
  let arr = [];

  //split string at where a number first appears
  if (index === -1 || string === "") {
    return string + "1";
  } else
    arr.push(string.substring(0, index), string.substring(index, string.length));

  //loop through element of array with numbers and increment by 1 when necessary
  let secondArr = arr[1].split("");
  for (let i = secondArr.length - 1; i >= 0; i--) {
    if (secondArr[i] < 9) {
      secondArr[i]++;
      break;
    } else if (i === 0 && secondArr[i] == 9) {
      secondArr[i] = 10;
    } else if (secondArr[i] == 9) {
      secondArr[i] = 0;
    }
  }
  secondArr = secondArr.join("");
  return arr[0] + secondArr;
}

console.log(incrementString("foobar000")) //"foobar001"
console.log(incrementString("foo")) //"foo1"
console.log(incrementString("foobar001")) //"foobar002"
console.log(incrementString("foobar99")) //"foobar100"
console.log(incrementString("foobar099")) //"foobar100"
console.log(incrementString("")) //"1"