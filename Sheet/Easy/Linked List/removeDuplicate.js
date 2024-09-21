// Remove Duplicates from an Unsorted Linked List - Done
//     input: linked_list = 12 -> 11 -> 12 -> 21 -> 41 -> 43 -> 21 
//     output: 12 -> 11 -> 21 -> 41 -> 43 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeDuplicate(head) {
    let obj = {};
    let temp = null;
    let current = head;
    
    while(current !== null) {
        if(!obj[current.data]) {
            obj[current.data] = current.data;
            temp = current;
        } else {
            temp.next = current.next;
        }
        current = current.next;
    }
    
    return head;
}

let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);

let newLL = removeDuplicate(head);
head = newLL;
while(head !== null) {
    console.log(head.data);
    head = head.next;
}