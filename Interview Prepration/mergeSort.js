function merge(left, right) {
    let leftSize = 0;
    let rightSize = 0;
    let sortedArray = [];

    while(leftSize < left.length && rightSize < right.length) {
        if(left[leftSize] < right[rightSize]) {
            sortedArray.push(left[leftSize]);
            leftSize++;
        } else {
            sortedArray.push(right[rightSize]);
            rightSize++;
        }
    }    

    return sortedArray.concat(left.slice(leftSize), right.slice(rightSize));
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let leftArr = mergeSort(left);
    let rightArr = mergeSort(right);

    return merge(leftArr, rightArr);
}

const unsortedArray = [3, 6, 1, 8, 2, 4, 9, 5, 7];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);