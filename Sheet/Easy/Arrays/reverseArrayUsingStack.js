function reverseArray(arr) {
    let stack = [];
    for(let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for(let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
    return arr;
}

console.log(reverseArray([3, 5, 4, 1, 9]));
console.log(reverseArray([4, 5, 1, 2]));