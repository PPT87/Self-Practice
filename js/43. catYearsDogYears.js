// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

/********************************************************* */
// solution 1
function humanYearsCatYearsDogYears(humanYears) {
  if (humanYears === 1){
    let catYears = 15
    let dogYears = 15
    return [humanYears, catYears, dogYears]
  }else if(humanYears === 2){
    let catYears = 24
    let dogYears = 24
    return [humanYears, catYears, dogYears]
  } else if (humanYears >= 3){
    let catYears = 24 + (humanYears-2)*4
    let dogYears =24 + (humanYears-2)*5
    return [humanYears, catYears, dogYears]
  }
}

/******************************************************** */
// solution 2

// function humanYearsCatYearsDogYears(humanYears) {
//   switch (humanYears) {
//     case 1:
//       return [1, 15, 15]
//     case 2:
//       return [2, 24, 24];
//     default:
//       return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
//   }
// }
/******************************************************** */
// solution 3

// var humanYearsCatYearsDogYears = function(humanYears) {
//   var catYears = 0;
//   var dogYears = 0;
  
//   if (humanYears === 1) {
//     catYears = 15;
//     dogYears = 15;
//   } else if (humanYears === 2) {
//     catYears = 24;
//     dogYears = 24;
//   } else if (humanYears > 2) {
//     catYears = 24 + (humanYears - 2) * 4;
//     dogYears = 24 + (humanYears - 2) * 5;
//   }

//   return [humanYears, catYears, dogYears];
// }


console.log(humanYearsCatYearsDogYears(4))