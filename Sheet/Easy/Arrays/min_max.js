// Maximum & Minimum Element in an Array - Done
//     input: arr = [22, 14, 8, 17, 35, 3]
//     output: { min: 3, max: 35 }
 
function findMaxAndMin(arr) {
    let min = arr[0];
    let max = arr[0];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return {min, max};
}

console.log(findMaxAndMin([3, 5, 4, 1, 9]));
console.log(findMaxAndMin([22, 14, 8, 17, 35, 3]));