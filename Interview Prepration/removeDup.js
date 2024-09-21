function removeDuplicateFromSortedArr(arr) {
    // return [...new Set(arr)];
    let obj = {};
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = arr[i];
            newArr.push(arr[i]);
        }
    }
    return newArr;

    // let obj = {};
    // let arr = [];
    // for(let i = 0; i < nums.length; i++) {
    //   if(!obj[nums[i]]) {
    //     obj[nums[i]] = nums[i];
    //     arr.push(nums[i]);
    //   }
    // }
    // return arr;
}

let arr = [1,1,2,2,2,3,3,3,3,4,4,5,5,5,6];
let uniqueArr = removeDuplicateFromSortedArr(arr);
console.log(uniqueArr);


// https://www.humongous.io/app/playground/mongodb/new
// a ?? ''