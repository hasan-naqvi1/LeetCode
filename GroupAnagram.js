function generateKey(str) {
  const count = new Array(26).fill(0);
  for (let char of str) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return count.join("#");
}

function groupAnagrams(strs) {
  const map = new Map();
  for (let str of strs) {
    const key = generateKey(str);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
}
