// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

let nums = [5, 4, -1, 7, 8];
let maxSum = nums[0];
let curSum = nums[0];

for (let i = 1; i < nums.length; i++) {
  curSum = Math.max(nums[i], curSum + nums[i]);
  console.log(curSum);
  maxSum = Math.max(maxSum, curSum);
 }

console.log(maxSum);
