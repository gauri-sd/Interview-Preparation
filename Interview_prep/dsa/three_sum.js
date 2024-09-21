// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// **************************VER IMP  ABOUT HASHSET***********************************

// The issue here is that Set uses strict equality(===) to determine uniqueness.
// When comparing arrays, two arrays are considered equal only if they refer to the
// same array object in memory.In your case, even though the arrays contain the same elements,
// they are distinct array objects in memory, so Set considers them as separate entries.
// To ensure uniqueness based on the contents of arrays rather than their memory references,
// you can convert the arrays to strings before adding them to the set.Here's how you can do it:

const approach = `We will use to pointer approach to find all possible combination of any window size , in this case its 3 
First we wil sort the array , then in loop , we will assign left and right pointer value  and use while() for pushing triplets`;

const nums = [-1, 0, 1, 2, -1, -4];
let sets = new Set();
let left = 0;
let right = 0;

let arr = nums.sort((a, b) => a - b);
function threeSum(nums) {
  for (let i = 0; i < arr.length - 2; i++) {
    left = i + 1;
    right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        sets.add([arr[i], arr[left], arr[right]].join(","));
        right--;
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  console.log("SET--", sets);
  const res = Array.from(sets).map((triplet) => triplet.split(",").map(Number));
  console.log("res--", res);
}

threeSum(nums);
