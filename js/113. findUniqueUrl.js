// const checkURL = (url) => {
//   const reg = /(?!.*\/product\/)\/categories\/(\?.+)?/g
//   let result = []
//     for(let i=0; i<url.length; i++){
//       if (url[i].match(reg)) {
//         result.push(url[i])
//       }
//     }
//     return result
// }

const checkURL = (url) => {
  let result = []
  url.forEach((link) => link.match(/(?!.*\/product\/)\/categories\/(\?.+)?/) ? result.push(link) : null);
  return result
}

console.log(
  checkURL([
    "sportchek.com/categories/men/footwear",
    "sportchek.ca/categories/training-shoes/product/",
    "sportchek.com/categories/men/shoes",
    "sportchek.com/men/shoes/",
    "sportchek.com/men/shoes/product/",
  ])
);
