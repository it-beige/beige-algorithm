/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

class MyCircularDeque {
  constructor(l) {
    // 队列的可用长度
    this.l = l
    // 队列数量
    this.count = 0
    // 当前队列
    this.queue = new Array(l)
    // 头指针
    this.head = 0
    // 尾指针
    this.tail = 0
  }

  push_back(v) {
    if (this.isFull()) return false
    this.queue[this.tail++] = v
    // 循环队列
    this.tail %= this.l
    this.count++
    return true
  }

  push_front(v) {
    if (this.isFull()) return false
    this.head = (this.head - 1 + this.l) % this.l
    this.queue[this.head] = v
    this.count++
    return true
  }

  pop_back() {
    if (this.isEmpty()) return false
    this.tail = (this.tail - 1 + this.l) % this.l
    this.count--
    return true
  }

  pop_front() {
    if (this.isEmpty()) return false
    this.head++
    this.head %= this.l
    this.count--
    return true
  }

  get_back() {
    if (this.isEmpty()) return false
    return this.queue[(this.tail - 1 + this.l) % this.l]
  }

  get_front() {
    if (this.isEmpty()) return false
    return this.queue[this.head]
  }

  isFull() {
    return this.l === this.k
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }
}


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

  let q = new MyCircularDeque(1000)
  q.push_front('')
  for (let i = 0; i < digits.length; i++) {
    let n = q.size()
    while (n--) {
      let curStr = q.get_front()
      q.pop_front()

      let leeters = map[digits[i]]
      for (let s of leeters) {
        q.push_back(curStr + s)
      }
    }
  }

  while (!q.isEmpty()) {
    let p = q.get_front()
    q.pop_front()
    ans.push(p)
  }
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end