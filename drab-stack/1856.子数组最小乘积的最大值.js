/*
 * @lc app=leetcode.cn id=1856 lang=javascript
 *
 * [1856] 子数组最小乘积的最大值
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

  top() {
    return this.items[this.t]
  }

  isEmpty() {
    return this.t === -1
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
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  let l = new Array(nums.length).fill(-1)
  let r = new Array(nums.length).fill(nums.length)
  let s = new Stack

  for (let i = 0; i < nums.length; i++) {
    while (!s.isEmpty() && nums[s.top()] >= nums[i]) {
      s.pop()
    }
    if (s.size() === 0) {
      l[i] = -1
    } else {
      l[i] = s.top()
    }
    s.push(i)
  }

  while (!s.isEmpty()) {
    s.pop()
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    while (!s.isEmpty() && nums[s.top()] >= nums[i]) {
      s.pop()
    }
    if (s.size() === 0) {
      r[i] = nums.length
    } else {
      r[i] = s.top()
    }
    s.push(i)
  }

  let sums = []
  sums[0] = 0
  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = nums[i] + sums[i]
  }
  let ans = BigInt(0)
  for (let i = 0; i < nums.length; i++) {
    let total = BigInt(nums[i]) * BigInt(sums[r[i]] - sums[l[i] + 1])
    if (total > ans) {
      ans = total
    }
  }
  return Number(ans % BigInt((Math.pow(10, 9) + 7)))
};
// @lc code=end

