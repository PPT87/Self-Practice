// Array chunking
// split an array into chuncked arrays of a specific length
// ex chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3], [4,5,6], [7]]

const chunkArray = (arr, num) => {
  const chunkedArr = []
  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length -1]

    if (!last || last.length === num) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  
  return chunkedArr
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));