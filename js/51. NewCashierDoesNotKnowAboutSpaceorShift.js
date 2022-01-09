/*****************NOT COMPLETED!!************/

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

//Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

input = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

function getOrder(input){
  // console.log(input.includes('pizza', 'milk', 'burger', 'chicken', 'onionrings', 'milkshake', 'coke', 'sandwich'))
let result = input.split(' ')
console.log(result.includes('pizza'))
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))