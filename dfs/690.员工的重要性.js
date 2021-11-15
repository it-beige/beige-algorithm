/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
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
  let m = new Map()

  for (let e of employees) {
    m.set(e.id, e)
  }

  const dfs = (id) => {
    let employee = m.get(id)
    let importanceTotal = employee.importance
    let subordinates = employee.subordinates

    for (let id of subordinates) {
      importanceTotal += dfs(id)
    }
    return importanceTotal
  }

  return dfs(id)
};
// @lc code=end

