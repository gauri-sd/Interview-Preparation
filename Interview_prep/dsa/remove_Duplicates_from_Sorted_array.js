// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const nums = [1, 1, 2, 3, 3, 4, 4, 4, 6];

const set = new Set();
let k = 0;
for (let i = 0; i < nums.length; i++) {
  if (!set.has(nums[i])) {
    set.add(nums[i]);
    k++;
  }
}

console.log("SET__", set, k);
