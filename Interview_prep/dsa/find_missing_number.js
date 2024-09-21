// Given an array nums containing n distinct numbers in the range[0, n], return the only number in the
// range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range[0, 3].
// 2 is the missing number in the range since it does not appear in nums.

let nums = [3, 0, 1];
function find(nums) {
  let sorted = nums.sort();
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] - sorted[i] > 1) {
      console.log(sorted[i + 1], sorted[i]);
      return sorted[i] + 1;
    }
  }
  if (nums[0] === 0) {
    return nums.length - 1;
  } else {
    return 0;
  }
}

console.log(find(nums));
