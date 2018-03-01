/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  if (t1 === null && t2 === null) {
    return null;
  }
  let newNode;
  if (t1 === null) {
    newNode = new TreeNode(t2.val);
    newNode.left = mergeTrees(null, t2.left);
    newNode.right = mergeTrees(null, t2.right);
  } else if (t2 === null) {
    newNode = new TreeNode(t1.val);
    newNode.left = mergeTrees(t1.left, null);
    newNode.right = mergeTrees(t1.right, null);
  } else {
    newNode = new TreeNode(t1.val + t2.val);
    newNode.left = mergeTrees(t1.left, t2.left);
    newNode.right = mergeTrees(t1.right, t2.right);
  }
  return newNode;
};

const TreeNode = (val) => {
  this.val = val;
  this.left = this.right = null;
};
