var countSubstrings = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; s++) {
    res += countPali(s, i, i + 1);
    res += countPali(s, i, i);
  }
  return res;
};
const countPali = (s, l, r) => {
  let res = 0;
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    res++;
    l--;
    r++;
  }
  return res;
};
