/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var kthSmallest = function (root, k) {
  let stack = [];

  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    k--;
    if (k === 0) return root.val;
    root = root.right;
  }
};
