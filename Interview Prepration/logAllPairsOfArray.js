function logAllPairsOfArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            console.log([arr[i], arr[j]]);
        }
    }
}

console.log(logAllPairsOfArray([1, 2, 3, 4, 5]));