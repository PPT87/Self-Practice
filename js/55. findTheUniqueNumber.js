// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

    // (findUniq([ 0, 1, 0 ]), 1);
    // (findUniq([ 0, 0, 1 ]), 1);
    // (findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    // (findUniq([ 1, 1, 2, 1, 1 ]), 2);
    // (findUniq([ 3, 10, 3, 3, 3 ]), 10);

    function findUniq(arr){
      let uniq = {}
      for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        if (uniq[num]){
          uniq[num]++
        } else {
          uniq[num] = 1
        }
      }
      for (let i in uniq){
        if (uniq[i] === 1){
          return parseFloat(i)
        }
      }
    }

    console.log(findUniq([0, 0, 0.55, 0, 0]));