/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132 模式
 */

class Stack {
  constructor() {
    this.items = []
    this.t = -1
  }

  push(v) {
    this.items[++this.t] = v
  }

  pop() {
    if (this.isEmpty()) return false
    return this.items[this.t--]
  }

  isEmpty() {
    return this.t === -1
  }

  top() {
    return this.items[this.t]
  }

  size() {
    return this.t + 1
  }

  clear() {
    this.t = -1
  }
}

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let s = new Stack
  let min = Number.MIN_SAFE_INTEGER
  // 倒着找 -> 2 3 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < min) return true
    while (!s.isEmpty() && nums[i] > nums[s.top()]) {
      min = nums[s.top()]
      s.pop()
    }
    s.push(i)
  }
  return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = find132pattern;
// @after-stub-for-debug-end