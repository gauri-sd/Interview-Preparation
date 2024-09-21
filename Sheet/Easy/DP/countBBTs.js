function countBBTs(h) {
    if(h === 0 || h === 1) {
        return 1;
    }
    let dp = new Array(h + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= h; i++) {
        dp[i] = dp[i - 1] * dp[i - 1] + 2 * dp[i - 1] * dp[i - 2];
    }
    return dp[h];
}

console.log(countBBTs(3)); // Output: 15
console.log(countBBTs(4)); // Output: 315