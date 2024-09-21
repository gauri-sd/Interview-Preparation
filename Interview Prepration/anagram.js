function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if(str1.length !== str2.length) {
        return false;
    }

    let charCnt1 = {};
    let charCnt2 = {};

    for(let char of str1) {
        charCnt1[char] = (charCnt1[char] || 0) + 1;
    }

    for(let char of str2) {
        charCnt2[char] = (charCnt2[char] || 0) + 1;
    }

    console.log(charCnt1);
    console.log(charCnt2);

    for(let char in charCnt1) {
        if(charCnt1[char] !== charCnt2[char]) {
            return false
        }
    }
    return true;
}

const string1 = "rat";
const string2 = "car";

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}