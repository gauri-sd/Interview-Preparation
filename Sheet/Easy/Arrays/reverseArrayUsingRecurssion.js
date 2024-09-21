function reverseArray(arr, start, end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    if(start < end) {
        reverseArray(arr, start+1, end-1);
    }
    return arr;
}

let arr1 = [3, 5, 4, 1, 9];
let start1 = 0;
let end1 = arr1.length - 1;
console.log(reverseArray(arr1, start1, end1));
let arr2 = [4, 5, 1, 2];
let start2 = 0;
let end2 = arr2.length - 1;
console.log(reverseArray(arr2, start2, end2));