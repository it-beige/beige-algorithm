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


/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  let q = new MyCircularDeque(2000)
  let m = new Map()

  for (let n of employees) {
    // 记录当前员工的直系下属
    m.set(n.id, n)
  }

  q.push_back(id)
  let ans = 0
  while (!q.isEmpty()) {
    let id = q.get_back()
    q.pop_back()

    let p = m.get(id)
    ans += p.importance
    p.subordinates.forEach(id => q.push_back(id))
  }
  return ans
};