function maxSumOfPairs(arr, k) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for(let i = arr.length - 1; i > 0; i--) {
        if(arr[i] - arr[i-1] < k) {
            sum += arr[i] + arr[i-1];
            i--;
        }
    }
    return sum;
}

// Example usage:
let arr = [3, 5, 10, 15, 17, 12, 9];
let K = 4;
console.log(maxSumOfPairs(arr, K));  // Output: 62