//Approach 1 - Pattern Matching BFS
const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const neighbors = {};
  wordSet.add(beginWord);

  for (const word of wordSet) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!neighbors[pattern]) {
        neighbors[pattern] = [];
      }
      neighbors[pattern].push(word);
    }
  }

  const queue = [[beginWord, 1]];
  const visit = new Set([beginWord]);

  while (queue.length > 0) {
    const [currentWord, depth] = queue.shift();
    if (currentWord === endWord) return depth;

    for (let i = 0; i < currentWord.length; i++) {
      const pattern = currentWord.slice(0, i) + "*" + currentWord.slice(i + 1);

      for (const neighbor of neighbors[pattern]) {
        if (!visit.has(neighbor)) {
          visit.add(neighbor);
          queue.push([neighbor, depth + 1]);
        }
      }
    }
  }

  return 0;
};
//Approach 2 simple BFS
const ladderLength2 = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];
  const visit = new Set([beginWord]);

  while (queue.length > 0) {
    const [currentWord, depth] = queue.shift();
    if (currentWord === endWord) return depth;

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // 'a' to 'z'
        const newWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);
        if (wordSet.has(newWord) && !visit.has(newWord)) {
          visit.add(newWord);
          queue.push([newWord, depth + 1]);
        }
      }
    }
  }

  return 0;
};
