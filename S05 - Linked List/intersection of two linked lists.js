/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    m = findLength(headA);
    n = findLength(headB);
    let fp = headA;
    let sp = headB;
    
    if (m <= n) {
        for (let i = 0; i < n - m; i++) {
            sp = sp.next;
        }
    }
    else {
        for(let i = 0; i < m - n; i++) {
            fp = fp.next;
        }
    }
    
    while (fp !== null) {
        if (fp == sp) {
            return fp;
        }
        fp = fp.next;
        sp = sp.next;
    }
    
    return null;
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