/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 let nodeToNumbers = (node) => {
   let str = '';
   while (node) {
     str = node.val + str;
     node = node.next;
   }
   return +str;
 }

 var addTwoNumbers = function(l1, l2) {
   let sum = (nodeToNumbers(l1) + nodeToNumbers(l2)) + '';
   let array = sum.split('').map(Number).reverse();
   let newNode = new ListNode(array.splice(0,1)[0]);
   let node = newNode;
   while (array.length) {
     node.next = new ListNode(array.splice(0,1)[0]);
     node = node.next;
   }
   return newNode;
 };

function ListNode (val) {
  this.val = val;
  this.next = null;
}

let list1 = new ListNode(2);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);
let list2 = new ListNode(1);
list2.next = new ListNode(4);
list2.next.next = new ListNode(3);

console.log(nodeToNumbers(list1));
console.log(nodeToNumbers(list2));
console.log(addTwoNumbers(list1, list2));
