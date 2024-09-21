// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "". 
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
      const currentStr = strs[i];
      let j = 0;
      
      // Compare characters of the current string with the prefix
      while (j < prefix.length && j < currentStr.length && prefix[j] === currentStr[j]) {
        j++;
      }
      
      // Update the prefix to the common part
      prefix = prefix.slice(0, j);
      
      // If the prefix becomes empty, there's no common prefix
      if (prefix === "") {
        return "";
      }
    }
    
    return prefix;
  }
  
  // Example usage:
  const strs = ["flower", "flow", "flight"];
  const result = longestCommonPrefix(strs);
  console.log(result); // Output: "fl"
  