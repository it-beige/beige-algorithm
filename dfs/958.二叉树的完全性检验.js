/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function (root) {
  // 节点个数
  let n = getRootCount(root)
  if (n === 0) return false
  /* 
    1 -> 1/ 2-> 2/ 3 -> 4
    根据二叉数的递推出 每个层级h)对应的是2的h次方
    m: 当前层级节点数量
    cnt: 所算层级的节点 

    当前层级及前面层级节点的总数量为 2 * m - 1
  */
  let m = 1, cnt = 1
  while (cnt + 2 * m < n) {
    m *= 2
    cnt += m
  }
  return dfs(root, n, m)
};

// 获取当前数的节点个数
function getRootCount(root) {
  if (!root) return 0
  return getRootCount(root.left) + getRootCount(root.right) + 1
}

function dfs(root, n, m) {
  if (!root) {
    return n === 0
  }
  if (n === 0) return false
  if (n === 1) {
    return (!root.left && !root.right)
  }

  //  当前层级及前面层级节点的总数量
  let k = 2 * m - 1
  // n - k -> 剩余的节点数量，m -> 下一层左边数最大的节点数量
  let l = Math.min(m, n - k)
  let r = n - k - l

  return dfs(root.left, (k - 1) / 2 + l, m / 2)
    && dfs(root.right, (k - 1) / 2 + r, m / 2)
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = isCompleteTree;
// @after-stub-for-debug-end