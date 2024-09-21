// Find Ceiling in a sorted array - Done
//     input: arr = [1, 2, 8, 10, 10, 12, 19], key = 5
//     output: 8

function findCeiling(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let ceiling = null;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === key) {
            return arr[mid];
        } else if(key < arr[mid]) {
            ceiling = arr[mid];
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ceiling;
}

console.log(findCeiling([1, 2, 8, 10, 10, 12, 19], 5));