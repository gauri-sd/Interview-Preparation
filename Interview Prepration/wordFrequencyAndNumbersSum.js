function wordFreqAndNumSum(str) {
    str = str.toUpperCase();
    let obj = {};
    let word = '';
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            word += str[i];
        } else if(word) {
            if(!isNaN(word)) {
                sum += parseInt(word);
            }
            obj[word] = (obj[word] || 0) + 1;
            word = '';
        }
    }
    if(word) {
        if(!isNaN(word)) {
            sum += parseInt(word);
        }
        obj[word] = (obj[word] || 0) + 1;
    }
    return {obj, sum};
}

console.log(wordFreqAndNumSum('I I LOVE LOVE TO TO 123 WORK WORK WORK HARD HARD AND 123 AND SMART SMART 123 SMART SMART 123'));