import BinaryTree from "./BinaryTree.js";

let binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(9);
binaryTree.insert(10);
binaryTree.insert(12);
binaryTree.insert(45);
binaryTree.insert(89);
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(6);
console.log("IN Order Traversal");
binaryTree.inOrderTraversal(binaryTree.root);
console.log("Pre Order Traversal");
binaryTree.preOrderTraversal(binaryTree.root);
console.log("Post Order Traversal");
binaryTree.postOrderTraversal(binaryTree.root);
console.log("Level Order Traversal")
binaryTree.levelOrderTraversal(binaryTree.root);

binaryTree.delete(5);
binaryTree.delete(9);
binaryTree.delete(2);
binaryTree.delete(5);
binaryTree.delete(900);
binaryTree.delete(45);
binaryTree.delete(10);
binaryTree.delete(7);

console.log("Delete")
binaryTree.levelOrderTraversal(binaryTree.root);
