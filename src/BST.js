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
  deleteItem(value, root) {
    if (root.left===null||root.left.data===value) {
      root.left = null
    }
    if (root.right===null||root.right.data===value) {
      root.right = null
    }

    else {
      if (value<root.data) {
        this.deleteItem(value, root.left);
      }
      else {
        this.deleteItem(value, root.right);
      }
    }
    // if (root.data === value) {
    //   root = null;
    //   return;
    // }
    // // if (root === null) {
    // //   return;
    // // }
    // else {
    //   if (value < root.data) {
    //     this.deleteItem(value, root.left);
    //   } else if (value > root.data) {
    //     this.deleteItem(value, root.right);
    //   }
    // }
  }
}
