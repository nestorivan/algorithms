const BinaryTree = require("./binary-tree")

const tree = new BinaryTree()

tree.add(10);
tree.add(20);
tree.add(25);
tree.add(30);
tree.add(7);
tree.add(3);
tree.add(1)

// tree.getTree()

//       10
//     /    \
//    7     20
//  / \    / \
// 3   1  25  30


console.log(tree.findValue(1))
console.log(tree.findValue(5))