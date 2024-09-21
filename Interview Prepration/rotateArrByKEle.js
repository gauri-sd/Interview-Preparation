function rotateArr(arr, k){
    let newArr = [];
    for(let i = k+1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    for(let i = 0; i <= k; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(rotateArr([1,2,3,4,5,6,7], 3));