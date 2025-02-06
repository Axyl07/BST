
import { Tree } from "./BST.js";

function generateRandomArray(max,min=0) {
    let array = [];
    for (let index = min; index < max; index++) {
        array.push(Math.floor(Math.random()*max))    
    }
    return array;
}

console.log(generateRandomArray(10));

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// const tree1 = new Tree([1,2,3,4,5]);
console.log(tree);
// console.log(tree1.root);

// tree.deleteItem(8)
tree.insert(45645)
tree.insert(45646)
tree.insert(45647)
tree.insert(45648)
tree.insert(45649)
tree.insert(6)
tree.insert(2)
tree.insert(0)
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
// console.log(tree.height(tree.root));
// console.log(tree.height(f67));
// console.log(tree.height(tree.find(4)));
console.log(tree.isBalanced());
tree.prettyPrint(tree.root);
tree.rebalance();
console.log(tree.isBalanced());
tree.prettyPrint(tree.root);
console.log(tree.depth(f6345));

console.log(tree);


