const { findSourceMap } = require("module");

function severalArrSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

let arr = severalArrSum([[3, 2], [1], [4, 12]]);
console.log(arr);