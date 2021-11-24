class Stack {
  constructor() {
    this.stack = []
    this.t = -1
  }

  // 入栈
  push(v) {
    this.t++
    return this.stack[this.t] = v
  }
  // 出栈
  pop() {
    if (this.isEmpty()) return
    return this.stack[this.t--]
  }

  top() {
    return this.stack[this.t]
  }
  // 判空
  isEmpty() {
    return this.t === -1
  }
  // 栈的大小
  size() {
    return this.t + 1
  }
}



/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let s = new Stack()
  for (let n of nums) {
    if (s.isEmpty() || n === s.top()) {
      s.push(n)
    } else {
      s.pop()
    }
  }

  return s.top()
};