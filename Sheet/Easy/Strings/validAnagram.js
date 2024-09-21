// Valid Anagram - Done
//     input: s = "anagram", t = "nagaram"
//     output: true

function validAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if(str1.length !== str2.length) {
        return false;
    }
    
    let cnt1 = {};
    let cnt2 = {};
    
    for(let char of str1) {
        cnt1[char] = (cnt1[char] || 0) + 1;
    }

    for(let char of str2) {
        cnt2[char] = (cnt2[char] || 0) + 1;
    }
    
    for(let char in cnt1) {
        if(cnt1[char] !== cnt2[char]) {
            return false;
        }
    }
    return true;
}
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));