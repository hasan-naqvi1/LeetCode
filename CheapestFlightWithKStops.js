var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = new Array(n).fill(Infinity);
  prices[src] = 0;

  for (let i = 0; i < k + 1; i++) {
    const tempP = [...prices];
    for (const flight of flights) {
      const s = flight[0];
      const d = flight[1];
      const p = flight[2];

      if (prices[s] === Infinity) continue;
      if (prices[s] + p < tempP[d]) tempP[d] = prices[s] + p;
    }
    prices = tempP;
  }
  return prices[dst] === Infinity ? -1 : prices[dst];
};
