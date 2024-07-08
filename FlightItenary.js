const findItinerary = (tickets) => {
  const graph = new Map();

  // Build the graph using a map
  for (const [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
  }

  // Use a min-heap to keep destinations sorted
  for (const [from, dests] of graph.entries()) {
    dests.sort();
  }

  const result = [];
  const dfs = (node) => {
    const dests = graph.get(node);
    while (dests && dests.length) {
      dfs(dests.shift());
    }
    result.push(node);
  };

  dfs("JFK");
  return result.reverse();
};
