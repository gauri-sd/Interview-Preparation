// Implement two Stacks in an Array - Done
//     input:  push1(5)
//             push1(10)
//             push2(15)
//             push2(20)

//             pop1()
//             pop2();

//             Stack 1: 5 10
//             Stack 2: 20 15

//     output: Stack 1: 5
//             Stack 2: 15

const size = 10;
const array = new Array(size).fill(null);

let top1 = -1;
let top2 = size;

function push1(value) {
    if (top1 < top2 - 1) {
        array[++top1] = value;
    } else {
        console.log("Stack Overflow for Stack 1");
    }
}

function push2(value) {
    if (top1 < top2 - 1) {
        array[--top2] = value;
    } else {
        console.log("Stack Overflow for Stack 2");
    }
}

function pop1() {
    if (top1 >= 0) {
        const value = array[top1];
        array[top1--] = null;
        console.log("v1111", value);
        return value;
    } else {
        console.log("Stack Underflow for Stack 1");
        return null;
    }
}

function pop2() {
    if (top2 < size) {
        const value = array[top2];
        array[top2++] = null;
        console.log("v22222", value);
        return value;
    } else {
        console.log("Stack Underflow for Stack 2");
        return null;
    }
}

function displayStacks() {
    console.log("Stack 1:", array.slice(0, top1 + 1).join(" "));
    console.log("Stack 2:", array.slice(top2, size).join(" "));
}

push1(5);
push1(10);
push2(15);
push2(20);

console.log("Initial Stacks:");
displayStacks();

pop1();
pop2();

console.log("After popping one element from each stack:");
displayStacks();