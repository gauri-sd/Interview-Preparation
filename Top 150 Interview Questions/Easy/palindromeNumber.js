// Palindrome Number
    // Input: x = -121
    // Output: false

function palindromeNumber(n) {
    if(n < 0) {
        return false;
    }

    let temp = n;
    let rev = 0;
    let digit = 0;

    while(n !== 0) {
        n = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    return (temp === rev);
}

console.log(palindromeNumber(-121));
console.log(palindromeNumber(121));