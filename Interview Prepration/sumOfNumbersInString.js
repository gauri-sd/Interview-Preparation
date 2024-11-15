function sumOfNumbersInString(str) {
    let sum = 0;
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(str[i])) {
            newStr += str[i];
        } else {
            if(newStr.length === 1) {
                sum += parseInt(newStr);
            }
            newStr = '';
        }
    }
    
    if(newStr.length === 1) {
        sum += parseInt(newStr);
    }
    return sum;
}

console.log(sumOfNumbersInString("a1b2c3")); // 6
console.log(sumOfNumbersInString("a12b2c3"));   // 5
console.log(sumOfNumbersInString("a123b2c34")); //2