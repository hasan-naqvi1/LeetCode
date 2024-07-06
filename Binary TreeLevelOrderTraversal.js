var levelOrder = function (root) {
  const res = [];
  const q = [];
  if (root) {
    q.push(root);
  }
  while (q.length > 0) {
    const val = [];
    const l = q.length;
    for (let i = 0; i < l; i++) {
      const node = q.shift();
      val.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(val);
  }
  return res;
};
