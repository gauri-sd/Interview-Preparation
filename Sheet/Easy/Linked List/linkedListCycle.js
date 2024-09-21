// Linked List Cycle - Done
//     input: 1->2->3->1
//     output: true

    class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function linkedListCycle(current) {
    let fast = current;
    let slow = current;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast === slow) {
            return true;
        }
    }
    return false;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// Create a cycle:
head.next.next.next.next = head;


let isCycle = linkedListCycle(head);
console.log(isCycle);