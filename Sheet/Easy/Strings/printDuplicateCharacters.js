// Print all the duplicate characters in a string - Done
//     input: S = “geeksforgeeks”
//     output: e, count = 4
//             g, count = 2
//             k, count = 2
//             s, count = 2
            
function printDuplicateChar(str) {
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    for(let char in obj) {
        if(obj[char] > 1) {
            console.log(char +', count = '+ obj[char]);
        }
    }
    return obj;
}

console.log(printDuplicateChar("geeksforgeeks"));