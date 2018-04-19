/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  if (!root) {
    return null;
  }
  if (root.val >= p.val && root.val <= q.val) {
    return root;
  }
  if (root.val <= p.val && root.val >= q.val) {
    return root;
  } 

  if (root.val > p.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return lowestCommonAncestor(root.right, p, q);
};

class TreeNode {
  constructor (val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let roo = new TreeNode(5);
roo.left = new TreeNode(4);
roo.right = new TreeNode(10);
roo.right.left = new TreeNode(9);
roo.right.right = new TreeNode(11);
let one = new TreeNode(2);
let two = new TreeNode(4.5);
// roo.left.left = one;
// roo.left.right = two;

console.log(lowestCommonAncestor(roo, one, two));