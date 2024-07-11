var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  const l = prices.length;
  let hold = -prices[0];
  let sell = 0;
  let coolDown = 0;
  for (let i = 1; i < l; i++) {
    let pHold = hold;
    let pSell = sell;
    let pCool = coolDown;
    hold = Math.max(pHold, pCool - prices[i]);
    sell = pHold + prices[i];
    coolDown = Math.max(pCool, pSell);
  }
  return Math.max(sell, coolDown);
};
