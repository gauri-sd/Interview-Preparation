// WINDOW APPROACH

// Input : arr[] = {7, 3, 2, 4, 9, 12, 56} , m = 3
// Output: Minimum Difference is 2
// Explanation:
// We have seven packets of chocolates and we need to pick three packets for 3 students
// If we pick 2, 3 and 4, we get the minimum difference between maximum and minimum packet sizes.

let arr = [3, 4, 1, 9, 56, 7, 9, 12];
let k = 5;
let minSum;
let currSum = 0;
let temp = 1;
let s = arr.sort((a, b) => a - b);

for (let i = 0; i < s.length - k + 1; i++) {
  curSum = s[i + k - 1] - s[i];
  if (temp === 1) {
    minSum = curSum;
    temp++;
  }
  if (curSum < minSum) {
    minSum = curSum;
  }
}

console.log(minSum);

//////////////////////////////-------------------USING WHILE LOOP

let array = [7, 3, 1, 4, 9, 12, 56];
let n = 2;

let low = 0;
let high = n;
let minDiff = arr[0];

let sort = array.sort((a, b) => a - b);
console.log(sort);

while (low < arr.length - k) {
  let currDiff = arr[high] - arr[low];
  if (minDiff > currDiff) {
    minDiff = currDiff;
  }
  low++;
  high++;
}

console.log(minDiff);
