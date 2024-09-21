// Search Insert Position
    // Input: nums = [1,3,5,6], target = 5
    // Output: 2

function searchInsertPosition(arr, target) {
    let left = 0; 
    let right = arr.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
    
console.log(searchInsertPosition([1,3,5,6], 5));