// Array Reverse Using a Loop (In-place) - Done
//     input: arr = [4, 5, 1, 2]
//     outPut: [2, 1, 5, 4]

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

console.log(reverseArray([3, 5, 4, 1, 9]));
console.log(reverseArray([4, 5, 1, 2]));