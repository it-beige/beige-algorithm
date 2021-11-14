/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
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
 * @param {number[] } height
 * @return {number}
 */
var trap = function (height) {
  let s = new Stack
  let ans = 0
  for (let i = 0; i < height.length; i++) {
    while (!s.isEmpty() && height[i] > height[s.top()]) {
      let idx = s.top()
      s.pop()
      if (!s.isEmpty()) {
        // 可以储水的宽度
        let width = i - s.top() - 1
        // height[i] -> 右边柱子的高度
        // height[s.top()] -> 左边柱子的高度
        // height[idx] -> 右边柱子前一个的柱子高度
        // Math.min(height[i], height[s.top()]) 右边到左边的柱子是否形成了凹槽， 
        // 如果1,1,2这种情况，是没有形成凹槽的, 1,0,2这种情况形成了凹槽，可以接到右边距离左边的宽度(2-0-1) * 1
        // min(..) - height[idx] -> 当前计算的的接水量不能把之前计算过的算进去
        let fluteHeight = Math.min(height[i], height[s.top()]) - height[idx]

        ans += width * fluteHeight
      }
    }
    s.push(i)
  }

  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end