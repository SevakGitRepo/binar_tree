import Node from "./Node.js";


class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root === null) {
            this.root = new Node(data);
        } else {
            this.insertNode(this.root, new Node(data));
        }
    }

    insertNode(node, newNode) {
        if (node.data > newNode.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }


    delete(deleteDta) {
        this.root = this.removeNode(this.root, deleteDta);
    }

    removeNode(node, deleteDta) {
        if (node === null)
            return null;

        else if (deleteDta < node.data) {
            node.left = this.removeNode(node.left, deleteDta);
            return node;
        } else if (deleteDta > node.data) {
            node.right = this.removeNode(node.right, deleteDta);
            return node;
        }


        else {
            // Node life chuni
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // ete dzax@ null e
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }


            let temp = this.lastLeftNode(node.right);
            node.data = temp.data;

            node.right = this.removeNode(node.right, temp.data);
            return node;
        }

    }



    lastLeftNode(node){
        while (node.left !==null){
            node = node.left;
        }
        return node;

    }

    //DEPTH FIRST 3 tesak
    //1 left root right
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        } else {
            return;
        }
    }

    //2 root left right
    preOrderTraversal(node) {
        if (node === null) {
            return;
        } else {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    //3 left, right, root
    postOrderTraversal(node) {
        if (node === null) {
            return;
        } else {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.data);
        }
    }

     //Breadth first 1 tesak
    //level order makardaknerov
    levelOrderTraversal(node) {

        if (!node) {
            return;
        }
        const listData = [];
        let queue = [node];
        while (queue.length) {
            let length = queue.length


            for (let i = 0; i < length; i++) {
                let queueFirstNode = queue.shift();

                if (queueFirstNode.left) {
                    queue.push(queueFirstNode.left);
                }
                if (queueFirstNode.right) {
                    queue.push(queueFirstNode.right);
                }

                listData.push(queueFirstNode.data);
            }

        }

        listData.forEach(data => console.log(data));

    }
}

export default BinaryTree;