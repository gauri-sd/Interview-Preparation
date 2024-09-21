function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeList(num) {
    if(num <= 1) {
        return false;
    }

    let arr = [];
    for(let i = 2; i <= num; i++) {
        let isP = isPrime(i);
        if(isP) {
            arr.push(i);
        }
    }
    return arr;
}

const num = 13;
let listP = primeList(num);
console.log(listP);