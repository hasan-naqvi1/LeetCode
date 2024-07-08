//approach 1 - dfs
const countComponents = (n, edges) => {
  const adjList = new Map();
  const visit = new Set();
  let count = 0;

  // Initialize adjacency list
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  // Fill the adjacency list
  for (const [node1, node2] of edges) {
    adjList.get(node1).push(node2);
    adjList.get(node2).push(node1);
  }

  const dfs = (node) => {
    visit.add(node);

    for (const neighbor of adjList.get(node)) {
      if (!visit.has(neighbor)) {
        dfs(neighbor);
      }
    }
  };

  // Count connected components
  for (let i = 0; i < n; i++) {
    if (!visit.has(i)) {
      count++;
      dfs(i);
    }
  }

  return count;
};

// Appraoch 2 Union Find
const countComponents2 = (n, edges) => {
  const parent = Array(n)
    .fill(0)
    .map((_, index) => index);
  const rank = Array(n).fill(1);
  let count = n;

  for (const [node1, node2] of edges) {
    if (union(node1, node2, parent, rank)) {
      count--; // Successfully merged two components
    }
  }

  return count;
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
