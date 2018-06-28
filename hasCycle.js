/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    let fast = head.next.next;
    let slow = head.next;
    while (fast && slow) {
        if (fast.val === slow.val) return true;
        if (fast.next === null) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(3);
root.next.next.next = new ListNode(4);
root.next.next.next.next = new ListNode(5);
// root.next.next.next.next.next = root.next.next;

console.log(hasCycle(root));