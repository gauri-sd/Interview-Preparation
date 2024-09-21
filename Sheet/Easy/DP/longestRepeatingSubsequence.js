function longestRepeatingSubsequence(str) {
    let dp = Array.from({length: str.length + 1}, () => Array(str.length + 1).fill(0));
    
    for(let i = 1; i <= str.length; i++) {
        for(let j = 1; j <= str.length; j++) {
            if(str[i - 1] === str[j - 1] && i !== j) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[str.length][str.length];
}

console.log(longestRepeatingSubsequence("aabb"));  // Output: 2
console.log(longestRepeatingSubsequence("axxxy"));  // Output: 2