// Chocolate Distribution Problem - Done
//     input: arr = [7, 3, 2, 4, 9, 12, 56], m = 3
//     output: 2

// Approach:
// Sort the array of chocolates.
// After sorting, the problem reduces to finding the subarray of size m such that the difference between the maximum and minimum chocolates in this subarray is minimized.
// Traverse the sorted array and calculate the difference for each possible subarray of size m.
// The minimum of these differences is the answer.

function chocolateDistribution(arr, m) {
    arr = arr.sort(function(a, b){return a - b});
    
    let max = arr[arr.length - 1];
    for(let i = 0; i+m-1 < arr.length; i++) {
        let diff = arr[i+m-1] - arr[i];
        if(diff < max) {
            max = diff;
        }
    }
    return max;
}

console.log(chocolateDistribution([7, 3, 2, 4, 9, 12, 56], 3));