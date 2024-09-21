// Queue Reversal - Done
//     input: queue = [1, 2, 3, 4, 5]
//     output: [5, 4, 3, 2, 1]

function reverseQueue(queue) {
    let stack = [];
    
    while (queue.length > 0) {
        stack.push(queue.shift());
    }

    while(stack.length > 0) {
        queue.push(stack.pop())
    }

    return queue;
}

console.log(reverseQueue([1, 2, 3, 4, 5]));