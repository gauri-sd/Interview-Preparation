// Longest Common Prefix - Done
//     input: strs = ["flower","flow","flight"]
//     output: "fl"

function longestCommonPrefix(str) {
    let prefix = str[0];
    for(let i = 1; i < str.length; i++){
        let currentStr = str[i];
        let j = 0;
        while(j < currentStr.length && j < prefix.length && prefix[j] === currentStr[j]) {
            j++;
        }
        prefix = prefix.slice(0, j);
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));