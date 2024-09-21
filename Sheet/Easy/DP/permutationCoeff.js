function permutationCoeff(n, k) {
    let result = 1;
    for(let i = 0; i < k; i++) {
        result *= (n - i);
    }
    return result;
}

console.log(permutationCoeff(5, 2));  // Output: 20
console.log(permutationCoeff(10, 3)); // Output: 720