/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head !== null) {
        let { newHead, lastNode } = reverse(head);
        lastNode.next = null;
        return newHead;
    }
    return head;
};

function reverse(current) {
    if (current.next === null) {
        return {
            newHead: current,
            lastNode: current
        };
    }
    else {
        let { newHead, lastNode } = reverse(current.next);
        lastNode.next = current;
        return {
            newHead,
            lastNode: current
        }
    }
}