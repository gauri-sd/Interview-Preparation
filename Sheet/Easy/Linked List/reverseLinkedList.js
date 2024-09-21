// Reverse Linked List - Done
//     input: 1->2->3->4->5
//     output: 5->4->3->2->1

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }    
}

function reverseLinkedList(current) {
    let temp = null;
    let prev = null;
    
    while(current !== null) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let revLL = reverseLinkedList(head);
let current = revLL;

while(current !== null) {
    console.log(current.data);
    current = current.next;
}