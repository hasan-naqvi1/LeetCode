const findRedundantConnection = (edges) => {
  const n = edges.length;
  const parent = Array(n + 1)
    .fill(0)
    .map((_, index) => index);
  const rank = Array(n + 1).fill(1);

  for (const [node1, node2] of edges) {
    if (!union(node1, node2, parent, rank)) {
      return [node1, node2];
    }
  }
};

const find = (node, parent) => {
  if (parent[node] !== node) {
    parent[node] = find(parent[node], parent); // Path compression
  }
  return parent[node];
};

const union = (node1, node2, parent, rank) => {
  const root1 = find(node1, parent);
  const root2 = find(node2, parent);

  if (root1 !== root2) {
    if (rank[root1] > rank[root2]) {
      parent[root2] = root1;
    } else if (rank[root1] < rank[root2]) {
      parent[root1] = root2;
    } else {
      parent[root2] = root1;
      rank[root1] += 1;
    }
    return true;
  }
  return false;
};

// Example usage:
const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
console.log(findRedundantConnection(edges)); // Expected output: [2, 3]
