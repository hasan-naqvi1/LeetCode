minWindow(s, t);
{
  if (t === "") return "";
  const map = new Map();

  for (const a of t) {
    map.set(a, (map.get(a) || 0) + 1);
  }

  let matched = 0;
  let start = 0;
  let minLen = s.length + 1;
  let subStr = 0;
  for (let endWindow = 0; endWindow < s.length; endWindow++) {
    const right = s[endWindow];
    if (map.has(right)) {
      map.set(right, map.get(right) - 1);
      if (map.get(right) === 0) matched++;
    }
    while (matched === map.size) {
      if (minLen > endWindow - start + 1) {
        minLen = endWindow - start + 1;
        subStr = start;
      }
      const deleted = s[start++];
      if (map.has(deleted)) {
        if (map.get(deleted) === 0) matched--;
        map.set(deleted, map.get(deleted) + 1);
      }
    }
  }
  return minLen > s.length ? "" : s.substring(subStr, subStr + minLen);
}
