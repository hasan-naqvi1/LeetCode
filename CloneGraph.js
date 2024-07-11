/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var cloneGraph = function (node) {
  const o2n = new Map();
  return dfs(node, o2n);
};
const dfs = (node, o2n) => {
  if (node === null) return null;
  if (o2n.has(node)) return o2n.get(node);
  const copy = new Node(node.val);
  o2n.set(node, copy);
  for (const n of node.neighbors) {
    copy.neighbors.push(dfs(n, o2n));
  }
  return copy;
};
