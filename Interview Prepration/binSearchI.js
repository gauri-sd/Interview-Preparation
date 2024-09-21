function binSearchI(arr, key) {
    let low = 0; 
    let high = arr.length;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === key) {
            return mid;
        }
        if(key < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

let arr = [11,12,13,14,15,16,17,18,19,20];
let key = 14;

let res = binSearchI(arr, key);
console.log(res);