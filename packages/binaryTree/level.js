import { TreeNode } from "./index.js"

/**
 * 
 * @param {TreeNode} root 
 */
export function levelOrder(root) {
  if (root === null) {
    return []
  }
  const queue = [root]
  const res = []
  while (queue.length) {
    const temp = []
    let size = queue.length
    while (size--) {
      /** @type {TreeNode} */ // @ts-ignore
      const node = queue.shift()
      temp.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(temp)
  }
  return res
}

