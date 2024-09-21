function bubbleSort(arr) {
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const unsortedArray = [3, 6, 1, 8, 2, 4, 9, 5, 7];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);