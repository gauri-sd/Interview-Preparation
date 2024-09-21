// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

let nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    const number = target - nums[i];
    if (map.has(number)) {
      return [i, map.get(number)];
    }
    map.set(nums[i], i);
  }
}

console.log(twoSum(nums, target));

//--------------------------using 2 pointer approach----------------------------- 

let numss = [2, 7, 11, 15],
  targets = 9;
let sort = nums.sort((a, b) => a - b);

let l1 = 0;
let l2 = nums.length - 1;
for (let i = 0; i < nums.length; i++) {
  let sum = nums[l1] + nums[l2];
  console.log(l1, l2);
  if (sum === target) {
    console.log("RESULT", l1, l2);
    break;
  }
  if (sum > target) {
    l2--;
  } else {
    l1++;
  }
  console.log("SUM", sum);
}
