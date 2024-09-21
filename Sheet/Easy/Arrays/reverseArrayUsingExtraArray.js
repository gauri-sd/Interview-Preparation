function reverseArray(arr) {
    let revArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        revArr.push(arr[i]);
    }
    return revArr;
}

console.log(reverseArray([3, 5, 4, 1, 9]));
console.log(reverseArray([4, 5, 1, 2]));