// Counting Sort - Done
//     input: arr = [4, 2, 2, 8, 3, 3, 1]
//     output: [1, 2, 2, 3, 3, 4, 8]

function countingSort(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    let countArr = new Array(max + 1).fill(0);
    arr.forEach(num => {
        countArr[num]++;
    });
    let i = 0;
    countArr.forEach((numCount, num) => {
        while(numCount > 0) {
            arr[i] = num;
            i++;
            numCount--;
        }
    })
    return arr;
}

const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr));