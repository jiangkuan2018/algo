export class TreeNode {
  /**
   * 树节点
   * @param {number} val 
   * @param {TreeNode | null} left 
   * @param {TreeNode | null} right 
   */
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * 通过数组创建二叉树
 * @param {number[]} arr 
 * @returns {TreeNode}
 */
export function createTreeFromArray(arr) {
  if (arr.length === 0) {
    throw new Error('arguments array is empty')
  }
  // @ts-ignore
  const root = new TreeNode(arr.shift())
  const queue = [root]
  while (queue.length && arr.length) {
    /** @type {TreeNode} */ // @ts-ignore
    const node = queue.shift()
    const leftValue = arr.shift()
    const rightValue = arr.shift()
    if (leftValue) {
      node.left = new TreeNode(leftValue)
      queue.push(node.left)
    }
    if (rightValue) {
      node.right = new TreeNode(rightValue)
      queue.push(node.right)
    }
  }
  return root
}

/**
 * 指定高度 创建一个满二叉树
 * @example height = 3 树的总节点为 Math.pow(2, height) - 1 = 7
 * @param {number} height 
 * @returns {TreeNode}
 */
export function createTreeFromHeight(height) {
  const arr = new Array(Math.pow(2, height) - 1).fill(0).map((v, i) => i + 1)
  return createTreeFromArray(arr)
}
