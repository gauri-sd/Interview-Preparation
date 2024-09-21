// Find a pair with the given difference - Done
//     input: [5, 20, 3, 2, 50, 80], diff = 78
//     output: [80, 2]

function pairWithGivenDiff(arr, diff) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i] + diff] !== undefined) {
            return [arr[i], arr[i]+diff];
        }
        if(obj[arr[i] - diff] !== undefined) {
            return [arr[i], arr[i]-diff];
        }
        obj[arr[i]] = i
    }
    return -1;
}

console.log(pairWithGivenDiff([5, 20, 3, 2, 50, 80], 78));
console.log(pairWithGivenDiff([90, 70, 20, 80, 50], 45));