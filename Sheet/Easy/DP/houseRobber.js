function rob(money) {
    const n = money.length;
    
    if (n === 0) return 0;
    if (n === 1) return money[0];
    if (n === 2) return Math.max(money[0], money[1]);
    
    // Create a dp array to store the max money that can be robbed up to each house
    let dp = new Array(n).fill(0);
    
    // Base cases
    dp[0] = money[0];
    dp[1] = Math.max(money[0], money[1]);
    
    // Fill dp array using the recurrence relation
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-1], money[i] + dp[i-2]);
    }
    
    // The last element in dp array contains the maximum money that can be robbed
    return dp[n-1];
}

// Example Usage:
const houses = [2, 7, 9, 3, 1];
console.log(rob(houses));  // Output: 12
