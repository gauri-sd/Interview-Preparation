function selectionSort(arr) {
    let n = arr.length;
    let indexOfMin = 0;
    for(let i = 0; i < n; i++) {
        indexOfMin = i;
        for(let j = i; j < n; j++) {
            if(arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexOfMin];
        arr[indexOfMin] = temp;
    }
    return arr;
}

const unsortedArray = [3, 6, 1, 8, 2, 4, 9, 5, 7];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);