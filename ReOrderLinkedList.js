/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reorderList = function (head) {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let second = slow.next;
  let prev = (slow.next = null);
  while (second != null) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  let first = head;
  second = prev;
  while (second != null) {
    const t1 = first.next;
    const t2 = second.next;
    first.next = second;
    second.next = t1;
    first = t1;
    second = t2;
  }
};
