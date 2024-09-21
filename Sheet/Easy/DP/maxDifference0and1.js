function maxDifference(str) {
    let maxEnding = 0;
    let maxSoFar = -2
    
    for(let char of str) {
        let value = char === '0' ? 1 : -1;
        maxEnding = Math.max(value, maxEnding + value);
        maxSoFar = Math.max(maxSoFar, maxEnding);
    }
    return maxSoFar;
}

console.log(maxDifference("11000010001"));  // Output: 6
console.log(maxDifference("11111"));        // Output: -1