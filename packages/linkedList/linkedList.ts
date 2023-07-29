export type SingleNodePointer = SingleListNode | null

export class SingleListNode {
  val: number
  next: SingleNodePointer
  constructor(val: number, next: SingleNodePointer) {
    this.val = val
    this.next = next 
  }
}

export class LinkedList {
  head: SingleNodePointer
  size: number
  constructor() {
    /**
     * 头节点
     */
    this.head = null
    this.size = 0
  }
  forEach(iter = (cur: SingleListNode, index: number) => {}) {
    let current = this.head
    let idx = 0
    while (current) {
      iter(current, idx)
      current = current.next
      idx += 1
    }
  }
  /**
   * @description 头节点插入
   */
  addAtHead(val: number) {
    const head = new SingleListNode(val, this.head)
    this.head = head
    this.size += 1
  }
  /**
   * @description 末尾插入
   * @param {number} val 
   */
  addAtTail(val: number) {
    if (this.size === 0) {
      return this.addAtHead(val)
    } else {
      /**
       * @type {SingleListNode}
       */
      let last: SingleListNode
      this.forEach((cur, index) => {
        last = cur
      })
      // @ts-ignore
      last.next = new SingleListNode(val)
      this.size += 1
    }
  }
  /**
   * @description 指定位置插入
   * @param {number} index 
   * @param {number} val 
   */
  addAtIndex(index: number, val: number) {
    if (index === 0) {
      return this.addAtHead(val)
    } else {
      this.forEach((cur, idx) => {
        if (index - 1 === idx) {
          const prev = cur
          const node = new SingleListNode(val, prev.next)
          prev.next = node
          this.size += 1
        }
      })
    }
  }
  /**
   * 
   * @param {number} index 
   * @returns {SingleListNode}
   */
  at(index: number): SingleListNode {
    if (index > this.size - 1 || index < 0) {
      throw new Error('index not legal')
    }
    if (this.size === 0) {
      throw new Error('linked list is empty')
    }
    let res: SingleListNode
    this.forEach((cur, idx) => {
      if (index === idx) {
        res = cur
      }
    })
    // @ts-ignore
    return res
  }
  /**
   * @description 根据下标返回节点的val
   * @param {number} index
   */
  get(index: number) {
    let res = -1
    this.forEach((cur, idx) => {
      if (index === idx) {
        res = cur.val
      }
    })
    return res
  }
  /**
   * @description 删除指定位置的节点 双指针删除
   * @param {number} index 
   */
  deleteAtIndex(index: number) {
    if (index === 0) {
      if (this.head instanceof SingleListNode) {
        this.head = this.head.next
      }
    } else {
      let cur = this.head
      let prev: SingleNodePointer = null
      let idx = 0
      while (cur) {
        if (index === idx) {
          if (prev instanceof SingleListNode) {
            prev.next = cur.next
          }
        }
        prev = cur
        cur = cur.next
        idx += 1
      }
    }
  }
}
