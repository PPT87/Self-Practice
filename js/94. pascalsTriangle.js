//leetcode 118.

var generate = function(numRows) {
  let triangle = []

  if(numRows === 0){
    return triangle
  }

  //manually push #1 to create the 1st row
  triangle.push([1])

  //since we already have our 0th row, we start at i=1.
  for(let i=1; i<numRows; i++){
    //prevRow is the row above us
    let prevRow = triangle[i-1]

    //create new row
    let newRow = []

    //again, manually add in #1
    newRow.push(1)

    //populate the interior of the row. 
    //Start at 1 because we manually pushed #1 at the 0th index
    for(let j=1; j<prevRow.length; j++){
      //looking at the index 1 less and the current index
      newRow.push(prevRow[j-1] + prevRow[j])
    }

    //manually push in #1 after we get the interior of the row to close the array
    newRow.push(1)

    //push our interior array into the outer array of 1's. 
    triangle.push(newRow)
  }

  return triangle
}

