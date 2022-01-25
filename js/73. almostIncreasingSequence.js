// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

let solution = (sequence) => {
  let decreaseCount = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      decreaseCount++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        console.log('current:', sequence[i], 'next:', sequence[i+1], 'previous:', sequence[i-1], 'twoback:', sequence[i-2])
        return false;
      }
    }
  }
  return decreaseCount <= 1;
};

// console.log(solution([1, 3, 2])); true
// console.log(solution([1, 3, 2, 1])); false
// console.log(solution([3, 6, 5, 8, 10, 20, 15])); false
// console.log(solution([1, 2, 5, 3, 5])); true
// console.log(solution([1, 2, 3, 4, 99, 5, 6])); true
// console.log(solution([1, 2, 1, 2])); false
console.log(solution([1, 2, 3, 4, 5, 3, 5, 6])); false;
// console.log(solution([1, 2, 3, 4, 3, 6])); true;
// console.log(solution([3, 5, 67, 98, 3])); true;
