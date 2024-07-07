/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [];
  let q = [];
  if (root) {
    q.push(root);
  }

  while (q.length > 0) {
    let right = null;
    const l = q.length;
    for (let i = 0; i < l; i++) {
      const node = q.shift();
      if (node) {
        right = node;
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (right) {
      res.push(right.val);
    }
  }
  return res;
};
