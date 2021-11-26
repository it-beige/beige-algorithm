/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  // 先记录每个字串的出现次数
  let cnts = new Map()
  for (let n of s) {
    if (cnts.has(n)) {
      cnts.set(n, cnts.get(n) + 1)
    } else {
      cnts.set(n, 1)
    }
  }

  // 记录不符合条件字符(也就是把符合条件的子串隔开的字符位置)
  let splits = []
  for (let i = 0; i < s.length; i++) {
    if (cnts.get(s[i]) < k) {
      splits.push(i)
    }
  }
  if (!splits.length) return s.length
  let pre = ans = len = 0
  splits.push(s.length)
  for (let idx of splits) {
    len = idx - pre
    if (len >= k) {
      ans = Math.max(
        ans,
        longestSubstring(s.substr(pre, len), k)
      )
    }
    pre = idx + 1
  }
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestSubstring;
// @after-stub-for-debug-end