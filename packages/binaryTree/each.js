import { TreeNode, createTreeFromArray } from "./index.js"

/**
 * 中序遍历
 * @param {TreeNode} root 
 * @param {Array<number | string>} [res=[]] 
 */
export function inorder(root, res = []) {
  root.left && inorder(root.left, res)
  res.push(root.val)
  root.right && inorder(root.right, res)
  return res
}


/**
 * 前序遍历
 * @param {TreeNode} root 
 * @param {Array<number | string>} [res=[]] 
 */
export function preorder(root, res = []) {
  res.push(root.val)
  root.left && preorder(root.left, res)
  root.right && preorder(root.right, res)
  return res
}

/**
 * 
 * @param {TreeNode} root 
 */
export function preorderStack(root) {
  const stack = [root]
  const res = []
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

/**
 * 后序遍历
 * @param {TreeNode} root 
 * @param {Array<number | string>} [res=[]] 
 */
export function postorder(root, res = []) {
  root.left && postorder(root.left, res)
  root.right && postorder(root.right, res)
  res.push(root.val)
  return res
}

/**
 * @param {TreeNode} root 
 */
export function levelOrder(root) {
  const queue = [[root]]
  const res = []
  while (queue.length) {
    const temp = []
    const vals = []
    /** @type {TreeNode[]} */ // @ts-ignore
    const nodes = queue.shift()
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      vals.push(node.val)
      if (node.left) {
        temp.push(node.left)
      }
      if (node.right) {
        temp.push(node.right)
      }
    }
    res.push(vals)
    temp.length && queue.push(temp)
  }
  return res
}
