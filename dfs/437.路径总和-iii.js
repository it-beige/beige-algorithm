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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const countPath = (root) => {
    if (!root) return 0

    const dfs = (root, s) => {
      if (!root) return 0
      let ans = root.val === s
      ans += dfs(root.left, s - root.val)
      ans += dfs(root.right, s - root.val)
      return ans
    }

    return dfs(root, targetSum) + countPath(root.left) + countPath(root.right)

  }
  return countPath(root)
};