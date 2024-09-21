// Valid Palindrome - Done
//     input: str = 'A man, a plan, a canal: Panama'
//     output: true

function validPlaindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
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
console.log(validPlaindrome('A man, a plan, a canal: Panama'));