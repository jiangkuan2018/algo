class DlinkedNode {
  /**
   * 
   * @param {number} key 
   * @param {number} value 
   */
  constructor(key = -1, value = -1) {
    this.prev = null
    this.next = null
    this.key = key
    this.value = value
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = {}
  this.head = new DlinkedNode()
  this.tail = new DlinkedNode()
  this.head.next = this.tail
  this.tail.prev = this.head
  this.capacity = capacity
  this.size = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache[key] === undefined) {
    return -1
  } else {
    const target = this.cache[key]
    this.moveToHead(target)
    return target.value
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache[key] === undefined) {
    const node = new DlinkedNode(key, value)
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
    this.cache[key] = node
    this.size += 1
    if (this.size > this.capacity) {
      const last = this.tail.prev
      this.tail.prev = last.prev
      this.tail.prev.next = this.tail
      delete this.cache[last.key]
      this.size -= 1
    }
  } else {
    const target = this.cache[key]
    target.value = value
    this.moveToHead(target)
  }
}

/**
 * @param {DlinkedNode} node 
 */
LRUCache.prototype.moveToHead = function(node) {
  // 把在双链表中删除自己
  node.prev.next = node.next
  node.next.prev = node.prev
  // 添加到头部
  node.prev = this.head
  node.next = this.head.next
  this.head.next.prev = node
  this.head.next = node
}

const lru = new LRUCache(2)

// "put","put","get","put","get","put","get","get","get"
// [1,1],[2,2], [1], [3,3], [2],  [4,4],[1],  [3],  [4]

lru.put(1, 1)
lru.put(2, 2)
console.log(lru.get(1))
lru.put(3, 3)
console.log(lru.get(2))
lru.put(4,4)
console.log(lru.get(1))
console.log(lru.get(3))
console.log(lru.get(4))
// lru.
// lru.put(4, 4) // new
// lru.put(3, 3)

function logLink(head) {
  let current = head
  const ans = []
  while (current) {
    ans.push({key: current.key, value: current.value})
    current = current.next
  }
  console.log(ans)
}

logLink(lru.head)


