let nums = [1, 0, 0, 1, 1, 0, 0];

let low = 0;
let high = nums.length - 1;

function sort(nums) {
  while (low <= high) {
    if (nums[low] === 1) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
      low++;
      high--;
    } else {
      low++;
    }
  }

  return nums;
}

console.log(sort(nums));
