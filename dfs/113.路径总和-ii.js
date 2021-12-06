/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let ans = []
  const dfs = (root, targetSum, temp = []) => {
    if (!root) return
    temp.push(root.val)
    targetSum -= root.val
    if (!root.left && !root.right && targetSum === 0) {
      ans.push([...temp])
    }
    targetSum > 0 && dfs(root.left, targetSum, temp)
    targetSum > 0 && dfs(root.right, targetSum, temp)
    temp.pop()
  }
  dfs(root, targetSum)
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = pathSum;
// @after-stub-for-debug-end