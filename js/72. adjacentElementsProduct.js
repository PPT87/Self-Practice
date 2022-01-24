function solution(inputArray) {
  maxProduct = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    let current = inputArray[i];
    let next = inputArray[i + 1];
    let currentProduct = 0;
    currentProduct = current * next;
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }
  return maxProduct;
}

console.log(solution([-23, 4, -3, 8, -12]));
console.log(solution([3, 6, -2, -5, 7, 3]))