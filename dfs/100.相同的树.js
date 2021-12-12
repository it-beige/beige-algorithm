/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const dfs = (n1, n2) => {
    if (!n1 && !n2) return true
    if (!n1 || !n2) return false
    if (n1.val !== n2.val) return false
    return dfs(n1.left, n2.left) && dfs(n1.right, n2.right)
  }
  return dfs(p, q)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSameTree;
// @after-stub-for-debug-end