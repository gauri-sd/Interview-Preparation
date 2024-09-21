// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

/////////////// 1st method \\\\\\\\\\\\\\\\\\\\\\
let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

console.log(nums.indexOf(target));

/////////////// 2nd method \\\\\\\\\\\\\\\\\\\\\\

var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};
