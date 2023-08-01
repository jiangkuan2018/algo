import { TreeNode, createTreeFromArray, createTreeFromHeight } from "./index.js"

/**
 * 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 * @returns {boolean}
 */
function isEqual(left, right) {
  if (left === null && right === null) {
    return true
  }
  if (left === null || right === null) {
    return false
  }
  if (left.val !== right.val) {
    return false
  }
  // 终止条件 1.都为空 2.有一个为空 3.都不为null但是val不一样
  // 递归 
  // 左树的左子节点 与 右树的右子节点 和 左树的右子节点 与 右树的左子节点
  // @ts-ignore
  return isEqual(left.left, right.right) && isEqual(left.right, right.left)
}
/**
 * @param {TreeNode} root 
 */
export function isSymmetric(root) {
  if (root === null) {
    return true
  }
  // @ts-ignore
  return isEqual(root.left, root.right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
export function hasPathSum(root, targetSum) {
  if (root === null) {
    return false
  }
  const stack = [[root]]
  while (stack.length) {
    const temp = []
    /** @type {TreeNode[]} */ // @ts-ignore
    const nodes = stack.shift()
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      if (node.left === null && node.right === null && node.val === targetSum) {
        return true
      }
      if (node.left) {
        // @ts-ignore
        node.left.val += node.val
        temp.push(node.left)
      }
      if (node.right) {
        // @ts-ignore
        node.right.val += node.val
        temp.push(node.right)
      }
    }
    temp.length && stack.push(temp)
  }
  return false
}

