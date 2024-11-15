function containsDuplicate(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            return true;
        }
        obj[arr[i]] = arr[i];
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));