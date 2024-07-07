/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  backTrack([], 0, target, candidates, res);
  return res;
};
const backTrack = (curr, pos, target, candidates, res) => {
  if (target === 0) {
    res.push([...curr]);
    return;
  }
  if (target < 0) return;
  let prev = -1;
  for (let i = pos; i < candidates.length; i++) {
    if (candidates[i] === prev) {
      continue;
    }
    curr.push(candidates[i]);
    backTrack(curr, i + 1, target - candidates[i], candidates, res);
    curr.pop();
    prev = candidates[i];
  }
};
