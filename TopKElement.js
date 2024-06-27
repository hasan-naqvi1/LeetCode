topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      for (let num of bucket[i]) {
        result.push(num);
        if (result.length === k) return result; // Break out once we have k elements
      }
    }
  }
};
console.log(
  topKFrequent([3, 3, 4, 1, 1, 1, 1, 4, 6, 6, 7, 8, 4, 3, 2, 2, 1, 2], 2)
);
