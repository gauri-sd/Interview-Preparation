function firstRepeatedChar(str) {
    let ltrObj = {};
    let iChar = '';
    for(let i = 0; i < str.length; i++) {
        if(ltrObj[str[i]]) {
            iChar = str[i];
            break;
        } else {
            ltrObj[str[i]] = str[i];
        }
    }
    return iChar;
}

let reapetedChar = firstRepeatedChar("fbcdachdgetag");
console.log(reapetedChar);