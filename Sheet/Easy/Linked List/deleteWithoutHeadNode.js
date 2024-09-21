// Given only a pointer/reference to a node to be deleted in a singly linked list, how do you delete it? / Delete without head node - Done
//     input: 1->2->3->4, nodeToBeDeleted = 2
//     output: 1->3->4

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteNode(current) {
    if(current !== null && current.next !== null) {
        current.data = current.next.data;
        current.next = current.next.next;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

let nodeToBeDeleted = head.next;
deleteNode(nodeToBeDeleted);

while(head !== null) {
    console.log(head.data);
    head = head.next;
}