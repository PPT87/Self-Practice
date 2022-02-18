// Add All Numbers
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS

const addAll = (...args) => {
  let total = args.reduce((acc, curr) => acc + curr)
  return total
}

console.log(addAll(2,5,6,7,5))