// function strRev(str) {
//     let start = 0;
//     let end = str.length - 1;
//     // let temp = null;
//     console.log(start, end);
//     while(start <= end) {
//         let temp = str[end];
//         str[end] = str[start];
//         str[start] = temp;
        
//         console.log(temp, str[start], str[end]);
//         start++;
//         end--;
//     }
//     return str;
// }

let rev = stringReversal("abcdefghi");
console.log(rev);

function stringReversal(input) {
    let reversedString = '';
    const stringLength = input.length;
    for(let i = stringLength-1; i >=0 ; i--) {
        reversedString += input[i];
    }
    return reversedString;
}

let str = "Good Morning Gauri";

function strRev1(str) {
    let splitStr = str.split(' ');
    let rev = splitStr.reverse();
    let newStr = rev.join(' ');
    return newStr;
}

let str1 = strRev1(str);
console.log(str1); //Gauri Morning Good

function strRev2(str) {
    let splitStr = str.split(' ');
    let words = splitStr.map(word => {
        return word.split('').reverse().join('');
    });
    let newStr = words.join(' ');
    return newStr;
}

let str2 = strRev2(str);
console.log(str2);