// Merge Two Sorted Linked List - Done
//     input: list1 = 1->3->4, list2 = 1->2->4
//     output 1->1->2->3->4->4

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function mergeLinkedList(list1, list2) {
    let temp = new Node(0);
    tail = temp;
    while(list1 !== null && list2 !== null) {
        if(list1.data <= list2.data) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1 || list2;
    return temp.next;
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(4);

let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(5);
head2.next.next.next.next = new Node(6);

let mergedList = mergeLinkedList(head1, head2);

let head = mergedList;
while(head !== null) {
    console.log(head.data);
    head = head.next;
}