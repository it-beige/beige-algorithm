/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxCountVal = Number.MIN_SAFE_INTEGER
  const dfs = (root) => {
    if (!root) return 0

    const l = dfs(root.left)
    const r = dfs(root.right)

    let maxVal = l + root.val + r
    // 比较子树中最大的路径总和
    maxCountVal = Math.max(maxVal, maxCountVal)

    // 确定左子树/右子树中路径和最大的那个
    const countVal = root.val + Math.max(0, l, r)

    return countVal < 0 ? 0 : countVal
  }

  dfs(root)
  return maxCountVal
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxPathSum;
// @after-stub-for-debug-end