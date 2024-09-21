function oddball_sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            sum += arr[i];
        }
    }
    return sum;
}

let sum = oddball_sum([1, 2, 3, 4, 5]); 
console.log(sum);