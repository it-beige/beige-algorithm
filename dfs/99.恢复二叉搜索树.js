/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // 使用中序遍历，遍历过种中发现后面节点值大于前面的节点就记录
  // 找到两个之后对节点值进行交换
  let first = second = pre = null

  const dfs = (root) => {
    if (!root) return

    dfs(root.left)
    if (pre) {
      if (!first && root.val < pre.val) first = pre
      if (first && root.val < pre.val) second = root
    }
    pre = root
    return dfs(root.right)
  }
  dfs(root)


  // 找到两个错的节点进行交换值
  const swap = (a, b) => {
    let temp = a.val
    a.val = b.val
    b.val = temp
  }
  swap(first, second)
  return root
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = recoverTree;
// @after-stub-for-debug-end