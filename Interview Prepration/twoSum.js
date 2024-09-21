// [1,2,3,4,5]
// 6
//[1,3]

// function twoSum(target, array) {
//     const twoSum = {};
//     const possiblePairs = [];
//     for(let i = 0; i < array.length; i++) {
//         const targetValue = target - array[i];
//         console.log(twoSum, array[i], targetValue, twoSum[targetValue]);
//         if(twoSum[targetValue] !== undefined) {
//             possiblePairs.push([twoSum[targetValue], i]);
//             // return [twoSum[targetValue], i];
//         } else {
//             twoSum[array[i]] = i;
//         }
//     }
//     return possiblePairs;
// }


function twoSum(targetVal, arr) {
    let sumObj = {};
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let targetValue = targetVal - arr[i];
        if(sumObj[targetValue] !== undefined) {
            newArr.push([sumObj[targetValue], i]);
        } else {
            sumObj[arr[i]] = i;
        }
    }
    return newArr;
}
console.log(twoSum(6, [1,2,3,4,5]));



