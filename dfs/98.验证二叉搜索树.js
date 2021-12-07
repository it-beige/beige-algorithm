/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = Number.MIN_SAFE_INTEGER
  const dfs = (root) => {
    if (!root) return true

    if (!dfs(root.left)) {
      return false
    }

    if (root.val <= pre) {
      return false
    }

    pre = root.val
    return dfs(root.right)
  }
  return dfs(root)
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end