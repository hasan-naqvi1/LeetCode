const validTree = (numNodes, edges) => {
  if (edges.length !== numNodes - 1) return false; // A valid tree must have exactly numNodes - 1 edges

  const adjList = new Map();
  const visit = new Set();

  // Initialize adjacency list
  for (let i = 0; i < numNodes; i++) {
    adjList.set(i, []);
  }

  // Fill the adjacency list
  for (const [node1, node2] of edges) {
    adjList.get(node1).push(node2);
    adjList.get(node2).push(node1);
  }

  // Check each node for cycles
  if (!dfs(0, -1, adjList, visit)) return false;

  // Check if all nodes are visited (graph is connected)
  return visit.size === numNodes;
};

const dfs = (node, parent, adjList, visit) => {
  if (visit.has(node)) return false; // Cycle detected
  visit.add(node);

  for (const neighbor of adjList.get(node)) {
    if (neighbor === parent) continue; // Skip the parent node
    if (!dfs(neighbor, node, adjList, visit)) return false;
  }

  return true;
};

// Example usage:
const numNodes = 5;
const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];
console.log(validTree(numNodes, edges)); // Expected output: true
