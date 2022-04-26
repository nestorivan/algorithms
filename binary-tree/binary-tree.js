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

  findInsertPoint(node, data){
    // if data value is less than our current node value 
    //we check if left is empty and insert data
    if(data < node.data && !node.left){
      node.left = new Node(data);
      return;
    } 

    // if data value is less than our current node value
    // and our left node has value , we set node.left as our new current node
    if(data < node.data && node.left){
      return this.findInsertPoint(node.left, data)
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
      return this.findInsertPoint(node.right, data)
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

    this.findInsertPoint(root, data)
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

}

module.exports = BinaryTree