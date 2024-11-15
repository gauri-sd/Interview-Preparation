function singleNumber(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    for(let num in obj) {
        if(obj[num] === 1) {
            return num;
        }
    }

    // Using Bit manipulation
    // return nums.reduce((acc, num) => acc ^ num, 0);
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));