// Greedy Algorithm to find Minimum number of Coins - Done
//     input: 70
//     output: [50, 20], 2

function findMinCoins(v) {
    let amount = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    
    let count = 0;
    let result = [];
    for(let i = 0; i < amount.length; i++) {
        while(v >= amount[i]) {
            v -= amount[i];
            result.push(amount[i]);
            count++;
        }
    }
    return { result, count }
}

console.log(findMinCoins(70));
console.log(findMinCoins(121));