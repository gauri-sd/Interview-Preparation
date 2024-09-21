// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

let str = ["flower", "flow", "flight"];

var longestCommonPrefix = function (str) {
  let prefix = str[0];
  for (let i = 1; i <= str.length - 1; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(str));

///////////////////////////    IMP INFO    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let str1 = ["flower", "flow", "flight"];
const a1 = str[0];
const b1 = str[1];
console.log(a1.indexOf(b1)); // output is  0

let str2 = ["flow", "flower", "flight"];
const a2 = str[0];
const b2 = str[1];
console.log(a2.indexOf(b2)); // output is  -1 WHY?

// Since "flow" is found at the beginning of "flower", indexOf() returns 0.
// In the second case, "flower" is not a prefix of "flow", so indexOf() returns -1.

// The indexOf() method checks if the specified value(in this case, string b) exists
// within the string(in this case, string a) starting
// from the beginning.If it doesn't find the specified value within the string, it returns -1.
