function revNum(n) {
    console.log(n);
    let digit = 0, rev = 0;
    while(n != 0) {
        digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n/10);
    } 
    return rev;
}

let num = revNum(123);
console.log(num);