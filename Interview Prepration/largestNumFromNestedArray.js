function findMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) { //n
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function getLargestNumber(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) { // n
        if(Array.isArray(arr[i])) {
            newArr = newArr.concat(getLargestNumber(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    
    let max = findMax(newArr)
    return max;
}

console.log(getLargestNumber([[1, 5, 3, [3,4]], [7, 2,[32,42]], [6, 9, 4]]));