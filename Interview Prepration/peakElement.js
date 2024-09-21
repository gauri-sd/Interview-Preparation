function peakElement(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if((mid === 0 || arr[mid] >= arr[mid - 1]) &&
        (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])) {
            return arr[mid];
        }
        
        if(mid > 0 && arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

console.log(peakElement([5]));
console.log(peakElement([5, 10]));
console.log(peakElement([5, 10, 20, 15]));
console.log(peakElement([10, 20, 30, 40, 50]));