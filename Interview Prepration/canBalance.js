/*
Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.
*/

function canBalance(arr) {
    let allSum = 0;
    for(let i = 0; i < arr.length; i++) {
        allSum += arr[i];
    }

    let tSum = allSum/2;

    let cSum = 0;
    for(let i = 0; i < arr.length; i++) {
        cSum += arr[i];
        if(cSum === tSum){
            break;
        }
    }

    if(cSum === tSum) {
        return true;
    } else {
        return false;
    }
}

console.log(canBalance([1, 1, 1, 2, 1]));  
// true
console.log(canBalance([2, 1, 1, 2, 1]));     
// false
console.log(canBalance([10,10]));           
// true
console.log(canBalance([1,2,3,4,10]));
// ?
console.log(canBalance([10,1,2,3,4]));