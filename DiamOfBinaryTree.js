let maxDiam = 0;

const dfs = (node) => {
  if (!node) return 0;

  let left = dfs(node.left);
  let right = dfs(node.right);

  maxDiam = Math.max(maxDiam, left + right);

  return 1 + Math.max(left, right);
};

dfs(root);
return maxDiam;
