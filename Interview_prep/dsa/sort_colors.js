// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

let nums = [2, 0, 1];

let left = 0;
let mid = 0;
let right = nums.length - 1;

function sort(nums) {
  while (mid <= right) {
    if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      //   mid++;
      right--;
    }
  }
  return nums;
}

console.log(sort(nums));
