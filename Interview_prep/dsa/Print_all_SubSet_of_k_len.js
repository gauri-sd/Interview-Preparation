// Here recursion and backtracking is used

function generateSubsets(nums, k) {
  let subsets = [];
  function backtracking(start, currArr) {
    if (currArr.length === k) {
      subsets.push([...currArr]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      currArr.push(nums[i]);
      backtracking(i + 1, currArr);
      currArr.pop();
    }
  }
  backtracking(0, []);
  return subsets;
}

const s = [3, 5, 1, 8, 9, 0];
const k = 3;

const result = generateSubsets(s, k);
console.log(result);
