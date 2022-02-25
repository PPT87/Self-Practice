const extraLongFactorials = (n) => {
  n = BigInt(n);
  let factorial = BigInt(1);

  for (let i = n; i > 0; i--) {
    factorial = factorial * i;
  }

  console.log(factorial.toString());
}

console.log(extraLongFactorials(5))