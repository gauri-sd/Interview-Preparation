// Searching in an array where adjacent differ by at most k  - Done
//     input: arr = [4, 5, 6, 7, 6], k = 1, x = 6
//     output: 2

function searchXByK(arr, k, x) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] === x) {
            return i;
        }
        
        let ans = Math.abs(arr[i] - x) / k;
        let max = 1;
        if(ans > max) {
            max = ans
        }
        i+= max;
    }
    return -1;
}

console.log(searchXByK([4, 5, 6, 7, 6], 1, 6));
console.log(searchXByK([20, 40, 50, 70, 70, 60], 20, 60));