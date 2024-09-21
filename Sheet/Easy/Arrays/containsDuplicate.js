// Contains Duplicate - Done
//     input: arr = [1, 2, 3, 1]
//     output: true
    
function containsDuplicate(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = arr[i];
        } else {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));