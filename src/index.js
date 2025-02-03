
import { Tree } from "./BST";
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// const tree1 = new Tree([1,2,3,4,5]);
console.log(tree);
// console.log(tree1.root);
// tree.insert(15,tree.root)
// tree.deleteItem(7,tree.root)
// tree.deleteItem(15,tree.root)
// tree.deleteItem(3,tree.root) 
// tree.deleteItem(8, tree.root)
// let f67 = tree.find(67, tree.root);
// console.log(f67);
console.log(tree.find(324, tree.root));
tree.prettyPrint(tree.root);
console.log(tree);
// console.log(tree1.insert(6));

