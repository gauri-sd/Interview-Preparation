function binSearchR(arr, key, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) {
        return mid;
    } else if (key < arr[mid]) {
        return binSearchR(arr, key, low, mid - 1);
    } else {
        return binSearchR(arr, key, mid + 1, high);
    }
}

let arr = [11,12,13,14,15,16,17,18,19,20];
let key = 14;
let low = 0;
let high = arr.length - 1;

let res = binSearchR(arr, key, low, high);
console.log(res);