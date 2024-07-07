var goodNodes = function (root) {
  return dfs(root, root.val);
};

var dfs = function (node, maxVal) {
  if (!node) return 0;
  const res = node.val >= maxVal ? 1 : 0;
  maxVal = Math.max(maxVal, node.val);
  return res + dfs(node.left, maxVal) + dfs(node.right, maxVal);
};
