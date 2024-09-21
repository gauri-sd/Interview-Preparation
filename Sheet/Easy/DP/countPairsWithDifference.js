function countPairsWithDifference(arr, k) {
    let count = 0;
    let obj = {};
    
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i] + k] !== undefined) {
            count++;
        }
        
        if(obj[arr[i] - k] !== undefined) {
            count++;
        }
        
        obj[arr[i]] = true;
    }
    return count;
}

let arr = [1, 5, 3, 4, 2];
let k = 3;
console.log(countPairsWithDifference(arr, k));  // Output: 2