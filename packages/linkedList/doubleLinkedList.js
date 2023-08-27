export class DoublyListNode {
  /**
   * @description 双链表节点
   * @param {number} val 
   * @param {DoublyListNode | null} next 
   * @param {DoublyListNode | null} prev 
   */
  constructor(val = 0, next = null, prev = null) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}

export class DoublyLinkedList {
  constructor() {
    this.dummyHead = new DoublyListNode(Infinity)
    this.dummyTail = new DoublyListNode(-Infinity)
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
    this.size = 0
  }
  /**
   * 头部插入节点
   * @param {number} val 
   */
  addAtHead(val) {
    const node = new DoublyListNode(val, this.dummyHead.next, this.dummyHead)
    if (this.dummyHead.next) {
      this.dummyHead.next.prev = node
    }
    this.dummyHead.next = node
    this.size += 1
  }
  /**
   * @description 尾部插入
   * @param {number} val 
   */
  addAtTail(val) {
    const node = new DoublyListNode(val, this.dummyTail, this.dummyTail.prev)
    if (this.dummyTail.prev) {
      this.dummyTail.prev.next = node
    }
    this.dummyTail.prev = node
    this.size += 1
  }
  /**
   * @callback iter
   * @param {DoublyListNode} cur
   * @param {number} index
   */
  /**
   * @description 遍历
   * @param {iter} iter - 链表迭代器
   */
  forEach(iter = (cur, index) => {}) {
    if (this.size === 0) {
      return
    }
    let current = this.dummyHead.next
    let i = 0
    while (current) {
      iter(current, i)
      if (current.next === this.dummyTail) {
        current = null
      } else {
        i += 1
        current = current.next
      }
    }
  }
  /**
   * @description 根据指定位置插入
   * @param {number} index 
   * @param {number} val 
   */
  addAtIndex(index, val) {
    if (index === this.size) {
      return this.addAtTail(val)
    } else {
      this.forEach((cur, idx) => {
        if (index === idx) {
          const node = new DoublyListNode(val, cur, cur.prev)
          if (cur.prev) {
            cur.prev.next = node
          }
          cur.prev = node
          this.size += 1
        }
      })
    }
  }
  /**
   * @description 返回指定下标的val
   * @param {number} index 
   * @returns {number}
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
   * @description 删除指定下标的节点
   * @param {number} index 
   */
  deleteAtIndex(index) {
    this.forEach((cur, idx) => {
      if (index === idx) {
        if (cur.prev) {
          cur.prev.next = cur.next
        }
        if (cur.next) {
          cur.next.prev = cur.prev
        }
        this.size -= 1
      }
    })
  }
}
