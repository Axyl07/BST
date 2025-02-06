
import { Tree } from "./BST";
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// const tree1 = new Tree([1,2,3,4,5]);
console.log(tree);
// console.log(tree1.root);

// tree.deleteItem(8)
tree.insert(15)
// tree.deleteItem(15)
// tree.deleteItem(3) 
let f67 = tree.find(67);
let f6345 = tree.find(6345);
console.log(f67);
console.log(tree.find(324, tree.root));

// tree.levelOrder((node) => {
//     console.log(node.data);
// });

tree.preOrder((node) => {
    console.log(node.data);
})

tree.inOrder((node) => {
    console.log(node.data);
})

tree.postOrder((node) => {
    console.log(node.data);
})

console.log(tree.height(f67));
console.log(tree.depth(f6345));
// console.log(tree.isBalanced());
tree.prettyPrint(tree.root);

console.log(tree);


