// Permute two arrays such that sum of every pair is greater or equal to K - Done
//     input:  a = [2, 1, 3],          input:  a = [1, 2, 2, 1], 
//             b = [ 7, 8, 9 ],                b = [3, 3, 3, 4],
//             k = 10                          k = 5
//     output: true                    output: false

function sumOfPairGreaterEqualK(arr1, arr2, k) {
    arr1 = arr1.sort(function(a,b) {return a-b});
    arr2 = arr2.sort(function(a,b) {return b-a});
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] + arr2[i] < k) {
            return false;
        }
    }
    return true;
}

console.log(sumOfPairGreaterEqualK([2, 1, 3], [7, 8, 9], 10));
console.log(sumOfPairGreaterEqualK([1, 2, 2, 1], [3, 3, 3, 4], 5));