import { levelOrder, createTreeFromArray, createTreeFromHeight } from "../index.js"



// console.log(levelOrder(createTreeFromHeight(3)))
// const root = createTreeFromArray([3,9,20,null,null,15,7])
const root = createTreeFromArray([1,2,3,4,null,null,5])
// const root = createTreeFromArray([3,9,20,null,111,null,7])
console.log(JSON.stringify(root))
console.log(levelOrder(root))