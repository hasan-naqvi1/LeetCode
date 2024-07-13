var carFleet = function (target, position, speed) {
  const n = position.length;

  const pairs = position.map((p, i) => [p, speed[i]]);
  pairs.sort((a, b) => b[0] - a[0]);

  let fleet = 0;
  let prevTime = 0;
  for (let i = 0; i < n; i++) {
    const currentTime = (target - pairs[i][0]) / pairs[i][1];
    if (currentTime > prevTime) {
      fleet++;
      prevTime = currentTime;
    }
  }
  return fleet;
};
