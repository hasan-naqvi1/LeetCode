const foreignDictionary = (words) => {
  const adj = new Map();

  // Initialize the adjacency list
  words.forEach((word) => {
    for (let char of word) {
      if (!adj.has(char)) adj.set(char, new Set());
    }
  });

  // Build the graph by comparing adjacent words
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.startsWith(w2)) return "";

    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        adj.get(w1[j]).add(w2[j]);
        break;
      }
    }
  }

  const state = new Map(); // 0 = unvisited, 1 = visiting, 2 = visited
  const res = [];

  // Perform DFS for each node
  for (let char of adj.keys()) {
    if (!state.has(char) && dfs(char, adj, state, res)) {
      return ""; // Found a cycle
    }
  }

  return res.reverse().join("");
};

// Helper function for DFS
const dfs = (char, adj, state, res) => {
  if (state.get(char) === 1) return true; // Found a cycle
  if (state.get(char) === 2) return false; // Already visited

  state.set(char, 1); // Mark as visiting
  for (let neighChar of adj.get(char)) {
    if (dfs(neighChar, adj, state, res)) return true;
  }
  state.set(char, 2); // Mark as visited
  res.push(char);
  return false;
};
