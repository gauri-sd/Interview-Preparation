function removeElement (nums, val) {
    console.log("1111111111", nums);
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val) {
            arr.push(nums[i]);
        }
    }
    return arr;
};

console.log(removeElement([3,2,2,3], 3));