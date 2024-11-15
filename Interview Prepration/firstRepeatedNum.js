function firstRepeatedNumber(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            return arr[i];
        } else {
            obj[arr[i]] = arr[i];
        }
    }
    return undefined;
}

console.log(firstRepeatedNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRepeatedNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRepeatedNumber([2, 3, 4, 5]));