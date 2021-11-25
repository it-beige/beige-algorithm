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
var diameterOfBinaryTree = function (root) {
  let ans = 0
  const dfs = (root) => {
    if (!root) return 0
    let l = dfs(root.left)
    let r = dfs(root.right)
    ans = Math.max(l + r, ans)
    return Math.max(l + 1, r + 1)
  }

  dfs(root)
  return ans
};