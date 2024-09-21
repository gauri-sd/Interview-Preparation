function climbStairs(n) {
    if (n <= 1) {
        return 1;
    }
    
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(climbStairs(3));  // Output: 3
console.log(climbStairs(5));  // Output: 8