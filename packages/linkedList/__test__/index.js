import { getIntersectionNode, createLinkedListFromArray, removeNthFromEnd, reverseList } from '../index.js'

const l1 = createLinkedListFromArray([1, 9, 1])
const l2 = createLinkedListFromArray([3])
const l3 = createLinkedListFromArray([2, 4])

// l1.at(2).next = l3.head
// l2.at(0).next = l3.head

// const res = getIntersectionNode(l1.head, l2.head)
// console.log('getIntersectionNode', res)

// const l4 = createLinkedListFromArray([1,2,3,4,5])
// const res2 = removeNthFromEnd(l4.head, 2)
// const l5 = createLinkedListFromArray([1,2])
// const res3 = removeNthFromEnd(l5.head, 2)
// console.log(res3)

console.log(reverseList(createLinkedListFromArray([1, 2, 3, 4, 5]).head))