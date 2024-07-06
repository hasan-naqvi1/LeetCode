var lowestCommonAncestor = function (root, p, q) {
  while (true) {
    if (root.val < p.val && root.val < q.val) root = root.right;
    else if (root.val > p.val && root.val > q.val) root = root.left;
    else return root;
  }
};
