function longestSubseqWithDiffOne(arr) {
    let dp = new Array(arr.length).fill(1);
    
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if(Math.abs(arr[i] - arr[j]) === 1) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

let arr = [10, 9, 4, 5, 4, 8, 6];
console.log(longestSubseqWithDiffOne(arr));  // Output: 3