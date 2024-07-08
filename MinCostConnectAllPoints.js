const minCostConnectPoints = (points) => {
  const n = points.length;
  const minDist = Array(n).fill(Infinity);
  const visited = new Set();
  const pq = new MinHeap();

  // Start from the first point
  minDist[0] = 0;
  pq.insert([0, 0]); // [cost, point index]

  let totalCost = 0;

  while (visited.size < n) {
    const [cost, u] = pq.extractMin();
    if (visited.has(u)) continue;

    visited.add(u);
    totalCost += cost;

    for (let v = 0; v < n; v++) {
      if (!visited.has(v)) {
        const newCost =
          Math.abs(points[u][0] - points[v][0]) +
          Math.abs(points[u][1] - points[v][1]);
        if (newCost < minDist[v]) {
          minDist[v] = newCost;
          pq.insert([newCost, v]);
        }
      }
    }
  }

  return totalCost;
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
}
