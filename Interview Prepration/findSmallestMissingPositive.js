function findSmallestMissingPositive(arr) {
    arr = arr.filter((e) => e > 0);
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return arr.length + 1;
}

console.log(findSmallestMissingPositive([3, 4, -1, 1]));    // Output: 2
console.log(findSmallestMissingPositive([1, 2, 0]));        // Output: 3
console.log(findSmallestMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(findSmallestMissingPositive([1, 2, 3, 4, 5]));  // Output: 6