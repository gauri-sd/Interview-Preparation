function maxSubarraySum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > currentSum + arr[i]){
            currentSum = arr[i];
        } else {
            currentSum += arr[i];
        }
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
    }
    return maxSum;
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubarraySum(array);
console.log("Maximum subarray sum:", maxSum);