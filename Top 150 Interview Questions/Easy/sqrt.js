// Sqrt(x)
    // Input: x = 4
    // Output: 2

function mySqrt(x) {
    if(x < 2) {
        return x;
    }
    
    let left = 1, right = x;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sqr = mid * mid;
        
        if(sqr === x) {
            return mid;
        } else if(sqr < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

console.log(mySqrt(4));
console.log(mySqrt(8));