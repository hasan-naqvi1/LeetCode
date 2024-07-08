const networkDelayTime = (times, n, k) => {
  const graph = new Map();

  // Build the graph using an adjacency list
  for (const [u, v, w] of times) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push([v, w]);
  }

  // Initialize distances and the priority queue
  const distances = Array(n + 1).fill(Infinity);
  distances[k] = 0;
  const minHeap = new MinHeap();
  minHeap.insert([0, k]); // [distance, node]

  while (minHeap.size() > 0) {
    const [currentDist, u] = minHeap.extractMin();

    if (currentDist > distances[u]) continue;

    const neighbors = graph.get(u) || [];
    for (const [v, w] of neighbors) {
      const newDist = currentDist + w;
      if (newDist < distances[v]) {
        distances[v] = newDist;
        minHeap.insert([newDist, v]);
      }
    }
  }

  const maxDist = Math.max(...distances.slice(1));
  return maxDist === Infinity ? -1 : maxDist;
};

// MinHeap class for the priority queue
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sinkDown(0);
    }
    return min;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element[0] >= parent[0]) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  _sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[0] < element[0]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] < element[0]) ||
          (swap !== null && rightChild[0] < leftChild[0])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

// Example usage:
const times = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];
const n = 4;
const k = 2;
console.log(networkDelayTime(times, n, k)); // Expected output: 2
