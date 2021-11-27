/*
 * @lc app=leetcode.cn id=1673 lang=javascript
 *
 * [1673] 找出最具竞争力的子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  let stack = [], n = nums.length;
  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0
      && nums[i] < stack[stack.length - 1]
      && n - i > k - stack.length
    ) {
      stack.pop();
    } stack.push(nums[i]);
  }
  while (stack.length > k) stack.pop();
  return stack;
};
// @lc code=end

