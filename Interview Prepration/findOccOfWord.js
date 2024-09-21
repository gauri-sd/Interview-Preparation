function findOccuranceOfWord(str, word) {
    for(let i = 0; i < str.length; i++) {
       let j = 0;
       while(j < word.length && str[i + j] === word[j]) {
           j++;
       }

       if(j === word.length) {
           return i;
       }
    }
    return -1;
};

console.log(findOccuranceOfWord("sadbutsad", "sad"));