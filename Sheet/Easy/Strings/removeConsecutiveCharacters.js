// Remove Consecutive Characters - Done
//     input: str = 'aabaa'
//     output: aba

function removeConsecutiveCharacters(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i+1] !== str[i]) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(removeConsecutiveCharacters("aabb"));
console.log(removeConsecutiveCharacters("aabaa"));