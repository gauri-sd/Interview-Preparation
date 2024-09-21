function minSumOfAbsoluteDifferences(arr1, arr2) {
    arr1.sort(function (a, b) { return a - b });
    arr2.sort(function (a, b) { return a - b });
    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        sum += Math.abs(arr1[i] - arr2[i]);
    }
    return sum;
}

console.log(minSumOfAbsoluteDifferences([3, 2, 1], [2, 1, 3]));
console.log(minSumOfAbsoluteDifferences([4, 1, 8, 7], [2, 3, 6, 5]));