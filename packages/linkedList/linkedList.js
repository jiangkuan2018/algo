export class SingleListNode {
  /**
   * @param {number} val 
   * @param {object} next
   */
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next 
  }
}

export class LinkedList {
  constructor() {
    /**
     * 头节点
     */
    this.head = null
    this.size = 0
  }
  /**
   * @callback iter
   * @param {SingleListNode} cur
   * @param {number} index
   */
  /**
   * @description 遍历
   * @param {iter} iter - 链表迭代器
   */
  forEach(iter = (cur, index) => {}) {
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
   * @param {number} val 
   */
  addAtHead(val) {
    const head = new SingleListNode(val, this.head)
    this.head = head
    this.size += 1
  }
  /**
   * @description 末尾插入
   * @param {number} val 
   */
  addAtTail(val) {
    if (this.size === 0) {
      return this.addAtHead(val)
    } else {
      /**
       * @type {SingleListNode}
       */
      let last
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
  addAtIndex(index, val) {
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
  at(index) {
    if (index > this.size - 1 || index < 0) {
      throw new Error('index not legal')
    }
    if (this.size === 0) {
      throw new Error('linked list is empty')
    }
    /** @type {SingleListNode} */
    let res
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
  get(index) {
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
  deleteAtIndex(index) {
    if (index === 0) {
      if (this.head instanceof SingleListNode) {
        this.head = this.head.next
      }
    } else {
      /** @type {SingleListNode} */
      let cur = this.head
      let prev = null
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
