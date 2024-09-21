function findNonRepeatingNumbers(arr) {
    let xorAll = 0;
    for(let i = 0 ; i < arr.length; i++) {
        xorAll ^= arr[i];
    }
    
    let rightMostBit = xorAll & -xorAll;
    
    let num1 = 0, num2 = 0, res = [];
    for (let i = 0; i < arr.length; i++) {
        if((arr[i] & rightMostBit) === 0) {
            num1 ^= arr[i];
        } else {
            num2 ^= arr[i];
        }
    }
    return [num1, num2];
}

console.log(findNonRepeatingNumbers([1, 2, 3, 2, 1, 4]));