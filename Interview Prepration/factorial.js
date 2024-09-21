function fact(n) {
    if(n === 0) {
        return 1;
    }
    return n * fact(n-1);
}

let res = fact(5);
console.log(res);