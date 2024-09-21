function maxProfit(arr) {
    let totalProfit = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i+1] > arr[i]) {
            totalProfit += arr[i+1] - arr[i];
        }
    }
    return totalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 7
console.log(maxProfit([1, 2, 3, 4, 5]));    // Output: 4
console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0