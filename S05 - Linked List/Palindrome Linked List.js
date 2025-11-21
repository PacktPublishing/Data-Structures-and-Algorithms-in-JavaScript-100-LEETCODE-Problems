/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let n = findLength(head);
    if (n === 1) {
        return true;
    }
    let mid = Math.floor(n/2);
    if (n%2 === 1) {
        mid = Math.floor(n/2) + 1;
    }
    
    let head2 = findNodeAtPos(head, mid);
    let prev = findNodeAtPos(head, mid - 1);
    
    let obj = reverse(head2, prev);
    head2 = obj.head2;
    prev = obj.prev;
    
    let first = head;
    let second = prev.next;
    while (first != null && second !== null) {
        if (first.val !== second.val) {
            return false;
        }
        first = first.next;
        second = second.next;
    }
    
    return true;
};

function findLength(head) {
    let curr = head;
    let length = 0;
    while (curr !== null) {
        length++;
        curr = curr.next;
    }
    
    return length;
}

function findNodeAtPos(head, pos) {
    let curr = head;
    let i = 0;
    while (i < pos && curr !== null) {
        curr = curr.next;
        i++;
    }
    return curr;
}

function reverse(head, prev) {
    a = head;
    b = head.next;
    while (a !== null && b !== null) {
        let temp = b.next;
        b.next = a;
        a = b;
        b = temp;
    }
    head.next = null;
    prev.next = a;
    
    return {
        head2: head,
        prev
    }
}