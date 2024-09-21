function maxProfit(arr) {
    if (arr.length === 0) return 0;

    let min = arr[0];
    let max = 0;
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        
        let profit = arr[i] - min;

        if(profit > max) {
            max = profit;
        }
    }
    
    return max;
}

// Example usage
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5