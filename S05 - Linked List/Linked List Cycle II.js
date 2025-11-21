/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head, fast = head;
  let insPoint = null;

  while (true) {
    if (fast === null || fast.next === null) {
      return null;
    }
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      insPoint = slow;
      break;
    }
  }

  let start = head;
  while (start !== insPoint) {
    start = start.next;
    insPoint = insPoint.next;
  }

  return start;
};
