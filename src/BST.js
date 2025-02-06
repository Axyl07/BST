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

  insert(value, root = this.root) {
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
    // curentNode = curentNode.right;
    // while (curentNode !== null && curentNode.left !== null) {
    //   curentNode = curentNode.left;
    // }
    // return curentNode;
    curentNode = curentNode.right;
    while (curentNode.left != null && curentNode != null) {
      curentNode = curentNode.left;
    }
    return curentNode;
  }

  deleteItem(value, root = this.root) {
    if (root === null) {
      return root;
    }
    if (value < root.data) {
      root.left = this.deleteItem(value, root.left);
    } else if (value > root.data) {
      root.right = this.deleteItem(value, root.right);
    } else {
      if (value === root.data) {
        if (root.left === null && root.right === null) {
          root = null;
          return root; //for leaf node
        }
        if (root.left === null) {
          return root.right; //if only right child is present
        }
        if (root.right === null) {
          return root.left; //if only left child is present
        } else if (root.right !== null && root.left !== null) {
          //when both childs are present
          const successor = this.getSuccessor(root);
          root.data = successor.data;
          root.right = this.deleteItem(successor.data, root.right);
        }
      }
    }
    return root; //return the current root node to bubble up for recursion calls
  }
  find(value, root = this.root) {
    if (root === null) {
      return root;
    }
    if (root.data === value) {
      return root;
    } else if (value < root.data) {
      return this.find(value, root.left);
    } else if (value > root.data) {
      return this.find(value, root.right);
    }
  }
  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback is required");
    } else {
      let queue = [];
      const rootNode = this.root;
      queue.push(rootNode);
      while (queue.length !== 0) {
        let currentNode = queue[0];
        callback(currentNode);
        if (currentNode.left != null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right != null) {
          queue.push(currentNode.right);
        }
        queue.shift();
      }
    }
  }
  preOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Callback is required");
    } else {
      if (node === null) {
        return;
      }
      callback(node);
      this.preOrder(callback, node.left);
      this.preOrder(callback, node.right);
    }
  }
  inOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Callback is required");
    } else {
      if (node === null) {
        return;
      }
      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);
    }
  }
  postOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Callback is required");
    } else {
      if (node === null) {
        return;
      }
      this.postOrder(callback, node.left);
      this.postOrder(callback, node.right);
      callback(node);
    }
  }

  height(node) {
    if (node === null) {
      return 0;
    }
    let leftHeight = 0;
    let rightHeight = 0;
    if (node.left !== null) {
    while (node.left !== null) {
      leftHeight++;
      node = node.left;
    }
    while (node.right !== null) {
      leftHeight++;
      node = node.right;
    }
    }
    
    if (node.right !== null) {
    while (node.right !== null) {
      rightHeight++;
      node = node.right;
    }
    while (node.left !== null) {
      rightHeight++;
      node = node.left;
    }
    }
    let maxHeight = Math.max(leftHeight, rightHeight)+1;
    return maxHeight; 
  }
  depth(node,rootNode = this.root,d =0) {
    if (node.data === rootNode.data) {
      return d;
    }
    if (rootNode===null) {
      return;
    }
    else if (node.data < rootNode.data) {
      d++;
      return this.depth(node,rootNode.left,d)
    }
    else if (node.data > rootNode.data) {
      d++;
      return this.depth(node,rootNode.right,d)
    }
    return d;
  }
  isBalanced() {
    this.levelOrder((node) => {
      let leftHeight = this.height(node.left) ;
      let rightHeight = this.height(node.right);
      let difference = leftHeight - rightHeight;
      if (difference > 1) {
        return false;
      }  
    })
    return true;
    }
  rebalance() {
    let sortedArray = [];
    this.inOrder((node) => {
      sortedArray.push(node.data)
    })
    console.log(sortedArray);
    this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1);
    }
  }
