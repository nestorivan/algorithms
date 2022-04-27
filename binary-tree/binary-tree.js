class Node {
  left = null
  right = null

  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree{
  root = null;

  findInsertionPoint(node, data){
    // if data value is less than our current node value 
    //we check if left is empty and insert data
    if(data < node.data && !node.left){
      node.left = new Node(data);
      return;
    } 

    // if data value is less than our current node value
    // and our left node has value , we set node.left as our new current node
    if(data < node.data && node.left){
      return this.findInsertionPoint(node.left, data)
    }

    // if data value is more than our current node value
    // we check if right is empty and insert data
    if(data > node.data && !node.right){
      node.right = new Node(data);
      return
    }

    // if data value is more than our current node value
    // and our right node has value, we set node.right as our new current node
    if(data > node.data && node.right){
      return this.findInsertionPoint(node.right, data)
    }

    // if data is not greater than node.value
    // and data is not lower than node.value 
    // it means is equal , so we skip insertion
    return null
  }

  add(data){
    const root = this.root;
    //if tree is empty we set the node as our root
    if(!root){
      this.root = new Node(data);
      return;
    }

    this.findInsertionPoint(root, data)
  }

  printNode(node){
    // we print node value
    console.log(node.data)

    // if node has left we navigate to it
    if(node.left){
      this.printNode(node.left)
    }
    
    // then if node has right we navigate to it
    if (node.right) {
      this.printNode(node.right)
    }
  }

  getTree(){
    this.printNode(this.root)
  }

  findValue(target, node = null, visited = new Set()){
    node = !node ? this.root : node;

    if(node.data === target){
      console.log(`${target} has been found!`);
      return;
    }

    visited.add(node.data)

    if(node.left)
      this.findValue(target, node.left, visited)

    if(node.right)
      this.findValue(target, node.right, visited)

    return `${target} was not found`
  }
}

module.exports = BinaryTree