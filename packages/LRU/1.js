class LRU {
  /**
   * @param {number} capacity 
   */
  constructor(capacity) {
    this.capacity = capacity
    this.stack = []
    this.map = {}
  }
  /**
   * @param {number} key 
   */
  get(key) {
    if (this.map[key] !== undefined) {
      const idx = this.stack.findIndex(v => v.key === key)
      this.stack.splice(idx, 1)
      const value = this.map[key]
      this.stack.unshift({key, value})
      return value
    }
    return -1
  }
  /**
   * @param {number} key 
   */
  active(key) {

  }
  /**
   * @param {number} key 
   * @param {number} value 
   */
  put(key, value) {
    if (this.map[key] !== undefined) {
      const idx = this.stack.findIndex(v => v.key === key)
      this.stack[idx].value = value
      this.stack.splice(idx, 1)
      this.stack.unshift({key, value})
    } else {
      if (this.stack.length >= this.capacity) {
        const disuse = this.stack.pop()
        delete this.map[disuse.key]
      }
      this.stack.unshift({key, value})
    }
    this.map[key] = value
  }
}

const lru = new LRU(2)
// lru.put(1, 1)
// lru.put(2, 2)
// lru.put(3, 3)
// lru.put(4, 4)
// lru.put(5, 5)
// // console.log(lru.get(1))
// console.log(lru.get(3))
// "get","put","get","put","put","get","get"
// [2],  [2,6], [1], [1,5], [1,2],[1],  [2]

// console.log(lru.get(2)) // -1
// lru.put(2, 6) // [{2,6}]
// console.log(lru.get(1)) // -1
// lru.put(1, 5) // [{1,5},{2,6}]
// lru.put(1, 2) // [[]]
// console.log(lru.get(1))
// console.log(lru.get(2))

lru.put(2, 1)
lru.put(1, 1)
lru.put(2, 3)
lru.put(4, 1)
console.log(lru.get(1))
console.log(lru.get(2))

console.log(lru.stack)
console.log(lru.map)