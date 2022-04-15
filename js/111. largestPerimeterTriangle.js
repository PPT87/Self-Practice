// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.


// Example 1:

// Input: nums = [2,1,2]
// Output: 5
// Example 2:

// Input: nums = [1,2,1]
// Output: 0


// Constraints:

// 3 <= nums.length <= 104
// 1 <= nums[i] <= 106

const largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a); // sort the numbers
  for (let i = 0; i < nums.length - 2; i++) { //get 3 numbers from the array
    if (nums[i] < nums[i + 1] + nums[i + 2]) { //checking to see if the first number in smaller than the sum of the 2nd and 3rd number
      return nums[i] + nums[i + 1] + nums[i + 2]; //return the perimeter
    }
  }
  return 0; //else return 0 if the condition isn't met from line 23
};

console.log(largestPerimeter([1,2,1]))