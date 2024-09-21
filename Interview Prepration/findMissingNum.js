function findMissingNumber(arr) {
    // for(let i = 1; i < arr.length; i++) {
    //     if(!arr.includes(i)) {
    //         return i;
    //     }
    // }

    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }

    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    let missingNum = null;
    let brr = new Array(max);
    for(let i = 0; i < arr.length; i++) {
        brr[arr[i]] = true;
    }

    for(let i = min; i < brr.length; i++){
        if(!brr[i]){
            missingNum = i;
            break;
        }
    }
    return missingNum;
}

let arr = [1, 2, 4, 6, 3, 7, 8];
let res = findMissingNumber(arr);
console.log(res);