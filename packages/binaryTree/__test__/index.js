import { levelOrder, createTreeFromArray, isSymmetric, hasPathSum, createTreeFromArray2 } from "../index.js"
import { log } from 'console'


log('层序遍历')
log(levelOrder(createTreeFromArray([1,2,3,4,null,null,5])))
log('=============================')


log('对称二叉树')
log(isSymmetric(createTreeFromArray([1,2,2,3,4,4,3])))
log(isSymmetric(createTreeFromArray([1,2,2,null,3,null,3])))
log(isSymmetric(createTreeFromArray([1,2,3])))
log('=============================')

log('路径总和')
log(hasPathSum(createTreeFromArray([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22))
log(hasPathSum(createTreeFromArray([1, 2, 3]), 5))
log(hasPathSum(createTreeFromArray([1]), 1))
log(hasPathSum(createTreeFromArray([1,2,null,3,null,4,null,5]), 1))
log('=============================')

console.log(
  JSON.stringify(createTreeFromArray2([1, 2, 3, 4, 5, 6, 7]))
)