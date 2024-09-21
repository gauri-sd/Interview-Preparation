// Reverse First K elements of Queue - Done
//     input: queue = [1, 2, 3, 4, 5], k = 3
//     output = [3, 2 , 1, 4, 5]

function reverseFirstKElements(queue, k) {
    let stack = [];
    for(let i = 0; i < k; i++) {
        stack.push(queue.shift());
    }
    
    while(stack.length) {
        queue.push(stack.pop());
    }
    
    let remainingEle = queue.length - k;
    for(let i = 0; i < remainingEle; i++) {
        queue.push(queue.shift());
    }
    return queue;
}

const modifiedQueue = reverseFirstKElements([1, 2, 3, 4, 5], 3);
console.log("Modified Queue:", modifiedQueue);