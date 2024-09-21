function lucky_sevens(arr){
    if(arr.length < 3){
        return false;
    }

    let indexArr = [];
    for(let i = 2; i <= arr.length; i++){
        if(arr[i] + arr[i-1] + arr[i-2] === 7) {
            indexArr.push([i, i-1, i-2]);
        }
    }
    return indexArr;
}

let index = lucky_sevens([2, 1, 5, 1, 5, 1, 0]);
console.log(index);