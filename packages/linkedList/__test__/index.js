import { getIntersectionNode, createLinkedListFromArray } from '../index'

const l1 = createLinkedListFromArray([1, 9, 1])
const l2 = createLinkedListFromArray([3])
const l3 = createLinkedListFromArray([2, 4])

l1.at(2).next = l3.head
l2.at(0).next = l3.head


const res = getIntersectionNode(l1.head, l2.head)
console.log('getIntersectionNode', res)