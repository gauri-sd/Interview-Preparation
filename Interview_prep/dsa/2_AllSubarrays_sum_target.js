const question = `find all contiguous subarrays within an array where the sum of elements in the subarray equals a 
given target sum, which in this case is n.
`;

/////////////////////////////// 1st sliding window approach //////////////////////////////////

function findSubarrays(arr, target) {
  let low = 0;
  let high = 0;
  let currSum = arr[low];
  let res = [];

  while (low < arr.length) {
    if (currSum === target) {
      res.push(arr.slice(low, high + 1));
      high++;
      currSum += arr[high];
    } else if (currSum < target) {
      high++;
      currSum += arr[high];
    } else {
      // currSum > target
      currSum -= arr[low];
      low++;
    }
  }

  return res;
}

// Example usage
const s = [3, 4, 2, 5, 1, 5, 1, 1];
const target = 7;
const subarrays = findSubarrays(s, target);
console.log(subarrays); // Output: [[3, 4], [4, 2, 5], [2, 5], [5, 1, 1]]

// function findSubarrays(arr, target) {
//   const result = [];

//   let left = 0;
//   currSum = 0;

//   for (let right = 0; right < arr.length; right++) {
//     currSum += arr[right];

//     console.log(currSum);
//     if (currSum > target) {
//       currSum = currSum - arr[left];
//       left++;
//     }

//     if (currSum === target) {
//       result.push(arr.slice(left, right + 1));
//     }
//   }
//   return result;
// }

// // Example usage
// const s = [3, 4, 2, 5, 1];
// const target = 7;
// const subarrays = findSubarrays(s, target);
// console.log(subarrays); // Output: [[3, 2]]
