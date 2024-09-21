
function isPallindrone(num){
        let nums = num.toString()
        let left = 0;
        let right = nums.length-1;
        
        while(left < right){
            if(nums[left] !== nums[right]){
                return false
            }
            left++;
            right--;
        }
        return true;
}

function findClosest(n){
    
    let num = parseInt(n)
    let lowerCLoset = num - 1;
    let higherCLoset = num + 1;
    while(true){
        if(isPallindrone(lowerCLoset)){
            return lowerCLoset
        }else if(isPallindrone(higherCLoset)){
            return higherCLoset
        }
        higherCLoset++
        lowerCLoset--;
    }
}

console.log(findClosest(123))

