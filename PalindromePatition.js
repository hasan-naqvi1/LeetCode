const partition = (s) => {
  const res = [];
  const part = [];
  dfs(0, s, part, res);
  return res;
};
const dfs = (i, s, part, res) => {
  if (i >= s.length) {
    res.push([...part]);
    return;
  }
  for (let j = i; j < s.length; j++) {
    if (isPal(s, i, j)) {
      part.push(s.substring(i, j + 1));
      dfs(j + 1, s, part, res);
      part.pop();
    }
  }
};
const isPal = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
