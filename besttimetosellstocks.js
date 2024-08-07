var maxProfit = function (prices) {
  let maxCur = 0,
    maxSoFar = 0;

  for (let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]));
    maxSoFar = Math.max(maxSoFar, maxCur);
  }

  return maxSoFar;
};
