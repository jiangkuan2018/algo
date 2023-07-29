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
 * 
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