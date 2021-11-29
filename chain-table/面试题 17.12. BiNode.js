/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  //新建一个节点，作为初始空节点的上一个节点
  let preNode = new TreeNode(0);
  const res = preNode;
  const inOrder = root => {
    if (!root) return null;
    inOrder(root.left);
    // 将当前根节点的左节点 赋值为null；
    root.left = null;
    // 上一个节点的右节点指向当前节点 
    preNode.right = root;
    // 更新上一个节点，方便下一步操作
    preNode = root; inOrder(root.right);
  }
  inOrder(root); return res.right;
};