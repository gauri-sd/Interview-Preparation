function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    console.log(str);

    let start = 0;
    let end = str.length - 1;

    while(start < end) {
        if(str[start] !== str[end]) {
            break;
        }
        start++;
        end--;
    }

    if(str[start] !== str[end]) {
       return false;
    } else {
        return true;
    }
}

let str = isPalindrome("0P");
console.log(str);