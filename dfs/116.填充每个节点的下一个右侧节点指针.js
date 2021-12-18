/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const dfs = (root) => {
    if (!root) return
    let l = root.left
    let r = root.right

    while (l) {
      l.next = r
      l = l.right
      r = r.left
    }
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return root
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = connect;
// @after-stub-for-debug-end