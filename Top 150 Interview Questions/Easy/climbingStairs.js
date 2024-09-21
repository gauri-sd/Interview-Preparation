// Climbing Stairs
    // Input: n = 2
    // Output: 2

function climbingStairs(n) {
    if(n <= 1) {
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

console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(8));