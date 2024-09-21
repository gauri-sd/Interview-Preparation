function test_divisors(low, high) {
    let arr = [];
    for(let i = low; i <= high; i++) {
        if(i % 3 === 0) {
            arr.push("div3");
        } else {
            arr.push(i);
        }
    }
    return arr;
}

let num = test_divisors(2, 10);
console.log(num);