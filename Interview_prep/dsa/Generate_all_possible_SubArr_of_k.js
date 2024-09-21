function generateSubarrays(arr, k) {
  let res = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let subarray = [];
    for (let j = i; j < i + k; j++) {
      subarray.push(arr[j]);
    }
    res.push(subarray);
  }
  console.log("res ", res);
}

const arr = [3, 24, 2, 8, 4, 5];
const k = 1;
const subarrays = generateSubarrays(arr, k);
console.log(subarrays);
