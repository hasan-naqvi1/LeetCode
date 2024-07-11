var combinationSum = function (candidates, target) {
  let res = [];
  let curr = [];
  backTrack(candidates, target, res, curr, 0);
  return res;
};

var backTrack = (candidates, target, res, curr, i) => {
  if (target === 0) res.push([...curr]);
  else if (target < 0 || i >= candidates.length) return;
  else {
    curr.push(candidates[i]);
    backTrack(candidates, target - candidates[i], res, curr, i);
    curr.pop();
    backTrack(candidates, target, res, curr, i + 1);
  }
};
