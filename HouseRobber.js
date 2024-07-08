const rob = (n) => {
  let r1 = 0;
  let r2 = 0;
  for (const n of nums) {
    const temp = Math.max(n + r1, r2);
    r1 = r2;
    r2 = temp;
  }
  return r2;
};
