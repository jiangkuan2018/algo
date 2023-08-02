import { getIntersectionNode, createLinkedListFromArray, removeNthFromEnd, reverseList, oddEvenList, toArray as linkedListToArray, removeElements, isPalindrome } from '../index.js'
import { log } from 'console'

log('相交链表')
const l1 = createLinkedListFromArray([1, 9, 1])
const l2 = createLinkedListFromArray([3])
const l3 = createLinkedListFromArray([2, 4])
l1.at(2).next = l3.head
l2.at(0).next = l3.head
log(getIntersectionNode(l1.head, l2.head))
log('====================================')

log('删除倒数第N个节点')
const l4 = createLinkedListFromArray([1,2,3,4,5])
log(removeNthFromEnd(l4.head, 2))
const l5 = createLinkedListFromArray([1,2])
log(removeNthFromEnd(l5.head, 2))
log('====================================')

log('删除节点')
log(linkedListToArray(removeElements(createLinkedListFromArray([1,2,6,3,4,5,6]).head, 6)))
log(linkedListToArray(removeElements(createLinkedListFromArray([7,7,7,7]).head, 7)))
log('====================================')

log('反转链表')
log(reverseList(createLinkedListFromArray([1, 2, 3, 4, 5]).head))
log('====================================')

log('奇偶链表')
log(linkedListToArray(oddEvenList(createLinkedListFromArray([1, 2, 3, 4, 5, 6, 7, 8]).head)))
log('====================================')

log('回文链表')
console.log(isPalindrome(createLinkedListFromArray([1, 2, 2, 1]).head))
console.log(isPalindrome(createLinkedListFromArray([1, 2]).head))
console.log(isPalindrome(createLinkedListFromArray([1]).head))
log('====================================')
