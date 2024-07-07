/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];
  const digMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qprs",
    8: "tuv",
    9: "wxyz",
  };
  if (digits) {
    backTrack(0, "", digits, res, digMap);
  }
  return res;
};

const backTrack = (i, str, digits, res, digMap) => {
  if (str.length === digits.length) {
    res.push(str);
    return;
  }
  for (const c of digMap[digits[i]]) {
    backTrack(i + 1, str + c, digits, res, digMap);
  }
};
