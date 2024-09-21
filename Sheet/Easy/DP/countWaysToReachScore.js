function countWaysToReachScore(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    
    let scores = [3, 5, 10];
    for(let score of scores) {
        for(let i = score; i <= n; i++) {
            dp[i] += dp[i - score];
        }
    }
    return dp[n];
}

console.log(countWaysToReachScore(20)); // Output: 4
console.log(countWaysToReachScore(13)); // Output: 2