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
    console.log(this.array.length);
    this.root = this.buildTree(this.array, 0, this.array.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) {
      return null;
    }
    let mid = parseInt((start + end) / 2);
    let root = new Node(array[mid]);
    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
    return root;
  }
  cleanArray(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let duplicatesFreeArray = sortedArray.filter(
      (element, index) => sortedArray.indexOf(element) === index,
    );
    return duplicatesFreeArray;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value, root) {
    if (root === null) {
      return new Node(value, null, null);
    }
    if (root.data === value) {
      return root; //to prevent duplicates
    }
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (value > root.data) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  getSuccessor(curentNode) {
    curentNode = curentNode.right;
    while (curentNode !== null && curentNode.left !== null) {
      curentNode = curentNode.left;
    }
    return curentNode;
  }
  deleteItem(value, root) {
    if (root === null) {
      return root; //base case
    }
    if (value<root.data) {
      root.left = this.deleteItem(value,root.left)
    } else if (value > root.data) {
      root.right = this.deleteItem(value,root.right)//traverse from the root till correct node is reached
    }
    else { //when value is equal to the node's value
      if (root.left===null) {
        return root.right;
      }
      if (root.right===null) {
        return root.left;
      } //cases when there is only single child of the target node
      
      let successor = this.getSuccessor(root);
      root.data = successor.data;
      root.right = this.deleteItem(successor.data, root.right);//case when both childs are present
      
      
      
    }
    return root;

    
  }
  find(value, root) {
    if (root === null) {
      return root;
    }
    if (root.data === value) {
      return root;
    }
    else if (value < root.data) {
      return this.find(value, root.left);
    }
    else if (value > root.data) {
      return this.find(value, root.right);
    }
  }
}
