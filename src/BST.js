// export default function () {
//   return console.log("is this working>/?");
// }
export class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class Tree {
  constructor(array) {
    this.array = this.cleanArray(array);
    console.log(this.array);
    let root = this.buildTree(this.array,0,this.array.length-1);
    console.log(root);
  }

  buildTree(array, start, end) {
  if (start>end) {
    return null;
  }
  let mid = parseInt((start + end) / 2); 
  let root = new Node(array[mid]);
  root.left = this.buildTree(array, start, mid-1);
  root.right = this.buildTree(array, mid + 1, end);
  return root;
}
cleanArray(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let duplicatesFreeArray = sortedArray.filter(
    (element, index) => sortedArray.indexOf(element) === index);
  return duplicatesFreeArray;
}
}