import { TreeNode } from './index.js'

/**
 * 二叉树前序遍历 递归
 * @param {TreeNode} root 
 * @param {number[]} res
 */
export function preOrderRecursive(root, res = []) {
  res.push(root.val)
  root.left && preOrderRecursive(root.left, res)
  root.right && preOrderRecursive(root.right, res)
  return res
}

/**
 * 二叉树前序遍历 栈
 * @param {TreeNode} root 
 */
export function preOrderStack(root) {
  if (root === null) {
    return []
  }
  const res = []
  const stack = [root] // 先进后出 后进先出
  while (stack.length) {
    /** @type {TreeNode} */ // @ts-ignore
    const node = stack.shift()
    res.push(node.val)
    if (node.right) {
      stack.unshift(node.right)
    }
    if (node.left) {
      stack.unshift(node.left)
    }
  }
  return res
}
