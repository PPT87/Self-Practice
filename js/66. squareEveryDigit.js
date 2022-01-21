function squareDigits(num) {
  num = num.toString().split('')
  let squaredArr = []
  
  for (let i=0; i<num.length; i++){
    squaredArr.push(num[i] ** 2)
  }
  return parseInt(squaredArr.join(''))
}

console.log(squareDigits(9119))