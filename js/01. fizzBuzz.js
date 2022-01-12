// Write a program that prints the numbers from 1 to 100. If it’s a multiple of 3, it should print “Fizz”. If it’s a multiple of 5, it should print “Buzz”. If it’s a multiple of 3 and 5, it should print “Fizz Buzz”.



function fizzBuzz (){
  for (let i=1; i<101; i++){
    if (i % 3 && i % 5 === 0){ 
      console.log(i, 'fizzbuzz')
    } else if (i % 3 === 0){
      console.log(i, "fizz");
    } else if (i % 5 === 0){
      console.log(i, "buzz");
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz())