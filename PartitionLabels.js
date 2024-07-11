var partitionLabels = function (s) {
  const last = new Map();
  const res = [];
  const l = s.length;

  for (let i = 0; i < l; i++) {
    last.set(s[i], i);
  }

  let curLength = 0;
  let maxPos = 0;
  for (let i = 0; i < l; i++) {
    maxPos = Math.max(maxPos, last.get(s[i]));
    curLength++;
    if (maxPos === i) {
      res.push(curLength);
      curLength = 0;
    }
  }
  return res;
};
