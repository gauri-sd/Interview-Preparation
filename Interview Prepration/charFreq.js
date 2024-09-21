function countNum(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }
    return obj;
}

let arr = [1,2,3,1,3,4,5,4];
let res = countNum(arr);
console.log(res);