import { LinkedList, SingleListNode } from "./linkedList.js"

/**
 * @description 使用数组创建链表
 * @param {Array<number>} arr 
 * @returns {LinkedList}
 */
export function createLinkedListFromArray(arr) {
  const l = new LinkedList()
  arr.forEach((v) => {
    l.addAtTail(v)
  })
  return l
}

/**
 * @description 判断链表是否有环
 * @param {SingleListNode | null} head 
 * @returns {boolean}
 */
export function hasCycle(head) {
  let res = false
  let slow = head // 起步
  let fast = head
  while (slow && fast) { // 如果slow和fast有一个是null或者undefined 说明循环到末尾了
    fast = fast.next?.next // fast领先slow一个节点
    slow = slow.next // slow = slow.next
    if (slow === fast) {
      // 如果在环内绕了N圈，那么fast一定会追上slow
      // 因为每过一圈fast就领先slow一个节点
      res = true
      break
    }
  }
  return res
}

/**
 * 找到链表入环的第一个节点
 * @param {SingleListNode} head
 * @returns {SingleListNode | null}
 */
export function detectCycle(head) {
  let slow = head
  let fast = head
  let res = null
  while (slow && fast) {
    fast = fast.next?.next
    slow = slow.next
    if (fast === slow) {
      fast = head
      break
    }
  }
  while (slow && fast) {
    if (slow === fast) {
      res = fast
      break
    }
    slow = slow.next
    fast = fast.next
  }
  return res
}

/**
 * 找到两个链表相交的节点
 * @param {SingleListNode} headA 
 * @param {SingleListNode} headB 
 * @returns {SingleListNode | null}
 */
export function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let [pA, pB] = [headA, headB]
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}

/**
 * 删除倒数第N个
 * @param {SingleListNode} head 
 * @param {number} n 
 * @returns {SingleListNode}
 */
export function removeNthFromEnd(head, n) {
  if (head === null) {
    return head
  }
  let slow = head
  let fast = head
  let pre = null
  let idx = 0
  while (fast) {
    if (idx >= n) {
      pre = slow
      slow = slow.next
    }
    idx += 1
    fast = fast.next
  }
  if (pre === null) {
    return head.next
  } else {
    pre.next = pre.next.next
  }
  return head
}

/**
 * 
 * @param {SingleListNode} head 
 * @returns {SingleListNode}
 */
export function reverseList(head) {
  let curr = head
  let prev = null
  while (curr) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  // @ts-ignore
  return prev
}

/**
 * @callback iter
 * @param {SingleListNode} cur
 * @param {number} index
 */
/**
 * 
 * @param {SingleListNode} head 
 * @param {iter} iter 
 */
export function forEach(head, iter) {
  let current = head
  let idx = 0
  while (current) {
    iter(current, idx)
    current = current.next
    idx += 1
  }
}

/**
 * 
 * @param {SingleListNode} head 
 */
export function toArray(head) {
  const res = []
  forEach(head, (v, i) => {
    res.push(v.val)
  })
  return res
}

/**
 * 删除链表的节点
 * @param {SingleListNode} head 
 * @param {number} val 
 * @returns {SingleListNode}
 */
export function removeElements(head, val) {
  let current = head
  let prev = null
  while (current) {
    if (current.val === val) {
      if (prev) {
        prev.next = current.next
      } else {
        head = current.next
      }
      // 如果需要删除当前节点，不修改prev   p => c => n
      // 因为 c等于val的时候p.next = n 然后current等于n，继续检查n，如果n也等于val，那么prev还是不变
    } else {
      prev = current
    }
    current = current.next
  }
  return head
}

/**
 * 奇偶链表
 * @param {SingleListNode} head 
 */
export function oddEvenList(head) {
  if (head === null) {
    return head
  }
  let current = head
  let idx = 0
  let prev = null
  const odd = []
  while (current) {
    if (idx % 2 === 1) {
      if (prev) {
        prev.next = current.next // 删掉奇数位的节点
      }
      odd.push(current) // 记录奇数位的节点
      // 当不满足条件的时候 再让prev记录   
      // 当满足条件的时候 不改变prev，因为需要prev记录最后一个奇数位的节点
    } else {
      prev = current
    }
    current = current.next
    idx += 1
  }
  // @ts-ignore
  current = prev // 从最后一个节点向后关联odd的节点
  while (current) {
    const node = odd.shift() || null
    current.next = node
    // @ts-ignore
    current = node
  }
  return head
}

