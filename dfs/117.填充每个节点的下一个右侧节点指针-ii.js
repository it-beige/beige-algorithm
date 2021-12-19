/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
  if (!root) return null

  const dfs = (root) => {
    if (!root) return null

    // 左节点存在
    if (root.left) {
      if (root.right) {
        // 让左节点next指向右节点
        root.left.next = root.right
        // 让右节点指向右子树的节点, 没有就是null
        root.right.next = dfs(root.next)
      } else {
        root.left.next = dfs(root.next)
      }
    }
    // 左节点不存在, 右节点存在
    else if (root.right) {
      // 让右节点指向右子树的节点, 没有就是null
      root.right.next = dfs(root.next)
    } else {
      return dfs(root.next)
    }

    return root.left || root.right
  }

  connect(dfs(root))
  return root
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = connect;
// @after-stub-for-debug-end