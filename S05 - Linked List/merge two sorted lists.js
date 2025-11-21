/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let first = list1;
    let second = list2;
    
    let head = null;
    let tail = null;
    
    while (first !== null || second !== null) {
        let nodeToCopy = null;
        if (first !== null && second !== null) {
            if (first.val < second.val) {
                nodeToCopy = first;
                first = first.next;
            }
            else {
                nodeToCopy = second;
                second = second.next;
            }
        }
        else if (first != null) {
            nodeToCopy = first;
            first = first.next;
        }
        else {
            nodeToCopy = second;
            second = second.next;
        }
        let obj = addToList(head, tail, nodeToCopy);
        head = obj.head
        tail = obj.tail;
    }
    
    return head;
};

function addToList(head, tail, nodeToAdd) {
    let node = new ListNode(nodeToAdd.val);
    if (head === null) {
        head = node;
        tail = node;
    }
    else {
        tail.next = node;
        tail = node;
    }
    return { head, tail };
}