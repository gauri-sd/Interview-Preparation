function searchInRotatedArray(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        if(arr[start] === key) {
            return start;
        }  
        if(arr[end] === key) {
            return end;
        }
        start++;
        end--;
    }
    return -1;
}

console.log(searchInRotatedArray([4,5,6,7,0,1,2], 0));
console.log(searchInRotatedArray([4,5,6,7,0,1,2], 3));