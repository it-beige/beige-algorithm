/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let ans = []
  if (!digits.length) return ans
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const dfs = (s, idx) => {
    if (idx === digits.length) {
      ans.push(s)
      return
    }

    let letters = map[digits[idx]]
    for (let n of letters) {
      dfs(s + n, idx + 1)
    }
  }

  dfs('', 0)
  return ans
};
// @lc code=end

