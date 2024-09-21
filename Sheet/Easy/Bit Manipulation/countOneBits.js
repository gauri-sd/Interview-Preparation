function countOneBits(n) {
    let count = 0;
    while(n !== 0) {
        count += n & 1;
        n = n >>> 1;
    }
    return count;
}

console.log(countOneBits(6));