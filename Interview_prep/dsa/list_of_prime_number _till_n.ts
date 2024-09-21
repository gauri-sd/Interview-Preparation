function primeList(n) {
    let res = [];
    for (let i = 2; i < n; i++) {
        let counter = 2;
        let isPrime = true;

        // Check if i is prime
        while (counter < i) {
            if (i % counter === 0) {
                isPrime = false;
                break; // Exit the while loop if i is not prime
            }
            counter++;
        }
        if (isPrime) {
            res.push(i);
        }
    }
    return res;
}

console.log(primeList(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
