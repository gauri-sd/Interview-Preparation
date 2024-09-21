// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.If target exists,
// then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// Example usage:
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 5;
const index = binarySearch(arr, target);
console.log("KK", index);
if (index !== -1) {
  console.log(`Target ${target} found at index ${index}`);
} else {
  console.log(`Target ${target} not found in the array`);
}
