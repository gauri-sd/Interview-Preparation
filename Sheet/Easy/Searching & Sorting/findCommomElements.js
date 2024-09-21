// Find common elements in three sorted arrays - Done
//     input: A = [1, 5, 10, 20, 30] , B = [5, 13, 15, 20], C = [5, 20]
//     output: [5, 20] 

function findCommonElements(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    let result = [];
    
    while(i < arr1.length && j < arr2.length && k < arr3.length) {
        if(arr1[i] === arr2[j] && arr2[j]=== arr3[k]) {
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if(arr1[i] < arr2[j]) {
            i++;
        } else if(arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return result;
}

console.log(findCommonElements([1, 5, 10, 20, 30], [5, 13, 15, 20], [5, 20]));