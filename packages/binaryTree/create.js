export class TreeNode {
  /**
   * 树节点
   * @param {number | string} val 
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
 * @param {Array<number | string | null>} arr 
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
 * 
 * @param {number[]} arr 
 * @param {number} index 
 */
export function createTreeFromArray2(arr, index = 0) {
  if (index < arr.length) {
    if (arr[index] === null) {
      return null
    }
    const node = new TreeNode(arr[index])
    node.left = createTreeFromArray2(arr, 2 * index + 1)
    node.right = createTreeFromArray2(arr, 2 * index + 2)
    return node
  }
  return null
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

// /**
//  * 
//  * @param {number[]} data 
//  */
// function evaluate(data) {
//   const p1 = getAllAllowPut(data, BLACK)
//   const p2 = getAllAllowPut(data, WHITE)
//   if (p1.length === 0 && p2.length === 0) {
//     const b = data.filter(d => d === BLACK).length
//     const w = data.filter(d => d === WHITE).length
//     return (b - w) * 10
//   }
//   return (p1.length - p2.length) * 10
// }

// /**
//  * 
//  * @param {number[]} data 
//  * @param {number} turn 
//  * @param {number} depth 
//  * @param {number} maxDepth 
//  * @param {number | null} ab 
//  * @returns {number}
//  */
// function search(data, turn, depth, maxDepth, ab = null) {
//   const poss = getAllAllowPut(data, turn) // AI回合所有可能的落子点
//   const isSearchMax = !!(depth % 2) // 奇数层找最大值
//   let v = isSearchMax ? -Infinity : Infinity // 返回的默认值
//   const opTurn = turn === BLACK ? WHITE : BLACK

//   if (poss.length <= 0) { // 本轮计算没有可落子的点
//     if (getAllAllowPut(data, opTurn).length <= 0) { // 对手也没有可落子的点
//       return evaluate(data) // 返回最终的盘面估值
//     } else {
//       return search(data, opTurn, depth + 1, maxDepth, ab)
//     }
//   }
//   if (depth > maxDepth) {
//     return evaluate(data)
//   }
//   let pidx = -1
//   for (let i = 0; i < poss.length; i++) {
//     const idx = poss[i]
//     const x = idx % 8
//     const y = Math.floor(idx / 8)
//     const aw = checkStone(data, turn, x, y)
//     if (aw && aw.length) {
//       data[idx] = turn
//       for (let i = 0; i < aw.length; i++) {
//         data[aw[i]] = turn
//       }
//       const vv = search(data, opTurn, depth + 1, maxDepth, v)

//       data[idx] = 0
//       for (let i = 0; i < aw.length; i++) {
//         data[aw[i]] = opTurn
//       }
//       if (ab !== null && isSearchMax && vv >= ab) {
//         return vv
//       }
//       if (ab !== null && !isSearchMax && vv <= ab) {
//         return vv
//       }

//       if (isSearchMax) {
//         v = Math.max(v, vv)
//       } else {
//         if (depth === 0 && vv < v) {
//           pidx = idx
//         }
//         v = Math.min(v, vv)
//       }
//     }
//   }
//   if (depth === 0) {
//     return pidx
//   }
//   return v
// }
