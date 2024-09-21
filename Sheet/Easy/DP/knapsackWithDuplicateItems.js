function knapsackWithDuplicateItems(N, W, weights, values) {
    let dp = new Array(W + 1).fill(0);

    for (let i = 0; i < N; i++) {
        for (let j = weights[i]; j <= W; j++) {
            dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
        }
    }

    return dp[W];
}

const N = 2;
const W = 3;
const weights = [2, 1];
const values = [1, 1];

console.log(knapsackWithDuplicateItems(N, W, weights, values)); // Output: 3